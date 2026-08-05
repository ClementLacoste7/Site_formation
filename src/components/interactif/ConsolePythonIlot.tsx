import { useEffect, useRef, useState } from 'react';
import EditeurCodeMirror from './EditeurCodeMirror';
import SortieExecution, { type LigneConsole } from './SortieExecution';
import { useTranslations } from '../../i18n/utils';

interface Props {
  codeInitial?: string;
}

type Etat = 'inactif' | 'chargement' | 'pret' | 'execution';

const DELAI_MAX_MS = 10_000;

export default function ConsolePythonIlot({ codeInitial = '' }: Props) {
  const t = useTranslations();
  const [etat, setEtat] = useState<Etat>('inactif');
  const [code, setCode] = useState(codeInitial);
  const [lignes, setLignes] = useState<LigneConsole[]>([]);
  const workerRef = useRef<Worker | null>(null);
  const minuteurRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(
    () => () => {
      workerRef.current?.terminate();
      clearTimeout(minuteurRef.current);
    },
    []
  );

  function creerWorker() {
    // Le fichier worker n'est récupéré qu'à l'instanciation : Vite le
    // découpe en chunk séparé, jamais chargé avant ce point. Pyodide exige
    // un contexte module (il échoue explicitement dans un worker classique).
    const worker = new Worker(new URL('./pyodide.worker.ts', import.meta.url), {
      type: 'module'
    });
    worker.onmessage = (evenement) => {
      const { type } = evenement.data;
      if (type === 'pret') {
        setEtat('pret');
      } else if (type === 'sortie') {
        setLignes((l) => [
          ...l,
          { type: evenement.data.flux === 'stderr' ? 'error' : 'log', texte: evenement.data.texte }
        ]);
      } else if (type === 'termine') {
        clearTimeout(minuteurRef.current);
        setEtat('pret');
      } else if (type === 'erreur') {
        clearTimeout(minuteurRef.current);
        setLignes((l) => [...l, { type: 'error', texte: evenement.data.texte }]);
        setEtat('pret');
      }
    };
    workerRef.current = worker;
    return worker;
  }

  function lancerEnvironnement() {
    setEtat('chargement');
    const worker = creerWorker();
    worker.postMessage({ type: 'init' });
  }

  function executer() {
    if (!workerRef.current) return;
    setEtat('execution');
    workerRef.current.postMessage({ type: 'executer', code });
    // Le worker exécute de façon synchrone/coopérative : s'il ne répond pas
    // dans le délai, on ne peut pas l'interrompre autrement qu'en le tuant.
    minuteurRef.current = setTimeout(() => {
      workerRef.current?.terminate();
      workerRef.current = null;
      setLignes((l) => [...l, { type: 'error', texte: t.consolePython.delaiDepasse }]);
      setEtat('inactif');
    }, DELAI_MAX_MS);
  }

  if (etat === 'inactif') {
    return (
      <div
        className="not-prose rounded-lg border p-4 text-center"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        <button
          type="button"
          onClick={lancerEnvironnement}
          className="rounded px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--couleur-accent)' }}
        >
          {t.consolePython.lancer}
        </button>
      </div>
    );
  }

  if (etat === 'chargement') {
    return (
      <div
        className="not-prose flex items-center gap-3 rounded-lg border p-4"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        <span
          className="h-4 w-4 animate-spin rounded-full border-2"
          style={{ borderColor: 'var(--couleur-accent)', borderTopColor: 'transparent' }}
        />
        <p className="text-sm" style={{ color: 'var(--couleur-texte-attenue)' }}>
          {t.consolePython.chargement}
        </p>
      </div>
    );
  }

  return (
    <div
      className="not-prose overflow-hidden rounded-lg border"
      style={{ borderColor: 'var(--couleur-bordure)' }}
    >
      <EditeurCodeMirror valeur={code} langage="python" onChange={setCode} />
      <div className="flex justify-end border-t p-2" style={{ borderColor: 'var(--couleur-bordure)' }}>
        <button
          type="button"
          onClick={executer}
          disabled={etat === 'execution'}
          className="rounded px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: 'var(--couleur-accent)' }}
        >
          {etat === 'execution' ? t.consolePython.execution : t.consolePython.executer}
        </button>
      </div>
      <div style={{ borderTop: '1px solid var(--couleur-bordure)' }}>
        <SortieExecution lignes={lignes} texteVide={t.consolePython.consoleVide} />
      </div>
    </div>
  );
}
