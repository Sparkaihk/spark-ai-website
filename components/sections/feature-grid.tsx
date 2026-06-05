import type { LucideIcon } from "lucide-react";

import { AnimatedStagger } from "@/components/design-system/animated";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureGridItem[];
}) {
  return (
    <Section tone="panel">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <SurfaceCard
            key={item.title}
            title={item.title}
            icon={<item.icon className="size-6" aria-hidden="true" />}
          >
            <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
          </SurfaceCard>
        ))}
      </AnimatedStagger>
    </Section>
  );
}
