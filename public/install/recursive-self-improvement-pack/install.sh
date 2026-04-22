#!/usr/bin/env bash
set -euo pipefail

BUNDLE_URL_DEFAULT="https://superada.ai/install/recursive-self-improvement-pack"

usage() {
  cat <<EOF
Usage:
  bash <(curl -fsSL ${BUNDLE_URL_DEFAULT}/install.sh) /path/to/your/openclaw-workspace
  bash install.sh /path/to/your/openclaw-workspace
  bash install.sh ${BUNDLE_URL_DEFAULT} /path/to/your/openclaw-workspace

Environment overrides:
  BUNDLE_URL=<bundle-base-url>
  TARGET_DIR=<workspace-path>
EOF
}

if [ "${1:-}" = "-h" ] || [ "${1:-}" = "--help" ]; then
  usage
  exit 0
fi

if [ -n "${TARGET_DIR:-}" ]; then
  WORKSPACE="$TARGET_DIR"
elif [ -n "${2:-}" ]; then
  BUNDLE_URL="${1:-$BUNDLE_URL_DEFAULT}"
  WORKSPACE="$2"
elif [ -n "${1:-}" ]; then
  case "$1" in
    http://*|https://*)
      BUNDLE_URL="$1"
      WORKSPACE="$PWD"
      ;;
    *)
      BUNDLE_URL="${BUNDLE_URL:-$BUNDLE_URL_DEFAULT}"
      WORKSPACE="$1"
      ;;
  esac
else
  BUNDLE_URL="${BUNDLE_URL:-$BUNDLE_URL_DEFAULT}"
  WORKSPACE="$PWD"
fi

BUNDLE_URL="${BUNDLE_URL:-$BUNDLE_URL_DEFAULT}"

if [ ! -d "$WORKSPACE" ]; then
  echo "Target workspace does not exist: $WORKSPACE" >&2
  echo >&2
  usage >&2
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
Bundle source: $BUNDLE_URL

What this installer did:
- Downloaded the published bundle files into your workspace
- Set executable bits on the shipped scripts

What this installer did NOT do:
- Did not create cron jobs
- Did not auto-enable automation
- Did not mutate live config outside the installed files

Next steps:
1. Review the installed docs under docs/specs and docs/policies.
2. Review the source bundle in GitHub / the published bundle URLs before trusting it broadly.
3. Review thresholds in scripts/enforce-recidivism.py.
4. Run a quick verification pass:
   bash scripts/crons/daily-soul-review.sh
   bash scripts/crons/recursive-improvement.sh
   bash scripts/crons/weekly-self-improvement-review.sh
   python3 scripts/crons/generate-recursive-visibility.py
5. Only after review, wire your own cron entries for the scripts.
EOF
