import React from "react";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.scss";

function MessengerSVG() {
  return (
    <div className={styles.MessengerSVG}>
      <Link
        href="https://wa.me/+4368120562535"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          height="44px"
          width="44px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              style={{ fill: "#78BAEB" }}
              cx="256"
              cy="256"
              r="256"
            ></circle>{" "}
            <path
              style={{ fill: "#59AAE7" }}
              d="M256,0c-11.317,0-22.461,0.744-33.391,2.167C348.216,18.53,445.217,125.933,445.217,256 s-97.002,237.47-222.609,253.833C233.539,511.256,244.683,512,256,512c141.385,0,256-114.616,256-256S397.385,0,256,0z"
            ></path>{" "}
            <path
              style={{ fill: "#FCFCFC" }}
              d="M244.431,78.279c-88.033,5.563-159.189,75.66-165.973,163.607 c-2.664,34.522,4.542,67.158,19.068,95.413c0.461,0.896,0.516,1.943,0.142,2.878l-17.843,44.609 c-0.915,2.288,0.77,4.778,3.235,4.778h53.866c0.836,0,1.641,0.305,2.272,0.855c30.897,26.871,71.14,43.275,115.212,43.66 c99.925,0.875,181.577-81.684,179.643-181.594C432.107,151.942,346.835,71.808,244.431,78.279z"
            ></path>{" "}
            <path
              style={{ fill: "##78BAEB" }}
              d="M158.491,305.435l30.158-70.37c0.345-0.805,1.135-1.326,2.01-1.326h97.965 c0.496,0,0.978-0.169,1.367-0.48l47.277-37.821c1.832-1.465,4.372,0.589,3.324,2.687l-39.463,78.926 c-0.371,0.741-1.128,1.209-1.957,1.209h-87.086c-0.396,0-0.786,0.108-1.125,0.312l-49.332,29.599 C159.807,309.264,157.655,307.385,158.491,305.435z"
            ></path>{" "}
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default MessengerSVG;
