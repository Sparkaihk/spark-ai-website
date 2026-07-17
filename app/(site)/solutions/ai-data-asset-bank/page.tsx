import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Boxes,
  BrainCircuit,
  Building2,
  ClipboardList,
  Cpu,
  Database,
  Factory,
  FileArchive,
  FileSearch,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  Image,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";
import { LocalizedSvgText } from "@/components/site/localized-svg-text";
import { LocalizedSvg } from "@/components/site/localized-svg";
import { LocalizedText } from "@/components/site/localized-text";

const zh: Record<string, string> = {
  "50+ Years": "50+ 年", "Enterprise Ready": "企业级就绪", "Multi-modal AI": "多模态 AI", "RAG Native": "原生 RAG", "AI Agent Enabled": "AI 智能体赋能",
  "Cold data scale": "冷数据规模", "Long-term archive horizon": "长期归档周期", "Governed deployment": "治理型部署",
  "Documents, images, audio and video": "文档、图像、音频与视频", "Built for enterprise retrieval": "专为企业检索构建", "Actionable knowledge workflows": "可执行的知识工作流",
  "Cold Data": "冷数据", Metadata: "元数据", "Knowledge Base": "知识库", "Enterprise RAG": "企业级 RAG", "AI Agents": "AI 智能体", "Data Assets": "数据资产", "Business Value": "业务价值",
  "Cold Data Sources": "冷数据来源", "Metadata & Governance": "元数据与治理", "Knowledge Assets": "知识资产", "Knowledge Archive": "知识档案", "Asset Portfolio": "资产组合",
  "Data Inventory": "数据盘点", "Metadata Governance": "元数据治理", "AI-ready Knowledge Assets": "AI 就绪知识资产", "Secure Retrieval": "安全检索", "Asset Valuation": "资产价值评估", "Lifecycle Management": "生命周期管理",
  "Identify and classify enterprise data across departments, repositories and historical systems, creating a clear map of what can be preserved, governed, retrieved and converted into AI-ready assets.": "识别并分类跨部门、存储库和历史系统的企业数据，清晰呈现哪些数据能够被保存、治理、检索并转化为 AI 就绪资产。",
  "Attach structured metadata, ownership, permissions, source lineage and lifecycle rules to every dataset so cold data becomes accountable, searchable and audit-ready.": "为每个数据集附加结构化元数据、所有权、权限、来源血缘与生命周期规则，让冷数据可问责、可搜索并可审计。",
  "Convert documents, records, images and media into searchable enterprise knowledge through parsing, OCR, enrichment, indexing and governed knowledge-base workflows.": "通过解析、OCR、内容增强、索引和受治理的知识库工作流，将文档、记录、图像与媒体转化为可搜索的企业知识。",
  "Enable controlled access through hybrid search, vector retrieval and permission-aware RAG so teams and agents can retrieve useful context without breaking security boundaries.": "通过混合搜索、向量检索和权限感知 RAG 实现受控访问，让团队与智能体在不突破安全边界的前提下获取有效上下文。",
  "Track usage, reuse, knowledge demand and business impact signals to support future data valuation, management reporting and internal asset portfolio planning.": "跟踪使用、复用、知识需求与业务影响信号，为未来的数据估值、管理报告和内部资产组合规划提供依据。",
  "Manage data from collection to archive, activation, reuse, compliance and future valuation through one lifecycle connected to Spark knowledge infrastructure for the AI era.": "在连接 Spark AI 时代知识基础设施的统一生命周期中，管理数据的采集、归档、激活、复用、合规与未来估值。",
  "Raw Data Layer": "原始数据层", "Metadata Layer": "元数据层", "Knowledge Layer": "知识层", "AI Service Layer": "AI 服务层", "Asset Value Layer": "资产价值层",
  "Enterprise archives, documents, images, videos, records and historical exports are preserved as the raw material for future AI value.": "企业档案、文档、图像、视频、记录和历史导出数据被长期保存，成为未来 AI 价值的原材料。",
  "Ownership, source, access policy, quality, retention period and lineage make data governable, searchable and auditable.": "所有权、来源、访问策略、质量、保留期限和数据血缘，让数据可治理、可搜索、可审计。",
  "Parsed and indexed content becomes reusable enterprise knowledge for employees, applications and domain-specific RAG.": "经过解析与索引的内容成为可供员工、应用和领域 RAG 复用的企业知识。",
  "Enterprise RAG and AI agents retrieve trusted context from governed knowledge assets to support private AI workflows.": "企业级 RAG 与 AI 智能体从受治理的知识资产中检索可信上下文，支持私有 AI 工作流。",
  "Usage, reuse, business impact and future valuation signals reveal where enterprise data creates measurable value.": "使用、复用、业务影响和未来估值信号，揭示企业数据产生可衡量价值的环节。",
  "Government Archives": "政府档案", "Healthcare Records": "医疗记录", "Financial Compliance": "金融合规", "Manufacturing Knowledge": "制造知识", "Education Resources": "教育资源", "Media Archives": "媒体档案",
  "Data Ownership": "数据所有权", "Access Control": "访问控制", "Audit Trail": "审计追踪", "Compliance-ready Preservation": "合规就绪保存",
  "Clarify source, owner, responsible team and approved usage for every important dataset.": "明确每个重要数据集的来源、所有者、责任团队与获批用途。",
  "Apply role, department and project permissions across retrieval, RAG and AI agent workflows.": "在检索、RAG 与 AI 智能体工作流中应用角色、部门和项目权限。",
  "Track retrieval, source references, knowledge usage and model-facing interactions.": "追踪检索、来源引用、知识使用与面向模型的交互。",
  "Preserve records with retention policies, immutable storage options and governance evidence.": "通过保留策略、不可变存储选项与治理证据保存记录。",
  "Cold Data Infrastructure": "冷数据基础设施", "Enterprise RAG Integration": "企业级 RAG 集成", "Knowledge Archive Long-term Archive": "知识档案长期归档", "AI Agent Enablement": "AI 智能体赋能",
  "Built on PB-scale preservation and lifecycle management for long-retained enterprise data.": "面向长期保留的企业数据，构建于 PB 级保存与生命周期管理之上。",
  "Connect governed assets to retrieval, vector search and trusted enterprise AI answers.": "将受治理资产连接至检索、向量搜索与可信企业 AI 回答。",
  "Preserve critical records and AI history with durable, low-power cold archive options.": "通过耐久、低功耗的冷归档方案保存关键记录与 AI 历史。",
  "Enable agents to act on trusted, permission-aware knowledge assets and workflows.": "让智能体基于可信、权限感知的知识资产与工作流执行任务。",
  "Primary role": "主要作用", "Stores files and archives": "存储文件与档案", "Turns cold data into governed, searchable AI assets": "将冷数据转化为受治理、可搜索的 AI 资产",
  "Limited file-level metadata": "有限的文件级元数据", "Ownership, lineage, permissions, retention and value signals": "所有权、血缘、权限、保留策略与价值信号",
  "AI readiness": "AI 就绪度", "Requires separate processing": "需要独立处理", "Built-in parsing, indexing, RAG and AI agent activation": "内置解析、索引、RAG 与 AI 智能体激活",
  Governance: "治理", "Storage policy focused": "侧重存储策略", "Access control, audit trails, lifecycle and compliance workflows": "访问控制、审计追踪、生命周期与合规工作流",
  "Business value": "业务价值", "Cost center": "成本中心", "Reusable knowledge asset portfolio with valuation potential": "具备估值潜力的可复用知识资产组合",
  Hardware: "硬件", "Enterprise Software": "企业软件", "RAG Platform": "RAG 平台", "AI Agent": "AI 智能体", "Managed Service": "托管服务",
  "Edge appliances, storage nodes and enterprise cold data infrastructure.": "边缘一体机、存储节点与企业冷数据基础设施。",
  "Data inventory, governance, metadata, lifecycle and asset management software.": "数据盘点、治理、元数据、生命周期与资产管理软件。",
  "Private enterprise retrieval, vector search and trusted AI knowledge services.": "私有企业检索、向量搜索与可信 AI 知识服务。",
  "Domain agents that act on governed knowledge assets and enterprise workflows.": "基于受治理知识资产和企业工作流执行任务的领域智能体。",
  "Deployment, operation, data onboarding and long-term optimization services.": "部署、运营、数据接入与长期优化服务。",
};

