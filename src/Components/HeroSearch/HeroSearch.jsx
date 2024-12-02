import React from "react";
import styles from "./HeroSearch.module.css";

function HeroSearch() {
  return (
    <form action="" className={styles.searchOuter}>
      <input
        type="search"
        className={`${styles.input} ${styles.inputTitle}`}
        placeholder="Job Title oe Company"
      />
      <input
        className={styles.input}
        type="dropdown"
        placeholder="Select Location"
      />
      <input
        className={styles.input}
        type="dropdown"
        placeholder="Select Category"
      />
      <button className={styles.jobSearch}>Search Job</button>
    </form>
  );
}

export default HeroSearch;
