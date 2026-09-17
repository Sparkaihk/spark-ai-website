import { cookies, headers } from "next/headers";
import type { Metadata } from "next";
import { resolveLocale } from "./locale";
import { translate, type TranslationKey } from "./dictionary";

export async function requestLocale() {
  return resolveLocale((await cookies()).get("spark-ai-locale")?.value, (await headers()).get("accept-language") ?? "");
}

export async function localizedPageMetadata(titleKey: TranslationKey, descriptionKey: TranslationKey, canonical: string): Promise<Metadata> {
  const locale = await requestLocale();
  const title = translate(locale, titleKey);
  const description = translate(locale, descriptionKey);
  const ogLocale = { en: "en_US", "zh-CN": "zh_CN", "zh-TW": "zh_TW" }[locale];
  return {
    title: { absolute: title }, description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: "Spark AI", type: "website", locale: ogLocale, alternateLocale: ["en_US", "zh_CN", "zh_TW"].filter((value) => value !== ogLocale) },
    twitter: { card: "summary_large_image", title, description },
  };
}
