export type BadgeTone = 'live' | 'accent' | 'warn' | 'muted' | 'info' | 'plain';
export type Badge = { label: string; tone?: BadgeTone };

export type CatalogLink = { href: string; title: string; tagline: string; badges?: Badge[]; kicker?: string };

const statusTones: Record<string, BadgeTone> = { Live: 'live', Internal: 'info', Beta: 'accent', Draft: 'warn' };
export const statusTone = (status: string): BadgeTone => statusTones[status] ?? 'muted';

export const countBy = <T>(items: readonly T[], key: (item: T) => string) => {
	const counts = new Map<string, number>();
	for (const item of items) counts.set(key(item), (counts.get(key(item)) ?? 0) + 1);
	return counts;
};

export const clawhubLinkFor = (entry: { clawhubUrl?: string; clawhubSlug?: string; clawhubOwner?: string }) =>
	entry.clawhubUrl
	?? (entry.clawhubSlug
		? (entry.clawhubOwner
			? `https://clawhub.ai/${entry.clawhubOwner}/skills/${entry.clawhubSlug}`
			: `https://clawhub.ai/skill/${entry.clawhubSlug}`)
		: null);

/** Picks up to `limit` neighbours after `index`, wrapping around and skipping excluded hrefs. */
export const neighbours = <T extends { href: string }>(items: readonly T[], index: number, exclude: Set<string>, limit = 3) => {
	const picked: T[] = [];
	for (let step = 1; step < items.length && picked.length < limit; step++) {
		const item = items[(index + step) % items.length];
		if (!exclude.has(item.href)) picked.push(item);
	}
	return picked;
};

export const catalogs: CatalogLink[] = [
	{ href: '/skills/', kicker: 'Catalog', title: 'Skills', tagline: 'Single capabilities with source links and honest install contracts.' },
	{ href: '/workflows/', kicker: 'Catalog', title: 'Workflows', tagline: 'Bundles and workflow patterns for operations, publishing, research and security.' },
	{ href: '/plugins/', kicker: 'Catalog', title: 'Plugins', tagline: 'Runtime plugins that hook live systems, with verification receipts.' },
];
