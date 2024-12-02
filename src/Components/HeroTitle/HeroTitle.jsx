import React from "react";
import styles from "./HeroTitle.module.css";

function HeroTitle() {
  return (
    <div>
      <h1 className={styles.siteTitle}>Find Your Dream Job Today!</h1>
      <p className={styles.tagname}>
        Connecting Talent with Opportunity:Your Gateway to Career Success
      </p>
    </div>
  );
}

export default HeroTitle;
