import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Knowledge Infrastructure | Spark AI",
  description: "Transform enterprise cold data into governed, searchable and reusable AI-ready knowledge assets.",
  alternates: { canonical: "/solutions/data-bank" },
};

export default function DataBankPage() {
  return <InvestorPage {...pagePresets.dataBank} />;
}
