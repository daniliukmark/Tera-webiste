import styles from "src/styles/TeamPage.module.css";
import ExecutiveCard from "src/components/ExecutiveCard";
import PlayerCard from "src/components/PlayerCard";
import NewsCard from "../components/NewsCard";
export function KomandaPage() {
  const contactsField1 = [
    <>
      <h2>{"Sergejus Vasiljevas"}</h2>
    </>,
    <>
      <span>
        Gimimo metai: <b>1900-01-01</b>
      </span>
    </>,
  ];

  const contactsField2 = [
    <>
      <h2>{"Aleksejus Kliosovas"}</h2>
    </>,
    <>
      <span>
        Gimimo metai: <b>1900-01-01</b>
      </span>
    </>,
  ];
  return (
    <>
      <div className={styles["page-wrap"]}>
        <div className={styles["team-wrap"]}>
          <section className={styles["team-content"]}>
            <div className={styles["header-wrap"]}>
              <div className={styles["stripe"]}>
                <div className={styles["green"]} />
                <div className={styles["white"]} />
                <div className={styles["red"]} />
                <div className={styles["black"]} />
              </div>
              <h1 className={styles["header"]}>Treneriai</h1>
            </div>
            <div className={styles["team-executives"]}>
              <ExecutiveCard size="large" />
              <ExecutiveCard size="large" />
            </div>
            <div className={styles["team-table-wrap"]}>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Puolėjai</h1>
              </div>
              <div className={styles["team-table"]}>
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Saugai</h1>
              </div>
              <div className={styles["team-table"]}>
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Ginėjai</h1>
              </div>
              <div className={styles["team-table"]}>
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Vartininkai</h1>
              </div>
              <div className={styles["team-table"]}>
                <ExecutiveCard size="medium" />
                <ExecutiveCard size="medium" />
              </div>
            </div>
          </section>
          <section className={styles["best-players-list"]}>
            <div
              style={{
                background: "white",
                width: "100%",
              }}
              className={styles["header-wrap"]}
            >
              <div className={styles["stripe"]}>
                <div className={styles["green"]} />
                <div className={styles["white"]} />
                <div className={styles["red"]} />
                <div className={styles["black"]} />
              </div>
              <h1 className={styles["header"]}>Naujienos</h1>
            </div>
            <NewsCard
              postPath={
                "https://www.facebook.com/permalink.php?story_fbid=pfbid02m9XNELpXGcu1Sh5Tz7FVkch2HVwutejWGTyyJ4s9brhUYmVNYCLA7u1SNdBZpi82l&id=100060685733928"
              }
            />
          </section>
        </div>
      </div>
    </>
  );
}
