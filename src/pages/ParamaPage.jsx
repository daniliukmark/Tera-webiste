import ArticleSection from "../components/ArticleHeaders/ArticleSection";
import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
} from "../assets/ParamaContent";
import sideImage1 from "../assets/parama3.webp";
import sideImage2 from "../assets/parama2.webp";
import sideImage3 from "../assets/parama1.webp";
import InstructionSection from "../components/ArticleHeaders/InstructionSection";
import ArticleHeader from "../components/ArticleHeaders/ArticleHeader";
import styles from "src/styles/ParamaPage.module.css";
export function ParamaPage() {
  return (
    <>
      <ArticleHeader />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className={styles["content-wrap"]}>
          <ArticleSection
            articleContent={paragraph1.content}
            articleHeader={paragraph1.header}
            showStripe={false}
            imageUrl={sideImage1}
            imageSide={"right"}
            className={styles["section"]}
          ></ArticleSection>
          <ArticleSection
            articleContent={paragraph2.content}
            articleHeader={paragraph2.header}
            showStripe={false}
            imageUrl={sideImage2}
            imageSide={"left"}
            className={styles["section"]}
          ></ArticleSection>{" "}
          <ArticleSection
            articleContent={paragraph3.content}
            articleHeader={paragraph3.header}
            showStripe={false}
            imageUrl={sideImage3}
            imageSide={"right"}
            className={styles["section"]}
          ></ArticleSection>
          <InstructionSection
            articleContent={paragraph4.content}
            articleHeader={paragraph4.header}
            showStripe={true}
            imageSide={"right"}
            className={styles["section"]}
          ></InstructionSection>
        </div>
      </div>
    </>
  );
}
