# Cybercursus — Instructions projet

Plateforme de cours de cybersécurité en français, statique, monétisée par publicité display.

**La spécification complète est dans `SPEC.md`. Consulte-la avant toute implémentation.**

---

## Contexte économique (détermine les arbitrages techniques)

Le trafic vient du SEO, les revenus viennent du trafic. **Performance et indexabilité priment sur toute richesse fonctionnelle.** En cas d'ambiguïté, choisis systématiquement l'option la plus simple et la plus rapide au chargement.

---

## Stack imposée

Astro 5 · Tailwind CSS · MDX · React 19 (îlots uniquement) · CodeMirror 6 · Pyodide · sql.js · Pagefind · Giscus · Vercel (sortie statique)

**Ne jamais introduire une dépendance hors de cette liste sans le signaler et le justifier explicitement.**

---

## Invariants — à ne jamais enfreindre

1. **Pyodide et sql.js ne se chargent qu'au clic explicite de l'utilisateur.** Ce sont plusieurs mégaoctets. Les charger au rendu détruit le LCP, donc le référencement, donc le modèle économique. C'est la règle numéro un.
2. **Les îlots React utilisent `client:visible`, jamais `client:load`.**
3. **Aucun JavaScript n'est chargé sur une page qui n'en a pas besoin.**
4. **Chaque emplacement publicitaire réserve sa hauteur dès le rendu initial** (`min-height` fixe). Aucun décalage de mise en page toléré.
5. **Aucune publicité à moins de 200 px d'un bloc interactif.**
6. **Un script inline bloquant dans le `<head>`** applique le thème avant le premier rendu — sinon flash blanc en mode sombre.
7. **Aucune chaîne de texte d'interface en dur.** Tout passe par `src/i18n/fr.json`, même si le site est monolingue en V1.
8. **Toutes les URLs sont préfixées par la langue** (`/fr/...`). Le schéma d'URL de la section 5.2 est définitif.
9. **Les iframes de démonstration utilisent `sandbox="allow-scripts"` SANS `allow-same-origin`.** Le site héberge des démonstrations XSS réelles.
10. **Le build échoue** si un fichier de contenu ne respecte pas son schéma Zod.
11. **Le contenu pédagogique reste lisible sans JavaScript.**

---

## Méthode de travail

- **Un lot à la fois.** Les lots sont définis en section 17 de `SPEC.md`. Ne jamais anticiper sur un lot ultérieur.
- À la fin de chaque lot, **vérifier explicitement le critère de sortie** et le signaler.
- Ne pas générer de contenu pédagogique : seuls trois chapitres de démonstration sont attendus.
- Commenter en français le code des composants interactifs.

---

## Objectifs de performance (section 15)

Lighthouse mobile ≥ 95 · SEO 100 · LCP < 2,0 s · CLS < 0,05 · JS initial < 50 Ko compressé sur une page de chapitre.

Mesurer d'abord sans publicité, puis avec, pour contrôler la dégradation.

---

## Commandes

```bash
npm run dev      # développement
npm run build    # build de production
npm run preview  # prévisualisation du build
```

Variable d'environnement `PUB_ACTIVE=false` pour développer sans les emplacements publicitaires.
