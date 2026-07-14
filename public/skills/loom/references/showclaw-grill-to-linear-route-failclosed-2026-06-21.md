# ShowClaw post-grill route correction and fail-closed receipt — 2026-06-21

## What happened

After the ShowClaw Grill-with-Docs reached D21.9, the agent drifted into treating the next step as a plain SuperSpec summary/confirmation. Henry corrected the sequence:

> no this is what you run if grill me with docs is done — run grill-to-linear-execution-graph skill

The correct class workflow was not "summarize and ask whether to run SuperSpec". It was the full `grill-to-linear-execution-graph` pipeline:

1. Phase 0 source packet.
2. Phase 1 Oracle GPT-5.5 Pro browser SuperSpec.
3. PRD + critique + canonical merge.
4. Parent + child Linear execution graph.
5. Repo-native Cursor/local-agent context pack.
6. Linear verification receipts.

## Durable lesson

When Henry says a Grill-with-Docs session is done, or asks to move from grill to Linear/Cursor/issues/execution graph, load `grill-to-linear-execution-graph` immediately. Do not stop at a preview lane graph or ask a broad "how do you want to run SuperSpec?" question.

A reasonable question is only allowed when a concrete required route value is missing (for example an unavailable signed-in Oracle browser remote-debugging endpoint). Even then, first produce/check the Phase 0 source packet and run the fail-closed gate if a candidate endpoint exists.

## ShowClaw run receipt pattern

For ShowClaw, the Phase 0 source packet was written before Phase 1:

- `showclaw-grill-linear-source-packet.md`
- Includes: phase summary, SuperSpec input, workflow/impact receipts, decisions D1-D21.9, receipt clearance review, fixture evidence audit.

Phase 1 command shape:

```bash
SUPER_SPEC_OUTPUT_ROOT="<showclaw>/superspec-output" \
SUPER_SPEC_ORACLE_WALL_TIMEOUT=600s \
bash "<HOME>/Enterprise/Crew Home/Skills/super-spec/scripts/run-super-spec.sh" \
  --title "ShowClaw v0 execution pack" \
  --input "<showclaw>/showclaw-grill-linear-source-packet.md" \
  --model gpt-5.5-pro \
  --remote-chrome 127.0.0.1:<port> \
  --browser-tab current \
  --browser-attachments never
```

If Oracle browser automation fails, stop. Do not generate Linear issues from the preview lanes.

## Fail-closed wording to preserve

When the required Oracle route fails, report it as a route blocker, not a product/spec blocker:

- Phase 0 source packet: done.
- Phase 1 SuperSpec: blocked/fail-closed.
- Phase 2 PRD/critique/canonical merge: not started.
- Linear writes: none.

Keep route JSON, oracle log, preflight log, source packet hash, and status receipt. This is enough for a later agent to resume without re-running the grill.

## Pitfall

Do not let sibling `ACTIVE_PLAN.md` drift hide the user's latest instruction. Re-anchor `ACTIVE_PLAN.md` to the project Henry named in the current message before writing status receipts.
