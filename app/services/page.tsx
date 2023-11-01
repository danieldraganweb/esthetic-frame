"use client";
import React, { useState, useEffect } from "react";
import { usePriceList } from "../hooks/useAllTreatmentsPricelist";
import styles from "./services.module.scss";
import Loading from "../loading";
import ContactFormClientContact from "../components/ContactFormClientContact/ContactFormClientContact";

const secondsToTimeFormat = (seconds: number) => {
  if (isNaN(seconds)) {
    return "N/A";
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h:${minutes.toString().padStart(2, "0")}min`;
};

const PriceList: React.FC = () => {
  const { priceList } = usePriceList();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (priceList.length > 0) {
      // Check if priceList data is available
      setLoading(false); // Set loading to false
    }
  }, [priceList]); // Run useEffect when priceList changes

  if (loading) {
    return <Loading />;
  }

  // Group price list items by category
  const categories = Array.from(
    new Set(priceList.map((item) => item.fields.Category))
  );
  const groupedPriceList = categories.map((category) => ({
    category,
    items: priceList.filter((item) => item.fields.Category === category),
  }));

  return (
    <>
      <main className={styles["wrapper"]}>
        <div className={styles["price-list__caption_1"]}>
          <h1 className={styles["title"]}>UNSERE PREISELISTE</h1>
          <p className={styles["price-list__text"]}>
            *Alle Preise verstehen sich in Euro (€).
          </p>
        </div>
        {groupedPriceList.map(({ category, items }) => (
          <div key={category} className={styles["price-list__table"]}>
            <div className={styles["price-list__caption_2"]}>
              <h2 className={styles["price-list__title"]}>{category}</h2>
            </div>
            <div className={styles["price-list__tbody"]}>
              <div className={styles["price-list__thead"]}>
                <h1>Erstbehandlung</h1>
                <h1>Preise</h1>
                <h1>Nachbehandlung*</h1>
                <h1>Dauer</h1>
              </div>
              {items.map((item) => (
                <div key={item.id} className={styles["price-list__row"]}>
                  <h1>{item.fields.TreatmentName}</h1>
                  <h1>{item.fields.Price}€</h1>
                  <h1>{item.fields.Retouch}€</h1>
                  <h1>{secondsToTimeFormat(item.fields.Duration)}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
        <ContactFormClientContact />
      </main>
    </>
  );
};

export default PriceList;
