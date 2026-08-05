import fr from './fr.json';

export const locales = ['fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const dictionnaires: Record<Locale, typeof fr> = { fr };

export function useTranslations(locale: Locale = defaultLocale) {
  return dictionnaires[locale];
}
