# Native Codex GUI Control

Use this reference when creating, recovering, or steering Codex desktop tasks on a remote macOS host.

## Evidence order

1. Prove the process and actual visible window from live WindowServer/AX state.
2. Recover the existing window non-destructively before restarting the app.
3. Take a fresh AX snapshot after every navigation or render-changing action.
4. Address elements using the fresh snapshot's element index/token.
5. Verify every send by rendered message node plus working/acknowledgement state.

A process PID, successful tool return, empty composer, task title, or blue activity dot is not sufficient alone.

## Non-destructive window recovery

When the Codex process exists but AX exposes no usable window:

1. Inspect the process and all application/window records.
2. Bring the existing app/window into its normal visible workspace without terminating it.
3. Re-snapshot the exact PID/window.
4. Reopen the existing manager task from the sidebar or scheduled card.
5. Verify its history and current task ID before sending anything.
6. Restart only when the process is unhealthy and window recovery is exhausted; persist task/state pointers first.

## Composer delivery sequence

1. Capture a fresh AX tree.
2. Confirm task title and pane.
3. Find `AXTextArea` labelled `Ask for follow-up changes` or the live equivalent.
4. Set the entire value directly when supported.
5. Read back the AX value; require a distinctive phrase and plausible length.
6. Locate the send control by spatial relationship to the composer and `Dictate`; it may have no useful label.
7. Click send once.
8. Refresh.
9. Require the prompt to appear as a rendered user-message node.
10. Require `Working`, a `Stop` button, or a substantive acknowledgement.

If direct value setting reports success but readback is empty, take another fresh snapshot, click the textarea, type through trusted keyboard input, and verify again before sending.

## Stale token recovery

AX references are snapshot-scoped. Navigation, scrolling, window recovery, task changes, scheduled cards, and long streamed responses can invalidate them.

Never retry an old token repeatedly. Refresh -> resolve the current element -> act -> refresh -> verify.

## Coordinate fallback

Prefer element-index actions. If raw coordinates are unavoidable on macOS:

- keep y >= 100 to avoid menu/title-bar interception;
- verify the intended app/window before the click;
- refresh immediately after the action;
- never infer success from the click call alone.

## Top-level task proof

A valid lane is a visible sibling task in the Codex sidebar/task list. Record:

- task ID and exact title;
- manager/worker/reviewer role;
- issue and worktree;
- creation timestamp and ownership generation;
- visible state and latest rendered message;
- corresponding manifest/receipt/HEAD movement.

Nested Subagents are not top-level task lanes.

## Health triangulation

Classify a task healthy only when at least these agree:

- UI state: working or recent substantive response;
- task identity: correct issue/role/title;
- repository state: expected worktree/HEAD/status;
- artifact state: recent scoped receipt, manifest, commit, or test evidence;
- semantic state: lifecycle advanced rather than merely being polled.

Across two unchanged scheduled ticks, inspect and steer the same task. Replace only after checkpointing useful state, revoking ownership, proving the task dead, and ensuring one replacement.
