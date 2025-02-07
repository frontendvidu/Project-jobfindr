import { useEffect, useState } from "react";
import styles from "./AllJobs.module.css";
const FilteredJobs = (props) => {
  const [titleSearch, settitleSearch] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [jobExperience, setJobExperience] = useState([]);
  const fetchedJobs = props.fetchedjobs;
  useEffect(() => {
    const fjobs = fetchedJobs.filter(
      (item) =>
        item.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
        item.location
          .toLowerCase()
          .split(",")[0]
          .trim()
          .includes(location.toLowerCase()) &&
        (categories.length === 0 ||
          categories.includes(item.category.toLowerCase().trim())) &&
        (jobType.length === 0 ||
          jobType.includes(item.type.toLowerCase().trim())) &&
        (jobExperience.length === 0 ||
          jobExperience.includes(item.experience.toLowerCase().trim()))
    );
    props.onfilter(fjobs);
  }, [fetchedJobs, titleSearch, location, categories, jobType, jobExperience]);

  const handleCategories = (e) => {
    const { value, checked } = e.target;
    setCategories((prev) =>
      checked
        ? [...prev, value.toLowerCase().trim()]
        : prev.filter((categ) => categ !== value.toLowerCase().trim())
    );
  };

  const handleJobType = (e) => {
    const { value, checked } = e.target;
    setJobType((prev) =>
      checked
        ? [...prev, value.toLowerCase().trim()]
        : prev.filter((type) => type !== value.toLowerCase().trim())
    );
  };

  const handleExperience = (e) => {
    const { value, checked } = e.target;
    setJobExperience((prev) =>
      checked
        ? [...prev, value.toLowerCase().trim()]
        : prev.filter((exp) => exp !== value.toLowerCase().trim())
    );
  };

  return (
    <div>
      <form action="" className={styles.leftForm}>
        {/* Title = DONE*/}
        <div className={styles.divForm}>
          <label className={styles.formLabels} htmlFor="titleSearch">
            Search by Job Title
          </label>
          <input
            onChange={(e) => settitleSearch(e.target.value)}
            id="titleSearch"
            name="titleSearch"
            className={styles.inputForm}
            type="search"
          />
        </div>
        {/* Location = DONE */}
        <div className={styles.divForm}>
          <label className={styles.formLabels} htmlFor="locationDrp">
            Location
          </label>
          <select
            id="locationDrp"
            className={styles.inputForm}
            name="locationSearch"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
            <option value="Boston">Boston</option>
          </select>
        </div>
        {/* Category = DONE */}
        <div className={styles.divForm}>
          <h2 className={styles.formLabels}>Category</h2>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxCommerce"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxCommerce"
              type="checkbox"
              name="category"
              value="Commerce"
              onChange={handleCategories}
            />
            Commerce
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxTelecommunications"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxTelecommunications"
              type="checkbox"
              name="category"
              value="Media"
              onChange={handleCategories}
            />
            Media
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxHoteltourism"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxHoteltourism"
              type="checkbox"
              name="category"
              value="Hotels & Tourism"
              onChange={handleCategories}
            />
            Hotel & Tourism
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxEducation"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxEducation"
              type="checkbox"
              name="category"
              value="Construction"
              onChange={handleCategories}
            />
            Construction
          </label>
        </div>
        {/* Job type = DONE */}
        <div className={styles.divForm}>
          <h2 className={styles.formLabels}>Job Type</h2>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxFulltime"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxFulltime"
              type="checkbox"
              name="job_type"
              value="Full time"
              onChange={handleJobType}
            />
            Full time
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxParttime"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxParttime"
              type="checkbox"
              name="job_type"
              value="Part time"
              onChange={handleJobType}
            />
            Part time
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxFreelance"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxFreelance"
              type="checkbox"
              name="job_type"
              value="Freelance"
              onChange={handleJobType}
            />
            Freelance
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxSeasonal"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxSeasonal"
              type="checkbox"
              name="job_type"
              value="Seasonal"
              onChange={handleJobType}
            />
            Seasonal
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxFixed"
          >
            <input
              id="formCheckboxFixed"
              type="checkbox"
              name="job_type"
              value="Fixed"
              onChange={handleJobType}
            />
            Fixed
          </label>
        </div>
        {/* Experience */}
        <div className={styles.divForm}>
          <h2 className={styles.formLabels}>Experience</h2>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxNoexperience"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxNoexperience"
              type="checkbox"
              name="experience"
              value="No Experience"
              onChange={handleExperience}
            />
            No Experience
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxIntermediate"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxIntermediate"
              type="checkbox"
              name="experience"
              value="Intermediate"
              onChange={handleExperience}
            />
            Intermediate
          </label>
          <label
            className={styles.categoryCheckboxLabel}
            htmlFor="formCheckboxExpert"
          >
            <input
              className={styles.formCheckbox}
              id="formCheckboxExpert"
              type="checkbox"
              name="experience"
              value="Expert"
              onChange={handleExperience}
            />
            Expert
          </label>
        </div>
        {/* date posted */}
        {/* salary */}
        {/* tags */}
      </form>
    </div>
  );
};

export default FilteredJobs;
