import type { Metadata } from "next";
import { localizedPageMetadata } from "@/i18n/server";
import Link from "next/link";
import {
  Archive,
  ArrowDown,
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  FileSearch,
  HardDrive,
  Layers3,
  Sparkles,
  Waypoints,
} from "lucide-react";

import { AnimatedBlock } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { LocalizedImage } from "@/components/site/localized-image";
import { BilingualImage } from "@/components/site/bilingual-image";
import { LocalizedText } from "@/components/site/localized-text";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";

import { TechnicalDesign } from "@/components/sections/knowledge-design";

import styles from "./spark-ai-appliance.module.css";

const productImage = "/images/products/spark-ai-appliance/hero-render-v1.png";
type Copy = { zh: string; en: string };
const copy = (en: string, zh: string): Copy => ({ en, zh });

export async function generateMetadata(): Promise<Metadata> {
  return localizedPageMetadata("meta.appliance.title", "meta.appliance.description", "/products/spark-ai-appliance");
}

const architectureLayers = [
  { icon: Sparkles, title: copy("AI Applications", "AI 应用"), body: copy("Knowledge-powered enterprise experiences", "以可信知识驱动企业级 AI 体验") },
  { icon: Bot, title: copy("AI Agents", "AI 智能体"), body: copy("Context-aware workflows and automation", "具备上下文理解的工作流与自动化") },
  { icon: FileSearch, title: copy("Enterprise RAG", "企业 RAG"), body: copy("Governed retrieval grounded in source data", "基于可信来源与治理规则的智能检索") },
  { icon: Waypoints, title: copy("Knowledge Graph", "知识图谱"), body: copy("Connected entities, meaning and relationships", "连接实体、语义与业务关系") },
  { icon: BrainCircuit, title: copy("AI Memory", "AI 记忆"), body: copy("Persistent institutional context", "持续保留机构知识与业务上下文") },
  { icon: Layers3, title: copy("Intelligent Tiered Storage", "智能分层存储"), body: copy("Policy-driven placement across every tier", "依据价值、访问频率与策略智能配置") },
];

const storageTiers = [
  { icon: Cpu, title: copy("NVMe SSD", "NVMe SSD") },
  { icon: HardDrive, title: copy("HDD", "HDD") },
  { icon: Archive, title: copy("Optical Archive", "光学归档") },
  { icon: Cloud, title: copy("Cloud", "云端") },
];

const memoryTiers = [
  { medium: "HBM", activity: copy("Very high activity", "极高活度知识") },
  { medium: "DRAM / NVMe", activity: copy("High activity", "高活度知识") },
  { medium: "SSD / HDD", activity: copy("Medium activity", "中活度知识") },
  { medium: "Object Storage", activity: copy("Low activity", "低活度知识") },
  { medium: "Optical", activity: copy("Long-term retained knowledge", "长期沉淀知识") },
];

const knowledgeActivityFactors = [
  copy("Access frequency", "访问频率"),
  copy("RAG hit rate", "RAG 命中率"),
  copy("Agent invocation probability", "Agent 调用概率"),
  copy("Timeliness", "时效性"),
  copy("Business value", "业务价值"),
  copy("Recovery cost", "恢复成本"),
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: Copy; title: Copy; body: Copy }) {
  return (
    <AnimatedBlock className={styles.sectionHeader}>
      <p><LocalizedText {...eyebrow} /></p>
      <h2><LocalizedText {...title} /></h2>
      <div><LocalizedText {...body} /></div>
    </AnimatedBlock>
  );
}

