#!/usr/bin/env python3
"""
ogilvy_gate.py — Pre-shipment 10-rule writing gate.

Adapted from David Ogilvy's 1982 Ogilvy & Mather "How to Write" memo
(10 rules) and the modern takeaways from Louis Lucente's article
"How To Write: David Ogilvy's 10 Timeless Rules"
(https://www.wordsthatsing.com.au/post/how-to-write-ogilvy).

Usage:
    python3 ogilvy_gate.py <path-to-draft>
    python3 ogilvy_gate.py -   # read from stdin

Exit codes:
    0  all 10 rules PASS
    1  at least one rule has CONCERN
    2  at least one rule FAILs

The script is read-only — it never modifies the draft.
"""
from __future__ import annotations

import argparse
import re
import statistics
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import List, Tuple

# ---------------------------------------------------------------------------
# Ogilvy's named jargon words, plus a small extension list. Add industry-
# specific jargon to JARGON_EXTRA in the script if you ship a domain pass.
# ---------------------------------------------------------------------------
JARGON_OGILVY = [
    "reconceptualize",
    "demassification",
    "attitudinally",
    "judgmentally",
]
JARGON_EXTRA = [
    "synergize",
    "synergy",
    "leverage",
    "operationalize",
    "ideate",
    "holistic",
    "paradigm",
    "bandwidth",
    "circleback",
    "actionable",
    "disruptive",
    "scalable",
    "stakeholder",
    "value-add",
    "low-hanging",
]
ALL_JARGON = set(JARGON_OGILVY + JARGON_EXTRA)

# Sentence splitter — naive but adequate for prose drafts. Strips common
# abbreviations so "e.g." and "i.e." don't get treated as sentence ends.
_ABBREV = re.compile(r"\b(e\.g|i\.e|Mr|Mrs|Ms|Dr|vs|etc|Fig|No)\.$", re.I)


def split_sentences(text: str) -> List[str]:
    # Protect abbreviations
    tmp = _ABBREV.sub(lambda m: m.group(0).rstrip("."), text)
    raw = re.split(r"(?<=[.!?])\s+(?=[A-Z\"'])", tmp)
    return [s.strip() for s in raw if s.strip()]


