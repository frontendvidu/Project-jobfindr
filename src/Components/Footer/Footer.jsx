import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerSectionCol1}>
        {/* <img src="" alt="LOGO" /> */}
        <p className={styles.footerCompanyDescription}>
          Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue
          nibh vivamus aliquet nunc mauris dui nullam et.
        </p>
        <p className={styles.footerCopyright}>
          {" "}
          © Copyright Job Portal 2024. Designed by Figma.guru
        </p>
      </div>
      <div className={styles.footerSectionCol2}>
        <h5 className={styles.footerNavHeader}>Company</h5>
        <nav className={styles.footerNav}>
          <a href="" className={styles.footerLinks}>
            About us
          </a>
          <a href="" className={styles.footerLinks}>
            Our Team
          </a>
          <a href="" className={styles.footerLinks}>
            Partners
          </a>
          <a href="" className={styles.footerLinks}>
            For Candidates
          </a>
          <a href="" className={styles.footerLinks}>
            For Employers
          </a>
        </nav>
      </div>
      <div className={styles.footerSectionCol3}>
        <h5 className={styles.footerNavHeader}>Job Categories</h5>
        <nav className={styles.footerNav}>
          <a href="" className={styles.footerLinks}>
            Telecommunications
          </a>
          <a href="" className={styles.footerLinks}>
            Hotels & Tourism
          </a>
          <a href="" className={styles.footerLinks}>
            Constructions
          </a>
          <a href="" className={styles.footerLinks}>
            Education
          </a>
          <a href="" className={styles.footerLinks}>
            Financial Services
          </a>
        </nav>
      </div>
      <div className={styles.footerSectionCol4}>
        <h5 className={styles.footerNavHeader}>Newsletter</h5>
        <p className={styles.footerNewsletterDescription}>
          Eu nunc pretium vitae platea. Non netus elementum vulputate{" "}
        </p>
        <input
          placeholder="Email Address"
          className={styles.footerInput}
          type="text"
        />
        <button className={styles.footerSubscribeButton}>Subscribe now</button>
        <span>
          <button className={styles.footerLegalButtons}>Privacy Policy</button>
          <button className={styles.footerLegalButtons}>
            Terms & Condition
          </button>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
