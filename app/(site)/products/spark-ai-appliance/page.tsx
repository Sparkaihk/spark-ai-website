import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Archive, BrainCircuit, Cpu, FileSearch, Layers3, ShieldCheck } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export const metadata: Metadata = {
  title: "Spark AI Appliance | Spark AI",
  description: "Spark AI Appliance unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, long-term archive, and trust governance.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

const capabilities = [
  { icon: Cpu, title: "AI Compute", body: "Local accelerated compute for private retrieval and knowledge workflows." },
  { icon: Layers3, title: "Intelligent Tiering", body: "Move data across performance, capacity, and archive layers by policy." },
  { icon: Archive, title: "Long-Term Archive", body: "Preserve institutional records, datasets, media, and documents for durable reuse." },
  { icon: FileSearch, title: "Enterprise Retrieval", body: "Ground AI answers in governed source materials and searchable metadata." },
  { icon: BrainCircuit, title: "AI Agents", body: "Support knowledge-aware workflows without losing governance boundaries." },
  { icon: ShieldCheck, title: "Trust Governance", body: "Access control, integrity, auditability, retention, and lifecycle policy." },
];

export default function SparkAiAppliancePage() {
  return <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950"><section className="hero-shell py-20"><Container><div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><AnimatedBlock><p className="premium-eyebrow">{applianceName}</p><h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">Knowledge Infrastructure Appliance for the AI Era</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{applianceName} unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, long-term archival, and trust governance in one platform.</p><p className="mt-5 text-lg font-semibold text-primary">Memory for AI. Trust for Tomorrow.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="spark" size="lg" className="rounded-[18px]"><Link href="/contact">Book Product Demo <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75"><Link href="/architecture">View Architecture</Link></Button></div></AnimatedBlock><AnimatedBlock className="rounded-[32px] border border-sky-100 bg-[linear-gradient(135deg,#eff8ff,#ffffff)] p-6 shadow-[0_30px_90px_rgba(37,99,235,0.14)]"><div className="rounded-[28px] border border-white bg-white/70 p-6"><div className="flex h-28 items-center justify-center rounded-[24px] bg-slate-950 text-xl font-semibold text-white">Spark AI</div><div className="mt-5 grid gap-3 sm:grid-cols-2">{["Compute", "Retrieve", "Archive", "Govern"].map((item) => <div key={item} className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">{item}</div>)}</div></div></AnimatedBlock></div></Container></section><section className="premium-section py-20"><Container><AnimatedBlock className="mx-auto max-w-3xl text-center"><p className="premium-eyebrow mx-auto">Capabilities</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">From Long-Term Data to Trusted Knowledge</h2></AnimatedBlock><AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{capabilities.map((item) => { const Icon = item.icon; return <div key={item.title} className="premium-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p></div>; })}</AnimatedStagger></Container></section><section className="bg-[#eef4fa] py-20"><Container><div className="rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12"><p className="premium-eyebrow mx-auto">Next Step</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">Evaluate Your Knowledge Infrastructure Deployment Path</h2><p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">Spark AI can help assess data scale, retention cycles, retrieval needs, governance requirements, and local AI deployment options.</p><Button asChild variant="spark" size="lg" className="mt-8 rounded-[18px]"><Link href="/contact">Contact Spark AI <ArrowRight aria-hidden="true" /></Link></Button></div></Container></section></main>;
}