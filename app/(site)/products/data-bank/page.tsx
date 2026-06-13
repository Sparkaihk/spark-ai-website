import type { Metadata } from "next";
import {
  Banknote,
  BarChart3,
  Blocks,
  Database,
  FileKey2,
  Landmark,
  LineChart,
  LockKeyhole,
  Scale,
  ShieldCheck,
  WalletCards,
  Workflow,
} from "lucide-react";

import { ProductDetailPage, type ProductDetailContent } from "@/components/sections/product-detail-page";

export const metadata: Metadata = {
  title: "Data Asset Bank",
  description:
    "Data Asset Bank product page for data asset accounts, custody, valuation workflows, trusted access, and ecosystem monetization.",
};

const content: ProductDetailContent = {
  eyebrow: "Data Asset Bank",
  title: "Data Asset Bank",
  subtitle: "Operating layer for data assets / 数据资产运营层",
  description:
    "Data Asset Bank provides the account, custody, valuation, permissioning, and trusted circulation layer that helps institutions operate governed data as a strategic asset. 为企业建立数据资产账户、托管、估值、授权访问与可信流通基础设施。",
  cta: "预约Data Asset Bank咨询",
  visualTitle: "Data Asset Operations",
  visualDescription:
    "From governed custody to valuation and permissioned circulation, Data Asset Bank turns dormant data into managed assets.",
  visualIcon: Landmark,
  features: [
    {
      title: "数据资产账户 / Asset Accounts",
      description: "为组织、数据集和业务线建立可管理的数据资产账户体系。",
      icon: WalletCards,
    },
    {
      title: "可信托管 / Trusted Custody",
      description: "连接权限、审计、留存和访问策略，形成可信数据托管层。",
      icon: LockKeyhole,
    },
    {
      title: "估值流程 / Valuation Workflow",
      description: "支持数据分类、质量评估、使用记录和价值评估流程。",
      icon: LineChart,
    },
    {
      title: "可信流通 / Trusted Circulation",
      description: "通过授权访问、合规控制和生态协作释放数据价值。",
      icon: Banknote,
    },
  ],
  useCases: [
    {
      title: "金融数据资产 / Financial Data",
      description: "管理研究、风控、合规、客户知识和机构数据资产。",
      icon: Landmark,
    },
    {
      title: "企业知识资产 / Knowledge Assets",
      description: "将制度、案例、文档和专家知识纳入资产化运营。",
      icon: Database,
    },
    {
      title: "合规审计 / Compliance",
      description: "支撑可追溯、可授权、可审计的数据资产治理。",
      icon: Scale,
    },
    {
      title: "生态协作 / Ecosystem Access",
      description: "为未来可信数据交易、授权调用和合作场景做准备。",
      icon: Blocks,
    },
  ],
  architecture: [
    {
      title: "Asset Account",
      description: "Create accounts for governed datasets, departments, and owners.",
      icon: WalletCards,
    },
    {
      title: "Custody Layer",
      description: "Apply retention, access, audit, and security controls.",
      icon: ShieldCheck,
    },
    {
      title: "Valuation Workflow",
      description: "Classify, score, and evaluate data for business use.",
      icon: BarChart3,
    },
    {
      title: "Permissioned Access",
      description: "Enable controlled circulation, APIs, and ecosystem use.",
      icon: FileKey2,
    },
  ],
  finalTitle: "Operate enterprise data as a governed asset class.",
  finalDescription:
    "与Spark AI讨论数据资产账户、可信托管、估值流程和未来生态流通模式。",
};

export default function DataBankPage() {
  return <ProductDetailPage content={content} />;
}
