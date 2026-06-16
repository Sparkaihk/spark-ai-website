import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Cable,
  CheckCircle2,
  CloudCog,
  Cpu,
  DatabaseZap,
  Download,
  Factory,
  FileText,
  Landmark,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Snowflake,
  Workflow,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "RTX Spark AI Storage Appliance | Spark AI Technology Limited",
  description:
    "RTX Spark AI Storage Appliance is a flagship bilingual product page for enterprise cold data preservation, AI retrieval, and trusted storage infrastructure.",
};

const productMetrics = [
  {
    value: "100PB+",
    label: "Target Storage Capacity",
    labelZh: "目標存儲容量",
  },
  {
    value: "30 Years",
    label: "Optical Preservation",
    labelZh: "光存儲長期保存",
  },
  {
    value: "3-5 Seconds",
    label: "Cold Data Retrieval",
    labelZh: "冷數據檢索",
  },
  {
    value: "AI + Optical + RAG",
    label: "Integrated Platform",
    labelZh: "一體化平台",
  },
];

const keyFeatures = [
  {
    title: "High-Density AI Storage",
    titleZh: "高密度 AI 存儲",
    text: "Purpose-built appliance capacity for cold data, vector-ready datasets, and enterprise AI archives.",
    textZh: "面向冷數據、向量化數據集與企業 AI 檔案的專用一體機容量。",
    icon: DatabaseZap,
  },
  {
    title: "BlueSafe Archive Layer",
    titleZh: "BlueSafe 檔案保存層",
    text: "Long-life preservation workflows for records, media, research data, compliance files, and operational memory.",
    textZh: "支持記錄、媒體、科研數據、合規文件與營運記憶的長期保存流程。",
    icon: ShieldCheck,
  },
  {
    title: "Private RAG Ready",
    titleZh: "私有 RAG 就緒",
    text: "Metadata, indexing, and retrieval interfaces designed for enterprise copilots, agents, and search.",
    textZh: "為企業 Copilot、智能體與搜尋場景設計的元數據、索引與檢索接口。",
    icon: BrainCircuit,
  },
  {
    title: "Secure Edge Deployment",
    titleZh: "安全邊緣部署",
    text: "Deploy near enterprise data sources with controlled access, encrypted transfer, and governance hooks.",
    textZh: "貼近企業數據源部署，支持受控訪問、加密傳輸與治理接口。",
    icon: LockKeyhole,
  },
];

const innovations = [
  {
    title: "Cold-to-AI Data Pipeline",
    titleZh: "冷數據到 AI 管道",
    text: "Transforms dormant archives into governed, searchable, AI-ready data without disrupting custody rules.",
    textZh: "在不破壞托管規則的前提下，將沉睡檔案轉化為可治理、可搜尋、AI 可用的數據。",
    icon: Workflow,
  },
  {
    title: "Hybrid Optical + Disk Tiering",
    titleZh: "光存儲與磁盤混合分層",
    text: "Balances durable optical preservation with fast appliance access for indexing, review, and activation.",
    textZh: "結合持久光存儲與快速設備訪問，支持索引、審核與知識激活。",
    icon: Snowflake,
  },
  {
    title: "Trusted Metadata Fabric",
    titleZh: "可信元數據網絡",
    text: "Adds policy, lineage, retention, rights, and retrieval context around enterprise data assets.",
    textZh: "圍繞企業數據資產構建策略、血緣、保留期限、權限與檢索上下文。",
    icon: Network,
  },
  {
    title: "RAG Appliance Control Plane",
    titleZh: "RAG 一體機控制面",
    text: "Provides controlled connectors for private knowledge bases, vector services, and agent workflows.",
    textZh: "為私有知識庫、向量服務與智能體工作流提供受控連接能力。",
    icon: CloudCog,
  },
];

const architecture = [
  {
    title: "Ingestion Gateway",
    titleZh: "數據接入網關",
    text: "Securely receives files, objects, records, datasets, and metadata from enterprise systems.",
    icon: Cable,
  },
  {
    title: "RTX Storage Core",
    titleZh: "RTX 存儲核心",
    text: "Appliance storage tier for active archive staging, indexing, validation, and retrieval preparation.",
    icon: Server,
  },
  {
    title: "BlueSafe Preservation",
    titleZh: "BlueSafe 長期保存",
    text: "Long-life optical archive layer for durable cold data retention and low-energy preservation.",
    icon: ShieldCheck,
  },
  {
    title: "AI Knowledge Services",
    titleZh: "AI 知識服務",
    text: "RAG connectors, vector-ready metadata, governed search, and enterprise AI workflow activation.",
    icon: BrainCircuit,
  },
];

const solutions = [
  {
    title: "Financial Services",
    titleZh: "金融服務",
    text: "Compliance memory, risk archives, audit evidence, secure search, and institutional data accounts.",
    icon: Landmark,
  },
  {
    title: "Manufacturing AI",
    titleZh: "製造業 AI",
    text: "Equipment records, telemetry archives, engineering files, quality data, and operational knowledge.",
    icon: Factory,
  },
  {
    title: "Public Sector",
    titleZh: "公共部門",
    text: "Sovereign archives, records preservation, secure knowledge retrieval, and governed access workflows.",
    icon: Building2,
  },
  {
    title: "Research & Healthcare",
    titleZh: "科研與醫療",
    text: "Long-life research repositories, clinical archives, controlled AI retrieval, and audit-ready retention.",
    icon: FileText,
  },
];

