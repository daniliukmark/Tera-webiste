import styles from "src/styles/footer.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES, CALLS_FOR_ACTIONS, CONTACTS } from "src/assets/data";
import facebookIcon from "src/assets/facebookIcon.svg";
import youtubeIcon from "src/assets/youtubeIcon.svg";
import phoneIcon from "src/assets/phone.svg";
import locationIcon from "src/assets/location.svg";
import emailIcon from "src/assets/email.svg";
import { useRef, useEffect } from "react";

const intialRoutes = ROUTES;
const callsForAction = CALLS_FOR_ACTIONS;
const contactInfo = CONTACTS;
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/profile.php?id=100060685733928";
const YOUTUBE_PAGE_URL =
  "https://www.youtube.com/channel/UC0I80WYUz4jt5f5Rgvm_RdA";
export function Footer({ setFooterY }) {
  const footerRef = useRef(null);

  const navigateToFacebook = () => {
    window.location.replace(FACEBOOK_PAGE_URL);
  };
  const navigateToYoutube = () => {
    window.location.replace(YOUTUBE_PAGE_URL);
  };
  useEffect(() => {
    const getPosition = () => {
      setFooterY(footerRef.current.getBoundingClientRect().y);
    };
    window.addEventListener("scroll", getPosition);
    getPosition();
    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  }, [setFooterY]);

  const routesList = intialRoutes.map((route) => (
    <li key={route.path} className={styles[""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));

  return (
    <>
      <footer ref={footerRef} className={styles["footer-wrap"]}>
        <div className={styles["footer-content"]}>
          <div
            className={`${styles["section-about-club"]} ${styles["footer-section"]}`}
          >
            <h2>Apie Klubą</h2>
            <p>
              Vilniaus futbolo klubas „Tera“, o trumpai Vilniaus „Tera“ arba FK
              „Tera“ – Lietuvos futbolo klubas iš Vilniaus Sovietmečiu komanda
              įsteigta prie Vilniaus prie troleibuso parko, kuris įkurtas 1956
              m. 1960 m. komanda pateko į aukščiausiąją lygą, tačiau po sezono
              iš jos iškrito. Nuo 2007 metų komanda vadinasi FK Tera. Nuo 2021
              metų komanda rungtyniauja VRFS III lygoje.
            </p>
          </div>
          <div
            className={`${styles["section-browse"]} ${styles["footer-section"]}`}
          >
            <h2>Kiti Puslapiai</h2>
            <ul>{routesList}</ul>
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
          <div
            className={`${styles["section-actions"]} ${styles["footer-section"]}`}
          >
            <ul>
              <li>
                <img
                  onClick={navigateToFacebook}
                  className={styles["icon"]}
                  src={facebookIcon}
                  alt="facebook link"
                />
              </li>
              <li>
                <img
                  onClick={navigateToYoutube}
                  className={styles["icon"]}
                  src={youtubeIcon}
                  alt="youtube link"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
