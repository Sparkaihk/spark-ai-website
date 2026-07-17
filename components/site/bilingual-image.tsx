"use client";

import Image, { type ImageProps } from "next/image";

import { useI18n } from "@/i18n/i18n-provider";

export type BilingualAlt = { zh: string; en: string };

export function BilingualImage({ alt, ...props }: Omit<ImageProps, "alt"> & { alt: BilingualAlt }) {
  const { locale } = useI18n();
  return <Image {...props} alt={locale === "zh-CN" ? alt.zh : alt.en} />;
}
