import Link from "next/link";
import { ArrowRight, Boxes, Building2, Database, FileCheck2, Layers3, Network, ScanSearch, ShieldCheck } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const architectureLayers = [
  { icon: Database, title: { zh: "AI 数据对象", en: "AI data objects" }, body: { zh: "数据集、向量库、模型、检查点与衍生数据", en: "Datasets, vector stores, models, checkpoints, and derivatives" } },
  { icon: Layers3, title: { zh: "存储与介质", en: "Storage and media" }, body: { zh: "逻辑存储层、设备、介质编号与位置关系", en: "Logical tiers, devices, media identities, and locations" } },
  { icon: ShieldCheck, title: { zh: "策略与执行", en: "Policy and execution" }, body: { zh: "访问、保护、恢复、保留、删除与处置流程", en: "Access, protection, recovery, retention, deletion, and disposition" } },
  { icon: FileCheck2, title: { zh: "证据与责任", en: "Evidence and responsibility" }, body: { zh: "操作记录、验证结果、审批关系与责任边界", en: "Action records, validation results, approvals, and accountability" } },
];

const participationPaths = [
  { step: "01", title: { zh: "场景与边界评估", en: "Discovery and boundary mapping" }, body: { zh: "梳理关键 AI 数据对象、系统接口、介质类型和现有责任分工。", en: "Map priority AI data, interfaces, media types, and existing operating responsibilities." } },
  { step: "02", title: { zh: "联合设计试点", en: "Joint pilot design" }, body: { zh: "确定可验证用例、控制范围、接口清单、验收证据和退出条件。", en: "Define verifiable use cases, control scope, interfaces, evidence, and exit criteria." } },
  { step: "03", title: { zh: "设备级试点", en: "Device-level Pilot" }, body: { zh: "在限定数据域和设备范围内验证策略执行、结果校验和证据留存。", en: "Validate policy execution, outcome checks, and evidence retention in a bounded environment." } },
  { step: "04", title: { zh: "分阶段部署", en: "Phased deployment" }, body: { zh: "依据试点结果决定正式部署、系统扩展或继续验证，不预设规模化结论。", en: "Use pilot evidence to decide deployment, expansion, or further validation without assuming scale." } },
];

const companyRoles = [
  { icon: Network, title: { zh: "控制平面牵头", en: "Control-plane leadership" }, body: { zh: "定义对象、策略、执行接口和证据模型之间的协同关系。", en: "Define how objects, policies, execution interfaces, and evidence models work together." } },
  { icon: Boxes, title: { zh: "产品集成", en: "Product integration" }, body: { zh: "连接 Spark AI 一体机、分层存储、知识平台与第三方基础设施。", en: "Connect Spark AI Appliance, tiered storage, knowledge services, and third-party infrastructure." } },
  { icon: ScanSearch, title: { zh: "可信治理", en: "Trust governance" }, body: { zh: "把验证方法、证据结构、审批关系和持续审阅纳入产品流程。", en: "Embed validation, evidence structure, approvals, and ongoing review into product workflows." } },
];

