"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import InstagramSVG from "../SocialMedia/InstagramSVG";
import FacebookSVG from "../SocialMedia/FacebookSVG";
import Contact from "../Contact/Contact";
import WhatsappSVG from "../SocialMedia/WhatsappSVG";
import MessengerSVG from "../SocialMedia/MessengerSVG";
import NewsletterForm from "../Newsletter Form/NewsletterForm";
import AllGoogleReviews from "../GoogleReviews/AllGoogleReviews";
import Logo from "../Navbar/Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [formOpen, setFormOpen] = useState(false);

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };
  return (
    <>
      <div className={styles["footer-background"]}>
        <main className={styles["footer-main"]}>
          <footer className={styles.footer}>
            <div className={styles.footerContact}>
              <Contact />
            </div>
            <div className={styles.footerSocial}>
              <div
                className={`${styles.NewsletterForm} ${
                  formOpen ? styles.open : styles.closed
                }`}
              >
                <Logo />
                <div className={styles.footerReviews}>
                  <AllGoogleReviews />
                </div>
                <button onClick={toggleForm}>
                  Abonnieren Sie unseren Newsletter
                </button>
                <NewsletterForm />
              </div>

              <div className={styles.footerSocialIconsAndLinks}>
                <div className={styles.footerSocialIcons}>
                  <div className={styles.footerSocialText}>
                    <h1>Folgen Sie Uns</h1>
                  </div>
                  <InstagramSVG />
                  <FacebookSVG />
                  <WhatsappSVG />
                  <MessengerSVG />
                </div>
                <div className={styles["footer-links"]}>
                  <div className={styles.footerSocialText}>
                    <h1>Studio</h1>
                  </div>
                  <ul className={styles.navLinks}>
                    <li>
                      <Link href="/services" key="services">
                        Leistungen
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" key="gallery">
                        Galerie
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" key="blog">
                        Blog
                      </Link>
                    </li>
                    <div className={styles["navbar-logo"]}></div>
                    <li>
                      <Link href="/about" key="about">
                        Über uns
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" key="contact">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link href="/book">
                        <button className={styles["navbar-button"]}>
                          Buchen
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <ul>
                <li>
                  <Link href="newsletter" className={styles.footerLinksItem}>
                    Abonnieren Sie unseren Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="impressum&datenschutz"
                    className={styles.footerLinksItem}
                  >
                    Impressum & Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="FAQ" className={styles.footerLinksItem}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerLegal}>
              <p>ESTHETIC FRAME</p>
              <p>
                <strong>© {currentYear} - Alle Rechte vorbehalten</strong>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Footer;
