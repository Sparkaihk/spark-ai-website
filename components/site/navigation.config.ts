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
  { label: "Solutions", href: "/solutions", icon: Activity },
  { label: "Products", href: "/products", icon: Cpu },
  { label: "Industries", href: "/industries", icon: Building2 },
  { label: "Ecosystem", href: "/ecosystem", icon: Handshake },
  { label: "Investors", href: "/investors", icon: Landmark },
  { label: "About", href: "/about", icon: Orbit },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Mail },
];
