# Entity vs Helm handoff comparison + proof-gate lessons — 2026-06-21

## Trigger

Henry compared the generated Entity Phase 2 Cursor pack against the earlier Helm operating plan and found the Entity handoff insufficient: it had the right file, but not the same user-facing shape or obvious copy/paste prompts.

## Durable lessons

### 1. Human handoff plan must be executable from the page

A `plan.md` must not be a thin index. Another Book/Cursor session should be able to open the human docs link and see, near the top:

- Cursor-ready verdict;
- copy/paste prompt to run **now** when preflight is blocked;
- copy/paste Cursor prompt to run **later** after preflight passes;
- whole-goal/end-to-end prompt when Henry expects autonomous queue execution;
- hard blockers and next gate.

If Henry cannot find the prompt to paste into Cursor, the plan failed even if all sibling artifacts exist.

### 2. Return human docs link first

Expected response ordering:

1. `Human handoff link: http://<REDACTED_IP>:3000/docs/source/<source>/<path>/plan.md`
2. `Raw machine link: http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md`
3. `Cursor-ready: yes/no + blockers`

The raw API link is useful for scripts but is not the handoff artifact Henry expects.

### 3. Helm-style comparison checklist

When comparing/generated packs against the Helm standard, check for:

- current state;
- rules / hard rules;
- per-issue flow;
- shared CLI Tester gate;
- proof commands;
- commit/PR review gates;
- code review ladder;
- visible copy/paste Cursor prompt;
- bounded queue/autonomous prompt;
- end-to-end goal-mode prompt when whole-queue execution is expected;
- bottom-only opt-in cron/check-in template marked do-not-run;
- Entity/docs links;
- explicit `Cursor-ready` verdict.

### 4. Video evidence: Cloud vs local Cursor

Cursor Cloud can produce video evidence more naturally. Local Cursor should not be assumed to record video by default.

Policy to encode in generated plans:

- For UI-facing work, require browser/DOM/screenshot proof at minimum.
- Prefer Cursor Cloud for broad video evidence when available.
- If local video is required, add an explicit recording step (Playwright video/trace, browser harness, or macOS screen recording automation).
- Do not require video for backend/docs/non-UI work unless the issue asks for it.
- Any visual proof must be tied to issue ID + branch/commit + receipt; do not reuse one screenshot/video across child issues.

### 5. CLI Tester Book review gate

Shared CLI Tester supports a second-pass Book review gate:

```bash
project-test-gate request <ISSUE> <branch-or-pr>
project-test-gate run <ISSUE>
project-test-gate book-review <ISSUE>
project-test-gate verify <ISSUE>
```

`run` is machine proof. `book-review` creates a Book approval packet or a Hermes API review. `verify` must block the next child when `bookReview.required: true` unless Book returns/records:

```json
{"decision":"APPROVED","safeToContinue":true}
```

Default for new packs should be `bookReview.mode: "packet"` unless Hermes API env vars are configured. `hermes-api` mode needs `BOOK_API_BASE` and `API_SERVER_KEY` and must not print secrets.

### 6. Receipt uniqueness is a hard gate

Every receipt must be issue-specific:

- issue ID;
- branch/PR;
- commit SHA;
- changed files;
- command outputs;
- visual proof if applicable.

A receipt, screenshot, or video from one child issue must not be reused as proof for another child issue.

## Entity-specific outcome from this session

The Entity plan was patched to include:

- top-of-page preflight cleanup prompt;
- top-of-page delayed Cursor prompt;
- whole-goal end-to-end prompt;
- UI/video proof policy;
- Book review command + verify command;
- receipt uniqueness rule;
- `.project-gate.example.json` with `bookReview.required: true`, `mode: "packet"`.

Entity remained not Cursor-ready until Linear body/source-ID cleanup and repo-root `.project-gate.json` review/copy pass preflight.
