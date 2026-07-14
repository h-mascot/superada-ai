# Cursor CLI supervision and login lessons — 2026-06-22

Session-derived lessons from moving a Cursor-driver cron toward Cursor CLI instead of GUI-only control.

## Durable lesson

For autonomous project execution, prefer **Cursor CLI as the builder control plane** and keep the Book cron as a supervisor/recovery loop:

- `cursor agent --print --workspace <repo> ...` gives stdout/exit-code evidence instead of hidden GUI state.
- `--continue` / `--resume <chatId>` gives a real resume surface for recurring drivers.
- `--output-format json` or `stream-json` is better for cron parsing than screen scraping.
- GUI Cursor remains useful for human inspection and screenshot proof, but should not be treated as the primary API when a CLI route is available.

## GUI vs CLI Login Desync Pitfall

A major source of false-confidence is the Cursor GUI desktop app showing a logged-in status (e.g., "Henry Mascot / Curacel Team") while the CLI command `cursor agent status` (or `cursor agent about`) returns `Not logged in`.
- The CLI tool and the desktop GUI keep their credential profiles in different contexts.
- Sourcing `.env` files or checking `<HOME>/.hermes/.env` may also be insufficient if `CURSOR_API_KEY` or `CURSOR_AUTH_TOKEN` is blank or unset there.
- Do NOT assume that because Cursor is open and working on-screen, the background cron/CLI worker can authenticate.
- **Verification Rule:** Always run `cursor agent status` directly from the terminal to inspect active CLI auth, rather than checking the running GUI app process tree.

Recommended driver shape:

1. Check `cursor agent status` before assuming CLI is usable.
2. If not logged in, run `NO_OPEN_BROWSER=1 cursor agent login` in a tracked background PTY and extract the login URL from stdout.
3. Open the URL in Camofox or the approved browser route.
4. Complete OAuth without echoing secrets.
5. Verify with `cursor agent status`, `cursor agent models`, and a tiny `cursor agent --print --workspace <repo> "reply ok"` smoke before wiring cron to it.
6. Store the Cursor chat/session id in the driver state and use `--resume <chatId>` or `--continue` on future ticks.

## Login via Camofox pattern

When login must use Camofox:

- Start Camofox if health is down, but avoid parallel servers fighting over a profile.
- Run `NO_OPEN_BROWSER=1 cursor agent login` in a tracked background PTY; extract the current login URL from stdout and open it in Camofox immediately. Cursor CLI login links expire on a timer; if the CLI process exits with `Login failed or timed out`, start a fresh process and discard the old tab/link.
- Create a tab with the `cursor agent login` URL.
- Click `Continue to sign in`, then `Continue with Google` when requested. Camofox click calls may return a timeout even though navigation happened; always verify by snapshot before retrying or declaring failure.
- Enter the account email using `/act` with `submit:true` when ordinary click/press handling is flaky.
- If Google asks for passkey first, use `Try another way`. Prefer phone approval when Henry can tap the prompt promptly; otherwise use `Try another way` → verification code. The phone-code route may require confirming the account phone number before Google sends the SMS/code.
- Use Vaultwarden only as one credential source, not proof. If a stored Google password returns “Wrong password,” treat the vault item as stale and switch to on-device approval or verification-code flow instead of repeatedly submitting the same password.
- Pull secrets from Vaultwarden into RAM only; never print them or leave them in temp JSON/snapshots.
- After 2FA is satisfied, continue any Google/Cursor consent screens, then verify with `cursor agent status`, `cursor agent models`, and a tiny `cursor agent --print --workspace <repo> "reply ok"` smoke.

## Sensitive handling pitfall

Camofox snapshots can include textbox values. If a snapshot might contain a password, do not print the raw snapshot. Redact textbox values before displaying logs and delete temp snapshot files immediately.

## Camofox interaction pitfall

The Camofox `/type` route uses `locator.fill()`, not real keystrokes in the current server implementation. For login forms that behave differently with real keystrokes, focus the field and use `/press` where possible, or patch/use a route that calls `page.keyboard.type()` before concluding the credential is wrong.

## Cron report contract reminder

For Cursor-driver crons, keep chat reports tiny:

- Good path: one progress line plus safe screenshot/evidence.
- Blocked/fixed path: one short issue line plus one short fix/back-on-track line.
- Detailed receipts, changed-file lists, command logs, and tooling notes belong in driver state, not Discord.
