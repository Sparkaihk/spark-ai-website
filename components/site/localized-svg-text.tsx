"use client";

import type { SVGProps } from "react";

import { traditionalText } from "@/i18n/traditional";
import { useI18n } from "@/i18n/i18n-provider";

export function LocalizedSvgText({ zh, en, ...props }: SVGProps<SVGTextElement> & { zh: string; en: string }) {
  const { locale } = useI18n();
  return <text {...props}>{locale === "en" ? en : locale === "zh-TW" ? traditionalText(zh) : zh}</text>;
}
