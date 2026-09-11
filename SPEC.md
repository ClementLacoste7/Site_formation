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

Le site est **architecturé pour accueillir plusieurs domaines techniques**. La V1 ne publiait que le domaine « Cybersécurité », contrainte délibérée : l'autorité thématique en SEO se construit par la profondeur sur un sujet, pas par la largeur.

**Évolution (2026-08-07) :** un second domaine, « Développement », a été ouvert à la demande explicite de l'utilisateur. Ce choix a été confirmé en connaissance de cause : le domaine Cybersécurité comptait déjà 8 cours et une cinquantaine de chapitres, largement au-delà du seuil de 30 à 40 chapitres visé avant candidature AdSense, ce qui réduit le risque de dilution thématique qui justifiait la restriction initiale. Chaque domaine continue de construire sa propre profondeur (voir Annexe A pour Cybersécurité, Annexe A2 pour Développement) plutôt que de multiplier des domaines superficiels.

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
- Labs pratiques et validation par flag (style CTF : soumission d'un flag à un serveur, score, classement)
- Version anglaise du contenu
- Certificats de fin de cours
- Newsletter

**Précision (2026-08-07, cours de développement) :** l'exclusion ci-dessus vise spécifiquement un système de labs façon CTF (flag à soumettre, score serveur). Elle ne couvre pas le composant `ExerciceCode` (section 8.5) : celui-ci exécute le code de l'apprenant et compare son résultat à des cas de test **entièrement côté client**, dans le même Web Worker Pyodide que `ConsolePython`, sans aucune soumission, compte ou score. Aucune exécution de code ne quitte le navigateur, conforme à l'exclusion « toute exécution de code côté serveur ».

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

- **Domaine** : grande famille thématique. V1 : `cybersecurite` uniquement ; `developpement` ouvert le 2026-08-07 (voir 2.3).
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

**Piège découvert (2026-08-07) : le `slug` d'un chapitre doit être unique dans tout le site, pas seulement dans son cours.** Le loader de contenu d'Astro s'appuie sur ce champ pour l'identité de l'entrée : deux chapitres de cours différents partageant le même slug (« Les listes » en Python et en HTML, par exemple) entrent en collision, et l'un des deux disparaît silencieusement du build, sans avertissement ni erreur (voir aussi `EncadrePrerequis.astro`, qui recherche un prérequis par slug sur l'ensemble des chapitres, sans filtrer par cours). En cas de titre générique déjà pris ailleurs, suffixer le `slug` (`-html`, `-js`...) suffit ; le `titre` affiché n'a pas besoin de changer.

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
| `ExerciceCode` | Pyodide, code de l'apprenant corrigé contre des cas de test (cours de développement) |
| `ExerciceWeb` | Même principe qu'ExerciceCode, sur la iframe sandboxée de BacASableWeb (HTML/CSS/JS) |
| `ResultatsTests` | Panneau réussi/échoué partagé entre ExerciceCode et ExerciceWeb |
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

### 8.5 Exercice de code corrigé automatiquement (`ExerciceCode`, cours de développement)

- Même mécanique de chargement paresseux que la console Python (8.3) : un bouton « Lancer l'environnement Python » déclenche le téléchargement de Pyodide, jamais le rendu de la page seul.
- L'apprenant écrit une fonction dans l'éditeur, préchargé avec un squelette de départ (signature de fonction, corps à compléter).
- Au clic sur « Vérifier », le code de l'apprenant s'exécute dans le même Web Worker que `ConsolePython`, puis une série de cas de test définis dans le chapitre (`{ description, appel, attendu }`, des expressions Python évaluées via `eval()`) compare le résultat obtenu à la valeur attendue.
- Chaque cas de test s'affiche individuellement (réussi / échoué), avec la valeur obtenue et la valeur attendue en cas d'échec, pour que l'apprenant comprenne l'écart sans deviner.
- **Entièrement côté client** : aucune soumission réseau, aucun score serveur, aucun compte. Conforme à l'exclusion de la section 3.2 (pas de labs façon CTF), puisqu'il ne s'agit que d'une correction locale, comparable à des tests unitaires que l'apprenant pourrait lancer lui-même.
- Les cas de test sont écrits par l'auteur du chapitre, jamais par l'apprenant : `eval()` n'exécute donc que du code de confiance, au même titre que le reste du contenu du site.

### 8.6 Exercice web corrigé automatiquement (`ExerciceWeb`, cours de développement)

- Ne réutilise pas Pyodide : basé sur la même iframe sandboxée que `BacASableWeb` (8.2), `sandbox="allow-scripts"` **sans `allow-same-origin`**, contenu injecté via `srcdoc`.
- L'apprenant édite HTML/CSS/JS dans les mêmes onglets que `BacASableWeb`. Résultat en direct avec le même anti-rebond de 500 ms : pas de bouton « Vérifier » séparé, le bouton « Exécuter » déjà fourni par l'éditeur régénère l'aperçu et relance les cas de test.
- Une fois le code de l'apprenant exécuté, un script injecté à la suite évalue chaque cas de test (`{ description, appel, attendu }`, des expressions JavaScript comparées via `JSON.stringify`) dans le même contexte que ce code, puis relaie le résultat au parent via `postMessage`, exactement comme le fait déjà `BacASableWeb` pour relayer `console.log`.
- Le panneau de résultats (réussi / échoué, valeur obtenue et attendue) est un composant partagé (`ResultatsTests`) avec `ExerciceCode`, pour une présentation identique quel que soit le langage corrigé.
- Mêmes garanties que `ExerciceCode` : entièrement côté client, cas de test écrits par l'auteur du chapitre, jamais par l'apprenant.

### 8.7 Contrainte transversale

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
- **Ordre de priorité (Lot 7) :** choix explicite déjà stocké en localStorage, sinon `prefers-color-scheme`, sinon sombre par défaut (identité « terminal »). Le sombre par défaut s'applique quand on ne sait rien du visiteur, jamais contre un réglage système explicite. `:root` porte directement la palette sombre (donc aussi le défaut pour un visiteur sans JavaScript, qui n'a par définition pas de préférence détectée).
- **Un script inline bloquant dans le `<head>`** applique le thème avant le premier rendu. Sans cela, un flash du thème par défaut apparaît chez un visiteur ayant choisi l'autre thème. Ce point est non négociable.

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

**Implémentation du n°2 (Lot 5) :** un `<h2>` et le contenu qui le suit sont des nœuds frères dans l'arbre Markdown, pas parent/enfant — impossible de savoir "où finit la section" sans attendre le `<h2>` suivant. `ChapitreLayout`/`H2Section.astro` interceptent donc le rendu de chaque `<h2>` (`<Content components={{ h2: H2Section }} />`) et insèrent l'emplacement juste avant le `<h2>` qui suit la section cible — jamais juste après le `<h2>` cible lui-même, ce qui le placerait avant le contenu de sa propre section. Si le chapitre a moins de deux `<h2>`, aucun emplacement n'est inséré (pas de repli approximatif).

**Repositionnement du n°3 (Lot 5) :** placé après la navigation chapitre précédent/suivant plutôt que juste après l'encadré « À retenir » / le quiz, pour respecter la règle 11.3.2 (le quiz contient des champs cochables, donc un bloc interactif).

### 11.3 Règles impératives

1. **Chaque slot configuré réserve sa hauteur dès le rendu initial** (`min-height` fixe, fond neutre). Un décalage de mise en page dégrade le CLS, donc le SEO, donc le trafic, donc les revenus. C'est la règle la plus importante de cette section.
2. **Aucune publicité à moins de 200 px d'un bloc interactif.** L'engagement sur ces blocs est le moteur du trafic.
3. Aucun interstitiel, aucun format intrusif, aucune publicité au-dessus du premier paragraphe.
4. Les slots sont désactivables globalement par une variable d'environnement, afin de développer sans publicité. **Lot 5 :** tant qu'AdSense n'est pas validé, `PUB_ACTIVE` pilote ce même interrupteur en mode « placeholder » (encadré neutre à la hauteur définitive, aucun script) plutôt qu'en absence totale de slot, pour que la réservation d'espace puisse être vérifiée (CLS) avant même l'activation réelle. **Ajustement post-Lot 5 :** ce mode placeholder suppose qu'un identifiant AdSense existe. **Tant que `PUBLIC_ADSENSE_CLIENT_ID` est vide, `SlotPub` ne rend rien du tout** (ni cadre, ni fond, ni hauteur réservée) : sans identifiant, il n'y a rien à activer un jour, et un espace vide serait aussi gênant qu'un cadre visible. `PUB_ACTIVE` n'a d'effet qu'une fois un identifiant renseigné.

### 11.4 Consentement (RGPD)

- CMP Google (« Confidentialité et messages ») activée pour le trafic européen.
- Google Consent Mode v2 implémenté.
- Aucun cookie publicitaire ni analytique déposé avant consentement.
- Le refus doit rester aussi accessible que l'acceptation.

**Implémentation (Lot 5) :** le choix de consentement est stocké en `localStorage` (`Cybercursus:consentement`), jamais en cookie — cohérent avec le reste du site (thème, progression). Consent Mode v2 posé en `denied` sur tous les signaux dès le `<head>` (`initialiserConsentModeDefaut`), avant tout autre script. Les scripts GA4/AdSense ne se chargent qu'après le `load` de la page ET un consentement accordé, jamais avant — voir `src/scripts/consentement.ts`.

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
- Logo, métadonnées et labels techniques (langage d'un bloc de code, niveau d'un cours, etc.) : police système à chasse fixe (`font-mono`).
- Code : police à chasse fixe, 15 px.
- Titres : échelle modulaire, `<h1>` nettement distinct.
- **Aucune police auto-hébergée (Lot 7) :** contrairement à la version initiale de cette section, aucune police n'est chargée par le navigateur. Les empilements système (sans-serif et monospace) suffisent aux deux besoins ci-dessus et évitent toute requête réseau supplémentaire, cohérent avec la priorité de performance de ce projet. `@fontsource/inter` reste utilisé, mais uniquement au build pour la génération des images Open Graph (section 12.4), jamais livré au navigateur.

### 14.3 Couleurs

Identité « terminal », **sombre par défaut** (voir 10.3). Définies en variables CSS, deux jeux (clair / sombre) :

- Fond, fond secondaire, bordure
- Texte principal (blanc cassé en thème sombre, jamais `#ffffff` pur), texte atténué
- Accent principal (vert : vif en thème sombre, foncé en thème clair)
- Sémantiques : succès, attention, danger, information
- Fenêtre terminal (`--couleur-terminal-fond` / `--couleur-terminal-texte`) : surface volontairement toujours sombre dans les deux thèmes, utilisée par les blocs techniques (voir 14.1bis ci-dessous). Bordure fine dans la couleur d'accent du thème actif.

Contraste conforme WCAG AA au minimum sur les deux thèmes (vérifié par calcul du ratio de luminance relative au Lot 7, pas seulement par audit Lighthouse ponctuel).

### 14.1bis Blocs techniques (Lot 7)

Les blocs de code, bacs à sable et l'accroche de l'accueil partagent une identité « fenêtre terminal » (classe `.fenetre-terminal` de `global.css`) : surface plus sombre que le fond de page, bordure fine verte, coins arrondis, en-tête à trois pastilles. Cette surface ne suit pas le thème clair/sombre de la page : un terminal reste sombre par construction.

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

**Note (Lot 6) — le CLS mesuré avec `SlotPub` en mode placeholder n'est pas transposable tel quel.** Le placeholder réserve une hauteur fixe et ne change jamais de contenu après son premier rendu, donc son CLS est nul par construction. Un `<ins class="adsbygoogle">` réel peut redimensionner son contenu une fois l'annonce chargée (format responsive, annonce refusée qui s'effondre à 0, etc.), ce qui peut introduire un décalage que le mode placeholder ne peut pas révéler. **Le CLS devra être remesuré le jour où un identifiant AdSense réel sera posé** (`PUB_ACTIVE=true` + `PUBLIC_ADSENSE_CLIENT_ID` configuré) — la mesure de ce lot couvre le mécanisme (réservation d'espace, chargement conditionné), pas le comportement d'une annonce réelle.

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

### Lot 7 — Identité visuelle et refonte de l'accueil

- Règles d'écriture (invariants 14 et 15 de `CLAUDE.md`) appliquées sur l'ensemble du dépôt : plus aucun emoji, plus aucun tiret cadratin/demi-cadratin.
- Thème sombre par défaut (identité « terminal »), bascule vers le clair conservée (voir 10.3).
- Palette de couleurs revue (14.3), vérifiée WCAG AA par calcul de ratio sur les deux thèmes.
- Identité « fenêtre terminal » pour les blocs techniques (14.1bis), appliquée à `BlocCode.astro` et donc à tous les bacs à sable qui l'utilisent.
- Logo texte monospace avec curseur clignotant (respecte `prefers-reduced-motion`), favicon SVG refait.
- Page d'accueil refondue : accroche avec terminal qui s'écrit seul (animation CSS pure), CTA, bac à sable SQL jouable préchargé, grille des cours, section « pourquoi ce site ».

**Critère de sortie :** poids JS et CLS de l'accueil mesurés et communiqués ; aucune régression sur les objectifs chiffrés de la section 15.

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

## Annexe A — Curriculum Cybersécurité

Objectif : 30 à 40 chapitres publiés avant la candidature AdSense.

| Ordre | Cours | Chapitres | Priorité |
|---|---|---|---|
| 1 | Fondamentaux de la cybersécurité | 5 | Moyenne |
| 2 | HTTP et fonctionnement du web | 6 (rédigés) | **Haute** |
| 3 | Injections SQL | 6 (rédigés) | **Haute** |
| 4 | Cross-Site Scripting (XSS) | 6 (rédigés) | Haute |
| 5 | Authentification et sessions | 6 (rédigés) | Moyenne |
| 6 | Cryptographie appliquée | 6 (rédigés) | Moyenne |
| 7 | Reconnaissance et méthodologie | 6 (rédigés) | Basse |
| 8 | Défense et détection d'intrusion | 6 (rédigés) | Moyenne |
| 9 | Sécurité réseau et segmentation | 6 (rédigés) | Moyenne |

**Ordre de rédaction recommandé :** cours 2, puis 3, puis 4. Ce sont ceux qui se positionnent le plus vite en référencement et qui exploitent le mieux les blocs interactifs.

**Cours 8 et 9, ajoutés hors plan initial (2026-08-07) :** angle défensif (analyste SOC, cours 8) puis réseau/segmentation (cours 9), demandés explicitement par l'utilisateur en complément du curriculum offensif ci-dessus. Le cours 8 s'appuie sur les cours 3 (Injections SQL), 4 (XSS) et 5 (Authentification) ; le cours 9 s'appuie sur les cours 6 (Cryptographie) et 8 (Défense et détection).

Fiches de révision associées : une par cours, publiée après le cours correspondant.

---

## Annexe A2 — Curriculum Développement

Domaine ouvert le 2026-08-07 (voir 2.3). Contrairement au domaine Cybersécurité, chaque chapitre technique intègre au moins un exercice corrigé automatiquement (`ExerciceCode`, section 8.5, pour Python ; `ExerciceWeb`, section 8.6, pour HTML/CSS/JS) plutôt qu'un bloc de démonstration passif : le format attendu pour ce domaine est « explication courte, exemple, exercice corrigé automatiquement », pas seulement de la lecture.

| Ordre | Cours | Chapitres | Priorité |
|---|---|---|---|
| 1 | Python | 10 (rédigés) | **Haute** |
| 2 | HTML | 8 (rédigés) | **Haute** |
| 3 | CSS | 8 (rédigés) | **Haute** |
| 4 | JavaScript | 10 (rédigés) | **Haute** |

**Convention pour les prochains cours de ce domaine :** même structure que ci-dessus (un exercice corrigé automatiquement par chapitre technique, avec plusieurs cas de test lisibles par l'apprenant), quel que soit le langage ou le sujet traité. `ExerciceCode` pour un langage exécutable par Pyodide, `ExerciceWeb` pour tout ce qui s'exécute dans un navigateur (HTML/CSS/JS). Un nouveau langage hors de ces deux familles nécessiterait un nouveau composant, à signaler explicitement avant de l'introduire (voir la règle sur les dépendances de CLAUDE.md, qui s'étend par analogie aux nouveaux mécanismes d'exécution).

---

## Annexe B — Instructions pour Claude Code

1. Traiter les lots dans l'ordre. Ne pas anticiper sur un lot ultérieur.
2. À la fin de chaque lot, vérifier explicitement le critère de sortie et le signaler.
3. En cas d'ambiguïté, privilégier systématiquement **la performance et la simplicité** plutôt que la richesse fonctionnelle.
4. Ne jamais introduire de dépendance non listée en section 4 sans la signaler et la justifier.
5. Commenter en français le code des composants interactifs, qui concentrent la complexité.
6. Créer `CONTRIBUTING.md` avec une procédure « ajouter un chapitre » en cinq étapes maximum, rédigée pour quelqu'un qui n'ouvre pas le code au quotidien.
7. Génération de contenu pédagogique autorisée (levé le 2026-08-07, à la demande explicite de l'utilisateur). Suivre le curriculum de l'Annexe A pour l'ordre et la portée des cours/chapitres, et l'anatomie standard de la section 5.5 pour la structure de chaque chapitre.
