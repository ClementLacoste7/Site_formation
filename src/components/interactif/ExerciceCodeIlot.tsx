import { useEffect, useRef, useState } from 'react';
import EditeurCodeMirror from './EditeurCodeMirror';
import { useTranslations } from '../../i18n/utils';

interface CasDeTest {
  description: string;
  appel: string;
  attendu: string;
}

interface ResultatTest {
  description: string;
  reussi: boolean;
  obtenu: string;
  attendu: string;
}

interface Props {
  codeInitial: string;
  casDeTest: CasDeTest[];
}

type Etat = 'inactif' | 'chargement' | 'pret' | 'execution';

const DELAI_MAX_MS = 10_000;

export default function ExerciceCodeIlot({ codeInitial, casDeTest }: Props) {
  const t = useTranslations();
  const [etat, setEtat] = useState<Etat>('inactif');
  const [code, setCode] = useState(codeInitial);
  const [resultats, setResultats] = useState<ResultatTest[] | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
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
    // Même worker que ConsolePython : voir pyodide.worker.ts pour le detail
    // du message "executer_exercice" qui exécute le code de l'apprenant
    // puis les cas de test définis par le chapitre.
    const worker = new Worker(new URL('./pyodide.worker.ts', import.meta.url), {
      type: 'module'
    });
    worker.onmessage = (evenement) => {
      const { type } = evenement.data;
      if (type === 'pret') {
        setEtat('pret');
      } else if (type === 'resultats_exercice') {
        clearTimeout(minuteurRef.current);
        setResultats(evenement.data.resultats);
        setEtat('pret');
      } else if (type === 'erreur') {
        clearTimeout(minuteurRef.current);
        setErreur(evenement.data.texte);
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

  function verifier() {
    if (!workerRef.current) return;
    setEtat('execution');
    setErreur(null);
    setResultats(null);
    workerRef.current.postMessage({ type: 'executer_exercice', code, casDeTest });
    // Même garde-fou que ConsolePython : le worker est coopératif, un
    // dépassement de délai ne peut être traité qu'en le tuant.
    minuteurRef.current = setTimeout(() => {
      workerRef.current?.terminate();
      workerRef.current = null;
      setErreur(t.consolePython.delaiDepasse);
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

  const nombreReussis = resultats?.filter((r) => r.reussi).length ?? 0;
  const tousReussis = resultats !== null && resultats.length > 0 && nombreReussis === resultats.length;

  return (
    <div
      className="not-prose overflow-hidden rounded-lg border"
      style={{ borderColor: 'var(--couleur-bordure)' }}
    >
      <EditeurCodeMirror valeur={code} langage="python" onChange={setCode} />
      <div className="flex justify-end border-t p-2" style={{ borderColor: 'var(--couleur-bordure)' }}>
        <button
          type="button"
          onClick={verifier}
          disabled={etat === 'execution'}
          className="rounded px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: 'var(--couleur-accent)' }}
        >
          {etat === 'execution' ? t.exercice.verification : t.exercice.verifier}
        </button>
      </div>

      {erreur && (
        <p
          className="border-t p-3 font-mono text-xs"
          style={{ borderColor: 'var(--couleur-bordure)', color: 'var(--couleur-danger)' }}
        >
          {erreur}
        </p>
      )}

      {resultats && (
        <div className="border-t" style={{ borderColor: 'var(--couleur-bordure)' }}>
          <div
            className="p-3 text-sm font-medium"
            style={{ color: tousReussis ? 'var(--couleur-succes)' : 'var(--couleur-texte)' }}
          >
            {tousReussis
              ? t.exercice.tousReussis
              : `${t.exercice.resultats} : ${nombreReussis} / ${resultats.length}`}
          </div>
          <ul className="space-y-2 p-3 pt-0">
            {resultats.map((resultat, index) => (
              <li
                key={index}
                className="rounded-md border p-2 text-xs"
                style={{
                  borderColor: resultat.reussi ? 'var(--couleur-succes)' : 'var(--couleur-danger)'
                }}
              >
                <p className="font-medium" style={{ color: resultat.reussi ? 'var(--couleur-succes)' : 'var(--couleur-danger)' }}>
                  {resultat.reussi ? t.exercice.reussi : t.exercice.echoue} : {resultat.description}
                </p>
                {!resultat.reussi && (
                  <p className="mt-1 font-mono" style={{ color: 'var(--couleur-texte-attenue)' }}>
                    {t.exercice.obtenu} {resultat.obtenu} · {t.exercice.attendu} {resultat.attendu}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
