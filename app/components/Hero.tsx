import React from "react";
import Image from "next/image";
import styles from "../styles/components/Hero.module.scss";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div className={styles["hero-image-container"]}>
        <Image
          src="/Banner.jpg"
          alt="hero"
          width={1200}
          height={700}
          sizes="100vw"
          priority={true}
          style={{
            objectFit: "cover",
            borderRadius: "1em",
          }}
          className={styles["hero-image"]}
        />
      </div>
      <div className={styles["hero-container"]}>
        <h1 className={styles["hero-title"]}>
          Enhance Your Beauty with Our Permanent Makeup
        </h1>
        <p className={styles["hero-subtitle"]}>
          Experience the convenience and confidence of flawless makeup that
          lasts all day, every day.
        </p>
        <div className={styles["btn-container"]}>
          <Link href="/services">
            <button className={styles["hero-btn-1"]}>Learn More</button>
          </Link>
          <Link href="/book">
            <button className={styles["hero-btn-2"]}>Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
