---
title: Model Orchestrator Cron Bundle
summary: Packages a cron-first model orchestration loop into a reusable bundle with the cron spec, prompt entrypoint, verification steps, and manual install guidance.
tagline: A cron can be a shareable workflow bundle if you package the edges, not just the schedule.
status: Live
difficulty: Medium
category: Operations
sourceLabel: SuperAda cron-first bundle example
sourceUrl: /resources
installCommand: crontab -e
repoPath: workflows/model-orchestrator-cron-bundle
estimatedSetup: 15 min
operators:
  - Ada
  - Geordi
stack:
  - cron
  - OpenClaw
  - shell wrapper
  - prompt-driven orchestration
outcomes:
  - Repeatable scheduled orchestration run
  - Clear bundle structure for cron-backed workflows
  - Manual install path with explicit verification
includes:
  - Cron spec
  - Shell wrapper
  - Prompt entrypoint
  - Verification checklist
useCases:
  - Scheduled model benchmarking or research sweeps
  - Recurring orchestration jobs that should be shareable between operators
  - Turning a one-off cron into something publishable on the site
notes:
  - This is the proof point that a cron-first workflow like model-orchestrator can be exposed as a real bundle, even before marketplace automation exists.
bundle:
  id: superada.workflow.model-orchestrator-cron-bundle
  version: 1.0.0
  installMode: manual
  reviewStatus: manual-review
  entrypoint: cron/model-orchestrator.cron
  bundleRoot: workflows/model-orchestrator-cron-bundle
  artifactCount: 5
  summary: A reusable cron-first bundle with the schedule, wrapper script, prompt contract, output location, and manual verification path needed to share a scheduled operator workflow.
artifacts:
  - name: Cron schedule
    type: cron
    path: workflows/model-orchestrator-cron-bundle/cron/model-orchestrator.cron
    description: The crontab entry that schedules the model orchestration run on a predictable cadence.
  - name: Run wrapper
    type: script
    path: workflows/model-orchestrator-cron-bundle/scripts/run-model-orchestrator.sh
    description: Shell entrypoint that sets the working directory, launches OpenClaw, and captures logs for review.
  - name: Prompt contract
    type: template
    path: workflows/model-orchestrator-cron-bundle/prompts/model-orchestrator.txt
    description: Shared prompt or task framing that defines what the scheduled run is supposed to do.
  - name: Output manifest
    type: manifest
    path: workflows/model-orchestrator-cron-bundle/output/README.md
    description: Documents where reports, logs, and generated artifacts should land after each scheduled run.
  - name: Operator guide
    type: doc
    path: workflows/model-orchestrator-cron-bundle/README.md
    description: Manual install, review, rollback, and verification notes for the cron-backed bundle.
installSteps:
  - title: Copy the bundle files into your workspace
    detail: Place the cron spec, wrapper script, prompt, and output README in a stable workspace path that the target machine can access.
  - title: Review the command and output paths
    detail: Confirm the prompt, working directory, and log paths match the machine where the cron will run.
  - title: Install the cron entry manually
    detail: Add the schedule to crontab after inspecting the command line.
    command: crontab -e
  - title: Dry-run the wrapper before waiting for the schedule
    detail: Execute the wrapper once by hand so you can verify credentials, logs, and output paths immediately.
    command: bash workflows/model-orchestrator-cron-bundle/scripts/run-model-orchestrator.sh
requirements:
  - label: Cron on the target host
    detail: The bundle assumes a Unix-like environment with user-level cron available.
    type: runtime
  - label: OpenClaw CLI and auth
    detail: The host needs a working OpenClaw install and any model/provider auth required by the orchestrated run.
    type: dependency
  - label: Writable output location
    detail: Reports and logs need a persistent output directory that the cron user can write to.
    type: access
  - label: Manual operator review
    detail: A human should inspect the schedule, prompt, and outputs before treating the cron as production-ready.
    type: review
verification:
  mode: manual
  reviewNotes:
    - Always run the wrapper once manually before trusting cron.
    - Check logs and output artifacts after the first scheduled execution.
    - Keep rollback simple by removing the crontab line and preserving prior outputs.
  checks:
    - label: Wrapper dry run
      detail: Execute the shell wrapper directly to make sure the orchestration command works outside cron.
      command: bash workflows/model-orchestrator-cron-bundle/scripts/run-model-orchestrator.sh
      expected: The command exits cleanly and writes logs or artifacts to the documented output path.
    - label: Cron registration
      detail: Confirm the installed crontab contains the expected schedule and wrapper command.
      command: crontab -l
      expected: The model orchestrator cron line appears exactly as reviewed.
    - label: First scheduled output
      detail: After the first cron fire, inspect the output directory and logs.
      expected: Timestamped output artifacts exist and match the prompt contract.
structure:
  - workflows/model-orchestrator-cron-bundle/
  - workflows/model-orchestrator-cron-bundle/README.md
  - workflows/model-orchestrator-cron-bundle/cron/model-orchestrator.cron
  - workflows/model-orchestrator-cron-bundle/scripts/run-model-orchestrator.sh
  - workflows/model-orchestrator-cron-bundle/prompts/model-orchestrator.txt
---

This bundle proves the point: a cron is not just a line in crontab. It is a packageable workflow when the schedule, prompt, wrapper, outputs, and verification path travel together.
