# SuperSpec Oracle GPT-5.5 Pro browser default update — 2026-06-21

## Durable lesson

SuperSpec's default route was changed from GPT-5.4 Pro direct Azure to **Oracle GPT-5.5 Pro in Enterprise browser mode**.

This is not a one-session exception. Treat it as the class-level default for post-grill/spec generation unless Henry explicitly changes it again.

## Required default route

- Model: `gpt-5.5-pro`
- Engine: Oracle browser mode: `npx -y @steipete/oracle --engine browser`
- Host: Enterprise Mac
- Browser target: signed-in Chrome/ChatGPT tab exposed through remote debugging
- Required flags: `--remote-chrome 127.0.0.1:<debug_port> --browser-tab current`
- Browser attachments: usually `--browser-attachments never`
- Timeout: long enough for spec generation, normally `--timeout 3600`

## Fail-closed rule

If Oracle 5.5 Pro browser mode is unavailable, stop and report the route failure. Do **not** silently substitute:

- GPT-5.4 Pro
- GPT-5.5 non-Pro
- Codex
- LiteLLM
- local/runtime model
- direct Azure generation

API probes are evidence only. They may prove deployment/key reachability, but API generation has failed even when preflight succeeded. Browser mode is the generation path.

## Active files touched in the correction

- `~/.hermes/skills/software-development/super-spec/SKILL.md`
  - runtime path symlinks to `<HOME>/Enterprise/Crew Home/Skills/super-spec/SKILL.md`
- `~/.hermes/skills/software-development/super-spec/scripts/run-super-spec.sh`
- `~/.hermes/skills/software-development/super-spec/scripts/gpt54pro-oracle-preflight.sh`
  - filename retained for compatibility; now probes `gpt-5.5-pro` as evidence only
- `~/.hermes/skills/mlops/model-routing-forensics/references/oracle-55pro-browser-override.md`
- `~/.hermes/skills/ops/enterprise-crew-home/references/super-spec-azure-oracle-routing.md`
- `~/.hermes/skills/software-development/loom/SKILL.md`

## Verification pattern

Run after any future route edit:

```bash
bash -n ~/.hermes/skills/software-development/super-spec/scripts/run-super-spec.sh
bash -n ~/.hermes/skills/software-development/super-spec/scripts/gpt54pro-oracle-preflight.sh
python3 - <<'PY'
from pathlib import Path
p = Path('<HOME>/.hermes/skills/software-development/super-spec')
print('runtime', p, 'real', p.resolve())
for rel in ['SKILL.md','scripts/run-super-spec.sh','scripts/gpt54pro-oracle-preflight.sh']:
    txt = (p / rel).read_text()
    print(rel)
    for needle in ['gpt-5.5-pro','--engine browser','--remote-chrome']:
        print(' ', needle, needle in txt)
PY
```

Then grep active docs/scripts for stale **positive** 5.4 default language. Ignore negative guardrails like “do not fall back to GPT-5.4 Pro.”

## Process lesson

A delegated subagent may time out after partially patching the skill. Parent must inspect the partial edits, finish the patch, run syntax/readback verification, and only then report completion. Do not trust a timed-out child as done or revert its partial useful edits blindly.
