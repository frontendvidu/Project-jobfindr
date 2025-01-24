import { useEffect, useState } from "react";
import styles from "./Jobs.module.css";
import SingleJob from "../SingleJob/SingleJob";
function Jobs() {
  const [job, setjob] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jobfindr-16bf6-default-rtdb.firebaseio.com/jobs.json"
        );

        const data = await response.json();

        console.log("this is the data coming from firebase ", data);

        const jobsarray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        console.log("this the job array", jobsarray);
        setjob(jobsarray);
      } catch (error) {
        console.log("There was a problem with the fetch operation:", error);
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    console.log("this the job array state", job);
  }, [job]);

  return (
    <div className={styles.outerCategory}>
      <div className={styles.innerText}>
        <span>
          <h2 className={styles.categoryTitle}>Recent Jobs Available</h2>
          <p className={styles.categoryTag}>
            The latest available jobs for you at your own finger tip
          </p>
        </span>
        <button className={styles.articleButton}>View all</button>
      </div>
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
  );
}

export default Jobs;

//https://jobfindr-16bf6-default-rtdb.firebaseio.com/
