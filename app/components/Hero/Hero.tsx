import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <main className={styles["hero-section"]}>
        <div className={styles["hero-container"]}>
          <div className={styles["hero-image-container"]}>
            <Image
              src="/Hero.jpg"
              alt="Permanent Make-up lady photo"
              width={368}
              height={533}
              priority={true}
              layout="responsive"
              sizes="(max-width: 1100px) 100vw, 600px"
              style={{
                objectFit: "contain",
              }}
              className={styles["hero-image"]}
            />
          </div>
          <div className={styles["hero-text-container"]}>
            <div className={styles["hero-text-overlay"]}>
              <h1 className={styles["hero-title"]}>
                Steigere deine Schönheit mit unserem Permanent Make-up
              </h1>
              <p className={styles["hero-subtitle"]}>
                Erlebe die Bequemlichkeit und das Selbstbewusstsein eines
                makellosen Make-ups, das den ganzen Tag, jeden Tag hält!
              </p>
              <div className={styles["hero-button-container"]}>
                <Link href="/book">
                  <button className={styles["hero-btn-1"]}>Jetzt Buchen</button>
                </Link>
                <Link href="/services">
                  <button className={styles["hero-btn-2"]}>
                    Weitere Informationen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
