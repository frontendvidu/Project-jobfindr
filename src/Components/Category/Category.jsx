import React from "react";
import styles from "./Category.module.css";
import Niche from "../Niche/Niche";
import agri from "../Images/agri.png";
import commerce from "../Images/commerce.png";
import construction from "../Images/construction.png";
import education from "../Images/education.png";
import financial from "../Images/financial.png";
import hotel from "../Images/hotel.png";
import metal from "../Images/metal.png";
import transport from "../Images/transport.png";

function Category() {
  return (
    <section className={styles.outerCategory}>
      <h2 className={styles.categoryTitle}>Browse by Category</h2>
      <p className={styles.categoryTag}>
        Find the right fit from categorization
      </p>
      <div className={styles.niches}>
        <Niche nicheTitle="Agriculture" jobCount="1254 jobs" imageSrc={agri} />
        <Niche
          nicheTitle="Metal Production"
          jobCount="816 jobs"
          imageSrc={metal}
        />
        <Niche nicheTitle="Commerce" jobCount="2082 jobs" imageSrc={commerce} />
        <Niche
          nicheTitle="Construction"
          jobCount="1520 jobs"
          imageSrc={construction}
        />
        <Niche
          nicheTitle="Hotel & Tourism"
          jobCount="1022 jobs"
          imageSrc={hotel}
        />
        <Niche
          nicheTitle="Education"
          jobCount="1496 jobs"
          imageSrc={education}
        />
        <Niche
          nicheTitle="Finanical Services"
          jobCount="1529 jobs"
          imageSrc={financial}
        />
        <Niche
          nicheTitle="Transport"
          jobCount="1244 jobs"
          imageSrc={transport}
        />
      </div>
    </section>
  );
}

export default Category;
