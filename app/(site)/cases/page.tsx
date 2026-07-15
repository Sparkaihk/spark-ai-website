import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Case Studies | Spark AI",
  description: "Spark AI case scenarios for healthcare, government archives, finance, manufacturing, AI companies and research.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return <InvestorPage {...pagePresets.cases} />;
}
