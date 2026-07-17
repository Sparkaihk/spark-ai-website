"use client";

import type { ElementType, ReactNode } from "react";

import { useI18n } from "@/i18n/i18n-provider";
import { cn } from "@/lib/utils";

type LocalizedTextProps = {
  zh: ReactNode;
  en: ReactNode;
  as?: ElementType;
  className?: string;
};

export function LocalizedText({ zh, en, as: Component = "span", className }: LocalizedTextProps) {
  const { locale } = useI18n();
  return <Component className={cn(className)}>{locale === "zh-CN" ? zh : en}</Component>;
}
