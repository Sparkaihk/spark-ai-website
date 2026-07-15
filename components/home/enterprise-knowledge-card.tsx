import { BrainCircuit, Bot, FileClock, GitBranch, Scale, Search, ShieldCheck, ScanSearch } from "lucide-react";

import { LocalizedText } from "@/components/site/localized-text";
import { knowledgeCapabilities } from "@/data/home-knowledge-flow";

const icons = [BrainCircuit, Bot, ShieldCheck, Scale, Search, ScanSearch, GitBranch, FileClock];

export function EnterpriseKnowledgeCard() {
  return (
    <section className="flow-info-card flow-knowledge-card" aria-labelledby="enterprise-knowledge-title">
      <header className="flow-card-header"><p className="flow-card-kicker">Output</p><h2 id="enterprise-knowledge-title"><LocalizedText zh="企业知识" en="Enterprise Knowledge" /></h2></header>
      <div className="flow-card-list">
        {knowledgeCapabilities.map((capability, index) => {
          const Icon = icons[index];
          return (
            <div key={capability.en} className="flow-card-item flow-card-item-output">
              <span className="flow-connection-node flow-connection-node-left" aria-hidden="true" />
              <Icon className="flow-card-icon" aria-hidden="true" />
              <span className="min-w-0"><strong><LocalizedText zh={capability.zh} en={capability.en} /></strong><small><LocalizedText zh={capability.detailZh} en={capability.detailEn} /></small></span>
            </div>
          );
        })}
      </div>
    </section>
  );
}