import styles from "src/styles/pagrindinisPage.module.css";
import { NextMatchday } from "src/components/NextMatchday";
import { LeagueTable } from "src/components/LeagueTable";
import { PromoCampaign } from "src/components/PromoCampaign";
export function PagrindinisPage() {
  return (
    <>
      <div className={styles["page"]}>
        <div className={styles["page-wrap"]}>
          <section className={styles["section-1"]}>
            <NextMatchday isMainPage={true} />
            <LeagueTable />
          </section>
          <section className={styles["section-2"]}>
            <PromoCampaign type={"mainPage"} />
          </section>
        </div>
      </div>
    </>
  );
}
