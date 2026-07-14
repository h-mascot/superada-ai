# Global Linear API access for Cursor project execution packs

When Cursor cannot access Linear and asks for OAuth, prefer global/env-based API access instead of OAuth.

## Pattern

- Source of truth for the secret on Enterprise is `<HOME>/.hermes/.env` with `LINEAR_API_KEY`.
- Set the per-user launchd environment for GUI apps:

```bash
set +x
# Read LINEAR_API_KEY without printing it, then:
/bin/launchctl setenv LINEAR_API_KEY "$LINEAR_API_KEY"
```

- Ensure new zsh terminals load the key quietly from `<HOME>/.hermes/.env` via `~/.zshenv`.
- Verify without printing the secret:

<REDACTED>
/bin/launchctl getenv LINEAR_API_KEY >/dev/null && echo launchd-present
/bin/zsh -lc '[[ -n "$LINEAR_API_KEY" ]] && python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py whoami >/tmp/linear-whoami.json'
rm -f /tmp/linear-whoami.json
```

## Prompt guidance

Generated goal-mode prompts should say:

- use global `LINEAR_API_KEY`;
- if Cursor cannot see it, do **not** OAuth;
- open a fresh terminal or source `<HOME>/.hermes/.env` non-verbosely;
- never print, paste, log, commit, or write the key into repo files.

## Operational note

Already-open Cursor windows/terminals may not inherit a newly set launchd env. Open a new terminal first; if still missing, fully quit and reopen Cursor.
