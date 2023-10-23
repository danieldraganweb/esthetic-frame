import React from "react";
import Iframe from "react-iframe";
import styles from "./NewsletterForm.module.scss";

const NewsletterForm = () => {
  return (
    <div className={styles["newsletter-form-container"]}>
      <Iframe
        url="https://airtable.com/embed/appsz3SqYl4ft3Vqv/shrnxnmjMaizQmjTF?backgroundColor=white"
        width="100%"
        height="650px"
        id="myId"
        className={styles["newsletter-form-iframe"]}
        display="initial"
        position="relative"
        allowFullScreen
        styles={{
          border: "1px solid #ccc",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default NewsletterForm;
