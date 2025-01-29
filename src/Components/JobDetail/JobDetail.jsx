import { useEffect, useState } from "react";
import JobDetailLayout from "./JobDetailLayout";
import JobFetch from "../JobFetch/JobFetch";
import { useParams } from "react-router-dom";
function JobDetail() {
  const [selectedJob, setselectedJob] = useState({});
  const { jobID } = useParams();
  const [jobdetails, setjobdetails] = useState([]);
  const [jobResponsibilities, setjobresponsibilities] = useState([]);
  const [skillFetched, setskillsFetched] = useState([]);
  function jobdetailhandler(jobdetails) {
    setjobdetails(jobdetails);
  }

  useEffect(() => {
    if (jobdetails.length > 0) {
      const selectedjobarray = jobdetails.filter((value) => value.id === jobID);

      if (selectedjobarray) {
        setselectedJob(selectedjobarray[0]);
      }
    }
  }, [jobdetails, jobID]);

  useEffect(() => {
    if (selectedJob?.responsibilities) {
      const jobRespons = Object.values(
        selectedJob.responsibilities || {}
      ).filter((value) => value !== null);
      setjobresponsibilities(jobRespons);
    }
  }, [selectedJob]);

  useEffect(() => {
    if (selectedJob?.skills) {
      const jobskills = Object.values(selectedJob.skills).filter(
        (value) => value !== null
      );
      console.log(jobskills, " This is the skills fetched");
      setskillsFetched(jobskills);
    }
  }, [selectedJob]);
  return (
    <>
      <JobFetch getArray={jobdetailhandler} />
      <JobDetailLayout
        idJob={selectedJob.id}
        titleJob={selectedJob.title}
        companyName={selectedJob.company}
        descriptionJob={selectedJob.description}
        responsibilitiesProp={jobResponsibilities.map((j) => (
          <li>{j}</li>
        ))}
        skills={skillFetched.map((s) => (
          <li>{s}</li>
        ))}
        type={selectedJob.type}
        category={selectedJob.category}
        experience={selectedJob.experience}
        degree={selectedJob.degree}
        salary={selectedJob.salary}
        location={selectedJob.location}
      />
    </>
  );
}

export default JobDetail;
