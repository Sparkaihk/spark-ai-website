export type SparkPageKey =
  | "solutions"
  | "products"
  | "industries"
  | "investors"
  | "about"
  | "contact";

export type SparkPageContent = {
  slug: SparkPageKey;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
    visualTitle: string;
    visualItems: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
      href?: string;
    }[];
  };
  statistics: {
    value: string;
    label: string;
  }[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
  };
};

export const sparkPages = {
  solutions: {
    slug: "solutions",
    metadata: {
      title: "Solutions",
      description:
        "Spark AI solutions for data preservation, AI knowledge activation, edge intelligence, and data asset operations.",
    },
    hero: {
      eyebrow: "Solutions",
      title: "Enterprise data solutions for the AI asset economy.",
      description:
        "Spark AI helps institutions preserve critical data, activate knowledge for AI systems, deploy intelligence at the edge, and prepare governed data for asset-level value creation.",
      primaryCta: { label: "Talk to Spark AI", href: "/contact" },
      secondaryCta: { label: "Explore Products", href: "/products" },
      visualTitle: "Solution Stack",
      visualItems: ["Preserve", "Govern", "Retrieve", "Activate", "Monetize"],
    },
    features: {
      eyebrow: "Solution Areas",
      title: "A connected operating model for high-value enterprise data.",
      description:
        "Each solution area maps to a practical enterprise need while staying aligned with one infrastructure foundation.",
      items: [
        {
          title: "Cold Data Modernization",
          description:
            "Move dormant records, archives, media, telemetry, and institutional knowledge into durable, policy-aware infrastructure.",
          icon: "Archive",
        },
        {
          title: "Enterprise RAG Enablement",
          description:
            "Prepare governed data for permission-aware retrieval, copilots, agents, and domain-specific AI applications.",
          icon: "BrainCircuit",
        },
        {
          title: "Distributed Edge Intelligence",
          description:
            "Bring secure ingestion, inference, synchronization, and local AI workflows closer to operational data sources.",
          icon: "Cpu",
        },
        {
          title: "Data Asset Operations",
          description:
            "Create the foundation for classification, valuation, permissioned access, circulation, and monetization workflows.",
          icon: "Banknote",
        },
      ],
    },
    statistics: [
      { value: "100PB+", label: "Planned Cold Data Capacity" },
      { value: "70%", label: "Target Long-Term Storage Cost Reduction" },
      { value: "4", label: "Connected Solution Domains" },
      { value: "2030+", label: "Global Infrastructure Horizon" },
    ],
    cta: {
      eyebrow: "Solution Design",
      title: "Map your enterprise data estate into an AI-ready infrastructure roadmap.",
      description:
        "Work with Spark AI to identify the right starting point across preservation, RAG, edge AI, and data asset workflows.",
      primaryCta: { label: "Book a Demo", href: "/contact" },
      secondaryCta: { label: "View Industries", href: "/industries" },
    },
  },
  products: {
    slug: "products",
    metadata: {
      title: "Products",
      description:
        "Spark AI product families for cold data infrastructure, enterprise RAG, edge AI deployment, and data asset banking.",
    },
    hero: {
      eyebrow: "Products",
      title: "One infrastructure layer for storage, AI, and data assets.",
      description:
        "Spark AI combines BlueSafe cold data infrastructure, governed RAG, Edge AI Nodes, and Data Asset Bank capabilities into a platform for institutional data operations.",
      primaryCta: { label: "Book a Demo", href: "/contact" },
      secondaryCta: { label: "Investor Overview", href: "/investors" },
      visualTitle: "Product Families",
      visualItems: ["AI數據中心", "分布式AI網絡", "BlueSafe 蓝光冷存储", "Spark RAG Cloud", "Edge AI Node", "Data Asset Bank"],
    },
    features: {
      eyebrow: "Product Suite",
      title: "Four systems designed to work as one platform.",
      description:
        "Spark AI products can support focused deployments today while preparing customers for broader data asset infrastructure.",
      items: [
        {
          title: "AI數據中心",
          description:
            "High-density GPU clusters, liquid cooling, AI training, and inference infrastructure for enterprise AI workloads.",
          icon: "Cpu",
          href: "/products/ai-data-center",
        },
        {
          title: "分布式AI網絡",
          description:
            "Community AI nodes and edge inference services with a node partner revenue-sharing model.",
          icon: "Network",
          href: "/products/distributed-ai-network",
        },
        {
          title: "BlueSafe 蓝光冷存储",
          description:
            "Long-term optical cold storage and data asset vault infrastructure for secure, low-cost preservation.",
          icon: "Snowflake",
          href: "/products/bluesafe",
        },
        {
          title: "Spark RAG Cloud",
          description:
            "A governed retrieval layer that transforms records and domain knowledge into production-grade AI context.",
          icon: "CloudCog",
          href: "/products/rag-cloud",
        },
        {
          title: "Edge AI Node",
          description:
            "Compact edge infrastructure for local data ingestion, inference, synchronization, and AI workflows.",
          icon: "Cpu",
          href: "/products/edge-node",
        },
        {
          title: "Data Asset Bank",
          description:
            "The operating layer for data asset accounts, valuation workflows, trusted access, and ecosystem monetization.",
          icon: "Landmark",
          href: "/products/data-bank",
        },
      ],
    },
    statistics: [
      { value: "100PB+", label: "Target Cold Storage Capacity" },
      { value: "10x", label: "Lower Long-Term Storage Cost Target" },
      { value: "50+", label: "Enterprise Deployment Targets" },
      { value: "100 Years", label: "Data Preservation Lifecycle" },
    ],
    cta: {
      eyebrow: "Product Strategy",
      title: "Design your enterprise data asset roadmap with Spark AI.",
      description:
        "Map your cold data estate, AI retrieval needs, edge constraints, and assetization goals into a staged deployment plan.",
      primaryCta: { label: "Book a Demo", href: "/contact" },
      secondaryCta: { label: "View Solutions", href: "/solutions" },
    },
  },
  industries: {
    slug: "industries",
    metadata: {
      title: "Industries",
      description:
        "Spark AI infrastructure for financial services, manufacturing, public sector, enterprise AI platforms, healthcare, and research organizations.",
    },
    hero: {
      eyebrow: "Industries",
      title: "Infrastructure for institutions where data integrity is strategic.",
      description:
        "Spark AI serves data-intensive sectors that need secure custody, operational trust, AI-ready knowledge systems, and future data asset value.",
      primaryCta: { label: "Discuss Your Industry", href: "/contact" },
      secondaryCta: { label: "Explore Solutions", href: "/solutions" },
      visualTitle: "Target Sectors",
      visualItems: ["Financial Services", "Manufacturing", "Public Sector", "Enterprise AI", "Healthcare"],
    },
    features: {
      eyebrow: "Industry Focus",
      title: "Built for regulated, distributed, and knowledge-heavy organizations.",
      description:
        "Spark AI aligns storage, retrieval, governance, and asset workflows to the constraints of each sector.",
      items: [
        {
          title: "Financial Services",
          description:
            "Preserve records, research, customer knowledge, risk data, and institutional intelligence with audit-ready controls.",
          icon: "Landmark",
        },
        {
          title: "Advanced Manufacturing",
          description:
            "Connect plant telemetry, quality records, manuals, maintenance logs, and site knowledge to local and central AI systems.",
          icon: "Factory",
        },
        {
          title: "Government and Public Sector",
          description:
            "Support durable data custody, sovereignty, secure retrieval, and long-term knowledge preservation.",
          icon: "Building2",
        },
        {
          title: "Enterprise AI Platforms",
          description:
            "Provide governed retrieval infrastructure and reusable knowledge APIs for copilots, agents, and AI applications.",
          icon: "Orbit",
        },
      ],
    },
    statistics: [
      { value: "6", label: "Priority Industry Segments" },
      { value: "50+", label: "Enterprise Deployment Targets" },
      { value: "24/7", label: "Infrastructure Operations Model" },
      { value: "100PB+", label: "Planned Capacity Across Sectors" },
    ],
    cta: {
      eyebrow: "Industry Roadmaps",
      title: "Turn sector-specific data constraints into AI infrastructure advantage.",
      description:
        "Spark AI can help define a deployment path around your regulatory, operational, and knowledge activation needs.",
      primaryCta: { label: "Contact Spark AI", href: "/contact" },
      secondaryCta: { label: "View Products", href: "/products" },
    },
  },
  investors: {
    slug: "investors",
    metadata: {
      title: "Investors",
      description:
        "Spark AI investor overview for the AI storage market, data asset economy, revenue model, and platform roadmap.",
    },
    hero: {
      eyebrow: "Investors",
      title: "Building the infrastructure layer for the AI-era data asset economy.",
      description:
        "Spark AI connects storage, RAG, AI, and assetization into an enterprise platform for collecting, organizing, retrieving, activating, and monetizing high-value data.",
      primaryCta: { label: "Contact Spark AI", href: "/contact" },
      secondaryCta: { label: "Explore Platform", href: "/products" },
      visualTitle: "Investment Thesis",
      visualItems: ["Storage", "RAG", "AI", "Assetization", "Ecosystem"],
    },
    features: {
      eyebrow: "Market Opportunity",
      title: "Enterprise AI creates a new infrastructure category.",
      description:
        "The AI market is expanding beyond models and applications into durable data infrastructure for governance, retrieval, and asset value.",
      items: [
        {
          title: "AI Data Constraint",
          description:
            "AI adoption is shifting attention from model access to governed, retrievable, high-quality enterprise data.",
          icon: "Network",
        },
        {
          title: "Strategic Storage",
          description:
            "Regulated records, industrial data, and institutional archives need durable infrastructure before powering AI workflows.",
          icon: "DatabaseZap",
        },
        {
          title: "Asset Economy",
          description:
            "Organizations need custody, valuation, permissioning, and monetization paths for data as an economic asset.",
          icon: "Banknote",
        },
        {
          title: "Platform Revenue",
          description:
            "Recurring infrastructure, usage-based AI activation, services, and future ecosystem transactions support expansion.",
          icon: "LineChart",
        },
      ],
    },
    statistics: [
      { value: "100PB+", label: "Planned Infrastructure Capacity" },
      { value: "4", label: "Revenue Expansion Layers" },
      { value: "2026", label: "BlueSafe Launch Target" },
      { value: "2030+", label: "Global Network Roadmap" },
    ],
    cta: {
      eyebrow: "Investor Relations",
      title: "Explore Spark AI's platform thesis and enterprise growth path.",
      description:
        "Review how storage infrastructure, AI knowledge activation, and data asset operations compound into one platform strategy.",
      primaryCta: { label: "Contact Spark AI", href: "/contact" },
      secondaryCta: { label: "View About", href: "/about" },
    },
  },
  about: {
    slug: "about",
    metadata: {
      title: "About",
      description:
        "About Spark AI Technology Limited, its mission, vision, Hong Kong base, and roadmap for data asset infrastructure.",
    },
    hero: {
      eyebrow: "About Spark AI",
      title: "Building the infrastructure layer of the data asset economy.",
      description:
        "Spark AI Technology Limited is a Hong Kong-based enterprise infrastructure company transforming cold data into AI knowledge and economic value.",
      primaryCta: { label: "Explore Products", href: "/products" },
      secondaryCta: { label: "Investor Overview", href: "/investors" },
      visualTitle: "Company Foundation",
      visualItems: ["Hong Kong", "Mission", "Vision", "Roadmap", "Network"],
    },
    features: {
      eyebrow: "Company Principles",
      title: "A focused infrastructure thesis for the AI era.",
      description:
        "Spark AI is built around the belief that preserved enterprise data becomes more valuable when it is governed, retrievable, intelligent, and connected to economic infrastructure.",
      items: [
        {
          title: "Mission",
          description: "Build the infrastructure layer of the data asset economy.",
          icon: "Target",
        },
        {
          title: "Vision",
          description: "Transform cold data into AI knowledge and economic value.",
          icon: "Sparkles",
        },
        {
          title: "Hong Kong Base",
          description: "Operate from Hong Kong as a platform company serving regional and global enterprise data needs.",
          icon: "Globe2",
        },
        {
          title: "Long-Term Network",
          description: "Connect cold data centers, RAG services, edge nodes, and asset banking into a global infrastructure layer.",
          icon: "Blocks",
        },
      ],
    },
    statistics: [
      { value: "2026", label: "BlueSafe Launch Target" },
      { value: "2027", label: "100PB Archive Center Target" },
      { value: "2028", label: "RAG Cloud Platform Expansion" },
      { value: "2030+", label: "Global Data Infrastructure Network" },
    ],
    cta: {
      eyebrow: "Spark AI Technology Limited",
      title: "Transform cold data into AI knowledge and economic value.",
      description:
        "Connect with Spark AI to learn how the platform roadmap supports enterprise data infrastructure, AI activation, and assetization.",
      primaryCta: { label: "Contact Spark AI", href: "/contact" },
      secondaryCta: { label: "View Solutions", href: "/solutions" },
    },
  },
  contact: {
    slug: "contact",
    metadata: {
      title: "Contact",
      description:
        "Contact Spark AI for enterprise data infrastructure, product demos, industry partnerships, and investor conversations.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Start a focused conversation with Spark AI.",
      description:
        "Connect with Spark AI for enterprise demos, product roadmap discussions, industry deployments, partnerships, and investor relations.",
      primaryCta: { label: "Email Spark AI", href: "mailto:hello@spark-ai.example" },
      secondaryCta: { label: "Explore Solutions", href: "/solutions" },
      visualTitle: "Conversation Paths",
      visualItems: ["Enterprise Demo", "Product Roadmap", "Industry Fit", "Partnership", "Investor Relations"],
    },
    features: {
      eyebrow: "How We Engage",
      title: "Route the right discussion from the first message.",
      description:
        "Spark AI contact paths are organized around the teams and decisions involved in enterprise infrastructure adoption.",
      items: [
        {
          title: "Enterprise Demos",
          description:
            "Review product fit for cold data infrastructure, RAG activation, edge AI, and asset workflows.",
          icon: "MonitorPlay",
        },
        {
          title: "Solution Workshops",
          description:
            "Map a data estate, governance requirements, deployment constraints, and AI activation goals.",
          icon: "Workflow",
        },
        {
          title: "Partnerships",
          description:
            "Discuss ecosystem integrations across storage, AI applications, cloud, data services, and sector channels.",
          icon: "Handshake",
        },
        {
          title: "Investor Relations",
          description:
            "Engage on market thesis, roadmap, platform strategy, and the long-term data asset economy opportunity.",
          icon: "LineChart",
        },
      ],
    },
    statistics: [
      { value: "24h", label: "Target Business Response Window" },
      { value: "4", label: "Primary Engagement Paths" },
      { value: "6", label: "Priority Industry Segments" },
      { value: "1", label: "Unified Infrastructure Platform" },
    ],
    cta: {
      eyebrow: "Next Step",
      title: "Share your data infrastructure priority and the team will route the discussion.",
      description:
        "Include the use case, industry, deployment region, timeline, and the type of conversation you want to start.",
      primaryCta: { label: "Email Spark AI", href: "mailto:hello@spark-ai.example" },
      secondaryCta: { label: "View Products", href: "/products" },
    },
  },
} satisfies Record<SparkPageKey, SparkPageContent>;
