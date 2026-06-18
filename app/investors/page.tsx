import type { Metadata } from "next";
import Image from "next/image";
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
  Landmark,
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

export const metadata: Metadata = {
  title: "Investors | Spark AI Technology Limited",
  description:
    "Investor Version 4.0 for Spark AI, Asia's AI data asset infrastructure platform for cold data, RAG cloud, and data asset banking.",
};

type CardItem = {
  title: string;
  titleZh: string;
  text: string;
  textZh: string;
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
    value: "100PB",
    label: "Hong Kong AI Cold Data Center",
    labelZh: "香港 AI 冷数据中心旗舰容量",
  },
  {
    value: "5 Layers",
    label: "Data asset infrastructure stack",
    labelZh: "五层数据资产基础设施",
  },
  {
    value: "4 Engines",
    label: "Storage, RAG, edge nodes, banking",
    labelZh: "光储存、RAG、边缘节点、数据银行",
  },
  {
    value: "2030",
    label: "Data Asset Bank operating horizon",
    labelZh: "数据资产银行运营目标",
  },
];

const marketOpportunity: CardItem[] = [
  {
    title: "Global Data Growth",
    titleZh: "全球数据增长",
    text: "Enterprise archives, media, telemetry, research, and AI-generated knowledge are expanding faster than legacy storage models.",
    textZh: "企业档案、媒体、遥测、科研和 AI 生成知识持续增长，传统存储模式难以长期承接。",
    icon: LineChart,
  },
  {
    title: "Cold Data Explosion",
    titleZh: "冷数据爆发",
    text: "Most institutional data becomes low-frequency access data, but AI now needs it as long-term historical memory.",
    textZh: "大量机构数据进入低频访问状态，但 AI 需要这些长期历史数据作为知识燃料。",
    icon: Database,
  },
  {
    title: "AI Infrastructure Market",
    titleZh: "AI 基础设施市场",
    text: "Private RAG, governed retrieval, metadata, and data center custody are becoming core infrastructure needs.",
    textZh: "私有 RAG、治理检索、元数据和数据中心托管正在成为企业 AI 的基础设施需求。",
    icon: Network,
  },
  {
    title: "Data Asset Banking",
    titleZh: "数据资产银行",
    text: "Governed datasets can evolve from storage liabilities into valued, permissioned, and bankable data assets.",
    textZh: "经治理的数据集可从存储负担升级为可估值、可授权、可运营的数据资产。",
    icon: Banknote,
  },
];

const platformModules: CardItem[] = [
  {
    title: "AI Cold Data Center",
    titleZh: "AI 冷数据中心",
    text: "Purpose-built capacity for long-life, low-energy, AI-ready enterprise cold data custody.",
    textZh: "面向企业冷数据的长寿命、低能耗、AI-ready 托管容量。",
    icon: DatabaseZap,
  },
  {
    title: "BlueSafe RAG Cloud",
    titleZh: "BlueSafe RAG 云",
    text: "Transforms preserved data into private search, knowledge bases, copilots, and AI workflows.",
    textZh: "把保存的数据转化为私有检索、知识库、Copilot 和 AI 工作流。",
    icon: CloudCog,
  },
  {
    title: "Enterprise Edge Nodes",
    titleZh: "企业边缘节点",
    text: "Supports secure local ingestion, indexing, retrieval preparation, and regional AI services.",
    textZh: "支持本地安全接入、索引、检索准备和区域化 AI 服务。",
    icon: Layers3,
  },
  {
    title: "Data Asset Bank",
    titleZh: "数据资产银行",
    text: "Operates data accounts, valuation, authorized access, trusted circulation, and asset services.",
    textZh: "运营数据账户、估值、授权访问、可信流通和资产服务。",
    icon: Banknote,
  },
];

const whyWeWin = [
  {
    title: "Spark AI vs Cloud Storage",
    titleZh: "对比云存储",
    text: "Cloud storage focuses on availability and scale. Spark AI focuses on cold data custody, energy economics, AI readiness, and asset conversion.",
  },
  {
    title: "Spark AI vs Traditional Archive",
    titleZh: "对比传统归档",
    text: "Traditional archives preserve records. Spark AI preserves, governs, activates, and monetizes institutional data.",
  },
  {
    title: "Spark AI vs AI Knowledge Platforms",
    titleZh: "对比 AI 知识平台",
    text: "Knowledge platforms start at software. Spark AI owns the deeper infrastructure layer beneath RAG and enterprise AI.",
  },
];

const roadmap = [
  {
    year: "2026",
    title: "Company Launch",
    titleZh: "公司启动",
    text: "Launch Spark AI, establish investor thesis, product architecture, and enterprise pilot pipeline.",
  },
  {
    year: "2027",
    title: "100PB AI Cold Data Center",
    titleZh: "100PB AI 冷数据中心落地",
    text: "Build Hong Kong flagship capacity for institutional archives, BlueSafe preservation, and AI governance.",
  },
  {
    year: "2028",
    title: "BlueSafe RAG Cloud",
    titleZh: "BlueSafe RAG 云上线",
    text: "Connect governed cold data to private retrieval, copilots, agents, and industry knowledge workflows.",
  },
  {
    year: "2030",
    title: "Data Asset Bank",
    titleZh: "数据资产银行运营",
    text: "Scale data accounts, valuation services, authorized access, and trusted circulation infrastructure.",
  },
];

