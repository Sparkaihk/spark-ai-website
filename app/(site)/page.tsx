import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CloudCog,
  Database,
  Layers3,
  Mail,
  Presentation,
  Server,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import {
  InvestorArchitecture,
  MetricStrip,
  SparkHero,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { homepageMetrics } from "@/lib/homepage-content";

const coreBusiness = [
  {
    title: "BlueSafe Storage",
    titleZh: "蓝光安全存储",
    description:
      "Long-life cold data preservation for compliance archives, media assets, research datasets, and institutional records.",
    descriptionZh:
      "面向合规归档、媒体资产、科研数据与机构记录的长期冷数据保存基础设施。",
    icon: ShieldCheck,
  },
  {
    title: "AI Cold Data Center",
    titleZh: "AI冷数据中心",
    description:
      "A capacity layer that combines low-energy archive storage, secure data custody, and AI-ready metadata governance.",
    descriptionZh:
      "融合低能耗归档存储、安全托管与AI可用元数据治理的容量层。",
    icon: Server,
  },
  {
    title: "Enterprise RAG Platform",
    titleZh: "企业RAG平台",
    description:
      "Private retrieval and knowledge activation platform for copilots, agents, enterprise search, and decision workflows.",
    descriptionZh:
      "面向企业智能体、知识搜索与决策流程的私有化检索增强生成平台。",
    icon: CloudCog,
  },
  {
    title: "Data Asset Banking",
    titleZh: "数据资产银行",
    description:
      "Data asset accounts, valuation workflows, permissioned access, and trusted circulation services for enterprises.",
    descriptionZh:
      "为企业提供数据资产账户、价值评估、授权访问与可信流通服务。",
    icon: Banknote,
  },
];

const marketCharts = [
  {
    title: "Global AI Data Explosion",
    titleZh: "全球AI数据爆发",
    value: "600ZB+",
    note: "Projected AI-era data volume by 2030",
    noteZh: "2030年AI时代数据规模预期",
    bars: [42, 58, 74, 88, 100],
    icon: TrendingUp,
  },
  {
    title: "AI Training Data Storage",
    titleZh: "AI训练数据存储需求",
    value: "100PB+",
    note: "Cold data capacity target for model-era datasets",
    noteZh: "面向模型时代数据集的冷数据容量目标",
    bars: [28, 46, 63, 81, 96],
    icon: Database,
  },
  {
    title: "Private Knowledge Bases",
    titleZh: "企业私有知识库需求",
    value: "90%+",
    note: "Enterprise data still underused by AI systems",
    noteZh: "企业数据仍未被AI系统充分利用",
    bars: [35, 49, 67, 79, 92],
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Asset Securitization",
    titleZh: "数据资产证券化趋势",
    value: "New Asset",
    note: "Governed data is becoming a financial infrastructure category",
    noteZh: "可治理数据正在形成新的金融基础设施类别",
    bars: [18, 31, 52, 76, 91],
    icon: BarChart3,
  },
];

const businessModel = [
  {
    title: "Storage Revenue",
    titleZh: "存储收入",
    description:
      "Recurring cold storage, archive capacity, and managed data custody fees.",
    icon: Database,
  },
  {
    title: "RAG SaaS Revenue",
    titleZh: "RAG SaaS收入",
    description:
      "Subscription and usage-based revenue from enterprise knowledge cloud services.",
    icon: CloudCog,
  },
  {
    title: "Data Asset Services",
    titleZh: "数据资产服务",
    description:
      "Asset account setup, valuation, governance, authorization, and circulation services.",
    icon: Banknote,
  },
  {
    title: "AI Infrastructure Services",
    titleZh: "AI基础设施服务",
    description:
      "Deployment, integration, operations, and private infrastructure services for enterprise AI.",
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
    <main>
      <SparkHero />

      <MetricStrip metrics={homepageMetrics} />

      <InvestorArchitecture />

      <Section tone="panel">
        <SectionHeader
          eyebrow="Core Business Units / 核心业务板块"
          title="Four operating units convert data infrastructure into revenue."
          description="Spark AI combines cold data storage, AI-ready archive capacity, enterprise RAG, and data asset services into one commercial platform. Spark AI通过四大核心业务将数字资产基础设施转化为可规模化收入。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coreBusiness.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <SurfaceCard className="group relative h-full overflow-hidden border-white/10 bg-white/[0.045] p-6 shadow-[0_22px_90px_hsl(var(--primary)/0.14)] backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                <div className="absolute -right-16 -top-16 size-36 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
                <div className="relative z-10">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <item.icon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Business 0{index + 1}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent/85">
                    {item.titleZh}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground/85">
                    {item.descriptionZh}
                  </p>
                </div>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Market Opportunity / 市场机会"
          title="AI data growth creates demand for storage, knowledge, and asset infrastructure."
          description="The investor thesis is driven by four converging demand curves: AI data explosion, training data storage, private enterprise knowledge bases, and data asset securitization. 四条需求曲线共同推动Spark AI的基础设施机会。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {marketCharts.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <SurfaceCard className="h-full overflow-hidden bg-background/72 p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      <item.icon className="size-6" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Opportunity 0{index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent/85">
                      {item.titleZh}
                    </p>
                  </div>
                  <p className="text-3xl font-semibold tracking-normal text-accent drop-shadow-[0_0_22px_hsl(var(--accent)/0.55)]">
                    {item.value}
                  </p>
                </div>
                <div className="mt-8 flex h-36 items-end gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  {item.bars.map((height, barIndex) => (
                    <div
                      key={height}
                      className="flex flex-1 items-end rounded-md bg-primary/10"
                    >
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-primary via-accent to-white shadow-[0_0_28px_hsl(var(--accent)/0.36)]"
                        style={{ height: `${height}%` }}
                        aria-label={`${item.title} growth point ${barIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {item.note}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground/85">
                  {item.noteZh}
                </p>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Business Model / 商业模式"
          title="Four revenue engines across the AI data asset lifecycle."
          description="Spark AI monetizes data preservation, knowledge activation, data asset services, and infrastructure operations. Spark AI围绕数据保存、知识激活、资产服务和AI基础设施运营形成收入闭环。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {businessModel.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <SurfaceCard className="h-full bg-spark-surface-2/70">
                <div className="flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Revenue 0{index + 1}
                  </p>
                </div>
                <h2 className="mt-6 text-xl font-semibold leading-snug text-foreground">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-accent/85">
                  {item.titleZh}
                </p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <section className="bg-background py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-8 shadow-spark-md sm:p-10 lg:p-12">
            <div className="absolute inset-0 spark-grid opacity-25" />
            <div className="absolute -right-20 -top-24 size-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  Contact Us / 联系我们
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                  Book an investor demo with Spark AI.
                </h2>
                <div className="mt-6 grid gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                  <div className="flex gap-3">
                    <Building2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">Hong Kong Headquarters</p>
                      <p>香港总部</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">hello@spark-ai.example</p>
                      <p>邮箱</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    预约演示
                    <Presentation aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="mailto:hello@spark-ai.example">
                    Email Spark AI
                    <ArrowRight aria-hidden="true" />
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
