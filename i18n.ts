export const languages = ['fr', 'en'] as const;
export type Locale = typeof languages[number];

export const defaultLocale: Locale = 'fr';