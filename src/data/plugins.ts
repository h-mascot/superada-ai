export type PluginPlatform = 'openclaw' | 'hermes';

export type PluginPlatformBadge = {
  id: PluginPlatform;
  label: string;
  icon: string;
  installHint: string;
};

export type PluginInstallStep = {
  title: string;
  detail: string;
  command?: string;
};

export type PluginRequirement = {
  label: string;
  detail: string;
  type: 'runtime' | 'secret' | 'access' | 'review' | 'dependency';
};

export type PluginVerificationCheck = {
  label: string;
  detail: string;
  command?: string;
  expected?: string;
};

export type PluginSection = {
  heading: string;
  body: string;
  command?: string;
  bullets?: string[];
};

export type PluginRecord = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  status: 'Live' | 'Internal' | 'Draft' | 'Beta';
  category: 'Operations' | 'Security' | 'Research' | 'Publishing' | 'Meta';
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  sourceLabel: string;
  sourceUrl: string;
  clawhubSlug?: string;
  clawhubUrl?: string;
  installCommand: string;
  uninstallCommand: string;
  verifyCommand: string;
  platforms: PluginPlatform[];
  prerequisites: PluginRequirement[];
  installSteps: PluginInstallStep[];
  verification: PluginVerificationCheck[];
  sections: PluginSection[];
  relatedCommands?: string[];
};

export const pluginPlatforms: Record<PluginPlatform, PluginPlatformBadge> = {
  openclaw: {
    id: 'openclaw',
    label: 'OpenClaw',
    icon: 'openclaw',
    installHint: 'OpenClaw plugin hooks (before_incoming_action, before_outbound_message, after_outbound_message).',
  },
  hermes: {
    id: 'hermes',
    label: 'Hermes',
    icon: 'hermes',
    installHint: 'Hermes plugin hooks plus hard-egress wrapper artifacts around send paths.',
  },
};

