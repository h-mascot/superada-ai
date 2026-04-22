#!/usr/bin/env python3
import os
import json
import glob
import re
from datetime import datetime, timezone

ROOT = os.environ.get("ROOT", "/home/henrymascot/clawd")
CANDIDATES_DIR = os.path.join(ROOT, "memory", "improvement-candidates")
RECIDIVISM_FILE = os.path.join(ROOT, "memory", "recidivism.json")
REFLECTIONS_FILE = os.path.join(ROOT, "memory", "reflections.md")
OUTPUT_DIR = os.path.join(ROOT, "output", "self-improvement")

def load_json(filepath):
    if os.path.exists(filepath):
        try:
            with open(filepath, "r") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def read_file(filepath):
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            return f.read()
    return ""

def generate_visibility_report():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    report_lines = []
    now = datetime.now(timezone.utc)
    now_str = now.strftime("%Y-%m-%d %H:%M:%S UTC")

    report_lines.append(f"# Recursive Ops Visibility Report")
    report_lines.append(f"**Generated:** {now_str}\n")

    # 1. Candidate Funnel State
    report_lines.append("## 1. Candidate Funnel State")
    candidates = []
    
    for filepath in glob.glob(os.path.join(CANDIDATES_DIR, "candidate-*.md")):
        content = read_file(filepath)
        filename = os.path.basename(filepath)
        
        status_match = re.search(r'\*\*Status:\*\*\s*\[([^\]]+)\]', content)
        status = status_match.group(1) if status_match else "UNKNOWN"
        
        created_match = re.search(r'\*\*Created:\*\*\s*([^\n]+)', content)
        created = created_match.group(1).strip() if created_match else ""
        
        signal_match = re.search(r'\*\*Source Signal:\*\*\s*([^\n]+)', content)
        signal = signal_match.group(1).strip() if signal_match else "UNKNOWN"
        
        class_match = re.search(r'\*\*Classification:\*\*\s*([^\n]+)', content)
        classification = class_match.group(1).strip() if class_match else "UNKNOWN"
        
        candidates.append({
            "filename": filename,
            "status": status,
            "created": created,
            "signal": signal,
            "classification": classification,
            "filepath": filepath
        })

    # Group by status
    funnel = {}
    for c in candidates:
        funnel.setdefault(c["status"], []).append(c)

    statuses = ["PROPOSED", "APPLIED", "VERIFIED", "REVERTED", "UNKNOWN"]
    # add any other statuses found
    for s in funnel.keys():
        if s not in statuses:
            statuses.append(s)

    for status in statuses:
        items = funnel.get(status, [])
        report_lines.append(f"### [{status}] ({len(items)})")
        if not items:
            report_lines.append("- None")
        for item in items:
            report_lines.append(f"- **{item['filename']}** | {item['classification']} | Signal: {item['signal']} | Created: {item['created']}")
        report_lines.append("")

    # Identify Bottlenecks
    report_lines.append("### Unresolved Bottlenecks")
    bottlenecks = []
    for c in candidates:
        if c["status"] == "PROPOSED":
            try:
                # Try to parse Created: 2026-04-21 20:51:19 UTC
                c_date_str = c["created"].replace(" UTC", "")
                c_date = datetime.strptime(c_date_str, "%Y-%m-%d %H:%M:%S").replace(tzinfo=timezone.utc)
                days_old = (now - c_date).days
                if days_old > 7:
                    bottlenecks.append(f"- **{c['filename']}** stalled in PROPOSED for {days_old} days.")
            except Exception:
                pass
    if not bottlenecks:
        bottlenecks.append("- No immediate bottlenecks detected.")
    report_lines.extend(bottlenecks)
    report_lines.append("")

    # 2. Recidivism & Promotions
    report_lines.append("## 2. Recidivism & Promoted Rules")
    recidivism_data = load_json(RECIDIVISM_FILE)
    rules = recidivism_data.get("rules", {})
    
    promoted_rules = []
    not_sticking_rules = []
    active_violations = []

    for rule_id, data in rules.items():
        if data.get("promoted"):
            promoted_rules.append(f"- **{rule_id}**: Promoted to policy/skill. ({data.get('severity', 'UNKNOWN')} severity)")
        if data.get("notSticking"):
            not_sticking_rules.append(f"- **{rule_id}**: Escalated (Failed multiple times. Fix: {data.get('fix', 'None')})")
        
        # Any recent violation in the last 14 days
        last_violation = data.get("lastViolation")
        if last_violation:
            try:
                v_date = datetime.strptime(last_violation, "%Y-%m-%d").replace(tzinfo=timezone.utc)
                if (now - v_date).days <= 14:
                    active_violations.append(f"- **{rule_id}** violated on {last_violation}: {data.get('note', '')}")
            except Exception:
                pass

    report_lines.append("### Escalated / Not Sticking")
    if not_sticking_rules:
        report_lines.extend(not_sticking_rules)
    else:
        report_lines.append("- None")
    report_lines.append("")

    report_lines.append("### Promoted / Hardened")
    if promoted_rules:
        report_lines.extend(promoted_rules)
    else:
        report_lines.append("- None")
    report_lines.append("")

    report_lines.append("### Recent Violations (Last 14 days)")
    if active_violations:
        report_lines.extend(active_violations)
    else:
        report_lines.append("- None")
    report_lines.append("")

    # 3. Recent Learnings Summary
    report_lines.append("## 3. Recent Learnings (Raw Reflections)")
    reflections = read_file(REFLECTIONS_FILE)
    blocks = re.split(r'\n---\n|\n### ', '\n' + reflections)
    recent_blocks = [b.strip() for b in blocks if b.strip() and re.match(r'^\d{4}-\d{2}-\d{2}', b)]
    recent_blocks.reverse() # newest first
    
    count = 0
    for block in recent_blocks:
        if count >= 3:
            break
        title_match = re.search(r'^([^\n]+)', block)
        title = title_match.group(1).strip() if title_match else "Unknown Entry"
        report_lines.append(f"- {title}")
        count += 1

    if count == 0:
        report_lines.append("- No recent reflections found.")
        
    report_lines.append("")

    # Output file
    output_path = os.path.join(OUTPUT_DIR, "visibility-report-LATEST.md")
    with open(output_path, "w") as f:
        f.write("\n".join(report_lines))
        
    print(f"Visibility report generated: {output_path}")
    print("=== SUMMARY ===")
    print(f"Candidates: {len(candidates)} total")
    print(f"Escalated Rules: {len(not_sticking_rules)}")
    print(f"Promoted Rules: {len(promoted_rules)}")
    print(f"Recent Violations: {len(active_violations)}")
    print("===============")

if __name__ == "__main__":
    generate_visibility_report()
