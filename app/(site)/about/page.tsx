import type { Metadata } from "next";

import { InvestorShell } from "@/components/sections/investor-shell";
import { aboutPage } from "@/data/investor-content";

export const metadata: Metadata = {
  title: "About | Spark AI",
  description: "Spark AI mission, vision, technology belief, product roadmap and contact CTA.",
};

export default function AboutPage() {
  return <InvestorShell {...aboutPage} />;
}
