import React, { useRef, useState } from "react";
import styles from "./Testimonials.module.css";
import Slide from "../Slide/Slide";
import slideData from "../Slide/slideData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

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
      {/* <div className={styles.slidesHandleTestimonial}> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
        initialSlide={Math.floor(slideData.length / 2)}
        autoHeight={true}
      >
        {slideData.map((item) => {
          return (
            <SwiperSlide className={styles.swiperSlide}>
              <Slide
                headingTestimonial={item.heading}
                quoteTestimonial={item.quote}
                author={item.author}
                position={item.position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </section>
  );
}

export default Testimonials;
