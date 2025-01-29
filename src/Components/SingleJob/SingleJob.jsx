import styles from "./SingleJob.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleJob = (props) => {
  return (
    <div className={styles.jobOuter}>
      <div>
        <h3 className={styles.jobTitle}>{props.jobtitle}</h3>
        <p className={styles.jobCompany}>{props.jobcompany}</p>
      </div>
      <div className={styles.jobInfoDiv}>
        <span className={styles.jobInfoSpan}>
          <p className={styles.jobInfo}>
            <p className={styles.jobInfo}>
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ color: "#309689", marginRight: "8px" }}
              />
              {props.category}
            </p>
          </p>
          <p className={styles.jobInfo}>
            <FontAwesomeIcon icon={faClock} style={{ color: "#309689" }} />
            {props.type}
          </p>
          <p className={styles.jobInfo}>
            <FontAwesomeIcon icon={faWallet} style={{ color: "#309689" }} />
            {props.salary}
          </p>
          <p className={styles.jobInfo}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#309689" }}
            />
            {props.location}
          </p>
        </span>
        <Link to={`/jobs/${props.id}`}>
          <button className={styles.serviceBtn}>Job Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleJob;

//<FontAwesomeIcon icon={faBriefcase} style={{color: "#309689",}} />
//<FontAwesomeIcon icon={faClock} style={{color: "#309689",}} />
//<FontAwesomeIcon icon={faWallet} style={{color: "#309689",}} />
//<FontAwesomeIcon icon={faLocationDot} style={{color: "#309689",}} /> />
