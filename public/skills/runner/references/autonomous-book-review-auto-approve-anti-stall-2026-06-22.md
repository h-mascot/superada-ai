# Autonomous Book-review auto-approve anti-stall pattern — 2026-06-22

Use when a Cursor/project execution pack is supposed to run autonomously through a whole approved queue and `project-test-gate book-review` becomes the pacing bottleneck.

## Failure mode

Packet-mode Book review (`decision: REQUESTED`, `safeToContinue: false`) is correct for manual handoff but will stall autonomous Cursor after every issue. A pure Hermes API review can also stall a long queue when:

- the API is slow/unreachable;
- broad code diffs route every issue to LLM review;
- dirty/untracked preflight files make each issue receipt look larger than the actual issue scope;
- `request` is skipped, weakening branch/receipt provenance.

## Fix pattern

Patch the shared CLI Tester rather than adding one-off project scripts:

1. Keep the four-step gate: `request → run → book-review → verify`.
2. Make `request` mandatory before issue changes. At request time, capture a changed-file baseline with file digests.
3. In `run`, compute issue changed files relative to that baseline, while optionally preserving `allChangedFiles` for diagnostics.
4. Add `bookReview.autoApprove` for local fast approval when:
   - gate receipt status is `PASS`;
   - proof commands have no failures;
   - banned/private scans are zero;
   - changed files match issue/project allowed path scope.
5. Allow issue-scoped broad paths (`app/**`, `lib/**`, `prisma/**`, package/config files) to auto-approve when they are explicitly in scope and proofs pass. Broad out-of-scope files still require Hermes/API review.
6. If Hermes API is unavailable, write a resumable `BLOCKED` receipt instead of throwing, unless local auto-approval already passed.
7. Update project `.project-gate.json`, pack `.project-gate.example.json`, `plan.md`, and `cursor-goal-prompt.md` together so Cursor sees the same contract everywhere.

## Verification

Minimum tests to add/run:

- existing packet/API review tests still pass;
- local auto-approve bypasses Hermes for low-risk docs/preflight receipts;
- issue-scoped broad code paths auto-approve when request-baselined and proofs/scans pass;
- dirty files that existed before `request` are excluded from issue `changedFiles` but can appear in diagnostic `allChangedFiles`;
- pack validator still passes;
- at least one already-complete issue regenerates `run`, `book-review`, and `verify` with `nextChildBlocked=false`.

## User expectation

When Henry asks for autonomous execution and says not to ask, treat routine anti-stall improvements as part of the job: rerun review with the requested model/route, apply safe quick fixes, verify with real receipts, and report the updated runnable prompt/plan.
