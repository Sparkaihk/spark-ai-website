import type { Metadata } from "next";

import { InvestorShell } from "@/components/sections/investor-shell";
import { architecturePage } from "@/data/investor-content";

export const metadata: Metadata = {
  title: "Architecture | Spark AI",
  description: "Interactive architecture for Users, AI Agent, Enterprise RAG, Metadata Engine, NVMe Tier, Object Storage and Blu-ray Cold Archive.",
};

export default function ArchitecturePage() {
  return <InvestorShell {...architecturePage} />;
}
