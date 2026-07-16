import type { Metadata } from "next";

import HomePage from "@/app/(site)/page";

export const brandMetadata: Metadata = {
  title: "Knowledge Infrastructure for the AI Era",
  description:
    "Spark AI helps organizations preserve, activate and continuously create value from their knowledge.",
};

export function BrandedOverviewPage() {
  return <HomePage />;
}
