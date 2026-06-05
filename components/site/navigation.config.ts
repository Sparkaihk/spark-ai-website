import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  Cpu,
  Eye,
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
  { label: "About", href: "/about", icon: Orbit },
  { label: "Vision", href: "/vision", icon: Eye },
  { label: "Capabilities", href: "/capabilities", icon: Activity },
  { label: "Products", href: "/products", icon: Cpu },
  { label: "Industries", href: "/industries", icon: Building2 },
  { label: "Ecosystem", href: "/ecosystem", icon: Handshake },
  { label: "Investors", href: "/investors", icon: Landmark },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Mail },
];
