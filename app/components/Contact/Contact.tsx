import React from "react";
import styles from "./Contact.module.scss";
import PhoneSVG from "../PhoneSVG";
import EmailSVG from "../EmailSVG";
import LocationSVG from "../LocationSVG";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-info"]}>
          <div className={styles["contact-info-text-image"]}>
            <div className={styles["contact-info-text"]}>
              <h1>Kontaktieren Sie Uns</h1>
              <h3>Wir würden gerne von Ihnen hören!</h3>
              <h3>
                Wir interessieren uns immer für das Feedback unserer Kunden,
                damit wir unseren Service verbessern können. Zögern Sie nicht,
                uns bei Fragen oder Anliegen zu kontaktieren oder einen Termin
                zu vereinbaren.
              </h3>
              <h3> Wir freuen uns auf Ihre Nachricht!</h3>
            </div>
          </div>
          <div className={styles["contact-info-links"]}>
            <ul>
              <h1 className={styles.title}>
                {" "}
                <strong>Kontakt</strong>
              </h1>
              <li>
                <div className={styles["contact-info-links-phone"]}>
                  <PhoneSVG />
                </div>
                <div className={styles["contact-info-links-phone-text"]}>
                  <h2>Telefon</h2>
                  <Link href="tel:+4368120562535"> +4368120562535</Link>
                </div>
              </li>
              <li>
                <div className={styles["contact-info-links-email"]}>
                  <EmailSVG />
                </div>
                <div className={styles["contact-info-links-email-text"]}>
                  <h2>E-mail</h2>
                  <a href="mailto:estheticframe@proton.me">
                    estheticframe@proton.me
                  </a>
                </div>
              </li>
              <li>
                <div className={styles["contact-info-links-location"]}>
                  <LocationSVG />
                </div>
                <div className={styles["contact-info-links-location-text"]}>
                  <h2>Adresse</h2>
                  <Link
                    href="https://www.google.com/maps/place/Esthetic+Frame+by+Alexandra+Ivan+@Wellbeing,+Alserbachstraße+5,+1090+Wien,+Austria/@48.2252483,16.3559411,17z/data=!4m15!1m8!3m7!1s0x476d07c9024eaf13:0x12a0eeb8a91ed08!2sAlserbachstraße+5,+1090+Wien,+Austria!8m2!3d48.2252483!4d16.3559411!10e3!16s%2Fg%2F11b8v4drby!3m5!1s0x476d07acca53354b:0xc288f4e3766f27e3!8m2!3d48.2252483!4d16.3559411!16s%2Fg%2F11ksb9ftqg"
                    target="_blank"
                  >
                    {" "}
                    Alserbachstraße 5, 1090, Wien
                  </Link>
                </div>
              </li>
            </ul>
            <div className={styles["contact-hero"]}>
              <h1 className={styles.title}>
                {" "}
                <strong>Öffnungszeiten:</strong>
              </h1>
              <p>Montag - Freitag: 9:00 - 16:00</p>
              <p>Samstag: Geschlossen</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
        </div>
        <div className={styles["map-container"]}>
          <iframe
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={parseInt("0")}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Alserbachstra%C3%9Fe%205n+(ESTHETIC%20FRAME)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
