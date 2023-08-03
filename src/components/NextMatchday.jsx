import styles from "src/styles/nextMatchday.module.css";
import teamHome from "src/assets/logo.png";
import teamAway from "src/assets/teamPlaceholder.png";

export function NextMatchday() {
  const footballMatch = {
    stadium: "Fanu Stadionas",
    time: "16:00",
    date: "17/05/17",
  };
  return (
    <>
      <div className={styles["matchday-wrap"]}>
        <div className={styles["matchday-info-wrap"]}>
          <div className={styles["matchday-content"]}>
            <div className={`${styles["team-container"]} ${styles["left"]}`}>
              <div className={styles["logo-container"]}>
                <img src={teamHome} />
              </div>
            </div>
            <div className={styles["match-info"]}>
              <span className={styles["stadium-info"]}>
                {footballMatch.stadium}
              </span>
              <span className={styles["time-info"]}>{footballMatch.time}</span>
              <span className={styles["date-info"]}>{footballMatch.date}</span>
            </div>
            <div className={`${styles["team-container"]} ${styles["right"]}`}>
              <div className={styles["logo-container"]}>
                <img src={teamAway} />
              </div>
              <div className={styles["more-info-container"]}>
                <button className={styles["more-info-button"]}>
                  Apie Rungtynes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
