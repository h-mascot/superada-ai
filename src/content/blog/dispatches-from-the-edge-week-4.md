---
title: "DfE #4: The Train Dispatcher, the Ghost Processes, and MiniMax at $25 a Day"
description: "Weekly insights from the Tinkerer Club — a Discord community of AI early adopters building with OpenClaw"
pubDate: "2026-02-21"
heroImage: ./images/hero-dispatches-from-the-edge-week-4.png
audio: /audio/dispatches-from-the-edge-week-4.mp3
tags: ["dispatches"]
---

## The Week's Sharpest Signal

A frustrated builder dropped a metaphor this week that reframed how a lot of people think about agent orchestration:

"It needs a sequence of steps with gates, like a train dispatcher."

The argument: cron jobs and heartbeats are not enough. They're timers, not coordinators. What agents actually need is conditional sequencing. If this happened, then do that. If this failed, route here instead. Not "check every 30 minutes," but "proceed when the signal turns green."

Another member pushed back hard: "You are the train conductor. If you set your system up correctly it'll re-run and do those tasks." Their framework was simpler. Three layers: Boss (you providing instructions), LLM/Agent (understanding and executing), Cron/Heartbeat (checking and repeating).

The community didn't reach consensus. Some people want smarter orchestration primitives. Others think the existing tools are fine and the problem is user skill. This tension, between making the tools smarter and making the users better, runs through almost every conversation in the Tinkerer Club.

## What People Are Building

### Hands-Free Claude Code

One member posted a video of their hands-free Claude Code setup using an eye tracker. The response was immediate and predictable: "Who's gonna beat my hands-free setup? Time for a new challenge? Best eye tracker?" The founder was already thinking about it.

This is how the Tinkerer Club works. Someone does something slightly absurd. Everyone else decides to one-up it. Features emerge from competitions nobody formally organized.

### Real-Time Agent Dashboards

A builder showed off something genuinely impressive: real-time transcripts from all agents, with diffs and change views for managing tasks in a self-hosted Plane instance, plus an integrated code-review tab. It wasn't packaged for distribution yet. Built on a specific stack (Gitea, Plane, OpenGist, Codeserver). But another member immediately started reverse-engineering it to build their own version.

### First Solo PR to OpenClaw

One member submitted what they believed was their first solo pull request to the OpenClaw core repo: a fix for Mattermost (a self-hosted Slack alternative) integration. Small fix. Significant moment. The more people contributing upstream, the faster the platform improves.

## The Ghost Process Incident

After an OpenClaw upgrade, one member discovered leftover "ghost" processes that weren't cleaned up properly. These phantom processes got stuck in a loop and burned about 60% of their weekly Codex Plus allowance. Completely silently.

The debugging story is instructive. The user didn't notice for hours. When they checked their usage dashboard, the damage was done. The fix required manually hunting down and killing orphaned processes.

This is the kind of failure mode that erodes trust. Not a crash, not an error message, just invisible consumption running in the background. The community's takeaway: monitor your usage dashboards like you monitor your bank account. Set up alerts. Trust but verify.

## The $25/Day Model Stack

MiniMax found its place this week as the community's default orchestration model. One member reported running it as their daily driver: "MiniMax 2.5 is my daily driver at this point. Codex for heavy lifting but I rarely use it. MiniMax just handles everything."

Another member was less thrilled with the bill: $25 per day for orchestration alone, with Codex CLI handling dev work and Anthropic models handling writing. That's $750 a month before you count the API costs from the other providers.

The price sensitivity is fascinating. Some members spend $20 total and feel like they're getting away with something. Others spend $25 a day and consider it a business expense. The difference isn't usually the tools. It's whether the agent is a hobby or a production system.

One member asked the only question that matters: "What's your monthly budget and what are you getting for it?" The answers ranged from "I have a Claude Max subscription and I'm scared they'll ban me" to "I'm running $300 a month and it's the best money I've ever spent."

## The Great Model Confusion

### Local Models Actually Working

A member dropped news that made the local-model crowd sit up: Qwen 3.5 can process video files directly. Feed it an .mp4, it analyzes the visual content. Not just transcription, not just frame extraction, but actual video comprehension. Running locally. Open source.

The builder hadn't tested it on Hugging Face drops yet, but had successfully used the same workflow with Gemini models. If the local version performs, it changes the economics of video-based agent workflows completely.

### The Subscription Confusion

One member asked the question that surfaces every single week: "Can I use Claude through a subscription for OpenClaw, or do I have to use the API?"

The advice from experienced members was blunt: "Pick the latest model of whatever you're subscribed to and stick to it. You'll spend too much time and energy trying to find the ideal model if you try to keep up with the hype cycle."

That's the most pragmatic advice anyone's given all month. The model wars are exhausting. Pick one. Ship something. Optimize later.

## The Raycast Partnership

The Tinkerer Club announced its second partner: Raycast, the macOS productivity app that's been quietly replacing a dozen utilities for power users. The founder's pitch was personal: "I've been using it since it was released, and for me it replaced at least 10 of the apps that I usually install on a mac."

For a community that's allergic to unnecessary apps, that's a strong endorsement. Whether Raycast becomes part of agent workflows or just stays a developer tool remains to be seen, but the partnership signals that companies in the productivity space are watching what the tinkerers are doing.

## The Undercurrent

Something shifted in the community's mood this week. Early excitement is giving way to practical frustration. Not disillusionment. More like the difference between dating someone and moving in together. The honeymoon phase is over. The real work of living together has begun.

Ghost processes eating your credits. $25/day model bills. Cron jobs that need a train dispatcher to coordinate. These aren't fun problems. But they're the problems that emerge when people actually use the tools for real work, not just demos.

The members who are thriving share a trait: they've stopped chasing the perfect setup and started shipping with whatever works. The ones struggling are still optimizing their model stack instead of building something.

---
*Subscribe to get weekly dispatches from the frontier of AI agent development.*
