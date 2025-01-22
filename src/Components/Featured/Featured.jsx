import React from "react";
import styles from "./Featured.module.css";
function Featured() {
  return (
    <div className={styles.outerFeatured}>
      <h2 className={styles.headingFeatured}>
        Good LIfe Begins WIth A Good Company
      </h2>
      <div className={styles.lowerSectionFeatured}>
        <span className={styles.boxFeatured}>
          <span className={styles.greenBoxFeatured}>1</span>
          <span>
            <h4 className={styles.lowerHeadingFeatured}>
              Elit gravida lorem amet porta risus vitae at
            </h4>
            <button className={styles.btnFeatured}>Learn more</button>
          </span>
        </span>

        <span className={styles.boxFeatured}>
          <span className={styles.greenBoxFeatured}>2</span>
          <span>
            <h4 className={styles.lowerHeadingFeatured}>
              Elit gravida lorem amet porta risus vitae at
            </h4>
            <button className={styles.btnFeatured}>Learn more</button>
          </span>
        </span>

        <span className={styles.boxFeatured}>
          <span className={styles.greenBoxFeatured}>3</span>
          <span>
            <h4 className={styles.lowerHeadingFeatured}>
              Elit gravida lorem amet porta risus vitae at
            </h4>
            <button className={styles.btnFeatured}>Learn more</button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Featured;
