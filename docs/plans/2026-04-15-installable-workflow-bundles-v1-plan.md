# Installable Workflow Bundles v1 Plan

## Goal
Make workflow pages support a truthful v1 contract for agent-installable workflow bundles, so an agent can be given a workflow URL and determine whether it is truly installable, where it installs from, and which concrete commands or prompts to follow.

## Scope
- Add a minimal install contract to the workflow schema
- Surface the contract on workflow detail and index pages
- Upgrade real external bundles to include agent-readable install instructions and source information
- Keep conceptual and prompt-driven entries honest
- Verify with `npm run build`
- Commit and push to `main`

## v1 Contract
- `bundle.installSource` remains the human-readable source summary
- New `bundle.installable` block carries the agent-readable install contract
- Contract includes:
  - `supported`: whether the workflow is actually agent-installable now
  - `method`: install strategy (`openclaw-skill`, `script`, `prompt`, `manual`, `concept`)
  - `sourceUrl`: canonical bundle/source URL an agent can fetch or inspect
  - `sourceSpec`: install source spec an agent can pass directly to OpenClaw when applicable
  - `instructions`: short agent-readable install instructions
  - `postInstallVerification`: optional concrete verification command
  - `prompt`: optional launch prompt for prompt-driven flows
  - `limitations`: truthful caveats

## Checklist
- [ ] Create ACTIVE_PLAN pointing here
- [ ] Update content schema for installable workflow v1 contract
- [ ] Update workflow detail page to show installability contract clearly
- [ ] Update workflow index to show installability status at a glance
- [ ] Upgrade real installable workflow entries with concrete contract data
- [ ] Upgrade conceptual/prompt-driven entries with explicit non-installable contract data
- [ ] Run `npm run build`
- [ ] Commit and push to `main`

## Resume
If context compacts, re-read this file and continue from the first unchecked item.