const architectureMetrics = [
  "Enterprise Data",
  "RTX Appliance",
  "BlueSafe Archive",
  "RAG Cloud",
  "Data Asset Layer",
];

export default function ProductsPage() {
  return (
    <main className="bg-background">
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_24%,hsl(var(--accent)/0.22),transparent_32%),linear-gradient(105deg,hsl(var(--background))_0%,hsl(var(--surface-1))_48%,hsl(var(--primary)/0.2)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                Flagship Product / 旗艦產品
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-5xl">
                RTX Spark AI Storage Appliance
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-accent sm:text-3xl">
                Enterprise AI storage appliance for cold data preservation and private knowledge activation.
              </p>
              <div className="mt-5 max-w-3xl space-y-3 text-lg leading-8 text-muted-foreground">
                <p>
                  Spark AI is building an AI cold data infrastructure platform in Hong Kong,
                  connecting enterprise archives, BlueSafe optical preservation, private RAG
                  knowledge services, and future data asset operations.
                </p>
                <p className="text-base leading-7 text-muted-foreground/85">
                  Spark AI 正在香港構建 AI 冷數據基礎設施平台，連接企業檔案、BlueSafe
                  光存儲長期保存、私有 RAG 知識服務與未來數據資產運營。
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {productMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur"
                  >
                    <p className="text-2xl font-semibold tracking-normal text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-5 text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground/75">
                      {metric.labelZh}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="#white-paper">
                    Download White Paper
                    <Download aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Schedule Product Briefing
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12} className="relative min-h-[30rem]">
              <div className="absolute inset-0 rounded-lg border border-white/10 bg-spark-surface-1/78 shadow-[0_32px_120px_hsl(var(--primary)/0.22)] backdrop-blur-xl" />
              <div className="absolute inset-0 spark-grid rounded-lg opacity-20" />
              <div className="relative z-10 flex min-h-[30rem] flex-col justify-between p-5 sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Appliance Stack / 一體機架構
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      A controlled bridge between enterprise archives, BlueSafe preservation, and AI knowledge services.
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <Cpu className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="space-y-3">
                  {architectureMetrics.map((item, index) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-background/72 p-4 shadow-spark-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium text-accent">
                            Layer {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-base font-semibold text-foreground">{item}</p>
                        </div>
                        <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                      </div>
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
          eyebrow="Key Features / 核心功能"
          title="Built for enterprise cold data, AI retrieval, and trusted storage operations."
          description="RTX Spark AI Storage Appliance combines storage capacity, preservation workflows, metadata governance, and private AI activation in one deployable product."
        />
        <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {keyFeatures.map((feature) => (
            <SurfaceCard
              key={feature.title}
              title={feature.title}
              icon={<feature.icon className="size-6" aria-hidden="true" />}
              className="h-full bg-white/[0.045]"
            >
              <p className="text-sm font-medium text-accent/85">{feature.titleZh}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature.text}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{feature.textZh}</p>
            </SurfaceCard>
          ))}
        </AnimatedStagger>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Four Technology Innovations / 四項技術創新"
          title="A product architecture designed to move cold data into the AI era."
          description="The appliance introduces practical innovation across data pipelines, hybrid storage, metadata governance, and RAG-ready control."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {innovations.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-spark-surface-1/76 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <span className="flex size-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Innovation 0{index + 1}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground/80">{item.textZh}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="System Architecture / 系統架構"
          title="A controlled appliance layer between enterprise data and Spark AI cloud services."
          description="The system architecture supports secure ingestion, appliance storage, BlueSafe preservation, and AI knowledge services."
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-4">
              {architecture.map((node, index) => (
                <div key={node.title} className="relative">
                  {index < architecture.length - 1 ? (
                    <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                  ) : null}
                  <div className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                      <node.icon className="size-7" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Layer 0{index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                      {node.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-accent/85">{node.titleZh}</p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{node.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedBlock>
      </Section>

      <Section tone="panel">
        <SectionHeader
          eyebrow="Industry Solutions / 行業解決方案"
          title="Designed for regulated and data-intensive organizations."
          description="RTX Spark AI Storage Appliance gives institutions a practical path from archived data to governed AI knowledge."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-white/10 bg-background/74 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)]">
                <span className="flex size-11 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-accent/85">{item.titleZh}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <section id="white-paper" className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <AnimatedBlock>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1 p-8 shadow-spark-md sm:p-10 lg:p-12">
              <div className="absolute inset-0 spark-grid opacity-20" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                    White Paper / 白皮書
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    Download the RTX Spark AI Storage Appliance white paper.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    獲取產品架構、技術創新、行業應用與部署路線的雙語白皮書，並聯繫 Spark AI 團隊安排產品演示。
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button asChild variant="spark" size="lg">
                    <Link href="/contact">
                      Download White Paper
                      <Download aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="mailto:info@sparkai.hk">
                      Contact Spark AI
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
