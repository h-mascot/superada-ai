#!/usr/bin/env python3
"""Validate a generated Cursor project execution pack.

This is intentionally lightweight and stdlib-only. It checks for the exact
failure modes from the Helm incident: self-discovery language, ordinal mapping,
missing approved queue/state/gate references, bad proof commands, banned terms,
and accidental cron registration language.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REQUIRED_FILES = [
    "plan.md",
    "cursor-single-issue-prompt.md",
    "cursor-bounded-queue-prompt.md",
    "cursor-goal-prompt.md",
    "linear_id_to_source_id.json",
    "preflight-checklist.md",
]

REQUIRED_PHRASES = [
    "approved queue",
    "fail-stop",
    "CLI Tester",
    "project-test-gate",
    "reread",
    "state file",
    "no self-discovery",
    "book-review",
    "verify",
    "visual proof",
    "receipt",
    "end-to-end goal-mode",
    "/goal",
]

FOUR_STEP_GATE_LEAD = [
    "request",
    "run",
    "book-review",
    "verify",
]

CANONICAL_NO_MERGE_SENTENCE = (
    "Do not merge without Book/SuperAda verification unless Henry has "
    "explicitly authorized Cursor to merge."
)

BAD_SELF_DISCOVERY = [
    r"pick (the )?next (safe )?issue",
    r"discover (the )?next issue",
    r"choose (any|the next) issue",
    r"work on whatever is next",
]

ORDINAL_MAPPING = [
    r"ordinal mapping",
    r"first child.*first",
    r"by position",
]

BAD_PROOF_COMMANDS_DEFAULT = [
    "npm run typecheck",
]

CRON_REGISTRATION = [
    r"cronjob\(.+create",
    r"schedule this job",
]

FORBIDDEN_CRON_REGISTER = re.compile(
    r"(?<!do not )(?<!does not )(?<!don't )(?<!never )(?<!must not )(?<!without approval )register (?:a )?cron",
    re.I,
)


def load_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except FileNotFoundError:
        return ""


def add(result: list[dict], ok: bool, check: str, detail: str = "") -> None:
    result.append({"ok": ok, "check": check, "detail": detail})


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pack_dir", help="Directory containing generated execution pack")
    parser.add_argument("--banned-term", action="append", default=[], help="Project banned term; repeatable")
    parser.add_argument("--bad-proof-command", action="append", default=[], help="Bad proof command; repeatable")
    parser.add_argument("--allow-cron-template", action="store_true", help="Allow opt-in cron template text, but still reject registration language")
    args = parser.parse_args()

    root = Path(args.pack_dir).expanduser().resolve()
    results: list[dict] = []

    for rel in REQUIRED_FILES:
        add(results, (root / rel).exists(), f"required file exists: {rel}")

    all_text = "\n\n".join(load_text(root / rel) for rel in REQUIRED_FILES + [
        "cursor-autonomous-run-state.example.json",
        "run-state.example.json",
        ".project-gate.example.json",
    ])
    lower = all_text.lower()

    for phrase in REQUIRED_PHRASES:
        add(results, phrase.lower() in lower, f"required phrase present: {phrase}")

    for pattern in BAD_SELF_DISCOVERY:
        hit = re.search(pattern, all_text, re.I)
        add(results, hit is None, f"no self-discovery pattern: {pattern}", hit.group(0) if hit else "")

    # Mentioning ordinal mapping as a ban is good; endorsing it is bad.
    bad_ordinal_endorsement = re.search(r"ordinal mapping (allowed|ok|permitted)|map .* by ordinal|map .* by position", all_text, re.I)
    add(results, bad_ordinal_endorsement is None, "ordinal mapping is not endorsed", bad_ordinal_endorsement.group(0) if bad_ordinal_endorsement else "")

    bad_terms = args.banned_term + BAD_PROOF_COMMANDS_DEFAULT + args.bad_proof_command
    gate_text = load_text(root / ".project-gate.example.json")
    text_without_gate_config = "\n\n".join(load_text(root / rel) for rel in REQUIRED_FILES + [
        "cursor-autonomous-run-state.example.json",
        "run-state.example.json",
    ])
    lower_without_gate_config = text_without_gate_config.lower()
    for term in bad_terms:
        if not term:
            continue
        # A banned term may appear inside the gate config's bannedTerms list;
        # that is the desired enforcement surface, not a leak into plan/prompt text.
        in_non_gate_text = term.lower() in lower_without_gate_config
        add(results, not in_non_gate_text, f"banned/bad term absent outside gate config: {term}")
        if term in args.banned_term and term:
            add(results, term in gate_text, f"project banned term included in gate config: {term}")

    for pattern in CRON_REGISTRATION:
        hit = re.search(pattern, all_text, re.I | re.S)
        add(results, hit is None, f"no cron registration language: {pattern}", hit.group(0)[:120] if hit else "")

    cron_hit = FORBIDDEN_CRON_REGISTER.search(all_text)
    add(results, cron_hit is None, "no affirmative cron registration language", cron_hit.group(0) if cron_hit else "")


    gate_config_path = root / ".project-gate.example.json"
    if gate_config_path.exists():
        try:
            gate_config = json.loads(gate_config_path.read_text(encoding="utf-8"))
            book_review = gate_config.get("bookReview", {})
            add(results, isinstance(book_review, dict) and "required" in book_review, "gate config declares bookReview.required")
            if isinstance(book_review, dict) and book_review.get("required") is True:
                add(results, book_review.get("mode") in {"packet", "hermes-api"}, "bookReview mode is packet or hermes-api", str(book_review.get("mode")))
                add(results, bool(book_review.get("receiptDir")), "bookReview receiptDir configured")
            receipts = gate_config.get("receipts", {})
            if isinstance(receipts, dict):
                # Back-compat for richer schemas; not required by the current CLI Tester config.
                uniqueness = receipts.get("requireReceiptUniqueness")
                if uniqueness is not None:
                    add(results, uniqueness is True, "receipt uniqueness required when receipts schema is used")
        except Exception as exc:  # noqa: BLE001
            add(results, False, "gate config JSON parses", str(exc))

    plan_text = load_text(root / "plan.md")
    add(results, "Copy/paste" in plan_text and "preflight" in plan_text, "plan has top-of-page preflight/copy-paste prompt")
    add(results, "End-to-end goal-mode prompt" in plan_text, "plan has end-to-end goal-mode prompt")
    add(results, "video" in plan_text.lower() and "screenshot" in plan_text.lower(), "plan has video/screenshot proof policy")
    add(results, "reuse" in plan_text.lower() or "reused" in plan_text.lower(), "plan forbids reused receipts/proof")
    add(results, CANONICAL_NO_MERGE_SENTENCE in plan_text, "plan uses canonical no-merge sentence")

    # Each prompt file should declare all four CLI Tester steps in order
    # (request, run, book-review, verify) and use the canonical no-merge sentence.
    prompt_files = [
        "cursor-single-issue-prompt.md",
        "cursor-bounded-queue-prompt.md",
        "cursor-goal-prompt.md",
    ]
    for prompt_file in prompt_files:
        text = load_text(root / prompt_file)
        if not text:
            continue
        for step in FOUR_STEP_GATE_LEAD:
            add(
                results,
                f"`{step} " in text or f"`{step}`" in text or f"{step} <ISSUE" in text or f"{step} <ISSUE_ID" in text,
                f"{prompt_file} declares CLI Tester step: {step}",
            )
        add(
            results,
            CANONICAL_NO_MERGE_SENTENCE in text,
            f"{prompt_file} uses canonical no-merge sentence",
        )

    goal_text = load_text(root / "cursor-goal-prompt.md")
    if goal_text:
        add(results, "/goal" in goal_text, "goal-mode prompt starts with /goal invocation")
        add(results, "Authority order" in goal_text, "goal-mode prompt declares authority order")
        add(results, "Banned terms" in goal_text or "Hard zero-policy" in goal_text, "goal-mode prompt has hard zero-policy / banned terms block")
        add(results, "Receipts" in goal_text or "Receipt paths" in goal_text, "goal-mode prompt declares receipt paths")
        add(results, "Completion condition" in goal_text or "Final report" in goal_text, "goal-mode prompt declares completion condition / final report")

    mapping_path = root / "linear_id_to_source_id.json"
    if mapping_path.exists():
        try:
            mapping = json.loads(mapping_path.read_text(encoding="utf-8"))
            policy = mapping.get("mappingPolicy", {})
            add(results, policy.get("ordinalMappingAllowed") is False, "mapping policy forbids ordinal mapping")
            issues = mapping.get("issues", {})
            unresolved = [k for k, v in issues.items() if isinstance(v, dict) and v.get("status") in {"needs_review", "blocked_by_source_cleanup"}]
            add(results, not unresolved, "no unresolved approved mappings in template/sample", ", ".join(unresolved))
        except Exception as exc:  # noqa: BLE001
            add(results, False, "mapping JSON parses", str(exc))

    ok = all(r["ok"] for r in results)
    print(json.dumps({"ok": ok, "pack_dir": str(root), "results": results}, indent=2))
    return 0 if ok else 2


if __name__ == "__main__":
    sys.exit(main())
