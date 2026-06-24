import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LocalizedTextProps = {
  zh: ReactNode;
  en: ReactNode;
  as?: ElementType;
  className?: string;
};

export function LocalizedText({
  zh,
  en,
  as: Component = "span",
  className,
}: LocalizedTextProps) {
  return (
    <>
      <Component className={cn("lang-zh", className)}>{zh}</Component>
      <Component className={cn("lang-en", className)}>{en}</Component>
    </>
  );
}
