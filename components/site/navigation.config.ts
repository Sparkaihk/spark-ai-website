import type { LucideIcon } from "lucide-react";
import { Activity, Boxes, Cpu, Database, FileSearch, Home, Info, Mail, Network, Server } from "lucide-react";

export type SiteRoute = {
  label: string;
  labelZh: string;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes: SiteRoute[] = [
  { label: "Home", labelZh: "首頁", href: "/", icon: Home },
  { label: "Flagship", labelZh: "旗艦產品", href: "/products/rtx-spark", icon: Cpu },
  { label: "AI Cold Data", labelZh: "AI 冷數據", href: "/solutions/ai-cold-data", icon: Server },
  { label: "Optical Storage", labelZh: "藍光存儲", href: "/solutions/optical-storage", icon: Database },
  { label: "RAG Platform", labelZh: "RAG 平台", href: "/solutions/rag", icon: FileSearch },
  { label: "Data Bank", labelZh: "數據資產", href: "/solutions/data-bank", icon: Activity },
  { label: "Products", labelZh: "產品", href: "/products/storage", icon: Boxes },
  { label: "Technology", labelZh: "技術", href: "/technology", icon: Network },
  { label: "Cases", labelZh: "案例", href: "/cases", icon: Activity },
  { label: "About", labelZh: "關於", href: "/about", icon: Info },
  { label: "Contact", labelZh: "聯絡", href: "/contact", icon: Mail },
];

export const investorRoutes: SiteRoute[] = siteRoutes;
