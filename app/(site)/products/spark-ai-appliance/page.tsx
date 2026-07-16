import type { Metadata } from "next";
import Image from "next/image";
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
  Factory,
  FileSearch,
  Film,
  GraduationCap,
  HardDrive,
  HeartPulse,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Waypoints,
} from "lucide-react";

import { AnimatedBlock, AnimatedStagger } from "@/components/design-system/animated";
import { Container } from "@/components/design-system/container";
import { Button } from "@/components/ui/button";

import styles from "./spark-ai-appliance.module.css";

const applianceName = "Spark AI Appliance\u2122";
const productImage = "/images/products/spark-ai-appliance/hero-render-v1.png";

export const metadata: Metadata = {
  title: "Spark AI Appliance | The First Knowledge Infrastructure Appliance",
  description:
    "Spark AI Appliance is the first knowledge infrastructure appliance for the AI era, unifying compute, memory, knowledge and governance.",
  alternates: { canonical: "/products/spark-ai-appliance" },
};

const architectureLayers = [
  { icon: Sparkles, title: "AI Applications", body: "Knowledge-powered enterprise experiences" },
  { icon: Bot, title: "AI Agents", body: "Context-aware workflows and automation" },
  { icon: FileSearch, title: "Enterprise RAG", body: "Governed retrieval grounded in source data" },
  { icon: Waypoints, title: "Knowledge Graph", body: "Connected entities, meaning and relationships" },
  { icon: BrainCircuit, title: "AI Memory", body: "Persistent institutional context" },
  { icon: Layers3, title: "Intelligent Tiered Storage", body: "Policy-driven placement across every tier" },
];

const storageTiers = [
  { icon: Cpu, title: "NVMe SSD" },
  { icon: HardDrive, title: "HDD" },
  { icon: Archive, title: "Optical Archive" },
  { icon: Cloud, title: "Cloud" },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Memory",
    body: "Preserves operational context and institutional knowledge so AI can build on what the organization already knows.",
  },
  {
    icon: FileSearch,
    title: "Enterprise RAG",
    body: "Grounds responses in governed source material, metadata and permissions for reliable enterprise retrieval.",
  },
  {
    icon: Layers3,
    title: "Intelligent Tiered Storage",
    body: "Places knowledge across performance, capacity and archive tiers according to value, access and policy.",
  },
  {
    icon: Network,
    title: "Multi-modal Knowledge",
    body: "Connects documents, images, video, audio and technical files within one searchable knowledge environment.",
  },
  {
    icon: ShieldCheck,
    title: "Data Governance",
    body: "Maintains access control, retention policy, integrity and auditability throughout the knowledge lifecycle.",
  },
  {
    icon: LockKeyhole,
    title: "Private AI Infrastructure",
    body: "Runs retrieval and AI workloads close to controlled data in edge, enterprise or private-cloud environments.",
  },
];

const hardwareHighlights = [
  { icon: Cpu, eyebrow: "AI Compute", value: "High-performance NVIDIA RTX platform" },
  { icon: HardDrive, eyebrow: "Storage", value: "100 TB–1 PB intelligent tiered storage" },
  { icon: Layers3, eyebrow: "Knowledge Layer", value: "SSD + HDD + Optical Archive" },
  { icon: Cloud, eyebrow: "Deployment", value: "Edge · Enterprise · Private Cloud" },
  { icon: ShieldCheck, eyebrow: "Availability", value: "24×7 Enterprise Ready" },
  { icon: Server, eyebrow: "Scalability", value: "Single Node → Enterprise Cluster" },
];

const industries = [
  { icon: HeartPulse, title: "Healthcare", body: "Medical images, patient records and clinical knowledge under controlled access." },
  { icon: Landmark, title: "Government", body: "Archives, public records and institutional knowledge built for long-term continuity." },
  { icon: WalletCards, title: "Finance", body: "Compliance records, research and enterprise intelligence with auditable governance." },
  { icon: Factory, title: "Manufacturing", body: "Engineering drawings, CAD files, maintenance history and digital-twin knowledge." },
  { icon: GraduationCap, title: "Education", body: "Research data, learning resources and institutional memory for AI-assisted discovery." },
  { icon: Film, title: "Media", body: "Video libraries, creative archives and content intelligence across long retention cycles." },
];

const comparisonRows = [
  ["AI Memory", "Session-based context", "Persistent institutional memory"],
  ["Long-term Knowledge Preservation", "Separate archive systems", "Integrated lifecycle preservation"],
  ["Multi-modal Retrieval", "Point solutions", "Documents, images, video and technical data"],
  ["Enterprise Governance", "Added through external tools", "Built into access, retention and audit workflows"],
  ["Intelligent Tiered Storage", "Single storage tier", "NVMe, HDD, optical archive and cloud"],
  ["Knowledge Lifecycle Management", "Fragmented operations", "One governed infrastructure platform"],
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <AnimatedBlock className={styles.sectionHeader}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <div>{body}</div>
    </AnimatedBlock>
  );
}

