# Cursor driver cron + CLI Tester auto-approval lessons — 2026-06-22

## Context

During the Mycelium V1 execution-pack run, Henry asked for the pack to be truly autonomous: Cursor should not stop after every issue waiting for a human Book review when local evidence is already clean, and the project needed a recurring cron to watch Cursor job activity and safely nudge/unblock the run.

## Durable lessons

### 1. Packet-mode Book review is not enough for autonomous whole-queue runs

For autonomous end-to-end Cursor runs, `bookReview.mode: "packet"` creates a review packet but leaves `decision: REQUESTED`, `safeToContinue: false`, and `nextChildBlocked: true`. That is correct for manual handoff, but it stalls whole-queue execution.

Use `hermes-api` once `BOOK_API_BASE` and `API_SERVER_KEY` are configured, or add a local auto-approval policy for low-risk/in-scope receipts.

### 2. Local auto-approval should be evidence-based, not blanket bypass

A safe local Book-review auto-approval policy can approve when all are true:

- gate receipt status is `PASS`
- proof commands passed
- banned/private scans are zero
- changed files are issue-scoped or project-allowed
- no output/receipt/env/secret files are being committed

Broad code paths such as `app/**`, `lib/**`, `prisma/**`, package/config files may be auto-approved only when they are issue-scoped and proof passed. Out-of-scope broad changes should still require Hermes/API Book review.

### 3. Capture a dirty-tree baseline at `request`

If `run` reads whole-repo `git status`, every later issue inherits preflight/untracked files from earlier issues, causing cascading false blockers. CLI Tester should capture a changed-file baseline during:

```text
request <ISSUE_ID> <branch>
```

Then `run` should report files changed after that baseline. This makes the four-step gate genuinely per-issue and prevents dirty-tree accumulation from stalling the queue.

### 4. Hermes/API review failures should be resumable

If Hermes API is unavailable or misconfigured, `book-review` should write a structured blocked receipt with `apiError` and `requiredFixes`, not crash without a receipt. If local auto-approval already passed, it should not call Hermes at all.

### 5. Cursor driver cron should use the execution-pack template, not an ad-hoc status ping

A whole-queue pack should include a concrete `cursor-driver-cron-prompt.md` derived from the class-level template. The cron should:

- run on Citadel `opus48`
- attach `macos-computer-use`, `runner`, and `linear`
- inspect Cursor job activity via background computer use
- read repo state, run-state, and latest CLI Tester/Book-review receipts
- use lock and pause sentinels
- paste only concise `Book driver note:` nudges after strict paste gates
- report to origin only on state transitions, actions, blockers, or sparse heartbeats

Recommended project state paths:

```text
<crew-home>/Output/Book/<project-slug>-cursor-driver/state.json
<crew-home>/Output/Book/<project-slug>-cursor-driver/state.json.lock
<crew-home>/Output/Book/<project-slug>-cursor-driver/state.json.pause
<crew-home>/Output/Book/<project-slug>-cursor-driver/screenshots/
```

### 6. A driver that only observes is a failed driver when the mission is "get it going"

Henry corrected a Mycelium driver run where the cron saw `no-active-cursor-mycelium-session` and did nothing because the paste gates required an existing matching session. That is too conservative for a job-activity/startup watchdog.

For this class of cron, distinguish two modes:

- **Supervise existing session**: if a matching Cursor session exists, inspect/nudge it through blockers.
- **Ensure session exists**: if no active matching session exists and the project has a ready execution pack, create a new Cursor agent/job from the pack prompt, select the correct repository/branch/workspace, submit the starter prompt, then verify the UI moved into an active/running/thinking state or produced first receipts.

Do not report "no active session" as success when the user's intent is to keep work moving. Treat it as an actionable condition unless a pause sentinel exists or the plan says observe-only.

Minimum restart behavior:

1. Confirm repo/workspace selector points at the intended project, not another active project.
2. Select the intended branch/worktree if the UI exposes it.
3. Paste a concise starter prompt or the pack's goal prompt.
4. Submit it.
5. Re-capture Cursor and verify one of: title/session created, running/thinking indicator, terminal command activity, or new receipt/state update.
6. Update driver state with `actionTaken: started-cursor-session` or a concrete blocker.

### 7. "Ran ok" from Hermes cron is not enough evidence

A Hermes cron can report `last_status: ok` even when it merely inspected and took no useful project action. For Cursor drivers, always inspect the driver state fields, especially:

- `observedStatus`
- `sessionMatch`
- `actionTaken`
- `blocker`
- `nextRecommendedAction`
- latest screenshot path / UI observation

When Henry asks "did it run?", answer both levels:

- scheduler level: did the cron process execute and when?
- mission level: did it actually start/nudge/unblock Cursor?

### 8. Answer “where did this change happen?” precisely

When a pack uses shared tooling, distinguish:

- shared CLI behavior: `<HOME>/Code/cli-tester/bin/project-test-gate`
- tests for shared CLI behavior: `<HOME>/Code/cli-tester/test/project-test-gate.test.js`
- project policy/config: `<repo>/.project-gate.json`
- execution-pack mirror/template: `<pack>/.project-gate.example.json`

This prevents confusion about whether the change lives in Cursor, the repo, the shared CLI, or the pack.
