import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		title: z.string(),
		// Added order for index-based sorting
		order: z.number(),
		// Changed date to optional to prevent schema validation errors
		date: z.string().optional(),
		description: z.string().optional(),
		// Supporting multiple categories
		category: z.array(z.string()),
		// Adding tags as an optional array to match your template
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { notes };