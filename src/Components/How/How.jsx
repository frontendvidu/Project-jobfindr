import React from "react";
import styles from "./How.module.css";
import acc from "../Images/acc.png";
function How() {
  return (
    <div className={styles.howOuter}>
      <h2 className={styles.headingTwo}>How it works</h2>
      <p className={styles.howPara}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        explicabo in aut praesentium modi quidem beatae hic ipsa! Modi ex optio
        quibusdam quisquam ipsam doloribus aliquam qui libero expedita maxime!
      </p>
      <div className={styles.howSteps}>
        <span className={styles.howStepsBox}>
          <img src={acc} />
          <h3>Create Account</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in
            sed, vitae ad cumque repudiandae blanditiis expedita labore officia
            culpa assumenda. Distinctio quae quidem dicta totam vero sunt
            perspiciatis enim.
          </p>
        </span>
        <span className={styles.howStepsBox}>
          <img src={acc} />
          <h3>Create Account</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in
            sed, vitae ad cumque repudiandae blanditiis expedita labore officia
            culpa assumenda. Distinctio quae quidem dicta totam vero sunt
            perspiciatis enim.
          </p>
        </span>
        <span className={styles.howStepsBox}>
          <img src={acc} />
          <h3>Create Account</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in
            sed, vitae ad cumque repudiandae blanditiis expedita labore officia
            culpa assumenda. Distinctio quae quidem dicta totam vero sunt
            perspiciatis enim.
          </p>
        </span>
        <span className={styles.howStepsBox}>
          <img src={acc} />
          <h3>Create Account</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in
            sed, vitae ad cumque repudiandae blanditiis expedita labore officia
            culpa assumenda. Distinctio quae quidem dicta totam vero sunt
            perspiciatis enim.
          </p>
        </span>
      </div>
    </div>
  );
}

export default How;
