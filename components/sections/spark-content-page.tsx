import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export type Bilingual = { zh: string; en: string };
export type ContentSection = { title: Bilingual; body: Bilingual; bullets?: Bilingual[] };
export type TableData = { headers: Bilingual[]; rows: Bilingual[][] };
export type CaseItem = { title: Bilingual; body: Bilingual };

export type ContentPageData = {
  slug: string;
  href: string;
  title: Bilingual;
  eyebrow: Bilingual;
  description: Bilingual;
  seoDescription: string;
  heroPoints: Bilingual[];
  sections: ContentSection[];
  illustration: "cold-data" | "optical" | "rag" | "bank" | "edge" | "storage" | "technology" | "cases" | "about";
  table?: TableData;
  cases?: CaseItem[];
  timeline?: Bilingual[];
  faqs: ContentSection[];
  related: Bilingual[];
};

function TechIllustration({ type }: { type: ContentPageData["illustration"] }) {
  const labels: Record<ContentPageData["illustration"], string[]> = {
    "cold-data": ["Hot", "Warm", "Cold", "100PB"],
    optical: ["WORM", "Archive", "50Y+", "Low Power"],
    rag: ["Search", "Vector", "Graph", "LLM"],
    bank: ["Govern", "Value", "Rights", "Trade"],
    edge: ["GPU", "RTX", "Infer", "Offline"],
    storage: ["NVMe", "HDD", "Optical", "Object"],
    technology: ["AI Lake", "RAG", "LLM", "Knowledge"],
    cases: ["Health", "Gov", "Finance", "Research"],
    about: ["Vision", "Mission", "Value", "Milestone"],
  };

  return (
    <svg viewBox="0 0 720 460" role="img" aria-label="Spark AI technology illustration" className="h-auto w-full">
      <defs>
        <linearGradient id={`bg-${type}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id={`line-${type}`} x1="0" x2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id={`shadow-${type}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#2563eb" floodOpacity="0.16" />
        </filter>
      </defs>
      <rect width="720" height="460" rx="28" fill={`url(#bg-${type})`} />
      <g opacity="0.45" stroke="#93c5fd" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, index) => <path key={`h-${index}`} d={`M40 ${70 + index * 32}H680`} />)}
        {Array.from({ length: 10 }).map((_, index) => <path key={`v-${index}`} d={`M80 40V420`} transform={`translate(${index * 62} 0)`} />)}
      </g>
      <path d="M112 234C190 138 276 132 360 222S525 334 614 206" fill="none" stroke={`url(#line-${type})`} strokeWidth="6" strokeLinecap="round" strokeDasharray="14 18" />
      <g filter={`url(#shadow-${type})`}>
        <rect x="72" y="86" width="180" height="108" rx="20" fill="#ffffff" stroke="#bfdbfe" />
        <rect x="270" y="176" width="180" height="108" rx="20" fill="#ffffff" stroke="#bfdbfe" />
        <rect x="468" y="86" width="180" height="108" rx="20" fill="#ffffff" stroke="#bfdbfe" />
        <rect x="180" y="306" width="360" height="76" rx="20" fill="#ffffff" stroke="#bfdbfe" />
      </g>
      <g fill="#0f172a" fontFamily="Arial, sans-serif" fontWeight="700">
        <text x="104" y="130" fontSize="24">{labels[type][0]}</text>
        <text x="302" y="220" fontSize="24">{labels[type][1]}</text>
        <text x="500" y="130" fontSize="24">{labels[type][2]}</text>
        <text x="306" y="352" fontSize="24">{labels[type][3]}</text>
      </g>
      <g fill="#2563eb">
        <circle cx="162" cy="164" r="10" />
        <circle cx="360" cy="254" r="10" />
        <circle cx="558" cy="164" r="10" />
        <circle cx="360" cy="330" r="10" />
      </g>
      <g stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.9">
        <path d="M252 140h68M450 230h68M360 284v22" />
      </g>
    </svg>
  );
}

