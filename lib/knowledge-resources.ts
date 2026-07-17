import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, FileText, Landmark, Network, ShieldCheck } from "lucide-react";

type LocalizedCopy = Readonly<{
  en: string;
  zh: string;
}>;

export type KnowledgeResource = Readonly<{
  id: string;
  title: LocalizedCopy;
  description: LocalizedCopy;
  cta: LocalizedCopy;
  href: string;
  access: "public" | "restricted";
  icon: LucideIcon;
}>;

export const knowledgeResources = [
  {
    id: "principles",
    title: { en: "Principles", zh: "核心原则" },
    description: {
      en: "Explore the principles that guide Spark AI in building trustworthy, long-lasting, and responsible knowledge infrastructure for the AI era.",
      zh: "了解 Spark AI 建设 AI 时代知识基础设施所遵循的核心原则，包括长期保存、可信治理、资料主权、系统韧性与责任设计。",
    },
    cta: { en: "Explore Principles", zh: "查看核心原则" },
    href: "/principles",
    access: "public",
    icon: Landmark,
  },
  {
    id: "white-papers",
    title: { en: "White Papers", zh: "白皮书" },
    description: {
      en: "Read in-depth research and technical papers on knowledge infrastructure, intelligent storage, enterprise AI memory, data governance, and long-term preservation.",
      zh: "阅读 Spark AI 关于知识基础设施、智能存储、企业 AI 记忆、资料治理及长期保存的深度研究与技术白皮书。",
    },
    cta: { en: "View White Papers", zh: "查看白皮书" },
    href: "/knowledge/white-papers",
    access: "public",
    icon: BookOpen,
  },
  {
    id: "product-documents",
    title: { en: "Product Documents", zh: "产品文件" },
    description: {
      en: "Access product briefs, technical specifications, deployment guides, solution overviews, and operating documentation for Spark AI products.",
      zh: "查阅 Spark AI 产品简介、技术规格、部署指南、方案概览及系统运行文件。",
    },
    cta: { en: "View Documents", zh: "查看产品文件" },
    href: "/knowledge/product-documents",
    access: "restricted",
    icon: FileText,
  },
  {
    id: "architecture",
    title: { en: "Architecture Notes", zh: "架构笔记" },
    description: {
      en: "Explore technical notes on system architecture, intelligent data tiering, knowledge retrieval, storage integration, resilience, and reference deployment patterns.",
      zh: "深入了解系统架构、智能资料分层、知识检索、存储整合、系统韧性及参考部署模式。",
    },
    cta: { en: "Explore Architecture", zh: "查看技术架构" },
    href: "/knowledge/architecture",
    access: "restricted",
    icon: Network,
  },
  {
    id: "research",
    title: { en: "Industry Research", zh: "行业研究" },
    description: {
      en: "Research and analysis on data preservation, knowledge management, AI adoption, infrastructure economics, and industry-specific use cases.",
      zh: "阅读有关资料保存、知识管理、AI 应用、基础设施经济性及行业场景的研究与分析。",
    },
    cta: { en: "View Research", zh: "查看研究报告" },
    href: "/knowledge/research",
    access: "public",
    icon: Boxes,
  },
  {
    id: "security-compliance",
    title: { en: "Security & Compliance", zh: "安全与合规" },
    description: {
      en: "Review Spark AI guidance on data sovereignty, access control, auditability, retention, resilience, privacy, and regulatory readiness.",
      zh: "了解 Spark AI 在资料主权、存取控制、审计追踪、资料留存、系统韧性、隐私保护及监管准备方面的方法。",
    },
    cta: { en: "View Guidance", zh: "查看治理指南" },
    href: "/knowledge/security-compliance",
    access: "public",
    icon: ShieldCheck,
  },
] as const satisfies readonly KnowledgeResource[];

export type KnowledgeSectionSlug = Exclude<(typeof knowledgeResources)[number]["id"], "principles">;

type KnowledgeSection = Readonly<{
  introduction: LocalizedCopy;
  topics: readonly LocalizedCopy[];
}>;

export const knowledgeSections = {
  "white-papers": {
    introduction: {
      en: "A growing collection of Spark AI research on the foundations, engineering choices, and governance models behind durable enterprise knowledge.",
      zh: "汇集 Spark AI 围绕持久企业知识所开展的基础研究、工程选型与治理模式分析。",
    },
    topics: [
      { en: "Knowledge infrastructure foundations", zh: "知识基础设施基础" },
      { en: "Enterprise AI memory and RAG", zh: "企业 AI 记忆与 RAG" },
      { en: "Long-term preservation and intelligent storage", zh: "长期保存与智能存储" },
    ],
  },
  "product-documents": {
    introduction: {
      en: "The product documentation index for Spark AI Appliance and related knowledge infrastructure components. Public briefs are complemented by controlled technical materials.",
      zh: "集中索引 Spark AI 一体机及相关知识基础设施组件的产品文件；公开产品简介之外，详细技术资料按权限提供。",
    },
    topics: [
      { en: "Product briefs and solution overviews", zh: "产品简介与方案概览" },
      { en: "Technical specifications", zh: "技术规格" },
      { en: "Deployment and operations guides", zh: "部署与运行指南" },
    ],
  },
  architecture: {
    introduction: {
      en: "Reference notes for designing resilient knowledge infrastructure across computing, storage, retrieval, governance, and long-term archival layers.",
      zh: "面向算力、存储、检索、治理与长期归档层，提供建设高韧性知识基础设施的参考说明。",
    },
    topics: [
      { en: "Intelligent data tiering", zh: "智能资料分层" },
      { en: "Knowledge retrieval and storage integration", zh: "知识检索与存储整合" },
      { en: "Resilience and reference deployments", zh: "系统韧性与参考部署" },
    ],
  },
  research: {
    introduction: {
      en: "Research tracking how institutions preserve data, govern knowledge, adopt AI, and evaluate infrastructure economics across real industry settings.",
      zh: "研究机构如何在真实行业场景中保存资料、治理知识、采用 AI，并评估基础设施的长期经济性。",
    },
    topics: [
      { en: "Infrastructure economics", zh: "基础设施经济性" },
      { en: "Industry knowledge management", zh: "行业知识管理" },
      { en: "AI adoption and historical data reuse", zh: "AI 应用与历史资料再利用" },
    ],
  },
  "security-compliance": {
    introduction: {
      en: "Practical guidance for making knowledge infrastructure sovereign, auditable, resilient, privacy-aware, and ready for institutional oversight.",
      zh: "提供可落地的治理方法，帮助知识基础设施满足资料主权、可审计、韧性、隐私保护与机构监管要求。",
    },
    topics: [
      { en: "Data sovereignty and access control", zh: "资料主权与存取控制" },
      { en: "Auditability, retention, and privacy", zh: "审计追踪、资料留存与隐私" },
      { en: "Resilience and regulatory readiness", zh: "系统韧性与监管准备" },
    ],
  },
} as const satisfies Record<KnowledgeSectionSlug, KnowledgeSection>;

export const knowledgeSectionSlugs = Object.keys(knowledgeSections) as KnowledgeSectionSlug[];

export function isKnowledgeSectionSlug(value: string): value is KnowledgeSectionSlug {
  return Object.prototype.hasOwnProperty.call(knowledgeSections, value);
}

export function getKnowledgeResource(slug: KnowledgeSectionSlug) {
  return knowledgeResources.find((resource) => resource.id === slug);
}
