# Contribuer à Cybercursus

Ce guide s'adresse à quelqu'un qui rédige du contenu sans ouvrir le code au quotidien. Pas besoin de comprendre Astro : un chapitre est un fichier texte avec un en-tête structuré.

## Ajouter un chapitre en 5 étapes

### 1. Créer le fichier

Dans `src/content/chapitres/{slug-du-cours}/`, créer un fichier nommé `NN-slug-du-chapitre.fr.mdx` (`NN` = numéro d'ordre à deux chiffres, ex. `04-mon-chapitre.fr.mdx`). Le cours doit déjà exister dans `src/content/cours/`.

### 2. Renseigner l'en-tête

Copier l'en-tête (tout ce qui est entre les deux lignes `---`) d'un chapitre existant — par exemple `src/content/chapitres/injections-sql/01-principe.fr.mdx` — et adapter chaque champ :

| Champ | Contenu attendu |
|---|---|
| `titre` | Titre complet de la page |
| `titreCourt` | Version courte, utilisée dans la navigation et le sommaire du cours |
| `description` | 1-2 phrases, idéalement 120-160 caractères (référencement) |
| `slug` | Identifiant dans l'URL, en minuscules avec des tirets. **Doit être unique dans tout le site, pas seulement dans ce cours** : deux chapitres de cours différents partageant le même slug entrent en collision (l'un des deux disparaît silencieusement du build, sans erreur). En cas de titre générique déjà pris ailleurs (« Les listes », « Les fonctions »...), ajouter un suffixe au slug (`-html`, `-js`...), le `titre` affiché peut rester inchangé |
| `cours` | Doit correspondre exactement au `slug` du cours lié |
| `ordre` | Position du chapitre dans le cours (nombre) |
| `duree` | Temps de lecture estimé, en minutes |
| `niveau` | `debutant`, `intermediaire` ou `avance` |
| `objectifs` | 3 puces : « à la fin de ce chapitre, tu sauras... » |
| `prerequis` | `slug` d'autres chapitres à lire avant (liste vide si aucun) |
| `tags` | Mots-clés, servent aussi au « Pour aller plus loin » |
| `quiz` | Voir étape 4 |
| `maj` | Date du jour |
| `publie` | `true` pour que le chapitre soit visible |

Si un champ est mal renseigné ou manquant, **le build échoue avec un message précis indiquant lequel** : c'est voulu, pas un bug à contourner. Un slug dupliqué entre deux cours, en revanche, ne provoque aucune erreur : vérifier son unicité reste à la charge de l'auteur (voir la remarque sur `slug` ci-dessus).

### 3. Écrire le corps du chapitre

Découper le texte en sections avec des titres `##` : ils deviennent automatiquement le sommaire de la page. Composants disponibles (à importer en haut du fichier, juste après l'en-tête) :

- `BlocCode` — un exemple de code avec coloration syntaxique et bouton copier
- `Avertissement` — encadré `type="info"`, `"attention"`, `"danger"` ou `"astuce"`
- `EncadreARetenir` — liste de points clés (`points={["...", "..."]}`)

**Convention à respecter : `EncadreARetenir` se place tout à la fin du fichier, juste avant la dernière ligne.** Contrairement aux objectifs/prérequis (pilotés par l'en-tête), ce n'est pas la mise en page qui le positionne — c'est toi qui le places, et sa place est en conclusion du chapitre.

### 4. Ajouter un quiz (recommandé)

Dans l'en-tête, remplir le tableau `quiz`. Copier la structure d'un chapitre existant :

```yaml
quiz:
  - question: "..."
    type: "unique"
    reponses:
      - texte: "..."
        correcte: true
        explication: "..."
      - texte: "..."
        correcte: false
        explication: "..."
```

Le quiz s'affiche automatiquement après le corps du chapitre — rien à ajouter dans le texte. Laisser `quiz: []` si aucun quiz n'est prêt.

### 5. Vérifier avant de publier

```bash
npm run dev
```

Ouvrir la page du chapitre et vérifier : le sommaire correspond bien aux sections, les liens de prérequis pointent au bon endroit, le quiz fonctionne. Puis :

```bash
npm run build
```

Si le build échoue, le message d'erreur indique précisément quel champ de l'en-tête est en cause.

---

## Autres ajouts fréquents

- **Un cours** : créer un fichier dans `src/content/cours/`, même principe d'en-tête.
- **Une fiche de révision** : `src/content/fiches/`, voir `injections-sql.fr.mdx` comme modèle (le champ `questions` est optionnel, pour un format questions/réponses).
- **Un bac à sable SQL dans un chapitre** : importer `BacASableSQL` et voir les chapitres 2 et 3 d'« Injections SQL » pour un exemple des deux modes (`formulaire` et `libre`).

Pour tout le reste (composants, architecture, invariants techniques), la référence est `SPEC.md` et `CLAUDE.md` à la racine du dépôt.
