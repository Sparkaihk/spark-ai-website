import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Boxes,
  BrainCircuit,
  Building2,
  ClipboardList,
  Cpu,
  Database,
  Factory,
  FileArchive,
  FileSearch,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  Image,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Knowledge Infrastructure | Spark AI",
  description:
    "Spark AI Knowledge Infrastructure transforms cold enterprise data into governed, AI-ready and monetizable knowledge assets.",
  alternates: { canonical: "/solutions/ai-data-asset-bank" },
};

const kpis = [
  { value: "100PB+", label: "Cold data scale", icon: Database },
  { value: "50+ Years", label: "Long-term archive horizon", icon: Archive },
  { value: "Enterprise Ready", label: "Governed deployment", icon: ShieldCheck },
  { value: "Multi-modal AI", label: "Documents, images, audio and video", icon: BrainCircuit },
  { value: "RAG Native", label: "Built for enterprise retrieval", icon: FileSearch },
  { value: "AI Agent Enabled", label: "Actionable knowledge workflows", icon: Sparkles },
];

const valueChain = [
  { title: "Cold Data", icon: Archive },
  { title: "Metadata", icon: Database },
  { title: "Knowledge Base", icon: FileSearch },
  { title: "Enterprise RAG", icon: Network },
  { title: "AI Agents", icon: BrainCircuit },
  { title: "Data Assets", icon: Banknote },
  { title: "Business Value", icon: Scale },
];

const capabilities = [
  {
    title: "Data Inventory",
    icon: ClipboardList,
    description:
      "Identify and classify enterprise data across departments, repositories and historical systems, creating a clear map of what can be preserved, governed, retrieved and converted into AI-ready assets.",
  },
  {
    title: "Metadata Governance",
    icon: Database,
    description:
      "Attach structured metadata, ownership, permissions, source lineage and lifecycle rules to every dataset so cold data becomes accountable, searchable and audit-ready.",
  },
  {
    title: "AI-ready Knowledge Assets",
    icon: Sparkles,
    description:
      "Convert documents, records, images and media into searchable enterprise knowledge through parsing, OCR, enrichment, indexing and governed knowledge-base workflows.",
  },
  {
    title: "Secure Retrieval",
    icon: Search,
    description:
      "Enable controlled access through hybrid search, vector retrieval and permission-aware RAG so teams and agents can retrieve useful context without breaking security boundaries.",
  },
  {
    title: "Asset Valuation",
    icon: Scale,
    description:
      "Track usage, reuse, knowledge demand and business impact signals to support future data valuation, management reporting and internal asset portfolio planning.",
  },
  {
    title: "Lifecycle Management",
    icon: Workflow,
    description:
      "Manage data from collection to archive, activation, reuse, compliance and future valuation through one lifecycle connected to Spark knowledge infrastructure for the AI era.",
  },
];

const assetLayers = [
  {
    title: "Raw Data Layer",
    icon: Archive,
    description: "Enterprise archives, documents, images, videos, records and historical exports are preserved as the raw material for future AI value.",
  },
  {
    title: "Metadata Layer",
    icon: Database,
    description: "Ownership, source, access policy, quality, retention period and lineage make data governable, searchable and auditable.",
  },
  {
    title: "Knowledge Layer",
    icon: FileSearch,
    description: "Parsed and indexed content becomes reusable enterprise knowledge for employees, applications and domain-specific RAG.",
  },
  {
    title: "AI Service Layer",
    icon: BrainCircuit,
    description: "Enterprise RAG and AI agents retrieve trusted context from governed knowledge assets to support private AI workflows.",
  },
  {
    title: "Asset Value Layer",
    icon: Banknote,
    description: "Usage, reuse, business impact and future valuation signals reveal where enterprise data creates measurable value.",
  },
];

const scenarios = [
  { title: "Government Archives", icon: Landmark },
  { title: "Healthcare Records", icon: HeartPulse },
  { title: "Financial Compliance", icon: Building2 },
  { title: "Manufacturing Knowledge", icon: Factory },
  { title: "Education Resources", icon: GraduationCap },
  { title: "Media Archives", icon: Image },
];

const governance = [
  { title: "Data Ownership", icon: Fingerprint, description: "Clarify source, owner, responsible team and approved usage for every important dataset." },
  { title: "Access Control", icon: KeyRound, description: "Apply role, department and project permissions across retrieval, RAG and AI agent workflows." },
  { title: "Audit Trail", icon: FileSearch, description: "Track retrieval, source references, knowledge usage and model-facing interactions." },
  { title: "Compliance-ready Preservation", icon: BadgeCheck, description: "Preserve records with retention policies, immutable storage options and governance evidence." },
];

