import React from "react";
import styles from "./Testimonials.module.css";
import Stars from "../../Images/Stars.png";
import Avatar from "../../Images/Avatar.png";

function Testimonials() {
  return (
    <section className={styles.sectionTestimonial}>
      <h2 className={styles.headingTestimonial}>
        Testimonials from our Customers
      </h2>
      <p className={styles.tagTestimonial}>
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum id s
      </p>
      <div className={styles.slidesHandleTestimonial}>
        <div className={styles.slideTestimonial}>
          <img src={Stars} alt="stars" className={styles.starsTestimonial} />
          <h3 className={styles.slideHeadingTestimonial}>Amazing services</h3>
          <p className={styles.slideQuoteTestimonial}>
            Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
            tristique in dolor. Mus etiam et vestibulum venenatis.
          </p>
          <div className={styles.authorTestimonial}>
            <img src={Avatar} alt="stars" />
            <div>
              <p className={styles.authorNameTestimonial}>Marco Kihn</p>
              <p className={styles.authorPositionTestimonial}>Happy client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
