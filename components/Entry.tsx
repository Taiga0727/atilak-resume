import Link from "next/link";
import type { WorkEntry } from "@/content/types";
import { hrefFor } from "@/content/types";
import styles from "./Entry.module.css";

export function Entry({ entry }: { entry: WorkEntry }) {
  const title = entry.linked ? (
    <Link href={hrefFor(entry.kind, entry.slug)} className={styles.titleLink}>
      {entry.title}
    </Link>
  ) : (
    entry.title
  );

  return (
    <div className={styles.entry}>
      <div className={styles.entryHead}>
        <h3 className={styles.entryTitle}>{title}</h3>
        <span className={styles.entryDate}>{entry.dateLabel}</span>
      </div>
      <p className={styles.entryOrg}>{entry.org}</p>
      {entry.badge && <span className={styles.tag}>{entry.badge}</span>}
      <p className={styles.proofLine}>{entry.homeProofLine}</p>
      {entry.homeBullets && entry.homeBullets.length > 0 && (
        <ul className={styles.bullets}>
          {entry.homeBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {entry.linked && (
        <Link href={hrefFor(entry.kind, entry.slug)} className={styles.caseStudyCue}>
          Full case study →
        </Link>
      )}
    </div>
  );
}
