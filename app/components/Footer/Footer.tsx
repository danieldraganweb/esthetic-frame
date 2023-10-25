import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import InstagramSVG from "../SocialMedia/InstagramSVG";
import FacebookSVG from "../SocialMedia/FacebookSVG";
import Contact from "../Contact/Contact";

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContact}>
          <Contact />
        </div>
        <div className={styles.footerSocial}>
          <div className={styles.footerSocialText}>
            <h1>Liken und folgen Sie uns!</h1>
          </div>
          <div className={styles.footerSocialIcons}>
            <InstagramSVG />
            <FacebookSVG />
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
        <div className={styles["contact-hero"]}>
          <h1 className={styles.title}> </h1>
          {/* <p>-Ihr Permanent Make-up Studio in Wien-</p> */}
          <p>
            <strong>Öffnungszeiten:</strong>
          </p>
          <p>Montag - Freitag: 9:00 - 18:00</p>
          <p>Samstag: 9:00 - 15:00</p>
          <p>Sonntag: Geschlossen</p>
        </div>
        <div className={styles.footerLegal}>
          <p>© 2023 ESTHETIC FRAME</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
