#!/bin/bash
# redacted-secret-scan.sh — minimal, portable redacted secret scan for OpenCore-style projects.
# Usage: ./scripts/redacted-secret-scan.sh
# Exit 0 = pass, exit 1 = unallowlisted hit or real secret pattern match.
#
# Intentional, not a replacement for gitleaks/trufflehog. This is a fast, no-dependency
# pre-push check that:
#   - flags obvious key/password strings in tracked files
#   - allowlists the project's deliberate redaction fixtures
#   - flags real-secret patterns (Google API key, AWS access key, GitHub PAT, Slack token, GitLab PAT)
#
# Edit ALLOW_SUBSTRINGS and REAL_REGEXES for the project. Mirror the allowlist into
# .project-gate.json privateDefaultPatterns so the gate runner agrees.

set -euo pipefail
ALLOW_SUBSTRINGS=(
  "redaction-fixture-value"
  "sk-sec...2345"
  "[REDACTED]"
)
# Real-secret regexes that should NEVER appear in tracked files.
REAL_REGEXES=(
  'AIza[0-9A-Za-z_-]{20,}'
  'AKIA[0-9A-Z]{16}'
  'github_pat_[0-9A-Za-z_]{20,}'
  'xox[baprs]-[0-9A-Za-z-]+'
  'glpat-[0-9A-Za-z_-]{20,}'
)

if ! command -v git >/dev/null 2>&1; then
  echo "redacted-secret-scan: git not on PATH" >&2
  exit 2
fi
if ! command -v python3 >/dev/null 2>&1; then
  echo "redacted-secret-scan: python3 not on PATH" >&2
  exit 2
fi

FOUND_BAD=0
while IFS= read -r rel; do
  [ -f "$rel" ] || continue
  case "$rel" in
    .git/*|node_modules/*|dist/*|output/*|.gitnexus/*) continue ;;
  esac
  if ! python3 - "$rel" <<'PY'
import re, sys
path=sys.argv[1]
loose=re.compile(r'(?i)(api[_-]?key|secret|token|password)\s*[:=]\s*["\'][^"\']{12,}["\']')
real=[
  re.compile(r'AIza[0-9A-Za-z_-]{20,}'),
  re.compile(r'AKIA[0-9A-Z]{16}'),
  re.compile(r'github_pat_[0-9A-Za-z_]{20,}'),
  re.compile(r'xox[baprs]-[0-9A-Za-z-]+'),
  re.compile(r'glpat-[0-9A-Za-z_-]{20,}'),
]
allow=('redaction-fixture-value','sk-sec...2345','[REDACTED]')
try:
  txt=open(path,encoding='utf-8',errors='ignore').read()
except Exception:
  sys.exit(0)
real_hits=[]
loose_hits=[]
for i,line in enumerate(txt.splitlines(),1):
  for rx in real:
    for m in rx.finditer(line):
      real_hits.append((i, m.group(0)))
  if loose.search(line):
    if any(s in line for s in allow): continue
    loose_hits.append((i, line.rstrip()[:200]))
if real_hits or loose_hits:
  for i,val in real_hits: print(f'REAL {path}:{i}: {val}')
  for i,line in loose_hits: print(f'UNALLOW {path}:{i}: {line}')
  sys.exit(1)
PY
  then
    FOUND_BAD=1
  fi
done < <(git ls-files)
if [ $FOUND_BAD -ne 0 ]; then
  echo "redacted secret scan: FAIL" >&2
  exit 1
fi
echo "redacted secret scan: pass"
