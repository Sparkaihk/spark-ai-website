import type { Metadata } from "next";

import { InvestorShell } from "@/components/sections/investor-shell";
import { platformPage } from "@/data/investor-content";

export const metadata: Metadata = {
  title: "Knowledge Infrastructure for the AI Era | Spark AI",
  description: "Knowledge Infrastructure for the AI Era for lifecycle, intelligent tiering, metadata engine, multimodal parsing, enterprise search, knowledge base and governance.",
};

export default function AiColdDataPlatformPage() {
  return <InvestorShell {...platformPage} />;
}
