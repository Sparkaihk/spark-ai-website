import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Archive,
  Banknote,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  FileSearch,
  Layers3,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export const metadata: Metadata = {
  title: "Spark AI Appliance | Spark AI",
  description:
    "Spark AI Appliance unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, long-term archive, and trust governance.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

const overviewStats = [
  { value: "6", label: "Integrated infrastructure layers" },
  { value: "Local-first", label: "Deployment model for enterprise control" },
  { value: "Long-term", label: "Knowledge retention and reuse lifecycle" },
];

const whyItems = [
  {
    title: "Built for enterprise knowledge, not isolated files",
    body: "The appliance organizes data, metadata, retrieval policy, and governance into a durable knowledge infrastructure layer.",
  },
  {
    title: "Designed for private AI deployment",
    body: "Compute and retrieval stay close to controlled enterprise data, reducing exposure while keeping AI workflows operational.",
  },
  {
    title: "Connects archive economics with AI utility",
    body: "Long-retention data can move from dormant storage into governed, attributable AI memory without losing lifecycle controls.",
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI Compute",
    body: "Local accelerated compute for private retrieval, embedding, reranking, and knowledge workflow execution.",
  },
  {
    icon: Layers3,
    title: "Intelligent Tiered Storage",
    body: "Policy-based placement across performance, capacity, and archive tiers for cost-aware knowledge retention.",
  },
  {
    icon: Archive,
    title: "Long-Term Archive",
    body: "Durable preservation for institutional records, datasets, media, documents, and regulated information.",
  },
  {
    icon: FileSearch,
    title: "Enterprise Retrieval",
    body: "Governed search and retrieval that grounds AI outputs in attributable source materials and metadata.",
  },
  {
    icon: BrainCircuit,
    title: "AI Agent Runtime",
    body: "Knowledge-aware workflows that can operate with controlled data access, audit trails, and policy boundaries.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Governance",
    body: "Access control, integrity, retention, auditability, and lifecycle policy for production AI knowledge systems.",
  },
];

const architectureSteps = [
  { title: "Enterprise Data", body: "Documents, records, media, databases, and domain knowledge." },
  { title: "Intelligent Storage", body: "Hot, warm, cold, and archive tiers governed by policy." },
  { title: "Retrieval Layer", body: "Indexing, metadata, search, attribution, and knowledge grounding." },
  { title: "AI Agent Layer", body: "Controlled workflows using trusted enterprise context." },
  { title: "Knowledge Archive", body: "Reusable institutional memory with long-term governance." },
];

const specifications = [
  ["Deployment", "On-premise or controlled private environment"],
  ["Core layers", "AI compute, storage tiering, retrieval, agent runtime, archive, trust governance"],
  ["Data scope", "Documents, records, datasets, media assets, knowledge bases, and operational files"],
  ["Governance", "Access policy, retention policy, audit trail, integrity controls, lifecycle management"],
  ["Integration path", "Enterprise storage, identity, retrieval APIs, knowledge applications, and AI workflows"],
  ["Primary use", "Turning long-term enterprise information into trusted AI memory"],
];

const industries = [
  {
    icon: Building2,
    title: "Enterprise Headquarters",
    body: "Preserve documents, project history, operational records, and expert knowledge for reusable AI workflows.",
  },
  {
    icon: Banknote,
    title: "Financial Services",
    body: "Support governed retrieval across policy archives, research, compliance files, and customer knowledge assets.",
  },
  {
    icon: Scale,
    title: "Government and Public Sector",
    body: "Protect long-term records and institutional knowledge while enabling controlled AI-assisted access.",
  },
  {
    icon: Factory,
    title: "Industrial Operations",
    body: "Connect maintenance records, engineering documentation, quality data, and operational history to AI agents.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <AnimatedBlock className="mx-auto max-w-3xl text-center">
      <p className="premium-eyebrow mx-auto">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">{body}</p> : null}
    </AnimatedBlock>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/78 p-5 shadow-[0_28px_80px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(37,99,235,0.12),transparent_18rem),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_20rem)]" />
      <div className="relative grid gap-4 lg:grid-cols-5">
        {architectureSteps.map((step, index) => (
          <div key={step.title} className="relative rounded-[22px] border border-sky-100/90 bg-white/82 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              {index < architectureSteps.length - 1 ? (
                <ArrowRight className="hidden size-5 text-sky-300 lg:block" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
              )}
            </div>
            <h3 className="text-base font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SparkAiAppliancePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <AnimatedBlock>
              <p className="premium-eyebrow">{applianceName}</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                Knowledge Infrastructure Appliance for the AI Era
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {applianceName} unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents,
                long-term archival, and trust governance in one platform.
              </p>
              <p className="mt-5 text-lg font-semibold text-primary">Memory for AI. Trust for Tomorrow.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[18px]">
                  <Link href="/contact">
                    Book Product Demo <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[18px] bg-white/75">
                  <Link href="/architecture">View Architecture</Link>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock className="relative overflow-hidden rounded-[34px] border border-sky-100 bg-[linear-gradient(135deg,#eff8ff,#ffffff_52%,#e6f6ff)] p-6 shadow-[0_30px_90px_rgba(37,99,235,0.14)]">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-sky-200/50 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[28px] border border-white bg-white/74 p-6 backdrop-blur-xl">
                <div className="flex min-h-36 items-center justify-center rounded-[24px] bg-slate-950 text-center text-2xl font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                  Spark AI Appliance
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {["Compute", "Retrieve", "Archive", "Govern"].map((item) => (
                    <div key={item} className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Product Overview"
            title="A Local Knowledge Infrastructure Layer for Enterprise AI"
            body="Spark AI Appliance brings together storage economics, controlled retrieval, AI execution, and governance so organizations can convert long-term information into trusted AI memory."
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-3">
            {overviewStats.map((item) => (
              <div key={item.label} className="premium-card p-6 text-center">
                <div className="text-3xl font-semibold text-primary">{item.value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow={`Why ${applianceName}`}
            title="Built for the Moment When Enterprise Data Becomes AI Memory"
          />
          <AnimatedStagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="premium-card p-7">
                <LockKeyhole className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Six Core Capabilities"
            title="One Appliance, Six Infrastructure Functions"
            body="Each layer is designed to work together rather than becoming another isolated tool in the enterprise AI stack."
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-6">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow="Knowledge Architecture"
            title="From Enterprise Data to Governed Knowledge"
            body="The appliance creates a controlled flow from raw enterprise information into searchable, attributable, and reusable AI knowledge."
          />
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <AnimatedBlock>
              <p className="premium-eyebrow">Technical Specifications</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Deployment-Ready Infrastructure for Controlled AI Workloads
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-slate-600">
                Specifications are organized around enterprise deployment decisions: data control, integration,
                governance, and long-term knowledge lifecycle.
              </p>
            </AnimatedBlock>
            <AnimatedBlock className="overflow-hidden rounded-[28px] border border-sky-100 bg-white/80 shadow-sm backdrop-blur-xl">
              {specifications.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-sky-100/80 px-5 py-4 last:border-b-0 sm:grid-cols-[0.34fr_0.66fr]">
                  <div className="text-sm font-semibold text-slate-950">{label}</div>
                  <div className="text-sm leading-6 text-slate-600">{value}</div>
                </div>
              ))}
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow="Industry Applications"
            title="For Organizations Where Knowledge Has Long-Term Value"
            body="Spark AI Appliance is designed for teams that need to preserve, search, govern, and activate high-value information over long time horizons."
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-7">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12">
            <p className="premium-eyebrow mx-auto">CTA</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Evaluate Your Knowledge Infrastructure Deployment Path
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
              Spark AI can help assess data scale, retention cycles, retrieval needs, governance requirements, and
              local AI deployment options.
            </p>
            <Button asChild variant="spark" size="lg" className="mt-8 rounded-[18px]">
              <Link href="/contact">
                Contact Spark AI <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
