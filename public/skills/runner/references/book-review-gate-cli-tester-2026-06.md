# Book review gate — CLI Tester patterns (2026-06)

Class-level lessons from the CLI Tester Book review gate slice. Each one
applies to any project that wires `project-test-gate` to Book/SuperAda via
Hermes API, not just Helm.

## The class problem this skill must always answer

`run` proves the project. `book-review` proves the project to an
agent reviewer. **A CLI Tester `PASS` receipt is not an agent approval
gate** unless one of the following is true:

- `bookReview.required: true` and the Book review receipt says
  `decision: APPROVED` and `safeToContinue: true`; or
- the runtime is wired so `book-review` actually calls Book via Hermes
  API and writes a fresh receipt before `verify` runs.

If the project config says `handoff: "linear-comment"` but never wires
Book, the linear comment and the CLI Tester PASS are not the same
thing. The persona/owner question ("did Book approve this?") is only
true if Book's session is in the receipt.

## The "no real call" reporting rule

When a slice "proves" Book is wired, label each layer explicitly:

- CLI logic — proven by focused unit/integration tests with a
  `--require` mock that overrides `globalThis.fetch`. Deterministic,
  fast, no network.
- Server reachable — proven by hitting `/v1/capabilities` with the
  env key; expected `200` and the feature list includes
  `session_chat: true`. **No session is created.**
- Auth works — proven by the `200` itself (no `401`/`403`).
- End-to-end Book call — only proven by a real `book-review` against
  the live server that creates a session, sends the prompt, and
  parses strict JSON. Costs model tokens.

If a slice only does the first three, say "CLI logic + server reachable
+ auth proven; end-to-end chat not yet spent" — never claim
"Book approves."

## Mock-fetch pattern for testing CLIs that call `fetch()`

When a CLI uses Node's built-in `fetch`, testing it as a child process
needs to control `fetch` from inside the child, not from outside via
an HTTP server. The mock HTTP server approach hangs the parent test
runner because the spawned CLI keeps the keep-alive socket open and
`server.close()` waits for the connection to drain.

Pattern:

```js
// In the test file:
const preload = path.join(os.tmpdir(), `preload-${pid}-${Date.now()}.cjs`);
fs.writeFileSync(preload, `
globalThis.fetch = async function mockHermesFetch(url, options) {
  // ...return canned Response
};
`, 'utf8');
spawnSync('node', ['--require', preload, BIN, '--root', root, ...args], { ... });
// finally: unlinkSync(preload)
```

Pair this with the CLI side setting `Connection: close` in its
fetch headers so the spawned child exits cleanly even when the
mock returns real keep-alive sockets.

A failing test that "hangs past the timeout, no useful output" is
almost always one of: keep-alive socket held by the spawned child;
the mock server's `close()` waiting for the connection; or the parent
test runner holding the server's event loop. The `Connection: close`
+ `--require` mock together eliminate all three.

## Retry policy for Hermes API calls

When `bookReview.mode === "hermes-api"`, both `POST /api/sessions`
(create) and `POST /api/sessions/<id>/chat` (chat) should retry
transient failures with linear backoff.

Retryable:

- `fetch failed` / network errors
- `AbortError` / timeout
- HTTP `408`, `409`, `425`, `429`
- HTTP `5xx`

Not retried (fail closed):

- HTTP `4xx` other than the above (e.g. `400`, `401`, `403`,
  `404`, `422`) — these are deterministic failures; retrying them
  wastes a session.

Defaults: `retryAttempts: 3`, `retryDelayMs: 1000`, with linear
backoff (`delay * attempt`). Receipts must include `apiAttempts[]`
so the operator can see which call retried and what each attempt
returned.

## "Proven vs claimed" gate receipts

For high-risk work (authority, secrets, live delivery, promotion,
release), the receipt must explicitly assert:

- the `bookReview.receipt` path
- the `bookReview.decision` is `APPROVED`
- the `bookReview.safeToContinue` is `true`
- the `bookReview.sessionId` (Hermes session id, not the local
  `bookReviewSessionId` slug)
- the `apiAttempts[]` from the chat call

A `bookReview` receipt without these fields is a packet receipt, not
a review receipt. Distinguish them in writing.

## Test fixture `.project-gate.json` rules

When copying an existing project as a CLI Tester test fixture:

- The fixture must have `handoff: "local-receipt"` (or a clearly
  non-posting value), not `handoff: "linear-comment"`. The test
  runner inherits the env via `process.env`, so under
  `PROJECT_GATE_POST_LINEAR=1` a `linear-comment` fixture would
  post real Linear comments for fake `THE-168`-style IDs.
- Remove any nested `.git` directory from the fixture before
  `git add`, otherwise git stages it as a gitlink
  (`160000`) instead of a regular file. Use `git rm --cached
  <path>`, move `.git` aside, then re-add the files.
- Configure `bookReview` to a deterministic, low-retry config
  (`retryAttempts: 3`, `retryDelayMs: 1`) so tests stay fast.

## Codex review on a clean main branch

On a repo with a clean main and no PR, `codex-review` returns
`no review target: clean main checkout and no forced mode`. To
review a specific commit diff, use:

```bash
codex-review --mode branch --base <commit-sha> \
  --parallel-tests "node --test test/foo.test.js"
```

First pass on a CLI Tester slice flagged P2: "Disable Linear
handoff in test fixture." Second pass on the amended diff was
clean ("No actionable correctness issues were found."). The
fixture fix is now codified above.

## `codex-review` may leave a `codedb.snapshot` in the worktree

Codex's review tool writes a `codedb.snapshot` (≈180 KB) into
the repo it reviews. Add it to `.gitignore` as part of the
slice, or remove it before commit:

```gitignore
codedb.snapshot
```

If the file appears in `git status`, remove it and amend or
commit a `chore:` fixup that adds the ignore rule.

## Receipts to attach for any Book review gate slice

Place under `Enterprise/Crew Home/Output/Book/<project>-<slice>-<date>/`:

- `REPORT.md` — human-readable
- `00-INDEX.txt` — file map
- `git-status.txt` — final branch state + commit log
- `tests.txt` — `node --test` output
- `codex-review.txt` — full review transcript
- `cli-tester-mirror/` — exact copy of every committed file in
  the slice, preserving relative paths
- per-issue sample receipts (test-gate, book-review.input.md,
  book-review.json) only if produced during a smoke

## What this skill is NOT for

- A slice that only edits the CLI Tester itself (this is the
  `cli-tester` repo's own maintenance, not a project's Book
  wiring). For CLI Tester maintenance, use the test-driven +
  codex-agents-coding-checklist flow directly.
- A slice that decides whether to make Book the reviewer of
  record for a project. That is a project-policy decision
  recorded in the project's `AGENTS.md` / `.cursor/rules/`
  and the `bookReview.required` config flag, not a code change.
