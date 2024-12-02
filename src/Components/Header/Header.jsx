import React from "react";
import styles from "./Header.module.css";
import Logo from "../../Images/Logo.png";

function Header() {
  return (
    <div className={styles.headerOuter}>
      <img src={Logo} alt="LOGO" />
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">Jobs</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </nav>
      <span className={styles.btnspan}>
        <button className={styles.login}>Login</button>
        <button className={styles.register}>Register</button>
      </span>
      {console.log("I am header")}
    </div>
  );
}

export default Header;
