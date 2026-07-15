import type { Metadata } from "next";

import { InvestorShell } from "@/components/sections/investor-shell";
import { resourcesPage } from "@/data/investor-content";

export const metadata: Metadata = {
  title: "Resources | Spark AI",
  description: "Spark AI resource center for whitepaper, product brochure, datasheet, architecture guide, deployment guide and FAQ access requests.",
};

export default function ResourcesPage() {
  return <InvestorShell {...resourcesPage} />;
}
