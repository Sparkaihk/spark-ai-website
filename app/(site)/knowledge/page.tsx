import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Layers3 } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Knowledge Center | Spark AI Digital Headquarters",
  description: "Spark AI Knowledge Center for principles, white papers, product documents, architecture notes and industry research.",
};

const categories = ["Principles", "White Papers", "Product Documents", "Architecture Notes", "Industry Research"];

export default function KnowledgePage() {
  return <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950"><section className="hero-shell py-20"><Container><AnimatedBlock className="mx-auto max-w-4xl text-center"><p className="premium-eyebrow mx-auto">Knowledge Center</p><h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl"><LocalizedText zh="知识中心" en="Knowledge Center" /></h1><p className="mt-6 text-lg leading-8 text-slate-600"><LocalizedText zh="这里汇集 Spark AI 的原则、白皮书、产品文档、架构笔记与行业研究。已批准材料可通过 Spark AI 咨询流程获取。" en="A central place for Spark AI principles, white papers, product documents, architecture notes and industry research. Approved materials are available through Spark AI consultation." /></p></AnimatedBlock></Container></section><section className="premium-section py-20"><Container><AnimatedStagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{categories.map((item, index) => { const Icon = index === 0 ? Layers3 : index === 1 ? BookOpen : FileText; return <div key={item} className="premium-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><h2 className="mt-5 text-xl font-semibold text-slate-950">{item}</h2><p className="mt-4 text-sm leading-7 text-slate-600">Approved Spark AI materials are available through consultation and partner review.</p><Button asChild variant="outline" className="mt-5 rounded-[16px] bg-white/75"><Link href="/contact">Request Access <ArrowRight aria-hidden="true" /></Link></Button></div>; })}</AnimatedStagger></Container></section></main>;
}