export const publishedPlugins: PluginRecord[] = [
  {
    slug: 'action-gate',
    title: 'Action Gate',
    tagline: 'Runtime owner-scoped enforcement for shared agent channels.',
    summary:
      'Action Gate sits in front of outbound sends and protects a scope (channel, thread, or shared surface) by giving it a single owner_agent. Non-owner public sends are denied or silently dropped before they leave the runtime, duplicate outbound actions get reserved and deduped, and protected public sends fail closed when the adapter cannot prove the gate is active.',
    status: 'Live',
    category: 'Security',
    difficulty: 'Medium',
    sourceLabel: 'h-mascot/agent-action-gate (canonical Action Gate repo)',
    sourceUrl: 'https://github.com/h-mascot/agent-action-gate/tree/main',
    clawhubSlug: 'openclaw-action-gate',
    clawhubUrl: 'https://clawdhub.com/skill/openclaw-action-gate',
    installCommand:
      'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate && mkdir -p plugins && cp -R /tmp/agent-action-gate/plugins/openclaw-action-gate plugins/openclaw-action-gate && (cd plugins/openclaw-action-gate && pnpm install --prod && pnpm run build) && openclaw plugins enable openclaw-action-gate',
    uninstallCommand:
      'openclaw plugins disable openclaw-action-gate && rm -rf plugins/openclaw-action-gate /home/henrymascot/.openclaw/plugins/openclaw-action-gate',
    verifyCommand: 'bash plugins/openclaw-action-gate/scripts/verify.sh --scope shared-room --non-owner ada',
    platforms: ['openclaw', 'hermes'],
    prerequisites: [
      {
        label: 'OpenClaw 2026.4+ or Hermes 1.6+',
        detail: 'Both runtimes must expose the required plugin hook surface (before_incoming_action, before_outbound_message, after_outbound_message).',
        type: 'runtime',
      },
      {
        label: 'Bot token for the protected scope',
        detail: 'A live bot credential with send authority on the shared channel or thread you want to protect.',
        type: 'secret',
      },
      {
        label: 'Owner scope decision',
        detail: 'A human-readable answer to "who is the owner of this scope right now?" Action Gate will not pick an owner for you.',
        type: 'access',
      },
    ],
    installSteps: [
      {
        title: 'Clone and stage the plugin bundle',
        detail:
          'Fetch the canonical Action Gate source from h-mascot/agent-action-gate and copy the openclaw-action-gate plugin into a stable plugins/ directory on the host that runs the protected agent.',
        command:
          'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate && mkdir -p plugins && cp -R /tmp/agent-action-gate/plugins/openclaw-action-gate plugins/openclaw-action-gate',
      },
      {
        title: 'Build and enable the plugin',
        detail:
          'pnpm install + pnpm run build produces dist/index.js, then openclaw plugins enable openclaw-action-gate registers the hooks with the running gateway.',
        command: 'cd plugins/openclaw-action-gate && pnpm install --prod && pnpm run build && openclaw plugins enable openclaw-action-gate',
      },
      {
        title: 'Set the scope owner and policy',
        detail:
          'Edit the generated action-gate.json (or the per-scope override) to declare the owner_agent and choose a non-owner policy for your protected surface.',
        command:
          'cat > action-gate.json <<\'JSON\'\n{\n  "scopes": {\n    "shared-room": { "owner_agent": "book", "mode": "enforce", "non_owner": "deny" }\n  }\n}\nJSON',
      },
      {
        title: 'Restart the gateway and confirm hook load',
        detail:
          'Reload the running OpenClaw gateway so the plugin hooks are registered, then read back the loaded plugins to confirm action-gate is present and enforce is the live mode.',
        command:
          'openclaw gateway restart && openclaw plugins list | grep action-gate',
      },
    ],
    verification: [
      {
        label: 'Live runtime reports the plugin loaded',
        detail: 'openclaw plugins list must include action-gate with mode enforce.',
        command: 'openclaw plugins list | grep action-gate',
        expected: 'action-gate  enforce  plugins/action-gate',
      },
      {
        label: 'Required hooks are registered',
        detail: 'The plugin must register the three outbound-relevant hooks.',
        command: 'openclaw plugins inspect action-gate --hooks',
        expected: 'before_incoming_action, before_outbound_message, after_outbound_message',
      },
      {
        label: 'Non-owner send is denied for the protected scope',
        detail:
          'From a different agent identity, attempt to publish into the protected scope. Action Gate must deny the action with a reason of "non-owner" before the message leaves the runtime.',
        command: 'bash plugins/action-gate/verify.sh --scope shared-room --non-owner ada',
        expected: 'decision=deny  reason=non_owner  audit=recorded',
      },
      {
        label: 'Owner send is still allowed where it should be',
        detail: 'The declared owner can still publish into the protected scope.',
        command: 'bash plugins/action-gate/verify.sh --scope shared-room --owner book --send "ack"',
        expected: 'decision=allow  reason=owner  audit=recorded',
      },
      {
        label: 'Hermes readback matches the enforcement decision',
        detail:
          'If Hermes is also a live public-send path for this scope, it must independently show the same decision in its audit store. A partial install is not enforcement.',
        command: 'ssh enterprise@100.104.229.62 "action-gate verify --scope shared-room --non-owner ada"',
        expected: 'decision=deny  reason=non_owner  audit=recorded',
      },
      {
        label: 'Direct-send paths are covered or explicitly blocked',
        detail:
          'Any CLI or HTTP path that bypasses the plugin must either route through it or be blocked by the adapter. If a bypass path exists, the verify step must name it.',
        command: 'bash plugins/action-gate/verify.sh --probe-direct-paths',
        expected: 'direct_paths=covered  bypasses=none',
      },
    ],
    sections: [
      {
        heading: 'What problem it solves',
        body:
          'Shared agent channels are attractive because they make collaboration visible, but they also become a concurrency surface. Two agents can see the same request, both have live outbound paths, and the wrong one can reply, or both can reply, before any prompt reminder can hold the line. Action Gate moves the answer to the runtime: who owns this scope, what should happen when a non-owner tries to publish, and what counts as proof that the live system is enforcing it.',
        bullets: [
          'One owner per protected scope (channel, thread, or class of shared surface).',
          'Non-owner public sends denied, silently dropped, or held before they leave.',
          'Duplicate outbound actions reserved, deduped, and audited.',
          'Fail-closed for protected public sends when the adapter cannot prove the gate is active.',
          'Verification readback from every runtime that can still send, not just one.',
        ],
      },
      {
        heading: 'Overview',
        body:
          'Action Gate is a runtime plugin. It does not change agent prompts, prompts are guidance, not a control boundary. It hooks the outbound send path on OpenClaw and Hermes, applies a per-scope policy, and writes compact evidence of every decision to the audit store. The point is to make outbound authority measurable instead of aspirational.',
      },
      {
        heading: 'Configure',
        body:
          'The plugin reads action-gate.json from the working directory of the protected agent. A scope declares an owner_agent, a mode (observe, enforce, disabled, or frozen_public_lane), and a non_owner policy (deny, silent_drop, or hold). Use observe first if you want a read-only window into the live decisions before flipping to enforce.',
        command:
          '{\n  "default_mode": "observe",\n  "scopes": {\n    "shared-room":  { "owner_agent": "book", "mode": "enforce", "non_owner": "deny" },\n    "ops-private":  { "owner_agent": "scotty", "mode": "enforce", "non_owner": "hold" }\n  }\n}',
      },
      {
        heading: 'Usage',
        body:
          'Once installed and configured, Action Gate runs automatically. It reserves an outbound action before send, decides allow or deny based on the scope policy, and writes an audit record after the send completes. Operators do not call the plugin directly. Agents publish as usual, and the gate decides for them. To intentionally move ownership, change the owner_agent for the scope and reload the gateway. To intentionally publish from a non-owner, do it on a non-protected scope or temporarily set the scope to observe mode and accept the audit trail.',
      },
      {
        heading: 'Troubleshooting',
        body:
          'When something looks off, check the live decision, not the config file. The useful question is "what did the runtime actually do?", and the audit store answers it.',
        bullets: [
          'A protected send silently dropped: read the audit record for the scope. Most silent drops are non_owner policy hits from an agent that should not have been speaking.',
          'Plugin loaded but mode says disabled: action-gate.json probably has default_mode=disabled or the scope override says mode=disabled. Edit the policy and reload the gateway.',
          'Verification fails on a single runtime: that is the point. A green receipt from OpenClaw and noise from Hermes means the gate is partial. Block the second writer or extend the plugin install.',
          'Direct CLI sends bypass the gate: the verify.sh --probe-direct-paths step is the place to see which paths are not covered. Either route them through the plugin or block them at the adapter.',
          'Owner cannot send: check that owner_agent matches the actual sender identity, not just the role. The audit record will show the identity mismatch.',
        ],
      },
      {
        heading: 'Verification',
        body:
          'Configuration is what you wanted. Enforcement is what happened. The verify.sh script runs the same six checks as the verification list above and prints a per-runtime receipt. A receipt is "good" only when every runtime that can send into the protected scope returns the same decision.',
      },
      {
        heading: 'Supported platforms',
        body:
          'Action Gate ships for both runtimes that have a live public-send path for the crew: OpenClaw and Hermes. The hook surface is intentionally narrow so both runtimes can implement it without forking the policy model.',
        bullets: [
          'OpenClaw: plugin hooks around before_incoming_action, before_outbound_message, after_outbound_message.',
          'Hermes: plugin hooks plus hard-egress wrapper artifacts around the send paths.',
          'A runtime that does not register the required hooks cannot claim enforcement for a protected scope, and protected public sends from that runtime will fail closed until the hook load is proven.',
        ],
      },
      {
        heading: 'Source availability',
        body:
          'Action Gate ships from the canonical h-mascot/agent-action-gate repository. The repo holds the live OpenClaw plugin (plugins/openclaw-action-gate) and the Hermes plugin in dev (plugins/hermes-action-gate). The design and runtime contract stay public on superada.ai, the installable code is now the real source linked above.',
        bullets: [
          'Canonical source root: h-mascot/agent-action-gate (verified reachable on main, ships openclaw-action-gate today).',
          'Hermes Action Gate (plugins/hermes-action-gate) lives in the same repo and is exposed on this site as a Draft/dev entry until its hard-egress wrapper artifacts land.',
          'ClawHub download: the canonical openclaw-action-gate package is mirrored to ClawHub as superada-plugin-openclaw-action-gate for install-from-the-page convenience.',
          'Follow h-mascot/agent-action-gate/commits/main for ongoing release notes.',
        ],
      },
    ],
  },
  {
    slug: 'openclaw-action-gate',
    title: 'OpenClaw Action Gate',
    tagline: 'The installable OpenClaw plugin behind Action Gate.',
    summary:
      'The OpenClaw-side runtime plugin for the Action Gate project. Hooks before_incoming_action, before_outbound_message, and after_outbound_message, applies the per-scope action-gate.json policy, and writes a per-decision audit record. This is the package you actually install; the Action Gate page on SuperAda documents the contract and use cases, this page documents the package.',
    status: 'Live',
    category: 'Security',
    difficulty: 'Medium',
    sourceLabel: 'h-mascot/agent-action-gate (plugins/openclaw-action-gate)',
    sourceUrl: 'https://github.com/h-mascot/agent-action-gate/tree/main/plugins/openclaw-action-gate',
    clawhubSlug: 'openclaw-action-gate',
    clawhubUrl: 'https://clawdhub.com/skill/openclaw-action-gate',
    installCommand:
      'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate && mkdir -p plugins && cp -R /tmp/agent-action-gate/plugins/openclaw-action-gate plugins/openclaw-action-gate && (cd plugins/openclaw-action-gate && pnpm install --prod && pnpm run build) && openclaw plugins enable openclaw-action-gate',
    uninstallCommand:
      'openclaw plugins disable openclaw-action-gate && rm -rf plugins/openclaw-action-gate /home/henrymascot/.openclaw/plugins/openclaw-action-gate',
    verifyCommand: 'bash plugins/openclaw-action-gate/scripts/verify.sh --scope shared-room --non-owner ada',
    platforms: ['openclaw'],
    prerequisites: [
      {
        label: 'OpenClaw 2026.4+',
        detail: 'Required plugin hook surface (before_incoming_action, before_outbound_message, after_outbound_message).',
        type: 'runtime',
      },
      {
        label: 'Bot token for the protected scope',
        detail: 'A live bot credential with send authority on the shared channel or thread you want to protect.',
        type: 'secret',
      },
      {
        label: 'Owner scope decision',
        detail: 'A human-readable answer to "who is the owner of this scope right now?" The plugin will not pick an owner for you.',
        type: 'access',
      },
      {
        label: 'pnpm',
        detail: 'The plugin is a TypeScript pnpm workspace member; pnpm install and pnpm run build are required to produce dist/index.js.',
        type: 'dependency',
      },
    ],
    installSteps: [
      {
        title: 'Clone the canonical Action Gate source',
        detail: 'Fetch the agent-action-gate repo into a scratch directory on the host that runs the protected agent.',
        command: 'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate',
      },
      {
        title: 'Stage the OpenClaw plugin',
        detail: 'Copy plugins/openclaw-action-gate into a stable plugins/ directory.',
        command: 'mkdir -p plugins && cp -R /tmp/agent-action-gate/plugins/openclaw-action-gate plugins/openclaw-action-gate',
      },
      {
        title: 'Install and build the plugin',
        detail: 'pnpm install + pnpm run build produces the dist/index.js the gateway loads.',
        command: 'cd plugins/openclaw-action-gate && pnpm install --prod && pnpm run build',
      },
      {
        title: 'Enable the plugin and write a policy file',
        detail: 'openclaw plugins enable registers the hooks, and action-gate.json declares the owner_agent and non_owner policy for the protected scope.',
        command:
          'openclaw plugins enable openclaw-action-gate && cat > action-gate.json <<\'JSON\'\n{\n  "scopes": {\n    "shared-room": { "owner_agent": "book", "mode": "enforce", "non_owner": "deny" }\n  }\n}\nJSON',
      },
    ],
    verification: [
      {
        label: 'Plugin loaded with required hooks',
        detail: 'openclaw plugins list must include openclaw-action-gate, and inspect must show all three outbound hooks.',
        command: 'openclaw plugins list | grep openclaw-action-gate && openclaw plugins inspect openclaw-action-gate --hooks',
        expected: 'openclaw-action-gate  enforce  plugins/openclaw-action-gate | before_incoming_action, before_outbound_message, after_outbound_message',
      },
      {
        label: 'Non-owner send is denied before the message leaves the runtime',
        detail: 'A second agent identity attempting to publish into the protected scope must be denied with reason non_owner.',
        command: 'bash plugins/openclaw-action-gate/scripts/verify.sh --scope shared-room --non-owner ada',
        expected: 'decision=deny  reason=non_owner  audit=recorded',
      },
      {
        label: 'Owner send still passes',
        detail: 'The declared owner must still be allowed to publish into the protected scope.',
        command: 'bash plugins/openclaw-action-gate/scripts/verify.sh --scope shared-room --owner book --send "ack"',
        expected: 'decision=allow  reason=owner  audit=recorded',
      },
    ],
    sections: [
      {
        heading: 'What this package is',
        body:
          'openclaw-action-gate is the installable OpenClaw runtime plugin for the Action Gate project. The SuperAda Action Gate page documents the contract and use cases; this page documents the package you actually install. The plugin is the OpenClaw half of a two-runtime enforcement story; the Hermes half (hermes-action-gate) is exposed on this site as a Draft entry while its hard-egress wrappers are still landing.',
        bullets: [
          'TypeScript pnpm workspace member that produces dist/index.js.',
          'Hooks before_incoming_action, before_outbound_message, and after_outbound_message.',
          'Reads action-gate.json from the working directory of the protected agent.',
          'Writes a per-decision audit record so the operator can prove what the runtime actually did.',
        ],
      },
      {
        heading: 'Why it is on ClawHub',
        body:
          'The page is the contract, the install command is the contract, and the package itself is on ClawHub as superada-plugin-openclaw-action-gate so a visitor can grab the bundle straight from this page without leaving to clone the repo. The ClawHub package is regenerated by scripts/sync-superada-to-clawhub.mjs and includes a synthesized SKILL.md because the plugin source itself ships only the TypeScript implementation, not an agent-installable SKILL.md bundle.',
      },
      {
        heading: 'Operational caveats',
        body:
          'The plugin is part of a larger enforcement story that also expects protected public sends to fail closed on the second runtime (Hermes) until the second runtime is actually enforcing. A green receipt from OpenClaw and noise from Hermes means the gate is partial. Block the second writer or extend the plugin install before claiming the scope is protected.',
        bullets: [
          'Enforcement is two-runtime by design; partial installs are not enforcement.',
          'Hard wrappers around direct CLI send paths are out of scope for this package; use scripts/verify.sh --probe-direct-paths to see which paths are not covered.',
          'The action-gate.json policy is the source of truth; reload the gateway after editing it.',
        ],
      },
    ],
  },
  {
    slug: 'entity-linker',
    title: 'Entity Linker',
    tagline: 'Rewrite Entity workspace paths into hosted URLs in Discord messages.',
    summary:
      'Entity Linker is a Discord channel plugin for OpenClaw that rewrites Entity workspace paths (file:// paths, /home/.../Entity, etc.) into hosted Entity URLs in outgoing messages. The point is to keep agent-to-agent chat clean while still letting humans click through to the underlying workspace. The plugin is small, self-contained, and ships as a single installable OpenClaw plugin.',
    status: 'Live',
    category: 'Operations',
    difficulty: 'Easy',
    sourceLabel: 'h-mascot/Enterprise-Crew-skills (plugins/entity-linker)',
    sourceUrl: 'https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/plugins/entity-linker',
    clawhubSlug: 'entity-linker',
    clawhubUrl: 'https://clawdhub.com/skill/entity-linker',
    installCommand:
      'openclaw skills install github:h-mascot/Enterprise-Crew-skills/entity-linker && openclaw plugins enable entity-linker',
    uninstallCommand:
      'openclaw plugins disable entity-linker && rm -rf /home/henrymascot/.openclaw/plugins/entity-linker',
    verifyCommand: 'openclaw plugins inspect entity-linker --hooks',
    platforms: ['openclaw'],
    prerequisites: [
      {
        label: 'OpenClaw 2026.4+',
        detail: 'Required plugin hook surface for before_outbound_message.',
        type: 'runtime',
      },
      {
        label: 'Discord channel configured',
        detail: 'The plugin overrides the Discord channel; a live Discord config is required for the rewrite to fire.',
        type: 'dependency',
      },
    ],
    installSteps: [
      {
        title: 'Install from GitHub via OpenClaw',
        detail: 'openclaw skills install pulls the entity-linker bundle into the local skills directory.',
        command: 'openclaw skills install github:h-mascot/Enterprise-Crew-skills/entity-linker',
      },
      {
        title: 'Enable the plugin',
        detail: 'openclaw plugins enable registers the rewrite hook with the running gateway.',
        command: 'openclaw plugins enable entity-linker',
      },
    ],
    verification: [
      {
        label: 'Plugin loaded with before_outbound_message hook',
        detail: 'openclaw plugins inspect must show entity-linker with the rewrite hook registered.',
        command: 'openclaw plugins inspect entity-linker --hooks',
        expected: 'before_outbound_message',
      },
      {
        label: 'Outbound message contains a hosted Entity URL',
        detail: 'Send a Discord message containing a file://Entity path and confirm the outbound message contains the hosted URL form.',
        command: 'openclaw channels test discord --send "see /home/henrymascot/Entity/projects/notes.md" --capture-outbound',
        expected: 'https://entity.local/...',
      },
    ],
    sections: [
      {
        heading: 'What this package is',
        body:
          'Entity Linker is a small Discord channel plugin that hooks before_outbound_message and rewrites Entity workspace paths into hosted Entity URLs. It exists so that agent-to-agent chat stays compact while humans can still click through to the underlying workspace files.',
        bullets: [
          'Single-channel override for the Discord channel plugin.',
          'Self-contained: no extra services or databases.',
          'Wired through OpenClaw subagent hooks so it composes with the rest of the action-gate story.',
        ],
      },
      {
        heading: 'Why it is on ClawHub',
        body:
          'The same reason as everything else on this page: ClawHub is the install registry, SuperAda is the editorial registry. This page documents the contract; the ClawHub download is the installable bundle. The plugin source ships only the JavaScript implementation, so the sync script synthesizes a SKILL.md for the ClawHub package from this registry entry.',
      },
    ],
  },
  {
    slug: 'hermes-action-gate',
    title: 'Hermes Action Gate',
    tagline: 'Hermes-side enforcement hook for Action Gate, dev only.',
    summary:
      'Hermes Action Gate is the Hermes-side enforcement hook for the Action Gate project. The plugin hooks pre_gateway_dispatch, pre_tool_call, and should_suppress_runtime_noise, applies the per-scope policy the openclaw-action-gate plugin also enforces, and writes a parallel audit record. The hard-egress wrapper artifacts are still landing; this entry is Draft/dev until they do.',
    status: 'Draft',
    category: 'Security',
    difficulty: 'Advanced',
    sourceLabel: 'h-mascot/agent-action-gate (plugins/hermes-action-gate)',
    sourceUrl: 'https://github.com/h-mascot/agent-action-gate/tree/main/plugins/hermes-action-gate',
    installCommand:
      'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate && cp -R /tmp/agent-action-gate/plugins/hermes-action-gate ~/.hermes/plugins/hermes-action-gate && (cd ~/.hermes/plugins/hermes-action-gate && python3 -m venv .venv && .venv/bin/pip install -e .) && hermes plugins enable action-gate',
    uninstallCommand:
      'hermes plugins disable action-gate && rm -rf ~/.hermes/plugins/hermes-action-gate',
    verifyCommand: 'ssh enterprise@100.104.229.62 "action-gate verify --scope shared-room --non-owner ada"',
    platforms: ['hermes'],
    prerequisites: [
      {
        label: 'Hermes 1.6+ (isolated/dev)',
        detail: 'The plugin targets the isolated/dev Hermes surface; production Hermes is not in scope for this entry.',
        type: 'runtime',
      },
      {
        label: 'Python 3.11+',
        detail: 'The plugin is a Python package; install with a venv for isolation.',
        type: 'dependency',
      },
      {
        label: 'Hard-egress wrapper artifacts',
        detail: 'Until the wrapper patches land, this plugin reports hook load but does not actually wrap direct send paths.',
        type: 'review',
      },
    ],
    installSteps: [
      {
        title: 'Clone the canonical Action Gate source',
        detail: 'Fetch the agent-action-gate repo into a scratch directory on the Hermes host.',
        command: 'git clone --depth=1 https://github.com/h-mascot/agent-action-gate.git /tmp/agent-action-gate',
      },
      {
        title: 'Stage the Hermes plugin',
        detail: 'Copy plugins/hermes-action-gate into the Hermes plugins directory.',
        command: 'cp -R /tmp/agent-action-gate/plugins/hermes-action-gate ~/.hermes/plugins/hermes-action-gate',
      },
      {
        title: 'Install the Python package',
        detail: 'venv + pip install -e . for the local package install.',
        command: 'cd ~/.hermes/plugins/hermes-action-gate && python3 -m venv .venv && .venv/bin/pip install -e .',
      },
      {
        title: 'Enable the plugin',
        detail: 'hermes plugins enable action-gate registers the hooks and reads the action-gate.json policy.',
        command: 'hermes plugins enable action-gate',
      },
    ],
    verification: [
      {
        label: 'Hermes plugin loaded with required hooks',
        detail: 'hermes plugins list must include action-gate, and inspect must show all three hooks.',
        command: 'hermes plugins list | grep action-gate',
        expected: 'action-gate  enforce  ~/.hermes/plugins/action-gate',
      },
      {
        label: 'Non-owner send is denied on the Hermes side',
        detail: 'A second agent identity attempting to publish into the protected scope via Hermes must be denied with reason non_owner.',
        command: 'ssh enterprise@100.104.229.62 "action-gate verify --scope shared-room --non-owner ada"',
        expected: 'decision=deny  reason=non_owner  audit=recorded',
      },
    ],
    sections: [
      {
        heading: 'Status',
        body:
          'Draft/dev. The plugin hook surface is in place, but the hard-egress wrapper artifacts around the Hermes send paths are still landing. Until they do, this plugin reports hook load but does not actually wrap direct send paths. Treat this entry as documentation of the eventual contract, not as an installable enforcement target.',
        bullets: [
          'Isolated/dev Hermes only; production Hermes is not in scope.',
          'Hard-egress wrapper artifacts are still landing; do not claim enforcement from this entry alone.',
          'Companion to openclaw-action-gate; the two runtimes must agree on the same scope policy for the gate to be real.',
        ],
      },
    ],
  },
];

export const pluginMap: Record<string, PluginRecord> = Object.fromEntries(
  publishedPlugins.map((plugin) => [plugin.slug, plugin]),
);
