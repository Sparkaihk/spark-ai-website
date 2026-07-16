export type SparkPageKey = "solutions" | "products" | "industries" | "investors" | "about" | "contact";

export type SparkPageContent = {
  slug: SparkPageKey;
  metadata: {
    title: string;
    description: string;
  };
};

const metadata = {
  title: "Spark AI | Knowledge Infrastructure for the AI Era",
  description: "Spark AI builds trusted knowledge infrastructure for organizations in the AI era.",
};

export const sparkPages: Record<SparkPageKey, SparkPageContent> = {
  solutions: { slug: "solutions", metadata },
  products: { slug: "products", metadata },
  industries: { slug: "industries", metadata },
  investors: { slug: "investors", metadata },
  about: { slug: "about", metadata },
  contact: { slug: "contact", metadata },
};
