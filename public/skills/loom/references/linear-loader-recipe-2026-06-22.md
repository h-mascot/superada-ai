# Linear loader recipe — ShowClaw 2026-06-22

A full working loader skeleton for Phase 3/4 of grill-to-linear, including the patterns proven
in the ShowClaw run. The complete working script lives at
`<HOME>/Code/repo-seeding-20260619/showclaw/scripts/linear/load_showclaw_v0_issues.py`
and is the reference for any future grill-to-linear run.

## What this captures

1. **Dry-run-first by default.** No writes unless both `--apply` and `--i-understand-this-writes-linear` are passed.
2. **Opt-in project creation.** `--create-project-if-missing` is a separate flag. Without it, the loader stops on missing project.
3. **Active-count telemetry, not guessed-cap blocking.** Record active issue count in receipts. For Henry's paid/unlimited Linear workspace, do not block on a guessed issue-count cap; only stop if Linear returns an actual `USAGE_LIMIT_EXCEEDED` API error.
4. **Title-keyed upsert** for parents and children. `find_issue_by_title(team_id, title)` first, then `update_issue` or `create_issue` based on whether the row exists.
5. **`parentId` set via a second `issueUpdate` call** after child create/update. Do not try to set `parentId` on `issueCreate` — Linear's `IssueCreateInput` accepts `parentId` but the parent must already be created, and the safer pattern is to look up the parent in-memory and call `set_parent` after both exist.
6. **`blocks` chain as a sibling relation** between consecutive children within the same parent. Idempotency check on `already`/`exists`/`duplicate` error tokens.
7. **Project verification query after load.** `fetch_project_issues(project_id)` paginates with `first: 250` + `after` cursor, then the receipt asserts `all_parents_found`, `all_children_found`, `all_children_have_parent`.
8. **JSON + Markdown receipts.** `docs/specs/<feature>-linear-load-receipt-<date>.json` (machine) and `docs/specs/<feature>-linear-live-map-<date>.md` (human, with identifier → URL map).

## Loader flags

```text
--project-name ShowClaw          # default
--team-key THE                  # default
--priority 3                    # default; 0..4
--apply                         # actually write
--i-understand-this-writes-linear
--override-active-cap           # deprecated no-op compatibility flag for paid/unlimited workspaces
--create-project-if-missing     # create project if not present
```

## Why each flag is gated

- `--apply` alone is not enough; the user must also pass `--i-understand-this-writes-linear` to
  force a second acknowledgement. Same intent as `git push --force-with-lease`. Without both
  flags the loader exits with `Refusing writes: pass --i-understand-this-writes-linear`.
- `--override-active-cap` may remain as a no-op compatibility flag in old loaders, but paid/unlimited workspaces should not require it. Active issue count is telemetry; real capacity failure is the API returning `USAGE_LIMIT_EXCEEDED`.

## What the loader writes

| Action | Mutation | Counted as write? |
|---|---|---|
| Find existing issue by title | `query` (no write) | no |
| Create parent issue | `issueCreate` | yes |
| Update existing parent | `issueUpdate(input:{projectId, title, description, priority})` | yes |
| Create child issue | `issueCreate` | yes |
| Update existing child | `issueUpdate(input:{projectId, title, description, priority})` | yes |
| Set child `parentId` | `issueUpdate(input:{parentId})` | yes |
| Create `blocks` relation (new) | `issueRelationCreate(type: blocks)` | yes |
| Create `blocks` relation (already exists) | API returns `errors` with `already` token | **no** (idempotent) |
| Project create | `projectCreate(input:{name, description, teamIds:[teamId]})` | (operational, not a typical write count) |

## Push + CI gate (after a successful apply)

The ShowClaw run hit a real `git push` rejection because the remote was 1 commit ahead by the
time the loader finished. The correct post-load closeout is:

```bash
cd <HOME>/Code/repo-seeding-20260619/showclaw
git fetch origin --prune
git status --short --branch
git rev-list --left-right --count origin/main...HEAD
git pull --no-rebase origin main       # if behind
git push -u origin main
gh run list --repo OWNER/REPO --branch main --limit 3
gh run watch <run-id> --exit-status     # confirm CI success for pushed SHA
git rev-list --left-right --count origin/main...HEAD   # expect 0  0
git ls-remote origin refs/heads/main                    # expect your new SHA
```

The CI run must be in `success` state on the **same SHA** you pushed. If `rev-list` says you are
ahead of `origin/main` but the remote HEAD shows a different SHA, you have a split-brain state
that must be reconciled before reporting "load complete."

## Common failure modes (in order of how often they bite)

1. **`teamId: String!` instead of `ID!` on a `filter:` query.** Returns 400 with the symmetric
   error message. Gotcha #2 in `linear-api-gotchas.md`. Bake `ID!` into every `filter:` UUID
   variable from day one.
2. **Missing `parentId` on a child issue.** Usually caused by a parent not being created because
   the parent `create_issue` call failed. Re-run is safe; the title-keyed upsert finds the
   existing parent and links the child.
3. **Forgetting to call `set_parent` after child create.** Symptom: child exists, parent exists,
   but `parent` field on the child is null. The verification query catches this with
   `all_children_have_parent` — patch the loader to call `set_parent` and re-run.
4. **Counting `exists` blocks relations as writes.** Inflates the write total. Use the
   `already`/`exists`/`duplicate` token check from gotcha #13.
5. **Pushing without `git pull`.** Remote was pushed to by something else (CI, another agent,
   a `git push --mirror`). Resolve with `git pull --no-rebase origin main` and push again.
6. **Skipping the verification query.** Reporting "loaded 56 children" without the post-load
   `fetch_project_issues` count is a load-receipt bug, not a real one. The query is the only
   proof that the children actually have `parent` populated.

## Recipe: turn this into a per-feature loader

When you start the next grill-to-linear run, copy the ShowClaw loader verbatim and edit:

1. `GRAPH` path → `docs/specs/<feature>-linear-issue-graph-<date>.json`
2. `RECEIPT_JSON` and `LIVE_MAP_MD` paths → feature-named
3. `parent_description(parent)` body → feature-shaped (D-spine, lane tag, etc.)
4. The flag defaults (`--project-name`, `--team-key`, `--priority`) per the workspace
5. The `feature-smoke.sh` reference inside each child body

Then run:

```bash
python3 scripts/linear/load_<feature>_issues.py            # dry-run
python3 scripts/linear/load_<feature>_issues.py --apply \
  --i-understand-this-writes-linear                        # default apply
```

If the user has approved cap override and project creation, add those two flags explicitly.

## Why the loader lives in the repo, not in the skill

- The script is per-feature: `graph`, `team-key`, `project-name`, child body template, parent
  description shape all differ. A generic "skill-owned" loader would not capture the feature
  shape without per-run editing.
- A repo-resident loader means the team can re-run it on merge, on schema change, or on
  rollback without depending on Hermes being online.
- The skill carries the **recipe** (this document). The script is an instance of the recipe
  bound to one feature.

## Related

- `references/linear-active-issue-preflight.md` — historical pre-flight recipe. Use it only as a telemetry/error-receipt pattern; do not apply a guessed cap to paid/unlimited workspaces.
- `references/showclaw-context-pack-no-write-2026-06-22.md` — companion no-write path when
  the user has not yet approved the apply.
- `productivity/linear/references/linear-api-gotchas.md` — full set of GraphQL pitfalls
  baked into the loader.
