import { useNavigate } from "react-router-dom";
import styles from "src/styles/PromoCampaign.module.css";
import { BASE_URL } from "src/assets/data";

export function PromoCampaign() {
  const navigate = useNavigate();
  const navigateToPromoPage = () => navigate(`${BASE_URL}/parama`);
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
          <button
            onClick={navigateToPromoPage}
            className={styles["promo-button"]}
          >
            <i>Paremti FK Tera</i>
          </button>
        </div>
      </div>
    </>
  );
}
