import styles from "src/styles/leagueTable.module.css";
import { STANDINGS } from "src/assets/data";
import arrowDownIcon from "src/assets/Arrow-down.svg";
export function LeagueTable() {
  const standingsList = STANDINGS.map((standing) => (
    <tr
      className={`
      ${styles["table-row"]} 
      ${standing.Place % 2 == 0 ? "" : styles["grey-background"]}
      ${standing.Team === "FK Tera" ? styles["selected"] : ""}
      `}
      key={standing.Team}
    >
      <td className={styles["center"]}>
        <div>{standing.Place}</div>
      </td>
      <td className={styles["team-name"]}>{standing.Team}</td>
      <td>{standing.Matches}</td>
      <td>{standing.GoalDifference}</td>
      <td>{standing.Points}</td>
    </tr>
  ));
  return (
    <>
      <div className={styles["wrap"]}>
        <img className={styles["arrow-down-icon"]} src={arrowDownIcon} />
        <div className={styles["league-table-wrap"]}>
          <div className={styles["table-header"]}>
            <h1>Turnyrinė Lentelė</h1>
          </div>
          <table className={styles["league-table"]}>
            <thead>
              <tr>
                <th></th>
                <th>Klubas</th>
                <th>Rungt.</th>
                <th>Skirt.</th>
                <th>Tšk.</th>
              </tr>
            </thead>
            <tbody>{standingsList}</tbody>
          </table>
          <div className={styles["table-footer"]}></div>
        </div>
      </div>
    </>
  );
}
