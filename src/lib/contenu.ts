import { getEntry, type CollectionEntry } from 'astro:content';

export async function resoudreCours(chapitre: CollectionEntry<'chapitres'>) {
  return getEntry(chapitre.data.cours);
}

export async function resoudreDomaine(cours: CollectionEntry<'cours'>) {
  return getEntry(cours.data.domaine);
}

export function urlDomaine(domaine: CollectionEntry<'domaines'>): string {
  return `/fr/cours/${domaine.data.slug}/`;
}

export function urlCours(
  cours: CollectionEntry<'cours'>,
  domaine: CollectionEntry<'domaines'>
): string {
  return `${urlDomaine(domaine)}${cours.data.slug}/`;
}

export function urlChapitre(
  chapitre: CollectionEntry<'chapitres'>,
  cours: CollectionEntry<'cours'>,
  domaine: CollectionEntry<'domaines'>
): string {
  return `${urlCours(cours, domaine)}${chapitre.data.slug}/`;
}

export function urlFiches(): string {
  return '/fr/fiches/';
}

export function urlFiche(fiche: CollectionEntry<'fiches'>): string {
  return `${urlFiches()}${fiche.data.slug}/`;
}
