import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Building2, Cpu, Landmark, Layers3, Network } from "lucide-react";

export type SiteRoute = {
  label: string;
  labelZh: string;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes: SiteRoute[] = [
  { label: "Infrastructure", labelZh: "知识基础设施", href: "/platform/ai-cold-data", icon: Layers3 },
  { label: "Appliance", labelZh: "一体机", href: "/products/spark-ai-appliance", icon: Cpu },
  { label: "Technology", labelZh: "技术", href: "/technology", icon: Network },
  { label: "Knowledge", labelZh: "知识", href: "/knowledge", icon: BookOpen },
  { label: "Solutions", labelZh: "方案", href: "/solutions", icon: Boxes },
  { label: "Principles", labelZh: "原则", href: "/principles", icon: Landmark },
  { label: "Company", labelZh: "公司", href: "/about", icon: Building2 },
];

export const investorRoutes: SiteRoute[] = siteRoutes;
