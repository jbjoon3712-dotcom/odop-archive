import { defineCollection, z } from "astro:content";

export const collections = {
  odop: defineCollection({
    type: "content",
    schema: z.object({
      day: z.string(),
      subject: z.string().optional(),
      tools: z.array(z.string()).nullable().optional(),
      fonts: z.array(z.string()).nullable().optional(),

    }),
  }),
};

