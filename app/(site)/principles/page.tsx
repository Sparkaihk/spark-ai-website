import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedImage } from "@/components/site/localized-image";
import { LocalizedText } from "@/components/site/localized-text";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";
import { principleCards } from "@/lib/principles";

export const metadata: Metadata = {
  title: "Spark AI Principles | Knowledge Infrastructure for the AI Era",
  description:
    "The principles behind Spark AI's trusted, sovereign, and enduring knowledge infrastructure for the AI era.",
};

export default function PrinciplesPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-4xl text-center">
            <T id="principles.eyebrow" as="p" className="premium-eyebrow mx-auto" />
            <T id="principles.title" as="h1" className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl" />
            <T id="principles.lead1" as="p" className="mt-6 text-lg leading-8 text-slate-600" />
            <T id="principles.lead2" as="p" className="mt-4 text-lg leading-8 text-slate-600" />
          </AnimatedBlock>
          <AnimatedBlock delay={0.08} className="mx-auto mt-12 max-w-6xl">
            <div className="premium-visual relative aspect-video overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/75 p-2 shadow-xl">
              <LocalizedImage
                src="/images/visual-upgrade/principles-hero-v1.png"
                altKey="principles.heroAlt"
                width={3840}
                height={2160}
                priority
                sizes="(min-width: 1024px) 72vw, 100vw"
                className="h-full w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <AnimatedStagger className="grid items-stretch gap-5 md:grid-cols-2">
            {principleCards.map((principle) => (
              <article key={principle.id} className="premium-card flex h-full flex-col p-6 sm:p-8">
                <Sparkles className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <LocalizedText
                  en={principle.titleEn}
                  zh={principle.titleZh}
                  as="h2"
                  className="mt-5 text-xl font-semibold leading-snug text-slate-950 sm:text-2xl"
                />
                <LocalizedText
                  en={<span className="block leading-[1.7]">{principle.descriptionEn}</span>}
                  zh={<span className="block leading-[1.85]">{principle.descriptionZh}</span>}
                  as="p"
                  className="mt-4 max-w-2xl text-[15px] text-slate-600 sm:text-base"
                />
              </article>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-14">
        <Container>
          <div className="text-center">
            <Button asChild variant="spark" className="rounded-[18px]">
              <Link href="/contact">
                <T id="principles.contact" /> <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
