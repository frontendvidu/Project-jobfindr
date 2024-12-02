import React from "react";
import styles from "./Category.module.css";
import Niche from "../Niche/Niche";
function Category() {
  return (
    <section className={styles.outerCategory}>
      <h2 className={styles.categoryTitle}>Browse by Categoty</h2>
      <p className={styles.categoryTag}>
        Find the right fit from categorization
      </p>
      <div className={styles.niches}>
        <Niche nicheTitle="Agriculture" jobCount="1254 jobs" />
        <Niche nicheTitle="Metal Production" jobCount="816 jobs" />
        <Niche nicheTitle="Commerce" jobCount="2082 jobs" />
        <Niche nicheTitle="Construction" jobCount="1520 jobs" />
        <Niche nicheTitle="Hotel & Tourism" jobCount="1022 jobs" />
        <Niche nicheTitle="Education" jobCount="1496 jobs" />
        <Niche nicheTitle="Finanical Services" jobCount="1529 jobs" />
        <Niche nicheTitle="Transport" jobCount="1244 jobs" />
      </div>
    </section>
  );
}

export default Category;
