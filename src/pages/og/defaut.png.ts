import type { APIRoute } from 'astro';
import { genererImageOg } from '../../lib/og';

export const prerender = true;

export const GET: APIRoute = async () => {
  const png = await genererImageOg({
    surtitre: 'Cybercursus',
    titre: 'Apprends la cybersécurité en pratiquant',
    sousTitre: 'Directement dans ton navigateur, sans rien installer.'
  });
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
};
