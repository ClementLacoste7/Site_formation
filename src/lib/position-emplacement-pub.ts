// Détermine où insérer l'emplacement publicitaire n°2 pour qu'il tombe
// toujours entre deux sections et jamais au milieu de l'une d'elles
// (section 11.2/11.3). Utilisé avec le composant H2Section, passé à
// <Content components={{ h2: H2Section }} /> : Astro/MDX ne permet pas de
// transmettre une prop personnalisée aux balises générées par le Markdown
// (seuls id/children sont fournis), donc l'état de progression passe par
// ce module plutôt que par une prop.
//
// Sûr en usage SSG : le rendu d'une page (donc de tout son <Content>) est
// entièrement synchrone avant que la page suivante ne réutilise ce module
// — reinitialiser() doit simplement être appelé en tout début de rendu de
// chaque page, avant <Content />.
//
// Piège évité : un <h2> et le texte qui le suit sont des nœuds FRÈRES dans
// l'arbre Markdown (pas parent/enfant). Insérer l'emplacement juste après
// le <h2> cible le place donc AVANT le contenu de sa propre section, pas
// après. La bonne détection est "le <h2> suivant s'apprête à être rendu" :
// à ce moment-là, tout le contenu de la section cible a déjà été rendu.

let indexCible = -1;
let indexCourant = 0;

export function reinitialiser(totalH2: number): void {
  // Aucun slot si moins de deux <h2> : pas de repli approximatif (consigne
  // explicite). La cible est le <h2> "du milieu", toujours suivi d'au
  // moins une autre section.
  indexCible = totalH2 >= 2 ? Math.floor(totalH2 / 2) - 1 : -1;
  indexCourant = 0;
}

export function doitAfficherPubAvant(): boolean {
  const doitAfficher = indexCible >= 0 && indexCourant === indexCible + 1;
  indexCourant += 1;
  return doitAfficher;
}
