import type { Stat } from "@/content/types";
import styles from "./StatChips.module.css";

export function StatChips({ stats }: { stats: Stat[] }) {
  return (
    <ul className={styles.stats}>
      {stats.map((stat) => (
        <li key={stat.label} className={stat.accent ? styles.accent : undefined}>
          <span className={styles.v}>{stat.value}</span>
          <span className={styles.k}>{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
