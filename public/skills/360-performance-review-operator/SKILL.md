---
name: 360-performance-review-operator
description: "Use when collecting, reviewing, submitting, and proving manager ratings across a performance review cohort. Produces a complete review workbook, controlled browser-authenticated submissions, and readback receipts without hiding omitted people or unverifiable rows."
version: 1.0.0
author: Enterprise Crew
license: MIT
metadata:
  hermes:
    tags: [performance-reviews, 360-feedback, okrs, evidence, browser-automation, google-sheets]
    related_skills: [evidence-ledger-operations, browser-automation]
---

# 360 performance review operator

Run a manager review from source inventory to verified submission. This skill is for performance systems where one surface provides read-only reporting while authenticated browser routes handle writes.

## Non-negotiable rules

- Define the complete review cohort before preparing ratings.
- Keep three states separate: submitted now, already rated, and not submitted.
- Never omit a person because they were absent from the write payload.
- Never turn team OKRs into personal OKRs to fill a gap.
- Treat an API as read-only until its live specification proves a write operation exists.
- Use only ratings approved by the manager. Record any normalization rule before applying it.
- Verify accepted writes through the strongest available readback surface.
- Report missing readback as unverified, not failed, unless a mismatch proves failure.
- Do not claim completion while any write mismatch remains.

## Inputs

Collect these before scoring:

- target period and review deadline;
- complete manager cohort;
- canonical employee identifiers;
- OKRs and key results for every person;
- self ratings, existing manager ratings, evidence links, and written justifications;
- role competency and 360 feedback data when available;
- explicit rating scale and manager normalization rules;
- authenticated browser session for the review platform;
- read-only API or export route for reconciliation.

## Workflow

### 1. Freeze the cohort

Build a cohort ledger before drafting any ratings:

| Person | Canonical ID | Source OKRs | Existing ratings | Submission state | Reason |
|---|---|---:|---:|---|---|

Every expected person must appear. If a person has no canonical personal OKRs, keep the row and mark the blocker. Do not remove them from the workbook.

### 2. Inventory source data

Fetch every available source using read-only routes first. Paginate until the returned total and collected count agree. Save raw responses with timestamps and source URLs.

For each key result, capture:

- employee and OKR identifiers;
- period, objective, and key result text;
- self rating and existing manager rating;
- evidence URL and access status;
- source justification;
- proposed manager rating;
- submission state.

### 3. Verify evidence

Check each evidence link. Record whether it is accessible, private, missing, or structurally invalid. When evidence is machine-readable, compare the claimed result with the underlying numbers.

Evidence quality informs review. It does not invent a rating. Keep source facts, manager judgment, and uncertainty in separate fields.

### 4. Build the manager workbook

Create one clean spreadsheet with:

- `Summary`: complete cohort, counts, averages, and submission state;
- one tab per person, including people with pre-existing ratings or blocked submissions;
- `Evidence Log`: one row per key result;
- `Submission Receipt`: accepted writes, readback coverage, mismatches, and unresolved rows.

Use explicit labels. A person omitted from the current write payload still needs a tab and a summary row.

Recommended person-tab columns:

```text
Period | Objective | Key Result | Proposed Rating | Existing Rating |
Self Rating | Evidence Status | Evidence Link | Submission State | Notes
```

### 5. Approve the payload

Generate a deterministic payload from the reviewed workbook. Validate before writing:

- every row has a canonical key-result ID;
- ratings obey the platform scale;
- normalization rules match the manager's written directive;
- no duplicate key-result IDs exist;
- payload count matches the intended write cohort;
- excluded people and rows have recorded reasons.

Save the payload and its SHA256 checksum.

### 6. Discover the authenticated write route

Inspect the live application while authenticated. Use browser developer tools or network logs to identify the route, method, request shape, and response contract used by the application.

Do not guess a write endpoint from a read-only API. Do not reuse stale routes without checking the current application.

### 7. Submit with bounded retries

Submit one logical update at a time or use the platform's proven batch unit. Record:

- target entity ID;
- request timestamp;
- HTTP status;
- response body or stable response hash;
- accepted rating count;
- retry count;
- error text.

Retries must be idempotent or preceded by readback. Stop on permission errors, closed review windows, schema changes, or unexpected redirects.

### 8. Reconcile readback

Read every submitted key result through the canonical inspection surface. Classify each row:

- `verified`: readback equals submitted value;
- `mismatch`: readback differs from submitted value;
- `unverified`: row is absent from readback or the readback surface cannot expose it.

Completion requires zero mismatches. Report accepted writes, verified rows, unverified rows, and mismatches as separate counts.

### 9. Publish the final review sheet

Update the spreadsheet from the reconciled receipts. Preserve full-cohort visibility:

- submitted people retain their verified counts;
- people with existing ratings are marked `pre-existing, not updated`;
- blocked people are marked `not submitted` with the exact source gap;
- totals distinguish all source rows from rows written in this run.

Verify owner, URL, tab names, row counts, frozen headers, filters, and conditional formatting before delivery.

## Completion contract

A complete run has:

- complete cohort ledger;
- one workbook tab per expected person;
- deterministic payload with checksum;
- write receipt for each submitted update;
- readback receipt with zero mismatches;
- exact list of unverified rows;
- explicit reasons for every excluded or blocked row;
- live spreadsheet URL and verified ownership.

Use `references/receipt-contract.md` for minimum receipt fields.

## Failure modes

- Payload-only scoping hides people who were already rated or blocked.
- A green write response does not prove stored values.
- A read-only API key label does not prove write capability.
- Missing API readback does not prove a browser write failed.
- Team-level OKRs are not a substitute for missing personal OKRs.
- A polished spreadsheet with incomplete cohort coverage is still incomplete.
