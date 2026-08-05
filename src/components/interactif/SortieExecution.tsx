import { useTranslations } from '../../i18n/utils';

export interface LigneConsole {
  type: 'log' | 'error' | 'warn';
  texte: string;
}

interface Props {
  lignes: LigneConsole[];
  texteVide?: string;
}

const couleurParType: Record<LigneConsole['type'], string> = {
  log: 'var(--couleur-texte)',
  warn: 'var(--couleur-attention)',
  error: 'var(--couleur-danger)'
};

export default function SortieExecution({ lignes, texteVide }: Props) {
  const t = useTranslations();

  return (
    <div
      className="not-prose h-full overflow-auto p-3 font-mono text-xs"
      style={{ backgroundColor: 'var(--couleur-fond)' }}
    >
      {lignes.length === 0 ? (
        <p style={{ color: 'var(--couleur-texte-attenue)' }}>
          {texteVide ?? t.editeur.consoleVide}
        </p>
      ) : (
        lignes.map((ligne, index) => (
          <p key={index} style={{ color: couleurParType[ligne.type] }}>
            {ligne.texte}
          </p>
        ))
      )}
    </div>
  );
}
