import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "AI Cold Data Center | Spark AI",
  description: "PB-scale knowledge infrastructure for the AI era for long-term preservation, governance, RAG and AI activation.",
  alternates: { canonical: "/solutions/ai-cold-data" },
};

export default function AiColdDataPage() {
  return <InvestorPage {...pagePresets.coldData} />;
}
