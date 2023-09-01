import styles from "src/styles/articleSection.module.css";
function ArticleSection({
  articleHeader,
  articleContent,
  showStripe,
  imageUrl,
  imageSide,
}) {
  return (
    <>
      <section
        style={{
          borderTop: "solid 3px #fff",
        }}
        className={styles["article-wrap"]}
      >
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            ...(imageSide === "right" ? { right: "0px" } : { left: "0px" }),
          }}
          className={styles["article-image"]}
        ></div>

        {showStripe ? (
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
        ) : (
          ""
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

export default ArticleSection;
