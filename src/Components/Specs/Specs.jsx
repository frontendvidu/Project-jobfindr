import React, { useState, useRef, useEffect } from "react";
import I1 from "../../Images/Icon+bg.png";
import I2 from "../../Images/Icon+bg-1.png";
import I3 from "../../Images/Icon+bg-2.png";
import styles from "./Specs.module.css";

function Specs() {
  const [jobCount, setJobCount] = useState(1000);
  const [candidateCount, setCandidateCount] = useState(1000);
  const [companyCount, setCompanyCount] = useState(1000);
  const timerJob = useRef(null);
  const timerCandidate = useRef(null);
  const timerCompanies = useRef(null);
  // let timer = setInterval(increment, 100);
  useEffect(() => {
    timerJob.current = setInterval(incrementJobs, 10);
    timerCandidate.current = setInterval(incrementCandidates, 10);
    timerCompanies.current = setInterval(incrementCompanies, 10);

    return () => {
      clearInterval(timerJob.current);
      clearInterval(timerCandidate.current);
      clearInterval(timerCompanies.current);
    }; //clean up
  }, []);

  function incrementJobs() {
    setJobCount((prev) => {
      prev += 250;
      if (prev >= 25750) {
        clearInterval(timerJob.current);
      }
      return prev;
    });
  }
  function incrementCandidates() {
    setCandidateCount((prev) => {
      prev += 250;
      if (prev >= 25750) {
        clearInterval(timerCandidate.current);
      }
      return prev;
    });
  }
  function incrementCompanies() {
    setCompanyCount((prev) => {
      prev += 250;
      if (prev >= 25750) {
        clearInterval(timerCompanies.current);
      }
      return prev;
    });
  }
  return (
    <div className={styles.specs}>
      <span className={styles.specSpan}>
        <img src={I1} alt="" />
        <div>
          <p className={styles.price}>{jobCount}</p>
          <p className={styles.tag}>Jobs</p>
        </div>
      </span>
      <span className={styles.specSpan}>
        <img src={I2} alt="" />
        <div>
          <p className={styles.price}>{candidateCount}</p>
          <p className={styles.tag}>Candidates</p>
        </div>
      </span>
      <span className={styles.specSpan}>
        <img src={I3} alt="" />
        <div>
          <p className={styles.price}>{companyCount}</p>
          <p className={styles.tag}>Companies</p>
        </div>
      </span>
    </div>
  );
}

export default Specs;
