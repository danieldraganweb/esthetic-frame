import React, { useState, useEffect } from "react";
import { GalleryImage } from "../../types";
import styles from "./ImageModal.module.scss";
import Image from "next/image";
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";
import CloseMenuSVG from "../CloseMenuSVG";

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
  const [currentImage, setCurrentImage] = useState(image);
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
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
            <button onClick={handlePrev}>
              <LeftArrow />
            </button>
            <Image
              loading="lazy"
              src={currentImage.fields?.image[0].url}
              alt={currentImage.fields?.Name}
              width={currentImage.fields?.image[0].width}
              height={currentImage.fields?.image[0].height}
              className={styles["modal-image"]}
            />
            <button onClick={handleNext}>
              <RightArrow />
            </button>
          </div>
        </div>
        {/* <button onClick={onClose}>
          <CloseMenuSVG />
        </button>{" "}
        Close button */}
      </div>
    </>
  );
};

export default ImageModal;
