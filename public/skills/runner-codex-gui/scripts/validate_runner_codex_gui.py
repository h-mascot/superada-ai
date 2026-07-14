#!/usr/bin/env python3
"""Static checks for Runner–Codex GUI skill and generated control-plane prompts."""

from __future__ import annotations

import argparse
import pathlib
import re
import sys


SKILL_REQUIRED = [
    "visible top-level",
    "one issue, one writer, one worktree",
    "Native scheduler",
    "AUTO_FIX",
    "WAITING_DEPENDENCY",
    "RETRYING_TRANSIENT",
    "HENRY_DECISION",
    "semantic completion",
    "rendered user-message node",
    "never use Codex CLI",
    "Approval-Surface Agreement",
    "direct response",
    "linear_write_authorized",
]

MANAGER_REQUIRED = [
    "complete approved child queue",
    "visible top-level sibling worker/reviewer tasks",
    "one issue/worktree/writer",
    "This manager alone serially integrates",
    "Never use Codex CLI",
    "Stop condition",
]

AUTOMATION_REQUIRED = [
    "singleton lease",
    "HEALTHY",
    "STALLED",
    "BROKEN",
    "BLOCKED_AUTHORITY",
    "COMPLETE",
    "AUTO_FIX",
    "WAITING_DEPENDENCY",
    "RETRYING_TRANSIENT",
    "HENRY_DECISION",
    "HENRY ACTION REQUIRED",
    "direct A/B/C response",
    "canonical packet",
    "manager-state blocker",
    "repair/transition",
]

FORBIDDEN_PRIMARY_PATTERNS = [
    r"\bcodex exec\b",
    r"\bcursor agent\b",
    r"\bhermes\s+/goal\b",
    r"\bopenclaw\s+cron\b",
]


def check_contains(name: str, text: str, needles: list[str]) -> list[str]:
    low = text.lower()
    return [f"{name}: missing required clause: {needle}" for needle in needles if needle.lower() not in low]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skill-dir", type=pathlib.Path, default=pathlib.Path(__file__).resolve().parents[1])
    parser.add_argument("--manager", type=pathlib.Path)
    parser.add_argument("--automation", type=pathlib.Path)
    args = parser.parse_args()

    errors: list[str] = []
    skill = args.skill_dir / "SKILL.md"
    if not skill.exists():
        errors.append(f"missing {skill}")
    else:
        text = skill.read_text()
        if not text.startswith("---\n"):
            errors.append("SKILL.md frontmatter must start at byte zero")
        if len(text) > 100_000:
            errors.append("SKILL.md exceeds 100,000 characters")
        fm = re.match(r"---\n(.*?)\n---\n", text, re.S)
        if not fm:
            errors.append("SKILL.md frontmatter is not closed")
        else:
            for key in ("name:", "description:", "version:", "author:", "license:"):
                if key not in fm.group(1):
                    errors.append(f"SKILL.md missing frontmatter key {key}")
        errors.extend(check_contains("SKILL.md", text, SKILL_REQUIRED))

    expected = [
        "references/native-codex-gui-control.md",
        "references/control-plane-and-recovery.md",
        "templates/manager-directive.md",
        "templates/scheduled-automation-directive.md",
        "templates/lane-manifest.md",
    ]
    for rel in expected:
        if not (args.skill_dir / rel).exists():
            errors.append(f"missing linked file: {rel}")

    if args.manager:
        text = args.manager.read_text()
        errors.extend(check_contains(str(args.manager), text, MANAGER_REQUIRED))
        for pat in FORBIDDEN_PRIMARY_PATTERNS:
            if re.search(pat, text, re.I):
                # Explicit prohibition is allowed.
                for line in text.splitlines():
                    if re.search(pat, line, re.I) and not re.search(r"never|forbid|do not|without", line, re.I):
                        errors.append(f"{args.manager}: forbidden primary executor clause: {line.strip()}")

    if args.automation:
        text = args.automation.read_text()
        errors.extend(check_contains(str(args.automation), text, AUTOMATION_REQUIRED))
        low = text.lower()
        singleton_rule = (
            "exactly one native codex scheduled automation" in low
            or "single native codex scheduled automation" in low
        )
        if not singleton_rule:
            errors.append(f"{args.automation}: missing singleton native Codex scheduler clause")
        minute_rule = (
            "INTERVAL=10" in text
            or "every 10 minutes" in low
            or "every 10-minute" in low
        )
        if not minute_rule:
            errors.append(f"{args.automation}: missing 10-minute schedule")
        if "target_thread_id" not in text and "<MANAGER_TASK_ID>" not in text:
            errors.append(f"{args.automation}: missing manager task binding")

    if errors:
        print("FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print("PASS: Runner–Codex GUI skill/control-plane contract is structurally valid")
    return 0


if __name__ == "__main__":
    sys.exit(main())
