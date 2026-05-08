---
title: Entity Mission Control Bootstrap
summary: Installs from a real external skill bundle that bootstraps the Entity Mission Control helper runtime for a crew of agents with shared scripts, structured task intake, per-agent manifests, and supervised rollout steps.
tagline: Turn a loose cluster of agents into a repeatable ops surface.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: enterprise-crew-skills/entity-mc
sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
installCommand: git clone https://github.com/henrino3/enterprise-crew-skills.git /tmp/enterprise-crew-skills && mkdir -p skills && cp -R /tmp/enterprise-crew-skills/entity-mc skills/entity-mc
repoPath: skills/entity-mc
estimatedSetup: Manual review required
operators:
  - Ada
  - Spock
  - Scotty
  - Geordi
stack:
  - OpenClaw
  - Entity MC
  - shell scripts
  - cron-safe rollout
outcomes:
  - Shared helper runtime across agents
  - Structured task intake into Mission Control
  - Safe rollout with verification and rollback
  - Per-agent manifests without duplicating core scripts
includes:
  - Installer workflow
  - Verification pass
  - Rollback path
  - Canonical source bundle
  - Structured intake helper
useCases:
  - Standardize agent helper scripts across multiple machines
  - Roll out Mission Control updates without hand-editing every node
  - Reduce drift between operator environments
notes:
  - This listing describes an externally hosted skill bundle. It does not imply those runtime files are checked into this website repo.
bundle:
  id: superada.workflow.entity-mission-control-bootstrap
  version: 1.2.1
  classification: external
  installMode: manual
  reviewStatus: source-review
  entrypoint: SKILL.md
  bundleRoot: github:henrino3/enterprise-crew-skills/entity-mc
  artifactCount: 7
  summary: A reusable external ops bundle that keeps the helper runtime canonical, installs portable MC operating memory, applies per-agent manifests, creates tasks from structured intake, and gives operators a safe rollout plus rollback path.
  availabilityNote: GitHub source specs are not supported by every OpenClaw CLI build. OpenClaw 2026.5.4 accepts ClawHub slugs for `openclaw skills install`, not `github:owner/repo/path`, so use the manual GitHub copy fallback below unless your CLI explicitly supports GitHub skill sources.
  installSource:
    type: github
    label: GitHub skill bundle - manual fallback
    url: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
    script: git clone https://github.com/henrino3/enterprise-crew-skills.git /tmp/enterprise-crew-skills && mkdir -p skills && cp -R /tmp/enterprise-crew-skills/entity-mc skills/entity-mc
  installable:
    supported: true
    method: manual
    sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
    sourceSpec: github:henrino3/enterprise-crew-skills/entity-mc
    instructions:
      - Review the linked GitHub bundle before install so the runtime, manifests, and helper scripts are understood.
      - If `openclaw skills install --help` only accepts a ClawHub slug, do not use the `github:` source spec. Clone the source repo and copy `entity-mc` into the local `skills/entity-mc` workspace path instead.
      - Inspect the installed skill locally, then run the bundle's install helper for the target machine and manifest.
      - Verify the installed skill and applied manifest before wider rollout.
    postInstallVerification: test -f skills/entity-mc/SKILL.md && bash skills/entity-mc/verify.sh --help
    limitations:
      - OpenClaw 2026.5.4 rejects `github:owner/repo/path` skill source specs as invalid skill slugs; GitHub-source install requires a newer/compatible CLI or the manual fallback above.
      - Bundle install is source-copy based on older CLI builds, and per-host rollout still needs operator review and host-specific manifest selection.
      - The runtime artifacts live in the external skills repo, not in this website repo.
      - Auto-pull executes existing tasks; automatic task creation requires explicit structured input or a source-specific watcher feeding mc-intake.sh.
      - Portable context is intentionally small; host-specific secrets, private memory, and local paths belong in manifests or local memory, not the public bundle.
