import type { Metadata } from "next";

import HomePage from "@/app/(site)/page";

export const brandMetadata: Metadata = {
  title: "Spark AI | Knowledge Infrastructure for the AI Era",
  description:
    "AI cold data center, Blu-ray storage, Knowledge Infrastructure, Knowledge Infrastructure, investor highlights, and roadmap.",
};

export function BrandedOverviewPage() {
  return <HomePage />;
}
