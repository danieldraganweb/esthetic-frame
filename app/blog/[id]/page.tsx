"use client";
import React from "react";
import styles from "../blog.module.scss";
import { useBlogPosts } from "../../hooks/useAllBlogPosts";
import { BlogPostContent, BlogPost } from "../../types";
import Image from "next/image";
import { useParams } from "next/navigation";

const Post = () => {
  const { blogPosts, loading } = useBlogPosts();
  const params = useParams();

  const post = blogPosts.find((p) => p.id === params.id);
  return (
    <div className={styles["blog-page"]}>
      {loading && (
        <div className={styles["loading"]}>
          <p>Loading...</p>
        </div>
      )}
      <h1 className={styles["blog-title"]}>Blog Article</h1>
      {/* <p> {blogPosts.length} posts</p> */}
      <div className={styles["blog-container"]}>
        <div key={post?.id} className={styles.article}>
          <Image
            loading="lazy"
            src={post?.fields?.image[0].url ?? ""}
            alt={post?.fields?.name ?? ""}
            width={post?.fields?.image[0].width}
            height={post?.fields?.image[0].height}
            layout="responsive"
            style={{
              borderRadius: "0.5em 0.5em 0 0",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            sizes="(max-width: 1100px) 100vw, 600px"
          />

          <h2 className={styles["article-title"]}>{post?.fields?.name}</h2>

          <p className={styles["article-date"]}>
            Published on {post?.fields?.published}
          </p>
          <p className={styles["article-content"]}>
            {post?.fields?.["blog-content"]}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Post;
