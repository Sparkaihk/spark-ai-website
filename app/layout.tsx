import type { Metadata } from "next";


import type * as React from "react";

import { translate } from "@/i18n/dictionary";
import { I18nProvider } from "@/i18n/i18n-provider";
import { requestLocale } from "@/i18n/server";
import "./globals.css";



export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale();
  const title = translate(locale, "meta.home.title");
  const description = translate(locale, "meta.home.description");
  return {
    metadataBase: new URL("https://sparkai.hk"),
    title: { default: title, template: "%s | Spark AI" },
    description,
    applicationName: "Spark AI",
    authors: [{ name: locale === "en" ? "Spark AI Technology Limited" : "光慧科技有限公司" }],
    openGraph: { title, description, url: "https://sparkai.hk", siteName: "Spark AI", locale: { en: "en_US", "zh-CN": "zh_CN", "zh-TW": "zh_TW" }[locale], alternateLocale: ["en_US", "zh_CN", "zh_TW"].filter(value => value !== { en: "en_US", "zh-CN": "zh_CN", "zh-TW": "zh_TW" }[locale]), type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const initialLocale = await requestLocale();

  return (
    <html data-scroll-behavior="smooth" lang={initialLocale} data-language={initialLocale} className="dark">
      <body><I18nProvider initialLocale={initialLocale}>{children}</I18nProvider></body>
    </html>
  );
}
