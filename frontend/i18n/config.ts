export const locales = ["vi", "ja"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "vi";
export const localeCookieName = "NEXT_LOCALE";

export const isAppLocale = (value: string): value is AppLocale =>
  locales.includes(value as AppLocale);
