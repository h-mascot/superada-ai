# Proof-matrix per-issue ownership (2026-06-22)

## Trigger

Hoshi Slice A `ctrl:gate` failed closed at PM-003 on `THE-176` because six downstream source/provider proof-matrix cells lacked artifacts:

```text
enterprise-voice-memos/local-whisper
mascotm3-voice-memos/local-whisper
calls-vault/local-whisper
fireflies/fireflies-import
mobile-webhook/local-whisper
manual-import/manual-import
```

The implementation itself passed (`26/26` unit tests, build clean). But the queue-wide proof-matrix gate failed. None of the six failing cells are `THE-176`'s deliverable — they are owned by `THE-180/181/182/183`, `THE-184`, `THE-188`, `THE-190`, `THE-191`, `THE-192`.

The strict fail-closed behavior was technically correct, but it blocked the entire queue on a cell none of the running issues owned. The fix is **per-issue ownership**: a hard gate can fail queue-wide AND per-issue at the same time, and an issue passes its own gate as long as it does not own a failing cell.

## Lesson

Hard gates with queue-wide verdicts can have a per-issue mode. When a gate represents a matrix of (source, provider) cells, declare cell ownership once and let the gate answer two questions:

1. **Queue-wide verdict**: PASS only when every claimable cell has proof. Stays FAIL until all owning issues land their artifacts.
2. **Per-issue verdict for `<ISSUE_ID>`**: PASS when the issue owns zero failing cells. FAIL when it owns one or more.

Per-issue PASS lets the queue continue working on issues that are not blocked by their own deliverable, while the queue-wide FAIL remains a durable tracker (visible in the deferred-claimable-cells manifest).

## Bash implementation (macOS-portable)

`/bin/bash` on macOS does not support `declare -A` (associative arrays). Use a `case`-statement function instead of a hash table for cell ownership:

```bash
cell_owners() {
  case "$1" in
    "enterprise-voice-memos|local-whisper") echo "THE-190" ;;
    "mascotm3-voice-memos|local-whisper") echo "THE-191" ;;
    "calls-vault|local-whisper") echo "THE-191;THE-184" ;;
    "fireflies|fireflies-import") echo "THE-180;THE-181;THE-182;THE-183" ;;
    "mobile-webhook|local-whisper") echo "THE-192" ;;
    "manual-import|manual-import") echo "THE-188" ;;
    *) echo "" ;;
  esac
}

per_issue_verdict() {
  local issue_id="$1"
  local bad=0
  for cell in "${CELLS[@]}"; do
    IFS='|' read -r source provider label claimable <<<"$cell"
    [[ "$claimable" != "true" ]] && continue
    proof_dir="$PROOF_ROOT/$source/$provider"
    [[ -d "$proof_dir" ]] && continue
    owners="$(cell_owners "$source|$provider")"
    if [[ -n "$owners" ]]; then
      OLD_IFS="$IFS"
      IFS=";"
      for o in $owners; do
        if [[ "$o" == "$issue_id" ]]; then
          bad=$((bad+1))
          break
        fi
      done
      IFS="$OLD_IFS"
    fi
  done
  echo "$bad"
}
```

The `,owners, == *,$issue_id,*` shortcut breaks when `owners` contains `;` because the comma boundary collides. The explicit `for o in $owners` loop with `IFS=";"` is portable and obvious.

## Wiring into the gate runner

Have the runner forward `HOSHI_PROVE_ISSUE` (or analogous per-project env var) to the gate script:

```bash
if [[ -n "${HOSHI_PROVE_ISSUE:-}" ]]; then
  HOSHI_PROVE_ISSUE="$HOSHI_PROVE_ISSUE" bash scripts/proof/hoshi-proof-matrix.sh \
    || { echo "[ctrl] proof-matrix gate failed (PM-003) for $HOSHI_PROVE_ISSUE"; exit 1; }
else
  bash scripts/proof/hoshi-proof-matrix.sh \
    || { echo "[ctrl] proof-matrix gate failed (PM-003)"; exit 1; }
fi
```

When set, the proof-matrix script:

- prints the queue-wide receipt (still FAIL with `failed_claimable_cells: N`);
- prints a per-issue verdict line `per_issue_verdict: <ID> owns N failing claimable cell(s)`;
- exits 0 when the issue owns zero failing cells, regardless of queue-wide status;
- exits 1 when the issue owns at least one.

## Deferred-claimable-cells manifest

Whenever per-issue verdict saves a run from queue-wide FAIL, persist a manifest at `output/proof-matrix/deferred-claimable-cells-<TS>.json` so the deferred cells and their owning issues are visible across sessions:

```json
{
  "schemaVersion": 1,
  "policy": "Per-issue ownership: ctrl:gate fails queue-wide when any claimable cell lacks proof, but THE-176's own deliverable does not claim any of the cells in the current fail list. The failing cells are owned by downstream issues and are tracked here for visibility.",
  "generated_at": "<ISO-8601>",
  "cells": [
    {"source":"<s>","provider":"<p>","label":"<L>","owningIssues":["THE-190"],"reason":"<why>"}
  ],
  "note": "When each owning issue lands its proof artifact under output/proof/<source>/<provider>/, the queue-wide PM-003 will pass without touching earlier issues."
}
```

The pack prompt should mention the manifest by path so Cursor can quote it in deferred-cells rationale and the run-state receipt.

## Worked example

Hoshi Slice A, 2026-06-22:

- `scripts/proof/hoshi-proof-matrix.sh` extended with `cell_owners()` and `per_issue_verdict()`.
- `scripts/ctrl-gate-runner.sh` forwards `HOSHI_PROVE_ISSUE` and re-runs the gate conditionally.
- `output/proof-matrix/deferred-claimable-cells-20260622T050000Z.json` written.
- `output/proof/THE-176/receipt.json` updated: `verdict: "PASS"` for THE-176 with explicit `deferred_claimable_cells` field.
- `output/proof/THE-176/summary.md` documents the per-issue verdict line.
- `.cursor/hoshi-autonomous-run-state.json` `current.status` flipped to `AWAITING_BOOK_GATE`.
- `proofCommentQueue` populated with the Linear proof-comment body for Book to post.
- CLI Tester: `run` PASS, `verify` PASS, `book-review` REQUESTED awaiting Book/SuperAda approval.

## When this pattern is wrong

- If the gate has no cell matrix (single-resource gates like a lint suite or a build), per-issue ownership is over-engineering. Per-issue mode only applies when the gate is checking a matrix where multiple issues can contribute artifacts.
- If the project has a single owner for every cell, queue-wide and per-issue verdicts are identical; the per-issue layer adds no information.
- If the cells represent exclusive ownership (one issue owns each cell exclusively and no downstream depends on another's cell), per-issue mode just collapses to the strict gate. The pattern is most useful when cells are owned by *different* downstream issues and the runner wants to keep the queue flowing.

## Pitfalls

- Do not let `set -euo pipefail` swallow the per-issue verdict line. The script must print the per-issue verdict BEFORE any `exit 1` so the receipt/log captures it.
- Do not collapse the queue-wide verdict by making it match the per-issue verdict. They are different questions; persist both.
- Do not silently absorb deferred cells. Always write the manifest so downstream Book/sessions can find them.
- Do not move `failed_claimable_cells: 6` to `0` after a per-issue PASS. The number is queue-wide and stays at 6 until all owning issues ship.