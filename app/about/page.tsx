import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import Contact from "../components/Contact/Contact";

function About() {
  return (
    <>
      <main>
        <div className={styles["about-container"]}>
          <div className={styles["about-image-container"]}>
            <Image
              src="/about.jpg"
              alt="About"
              width={1920}
              height={1080}
              layout="responsive"
              sizes="(max-width: 1100px) 100vw, 1920px"
            ></Image>
            <h1 className={styles.title}></h1>
            <h1></h1>
          </div>
          <ul className={styles.highlights}>
            <li className={styles["hero"]}>
              <h1>Discover Your Natural Radiance</h1>
              <p> Welcome to Esthetic Frame!</p>
              <p>Your Permanent Makeup Studio in Vienna</p>
              <p>
                At Esthetic Frame, we are more than just a Permanent Makeup
                studio; we are your dedicated partners in enhancing your natural
                beauty. Located in the heart of Vienna, our studio is where
                lasting elegance and confidence meet. We invite you to embark on
                a journey with us, where every visit leaves you feeling
                empowered and beautiful.
              </p>
            </li>
            <li>
              <h1>Expertise in Permanent Makeup</h1>
              <p>
                Our team of skilled artists possesses a deep understanding of
                Permanent Makeup techniques, ensuring that every stroke and
                detail enhances your features naturally.
              </p>
            </li>
            <li>
              <h1>Safe and Quality Products</h1>
              <p>
                We prioritize your well-being, which is why we use only the
                highest quality, safe, and non-allergenic pigments and
                materials.
              </p>
            </li>
            <li>
              <h1>Welcoming Atmosphere</h1>
              <p>
                Step into our studio, and you&rsquo;ll immediately feel at ease.
                Our warm and inviting ambiance is designed to provide you with a
                comfortable and relaxing experience.
              </p>
            </li>
            <li>
              <h1>Personalized Service</h1>
              <p>
                Your unique beauty deserves a personalized approach. We listen
                to your preferences and work closely with you to achieve the
                results you desire.
              </p>
            </li>
            <li>
              <h1>Passion for Perfection</h1>
              <p>
                We are passionate about what we do, and we strive for perfection
                in every detail. We are committed to ensuring that you leave our
                studio feeling confident and beautiful.
              </p>
            </li>
            <li>
              <h1>Discover Your Natural Radiance</h1>
              <p className={styles.description}>
                Discover Esthetic Frame, where artistry meets beauty and every
                visit is an opportunity to uncover your natural radiance. Our
                journey is your journey, and we&rsquo;re excited to share it
                with you.
              </p>
            </li>
            <li>
              <h1>Meet Our Team</h1>
              <p className={styles.description}>
                Ready to discover the Esthetic Frame experience? Scroll down to
                meet our team and learn about our journey.
              </p>
            </li>
          </ul>
          <div className={styles["team-container"]}>
            <div className={styles["team-member-container"]}>
              <div className={styles["team-image-container"]}>
                <Image
                  src="/team-member-1.jpg"
                  alt="Team Member 1"
                  width={500}
                  height={500}
                  layout="responsive"
                  sizes="(max-width: 500px) 100vw, 500px"
                ></Image>
                <div className={styles["team-member-hero"]}>
                  <h1 className={styles.description}>
                    I&rsquo;m Alexandra Ivan, founder and permanent makeup
                    artist at Esthetic Frame. I&rsquo;m so excited to share my
                    journey with you, and I can&rsquo;t wait to help you
                    discover your natural radiance. Welcome to the world of
                    timeless beauty, where passion meets precision and the art
                    of transformation knows no bounds.
                  </h1>
                </div>
              </div>
              <div className={styles["team-member"]}>
                <ul>
                  <li>
                    <p className={styles.description}>
                      With over five years of experience in the world of
                      cosmetics, my journey has been nothing short of
                      enchanting. It all began with a deep-rooted passion for
                      beauty, particularly when it comes to the exquisite canvas
                      of the face. If there&rsquo;s one thing that has always
                      fascinated me, it&rsquo;s the incredible power of eyebrows
                      to enhance one&rsquo;s natural beauty.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      In my quest for excellence, I sought knowledge from the
                      very best. Elena Copaceanu, a renowned figure in the field
                      of permanent makeup artistry in Romania, became my mentor.
                      Under her expert guidance, I honed my skills and developed
                      a deep understanding of the art, particularly in the realm
                      of the natural style. Elena&rsquo;s influence on my work
                      has been invaluable, and I&rsquo;m proud to say that I
                      carry forward her legacy in every hair stroke I make.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      But the journey didn&rsquo;t stop there. The pursuit of
                      perfection is relentless, and I knew there was more to
                      explore. This led me to a global endeavor, as I joined the
                      prestigious Sviato Academy, renowned worldwide for its
                      excellence in permanent makeup artistry. Here, I&rsquo;ve
                      had the privilege of learning from some of the best in the
                      business, gaining insights and techniques that are not
                      just innovative but also ensure that your beauty remains
                      timeless.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      For me, permanent makeup isn&rsquo;t just a job;
                      it&rsquo;s an art, a calling, and a commitment to
                      enhancing your natural allure. With every client I work
                      with, I strive for quality, precision, and a
                      transformation that leaves you feeling like the best
                      version of yourself. Welcome to my world of permanent
                      makeup, where beauty is my top priority, and your face
                      becomes the canvas upon which I create masterpieces. I
                      can&rsquo;t wait to embark on this journey with you,
                      making your beauty truly everlasting.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </main>
    </>
  );
}

export default About;
