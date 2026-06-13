import type { Metadata } from "next";
import {
  Activity,
  Building2,
  Cpu,
  Gauge,
  Network,
  Router,
  Server,
  ShieldCheck,
  Signal,
  Workflow,
  Zap,
} from "lucide-react";

import { ProductDetailPage, type ProductDetailContent } from "@/components/sections/product-detail-page";

export const metadata: Metadata = {
  title: "Edge AI Node",
  description:
    "Edge AI Node product page for distributed inference, local data ingestion, secure synchronization, and regional AI services.",
};

const content: ProductDetailContent = {
  eyebrow: "Edge AI Node",
  title: "Edge AI Node",
  subtitle: "Distributed edge intelligence / 分布式边缘智能节点",
  description:
    "Edge AI Node brings secure ingestion, local inference, synchronization, and AI workflows closer to operational data sources across factories, hospitals, campuses, and regional enterprise sites. 将AI推理、数据接入和本地工作流部署到更接近业务现场的边缘节点。",
  cta: "预约Edge AI Node咨询",
  visualTitle: "Distributed AI Network",
  visualDescription:
    "Local nodes connect operational data, inference workloads, synchronization, and enterprise AI services.",
  visualIcon: Router,
  features: [
    {
      title: "本地推理 / Local Inference",
      description: "在边缘节点完成低延迟AI推理，减少中心云往返成本。",
      icon: Cpu,
    },
    {
      title: "安全接入 / Secure Ingestion",
      description: "连接现场数据源、设备、文件和业务系统，并保留权限控制。",
      icon: ShieldCheck,
    },
    {
      title: "区域同步 / Regional Sync",
      description: "在本地、区域和中心平台之间同步数据、索引和模型结果。",
      icon: Signal,
    },
    {
      title: "低成本部署 / Efficient Deployment",
      description: "以标准化节点配置降低企业AI现场部署和运维复杂度。",
      icon: Zap,
    },
  ],
  useCases: [
    {
      title: "智能制造 / Manufacturing",
      description: "支持质量检测、设备知识、现场问答和预测维护。",
      icon: Building2,
    },
    {
      title: "医疗机构 / Healthcare Sites",
      description: "在院区侧处理影像、知识库和合规敏感工作流。",
      icon: Activity,
    },
    {
      title: "园区与分支 / Campuses",
      description: "为分布式办公、园区和分支机构提供本地AI能力。",
      icon: Network,
    },
    {
      title: "低延迟服务 / Low-Latency AI",
      description: "适合实时响应、边缘检索和本地自动化场景。",
      icon: Gauge,
    },
  ],
  architecture: [
    {
      title: "Local Data",
      description: "Connect operational files, devices, systems, and site knowledge.",
      icon: Server,
    },
    {
      title: "Edge Inference",
      description: "Run AI workloads closer to users and machines.",
      icon: Cpu,
    },
    {
      title: "Secure Sync",
      description: "Coordinate data, indexes, and model outputs with central services.",
      icon: ShieldCheck,
    },
    {
      title: "AI Workflow",
      description: "Deliver local copilots, alerts, analysis, and automation.",
      icon: Workflow,
    },
  ],
  finalTitle: "Deploy AI where enterprise data is created.",
  finalDescription:
    "与Spark AI讨论边缘AI节点、现场推理、区域同步和分布式AI网络部署。",
};

export default function EdgeNodePage() {
  return <ProductDetailPage content={content} />;
}
