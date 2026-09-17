"use client";

import Image, { type ImageProps } from "next/image";

import { traditionalText } from "@/i18n/traditional";
import { useI18n } from "@/i18n/i18n-provider";

export type BilingualAlt = { zh: string; en: string };

export function BilingualImage({ alt, ...props }: Omit<ImageProps, "alt"> & { alt: BilingualAlt }) {
  const { locale } = useI18n();
  return <Image {...props} alt={locale === "en" ? alt.en : locale === "zh-TW" ? traditionalText(alt.zh) : alt.zh} />;
}
