import React from "react";
import styles from "../gallery/gallery.module.scss";

function ScrollHorizontalIcon() {
  return (
    <svg
      className={styles["scroll-horizontal-icon"]}
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:$quaternary-color;}
            .cls-2{clip-path:url(#clip-path);}`}
          </style>
          <clipPath id="clip-path">
            <rect className="cls-1" y="-0.13" width="24" height="24"></rect>
          </clipPath>
        </defs>
        <title>scroll-horizontal</title>
        <g className="cls-2">
          <path d="M18.54,15.66a.79.79,0,0,1-.53-.22.75.75,0,0,1,0-1.06L20.42,12,18.07,9.62a.75.75,0,0,1,1.06-1.06L22,11.44a.75.75,0,0,1,0,1.06l-2.94,2.94A.77.77,0,0,1,18.54,15.66Z" />
          <path d="M5.4,15.66a.75.75,0,0,1-.53-.22L2,12.56A.75.75,0,0,1,2,11.5L4.93,8.56A.75.75,0,0,1,6,9.62L3.58,12l2.35,2.35a.75.75,0,0,1,0,1.06A.79.79,0,0,1,5.4,15.66Z" />
          <path d="M12,15.66A3.66,3.66,0,1,1,15.66,12,3.66,3.66,0,0,1,12,15.66Zm0-5.82A2.16,2.16,0,1,0,14.16,12,2.16,2.16,0,0,0,12,9.84Z" />
        </g>
      </g>
    </svg>
  );
}

export default ScrollHorizontalIcon;
