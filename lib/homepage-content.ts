import {
  Archive,
  Banknote,
  Blocks,
  Building2,
  CloudCog,
  DatabaseZap,
  Factory,
  FileLock2,
  Landmark,
  Network,
  Orbit,
  ShieldCheck,
} from "lucide-react";

export const homepageMetrics = [
  { value: "100PB+", label: "Planned Cold Data Capacity" },
  { value: "50 Years+", label: "Optical Data Preservation" },
  { value: "70%", label: "Storage Cost Reduction" },
  { value: "Enterprise Grade", label: "RAG Infrastructure" },
];

export const productSuite = [
  {
    title: "BlueSafe Archive",
    description:
      "Long-horizon data preservation for regulated, high-value enterprise records.",
    icon: Archive,
  },
  {
    title: "BlueSafe Vault",
    description:
      "Secure data asset custody with governance, permissioning, and audit-ready access.",
    icon: FileLock2,
  },
  {
    title: "BlueSafe RAG Cloud",
    description:
      "Knowledge infrastructure for retrieval-augmented AI applications and enterprise copilots.",
    icon: CloudCog,
  },
  {
    title: "BlueSafe Data Bank",
    description:
      "Data asset accounts, valuation workflows, and trusted exchange infrastructure.",
    icon: Banknote,
  },
];

export const infrastructurePillars = [
  {
    title: "Storage Foundation",
    description:
      "Transforms fragmented enterprise data into secure, durable, policy-aware infrastructure.",
    icon: DatabaseZap,
  },
  {
    title: "Knowledge Layer",
    description:
      "Connects archived data, metadata, and institutional context for AI-native retrieval.",
    icon: Network,
  },
  {
    title: "Value Network",
    description:
      "Prepares data assets for governance, circulation, financing, and ecosystem-level usage.",
    icon: Blocks,
  },
];

export const industries = [
  { title: "Financial Services", icon: Landmark },
  { title: "Advanced Manufacturing", icon: Factory },
  { title: "Government and Public Sector", icon: Building2 },
  { title: "Enterprise AI Platforms", icon: Orbit },
];

export const operatingModel = [
  {
    title: "Govern",
    description: "Classify, permission, audit, and control data across its full lifecycle.",
    icon: ShieldCheck,
  },
  {
    title: "Activate",
    description: "Make enterprise data usable for search, agents, analytics, and RAG systems.",
    icon: Network,
  },
  {
    title: "Monetize",
    description: "Create the infrastructure path from dormant records to trusted data assets.",
    icon: Banknote,
  },
];

export const strategicFlow = [
  "Enterprise Data",
  "Edge Node Network",
  "AI Data Center",
  "BlueSafe Archive",
  "BlueSafe RAG Cloud",
  "Spark Data Bank",
  "AI Agent Ecosystem",
] as const;
