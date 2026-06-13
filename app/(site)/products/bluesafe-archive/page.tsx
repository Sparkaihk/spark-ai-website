import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Database,
  FileLock2,
  Hospital,
  Landmark,
  Scale,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BlueSafe 藍光冷存儲",
  description:
    "BlueSafe 藍光冷存儲產品頁，面向政府檔案、醫療影像、金融數據與AI訓練數據的長期可信保存。",
};

const features = [
  {
    title: "不可篡改存儲",
    description: "以一次寫入、多重校驗與審計鏈路，支撐高可信冷數據保存。",
    icon: FileLock2,
  },
  {
    title: "PB級擴展",
    description: "面向海量檔案、影像、記錄與訓練資料，提供可持續擴容架構。",
    icon: Database,
  },
  {
    title: "超低能耗",
    description: "降低長週期保存的能源與運維負擔，適合低訪問頻率數據資產。",
    icon: Zap,
  },
  {
    title: "冷數據湖",
    description: "將分散冷數據沉澱為可治理、可檢索、可接入AI系統的數據湖。",
    icon: Snowflake,
  },
];

const useCases = [
  { title: "政府檔案", icon: Landmark },
  { title: "醫療影像", icon: Hospital },
  { title: "金融數據", icon: Scale },
  { title: "AI訓練數據", icon: Archive },
];

const architectureNodes = [
  "數據接入",
  "策略治理",
  "藍光寫入",
  "冷數據湖",
  "RAG與AI調用",
];

export default function BlueSafeArchivePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,hsl(var(--accent)/0.18),transparent_32%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.9)_44%,hsl(var(--background)/0.56)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                BlueSafe Product
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                BlueSafe 藍光冷存儲
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-accent drop-shadow-[0_0_20px_hsl(var(--accent)/0.45)] sm:text-3xl">
                100年以上數據保存
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                面向高價值、低頻訪問與長週期保存的企業數據資產，提供安全、低能耗、可擴展的藍光冷存儲基礎設施。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    預約方案諮詢
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      Optical Cold Storage
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      Immutable custody layer for long-term institutional data assets.
                    </p>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["光盤介質", "校驗索引", "權限治理", "AI檢索接口"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-background/70 p-4 shadow-spark-sm"
                    >
                      <p className="text-xs font-medium text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">{item}</p>
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
          eyebrow="Features"
          title="核心能力"
          description="BlueSafe以不可篡改、低能耗、可擴展的冷數據架構，承載長週期數據資產保存與AI時代再利用。"
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

      <Section>
        <SectionHeader
          eyebrow="Use Cases"
          title="典型應用場景"
          description="服務對數據可信性、保存年限、合規審計和長期成本敏感的高價值數據場景。"
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

      <Section tone="grid">
        <SectionHeader
          eyebrow="Architecture"
          title="BlueSafe 冷數據架構"
          description="從數據接入、策略治理到藍光寫入與AI檢索，形成面向長期保存和知識激活的一體化架構。"
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <svg
              viewBox="0 0 960 260"
              className="relative z-10 hidden h-[18rem] w-full lg:block"
              role="img"
              aria-label="BlueSafe 藍光冷存儲架構圖"
            >
              <defs>
                <linearGradient id="blueSafeLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                </linearGradient>
                <filter id="blueSafeGlow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M110 130 C210 58 280 58 360 130 C450 214 510 214 600 130 C680 58 750 58 850 130"
                fill="none"
                stroke="url(#blueSafeLine)"
                strokeLinecap="round"
                strokeWidth="3"
                filter="url(#blueSafeGlow)"
                className="[stroke-dasharray:900] [stroke-dashoffset:900] animate-[dash_3s_ease-out_forwards]"
              />
              {architectureNodes.map((node, index) => {
                const x = 110 + index * 185;
                const y = index % 2 === 0 ? 130 : 78;

                return (
                  <g key={node}>
                    <circle
                      cx={x}
                      cy={y}
                      r="48"
                      fill="hsl(var(--accent) / 0.12)"
                      className="animate-pulse"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="30"
                      fill="hsl(var(--surface-1))"
                      stroke="hsl(var(--accent) / 0.72)"
                      strokeWidth="1.5"
                    />
                    <circle cx={x} cy={y} r="10" fill="hsl(var(--primary))" />
                    <text
                      x={x}
                      y={index % 2 === 0 ? y + 74 : y - 48}
                      textAnchor="middle"
                      fill="hsl(var(--foreground))"
                      className="text-[15px] font-semibold"
                    >
                      {node}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="relative z-10 grid gap-4 lg:hidden">
              {architectureNodes.map((node, index) => (
                <div
                  key={node}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-sm font-semibold text-accent">
                      {index + 1}
                    </span>
                    <h2 className="text-base font-semibold text-foreground">{node}</h2>
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
                    BlueSafe Solution
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    為高價值冷數據建立百年級保存基礎設施。
                  </h2>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    預約方案諮詢
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
