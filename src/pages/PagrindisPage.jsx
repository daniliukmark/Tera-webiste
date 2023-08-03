import styles from "src/styles/pagrindinisPage.module.css";
import { NextMatchday } from "src/components/NextMatchday";
import { LeagueTable } from "src/components/LeagueTable";
import { PromoCampaign } from "src/components/PromoCampaign";
export function PagrindinisPage() {
  return (
    <>
      <section className={styles["section-1"]}>
        <NextMatchday />
        <LeagueTable />
      </section>
      <section className={styles["section-2"]}>
        <PromoCampaign />
      </section>
    </>
  );
}
