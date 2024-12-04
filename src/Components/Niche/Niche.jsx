import React from "react";
import styles from "./Niche.module.css";
function Niche(props) {
  return (
    <div className={styles.nicheOuter}>
      <img src={props.imageSrc} />
      <h3 className={styles.nicheHeading}>{props.nicheTitle}</h3>
      <p className={styles.nicheTag}>{props.jobCount}</p>
    </div>
  );
}

export default Niche;
