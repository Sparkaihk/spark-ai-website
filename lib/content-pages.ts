import type { ContentPageData } from "@/components/sections/spark-content-page";

const faq = [
  {
    title: { zh: "是否可分阶段部署？", en: "Can deployment be phased?" },
    body: {
      zh: "可以。Spark AI 通常先以评估、试点、正式集群与跨区扩容四个阶段推进，让客户在不中断原有业务的前提下逐步接入数据、权限、检索和 AI 应用。",
      en: "Yes. Spark AI can begin with assessment and pilot workloads, then expand into production clusters and cross-site capacity without disrupting existing business systems.",
    },
  },
  {
    title: { zh: "如何保障资料安全？", en: "How is data secured?" },
    body: {
      zh: "平台以权限分层、加密、审计、WORM、离线保留与元资料治理共同保护资料，并可按行业合规要求设计保留周期、访问流程和备份策略。",
      en: "The platform combines layered access control, encryption, auditing, WORM retention, offline copies, and metadata governance to meet industry compliance needs.",
    },
  },
];

const related = {
  cold: { zh: "AI 冷数据中心", en: "AI Cold Data Center" },
  optical: { zh: "蓝光存储", en: "Optical Storage" },
  rag: { zh: "AI Knowledge Platform", en: "AI Knowledge Platform" },
  bank: { zh: "Data Asset Bank", en: "Data Asset Bank" },
  edge: { zh: "Edge AI", en: "Edge AI" },
  storage: { zh: "产品介绍", en: "Storage Products" },
  tech: { zh: "技术架构", en: "Technology Architecture" },
  cases: { zh: "成功案例", en: "Cases" },
  about: { zh: "关于 Spark AI", en: "About Spark AI" },
};

