import { Archive, BrainCircuit, Cpu, Database, FileSearch, Landmark, Layers3, Network, ShieldCheck, Sparkles } from "lucide-react";

import type { InvestorShellProps } from "@/components/sections/investor-shell";

type PageContent = Omit<InvestorShellProps, "ctaTitle"> & { ctaTitle?: InvestorShellProps["ctaTitle"] };
const applianceName = "Spark AI Appliance™";

const baseCards = [
  { title: { zh: "长期知识保存", en: "Knowledge Preservation" }, body: { zh: "长期保存企业知识资产，为未来 AI 应用保留可靠基础。", en: "Preserve long-term enterprise knowledge for future AI use." }, icon: Archive },
  { title: { zh: "企业智能检索", en: "Enterprise Retrieval" }, body: { zh: "让档案与业务记录保持可检索、可追溯并受到统一治理。", en: "Make records searchable, attributable, and governed." }, icon: FileSearch },
  { title: { zh: "可信治理", en: "Trust Governance" }, body: { zh: "支持权限控制、审计、生命周期策略与数据完整性保护。", en: "Support access control, auditability, lifecycle policy, and data integrity." }, icon: ShieldCheck },
];

function page(title: { zh: string; en: string }, subtitle: { zh: string; en: string }, diagram: string[], icon = Sparkles, heroImage?: PageContent["heroImage"]): PageContent {
  return {
    eyebrow: { zh: "Spark AI", en: "Spark AI" },
    title,
    subtitle,
    diagram,
    heroImage,
    sections: [
      { eyebrow: { zh: "概览", en: "Overview" }, title, body: subtitle, cards: baseCards },
      {
        eyebrow: { zh: "核心价值", en: "Why It Matters" },
        title: { zh: "让 AI 拥有记忆，让未来建立在信任之上。", en: "Memory for AI. Trust for Tomorrow." },
        body: { zh: "知识基础设施连接数据、治理、智能检索与 AI 工作流，让长期知识资产持续创造价值。", en: "Knowledge Infrastructure for the AI Era connects data, governance, retrieval, and AI workflows." },
        cards: [
          { title: { zh: "AI 算力", en: "AI Compute" }, body: { zh: "支持本地推理、智能检索与企业知识工作流。", en: "Support local inference and knowledge workflows." }, icon: Cpu },
          { title: { zh: "知识层", en: "Knowledge Layer" }, body: { zh: "把长期保存的信息转化为可治理、可复用的知识资产。", en: "Transform retained information into governed knowledge." }, icon },
          { title: { zh: "可扩展架构", en: "Architecture" }, body: { zh: "支持从单台一体机扩展至企业级平台部署。", en: "Scale from appliance to platform deployment." }, icon: Network },
        ],
      },
    ],
    ctaTitle: { zh: "构建 AI 时代的知识基础设施", en: "Build Knowledge Infrastructure for the AI Era" },
  };
}

export const productPage = page(
  { zh: "Spark AI 一体机?", en: applianceName },
  { zh: "将 AI 算力、智能分层存储、企业智能检索、AI 智能体、长期归档与可信治理整合于统一平台。", en: `${applianceName} unifies AI compute, intelligent storage, enterprise retrieval, AI Agents, long-term archival, and trust governance.` },
  ["Compute", "Storage", "Retrieval", "Agents", "Archive", "Trust"],
  BrainCircuit,
);

export const platformPage = page(
  { zh: "构建 AI 时代的知识基础设施", en: "Knowledge Infrastructure for the AI Era" },
  { zh: "Spark AI 帮助企业及机构实现知识资产的长期保存、统一治理、智能检索与 AI 激活。", en: "Spark AI helps organizations preserve, govern, retrieve, and activate long-term knowledge for AI." },
  ["Data", "Metadata", "Storage", "Retrieval", "Agents", "Governance"],
  Layers3,
  {
    src: "/images/visual-upgrade/platform-knowledge-infrastructure-hero-v2.png",
    alt: { zh: "Spark AI 知识基础设施平台连接多模态企业数据、可信知识与 AI 应用", en: "Spark AI knowledge infrastructure platform connecting multimodal enterprise data to governed knowledge and AI applications" },
  },
);

export const solutionsPage = page(
  { zh: "解决方案", en: "Solutions" },
  { zh: "Spark AI 服务于需要长期可信知识的政府、企业、科研、媒体及数据密集型机构。", en: "Spark AI serves government, enterprise, research, media, and data-intensive organizations that need long-term trust." },
  ["Government", "Enterprise", "Research", "Media", "Compliance", "AI"],
  Landmark,
  { src: "/images/visual-upgrade/solutions-hero-v1.png", alt: { zh: "Spark AI 一体机连接行业知识网络与企业数据流", en: "Spark AI solutions hero image with appliance, industry knowledge network, and enterprise data flows" } },
);

export const resourcesPage = page(
  { zh: "产品资料", en: "Resources" },
  { zh: "经批准的 Spark AI 白皮书、产品文档与架构资料可通过咨询或合作伙伴审核流程获取。", en: "Approved Spark AI materials are available through consultation and partner review." },
  ["Principles", "White Papers", "Architecture", "Product", "Research", "Contact"],
  Database,
);

export const aboutPage = page(
  { zh: "关于光慧科技有限公司", en: "About Spark AI" },
  { zh: "光慧科技有限公司以 Spark AI 为品牌，构建 AI 时代的知识基础设施，让各类机构的数据成为 AI 可持续使用的可信记忆。", en: "Spark AI Technology Limited, operating under the Spark AI brand, builds Knowledge Infrastructure for the AI Era so organizational data can become reliable memory for AI." },
  ["Vision", "Mission", "Product", "Trust", "Ecosystem", "Value"],
  Sparkles,
  { src: "/images/visual-upgrade/about-hero-v1.png", alt: { zh: "Spark AI 一体机、香港城市与知识基础设施分层架构", en: "Spark AI company hero image with appliance, Hong Kong skyline, and knowledge infrastructure layers" } },
);

export const architecturePage = page(
  { zh: "知识基础设施架构", en: "Architecture" },
  { zh: "Spark AI 架构连接算力、存储、智能检索、AI 智能体、长期归档与治理能力。", en: "Spark AI architecture connects compute, storage, retrieval, AI Agents, long-term archive, and governance." },
  ["Compute", "Storage", "Metadata", "Retrieval", "Agents", "Governance"],
  Layers3,
);
