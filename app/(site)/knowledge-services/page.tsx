import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Archive, BookOpenCheck, Database, FileSearch, Gauge, LockKeyhole, Workflow } from "lucide-react";
import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";

export const metadata: Metadata = {
  title: "AI Knowledge Infrastructure Operator | Spark AI",
  description: "Spark AI Technology Limited: an AI Knowledge Infrastructure Operator designing governed, searchable, callable and metered knowledge services from dormant enterprise data.",
  alternates: { canonical: "/knowledge-services" },
};

const stages = [
  { icon: Archive, zh: "接入与保全", en: "Ingest & preserve", z: "接入现有文件、对象与归档系统。原始数据尽量就地保存，先完成校验、目录和权属核实。", e: "Connect file, object and archive systems. Preserve originals in place where possible; verify integrity, catalogues and rights." },
  { icon: LockKeyhole, zh: "治理与授权", en: "Govern & authorize", z: "建立租户、数据分类、保留期限、脱敏、访问策略和可审计操作记录。", e: "Define tenant boundaries, classification, retention, redaction, access policies and auditable activity." },
  { icon: FileSearch, zh: "解析与索引", en: "Parse & index", z: "提取授权内容，建立全文、向量与元数据混合索引。保留原文出处、版本和更新链路。", e: "Extract authorized content into hybrid keyword, vector and metadata indexes with source, version and update lineage." },
  { icon: BookOpenCheck, zh: "检索与知识服务", en: "Retrieve & serve", z: "通过权限感知 RAG 与知识 API，为员工和业务智能体提供带证据出处的回答。", e: "Serve cited answers through permission-aware RAG and knowledge APIs for employees and agents." },
  { icon: Workflow, zh: "安全调用", en: "Invoke securely", z: "按最小权限开放 API、工具调用及审批流程；冷原文恢复按策略执行。", e: "Expose APIs and tools with least privilege, approvals and policy-controlled cold-original restoration." },
  { icon: Gauge, zh: "计量与结算", en: "Meter & bill", z: "分别记录占用容量、处理量、索引量、有效查询和 API 用量；提供可核验账单。", e: "Track retained capacity, processing, indexed volume, valid queries and API usage separately for verifiable billing." },
];

const offers = [
  {zh:"DLSM 治理托管",en:"DLSM Governance",z:"数据盘点、策略管理、审计及生命周期运维；可按基础服务费与受管容量协商计价。",e:"Discovery, policy, audit and lifecycle operations; proposed base and managed-capacity fees."},
  {zh:"冷数据知识化",en:"Archive-to-Knowledge",z:"按数据集或加工量提供解析、索引及知识质量验证；原始数据无需默认整体迁移。",e:"Parsing, indexing and quality validation by dataset or processing volume, without mandatory full migration."},
  {zh:"企业知识 API",en:"Enterprise Knowledge API",z:"授权检索、证据引用、Agent 接口、监控及持续运维；可按套餐与有效调用量计价。",e:"Authorized search, citations, agent interfaces, monitoring and managed service; proposed plan and validated-usage fees."},
];