export default function SparkAiAppliancePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <AnimatedBlock className={styles.heroCopy}>
            <h1>{applianceName}</h1>
            <h2>
              The First Knowledge Infrastructure Appliance
              <span>for the AI Era</span>
            </h2>
            <div className={styles.heroPillars} aria-label="Product foundations">
              <span>Compute</span>
              <span>Memory</span>
              <span>Knowledge</span>
              <span>Governance</span>
            </div>
            <div className={styles.heroActions}>
              <Button asChild variant="spark" size="lg">
                <Link href="/contact">Book Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Download White Paper</Link>
              </Button>
            </div>
          </AnimatedBlock>

          <AnimatedBlock className={styles.heroVisual}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.beamField} aria-hidden="true" />
            <Image
              src={productImage}
              alt="Spark AI Appliance with illuminated knowledge layers and data flow"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className={styles.heroImage}
            />
            <div className={styles.particles} aria-hidden="true">
              {Array.from({ length: 14 }, (_, index) => <span key={index} />)}
            </div>
            <div className={styles.productWordmark}>Spark AI Appliance</div>
            <div className={styles.heroLayerStack} aria-label="Spark AI Appliance infrastructure layers">
              <span>AI Layer</span>
              <span>Knowledge Layer</span>
              <span>Enterprise Memory Layer</span>
              <span>Intelligent Storage Layer</span>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <section id="architecture" className={styles.architectureSection}>
        <Container>
          <SectionHeader
            eyebrow="Knowledge Architecture"
            title="One system. Every layer of enterprise knowledge."
            body="Data moves through a governed knowledge stack—from accelerated storage to AI applications—without breaking continuity, context or control."
          />
          <AnimatedBlock className={styles.architectureShell}>
            <div className={styles.architectureStack}>
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.title} className={styles.architectureItem}>
                    <div className={styles.architectureCard}>
                      <span><Icon aria-hidden="true" /></span>
                      <div>
                        <h3>{layer.title}</h3>
                        <p>{layer.body}</p>
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
                  return <div key={tier.title}><Icon aria-hidden="true" /><span>{tier.title}</span></div>;
                })}
              </div>
            </div>
          </AnimatedBlock>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Knowledge infrastructure, integrated by design."
            body="Six coordinated capabilities turn fragmented enterprise information into governed knowledge that remains useful over time."
          />
          <AnimatedStagger className={styles.capabilityGrid}>
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.capabilityCard}>
                  <span className={styles.iconTile}><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className={styles.hardwareSection}>
        <Container>
          <SectionHeader
            eyebrow="Hardware Highlights"
            title="Enterprise hardware without the specification-table experience."
            body="A balanced system for accelerated AI, governed storage and long-term knowledge continuity—from one node to enterprise scale."
          />
          <AnimatedStagger className={styles.hardwareGrid}>
            {hardwareHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.eyebrow} className={styles.hardwareCard}>
                  <Icon aria-hidden="true" />
                  <p>{item.eyebrow}</p>
                  <h3>{item.value}</h3>
                </article>
              );
            })}
          </AnimatedStagger>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader
            eyebrow="Industry Solutions"
            title="Built for knowledge-intensive organizations."
            body="Spark AI Appliance helps institutions preserve high-value information, retrieve it with context and govern how it supports AI."
          />
          <AnimatedStagger className={styles.industryGrid}>
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.industryCard}>
                  <div className={styles.industryIllustration} data-variant={index % 3}>
                    <span aria-hidden="true" /><span aria-hidden="true" />
                    <Icon aria-hidden="true" />
                  </div>
                  <div className={styles.industryContent}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Link href="/industries">Learn More <ChevronRight aria-hidden="true" /></Link>
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
            eyebrow="Why Spark AI"
            title="From an AI server to knowledge infrastructure."
            body="Traditional servers provide compute. Spark AI Appliance connects compute with memory, retrieval, governance and the full knowledge lifecycle."
          />
          <AnimatedBlock className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div>Capability</div>
              <div><CircleX aria-hidden="true" /> Traditional AI Server</div>
              <div><Sparkles aria-hidden="true" /> {applianceName}</div>
            </div>
            {comparisonRows.map(([feature, traditional, spark]) => (
              <div key={feature} className={styles.comparisonRow}>
                <h3>{feature}</h3>
                <p><CircleX aria-hidden="true" />{traditional}</p>
                <p><Check aria-hidden="true" />{spark}</p>
              </div>
            ))}
          </AnimatedBlock>
        </Container>
      </section>
    </main>
  );
}
