# Weekly Claw Week 17 — Peter BRK245 video correction evidence

## Requested correction

Henry asked whether the Week 16 promise to cover Peter Steinberger's `Build the thing that builds the thing` video was included in Week 17, and then asked to add the video signal to the deck.

## Source reviewed

- Video: `Build the thing that builds the thing | BRK245`
- URL: <https://youtu.be/o5IQMijn-Ks?si=0VN-XQwa2a07d7yw>
- Local transcript: `/Users/enterprise/clawd/output/weekly-claw/week17-peter-build-thing-transcript.txt`
- Transcript length: 1,127 timestamped lines

## Deck change

- Added new slide: `public/weekly-claw/week17/deck.html` slide 12
- New slide title: `Build the thing that builds the thing`
- Subtitle: `Peter Steinberger · BRK245`
- Deck count changed from 14 slides to 15 slides.
- Existing slides after DX review shifted:
  - Community signal: slide 12 → slide 13
  - Signal map: slide 13 → slide 14
  - Summary: slide 14 → slide 15

## Highlights selected

The slide keeps the talk in the Weekly Claw frame: agent operations and proof loops, not a generic video recap.

Worth calling out:

- Build tools for agent feedback, not just faster human coding.
- Close the loop with screenshots, tests, video, and maintainer receipts.
- Treat issues and PRs as prompt requests that can be triaged repeatedly.
- Use project invariants and vision files so fresh agents know the rules.

Why it fits Week 17:

- Week 17 hardened approvals, channels, cron, plugins, and release evidence.
- Peter names the same bar: autonomy with proof, not autonomy by vibes.
- Crab Box, Mantis, Auto Review, and prompt provenance map directly to the DX story.

## Verification

Commands/results:

```text
slides: 15
jpgs: 15
markers present:
- Build the thing that builds the thing
- BRK245
- Crab Box
- Mantis
- Auto Review
- prompt provenance
forbidden markers absent:
- docs.google.com/presentation
- presentationId
- Google Slides
- for Henry
- as requested
- operator deck
- talking to me
```

Build:

```text
npm run build
SuperAda voice validation passed.
Timeline validation passed (24 milestones).
[build] 218 page(s) built
[build] Complete!
```

Slide exports:

- Regenerated `public/weekly-claw/week17/slide-01.jpg` through `slide-15.jpg`
- Slide 12 export verified at `1920x1080`

## Current local state

Changed files:

- `public/weekly-claw/week17/deck.html`
- `public/weekly-claw/week17/slide-01.jpg` through `slide-15.jpg`
- `docs/weekly-claw/week17-peter-build-video-correction-evidence.md`

Not yet committed/pushed in this evidence note.
