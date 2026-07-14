# Oracle GPT-5.5 Pro browser — CDP-extract fallback (2026-06-21)

## Why this reference exists

The Hoshi escalation ladder (step 5) documented "ChatGPT UI invocation + share URL recovery" via `browser_navigate` + `browser_console` (`.markdown` node read). That works for a public `/share/...` URL but **only extracts a truncated chat-shell** — the unauthenticated share page is wrapped in Cloudflare's login challenge and the body content is not accessible without cookies. Mycelium session (2026-06-21) proved a more reliable recipe: **drive the active `/c/...` conversation tab via Chrome DevTools Protocol and pull `document.body.innerText` from the live DOM**. This recipe extracted a 113 KB, 21-section SuperSpec verbatim from a working Oracle response that the Oracle CLI's own `--live`/`--harvest` paths reported as "Assistant turns: 0".

Use this recipe when:

- Oracle `--live` / `--harvest` returns `I` / empty bytes / `Assistant turns: 0`.
- The tab title in Chrome DevTools shows the spec name (e.g. `Super Spec Markdown Request`).
- `curl -sL <share_url>` returns HTTP 200 with the right `<title>` but the body is auth-gated.
- The reasoning recap in the AX tree is non-trivial (e.g. `Thought for 8m 19s`) — proof the model produced a real response.

Do **not** use this recipe when the spec genuinely doesn't exist yet (no share URL, no AX-tree `ChatGPT said:` heading). In that case fall back to escalation-ladder step 6 (report blocker, ask Henry).

## Diagnostic checks (do all of these first — they take <2 min)

