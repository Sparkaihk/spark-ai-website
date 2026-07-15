import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import styles from "./spark-design-system.module.css";

type Tone = "blue" | "cyan" | "neutral";

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function CTAButton({
  className,
  children,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a className={cx(styles.button, styles[variant], className)} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <header className={cx(styles.sectionHeader, align === "center" && styles.center)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className={styles.sectionDescription}>{description}</p> : null}
    </header>
  );
}

export function GlassPanel({ className, children, tone = "neutral", ...props }: HTMLAttributes<HTMLDivElement> & { tone?: Tone }) {
  return (
    <div className={cx(styles.glassPanel, styles[`tone-${tone}`], className)} {...props}>
      {children}
    </div>
  );
}

export function GlowLine({ vertical = false }: { vertical?: boolean }) {
  return <span className={cx(styles.glowLine, vertical && styles.vertical)} aria-hidden="true" />;
}

export function MetricCard({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return (
    <GlassPanel className={styles.metricCard}>
      <strong>{value}</strong>
      <span>{label}</span>
      {detail ? <small>{detail}</small> : null}
    </GlassPanel>
  );
}

export function EnterpriseCard({ icon, title, description, href = "/contact" }: { icon?: ReactNode; title: string; description: string; href?: string }) {
  return (
    <GlassPanel className={styles.enterpriseCard}>
      <div className={styles.iconBox}>{icon ?? <SparkIcon />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>
        Learn more <span aria-hidden="true">→</span>
      </a>
    </GlassPanel>
  );
}

export function IndustryCard(props: { industry: string; outcome: string; href?: string }) {
  return (
    <article className={styles.industryCard}>
      <span className={styles.industryMark} aria-hidden="true">
        <SparkIcon />
      </span>
      <div>
        <h3>{props.industry}</h3>
        <p>{props.outcome}</p>
      </div>
      <a href={props.href ?? "/solutions"} aria-label={`Explore ${props.industry}`}>
        →
      </a>
    </article>
  );
}

export function FeatureGrid({ children, columns = 3 }: { children: ReactNode; columns?: 2 | 3 | 4 }) {
  return <div className={styles.featureGrid} style={{ "--columns": columns } as React.CSSProperties}>{children}</div>;
}

export function AnimatedDataFlow() {
  const paths = [
    "M8 32 C92 32 88 88 176 88 S260 42 352 42",
    "M8 76 C80 76 104 56 176 56 S278 92 352 92",
    "M8 116 C92 116 104 86 176 86 S280 122 352 122",
  ];
  return (
    <svg className={styles.dataFlow} viewBox="0 0 360 132" role="img" aria-label="Governed enterprise data flow">
      {paths.map((path, index) => (
        <g key={path}>
          <path id={`spark-flow-${index}`} d={path} />
          <circle r="3.5">
            <animateMotion dur={`${4.6 + index * 0.8}s`} begin={`${index * -1.1}s`} repeatCount="indefinite">
              <mpath href={`#spark-flow-${index}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

export function KnowledgeFlow() {
  return (
    <GlassPanel className={styles.knowledgeFlow} tone="cyan">
      <div className={styles.flowNode}>
        <span>01</span>
        <strong>Enterprise Data</strong>
        <small>Documents · Images · Records</small>
      </div>
      <AnimatedDataFlow />
      <div className={styles.flowCore}>
        <SparkIcon />
        <strong>Spark AI</strong>
        <small>Governed Intelligence</small>
      </div>
      <AnimatedDataFlow />
      <div className={styles.flowNode}>
        <span>03</span>
        <strong>AI Outcomes</strong>
        <small>Retrieval · Agents · Archive</small>
      </div>
    </GlassPanel>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className={styles.architecture}>
      {["Experience Layer", "Intelligence & Agent Runtime", "Governance Control Plane", "AI Compute + Intelligent Storage"].map((layer, index) => (
        <GlassPanel key={layer} className={styles.architectureLayer} tone={index === 3 ? "blue" : "neutral"}>
          <span>0{index + 1}</span>
          <strong>{layer}</strong>
          <small>{index === 0 ? "Search · Copilots · Applications" : index === 1 ? "Enterprise retrieval · Models · Agents" : index === 2 ? "Policy · Lineage · Access · Audit" : "Accelerated inference · Tiering · Long-term archive"}</small>
        </GlassPanel>
      ))}
    </div>
  );
}

export function ProductShowcase({
  title = "Spark AI Appliance™",
  description = "One governed platform for AI compute, intelligent storage, enterprise knowledge, and long-term archival.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <GlassPanel className={styles.productShowcase} tone="blue">
      <div className={styles.productCopy}>
        <p className={styles.eyebrow}>FLAGSHIP KNOWLEDGE INFRASTRUCTURE</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <CTAButton href="/products/spark-ai-appliance">Explore the platform</CTAButton>
      </div>
      <div className={styles.productVisual} aria-label="Spark AI Appliance architecture illustration">
        <KnowledgeFlow />
      </div>
    </GlassPanel>
  );
}

export function HeroSection({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.heroActions}>
            <CTAButton href="#components">Explore components</CTAButton>
            <CTAButton href="#tokens" variant="secondary">
              View foundations
            </CTAButton>
          </div>
        </div>
        <div className={styles.heroVisual}>{children ?? <ArchitectureDiagram />}</div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Spark AI</strong>
        <p>Knowledge Infrastructure for the AI Era</p>
      </div>
      <nav aria-label="Design system footer">
        <a href="#tokens">Foundations</a>
        <a href="#components">Components</a>
        <a href="#motion">Motion</a>
      </nav>
      <small>Built for clarity, trust and enterprise scale.</small>
    </footer>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.6 5.6 3.8 8.8 9.5 9.5C15.8 12.2 12.6 15.4 12 22c-.6-6.6-3.8-9.8-9.5-10.5C8.2 10.8 11.4 7.6 12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
