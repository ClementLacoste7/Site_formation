import { readFileSync } from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Fichiers statiques de @fontsource/inter (build-time uniquement, jamais
// livrés au navigateur). "latin" + "latin-ext" combinés : le français a
// besoin des deux (accents hors du sous-ensemble "latin" de base).
const dossierPolices = new URL('../../node_modules/@fontsource/inter/files/', import.meta.url);
function lirePolice(nom: string) {
  return readFileSync(new URL(nom, dossierPolices));
}

const polices = [
  { name: 'Inter', data: lirePolice('inter-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  {
    name: 'Inter',
    data: lirePolice('inter-latin-ext-400-normal.woff'),
    weight: 400 as const,
    style: 'normal' as const
  },
  { name: 'Inter', data: lirePolice('inter-latin-700-normal.woff'), weight: 700 as const, style: 'normal' as const },
  {
    name: 'Inter',
    data: lirePolice('inter-latin-ext-700-normal.woff'),
    weight: 700 as const,
    style: 'normal' as const
  }
];

interface OptionsImageOg {
  surtitre: string;
  titre: string;
  sousTitre?: string;
}

export async function genererImageOg({ surtitre, titre, sousTitre }: OptionsImageOg): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '1200px',
          height: '630px',
          padding: '80px',
          backgroundColor: '#0f172a',
          color: '#f1f5f9',
          fontFamily: 'Inter'
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', fontSize: 28, fontWeight: 700, color: '#60a5fa' },
              children: surtitre
            }
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', fontSize: 56, fontWeight: 700, lineHeight: 1.25 },
              children: titre
            }
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', fontSize: 28, color: '#94a3b8' },
              children: sousTitre ?? ''
            }
          }
        ]
      }
    },
    { width: 1200, height: 630, fonts: polices }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}
