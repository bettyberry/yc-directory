// usually in sanity/lib/live.ts
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: false,
  browserToken: false,
});
