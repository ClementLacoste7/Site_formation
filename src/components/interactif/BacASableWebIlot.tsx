import { useCallback, useEffect, useRef, useState } from 'react';
import EditeurCode, { type OngletFichier } from './EditeurCode';
import SortieExecution, { type LigneConsole } from './SortieExecution';

interface Props {
  html?: string;
  css?: string;
  js?: string;
}

const ONGLETS: OngletFichier[] = [
  { id: 'html', label: 'HTML', langage: 'html' },
  { id: 'css', label: 'CSS', langage: 'css' },
  { id: 'js', label: 'JS', langage: 'javascript' }
];

const SOURCE_MESSAGE = 'bac-a-sable-web';

// Injecté dans le document de l'iframe pour relayer console.log/error/warn
// et les erreurs non interceptées vers la page parente via postMessage.
const SHIM_CONSOLE = `
<script>
(function () {
  var original = { log: console.log, error: console.error, warn: console.warn };
  function relayer(type) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      original[type].apply(console, args);
      try {
        window.parent.postMessage(
          { source: '${SOURCE_MESSAGE}', type: type, texte: args.map(String).join(' ') },
          '*'
        );
      } catch (e) {}
    };
  }
  console.log = relayer('log');
  console.error = relayer('error');
  console.warn = relayer('warn');
  window.addEventListener('error', function (e) {
    window.parent.postMessage({ source: '${SOURCE_MESSAGE}', type: 'error', texte: e.message }, '*');
  });
})();
</script>
`;

function construireDocument(fichiers: Record<string, string>): string {
  return `<!doctype html><html><head><meta charset="utf-8" /><style>${fichiers.css ?? ''}</style></head><body>${fichiers.html ?? ''}${SHIM_CONSOLE}<script>${fichiers.js ?? ''}<\/script></body></html>`;
}

export default function BacASableWebIlot({ html = '', css = '', js = '' }: Props) {
  const fichiersInitiaux = { html, css, js };
  const [fichiers, setFichiers] = useState(fichiersInitiaux);
  const [lignes, setLignes] = useState<LigneConsole[]>([]);
  const [resetCompteur, setResetCompteur] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const delaiRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const executer = useCallback(() => {
    setLignes([]);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = construireDocument(fichiers);
    }
  }, [fichiers]);

  // Résultat en direct avec un anti-rebond de 500 ms (section 8.2 de la spec).
  useEffect(() => {
    clearTimeout(delaiRef.current);
    delaiRef.current = setTimeout(executer, 500);
    return () => clearTimeout(delaiRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fichiers]);

  useEffect(() => {
    function surMessage(evenement: MessageEvent) {
      if (evenement.data?.source === SOURCE_MESSAGE) {
        setLignes((l) => [...l, { type: evenement.data.type, texte: evenement.data.texte }]);
      }
    }
    window.addEventListener('message', surMessage);
    return () => window.removeEventListener('message', surMessage);
  }, []);

  return (
    <div>
      <EditeurCode
        key={resetCompteur}
        onglets={ONGLETS}
        valeurs={fichiers}
        onChangeFichier={(id, valeur) => setFichiers((f) => ({ ...f, [id]: valeur }))}
        onExecuter={executer}
        onReinitialiser={() => {
          setFichiers(fichiersInitiaux);
          setLignes([]);
          setResetCompteur((c) => c + 1);
        }}
      />
      <div
        className="not-prose grid overflow-hidden rounded-b-lg border border-t-0 sm:grid-cols-2"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        <iframe
          ref={iframeRef}
          // Isolation stricte : sandbox="allow-scripts" SANS allow-same-origin.
          // L'iframe est une origine opaque, sans accès au DOM/localStorage parent.
          sandbox="allow-scripts"
          title="Résultat"
          className="h-64 w-full border-b bg-white sm:border-b-0 sm:border-r"
          style={{ borderColor: 'var(--couleur-bordure)' }}
        />
        <div className="h-64">
          <SortieExecution lignes={lignes} />
        </div>
      </div>
    </div>
  );
}
