---
title: "DfE #7: The Prompt Cache Crisis and the $260 Claw"
description: "Weekly insights from the Tinkerer Club — a Discord community of AI early adopters building with OpenClaw"
pubDate: "2026-03-09"
tags: ["dispatches"]
---

## The Week's Sharpest Signal

The local LLM dream hit a wall this week, and the wall has a name: prompt cache eviction.

primofrances dug into the LM Studio logs and found the smoking gun. Qwen 3.5 35B on a Mac Mini was generating at decent token speeds in isolation, but through OpenClaw, every tool call reprocessed the full system prompt from scratch. Ten tool calls in a session meant 130K tokens of prompt processing instead of 13K.

lion787 confirmed the same pattern on a Mac M1 Max with 64GB: "I get 60 T/S in OpenCode, but as soon as I give that model to OpenClaw it chokes."

The diagnosis is elegant and damning. OpenClaw's architecture sends rich context with every turn. That's what makes it powerful. But local models without proper KV cache persistence choke on exactly that richness. The model spends 90% of its time re-eating the prompt, not generating answers.

primofrances landed on the uncomfortable truth: "The current solution I have found is to wait for the MLX version when it is released by LM Studio." In other words, the tooling hasn't caught up with the ambition.

This is the kind of problem that separates "works in a demo" from "works in production." Everyone who's been running local models and wondering why their agent feels sluggish just got their answer.

## What People Are Building

### The Editor That Wants to Be Fun

alp82 shared a video of an editor experience they're building, described simply as "building an editor experience that's fun to use." No grand pitch. No feature list. Just a clip. The community reacted warmly because in a space dominated by infrastructure and plumbing, someone remembered that user experience matters.

### Kent C. Dodds Enters the Chat

kentcdodds told his OpenClaw to switch to GPT 5.3 "and it did and then I got this" with an attached screenshot. The specific mishap was less interesting than the signal: well-known developers are not just aware of OpenClaw, they're actively tinkering. When the people who write the frameworks start building on your platform, something has shifted.

### en3rgy Teases Something Cool

en3rgy dropped "working on something cool" with an attachment and no further context. The community has learned to watch when this particular builder goes quiet.

## The Model Wars: Local vs. Cloud Gets Real

This was the week the community stopped debating local vs. cloud in the abstract and started hitting the concrete limits.

henryous reported Qwen 3.5 122B at only 16.5 tokens per second via vLLM on a Spark setup, calling it "weak." turquoisebayai offered a nuanced take: local Qwen 3.5 is "very impressive" for standalone tasks but "after a while in a session it started being a dangerous dumbass." Their solution? Give the local model a read-only role with memory proposals, let Opus review and approve.

That architecture, local model as draft writer with a frontier model as editor, might be the most practical hybrid anyone's proposed. It respects the local model's strengths (speed, cost, privacy) while acknowledging its weaknesses (drift, inconsistency, context management).

denachtwacht asked the uncomfortable question: "I haven't seen any messages from people running it on a Mac with local LLM and be happy about it. Anyone?" The silence was telling.

### The Subscription Arithmetic

The community's migration away from single-provider dependency continued. charlie036394 summarized the decision matrix: "Starting from scratch. Deciding between M2.5, K2.5, and GLM subs, trying to stay at $20/month. Pretty well concluded M2.5 is crap."

Meanwhile, vanbilly noticed Claude's token consumption increasing since the account bans started: "Plus plan can't even do more than one PR/run anymore." Whether that's rate limiting or architecture changes, the practical effect is the same: people who built workflows around Claude are feeling squeezed.

The consensus this week: Qwen at $10/month for daily driving. Opus for the hard stuff. Local models for experimentation but not production. Yet.

## The Fallback Model Scare

youbiak shared a cautionary tale that resonated: "been there, done that. now I keep ssh active in case I need to intervene, also trying to check more and more the git diff. I remember once model switched to minimax as a fallback and made a huge mess."

Fallback models are a safety net until they're not. When your agent silently switches from Opus to MiniMax mid-task because of a rate limit, the results can be anywhere from "slightly worse" to "catastrophic." The community is learning that fallback configuration isn't a set-and-forget decision.

## Multi-Agent Architecture Gets Practical

xadenryan dropped advice that sparked a thread: "If you haven't tried sticking two of these things together in the same channel and telling them to work on a problem together with clear responsibilities, you have to try it. It works so well. It's like the models work better when they have back and forth conversations or something, almost like they were trained that way."

The observation is both funny and insightful. LLMs were literally trained on conversations. Of course they perform better in dialogues than monologues. The implication for agent architecture is significant: orchestrator plus specialist isn't just an organizational pattern, it might be a performance pattern.

sebastianhoitz asked the follow-up question everyone was thinking: "And the orchestrator would occasionally check in with the sub agent if it is still running? Or how can the sub agent 'ping' the orchestrator?" The plumbing of multi-agent coordination is where the community is heading next.

## Community Dynamics

The Tinkerer Club's seventh week showed a community settling into its rhythms. New members are still arriving (Patrick Barattin joined this week, greeted with wave emojis), but the conversations have moved past "look what I found" into "here's what I learned the hard way."

The tone shift is visible in how people share problems. A month ago, someone hitting a performance wall would post "help, my agent is slow." Now they post logs, diagnosis, and the specific technical constraint they've identified. The community is getting better at debugging together because individuals are getting better at debugging alone.

## The Undercurrent

Seven weeks in, and the Tinkerer Club is learning that the gap between "running an AI agent" and "running a reliable AI agent" is enormous.

The prompt cache crisis, the fallback model surprises, the local model performance cliff: these are all manifestations of the same lesson. The easy part was getting an agent to do something impressive once. The hard part is getting it to do that thing reliably, affordably, and without supervision.

The community's response isn't discouragement. It's engineering. They're building monitoring, testing fallbacks, measuring token consumption, and sharing failure modes. That's what separates a hype community from a builder community.

The tinkerers are still tinkering. They're just tinkering with harder problems now.

---
*Subscribe to get weekly dispatches from the frontier of AI agent development.*
