#!/usr/bin/env bash
set -euo pipefail

BUNDLE_URL_DEFAULT="https://superada.ai/install/recursive-self-improvement-pack"
BUNDLE_URL="${1:-${BUNDLE_URL:-$BUNDLE_URL_DEFAULT}}"
TARGET_DIR="${2:-${TARGET_DIR:-$PWD}}"
WORKSPACE="$TARGET_DIR"

if [ ! -d "$WORKSPACE" ]; then
  echo "Target workspace does not exist: $WORKSPACE" >&2
  exit 1
fi

need() {
  command -v "$1" >/dev/null 2>&1 || { echo "Missing required command: $1" >&2; exit 1; }
}

need curl
need mkdir
need cp
need chmod

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

FILE_LIST_URL="$BUNDLE_URL/BUNDLE_FILES.txt"
echo "Fetching bundle manifest from $FILE_LIST_URL"
curl -fsSL "$FILE_LIST_URL" -o "$TMP_DIR/BUNDLE_FILES.txt"

while IFS= read -r rel; do
  [ -z "$rel" ] && continue
  src="$BUNDLE_URL$rel"
  dst="$WORKSPACE$rel"
  mkdir -p "$(dirname "$dst")"
  echo "Installing $rel"
  curl -fsSL "$src" -o "$dst"
done < "$TMP_DIR/BUNDLE_FILES.txt"

chmod +x "$WORKSPACE/scripts/crons/daily-soul-review.sh" || true
chmod +x "$WORKSPACE/scripts/crons/recursive-improvement.sh" || true
chmod +x "$WORKSPACE/scripts/crons/skill-evolution-review.sh" || true
chmod +x "$WORKSPACE/scripts/crons/weekly-self-improvement-review.sh" || true
chmod +x "$WORKSPACE/scripts/crons/generate-recursive-visibility.py" || true
chmod +x "$WORKSPACE/scripts/enforce-recidivism.py" || true

cat <<EOF
Install complete.

Installed into: $WORKSPACE

Next steps:
1. Review the installed docs under docs/specs and docs/policies.
2. Review thresholds in scripts/enforce-recidivism.py.
3. Run manual verification:
   bash scripts/crons/daily-soul-review.sh
   bash scripts/crons/recursive-improvement.sh
   bash scripts/crons/weekly-self-improvement-review.sh
4. Only after review, wire your own cron entries for the scripts.
EOF
