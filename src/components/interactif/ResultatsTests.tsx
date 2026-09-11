import { useTranslations } from '../../i18n/utils';

export interface ResultatTest {
  description: string;
  reussi: boolean;
  obtenu: string;
  attendu: string;
}

interface Props {
  resultats: ResultatTest[] | null;
}

/**
 * Panneau de résultats partagé entre ExerciceCode (Pyodide) et ExerciceWeb
 * (iframe sandboxée) : même présentation quel que soit le langage corrigé.
 */
export default function ResultatsTests({ resultats }: Props) {
  const t = useTranslations();
  if (!resultats) return null;

  const nombreReussis = resultats.filter((r) => r.reussi).length;
  const tousReussis = resultats.length > 0 && nombreReussis === resultats.length;

  return (
    <div className="border-t" style={{ borderColor: 'var(--couleur-bordure)' }}>
      <div
        className="p-3 text-sm font-medium"
        style={{ color: tousReussis ? 'var(--couleur-succes)' : 'var(--couleur-texte)' }}
      >
        {tousReussis ? t.exercice.tousReussis : `${t.exercice.resultats} : ${nombreReussis} / ${resultats.length}`}
      </div>
      <ul className="space-y-2 p-3 pt-0">
        {resultats.map((resultat, index) => (
          <li
            key={index}
            className="rounded-md border p-2 text-xs"
            style={{ borderColor: resultat.reussi ? 'var(--couleur-succes)' : 'var(--couleur-danger)' }}
          >
            <p
              className="font-medium"
              style={{ color: resultat.reussi ? 'var(--couleur-succes)' : 'var(--couleur-danger)' }}
            >
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
  );
}
