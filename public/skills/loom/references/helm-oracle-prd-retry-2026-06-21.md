# Helm PRD Oracle retry lesson — 2026-06-21

## Trigger

During Helm Grill → SuperSpec → PRD → Linear, Oracle GPT-5.5 Pro browser successfully generated the SuperSpec, but the first PRD draft attempt exited `0` with only:

```text
I
```

That output was 2 bytes / 1 line and was correctly rejected as `failed_unusable_output`.

## Initial mistake

A deterministic PRD was generated from the validated SuperSpec and used to continue toward Linear. The user corrected this:

> Never skip the oracle based spec … try again

For this workflow class, when Henry requested Oracle for SuperSpec/PRD, an Oracle failure or garbage output is **not** permission to substitute a local/deterministic PRD as authoritative.

## Correct recovery pattern

1. Record the bad Oracle output as a failed-unusable receipt:
   - route
   - log path
   - output path
   - byte/line count
   - sha256
   - why it is rejected
2. Build a compact retry packet instead of sending the overloaded full context again.
3. Re-run Oracle GPT-5.5 Pro browser with:
   - `--force`
   - fresh `--slug`
   - `--browser-attachments never`
   - explicit `--write-output`
   - no fallback
4. If the retry works, mark the Oracle artifact as the authoritative PRD.
5. Keep deterministic merge artifacts only as implementation/loader derivations unless Henry explicitly approves otherwise.
6. If all Oracle retries fail, report the exact blocker; do not substitute.

## Concrete receipts from the Helm run

- Bad draft: `phase2-prd/prd-draft.md`, 2 bytes, output `I`.
- Good Oracle retry: `phase2-prd/prd-oracle-authoritative.md`, 94,579 bytes / 2,139 lines, sha256 `447994ddc24a7d6c4f5b7108d5f362899213d6488f61416173a70b50d55f6c76`.
- Route: Oracle browser `gpt-5.5-pro` on Enterprise remote Chrome `127.0.0.1:53992`.

## Related Opus critique lesson

For Opus 4.8 critique, use Citadel `opus48` and provide the full PRD plus enough full SuperSpec/source body to cite sections/D-numbers. Passing only a checksum/path produced a weak critique that said it could not verify the SuperSpec.
