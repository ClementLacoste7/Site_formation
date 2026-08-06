# Spécification technique

## Plateforme de cours en ligne — Cybersécurité

**Version 1.0 — 5 août 2026**

> **Note :** le nom du projet est **Cybercursus**, le nom de domaine est **cybercursus.fr**.

---

## 1. Contexte et objectifs

### 1.1 Objectif du projet

Créer une plateforme de cours techniques en ligne, gratuite, financée par la publicité display. Le modèle de référence est W3Schools : contenu court, pratique, immédiatement applicable, avec des blocs d'expérimentation intégrés.

### 1.2 Objectif économique

La monétisation repose sur Google AdSense. Le trafic provient du référencement naturel. En conséquence, **la performance et le SEO ne sont pas des considérations secondaires : ce sont les fonctions vitales du produit**. Toute décision technique qui dégrade le temps de chargement ou l'indexabilité doit être écartée.

### 1.3 Contraintes structurantes

| Contrainte | Conséquence |
|---|---|
| Auteur unique | Production de contenu = goulot d'étranglement, pas le code |
| Budget infrastructure ≈ 0 € | Aucune exécution de code côté serveur, hébergement statique |
| Revenus proportionnels au trafic | Core Web Vitals prioritaires sur les fonctionnalités |
| Trafic européen | CMP certifiée obligatoire pour la publicité |

---

## 2. Positionnement

### 2.1 Cible

Étudiants et autodidactes francophones débutants ou intermédiaires en cybersécurité. Public technique, disposant majoritairement d'un compte GitHub.

### 2.2 Proposition de valeur

**« Comprendre les vulnérabilités web en les exploitant toi-même, dans ton navigateur, sans rien installer. »**

La différenciation ne vient pas du volume de contenu mais de l'interactivité : là où les ressources francophones existantes se limitent à de la théorie, chaque concept est accompagné d'un environnement d'expérimentation réellement fonctionnel.

### 2.3 Stratégie de périmètre

Le site est **architecturé pour accueillir plusieurs domaines techniques**, mais **ne publie que le domaine « Cybersécurité » en V1**. Cette contrainte est délibérée : l'autorité thématique en SEO se construit par la profondeur sur un sujet, pas par la largeur.

De même, le site est **architecturé pour être multilingue** (i18n complet), mais **ne publie que le français en V1**.

---

## 3. Périmètre de la V1

### 3.1 Inclus

- Catalogue de cours et navigation hiérarchique
- Pages de chapitre avec contenu Markdown enrichi
- Blocs interactifs d'exécution de code (JavaScript, HTML, Python, SQL)
- Quiz à choix multiples en fin de chapitre
- Suivi de progression local (sans compte)
- Fiches de révision (type de contenu distinct)
- Recherche interne
- Thème clair / sombre
- Commentaires par chapitre
- Emplacements publicitaires et bandeau de consentement
- Pages légales
- Socle SEO complet

### 3.2 Explicitement exclu de la V1

- Comptes utilisateurs et authentification
- Toute base de données
- Toute exécution de code côté serveur
- Labs pratiques et validation par flag
- Version anglaise du contenu
- Certificats de fin de cours
- Newsletter

### 3.3 Prévu mais non activé

Les éléments suivants doivent être **présents dans l'architecture** sans être utilisés en V1, afin d'éviter une refonte ultérieure :

- Routage i18n avec préfixe de langue dans toutes les URLs
- Structure de contenu multi-domaines
- Composant `EncartAffiliation` (créé, non instancié)
- Champ `progression` en localStorage conçu pour une future synchronisation serveur

---

## 4. Stack technique

