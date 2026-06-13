import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Cable } from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductArchitectureNode = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductDetailContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  visualTitle: string;
  visualDescription: string;
  visualIcon: LucideIcon;
  features: ProductFeature[];
  useCases: ProductFeature[];
  architecture: ProductArchitectureNode[];
  finalTitle: string;
  finalDescription: string;
};

export function ProductDetailPage({ content }: { content: ProductDetailContent }) {
  const VisualIcon = content.visualIcon;

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,hsl(var(--accent)/0.22),transparent_30%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_44%,hsl(var(--background)/0.6)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                {content.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-accent drop-shadow-[0_0_20px_hsl(var(--accent)/0.45)] sm:text-3xl">
                {content.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {content.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    {content.cta}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">返回产品 / Products</Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12} className="relative min-h-[30rem]">
              <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.045] shadow-[0_24px_100px_hsl(var(--primary)/0.18)] backdrop-blur-xl" />
              <div className="absolute inset-0 spark-grid rounded-lg opacity-20" />
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative z-10 flex min-h-[30rem] flex-col justify-between p-5 sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      {content.visualTitle}
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      {content.visualDescription}
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <VisualIcon className="size-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-3">
                  {content.architecture.map((node, index) => {
                    const NodeIcon = node.icon;

                    return (
                      <div
                        key={node.title}
                        className="rounded-lg border border-white/10 bg-background/72 p-4 shadow-spark-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                            <NodeIcon className="size-5" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-accent">
                              Layer {String(index + 1).padStart(2, "0")}
                            </p>
                            <h2 className="mt-1 text-base font-semibold text-foreground">
                              {node.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Core Capabilities / 核心能力"
          title={`${content.title} platform capabilities.`}
          description="Designed as part of the Spark AI product ecosystem, each capability connects operational needs with long-term data asset infrastructure."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature, index) => {
            const FeatureIcon = feature.icon;

            return (
              <AnimatedBlock key={feature.title} delay={index * 0.06}>
                <SurfaceCard
                  title={feature.title}
                  icon={<FeatureIcon className="size-6" aria-hidden="true" />}
                  className="h-full bg-white/[0.045] backdrop-blur-xl"
                >
                  <p className="text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </SurfaceCard>
              </AnimatedBlock>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Use Cases / 应用场景"
          title="Built for practical enterprise deployment."
          description="Spark AI products support regulated, data-intensive, and knowledge-heavy organizations moving from AI pilots to production infrastructure."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.useCases.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <AnimatedBlock key={item.title} delay={index * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1/75 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.1)] backdrop-blur">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/75 to-transparent" />
                  <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <ItemIcon className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedBlock>
            );
          })}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Architecture / 架构"
          title={`${content.title} architecture.`}
          description="Each layer is designed to interoperate with Spark AI's cold data, knowledge, compute, and data asset infrastructure."
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-4">
              {content.architecture.map((node, index) => {
                const NodeIcon = node.icon;

                return (
                  <div key={node.title} className="relative">
                    {index < content.architecture.length - 1 ? (
                      <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                    ) : null}
                    <div className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                      <div className="flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.24)]">
                        <NodeIcon className="size-7" aria-hidden="true" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        0{index + 1}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                        {node.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {node.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3 rounded-lg border border-white/10 bg-background/55 px-3 py-2 text-sm text-foreground">
                        <Cable className="size-4 shrink-0 text-accent" aria-hidden="true" />
                        Spark AI ecosystem layer
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedBlock>
      </Section>

      <section className="bg-spark-surface-1 py-20 sm:py-24">
        <Container>
          <AnimatedBlock>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-8 shadow-spark-md sm:p-10 lg:p-12">
              <div className="absolute inset-0 spark-grid opacity-20" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                    {content.title}
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    {content.finalTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    {content.finalDescription}
                  </p>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    {content.cta}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
