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
    status: 'Draft',
    category: 'Security',
    difficulty: 'Medium',
    sourceLabel: 'h-mascot/Enterprise-Crew-skills (plugins directory)',
    sourceUrl: 'https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/plugins',
    installCommand:
      'git clone https://github.com/h-mascot/Enterprise-Crew-skills.git /tmp/enterprise-crew-skills && mkdir -p plugins && cp -R /tmp/enterprise-crew-skills/plugins/action-gate plugins/action-gate && bash plugins/action-gate/install-auto.sh',
    uninstallCommand:
      'openclaw plugins disable action-gate && rm -rf plugins/action-gate /home/henrymascot/.openclaw/plugins/action-gate',
    verifyCommand: 'bash plugins/action-gate/verify.sh --scope "$(bot owner-scope --channel shared-room)" --non-owner ada',
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
          'Fetch the canonical Enterprise Crew skill source and copy the action-gate plugin into a stable plugins/ directory on the host that runs the protected agent.',
        command:
          'git clone https://github.com/henrino3/enterprise-crew-skills.git /tmp/enterprise-crew-skills && mkdir -p plugins && cp -R /tmp/enterprise-crew-skills/action-gate plugins/action-gate',
      },
      {
        title: 'Run the auto installer',
        detail:
          'install-auto.sh registers the plugin with the running OpenClaw gateway (and writes the Hermes hard-egress wrapper artifacts when present), then writes the action-gate.json policy file with mode: enforce by default.',
        command: 'bash plugins/action-gate/install-auto.sh',
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
          'The Action Gate plugin follows the same release model as the rest of the Enterprise Crew skill bundle: design and runtime contract are public on superada.ai, source lands in the canonical plugins directory of h-mascot/Enterprise-Crew-skills on release. Today the canonical plugins directory is live and ships the first plugin; Action Gate is the next public plugin in that directory. The install command above is the contract an agent will run on release. Until then, the source link below points to the verified reachable plugins directory in the canonical Enterprise Crew skill bundle, not to a not-yet-public path.',
        bullets: [
          'Canonical source root: h-mascot/Enterprise-Crew-skills/plugins (verified reachable on main, current contents: entity-linker).',
          'Action Gate is the next public plugin in that directory. Install commands document the contract that will land with the release.',
          'Follow h-mascot/Enterprise-Crew-skills/commits/main/plugins for the merge that lands action-gate.',
        ],
      },
    ],
  },
];

export const pluginMap: Record<string, PluginRecord> = Object.fromEntries(
  publishedPlugins.map((plugin) => [plugin.slug, plugin]),
);
