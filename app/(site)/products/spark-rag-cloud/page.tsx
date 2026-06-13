import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Database,
  FileText,
  Gavel,
  Hospital,
  MessageCircleQuestion,
  Network,
  Search,
  ServerCog,
  Workflow,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Spark RAG Cloud",
  description:
    "Spark RAG Cloud 企業級知識平台，支持企業知識庫、私有化部署、多模型接入與企業AI搜索。",
};

const features = [
  {
    title: "企業知識庫",
    description: "整合文檔、制度、案例、記錄與專家知識，形成可檢索的企業知識資產。",
    icon: Database,
  },
  {
    title: "私有化部署",
    description: "支持本地、私有雲與混合雲部署，滿足數據安全與合規要求。",
    icon: ServerCog,
  },
  {
    title: "多模型接入",
    description: "對接主流大模型與私有模型，按場景調度最適合的AI能力。",
    icon: Network,
  },
  {
    title: "企業AI搜索",
    description: "以權限治理、語義檢索與答案生成，提升企業知識查找效率。",
    icon: Search,
  },
];

const architecture = [
  { title: "Documents", icon: FileText },
  { title: "Vector Database", icon: Database },
  { title: "LLM", icon: Bot },
  { title: "AI Answer", icon: MessageCircleQuestion },
];

const useCases = [
  { title: "企業客服", icon: BriefcaseBusiness },
  { title: "法律顧問", icon: Gavel },
  { title: "醫療知識庫", icon: Hospital },
  { title: "製造業知識管理", icon: Workflow },
];

export default function SparkRagCloudPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_34%,hsl(var(--accent)/0.2),transparent_32%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.9)_44%,hsl(var(--background)/0.56)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                Enterprise RAG Platform
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                Spark RAG Cloud
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                將企業文檔、業務知識與多模型能力連接為可治理、可私有化部署的AI知識平台，支撐企業搜索、問答與智能決策。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    申請演示
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">返回產品</Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12} className="relative min-h-[28rem]">
              <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.045] shadow-[0_24px_100px_hsl(var(--primary)/0.18)] backdrop-blur-xl" />
              <div className="absolute inset-0 spark-grid rounded-lg opacity-20" />
              <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative z-10 flex min-h-[28rem] flex-col justify-between p-6">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      Knowledge Activation
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      Governed retrieval layer for enterprise AI search and answer generation.
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <Search className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-white/10 bg-background/70 p-4 shadow-spark-sm"
                    >
                      <p className="text-xs font-medium text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">{item.title}</p>
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
          eyebrow="Capabilities"
          title="核心能力"
          description="Spark RAG Cloud將企業知識庫、私有化部署、多模型接入與AI搜索整合為統一的企業知識基礎設施。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedBlock key={feature.title} delay={index * 0.08}>
              <SurfaceCard
                title={feature.title}
                icon={<feature.icon className="size-6" aria-hidden="true" />}
                className="h-full bg-white/[0.045] backdrop-blur-xl"
              >
                <p className="text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Architecture"
          title="RAG知識生成架構"
          description="從企業文檔到向量索引，再到大模型推理與AI答案生成，形成可追溯、可治理的知識工作流。"
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-4">
              {architecture.map((node, index) => (
                <div key={node.title} className="relative">
                  {index < architecture.length - 1 ? (
                    <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                  ) : null}
                  <div className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                    <div className="mx-auto flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.24)]">
                      <node.icon className="size-7" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                      {node.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedBlock>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Use Cases"
          title="典型應用場景"
          description="讓企業專有知識可被安全檢索、準確回答，並持續沉澱為可複用的AI知識資產。"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-spark-surface-1/75 p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.1)] backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/75 to-transparent" />
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              </div>
            </AnimatedBlock>
          ))}
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
                    Spark RAG Cloud
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    將企業知識轉化為可用、可信、可治理的AI答案能力。
                  </h2>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    申請演示
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
