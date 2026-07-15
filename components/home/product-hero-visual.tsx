import Image from "next/image";

import { CoreCapabilities } from "@/components/home/core-capabilities";
import { LocalizedText } from "@/components/site/localized-text";

const productImage = "/images/products/spark-ai-appliance/hero-render-v1.png";
const applianceName = "Spark AI Appliance\u2122";

export function ProductHeroVisual() {
  return (
    <section className="knowledge-appliance" aria-labelledby="spark-ai-appliance-visual-title">
      <div className="knowledge-appliance-visual">
        <div className="knowledge-appliance-stage" aria-hidden="true" />
        <div className="knowledge-appliance-shadow" aria-hidden="true" />
        <div className="knowledge-appliance-product"><Image src={productImage} alt={applianceName} fill priority sizes="(min-width: 1280px) 34vw, (min-width: 768px) 52vw, 92vw" className="object-contain" /><div className="knowledge-light-spine" aria-hidden="true" /></div>
        <div className="knowledge-appliance-label"><span className="knowledge-appliance-status" aria-hidden="true" /><span><strong id="spark-ai-appliance-visual-title">{applianceName}</strong><small><LocalizedText zh="Enterprise knowledge infrastructure appliance" en="Enterprise knowledge infrastructure appliance" /></small></span></div>
      </div>
      <CoreCapabilities />
    </section>
  );
}
