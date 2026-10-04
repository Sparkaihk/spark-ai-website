"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/design-system/container";
import { useI18n } from "@/i18n/i18n-provider";
import data from "@/lib/geo-faq.json";

type Copy = { en: string; zh: string; zhTW: string };
const questionId = (id: number) => `faq-${String(id).padStart(3, "0")}`;

export function GeoFaq() {
  const { locale } = useI18n();
  const language = locale === "en" ? "en" : locale === "zh-TW" ? "zhTW" : "zh";
  const text = (copy: Copy) => copy[language];
  useEffect(() => {
    const reveal = () => {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://sparkai.hk/knowledge/faq#faq",
    url: "https://sparkai.hk/knowledge/faq",
    name: text(data.ui.title),
    inLanguage: locale,
    dateModified: data.updated,
    mainEntity: data.items.map((item) => ({
      "@type": "Question",
      "@id": `https://sparkai.hk/knowledge/faq#${questionId(item.id)}`,
      name: text(item.question),
      acceptedAnswer: { "@type": "Answer", text: text(item.answer) },
    })),
  };
  return (
    <main className="bg-[#f7f9fc] pt-24 text-slate-950">
      <script id="geo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="hero-shell py-12 sm:py-20">
        <Container size="lg">
          <p className="premium-eyebrow">SPARK AI · FAQ</p>
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">{text(data.ui.title)}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{text(data.ui.intro)}</p>
          <p className="mt-5 text-sm text-slate-500">{text(data.ui.updated)} · 100 {language === "en" ? "answers" : language === "zhTW" ? "條問答" : "条问答"}</p>
          <p className="mt-8 max-w-4xl border-l-2 border-blue-200 pl-4 text-sm leading-7 text-slate-600">{text(data.ui.note)}</p>
        </Container>
      </section>
      <section className="border-y border-blue-100 bg-white py-10">
        <Container size="lg">
          <h2 className="text-xl font-semibold">{text(data.ui.topics)}</h2>
          <nav aria-label={text(data.ui.topics)} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.categories.map((group, index) => (
              <a key={group.id} href={`#${group.id}`} className="flex items-center gap-3 rounded-xl border border-blue-100 px-4 py-3 text-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                <span className="font-mono text-blue-600">{String(index * 10 + 1).padStart(2, "0")}–{(index + 1) * 10}</span>
                <span>{text(group.title)}</span>
              </a>
            ))}
          </nav>
        </Container>
      </section>
      <Container size="lg" className="py-12 sm:py-16">
        <div className="space-y-14">
          {data.categories.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-28" aria-labelledby={`${group.id}-title`}>
              <h2 id={`${group.id}-title`} className="mb-5 text-2xl font-semibold sm:text-3xl">{text(group.title)}</h2>
              <div className="space-y-3">
                {data.items.filter((item) => item.category === group.id).map((item, index) => (
                  <details key={item.id} id={questionId(item.id)} open={index === 0} className="group scroll-mt-28 rounded-2xl border border-blue-100 bg-white">
                    <summary className="flex cursor-pointer list-none items-start gap-3 rounded-2xl p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:p-6 [&::-webkit-details-marker]:hidden">
                      <span className="mt-0.5 shrink-0 font-mono text-sm text-blue-600">{String(item.id).padStart(3, "0")}</span>
                      <h3 className="min-w-0 flex-1 break-words text-base font-semibold leading-7 sm:text-lg">{text(item.question)}</h3>
                      <ChevronDown aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-blue-600 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-blue-50 px-5 pb-6 pt-5 sm:px-6">
                      {language !== "en" && <p lang="en" className="mb-3 text-sm leading-6 text-slate-500">{item.question.en}</p>}
                      <p className="break-words leading-8 text-slate-700">{text(item.answer)}</p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                        <Link href={item.related} className="inline-flex items-center gap-1 font-medium text-blue-700 hover:underline">{text(data.ui.related)}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                        <a href={`#${questionId(item.id)}`} aria-label={`${language === "en" ? "Link to question" : language === "zhTW" ? "題目連結" : "题目链接"} ${item.id}`} className="text-slate-500 hover:underline">#{questionId(item.id)}</a>
                      </div>
                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <p className="text-xs font-semibold text-slate-500">{text(data.ui.sources)}</p>
                        <ul className="mt-2 space-y-2">
                          {item.sources.map((key) => {
                            const source = data.sources[key as keyof typeof data.sources];
                            return <li key={key}><a href={source.url} className="break-words text-sm leading-6 text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700">{source.title}</a></li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      <section className="bg-[#eef4fa] py-12">
        <Container size="lg">
          <h2 className="text-2xl font-semibold">{text(data.ui.contact)}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">{text(data.ui.contactBody)}</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">{text(data.ui.contact)}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </Container>
      </section>
    </main>
  );
}
