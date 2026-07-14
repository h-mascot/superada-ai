# Human Approval Packet Protocol

Use this when autonomous repository runners must ask Henry for authority. Goal: informed decision in one screen, without decoding issue IDs, hashes, or implementation jargon.

## Authority split

Treat these as separate grants unless Henry explicitly combines them:

1. **Plan/artifact approval** — accepts reviewed scope or evidence.
2. **Execution approval** — permits a loader, API call, tracker mutation, send, deploy, purchase, or other side effect.
3. **Release approval** — permits merge, production deployment, customer exposure, or external commitment.

Never infer later authority from earlier approval. State each flag explicitly in manager state, for example:

```json
{
  "plan_approved": false,
  "writes_authorized": false,
  "loader_execution_authorized": false,
  "linear_write_authorized": false,
  "release_authorized": false
}
```

## Required first screen

Use this order:

1. **Decision needed** — one plain-English sentence.
2. **What changes** — system, object type, exact counts, fields/actions.
3. **What does not happen** — creates, deletes, writes, sends, deploys, charges, releases.
4. **Why now** — dependency and practical consequence.
5. **Evidence** — scope/review/conflict summary in normal language.
6. **Recommendation** — one choice and reason.
7. **Reply** — exactly `A — Approve`, `B — Reject`, `C — Defer`.
8. **Technical receipt** — IDs, paths, hashes, generations, provenance last.

If approval accepts a plan but does not execute it, say so twice: once under **What does not happen**, once immediately before reply options.

## Three-surface agreement check

Before notifying Henry, verify these three surfaces agree in substance:

- canonical packet file;
- rendered visible decision task;
- manager-state blocker row and authority flags.

Check title, object counts, operation type, non-actions, recommendation, reply choices, artifact hashes, task ID, and authorization booleans. Persist one agreement receipt with packet hash and rendered readback.

State-only claims are insufficient. A manager can correctly update JSON while leaving an old jargon-first packet or dangerous rendered task alive.

## Direct-human provenance

Only Henry's direct response grants authority. A decision task's own model-generated `A — Approve`, inferred sentiment, previous recommendation, or synthetic agent output is non-authoritative.

Record response text, source/message provenance, timestamp, packet fingerprint, and unchanged artifact hashes. If any scoped artifact changes, invalidate approval and ask again.

## Defective packet recovery

When a packet is missing, stale, opaque, contradictory, or over-broad:

1. Mark the visible task `INVALID` or withdraw it.
2. Set all execution/write/release flags false.
3. Repair canonical artifacts and hashes.
4. Rewrite packet impact-first.
5. Update or replace visible task without losing blocker identity/history.
6. Run three-surface agreement check.
7. Wait for direct Henry response; continue unrelated lanes.

## Worked pattern

Good:

> Approve a metadata-only plan to update one field on 131 existing tracker issues? 0 creates, 0 deletes, 0 conflicts. This approval does not execute the write; execution remains separately gated. Recommendation: A — Approve.

Bad:

> Approve exact DEL-004 artifacts for DEL-005? Fingerprint: `<hash>`. Read three repository paths.

The bad form asks Henry to reverse-engineer implementation provenance before understanding impact.