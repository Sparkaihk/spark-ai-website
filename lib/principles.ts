export type PrincipleCard = Readonly<{
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
}>;

export const principleCards = [
  {
    id: "what-we-believe",
    titleEn: "What We Believe",
    titleZh: "我们的信念",
    descriptionEn:
      "We believe an organization’s knowledge should outlive systems, platforms, and generations of technology. AI becomes truly valuable only when trusted data is preserved, governed, understood, and made continuously available for future intelligence.",
    descriptionZh:
      "我们相信，机构的知识不应随着系统、平台或技术更迭而消失。只有当可信数据被长期保存、妥善治理、准确理解，并持续服务于未来智能时，AI 才能真正创造长期价值。",
  },
  {
    id: "why-we-exist",
    titleEn: "Why We Exist",
    titleZh: "我们为何存在",
    descriptionEn:
      "Spark AI exists to build the knowledge infrastructure for the AI era — connecting computing, intelligent tiered storage, enterprise knowledge bases, data governance, and long-term archival into one trusted foundation.",
    descriptionZh:
      "Spark AI 致力于建设 AI 时代的知识基础设施，将算力、智能分层存储、机构知识库、数据治理与长期归档整合为一个可信、统一的基础平台。",
  },
  {
    id: "our-mission",
    titleEn: "Our Mission",
    titleZh: "我们的使命",
    descriptionEn:
      "Our mission is to help people and organizations preserve their most valuable knowledge, activate historical data with AI, and transform long-term information assets into continuously usable intelligence.",
    descriptionZh:
      "我们的使命，是帮助个人与机构保存最有价值的知识，以 AI 激活历史数据，并将长期沉淀的信息资产转化为可持续使用的智能。",
  },
  {
    id: "our-promise",
    titleEn: "Our Promise",
    titleZh: "我们的承诺",
    descriptionEn:
      "We design for trust, resilience, data sovereignty, and long-term continuity. Every Spark AI system should protect knowledge today, remain understandable tomorrow, and continue creating value for generations.",
    descriptionZh:
      "我们坚持以可信、韧性、数据主权与长期延续性为设计原则。每一套 Spark AI 系统，都应当在今天保护知识，在未来仍可理解，并持续为下一代创造价值。",
  },
  {
    id: "knowledge-must-endure",
    titleEn: "Knowledge Must Endure",
    titleZh: "知识必须长久延续",
    descriptionEn:
      "Knowledge infrastructure must be designed beyond short product cycles. Critical information should remain accessible, verifiable, and usable across decades of technological change.",
    descriptionZh:
      "知识基础设施必须超越短期产品周期。关键数据应在数十年的技术演进中，依然保持可访问、可验证和可使用。",
  },
  {
    id: "data-sovereignty-by-design",
    titleEn: "Data Sovereignty by Design",
    titleZh: "将数据主权融入设计",
    descriptionEn:
      "Organizations should retain control over where their data is stored, how it is governed, who can access it, and how it is used by AI systems.",
    descriptionZh:
      "机构应始终掌握数据存放地点、治理方式、访问权限，以及数据如何被 AI 系统使用的控制权。",
  },
  {
    id: "intelligence-requires-memory",
    titleEn: "Intelligence Requires Memory",
    titleZh: "智能需要记忆",
    descriptionEn:
      "AI without trusted memory is temporary intelligence. Lasting intelligence depends on preserved context, historical evidence, and continuously governed knowledge.",
    descriptionZh:
      "没有可信记忆的 AI，只是短暂的智能。真正持久的智能，依赖被保存的上下文、历史证据和持续治理的知识。",
  },
  {
    id: "trust-must-be-engineered",
    titleEn: "Trust Must Be Engineered",
    titleZh: "以工程构筑信任",
    descriptionEn:
      "Trust is not a marketing claim. It must be built into architecture through security, traceability, transparency, resilience, and accountable governance.",
    descriptionZh:
      "可信不是一句营销口号，而必须通过安全、可追溯、透明、韧性和可问责治理，被真正写入系统架构。",
  },
] as const satisfies readonly PrincipleCard[];
