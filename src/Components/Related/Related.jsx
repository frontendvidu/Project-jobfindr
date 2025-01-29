import { useState } from "react";
import JobFetch from "../JobFetch/JobFetch";
import styles from "./Related.module.css";
import SingleJob from "../SingleJob/SingleJob";
const Related = () => {
  const [jobs, setJobs] = useState([]);

  function getJobsHandler(array) {
    setJobs(array);
  }
  const category = jobs[0]?.category;
  console.log(category, " === this is the category selected ");
  const filteredArray = jobs.filter(
    (value, index) => index !== 0 && value.category === category
  );
  console.log(filteredArray, " === this is the filtered array ");

  return (
    <div className={styles.outerRelated}>
      <JobFetch getArray={getJobsHandler} />
      <h2 className={styles.categoryTitle}>Related Jobs</h2>
      <p className={styles.categoryTag}>
        Here are some other jobs you might be inteered in
      </p>
      <div className={styles.fetchedJobSection}>
        {filteredArray.map((j) => {
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
  );
};

export default Related;
// const relatedJobs = jobs.filter(
//   (job, index) => index !== 0 && job.category === category
// );
// console.log(relatedJobs, " === this is the related other array");
