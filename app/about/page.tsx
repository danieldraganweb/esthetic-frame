import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import Contact from "../components/Contact/Contact";

function About() {
  return (
    <>
      <main>
        <div className={styles["about-container"]}>
          <h1 className={styles.title}>Welcome to Esthetic Frame</h1>
          <h1>Your Permanent Makeup Studio in Vienna</h1>
          <div className={styles["about-image-container"]}>
            <Image
              src="/about.jpg"
              alt="About"
              width={1920}
              height={1080}
              layout="responsive"
              sizes="(max-width: 1920px) 100vw, 1920px"
            ></Image>
          </div>
          <p className={styles.description}>
            At Esthetic Frame, we are more than just a Permanent Makeup studio;
            we are your dedicated partners in enhancing your natural beauty.
            Located in the heart of Vienna, our studio is where lasting elegance
            and confidence meet. We invite you to embark on a journey with us,
            where every visit leaves you feeling empowered and beautiful.
          </p>
          <ul className={styles.highlights}>
            <li>
              <h1>Expertise in Permanent Makeup:</h1>
              <p>
                Our team of skilled artists possesses a deep understanding of
                Permanent Makeup techniques, ensuring that every stroke and
                detail enhances your features naturally.
              </p>
            </li>
            <li>
              <h1>Safe and Quality Products:</h1>
              <p>
                We prioritize your well-being, which is why we use only the
                highest quality, safe, and non-allergenic pigments and
                materials.
              </p>
            </li>
            <li>
              <h1>Welcoming Atmosphere:</h1>
              <p>
                Step into our studio, and you&rsquo;ll immediately feel at ease.
                Our warm and inviting ambiance is designed to provide you with a
                comfortable and relaxing experience.
              </p>
            </li>
            <li>
              <h1>Personalized Service:</h1>
              <p>
                Your unique beauty deserves a personalized approach. We listen
                to your preferences and work closely with you to achieve the
                results you desire.
              </p>
            </li>
          </ul>
          <p className={styles.description}>
            Discover Esthetic Frame, where artistry meets beauty and every visit
            is an opportunity to uncover your natural radiance. Our journey is
            your journey, and we&rsquo;re excited to share it with you.
          </p>
          {/* Add your visual element (image) here */}
          <div className={styles.visual}>{/* Image goes here */}</div>
          <p className={styles.description}>
            Ready to discover the Esthetic Frame experience? Scroll down to meet
            our team and learn about our journey.
          </p>
          <Contact />
        </div>
      </main>
    </>
  );
}

export default About;
