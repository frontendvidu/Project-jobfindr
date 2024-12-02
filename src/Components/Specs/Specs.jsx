import React from "react";
import I1 from "../../Images/Icon+bg.png";
import I2 from "../../Images/Icon+bg-1.png";
import I3 from "../../Images/Icon+bg-2.png";

import styles from "./Specs.module.css";
function Specs() {
  return (
    <div className={styles.specs}>
      <span className={styles.specSpan}>
        <img src={I1} alt="" />
        <div>
          <p className={styles.price}>25,850</p>
          <p className={styles.tag}>Jobs</p>
        </div>
      </span>
      <span className={styles.specSpan}>
        <img src={I2} alt="" />
        <div>
          <p className={styles.price}>10,250</p>
          <p className={styles.tag}>Candidates</p>
        </div>
      </span>
      <span className={styles.specSpan}>
        <img src={I3} alt="" />
        <div>
          <p className={styles.price}>18,400</p>
          <p className={styles.tag}>Companies</p>
        </div>
      </span>
    </div>
  );
}

export default Specs;
