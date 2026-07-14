# Mycelium V1 — Live Pack 2026-06-22 — Gotchas and Patterns

Session-specific detail captured from the Mycelium V1 runner run on 2026-06-22. Project-agnostic lessons are encoded in `SKILL.md`; this file records the exact techniques, gotchas, and one-liners that worked (or that bit) so a future Book/Ada session reproducing this on another Linear project does not have to rediscover them.

## 1. Issue-map regex trap

`docs/specs/issue-map.md` style files typically have a `## Sibling blocks edges` section whose body looks like:

```markdown
## Sibling blocks edges

- THE-212 -> THE-235
- THE-227 -> THE-265
- THE-231 -> THE-240
- ...
```

A naive child parser like `re.compile(r'^- (THE-\d+) (.+)$', re.M)` will match both real children and the `THE-XXX -> THE-YYY` blocks-edge lines. In the Mycelium run, 74 real children + 13 blocks-edges = 87 false matches, which inflated the mapping count and broke the totals.

**Fix:** split on the `## Sibling blocks edges` heading and only parse children from the head of the file:

```python
text = Path('docs/specs/issue-map.md').read_text()
blocks_idx = text.find('## Sibling blocks edges')
head = text[:blocks_idx] if blocks_idx > 0 else text
child_re = re.compile(r'^- (THE-\d+) (.+)$', re.M)
real_children = child_re.findall(head)  # NOT over the whole file
```

Encode the `## Sibling blocks edges` section separately as a structured edge list with a dedicated `re.compile(r'^- (THE-\d+) -> (THE-\d+)$', re.M)` pattern.

## 2. Linear GraphQL filter gotcha

`issues(filter: { identifier: { in: $ids } })` returns HTTP 400 — `identifier` does not accept `in` in Linear's GraphQL filter syntax.

**Working pattern:** fetch the full project issue tree once via `project(id: $proj).issues(first: 250)`, then filter the returned nodes by `identifier` client-side. Use the project UUID (e.g. `a05c2d93-8c4c-457e-b102-547ced2fe1ac` for Mycelium), not the URL slug.

Sample query:

```python
q = '''query($p: String!) {
  project(id: $p) {
    name url
    issues(first: 250) {
      nodes {
        identifier title updatedAt
        state { name type }
        parent { identifier }
        description
      }
    }
  }
}'''
```

Save the full payload to `/tmp/<project>_linear_live.json` and post-process from there. Avoid refetching per issue.

## 3. Validator canonical-sentence and CLI-step format

The skill ships `scripts/validate_execution_pack.py` which performs structural linting. It enforces:

### 3a. Canonical no-merge sentence — exact match

The validator checks for this exact string in `plan.md` AND in every prompt file:

```
Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.
```

Not a paraphrase. Not "Do not merge without Book verification unless…". Not "Do not merge unless Henry explicitly authorizes." Use the canonical sentence verbatim. If you have to swap the team name, swap it everywhere — the validator does not allow local variants.

### 3b. CLI Tester four-step format — exact prefix match

For each prompt file, the validator looks for one of these four forms per step (`request`, `run`, `book-review`, `verify`):

- `` `<step> <ISSUE_ID>...` `` (backtick + space)
- `` `<step>` `` (backtick only)
- `<step> <ISSUE` (literal)
- `<step> <ISSUE_ID` (literal)

**This means bare shell lines like `project-test-gate --config .project-gate.json request <ISSUE_ID>` will not satisfy the validator**, even though they would work in practice. The matching form is:

```text
`request <ISSUE_ID> <branch>` — initial gate setup
`run <ISSUE_ID>` — execute proof and write receipt
`book-review <ISSUE_ID>` — Book review (when required)
`verify <ISSUE_ID>` — consume receipt, set nextChildBlocked
```

(Backtick form. One line per step. Order: request → run → book-review → verify.)

### 3c. Goal prompt required sections

