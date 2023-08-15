import { Link } from "react-router-dom";
import styles from "src/styles/NewsCard.module.css";
function NewsCard({ postPath }) {
  return (
    <>
      <div className={styles["news-card-wrap"]}>
        <div className={styles["card-content"]}>
          <h1 className={styles["header"]}>
            <i>Pasiruosimas sezuonui pradetas</i>
          </h1>
          <p className={styles["content-snippet"]}>
            Prieš pradedant antrojo rato mūšius PAFF - ŠAFF...
          </p>
          <Link className={styles["link"]} to={{ pathname: postPath }}>
            <b>Suzinoti Daugiau...</b>
          </Link>
        </div>
        <div className={styles["header-content"]}></div>
      </div>
    </>
  );
}

export default NewsCard;
