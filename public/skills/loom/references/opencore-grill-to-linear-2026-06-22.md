---
name: opencore-grill-to-linear-2026-06-22
description: Session-derived reference for the 2026-06-22 OpenCore V1 grill-to-linear run. Documents the working Oracle 5.5 Pro browser route (after Henry re-authed), the 1-token `I` failure mode on the merge pass, the mechanical in-session merge fallback, and the C/A/T/Q-style critique-merge pattern. Companion to grill-to-linear-execution-graph.
version: 1.0.0
author: Book
license: MIT
metadata:
  hermes:
    tags: [grill, superspec, oracle, opencore, mechanical-merge, i-failure, parent-merge]
    related_skills: [grill-to-linear-execution-graph, super-spec, model-routing-forensics]
---

# OpenCore V1 — grill-to-linear-execution-graph session (2026-06-22)

Worked example for `grill-to-linear-execution-graph`: Phase 1 SuperSpec + Phase 2 PRD/critique/canonical merge, with the merge-pass model failing and a mechanical in-session merge as the documented fallback.

## Inputs

- Source packet: `Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/opencore/grill-to-linear-20260622/phase0-source/opencore-phase0-source-packet.md` (132 KB; embeds the D1–D33 decision log and Phase 2 summary).
- Decision log: `Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/opencore/decisions.md`.
- Phase 2 summary: `Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/opencore/phase2-summary.md`.

## Outputs

| Artifact | Path | Bytes |
| --- | --- | --- |
| Canonical SuperSpec | `phase1-superspec/2026-06-22-opencore-v1-superspec.md` | 92,528 |
| Oracle PRD draft | `phase2-prd/prd-draft-oracle.md` | 80,159 |
| Opus critique memo | `phase2-prd/prd-critique-opus.md` | 15,449 |
| **Canonical PRD** | `phase2-canonical/opencore-v1-canonical-prd.md` | 90,521 |
| Merge receipt | `phase2-canonical/merge-receipt.json` | — |
| Phase 2 summary | `phase2-canonical/phase2-summary.md` | 1,964 |

Verify SHAs with `shasum -a 256 <path>`; the canonical PRD's SHA is also recorded inside the merge-receipt.json.

## Working Oracle 5.5 Pro browser route

Re-confirmed after Henry re-authed ChatGPT in the Enterprise remote Chrome session. Load-bearing call:

```bash
OUT="<HOME>/Enterprise/Crew Home/Output/Book/crew-project-dossiers-20260619/opencore/grill-to-linear-20260622/phase1-superspec"
INPUT=".../phase0-source/opencore-phase0-source-packet.md"
bash "<HOME>/Enterprise/Crew Home/Skills/super-spec/scripts/run-super-spec.sh" \
  --title "OpenCore V1 SuperSpec" \
  --input "$INPUT" \
  --model gpt-5.5-pro \
  --remote-chrome 127.0.0.1:53992 \
  --browser-tab current \
  --browser-attachments never
```

Key flags: `--remote-chrome 127.0.0.1:53992`, `--browser-tab current` (reuses the already-open signed-in ChatGPT Pro tab), `--browser-attachments never` (pastes the prompt inline; no Cloudflare upload dance).

Phase-1 route JSON: `status: ok`, `selected_route: oracle-browser`, `reason: browser_route_ok`, `pro_status: failed`. That is the **expected** state — `pro_status: failed` means the API preflight was skipped in favor of browser; it does not mean Oracle failed. Do not retry on `pro_status: failed` when the route JSON reports `selected_route: oracle-browser`.

## 1-token `I` failure mode on the merge pass

The Phase-1 SuperSpec, the Phase-2 Oracle PRD draft, and the Opus critique all completed cleanly. The **merge** prompt — which feeds the Oracle PRD draft and the Opus critique back into a second Oracle run — returned a 1-token `I` reply, with the full PRD text living only in ChatGPT's thinking pane. The captured transcript at `~/.oracle/sessions/merge-the-oracle-prd-draft/artifacts/transcript.md` contained the prompt echo but not the assistant reply (transcript ends with `## Answer\n\nI`).

This is a *fourth* failure shape distinct from the three already documented in `grill-to-linear-execution-graph`:

| Failure shape | Symptom | Existing escalation |
| --- | --- | --- |
| `I` reply (Helm) | compact-packet retry worked | step 2 in pitfalls |
| `I` reply (Hoshi, 3 prompt shapes) | fresh tab needed | step 4 in pitfalls |
| `I` reply + DOM has the response | CDP extract from live tab | step 5 in pitfalls |
| **`I` reply + DOM does not have the response** (OpenCore, 2026-06-22) | **mechanical in-session merge fallback** | **this reference** |

The OpenCore failure differed from Hoshi's because the ChatGPT response area was *literally* `I` — the model did not write a full PRD into the thinking pane either. The response simply did not arrive. Three retries on the same `browser-tab current` all produced the same 1-token `I`, confirming this is a tab/session-side problem on the merge tab, not a prompt-shape problem.

