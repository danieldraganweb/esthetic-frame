import Airtable from "airtable";
import { useEffect, useState } from "react";
import { GalleryImage } from "../types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Gallery");

// hook
export function useGalleryImages() {
  const [images, setAllImages] = useState<GalleryImage[]>([]);

  // fetcher
  const getAllImages = async () => {
    const records = await table.select().all();
    setAllImages(records as any);
    console.log(records);
  };

  // load on mount
  useEffect(() => {
    getAllImages();
  }, []);

  // export
  return { images };
}
