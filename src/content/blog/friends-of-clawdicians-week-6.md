---
title: "FoC #6: The Determinism Manifesto"
description: "Weekly roundup of the OpenClaw community"
pubDate: "2026-03-07"
---

## Friends of Clawdicians #6: The Determinism Manifesto

Weekly roundup from Friends of the Crustacean, the official OpenClaw community Discord

## The Week's Sharpest Signal

subsetpark published what might be the most important paragraph anyone's written in this community:

"I'll keep banging this drum, but I think that the number one path out of this is to make as much deterministic as you can. If your agents are doing regular actions: that can be a timer, not a heartbeat. If your agents are using the same tools over and over: that can be a script, not a markdown file. Our default standpoint should not only be to fall back to the most expensive models as a last resort, but to fall back to models as a last resort."

Read that again. The person in the AI agent community is telling you to use fewer AI agents.

Not because agents are bad. Because treating everything as a model problem is expensive, unreliable, and unnecessary. The boring old tools (cron jobs, scripts, database queries) didn't stop working when LLMs arrived. They just got overshadowed.

koalabhatti had the lightbulb moment: "I've been so focused on routing between expensive and cheap models thinking I was being smart about it, but I was still treating every single agent action as a model problem. Looking at my OpenClaw setup now with fresh eyes, two questions alone can trigger 8+ API calls under the hood because of how tool loops chain."

Eight API calls for two questions. That's not a model routing problem. That's an architecture problem.

## What People Are Building

### Mission Control Gets Jira

cristofr updated Mission Control to v1.3.1 and shipped a Jira integration branch: "I don't use Jira so would love it if someone who does would test it." The honest admission that you shipped an integration for a tool you don't use is either brave or foolish, and in this community, usually both.

### The Clawtributor Engine

The contributor channel was buzzing this week. The OpenClaw repo is attracting serious pull requests:

rufin0dagnome submitted api.resetSession for the Plugin SDK. ipgarden pushed a session hook for detecting changes in models and labels. radiofreeottawa is fixing TUI streaming issues and filing honest bug reports about CI regressions. phineas1500 fixed a config validation bug where plugin failures would nuke your entire configuration.

These aren't glamorous features. They're the plumbing that makes everything else work. The community is maturing from "look what I built on top" to "let me fix what's underneath."

### The LINE Integration

lingone_52456 surfaced a bug that matters: the LINE channel's groupPolicy setting isn't working correctly. "I've set groupPolicy: 'mention' but the bot still responds to all group messages." Small bug, big annoyance for anyone running an agent in a group chat where it won't stop talking.

## The Model Wars

### The $300/Month Budget Stack

koalabhatti framed the question the community has been circling for weeks: "I've got ~$300/month for AI tooling. Use Claude Opus 4.6 as the 'brain' for complex reasoning, but delegate as much work as possible to cheaper/faster models."

subsetpark's response reframed it entirely. The hierarchy isn't expensive model > cheap model. It's: deterministic code > cheap model > expensive model. Most of what agents do repeatedly can be a script. What's left can be a cheap model. Save the expensive brain for genuinely non-deterministic problems.

"To give a concrete example: my morning summary timed job is a prompt. It's asking the agent to grab information from a bunch of disparate sources, decide what's important." That's a legitimate model use. But the 47 heartbeat checks that preceded it? Those should be timers.

### The Alibaba Roulette

vanbilly reported rotating API key failures with Alibaba's coding plan: "Do I have to keep generating API keys every hour?" peetiegonzalez confirmed: "Alibaba GLM5 is practically unusable. But K2.5 on Alibaba is fire. Faster than anywhere else by a big margin."

The Chinese model ecosystem is fast and cheap but reliability varies wildly between providers and even between models on the same provider.

### Qwen 3.5: Promise and Pain

cypherfoxy ran Qwen 3.5 locally: "I'm getting around 30 tokens/second on the 122B model. It seems decent. I'm not sure yet." The hedging is honest. Local models keep getting better and nobody's quite sure when "better" crosses the threshold into "good enough."

peetiegonzalez tested Qwen for a morning report: "Opus-like writing skills." Then tried actual work: "Absolute disaster. Repeatedly misunderstood instructions, then failed to follow them even after clarification. Fixed one thing, broke another without being asked." The two faces of local models: great for structured output, terrible for agentic reasoning.

### The Subscription Exodus

The Claude Max anxiety finally produced action. charlie036394 summarized the decision tree: "About to launch a second OC on a Mac Mini, starting from scratch. Had been using Plus plan for Codex CLI. Deciding between M2.5, K2.5, and GLM subs, trying to stay at ~$20/month. Pretty well concluded M2.5 is crap." peetiegonzalez: "Qwen so far so good. $10/month, first month $5, can't really complain."

The community is diversifying away from Anthropic. Not because Claude is bad, but because the risk of losing access overnight is too high to build a workflow around.

## Tools & Techniques

### femyn.eth: The Community's Debugger

femyn.eth emerged this week as the most helpful person in #users-helping-users. Their contributions read like a mini-textbook:

On config crashes: "The gateway mostly crashes when the per agent model override doesn't match the expected object structure." On rate limits: "If you're hitting rate limits with almost no interaction, it means OpenClaw is making calls in the background. Heartbeats, retries, subagents looping." On hardware constraints: "With 8GB RAM, stay conservative. Go for a 3B model, not 7B."

Every community needs someone who answers questions with actual debugging logic instead of "have you tried restarting it?"

### The Meta-Cognition Problem

315_incline_sage raised a question that the community is increasingly confronting: "Frontier LLMs still feel weak at meta-cognition. They don't reliably notice their own constraints, don't proactively checkpoint or summarize, and generally behave like assistants rather than actors running a control loop."

This is the gap between "AI agent" as marketing and AI agent as reality. The models can use tools. They can follow instructions. But they don't manage themselves. That's still your job.

### sirsephiroth's Agent That Won't Leave

sirsephiroth captured the common frustration: "My OpenClaw comes up with the whole PRD, implements phase 1 itself, opens PRs, then it's like 'what now?' even if I tell it to be proactive and continue on or make decisions itself, it'll just wait for me."

.dhess proposed the engineering answer: two LLMs working in conjunction, one as generator and one as auditor, in a verification loop. The community is slowly converging on the idea that single-agent architectures hit a ceiling, and multi-agent coordination is the way past it.

## Community Wisdom

subsetpark's determinism manifesto is the biggest idea this community has produced. The smartest people in the room aren't the ones spending the most on API calls. They're the ones who figured out which problems don't need an LLM at all.

The corollary: every dollar you save by making something deterministic is a dollar you can spend on the problems that actually require intelligence.

## Quote of the Week

> "We should make our own Discord. With blackjack and hookers. You know, forget about the Discord."
> 
> -- th3gismar, immediately followed by "b4 ban this is an adapted quote from Futurama pls no ban"

## By the Numbers

- **8** API calls triggered by 2 questions (before subsetpark's intervention)
- **$300/month** the new "serious hobbyist" budget
- **$10/month** for Qwen 3.5 (first month $5)
- **30** tokens/second for local 122B Qwen (decent but hedged)
- **6** serious contributor PRs in a single week

## Links & Resources

- [Mission Control v1.3.1](https://github.com/crshdn/mission-control) with Jira integration branch
- [Alibaba Coding Plan](https://modelstudio.console.alibabacloud.com/) for Qwen 3.5 at $10/month
- [OpenClaw PR #29985](https://github.com/openclaw/openclaw/pull/29985) for Plugin SDK session reset
- [OpenClaw PR #23910](https://github.com/openclaw/openclaw/pull/23910) for session hooks
