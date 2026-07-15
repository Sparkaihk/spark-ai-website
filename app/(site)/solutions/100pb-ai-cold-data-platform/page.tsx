import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Banknote,
  BookOpen,
  Building2,
  Database,
  Factory,
  FileDown,
  FileSearch,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "100PB Knowledge Infrastructure for the AI Era | Spark AI",
  description:
    "Enterprise-scale infrastructure for preserving, governing and activating AI-ready cold data across the full PB-scale data lifecycle.",
  alternates: { canonical: "/solutions/100pb-ai-cold-data-platform" },
};

const lifecycle = [
  { label: "Data Collection", short: "DATA", width: 330 },
  { label: "AI Processing", short: "AI", width: 300 },
  { label: "Tiered Storage", short: "TIER", width: 330 },
  { label: "Blu-ray Cold Archive", short: "BLUE", width: 370 },
  { label: "Enterprise RAG", short: "RAG", width: 310 },
  { label: "AI Agents", short: "AGENT", width: 260 },
];

const capabilities = [
  {
    title: "Intelligent Tiering",
    icon: Layers3,
    description:
      "Automatically classify hot, warm and cold datasets by access frequency, governance policy and AI value. Spark AI helps enterprises move PB-scale data into the right storage layer without losing retrieval paths, ownership context or future model-training utility.",
  },
  {
    title: "Blu-ray Cold Archive",
    icon: Archive,
    description:
      "Use low-power optical cold storage for long-retention records, historical AI datasets, compliance evidence and immutable archives. The Blu-ray layer is designed to reduce power demand while preserving important enterprise data for decades.",
  },
  {
    title: "Metadata Management",
    icon: Database,
    description:
      "Maintain metadata, lineage, permissions, retention policies and source references across the data lifecycle. This allows cold data to remain searchable, auditable and ready for AI use instead of becoming invisible legacy storage.",
  },
  {
    title: "AI-ready Retrieval",
    icon: Search,
    description:
      "Connect full-text search, vector retrieval, OCR and RAG workflows so archived documents, media, scans and historical files can be activated as enterprise knowledge. Teams can retrieve trusted context without moving raw data into public systems.",
  },
  {
    title: "Data Governance",
    icon: ShieldCheck,
    description:
      "Apply access control, audit trails, retention rules and compliance workflows to AI-ready datasets. Spark AI gives enterprises a governed foundation for training data, RAG knowledge bases, AI agents and long-term data asset management.",
  },
];

const benefits = [
  { title: "Lower TCO", icon: Banknote, description: "Shift low-access datasets to economical cold tiers and reduce long-term storage cost." },
  { title: "Low Power", icon: Zap, description: "Lower energy demand through optical archive and intelligent data lifecycle policies." },
  { title: "Immutable Storage", icon: LockKeyhole, description: "Protect records and AI history with tamper-resistant archive workflows." },
  { title: "Long-term Preservation", icon: Snowflake, description: "Keep enterprise data durable, searchable and compliant over decades." },
  { title: "AI-ready Knowledge", icon: FileSearch, description: "Activate cold data through RAG, retrieval APIs and enterprise AI agents." },
];

const industries = [
  { title: "Government", icon: Landmark },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Building2 },
  { title: "Education", icon: GraduationCap },
  { title: "Manufacturing", icon: Factory },
];

