import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.scss";
import ScrollHorizontalIcon from "../SvgHorizontalScrollIcon";
import CubeSVG from "../CubeSVG";
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import AllGoogleReviews from "../GoogleReviews/AllGoogleReviews";

const Services: React.FC<{ className?: string }> = () => {
  const handleScrollLeft = () => {
    const container = document.getElementById("services-scroll-container");
    if (container) {
      const snapWidth = container.scrollWidth / container.childElementCount;
      container.scrollLeft -= snapWidth + 16;
    }
  };

  const handleScrollRight = () => {
    const container = document.getElementById("services-scroll-container");
    if (container) {
      const snapWidth = container.scrollWidth / container.childElementCount;
      container.scrollLeft += snapWidth + 16;
    }
  };

  return (
    <>
      <main className={styles["services-main"]}>
        <div className={styles["services-title-container-1"]}>
          <div className={styles["service-section"]}>
            <h1 className={styles["section-title"]}>
              Enthülle deine wahre Schönheit mit unseren Dienstleistungen
            </h1>
            <h2 className={styles["section-description"]}>
              Erlebe die transformative Kraft unserer Permanent
              Make-up-Dienstleistungen. Unser Team von Experten wird deine
              natürlichen Merkmale verbessern und dir einen makellosen und
              langanhaltenden Look verleihen.
            </h2>
            {/* <h2 className={styles["section-description"]}></h2> */}
            <ul className={styles["service-list"]}>
              <li className={styles["service-list-item"]}>
                <CubeSVG />
                <h3 className={styles["section-option"]}>
                  Steigere dein Selbstvertrauen mit natürlichen Ergebnissen
                </h3>
              </li>
              <li className={styles["service-list-item"]}>
                <CubeSVG />
                <h3 className={styles["section-option"]}>
                  Erreiche mühelose Schönheit mit unseren Expertentechniken
                </h3>
              </li>
              <li className={styles["service-list-item"]}>
                <CubeSVG />
                <h3 className={styles["section-option"]}>
                  Spare Zeit und sieh jeden Tag großartig aus
                </h3>
              </li>
            </ul>
          </div>
          <GoogleReviews />
          <div className={styles["services-scroll-container-svg"]}>
            <ScrollHorizontalIcon />
          </div>
          <AllGoogleReviews />
        </div>

        <div className={styles["services-container"]} id="services-container">
          <div
            className={styles["services-title-container-2"]}
            id="services-scroll-container"
          >
            <div className={styles["service-item"]}>
              <Link href="/blog/recyyGJSEBJMxaej5">
                <Image
                  unoptimized={true}
                  src="/services1.webp"
                  alt="services"
                  width={358}
                  height={300}
                  // sizes="(max-width: 300px) 100vw, 300px"
                  priority={true}
                  // layout="responsive"
                  style={{
                    objectFit: "cover",
                    borderRadius: "1em",
                  }}
                  className={styles["services-image"]}
                  blurDataURL="/services5.jpg"
                  placeholder="blur"
                />
                <h1 className={styles["services-title-2"]}>
                  3D Härchentechnik
                </h1>
                <p className={styles["services-subtitle-2"]}>
                  Erreichen Sie perfekt geformte Augenbrauen mit unseren
                  Microblading-Services. Wir verwenden die neuesten Techniken,
                  um Ihnen die besten Ergebnisse zu bieten.
                </p>
              </Link>
            </div>

            <div className={styles["service-item"]}>
              <Link href="/blog/recsJXpKwrkjRcw6F">
                <Image
                  unoptimized={true}
                  src="/services3.webp"
                  alt="services"
                  width={358}
                  height={300}
                  // sizes="(max-width: 300px) 100vw, 300px"
                  priority={true}
                  style={{
                    objectFit: "cover",
                    borderRadius: "1em",
                  }}
                  className={styles["services-image"]}
                  blurDataURL="/services5.jpg"
                  placeholder="blur"
                />
                <h1 className={styles["services-title-4"]}>
                  “Aquarellippen” Permanent Make-up
                </h1>
                <p className={styles["services-subtitle-4"]}>
                  Unsere permanenten Lippenstift-Services sind perfekt für
                  diejenigen, die einen natürlichen Kussmund ohne die Mühe des
                  täglichen Schminkens haben möchten.
                </p>
              </Link>
            </div>
            <div className={styles["service-item"]}>
              <Link href="/blog/recc4cc4FS25E1Wvq">
                <Image
                  unoptimized={true}
                  src="/services2.webp"
                  alt="services"
                  width={358}
                  height={300}
                  // sizes="(max-width: 300px) 100vw, 300px"
                  priority={true}
                  style={{
                    objectFit: "cover",
                    borderRadius: "1em",
                  }}
                  className={styles["services-image"]}
                  blurDataURL="/services5.jpg"
                  placeholder="blur"
                />
                <h1 className={styles["services-title-4"]}>
                  Schattierte Augenbrauen “Powder Brows”
                </h1>
                <p className={styles["services-subtitle-4"]}>
                  Unsere permanenten Augenbrauenpigmentierungs-Services sind
                  perfekt für diejenigen, die natürliche Augenbrauen ohne die
                  Mühe des täglichen Schminkens haben möchten.
                </p>
              </Link>
            </div>
            <div className={styles["service-item"]}>
              <Link href="/blog/receoeTflSkGKMvhK">
                <Image
                  unoptimized={true}
                  src="/services4.webp"
                  alt="services"
                  width={358}
                  height={300}
                  // sizes="(max-width: 300px) 100vw, 300px"
                  priority={true}
                  // layout="responsive"
                  style={{
                    objectFit: "cover",
                    borderRadius: "1em",
                  }}
                  className={styles["services-image"]}
                  blurDataURL="/services5.jpg"
                  placeholder="blur"
                />
                <h1 className={styles["services-title-3"]}>
                  Klassicher oder Schattierter Lidstrich
                </h1>
                <p className={styles["services-subtitle-3"]}>
                  Erzielen Sie den gewünschten Look mit unseren permanenten
                  Eyeliner-Services. Wir bieten eine Vielzahl von Stilen und
                  Farben, um Ihren Bedürfnissen gerecht zu werden.
                </p>
              </Link>
            </div>
            <div className={styles["service-item"]}>
              <Link href="/blog/recuYQwh3EmWpKOVE">
                <Image
                  unoptimized={true}
                  src="/services5.webp"
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
                  blurDataURL="/services5.jpg"
                  placeholder="blur"
                />
                <h1 className={styles["services-title-4"]}>
                  Wimpernkranzverdichtung
                </h1>
                <p className={styles["services-subtitle-4"]}>
                  Wer eine besonders natürliche Betonung der Augen bevorzugt,
                  entscheidet sich für eine Optimierung der Wimpern durch die
                  Betonung des Wimpernkranzes.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["services-scroll-container"]}>
          <button
            className={styles["services-scroll-button"]}
            onClick={handleScrollLeft}
          >
            <span>{"<"}</span>
          </button>
          <ScrollHorizontalIcon />
          <button
            className={styles["services-scroll-button"]}
            onClick={handleScrollRight}
          >
            <span>{">"}</span>
          </button>
        </div>
        <div className={styles["services-btn-container"]}>
          <Link href="/services">
            <button className={styles["services-button"]}>
              Alle Dienstleistungen
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Services;
