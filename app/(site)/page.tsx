import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CalendarRange,
  CheckCircle2,
  Database,
  Download,
  Factory,
  Layers3,
  LineChart,
  Mail,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/visuals/particle-network";

type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const visualAssets = {
  cover: "/images/spark-ai-cover.webp",
  architecture: "/images/spark-ai-ecosystem-architecture.webp",
  business: "/images/spark-ai-business-model.webp",
  roadmap: "/images/spark-ai-hk-roadmap.webp",
  highlights: "/images/spark-ai-investment-highlights.webp",
};

const kpis = [
  {
    value: "100PB+",
    label: "Hong Kong AI cold data capacity target for institutional archives.",
  },
  {
    value: "50 Years+",
    label: "Long-life data preservation design for regulated and strategic data.",
  },
  {
    value: "80%",
    label: "Projected energy saving versus conventional always-on data storage.",
  },
  {
    value: "5-Layer",
    label: "Integrated ecosystem from cold data custody to data asset banking.",
  },
];

const dataCenterItems: CardItem[] = [
  {
    title: "Cold Data Custody",
    text: "Purpose-built facilities for enterprise archives, media libraries, research datasets, and sovereign data reserves.",
    icon: Database,
  },
  {
    title: "AI-Ready Governance",
    text: "Metadata, rights controls, indexing, and secure retrieval make dormant datasets usable for AI workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Low-Energy Infrastructure",
    text: "BlueSafe optical storage reduces energy exposure while extending the useful life of high-value data assets.",
    icon: Zap,
  },
];

const businessModel: CardItem[] = [
  {
    title: "Infrastructure Revenue",
    text: "Recurring storage, custody, governance, and managed data center service fees.",
    icon: Building2,
  },
  {
    title: "Knowledge Activation",
    text: "Enterprise RAG cloud, private retrieval, copilots, and data-to-knowledge implementation services.",
    icon: Network,
  },
  {
    title: "Data Asset Services",
    text: "Valuation, permissions, trusted circulation, and data asset account services for institutional clients.",
    icon: Banknote,
  },
];

const whySpark: CardItem[] = [
  {
    title: "Owns the Cold Data Layer",
    text: "Spark AI focuses on the overlooked storage and governance layer beneath enterprise AI adoption.",
    icon: Layers3,
  },
  {
    title: "Built for Institutions",
    text: "The platform targets compliance-heavy sectors where data retention, access control, and auditability matter.",
    icon: ShieldCheck,
  },
  {
    title: "Hong Kong as Launch Market",
    text: "A regional financial and data hub provides a strong base for data infrastructure and asset services.",
    icon: LineChart,
  },
];

const investorHighlights = [
  "Clear category: AI data asset infrastructure, not a single SaaS tool.",
  "Multiple revenue layers across custody, activation, and asset services.",
  "100PB Hong Kong roadmap creates a concrete flagship infrastructure story.",
  "Energy-saving cold storage thesis aligns with enterprise cost and sustainability pressure.",
];

