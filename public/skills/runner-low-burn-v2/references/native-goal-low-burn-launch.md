# Native Goal Low-Burn Launch

Use this recipe when moving a serial or stalled project runner into a persistent Hermes `/goal` owner while keeping Spark context and token burn bounded.

## 1. Freeze ownership before launch

- Inventory cron supervisors, tmux/native goal sessions, GUI managers, and repo-scoped worker processes.
- Pause the previous mutating supervisor before accepting the new owner.
- Preserve one integration owner. Watchers must be read-only.
- Check the repository for dirty work before killing or replacing anything.

## 2. Build the compact contract

Create a goal workspace with:

- `GOAL.md` — scope, authority boundaries, acceptance gates, low-burn limits, fallback condition, and terminal protocol.
- `STATUS.md` — compact current state and next semantic action.
- a reduced machine ledger containing counts, IDs, hashes, blockers, and safe-next issue; keep large raw state outside model context.

The contract should state explicitly:

- Spark/medium primary route;
- Luna/medium only after an exact Spark limit/unavailable receipt;
- two generations per issue maximum;
- deterministic proof before model review;
- Terra/high only for P0/P1;
- engineering/test failures are autonomous repair, not approval gates;
- real credentials, irreversible external actions, and substantive product decisions remain human gates.

## 3. Isolate concurrent goals by profile

For each goal, create or reuse a dedicated Hermes profile. Verify current CLI help before using profile/config commands, then:

1. Set the profile's `terminal.cwd` to the goal workspace.
2. Read it back from that profile.
3. Launch the profile under tmux/systemd/launchd.

Do not rely only on `cd` or `TERMINAL_CWD=...` inside a tmux command string. Some interactive launch chains resolve the profile/default working directory before that shell environment affects Hermes. The acceptance check—not the launcher text—decides whether isolation worked.

## 4. Keep startup prompt overhead small

- Preload `runner-low-burn-v2`.
- Native `/goal` provides continuation.
- When `GOAL.md` carries the required durable-control invariants, avoid preloading a large umbrella supervision skill on every worker turn. Link its relevant reference from the contract instead.
- Send `/title`, `/reasoning medium`, and `/goal Read <workspace>/GOAL.md...` as separate inputs.

## 5. Launch acceptance receipt

Do not report healthy from a tmux name or PID alone. Verify:

- intended profile and model in the banner;
- profile `terminal.cwd` readback equals the goal workspace;
- `Goal set` acknowledgement contains the contract path and bounded objective;
- first tool activity reads the intended compact files;
- substantive issue-scoped work begins;
- no second mutating writer targets the repository.

Capture initial context size. If skill injection dominates the first turn, move stable gates into `GOAL.md` and relaunch with the smallest procedural skill set.

## 6. Correct false blockers without resetting the project

A runner may incorrectly ask whether to fix deterministic test or baseline failures. Strengthen the contract rather than merely steering with prose:

> Engineering blockers are not user-approval gates. Diagnose and repair test, fixture, proof-gate, and baseline regressions autonomously with TDD and the smallest safe diff. Only credential, irreversible external, authority, or substantive product decisions may pause the goal.

Then start a fresh low-context native goal phase from `STATUS.md` and the reduced ledger. Do not make the next session reread the raw history.

If a command raises a sudo/password prompt, submit a blank skip/cancel and steer toward a non-privileged diagnostic. Never type a password or secret into the runner.

## 7. Read-only progress watcher

Use a deterministic script-only watcher where possible:

- bounded cadence and repeat count;
- exact tmux/process identity;
- status grammar and repository HEAD/dirty state;
- semantic progress counts, not elapsed time;
- at most 12 output lines;
- terminal state emitted once, then silence;
- no mutation or automatic restart unless the contract explicitly grants guardian authority.

Force-run the watcher once and read back its stored output before claiming monitoring is installed.

## 8. Terminal handling

- `BLOCKED_EXTERNAL`: write a compact receipt, prove the repo clean, and pause the native goal instead of polling credentials.
- `ACTIVE`: keep the one owner running; watcher remains read-only.
- `STALLED`: require evidence across consecutive ticks, then inspect/steer or checkpoint and fresh-relaunch; do not duplicate the writer.
- `ACHIEVED`: independently verify Git, tests, tracker, and remote state before reporting completion.
