import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
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
		// Proficiency level badge: JLPT (N5-N1) for Japanese, TOPIK (TOPIK 1-6)
		// for Korean. One generic field so the template/badge logic doesn't
		// need to branch per language or per test.
		level: z.string().optional(),
		// Optional thumbnail for the /notes index list — currently only used
		// by Tangents entries, which read as richer feed items rather than
		// plain curriculum rows.
		thumbnail: z.string().optional(),
	}),
});

export const collections = { notes };