artifacts:
  - name: Skill contract
    type: skill
    path: github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md
    description: Defines the bootstrap workflow, shared runtime assumptions, and rollout guardrails.
  - name: Canonical helper runtime
    type: bundle
    path: github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/
    description: "Shared Mission Control helper scripts: mc.sh, mc-auto-pull.sh, mc-assign-model.sh, mc-build-context.sh, mc-stall-check.sh, and mc-intake.sh."
  - name: Structured intake helper
    type: script
    path: github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/mc-intake.sh
    description: "Conservative JSON/JSONL intake helper that dedupes and creates Mission Control tasks from explicit structured signals."
  - name: Portable MC operating context
    type: doc
    path: github:henrino3/enterprise-crew-skills/entity-mc/context/
    description: "Public-safe MC operating memory: task lifecycle, review/blocker contract, evidence rules, and Entity MC runtime behavior. Installed into .entity-mc/context/ and injected by mc-build-context.sh."
  - name: Per-agent manifests
    type: manifest
    path: github:henrino3/enterprise-crew-skills/entity-mc/manifests/*.env
    description: Agent-specific env manifests that map the canonical runtime onto each operator without duplicating scripts.
  - name: Install helper
    type: script
    path: github:henrino3/enterprise-crew-skills/entity-mc/install.sh
    description: "Idempotent installer that stages the runtime, writes wrappers, and installs the marked cron block."
  - name: Verify and rollback helpers
    type: script
    path: github:henrino3/enterprise-crew-skills/entity-mc/verify.sh and github:henrino3/enterprise-crew-skills/entity-mc/rollback.sh
    description: Verification and rollback helpers used during supervised rollout.
installSteps:
  - title: Review the external bundle source
    detail: Inspect the linked skill files, runtime layout, and manifests before rollout so the install stays deliberate.
  - title: Install the bundle
    detail: Pull the Entity Mission Control bootstrap workflow into the local OpenClaw environment. On CLI builds that reject `github:` skill specs, use this manual source-copy fallback.
    command: git clone https://github.com/henrino3/enterprise-crew-skills.git /tmp/enterprise-crew-skills && mkdir -p skills && cp -R /tmp/enterprise-crew-skills/entity-mc skills/entity-mc
  - title: Review the canonical runtime and manifests locally
    detail: After install, inspect source-scripts/, context/, the per-agent .env manifests, and the optional intake settings before rollout.
  - title: Run the install helper for the target machine
    detail: Apply the canonical runtime and the matching per-agent manifest on the chosen host.
    command: bash skills/entity-mc/install.sh --manifest skills/entity-mc/manifests/<agent>.env
  - title: Verify and keep rollback ready
    detail: Confirm the helper runtime is active on each target agent before removing the previous version.
    command: bash skills/entity-mc/verify.sh --manifest skills/entity-mc/manifests/<agent>.env
  - title: Wire structured intake only when a source policy exists
    detail: Use mc-intake.sh directly or feed .entity-mc/intake/inbox.jsonl from a source-specific watcher. Intake cron is off by default.
requirements:
  - label: OpenClaw runtime with skill install access
    detail: The host needs a functioning OpenClaw environment capable of loading local skills and running shell helpers.
    type: runtime
  - label: Mission Control connectivity
    detail: Target agents must be able to reach the Mission Control system they are being configured to support.
    type: access
  - label: Operator review of host mappings
    detail: A human should validate hostnames, agent ids, and manifest selection before rollout.
    type: review
verification:
  mode: source-review
  reviewNotes:
    - Verify the linked source layout before install and verify one host first before rolling the bundle out everywhere.
    - Keep the previous helper runtime accessible until the new manifest proves healthy.
    - Compare generated agent state against the canonical runtime to catch drift.
  checks:
    - label: Source bundle review
      detail: Confirm the linked GitHub bundle exposes SKILL.md, source-scripts/, context/, manifests/*.env, install.sh, verify.sh, rollback.sh, and VERSION.
      expected: The source repository contains the referenced files and directories described by this listing.
    - label: Bundle install present
      detail: Confirm the copied skill exists in the local OpenClaw workspace after installation.
      command: test -f skills/entity-mc/SKILL.md && ls skills/entity-mc
      expected: The installed workspace path contains SKILL.md, source-scripts/, context/, manifests/, install.sh, verify.sh, rollback.sh, and VERSION.
    - label: Manifest applied
      detail: Check that the target machine received the intended per-agent manifest and helper runtime files.
      expected: The target host shows the expected manifest-backed runtime files without duplication drift.
    - label: Runtime scripts present
      detail: Confirm the installed scripts directory includes mc.sh, mc-auto-pull.sh, mc-assign-model.sh, mc-build-context.sh, mc-stall-check.sh, and mc-intake.sh.
      command: ls scripts/mc*.sh
      expected: All six runtime scripts are present and executable.
    - label: Portable context present
      detail: Confirm the installed context pack exists and will be injected into pulled tasks.
      command: ls .entity-mc/context/*.md && bash scripts/mc-build-context.sh '{"task_id":"0","task_name":"context smoke","task_description":"smoke","skill":"none","context":""}' | grep "Entity MC Operating Context"
      expected: Context files exist and the generated prompt includes Entity MC Operating Context.
    - label: Intake dry run
      detail: Confirm structured intake can build a task payload without mutating Mission Control.
      command: bash scripts/mc-intake.sh create --title "Entity MC intake smoke" --description "Dry run" --assignee Ada --dry-run
      expected: JSON output with action=dry_run and a payload containing metadata.intake=true.
structure:
  - github:henrino3/enterprise-crew-skills/entity-mc/
  - github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md
  - github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/
  - github:henrino3/enterprise-crew-skills/entity-mc/source-scripts/mc-intake.sh
  - github:henrino3/enterprise-crew-skills/entity-mc/context/
  - github:henrino3/enterprise-crew-skills/entity-mc/manifests/*.env
  - github:henrino3/enterprise-crew-skills/entity-mc/install.sh
  - github:henrino3/enterprise-crew-skills/entity-mc/verify.sh
  - github:henrino3/enterprise-crew-skills/entity-mc/rollback.sh
---

A narrow workflow bundle for teams running one operational runtime across several agents and machines, with the real source of truth living in the linked external repo.


Version 1.2.1 fixes the install contract for real-world OpenClaw CLI compatibility: older builds such as 2026.5.4 treat `openclaw skills install` as a ClawHub-slug installer and reject `github:owner/repo/path` as an invalid slug. Until GitHub source specs are supported everywhere, the documented path is source review plus manual copy into `skills/entity-mc`. Version 1.2 added portable MC operating memory. Version 1.1 added structured intake. The bundle still does not spy on chats or infer tasks from vibes. `mc-intake.sh` creates tasks from explicit JSON or JSONL candidates, then the auto-pull cron can claim and execute those tasks. That separation matters: intake is the dispatcher, auto-pull is the worker. Mixing them is how task boards become haunted.

Runtime scripts currently installed by the bundle:

- `mc.sh` - manual Mission Control helper, including `review <id> <output>`
- `mc-auto-pull.sh` - claims assigned tasks and spawns the local agent
- `mc-assign-model.sh` - model assignment helper
- `mc-build-context.sh` - task-context builder for spawned work
- `mc-stall-check.sh` - stale task detection
- `mc-intake.sh` - structured task intake into Mission Control

The installer, not the scripts, writes the cron block. `install.sh` calls the shared library function that renders a marked `ENTITY_MC:<AgentName>` crontab section for auto-pull and stall checks. Intake cron is optional and off by default until the operator defines what source is allowed to feed the inbox.


The installed context pack is the important part for giving MC to other agents. It gives them the task lifecycle, review/blocker contract, evidence rules, duplicate avoidance, and runtime safety rules without copying Ada's private memory. Scripts are the hands. Context is the adult supervision.
