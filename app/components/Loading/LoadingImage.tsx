import React from "react";
import styles from "../../styles/components/LoadingImage.module.scss";

const LoadingImage: React.FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["loader"]}></div>
    </div>
  );
};

export default LoadingImage;
