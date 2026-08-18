# Native goal context-exhaustion recovery

Use when an interactive Hermes `/goal` owner is alive but cannot make another model call because context compression repeatedly fails or provider rejects the request size.

## Diagnostic signature

Treat this as a context/control-plane failure when evidence shows:

- the runner's configured context budget exceeds the route's actual accepted request size;
- pre-API compression repeats without reaching a valid request;
- no product/engineering blocker explains the stop;
- dirty repository work remains useful.

Do not classify the code lane as failed merely because the owner session exhausted context.

## Recovery recipe

1. Capture the old pane tail and current process/session identity.
2. Save a binary-safe `git diff --binary` checkpoint outside the repo worktree. Preserve all dirty files; never reset, clean, or discard.
3. Write a compact phase handoff containing:
   - repo, branch, HEAD, issue/source ID;
   - exact dirty-file ownership and what phase produced it;
   - latest verified tests and remaining gate;
   - next bounded action;
   - forbidden broad rereads and duplicate-writer rule.
4. Stop only the exhausted owner and prove its process/session ended.
5. Set the profile context ceiling below the route's verified request limit. Read it back before relaunch. Do not copy a catalog-advertised maximum blindly.
6. Relaunch from the same profile/workspace/worktree. For an issue-scoped coding phase, prefer a lean toolset such as `-t terminal,file`; `-s runner-low-burn-v2` still preloads this skill while disabling the large discoverable skill catalog. Add toolsets only when the phase needs them.
7. Submit `/title`, `/reasoning medium`, and `/goal` separately. The goal should read the compact phase packet first, not the full queue/graph/history.
8. Accept launch only after live PID/tmux proof and first substantive issue-scoped command. Observe the first compression cycle; it must complete below the provider rejection boundary.
9. Patch the existing watcher to discover the newest versioned session (for example `goal-name-vN`) or follow a stable alias. Never leave it hardcoded to the retired tmux name. Force-run once and verify `tmux=true`/active readback.

## Context hygiene

- Full durable contracts are authority artifacts, not mandatory per-turn payloads. Distill the current phase into a small handoff and link back to the contract.
- Restrict tool schemas aggressively for terminal/file-only coding. Startup prompt size is part of token burn.
- Separate preserved dirty work by actual issue/source ownership. If the dirty checkpoint belongs to the previous issue's repair, finish that checkpoint before telling the new owner to implement the next issue.
- When a fresh owner begins broad discovery or rereads full queue/graph snapshots, steer once toward current diff + exact gate. If the initial prompt remains bloated, restart at the clean checkpoint with a smaller phase packet instead of allowing repeated compression churn.

## Verification receipt

Record:

- old owner stopped;
- backup patch path/hash or size;
- profile context ceiling readback;
- new owner PID/session/CWD/model/toolsets;
- first substantive command;
- watcher active readback;
- dirty-file count and blocker state.
