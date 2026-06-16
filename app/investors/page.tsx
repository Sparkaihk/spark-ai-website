import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BrainCircuit,
  Building2,
  CalendarRange,
  CloudCog,
  DatabaseZap,
  Download,
  Globe2,
  Landmark,
  LineChart,
  Network,
  PieChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Investors | Spark AI Technology Limited",
  description:
    "Spark AI investor page covering market opportunity, product matrix, Hong Kong 100PB AI cold data center plan, and investor relations.",
};

const heroMetrics = [
  { value: "100PB+", label: "Hong Kong AI cold data target", labelZh: "香港 AI 冷數據目標容量" },
  { value: "AI + Optical + RAG", label: "Platform strategy", labelZh: "平台化戰略" },
  { value: "2030", label: "Data asset network horizon", labelZh: "數據資產網絡節點" },
];

const marketSignals = [
  {
    title: "Enterprise AI is data constrained",
    titleZh: "企業 AI 受限於數據基礎設施",
    text: "Model adoption is accelerating, but enterprise data remains fragmented across archives, records, media, research, and operating systems.",
    textZh: "模型採用正在加速，但企業數據仍分散在檔案、記錄、媒體、科研與營運系統之中。",
    icon: BrainCircuit,
  },
  {
    title: "Cold data is becoming strategic memory",
    titleZh: "冷數據正在成為戰略記憶層",
    text: "Institutions need durable, governed, searchable data layers that turn preserved data into production AI context.",
    textZh: "機構需要可長期保存、可治理、可搜尋的數據層，將保存數據轉化為生產級 AI 上下文。",
    icon: DatabaseZap,
  },
  {
    title: "Data asset operations are emerging",
    titleZh: "數據資產運營正在形成",
    text: "Custody, valuation, permissioned access, and trusted circulation are becoming infrastructure requirements.",
    textZh: "托管、估值、授權訪問與可信流通正在成為新的基礎設施需求。",
    icon: Banknote,
  },
];

const productMatrix = [
  {
    title: "RTX Spark AI Storage Appliance",
    titleZh: "RTX Spark AI 存儲一體機",
    text: "Enterprise edge layer for cold data ingestion, indexing, governance, and retrieval preparation.",
    textZh: "面向冷數據接入、索引、治理與檢索準備的企業邊緣層。",
    icon: DatabaseZap,
  },
  {
    title: "BlueSafe Optical Preservation",
    titleZh: "BlueSafe 光存儲長期保存",
    text: "Durable preservation infrastructure for archives, compliance records, media, research, and sovereign data.",
    textZh: "面向檔案、合規記錄、媒體、科研與主權數據的長期保存基礎設施。",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise RAG Cloud",
    titleZh: "企業 RAG 雲",
    text: "Private retrieval, vector-ready metadata, knowledge workflows, and AI agent integration.",
    textZh: "私有檢索、向量化元數據、知識工作流與 AI 智能體整合。",
    icon: CloudCog,
  },
  {
    title: "Data Asset Bank",
    titleZh: "數據資產銀行",
    text: "Future data accounts, valuation, authorized access, trusted circulation, and asset operations.",
    textZh: "未來數據賬戶、估值、授權訪問、可信流通與資產運營。",
    icon: Banknote,
  },
];

const infrastructurePlan = [
  {
    year: "2026",
    title: "Company Launch",
    titleZh: "公司啟動",
    text: "Establish the investor thesis, flagship product architecture, enterprise pilot pipeline, and Hong Kong partnership base.",
    textZh: "建立投資敘事、旗艦產品架構、企業試點管線與香港合作基礎。",
  },
  {
    year: "2027",
    title: "100PB AI Cold Data Center",
    titleZh: "100PB AI 冷數據中心",
    text: "Build Hong Kong flagship capacity for enterprise archives, BlueSafe preservation, and AI-ready governance.",
    textZh: "建設香港旗艦容量，支撐企業檔案、BlueSafe 長期保存與 AI 可用治理。",
  },
  {
    year: "2028",
    title: "RAG Knowledge Cloud",
    titleZh: "RAG 知識雲",
    text: "Connect governed cold data to private retrieval, copilots, agents, and industry knowledge workflows.",
    textZh: "將治理後的冷數據連接至私有檢索、Copilot、智能體與行業知識工作流。",
  },
  {
    year: "2030",
    title: "Data Asset Operations",
    titleZh: "數據資產運營",
    text: "Scale data accounts, valuation services, authorized access, and trusted circulation infrastructure.",
    textZh: "擴展數據賬戶、估值服務、授權訪問與可信流通基礎設施。",
  },
];

