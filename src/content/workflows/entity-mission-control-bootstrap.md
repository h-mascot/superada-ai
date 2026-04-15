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
---

A narrow workflow bundle for teams running one operational runtime across several agents and machines.
