import {
  ArrowRight,
  Banknote,
  BarChart3,
  CalendarDays,
  Cpu,
  Database,
  FileSearch,
  HardDrive,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { CountUp } from "@/components/design-system/count-up";
import { SurfaceCard } from "@/components/design-system/surface-card";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

const kpis = [
  { value: 100, suffix: "PB+", zh: "冷数据存储规模", en: "Cold data storage scale", icon: Database },
  { textZh: "99.99999%", textEn: "99.99999%", zh: "数据安全与可靠性", en: "Data security and reliability", icon: ShieldCheck },
  { value: 80, suffix: "%+", zh: "能源消耗降低", en: "Energy reduction", icon: Zap },
  { textZh: "资产潜能", textEn: "Asset potential", zh: "数据资产化潜能", en: "Data assetization potential", icon: Banknote },
];

const sections = [
  {
    id: "cold-data-center",
    eyebrowZh: "AI 冷数据中心",
    eyebrowEn: "AI Cold Data Center",
    titleZh: "香港 AI Data Center",
    titleEn: "Hong Kong AI Data Center",
    descriptionZh:
      "香港 AI 冷数据中心面向亚洲新一代数据基础设施，服务公共部门、金融、医疗与企业客户，以可扩展、高安全、低能耗的存储能力承接 AI 时代的海量冷数据。",
    descriptionEn:
      "The Hong Kong AI Cold Data Center is designed as a new Asian infrastructure hub for cold data, supporting public sector, finance, healthcare, and enterprise demand with scalable, secure, low-energy storage for the AI era.",
    image: "/images/spark-v3-hero.png",
    icon: Database,
  },
  {
    id: "solutions",
    eyebrowZh: "蓝光存储系统",
    eyebrowEn: "Blu-ray Storage System",
    titleZh: "Optical Disc Library",
    titleEn: "Optical Disc Library",
    descriptionZh:
      "蓝光存储系统聚焦超长期数据保存，结合低能耗、高安全、防篡改与 50 年以上生命周期，降低留存成本并支持合规归档。",
    descriptionEn:
      "The Blu-ray storage system focuses on ultra-long-term data preservation, combining low energy use, high security, tamper resistance, and a 50-year-plus lifecycle to reduce retention cost and support compliance archives.",
    image: "/images/spark-v3-optical-library.png",
    icon: ShieldCheck,
  },
  {
    id: "rag-cloud",
    eyebrowZh: "BlueSafe RAG Cloud",
    eyebrowEn: "BlueSafe RAG Cloud",
    titleZh: "企业知识激活平台",
    titleEn: "Enterprise Knowledge Activation Platform",
    descriptionZh:
      "BlueSafe RAG Cloud 将历史文档、影像资料与知识资产转化为可检索、可问答、可治理的企业知识库，帮助客户快速导入 AI 并提升决策效率。",
    descriptionEn:
      "BlueSafe RAG Cloud turns historical documents, media, and knowledge assets into searchable and answerable enterprise knowledge bases, helping customers adopt AI quickly and improve decision efficiency without retraining large models.",
    image: "/images/spark-v3-rag-cloud.png",
    icon: FileSearch,
  },
  {
    id: "data-asset-bank",
    eyebrowZh: "Data Asset Bank",
    eyebrowEn: "Data Asset Bank",
    titleZh: "数据资产银行",
    titleEn: "Data Asset Bank",
    descriptionZh:
      "Data Asset Bank 协助客户从数据成本中心迈向价值中心，通过治理、确权、资产化与流通机制，形成可衡量的数据组合与新的收入机会。",
    descriptionEn:
      "Data Asset Bank helps move data from a cost center into a value center through governance, ownership confirmation, assetization, and circulation, creating measurable data portfolios and new revenue opportunities.",
    image: "/images/spark-v3-data-asset-bank.png",
    icon: Banknote,
  },
  {
    id: "investor-highlights",
    eyebrowZh: "Investor Highlights",
    eyebrowEn: "Investor Highlights",
    titleZh: "投资亮点",
    titleEn: "Investor Highlights",
    descriptionZh:
      "全球 AI 市场高速增长，但大量企业数据仍沉睡在冷数据状态。Spark AI 以存储、激活与资产化切入 AI 基础设施赛道，面向长期增长机会。",
    descriptionEn:
      "The global AI market is expanding rapidly, yet most enterprise data remains underused as cold data. Spark AI targets storage, activation, and assetization, entering a high-potential AI infrastructure segment with long-term growth value.",
    image: "/images/spark-v3-investor-highlights.png",
    icon: BarChart3,
  },
  {
    id: "roadmap",
    eyebrowZh: "Roadmap",
    eyebrowEn: "Roadmap",
    titleZh: "发展路线图",
    titleEn: "Roadmap",
    descriptionZh:
      "Spark AI 从香港 100PB AI 冷数据中心起步，逐步扩展 BlueSafe RAG Cloud 与 Data Asset Bank，建设覆盖存储、管理、激活与资产化的亚洲冷数据网络。",
    descriptionEn:
      "Spark AI starts with a Hong Kong 100PB AI cold data center, then expands through BlueSafe RAG Cloud and Data Asset Bank to build an Asian cold data network spanning storage, management, activation, and assetization.",
    image: "/images/spark-v3-roadmap.png",
    icon: CalendarDays,
  },
];

const roadmapItems = [
  { year: "2025", zh: "香港 100PB", en: "Hong Kong 100PB" },
  { year: "2026", zh: "BlueSafe RAG Cloud", en: "BlueSafe RAG Cloud" },
  { year: "2027", zh: "Data Asset Bank", en: "Data Asset Bank" },
  { year: "2028", zh: "亚洲冷数据网络", en: "Asian cold data network" },
];

const sectionLinks: Record<string, string> = {
  "cold-data-center": "/solutions/ai-cold-data",
  solutions: "/solutions/optical-storage",
  "rag-cloud": "/solutions/rag",
  "data-asset-bank": "/solutions/data-bank",
  "investor-highlights": "/technology",
  roadmap: "/about",
};

function TopicSection({ section, index }: { section: (typeof sections)[number]; index: number }) {
  const Icon = section.icon;

  return (
    <section id={section.id} className={index % 2 === 0 ? "bg-white py-20 sm:py-24 lg:py-28" : "bg-spark-surface-1 py-20 sm:py-24 lg:py-28"}>
      <Container>
        <AnimatedBlock className="mx-auto max-w-[980px] text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-[20px] bg-sky-50 text-primary shadow-sm">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            <LocalizedText zh={section.eyebrowZh} en={section.eyebrowEn} />
          </p>
          <h2 className="mx-auto mt-4 max-w-[720px] text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            <LocalizedText zh={section.titleZh} en={section.titleEn} />
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
            <LocalizedText zh={section.descriptionZh} en={section.descriptionEn} />
          </p>
          <div className="mx-auto mt-10 overflow-hidden rounded-[20px] border border-sky-100 bg-sky-50 p-2 shadow-spark-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(37,99,235,0.18)]">
            <img src={section.image} alt="" className="aspect-[16/9] h-auto w-full rounded-[16px] object-cover" />
          </div>
          <Button asChild variant="spark" size="lg" className="mt-8 rounded-[20px]">
            <a href={sectionLinks[section.id] ?? "/"}>
              <LocalizedText zh="了解更多" en="Learn More" />
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </AnimatedBlock>
      </Container>
    </section>
  );
}

function FlagshipProductSection() {
  const capabilities = [
    { zh: "GPU 本地推理", en: "Local GPU inference", icon: Cpu },
    { zh: "RAG 企業知識庫", en: "RAG knowledge base", icon: FileSearch },
    { zh: "BlueSafe 冷數據", en: "BlueSafe cold data", icon: HardDrive },
  ];

  return (
    <section id="flagship-product" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 spark-grid opacity-45" />
      <Container className="relative z-10">
        <div className="grid gap-10 rounded-[24px] border border-sky-100 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(239,246,255,0.86)_100%)] p-5 shadow-spark-md backdrop-blur-xl lg:grid-cols-[0.46fr_0.54fr] lg:items-center lg:p-8">
          <AnimatedBlock>
            <p className="inline-flex rounded-[20px] border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
              <LocalizedText zh="旗艦產品" en="Flagship Product" />
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              RTX Spark AI Integrated Appliance
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="定制集成 GPU 算力、RAG 企業知識庫、BlueSafe AI 冷數據存儲與私有化部署能力，讓企業在一台設備上快速建立安全、可控、可擴展的 AI 應用平台。"
                en="A customized appliance integrating GPU compute, enterprise RAG, BlueSafe AI cold data storage, and private deployment for secure and scalable enterprise AI."
              />
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.en} className="rounded-[18px] border border-sky-100 bg-white/78 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <item.icon className="size-5 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground"><LocalizedText zh={item.zh} en={item.en} /></p>
                </div>
              ))}
            </div>
            <Button asChild variant="spark" size="lg" className="mt-7 rounded-[20px]">
              <a href="/products/rtx-spark">
                <LocalizedText zh="了解 RTX Spark" en="Explore RTX Spark" />
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </AnimatedBlock>
          <AnimatedBlock delay={0.08}>
            <div className="overflow-hidden rounded-[22px] border border-white/80 bg-white/70 p-3 shadow-[0_24px_80px_rgba(37,99,235,0.16)] transition duration-300 hover:-translate-y-1">
              <img src="/images/rtx-spark-appliance.png" alt="RTX Spark AI Integrated Appliance" className="aspect-[16/10] h-auto w-full rounded-[16px] object-cover" />
            </div>
          </AnimatedBlock>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <section id="home" className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] pb-20 pt-28 lg:pb-28">
        <div className="absolute inset-0 spark-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,#bfdbfe_0%,transparent_70%)]" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-[20px] border border-sky-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
                Spark AI Investor Version 3.0
              </p>
              <h1 className="mt-7 max-w-4xl text-[2.35rem] font-semibold leading-[1.08] tracking-normal text-foreground sm:text-[3.45rem] lg:text-[4.2rem]">
                <LocalizedText zh="海量冷数据是 AI 应用的蓝海" en="Massive cold data is the blue ocean for AI applications" />
              </h1>
              <p className="mt-6 max-w-[720px] text-[18px] leading-[1.7] text-muted-foreground">
                <LocalizedText zh="从存储到智能，释放冷数据的完整价值" en="From storage to intelligence, unlocking the full value of cold data" />
              </p>
              <div className="mt-8 rounded-[20px] border border-sky-100 bg-white/88 p-5 shadow-spark-sm">
                <p className="text-xl font-semibold leading-[1.45] text-foreground sm:text-2xl">
                  <LocalizedText
                    zh={
                      <>
                        AI 时代最大的未开发资产
                        <br />
                        不是算力，
                        <br />
                        而是海量冷数据。
                      </>
                    }
                    en={
                      <>
                        The largest untapped asset in the AI era
                        <br />
                        is not compute,
                        <br />
                        but massive cold data.
                      </>
                    }
                  />
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="w-full rounded-[20px] sm:w-auto">
                  <a href="#investor-highlights">
                    <LocalizedText zh="查看投资亮点" en="View Investor Highlights" />
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-[20px] bg-white sm:w-auto">
                  <a href="mailto:info@sparkai.hk?subject=Book%20a%20Meeting%20with%20Spark%20AI">
                    Book a Meeting
                    <Mail aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.1}>
              <div className="overflow-hidden rounded-[20px] border border-sky-100 bg-white p-2 shadow-spark-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_rgba(37,99,235,0.18)]">
                <img src="/images/spark-v3-hero.png" alt="" className="aspect-[16/9] h-auto w-full rounded-[16px] object-cover" />
              </div>
            </AnimatedBlock>
          </div>

          <AnimatedStagger className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item) => (
              <SurfaceCard key={item.zh} className="rounded-[20px] border-sky-100 bg-white/92 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(37,99,235,0.14)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold leading-none text-foreground sm:text-4xl">
                      {"textZh" in item ? <LocalizedText zh={item.textZh} en={item.textEn} /> : <CountUp end={item.value ?? 0} suffix={item.suffix} />}
                    </p>
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                      <LocalizedText zh={item.zh} en={item.en} />
                    </p>
                  </div>
                  <item.icon className="size-7 text-accent" aria-hidden="true" />
                </div>
              </SurfaceCard>
            ))}
          </AnimatedStagger>
        </Container>
      </section>

      <FlagshipProductSection />

      {sections.map((section, index) => (
        <TopicSection key={section.id} section={section} index={index} />
      ))}

      <section id="about-us" className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[720px] text-center">
            <Sparkles className="mx-auto size-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText zh="关于 Spark AI" en="About Spark AI" />
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="Spark AI Technology Limited 专注 AI 冷数据基础设施，结合存储、知识激活与数据资产化，帮助公共部门、金融、医疗和企业客户将沉睡数据转化为增长资产。"
                en="Spark AI Technology Limited focuses on AI cold data infrastructure, combining storage, knowledge activation, and data assetization to help public-sector, finance, healthcare, and enterprise customers convert dormant data into growth assets."
              />
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="contact-us" className="bg-spark-surface-1 py-20 sm:py-24 lg:py-28">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[860px] rounded-[20px] border border-sky-100 bg-white p-8 text-center shadow-spark-md sm:p-10">
            <Mail className="mx-auto size-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText zh="联系我们" en="Contact Us" />
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="欢迎政府机构、企业、投资基金与生态伙伴共同探索冷数据与 AI 的未来，包括基础设施建设、知识库部署和数据资产化合作。"
                en="We welcome government agencies, enterprises, investment funds, and partners to explore the future of cold data and AI, including infrastructure, knowledge-base deployment, and data assetization collaboration."
              />
            </p>
            <div className="mt-8 grid gap-3 text-sm font-medium text-muted-foreground sm:grid-cols-3">
              <a href="mailto:info@sparkai.hk" className="rounded-[20px] bg-sky-50 px-4 py-3 text-primary">
                info@sparkai.hk
              </a>
              <span className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-sky-50 px-4 py-3">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                Hong Kong
              </span>
              <a href="mailto:info@sparkai.hk?subject=Book%20a%20Meeting%20with%20Spark%20AI" className="rounded-[20px] bg-primary px-4 py-3 text-white">
                Book a Meeting
              </a>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="roadmap-detail" className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[720px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Milestones</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText zh="四阶段增长路线图" en="Four-stage growth roadmap" />
            </h2>
          </AnimatedBlock>
          <div className="mx-auto mt-10 grid max-w-[960px] gap-4 md:grid-cols-4">
            {roadmapItems.map((item) => (
              <div key={item.year} className="rounded-[20px] border border-sky-100 bg-sky-50 p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-spark-sm">
                <p className="text-3xl font-semibold text-primary">{item.year}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  <LocalizedText zh={item.zh} en={item.en} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
