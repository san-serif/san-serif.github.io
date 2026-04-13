import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- This is the missing piece

const notes = defineCollection({
	// The loader explicitly grabs all .md files in your notes folder
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		description: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional().default([]),
	}),
});

export const collections = { notes };