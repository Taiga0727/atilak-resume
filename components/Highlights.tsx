import type { Stat } from "@/content/types";
import styles from "./Highlights.module.css";

export function Highlights({ items }: { items: Stat[] }) {
  return (
    <ul className={styles.highlights} aria-label="Highlights">
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
