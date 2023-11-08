import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "./CookiePolicy.module.scss";
import Link from "next/link";

const CookiePolicyAlert: React.FC = () => {
  return (
    <div className={styles["cookie-policy"]}>
      <CookieConsent
        location="bottom"
        buttonText="Ich akzeptiere"
        cookieName="myCookie"
        style={{ background: "#1877F2", fontSize: "15px", textAlign: "center" }}
        buttonStyle={{
          color: "#000000",
          fontSize: "18px",
          backgroundColor: "#ffffff",
          borderRadius: "25px",
          padding: "10px 20px",
          fontFamily: "Roboto sans-serif",
          letterSpacing: "0.5px",
          cursor: "pointer",
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
