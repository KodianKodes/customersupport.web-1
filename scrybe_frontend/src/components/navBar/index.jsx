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
          <NavLink to="/services">Service</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/"> Pricing </NavLink>
          <NavLink to="/"> Industry</NavLink>
          <NavLink to="/">About Us</NavLink>
        </div>
        <div className={styles.nav__ctas}>
          <button type="button">Login</button>
          <NavLink to="/terms">
            <button type="button">Upgrade Plan</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
