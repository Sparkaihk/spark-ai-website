"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("spark-ai-language");
    const nextLanguage = saved === "zh" ? "zh" : "en";

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = nextLanguage;
  }, []);

  function toggleLanguage() {
    const nextLanguage = language === "en" ? "zh" : "en";

    setLanguage(nextLanguage);
    window.localStorage.setItem("spark-ai-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = nextLanguage;
  }

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={toggleLanguage}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="size-4 text-accent" aria-hidden="true" />
      <span>{language === "en" ? "EN" : "中"}</span>
      {compact ? null : <span className="text-muted-foreground/60">/</span>}
      {compact ? null : <span>{language === "en" ? "中" : "EN"}</span>}
    </button>
  );
}
