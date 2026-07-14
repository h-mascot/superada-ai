# Authorized merge → test → screenshot handoff (2026-06-24)

Session class: Henry explicitly authorizes merging a completed autonomous Cursor queue, then asks for post-merge testing and screenshot proof.

## Trigger

Use this when all are true:

- The autonomous queue/run-state is terminal or the implementation branch is otherwise complete.
- The project rule says not to merge without Book/SuperAda/Henry authorization.
- Henry gives explicit merge authorization, e.g. "merge then test and send me a screenshot".
- The target is browser-facing or user-visible.

## Required sequence

Do not stop at "queue complete" or "branch pushed". Execute the full delivery path:

1. Inspect repo and remote state:
   - current branch and HEAD;
   - origin/main HEAD;
   - clean working tree;
   - whether a PR already exists.
2. Merge the completed branch into `main` using the repo's normal merge policy. For a local authorized finalization, a non-ff merge commit is acceptable when it preserves the completed issue-branch history.
3. Push `main`.
4. Run post-merge proof from `main`, not from the feature branch:
   - dependency install/update if needed;
   - full validation command (`npm run validate` or project equivalent);
   - build command;
   - project smoke command.
5. Start/restart the served app from the merged `main` checkout.
6. Verify the served URL directly:
   - route status 200 for home and key changed route;
   - one or more domain marker strings in the served HTML or DOM;
   - live listener PID and working directory;
   - browser title/H1/marker text via snapshot or DOM probe;
   - console/page errors checked when browser tooling exposes them.
7. Capture a real browser screenshot after loading the key route.
8. Final reply must include:
   - merge commit SHA;
   - pushed branch/remote status;
   - exact proof commands and pass/fail outcome;
   - live URL and listener PID;
   - screenshot attached via `MEDIA:/absolute/path.png`, not only a local path.

## Pitfalls

- Do not answer "yes, fully done" if the queue is complete but merge/PR is still pending.
- Do not test only the feature branch after merging; check out or remain on `main` and prove `origin/main` now contains the merge commit.
- Do not treat a successful build as UI proof. Browser-load the user-facing route and attach a screenshot.
- Do not hide image evidence behind a filesystem path. In Discord/Telegram contexts, attach with bare `MEDIA:/absolute/path.png`.
- If the app server already exists on the target port, restart it so the screenshot proves the merged checkout, not a stale process.

## ShowClaw worked example

- Completed branch: `showclaw/THE-346`.
- Authorized action: Henry said to merge, test, and send a screenshot.
- Merge target: `main`.
- Merge commit: `c28d89b`.
- Proof after merge:
  - `npm install`;
  - `npm run validate`;
  - `npm run build`;
  - `bash scripts/proof/showclaw-v0-smoke.sh`.
- Served route: `http://127.0.0.1:4173/launches/henry-ships-entity-with-agents`.
- Browser markers: title `ShowClaw — show what people do with agents`, H1 `Henry ships Entity with agents in the loop`, badges `Receipts attached` and `Evidence-backed workflow`.
