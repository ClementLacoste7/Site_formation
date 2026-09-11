import { useCallback, useEffect, useRef, useState } from 'react';
import EditeurCode, { type OngletFichier } from './EditeurCode';
import ResultatsTests, { type ResultatTest } from './ResultatsTests';

interface CasDeTest {
  /** Ce que ce cas de test vérifie, affiché à l'apprenant. */
  description: string;
  /** Expression JavaScript évaluée dans l'iframe une fois le code de l'apprenant exécuté. */
  appel: string;
  /** Valeur attendue, sous forme d'une expression JavaScript littérale. */
  attendu: string;
}

interface Props {
  html?: string;
  css?: string;
  js?: string;
  casDeTest: CasDeTest[];
}

const ONGLETS: OngletFichier[] = [
  { id: 'html', label: 'HTML', langage: 'html' },
  { id: 'css', label: 'CSS', langage: 'css' },
  { id: 'js', label: 'JS', langage: 'javascript' }
];

const SOURCE_MESSAGE = 'exercice-web';

// Injecté après le code de l'apprenant : évalue chaque cas de test (écrit
// par l'auteur du chapitre, jamais par l'apprenant) dans le même contexte
// JavaScript que son code HTML/CSS/JS, puis relaie le résultat au parent.
// Comparaison par JSON.stringify plutôt que === : suffisant pour comparer
// des primitives, chaînes, tableaux ou objets simples, ce à quoi ces
// exercices se limitent.
function construireHarnaisTests(casDeTest: CasDeTest[]): string {
  const casJson = JSON.stringify(casDeTest);
  return `
<script>
(function () {
  var resultats = [];
  var casDeTest = ${casJson};
  casDeTest.forEach(function (cas) {
    try {
      var obtenu = eval(cas.appel);
      var attendu = eval(cas.attendu);
      resultats.push({
        description: cas.description,
        reussi: JSON.stringify(obtenu) === JSON.stringify(attendu),
        obtenu: JSON.stringify(obtenu),
        attendu: JSON.stringify(attendu)
      });
    } catch (erreur) {
      resultats.push({
        description: cas.description,
        reussi: false,
        obtenu: 'Erreur : ' + erreur.message,
        attendu: cas.attendu
      });
    }
  });
  try {
    window.parent.postMessage({ source: '${SOURCE_MESSAGE}', resultats: resultats }, '*');
  } catch (e) {}
})();
<\/script>`;
}

function construireDocument(fichiers: Record<string, string>, casDeTest: CasDeTest[]): string {
  return `<!doctype html><html><head><meta charset="utf-8" /><style>${fichiers.css ?? ''}</style></head><body>${fichiers.html ?? ''}<script>${fichiers.js ?? ''}<\/script>${construireHarnaisTests(casDeTest)}</body></html>`;
}

export default function ExerciceWebIlot({ html = '', css = '', js = '', casDeTest }: Props) {
  const fichiersInitiaux = { html, css, js };
  const [fichiers, setFichiers] = useState(fichiersInitiaux);
  const [resultats, setResultats] = useState<ResultatTest[] | null>(null);
  const [resetCompteur, setResetCompteur] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const delaiRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const executer = useCallback(() => {
    setResultats(null);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = construireDocument(fichiers, casDeTest);
    }
  }, [fichiers, casDeTest]);

  // Résultat en direct avec un anti-rebond de 500 ms, comme BacASableWeb.
  useEffect(() => {
    clearTimeout(delaiRef.current);
    delaiRef.current = setTimeout(executer, 500);
    return () => clearTimeout(delaiRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fichiers]);

  useEffect(() => {
    function surMessage(evenement: MessageEvent) {
      if (evenement.data?.source === SOURCE_MESSAGE) {
        setResultats(evenement.data.resultats);
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
          setResultats(null);
          setResetCompteur((c) => c + 1);
        }}
      />
      <div
        className="not-prose overflow-hidden rounded-b-lg border border-t-0"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        <iframe
          ref={iframeRef}
          // Isolation stricte : sandbox="allow-scripts" SANS allow-same-origin.
          // L'iframe est une origine opaque, sans accès au DOM/localStorage parent.
          sandbox="allow-scripts"
          title="Résultat"
          className="h-48 w-full border-b bg-white"
          style={{ borderColor: 'var(--couleur-bordure)' }}
        />
        <ResultatsTests resultats={resultats} />
      </div>
    </div>
  );
}
