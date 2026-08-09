import Link from "next/link";
import styles from "./BackToResume.module.css";

export function BackToResume() {
  return (
    <Link href="/" className={styles.back}>
      ← Back to résumé
    </Link>
  );
}
