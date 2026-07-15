import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export function HeroActions() {
  return (
    <div className="home-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button asChild variant="spark" size="lg" className="home-hero-action h-12 cursor-pointer rounded-full px-7 shadow-[0_18px_54px_rgba(37,99,235,0.22)] focus-visible:ring-offset-2"><Link href="/products/spark-ai-appliance"><LocalizedText zh={`Explore ${applianceName}`} en={`Explore ${applianceName}`} /><ArrowRight aria-hidden="true" /></Link></Button>
      <Button asChild variant="outline" size="lg" className="home-hero-action h-12 cursor-pointer rounded-full border-sky-200 bg-white/72 px-7 focus-visible:ring-offset-2"><Link href="/contact"><Play aria-hidden="true" /><LocalizedText zh="Book Product Demo" en="Book Product Demo" /></Link></Button>
    </div>
  );
}