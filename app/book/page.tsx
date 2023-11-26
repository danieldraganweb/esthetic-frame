"use client";
import React from "react";
import styles from "./book.module.scss";

function Booking() {
  return (
    <div className={styles["book-container"]}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/pagPSBcLdyjdGO25R/form"
        onWheel={() => {}}
        width="100%"
        height="1200"
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
}

export default Booking;
