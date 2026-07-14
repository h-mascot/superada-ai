# Live cron prompt edit technique (`~/.hermes/cron/jobs.json`) — 2026-06-24

## Why this exists

`hermes cron create` registers a fresh job; there is no documented `hermes cron update-prompt <job_id>`. When policy must reach an already-running driver this week (not the next cron someone happens to register), patch `~/.hermes/cron/jobs.json` directly. The cron runtime reads the prompt field on each tick — it does not cache or freeze the prompt at registration time.

## Procedure

1. Locate the cron by name, not by id, because the id is regenerated if anyone re-registers the job:

   ```bash
   python3 -c "
   import json
   data=json.load(open('<HOME>/.hermes/cron/jobs.json'))
   for j in data['jobs']:
       if j.get('name') in ('Entity Phase 2 Cursor driver','Mycelium V1 Cursor driver'):
           print(j['id'], j['name'])
   "
   ```

2. Back up the whole file before any edit:

   ```bash
   TS=$(date -u +%Y%m%dT%H%M%SZ)
   cp <HOME>/.hermes/cron/jobs.json \
      <HOME>/.hermes/cron/jobs.json.bak-<tag>-${TS}
   ```

3. Patch via `python3` (not `sed`) so quoting and newlines stay valid JSON:

   ```python
   import json, pathlib
   p=pathlib.Path('<HOME>/.hermes/cron/jobs.json')
   data=json.loads(p.read_text())
   for j in data['jobs']:
       if j.get('name') == 'Mycelium V1 Cursor driver':
           j['prompt'] = j['prompt'].rstrip() + '\n\n' + BLOCK.strip() + '\n'
   p.write_text(json.dumps(data, indent=2))
   ```

4. Verify the patch landed and the JSON is still valid:

   ```bash
   python3 -c "
   import json
   data=json.load(open('<HOME>/.hermes/cron/jobs.json'))
   for j in data['jobs']:
       if j.get('name') == 'Mycelium V1 Cursor driver':
           print('keyword in prompt:', 'Low-risk fast-path' in j['prompt'])
   "
   ```

5. The next cron tick (within `schedule.minutes`) loads the new prompt. No restart needed.

## Anchor points

Pick the insertion anchor based on what is already in the prompt:

- If the prompt ends with `Next cycle:`, prepend the block before that line.
- If the prompt ends with a known policy paragraph (e.g. "2026-06-23 safe-commit policy from Henry"), append after it.
- Otherwise, append to the end of `prompt` before any trailing whitespace.

Keep the diff small — a 5–10 line named block, not a rewrite of the prompt. The cron already has a long rule set; one more named block is auditable in seconds.

## Common pitfalls

- **JSON corruption via `sed`.** Multi-line inserts and quote-escaping will silently produce invalid JSON that breaks `hermes cron list`. Always use `python3`.
- **Forgetting the backup.** A bad patch leaves the cron running a half-edited prompt. Always `cp` first.
- **Patching by id without name verification.** Re-registered jobs change id. Name is the stable handle.
- **Believing the cron caches the prompt.** It does not. Reload happens at next tick. There is no `kickstart --reload-prompt`.
- **Editing the template but not `jobs.json`.** The template affects *future* crons. Live crons ignore the template until they are re-registered. Patch both surfaces when the rule must apply now.
- **Patching `jobs.json` without running the validator.** A bad prompt can fail the regex/JSON checks at next tick and silently degrade the cron. Run `scripts/validate_execution_pack.py` against the project pack after the patch.

## Worked pattern

2026-06-23 fast-path rollout:

- Backed up `jobs.json` to `jobs.json.bak-fastpath-20260624T001632Z`.
- Inserted the same 10-line named block into `Entity Phase 2 Cursor driver` (a0d4a39ec01e) and `Mycelium V1 Cursor driver` (4a4c132b06de).
- Validated with `grep -c "Low-risk fast-path"` → 1 per cron.
- Confirmed `hermes cron list` still parses (it crashed earlier on a bad `deliver` field, so test once before assuming the file is fine).
- Validator pass count unchanged: `58/58 PASS` against `Enterprise/Crew Home/Mycelium/v1-execution-pack`.

## Reading a cron prompt back out

```bash
python3 -c "
import json
data=json.load(open('<HOME>/.hermes/cron/jobs.json'))
for j in data['jobs']:
    if j.get('name') == 'Mycelium V1 Cursor driver':
        print(j['prompt'])
        break
" | head -120
```

Use this to confirm the patch is what you wrote, not what you thought you wrote.