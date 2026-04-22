#!/usr/bin/env python3
import json
import os
import datetime
import sys

WORKSPACE = os.environ.get('WORKSPACE', os.path.expanduser("~/clawd"))
RECIDIVISM_FILE = os.path.join(WORKSPACE, "memory/recidivism.json")
MEMORY_FILE = os.path.join(WORKSPACE, "MEMORY.md")
CANDIDATES_DIR = os.path.join(WORKSPACE, "memory/improvement-candidates")

def load_json(path):
    with open(path, "r") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)

def append_to_memory(rule_name, rule_data):
    try:
        with open(MEMORY_FILE, "r") as f:
            content = f.read()
    except FileNotFoundError:
        content = ""

    header = "## Promoted Guardrails (Enforced)"
    
    # Extract text to inject
    fix_text = rule_data.get("fix", rule_data.get("note", "No note provided."))
    injection = f"- **{rule_name.replace('_', ' ').title()}**: {fix_text}\n"

    if header not in content:
        with open(MEMORY_FILE, "a") as f:
            f.write(f"\n{header}\n{injection}")
    else:
        # Find the header and insert after it
        parts = content.split(header)
        new_content = parts[0] + header + "\n" + injection + parts[1].lstrip('\n')
        with open(MEMORY_FILE, "w") as f:
            f.write(new_content)
    
    print(f"✅ Injected rule '{rule_name}' into MEMORY.md under Promoted Guardrails")

def create_candidate(rule_name, rule_data):
    """Integrates with Phase 2/3: if promoted rule violates again, trigger structural candidate."""
    os.makedirs(CANDIDATES_DIR, exist_ok=True)
    slug = f"recidivism-escalation-{rule_name}"
    candidate_file = os.path.join(CANDIDATES_DIR, f"candidate-{slug}.md")
    
    if os.path.exists(candidate_file):
        return

    content = f"""# Improvement Candidate: {slug}

**Status:** [PROPOSED]
**Created:** {datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}
**Classification:** STRUCTURAL_GUARDRAIL
**Source Signal:** CRITICAL (Recidivism Escalation)

## Source Reflection
Rule '{rule_name}' reached recidivism threshold, was promoted to MEMORY.md, and continued to be violated.
- **Violations:** {rule_data.get('violations', 0)}
- **Last Violation:** {rule_data.get('lastViolation', 'Unknown')}
- **Fix Note:** {rule_data.get('fix', rule_data.get('note', ''))}

## Proposed Action (Apply)
- [ ] Define a structural wrapper script or SKILL.md rewrite to physically prevent this action.
- [ ] Execute the changes.
- [ ] Change status to [APPLIED].
"""
    with open(candidate_file, "w") as f:
        f.write(content)
    print(f"⚠️ Escalated rule '{rule_name}' to candidate: {candidate_file}")

def process_rules():
    if not os.path.exists(RECIDIVISM_FILE):
        print("No recidivism file found.")
        return

    data = load_json(RECIDIVISM_FILE)
    rules = data.get("rules", {})
    updated = False

    for rule_name, rule_data in rules.items():
        violations = rule_data.get("violations", 0)
        severity = rule_data.get("severity", "NORMAL")
        
        # 1. Update notSticking status based on thresholds
        # Threshold: 3 violations for NORMAL, 2 for CRITICAL
        threshold = 2 if severity == "CRITICAL" else 3
        if not rule_data.get("notSticking") and violations >= threshold:
            rule_data["notSticking"] = True
            print(f"Rule '{rule_name}' crossed threshold ({violations} violations, {severity}). Marked as notSticking.")
            updated = True
                
        # 2. Promotion Logic (Phase 5 Enforce)
        if rule_data.get("notSticking") and not rule_data.get("promoted"):
            print(f"Promoting rule: {rule_name}")
            append_to_memory(rule_name, rule_data)
            rule_data["promoted"] = True
            rule_data["promotedAt"] = datetime.datetime.utcnow().isoformat() + "Z"
            updated = True

        # 3. Phase 2/3 Hooks: if promoted rule continues to be violated (e.g., hits 5, or 3 for CRITICAL)
        escalation_threshold = 3 if severity == "CRITICAL" else 5
        if rule_data.get("promoted") and violations >= escalation_threshold:
            create_candidate(rule_name, rule_data)

    if updated:
        save_json(RECIDIVISM_FILE, data)
        print("Updated recidivism.json")

if __name__ == "__main__":
    process_rules()
