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
  ["AI Compute", "Accelerated inference and retrieval designed around governed enterprise workloads."],
  ["Intelligent Storage", "Policy-driven data placement across performance, capacity and archival tiers."],
  ["Knowledge Intelligence", "Enterprise RAG turns fragmented records into attributable, reusable knowledge."],
];

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <HeroSection
        eyebrow="SPARK AI DESIGN SYSTEM · V1.0"
        title={<>Infrastructure clarity,<br /><span>designed into every layer.</span></>}
        description="A unified visual and interaction system for communicating enterprise AI infrastructure with precision, confidence and measurable business value."
      />

      <section className={styles.section} id="tokens">
        <SectionHeader eyebrow="01 · Foundations" title="One system. Consistent decisions." description="Tokens make product experiences coherent across investor, enterprise, government and partner journeys—without sacrificing page-level storytelling." />
        <div className={styles.tokenGrid}>
          {colors.map(([name, value]) => <div className={styles.colorToken} key={name}><span style={{ background: value }} /><strong>{name}</strong><code>{value}</code></div>)}
        </div>
        <div className={styles.foundationGrid}>
          <GlassPanel className={styles.typePanel}><p className={styles.label}>Typography scale</p><div className={styles.displayType}>Enterprise AI</div><div className={styles.headingType}>Governed knowledge infrastructure</div><p>Body copy prioritizes clarity, comfortable measure and credible technical language.</p></GlassPanel>
          <GlassPanel className={styles.spacingPanel}><p className={styles.label}>Spacing system</p>{[4,8,12,16,24,32,48,64].map(size=><div key={size}><span style={{width:`${size * 2}px`}} />{size}px</div>)}</GlassPanel>
        </div>
      </section>

      <section className={styles.section} id="components">
        <SectionHeader eyebrow="02 · Components" title="Reusable building blocks for enterprise trust." description="Components share geometry, interaction behavior and accessibility rules while remaining flexible enough for product, architecture and industry narratives." />
        <div className={styles.componentBlock}>
          <div className={styles.blockHeader}><h3>Actions</h3><p>One primary decision per section. Secondary actions remain clear without competing.</p></div>
          <GlassPanel className={styles.buttonShowcase}><CTAButton href="/contact">Primary action</CTAButton><CTAButton href="/products/spark-ai-appliance" variant="secondary">Secondary action</CTAButton><CTAButton href="/principles" variant="ghost">Ghost action</CTAButton></GlassPanel>
        </div>
        <FeatureGrid>{enterpriseCards.map(([title,description])=><EnterpriseCard key={title} title={title} description={description} />)}</FeatureGrid>
        <div className={styles.metrics}><MetricCard value="1 PB" label="Intelligent tiered storage" detail="Per appliance configuration" /><MetricCard value="50+ yrs" label="Archival horizon" detail="Designed for durable retention" /><MetricCard value="24/7" label="Governance control" detail="Policy, lineage and audit" /><MetricCard value="10–100×" label="AI retrieval potential" detail="Workload dependent" /></div>
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow="03 · Product storytelling" title="Every visual explains the platform." description="Data movement, governance boundaries and system layers are expressed as maintainable interface elements—not decorative screenshots." />
        <ProductShowcase />
        <div className={styles.diagramGrid}><div><div className={styles.blockHeader}><h3>Knowledge Flow</h3><p>Communicates input, governed intelligence and outcome.</p></div><KnowledgeFlow /></div><div><div className={styles.blockHeader}><h3>Architecture Diagram</h3><p>Clarifies the stack from infrastructure to experience.</p></div><ArchitectureDiagram /></div></div>
      </section>

      <section className={styles.section} id="motion">
        <SectionHeader eyebrow="04 · Motion" title="Motion should reveal causality." description="Transitions explain sequence, hierarchy and data movement. They never obscure content or delay access to core information." />
        <div className={styles.motionGrid}><GlassPanel><span>01</span><h3>Reveal</h3><p>240–600ms · power-out easing · 16–24px travel maximum.</p></GlassPanel><GlassPanel><span>02</span><h3>Data flow</h3><p>4–7s · linear path motion · small highlights without bloom.</p></GlassPanel><GlassPanel><span>03</span><h3>Reduced motion</h3><p>Content remains visible; continuous movement and parallax stop.</p></GlassPanel></div>
        <GlowLine />
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow="05 · Industry patterns" title="Business outcomes before feature inventories." description="Industry cards connect infrastructure capability to regulated, operational and knowledge-intensive enterprise needs." />
        <GlassPanel className={styles.industryList}>{[["Healthcare","Governed clinical knowledge and durable imaging archives."],["Government","Sovereign AI workflows with policy-aligned retention."],["Finance","Auditable intelligence across high-value institutional records."],["Manufacturing","Operational knowledge grounded in engineering and production data."]].map(([industry,outcome])=><IndustryCard key={industry} industry={industry} outcome={outcome} />)}</GlassPanel>
      </section>
      <Footer />
    </main>
  );
}
