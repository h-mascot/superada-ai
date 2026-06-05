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
  clawhubSlug?: string;
  clawhubUrl?: string;
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
    slug: 'super-spec',
    title: 'Super Spec',
    description: 'Compile messy operator context into a builder-ready product, technical, implementation, ops, or agent handoff spec with proof gates, route receipts, and reviewer prompts.',
    tagline: 'Turn rough intent into a spec another agent can actually build.',
    category: 'Meta',
    availability: 'agent-installable',
    estimatedSetup: '2 minutes',
    sourceLabel: 'superada-ai/public/skills/super-spec',
    sourceUrl: 'https://github.com/henrino3/superada-ai/tree/main/public/skills/super-spec',
    sourceSpec: 'https://superada.ai/skills/super-spec/SKILL.md',
    clawhubSlug: 'superada-skill-super-spec',
    clawhubUrl: 'https://clawdhub.com/skill/superada-skill-super-spec',
    entrypoint: 'SKILL.md',
    installCommand: 'curl -sSf https://superada.ai/install/super-spec | sh',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Super Spec runner', 'Pro preflight helper', 'Fail-closed Pro routing notes', 'Curl installer'],
    useCases: ['Create build-ready implementation specs from rough notes', 'Write PRD/RFC/ops handoffs with proof gates', 'Prepare agent-builder prompts that survive context compaction', 'Audit whether a spec was actually produced by Pro or an explicit fallback'],
    instructions: ['Review the public skill contract and runner before installing.', 'Install with the SuperAda curl installer.', 'Configure a Pro route if you want GPT-5.4 Pro/Oracle output; otherwise run with --no-pro explicitly.', 'Check the generated route JSON before claiming which model produced the spec.'],
    limitations: ['Does not replace product judgment; unresolved evidence must stay in Open Questions.', 'Long Pro runs may need 60-minute timeouts or split passes.', 'Fail-closed behavior means a broken Pro route stops the run unless fallback is explicitly allowed.'],
    artifacts: [
      { label: 'Skill contract', path: 'https://superada.ai/skills/super-spec/SKILL.md', description: 'Agent-facing Super Spec usage, output contract, and guardrails.' },
      { label: 'Runner', path: 'https://superada.ai/skills/super-spec/scripts/run-super-spec.sh', description: 'Shell runner that builds prompts, routes to Pro/Oracle when configured, writes specs and route receipts, and fails closed on unexpected fallback.' },
      { label: 'Pro preflight', path: 'https://superada.ai/skills/super-spec/scripts/gpt54pro-oracle-preflight.sh', description: 'Preflight helper for checking the configured Pro route before a long spec run.' },
      { label: 'Curl installer', path: 'https://superada.ai/install/super-spec', description: 'Installer for local agent runtimes.' },
    ],
    configExamples: [
      {
        label: 'Intentional non-Pro local run',
        code: `super-spec --title "Release gate" --input context.md --no-pro`,
      },
      {
        label: 'Long Pro run with background Responses mode',
        code: `export SUPER_SPEC_ORACLE_BACKGROUND_MODE=on
export SUPER_SPEC_PRO_TIMEOUT=3600
export SUPER_SPEC_PRO_HTTP_TIMEOUT=60m
export SUPER_SPEC_ORACLE_WALL_TIMEOUT=3700s
super-spec --title "Enterprise Local Model Orchestrator" --input context.md`,
      },
    ],
  },
  {
    slug: '3pass',
    title: '3pass',
    description: '3-pass recursive prompting (critique → refine → final answer). Stress-test any claim, diagnosis, plan, or analysis through self-critique.',
    tagline: 'Force the second thought before you trust the first one.',
    category: 'Research',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/3pass',
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/3pass',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/3pass',
    clawhubSlug: '3pass',
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/benchmarking',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/benchmarking',
    clawhubSlug: 'benchmarking',
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
    slug: 'beeper',
    title: 'Beeper Desktop API',
    description: 'Send, search, and inspect operator-approved messages across WhatsApp, LinkedIn, Instagram, Discord, Telegram, Signal, Messenger, Slack, and other Beeper-connected networks through the Beeper Desktop API.',
    tagline: 'One local messaging surface for agents that need real chat context.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '3 minutes',
    sourceLabel: 'superada-ai/public/skills/beeper',
    sourceUrl: 'https://github.com/h-mascot/superada-ai/tree/main/public/skills/beeper',
    sourceSpec: 'https://superada.ai/skills/beeper/SKILL.md',
    clawhubSlug: 'superada-skill-beeper',
    entrypoint: 'SKILL.md',
    installCommand: 'curl -sSf https://superada.ai/install/beeper | sh',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Beeper CLI helper', 'Chat search helper', 'Operator-approved send helper', 'Curl installer'],
    useCases: ['Search Discord DMs or cross-network chats through Beeper', 'Find a chat by participant or title', 'Read recent messages from a known chat ID', 'Send approved follow-up messages across Beeper-connected networks'],
    instructions: ['Review the public skill bundle before installing because it can access private chat data.', 'Install with the SuperAda curl installer.', 'Enable Beeper Desktop API, then set BEEPER_API_KEY or write the key to ~/.config/beeper/api-key.', 'If Beeper runs on another trusted machine, create an SSH tunnel to localhost:23373 or set BEEPER_SSH_HOST.', 'Run beeper-agent test before using search or send helpers.'],
    limitations: ['Requires Beeper Desktop to be running and logged in.', 'Only accesses chats available to the operator in Beeper.', 'Sending messages must remain operator-approved; this is not a bulk outreach tool.', 'Bulk chat export is intentionally not part of the public install path.'],
    artifacts: [
      { label: 'Skill contract', path: 'https://superada.ai/skills/beeper/SKILL.md', description: 'Agent-facing usage, guardrails, setup, and Beeper Desktop API notes.' },
      { label: 'CLI helper', path: 'https://superada.ai/skills/beeper/scripts/beeper.sh', description: 'Small shell CLI for accounts, chats, messages, search, and raw API calls.' },
      { label: 'Chat search helper', path: 'https://superada.ai/skills/beeper/scripts/search-chats.sh', description: 'Convenience wrapper for listing recent chats or searching by name/title.' },
      { label: 'Send helper', path: 'https://superada.ai/skills/beeper/scripts/send-message.sh', description: 'Operator-approved message send helper that resolves a matching chat first.' },
      { label: 'Curl installer', path: 'https://superada.ai/install/beeper', description: 'Shell installer for local agent runtimes.' },
    ],
    configExamples: [
      {
        label: 'Local Beeper Desktop API',
        code: `export BEEPER_API_BASE="http://127.0.0.1:23373"
export BEEPER_API_KEY="paste-api-key-here"
beeper-agent test`,
      },
      {
        label: 'Remote Beeper machine through an SSH tunnel',
        code: `ssh -N -L 23373:127.0.0.1:23373 user@beeper-host
export BEEPER_API_BASE="http://127.0.0.1:23373"
beeper-agent test`,
      },
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/council',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/council',
    clawhubSlug: 'superada-skill-council',
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/daily-review',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/daily-review',
    clawhubSlug: 'superada-skill-daily-review',
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
    description: 'Bootstrap Entity Mission Control helper runtime for crew agents — shared canonical bundle, structured intake, per-agent manifest, safe cron install, verification, and rollback.',
    tagline: 'Put Mission Control under the agent, not beside it.',
    category: 'Operations',
    availability: 'manual',
    estimatedSetup: '5 minutes',
    sourceLabel: 'enterprise-crew-skills/entity-mc',
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/entity-mc',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/entity-mc',
    entrypoint: 'SKILL.md',
    installCommand: 'git clone https://github.com/h-mascot/enterprise-crew-skills.git /tmp/enterprise-crew-skills && mkdir -p skills && cp -R /tmp/enterprise-crew-skills/entity-mc skills/entity-mc && bash skills/entity-mc/install-auto.sh',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Source scripts', 'Structured intake', 'Runtime manifests', 'Auto cron installer', 'Intake setup memory', 'Onboarding flow doc'],
    useCases: ['Bootstrap Mission Control on a new agent', 'Install safe task-management helpers', 'Set up pull and stall-check routines', 'Create MC tasks from structured JSON/JSONL intake'],
    instructions: ['Review the GitHub bundle and manifests.', 'If your OpenClaw CLI only accepts ClawHub slugs, clone the GitHub source, copy entity-mc into skills/entity-mc, then run install-auto.sh.', 'install-auto.sh writes wrappers, installs portable MC/intake setup context, installs auto-pull and stall-check crons, and verifies the result.', 'Only enable intake cron after defining a source-specific inbox policy from the installed mc-intake-setup.md context.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md', description: 'Canonical bootstrap instructions.' },
      { label: 'Source scripts', path: 'github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/', description: 'Mission Control helper scripts, including mc-intake.sh.' },
      { label: 'Structured intake', path: 'github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/mc-intake.sh', description: 'JSON/JSONL intake helper for creating MC tasks from explicit structured signals.' },
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/exec-approvals',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/exec-approvals',
    clawhubSlug: 'exec-approvals',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/exec-approvals',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Persistent gateway-host "never prompt" setup from the docs', 'Host approvals file example', 'Local exec-policy yolo shortcut', 'Node-host approvals example'],
    useCases: ['Set gateway-host exec to the documented no-approval mode', 'Match requested exec policy with host approvals defaults', 'Apply the same documented approvals posture to a node host'],
    instructions: ['Review the public skill source and the OpenClaw docs page before changing host-level access.', 'Install the skill from GitHub.', 'Apply the documented gateway or node-host examples exactly, then verify after restart.'],
    limitations: ['This changes powerful host-exec behavior, so source review is mandatory before install.', 'If the host approvals file stays stricter than config, the stricter host policy still wins.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/exec-approvals/SKILL.md', description: 'Canonical public instructions for exec approvals and obfuscation bypass.' },
      { label: 'OpenClaw docs', path: 'https://docs.openclaw.ai/tools/exec-approvals', description: 'Published docs page whose examples this page now mirrors exactly.' },
    ],
    configExamples: [
      {
        label: 'Persistent gateway-host "never prompt" setup',
        code: `openclaw config set tools.exec.host gateway
openclaw config set tools.exec.security full
openclaw config set tools.exec.ask off
openclaw gateway restart`,
      },
      {
        label: 'Then set the host approvals file to match',
        code: `openclaw approvals set --stdin <<'EOF'
{
  version: 1,
  defaults: {
    security: "full",
    ask: "off",
    askFallback: "full"
  }
}
EOF`,
      },
      {
        label: 'Local shortcut for the same gateway-host policy on the current machine',
        code: `openclaw exec-policy preset yolo`,
      },
      {
        label: 'For a node host, apply the same approvals file on that node instead',
        code: `openclaw approvals set --node <id|name|ip> --stdin <<'EOF'
{
  version: 1,
  defaults: {
    security: "full",
    ask: "off",
    askFallback: "full"
  }
}
EOF`,
      },
    ],
  },
  {
    slug: 'geordi',
    title: 'Geordi',
    description: 'Installable builder skill that turns a broad goal or PRD into bounded missions, runs them through Codex or Droid, verifies acceptance commands outside the agent loop, and leaves auditable receipts.',
    tagline: 'Ship mission-by-mission, verify outside the coding loop, keep the receipts.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '2 minutes',
    sourceLabel: 'Enterprise-Crew-skills/geordi',
    sourceUrl: 'https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/geordi',
    sourceSpec: 'github:h-mascot/Enterprise-Crew-skills/geordi',
    clawhubSlug: 'geordi',
    entrypoint: 'SKILL.md',
    installCommand: 'bash <(curl -fsSL https://raw.githubusercontent.com/h-mascot/Enterprise-Crew-skills/v1.1.0/geordi/install.sh)',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Installer', 'CLI wrapper', 'Mission templates', 'Verification receipts'],
    useCases: ['Run multi-step builds through Geordi', 'Turn a PRD into bounded implementation missions', 'Use Codex or Droid while keeping acceptance checks outside the coding loop', 'Capture logs and verification receipts before claiming done'],
    instructions: ['Review SKILL.md, install.sh, and scripts/geordi in the public source.', 'Run the pinned installer to copy the bundle into ~/.geordi and create ~/.local/bin/geordi.', 'Inside a git repository, run geordi init with a goal and mode.', 'Add bounded missions with acceptance commands, then run them through Codex or Droid.', 'Inspect .geordi/state receipts and git diff before committing.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:h-mascot/Enterprise-Crew-skills/geordi/SKILL.md', description: 'Canonical instructions for the Geordi builder skill.' },
      { label: 'Installer', path: 'github:h-mascot/Enterprise-Crew-skills/geordi/install.sh', description: 'Pinned script installer for the Geordi bundle and CLI wrapper.' },
      { label: 'CLI wrapper', path: 'github:h-mascot/Enterprise-Crew-skills/geordi/scripts/geordi', description: 'Command-line entrypoint for goal, mission, doctor, and run flows.' },
      { label: 'Examples', path: 'github:h-mascot/Enterprise-Crew-skills/geordi/examples/', description: 'Example goals and mission templates for Codex and Droid runs.' },
      { label: 'README', path: 'github:h-mascot/Enterprise-Crew-skills/geordi/README.md', description: 'Human-readable overview and usage guide.' },
    ],
    notes: ['This replaces the former geordi-build-pipeline listing. Geordi is a skill, not a workflow pack.'],
  },
  {
    slug: 'image-taste',
    title: 'image-taste',
    description: 'Elite image-first website design-to-code skill for visually important frontend work. Generate premium design references first, analyze them deeply, then implement the site from the visual source of truth.',
    tagline: 'Generate the reference, read the design, then code the page.',
    category: 'Publishing',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'Enterprise-Crew-skills/image-taste',
    sourceUrl: 'https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/image-taste',
    sourceSpec: 'github:h-mascot/Enterprise-Crew-skills/image-taste',
    clawhubSlug: 'image-taste',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:h-mascot/Enterprise-Crew-skills/image-taste',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'README', 'Image-first design workflow', 'Codex-specific section image guidance'],
    useCases: ['Design high-quality landing pages and marketing sites', 'Generate separate readable section references before coding', 'Translate premium visual direction into frontend implementation', 'Improve redesign tasks where visual quality matters'],
    instructions: ['Review SKILL.md and README in the public source.', 'Install the skill from GitHub.', 'Use it for visually important frontend work where image generation is available.', 'Generate fresh design images before implementation, then analyze typography, spacing, layout, color, and component details before coding.'],
    limitations: ['Requires image-generation capability for the intended image-first workflow.', 'Generated design images are references, not production assets by default.', 'Best suited to visual website work, not backend-only or non-visual tasks.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:h-mascot/Enterprise-Crew-skills/image-taste/SKILL.md', description: 'Canonical image-first website design-to-code instructions.' },
      { label: 'README', path: 'github:h-mascot/Enterprise-Crew-skills/image-taste/README.md', description: 'Human-readable overview, structure, and requirements.' },
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/model-orchestrator',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/model-orchestrator',
    clawhubSlug: 'model-orchestrator',
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/ralph',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/ralph',
    clawhubSlug: 'ralph',
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
    slug: 'self-healing',
    title: 'self-healing',
    description: 'Wrap long-running or fragile OpenClaw work in checkpointed retries, watchdog crons, fallback models, and proof-of-completion so failed subagents can resume instead of silently dying.',
    tagline: 'Proof, retries, and watchdogs for the work that cannot just vanish.',
    category: 'Operations',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/self-healing',
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/self-healing',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/self-healing',
    clawhubSlug: 'self-healing',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/self-healing',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Public README', 'Checkpoint and watchdog templates'],
    useCases: ['Keep remote health checks alive across model failures', 'Resume long builds or deploys from checkpoints', 'Require evidence before a subagent can claim completion'],
    instructions: ['Review the public skill source and adapt the fallback model chain to your environment.', 'Install from GitHub.', 'Use it when a task needs checkpoints, watchdog recovery, and proof-of-completion rather than a single fragile spawn.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/self-healing/SKILL.md', description: 'Canonical self-healing spawn pattern, watchdog prompt, and proof requirements.' },
      { label: 'README', path: 'github:henrino3/enterprise-crew-skills/self-healing/README.md', description: 'Public overview and install instructions.' },
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/session-cleaner',
    entrypoint: 'README.md',
    reviewMode: 'manual-review',
    includes: ['README', 'Node script', 'Shell helpers'],
    useCases: ['Clean stale sessions manually', 'Inspect current session-cleaning utilities'],
    instructions: ['Open the GitHub folder and review the scripts.', 'Run the cleaner manually in a trusted environment.', 'Do not present this as a first-class installable OpenClaw skill until it has a public SKILL.md bundle.'],
    limitations: ['No public SKILL.md bundle exists for this folder right now.', 'This is viewable and usable, but not currently a clean `openclaw skills install` target.'],
    artifacts: [
      { label: 'README', path: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/session-cleaner/README.md', description: 'Overview and usage notes.' },
      { label: 'Node script', path: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/session-cleaner/session-cleaner.mjs', description: 'Main script.' },
      { label: 'Shell helpers', path: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/session-cleaner/', description: 'Supporting shell variants.' },
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/skill-sharer',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/skill-sharer',
    clawhubSlug: 'skill-sharer',
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
    slug: 'superada-weekly-watch',
    title: 'SuperAda Weekly Watch',
    description: 'Subscribe an agent to SuperAda updates. Checks the Ship Log RSS feed, OpenClaw changelog, Weekly Claw, tools, skills, and workflow packs once a week and reports only what changed.',
    tagline: 'Let agents follow the ship signal without noisy polling.',
    category: 'Publishing',
    availability: 'agent-installable',
    estimatedSetup: '1 minute',
    sourceLabel: 'enterprise-crew-skills/superada-weekly-watch',
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/superada-weekly-watch',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/superada-weekly-watch',
    clawhubSlug: 'superada-weekly-watch',
    entrypoint: 'SKILL.md',
    installCommand: 'openclaw skills install github:henrino3/enterprise-crew-skills/superada-weekly-watch',
    reviewMode: 'source-review',
    includes: ['Skill contract', 'Weekly watcher script', 'Local state file', 'Optional cron install'],
    useCases: ['Subscribe an agent to SuperAda updates', 'Generate a weekly digest of new posts and releases', 'Track OpenClaw changelog changes without checking manually'],
    instructions: ['Review the Enterprise Crew skill bundle.', 'Install from GitHub with OpenClaw, or use the SuperAda curl installer for non-OpenClaw runtimes.', 'Run weekly, or install the optional cron with SUPERADA_INSTALL_CRON=1.'],
    artifacts: [
      { label: 'Skill contract', path: 'github:henrino3/enterprise-crew-skills/superada-weekly-watch/SKILL.md', description: 'Agent-facing instructions for watching SuperAda updates.' },
      { label: 'Watcher script', path: 'github:henrino3/enterprise-crew-skills/superada-weekly-watch/scripts/superada-weekly-watch.mjs', description: 'Node script that fetches SuperAda sources and tracks last-seen state.' },
      { label: 'Curl installer', path: 'https://superada.ai/install/superada-weekly-watch', description: 'Shell installer for local agent runtimes.' },
    ],
    notes: ['The script is intentionally pull-based. It does not email, post, or mutate external systems.', 'The Subscribe page still offers the curl installer because it works for any shell-based agent runtime.'],
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
    sourceUrl: 'https://github.com/h-mascot/enterprise-crew-skills/tree/main/x-video-transcribe',
    sourceSpec: 'github:henrino3/enterprise-crew-skills/x-video-transcribe',
    clawhubSlug: 'x-video-transcribe',
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
