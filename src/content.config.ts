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

const bundleArtifactSchema = z.object({
	name: z.string(),
	type: z.enum(['skill', 'manifest', 'cron', 'script', 'doc', 'config', 'template', 'bundle', 'prompt', 'concept']),
	path: z.string(),
	description: z.string(),
	optional: z.boolean().optional(),
});

const installStepSchema = z.object({
	title: z.string(),
	detail: z.string(),
	command: z.string().optional(),
});

const requirementSchema = z.object({
	label: z.string(),
	detail: z.string(),
	type: z.enum(['runtime', 'secret', 'access', 'review', 'dependency']),
});

const verificationCheckSchema = z.object({
	label: z.string(),
	detail: z.string(),
	command: z.string().optional(),
	expected: z.string().optional(),
});

const workflows = defineCollection({
	loader: glob({ base: './src/content/workflows', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tagline: z.string(),
		status: z.enum(['Live', 'Internal', 'Draft']),
		isTemplate: z.boolean().optional(),
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
		bundle: z.object({
			id: z.string(),
			version: z.string(),
			classification: z.enum(['local', 'external', 'conceptual']),
			installMode: z.enum(['manual', 'agent-installable', 'prompt-only']),
			reviewStatus: z.enum(['manual-review', 'source-review', 'concept-review']),
			entrypoint: z.string(),
			bundleRoot: z.string(),
			artifactCount: z.number().int().nonnegative(),
			summary: z.string(),
			availabilityNote: z.string(),
			installSource: z
				.object({
					type: z.enum(['local-path', 'github', 'url', 'prompt', 'manual']),
					label: z.string(),
					url: z.string().optional(),
					script: z.string().optional(),
				})
				.optional(),
			installable: z.object({
				supported: z.boolean(),
				method: z.enum(['openclaw-skill', 'script', 'prompt', 'manual', 'concept']),
				sourceUrl: z.string().optional(),
				sourceSpec: z.string().optional(),
				instructions: z.array(z.string()),
				postInstallVerification: z.string().optional(),
				prompt: z.string().optional(),
				limitations: z.array(z.string()).optional(),
			}),
		}),
		artifacts: z.array(bundleArtifactSchema),
		installSteps: z.array(installStepSchema),
		requirements: z.array(requirementSchema),
		verification: z.object({
			mode: z.enum(['manual', 'source-review', 'conceptual']),
			reviewNotes: z.array(z.string()),
			checks: z.array(verificationCheckSchema),
		}),
		structure: z.array(z.string()),
	}),
});

export const collections = { blog, workflows };
