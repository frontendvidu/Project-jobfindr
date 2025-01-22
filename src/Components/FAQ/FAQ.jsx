import React from "react";
import styles from "./FAQ.module.css";
import faqData from "./faqData";
import Accordion from "../Accordion/Accordion";
function FAQ() {
  return (
    <div className={styles.outerFAQ}>
      <h2 className={styles.headingFAQ}>Frequently Asked Questions</h2>
      <p className={styles.paraFAQ}>
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
      </p>
      <div className={styles.accordionFAQ}>
        {faqData.map((item, i) => {
          return (
            <Accordion
              key={item.accNumber}
              accountNum={item.accNumber}
              accordTitle={item.accTitle}
              accordDescrip={item.descrip}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
