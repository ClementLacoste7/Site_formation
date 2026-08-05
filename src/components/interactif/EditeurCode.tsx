import { useState } from 'react';
import EditeurCodeMirror, { type LangageCode } from './EditeurCodeMirror';
import { useTranslations } from '../../i18n/utils';

export interface OngletFichier {
  id: string;
  label: string;
  langage: LangageCode;
}

interface Props {
  onglets: OngletFichier[];
  valeurs: Record<string, string>;
  onChangeFichier: (id: string, valeur: string) => void;
  onExecuter: () => void;
  onReinitialiser: () => void;
}

export default function EditeurCode({
  onglets,
  valeurs,
  onChangeFichier,
  onExecuter,
  onReinitialiser
}: Props) {
  const [ongletActifId, setOngletActifId] = useState(onglets[0]?.id);
  const t = useTranslations();
  const ongletActif = onglets.find((o) => o.id === ongletActifId) ?? onglets[0];

  return (
    <div
      className="not-prose overflow-hidden rounded-lg border"
      style={{ borderColor: 'var(--couleur-bordure)' }}
    >
      <div
        className="flex items-center justify-between border-b px-2"
        style={{ borderColor: 'var(--couleur-bordure)' }}
      >
        <div role="tablist" className="flex">
          {onglets.map((onglet) => (
            <button
              key={onglet.id}
              type="button"
              role="tab"
              aria-selected={onglet.id === ongletActifId}
              onClick={() => setOngletActifId(onglet.id)}
              className="px-3 py-2 text-xs font-medium"
              style={{
                borderBottom:
                  onglet.id === ongletActifId
                    ? '2px solid var(--couleur-accent)'
                    : '2px solid transparent',
                color:
                  onglet.id === ongletActifId
                    ? 'var(--couleur-texte)'
                    : 'var(--couleur-texte-attenue)'
              }}
            >
              {onglet.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 py-1.5">
          <button
            type="button"
            onClick={onReinitialiser}
            className="rounded border px-2 py-1 text-xs"
            style={{ borderColor: 'var(--couleur-bordure)' }}
          >
            {t.editeur.reinitialiser}
          </button>
          <button
            type="button"
            onClick={onExecuter}
            className="rounded px-2 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: 'var(--couleur-accent)' }}
          >
            {t.editeur.executer}
          </button>
        </div>
      </div>
      {ongletActif && (
        <EditeurCodeMirror
          key={ongletActif.id}
          valeur={valeurs[ongletActif.id] ?? ''}
          langage={ongletActif.langage}
          onChange={(valeur) => onChangeFichier(ongletActif.id, valeur)}
        />
      )}
    </div>
  );
}
