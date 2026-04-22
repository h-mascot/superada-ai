#!/usr/bin/env bash
set -euo pipefail

ROOT="$HOME/clawd"
CANDIDATES_DIR="$ROOT/memory/improvement-candidates"

echo "Running Skill Evolution Review..."

if [ ! -d "$CANDIDATES_DIR" ]; then
    echo "No candidates directory found."
    exit 0
fi

# Find all PROPOSED SKILL candidates
for candidate in "$CANDIDATES_DIR"/candidate-*.md; do
    if [ ! -f "$candidate" ]; then continue; fi
    
    # Check if it's proposed and a SKILL classification
    if grep -q "\*\*Status:\*\* \[PROPOSED\]" "$candidate" && grep -q "\*\*Classification:\*\* SKILL" "$candidate"; then
        
        # Check if we already evaluated it
        if grep -q "## Skill Evolution Evaluation" "$candidate"; then
            continue
        fi

        echo "Evaluating $candidate for skill evolution..."
        
        # Simple heuristic to determine boundary
        BOUNDARY="Safe Auto-Apply"
        REASONING="No dangerous keywords detected in the source reflection."
        
        if grep -iE "(api|curl|delete|rm |drop |exec |sudo|subagent|external)" "$candidate" >/dev/null; then
            BOUNDARY="Human Review Required"
            REASONING="Detected potentially destructive or external-facing keywords (api, curl, rm, exec, sudo, etc.) in the reflection."
        fi

        # Append the Evaluation Block
        cat <<EVAL >> "$candidate"

## Skill Evolution Evaluation
**Date:** $(date -u +'%Y-%m-%d %H:%M:%S UTC')
**Evolution Boundary:** $BOUNDARY
**Reasoning:** $REASONING

### Next Steps Checklist
- [ ] If Safe Auto-Apply: A subagent should write the patch directly to the target \`SKILL.md\` or \`references/\` directory, then change status to \`[APPLIED]\`.
- [ ] If Human Review Required: Generate a diff in \`output/patches/\`, ping the operator with the diff, and wait for approval before applying.
EVAL
        
        echo "Updated $candidate with evolution evaluation."
    fi
done

echo "Skill Evolution Review complete."
