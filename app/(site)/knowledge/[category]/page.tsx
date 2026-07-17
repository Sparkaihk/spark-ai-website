import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, LockKeyhole, Radio } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/design-system/container";
import { LocalizedText } from "@/components/site/localized-text";
import { Button } from "@/components/ui/button";
import {
  getKnowledgeResource,
  isKnowledgeSectionSlug,
  knowledgeSections,
  knowledgeSectionSlugs,
} from "@/lib/knowledge-resources";

type KnowledgeSectionPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return knowledgeSectionSlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: KnowledgeSectionPageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isKnowledgeSectionSlug(category)) return {};

  const resource = getKnowledgeResource(category);
  return resource
    ? {
        title: `${resource.title.en} | Spark AI Knowledge Center`,
        description: resource.description.en,
      }
    : {};
}

export default async function KnowledgeSectionPage({ params }: KnowledgeSectionPageProps) {
  const { category } = await params;
  if (!isKnowledgeSectionSlug(category)) notFound();

  const resource = getKnowledgeResource(category);
  if (!resource) notFound();

  const section = knowledgeSections[category];
  const Icon = resource.icon;
  const isPublic = resource.access === "public";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9fc] pt-24 text-slate-950">
      <section className="hero-shell py-16 sm:py-20">
        <Container>
          <Link href="/knowledge" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <LocalizedText en="Knowledge Center" zh="知识中心" />
          </Link>
          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <Icon className="size-7 text-primary" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-600">
                {isPublic ? <Radio className="size-3.5 text-primary" aria-hidden="true" /> : <LockKeyhole className="size-3.5 text-primary" aria-hidden="true" />}
                <LocalizedText en={isPublic ? "Public library" : "Controlled access library"} zh={isPublic ? "公开资料库" : "受控资料库"} />
              </span>
            </div>
            <LocalizedText en={resource.title.en} zh={resource.title.zh} as="h1" className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl" />
            <LocalizedText en={resource.description.en} zh={resource.description.zh} as="p" className="mt-6 max-w-3xl text-lg leading-8 text-slate-600" />
          </div>
        </Container>
      </section>

      <section className="premium-section py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <div>
              <LocalizedText en="Library scope" zh="资料范围" as="p" className="premium-eyebrow" />
              <LocalizedText en={section.introduction.en} zh={section.introduction.zh} as="p" className="mt-5 max-w-3xl text-lg leading-8 text-slate-600" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {section.topics.map((topic) => (
                  <article key={topic.en} className="premium-card flex min-h-32 items-start gap-3 p-5">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <LocalizedText en={topic.en} zh={topic.zh} as="h2" className="font-semibold leading-7 text-slate-900" />
                  </article>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[28px] border border-blue-100 bg-white/75 p-6 shadow-sm sm:p-7">
              <LocalizedText en="Availability" zh="获取方式" as="h2" className="text-xl font-semibold" />
              <LocalizedText
                en={isPublic
                  ? "Public materials are released here after editorial and technical review. Some detailed supporting documents may require partner or customer access."
                  : "The index is public. Detailed specifications, deployment materials, and partner documentation are provided through a controlled review process."
                }
                zh={isPublic
                  ? "公开资料将在完成编辑与技术审核后于此发布；部分详细配套文件可能需要合作伙伴或客户权限。"
                  : "资料索引公开开放；详细规格、部署文件及合作伙伴资料须通过受控审核流程获取。"
                }
                as="p"
                className="mt-4 text-sm leading-7 text-slate-600"
              />
              <Button asChild variant="spark" className="mt-6 rounded-[16px]">
                <Link href={isPublic ? "/knowledge" : "/contact"}>
                  <LocalizedText en={isPublic ? "Browse Knowledge Center" : "Request Access"} zh={isPublic ? "浏览知识中心" : "申请访问"} />
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
