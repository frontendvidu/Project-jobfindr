import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
  const [check, setCheck] = useState(false);

  function handleAccordion() {
    setCheck((check) => !check);
  }
  return (
    <div
      className={check ? styles.accordionTabOpen : styles.accordionTabClosed}
    >
      <span className={styles.accordionNumber}>{props.accountNum}</span>
      <span className={styles.accordionInfo}>
        <span className={styles.headingSpan}>
          <h3 className={styles.accordionTitle}>{props.accordTitle}</h3>
          <button
            className={check ? styles.expandBtnOpened : styles.expandBtnClose}
            onClick={handleAccordion}
          >
            {check ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </button>
        </span>
        {check && <p className={styles.accordionPara}>{props.accordDescrip}</p>}
      </span>
      {console.log("I am rendered in Accordion")}
    </div>
  );
}

export default Accordion;
