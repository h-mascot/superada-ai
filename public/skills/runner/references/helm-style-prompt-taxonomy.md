# Helm-style Cursor prompt taxonomy

Every generated `runner` ships **three** Cursor prompt files, each with a distinct scope. They are **not interchangeable** and the skill must always emit all three.

## The three prompt files

| File | Scope | Cursor invocation | When to paste |
|------|-------|-------------------|---------------|
| `cursor-single-issue-prompt.md` | One assigned child issue, then stop. | Plain Cursor chat (no slash command). | Assigning Cursor to one specific Linear issue. |
| `cursor-bounded-queue-prompt.md` | Pre-approved fixed queue, in order. | Plain Cursor chat (no slash command). | Whole-queue run with a pre-mapped approved list (e.g. Entity Phase 2). |
| `cursor-goal-prompt.md` | Autonomous across the remaining dependency-safe child issues. | `/goal` at the top. | Henry wants the agent to discover and execute remaining work end-to-end (e.g. Helm v1). |

All three must:

- declare the four CLI Tester steps in order (`request`, `run`, `book-review`, `verify`)
- use the canonical no-merge sentence verbatim (see below)
- forbid self-discovery unless the goal-mode prompt explicitly opts into it
- require per-issue reread of plan, repo rules, gate config, run-state, live Linear body

## Canonical no-merge sentence

The exact wording — do not paraphrase, shorten, or weaken:

> Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.

This sentence is the hard boundary between "implementation done" and "code in `main`." Helm-style execution treats any merge as a separate human decision that requires either Book/SuperAda verification or explicit Henry authorization. Never silently weaken it.

## When to ship each prompt

- **All three** — always. The skill's hard rule is that `cursor-goal-prompt.md` is required, not optional.
- **Single-issue** is the safe fallback when Henry wants a tiny, scoped change without committing to the whole queue.
- **Bounded-queue** is right when the project has a fixed approved queue already preflighted (e.g. Entity Phase 2: `THE-21`..`THE-95`).
- **Goal-mode** is right when the project has many remaining issues and Henry is willing to let Cursor discover the next dependency-safe child.

## Helm v1 was the canonical worked example

Helm v1's `cursor-goal-prompt.md` (in `book/output/helm/cursor-end-to-end-plan/`) is the reference shape. Every new project should mirror:

- `/goal` invocation at the top
- Repository, plan, raw-fallback, and Linear project block
- Authority order ending with the plan file as operating guidance
- "Before coding" reread list aligned with the bounded-queue prompt
- Project-specific known policy block (e.g. Helm's D8–D13/D13R; Entity's Helm boundary)
- Hard zero-policy block naming any project-banned external coordination/plugin/service terminology
- All four CLI Tester steps (`request`, `run`, `book-review`, `verify`)
- UI proof / video evidence policy
- Receipts/state/Book-review sections
- Canonical no-merge sentence

## Differences that are NOT drift

The three prompts are deliberately allowed to differ in:

- **Queue source**: goal-mode often enumerates from live Linear; bounded-queue uses an inlined list; single-issue takes the assigned ID.
- **Hard zero-policy block content**: project-specific banned terms vary (Helm has `Action Gate`/`Ada observer`/`external observer`; Entity does not — different contamination history).
- **Discovery posture**: goal-mode may allow live Linear enumeration; bounded-queue and single-issue must not.

These differences are the **why** of having three prompt files. Any other divergence (missing 4-step gate, paraphrased no-merge sentence, missing `/goal`) is drift and the validator catches it.

## Why all three must always ship

- A pack with only a single-issue prompt forces Henry to copy/paste the same scaffold for every issue.
- A pack with only a bounded-queue prompt blocks whole-queue autonomous runs (no `/goal`).
- A pack with only a goal-mode prompt loses the audit trail of an explicit approved queue.

The skill now treats all three as required artifacts, enforced by `validate_execution_pack.py`.

## Quick generation order

1. Audit the source of truth (PRD, spec, Linear bodies, repo rules).
2. Build the mapping table.
3. Choose the approved queue.
4. Generate `cursor-single-issue-prompt.md` first — it is the most general shape.
5. Generate `cursor-bounded-queue-prompt.md` by inlining the approved queue into the single-issue skeleton.
6. Generate `cursor-goal-prompt.md` last, as the Helm-style whole-program superset.
7. Run the validator. All four-step checks, the canonical no-merge sentence, and the goal-mode-specific assertions must pass.