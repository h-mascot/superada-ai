# Workflow Bundle Upgrade Plan

## Goal
Upgrade superada.ai from descriptive workflow listings to real workflow bundle packaging primitives so future requests like "take this and make it a workflow bundle and put it on the website" are operationally easy.

## Scope
- Define a canonical workflow bundle schema in site content
- Add actual bundle artifact metadata, install steps, and verification data
- Add downloadable bundle manifests/artifact views in the UI
- Seed at least one cron-first example that proves a cron can be shared as a bundle
- Keep manual install and manual review as the v1 operating model

## Checklist
- [x] Expand content schema for real bundle metadata
- [x] Create canonical bundle fields and artifact declarations
- [x] Update workflow detail page to expose bundle structure, artifacts, install steps, verification, and requirements
- [x] Update browse page messaging so it reflects real bundles instead of generic listings
- [x] Add at least one cron-first bundle example shaped like a reusable package
- [x] Verify build
- [x] Summarize the publishing workflow Henry can use later

## Resume
If context compacts, re-read this file and continue from the first unchecked item.
