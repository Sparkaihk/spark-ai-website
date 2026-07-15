import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Archive, BrainCircuit, Building2, Cpu, DatabaseZap, FileSearch, Landmark, Layers3, ShieldCheck } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { HeroSection } from "@/components/home/hero-section";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export const metadata: Metadata = {
  title: "Spark AI | Knowledge Infrastructure for the AI Era",
  description: "Spark AI builds Spark AI Appliance and knowledge infrastructure for governed AI memory.",
  alternates: { canonical: "/" },
};

const platformLayers = [
  { icon: Cpu, title: "AI Compute", zh: "AI Compute", body: "Accelerated local inference and retrieval workloads." },
  { icon: Layers3, title: "Tiered Storage", zh: "Tiered Storage", body: "Policy-based placement across performance, capacity, and archive tiers." },
  { icon: Archive, title: "Long-Term Archive", zh: "Long-Term Archive", body: "Durable preservation for records, datasets, media, and institutional knowledge." },
  { icon: FileSearch, title: "Enterprise Retrieval", zh: "Enterprise Retrieval", body: "Governed search and retrieval for attributable AI knowledge workflows." },
  { icon: BrainCircuit, title: "AI Agents", zh: "AI Agents", body: "Knowledge-aware workflows built on trusted enterprise information." },
  { icon: ShieldCheck, title: "Trust Layer", zh: "Trust Layer", body: "Integrity, auditability, access control, and lifecycle governance." },
];

const solutionCards = [
  { icon: Landmark, title: "Government", zh: "Government", body: "Preserve records, policy archives, and institutional knowledge with governed AI access." },
  { icon: Building2, title: "Enterprise", zh: "Enterprise", body: "Turn documents, operational records, and expert knowledge into reusable AI memory." },
  { icon: DatabaseZap, title: "Research & Data", zh: "Research & Data", body: "Keep datasets, research files, and technical history searchable across long retention cycles." },
];

function SectionHeader({ eyebrow, titleZh, titleEn, bodyZh, bodyEn }: { eyebrow: string; titleZh: string; titleEn: string; bodyZh: string; bodyEn: string }) {
  return (
    <AnimatedBlock className="mx-auto max-w-3xl text-center">
      <p className="premium-eyebrow mx-auto">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl"><LocalizedText zh={titleZh} en={titleEn} /></h2>
      <p className="mt-5 text-[16px] leading-[1.85] text-slate-600"><LocalizedText zh={bodyZh} en={bodyEn} /></p>
    </AnimatedBlock>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] text-slate-950">
      <HeroSection />
      <section className="premium-section py-20"><Container><SectionHeader eyebrow="Platform" titleZh="Knowledge Infrastructure for the AI Era" titleEn="Knowledge Infrastructure for the AI Era" bodyZh="Spark AI connects compute, storage, retrieval, AI Agents, and long-term archival into one platform for governed reusable knowledge." bodyEn="Spark AI connects compute, storage, retrieval, AI Agents, and long-term archival into one platform for governed reusable knowledge." /><AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{platformLayers.map((item) => { const Icon = item.icon; return <div key={item.title} className="premium-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold text-slate-950"><LocalizedText zh={item.zh} en={item.title} /></h3><p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p></div>; })}</AnimatedStagger></Container></section>
      <section className="bg-[#eef4fa] py-20"><Container><SectionHeader eyebrow="Product" titleZh={applianceName} titleEn={applianceName} bodyZh="An integrated knowledge infrastructure appliance for local AI compute, durable knowledge preservation, enterprise retrieval, and trust governance." bodyEn="An integrated knowledge infrastructure appliance for local AI compute, durable knowledge preservation, enterprise retrieval, and trust governance." /><div className="mt-10 rounded-[32px] border border-sky-100 bg-white/80 p-8 shadow-sm backdrop-blur-xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Memory for AI. Trust for Tomorrow.</p><h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-950">Make long-term knowledge trusted memory for AI</h3><p className="mt-5 text-[16px] leading-8 text-slate-600">{applianceName} focuses on controlled enterprise deployment, durable data preservation, knowledge retrieval, and audit-ready governance.</p><Button asChild variant="spark" className="mt-7 rounded-[18px]"><Link href="/products/spark-ai-appliance">Explore Product <ArrowRight aria-hidden="true" /></Link></Button></div></Container></section>
      <section className="premium-section py-20"><Container><SectionHeader eyebrow="Solutions" titleZh="For Knowledge-Intensive Organizations" titleEn="For Knowledge-Intensive Organizations" bodyZh="Spark AI serves organizations that need long-term preservation, trust governance, and continuous knowledge activation." bodyEn="Spark AI serves organizations that need long-term preservation, trust governance, and continuous knowledge activation." /><AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-3">{solutionCards.map((item) => { const Icon = item.icon; return <div key={item.title} className="premium-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold text-slate-950"><LocalizedText zh={item.zh} en={item.title} /></h3><p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p></div>; })}</AnimatedStagger><div className="mt-8 text-center"><Button asChild variant="outline" className="rounded-[18px] bg-white/75"><Link href="/solutions">Explore Solutions <ArrowRight aria-hidden="true" /></Link></Button></div></Container></section>
      <section className="bg-[#eef4fa] py-20"><Container><div className="grid gap-6 lg:grid-cols-2"><div className="premium-card p-8"><p className="premium-eyebrow">Principles</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">Design Long-Term Systems Around Trust</h2><p className="mt-5 text-[16px] leading-8 text-slate-600">Trust first, long-term thinking, engineering reliability, and knowledge-first design guide Spark AI.</p><Button asChild variant="spark" className="mt-7 rounded-[18px]"><Link href="/principles">Read Principles <ArrowRight aria-hidden="true" /></Link></Button></div><div className="premium-card p-8"><p className="premium-eyebrow">Knowledge</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">Knowledge Center</h2><p className="mt-5 text-[16px] leading-8 text-slate-600">White papers, product materials, architecture notes, and industry research are available through Spark AI consultation.</p><Button asChild variant="outline" className="mt-7 rounded-[18px] bg-white/75"><Link href="/knowledge">Visit Knowledge Center <ArrowRight aria-hidden="true" /></Link></Button></div></div></Container></section>
      <section className="premium-section py-20"><Container><div className="rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12"><p className="premium-eyebrow mx-auto">Contact</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">Discuss Your Knowledge Infrastructure with Spark AI</h2><p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">We can help evaluate deployment paths for data preservation, knowledge retrieval, AI applications, and trust governance.</p><Button asChild variant="spark" size="lg" className="mt-8 rounded-[18px]"><Link href="/contact">Book Demo <ArrowRight aria-hidden="true" /></Link></Button></div></Container></section>
    </main>
  );
}