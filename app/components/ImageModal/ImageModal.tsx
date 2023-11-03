import React from "react";
import { GalleryImage } from "../../types";
import styles from "./ImageModal.module.scss";
import Image from "next/image";

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
  const [currentImage, setCurrentImage] = React.useState(image);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setCurrentImage(images[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      setCurrentImage(images[selectedIndex + 1]);
    }
  };

  const isModalOpen = !!currentImage;

  return (
    <div
      className={`${styles["sidebar"]} ${
        isModalOpen ? styles["sidebar-open"] : styles["sidebar-closed"]
      }`}
    >
      <div className={styles["image-modal"]} onClick={onClose}>
        {/* <button onClick={handlePrev}>Previous</button> */}
        <Image
          loading="lazy"
          src={currentImage.fields?.image[0].url}
          alt={currentImage.fields?.Name}
          width={currentImage.fields?.image[0].width}
          height={currentImage.fields?.image[0].height}
        />
        {/* <button onClick={handleNext}>Next</button> */}
      </div>
    </div>
  );
};

export default ImageModal;
