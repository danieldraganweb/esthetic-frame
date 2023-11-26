"use client";
import React, { useState, useEffect } from "react";
import styles from "../gallery/gallery.module.scss";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { GalleryImage } from "../types";
import Image from "next/image";
import disableScroll from "disable-scroll";
import OpenMenuSVG from "../components/OpenMenuSVG";
import CloseMenuSVG from "../components/CloseMenuSVG";
import ImageModal from "../components/ImageModal/ImageModal";
import { useMediaQuery } from "react-responsive";

type Props = {};

function Gallery(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState<string | undefined>();
  const { images } = useGalleryImages();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categories = Array.from(
    new Set(images.map((image: GalleryImage) => image.fields.Category))
  );

  const isMobileQuery = useMediaQuery({ maxWidth: 768 });

  const [isMobile, setIsMobile] = useState(false);
  //Disable scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen && isMobileQuery) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isSidebarOpen, isMobileQuery]);

  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <main className={styles["wrapper"]}>
        <div className={styles["gallery-container"]}>
          <div className={styles["sidebar-container"]}>
            <div className={styles["gallery-title-container"]}>
              <h1 className={styles["gallery-title"]}>Galerie</h1>

              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={styles["sidebar-button"]}
              >
                {isSidebarOpen ? <CloseMenuSVG /> : <OpenMenuSVG />}
              </button>
            </div>

            <div
              className={`${styles["sidebar"]} ${
                isSidebarOpen
                  ? styles["sidebar-open"]
                  : styles["sidebar-closed"]
              }`}
            >
              <div className={styles["category-buttons"]} key="all">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setCategory(category);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
                <button
                  key="all"
                  onClick={() => {
                    setCategory(undefined);
                    setIsSidebarOpen(false);
                  }}
                >
                  Alle
                </button>
              </div>
            </div>
          </div>
          <div className={styles["image-container"]}>
            {selectedImage &&
              isModalOpen && ( // Add parentheses here
                <ImageModal
                  onClose={() => {
                    setSelectedImage(null);
                    setIsModalOpen(false);
                  }}
                  image={selectedImage}
                  images={images}
                  selectedIndex={images.findIndex(
                    (image) => image.id === selectedImage.id
                  )}
                />
              )}
            {images
              .filter(
                (image: GalleryImage) =>
                  !category || image.fields.Category === category
              )
              .map((image: GalleryImage) => (
                <div key={image.id} className={styles.image}>
                  <Image
                    src={image.fields?.image[0].url}
                    alt={image.fields?.Name}
                    width={300}
                    height={300}
                    className={`${
                      styles["image"]
                    } {isModalOpen ? styles['no-hover'] : ''} ${
                      styles["transition-opacity"]
                    } ${styles["opacity-0"]} ${
                      styles["transition-timing-function"]
                    } ${styles["duration-300"]} ${styles["ease-in-out"]}
                            ${
                              loading
                                ? styles["opacity-0"]
                                : styles["opacity-100"]
                            }`}
                    onLoadingComplete={(src) =>
                      src.classList.remove(styles["opacity-0"])
                    }
                    style={{
                      borderRadius: "0.5em",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    }}
                    blurDataURL={image.fields?.image[0].thumbnails.small.url}
                    placeholder="blur"
                    unoptimized={true}
                    onClick={() => {
                      setSelectedImage(image);
                      setIsModalOpen(true);
                    }}
                    onLoad={(event) => {
                      setLoadedImages((prev) => ({
                        ...prev,
                        [image.id]: true,
                      }));
                      const img = event.target as HTMLImageElement;
                      img.classList.remove(styles["opacity-0"]);
                    }}
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
