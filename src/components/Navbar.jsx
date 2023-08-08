import { useState, useEffect, useRef } from "react";
import styles from "src/styles/navBar.module.css";
import logo from "src/assets/logo.png";
import menuIcon from "src/assets/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "src/assets/data";
import { MobileMenu } from "src/components/MobileMenu";

const initialRoutes = ROUTES;
export function Navbar({ footerY }) {
  const currentUrl = useLocation();

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [routes, setRoutes] = useState(initialRoutes);
  let isNavbarColidingFooter = footerY < 80;

  function handleToggleMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto ";
  }, [isMenuOpen]);

  useEffect(() => {
    const updatedRoutes = initialRoutes.map((route) => ({
      ...route,
      isSelected: route.path === currentUrl.pathname,
    }));
    setRoutes(updatedRoutes);
  }, [currentUrl]);

  let routesList = routes.map((route) => (
    <li key={route.path} className={styles[route.isSelected ? "selected" : ""]}>
      <Link to={route.path}>{route.text}</Link>
    </li>
  ));

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
        routes={routes}
      />
      <div className={styles["wrap"]}>
        <div
          className={`${isNavbarColidingFooter ? styles["black-bg"] : ""} ${
            styles["nav-wrap"]
          }`}
        >
          <img className={styles["logo"]} src={logo} alt="FK Teros logotipas" />
          <div className={styles["wrap-list"]}>
            <ul>{routesList}</ul>
          </div>
          <img
            onClick={handleToggleMenu}
            className={` ${
              isNavbarColidingFooter ? styles["white-icon"] : ""
            } ${styles["menu-icon"]}`}
            src={menuIcon}
            alt="Menu icon"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
