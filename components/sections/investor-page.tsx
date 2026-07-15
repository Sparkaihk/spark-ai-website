import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export type Bilingual = {
  zh: string;
  en: string;
};

export type InvestorCard = {
  title: Bilingual;
  body: Bilingual;
  icon: LucideIcon;
};

export type InvestorPageProps = {
  eyebrow: Bilingual;
  title: Bilingual;
  subtitle: Bilingual;
  primaryCta?: Bilingual;
  primaryHref?: string;
  secondaryCta?: Bilingual;
  secondaryHref?: string;
  diagram: string[];
  heroImage?: {
    src: string;
    alt: string;
  };
  sections: Array<{
    eyebrow: Bilingual;
    title: Bilingual;
    body: Bilingual;
    cards: InvestorCard[];
  }>;
};

function FlowDiagram({ items }: { items: string[] }) {
  return (
    <div className="premium-visual relative overflow-hidden rounded-[28px] p-5 sm:p-6">
      <svg viewBox="0 0 760 380" role="img" aria-label={items.join(" to ")} className="h-auto w-full">
        <defs>
          <linearGradient id="flow-line" x1="0" x2="1">
            <stop stopColor="#2563eb" stopOpacity="0.95" />
            <stop offset="0.52" stopColor="#06b6d4" stopOpacity="0.92" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0.95" />
          </linearGradient>
          <filter id="flow-shadow" x="-30%" y="-40%" width="160%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#2563eb" floodOpacity="0.16" />
          </filter>
        </defs>
        <rect x="1" y="1" width="758" height="378" rx="30" fill="#f8fbff" stroke="#dbeafe" />
        <path d="M106 190H654" fill="none" stroke="url(#flow-line)" strokeWidth="5" strokeLinecap="round" />
        {items.map((item, index) => {
          const x = 42 + index * (676 / Math.max(items.length - 1, 1));
          const y = index % 2 === 0 ? 108 : 222;
          return (
            <g key={item} filter="url(#flow-shadow)">
              <path d={`M${x + 54} ${y + 34}V190`} stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
              <rect x={x} y={y} width="108" height="68" rx="20" fill="#ffffff" stroke="#dbeafe" />
              <circle cx={x + 24} cy={y + 24} r="10" fill={index === items.length - 1 ? "#2563eb" : "#e0f2fe"} />
              <text x={x + 54} y={y + 39} textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a">
                {item}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="premium-visual relative aspect-video overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/75 p-2 shadow-xl">
      <Image
        src={src}
        alt={alt}
        width={3840}
        height={2160}
        priority
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="h-full w-full rounded-[1.35rem] object-cover"
      />
    </div>
  );
}

export function InvestorPage({
  eyebrow,
  title,
  subtitle,
  primaryCta = { zh: "了解更多", en: "Learn More" },
  primaryHref = "/contact",
  secondaryCta = { zh: "联系 Spark AI", en: "Contact Spark AI" },
  secondaryHref = "/contact",
  diagram,
  heroImage,
  sections,
}: InvestorPageProps) {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="hero-shell pb-16 pt-12 sm:pb-20 lg:pt-16">
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <AnimatedBlock>
              <p className="premium-eyebrow">
                <LocalizedText zh={eyebrow.zh} en={eyebrow.en} />
              </p>
              <h1 className="mt-6 text-[2.65rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[4.4rem] lg:text-[5rem]">
                <LocalizedText zh={title.zh} en={title.en} />
              </h1>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.85] text-muted-foreground sm:text-[19px]">
                <LocalizedText zh={subtitle.zh} en={subtitle.en} />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px]">
                  <Link href={primaryHref}>
                    <LocalizedText zh={primaryCta.zh} en={primaryCta.en} />
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px]">
                  <Link href={secondaryHref}>
                    <LocalizedText zh={secondaryCta.zh} en={secondaryCta.en} />
                    <Mail aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.08}>
              {heroImage ? <HeroImage src={heroImage.src} alt={heroImage.alt} /> : <FlowDiagram items={diagram} />}
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      {sections.map((section, index) => (
        <section key={section.title.en} className={index % 2 === 0 ? "premium-section py-18 sm:py-20 lg:py-24" : "bg-spark-surface-1 py-18 sm:py-20 lg:py-24"}>
          <Container>
            <AnimatedBlock className="mx-auto max-w-[840px] text-center">
              <p className="premium-eyebrow mx-auto">
                <LocalizedText zh={section.eyebrow.zh} en={section.eyebrow.en} />
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                <LocalizedText zh={section.title.zh} en={section.title.en} />
              </h2>
              <p className="mt-5 text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
                <LocalizedText zh={section.body.zh} en={section.body.en} />
              </p>
            </AnimatedBlock>
            <AnimatedStagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {section.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title.en} className="group premium-card p-6">
                    <div className="flex size-12 items-center justify-center rounded-[18px] border border-sky-100 bg-sky-50/90 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
                      <LocalizedText zh={card.title.zh} en={card.title.en} />
                    </h3>
                    <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">
                      <LocalizedText zh={card.body.zh} en={card.body.en} />
                    </p>
                  </div>
                );
              })}
            </AnimatedStagger>
          </Container>
        </section>
      ))}

      <section className="bg-white py-18 sm:py-20 lg:py-24">
        <Container>
          <AnimatedBlock className="premium-cta rounded-[32px] p-8 text-center text-white sm:p-12">
            <CheckCircle2 className="mx-auto size-8" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              <LocalizedText zh="与 Spark AI 建设 AI 时代知识基础设施" en="Build Knowledge Infrastructure for the AI Era with Spark AI." />
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px]">
                <Link href="/contact">
                  <LocalizedText zh="预约演示" en="Request Demo" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <Link href="/">
                  <ArrowLeft aria-hidden="true" />
                  <LocalizedText zh="返回首页" en="Back Home" />
                </Link>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
