import React from "react";
import styles from "./Testimonials.module.css";

import Slide from "../Slide/Slide";
import slideData from "../Slide/slideData";

function Testimonials() {
  return (
    <section className={styles.sectionTestimonial}>
      <h2 className={styles.headingTestimonial}>
        Testimonials from our Customers
      </h2>
      <p className={styles.tagTestimonial}>
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
        amassa elementum ids
      </p>
      <div className={styles.slidesHandleTestimonial}>
        {slideData.map((item) => {
          return (
            <Slide
              headingTestimonial={item.heading}
              quoteTestimonial={item.quote}
              author={item.author}
              position={item.position}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
