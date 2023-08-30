import styles from "src/styles/InstructionSection.module.css";

function InstructionSection({
  articleHeader,
  articleContent,
  showStripe,
  imageSide,
}) {
  return (
    <>
      <section className={styles["article-wrap"]}>
        <iframe
          style={{
            ...(imageSide === "right" ? { right: "0px" } : { left: "0px" }),
          }}
          className={styles["article-video"]}
          src="https://www.youtube.com/embed/VVpaY-FFbKk?si=IONGKJraKkxIsETr"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {showStripe && (
          <div
            style={{
              ...(imageSide === "right" ? { right: "0px" } : { left: "0px" }),
            }}
            className={styles["stripe-decoration"]}
          >
            <div className={styles["green"]} />
            <div className={styles["white"]} />
            <div className={styles["red"]} />
            <div className={styles["black"]} />
          </div>
        )}

        <article
          style={{
            ...(imageSide === "right"
              ? { justifyContent: "start" }
              : { justifyContent: "end" }),
          }}
          className={styles["article-content-wrap"]}
        >
          <div className={styles["article"]}>
            <h1 className={styles["article-header"]}>{articleHeader}</h1>
            <p className={styles["article-content"]}>{articleContent}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default InstructionSection;
