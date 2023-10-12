import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import Contact from "../components/Contact/Contact";

function About() {
  return (
    <>
      <main>
        <div className={styles["about-container"]}>
          <div className={styles["team-container"]}>
            <div className={styles["team-member-container"]}>
              <div className={styles["team-image-container"]}>
                <Image
                  src="/team-member-1.jpg"
                  alt="Team Member 1"
                  width={335}
                  height={500}
                  // layout="responsive"
                  sizes="(max-width: 500px) 100vw, 500px"
                  loading="eager"
                  // style={{
                  //   borderRadius: "50%",
                  //   objectFit: "cover",
                  // }}
                ></Image>
                <div className={styles["team-member-hero"]}>
                  <h1 className={styles.description}>
                    I&rsquo;m Alexandra Ivan, founder and permanent makeup
                    artist at Esthetic Frame. I&rsquo;m so excited to share my
                    journey with you and I can&rsquo;t wait to help you discover
                    your natural radiance. Welcome to the world of timeless
                    beauty, where passion meets precision and the art of
                    transformation knows no bounds.
                  </h1>
                  <div className={styles["star-logo"]}>
                    <Image
                      src="/1-star logo.png"
                      alt="Team Member 1"
                      width={100}
                      height={100}
                      // layout="responsive"
                      sizes="(max-width: 500px) 100vw, 500px"
                      loading="lazy"
                    ></Image>
                    <h1>Kamila Stetsenko</h1>
                    <p>Permanent Make-up Academy Artist Graduate</p>
                  </div>
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
