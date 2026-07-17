import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Radio } from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedImage } from "@/components/site/localized-image";
import { LocalizedText } from "@/components/site/localized-text";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";
import { knowledgeResources } from "@/lib/knowledge-resources";

export const metadata: Metadata = {
  title: "Knowledge Center | Spark AI",
  description:
    "The official Spark AI library for principles, research, product documentation, architecture, security, and governance.",
};

export default function KnowledgePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-4xl text-center">
            <T id="knowledge.eyebrow" as="p" className="premium-eyebrow mx-auto" />
            <T id="knowledge.title" as="h1" className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl" />
            <T id="knowledge.description" as="p" className="mt-6 text-lg leading-8 text-slate-600" />
          </AnimatedBlock>
          <AnimatedBlock delay={0.08} className="mx-auto mt-12 max-w-6xl">
            <div className="premium-visual relative aspect-video overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/75 p-2 shadow-xl">
              <LocalizedImage
                src="/images/visual-upgrade/knowledge-infrastructure-hero-v2.png"
                altKey="knowledge.heroAlt"
                width={1672}
                height={941}
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
          <AnimatedStagger className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {knowledgeResources.map((resource) => {
              const Icon = resource.icon;
              const isPublic = resource.access === "public";

              return (
                <article key={resource.id} className="premium-card flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/80 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {isPublic ? <Radio className="size-3.5 text-primary" aria-hidden="true" /> : <LockKeyhole className="size-3.5 text-primary" aria-hidden="true" />}
                      <LocalizedText en={isPublic ? "Public" : "Controlled access"} zh={isPublic ? "公开资源" : "受控资料"} />
                    </span>
                  </div>
                  <LocalizedText
                    en={resource.title.en}
                    zh={resource.title.zh}
                    as="h2"
                    className="mt-5 text-xl font-semibold leading-snug text-slate-950"
                  />
                  <LocalizedText
                    en={resource.description.en}
                    zh={resource.description.zh}
                    as="p"
                    className="mt-4 flex-1 text-[15px] leading-7 text-slate-600"
                  />
                  <Button asChild variant="outline" className="mt-6 w-fit rounded-[16px] bg-white/75">
                    <Link href={resource.href}>
                      <LocalizedText en={resource.cta.en} zh={resource.cta.zh} />
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>
    </main>
  );
}
