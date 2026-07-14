# Hoshi rerun: Entity link + CLI Tester normalization (2026-06-22)

## Trigger

Henry reported that the Entity link generated for the Hoshi Cursor pack did not load. Then he asked to rerun the pack skill after the skill had changed.

## Lessons to apply to any Cursor execution pack

### 1. Do not put the project slug in the Entity source slot

The broken Hoshi link used:

```text
/docs/source/hoshi/cursor-execution-pack-20260621/plan.md
```

That failed because `hoshi` is a project slug, not an Entity source. The working source was `crew-home` because the pack lived under:

```text
<HOME>/Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/hoshi/cursor-execution-pack-20260621/plan.md
```

The correct human link shape was:

```text
http://<REDACTED_IP>:3000/docs/source/crew-home/Output/Book/crew-project-dossiers-20260619/hoshi/cursor-execution-pack-20260621/plan.md
```

The raw link was:

```text
http://<REDACTED_IP>:3000/api/file/raw?source=crew-home&path=Output/Book/crew-project-dossiers-20260619/hoshi/cursor-execution-pack-20260621/plan.md
```

Rule: derive source ID from the registered Entity source root, not from project name. For Crew Home artifacts, source is `crew-home` and the path is relative to `<HOME>/Enterprise/Crew Home`.

### 2. Verify the reader route and the content route

A `/docs/source/...` URL may return the SPA shell with HTTP 200 even before content is proven. Verify content with at least one of:

```bash
curl -fsS "http://<REDACTED_IP>:3000/api/docs/source/<source>/<path>/plan.md"
curl -fsS "http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md"
```

Report both human and raw links. If either content route is 404, do not claim the handoff works.

### 3. CLI Tester config must match the live CLI schema

The live `project-test-gate` reads `config.proofCommands` as shell command strings. If you want detailed command metadata, keep it under a sidecar key such as `xProofCommandsDetailed`, but normalize:

```json
{
  "proofCommands": [
    "npm install --no-audit --no-fund",
    "npm run build",
    "npm run test:unit",
    "HOSHI_PERSISTENCE=db npm run ctrl:gate"
  ],
  "xProofCommandsDetailed": [
    { "name": "build", "command": "npm run build", "required": true }
  ]
}
```

Do not ship a config where `proofCommands` is an array of objects unless the CLI has been updated and verified to support that schema.

### 4. Book review gate must be explicit in generated configs

The updated pack standard requires:

```json
"bookReview": {
  "required": true,
  "mode": "packet",
  "receiptDir": "output/<project>/book-review"
}
```

`packet` mode creates a review packet and keeps continuation blocked until Book/SuperAda approval is represented. `run` PASS alone is not approval to continue.

### 5. Rerun output checklist

A rerun should produce/verify:

- `plan.md`
- `cursor-single-issue-prompt.md`
- `cursor-bounded-queue-prompt.md`
- `cursor-goal-prompt.md`
- `.project-gate.example.json`
- `run-state.example.json` or `cursor-autonomous-run-state.example.json`
- validation receipt from `scripts/validate_execution_pack.py`
- human link HTTP 200
- raw/API docs content HTTP 200
- Linear writes made this rerun, usually `0` unless cleanup was required
- **active Cursor prompt pasted inline in the chat reply** — see `references/inline-prompt-in-chat-2026-06-22.md`
