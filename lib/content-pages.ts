import type { ContentPageData } from "@/components/sections/spark-content-page";

const faq = [
  {
    title: { zh: "是否可分階段部署？", en: "Can deployment be phased?" },
    body: {
      zh: "可以。Spark AI 通常先以評估、試點、正式集群與跨區擴容四個階段推進，讓客戶在不中斷原有業務的前提下逐步接入數據、權限、檢索和 AI 應用。",
      en: "Yes. Spark AI can begin with assessment and pilot workloads, then expand into production clusters and cross-site capacity without disrupting existing business systems.",
    },
  },
  {
    title: { zh: "如何保障資料安全？", en: "How is data secured?" },
    body: {
      zh: "平台以權限分層、加密、審計、WORM、離線保留與元資料治理共同保護資料，並可按行業合規要求設計保留週期、訪問流程和備份策略。",
      en: "The platform combines layered access control, encryption, auditing, WORM retention, offline copies, and metadata governance to meet industry compliance needs.",
    },
  },
];

const related = {
  cold: { zh: "AI 冷數據中心", en: "AI Cold Data Center" },
  optical: { zh: "藍光存儲", en: "Optical Storage" },
  rag: { zh: "AI Knowledge Platform", en: "AI Knowledge Platform" },
  bank: { zh: "Data Asset Bank", en: "Data Asset Bank" },
  edge: { zh: "Edge AI", en: "Edge AI" },
  storage: { zh: "產品介紹", en: "Storage Products" },
  tech: { zh: "技術架構", en: "Technology Architecture" },
  cases: { zh: "成功案例", en: "Cases" },
  about: { zh: "關於 Spark AI", en: "About Spark AI" },
};

