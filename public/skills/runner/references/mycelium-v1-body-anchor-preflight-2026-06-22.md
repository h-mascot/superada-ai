# Mycelium V1 body-anchor cleanup + preflight lessons (2026-06-22)

Session pattern: generated a Cursor execution pack for a Linear-backed project, found live Linear body/source-key drift, applied approved body-anchor cleanup, then reran preflight until Cursor-ready.

## Durable lessons

### 1. Body-source-key alignment can be fixed safely with anchors

When live Linear child bodies already have good Acceptance / Proof / Blocked-by / Decision sections but point at stale generated paths, prefer a **body-anchor patch** over a full rewrite:

- back up every live body first (`<ISSUE>.current.md` + full live JSON snapshot);
- generate `<ISSUE>.proposed.md` for every child;
- insert `## Source ID` and `## Mapping basis` near the top, before `## What to build`;
- preserve existing acceptance/proof/decision/blocker text byte-for-byte;
- update Linear by issue UUID, not ordinal position;
- add a short audit comment to each issue;
- re-fetch live Linear and re-audit against the live bodies, not local drafts.

A full rewrite is still appropriate when bodies are too thin, missing execution sections, or contradicted by the source. But for path/source-key drift only, body-anchor is lower-risk and faster.

### 2. Historical stale-path mentions are allowed after anchor cleanup

After adding an explicit anchor pointing to in-repo authoritative sources, an old `output/phase2/...` mention may remain inside a **migration note**. Do not keep blocking on that string if all of these are true:

- `## Source ID` exists;
- `## Mapping basis` exists;
- body references the in-repo canonical sources (`docs/specs/canonical-prd.md`, `docs/specs/super-spec.md`, context doc, issue map);
- stale generated path is clearly labeled historical, not the active source;
- mapping table records this as `historical_phase2_mentions`, not `needs_review`.

### 3. Guardrail/banned terms in Linear bodies are advisory context, not automatic blockers

Linear issue bodies may mention terms like `public signup`, `SaaS`, `CRM`, `Gmail`, or `mycelium-mobile` as boundaries/non-goals/guardrails. Do not mark a mapping `needs_review` just because the body contains a banned term in a policy context.

For preflight mapping status:

- require body/source/key alignment, proof commands, parent links, and source slug;
- record guardrail terms as `banned_term_context_hits_advisory`;
- reserve hard banned-term failures for generated implementation artifacts, committed files, or issue bodies that actively request forbidden behavior.

### 4. Execution-pack validator has exact prompt-shape expectations

The validator for this skill expects:

- standalone files: `cursor-single-issue-prompt.md`, `cursor-bounded-queue-prompt.md`, `cursor-goal-prompt.md` in addition to inline prompts in `plan.md`;
- exact canonical no-merge sentence: `Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.`;
- goal prompt starts with `/goal`;
- goal prompt declares authority order, hard zero-policy/banned terms, receipt paths, completion condition/final report;
- each prompt declares CLI Tester steps in a detectable form: backticked `request <ISSUE_ID> <branch>`, `run <ISSUE_ID>`, `book-review <ISSUE_ID>`, `verify <ISSUE_ID>`.

If a validator fails after a useful pack is generated, patch the prompt shape rather than weakening the validator.

### 5. Preflight probe receipts should not become issue execution receipts

It is useful to smoke-test CLI Tester with an approved issue (`request` + `verify`) before declaring the pack ready. If that creates receipts for a real issue, move them aside after the probe so Cursor can create fresh receipts during real execution.

Recommended location:

```text
output/<project>/preflight-probe/
```

Then leave `output/<project>/test-gate/` and `output/<project>/book-review/` empty for Cursor's real run.

### 6. After preflight PASS, clean the handoff plan

Do not leave stale `do not run Cursor yet` / `preflight cleanup` sections above the approved prompt after the blockers are cleared. Update the plan so the top says:

- `CURSOR-READY: YES`;
- mapping totals (`mapped: N`, `needs_review: 0`);
- approved queue;
- gate config and run-state paths;
- proof of writes/audit/validator PASS;
- the copy/paste Cursor prompt immediately next.

Old cleanup instructions can stay only as historical/reference detail lower down, or be removed entirely.
