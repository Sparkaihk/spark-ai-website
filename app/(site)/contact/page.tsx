import type { Metadata } from "next";

import { StandardPage } from "@/components/sections/standard-page";
import { sparkPages } from "@/lib/spark-page-content";

const page = sparkPages.contact;

export const metadata: Metadata = page.metadata;

export default function ContactPage() {
  return <StandardPage page={page} />;
}
