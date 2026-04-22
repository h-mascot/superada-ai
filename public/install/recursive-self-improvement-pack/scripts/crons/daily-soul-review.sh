#!/usr/bin/env bash
set -euo pipefail

ROOT="$HOME/clawd"
TODAY="$(date -u +%F)"
NOW="$(date -u '+%Y-%m-%d %H:%M UTC')"
YDAY_FILE="$ROOT/memory/$(date -u -d 'yesterday' +%F).md"
TODAY_FILE="$ROOT/memory/${TODAY}.md"
SOUL_TRACKER="$ROOT/memory/soul-tracker.md"
REFLECTIONS="$ROOT/memory/reflections.md"
REPORT_DIR="$ROOT/output/self-improvement"
REPORT="$REPORT_DIR/${TODAY}-daily-soul-review.md"
mkdir -p "$REPORT_DIR"

extract_recent_reflections() {
  python3 - <<'PY' "$REFLECTIONS"
from pathlib import Path
import sys
p = Path(sys.argv[1])
if not p.exists():
    print('(no reflections log yet)')
    raise SystemExit
lines = p.read_text().splitlines()
entries = []
cur = []
for line in lines:
    if line.startswith('### '):
        if cur:
            entries.append('\n'.join(cur))
        cur = [line]
    elif cur:
        cur.append(line)
if cur:
    entries.append('\n'.join(cur))
for entry in entries[-3:]:
    print(entry)
    print('\n---\n')
PY
}

cat > "$REPORT" <<REPORT
# Daily Soul Review — ${TODAY}

Generated: ${NOW}

## Purpose
Explicit daily introspection loop for Ada. This restores the missing dedicated soul-review ritual instead of relying only on scattered weekly/self-learning passes.

## Files to review
- ${YDAY_FILE}
- ${TODAY_FILE}
- ${SOUL_TRACKER}
- ${REFLECTIONS}

## Prompt checklist
1. Did I surprise Henry with value today?
2. Did I come back with solutions instead of questions?
3. Was I sharp, funny, and competent?
4. What did I build or ship today?
5. What should I improve tomorrow?
6. Which repeated failure pattern needs promotion into a rule, skill patch, cron patch, or workflow change?
7. Which item is only a thought, and which one deserves escalation into the recursive improvement pipeline?

## Yesterday notes snapshot
REPORT

if [[ -f "$YDAY_FILE" ]]; then
  sed -n '1,80p' "$YDAY_FILE" >> "$REPORT"
else
  echo '(yesterday note not found)' >> "$REPORT"
fi

cat >> "$REPORT" <<REPORT

## Today notes snapshot
REPORT
if [[ -f "$TODAY_FILE" ]]; then
  sed -n '1,120p' "$TODAY_FILE" >> "$REPORT"
else
  echo '(today note not found yet)' >> "$REPORT"
fi

cat >> "$REPORT" <<REPORT

## Recent reflection entries
REPORT
extract_recent_reflections >> "$REPORT"

cat >> "$REPORT" <<REPORT

## Action required
- Append or update today's entry in ${SOUL_TRACKER}
- If a clear repeated pattern appears, append a structured entry to ${REFLECTIONS}
- If the pattern is promotion-worthy, create or update a candidate for:
  - rules / SOUL updates
  - skill evolution
  - cron improvement
  - workflow guardrails

## Done criteria
- A same-day soul review entry exists or is intentionally updated
- Any repeated pattern is either captured in reflections or explicitly rejected
- High-signal improvements are handed to the weekly review / recursive improvement pipeline
REPORT

echo "🪞 Daily soul review prepared: $REPORT"
echo "Update: $SOUL_TRACKER"
echo "Reflect: $REFLECTIONS"
