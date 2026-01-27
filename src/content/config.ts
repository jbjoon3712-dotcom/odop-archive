// src/content/config.ts
import { defineCollection, z } from "astro:content";

const odop = defineCollection({
  type: "content",
  schema: z.object({
    day: z.string().optional(),
    subject: z.string().optional(),
    tools: z.array(z.string()).optional(),
    fonts: z.array(z.string()).optional(),
  }),
});

export const collections = { odop };