`cursor-goal-prompt.md` is required (the validator's `REQUIRED_FILES` lists it). It must contain:

- `/goal` invocation as the first non-comment token inside the fenced prompt block
- Authority order block
- Hard zero-policy / banned terms block
- Receipt paths block
- Completion condition / final report block
- The canonical no-merge sentence

A single sentence "for each issue run CLI Tester four-step" without the explicit backtick-form steps is not enough. Reproduce the four-step block verbatim.

## 4. Body-source-key alignment — boolean pattern

When live Linear issue bodies point to a historical artifact path that has since moved in-repo, do not just count "body mentions the source slug." Use a boolean set that explicitly checks the **in-repo source keys** are present:

```python
mapping_basis_booleans = {
  'title_contains_source_id':       bool(src and src in title_live.lower().replace('·','').replace(' ','')),
  'title_exact_match':              title_live.lower().startswith(f'mycelium v1 · {src}') if src else False,
  'body_heading_match':             '## Parent' in body and '## Read first' in body,
  'body_contains_source_id':        bool(src and src in body),
  'source_section_slug_match':      bool(src),
  'linear_uuid_match':              bool(n.get('id')),
  'parent_link_match':              bool(n.get('parent')),
  'proof_commands_present_in_body': 'pnpm' in body or 'bash scripts/proof' in body,
  'banned_term_suspicious_hits':    any(b in body.lower() for b in [...]),
  'in_repo_source_key_present_in_body': bool(re.search(r'(docs/specs/(canonical-prd|super-spec)|docs/context/mycelium-v1-build-context)', body)),
  'stale_phase2_path_in_body':      'output/phase2/' in body,
}
```

The `in_repo_source_key_present_in_body` boolean is the single most useful signal. Without it, you get a false sense of "all bodies reference the source" when in fact they all reference the *historical* merged PRD and not the in-repo file the agent can actually read.

## 5. Entity FS — where the pack actually lives

The Entity FS server at `http://<REDACTED_IP>:3000` exposes `GET /api/sources` listing enabled sources. For pack publication, use an existing `local` source — the `crew-home` source base path is `<HOME>/Enterprise/Crew Home`, so a pack at `<crew-home>/Mycelium/v1-execution-pack/` resolves to:

- Human: `http://<REDACTED_IP>:3000/docs/source/crew-home/Mycelium/v1-execution-pack/plan.md`
- Machine: `http://<REDACTED_IP>:3000/api/file/raw?source=crew-home&path=Mycelium/v1-execution-pack/plan.md`

**The raw URL returns the actual markdown (HTTP 200, content type `application/octet-stream` or `text/plain`). The `/docs/source/...` URL returns the SPA shell for `.md` paths.** Use the raw URL to verify content was published; use the docs URL as the human handoff.

If the raw URL returns 404, the file was not written to disk under the source's base path. Entity FS does not store anything; it serves the underlying filesystem.

## 6. CLI Tester default state on this host

- Path: `<HOME>/Code/cli-tester/bin/project-test-gate`
- Subcommands: `request`, `run`, `book-review`, `verify`
- Env: `BOOK_API_BASE` and `API_SERVER_KEY` are NOT configured on Enterprise/MascotM3. Use `mode: "packet"` in `.project-gate.json`'s `bookReview` block; the validator's `bookReview mode is packet or hermes-api` check will pass and `book-review` + `verify` will produce local packet receipts (no API spend).

## 7. Validator pass count is not preflight

The skill validator returns PASS/FAIL on **structural** pack shape (files exist, required phrases present, prompts declare the right steps, gate config parses, no banned terms leaked, no cron registration). It does NOT check:

- Whether live Linear is clean (that's the `linear_id_to_source_id.json` `status: mapped` check)
- Whether the approved queue is non-empty (the `no unresolved approved mappings` check is the closest, and it inverts — it FAILS if any mapping is `needs_review`; the failure itself is the preflight signal)
- Whether `.project-gate.json` was promoted to repo root (the validator reads `.project-gate.example.json` only)

Treat the validator as a necessary-not-sufficient check. Always report the mapping-table status (mapped vs needs_review counts) separately from the validator pass count.

## 8. Run-state file pattern (consistent across packs)

`run-state.example.json` shape that works with CLI Tester and survives restarts:

```json
{
  "project": "mycelium-v1",
  "version": 1,
  "generated_at": "2026-06-22T04:30:00Z",
  "approvedQueue": ["THE-210", "THE-211", "THE-212"],
  "completedQueue": [],
  "currentIssue": null,
  "status": "ready",
  "blockers": [],
  "lastReceipts": {},
  "reviewGates": {
    "cliTesterRun": "pending",
    "cliTesterBookReview": "pending",
    "cliTesterVerify": "pending",
    "codexAutoreview": "pending",
    "gitnexusImpact": "pending"
  }
}
```

Gitignore pattern that matches: `.cursor/*autonomous-run-state*.json`. The `.cursor/` dir already exists in Mycelium; in repos without it, the first run creates it.

## 9. What to put in the verdict reply to Henry

Pattern that scaled well in the Mycelium run (kept it short, evidence-led, decision-ready):

1. Project + generated timestamp
2. Human handoff link (primary)
3. Raw machine link (secondary)
4. Generated artifacts list (10 files max — directory tree)
5. Validator result (e.g. `57/58 PASS`)
6. **Preflight verdict: `❌ CURSOR-READY: NO`** (or `YES`) with bold-typed blockers in priority order
7. What's solid (verified) — 6–8 bullets
8. Decisions I made (acting on the obvious default) — 4–5 bullets
9. What I need from Henry — 3–4 short named options (`A. / B. / C. / D.`)

Henry replied zero times to the open-ended "3 things need your call" earlier in the run; he replies to multiple-choice options. Default to multiple-choice for the final handoff.

## 10. Cross-session note for the next book/ada pack run

If a future session gets a request like `[HiM] run runner skill` again, the first three things to do (in order) are:

1. **Identify the project.** Likely a Herald Labs Linear project. Inspect `~/.hermes/memory/<date>.md` and `~/.hermes/profiles/default/memory/` for active project references, or grep recent `lcm_grep` results for the project name. Don't ask "which project" first — surface 2–3 candidate projects with a one-line default.
2. **Run the live Linear scan via the project UUID.** The pattern in §2 is the right one. Save to `/tmp/<project>_linear_live.json` and keep it across the session so you do not refetch.
3. **Generate the mapping table and run the validator immediately** before writing long prose. The validator's `57/58 PASS → 1 failure = preflight signal` is the cleanest early verdict. If the failure is `no unresolved approved mappings`, you know the pack will land in FAIL-on-preflight mode and the cleanup manifest becomes the single biggest deliverable.
