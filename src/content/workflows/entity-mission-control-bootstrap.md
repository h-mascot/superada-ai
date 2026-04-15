---
title: Entity Mission Control Bootstrap
summary: Bootstraps the Entity Mission Control helper runtime for a crew of agents with a shared canonical bundle, per-agent manifests, and verification-safe install steps.
tagline: Turn a loose cluster of agents into a repeatable ops surface.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: enterprise-crew-skills/entity-mc
sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/entity-mc
installCommand: openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc
repoPath: skills/entity-mc
estimatedSetup: 20 to 30 min
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
  - Best fit when one workflow needs to run across multiple agents and hosts.
bundle:
  id: superada.workflow.entity-mission-control-bootstrap
  version: 1.0.0
  installMode: manual
  reviewStatus: manual-review
  entrypoint: SKILL.md
  bundleRoot: skills/entity-mc
  artifactCount: 5
  summary: A reusable ops bundle that keeps the helper runtime canonical, applies per-agent manifests, and gives operators a safe rollout plus rollback path.
artifacts:
  - name: Skill contract
    type: skill
    path: skills/entity-mc/SKILL.md
    description: Defines the bootstrap workflow, shared runtime assumptions, and rollout guardrails.
  - name: Canonical helper runtime
    type: bundle
    path: skills/entity-mc/runtime/
    description: Shared scripts and helper assets that should remain canonical across agent installs.
  - name: Per-agent manifests
    type: manifest
    path: skills/entity-mc/manifests/*.yaml
    description: Agent-specific manifest files that map the canonical runtime onto each operator without duplicating scripts.
  - name: Install scripts
    type: script
    path: skills/entity-mc/scripts/install-*.sh
    description: Manual install and rollout helpers used during first deployment or updates.
  - name: Rollback notes
    type: doc
    path: skills/entity-mc/README.md
    description: Human-readable rollback and verification guidance for operators doing a supervised rollout.
installSteps:
  - title: Install the bundle
    detail: Pull the Entity Mission Control bootstrap workflow into the local OpenClaw environment.
    command: openclaw skills install github:henrino3/enterprise-crew-skills/entity-mc
  - title: Review the canonical runtime and manifests
    detail: Inspect the shared runtime files and the per-agent manifest mapping before rollout so the install stays deliberate.
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
  mode: manual
  reviewNotes:
    - Verify one host first before rolling the bundle out everywhere.
    - Keep the previous helper runtime accessible until the new manifest proves healthy.
    - Compare generated agent state against the canonical runtime to catch drift.
  checks:
    - label: Bundle install present
      detail: Confirm the skill is discoverable in the local OpenClaw environment.
      command: openclaw skills info entity-mc
      expected: The installed skill reports its metadata and local source path.
    - label: Manifest applied
      detail: Check that the target machine received the intended per-agent manifest and helper runtime files.
      expected: The target host shows the expected manifest-backed runtime files without duplication drift.
    - label: Helper runtime health
      detail: Run the post-install verification path described by the bundle before expanding rollout.
      expected: Agent helper commands run successfully and can talk to Mission Control.
structure:
  - skills/entity-mc/
  - skills/entity-mc/SKILL.md
  - skills/entity-mc/runtime/
  - skills/entity-mc/manifests/*.yaml
  - skills/entity-mc/scripts/install-*.sh
---

A narrow workflow bundle for teams running one operational runtime across several agents and machines.