export default function KnowledgeServicesPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-20 sm:py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="premium-eyebrow"><LocalizedText zh="Spark AI · AI 知识基础设施运营商" en="Spark AI · AI Knowledge Infrastructure Operator" /></p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
              <LocalizedText zh="让沉睡的冷数据，成为可运营的企业知识服务" en="Turn dormant data into operational knowledge services" />
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-600">
              <LocalizedText zh="光慧科技有限公司（Spark AI Technology Limited）致力于将机构长期沉淀的数据转化为可治理、可检索、可调用、可计量的 AI 知识服务。我们以长期保全、DLSM 数据治理、企业检索和安全服务接口构建这一运营体系。" en="Spark AI Technology Limited is an AI Knowledge Infrastructure Operator focused on converting long-held institutional data into governed, searchable, callable and metered AI knowledge services through preservation, DLSM governance, enterprise retrieval and secure APIs." />
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"><LocalizedText zh="洽谈企业试点" en="Discuss a pilot" /><ArrowRight className="size-4" /></Link>
              <Link href="#delivery" className="inline-flex items-center rounded-full border border-sky-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-sky-50"><LocalizedText zh="了解交付路径" en="Explore delivery" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="delivery" className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl"><LocalizedText zh="从冷数据到可计费知识服务：六个可验收环节" en="Six accountable steps from cold data to billable knowledge" /></h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600"><LocalizedText zh="不把一个技术演示等同于生产级能力。每个环节均须交付证据、可审计日志和约定的验收结果。" en="A technical demonstration is not production readiness. Every stage requires evidence, audit trails and agreed acceptance results." /></p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stages.map((item, i) => { const Icon = item.icon; return (
              <article key={item.en} className="rounded-[24px] border border-sky-100 bg-[#f8fbff] p-6 shadow-sm">
                <div className="flex items-center justify-between"><Icon className="size-7 text-blue-600" aria-hidden="true" /><span className="text-sm font-semibold text-sky-700">{String(i + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-6 text-xl font-semibold"><LocalizedText zh={item.zh} en={item.en} /></h3>
                <p className="mt-3 text-sm leading-7 text-slate-600"><LocalizedText zh={item.z} en={item.e} /></p>
              </article>
            );})}
          </div>
        </Container>
      </section>

      <section className="bg-[#eef5fc] py-20">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl"><LocalizedText zh="三种运营服务，而不只是设备销售" en="Three managed services, not only hardware sales" /></h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offers.map((offer) => <article key={offer.en} className="rounded-[24px] border border-sky-100 bg-white p-7 shadow-sm"><Database className="size-6 text-blue-600" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold"><LocalizedText zh={offer.zh} en={offer.en} /></h3><p className="mt-4 text-sm leading-7 text-slate-600"><LocalizedText zh={offer.z} en={offer.e} /></p></article>)}
          </div>
          <p className="mt-7 text-sm leading-7 text-slate-600"><LocalizedText zh="收费方式为商业方案示例，正式价格、SLA、数据处理范围及责任边界以客户合同为准。计费必须有租户级证据账本，避免把重复处理或失败调用误计入费用。" en="Pricing models are proposals, not published tariffs. Actual prices, SLAs, processing scopes and liabilities depend on signed contracts. Metering must be tenant-auditable and avoid charging for duplicate processing or failed calls." /></p>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl"><LocalizedText zh="试点与生产上线门槛" en="Pilot and production gates" /></h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {z:"0–90天：验证",e:"0–90 days: validate",zd:"真实数据接入、授权与混合检索，形成可复现 PoC 报告。",ed:"Real-data ingestion, authorization and hybrid retrieval with a reproducible PoC report."},
              {z:"4–6个月：计费试点",e:"Months 4–6: paid pilot",zd:"完成隔离、日志、计量、对账及客户确认的服务报告。",ed:"Implement isolation, logs, metering, reconciliation and customer-accepted service reports."},
              {z:"7–18个月：复制扩展",e:"Months 7–18: scale",zd:"标准化行业交付与成本模型，按实际需求扩大服务节点。",ed:"Standardize industry delivery and unit economics; grow service nodes based on verified demand."},
            ].map(s=><article key={s.e} className="rounded-[22px] border border-sky-100 p-6"><h3 className="font-semibold"><LocalizedText zh={s.z} en={s.e} /></h3><p className="mt-3 text-sm leading-7 text-slate-600"><LocalizedText zh={s.zd} en={s.ed} /></p></article>)}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-600"><LocalizedText zh="以上为研发与商业落地规划，并不代表产品已经全面商用或已有特定数量的付费客户。敏感数据仅在取得适当授权、履行适用法规及安全审查后处理。" en="This roadmap describes planned delivery, not proof of general availability or a stated paying-customer count. Sensitive data is processed only with proper authorization and applicable legal and security review." /></p>
        </Container>
      </section>
      <section className="bg-[#eef5fc] py-16"><Container><p className="text-sm font-semibold text-primary"><LocalizedText zh="参考研究" en="Research context" /></p><h2 className="mt-3 text-2xl font-semibold"><LocalizedText zh="先进存力与数据知识化" en="Advanced data storage and knowledge enablement" /></h2><p className="mt-4 max-w-4xl leading-8 text-slate-600"><LocalizedText zh="本业务设计参考中国信通院与算力产业发展方阵《2026存力发展报告》公开发布解读中关于数据知识化、记忆持久化、数据编织和安全可靠的技术趋势。报告是行业研究，并非对 Spark AI 产品或服务的认证、合作或背书。" en="This business design is informed by public release materials for the CAICT and Computing Power Industry Development Alliance 2026 Storage Development Report, especially data-to-knowledge, persistent memory, data fabric and security. The report does not certify, partner with or endorse Spark AI." /></p><a className="mt-5 inline-flex text-sm font-semibold text-blue-700 underline underline-offset-4" href="https://www.jingjiribao.cn/static/detail.jsp?id=685977" target="_blank" rel="noopener noreferrer"><LocalizedText zh="查看报告公开解读" en="Read public report coverage" /></a></Container></section>
    </main>
  );
}
