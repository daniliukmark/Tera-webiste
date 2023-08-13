import styles from "src/styles/ExecutiveCard.module.css";
function ExecutiveCard({ size }) {
  return (
    <>
      <div className={`${styles["card-wrap"]} ${styles[`${size}`]}`}>
        <div className={styles["card-content-wrap"]}>
          <div className={`${styles["person-photo"]} ${styles[`${size}`]}`} />
        </div>
      </div>
    </>
  );
}

export default ExecutiveCard;
