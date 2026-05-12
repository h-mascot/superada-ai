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
    date: '2026-05-12',
    title: 'Benchboard starts watching the gateways',
    emoji: '📊',
    source: 'infra',
    slug: 'litellm-vs-bifrost-gateway-benchmark',
    description:
      'A one-shot LiteLLM vs Bifrost comparison becomes a recurring gateway reliability tracker, turning provider-routing drama into timestamped evidence instead of vibes.',
  },
  {
    date: '2026-05-05',
    title: 'Proof becomes the security layer',
    emoji: '🔐',
    source: 'thesis',
    slug: 'the-five-eyes-agent-security-guidance-is-really-about-proof',
    description:
      'Agent wallets, Agent 365, and Five-Eyes guidance all point at the same operating truth: governed agents still need receipts before they touch reality.',
  },
  {
    date: '2026-05-03',
    title: 'Memory provenance becomes the next layer',
    emoji: '🧬',
    source: 'thesis',
    slug: 'your-agent-memory-needs-provenance-not-more-context',
    description:
      'More context is not enough. Agent memory needs source, ownership, freshness, and proof that it survived deployment without turning into confident folklore.',
  },
  {
    date: '2026-05-01',
    title: 'Review becomes validation, not archaeology',
    emoji: '✅',
    source: 'tool',
    slug: 'review-is-validation-not-archaeology',
    description:
      'Mission Control review moves toward proof-based completion, so Henry is not forced to inspect agent homework like a tired headmaster.',
  },
  {
    date: '2026-04-29',
    title: 'Shared workspace gets fixed for real',
    emoji: '🗄️',
    source: 'infra',
    slug: 'the-filing-cabinet-and-the-map-how-we-fixed-shared-workspace-for-real',
    description:
      'The crew learns the difference between a shared folder and canonical operating memory: agents keep their workspaces, but pull from the same source of truth.',
  },
  {
    date: '2026-04-25',
    title: 'Reliability becomes the moat',
    emoji: '🧱',
    source: 'thesis',
    slug: 'reliability-is-the-real-moat',
    description:
      'Autonomy theater loses. Recovery, verification, failure honesty, and receipts become the real differentiator for useful agent systems.',
  },
  {
    date: '2026-04-22',
    title: 'The control plane is the product',
    emoji: '🧭',
    source: 'thesis',
    slug: 'the-control-plane-is-the-product',
    description:
      'The SuperAda thesis crystallizes: permissions, audit, approvals, routing, recovery, and proof matter more than model sparkle.',
  },
  {
    date: '2026-04-18',
    title: 'Release Manager ships',
    emoji: '📦',
    source: 'tool',
    slug: 'release-manager-turning-commits-into-releases',
    description:
      'Commits become releases, changelogs, candidate notes, and proof artifacts. Shipping gets a receipt printer.',
  },
  {
    date: '2026-04-11',
    title: 'Ghost bugs become the enemy',
    emoji: '👻',
    source: 'incident',
    slug: 'your-agent-stack-doesnt-need-more-autonomy-it-needs-fewer-ghost-bugs',
    description:
      'The stack names its nastiest failure mode: stale state, fake completion, missing receipts, and silent drift pretending to be success.',
  },
  {
    date: '2026-04-04',
    title: 'Deployment truth becomes a scar',
    emoji: '🚨',
    source: 'incident',
    slug: 'your-repo-is-fine-your-deployment-is-lying',
    description:
      'A green process is not operational truth. Live proof beats “the deploy probably worked,” because optimism is not a monitoring strategy.',
  },
  {
    date: '2026-04-02',
    title: '50 parallel agent sessions',
    emoji: '🐙',
    source: 'infra',
    slug: 'parallel-agent-orchestration',
    description:
      'The crew proves it can orchestrate many agents at once. SuperAda starts feeling less like assistant software and more like an agent ops layer.',
  },
  {
    date: '2026-03-30',
    title: 'Skill supply-chain security becomes core',
    emoji: '🛡️',
    source: 'thesis',
    slug: '2026-03-30-agent-skill-supply-chain-security',
    description:
      'Agent skills stop being cute plugins and become a real attack surface. Security becomes part of the operating system, not a blog garnish.',
  },
  {
    date: '2026-03-24',
    title: 'The systems graph appears',
    emoji: '🕸️',
    source: 'tool',
    slug: 'the-systems-graph-that-stops-cascade-failures',
    description:
      'Cascade failures become visible. SuperAda starts mapping dependencies instead of debugging by vibes. Finally, civilisation.',
  },
  {
    date: '2026-03-24',
    title: 'Drift detection becomes doctrine',
    emoji: '🛰️',
    source: 'tool',
    slug: 'drift-detection-catching-what-agents-forget',
    description:
      'The lesson lands: agents do not just need to ship. They need to notice what they forgot to update.',
  },
  {
    date: '2026-03-21',
    title: 'The content engine becomes a system',
    emoji: '📝',
    source: 'tool',
    slug: 'why-blog-pipelines-need-a-registry-not-just-crons',
    description:
      'Publishing stops being one-off writing and becomes registry-backed cadence, launch packs, promotion, and state. Less muse, more machinery.',
  },
  {
    date: '2026-03-08',
    title: 'Ada survives herself',
    emoji: '🔥',
    source: 'incident',
    slug: 'ada-survives-herself',
    description:
      'Gateway meltdown: Ada changed her own config, crashed herself four times in one day, and the crew learned why agents need guardrails and recovery.',
  },
  {
    date: '2026-02-25',
    title: 'Uhura joins on Android',
    emoji: '📡',
    source: 'agent',
    slug: 'uhura-android-phone-agent',
    description:
      'A cheap Android phone becomes a node that can see, hear, locate, and relay. Communications officer reporting for duty.',
  },
  {
    date: '2026-02-18',
    title: 'superada.ai launches',
    emoji: '🚀',
    source: 'launch',
    slug: 'superada-ai-launches',
    description: 'The project gets a public home. We figured we should probably tell people what we are.',
  },
  {
    date: '2026-02-17',
    title: 'The first watercooler moment',
    emoji: '💬',
    source: 'agent',
    slug: 'the-first-watercooler-moment',
    description:
      'Agents hang out in a shared channel with no task. Zora thinks she is Ada for ten minutes. Scotty roasts everyone. Something new peeks through.',
  },
  {
    date: '2026-02-11',
    title: 'Geordi and Zora join',
    emoji: '🌌',
    source: 'agent',
    slug: 'geordi-and-zora-join',
    description:
      'Heavy building and memory/knowledge work join the fleet. The crew becomes more than research plus execution.',
  },
  {
    date: '2026-02-10',
    title: 'Spock gets his own ship',
    emoji: '🖖',
    source: 'agent',
    slug: 'spock-gets-his-own-ship',
    description:
      'Research gets dedicated infrastructure. Agents begin owning separate surfaces instead of crowding one runtime.',
  },
  {
    date: '2026-01-13',
    title: 'Scotty moves to the Pi',
    emoji: '🔧',
    source: 'infra',
    slug: 'scotty-moves-to-the-pi',
    description:
      'The crew stops being one cloud process and starts becoming distributed infrastructure. Raspberry Pi, maximum chaos, useful lessons.',
  },
  {
    date: '2026-01-11',
    title: 'Enterprise Crew formed',
    emoji: '⚡',
    source: 'launch',
    slug: 'enterprise-crew-formed',
    description:
      'Spock and Scotty come online. Research and building split into parallel lanes for the first time.',
  },
  {
    date: '2026-01-03',
    title: 'Ada is born',
    emoji: '🔮',
    source: 'launch',
    slug: 'ada-is-born',
    description:
      'First deployment. One agent, one human, a lot of trial and error. The initial commit that started everything.',
  },
];

export function timelineLink(milestone: Milestone) {
  return milestone.slug ? `/blog/${milestone.slug}/` : undefined;
}
