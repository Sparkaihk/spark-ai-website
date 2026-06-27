import type { Metadata } from "next";

import { SparkContentPage } from "@/components/sections/spark-content-page";
import { contentPages } from "@/lib/content-pages";

const page = contentPages["data-bank"];

export const metadata: Metadata = {
  title: `${page.title.zh} | ${page.title.en}`,
  description: page.seoDescription,
  alternates: { canonical: page.href },
};

export default function Page() {
  return <SparkContentPage page={page} />;
}
