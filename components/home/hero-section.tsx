import Image from "next/image";
import Link from "next/link";

import "@/components/home/home-hero-layout.css";

export function HeroSection() {
  return (
    <section className="homeHero" aria-labelledby="home-hero-title">
      <h1 id="home-hero-title" className="sr-only">
        Knowledge Infrastructure for the AI Era
      </h1>
      <p className="sr-only">
        Spark AI Appliance transforms enterprise data into trusted knowledge for AI applications and long-term archival.
      </p>

      <div className="homeHeroArtworkFrame">
        <Image
          src="/images/home/homepage-hero-v3-final.png"
          alt="Spark AI knowledge infrastructure: enterprise data flows through Spark AI Appliance into the knowledge layer, AI applications, and long-term archive."
          fill
          priority
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="homeHeroArtwork"
        />
        <Link
          href="/products/spark-ai-appliance"
          className="homeHeroHotspot homeHeroHotspotProduct"
          aria-label="Explore Spark AI Appliance"
        />
        <Link
          href="/contact"
          className="homeHeroHotspot homeHeroHotspotDemo"
          aria-label="Schedule a demo"
        />
      </div>

      <div className="homeHeroMobileActions" aria-label="Hero actions">
        <Link href="/products/spark-ai-appliance">Explore Spark AI Appliance</Link>
        <Link href="/contact">Schedule Demo</Link>
      </div>
    </section>
  );
}
