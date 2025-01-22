import React from "react";
import styles from "./AboutUsIntro.module.css";
import office from "../Images/office.jpg";
const AboutUsIntro = () => {
  return (
    <div className={styles.Outer}>
      <div className={styles.intoUpper}>
        <h1 className={styles.headingOne}>About Us</h1>
      </div>
      <div className={styles.intoLower}>
        <div className={styles.intoLowerUpper}>
          <h2 className={styles.headingTwo}>We are GROWING!</h2>
          <p className={styles.intoLowerUpperPara}>
            Was founded in 2013 with a desire to change the status quo. We set
            out to create the best hosting platform in the world and that’s our
            mission.
          </p>
        </div>
        <img src={office} className={styles.intoLowerImg} />
      </div>
    </div>
  );
};

export default AboutUsIntro;
