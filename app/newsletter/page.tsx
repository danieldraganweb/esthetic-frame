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
          Angeboten von Esthetic Frame.
        </p>
        <p>
          Bleiben Sie informiert und verpassen Sie keine Neuigkeiten! Melden Sie
          sich für unseren Newsletter an, um die neuesten Schönheitstipps,
          exklusive Angebote und mehr direkt in Ihrem Posteingang zu erhalten.
        </p>
      </div>
      <div className={styles["newsletter-form-container"]}>
        <NewsletterForm />

        <div>
          <Image
            src="/newsletter.jpg"
            alt="Newsletter"
            width={433}
            height={650}
            layout="responsive"
            sizes="(max-width: 1100px) 100vw, 1100px"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
