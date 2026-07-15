import { Archive, BrainCircuit, Cpu, Database, FileSearch, Landmark, Layers3, Network, ShieldCheck, Sparkles } from "lucide-react";
import type { InvestorShellProps } from "@/components/sections/investor-shell";

type PageContent = Omit<InvestorShellProps, "ctaTitle"> & { ctaTitle?: InvestorShellProps["ctaTitle"] };
const applianceName = "Spark AI Appliance\u2122";
const baseCards = [
  { title: { zh: "Knowledge Preservation", en: "Knowledge Preservation" }, body: { zh: "Preserve long-term enterprise knowledge for future AI use.", en: "Preserve long-term enterprise knowledge for future AI use." }, icon: Archive },
  { title: { zh: "Enterprise Retrieval", en: "Enterprise Retrieval" }, body: { zh: "Make records searchable, attributable, and governed.", en: "Make records searchable, attributable, and governed." }, icon: FileSearch },
  { title: { zh: "Trust Governance", en: "Trust Governance" }, body: { zh: "Support access control, auditability, lifecycle policy, and data integrity.", en: "Support access control, auditability, lifecycle policy, and data integrity." }, icon: ShieldCheck },
];

function page(title: string, subtitle: string, diagram: string[], icon = Sparkles): PageContent {
  return {
    eyebrow: { zh: "Spark AI", en: "Spark AI" },
    title: { zh: title, en: title },
    subtitle: { zh: subtitle, en: subtitle },
    diagram,
    sections: [
      { eyebrow: { zh: "Overview", en: "Overview" }, title: { zh: title, en: title }, body: { zh: subtitle, en: subtitle }, cards: baseCards },
      { eyebrow: { zh: "Why It Matters", en: "Why It Matters" }, title: { zh: "Memory for AI. Trust for Tomorrow.", en: "Memory for AI. Trust for Tomorrow." }, body: { zh: "Knowledge Infrastructure for the AI Era connects data, governance, retrieval, and AI workflows.", en: "Knowledge Infrastructure for the AI Era connects data, governance, retrieval, and AI workflows." }, cards: [
        { title: { zh: "AI Compute", en: "AI Compute" }, body: { zh: "Support local inference and knowledge workflows.", en: "Support local inference and knowledge workflows." }, icon: Cpu },
        { title: { zh: "Knowledge Layer", en: "Knowledge Layer" }, body: { zh: "Transform retained information into governed knowledge.", en: "Transform retained information into governed knowledge." }, icon },
        { title: { zh: "Architecture", en: "Architecture" }, body: { zh: "Scale from appliance to platform deployment.", en: "Scale from appliance to platform deployment." }, icon: Network },
      ] },
    ],
    ctaTitle: { zh: "Build Knowledge Infrastructure for the AI Era", en: "Build Knowledge Infrastructure for the AI Era" },
  };
}

export const productPage: PageContent = page(applianceName, `${applianceName} unifies AI compute, intelligent storage, enterprise retrieval, AI Agents, long-term archival, and trust governance.`, ["Compute", "Storage", "Retrieval", "Agents", "Archive", "Trust"], BrainCircuit);
export const platformPage: PageContent = page("Knowledge Infrastructure for the AI Era", "Spark AI helps organizations preserve, govern, retrieve, and activate long-term knowledge for AI.", ["Data", "Metadata", "Storage", "Retrieval", "Agents", "Governance"], Layers3);
export const solutionsPage: PageContent = page("Solutions", "Spark AI serves government, enterprise, research, media, and data-intensive organizations that need long-term trust.", ["Government", "Enterprise", "Research", "Media", "Compliance", "AI"], Landmark);
export const resourcesPage: PageContent = page("Resources", "Approved Spark AI materials are available through consultation and partner review.", ["Principles", "White Papers", "Architecture", "Product", "Research", "Contact"], Database);
export const aboutPage: PageContent = page("About Spark AI", "Spark AI builds Knowledge Infrastructure for the AI Era so organizational data can become reliable memory for AI.", ["Vision", "Mission", "Product", "Trust", "Ecosystem", "Value"], Sparkles);
export const architecturePage: PageContent = page("Architecture", "Spark AI architecture connects compute, storage, retrieval, AI Agents, long-term archive, and governance.", ["Compute", "Storage", "Metadata", "Retrieval", "Agents", "Governance"], Layers3);