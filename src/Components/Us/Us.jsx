import styles from "./Us.module.css";
import icon1 from "../Images/icon1.png";
import bgImg from "../Images/verticle.jpg";
import sq1Img from "../Images/sqaure1.jpg";
import sq2Img from "../Images/square2.jpg";
const Us = () => {
  return (
    <div className={styles.outerUS}>
      <div className={styles.outerUSLeft}>
        <img className={styles.outerUSLeftImgBig} src={bgImg} />
        <span className={styles.outerUSLeftImgSpans}>
          <img src={sq2Img} className={styles.outerUSLeftImgSpansSq1} />
          <img src={sq1Img} className={styles.outerUSLeftImgSpansSq2} />
        </span>
      </div>
      <div className={styles.outerUSRight}>
        <h2>We're Only Working With The Best</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ducimus possimus molestiae reiciendis repudiandae dolor fuga, maxime
          ad incidunt assumenda corporis nisi inventore odio voluptates
          voluptatibus tempore saepe aperiam praesentium!
        </p>
        <div className={styles.outerUSFeatures}>
          <div className={styles.outerUSFeaturesInnerDiv}>
            <span>
              <img src={icon1} alt="" />
              <h4>Quality Job</h4>
            </span>
            <span>
              <img src={icon1} alt="" />
              <h4>Resume bulder</h4>
            </span>
          </div>

          <div className={styles.outerUSFeaturesInnerDiv}>
            <span>
              <img src={icon1} alt="" />
              <h4>Top companies</h4>
            </span>
            <span>
              <img src={icon1} alt="" />
              <h4>Top Talents</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
