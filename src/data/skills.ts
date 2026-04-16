export type SkillArtifact = {
  label: string;
  path: string;
  description: string;
};

export type SkillConfigExample = {
  label: string;
  code: string;
};

export type SkillRecord = {
  slug: string;
  title: string;
  description: string;
  tagline: string;
  category: 'Operations' | 'Security' | 'Research' | 'Publishing' | 'Meta';
  availability: 'agent-installable' | 'manual';
  estimatedSetup: string;
  sourceLabel: string;
  sourceUrl: string;
  sourceSpec?: string;
  entrypoint: string;
  installCommand?: string;
  reviewMode: 'source-review' | 'manual-review';
  includes: string[];
  useCases: string[];
  instructions: string[];
  limitations?: string[];
  artifacts: SkillArtifact[];
  notes?: string[];
  configExamples?: SkillConfigExample[];
};

export const publishedSkills: SkillRecord[] = [
  {
    slug: '3pass',
    title: '3pass',
    description: '3-pass recursive prompting (critique → refine → final answer). Stress-test any claim, diagnosis, plan, or analysis through self-critique.',
    tagline: 'Force the second thought before you trust the first one.',
    category: 'Research',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/3pass',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/3pass',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/3pass',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/3pass',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Public README'],
    useCases: ['Challenge a plan before acting', 'Stress-test a diagnosis', 'Refine a draft answer before shipping it'],
    instructions: ['Review the public bundle and README.', 'Install the skill from the source spec.', 'Call the skill when you want a critique → refine → final-answer pass.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/3pass/SKILL.md', description: 'Canonical instructions for the three-pass reasoning pattern.' },
      { label: 'README', path: 'github:henrino3/enterprise-crew-skills/3pass/README.md', description: 'Human-readable overview and usage notes.' },
    ],
  },
  {
    slug: 'benchmarking',
    title: 'benchmarking',
    description: 'Benchmark models or agents, compare providers for real work, and track performance across runs.',
    tagline: 'Compare models on operator reality, not demo sparkle.',
    category: 'Research',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/benchmarking',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/benchmarking',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/benchmarking',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/benchmarking',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Public README'],
    useCases: ['Compare providers for a task family', 'Run scorecard-style evaluations', 'Track model quality over time'],
    instructions: ['Review the bundle source.', 'Install from GitHub.', 'Use it when you need structured benchmark runs and comparison framing.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/benchmarking/SKILL.md', description: 'Installable benchmarking instructions.' },
      { label: 'README', path: 'github:henrino3/enterprise-crew-skills/benchmarking/README.md', description: 'Public overview for the benchmark skill.' },
    ],
  },
  {
    slug: 'council',
    title: 'council',
    description: 'Topic-aware multi-agent council for structured debate, challenge, and synthesis across engineering, sales, support, product, ops, and strategy topics.',
    tagline: 'Make the argument before you make the decision.',
    category: 'Research',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/council',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/council',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/council',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/council',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Examples', 'Benchmarks', 'Helper scripts'],
    useCases: ['Run structured debate across roles', 'Surface objections before committing', 'Synthesize multiple viewpoints into one decision'],
    instructions: ['Review the public skill and examples.', 'Install the skill from GitHub.', 'Invoke it when a decision needs challenge and synthesis rather than a single fast answer.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/council/SKILL.md', description: 'Canonical usage and routing instructions.' },
      { label: 'Examples', path: 'github:henrino3/enterprise-crew-skills/council/examples/', description: 'Example prompts and structured runs.' },
      { label: 'Benchmarks', path: 'github:henrino3/enterprise-crew-skills/council/benchmarks/', description: 'Supporting benchmark material.' },
    ],
  },
  {
    slug: 'daily-review',
    title: 'daily-review',
    description: 'Comprehensive daily performance review with communication tracking, meeting analysis, output metrics, and focus time monitoring. Your AI performance coach.',
    tagline: 'Close the day with evidence instead of vibes.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/daily-review',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/daily-review',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/daily-review',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/daily-review',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Docs', 'Helper scripts'],
    useCases: ['Generate a daily review for an operator', 'Track output and focus quality', 'Spot execution drift over time'],
    instructions: ['Review the source bundle and any expected input data.', 'Install the skill from GitHub.', 'Run it for daily operator review flows.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/daily-review/SKILL.md', description: 'Public skill instructions.' },
      { label: 'Docs', path: 'github:henrino3/enterprise-crew-skills/daily-review/docs/', description: 'Supporting notes and usage context.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/daily-review/scripts/', description: 'Operational helpers for the review flow.' },
    ],
  },
  {
    slug: 'entity-mc',
    title: 'entity-mc',
    description: 'Bootstrap Entity Mission Control helper runtime for crew agents — shared canonical bundle, per-agent manifest, safe cron install, verification, and rollback.',
    tagline: 'Put Mission Control under the agent, not beside it.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '2 minutes',
    sourceLabel: 'enterprise-crew-skills/entity-mc',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/entity-mc',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Source scripts', 'Runtime manifests'],
    useCases: ['Bootstrap Mission Control on a new agent', 'Install safe task-management helpers', 'Set up pull and stall-check routines'],
    instructions: ['Review the GitHub bundle and manifests.', 'Install it into OpenClaw from the source spec.', 'Run the bootstrap flow on the target agent.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md', description: 'Canonical bootstrap instructions.' },
      { label: 'Source scripts', path: 'github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/', description: 'Mission Control helper scripts.' },
    ],
  },
  {
    slug: 'exec-approvals',
    title: 'exec-approvals',
    description: 'Manage all OpenClaw exec approval settings — elevated access, obfuscation bypass, security posture, and per-provider allowlists. Use when an agent cannot run sudo/host commands, long commands are blocked as obfuscation, or when onboarding/auditing exec permissions across a fleet of agents. Covers elevated exec enablement, obfuscation check bypass, and security mode configuration.',
    tagline: 'One public skill for the whole “why can’t this agent run commands?” mess.',
    category: 'Security',
    availability: 'agent-installable',
    estimatedSetup: '2 minutes',
    sourceLabel: 'enterprise-crew-skills/exec-approvals',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/exec-approvals',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/exec-approvals',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/exec-approvals',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Exact config examples for elevated exec, obfuscation bypass, and security mode'],
    useCases: ['Enable elevated exec safely', 'Stop long shell payloads being blocked as obfuscation', 'Audit provider allowlists and exec posture across agents'],
    instructions: ['Review the public skill source before changing host-level access.', 'Install the skill from GitHub.', 'Apply only the specific exec posture needed, then verify after restart.'],
    limitations: ['This changes powerful host-exec behavior, so source review is mandatory before install.', 'Manual runtime patches may still be needed on older OpenClaw versions that do not support the config toggle for obfuscation checks.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/exec-approvals/SKILL.md', description: 'Canonical public instructions for exec approvals and obfuscation bypass.' },
    ],
    configExamples: [
      {
        label: 'Elevated exec',
        code: `{
  "tools": {
    "elevated": {
      "enabled": true,
      "allowFrom": {
        "telegram": ["*"]
      }
    }
  }
}`,
      },
      {
        label: 'Obfuscation bypass',
        code: `{
  "tools": {
    "exec": {
      "obfuscationCheck": false
    }
  }
}`,
      },
      {
        label: 'Security mode',
        code: `{
  "tools": {
    "exec": {
      "security": "full",
      "ask": "on-miss"
    }
  }
}`,
      },
    ],
  },
  {
    slug: 'geordi-build-pipeline',
    title: 'geordi-build-pipeline',
    description: 'Execute PRD stories sequentially via Codex with verification and retry. Uses ACP protocol (primary) with SSH+tmux fallback.',
    tagline: 'Ship story-by-story, verify outside the coding loop, keep moving.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '2 minutes',
    sourceLabel: 'enterprise-crew-skills/geordi-build-pipeline',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-build-pipeline',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/geordi-build-pipeline',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Transport helpers', 'Workflow scripts'],
    useCases: ['Run multi-story builds through Geordi', 'Execute PRDs in sequence', 'Separate build verification from implementation'],
    instructions: ['Review the skill and scripts in the public repo.', 'Install it from GitHub.', 'Provide project context and verify commands before running the build flow.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/geordi-build-pipeline/SKILL.md', description: 'Canonical instructions for the build pipeline.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/geordi-build-pipeline/scripts/', description: 'Supporting scripts for context loading and execution.' },
    ],
  },
  {
    slug: 'geordi-setup',
    title: 'geordi-setup',
    description: 'Set up and configure Geordi, the Enterprise Crew’s primary build agent.',
    tagline: 'A setup pack, not a first-class installable skill bundle yet.',
    category: 'Operations',
    availability: 'manual',
    estimatedSetup: 'Manual review',
    sourceLabel: 'enterprise-crew-skills/geordi-setup',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-setup',
    entrypoint: 'GEORDI.md',
    reviewMode: 'manual-review',
    includes: ['Setup guide', 'Helper scripts'],
    useCases: ['Stand up Geordi on a new machine', 'Review how the builder is wired today'],
    instructions: ['Open the GitHub folder and review GEORDI.md.', 'Run the helper scripts manually as needed.', 'Treat this as a manual setup pack, not an agent-installable OpenClaw skill.'],
    limitations: ['No public SKILL.md is present in this folder today.', 'Do not tell an agent this is directly installable via `openclaw skills install` until the bundle format is added.'],
    artifacts: [
      { label: 'Setup guide', path: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-setup/GEORDI.md', description: 'Manual setup guide for Geordi.' },
      { label: 'Scripts', path: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-setup/scripts', description: 'Helper scripts for Geordi operations.' },
    ],
  },
  {
    slug: 'model-orchestrator',
    title: 'model-orchestrator',
    description: 'Intelligent model load balancer for OpenClaw crons — distributes across providers by complexity and cost.',
    tagline: 'Route the cheap jobs cheap and the hard jobs smart.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/model-orchestrator',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/model-orchestrator',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/model-orchestrator',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/model-orchestrator',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Public README', 'Helper scripts'],
    useCases: ['Balance cron traffic across providers', 'Reduce cost on low-complexity jobs', 'Route around quota or reliability problems'],
    instructions: ['Review the routing logic in the public repo.', 'Install from GitHub.', 'Use it when cron model selection should be dynamic rather than hardcoded.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/model-orchestrator/SKILL.md', description: 'Canonical routing instructions.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/model-orchestrator/scripts/', description: 'Supporting orchestrator helpers.' },
    ],
  },
  {
    slug: 'ralph',
    title: 'ralph',
    description: 'Autonomous AI coding loop that runs Codex or Claude Code repeatedly until all PRD items are complete.',
    tagline: 'Let the coding loop keep chewing until the PRD is actually done.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/ralph',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/ralph',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/ralph',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/ralph',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Public README', 'Loop scripts'],
    useCases: ['Run iterative coding loops against a PRD', 'Keep implementation moving without manual re-prompting', 'Drive agent coding sessions to completion'],
    instructions: ['Review the loop behavior and guardrails in the public repo.', 'Install from GitHub.', 'Use it for PRD-driven autonomous coding runs.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/ralph/SKILL.md', description: 'Canonical instructions for the Ralph loop.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/ralph/scripts/', description: 'Supporting scripts for iterative runs.' },
    ],
  },
  {
    slug: 'session-cleaner',
    title: 'session-cleaner',
    description: 'Clean up stale agent sessions, orphaned checkpoints, and dead subagent processes across the crew.',
    tagline: 'Useful, public, and still more script pack than installable skill bundle.',
    category: 'Meta',
    availability: 'manual',
    estimatedSetup: 'Manual review',
    sourceLabel: 'enterprise-crew-skills/session-cleaner',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/session-cleaner',
    entrypoint: 'README.md',
    reviewMode: 'manual-review',
    includes: ['README', 'Node script', 'Shell helpers'],
    useCases: ['Clean stale sessions manually', 'Inspect current session-cleaning utilities'],
    instructions: ['Open the GitHub folder and review the scripts.', 'Run the cleaner manually in a trusted environment.', 'Do not present this as a first-class installable OpenClaw skill until it has a public SKILL.md bundle.'],
    limitations: ['No public SKILL.md bundle exists for this folder right now.', 'This is viewable and usable, but not currently a clean `openclaw skills install` target.'],
    artifacts: [
      { label: 'README', path: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/session-cleaner/README.md', description: 'Overview and usage notes.' },
      { label: 'Node script', path: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/session-cleaner/session-cleaner.mjs', description: 'Main script.' },
      { label: 'Shell helpers', path: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/session-cleaner/', description: 'Supporting shell variants.' },
    ],
  },
  {
    slug: 'skill-sharer',
    title: 'skill-sharer',
    description: 'Share a skill publicly to the enterprise-crew-skills GitHub repo. Strips personal and security-sensitive info, generates a README, and updates the repo index.',
    tagline: 'Take a private skill, strip the secrets, publish the useful part.',
    category: 'Publishing',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/skill-sharer',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/skill-sharer',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/skill-sharer',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/skill-sharer',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'README', 'Publish scripts'],
    useCases: ['Publish a private skill publicly', 'Strip secrets before sharing', 'Keep the public skills repo index updated'],
    instructions: ['Review the sanitization behavior in the public repo.', 'Install from GitHub.', 'Use it when a private skill is ready to become a public bundle.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/skill-sharer/SKILL.md', description: 'Canonical public publishing instructions.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/skill-sharer/scripts/', description: 'Supporting publish helpers.' },
    ],
  },
  {
    slug: 'x-video-transcribe',
    title: 'x-video-transcribe',
    description: 'Transcribe and summarize X/Twitter videos using bird CLI and Gemini audio transcription.',
    tagline: 'Turn an X video into text without pretending watching it manually scales.',
    category: 'Research',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/x-video-transcribe',
    sourceUrl: 'https://github.com/henrino3/enterprise-crew-skills/tree/main/x-video-transcribe',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/x-video-transcribe',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/x-video-transcribe',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'README', 'Support scripts'],
    useCases: ['Extract text from an X video', 'Summarize a video thread fast', 'Feed video insight into a broader research loop'],
    instructions: ['Review the public skill source and dependencies.', 'Install from GitHub.', 'Use it when an X video needs transcript and summary output.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/x-video-transcribe/SKILL.md', description: 'Canonical installable skill instructions.' },
      { label: 'Scripts', path: 'github:henrino3/enterprise-crew-skills/x-video-transcribe/scripts/', description: 'Supporting helpers for the transcription flow.' },
    ],
  },
];

export const skillMap = Object.fromEntries(publishedSkills.map((skill) => [skill.slug, skill]));
