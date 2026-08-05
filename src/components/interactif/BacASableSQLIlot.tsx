import { useState } from 'react';
import EditeurCodeMirror from './EditeurCodeMirror';
import { useTranslations } from '../../i18n/utils';

// Récupère les scripts SQL de seed. Vite ne fait qu'indexer les chemins ici :
// le contenu texte n'est téléchargé que lorsque le loader correspondant est
// appelé, et rien de tout ça n'est chargé avant "Exécuter" (voir chargerBase).
const basesDisponibles = import.meta.glob('../../data/bases/*.sql', {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>;

interface ResultatRequete {
  colonnes: string[];
  lignes: unknown[][];
}

interface Props {
  base: string;
  mode: 'libre' | 'formulaire';
  requeteInitiale?: string;
  /** Pour le mode "formulaire" : gabarit de requête concaténée, `{valeur}` est remplacé par la saisie. */
  gabarit?: string;
  indice?: string;
}

async function chargerBaseEtExecuter(nomBase: string, requete: string) {
  const chemin = `../../data/bases/${nomBase}.sql`;
  const chargeurSeed = basesDisponibles[chemin];
  if (!chargeurSeed) {
    throw new Error(`Base de données "${nomBase}" introuvable.`);
  }

  const [seed, sqlJsModule, wasmUrlModule] = await Promise.all([
    chargeurSeed(),
    import('sql.js'),
    import('sql.js/dist/sql-wasm.wasm?url')
  ]);

  const initSqlJs = sqlJsModule.default;
  const wasmUrl = wasmUrlModule.default;
  const SQL = await initSqlJs({ locateFile: () => wasmUrl });

  const db = new SQL.Database();
  try {
    db.run(seed);
    const resultats = db.exec(requete);
    if (resultats.length === 0) {
      return { colonnes: [], lignes: [] } satisfies ResultatRequete;
    }
    return { colonnes: resultats[0].columns, lignes: resultats[0].values } satisfies ResultatRequete;
  } finally {
    db.close();
  }
}

export default function BacASableSQLIlot({
  base,
  mode,
  requeteInitiale = '',
  gabarit = '',
  indice
}: Props) {
  const t = useTranslations();
  const [requeteLibre, setRequeteLibre] = useState(requeteInitiale);
  const [valeurFormulaire, setValeurFormulaire] = useState('');
  const [resultat, setResultat] = useState<ResultatRequete | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);
  const [indiceVisible, setIndiceVisible] = useState(false);

  const requeteFinale = mode === 'formulaire' ? gabarit.replace('{valeur}', valeurFormulaire) : requeteLibre;

  async function executer() {
    setEnCours(true);
    setErreur(null);
    setResultat(null);
    try {
      const res = await chargerBaseEtExecuter(base, requeteFinale);
      setResultat(res);
    } catch (err) {
      setErreur(err instanceof Error ? err.message : String(err));
    } finally {
      setEnCours(false);
    }
  }

  return (
    <div
      className="not-prose overflow-hidden rounded-lg border"
      style={{ borderColor: 'var(--couleur-bordure)' }}
    >
      {mode === 'formulaire' ? (
        <div className="p-3">
          <label className="block text-xs font-medium" style={{ color: 'var(--couleur-texte-attenue)' }}>
            {t.bacASableSQL.valeurSaisie}
          </label>
          <input
            type="text"
            value={valeurFormulaire}
            onChange={(e) => setValeurFormulaire(e.target.value)}
            spellCheck={false}
            className="mt-1 w-full rounded border px-2 py-1.5 font-mono text-sm"
            style={{
              borderColor: 'var(--couleur-bordure)',
              backgroundColor: 'var(--couleur-fond)',
              color: 'var(--couleur-texte)'
            }}
          />
          <p className="mt-2 text-xs" style={{ color: 'var(--couleur-texte-attenue)' }}>
            {t.bacASableSQL.requeteConstruite}
          </p>
          <p
            className="mt-1 overflow-x-auto whitespace-pre rounded p-2 font-mono text-xs"
            style={{ backgroundColor: 'var(--couleur-fond-secondaire)' }}
          >
            {requeteFinale}
          </p>
        </div>
      ) : (
        <EditeurCodeMirror valeur={requeteLibre} langage="sql" onChange={setRequeteLibre} />
      )}

      <div
        className="flex items-center justify-between border-t p-2"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        {indice ? (
          <button
            type="button"
            onClick={() => setIndiceVisible((v) => !v)}
            className="rounded border px-2 py-1 text-xs"
            style={{ borderColor: 'var(--couleur-bordure)' }}
          >
            {t.bacASableSQL.indice}
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={executer}
          disabled={enCours}
          className="rounded px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: 'var(--couleur-accent)' }}
        >
          {enCours ? t.bacASableSQL.execution : t.bacASableSQL.executer}
        </button>
      </div>

      {indiceVisible && indice && (
        <p
          className="border-t p-3 text-sm"
          style={{ borderColor: 'var(--couleur-bordure)', backgroundColor: 'var(--couleur-fond-secondaire)' }}
        >
          {indice}
        </p>
      )}

      {erreur && (
        <p
          className="border-t p-3 font-mono text-xs"
          style={{ borderColor: 'var(--couleur-bordure)', color: 'var(--couleur-danger)' }}
        >
          {erreur}
        </p>
      )}

      {resultat && (
        <div className="overflow-x-auto border-t p-3" style={{ borderColor: 'var(--couleur-bordure)' }}>
          {resultat.colonnes.length === 0 ? (
            <p className="text-xs" style={{ color: 'var(--couleur-texte-attenue)' }}>
              {t.bacASableSQL.aucunResultat}
            </p>
          ) : (
            <table className="w-full text-left text-xs">
              <thead>
                <tr>
                  {resultat.colonnes.map((colonne) => (
                    <th
                      key={colonne}
                      className="border-b px-2 py-1 font-medium"
                      style={{ borderColor: 'var(--couleur-bordure)' }}
                    >
                      {colonne}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultat.lignes.map((ligne, i) => (
                  <tr key={i}>
                    {ligne.map((valeur, j) => (
                      <td
                        key={j}
                        className="border-b px-2 py-1"
                        style={{ borderColor: 'var(--couleur-bordure)' }}
                      >
                        {String(valeur)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
