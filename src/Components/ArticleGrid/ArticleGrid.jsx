import styles from "./ArticleGrid.module.css";
function ArticleGrid(props) {
  return (
    <div className={styles.articleBackground}>
      <img className={styles.articleImage} src={props.articleImage} alt="" />
      <p className={styles.articleDate}>{props.articleDate}</p>
      <h3 className={styles.articleHeading}>{props.articleHeading}</h3>
      <button className={styles.articleButton}>Read more</button>
    </div>
  );
}

export default ArticleGrid;
