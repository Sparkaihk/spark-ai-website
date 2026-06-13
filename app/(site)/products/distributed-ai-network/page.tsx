import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Cpu,
  Gauge,
  Handshake,
  Network,
  Router,
  Server,
  Share2,
  Users,
  Zap,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "分布式AI網絡",
  description:
    "分布式AI網絡連接社區AI節點、邊緣推理、收益共享與低成本部署，支援Node Owner、Spark Network、Enterprise AI Service與Revenue Sharing商業模式。",
};

const sections = [
  {
    title: "社區AI節點",
    description:
      "與本地合作夥伴部署AI節點，將算力、資料接入與推理能力帶到更接近需求現場的位置。",
    icon: Users,
  },
  {
    title: "邊緣推理",
    description:
      "支援低延遲、本地化與可控的AI推理服務，降低雲端往返成本並提升服務響應速度。",
    icon: Gauge,
  },
  {
    title: "收益共享",
    description:
      "節點合作夥伴可參與企業AI服務收益分配，讓基礎設施部署形成可持續營運模型。",
    icon: CircleDollarSign,
  },
  {
    title: "低成本部署",
    description:
      "以標準化節點配置、遠端管理與網絡化調度降低初始投入與持續運維成本。",
    icon: Zap,
  },
];

const model = [
  {
    title: "Node Owner",
    description: "提供部署場地、基礎設施資源與本地運維協作。",
    icon: Server,
  },
  {
    title: "Spark Network",
    description: "負責節點接入、算力調度、服務治理與網絡化營運。",
    icon: Network,
  },
  {
    title: "Enterprise AI Service",
    description: "向企業提供邊緣推理、資料處理與AI應用服務能力。",
    icon: Building2,
  },
  {
    title: "Revenue Sharing",
    description: "按合作模式與服務使用量進行透明化收益分配。",
    icon: Share2,
  },
];

export default function DistributedAiNetworkPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,hsl(var(--accent)/0.2),transparent_30%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_44%,hsl(var(--background)/0.6)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                Distributed AI Network
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                分布式AI網絡
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                以社區AI節點和邊緣推理能力構建分布式AI服務網絡，讓節點合作夥伴以低成本部署參與企業AI服務收益共享。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    成為節點合作夥伴
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
                      Node Partnership Model
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      將節點部署、網絡調度、企業AI服務與收益分配連接成可擴展商業模式。
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <Handshake className="size-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {sections.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-lg border border-white/10 bg-background/72 p-4 shadow-spark-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                          <item.icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h2 className="mt-1 text-sm font-semibold text-foreground">
                            {item.title}
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
          eyebrow="Network Sections"
          title="以低成本節點建立可持續的AI服務網絡。"
          description="分布式AI網絡把社區節點、邊緣推理、收益共享與標準化部署結合，讓合作夥伴參與企業AI基礎設施建設。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.08}>
              <SurfaceCard
                title={item.title}
                icon={<item.icon className="size-6" aria-hidden="true" />}
                className="h-full bg-white/[0.045] backdrop-blur-xl"
              >
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </SurfaceCard>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section tone="grid">
        <SectionHeader
          eyebrow="Business Model"
          title="Node Owner、Spark Network、Enterprise AI Service、Revenue Sharing。"
          description="合作模式從節點擁有者投入本地資源開始，經由Spark Network統一調度，向企業提供AI服務並完成收益共享。"
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-4">
              {model.map((item, index) => (
                <div key={item.title} className="relative">
                  {index < model.length - 1 ? (
                    <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                  ) : null}
                  <div className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.24)]">
                      <item.icon className="size-7" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Step 0{index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedBlock>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Deployment Logic"
            title="節點越接近場景，AI服務越具備成本與延遲優勢。"
            description="分布式部署讓企業AI服務可以在本地推理、區域協同與中心調度之間取得平衡。"
          />
          <AnimatedBlock delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Local Node", icon: Router },
                { label: "Edge Inference", icon: Cpu },
                { label: "Shared Revenue", icon: CircleDollarSign },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-spark-surface-1/75 p-5 shadow-spark-sm backdrop-blur"
                >
                  <item.icon className="size-6 text-accent" aria-hidden="true" />
                  <p className="mt-4 text-base font-semibold text-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
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
                    分布式AI網絡
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    加入Spark Network，部署本地AI節點並參與企業AI服務收益。
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    與Spark AI討論節點部署條件、營運模式、企業服務場景與收益共享方案。
                  </p>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    成為節點合作夥伴
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
