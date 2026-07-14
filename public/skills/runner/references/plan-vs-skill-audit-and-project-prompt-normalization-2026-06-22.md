# Plan output vs skill audit and project prompt normalization (2026-06-22)

## Trigger

Henry asked to rerun/use `runner`, then corrected the result: loading or auditing the skill is not the deliverable. Running the skill should surface or generate the project execution pack, especially the human `plan.md` and copy/paste Cursor prompt.

## Lesson

When this skill is invoked, do not stop after reporting what the skill says. Produce or locate the concrete execution artifacts:

- primary human handoff `plan.md` link under `/docs/source/.../plan.md`
- raw machine fallback `/api/file/raw?...`
- artifact directory
- exact Cursor prompt location or inline section heading
- Cursor-ready/preflight verdict
- blockers, if any

If an execution pack already exists, inspect it and report the artifact paths/links. If it is stale against the current standard, call that out and update/regenerate rather than treating the skill text as the output.

## Helm vs Entity prompt shape

Helm and Entity prompts should share the same execution skeleton, but should not be byte-for-byte identical:

- shared skeleton: read plan/context/rules, child issues only, one issue at a time, proof commands, CLI Tester, Book review when required, verify, run-state, Linear proof comment, fail-stop, no unauthorized merge
- Entity: fixed approved child queue and mapping; Cursor should not discover/reorder/substitute issues
- Helm: may need live Linear discovery of remaining dependency-safe child issues, THE-106/D8-D13/D13R governance, banned-term contamination policy, and final-readiness caveats

## Normalization rule

End-to-end project prompts should be normalized to the current gate standard when `bookReview.required` is true:

1. `project-test-gate request <ISSUE-ID> <branch-or-pr>`
2. `project-test-gate run <ISSUE-ID>`
3. `project-test-gate book-review <ISSUE-ID>`
4. `project-test-gate verify <ISSUE-ID>`

`run` PASS is machine proof only. The next issue remains blocked unless Book review returns APPROVED with `safeToContinue: true` and `verify` reports `nextChildBlocked: false`.

## Pitfall

Do not answer “yes, the skill is updated” when Henry asks whether a plan/prompt should come from running it. The correct response is to locate/generate the actual plan and prompt, then give the links and verdict. Quietly obvious in retrospect. Annoying in production.
