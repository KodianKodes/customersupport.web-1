import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "../../assets/scrybe_logo_with_text.svg";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.nav_content}`}>
        <div className={styles.nav__img}>
          <img src={logo} alt="Company Logo" />
        </div>
        <div className={styles.nav__links}>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/">Service</NavLink>
          <NavLink to="/">Solutions</NavLink>
          <NavLink to="/"> Pricing </NavLink>
          <NavLink to="/"> Industry</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
        <div className={styles.nav__ctas}>
          <button type="button">Login</button>
          <button type="button">Upgrade Plan</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
