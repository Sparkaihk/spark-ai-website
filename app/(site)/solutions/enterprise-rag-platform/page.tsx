import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  BookOpen,
  Boxes,
  BrainCircuit,
  Building2,
  Database,
  FileDown,
  FileSearch,
  FileText,
  GraduationCap,
  HeartPulse,
  Image,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  ScanText,
  Search,
  ShieldCheck,
  Video,
  Workflow,
  Wrench,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";
import { LocalizedSvgText } from "@/components/site/localized-svg-text";
import { LocalizedSvg } from "@/components/site/localized-svg";
import { LocalizedText } from "@/components/site/localized-text";

const zh: Record<string, string> = {
  "Document Sources": "文档来源", "OCR / Parsing": "OCR / 解析", "Metadata Extraction": "元数据提取", "Vector Database": "向量数据库", "Hybrid Search": "混合搜索", "Large Language Model": "大语言模型", "Enterprise AI Assistant": "企业 AI 助手",
  "Upload Documents": "上传文档", "Automatic Parsing": "自动解析", "Vector Indexing": "向量索引", "Knowledge Base": "知识库", "AI Question Answering": "AI 问答", "Continuous Learning": "持续学习",
  "Office Documents": "办公文档", Images: "图像", "CAD Drawings": "CAD 图纸", Audio: "音频", Video: "视频",
  "Vector Retrieval": "向量检索", "Knowledge Graph": "知识图谱", "Role-based Access": "基于角色的访问控制", "Private Deployment": "私有化部署", "Multi-modal AI": "多模态 AI",
  "Combine full-text search, semantic search and metadata filters to retrieve accurate context across large enterprise repositories.": "结合全文搜索、语义搜索与元数据筛选，从大规模企业存储库中检索准确上下文。",
  "Index documents, images and extracted content as embeddings so enterprise users can search by meaning, not only keywords.": "将文档、图像与提取内容索引为向量，使企业用户不仅能按关键词，还能按语义搜索。",
  "Connect entities, topics, timelines and document relationships to support richer enterprise reasoning and source discovery.": "连接实体、主题、时间线与文档关系，支持更丰富的企业推理与来源发现。",
  "Enforce user, department and document-level permissions so AI answers follow the same rules as enterprise data access.": "执行用户、部门与文档级权限，让 AI 回答遵循与企业数据访问相同的规则。",
  "Run RAG services inside enterprise networks, data centers or private cloud environments without exposing sensitive knowledge.": "在企业网络、数据中心或私有云环境中运行 RAG 服务，避免敏感知识外泄。",
  "Process scanned files, images, audio, video and structured documents into a unified AI knowledge experience.": "将扫描文件、图像、音频、视频与结构化文档处理为统一的 AI 知识体验。",
  Government: "政府", Healthcare: "医疗", Finance: "金融", Manufacturing: "制造", Legal: "法律", Education: "教育",
  "Private AI": "私有 AI", "Enterprise-grade Security": "企业级安全", "Cold Data Integration": "冷数据集成", "Scalable Architecture": "可扩展架构",
  "Deploy enterprise AI assistants without sending sensitive documents or retrieval context to uncontrolled internet services.": "部署企业 AI 助手，无需将敏感文档或检索上下文发送至不受控的互联网服务。",
  "Keep permissions, audit trails, source references and governance rules attached to every knowledge workflow.": "让权限、审计追踪、来源引用与治理规则贯穿每一条知识工作流。",
  "Activate long-retained archives, records and historical files directly from Spark Knowledge Infrastructure for the AI Era.": "直接从 Spark AI 时代知识基础设施中激活长期保留的档案、记录与历史文件。",
  "Scale from departmental knowledge bases to PB-scale enterprise repositories and multi-site AI deployments.": "从部门级知识库扩展至 PB 级企业存储库与多站点 AI 部署。",
  "Enterprise RAG Architecture": "企业级 RAG 架构",
};

function Copy({ children }: { children: string }) {
  return <LocalizedText en={children} zh={zh[children] ?? children} />;
}

