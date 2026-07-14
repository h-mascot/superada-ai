# Vision-routing fallback for pack validation screenshots (2026-06-22)

## Trigger

Pack validation sometimes requires reading a screenshot (UI proof, Entity Home error overlay, browser screenshot of a child issue's UI work). The session attempted `vision_analyze`, hit the Citadel concurrency gate (HTTP 429 with `max_concurrent_requests: 10 / available_concurrency: 0`), and retried a few times. Retries did not help; multiple agents in the fleet were fanning out vision calls at once.

## Lesson

Do not retry the same `vision_analyze` call when Citadel's concurrency gate is full. The 1–5s `retry_after_ms` is non-binding because other agents are still active.

## Recovery paths, in order

1. **Direct Azure Responses API.** Bypass Citadel entirely. The reusable wrapper lives at `~/.hermes/skills/book-vision-routing-azure/scripts/azure_vision_responses.py`. Authentication comes from `providers.azure-openai-responses` in `~/.hermes/config.yaml`.
2. **Local OCR (tesseract).** For text-only verification (Entity error overlays, log captures, code screenshots): `/opt/homebrew/bin/tesseract <file> stdout --psm 6`. `--psm 6` is correct for uniform block-of-text screenshots; `--psm 3` misses structure on slide-style images.
3. **Explicit "ignore overlay" prompt.** When the screenshot is dominated by an overlay (e.g. Entity Home "Failed to load document" covering a real VS Code window), add an explicit "ignore the overlay text, transcribe only what's underneath" instruction to the vision model. PIL crops + 2× upscale did NOT help in production testing.
4. **Re-upload.** If the overlay is opaque and structural, ask for a fresh screenshot with the overlay closed.

## Pitfall

Do not invent the content of an image you could not actually see. In this session the earlier turn produced a "VS Code CDK Go Lambda API Gateway" description that was hallucinated — the actual screenshot showed an Entity Home "Failed to load document" error. Cross-check any LLM-described screenshot content with at least one of:
- OCR output
- The user describing what they meant to upload
- A direct Azure Responses API vision call

The hallucinated description created downstream confusion (assumed the wrong project was being worked on) and had to be re-verified with a direct Azure call.

## Where this lesson lives

- This reference: pack-specific context (why the screenshot was needed during pack validation).
- `book-vision-routing-azure`: the umbrella skill. Its `SKILL.md` already covers the bypass technique and the OCR fallback in detail. Cross-link from this file when you need to look it up.

## Verification probe (run from this skill's context)

```bash
# Direct Azure Responses API, bypasses Citadel's concurrency gate:
python3 ~/.hermes/skills/book-vision-routing-azure/scripts/azure_vision_responses.py \
    /path/to/screenshot.png \
    "Ignore any overlay text. Transcribe only what is underneath." \
    gpt-5.5
```

If the script returns HTTP 429 or a Citadel proxy error, the underlying issue is Azure quota, not Citadel — escalate rather than retrying.

## Related

- USER profile rule: "Model attribution = NEVER trust response.model from a proxy" — same principle applied to image content claims.
- USER profile rule: "Image/screenshot answers must use the current provided image; if uncertain, say so rather than guessing" — apply this before pasting any screenshot description.
