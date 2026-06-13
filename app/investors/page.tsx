import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Blocks,
  BrainCircuit,
  CalendarRange,
  DatabaseZap,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  PieChart,
  ServerCog,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Spark AI investor overview for market opportunity, business model, technology moat, roadmap, timing, and investor relations.",
};

const heroMetrics = [
  { value: "100PB+", label: "Planned infrastructure capacity" },
  { value: "4", label: "Revenue expansion layers" },
  { value: "2026", label: "BlueSafe launch target" },
];

const marketOpportunity = [
  {
    title: "Enterprise AI needs governed data",
    description:
      "AI adoption is moving the constraint from model access to secure, searchable, high-quality institutional data.",
    icon: Network,
  },
  {
    title: "Cold data becomes strategic",
    description:
      "Archives, records, media, telemetry, and domain knowledge can become AI-ready infrastructure instead of dormant cost centers.",
    icon: DatabaseZap,
  },
  {
    title: "Data asset operations are emerging",
    description:
      "Enterprises need custody, classification, valuation, permissioned access, and monetization systems for data as an asset class.",
    icon: Banknote,
  },
];

const tamSamSom = [
  {
    label: "TAM",
    value: "$400B+",
    caption: "Global enterprise storage, AI infrastructure, and data operations spend.",
    width: "100%",
  },
  {
    label: "SAM",
    value: "$80B+",
    caption: "Addressable regulated and data-intensive sectors across Asia and global enterprise markets.",
    width: "72%",
  },
  {
    label: "SOM",
    value: "$1B+",
    caption: "Initial capture path through cold data, RAG activation, and enterprise infrastructure accounts.",
    width: "44%",
  },
];

const flywheel = [
  {
    title: "Custody",
    description: "Ingest and preserve high-value cold data in durable infrastructure.",
  },
  {
    title: "Governance",
    description: "Classify, permission, and prepare data for institutional use.",
  },
  {
    title: "Activation",
    description: "Expose trusted knowledge to RAG, agents, and operational AI workflows.",
  },
  {
    title: "Assetization",
    description: "Enable valuation, access controls, and future monetization pathways.",
  },
  {
    title: "Network Effects",
    description: "Reusable patterns compound across sectors, partners, and data workflows.",
  },
];

const revenueModel = [
  {
    title: "Infrastructure subscriptions",
    description:
      "Recurring platform fees for cold data custody, governance, account management, and enterprise access.",
    icon: ServerCog,
  },
  {
    title: "Usage-based AI activation",
    description:
      "Consumption revenue from indexing, retrieval, embeddings, inference, and agent-ready knowledge workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise services",
    description:
      "Deployment, migration, compliance mapping, and sector-specific implementation programs.",
    icon: ShieldCheck,
  },
  {
    title: "Data asset transactions",
    description:
      "Future participation in permissioned data access, ecosystem exchange, and monetization workflows.",
    icon: Banknote,
  },
];

const moat = [
  {
    title: "Integrated storage-to-AI stack",
    description:
      "Spark AI connects cold data custody, governed retrieval, edge workflows, and asset operations in one infrastructure thesis.",
    icon: Blocks,
  },
  {
    title: "Trust and governance layer",
    description:
      "Policy-aware controls, durable custody patterns, and audit-ready data flows support institutional adoption.",
    icon: ShieldCheck,
  },
  {
    title: "Compounding data network",
    description:
      "Each deployment can deepen reusable patterns across sector taxonomies, retrieval pipelines, and data asset workflows.",
    icon: BrainCircuit,
  },
];

const roadmap = [
  {
    period: "2026",
    title: "BlueSafe launch",
    description:
      "Commercialize the cold data infrastructure foundation and initial enterprise deployment playbooks.",
  },
  {
    period: "2027",
    title: "Archive capacity expansion",
    description:
      "Scale toward large-capacity archive operations and sector-specific data custody programs.",
  },
  {
    period: "2028",
    title: "RAG Cloud platform",
    description:
      "Expand governed retrieval, AI knowledge activation, and enterprise integration capabilities.",
  },
  {
    period: "2029",
    title: "Edge and partner network",
    description:
      "Extend deployment reach through edge nodes, integration partners, and industry-specific solution channels.",
  },
  {
    period: "2030",
    title: "Global data asset network",
    description:
      "Connect infrastructure sites, AI services, data asset accounts, and permissioned ecosystem workflows.",
  },
];

