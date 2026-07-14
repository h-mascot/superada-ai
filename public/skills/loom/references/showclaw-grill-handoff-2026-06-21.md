# ShowClaw dossier → grill → handoff (2026-06-21)

A worked example of the Phase 0 / source-packet shape for a non-Entity grill, complementary to the Helm v1 reference.

## Inputs

- Phase 1 dossier: `crew-project-dossiers-20260619/showclaw/evidence.md` (242 lines, product + history + unknowns + recommended grill questions).
- Phase 2 spine:
  - `showclaw/grill-pack.md` — settled evidence, tensions, interview path, minimum decisions, live runtime probes.
  - `showclaw/grill.md` — current question/status, decided items, open items, resume verification block.
  - `showclaw/decisions.md` — dated Henry decisions, one entry per answer, append-only.
  - `showclaw/opus48-brainstorm/` — Citadel Opus 4.8 second-model brainstorm artifacts (manifests + reports).
- Live state probed in `grill-pack.md`: `https://showclaw.ai/`, `https://www.showclaw.ai/`, source-of-truth repo at `<HOME>/Code/repo-seeding-20260619/showclaw`, Vercel project id, byte-compared `dist/index.html` to served HTML, Entity app `/showclaw/entity-featured` route.
- Reference prior art: `https://openclaw.ai/showcase` — 110550 bytes, Astro + Fontshare, fetched live, used as prior-art read in D4.

## Decisions reached (D1 → D5)

- **D1 — Identity frame.** ShowClaw = public showcase of what people are doing with their agents. Proof-first remains editorial bar. OpenClaw-only framing dropped. Brand opens to any agent builder.
- **D1.1 — Correction to D1.** Human is the actor; agent is the tool; page is about the **workflow**, not the **output**. Submission intake and proof bar reframe around workflow artifacts.
- **D2 — Surface scope.** Choose B: hand-write 3–5 real "what I did with my agents" workflow pages first. No backend / full PRD / submission platform in the first pass.
- **D3 — v0 seed workflow set and order.** Accept all five; order Henry backlog, Hoshi, Entity, Soteria, BenchBoard. Evidence-driven, not symmetry-driven.
- **D4 — OpenClaw showcase data read and what it means for ShowClaw frame.** OpenClaw showcase = social-proof wall with like-count trophy framing. ShowClaw must frame as "How people work with agents." Adopt: `failure_modes` required, verb-actor title template, human_actor required, typed-mix receipt rule, no ❤️ metric on card. Two Citadel Opus 4.8 reports converged on these; they disagree on receipt count (Q5) and publish order (Q4.x).
- **D5 — Receipt-count disagreement surfaced for Henry.** Opus v1 says 3 receipts minimum with typed-mix. Opus v2 says 2 receipts to publish, 3 as "Verified" badge tier. Both agree on typed-mix + ≥1 workflow receipt + ≥1 different-kind rule. Henry chooses the count.

## How this maps to the Phase 0 input list

| Phase 0 input | Where it lives in the ShowClaw spine |
|---|---|
| completed Grill-Me decision log | `showclaw/decisions.md` (D1 → D5) |
| current product/spec docs | `showclaw/grill-pack.md` Adjacent docs checked section |
| code/runtime evidence | `showclaw/grill-pack.md` Live runtime probes section |
| latest user corrections | `showclaw/decisions.md` D1.1 (correction to D1) |
| explicit non-goals | D2 (no backend / full PRD / submission platform in first pass) |
| requested model route | `showclaw/opus48-brainstorm/manifest.json` + `manifest-v2.json` (Citadel `opus48` route receipts) |
| authority order when inputs conflict | `decisions.md` timestamp order; later D-numbers override earlier ones, but D1.1 is recorded as a correction, not an override |

## What the SuperSpec / PRD phases need to ingest

When this grill finishes Phase 2 and moves to SuperSpec / Oracle / PRD, the input packet should include:

1. The four ShowClaw spine files (`evidence.md`, `grill-pack.md`, `grill.md`, `decisions.md`).
2. The Opus 4.8 brainstorm directory (`opus48-brainstorm/`) including both reports and both manifests — these are the second-model critique equivalent and should be cited in the PRD traceability section.
3. The OpenClaw showcase fetch artifact (`/tmp/openclaw-showcase.html` or committed equivalent) for the prior-art read.
4. The full ShowClaw showclaw.ai live probe receipts (HTTP codes, byte sizes, asset hashes, Vercel project id) so the PRD can name the deployment target concretely.
5. A flag for unresolved Q5 (receipt count) and Q4.x (publish order) so the SuperSpec surfaces them as `## Open Questions` if the grill ends before they are decided.

## Pitfalls specific to this kind of dossier

- **The live site and the dossier definition may not match.** In ShowClaw, the live `showclaw.ai` meta description was broader than the canonical catalog definition. The grill's first decision (D1 + D1.1) had to reconcile that gap, and the recommended answer was to *update* the catalog framing to match the broader live framing plus the workflow-led correction, not to enforce the narrower catalog definition on the live site.
- **The OpenClaw showcase is a trap, not a template.** Its like-count trophy framing is exactly the failure mode ShowClaw must avoid. D4 names the trap explicitly in editorial guidance so future agents do not unconsciously copy it.
- **The Entity `/showclaw/entity-featured` route is off-brand under D1.1.** The grill's Q7 still has to decide whether to reframe it or leave it as a separate Entity-app surface. Carry this forward as an explicit open question.
- **Single-model N-iteration disagreement is signal, not noise.** D5 demonstrated that two Opus 4.8 iterations on the same prompt can disagree on the headline. The grill handoff preserves both reports + both manifests so the next phase can cite the disagreement and let the user call it.

## How this differs from the Helm v1 reference

The Helm v1 run (`references/helm-grill-linear-2026-06.md`) is a finished grill that already moved through PRD critique and Linear loading. The ShowClaw reference is a grill still mid-flight at the D5 disagreement — its value is showing the artifact spine at the moment a second-model brainstorm produces a divergence, and the discipline required to surface that divergence to the user instead of collapsing it.
