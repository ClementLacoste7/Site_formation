import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { genererImageOg } from '../../../lib/og';

export const prerender = true;

export async function getStaticPaths() {
  const chapitres = await getCollection('chapitres');
  const chemins = [];
  for (const chapitre of chapitres) {
    const cours = await getEntry(chapitre.data.cours);
    if (!cours) continue;
    chemins.push({
      params: { cours: cours.data.slug, chapitre: chapitre.data.slug },
      props: { titre: chapitre.data.titre, coursTitre: cours.data.titre }
    });
  }
  return chemins;
}

export const GET: APIRoute = async ({ props }) => {
  const { titre, coursTitre } = props as { titre: string; coursTitre: string };
  const png = await genererImageOg({ surtitre: 'Cybercursus', titre, sousTitre: coursTitre });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
};
