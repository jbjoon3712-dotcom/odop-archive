// src/content/config.ts
import { defineCollection, z } from "astro:content";

const odop = defineCollection({
  type: "content",
  schema: z.object({}).passthrough(),
});

export const collections = { odop };
