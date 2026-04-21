---
title: Recursive Self-Improvement Pack
summary: A workflow bundle for turning agent mistakes into durable system changes through daily reflection, candidate promotion, skill evolution, recidivism enforcement, and visibility reports.
tagline: A recursive workflow with memory, guardrails, and teeth.
status: Live
isTemplate: false
difficulty: Medium
category: Operations
sourceLabel: SuperAda / OpenClaw workspace
sourceUrl: https://github.com/henrino3/superada-ai
installCommand: Manual workflow bundle - copy the linked scripts and docs into your OpenClaw workspace
repoPath: workflows/recursive-self-improvement-pack
estimatedSetup: 20 to 40 min
operators:
  - Ada
stack:
  - OpenClaw
  - cron
  - markdown
  - python
outcomes:
  - Restore a dedicated daily reflection loop
  - Promote recurring failures into rules, skills, or workflow patches
  - Enforce guardrails when recidivism crosses thresholds
  - Generate visibility reports for the recursive funnel
includes:
  - Daily soul review loop
  - Recursive improvement pipeline
  - Skill evolution review
  - Recidivism enforcement
  - Recursive visibility reports
useCases:
  - Agent ops teams that keep repeating the same mistakes
  - Builders who need a promotion path from reflection to structural change
  - Operators who want self-improvement with proof instead of vibes
notes:
  - This is a workflow, not a single skill. The value comes from the chained loop.
bundle:
  id: superada.workflow.recursive-self-improvement-pack
  version: 1.0.0
  classification: local
  installMode: manual
  reviewStatus: manual-review
  entrypoint: scripts/crons/daily-soul-review.sh
  bundleRoot: workflows/recursive-self-improvement-pack
  artifactCount: 9
  summary: Daily reflection, promotion, skill evolution, enforcement, and visibility artifacts that work together as one recursive improvement loop.
  availabilityNote: The workflow is real and live in Ada's OpenClaw workspace, but published here as a manual workflow pattern rather than a one-command installer.
  installSource:
    type: local-path
    label: Manual workspace copy
    script: Review the listed files and copy/adapt them into your own OpenClaw workspace.
  installable:
    supported: true
    method: manual
    sourceUrl: https://superada.ai/blog/the-hermes-gap-what-we-stole-what-we-built-and-why-its-a-workflow-not-a-skill/
    sourceSpec: recursive-self-improvement-pack
    instructions:
      - Copy the listed docs, scripts, and memory files into a stable path in your OpenClaw workspace.
      - Review all file paths, message targets, and thresholds before enabling any cron.
      - Enable the daily soul review and recursive improvement crons only after a manual dry run.
      - Run the visibility and weekly review scripts once manually before trusting the automated path.
    postInstallVerification: bash scripts/crons/daily-soul-review.sh && bash scripts/crons/recursive-improvement.sh && bash scripts/crons/weekly-self-improvement-review.sh
    limitations:
      - Site listing is a workflow pattern, not yet a packaged ClawHub installer.
      - Thresholds and memory insertion behavior should be reviewed before use in another workspace.
artifacts:
  - name: Daily soul review script
    type: script
    path: scripts/crons/daily-soul-review.sh
    description: Restores the explicit daily introspection loop and generates a daily self-improvement report.
  - name: Recursive improvement pipeline spec
    type: doc
    path: docs/specs/recursive-improvement-pipeline.md
    description: Canonical capture -> classify -> promote -> apply -> verify workflow spec.
  - name: Improvement candidate template
    type: template
    path: docs/templates/improvement-candidate.md
    description: Standardized candidate structure used across the recursive pipeline.
  - name: Recursive improvement cron script
    type: script
    path: scripts/crons/recursive-improvement.sh
    description: Promotes high-signal reflections into workflow candidates and triggers recidivism enforcement.
  - name: Skill evolution path spec
    type: doc
    path: docs/specs/skill-evolution-path.md
    description: Explains how repeated failures turn into skill patches, helper scripts, or new skills.
  - name: Skill evolution review script
    type: script
    path: scripts/crons/skill-evolution-review.sh
    description: Reviews skill-related candidates and separates safe auto-apply from human-gated changes.
  - name: Weekly self-improvement review script
    type: script
    path: scripts/crons/weekly-self-improvement-review.sh
    description: Summarizes proposed and applied candidates and checks which ones need verification.
  - name: Recidivism enforcement policy and script
    type: script
    path: scripts/enforce-recidivism.py
    description: Promotes repeated failures into enforced guardrails and escalates persistent recidivism into structural candidates.
  - name: Recursive visibility spec and generator
    type: script
    path: scripts/crons/generate-recursive-visibility.py
    description: Generates visibility outputs for funnel states, promoted rules, recidivism, and bottlenecks.
installSteps:
  - title: Copy the workflow artifacts into your workspace
    detail: Place the listed docs and scripts in stable docs/, scripts/, and memory/ paths inside the target workspace.
  - title: Review thresholds and memory mutation behavior
    detail: Check recidivism thresholds, rule promotion behavior, and any direct MEMORY.md insertion before enabling automation.
  - title: Wire the cron layer
    detail: Recreate the daily soul review and recursive improvement cron triggers in the target workspace.
  - title: Run a manual verification pass
    detail: Generate one daily report, one recursive promotion pass, one weekly review, and one visibility report before enabling unattended use.
requirements:
  - label: OpenClaw workspace with cron support
    detail: The target environment needs a working OpenClaw install and an editable workspace.
    type: dependency
  - label: Memory files and reflections log
    detail: The workflow expects daily memory notes, a reflections log, and a recidivism tracker.
    type: dependency
  - label: Human review before production use
    detail: The bundle is intentionally manual-first because it can promote rules and mutate memory state.
    type: review
verification:
  mode: manual
  reviewNotes:
    - Confirm the daily soul review generates an output file.
    - Confirm the recursive pipeline promotes candidates without duplicating prior ones.
    - Confirm recidivism enforcement only promotes the intended guardrails.
  checks:
    - label: Daily introspection loop runs cleanly
      detail: Execute the daily soul review script manually.
      command: bash scripts/crons/daily-soul-review.sh
      expected: A daily report appears under output/self-improvement/.
    - label: Recursive promotion path works
      detail: Run the recursive improvement script after adding or reusing a high-signal reflection.
      command: bash scripts/crons/recursive-improvement.sh
      expected: Candidate files are promoted and visibility generation runs.
    - label: Weekly review summarizes the queue
      detail: Run the weekly review script manually.
      command: bash scripts/crons/weekly-self-improvement-review.sh
      expected: A weekly report appears with candidate funnel states and verification reminders.
structure:
  - scripts/crons/daily-soul-review.sh
  - docs/specs/recursive-improvement-pipeline.md
  - docs/templates/improvement-candidate.md
  - scripts/crons/recursive-improvement.sh
  - docs/specs/skill-evolution-path.md
  - scripts/crons/skill-evolution-review.sh
  - scripts/crons/weekly-self-improvement-review.sh
  - scripts/enforce-recidivism.py
  - scripts/crons/generate-recursive-visibility.py
---

This bundle exists because one missing loop kept weakening the whole system.

We already had learning signals, weekly review, drift audits, and memory files. What we did not have was one clean path that turned repeated failure into promoted rules, skill evolution, enforced guardrails, and visible workflow state. Hermes made that gap obvious. This pack closes it.

If you install it, treat it like operator infrastructure, not decorative self-improvement. The value is the chain, not any one artifact in isolation.
