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
installCommand: bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace
repoPath: public/install/recursive-self-improvement-pack
estimatedSetup: 10 to 20 min
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
  classification: external
  installMode: agent-installable
  reviewStatus: source-review
  entrypoint: install.sh
  bundleRoot: https://superada.ai/install/recursive-self-improvement-pack/
  artifactCount: 9
  summary: Daily reflection, promotion, skill evolution, enforcement, and visibility artifacts that work together as one recursive improvement loop.
  availabilityNote: This workflow now publishes a real installable bundle at a stable SuperAda URL. It installs workflow assets into an OpenClaw workspace, then requires manual verification before cron activation.
  installSource:
    type: download
    label: SuperAda install bundle
    url: https://superada.ai/install/recursive-self-improvement-pack/
    script: bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace
  installable:
    supported: true
    method: script
    sourceUrl: https://superada.ai/install/recursive-self-improvement-pack/
    sourceSpec: https://superada.ai/install/recursive-self-improvement-pack/install.sh
    instructions:
      - Review the bundle README and install manifest at the published install URL.
      - Run `bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace`.
      - Review thresholds, memory mutation behavior, and installed docs before enabling any cron.
      - Run the manual verification commands in the bundle README before trusting the automated path.
    postInstallVerification: bash scripts/crons/daily-soul-review.sh && bash scripts/crons/recursive-improvement.sh && bash scripts/crons/weekly-self-improvement-review.sh && python3 scripts/crons/generate-recursive-visibility.py
    limitations:
      - The installer copies assets into a workspace but intentionally does not auto-create cron jobs.
      - Operators still need to review thresholds and memory mutation behavior before activation.
artifacts:
  - name: Installer script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/install.sh
    description: Copies the bundle assets into a target OpenClaw workspace.
  - name: Bundle README
    type: doc
    path: https://superada.ai/install/recursive-self-improvement-pack/README.md
    description: Published install instructions, verification steps, and operator warnings.
  - name: Daily soul review script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/daily-soul-review.sh
    description: Restores the explicit daily introspection loop and generates a daily self-improvement report.
  - name: Recursive improvement pipeline spec
    type: doc
    path: https://superada.ai/install/recursive-self-improvement-pack/docs/specs/recursive-improvement-pipeline.md
    description: Canonical capture -> classify -> promote -> apply -> verify workflow spec.
  - name: Improvement candidate template
    type: template
    path: https://superada.ai/install/recursive-self-improvement-pack/docs/templates/improvement-candidate.md
    description: Standardized candidate structure used across the recursive pipeline.
  - name: Recursive improvement cron script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/recursive-improvement.sh
    description: Promotes high-signal reflections into workflow candidates and triggers recidivism enforcement.
  - name: Skill evolution path spec
    type: doc
    path: https://superada.ai/install/recursive-self-improvement-pack/docs/specs/skill-evolution-path.md
    description: Explains how repeated failures turn into skill patches, helper scripts, or new skills.
  - name: Skill evolution review script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/skill-evolution-review.sh
    description: Reviews skill-related candidates and separates safe auto-apply from human-gated changes.
  - name: Weekly self-improvement review script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/weekly-self-improvement-review.sh
    description: Summarizes proposed and applied candidates and checks which ones need verification.
  - name: Recidivism enforcement policy and script
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/enforce-recidivism.py
    description: Promotes repeated failures into enforced guardrails and escalates persistent recidivism into structural candidates.
  - name: Recursive visibility spec and generator
    type: script
    path: https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/generate-recursive-visibility.py
    description: Generates visibility outputs for funnel states, promoted rules, recidivism, and bottlenecks.
installSteps:
  - title: Review the published install bundle
    detail: Inspect the README, install script, and bundle manifest at the public install URL before running anything.
  - title: Run the installer into your workspace
    detail: Use the published installer to copy the bundle into the target OpenClaw workspace.
    command: bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace
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
      command: bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace && bash scripts/crons/daily-soul-review.sh
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
  - https://superada.ai/install/recursive-self-improvement-pack/
  - https://superada.ai/install/recursive-self-improvement-pack/install.sh
  - https://superada.ai/install/recursive-self-improvement-pack/README.md
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/daily-soul-review.sh
  - https://superada.ai/install/recursive-self-improvement-pack/docs/specs/recursive-improvement-pipeline.md
  - https://superada.ai/install/recursive-self-improvement-pack/docs/templates/improvement-candidate.md
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/recursive-improvement.sh
  - https://superada.ai/install/recursive-self-improvement-pack/docs/specs/skill-evolution-path.md
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/skill-evolution-review.sh
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/weekly-self-improvement-review.sh
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/enforce-recidivism.py
  - https://superada.ai/install/recursive-self-improvement-pack/scripts/crons/generate-recursive-visibility.py
---

This bundle exists because one missing loop kept weakening the whole system.

We already had learning signals, weekly review, drift audits, and memory files. What we did not have was one clean path that turned repeated failure into promoted rules, skill evolution, enforced guardrails, and visible workflow state. Hermes made that gap obvious. This pack closes it.

If you install it, treat it like operator infrastructure, not decorative self-improvement. The value is the chain, not any one artifact in isolation.
