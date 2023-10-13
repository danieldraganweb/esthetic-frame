import React from "react";
import styles from "./styles/loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.center}>
        <div className={styles["dot-1"]}></div>
        <div className={styles["dot-2"]}></div>
        <div className={styles["dot-3"]}></div>
      </div>
    </div>
  );
};

export default Loading;
