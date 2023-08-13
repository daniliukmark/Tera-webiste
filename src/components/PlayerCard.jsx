import styles from "src/styles/playerCard.module.css";
import photo from "src/assets/contactsPic.webp";
function PlayerCard({
  isCardPositionFixed,
  playerPhoto,
  cardPosition,
  playerName,
  playerRole,
  playerBirthDate,
  playerAge,
  playerHeight,
}) {
  isCardPositionFixed = true;
  playerPhoto = photo;
  playerName = "Player";
  playerRole = "Defender";
  playerBirthDate = "2015-09-01";
  playerAge = "20";
  playerHeight = "170";

  return (
    <div
      style={{
        position: `${isCardPositionFixed ? "" : "absolute"}`,
        top: 0,
        left: 0,
        display: "inline",
      }}
    >
      <div className={styles["player-card-wrap"]}>
        <div className={styles["player-card"]}>
          <img
            className={styles["player-photo"]}
            src={playerPhoto} // TODO: change to playerPhoto later
            alt={`${playerName}'s photo`}
          />
          <section className={styles["player-description"]}>
            <div className={styles["header"]}>
              <h1>{playerName}</h1>
            </div>
            <ul className={styles["player-stats"]}>
              <li>
                {playerRole === null ? (
                  ""
                ) : (
                  <span>
                    Pozicija: <b>{playerRole}</b>
                  </span>
                )}
              </li>
              <li>
                {playerBirthDate === null ? (
                  ""
                ) : (
                  <span>
                    Gimimo data: <b>{playerBirthDate}</b>
                  </span>
                )}
              </li>
              <li>
                {playerAge === null ? (
                  ""
                ) : (
                  <span>
                    Amzius: <b>{playerAge}</b>
                  </span>
                )}
              </li>
              <li>
                {playerHeight === null ? (
                  ""
                ) : (
                  <span>
                    Ugis: <b>{playerHeight}</b>
                  </span>
                )}
              </li>
            </ul>
          </section>
        </div>
        <div className={styles["player-card-blur"]}></div>
      </div>
    </div>
  );
}

export default PlayerCard;
