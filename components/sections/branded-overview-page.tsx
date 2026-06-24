import type { Metadata } from "next";

import HomePage from "@/app/(site)/page";

export const brandMetadata: Metadata = {
  title: "Spark AI | AI Cold Data Platform",
  description:
    "AI cold data center, Blu-ray storage, BlueSafe RAG Cloud, Data Asset Bank, investor highlights, and roadmap.",
};

export function BrandedOverviewPage() {
  return <HomePage />;
}
