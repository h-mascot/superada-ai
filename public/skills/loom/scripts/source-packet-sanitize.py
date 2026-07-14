#!/usr/bin/env python3
"""Strip session transcript material from a grill-to-linear source packet
before submitting to a non-Oracle OpenAI lane.

Removes any `## Recent channel messages` block, paraphrases obvious
"Bubbling" transcript prefixes, and trims to a configurable char budget.

Usage:
    python3 source-packet-sanitize.py \
        --input /path/to/source-packet.md \
        --output /path/to/sanitized.md \
        --char-budget 70000

Exit codes:
    0 on success.
    2 on input/output path errors.
"""

import argparse
import re
import sys
from pathlib import Path

TRANSCRIPT_HEADING = re.compile(
    r"^##\s*Recent channel messages.*?(?=^##\s|\Z)",
    re.M | re.S,
)

BUBBLING_LINE = re.compile(
    r"^\s*\[(SuperAda|SuperAda \[bot\]|HiM|Book)\][^\n]*Bubbling[^\n]*\n",
    re.M,
)

OUT_OF_BAND_BLOCK = re.compile(
    r"\[OUT-OF-BAND USER MESSAGE[^\n]*\n.*?\[/OUT-OF-BAND USER MESSAGE\]\n",
    re.S,
)


def sanitize(text: str) -> tuple[str, dict]:
    stats = {
        "transcript_blocks_removed": 0,
        "bubbling_lines_removed": 0,
        "out_of_band_blocks_removed": 0,
        "original_chars": len(text),
        "sanitized_chars": 0,
        "char_budget": 0,
        "trimmed_chars": 0,
    }
    cleaned = text
    cleaned, n = TRANSCRIPT_HEADING.subn("", cleaned)
    stats["transcript_blocks_removed"] = n
    cleaned, n = BUBBLING_LINE.sub("", cleaned)
    stats["bubbling_lines_removed"] = n
    cleaned, n = OUT_OF_BAND_BLOCK.subn("", cleaned)
    stats["out_of_band_blocks_removed"] = n
    stats["sanitized_chars"] = len(cleaned)
    return cleaned, stats


def trim_to_budget(text: str, char_budget: int) -> tuple[str, int]:
    if char_budget <= 0 or len(text) <= char_budget:
        return text, 0
    trimmed = text[:char_budget]
    last_heading = trimmed.rfind("\n## ")
    if last_heading > char_budget // 2:
        trimmed = trimmed[: last_heading + 1]
    return trimmed, len(text) - len(trimmed)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument(
        "--char-budget",
        type=int,
        default=0,
        help="Maximum char count of the sanitized output. 0 = no trim.",
    )
    args = parser.parse_args()

    if not args.input.is_file():
        print(f"ERROR: input not found: {args.input}", file=sys.stderr)
        return 2

    original = args.input.read_text(encoding="utf-8")
    cleaned, stats = sanitize(original)
    cleaned, trimmed = trim_to_budget(cleaned, args.char_budget)
    stats["char_budget"] = args.char_budget
    stats["trimmed_chars"] = trimmed

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(cleaned, encoding="utf-8")

    print(f"wrote {args.output} ({len(cleaned)} chars)")
    print(
        f"removed: transcript_blocks={stats['transcript_blocks_removed']} "
        f"bubbling_lines={stats['bubbling_lines_removed']} "
        f"out_of_band_blocks={stats['out_of_band_blocks_removed']} "
        f"trimmed_chars={stats['trimmed_chars']}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
