name: beeper
version: 1.1.0
description: Send messages across WhatsApp, LinkedIn, Instagram, Discord, Telegram, and other platforms via Beeper Desktop API. Search chats, list accounts, send messages with markdown support.
---

# Beeper Desktop API Skill

Unified messaging across all platforms using Beeper Desktop's local API.

## Overview

Beeper Desktop runs on the operator's Mac and provides a local REST API for accessing all connected chat platforms:
- WhatsApp
- LinkedIn
- Instagram
- Discord
- Telegram
- Signal
- Messenger
- Slack
- and more

## Setup

**Requirements:**
1. Beeper Desktop installed and running on the operator's Mac
2. API enabled: Beeper → Settings → Developers → Enable API
3. API key stored in your secret store (e.g. `~/.clawd/secrets/beeper.key`) or as `secrets/beeper.json`
4. A remote agent reaches Beeper through an SSH tunnel or port-forward that exposes the local API port (example: `127.0.0.1:23373`)

**Configuration:**
```bash
systemctl --user status <beeper-tunnel.service>  # your tunnel/port-forward unit, if you use one
openclaw mcp show beeper
```

## Quick Start

```bash
# Send a message
~/clawd/skills/beeper/scripts/send-message.sh "Kinan" "What opensource apps do you use?"

# Search chats
~/clawd/skills/beeper/scripts/search-chats.sh "Kinan"

# List recent chats
~/clawd/skills/beeper/scripts/search-chats.sh

# List accounts
~/clawd/skills/beeper/scripts/beeper.sh accounts
```

## Sending files (verified 22/08)

Two-step via Desktop API on the Mac:
1. `POST /v1/assets/upload` multipart `file=@/path` -> `uploadID`
2. `POST /v1/chats/{chatID}/messages` with `{"text":"caption","attachment":{"uploadID":"<id>"}}`

NOTE: `attachments:[id]` is silently IGNORED (message sends as TEXT, no error). Only the single `attachment` object form works. Verify with a follow-up GET showing `"type":"FILE"`.

## API Reference

**REST Base URL from a remote agent:** `http://127.0.0.1:23373/v1` through your tunnel/port-forward  
**REST Base URL on the Beeper host:** `http://localhost:23373/v1`  
**MCP Endpoint from the agent:** `http://127.0.0.1:23373/v0/mcp`

**Authentication:** Bearer token in Authorization header

**OpenClaw MCP:** registered as `beeper`. The config points to `scripts/beeper-mcp-stdio.sh`, which reads the token from secrets and uses `mcp-remote`; do not paste the Beeper token into OpenClaw config.

### List Accounts

```bash
GET /v1/accounts
```

Returns all connected chat accounts (WhatsApp, LinkedIn, etc.)

### List Chats

```bash
GET /v1/chats?limit=100
```

Returns recent chats across all platforms.

### Search Chats

```bash
GET /v1/chats/search?query=name
```

Search for chats by participant name or chat title.

### Send Message

```bash
POST /v1/chats/{chatID}/messages
Content-Type: application/json

{
  "text": "Your message here (supports markdown)"
}
```

**Response:**
```json
{
  "chatID": "!abc123:beeper.local",
  "pendingMessageID": "m1234567890"
}
```

### List Messages

```bash
GET /v1/chats/{chatID}/messages?limit=50
```

Get message history from a specific chat.

### Search Messages

```bash
GET /v1/messages/search?query=keyword
```

Search across all messages in all chats.

## Scripts

### send-message.sh

Send a message to someone by name (auto-finds chat).

```bash
~/clawd/skills/beeper/scripts/send-message.sh "Recipient Name" "Message text"
```

**Example:**
```bash
./send-message.sh "Kinan" "What opensource apps do you use?"
```

**How it works:**
1. Searches for chat by participant name
2. Finds matching chatID
3. Sends message via API
4. Returns confirmation

### search-chats.sh

Search for chats or list recent conversations.

```bash
# Search by name
~/clawd/skills/beeper/scripts/search-chats.sh "Kinan"

# List recent (default 20)
~/clawd/skills/beeper/scripts/search-chats.sh
```

**Output:**
```
[WhatsApp] Kinan Zayat - !rWhDFVD7b2nvcAYobofL:beeper.local
[LinkedIn] John Doe - !xyz789:beeper.local
```

## Common Use Cases

### Send to multiple platforms

Beeper unifies all platforms, so you can send to WhatsApp, LinkedIn, etc. the same way:

```bash
./send-message.sh "Kinan" "Message via WhatsApp"
./send-message.sh "John" "Message via LinkedIn"
```

The script automatically detects which platform the person is on.

### Reply with context

```bash
# Search for recent conversation
./search-chats.sh "Kinan"

# Send follow-up
./send-message.sh "Kinan" "Following up on our last discussion..."
```

### Markdown support

Messages support markdown formatting:

```bash
./send-message.sh "Kinan" "**Bold** _italic_ and \`code\`"
```

### Response shapes (group reads)