function Copy({ children }: { children: string }) {
  return <LocalizedText en={children} zh={zh[children] ?? children} />;
}

export const metadata: Metadata = {
  title: "AI Knowledge Infrastructure | Spark AI",
  description:
    "Spark AI Knowledge Infrastructure transforms cold enterprise data into governed, AI-ready and monetizable knowledge assets.",
  alternates: { canonical: "/solutions/ai-data-asset-bank" },
};

const kpis = [
  { value: "100PB+", label: "Cold data scale", icon: Database },
  { value: "50+ Years", label: "Long-term archive horizon", icon: Archive },
  { value: "Enterprise Ready", label: "Governed deployment", icon: ShieldCheck },
  { value: "Multi-modal AI", label: "Documents, images, audio and video", icon: BrainCircuit },
  { value: "RAG Native", label: "Built for enterprise retrieval", icon: FileSearch },
  { value: "AI Agent Enabled", label: "Actionable knowledge workflows", icon: Sparkles },
];

const valueChain = [
  { title: "Cold Data", icon: Archive },
  { title: "Metadata", icon: Database },
  { title: "Knowledge Base", icon: FileSearch },
  { title: "Enterprise RAG", icon: Network },
  { title: "AI Agents", icon: BrainCircuit },
  { title: "Data Assets", icon: Banknote },
  { title: "Business Value", icon: Scale },
];

