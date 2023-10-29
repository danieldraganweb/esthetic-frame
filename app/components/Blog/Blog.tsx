"use client";
import React, { useState, useRef } from "react";
import styles from "./Blog.module.scss";
import { useBlogPosts } from "../../hooks/useAllBlogPosts";
import { BlogPostContent } from "../../types";
import Image from "next/image";
import ScrollHorizontalIcon from "../SvgHorizontalScrollIcon";
import Link from "next/link";

const BlogComponent: React.FC = () => {
  const { blogPosts } = useBlogPosts();

  const limitedBlogPosts = blogPosts.slice(0, 6);

  const [scrollPosition, setScrollPosition] = useState(0);
  const blogContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (blogContainerRef.current) {
      const snapWidth =
        blogContainerRef.current.scrollWidth /
        blogContainerRef.current.childElementCount;
      blogContainerRef.current.scrollLeft -= snapWidth + 16;
      setScrollPosition(blogContainerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (blogContainerRef.current) {
      const snapWidth =
        blogContainerRef.current.scrollWidth /
        blogContainerRef.current.childElementCount;
      blogContainerRef.current.scrollLeft += snapWidth + 16;
      setScrollPosition(blogContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className={styles["blog-page"]}>
      <div className={styles["blog-title-container"]}>
        <h1 className={styles["blog-title"]}>
          Entdecken Sie die neuesten Trends
        </h1>
        <p>Hier finden Sie die neuesten Trends und Tipps rund um das Thema</p>
        <p>Permanent Make-up und Microblading</p>
      </div>
      <div className={styles["blog-container"]} ref={blogContainerRef}>
        {limitedBlogPosts.map((post: BlogPostContent) => (
          <div key={post.id} className={styles.article}>
            <Link href={`/blog/${post.id}`} passHref>
              <Image
                loading="eager"
                src={post.fields?.image[0].url}
                alt={post.fields?.name}
                width={post.fields?.image[0].width}
                height={post.fields?.image[0].height}
                style={{
                  borderRadius: "0.5em 0.5em 0 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
                sizes="(max-width: 600px) 100vw, 600px"
              />
              <h2 className={styles["article-title"]}>{post.fields?.name}</h2>
              <p className={styles["article-date"]}>
                Published on {post.fields?.published}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles["blog-scroll-container"]}>
        <button
          className={styles["blog-scroll-button"]}
          onClick={handleScrollLeft}
          disabled={scrollPosition === 0}
        >
          {"<"}
        </button>
        <ScrollHorizontalIcon />
        <button
          className={styles["blog-scroll-button"]}
          onClick={handleScrollRight}
          disabled={
            !!(
              blogContainerRef.current &&
              scrollPosition ===
                blogContainerRef.current.scrollWidth -
                  blogContainerRef.current.clientWidth
            )
          }
        >
          {">"}
        </button>
      </div>
      <div className={styles["blog-btn-container"]}>
        <Link href="/blog" passHref>
          <button className={styles["blog-button"]}>
            Alle Beiträge anzeigen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
