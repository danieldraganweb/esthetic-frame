"use client";
import React from "react";
import styles from "./blog.module.scss";
import { useBlogPosts } from "../hooks/useAllBlogPosts";
import { BlogPostContent } from "../types";
import Image from "next/image";

const Blog = () => {
  const { blogPosts } = useBlogPosts();
  // const [loading, setLoading] = useState(true);
  // console.log(blogPosts);
  return (
    <div className={styles["blog-page"]}>
      <h1>Blog</h1>
      <p> {blogPosts.length} posts</p>
      {/* <h1>Discover the latest jewlery trends on our blog</h1> */}
      <div className={styles["blog-container"]}>
        {blogPosts.map((post: BlogPostContent) => (
          <div key={post.id} className={styles.article}>
            <Image
              loading="lazy"
              src={post.fields?.image[0].url}
              alt={post.fields?.name}
              width={post.fields?.image[0].width}
              height={post.fields?.image[0].height}
              layout="responsive"
              style={{
                borderRadius: "0.5em 0.5em 0 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h2 className={styles["article-title"]}>{post.fields?.name}</h2>
            <p className={styles["article-date"]}>
              Published on {post.fields?.published}
            </p>
            <p className={styles["article-content"]}>
              {post.fields?.["blog-content"]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
