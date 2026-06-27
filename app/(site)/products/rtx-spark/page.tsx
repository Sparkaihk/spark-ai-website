import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  FileSearch,
  HardDrive,
  Network,
  ShieldCheck,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "RTX Spark AI Integrated Appliance | Spark AI 旗艦產品",
  description:
    "RTX Spark 是 Spark AI 面向企業、政府、醫療、金融和科研機構推出的 AI 一體化平台，整合 GPU 算力、RAG 知識庫、AI 冷數據存儲與私有化部署。",
  alternates: { canonical: "/products/rtx-spark" },
  openGraph: {
    title: "RTX Spark AI Integrated Appliance",
    description: "定制集成 GPU 算力、RAG、BlueSafe 冷數據存儲與私有化 AI 部署的一體機。",
    images: ["/images/rtx-spark-appliance.png"],
  },
};

const capabilities = [
  {
    icon: Cpu,
    title: { zh: "GPU AI 推理引擎", en: "GPU AI Inference Engine" },
    body: {
      zh: "RTX Spark 內建高性能 GPU 推理能力，支援本地大模型推理、向量化處理、多模態解析與企業級 AI 應用部署。企業可在自有環境中運行關鍵模型，降低對公有雲算力與外部 API 的依賴，並提升敏感資料處理的可控性。",
      en: "RTX Spark provides local GPU inference for LLMs, embeddings, multimodal parsing, and enterprise AI apps, reducing dependency on public cloud compute and external APIs.",
    },
  },
  {
    icon: FileSearch,
    title: { zh: "RAG 企業知識庫", en: "RAG Enterprise Knowledge Base" },
    body: {
      zh: "平台可將企業文檔、圖片、掃描件、音視頻與歷史檔案轉化為可檢索、可問答、可追溯的 AI 知識資產。透過全文檢索、向量檢索與權限控制，員工能在安全邊界內快速獲得可靠答案和來源引用。",
      en: "Documents, images, scans, audio, video, and archives become searchable, answerable, and traceable AI knowledge assets with hybrid retrieval and access control.",
    },
  },
  {
    icon: HardDrive,
    title: { zh: "BlueSafe 冷數據存儲", en: "BlueSafe Cold Data Storage" },
    body: {
      zh: "RTX Spark 結合藍光冷存儲、磁盤緩存與分層存儲策略，適合長期保存、合規歸檔、防篡改和低功耗數據管理。熱資料保留在高速層，低頻歷史資料進入冷層，兼顧 AI 使用效率與長期保存成本。",
      en: "BlueSafe combines optical cold storage, disk cache, and tiering for long-term retention, compliance archives, tamper resistance, and low-power data management.",
    },
  },
  {
    icon: ShieldCheck,
    title: { zh: "私有化 AI 部署", en: "Private AI Deployment" },
    body: {
      zh: "設備支持在企業內網、政務專網、醫療院區或數據中心內部署，保護敏感數據不出域。平台可對接現有身份系統、審計流程和資料治理策略，滿足金融、政府、醫療與科研場景的合規安全要求。",
      en: "Deploy inside enterprise networks, government networks, hospitals, or data centers so sensitive data stays in-domain while identity, audit, and governance policies remain enforceable.",
    },
  },
];

const specs = [
  ["GPU", "NVIDIA RTX / Blackwell 可選", "NVIDIA RTX / Blackwell options"],
  ["CPU", "AMD EPYC / Intel Xeon 可選", "AMD EPYC / Intel Xeon options"],
  ["Memory", "256GB-3TB 可選", "256GB-3TB options"],
  ["Storage", "NVMe SSD + HDD + BlueSafe 冷數據模組", "NVMe SSD + HDD + BlueSafe cold data module"],
  ["AI Framework", "vLLM / Ollama / TensorRT-LLM / NVIDIA NIM", "vLLM / Ollama / TensorRT-LLM / NVIDIA NIM"],
  ["RAG", "Spark AI RAG Platform", "Spark AI RAG Platform"],
  ["Network", "10/25/100GbE", "10/25/100GbE"],
  ["Deployment", "私有化部署 / 邊緣節點 / 數據中心節點", "Private deployment / Edge node / Data center node"],
];

