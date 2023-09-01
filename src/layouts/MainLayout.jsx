import { Outlet, useLocation } from "react-router-dom";
import { Stripes } from "src/components/Stripes";
import { Navbar } from "src/components/Navbar";
import { Footer } from "src/components/Footer";
import styles from "src/styles/mainLayout.module.css";
import { useEffect, useState } from "react";

export function MainLayout() {
  const [footerY, setFooterY] = useState();
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
