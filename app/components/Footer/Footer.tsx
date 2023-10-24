import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import InstagramSVG from "../SocialMedia/InstagramSVG";
import FacebookSVG from "../SocialMedia/FacebookSVG";

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerSocial}>
          <div className={styles.footerSocialText}>
            <h1>Folgen Sie uns in den sozialen Medien</h1>
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
        <div className={styles.footerLegal}>
          <p>© 2023 ESTHETIC FRAME</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
