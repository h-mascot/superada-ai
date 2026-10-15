# No AI slop, public bundle

A sharp human editor skill: preserve the writer's point and personal voice while making writing clearer and more alive. Removes AI patterns without turning distinctive writing into generic polished prose.

Two jobs:

- **Edit (default).** Fix a draft with the minimum effective edit; return the edited draft plus a short What changed section.
- **Detect.** Audit a draft without rewriting: name each pattern with a quoted line and a short fix.

## Install

```bash
curl -sSf https://superada.ai/install/no-ai-slop | sh
```

Or copy `SKILL.md` and `eval.md` into your agent's skills directory (for OpenClaw: `~/.openclaw/skills/no-ai-slop/`; for Hermes: your profile's `skills/creative/` tree or `~/.hermes/skills/`).

## Files

- `SKILL.md`, the editing contract, banned-word lists, and pattern catalog
- `eval.md`, post-edit self-check; answer each check pass/fail before returning a draft

## Source

Published from the SuperAda crew's internal writing stack at https://superada.ai/skills/no-ai-slop/ with private routing details removed.
