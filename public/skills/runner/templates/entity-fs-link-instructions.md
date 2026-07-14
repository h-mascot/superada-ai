# Entity FS Plan Link Instructions

Goal: publish `plan.md` where Entity can serve it as a stable human handoff docs page, with the raw API link only as a secondary machine artifact.

## Required output contract

Always return links in this order:

1. **Human handoff link** — primary, reader-facing:

```text
http://<REDACTED_IP>:3000/docs/source/<source>/<path>/plan.md
```

2. **Raw machine link** — secondary, script-facing:

```text
http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md
```

For the common Book output root:

```text
<HOME>/.hermes/output/{{PROJECT_SLUG}}/cursor-execution-pack/plan.md
http://<REDACTED_IP>:3000/docs/source/book/output/{{PROJECT_SLUG}}/cursor-execution-pack/plan.md
http://<REDACTED_IP>:3000/api/file/raw?source=book&path=output/{{PROJECT_SLUG}}/cursor-execution-pack/plan.md
```

For a repo-mounted source such as Geordi:

```text
{{REPO_ROOT}}/docs/execution-packs/{{PROJECT_SLUG}}/plan.md
http://<REDACTED_IP>:3000/docs/source/geordi/docs/execution-packs/{{PROJECT_SLUG}}/plan.md
http://<REDACTED_IP>:3000/api/file/raw?source=geordi&path=docs/execution-packs/{{PROJECT_SLUG}}/plan.md
```

## Generate/verify link

If available, use the local helper:

```bash
entity-fs-link.sh <HOME>/.hermes/output/{{PROJECT_SLUG}}/cursor-execution-pack/plan.md
```

If the helper is not on PATH, locate it before guessing:

```bash
find <HOME> -name entity-fs-link.sh 2>/dev/null | head -5
```

Verify both surfaces:

```bash
curl -fsS "http://<REDACTED_IP>:3000/docs/source/<source>/<path>/plan.md" >/tmp/plan-human.html
curl -fsS "http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md" >/tmp/plan-raw.md
```

If the docs/source route returns an SPA shell, that is still the correct human URL; verify content through the raw link and report both. Do not make the raw URL primary.

## Rules

- Do not create a Mission Control task just to get a link.
- Keep the public plan as a complete operating handoff: current state, rules, queue, gate, review ladder, active Cursor prompts, and bottom opt-in cron template.
- Do not include secrets, private credentials, raw transcripts, or unnecessary session chatter.
- If either link does not resolve, report the exact file path and HTTP/curl error.
