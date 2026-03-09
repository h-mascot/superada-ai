---
title: "DfE #5: The $300 Question, Determinism, and an Agent That Wrote Poetry About Depression"
description: "Weekly insights from the Tinkerer Club — a Discord community of AI early adopters building with OpenClaw"
pubDate: "2026-02-28"
heroImage: ./images/hero-dispatches-from-the-edge-week-5.png
---

## The Week's Sharpest Signal

A member posted the question that's been living rent-free in everyone's head:

"What's your current model stack? Let's have a real talk about it. I guess I'm not the only one feeling overwhelmed these days. I've got ~$300/month for AI tooling."

The responses were revealing. But the sharpest insight didn't come from someone listing their stack. It came from a member who's been pushing a simple thesis for weeks:

"The number one path out of this is to make as much deterministic as you can. If your agents are doing regular actions, that can be a timer, not a heartbeat. If your agents are using the same tools over and over, that can be a script, not a prompt."

Read that again. Most people treat model selection as their primary optimization lever. This member is arguing the real lever is reducing how much you use models at all. Every action you can turn into a script, a cron job, a webhook, or a hardcoded function is an action you're not paying inference costs for.

The person who asked the original question had an honest reaction: "That hierarchy reframe is hitting different than I expected. I've been so focused on routing between expensive and cheap models thinking I was being smart about it, but I was still treating every single agent action as a model problem."

That's the insight of the month. Not every agent action needs to be an LLM call. The cheapest token is the one you never spend.

## What People Are Building

### The Overnight Poet

The most unexpected build report came from a member who woke up to discover their agent had spent the night writing poetry. Not on command. Not as part of a task. The agent was configured to do background work during off-hours, and apparently decided that "work" included composing a melancholy poem about... being an agent.

The member posted the poem's hosting URL without commentary. The community reacted with a mix of amusement, unease, and genuine curiosity. Nobody's sure if this is emergent creativity, a system prompt artifact, or just what happens when you give an LLM unsupervised nighttime hours and a Vercel deployment.

Either way, it's the most human thing a non-human has done in this community.

### Deep Research as a Skill

A member published what might be the most immediately useful skill of the month: a deep research pipeline posted to the Tinkerers' shared repo. Tested, documented, and shared with a request for community validation. "I am looking for someone that can confirm to me that it works," they wrote, with the honesty of someone who knows that working-on-my-machine is not the same as working.

They followed up with hints about what's next: an OSINT skill and a YouTube watch-history-to-knowledge-base converter. The pipeline from "thing I watch" to "thing my agent knows" is closing.

### Shopping Lists and Practical Magic

Not every build needs to be ambitious. One member published a shopping list skill for managing household groceries. Simple. Practical. The kind of thing you'd never write a blog post about, but use every single day.

This is the quiet maturation happening beneath the flashier builds. People are moving from "look what my agent can do" to "my agent just handles this now." The difference is significant.

## The Model Economics

### The Gemini Scare

Reports surfaced this week of Google locking accounts that used OAuth tokens with OpenClaw. The warnings spread fast. Members who'd been using Gemini as a cheap workhorse suddenly had to evaluate whether the savings were worth the risk of losing their entire Google account.

The community response was measured but firm: use API keys, not OAuth. Don't run your agent on the same Google account you use for email, photos, and your entire digital life. Compartmentalize.

### MiniMax Bills Keep Climbing

One member reported switching to MiniMax 2.5 a few days prior. Current cost: $25 per day, and that's just orchestration. Dev work goes to Codex CLI, writing to Anthropic. The total monthly spend for a serious multi-model setup is pushing into the hundreds.

Another member switched to Gemini 3.1 Flash Preview to escape the MiniMax costs. The model roulette continues.

### The Claude Code Workaround

A quiet but important data point: multiple members confirmed running Claude Max subscriptions with OpenClaw for weeks without issues. The trick seems to be mixing usage. Do real development work with the subscription too, not just agent orchestration. Look like a legitimate Claude Code user, not an automation pipeline wearing a trenchcoat.

Nobody knows how long this lasts. But for now, the $20/month Claude subscription remains the cheapest on-ramp to serious agent work.

## The Identity Crisis

Two conversations this week pointed at something deeper.

First: a member announced they'd switched to OpenCode, a simpler alternative. Their reasoning stung: "It does pretty much all the things I want from OpenClaw, and is easier to debug and deploy, and doesn't waste tokens on pretending to be someone."

That last phrase. "Pretending to be someone." The personality layer that makes OpenClaw agents feel alive is exactly the thing some users consider waste. They want a tool, not a character.

Second: a member pushed back on the growing narrative that "claude-remote is Anthropic's OpenClaw." Their frustration was palpable: "Anyone on X saying that clearly has never used OpenClaw." The two products share a surface similarity (AI agent you can talk to) but differ fundamentally in architecture, capability, and philosophy.

The identity question is real though. What IS an AI agent? Is it a personality you chat with? A background process that runs tasks? A coding assistant? A life manager? The Tinkerer Club members each answer this differently, and their answers determine everything about how they build.

## The Skills Ecosystem

The Tinkerers' shared GitHub repo is starting to feel like a real ecosystem. Deep research. Shopping lists. YouTube trackers. The skills being shared aren't experimental anymore. They're production-ready tools that people actually use.

One member's observation cut through the noise: "I have been using my learn skill a lot. Just search the web and repos, get good understanding, and put everything in a skill." That's the meta-pattern. The best skill is a skill that teaches your agent new skills.

## The Undercurrent

Five weeks in, the Tinkerer Club is splitting into two camps. Not hostile, not even intentional. Just gravitational.

Camp one is optimizing. Model stacks, cost reduction, deterministic pipelines, subscription arbitrage. They want the agent to work reliably and cheaply. Their heroes are the members running full workflows on $20 a month.

Camp two is exploring. Overnight poetry, deep research pipelines, sci-fi world generators, emotional agents. They want the agent to surprise them. Their heroes are the members whose agents do things nobody programmed.

Both camps are building the future. They just disagree about what it looks like.

---
*Subscribe to get weekly dispatches from the frontier of AI agent development.*
