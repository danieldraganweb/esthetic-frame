import React from "react";
import styles from "./styles/loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span></span>
      </div>
      <div className={styles.loader}>
        <span></span>
      </div>
      <div className={styles.loader}>
        <i></i>
      </div>
      <div className={styles.loader}>
        <i></i>
      </div>
    </div>
  );
};

export default Loading;
