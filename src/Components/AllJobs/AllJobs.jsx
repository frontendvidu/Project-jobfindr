import { useState } from "react";
import styles from "./AllJobs.module.css";
import JobFetch from "../JobFetch/JobFetch";
import SingleJob from "../SingleJob/SingleJob";
const AllJobs = () => {
  const [job, setjob] = useState([]);
  const getjobhandler = (jobsarray) => {
    setjob(jobsarray);
  };
  return (
    <div className={styles.outerAllJobs}>
      <JobFetch getArray={getjobhandler} />
      <div className={styles.leftAllJobs}>{/* job filter section */}</div>
      <div className={styles.rightAllJobs}>
        <div className={styles.fetchedJobs}>
          {job.map((j) => {
            return (
              <SingleJob
                jobtitle={j.title}
                jobcompany={j.company}
                category={j.category}
                type={j.type}
                salary={j.salary}
                location={j.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
