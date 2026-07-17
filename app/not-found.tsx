import Link from "next/link";

import { Container } from "@/components/design-system/container";
import { T } from "@/components/site/translated-text";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[linear-gradient(180deg,#f8fbff,#eef7ff)] py-24">
      <Container><div className="mx-auto max-w-2xl text-center"><p className="premium-eyebrow mx-auto">404</p><T id="notFound.title" as="h1" className="mt-6 text-4xl font-semibold text-slate-950 sm:text-6xl" /><T id="notFound.description" as="p" className="mt-6 text-lg leading-8 text-slate-600" /><Button asChild variant="spark" size="lg" className="mt-8 rounded-[18px]"><Link href="/"><T id="notFound.cta" /></Link></Button></div></Container>
    </main>
  );
}
