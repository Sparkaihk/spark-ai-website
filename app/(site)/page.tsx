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
  { value: 100, suffix: "PB+", zh: "首階段冷數據容量規劃", en: "Planned first-phase cold data capacity", icon: Database },
  { textZh: "99.99999%", textEn: "99.99999%", zh: "企業級可靠性目標", en: "Enterprise-grade reliability target", icon: ShieldCheck },
  { value: 80, suffix: "%+", zh: "相對傳統熱儲存節能潛力", en: "Potential energy reduction versus hot storage", icon: Zap },
  { textZh: "資產化", textEn: "Assetization", zh: "從沉睡數據到可管理資產", en: "From dormant data to managed assets", icon: Banknote },
];

const sections = [
  {
    id: "cold-data-center",
    eyebrowZh: "AI 冷數據中心",
    eyebrowEn: "AI Cold Data Center",
    titleZh: "以香港為起點的亞洲冷數據基礎設施",
    titleEn: "Hong Kong as the starting point for Asian cold data infrastructure",
    descriptionZh:
      "Spark AI 聚焦政府、金融、醫療、企業知識庫與長期合規歸檔需求，打造低能耗、可擴展、可審計的 AI 冷數據中心，讓長期保存資料重新進入 AI 工作流。",
    descriptionEn:
      "Spark AI focuses on public sector, finance, healthcare, enterprise knowledge bases, and long-term compliance archives, building low-energy, scalable, and auditable AI cold data infrastructure for the next wave of AI adoption.",
    image: "/images/spark-v3-hero.png",
    alt: "AI cold data center infrastructure illustration",
    href: "/solutions/ai-cold-data",
    icon: Database,
  },
  {
    id: "optical-storage",
    eyebrowZh: "光碟冷儲存",
    eyebrowEn: "Optical Cold Storage",
    titleZh: "低能耗、長週期、抗竄改的資料保存底座",
    titleEn: "Low-energy, long-life, tamper-resistant data preservation",
    descriptionZh:
      "Blu-ray 光碟儲存系統面向長期保存資料，降低電力與維護成本，同時支援合規留存、離線保護與跨代資料遷移，是 AI 冷數據中心的成本優勢來源。",
    descriptionEn:
      "The Blu-ray storage system is designed for long-term retention, reducing power and maintenance costs while supporting compliance, offline protection, and lifecycle migration for cold data infrastructure.",
    image: "/images/spark-v3-optical-library.png",
    alt: "Optical disc storage library",
    href: "/solutions/optical-storage",
    icon: ShieldCheck,
  },
  {
    id: "rag-cloud",
    eyebrowZh: "BlueSafe RAG Cloud",
    eyebrowEn: "BlueSafe RAG Cloud",
    titleZh: "把歷史文檔與專業知識轉化為企業 AI 能力",
    titleEn: "Turn historical documents and expert knowledge into enterprise AI capability",
    descriptionZh:
      "BlueSafe RAG Cloud 將冷資料、文件、影音與內部知識轉化為可搜尋、可追溯、可問答的知識庫，幫助企業在不重訓大型模型的情況下導入安全 AI 應用。",
    descriptionEn:
      "BlueSafe RAG Cloud turns cold data, documents, media, and internal expertise into searchable, traceable, and answerable knowledge bases, helping enterprises adopt secure AI without retraining large models.",
    image: "/images/spark-v3-rag-cloud.png",
    alt: "Enterprise RAG cloud platform",
    href: "/solutions/rag",
    icon: FileSearch,
  },
  {
    id: "data-asset-bank",
    eyebrowZh: "Data Asset Bank",
    eyebrowEn: "Data Asset Bank",
    titleZh: "讓數據從成本中心走向資產組合",
    titleEn: "Move data from a cost center into an asset portfolio",
    descriptionZh:
      "Data Asset Bank 以治理、確權、估值、分級管理與流通合作為核心，協助機構建立可管理的數據資產組合，為未來合規流通與 AI 變現打下基礎。",
    descriptionEn:
      "Data Asset Bank combines governance, ownership confirmation, valuation, tiered management, and circulation partnerships to help organizations build manageable data asset portfolios.",
    image: "/images/spark-v3-data-asset-bank.png",
    alt: "Data asset bank platform",
    href: "/solutions/data-bank",
    icon: Banknote,
  },
  {
    id: "investor-highlights",
    eyebrowZh: "投資亮點",
    eyebrowEn: "Investor Highlights",
    titleZh: "AI 基礎設施下一階段：不是只買算力，而是管理數據資產",
    titleEn: "The next AI infrastructure layer is not only compute, but data asset management",
    descriptionZh:
      "全球 AI 應用快速擴張，但大量企業與公共資料仍沉睡在冷檔案中。Spark AI 以儲存、啟用、治理與資產化切入，形成可擴展的基礎設施與平台收入模型。",
    descriptionEn:
      "AI adoption is accelerating globally, yet large volumes of enterprise and public-sector data remain dormant. Spark AI enters through storage, activation, governance, and assetization to build scalable infrastructure and platform revenue.",
    image: "/images/spark-v3-investor-highlights.png",
    alt: "Investor highlights dashboard",
    href: "/technology",
    icon: BarChart3,
  },
  {
    id: "roadmap",
    eyebrowZh: "發展路線圖",
    eyebrowEn: "Roadmap",
    titleZh: "從香港 100PB 節點擴展至亞洲冷數據網絡",
    titleEn: "From a Hong Kong 100PB node to an Asian cold data network",
    descriptionZh:
      "Spark AI 先建立香港 AI 冷數據中心與企業 RAG 平台，再以 Data Asset Bank 連接治理、估值與流通場景，逐步形成跨區域冷數據基礎設施網絡。",
    descriptionEn:
      "Spark AI begins with a Hong Kong AI cold data center and enterprise RAG platform, then connects governance, valuation, and circulation through Data Asset Bank to form a regional cold data infrastructure network.",
    image: "/images/spark-v3-roadmap.png",
    alt: "Spark AI growth roadmap",
    href: "/about",
    icon: CalendarDays,
  },
];

