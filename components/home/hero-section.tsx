import Image from "next/image";
import Link from "next/link";

import "@/components/home/home-hero-layout.css";

export function HeroSection() {
  return (
    <section className="homeHero" aria-labelledby="home-hero-title">
      <div className="homeHeroCopyOverlay">
        <h1 id="home-hero-title">
          <span>Knowledge Infrastructure</span>
          <span>for the AI Era</span>
        </h1>
        <p>
          Spark AI helps organizations preserve, activate and continuously create value from their knowledge.
        </p>
        <div className="homeHeroActions" aria-label="Hero actions">
          <Link href="/products/spark-ai-appliance">Explore Spark AI Appliance{"\u2122"}</Link>
          <Link href="/contact">Schedule Demo</Link>
        </div>
      </div>

      <div className="homeHeroArtworkFrame">
        <Image
          src="/images/home/homepage-hero-v3-final.png"
          alt="Spark AI knowledge infrastructure: enterprise data flows through Spark AI Appliance into the knowledge layer, AI applications, and long-term archive."
          fill
          priority
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="homeHeroArtwork"
        />
      </div>
    </section>
  );
}
