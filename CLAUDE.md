# Cybercursus — Instructions projet

Plateforme de cours de cybersécurité en français, statique, monétisée par publicité display.

**La spécification complète est dans `SPEC.md`. Consulte-la avant toute implémentation.**

---

## Contexte économique (détermine les arbitrages techniques)

Le trafic vient du SEO, les revenus viennent du trafic. **Performance et indexabilité priment sur toute richesse fonctionnelle.** En cas d'ambiguïté, choisis systématiquement l'option la plus simple et la plus rapide au chargement.

---

## Stack imposée

Astro 5 · Tailwind CSS · @tailwindcss/typography · MDX · React 19 (îlots uniquement) · CodeMirror 6 · Pyodide · sql.js · Pagefind · Giscus · Vercel (sortie statique)

**Ne jamais introduire une dépendance hors de cette liste sans le signaler et le justifier explicitement.**

Astro pinné en 5.x — décision assumée, pas un oubli. Astro 7 n'apporte qu'un gain de vitesse de build, tandis que la chaîne Astro 6/7 + Tailwind 4 (rolldown-vite) a connu des builds cassés. Ne pas proposer de migration majeure avant la V2.

Idem `@astrojs/mdx` en 4.x et `@astrojs/react` en 5.x (la 6.x dépend de Vite 8, incompatible avec Astro 5 qui embarque Vite 7).

Pyodide est chargé depuis le CDN officiel jsDelivr (version figée dans `pyodide.worker.ts`), pas en paquet npm : la distribution complète pèse plusieurs dizaines de Mo, hors de propos pour ce dépôt/déploiement statique. sql.js est en dépendance npm classique, son `.wasm` servi depuis `/_astro/` (import Vite `?url`).

Lot 4 ajoute `@astrojs/sitemap`, et en `devDependencies` uniquement (jamais expédiés au navigateur, exécutés au build pour générer les images Open Graph statiques) : `satori`, `@resvg/resvg-js`, `@fontsource/inter`.

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
12. **Toute ressource de plus de 20 Ko (JS ou tierce) se charge au clic explicite, jamais au scroll ni à l'entrée en viewport.** Atteindre le bas d'une page ne signifie pas vouloir déclencher un chargement lourd — le scroll n'est pas un consentement. Un bouton statique (« Essayer ce code », « Afficher les commentaires », etc.) rend l'action explicite. `client:visible` reste acceptable pour de petits îlots (quelques Ko) mais pas comme mécanisme de lazy-loading pour des widgets tiers ou des bundles conséquents (CodeMirror, Giscus, Pyodide…).

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
