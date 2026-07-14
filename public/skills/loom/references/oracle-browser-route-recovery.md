# Oracle GPT-5.5 Pro browser route recovery

Use this reference when a grill-to-linear/SuperSpec run must use `oracle:gpt-5.5-pro[browser]` and the runner reports `pro_gate_failed`, `browser-automation`, or an immediate Chrome remote-interface attach failure.

## Durable lesson

Do not treat `lsof` on a remote debugging port as proof that Chrome DevTools Protocol is usable. A port can listen while `/json/version` and `/json/list` return `404` or while the visible ChatGPT tab is logged out.

A valid route needs all three:

1. The remote debugging HTTP endpoints work:
   - `curl -sS http://127.0.0.1:<port>/json/version`
   - `curl -sS http://127.0.0.1:<port>/json/list`
2. `/json/list` contains a ChatGPT page target, preferably the current `/` or `/c/...` tab Oracle will reuse.
3. The page is signed into the required ChatGPT Pro/Enterprise account; the DOM must not show the logged-out `Log in / Sign up for free` state.

## Fast preflight

```bash
PORT=9222
lsof -nP -iTCP:$PORT -sTCP:LISTEN || true
curl -sS -i --max-time 3 "http://127.0.0.1:$PORT/json/version" | sed -n '1,40p'
curl -sS -i --max-time 3 "http://127.0.0.1:$PORT/json/list" | sed -n '1,120p'
```

If either CDP endpoint returns `404`, the route is not valid even if Chrome is listening. Repair or use a different working CDP port before rerunning SuperSpec.

## Manual isolated Chrome repair pattern

When the required port is bad, launch a dedicated Oracle Chrome profile with an explicit port and allowed CDP origins. Prefer calling the Chrome binary directly; some higher-level launch wrappers may append their own `--remote-debugging-port=0`, which overrides the intended fixed port.

```bash
PROFILE="$HOME/.oracle/browser-profile"
PORT=53992
APP="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$APP" \
  --user-data-dir="$PROFILE" \
  --remote-debugging-port="$PORT" \
  --remote-allow-origins='*' \
  --no-first-run \
  --no-default-browser-check \
  'https://chatgpt.com/' \
  >/tmp/oracle-chrome-$PORT.log 2>&1 &

sleep 5
curl -sS "http://127.0.0.1:$PORT/json/version"
curl -sS "http://127.0.0.1:$PORT/json/list"
```

## Login-state check without reading secrets

Check login state from the page DOM and cookie metadata only. Do not print cookie values.

```bash
sqlite3 "$HOME/.oracle/browser-profile/Default/Cookies" \
  "select host_key,name,expires_utc,is_secure,is_httponly,length(encrypted_value) from cookies where host_key like '%chatgpt.com%' order by host_key,name;"
```

Missing `__Secure-next-auth.session-token*` cookies plus page text containing `Log in` / `Sign up for free` means the route is not Pro-capable. Stop and ask for sign-in; do not downgrade or continue into Linear.

## Oracle smoke after repair

Only after CDP works and the page is signed in:

```bash
oracle -m gpt-5.5-pro --engine browser \
  --remote-chrome 127.0.0.1:<working_port> \
  --browser-tab current \
  --browser-attachments never \
  --timeout 120 --no-background --verbose \
  --write-output /tmp/oracle-route-smoke.out \
  -p 'Reply exactly: ORACLE_OK'
```

If Oracle attaches but `promptSubmitted` remains false and the page is logged out, kill/clean up the smoke run and keep the chain fail-closed.

## Receipt to save

Save a short route-recovery receipt beside the blocked SuperSpec artifacts with:

- required route and remote port;
- `/json/version` and `/json/list` status;
- signed-in/logged-out page state;
- whether an Oracle smoke submitted and returned;
- explicit confirmation that no fallback model or Linear writes happened.

## Session-start pitfalls (observed 2026-06-22, OpenCore run)

Two pitfalls bit a clean Phase 1 probe on an Oracle profile that had been used in earlier sessions. Bake them into the recipe so the next agent does not waste 30s on each.

### 1. `chrome.pid` from a prior session is stale

`<HOME>/.oracle/browser-profile/chrome.pid` can be left over from a previous Chrome process that exited. Launching a new Chrome with the same `--user-data-dir` does not always remove the stale pid file, and Oracle's preflight may read it and treat the profile as "already locked". Before launching the new isolated Chrome, remove the stale pid and tail the chrome-out log to confirm the new process is the one writing:

```bash
PROFILE="$HOME/.oracle/browser-profile"
rm -f "$PROFILE/chrome.pid"
APP="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$APP" --user-data-dir="$PROFILE" --remote-debugging-port=53992 --remote-allow-origins='*' --no-first-run --no-default-browser-check 'https://chatgpt.com/' >"$PROFILE/chrome-out-53992.log" 2>&1 &
sleep 6
tail -n 5 "$PROFILE/chrome-out-53992.log"   # must show new PID; if not, kill and retry
curl -sS http://127.0.0.1:53992/json/version
```

### 2. The SQLite login-state probe can fail with `SQLITE_CANTOPEN`

`sqlite3 "$HOME/.oracle/browser-profile/Default/Cookies" "..."` may return `unable to open database file` because the running Chrome process holds an exclusive lock on the SQLite DB. Do **not** treat that as proof of logged-out state. Two stronger, lock-free alternatives:

- **Cookie metadata via `ls -l`** (coarse but lock-free):
  ```bash
  ls -l "$HOME/.oracle/browser-profile/Default/Cookies"*
  stat -f '%Sm %z bytes' "$HOME/.oracle/browser-profile/Default/Cookies"
  ```
  A recently-touched Cookies DB suggests an active session, but is not conclusive.
- **CDP `Runtime.evaluate` on the live `chatgpt.com/` page** (authoritative, no DB lock):
  ```python
  import asyncio, json, urllib.request, websockets
  targets = json.load(urllib.request.urlopen('http://127.0.0.1:53992/json/list'))
  t = next(x for x in targets if x.get('type')=='page' and 'chatgpt.com' in x.get('url',''))
  async with websockets.connect(t['webSocketDebuggerUrl'], origin=None) as ws:
      await ws.send(json.dumps({'id':1,'method':'Runtime.evaluate',
        'params':{'expression':"document.body.innerText.slice(0, 4000)",
                  'returnByValue':True}}))
      text = json.loads(await ws.recv())['result']['result']['value']
      print('Log in' in text, 'Sign up' in text)
  ```
  Truth source. If the DOM contains `Log in` and `Sign up for free`, the profile is logged out — stop and surface the blocker. If it contains `New chat` / `Search chats` / the chat-history sidebar, the profile is signed in.

### 3. `Oracle attaches, then fails with "ChatGPT session not detected"` despite CDP working

Oracle's session probe checks the DOM at attach time. The probe runs once and aborts the run, so signing in after the abort does not retroactively unblock that smoke. Sequence must be:

1. Launch isolated Chrome with `--remote-allow-origins='*'`.
2. Verify `/json/version` and `/json/list` return 200 with a ChatGPT page target.
3. Manually sign in to ChatGPT Pro/Enterprise on that Chrome window (or confirm the existing profile is already signed in via the CDP DOM probe above).
4. **Then** run the Oracle smoke.

A "CDP works, page is logged out, sign in later" sequence burns the smoke attempt. Re-run only after sign-in is verified on the live DOM.
