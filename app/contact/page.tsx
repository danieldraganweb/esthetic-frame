"use client";
import React from "react";
import styles from "./contact.module.scss";
import ContactFormClientContact from "../components/ContactFormClientContact/ContactFormClientContact";
import Image from "next/image";

function ContactPage() {
  return (
    <>
      <main className={styles["contact-main"]}>
        <div className={styles["about-container"]}>
          <h1 className={styles["about-title"]}>
            Willkommen bei Esthetic Frame.
          </h1>
          <h1 className={styles["about-title"]}>Wir freuen uns auf Sie!</h1>
          <div className={styles["about-image-container"]}>
            <Image
              src="/about.jpg"
              alt="About"
              width={1038}
              height={707}
              layout="responsive"
              sizes="(max-width: 1100px) 100vw, 1100px"
            ></Image>
            <ul className={styles.highlights}>
              <li className={styles["hero"]}>
                <h1>Discover Your Natural Radiance</h1>
                <p>
                  At Esthetic Frame, we are more than just a Permanent Makeup
                  studio; we are your dedicated partners in enhancing your
                  natural beauty. Located in the heart of Vienna, our studio is
                  where lasting elegance and confidence meet. We invite you to
                  embark on a journey with us, where every visit leaves you
                  feeling empowered and beautiful.
                </p>
              </li>
              <li>
                <h1>Expertise in Permanent Makeup</h1>
                <p>
                  Our team of skilled artists possesses a deep understanding of
                  Permanent Makeup techniques, ensuring that every stroke and
                  detail enhances your features naturally.
                </p>
              </li>
              <li>
                <h1>Safe and Quality Products</h1>
                <p>
                  We prioritize your well-being, which is why we use only the
                  highest quality, safe, and non-allergenic pigments and
                  materials.
                </p>
              </li>
              <li>
                <h1>Welcoming Atmosphere</h1>
                <p>
                  Step into our studio, and you&rsquo;ll immediately feel at
                  ease. Our warm and inviting ambiance is designed to provide
                  you with a comfortable and relaxing experience.
                </p>
              </li>
              <li>
                <h1>Personalized Service</h1>
                <p>
                  Your unique beauty deserves a personalized approach. We listen
                  to your preferences and work closely with you to achieve the
                  results you desire.
                </p>
              </li>
              <li>
                <h1>Passion for Perfection</h1>
                <p>
                  We are passionate about what we do, and we strive for
                  perfection in every detail. We are committed to ensuring that
                  you leave our studio feeling confident and beautiful.
                </p>
              </li>
              <li>
                <h1>Discover Your Natural Radiance</h1>
                <p className={styles.description}>
                  Discover Esthetic Frame, where artistry meets beauty and every
                  visit is an opportunity to uncover your natural radiance. Our
                  journey is your journey, and we&rsquo;re excited to share it
                  with you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <section className={styles["contact-form-section"]}>
          <ContactFormClientContact />
        </section>
      </main>
    </>
  );
}
export default ContactPage;
