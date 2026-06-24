export type SparkPageKey = "solutions" | "products" | "industries" | "investors" | "about" | "contact";

export type SparkPageContent = {
  slug: SparkPageKey;
  metadata: {
    title: string;
    description: string;
  };
};

const metadata = {
  title: "光慧科技有限公司 | AI冷數據基礎設施",
  description:
    "光慧科技有限公司專注於AI冷數據中心、藍光長期歸檔存儲、BlueSafe RAG Cloud及數據資產銀行，打造下一代AI冷數據基礎設施平台。",
};

export const sparkPages: Record<SparkPageKey, SparkPageContent> = {
  solutions: { slug: "solutions", metadata },
  products: { slug: "products", metadata },
  industries: { slug: "industries", metadata },
  investors: { slug: "investors", metadata },
  about: { slug: "about", metadata },
  contact: { slug: "contact", metadata },
};