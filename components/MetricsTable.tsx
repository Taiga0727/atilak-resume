import type { MetricRow } from "@/content/types";
import styles from "./MetricsTable.module.css";

export function MetricsTable({ rows }: { rows: MetricRow[] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.results}>
        <thead>
          <tr>
            <th>Metric</th>
            <th className={styles.before}>Before</th>
            <th className={styles.after}>After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.metric}>
              <td>{row.metric}</td>
              <td className={styles.before}>{row.before}</td>
              <td className={styles.after}>{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
