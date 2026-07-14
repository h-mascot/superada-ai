# Autonomous review non-stall policy (2026-06-23)

## Trigger

Henry corrected a Cursor driver run that stopped after OC-001 proof because Book/SuperAda review was still pending. The correction: autonomous project queues should not stop just because Book review would be redundant.

Core user preference:

> The goal is to be as autonomous as possible. If autoreview and thermo-nuclear review worked and all is good, and Book review is only wasting time, skip it and go to the next task. Never stall or stop unless there is a real blocker.

## Class-level rule

Book review is a signal, not a ritual. Use it when it adds judgment. Do not let it become the pacing bottleneck for healthy autonomous queues.

A Cursor driver may record an explicit waiver and continue when all applicable conditions hold:

- issue proof exists and is green;
- Codex autoreview + thermo-nuclear review passed for high-risk work, or the project-configured equivalent review gates passed;
- diff is issue-scoped and allowlisted;
- secret/security scans are clean;
- no destructive action, push, merge, payment, OAuth, credential, or production-data operation is needed;
- no ambiguous product/architecture decision is being made by the agent;
- source authority is clear.

For documentation / inspection / bootstrap issues with no tracked source/runtime diff and green proof receipts, Henry's standing non-stall waiver applies even if the stronger automated review gates are not materialized yet. Record the waiver and continue.

## Required artifact

Do not silently skip. Write a machine-readable receipt such as:

```json
{
  "issue": "OC-001",
  "decision": "APPROVED_TO_CONTINUE",
  "safeToContinue": true,
  "bookReviewSkipped": true,
  "skipReason": "Henry standing autonomy policy: proof green, no tracked source/runtime diff, no real blocker.",
  "evidence": {
    "proofFiles": ["output/proof/OC-001/final-qa.md"],
    "trackedDiff": "clean",
    "reviewGates": ["codex-autoreview", "thermo-nuclear"]
  },
  "stopOnlyFor": [
    "failed proof",
    "dirty/unrelated scope",
    "secret/security risk",
    "destructive/push/merge action",
    "ambiguous product decision",
    "missing source authority"
  ]
}
```

Store it near the issue receipts, e.g. `output/proof/<ISSUE_ID>/book-review-skipped-waiver.json`, or under the configured book-review receipt directory if the project has one.

## Driver behavior

When a worker exits cleanly at a Book-review/verify gate:

1. Inspect live state: cron metadata, driver state, worker process/log, git status, run-state, proof receipts, review receipts.
2. If the non-stall conditions hold, write the waiver receipt, advance run-state to the next dependency-safe issue, and relaunch/resume Cursor CLI.
3. Update driver state with the waiver path, current issue, action taken, and next recommended action.
4. Report in one short line that the convoy moved; detailed evidence stays in files.

## Stop conditions remain real

This is not permission to plow through risk. Stop and escalate for:

- failed or partial proof;
- broad/dirty/unrelated diff;
- secrets, credentials, private defaults, or security-sensitive changes;
- irreversible/destructive actions;
- push/merge/release/deploy actions without authorization;
- ambiguous product or architecture decisions with no owning follow-up issue;
- missing or conflicting source authority.
