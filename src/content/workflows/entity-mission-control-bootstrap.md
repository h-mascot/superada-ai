---
title: Entity Mission Control Bootstrap
summary: Installs from a real external skill bundle that bootstraps the Entity Mission Control helper runtime for a crew of agents with shared scripts, per-agent manifests, and supervised rollout steps.
tagline: Turn a loose cluster of agents into a repeatable ops surface.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: enterprise-crew-skills/entity-mc
sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
installCommand: openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc
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
  - Safe rollout with verification and rollback
  - Per-agent manifests without duplicating core scripts
includes:
  - Installer workflow
  - Verification pass
  - Rollback path
  - Canonical source bundle
useCases:
  - Standardize agent helper scripts across multiple machines
  - Roll out Mission Control updates without hand-editing every node
  - Reduce drift between operator environments
notes:
  - This listing describes an externally hosted skill bundle. It does not imply those runtime files are checked into this website repo.
bundle:
  id: superada.workflow.entity-mission-control-bootstrap
  version: 1.0.0
  classification: external
  installMode: agent-installable
  reviewStatus: source-review
  entrypoint: SKILL.md
  bundleRoot: github:henrino3/enterprise-crew-skills/entity-mc
  artifactCount: 5
  summary: A reusable external ops bundle that keeps the helper runtime canonical, applies per-agent manifests, and gives operators a safe rollout plus rollback path.
  availabilityNote: Installs from the linked GitHub skill source through OpenClaw. The artifacts below describe the external bundle shape, not local files in this repo.
  installSource:
    type: github
    label: GitHub skill bundle
    url: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
    script: openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc
  installable:
    supported: true
    method: openclaw-skill
    sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
    sourceSpec: github:henrino3/enterprise-crew-skills/entity-mc
    instructions:
      - Review the linked GitHub bundle before install so the runtime, manifests, and helper scripts are understood.
      - Install it into OpenClaw with `openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc`.
      - Inspect the installed skill locally, then run the bundle's install helper for the target machine and manifest.
      - Verify the installed skill and applied manifest before wider rollout.
    postInstallVerification: openclaw skills info entity-mc
    limitations:
      - Bundle install is real, but per-host rollout still needs operator review and host-specific manifest selection.
      - The runtime artifacts live in the external skills repo, not in this website repo.
artifacts:
  - name: Skill contract
    type: skill
    path: github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md
    description: Defines the bootstrap workflow, shared runtime assumptions, and rollout guardrails.
  - name: Canonical helper runtime
    type: bundle
    path: github:henrino3/enterprise-crew-skills/entity-mc/runtime/
    description: Shared scripts and helper assets that should remain canonical across agent installs.
  - name: Per-agent manifests
    type: manifest
    path: github:henrino3/enterprise-crew-skills/entity-mc/manifests/*.yaml
    description: Agent-specific manifest files that map the canonical runtime onto each operator without duplicating scripts.
  - name: Install scripts
    type: script
    path: github:henrino3/enterprise-crew-skills/entity-mc/scripts/install-*.sh
    description: Manual install and rollout helpers used during first deployment or updates.
  - name: Rollback notes
    type: doc
    path: github:henrino3/enterprise-crew-skills/entity-mc/README.md
    description: Human-readable rollback and verification guidance for operators doing a supervised rollout.
installSteps:
  - title: Review the external bundle source
    detail: Inspect the linked skill files, runtime layout, and manifests before rollout so the install stays deliberate.
  - title: Install the bundle
    detail: Pull the Entity Mission Control bootstrap workflow into the local OpenClaw environment.
    command: openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc
  - title: Review the canonical runtime and manifests locally
    detail: After install, inspect the shared runtime files and the per-agent manifest mapping before rollout.
  - title: Run the install helper for the target machine
    detail: Apply the canonical runtime and the matching per-agent manifest on the chosen host.
  - title: Verify and keep rollback ready
    detail: Confirm the helper runtime is active on each target agent before removing the previous version.
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
      detail: Confirm the linked GitHub bundle exposes the expected skill contract, runtime directory, manifests, and install helpers.
      expected: The source repository contains the referenced files and directories described by this listing.
    - label: Bundle install present
      detail: Confirm the skill is discoverable in the local OpenClaw environment after installation.
      command: openclaw skills info entity-mc
      expected: The installed skill reports its metadata and local source path.
    - label: Manifest applied
      detail: Check that the target machine received the intended per-agent manifest and helper runtime files.
      expected: The target host shows the expected manifest-backed runtime files without duplication drift.
structure:
  - github:henrino3/enterprise-crew-skills/entity-mc/
  - github:henrino3/enterprise-crew-skills/entity-mc/SKILL.md
  - github:henrino3/enterprise-crew-skills/entity-mc/runtime/
  - github:henrino3/enterprise-crew-skills/entity-mc/manifests/*.yaml
  - github:henrino3/enterprise-crew-skills/entity-mc/scripts/install-*.sh
---

A narrow workflow bundle for teams running one operational runtime across several agents and machines, with the real source of truth living in the linked external repo.
