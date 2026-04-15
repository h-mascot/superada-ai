---
title: Geordi Build Pipeline
summary: Runs PRD stories sequentially through Codex with context loading, separate verification, automatic retry, and ACP-first transport to the Mac builder.
tagline: A narrow build pipeline for shipping stories without pretending verification is optional.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: enterprise-crew-skills/geordi-build-pipeline
sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-build-pipeline
installCommand: openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline
repoPath: skills/geordi-build-pipeline
estimatedSetup: 15 to 25 min
operators:
  - Geordi
  - Ada
stack:
  - OpenClaw
  - ACP
  - Codex
  - Astro or app repo build checks
outcomes:
  - Sequential story execution from a plan
  - Build verification outside the coding loop
  - Retry-on-failure flow with explicit blockers
includes:
  - ACP-first transport
  - SSH fallback
  - Local fallback mode
  - Context update requirement
useCases:
  - Turn an active plan into implemented repo work
  - Keep a Mac build agent productive without manual babysitting
  - Separate implementation from verification cleanly
notes:
  - Use when stories are already defined and you care about real verification, not just agent confidence.
---

This bundle is opinionated on purpose. It assumes implementation is only half the story and verification must be its own step.