const leadership = [
  "Infrastructure and data center operations",
  "Enterprise AI, RAG, and knowledge systems",
  "Optical storage and long-life preservation",
  "Finance, compliance, and data asset operations",
];

const highlights = [
  "Hong Kong 100PB AI Cold Data Center",
  "Recurring SaaS Revenue",
  "Data Asset Banking",
  "AI Infrastructure Licensing",
  "Multi-decade Data Lifecycle",
];

function InvestorVisual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
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

function BilingualCard({ item }: { item: CardItem }) {
  return (
    <SurfaceCard
      className="h-full bg-spark-surface-1/78 p-5"
      icon={<item.icon className="size-6" aria-hidden="true" />}
    >
      <h3 className="text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
    </SurfaceCard>
  );
}

export default function InvestorsPage() {
  return (
    <main className="bg-background">
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,hsl(var(--background))_0%,hsl(var(--surface-1))_48%,hsl(var(--primary)/0.18)_78%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-0 spark-grid opacity-25" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-md border border-accent/25 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur">
                Investor Version 4.0 / 投资人版本
              </p>
              <h1 className="mt-7 max-w-4xl text-[2rem] font-semibold leading-[1.08] tracking-normal text-foreground sm:text-[2.85rem] lg:text-[3.75rem]">
                From Cold Data Storage to Data Asset Banking
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-accent sm:text-2xl">
                Building Asia&apos;s first AI Data Asset Infrastructure Platform
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Spark AI builds the infrastructure layer that preserves institutional data,
                activates enterprise knowledge, and turns governed datasets into long-term data assets.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground/80 sm:text-base">
                Spark AI 致力于建设 AI 数据资产基础设施，把企业冷数据从存储成本升级为可治理、可检索、可估值的数据资产。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="w-full sm:w-auto">
                  <Link href="mailto:info@sparkai.hk">
                    Book Investor Meeting
                    <CalendarRange aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/investors/deck">
                    View Investor Deck
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12}>
              <InvestorVisual src={visualAssets.cover} alt="Spark AI investor deck cover" priority />
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
                <p className="mt-3 text-sm leading-6 text-foreground/90">{metric.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{metric.labelZh}</p>
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
            <BilingualCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section tone="panel">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Platform Stack / 平台架构"
            title="Four product engines for AI data asset infrastructure."
            description="The investor thesis is a connected platform: AI Cold Data Center, BlueSafe RAG Cloud, Enterprise Edge Nodes, and Data Asset Bank."
          />
          <AnimatedBlock delay={0.1}>
            <InvestorVisual src={visualAssets.architecture} alt="Spark AI ecosystem architecture" />
          </AnimatedBlock>
        </div>
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {platformModules.map((item) => (
            <BilingualCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why We Win / 胜出逻辑"
          title="Spark AI is not another storage vendor or AI software layer."
          description="The platform combines physical cold data infrastructure, private knowledge activation, enterprise edge deployment, and data asset banking."
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
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Hong Kong 100PB Roadmap / 香港 100PB 路线图"
              title="A flagship infrastructure plan for Asia-Pacific enterprise AI memory."
              description="The Hong Kong plan anchors the investor story on capacity, trust, governance, RAG activation, and future data asset operations."
            />
            <div className="mt-8 grid gap-4">
              {roadmap.map((item) => (
                <div key={item.year} className="rounded-lg border border-white/10 bg-background/74 p-5 shadow-spark-sm">
                  <div className="flex items-start gap-4">
                    <p className="min-w-16 text-2xl font-semibold text-accent">{item.year}</p>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AnimatedBlock delay={0.1}>
            <InvestorVisual src={visualAssets.roadmap} alt="Spark AI Hong Kong 100PB roadmap" />
          </AnimatedBlock>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <AnimatedBlock>
            <InvestorVisual src={visualAssets.business} alt="Spark AI business model" />
          </AnimatedBlock>
          <div>
            <SectionHeader
              eyebrow="Investment Highlights / 投资亮点"
              title="A focused infrastructure thesis for the AI data economy."
              description="Spark AI combines recurring SaaS revenue, data asset banking, AI infrastructure licensing, and multi-decade data lifecycle value."
            />
            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-spark-surface-1/76 p-5">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Leadership & Advisory Board / 领导团队与顾问委员会"
          title="Built by operators across infrastructure, AI systems, and data asset finance."
          description="Spark AI brings together the capabilities required to build institutional data infrastructure: engineering, governance, commercialization, and capital-market execution."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leadership.map((item, index) => (
            <AnimatedBlock key={item} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/72 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                    Board 0{index + 1}
                  </p>
                  <span className="flex size-10 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <Building2 className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item}</h2>
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
                  <Link href="mailto:info@sparkai.hk">
                    Book Investor Meeting
                    <CalendarRange aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/investors/deck">
                    View Investor Deck
                    <ArrowRight aria-hidden="true" />
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
              {["Book Investor Meeting", "Download Pitch Deck", "Discuss Hong Kong 100PB AI Cold Data Center"].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-background/68 p-5">
                  <Landmark className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