const whySpark = [
  { title: "Cold Data Infrastructure", icon: Archive, description: "Built on PB-scale preservation and lifecycle management for long-retained enterprise data." },
  { title: "Enterprise RAG Integration", icon: Network, description: "Connect governed assets to retrieval, vector search and trusted enterprise AI answers." },
  { title: "Knowledge Archive Long-term Archive", icon: FileArchive, description: "Preserve critical records and AI history with durable, low-power cold archive options." },
  { title: "AI Agent Enablement", icon: BrainCircuit, description: "Enable agents to act on trusted, permission-aware knowledge assets and workflows." },
];

const comparison = [
  ["Primary role", "Stores files and archives", "Turns cold data into governed, searchable AI assets"],
  ["Metadata", "Limited file-level metadata", "Ownership, lineage, permissions, retention and value signals"],
  ["AI readiness", "Requires separate processing", "Built-in parsing, indexing, RAG and AI agent activation"],
  ["Governance", "Storage policy focused", "Access control, audit trails, lifecycle and compliance workflows"],
  ["Business value", "Cost center", "Reusable knowledge asset portfolio with valuation potential"],
];

const businessModel = [
  { title: "Hardware", icon: Server, description: "Edge appliances, storage nodes and enterprise cold data infrastructure." },
  { title: "Enterprise Software", icon: Layers3, description: "Data inventory, governance, metadata, lifecycle and asset management software." },
  { title: "RAG Platform", icon: FileSearch, description: "Private enterprise retrieval, vector search and trusted AI knowledge services." },
  { title: "AI Agent", icon: Cpu, description: "Domain agents that act on governed knowledge assets and enterprise workflows." },
  { title: "Managed Service", icon: ShieldCheck, description: "Deployment, operation, data onboarding and long-term optimization services." },
];

function HorizontalValueChain() {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-5 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl">
      <div className="overflow-x-auto">
        <div className="grid min-w-[1120px] grid-cols-7 items-center gap-3">
          {valueChain.map((item, index) => (
            <div key={item.title} className="relative">
              <div className="rounded-[22px] border border-sky-100 bg-white/76 p-4 text-center shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
                <div className="mx-auto flex size-11 items-center justify-center rounded-[16px] bg-sky-50 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-semibold leading-5 text-foreground">{item.title}</p>
              </div>
              {index < valueChain.length - 1 ? <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-semibold text-primary xl:block">→</div> : null}
            </div>
          ))}
        </div>
      </div>
    </AnimatedBlock>
  );
}

function EnterpriseArchitectureSvg() {
  return (
    <AnimatedBlock className="mt-10 overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-4 shadow-[0_28px_90px_rgba(37,99,235,0.14)] backdrop-blur-2xl sm:p-6">
      <svg viewBox="0 0 980 560" role="img" aria-label="AI Knowledge Infrastructure enterprise architecture" className="h-auto w-full">
        <defs>
          <linearGradient id="asset-arch-line" x1="0" x2="1">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="980" height="560" rx="30" fill="#f8fbff" />
        <g opacity="0.45" stroke="#bfdbfe" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => <path key={`h-${i}`} d={`M46 ${62 + i * 40}H934`} />)}
          {Array.from({ length: 12 }).map((_, i) => <path key={`v-${i}`} d="M70 42V518" transform={`translate(${i * 76} 0)`} />)}
        </g>
        {[
          ["Cold Data Sources", 70, 80, 210, 76],
          ["Metadata & Governance", 385, 80, 210, 76],
          ["Knowledge Assets", 700, 80, 210, 76],
          ["Knowledge Archive", 70, 270, 210, 76],
          ["Enterprise RAG", 385, 270, 210, 76],
          ["AI Agents", 700, 270, 210, 76],
          ["Asset Portfolio", 280, 420, 420, 70],
        ].map(([label, x, y, w, h]) => (
          <g key={label as string}>
            <rect x={Number(x)} y={Number(y)} width={Number(w)} height={Number(h)} rx="20" fill="#ffffff" stroke="#bfdbfe" />
            <text x={Number(x) + Number(w) / 2} y={Number(y) + Number(h) / 2 + 7} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="700" fill="#0f172a">
              {label}
            </text>
          </g>
        ))}
        <path d="M280 118H385M595 118H700M175 156V270M490 156V270M805 156V270M280 308H385M595 308H700M490 346V420M175 346C250 418 285 430 330 455M805 346C730 418 695 430 650 455" fill="none" stroke="url(#asset-arch-line)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </AnimatedBlock>
  );
}

