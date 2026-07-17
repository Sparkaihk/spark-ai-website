import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  Database,
  FileText,
  Factory,
  Film,
  GraduationCap,
  HeartPulse,
  Landmark,
  Network,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { HeroSection } from "@/components/home/hero-section";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";
import type { TranslationKey } from "@/i18n/dictionary";

export const metadata: Metadata = {
  title: "Knowledge Infrastructure for the AI Era",
  description:
    "Spark AI helps organizations preserve, activate and continuously create value from their knowledge.",
  alternates: { canonical: "/" },
};

const knowledgeFlow: Array<{ icon: typeof Database; label: TranslationKey }> = [
  { icon: Database, label: "home.flow.enterpriseData" },
  { icon: Server, label: "home.flow.appliance" },
  { icon: Network, label: "home.flow.infrastructure" },
  { icon: Sparkles, label: "home.flow.applications" },
  { icon: Archive, label: "home.flow.archive" },
];

const industries: Array<{ icon: typeof HeartPulse; title: TranslationKey; body: TranslationKey }> = [
  { icon: HeartPulse, title: "home.industry.healthcare.title", body: "home.industry.healthcare.body" },
  { icon: Landmark, title: "home.industry.government.title", body: "home.industry.government.body" },
  { icon: WalletCards, title: "home.industry.finance.title", body: "home.industry.finance.body" },
  { icon: Factory, title: "home.industry.manufacturing.title", body: "home.industry.manufacturing.body" },
  { icon: GraduationCap, title: "home.industry.education.title", body: "home.industry.education.body" },
  { icon: Film, title: "home.industry.media.title", body: "home.industry.media.body" },
];

const institutionalData: Array<{ icon: typeof Database; label: TranslationKey }> = [
  { icon: FileText, label: "home.map.documents" },
  { icon: HeartPulse, label: "home.map.medicalImages" },
  { icon: Factory, label: "home.map.cadPlm" },
  { icon: Film, label: "home.map.videoAudio" },
  { icon: Database, label: "home.map.databases" },
  { icon: Network, label: "home.map.iotLogs" },
];

const knowledgeLayer: Array<{ icon: typeof Database; label: TranslationKey }> = [
  { icon: Sparkles, label: "home.map.aiMemory" },
  { icon: Network, label: "home.map.knowledgeGraph" },
  { icon: Search, label: "home.map.vectorSearch" },
  { icon: Database, label: "home.map.semantics" },
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: TranslationKey; title: TranslationKey; body?: TranslationKey }) {
  return (
    <AnimatedBlock className="mx-auto max-w-3xl text-center">
      <T id={eyebrow} as="p" className="premium-eyebrow mx-auto" />
      <T id={title} as="h2" className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl" />
      {body ? <T id={body} as="p" className="mt-5 text-[16px] leading-[1.85] text-slate-600" /> : null}
    </AnimatedBlock>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] text-slate-950">
      <HeroSection />

      <section className="border-y border-sky-100 bg-white py-16 sm:py-20">
        <Container>
          <T id="home.map.enterpriseData" as="h2" className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary" />
          <AnimatedStagger className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {institutionalData.map((item) => {
              const Icon = item.icon;
              return <div key={item.label} className="premium-card flex min-h-28 flex-col items-center justify-center p-4 text-center"><Icon className="size-6 text-primary" aria-hidden="true" /><T id={item.label} as="h3" className="mt-3 text-sm font-semibold text-slate-950" /></div>;
            })}
          </AnimatedStagger>

          <AnimatedBlock className="mx-auto mt-7 max-w-4xl rounded-[28px] border border-blue-200 bg-[linear-gradient(135deg,#eff6ff,#ffffff)] p-7 text-center shadow-spark-sm">
            <Server className="mx-auto size-8 text-primary" aria-hidden="true" />
            <p className="mt-3 text-xl font-semibold text-slate-950">Spark AI Appliance™</p>
            <T id="home.map.applianceCore" as="p" className="mt-2 text-sm text-slate-600" />
          </AnimatedBlock>

          <T id="home.map.knowledgeLayer" as="h2" className="mt-9 text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary" />
          <AnimatedStagger className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {knowledgeLayer.map((item) => {
              const Icon = item.icon;
              return <div key={item.label} className="rounded-[22px] border border-sky-100 bg-sky-50/70 p-5 text-center"><Icon className="mx-auto size-5 text-primary" aria-hidden="true" /><T id={item.label} as="h3" className="mt-3 text-sm font-semibold text-slate-950" /></div>;
            })}
          </AnimatedStagger>

          <div className="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-2">
            <AnimatedBlock className="rounded-[22px] border border-sky-100 bg-white p-5">
              <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
              <T id="home.map.enterpriseSecurity" as="h3" className="mt-3 text-lg font-semibold text-slate-950" />
              <T id="home.map.securityBody" as="p" className="mt-2 text-sm text-slate-600" />
            </AnimatedBlock>
            <AnimatedBlock className="rounded-[22px] border border-sky-100 bg-white p-5">
              <Landmark className="size-6 text-primary" aria-hidden="true" />
              <T id="home.map.dataGovernance" as="h3" className="mt-3 text-lg font-semibold text-slate-950" />
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader eyebrow="home.why.eyebrow" title="home.why.title" />
          <AnimatedBlock className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-8 text-slate-600">
            <T id="home.why.p1" as="p" />
            <T id="home.why.p2" as="p" />
            <T id="home.why.p3" as="p" />
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-20">
        <Container>
          <SectionHeader eyebrow="home.appliance.eyebrow" title="home.appliance.title" />
          <AnimatedBlock className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-sky-100 bg-white/80 p-8 shadow-sm backdrop-blur-xl sm:p-10">
            <p className="text-[16px] leading-8 text-slate-600">
              <T id="home.appliance.p1" />
            </p>
            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              <T id="home.appliance.p2" />
            </p>
            <Button asChild variant="spark" className="mt-7 rounded-[18px]">
              <Link href="/products/spark-ai-appliance">
                <T id="home.appliance.cta" /> <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader
            eyebrow="home.flow.eyebrow"
            title="home.flow.title"
            body="home.flow.description"
          />
          <AnimatedStagger className="mx-auto mt-12 grid max-w-6xl items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
            {knowledgeFlow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="contents">
                  <div className="premium-card flex min-h-36 flex-col items-center justify-center p-5 text-center">
                    <Icon className="size-7 text-primary" aria-hidden="true" />
                    <T id={item.label} as="h3" className="mt-4 text-sm font-semibold leading-6 text-slate-950" />
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
            eyebrow="home.industries.eyebrow"
            title="home.industries.title"
            body="home.industries.description"
          />
          <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card p-6">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <T id={item.title} as="h3" className="mt-5 text-xl font-semibold text-slate-950" />
                  <T id={item.body} as="p" className="mt-4 text-sm leading-7 text-slate-600" />
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <SectionHeader eyebrow="home.belief.eyebrow" title="home.belief.title" />
          <AnimatedBlock className="mx-auto mt-10 max-w-3xl rounded-[36px] border border-blue-100 bg-white/78 p-8 text-center shadow-sm backdrop-blur-xl sm:p-12">
            <div className="space-y-4 text-[16px] leading-8 text-slate-600">
              <T id="home.belief.p1" as="p" />
              <T id="home.belief.p2" as="p" />
              <T id="home.belief.p3" as="p" />
              <T id="home.belief.p4" as="p" />
              <T id="home.belief.p5" as="p" className="font-semibold text-slate-950" />
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
