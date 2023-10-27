import React, { useState } from "react";
import styles from "./ContactFormClientContact.module.scss";

function ContactFormClientContact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      const button = document.querySelector("contact-form-button");
      if (button) {
        button.textContent = "Kontaktformular anzeigen";
      }
    } else {
      const button = document.querySelector("contact-form-button");
      if (button) {
        button.textContent = "Kontaktformular schließen";
      }
    }
  };

  return (
    <>
      <main className={styles["contact-form-main"]}>
        <div className={styles["contact-form-container"]}>
          <div className={styles["contact-form-text"]}>
            <h1 className={styles["contact-form-title"]}>
              Nicht sicher, wonach Sie suchen?
            </h1>
            <p className={styles["contact-form-subtitle"]}>
              Lassen Sie uns Ihnen die perfekte Lösung für Ihre
              Schönheitsbedürfnisse finden.
            </p>
            <p className={styles["contact-form-subtitle"]}>
              Hinterlassen Sie Ihre Kontaktdaten, und wir melden uns so bald wie
              möglich bei Ihnen.
            </p>
          </div>
          <div className={styles["contact-form-button"]}>
            <button onClick={toggleMenu} id="contact-form-button">
              {menuOpen
                ? "Kontaktformular schließen"
                : "Kontaktformular anzeigen"}
            </button>
            {menuOpen && (
              <div className={styles["contact-form-iframe"]}>
                <iframe
                  className="iframe"
                  src="https://airtable.com/embed/appsz3SqYl4ft3Vqv/shrSso6d5RwjPg0rq?backgroundColor=teal"
                  frameBorder={0}
                  onWheel={() => {}}
                  width="100%"
                  height="1020px"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderRadius: "0.5em",
                    // overflow: "hidden",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactFormClientContact;
