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
                <th>Erstbehandlung</th>
                <th>Preise</th>
                <th>Nachbehandlung*</th>
                <th>Dauer</th>
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
        <caption className={styles["price-list__caption_3"]}>
          <p className={styles["price-list__text"]}>
            *Die Nachbehandlung ist ein obligatorischer Bestandteil einer
            Permanent-Make-up-Behandlung. Die Nachbehandlung muss 1-1,5 Monate
            nach der ersten Behandlung durchgeführt werden. Eine Behandlung, die
            mehr als 2 Monate später durchgeführt wird, wird als eine
            Erstbehandlung bezahlt.
          </p>
        </caption>
      </main>
    </>
  );
};

export default PriceList;
