# Reasoning-budget burn and sibling-lane recovery (Azure 5.4 Pro / 5.4)

Added 2026-06-22 from the ShowClaw v0 grill-to-linear run. This is the
session-derived note for a failure mode that does **not** appear in
`non-oracle-route-failclosed-2026-06-21.md`'s default failure-mode list,
because it does not look like a failure on the wire.

## Symptom

- HTTP 200 from the proxy.
- `usage.output_tokens == max_tokens`.
- `output_tokens_details.reasoning_tokens == max_tokens`.
- `choices[0].message.content == ""`.
- `choices[0].finish_reason == "stop"`.

The proxy returns success. The artifact is empty. There is no error to
catch, no exception, no warning. A casual reader will think the call
worked and only notice the empty content when reading the file.

## When it triggers

- Long, dense super-spec prompts (e.g. 70k chars of source packet
  asking for a 21-section structured spec).
- `azure-openai-responses/gpt-5.4-pro` with
  `reasoning_effort >= medium` and `max_tokens >= 9000` has been
  observed to hit this in the ShowClaw 2026-06-22 run.
- Lower-tier lanes (e.g. `azure-openai-responses/gpt-5.4`) at the same
  params return real content for the same prompt. The model is not
  the bottleneck; the *reasoning budget vs output budget split* is.

## Diagnostic check (3 lines)

```python
d = json.loads(response.text)
u = d.get("usage", {})
c = d["choices"][0]["message"]["content"]
if d.get("choices", [{}])[0].get("finish_reason") == "stop" and not c.strip():
    if u.get("output_tokens") == u.get("output_tokens_details", {}).get("reasoning_tokens") == u.get("output_tokens_details", {}).get("reasoning_tokens"):
        # reasoning burn — switch lanes, do not retry same lane
        ...
```

The check above is intentionally cheap. The signal is unmistakable when
you know to look: every token is in `reasoning_tokens`, none in
visible output. The proxy reported success; the model produced nothing
visible.

## Recovery — sibling lane, not smaller budget

Re-running the same lane with `max_tokens=4000 reasoning_effort=low`
produced `upstream_4xx` (HTTP 400 from upstream) in the same session.
Re-running with `max_tokens=9000 reasoning_effort=low` produced the
same `upstream_4xx`. The fix was **lane**, not budget:

```json
{
  "model": "azure-openai-responses/gpt-5.4",
  "max_tokens": 9000,
  "reasoning_effort": "medium"
}
```

The non-pro sibling returned 23967 / 27777 chars of real content for
the same prompt. The pro tier was unable to convert the dense prompt
into visible output at any budget tried in this run.

## Why this is not in the default failure-mode list

The default list (`upstream_timeout`, `upstream_4xx`, `concurrency_gate`,
`prompt triggered upstream content filter`) covers non-200 responses
and 200-with-error-body cases. The reasoning-burn failure is a
200-with-empty-content case. Most observability dashboards do not flag
empty content from a 200. Add an explicit check.

## Related session artifact

The override attempt ledger for this run is in
`<HOME>/Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/showclaw/oracle-route-recovery-20260621.md`.
The route JSON for the eventual derived artifact is at
`<HOME>/Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/showclaw/superspec-output/2026-06-22-showclaw-v0-execution-pack.route.json`.

## When to use this reference vs the default

- The default `references/non-oracle-route-failclosed-2026-06-21.md`
  covers the first-attempt playbook: smoke, receipt, bound, sequential,
  recognize lane-level failure, surface unblock options.
- This file covers the **second-attempt within the override**:
  when the override lane itself succeeds at smoke and on a 12-token
  probe, but the structured-spec call returns 200 with empty content.
  Read this when you see `usage.output_tokens == max_tokens` and
  `message.content == ""`.
