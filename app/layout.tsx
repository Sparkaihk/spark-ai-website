import type { Metadata } from "next";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import type * as React from "react";

import { translate } from "@/i18n/dictionary";
import { I18nProvider } from "@/i18n/i18n-provider";
import type { Locale } from "@/i18n/types";
import "./globals.css";

async function requestLocale(): Promise<Locale> {
  const savedLocale = (await cookies()).get("spark-ai-locale")?.value;
  if (savedLocale === "zh-CN" || savedLocale === "en") return savedLocale;
  const acceptLanguage = (await headers()).get("accept-language")?.toLowerCase() ?? "";
  return /(^|,)\s*zh(?:-|;|,|$)/.test(acceptLanguage) ? "zh-CN" : "en";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale();
  const title = translate(locale, "meta.home.title");
  const description = translate(locale, "meta.home.description");
  return {
    metadataBase: new URL("https://sparkai.hk"),
    title: { default: title, template: "%s | Spark AI" },
    description,
    applicationName: "Spark AI",
    authors: [{ name: locale === "zh-CN" ? "光慧科技有限公司" : "Spark AI Technology Limited" }],
    openGraph: { title, description, url: "https://sparkai.hk", siteName: "Spark AI", locale: locale === "zh-CN" ? "zh_CN" : "en_US", alternateLocale: locale === "zh-CN" ? ["en_US"] : ["zh_CN"], type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const initialLocale = await requestLocale();

  return (
    <html lang={initialLocale} data-language={initialLocale} className="dark">
      <body><I18nProvider initialLocale={initialLocale}>{children}</I18nProvider></body>
    </html>
  );
}