const capabilities = [
  {
    title: "Data Inventory",
    icon: ClipboardList,
    description:
      "Identify and classify enterprise data across departments, repositories and historical systems, creating a clear map of what can be preserved, governed, retrieved and converted into AI-ready assets.",
  },
  {
    title: "Metadata Governance",
    icon: Database,
    description:
      "Attach structured metadata, ownership, permissions, source lineage and lifecycle rules to every dataset so cold data becomes accountable, searchable and audit-ready.",
  },
  {
    title: "AI-ready Knowledge Assets",
    icon: Sparkles,
    description:
      "Convert documents, records, images and media into searchable enterprise knowledge through parsing, OCR, enrichment, indexing and governed knowledge-base workflows.",
  },
  {
    title: "Secure Retrieval",
    icon: Search,
    description:
      "Enable controlled access through hybrid search, vector retrieval and permission-aware RAG so teams and agents can retrieve useful context without breaking security boundaries.",
  },
  {
    title: "Asset Valuation",
    icon: Scale,
    description:
      "Track usage, reuse, knowledge demand and business impact signals to support future data valuation, management reporting and internal asset portfolio planning.",
  },
  {
    title: "Lifecycle Management",
    icon: Workflow,
    description:
      "Manage data from collection to archive, activation, reuse, compliance and future valuation through one lifecycle connected to Spark knowledge infrastructure for the AI era.",
  },
];

const assetLayers = [
  {
    title: "Raw Data Layer",
    icon: Archive,
    description: "Enterprise archives, documents, images, videos, records and historical exports are preserved as the raw material for future AI value.",
  },
  {
    title: "Metadata Layer",
    icon: Database,
    description: "Ownership, source, access policy, quality, retention period and lineage make data governable, searchable and auditable.",
  },
  {
    title: "Knowledge Layer",
    icon: FileSearch,
    description: "Parsed and indexed content becomes reusable enterprise knowledge for employees, applications and domain-specific RAG.",
  },
  {
    title: "AI Service Layer",
    icon: BrainCircuit,
    description: "Enterprise RAG and AI agents retrieve trusted context from governed knowledge assets to support private AI workflows.",
  },
  {
    title: "Asset Value Layer",
    icon: Banknote,
    description: "Usage, reuse, business impact and future valuation signals reveal where enterprise data creates measurable value.",
  },
];

const scenarios = [
  { title: "Government Archives", icon: Landmark },
  { title: "Healthcare Records", icon: HeartPulse },
  { title: "Financial Compliance", icon: Building2 },
  { title: "Manufacturing Knowledge", icon: Factory },
  { title: "Education Resources", icon: GraduationCap },
  { title: "Media Archives", icon: Image },
];

const governance = [
  { title: "Data Ownership", icon: Fingerprint, description: "Clarify source, owner, responsible team and approved usage for every important dataset." },
  { title: "Access Control", icon: KeyRound, description: "Apply role, department and project permissions across retrieval, RAG and AI agent workflows." },
  { title: "Audit Trail", icon: FileSearch, description: "Track retrieval, source references, knowledge usage and model-facing interactions." },
  { title: "Compliance-ready Preservation", icon: BadgeCheck, description: "Preserve records with retention policies, immutable storage options and governance evidence." },
];

