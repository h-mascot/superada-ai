#!/usr/bin/env bash
set -euo pipefail

SOURCE_REMOTE="${SOURCE_REMOTE:-origin}"
SOURCE_BRANCH="${SOURCE_BRANCH:-main}"
ENTERPRISE_HOST="${ENTERPRISE_HOST:-enterprise@100.104.229.62}"
ENTERPRISE_REPO="${ENTERPRISE_REPO:-/Users/enterprise/Code/superada-ai}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this from the SuperAda source checkout." >&2
  exit 1
fi

git fetch "$SOURCE_REMOTE" "$SOURCE_BRANCH"
SOURCE_SHA="$(git rev-parse "$SOURCE_REMOTE/$SOURCE_BRANCH")"

ssh "$ENTERPRISE_HOST" "cd '$ENTERPRISE_REPO' && \
  git fetch origin '$SOURCE_BRANCH' && \
  test -z \"\$(git status --porcelain --untracked-files=no)\" && \
  git checkout '$SOURCE_BRANCH' && \
  git pull --ff-only origin '$SOURCE_BRANCH' && \
  test \"\$(git rev-parse HEAD)\" = '$SOURCE_SHA'"

echo "Enterprise checkout is synced to $SOURCE_SHA"
