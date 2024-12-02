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
      <img src={Adobe} alt="" />
      <img src={Asana} alt="" />
      <img src={Linear} alt="" />
      <img src={Slack} alt="" />
      <img src={Spotify} alt="" />
    </div>
  );
}

export default Sponsored;
