"use client";

import type { SVGProps } from "react";

import { useI18n } from "@/i18n/i18n-provider";

export function LocalizedSvg({ ariaEn, ariaZh, ...props }: SVGProps<SVGSVGElement> & { ariaEn: string; ariaZh: string }) {
  const { locale } = useI18n();
  return <svg {...props} aria-label={locale === "zh-CN" ? ariaZh : ariaEn} />;
}
