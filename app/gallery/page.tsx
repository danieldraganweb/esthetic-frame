"use client";
import React, { useState } from "react";
import styles from "./gallery.module.scss";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { GalleryImage } from "../types";
import Image from "next/image";
import SvgHorizontalScrollIcon from "../components/SvgHorizontalScrollIcon";

type Props = {};

function Gallery(props: Props) {
  const [category, setCategory] = useState<string | undefined>();
  const { images } = useGalleryImages();

  const categories = Array.from(
    new Set(images.map((image: GalleryImage) => image.fields.Category))
  );

  return (
    <div className={styles["gallery-page"]}>
      <div className={styles["gallery-container"]}>
        <h1 className={styles["gallery-title"]}>Gallery</h1>
        <div className={styles["category-buttons"]}>
          <button onClick={() => setCategory(undefined)}>All</button>
          {categories.map((category) => (
            <button key={category} onClick={() => setCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className={styles["horizontal-scroll-icon"]}>
          <SvgHorizontalScrollIcon />
        </div>
        <div className={styles["image-container"]}>
          {images
            .filter(
              (image: GalleryImage) =>
                !category || image.fields.Category === category
            )
            .map((image: GalleryImage) => (
              <div key={image.id} className={styles.image}>
                <Image
                  loading="lazy"
                  src={image.fields?.image[0].url}
                  alt={image.fields?.Name}
                  width={image.fields?.image[0].width}
                  height={image.fields?.image[0].height}
                  style={{
                    borderRadius: "0.5em",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                  sizes="(max-width: 1100px) 100vw, 600px"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
