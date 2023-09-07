"use client";
import React from "react";
import styles from "./book.module.scss";

function Booking() {
  return (
    <div className={styles["book-container"]}>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/shrlxLSz6BoACMoeE?backgroundColor=teal"
        onWheel={() => {}}
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
}

export default Booking;
