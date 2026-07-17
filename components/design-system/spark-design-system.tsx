import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { LocalizedText } from "@/components/site/localized-text";
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
  eyebrow?: ReactNode;
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

export function MetricCard({ value, label, detail }: { value: string; label: ReactNode; detail?: ReactNode }) {
  return (
    <GlassPanel className={styles.metricCard}>
      <strong>{value}</strong>
      <span>{label}</span>
      {detail ? <small>{detail}</small> : null}
    </GlassPanel>
  );
}

export function EnterpriseCard({ icon, title, description, href = "/contact" }: { icon?: ReactNode; title: ReactNode; description: ReactNode; href?: string }) {
  return (
    <GlassPanel className={styles.enterpriseCard}>
      <div className={styles.iconBox}>{icon ?? <SparkIcon />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>
        <LocalizedText en="Learn more" zh="了解更多" /> <span aria-hidden="true">→</span>
      </a>
    </GlassPanel>
  );
}

export function IndustryCard(props: { industry: ReactNode; outcome: ReactNode; href?: string; ariaLabel: { en: string; zh: string } }) {
  return (
    <article className={styles.industryCard}>
      <span className={styles.industryMark} aria-hidden="true">
        <SparkIcon />
      </span>
      <div>
        <h3>{props.industry}</h3>
        <p>{props.outcome}</p>
      </div>
      <a href={props.href ?? "/solutions"}>
        <span className="sr-only"><LocalizedText {...props.ariaLabel} /></span>→
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
    <svg className={styles.dataFlow} viewBox="0 0 360 132" role="img">
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
        <strong><LocalizedText en="Enterprise Data" zh="企业数据" /></strong>
        <small><LocalizedText en="Documents · Images · Records" zh="文档 · 图像 · 记录" /></small>
      </div>
      <AnimatedDataFlow />
      <div className={styles.flowCore}>
        <SparkIcon />
        <strong>Spark AI</strong>
        <small><LocalizedText en="Governed Intelligence" zh="治理型智能" /></small>
      </div>
      <AnimatedDataFlow />
      <div className={styles.flowNode}>
        <span>03</span>
        <strong><LocalizedText en="AI Outcomes" zh="AI 成果" /></strong>
        <small><LocalizedText en="Retrieval · Agents · Archive" zh="检索 · 智能体 · 归档" /></small>
      </div>
    </GlassPanel>
  );
}

export function ArchitectureDiagram() {
  const layers = [
    { title: { en: "Experience Layer", zh: "体验层" }, detail: { en: "Search · Copilots · Applications", zh: "搜索 · 智能助手 · 应用" } },
    { title: { en: "Intelligence & Agent Runtime", zh: "智能与智能体运行层" }, detail: { en: "Enterprise retrieval · Models · Agents", zh: "企业检索 · 模型 · 智能体" } },
    { title: { en: "Governance Control Plane", zh: "治理控制平面" }, detail: { en: "Policy · Lineage · Access · Audit", zh: "策略 · 血缘 · 访问 · 审计" } },
    { title: { en: "AI Compute + Intelligent Storage", zh: "AI 算力 + 智能存储" }, detail: { en: "Accelerated inference · Tiering · Long-term archive", zh: "加速推理 · 分层 · 长期归档" } },
  ];
  return (
    <div className={styles.architecture}>
      {layers.map((layer, index) => (
        <GlassPanel key={layer.title.en} className={styles.architectureLayer} tone={index === 3 ? "blue" : "neutral"}>
          <span>0{index + 1}</span>
          <strong><LocalizedText {...layer.title} /></strong>
          <small><LocalizedText {...layer.detail} /></small>
        </GlassPanel>
      ))}
    </div>
  );
}

export function ProductShowcase({
  title = "Spark AI Appliance™",
  description,
}: {
  title?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <GlassPanel className={styles.productShowcase} tone="blue">
      <div className={styles.productCopy}>
        <p className={styles.eyebrow}><LocalizedText en="FLAGSHIP KNOWLEDGE INFRASTRUCTURE" zh="旗舰知识基础设施" /></p>
        <h3>{title}</h3>
        <p>{description ?? <LocalizedText en="One governed platform for AI compute, intelligent storage, enterprise knowledge, and long-term archival." zh="以统一治理平台整合 AI 算力、智能存储、企业知识与长期归档。" />}</p>
        <CTAButton href="/products/spark-ai-appliance"><LocalizedText en="Explore the platform" zh="了解平台" /></CTAButton>
      </div>
      <div className={styles.productVisual}>
        <KnowledgeFlow />
      </div>
    </GlassPanel>
  );
}

export function HeroSection({ eyebrow, title, description, children }: { eyebrow: ReactNode; title: ReactNode; description: ReactNode; children?: ReactNode }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.heroActions}>
            <CTAButton href="#components"><LocalizedText en="Explore components" zh="查看组件" /></CTAButton>
            <CTAButton href="#tokens" variant="secondary">
              <LocalizedText en="View foundations" zh="查看设计基础" />
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
        <p><LocalizedText en="Knowledge Infrastructure for the AI Era" zh="构建 AI 时代的知识基础设施" /></p>
      </div>
      <nav>
        <a href="#tokens"><LocalizedText en="Foundations" zh="设计基础" /></a>
        <a href="#components"><LocalizedText en="Components" zh="组件" /></a>
        <a href="#motion"><LocalizedText en="Motion" zh="动效" /></a>
      </nav>
      <small><LocalizedText en="Built for clarity, trust and enterprise scale." zh="为清晰表达、可信体验与企业级规模而构建。" /></small>
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
