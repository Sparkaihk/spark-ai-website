import type { Metadata } from "next";
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
  Globe2,
  Landmark,
  Layers3,
  LineChart,
  Mail,
  Network,
  PieChart,
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
  title: "Investor Deck | Spark AI Technology Limited",
  description:
    "Investor Version 6.0 deck for Spark AI, Asia's AI data asset infrastructure platform.",
};

type DeckCard = {
  title: string;
  titleZh: string;
  text: string;
  icon: LucideIcon;
};

const marketCards: DeckCard[] = [
  {
    title: "Global Data Growth",
    titleZh: "全球数据增长",
    text: "Enterprise archives, operational records, media, telemetry, research data, and AI-generated content are expanding at infrastructure scale.",
    icon: LineChart,
  },
  {
    title: "Enterprise Cold Data Explosion",
    titleZh: "企业冷数据爆发",
    text: "Most institutional data becomes low-frequency access data, yet it remains essential historical memory for AI systems.",
    icon: Database,
  },
  {
    title: "AI Knowledge Infrastructure",
    titleZh: "AI 知识基础设施",
    text: "Private RAG, metadata governance, secure retrieval, and knowledge activation are becoming core enterprise AI infrastructure.",
    icon: Network,
  },
  {
    title: "Data Asset Banking",
    titleZh: "数据资产银行",
    text: "Governed datasets can become permissioned, valued, and bankable assets through custody, authorization, and trusted circulation.",
    icon: Banknote,
  },
];

const platformLayers: DeckCard[] = [
  {
    title: "Hong Kong 100PB AI Cold Data Center",
    titleZh: "香港 100PB AI 冷数据中心",
    text: "Flagship capacity for long-life cold data preservation, governance, and AI-ready institutional custody.",
    icon: DatabaseZap,
  },
  {
    title: "BlueSafe RAG Cloud",
    titleZh: "BlueSafe RAG 云",
    text: "Private retrieval, vector-ready metadata, copilots, and knowledge workflows built on preserved cold data.",
    icon: CloudCog,
  },
  {
    title: "Enterprise Edge Nodes",
    titleZh: "企业边缘节点",
    text: "Secure local ingestion, indexing, governance, and regional AI services for enterprise data owners.",
    icon: Layers3,
  },
  {
    title: "Data Asset Bank",
    titleZh: "数据资产银行",
    text: "Data accounts, valuation, authorized access, trusted circulation, and future transaction services.",
    icon: Banknote,
  },
];

const businessModel: DeckCard[] = [
  {
    title: "Infrastructure Revenue",
    titleZh: "基础设施收入",
    text: "Recurring capacity, custody, governance, and managed AI cold data center service fees.",
    icon: Building2,
  },
  {
    title: "RAG SaaS Subscription",
    titleZh: "RAG SaaS 订阅",
    text: "Subscription and usage revenue from private retrieval, knowledge workflows, copilots, and AI agents.",
    icon: CloudCog,
  },
  {
    title: "Data Custody Service",
    titleZh: "数据托管服务",
    text: "Long-life preservation, metadata management, rights controls, and secure access for institutional data.",
    icon: ShieldCheck,
  },
  {
    title: "Data Asset Transaction Service",
    titleZh: "数据资产交易服务",
    text: "Future services for data accounts, valuation, authorization, trusted access, and controlled circulation.",
    icon: Banknote,
  },
  {
    title: "Licensing & Partnership",
    titleZh: "许可与合作",
    text: "Infrastructure licensing, strategic partnerships, and industry deployment with enterprise and public-sector partners.",
    icon: Network,
  },
];

const productRoadmap = [
  ["2026", "Spark AI launch and Hong Kong setup", "Spark AI 启动及香港布局"],
  ["2027", "100PB AI Cold Data Center pilot", "100PB AI 冷数据中心试点"],
  ["2028", "BlueSafe RAG Cloud launch", "BlueSafe RAG 云上线"],
  ["2029", "Enterprise edge node expansion", "企业边缘节点扩展"],
  ["2030", "Data Asset Bank platform", "数据资产银行平台"],
];

const comparisonRows = [
  ["50-year preservation", "Yes", "Limited", "Archive only", "No"],
  ["Low energy cost", "High focus", "Variable", "Medium", "No"],
  ["AI-ready knowledge activation", "Built-in", "Add-on", "No", "Software only"],
  ["Data asset banking", "Core layer", "No", "No", "No"],
  ["Enterprise sovereignty", "Hybrid custody", "Vendor cloud", "Offline", "Depends"],
];

const fundingCards = [
  ["40%", "Infrastructure Build", "Build Hong Kong AI cold data infrastructure"],
  ["25%", "Product Development", "Complete BlueSafe RAG Cloud MVP"],
  ["20%", "Sales & Business Development", "Expand enterprise pilot customers"],
  ["15%", "Operations & Compliance", "Prepare HKSTP and institutional investor engagement"],
];

