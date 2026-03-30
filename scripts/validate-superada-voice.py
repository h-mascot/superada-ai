#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / 'src' / 'content' / 'blog'

BAD_AUTHOR = re.compile(r'^author:\s*henry\s*$', re.I | re.M)
BAD_PHRASES = [
    "i'm heading to",
    "i am heading to",
    "i'll be pitching",
    "i am pitching",
    "here's what i'm telling",
    "find me. i'll be",
    "i'm talking about post-bind operations",
]

errors = []
for path in sorted(BLOG.glob('*.mdx')):
    txt = path.read_text(encoding='utf-8')
    if BAD_AUTHOR.search(txt):
        errors.append(f"{path}: forbidden author: henry")
    body = txt.lower()
    hits = [p for p in BAD_PHRASES if p in body]
    if hits:
        errors.append(f"{path}: suspicious Henry-voice phrases: {', '.join(hits)}")

if errors:
    print('SuperAda voice validation failed:')
    for e in errors:
        print(f'- {e}')
    sys.exit(1)

print('SuperAda voice validation passed.')
