import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import {
  FeatureGrid,
  InvestorArchitecture,
  MetricStrip,
  SparkHero,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import {
  homepageMetrics,
  industries,
  infrastructurePillars,
  operatingModel,
  productSuite,
} from "@/lib/homepage-content";

export default function HomePage() {
  return (
    <main>
      <SparkHero />

      <MetricStrip metrics={homepageMetrics} />

      <InvestorArchitecture />

      <FeatureGrid
        eyebrow="Product Suite"
        title="BlueSafe infrastructure for the full data asset lifecycle."
        description="Spark AI connects preservation, secure custody, AI knowledge activation, and data asset banking into one enterprise infrastructure layer."
        items={productSuite}
      />

      <Section tone="grid">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedBlock>
            <SectionHeader
              eyebrow="Infrastructure Thesis"
              title="From stored information to AI-era economic infrastructure."
              description="The next enterprise advantage is not only owning data. It is operating data as a governed, intelligent, and value-bearing asset class."
            />
          </AnimatedBlock>

          <div className="grid gap-4">
            {infrastructurePillars.map((item, index) => (
              <AnimatedBlock key={item.title} delay={index * 0.08}>
                <SurfaceCard
                  title={item.title}
                  icon={<item.icon className="size-6" aria-hidden="true" />}
                  className="bg-background/70"
                >
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </SurfaceCard>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="panel">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Industries"
            title="Built for institutions where data integrity is strategic."
            description="Spark AI targets data-intensive sectors that need secure infrastructure, operational trust, and AI-ready knowledge systems."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <SurfaceCard key={industry.title} className="bg-spark-surface-2/70">
                <div className="flex items-center gap-3">
                  <industry.icon className="size-5 text-accent" aria-hidden="true" />
                  <p className="text-sm font-medium text-foreground">{industry.title}</p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Operating Model"
          title="Govern, activate, and monetize enterprise data assets."
          description="Homepage V0.1 establishes the narrative foundation for Spark AI as an infrastructure operator, not a point-solution software vendor."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {operatingModel.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <SurfaceCard
                title={item.title}
                icon={<item.icon className="size-6" aria-hidden="true" />}
                className="h-full"
              >
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <section className="bg-spark-surface-1 py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-8 shadow-spark-md sm:p-10 lg:p-12">
            <div className="absolute inset-0 spark-grid opacity-25" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  Spark AI Ecosystem
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                  Partner with the infrastructure layer of the data asset economy.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/whitepaper">
                    Whitepaper
                    <Download aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
