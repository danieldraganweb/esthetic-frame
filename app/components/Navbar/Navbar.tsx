"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["hamburger-container"]}>
          {/* <button className={styles["hamburger"]} onClick={toggleMenu}>
            <div className={styles["bar"]}></div>
          </button> */}
          <button
            className={styles.burgerMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <svg
              fill="var(--button-color)"
              className={styles.hamburger}
              viewBox="0 0 90 90"
              width="22"
            >
              <rect
                className={styles.lineTop}
                width="88"
                height="10"
                x="1"
                y="10"
                rx="5"
              />
              <rect
                className={styles.lineMiddle}
                width="88"
                height="10"
                x="1"
                y="40"
                rx="5"
              />
              <rect
                className={styles.lineBottom}
                width="88"
                height="10"
                x="1"
                y="70"
                rx="5"
              />
            </svg>
          </button>
        </div>
        <div className={styles["navbar-links-left"]}>
          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.open : styles.closed
            }`}
          >
            <li>
              <Link href="/menu" key="menu" onClick={() => setMenuOpen(false)}>
                <h1>Menu</h1>
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                key="gallery"
                onClick={() => setMenuOpen(false)}
              >
                <h1>Gallery</h1>
              </Link>
            </li>
            <li>
              <Link href="/blog" key="blog" onClick={() => setMenuOpen(false)}>
                <h1>Blog</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["navbar-logo"]}>
          <Logo />
        </div>
        <div className={styles["navbar-links-right"]}>
          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.open : styles.closed
            }`}
          >
            <li>
              <Link
                href="/about"
                key="about"
                onClick={() => setMenuOpen(false)}
              >
                <h1>About</h1>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                key="contact"
                onClick={() => setMenuOpen(false)}
              >
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
          <Link href="/book">
            <button className={styles["navbar-button"]}>Book</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
