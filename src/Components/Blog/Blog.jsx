import React from "react";
import styles from "./Blog.module.css";
import Article from "../Article/Article";
import articleData from "../Article/article-data";

function Blog() {
  return (
    <section className={styles.sectionBlog}>
      <h2 className={styles.headingBlog}>News and Blog</h2>
      <p className={styles.paraBlog}>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
        tristique in dolor
      </p>
      <div className={styles.articlesBlog}>
        {articleData.map((x) => {
          return (
            <Article
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

export default Blog;