export const metadata: Metadata = {
  title: "Enterprise RAG Platform | Spark AI",
  description:
    "Spark AI Enterprise RAG Platform transforms enterprise documents into trusted AI knowledge with secure Retrieval-Augmented Generation.",
  alternates: { canonical: "/solutions/enterprise-rag-platform" },
};

const architecture = [
  { label: "Document Sources", short: "DOC", width: 330 },
  { label: "OCR / Parsing", short: "OCR", width: 300 },
  { label: "Metadata Extraction", short: "META", width: 360 },
  { label: "Vector Database", short: "VEC", width: 330 },
  { label: "Hybrid Search", short: "SEARCH", width: 320 },
  { label: "Large Language Model", short: "LLM", width: 360 },
  { label: "Enterprise AI Assistant", short: "AI", width: 390 },
];

const workflow = [
  "Upload Documents",
  "Automatic Parsing",
  "Vector Indexing",
  "Knowledge Base",
  "AI Question Answering",
  "Continuous Learning",
];

const sources = [
  { title: "PDF", icon: FileText },
  { title: "Office Documents", icon: BookOpen },
  { title: "Images", icon: Image },
  { title: "CAD Drawings", icon: Boxes },
  { title: "Audio", icon: AudioLines },
  { title: "Video", icon: Video },
];

const capabilities = [
  {
    title: "Hybrid Search",
    icon: Search,
    description: "Combine full-text search, semantic search and metadata filters to retrieve accurate context across large enterprise repositories.",
  },
  {
    title: "Vector Retrieval",
    icon: Database,
    description: "Index documents, images and extracted content as embeddings so enterprise users can search by meaning, not only keywords.",
  },
  {
    title: "Knowledge Graph",
    icon: Network,
    description: "Connect entities, topics, timelines and document relationships to support richer enterprise reasoning and source discovery.",
  },
  {
    title: "Role-based Access",
    icon: LockKeyhole,
    description: "Enforce user, department and document-level permissions so AI answers follow the same rules as enterprise data access.",
  },
  {
    title: "Private Deployment",
    icon: ShieldCheck,
    description: "Run RAG services inside enterprise networks, data centers or private cloud environments without exposing sensitive knowledge.",
  },
  {
    title: "Multi-modal AI",
    icon: BrainCircuit,
    description: "Process scanned files, images, audio, video and structured documents into a unified AI knowledge experience.",
  },
];

const industries = [
  { title: "Government", icon: Landmark },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Building2 },
  { title: "Manufacturing", icon: Wrench },
  { title: "Legal", icon: BadgeCheck },
  { title: "Education", icon: GraduationCap },
];

const reasons = [
  {
    title: "Private AI",
    icon: LockKeyhole,
    description: "Deploy enterprise AI assistants without sending sensitive documents or retrieval context to uncontrolled internet services.",
  },
  {
    title: "Enterprise-grade Security",
    icon: ShieldCheck,
    description: "Keep permissions, audit trails, source references and governance rules attached to every knowledge workflow.",
  },
  {
    title: "Cold Data Integration",
    icon: Layers3,
    description: "Activate long-retained archives, records and historical files directly from Spark Knowledge Infrastructure for the AI Era.",
  },
  {
    title: "Scalable Architecture",
    icon: Workflow,
    description: "Scale from departmental knowledge bases to PB-scale enterprise repositories and multi-site AI deployments.",
  },
];

