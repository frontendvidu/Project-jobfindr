import { useState } from "react";
import styles from "./AllJobs.module.css";
import JobFetch from "../JobFetch/JobFetch";
import SingleJob from "../SingleJob/SingleJob";
import FilteredJobs from "./FilteredJobs";
const AllJobs = () => {
  const [job, setjob] = useState([]);
  const [filteredjobs, setfilteredjobs] = useState([]);
  const getjobhandler = (jobsarray) => {
    setjob(jobsarray);
  };
  function setfilterjobhandler(fjobs) {
    setfilteredjobs(fjobs);
  }
  return (
    <div className={styles.outerAllJobs}>
      <JobFetch getArray={getjobhandler} />
      <div className={styles.leftAllJobs}>
        <FilteredJobs fetchedjobs={job} onfilter={setfilterjobhandler} />
      </div>
      <div className={styles.rightAllJobs}>
        <div className={styles.fetchedJobs}>
          {filteredjobs.length > 0
            ? filteredjobs.map((j) => {
                return (
                  <SingleJob
                    id={j.id}
                    jobtitle={j.title}
                    jobcompany={j.company}
                    category={j.category}
                    type={j.type}
                    salary={j.salary}
                    location={j.location}
                  />
                );
              })
            : job.map((j) => {
                return (
                  <SingleJob
                    id={j.id}
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
