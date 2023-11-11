import React from "react";
import Image from "next/image";
import styles from "./GoogleReviews.module.scss";

const images = ["Review 1.svg", "Review 2.svg", "Review 3.svg"];

const GoogleReviews = () => {
  console.log("GoogleReviews");
  return (
    <div className={styles["main"]}>
      <h1 className={styles["google-reviews-title"]}>Zufriedene Kunden</h1>
      <p>Lesen Sie, was unsere Kunden über uns sagen!</p>
      <div className={styles["google-reviews-container"]}>
        <div className={styles["google-review-item"]}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={`/${image}`}
              alt={`Image ${index}`}
              width={300}
              height={450}
              className={styles["google-review-image"]}
              layout="responsive"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
