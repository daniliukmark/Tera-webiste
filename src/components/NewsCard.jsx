import { Link } from "react-router-dom";
import styles from "src/styles/NewsCard.module.css";
function handleNavigateToArticle(pathTo) {
  window.location.replace(pathTo);
}
function NewsCard({ postPath }) {
  return (
    <>
      <div className={styles["news-card-wrap"]}>
        <div className={styles["card-content"]}>
          <div>
            <h1 className={styles["header"]}>
              <i>Pasiruosimas sezuonui pradetas</i>
            </h1>
            <p className={styles["content-snippet"]}>
              Prieš pradedant antrojo rato mūšius PAFF - ŠAFF...
            </p>
          </div>
          <Link className={styles["link"]} to={postPath}>
            <b>Suzinoti Daugiau...</b>
          </Link>
        </div>
        <div className={styles["header-content"]}>
          <div
            onClick={() => handleNavigateToArticle(postPath)}
            className={styles["header-dim"]}
          ></div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
