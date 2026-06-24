import type { LucideIcon } from "lucide-react";
import { Activity, Home, Info, Landmark, Mail, Network, Route, Server } from "lucide-react";

export type SiteRoute = {
  label: string;
  labelZh: string;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes: SiteRoute[] = [
  { label: "Home", labelZh: "首頁", href: "#home", icon: Home },
  { label: "AI Cold Data Center", labelZh: "AI 冷數據中心", href: "#cold-data-center", icon: Server },
  { label: "Solutions", labelZh: "解決方案", href: "#solutions", icon: Activity },
  { label: "Architecture", labelZh: "技術架構", href: "#architecture", icon: Network },
  { label: "Investor Highlights", labelZh: "投資亮點", href: "#investor-highlights", icon: Landmark },
  { label: "Roadmap", labelZh: "發展路線", href: "#roadmap", icon: Route },
  { label: "About Us", labelZh: "關於我們", href: "#about-us", icon: Info },
  { label: "Contact Us", labelZh: "聯絡我們", href: "#contact-us", icon: Mail },
];

export const investorRoutes: SiteRoute[] = siteRoutes;
