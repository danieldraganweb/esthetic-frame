import React from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["hamburger-container"]}>
          <button className={styles["hamburger"]}>
            <div className={styles["bar"]}></div>
          </button>
        </div>
        <div className={styles["navbar-links-left"]}>
          <ul>
            <li>
              <Link href="/menu">
                <h1>Menu</h1>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <h1>Blog</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["navbar-logo"]}>
          <Logo />
        </div>
        <div className={styles["navbar-links-right"]}>
          <ul>
            <li>
              <Link href="/about">
                <h1>About</h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1>Contact</h1>
              </Link>
            </li>
            <Link href="/book">
              <button className={styles["navbar-button"]}>Book</button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
