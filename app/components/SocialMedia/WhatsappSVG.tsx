import React from "react";
import Link from "next/link";
import styles from "../Footer/Footer.module.scss";

function WhatsappSVG() {
  return (
    <>
      <div className={styles.footerSocialIconsItem}>
        <Link
          href="https://wa.me/+4368120562535"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.00512"
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
                style={{ fill: "#75B73B" }}
                cx="256"
                cy="256"
                r="256"
              ></circle>{" "}
              <path
                style={{ fill: "#75B73B" }}
                d="M360.241,151.826c-14.843-3.712-36.671-16.532-50.8-21.671 c-55.165-17.239-129.293-3.448-149.98,60.337c-1.724,1.724-5.172,1.724-6.896,1.724c-41.374,48.269-13.791,106.882-17.239,160.323 c-1.177,18.839-11.083,35.497-23.831,49.588l107.282,107.17C230.931,511.067,243.355,512,256,512 c126.436,0,231.452-91.665,252.247-212.161L360.241,151.826z"
              ></path>{" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M248.837,108.447c-78.029,3.712-139.604,68.696-139.369,146.811 c0.072,23.792,5.816,46.249,15.95,66.095l-15.557,75.514c-0.841,4.086,2.843,7.663,6.901,6.701l73.995-17.53 c19.011,9.471,40.364,14.939,62.962,15.284c79.753,1.219,146.251-62.105,148.74-141.829 C405.121,174.035,334.591,104.362,248.837,108.447L248.837,108.447z M337.13,335.936c-21.669,21.669-50.483,33.604-81.13,33.604 c-17.944,0-35.126-4.027-51.066-11.966l-10.302-5.134l-45.37,10.747l9.549-46.356l-5.075-9.943 c-8.276-16.206-12.472-33.728-12.472-52.084c0-30.648,11.935-59.459,33.604-81.13c21.476-21.478,50.759-33.604,81.134-33.604 c30.644,0,59.458,11.935,81.127,33.604c21.669,21.669,33.604,50.483,33.604,81.127C370.735,285.177,358.607,314.459,337.13,335.936 L337.13,335.936z"
                ></path>{" "}
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M327.115,286.582l-28.384-8.149c-3.729-1.069-7.749-0.01-10.468,2.76l-6.942,7.07 c-2.926,2.984-7.366,3.941-11.24,2.374c-13.427-5.434-41.672-30.548-48.881-43.106c-2.084-3.624-1.739-8.152,0.817-11.462 l6.058-7.839c2.374-3.07,2.874-7.197,1.305-10.747l-11.941-27.008c-2.86-6.468-11.126-8.352-16.527-3.784 c-7.921,6.701-17.32,16.88-18.461,28.16c-2.015,19.887,6.515,44.954,38.762,75.055c37.257,34.778,67.094,39.369,86.523,34.664 c11.019-2.667,19.825-13.365,25.379-22.126C336.906,296.467,333.91,288.535,327.115,286.582L327.115,286.582z"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M356.004,147.708l-22.223,22.778c1.131,1.045,2.257,2.096,3.351,3.191 c21.67,21.669,33.604,50.483,33.604,81.127c0,30.375-12.128,59.656-33.604,81.134c-21.669,21.669-50.483,33.604-81.13,33.604 c-17.944,0-35.125-4.027-51.066-11.966l-10.302-5.134l-45.37,10.747l0.938-4.553l-40.174,41.172 c0.886,2.663,3.705,4.475,6.734,3.758l73.995-17.53c19.011,9.471,40.364,14.939,62.962,15.284 c79.753,1.219,146.253-62.105,148.74-141.829C403.834,215.357,385.686,175.435,356.004,147.708z"
                ></path>{" "}
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M327.115,286.582l-28.384-8.149c-3.729-1.069-7.749-0.01-10.468,2.76l-6.942,7.07 c-2.926,2.984-7.366,3.941-11.24,2.374c-7.756-3.139-20.451-12.845-31.185-22.904l-19.732,20.225 c0.677,0.648,1.352,1.295,2.05,1.948c37.257,34.778,67.094,39.369,86.523,34.664c11.019-2.667,19.825-13.365,25.379-22.126 C336.906,296.467,333.91,288.535,327.115,286.582z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
        <h1>Whatsapp</h1>
      </div>
    </>
  );
}

export default WhatsappSVG;
