import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/design-system/container";
import { BilingualImage, type BilingualAlt } from "@/components/site/bilingual-image";
import { LocalizedSvgText } from "@/components/site/localized-svg-text";
import { LocalizedText } from "@/components/site/localized-text";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";

export type Bilingual = { zh: string; en: string };
export type ShellCard = { title: Bilingual; body: Bilingual; icon: LucideIcon };
export type ShellSection = { eyebrow: Bilingual; title: Bilingual; body: Bilingual; cards: ShellCard[]; image?: { src: string; alt: BilingualAlt } };
export type InvestorShellProps = {
  eyebrow: Bilingual;
  title: Bilingual;
  subtitle: Bilingual;
  diagram: string[];
  sections: ShellSection[];
  ctaTitle?: Bilingual;
  heroImage?: { src: string; alt: BilingualAlt };
  heroHighlights?: Bilingual[];
};

const diagramZh: Record<string, string> = {
  Data: "数据", Metadata: "元数据", Storage: "存储", Retrieval: "智能检索", Agents: "AI 智能体", Governance: "治理",
  Compute: "算力", Archive: "归档", Trust: "可信治理", Vision: "愿景", Mission: "使命", Product: "产品", Ecosystem: "生态",
  Value: "价值", Principles: "原则", "White Papers": "白皮书", Architecture: "架构", Research: "研究", Contact: "联系",
};

function MiniArchitecture({ items }: { items: string[] }) {
  return (
    <div className="premium-visual relative overflow-hidden rounded-[30px] p-5">
      <svg viewBox="0 0 820 420" role="img" className="relative h-auto w-full">
        <LocalizedText as="title" zh="知识基础设施架构图" en="Knowledge infrastructure architecture" />
        <rect x="1" y="1" width="818" height="418" rx="30" fill="#f8fbff" stroke="#dbeafe" />
        <path d="M104 210H716" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" strokeDasharray="14 14" />
        {items.map((item, index) => {
          const x = 42 + index * (736 / Math.max(items.length - 1, 1));
          const y = index % 2 === 0 ? 112 : 232;
          return <g key={item}><path d={`M${x + 54} ${y + 34}V210`} stroke="#93c5fd" strokeWidth="2" /><rect x={x} y={y} width="108" height="68" rx="20" fill="#ffffff" stroke="#dbeafe" /><LocalizedSvgText zh={diagramZh[item] ?? item} en={item} x={x + 54} y={y + 40} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a" /></g>;
        })}
      </svg>
    </div>
  );
}

function ResponsiveProductImage({ src, alt, priority = false }: { src: string; alt: BilingualAlt; priority?: boolean }) {
  return <div className="premium-visual relative overflow-hidden rounded-3xl border border-blue-100/40 bg-white/70 p-2 shadow-xl"><BilingualImage src={src} alt={alt} width={1536} height={960} priority={priority} sizes="(min-width: 1024px) 52vw, 100vw" className="h-auto w-full rounded-[1.35rem] object-cover" /></div>;
}

export function InvestorShell({ eyebrow, title, subtitle, diagram, sections, ctaTitle, heroImage, heroHighlights }: InvestorShellProps) {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="hero-shell pb-14 pt-12 sm:pb-18"><Container className="relative z-10"><div className="grid gap-10 lg:grid-cols-[0.47fr_0.53fr] lg:items-center"><div><p className="premium-eyebrow"><LocalizedText zh={eyebrow.zh} en={eyebrow.en} /></p><h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.06] text-slate-950 sm:text-[4.25rem]"><LocalizedText zh={title.zh} en={title.en} /></h1><p className="mt-6 max-w-[760px] text-[16px] leading-[1.85] text-slate-600 sm:text-[18px]"><LocalizedText zh={subtitle.zh} en={subtitle.en} /></p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="spark" size="lg" className="rounded-[18px]"><Link href="/contact"><T id="common.scheduleDemo" /><ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75"><Link href="/resources"><T id="common.viewResources" /></Link></Button></div></div><div>{heroImage ? <ResponsiveProductImage src={heroImage.src} alt={heroImage.alt} priority /> : <MiniArchitecture items={diagram} />}{heroHighlights?.length ? <div className="mt-4 grid gap-3 sm:grid-cols-2">{heroHighlights.map((item) => <div key={item.en} className="rounded-2xl border border-blue-100/60 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"><LocalizedText zh={item.zh} en={item.en} /></div>)}</div> : null}</div></div></Container></section>
      {sections.map((section, index) => <section key={section.title.en} className={index % 2 === 0 ? "premium-section py-18 sm:py-20" : "bg-spark-surface-1 py-18 sm:py-20"}><Container><div className="mx-auto max-w-[840px] text-center"><p className="premium-eyebrow mx-auto"><LocalizedText zh={section.eyebrow.zh} en={section.eyebrow.en} /></p><h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl"><LocalizedText zh={section.title.zh} en={section.title.en} /></h2><p className="mt-5 text-[16px] leading-[1.85] text-slate-600"><LocalizedText zh={section.body.zh} en={section.body.en} /></p></div>{section.image ? <div className="mx-auto mt-10 max-w-6xl"><ResponsiveProductImage src={section.image.src} alt={section.image.alt} /></div> : null}<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{section.cards.map((card) => { const Icon = card.icon; return <div key={card.title.en} className="premium-card p-6"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold text-slate-950"><LocalizedText zh={card.title.zh} en={card.title.en} /></h3><p className="mt-4 text-sm leading-[1.8] text-slate-600"><LocalizedText zh={card.body.zh} en={card.body.en} /></p></div>; })}</div></Container></section>)}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] py-16"><Container><div className="rounded-[32px] border border-sky-100 bg-white/75 p-8 text-center shadow-[0_34px_110px_rgba(37,99,235,0.16)] backdrop-blur-xl sm:p-12"><CheckCircle2 className="mx-auto size-8 text-primary" aria-hidden="true" /><h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl"><LocalizedText zh={ctaTitle?.zh ?? "准备好构建 AI 时代的知识基础设施了吗？"} en={ctaTitle?.en ?? "Ready to Build Your Knowledge Infrastructure for the AI Era?"} /></h2><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="spark" size="lg" className="rounded-[18px]"><Link href="/contact"><T id="common.scheduleDemo" /></Link></Button><Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/80"><Link href="/contact"><T id="common.contactUs" /></Link></Button></div></div></Container></section>
    </main>
  );
}
