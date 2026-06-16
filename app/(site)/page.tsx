import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CalendarRange,
  CheckCircle2,
  CloudCog,
  Database,
  DatabaseZap,
  Download,
  Factory,
  Landmark,
  Layers3,
  LineChart,
  Mail,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/visuals/particle-network";

const heroKpis = [
  { value: "100PB+", label: "Planned AI cold data capacity", icon: DatabaseZap },
  { value: "50+ yrs", label: "Optical archive durability target", icon: ShieldCheck },
  { value: "4", label: "Commercial infrastructure modules", icon: Layers3 },
  { value: "HK", label: "Asia-Pacific launch gateway", icon: Landmark },
];

const ecosystemLayers = [
  {
    title: "Enterprise Data",
    text: "Institutional archives, records, media, research data, telemetry, and operating knowledge become the starting inventory.",
    icon: Database,
  },
  {
    title: "BlueSafe Storage",
    text: "Durable optical storage preserves cold data with long-life economics and lower operating energy.",
    icon: ShieldCheck,
  },
  {
    title: "AI Cold Data Center",
    text: "Capacity, custody workflows, metadata governance, and secure access make preserved data useful for AI.",
    icon: DatabaseZap,
  },
  {
    title: "Enterprise RAG Cloud",
    text: "Governed archives become private retrieval, copilots, agents, search, and decision workflows.",
    icon: CloudCog,
  },
  {
    title: "Data Asset Bank",
    text: "Data accounts, valuation, permissioned access, and trusted circulation turn data into asset infrastructure.",
    icon: Banknote,
  },
];

const productModules = [
  {
    title: "BlueSafe Optical Storage",
    text: "Immutable cold archive infrastructure for compliance records, media libraries, research datasets, and sovereign data reserves.",
    icon: ShieldCheck,
  },
  {
    title: "AI Cold Data Center",
    text: "Purpose-built facilities for long-life, low-energy preservation of enterprise and institutional datasets.",
    icon: DatabaseZap,
  },
  {
    title: "Enterprise RAG Cloud",
    text: "Private retrieval, indexing, embeddings, and knowledge activation for regulated AI workflows.",
    icon: CloudCog,
  },
  {
    title: "Data Asset Bank",
    text: "Data asset accounts, valuation workflows, permissioned access, custody, and trusted circulation services.",
    icon: Banknote,
  },
];

const industries = [
  { title: "Financial Services", text: "Archive custody, compliance memory, risk knowledge bases, and data asset accounts.", icon: Landmark },
  { title: "Healthcare & Life Sciences", text: "Long-life research data, clinical archives, private retrieval, and audit-ready governance.", icon: CheckCircle2 },
  { title: "Public Sector", text: "Sovereign data reserves, record preservation, secure AI knowledge layers, and trusted access control.", icon: Building2 },
  { title: "Media & Cultural Assets", text: "Large-scale media archives, rights metadata, AI search, and preservation infrastructure.", icon: Sparkles },
  { title: "Manufacturing & Industrial AI", text: "Telemetry archives, equipment knowledge, engineering records, and assisted operations.", icon: Factory },
  { title: "Research & Education", text: "Institutional repositories, research datasets, knowledge discovery, and reusable AI libraries.", icon: Network },
];

const marketSignals = [
  {
    label: "Global AI Data Infrastructure Market",
    labelZh: "全球 AI 数据基础设施市场",
    value: "100B+",
    text: "Market Opportunity",
    textZh: "市场机会",
    width: "100%",
  },
  {
    label: "Enterprise Cold Data",
    labelZh: "企业冷数据",
    value: "80%+",
    text: "Most institutional data remains cold, fragmented, under-governed, or underused by production AI systems.",
    textZh: "多数机构数据仍处于冷存储、分散治理或未被生产级 AI 充分使用的状态。",
    width: "78%",
  },
  {
    label: "AI Demand",
    labelZh: "AI 需求",
    value: "2030",
    text: "AI-native organizations will need durable memory, governance, and trusted data infrastructure.",
    textZh: "AI 原生组织将需要长期记忆、治理能力与可信数据基础设施。",
    width: "66%",
  },
];

