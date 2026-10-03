import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, FileSearch, Layers3, ShieldCheck, Waypoints } from "lucide-react";

import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Knowledge Infrastructure Appliance — Category Definition | Spark AI",
  description:
    "A reference definition and architecture for the Knowledge Infrastructure Appliance category: enterprise AI compute, governed retrieval, persistent memory, knowledge services and tiered storage in one infrastructure system.",
  alternates: { canonical: "/knowledge/knowledge-infrastructure-appliance" },
  openGraph: {
    title: "Knowledge Infrastructure Appliance — Category Definition",
    description:
      "Reference definition and architecture for enterprise knowledge infrastructure in the AI era.",
    url: "/knowledge/knowledge-infrastructure-appliance",
    type: "article",
  },
};

const definition = {
  en: "A Knowledge Infrastructure Appliance is an integrated enterprise infrastructure system designed to turn governed organizational data into persistent, retrievable and reusable knowledge for AI applications and agents. It combines AI compute, enterprise retrieval, knowledge and memory services, governance controls, and tiered data storage as coordinated infrastructure.",
  zh: "Knowledge Infrastructure Appliance（知识基础设施一体机）是一类面向企业的集成式基础设施系统，旨在将经过治理的组织数据转化为可持续保存、可检索、可复用的 AI 知识。它把 AI 算力、企业检索、知识与记忆服务、治理控制以及分层数据存储作为协同基础设施进行整合。",
};

const layers = [
  { icon: BrainCircuit, en: "AI Applications & Agents", zh: "AI 应用与智能体", bodyEn: "Use governed enterprise context to support reasoning, workflows and automation.", bodyZh: "利用经过治理的企业上下文支持推理、工作流与自动化。" },
  { icon: FileSearch, en: "Retrieval & Knowledge Services", zh: "检索与知识服务", bodyEn: "Enterprise RAG, indexing and knowledge access connect models to authoritative sources.", bodyZh: "通过企业 RAG、索引与知识访问，将模型连接到可信来源。" },
  { icon: Waypoints, en: "Persistent AI Memory", zh: "持久化 AI 记忆", bodyEn: "Preserve institutional context and relationships beyond an individual model session.", bodyZh: "让机构上下文与知识关系超越单次模型会话持续存在。" },
  { icon: ShieldCheck, en: "Governance & Trust", zh: "治理与可信", bodyEn: "Permissions, provenance, retention, integrity and policy constrain knowledge access and movement.", bodyZh: "以权限、来源、保留、完整性与策略约束知识的访问和流动。" },
  { icon: Layers3, en: "Intelligent Data Placement", zh: "智能数据配置", bodyEn: "Place data across performance, capacity and archive tiers according to workload and policy.", bodyZh: "依据工作负载与治理策略，将数据配置到性能层、容量层与归档层。" },
  { icon: Database, en: "Durable Data Foundation", zh: "持久数据底座", bodyEn: "SSD, HDD, object and archival media provide durable foundations for enterprise knowledge.", bodyZh: "由 SSD、HDD、对象存储及归档介质构成企业知识的持久数据底座。" },
];

const comparisons = [
  ["AI server", "Primarily provides compute for model training or inference.", "Adds governed retrieval, persistent knowledge, memory and data lifecycle infrastructure."],
  ["RAG appliance", "Primarily focuses on retrieval pipelines and model grounding.", "Extends retrieval into governance, persistent memory and multi-tier data infrastructure."],
  ["NAS / storage appliance", "Primarily stores and serves files or data.", "Treats stored data as governed knowledge that can be discovered, retrieved and activated by AI."],
  ["Archive system", "Primarily optimizes long-term retention and preservation.", "Connects retained data back to active AI retrieval and knowledge workflows when required."],
];