export default function SparkAiAppliancePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <AnimatedBlock className={styles.heroCopy}>
            <h1><LocalizedText zh="Spark AI Appliance" en="Spark AI Appliance" /></h1>
            <h2>
              <LocalizedText zh="企业知识基础设施一体化设计" en="Integrated enterprise knowledge infrastructure design" />
              <span><LocalizedText zh="为 AI 时代而生" en="for the AI Era" /></span>
            </h2>
            <div className={styles.heroPillars}>
              <span><LocalizedText zh="算力" en="Compute" /></span>
              <span><LocalizedText zh="记忆" en="Memory" /></span>
              <span><LocalizedText zh="知识" en="Knowledge" /></span>
              <span><LocalizedText zh="治理" en="Governance" /></span>
            </div>
            <div className={styles.heroActions}>
              <Button asChild variant="spark" size="lg">
                <Link href="/contact"><T id="common.bookDemo" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#technical-design"><T id="positioning.productCta" /></Link>
              </Button>
            </div>
          </AnimatedBlock>

          <AnimatedBlock className={styles.heroVisual}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.beamField} aria-hidden="true" />
            <BilingualImage
              src={productImage}
              alt={{ zh: "Spark AI 一体机及发光知识分层与数据流", en: "Spark AI Appliance with illuminated knowledge layers and data flow" }}
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className={styles.heroImage}
            />
            <div className={styles.particles} aria-hidden="true">
              {Array.from({ length: 14 }, (_, index) => <span key={index} />)}
            </div>
            <div className={styles.productWordmark}><LocalizedText zh="Spark AI 一体机" en="Spark AI Appliance" /></div>
            <div className={styles.heroLayerStack}>
              <span><LocalizedText zh="AI 层" en="AI Layer" /></span>
              <span><LocalizedText zh="知识层" en="Knowledge Layer" /></span>
              <span><LocalizedText zh="企业记忆层" en="Enterprise Memory Layer" /></span>
              <span><LocalizedText zh="智能存储层" en="Intelligent Storage Layer" /></span>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <section className={styles.categorySection}>
        <Container>
          <AnimatedBlock className={styles.categoryCard}>
            <div className={styles.categoryHeading}>
              <p className={styles.categoryEyebrow}>
                <LocalizedText zh="一体化产品设计" en="INTEGRATED PRODUCT DESIGN" />
              </p>
              <h2>
                <LocalizedText zh="Knowledge Infrastructure Appliance" en="Knowledge Infrastructure Appliance" />
              </h2>
            </div>
            <div className={styles.categoryBody}>
              <p>
                <T id="positioning.product" />
              </p>
              <p>
                <T id="technical.intro" />
              </p>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="exterior-concept" className="scroll-mt-28 bg-[#eef4fa] py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <figure className="mx-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-sm">
              <LocalizedImage src="/images/products/spark-ai-appliance/exterior-concept-v3.png" altKey="concept.alt" width={1024} height={1536} sizes="(min-width: 1024px) 520px, (min-width: 640px) 576px, 100vw" className="h-auto w-full object-contain" />
              <T id="concept.caption" as="figcaption" className="p-5 text-sm leading-7 text-slate-600" />
            </figure>
            <div>
              <T id="concept.title" as="h2" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl" />
              <T id="concept.intro" as="p" className="mt-6 text-base leading-8 text-slate-600" />
              <div className="mt-9 space-y-7">
                {(["compute", "optical", "service"] as const).map(part => <div key={part}>
                  <T id={`concept.${part}.title`} as="h3" className="text-lg font-semibold text-slate-950" />
                  <T id={`concept.${part}.body`} as="p" className="mt-2 text-base leading-8 text-slate-600" />
                </div>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="architecture" className={styles.architectureSection}>
        <Container>
          <SectionHeader
            eyebrow={copy("Knowledge Architecture", "知识架构")}
            title={copy("A proposed architecture for enterprise knowledge.", "面向企业知识的拟议架构。")}
            body={copy("The architecture explores relationships among compute, retrieval, governance and storage. The layers shown describe design directions, not a confirmed delivery configuration.", "架构研究计算、检索、治理与存储之间的关系。图示层级表示设计方向，不代表已确认的交付配置。")}
          />
          <AnimatedBlock className={styles.architectureShell}>
            <div className={styles.architectureStack}>
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.title.en} className={styles.architectureItem}>
                    <div className={styles.architectureCard}>
                      <span><Icon aria-hidden="true" /></span>
                      <div>
                        <h3><LocalizedText {...layer.title} /></h3>
                        <p><LocalizedText {...layer.body} /></p>
                      </div>
                    </div>
                    {index < architectureLayers.length - 1 ? (
                      <div className={styles.flowConnector} aria-hidden="true"><ArrowDown /></div>
                    ) : null}
                  </div>
                );
              })}
              <div className={styles.storageGrid}>
                {storageTiers.map((tier) => {
                  const Icon = tier.icon;
                  return <div key={tier.title.en}><Icon aria-hidden="true" /><span><LocalizedText {...tier.title} /></span></div>;
                })}
              </div>
            </div>
          </AnimatedBlock>
          <div className={styles.memoryFramework} id="hierarchical-ai-memory">
            <header className={styles.memoryHeading}>
              <LocalizedText as="p" {...copy("Research framework", "研究框架")} />
              <h3><LocalizedText {...copy("Hierarchical AI Memory Infrastructure", "分层 AI 记忆基础设施")} /></h3>
              <LocalizedText as="p" {...copy("We study the data lifecycle across HBM → DRAM → NVMe → HDD → Optical. The goal: place knowledge where it best serves its current value, within governance and recovery constraints.", "我们研究 HBM → DRAM → NVMe → HDD → Optical 之间的数据生命周期。目标是在治理与恢复约束下，让知识自动进入最适合其当前价值的层级。")} />
            </header>
            <div className={styles.memoryColumns}>
              <div>
                <h4><LocalizedText {...copy("Knowledge activity guides placement", "以知识活度引导分层配置")} /></h4>
                <ol className={styles.memoryTierList}>
                  {memoryTiers.map((tier) => (
                    <li key={tier.medium}>
                      <LocalizedText {...tier.activity} />
                      <span aria-hidden="true">→</span>
                      <strong>{tier.medium}</strong>
                    </li>
                  ))}
                </ol>
                <LocalizedText as="p" className={styles.memoryNote} {...copy("Illustrative placement, not a mandatory migration sequence. HBM and DRAM represent runtime memory, not durable archives; object storage is an access model, not a physical medium. NVMe identifies an interface, while SSD identifies a storage device.", "以上为示意配置，并非必须逐层迁移的路径。HBM 与 DRAM 属于运行时内存，而非持久归档；对象存储是访问模型，并非物理介质。NVMe 表示接口，SSD 表示存储设备。")} />
              </div>
              <div>
                <h4><LocalizedText {...copy("Knowledge Activity (KA)", "知识活度（KA）")} /></h4>
                <p className={styles.memoryFormula}><LocalizedText {...copy("KA = f(access frequency, RAG hit rate, Agent invocation probability, timeliness, business value, recovery cost)", "KA = f(访问频率、RAG 命中率、Agent 调用概率、时效性、业务价值、恢复成本)")} /></p>
                <ul className={styles.memoryFactors}>
                  {knowledgeActivityFactors.map((factor) => <li key={factor.en}><LocalizedText {...factor} /></li>)}
                </ul>
                <LocalizedText as="p" className={styles.memoryNote} {...copy("KA is a research decision framework, not a validated scoring algorithm. Weights, observation windows and thresholds require workload-specific validation; this diagram does not assert that every tier ships in the appliance.", "KA 是研究中的决策框架，并非已验证的评分算法。权重、观测窗口与阈值需要结合实际工作负载验证；该图不代表一体机已交付全部层级能力。")} />
              </div>
            </div>
            <div className={styles.memoryPolicy}>
              <h4><LocalizedText {...copy("Placement changes as knowledge value changes", "知识价值变化，配置随之调整")} /></h4>
              <LocalizedText as="p" {...copy("The proposed policy promotes knowledge when demand rises and moves it toward capacity or archive tiers as activity falls. Reactivation includes retrieval, verification and loading into runtime memory when needed—not simply moving a file into HBM. Retention rules, permissions, integrity checks and recovery objectives constrain every transition.", "拟议策略在需求上升时提升知识所在层级，在活度下降时转向容量层或归档层。知识重新激活包括检索、校验，以及按需加载至运行时内存，而非简单把文件搬进 HBM。每次转换均须遵守保留规则、访问权限、完整性校验与恢复目标。")} />
            </div>
          </div>
        </Container>
      </section>

      <TechnicalDesign />
      <section className="bg-[#eef4fa] py-16"><Container><Button asChild variant="spark" size="lg"><Link href="/contact"><T id="positioning.contactCta" /></Link></Button></Container></section>
    </main>
  );
}
