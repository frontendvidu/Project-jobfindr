import React from "react";
import styles from "./Slide.module.css";
import Stars from "../../Images/Stars.png";
import Avatar from "../../Images/Avatar.png";
function Slide(props) {
  return (
    <div className={styles.slideTestimonial}>
      <img src={Stars} alt="stars" className={styles.starsTestimonial} />
      <h3 className={styles.slideHeadingTestimonial}>
        {props.headingTestimonial}
      </h3>
      <p className={styles.slideQuoteTestimonial}>{props.quoteTestimonial}</p>
      <div className={styles.authorTestimonial}>
        <img src={Avatar} alt="stars" />
        <div>
          <p className={styles.authorNameTestimonial}>{props.author}</p>
          <p className={styles.authorPositionTestimonial}>{props.position}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
