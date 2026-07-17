"use client";

import Image, { type ImageProps } from "next/image";

import { useI18n } from "@/i18n/i18n-provider";
import type { TranslationKey } from "@/i18n/dictionary";

export function LocalizedImage({ altKey, ...props }: Omit<ImageProps, "alt"> & { altKey: TranslationKey }) {
  const { t } = useI18n();
  return <Image {...props} alt={t(altKey)} />;
}
