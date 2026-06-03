# SuperAda to ClawHub Sync

SuperAda.ai is the editorial registry for public Enterprise Crew skills and workflow packs. ClawHub is the install and discovery registry.

```bash
npm run clawhub:plan
npm run clawhub:publish
```

## What Gets Published

- `src/data/skills.ts` entries with `availability: 'agent-installable'` and a GitHub `sourceUrl`. Optional `clawhubSlug` overrides the default `superada-skill-<slug>` ClawHub slug.
- `src/data/plugins.ts` entries with a GitHub `sourceUrl` and either a `clawhubSlug` or a non-Draft `status`. Optional `clawhubSlug` overrides the default `superada-plugin-<slug>` slug.
- `src/content/workflows/*.md` entries with:
  - `status: Live`
  - `bundle.installable.supported: true`
  - `bundle.classification` not equal to `conceptual`

Conceptual, draft, internal, manual-only, and non-installable entries are skipped. If it cannot be installed, it should not be pushed into ClawHub as if it can. Plugins that ship a real `SKILL.md` upstream are uploaded as-is; plugins that do not (most OpenClaw/Hermes plugins) get a synthesized `SKILL.md` generated from the SuperAda plugin record so the ClawHub package still satisfies the SKILL.md requirement.

## Workflow Packaging

ClawHub currently publishes skill folders, so installable SuperAda workflows are exported as generated workflow-skill wrappers under:

```text
.generated/clawhub/workflows/<slug>/SKILL.md
```

Those wrappers point back to the SuperAda workflow page, install command, source URL, verification notes, and safety limitations.

## Auth

Publishing requires a valid `clawdhub` login on the h-mascot account:

```bash
clawdhub whoami
clawdhub login
```

`npm run clawhub:plan` does not need auth. `npm run clawhub:publish` checks auth before uploading. The current key in `~/clawd/secrets/clawdhub.key` (and the matching `CLAWDHUB_TOKEN` GitHub secret) is rejected by the registry as `Unauthorized: API token is invalid or revoked`. Until that is rotated, both the local publish and the GitHub Action will plan correctly and fail at login instead of pretending the resources were published.

To rotate:

1. Run `clawdhub login` on a machine that has a browser (or use `clawdhub login --no-browser --token <new-token>`).
2. Write the new token to `~/clawd/secrets/clawdhub.key`.
3. Update the `CLAWDHUB_TOKEN` repository secret on the SuperAda GitHub repo.
4. Re-run `npm run clawhub:publish` locally, or push a `src/data/skills.ts` or `src/data/plugins.ts` change to retrigger the workflow.

## Automatic Sync

GitHub Actions workflow `.github/workflows/superada-clawhub-sync.yml` runs on pushes to `main` when skill, plugin, or workflow sources change. It needs one repository secret:

```text
CLAWDHUB_TOKEN
```

The CI also installs `undici@^7.22.0` alongside `clawdhub@0.3.0` because the CLI does not declare it as a dependency but uses it at runtime. Until the `CLAWDHUB_TOKEN` secret is rotated, the workflow will plan correctly and fail at login instead of pretending the resources were published.