const roadmap = [
  {
    year: "2026",
    items: [
      {
        title: "Spark AI Platform Launch",
        titleZh: "Spark AI 平台啟動",
      },
      {
        title: "RTX Spark Appliance Release",
        titleZh: "RTX Spark 一體機發布",
      },
      {
        title: "HKSTP Application",
        titleZh: "香港科技園申請",
      },
      {
        title: "Pilot Customer Deployment",
        titleZh: "試點客戶部署",
      },
    ],
  },
  {
    year: "2027",
    items: [
      {
        title: "10PB Optical Storage Network",
        titleZh: "10PB 光存儲網絡",
      },
      {
        title: "BlueSafe RAG Cloud",
        titleZh: "BlueSafe RAG 雲",
      },
      {
        title: "Enterprise Subscription Services",
        titleZh: "企業訂閱服務",
      },
    ],
  },
  {
    year: "2028",
    items: [
      {
        title: "100PB Hong Kong AI Cold Data Center",
        titleZh: "100PB 香港 AI 冷數據中心",
      },
      {
        title: "Data Asset Bank Launch",
        titleZh: "數據資產銀行啟動",
      },
      {
        title: "Cross-border Data Infrastructure",
        titleZh: "跨境數據基礎設施",
      },
    ],
  },
];

const contactItems = [
  "Venture-scale AI infrastructure thesis",
  "Hong Kong 100PB flagship capacity plan",
  "Enterprise pipeline and platform roadmap",
  "Strategic partnership and investor relations",
];

