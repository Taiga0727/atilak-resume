import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Sheet } from "@/components/Sheet";
import { DetailHeader } from "@/components/DetailHeader";
import { DetailBody } from "@/components/DetailBody";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [{ slug: profile.publication.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== profile.publication.slug) return {};
  return { title: `${profile.publication.title} — ${profile.identity.name}` };
}

export default async function PublicationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = profile.publication;
  if (slug !== entry.slug || !entry.detail) notFound();

  return (
    <Sheet>
      <DetailHeader title={entry.title} org={entry.org} dateLabel={entry.dateLabel} badge={entry.badge} />
      <DetailBody detail={entry.detail} />
    </Sheet>
  );
}
