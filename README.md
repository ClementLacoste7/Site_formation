# Cybercursus

Plateforme de cours de cybersécurité en français, statique, monétisée par publicité display.

La spécification complète est dans [`SPEC.md`](./SPEC.md). Pour ajouter un chapitre, un cours ou une fiche, voir [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Commandes

| Commande          | Action                                     |
| ----------------- | ------------------------------------------- |
| `npm install`      | Installe les dépendances                    |
| `npm run dev`      | Démarre le serveur de développement         |
| `npm run build`    | Build de production dans `./dist/` (Astro puis Pagefind) |
| `npm run preview`  | Prévisualise le build de production         |

## Variables d'environnement

Copier `.env.example` en `.env` (jamais committé). Voir ce fichier pour le détail de chaque variable (`PUB_ACTIVE`, `PUBLIC_ADSENSE_CLIENT_ID`, `PUBLIC_GA_MEASUREMENT_ID`).

## Architecture

```
src/
├── content/            # domaines, cours, chapitres (.mdx), fiches — voir CONTRIBUTING.md
├── content.config.ts   # schémas Zod, le build échoue si un fichier n'est pas conforme
├── layouts/             # BaseLayout, ChapitreLayout, CoursLayout, FicheLayout
├── components/
│   ├── nav/             # en-tête, pied de page, recherche, sommaire, progression
│   ├── contenu/          # encadrés, avertissements, blocs de code, cartes
│   ├── interactif/       # bacs à sable (SQL/Web/Python), quiz — voir CLAUDE.md invariant n°12
│   ├── pub/              # SlotPub (placeholder tant qu'AdSense n'est pas validé), CMP
│   └── seo/              # métadonnées, données structurées JSON-LD
├── scripts/              # modules client (progression, thème, consentement, recherche)
├── lib/                  # utilitaires serveur (URLs de contenu, génération d'images OG)
└── i18n/fr.json           # toutes les chaînes d'interface (invariant n°7)
```

`CLAUDE.md` documente les invariants techniques non négociables du projet (performance, sécurité, i18n) — à lire avant toute modification structurelle.