const revenueRoadmap = [
  ["2026", "Pilot Projects", "Early enterprise pilots and paid proof-of-concept deployments"],
  ["2027", "Cold Data Center Revenue", "Capacity, custody, and managed infrastructure service fees"],
  ["2028", "BlueSafe RAG SaaS", "Recurring subscriptions for private retrieval and knowledge workflows"],
  ["2029", "Enterprise Edge Network", "Distributed edge node deployments and regional service contracts"],
  ["2030", "Data Asset Banking", "Data accounts, valuation, authorization, and trusted circulation services"],
];

const hongKongCards: DeckCard[] = [
  {
    title: "Asia Financial Hub",
    titleZh: "亚洲金融枢纽",
    text: "Hong Kong provides capital access, institutional credibility, and a regional finance gateway for data asset banking.",
    icon: Landmark,
  },
  {
    title: "Data Governance Gateway",
    titleZh: "数据治理门户",
    text: "A trusted base for regulated data infrastructure, compliance workflows, and institutional governance.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-border Data Services",
    titleZh: "跨境数据服务",
    text: "A strategic location for enterprise data services connecting Hong Kong, mainland China, and Asia-Pacific markets.",
    icon: Globe2,
  },
  {
    title: "HKSTP Innovation Ecosystem",
    titleZh: "香港科技园创新生态",
    text: "Access to technology partners, advisors, enterprise pilots, and innovation support infrastructure.",
    icon: Network,
  },
];

const partnerLogos = [
  "HKSTP",
  "Enterprise Clients",
  "Research Institutions",
  "Infrastructure Partners",
];

const useOfFundsCards: DeckCard[] = [
  {
    title: "Infrastructure",
    titleZh: "40%",
    text: "Build the AI cold data infrastructure base",
    icon: DatabaseZap,
  },
  {
    title: "Product",
    titleZh: "25%",
    text: "Complete BlueSafe RAG Cloud MVP",
    icon: CloudCog,
  },
  {
    title: "Sales",
    titleZh: "20%",
    text: "Enterprise pilot and business development",
    icon: LineChart,
  },
  {
    title: "Operations",
    titleZh: "15%",
    text: "Compliance, HKSTP preparation, and execution",
    icon: ShieldCheck,
  },
];

const investorCtaCards: DeckCard[] = [
  {
    title: "Book Investor Meeting",
    titleZh: "预约投资人会议",
    text: "Schedule a discussion with Spark AI",
    icon: CalendarRange,
  },
  {
    title: "Download Investor Deck PDF",
    titleZh: "下载投资人路演 PDF",
    text: "Investor Version 6.0 deck request",
    icon: Download,
  },
  {
    title: "info@sparkai.hk",
    titleZh: "投资者关系邮箱",
    text: "Investor relations and strategic partnership inquiries",
    icon: Mail,
  },
];

function DeckSurfaceCard({ item }: { item: DeckCard }) {
  return (
    <SurfaceCard
      className="h-full bg-spark-surface-1/78 p-5"
      icon={<item.icon className="size-6" aria-hidden="true" />}
    >
      <h3 className="text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
    </SurfaceCard>
  );
}

