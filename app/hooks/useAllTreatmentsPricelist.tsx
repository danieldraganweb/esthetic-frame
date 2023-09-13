import Airtable from "airtable";
import { useEffect, useState } from "react";
import { PriceListItem } from "../types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("TREATMENTS");

// hook
export function usePriceList() {
  const [priceList, setPriceList] = useState<PriceListItem[]>([]);
  //   console.log(priceList);
  // fetcher
  const getAllPriceListItems = async () => {
    const records = await table.select().all();
    setPriceList(records as any);
    // console.log(records);
  };

  // load on mount
  useEffect(() => {
    getAllPriceListItems();
  }, []);

  // export
  return { priceList };
}

//SOLUTION 2 - NOT WORKING - NEED TO FIX IT Fetching data from Airtable with React Hook that already organised by category
// import { useEffect, useState } from "react";
// import { PriceListItem } from "../types/PriceListItem";
// import { airtableBase } from "../utils/airtableBase";

// type GroupedPriceList = {
//   category: string;
//   items: PriceListItem[];
// };

// export const usePriceList = (): { priceList: GroupedPriceList[] } => {
//   const [priceList, setPriceList] = useState<GroupedPriceList[]>([]);

//   useEffect(() => {
//     const fetchPriceList = async () => {
//       const records = await airtableBase("Price List")
//         .select({ view: "Grid view" })
//         .all();

//       const groupedPriceList = records.reduce((acc, record) => {
//         const category = record.get("Category") as string;
//         const item = {
//           id: record.id,
//           fields: {
//             TreatmentName: record.get("Treatment Name") as string,
//             Price: record.get("Price") as number,
//             Retouch: record.get("Retouch") as number,
//             Duration: record.get("Duration") as number,
//             Category: category,
//           },
//         };
//         const index = acc.findIndex((group) => group.category === category);
//         if (index === -1) {
//           return [...acc, { category, items: [item] }];
//         } else {
//           acc[index].items.push(item);
//           return acc;
//         }
//       }, [] as GroupedPriceList[]);

//       setPriceList(groupedPriceList);
//     };

//     fetchPriceList();
//   }, []);

//   return { priceList };
// };