function LifecycleDiagram() {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-4 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl sm:p-6">
      <svg viewBox="0 0 900 760" role="img" aria-label="100PB AI cold data lifecycle diagram" className="h-auto w-full">
        <defs>
          <linearGradient id="cold-panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.74" />
          </linearGradient>
          <linearGradient id="cold-line" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <filter id="cold-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#2563eb" floodOpacity="0.14" />
          </filter>
        </defs>
        <rect x="1" y="1" width="898" height="758" rx="32" fill="url(#cold-panel)" stroke="#dbeafe" />
        <g opacity="0.45" stroke="#bfdbfe" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, index) => (
            <path key={`h-${index}`} d={`M70 ${72 + index * 54}H830`} />
          ))}
          {Array.from({ length: 11 }).map((_, index) => (
            <path key={`v-${index}`} d="M90 48V710" transform={`translate(${index * 72} 0)`} />
          ))}
        </g>
        <path d="M450 138V632" stroke="url(#cold-line)" strokeWidth="5" strokeLinecap="round" strokeDasharray="10 12" />
        {lifecycle.slice(0, -1).map((_, index) => {
          const y = 148 + index * 102;
          return <path key={y} d={`M436 ${y}l14 18 14-18`} fill="#2563eb" />;
        })}
        {lifecycle.map((item, index) => {
          const y = 70 + index * 102;
          const x = 450 - item.width / 2;
          const active = index === 0 || index === lifecycle.length - 1;
          return (
            <g key={item.label} filter="url(#cold-shadow)">
              <rect x={x} y={y} width={item.width} height="68" rx="22" fill="#ffffff" stroke={active ? "#93c5fd" : "#dbeafe"} />
              <rect x={x + 18} y={y + 16} width="42" height="36" rx="12" fill={active ? "#2563eb" : "#eff6ff"} />
              <text x={x + 39} y={y + 39} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize={item.short.length > 3 ? "10" : "13"} fontWeight="700" fill={active ? "#ffffff" : "#2563eb"}>
                {item.short}
              </text>
              <text x={x + 78} y={y + 43} fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700" fill="#0f172a">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </AnimatedBlock>
  );
}

export default function ColdDataPlatformPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dbeafe_0%,transparent_40%),linear-gradient(180deg,#f8fbff_0%,#edf7ff_54%,#ffffff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-50 [mask-image:linear-gradient(180deg,black_0%,black_60%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-7rem] h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-2xl" />
        <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <AnimatedBlock>
              <p className="mx-auto inline-flex rounded-[20px] border border-sky-200/80 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-xl">
                Solution
              </p>
              <h1 className="mx-auto mt-7 max-w-5xl text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[4.1rem] lg:text-[5rem]">
                100PB Knowledge Infrastructure for the AI Era
              </h1>
              <p className="mx-auto mt-5 max-w-[760px] text-xl font-semibold leading-[1.5] text-primary sm:text-2xl">
                Enterprise-scale infrastructure for preserving, governing and activating AI-ready data.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px] shadow-[0_16px_45px_rgba(37,99,235,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.28)]">
                  <Link href="/contact">
                    Book Demo
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] border-sky-100 bg-white/72 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]">
                  <a href="mailto:info@sparkai.hk?subject=100PB%20AI%20Cold%20Data%20Platform%20White%20Paper">
                    Download White Paper
                    <FileDown aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[880px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Platform Overview</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Manage the full lifecycle of PB-scale AI data.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
              Spark AI 100PB Knowledge Infrastructure for the AI Era helps enterprises preserve, govern and activate large-scale historical data for AI. The platform combines collection workflows, AI processing, intelligent tiered storage, Blu-ray cold archive, metadata governance, Enterprise RAG and AI Agents so organizations can turn long-retained data into searchable, auditable and AI-ready knowledge assets.
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-spark-surface-1 py-16 sm:py-20">
        <div className="absolute inset-0 spark-grid opacity-35" />
        <Container className="relative z-10">
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Data Lifecycle Diagram</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">From collection to AI agents</h2>
          </AnimatedBlock>
          <LifecycleDiagram />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Five Core Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Cold data infrastructure built for AI</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {capabilities.map((item) => (
              <div key={item.title} className="group rounded-[24px] border border-sky-100 bg-white/72 p-6 shadow-[0_18px_60px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]">
                <div className="flex size-12 items-center justify-center rounded-[18px] border border-sky-100 bg-sky-50/85 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Benefits</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Designed for cost, control and AI activation</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-5 shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Industries</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Enterprise sectors with long data horizons</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 text-center shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="mx-auto size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="rounded-[28px] border border-white/70 bg-primary p-8 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] sm:p-10">
            <BookOpen className="mx-auto size-8 text-blue-100" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              Build a 100PB cold data foundation for enterprise AI.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px] bg-white text-primary hover:bg-blue-50">
                <Link href="/contact">Book Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <a href="mailto:info@sparkai.hk?subject=100PB%20AI%20Cold%20Data%20Platform%20White%20Paper">Download White Paper</a>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
