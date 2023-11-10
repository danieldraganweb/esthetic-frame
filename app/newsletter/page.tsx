import React from "react";
import NewsletterForm from "../components/Newsletter Form/NewsletterForm";
import styles from "./Newsletter.module.scss";
import Image from "next/image";

const NewsletterPage: React.FC = () => {
  return (
    <div className={styles["newsletter-form"]}>
      <div className={styles["newsletter-form-text"]}>
        <h1>Newsletter</h1>
        <p>
          Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und
          Angeboten von Esthetic Frame. Bleiben Sie informiert und verpassen Sie
          keine Neuigkeiten! Melden Sie sich für unseren Newsletter an, um die
          neuesten Schönheitstipps, exklusive Angebote und mehr direkt in Ihrem
          Posteingang zu erhalten.
        </p>
      </div>
      <div className={styles["newsletter-form-container"]}>
        <NewsletterForm />
        <Image
          src="/newsletter.jpg"
          alt="Newsletter"
          width={433}
          height={650}
          // layout="responsive"
          className={styles["newsletter-image"]}
          blurDataURL="/newsletter.jpg"
          placeholder="blur"
        ></Image>
      </div>
    </div>
  );
};

export default NewsletterPage;
