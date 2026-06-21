# AGENTS.md - SuperAda.ai

## Source Of Truth

- GitHub repo: `h-mascot/superada-ai`
- Canonical local workspace: `/Users/henrymascot/Code/superada-ai`
- Product: SuperAda.ai Astro site and public resource atlas
- Preserve unrelated changes, especially `codedb.snapshot`, generated output, and Henry edits.

## Commands

- Install: `npm ci`
- Dev: `npm run dev`
- Build gate: `npm run build`
- ClawHub dry-run: `npm run clawhub:plan`
- ClawHub publish: `npm run clawhub:publish` with `CLAWDHUB_TOKEN` in GitHub Secrets

## Agent Workflow

- Read `skills/superada-ai/SKILL.md` before site structure, resources, subscription, navigation, or deploy changes.
- Check `git status --short` before edits.
- Keep local checks focused; GitHub Actions is the final CI gate.
- Run Codex/autoreview before commit or PR.
- For visible UI changes, capture browser proof and check console/page errors.
- Do not add secrets to the repo. Use GitHub Secrets for publish tokens.

## Known Bootstrap Follow-up

This repo currently has both `package-lock.json` and `pnpm-lock.yaml`. CI uses npm because `package-lock.json` is present; resolve the lockfile drift in a separate focused PR.