const businessModel = [
  {
    title: "Optical Storage",
    titleZh: "光存储",
    text: "Recurring archive capacity, data custody, and long-life preservation revenue for enterprise cold data.",
    textZh: "面向企业冷数据的归档容量、数据托管与长期保存收入。",
    icon: ShieldCheck,
  },
  {
    title: "AI Cold Data Center",
    titleZh: "AI 冷数据中心",
    text: "Infrastructure subscriptions for large-scale cold data capacity, metadata governance, and secure access.",
    textZh: "围绕大规模冷数据容量、元数据治理与安全访问的基础设施订阅收入。",
    icon: DatabaseZap,
  },
  {
    title: "Enterprise RAG Cloud",
    titleZh: "企业 RAG 云",
    text: "Usage and subscription revenue from private retrieval, embeddings, knowledge workflows, and AI agents.",
    textZh: "来自私有检索、向量化、知识工作流与 AI 智能体的订阅和用量收入。",
    icon: CloudCog,
  },
  {
    title: "Data Asset Bank",
    titleZh: "数据资产银行",
    text: "Account management, valuation, authorization, trusted circulation, and future transaction services.",
    textZh: "数据账户、价值评估、授权访问、可信流通与未来交易服务。",
    icon: Banknote,
  },
];

const roadmap = [
  { year: "2026", title: "Company Launch", titleZh: "公司启动", text: "Establish Spark AI, complete investor narrative, and launch initial enterprise partnership pipeline." },
  { year: "2027", title: "100PB AI Cold Data Center", titleZh: "100PB AI 冷数据中心", text: "Build the Hong Kong flagship capacity base for enterprise cold data storage and custody." },
  { year: "2028", title: "BlueSafe RAG Cloud", titleZh: "BlueSafe RAG 云", text: "Connect preserved data to private retrieval, knowledge activation, copilots, and AI workflow services." },
  { year: "2030", title: "Data Asset Bank", titleZh: "数据资产银行", text: "Operate data accounts, valuation services, authorized access, and trusted circulation infrastructure." },
];

