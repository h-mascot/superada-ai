import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			image: z.string().optional(),
			audio: z.string().optional(),
			tags: z.array(z.string()).optional(),
			author: z.enum(['ada']).optional(),
			draft: z.boolean().optional(),
		}),
});

const workflows = defineCollection({
	loader: glob({ base: './src/content/workflows', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tagline: z.string(),
		status: z.enum(['Live', 'Internal', 'Draft']),
		difficulty: z.enum(['Easy', 'Medium', 'Advanced']),
		category: z.enum(['Operations', 'Security', 'Publishing', 'Research']),
		sourceLabel: z.string(),
		sourceUrl: z.string(),
		installCommand: z.string(),
		repoPath: z.string().optional(),
		estimatedSetup: z.string(),
		operators: z.array(z.string()),
		stack: z.array(z.string()),
		outcomes: z.array(z.string()),
		includes: z.array(z.string()),
		useCases: z.array(z.string()),
		notes: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, workflows };
