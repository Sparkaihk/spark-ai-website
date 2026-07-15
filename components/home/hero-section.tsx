"use client";

import "@/components/home/home-hero-layout.css";

import { HeroActions } from "@/components/home/hero-actions";
import { KnowledgeFlowAnimation } from "@/components/home/knowledge-flow-animation";
import { LocalizedText } from "@/components/site/localized-text";

const applianceName = "Spark AI Appliance\u2122";

export function HeroSection() {
  return (
    <section className="homeHero">
      <div className="home-hero-background absolute inset-0" aria-hidden="true" />
      <div className="home-hero-grid absolute inset-0" aria-hidden="true" />
      <div className="homeHeroInner">
        <div className="homeHeroCopy">
          <div className="homeHeroCopyItem inline-flex items-center rounded-full border border-sky-100 bg-white/74 px-4 py-2 text-sm font-semibold text-primary shadow-[0_12px_34px_rgba(37,99,235,0.08)] backdrop-blur-xl">Memory for AI. Trust for Tomorrow.</div>
          <p className="homeHeroCopyItem mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"><LocalizedText zh="Knowledge Infrastructure for the AI Era" en="Knowledge Infrastructure for the AI Era" /></p>
          <h1 className="homeHeroCopyItem mt-4"><LocalizedText zh={<><span>Knowledge Infrastructure</span><span className="text-primary">for the AI Era.</span></>} en={<><span>Knowledge Infrastructure</span><span className="text-primary">for the AI Era.</span></>} /></h1>
          <p className="homeHeroCopyItem homeHeroDescription"><LocalizedText zh={`${applianceName} unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, and long-term archival to transform enterprise data into governed reusable knowledge.`} en={`${applianceName} unifies AI compute, intelligent tiered storage, enterprise retrieval, AI Agents, and long-term archival to transform enterprise data into governed reusable knowledge.`} /></p>
          <div className="homeHeroCopyItem"><HeroActions /></div>
        </div>
        <div className="homeHeroVisual">
          <KnowledgeFlowAnimation />
        </div>
      </div>
    </section>
  );
}
