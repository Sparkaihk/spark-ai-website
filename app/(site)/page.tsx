import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  Database,
  Factory,
  Film,
  GraduationCap,
  HeartPulse,
  Landmark,
  Network,
  Server,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { HeroSection } from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";

const applianceName = "Spark AI Appliance\u2122";

export const metadata: Metadata = {
  title: "Knowledge Infrastructure for the AI Era",
  description:
    "Spark AI helps organizations preserve, activate and continuously create value from their knowledge.",
  alternates: { canonical: "/" },
};

const knowledgeFlow = [
  { icon: Database, label: "Enterprise Data" },
  { icon: Server, label: applianceName },
  { icon: Network, label: "Knowledge Infrastructure" },
  { icon: Sparkles, label: "AI Applications" },
  { icon: Archive, label: "Long-term Archive" },
];

const industries = [
  { icon: HeartPulse, title: "Healthcare", body: "Medical images, patient records and clinical knowledge." },
  { icon: Landmark, title: "Government", body: "Archives, public records and digital governance." },
  { icon: WalletCards, title: "Finance", body: "Compliance, document retention and enterprise intelligence." },
  { icon: Factory, title: "Manufacturing", body: "Engineering drawings, CAD files and digital twins." },
  { icon: GraduationCap, title: "Education", body: "Research data, institutional knowledge and AI learning." },
  { icon: Film, title: "Media", body: "Video assets, creative archives and content intelligence." },
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <AnimatedBlock className="mx-auto max-w-3xl text-center">
      <p className="premium-eyebrow mx-auto">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">{body}</p> : null}
    </AnimatedBlock>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] text-slate-950">
      <HeroSection />

      <section className="premium-section py-20">
        <Container>
          <SectionHeader eyebrow="Why Knowledge Infrastructure" title="Why Knowledge Infrastructure Matters" />
          <AnimatedBlock className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-8 text-slate-600">
            <p>Artificial Intelligence is advancing rapidly, but its long-term value depends on trusted knowledge.</p>
            <p>
              Across governments, healthcare, finance, manufacturing, education and media, enormous amounts of valuable
              information remain isolated in documents, images, videos and legacy systems.
            </p>
            <p>
              Spark AI transforms these fragmented assets into a unified knowledge infrastructure that enables retrieval,
              governance and intelligent collaboration.
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader eyebrow="Spark AI Appliance" title="The Physical Foundation of Knowledge Infrastructure" />
          <AnimatedBlock className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-sky-100 bg-white/80 p-8 shadow-sm backdrop-blur-xl sm:p-10">
            <p className="text-[16px] leading-8 text-slate-600">
              {applianceName} integrates AI computing, intelligent tiered storage, enterprise retrieval and governance into
              a single platform.
            </p>
            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              It enables organizations to preserve knowledge, accelerate AI adoption and build long-term digital memory.
            </p>
            <Button asChild variant="spark" className="mt-7 rounded-[18px]">
              <Link href="/products/spark-ai-appliance">
                Explore {applianceName} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="Knowledge Flow"
            title="From Enterprise Data to Trusted Knowledge"
            body="Every piece of enterprise knowledge should remain searchable, trustworthy and valuable across generations."
          />
          <AnimatedStagger className="mx-auto mt-12 grid max-w-6xl items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
            {knowledgeFlow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="contents">
                  <div className="premium-card flex min-h-36 flex-col items-center justify-center p-5 text-center">
                    <Icon className="size-7 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-sm font-semibold leading-6 text-slate-950">{item.label}</h3>
                  </div>
                  {index < knowledgeFlow.length - 1 ? (
                    <ArrowDown className="mx-auto size-5 text-primary md:-rotate-90" aria-hidden="true" />
                  ) : null}
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Knowledge Belongs Everywhere"
            body="Spark AI provides knowledge infrastructure for organizations across multiple industries."
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => {
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

      <section className="premium-section py-20">
        <Container>
          <SectionHeader eyebrow="Our Belief" title="Our Belief" />
          <AnimatedBlock className="mx-auto mt-10 max-w-3xl rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12">
            <div className="space-y-4 text-[16px] leading-8 text-slate-600">
              <p>Knowledge is one of the world&apos;s most valuable assets.</p>
              <p>Every organization creates knowledge every day.</p>
              <p>The challenge is not creating knowledge.</p>
              <p>The challenge is preserving it, connecting it and enabling it to create value over time.</p>
              <p className="font-semibold text-slate-950">Spark AI is building the infrastructure that makes this possible.</p>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
