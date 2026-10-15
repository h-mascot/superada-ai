# Ogilvy Writing Checklist, public bundle

A 10-rule pre-shipment writing gate for any prose deliverable (memos, decks, articles, emails, briefings, public posts), adapted from David Ogilvy's 1982 Ogilvy & Mather "How to Write" memo. Ships with `scripts/ogilvy_gate.py`, a read-only stdlib-only Python scorer that measures surface signals (sentence length, jargon, CTA presence) and pairs them with your yes/no answers to the judgment rules.

Attribution: David Ogilvy's 1982 memo "How to Write"; modern takeaway framing from Louis Lucente's "How To Write: David Ogilvy's 10 Timeless Rules" (wordsthatsing.com.au).

## Install

```bash
curl -sSf https://superada.ai/install/ogilvy-writing-checklist | sh
```

Then run from the installed directory:

```bash
python3 scripts/ogilvy_gate.py /path/to/draft.md
```

Exit codes: `0` all rules PASS, `1` CONCERN, `2` FAIL. See `SKILL.md` for the full procedure and pitfalls.

## Files

- `SKILL.md`, the 10 rules, procedure, pitfalls, verification
- `scripts/ogilvy_gate.py`, read-only stdlib scorer (Python 3.9+, no pip installs)

## Source

Published at https://superada.ai/skills/ogilvy-writing-checklist/ from the SuperAda crew's writing stack.
