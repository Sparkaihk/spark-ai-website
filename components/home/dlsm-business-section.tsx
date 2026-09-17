import Link from "next/link";
import { ArrowRight, Boxes, Database, FileCheck2, SlidersHorizontal } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const lifecycleStages = [
  {
    icon: Database,
    title: { zh: "识别数据对象", en: "Identify AI data objects" },
    body: {
      zh: "统一识别数据集、向量库、模型、检查点及其业务归属。",
      en: "Map datasets, vector stores, models, checkpoints, and business ownership.",
    },
  },
  {
    icon: SlidersHorizontal,
    title: { zh: "执行生命周期策略", en: "Apply lifecycle policy" },
    body: {
      zh: "按访问、保留、保护、恢复和处置要求协调执行。",
      en: "Coordinate access, retention, protection, recovery, and disposition policies.",
    },
  },
  {
    icon: Boxes,
    title: { zh: "连接存储与介质", en: "Connect storage and media" },
    body: {
      zh: "把逻辑对象关联到存储层、设备和物理介质。",
      en: "Link logical objects to storage tiers, devices, and physical media.",
    },
  },
  {
    icon: FileCheck2,
    title: { zh: "形成治理证据", en: "Produce governance evidence" },
    body: {
      zh: "记录策略、操作、验证结果和责任边界，支持持续审阅。",
      en: "Record policy, actions, validation results, and operating responsibility.",
    },
  },
];

export function DlsmBusinessSection() {
  return (
    <section className="border-y border-sky-100 bg-white py-20 sm:py-24" aria-labelledby="dlsm-business-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <AnimatedBlock>
            <p className="text-sm font-semibold text-primary">DLSM</p>
            <h2 id="dlsm-business-title" className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              <LocalizedText zh="贯穿 AI 数据生命周期的智能控制平面" en="The control plane for the AI Data Lifecycle" />
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.06} className="lg:pb-1">
            <p className="max-w-2xl text-[16px] leading-8 text-slate-600 sm:text-[18px]">
              <LocalizedText
                zh="DLSM 将 AI 数据对象、逻辑存储、物理介质、生命周期策略和审计证据连接起来，让企业知道数据在哪里、由谁管理、正在执行什么策略，以及结果能否被验证。"
                en="DLSM connects AI data objects, logical storage, physical media, lifecycle policy, and audit evidence so organizations can see what is managed, where it resides, which controls apply, and what has been verified."
              />
            </p>
          </AnimatedBlock>
        </div>

        <AnimatedStagger className="mt-12 grid gap-px overflow-hidden rounded-[30px] border border-sky-100 bg-sky-100 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycleStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.title.en} className="min-h-60 bg-[#f8fbff] p-6 sm:p-7">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-8 text-lg font-semibold text-slate-950">
                  <LocalizedText zh={stage.title.zh} en={stage.title.en} />
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <LocalizedText zh={stage.body.zh} en={stage.body.en} />
                </p>
              </article>
            );
          })}
        </AnimatedStagger>

        <AnimatedBlock className="mt-8 flex flex-col gap-5 rounded-[26px] border border-blue-100 bg-[#eef6ff] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-700">
            <LocalizedText
              zh="当前对外定位是产品与试点方向。具体控制范围、接口、验证方法和责任边界，应在企业场景中通过需求评估与设备级试点确认。"
              en="This is a product and pilot direction. Control scope, interfaces, validation methods, and operating responsibility are confirmed through enterprise discovery and device-level pilots."
            />
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button asChild variant="spark" className="rounded-[18px]">
              <Link href="/investors">
                <LocalizedText zh="了解 DLSM 业务" en="Explore the DLSM business" />
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-[18px] bg-white">
              <Link href="/contact">
                <LocalizedText zh="申请企业试点" en="Discuss an enterprise pilot" />
              </Link>
            </Button>
          </div>
        </AnimatedBlock>
      </Container>
    </section>
  );
}
