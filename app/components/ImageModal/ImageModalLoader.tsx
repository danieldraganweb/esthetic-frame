import React from "react";
import styles from "./ImageModal.module.scss";

const ImageModalLoader: React.FC = () => {
  return (
    <div className={styles["loader"]}>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
    </div>
  );
};

export default ImageModalLoader;