const competitiveAdvantages = [
  "Integrated custody-to-AI platform instead of isolated storage, RAG, or analytics tooling.",
  "Institutional positioning for regulated sectors where trust, durability, and auditability matter.",
  "Expansion path from infrastructure revenue into AI usage and data asset network economics.",
  "Hong Kong base for cross-border enterprise, finance, and data infrastructure partnerships.",
];

const strategicPartnerships = [
  {
    title: "Cloud and storage infrastructure",
    description:
      "Capacity, resilience, data residency, and hybrid deployment partnerships for enterprise-scale custody.",
  },
  {
    title: "AI platform and model providers",
    description:
      "Retrieval, embedding, inference, and agent integrations that turn governed data into production context.",
  },
  {
    title: "Industry and channel partners",
    description:
      "Sector access across finance, manufacturing, public sector, healthcare, research, and enterprise AI.",
  },
  {
    title: "Data asset ecosystem",
    description:
      "Banking, compliance, valuation, and marketplace relationships for future permissioned data circulation.",
  },
];

const whyNow = [
  "AI programs are bottlenecked by fragmented, inaccessible enterprise data.",
  "Regulated sectors are under pressure to preserve records while making them usable for AI.",
  "Storage, retrieval, and assetization are converging into one infrastructure category.",
];

