import type { Metadata } from "next";
import Image from "next/image";
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
  Server,
  Database,
  SearchCheck,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";
const productImage = "/images/rtx-spark-appliance.png";

export const metadata: Metadata = {
  title: "Spark AI Appliance | Spark AI",
  description:
    "Spark AI Appliance is the flagship knowledge infrastructure appliance for the AI era, unifying AI compute, intelligent storage, enterprise retrieval, AI Agents, trust governance, and long-term archive.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

const overviewStats = [
  {
    value: "6",
    label: "Integrated knowledge infrastructure layers",
    labelZh: "六层一体化知识基础设施",
  },
  {
    value: "One platform",
    label: "Compute, storage, retrieval, agents, governance, and archive",
    labelZh: "计算、存储、检索、Agent、治理与归档统一部署",
  },
  {
    value: "Long-term",
    label: "Reusable institutional memory for organizations and institutions",
    labelZh: "面向组织长期复用的机构记忆",
  },
];

const comparisons = [
  {
    icon: Cpu,
    title: "GPU Server",
    titleZh: "GPU 服务器",
    body: "Compute without long-term knowledge continuity.",
    bodyZh: "提供算力，但不负责知识沉淀、长期留存和跨业务连续复用。",
  },
  {
    icon: Database,
    title: "NAS / Object Storage",
    titleZh: "NAS / 对象存储",
    body: "Stores files, but does not turn them into governed reusable knowledge.",
    bodyZh: "能够保存文件，却无法把文件组织成可治理、可检索、可被 AI 持续调用的知识资产。",
  },
  {
    icon: SearchCheck,
    title: "Standalone RAG",
    titleZh: "独立 RAG 软件",
    body: "Improves retrieval, but lacks integrated compute, storage, governance and archive.",
    bodyZh: "增强了检索体验，但通常缺少计算、存储、治理和长期归档的一体化基础设施。",
  },
  {
    icon: Server,
    title: "Spark AI Appliance",
    titleZh: "Spark AI Appliance",
    body: "Unifies the full knowledge lifecycle in one deployable platform.",
    bodyZh: "在一个可部署平台中统一知识的接入、存储、检索、调用、治理和长期归档。",
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI Compute",
    titleZh: "AI 计算",
    body: "Runs private AI workloads close to controlled data for retrieval, embedding, reranking, and agent execution.",
    bodyZh:
      "在受控数据环境内提供本地 AI 算力，支持向量化、重排序、检索增强和 Agent 执行，降低数据外流风险，提升组织内部知识应用的响应效率。",
  },
  {
    icon: Layers3,
    title: "Intelligent Tiered Storage",
    titleZh: "智能分层存储",
    body: "Places data across hot, warm, cold, and archive tiers according to value, access frequency, and policy.",
    bodyZh:
      "按照访问频率、业务价值、保留周期和成本策略组织数据层级，让高频知识快速可用，低频资料低成本保存，长期档案保持可追溯。",
  },
  {
    icon: FileSearch,
    title: "Enterprise Retrieval",
    titleZh: "企业级知识检索",
    body: "Grounds AI outputs in governed source material, metadata, permissions, and institutional context.",
    bodyZh:
      "把 AI 回答建立在来源材料、元数据、权限边界和组织语境之上，让管理层和业务团队能够追溯依据，而不是只依赖黑箱生成结果。",
  },
  {
    icon: BrainCircuit,
    title: "AI Agents",
    titleZh: "AI Agent",
    body: "Enables knowledge-aware workflows with controlled data access, operational memory, and audit trails.",
    bodyZh:
      "为知识问答、资料分析、流程辅助和跨部门协作提供受控运行环境，使 AI Agent 能够在企业规则内调用资料、记录过程并持续复用经验。",
  },
  {
    icon: ShieldCheck,
    title: "Trust Governance",
    titleZh: "可信治理",
    body: "Controls access, integrity, retention, auditability, and lifecycle policy for production AI knowledge systems.",
    bodyZh:
      "覆盖权限、完整性、留存周期、审计记录和生命周期管理，帮助金融、政企、园区和集团客户建立可复核、可负责的 AI 知识体系。",
  },
  {
    icon: Archive,
    title: "Long-term Archive",
    titleZh: "长期归档",
    body: "Preserves institutional data and knowledge so it remains usable, attributable, and valuable over time.",
    bodyZh:
      "面向档案、文档、影像、研发资料和行业数据建立长期保存能力，让沉睡数据在多年后仍能被检索、解释、审计和再次创造业务价值。",
  },
];

const lifecycleSteps = [
  {
    title: "Enterprise Data",
    titleZh: "组织数据资产",
    body: "Documents, records, datasets, media, databases, and domain knowledge.",
    bodyZh: "汇聚企业、机构和园区的文档、档案、数据集、影像、业务系统数据和行业知识。",
  },
  {
    title: "Ingestion",
    titleZh: "数据接入",
    body: "Bring structured and unstructured information into a governed knowledge pipeline.",
    bodyZh: "将结构化与非结构化信息纳入可管理流程，保留来源、权限、时间和业务语境。",
  },
  {
    title: "Intelligent Storage",
    titleZh: "智能存储",
    body: "Organize information across performance, capacity, and archive tiers.",
    bodyZh: "按热度、成本、合规和长期价值进行分层组织，避免知识资产散落在孤立系统中。",
  },
  {
    title: "Retrieval",
    titleZh: "知识检索",
    body: "Index, search, attribute, and ground answers in trusted enterprise context.",
    bodyZh: "通过索引、检索、来源归因和上下文组织，让 AI 能够调用可信资料而非凭空生成。",
  },
  {
    title: "AI Agents",
    titleZh: "AI Agent",
    body: "Use governed knowledge in controlled workflows and institutional processes.",
    bodyZh: "在受控流程中支持问答、分析、报告、运维和协作，让组织知识进入可执行工作流。",
  },
  {
    title: "Governed Knowledge",
    titleZh: "可治理知识",
    body: "Convert raw information into reusable, trusted, and auditable knowledge assets.",
    bodyZh: "把原始信息沉淀为可复用、可追溯、可审计的知识资产，服务管理和业务决策。",
  },
  {
    title: "Long-term Archive",
    titleZh: "长期归档",
    body: "Preserve institutional memory with governance, continuity, and long-term value.",
    bodyZh: "形成长期机构记忆，支持审计、传承、合规、交接和下一阶段 AI 应用建设。",
  },
];

const specifications = [
  {
    label: "Deployment model",
    labelZh: "部署模式",
    value: "On-premise, private environment, or controlled dedicated deployment",
    valueZh: "支持本地部署、私有化环境或受控专属部署，适合香港、大湾区及内地组织的数据合规、内控和安全边界要求。",
  },
  {
    label: "Core platform value",
    labelZh: "核心平台价值",
    value:
      "AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, trust governance, and long-term archive in one deployable platform",
    valueZh: "在一个可部署平台中整合 AI 计算、智能分层存储、企业级检索、AI Agent、可信治理和长期归档。",
  },
  {
    label: "Data scope",
    labelZh: "数据范围",
    value: "Documents, records, datasets, media assets, knowledge bases, and operational files",
    valueZh: "适用于企业文档、机构档案、行业数据集、影像资料、知识库和运营文件等长期价值信息。",
  },
  {
    label: "Governance",
    labelZh: "治理能力",
    value: "Access policy, retention policy, audit trail, integrity controls, lifecycle management",
    valueZh: "支持访问策略、留存策略、审计记录、完整性控制和生命周期管理，帮助组织建立可复核的 AI 知识体系。",
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
    value: "Turning institutional data into trusted, reusable, and enduring AI memory",
    valueZh: "把机构长期积累的数据转化为可信、可复用、可持续运营的 AI 记忆层。",
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

function ProductVisual() {
  return (
    <AnimatedBlock className="relative overflow-hidden rounded-[34px] border border-sky-100 bg-[linear-gradient(135deg,#eff8ff,#ffffff_52%,#e6f6ff)] p-4 shadow-[0_30px_90px_rgba(37,99,235,0.14)] sm:p-6">
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/74 shadow-sm backdrop-blur-xl">
        <Image
          src={productImage}
          width={1800}
          height={900}
          priority
          alt="Spark AI Appliance 工业设计概念图，钛银色机身、蓝色 Spark Light Spine 与企业级知识基础设施视觉"
          className="aspect-[16/10] h-auto w-full object-cover"
        />
      </div>
      <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
        {[
          { zh: "知识基础设施", en: "Knowledge Infrastructure" },
          { zh: "可信 AI 记忆", en: "Trusted AI Memory" },
          { zh: "长期价值", en: "Enduring Value" },
        ].map((item) => (
          <div key={item.en} className="rounded-2xl border border-sky-100 bg-white/82 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
            <LocalizedText zh={item.zh} en={item.en} />
          </div>
        ))}
      </div>
    </AnimatedBlock>
  );
}

function LifecycleArchitecture() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/78 p-5 shadow-[0_28px_80px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(37,99,235,0.12),transparent_18rem),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_20rem)]" />
      <div className="relative grid gap-4 lg:grid-cols-7">
        {lifecycleSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-[22px] border border-sky-100/90 bg-white/82 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              {index < lifecycleSteps.length - 1 ? (
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.96fr] lg:items-center">
            <AnimatedBlock>
              <p className="premium-eyebrow">
                <LocalizedText zh="SPARK AI APPLIANCE" en="SPARK AI APPLIANCE" />
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                <LocalizedText
                  zh={
                    <>
                      AI 时代的知识基础设施一体机
                    </>
                  }
                  en={
                    <>
                      Knowledge Infrastructure Appliance
                      <span className="block">for the AI Era.</span>
                    </>
                  }
                />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                <LocalizedText
                  zh="通过 AI 计算、智能存储、企业级检索、AI Agent 与长期归档，把机构长期积累的数据转化为可治理、可检索、可复用、可持续沉淀的知识资产。"
                  en="Turn institutional data into governed, retrievable, reusable and enduring knowledge with AI compute, intelligent storage, enterprise retrieval, AI Agents and long-term archive."
                />
              </p>
              <p className="mt-5 text-lg font-semibold text-primary">
                <LocalizedText
                  zh="Spark AI 构建知识基础设施，让企业与机构的数据转化为可信、可复用、可长期沉淀的知识。"
                  en="Spark AI builds the knowledge infrastructure that transforms enterprise data into trusted, reusable, and enduring knowledge."
                />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[18px]">
                  <Link href="/architecture">
                    <LocalizedText zh="探索架构" en="Explore Architecture" /> <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75">
                  <Link href="/contact">
                    <LocalizedText zh="预约产品演示" en="Book Product Demo" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>
            <ProductVisual />
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow={`Why ${applianceName}`}
            eyebrowZh={`为什么选择 ${applianceName}`}
            title="Why Spark AI Appliance?"
            titleZh="为什么需要 Spark AI Appliance？"
            body="Enterprise AI needs permanent, governed memory, not just more GPUs."
            bodyZh="企业和机构推进 AI，不只是需要更多 GPU，更需要一套可长期沉淀、可治理、可审计的知识记忆层。"
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {comparisons.map((item) => {
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

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Product Overview"
            eyebrowZh="产品概览"
            title="The Flagship Knowledge Infrastructure Appliance for the AI Era"
            titleZh="面向 AI 时代的旗舰级知识基础设施一体机"
            body="AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, trust governance, and long-term archive in one deployable platform."
            bodyZh="Spark AI Appliance 将 AI 计算、智能分层存储、企业级检索、AI Agent、可信治理与长期归档整合为一个可部署平台，帮助组织把数据资产转化为长期可用的知识能力。"
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

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Six Core Capabilities"
            eyebrowZh="六大核心能力"
            title="One Appliance, Six Infrastructure Functions"
            titleZh="一台一体机，承载完整知识生命周期"
            body="Each layer explains concrete commercial value, from controlled AI execution to long-term knowledge continuity."
            bodyZh="每一层能力都围绕企业和机构的实际落地价值设计，从受控 AI 执行到长期知识延续，形成可运营的基础设施闭环。"
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
            eyebrow="Knowledge Lifecycle Architecture"
            eyebrowZh="知识生命周期架构"
            title="From Enterprise Data to Governed Knowledge"
            titleZh="从组织数据到可治理知识"
            body="Spark AI manages the full lifecycle of knowledge, not only storage or retrieval."
            bodyZh="Spark AI 管理的是知识的完整生命周期，而不只是存储文件或提升检索体验。"
          />
          <div className="mt-10">
            <LifecycleArchitecture />
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="rounded-[32px] border border-sky-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12">
            <p className="premium-eyebrow mx-auto">
              <LocalizedText zh="品牌使命" en="Brand Mission" />
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              <LocalizedText zh="为 AI 建立记忆，为未来建立信任。" en="Memory for AI. Trust for Tomorrow." />
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
              <LocalizedText
                zh="Spark AI 构建知识基础设施，让每一个企业和机构都能在可信、连续、长期有价值的基础上使用 AI，而不是把关键知识留在分散系统和短期试点中。"
                en="Build the knowledge infrastructure that enables every organization to use AI with trust, continuity and long-term value."
              />
            </p>
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
                  zh="规格设计围绕数据控制、系统集成、治理责任和长期知识生命周期，便于管理层、IT 团队和业务部门共同评估部署路径。"
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
            bodyZh="Spark AI Appliance 面向需要长期保存、持续检索、合规治理和智能激活高价值信息的组织，尤其适合正在推进 AI 基础设施升级的企业、园区和公共机构。"
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
              <LocalizedText zh="商业合作" en="Commercial CTA" />
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              <LocalizedText zh="准备建设您的知识基础设施了吗？" en="Ready to build your knowledge infrastructure?" />
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
              <LocalizedText
                zh="Spark AI 可协助评估数据规模、留存周期、检索需求、治理要求和本地 AI 部署选项，为组织下一阶段的知识基础设施建设提供清晰路径。"
                en="Spark AI can help assess data scale, retention cycles, retrieval needs, governance requirements, and local AI deployment options."
              />
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="spark" size="lg" className="rounded-[18px]">
                <Link href="/contact">
                  <LocalizedText zh="预约演示" en="Book Demo" /> <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75">
                <Link href="/contact">
                  <LocalizedText zh="联系销售" en="Contact Sales" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