export const contentPages = {
  "ai-cold-data": {
    slug: "ai-cold-data",
    href: "/solutions/ai-cold-data",
    title: { zh: "AI 冷數據中心", en: "AI Cold Data Center" },
    eyebrow: { zh: "100PB 級 AI 數據基礎設施", en: "100PB AI Data Infrastructure" },
    seoDescription: "Spark AI AI 冷數據中心提供 100PB Scale Architecture，支援 AI 訓練、RAG、低成本長期保存與企業資料安全治理。",
    description: {
      zh: "Spark AI 冷數據中心面向 AI 時代大量未被使用的歷史資料、影像、文件和備份資料，建立可治理、可檢索、可訓練、可長期保存的 100PB 級平台。平台以熱、溫、冷資料生命週期為核心，結合光學冷存儲、對象存儲與 RAG 索引能力，協助企業降低成本、節省能源並重新激活沉睡資料價值。",
      en: "Spark AI Cold Data Center turns dormant files, archives, media, and historical enterprise data into governed, searchable, trainable, and durable AI infrastructure at 100PB scale.",
    },
    heroPoints: [
      { zh: "降低 80% 存儲成本", en: "Reduce storage cost by up to 80%" },
      { zh: "支援 AI 訓練與 RAG", en: "Support AI training and RAG" },
      { zh: "PB 級彈性擴充", en: "PB-scale expansion" },
    ],
    illustration: "cold-data",
    sections: [
      {
        title: { zh: "AI 訓練資料生命周期", en: "AI Training Data Lifecycle" },
        body: {
          zh: "AI 訓練資料從產生、清洗、標註、向量化、訓練、驗證到長期歸檔，會在不同階段呈現完全不同的訪問頻率和價值密度。Spark AI 以生命周期策略自動分層，把高頻資料留在高速層，把可追溯、可復用的歷史資料遷入低成本冷層，讓資料既能被模型使用，也能被合規保存。",
          en: "AI data moves through creation, cleansing, labeling, vectorization, training, validation, and archive phases. Spark AI tiers each phase by access frequency and value, keeping active data fast while preserving reusable history at low cost.",
        },
      },
      {
        title: { zh: "熱數據", en: "Hot Data" },
        body: {
          zh: "熱數據包括正在訓練、推理、檢索和協作中的資料，通常需要毫秒級訪問、頻繁更新和高併發吞吐。Spark AI 將熱數據放在 NVMe、GPU 節點附近或高性能對象存儲中，確保模型訓練、知識問答與業務應用可以快速取得最新資料。",
          en: "Hot data is actively used for training, inference, search, and collaboration. It needs low latency and high throughput, so Spark AI places it close to NVMe, GPU nodes, and high-performance object storage.",
        },
      },
      {
        title: { zh: "溫數據", en: "Warm Data" },
        body: {
          zh: "溫數據是仍具業務價值但訪問頻率下降的資料，例如近期項目文件、標註結果、影像副本和模型評估資料。平台會保留索引、權限和元資料，並把內容遷移至成本更低的 HDD 或對象存儲，兼顧查詢效率與存儲經濟性。",
          en: "Warm data still has business value but is accessed less often. Spark AI keeps metadata, permissions, and indexes active while moving payloads to more economical HDD or object tiers.",
        },
      },
      {
        title: { zh: "冷數據", en: "Cold Data" },
        body: {
          zh: "冷數據是長期保存、低頻訪問但對合規、科研、模型再訓練和 RAG 補充知識非常重要的資料。Spark AI 以光學存儲、WORM、離線副本和元資料索引保護這些資料，使企業能在低功耗、低成本環境中保留可被 AI 再次利用的資料底座。",
          en: "Cold data is rarely accessed but essential for compliance, research, retraining, and RAG enrichment. Optical storage, WORM retention, offline copies, and metadata indexes make it durable and AI-ready.",
        },
      },
      {
        title: { zh: "Spark AI 冷數據平台架構", en: "Spark AI Cold Data Platform Architecture" },
        body: {
          zh: "平台由接入層、治理層、存儲分層、索引層和 AI 應用層組成。資料先經過分類、去重、權限映射和元資料抽取，再按策略落入 NVMe、HDD、Optical 或 Object Storage，最後透過全文檢索、向量檢索與 API 提供給 RAG、訓練和企業應用。",
          en: "The architecture combines ingestion, governance, tiered storage, indexing, and AI application layers, exposing governed data to RAG, training, and enterprise systems through search and APIs.",
        },
      },
      {
        title: { zh: "100PB Scale Architecture", en: "100PB Scale Architecture" },
        body: {
          zh: "100PB 架構強調容量、可用性、成本和運維的平衡。Spark AI 以模組化機櫃、分區元資料、異地副本、自動校驗和容量預測管理大規模資料池，讓客戶可以從單一業務域開始，逐步擴展到多部門、多城市和跨境資料網絡。",
          en: "The 100PB design balances capacity, availability, cost, and operations through modular cabinets, partitioned metadata, remote copies, integrity checks, and capacity forecasting.",
        },
        bullets: [
          { zh: "節省能源並降低機房散熱壓力", en: "Save energy and cooling cost" },
          { zh: "提升資料安全與防篡改能力", en: "Improve data security and tamper resistance" },
          { zh: "支援 AI 訓練、RAG 與 PB 級擴充", en: "Support AI training, RAG, and PB expansion" },
        ],
      },
    ],
    faqs: faq,
    related: [related.optical, related.rag, related.storage, related.tech],
  },
  "optical-storage": {
    slug: "optical-storage",
    href: "/solutions/optical-storage",
    title: { zh: "藍光存儲", en: "Optical Storage" },
    eyebrow: { zh: "長期保存與低功耗冷存儲", en: "Long-term Low-power Cold Storage" },
    seoDescription: "Spark AI 藍光光學冷存儲支援 WORM、防病毒、50 年以上保存、低功耗與碳中和資料歸檔。",
    description: {
      zh: "藍光存儲以不可篡改、低功耗和長壽命為核心，適合政府、醫院、金融、檔案館與 AI 資料湖的長期歸檔。相較 HDD 長期旋轉、遷移與維護成本，光學冷存儲可在離線或近線狀態保存關鍵資料，降低病毒風險、能源消耗和碳排壓力。",
      en: "Optical cold storage provides immutable, low-power, long-life retention for government, healthcare, finance, archives, and AI data lakes.",
    },
    heroPoints: [
      { zh: "WORM 防篡改", en: "WORM immutability" },
      { zh: "50 年以上保存", en: "50+ year retention" },
      { zh: "低功耗與碳中和", en: "Low power and carbon goals" },
    ],
    illustration: "optical",
    sections: [
      {
        title: { zh: "什麼是光學冷存儲", en: "What Is Optical Cold Storage" },
        body: {
          zh: "光學冷存儲使用藍光光碟或企業級光學介質保存低頻訪問資料，資料寫入後可長期離線或近線保管。它不依賴磁碟持續旋轉，具備天然隔離、抗電磁干擾和長壽命優勢，特別適合歸檔、備份、證據保全與 AI 歷史資料留存。",
          en: "Optical cold storage stores low-access data on enterprise optical media that can remain offline or nearline for long periods, reducing power, malware, and retention risk.",
        },
      },
      {
        title: { zh: "為何比 HDD 更適合長期保存", en: "Why It Beats HDD for Long Retention" },
        body: {
          zh: "HDD 適合頻繁讀寫，但長期保存需要供電、散熱、巡檢、遷移和故障更換。光學介質在冷層資料場景中更穩定，能降低電力和運維支出，並透過介質壽命、批量校驗與多副本策略降低多年保存的不確定性。",
          en: "HDD is strong for active workloads, but retention requires power, cooling, refresh, and replacement. Optical media is more economical for cold archives that need durability over decades.",
        },
      },
      {
        title: { zh: "WORM 與防病毒", en: "WORM and Anti-virus Protection" },
        body: {
          zh: "WORM 代表一次寫入、多次讀取，資料寫入後不能被覆蓋或刪改，適合合規存證和不可篡改歸檔。當介質離線保存時，勒索軟件與網絡病毒難以直接感染原始資料，為企業提供最後一道資料保護防線。",
          en: "WORM means write once, read many. Combined with offline retention, it limits tampering and reduces ransomware exposure for critical archives.",
        },
      },
      {
        title: { zh: "典型應用", en: "Typical Applications" },
        body: {
          zh: "政府可保存公文和影像，醫院可保存病歷與影像，金融可保存交易與合規記錄，檔案館可保存數字文化資產，AI 資料湖可保存訓練語料、標註資料與模型版本。這些資料不需要每天讀取，但必須長期可靠存在。",
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
    eyebrow: { zh: "企業 RAG 知識平台", en: "Enterprise RAG Platform" },
    seoDescription: "Spark AI RAG 平台整合全文檢索、向量檢索、多模態、知識圖譜與 LLM Integration，激活企業知識庫。",
    description: {
      zh: "Spark AI Knowledge Platform 以 RAG 為核心，把企業文件、圖像、影片、表格、制度和歷史案例轉化為可檢索、可引用、可追溯的知識服務。平台結合全文檢索、向量檢索、多模態理解、知識圖譜和 LLM Integration，幫助企業在不重新訓練大模型的情況下快速建立可靠 AI 助手。",
      en: "Spark AI Knowledge Platform uses RAG to transform enterprise documents, media, tables, policies, and historical cases into searchable, traceable, LLM-ready knowledge services.",
    },
    heroPoints: [
      { zh: "全文與向量混合檢索", en: "Hybrid full-text and vector search" },
      { zh: "多模態知識理解", en: "Multimodal knowledge understanding" },
      { zh: "LLM Integration", en: "LLM integration" },
    ],
    illustration: "rag",
    sections: [
      {
        title: { zh: "什麼是 RAG", en: "What Is RAG" },
        body: {
          zh: "RAG 是 Retrieval-Augmented Generation，透過先檢索企業可信資料，再交由大模型生成回答，減少幻覺並提高可追溯性。它特別適合政策查詢、客服、合規審核、技術支援和內部知識管理，能讓企業在保留私有資料控制權的同時導入生成式 AI。",
          en: "RAG retrieves trusted enterprise knowledge before asking an LLM to generate an answer, reducing hallucination and improving traceability for practical business use.",
        },
      },
      {
        title: { zh: "全文檢索與向量檢索", en: "Full-text and Vector Retrieval" },
        body: {
          zh: "全文檢索擅長精準匹配關鍵字、編號、法規條文和專有名詞；向量檢索擅長理解語義相近但字面不同的問題。Spark AI 將兩者融合，並加入權限、時間、部門、可信度和資料類型過濾，讓回答更精準、更符合企業治理要求。",
          en: "Full-text search handles exact terms and identifiers, while vector search understands semantic similarity. Spark AI combines both with permissions, timestamps, departments, trust scores, and content filters.",
        },
      },
      {
        title: { zh: "多模態與知識圖譜", en: "Multimodal and Knowledge Graph" },
        body: {
          zh: "企業知識不只存在於文字，也存在於掃描件、表格、圖像、影片、音頻和結構化系統。平台可抽取實體、關係、時間線和引用來源，建立知識圖譜，讓 AI 不僅能回答內容，也能理解人、事、物與流程之間的連結。",
          en: "Enterprise knowledge spans documents, scans, tables, images, videos, audio, and systems. Knowledge graphs connect entities, events, timelines, and references for deeper reasoning.",
        },
      },
      {
        title: { zh: "Spark AI RAG Architecture", en: "Spark AI RAG Architecture" },
        body: {
          zh: "架構包括資料接入、OCR、清洗、切分、嵌入、索引、權限同步、提示模板、LLM 連接和審計回放。每次回答都可返回來源片段、置信度和版本資訊，方便企業管理風險、優化知識庫並持續提升 AI 問答質量。",
          en: "The architecture includes ingestion, OCR, cleansing, chunking, embeddings, indexing, permission sync, prompt templates, LLM connectors, and audit replay.",
        },
      },
      {
        title: { zh: "企業應用案例", en: "Enterprise Use Cases" },
        body: {
          zh: "典型應用包括內部制度問答、醫療影像報告檢索、金融合規助手、工程維修知識庫、客服工單推薦和研究資料問答。RAG 讓過去分散在多套系統的知識被統一索引，並以自然語言方式服務員工、客戶和合作夥伴。",
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
    eyebrow: { zh: "企業數據資產化平台", en: "Enterprise Data Assetization" },
    seoDescription: "Spark AI Data Asset Bank 支援數據治理、確權、估值、交易、AI 資料資產與香港數據資產中心定位。",
    description: {
      zh: "Data Asset Bank 協助企業把分散、沉睡、難以計量的資料轉化為可治理、可確權、可估值和可流通的數據資產。平台以安全合規為前提，建立元資料、權限、品質、用途、估值和交易流程，讓 AI 資料資產從成本中心走向價值中心。",
      en: "Data Asset Bank helps enterprises turn scattered data into governed, rights-confirmed, valued, and tradable data assets for the AI economy.",
    },
    heroPoints: [
      { zh: "數據治理與確權", en: "Governance and rights confirmation" },
      { zh: "數據估值與交易", en: "Valuation and circulation" },
      { zh: "AI 資料資產", en: "AI data assets" },
    ],
    illustration: "bank",
    sections: [
      {
        title: { zh: "企業數據資產化", en: "Enterprise Data Assetization" },
        body: {
          zh: "企業擁有大量文件、交易、影像、傳感器和客戶互動資料，但多數仍停留在存儲成本項目中。資產化的第一步是識別資料類型、來源、品質、權屬和可用場景，再建立可審計的管理流程，使資料能被 AI、業務和合作方合規使用。",
          en: "Enterprises hold documents, transactions, media, sensor data, and customer interactions, but most remains a cost item. Assetization identifies source, quality, rights, and usable scenarios.",
        },
      },
      {
        title: { zh: "數據治理", en: "Data Governance" },
        body: {
          zh: "治理包含分類分級、元資料管理、權限控制、品質評估、脫敏、審計和留存策略。Spark AI 將治理嵌入存儲、檢索和 AI 使用流程，確保資料在被激活之前已具備清晰邊界，避免權限混亂和不可追溯的模型使用風險。",
          en: "Governance covers classification, metadata, access control, quality, masking, audit, and retention policies embedded into storage, retrieval, and AI workflows.",
        },
      },
      {
        title: { zh: "數據確權與估值", en: "Rights Confirmation and Valuation" },
        body: {
          zh: "數據確權釐清資料來源、使用權、收益權和責任邊界；估值則參考稀缺性、完整性、時效性、可替代性、合規風險和 AI 應用效果。平台可形成資料資產台帳，支援管理層評估投資回報和外部合作價值。",
          en: "Rights confirmation clarifies source, usage, revenue, and responsibility. Valuation considers scarcity, completeness, freshness, substitutability, compliance risk, and AI impact.",
        },
      },
      {
        title: { zh: "數據交易與香港定位", en: "Data Trading and Hong Kong Positioning" },
        body: {
          zh: "未來香港可憑藉國際金融、法律、科研和跨境數據服務優勢，成為亞洲可信數據資產樞紐。Data Asset Bank 可支援合規撮合、授權使用、模型訓練資料包和行業資料產品，推動數據在安全邊界內創造新價值。",
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
    eyebrow: { zh: "低延遲企業推理節點", en: "Low-latency Enterprise Inference" },
    seoDescription: "Spark AI Edge AI 支援 RTX Spark、GPU 節點、企業推理、低延遲、離線 AI、智能工廠與智慧城市。",
    description: {
      zh: "Edge AI 將 GPU 推理、RAG 快取和本地知識庫部署到靠近業務現場的位置，支援低延遲、離線可用和資料不出域的企業 AI。對智能工廠、智慧城市、零售、醫療和安防場景而言，邊緣節點能讓 AI 在現場即時判斷，並與中心冷數據平台形成閉環。",
      en: "Edge AI deploys GPU inference, RAG cache, and local knowledge bases near business sites for low-latency, offline-capable, domain-controlled enterprise AI.",
    },
    heroPoints: [
      { zh: "RTX Spark 與 GPU 節點", en: "RTX Spark and GPU nodes" },
      { zh: "低延遲企業推理", en: "Low-latency enterprise inference" },
      { zh: "離線 AI 與現場決策", en: "Offline AI and local decisions" },
    ],
    illustration: "edge",
    sections: [
      {
        title: { zh: "邊緣 AI", en: "Edge AI" },
        body: {
          zh: "邊緣 AI 指模型推理、視覺分析、語音理解和知識檢索在靠近設備、產線或城市節點的位置完成。它能減少網絡往返、保護敏感資料，並在中心服務不可用時保持核心功能運行，適合對即時性和可靠性要求高的行業。",
          en: "Edge AI runs inference, vision, speech, and retrieval near devices, production lines, or city nodes, reducing network round trips and keeping critical functions available.",
        },
      },
      {
        title: { zh: "RTX Spark 與 GPU 節點", en: "RTX Spark and GPU Nodes" },
        body: {
          zh: "Spark AI 可按場景配置 RTX Spark、工作站級 GPU 或機架式 GPU 節點，承載本地 LLM、視覺模型和向量檢索服務。節點可與中心資料湖同步策略、模型版本和知識快取，讓企業同時獲得現場速度和中心治理能力。",
          en: "Spark AI can deploy RTX Spark, workstation GPUs, or rack GPU nodes for local LLMs, vision models, and vector retrieval synchronized with central governance.",
        },
      },
      {
        title: { zh: "企業推理與低延遲", en: "Enterprise Inference and Low Latency" },
        body: {
          zh: "企業推理需要穩定、可監控、可審計和可控成本，而不只是模型能運行。邊緣節點提供本地 API、批量任務、權限控制和日志回傳，適合質檢、巡檢、客服、工單、合規判斷和即時告警等高頻工作流。",
          en: "Enterprise inference needs stability, observability, auditability, and cost control. Edge nodes expose local APIs, batch jobs, access control, and log sync.",
        },
      },
      {
        title: { zh: "智能工廠與智慧城市", en: "Smart Factory and Smart City" },
        body: {
          zh: "在智能工廠，Edge AI 可分析設備狀態、質檢影像、維修知識和生產異常；在智慧城市，可處理交通、公共安全、環境監測和服務熱線資料。現場產生的資料再回流冷數據中心，形成訓練、歸檔和再優化循環。",
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
    title: { zh: "產品介紹", en: "Storage Products" },
    eyebrow: { zh: "Spark AI 存儲產品線", en: "Spark AI Storage Portfolio" },
    seoDescription: "Spark AI 產品介紹包含型號、容量、規格、應用場景與比較表格，覆蓋 NVMe、HDD、Optical 和 Object Storage。",
    description: {
      zh: "Spark AI 存儲產品線覆蓋高性能 NVMe、容量型 HDD、藍光光學冷存儲與對象存儲服務，面向 AI 訓練、RAG 知識庫、合規歸檔、備份和 PB 級資料湖。不同產品可按熱、溫、冷資料策略組合，形成低成本、高可靠、可擴展的企業資料底座。",
      en: "Spark AI storage products cover NVMe, capacity HDD, optical cold storage, and object storage for AI training, RAG, compliance archives, backup, and PB-scale data lakes.",
    },
    heroPoints: [
      { zh: "型號與容量完整", en: "Complete model and capacity options" },
      { zh: "支援多種應用場景", en: "Multiple application scenarios" },
      { zh: "清晰比較表格", en: "Clear comparison table" },
    ],
    illustration: "storage",
    sections: [
      {
        title: { zh: "產品型號", en: "Product Models" },
        body: {
          zh: "產品包括 Spark NVMe Tier、Spark HDD Vault、Spark Optical Archive 和 Spark Object Lake。每個型號對應不同訪問頻率、吞吐需求和保留週期，可獨立部署，也可與 Spark AI 冷數據中心、RAG 平台和 Edge AI 節點整合。",
          en: "Models include Spark NVMe Tier, Spark HDD Vault, Spark Optical Archive, and Spark Object Lake, each mapped to access frequency, throughput, and retention needs.",
        },
      },
      {
        title: { zh: "容量與規格", en: "Capacity and Specifications" },
        body: {
          zh: "容量可從單節點數百 TB 擴展至多機櫃 PB 級，支援高吞吐網絡、冗餘電源、校驗、元資料索引和多副本策略。對冷資料場景，光學介質可降低長期供電需求；對 AI 場景，NVMe 與對象存儲可提供高併發資料供給。",
          en: "Capacity ranges from hundreds of TB per node to PB-scale cabinets, with high-throughput networking, redundancy, checksums, metadata indexes, and replica policies.",
        },
      },
      {
        title: { zh: "應用場景", en: "Application Scenarios" },
        body: {
          zh: "產品可用於 AI 訓練資料湖、RAG 知識庫、醫療影像保存、金融合規歸檔、政府文件庫、科研資料共享、備份容災和企業內容管理。客戶可根據資料溫度、合規期限和預算選擇合適組合。",
          en: "Use cases include AI data lakes, RAG knowledge bases, medical imaging, finance archives, government records, research data, backup, and enterprise content management.",
        },
      },
    ],
    table: {
      headers: [
        { zh: "產品型號", en: "Model" },
        { zh: "容量", en: "Capacity" },
        { zh: "核心規格", en: "Key Specs" },
        { zh: "應用場景", en: "Scenario" },
      ],
      rows: [
        [
          { zh: "Spark NVMe Tier", en: "Spark NVMe Tier" },
          { zh: "100TB-2PB", en: "100TB-2PB" },
          { zh: "高 IOPS、低延遲、GPU 就近供給", en: "High IOPS, low latency, GPU-adjacent" },
          { zh: "AI 訓練、熱數據、推理快取", en: "AI training, hot data, inference cache" },
        ],
        [
          { zh: "Spark HDD Vault", en: "Spark HDD Vault" },
          { zh: "1PB-50PB", en: "1PB-50PB" },
          { zh: "容量密度高、對象接口、校驗保護", en: "Dense capacity, object API, checksums" },
          { zh: "溫數據、備份、資料湖", en: "Warm data, backup, data lake" },
        ],
        [
          { zh: "Spark Optical Archive", en: "Spark Optical Archive" },
          { zh: "500TB-100PB+", en: "500TB-100PB+" },
          { zh: "WORM、低功耗、50 年以上保存", en: "WORM, low power, 50+ year retention" },
          { zh: "冷歸檔、合規、AI 歷史資料", en: "Cold archive, compliance, AI history" },
        ],
      ],
    },
    faqs: faq,
    related: [related.cold, related.optical, related.tech, related.cases],
  },
  technology: {
    slug: "technology",
    href: "/technology",
    title: { zh: "技術架構", en: "Technology Architecture" },
    eyebrow: { zh: "AI Data Lake 到企業知識庫", en: "From AI Data Lake to Enterprise Knowledge" },
    seoDescription: "Spark AI 技術架構整合 AI Data Lake、NVMe、HDD、Optical、Object Storage、RAG、LLM 與企業知識庫。",
    description: {
      zh: "Spark AI 技術架構把 NVMe、HDD、Optical 和 Object Storage 整合為可治理的 AI Data Lake，再透過元資料、全文檢索、向量檢索、RAG 和 LLM Integration 轉化為企業知識庫。架構兼顧訓練吞吐、長期保存、資料安全、成本控制和 AI 應用落地。",
      en: "Spark AI architecture unifies NVMe, HDD, Optical, and Object Storage into a governed AI Data Lake, then activates it through metadata, search, RAG, LLMs, and enterprise knowledge bases.",
    },
    heroPoints: [
      { zh: "完整 SVG 架構圖", en: "Complete SVG architecture diagram" },
      { zh: "多層存儲與治理", en: "Tiered storage and governance" },
      { zh: "RAG + LLM + 企業知識庫", en: "RAG + LLM + Enterprise KB" },
    ],
    illustration: "technology",
    sections: [
      {
        title: { zh: "AI Data Lake", en: "AI Data Lake" },
        body: {
          zh: "AI Data Lake 是 Spark AI 架構的核心資料底座，統一接入文件、影像、表格、音視頻、日志和結構化系統資料。它不只是存放資料，更保存元資料、血緣、權限、品質、索引和使用記錄，讓模型訓練與知識檢索都可被追蹤和治理。",
          en: "The AI Data Lake ingests documents, media, tables, logs, and system data while preserving metadata, lineage, permissions, quality, indexes, and usage history.",
        },
      },
      {
        title: { zh: "NVMe、HDD、Optical、Object Storage", en: "NVMe, HDD, Optical, Object Storage" },
        body: {
          zh: "不同存儲層承擔不同任務：NVMe 面向熱數據和 GPU 訓練，HDD 面向大容量溫數據，Optical 面向合規冷歸檔，Object Storage 提供標準接口與彈性擴展。策略引擎按訪問頻率、期限和安全要求自動調度資料。",
          en: "NVMe serves hot AI workloads, HDD stores large warm datasets, Optical handles compliant cold archives, and Object Storage provides standard APIs and elastic expansion.",
        },
      },
      {
        title: { zh: "RAG、LLM 與企業知識庫", en: "RAG, LLM, and Enterprise Knowledge Base" },
        body: {
          zh: "資料經過 OCR、清洗、切分、嵌入和索引後，可被 RAG 工作流檢索並提供給 LLM 生成可引用答案。企業知識庫保留來源、版本、權限和審計記錄，使 AI 回答不是孤立文本，而是連接到可信資料資產的業務服務。",
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
    eyebrow: { zh: "六大行業落地場景", en: "Six Industry Scenarios" },
    seoDescription: "Spark AI 成功案例覆蓋智慧醫療、政府檔案、金融、製造業、AI 公司與高校科研。",
    description: {
      zh: "Spark AI 的方案可覆蓋資料保存、知識激活、模型訓練、合規治理和邊緣推理多種場景。以下六個案例展示不同機構如何把冷資料、歷史文件和業務知識轉化為可檢索、可訓練、可審計、可持續擴展的 AI 基礎設施。",
      en: "Spark AI supports retention, knowledge activation, model training, governance, and edge inference. These six scenarios show how organizations turn cold data into AI infrastructure.",
    },
    heroPoints: [
      { zh: "智慧醫療與政府檔案", en: "Smart healthcare and government archives" },
      { zh: "金融與製造業", en: "Finance and manufacturing" },
      { zh: "AI 公司與高校科研", en: "AI companies and universities" },
    ],
    illustration: "cases",
    sections: [
      {
        title: { zh: "案例方法論", en: "Case Methodology" },
        body: {
          zh: "每個案例都從資料盤點開始，識別熱、溫、冷資料比例、合規期限、訪問模式和 AI 使用目標。Spark AI 再設計存儲分層、索引策略、權限模型和應用接口，確保方案不是單點工具，而是能長期運營的資料基礎設施。",
          en: "Each case starts with data assessment, then maps data temperature, retention, access patterns, and AI goals into storage, indexing, permissions, and application APIs.",
        },
      },
    ],
    cases: [
      {
        title: { zh: "智慧醫療", en: "Smart Healthcare" },
        body: {
          zh: "大型醫療機構每天產生病歷、影像、檢驗、病理和研究資料，資料量增長快但保存週期長。Spark AI 可把近期診療資料保留在高速層，把歷史影像與報告遷入光學冷存儲，同時建立 RAG 醫療知識庫，支援醫生快速查找相似病例、研究團隊提取匿名化資料、管理部門完成合規審計。對醫院而言，方案降低長期存儲成本，也讓過去難以利用的影像和文本成為科研與 AI 訓練資源。",
          en: "Healthcare organizations generate medical records, imaging, lab reports, pathology, and research data with long retention needs. Spark AI keeps active clinical data fast, archives historical imaging optically, and builds a RAG knowledge base for case retrieval, research, and audit.",
        },
      },
      {
        title: { zh: "政府檔案", en: "Government Archives" },
        body: {
          zh: "政府部門需要長期保存公文、圖紙、錄音、視頻、執法記錄和公共服務資料，並保證資料可追溯、不可篡改、可按權限查詢。Spark AI 以 WORM 光學存儲和元資料治理建立可信檔案庫，讓資料在低功耗環境中長期保存。透過全文檢索、OCR 和知識圖譜，工作人員可快速定位跨年份、跨部門資料，提升政務效率並減少重複調檔和人工查找成本。",
          en: "Government agencies preserve documents, drawings, recordings, video, enforcement records, and service data. Spark AI combines WORM optical retention with metadata governance, OCR, full-text search, and knowledge graphs for traceable archives.",
        },
      },
      {
        title: { zh: "金融", en: "Finance" },
        body: {
          zh: "金融機構面對交易記錄、客戶文件、風控模型、錄音、合規報告和審計底稿等大量資料，既要快速檢索，也要符合監管保存要求。Spark AI 可建立分層資料湖，把高頻交易分析保留在熱層，把長期合規記錄放入不可篡改冷層，並用 RAG 建立合規助手。業務人員可在權限內查詢條款、案例和歷史決策，風控團隊也可將冷資料用於模型回測和風險識別。",
          en: "Financial institutions manage trades, customer files, risk models, recordings, compliance reports, and audit workpapers. Spark AI creates tiered retention, immutable archives, and RAG compliance assistants for governed search and risk analysis.",
        },
      },
      {
        title: { zh: "製造業", en: "Manufacturing" },
        body: {
          zh: "製造企業保存設備日志、質檢影像、工藝參數、維修記錄、供應鏈資料和安全監控視頻。Spark AI 可在工廠部署 Edge AI 節點進行即時質檢和異常告警，並把歷史資料回流冷數據中心保存。RAG 知識庫可連接維修手冊、過往故障和工程師經驗，協助現場人員快速定位原因。長期累積的冷資料則可用於優化工藝、訓練缺陷檢測模型和支援管理決策。",
          en: "Manufacturers store equipment logs, inspection images, process parameters, maintenance records, supply-chain data, and video. Spark AI deploys edge inference for local inspection and archives historical data for RAG and model improvement.",
        },
      },
      {
        title: { zh: "AI 公司", en: "AI Companies" },
        body: {
          zh: "AI 公司需要管理訓練語料、標註結果、模型版本、評估資料、合成資料和客戶私有資料。Spark AI 提供從熱訓練集到冷歸檔的完整資料生命周期，讓研發團隊能追溯每次模型訓練所用資料，也能把低頻但重要的歷史資料低成本保存。透過元資料、權限和對象接口，平台支援多團隊協作、資料復用、模型回滾和合規交付，減少資料孤島和重複採集成本。",
          en: "AI companies manage corpora, labels, model versions, evaluation sets, synthetic data, and private customer data. Spark AI tracks training lineage, stores cold history economically, and supports collaboration through metadata and object APIs.",
        },
      },
      {
        title: { zh: "高校科研", en: "University Research" },
        body: {
          zh: "高校與科研機構常有跨學科資料，包括實驗數據、論文、圖像、測序資料、天文觀測、社會調查和教學資源。Spark AI 可建立共享資料湖與冷存儲平台，按課題組、項目和資料敏感級別管理權限。研究人員可用 RAG 查找文獻、實驗記錄和歷史數據，也可把長期保存資料用於模型訓練。平台能提升資料復用率，支援科研誠信、成果沉澱和跨院系合作。",
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
    title: { zh: "關於 Spark AI", en: "About Spark AI" },
    eyebrow: { zh: "AI 冷數據基礎設施公司", en: "AI Cold Data Infrastructure Company" },
    seoDescription: "關於 Spark AI：公司願景、使命、核心價值、技術優勢與發展里程碑。",
    description: {
      zh: "Spark AI 專注於 AI 冷數據基礎設施，結合光學存儲、RAG 知識平台、Data Asset Bank 和 Edge AI，協助政府、金融、醫療、科研與企業把沉睡資料轉化為可保存、可檢索、可訓練和可資產化的長期價值。",
      en: "Spark AI focuses on AI cold data infrastructure, combining optical storage, RAG, Data Asset Bank, and Edge AI to activate long-term data value.",
    },
    heroPoints: [
      { zh: "願景：成為亞洲 AI 冷數據樞紐", en: "Vision: Asian AI cold data hub" },
      { zh: "使命：激活沉睡資料價值", en: "Mission: activate dormant data" },
      { zh: "價值：安全、節能、可信、可擴展", en: "Values: secure, efficient, trusted, scalable" },
    ],
    illustration: "about",
    sections: [
      {
        title: { zh: "公司願景", en: "Vision" },
        body: {
          zh: "Spark AI 的願景是成為亞洲領先的 AI 冷數據基礎設施與資料資產化平台，讓香港成為連接國際資本、企業資料、科研能力和 AI 應用的可信樞紐。我們相信 AI 的下一階段競爭不只在算力，也在可長期保存並被安全激活的資料。",
          en: "Spark AI aims to become a leading Asian AI cold data infrastructure and data assetization platform, connecting capital, enterprise data, research, and AI applications.",
        },
      },
      {
        title: { zh: "使命", en: "Mission" },
        body: {
          zh: "我們的使命是把沉睡在磁帶、硬碟、文件系統、影像庫和業務系統中的冷資料轉化為 AI 可使用的知識與資產。透過低成本保存、可信治理、RAG 激活和邊緣推理，Spark AI 幫助客戶建立面向未來十年的資料基礎設施。",
          en: "Our mission is to turn dormant archives, file systems, media repositories, and business data into AI-ready knowledge and assets through retention, governance, RAG, and edge inference.",
        },
      },
      {
        title: { zh: "核心價值", en: "Core Values" },
        body: {
          zh: "Spark AI 重視安全、可靠、節能、開放和長期主義。平台設計以客戶資料主權為前提，讓資料在可控權限、可審計流程和可驗證來源下被使用。我們追求真正可運營的基礎設施，而不是短期展示型 AI 工具。",
          en: "Spark AI values security, reliability, efficiency, openness, and long-term thinking. We build operational infrastructure rather than short-lived AI demos.",
        },
      },
      {
        title: { zh: "技術優勢", en: "Technology Strengths" },
        body: {
          zh: "技術優勢包括 100PB 級架構、光學冷存儲、WORM 防篡改、資料分層策略、全文與向量混合檢索、RAG 工作流、LLM Integration 和 Edge AI 節點。這些能力共同支撐資料保存、知識激活、模型訓練和資產化流通。",
          en: "Technology strengths include 100PB architecture, optical cold storage, WORM, tiering, hybrid search, RAG workflows, LLM integration, and Edge AI nodes.",
        },
      },
    ],
    timeline: [
      { zh: "啟動 AI 冷數據中心規劃與核心平台設計", en: "Launch AI cold data center planning and core platform design" },
      { zh: "部署 RAG 知識平台與光學歸檔產品線", en: "Deploy RAG platform and optical archive product line" },
      { zh: "拓展 Data Asset Bank 與行業資料資產方案", en: "Expand Data Asset Bank and industry data asset solutions" },
      { zh: "形成跨區 AI 冷數據網絡與生態合作", en: "Build cross-region AI cold data network and ecosystem partnerships" },
    ],
    faqs: faq,
    related: [related.cold, related.rag, related.bank, related.cases],
  },
} satisfies Record<string, ContentPageData>;

export type ContentPageKey = keyof typeof contentPages;
