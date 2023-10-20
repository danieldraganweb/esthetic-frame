import Link from "next/link";
import React from "react";
import styles from "./ContactFormClientContact.module.scss";

function ContactFormClientContact() {
  return (
    <>
      <main className={styles["contact-form-main"]}>
        <div className={styles["contact-form-container"]}>
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
          <input
            type="text"
            placeholder="Vorname (e.g. Maria)"
            required
            className={styles["contact-form-input"]}
            name="firstName"
          />
          <label
            htmlFor="firstName"
            className={styles["contact-form-label"]}
          ></label>
          <input
            type="text"
            placeholder="Nachname (e.g. Musterfrau)"
            required
            className={styles["contact-form-input"]}
            name="lastName"
          />
          <label
            htmlFor="lastName"
            className={styles["contact-form-label"]}
          ></label>
          <input
            type="email"
            placeholder="Email (e.g. maria.musterfrau@example.com)"
            required
            className={styles["contact-form-input"]}
            name="email"
          />
          <label
            htmlFor="email"
            className={styles["contact-form-label"]}
          ></label>
          <input
            type="tel"
            placeholder="Telefon (e.g. +43 xxx xxx xxxx.)"
            required
            className={styles["contact-form-input"]}
            name="phone"
          />
          <label
            htmlFor="phone"
            className={styles["contact-form-label"]}
          ></label>
          <Link href="/book">
            <button className={styles["contact-form-button"]}>Buchen</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ContactFormClientContact;