const faqs = [
  {
    qEn: "Is a Knowledge Infrastructure Appliance the same as an AI server?",
    qZh: "Knowledge Infrastructure Appliance 与 AI 服务器相同吗？",
    aEn: "No. An AI server is principally a compute platform. A Knowledge Infrastructure Appliance is defined here as a broader infrastructure category combining compute with retrieval, persistent knowledge, governance and tiered storage.",
    aZh: "不同。AI 服务器主要是计算平台；这里定义的 Knowledge Infrastructure Appliance 是更广泛的基础设施类别，把计算与检索、持久知识、治理和分层存储整合起来。",
  },
  {
    qEn: "Why does enterprise AI need persistent knowledge infrastructure?",
    qZh: "为什么企业 AI 需要持久知识基础设施？",
    aEn: "Models and agent sessions are transient, while enterprise records, permissions, provenance and institutional context must persist. Knowledge infrastructure provides a governed layer between durable organizational data and AI consumption.",
    aZh: "模型与智能体会话具有暂态性，而企业记录、权限、来源信息及机构上下文需要长期存在。知识基础设施在持久组织数据与 AI 使用之间提供受治理的连接层。",
  },
  {
    qEn: "How does Spark AI relate to this category?",
    qZh: "Spark AI 与这一类别是什么关系？",
    aEn: "Spark AI uses Knowledge Infrastructure Appliance as the category framework for the Spark AI Appliance product architecture. Product capabilities and delivery configurations should be evaluated separately from this reference definition.",
    aZh: "Spark AI 以 Knowledge Infrastructure Appliance 作为 Spark AI Appliance 产品架构的类别框架。具体产品能力和交付配置应与本参考定义分别评估。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.qEn,
    acceptedAnswer: { "@type": "Answer", text: item.aEn },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Knowledge Infrastructure Appliance — Category Definition & Reference Architecture",
  description: metadata.description,
  author: { "@type": "Organization", name: "Spark AI Technology Limited", url: "https://sparkai.hk" },
  publisher: { "@type": "Organization", name: "Spark AI Technology Limited", url: "https://sparkai.hk" },
  mainEntityOfPage: "https://sparkai.hk/knowledge/knowledge-infrastructure-appliance",
  about: [
    { "@type": "Thing", name: "Knowledge Infrastructure Appliance" },
    { "@type": "Thing", name: "Enterprise AI" },
    { "@type": "Thing", name: "Retrieval-Augmented Generation" },
    { "@type": "Thing", name: "AI Memory" },
    { "@type": "Thing", name: "Tiered Storage" },
  ],
};

export default function KnowledgeInfrastructureAppliancePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="hero-shell py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <LocalizedText en="CATEGORY DEFINITION · REFERENCE ARCHITECTURE" zh="类别定义 · 参考架构" as="p" className="premium-eyebrow" />
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
              Knowledge Infrastructure Appliance
            </h1>
            <LocalizedText en="Enterprise knowledge infrastructure for the AI era" zh="面向 AI 时代的企业知识基础设施" as="p" className="mt-5 text-2xl font-medium text-slate-800" />
            <LocalizedText {...definition} as="p" className="mt-8 max-w-4xl text-lg leading-8 text-slate-600" />
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="spark"><Link href="/products/spark-ai-appliance">Spark AI Appliance <ArrowRight /></Link></Button>
              <Button asChild variant="outline"><Link href="/knowledge"><LocalizedText en="Knowledge Center" zh="知识中心" /></Link></Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <LocalizedText en="Reference architecture" zh="参考架构" as="p" className="premium-eyebrow" />
          <LocalizedText en="Six coordinated infrastructure layers" zh="六个协同基础设施层" as="h2" className="mt-4 text-3xl font-semibold sm:text-4xl" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {layers.map(({ icon: Icon, ...layer }) => (
              <article key={layer.en} className="premium-card p-6">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <LocalizedText en={layer.en} zh={layer.zh} as="h3" className="mt-5 text-xl font-semibold" />
                <LocalizedText en={layer.bodyEn} zh={layer.bodyZh} as="p" className="mt-3 text-[15px] leading-7 text-slate-600" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <LocalizedText en="Category boundaries" zh="类别边界" as="p" className="premium-eyebrow" />
          <LocalizedText en="What makes the category different" zh="这一类别与传统系统有何不同" as="h2" className="mt-4 text-3xl font-semibold sm:text-4xl" />
          <div className="mt-10 overflow-x-auto rounded-[28px] border border-blue-100">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-blue-50/70"><tr><th className="p-5">System</th><th className="p-5">Primary role</th><th className="p-5">Knowledge Infrastructure distinction</th></tr></thead>
              <tbody>
                {comparisons.map(([system, role, distinction]) => (
                  <tr key={system} className="border-t border-blue-100 align-top"><th className="p-5 font-semibold">{system}</th><td className="p-5 leading-7 text-slate-600">{role}</td><td className="p-5 leading-7 text-slate-600">{distinction}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="premium-section py-20">
        <Container>
          <div className="max-w-4xl">
            <LocalizedText en="Design principles" zh="设计原则" as="p" className="premium-eyebrow" />
            <LocalizedText en="From stored data to governed enterprise knowledge" zh="从存储数据走向受治理的企业知识" as="h2" className="mt-4 text-3xl font-semibold sm:text-4xl" />
            <LocalizedText
              en="The reference architecture treats enterprise data as a lifecycle rather than a single storage tier. Knowledge may be indexed, retrieved, verified, promoted for active workloads, retained for compliance, or moved toward archival tiers as activity changes. Placement decisions remain constrained by permissions, integrity, retention and recovery requirements."
              zh="该参考架构把企业数据视为完整生命周期，而不是单一存储层。知识可以被索引、检索、校验，在活跃工作负载中提升配置，也可以因合规要求长期保留，并随活度变化进入归档层。所有配置决策均受权限、完整性、保留规则与恢复要求约束。"
              as="p" className="mt-6 text-lg leading-8 text-slate-600"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <LocalizedText en="Frequently asked questions" zh="常见问题" as="h2" className="text-3xl font-semibold sm:text-4xl" />
          <div className="mt-10 grid gap-5">
            {faqs.map((item) => (
              <article key={item.qEn} className="premium-card p-6 sm:p-7">
                <LocalizedText en={item.qEn} zh={item.qZh} as="h3" className="text-xl font-semibold" />
                <LocalizedText en={item.aEn} zh={item.aZh} as="p" className="mt-4 leading-7 text-slate-600" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4fa] py-16">
        <Container>
          <LocalizedText en="Explore the implementation" zh="了解产品实现" as="h2" className="text-2xl font-semibold" />
          <LocalizedText en="See how Spark AI applies this reference framework to the Spark AI Appliance product architecture." zh="了解 Spark AI 如何把这一参考框架应用于 Spark AI Appliance 产品架构。" as="p" className="mt-3 text-slate-600" />
          <Button asChild variant="spark" className="mt-6"><Link href="/products/spark-ai-appliance">Spark AI Appliance <ArrowRight /></Link></Button>
        </Container>
      </section>
    </main>
  );
}
