import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Spark AI Principles | Built on Principles. Engineered for Trust.",
  description: "The principles behind Spark AI: trust, long-term thinking, engineering excellence and knowledge preservation.",
};

const sections = ["What We Believe", "Why We Exist", "Our Mission", "Our Promise", "Product Philosophy", "Design Philosophy", "Engineering Philosophy", "What We Refuse", "Long-Term Commitment"];
const principles = ["Trust First", "Long-Term Thinking", "Engineering Excellence", "Knowledge First", "Open Architecture", "Design with Purpose"];

export default function PrinciplesPage() {
  return <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950"><section className="hero-shell py-20"><Container><AnimatedBlock className="mx-auto max-w-4xl text-center"><p className="premium-eyebrow mx-auto">Spark AI Principles</p><h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"><LocalizedText zh="源于原则。成于信任。" en="Built on Principles. Engineered for Trust." /></h1><p className="mt-6 text-lg leading-8 text-slate-600">Memory for AI. Trust for Tomorrow. Technology changes. Trust endures.</p><p className="mt-4 text-lg leading-8 text-slate-600">We design for decades, not for demos. Data may become cold. Knowledge should never be forgotten.</p></AnimatedBlock><AnimatedBlock delay={0.08} className="mx-auto mt-12 max-w-6xl"><div className="premium-visual relative aspect-video overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/75 p-2 shadow-xl"><Image src="/images/visual-upgrade/principles-hero-v1.png" alt="Spark AI Principles hero image with appliance, trust architecture, archive layers, and knowledge network" width={3840} height={2160} priority sizes="(min-width: 1024px) 72vw, 100vw" className="h-full w-full rounded-[1.35rem] object-cover" /></div></AnimatedBlock></Container></section><section className="premium-section py-20"><Container><AnimatedStagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{sections.map((item) => <div key={item} className="premium-card p-6"><Sparkles className="size-6 text-primary" aria-hidden="true" /><h2 className="mt-5 text-xl font-semibold text-slate-950">{item}</h2><p className="mt-4 text-sm leading-7 text-slate-600">Spark AI applies this principle to product architecture, data governance, design decisions and long-term customer trust.</p></div>)}</AnimatedStagger></Container></section><section className="bg-[#eef4fa] py-20"><Container><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{principles.map((item) => <div key={item} className="rounded-3xl border border-blue-100 bg-white/75 p-6 shadow-sm"><CheckCircle2 className="size-6 text-primary" /><h3 className="mt-4 text-lg font-semibold">{item}</h3></div>)}</div><div className="mt-10 text-center"><Button asChild variant="spark" className="rounded-[18px]"><Link href="/contact">Contact Spark AI <ArrowRight aria-hidden="true" /></Link></Button></div></Container></section></main>;
}


