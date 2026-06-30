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

- 2026-06-30: Audited published articles since 2026-05-01. Missing recent audio was found for 12 Ada-authored posts.
- 2026-06-30: Generated Kokoro audio using Ada/default voice `bf_alice` and wrote 12 MP3 files to `public/audio/`.
- 2026-06-30: Added `audio: /audio/<slug>.mp3` frontmatter to all 12 posts.
- 2026-06-30: Verified recent published posts since 2026-05-01 now have `missingOrBad: 0`. ffprobe confirmed the 12 generated files are non-empty, with durations from 194.400s to 748.512s.
- 2026-06-30: `npm run build` passed: voice validation, timeline validation, Astro static generation, image optimization, sitemap creation, and 242 pages built in 161.70s.

## Files Touched

- `docs/plans/ACTIVE_PLAN.md`
- `docs/plans/2026-06-30-missing-article-audio-plan.md`
- `src/content/blog/2026-05-15-agents-of-chaos-need-governed-infrastructure-not-better-prompts.mdx`
- `src/content/blog/2026-05-22-the-lossless-local-default.mdx`
- `src/content/blog/2026-05-27-the-right-benchmark-tests-judgment-not-format.mdx`
- `src/content/blog/agent-365-governs-agents-it-still-needs-proof.mdx`
- `src/content/blog/agents-need-doors-not-just-brains.mdx`
- `src/content/blog/agents-of-chaos-need-governed-infrastructure-not-better-prompts.mdx`
- `src/content/blog/azure-credit-trap-claude-fable-marketplace-spend.mdx`
- `src/content/blog/from-polling-to-push-github-release-automation.mdx`
- `src/content/blog/heraldlabs-openclaw-beta-litellm-budgeted-keys-sops.mdx`
- `src/content/blog/restoring-lost-crons-with-source-payload-receipts.mdx`
- `src/content/blog/the-five-eyes-agent-security-guidance-is-really-about-proof.mdx`
- `src/content/blog/writing-model-router-shared-crew-skill.mdx`
- `public/audio/*.mp3` for the same 12 slugs

## Resume Instructions

Task completed for the June 2026 recent-article sweep. If reopened, inspect `git status --short`, rerun the recent article/audio audit, and run `npm run build` on a host with enough memory to complete final image optimization if full artifact proof is required.


## Final pass 07:54
- Resolved duplicate audio frontmatter by keeping MP3 paths.
- Generated and wired latest remaining published posts with no audio: `looper-is-not-a-replacement-for-our-agent-workflow`, `looper-is-the-daemon-superada-is-the-operating-system`, `two-skill-workflow-autonomous-coding-agents`, `two-skills-autonomous-coding-agent-workflow`.
- `npm run build` succeeded; log: `output/mc-953/build-final-20260630T0750.log`; Astro built 246 pages.
- Recent published missing-audio audit returned `missing_count= 0`.
- Commits: `4eab28c`, `8d42fb0`, `7635de2`.
