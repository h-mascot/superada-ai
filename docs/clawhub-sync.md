# SuperAda to ClawHub Sync

SuperAda.ai is the editorial registry for public Enterprise Crew skills and workflow packs. ClawHub is the install and discovery registry.

```bash
npm run clawhub:plan
npm run clawhub:publish
```

## What Gets Published

- `src/data/skills.ts` entries with `availability: 'agent-installable'` and a GitHub `sourceUrl`.
- `src/content/workflows/*.md` entries with:
  - `status: Live`
  - `bundle.installable.supported: true`
  - `bundle.classification` not equal to `conceptual`

Conceptual, draft, internal, manual-only, and non-installable entries are skipped. If it cannot be installed, it should not be pushed into ClawHub as if it can.

## Workflow Packaging

ClawHub currently publishes skill folders, so installable SuperAda workflows are exported as generated workflow-skill wrappers under:

```text
.generated/clawhub/workflows/<slug>/SKILL.md
```

Those wrappers point back to the SuperAda workflow page, install command, source URL, verification notes, and safety limitations.

## Auth

Publishing requires a valid `clawdhub` login:

```bash
clawdhub whoami
clawdhub login
```

`npm run clawhub:plan` does not need auth. `npm run clawhub:publish` checks auth before uploading.

## Automatic Sync

GitHub Actions workflow `.github/workflows/superada-clawhub-sync.yml` runs on pushes to `main` when skill/workflow sources change. It needs one repository secret:

```text
CLAWDHUB_TOKEN
```

Until that secret is valid, the workflow will plan correctly and fail at login instead of pretending the resources were published.
