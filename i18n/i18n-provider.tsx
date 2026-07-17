"use client";

import { usePathname } from "next/navigation";
import type * as React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { translate, type TranslationKey } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/types";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const storageKey = "spark-ai-locale";
const legacyStorageKey = "spark-ai-language";

export function I18nProvider({ initialLocale, children }: { initialLocale: Locale; children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) ?? window.localStorage.getItem(legacyStorageKey);
    const normalized: Locale = saved === "zh" || saved === "zh-CN"
      ? "zh-CN"
      : saved === "en"
        ? "en"
        : window.navigator.language.toLowerCase().startsWith("zh")
          ? "zh-CN"
          : "en";
    if (normalized && normalized !== locale) setLocaleState(normalized);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.language = locale;
    window.localStorage.setItem(storageKey, locale);
    document.cookie = `spark-ai-locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale: setLocaleState,
    t: (key) => translate(locale, key),
  }), [locale]);

  return <I18nContext.Provider value={value}><LocalizedMetadata />{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

const metadataRoutes: Array<{ test: (path: string) => boolean; title: TranslationKey; description: TranslationKey }> = [
  { test: (path) => path === "/", title: "meta.home.title", description: "meta.home.description" },
  { test: (path) => path.startsWith("/platform"), title: "meta.platform.title", description: "meta.platform.description" },
  { test: (path) => path === "/products/spark-ai-appliance", title: "meta.appliance.title", description: "meta.appliance.description" },
  { test: (path) => path === "/technology", title: "meta.technology.title", description: "meta.technology.description" },
  { test: (path) => path.startsWith("/knowledge"), title: "meta.knowledge.title", description: "meta.knowledge.description" },
  { test: (path) => path.startsWith("/solutions"), title: "meta.solutions.title", description: "meta.solutions.description" },
  { test: (path) => path === "/principles", title: "meta.principles.title", description: "meta.principles.description" },
  { test: (path) => path === "/about", title: "meta.company.title", description: "meta.company.description" },
  { test: (path) => path === "/contact", title: "meta.contact.title", description: "meta.contact.description" },
  { test: (path) => path === "/resources", title: "meta.resources.title", description: "meta.resources.description" },
  { test: (path) => path.startsWith("/products"), title: "meta.products.title", description: "meta.products.description" },
];

function setMeta(selector: string, attribute: string, value: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute(attribute, value);
}

function LocalizedMetadata() {
  const pathname = usePathname();
  const { locale, t } = useI18n();

  useEffect(() => {
    const route = metadataRoutes.find((item) => item.test(pathname)) ?? {
      title: "meta.generic.title" as const,
      description: "meta.generic.description" as const,
    };
    const title = t(route.title);
    const description = t(route.description);
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [locale, pathname, t]);

  return null;
}