export default function InvestorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
          <div className="absolute inset-0 spark-grid opacity-25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_24%,hsl(var(--accent)/0.2),transparent_32%),linear-gradient(105deg,hsl(var(--background))_0%,hsl(var(--surface-1))_48%,hsl(var(--primary)/0.2)_100%)]" />
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
              <AnimatedBlock className="max-w-4xl">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  Investors / 投資者
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-5xl">
                  AI cold data infrastructure for the enterprise intelligence economy.
                </h1>
                <div className="mt-6 max-w-3xl space-y-3 text-lg leading-8 text-muted-foreground sm:text-xl">
                  <p>
                    Spark AI is building a venture-scale platform that connects enterprise
                    archives, BlueSafe optical preservation, private RAG knowledge services,
                    and future data asset operations.
                  </p>
                  <p className="text-base leading-7 text-muted-foreground/85">
                    Spark AI 正在構建具備風險投資規模潛力的平台，連接企業檔案、BlueSafe
                    光存儲長期保存、私有 RAG 知識服務與未來數據資產運營。
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="spark" size="lg">
                    <Link href="mailto:info@sparkai.hk">
                      Contact Investor Relations
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/products">
                      View Product Matrix
                      <Download aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={0.12} className="relative min-h-[29rem] lg:min-h-[32rem]">
                <div className="absolute inset-0 rounded-lg border border-white/10 bg-spark-surface-1/75 shadow-spark-md backdrop-blur" />
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 flex h-full min-h-[29rem] flex-col justify-between p-5 sm:p-7 lg:min-h-[32rem]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Platform Thesis / 平台論點
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                        Spark AI is positioned as an infrastructure layer for enterprise
                        AI memory, not a single-purpose hardware vendor.
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
                        <p className="text-xs leading-5 text-muted-foreground/75">
                          {metric.labelZh}
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
            eyebrow="Market Opportunity / 市場機會"
            title="Enterprise AI needs a new data infrastructure category."
            description="The opportunity is not only storage hardware. It is the operating layer that turns preserved institutional data into trusted AI memory and future data assets. 這不只是硬件市場，而是將機構數據轉化為可信 AI 記憶與未來數據資產的運營層。"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.05fr]">
            <AnimatedStagger className="grid gap-4">
              {marketSignals.map((item) => (
                <SurfaceCard
                  key={item.title}
                  title={item.title}
                  icon={<item.icon className="size-6" aria-hidden="true" />}
                  className="h-full"
                >
                  <p className="text-sm font-medium text-accent/85">{item.titleZh}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
                </SurfaceCard>
              ))}
            </AnimatedStagger>
            <AnimatedBlock delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-background p-6 shadow-spark-md sm:p-8">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                        Global AI Data Infrastructure Market
                      </p>
                      <h2 className="mt-4 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
                        100B+
                      </h2>
                      <p className="mt-3 text-lg font-medium text-accent">Market Opportunity</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground/85">
                        全球 AI 數據基礎設施市場機會
                      </p>
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-primary/15 text-accent">
                      <PieChart className="size-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <div className="h-3 overflow-hidden rounded-full bg-spark-surface-2">
                      <div className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      Spark AI targets the convergence of cold data preservation, private AI
                      knowledge, compliance infrastructure, and data asset operations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Product Matrix / 產品矩陣"
            title="A platform portfolio for enterprise AI data infrastructure."
            description="Spark AI's product matrix is designed as a connected infrastructure stack: appliance, preservation, RAG cloud, and data asset operations. Spark AI 的產品矩陣是一套連接式基礎設施堆疊：一體機、長期保存、RAG 雲與數據資產運營。"
          />
          <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productMatrix.map((item) => (
              <SurfaceCard
                key={item.title}
                title={item.title}
                icon={<item.icon className="size-6" aria-hidden="true" />}
                className="h-full bg-white/[0.045]"
              >
                <p className="text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
              </SurfaceCard>
            ))}
          </AnimatedStagger>
        </Section>

        <Section tone="grid">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="Hong Kong 100PB AI Cold Data Center / 香港 100PB AI 冷數據中心"
              title="A flagship infrastructure plan for Asia-Pacific enterprise AI memory."
              description="The Hong Kong plan gives Spark AI a visible platform anchor: capacity, trust, governance, RAG activation, and future data asset operations in one institutional infrastructure story. 香港計劃將容量、信任、治理、RAG 激活與未來數據資產運營整合為一個機構級基礎設施敘事。"
            />
            <AnimatedBlock delay={0.1}>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-6 shadow-spark-md sm:p-8">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 grid gap-4 sm:grid-cols-2">
                  {[
                    ["100PB+", "Target cold data capacity", "目標冷數據容量"],
                    ["Hong Kong", "Launch infrastructure hub", "啟動基礎設施樞紐"],
                    ["BlueSafe", "Optical preservation layer", "光存儲長期保存層"],
                    ["Private RAG", "Knowledge activation layer", "知識激活層"],
                  ].map(([value, label, labelZh]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-spark-surface-1/72 p-5">
                      <p className="text-3xl font-semibold tracking-normal text-foreground">{value}</p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground/75">{labelZh}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {infrastructurePlan.map((item, index) => (
              <AnimatedBlock key={item.year} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-3xl font-semibold tracking-normal text-accent">{item.year}</p>
                    <CalendarRange className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground">{item.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </Section>

        <Section tone="panel">
          <SectionHeader
            eyebrow="Roadmap / 路線圖"
            title="A venture-scale execution roadmap from platform launch to 100PB infrastructure."
            description="The roadmap focuses on platform launch, enterprise pilots, optical storage network expansion, RAG cloud services, and cross-border AI data infrastructure. 路線圖聚焦平台啟動、企業試點、光存儲網絡擴展、RAG 雲服務與跨境 AI 數據基礎設施。"
          />
          <AnimatedStagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {roadmap.map((phase, phaseIndex) => (
              <div
                key={phase.year}
                className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur"
              >
                <div className="absolute inset-0 spark-grid opacity-15" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                {phaseIndex < roadmap.length - 1 ? (
                  <div className="absolute left-[calc(100%-0.75rem)] top-12 hidden h-px w-6 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                ) : null}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Phase 0{phaseIndex + 1}
                      </p>
                      <h2 className="mt-2 text-4xl font-semibold tracking-normal text-foreground">
                        {phase.year}
                      </h2>
                    </div>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.16)]">
                      <CalendarRange className="size-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8 space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <AnimatedBlock key={item.title} delay={phaseIndex * 0.08 + itemIndex * 0.04}>
                        <div className="rounded-lg border border-white/10 bg-spark-surface-1/72 p-4 transition duration-300 group-hover:border-accent/30">
                          <div className="flex gap-3">
                            <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                              {itemIndex + 1}
                            </span>
                            <div>
                              <p className="text-sm font-semibold leading-6 text-foreground">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground/80">
                                {item.titleZh}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AnimatedBlock>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>
        </Section>

        <section className="bg-background py-20 sm:py-24 lg:py-32">
          <Container>
            <AnimatedBlock>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-8 shadow-spark-md sm:p-10 lg:p-12">
                <div className="absolute inset-0 spark-grid opacity-20" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                      Investor Contact / 投資者聯繫
                    </p>
                    <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                      Discuss Spark AI&apos;s platform thesis, market timing, and Hong Kong infrastructure plan.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                      聯繫 Spark AI 團隊，了解平台論點、市場時機、香港 100PB 基礎設施計劃與長期數據資產機會。
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button asChild variant="spark" size="lg">
                        <Link href="mailto:info@sparkai.hk">
                          Contact Investor Relations
                          <ArrowRight aria-hidden="true" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/contact">
                          Schedule Meeting
                          <Globe2 aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {contactItems.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-background/68 p-5">
                        <div className="flex gap-3">
                          <Network className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
                          <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-lg border border-accent/20 bg-accent/10 p-5">
                      <div className="flex gap-3">
                        <Landmark className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
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
      <SiteFooter />
    </>
  );
}
