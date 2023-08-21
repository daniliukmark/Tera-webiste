import { useNavigate } from "react-router-dom";
import styles from "src/styles/PromoCampaign.module.css";
import { BASE_URL } from "src/assets/data";
const actionButton = new Map();
export function PromoCampaign({ type, content }) {
  const navigate = useNavigate();
  const navigateToPromoPage = () => navigate(`${BASE_URL}/parama`);
  actionButton.set(
    "mainPage",
    <button onClick={navigateToPromoPage} className={styles["promo-button"]}>
      <i>Paremti FK Tera</i>
    </button>
  );
  actionButton.set("paramaPage", <h1>Kaip </h1>);
  return (
    <>
      <div id="promo" className={styles["promo-wrap"]}>
        <div className={styles["promo-img-background"]}></div>
        <div className={styles["promo-content-wrap"]}>
          <div>
            <h1 className={styles["pitch-top"]}>Nori Padėti Mums?</h1>
            <h1 className={styles["main-pitch"]}>
              <i>
                Tapk Teros <br />
                Rėmėju!
              </i>
            </h1>
          </div>
          {actionButton.get(type)}
        </div>
      </div>
    </>
  );
}
