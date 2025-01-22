import React from "react";
import styles from "../BlogGrid/BlogGrid.module.css";
import ArticleGrid from "../ArticleGrid/ArticleGrid";
import articleGridData from "../ArticleGrid/article-grid-data";

function BlogGrid() {
  return (
    <section className={styles.sectionBlog}>
      <h2 className={styles.headingBlog}>News and Blog</h2>
      <p className={styles.paraBlog}>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
        tristique in dolor
      </p>
      <div className={styles.articlesBlog}>
        {articleGridData.map((x) => {
          return (
            <ArticleGrid
              articleImage={x.articleImg}
              articleDate={x.articleDte}
              articleHeading={x.articleHdg}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BlogGrid;
