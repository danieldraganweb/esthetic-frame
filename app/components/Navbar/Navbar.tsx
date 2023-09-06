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

  // Disable scrolling when menu is open
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-mobile"]}>
          <div className={styles["hamburger-container"]}>
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
          <Logo />
          <div className={styles["navbar-button-container"]}>
            <Link href="/book">
              <button className={styles["navbar-button"]}>Book</button>
            </Link>
          </div>
          {menuOpen && (
            <ul
              className={`${styles.navLinks} ${
                menuOpen ? styles.open : styles.closed
              }`}
            >
              <li>
                <Link
                  href="/services"
                  key="services"
                  onClick={() => setMenuOpen(false)}
                >
                  <h1>Services</h1>
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
                <Link
                  href="/blog"
                  key="blog"
                  onClick={() => setMenuOpen(false)}
                >
                  <h1>Blog</h1>
                </Link>
              </li>
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
          )}
        </div>
        {/* Second section for desktop view */}
        <div className={styles["navbar-desktop"]}>
          <div className={styles["navbar-links"]}>
            <ul className={styles.navLinks}>
              <li>
                <Link
                  href="/services"
                  key="services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  key="gallery"
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  key="blog"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <div className={styles["navbar-logo"]}>
                <Logo />
              </div>
              <li>
                <Link
                  href="/about"
                  key="about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  key="contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book">
                  <button className={styles["navbar-button"]}>Book</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
