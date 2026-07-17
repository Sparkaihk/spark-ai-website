import Link from "next/link";

import "@/components/home/home-hero-layout.css";
import { T } from "@/components/site/translated-text";
import { BilingualImage } from "@/components/site/bilingual-image";

export function HeroSection() {
  return (
    <section className="homeHero" aria-labelledby="home-hero-title">
      <div className="homeHeroCopyOverlay">
        <h1 id="home-hero-title">
          <T id="home.hero.titlePrimary" as="span" />
          <T id="home.hero.titleSecondary" as="span" />
        </h1>
        <T id="home.hero.description" as="p" />
        <div className="homeHeroActions">
          <Link href="/products/spark-ai-appliance"><T id="home.hero.primaryCta" /></Link>
          <Link href="/contact"><T id="home.hero.secondaryCta" /></Link>
        </div>
      </div>

      <div className="homeHeroArtworkFrame">
        <BilingualImage
          src="/images/visual-upgrade/home-hero-v1.png"
          alt={{
            en: "Spark AI knowledge infrastructure: enterprise data flows through Spark AI Appliance into the knowledge layer, AI applications, and long-term archive.",
            zh: "Spark AI 知识基础设施：企业数据经 Spark AI 一体机流向知识层、AI 应用与长期归档。",
          }}
          fill
          priority
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="homeHeroArtwork"
        />
      </div>
    </section>
  );
}
