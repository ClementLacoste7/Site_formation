// Bascule le thème clair/sombre et persiste le choix en localStorage.
// Le script inline du <head> (voir BaseLayout) gère déjà l'état initial
// avant le premier rendu ; ce module ne gère que le clic utilisateur.

function basculerTheme(): void {
  const actuel = document.documentElement.getAttribute('data-theme');
  const suivant = actuel === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', suivant);
  localStorage.setItem('theme', suivant);
}

export function initBasculeTheme(selecteur: string): void {
  const bouton = document.querySelector<HTMLButtonElement>(selecteur);
  bouton?.addEventListener('click', basculerTheme);
}
