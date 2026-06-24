import * as React from "react";

import { Container, type ContainerProps } from "@/components/design-system/container";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "panel" | "grid" | "inset";

const tones: Record<SectionTone, string> = {
  default: "bg-background",
  panel: "bg-spark-surface-1",
  grid: "bg-background spark-grid",
  inset: "bg-spark-surface-2",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  containerSize?: ContainerProps["size"];
  contained?: boolean;
}

export function Section({
  children,
  className,
  tone = "default",
  containerSize = "xl",
  contained = true,
  ...props
}: SectionProps) {
  const content = contained ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section className={cn("py-20 sm:py-24 lg:py-32", tones[tone], className)} {...props}>
      {content}
    </section>
  );
}

export function SectionHeader({
  className,
  eyebrow,
  title,
  description,
}: {
  className?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
