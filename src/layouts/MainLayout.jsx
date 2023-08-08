import { Outlet } from "react-router-dom";
import { Stripes } from "src/components/Stripes";
import { Navbar } from "src/components/Navbar";
import { Footer } from "src/components/Footer";
import styles from "src/styles/mainLayout.module.css";
import { useState } from "react";

export function MainLayout() {
  const [footerY, setFooterY] = useState();

  return (
    <>
      <Navbar footerY={footerY} />
      <div className={styles["page-wrap"]}>
        <div className={styles["content-wrap"]}>
          <section className={styles["content"]}>
            <Outlet />
          </section>
        </div>
        <Footer setFooterY={setFooterY} />
      </div>
      <Stripes />
    </>
  );
}
