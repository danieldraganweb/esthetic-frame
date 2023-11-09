"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import disableScroll from "disable-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [menuOpen]);

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
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  key="gallery"
                  onClick={() => setMenuOpen(false)}
                >
                  Galerie
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
              <li>
                <Link
                  href="/about"
                  key="about"
                  onClick={() => setMenuOpen(false)}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  key="contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Kontakt
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
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  key="gallery"
                  onClick={() => setMenuOpen(false)}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  key="blog"
                  onClick={() => setMenuOpen(false)}
                >
                  Unser Blog
                </Link>
              </li>
              <li>
                <div className={styles["navbar-logo"]}>
                  <Logo />
                </div>
              </li>
              <li>
                <Link
                  href="/about"
                  key="about"
                  onClick={() => setMenuOpen(false)}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  key="contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <div className={styles["navbar-button-container"]}>
                  <Link href="/book">
                    <button className={styles["navbar-button"]}>Buchen</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
