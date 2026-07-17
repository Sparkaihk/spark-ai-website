import { en, type TranslationKey } from "@/i18n/locales/en";
import { zhCN } from "@/i18n/locales/zh-CN";
import type { Locale } from "@/i18n/types";

export { type TranslationKey };

export const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
  en,
  "zh-CN": zhCN,
};

export function translate(locale: Locale, key: TranslationKey): string {
  const value = dictionaries[locale][key];
  if (!value && process.env.NODE_ENV !== "production") {
    console.warn(`[i18n] Missing translation: ${locale}.${key}`);
  }
  return value || `[${key}]`;
}
