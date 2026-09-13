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
    // Optionnel : si renseigné, la fiche est structurée en questions et
    // génère un JSON-LD FAQPage en plus du TechArticle (section 12.2 SPEC).
    questions: z
      .array(
        z.object({
          question: z.string(),
          reponse: z.string()
        })
      )
      .optional(),
    maj: z.date()
  })
});

const examens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/examens' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    slug: z.string(),
    ordre: z.number(),
    publie: z.boolean()
  })
});

const questionExamen = z.object({
  question: z.string(),
  type: z.enum(['unique', 'multiple']),
  reponses: z.array(
    z.object({
      texte: z.string(),
      correcte: z.boolean(),
      explication: z.string()
    })
  )
});

const niveauxExamen = defineCollection({
  // generateId explicite : par défaut, le glob loader utilise data.slug comme
  // identité d'entrée dès qu'il est présent (voir CONTRIBUTING.md, gotcha déjà
  // rencontré sur "chapitres"). Ici, chaque examen réutilise volontairement
  // les mêmes slugs "debutant"/"intermediaire"/"expert" pour des URLs lisibles
  // (/fr/quizz/ccna/debutant/), ce qui provoquerait la même collision : on
  // force donc l'id sur le chemin de fichier, unique par examen.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/niveaux-examen',
    generateId: ({ entry }) => entry.replace(/\.md$/, '')
  }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    slug: z.string(),
    examen: reference('examens'),
    niveau: z.enum(['debutant', 'intermediaire', 'expert']),
    ordre: z.number(),
    nombreQuizz: z.number(),
    questionsParQuizz: z.number(),
    // Pool bien plus large que questionsParQuizz : chaque quizz tire un
    // sous-ensemble aléatoire côté client (voir QuizExamen.astro), pour que
    // reprendre le test plusieurs fois ne retombe pas sur les mêmes questions.
    pool: z.array(questionExamen),
    publie: z.boolean()
  })
});

export const collections = { domaines, cours, chapitres, fiches, examens, niveauxExamen };
