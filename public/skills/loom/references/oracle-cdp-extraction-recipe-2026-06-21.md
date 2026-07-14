# Oracle SuperSpec extraction via logged-in CDP — recipe (Mycelium 2026-06-21)

**When to use:** Oracle's `--harvest` / `--live` paths return empty or `I`-only bytes, OR the unauthenticated terminal fetch hits Cloudflare login, BUT the underlying ChatGPT conversation was actually generated and is reachable as a logged-in tab. Do NOT silently downgrade the artifact in that case — the model produced a real response and the right fix is to read it from the browser the model was already running in.

This recipe also covers: when only the share URL is available, the share-link `/share/<id>` route is auth-gated to the body — title/metadata can confirm existence but the body must be pulled from the logged-in `/c/<id>` tab.

## Symptoms that mean this recipe is the right path

- `oracle session <slug> --write-output <path>` exits 0 but the file is `I` (1 char) or empty or contains a Cloudflare login shell.
- The Hoshi BLOCKER (`references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md`) applies — same shape, same symptoms.
- Sibling Hoshi agent has already produced `attempt-N.route-failure.json` and is waiting.
- The share URL renders the conversation in a non-signed-in browser (only metadata) but the underlying `/c/<id>` tab in the user's Chrome DOES render the full assistant response.
- `cua-driver get_window_state` on the `/c/<id>` window shows the assistant response headings (e.g. `Title block` through `Reviewer prompt`) in the AX tree but the body bytes are not reachable from the public/share surface.

## Discovery sequence (proven on Mac 26.4, Hermes 2026-06-21)

1. **Confirm the Oracle tab and signed-in Chrome port.**

   ```bash
   curl -s http://127.0.0.1:53992/json/list | python3 -c '
   import json, sys
   for t in json.load(sys.stdin):
       if "chatgpt.com/c/" in t.get("url","") or "chatgpt.com/share/" in t.get("url",""):
           print(t["id"], "|", t["title"][:50], "|", t["url"][:90])
   '
   ```

   - `C0A52C56BF8AE75543EB3EC0F75720D0` is the typical example; the working `/c/<id>` tab usually has a DIFFERENT `window_id` than the share tab. Use the `/c/` one.
   - The remote-debugging port is the one cua-driver already exposes. If unsure, list the Chrome process and grep for `--remote-debugging-port`.

2. **Activate the authenticated `/c/<id>` tab before pulling.**

   ```bash
   curl -s -X PUT "http://127.0.0.1:53992/json/activate/<TARGET_TAB_ID>"
   ```

   Without activate, `Runtime.evaluate` may run against the wrong focused tab.

3. **Pull `document.body.innerText` via Python `websockets` with `origin=None`.**

   Critical: `--remote-allow-origins` on this Mac's Chrome accepts `null` from same-host sockets but rejects `devtools://`, `http://localhost:53992`, and `http://127.0.0.1:53992`. If you pass an origin and it fails, retry with `origin=None`.

   ```python
   import asyncio, json, websockets
   WS = "ws://127.0.0.1:53992/devtools/page/<TARGET_TAB_ID>"
   async def main():
       ws = await websockets.connect(WS, origin=None)  # NOT origin='devtools://' — that 404s
       mid = 0
       async def cmd(method, params=None):
           nonlocal mid
           mid += 1
           await ws.send(json.dumps({"id": mid, "method": method, "params": params or {}}))
           while True:
               r = json.loads(await ws.recv())
               if r.get("id") == mid:
                   return r
       await cmd("Runtime.enable")
       r = await cmd("Runtime.evaluate", {"expression": "document.body.innerText", "returnByValue": True})
       text = r["result"]["result"]["value"]
       open("/tmp/oracle-cdp-bodytext.md", "w").write(text)
       print("len", len(text))
   asyncio.run(main())
   ```

4. **Sanity-check the AX tree for the answer headings** (cross-validation receipt).

   ```bash
   mcp_cua_driver_get_window_state capture_mode=som pid=<PID> window_id=<WINDOW_ID> screenshot_out_file=<PATH> \
     query="ChatGPT said:"
   ```

   If the AX tree shows headings `Title block`, `Executive decision`, `Build plan`, `Reviewer prompt` etc. as `AXHeading` / `AXStaticText` and the innerText payload contains them in order, you have the right tab. If innerText has the headings but the file is small (<10KB) or missing sections, re-snapshot; tabs sometimes have rendered skeletons only.

