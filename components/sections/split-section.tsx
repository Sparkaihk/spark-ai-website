import * as React from "react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Section, SectionHeader } from "@/components/design-system/section";
import { cn } from "@/lib/utils";

export function SplitSection({
  eyebrow,
  title,
  description,
  children,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <Section>
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <AnimatedBlock>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </AnimatedBlock>
        <AnimatedBlock delay={0.12}>{children}</AnimatedBlock>
      </div>
    </Section>
  );
}
