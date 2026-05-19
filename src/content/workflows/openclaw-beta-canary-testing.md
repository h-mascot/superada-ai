---
title: OpenClaw Beta Canary Testing
summary: A release-gate and issue-intelligence workflow for testing OpenClaw beta builds on one non-primary agent before expanding across a fleet. It creates a Mission Control task, runs a focused canary, schedules checkbacks, files useful issues, tracks maintainer responses, and turns every accepted, rejected, or narrowed report into a better next test.
tagline: Test beta builds with evidence, not vibes.
status: Live
difficulty: Advanced
category: Operations
sourceLabel: Enterprise Crew openclaw-beta-testing workflow
sourceUrl: https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/openclaw-beta-testing
installCommand: Review the workflow, create an MC task for the target beta and agent, run Phase 1 on one canary, then expand only after the canary decision is pass-expand.
repoPath: skills/openclaw-beta-testing
estimatedSetup: Manual review required
operators:
  - Ada
  - Scotty
  - Spock
  - Zora
  - Book
stack:
  - OpenClaw
  - Mission Control
  - cron checkbacks
  - GitHub issues
  - issue registry
  - maintainer follow-up
  - peer review
outcomes:
  - One-agent beta canary before fleet expansion
  - Explicit pass-expand, mixed-hold, fail-rollback, or blocked decision
  - Scheduled checkback for observation windows
  - Evidence-backed upstream issue reports
  - Recursive issue intelligence with concrete next actions
  - Retests when fixes land or evidence requests arrive
  - Reporting lessons promoted back into the workflow
  - Peer-reviewed MC closure
includes:
  - Phase 0 intake
  - Phase 1 canary run
  - Phase 2 deep beta run
  - Phase 3 issue submission
  - Phase 4 issue intelligence
  - Phase 5 scheduled issue follow-up
  - Report template
  - Self-healing checkpoint
  - Issue registry
  - Action outcome contract
useCases:
  - Test the latest OpenClaw beta on Scotty, Spock, or Zora
  - Decide whether a beta is safe to expand beyond one canary
  - Convert a canary regression into a tight upstream report
  - Track ClawSweeper or maintainer asks without letting issues rot
  - Queue retests when an issue is fixed, narrowed, or needs stronger evidence
  - Update internal reporting guidance when a report is rejected or corrected
  - Keep a repro host available while maintainers ask for evidence
  - Avoid using the primary orchestrator as the first beta target
notes:
  - Keep the primary orchestrator stable unless the beta specifically needs main-gateway coverage.
  - Do not run the full deep matrix when the Phase 1 canary already found a P0 stability problem.
  - "Every issue-intelligence pass must choose an action: external comment, internal lesson, retest queued, or no-action with reason."
  - Public examples intentionally omit private hostnames, tokens, and internal file paths.
bundle:
  id: superada.workflow.openclaw-beta-canary-testing
  version: 1.2.1
  classification: external
  installMode: manual
  reviewStatus: manual-review
  entrypoint: SKILL.md
  bundleRoot: skills/openclaw-beta-testing
  artifactCount: 9
  summary: A disciplined beta-testing workflow that starts with Mission Control intake, runs one controlled canary, schedules checkbacks, classifies the result, submits high-quality issues when failures are found, and follows each issue until it produces a retest, an external evidence comment, or an internal lesson.
  availabilityNote: This is published as a public GitHub workflow bundle. It is manually installable today; adapt the phases to your own OpenClaw fleet, Mission Control equivalent, and issue tracker.
  installSource:
    type: manual
    label: GitHub workflow bundle
    url: https://github.com/h-mascot/Enterprise-Crew-skills/tree/main/openclaw-beta-testing
  installable:
    supported: true
    method: manual
    instructions:
      - Create a task before changing any target agent.
      - Choose one non-primary canary host.
      - Snapshot current state before updating.
      - Run Phase 1 and record one explicit decision.
      - Schedule a checkback if observation is needed.
      - If a failure is reportable, search duplicates, file the issue with evidence, and register it.
      - Re-check submitted issues on a schedule and choose an action outcome each time.
      - Only run Phase 2 when the canary is clean or maintainers need deeper evidence.
    limitations:
      - Requires access to target agent logs and OpenClaw CLI.
      - Requires a task board or equivalent evidence trail to avoid forgotten checkbacks.
      - Exact commands and host routing should be adapted to the operator's fleet.
