import type { ComponentType } from 'react';

/**
 * Monte un composant React à l'intérieur d'un conteneur au clic sur un
 * bouton, et seulement à ce moment-là : ni React, ni le composant importé
 * par `charger`, ne sont téléchargés avant. C'est l'invariant n°1 du
 * projet (Pyodide/sql.js/CodeMirror ne se chargent qu'au clic explicite).
 */
export function monterAuClic<P extends object>(
  bouton: HTMLButtonElement,
  conteneur: HTMLElement,
  props: P,
  charger: () => Promise<{ default: ComponentType<P> }>
): void {
  bouton.addEventListener(
    'click',
    async () => {
      bouton.disabled = true;
      const [{ default: Composant }, { createRoot }, { createElement }] = await Promise.all([
        charger(),
        import('react-dom/client'),
        import('react')
      ]);
      conteneur.innerHTML = '';
      const racine = createRoot(conteneur);
      racine.render(createElement(Composant, props));
    },
    { once: true }
  );
}
