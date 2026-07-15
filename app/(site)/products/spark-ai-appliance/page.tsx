import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Archive,
  Banknote,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  FileSearch,
  Layers3,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export const metadata: Metadata = {
  title: "Spark AI Appliance | Spark AI",
  description:
    "Spark AI Appliance unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, long-term archive, and trust governance.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

const overviewStats = [
  {
    value: "6",
    label: "Integrated infrastructure layers",
    labelZh: "六层一体化企业知识基础设施",
  },
  {
    value: "Local-first",
    label: "Deployment model for enterprise control",
    labelZh: "以本地化和可控部署为优先",
  },
  {
    value: "Long-term",
    label: "Knowledge retention and reuse lifecycle",
    labelZh: "面向长期保存与持续复用",
  },
];

const whyItems = [
  {
    title: "Built for enterprise knowledge, not isolated files",
    titleZh: "面向企业知识资产，而不是零散文件管理",
    body: "The appliance organizes data, metadata, retrieval policy, and governance into a durable knowledge infrastructure layer.",
    bodyZh:
      "企业真正需要沉淀的不是单个文件，而是可追溯、可检索、可治理的知识资产。Spark AI Appliance 将数据、元数据、检索策略和治理规则整合为长期可运营的知识基础设施。",
  },
  {
    title: "Designed for private AI deployment",
    titleZh: "适合私有化与受控 AI 场景",
    body: "Compute and retrieval stay close to controlled enterprise data, reducing exposure while keeping AI workflows operational.",
    bodyZh:
      "面向金融、政企、制造和大型集团客户，计算与检索尽量靠近受控数据环境，降低外部暴露风险，同时支持企业内部 AI 应用持续落地。",
  },
  {
    title: "Connects archive economics with AI utility",
    titleZh: "让长期归档数据重新产生 AI 价值",
    body: "Long-retention data can move from dormant storage into governed, attributable AI memory without losing lifecycle controls.",
    bodyZh:
      "大量长期保存的数据并非没有价值，问题在于难以被安全调用。Spark AI Appliance 帮助企业在保留生命周期规则的同时，把沉睡数据转化为可引用、可审计的 AI 记忆。",
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI Compute",
    titleZh: "本地 AI 计算",
    body: "Local accelerated compute for private retrieval, embedding, reranking, and knowledge workflow execution.",
    bodyZh: "支持企业内部的检索增强、向量化、重排序与知识工作流执行，适合对数据边界和响应效率有要求的场景。",
  },
  {
    icon: Layers3,
    title: "Intelligent Tiered Storage",
    titleZh: "智能分层存储",
    body: "Policy-based placement across performance, capacity, and archive tiers for cost-aware knowledge retention.",
    bodyZh: "按业务热度、合规周期和成本策略自动组织数据层级，让高频知识、低频资料和长期档案各得其所。",
  },
  {
    icon: Archive,
    title: "Long-Term Archive",
    titleZh: "长期知识归档",
    body: "Durable preservation for institutional records, datasets, media, documents, and regulated information.",
    bodyZh: "面向企业档案、行业数据、影像资料、研发文档和合规资料，建立可长期保存、可持续检索的知识底座。",
  },
  {
    icon: FileSearch,
    title: "Enterprise Retrieval",
    titleZh: "企业级检索",
    body: "Governed search and retrieval that grounds AI outputs in attributable source materials and metadata.",
    bodyZh: "让 AI 回答能够回到来源材料、元数据和权限边界，支持企业在可信依据上构建知识问答与业务助手。",
  },
  {
    icon: BrainCircuit,
    title: "AI Agent Runtime",
    titleZh: "AI Agent 运行层",
    body: "Knowledge-aware workflows that can operate with controlled data access, audit trails, and policy boundaries.",
    bodyZh: "为面向知识的 AI Agent 提供受控数据访问、流程记录和策略边界，帮助企业从试点走向可管理的生产环境。",
  },
  {
    icon: ShieldCheck,
    title: "Trust Governance",
    titleZh: "可信治理",
    body: "Access control, integrity, retention, auditability, and lifecycle policy for production AI knowledge systems.",
    bodyZh: "覆盖权限、完整性、留存周期、审计和生命周期管理，适合需要对内控、合规和长期责任负责的组织。",
  },
];

const architectureSteps = [
  {
    title: "Enterprise Data",
    titleZh: "企业数据资产",
    body: "Documents, records, media, databases, and domain knowledge.",
    bodyZh: "汇聚文档、档案、影像、业务系统数据和行业知识，形成可治理的数据资产入口。",
  },
  {
    title: "Intelligent Storage",
    titleZh: "智能存储与分层",
    body: "Hot, warm, cold, and archive tiers governed by policy.",
    bodyZh: "根据访问频率、成本、合规和保留周期，建立热、温、冷、归档多层数据管理策略。",
  },
  {
    title: "Retrieval Layer",
    titleZh: "知识检索层",
    body: "Indexing, metadata, search, attribution, and knowledge grounding.",
    bodyZh: "通过索引、元数据、检索和来源归因，让企业知识能够被 AI 准确调用与解释。",
  },
  {
    title: "AI Agent Layer",
    titleZh: "AI Agent 应用层",
    body: "Controlled workflows using trusted enterprise context.",
    bodyZh: "在受控企业语境中运行知识问答、流程辅助、资料分析和业务协作等 AI Agent。",
  },
  {
    title: "Knowledge Archive",
    titleZh: "长期知识档案",
    body: "Reusable institutional memory with long-term governance.",
    bodyZh: "形成可持续复用的组织记忆，支持长期运营、审计、交接和下一代 AI 应用。",
  },
];

const specifications = [
  {
    label: "Deployment",
    labelZh: "部署模式",
    value: "On-premise or controlled private environment",
    valueZh: "支持本地部署、私有化环境或受控专属环境，适合香港、大湾区及内地企业的数据合规和内控要求。",
  },
  {
    label: "Core layers",
    labelZh: "核心层级",
    value: "AI compute, storage tiering, retrieval, agent runtime, archive, trust governance",
    valueZh: "覆盖 AI 计算、存储分层、知识检索、Agent 运行、长期归档与可信治理六个关键层级。",
  },
  {
    label: "Data scope",
    labelZh: "数据范围",
    value: "Documents, records, datasets, media assets, knowledge bases, and operational files",
    valueZh: "适用于企业文档、业务档案、行业数据集、影像资料、知识库和运营文件等长期价值信息。",
  },
  {
    label: "Governance",
    labelZh: "治理能力",
    value: "Access policy, retention policy, audit trail, integrity controls, lifecycle management",
    valueZh: "支持访问策略、留存策略、审计记录、完整性控制和生命周期管理，便于企业建立可复核的 AI 知识体系。",
  },
  {
    label: "Integration path",
    labelZh: "集成路径",
    value: "Enterprise storage, identity, retrieval APIs, knowledge applications, and AI workflows",
    valueZh: "可对接企业存储、身份体系、检索 API、知识应用和 AI 工作流，降低从试点到规模化部署的落地成本。",
  },
  {
    label: "Primary use",
    labelZh: "主要用途",
    value: "Turning long-term enterprise information into trusted AI memory",
    valueZh: "把长期保存的企业信息转化为可信、可检索、可治理的 AI 记忆层，支撑企业级智能应用。",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Enterprise Headquarters",
    titleZh: "企业总部与集团管理",
    body: "Preserve documents, project history, operational records, and expert knowledge for reusable AI workflows.",
    bodyZh: "沉淀集团制度、项目经验、运营记录和专家知识，为跨部门协同、知识传承和管理决策提供 AI 支撑。",
  },
  {
    icon: Banknote,
    title: "Financial Services",
    titleZh: "金融与专业服务",
    body: "Support governed retrieval across policy archives, research, compliance files, and customer knowledge assets.",
    bodyZh: "面向投研、风控、合规、客户资料和政策档案，建立可审计、可追溯的知识检索与 AI 辅助能力。",
  },
  {
    icon: Scale,
    title: "Government and Public Sector",
    titleZh: "政府、园区与公共机构",
    body: "Protect long-term records and institutional knowledge while enabling controlled AI-assisted access.",
    bodyZh: "保护长期档案、政策材料和公共服务知识，在权限可控的前提下提升资料调用、政策查询和内部协作效率。",
  },
  {
    icon: Factory,
    title: "Industrial Operations",
    titleZh: "制造与产业运营",
    body: "Connect maintenance records, engineering documentation, quality data, and operational history to AI agents.",
    bodyZh: "连接设备维护、工程文档、质量数据和生产历史，让现场经验和技术资料可被 AI Agent 持续复用。",
  },
];

function SectionHeader({
  eyebrow,
  eyebrowZh,
  title,
  titleZh,
  body,
  bodyZh,
}: {
  eyebrow: string;
  eyebrowZh: string;
  title: string;
  titleZh: string;
  body?: string;
  bodyZh?: string;
}) {
  return (
    <AnimatedBlock className="mx-auto max-w-3xl text-center">
      <p className="premium-eyebrow mx-auto">
        <LocalizedText zh={eyebrowZh} en={eyebrow} />
      </p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
        <LocalizedText zh={titleZh} en={title} />
      </h2>
      {body ? (
        <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
          <LocalizedText zh={bodyZh} en={body} />
        </p>
      ) : null}
    </AnimatedBlock>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/78 p-5 shadow-[0_28px_80px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(37,99,235,0.12),transparent_18rem),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_20rem)]" />
      <div className="relative grid gap-4 lg:grid-cols-5">
        {architectureSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-[22px] border border-sky-100/90 bg-white/82 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              {index < architectureSteps.length - 1 ? (
                <ArrowRight className="hidden size-5 text-sky-300 lg:block" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
              )}
            </div>
            <h3 className="text-base font-semibold text-slate-950">
              <LocalizedText zh={step.titleZh} en={step.title} />
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              <LocalizedText zh={step.bodyZh} en={step.body} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SparkAiAppliancePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <AnimatedBlock>
              <p className="premium-eyebrow">{applianceName}</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                <LocalizedText
                  zh="面向 AI 时代的企业知识基础设施一体机"
                  en="Knowledge Infrastructure Appliance for the AI Era"
                />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                <LocalizedText
                  zh={`${applianceName} 面向香港、大湾区及内地企业，将本地 AI 计算、智能分层存储、企业检索、AI Agent、长期归档与可信治理整合在同一平台，帮助组织把长期数据沉淀为可运营的知识资产。`}
                  en={`${applianceName} unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, long-term archival, and trust governance in one platform.`}
                />
              </p>
              <p className="mt-5 text-lg font-semibold text-primary">
                <LocalizedText zh="让数据成为知识，让知识成为可信 AI 能力。" en="Memory for AI. Trust for Tomorrow." />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[18px]">
                  <Link href="/contact">
                    <LocalizedText zh="预约产品交流" en="Book Product Demo" /> <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75">
                  <Link href="/architecture">
                    <LocalizedText zh="查看知识架构" en="View Architecture" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock className="relative overflow-hidden rounded-[34px] border border-sky-100 bg-[linear-gradient(135deg,#eff8ff,#ffffff_52%,#e6f6ff)] p-6 shadow-[0_30px_90px_rgba(37,99,235,0.14)]">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[28px] border border-white bg-white/74 p-6 backdrop-blur-xl">
                <div className="flex min-h-36 items-center justify-center rounded-[24px] bg-slate-950 text-center text-2xl font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                  Spark AI Appliance
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { zh: "计算", en: "Compute" },
                    { zh: "检索", en: "Retrieve" },
                    { zh: "归档", en: "Archive" },
                    { zh: "治理", en: "Govern" },
                  ].map((item) => (
                    <div key={item.en} className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                      <LocalizedText zh={item.zh} en={item.en} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Product Overview"
            eyebrowZh="产品概览"
            title="A Local Knowledge Infrastructure Layer for Enterprise AI"
            titleZh="为企业 AI 构建本地化知识基础设施层"
            body="Spark AI Appliance brings together storage economics, controlled retrieval, AI execution, and governance so organizations can convert long-term information into trusted AI memory."
            bodyZh="Spark AI Appliance 将存储成本、受控检索、AI 执行和知识治理放在同一架构下，帮助企业把长期留存的信息转化为可被业务、安全和管理层信任的 AI 记忆。"
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-3">
            {overviewStats.map((item) => (
              <div key={item.label} className="premium-card p-6 text-center">
                <div className="text-3xl font-semibold text-primary">{item.value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  <LocalizedText zh={item.labelZh} en={item.label} />
                </p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow={`Why ${applianceName}`}
            eyebrowZh={`为什么选择 ${applianceName}`}
            title="Built for the Moment When Enterprise Data Becomes AI Memory"
            titleZh="为企业数据进入 AI 记忆时代而设计"
          />
          <AnimatedStagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="premium-card p-7">
                <LockKeyhole className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-950">
                  <LocalizedText zh={item.titleZh} en={item.title} />
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  <LocalizedText zh={item.bodyZh} en={item.body} />
                </p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Six Core Capabilities"
            eyebrowZh="六大核心能力"
            title="One Appliance, Six Infrastructure Functions"
            titleZh="一台一体机，承载六类关键基础设施能力"
            body="Each layer is designed to work together rather than becoming another isolated tool in the enterprise AI stack."
            bodyZh="每一层能力都围绕企业级 AI 落地协同设计，避免形成新的工具孤岛，让知识保存、检索、调用和治理形成闭环。"
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-6">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    <LocalizedText zh={item.titleZh} en={item.title} />
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    <LocalizedText zh={item.bodyZh} en={item.body} />
                  </p>
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow="Knowledge Architecture"
            eyebrowZh="知识架构"
            title="From Enterprise Data to Governed Knowledge"
            titleZh="从企业数据到可治理知识"
            body="The appliance creates a controlled flow from raw enterprise information into searchable, attributable, and reusable AI knowledge."
            bodyZh="Spark AI Appliance 将企业原始资料转化为可检索、可归因、可复用的知识资产，让 AI 应用建立在清晰来源和可控权限之上。"
          />
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <AnimatedBlock>
              <p className="premium-eyebrow">
                <LocalizedText zh="技术规格与部署模式" en="Technical Specifications" />
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                <LocalizedText
                  zh="面向受控 AI 工作负载的企业级部署基础"
                  en="Deployment-Ready Infrastructure for Controlled AI Workloads"
                />
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-slate-600">
                <LocalizedText
                  zh="规格设计围绕企业部署决策展开，重点覆盖数据控制、系统集成、治理责任和长期知识生命周期，便于管理层、IT 团队与业务部门共同评估。"
                  en="Specifications are organized around enterprise deployment decisions: data control, integration, governance, and long-term knowledge lifecycle."
                />
              </p>
            </AnimatedBlock>
            <AnimatedBlock className="overflow-hidden rounded-[28px] border border-sky-100 bg-white/80 shadow-sm backdrop-blur-xl">
              {specifications.map((item) => (
                <div key={item.label} className="grid gap-2 border-b border-sky-100/80 px-5 py-4 last:border-b-0 sm:grid-cols-[0.34fr_0.66fr]">
                  <div className="text-sm font-semibold text-slate-950">
                    <LocalizedText zh={item.labelZh} en={item.label} />
                  </div>
                  <div className="text-sm leading-6 text-slate-600">
                    <LocalizedText zh={item.valueZh} en={item.value} />
                  </div>
                </div>
              ))}
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow="Industry Applications"
            eyebrowZh="行业应用"
            title="For Organizations Where Knowledge Has Long-Term Value"
            titleZh="适用于知识具有长期价值的组织"
            body="Spark AI Appliance is designed for teams that need to preserve, search, govern, and activate high-value information over long time horizons."
            bodyZh="Spark AI Appliance 面向需要长期保存、持续检索、合规治理和智能激活高价值信息的机构，尤其适合正在推进 AI 基础设施升级的企业与公共组织。"
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-7">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    <LocalizedText zh={item.titleZh} en={item.title} />
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    <LocalizedText zh={item.bodyZh} en={item.body} />
                  </p>
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12">
            <p className="premium-eyebrow mx-auto">
              <LocalizedText zh="下一步" en="CTA" />
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              <LocalizedText
                zh="评估您的企业知识基础设施部署路径"
                en="Evaluate Your Knowledge Infrastructure Deployment Path"
              />
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
              <LocalizedText
                zh="Spark AI 可协助企业评估数据规模、留存周期、检索需求、治理要求和本地 AI 部署选项，为下一阶段的知识基础设施建设提供清晰路径。"
                en="Spark AI can help assess data scale, retention cycles, retrieval needs, governance requirements, and local AI deployment options."
              />
            </p>
            <Button asChild variant="spark" size="lg" className="mt-8 rounded-[18px]">
              <Link href="/contact">
                <LocalizedText zh="联系 Spark AI" en="Contact Spark AI" /> <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
