import styles from "src/styles/nextMatchday.module.css";
import teamHome from "src/assets/logo.png";
import teamAway from "src/assets/teamPlaceholder.png";
import { BASE_URL } from "src/assets/data";
import { useNavigate } from "react-router-dom";

export function NextMatchday() {
  const footballMatch = {
    id: "1234567890",
    stadium: "Fanu Stadionas",
    time: "16:00",
    date: "17/05/17",
  };
  const navigate = useNavigate();
  const navigateToMatchDetails = () =>
    navigate(`${BASE_URL}/rungtynes/${footballMatch.id}`);
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
                <button
                  onClick={navigateToMatchDetails}
                  className={styles["more-info-button"]}
                >
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
