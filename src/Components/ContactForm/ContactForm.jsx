import { useState } from "react";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  function formHandler(e) {
    e.preventDefault();
    const inquiry = {
      firstName: fname,
      lastName: lname,
      emailAddress: email,
      messageSent: message,
    };

    const sendRequest = async () => {
      const requestSent = await fetch(
        "https://jobfindr-16bf6-default-rtdb.firebaseio.com/inquiry.json",
        {
          method: "POST",
          body: JSON.stringify(inquiry),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseFromPost = await requestSent.json();
      console.log(responseFromPost);
    };

    sendRequest();

    setfname("");
    setlname("");
    setemail("");
    setmessage("");
  }

  function handleOnchangeF(e) {
    setfname(e.target.value);
  }
  function handleOnchangeL(e) {
    setlname(e.target.value);
  }
  function handleOnchangeE(e) {
    setemail(e.target.value);
  }
  function handleOnchangeM(e) {
    setmessage(e.target.value);
  }
  return (
    <div className={styles.contactForm}>
      <span>
        <h3 className={styles.formHeading}>Contact Info</h3>
        <p className={styles.formParagraph}>
          We will get back to you. We do REPLY
        </p>
      </span>
      <form onSubmit={formHandler} action="" className={styles.formStylings}>
        <div className={styles.formHorizontalSection}>
          <div>
            <label className={styles.formLabel} htmlFor="fname">
              First Name
            </label>
            <input
              value={fname}
              onChange={handleOnchangeF}
              id="fname"
              className={styles.formInput}
              type="text"
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="lname">
              Last Name
            </label>
            <input
              value={lname}
              onChange={handleOnchangeL}
              id="lname"
              className={styles.formInput}
              type="text"
            />
          </div>
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="emailaddress">
            Email Address
          </label>
          <input
            value={email}
            onChange={handleOnchangeE}
            id="emailaddress"
            className={`${styles.formInput} ${styles.formInputEmail}`}
            type="email"
          />
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="themessage">
            Message
          </label>
          <textarea
            value={message}
            onChange={handleOnchangeM}
            id="themessage"
            className={styles.formInput}
            name=""
          ></textarea>
        </div>
        <button type="submit" className={styles.formBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
