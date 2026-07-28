# SuperAda skills cleanup plan — 2026-06-22

## Goal
Audit and update SuperAda skill listings so the public site reflects current skill capabilities, has stronger descriptions/taglines/use cases, and avoids personal/private data leakage.

## Scope
- SuperAda repo: `/Users/enterprise/Code/superada-ai`
- Public skills registry: `src/data/skills.ts`
- Local public skill bundles: `public/skills/*`
- External linked repo snapshot: `h-mascot/enterprise-crew-skills` cloned to `/tmp/enterprise-crew-skills-audit` and, if edits are needed, to a working checkout under `/Users/enterprise/Code/enterprise-crew-skills`

## Steps
- [x] Inspect SuperAda repo, skill registry, and local skill catalog snapshot.
- [x] Dispatch requested gpt-5.4-pro audit attempt. Codex route rejected `gpt-5.4-pro`; Hermes route via `litellm-azure/gpt-5.4-pro` completed and wrote `/tmp/superada-skills-audit-hermes54pro.txt`.
- [ ] Sanitize external public skill sources linked from SuperAda.
- [ ] Update `src/data/skills.ts` descriptions/useCases/includes/instructions.
- [ ] Update local public `SKILL.md` descriptions that mention Henry/private framing.
- [ ] Run privacy scans over public skill files and registry.
- [ ] Run `npm run build`.
- [ ] Review git diff and report receipts.

## Verification commands
```bash
python3 scripts/privacy-scan-superada-skills.py  # if created, or inline equivalent
npm run build
git diff -- src/data/skills.ts public/skills docs/plans/2026-06-22-superada-skills-cleanup-plan.md
```

## Notes
- Do not echo secrets. If scan finds secrets, describe class/location only and remove or replace with placeholders.
- Leave unrelated untracked file `docs/weekly-claw/WEEKLY_CLAW_MEMORY.md` alone.