| Couche | Technologie | Justification |
|---|---|---|
| Framework | Astro 5 | Rendu statique, zéro JS par défaut, îlots, i18n natif |
| Contenu | Content Collections + MDX | Validation de schéma, composants dans le Markdown |
| Style | Tailwind CSS | Rapidité de développement |
| Typographie longue-forme | @tailwindcss/typography | Plugin officiel, 100 % build-time (aucun JS runtime), tokens surchargés avec nos variables CSS de thème |
| Thème | Variables CSS | Bascule clair/sombre sans rechargement |
| Îlots interactifs | React 19 | Uniquement les bacs à sable (éditeur CodeMirror + exécution). Le Quiz est en JS natif, sans framework — un QCM ne le justifie pas |
| Éditeur de code | CodeMirror 6 | Léger, coloration syntaxique, chargé à la demande |
| Exécution JS/HTML | iframe sandboxée | Isolation native du navigateur |
| Exécution Python | Pyodide (WebAssembly) | Chargement paresseux uniquement |
| Exécution SQL | sql.js (SQLite WASM) | Base réelle en mémoire |
| Recherche | Pagefind | Index statique fragmenté, monte en charge |
| Commentaires | Giscus | Aucune base de données, anti-spam par GitHub |
| Progression | localStorage | Aucune donnée personnelle |
| Publicité | Google AdSense + CMP Google | Conformité RGPD |
| Mesure | Google Analytics 4 + Search Console | |
| Hébergement | Vercel, sortie statique | Déploiement automatique depuis GitHub |
| Versioning | Git / GitHub | Le contenu vit dans le repo |

### 4.1 Règles techniques impératives

1. **Aucune dépendance JavaScript ne doit être chargée sur une page qui n'en a pas besoin.** Les îlots React utilisent `client:visible`, jamais `client:load`.
2. **Pyodide et sql.js ne sont téléchargés qu'au clic explicite de l'utilisateur** sur un bouton « Lancer ». Ce sont des paquets de plusieurs mégaoctets : les charger au rendu détruirait les Core Web Vitals.
3. **Aucune chaîne de texte d'interface en dur dans les composants.** Tout passe par les fichiers de traduction, même en V1 monolingue.
4. **Le build doit échouer** si un fichier de contenu ne respecte pas son schéma.

