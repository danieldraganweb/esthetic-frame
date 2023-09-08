"use client";
import React from "react";
import styles from "./contact.module.scss";
import ContactFormClientContact from "../components/ContactFormClientContact/ContactFormClientContact";
import Contact from "../components/Contact/Contact";

function ContactPage() {
  return (
    <>
      <main className={styles["contact-main"]}>
        <Contact />
        <ContactFormClientContact />
      </main>
    </>
  );
}
export default ContactPage;
