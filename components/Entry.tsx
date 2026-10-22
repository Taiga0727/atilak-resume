import Link from "next/link";
import type { WorkEntry } from "@/content/types";
import { hrefFor } from "@/content/types";
import { Chips } from "./Chips";
import { Flow } from "./Flow";
import { StatChips } from "./StatChips";
import styles from "./Entry.module.css";

const printableUrl = (href: string) => href.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function Entry({ entry }: { entry: WorkEntry }) {
  const caseStudy = hrefFor(entry.kind, entry.slug);
  const title = entry.linked ? (
    <Link href={caseStudy} className={styles.titleLink}>
      {entry.title}
    </Link>
  ) : (
    entry.title
  );
  const hasStack = Boolean(entry.stack && entry.stack.length > 0);
  const hasLinks = Boolean(entry.links && entry.links.length > 0) || entry.linked;

  return (
    <div className={styles.entry}>
      <div className={styles.entryHead}>
        <h3 className={styles.entryTitle}>{title}</h3>
        <span className={styles.entryDate}>{entry.dateLabel}</span>
      </div>
      <p className={styles.entryOrg}>{entry.org}</p>
      <div className={styles.meta}>
        {entry.badge && <span className={styles.tag}>{entry.badge}</span>}
        {entry.homeStats ? (
          <StatChips stats={entry.homeStats} />
        ) : (
          <p className={styles.proofLine}>{entry.homeProofLine}</p>
        )}
      </div>
      {entry.homeBullets && entry.homeBullets.length > 0 && (
        <ul className={styles.bullets}>
          {entry.homeBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {entry.homeFlow && (
        <div className={styles.flow}>
          <Flow
            steps={entry.homeFlow.map((label) => ({ label }))}
            label={`${entry.title}: pipeline`}
            compact
          />
        </div>
      )}
      {(hasStack || hasLinks) && (
        <div className={styles.footer}>
          {hasStack && entry.stack && <Chips items={entry.stack} label="Tools and methods" />}
          {hasLinks && (
            <p className={styles.links}>
              {entry.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-url={printableUrl(link.href)}
                >
                  {link.label}
                  <span className={styles.arrow} aria-hidden="true">
                    {" "}
                    ↗
                  </span>
                </a>
              ))}
              {entry.linked && (
                <Link href={caseStudy} className={styles.caseStudyCue}>
                  Full case study →
                </Link>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
