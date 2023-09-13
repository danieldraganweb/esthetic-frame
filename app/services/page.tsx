"use client";
import React from "react";
import { usePriceList } from "../hooks/useAllTreatmentsPricelist";
import styles from "./services.module.scss";

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
        <caption className={styles["price-list__caption_1"]}>
          <h1 className={styles["title"]}>UNSERE PREISELISTE</h1>
        </caption>
        {groupedPriceList.map(({ category, items }) => (
          <table key={category} className={styles["price-list__table"]}>
            <caption className={styles["price-list__caption_2"]}>
              <h1 className={styles["price-list__title"]}>{category}</h1>
            </caption>
            <thead className={styles["price-list__thead"]}>
              <tr>
                <th>Treatment</th>
                <th>Price</th>
                <th>Retouch</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody className={styles["price-list__tbody"]}>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.fields.TreatmentName}</td>
                  <td>{item.fields.Price}€</td>
                  <td>{item.fields.Retouch}€</td>
                  <td>{secondsToTimeFormat(item.fields.Duration)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
        <p className={styles["price-list__text"]}>
          *All prices are in Euro (€). All prices include VAT.
        </p>
      </main>
    </>
  );
};

export default PriceList;
