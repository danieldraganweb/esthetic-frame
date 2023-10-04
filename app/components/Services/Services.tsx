import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.scss";

function Services() {
  return (
    <>
      <div className={styles["services-title-container-1"]}>
        <h1 className={styles["services-title-1"]}>Beliebte Dienste</h1>
      </div>
      <div className={styles["services-container"]}>
        <div className={styles["services-title-container-2"]}>
          <div className={styles["service-item"]}>
            <Link href="/services">
              <Image
                src="/services1.jpg"
                alt="services"
                width={500}
                height={500}
                sizes="100vw"
                priority={true}
                style={{
                  objectFit: "cover",
                  borderRadius: "1em",
                }}
                className={styles["services-image"]}
              />
              <h1 className={styles["services-title-2"]}>
                Eyebrow Microblading
              </h1>
              <p className={styles["services-subtitle-2"]}>
                Achieve perfectly shaped eyebrows with our microblading
                services. We use the latest techniques to give you the best
                results.
              </p>
            </Link>
          </div>
          <div className={styles["service-item"]}>
            <Link href="/services">
              <Image
                src="/services4.jpg"
                alt="services"
                width={500}
                height={500}
                sizes="100vw"
                priority={true}
                style={{
                  objectFit: "cover",
                  borderRadius: "1em",
                }}
                className={styles["services-image"]}
              />
              <h1 className={styles["services-title-3"]}>Permanent Eyeliner</h1>
              <p className={styles["services-subtitle-3"]}>
                Get the look you want with our permanent eyeliner services. We
                offer a variety of styles and colors to suit your needs.
              </p>
            </Link>
          </div>
          <div className={styles["service-item"]}>
            <Link href="/services">
              <Image
                src="/services3.jpg"
                alt="services"
                width={500}
                height={500}
                sizes="100vw"
                priority={true}
                style={{
                  objectFit: "cover",
                  borderRadius: "1em",
                }}
                className={styles["services-image"]}
              />
              <h1 className={styles["services-title-4"]}>Lip Blushing</h1>
              <p className={styles["services-subtitle-4"]}>
                Our permanent lipstick services are perfect for those who want
                to have a natural-looking pout without the hassle of applying
                makeup every day.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["services-btn-container"]}>
        <Link href="/services">
          <button className={styles["services-button"]}>
            Alle Dienstleistungen
          </button>
        </Link>
      </div>
    </>
  );
}

export default Services;
