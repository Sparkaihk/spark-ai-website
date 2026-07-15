import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Products | Spark AI",
  description: "Spark AI product portfolio for edge AI, cold data, Enterprise RAG and knowledge infrastructure.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <InvestorPage {...pagePresets.products} />;
}
