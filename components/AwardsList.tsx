import { Fragment } from "react";
import Link from "next/link";
import type { AwardEntry } from "@/content/types";
import { hrefFor } from "@/content/types";
import styles from "./AwardsList.module.css";

export function AwardsList({ awards }: { awards: AwardEntry[] }) {
  return (
    <div className={styles.awards}>
      {awards.map((award) => {
        const desc =
          award.linkKind && award.linkSlug ? (
            <Link href={hrefFor(award.linkKind, award.linkSlug)} className={styles.link}>
              {award.desc}
            </Link>
          ) : (
            award.desc
          );
        return (
          <Fragment key={award.year + award.desc}>
            <span className={styles.yr}>{award.year}</span>
            <span className={styles.desc}>{desc}</span>
          </Fragment>
        );
      })}
    </div>
  );
}
