import { Clapperboard, DraftingCompass, Factory, GraduationCap, HeartPulse, Landmark, LandmarkIcon, Zap } from "lucide-react";

import { LocalizedText } from "@/components/site/localized-text";
import { industries } from "@/data/home-knowledge-flow";

const icons = [Factory, HeartPulse, DraftingCompass, Clapperboard, Landmark, LandmarkIcon, GraduationCap, Zap];

export function IndustryList() {
  return (
    <div className="home-industries">
      <p><LocalizedText zh="面向需要将冷数据转化为可治理 AI 知识的企业与行业" en="For enterprises and industries transforming cold data into governed AI knowledge" /></p>
      <div className="home-industry-list">
        {industries.map((industry, index) => {
          const Icon = icons[index];
          return <div key={industry.en} className="home-industry"><Icon aria-hidden="true" /><LocalizedText zh={industry.zh} en={industry.en} /></div>;
        })}
      </div>
    </div>
  );
}
