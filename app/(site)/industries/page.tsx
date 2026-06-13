import type { Metadata } from "next";

import { StandardPage } from "@/components/sections/standard-page";
import { sparkPages } from "@/lib/spark-page-content";

const page = sparkPages.industries;

export const metadata: Metadata = page.metadata;

export default function IndustriesPage() {
  return <StandardPage page={page} />;
}
