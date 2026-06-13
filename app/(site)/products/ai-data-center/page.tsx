import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Cable,
  Cpu,
  Database,
  Droplets,
  Gauge,
  HardDrive,
  Network,
  Server,
  Snowflake,
  Zap,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI數據中心",
  description:
    "AI數據中心整合高密度GPU集群、液冷架構、AI訓練平台與推理平台，提供GPU Infrastructure、Storage Layer與Network Layer。",
};

const capabilities = [
  {
    title: "高密度GPU集群",
    description:
      "以高功率機櫃、GPU節點與集中化調度承載大模型訓練、微調與高併發AI工作負載。",
    icon: Cpu,
  },
  {
    title: "液冷架構",
    description:
      "支援高熱密度機房部署，降低散熱瓶頸，提升能源效率與GPU集群穩定性。",
    icon: Droplets,
  },
  {
    title: "AI訓練平台",
    description:
      "提供資料接入、任務排程、模型訓練、檢查點管理與算力資源治理的一體化平台。",
    icon: BrainCircuit,
  },
  {
    title: "推理平台",
    description:
      "面向企業AI應用提供低延遲推理服務、彈性擴展與模型部署管理能力。",
    icon: Gauge,
  },
];

const layers = [
  {
    title: "GPU Infrastructure",
    description: "GPU伺服器、加速卡、機櫃電力、液冷迴路與算力資源池。",
    icon: Server,
    metrics: ["Dense GPU Nodes", "Liquid Cooling", "Cluster Scheduling"],
  },
  {
    title: "Storage Layer",
    description: "支援訓練資料、模型權重、檢查點、向量索引與企業知識庫的高吞吐儲存層。",
    icon: HardDrive,
    metrics: ["Training Data", "Model Checkpoints", "Knowledge Assets"],
  },
  {
    title: "Network Layer",
    description: "以高速互連、低延遲交換與隔離網段支撐GPU集群、儲存與推理服務協同。",
    icon: Network,
    metrics: ["High Bandwidth", "Low Latency", "Secure Segments"],
  },
];

export default function AiDataCenterPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,hsl(var(--accent)/0.22),transparent_30%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_44%,hsl(var(--background)/0.62)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                AI Data Center
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                AI數據中心
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                面向大模型訓練與企業級推理服務的AI基礎設施，整合高密度GPU集群、液冷架構、AI訓練平台與推理平台。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    聯絡合作
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">返回產品</Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.12} className="relative min-h-[30rem]">
              <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.045] shadow-[0_24px_100px_hsl(var(--primary)/0.18)] backdrop-blur-xl" />
              <div className="absolute inset-0 spark-grid rounded-lg opacity-20" />
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative z-10 flex min-h-[30rem] flex-col justify-between p-5 sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      Infrastructure Stack
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      GPU算力、儲存與網路分層設計，支援訓練到推理的完整AI工作流。
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <Zap className="size-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-3">
                  {layers.map((layer, index) => (
                    <div
                      key={layer.title}
                      className="rounded-lg border border-white/10 bg-background/72 p-4 shadow-spark-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                          <layer.icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-accent">
                            Layer {String(index + 1).padStart(2, "0")}
                          </p>
                          <h2 className="mt-1 text-base font-semibold text-foreground">
                            {layer.title}
                          </h2>
                        </div>
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
          eyebrow="Core Sections"
          title="從GPU集群到AI平台的完整數據中心能力。"
          description="AI數據中心將算力、散熱、訓練與推理平台整合為可規模化部署的企業級基礎設施。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((feature, index) => (
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
          title="GPU Infrastructure、Storage Layer、Network Layer。"
          description="三層架構將高密度GPU資源、高吞吐資料層與低延遲網路連成統一AI運算底座。"
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-3">
              {layers.map((layer, index) => (
                <div key={layer.title} className="relative">
                  {index < layers.length - 1 ? (
                    <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                  ) : null}
                  <div className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.24)]">
                      <layer.icon className="size-7" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                      {layer.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {layer.description}
                    </p>
                    <div className="mt-6 space-y-2">
                      {layer.metrics.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-background/55 px-3 py-2 text-sm text-foreground"
                        >
                          <Cable className="size-4 shrink-0 text-accent" aria-hidden="true" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedBlock>
      </Section>

      <section className="bg-spark-surface-1 py-20 sm:py-24">
        <Container>
          <AnimatedBlock>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-8 shadow-spark-md sm:p-10 lg:p-12">
              <div className="absolute inset-0 spark-grid opacity-20" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                    AI數據中心
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    建立面向訓練與推理的下一代AI基礎設施。
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    與Spark AI討論GPU集群、液冷機房、AI訓練平台與推理平台的合作部署。
                  </p>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    聯絡合作
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
