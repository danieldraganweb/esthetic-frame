"use client";
import React from "react";
import styles from "./contact.module.scss";
import ContactFormClientContact from "../components/ContactFormClientContact/ContactFormClientContact";
import Image from "next/image";
import { useState } from "react";

function ContactPage() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <main className={styles["contact-main"]}>
        <div className={styles["about-container"]}>
          <div className={styles["about-image-container"]}>
            <Image
              src="/about.jpg"
              alt="About"
              width={1038}
              height={707}
              layout="responsive"
              // sizes="(max-width: 1100px) 100vw, 1100px"
              unoptimized={true}
              blurDataURL="/about.jpg"
              placeholder="blur"
              className={`${styles["about-image"]} ${styles["image"]} ${
                styles["transition-opacity"]
              } ${styles["opacity-0"]} ${
                styles["transition-timing-function"]
              } ${styles["duration-300"]} ${styles["ease-in-out"]}
                      ${loading ? styles["opacity-0"] : styles["opacity-100"]}`}
              onLoad={() => setLoading(false)}
            ></Image>
            <h1 className={styles["about-title"]}>
              Willkommen bei Esthetic Frame!
            </h1>
            <h1 className={styles["about-title"]}>Wir freuen uns auf Sie!</h1>
            <ul className={styles.highlights}>
              <li className={styles["hero"]}>
                <h1>Entdecken Sie Ihre natürliche Ausstrahlung</h1>
                <p>
                  Bei Esthetic Frame sind wir mehr als nur ein Permanent-Make-up
                  Studio; Wir sind Ihr engagierter Partner bei der Verbesserung
                  Ihrer natürliche Schönheit. Unser Studio liegt im Herzen von
                  Wien wo dauerhafte Eleganz und Selbstvertrauen
                  aufeinandertreffen. Wir laden Sie dazu ein Begeben Sie sich
                  mit uns auf eine Reise, auf der Sie jeder Besuch zurücklässt
                  sich gestärkt und schön fühlen.
                </p>
              </li>
              <li>
                <h1>Fachkompetenz im Bereich Permanent Make-up</h1>
                <p>
                  Unser Team aus erfahrenen Künstlern verfügt über ein tiefes
                  Verständnis für Permanente Make-up-Techniken, die
                  sicherstellen, dass jeder Strich und Details betonen Ihre
                  Gesichtszüge auf natürliche Weise.
                </p>
              </li>
              <li>
                <h1>Sichere und hochwertige Produkte</h1>
                <p>
                  Ihr Wohlbefinden steht für uns an erster Stelle, deshalb
                  verwenden wir ausschließlich die höchste Qualität, sichere und
                  nicht allergene Pigmente und Materialien.
                </p>
              </li>
              <li>
                <h1>Einladende Atmosphäre</h1>
                <p>
                  Wenn Sie unser Studio betreten, werden Sie sich sofort
                  wohlfühlen Leichtigkeit. Unser warmes und einladendes Ambiente
                  soll Ihnen helfen Ihnen ein komfortables und entspannendes
                  Erlebnis.
                </p>
              </li>
              <li>
                <h1>Personalisierter Service</h1>
                <p>
                  Ihre einzigartige Schönheit verdient eine individuelle
                  Behandlung. Wir hören zu Wir richten uns nach Ihren Wünschen
                  und arbeiten eng mit Ihnen zusammen, um das zu erreichen
                  Ergebnisse, die Sie sich wünschen.
                </p>
              </li>
              <li>
                <h1>Leidenschaft für Perfektion</h1>
                <p>
                  Wir sind begeistert von dem, was wir tun, und wir streben
                  danach Perfektion in jedem Detail. Dafür setzen wir uns ein
                  Sie verlassen unser Studio mit einem selbstbewussten und
                  schönen Gefühl.
                </p>
              </li>
              <li>
                <h1>Entdecken Sie Ihre natürliche Ausstrahlung</h1>
                <p className={styles.description}>
                  Entdecken Sie Esthetic Frame, wo Kunstfertigkeit auf Schönheit
                  und alles trifft Der Besuch ist eine Gelegenheit, Ihre
                  natürliche Ausstrahlung zu entdecken. Unser Reise ist Ihre
                  Reise, und wir freuen uns, sie mit Ihnen zu teilen mit dir.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <section className={styles["contact-form-section"]}>
          <ContactFormClientContact />
        </section>
      </main>
    </>
  );
}
export default ContactPage;
