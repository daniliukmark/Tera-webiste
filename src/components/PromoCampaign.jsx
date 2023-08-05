import styles from "src/styles/PromoCampaign.module.css";

export function PromoCampaign() {
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
                Remeju!
              </i>
            </h1>
          </div>
          <button className={styles["promo-button"]}>
            <i>Paremti FK Tera</i>
          </button>
        </div>
      </div>
    </>
  );
}
