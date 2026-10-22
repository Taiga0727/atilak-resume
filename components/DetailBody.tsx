import type { WorkEntryDetail } from "@/content/types";
import { Flow } from "./Flow";
import { StatRow } from "./StatRow";
import { MetricsTable } from "./MetricsTable";
import styles from "./DetailBody.module.css";

export function DetailBody({ detail }: { detail: WorkEntryDetail }) {
  return (
    <div className={styles.body}>
      {detail.stats && <StatRow stats={detail.stats} />}
      {detail.metricsTable && <MetricsTable rows={detail.metricsTable} bars={detail.metricBars} />}

      {detail.sections.map((section) => (
        <section className={styles.section} key={section.heading ?? section.paragraphs[0]}>
          {section.heading && <h2 className={styles.heading}>{section.heading}</h2>}
          {section.paragraphs.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className={styles.bullets}>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {section.flow && <Flow steps={section.flow} label={section.heading ?? "Pipeline"} />}
        </section>
      ))}

      {detail.links && detail.links.length > 0 && (
        <div className={styles.links}>
          {detail.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
