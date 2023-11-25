"use client";
import React, { useState, useEffect } from "react";
import styles from "./blog.module.scss";
import { useBlogPosts } from "../hooks/useAllBlogPosts";
import { BlogPostContent } from "../types";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";

const Blog = () => {
  const { blogPosts } = useBlogPosts();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogPosts.length > 0) {
      setLoading(false);
    }
  }, [blogPosts]);

  return (
    <div className={styles["blog-page"]}>
      <div className={styles["blog-header"]} id="blog-header">
        <h1 className={styles["blog-title"]} id="blog-title">
          Blog
        </h1>
        <p>{blogPosts.length} Artikel</p>
        <p>
          Hier finden Sie die neuesten Trends und Tipps rund um das Permanent
          Make-up und Microblading
        </p>
      </div>
      <div className={styles["blog-container"]}>
        {blogPosts.map((post: BlogPostContent) => (
          <div key={post.id} className={styles.article}>
            <Link href={`/blog/${post.id}`} passHref>
              <Image
                unoptimized={true}
                // loading="lazy"
                src={post.fields?.image[0].url}
                alt={post.fields?.name}
                width={post.fields?.image[0].width}
                height={post.fields?.image[0].height}
                // layout="responsive"
                className={`${styles["image"]}
                 ${styles["transition-opacity"]} ${styles["opacity-0"]} ${
                  styles["transition-timing-function"]
                } ${styles["duration-300"]} ${styles["ease-in-out"]}
                        ${
                          loading ? styles["opacity-0"] : styles["opacity-100"]
                        }`}
                onLoad={() => setLoading(false)}
                style={{
                  borderRadius: "0.5em 0.5em 0 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                // sizes="(max-width: 500px) 100vw, 600px"
              />
              <h2 className={styles["article-title"]}>{post.fields?.name}</h2>
              <p className={styles["article-date"]}>
                Published on {post.fields?.published}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
