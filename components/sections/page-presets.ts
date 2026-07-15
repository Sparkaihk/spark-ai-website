import {
  Archive,
  BrainCircuit,
  Building2,
  Cpu,
  Database,
  Factory,
  FileSearch,
  HeartPulse,
  Landmark,
  Layers3,
  Mail,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import type { InvestorPageProps } from "@/components/sections/investor-page";

const commonDiagram = ["Data", "Metadata", "Knowledge", "Retrieval", "Agents", "Governance"];

export const pagePresets: Record<string, InvestorPageProps> = {
  products: {
    eyebrow: { zh: "产品矩阵", en: "Product Portfolio" },
    title: { zh: "Spark AI 产品体系", en: "Spark AI Product Portfolio" },
    subtitle: {
      zh: "Spark AI 围绕 Spark AI Appliance™、企业检索、长期归档与可信治理，构建面向 AI 时代的知识基础设施。",
      en: "Spark AI builds Knowledge Infrastructure for the AI Era around Spark AI Appliance™, enterprise retrieval, long-term archival, and trust governance.",
    },
    primaryCta: { zh: "查看一体机", en: "Explore Appliance" },
    primaryHref: "/products/spark-ai-appliance",
    secondaryCta: { zh: "联系 Spark AI", en: "Contact Spark AI" },
    secondaryHref: "/contact",
    diagram: ["Appliance", "Compute", "Storage", "Retrieval", "Agents", "Trust"],
    sections: [
      {
        eyebrow: { zh: "核心产品", en: "Core Products" },
        title: { zh: "从数据保存到 AI 知识激活", en: "From Data Preservation to AI Knowledge Activation" },
        body: {
          zh: "产品体系覆盖本地 AI 算力、智能分层存储、长期归档、企业检索、AI Agent 与治理能力。",
          en: "The portfolio covers local AI compute, intelligent tiered storage, long-term archival, enterprise retrieval, AI Agents, and governance.",
        },
        cards: [
          { title: { zh: "Spark AI Appliance™", en: "Spark AI Appliance™" }, body: { zh: "面向企业与机构的一体化知识基础设施设备。", en: "An integrated knowledge infrastructure appliance for enterprises and institutions." }, icon: Cpu },
          { title: { zh: "企业检索", en: "Enterprise Retrieval" }, body: { zh: "把文档、图像、记录与知识库转化为可引用、可追溯的 AI 知识。", en: "Turn documents, images, records, and knowledge bases into attributable AI knowledge." }, icon: FileSearch },
          { title: { zh: "长期归档", en: "Long-Term Archive" }, body: { zh: "支持长期保存、完整性保护、访问控制与审计治理。", en: "Support durable preservation, integrity, access control, and audit governance." }, icon: Archive },
        ],
      },
    ],
  },
  edgeAppliance: {
    eyebrow: { zh: "产品", en: "Product" },
    title: { zh: "Spark AI Appliance™", en: "Spark AI Appliance™" },
    subtitle: {
      zh: "把 AI 算力、存储、检索、AI Agent、长期归档和可信治理整合到统一平台。",
      en: "Unify AI compute, storage, retrieval, AI Agents, long-term archival, and trust governance in one platform.",
    },
    primaryCta: { zh: "预约演示", en: "Book Demo" },
    primaryHref: "/contact",
    secondaryCta: { zh: "产品详情", en: "Product Details" },
    secondaryHref: "/products/spark-ai-appliance",
    diagram: ["Compute", "Storage", "Archive", "Retrieval", "Agents", "Trust"],
    sections: [
      {
        eyebrow: { zh: "产品价值", en: "Product Value" },
        title: { zh: "为私有化 AI 部署提供可信记忆", en: "Trusted Memory for Private AI Deployment" },
        body: {
          zh: "适用于需要本地控制、长期保存、知识检索和治理审计的企业与公共机构。",
          en: "Designed for enterprises and public institutions that require local control, durable preservation, knowledge retrieval, and governance auditability.",
        },
        cards: [
          { title: { zh: "本地 AI 能力", en: "Local AI Capability" }, body: { zh: "支持私有检索、向量化、多模态解析和 AI Agent 工作流。", en: "Support private retrieval, embeddings, multimodal parsing, and AI Agent workflows." }, icon: BrainCircuit },
          { title: { zh: "长期知识保存", en: "Long-Term Knowledge Preservation" }, body: { zh: "面向记录、文件、媒体与机构知识的长期保存。", en: "Preserve records, files, media, and institutional knowledge for long-term reuse." }, icon: Archive },
          { title: { zh: "可信治理", en: "Trust Governance" }, body: { zh: "围绕权限、完整性、审计、生命周期和合规要求设计。", en: "Designed around access control, integrity, auditability, lifecycle policy, and compliance." }, icon: ShieldCheck },
        ],
      },
    ],
  },
  coldData: {
    eyebrow: { zh: "方案", en: "Solution" },
    title: { zh: "知识基础设施", en: "Knowledge Infrastructure" },
    subtitle: {
      zh: "面向大规模长期数据的保存、治理、检索与 AI 激活，让沉淀数据成为可信知识。",
      en: "Preserve, govern, retrieve, and activate large-scale long-term data as trusted knowledge.",
    },
    primaryHref: "/contact",
    secondaryHref: "/products/spark-ai-appliance",
    diagram: commonDiagram,
    sections: [
      {
        eyebrow: { zh: "核心能力", en: "Core Capabilities" },
        title: { zh: "把长期数据重新连接到 AI 工作流", en: "Reconnect Long-Term Data to AI Workflows" },
        body: {
          zh: "通过元数据、权限、索引和检索能力，把长期保存的数据转化为可用、可信、可审计的知识基础。",
          en: "Use metadata, permissions, indexes, and retrieval to convert retained data into usable, trusted, and auditable knowledge.",
        },
        cards: [
          { title: { zh: "生命周期治理", en: "Lifecycle Governance" }, body: { zh: "统一管理保存周期、访问规则、元数据和审计要求。", en: "Manage retention cycles, access rules, metadata, and audit requirements." }, icon: Database },
          { title: { zh: "AI 就绪检索", en: "AI-Ready Retrieval" }, body: { zh: "为企业检索、知识库和 AI Agent 提供可信上下文。", en: "Provide trusted context for enterprise retrieval, knowledge bases, and AI Agents." }, icon: Search },
          { title: { zh: "长期安全", en: "Long-Term Security" }, body: { zh: "关注完整性、防篡改、权限控制与合规审查。", en: "Focus on integrity, tamper resistance, access control, and compliance review." }, icon: ShieldCheck },
        ],
      },
    ],
  },
  optical: {
    eyebrow: { zh: "方案", en: "Solution" },
    title: { zh: "长期归档", en: "Long-Term Archive" },
    subtitle: {
      zh: "为长期保存、低频访问和可信审计场景提供稳定的数据保全能力。",
      en: "Provide durable preservation for long-retention, low-access, and audit-sensitive scenarios.",
    },
    primaryHref: "/contact",
    secondaryHref: "/solutions/ai-cold-data",
    diagram: ["Policy", "Archive", "Integrity", "Index", "Audit", "Retrieval"],
    sections: [
      {
        eyebrow: { zh: "保存价值", en: "Preservation Value" },
        title: { zh: "为长期信任而设计", en: "Designed for Long-Term Trust" },
        body: {
          zh: "长期归档能力帮助组织降低长期保全复杂度，同时保持未来检索与 AI 使用路径。",
          en: "Long-term archival helps organizations reduce preservation complexity while keeping future retrieval and AI usage paths open.",
        },
        cards: [
          { title: { zh: "完整性", en: "Integrity" }, body: { zh: "降低误删、篡改和勒索风险。", en: "Reduce deletion, tampering, and ransomware risk." }, icon: ShieldCheck },
          { title: { zh: "低能耗", en: "Low Power" }, body: { zh: "面向低频访问数据降低长期运行负担。", en: "Reduce long-term operating burden for low-access data." }, icon: Zap },
          { title: { zh: "典型场景", en: "Typical Scenarios" }, body: { zh: "适用于公共记录、医疗影像、审计证据、研究数据和媒体档案。", en: "Fits public records, medical imaging, audit evidence, research data, and media archives." }, icon: Archive },
        ],
      },
    ],
  },
  rag: {
    eyebrow: { zh: "方案", en: "Solution" },
    title: { zh: "企业检索知识平台", en: "Enterprise Retrieval Knowledge Platform" },
    subtitle: {
      zh: "把文档、图像、记录与知识库转化为可追溯、可授权、可治理的 AI 知识。",
      en: "Transform documents, images, records, and knowledge bases into traceable, permission-aware, governed AI knowledge.",
    },
    primaryHref: "/contact",
    secondaryHref: "/solutions/data-bank",
    diagram: ["Sources", "Parsing", "Metadata", "Search", "Models", "Answers"],
    sections: [
      {
        eyebrow: { zh: "检索架构", en: "Retrieval Architecture" },
        title: { zh: "可信的企业知识层", en: "A Trusted Enterprise Knowledge Layer" },
        body: {
          zh: "结合解析、元数据、全文检索、向量检索、权限控制和来源引用，为企业 AI 提供可信答案。",
          en: "Combine parsing, metadata, full-text search, vector retrieval, access control, and source references for trusted enterprise AI answers.",
        },
        cards: [
          { title: { zh: "混合检索", en: "Hybrid Search" }, body: { zh: "结合关键词、全文、向量和权限过滤。", en: "Combine keyword, full-text, vector, and permission filters." }, icon: Search },
          { title: { zh: "多模态解析", en: "Multimodal Parsing" }, body: { zh: "支持文档、图像、扫描件、音视频和技术文件。", en: "Support documents, images, scans, audio, video, and technical files." }, icon: Layers3 },
          { title: { zh: "私有部署", en: "Private Deployment" }, body: { zh: "让敏感数据留在可控环境内。", en: "Keep sensitive data inside controlled environments." }, icon: ShieldCheck },
        ],
      },
    ],
  },
  dataBank: {
    eyebrow: { zh: "方案", en: "Solution" },
    title: { zh: "知识资产基础设施", en: "Knowledge Asset Infrastructure" },
    subtitle: {
      zh: "把长期数据转化为可治理、可检索、可复用的 AI 知识资产。",
      en: "Turn long-term data into governed, searchable, reusable AI knowledge assets.",
    },
    primaryHref: "/contact",
    secondaryHref: "/technology",
    diagram: ["Data", "Metadata", "Rights", "Knowledge", "Reuse", "Value"],
    sections: [
      {
        eyebrow: { zh: "资产化路径", en: "Asset Path" },
        title: { zh: "从数据到知识，再到可持续价值", en: "From Data to Knowledge and Sustainable Value" },
        body: {
          zh: "通过目录、元数据、权属、权限和使用追踪，建立可审阅的知识资产管理路径。",
          en: "Use inventory, metadata, ownership, permissions, and usage tracking to build an auditable knowledge asset path.",
        },
        cards: [
          { title: { zh: "数据治理", en: "Data Governance" }, body: { zh: "明确权属、访问规则、生命周期和合规边界。", en: "Clarify ownership, access rules, lifecycle, and compliance boundaries." }, icon: ShieldCheck },
          { title: { zh: "知识资产", en: "Knowledge Assets" }, body: { zh: "把记录、文档、图像和媒体转化为可检索知识。", en: "Convert records, documents, images, and media into searchable knowledge." }, icon: FileSearch },
          { title: { zh: "价值发现", en: "Value Discovery" }, body: { zh: "支持业务影响分析、复用追踪和未来评估。", en: "Support business impact analysis, reuse tracking, and future evaluation." }, icon: Sparkles },
        ],
      },
    ],
  },
  technology: {
    eyebrow: { zh: "技术", en: "Technology" },
    title: { zh: "AI 数据、检索与知识架构", en: "AI Data, Retrieval, and Knowledge Architecture" },
    subtitle: {
      zh: "连接存储、元数据、企业检索、模型与 AI Agent，形成可治理的知识基础设施。",
      en: "Connect storage, metadata, enterprise retrieval, models, and AI Agents into governed knowledge infrastructure.",
    },
    primaryHref: "/contact",
    secondaryHref: "/products/spark-ai-appliance",
    diagram: ["Storage", "Metadata", "Retrieval", "Models", "Agents", "Governance"],
    sections: [
      {
        eyebrow: { zh: "架构层", en: "Architecture Layers" },
        title: { zh: "从基础设施到 AI 应用", en: "From Infrastructure to AI Applications" },
        body: {
          zh: "Spark AI 通过分层存储、元数据、检索、模型连接和治理控制，把长期知识嵌入 AI 工作流。",
          en: "Spark AI uses tiered storage, metadata, retrieval, model connectivity, and governance controls to embed long-term knowledge into AI workflows.",
        },
        cards: [
          { title: { zh: "智能分层", en: "Intelligent Tiering" }, body: { zh: "按访问频率、成本、策略和治理需求安排数据层级。", en: "Place data by access frequency, cost, policy, and governance needs." }, icon: Database },
          { title: { zh: "检索与模型", en: "Retrieval and Models" }, body: { zh: "把企业知识以可引用、可追溯方式提供给 AI。", en: "Provide enterprise knowledge to AI in attributable and traceable ways." }, icon: BrainCircuit },
          { title: { zh: "部署模式", en: "Deployment Models" }, body: { zh: "支持本地、边缘、数据中心和受控云协同。", en: "Support local, edge, data center, and controlled cloud collaboration." }, icon: Network },
        ],
      },
    ],
  },
  cases: {
    eyebrow: { zh: "案例", en: "Case Studies" },
    title: { zh: "面向高价值知识行业", en: "For High-Value Knowledge Industries" },
    subtitle: {
      zh: "适用于政府、医疗、金融、制造、科研和媒体等需要长期保存与可信 AI 使用的场景。",
      en: "Designed for government, healthcare, finance, manufacturing, research, media, and other scenarios requiring long-term preservation and trusted AI use.",
    },
    primaryHref: "/contact",
    secondaryHref: "/technology",
    diagram: commonDiagram,
    sections: [
      {
        eyebrow: { zh: "行业场景", en: "Industry Scenarios" },
        title: { zh: "把长期沉淀的数据变成可用知识", en: "Turn Long-Retained Data into Usable Knowledge" },
        body: {
          zh: "Spark AI 为数据密集型行业提供保存、治理、检索与 AI 激活能力。",
          en: "Spark AI provides preservation, governance, retrieval, and AI activation for data-intensive industries.",
        },
        cards: [
          { title: { zh: "医疗", en: "Healthcare" }, body: { zh: "管理影像、病历、研究文件和合规记录。", en: "Govern imaging, records, research files, and compliance documents." }, icon: HeartPulse },
          { title: { zh: "政府", en: "Government" }, body: { zh: "保存公共记录、政策文件和机构知识。", en: "Preserve public records, policy documents, and institutional knowledge." }, icon: Landmark },
          { title: { zh: "制造", en: "Manufacturing" }, body: { zh: "激活工程图纸、质检记录、手册和维护日志。", en: "Activate drawings, QA records, manuals, and maintenance logs." }, icon: Factory },
        ],
      },
    ],
  },
  about: {
    eyebrow: { zh: "关于 Spark AI", en: "About Spark AI" },
    title: { zh: "建设 AI 时代知识基础设施", en: "Building Knowledge Infrastructure for the AI Era" },
    subtitle: {
      zh: "Spark AI 专注长期知识保存、企业检索、AI Agent 和可信治理，让组织数据成为 AI 的可靠记忆。",
      en: "Spark AI focuses on long-term knowledge preservation, enterprise retrieval, AI Agents, and trust governance so organizational data can become reliable memory for AI.",
    },
    primaryHref: "/contact",
    secondaryHref: "/technology",
    diagram: ["Vision", "Mission", "Product", "Trust", "Ecosystem", "Value"],
    sections: [
      {
        eyebrow: { zh: "公司定位", en: "Company Positioning" },
        title: { zh: "Memory for AI. Trust for Tomorrow.", en: "Memory for AI. Trust for Tomorrow." },
        body: {
          zh: "我们相信，长期保存的可信知识将成为企业 AI 的核心基础。",
          en: "We believe trusted long-term knowledge will become a core foundation for enterprise AI.",
        },
        cards: [
          { title: { zh: "愿景", en: "Vision" }, body: { zh: "成为 AI 时代知识基础设施的重要建设者。", en: "Become a key builder of Knowledge Infrastructure for the AI Era." }, icon: Sparkles },
          { title: { zh: "使命", en: "Mission" }, body: { zh: "帮助组织把长期数据转化为可信知识。", en: "Help organizations transform long-term data into trusted knowledge." }, icon: BrainCircuit },
          { title: { zh: "价值", en: "Values" }, body: { zh: "信任、长期主义、工程可靠和知识优先。", en: "Trust, long-term thinking, engineering reliability, and knowledge-first design." }, icon: ShieldCheck },
        ],
      },
    ],
  },
  contact: {
    eyebrow: { zh: "联系", en: "Contact" },
    title: { zh: "与 Spark AI 讨论您的知识基础设施", en: "Discuss Your Knowledge Infrastructure with Spark AI" },
    subtitle: {
      zh: "欢迎政府、企业、投资机构和产业伙伴联系 Spark AI，讨论 Spark AI Appliance™、企业检索、长期归档与知识基础设施合作。",
      en: "Government agencies, enterprises, investors, and partners are welcome to discuss Spark AI Appliance™, enterprise retrieval, long-term archival, and knowledge infrastructure collaboration.",
    },
    primaryCta: { zh: "发送邮件", en: "Email Us" },
    primaryHref: "mailto:info@sparkai.hk",
    secondaryCta: { zh: "返回首页", en: "Back Home" },
    secondaryHref: "/",
    diagram: ["Inquiry", "Discovery", "Architecture", "Pilot", "Deployment", "Scale"],
    sections: [
      {
        eyebrow: { zh: "合作流程", en: "Collaboration" },
        title: { zh: "从咨询到部署", en: "From Consultation to Deployment" },
        body: {
          zh: "我们可以协助完成需求梳理、架构评估、试点验证和分阶段部署。",
          en: "We can support discovery, architecture assessment, pilot validation, and phased deployment.",
        },
        cards: [
          { title: { zh: "产品演示", en: "Product Demo" }, body: { zh: "了解 Spark AI Appliance™ 如何支撑企业知识基础设施。", en: "See how Spark AI Appliance™ supports enterprise knowledge infrastructure." }, icon: Cpu },
          { title: { zh: "方案咨询", en: "Solution Consulting" }, body: { zh: "评估数据保存、检索、治理和 AI 应用路径。", en: "Assess data preservation, retrieval, governance, and AI application paths." }, icon: Network },
          { title: { zh: "合作伙伴", en: "Partnership" }, body: { zh: "欢迎产业、技术、渠道与投资合作沟通。", en: "We welcome industry, technology, channel, and investment partnership discussions." }, icon: Mail },
        ],
      },
    ],
  },
};
