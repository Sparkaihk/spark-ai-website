export const dataSources = [
  { en: "PDF", zh: "PDF", detailEn: "Documents", detailZh: "Documents", icon: "file" },
  { en: "Word", zh: "Word", detailEn: "Documents", detailZh: "Documents", icon: "file" },
  { en: "Email", zh: "Email", detailEn: "Messages", detailZh: "Messages", icon: "mail" },
  { en: "Medical Images", zh: "Medical Images", detailEn: "DICOM", detailZh: "DICOM", icon: "image" },
  { en: "CAD", zh: "CAD", detailEn: "Files", detailZh: "Files", icon: "cad" },
  { en: "Video", zh: "Video", detailEn: "Files", detailZh: "Files", icon: "video" },
  { en: "Database", zh: "Database", detailEn: "Records", detailZh: "Records", icon: "database" },
  { en: "Archive Logs", zh: "Archive Logs", detailEn: "Logs", detailZh: "Logs", icon: "archive" },
] as const;
export const knowledgeCapabilities = [
  { en: "Enterprise Retrieval", zh: "Enterprise Retrieval", detailEn: "Governed knowledge search", detailZh: "Governed knowledge search", icon: "rag" },
  { en: "AI Agents", zh: "AI Agents", detailEn: "Agents and automation", detailZh: "Agents and automation", icon: "agent" },
  { en: "Governance", zh: "Governance", detailEn: "Policy and access management", detailZh: "Policy and access management", icon: "governance" },
  { en: "Compliance", zh: "Compliance", detailEn: "Audit and data integrity", detailZh: "Audit and data integrity", icon: "compliance" },
] as const;
export const coreCapabilities = [
  { titleEn: "Accelerated AI Compute", titleZh: "Accelerated AI Compute", bodyEn: "Faster inference", bodyZh: "Faster inference" },
  { titleEn: "Intelligent Tiering", titleZh: "Intelligent Tiering", bodyEn: "Lower cost", bodyZh: "Lower cost" },
  { titleEn: "Secure and Reliable", titleZh: "Secure and Reliable", bodyEn: "Enterprise resilience", bodyZh: "Enterprise resilience" },
  { titleEn: "Knowledge Governance", titleZh: "Knowledge Governance", bodyEn: "Controlled and auditable", bodyZh: "Controlled and auditable" },
] as const;
export const homeKpis = [
  { valueEn: "50+ Years", valueZh: "50+ Years", labelEn: "Archival Lifetime", labelZh: "Archival Lifetime", icon: "shield" },
  { valueEn: "Up to 1 PB", valueZh: "Up to 1 PB", labelEn: "Single-appliance Capacity", labelZh: "Single-appliance Capacity", icon: "database" },
  { valueEn: "Enterprise Retrieval", valueZh: "Enterprise Retrieval", labelEn: "Governed Knowledge Platform", labelZh: "Governed Knowledge Platform", icon: "network" },
  { valueEn: "Accelerated AI", valueZh: "Accelerated AI", labelEn: "Spark AI Appliance Compute", labelZh: "Spark AI Appliance Compute", icon: "cpu" },
] as const;
export const industries = ["Manufacturing", "Healthcare", "Engineering", "Media", "Government", "Finance", "Research", "Energy"].map((name) => ({ en: name, zh: name, icon: name.toLowerCase() })) as ReadonlyArray<{ en: string; zh: string; icon: string }>;