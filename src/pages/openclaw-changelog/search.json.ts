import { PAGE_SIZE, getReleases } from '../../components/changelog/format';

/** Full-text index for changelog search, fetched by the browser only when someone searches. */
export function GET() {
	const releases = getReleases();
	const body = {
		pageSize: PAGE_SIZE,
		releases: releases.map((release) => [release.version, release.slug, release.changeCount]),
		entries: releases.map((release) => release.entries.map((entry) => (entry.description ? [entry.title, entry.description] : [entry.title]))),
	};
	return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
