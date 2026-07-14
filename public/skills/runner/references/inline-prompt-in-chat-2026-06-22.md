---
name: runner
description: Inline-prompt-in-chat rule for the runner skill
type: reference
version: 1.0.0
created: 2026-06-22
author: Book
---

# Inline-prompt-in-chat rule (2026-06-22)

## Trigger

Henry told Book: *"send me the prompt in the chat / update the skill to do that."*

The previous run emitted a plan link and prompt file paths but did not paste the actual Cursor prompt into the chat. The user had to open another file to copy/paste. That is a step the user should not have to take.

## Rule

After any `runner` invocation, the chat reply **must** include the active Cursor prompt inline as a fenced code block. The user must be able to copy/paste it without opening any sibling file or following any link.

## What to paste

| When the user asks for | Paste this prompt inline |
|---|---|
| Whole-queue autonomous run (default for rerun + ready verdict) | `cursor-goal-prompt.md` |
| Single issue assignment | `cursor-single-issue-prompt.md` |
| Fixed approved queue (pre-mapped) | `cursor-bounded-queue-prompt.md` |
| Not yet ready / preflight failed | `cursor-preflight-prompt.md` (the "use this with Book/local agent" prompt at the top of `plan.md`) |
| Default behavior | All three if the user might want any of them, with the goal-mode prompt first |

## What to keep

- Human handoff link and raw machine link (still required as the durable record).
- Artifact directory, approved queue, preflight verdict, Linear-write status, Cursor-ready verdict, blockers.

## What to drop from the chat reply

- Long validator output.
- Per-file line counts and content snippets.
- Backup file lists (`*.pre-rerun-*.bak`).
- The full goal-mode prompt can be long; that is acceptable. Do not summarize it or paraphrase it.

## Formatting

- Use a fenced `text` (not `bash`) code block so Cursor's parser does not try to execute it.
- Precede each prompt with a one-line heading stating the file and scope, e.g.:

```text
# cursor-goal-prompt.md — paste into Cursor as-is
```

- After the prompt, add a one-line copyable "use" hint, e.g. `> Paste the block above into Cursor with /goal mode enabled.`

## Failure mode this prevents

A future run reporting "Cursor-ready: yes" with a `/docs/source/.../plan.md` link and no inline prompt. That reply makes the user click twice and adds friction to the actual run.

## Validation

- If the chat reply does not contain at least one fenced code block whose first line is `/goal` or `# Cursor `, the reply is incomplete.
- The validator script `scripts/validate_execution_pack.py` does not yet check this; the rule is enforced by the agent, not by the validator.
