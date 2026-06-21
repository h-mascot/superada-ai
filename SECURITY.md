# Security Policy

## Reporting

Report security issues privately to Henry or the Enterprise Crew operator channel. Do not open public issues containing credentials, tokens, unpublished resources, customer data, private logs, or reproduction details that expose infrastructure.

## Repo Rules

- Do not commit secrets or real `.env` files.
- Use `.env.example` for names only, never values.
- Store publish tokens such as `CLAWDHUB_TOKEN` in GitHub Secrets.
- Rotate any credential that was committed, logged, pasted into chat, or exposed in CI output.
