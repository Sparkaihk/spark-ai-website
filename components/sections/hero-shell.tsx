import * as React from "react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Display, Eyebrow, Lead } from "@/components/design-system/typography";
import { cn } from "@/lib/utils";

export function HeroShell({
  eyebrow,
  title,
  description,
  actions,
  visual,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-background spark-grid", className)}>
      <Container className="grid min-h-[86vh] items-center gap-12 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <AnimatedBlock>
          {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
          <Display>{title}</Display>
          {description ? <Lead className="mt-6">{description}</Lead> : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </AnimatedBlock>
        {visual ? (
          <AnimatedBlock delay={0.12} className="relative min-h-80">
            {visual}
          </AnimatedBlock>
        ) : null}
      </Container>
    </section>
  );
}
