# OpenCore full grill-to-linear completion — 2026-06-22

Session-specific reference for the `loom` workflow after Oracle was fixed and the run was completed end-to-end.

## What happened

- Required route: Oracle GPT-5.5 Pro browser mode.
- Prior merge attempt had returned a 1-token `I`; Henry later said “Try again / I’ve fixed oracle.”
- First retry failed because the expected remote Chrome CDP port was down: `connect ECONNREFUSED 127.0.0.1:53992`.
- Recovery was to relaunch Chrome with the same profile and remote debugging port, verify `/json/version`, then rerun Oracle browser mode.
- Second retry succeeded and wrote a full canonical PRD:
  - `opencore-v1-canonical-prd-oracle-retry.md`
  - 135,529 bytes / 1,967 lines
  - route evidence: `7m29s · gpt-5.5-pro[browser] · ↑27.22k ↓33.8k ↻0 Δ61.02k`

## Phase 3/4 load shape

- Generated 11 parent epics and 40 child implementation issues (51 total).
- Loaded into Linear project `OpenCore`.
- Verified:
  - 11 parent issues
  - 40 child issues
  - 40/40 children had parents
  - 29 sibling `blocks` relations attempted
  - 0 relation errors

## Linear loader transient 502 recovery

During child creation, Linear returned HTTP 502 after partial writes. The correct recovery pattern was:

1. Do not delete or restart the project.
2. Re-fetch the target project issues by project ID.
3. Count already-created source-key issues (`OC-P*`, `OC-###`).
4. Rerun the title-keyed idempotent loader with retries/backoff.
5. Update existing issues and create only missing issues.
6. Re-run parent linking and `blocks` relation creation; treat duplicate/already-exists relation errors as idempotent success.
7. Write a final receipt with expected vs verified counts.

This is the class-level lesson: **HTTP 502 mid-load is a resume condition, not a rollback condition**, provided the loader is title/source-key idempotent and verifies live Linear after rerun.

## Seed-thin repo context pack

The target repo was only a seed repo (`README.md` + evidence docs, no `package.json`). The context pack still worked by making the bootstrap state explicit:

- `AGENTS.md` says target commands become real after the package skeleton issue.
- The first issues (`OC-001`–`OC-003`) establish repo baseline, rules, and TypeScript package skeleton.
- `scripts/proof/opencore-v1-smoke.sh` records a bootstrap receipt and explicitly notes `package.json` is not present yet; after `OC-003`, builders must update it to run package-native checks.
- This is better than inventing package commands or blocking the entire Linear load because the repo is intentionally seed-thin.

## Push/CI closeout

The final repo push was rejected because remote `main` had advanced with a CI workflow commit. Correct closeout:

```bash
git fetch origin --prune
git rev-list --left-right --count origin/main...HEAD
git pull --no-rebase origin main
git push -u origin main
git rev-list --left-right --count origin/main...HEAD
git ls-remote origin refs/heads/main
gh run list --repo h-mascot/opencore --branch main --limit 3 --json databaseId,status,conclusion,headSha,url
```

The merge commit was pushed and CI success was verified on the pushed SHA.

## Final receipts pattern

The run ended with:

- `FINAL-GRILL-TO-LINEAR-RECEIPT.json` — machine receipt with PRD SHA, Linear verification, repo commit, remote head, CI URL.
- `FINAL-REPORT.md` — human summary.
- `phase4-linear-load/linear-load-receipt.json` — full Linear map.
- `phase4-linear-load/live-map.md` — human issue map.
- repo context-pack receipt under `docs/specs/opencore-v1-context-pack-receipt.json`.

Future runs should copy this receipt shape when finishing all phases.
