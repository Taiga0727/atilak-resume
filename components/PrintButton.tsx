"use client";

import styles from "./PrintButton.module.css";

export function PrintButton() {
  return (
    <button
      type="button"
      className={styles.printBtn}
      onClick={() => window.print()}
      aria-label="Print or save as PDF"
    >
      Print / Save PDF
    </button>
  );
}
