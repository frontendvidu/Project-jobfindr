import react from "react";
import styles from "./Article.module.css";
function Article(props) {
  return (
    <div>
      <img className={styles.articleImage} src={props.articleImage} alt="" />
      <p className={styles.articleDate}>{props.articleDate}</p>
      <h3 className={styles.articleHeading}>{props.articleHeading}</h3>
      <button className={styles.articleButton}>Read more</button>
    </div>
  );
}

export default Article;
