# Helm Grill → SuperSpec → PRD → Linear run notes (2026-06)

Reusable lessons from the Helm v1 run. Keep this as a reference for the class-level `grill-to-linear-execution-graph` workflow, not as a one-off task log.

## What happened

- SuperSpec default API route (`gpt-5.4-pro`) preflighted successfully but timed out at the wall cap and produced no spec. The correct durable lesson is: **preflight success is not output success**. Validate the artifact on disk before advancing.
- Henry explicitly overrode the model route to Oracle GPT-5.5 Pro / high on Enterprise. The browser route succeeded using an existing remote Chrome session (`--engine browser --remote-chrome 127.0.0.1:<port> --browser-tab current`) and produced the final SuperSpec.
- The first Oracle PRD draft attempt returned a syntactically successful but unusable 2-byte output (`I`). Treat tiny/trivial outputs as failures even if the process exits 0 and route file says `ok`.
- A reduced retry prompt produced a full advisory PRD, but the canonical PRD was still generated deterministically from the validated SuperSpec and then patched with the Opus critique.
- Opus critique must route through Citadel `opus48` for Henry's environment, not Pioneer. Verify the returned model field (`claude-opus-4-8`) and save the route receipt.
- The Linear loader's first run partially created parents + a few children before failing on malformed graph entries. The idempotent title-keyed loader made re-run safe after fixing the graph parser.

## Durable workflow lessons

1. **Artifact validation gates every phase.** After any model/tool generation, check output bytes, line count, sha256, key headings/sections, and truncation before using it downstream.
2. **Process success is not product success.** A command can exit 0 with garbage output. Reject outputs that are too small, single-letter, missing required headings, or lacking required issue graph sections.
3. **Record explicit model exceptions.** If Henry overrides the normal SuperSpec model, write an exception ledger with user wording, route, host, fallback policy, and scope of exception.
4. **Use deterministic parent-merge when models wobble.** If model merge/draft fails or truncates, produce a reproducible canonical PRD from validated SuperSpec + source packet + critique must-fixes. Preserve failed model outputs as receipts, not as source of truth.
5. **Critique first, then load.** Apply second-model critique patches before Linear loading; do not publish known-boilerplate acceptance criteria or missing dependency wiring.
6. **Idempotent Linear loaders are mandatory.** Use title as the idempotency key; create-or-update parents and children; then wire relations. Partial loader failures are recoverable when the loader is idempotent.
7. **Verify project view semantics.** Query Linear after load: total, parent count, child count, project name/url, parent links, and relation samples. "In board" means the intended project view, not just team membership.
8. **Keep advisory outputs separate.** A later successful retry can be useful, but do not automatically replace a canonical artifact that already includes critique fixes. Compare, mine improvements, and record the decision.

## Minimal receipts to save

- SuperSpec route file and final artifact hash.
- PRD draft/critique/canonical hashes.
- Critique route and returned model.
- Linear graph JSON, loader script, load receipt JSON, human issue map.
- Final report with counts, top-level issue URLs, caveats, and first blocker issue.
