# Linear child closeout → next worktree relaunch (2026-06-24)

## Trigger

Use this when a tracked Cursor CLI worker exits normally after completing one Linear child issue in an approved autonomous queue, especially when each issue runs in its own sibling worktree.

## Lesson

A clean worker exit is not the end of the convoy. Treat it as a transition event: verify the completed child from receipts and live Linear, then prepare and launch the next approved child in a fresh worktree based on the completed child commit.

## Closeout checklist

1. Poll/read the completed background process output.
2. Verify no duplicate Cursor worker is still live for the repo/worktree.
3. Read the completed child receipts:
   - `output/proof/<ISSUE>/receipt.json`
   - `output/hoshi/test-gate/<ISSUE>.json`
   - `output/hoshi/book-review/<ISSUE>.json`
4. Verify live Linear state and proof comment for the completed child.
5. Verify git state:
   - completed branch HEAD is the receipt/Linear commit;
   - worktree is clean except intentional ignored/generated receipt dirs;
   - no runtime state/output/secrets are staged.
6. Update project run-state and driver-state with the completed child, commit, Linear URL, and safe-to-continue status.

## Next-child relaunch pattern

1. Determine the next approved issue from the fixed queue and confirm it is unblocked or explicitly waived in live Linear comments.
2. Create a fresh sibling worktree from the just-completed child commit:

```bash
BASE=$(git -C <completed-worktree> rev-parse HEAD)
git -C <main-repo> worktree add -b <next-branch> <next-worktree> "$BASE"
```

If the branch/worktree already exists, inspect status and HEAD before reuse. Never assume it is on the correct baseline.

3. Patch run-state and driver-state before launch:
   - `current.issueId` / `currentIssue` = next issue;
   - `repoRoot` = next worktree;
   - `branch` = next branch;
   - `headCommit` = baseline short SHA;
   - clear prior `workerPid`, `workerSessionId`, blocker fields;
   - record the live waiver/proof comment URL.
4. Write a short rider outside the repo that overrides stale prompt context:
   - “Current issue is `<NEXT>`, not `<PREVIOUS>`.”
   - “Use worktree `<next-worktree>`.”
   - baseline commit and blocker/waiver state;
   - exact scoped proof command with `HOSHI_PROVE_ISSUE=<NEXT>` or project equivalent;
   - “stop after this issue; do not start the next child.”
5. Concatenate the active goal prompt + rider to a temp prompt and launch via tracked Hermes background process:

```bash
cursor agent --print --workspace <next-worktree> --model gpt-5.5-extra-high-fast --trust --force "$(cat <prompt>)"
```

Use `background=true, notify_on_complete=true`; do not use `nohup` or shell `&`.

6. Immediately poll once, then write the new PID/session into driver-state.

## Pitfalls

- **Stale driver state:** a completed worker may leave driver-state saying `running`. Always reconcile process table + receipts + live Linear before relaunching.
- **Wrong-worktree writes:** the generic goal prompt may still name the original repo. The rider must explicitly pin the current issue and worktree.
- **Dirty parent baseline:** if the completed child did not commit its source changes, stop and materialize a scoped commit first. Do not branch the next child from dirty/untracked files.
- **Waiver cascade drift:** dependency waivers are per direct blocker. Confirm the next child has its own live waiver or completed blocker before launch.

## Report shape

Keep Discord terse:

- completed issue + commit + Linear state/comment;
- next issue + worktree + worker PID/session;
- queue count.

Detailed receipts belong in run-state/driver-state and output artifacts, not the chat heartbeat.
