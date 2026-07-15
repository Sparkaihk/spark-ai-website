import { Archive, Cpu, Database, Gauge, Network, ShieldCheck } from "lucide-react";

import { LocalizedText } from "@/components/site/localized-text";
import { homeKpis } from "@/data/home-knowledge-flow";

const icons = [ShieldCheck, Database, Network, Cpu, Gauge, Database, ShieldCheck, Archive];

export function HomeKpiCards() {
  return (
    <div className="home-kpi-grid" aria-label="Spark AI Appliance™key metrics">
      {homeKpis.map((kpi, index) => {
        const Icon = icons[index];
        return (
          <div key={kpi.valueEn} className="home-kpi-card">
            <Icon aria-hidden="true" />
            <span>
              <strong><LocalizedText zh={kpi.valueZh} en={kpi.valueEn} /></strong>
              <small><LocalizedText zh={kpi.labelZh} en={kpi.labelEn} /></small>
            </span>
          </div>
        );
      })}
    </div>
  );
}
