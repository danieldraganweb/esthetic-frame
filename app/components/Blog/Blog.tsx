import styles from "./Blog.module.scss";
import { useBlogPosts } from "../../hooks/useAllBlogPosts";
import { BlogPostContent } from "../../types";
import Image from "next/image";
import ScrollHorizontalIcon from "../SvgHorizontalScrollIcon";
import Link from "next/link";
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";

const BlogComponent: React.FC<{ className?: string }> = () => {
  const { blogPosts } = useBlogPosts();

  //filter the images in chronological order
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    return (
      new Date(b.fields?.published ?? "").getTime() -
      new Date(a.fields?.published ?? "").getTime()
    );
  });
  const limitedBlogPosts = sortedBlogPosts.slice(0, 12);

  const handleScrollLeft = () => {
    const container = document.getElementById("blog-scroll-container");
    if (container) {
      const snapWidth = container.scrollWidth / container.childElementCount;
      container.scrollLeft -= snapWidth + 16;
    }
  };

  const handleScrollRight = () => {
    const container = document.getElementById("blog-scroll-container");
    if (container) {
      const snapWidth = container.scrollWidth / container.childElementCount;
      container.scrollLeft += snapWidth + 16;
    }
  };

  return (
    <>
      <main className={styles["blog-main"]}>
        <div className={styles["blog-page"]}>
          <div className={styles["blog-title-container"]}>
            <h1 className={styles["blog-title"]}>
              Entdecken Sie die neuesten Trends
            </h1>
          </div>
          <div className={styles["blog-container"]} id="blog-scroll-container">
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
                    blurDataURL="/team-member-1.jpg"
                    placeholder="blur"
                    unoptimized={true}
                    // sizes="(max-width: 1100px) 100vw, 600px"
                  />
                  <h2 className={styles["article-title"]}>
                    {post.fields?.name}
                  </h2>
                  <p className={styles["article-date"]}>
                    Published on {post.fields?.published}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles["blog-scroll-btn-container"]}>
            <button
              className={styles["blog-scroll-button"]}
              onClick={handleScrollLeft}
              aria-label="Scrollen Sie nach links"
            >
              <span>
                <LeftArrow />
              </span>
            </button>
            <ScrollHorizontalIcon />
            <button
              className={styles["blog-scroll-button"]}
              onClick={handleScrollRight}
              aria-label="Scrollen Sie nach rechts"
            >
              <span>
                <RightArrow />
              </span>
            </button>
          </div>
          <div className={styles["blog-btn-container"]}>
            <Link href="/blog" passHref>
              <button
                className={styles["blog-button"]}
                aria-label="Alle Beiträge anzeigen"
              >
                Alle Beiträge anzeigen
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogComponent;
