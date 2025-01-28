import styles from "./JobDetailLayout.module.css";
import MapJob from "../Map/MapJob";
import Message from "../Message/Message";
function JobDetailLayout(props) {
  return (
    <div className={styles.outerlayout}>
      <div className={styles.headingLayoutSection}>
        <h2 className={styles.categoryTitle}>{props.titleJob}</h2>
        <p className={styles.categoryTag}>{props.companyName}</p>
      </div>
      <div className={styles.jobDescriptionSpans}>
        <span className={styles.leftSpanDescription}>
          <div>
            <h4 className={styles.heading4Detail}>Job Description</h4>
            <p className={styles.paragraphDetail}>{props.descriptionJob}</p>
          </div>
          <div>
            <h4 className={styles.heading4Detail}>Key Responsibilities</h4>
            <p className={styles.paragraphDetail}>
              <ul>{props.responsibilitiesProp}</ul>
            </p>
          </div>
          <div>
            <h4 className={styles.heading4Detail}>Proffessional Skills</h4>
            <p className={styles.paragraphDetail}>
              <ul>{props.skills}</ul>
            </p>
          </div>
          <span>
            <h5 className={styles.heading5Detail}>Share Job:</h5>
            {/* icons */}
            {/* icons */}
            {/* icons */}
          </span>
        </span>
        <span className={styles.rightSpanDescription}>
          <div className={styles.rightJobOverview}>
            <h5 className={styles.headingJobOverview}>Job Overview</h5>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Job Type</h6>
              <p className={styles.paraJobOverview}>{props.type}</p>
            </div>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Category</h6>
              <p className={styles.paraJobOverview}>{props.category}</p>
            </div>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Experience</h6>
              <p className={styles.paraJobOverview}>{props.experience}</p>
            </div>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Degree</h6>
              <p className={styles.paraJobOverview}>{props.degree}</p>
            </div>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Offered Salary</h6>
              <p className={styles.paraJobOverview}>{props.salary}</p>
            </div>
            <div className={styles.joboversection}>
              <h6 className={styles.subheadingJobOverview}>Location</h6>
              <p className={styles.paraJobOverview}>{props.location}</p>
            </div>
            <div className={styles.mapjoboversection}>
              <MapJob />
            </div>
          </div>
          <div>
            <Message />
          </div>
        </span>
      </div>
    </div>
  );
}

export default JobDetailLayout;