const scenarios = [
  {
    title: { zh: "醫療 AI", en: "Medical AI" },
    body: {
      zh: "在院區內部署影像、病歷與科研資料知識庫，支援醫生查詢相似病例、科研團隊檢索匿名資料，並確保敏感醫療資料不離開院內安全域。",
      en: "Deploy imaging, record, and research knowledge bases inside hospital networks for case retrieval and governed medical AI.",
    },
  },
  {
    title: { zh: "金融合規", en: "Financial Compliance" },
    body: {
      zh: "整合條款、交易記錄、審計底稿與合規制度，建立可引用來源的 AI 合規助手，協助風控、審核與客服團隊快速定位可信答案。",
      en: "Unify rules, records, audit files, and policies into a traceable compliance assistant for risk, review, and service teams.",
    },
  },
  {
    title: { zh: "政府檔案", en: "Government Archives" },
    body: {
      zh: "將公文、掃描件、影像和歷史檔案轉為可檢索知識庫，配合 BlueSafe 冷存儲實現長期保存、權限分級與防篡改管理。",
      en: "Convert records, scans, video, and archives into searchable knowledge while BlueSafe supports long retention and tamper resistance.",
    },
  },
  {
    title: { zh: "科研數據", en: "Research Data" },
    body: {
      zh: "為高校與科研機構保存實驗、論文、圖像和觀測資料，支援本地模型推理、資料復用、跨課題組檢索與長期科研沉澱。",
      en: "Preserve experiments, papers, images, and observations while enabling local inference, reuse, and cross-project retrieval.",
    },
  },
  {
    title: { zh: "企業知識庫", en: "Enterprise Knowledge Base" },
    body: {
      zh: "將制度、合約、產品資料、工單和歷史案例變成企業內部 AI 助手，讓員工用自然語言查詢答案、來源和操作建議。",
      en: "Turn policies, contracts, product data, tickets, and cases into internal AI assistants with answers, sources, and next steps.",
    },
  },
  {
    title: { zh: "AI 冷數據中心", en: "AI Cold Data Center" },
    body: {
      zh: "作為冷數據中心邊緣或部門節點，承擔本地解析、向量化、RAG 檢索和冷熱資料分層，與 100PB 架構形成閉環。",
      en: "Act as an edge or departmental node for parsing, embedding, RAG retrieval, and tiering within a 100PB cold data architecture.",
    },
  },
];

const productSeries = [
  { name: "RTX Spark S", zh: "中小企業 AI 知識庫", en: "SMB AI knowledge base" },
  { name: "RTX Spark M", zh: "部門級 AI 應用與私有化 RAG", en: "Department AI apps and private RAG" },
  { name: "RTX Spark X", zh: "大型企業多模態 AI 平台", en: "Enterprise multimodal AI platform" },
  { name: "RTX Spark DC", zh: "AI 冷數據中心節點", en: "AI cold data center node" },
];

