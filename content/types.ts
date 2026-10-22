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

export interface FlowStep {
  label: string;
  /** Second line, shown on the case-study pages only. */
  note?: string;
}

export interface DetailSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  /** Pipeline diagram drawn after the text of this section. */
  flow?: FlowStep[];
}

export interface ExternalLink {
  label: string;
  href: string;
}

export type EntryKind = "publication" | "experience" | "project";

export interface WorkEntryDetail {
  stats?: Stat[];
  metricsTable?: MetricRow[];
  /** Draw before/after bars next to the metrics table. Off unless the figures are settled. */
  metricBars?: boolean;
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
  /** Always-visible one-line proof point, shown on the home page when there are no homeStats. */
  homeProofLine: string;
  /** Proof points as metric chips; replaces the proof line on the home page. */
  homeStats?: Stat[];
  /** 0-2 short bullets max, for the one-pager. */
  homeBullets?: string[];
  /** Pipeline in 4-5 short labels, drawn as a strip on screen (hidden in print). */
  homeFlow?: string[];
  /** Tools and methods, shown as small chips. */
  stack?: string[];
  /** Outbound links on the one-pager (paper, code). */
  links?: ExternalLink[];
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
  /** Four headline numbers or facts under the header (screen only). */
  highlights: Stat[];
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
