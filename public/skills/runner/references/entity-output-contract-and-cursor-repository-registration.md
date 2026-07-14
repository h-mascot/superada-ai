# Entity Output Contract + Cursor Repository Registration Lessons

Session date: 2026-06-21

## Why this reference exists

Two failure modes surfaced while reusing the Helm-derived Cursor execution workflow for Entity and other projects:

1. The generated Entity pack returned a raw file API URL and a thin `plan.md`, not the Helm-style human handoff page Henry expected.
2. A request to “create/add repos/projects on Enterprise Cursor” was initially treated as repo/bootstrap/execution-pack work, when Henry meant Cursor’s **Repositories** sidebar registration UI.

Both are class-level lessons for future Cursor execution planning.

## Output contract lesson

Expected output from `runner` is a **human operating handoff**, not merely “raw markdown exists somewhere.”

Required final response order:

1. **Human handoff link**
   - Shape: `http://<REDACTED_IP>:3000/docs/source/<source>/<path>/plan.md`
   - This is the primary link to give another Book/Cursor session.
2. **Raw machine link**
   - Shape: `http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md`
   - Useful for scripts/verification, but secondary.
3. **Cursor-ready: yes/no + blockers**

The `plan.md` itself must be executable as a handoff page. It should include inline:

- current state
- blockers
- source inventory
- hard rules
- approved queue
- state file behavior
- per-issue flow
- shared CLI Tester gate
- proof commands
- commit/PR gates
- Codex/GitNexus/thermo review ladder
- active single-issue Cursor prompt
- active bounded-queue/autonomous prompt
- bottom opt-in cron/check-in template marked **do not run/register unless explicitly asked**

Do not make agents open sibling prompt files just to understand the core handoff. Sibling files are supporting artifacts; `plan.md` is the primary operating surface.

## Entity-specific correction example

Bad primary link:

```text
http://<REDACTED_IP>:3000/api/file/raw?source=geordi&path=docs/execution-packs/entity-phase-2-cursor-20260621/plan.md
```

Expected primary human link:

```text
http://<REDACTED_IP>:3000/docs/source/geordi/docs/execution-packs/entity-phase-2-cursor-20260621/plan.md
```

Raw link may still be included second.

## Cursor-ready wording lesson

Do not say Cursor can run merely because the pack validator passes. For Entity, validator passed after regeneration, but Cursor-ready remained **NO** because:

- live Linear body/source-key alignment was still failing; titles/source URLs mapped, but issue bodies lacked explicit source IDs such as `THE-6.1`;
- reviewed repo-root `.project-gate.json` was not present yet.

So the final answer must separate:

```text
Pack shape valid: yes/no
Cursor-ready: yes/no + blockers
```

## Cursor repository registration boundary

When Henry says variants of:

```text
create/add the repos/projects on our Enterprise Cursor
add them here
use the Repositories panel
```

he likely means **Cursor UI repository registration**, not execution-pack generation, GitHub repo creation, Linear setup, or local repo scaffolding.

Correct workflow:

1. Use the visible Cursor **Repositories** sidebar.
2. Click the folder-plus **Add Repository** icon, or use `⌥⌘A`.
3. Select existing local repo folders under `<HOME>/Code/<repo>`.
4. Verify each appears under **Repositories**.
5. Do not create GitHub repos, generate execution packs, start builds, or write Linear unless separately requested.

Report missing repos separately. Example from the session:

- `superada` correctly mapped to existing canonical `superada-ai`.
- `agentfood` was missing locally and on GitHub, so it was reported as missing and not created without approval.

## Pitfall phrasing for future sessions

If the task is about Cursor’s Repositories sidebar, say:

```text
This is a Cursor UI repository-registration task, not an execution-pack task. I’ll add existing local folders to Cursor’s Repositories list and verify they appear there. I won’t create repos, generate build packs, or start agents.
```

If the task is about autonomous building from Linear, then use the full execution-pack workflow.
