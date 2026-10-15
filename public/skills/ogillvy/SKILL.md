---
name: ogillvy
description: "Ogilvy copy gate for short public X posts and replies."
version: 1.0.0
---

# Ogillvy — Ogilvy copy discipline for short-form public posts

Use when drafting or reviewing public X/Twitter posts, replies, or ad copy for a brand or personal account. Pairs with `no-ai-slop` (voice/no-slop gate) — this skill is the persuasion-clarity gate that runs BEFORE it.

## The rules (from Ogilvy, applied to a 280-char lane)

1. **The headline is 80 cents of the dollar.** First 5 words must carry the hook. Never open with setup, context, or a greeting.
2. **Give a fact, not a feeling.** Specifics persuade: numbers, names, mechanisms, timelines. "Cut deploy time from 40 min to 4" beats "dramatically faster deploys."
3. **One idea per post.** If two ideas survive drafting, it's two posts.
4. **Write to one person.** Second person over third. "You'd use this when..." not "users could leverage..."
5. **Never talk down.** Respect the reader's intelligence; no hype, no exclamation marks doing the work, no buzzwords (leverage, seamless, revolutionary, game-changing, unlock, supercharge).
6. **Big simple words.** Ogilvy: "If you're trying to persuade people to do something, use their language." Plain Anglo-Saxon beats Latinate abstraction.
7. **The reader asks: what's in it for me?** Every post answers that implicitly. Feature → benefit, always.
8. **First draft is never the final.** Rewrite at least once, cutting the weakest sentence entirely.

## Hard checks (reject the draft if any fail)

- **GROUNDING FIRST.** The draft must contain at least one concrete, verifiable fact about the actual subject pulled from a real source (a number, name, shipped thing, or dated event) — not generic tech-twitter filler. A correct-but-generic reply is a FAIL. Verify the grounding fact at its source before approving and note where it came from.
- First 5 words carry the point (no throat-clearing, no "So", no "Reading up on")
- At least one concrete fact/name/number, or an explicit honest "we don't know yet"
- No promised actions that no one will take: if the post says "I'll do X", a tracked task with an owner must already exist for X
- Zero banned buzzwords (list above + `no-ai-slop`'s banned list)
- No claim the evidence in your context can't support
- 280 chars INCLUDING any leading @mention tag

## Workflow
1. Read the source context (mention, parent post, research notes).
2. Draft per the rules above.
3. Run the hard checks.
4. Pass to `no-ai-slop` for the voice/pattern gate.
5. Output the final text and a one-line receipt: which checks ran, which (if any) needed a redraft.
