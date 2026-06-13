import {
  Archive,
  Banknote,
  Building2,
  CloudCog,
  Cpu,
  Factory,
  Landmark,
  Network,
  Orbit,
  ShieldCheck,
  Server,
} from "lucide-react";

export const homepageMetrics = [
  { value: "5 Layers", label: "Digital asset infrastructure / 数字资产基础设施" },
  { value: "4", label: "Core business units / 核心业务板块" },
  { value: "4", label: "Revenue engines / 收入引擎" },
  { value: "HK", label: "Global capital gateway / 香港总部" },
];

export const productSuite = [
  {
    title: "BlueSafe Cold Data Storage",
    description:
      "Optical cold storage and immutable archive infrastructure for long-term enterprise data preservation. 蓝光冷存储与不可篡改归档基础设施。",
    icon: Archive,
  },
  {
    title: "Spark RAG Cloud",
    description:
      "Governed retrieval and knowledge activation layer for enterprise AI applications. 面向企业AI应用的知识检索与激活平台。",
    icon: CloudCog,
  },
  {
    title: "Edge AI Node",
    description:
      "Distributed edge compute nodes for local inference, secure ingestion, and regional AI services. 分布式边缘算力节点。",
    icon: Cpu,
  },
  {
    title: "Data Asset Bank",
    description:
      "Operating layer for data asset accounts, valuation workflows, permissioned access, and trusted circulation. 数据资产账户与可信流通运营层。",
    icon: Banknote,
  },
];

export const infrastructurePillars = [
  {
    title: "Cold Data",
    description:
      "Preserve institutional records, media, telemetry, and compliance archives in a durable low-energy layer. 冷数据长期保存底座。",
    icon: Archive,
  },
  {
    title: "Knowledge",
    description:
      "Transform governed data and metadata into retrievable knowledge for copilots, agents, and enterprise AI. 企业知识激活层。",
    icon: Network,
  },
  {
    title: "Compute",
    description:
      "Deploy AI compute across data centers and edge nodes to support inference, search, and intelligent workflows. 算力与边缘节点层。",
    icon: Server,
  },
  {
    title: "Data Asset",
    description:
      "Operate data as a governed asset with custody, valuation, permissioned access, and ecosystem use. 数据资产化运营层。",
    icon: Banknote,
  },
];

export const industries = [
  { title: "金融服务", icon: Landmark },
  { title: "先进制造", icon: Factory },
  { title: "政府与公共事业", icon: Building2 },
  { title: "企业级AI平台", icon: Orbit },
];

export const operatingModel = [
  {
    title: "治理",
    description: "围绕数据全生命周期进行分类、授权、审计与安全控制。",
    icon: ShieldCheck,
  },
  {
    title: "激活",
    description: "让企业数据可用于搜索、智能体、分析平台与RAG知识系统。",
    icon: Network,
  },
  {
    title: "价值化",
    description: "建立从沉睡数据到可信数据资产的基础设施路径。",
    icon: Banknote,
  },
];

export const strategicFlow = [
  "Cold Data Layer",
  "BlueSafe Archive",
  "RAG Engine",
  "AI Knowledge Cloud",
  "Enterprise Applications",
] as const;
