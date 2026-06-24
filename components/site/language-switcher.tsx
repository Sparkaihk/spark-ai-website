"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

type Language = "zh" | "en";

function applyLanguage(language: Language) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.documentElement.dataset.language = language;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("spark-ai-language");
    const nextLanguage: Language = saved === "en" ? "en" : "zh";

    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  }, []);

  function toggleLanguage() {
    const nextLanguage: Language = language === "zh" ? "en" : "zh";

    setLanguage(nextLanguage);
    window.localStorage.setItem("spark-ai-language", nextLanguage);
    applyLanguage(nextLanguage);
  }

  return (
    <button
      type="button"
      aria-label={language === "zh" ? "Switch language to English" : "切換語言為繁體中文"}
      onClick={toggleLanguage}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-sky-100 bg-white px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-sky-50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="size-4 text-accent" aria-hidden="true" />
      <span className={language === "zh" ? "text-foreground" : ""}>繁中</span>
      {compact ? null : <span className="text-muted-foreground/60">/</span>}
      {compact ? null : <span className={language === "en" ? "text-foreground" : ""}>English</span>}
    </button>
  );
}