function VerticalFlowDiagram({
  items,
  title,
  ariaLabel,
}: {
  items: { label: string; short: string; width: number }[];
  title: string;
  ariaLabel: string;
}) {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-4 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl sm:p-6">
      <LocalizedSvg viewBox="0 0 900 860" role="img" ariaEn={ariaLabel} ariaZh="企业级 RAG 架构图" className="h-auto w-full">
        <defs>
          <linearGradient id="rag-panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.74" />
          </linearGradient>
          <linearGradient id="rag-line" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <filter id="rag-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#2563eb" floodOpacity="0.14" />
          </filter>
        </defs>
        <rect x="1" y="1" width="898" height="858" rx="32" fill="url(#rag-panel)" stroke="#dbeafe" />
        <LocalizedSvgText en={title} zh={zh[title] ?? title} x="450" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="25" fontWeight="700" fill="#0f172a" />
        <g opacity="0.42" stroke="#bfdbfe" strokeWidth="1">
          {Array.from({ length: 13 }).map((_, index) => (
            <path key={`h-${index}`} d={`M70 ${96 + index * 54}H830`} />
          ))}
          {Array.from({ length: 11 }).map((_, index) => (
            <path key={`v-${index}`} d="M90 82V808" transform={`translate(${index * 72} 0)`} />
          ))}
        </g>
        <path d="M450 152V742" stroke="url(#rag-line)" strokeWidth="5" strokeLinecap="round" strokeDasharray="10 12" />
        {items.slice(0, -1).map((_, index) => {
          const y = 164 + index * 94;
          return <path key={y} d={`M436 ${y}l14 18 14-18`} fill="#2563eb" />;
        })}
        {items.map((item, index) => {
          const y = 92 + index * 94;
          const x = 450 - item.width / 2;
          const active = index === 0 || index === items.length - 1;
          return (
            <g key={item.label} filter="url(#rag-shadow)">
              <rect x={x} y={y} width={item.width} height="64" rx="21" fill="#ffffff" stroke={active ? "#93c5fd" : "#dbeafe"} />
              <rect x={x + 18} y={y + 15} width="40" height="34" rx="12" fill={active ? "#2563eb" : "#eff6ff"} />
              <text x={x + 38} y={y + 37} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize={item.short.length > 4 ? "9" : "12"} fontWeight="700" fill={active ? "#ffffff" : "#2563eb"}>
                {item.short}
              </text>
              <LocalizedSvgText en={item.label} zh={zh[item.label] ?? item.label} x={x + 76} y={y + 40} fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#0f172a" />
            </g>
          );
        })}
      </LocalizedSvg>
    </AnimatedBlock>
  );
}

function WorkflowDiagram() {
  return (
    <AnimatedBlock className="mt-10 rounded-[28px] border border-white/75 bg-white/60 p-5 shadow-[0_24px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {workflow.map((step, index) => (
          <div key={step} className="relative rounded-[20px] border border-sky-100 bg-white/72 p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white">
            <span className="mx-auto flex size-10 items-center justify-center rounded-[14px] bg-primary text-sm font-semibold text-white">{index + 1}</span>
            <h3 className="mt-4 text-sm font-semibold leading-6 text-foreground"><Copy>{step}</Copy></h3>
          </div>
        ))}
      </div>
    </AnimatedBlock>
  );
}

export default function EnterpriseRagPlatformPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dbeafe_0%,transparent_40%),linear-gradient(180deg,#f8fbff_0%,#edf7ff_54%,#ffffff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-50 [mask-image:linear-gradient(180deg,black_0%,black_60%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-7rem] h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-2xl" />
        <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <AnimatedBlock>
              <p className="mx-auto inline-flex rounded-[20px] border border-sky-200/80 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-xl">
                <LocalizedText en="Solution" zh="解决方案" />
              </p>
              <h1 className="mx-auto mt-7 max-w-5xl text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[4.1rem] lg:text-[5rem]">
                <LocalizedText en="Enterprise RAG Platform" zh="企业级 RAG 平台" />
              </h1>
              <p className="mx-auto mt-5 max-w-[780px] text-xl font-semibold leading-[1.5] text-primary sm:text-2xl">
                <LocalizedText en="Transform enterprise documents into trusted AI knowledge with secure Retrieval-Augmented Generation." zh="通过安全的检索增强生成，将企业文档转化为可信 AI 知识。" />
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px] shadow-[0_16px_45px_rgba(37,99,235,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.28)]">
                  <Link href="/contact">
                    <LocalizedText en="Book Demo" zh="预约演示" />
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] border-sky-100 bg-white/72 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]">
                  <a href="mailto:info@sparkai.hk?subject=Enterprise%20RAG%20Platform%20White%20Paper">
                    <LocalizedText en="Download White Paper" zh="下载白皮书" />
                    <FileDown aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[900px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="What is Enterprise RAG?" zh="什么是企业级 RAG？" /></p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText en="The AI knowledge layer on top of Spark Knowledge Infrastructure for the AI Era." zh="构建于 Spark AI 时代知识基础设施之上的 AI 知识层。" />
            </h2>
            <div className="mx-auto mt-6 grid max-w-[860px] gap-5 text-left text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
              <p>
                <LocalizedText en="Enterprise RAG combines enterprise knowledge, intelligent retrieval, vector search and large language models to deliver secure AI answers without exposing confidential data. It gives organizations a private AI layer that can understand historical documents, records, media and domain expertise." zh="企业级 RAG 融合企业知识、智能检索、向量搜索与大语言模型，在不暴露机密数据的前提下提供安全的 AI 回答。它为组织提供能够理解历史文档、记录、媒体与领域经验的私有 AI 层。" />
              </p>
              <p>
                <LocalizedText en="Unlike generic chatbots, Spark AI Enterprise RAG keeps answers grounded in governed source materials. Role-based access, metadata, audit trails and source references help enterprises produce trusted responses while protecting sensitive documents and internal knowledge." zh="不同于通用聊天机器人，Spark AI 企业级 RAG 确保回答基于受治理的源材料。基于角色的访问、元数据、审计追踪与来源引用，帮助企业在保护敏感文档和内部知识的同时生成可信回答。" />
              </p>
              <p>
                <LocalizedText en="The platform is built for secure deployment with no internet dependency, supporting private AI environments across government, healthcare, finance, manufacturing, legal and education use cases." zh="平台面向安全部署构建，无需依赖互联网，可支持政府、医疗、金融、制造、法律与教育等场景的私有 AI 环境。" />
              </p>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-spark-surface-1 py-16 sm:py-20">
        <div className="absolute inset-0 spark-grid opacity-35" />
        <Container className="relative z-10">
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Architecture Diagram" zh="架构图" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="From documents to enterprise AI assistants" zh="从文档到企业 AI 助手" /></h2>
          </AnimatedBlock>
          <VerticalFlowDiagram items={architecture} title="Enterprise RAG Architecture" ariaLabel="Enterprise RAG architecture diagram" />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Supported Data Sources" zh="支持的数据来源" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Connect the formats enterprises already use" zh="连接企业正在使用的各种格式" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sources.map((item) => (
              <div key={item.title} className="group rounded-[24px] border border-white/75 bg-white/60 p-6 text-center shadow-[0_18px_60px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_28px_80px_rgba(37,99,235,0.15)]">
                <div className="mx-auto flex size-12 items-center justify-center rounded-[18px] border border-sky-100 bg-sky-50/85 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Core Capabilities" zh="核心能力" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Secure retrieval for enterprise AI" zh="面向企业 AI 的安全检索" /></h2>
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

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Enterprise Workflow" zh="企业工作流" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="A complete knowledge activation workflow" zh="完整的知识激活工作流" /></h2>
          </AnimatedBlock>
          <WorkflowDiagram />
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Industry Applications" zh="行业应用" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Private knowledge AI across regulated sectors" zh="服务受监管行业的私有知识 AI" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-6 text-center shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="mx-auto size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"><LocalizedText en="Why Spark AI RAG?" zh="为何选择 Spark AI RAG？" /></p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText en="Built for private enterprise knowledge" zh="为企业私有知识而构建" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground"><Copy>{item.title}</Copy></h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground"><Copy>{item.description}</Copy></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="rounded-[28px] border border-white/70 bg-primary p-8 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] sm:p-10">
            <ScanText className="mx-auto size-8 text-blue-100" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              <LocalizedText en="Build a private AI knowledge layer on top of enterprise cold data." zh="在企业冷数据之上构建私有 AI 知识层。" />
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px] bg-white text-primary hover:bg-blue-50">
                <Link href="/contact"><LocalizedText en="Book Demo" zh="预约演示" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <a href="mailto:info@sparkai.hk?subject=Enterprise%20RAG%20Platform%20White%20Paper"><LocalizedText en="Download White Paper" zh="下载白皮书" /></a>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
