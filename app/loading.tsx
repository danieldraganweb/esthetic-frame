import React from "react";
import styles from "./styles/loading.module.scss";

const Loading: React.FC = () => {
  return (
    <main className={styles["loading"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
        <div className={styles["shadow"]}></div>
        <div className={styles["shadow"]}></div>
        <div className={styles["shadow"]}></div>
      </div>
    </main>
  );
};

export default Loading;