const whySpark = [
  { title: "Cold Data Infrastructure", icon: Archive, description: "Built on PB-scale preservation and lifecycle management for long-retained enterprise data." },
  { title: "Enterprise RAG Integration", icon: Network, description: "Connect governed assets to retrieval, vector search and trusted enterprise AI answers." },
  { title: "Knowledge Archive Long-term Archive", icon: FileArchive, description: "Preserve critical records and AI history with durable, low-power cold archive options." },
  { title: "AI Agent Enablement", icon: BrainCircuit, description: "Enable agents to act on trusted, permission-aware knowledge assets and workflows." },
];

const comparison = [
  ["Primary role", "Stores files and archives", "Turns cold data into governed, searchable AI assets"],
  ["Metadata", "Limited file-level metadata", "Ownership, lineage, permissions, retention and value signals"],
  ["AI readiness", "Requires separate processing", "Built-in parsing, indexing, RAG and AI agent activation"],
  ["Governance", "Storage policy focused", "Access control, audit trails, lifecycle and compliance workflows"],
  ["Business value", "Cost center", "Reusable knowledge asset portfolio with valuation potential"],
];

const businessModel = [
  { title: "Hardware", icon: Server, description: "Edge appliances, storage nodes and enterprise cold data infrastructure." },
  { title: "Enterprise Software", icon: Layers3, description: "Data inventory, governance, metadata, lifecycle and asset management software." },
  { title: "RAG Platform", icon: FileSearch, description: "Private enterprise retrieval, vector search and trusted AI knowledge services." },
  { title: "AI Agent", icon: Cpu, description: "Domain agents that act on governed knowledge assets and enterprise workflows." },
  { title: "Managed Service", icon: ShieldCheck, description: "Deployment, operation, data onboarding and long-term optimization services." },
];

function HorizontalValueChain() {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-5 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl">
      <div className="overflow-x-auto">
        <div className="grid min-w-[1120px] grid-cols-7 items-center gap-3">
          {valueChain.map((item, index) => (
            <div key={item.title} className="relative">
              <div className="rounded-[22px] border border-sky-100 bg-white/76 p-4 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
                <div className="mx-auto flex size-11 items-center justify-center rounded-[16px] bg-sky-50 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-semibold leading-5 text-foreground"><Copy>{item.title}</Copy></p>
              </div>
              {index < valueChain.length - 1 ? <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-semibold text-primary xl:block">→</div> : null}
            </div>
          ))}
        </div>
      </div>
    </AnimatedBlock>
  );
}

function EnterpriseArchitectureSvg() {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-4 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl sm:p-6">
      <LocalizedSvg viewBox="0 0 980 560" role="img" ariaEn="AI Knowledge Infrastructure enterprise architecture" ariaZh="AI 知识基础设施企业架构" className="h-auto w-full">
        <defs>
          <linearGradient id="asset-arch-line" x1="0" x2="1">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="980" height="560" rx="30" fill="#f8fbff" />
        <g opacity="0.45" stroke="#bfdbfe" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => <path key={`h-${i}`} d={`M46 ${62 + i * 40}H934`} />)}
          {Array.from({ length: 12 }).map((_, i) => <path key={`v-${i}`} d="M70 42V518" transform={`translate(${i * 76} 0)`} />)}
        </g>
        {[
          ["Cold Data Sources", 70, 80, 210, 76],
          ["Metadata & Governance", 385, 80, 210, 76],
          ["Knowledge Assets", 700, 80, 210, 76],
          ["Knowledge Archive", 70, 270, 210, 76],
          ["Enterprise RAG", 385, 270, 210, 76],
          ["AI Agents", 700, 270, 210, 76],
          ["Asset Portfolio", 280, 420, 420, 70],
        ].map(([label, x, y, w, h]) => (
          <g key={label as string}>
            <rect x={Number(x)} y={Number(y)} width={Number(w)} height={Number(h)} rx="20" fill="#ffffff" stroke="#bfdbfe" />
            <LocalizedSvgText en={label as string} zh={zh[label as string] ?? (label as string)} x={Number(x) + Number(w) / 2} y={Number(y) + Number(h) / 2 + 7} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="700" fill="#0f172a" />
          </g>
        ))}
        <path d="M280 118H385M595 118H700M175 156V270M490 156V270M805 156V270M280 308H385M595 308H700M490 346V420M175 346C250 418 285 430 330 455M805 346C730 418 695 430 650 455" fill="none" stroke="url(#asset-arch-line)" strokeWidth="4" strokeLinecap="round" />
      </LocalizedSvg>
    </AnimatedBlock>
  );
}

