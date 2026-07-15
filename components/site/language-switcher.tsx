"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

type Language = "zh" | "en";

const storageKey = "spark-ai-language";

function applyLanguage(language: Language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = language;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const nextLanguage: Language = saved === "en" ? "en" : "zh";

    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  }, []);

  function toggleLanguage() {
    const nextLanguage: Language = language === "zh" ? "en" : "zh";

    setLanguage(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    applyLanguage(nextLanguage);
  }

  return (
    <button
      type="button"
      aria-label={language === "zh" ? "Switch language to English" : "切换语言为简体中文"}
      onClick={toggleLanguage}
      className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-full border border-sky-100 bg-white/78 px-3 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:shadow-[0_14px_36px_rgba(14,165,233,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="size-4 text-accent" aria-hidden="true" />
      <span className={language === "zh" ? "text-foreground" : ""}>中文</span>
      {compact ? null : <span className="text-muted-foreground/60">/</span>}
      {compact ? null : <span className={language === "en" ? "text-foreground" : ""}>English</span>}
    </button>
  );
}
