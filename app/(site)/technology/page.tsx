import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Technology Architecture | Spark AI",
  description: "Spark AI technology architecture for AI Data Lake, RAG, LLM and enterprise knowledge bases.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return <InvestorPage {...pagePresets.technology} />;
}
