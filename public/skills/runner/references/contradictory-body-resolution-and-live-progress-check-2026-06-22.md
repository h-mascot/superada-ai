# Contradictory Linear bodies and live progress checks (2026-06-22)

Two recurring Cursor-operator workflows that came up on the Helm v1 + Entity Phase 2 runs this week. Both are class-level lessons, not project-specific.

## 1. Contradictory body — resolve by title + canonical source, not by body content

### Trigger

Cursor reports it stopped on a real fail-stop blocker. The blocker's structure is:

```text
<ISSUE>: live Linear body is contradictory.
Title/later body says: <X>.
Managed build scope/acceptance says: <Y, unrelated to X>.
I did not branch or implement it.
```

This is a known drift class. Local drift audits usually already call it out:

- `docs/.../<project>-drift-audit/opus48-audit.md` rows marked **EXTRA / Wrong body**
- `linear_id_to_source_id.json` with `status: extra_child_keep` or `needs_review`

The temptation is to either:

- "fix" the body in place without asking, or
- invent a third interpretation.

Both are wrong. Henry's standing rule: when the body is contaminated, **the title and the canonical PRD/source are authority**. The body is the defect, not the input.

### Decision rules (apply in this order)

1. **Title is authority.** Read the live Linear title verbatim. If the title says "Create v1 migration cutline doc" and the body talks about runtime/provider TypeScript schema, the body is wrong. Do not implement the body's claim.
2. **Canonical PRD/source is authority.** Find the matching section in the canonical PRD (e.g. `phase2-prd/prd-canonical.md` for Entity; `prd-canonical.md` for Helm). If the PRD has a section for this issue ID and it matches the title, that section is the spec.
3. **Drift audit confirms.** `opus48-audit.md` (or equivalent) should already call out the issue as EXTRA / Wrong body. Cross-check.
4. **Surface a resolution plan, do not auto-apply.** Three legitimate options:
   - (a) **Resolve by corrected title**: implement only what the title + canonical source say. Mark the body's wrong-body content as contamination, do not implement it. Add a Linear comment naming the source of authority and the drift.
   - (b) **Rewrite the body**: full body rewrite per `references/hoshi-full-linear-body-rewrite-2026-06-21.md`. Only when Henry has explicitly asked to fix/rewrite now.
   - (c) **Stop and report**: when both (a) and (b) are wrong (e.g. the title itself is bad, or the canonical PRD has no matching section), do not branch, do not implement. Post a Linear blocker comment with the exact mismatch and wait.
5. **Never merge contaminated work into the issue diff.** If the issue diff is mostly drift remediation, the diff is the drift fix; it should be reviewable as such.

### Prompt shape for option (a)

A good Cursor follow-on prompt for option (a) looks like:

```text
You are Cursor Agent running on <model>. Continue the <project> implementation queue from the current repo state.

Treat <ISSUE> by its title and corrected source intent:
- <ISSUE> — <corrected title>

Do NOT implement <wrong-body content>.
That content is contaminated body drift.

For <ISSUE>, implement only <corrected title>:
- <spec from canonical PRD>
- <required file path>
- <required sections, in order>
- <proof commands from .project-gate.json>

After <ISSUE>:
1. Comment on Linear with branch, file changed, commands, exit codes, gate/book-review receipt paths, and a note that the <wrong-body content> was treated as body drift and not implemented.
2. Update output/<project>/cursor-autonomous-run/receipt.md and .cursor/<project>-autonomous-run-state.json.
```

Include the same canonical no-merge sentence, the four CLI Tester steps, and the project-specific banned-terms block. If the next issue in the queue is also known to be contaminated, force another stop for it.

### Worked example (Helm v1, 2026-06-22)

- THE-110 — Title: `Create v1 migration cutline doc`. Body: `runtime/provider TypeScript schema types and fixtures`.
- `opus48-audit.md` row 215 marked the body as **Wrong body**.
- Canonical PRD section: `HLM-P0-C05 — Create v1 migration cutline doc` (no body content there; body was meant to be `v1 migration cutline doc`).
- Resolution chosen: **option (a)** — implement only the cutline doc, treat the schema-types content as body drift, do not branch for the schema work.

### Pitfalls