5. **Parse to the canonical markdown.**

   - Strip the chat-history sidebar: it usually starts before `Title block` and contains navigation text like `Skip to content`, `New chat`, `Pinned`, chat titles. Find the first occurrence of `Title block\n\nProduct:` (or whatever the model's response begins with) and treat that as the start.
   - Strip the footer: `\n\nPro\nChatGPT can make mistakes`, `\n\nMessage ChatGPT`, `\n\nRegenerate`, etc. The "ChatGPT can make mistakes" line is the most reliable end marker on this Mac's Chrome.
   - Validate: all required section headings present and in order. For SuperSpec that is `Title block`, `Source map`, `Executive decision`, `Problem statement`, `Goals`, `Non-goals`, `Users/jobs/workflows`, `Requirements`, `UX states`, `Technical design`, `Edge cases and failures`, `Tests and proof`, `Rollout and rollback`, `Traceability matrix`, `Build plan`, `Product critique`, `Engineering critique`, `Risk register`, `Open questions`, `Builder prompt`, `Reviewer prompt` — 21/21 in order.

## What NOT to do (failure modes observed)

- ❌ Do not use `pbpaste` after clicking the AX "Copy message" button — `pbpaste` only had the previous clipboard contents (`ericzakariasson`), not the model output. The click does not route to the system clipboard.
- ❌ Do not rely on `cmd+a / cmd+c` (select all / copy) on the page — `pbpaste` stays at the previous contents on this configuration. The two routes that actually work are CDP `document.body.innerText` and the macOS AX tree.
- ❌ Do not pass `origin='devtools://'` or `origin='http://127.0.0.1:53992'` to `websockets.connect` — Chrome's `--remote-allow-origins` rejects both. Use `origin=None` (sends `null` Origin header).
- ❌ Do not switch to a `--remote-debugging-port` other than the one cua-driver already exposes. Spawning a new Chrome with `--remote-debugging-port=0` collides with the supervisor and breaks the live session.
- ❌ Do not synthesize a "local deterministic PRD" as a substitute once you have a successful CDP pull. The artifact is the Oracle response, period. Synthesis is acceptable only as a loader artifact clearly labeled non-authoritative while the Oracle retry runs.

## Receipt set this recipe must produce

| Artifact | Purpose | Validation |
|---|---|---|
| `output/super-spec/<date>-<slug>.md` | Canonical artifact, model verbatim | Heading list 21/21, lines/bytes/SHA-256 written |
| `output/super-spec/websockets-cdp-bodytext.md` | Raw innerText pull | 100KB+ on a full SuperSpec |
| `output/super-spec/ax-<tab>-tree.txt` | AX tree cross-check | Contains `Title block` through `Reviewer prompt` as `AXHeading` |
| `output/super-spec/c-tab-window.png` (or `*-auth.png`) | Visual proof of tab state | Rendered in the active Space |
| `output/super-spec/BLOCKER-REPORT.md` | Honest narrative of the route failure → CDP recovery | Includes: failure mode, why extract was chosen, why not downgrade, canonical source SHA, receipts table |
| `output/super-spec/2026-06-21-attempt-N.route-failure.json` | Per-attempt failed-route record | Schema in `templates/oracle-route-failure-receipt.json` |

## Known good inputs (worked on 2026-06-21)

- ChatGPT share URL: `https://chatgpt.com/share/6a380699-4308-83ed-996e-8c51535a52d4` (title only, body is auth-gated).
- Underlying logged-in tab: `https://chatgpt.com/c/6a3803fc-d884-83eb-8e7d-5198cb146a4d` (full body, ~119KB innerText, 21/21 sections, 5,468 lines / 113,079 bytes after trimming).
- Reasoning recap shown in the tab: "Thought for 8m 19s" — confirms the model produced the response (not a stub).
- cua-driver MCP path: `mcp_cua_driver_get_window_state`, `mcp_cua_driver_list_windows`, `mcp_cua_driver_click` (only for verification — not used for the actual pull).
- Chrome CDP port: `127.0.0.1:53992` (already exposed by the cua-driver supervisor).
- Python libs already on this Mac: `websockets>=15.0.1`, stdlib `json`/`asyncio`.
- Citadel `opus48` for critique pass: smoke proves `model: claude-opus-4-8` with content `OPUS48_PHASE2_OK` before critique runs.

## When to escalate (not loop)

If CDP extraction fails, the order is: (1) re-activate the tab and re-pull; (2) check whether the share URL is now live and the body is reachable; (3) ask Henry to share the conversation as a download or to a fresh ChatGPT tab; (4) only then report a real blocker. Do not loop more than 2–3 attempts on the same tab; the failure is not a prompt-shape problem if the model recap is visible, it is a session/tab problem.
