import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.scss";
import ScrollHorizontalIcon from "../SvgHorizontalScrollIcon";

function Services() {
  return (
    <>
      <main className={styles["services-main"]}>
        <div className={styles["services-title-container-1"]}>
          <h1 className={styles["services-title-1"]}>
            Beliebte Dienstleistungen
          </h1>
        </div>
        <div className={styles["services-container"]}>
          <div className={styles["snaps-inline"]}>
            <div className={styles["services-title-container-2"]}>
              <div className={styles["service-item"]}>
                <Link href="/services">
                  <Image
                    src="/services1.jpg"
                    alt="services"
                    width={358}
                    height={300}
                    sizes="(max-width: 300px) 100vw, 300px"
                    priority={true}
                    // layout="responsive"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1em",
                    }}
                    className={styles["services-image"]}
                  />
                  <h1 className={styles["services-title-2"]}>
                    Augenbrauen Microblading
                  </h1>
                  <p className={styles["services-subtitle-2"]}>
                    Erreichen Sie perfekt geformte Augenbrauen mit unseren
                    Microblading-Services. Wir verwenden die neuesten Techniken,
                    um Ihnen die besten Ergebnisse zu bieten.
                  </p>
                </Link>
              </div>
              <div className={styles["service-item"]}>
                <Link href="/services">
                  <Image
                    src="/services4.jpg"
                    alt="services"
                    width={358}
                    height={300}
                    sizes="(max-width: 300px) 100vw, 300px"
                    priority={true}
                    // layout="responsive"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1em",
                    }}
                    className={styles["services-image"]}
                  />
                  <h1 className={styles["services-title-3"]}>
                    Permanenter Eyeliner
                  </h1>
                  <p className={styles["services-subtitle-3"]}>
                    Erzielen Sie den gewünschten Look mit unseren permanenten
                    Eyeliner-Services. Wir bieten eine Vielzahl von Stilen und
                    Farben, um Ihren Bedürfnissen gerecht zu werden.
                  </p>
                </Link>
              </div>
              <div className={styles["service-item"]}>
                <Link href="/services">
                  <Image
                    src="/services3.jpg"
                    alt="services"
                    width={358}
                    height={300}
                    sizes="(max-width: 300px) 100vw, 300px"
                    priority={true}
                    style={{
                      objectFit: "cover",
                      borderRadius: "1em",
                    }}
                    className={styles["services-image"]}
                  />
                  <h1 className={styles["services-title-4"]}>Lippenblush</h1>
                  <p className={styles["services-subtitle-4"]}>
                    Unsere permanenten Lippenstift-Services sind perfekt für
                    diejenigen, die einen natürlichen Kussmund ohne die Mühe des
                    täglichen Schminkens haben möchten.
                  </p>
                </Link>
              </div>
              <div className={styles["service-item"]}>
                <Link href="/services">
                  <Image
                    src="/services2.jpg"
                    alt="services"
                    width={358}
                    height={300}
                    sizes="(max-width: 300px) 100vw, 300px"
                    priority={true}
                    style={{
                      objectFit: "cover",
                      borderRadius: "1em",
                    }}
                    className={styles["services-image"]}
                  />
                  <h1 className={styles["services-title-4"]}>
                    Augenbrauenpigmentierung
                  </h1>
                  <p className={styles["services-subtitle-4"]}>
                    Unsere permanenten Augenbrauenpigmentierungs-Services sind
                    perfekt für diejenigen, die natürliche Augenbrauen ohne die
                    Mühe des täglichen Schminkens haben möchten.
                  </p>
                </Link>
              </div>
              <div className={styles["service-item"]}>
                <Link href="/services">
                  <Image
                    src="/services5.jpg"
                    alt="services"
                    width={358}
                    height={300}
                    sizes="(max-width: 1100px) 100vw, 600px"
                    priority={true}
                    // layout="responsive"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1em",
                    }}
                    className={styles["services-image"]}
                  />
                  <h1 className={styles["services-title-4"]}>
                    Wimpern-Microblading
                  </h1>
                  <p className={styles["services-subtitle-4"]}>
                    Unsere permanenten Wimpern-Microblading-Services bieten eine
                    Vielzahl von Stilen und Farben, um Ihren Bedürfnissen
                    gerecht zu werden.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <ScrollHorizontalIcon />
          <div className={styles["services-btn-container"]}>
            <Link href="/services">
              <button className={styles["services-button"]}>
                Alle Dienstleistungen
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Services;
