export interface Stat {
  label: string;
  value: string;
  accent?: boolean;
}

export interface MetricRow {
  metric: string;
  before: string;
  after: string;
}

export interface DetailSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ExternalLink {
  label: string;
  href: string;
}

export type EntryKind = "publication" | "experience" | "project";

export interface WorkEntryDetail {
  stats?: Stat[];
  metricsTable?: MetricRow[];
  sections: DetailSection[];
  links?: ExternalLink[];
}

export interface WorkEntry {
  kind: EntryKind;
  slug: string;
  title: string;
  org: string;
  dateLabel: string;
  badge?: string;
  /** Always-visible one-line proof point, shown on the home page even once linked. */
  homeProofLine: string;
  /** 0-2 short bullets max, for the one-pager. */
  homeBullets?: string[];
  /** Whether this entry has a dedicated detail page. */
  linked: boolean;
  detail?: WorkEntryDetail;
}

export interface EducationEntry {
  title: string;
  org: string;
  dateLabel: string;
  note?: string;
}

export interface SkillGroupData {
  category: string;
  items: string[];
}

export interface AwardEntry {
  year: string;
  desc: string;
  linkKind?: EntryKind;
  linkSlug?: string;
}

export interface Profile {
  identity: {
    name: string;
    tagline: string;
    summary: string;
  };
  contact: {
    email: string;
    github: string;
    githubUrl: string;
    linkedin: string;
    linkedinUrl: string;
    phone: string;
    location: string;
  };
  publication: WorkEntry;
  experience: WorkEntry[];
  projects: WorkEntry[];
  education: EducationEntry[];
  skills: SkillGroupData[];
  awards: AwardEntry[];
}

export function hrefFor(kind: EntryKind, slug: string): string {
  const base = kind === "publication" ? "/publication" : kind === "experience" ? "/experience" : "/projects";
  return `${base}/${slug}`;
}
