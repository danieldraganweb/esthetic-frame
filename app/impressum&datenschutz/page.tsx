/**
 * Renders the Impressum and Datenschutz page.
 * @returns JSX.Element
 */
// FILEPATH: /c:/Users/Bruger/OneDrive/Desktop/Web Projects/esthetic-frame/app/impressum&datenschutz/page.tsx
// "use client";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";

// function ImpressumAndDatenschutz() {
//   const [numPages, setNumPages] = useState<number | null>(null);

//   /**
//    * Sets the number of pages in the PDF document.
//    * @param {Object} param - The object containing the number of pages.
//    * @param {number} param.numPages - The number of pages in the PDF document.
//    */
//   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
//     setNumPages(numPages);
//   }

//   return (
//     <Document
//       file="/Impressum&Datenschutz.pdf"
//       onLoadSuccess={onDocumentLoadSuccess}
//       className="myClass"
//     >
//       {numPages &&
//         Array.from(new Array(numPages), (el, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//     </Document>
//   );
// }

/**
 * Renders the privacy policy page.
 * @returns JSX.Element
 */
import React from "react";
import styles from "./PrivacyPolicy.module.scss";
function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>This is the Impressum & Datenschutz </p>
    </div>
  );
}

export default PrivacyPolicy;
