import { Link } from "react-router-dom";
import styles from "src/styles/MobileMenu.module.css";
import exitIcon from "src/assets/cross.svg";

export function MobileMenu({ isMenuOpen, handleToggleMenu, routes }) {
  let menuItems = routes.map((route) => (
    <li key={route.path} className={styles[route.isSelected ? "selected" : ""]}>
      <Link onClick={handleToggleMenu} to={route.path}>
        {route.text}
      </Link>
    </li>
  ));
  return (
    <>
      <div
        className={
          isMenuOpen
            ? `${styles["mobile-menu"]} ${styles["visible"]}`
            : styles["mobile-menu"]
        }
      >
        <div className={styles["menu-icon-wrap"]}>
          <img
            onClick={handleToggleMenu}
            className={styles["menu-icon"]}
            src={exitIcon}
            alt="exit icon"
            draggable={false}
          />
        </div>
        <div className={styles["menu-items-wrap"]}>
          <ul>{menuItems}</ul>
        </div>
      </div>
    </>
  );
}
