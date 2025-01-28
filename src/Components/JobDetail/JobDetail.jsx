import { useEffect, useState } from "react";
import JobDetailLayout from "./JobDetailLayout";
import JobFetch from "../JobFetch/JobFetch";
function JobDetail() {
  const [jobdetails, setjobdetails] = useState([]);
  const [jobResponsibilities, setjobresponsibilities] = useState([]);
  const [skillFetched, setskillsFetched] = useState([]);
  function jobdetailhandler(jobdetails) {
    setjobdetails(jobdetails);
  }

  // Log jobdetails whenever it changes
  useEffect(() => {
    if (jobdetails[0]?.responsibilities) {
      console.log("Updated jobdetails:", jobdetails[0].responsibilities);
      const jobRespons = Object.values(
        jobdetails[0]?.responsibilities || {}
      ).filter((value) => value !== null);

      console.log(jobRespons);
      setjobresponsibilities(jobRespons);
    }
  }, [jobdetails]);

  useEffect(() => {
    if (jobdetails[0]?.skills) {
      const jobskills = Object.values(jobdetails[0].skills).filter(
        (value) => value !== null
      );
      console.log(jobskills, " This is the skills fetched");
      setskillsFetched(jobskills);
    }
  }, [jobdetails]);
  return (
    <>
      <JobFetch getArray={jobdetailhandler} />
      <JobDetailLayout
        titleJob={jobdetails[0]?.title}
        companyName={jobdetails[0]?.company}
        descriptionJob={jobdetails[0]?.description}
        responsibilitiesProp={jobResponsibilities.map((j) => (
          <li>{j}</li>
        ))}
        skills={skillFetched.map((s) => (
          <li>{s}</li>
        ))}
        type={jobdetails[0]?.type}
        category={jobdetails[0]?.category}
        experience={jobdetails[0]?.experience}
        degree={jobdetails[0]?.degree}
        salary={jobdetails[0]?.salary}
        location={jobdetails[0]?.location}
      />
    </>
  );
}

export default JobDetail;
