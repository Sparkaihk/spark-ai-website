import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Contact Spark AI",
  description: "Contact Spark AI for AI cold data center, Enterprise RAG, Edge Appliance and Knowledge Infrastructure discussions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <InvestorPage {...pagePresets.contact} />;
}
