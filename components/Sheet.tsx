import styles from "./Sheet.module.css";

export function Sheet({ children }: { children: React.ReactNode }) {
  return <div className={styles.sheet}>{children}</div>;
}