- Do not implement the body's content just because it's "more interesting" or "the next thing we need anyway." Body drift is a defect, not a feature.
- Do not auto-rewrite the body. That's a separate workflow with separate approval.
- Do not promote a contaminated body to a new issue. New issues need their own Linear writes with full body sections, not a reroute of an EXTRA row.
- Do not skip the drift-audit cross-check. The audit row is the evidence trail; the run-state comment should cite it.

---

## 2. Live progress check — "Check cursor what's the progress of X"

### Trigger

User says something like "check cursor what's the progress of the entity task we started" or "where did Cursor stop on helm".

### Workflow

1. **Identify the active Cursor chat.** Use `computer_use(action='list_apps')` to confirm Cursor is running; capture the Agents panel `app='Cursor'` to read the sidebar + chat list. Look for a "needs-attention" / "in-progress" / "5h" / "17h" badge on the relevant project chat entry. Element indices like `AXButton 'Entity Phase 2 implementation plan 5h'` are the stable handle.
2. **Read the run-state file.** This is the authoritative progress ledger. For a given project:
   - `<HOME>/Code/<repo>/.cursor/run-state/<project>.json` is the canonical cursor-maintained state. Read the `currentIssue`, `completedIssues`, `skippedOrBlockedIssues`, `gateReceipts`, and `nextIssueCandidate` fields.
   - Compare against `git log --oneline -5` on the active branch.
3. **Read the latest gate + book-review receipts.** For each completed issue: `output/<project>/test-gate/<ISSUE>.json` and `output/<project>/book-review/<ISSUE>.json`. Confirm:
   - `status` is `PASS` at the machine-gate level
   - book-review `decision` is `APPROVED` with `safeToContinue=true` if `bookReview.required` is true
   - `nextChildBlocked` is `false`
4. **Read the run log / plan file.** The plan and the `output/<project>/cursor-autonomous-run/receipt.md` (or equivalent) give a human-readable narrative.
5. **If the active chat is "blocked on a real fail-stop,"** the run-state will name the issue and the Linear blocker comment URL. Read that comment via Linear to confirm the user's own framing matches Cursor's.
6. **Never infer progress from chat badges alone.** "5h" / "17h" badges tell you when Cursor last touched the chat, not what it produced. Always cross-check the run-state.

### Common failure modes

- "Book receipt is packet-only `REQUESTED` / `safeToContinue=false`." Means `bookReview.mode` is `packet` and no real Hermes-API approval was attempted. Cursor correctly stopped. The fix is to switch `bookReview.mode` to `hermes-api` and have `BOOK_API_BASE` / `API_SERVER_KEY` configured, OR to have Henry explicitly waive the gate for this issue.
- `nextIssueCandidate: null` with `currentIssue.status: blocked_*`. Cursor hit a real blocker; not a sequencing bug.
- Branch exists, no commits. Cursor created the branch but found a contradiction before implementing. Look for the Linear blocker comment URL in the run-state.

### Pitfalls

- Do not trust the chat badge / "currently running" label. The plan file + run-state are the source of truth.
- Do not run `git status --short --branch` alone — it only shows the working tree, not the queue.
- Do not skip the book-review receipt check when `bookReview.required` is true. Machine PASS is not Book approval.
- Do not assume packet-only mode is wrong. Some projects intentionally use packet mode and have Henry waive the gate per issue. Check the project's `.project-gate.json` before recommending a mode change.

### When the user asks "should I run the cron / activate the cron"

First, check whether a cron already exists. Use `cronjob(action='list')` filtered to the project's name (e.g. "Entity Phase 2 Cursor driver"). If it exists, is `enabled: true`, and `state: scheduled`, it is already active. Use `cronjob(action='run', job_id=...)` to trigger it on-demand. Do not create a second cron.

Only when no cron exists and Henry has explicitly asked for one, create it via `cronjob(action='create', ...)` with:

- `prompt` from the bounded-queue or goal-mode prompt in the plan
- `skills: ['runner', 'linear']` (and any project-specific skill)
- `model: { provider: 'citadel', model: 'opus48' }` for Opus 4.8 routes
- `schedule: 'every 30m'` as a sane default for autonomous queues (15m if Henry wants faster)
- `workdir` set to the repo root
- `deliver: 'origin'` to send output back to the current chat
- `enabled_toolsets: ['terminal', 'file', 'computer_use']`
