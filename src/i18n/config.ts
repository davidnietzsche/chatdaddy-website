export const locales = ["en", "id", "zh", "pt-BR"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Display names for the language switcher */
export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  zh: "中文",
  "pt-BR": "Português (Brasil)",
};
