import { useEffect } from "react";

const JobFetch = (props) => {
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://jobfindr-16bf6-default-rtdb.firebaseio.com/jobs.json"
      );
      const data = await response.json();
      const jobsArray = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      props.getArray(jobsArray);
    };

    fetchdata();
  }, []);
};

export default JobFetch;
