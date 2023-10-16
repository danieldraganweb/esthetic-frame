"use client";
import React from "react";
import styles from "../[id]/id.module.scss";
import { useBlogPosts } from "../../hooks/useAllBlogPosts";
// import { BlogPostContent, BlogPost } from "../../types";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import Link from "next/link";
import Contact from "@/app/components/Contact/Contact";

const Post = () => {
  const { blogPosts, loading } = useBlogPosts();
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  const titles = blogPosts.map((post) => post.fields?.name);
  return (
    <>
      <main className={styles["blog-main"]}>
        <div className={styles["blog-page"]}>
          {loading && (
            <div className={styles["loading"]}>
              <Loading />
            </div>
          )}

          {/* <p> {blogPosts.length} posts</p> */}
          <div className={styles["blog-container"]}>
            <section>
              <div className={styles["blog-hero"]}>
                <Image
                  loading="eager"
                  src={post?.fields?.image[0].url ?? ""}
                  alt={post?.fields?.name ?? ""}
                  width={post?.fields?.image[0].width}
                  height={post?.fields?.image[0].height}
                  // layout="lazy"
                  style={{
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                  sizes="(max-width: 1100px) 100vw, 600px"
                />
                <h2 className={styles["article-title"]}>
                  {post?.fields?.name}
                </h2>
              </div>
            </section>

            <div key={post?.id} className={styles.article}>
              <p className={styles["article-date"]}>
                Published on {post?.fields?.published}
              </p>
              <p className={styles["article-content"]}>
                {post?.fields?.["blog-content"]}
              </p>
            </div>
          </div>
        </div>
        <div className={styles["blog-sidebar"]}>
          <h2>All Blog Posts</h2>
          <ul>
            {titles.map((title, index) => (
              <Link href={`/blog/${blogPosts[index].id}`} passHref key={index}>
                <li className={styles["blog-sidebar-item"]}>
                  <h1 className={styles["blog-sidebar-title"]}>
                    #{index + 1}. {title}
                  </h1>
                  <p className={styles["blog-sidebar-date"]}>
                    Published on {blogPosts[index].fields?.published}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
      <div className={`${styles["custom-contact"]}`}>
        <Contact />
      </div>
    </>
  );
};
export default Post;
