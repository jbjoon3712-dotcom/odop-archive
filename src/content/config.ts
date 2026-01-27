import { defineCollection, z } from "astro:content";

const odop = defineCollection({
  type: "content",
  schema: z.object({
    day: z.string().optional(),
    subject: z.string().optional(),
    tools: z.array(z.string()).optional().default([]),
    fonts: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { odop };

