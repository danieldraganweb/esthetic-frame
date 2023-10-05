import Link from "next/link";
import React from "react";
import styles from "./ContactFormClientContact.module.scss";
import Image from "next/image";

function ContactFormClientContact() {
  return (
    <>
      <main className={styles["contact-form-main"]}>
        <div className={styles["contact-form-image-container"]}>
          <Image
            src="/anime-contact.jpg"
            alt="contact-form"
            width={400}
            height={570}
            sizes="100vw"
            priority={true}
            style={{
              objectFit: "contain",
              borderRadius: "1em",
            }}
            className={styles["contact-form-image"]}
          />
        </div>
        <div className={styles["contact-form-container"]}>
          <h1 className={styles["contact-form-title"]}>
            Not sure what you need?
          </h1>
          <p className={styles["contact-form-subtitle"]}>
            Let us help you find the perfect solution for your beauty needs.
          </p>
          <h1 className={styles["contact-form-subtitle"]}>
            Leave your contact details and we will get back to you as soon as
            possible.
          </h1>
          <input
            type="text"
            placeholder="First Name (e.g. John)"
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
            placeholder="Last Name (e.g. Doe)"
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
            placeholder="Email (e.g. john.doe@example.com)"
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
            placeholder="Phone (e.g. +43 xxx xxx xxxx.)"
            required
            className={styles["contact-form-input"]}
            name="phone"
          />
          <label
            htmlFor="phone"
            className={styles["contact-form-label"]}
          ></label>
          <Link href="/book">
            <button className={styles["contact-form-button"]}>
              Book a Consultation
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ContactFormClientContact;
