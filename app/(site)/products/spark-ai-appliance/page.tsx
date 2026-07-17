import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ArrowDown,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleX,
  Cloud,
  Cpu,
  FileSearch,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { BilingualImage } from "@/components/site/bilingual-image";
import { LocalizedText } from "@/components/site/localized-text";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";

import styles from "./spark-ai-appliance.module.css";

const applianceName = "Spark AI Appliance\u2122";
const productImage = "/images/products/spark-ai-appliance/hero-render-v1.png";
type Copy = { zh: string; en: string };
const copy = (en: string, zh: string): Copy => ({ en, zh });

export const metadata: Metadata = {
  title: "Spark AI Appliance | The First Knowledge Infrastructure Appliance",
  description:
    "Spark AI Appliance is the first knowledge infrastructure appliance for the AI era, unifying compute, memory, knowledge and governance.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

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

const capabilities = [
  {
    icon: BrainCircuit,
    title: copy("AI Memory", "AI 记忆"),
    body: copy("Preserves operational context and institutional knowledge so AI can build on what the organization already knows.", "持续保存业务上下文与机构知识，让 AI 能够在既有知识基础上不断演进。"),
  },
  {
    icon: FileSearch,
    title: copy("Enterprise RAG", "企业 RAG"),
    body: copy("Grounds responses in governed source material, metadata and permissions for reliable enterprise retrieval.", "结合可信来源、元数据与权限体系，为企业提供可靠、可追溯的智能检索。"),
  },
  {
    icon: Layers3,
    title: copy("Intelligent Tiered Storage", "智能分层存储"),
    body: copy("Places knowledge across performance, capacity and archive tiers according to value, access and policy.", "依据知识价值、访问频率与治理策略，在高性能、容量和归档层之间智能配置。"),
  },
  {
    icon: Network,
    title: copy("Multi-modal Knowledge", "多模态知识"),
    body: copy("Connects documents, images, video, audio and technical files within one searchable knowledge environment.", "在统一知识环境中连接文档、图像、视频、音频及各类技术文件。"),
  },
  {
    icon: ShieldCheck,
    title: copy("Data Governance", "数据治理"),
    body: copy("Maintains access control, retention policy, integrity and auditability throughout the knowledge lifecycle.", "在知识全生命周期中落实权限控制、保存策略、完整性保护与审计追踪。"),
  },
  {
    icon: LockKeyhole,
    title: copy("Private AI Infrastructure", "私有 AI 基础设施"),
    body: copy("Runs retrieval and AI workloads close to controlled data in edge, enterprise or private-cloud environments.", "在边缘、企业本地或私有云环境中，让智能检索与 AI 工作负载贴近受控数据运行。"),
  },
];

const hardwareHighlights = [
  { icon: Cpu, eyebrow: copy("AI Compute", "AI 算力"), value: copy("High-performance NVIDIA RTX platform", "高性能 NVIDIA RTX 平台") },
  { icon: HardDrive, eyebrow: copy("Storage", "存储"), value: copy("100 TB–1 PB intelligent tiered storage", "100 TB–1 PB 智能分层存储") },
  { icon: Layers3, eyebrow: copy("Knowledge Layer", "知识层"), value: copy("SSD + HDD + Optical Archive", "SSD + HDD + 光学归档") },
  { icon: Cloud, eyebrow: copy("Deployment", "部署"), value: copy("Edge · Enterprise · Private Cloud", "边缘 · 企业本地 · 私有云") },
  { icon: ShieldCheck, eyebrow: copy("Availability", "可用性"), value: copy("24×7 Enterprise Ready", "面向企业 7×24 小时运行") },
  { icon: Server, eyebrow: copy("Scalability", "扩展能力"), value: copy("Single Node → Enterprise Cluster", "单节点 → 企业级集群") },
];

type IndustryItem = {
  id: string;
  title: Copy;
  body: Copy;
  image: string;
  alt: Copy;
  href: string;
};

const industries: IndustryItem[] = [
  {
    id: "healthcare",
    title: copy("Healthcare", "医疗"),
    body: copy(
      "Unify medical imaging, patient records and clinical knowledge in a privately deployed environment with controlled access, intelligent retrieval and durable preservation.",
      "在受控访问和私有化部署环境中，统一管理医疗影像、患者记录和临床知识，为医疗机构构建可检索、可治理、可长期保存的人工智能知识基础。",
    ),
    image: "/images/industries/healthcare-knowledge-infrastructure.webp",
    alt: copy("Healthcare knowledge infrastructure for medical imaging, patient records and clinical AI", "用于医疗影像、病历和临床人工智能的知识基础设施"),
    href: "/industries",
  },
  {
    id: "government",
    title: copy("Government", "政府与公共机构"),
    body: copy(
      "Turn public archives, government records and institutional knowledge into secure, continuous digital memory with long-term preservation and permission control.",
      "将公共档案、政务记录和机构知识转化为安全、连续且可治理的数字记忆，支持长期保存、权限控制和跨时间的知识传承。",
    ),
    image: "/images/industries/government-knowledge-infrastructure.webp",
    alt: copy("Government knowledge infrastructure for public archives and long-term institutional memory", "用于公共档案和长期机构记忆的政府知识基础设施"),
    href: "/industries",
  },
  {
    id: "finance",
    title: copy("Finance", "金融"),
    body: copy(
      "Preserve compliance records, research and business knowledge with complete audit trails and governed access for trustworthy, verifiable financial intelligence.",
      "统一保存合规记录、研究资料和业务知识，通过完整审计追踪和数据治理，为金融机构建立可信、可验证的智能基础。",
    ),
    image: "/images/industries/finance-knowledge-infrastructure.webp",
    alt: copy("Financial knowledge infrastructure for compliance records, governance and auditable intelligence", "用于合规记录、治理和可审计智能的金融知识基础设施"),
    href: "/industries",
  },
  {
    id: "manufacturing",
    title: copy("Manufacturing", "制造"),
    body: copy(
      "Connect CAD drawings, equipment data, maintenance history and digital twins so engineering knowledge remains preserved, searchable and ready for intelligent analysis.",
      "整合 CAD 图纸、设备资料、维修历史和数字孪生数据，让工程知识能够被持续保存、检索和用于智能分析。",
    ),
    image: "/images/industries/manufacturing-knowledge-infrastructure.webp",
    alt: copy("Manufacturing knowledge infrastructure for CAD, digital twins and engineering history", "用于 CAD、数字孪生和工程历史的制造业知识基础设施"),
    href: "/industries",
  },
  {
    id: "education",
    title: copy("Education", "教育与科研"),
    body: copy(
      "Connect research data, academic work, learning resources and institutional memory to support cumulative knowledge and AI-assisted discovery.",
      "连接科研数据、学术成果、教学资源和机构记忆，为大学和研究机构提供可持续积累并支持人工智能辅助发现的知识基础。",
    ),
    image: "/images/industries/education-knowledge-infrastructure.webp",
    alt: copy("Education knowledge infrastructure for research data and AI-assisted discovery", "用于科研数据和人工智能辅助发现的教育知识基础设施"),
    href: "/industries",
  },
  {
    id: "media",
    title: copy("Media", "媒体"),
    body: copy(
      "Govern video, audio, images and creative assets with multimodal retrieval and long-term preservation so media collections continue to create value.",
      "管理视频、音频、图像和创意资产，通过多模态检索、内容治理和长期保存，让媒体资料持续产生新的价值。",
    ),
    image: "/images/industries/media-knowledge-infrastructure.webp",
    alt: copy("Media knowledge infrastructure for video archives, creative assets and multimodal search", "用于视频档案、创意资产和多模态搜索的媒体知识基础设施"),
    href: "/industries",
  },
];

const comparisonRows = [
  [copy("AI Memory", "AI 记忆"), copy("Session-based context", "仅保留会话上下文"), copy("Persistent institutional memory", "持续积累机构级记忆")],
  [copy("Long-term Knowledge Preservation", "长期知识保存"), copy("Separate archive systems", "依赖独立归档系统"), copy("Integrated lifecycle preservation", "贯穿全生命周期的一体化保存")],
  [copy("Multi-modal Retrieval", "多模态智能检索"), copy("Point solutions", "分散的单点工具"), copy("Documents, images, video and technical data", "统一检索文档、图像、视频与技术数据")],
  [copy("Enterprise Governance", "企业治理"), copy("Added through external tools", "依赖外部工具补充"), copy("Built into access, retention and audit workflows", "内置于权限、保存与审计流程")],
  [copy("Intelligent Tiered Storage", "智能分层存储"), copy("Single storage tier", "单一存储层"), copy("NVMe, HDD, optical archive and cloud", "NVMe、HDD、光学归档与云端协同")],
  [copy("Knowledge Lifecycle Management", "知识生命周期管理"), copy("Fragmented operations", "流程分散"), copy("One governed infrastructure platform", "统一治理的知识基础设施平台")],
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
            <h1><LocalizedText zh="Spark AI 一体机™" en={applianceName} /></h1>
            <h2>
              <LocalizedText zh="首款知识基础设施一体机" en="The First Knowledge Infrastructure Appliance" />
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
                <Link href="/resources"><LocalizedText zh="下载白皮书" en="Download White Paper" /></Link>
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
                <LocalizedText zh="AI 基础设施的新类别" en="A NEW CATEGORY OF AI INFRASTRUCTURE" />
              </p>
              <h2>
                <LocalizedText zh="Knowledge Infrastructure Appliance" en="Knowledge Infrastructure Appliance" />
              </h2>
            </div>
            <div className={styles.categoryBody}>
              <p>
                <LocalizedText
                  zh="Spark AI 正在定义一个全新的产品类别：Knowledge Infrastructure Appliance，让每一个机构都能拥有专属的 AI 知识基础设施。"
                  en="Spark AI is defining a new category: the Knowledge Infrastructure Appliance—giving every organization its own AI knowledge infrastructure."
                />
              </p>
              <p>
                <LocalizedText
                  zh="它不是一台普通的 AI 服务器，也不是单纯的存储设备。它将 AI 算力、长期知识存储、企业 RAG、AI 记忆与数据治理，整合为一套可私有部署、可持续演进的知识基础设施。"
                  en="It is not simply an AI server or a storage system. It integrates AI computing, long-term knowledge storage, enterprise RAG, AI memory and data governance into one privately deployable and continuously evolving platform."
                />
              </p>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section id="architecture" className={styles.architectureSection}>
        <Container>
          <SectionHeader
            eyebrow={copy("Knowledge Architecture", "知识架构")}
            title={copy("One system. Every layer of enterprise knowledge.", "一个系统，贯通企业知识的每一层。")}
            body={copy("Data moves through a governed knowledge stack—from accelerated storage to AI applications—without breaking continuity, context or control.", "数据在受治理的知识栈中持续流转，从高速存储到 AI 应用，始终保持连续性、上下文与控制力。")}
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
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader
            eyebrow={copy("Core Capabilities", "核心能力")}
            title={copy("Knowledge infrastructure, integrated by design.", "以一体化设计构建知识基础设施。")}
            body={copy("Six coordinated capabilities turn fragmented enterprise information into governed knowledge that remains useful over time.", "六项协同能力将分散的企业信息转化为受治理、可持续利用的知识资产。")}
          />
          <AnimatedStagger className={styles.capabilityGrid}>
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title.en} className={styles.capabilityCard}>
                  <span className={styles.iconTile}><Icon aria-hidden="true" /></span>
                  <h3><LocalizedText {...item.title} /></h3>
                  <p><LocalizedText {...item.body} /></p>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className={styles.hardwareSection}>
        <Container>
          <SectionHeader
            eyebrow={copy("Hardware Highlights", "硬件亮点")}
            title={copy("Enterprise hardware without the specification-table experience.", "以更直观的方式呈现企业级硬件实力。")}
            body={copy("A balanced system for accelerated AI, governed storage and long-term knowledge continuity—from one node to enterprise scale.", "兼顾 AI 加速、受治理存储与长期知识连续性，可从单节点平滑扩展至企业级规模。")}
          />
          <AnimatedStagger className={styles.hardwareGrid}>
            {hardwareHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.eyebrow.en} className={styles.hardwareCard}>
                  <Icon aria-hidden="true" />
                  <p><LocalizedText {...item.eyebrow} /></p>
                  <h3><LocalizedText {...item.value} /></h3>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader
            eyebrow={copy("Industry Solutions", "行业解决方案")}
            title={copy("Built for knowledge-intensive organizations.", "为知识密集型企业及机构而设计。")}
            body={copy("Spark AI Appliance helps institutions preserve high-value information, retrieve it with context and govern how it supports AI.", "Spark AI 一体机帮助企业及机构长期保存高价值信息，在完整上下文中进行智能检索，并以统一治理支持 AI 应用。")}
          />
          <AnimatedStagger className={styles.industryGrid}>
            {industries.map((item) => {
              return (
                <article key={item.id} className={styles.industryCard}>
                  <div className={styles.industryImageWrapper}>
                    <BilingualImage
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.industryImage}
                    />
                    <span className={styles.industryImageFade} aria-hidden="true" />
                  </div>
                  <div className={styles.industryContent}>
                    <h3><LocalizedText {...item.title} /></h3>
                    <p><LocalizedText {...item.body} /></p>
                    <Link href={item.href}><T id="common.learnMore" /> <ChevronRight aria-hidden="true" /></Link>
                  </div>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className={styles.comparisonSection}>
        <Container>
          <SectionHeader
            eyebrow={copy("Why Spark AI", "为什么选择 Spark AI")}
            title={copy("From an AI server to knowledge infrastructure.", "从 AI 服务器迈向知识基础设施。")}
            body={copy("Traditional servers provide compute. Spark AI Appliance connects compute with memory, retrieval, governance and the full knowledge lifecycle.", "传统服务器主要提供算力；Spark AI 一体机进一步连接记忆、智能检索、治理与完整的知识生命周期。")}
          />
          <AnimatedBlock className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div><LocalizedText zh="能力" en="Capability" /></div>
              <div><CircleX aria-hidden="true" /> <LocalizedText zh="传统 AI 服务器" en="Traditional AI Server" /></div>
              <div><Sparkles aria-hidden="true" /> <LocalizedText zh="Spark AI 一体机™" en={applianceName} /></div>
            </div>
            {comparisonRows.map(([feature, traditional, spark]) => (
              <div key={feature.en} className={styles.comparisonRow}>
                <h3><LocalizedText {...feature} /></h3>
                <p><CircleX aria-hidden="true" /><LocalizedText {...traditional} /></p>
                <p><Check aria-hidden="true" /><LocalizedText {...spark} /></p>
              </div>
            ))}
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
