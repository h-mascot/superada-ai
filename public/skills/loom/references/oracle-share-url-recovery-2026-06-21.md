# Oracle "I" recovery via ChatGPT UI share URL — 2026-06-21

## What this reference exists to teach

The existing escalation ladder in `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md` stops at step 5 ("Report blocker + ask Henry"). It turns out there is a **step 6** that bypasses the wrapper capture bug entirely and unblocks the same session, without waiting on Henry, without downgrading the model, and without breaking the Oracle authority rule.

**The recovery:** when Oracle CLI (`npx -y @steipete/oracle --engine browser`) returns a 1-byte `I\n` reply three or more times on `browser-tab current`, invoke the same model on the same Enterprise Pro account through the **ChatGPT UI** in the same Chrome session, then retrieve the assistant message from the public share URL.

Same model, same Pro account, same source packet, same prompt — the wrapper was capturing a one-character response where the UI invocation produced a full spec.

## When to use

You are in the middle of a loom run, the Oracle browser CLI just failed three or more times with the single-character `I\n` reply (or any 1–2 byte unusable response), the wrapper exited `0` and reported `browser_route_ok`, and the artifact is unusable. Henry has not been asked yet. You have already written `route-failure.json` receipts and a `BLOCKER.md`. **Before** pausing for Henry, try step 6.

## Concrete recovery sequence (verified 2026-06-21 on the Hoshi run)

1. **Confirm the failure pattern is the wrapper capture bug, not a model-side issue.** All attempts returned `browser_route_ok` and the same `I\n` byte; the wrapper logged `[browser] Model selection evidence: requested=Pro; resolved=Pro; status=already-selected; strategy=select; verified=yes.` Three prompt shapes (full source packet, compact retry, 178-token terse directive) producing the same 1-byte reply across 33× token deltas is the diagnostic. If this pattern is present, the bug is the wrapper, not the model.

2. **Open ChatGPT in the same Enterprise Chrome session.** Either reuse an already-open `chat.openai.com` tab or open a new one. The Chrome session is the one that exposes the Pro subscription; do not switch profiles or incognito. Set the model selector to **GPT-5.5 Pro** (or whatever the Oracle route was supposed to use).

3. **Paste the same source packet and same prompt into the ChatGPT composer.** The UI invocation is the route. There is no need to invent a new prompt. The full source packet as the system-style prompt and the directive as the user message works.

4. **Wait for the assistant response to fully stream.** The UI is slower than the wrapper and will paint a 137 KB response over ~6–9 minutes. Do not assume a partial response is the full response. The composer shows a "stop generating" affordance; the response is complete when the affordance disappears.

5. **Click Share → Copy link.** The share URL has the shape `https://chatgpt.com/share/<uuid>-<slug>-<hexSlugId>`. Anyone with the link can read the assistant's full markdown. The user can also click "Share" themselves and post the URL; the recovery works either way.

6. **Fetch the share URL and extract the assistant markdown.** Two approaches, in order of preference:

   - **In-Chrome via `browser_navigate` + `browser_console`.** Navigate to the share URL in the same Chrome session, then `browser_console` with `document.querySelectorAll('.markdown')` to grab the longest `.markdown` node (the assistant response). `querySelectorAll('.markdown')[1].innerText` was the working selector on the Hoshi run — the first `.markdown` node was the human's prompt preview. Use `length` to confirm the response is non-trivial (>= 10 KB for a SuperSpec-sized spec; >= 100 bytes minimum sanity).
   - **Via `curl` if the share URL is unauthenticated.** Some share URLs are public and render without login. `curl -sL <url>` returns HTML; parse with `python3 -c '...'` if needed.

7. **Write the extracted markdown to the canonical spec path** (e.g. `output/super-spec/2026-06-21-<slug>.md`). Compute SHA-256 and byte count.