## Mechanical in-session merge fallback (the new option)

When the merge-pass model fails and the two input artifacts (Oracle PRD draft + critique memo) are both on disk and parseable, the documented fallback is to perform the merge **mechanically in the active session** instead of re-rolling through the model. Rules:

1. The merge **must be auditable**: emit a `merge-receipt.json` with the patch ledger (Opus issue ID → section affected → status).
2. The canonical PRD must include a **Change Log** table at the top that lists every applied patch and every kept-as-ticket item.
3. The canonical PRD must include a **Critique Issue Resolution** table mapping every Opus issue ID (C/A/T/Q/RK) to one of: `applied`, `kept as ticket`, `deferred`.
4. The merge MUST NOT add V2 features or invent new requirements; it is a *patch* of the Oracle draft, not a rewrite.
5. Apply patches as text-anchor replacements against the **actual** headings in the draft. Before patching, `re.search` every target heading (PRD-R ID, AC #, section name) against the live draft — Oracle drafts vary their headings across sessions, and `re.search` against a guessed anchor will silently no-op.
6. If a patch is non-trivial (e.g. "add a new SMOKE-AC acceptance criterion"), append to the most natural table cell instead of trying to insert in the middle of a paragraph. Future parsers will thank you.
7. The `merge-receipt.json` must record the failure of the merge pass (route, exit code, response bytes) so a later session knows the canonical PRD was produced by the mechanical fallback, not by a third-model merge.

When the OpenCore run hit this, the in-session merge produced 20 applied patches and 3 kept-as-ticket items in one Python script, with a final `merge-receipt.json` listing the source SHA chain (SuperSpec, Oracle PRD draft, Opus critique) and the per-patch ledger.

## C/A/T/Q-style critique merge mode

Opus's critique used a different taxonomy than the existing `helm-parent-merge.py` expects:

| ID prefix | Meaning in Opus's critique |
| --- | --- |
| **C1–CN** | Critical issues — apply in merge |
| **A1–AN** | Acceptance gaps — must clarify before Linear; resolve as safe assumption or promote to ticket |
| **T1–TN** | Traceability gaps — usually a missing D-number anchor; apply or keep as ticket |
| **Q1–QN** | Quality notes — non-blocking; apply only if it sharpens acceptance |
| **RK1–RKN** | Risks — preserve unchanged in §15 |

The existing `helm-parent-merge.py` only handles a literal `## MUST-FIX` heading. For C/A/T/Q-style critiques, the merge was performed with explicit per-patch `re.search` anchors (C1, C2, …) and a manual ledger. A future enhancement to `helm-parent-merge.py` would be to accept a `--critique-style {opuscq,heading,plain}` flag; the OpenCore run demonstrates the working pattern without that flag.

## What was applied vs kept as ticket in the OpenCore merge

**Applied (20 items):** C1 (per-call → per-operation audit), C2 (drop pack_id/pack_version), C3 (bounded retry for request_changes), C4 (Hoshi fixture determinism), C5 (audit-append failure injection), C6 (UUIDv7 output_id), A1 (no local auth), A2 (deterministic fake provider), A3 (minimal provider adapter contract), A4 (stale approval definition), A5 (tombstone default retention), A6 (log_only negative test), A7 (request_changes invalidates prior approval), T1 (D2 anchor on NFR-7), T2 (D3 anchor on PRD-R25), T5 (provenance field shape), Q1 (capability rename to produce_host_output), Q4 (cursor stability ticket), Q5 (V1 concurrency model ticket), Q7 (redaction is implemented, not just documented).

**Kept as ticket (3 items):** T3 (verify SuperSpec §8.7 sub-anchors), T4 (verify D25 vs D5 authority for PRD-R5 AC6), Q2/Q3/Q6 (lower-priority quality tickets).

The `merge-receipt.json` carries the full list and the source SHA chain. Stopping point per Henry's B selection: no Linear writes performed; canonical PRD ready for Henry review.

## Reusable patterns from this session

- **Always inspect the Oracle draft's actual headings before patching.** A `re.search` against a guessed anchor (e.g. "HOSHI-AC15-DET") will silently no-op if the heading is slightly different. Pattern: `print(needle in t)` after every patch.
- **When the merge-pass model returns `I` on the second attempt, check the `artifacts/transcript.md`** before assuming the response is recoverable. If the transcript ends with `## Answer\n\nI` and the prompt echo is the only content, the response truly did not arrive — switch to mechanical merge, do not try a third model call.
- **Always emit a `merge-receipt.json` with the patch ledger.** Even when the merge is performed by a model, the receipt is the durable signal downstream phases use to detect drift. The `linear_writes: 0` field is mandatory.
- **When Opus critique IDs don't match the `helm-parent-merge.py` heading regex, run the merge in-session with explicit `re.search` anchors and write the patch ledger manually.** This is slower than the deterministic script but auditable. The `helm-parent-merge.py` should grow a `--critique-style opuscq` flag to handle this case directly.
