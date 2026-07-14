# ShowClaw context-pack/no-write issue graph notes — 2026-06-22

Session pattern worth reusing for grill-to-linear Phase 2.5/5 work when Linear writes are held:

## What worked

- Produce the full local candidate graph even when Linear writes are blocked/held:
  - machine graph JSON under `docs/specs/<feature>-linear-issue-graph-<date>.json`
  - human map under `docs/specs/<feature>-linear-issue-map-<date>.md`
  - no-write preflight receipt under `docs/specs/<feature>-linear-preflight-no-write-<date>.json`
  - repo-native context under `AGENTS.md`, `.cursor/rules/<feature>.mdc`, `docs/context/<feature>-build-context.md`
  - proof script under `scripts/proof/<feature>-smoke.sh`
  - dry-run-first loader under `scripts/linear/load_<feature>_issues.py`
- For Linear capacity risk, a no-write preflight is still valuable as telemetry: count active issues, record project existence, and planned parent/child totals. Do not block paid/unlimited workspaces on guessed issue-count caps; block only on an actual `USAGE_LIMIT_EXCEEDED` API error or missing approval.
- Commit the context pack locally after proof when the repo is the delivery artifact; include commit SHA in the external receipt.

## Pitfalls found

### 1. Forbidden-phrase smoke tests can false-fail on guardrails

If the proof script greps README/AGENTS/specs for forbidden public claims, it will often fail because those files correctly mention forbidden phrases as guardrails. Scan only public-rendered surfaces (`src`, `public`, generated metadata/feed/embed, built public output) or write an allowlisted scanner that ignores guardrail sections.

Bad pattern:

```bash
grep -RInE 'agents built Entity|ProofDesk verified|...' src public index.html README.md
```

Better pattern:

```bash
grep -RInE 'agents built Entity|ProofDesk verified|...' src public index.html dist 2>/dev/null
```

If README must be included, phrase constraints without exact forbidden public phrases or use an allowlist-aware script.

### 2. `py_compile` creates `__pycache__` that can get staged

When verifying a generated loader with `python3 -m py_compile`, remove generated caches before staging:

```bash
python3 -m py_compile scripts/linear/load_<feature>_issues.py
rm -rf scripts/linear/__pycache__
printf '\n__pycache__/\n*.py[cod]\n' >> .git/info/exclude
```

Do not commit `.pyc` files in context packs.

### 3. Copied model artifacts may intentionally contain Markdown hard-break trailing spaces

`git diff --check` flags copied PRD/spec artifacts that preserve model-authored Markdown hard breaks. For archival spec mirrors, do not mutate source text just to appease whitespace checks. Use a scoped check when committing the context pack:

```bash
git -c core.whitespace=-blank-at-eol diff --cached --check
```

Still run normal checks on hand-written code/scripts.

## Minimum final proof bundle

- `bash scripts/proof/<feature>-smoke.sh` passes.
- `python3 scripts/linear/load_<feature>_issues.py` prints `DRY RUN ONLY` and reports `linear_writes: 0` or equivalent.
- JSON graph validates: every child body contains Parent, Read first, What to build, Boundaries, Acceptance criteria, Proof required, Blocked by, Source coverage, Not done until.
- `git status` and commit SHA recorded if the repo pack was committed.
