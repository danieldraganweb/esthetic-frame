"use client";
import React, { useState, useEffect } from "react";
import styles from "./gallery.module.scss";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { GalleryImage } from "../types";
import Image from "next/image";
import disableScroll from "disable-scroll";
import OpenMenuSVG from "../components/OpenMenuSVG";
import CloseMenuSVG from "../components/CloseMenuSVG";

type Props = {};

function Gallery(props: Props) {
  const [category, setCategory] = useState<string | undefined>();
  const { images } = useGalleryImages();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categories = Array.from(
    new Set(images.map((image: GalleryImage) => image.fields.Category))
  );

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isSidebarOpen]);

  return (
    <>
      <main className={styles["wrapper"]}>
        <div className={styles["gallery-container"]}>
          <div className={styles["gallery-title-container"]}>
            <h1 className={styles["gallery-title"]}>Galerie</h1>
            {/* <p>
            Blättern Sie durch unsere atemberaubenden
            Vorher-Nachher-Verwandlungen
          </p> */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={styles["sidebar-button"]}
            >
              {isSidebarOpen ? <CloseMenuSVG /> : <OpenMenuSVG />}
            </button>
          </div>
          <div className={styles["sidebar-container"]}>
            <div
              className={`${styles["sidebar"]} ${
                isSidebarOpen
                  ? styles["sidebar-open"]
                  : styles["sidebar-closed"]
              }`}
            >
              <div className={styles["category-buttons"]} key="all">
                <button
                  key="all"
                  onClick={() => {
                    setCategory(undefined);
                    setIsSidebarOpen(false);
                  }}
                >
                  <h1>All</h1>
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setCategory(category);
                      setIsSidebarOpen(false);
                    }}
                  >
                    <h1>{category}</h1>
                  </button>
                ))}
              </div>
            </div>
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
      </main>
    </>
  );
}

export default Gallery;
