import { useState } from "react";
import styles from "./Message.module.css";
const Message = () => {
  const [senderName, setsenderName] = useState("");
  const [senderEmail, setsenderEmail] = useState("");
  const [senderPhone, setsenderPhone] = useState("");
  const [senderMessage, setsenderMessage] = useState("");

  function formSubmithandler(e) {
    e.preventDefault();
    const newMessage = {
      name: senderName,
      email: senderEmail,
      phone: senderPhone,
      message: senderMessage,
    };

    const onSubmitHandler = async () => {
      const fetchhandler = await fetch(
        "https://jobfindr-16bf6-default-rtdb.firebaseio.com/inquiry.json",
        {
          method: "POST",
          body: JSON.stringify(newMessage),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseRecieved = await fetchhandler.json();

      console.log(responseRecieved);
    };
    onSubmitHandler();
    setsenderEmail("");
    setsenderMessage("");
    setsenderName("");
    setsenderPhone("");
  }

  return (
    <div className={styles.outerMessage}>
      <form action="" onSubmit={formSubmithandler} className={styles.formStyle}>
        <h3 className={styles.h3Message}>Send Us Message</h3>
        <input
          className={styles.inputMessage}
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setsenderName(e.target.value);
          }}
          value={senderName}
        />
        <input
          className={styles.inputMessage}
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            setsenderEmail(e.target.value);
          }}
          value={senderEmail}
        />
        <input
          className={styles.inputMessage}
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => {
            setsenderPhone(e.target.value);
          }}
          value={senderPhone}
        />
        <textarea
          className={styles.textareaMessage}
          placeholder="Your Message"
          onChange={(e) => {
            setsenderMessage(e.target.value);
          }}
          value={senderMessage}
        ></textarea>
        <button className={styles.formBtn} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Message;
