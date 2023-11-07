"use client";
import React, { useState, useEffect } from "react";
import styles from "../gallery/gallery.module.scss";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { GalleryImage } from "../types";
import Image from "next/image";
import disableScroll from "disable-scroll";
import OpenMenuSVG from "../components/OpenMenuSVG";
import CloseMenuSVG from "../components/CloseMenuSVG";
import { useMediaQuery } from "react-responsive";
// import Loading from "../components/Loading/Loading";
import ImageModal from "../components/ImageModal/ImageModal";

type Props = {};

function Gallery(props: Props) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

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
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  // useEffect(() => {
  //   if (selectedImage) {
  //     disableScroll.on();
  //   } else {
  //     disableScroll.off();
  //   }
  // }, [selectedImage]);

  return (
    <>
      {/* {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          images={images}
          selectedIndex={images.findIndex(
            (image) => image.id === selectedImage.id
          )}
        />
      )} */}

      <main
        className={styles["wrapper"]}
        // onLoad={() => {
        //   <Loading />;
        // }}
      >
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
            {images
              .filter(
                (image: GalleryImage) =>
                  !category || image.fields.Category === category
              )
              .map((image: GalleryImage) => (
                <div key={image.id} className={styles.image}>
                  {/* {!loadedImages[image.id] && (
                    <div className={styles.loader}>
                      <Loading />
                    </div>
                  )} */}
                  <Image
                    onClick={() => setSelectedImage(image)}
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [image.id]: true }))
                    }
                    onLoadingComplete={() =>
                      setLoadedImages((prev) => ({ ...prev, [image.id]: true }))
                    }
                    src={image.fields?.image[0].url}
                    alt={image.fields?.Name}
                    width={300}
                    height={300}
                    className={styles["image"]}
                    style={{
                      borderRadius: "0.5em",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    }}
                    blurDataURL={image.fields?.image[0].thumbnails.small.url}
                    placeholder="blur"
                    unoptimized
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
