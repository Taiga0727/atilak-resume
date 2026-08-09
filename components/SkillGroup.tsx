import type { SkillGroupData } from "@/content/types";
import styles from "./SkillGroup.module.css";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className={styles.skillGroup}>
      <span className={styles.cat}>{group.category}</span>
      <div className={styles.items}>
        {group.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
