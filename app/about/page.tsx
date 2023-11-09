"use client";
import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import { useState } from "react";
function About() {
  const [loading, setLoading] = useState(true);
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
                  width={500}
                  height={750}
                  // sizes="(max-width: 500px) 100vw, 500px"
                  loading="lazy"
                  blurDataURL="/team-member-1.jpg"
                  placeholder="blur"
                  unoptimized={true}
                  // layout="responsive"
                  className={`${styles["image"]} ${
                    styles["transition-opacity"]
                  } ${styles["opacity-0"]} ${
                    styles["transition-timing-function"]
                  } ${styles["duration-300"]} ${styles["ease-in-out"]}
                          ${
                            loading
                              ? styles["opacity-0"]
                              : styles["opacity-100"]
                          }`}
                  onLoadingComplete={(src) =>
                    src.classList.remove(styles["opacity-0"])
                  }
                ></Image>
                <div className={styles["team-member-hero"]}>
                  <h1>
                    Ich bin Alexandra Ivan, Gründerin und Permanent
                    Make-up-Künstlerin bei Esthetic Frame. Ich freue mich sehr,
                    meine Reise mit Ihnen zu teilen, und ich kann es kaum
                    erwarten, Ihnen zu helfen, Ihre natürliche Strahlkraft zu
                    entdecken.
                  </h1>
                  <h1>
                    Willkommen in der Welt zeitloser Schönheit, wo Leidenschaft
                    auf Präzision trifft und die Kunst der Verwandlung keine
                    Grenzen kennt.
                  </h1>
                  <div className={styles["star-logo"]}>
                    <Image
                      src="/1-star logo.png"
                      alt="Team Member 1"
                      width={150}
                      height={150}
                      // layout="responsive"
                      // sizes="(max-width: 500px) 100vw, 500px"
                      loading="lazy"
                      blurDataURL="/1-star logo.png"
                      placeholder="blur"
                      unoptimized={true}
                    ></Image>
                    <h1>Sviato Academy</h1>
                    <p>Absolvent der Permanent Make-up-Akademie</p>
                  </div>
                </div>
              </div>
              <div className={styles["team-member"]}>
                <ul>
                  <li>
                    <p className={styles.description}>
                      &nbsp;&nbsp;Mit über fünf Jahren Erfahrung in der Welt der
                      Kosmetik war meine Reise nichts weniger als bezaubernd.
                      Alles begann mit einer tief verwurzelten Leidenschaft für
                      Schönheit, insbesondere wenn es um die exquisite Leinwand
                      des Gesichts geht. Wenn es etwas gibt, das mich immer
                      fasziniert hat, dann ist es die unglaubliche Kraft von
                      Augenbrauen, die die natürliche Schönheit eines Menschen
                      unterstreichen.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      &nbsp;&nbsp;In meinem Streben nach Exzellenz suchte ich
                      Wissen bei den Besten. Elena Copaceanu, eine renommierte
                      Persönlichkeit auf dem Gebiet der Permanent Make-up-Kunst
                      in Rumänien, wurde meine Mentorin. Unter ihrer
                      fachkundigen Anleitung schärfte ich meine Fähigkeiten und
                      entwickelte ein tiefes Verständnis für die Kunst,
                      insbesondere im Bereich des natürlichen Stils. Elenas
                      Einfluss auf meine Arbeit war von unschätzbarem Wert, und
                      ich bin stolz darauf zu sagen, dass ich ihr Erbe in jedem
                      einzelnen Haarstrich fortführe.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      &nbsp;&nbsp;Aber die Reise endete hier nicht. Die
                      Verfolgung der Perfektion ist unermüdlich, und ich wusste,
                      dass es noch mehr zu erkunden gab. Dies führte mich zu
                      einem globalen Unternehmen, als ich der angesehenen Sviato
                      Academy beitrat, die weltweit für ihre Exzellenz in der
                      Permanent Make-up-Kunst bekannt ist. Hier hatte ich das
                      Privileg, von einigen der Besten der Branche zu lernen,
                      Erkenntnisse und Techniken zu gewinnen, die nicht nur
                      innovativ sind, sondern auch sicherstellen, dass Ihre
                      Schönheit zeitlos bleibt.
                    </p>
                  </li>
                  <li>
                    <p className={styles.description}>
                      &nbsp;&nbsp;Für mich ist Permanent Make-up nicht nur ein
                      Beruf; es ist eine Kunst, eine Berufung und ein
                      Engagement, um Ihre natürliche Anziehung zu steigern. Mit
                      jedem Kunden, den ich betreue, strebe ich nach Qualität,
                      Präzision und einer Verwandlung, die Sie fühlen lässt, wie
                      die beste Version Ihrer selbst. Willkommen in meiner Welt
                      des Permanent Make-up, in der Schönheit oberste Priorität
                      hat und Ihr Gesicht zur Leinwand wird, auf der ich
                      Meisterwerke schaffe. Ich kann es kaum erwarten, diese
                      Reise mit Ihnen anzutreten und Ihre Schönheit wirklich
                      unvergänglich zu machen.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