1. **Verify the spec actually exists in the browser:**

   ```bash
   curl -s http://127.0.0.1:53992/json/list > /tmp/tabs.json
   python3 -c 'import json; [print(t["id"][:16], "|", (t.get("title") or "")[:48], "|", t.get("url","")[:80]) for t in json.load(open("/tmp/tabs.json"))]'
   ```

   Look for two tabs:
   - A `/c/<uuid>` tab titled `Super Spec <something>` (the logged-in conversation).
   - A `/share/<uuid>` tab with the same title (Henry's share URL, optional — may not exist yet).

2. **Verify the share URL is reachable but auth-gated (not 404):**

   ```bash
   curl -sLI --max-time 10 'https://chatgpt.com/share/<id>' | head -5
   # expect: HTTP 200 with <title>ChatGPT - Super Spec ...</title>
   curl -sL --max-time 10 'https://chatgpt.com/share/<id>' | grep -oE '<title>[^<]+</title>'
   ```

3. **Cross-check via cua-driver AX tree** (proves the response is rendered in the DOM, not just promised in the URL):

   ```bash
   mcp_cua_driver_get_window_state(pid=<chrome pid>, window_id=<window id>, capture_mode=som)
   # then grep the saved markdown for:
   #   "ChatGPT said:" heading
   #   "Title block", "Source map", "Executive decision", ...
   #   "Copy message" button on the assistant response
   ```

   If all of those are present, the model produced the response. The Oracle CLI's capture is what's broken.

## Working recipe — Python `websockets` + `Runtime.evaluate`

The `python-websockets` and `websockets` clients need the right `origin` parameter. **Chrome's `--remote-allow-origins` only allows `null`** for same-host CDP socket connections. Setting `origin='http://127.0.0.1:53992'`, `origin='devtools://devtools'`, or omitting `origin` (which the clients translate to `''` or `'ws://...'`) all 403.

```python
import asyncio, json, websockets

async def extract(target_ws_url, expression='document.body.innerText'):
    async with websockets.connect(target_ws_url, origin=None) as ws:  # None → null in Origin header
        mid = 0
        async def cmd(method, params=None):
            nonlocal mid
            mid += 1
            await ws.send(json.dumps({'id': mid, 'method': method, 'params': params or {}}))
            while True:
                r = json.loads(await ws.recv())
                if r.get('id') == mid: return r
        await cmd('Runtime.enable')
        r = await cmd('Runtime.evaluate', {'expression': expression, 'returnByValue': True})
        return r.get('result', {}).get('result', {}).get('value', '')

asyncio.run(extract('ws://127.0.0.1:53992/devtools/page/<target-tab-id>'))
```

**Why `origin=None` works:** the websockets client encodes Python `None` as the literal string `null` in the HTTP `Origin` header, which is on Chrome's `--remote-allow-origins` allowlist for same-host CDP sockets. `origin=''` (empty string) does not work — Chrome rejects it as a non-null, non-allowlisted origin.

**Why the other origins fail:**

- `http://127.0.0.1:53992` → 403 (`Rejected an incoming WebSocket connection from the http://127.0.0.1:53992 origin. Use --remote-allow-origins=...`).
- `devtools://devtools` → 403 (not on the allowlist).
- Omitted (Python websockets default) → string `''` → 403.

The `python-websocket-client` library (synchronous, different package) has the same constraint. Same recipe, same `origin=None`.

## Activation / state checks (Chrome may keep tabs in on-current-Space but inactive)

Before extracting, activate the target tab so its DOM is the live assistant response, not a stale pre-reply snapshot:

```bash
curl -s -X PUT 'http://127.0.0.1:53992/json/activate/<target-tab-id>'
# "Target activated"
```

This is important when multiple ChatGPT tabs exist (Oracle often keeps several open). The `/c/<uuid>` tab is the canonical one for the assistant's last response.

## Extracting and slicing the response

`document.body.innerText` returns ~100–120 KB of mixed chat UI text for a typical 5,000-line spec. The spec body is preceded by sidebar/chat-history noise and followed by the "ChatGPT can make mistakes" footer. Slice on the section markers:

```python
from pathlib import Path
text = Path('/tmp/bodytext.md').read_text()
# Start: the first "Title block\n\nProduct: <name>" after the prompt echo
start = text.find('Title block\n\nProduct:')
# End: the trailing "Pro\nChatGPT can make mistakes" footer
end_marker = '\n\nPro\nChatGPT can make mistakes'
end = text.find(end_marker, start)
extract = text[start:end].strip() + '\n'
# Verify all required headings are present
required = [
    'Title block', 'Source map', 'Executive decision', 'Problem statement',
    'Goals', 'Non-goals', 'Users/jobs/workflows', 'Requirements', 'UX states',
    'Technical design', 'Edge cases and failures', 'Tests and proof',
    'Rollout and rollback', 'Traceability matrix', 'Build plan',
    'Product critique', 'Engineering critique', 'Risk register',
    'Open questions', 'Builder prompt', 'Reviewer prompt',
]
missing = [h for h in required if h not in extract]
assert not missing, f'missing sections: {missing}'
Path('/path/to/canonical.md').write_text(extract)
```

The Mycelium session output: 5,468 lines, 113,079 bytes, SHA-256 `26d6c0deb802ce0110bad8400ffd1dc08e9bf24c62ee2e4601876f90ad4c0124`, all 21 required headings present in order.

## AX tree cross-check (cheap, no CDP, no origin problem)

`mcp_cua_driver_get_window_state` with `capture_mode=som` returns a markdown-rendered AX tree plus numbered element indices. It will show the assistant response rendered as `AXHeading "Title block"`, `AXStaticText "Product:"`, `AXStaticText "Mycelium V1"`, etc. — proof the response is in the DOM even if the Oracle CLI harvest is broken.

This is useful when:

- You want to **sanity-check** before going to the Python `websockets` recipe (saves 30s).
- You want to **click a button** (e.g. "Copy message" → `pbpaste`) as an alternative extraction. The "Copy message" AX button reliably copies the rendered markdown to the system clipboard on ChatGPT web; `pbpaste` reads it back.

**Click-by-element-index is the more reliable path** than `pbpaste` after copy, because `pbpaste` sometimes returns stale clipboard content (observed: `pbpaste` returned `ericzakariasson` 15 bytes when the user clipboard was actually empty after copy).

## Receipts to keep when this recipe is used

Always save these alongside the canonical artifact:

1. The raw `document.body.innerText` dump (e.g. `websockets-cdp-bodytext.md`, ~120 KB).
2. The AX tree markdown for the active tab (e.g. `ax-c-tab-tree.txt`, ~110 KB).
3. A window screenshot (`c-tab-window.png` or similar) for visual proof.
4. The `route-failure.json` documenting that Oracle `--live`/`--harvest` failed on this attempt.
5. A short `BLOCKER-REPORT.md` revision noting the route was unblocked via CDP extract, not via a new Oracle run.

Do not write "no SuperSpec exists" anywhere — the spec does exist; the harvest path was broken.

## How this connects to the umbrella skill

- **Escalation ladder:** step 5 in `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md` is now specifically "CDP extract from the live `/c/...` conversation tab." This file is the recipe.
- **Pitfall added:** "Trusting `Assistant turns: 0` / `I` from Oracle `--live` as proof the model didn't respond."
- **Diagnostic order:** always do share-URL curl + AX-tree cross-check before going to Python `websockets` — they take seconds and confirm whether extraction is even needed.
