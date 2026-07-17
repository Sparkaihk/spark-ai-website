"use client";

import type { ElementType } from "react";

import { useI18n } from "@/i18n/i18n-provider";
import type { TranslationKey } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

export function T({ id, as: Component = "span", className }: { id: TranslationKey; as?: ElementType; className?: string }) {
  const { t } = useI18n();
  return <Component className={cn(className)}>{t(id)}</Component>;
}
