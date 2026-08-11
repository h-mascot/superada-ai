# Receipt contract

## Payload receipt

```json
{
  "period": "<period>",
  "cohort_count": 0,
  "write_person_count": 0,
  "key_result_count": 0,
  "excluded_people": [{"person_id": "<id>", "reason": "<reason>"}],
  "normalization_rule": "<approved rule or none>",
  "payload_sha256": "<sha256>"
}
```

## Write receipt

```json
{
  "target_id": "<entity id>",
  "method": "PATCH",
  "route_template": "/api/<resource>/<id>",
  "submitted_count": 0,
  "accepted_count": 0,
  "http_status": 200,
  "timestamp_utc": "<ISO 8601>",
  "response_sha256": "<sha256>",
  "retries": 0
}
```

Do not publish session cookies, authorization headers, raw tokens, or private response bodies.

## Readback receipt

```json
{
  "submitted": 0,
  "verified": 0,
  "unverified": 0,
  "mismatches": 0,
  "unverified_ids": [],
  "mismatch_rows": [],
  "readback_source": "<canonical source>",
  "timestamp_utc": "<ISO 8601>"
}
```

## Workbook receipt

```json
{
  "status": "VERIFIED",
  "spreadsheet_url": "<url>",
  "owner": "<verified owner>",
  "expected_people": 0,
  "person_tabs": [],
  "rows_by_person": {},
  "submitted_rows": 0,
  "preexisting_rows": 0,
  "blocked_rows": 0
}
```

## Invariants

- `verified + unverified = submitted` when every submitted row is represented by the reconciliation process.
- `mismatches = 0` before completion.
- Every expected person has a summary row and person tab.
- Every person outside the write payload has an explicit state and reason.
- Workbook source-row totals stay separate from current-run submitted totals.
