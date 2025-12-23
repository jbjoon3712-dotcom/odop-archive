import { defineCollection, z } from "astro:content";

const odop = defineCollection({
  type: "content",
  schema: z.object({
    day: z.number(),
    total: z.string().optional(),
    subject: z.string().optional(),
    tools: z.array(z.string()).optional(),
    fonts: z.array(z.string()).optional(),
  }),
});

export const collections = { odop };
