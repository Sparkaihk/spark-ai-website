import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Enterprise RAG Knowledge Platform | Spark AI",
  description: "Enterprise RAG knowledge platform for private AI, hybrid retrieval, multimodal parsing and trusted answers.",
  alternates: { canonical: "/solutions/rag" },
};

export default function RagPage() {
  return <InvestorPage {...pagePresets.rag} />;
}
