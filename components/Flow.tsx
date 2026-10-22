import type { CSSProperties } from "react";
import type { FlowStep } from "@/content/types";
import styles from "./Flow.module.css";

export function Flow({
  steps,
  label,
  compact = false,
}: {
  steps: FlowStep[];
  label: string;
  compact?: boolean;
}) {
  return (
    <ol
      className={`${styles.flow} ${compact ? styles.compact : ""}`}
      style={{ "--steps": steps.length } as CSSProperties}
      aria-label={label}
    >
      {steps.map((step) => (
        <li key={step.label} className={styles.step}>
          <span className={styles.label}>{step.label}</span>
          {!compact && step.note && <span className={styles.note}>{step.note}</span>}
        </li>
      ))}
    </ol>
  );
}