const roadmapItems = [
  { year: "2025", zh: "香港 100PB 冷數據節點", en: "Hong Kong 100PB cold data node" },
  { year: "2026", zh: "BlueSafe RAG Cloud 商用化", en: "BlueSafe RAG Cloud commercialization" },
  { year: "2027", zh: "Data Asset Bank 生態合作", en: "Data Asset Bank ecosystem partnerships" },
  { year: "2028", zh: "亞洲冷數據網絡擴展", en: "Asian cold data network expansion" },
];

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
          <h2 className="mx-auto mt-4 max-w-[760px] text-3xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            <LocalizedText zh={section.titleZh} en={section.titleEn} />
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
            <LocalizedText zh={section.descriptionZh} en={section.descriptionEn} />
          </p>
          <div className="mx-auto mt-10 overflow-hidden rounded-[20px] border border-sky-100 bg-sky-50 p-2 shadow-spark-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(37,99,235,0.18)]">
            <img src={section.image} alt={section.alt} className="aspect-[16/9] h-auto w-full rounded-[16px] object-cover" />
          </div>
          <Button asChild variant="spark" size="lg" className="mt-8 rounded-[20px]">
            <a href={section.href}>
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
    { zh: "本地 GPU 推理", en: "Local GPU inference", icon: Cpu },
    { zh: "企業 RAG 知識庫", en: "Enterprise RAG knowledge base", icon: FileSearch },
    { zh: "BlueSafe 冷數據儲存", en: "BlueSafe cold data storage", icon: HardDrive },
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
                zh="整合 GPU 算力、企業 RAG、BlueSafe AI 冷數據儲存與私有化部署能力，為企業提供可控、安全、可擴展的一體化 AI 基礎設施。"
                en="A customized appliance integrating GPU compute, enterprise RAG, BlueSafe AI cold data storage, and private deployment for secure and scalable enterprise AI."
              />
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.en} className="rounded-[18px] border border-sky-100 bg-white/78 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <item.icon className="size-5 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    <LocalizedText zh={item.zh} en={item.en} />
                  </p>
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
                Spark AI Investor Version
              </p>
              <h1 className="mt-7 max-w-3xl text-[2rem] font-semibold leading-[1.12] tracking-normal text-foreground sm:text-[3rem] lg:text-[3.65rem]">
                <LocalizedText zh="冷數據，是 AI 時代尚未釋放的基礎設施資產" en="Cold data is the infrastructure asset still waiting to power AI" />
              </h1>
              <p className="mt-6 max-w-[720px] text-[17px] leading-[1.7] text-muted-foreground sm:text-[18px]">
                <LocalizedText
                  zh="Spark AI 以香港為起點，建構 AI 冷數據中心、BlueSafe RAG Cloud 與 Data Asset Bank，協助政府與企業把長期保存資料轉化為可治理、可啟用、可資產化的 AI 資源。"
                  en="Spark AI starts in Hong Kong with AI cold data centers, BlueSafe RAG Cloud, and Data Asset Bank, helping governments and enterprises turn long-retained data into governable, usable, and asset-ready AI resources."
                />
              </p>
              <div className="mt-8 rounded-[20px] border border-sky-100 bg-white/88 p-5 shadow-spark-sm">
                <p className="text-xl font-semibold leading-[1.45] text-foreground sm:text-2xl">
                  <LocalizedText
                    zh={
                      <>
                        AI 的下一個瓶頸不只是算力。
                        <br />
                        真正的機會在於低成本保存、
                        <br />
                        安全啟用與數據資產化。
                      </>
                    }
                    en={
                      <>
                        The next AI bottleneck is not only compute.
                        <br />
                        The opportunity is low-cost preservation,
                        <br />
                        secure activation, and data assetization.
                      </>
                    }
                  />
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="w-full rounded-[20px] sm:w-auto">
                  <a href="#investor-highlights">
                    <LocalizedText zh="查看投資亮點" en="View Investor Highlights" />
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-[20px] bg-white sm:w-auto">
                  <a href="mailto:info@sparkai.hk?subject=Book%20a%20Meeting%20with%20Spark%20AI">
                    <LocalizedText zh="預約會議" en="Book a Meeting" />
                    <Mail aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.1}>
              <div className="overflow-hidden rounded-[20px] border border-sky-100 bg-white p-2 shadow-spark-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_95px_rgba(37,99,235,0.18)]">
                <img src="/images/spark-v3-hero.png" alt="Spark AI cold data platform" className="aspect-[16/9] h-auto w-full rounded-[16px] object-cover" />
              </div>
            </AnimatedBlock>
          </div>

          <AnimatedStagger className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item) => (
              <SurfaceCard key={item.en} className="rounded-[20px] border-sky-100 bg-white/92 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(37,99,235,0.14)]">
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
              <LocalizedText zh="關於 Spark AI" en="About Spark AI" />
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="Spark AI Technology Limited 專注 AI 冷數據基礎設施，結合儲存、知識啟用與數據資產化，服務公共部門、金融、醫療與企業客戶。"
                en="Spark AI Technology Limited focuses on AI cold data infrastructure, combining storage, knowledge activation, and data assetization for public-sector, finance, healthcare, and enterprise customers."
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
              <LocalizedText zh="聯絡合作" en="Contact Us" />
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="歡迎政府機構、企業、投資基金與產業夥伴，與 Spark AI 探討冷數據中心、RAG 知識平台與數據資產化合作。"
                en="Government agencies, enterprises, investment funds, and industry partners are welcome to discuss cold data centers, RAG knowledge platforms, and data assetization collaboration with Spark AI."
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
                <LocalizedText zh="預約會議" en="Book a Meeting" />
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
              <LocalizedText zh="四階段成長路線圖" en="Four-stage growth roadmap" />
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