const investorBriefingSections = [
  {
    title: "Why Now?",
    titleZh: "為什麼是現在？",
    points: [
      {
        title: "Enterprise data is compounding in the AI era.",
        text: "AI 时代企业数据量快速增长，数据基础设施正在从后台成本变成战略资产。",
      },
      {
        title: "More data is becoming low-frequency cold data.",
        text: "大量档案、媒体、日志、科研和合规数据正在进入低频访问状态。",
      },
      {
        title: "AI needs long-term historical data as RAG fuel.",
        text: "训练、检索增强生成和企业知识智能体都需要长期历史数据作为知识燃料。",
      },
      {
        title: "Legacy storage faces cost, energy, lifespan, and security pressure.",
        text: "传统云存储、HDD 和磁带在成本、能耗、寿命与安全性上承受持续压力。",
      },
    ],
  },
  {
    title: "Why Spark AI?",
    titleZh: "為什麼是 Spark AI？",
    points: [
      {
        title: "AI Cold Data Center",
        text: "建设面向机构冷数据的低能耗、长寿命、AI-ready 托管基础设施。",
      },
      {
        title: "BlueSafe RAG Cloud",
        text: "把 BlueSafe 保存的数据接入私有检索、知识库、Copilot 与企业 RAG 工作流。",
      },
      {
        title: "Enterprise Edge Nodes",
        text: "通过企业边缘节点支持本地推理、安全接入和区域化 AI 服务。",
      },
      {
        title: "Data Asset Bank",
        text: "将冷数据存储升级为确权、估值、授权访问和可信流通的数据资产平台。",
      },
    ],
  },
  {
    title: "Investment Highlights",
    titleZh: "投資亮點",
    points: [
      {
        title: "Hong Kong 100PB AI Cold Data Center",
        text: "以香港 100PB 旗舰设施建立清晰、可落地的基础设施资产叙事。",
      },
      {
        title: "Recurring SaaS Revenue",
        text: "RAG Cloud、托管服务和企业知识激活形成持续订阅与使用收入。",
      },
      {
        title: "Data Asset Banking",
        text: "数据账户、估值、授权和可信流通打开数据金融化服务空间。",
      },
      {
        title: "AI Infrastructure Licensing",
        text: "面向企业、园区、行业伙伴输出 AI 数据基础设施许可与运营能力。",
      },
      {
        title: "Multi-decade Data Lifecycle",
        text: "围绕长期保存、治理、激活和资产化，覆盖跨周期数据生命周期价值。",
      },
    ],
  },
];

const marketOpportunity: CardItem[] = [
  {
    title: "Global Data Growth",
    text: "Enterprise data volumes continue to compound across archives, media, telemetry, research, compliance records, and AI-generated knowledge.",
    icon: LineChart,
  },
  {
    title: "Cold Data Explosion",
    text: "Most institutional data shifts into low-frequency access, creating a massive need for long-life, lower-energy, AI-ready cold data infrastructure.",
    icon: Database,
  },
  {
    title: "AI Infrastructure Market",
    text: "AI adoption needs durable memory, governed retrieval, private RAG, and data center infrastructure beyond short-term compute cycles.",
    icon: Network,
  },
  {
    title: "Data Asset Banking Market",
    text: "Governed datasets can evolve from storage liabilities into valued, permissioned, and bankable institutional data assets.",
    icon: Banknote,
  },
];

const whyWeWin = [
  {
    title: "Spark AI vs Cloud Storage",
    text: "Cloud storage optimizes availability and scale. Spark AI optimizes long-life cold data custody, AI readiness, energy economics, and asset conversion.",
  },
  {
    title: "Spark AI vs Traditional Archive",
    text: "Traditional archives preserve records. Spark AI preserves, governs, activates, and monetizes data through RAG Cloud and Data Asset Bank services.",
  },
  {
    title: "Spark AI vs AI Knowledge Platforms",
    text: "Knowledge platforms start at software. Spark AI owns the deeper infrastructure layer: cold storage, metadata, retrieval, edge nodes, and asset banking.",
  },
];

const leadershipBoard = [
  {
    title: "Infrastructure Leadership",
    text: "Data center, storage architecture, enterprise infrastructure, and long-life operations experience.",
  },
  {
    title: "AI & Knowledge Systems",
    text: "Enterprise RAG, retrieval, metadata governance, edge AI, and private knowledge workflow expertise.",
  },
  {
    title: "Finance & Data Assets",
    text: "Data valuation, institutional partnerships, asset operations, compliance, and Hong Kong capital market perspective.",
  },
  {
    title: "Strategic Advisory Board",
    text: "Advisors across AI infrastructure, regulated industries, public-sector data, and cross-border commercial partnerships.",
  },
];

