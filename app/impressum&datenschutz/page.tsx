import React from "react";
import styles from "./ImpressumAndDatenschutz.module.scss";
import Link from "next/link";

function ImpressumAndDatenschutz() {
  return (
    <>
      <main className={styles["main"]}>
        <div className={styles["privacy-policy"]}>
          <h1>Impressum</h1>
          <p>
            Angaben gemäß Informationspflicht laut §5 E-Commerce Gesetz, §14
            Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
            laut §25 Mediengesetz.
          </p>
          <p>Esthetic Frame e.U</p>
          <p>Silviana-Alexandra Ivan</p>
          <p>Wien, Österreich</p>
          <p>
            Unternehmensgegenstand: Kosmetik (Schönheitspflege) eingeschränkt
            auf Permanent Make up
          </p>
          <p>GLN: 9110028203909</p>
          <p>GISA: 36193318</p>
          <p>Firmenbuchnummer: FN521436v</p>
          <p>Firmenbuchgericht: HG Wien</p>
          <p>Firmensitz: Alserbachstraße 5/29, 1090, Wien</p>
          <p>Tel.: +4368120562535</p>
          <p>E-Mail: estheticframe@proton.me</p>
          <p>Mitglied bei: WKO</p>
          <p>Berufsrecht: Gewerbeordnung: www.ris.bka.gv.at</p>
          <p>
            Aufsichtsbehörde/Gewerbebehörde: Magistratisches Bezirksamt des IX.
            Bezirkes
          </p>
          <p>
            Berufsbezeichnung: Kosmetik (Schönheitspflege), eingeschränkt auf
            Permanent Make-Up
          </p>
          <p>Verleihungsstaat: Österreich</p>
          <h2>Kontaktdaten des Verantwortlichen für Datenschutz</h2>
          <p>
            Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die
            Kontaktdaten der verantwortlichen Person bzw. Stelle:
          </p>
          <p>Esthetic Frame e.U</p>
          <p>Alserbachstraße 5/29, 1090, Wien</p>
          <p>Vertretungsberechtigt: Silviana-Alexandra Ivan</p>
          <p>E-Mail-Adresse: estheticframe@proton.me</p>
          <p>Telefon: +43 681 205 62 535</p>
          <p>Impressum: https://www.estheticframe.at/impressum/</p>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Gemäß Verordnung über Online-Streitbeilegung in
            Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
            Online-Streitbeilegungsplattform (OS-Plattform) informieren.
            Verbraucher haben die Möglichkeit, Beschwerden an die Online
            Streitbeilegungsplattform der Europäischen Kommission unter{" "}
            <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE">
              https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
            </Link>{" "}
            zu richten.
          </p>
          <h1>Haftung für Inhalte dieser Website</h1>
          <p>
            Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen
            uns korrekte und aktuelle Informationen bereitzustellen. Leider
            können wir keine Haftung für die Korrektheit aller Inhalte auf
            dieser Website übernehmen, speziell für jene, die seitens Dritter
            bereitgestellt wurden. Als Diensteanbieter sind wir nicht
            verpflichtet, die von Ihnen übermittelten oder gespeicherten
            Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Unsere Verpflichtungen zur Entfernung von Informationen oder zur
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben
            auch im Falle unserer Nichtverantwortlichkeit davon unberührt.
          </p>
          <p>
            Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
            bitte wir Sie uns umgehend zu kontaktieren, damit wir die
            rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
            im Impressum.
          </p>
          <h1>Haftung für Links auf dieser Website</h1>
          <p>
            Unsere Website enthält Links zu anderen Websites für deren Inhalt
            wir nicht verantwortlich sind. Haftung für verlinkte Websites
            besteht für uns nicht, da wir keine Kenntnis rechtswidriger
            Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch
            bisher nicht aufgefallen sind und wir Links sofort entfernen würden,
            wenn uns Rechtswidrigkeiten bekannt werden.
          </p>
          <p>
            Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
            wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im
            Impressum.
          </p>
          <h1>Urheberrechtshinweis</h1>
          <p>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
            unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
            Inhalte dieser Website verbreiten, vervielfältigen oder verwerten
            wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
            notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte
            unserer Seite rechtlich verfolgen.
          </p>
          <p>
            Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
            verletzen, bitten wir Sie uns zu kontaktieren.
          </p>
          <p>Alle Texte sind urheberrechtlich geschützt.</p>
          <div className={styles["GDPR-policy"]}>
            <h1>Datenschutzerklärung</h1>
            <Link href="/Impressum&Datenschutz.pdf" target="_blank">
              <button>Herunterladen Datenschutzer</button>
            </Link>
            <p>
              *Der Link öffnet in einem neuen Tab. Sie können auch mit der
              rechten Maustaste klicken und &apos;Link speichern unter&apos;
              auswählen, um die Datei herunterzuladen.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default ImpressumAndDatenschutz;
