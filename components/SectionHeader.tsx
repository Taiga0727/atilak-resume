import styles from "./SectionHeader.module.css";

export function SectionHeader({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className={styles.label}>
      {children}
    </h2>
  );
}
