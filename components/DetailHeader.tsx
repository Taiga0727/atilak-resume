import { BackToResume } from "./BackToResume";
import styles from "./DetailHeader.module.css";

export function DetailHeader({
  title,
  org,
  dateLabel,
  badge,
}: {
  title: string;
  org: string;
  dateLabel: string;
  badge?: string;
}) {
  return (
    <header className={styles.header}>
      <BackToResume />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.org}>{org}</p>
      <div className={styles.metaRow}>
        <span className={styles.date}>{dateLabel}</span>
        {badge && <span className={styles.tag}>{badge}</span>}
      </div>
    </header>
  );
}
