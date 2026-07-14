# Hoshi SuperSpec — Oracle GPT-5.5 Pro browser blocked (3 attempts, 2026-06-21)

## Why this reference exists

The existing Helm Oracle retry lesson (`helm-oracle-prd-retry-2026-06-21.md`) documents a single failed Oracle PRD draft (2-byte `I` reply) that was recovered by a single compact-packet retry on the same browser tab. That recovery pattern does not generalize. The Hoshi session ran three SuperSpec attempts on the same `127.0.0.1:53992` Enterprise Chrome session against `browser-tab current`, using three substantially different prompt shapes, and all three returned the same single-character `I` reply. Compact retry is not a universal fix; the failure was not a prompt-shape problem.

This reference is the escalatory follow-on. It tells a future operator: when the second Oracle attempt also returns `I`, do not write a third compact-packet retry — open a fresh tab or report blocker.

## What happened (receipts)

| # | prompt shape | up-tokens | down-tokens | elapsed | artifact size | verdict |
|---|---|---|---|---|---|---|
| 1 | full source packet (`00-source-packet.md`, 18 KB) as `--file`, runner-wrapped | ~5.86k | 1 | 6m17s | 184 B | unusable |
| 2 | compact `retry-prompt.md` (19 KB) with explicit section list, `--browser-attachments never --force --timeout 3600` | ~5.75k | 1 | 9m49s | 2 B | unusable |
| 3 | 178-token terse directive, no source packet, no attachment | 178 | 1 | 6m55s | 2 B | unusable |

Pattern: all three replies were the byte `I\n`. The Oracle wrapper itself never reported a hard error — it logged `[browser] Model selection evidence: requested=Pro; resolved=Pro; status=already-selected; strategy=select; verified=yes.` and `Saved assistant output to <path>`.

When `up-tokens` shrank 33× from 5.86k → 178 and the reply shape did not change, prompt-shape was ruled out as the cause. The tab/session is the suspect.

## Escalation ladder (canonical)

Run these in order. Do not skip. Do not loop on a step that already failed.

1. **Full packet via runner** — `bash run-super-spec.sh --title "..." --input <source> --model gpt-5.5-pro --remote-chrome 127.0.0.1:<port> --browser-tab current`. Default path.
2. **Compact packet on same tab** — write `retry-prompt.md` (<=20 KB) with explicit required section list, run with `--force --browser-attachments never --timeout 3600 --no-background --write-output <path>`. Helmed the Helm recovery; sufficient ~50% of the time.
3. **Terse directive on same tab** — 150–200 token prompt that says "write the full spec" and references the source packet by absolute path. Useful for confirming step 2 is genuinely a tab/session problem (a prompt-shape fix would change the reply; the `I` reply staying constant across step 1 → 2 → 3 is the diagnostic).
4. **Fresh ChatGPT tab in same Chrome session** — open `chat.openai.com/?model=gpt-5.5-pro` on a new tab, get its WebSocket debugger URL via `/json`, and run with `--browser-tab <new-tab-id>`. The Helm retry lesson was successful when a new tab was opened; this is the documented recovery. **This is the step that should follow after step 3 fails, not a fourth compact-packet attempt.**
5. **ChatGPT UI invocation + share URL recovery** — same model, same Pro account, same prompt, but invoked directly through the ChatGPT UI in the same Enterprise Chrome session. Retrieve the assistant response from the public share URL via `browser_navigate` + `browser_console` (`.markdown` node read). This is the **self-service recovery** that bypasses the Oracle CLI wrapper capture bug. The Hoshi run (2026-06-21) recovered a 137 KB spec this way after three CLI attempts returned `I\n`. Do this before pausing for Henry. See `references/oracle-share-url-recovery-2026-06-21.md` for the full sequence.
6. **Report blocker + ask Henry** — if step 5 also fails, the failure is account/region/route-side and not a wrapper bug. Write a `BLOCKER.md` (template below) and stop. Do not substitute a deterministic spec without explicit Henry approval.

## Receipt schema (canonical for `route-failure.json`)

