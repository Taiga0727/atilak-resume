import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Sheet } from "@/components/Sheet";
import { DetailHeader } from "@/components/DetailHeader";
import { DetailBody } from "@/components/DetailBody";

type Params = { slug: string };

const linkedEntries = profile.projects.filter((entry) => entry.linked && entry.detail);

export function generateStaticParams(): Params[] {
  return linkedEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = linkedEntries.find((item) => item.slug === slug);
  if (!entry) return {};
  return { title: `${entry.title} — ${profile.identity.name}` };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = linkedEntries.find((item) => item.slug === slug);
  if (!entry || !entry.detail) notFound();

  return (
    <Sheet>
      <DetailHeader title={entry.title} org={entry.org} dateLabel={entry.dateLabel} badge={entry.badge} />
      <DetailBody detail={entry.detail} />
    </Sheet>
  );
}
