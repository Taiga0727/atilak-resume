import type { Stat } from "@/content/types";
import styles from "./StatRow.module.css";

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.statRow}>
      {stats.map((stat) => (
        <div className={styles.stat} key={stat.label}>
          <span className={styles.k}>{stat.label}</span>
          <span className={`${styles.v} ${stat.accent ? styles.accent : ""}`}>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
