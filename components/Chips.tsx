import styles from "./Chips.module.css";

export function Chips({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className={styles.chips} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
