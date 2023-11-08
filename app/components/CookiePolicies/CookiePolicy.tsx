import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "./CookiePolicy.module.scss";
import Link from "next/link";

const CookiePolicyAlert: React.FC = () => {
  return (
    <div className={styles["cookie-policy"]}>
      <CookieConsent
        contentClasses="cookie-policy-content"
        location="bottom"
        buttonText="Ich akzeptiere"
        cookieName="myCookie"
        style={{
          background: "#1877F2",
          fontSize: "12px",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          alignItems: "space-evenly",
          justifyContent: "center",
          padding: "10px 20px",
          width: "100%",
          fontFamily: "Roboto sans-serif",
          height: "auto",
        }}
        buttonStyle={{
          color: "#000000",
          fontSize: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "25px",
          padding: "10px 20px",
          fontFamily: "Roboto sans-serif",
          letterSpacing: "0.5px",
          cursor: "pointer",
          display: "inline-block",
        }}
        expires={150}
      >
        Auf dieser Website wird der Facebook-Pixel verwendet. Durch die weitere
        Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies
        einverstanden, die in Übereinstimmung mit unseren{" "}
        <Link href="/impressum&datenschutz ">Datenschutz</Link> erfolgt.{" "}
      </CookieConsent>
    </div>
  );
};

export default CookiePolicyAlert;
