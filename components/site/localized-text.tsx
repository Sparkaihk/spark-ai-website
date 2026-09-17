"use client";
import { type ElementType, type ReactNode } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import { traditionalText } from "@/i18n/traditional";
import { cn } from "@/lib/utils";
type LocalizedTextProps = { zh: ReactNode; en: ReactNode; zhTW?: ReactNode; as?: ElementType; className?: string };
export function LocalizedText({ zh, en, zhTW, as: Component = "span", className }: LocalizedTextProps) {
  const { locale } = useI18n();
  // Server-provided React nodes may be lazy Flight payloads; do not clone or traverse them during hydration.
  return <Component className={cn(className)}>{locale === "en" ? en : locale === "zh-TW" ? zhTW ?? (typeof zh === "string" ? traditionalText(zh) : zh) : zh}</Component>;
}
