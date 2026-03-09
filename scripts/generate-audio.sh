#!/usr/bin/env bash
set -euo pipefail

# Generate ElevenLabs TTS audio for blog posts
# Usage: ./scripts/generate-audio.sh --slug <slug>
#        ./scripts/generate-audio.sh --all

BLOG_DIR="src/content/blog"
AUDIO_DIR="src/content/blog/audio"
VOICE_ID="pFZP5JQG7iQjIQuC4Bku"
MODEL_ID="eleven_multilingual_v2"

# Get API key
API_KEY=$(jq -r '.api_key' ~/clawd/secrets/elevenlabs.json 2>/dev/null)
if [[ -z "$API_KEY" || "$API_KEY" == "null" ]]; then
  echo "ERROR: Could not read ElevenLabs API key from ~/clawd/secrets/elevenlabs.json"
  exit 1
fi

mkdir -p "$AUDIO_DIR"

strip_to_plain_text() {
  local file="$1"
  # Remove YAML frontmatter (between --- markers)
  # Remove import statements
  # Remove MDX/JSX components
  # Remove markdown formatting
  sed -E '
    /^---$/,/^---$/d
    /^import /d
    /^<[A-Z]/d
    /^export /d
  ' "$file" | sed -E '
    s/!\[[^]]*\]\([^)]*\)//g
    s/\[([^]]*)\]\([^)]*\)/\1/g
    s/^#{1,6}\s+//
    s/\*\*([^*]*)\*\*/\1/g
    s/\*([^*]*)\*/\1/g
    s/`[^`]*`//g
    s/^>\s*//
    s/^[-*+]\s+//
    s/^[0-9]+\.\s+//
    s/---//g
    s/<[^>]*>//g
    /^[[:space:]]*$/d
  ' | tr '\n' ' ' | sed 's/  */ /g' | head -c 40000
}

generate_for_slug() {
  local slug="$1"
  local outfile="$AUDIO_DIR/${slug}.mp3"
  
  # Find the source file
  local src=""
  for ext in md mdx; do
    if [[ -f "$BLOG_DIR/${slug}.${ext}" ]]; then
      src="$BLOG_DIR/${slug}.${ext}"
      break
    fi
  done
  
  if [[ -z "$src" ]]; then
    echo "SKIP: No file found for slug '$slug'"
    return 1
  fi

  if [[ -f "$outfile" ]] && [[ $(stat -f%z "$outfile" 2>/dev/null || stat -c%s "$outfile" 2>/dev/null) -gt 10000 ]]; then
    echo "SKIP: Audio already exists for '$slug' ($(du -h "$outfile" | cut -f1))"
    return 0
  fi

  local text
  text=$(strip_to_plain_text "$src")
  local text_len=${#text}
  
  if [[ $text_len -lt 50 ]]; then
    echo "SKIP: Too little text for '$slug' ($text_len chars)"
    return 1
  fi

  echo "GENERATING: $slug ($text_len chars)..."

  local json_text
  json_text=$(printf '%s' "$text" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')

  local http_code
  http_code=$(curl -s -o "$outfile" -w "%{http_code}" \
    -X POST "https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}" \
    -H "xi-api-key: ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d "{\"text\": ${json_text}, \"model_id\": \"${MODEL_ID}\", \"voice_settings\": {\"stability\": 0.5, \"similarity_boost\": 0.75}}")

  if [[ "$http_code" != "200" ]]; then
    echo "ERROR: API returned HTTP $http_code for '$slug'"
    cat "$outfile" 2>/dev/null  # Show error body
    rm -f "$outfile"
    return 1
  fi

  local size
  size=$(du -h "$outfile" | cut -f1)
  echo "  OK: $outfile ($size)"
}

# Parse args
SLUG=""
ALL=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --slug) SLUG="$2"; shift 2 ;;
    --all) ALL=true; shift ;;
    *) echo "Unknown arg: $1"; exit 1 ;;
  esac
done

if $ALL; then
  echo "Generating audio for all blog posts..."
  count=0
  errors=0
  for file in $(find "$BLOG_DIR" -maxdepth 1 -type f \( -name '*.md' -o -name '*.mdx' \) | sort); do
    [[ -f "$file" ]] || continue
    slug=$(basename "$file" | sed -E 's/\.(md|mdx)$//')
    if generate_for_slug "$slug"; then
      count=$((count + 1))
    else
      errors=$((errors + 1))
    fi
    # Rate limit: ElevenLabs allows ~2-3 requests/sec
    sleep 2
  done
  echo ""
  echo "Done! Generated: $count, Errors/Skipped: $errors"
elif [[ -n "$SLUG" ]]; then
  generate_for_slug "$SLUG"
else
  echo "Usage: $0 --slug <slug> | --all"
  exit 1
fi
