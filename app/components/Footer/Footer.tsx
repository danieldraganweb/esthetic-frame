import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import InstagramSVG from "../SocialMedia/InstagramSVG";
import FacebookSVG from "../SocialMedia/FacebookSVG";
import Contact from "../Contact/Contact";
import WhatsappSVG from "../SocialMedia/WhatsappSVG";
import MessengerSVG from "../SocialMedia/MessengerSVG";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContact}>
          <Contact />
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
        <div className={styles.footerSocial}>
          <div className={styles.footerSocialText}>
            <h1>Liken und folgen Sie uns!</h1>
          </div>
        </div>
        <div className={styles.footerLegal}>
          <div className={styles.footerSocialIcons}>
            <InstagramSVG />
            <FacebookSVG />
            <WhatsappSVG />
            <MessengerSVG />
          </div>
          <p>ESTHETIC FRAME</p>
          <p>
            <strong>© {currentYear} - Alle Rechte vorbehalten</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
