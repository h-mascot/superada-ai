# Non-Oracle route fail-closed and Azure upstream escalation — 2026-06-21

This is the session-derived reference for what happens after the
`oracle:gpt-5.5-pro[browser]` route fails and Henry explicitly authorizes
a non-Oracle lane (e.g. Citadel-routed `azure-openai-responses/gpt-5.4-pro`).

The original Oracle browser route recovery lives in
`oracle-browser-route-recovery.md`. This file covers the
second-attempt playbook, not the first.

## When to use this reference

- The required Oracle browser route failed (saved route JSON shows
  `pro_gate_failed` or `browser_automation_failed`).
- Henry wrote an explicit override such as "if it doesn't work, try
  citadel azure 5.4-pro xhigh".
- You have an authenticated proxy URL (e.g. `http://<lan-ip>:18100`)
  and at least one lane that smoke-tests green at low token budgets.

## Step 1 — Smoke the alternative lane first

Before any structured-spec attempt, run a low-budget smoke probe.
The probe exists to:

- confirm the proxy answers at all (`GET /` or `/v1/models` -> 200);
- capture the **model name** the proxy will report in
  `chat.completions` responses (some proxies rewrite model ids);
- reveal a lane-level `available_concurrency` ceiling that will
  reject parallel attempts.

```bash
BASE="http://<lan-ip>:18100"
curl -sS -o /dev/null -w "GET / -> %{http_code}\n" --max-time 5 "$BASE/"
curl -sS --max-time 5 "$BASE/v1/models" | python3 -c '
import sys, json
d = json.load(sys.stdin)
for m in d.get("data", []):
    rid = m.get("id", "")
    if any(k in rid.lower() for k in ["gpt-5.4","gpt-5.5","azure","xhigh","opus48"]):
        print(rid, "->", m.get("state") or m.get("runtime_state"),
              "healthy=", m.get("healthy"),
              "concurrency=", m.get("available_concurrency"),
              "/", m.get("max_concurrent_requests"))
'

# Short reply smoke
curl -sS --max-time 60 "$BASE/v1/chat/completions" \
  -H "Content-Type: application/json" \
  --data '{"model":"azure-openai-responses/gpt-5.4-pro",
           "messages":[{"role":"user","content":"Reply with exactly: AZURE_54PRO_XHIGH_OK"}],
           "max_tokens":64,"temperature":0}'
```

The reply **must** contain both `model: gpt-5.4-pro` and the exact
`AZURE_54PRO_XHIGH_OK` body marker. If either is missing, treat the
lane as not actually ready and stop.

## Step 2 — Write the override receipt

Before any structured-spec attempt, save a short receipt that captures:

- Henry's exact authorization (one or two sentences, verbatim).
- The alternative route id and the proxy base URL.
- The smoke proof (response body + bytes + `model` field).
- The lane's `available_concurrency` (e.g. `1/2`) and current
  `state` (e.g. `busy`).
- The expected model name the proxy will return in the spec response.

Without this receipt, the override is just a guess.

## Step 3 — Bound the structured-spec attempt

Most production proxies will not return a 21-section super-spec at
default settings. Bound the call aggressively:

| Lane                      | `reasoning_effort` | `max_tokens` | Notes                             |
|---------------------------|--------------------|-------------:|-----------------------------------|
| `azure-openai-responses/gpt-5.4-pro` | `medium` | 8000–12000 | First attempt                    |
| `azure-openai-responses/gpt-5.4-pro` | `low`    | 12000      | Fallback if xhigh/medium timeout |
| `azure-openai-responses/gpt-5.5`     | `medium` | 8000       | Higher throughput, same boundary  |
| `anthropic/claude-opus-4-8`          | n/a      | 12000      | Use for critique, not generation  |

Do not set `max_tokens >= 24000` on a long structured spec on a
non-Oracle OpenAI lane. Empirically, `upstream_timeout` is the
dominant failure mode at 24k+ output.

If the spec is too long to fit a single 8k response, **split it
into section passes** and stitch the result. Use a deterministic
boundary (e.g. sections 1–12 vs 13–21) and re-stitch by section
heading.

## Step 4 — Avoid parallel calls

Most proxy lanes in this stack report `available_concurrency: 1/2`.
Three concurrent calls will all time out. Issue calls sequentially.
Use a background process (`terminal(background=true)`) only when the
call exceeds the foreground timeout, and poll it; do not fan out.

## Step 5 — Recognize the lane-level failure pattern

If you see any of the following on the alternative lane, treat the
lane as the problem and stop retrying on the same prompt shape:

- `upstream_timeout` (proxy level, status `upstream_timeout`)
  repeatedly at multiple `max_tokens` and `reasoning_effort` values.
- `prompt triggered upstream content filter` (upstream 400).
- `upstream_4xx` (HTTP 400 from upstream) on the same prompt.

The first attempt is informative. The second attempt confirms the
pattern. A third attempt with a different prompt shape (compact
packet, paraphrase, drop transcript) is the right move. Beyond that,
the lane is the bottleneck.

## Step 6 — Write the final route-recovery receipt

Append the override-attempt ledger to the existing route-recovery
receipt. The ledger must include, per attempt:

- attempt id (`A1`, `A2`, ...);
- input description and approximate char count;
- `model`, `reasoning_effort`, `max_tokens`;
- HTTP status and error type/message (verbatim from the response);
- output file path and bytes written.

The receipt is the artifact that lets a later agent resume without
re-running the grill or re-doing the failed attempt.

## Three unblock options to surface

When the override attempt is also exhausted, the only valid next
moves are these three:

1. **Wait and retry.** Most `upstream_timeout` failures resolve
   when the lane's `available_concurrency` returns to baseline.
   Re-probe `/v1/models` and look for `available_concurrency > 0`
   on the target lane before retrying.
2. **Fix the Oracle browser route.** Sign into ChatGPT
   Pro/Enterprise in a Chrome profile exposed via remote debugging,
   confirm `/json/version` + `/json/list` return 200, and rerun the
   documented `run-super-spec.sh`. This restores the
   `oracle:gpt-5.5-pro[browser]` route and the canonical spec chain.
3. **Write an explicit, narrowly-scoped override** for a different
   lane with an explicit role ("you may use X for a section-level
   outline only; the canonical spec still requires Oracle"). Do not
   self-authorize this. The user's words are the override.

## Pitfalls

- **Do not treat `Assistant turns: 0` / `I` from Oracle as proof the
  Oracle model did not respond.** A documented recovery recipe exists
  in `oracle-cdp-extract-fallback-2026-06-21.md`. Apply that recipe
  first, before reaching for an override.
- **Do not fan out parallel calls against a lane with
  `available_concurrency: 1`.** All calls will time out.
- **Do not bury the failure ledger.** The route-recovery receipt is
  the only durable signal that this attempt was made. Without it,
  the next session will re-discover the same wall and may invent a
  substitute spec from preview lanes.
- **Do not promote a non-Oracle spec to canonical.** Even with a
  successful override, the canonical PRD/spec chain names the
  Oracle route as authoritative. Mark the override output as
  derived and reference the Oracle PRD when one exists.
