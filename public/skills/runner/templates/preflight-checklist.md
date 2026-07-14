# Cursor Execution Preflight — {{PROJECT_NAME}}

Do not run Cursor until every required check is PASS.

## Source and branch

- [ ] Repo root exists: `{{REPO_ROOT}}`
- [ ] Cursor will run from the intended branch/worktree.
- [ ] Required `AGENTS.md` exists on that branch.
- [ ] Required `.cursor/rules/*` exist on that branch, if applicable.
- [ ] Project context docs referenced by Linear exist and are Cursor-readable.

## Linear truth

- [ ] Live Linear was fetched after the latest cleanup write.
- [ ] Approved queue is explicit and non-empty.
- [ ] Every approved issue is a child/build issue or has explicit parent approval.
- [ ] Every approved issue title/body/scope matches `linear_id_to_source_id.json`.
- [ ] No approved issue has banned terms.
- [ ] No approved issue has stale source framing.
- [ ] No approved issue has impossible proof commands.
- [ ] Dependencies are real and do not contradict the body.

## Mapping

- [ ] `linear_id_to_source_id.json` exists.
- [ ] No approved issue has `needs_review` or `blocked_by_source_cleanup` status.
- [ ] Mapping basis is title/scope/source ID, not ordinal position.

## Gate

- [ ] `.project-gate.json` exists or `.project-gate.example.json` is reviewed and ready to copy.
- [ ] CLI Tester path exists: `<HOME>/Code/cli-tester/bin/project-test-gate`.
- [ ] Gate config includes `bookReview.required` when Book is the reviewer of record.
- [ ] `project-test-gate run`, `book-review`, and `verify` are executable for the config, or the missing API/env blocker is explicit.
- [ ] Gate receipt directory is ignored or intentionally handled.
- [ ] Proof commands exist in package scripts / Makefile / CI / docs.
- [ ] UI proof policy is explicit: Cloud video preferred when video is required; local Cursor must produce screenshot/DOM proof at minimum.
- [ ] Receipt uniqueness rule is explicit: no reused CLI/review/screenshot/video proof across child issues.

## Runtime state

- [ ] State path is documented: `.cursor/{{PROJECT_SLUG}}-autonomous-run-state.json`.
- [ ] State path is listed in `.gitignore`.
- [ ] State file has approved queue and starts `IDLE` before Cursor run.

## Plan and prompts

- [ ] `plan.md` generated.
- [ ] `cursor-single-issue-prompt.md` generated.
- [ ] `cursor-bounded-queue-prompt.md` generated.
- [ ] Prompts say approved queue only.
- [ ] Prompts ban self-discovery.
- [ ] Prompts require per-issue reread after compaction/restart.
- [ ] Prompts require CLI Tester `run`, `book-review` when required, and `verify`.
- [ ] Prompts fail-stop on stale/mismapped/failed gates.
- [ ] Prompts include the end-to-end goal-mode prompt when whole-queue execution is expected.
- [ ] Prompts include UI proof / video policy.
- [ ] Prompts include receipt uniqueness rule.
- [ ] Cron/check-in section is opt-in only and not registered.

## Entity FS

- [ ] Plan is written under a mapped Entity FS source root.
- [ ] Entity FS link generated.
- [ ] Link resolves, or blocker is explicit.

## Final answer

- [ ] If any item failed: say “do not run Cursor yet” and name the blocker.
- [ ] If all pass: say Cursor can run and provide the exact prompt/link/state paths.