export function DlsmInvestorPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="border-b border-sky-100 bg-[radial-gradient(circle_at_78%_22%,rgba(14,165,233,0.14),transparent_28rem),linear-gradient(180deg,#ffffff_0%,#f1f7fd_100%)] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <AnimatedBlock>
              <p className="text-sm font-semibold text-primary">Spark AI DLSM</p>
              <h1 className="mt-5 max-w-4xl text-[2.75rem] font-semibold leading-[1.04] text-slate-950 sm:text-[4.5rem]">
                <LocalizedText zh="让 AI 数据生命周期可控、可查、可验证" en="A control plane for the full AI Data Lifecycle" />
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600 sm:text-[19px]">
                <LocalizedText zh="Spark AI 正在推进 DLSM 产品与试点，把分散的数据治理、存储控制和审计证据连接成可运营的控制平面。" en="Spark AI is developing DLSM to connect data governance, storage control, and audit evidence in one operational plane." />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px]"><Link href="/contact"><LocalizedText zh="讨论企业试点" en="Discuss an enterprise pilot" /><ArrowRight aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] bg-white"><Link href="/products/spark-ai-appliance"><LocalizedText zh="了解产品底座" en="Explore the product foundation" /></Link></Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.08} className="rounded-[32px] border border-blue-100 bg-white/82 p-7 shadow-xl backdrop-blur-xl sm:p-9">
              <p className="text-sm font-semibold text-primary"><LocalizedText zh="DLSM 控制平面" en="DLSM control plane" /></p>
              <div className="mt-7 space-y-3">
                {architectureLayers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div key={layer.title.en} className="grid grid-cols-[auto_1fr] gap-4 rounded-[20px] border border-sky-100 bg-[#f8fbff] p-4">
                      <div className="flex size-10 items-center justify-center rounded-[14px] bg-sky-100 text-primary"><Icon className="size-5" aria-hidden="true" /></div>
                      <div><h2 className="font-semibold text-slate-950"><LocalizedText zh={layer.title.zh} en={layer.title.en} /></h2><p className="mt-1 text-sm leading-6 text-slate-600"><LocalizedText zh={layer.body.zh} en={layer.body.en} /></p></div>
                    </div>
                  );
                })}
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
            <AnimatedBlock><p className="text-sm font-semibold text-primary"><LocalizedText zh="立项依据" en="Why this matters" /></p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl"><LocalizedText zh="AI 数据增长了，管理链条却仍是割裂的" en="AI data is growing across disconnected control domains" /></h2></AnimatedBlock>
            <AnimatedBlock delay={0.06} className="grid gap-6 text-[16px] leading-8 text-slate-600 sm:grid-cols-2">
              <p><LocalizedText zh="训练数据、向量库、模型和检查点跨越计算、对象存储、归档介质与备份系统。单一工具通常只能看到其中一段。" en="Training data, vector stores, models, and checkpoints span compute, object storage, archive media, and backup systems. Individual tools see only part of that chain." /></p>
              <p><LocalizedText zh="企业需要的不只是策略配置，而是对象、执行结果、验证证据和责任主体之间可持续维护的对应关系。" en="Enterprises need more than policy settings. They need maintainable links between objects, outcomes, evidence, and accountable operators." /></p>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20 sm:py-24">
        <Container>
          <AnimatedBlock className="max-w-3xl">
            <p className="text-sm font-semibold text-primary"><LocalizedText zh="Spark AI 的职责" en="Spark AI's role" /></p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl"><LocalizedText zh="牵头控制平面与可信治理" en="Lead the control plane and trust governance" /></h2>
            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[18px]"><LocalizedText zh="DLSM 不替代现有存储、安全或数据平台。它负责协调对象、策略、设备动作和验证证据，让不同系统在清晰边界内协同。" en="DLSM does not replace storage, security, or data platforms. It coordinates objects, policies, device actions, and validation evidence across clear system boundaries." /></p>
          </AnimatedBlock>
          <AnimatedStagger className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {companyRoles.map((role, index) => {
              const Icon = role.icon;
              return <article key={role.title.en} className={`rounded-[28px] border border-sky-100 p-7 ${index === 0 ? "bg-primary text-white lg:min-h-80" : "bg-white text-slate-950"}`}><Icon className={`size-7 ${index === 0 ? "text-sky-200" : "text-primary"}`} aria-hidden="true" /><h3 className="mt-10 text-xl font-semibold"><LocalizedText zh={role.title.zh} en={role.title.en} /></h3><p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-blue-100" : "text-slate-600"}`}><LocalizedText zh={role.body.zh} en={role.body.en} /></p></article>;
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold text-primary"><LocalizedText zh="企业参与方式" en="Enterprise participation" /></p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl"><LocalizedText zh="从可验证的小范围试点开始" en="Start with a bounded, verifiable pilot" /></h2></AnimatedBlock>
          <AnimatedStagger className="mt-12 grid gap-px overflow-hidden rounded-[30px] border border-sky-100 bg-sky-100 md:grid-cols-2 xl:grid-cols-4">
            {participationPaths.map((path) => <article key={path.step} className="min-h-72 bg-[#f8fbff] p-7"><span className="font-mono text-sm font-semibold text-primary">{path.step}</span><h3 className="mt-10 text-xl font-semibold"><LocalizedText zh={path.title.zh} en={path.title.en} /></h3><p className="mt-4 text-sm leading-7 text-slate-600"><LocalizedText zh={path.body.zh} en={path.body.en} /></p></article>)}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 rounded-[32px] border border-blue-100 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[0.45fr_0.55fr]">
            <AnimatedBlock><Building2 className="size-7 text-primary" aria-hidden="true" /><h2 className="mt-6 text-3xl font-semibold leading-tight"><LocalizedText zh="商业化入口" en="Commercial entry points" /></h2></AnimatedBlock>
            <AnimatedBlock delay={0.05} className="grid gap-5 sm:grid-cols-2">
              <div><h3 className="font-semibold"><LocalizedText zh="评估与试点服务" en="Assessment and pilot services" /></h3><p className="mt-2 text-sm leading-7 text-slate-600"><LocalizedText zh="面向具体数据域确定边界、接口、验证方法与验收条件。" en="Define boundaries, interfaces, validation methods, and acceptance criteria for a specific data domain." /></p></div>
              <div><h3 className="font-semibold"><LocalizedText zh="软件订阅与集成" en="Software subscription and integration" /></h3><p className="mt-2 text-sm leading-7 text-slate-600"><LocalizedText zh="在试点验证后，按部署范围提供控制平面软件和系统集成。" en="After pilot validation, provide control-plane software and integration for the approved deployment scope." /></p></div>
            </AnimatedBlock>
          </div>
          <AnimatedBlock className="mt-8 rounded-[28px] border border-amber-200 bg-amber-50 p-7 sm:p-8"><h2 className="text-lg font-semibold text-slate-950"><LocalizedText zh="对外披露边界" en="External claim boundary" /></h2><p className="mt-3 max-w-5xl text-sm leading-7 text-slate-700"><LocalizedText zh="DLSM 目前按产品与试点方向披露，不表述为已形成国际共识的独立品类。设备命令、策略下发或试点完成本身，不等同于已经证明安全、合规或商业收益。" en="DLSM is presented as a product and pilot direction, not as an independently established global category. A device command, policy action, or completed pilot does not by itself prove security, compliance, or business return." /></p></AnimatedBlock>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <AnimatedBlock className="rounded-[32px] bg-primary px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div><h2 className="text-3xl font-semibold leading-tight sm:text-4xl"><LocalizedText zh="用一个真实数据域验证 DLSM" en="Validate DLSM in one real data domain" /></h2><p className="mt-4 max-w-2xl text-[16px] leading-8 text-blue-100"><LocalizedText zh="从边界明确、可测量、可退出的企业试点开始。" en="Begin with an enterprise pilot that has clear boundaries, measurable evidence, and exit criteria." /></p></div>
            <Button asChild size="lg" className="mt-8 rounded-[20px] bg-white text-primary hover:bg-sky-50 lg:mt-0"><Link href="/contact"><LocalizedText zh="联系 Spark AI" en="Contact Spark AI" /><ArrowRight aria-hidden="true" /></Link></Button>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
