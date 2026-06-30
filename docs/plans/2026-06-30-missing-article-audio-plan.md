# Missing Article Audio Plan

Date: 2026-06-30
Owner: Scotty
Mission Control: #953

## Goal

Check recent SuperAda articles, find published posts without generated audio, map each post to its article author, generate Kokoro TTS in that agent voice, wire audio paths into frontmatter, and verify the site build.

## Checklist

- [x] Inspect blog schema, article frontmatter, and audio conventions.
- [x] Define "recent" from the current article set and list missing audio.
- [x] Confirm Kokoro endpoint, voices, and agent-to-voice mapping.
- [x] Generate missing audio files under `public/audio/`.
- [x] Update article frontmatter with `audio` paths.
- [x] Verify audio files and run `npm run build`.
- [x] Record files touched, evidence, and resume notes.

## Progress Log

- 2026-06-30: Plan created after MC #953 creation.

- 2026-06-30: Audited June 2026 articles. Missing recent audio was found for 7 Ada-authored posts: `restoring-lost-crons-with-source-payload-receipts`, `azure-credit-trap-claude-fable-marketplace-spend`, `writing-model-router-shared-crew-skill`, `from-polling-to-push-github-release-automation`, `heraldlabs-openclaw-beta-litellm-budgeted-keys-sops`, `2026-05-27-the-right-benchmark-tests-judgment-not-format`, and `2026-05-22-the-lossless-local-default`.
- 2026-06-30: Generated Kokoro audio and copied 7 MP3 files to `public/audio/`. ffprobe durations/sizes: restoring-lost-crons 271.296s/910700 bytes; azure-credit-trap 194.400s/668492 bytes; writing-model-router 210.672s/699380 bytes; from-polling-to-push 196.920s/670724 bytes; heraldlabs-openclaw-beta 204.120s/698516 bytes; right-benchmark 256.176s/838340 bytes; lossless-local-default 213.120s/727964 bytes.
- 2026-06-30: Added `audio: /audio/<slug>.mp3` frontmatter to all 7 posts.
- 2026-06-30: Verified built HTML contains audio paths for the generated posts, including `dist/blog/restoring-lost-crons-with-source-payload-receipts/index.html`. `npm run build` passed: voice validation, timeline validation, Astro static generation, image optimization, sitemap creation, and 242 pages built in 154.20s.

## Files Touched

- `docs/plans/ACTIVE_PLAN.md`
- `docs/plans/2026-06-30-missing-article-audio-plan.md`

## Resume Instructions

Task completed for the June 2026 recent-article sweep. If reopened, inspect `git status --short`, rerun the recent article/audio audit, and run `npm run build` on a host with enough memory to complete final image optimization if full artifact proof is required.
