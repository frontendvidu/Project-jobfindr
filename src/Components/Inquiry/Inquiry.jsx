import styles from "./Inquiry.module.css";
import ContactForm from "../ContactForm/ContactForm";
const Inquiry = () => {
  return (
    <div className={styles.inquiryOuter}>
      <div className={styles.inquiryLeftSection}>
        <h2 className={styles.headingTwo}>
          You will Grow, You Will
          <br />
          Succeed. We Promise That
        </h2>
        <p className={styles.formParagraph}>
          We are the best at what we do. We will help you grow towards your
          desired dreams.
        </p>
        <div className={styles.infoSection}>
          <span className={styles.formHorizontalSection}>
            <div>
              <h4 className={styles.headingFive}>Call for inquiry</h4>
              <p className={styles.infoParagraph}>+1 123 1234</p>
            </div>
            <div>
              <h4 className={styles.headingFive}>Call for inquiry</h4>
              <p className={styles.infoParagraph}>+1 123 1234</p>
            </div>
          </span>
          <span className={styles.formHorizontalSection}>
            <div>
              <h4 className={styles.headingFive}>Call for inquiry</h4>
              <p className={styles.infoParagraph}>+1 123 1234</p>
            </div>
            <div>
              <h4 className={styles.headingFive}>Call for inquiry</h4>
              <p className={styles.infoParagraph}>+1 123 1234</p>
            </div>
          </span>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Inquiry;