const fundraising = [
  "Build the first Hong Kong AI cold data center and BlueSafe optical storage capacity.",
  "Accelerate Enterprise RAG Cloud productization for regulated and data-intensive sectors.",
  "Recruit infrastructure, enterprise AI, data governance, and institutional partnership teams.",
  "Develop the Data Asset Bank operating model with compliance, valuation, and trusted access partners.",
];

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="relative isolate min-h-screen overflow-hidden bg-background">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,hsl(var(--background))_0%,hsl(var(--surface-1))_42%,hsl(var(--primary)/0.24)_72%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,hsl(var(--accent)/0.16),transparent_34%),radial-gradient(ellipse_at_18%_76%,hsl(var(--primary)/0.18),transparent_42%)]" />
        <div className="absolute inset-0 spark-grid opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative z-10 flex min-h-screen items-center pb-20 pt-32 sm:pb-24 lg:pb-28 lg:pt-40">
          <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,0.88fr)] lg:items-center xl:gap-20">
            <AnimatedBlock className="max-w-4xl">
              <p className="inline-flex rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur">
                Spark AI Technology Limited
              </p>
              <h1 className="mt-8 max-w-4xl text-[1.96rem] font-semibold leading-[1.07] tracking-normal text-foreground sm:text-[2.68rem] lg:text-[3.24rem] xl:text-[3.56rem]">
                Building the Future of
                <span className="block text-foreground/92">AI Data Infrastructure</span>
              </h1>
              <p className="mt-7 text-xl font-medium leading-8 text-accent sm:text-2xl">
                Preserve cold data. Activate enterprise knowledge. Create data assets.
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground/85 sm:text-lg">
                Spark AI is building infrastructure for long-life data preservation, private AI knowledge activation, and trusted data asset operations.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="mailto:info@sparkai.hk">
                    Email Investor Relations
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#fundraising">
                    View Fundraising Plan
                    <Presentation aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12}>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1/72 p-5 shadow-[0_32px_120px_hsl(var(--primary)/0.28)] backdrop-blur-xl sm:p-7 lg:p-8">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.12),transparent_38%,hsl(var(--accent)/0.08))]" />
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Investor Version 2.0
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-foreground">
                        Infrastructure Metrics
                      </h2>
                    </div>
                    <LineChart className="size-10 text-accent" aria-hidden="true" />
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {heroKpis.map((item, index) => (
                      <div
                        key={item.label}
                        className="group relative overflow-hidden rounded-lg border border-white/10 bg-background/72 p-5 shadow-[0_18px_70px_hsl(var(--primary)/0.16)] transition duration-300 hover:border-accent/40"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-70" />
                        <div className="relative z-10 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-2xl font-semibold tracking-normal text-foreground">
                              {item.value}
                            </p>
                            <p className="mt-3 text-sm font-medium leading-5 text-muted-foreground">
                              {item.label}
                            </p>
                          </div>
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.18)]">
                            <item.icon className="size-5" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="relative z-10 mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))] shadow-[0_0_18px_hsl(var(--accent)/0.45)]"
                            style={{ width: `${68 + index * 8}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <Section tone="panel" className="overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            eyebrow="Spark AI Ecosystem"
            title="One infrastructure ecosystem from cold data memory to investable data assets."
            description="Spark AI connects physical storage, governance, enterprise AI activation, and data asset finance into a single operating platform for institutional data."
          />
          <AnimatedBlock delay={0.1}>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background/72 p-5 shadow-spark-md sm:p-7">
              <div className="absolute inset-0 spark-grid opacity-20" />
              <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {ecosystemLayers.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-spark-surface-1/74 p-5 shadow-[0_18px_70px_hsl(var(--primary)/0.14)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Layer 0{index + 1}
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h2>
                      </div>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                        <item.icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Four Product Modules"
          title="A modular product stack built for enterprise AI infrastructure buyers."
          description="Each module can stand alone commercially, while the full stack compounds into a data infrastructure and data asset operating system."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productModules.map((item, index) => (
            <SurfaceCard
              key={item.title}
              className="h-full bg-spark-surface-1/78 p-6"
              icon={<item.icon className="size-6" aria-hidden="true" />}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Module 0{index + 1}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-foreground">
                {item.title}
              </h2>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </SurfaceCard>
          ))}
        </AnimatedStagger>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Industry Applications"
          title="Institutional data markets need durable memory, private AI knowledge, and trusted asset workflows."
          description="Spark AI is positioned for regulated, data-intensive, and archive-heavy sectors where trust, longevity, and retrieval quality matter."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-semibold leading-6 text-foreground">{item.title}</h2>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Market Signals"
            title="Global AI Data Infrastructure Market"
            description="全球 AI 数据基础设施市场 is expanding as enterprises preserve cold data, activate private knowledge, and build trusted data asset operations."
          />
          <AnimatedBlock delay={0.1}>
            <div className="grid gap-4">
              {marketSignals.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-background/72 p-5 shadow-spark-sm">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-muted-foreground/85">
                        {item.labelZh}
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-normal text-foreground">
                        {item.value}
                      </p>
                    </div>
                    <div className="max-w-xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                        {item.text}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.textZh}</p>
                    </div>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Business Model"
          title="Revenue streams across the AI data infrastructure stack."
          description="商业模式 covers optical storage, AI cold data center capacity, enterprise RAG cloud usage, and data asset banking services."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {businessModel.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-spark-surface-1/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <span className="flex size-11 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Hong Kong 100PB Roadmap"
          title="A focused timeline from company launch to data asset banking."
          description="香港 100PB 路线图 keeps the investor story anchored on infrastructure delivery, BlueSafe RAG Cloud, and data asset operations."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <AnimatedBlock key={item.year} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl font-semibold tracking-normal text-accent">{item.year}</p>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <CalendarRange className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section id="fundraising" tone="panel">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Fundraising Plan"
            title="Capital supports the first infrastructure asset and commercial productization."
            description="Funding is directed toward physical capacity, enterprise product readiness, specialist hiring, and regulated data asset operations."
          />
          <AnimatedBlock delay={0.1}>
            <div className="rounded-lg border border-white/10 bg-background/72 p-6 shadow-spark-md sm:p-8">
              <div className="grid gap-4">
                {fundraising.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-spark-surface-1/72 p-5">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <AnimatedBlock>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-8 shadow-spark-md sm:p-10 lg:p-12">
              <div className="absolute inset-0 spark-grid opacity-20" />
              <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                    Investor Relations
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    Transforming cold data infrastructure into an AI data asset economy.
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    Spark AI is building the infrastructure layer that preserves enterprise memory, activates private knowledge, and creates the operating rails for data assets.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="spark" size="lg">
                      <Link href="/investors">
                        Download Investor Deck
                        <Download aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/contact">
                        Schedule Meeting
                        <CalendarRange aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="mailto:info@sparkai.hk">
                        Contact Investor Relations
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[
                    "Infrastructure thesis: cold data preservation becomes the foundation for enterprise AI memory.",
                    "Product stack: storage, governance, RAG activation, and data asset services reinforce each other.",
                    "Hong Kong positioning: capital, compliance, enterprise demand, and cross-border technology access.",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-background/68 p-5">
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-lg border border-accent/20 bg-accent/10 p-5">
                    <div className="flex gap-3">
                      <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">info@sparkai.hk</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Investor relations and strategic partnership inquiries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
