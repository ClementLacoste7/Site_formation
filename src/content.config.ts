import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const domaines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domaines' }),
  schema: z.object({
    titre: z.string(),
    description: z.string().min(120).max(160),
    slug: z.string(),
    ordre: z.number(),
    icone: z.string(),
    couleurAccent: z.string()
  })
});

const cours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cours' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    slug: z.string(),
    domaine: reference('domaines'),
    ordre: z.number(),
    niveau: z.enum(['debutant', 'intermediaire', 'avance']),
    dureeTotale: z.number(),
    objectifs: z.array(z.string()),
    prerequisCours: z.array(z.string()),
    publie: z.boolean()
  })
});

const chapitres = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/chapitres' }),
  schema: z.object({
    titre: z.string(),
    titreCourt: z.string(),
    description: z.string(),
    slug: z.string(),
    cours: reference('cours'),
    ordre: z.number(),
    duree: z.number(),
    niveau: z.enum(['debutant', 'intermediaire', 'avance']),
    objectifs: z.array(z.string()),
    prerequis: z.array(z.string()),
    tags: z.array(z.string()),
    quiz: z.array(
      z.object({
        question: z.string(),
        type: z.enum(['unique', 'multiple']),
        reponses: z.array(
          z.object({
            texte: z.string(),
            correcte: z.boolean(),
            explication: z.string()
          })
        )
      })
    ),
    maj: z.date(),
    publie: z.boolean()
  })
});

const fiches = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/fiches' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    slug: z.string(),
    coursLie: reference('cours'),
    tags: z.array(z.string()),
    maj: z.date()
  })
});

export const collections = { domaines, cours, chapitres, fiches };
