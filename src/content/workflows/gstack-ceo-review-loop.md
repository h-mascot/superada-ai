---
title: GStack CEO Review Loop
summary: Packages the GStack review flow into a reusable operator pattern for CEO updates, issue surfacing, and decision-ready summaries based on recent project context.
tagline: Condense the state of the company into one sharp review loop.
status: Internal
difficulty: Medium
category: Research
sourceLabel: workspace skill / gstack-openclaw-ceo-review
sourceUrl: https://github.com/henrino3/superada-ai
installCommand: openclaw skills sync && openclaw agent run --skill gstack-openclaw-ceo-review
estimatedSetup: 10 to 15 min
operators:
  - Ada
stack:
  - OpenClaw
  - workspace skills
  - docs review
  - briefing synthesis
outcomes:
  - Decision-ready briefing
  - Condensed review of progress and risk
  - Repeatable executive update cadence
includes:
  - Context scan
  - Priority synthesis
  - Executive summary framing
useCases:
  - Weekly founder review
  - Pre-meeting prep for strategy conversations
  - Turning scattered updates into one coherent brief
notes:
  - This is seeded as an internal bundle shape because the workflow is useful even when the underlying skill stays private.
bundle:
  id: superada.workflow.gstatic-ceo-review-loop
  version: 1.0.0
  installMode: manual
  reviewStatus: manual-review
  entrypoint: gstack-openclaw-ceo-review
  bundleRoot: workspace skill
  artifactCount: 4
  summary: An internal research bundle that turns project context and recent updates into a concise executive review loop without pretending it is one-click productized.
artifacts:
  - name: Workspace skill
    type: skill
    path: workspace/skills/gstack-openclaw-ceo-review/SKILL.md
    description: Internal skill contract that defines how the review loop scans context and produces the CEO-facing brief.
  - name: Context sources
    type: doc
    path: docs/, memory/, project notes
    description: The review bundle depends on current project documents, plan files, and recent updates as source material.
  - name: Briefing output
    type: template
    path: session output / briefing draft
    description: Structured executive summary with risks, decisions, and priority notes for the review conversation.
  - name: Sync step
    type: script
    path: openclaw skills sync
    description: Manual refresh step to ensure the workspace skill is available before running the bundle.
installSteps:
  - title: Sync local workspace skills
    detail: Pull the latest workspace skill definitions into the current OpenClaw environment.
    command: openclaw skills sync
  - title: Review current project context
    detail: Make sure the underlying docs, plans, and status notes are current enough for an executive synthesis pass.
  - title: Run the review loop manually
    detail: Launch the workspace skill and let it generate a decision-ready summary for founder review.
    command: openclaw agent run --skill gstack-openclaw-ceo-review
requirements:
  - label: Local workspace skill access
    detail: This bundle depends on a private workspace skill rather than a public GitHub-installable package.
    type: access
  - label: Fresh context documents
    detail: The output quality depends on updated plans, notes, and recent project progress being available to scan.
    type: review
  - label: Operator judgment on the final brief
    detail: Manual review is required before the generated summary is treated as an executive update.
    type: review
verification:
  mode: manual
  reviewNotes:
    - Treat the first draft as a briefing candidate, not final truth.
    - Spot-check key claims against current project documents before sharing upward.
    - Keep sensitive internal context inside the review loop.
  checks:
    - label: Skill availability
      detail: Confirm the workspace skill is loaded before you run the bundle.
      command: openclaw skills info gstack-openclaw-ceo-review
      expected: The skill is present in the local workspace registry.
    - label: Brief quality review
      detail: Read the generated briefing and verify that top priorities, risks, and decisions match the current state of work.
      expected: The summary is accurate enough to support a real executive review.
structure:
  - workspace/skills/gstack-openclaw-ceo-review/
  - workspace/skills/gstack-openclaw-ceo-review/SKILL.md
  - docs/
  - memory/
---

Not every useful workflow should be public-installable on day one. This one still deserves a clean marketplace shape.
