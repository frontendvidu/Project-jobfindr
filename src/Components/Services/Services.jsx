import React from "react";
import person from "../../Images/person.png";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.outerServices}>
      <div className={styles.serviceLeft}>
        <img src={person} alt="Person smilling" className={styles.Image} />
      </div>
      <div className={styles.serviceRight}>
        <h2 className={styles.serviceH2}>
          We Providing Many Features You Can Use
        </h2>
        <p className={styles.serviceP}>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings.
        </p>
        <button className={styles.serviceBtn}>Explore More</button>
      </div>
    </div>
  );
}

export default Services;
