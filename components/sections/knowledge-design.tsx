import Link from "next/link";
import { ArrowDown, ArrowRight, Archive, FileSearch, Layers3, ShieldCheck } from "lucide-react";
import { Container } from "@/components/design-system/container";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";
import type { TranslationKey } from "@/i18n/dictionary";

const heading = "text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl";
const paragraph = "text-base leading-8 text-slate-600";
const philosophies = [1, 2, 3] as const;
const technical = [
  { id: 1, icon: Layers3 }, { id: 2, icon: FileSearch },
  { id: 3, icon: ShieldCheck }, { id: 4, icon: Archive },
] as const;

export function KnowledgePositioning() {
  return <section id="positioning" className="bg-white py-16 sm:py-24">
    <Container>
      <div className="max-w-4xl">
        <T id="positioning.eyebrow" as="p" className="mb-5 text-sm font-semibold text-primary" />
        <T id="positioning.title" as="h2" className={heading} />
        <T id="positioning.body" as="p" className={`mt-7 ${paragraph}`} />
        <T id="positioning.product" as="p" className={`mt-5 ${paragraph}`} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild variant="spark" size="lg"><Link href="/products/spark-ai-appliance"><T id="positioning.productCta" /><ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/contact"><T id="positioning.contactCta" /></Link></Button>
        </div>
      </div>
    </Container>
  </section>;
}

export function KnowledgePhilosophy() {
  return <section id="knowledge-lifecycle" className="bg-[#eef4fa] py-16 sm:py-24">
    <Container>
      <div className="max-w-3xl"><T id="philosophy.title" as="h2" className={heading} /><T id="philosophy.intro" as="p" className={`mt-6 ${paragraph}`} /></div>
      <div className="mt-10 space-y-8">
        {philosophies.map((id) => <article key={id} className="grid gap-3 border-t border-sky-200 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-12">
          <T id={`philosophy.${id}.title`} as="h3" className="text-xl font-semibold leading-8 text-slate-950" />
          <T id={`philosophy.${id}.body`} as="p" className={paragraph} />
        </article>)}
      </div>
    </Container>
  </section>;
}

export function TechnicalDesign() {
  return <section id="technical-design" className="scroll-mt-28 bg-white py-16 sm:py-24">
    <Container>
      <div className="max-w-4xl"><T id="technical.title" as="h2" className={heading} /><T id="technical.intro" as="p" className={`mt-6 ${paragraph}`} /></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {technical.map(({id,icon:Icon}) => <article key={id} className="rounded-[28px] border border-sky-100 bg-[#f7faff] p-6 sm:p-8">
          <Icon aria-hidden="true" className="size-7 text-primary" />
          <T id={`technical.${id}.title`} as="h3" className="mt-5 text-2xl font-semibold leading-snug text-slate-950" />
          <T id="technical.approachLabel" as="h4" className="mt-6 font-semibold text-slate-900" />
          <T id={`technical.${id}.approach`} as="p" className={`mt-2 ${paragraph}`} />
          <T id="technical.valueLabel" as="h4" className="mt-5 font-semibold text-slate-900" />
          <T id={`technical.${id}.value`} as="p" className={`mt-2 ${paragraph}`} />
          {id === 1 ? <T id="technical.accessNote" as="p" className="mt-6 border-l-2 border-sky-500 pl-4 text-sm leading-7 text-slate-700" /> : null}
        </article>)}
      </div>
    </Container>
  </section>;
}

export function KnowledgeWorkflow() {
  const inputs: TranslationKey[] = ["workflow.ingest", "workflow.index", "workflow.query"];
  const branches = ["online", "cold", "insufficient"] as const;
  return <section id="knowledge-workflow" className="scroll-mt-28 bg-white py-16 sm:py-24">
    <Container>
      <div className="max-w-4xl"><T id="workflow.title" as="h2" className={heading} /><T id="workflow.intro" as="p" className={`mt-6 ${paragraph}`} /></div>
      <ol className="mx-auto mt-10 max-w-3xl space-y-3">
        {inputs.map((key,index) => <li key={key}><T id={key} as="p" className="rounded-2xl border border-sky-200 bg-sky-50 px-6 py-5 text-center font-semibold leading-7 text-slate-900" />{index < inputs.length-1 ? <ArrowDown aria-hidden="true" className="mx-auto mt-3 size-5 text-primary" /> : null}</li>)}
      </ol>
      <ArrowDown aria-hidden="true" className="mx-auto my-5 size-5 text-primary" />
      <div className="grid gap-5 lg:grid-cols-3">
        {branches.map((branch) => <article key={branch} className="rounded-2xl border border-sky-200 p-6">
          <T id={`workflow.${branch}.title`} as="h3" className="text-lg font-semibold text-primary" />
          <T id={`workflow.${branch}.body`} as="p" className={`mt-4 ${paragraph}`} />
        </article>)}
      </div>
      <T id="workflow.note" as="p" className="mt-7 max-w-4xl text-sm leading-7 text-slate-600" />
    </Container>
  </section>;
}

export function KnowledgeInvestor() {
  return <section id="product-value" className="bg-[#eef4fa] py-16 sm:py-24">
    <Container>
      <div className="max-w-4xl"><T id="investor.title" as="h2" className={heading} /><T id="investor.body" as="p" className={`mt-6 ${paragraph}`} /></div>
      <div className="mt-9 grid gap-8 md:grid-cols-2">
        <div><T id="investor.differentiationLabel" as="h3" className="text-lg font-semibold text-slate-950" /><T id="investor.differentiation" as="p" className={`mt-3 ${paragraph}`} /></div>
        <div><T id="investor.accumulationLabel" as="h3" className="text-lg font-semibold text-slate-950" /><T id="investor.accumulation" as="p" className={`mt-3 ${paragraph}`} /></div>
      </div>
      <Button asChild variant="spark" size="lg" className="mt-9"><Link href="/contact"><T id="investor.cta" /><ArrowRight aria-hidden="true" /></Link></Button>
    </Container>
  </section>;
}
