import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Images/Logo.png";

function Header() {
  return (
    <div className={styles.headerOuter}>
      <img src={Logo} alt="LOGO" />
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="about">About Us</Link>
        <Link to="">Contact Us</Link>
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