def split_paragraphs(text: str) -> List[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def words(text: str) -> List[str]:
    return re.findall(r"[A-Za-z][A-Za-z'-]*", text)


def long_words(text: str, threshold: int = 6) -> List[str]:
    return [w for w in words(text) if len(w) > threshold]


# ---------------------------------------------------------------------------
# Mechanical rule scorers
# ---------------------------------------------------------------------------
def rule_2_natural(text: str) -> Tuple[str, str]:
    """Write the way you talk — naturally. Proxy: contractions used; passive
    voice not dominant; second person present for reader-facing copy."""
    word_count = len(words(text))
    contractions = len(re.findall(r"\b\w+'(s|t|re|ve|ll|d|m)\b", text, re.I))
    passive = len(
        re.findall(
            r"\b(is|are|was|were|be|been|being)\s+\w+(ed|en)\b",
            text,
            re.I,
        )
    )
    second_person = len(re.findall(r"\b(you|your|you're|you've|you'll)\b", text, re.I))

    concerns = []
    if word_count > 0 and contractions / word_count < 0.005 and word_count > 200:
        concerns.append(f"only {contractions} contractions in {word_count} words (sounds formal)")
    if word_count > 0 and passive / max(1, word_count // 10) > 3:
        concerns.append(f"{passive} passive constructions — sounds written, not spoken")
    if word_count > 300 and second_person == 0:
        concerns.append("zero 'you/your' in 300+ words — reads at the audience, not to them")

    if not concerns:
        return "PASS", f"contractions={contractions} passive={passive} you/your={second_person}"
    if len(concerns) == 1:
        return "CONCERN", concerns[0]
    return "FAIL", "; ".join(concerns)


def rule_3_short(text: str) -> Tuple[str, str]:
    """Short words, short sentences, short paragraphs."""
    sents = split_sentences(text)
    paras = split_paragraphs(text)
    if not sents:
        return "PASS", "no sentences"

    sent_lens = [len(words(s)) for s in sents]
    long_sents = [s for s in sents if len(words(s)) > 30]
    long_paras = [p for p in paras if len(words(p)) > 120]
    long_word_count = len(long_words(text, threshold=4))

    notes = []
    if sent_lens:
        avg = statistics.mean(sent_lens)
        notes.append(f"avg sentence={avg:.1f}w")
        if avg > 22:
            return "FAIL", f"average sentence {avg:.1f} words — too dense; aim < 20"
    if long_sents:
        if len(long_sents) >= 3:
            return "FAIL", f"{len(long_sents)} sentences over 30 words; longest={max(len(words(s)) for s in sents)}w"
        notes.append(f"{len(long_sents)} sentence(s) over 30w")
    if long_paras:
        return "FAIL", f"{len(long_paras)} paragraph(s) over 120 words — break them up"
    if long_word_count / max(1, len(words(text))) > 0.35:
        return "CONCERN", f"{long_word_count} long words ({long_word_count/max(1,len(words(text)))*100:.0f}% of total)"

    return "PASS", " | ".join(notes) or "all short"


def rule_4_no_jargon(text: str) -> Tuple[str, str]:
    """Never use jargon words like reconceptualize, demassification,
    attitudinally, judgmentally."""
    hits = []
    lower = text.lower()
    for w in ALL_JARGON:
        if re.search(rf"\b{re.escape(w)}\b", lower):
            hits.append(w)
    if not hits:
        return "PASS", "no jargon tokens found"
    if len(hits) <= 2:
        return "CONCERN", f"jargon hits: {', '.join(sorted(set(hits)))}"
    return "FAIL", f"jargon hits: {', '.join(sorted(set(hits)))} — rewrite in plain English"


def rule_5_two_pages(text: str) -> Tuple[str, str]:
    """Never write more than two pages on any subject. Proxy: ~600 words = 2
    single-spaced pages; if a single block of prose blows past that without
    structural breaks, the draft is overlong for the medium."""
    paras = split_paragraphs(text)
    if not paras:
        return "PASS", "empty"
    longest = max(len(words(p)) for p in paras)
    total = len(words(text))
    # If total is fine but one block dominates, that's still bloat.
    if longest > 350:
        return "FAIL", f"one block is {longest}w — break it up or trim"
    if total > 1200:
        return "CONCERN", f"{total}w total — over the two-page ceiling; consider splitting"
    if total > 800:
        return "CONCERN", f"{total}w — fine if this is a long-form piece, otherwise trim"
    return "PASS", f"{total}w total, longest block {longest}w"


def rule_6_quotations(text: str) -> Tuple[str, str]:
    """Check your quotations. Proxy: any quoted text should be visible
    somewhere, AND if the prose contains unverified factual claims the agent
    should mark them."""
    # Only real quotation marks (straight double, curly double, curly single)
    # — exclude apostrophes (possessives / contractions).
    quotes = re.findall(r"[\"\u201c\u201d]([^\"\u201c\u201d]{6,})[\"\u201c\u201d]", text)
    if not quotes:
        return "PASS", "no quotations to verify"
    long_quotes = [q for q in quotes if len(q.split()) >= 4]
    if len(long_quotes) >= 1:
        return "CONCERN", f"{len(long_quotes)} quoted passage(s) — verify each before send"
    return "PASS", f"{len(quotes)} scare-quote token(s), no long passages cited"


def rule_9_cta(text: str) -> Tuple[str, str]:
    """Crystal-clear call to action — what do you want the recipient to do?"""
    # Heuristic: presence of imperative or direct ask within the last 200
    # words of the draft.
    paras = split_paragraphs(text)
    if not paras:
        return "FAIL", "draft is empty"
    tail = " ".join(paras[-2:]) if len(paras) >= 2 else paras[-1]
    tail_words = words(tail)
    ask_patterns = [
        r"\bsend\b",
        r"\breply\b",
        r"\bbook\b",
        r"\bschedule\b",
        r"\bconfirm\b",
        r"\bapprove\b",
        r"\bsign\b",
        r"\b(please|can you|could you|would you)\b",
        r"\bship\b",
        r"\bnext step\b",
        r"\bby (monday|tuesday|wednesday|thursday|friday|tomorrow|eod|end of (day|week))\b",
    ]
    hits = sum(1 for p in ask_patterns if re.search(p, tail, re.I))
    if hits >= 2:
        return "PASS", f"clear ask in tail ({hits} ask-pattern hits)"
    if hits == 1:
        return "CONCERN", "one ask-pattern in tail — make the CTA louder and more specific"
    return "FAIL", "no clear call-to-action in the closing 200 words — reader won't know what to do"


# ---------------------------------------------------------------------------
# Agent-judged rules (1, 7, 8, 10) — the script cannot measure these, so it
# asks the agent to answer yes/no and records the answer.
# ---------------------------------------------------------------------------
AGENT_RULES = [
    (
        1,
        "Read the Roman-Raphaelson book on writing. Read it three times.",
        "Did you read good writing before drafting this? (y/n): ",
    ),
    (
        7,
        "Never send a letter or a memo on the day you write it. Read it aloud the next morning — and then edit it.",
        "Did you sleep on it / re-read it aloud the next morning before this run? (y/n): ",
    ),
    (
        8,
        "If it is something important, get a colleague to improve it.",
        "Did a colleague review and improve this before you ran the gate? (y/n): ",
    ),
    (
        10,
        "If you want ACTION, don't write. Go and tell the guy what you want.",
        "Is writing actually the right medium here, or should you just tell the person in person/on a call? (y/n): ",
    ),
]


def ask_yes_no(prompt: str) -> bool:
    try:
        ans = input(prompt).strip().lower()
    except EOFError:
        return False
    return ans in ("y", "yes")


@dataclass
class RuleCard:
    number: int
    rule: str
    status: str  # PASS | CONCERN | FAIL
    evidence: str
    source: str = ""


def render_card(c: RuleCard) -> str:
    icon = {"PASS": "✓", "CONCERN": "~", "FAIL": "✗"}[c.status]
    return f"  [{icon} {c.status:7}] Rule {c.number:2}: {c.evidence}"


def overall_decision(cards: List[RuleCard]) -> str:
    statuses = [c.status for c in cards]
    if any(s == "FAIL" for s in statuses):
        return "HOLD — fix the FAILs before sending"
    if any(s == "CONCERN" for s in statuses):
        return "REVISE — address the CONCERNs, then re-run"
    return "SHIP — all 10 rules PASS"


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main() -> int:
    ap = argparse.ArgumentParser(description="Ogilvy 10-rule writing gate")
    ap.add_argument("path", help="path to draft (use '-' for stdin)")
    ap.add_argument(
        "--non-interactive",
        action="store_true",
        help="skip the 4 agent-judged questions; default them to 'no' (CONCERN)",
    )
    ap.add_argument(
        "--yes",
        action="store_true",
        help="in interactive mode, treat all 4 agent-judged questions as 'yes' (PASS)",
    )
    args = ap.parse_args()

    if args.path == "-":
        text = sys.stdin.read()
        source = "<stdin>"
    else:
        text = Path(args.path).read_text(errors="replace")
        source = args.path

    print("=" * 72)
    print(f"OGILVY WRITING GATE — {source}")
    print("=" * 72)

    sents = split_sentences(text)
    paras = split_paragraphs(text)
    all_words = words(text)
    print(
        f"  {len(all_words):>4} words | {len(sents):>3} sentences | "
        f"{len(paras):>2} paragraphs | "
        f"avg sent len = {statistics.mean(len(words(s)) for s in sents):.1f}w"
        if sents
        else f"  {len(all_words)} words | 0 sentences | {len(paras)} paragraphs"
    )
    print()

    cards: List[RuleCard] = []

    # Mechanical rules
    for num, fn in [
        (2, rule_2_natural),
        (3, rule_3_short),
        (4, rule_4_no_jargon),
        (5, rule_5_two_pages),
        (6, rule_6_quotations),
        (9, rule_9_cta),
    ]:
        status, evidence = fn(text)
        cards.append(
            RuleCard(
                number=num,
                rule="(see source)",
                status=status,
                evidence=evidence,
                source="mechanical",
            )
        )

    # Agent-judged rules
    for num, rule, prompt in AGENT_RULES:
        if args.non_interactive:
            answered_yes = False
        elif args.yes:
            answered_yes = True
        else:
            print(f"Rule {num}: {rule}")
            answered_yes = ask_yes_no(prompt)
        if answered_yes:
            status, evidence = "PASS", "agent confirmed"
        else:
            status, evidence = "CONCERN", "agent did not confirm — re-evaluate this rule"
        cards.append(RuleCard(number=num, rule=rule, status=status, evidence=evidence, source="agent"))

    print("Rule cards:")
    for c in sorted(cards, key=lambda x: x.number):
        print(render_card(c))
    print()
    print(f"Decision: {overall_decision(cards)}")
    print("=" * 72)

    if any(c.status == "FAIL" for c in cards):
        return 2
    if any(c.status == "CONCERN" for c in cards):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
