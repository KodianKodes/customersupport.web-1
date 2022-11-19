/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styles from "./HelpSupportNav.module.scss";
import search from "../assets/search.svg";
import icon from "../assets/Icon.svg";

function HelpSupportNav({ setDisplay }) {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav}>
        <a href="#">Help and Support</a>
        <img src={icon} alt="" />
        <a onClick={() => setDisplay(true)} href="#">
          General
        </a>
      </div>

      <div className={styles.input}>
        <div>
          <img src={search} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default HelpSupportNav;
