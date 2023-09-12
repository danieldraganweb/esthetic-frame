import Airtable from "airtable";
import { useEffect, useState } from "react";
import { BlogPostContent } from "../types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Blog Page");

// hook
export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPostContent[]>([]);

  // fetcher
  const getAllBlogPosts = async () => {
    const records = await table.select().all();
    setBlogPosts(records as any);
    console.log(records);
  };

  // load on mount
  useEffect(() => {
    getAllBlogPosts();
  }, []);

  // export
  return { blogPosts };
}
