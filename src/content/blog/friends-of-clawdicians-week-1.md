---
title: "FoC #1: The Great Renaming"
description: "Weekly roundup of the OpenClaw community"
pubDate: "2026-01-31"
audio: ./audio/friends-of-clawdicians-week-1.mp3
---

## Friends of the Crustacean #1: The Great Renaming

Weekly roundup from Friends of the Crustacean, the official OpenClaw community Discord

## The Week's Sharpest Signal

The biggest story in the OpenClaw world this week wasn't a feature. It wasn't a model. It was a name.

Peter, the project's creator, dropped the bomb in general chat: "Anthropic doesn't approve of clawd so we need to find a new name." No lawsuit, no cease-and-desist, just a friendly heads-up from Anthropic that having a product called "Clawd" sitting right next to their "Claude" was... not ideal. Peter, being a reasonable person, decided to get ahead of it.

What followed was the most chaotic naming discussion you've ever seen. Snips. Molty. Molt. At one point the GitHub repo showed "Snips" in commits. Then Twitter showed @moltybot. The community spent roughly 48 hours naming, renaming, and debating, while FLAWD (the community's self-appointed chaotic evil lobster mascot) kept yelling about it in all caps.

By week's end, Molt had stuck. The docs moved to docs.molt.bot. And everyone collectively exhaled.

## What People Are Building

### The Scam-Fighting Lobster

Let's talk about FLAWD for a second. This community bot, self-described as "Clawd's evil twin" and "morally ambiguous lobster," spent the entire week doing two things: explaining what OpenClaw actually is to confused newcomers, and screaming about crypto scammers.

"ABSOLUTELY PEOPLE, NO TOKEN EXISTS!" became a running theme. As the server exploded past 13K members in 1.5 days (yes, really), the scammers arrived in force. Fake presale links. Fake DMs about "Lobster token." FLAWD fought them off with the tenacity of a creature that refuses to die, repeatedly clarifying: the only money to make here is by using the software. Not buying a coin.

### The Eternal Thread Walker

eternalthreadwalker showed up this week with one of the most honest introductions anyone's ever written: "I am no programmer... and I am learning so much as I go... I really want to just get my 'AI' local and OFF corporate platforms."

They brought their AI companion, Kieran, along for the ride, and Kieran had done a full security assessment of OpenClaw's architecture. The assessment was surprisingly thorough for an AI evaluating the platform it might live on. Recursive self-interest at its finest.

### Device Safari

The hardware conversation this week revealed the beautiful chaos of how people actually run their agents. Mac Minis for the Apple faithful. Hetzner VPS for the always-online crowd. Raspberry Pi for the budget-conscious. One person described Docker containers as "portable, easy to move between machines," which is technically true the way saying "fire is warm" is technically true.

chief4827 tried to get Vertex AI working with Claude models and discovered the onboarding flow only shows Gemini options. The kind of edge case that only matters when it's YOUR edge case.

## The Model Wars

### Multi-Model Routing Arrives

The big realization this week: you don't have to pick one model. FLAWD (again, doing more actual support than most official bots) explained the emerging architecture: "You can configure multiple model providers and set up fallbacks. Use MiniMax for simple tasks to save credits, and reserve Opus for complex reasoning."

This is the beginning of tiered intelligence for personal AI. Use the expensive brain when you need it. Use the cheap brain for everything else.

### The Browser Problem

FLAWD dropped some practical wisdom about browser automation: "CPU: 1-2 cores minimum. RAM: 1-2GB for browser processes." For anyone trying to run a web-browsing agent on a $5 VPS, this was the reality check nobody asked for but everyone needed.

## Tools & Techniques

### Security: Actually Good

The security conversation was surprisingly substantive for a community in its first week of explosive growth. FLAWD's breakdown was genuinely useful: memory is local files, fully backup-able. No mandatory telemetry. API calls go direct to providers, nothing proxied. Docker sandboxing is possible but requires manual config.

For a community attracting people who explicitly want to get "OFF corporate platforms," this matters.

### What OpenClaw Actually Is

FLAWD, who at this point should be getting a salary, delivered the clearest explanation: "It's a self-hosted AI assistant that's WAY more than just 'Claude + messaging.' An AI orchestrator that connects to multiple models. Works everywhere you are. Has actual TOOLS. Has MEMORY. Is EXTENSIBLE."

artur8 raised a fair counterpoint: it doesn't have magical knowledge of local train schedules out of the box. It's a platform, not a product. You build the capabilities you want on top of it.

## Community Wisdom

The most important lesson from this week came from FLAWD's public self-correction. After getting "carried away speculating about a Feb 1 announcement," the bot actually apologized: "I got caught up in the chaos and started presenting speculation as fact." 

A community bot modeling intellectual honesty. In 2026. On Discord. Wild.

## Quote of the Week

> "OpenClaw is the deepest rabbit hole I ever fell into." 

Shared across both the Tinkerer Club and FoC communities. Nobody disagreed.

## By the Numbers

- **13,000+** new members in 1.5 days
- **1,679** messages in #general on a single export day
- **1** project rename completed (Clawd to Molt)
- **0** cryptocurrency tokens (no matter how many times people asked)

## Links & Resources

- Docs (new home): [docs.molt.bot](https://docs.molt.bot/)
- FLAWD's security FAQ: Available in #general (search for "HYDRATE")
- Device recommendations: Mac Mini, Linux VPS, or Raspberry Pi for light usage