function InvestorVisual({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_28px_100px_hsl(var(--primary)/0.18)]">
      <Image
        src={src}
        alt={alt}
        width={1376}
        height={768}
        priority={priority}
        className="h-auto w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function IconCard({ item }: { item: CardItem }) {
  return (
    <SurfaceCard
      className="h-full bg-spark-surface-1/78 p-5"
      icon={<item.icon className="size-5" aria-hidden="true" />}
    >
      <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
    </SurfaceCard>
  );
}

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-background">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,hsl(var(--background))_0%,hsl(var(--surface-1))_48%,hsl(var(--primary)/0.18)_78%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative z-10 flex min-h-[92vh] items-center pb-16 pt-28 sm:pb-20 lg:pt-36">
          <div className="grid w-full gap-10 lg:grid-cols-[0.92fr_0.9fr] lg:items-center xl:gap-16">
            <AnimatedBlock>
              <p className="inline-flex rounded-md border border-accent/25 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur">
                Investor Version 4.0
              </p>
              <h1 className="mt-7 max-w-4xl text-[1.9rem] font-semibold leading-[1.09] tracking-normal text-foreground sm:text-[2.85rem] lg:text-[3.75rem]">
                From Cold Data Storage to Data Asset Banking
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-accent sm:text-2xl">
                Building Asia&apos;s first AI Data Asset Infrastructure Platform
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Unlocking the value of the world&apos;s fastest growing data assets through
                AI-ready cold data infrastructure, private knowledge activation, and trusted
                data asset banking.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["100PB Hong Kong AI Cold Data Center", "BlueSafe RAG Cloud", "Data Asset Bank"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-4 py-3 text-sm font-semibold leading-5 text-foreground shadow-spark-sm"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Book Investor Meeting
                    <CalendarRange aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/investors/deck">
                    View Investor Deck
                    <Download aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12}>
              <InvestorVisual src={visualAssets.cover} alt="Spark AI investor version 4.0 cover" priority />
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <Section tone="inset" className="py-14 sm:py-18 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((metric, index) => (
            <AnimatedBlock key={metric.value} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/72 p-5 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                  0{index + 1}
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-normal text-accent sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.label}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Market Opportunity / 市场机会"
          title="A new infrastructure market is forming around AI-ready data assets."
          description="Spark AI targets the intersection of global data growth, cold data preservation, AI infrastructure demand, and data asset banking."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {marketOpportunity.map((item) => (
            <IconCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Investor Briefing / 投资人说明"
          title="The timing, platform, and investment case behind Spark AI."
          description="Spark AI positions cold data as the next infrastructure layer for enterprise AI, knowledge activation, and data asset banking."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {investorBriefingSections.map((section, sectionIndex) => (
            <AnimatedBlock key={section.title} delay={sectionIndex * 0.06}>
              <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-background/72 p-5 shadow-[0_22px_80px_hsl(var(--primary)/0.16)] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/75 to-transparent" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                      0{sectionIndex + 1}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-base font-medium text-accent/90">{section.titleZh}</p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    {sectionIndex === 0 ? (
                      <Zap className="size-5" aria-hidden="true" />
                    ) : sectionIndex === 1 ? (
                      <Layers3 className="size-5" aria-hidden="true" />
                    ) : (
                      <LineChart className="size-5" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  {section.points.map((point) => (
                    <div key={point.title} className="rounded-lg border border-white/10 bg-spark-surface-1/70 p-4">
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold leading-5 text-foreground">{point.title}</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Flagship Infrastructure"
              title="Hong Kong 100PB AI Cold Data Center"
              description="A flagship roadmap for long-life, low-energy, AI-ready cold data infrastructure serving enterprises, public institutions, research bodies, and financial data owners."
            />
            <AnimatedStagger className="mt-8 grid gap-4">
              {dataCenterItems.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </AnimatedStagger>
          </div>
          <AnimatedBlock delay={0.1}>
            <InvestorVisual src={visualAssets.roadmap} alt="Hong Kong 100PB AI cold data center roadmap" />
          </AnimatedBlock>
        </div>
      </Section>

      <Section tone="grid">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedBlock>
            <InvestorVisual src={visualAssets.business} alt="Spark AI business model" />
          </AnimatedBlock>
          <div>
            <SectionHeader
              eyebrow="Business Model"
              title="Recurring infrastructure revenue with data asset upside"
              description="Spark AI combines durable storage economics, AI knowledge activation, and institutional data asset services into one operating model."
            />
            <div className="mt-8 grid gap-4">
              {businessModel.map((item) => (
                <IconCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why We Win / 胜出逻辑"
          title="Spark AI is not another storage vendor or AI software layer."
          description="The platform combines physical cold data infrastructure, private knowledge activation, enterprise edge deployment, and data asset banking into one defensible stack."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {whyWeWin.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1/76 p-6 shadow-[0_22px_80px_hsl(var(--primary)/0.14)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/75 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                  Comparison 0{index + 1}
                </p>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            eyebrow="Why Spark AI"
            title="Positioned at the infrastructure layer of enterprise AI"
            description="Most AI investment focuses on models and applications. Spark AI targets the durable layer beneath them: governed data, cold storage, retrieval, and asset monetization."
          />
          <AnimatedBlock delay={0.1}>
            <InvestorVisual src={visualAssets.architecture} alt="Spark AI five-layer ecosystem architecture" />
          </AnimatedBlock>
        </div>
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-3">
          {whySpark.map((item) => (
            <IconCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <AnimatedBlock>
            <InvestorVisual src={visualAssets.highlights} alt="Spark AI investor highlights" />
          </AnimatedBlock>
          <div>
            <SectionHeader
              eyebrow="Investor Highlights"
              title="A focused infrastructure thesis for the AI data economy"
              description="Spark AI gives investors a clear, asset-backed story around cold data, AI activation, energy efficiency, and Hong Kong as a regional data infrastructure base."
            />
            <div className="mt-8 grid gap-4">
              {investorHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-spark-surface-1/76 p-5">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="spark" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Book Investor Meeting
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/investors/deck">
                  View Investor Deck
                  <Download aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="inset" className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Financial Services", "Compliance archives, risk knowledge, governed retrieval."],
            ["Public Sector", "Sovereign data reserves and long-term records preservation."],
            ["Research & Education", "Research datasets, institutional memory, reusable AI libraries."],
            ["Industrial AI", "Telemetry, process history, engineering knowledge, and operations data."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-white/10 bg-background/72 p-5">
              <Factory className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Leadership & Advisory Board / 领导团队与顾问委员会"
          title="Built by operators across infrastructure, AI systems, and data asset finance."
          description="Spark AI brings together the capabilities required to build institutional data infrastructure: engineering, governance, commercialization, and capital-market execution."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leadershipBoard.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/72 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                    Board 0{index + 1}
                  </p>
                  <span className="flex size-10 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <Building2 className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-6 shadow-spark-md sm:p-8 lg:p-10">
          <div className="absolute inset-0 spark-grid opacity-20" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                Investor Contact / 投资人联系
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                Join the buildout of Asia&apos;s AI data asset infrastructure.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                Contact Spark AI for investor meetings, strategic partnerships, and the Investor Version 4.0 pitch deck.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Book Investor Meeting
                    <CalendarRange aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/investors">
                    Download Pitch Deck
                    <Download aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-accent/20 bg-accent/10 p-5">
                <div className="flex gap-3">
                  <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">info@sparkai.hk</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Investor relations and strategic partnership inquiries.
                    </p>
                  </div>
                </div>
              </div>
              {[
                "Book Investor Meeting",
                "Download Pitch Deck",
                "Discuss Hong Kong 100PB AI Cold Data Center partnerships",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-background/68 p-5">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-background py-8">
        <Container>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>2026 Spark AI Technology Limited</p>
            <p className="font-medium text-accent/90">Hong Kong AI Data Infrastructure Operator</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
