import type { Metadata } from "next";

import { InvestorShell } from "@/components/sections/investor-shell";
import { solutionsPage } from "@/data/investor-content";

export const metadata: Metadata = {
  title: "Solutions | Spark AI",
  description: "Spark AI solution overview for government, healthcare, finance, manufacturing, education and AI research.",
};

export default function SolutionsPage() {
  return <InvestorShell {...solutionsPage} />;
}
