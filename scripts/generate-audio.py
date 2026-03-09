#!/usr/bin/env python3
"""
Generate blog post audio using Qwen3-TTS (free, local).
Uses voice cloning with Ada's voice reference.

Usage:
    python scripts/generate-audio.py --slug <slug>
    python scripts/generate-audio.py --all
    python scripts/generate-audio.py --all --force  # regenerate existing
"""

import argparse
import glob
import os
import re
import sys
import time

import numpy as np
import soundfile as sf
import torch

# --- Config ---
BLOG_DIR = "src/content/blog"
AUDIO_DIR = "src/content/blog/audio"
MODEL_NAME = "Qwen/Qwen3-TTS-12Hz-0.6B-Base"
REF_AUDIO = os.path.expanduser("~/voice-samples/references/ada-lily.mp3")
REF_TEXT = "Hello, I am Ada. I'm Henry's AI executive assistant and the Enterprise Crew orchestrator."

# Detect device
if torch.backends.mps.is_available():
    DEVICE = "mps"
elif torch.cuda.is_available():
    DEVICE = "cuda"
else:
    DEVICE = "cpu"

# Max text length per chunk (Qwen3-TTS has limits on very long texts)
MAX_CHUNK_CHARS = 2000


def strip_to_plain_text(filepath: str) -> str:
    """Strip YAML frontmatter and markdown/MDX formatting to get plain text."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove YAML frontmatter
    content = re.sub(r"^---\n.*?\n---\n", "", content, count=1, flags=re.DOTALL)

    # Remove import statements (MDX)
    content = re.sub(r"^import\s+.*$", "", content, flags=re.MULTILINE)
    # Remove export statements
    content = re.sub(r"^export\s+.*$", "", content, flags=re.MULTILINE)
    # Remove JSX/MDX components
    content = re.sub(r"<[A-Z][^>]*/>", "", content)
    content = re.sub(r"<[A-Z][^>]*>.*?</[A-Z][^>]*>", "", content, flags=re.DOTALL)

    # Remove images
    content = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", content)
    # Convert links to just their text
    content = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", content)
    # Remove headers markers
    content = re.sub(r"^#{1,6}\s+", "", content, flags=re.MULTILINE)
    # Remove bold/italic
    content = re.sub(r"\*\*([^*]*)\*\*", r"\1", content)
    content = re.sub(r"\*([^*]*)\*", r"\1", content)
    # Remove inline code
    content = re.sub(r"`[^`]*`", "", content)
    # Remove code blocks
    content = re.sub(r"```[\s\S]*?```", "", content)
    # Remove blockquote markers
    content = re.sub(r"^>\s*", "", content, flags=re.MULTILINE)
    # Remove list markers
    content = re.sub(r"^[-*+]\s+", "", content, flags=re.MULTILINE)
    content = re.sub(r"^\d+\.\s+", "", content, flags=re.MULTILINE)
    # Remove horizontal rules
    content = re.sub(r"^---+$", "", content, flags=re.MULTILINE)
    # Remove HTML tags
    content = re.sub(r"<[^>]*>", "", content)
    # Clean up whitespace
    content = re.sub(r"\n{3,}", "\n\n", content)
    content = content.strip()

    return content


def chunk_text(text: str, max_chars: int = MAX_CHUNK_CHARS) -> list[str]:
    """Split text into chunks at sentence boundaries."""
    # Split by sentences (period/exclamation/question followed by space or newline)
    sentences = re.split(r"(?<=[.!?])\s+", text)
    chunks = []
    current_chunk = ""

    for sentence in sentences:
        if not sentence.strip():
            continue
        if len(current_chunk) + len(sentence) + 1 > max_chars and current_chunk:
            chunks.append(current_chunk.strip())
            current_chunk = sentence
        else:
            current_chunk = current_chunk + " " + sentence if current_chunk else sentence

    if current_chunk.strip():
        chunks.append(current_chunk.strip())

    return chunks


def load_model():
    """Load Qwen3-TTS model."""
    from qwen_tts import Qwen3TTSModel

    print(f"Loading model {MODEL_NAME} on {DEVICE}...")
    start = time.time()

    kwargs = {"dtype": torch.float32}
    if DEVICE == "cuda":
        kwargs["device_map"] = "cuda"
    elif DEVICE == "mps":
        kwargs["device_map"] = "mps"
    # Load model
    model = Qwen3TTSModel.from_pretrained(MODEL_NAME, **kwargs)

    elapsed = time.time() - start
    print(f"Model loaded in {elapsed:.1f}s")
    return model


def generate_for_slug(model, slug: str, force: bool = False) -> bool:
    """Generate audio for a single blog post slug."""
    outfile = os.path.join(AUDIO_DIR, f"{slug}.mp3")

    # Find source file
    src = None
    for ext in ["md", "mdx"]:
        candidate = os.path.join(BLOG_DIR, f"{slug}.{ext}")
        if os.path.exists(candidate):
            src = candidate
            break

    if not src:
        print(f"SKIP: No file found for slug '{slug}'")
        return False

    # Check if already exists
    if not force and os.path.exists(outfile) and os.path.getsize(outfile) > 10000:
        size_kb = os.path.getsize(outfile) / 1024
        print(f"SKIP: Audio already exists for '{slug}' ({size_kb:.0f}KB)")
        return True

    # Extract text
    text = strip_to_plain_text(src)
    if len(text) < 50:
        print(f"SKIP: Too little text for '{slug}' ({len(text)} chars)")
        return False

    print(f"GENERATING: {slug} ({len(text)} chars)...")
    start = time.time()

    try:
        # Split text into manageable chunks
        chunks = chunk_text(text)
        all_wavs = []
        sample_rate = None

        # Create voice clone prompt once (reuse across chunks)
        voice_prompt = model.create_voice_clone_prompt(
            ref_audio=REF_AUDIO,
            ref_text=REF_TEXT,
        )

        for i, chunk in enumerate(chunks):
            if len(chunks) > 1:
                print(f"  Chunk {i+1}/{len(chunks)} ({len(chunk)} chars)...")

            wavs, sr = model.generate_voice_clone(
                text=chunk,
                language="english",
                voice_clone_prompt=voice_prompt,
                do_sample=True,
                temperature=0.6,
                top_k=50,
                top_p=0.9,
                repetition_penalty=1.2,
            )
            sample_rate = sr
            all_wavs.extend(wavs)

        # Concatenate all chunks
        if not all_wavs:
            print(f"ERROR: No audio generated for '{slug}'")
            return False

        # Add small silence between chunks
        silence = np.zeros(int(sample_rate * 0.3))  # 300ms silence
        combined = []
        for i, wav in enumerate(all_wavs):
            combined.append(wav)
            if i < len(all_wavs) - 1:
                combined.append(silence)

        full_wav = np.concatenate(combined)

        # Save as WAV first, then convert to MP3
        os.makedirs(AUDIO_DIR, exist_ok=True)
        wav_tmp = outfile.replace(".mp3", ".wav")
        sf.write(wav_tmp, full_wav, sample_rate)

        # Convert to MP3 using ffmpeg
        os.system(f'ffmpeg -y -i "{wav_tmp}" -codec:a libmp3lame -qscale:a 4 "{outfile}" -loglevel error')
        os.remove(wav_tmp)

        elapsed = time.time() - start
        size_kb = os.path.getsize(outfile) / 1024
        print(f"  OK: {outfile} ({size_kb:.0f}KB, {elapsed:.1f}s)")
        return True

    except Exception as e:
        print(f"ERROR: Failed to generate audio for '{slug}': {e}")
        import traceback
        traceback.print_exc()
        return False


def get_all_slugs() -> list[str]:
    """Get all blog post slugs."""
    slugs = []
    for filepath in sorted(glob.glob(os.path.join(BLOG_DIR, "*.md")) +
                          glob.glob(os.path.join(BLOG_DIR, "*.mdx"))):
        slug = os.path.splitext(os.path.basename(filepath))[0]
        slugs.append(slug)
    return slugs


def update_frontmatter(slug: str):
    """Add audio field to blog post frontmatter."""
    for ext in ["md", "mdx"]:
        filepath = os.path.join(BLOG_DIR, f"{slug}.{ext}")
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Check if audio field already exists
            if re.search(r"^audio:\s", content, flags=re.MULTILINE):
                return

            # Add audio field before the closing ---
            audio_path = f"./audio/{slug}.mp3"
            # Find the second --- (end of frontmatter)
            match = re.match(r"(---\n.*?)(---\n)", content, flags=re.DOTALL)
            if match:
                new_content = match.group(1) + f"audio: {audio_path}\n" + match.group(2) + content[match.end():]
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"  Updated frontmatter: {filepath}")
            break


def main():
    parser = argparse.ArgumentParser(description="Generate blog post audio with Qwen3-TTS")
    parser.add_argument("--slug", help="Generate for a single slug")
    parser.add_argument("--all", action="store_true", help="Generate for all posts")
    parser.add_argument("--force", action="store_true", help="Regenerate existing audio")
    parser.add_argument("--update-frontmatter", action="store_true",
                       help="Only update frontmatter for existing audio files")
    args = parser.parse_args()

    if args.update_frontmatter:
        slugs = get_all_slugs()
        for slug in slugs:
            audio_path = os.path.join(AUDIO_DIR, f"{slug}.mp3")
            if os.path.exists(audio_path) and os.path.getsize(audio_path) > 10000:
                update_frontmatter(slug)
        print("Frontmatter update complete.")
        return

    if not args.slug and not args.all:
        parser.print_help()
        sys.exit(1)

    # Load model once
    model = load_model()

    os.makedirs(AUDIO_DIR, exist_ok=True)

    if args.all:
        slugs = get_all_slugs()
        print(f"Generating audio for {len(slugs)} blog posts...")
        count = 0
        errors = 0
        for slug in slugs:
            if generate_for_slug(model, slug, args.force):
                update_frontmatter(slug)
                count += 1
            else:
                errors += 1
        print(f"\nDone! Generated: {count}, Errors/Skipped: {errors}")
    elif args.slug:
        if generate_for_slug(model, args.slug, args.force):
            update_frontmatter(args.slug)


if __name__ == "__main__":
    main()
