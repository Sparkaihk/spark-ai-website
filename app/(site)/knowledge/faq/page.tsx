import type { Metadata } from "next";
import { localizedPageMetadata } from "@/i18n/server";
import { GeoFaq } from "@/components/sections/geo-faq";

export async function generateMetadata(): Promise<Metadata> {
  return localizedPageMetadata("meta.faq.title", "meta.faq.description", "/knowledge/faq");
}

export default function FaqPage() {
  return <GeoFaq />;
}
