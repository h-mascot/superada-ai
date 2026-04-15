---
title: Workflow Bundle Title
summary: One paragraph on what this workflow bundle does, what problem it solves, and why someone would install it.
tagline: Short sharp tagline for the browse page.
status: Draft
isTemplate: true
difficulty: Medium
category: Operations
sourceLabel: Source repo or canonical source
sourceUrl: https://github.com/example/repo
installCommand: npx clawhub@latest install your-workflow-bundle
repoPath: workflows/your-workflow-bundle
estimatedSetup: 10 to 20 min
operators:
  - Ada
stack:
  - OpenClaw
  - cron
outcomes:
  - Outcome one
  - Outcome two
includes:
  - Bundle manifest
  - README
useCases:
  - Use case one
notes:
  - Optional operator note
bundle:
  id: example.workflow.your-workflow-bundle
  version: 0.1.0
  installMode: manual
  reviewStatus: manual-review
  entrypoint: workflow.yaml
  bundleRoot: workflows/your-workflow-bundle
  artifactCount: 4
  summary: Short summary of what travels with the bundle and why it is reusable.
artifacts:
  - name: Bundle manifest
    type: manifest
    path: workflows/your-workflow-bundle/workflow.yaml
    description: Canonical manifest describing the bundle.
  - name: Operator guide
    type: doc
    path: workflows/your-workflow-bundle/README.md
    description: Installation, adaptation, rollback, and review notes.
  - name: Scheduled trigger
    type: cron
    path: workflows/your-workflow-bundle/crons/your-workflow-bundle.json
    description: The cron or schedule artifact that kicks off the workflow.
  - name: Helper script
    type: script
    path: workflows/your-workflow-bundle/scripts/run.sh
    description: Script or executable entrypoint used by the workflow.
installSteps:
  - title: Copy the bundle into your workspace
    detail: Place the bundle files in a stable path inside the target workspace or repo.
  - title: Review and adapt the artifacts
    detail: Inspect paths, commands, prompts, channels, and secrets before install.
  - title: Install the trigger or entrypoint manually
    detail: Create the cron, copy the skill, or wire the script as described in the README.
    command: openclaw cron add ...
  - title: Run a manual verification pass
    detail: Execute the workflow once manually before trusting the automated path.
    command: bash workflows/your-workflow-bundle/scripts/run.sh
requirements:
  - label: OpenClaw installed
    detail: The target environment needs a working OpenClaw install.
    type: dependency
  - label: Required credentials configured
    detail: Any provider keys, channel auth, or service credentials must already exist.
    type: access
  - label: Human review before production use
    detail: Bundle install is intentionally manual in v1.
    type: review
verification:
  mode: manual
  reviewNotes:
    - Run the workflow once manually before depending on automation.
    - Confirm outputs land in the expected place.
  checks:
    - label: Entrypoint runs cleanly
      detail: Execute the primary script or command outside the scheduler.
      command: bash workflows/your-workflow-bundle/scripts/run.sh
      expected: Command exits cleanly and produces the documented output.
    - label: Trigger is installed correctly
      detail: Confirm the cron or other trigger is present and matches the reviewed command.
      command: openclaw cron list
      expected: The expected trigger appears with the right schedule and target.
structure:
  - workflows/your-workflow-bundle/
  - workflows/your-workflow-bundle/workflow.yaml
  - workflows/your-workflow-bundle/README.md
  - workflows/your-workflow-bundle/crons/
  - workflows/your-workflow-bundle/scripts/
---

Use this file as the starting point when Henry says:
- "take this and make it a workflow bundle"
- "put this on the website as a workflow bundle"
- "package this cron/skill/script as a reusable workflow"

Replace the placeholder values, then add a short body section below if any extra operator context is needed.
