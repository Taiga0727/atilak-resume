import type { MetricRow } from "@/content/types";
import styles from "./MetricsTable.module.css";

/** Parses "99.52%" into 99.52; anything else (a dash, a tiny rate) draws no bar. */
const percent = (value: string): number | null => {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)%$/);
  return match ? Number(match[1]) : null;
};

export function MetricsTable({ rows, bars = false }: { rows: MetricRow[]; bars?: boolean }) {
  return (
    <div className={styles.tableWrap}>
      <table className={`${styles.results} ${bars ? styles.withBars : ""}`}>
        <thead>
          <tr>
            <th>Metric</th>
            <th className={styles.before}>Before</th>
            <th className={styles.after}>After</th>
            {bars && (
              <th className={styles.barHead}>
                <span className={styles.srOnly}>Before and after, drawn as bars</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const before = percent(row.before);
            const after = percent(row.after);
            const showBars = before !== null && after !== null && after >= 5;
            return (
              <tr key={row.metric}>
                <td>{row.metric}</td>
                <td className={styles.before}>{row.before}</td>
                <td className={styles.after}>{row.after}</td>
                {bars && (
                  <td className={styles.barCell} aria-hidden="true">
                    {showBars && (
                      <>
                        <span className={styles.barBefore} style={{ width: `${before}%` }} />
                        <span className={styles.barAfter} style={{ width: `${after}%` }} />
                      </>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
