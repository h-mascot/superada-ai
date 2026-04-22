#!/usr/bin/env bash
set -euo pipefail

ROOT="$HOME/clawd"
CANDIDATES_DIR="$ROOT/memory/improvement-candidates"
REPORT_DIR="$ROOT/output/self-improvement"
TODAY="$(date -u +%F)"
REPORT="$REPORT_DIR/${TODAY}-weekly-self-improvement.md"

mkdir -p "$CANDIDATES_DIR" "$REPORT_DIR"

cat > "$REPORT" <<REPORT
# Weekly Self-Improvement Review — ${TODAY}

Generated: $(date -u '+%Y-%m-%d %H:%M UTC')

## Purpose
Review all pending [PROPOSED] improvement candidates, verify recently [APPLIED] candidates, and orchestrate the physical mutation of the agent's workspace.

## Pending Candidates [PROPOSED]
REPORT

# Find PROPOSED candidates
PROPOSED_COUNT=0
for c in "$CANDIDATES_DIR"/candidate-*.md; do
  if [ -f "$c" ] && grep -q "\*\*Status:\*\* \[PROPOSED\]" "$c"; then
    echo "- $(basename "$c")" >> "$REPORT"
    PROPOSED_COUNT=$((PROPOSED_COUNT + 1))
  fi
done

if [ "$PROPOSED_COUNT" -eq 0 ]; then
  echo "(No pending candidates found)" >> "$REPORT"
fi

cat >> "$REPORT" <<REPORT

## Candidates Pending Verification [APPLIED]
REPORT

# Find APPLIED candidates older than 7 days (or just list APPLIED for manual check)
APPLIED_COUNT=0
for c in "$CANDIDATES_DIR"/candidate-*.md; do
  if [ -f "$c" ] && grep -q "\*\*Status:\*\* \[APPLIED\]" "$c"; then
    echo "- $(basename "$c") - Needs recidivism check" >> "$REPORT"
    APPLIED_COUNT=$((APPLIED_COUNT + 1))
  fi
done

if [ "$APPLIED_COUNT" -eq 0 ]; then
  echo "(No applied candidates awaiting verification)" >> "$REPORT"
fi

cat >> "$REPORT" <<REPORT

## Action Required
1. For each **[PROPOSED]** candidate:
   - Review the proposed diff or solution.
   - Execute the workspace mutation (update SKILL.md, SOUL.md, cron scripts, etc.).
   - Mark candidate as \`[APPLIED]\` with execution date/commit.
2. For each **[APPLIED]** candidate:
   - Review \`memory/reflections.md\` to ensure the issue has not resurfaced.
   - If fixed, mark as \`[VERIFIED]\`.
   - If resurfaced, mark as \`[REVERTED]\` or \`[ITERATING]\` and generate a new candidate.

## Execution
Run this report via the main agent context to physically apply the pending candidates.

REPORT

echo "Weekly self-improvement review prepared: $REPORT"
