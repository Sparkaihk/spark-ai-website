import type { Metadata } from "next";
import {
  ArchitectureDiagram,
  CTAButton,
  EnterpriseCard,
  FeatureGrid,
  Footer,
  GlassPanel,
  GlowLine,
  HeroSection,
  IndustryCard,
  KnowledgeFlow,
  MetricCard,
  ProductShowcase,
  SectionHeader,
} from "@/components/design-system";
import styles from "./page.module.css";
import { LocalizedText } from "@/components/site/localized-text";

const L = ({ en, zh }: { en: string; zh: string }) => <LocalizedText en={en} zh={zh} />;

export const metadata: Metadata = {
  title: "Design System | Spark AI",
  description: "The design language, interface components and motion principles behind Spark AI enterprise infrastructure experiences.",
};

const colors = [
  ["Spark Blue 600", "#075EE6"], ["Spark Blue 500", "#1478F2"], ["Cyan 400", "#45C8E8"],
  ["Ink 950", "#07142E"], ["Ink 700", "#25395C"], ["Ink 500", "#61718C"],
  ["Surface", "#F7FBFF"], ["White", "#FFFFFF"],
];

const enterpriseCards = [
  [{ en: "AI Compute", zh: "AI 算力" }, { en: "Accelerated inference and retrieval designed around governed enterprise workloads.", zh: "围绕受治理的企业工作负载，提供加速推理与检索能力。" }],
  [{ en: "Intelligent Storage", zh: "智能存储" }, { en: "Policy-driven data placement across performance, capacity and archival tiers.", zh: "通过策略驱动数据在性能、容量与归档层之间智能流转。" }],
  [{ en: "Knowledge Intelligence", zh: "知识智能" }, { en: "Enterprise RAG turns fragmented records into attributable, reusable knowledge.", zh: "企业级 RAG 将分散记录转化为可溯源、可复用的知识。" }],
];

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <HeroSection
        eyebrow={<L en="SPARK AI DESIGN SYSTEM · V1.0" zh="SPARK AI 设计系统 · V1.0" />}
        title={<><L en="Infrastructure clarity," zh="让基础设施清晰可见，" /><br /><span><L en="designed into every layer." zh="贯穿每一层设计。" /></span></>}
        description={<L en="A unified visual and interaction system for communicating enterprise AI infrastructure with precision, confidence and measurable business value." zh="以统一的视觉与交互系统，精准、可信地呈现企业 AI 基础设施及其可衡量的业务价值。" />}
      />

      <section className={styles.section} id="tokens">
        <SectionHeader eyebrow={<L en="01 · Foundations" zh="01 · 设计基础" />} title={<L en="One system. Consistent decisions." zh="一套系统，一致决策。" />} description={<L en="Tokens make product experiences coherent across investor, enterprise, government and partner journeys—without sacrificing page-level storytelling." zh="设计令牌让投资人、企业、政府与合作伙伴场景保持一致，同时保留每个页面的叙事能力。" />} />
        <div className={styles.tokenGrid}>
          {colors.map(([name, value]) => <div className={styles.colorToken} key={name}><span style={{ background: value }} /><strong>{name}</strong><code>{value}</code></div>)}
        </div>
        <div className={styles.foundationGrid}>
          <GlassPanel className={styles.typePanel}><p className={styles.label}><L en="Typography scale" zh="字体层级" /></p><div className={styles.displayType}><L en="Enterprise AI" zh="企业 AI" /></div><div className={styles.headingType}><L en="Governed knowledge infrastructure" zh="治理型知识基础设施" /></div><p><L en="Body copy prioritizes clarity, comfortable measure and credible technical language." zh="正文优先保证清晰、舒适的阅读宽度与可信的技术表达。" /></p></GlassPanel>
          <GlassPanel className={styles.spacingPanel}><p className={styles.label}><L en="Spacing system" zh="间距系统" /></p>{[4,8,12,16,24,32,48,64].map(size=><div key={size}><span style={{width:`${size * 2}px`}} />{size}px</div>)}</GlassPanel>
        </div>
      </section>

      <section className={styles.section} id="components">
        <SectionHeader eyebrow={<L en="02 · Components" zh="02 · 组件" />} title={<L en="Reusable building blocks for enterprise trust." zh="构建企业信任的可复用组件。" />} description={<L en="Components share geometry, interaction behavior and accessibility rules while remaining flexible enough for product, architecture and industry narratives." zh="组件共享几何、交互与无障碍规范，同时保留产品、架构与行业叙事所需的灵活性。" />} />
        <div className={styles.componentBlock}>
          <div className={styles.blockHeader}><h3><L en="Actions" zh="操作" /></h3><p><L en="One primary decision per section. Secondary actions remain clear without competing." zh="每个区块聚焦一个主要决策，次要操作保持清晰但不争夺注意力。" /></p></div>
          <GlassPanel className={styles.buttonShowcase}><CTAButton href="/contact"><L en="Primary action" zh="主要操作" /></CTAButton><CTAButton href="/products/spark-ai-appliance" variant="secondary"><L en="Secondary action" zh="次要操作" /></CTAButton><CTAButton href="/principles" variant="ghost"><L en="Ghost action" zh="弱化操作" /></CTAButton></GlassPanel>
        </div>
        <FeatureGrid>{enterpriseCards.map(([title,description])=><EnterpriseCard key={title.en} title={<LocalizedText {...title} />} description={<LocalizedText {...description} />} />)}</FeatureGrid>
        <div className={styles.metrics}><MetricCard value="1 PB" label={<L en="Intelligent tiered storage" zh="智能分层存储" />} detail={<L en="Per appliance configuration" zh="单台一体机配置" />} /><MetricCard value="50+ yrs" label={<L en="Archival horizon" zh="归档周期" />} detail={<L en="Designed for durable retention" zh="面向长期保存设计" />} /><MetricCard value="24/7" label={<L en="Governance control" zh="治理控制" />} detail={<L en="Policy, lineage and audit" zh="策略、血缘与审计" />} /><MetricCard value="10–100×" label={<L en="AI retrieval potential" zh="AI 检索潜力" />} detail={<L en="Workload dependent" zh="取决于工作负载" />} /></div>
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow={<L en="03 · Product storytelling" zh="03 · 产品叙事" />} title={<L en="Every visual explains the platform." zh="每一个视觉都在解释平台。" />} description={<L en="Data movement, governance boundaries and system layers are expressed as maintainable interface elements—not decorative screenshots." zh="以可维护的界面元素呈现数据流动、治理边界与系统层级，而非装饰性截图。" />} />
        <ProductShowcase />
        <div className={styles.diagramGrid}><div><div className={styles.blockHeader}><h3><L en="Knowledge Flow" zh="知识流" /></h3><p><L en="Communicates input, governed intelligence and outcome." zh="清晰呈现输入、治理型智能与输出成果。" /></p></div><KnowledgeFlow /></div><div><div className={styles.blockHeader}><h3><L en="Architecture Diagram" zh="架构图" /></h3><p><L en="Clarifies the stack from infrastructure to experience." zh="清晰说明从基础设施到体验层的技术栈。" /></p></div><ArchitectureDiagram /></div></div>
      </section>

      <section className={styles.section} id="motion">
        <SectionHeader eyebrow={<L en="04 · Motion" zh="04 · 动效" />} title={<L en="Motion should reveal causality." zh="动效应揭示因果关系。" />} description={<L en="Transitions explain sequence, hierarchy and data movement. They never obscure content or delay access to core information." zh="转场用于解释顺序、层级与数据流动，不遮挡内容，也不延迟核心信息的获取。" />} />
        <div className={styles.motionGrid}><GlassPanel><span>01</span><h3><L en="Reveal" zh="呈现" /></h3><p><L en="240–600ms · power-out easing · 16–24px travel maximum." zh="240–600ms · power-out 缓动 · 最大位移 16–24px。" /></p></GlassPanel><GlassPanel><span>02</span><h3><L en="Data flow" zh="数据流" /></h3><p><L en="4–7s · linear path motion · small highlights without bloom." zh="4–7 秒 · 线性路径运动 · 轻微高光，不使用过度泛光。" /></p></GlassPanel><GlassPanel><span>03</span><h3><L en="Reduced motion" zh="减少动态效果" /></h3><p><L en="Content remains visible; continuous movement and parallax stop." zh="内容始终可见；连续运动与视差效果停止。" /></p></GlassPanel></div>
        <GlowLine />
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow={<L en="05 · Industry patterns" zh="05 · 行业模式" />} title={<L en="Business outcomes before feature inventories." zh="先讲业务成果，再讲功能清单。" />} description={<L en="Industry cards connect infrastructure capability to regulated, operational and knowledge-intensive enterprise needs." zh="行业卡片将基础设施能力与受监管、运营密集和知识密集型企业需求连接起来。" />} />
        <GlassPanel className={styles.industryList}>{[
          [{en:"Healthcare",zh:"医疗"},{en:"Governed clinical knowledge and durable imaging archives.",zh:"受治理的临床知识与长期医学影像归档。"}],
          [{en:"Government",zh:"政府"},{en:"Sovereign AI workflows with policy-aligned retention.",zh:"符合政策保留要求的自主可控 AI 工作流。"}],
          [{en:"Finance",zh:"金融"},{en:"Auditable intelligence across high-value institutional records.",zh:"面向高价值机构记录的可审计智能。"}],
          [{en:"Manufacturing",zh:"制造"},{en:"Operational knowledge grounded in engineering and production data.",zh:"以工程与生产数据为基础的运营知识。"}],
        ].map(([industry,outcome])=><IndustryCard key={industry.en} industry={<LocalizedText {...industry} />} outcome={<LocalizedText {...outcome} />} ariaLabel={{en:`Explore ${industry.en}`,zh:`了解${industry.zh}`}} />)}</GlassPanel>
      </section>
      <Footer />
    </main>
  );
}
