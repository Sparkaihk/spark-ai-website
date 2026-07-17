"use client";

import { Languages } from "lucide-react";

import { useI18n } from "@/i18n/i18n-provider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("common.languageLabel")}
      className="inline-flex h-9 items-center gap-1 rounded-full border border-sky-100 bg-white/78 p-1 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-xl"
    >
      <Languages className="size-4 text-accent" aria-hidden="true" />
      <button type="button" aria-label={t("common.switchToChinese")} aria-pressed={locale === "zh-CN"} onClick={() => setLocale("zh-CN")} className="h-7 rounded-full px-2 transition-colors aria-pressed:bg-primary aria-pressed:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">中文</button>
      <button type="button" aria-label={t("common.switchToEnglish")} aria-pressed={locale === "en"} onClick={() => setLocale("en")} className="h-7 rounded-full px-2 transition-colors aria-pressed:bg-primary aria-pressed:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{compact ? "EN" : "English"}</button>
    </div>
  );
}
