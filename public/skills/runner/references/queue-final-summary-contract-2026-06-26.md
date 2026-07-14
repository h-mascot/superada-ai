# Queue final summary contract (2026-06-26)

## Trigger

Use at the end of any Cursor/Codex/autonomous Linear-backed queue, including when a recurring supervisor cron detects `queue_drained` and self-pauses.

## Required output

Before saying the queue is done, write a durable markdown receipt:

```text
output/<project>/queue-summary/<YYYYMMDDTHHMMSSZ>.md
```

If the project has a different proof root, use that root but keep the `queue-summary/` subdirectory.

## Required fields

The summary must include:

- Queue/project name and repo path.
- Approved queue range/list.
- Number of Linear items worked on in this queue/run.
- Number completed live on Linear.
- Number still not done live on Linear, with identifiers and current state.
- Number still blocked, with blocker reasons and owner/source if known.
- Number of agents/workers involved, separating human/Book supervision from Cursor/Codex worker processes when possible.
- Total wall-clock hours from first recorded queue/worker start to final stop. Use driver/run-state timestamps; if missing, say `unknown` and name the missing timestamp.
- Linear reconciliation counts: comments posted, comments queued/not posted, states changed, not_done list after re-query.
- Final branch, commit SHA(s), and proof paths.
- Whether cron self-paused, with cron job id/name.

## Source order

1. Live Linear API for current issue states and comments.
2. Project run-state (`.cursor/<project>-autonomous-run-state.json`).
3. Driver state (`Enterprise/Crew Home/Output/Book/<project>-cursor-driver/state.json`).
4. Worker logs/process sessions.
5. Git history and proof artifacts.

Never infer Linear completion from local run-state alone. If live Linear cannot be queried, report that explicitly and do not claim board completion.

## Final chat shape

Send a compact final summary to origin:

```text
Queue closed: <N worked>, <N completed live>, <N blocked/not done>. Agents: <count>; wall time: <hours>h. Summary: <path>. Cron: paused/not paused.
```

Add one short blocker line only if `blocked > 0` or `not_done` is non-empty. No long logs in chat; put receipts in the markdown file.
