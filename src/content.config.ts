import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		description: z.string().optional(),
		// Now accepting an array of strings to support multiple categories
		category: z.array(z.string()),
	}),
});

export const collections = { notes };