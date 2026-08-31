import type { Metadata } from "next";

import { DlsmInvestorPage } from "@/components/sections/dlsm-investor-page";

export const metadata: Metadata = {
  title: "DLSM Business and Investor Overview | Spark AI",
  description: "Spark AI DLSM connects AI data objects, storage, lifecycle policy, and audit evidence through an intelligent control plane.",
  alternates: { canonical: "/investors" },
};

export default function Page() {
  return <DlsmInvestorPage />;
}
