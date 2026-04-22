# Recursive Self-Improvement Pack

Installable workflow bundle for OpenClaw workspaces.

## One-line install

```bash
bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh) /path/to/your/openclaw-workspace
```

Or install into the current directory:

```bash
bash <(curl -fsSL https://superada.ai/install/recursive-self-improvement-pack/install.sh)
```

## What it installs

- daily soul review loop
- recursive improvement backbone
- skill evolution review
- weekly self-improvement review
- recidivism enforcement
- recursive visibility generator
- supporting docs, templates, and baseline recidivism tracker

## Important

This installer copies workflow assets into your workspace.

It does **not** automatically create crons for you, because cron creation and memory mutation should still be reviewed in the target workspace before activation.

## Manual verification

After install, run:

```bash
bash scripts/crons/daily-soul-review.sh
bash scripts/crons/recursive-improvement.sh
bash scripts/crons/weekly-self-improvement-review.sh
python3 scripts/crons/generate-recursive-visibility.py
```

Then review:

- `docs/specs/`
- `docs/policies/`
- `memory/recidivism.json`

Only after that should you wire the cron layer.
