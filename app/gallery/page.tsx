"use client";
import React from "react";
import styles from "./gallery.module.scss";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { GalleryImage } from "../types";
import Image from "next/image";

function Gallery() {
  const images = useGalleryImages();

  return (
    <div className={styles["gallery-page"]}>
      <div className={styles["gallery-container"]}>
        <h1 className={styles["gallery-title"]}>Gallery</h1>
        {images.images.map((image: GalleryImage) => (
          <div key={image.id} className={styles.image}>
            <Image
              loading="lazy"
              src={image.fields?.image[0].url}
              alt={image.fields?.Name}
              width={image.fields?.image[0].width}
              height={image.fields?.image[0].height}
              layout="responsive"
              style={{
                borderRadius: "0.5em",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              sizes="(max-width: 1100px) 100vw, 600px"
            />
            <h2 className={styles["image-title"]}>{image.fields?.Name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
