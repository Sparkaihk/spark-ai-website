import { Archive, Database, FileImage, FileText, Mail, PanelsTopLeft, Video } from "lucide-react";

import { LocalizedText } from "@/components/site/localized-text";
import { dataSources } from "@/data/home-knowledge-flow";

const icons = [FileText, FileText, Mail, FileImage, PanelsTopLeft, Video, Database, Archive];

export function DataSourceNodes() {
  return (
    <section className="flow-info-card flow-data-card" aria-labelledby="enterprise-data-title">
      <header className="flow-card-header"><p className="flow-card-kicker">Input</p><h2 id="enterprise-data-title"><LocalizedText zh="企业数据" en="Enterprise Data" /></h2></header>
      <div className="flow-card-list">
        {dataSources.map((source, index) => {
          const Icon = icons[index];
          return (
            <div key={source.en} className="flow-card-item flow-card-item-input">
              <Icon className="flow-card-icon" aria-hidden="true" />
              <span className="min-w-0"><strong><LocalizedText zh={source.zh} en={source.en} /></strong><small><LocalizedText zh={source.detailZh} en={source.detailEn} /></small></span>
              <span className="flow-connection-node flow-connection-node-right" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </section>
  );
}