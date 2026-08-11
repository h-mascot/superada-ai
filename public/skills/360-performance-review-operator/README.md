# 360 Performance Review Operator

Agent skill for preparing, submitting, and verifying manager ratings across a complete review cohort.

It keeps workbook coverage separate from write-payload scope, uses authenticated browser routes only after live discovery, and reconciles accepted writes against read-only API data.

## Install

```bash
curl -sSf https://superada.ai/install/360-performance-review-operator | sh
```

## Public files

- `SKILL.md`: workflow and completion contract
- `references/receipt-contract.md`: minimum payload, write, readback, and workbook receipt fields
