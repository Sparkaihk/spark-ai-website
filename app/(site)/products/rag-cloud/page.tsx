import type { Metadata } from "next";
import {
  Bot,
  BrainCircuit,
  CloudCog,
  Database,
  FileText,
  Gavel,
  Hospital,
  MessageCircleQuestion,
  Network,
  Search,
  ServerCog,
  Workflow,
} from "lucide-react";

import { ProductDetailPage, type ProductDetailContent } from "@/components/sections/product-detail-page";

export const metadata: Metadata = {
  title: "Spark RAG Cloud",
  description:
    "Spark RAG Cloud enterprise knowledge platform for governed retrieval, private deployment, multi-model access, and AI search.",
};

const content: ProductDetailContent = {
  eyebrow: "Spark RAG Cloud",
  title: "Spark RAG Cloud",
  subtitle: "Enterprise knowledge activation layer / 企业知识激活层",
  description:
    "Spark RAG Cloud transforms enterprise documents, records, policies, and domain knowledge into governed AI context for search, copilots, agents, and decision workflows. 将企业文档、业务知识和权限治理连接为可检索、可追溯、可私有化部署的AI知识平台。",
  cta: "申请RAG Cloud演示",
  visualTitle: "Knowledge Activation",
  visualDescription:
    "A governed retrieval layer that connects documents, vector databases, models, and AI answers.",
  visualIcon: Search,
  features: [
    {
      title: "企业知识库 / Knowledge Base",
      description: "整合文档、制度、案例、记录与专家知识，形成可检索的企业知识资产。",
      icon: Database,
    },
    {
      title: "私有化部署 / Private Deployment",
      description: "支持本地、私有云与混合云部署，满足数据安全、权限与合规要求。",
      icon: ServerCog,
    },
    {
      title: "多模型接入 / Multi-Model Access",
      description: "对接主流大模型与私有模型，按场景调度最适合的AI能力。",
      icon: Network,
    },
    {
      title: "企业AI搜索 / AI Search",
      description: "以权限治理、语义检索与答案生成提升企业知识查找效率。",
      icon: Search,
    },
  ],
  useCases: [
    {
      title: "企业客服 / Customer Support",
      description: "将产品文档、服务记录和FAQ转化为可控的AI答案能力。",
      icon: MessageCircleQuestion,
    },
    {
      title: "法律顾问 / Legal Advisory",
      description: "支持合同、法规、案例与内部制度的权限化检索与问答。",
      icon: Gavel,
    },
    {
      title: "医疗知识库 / Healthcare Knowledge",
      description: "连接指南、病例知识、影像报告与专科知识管理流程。",
      icon: Hospital,
    },
    {
      title: "制造业知识管理 / Manufacturing KM",
      description: "激活工艺文件、维修记录、质量标准与现场经验。",
      icon: Workflow,
    },
  ],
  architecture: [
    {
      title: "Documents",
      description: "Ingest enterprise files, policies, records, and domain content.",
      icon: FileText,
    },
    {
      title: "Vector Database",
      description: "Index governed knowledge for semantic retrieval and permissions.",
      icon: Database,
    },
    {
      title: "LLM Orchestration",
      description: "Route queries to private or external models with controls.",
      icon: Bot,
    },
    {
      title: "AI Answer",
      description: "Generate traceable, permission-aware enterprise answers.",
      icon: BrainCircuit,
    },
  ],
  finalTitle: "Turn enterprise knowledge into trusted AI answers.",
  finalDescription:
    "与Spark AI讨论企业知识库、私有化部署、多模型接入和AI搜索场景。",
};

export default function RagCloudPage() {
  return <ProductDetailPage content={content} />;
}