export default function RtxSparkPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_62%,#ffffff_100%)] pb-16 pt-12 sm:pb-20">
        <div className="absolute inset-0 spark-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,#bfdbfe_0%,transparent_70%)]" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
            <AnimatedBlock>
              <p className="inline-flex rounded-[20px] border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur">
                <LocalizedText zh="旗艦產品" en="Flagship Product" />
              </p>
              <h1 className="mt-6 text-[2.35rem] font-semibold leading-[1.05] tracking-normal text-foreground sm:text-[3.7rem]">
                RTX Spark AI Integrated Appliance
              </h1>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.75] text-muted-foreground sm:text-[18px]">
                <LocalizedText
                  zh="專為企業打造的 AI 一體化平台，將 GPU 算力、RAG 知識庫、AI 冷數據存儲與私有化部署能力整合於一台設備。"
                  en="An enterprise AI integrated appliance that combines GPU compute, RAG knowledge bases, AI cold data storage, and private deployment in one platform."
                />
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="spark" size="lg" className="rounded-[20px]">
                  <Link href="/contact">
                    <LocalizedText zh="預約產品演示" en="Book a Product Demo" />
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-[20px] bg-white/90">
                  <a href="mailto:info@sparkai.hk?subject=RTX%20Spark%20Product%20Brief">
                    <LocalizedText zh="下載產品簡介" en="Download Product Brief" />
                    <Download aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.1}>
              <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white/55 p-3 shadow-[0_28px_90px_rgba(37,99,235,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                <img src="/images/rtx-spark-appliance.png" alt="RTX Spark AI Integrated Appliance" className="aspect-[16/10] h-auto w-full rounded-[18px] object-cover" />
              </div>
            </AnimatedBlock>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[860px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Positioning</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              <LocalizedText zh="一台設備，完成企業 AI 應用落地" en="One Appliance for Enterprise AI Deployment" />
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-muted-foreground sm:text-[18px]">
              <LocalizedText
                zh="RTX Spark 是 Spark AI 面向企業、政府、醫療、金融和科研機構推出的旗艦 AI 一體機。它將高性能 GPU、企業級存儲、RAG 檢索增強生成、多模態數據解析與長期冷數據管理集成在同一平台，幫助客戶快速建立安全、可控、可擴展的 AI 應用環境。"
                en="RTX Spark is Spark AI's flagship appliance for enterprises, government, healthcare, finance, and research institutions. It integrates high-performance GPU compute, enterprise storage, RAG, multimodal data parsing, and long-term cold data management to create a secure, controlled, and scalable AI environment."
              />
            </p>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Core Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText zh="四大核心能力" en="Four Core Capabilities" /></h2>
          </AnimatedBlock>
          <AnimatedStagger className="mt-10 grid gap-5 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title.en} className="rounded-[20px] border border-white/80 bg-white/70 p-6 shadow-spark-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(37,99,235,0.14)]">
                  <div className="flex size-12 items-center justify-center rounded-[18px] bg-sky-50 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground"><LocalizedText zh={item.title.zh} en={item.title.en} /></h3>
                  <p className="mt-4 text-sm leading-[1.8] text-muted-foreground"><LocalizedText zh={item.body.zh} en={item.body.en} /></p>
                </div>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Specifications</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText zh="產品規格表" en="Product Specifications" /></h2>
          </AnimatedBlock>
          <AnimatedBlock className="mt-10 overflow-hidden rounded-[20px] border border-sky-100 bg-white/80 shadow-spark-sm backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <tbody className="divide-y divide-sky-100">
                  {specs.map(([key, zh, en]) => (
                    <tr key={key} className="transition hover:bg-sky-50/70">
                      <th className="w-56 bg-sky-50 px-5 py-4 font-semibold text-foreground">{key}</th>
                      <td className="px-5 py-4 text-muted-foreground"><LocalizedText zh={zh} en={en} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Use Cases</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText zh="應用場景" en="Application Scenarios" /></h2>
          </AnimatedBlock>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((item) => (
              <AnimatedBlock key={item.title.en} className="rounded-[20px] border border-white/80 bg-white/72 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-spark-sm">
                <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-foreground"><LocalizedText zh={item.title.zh} en={item.title.en} /></h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground"><LocalizedText zh={item.body.zh} en={item.body.en} /></p>
              </AnimatedBlock>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Product Matrix</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl"><LocalizedText zh="產品系列" en="Product Series" /></h2>
          </AnimatedBlock>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productSeries.map((item, index) => (
              <AnimatedBlock key={item.name} delay={index * 0.04} className="rounded-[20px] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 shadow-spark-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(37,99,235,0.14)]">
                <div className="flex size-11 items-center justify-center rounded-[16px] bg-primary text-white">
                  {index === 0 ? <BrainCircuit className="size-5" aria-hidden="true" /> : index === 1 ? <FileSearch className="size-5" aria-hidden="true" /> : index === 2 ? <Network className="size-5" aria-hidden="true" /> : <Database className="size-5" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">{item.name}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground"><LocalizedText zh={item.zh} en={item.en} /></p>
              </AnimatedBlock>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-spark-surface-1 py-16 sm:py-20">
        <Container>
          <AnimatedBlock className="rounded-[24px] border border-white/70 bg-primary p-8 text-center text-white shadow-[0_30px_100px_rgba(37,99,235,0.24)] sm:p-10">
            <h2 className="mx-auto max-w-[820px] text-3xl font-semibold leading-tight sm:text-5xl">
              <LocalizedText zh="用 RTX Spark 啟動企業 AI 冷數據基礎設施" en="Start Enterprise AI Cold Data Infrastructure with RTX Spark" />
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-blue-50">
              <LocalizedText zh="從本地推理、企業知識庫到冷數據存儲，RTX Spark 讓企業在安全可控的環境中快速落地 AI 應用。" en="From local inference and enterprise knowledge bases to cold data storage, RTX Spark helps teams deploy AI in a secure and controlled environment." />
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="rounded-[20px] bg-white text-primary hover:bg-blue-50">
                <Link href="/contact"><LocalizedText zh="預約產品演示" en="Book a Product Demo" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-[20px] border-white/60 bg-transparent text-white hover:bg-white hover:text-primary">
                <Link href="/contact"><LocalizedText zh="聯絡我們" en="Contact Us" /></Link>
              </Button>
            </div>
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
