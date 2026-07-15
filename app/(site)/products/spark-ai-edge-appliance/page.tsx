import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Spark AI Edge Appliance | Spark AI",
  description:
    "Spark AI Edge Appliance is powered by NVIDIA GPU and integrates intelligent tiered storage, Enterprise RAG, AI Agents, data governance and cloud-edge collaboration.",
  alternates: { canonical: "/products/spark-ai-edge-appliance" },
};

export default function SparkAiEdgeAppliancePage() {
  return <InvestorPage {...pagePresets.edgeAppliance} />;
}
