"use client";
import React from "react";
import styles from "./NewsletterForm.module.scss";

const NewsletterForm = () => {
  return (
    <div className={styles["newsletter-form-container"]}>
      <iframe
        className={styles["newsletter-form-iframe"]}
        src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/pag1Y1YKAksnBhxaU/form"
        onWheel={() => {}}
        width="100%"
        height="800px"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
};

export default NewsletterForm;