- Chat search `GET /v1/chats/search?query=<name>` returns `{"items":[{"id": "!…:beeper.local", "network", "title", "type": "group"|…, "participants": {"items": […]}}]}` — the chat key is **`id`, NOT `chatID`** (only the SEND response uses `chatID`).
- Participants carry masked `phoneNumber` only — **no display names**. To attribute senders in a group, match `sender` IDs (`d-<digits>:beeper.local` WhatsApp LIDs) against quoted-message labels in the client UI or prior context; build the ID→person map once and reuse it.
- Messages `GET /v1/chats/{urlencoded-id}/messages?limit=N`: entries carry `body` (HTML — `<br>`, `<p>`, entity-encoded `&amp;`), `sender`/`senderID`, ISO-8601 `timestamp`. Strip tags before quoting. Requests via nested SSH hops have long RTTs — fetch once with a generous `limit` and process locally.
- **iMessage chat reads (verified 2026-11-06):** `imsg##thread:<sha>` ids work with the messages endpoint, but the response key is **`items`** (not `messages`), and fields are `text` (plain, no HTML), `senderName`, `isSender`, `timestamp`. The same endpoint returns **HTTP 500 for `!…:beeper.local` relay chat ids** (e.g. Telegram crew threads) — for those, use `GET /v1/messages/search?query=<term>` and filter results by `chatID`; search returns full message text across ALL networks, so it doubles as a cross-network scanner. iMessage group chats surface in search under the bridge sender name (e.g. "Group Instinct"), and `GET /v1/chats/search?query=` may type a group as `single` — trust the participant/sender names over the `type` field.

## Error Handling

**Common issues:**

1. **Connection refused: distinguish transport failure from an inactive app.**
   - If the gateway connection fails, check the configured Mac over SSH and probe its local API through the existing authenticated remote helper before falling back to backups. When a live read of a chat was requested, escalate to the SSH-hop lane below before substituting screenshots or archives — a fallback source is a last resort, not an equivalent.
   - **Verified hop lane when the tunnel is absent and direct SSH is refused:** chain SSH through a bastion host that holds working keys: `ssh -i <key> <bastion-user>@<bastion> 'ssh -o BatchMode=yes <user>@<beeper-host> "python3 -"' < script.py`. stdin and the script pass through both hops, so write ONE Python script that runs on the Beeper host (token read + all API calls) instead of chained curls through nested quotes.
   - If the Mac is reachable but its local API refuses connections, inspect the app process with `pgrep -ifl Beeper`. If absent, discover the installed bundle in `/Applications` and `~/Applications`; launch its exact path. For the verified bundle, use `open -a "/Applications/Beeper Desktop.app"`, wait ~25s, then probe `curl -s -o /dev/null -w '%{http_code}' http://localhost:23373/v1/accounts` — **401 means the API is UP** (auth required, expected); connection refused means not ready yet.
   - API auth on the Mac: read the token from `~/Library/Application Support/BeeperTexts/account.db` (`select access_token from account limit 1`) and send `Authorization: Bearer <token>` against `http://localhost:23373/v1`. Never print the token.
   - Re-run `python3 scripts/beeper-remote-api.py GET '/v1/accounts'` (from the skill directory) and confirm the requested network is connected before searching chats. A successful app launch alone does not prove API or connector readiness.
   - Use backups when live recovery fails and state their cutoff; an inactive app is not evidence that the chat is absent.

2. **Chat not found**
   ```
   ❌ No chat found with: Name
   ```
   → Check spelling or use search-chats.sh to find exact name

3. **Invalid token**
   ```
   Error: Unauthorized
   ```
   → Update `~/clawd/secrets/beeper.json` with correct API key

## API Documentation

Full API reference: https://developers.beeper.com/desktop-api-reference

**Key endpoints:**
- `/v1/accounts` - List connected platforms
- `/v1/chats` - List/search chats
- `/v1/chats/{id}/messages` - Send/list messages
- `/v1/messages/search` - Search all messages

**SDKs available:**
- TypeScript: `@beeper/desktop-api`
- Python: `beeper_desktop_api`
- Go: `github.com/beeper/desktop-api-go`

## Comparison: API vs AppleScript

**Old approach (AppleScript):**
- ❌ Requires UI manipulation
- ❌ Fragile (UI changes break it)
- ❌ Slow (typing simulation)
- ❌ Can fail if UI is different

**New approach (API):**
- ✅ Direct API calls
- ✅ Reliable and fast
- ✅ No UI dependency
- ✅ Programmatic control
- ✅ Returns confirmation

## Notes

- API runs locally on Mac and is forwarded to the agent with an SSH tunnel
- Beeper Desktop must be running for API to work
- All messages are end-to-end encrypted when supported by platform
- Chat IDs are stable and can be stored for repeated messaging
- Peter/steipete's `wacrawl` can be installed on the Beeper host as a WhatsApp-only local archive/search complement, but it does not replace Beeper for Discord, LinkedIn, Instagram, Telegram, X, or cross-network search
