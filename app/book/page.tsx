"use client";
import React from "react";
import styles from "./book.module.scss";

function Booking() {
  return (
    <div className={styles["book-container"]}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/shrYFVTEkgvXDY4Bz?backgroundColor=teal"
        onWheel={() => {}}
        width="100%"
        height="1280px"
        style={{
          background: "transparent",
          borderRadius: "0.5em",
          border: "1px solid #D8D8D8",
          maxWidth: "1100px",
        }}
      ></iframe>
    </div>
  );
}

export default Booking;