**Note (à évaluer, pas à faire avant le Lot 6)** : CodeMirror 6 expose une API JavaScript native (`@codemirror/state`, `@codemirror/view`), sans dépendance à React. Si les bacs à sable (Web, SQL, Python) sont un jour portés en JS natif — sur le même principe que le Quiz —, React pourrait être retiré entièrement de la stack. À évaluer au Lot 6 selon le gain réel (React + ReactDOM représentent environ 57 Ko compressé, chargés aujourd'hui uniquement au clic sur un bac à sable, jamais au rendu initial).

---

## 5. Modèle de contenu

### 5.1 Hiérarchie

```
Domaine  →  Cours  →  Chapitre  →  Sections
```

- **Domaine** : grande famille thématique. V1 : `cybersecurite` uniquement.
- **Cours** : parcours cohérent de 4 à 8 chapitres.
- **Chapitre** : unité indexée par Google. Une page = une intention de recherche = 10 minutes de lecture.
- **Section** : sous-partie d'un chapitre, avec ancre, alimentant le sommaire latéral.

### 5.2 Schéma d'URL

Le schéma d'URL est **définitif** : toute modification ultérieure entraînerait une perte de référencement.

| Page | URL |
|---|---|
| Accueil | `/fr/` |
| Catalogue | `/fr/cours/` |
| Domaine | `/fr/cours/cybersecurite/` |
| Cours | `/fr/cours/cybersecurite/injections-sql/` |
| Chapitre | `/fr/cours/cybersecurite/injections-sql/union-based/` |
| Fiches | `/fr/fiches/` |
| Fiche | `/fr/fiches/injections-sql/` |
| Recherche | `/fr/recherche/` |
| Légales | `/fr/mentions-legales/` etc. |

La racine `/` redirige vers `/fr/` en 301.

### 5.3 Organisation des fichiers de contenu

```
src/content/
├── domaines/
│   └── cybersecurite.fr.md
├── cours/
│   ├── http-fondamentaux.fr.md
│   ├── injections-sql.fr.md
│   └── xss.fr.md
├── chapitres/
│   ├── injections-sql/
│   │   ├── 01-principe.fr.mdx
│   │   ├── 02-premiere-injection.fr.mdx
│   │   └── 03-union-based.fr.mdx
│   └── xss/
│       └── ...
└── fiches/
    └── injections-sql.fr.mdx
```

Le suffixe de langue (`.fr`) est obligatoire dès la V1 pour préparer l'internationalisation.

### 5.4 Schémas de validation

À définir dans `src/content.config.ts` avec Zod. Le build doit échouer en cas de non-conformité.

**Domaine**

```ts
{
  titre: string,
  description: string,        // 120-160 caractères, sert de meta description
  slug: string,
  ordre: number,
  icone: string,
  couleurAccent: string
}
```

**Cours**

```ts
{
  titre: string,
  description: string,
  slug: string,
  domaine: reference('domaines'),
  ordre: number,
  niveau: 'debutant' | 'intermediaire' | 'avance',
  dureeTotale: number,        // minutes
  objectifs: string[],
  prerequisCours: string[],   // slugs d'autres cours
  publie: boolean
}
```

**Chapitre**

```ts
{
  titre: string,
  titreCourt: string,         // pour la navigation latérale
  description: string,
  slug: string,
  cours: reference('cours'),
  ordre: number,
  duree: number,              // minutes
  niveau: 'debutant' | 'intermediaire' | 'avance',
  objectifs: string[],        // 3 éléments, affichés en encadré
  prerequis: string[],        // slugs de chapitres, génère des liens internes
  tags: string[],
  quiz: Quiz[],               // voir section 9
  maj: date,
  publie: boolean
}
```

**Fiche de révision**

```ts
{
  titre: string,
  description: string,
  slug: string,
  coursLie: reference('cours'),
  tags: string[],
  maj: date
}
```

### 5.5 Anatomie standard d'un chapitre

Toute page de chapitre suit rigoureusement cette structure. C'est un gabarit unique, réutilisé pour l'ensemble du site.

1. Fil d'Ariane
2. Titre `<h1>` + métadonnées (durée, niveau, date de mise à jour)
3. Encadré « Objectifs » — 3 puces
4. Encadré « Prérequis » — liens internes vers les chapitres requis, masqué si vide
5. **Emplacement publicitaire n° 1**
6. Corps du chapitre : théorie découpée en `<h2>` avec ancres
7. Bloc d'exemple commenté
8. **Emplacement publicitaire n° 2** (entre deux sections `<h2>`, jamais au milieu d'une explication)
9. Bloc interactif « Essaie toi-même » — **aucune publicité à moins de 200 px**
10. Quiz
11. Encadré « À retenir » — 3 à 5 points clés
12. **Emplacement publicitaire n° 3**
13. Navigation chapitre précédent / suivant
14. Bloc « Pour aller plus loin » — liens internes vers cours connexes
15. Commentaires Giscus

Une barre latérale sticky affiche le sommaire du chapitre en cours (desktop uniquement), avec surlignage de la section active au scroll.

---

## 6. Arborescence du projet

```
/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── README.md                  # architecture du projet
├── CONTRIBUTING.md            # « comment ajouter un chapitre en 5 étapes »
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── fonts/
└── src/
    ├── content.config.ts      # schémas Zod
    ├── content/               # voir 5.3
    ├── i18n/
    │   ├── fr.json            # toutes les chaînes d'interface
    │   └── utils.ts
    ├── layouts/
    │   ├── BaseLayout.astro
    │   ├── ChapitreLayout.astro
    │   ├── CoursLayout.astro
    │   └── FicheLayout.astro
    ├── components/
    │   ├── nav/
    │   ├── contenu/
    │   ├── interactif/
    │   ├── pub/
    │   └── seo/
    ├── pages/
    │   ├── index.astro        # redirection vers /fr/
    │   └── [lang]/
    │       ├── index.astro
    │       ├── cours/
    │       │   ├── index.astro
    │       │   └── [domaine]/
    │       │       ├── index.astro
    │       │       └── [cours]/
    │       │           ├── index.astro
    │       │           └── [chapitre].astro
    │       ├── fiches/
    │       ├── recherche.astro
    │       └── (pages légales)
    ├── scripts/
    │   ├── progression.ts     # gestion localStorage
    │   └── theme.ts           # bascule de thème
    └── styles/
        └── global.css         # variables CSS des thèmes
```

---

## 7. Composants à développer

### 7.1 Navigation

| Composant | Rôle |
|---|---|
| `EnTete` | Logo, navigation principale, recherche, bascule de thème |
| `PiedDePage` | Liens légaux, plan du site, réseaux |
| `FilAriane` | Génère aussi le JSON-LD `BreadcrumbList` |
| `SommaireLateral` | Sommaire sticky, surlignage au scroll |
| `NavChapitre` | Précédent / suivant, avec titres complets |
| `BarreProgression` | Progression dans le cours en cours |

### 7.2 Contenu

| Composant | Rôle |
|---|---|
| `EncadreObjectifs` | Bloc « à la fin tu sauras » |
| `EncadrePrerequis` | Liens internes, masqué si vide |
| `EncadreARetenir` | Synthèse de fin de chapitre |
| `Avertissement` | Variantes : info, attention, danger, astuce |
| `BlocCode` | Coloration syntaxique, bouton copier, numéros de ligne |
| `CarteCours` | Vignette de cours dans le catalogue |
| `CarteChapitre` | Ligne de chapitre avec indicateur « terminé » |
| `EncartAffiliation` | **Créé mais non utilisé en V1** |

### 7.3 Interactif (îlots React)

| Composant | Rôle |
|---|---|
| `EditeurCode` | CodeMirror 6, onglets multi-fichiers, bouton exécuter, réinitialiser |
| `SortieExecution` | Console de résultat, affichage des erreurs |
| `BacASableWeb` | iframe sandboxée pour HTML/CSS/JS |
| `ConsolePython` | Pyodide, chargement paresseux avec indicateur |
| `BacASableSQL` | sql.js, base préchargée depuis un jeu de données du chapitre |
| `Quiz` | QCM, correction immédiate, explication par réponse |

### 7.4 Publicité et SEO

| Composant | Rôle |
|---|---|
| `SlotPub` | Emplacement à hauteur réservée, variantes desktop/mobile |
| `BandeauConsentement` | Intégration CMP Google |
| `MetaSeo` | Titre, description, canonical, hreflang, Open Graph |
| `DonneesStructurees` | JSON-LD selon le type de page |

---

## 8. Blocs interactifs — spécification détaillée

### 8.1 Principe général

Chaque bloc interactif est déclaré dans le MDX du chapitre :

```mdx
<BacASableSQL
  base="boutique-vulnerable"
  requeteInitiale="SELECT * FROM produits WHERE id = 1"
  solution="1 UNION SELECT username, password FROM users"
  indice="Combien de colonnes retourne la requête d'origine ?"
/>
```

### 8.2 Bac à sable web (HTML / CSS / JS)

- Rendu dans une `<iframe>` avec l'attribut `sandbox="allow-scripts"` **et sans `allow-same-origin`**, ce qui l'isole totalement de l'origine du site.
- Le contenu est injecté via `srcdoc`.
- Trois onglets d'édition : HTML, CSS, JS. Résultat en direct avec un délai anti-rebond de 500 ms.
- Bouton « Réinitialiser » restaurant le code d'origine.

### 8.3 Console Python (Pyodide)

- Le runtime **n'est pas chargé au rendu de la page**. Un bouton « Lancer l'environnement Python » déclenche le téléchargement, avec barre de progression.
- Une fois chargé, l'instance est mise en cache pour la session.
- Bibliothèques autorisées : bibliothèque standard, plus `hashlib`, `base64`, `re`, `json`.
- Exécution dans un Web Worker pour ne pas figer l'interface.
- Délai maximal d'exécution : 10 secondes, puis arrêt du worker.

### 8.4 Bac à sable SQL (sql.js)

- Chaque chapitre référence un jeu de données défini dans `src/data/bases/{nom}.sql`.
- La base est reconstruite à chaque exécution : aucun état persistant, aucune corruption possible.
- Deux modes : **requête libre** (l'utilisateur écrit du SQL) et **formulaire vulnérable** (l'utilisateur saisit une valeur injectée dans une requête concaténée, affichée en clair au-dessus du résultat).

Le mode « formulaire vulnérable » est le cœur pédagogique du cours d'injection SQL : l'apprenant voit la requête se construire avec son entrée et observe le résultat réel.

### 8.5 Contrainte transversale

Tout bloc interactif doit fonctionner **sans JavaScript disponible** en affichant au minimum le code d'exemple en lecture seule. Les moteurs d'indexation doivent voir le contenu pédagogique.

---

## 9. Quiz et progression

### 9.1 Structure d'une question

Définie dans le frontmatter du chapitre :

```yaml
quiz:
  - question: "Que retourne UNION SELECT si le nombre de colonnes diffère ?"
    reponses:
      - texte: "Une erreur SQL"
        correcte: true
        explication: "Le nombre de colonnes doit être identique."
      - texte: "Un résultat vide"
        correcte: false
        explication: "Non, le SGBD rejette la requête."
    type: "unique"    # ou "multiple"
```

### 9.2 Comportement

- Correction à la validation, pas à la sélection.
- L'explication s'affiche pour **toutes** les réponses, pas seulement la bonne.
- Score affiché en fin de quiz, possibilité de recommencer.
- Un quiz réussi à 100 % marque le chapitre comme terminé.

### 9.3 Modèle de progression (localStorage)

Clé unique : `Cybercursus:progression`

```json
{
  "version": 1,
  "chapitres": {
    "injections-sql/union-based": {
      "vu": true,
      "quizReussi": true,
      "meilleurScore": 100,
      "date": "2026-08-05T14:00:00Z"
    }
  }
}
```

Le champ `version` permet une migration future sans perte. La structure est volontairement compatible avec une synchronisation serveur en V2.

### 9.4 Affichage de la progression

- Coche verte sur les chapitres terminés dans la navigation latérale et le catalogue.
- Barre de progression par cours.
- Bouton « Réinitialiser ma progression » dans le pied de page.

---

## 10. Recherche, commentaires, thème

### 10.1 Recherche (Pagefind)

- Index généré en post-build sur le HTML de sortie.
- Modale de recherche accessible au clic et par raccourci `Ctrl/Cmd + K`.
- Résultats affichés avec le fil d'Ariane du chapitre et un extrait contextuel.
- Les pages légales sont exclues de l'index.

**Mécanisme d'exclusion (implémenté au Lot 3) :** Pagefind bascule en mode « inclusion explicite » dès qu'un seul élément `data-pagefind-body` existe sur le site — toute page qui n'en porte pas est alors ignorée par défaut. Cet attribut est posé uniquement dans `ChapitreLayout.astro` et `CoursLayout.astro`. **Ne pas l'ajouter** à un futur `FicheLayout` légal ou aux pages de `16. Pages obligatoires` sans réflexion explicite : l'absence de l'attribut est ce qui les exclut automatiquement de l'index, sans liste de routes à maintenir à la main.

### 10.2 Commentaires (Giscus)

- Adossé aux GitHub Discussions du repo.
- **Chargement au clic explicite** (invariant n°12) : un bouton statique « Afficher les commentaires » est rendu en HTML ; le script Giscus (~80 Ko) n'est injecté qu'à ce clic. Atteindre le bas d'un chapitre par scroll ne déclenche rien — ce n'est pas un consentement à charger un widget tiers.
- Thème synchronisé avec le thème du site.
- Mapping par `pathname`.

### 10.3 Thème clair / sombre

- Variables CSS définies dans `global.css`, basculées par un attribut `data-theme` sur `<html>`.
- Valeur par défaut : `prefers-color-scheme`, surchargée par le choix stocké en localStorage.
- **Un script inline bloquant dans le `<head>`** applique le thème avant le premier rendu. Sans cela, un flash blanc apparaît au chargement en mode sombre. Ce point est non négociable.

---

## 11. Monétisation

### 11.1 Régie

Google AdSense. **La candidature ne doit pas être déposée au lancement** : viser au minimum 30 chapitres publiés, l'ensemble des pages légales en ligne et quelques semaines d'ancienneté. Un refus complique les candidatures ultérieures.

### 11.2 Emplacements

| N° | Position | Affichage |
|---|---|---|
| 1 | Après l'encadré Prérequis | Tous supports |
| 2 | Entre deux sections `<h2>` du corps | Tous supports |
| 3 | Après l'encadré « À retenir » | Tous supports |
| 4 | Barre latérale sticky | Desktop uniquement |

### 11.3 Règles impératives

1. **Chaque slot réserve sa hauteur dès le rendu initial** (`min-height` fixe, fond neutre). Un décalage de mise en page dégrade le CLS, donc le SEO, donc le trafic, donc les revenus. C'est la règle la plus importante de cette section.
2. **Aucune publicité à moins de 200 px d'un bloc interactif.** L'engagement sur ces blocs est le moteur du trafic.
3. Aucun interstitiel, aucun format intrusif, aucune publicité au-dessus du premier paragraphe.
4. Les slots sont désactivables globalement par une variable d'environnement, afin de développer sans publicité.

### 11.4 Consentement (RGPD)

- CMP Google (« Confidentialité et messages ») activée pour le trafic européen.
- Google Consent Mode v2 implémenté.
- Aucun cookie publicitaire ni analytique déposé avant consentement.
- Le refus doit rester aussi accessible que l'acceptation.

---

## 12. SEO — socle obligatoire

### 12.1 Techniques

- `sitemap.xml` généré au build via `@astrojs/sitemap`.
- `robots.txt` autorisant l'indexation, référençant le sitemap.
- Balise `canonical` sur chaque page.
- Balises `hreflang` générées automatiquement (préparation i18n).
- `<html lang="fr">`.
- Images en WebP, `loading="lazy"` hors du premier écran, dimensions explicites.

### 12.2 Données structurées (JSON-LD)

| Type de page | Schéma |
|---|---|
| Cours | `Course` |
| Chapitre | `TechArticle` |
| Toutes | `BreadcrumbList` |
| Fiche | `FAQPage` si structure en questions |
| Accueil | `WebSite` avec `SearchAction` |

### 12.3 Maillage interne

Le maillage est le principal levier de référencement d'un site de cours. Chaque chapitre doit comporter :

- Des liens vers ses prérequis (générés depuis le frontmatter)
- Un lien vers le chapitre suivant et précédent
- Un lien vers le cours parent
- Un bloc « Pour aller plus loin » avec 2 à 4 liens vers des chapitres partageant des tags

### 12.4 Images Open Graph

Génération automatique au build d'une image sociale par chapitre, comportant le titre, le nom du cours et le logo.

---

## 13. Sécurité

Un site enseignant les vulnérabilités web doit être exemplaire sur ce plan.

### 13.1 Isolation des démonstrations

Les blocs interactifs exécutent du code potentiellement malveillant issu de l'utilisateur, notamment des charges XSS. L'isolation repose sur :

- Attribut `sandbox="allow-scripts"` **sans** `allow-same-origin` : l'iframe est traitée comme une origine opaque et ne peut ni accéder au DOM parent, ni lire les cookies, ni atteindre le localStorage.
- Idéalement, service des iframes depuis un sous-domaine dédié (`sandbox.cybercursus.fr`) pour une isolation d'origine complète.
- Aucune donnée sensible n'existe côté client, ce qui limite structurellement l'impact.

### 13.2 En-têtes HTTP

À configurer dans `vercel.json` :

- `Content-Security-Policy` restrictive, autorisant explicitement les domaines AdSense, Giscus et Google Analytics
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` désactivant les API non utilisées
- `Strict-Transport-Security`

**Note pour la CSP (Lot 6) — domaine tiers introduit par les bacs à sable :**

`cdn.jsdelivr.net` doit être autorisé en `script-src`/`connect-src`/`worker-src` : c'est l'unique domaine externe utilisé par le projet à l'exécution, pour charger Pyodide (runtime + `.wasm` + bibliothèque standard) au clic sur « Lancer l'environnement Python ». La version est figée dans `pyodide.worker.ts` (`v314.0.3`, jamais `latest`), pour la reproductibilité autant que pour éviter qu'une CSP pinnée sur cette version se retrouve désynchronisée d'une mise à jour silencieuse du CDN.

sql.js, à l'inverse, **ne dépend d'aucun domaine tiers** : c'est une dépendance npm (`sql.js`, version exacte `1.14.1` dans `package.json`, sans `^`), et son fichier `.wasm` est servi depuis notre propre build (`/_astro/`, importé via `?url`). Rien à ajouter à la CSP pour sql.js au-delà de `'self'`.

**Note pour la CSP (Lot 6) — domaine tiers introduit par les commentaires (Lot 3) :**

`giscus.app` doit être autorisé en `script-src` (le widget) et `frame-src` (l'iframe des commentaires elle-même, chargée depuis `giscus.app`). Comme pour Pyodide, le script Giscus n'est injecté qu'au scroll dans la zone de commentaires (`src/components/nav/Commentaires.astro`), jamais au rendu de la page — donc jamais chargé du tout pour un lecteur qui ne défile pas jusqu'en bas d'un chapitre.

Pagefind, en revanche, **ne dépend d'aucun domaine tiers** : son runtime (`pagefind.js`, l'index et le WASM) est généré dans notre propre build (`dist/pagefind/`) par l'étape `pagefind --site dist` du script npm `build`. Rien à ajouter à la CSP au-delà de `'self'`.

Récapitulatif des domaines tiers à autoriser au Lot 6 : `cdn.jsdelivr.net` (Pyodide) et `giscus.app` (commentaires). C'est la liste complète à ce stade du projet.

### 13.3 Dépendances

- Dependabot activé sur le repo.
- Aucune dépendance non maintenue.

---

## 14. Design system

### 14.1 Principes

Lisibilité prioritaire : le contenu est long, technique, lu sur écran. Densité maîtrisée, hiérarchie typographique nette, largeur de ligne limitée à environ 70 caractères.

### 14.2 Typographie

- Corps de texte : police système sans-serif, 17 px minimum, interligne 1.7.
- Code : police à chasse fixe, 15 px.
- Titres : échelle modulaire, `<h1>` nettement distinct.
- Polices auto-hébergées dans `/public/fonts`, préchargées, `font-display: swap`.

### 14.3 Couleurs

Définies en variables CSS, deux jeux (clair / sombre) :

- Fond, fond secondaire, bordure
- Texte principal, texte atténué
- Accent principal (identité du site)
- Sémantiques : succès, attention, danger, information

Contraste conforme WCAG AA au minimum sur les deux thèmes.

### 14.4 Responsive

Trois points de rupture : mobile (< 768 px), tablette, desktop (> 1280 px). En mobile, la barre latérale de sommaire devient un accordéon repliable en haut du chapitre.

---

## 15. Performance — objectifs chiffrés

| Métrique | Cible |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibilité | ≥ 95 |
| LCP | < 2,0 s |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS initial sur une page de chapitre | < 50 Ko compressé |

Ces valeurs sont mesurées **hors scripts publicitaires**, puis vérifiées avec publicité activée pour contrôler la dégradation.

---

## 16. Pages obligatoires

Nécessaires à la validation AdSense et à la conformité légale française :

- Mentions légales (identité de l'éditeur, hébergeur, contact)
- Politique de confidentialité (données collectées, finalités, droits)
- Politique de cookies (liste des cookies, finalités, gestion du consentement)
- À propos
- Contact
- Plan du site (page HTML lisible, distincte du `sitemap.xml`)

---

## 17. Plan de développement par lots

Chaque lot est un livrable autonome et testable. Ne pas démarrer un lot avant validation du précédent.

### Lot 0 — Socle

- Initialisation du projet Astro 5 avec Tailwind et MDX
- Configuration i18n avec préfixe `/fr/`
- Content collections et schémas Zod (section 5.4)
- Variables CSS des deux thèmes et bascule sans flash
- Layout de base, en-tête, pied de page
- Déploiement Vercel fonctionnel

**Critère de sortie :** un site vide se déploie, la bascule de thème fonctionne, un fichier de contenu invalide casse le build.

### Lot 1 — Contenu statique

- Gabarits de chapitre, de cours, de domaine, de catalogue
- Fil d'Ariane, navigation précédent/suivant, sommaire latéral
- Composants de contenu : encadrés, avertissements, blocs de code
- Trois chapitres de démonstration rédigés

**Critère de sortie :** navigation complète du catalogue jusqu'au chapitre, contenu correctement rendu.

### Lot 2 — Interactivité

- `EditeurCode` avec CodeMirror 6
- `BacASableWeb` (iframe sandboxée)
- `BacASableSQL` (sql.js) avec mode formulaire vulnérable
- `ConsolePython` (Pyodide) avec chargement paresseux
- Composant `Quiz`

**Critère de sortie :** les quatre blocs fonctionnent, aucun runtime lourd n'est chargé avant action explicite de l'utilisateur.

### Lot 3 — Progression et recherche

- Module de progression localStorage
- Indicateurs visuels et barres de progression
- Intégration Pagefind avec modale et raccourci clavier
- Intégration Giscus en chargement paresseux

**Critère de sortie :** la progression persiste entre les sessions, la recherche retourne des résultats pertinents.

### Lot 4 — SEO et pages légales

- Composant `MetaSeo` complet
- Données structurées JSON-LD par type de page
- Sitemap, robots.txt, images Open Graph générées
- Bloc de maillage interne « Pour aller plus loin »
- Rédaction des six pages obligatoires

**Critère de sortie :** Lighthouse SEO à 100, données structurées valides au test Google.

### Lot 4bis — Fiches de révision

Ajouté après coup : les fiches sont un type de contenu à part entière (schéma Zod section 5.4, URLs section 5.2, `FicheLayout` section 6) mais avaient été omises du plan par lots initial — un oubli de la spec, pas un report volontaire vers une version ultérieure.

- `/fr/fiches/` : page index listant les fiches
- `/fr/fiches/[fiche]/` : `FicheLayout`, réutilisant les composants de contenu existants (`BlocCode`, `Avertissement`)
- Une fiche de démonstration : `injections-sql`, structurée en questions (champ `questions` optionnel du schéma, section 5.4)
- `data-pagefind-body` sur `FicheLayout` : les fiches doivent être cherchables, contrairement aux pages légales
- Données structurées : `TechArticle` systématique, `FAQPage` en plus si `questions` est renseigné
- Maillage interne réciproque : lien du cours vers sa fiche associée, et de la fiche vers son cours (`coursLie`)

**Critère de sortie :** la fiche de démonstration apparaît dans les résultats de recherche Pagefind, le lien réciproque cours ↔ fiche fonctionne dans les deux sens, Lighthouse SEO à 100 sur la page de fiche.

### Lot 5 — Monétisation

- Composant `SlotPub` à hauteur réservée, désactivable par variable d'environnement
- Intégration des quatre emplacements
- CMP Google et Consent Mode v2
- Google Analytics 4 conditionné au consentement

**Critère de sortie :** CLS inférieur à 0,05 avec les emplacements actifs, aucun cookie avant consentement.

### Lot 6 — Finalisation

- En-têtes de sécurité dans `vercel.json`
- `README.md` et `CONTRIBUTING.md`
- Audit Lighthouse sur les objectifs de la section 15
- Vérification responsive et accessibilité clavier

**Critère de sortie :** tous les objectifs chiffrés de la section 15 atteints.

---

## 18. Critères d'acceptation globaux

- [ ] Une page de chapitre sans bloc interactif charge moins de 50 Ko de JavaScript
- [ ] Aucun décalage visuel au chargement, publicités activées
- [ ] Le contenu pédagogique est lisible avec JavaScript désactivé
- [ ] Le thème sombre ne produit aucun flash au chargement
- [ ] Un fichier de contenu mal formé fait échouer le build avec un message explicite
- [ ] Toutes les chaînes d'interface proviennent de `i18n/fr.json`
- [ ] Ajouter un chapitre ne demande que la création d'un fichier MDX
- [ ] Aucun cookie n'est déposé avant consentement
- [ ] Les iframes de démonstration ne peuvent pas accéder au DOM parent

---

## Annexe A — Curriculum V1

Objectif : 30 à 40 chapitres publiés avant la candidature AdSense.

| Ordre | Cours | Chapitres | Priorité |
|---|---|---|---|
| 1 | Fondamentaux de la cybersécurité | 5 | Moyenne |
| 2 | HTTP et fonctionnement du web | 6 | **Haute** |
| 3 | Injections SQL | 6 | **Haute** |
| 4 | Cross-Site Scripting (XSS) | 5 | Haute |
| 5 | Authentification et sessions | 5 | Moyenne |
| 6 | Cryptographie appliquée | 5 | Moyenne |
| 7 | Reconnaissance et méthodologie | 4 | Basse |

**Ordre de rédaction recommandé :** cours 2, puis 3, puis 4. Ce sont ceux qui se positionnent le plus vite en référencement et qui exploitent le mieux les blocs interactifs.

Fiches de révision associées : une par cours, publiée après le cours correspondant.

---

## Annexe B — Instructions pour Claude Code

1. Traiter les lots dans l'ordre. Ne pas anticiper sur un lot ultérieur.
2. À la fin de chaque lot, vérifier explicitement le critère de sortie et le signaler.
3. En cas d'ambiguïté, privilégier systématiquement **la performance et la simplicité** plutôt que la richesse fonctionnelle.
4. Ne jamais introduire de dépendance non listée en section 4 sans la signaler et la justifier.
5. Commenter en français le code des composants interactifs, qui concentrent la complexité.
6. Créer `CONTRIBUTING.md` avec une procédure « ajouter un chapitre » en cinq étapes maximum, rédigée pour quelqu'un qui n'ouvre pas le code au quotidien.
7. Ne pas générer de contenu pédagogique : seuls trois chapitres de démonstration sont attendus, le reste sera rédigé séparément.
