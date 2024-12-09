import React from "react";
import Adobe from "../../Images/adobe.png";
import Asana from "../../Images/asana.png";
import Linear from "../../Images/linear.png";
import Slack from "../../Images/slack.png";
import Spotify from "../../Images/spotify.png";
import styles from "./Sponsored.module.css";
function Sponsored() {
  return (
    <div className={styles.sponsored}>
      <div className={styles.slider}>
        <img className={styles.sliderImg} src={Adobe} alt="" />
        <img className={styles.sliderImg} src={Asana} alt="" />
        <img className={styles.sliderImg} src={Linear} alt="" />
        <img className={styles.sliderImg} src={Slack} alt="" />
        <img className={styles.sliderImg} src={Spotify} alt="" />
      </div>
      <div className={styles.slider}>
        <img className={styles.sliderImg} src={Adobe} alt="" />
        <img className={styles.sliderImg} src={Asana} alt="" />
        <img className={styles.sliderImg} src={Linear} alt="" />
        <img className={styles.sliderImg} src={Slack} alt="" />
        <img className={styles.sliderImg} src={Spotify} alt="" />
      </div>
    </div>
  );
}

export default Sponsored;
