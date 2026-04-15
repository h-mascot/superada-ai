---
title: Geordi Build Pipeline
summary: Installs from a real external skill bundle and runs PRD stories sequentially through Codex with context loading, separate verification, automatic retry, and ACP-first transport to the Mac builder.
tagline: A narrow build pipeline for shipping stories without pretending verification is optional.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: enterprise-crew-skills/geordi-build-pipeline
sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-build-pipeline
installCommand: openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline
repoPath: skills/geordi-build-pipeline
estimatedSetup: Manual review required
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
  - This listing points at a real installable external skill bundle, not a local bundle directory inside this site repo.
bundle:
  id: superada.workflow.geordi-build-pipeline
  version: 1.0.0
  classification: external
  installMode: agent-installable
  reviewStatus: source-review
  entrypoint: SKILL.md
  bundleRoot: github:henrino3/enterprise-crew-skills/geordi-build-pipeline
  artifactCount: 5
  summary: A real external workflow bundle with the skill contract, ACP-aware scripts, YAML workflow definitions, and explicit verification steps that stay outside the coding loop.
  availabilityNote: Installs from the linked GitHub skill source through OpenClaw. The artifacts listed here describe the external bundle, not files checked into this website repo.
  installSource:
    type: github
    label: GitHub skill bundle
    url: https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-build-pipeline
    script: openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline
  installable:
    supported: true
    method: openclaw-skill
    sourceUrl: https://github.com/henrino3/enterprise-crew-skills/tree/main/geordi-build-pipeline
    sourceSpec: github:henrino3/enterprise-crew-skills/geordi-build-pipeline
    instructions:
      - Review the linked GitHub bundle before install so the transport, workflow YAML, and verification flow are understood.
      - Install it into OpenClaw with `openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline`.
      - Create or initialize the required project context file before any run.
      - Review the workflow definition for the target repo and builder host, then launch the skill manually.
    postInstallVerification: openclaw skills info geordi-build-pipeline
    limitations:
      - Skill installation is real, but successful execution still depends on repo-specific context, builder access, and verification commands.
      - The workflow bundle is externally hosted, not checked into this website repo.
artifacts:
  - name: Skill contract
    type: skill
    path: github:henrino3/enterprise-crew-skills/geordi-build-pipeline/SKILL.md
    description: Canonical operating instructions for the builder pipeline, including ACP-first transport, retries, verification, and context update rules.
  - name: Context loader
    type: script
    path: github:henrino3/enterprise-crew-skills/geordi-build-pipeline/scripts/load-context.sh
    description: Pulls project context, package summary, testing notes, and recent repo state into the task prompt before implementation.
  - name: Context updater
    type: script
    path: github:henrino3/enterprise-crew-skills/geordi-build-pipeline/scripts/update-context.sh
    description: Appends dated changes back into the project context file after each completed build.
  - name: Workflow definitions
    type: manifest
    path: github:henrino3/enterprise-crew-skills/geordi-build-pipeline/workflows/*.yaml
    description: Bundle-level YAML definitions that shape repo, transport, verify, and commit behavior for repeatable runs.
  - name: ACP transport helpers
    type: bundle
    path: github:henrino3/enterprise-crew-skills/acp/scripts/acp-run.sh + acp-status.sh
    description: Required runner helpers for dispatching Geordi tasks over ACP and waiting for structured completion.
installSteps:
  - title: Review the external bundle source
    detail: Read the linked skill files and workflow definitions before installing anything so the transport, retry, and verification behavior are understood.
  - title: Install the skill bundle into OpenClaw
    detail: Pull the workflow bundle from GitHub so the skill contract and workflow assets are available locally.
    command: openclaw skills install github:henrino3/enterprise-crew-skills/geordi-build-pipeline
  - title: Ensure a project context file exists
    detail: Geordi expects a context file before any implementation run. Create one if the repo does not already have CONTEXT.md or a matching memory context file.
    command: ~/clawd/skills/geordi-build-pipeline/scripts/update-context.sh ~/Code/<project> --init
  - title: Review or adapt the workflow definition
    detail: Confirm the YAML workflow points at the right repo, transport mode, verify commands, and target builder host before execution.
  - title: Run the build pipeline manually
    detail: Start the bundle through the Geordi skill, then let ACP or fallback transport execute story work sequentially with separate verification.
    command: openclaw agent run --skill geordi-build-pipeline
requirements:
  - label: OpenClaw skill install support
    detail: The target environment needs a working OpenClaw install with skill installation enabled.
    type: runtime
  - label: Builder access
    detail: ACP on the Mac builder is preferred. SSH fallback or a local runner path must also be available if ACP is down.
    type: access
  - label: Codex-capable agent runtime
    detail: The workflow assumes Codex-backed implementation runs and a shell environment that can execute repo verification commands.
    type: dependency
  - label: Repo-specific verification commands
    detail: The operator must know which build or typecheck commands actually prove success for the target project.
    type: review
verification:
  mode: source-review
  reviewNotes:
    - Verify the linked source before install, then verify on the target repo after implementation, not inside the coding loop.
    - If build verification fails, retry implementation with the real errors pasted back into the workflow.
    - Do not push until the separate verification step is green.
  checks:
    - label: Source bundle review
      detail: Confirm the linked GitHub bundle exposes the expected SKILL.md, scripts, and workflow definitions.
      expected: The source repository contains the referenced files and they match the workflow claims.
    - label: Context preflight
      detail: Confirm the installed workflow can load project context before it starts implementation.
      command: ~/clawd/skills/geordi-build-pipeline/scripts/load-context.sh ~/Code/<project>
      expected: A non-empty context payload with project overview, stack, recent changes, and testing cues.
    - label: Type or build verification
      detail: Run the repo's actual verification command outside the agent loop.
      command: cd ~/Code/<project> && npx tsc --noEmit
      expected: Command exits cleanly with no type errors.
structure:
  - github:henrino3/enterprise-crew-skills/geordi-build-pipeline/
  - github:henrino3/enterprise-crew-skills/geordi-build-pipeline/SKILL.md
  - github:henrino3/enterprise-crew-skills/geordi-build-pipeline/scripts/load-context.sh
  - github:henrino3/enterprise-crew-skills/geordi-build-pipeline/scripts/update-context.sh
  - github:henrino3/enterprise-crew-skills/geordi-build-pipeline/workflows/*.yaml
---

This workflow is installable and real, but the source of truth lives in the external skill repo, not in this site's local tree.