8. **Update the route receipt.** The receipt must explicitly name the recovery route and reference the share URL:

   ```json
   {
     "route": "oracle-gpt-5.5-pro[browser] (ChatGPT UI invocation, recovered from public share URL)",
     "share_url": "https://chatgpt.com/share/...",
     "extraction_channel": "browser_navigate + browser_console (.markdown DOM read)",
     "remote_chrome": "127.0.0.1:<port> (same Enterprise Chrome session as attempts 1-3)",
     "failure_attempts_replaced": [1, 2, 3],
     "verdict": "usable"
   }
   ```

   Save as `<spec-path>.route.json`. Move the failed `route-failure.json` files aside; keep them for the record.

9. **Update the BLOCKER.md** to record the recovery. Do not delete the BLOCKER — it is the audit trail. Add a "Recovery" section that names the share URL, the extraction method, the SHA-256 of the recovered spec, and a one-paragraph note that the BLOCKER was resolved without a Henry call because step 6 of the escalation ladder succeeded.

10. **Continue the workflow.** Phase 1 is now complete with an Oracle-authored spec. The remaining phases (PRD, critique, Linear load, context pack, verify) run on the recovered spec exactly as they would on a wrapper-generated spec.

## Why this works when the wrapper does not

The Oracle wrapper (`@steipete/oracle --engine browser`) drives the same ChatGPT UI through Chrome DevTools Protocol. It reads the response off the wire after the model finishes streaming. The observed failure mode on the Hoshi run was: the wrapper captured an early/partial response (the byte `I\n`) and treated it as the assistant's final message. The UI invocation on the same model + account + prompt produced a full response because the UI waits for the response to settle before the user copies the share link. The model itself is fine; the wrapper's response-capture timing is the bug.

This is consistent with the wrapper logging `[browser] Archived ChatGPT conversation after saving local artifacts.` and then writing whatever the DOM shows at the moment of capture, regardless of whether the response has fully streamed.

## How this changes the escalation ladder

Replace the "step 5 / Report blocker + ask Henry" terminus with:

1. Full packet via runner.
2. Compact packet, `--force --browser-attachments never`.
3. 178-token terse directive on the same tab.
4. **Open a fresh ChatGPT tab in the same Chrome session** and run via Oracle CLI on the new tab id.
5. **Run the same prompt through the ChatGPT UI in the same Chrome session and retrieve from the share URL.** This is the recovery described in this reference. Self-service; does not require a Henry call.
6. Report blocker + ask Henry. (Only after step 5 fails.)

## Pitfalls

- **Do not skip the `route-failure.json` receipts from attempts 1–N.** The receipts are the audit trail that proves the wrapper was the bug, not the model. Without them, the BLOCKER is unconvincing and the recovery is unjustified.
- **Do not change the model or the prompt in step 5.** The whole point of the recovery is that the same model + same prompt work via the UI. Changing either makes the recovery uninterpretable.
- **Do not paste the share URL into a Discord channel without redacting the share token.** The share token is short enough to be guessable in principle; treat it like any other unguessable secret. Paste the URL in private channels or DM.
- **Do not assume the share URL is forever.** ChatGPT may rotate or expire share tokens. Extract the markdown immediately and store it in the canonical spec path; do not rely on being able to re-fetch later.
- **The recovery route is still Oracle.** The receipt must say `route: oracle-gpt-5.5-pro[browser] (ChatGPT UI invocation, recovered from public share URL)`. Do not call this "local-deterministic" or "wrapper-bypass" — the spec is still Oracle-authored, just delivered via the UI surface instead of the wrapper.

## Related

- `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md` — the prior escalation ladder (steps 1–5) and the BLOCKER template this recovery does NOT delete, only extends.
- `references/helm-oracle-prd-retry-2026-06-21.md` — the original Helm recovery (single compact-packet retry, sufficient ~50% of the time) which is now step 2 of the ladder.
- `references/superspec-oracle55-browser-default-2026-06-21.md` — the SuperSpec default route that this recovery preserves.