function AssetModelDiagram() {
  return (
    <AnimatedBlock className="mt-10 rounded-[28px] border border-white/75 bg-white/60 p-5 shadow-[0_24px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
      <div className="grid gap-4">
        {assetLayers.map((layer, index) => (
          <div key={layer.title} className="rounded-[22px] border border-sky-100 bg-white/74 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_rgba(37,99,235,0.12)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[18px] bg-primary text-white">
                <layer.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en={`Layer ${index + 1}`} zh={`第 ${index + 1} 层`} /></p>
                <h3 className="mt-1 text-xl font-semibold text-foreground"><Copy>{layer.title}</Copy></h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground"><Copy>{layer.description}</Copy></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBlock>
  );
}

export default function AiDataAssetBankPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dbeafe_0%,transparent_40%),linear-gradient(180deg,#f8fbff_0%,#edf7ff_54%,#ffffff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-50 [mask-image:linear-gradient(180deg,black_0%,black_60%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-7rem] h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-2xl" />
        <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-[20px] border border-sky-200/80 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-xl">
                <LocalizedText en="Data Asset Infrastructure" zh="数据资产基础设施" />
              </p>
              <h1 className="mt-7 max-w-5xl text-[2.7rem] font-semibold leading-[1.03] tracking-normal text-foreground sm:text-[4.15rem] lg:text-[5rem]">
                <LocalizedText en="AI Knowledge Infrastructure" zh="AI 知识基础设施" />
              </h1>
              <p className="mt-5 max-w-[760px] text-xl font-semibold leading-[1.5] text-primary sm:text-2xl">
                <LocalizedText en="Transform cold enterprise data into governed, AI-ready and monetizable knowledge assets." zh="将企业冷数据转化为受治理、AI 就绪且可创造价值的知识资产。" />
              </p>
              <p className="mt-5 max-w-[760px] text-[16px] leading-[1.8] text-muted-foreground sm:text-[18px]">
                <LocalizedText en="Spark AI converts dormant archives, records and media into searchable knowledge, AI services and reusable asset portfolios for enterprise value creation." zh="Spark AI 将沉睡的档案、记录与媒体转化为可搜索的知识、AI 服务和可复用的资产组合，为企业持续创造价值。" />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px] shadow-[0_16px_45px_rgba(37,99,235,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.28)]">
                  <Link href="/contact">
                    <LocalizedText en="Book Demo" zh="预约演示" />
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] border-sky-100 bg-white/72 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]">
                  <a href="#architecture"><LocalizedText en="Explore Architecture" zh="探索架构" /></a>
                </Button>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.1} className="rounded-[28px] border border-white/75 bg-white/58 p-5 shadow-[0_30px_100px_rgba(37,99,235,0.16)] backdrop-blur-2xl">
              <div className="grid gap-4">
                {["Cold Data", "Knowledge Assets", "Enterprise RAG", "AI Agents", "Business Value"].map((item, index) => (
                  <div key={item} className="rounded-[20px] border border-sky-100 bg-white/76 p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-[14px] bg-primary text-sm font-semibold text-white">{index + 1}</span>
                      <span className="text-lg font-semibold text-foreground"><Copy>{item}</Copy></span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedBlock>
          </div>

          <AnimatedStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {kpis.map((item) => (
              <div key={item.value} className="rounded-[22px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_55px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-[0_28px_90px_rgba(37,99,235,0.16)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <p className="mt-4 text-2xl font-semibold leading-tight text-foreground"><Copy>{item.value}</Copy></p>
                <p className="mt-2 text-xs font-medium leading-5 text-muted-foreground"><Copy>{item.label}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[900px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Investor Thesis" zh="投资逻辑" /></p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText en="Cold data is becoming the next enterprise AI asset class." zh="冷数据正在成为下一类企业 AI 资产。" />
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
              <LocalizedText en="Most enterprise data is trapped in long-term archives, compliance systems, file repositories and media stores. AI Knowledge Infrastructure adds the missing business layer: governance, metadata, retrieval, RAG, AI agent enablement and asset value tracking." zh="大量企业数据沉睡在长期档案、合规系统、文件存储库与媒体资源库中。AI 知识基础设施补齐关键业务层：治理、元数据、检索、RAG、AI 智能体赋能与资产价值追踪。" />
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="architecture" className="relative overflow-hidden bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <div className="absolute inset-0 spark-grid opacity-35" />
        <Container className="relative z-10">
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Value Chain" zh="价值链" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="From cold data to enterprise value" zh="从冷数据到企业价值" /></h2>
          </AnimatedBlock>
          <HorizontalValueChain />
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Enterprise Architecture" zh="企业架构" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="A governed architecture for AI-ready data assets" zh="面向 AI 就绪数据资产的治理型架构" /></h2>
          </AnimatedBlock>
          <EnterpriseArchitectureSvg />
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Core Capabilities" zh="核心能力" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Built for data governance, AI activation and value creation" zh="为数据治理、AI 激活与价值创造而构建" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group rounded-[24px] border border-white/75 bg-white/62 p-6 shadow-[0_18px_60px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]">
                <div className="flex size-12 items-center justify-center rounded-[18px] border border-sky-100 bg-sky-50/85 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground"><Copy>{item.title}</Copy></h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground"><Copy>{item.description}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Enterprise Data Asset Model" zh="企业数据资产模型" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="A layered model for AI-ready data assets" zh="面向 AI 就绪数据资产的分层模型" /></h2>
          </AnimatedBlock>
          <AssetModelDiagram />
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Comparison" zh="对比" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Traditional Storage vs Knowledge Infrastructure" zh="传统存储与知识基础设施" /></h2>
          </AnimatedBlock>
          <AnimatedBlock className="mt-10 overflow-hidden rounded-[24px] border border-white/75 bg-white/70 shadow-[0_24px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-sky-50 text-foreground">
                  <tr>
                    <th className="px-5 py-4 font-semibold"><LocalizedText en="Category" zh="类别" /></th>
                    <th className="px-5 py-4 font-semibold"><LocalizedText en="Traditional Storage" zh="传统存储" /></th>
                    <th className="px-5 py-4 font-semibold"><LocalizedText en="Knowledge Infrastructure" zh="知识基础设施" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100">
                  {comparison.map(([category, storage, bank]) => (
                    <tr key={category} className="transition hover:bg-sky-50/70">
                      <td className="px-5 py-4 font-semibold text-foreground"><Copy>{category}</Copy></td>
                      <td className="px-5 py-4 text-muted-foreground"><Copy>{storage}</Copy></td>
                      <td className="px-5 py-4 text-primary"><Copy>{bank}</Copy></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Business Model" zh="商业模式" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Multiple revenue layers from one data asset platform" zh="一个数据资产平台，多层收入模式" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {businessModel.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground"><Copy>{item.description}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Industry Scenarios" zh="行业场景" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Where cold data becomes enterprise value" zh="让冷数据转化为企业价值" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {scenarios.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-6 text-center shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="mx-auto size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Governance & Security" zh="治理与安全" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Controls for trusted data assetization" zh="可信数据资产化的管控体系" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {governance.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-white p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground"><Copy>{item.description}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Why Spark AI?" zh="为何选择 Spark AI？" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Infrastructure for the data asset era" zh="面向数据资产时代的基础设施" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whySpark.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-6 shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground"><Copy>{item.description}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="rounded-[28px] border border-sky-100 bg-primary p-8 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] sm:p-10">
            <Banknote className="mx-auto size-8 text-blue-100" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              <LocalizedText en="Turn your enterprise data into AI-ready assets." zh="将企业数据转化为 AI 就绪资产。" />
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px] bg-white text-primary hover:bg-blue-50">
                <Link href="/contact"><LocalizedText en="Book Demo" zh="预约演示" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <Link href="/contact"><LocalizedText en="Contact Sales" zh="联系销售" /></Link>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