function ArchitectureSvg() {
  const nodes = ["NVMe", "HDD", "Optical", "Object Storage", "AI Data Lake", "RAG", "LLM", "Enterprise KB"];
  return (
    <div className="mt-8 overflow-hidden rounded-[20px] border border-sky-100 bg-white p-4 shadow-spark-sm">
      <svg viewBox="0 0 980 520" role="img" aria-label="Spark AI full architecture diagram" className="h-auto w-full">
        <defs>
          <linearGradient id="arch-line" x1="0" x2="1">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="980" height="520" rx="28" fill="#f8fbff" />
        <g stroke="#dbeafe" strokeWidth="1">
          {Array.from({ length: 13 }).map((_, i) => <path key={`a${i}`} d={`M40 ${60 + i * 34}H940`} />)}
          {Array.from({ length: 12 }).map((_, i) => <path key={`b${i}`} d="M70 40V480" transform={`translate(${i * 76} 0)`} />)}
        </g>
        {nodes.map((node, i) => {
          const x = i < 4 ? 72 + i * 218 : 72 + (i - 4) * 218;
          const y = i < 4 ? 98 : 314;
          return (
            <g key={node}>
              <rect x={x} y={y} width="168" height="92" rx="18" fill="#fff" stroke="#bfdbfe" />
              <text x={x + 84} y={y + 54} textAnchor="middle" fontFamily="Arial" fontSize="19" fontWeight="700" fill="#0f172a">{node}</text>
              <circle cx={x + 84} cy={y + 78} r="6" fill="#2563eb" />
            </g>
          );
        })}
        <path d="M156 190V260H810V314M374 190V260M592 190V260M810 190V314M156 260V314M374 260V314M592 260V314" fill="none" stroke="url(#arch-line)" strokeWidth="5" strokeLinecap="round" />
        <rect x="360" y="226" width="260" height="68" rx="18" fill="#eff6ff" stroke="#93c5fd" />
        <text x="490" y="268" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="700" fill="#1d4ed8">Policy + Metadata + Security</text>
      </svg>
    </div>
  );
}

