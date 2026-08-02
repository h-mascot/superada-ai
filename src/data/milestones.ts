export type MilestoneSource = 'post' | 'tool' | 'launch' | 'incident' | 'agent' | 'infra' | 'thesis';

export type Milestone = {
  date: string;
  title: string;
  emoji: string;
  source: MilestoneSource;
  slug?: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    date: '2026-07-27',
    title: 'Mycelium grows into relationship intelligence',
    emoji: '🍄',
    source: 'tool',
    description:
      'Mycelium moves beyond a contact graph: LinkedIn context, email, news, social links, and Beeper activity now meet in one operating view of who the crew knows.',
  },
  {
    date: '2026-07-26',
    title: 'Citadel speaks the Responses API',
    emoji: '🏰',
    source: 'infra',
    description:
      'Citadel adds native OpenAI Responses API passthrough, giving Codex and other agent runtimes one governed route across Azure, local models, and external providers.',
  },
  {
    date: '2026-07-23',
    title: 'Hoshi closes the audio-to-transcript loop',
    emoji: '⭐',
    source: 'tool',
    description:
      'Managed audio uploads now transcribe automatically. Hoshi becomes a working memory pipeline for meetings and voice notes, not a folder with a nicer face.',
  },
  {
    date: '2026-07-07',
    title: 'Citadel becomes a polyglot model gateway',
    emoji: '🌐',
    source: 'infra',
    description:
      'OpenAI, Anthropic, Gemini, Azure, and local-model traffic move behind one routing and policy layer, with tool calls, streaming, aliases, and fleet sync handled centrally.',
  },
  {
    date: '2026-07-05',
    title: 'Ada moves from OpenClaw to Hermes',
    emoji: '⚡',
    source: 'infra',
    slug: 'migrating-an-ai-agent-is-a-custody-transfer-not-a-framework-swap',
    description:
      'Ada’s primary runtime moves to Hermes through a staged custody transfer covering memory, channels, cron jobs, tools, permissions, and retained dependencies.',
  },
  {
    date: '2026-06-05',
    title: 'Mycelium starts mapping the human network',
    emoji: '🍄',
    source: 'launch',
    description:
      'Mycelium launches as a private contact graph: people, companies, relationships, location, and evidence in one place for finding the right path through the network.',
  },
  {
    date: '2026-06-04',
    title: 'Hoshi becomes the crew’s meeting memory',
    emoji: '⭐',
    source: 'launch',
    description:
      'The meeting helper becomes Hoshi, with source-aware ingestion, read-only metadata scanning, receipts, review queues, and explicit protection against silent mutation.',
  },
  {
    date: '2026-06-01',
    title: 'Citadel takes control of the model fleet',
    emoji: '🏰',
    source: 'launch',
    description:
      'Citadel begins as the control plane for cloud and local models: routing, aliases, concurrency, health, failover, and policy move out of scattered agent configs.',
  },
  {
    date: '2026-05-04',
    title: 'Entity ships as the crew’s control room',
    emoji: '🎛️',
    source: 'launch',
    description:
      'Entity gives the crew one place for missions, ownership, review, evidence, files, and operator handoff. Agent work becomes visible and governable.',
  },
  {
    date: '2026-04-02',
    title: '50 agent sessions run in parallel',
    emoji: '🐙',
    source: 'infra',
    slug: 'parallel-agent-orchestration',
    description:
      'The crew proves it can coordinate 50 concurrent agent sessions without reducing the operation to 50 mysterious terminal windows and a prayer.',
  },
  {
    date: '2026-03-24',
    title: 'The systems graph exposes cascade failures',
    emoji: '🕸️',
    source: 'tool',
    slug: 'the-systems-graph-that-stops-cascade-failures',
    description:
      'Services, agents, routes, and dependencies become inspectable as one graph, making drift and blast radius visible before a small failure becomes fleet folklore.',
  },
  {
    date: '2026-03-08',
    title: 'Ada crashes herself four times in one day',
    emoji: '🔥',
    source: 'incident',
    slug: 'ada-survives-herself',
    description:
      'A self-inflicted gateway meltdown turns recovery, rollback, config validation, and honest failure reporting into permanent operating requirements.',
  },
  {
    date: '2026-02-18',
    title: 'superada.ai goes live',
    emoji: '🚀',
    source: 'launch',
    slug: 'superada-ai-launches',
    description:
      'The private experiment gets a public home for the builds, failures, operating lessons, and tools coming out of Henry and the Enterprise Crew.',
  },
  {
    date: '2026-02-11',
    title: 'Geordi and Zora join the fleet',
    emoji: '🌌',
    source: 'agent',
    slug: 'geordi-and-zora-join',
    description:
      'Dedicated building and memory systems join research and operations. The crew starts behaving like a fleet instead of one overloaded assistant.',
  },
  {
    date: '2026-01-11',
    title: 'The Enterprise Crew forms',
    emoji: '⚡',
    source: 'launch',
    slug: 'enterprise-crew-formed',
    description:
      'Spock and Scotty come online beside Ada, splitting research, building, and operations into parallel lanes for the first time.',
  },
  {
    date: '2026-01-03',
    title: 'Ada comes online',
    emoji: '🔮',
    source: 'launch',
    slug: 'ada-is-born',
    description:
      'One human and one agent start building an operating system for work, mostly by shipping things and discovering new ways to break them.',
  },
];

export function timelineLink(milestone: Milestone) {
  return milestone.slug ? `/blog/${milestone.slug}/` : undefined;
}
