import type { Metadata } from "next";

import { StandardPage } from "@/components/sections/standard-page";
import { sparkPages } from "@/lib/spark-page-content";

const page = sparkPages.about;

export const metadata: Metadata = page.metadata;

export default function AboutPage() {
  return <StandardPage page={page} />;
}
