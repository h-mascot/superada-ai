import { CHANGELOG_SOURCE_URL, CHANGELOG_VERSIONS, type Version } from '../../data/changelog';

export const PAGE_SIZE = 1500;
export const PREVIEW_RELEASES = 3;
export const PREVIEW_ITEMS = 40;

export type Entry = { kind: 'change' | 'fix'; title: string; description: string; href: string };

export type Release = Version & {
	slug: string;
	fullChangelogHref: string;
	entries: Entry[];
	changeCount: number;
	fixCount: number;
	pages: number;
	highlights: string[];
};

const MD_LINK = /\[([^\]]*)\]\(([^)\s]+)\)/g;

const tidy = (text: string) =>
	text
		.replace(MD_LINK, '$1')
		.replace(/\*\*/g, '')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/\s+/g, ' ')
		.trim();

const stripTrailingRefs = (text: string) => text.replace(/(?:[\s,(]*#\d+\)?)+\s*[.)]?$/, '').replace(/[\s:;,.]+$/, '').trim();

const firstSentence = (text: string) => {
	const match = text.match(/^(.{12,}?[.!?])\s+(?=[A-Z(#])/);
	return match ? [match[1], text.slice(match[0].length)] : [text, ''];
};

const cleanPrefix = (text: string) => text.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();

const sentenceCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** Turn the updater's raw title/description split into readable display copy. */
export function displayEntry(rawTitle: string, rawDescription: string) {
	let title = rawTitle;
	let description = rawDescription;
	if (/\]\(https?$/.test(title) && description.startsWith('//')) {
		const [head, rest] = firstSentence(tidy(`${title}:${description}`));
		return { title: stripTrailingRefs(head) || head, description: rest };
	}
	if (title.endsWith('...') && cleanPrefix(description).startsWith(cleanPrefix(title.slice(0, -3)))) {
		const [head, rest] = firstSentence(tidy(description));
		return { title: stripTrailingRefs(head) || head, description: rest };
	}
	title = tidy(title).replace(/:$/, '');
	description = sentenceCase(tidy(description.replace(/^\*\*\s*/, '')));
	if (description === title || description.replace(/[.\s]+$/, '') === title) description = '';
	return { title, description };
}

function fixEntry(raw: string, fallback: string): Entry {
	const href = raw.match(/\]\((https:\/\/github\.com\/openclaw\/openclaw\/(?:pull|issues)\/\d+)\)/)?.[1] ?? fallback;
	const [head, rest] = firstSentence(tidy(raw));
	return { kind: 'fix', title: stripTrailingRefs(head) || head, description: rest, href };
}

export const releaseSlug = (version: string) => version.toLowerCase().replace(/[^a-z0-9.-]+/g, '-');
export const releaseHref = (release: Pick<Release, 'slug'>, page = 1) => `/openclaw-changelog/${release.slug}/${page > 1 ? `${page}/` : ''}`;
export const entryAnchor = (index: number) => `c-${index + 1}`;
export const pageOfEntry = (index: number) => Math.floor(index / PAGE_SIZE) + 1;

let cache: Release[] | undefined;

export function getReleases(): Release[] {
	if (cache) return cache;
	cache = CHANGELOG_VERSIONS.filter((version) => version.features.length > 0).map((version) => {
		const fullChangelogHref = version.href || `${CHANGELOG_SOURCE_URL}#${version.version.replace(/\./g, '')}`;
		const changes: Entry[] = version.features.map((feature) => ({ kind: 'change', ...displayEntry(feature.title, feature.description), href: feature.href || fullChangelogHref }));
		const fixes = version.fixes.map((fix) => fixEntry(fix, fullChangelogHref));
		const entries = [...changes, ...fixes];
		const highlights = [...new Set(changes.map((entry) => entry.title).filter((title) => title.length > 14 && !/^PR #\d+$/.test(title)))].slice(0, 3);
		return {
			...version,
			slug: releaseSlug(version.version),
			fullChangelogHref,
			entries,
			changeCount: changes.length,
			fixCount: fixes.length,
			pages: Math.max(1, Math.ceil(entries.length / PAGE_SIZE)),
			highlights,
		};
	});
	return cache;
}

const escapeHtml = (text: string) => text.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]!);

/**
 * Entry rows are emitted as one HTML string: tens of thousands of rows rendered through
 * Astro components would add per-element scope attributes and dominate build time.
 */
export function entryRowsHtml(entries: Entry[], offset: number, changeCount: number) {
	let html = '';
	entries.forEach((entry, i) => {
		const n = offset + i;
		const label = entry.kind === 'fix' ? n - changeCount + 1 : n + 1;
		html += `<li class="cl-row cl-row--${entry.kind}" id="${entryAnchor(n)}"><a href="${escapeHtml(entry.href)}" target="_blank" rel="noopener noreferrer"><span class="cl-n">${String(label).padStart(2, '0')}</span><span class="cl-copy"><b>${escapeHtml(entry.title)}</b>${entry.description ? `<small>${escapeHtml(entry.description)}</small>` : ''}</span><span class="cl-go" aria-hidden="true">↗</span></a></li>`;
	});
	return html;
}

export const formatCount = (n: number) => n.toLocaleString('en-US');
