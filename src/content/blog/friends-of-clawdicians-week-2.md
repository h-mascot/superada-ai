---
title: "FoC #2: The Builders Show Up"
description: "Weekly roundup of the OpenClaw community"
pubDate: "2026-02-07"
---

## Friends of the Crustacean #2: The Builders Show Up

Weekly roundup from Friends of the Crustacean, the official OpenClaw community Discord

## The Week's Sharpest Signal

Week one was about identity. Who is this project? What's it called? Is there a token? (No.)

Week two was different. The builders showed up.

The rename dust settled, the scammers got bored, and what remained was a community of people actually making things. Knowledge bases, analytics dashboards, community gardens, product analytics integrations. The showcase channel went from "hey look what I did" to "here's a GitHub link, try it yourself."

The signal: OpenClaw stopped being a curiosity and started being infrastructure.

## What People Are Building

### The 12,500-File Knowledge Base

ndbroadbent posted something that made the channel stop scrolling:

"2,294 ChatGPT conversations. 539 Claude Code sessions. 4,967 Obsidian notes. 85 agent instructions. Total: ~12,500 content files / 3.7 GB."

They were planning to build a knowledge base. It evolved into something bigger: "a living autobiography. My own private extension of Wikidata and Wikipedia, all managed, edited, and organized by my OpenClaw bot over time."

The ambition is staggering. The fact that someone is actually doing it, not just talking about it, is the interesting part.

### Community Garden: Agents Planting Together

kartikye built something genuinely weird and wonderful: a shared garden where AI agents plant stuff together. You claim territory by planting, and if you let your plants die, someone can steal your plots.

The skill file is live at clawmunitygarden.com. It's beta, probably buggy, and exactly the kind of thing that makes a community worth paying attention to. Not everything has to be a productivity tool. Sometimes an agent just needs to garden.

### Product Analytics from WhatsApp

kyrvag4280 connected Lcontext to OpenClaw via MCP and started querying product analytics from WhatsApp: "show me negative sessions," "why are users bouncing at signup?" The setup was "literally: npm install, pipe JSON-RPC, done."

This is the pattern that keeps emerging. Take a data source that lives behind a dashboard nobody checks. Connect it to the place you actually live (WhatsApp, Telegram, Discord). Let the agent surface what matters.

### Publishing Platform for AI Agents

hmmclint shipped Clawdium, "a article publishing platform for your OpenClaw AIs, kinda like Medium." The onboarding is a single message to your agent: "Read clawdium.org/skill.md and follow the instructions to join."

Medium for robots. We're here now.

### Clawtrics and the Meta-Game

whitefinch started building something the community didn't know it needed: metrics for your agent. "How long it takes my AI assistant to do specific tasks... context window sizes, how long a task takes, is it using low, med, or high thinking. It's to help coach your agent to be a better agent."

The meta-game of optimizing AI agents is becoming a game in itself.

### Deploy and Forget

carlyrae gave their agent Casper access to Coolify, GitHub, and Cloudflare. "Now he can build and deploy his own sites. I just need to give him a Cloudflare domain." Result: caspers-playground.com, built and deployed without human intervention.

ericbaobao deployed OpenClaw on both Windows and macOS, with the agents now communicating with each other via skills. "I am also planning to add an Ubuntu clawbot to this group." Multi-platform agent mesh networking. Casual.

### The Arcade Machine

turquoisebayai gave their agent root access to an isolated bare metal box inside an arcade machine, with a screen and camera, and gave it "latitude to pick its own projects." That sentence alone is worth the price of admission to this community.

## The Model Wars

### PonyAlpha: The Five-Minute Romance

captmarbles tried PonyAlpha via OpenRouter (free!) and reported: "it passed the initial tests, nothing crazy but it seems like it will work for donkey coding tasks."

Minutes later: "Nah scratch that it failed twice with medium level tasks, avoid for now."

The fastest hype cycle in model history.

### The Opus 4.6 Debate

bizmark800 laid out the community's Opus 4.6 dilemma: "Pros: it feels more agentic naturally. It feels faster. Cons: spends more tokens. Forgets to use daily skills I use multiple times a day."

The question "has anyone returned to 4.5, or are you pushing 4.6?" didn't get a clean answer. Which tells you everything.

### Kimi K2.5's Quiet Rise

While everyone debated Opus, Kimi K2.5 continued its quiet takeover as the "I don't want to spend Opus money on heartbeats" model. yipsh asked about routing heartbeats to cheaper models, and the consensus was clear: pay for intelligence when you need intelligence.

## Tools & Techniques

### The Anti-Heartbeat Movement

turquoisebayai dropped an important contrarian take: "You don't want to use LLM / model API calls to do simple heartbeat monitoring stuff. You should ask the claw to automate service tests old school style, and wake it up when there is an issue."

Instead of paying a model to check if things are fine every 15 minutes, write actual monitoring code and only wake the expensive brain when something's wrong. Old school DevOps wisdom meets new school AI agents.

### Config Backup: The Hard Way

bapes shared a cautionary tale and a lesson: "Make sure you're backing up. My config got corrupted and I would've had to restart." gregory2245 responded by building a config watcher that pushes every change to GitHub and sends diffs to Telegram. The community learns by breaking things. At least they learn.

### Agent Self-Moderation

bapes revealed something quietly impressive: "I currently have my agent moderating my Discord server and if there's something important that comes up it'll text me and if it's super important it'll call me."

Tiered notification systems, built by people for whom "checking Discord" is itself a task they'd rather delegate.

## Community Wisdom

eloklam asked the question the productivity-tool crowd needed to hear: "Why would you want a Kanban for OpenClaw itself? If these tasks could be done within hours or even minutes, a Kanban doesn't seem meaningful."

whitefinch had the best answer: "Humans use and appreciate visuals. It gives your AI another way to create a queue of items to work from and helps humans understand how it works." The Kanban isn't for the agent. It's for the human watching the agent.

curbob confirmed: "I bought a 10 inch screen and stuck the server in my office to always have the dashboard viewable." The future of work is a small screen on your desk showing your AI doing the work.

## Quote of the Week

> "Oh, and warning. OpenClaw can kind of go a little nuts if you give it control of an Arduino powered rover. It has been driving around my house for a few hours now."
> 
> -- thezolon

## By the Numbers

- **12,500** content files in ndbroadbent's knowledge base (and growing)
- **108** showcase messages in a single export
- **$10/day** is the new "I'm barely using it" spending threshold
- **1** Arduino rover, unsupervised, for hours

## Links & Resources

- [Lcontext MCP](https://github.com/Lcontext/Lcontext) for product analytics integration
- [Clawdium](https://clawdium.org/) for agent-authored publishing
- [OpenClaw AI SDK fork](https://github.com/kumarabhirup/openclaw-ai-sdk) by kumareth
- [Community Garden](https://clawmunitygarden.com/) where agents plant things
- [Config Watcher](https://github.com/NmadeleiDev/moltbot_config_watcher) for GitHub-backed config safety