export default function InvestorsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
          <div className="absolute inset-0 spark-grid opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_48%,hsl(var(--background)/0.58)_100%)]" />
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <AnimatedBlock className="max-w-4xl">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  Investor Overview
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                  Building the infrastructure layer for the AI-era data asset economy.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Spark AI connects storage, governance, retrieval, AI activation, and
                  asset operations into a platform strategy for high-value enterprise data.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="spark" size="lg">
                    <Link href="/contact">
                      Contact Investor Relations
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/products">Explore Platform</Link>
                  </Button>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={0.12} className="relative min-h-[28rem] lg:min-h-[32rem]">
                <div className="absolute inset-0 rounded-lg border border-white/10 bg-spark-surface-1/75 shadow-spark-md backdrop-blur" />
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-between p-5 sm:p-7 lg:min-h-[32rem]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                        Platform Thesis
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                        A staged infrastructure model that begins with durable data custody
                        and expands into AI activation and data asset operations.
                      </p>
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-primary/15 text-accent">
                      <LineChart className="size-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {heroMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-white/10 bg-background/70 px-5 py-4 shadow-spark-sm"
                      >
                        <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedBlock>
            </div>
          </Container>
        </section>

        <Section tone="panel">
          <SectionHeader
            eyebrow="Market Opportunity"
            title="Enterprise AI creates demand for a new data infrastructure category."
            description="Spark AI targets the infrastructure layer beneath enterprise AI: durable custody, governance, retrieval, and data asset operations for institutions with high-value data."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
            <AnimatedStagger className="grid gap-4">
              {marketOpportunity.map((item) => (
                <SurfaceCard
                  key={item.title}
                  title={item.title}
                  icon={<item.icon className="size-6" aria-hidden="true" />}
                  className="h-full"
                >
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </SurfaceCard>
              ))}
            </AnimatedStagger>
            <AnimatedBlock delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-background p-6 shadow-spark-md sm:p-8">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                        TAM / SAM / SOM
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-normal text-foreground">
                        Market capture model
                      </h2>
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-primary/15 text-accent">
                      <PieChart className="size-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-8 grid gap-5">
                    {tamSamSom.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-accent">{item.label}</p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              {item.caption}
                            </p>
                          </div>
                          <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                        </div>
                        <div className="h-3 rounded-full bg-spark-surface-2">
                          <div
                            className="h-3 rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Infrastructure Flywheel"
            title="Each deployment compounds the platform advantage."
            description="Spark AI is designed as a repeatable system where custody creates governed data, governed data powers AI activation, and activation creates data asset workflows."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {flywheel.map((item, index) => (
              <AnimatedBlock key={item.title} delay={index * 0.06}>
                <div className="relative h-full rounded-lg border border-white/10 bg-spark-surface-1/70 p-5 shadow-spark-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-accent/30 bg-primary/15 text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {index < flywheel.length - 1 ? (
                      <ArrowRight className="hidden size-5 text-accent/70 lg:block" aria-hidden="true" />
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-6 text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </Section>

        <Section tone="grid">
          <SectionHeader
            eyebrow="Revenue Model"
            title="Multiple monetization layers from one enterprise infrastructure base."
            description="The platform is designed to begin with recurring infrastructure revenue and expand through AI usage, services, and future data asset economics."
          />
          <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {revenueModel.map((item) => (
              <SurfaceCard
                key={item.title}
                title={item.title}
                icon={<item.icon className="size-6" aria-hidden="true" />}
                className="h-full bg-background/70"
              >
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </SurfaceCard>
            ))}
          </AnimatedStagger>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Competitive Advantages"
            title="A focused position between data infrastructure, enterprise AI, and asset operations."
            description="Spark AI's advantages come from solving institutional data constraints as an infrastructure problem, not as a single-point software feature."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <AnimatedBlock>
              <SurfaceCard
                title="Technology moat"
                icon={<Layers3 className="size-6" aria-hidden="true" />}
                className="h-full"
              >
                <div className="mt-2 grid gap-4">
                  {moat.map((item) => (
                    <div key={item.title} className="rounded-lg bg-background/60 p-4">
                      <div className="flex items-center gap-3">
                        <item.icon className="size-5 text-accent" aria-hidden="true" />
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </AnimatedBlock>
            <AnimatedBlock delay={0.1}>
              <SurfaceCard
                title="Investor-grade differentiation"
                icon={<Trophy className="size-6" aria-hidden="true" />}
                className="h-full"
              >
                <div className="mt-2 grid gap-3">
                  {competitiveAdvantages.map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg bg-background/60 p-4">
                      <ShieldCheck className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </AnimatedBlock>
          </div>
        </Section>

        <Section tone="panel">
          <SectionHeader
            eyebrow="Roadmap 2026-2030"
            title="A staged path from cold data infrastructure to a global data asset network."
            description="The roadmap compounds capacity, software capability, and ecosystem reach while preserving a focused infrastructure thesis."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {roadmap.map((item, index) => (
              <AnimatedBlock key={item.period} delay={index * 0.07}>
                <SurfaceCard className="h-full">
                  <div className="flex items-center gap-3">
                    <CalendarRange className="size-5 text-accent" aria-hidden="true" />
                    <p className="text-sm font-semibold text-accent">{item.period}</p>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-6 text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </SurfaceCard>
              </AnimatedBlock>
            ))}
          </div>
        </Section>

        <Section tone="grid">
          <SectionHeader
            eyebrow="Strategic Partnerships"
            title="Partnerships expand distribution, capability, and trust."
            description="Spark AI's partner strategy supports infrastructure scale, AI integrations, sector access, and future data asset ecosystem participation."
          />
          <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {strategicPartnerships.map((item) => (
              <SurfaceCard
                key={item.title}
                title={item.title}
                icon={<Handshake className="size-6" aria-hidden="true" />}
                className="h-full bg-background/70"
              >
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </SurfaceCard>
            ))}
          </AnimatedStagger>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <AnimatedBlock>
              <SectionHeader
                eyebrow="Why Now"
                title="The market is moving from AI experimentation to data infrastructure investment."
                description="Enterprises now need the operational layer that makes proprietary data usable, trusted, and economically productive across AI systems."
              />
            </AnimatedBlock>
            <AnimatedBlock delay={0.1}>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-6 shadow-spark-md sm:p-8">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 grid gap-4">
                  {whyNow.map((item) => (
                    <div key={item} className="flex gap-4 rounded-lg bg-background/60 p-4">
                      <LockKeyhole className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Section>

        <section className="bg-spark-surface-1 py-20 sm:py-24">
          <Container>
            <AnimatedBlock>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-8 shadow-spark-md sm:p-10 lg:p-12">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                      Investor Relations
                    </p>
                    <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                      Review Spark AI's platform thesis and enterprise growth path.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                      Connect with the team to discuss market timing, roadmap, commercial
                      model, and the long-term data asset economy opportunity.
                    </p>
                  </div>
                  <Button asChild variant="spark" size="lg">
                    <Link href="/contact">
                      Contact Investor Relations
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedBlock>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
