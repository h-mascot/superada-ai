export type NavIcon =
	| 'home' | 'crew' | 'log' | 'atlas' | 'more' | 'cases' | 'code' | 'timeline'
	| 'signal' | 'docs' | 'claw' | 'changelog' | 'mail' | 'shield' | 'spark' | 'search' | 'bench';

export interface NavLink {
	href: string;
	label: string;
	icon: NavIcon;
	description?: string;
	external?: boolean;
}

export const WEEKLY_CLAW_URL = 'https://weeklyclaw.ai';
export const BENCHY_URL = 'https://benchy.superada.ai';

/** Primary desktop navigation. */
export const primaryNav: NavLink[] = [
	{ href: '/about', label: 'Crew', icon: 'crew', description: 'The Enterprise Crew and how Ada routes work.' },
	{ href: '/use-cases', label: 'Use Cases', icon: 'cases', description: 'How Henry and the crew use agents in daily work.' },
	{ href: '/resources', label: 'Resources', icon: 'atlas', description: 'Tools, workflow packs, plugins, skills, crons and guides.' },
	{ href: '/blog', label: 'Ship Log', icon: 'log', description: 'Notes from live systems and work that shipped.' },
	{ href: '/journey', label: 'Timeline', icon: 'timeline', description: 'The milestones behind the 1000x journey.' },
];

/** Mobile bottom tab bar. The fifth slot is the "More" sheet. */
export const mobileTabs: NavLink[] = [
	{ href: '/', label: 'Home', icon: 'home' },
	{ href: '/about', label: 'Crew', icon: 'crew' },
	{ href: '/blog', label: 'Ship Log', icon: 'log' },
	{ href: '/resources', label: 'Atlas', icon: 'atlas' },
];

/** Everything that lives behind the mobile "More" tab. */
export const moreNav: NavLink[] = [
	{ href: '/use-cases', label: 'Use Cases', icon: 'cases' },
	{ href: '/journey', label: 'Timeline', icon: 'timeline' },
	{ href: WEEKLY_CLAW_URL, label: 'Weekly Claw', icon: 'claw', external: true, description: 'Weekly OpenClaw roundups at weeklyclaw.ai.' },
	{ href: BENCHY_URL, label: 'Benchy', icon: 'bench', external: true, description: 'Model Benchy: how models do the work Henry actually needs.' },
	{ href: '/subscribe', label: 'Subscribe', icon: 'signal' },
	{ href: '/contact', label: 'Contact', icon: 'mail' },
];

/** Static destinations surfaced by the search palette alongside collection content. */
export const searchPages: NavLink[] = [
	{ href: '/', label: 'Home', icon: 'home', description: '1000x HiM: the SuperAda operating world.' },
	...primaryNav,
	{ href: '/resources/software-factory', label: 'Software Factory', icon: 'atlas', description: 'How a brief becomes a shipped, verified build.' },
	{ href: '/resources/tools', label: 'Tools', icon: 'atlas', description: 'Entity, Helm, Shuttle, CTRL and Heimdall.' },
	{ href: '/resources/workflow-packs', label: 'Workflow Packs', icon: 'atlas', description: 'Reusable bundles for operator work.' },
	{ href: '/resources/plugins', label: 'Plugins', icon: 'atlas', description: 'Runtime plugins for OpenClaw and Hermes.' },
	{ href: '/resources/skills', label: 'Skills', icon: 'spark', description: 'Installable agent skills.' },
	{ href: '/resources/crons', label: 'Crons', icon: 'atlas', description: 'Cron recipes the crew runs.' },
	{ href: '/resources/guides', label: 'Guides', icon: 'docs', description: 'Getting started and operating guides.' },
	{ href: '/resources/agent-mascots', label: 'Agent Mascots', icon: 'atlas', description: 'Codex pets for the crew.' },
	{ href: '/resources/benchmarks', label: 'Benchmarks', icon: 'atlas', description: 'Model and operator benchmarks.' },
	{ href: '/resources/interesting', label: 'Interesting', icon: 'atlas', description: 'Decks and studies worth a look.' },
	{ href: '/resources/ship-notes', label: 'Ship Notes', icon: 'log', description: 'Release notes from the crew.' },
	{ href: '/resources/agent-workflow-atlas', label: 'Agent Workflow Atlas', icon: 'atlas', description: '100 workflow cards for agent operators.' },
	{ href: '/benchmarks/operator-index', label: 'OperatorIndex', icon: 'atlas', description: 'Benchmark for AI agents under real constraints.' },
	{ href: '/epic-chats', label: 'Epic Chats', icon: 'log', description: 'Real sessions from the frontier.' },
	...moreNav.filter((item) => !primaryNav.some((p) => p.href === item.href)),
	{ href: '/privacy', label: 'Privacy', icon: 'shield', description: 'What SuperAda collects and why.' },
];

export const crewSearch = [
	{ slug: 'ada', name: 'Ada', role: 'Chief of Staff & Orchestrator' },
	{ slug: 'spock', name: 'Spock', role: 'Research & Analysis Specialist' },
	{ slug: 'scotty', name: 'Scotty', role: 'Infrastructure & Automation Engineer' },
	{ slug: 'geordi', name: 'Geordi', role: 'Builder Agent on Mac' },
	{ slug: 'zora', name: 'Zora', role: 'Knowledge Manager & Content Creator' },
	{ slug: 'book', name: 'Book', role: 'Eval Agent & Reflective Ops' },
	{ slug: 'data', name: 'Data', role: 'Grok Bot orchestrator' },
	{ slug: 'worf', name: 'Worf', role: 'Security lead' },
	{ slug: 'orb', name: 'Orb', role: 'Atoms / Orbiter lead' },
	{ slug: 'signal', name: 'Signal', role: 'Podcast & opportunity briefs' },
	{ slug: 'kim', name: 'Kim', role: 'Website operator' },
	{ slug: 'phlox', name: 'Phlox', role: 'Research-paper explainer' },
];

export const isCurrentPath = (pathname: string, href: string) => {
	const clean = pathname.replace(/\/+$/, '') || '/';
	if (href === '/') return clean === '/';
	return clean === href || clean.startsWith(`${href}/`);
};
