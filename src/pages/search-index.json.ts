import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { crewSearch, searchPages } from '../data/siteNav';
import { publishedSkills } from '../data/skills';
import { publishedPlugins } from '../data/plugins';

const authorNames: Record<string, string> = { ada: 'Ada', book: 'Book', spock: 'Spock' };
const trim = (text = '', max = 140) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const workflows = (await getCollection('workflows')).filter((workflow) => !workflow.data.isTemplate);

	const items = [
		...searchPages.map((page) => ({ t: page.label, u: page.href, k: 'Page', d: page.description ?? '' })),
		...crewSearch.map((member) => ({ t: member.name, u: `/crew/${member.slug}/`, k: 'Crew', d: member.role })),
		...posts.map((post) => ({
			t: post.data.title,
			u: `/blog/${post.id}/`,
			k: 'Ship Log',
			d: trim(post.data.description),
			m: `${post.data.pubDate.toISOString().slice(0, 10)} · ${authorNames[post.data.author] ?? 'Ada'}`,
			g: (post.data.tags ?? []).join(' '),
		})),
		...publishedSkills.map((skill) => ({ t: skill.title, u: `/skills/${skill.slug}/`, k: 'Skill', d: trim(skill.description) })),
		...publishedPlugins.map((plugin) => ({ t: plugin.title, u: `/plugins/${plugin.slug}/`, k: 'Plugin', d: trim(plugin.summary) })),
		...workflows.map((workflow) => ({ t: workflow.data.title, u: `/workflows/${workflow.id}/`, k: 'Workflow', d: trim(workflow.data.summary) })),
	];

	return new Response(JSON.stringify({ items }), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};
