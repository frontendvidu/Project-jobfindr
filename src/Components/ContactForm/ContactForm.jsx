import styles from "./ContactForm.module.css";
const contactForm = () => {
  return (
    <div className={styles.contactForm}>
      <span>
        <h3 className={styles.formHeading}>Contact Info</h3>
        <p className={styles.formParagraph}>
          We will get back to you. We do REPLY
        </p>
      </span>
      <form action="" className={styles.formStylings}>
        <div className={styles.formHorizontalSection}>
          <div>
            <label className={styles.formLabel} htmlFor="">
              First Name
            </label>
            <input className={styles.formInput} type="text" />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="">
              Last Name
            </label>
            <input className={styles.formInput} type="text" />
          </div>
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="">
            Email Address
          </label>
          <input
            className={`${styles.formInput} ${styles.formInputEmail}`}
            type="email"
          />
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="">
            Message
          </label>
          <textarea className={styles.formInput} name="" id=""></textarea>
        </div>
        <button className={styles.formBtn}>Send Message</button>
      </form>
    </div>
  );
};

export default contactForm;
