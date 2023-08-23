import React from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-links-left"]}>
          <Link href="/menu">
            <h1>Menu</h1>
          </Link>
          <Link href="/gallery">
            <h1>Gallery</h1>
          </Link>
          <Link href="/blog">
            <h1>Blog</h1>
          </Link>
        </div>
        <div className={styles["navbar-logo"]}>
          <Logo />
        </div>
        <div className={styles["navbar-links-right"]}>
          <Link href="/about">
            <h1>About</h1>
          </Link>
          <Link href="/contact">
            <h1>Contact</h1>
          </Link>
          <Link href="/book">
            <button className={styles["navbar-button"]}>Book</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
