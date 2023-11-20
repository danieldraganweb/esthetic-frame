"use client";
import React from "react";
import styles from "./error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <main className={styles["error-main"]}>
        <div className={styles["error-container"]}>
          <h1>Hoppla! Etwas ist schiefgelaufen.</h1>
          <p>
            Wir haben einen Fehler bei der Verarbeitung Ihrer Anfrage
            festgestellt. Hier sind einige Informationen, die Ihnen helfen
            könnten zu verstehen, was schief gelaufen ist:
          </p>
          <div className={styles["error-details"]}>
            <p>
              <strong>Fehlermeldung:</strong> {error.message}
            </p>
            {error.digest && (
              <p>
                <strong>Fehler-Digest:</strong> {error.digest}
              </p>
            )}
          </div>
          <p>
            Wenn dieses Problem weiterhin besteht, versuchen Sie bitte die
            folgenden Schritte:
          </p>

          <p>Aktualisieren Sie die Seite und versuchen Sie es erneut.</p>
          <p>
            Wenn das Problem weiterhin besteht, klicken Sie auf die Schaltfläche
            Erneut versuchen unten.
          </p>
          <p>
            Falls das Problem fortbesteht, kontaktieren Sie den Support für
            weitere Unterstützung.
          </p>

          <button onClick={() => reset()}>Erneut versuchen</button>
        </div>
      </main>
    </>
  );
}
