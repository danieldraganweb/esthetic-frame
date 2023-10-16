"use client";
import React from "react";
import styles from "./blog.module.scss";
import { useBlogPosts } from "../hooks/useAllBlogPosts";
import { BlogPostContent, BlogPost } from "../types";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const { blogPosts } = useBlogPosts();

  // const [loading, setLoading] = useState(true);
  console.log(blogPosts);
  return (
    <div className={styles["blog-page"]}>
      <h1 className={styles["blog-title"]}>Blog</h1>
      <div className={styles["blog-container"]}>
        {blogPosts.map((post: BlogPostContent) => (
          <div key={post.id} className={styles.article}>
            <Link href={`/blog/${post.id}`} passHref>
              <Image
                loading="lazy"
                src={post.fields?.image[0].url}
                alt={post.fields?.name}
                width={post.fields?.image[0].width}
                height={post.fields?.image[0].height}
                // layout="responsive"
                style={{
                  borderRadius: "0.5em 0.5em 0 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                sizes="(max-width: 1100px) 100vw, 600px"
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