Every failed Oracle attempt must produce a JSON receipt. The Hoshi session established this shape; copy it for future runs.

```json
{
  "attempt": "<int starting at 1>",
  "route": "oracle-browser gpt-5.5-pro",
  "remote_chrome": "127.0.0.1:<port>",
  "browser_attachments": "never | <other>",
  "forced": "<bool>",
  "timeout_s": "<int>",
  "elapsed_text": "<e.g. 6m17s>",
  "tokens": {"up": "<int|k>", "down": "<int>", "retries": "<int>", "delta_<unit>": "<num>"},
  "output_path": "<absolute>",
  "output_bytes": "<int>",
  "output_sha256": "<hex>",
  "verdict": "unusable",
  "reason": "<one-paragraph: what was the prompt shape, what was the reply, why rejected>",
  "oracle_log_excerpt": ["<3-5 lines>"],
  "pattern_summary (only on final attempt)": {
    "attempts": "<n>",
    "all_replies": "<e.g. single character I>",
    "all_exit_codes": 0,
    "all_routes_ok": true,
    "all_artifacts_unusable": true
  },
  "next_action": "<STOP / retry with X / report blocker>"
}
```

Save each receipt as `2026-06-21-attempt-<n>.route-failure.json` next to the bad artifact. Move the bad artifact aside as `*.md.attempt<n>-bad` so the next attempt writes to a clean slug.

## BLOCKER.md template

When all Oracle retries fail, write a single-slot `BLOCKER.md` so Henry can read the situation in 30 seconds.

```markdown
# <Project> SuperSpec — Oracle GPT-5.5 Pro browser blocked (<n> attempts, <date>)

## Status
**g2l-1-superspec blocked on Oracle route.** <n> browser-mode runs of Oracle GPT-5.5 Pro
against the Enterprise Chrome tab returned a single-character `I` reply. Wrapper exit 0;
artifact unusable (<bytes> B). Stopping per `helm-oracle-prd-retry-2026-06-21.md` and
the grill-to-linear-execution-graph pitfall "Skipping Oracle after one bad Oracle PRD run".

## Attempts
| # | prompt shape | up | down | elapsed | artifact | sha256 | verdict |
|---|...|...|...|...|...|...|...|

Receipts: list of `*.route-failure.json` paths.
Oracle log: `/tmp/super-spec-oracle.log`.

## Pattern (likely cause)
<1-2 paragraphs ruling out prompt-shape, context-length, attachment flags; identify
the remaining suspects: stale tab, account/region rate-limit, wrapper-captures-partial-response bug.>

## What I have NOT done (and will not do without your say-so)
- Generate a deterministic spec as Oracle.
- Switch to the API route.
- Change models or use the Ada host.
- Open a fresh tab on my own initiative (this is a Henry call; see Open Questions below).

## Open questions for Henry
1. **Fresh ChatGPT tab?** Want attempt <n+1> with a new `chat.openai.com/?model=gpt-5.5-pro` tab?
2. **Different model?** Stay on gpt-5.5-pro, or try a different Pro model on the same route?
3. **API fallback?** Citadel `gpt55pro` API route (breaks the "no API fallback" rule — explicit ask)?
4. **Accept deterministic spec?** Generate a local spec clearly tagged `LOCAL_DETERMINISTIC_NOT_ORACLE` and proceed, with you acknowledging in writing.

## Default if you say nothing
Pause. Record `g2l-1-superspec` as `blocked` in the Linear parent epic. Do not proceed to PRD or Linear graph.
```

## How this connects to the umbrella skill

- **Pitfall added:** "Treating 'compact retry' as the universal fix for the `I` reply." Lists the 5-step escalation ladder and explicitly forbids looping on the same tab with more elaborate prompt wrappers.
- **Reference added:** this file, linked from the References section of the umbrella SKILL.md.
- **Existing lesson reinforced:** the `helm-oracle-prd-retry-2026-06-21.md` reference says "build a compact retry packet." That step is still step 2 in the ladder; it is no longer the whole story. Keep the existing reference for its session context; this one covers what to do when its recovery is insufficient.
