import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-image-container"]}>
          <Image
            src="/Hero.jpg"
            alt="hero"
            width={1200}
            height={700}
            sizes="100vw"
            priority={true}
            style={{
              objectFit: "contain",
              borderRadius: "1em",
            }}
            className={styles["hero-image"]}
          />
        </div>
        <div className={styles["hero-text-container"]}>
          <div className={styles["hero-text-overlay"]}>
            <h1 className={styles["hero-title"]}>
              Enhance Your Beauty with Our Permanent Makeup
            </h1>
            <p className={styles["hero-subtitle"]}>
              Experience the convenience and confidence of flawless makeup that
              lasts all day, every day.
            </p>
            <Link href="/services">
              <button className={styles["hero-btn-1"]}>Learn More</button>
            </Link>
            <Link href="/book">
              <button className={styles["hero-btn-2"]}>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
