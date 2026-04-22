#!/usr/bin/env bash
set -euo pipefail

ROOT="$HOME/clawd"
REFLECTIONS="$ROOT/memory/reflections.md"
CANDIDATES_DIR="$ROOT/memory/improvement-candidates"
TODAY="$(date -u +%F)"

mkdir -p "$CANDIDATES_DIR"

echo "Running Recursive Improvement Pipeline (Classify & Promote)..."

# Python script to extract HIGH/CRITICAL unpromoted reflections and generate candidate files.
python3 - <<'EOF'
import sys
import os
import re
from pathlib import Path
from datetime import datetime

ROOT = os.environ.get('ROOT', '/home/henrymascot/clawd')
REFLECTIONS = Path(os.environ.get('REFLECTIONS', f'{ROOT}/memory/reflections.md'))
CANDIDATES_DIR = Path(os.environ.get('CANDIDATES_DIR', f'{ROOT}/memory/improvement-candidates'))

if not REFLECTIONS.exists():
    print("No reflections found.")
    sys.exit(0)

content = REFLECTIONS.read_text()
blocks = re.split(r'\n---\n|\n### ', '\n' + content)

for block in blocks:
    if not block.strip(): continue
    block = block.strip()
    if not block.startswith('['):
        # Maybe it's just the header or the split kept the '### ' off.
        # Check if it has a timestamp-like header.
        if re.match(r'^\d{4}-\d{2}-\d{2}', block):
            pass
        else:
            continue

    # Extract info
    title_match = re.search(r'^([^\n]+)', block)
    title = title_match.group(1).strip() if title_match else "Unknown"
    
    # Check signal strength
    signal_match = re.search(r'\*\*Signal strength:\*\*\s*(LOW|MEDIUM|HIGH|CRITICAL)', block, re.IGNORECASE)
    signal = signal_match.group(1).upper() if signal_match else "LOW"
    
    if signal not in ['HIGH', 'CRITICAL']:
        continue

    # Generate a slug from the timestamp in the title
    ts_match = re.search(r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2})', title)
    if not ts_match:
        continue
    
    ts_str = ts_match.group(1)
    slug = ts_str.replace('-', '').replace(' ', '-').replace(':', '')
    
    candidate_file = CANDIDATES_DIR / f"candidate-{slug}.md"
    
    if candidate_file.exists():
        # Already promoted
        continue
        
    print(f"Promoting HIGH/CRITICAL reflection to candidate: {candidate_file.name}")
    
    # Simple classification heuristic
    classification = "WORKFLOW"
    if "cron" in block.lower():
        classification = "CRON"
    elif "skill" in block.lower():
        classification = "SKILL"
    elif "rule" in block.lower() or "prompt" in block.lower() or "soul" in block.lower():
        classification = "RULE"
        
    candidate_content = f"""# Improvement Candidate: {slug}

**Status:** [PROPOSED]
**Created:** {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}
**Classification:** {classification}
**Source Signal:** {signal}

## Source Reflection
{title}

{block.split(title)[1].strip()}

## Proposed Action (Apply)
- [ ] Define the exact file changes needed (e.g., SKILL.md, SOUL.md, jobs.json).
- [ ] Execute the changes in the workspace.
- [ ] Update Status to [APPLIED] and append the commit hash or date of execution here.
- **Execution Notes:**
  - 

## Verification Plan (Verify)
- [ ] How will we know this worked? 
- [ ] Set a review date (usually 7 days after application) to check for recidivism.
- [ ] Review `memory/reflections.md` and related logs after the review date.
- [ ] Change status to [VERIFIED] or [REVERTED].
- **Verification Notes:**
  - 
"""
    candidate_file.write_text(candidate_content)

print("Candidate promotion complete.")
EOF

# Now, list active candidates for the weekly review
echo ""
echo "=== Current Candidates ==="
for c in "$CANDIDATES_DIR"/candidate-*.md; do
  if [ -f "$c" ]; then
    STATUS=$(grep -m 1 "\*\*Status:\*\*" "$c" | awk '{print $2}' || echo "[UNKNOWN]")
    echo "$(basename "$c") : $STATUS"
  fi
done
echo "=========================="

echo "Running Recidivism Enforcement (Phase 5)..."
"$ROOT/scripts/enforce-recidivism.py"

echo "Generating Phase 4 Visibility Report..."
"$ROOT/scripts/crons/generate-recursive-visibility.py"

echo "Integration complete."
