import React, { useState, useEffect } from "react";
import { GalleryImage } from "../../types";
import styles from "./ImageModal.module.scss";
import Image from "next/image";
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";
import CloseMenuSVG from "../CloseMenuSVG";
import ImageModalLoader from "./ImageModalLoader";
import disableScroll from "disable-scroll";

type Props = {
  image: GalleryImage;
  onClose: () => void;
  images: GalleryImage[];
  selectedIndex: number;
};

const ImageModal: React.FC<Props> = ({
  image,
  onClose,
  images,
  selectedIndex,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
    console.log("currentIndex:", currentIndex);
    console.log("images.length:", images.length);
  }, [currentIndex, images]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isModalOpen = !!currentImage;

  return (
    <>
      <div
        className={`${styles["sidebar"]} ${
          isModalOpen ? styles["sidebar-open"] : styles["sidebar-closed"]
        }`}
      >
        <div className={styles["backdrop"]} onClick={onClose}>
          <div
            className={styles["image-modal"]}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <ImageModalLoader />}
            <button
              onClick={handlePrev}
              aria-label="Vorherige"
              disabled={currentIndex === 0}
            >
              <LeftArrow />
            </button>
            <Image
              src={currentImage.fields?.image[0].url}
              alt={currentImage.fields?.Name}
              width={currentImage.fields?.image[0].width}
              height={currentImage.fields?.image[0].height}
              className={styles["modal-image"]}
              onLoad={() => setIsLoading(false)}
              blurDataURL={currentImage.fields?.image[0].thumbnails.large.url}
              placeholder="blur"
              unoptimized={true}
              priority={true}
            />
            <button
              onClick={handleNext}
              aria-label="Nächste"
              disabled={currentIndex === images.length - 1}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
