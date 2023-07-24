import styles from "src/styles/stripes.module.css";
export function Stripes() {
  return (
    <>
      <div className={styles["wrap"]}>
        <div className={styles["stripe"]}>
          <div className={styles["blank-left"]}></div>
          <div className={styles["green"]}></div>
          <div className={styles["white"]}></div>
          <div className={styles["red"]}></div>
          <div className={styles["black"]}></div>
          <div className={styles["blank-right"]}></div>
        </div>
      </div>
    </>
  );
}
