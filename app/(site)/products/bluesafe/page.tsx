import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Database,
  FileArchive,
  FileLock2,
  HardDrive,
  Landmark,
  Microscope,
  ShieldCheck,
  Snowflake,
  Stethoscope,
  Vault,
  Zap,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Section, SectionHeader } from "@/components/design-system/section";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BlueSafe 蓝光冷存储",
  description:
    "BlueSafe通过蓝光归档、不可篡改存储、低能耗冷数据湖和PB级扩展能力，为政府、金融、医疗、科研和AI企业提供长期、安全、低成本的数据保存基础设施。",
};

const features = [
  {
    title: "100年以上长期保存",
    description: "面向长期数据资产保存周期设计，降低介质迁移频率与长期托管风险。",
    icon: Archive,
  },
  {
    title: "不可篡改存储",
    description: "通过归档级写入与策略化保护，支撑合规留存、证据保存与审计追溯。",
    icon: FileLock2,
  },
  {
    title: "PB级冷数据湖",
    description: "承载海量档案、影像、科研数据、模型数据与企业知识资产的冷数据底座。",
    icon: Database,
  },
  {
    title: "超低能耗",
    description: "将长期低频访问数据迁移至低功耗冷存储层，优化数据中心能源成本。",
    icon: Zap,
  },
  {
    title: "离线安全隔离",
    description: "为关键数据建立离线保存与安全隔离机制，降低勒索攻击和在线暴露风险。",
    icon: ShieldCheck,
  },
  {
    title: "数据资产保险库",
    description: "让长期数据具备可保存、可治理、可检索、可资产化的基础设施条件。",
    icon: Vault,
  },
];

const useCases = [
  { title: "政府档案", icon: Landmark },
  { title: "医疗影像", icon: Stethoscope },
  { title: "金融合规数据", icon: ShieldCheck },
  { title: "科研数据", icon: Microscope },
  { title: "AI训练数据归档", icon: FileArchive },
  { title: "企业知识资产保存", icon: Vault },
];

const architecture = [
  {
    title: "Hot Data",
    description: "高频访问、在线业务与实时AI应用数据。",
    icon: HardDrive,
  },
  {
    title: "Warm Data",
    description: "阶段性访问、治理整理与待归档数据。",
    icon: Database,
  },
  {
    title: "BlueSafe Archive",
    description: "蓝光归档、不可篡改保存与低能耗冷数据湖。",
    icon: Snowflake,
  },
  {
    title: "Data Asset Vault",
    description: "长期数据资产保险库，支撑合规、检索与AI再利用。",
    icon: Vault,
  },
];

export default function BlueSafePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-24 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 spark-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,hsl(var(--accent)/0.22),transparent_30%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.92)_44%,hsl(var(--background)/0.6)_100%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedBlock className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                BlueSafe Archive
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                BlueSafe 蓝光冷存储
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-accent drop-shadow-[0_0_20px_hsl(var(--accent)/0.45)] sm:text-3xl">
                面向AI时代的长期数据资产保险库
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                BlueSafe通过蓝光归档、不可篡改存储、低能耗冷数据湖和PB级扩展能力，
                为政府、金融、医疗、科研和AI企业提供长期、安全、低成本的数据保存基础设施。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    预约BlueSafe方案咨询
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">返回产品</Link>
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
                      Long-Term Data Vault
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      从热数据、温数据到蓝光冷归档，建立面向AI时代的数据资产保存层。
                    </p>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent">
                    <Snowflake className="size-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-3">
                  {architecture.map((node, index) => (
                    <div
                      key={node.title}
                      className="rounded-lg border border-white/10 bg-background/72 p-4 shadow-spark-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                          <node.icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-accent">
                            Stage {String(index + 1).padStart(2, "0")}
                          </p>
                          <h2 className="mt-1 text-base font-semibold text-foreground">
                            {node.title}
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
          eyebrow="Core Features"
          title="为长期、安全、低成本的数据保存而设计。"
          description="BlueSafe将蓝光归档、离线隔离、不可篡改保存与PB级扩展能力整合为长期数据资产基础设施。"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedBlock key={feature.title} delay={index * 0.06}>
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
          title="适用于需要长期可信保存的高价值数据。"
          description="从合规档案到AI训练数据，BlueSafe为低频访问但高价值的数据建立长期保存和再利用基础。"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <AnimatedBlock key={item.title} delay={index * 0.06}>
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
          title="Hot Data、Warm Data、BlueSafe Archive、Data Asset Vault。"
          description="将不同访问频率与保存价值的数据分层治理，让冷数据进入长期、安全、低能耗的数据资产保险库。"
        />
        <AnimatedBlock className="mt-12">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background p-5 shadow-spark-md sm:p-8">
            <div className="absolute inset-0 spark-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 grid gap-4 lg:grid-cols-4">
              {architecture.map((node, index) => (
                <div key={node.title} className="relative">
                  {index < architecture.length - 1 ? (
                    <div className="absolute left-[calc(100%-0.5rem)] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent/80 to-transparent lg:block" />
                  ) : null}
                  <div className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_hsl(var(--primary)/0.12)] backdrop-blur-xl">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-accent/35 bg-accent/10 text-accent shadow-[0_0_28px_hsl(var(--accent)/0.24)]">
                      <node.icon className="size-7" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                      {node.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {node.description}
                    </p>
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
                    BlueSafe 蓝光冷存储
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
                    为关键数据建立面向百年周期的数据资产保险库。
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    与Spark AI讨论政府档案、医疗影像、金融合规、科研数据和AI训练数据的长期保存方案。
                  </p>
                </div>
                <Button asChild variant="spark" size="lg">
                  <Link href="/contact">
                    预约BlueSafe方案咨询
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