artifacts:
  - name: Beta testing skill
    type: skill
    path: skills/openclaw-beta-testing/SKILL.md
    description: Defines intake, canary, deep run, report, and issue-intelligence behavior.
  - name: Mission Control task
    type: concept
    path: "MC task: OpenClaw beta canary"
    description: Tracks target version, target agent, risk, rollback, evidence, checkback, and reviewer.
  - name: Canary report
    type: template
    path: output/openclaw-beta/<date>-<agent>-canary-report.md
    description: Compact pass/fail report with version, checks, logs, decision, and recommendation.
  - name: Self-healing checkpoint
    type: template
    path: /tmp/self-heal-oc-beta-<agent>-<version>.json
    description: Resume state for long observation windows so the canary does not depend on memory.
  - name: Issue registry
    type: doc
    path: skills/openclaw-beta-testing/state/issues.example.json
    description: Example schema for tracking submitted beta issues, maintainer responses, and next actions.
  - name: Issue-intelligence report
    type: template
    path: output/openclaw-beta/issue-intelligence/<date>-issue-followup.md
    description: Records issue state changes, maintainer requests, retest results, comments submitted, and lessons learned.
  - name: Upstream issue example
    type: doc
    path: https://github.com/openclaw/openclaw/issues/83456
    description: Example of turning a canary regression into a public issue with scoped evidence and follow-up.
  - name: Follow-up comment example
    type: doc
    path: https://github.com/openclaw/openclaw/issues/83456#issuecomment-4476535287
    description: Example of narrowing a beta issue after a live retry, adding expected-vs-actual behavior, diagnostics, and updated event-loop health evidence.
  - name: Issue action contract
    type: template
    path: "external-comment-submitted | internal-lesson-updated | retest-queued | no-action-with-reason"
    description: Every issue-intelligence pass must end in one of these concrete outcomes so issue watching stays operational rather than passive.
installSteps:
  - title: Create intake task
    detail: Record version, target agent, rollback path, risk, intended mode, evidence requirements, and reviewer before touching the target.
  - title: Snapshot the target
    detail: Capture version, status, doctor output, gateway health, active channels, cron scheduler state, plugin state, and rollback notes.
  - title: Update one canary
    detail: Update only one non-primary target unless the test explicitly needs a broader surface.
    command: openclaw update --channel beta
  - title: Run P0 smoke
    detail: Verify gateway restart, CLI/gateway version match, visible channel reply, model route, forced cron run, plugin list, session list, and logs.
  - title: Classify the result
    detail: Choose pass-expand, mixed-hold, fail-rollback, or blocked. Do not expand on a mixed or failed canary.
  - title: Schedule checkback
    detail: If observation is needed, create a checkpoint and scheduled checkback instead of relying on memory.
  - title: Report and track issues
    detail: File upstream issues only when evidence is strong enough, then track maintainer responses until resolved or intentionally abandoned.
  - title: Register the issue
    detail: Store repo, issue number, URL, source canary, target version, MC task, labels, comment count, ClawSweeper verdict, and next action in the issue registry.
  - title: Run issue intelligence
    detail: Re-check open beta issues for labels, maintainer comments, bot verdicts, linked PRs, closure reasons, duplicate markings, and evidence requests.
  - title: Act on the issue state
    detail: Submit a follow-up comment, queue a retest, update the internal lesson, or record no-action-with-reason. Do not leave the issue as passive monitoring.
