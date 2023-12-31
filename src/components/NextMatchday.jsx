import styles from "src/styles/nextMatchday.module.css";
import teamHome from "src/assets/logo.png";
import teamAway from "src/assets/teamPlaceholder.png";
import { BASE_URL } from "src/assets/data";
import { useNavigate } from "react-router-dom";
import longArrowImg from "../assets/longArrow.svg";
export function NextMatchday({ isMainPage }) {
  const footballMatch = {
    id: "1234567890",
    stadium: "Fanu Stadionas",
    time: "16:00",
    date: "17/05/17",
  };
  const navigate = useNavigate();
  const navigateToMatchDetails = () =>
    navigate(`${BASE_URL}/rungtynes/${footballMatch.id}`);
  const navigateToPreviousPage = () => navigate(-1);
  return (
    <>
      <div style={{}} id="next-match" className={styles["matchday-wrap"]}>
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
              <span className={styles["date-info"]}>
                <b>{footballMatch.date}</b>
              </span>
            </div>
            <div className={`${styles["team-container"]} ${styles["right"]}`}>
              <div className={styles["logo-container"]}>
                <img src={teamAway} />
              </div>
              <div className={styles["more-info-container"]}>
                <button
                  onClick={
                    isMainPage ? navigateToMatchDetails : navigateToPreviousPage
                  }
                  className={styles["more-info-button"]}
                >
                  {isMainPage ? (
                    <h1 style={{ margin: "0px", fontFamily: "Cabin" }}>
                      Apie Rungtynes
                    </h1>
                  ) : (
                    <img
                      src={longArrowImg}
                      draggable={false}
                      alt="grizti i pagrindini puslapi"
                      className={styles["long-arrow"]}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