export function SparkContentPage({ page }: { page: ContentPageData }) {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-60" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="size-4" aria-hidden="true" />
            <span className="text-foreground"><LocalizedText zh={page.title.zh} en={page.title.en} /></span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-[20px] border border-sky-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
                <LocalizedText zh={page.eyebrow.zh} en={page.eyebrow.en} />
              </p>
              <h1 className="mt-6 text-[2.2rem] font-semibold leading-[1.08] tracking-normal text-foreground sm:text-[3.4rem]">
                <LocalizedText zh={page.title.zh} en={page.title.en} />
              </h1>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.75] text-muted-foreground sm:text-[18px]">
                <LocalizedText zh={page.description.zh} en={page.description.en} />
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px]">
                  <Link href="/contact">
                    <LocalizedText zh="立即聯絡 Spark AI" en="Contact Spark AI" />
                    <Mail aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] bg-white">
                  <Link href="/">
                    <ArrowLeft aria-hidden="true" />
                    <LocalizedText zh="返回首頁" en="Back to Home" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.08} className="rounded-[24px] border border-sky-100 bg-white/80 p-3 shadow-spark-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(37,99,235,0.18)]">
              <TechIllustration type={page.illustration} />
            </AnimatedBlock>
          </div>
          <AnimatedStagger className="mt-12 grid gap-4 md:grid-cols-3">
            {page.heroPoints.map((point) => (
              <div key={point.en} className="rounded-[20px] border border-sky-100 bg-white/92 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-spark-sm">
                <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold leading-6 text-foreground"><LocalizedText zh={point.zh} en={point.en} /></p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {page.sections.map((section, index) => (
              <AnimatedBlock key={section.title.en} delay={Math.min(index * 0.03, 0.18)} className="rounded-[20px] border border-sky-100 bg-white p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(37,99,235,0.12)]">
                <h2 className="text-2xl font-semibold leading-tight text-foreground"><LocalizedText zh={section.title.zh} en={section.title.en} /></h2>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground"><LocalizedText zh={section.body.zh} en={section.body.en} /></p>
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet.en} className="flex gap-3 text-sm font-medium leading-6 text-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <span><LocalizedText zh={bullet.zh} en={bullet.en} /></span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </AnimatedBlock>
            ))}
          </div>

          {page.illustration === "technology" ? <ArchitectureSvg /> : null}

          {page.table ? (
            <AnimatedBlock className="mt-10 overflow-hidden rounded-[20px] border border-sky-100 bg-white shadow-spark-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-sky-50 text-foreground">
                    <tr>{page.table.headers.map((header) => <th key={header.en} className="px-5 py-4 font-semibold"><LocalizedText zh={header.zh} en={header.en} /></th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-sky-100">
                    {page.table.rows.map((row) => (
                      <tr key={row.map((cell) => cell.en).join("-")} className="transition hover:bg-sky-50/70">
                        {row.map((cell) => <td key={cell.en} className="px-5 py-4 text-muted-foreground"><LocalizedText zh={cell.zh} en={cell.en} /></td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedBlock>
          ) : null}

          {page.cases ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.cases.map((item) => (
                <AnimatedBlock key={item.title.en} className="rounded-[20px] border border-sky-100 bg-sky-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-spark-sm">
                  <h2 className="text-xl font-semibold text-foreground"><LocalizedText zh={item.title.zh} en={item.title.en} /></h2>
                  <p className="mt-4 text-sm leading-[1.85] text-muted-foreground"><LocalizedText zh={item.body.zh} en={item.body.en} /></p>
                </AnimatedBlock>
              ))}
            </div>
          ) : null}

          {page.timeline ? (
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {page.timeline.map((item, index) => (
                <AnimatedBlock key={item.en} className="rounded-[20px] border border-sky-100 bg-sky-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-spark-sm">
                  <p className="text-2xl font-semibold text-primary">{2025 + index}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-foreground"><LocalizedText zh={item.zh} en={item.en} /></p>
                </AnimatedBlock>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground"><LocalizedText zh="常見問題" en="Frequently Asked Questions" /></h2>
          </AnimatedBlock>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <AnimatedBlock key={faq.title.en} className="rounded-[20px] border border-sky-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground"><LocalizedText zh={faq.title.zh} en={faq.title.en} /></h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground"><LocalizedText zh={faq.body.zh} en={faq.body.en} /></p>
              </AnimatedBlock>
            ))}
          </div>

          <AnimatedBlock className="mt-10 rounded-[20px] border border-sky-100 bg-white p-6 shadow-spark-sm">
            <h2 className="text-2xl font-semibold text-foreground"><LocalizedText zh="關聯方案" en="Related Solutions" /></h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((item) => (
                <Link key={item.en} href={relatedHref(item.en)} className="rounded-[20px] border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">
                  <LocalizedText zh={item.zh} en={item.en} />
                </Link>
              ))}
            </div>
          </AnimatedBlock>

          <AnimatedBlock className="mt-10 rounded-[24px] bg-primary p-8 text-center text-white shadow-spark-md">
            <h2 className="text-3xl font-semibold"><LocalizedText zh="立即聯絡 Spark AI" en="Contact Spark AI Today" /></h2>
            <p className="mx-auto mt-4 max-w-[680px] text-sm leading-7 text-blue-50">
              <LocalizedText zh="與我們討論 AI 冷數據中心、RAG 知識平台、光學存儲與數據資產化方案，建立可擴展、低成本、安全合規的企業 AI 基礎設施。" en="Talk to us about AI cold data centers, RAG knowledge platforms, optical storage, and data assetization infrastructure for scalable enterprise AI." />
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-6 rounded-[20px] bg-white text-primary hover:bg-blue-50">
              <Link href="/contact">
                Contact Us
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}

function relatedHref(name: string) {
  const map: Record<string, string> = {
    "AI Cold Data Center": "/solutions/ai-cold-data",
    "Optical Storage": "/solutions/optical-storage",
    "AI Knowledge Platform": "/solutions/rag",
    "Data Asset Bank": "/solutions/data-bank",
    "Edge AI": "/solutions/edge-ai",
    "Storage Products": "/products/storage",
    "Technology Architecture": "/technology",
    Cases: "/cases",
    "About Spark AI": "/about",
  };
  return map[name] ?? "/";
}
