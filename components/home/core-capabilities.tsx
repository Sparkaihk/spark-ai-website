import { LocalizedText } from "@/components/site/localized-text";
import { coreCapabilities } from "@/data/home-knowledge-flow";

export function CoreCapabilities() {
  return (
    <div className="core-capabilities" aria-label="Spark AI Appliance™core capabilities">
      {coreCapabilities.map((capability) => (
        <div key={capability.titleEn} className="core-capability">
          <strong><LocalizedText zh={capability.titleZh} en={capability.titleEn} /></strong>
          <small><LocalizedText zh={capability.bodyZh} en={capability.bodyEn} /></small>
        </div>
      ))}
    </div>
  );
}
