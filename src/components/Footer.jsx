import styles from "src/styles/footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES, CALLS_FOR_ACTIONS, CONTACTS } from "src/assets/data";
import phoneIcon from "src/assets/phone.svg";
import locationIcon from "src/assets/location.svg";
import emailIcon from "src/assets/email.svg";

const intialRoutes = ROUTES;
const callsForAction = CALLS_FOR_ACTIONS;
const contactInfo = CONTACTS;

export function Footer() {
  const routesList = intialRoutes.map((route) => (
    <li key={route.path} className={styles[""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));
  const callsForActionList = callsForAction.map((route) => (
    <li key={route.componentId} className={styles[""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));

  return (
    <>
      <footer className={styles["footer-wrap"]}>
        <div className={styles["footer-content"]}>
          <div
            className={`${styles["section-about-club"]} ${styles["footer-section"]}`}
          >
            <h2>Apie Kluba</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem ducimus magni omnis et vitae porro quia nihil officia,
              veritatis sit libero dicta aut sequi aperiam, doloremque
              perferendis asperiores quaerat itaque!
            </p>
          </div>
          <div
            className={`${styles["section-browse"]} ${styles["footer-section"]}`}
          >
            <h2>Kiti Puslapiai</h2>
            <ul>{routesList}</ul>
          </div>
          <div
            className={`${styles["section-actions"]} ${styles["footer-section"]}`}
          >
            <h2>Padek Komandai</h2>
            <ul>{callsForActionList}</ul>
          </div>
          <div
            className={`${styles["section-contacts"]} ${styles["footer-section"]}`}
          >
            <h2>Kontaktai</h2>
            <ul>
              <li>
                <img src={locationIcon} alt="Location icon" />
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <img src={phoneIcon} alt="Phone icon" />
                <span>{contactInfo.phoneNumber}</span>
              </li>
              <li>
                <img src={emailIcon} alt="Email icon" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
