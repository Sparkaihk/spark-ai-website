import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Building2, Cpu, Landmark, Layers3, Network } from "lucide-react";

import type { TranslationKey } from "@/i18n/dictionary";

export type SiteRoute = {
  labelKey: TranslationKey;
  href: string;
  icon: LucideIcon;
};

export const siteRoutes: SiteRoute[] = [
  { labelKey: "navigation.infrastructure", href: "/platform/ai-cold-data", icon: Layers3 },
  { labelKey: "navigation.appliance", href: "/products/spark-ai-appliance", icon: Cpu },
  { labelKey: "navigation.technology", href: "/technology", icon: Network },
  { labelKey: "navigation.knowledge", href: "/knowledge", icon: BookOpen },
  { labelKey: "navigation.solutions", href: "/solutions", icon: Boxes },
  { labelKey: "navigation.principles", href: "/principles", icon: Landmark },
  { labelKey: "navigation.company", href: "/about", icon: Building2 },
];

export const investorRoutes: SiteRoute[] = siteRoutes;
