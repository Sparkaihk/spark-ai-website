"use client";

import type { SVGProps } from "react";

import { traditionalText } from "@/i18n/traditional";
import { useI18n } from "@/i18n/i18n-provider";

export function LocalizedSvg({ ariaEn, ariaZh, ...props }: SVGProps<SVGSVGElement> & { ariaEn: string; ariaZh: string }) {
  const { locale } = useI18n();
  return <svg {...props} aria-label={locale === "en" ? ariaEn : locale === "zh-TW" ? traditionalText(ariaZh) : ariaZh} />;
}
