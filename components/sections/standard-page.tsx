import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Banknote,
  Blocks,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  DatabaseZap,
  Factory,
  Globe2,
  Handshake,
  Landmark,
  LineChart,
  MonitorPlay,
  Network,
  Orbit,
  Snowflake,
  Sparkles,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { MetricStrip } from "@/components/sections/metric-strip";
import { Button } from "@/components/ui/button";
import type { SparkPageContent } from "@/lib/spark-page-content";

const iconRegistry: Record<string, LucideIcon> = {
  Archive,
  Banknote,
  Blocks,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  DatabaseZap,
  Factory,
  Globe2,
  Handshake,
  Landmark,
  LineChart,
  MonitorPlay,
  Network,
  Orbit,
  Snowflake,
  Sparkles,
  Target,
  Workflow,
};

function iconFor(name: string) {
  return iconRegistry[name] ?? Blocks;
}

function StandardHero({ page }: { page: SparkPageContent }) {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 spark-grid opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.9)_45%,hsl(var(--background)/0.56)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedBlock className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-5xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {page.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="spark" size="lg">
                <Link href={page.hero.primaryCta.href}>
                  {page.hero.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              {page.hero.secondaryCta ? (
                <Button asChild variant="outline" size="lg">
                  <Link href={page.hero.secondaryCta.href}>
                    {page.hero.secondaryCta.label}
                  </Link>
                </Button>
              ) : null}
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.12} className="relative min-h-[26rem] lg:min-h-[30rem]">
            <div className="absolute inset-0 rounded-lg border border-white/10 bg-spark-surface-1/75 shadow-spark-md backdrop-blur" />
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="relative z-10 flex h-full min-h-[26rem] flex-col justify-between p-5 sm:p-7 lg:min-h-[30rem]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {page.hero.visualTitle}
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                    Built as structured content blocks so page copy can move into a CMS without changing the layout system.
                  </p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-primary/15 text-accent">
                  <Blocks className="size-6" aria-hidden="true" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {page.hero.visualItems.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-background/70 px-4 py-4 shadow-spark-sm"
                  >
                    <p className="text-xs font-medium text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </Container>
    </section>
  );
}

function StandardFeatures({ page }: { page: SparkPageContent }) {
  return (
    <Section tone="panel">
      <SectionHeader
        eyebrow={page.features.eyebrow}
        title={page.features.title}
        description={page.features.description}
      />
      <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {page.features.items.map((item) => {
          const Icon = iconFor(item.icon);
          const card = (
            <SurfaceCard
              title={item.title}
              icon={<Icon className="size-6" aria-hidden="true" />}
              className="h-full transition-colors hover:border-accent/45 hover:bg-white/[0.055]"
            >
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </SurfaceCard>
          );

          if (item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={item.title} className="h-full">
              {card}
            </div>
          );
        })}
      </AnimatedStagger>
    </Section>
  );
}

function StandardCta({ page }: { page: SparkPageContent }) {
  return (
    <section className="bg-spark-surface-1 py-20 sm:py-24">
      <Container>
        <AnimatedBlock>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-8 shadow-spark-md sm:p-10 lg:p-12">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  {page.cta.eyebrow}
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                  {page.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                  {page.cta.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href={page.cta.primaryCta.href}>
                    {page.cta.primaryCta.label}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                {page.cta.secondaryCta ? (
                  <Button asChild variant="outline" size="lg">
                    <Link href={page.cta.secondaryCta.href}>
                      {page.cta.secondaryCta.label}
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </AnimatedBlock>
      </Container>
    </section>
  );
}

export function StandardPage({ page }: { page: SparkPageContent }) {
  return (
    <main>
      <StandardHero page={page} />
      <StandardFeatures page={page} />
      <MetricStrip metrics={page.statistics} />
      <StandardCta page={page} />
    </main>
  );
}
