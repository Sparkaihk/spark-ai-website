"use client";
import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/i18n-provider";
const languages = [{ locale: "zh-CN", label: "简", key: "common.switchToChinese" }, { locale: "zh-TW", label: "繁", key: "common.switchToTraditional" }, { locale: "en", label: "EN", key: "common.switchToEnglish" }] as const;
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  return <div role="group" aria-label={t("common.languageLabel")} className="inline-flex h-9 shrink-0 items-center gap-0.5 rounded-full border border-sky-100 bg-white p-1 text-xs font-semibold text-slate-600">
    <Languages className="mx-0.5 size-4 text-primary" aria-hidden="true" />
    {languages.map(item => <button key={item.locale} type="button" data-locale={item.locale} aria-label={t(item.key)} aria-pressed={locale === item.locale} onClick={() => setLocale(item.locale)} className="h-7 rounded-full px-2 transition-colors aria-pressed:bg-primary aria-pressed:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{compact && item.locale !== "en" ? item.locale === "zh-CN" ? "简体" : "繁體" : item.label}</button>)}
  </div>;
}