function AssetModelDiagram() {
  return (
    <AnimatedBlock className="mt-10 rounded-[28px] border border-white/75 bg-white/60 p-5 shadow-[0_24px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
      <div className="grid gap-4">
        {assetLayers.map((layer, index) => (
          <div key={layer.title} className="rounded-[22px] border border-sky-100 bg-white/74 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_rgba(37,99,235,0.12)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[18px] bg-primary text-white">
                <layer.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Layer {index + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{layer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBlock>
  );
}

export default function AiDataAssetBankPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#dbeafe_0%,transparent_40%),linear-gradient(180deg,#f8fbff_0%,#edf7ff_54%,#ffffff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-50 [mask-image:linear-gradient(180deg,black_0%,black_60%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-7rem] h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-2xl" />
        <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-[20px] border border-sky-200/80 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-xl">
                Data Asset Infrastructure
              </p>
              <h1 className="mt-7 max-w-5xl text-[2.7rem] font-semibold leading-[1.03] tracking-normal text-foreground sm:text-[4.15rem] lg:text-[5rem]">
                AI Knowledge Infrastructure
              </h1>
              <p className="mt-5 max-w-[760px] text-xl font-semibold leading-[1.5] text-primary sm:text-2xl">
                Transform cold enterprise data into governed, AI-ready and monetizable knowledge assets.
              </p>
              <p className="mt-5 max-w-[760px] text-[16px] leading-[1.8] text-muted-foreground sm:text-[18px]">
                Spark AI converts dormant archives, records and media into searchable knowledge, AI services and reusable asset portfolios for enterprise value creation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px] shadow-[0_16px_45px_rgba(37,99,235,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.28)]">
                  <Link href="/contact">
                    Book Demo
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] border-sky-100 bg-white/72 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]">
                  <a href="#architecture">Explore Architecture</a>
                </Button>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.1} className="rounded-[28px] border border-white/75 bg-white/58 p-5 shadow-[0_30px_100px_rgba(37,99,235,0.16)] backdrop-blur-2xl">
              <div className="grid gap-4">
                {["Cold Data", "Knowledge Assets", "Enterprise RAG", "AI Agents", "Business Value"].map((item, index) => (
                  <div key={item} className="rounded-[20px] border border-sky-100 bg-white/76 p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-[14px] bg-primary text-sm font-semibold text-white">{index + 1}</span>
                      <span className="text-lg font-semibold text-foreground">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedBlock>
          </div>

          <AnimatedStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {kpis.map((item) => (
              <div key={item.value} className="rounded-[22px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_55px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-[0_28px_90px_rgba(37,99,235,0.16)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <p className="mt-4 text-2xl font-semibold leading-tight text-foreground">{item.value}</p>
                <p className="mt-2 text-xs font-medium leading-5 text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[900px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Investor Thesis</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Cold data is becoming the next enterprise AI asset class.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
              Most enterprise data is trapped in long-term archives, compliance systems, file repositories and media stores. AI Knowledge Infrastructure adds the missing business layer: governance, metadata, retrieval, RAG, AI agent enablement and asset value tracking.
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="architecture" className="relative overflow-hidden bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <div className="absolute inset-0 spark-grid opacity-35" />
        <Container className="relative z-10">
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Value Chain</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">From cold data to enterprise value</h2>
          </AnimatedBlock>
          <HorizontalValueChain />
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Enterprise Architecture</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">A governed architecture for AI-ready data assets</h2>
          </AnimatedBlock>
          <EnterpriseArchitectureSvg />
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Core Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Built for data governance, AI activation and value creation</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group rounded-[24px] border border-white/75 bg-white/62 p-6 shadow-[0_18px_60px_rgba(37,99,235,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]">
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

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Enterprise Data Asset Model</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">A layered model for AI-ready data assets</h2>
          </AnimatedBlock>
          <AssetModelDiagram />
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Comparison</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Traditional Storage vs Knowledge Infrastructure</h2>
          </AnimatedBlock>
          <AnimatedBlock className="mt-10 overflow-hidden rounded-[24px] border border-white/75 bg-white/70 shadow-[0_24px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-sky-50 text-foreground">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Category</th>
                    <th className="px-5 py-4 font-semibold">Traditional Storage</th>
                    <th className="px-5 py-4 font-semibold">Knowledge Infrastructure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100">
                  {comparison.map(([category, storage, bank]) => (
                    <tr key={category} className="transition hover:bg-sky-50/70">
                      <td className="px-5 py-4 font-semibold text-foreground">{category}</td>
                      <td className="px-5 py-4 text-muted-foreground">{storage}</td>
                      <td className="px-5 py-4 text-primary">{bank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[780px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Business Model</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Multiple revenue layers from one data asset platform</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {businessModel.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Industry Scenarios</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Where cold data becomes enterprise value</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {scenarios.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-6 text-center shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="mx-auto size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Governance & Security</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Controls for trusted data assetization</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {governance.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-sky-100 bg-white p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Why Spark AI?</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">Infrastructure for the data asset era</h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whySpark.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/75 bg-white/62 p-6 shadow-spark-sm backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="rounded-[28px] border border-sky-100 bg-primary p-8 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] sm:p-10">
            <Banknote className="mx-auto size-8 text-blue-100" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              Turn your enterprise data into AI-ready assets.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px] bg-white text-primary hover:bg-blue-50">
                <Link href="/contact">Book Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
