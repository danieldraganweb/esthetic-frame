import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "./CookiePolicy/CookiePolicy.module.scss";

const CookiePolicyAlert: React.FC = () => {
  return (
    <div className={styles["cookie-policy-container"]}>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myCookie"
        style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This site uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default CookiePolicyAlert;
