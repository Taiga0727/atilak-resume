import type { EducationEntry } from "@/content/types";
import styles from "./EducationItem.module.css";

export function EducationItem({ item }: { item: EducationEntry }) {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.date}>{item.dateLabel}</span>
      </div>
      <p className={styles.org}>
        {item.org}
        {item.note && (
          <>
            {" "}
            &nbsp;·&nbsp; <span className={styles.note}>{item.note}</span>
          </>
        )}
      </p>
    </div>
  );
}
