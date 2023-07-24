import styles from "src/styles/footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES, CALLS_FOR_ACTIONS } from "src/assets/data";

const intialRoutes = ROUTES;
const initialCallsForAction = CALLS_FOR_ACTIONS;
export function Footer() {
  const routesList = intialRoutes.map((route) => (
    <li key={route.path} className={styles[""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));
  const callsForActionList = initialCallsForAction.map((route) => (
    <li key={route.path} className={styles[""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));
  return (
    <>
      <footer className={styles["footer-wrap"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["section-about-club"]}>
            <h2>Apie Kluba</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem ducimus magni omnis et vitae porro quia nihil officia,
              veritatis sit libero dicta aut sequi aperiam, doloremque
              perferendis asperiores quaerat itaque!
            </p>
          </div>
          <div className={styles["section-browse"]}>
            <h2>Kiti Puslapiai</h2>
            <ul>{routesList}</ul>
          </div>
          <div className={styles["section-actions"]}>
            <h2>Padek Komandai</h2>
            <ul>{callsForActionList}</ul>
          </div>
          <div className={styles["section-contacts"]}></div>
        </div>
      </footer>
    </>
  );
}
