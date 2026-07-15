import type { Metadata } from "next";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export const metadata: Metadata = {
  title: "Blu-ray Optical Storage | Spark AI",
  description: "Blu-ray optical cold storage for 50+ year archive, WORM, low power and compliance preservation.",
  alternates: { canonical: "/solutions/optical-storage" },
};

export default function OpticalStoragePage() {
  return <InvestorPage {...pagePresets.optical} />;
}
