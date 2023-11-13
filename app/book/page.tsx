"use client";
import React from "react";
import styles from "./book.module.scss";

function Booking() {
  return (
    <div className={styles["book-container"]}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/pagAjAzYqapEtAC6y/form"
        onWheel={() => {}}
        width="100%"
        height="1100px"
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
        }}
      ></iframe>
    </div>
  );
}

export default Booking;
