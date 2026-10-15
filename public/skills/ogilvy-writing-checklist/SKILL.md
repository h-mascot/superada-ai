---
name: ogilvy-writing-checklist
version: 0.1.0
description: Pre-shipment 10-rule writing gate for any prose deliverable.
---

# Ogilvy Writing Checklist

A 10-rule pre-shipment gate for any prose deliverable: memos, decks, articles, BD emails, briefings, internal docs, public posts. Adapted from David Ogilvy's 1982 Ogilvy & Mather "How to Write" memo, with the 10 modern takeaways from Louis Lucente's "How To Write: David Ogilvy's 10 Timeless Rules" baked in as concrete pass/fail signals.

This skill does **not** generate copy. It scores copy you have already drafted and flags the specific lines that fail, so you can fix them before sending.

**Dependency stance:** stdlib only (Python 3). The scorer script is a single self-contained file under `scripts/`. No model calls, no network, no LLM-as-judge; it measures surface signals (sentence length, jargon tokens, long-word density, paragraph length, second-person / action-verb presence, quotation markers, etc.) and pairs them with your own yes/no answers to the non-measurable rules.

## When to Use

- Before sending any memo, briefing, deck script, or BD email that took real thought to write.
- Before publishing a public article, post, or threaded reply that goes out under your name or a brand.
- After drafting anything longer than 200 words, as the last step before handoff or send.
- Whenever the user says "ship it", "send it", "looks good", "is this ready" on a long-form draft.
- Trigger phrases: "check this before I send it", "is this Ogilvy-clean", "run the writing gate", "is the prose ready", "QA this copy".

## Prerequisites

- The draft prose must exist as a file on disk, or be pasteable into a temp file. The scorer reads plain text.
- Python 3.9+ (standard on macOS/Linux). No `pip install`.
- The 10 Ogilvy rules are baked into the script's prompts, you do not need to re-read the source.

## How to Run

The script reads a prose file, asks you the 4 rules that can't be measured mechanically, and prints a pass/concern card per rule plus an overall ship decision.

```bash
python3 scripts/ogilvy_gate.py /path/to/draft.md
```

Run from the installed skill directory, or point at the script's absolute path. For a pasteable draft, write it to a temp file first, then point the script at it. The script also accepts stdin:

```bash
python3 scripts/ogilvy_gate.py - <<'EOF'
Your draft prose here...
EOF
```

The exit code is `0` if all 10 rules PASS, `1` if any rule has a CONCERN, `2` if any rule FAILS.

## Quick Reference

The 10 rules (the gate enforces these, descriptions in `Procedure` below):

1. Read good writing before you write (self-check)
2. Write the way you talk, naturally
3. Short words, short sentences, short paragraphs
4. No jargon: *reconceptualize, demassification, attitudinally, judgmentally*
5. No more than two pages on any subject
6. Check your quotations
7. Sleep on it, read aloud the next morning, then edit
8. If it's important, get a colleague to improve it
9. Crystal-clear call to action, what do you want the recipient to do?
10. If you want action, don't write, go tell the guy

## Procedure

### Step 1, Locate or write the draft

Find the draft file on disk, or save the pasted draft to a temp file such as `/tmp/draft-ogilvy-check.md`. Long-form drafts only, the gate is wasted on < 200 words.

### Step 2, Run the gate

```bash
python3 scripts/ogilvy_gate.py /path/to/draft.md
```

The script will:

1. Print header (filename, word count, sentence count, paragraph count, average sentence length, jargon hits).
2. Score rules 2, 3, 4, 5, 6, 9 mechanically (surface signals).
3. Ask you 4 yes/no questions for the rules that need human judgment (1: read good writing; 7: slept on it; 8: had a colleague improve it; 10: is writing the right medium).
4. Print a final card per rule: **PASS** / **CONCERN** / **FAIL** with the specific evidence (e.g. "Rule 3 FAIL, 8 sentences over 30 words, longest is 47 words on line 42").
5. Print an overall **SHIP / REVISE / HOLD** decision.

### Step 3, Act on the output

- **SHIP**, send the draft. No further action.
- **REVISE**, fix the flagged rules. Re-run the gate to confirm. The script tells you which rules and which lines to look at.
- **HOLD**, pause and decide: get a colleague review, sleep on it, or just go tell the person in person instead.

### Step 4, Optional: update the colleague review

If rule 8 (colleague review) was a CONCERN, capture who reviewed + what they changed in the draft's frontmatter or commit message. Future audits can see whether a real review happened.

## Pitfalls

- **The gate does not replace judgment.** It catches surface signals (long sentences, jargon, missing CTA). It cannot detect bad logic, weak arguments, or tone mismatch. Use it as a last-mile filter, not a substitute for thinking.
- **Heredoc with shell metacharacters.** If the draft contains backticks, dollar signs, or backslashes, the heredoc can mangle them. Prefer a file + path-based invocation.
- **Rule 7 ("sleep on it") is a yes/no you must answer honestly.** The script will not auto-detect whether you actually slept on it. If you wrote the draft in this turn, the answer is NO and the rule is a HOLD signal, that is by design.
- **Rule 10 ("just tell them") often fires for short BD asks.** That is the correct outcome, don't send a 3-sentence email when a 30-second call works. The gate is a guard against prose, not a mandate to write prose.
- **Jargon list is not exhaustive.** The script checks the 4 Ogilvy-named jargon words plus a small extension list. Brand-specific or industry-specific jargon will not trip the gate, that's a separate review pass.
- **Long-word density ≠ clarity.** Rule 3 measures sentence/paragraph length, not word complexity. A 12-word sentence with "reconceptualize" still fails rule 4, not rule 3.
- **The script is read-only.** It never modifies the draft. Fix the flagged lines in your editor and re-run.

## Verification

Run the gate on a known-good memo you trust and confirm exit code 0 + a card with no FAILs. Then run it on a deliberately bad draft (jargon-heavy, 50-word sentences, no CTA) and confirm exit code 2 with multiple FAILs flagged. That proves the script is wired correctly and the threshold constants match the memo's intent.

```bash
# Positive test
python3 scripts/ogilvy_gate.py /path/to/well-written-post.md
echo $?  # expect 0

# Negative test, feed it a jargon-heavy draft, expect 2
python3 scripts/ogilvy_gate.py /tmp/bad-draft.md
echo $?  # expect 2
```
