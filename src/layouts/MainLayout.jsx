import { Outlet } from "react-router-dom";
import { Stripes } from "src/components/Stripes";
import { Navbar } from "src/components/Navbar";
import { Footer } from "src/components/Footer";
import styles from "src/styles/mainLayout.module.css";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <section className={styles["content"]}>
        <Outlet />
      </section>
      <Footer />
      <Stripes />
    </>
  );
}
