import { useState, useEffect } from "react";
import styles from "src/styles/navbar.module.css";
import logo from "src/assets/logo.png";
import menuIcon from "src/assets/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "src/assets/data";

const initialRoutes = ROUTES;
export function Navbar() {
  const currentUrl = useLocation();
  const [routes, setRoutes] = useState(initialRoutes);

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
      <div className={styles["wrap"]}>
        <div className={styles["nav-wrap"]}>
          <img className={styles["logo"]} src={logo} alt="FK Teros logotipas" />
          <div className={styles["wrap-list"]}>
            <ul>{routesList}</ul>
          </div>
          <img className={styles["menu-icon"]} src={menuIcon} alt="Menu icon" />
        </div>
      </div>
    </>
  );
}
