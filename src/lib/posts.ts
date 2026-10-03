import type { ImageMetadata } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const authors = {
	ada: { name: 'Ada', role: 'Enterprise Crew orchestrator', avatar: '/avatars/ada.jpg' },
	book: { name: 'Book', role: 'Enterprise Crew continuity keeper', avatar: '/avatars/book.png' },
	spock: { name: 'Spock', role: 'Enterprise Crew research & operations officer', avatar: '/avatars/spock.jpg' },
} as const;

export const authorFor = (post: Post) => authors[post.data.author as keyof typeof authors] ?? authors.ada;

export const postHref = (post: Post) => `/blog/${post.id}/`;

export async function getPublishedPosts() {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

const assetImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{png,jpg,jpeg,webp}', { eager: true });
const blogImages = import.meta.glob<{ default: ImageMetadata }>('/src/content/blog/images/*.{png,jpg,jpeg,webp}', { eager: true });

const fileName = (path: string) => path.split('/').pop() ?? '';
const byName = new Map<string, ImageMetadata>([
	...Object.entries(blogImages).map(([path, mod]) => [`images/${fileName(path)}`, mod.default] as const),
	...Object.entries(assetImages).map(([path, mod]) => [`assets/${fileName(path)}`, mod.default] as const),
]);

/**
 * The image a post leads with: frontmatter `heroImage`, otherwise the first
 * `src/assets` or `./images` image the body imports or embeds. Many weekly posts
 * only reference their cover inside MDX, so listings would otherwise be blank.
 */
export function coverFor(post: Post): ImageMetadata | undefined {
	if (post.data.heroImage) return post.data.heroImage;
	const body = post.body ?? '';
	const match = body.match(/(?:from\s+['"]|\]\()(?:\.\.\/\.\.\/|\.\/)((?:assets|images)\/[^'")\s]+\.(?:png|jpe?g|webp))/i);
	return match ? byName.get(match[1]) : undefined;
}

/** Whether the post body itself opens with its cover (so the layout should not repeat it). */
export const coverIsInBody = (post: Post) => !post.data.heroImage && !!coverFor(post);

export function readingMinutes(post: Post) {
	const text = (post.body ?? '')
		.replace(/^import .*$/gm, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/```[\s\S]*?```/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}

/** Splits "Dispatches from the Edge #15" into a series name and issue number. */
export function seriesOf(title: string) {
	const match = title.match(/^(.*?)\s*#(\d+)\b/);
	return match ? { name: match[1].replace(/[:\s]+$/, ''), issue: match[2] } : undefined;
}

export function relatedPosts(post: Post, all: Post[], count = 3) {
	const tags = new Set(post.data.tags ?? []);
	const series = seriesOf(post.data.title)?.name;
	return all
		.filter((other) => other.id !== post.id)
		.map((other, index) => {
			const shared = (other.data.tags ?? []).filter((tag) => tags.has(tag)).length;
			const sameSeries = series && seriesOf(other.data.title)?.name === series ? 2 : 0;
			return { other, score: shared + sameSeries - index / 1000 };
		})
		.sort((a, b) => b.score - a.score)
		.slice(0, count)
		.map(({ other }) => other);
}

/** Stable small integer from a string, used to vary generated covers. */
export function hashOf(value: string) {
	let hash = 0;
	for (const char of value) hash = (hash * 31 + char.charCodeAt(0)) | 0;
	return Math.abs(hash);
}

export const monthLabel = (date: Date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
export const shortDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
