import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  Cpu,
  Handshake,
  Landmark,
  Mail,
  Newspaper,
  Orbit,
} from "lucide-react";

export type SiteRoute = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes: SiteRoute[] = [
  { label: "解决方案", href: "/solutions", icon: Activity },
  { label: "产品", href: "/products", icon: Cpu },
  { label: "行业应用", href: "/industries", icon: Building2 },
  { label: "生态合作", href: "/ecosystem", icon: Handshake },
  { label: "投资者关系", href: "/investors", icon: Landmark },
  { label: "关于我们", href: "/about", icon: Orbit },
  { label: "新闻中心", href: "/news", icon: Newspaper },
  { label: "联系我们", href: "/contact", icon: Mail },
];
