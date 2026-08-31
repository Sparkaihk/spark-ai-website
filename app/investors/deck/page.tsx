import type { Metadata } from "next";

import { DlsmInvestorPage } from "@/components/sections/dlsm-investor-page";

export const metadata: Metadata = {
  title: "DLSM Investor Overview | Spark AI",
  description: "Investor overview of Spark AI DLSM, its control-plane role, enterprise participation model, and pilot route.",
  alternates: { canonical: "/investors/deck" },
};

export default function Page() {
  return <DlsmInvestorPage />;
}