export const contentPages = {
  "ai-cold-data": {
    slug: "ai-cold-data",
    href: "/solutions/ai-cold-data",
    title: { zh: "AI 冷数据中心", en: "AI Cold Data Center" },
    eyebrow: { zh: "100PB 级 AI 数据基础设施", en: "100PB AI Data Infrastructure" },
    seoDescription: "Spark AI AI 冷数据中心提供 100PB Scale Architecture，支援 AI 训练、RAG、低成本长期保存与企业资料安全治理。",
    description: {
      zh: "Spark AI 冷数据中心面向 AI 时代大量未被使用的历史资料、影像、文件和备份资料，建立可治理、可检索、可训练、可长期保存的 100PB 级平台。平台以热、温、冷资料生命周期为核心，结合光学冷存储、对象存储与 RAG 索引能力，协助企业降低成本、节省能源并重新激活沉睡资料价值。",
      en: "Spark AI Cold Data Center turns dormant files, archives, media, and historical enterprise data into governed, searchable, trainable, and durable AI infrastructure at 100PB scale.",
    },
    heroPoints: [
      { zh: "降低 80% 存储成本", en: "Reduce storage cost by up to 80%" },
      { zh: "支援 AI 训练与 RAG", en: "Support AI training and RAG" },
      { zh: "PB 级弹性扩充", en: "PB-scale expansion" },
    ],
    illustration: "cold-data",
    sections: [
      {
        title: { zh: "AI 训练资料生命周期", en: "AI Training Data Lifecycle" },
        body: {
          zh: "AI 训练资料从产生、清洗、标注、向量化、训练、验证到长期归档，会在不同阶段呈现完全不同的访问频率和价值密度。Spark AI 以生命周期策略自动分层，把高频资料留在高速层，把可追溯、可复用的历史资料迁入低成本冷层，让资料既能被模型使用，也能被合规保存。",
          en: "AI data moves through creation, cleansing, labeling, vectorization, training, validation, and archive phases. Spark AI tiers each phase by access frequency and value, keeping active data fast while preserving reusable history at low cost.",
        },
      },
      {
        title: { zh: "热数据", en: "Hot Data" },
        body: {
          zh: "热数据包括正在训练、推理、检索和协作中的资料，通常需要毫秒级访问、频繁更新和高并发吞吐。Spark AI 将热数据放在 NVMe、GPU 节点附近或高性能对象存储中，确保模型训练、知识问答与业务应用可以快速取得最新资料。",
          en: "Hot data is actively used for training, inference, search, and collaboration. It needs low latency and high throughput, so Spark AI places it close to NVMe, GPU nodes, and high-performance object storage.",
        },
      },
      {
        title: { zh: "温数据", en: "Warm Data" },
        body: {
          zh: "温数据是仍具业务价值但访问频率下降的资料，例如近期项目文件、标注结果、影像副本和模型评估资料。平台会保留索引、权限和元资料，并把内容迁移至成本更低的 HDD 或对象存储，兼顾查询效率与存储经济性。",
          en: "Warm data still has business value but is accessed less often. Spark AI keeps metadata, permissions, and indexes active while moving payloads to more economical HDD or object tiers.",
        },
      },
      {
        title: { zh: "冷数据", en: "Cold Data" },
        body: {
          zh: "冷数据是长期保存、低频访问但对合规、科研、模型再训练和 RAG 补充知识非常重要的资料。Spark AI 以光学存储、WORM、离线副本和元资料索引保护这些资料，使企业能在低功耗、低成本环境中保留可被 AI 再次利用的资料底座。",
          en: "Cold data is rarely accessed but essential for compliance, research, retraining, and RAG enrichment. Optical storage, WORM retention, offline copies, and metadata indexes make it durable and AI-ready.",
        },
      },
      {
        title: { zh: "Spark AI 冷数据平台架构", en: "Spark AI Cold Data Platform Architecture" },
        body: {
          zh: "平台由接入层、治理层、存储分层、索引层和 AI 应用层组成。资料先经过分类、去重、权限映射和元资料抽取，再按策略落入 NVMe、HDD、Optical 或 Object Storage，最後透过全文检索、向量检索与 API 提供给 RAG、训练和企业应用。",
          en: "The architecture combines ingestion, governance, tiered storage, indexing, and AI application layers, exposing governed data to RAG, training, and enterprise systems through search and APIs.",
        },
      },
      {
        title: { zh: "100PB Scale Architecture", en: "100PB Scale Architecture" },
        body: {
          zh: "100PB 架构强调容量、可用性、成本和运维的平衡。Spark AI 以模组化机柜、分区元资料、异地副本、自动校验和容量预测管理大规模资料池，让客户可以从单一业务域开始，逐步扩展到多部门、多城市和跨境资料网络。",
          en: "The 100PB design balances capacity, availability, cost, and operations through modular cabinets, partitioned metadata, remote copies, integrity checks, and capacity forecasting.",
        },
        bullets: [
          { zh: "节省能源并降低机房散热压力", en: "Save energy and cooling cost" },
          { zh: "提升资料安全与防篡改能力", en: "Improve data security and tamper resistance" },
          { zh: "支援 AI 训练、RAG 与 PB 级扩充", en: "Support AI training, RAG, and PB expansion" },
        ],
      },
    ],
    faqs: faq,
    related: [related.optical, related.rag, related.storage, related.tech],
  },
  "optical-storage": {
    slug: "optical-storage",
    href: "/solutions/optical-storage",
    title: { zh: "蓝光存储", en: "Optical Storage" },
    eyebrow: { zh: "长期保存与低功耗冷存储", en: "Long-term Low-power Cold Storage" },
    seoDescription: "Spark AI 蓝光光学冷存储支援 WORM、防病毒、50 年以上保存、低功耗与碳中和资料归档。",
    description: {
      zh: "蓝光存储以不可篡改、低功耗和长寿命为核心，适合政府、医院、金融、档案馆与 AI 资料湖的长期归档。相较 HDD 长期旋转、迁移与维护成本，光学冷存储可在离线或近线状态保存关键资料，降低病毒风险、能源消耗和碳排压力。",
      en: "Optical cold storage provides immutable, low-power, long-life retention for government, healthcare, finance, archives, and AI data lakes.",
    },
    heroPoints: [
      { zh: "WORM 防篡改", en: "WORM immutability" },
      { zh: "50 年以上保存", en: "50+ year retention" },
      { zh: "低功耗与碳中和", en: "Low power and carbon goals" },
    ],
    illustration: "optical",
    sections: [
      {
        title: { zh: "什麽是光学冷存储", en: "What Is Optical Cold Storage" },
        body: {
          zh: "光学冷存储使用蓝光光碟或企业级光学介质保存低频访问资料，资料写入後可长期离线或近线保管。它不依赖磁碟持续旋转，具备天然隔离、抗电磁干扰和长寿命优势，特别适合归档、备份、证据保全与 AI 历史资料留存。",
          en: "Optical cold storage stores low-access data on enterprise optical media that can remain offline or nearline for long periods, reducing power, malware, and retention risk.",
        },
      },
      {
        title: { zh: "为何比 HDD 更适合长期保存", en: "Why It Beats HDD for Long Retention" },
        body: {
          zh: "HDD 适合频繁读写，但长期保存需要供电、散热、巡检、迁移和故障更换。光学介质在冷层资料场景中更稳定，能降低电力和运维支出，并透过介质寿命、批量校验与多副本策略降低多年保存的不确定性。",
          en: "HDD is strong for active workloads, but retention requires power, cooling, refresh, and replacement. Optical media is more economical for cold archives that need durability over decades.",
        },
      },
      {
        title: { zh: "WORM 与防病毒", en: "WORM and Anti-virus Protection" },
        body: {
          zh: "WORM 代表一次写入、多次读取，资料写入後不能被覆盖或删改，适合合规存证和不可篡改归档。当介质离线保存时，勒索软件与网络病毒难以直接感染原始资料，为企业提供最後一道资料保护防线。",
          en: "WORM means write once, read many. Combined with offline retention, it limits tampering and reduces ransomware exposure for critical archives.",
        },
      },
      {
        title: { zh: "典型应用", en: "Typical Applications" },
        body: {
          zh: "政府可保存公文和影像，医院可保存病历与影像，金融可保存交易与合规记录，档案馆可保存数字文化资产，AI 资料湖可保存训练语料、标注资料与模型版本。这些资料不需要每天读取，但必须长期可靠存在。",
          en: "Government, hospitals, finance, archives, and AI data lakes all need records that are not read daily but must remain secure, auditable, and retrievable for many years.",
        },
      },
    ],
    faqs: faq,
    related: [related.cold, related.storage, related.tech, related.cases],
  },
  rag: {
    slug: "rag",
    href: "/solutions/rag",
    title: { zh: "AI Knowledge Platform", en: "AI Knowledge Platform" },
    eyebrow: { zh: "企业 RAG 知识平台", en: "Enterprise RAG Platform" },
    seoDescription: "Spark AI RAG 平台整合全文检索、向量检索、多模态、知识图谱与 LLM Integration，激活企业知识库。",
    description: {
      zh: "Spark AI Knowledge Platform 以 RAG 为核心，把企业文件、图像、影片、表格、制度和历史案例转化为可检索、可引用、可追溯的知识服务。平台结合全文检索、向量检索、多模态理解、知识图谱和 LLM Integration，帮助企业在不重新训练大模型的情况下快速建立可靠 AI 助手。",
      en: "Spark AI Knowledge Platform uses RAG to transform enterprise documents, media, tables, policies, and historical cases into searchable, traceable, LLM-ready knowledge services.",
    },
    heroPoints: [
      { zh: "全文与向量混合检索", en: "Hybrid full-text and vector search" },
      { zh: "多模态知识理解", en: "Multimodal knowledge understanding" },
      { zh: "LLM Integration", en: "LLM integration" },
    ],
    illustration: "rag",
    sections: [
      {
        title: { zh: "什麽是 RAG", en: "What Is RAG" },
        body: {
          zh: "RAG 是 Retrieval-Augmented Generation，透过先检索企业可信资料，再交由大模型生成回答，减少幻觉并提高可追溯性。它特别适合政策查询、客服、合规审核、技术支援和内部知识管理，能让企业在保留私有资料控制权的同时导入生成式 AI。",
          en: "RAG retrieves trusted enterprise knowledge before asking an LLM to generate an answer, reducing hallucination and improving traceability for practical business use.",
        },
      },
      {
        title: { zh: "全文检索与向量检索", en: "Full-text and Vector Retrieval" },
        body: {
          zh: "全文检索擅长精准匹配关键字、编号、法规条文和专有名词；向量检索擅长理解语义相近但字面不同的问题。Spark AI 将两者融合，并加入权限、时间、部门、可信度和资料类型过滤，让回答更精准、更符合企业治理要求。",
          en: "Full-text search handles exact terms and identifiers, while vector search understands semantic similarity. Spark AI combines both with permissions, timestamps, departments, trust scores, and content filters.",
        },
      },
      {
        title: { zh: "多模态与知识图谱", en: "Multimodal and Knowledge Graph" },
        body: {
          zh: "企业知识不只存在于文字，也存在于扫描件、表格、图像、视频、音频和结构化系统。平台可抽取实体、关系、时间线和引用来源，建立知识图谱，让 AI 不仅能回答内容，也能理解人、事、物与流程之间的连接。",
          en: "Enterprise knowledge spans documents, scans, tables, images, videos, audio, and systems. Knowledge graphs connect entities, events, timelines, and references for deeper reasoning.",
        },
      },
      {
        title: { zh: "Spark AI RAG Architecture", en: "Spark AI RAG Architecture" },
        body: {
          zh: "架构包括资料接入、OCR、清洗、切分、嵌入、索引、权限同步、提示模板、LLM 连接和审计回放。每次回答都可返回来源片段、置信度和版本资讯，方便企业管理风险、优化知识库并持续提升 AI 问答质量。",
          en: "The architecture includes ingestion, OCR, cleansing, chunking, embeddings, indexing, permission sync, prompt templates, LLM connectors, and audit replay.",
        },
      },
      {
        title: { zh: "企业应用案例", en: "Enterprise Use Cases" },
        body: {
          zh: "典型应用包括内部制度问答、医疗影像报告检索、金融合规助手、工程维修知识库、客服工单推荐和研究资料问答。RAG 让过去分散在多套系统的知识被统一索引，并以自然语言方式服务员工、客户和合作夥伴。",
          en: "Use cases include policy Q&A, medical report retrieval, compliance assistants, maintenance knowledge bases, ticket recommendations, and research data assistants.",
        },
      },
    ],
    faqs: faq,
    related: [related.cold, related.bank, related.edge, related.tech],
  },
  "data-bank": {
    slug: "data-bank",
    href: "/solutions/data-bank",
    title: { zh: "Data Asset Bank", en: "Data Asset Bank" },
    eyebrow: { zh: "企业数据资产化平台", en: "Enterprise Data Assetization" },
    seoDescription: "Spark AI Data Asset Bank 支援数据治理、确权、估值、交易、AI 资料资产与香港数据资产中心定位。",
    description: {
      zh: "Data Asset Bank 协助企业把分散、沉睡、难以计量的资料转化为可治理、可确权、可估值和可流通的数据资产。平台以安全合规为前提，建立元资料、权限、品质、用途、估值和交易流程，让 AI 资料资产从成本中心走向价值中心。",
      en: "Data Asset Bank helps enterprises turn scattered data into governed, rights-confirmed, valued, and tradable data assets for the AI economy.",
    },
    heroPoints: [
      { zh: "数据治理与确权", en: "Governance and rights confirmation" },
      { zh: "数据估值与交易", en: "Valuation and circulation" },
      { zh: "AI 资料资产", en: "AI data assets" },
    ],
    illustration: "bank",
    sections: [
      {
        title: { zh: "企业数据资产化", en: "Enterprise Data Assetization" },
        body: {
          zh: "企业拥有大量文件、交易、影像、传感器和客户互动资料，但多数仍停留在存储成本项目中。资产化的第一步是识别资料类型、来源、品质、权属和可用场景，再建立可审计的管理流程，使资料能被 AI、业务和合作方合规使用。",
          en: "Enterprises hold documents, transactions, media, sensor data, and customer interactions, but most remains a cost item. Assetization identifies source, quality, rights, and usable scenarios.",
        },
      },
      {
        title: { zh: "数据治理", en: "Data Governance" },
        body: {
          zh: "治理包含分类分级、元资料管理、权限控制、品质评估、脱敏、审计和留存策略。Spark AI 将治理嵌入存储、检索和 AI 使用流程，确保资料在被激活之前已具备清晰边界，避免权限混乱和不可追溯的模型使用风险。",
          en: "Governance covers classification, metadata, access control, quality, masking, audit, and retention policies embedded into storage, retrieval, and AI workflows.",
        },
      },
      {
        title: { zh: "数据确权与估值", en: "Rights Confirmation and Valuation" },
        body: {
          zh: "数据确权厘清资料来源、使用权、收益权和责任边界；估值则参考稀缺性、完整性、时效性、可替代性、合规风险和 AI 应用效果。平台可形成资料资产台帐，支援管理层评估投资回报和外部合作价值。",
          en: "Rights confirmation clarifies source, usage, revenue, and responsibility. Valuation considers scarcity, completeness, freshness, substitutability, compliance risk, and AI impact.",
        },
      },
      {
        title: { zh: "数据交易与香港定位", en: "Data Trading and Hong Kong Positioning" },
        body: {
          zh: "未来香港可凭藉国际金融、法律、科研和跨境数据服务优势，成为亚洲可信数据资产枢纽。Data Asset Bank 可支援合规撮合、授权使用、模型训练资料包和行业资料产品，推动数据在安全边界内创造新价值。",
          en: "Hong Kong can become a trusted Asian data asset hub through finance, law, research, and cross-border services. Data Asset Bank supports compliant licensing and data products.",
        },
      },
    ],
    faqs: faq,
    related: [related.cold, related.rag, related.tech, related.cases],
  },
  "edge-ai": {
    slug: "edge-ai",
    href: "/solutions/edge-ai",
    title: { zh: "Edge AI", en: "Edge AI" },
    eyebrow: { zh: "低延迟企业推理节点", en: "Low-latency Enterprise Inference" },
    seoDescription: "Spark AI Edge AI 支援 RTX Spark、GPU 节点、企业推理、低延迟、离线 AI、智能工厂与智慧城市。",
    description: {
      zh: "Edge AI 将 GPU 推理、RAG 快取和本地知识库部署到靠近业务现场的位置，支援低延迟、离线可用和资料不出域的企业 AI。对智能工厂、智慧城市、零售、医疗和安防场景而言，边缘节点能让 AI 在现场即时判断，并与中心冷数据平台形成闭环。",
      en: "Edge AI deploys GPU inference, RAG cache, and local knowledge bases near business sites for low-latency, offline-capable, domain-controlled enterprise AI.",
    },
    heroPoints: [
      { zh: "RTX Spark 与 GPU 节点", en: "RTX Spark and GPU nodes" },
      { zh: "低延迟企业推理", en: "Low-latency enterprise inference" },
      { zh: "离线 AI 与现场决策", en: "Offline AI and local decisions" },
    ],
    illustration: "edge",
    sections: [
      {
        title: { zh: "边缘 AI", en: "Edge AI" },
        body: {
          zh: "边缘 AI 指模型推理、视觉分析、语音理解和知识检索在靠近设备、产线或城市节点的位置完成。它能减少网络往返、保护敏感资料，并在中心服务不可用时保持核心功能运行，适合对即时性和可靠性要求高的行业。",
          en: "Edge AI runs inference, vision, speech, and retrieval near devices, production lines, or city nodes, reducing network round trips and keeping critical functions available.",
        },
      },
      {
        title: { zh: "RTX Spark 与 GPU 节点", en: "RTX Spark and GPU Nodes" },
        body: {
          zh: "Spark AI 可按场景配置 RTX Spark、工作站级 GPU 或机架式 GPU 节点，承载本地 LLM、视觉模型和向量检索服务。节点可与中心资料湖同步策略、模型版本和知识快取，让企业同时获得现场速度和中心治理能力。",
          en: "Spark AI can deploy RTX Spark, workstation GPUs, or rack GPU nodes for local LLMs, vision models, and vector retrieval synchronized with central governance.",
        },
      },
      {
        title: { zh: "企业推理与低延迟", en: "Enterprise Inference and Low Latency" },
        body: {
          zh: "企业推理需要稳定、可监控、可审计和可控成本，而不只是模型能运行。边缘节点提供本地 API、批量任务、权限控制和日志回传，适合质检、巡检、客服、工单、合规判断和即时告警等高频工作流。",
          en: "Enterprise inference needs stability, observability, auditability, and cost control. Edge nodes expose local APIs, batch jobs, access control, and log sync.",
        },
      },
      {
        title: { zh: "智能工厂与智慧城市", en: "Smart Factory and Smart City" },
        body: {
          zh: "在智能工厂，Edge AI 可分析设备状态、质检影像、维修知识和生产异常；在智慧城市，可处理交通、公共安全、环境监测和服务热线资料。现场产生的资料再回流冷数据中心，形成训练、归档和再优化循环。",
          en: "Factories use Edge AI for equipment, quality, maintenance, and anomaly analysis. Cities use it for traffic, safety, environment, and service workflows.",
        },
      },
    ],
    faqs: faq,
    related: [related.rag, related.cold, related.tech, related.storage],
  },
  storage: {
    slug: "storage",
    href: "/products/storage",
    title: { zh: "产品介绍", en: "Storage Products" },
    eyebrow: { zh: "Spark AI 存储产品线", en: "Spark AI Storage Portfolio" },
    seoDescription: "Spark AI 产品介绍包含型号、容量、规格、应用场景与比较表格，覆盖 NVMe、HDD、Optical 和 Object Storage。",
    description: {
      zh: "Spark AI 存储产品线覆盖高性能 NVMe、容量型 HDD、蓝光光学冷存储与对象存储服务，面向 AI 训练、RAG 知识库、合规归档、备份和 PB 级资料湖。不同产品可按热、温、冷资料策略组合，形成低成本、高可靠、可扩展的企业资料底座。",
      en: "Spark AI storage products cover NVMe, capacity HDD, optical cold storage, and object storage for AI training, RAG, compliance archives, backup, and PB-scale data lakes.",
    },
    heroPoints: [
      { zh: "型号与容量完整", en: "Complete model and capacity options" },
      { zh: "支援多种应用场景", en: "Multiple application scenarios" },
      { zh: "清晰比较表格", en: "Clear comparison table" },
    ],
    illustration: "storage",
    sections: [
      {
        title: { zh: "产品型号", en: "Product Models" },
        body: {
          zh: "产品包括 Spark NVMe Tier、Spark HDD Vault、Spark Optical Archive 和 Spark Object Lake。每个型号对应不同访问频率、吞吐需求和保留周期，可独立部署，也可与 Spark AI 冷数据中心、RAG 平台和 Edge AI 节点整合。",
          en: "Models include Spark NVMe Tier, Spark HDD Vault, Spark Optical Archive, and Spark Object Lake, each mapped to access frequency, throughput, and retention needs.",
        },
      },
      {
        title: { zh: "容量与规格", en: "Capacity and Specifications" },
        body: {
          zh: "容量可从单节点数百 TB 扩展至多机柜 PB 级，支援高吞吐网络、冗余电源、校验、元资料索引和多副本策略。对冷资料场景，光学介质可降低长期供电需求；对 AI 场景，NVMe 与对象存储可提供高并发资料供给。",
          en: "Capacity ranges from hundreds of TB per node to PB-scale cabinets, with high-throughput networking, redundancy, checksums, metadata indexes, and replica policies.",
        },
      },
      {
        title: { zh: "应用场景", en: "Application Scenarios" },
        body: {
          zh: "产品可用于 AI 训练资料湖、RAG 知识库、医疗影像保存、金融合规归档、政府文件库、科研资料共享、备份容灾和企业内容管理。客户可根据资料温度、合规期限和预算选择合适组合。",
          en: "Use cases include AI data lakes, RAG knowledge bases, medical imaging, finance archives, government records, research data, backup, and enterprise content management.",
        },
      },
    ],
    table: {
      headers: [
        { zh: "产品型号", en: "Model" },
        { zh: "容量", en: "Capacity" },
        { zh: "核心规格", en: "Key Specs" },
        { zh: "应用场景", en: "Scenario" },
      ],
      rows: [
        [
          { zh: "Spark NVMe Tier", en: "Spark NVMe Tier" },
          { zh: "100TB-2PB", en: "100TB-2PB" },
          { zh: "高 IOPS、低延迟、GPU 就近供给", en: "High IOPS, low latency, GPU-adjacent" },
          { zh: "AI 训练、热数据、推理快取", en: "AI training, hot data, inference cache" },
        ],
        [
          { zh: "Spark HDD Vault", en: "Spark HDD Vault" },
          { zh: "1PB-50PB", en: "1PB-50PB" },
          { zh: "容量密度高、对象接口、校验保护", en: "Dense capacity, object API, checksums" },
          { zh: "温数据、备份、资料湖", en: "Warm data, backup, data lake" },
        ],
        [
          { zh: "Spark Optical Archive", en: "Spark Optical Archive" },
          { zh: "500TB-100PB+", en: "500TB-100PB+" },
          { zh: "WORM、低功耗、50 年以上保存", en: "WORM, low power, 50+ year retention" },
          { zh: "冷归档、合规、AI 历史资料", en: "Cold archive, compliance, AI history" },
        ],
      ],
    },
    faqs: faq,
    related: [related.cold, related.optical, related.tech, related.cases],
  },
  technology: {
    slug: "technology",
    href: "/technology",
    title: { zh: "技术架构", en: "Technology Architecture" },
    eyebrow: { zh: "AI Data Lake 到企业知识库", en: "From AI Data Lake to Enterprise Knowledge" },
    seoDescription: "Spark AI 技术架构整合 AI Data Lake、NVMe、HDD、Optical、Object Storage、RAG、LLM 与企业知识库。",
    description: {
      zh: "Spark AI 技术架构把 NVMe、HDD、Optical 和 Object Storage 整合为可治理的 AI Data Lake，再透过元资料、全文检索、向量检索、RAG 和 LLM Integration 转化为企业知识库。架构兼顾训练吞吐、长期保存、资料安全、成本控制和 AI 应用落地。",
      en: "Spark AI architecture unifies NVMe, HDD, Optical, and Object Storage into a governed AI Data Lake, then activates it through metadata, search, RAG, LLMs, and enterprise knowledge bases.",
    },
    heroPoints: [
      { zh: "完整 SVG 架构图", en: "Complete SVG architecture diagram" },
      { zh: "多层存储与治理", en: "Tiered storage and governance" },
      { zh: "RAG + LLM + 企业知识库", en: "RAG + LLM + Enterprise KB" },
    ],
    illustration: "technology",
    sections: [
      {
        title: { zh: "AI Data Lake", en: "AI Data Lake" },
        body: {
          zh: "AI Data Lake 是 Spark AI 架构的核心资料底座，统一接入文件、影像、表格、音视频、日志和结构化系统资料。它不只是存放资料，更保存元资料、血缘、权限、品质、索引和使用记录，让模型训练与知识检索都可被追踪和治理。",
          en: "The AI Data Lake ingests documents, media, tables, logs, and system data while preserving metadata, lineage, permissions, quality, indexes, and usage history.",
        },
      },
      {
        title: { zh: "NVMe、HDD、Optical、Object Storage", en: "NVMe, HDD, Optical, Object Storage" },
        body: {
          zh: "不同存储层承担不同任务：NVMe 面向热数据和 GPU 训练，HDD 面向大容量温数据，Optical 面向合规冷归档，Object Storage 提供标准接口与弹性扩展。策略引擎按访问频率、期限和安全要求自动调度资料。",
          en: "NVMe serves hot AI workloads, HDD stores large warm datasets, Optical handles compliant cold archives, and Object Storage provides standard APIs and elastic expansion.",
        },
      },
      {
        title: { zh: "RAG、LLM 与企业知识库", en: "RAG, LLM, and Enterprise Knowledge Base" },
        body: {
          zh: "资料经过 OCR、清洗、切分、嵌入和索引後，可被 RAG 工作流检索并提供给 LLM 生成可引用答案。企业知识库保留来源、版本、权限和审计记录，使 AI 回答不是孤立文本，而是连接到可信资料资产的业务服务。",
          en: "After OCR, cleansing, chunking, embedding, and indexing, RAG retrieves trusted context for LLMs while preserving sources, versions, permissions, and audit records.",
        },
      },
    ],
    faqs: faq,
    related: [related.cold, related.rag, related.edge, related.storage],
  },
  cases: {
    slug: "cases",
    href: "/cases",
    title: { zh: "成功案例", en: "Customer Cases" },
    eyebrow: { zh: "六大行业落地场景", en: "Six Industry Scenarios" },
    seoDescription: "Spark AI 成功案例覆盖智慧医疗、政府档案、金融、制造业、AI 公司与高校科研。",
    description: {
      zh: "Spark AI 的方案可覆盖资料保存、知识激活、模型训练、合规治理和边缘推理多种场景。以下六个案例展示不同机构如何把冷资料、历史文件和业务知识转化为可检索、可训练、可审计、可持续扩展的 AI 基础设施。",
      en: "Spark AI supports retention, knowledge activation, model training, governance, and edge inference. These six scenarios show how organizations turn cold data into AI infrastructure.",
    },
    heroPoints: [
      { zh: "智慧医疗与政府档案", en: "Smart healthcare and government archives" },
      { zh: "金融与制造业", en: "Finance and manufacturing" },
      { zh: "AI 公司与高校科研", en: "AI companies and universities" },
    ],
    illustration: "cases",
    sections: [
      {
        title: { zh: "案例方法论", en: "Case Methodology" },
        body: {
          zh: "每个案例都从资料盘点开始，识别热、温、冷资料比例、合规期限、访问模式和 AI 使用目标。Spark AI 再设计存储分层、索引策略、权限模型和应用接口，确保方案不是单点工具，而是能长期运营的资料基础设施。",
          en: "Each case starts with data assessment, then maps data temperature, retention, access patterns, and AI goals into storage, indexing, permissions, and application APIs.",
        },
      },
    ],
    cases: [
      {
        title: { zh: "智慧医疗", en: "Smart Healthcare" },
        body: {
          zh: "大型医疗机构每天产生病历、影像、检验、病理和研究资料，资料量增长快但保存周期长。Spark AI 可把近期诊疗资料保留在高速层，把历史影像与报告迁入光学冷存储，同时建立 RAG 医疗知识库，支援医生快速查找相似病例、研究团队提取匿名化资料、管理部门完成合规审计。对医院而言，方案降低长期存储成本，也让过去难以利用的影像和文本成为科研与 AI 训练资源。",
          en: "Healthcare organizations generate medical records, imaging, lab reports, pathology, and research data with long retention needs. Spark AI keeps active clinical data fast, archives historical imaging optically, and builds a RAG knowledge base for case retrieval, research, and audit.",
        },
      },
      {
        title: { zh: "政府档案", en: "Government Archives" },
        body: {
          zh: "政府部门需要长期保存公文、图纸、录音、视频、执法记录和公共服务资料，并保证资料可追溯、不可篡改、可按权限查询。Spark AI 以 WORM 光学存储和元资料治理建立可信档案库，让资料在低功耗环境中长期保存。透过全文检索、OCR 和知识图谱，工作人员可快速定位跨年份、跨部门资料，提升政务效率并减少重复调档和人工查找成本。",
          en: "Government agencies preserve documents, drawings, recordings, video, enforcement records, and service data. Spark AI combines WORM optical retention with metadata governance, OCR, full-text search, and knowledge graphs for traceable archives.",
        },
      },
      {
        title: { zh: "金融", en: "Finance" },
        body: {
          zh: "金融机构面对交易记录、客户文件、风控模型、录音、合规报告和审计底稿等大量资料，既要快速检索，也要符合监管保存要求。Spark AI 可建立分层资料湖，把高频交易分析保留在热层，把长期合规记录放入不可篡改冷层，并用 RAG 建立合规助手。业务人员可在权限内查询条款、案例和历史决策，风控团队也可将冷资料用于模型回测和风险识别。",
          en: "Financial institutions manage trades, customer files, risk models, recordings, compliance reports, and audit workpapers. Spark AI creates tiered retention, immutable archives, and RAG compliance assistants for governed search and risk analysis.",
        },
      },
      {
        title: { zh: "制造业", en: "Manufacturing" },
        body: {
          zh: "制造企业保存设备日志、质检影像、工艺参数、维修记录、供应链资料和安全监控视频。Spark AI 可在工厂部署 Edge AI 节点进行即时质检和异常告警，并把历史资料回流冷数据中心保存。RAG 知识库可连接维修手册、过往故障和工程师经验，协助现场人员快速定位原因。长期累积的冷资料则可用于优化工艺、训练缺陷检测模型和支持管理决策。",
          en: "Manufacturers store equipment logs, inspection images, process parameters, maintenance records, supply-chain data, and video. Spark AI deploys edge inference for local inspection and archives historical data for RAG and model improvement.",
        },
      },
      {
        title: { zh: "AI 公司", en: "AI Companies" },
        body: {
          zh: "AI 公司需要管理训练语料、标注结果、模型版本、评估资料、合成资料和客户私有资料。Spark AI 提供从热训练集到冷归档的完整资料生命周期，让研发团队能追溯每次模型训练所用资料，也能把低频但重要的历史资料低成本保存。透过元资料、权限和对象接口，平台支援多团队协作、资料复用、模型回滚和合规交付，减少资料孤岛和重复采集成本。",
          en: "AI companies manage corpora, labels, model versions, evaluation sets, synthetic data, and private customer data. Spark AI tracks training lineage, stores cold history economically, and supports collaboration through metadata and object APIs.",
        },
      },
      {
        title: { zh: "高校科研", en: "University Research" },
        body: {
          zh: "高校与科研机构常有跨学科资料，包括实验数据、论文、图像、测序资料、天文观测、社会调查和教学资源。Spark AI 可建立共享资料湖与冷存储平台，按课题组、项目和资料敏感级别管理权限。研究人员可用 RAG 查找文献、实验记录和历史数据，也可把长期保存资料用于模型训练。平台能提升资料复用率，支持科研诚信、成果沉淀和跨院系合作。",
          en: "Universities manage experiments, papers, images, sequencing data, observations, surveys, and teaching resources. Spark AI builds shared data lakes, governed archives, and RAG assistants for research reuse and collaboration.",
        },
      },
    ],
    faqs: faq,
    related: [related.cold, related.rag, related.bank, related.edge],
  },
  about: {
    slug: "about",
    href: "/about",
    title: { zh: "关于 Spark AI", en: "About Spark AI" },
    eyebrow: { zh: "AI 冷数据基础设施公司", en: "AI Cold Data Infrastructure Company" },
    seoDescription: "关于 Spark AI：公司愿景、使命、核心价值、技术优势与发展里程碑。",
    description: {
      zh: "Spark AI 专注于 AI 冷数据基础设施，结合光学存储、RAG 知识平台、Data Asset Bank 和 Edge AI，帮助政府、金融、医疗、科研与企业把沉睡数据转化为可保存、可检索、可训练和可资产化的长期价值。",
      en: "Spark AI focuses on AI cold data infrastructure, combining optical storage, RAG, Data Asset Bank, and Edge AI to activate long-term data value.",
    },
    heroPoints: [
      { zh: "愿景：成为亚洲 AI 冷数据枢纽", en: "Vision: Asian AI cold data hub" },
      { zh: "使命：激活沉睡资料价值", en: "Mission: activate dormant data" },
      { zh: "价值：安全、节能、可信、可扩展", en: "Values: secure, efficient, trusted, scalable" },
    ],
    illustration: "about",
    sections: [
      {
        title: { zh: "公司愿景", en: "Vision" },
        body: {
          zh: "Spark AI 的愿景是成为亚洲领先的 AI 冷数据基础设施与资料资产化平台，让香港成为连接国际资本、企业资料、科研能力和 AI 应用的可信枢纽。我们相信 AI 的下一阶段竞争不只在算力，也在可长期保存并被安全激活的资料。",
          en: "Spark AI aims to become a leading Asian AI cold data infrastructure and data assetization platform, connecting capital, enterprise data, research, and AI applications.",
        },
      },
      {
        title: { zh: "使命", en: "Mission" },
        body: {
          zh: "我们的使命是把沉睡在磁带、硬盘、文件系统、影像库和业务系统中的冷数据转化为 AI 可使用的知识与资产。通过低成本保存、可信治理、RAG 激活和边缘推理，Spark AI 帮助客户建立面向未来十年的数据基础设施。",
          en: "Our mission is to turn dormant archives, file systems, media repositories, and business data into AI-ready knowledge and assets through retention, governance, RAG, and edge inference.",
        },
      },
      {
        title: { zh: "核心价值", en: "Core Values" },
        body: {
          zh: "Spark AI 重视安全、可靠、节能、开放和长期主义。平台设计以客户资料主权为前提，让资料在可控权限、可审计流程和可验证来源下被使用。我们追求真正可运营的基础设施，而不是短期展示型 AI 工具。",
          en: "Spark AI values security, reliability, efficiency, openness, and long-term thinking. We build operational infrastructure rather than short-lived AI demos.",
        },
      },
      {
        title: { zh: "技术优势", en: "Technology Strengths" },
        body: {
          zh: "技术优势包括 100PB 级架构、光学冷存储、WORM 防篡改、资料分层策略、全文与向量混合检索、RAG 工作流、LLM Integration 和 Edge AI 节点。这些能力共同支撑资料保存、知识激活、模型训练和资产化流通。",
          en: "Technology strengths include 100PB architecture, optical cold storage, WORM, tiering, hybrid search, RAG workflows, LLM integration, and Edge AI nodes.",
        },
      },
    ],
    timeline: [
      { zh: "启动 AI 冷数据中心规划与核心平台设计", en: "Launch AI cold data center planning and core platform design" },
      { zh: "部署 RAG 知识平台与光学归档产品线", en: "Deploy RAG platform and optical archive product line" },
      { zh: "拓展 Data Asset Bank 与行业资料资产方案", en: "Expand Data Asset Bank and industry data asset solutions" },
      { zh: "形成跨区 AI 冷数据网络与生态合作", en: "Build cross-region AI cold data network and ecosystem partnerships" },
    ],
    faqs: faq,
    related: [related.cold, related.rag, related.bank, related.cases],
  },
} satisfies Record<string, ContentPageData>;

export type ContentPageKey = keyof typeof contentPages;
