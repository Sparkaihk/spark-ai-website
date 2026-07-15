import Image from "next/image";

import { LocalizedText } from "@/components/site/localized-text";
import { dataSources, knowledgeCapabilities } from "@/data/home-knowledge-flow";

const productImage = "/images/rtx-spark/investor-hero-final-v1.png";
const applianceName = "Spark AI Appliance\u2122";

export function HeroMachineAnimation() {
  return (
    <div className="hero-machine-animation" aria-label={`${applianceName} data flow`}>
      <div className="hero-machine-grid" aria-hidden="true" />
      <div className="hero-machine-capability-tags">
        <span>AI Compute</span><span>Tiered Storage</span><span>Enterprise Retrieval</span><span>Governed Archive</span>
      </div>
      <div className="hero-machine-core" aria-hidden="true" />
      <div className="hero-machine-product"><Image src={productImage} alt={applianceName} fill priority sizes="(min-width: 1280px) 38vw, (min-width: 768px) 58vw, 92vw" className="object-contain" /></div>
      <div className="hero-machine-base" aria-hidden="true" />
      <div className="hero-machine-nodes hero-machine-nodes-left">{dataSources.slice(0, 5).map((item) => <div key={item.en} className="hero-machine-node"><span aria-hidden="true" /><LocalizedText zh={item.zh} en={item.en} /></div>)}</div>
      <div className="hero-machine-nodes hero-machine-nodes-right">{knowledgeCapabilities.slice(0, 5).map((item) => <div key={item.en} className="hero-machine-node"><span aria-hidden="true" /><LocalizedText zh={item.zh} en={item.en} /></div>)}</div>
      <div className="hero-machine-caption"><strong>{applianceName}</strong><small><LocalizedText zh="Data in - Knowledge out" en="Data in - Knowledge out" /></small></div>
    </div>
  );
}