requirements:
  - label: OpenClaw CLI and gateway access
    detail: The operator must be able to run version, status, doctor, update, cron, plugin, and log commands on the target.
    type: runtime
  - label: Non-primary canary agent
    detail: Use an expendable or lower-risk target before touching the primary orchestrator.
    type: dependency
  - label: Task board with evidence
    detail: A durable MC-style task keeps the checkback, reviewer, and final decision visible.
    type: runtime
  - label: Peer review
    detail: Completion should be reviewed by another agent or operator before the task is closed.
    type: review
  - label: Issue tracker access
    detail: The operator needs read/write access to the upstream issue tracker if failures will be submitted or followed up.
    type: access
verification:
  mode: conceptual
  reviewNotes:
    - Treat this as an operating pattern. Adapt host names, channels, and commands to the target fleet.
    - The workflow is designed to avoid overexpansion when the first canary finds runtime instability.
    - Upstream reports should be scoped and updated when later retries narrow the diagnosis.
    - "Issue intelligence is recursive: every maintainer/bot response should change either the public issue, the internal workflow, or the retest queue."
  checks:
    - label: Intake completeness
      detail: Confirm the task has version, target, rollback, risk, evidence, checkback, and reviewer fields.
      expected: No beta update begins without a task and rollback note.
    - label: Canary decision
      detail: Confirm Phase 1 ends with pass-expand, mixed-hold, fail-rollback, or blocked.
      expected: The decision is written to the task and report.
    - label: Checkback present
      detail: Confirm any observation window has a scheduled checkback and checkpoint.
      expected: A later inspection is scheduled or the canary is explicitly closed.
    - label: Issue action
      detail: Confirm reportable failures become issue comments, lessons, retest tasks, or no-action reasons.
      expected: No submitted issue is left as passive monitoring.
    - label: Registry update
      detail: Confirm every submitted issue has current labels, state, comment count, last checked timestamp, and next action.
      expected: The registry can answer what happens next without re-reading the whole thread.
    - label: Maintainer follow-up
      detail: Confirm requests for diagnostics, expected-vs-actual behavior, screenshots, or reproduction are turned into action when safe.
      expected: Evidence is collected and commented, or a no-action reason is recorded.
    - label: Retest trigger
      detail: Confirm fixed, in-progress, or evidence-requested issues create a retest task or run.
      expected: The affected canary lane is rerun instead of guessed from stale evidence.
structure:
  - skills/openclaw-beta-testing/SKILL.md
  - output/openclaw-beta/<date>-<agent>-canary-report.md
  - output/openclaw-beta/issue-intelligence/
  - skills/openclaw-beta-testing/state/issues.json
  - docs/plans/<date>-openclaw-beta-<agent>-canary-plan.md
  - Mission Control task with peer review metadata
---

This workflow exists because "install the beta and see what happens" is not an operating model.

The fast path is deliberately small: one canary, one snapshot, one update, one P0 smoke pass, one decision, one checkback. The deeper run waits until the canary is clean or until maintainers need broader evidence.

The useful part is the stop/go discipline. A mixed canary is not a green light. A failed cron lane is not "probably fine." A reportable issue is not complete until it is tracked and followed up.

The intelligence loop is the part that keeps the workflow honest after the first report.

When a canary produces a useful issue, the workflow records it in a registry and checks it until something changes. A ClawSweeper verdict, maintainer label, request for diagnostics, linked PR, duplicate closure, or rejection is not trivia. It is a branch in the operating system:

- comment externally with safer evidence
- update the internal lesson
- queue a retest
- or write down why no action is useful

The Scotty beta canary is the reference example. The first report showed a cron/gateway/event-loop failure lane on a low-power beta host. The follow-up retry narrowed the issue: the exact gateway-close symptom did not reproduce after recovery, but the exercise exposed a separate delivery-resolution problem. That is not a failed report. That is issue intelligence doing its job. The diagnosis got sharper.

Beta testing should make the beta better and keep the fleet boring. Both halves matter.