export default function InvestorDeckPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,hsl(var(--background))_0%,hsl(var(--surface-1))_48%,hsl(var(--primary)/0.18)_78%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-0 spark-grid opacity-25" />
        <Container className="relative z-10">
          <AnimatedBlock className="max-w-5xl">
            <p className="inline-flex rounded-md border border-accent/25 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur">
              Investor Deck / 投资人路演
            </p>
            <h1 className="mt-7 max-w-5xl text-[2rem] font-semibold leading-[1.08] tracking-normal text-foreground sm:text-[2.9rem] lg:text-[4rem]">
              <span className="block">From Cold Data Storage</span>
              <span className="block">to Data Asset Banking</span>
            </h1>
            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-accent sm:text-2xl">
              Investor Version 6.0 for investors, HKSTP advisors, and strategic infrastructure partners.
            </p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
              Spark AI is building Asia&apos;s first AI Data Asset Infrastructure Platform,
              connecting long-life optical cold data storage, BlueSafe RAG Cloud, enterprise
              edge nodes, and data asset banking.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground/80 sm:text-base">
              Spark AI 正在建设亚洲首个 AI 数据资产基础设施平台，连接长期光储存、BlueSafe RAG 云、企业边缘节点与数据资产银行。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="spark" size="lg" className="w-full sm:w-auto">
                <Link href="mailto:info@sparkai.hk">
                  Book Investor Meeting
                  <CalendarRange aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/investors">
                  Back to Investors
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Investment Thesis / 投资逻辑"
          title="From Cold Data Storage to Data Asset Banking"
          description="Spark AI connects long-life optical cold data storage, BlueSafe RAG Cloud, enterprise edge nodes, and data asset banking into one AI data asset infrastructure platform."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {platformLayers.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-white/10 bg-spark-surface-1/78 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                  Layer 0{index + 1}
                </p>
                <div className="mt-5 flex size-11 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Market Opportunity / 市场机会"
          title="Four markets converge into one AI data asset infrastructure category."
          description="The deck frames Spark AI around data growth, cold data preservation, AI knowledge infrastructure, and future data asset banking."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {marketCards.map((item) => (
            <DeckSurfaceCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Business Model / 商业模式"
          title="Multiple recurring revenue layers across the data lifecycle."
          description="Spark AI combines infrastructure revenue, RAG SaaS subscriptions, custody services, asset services, and licensing partnerships."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {businessModel.map((item) => (
            <DeckSurfaceCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Roadmap / 发展路线图"
          title="A staged path from launch to Data Asset Bank platform."
          description="The roadmap ties execution to Hong Kong infrastructure, product release, enterprise expansion, and data asset banking."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {productRoadmap.map(([year, title, titleZh], index) => (
            <AnimatedBlock key={year} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <p className="text-3xl font-semibold tracking-normal text-accent">{year}</p>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{titleZh}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why We Win / 竞争优势"
          title="Spark AI owns a deeper stack than storage, archive, or software-only knowledge platforms."
          description="The comparison shows how Spark AI combines preservation, energy economics, AI activation, data asset banking, and enterprise sovereignty."
        />
        <div className="mt-12 overflow-x-auto rounded-lg border border-white/10 bg-spark-surface-1/76 shadow-[0_22px_80px_hsl(var(--primary)/0.14)]">
          <div className="grid min-w-[52rem] grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10 bg-background/70 text-sm font-semibold text-foreground">
            {["Dimension", "Spark AI", "Cloud Storage", "Traditional Archive", "AI Knowledge Platform"].map((header) => (
              <div key={header} className="border-r border-white/10 p-4 last:border-r-0">
                {header}
              </div>
            ))}
          </div>
          {comparisonRows.map((row) => (
            <div key={row[0]} className="grid min-w-[52rem] grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10 last:border-b-0">
              {row.map((cell, index) => (
                <div
                  key={`${row[0]}-${cell}`}
                  className={`border-r border-white/10 p-4 text-sm leading-6 last:border-r-0 ${
                    index === 1 ? "font-semibold text-accent" : index === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeader
            eyebrow="Funding Ask / 融资需求"
            title="Funding Ask"
            description="Seed Round target: US$2M-5M to build Hong Kong infrastructure, complete product MVP, expand pilots, and prepare HKSTP and institutional investor engagement."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatedBlock className="sm:col-span-2">
              <div className="rounded-lg border border-accent/20 bg-accent/10 p-6 shadow-spark-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Seed Round</p>
                <p className="mt-3 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
                  US$2M-5M
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Target financing range for Investor Version 6.0 execution plan.
                </p>
              </div>
            </AnimatedBlock>
            {fundingCards.map(([percent, title, text], index) => (
              <AnimatedBlock key={title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-white/10 bg-background/72 p-5 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                  <p className="text-3xl font-semibold tracking-normal text-accent">{percent}</p>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeader
            eyebrow="Use of Funds / 资金使用"
            title="Capital allocation across infrastructure, product, sales, and operations."
            description="The allocation is designed to turn the 100PB Hong Kong infrastructure thesis into a deployable product and customer pipeline."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {useOfFundsCards.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-spark-surface-1/78 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold text-accent">{item.titleZh}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <item.icon className="size-6 text-accent" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Revenue Roadmap / 收入路线图"
          title="A five-year path from pilots to data asset banking."
          description="Revenue expands from early pilots into infrastructure services, SaaS subscriptions, edge network deployments, and data asset banking."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {revenueRoadmap.map(([year, title, text], index) => (
            <AnimatedBlock key={year} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                <p className="text-3xl font-semibold tracking-normal text-accent">{year}</p>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why Hong Kong? / 为什么选择香港？"
          title="Hong Kong is the launch market for AI data asset infrastructure."
          description="Spark AI uses Hong Kong as a capital, governance, partnership, and cross-border data services gateway."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hongKongCards.map((item) => (
            <DeckSurfaceCard key={item.title} item={item} />
          ))}
        </AnimatedStagger>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Strategic Partners / 战略伙伴"
          title="Partner ecosystem reserved for HKSTP, enterprise clients, research institutions, and infrastructure partners."
          description="Logo placeholders are reserved for future confirmed partnerships and investor materials."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerLogos.map((partner) => (
            <AnimatedBlock key={partner}>
              <div className="flex min-h-36 items-center justify-center rounded-lg border border-white/10 bg-background/72 p-6 text-center shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <div>
                  <div className="mx-auto flex size-14 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                    <Building2 className="size-7" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-foreground">{partner}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Placeholder Logo
                  </p>
                </div>
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
                Investor CTA / 投资者行动
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                Discuss Investor Version 6.0 with Spark AI.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                For investors, HKSTP advisors, and strategic partners evaluating AI data infrastructure.
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
                    Download Investor Deck PDF
                    <Download aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {investorCtaCards.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-background/68 p-5">
                  <div className="flex gap-3">
                    <item.icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
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
            <p className="font-medium text-accent/90">
              Building Asia&apos;s First AI Data Asset Infrastructure Platform
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
