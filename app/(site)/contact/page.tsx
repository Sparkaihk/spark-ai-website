import type { Metadata } from "next";
import { localizedPageMetadata } from "@/i18n/server";

import { InvestorPage } from "@/components/sections/investor-page";
import { pagePresets } from "@/components/sections/page-presets";

export async function generateMetadata(): Promise<Metadata> {
  return localizedPageMetadata("meta.contact.title", "meta.contact.description", "/contact");
}

export default function ContactPage() {
  return <InvestorPage {...pagePresets.contact} />;
}
