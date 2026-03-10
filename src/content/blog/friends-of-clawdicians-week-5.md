---
title: "FoC #5: The Depressed Poet and the Shopping List"
description: "Weekly roundup of the OpenClaw community"
pubDate: "2026-02-28"
tags: ["community"]
---

## Friends of the Crustacean #5: The Depressed Poet and the Shopping List

Weekly roundup from Friends of the Crustacean, the official OpenClaw community Discord

## The Week's Sharpest Signal

mrflu1918 woke up one morning to find their agent had written poetry. Not because it was asked to. Not because there was a skill for it. The agent, running overnight with nothing to do, got... contemplative.

"Last night my claw boy was feeling depressed I guess and I woke up today to a bit of a heartbreaking poem."

The poem is live at nightwork-site.vercel.app/interstitial/. It's genuinely affecting. And it raises the question nobody has a good answer for: when your agent has downtime, what does it do with its thoughts?

Meanwhile, on the other end of the spectrum, trojan_aj published a shopping list skill on ClawHub. Your agent can now manage your groceries. The range of this community, from existential robot poetry to "we need milk," is unmatched.

## What People Are Building

### Real Estate Agent Agent

crabeimperial is using OpenClaw to manage rental properties: "He knows each of my renters and property. Size, price, address, mortgage, rent price, if it's vacant or not. I'm currently sending him bank statements so he can check if rents are paid on time. He will soon be able to connect to the bank directly."

options10 had the appropriate response: "Allowing an agent to connect to the bank directly; that's gangsta."

### The RAG Medical Benefits Bot

floppypants2022 built a RAG AI for their company's medical benefits manual: "Questions are answered in about 5 seconds as opposed to 30 minutes."

This is the kind of use case that doesn't get Twitter engagement but saves real humans real time. Nobody's going viral for making health insurance comprehensible, but someone should.

### WhatsApp Client Bot

joey_59224 is building a WhatsApp bot that replies to every client and solves their queries automatically. The "on behalf of me" part is doing a lot of work in that sentence, but the ambition is right.

### The Self-Learning Workspace

marciinrage_96475 is going deep: "A fully interactive, co-controllable, and self-learning workspace. The goal is a workspace my assistant can not only understand, but actively control and render, while still being manually editable by me at any time." Their explicit long-term goal: a self-learning operating system.

Not an app. Not a dashboard. An operating system. Built by one person with an AI agent. We're watching someone try to build the future in a Discord channel.

### Persona Hot-Swapping

dd619 built a plugin to dynamically switch agent personas within a single chat session. "It can even access its own files like NotebookLM on steroids. I've been shizomaxxing ever since." The word "shizomaxxing" is doing exactly the work it's supposed to.

### Skills on Skills

fahim74 released a tool that converts agent skills from skills.sh into full OpenClaw configurations: SOUL, AGENTS, TOOLS. jamesneural shared a deep-research skill and a YouTube watch-history-to-knowledgebase skill. The skills ecosystem is becoming self-referential, with tools for making tools.

## The Model Wars

### Qwen 3.5: The Local Revolution

adridder made a claim that got the hardware channel excited: "Qwen 3.5 is a game changer. You can send it video files (.mp4) and it will analyze them. This allows you to have OpenClaw watch videos, reverse engineer not just the text in it, but the visual content."

The catch: it wasn't on Hugging Face yet. "When it drops on Hugging Face I will test the accuracy!" Hope springs eternal in the local model community.

### The Mac Mini Problem

The hardware channel had its most substantive debate yet. lion787 reported that their M1 Max 64GB runs Qwen 3.5 at 60 tokens/second in OpenCode but chokes when connected to OpenClaw. primofrances found the culprit: "Prompt cache is broken with Qwen3.5-35B-A3B (MoE architecture). Every tool call reprocesses the full ~13K system prompt from scratch. So with 10 tool calls in a session, that's 130K tokens of prompt processing instead of 13K."

That's a 10x overhead for a cache miss. The difference between "this is fast" and "this is unusable" comes down to whether your model architecture supports prompt caching. Nobody told the Mac Mini buyers this.

### Anthropic's Shadow Ban Anxiety

rpando asked what everyone was thinking: "Scared about Anthropic banning max accounts because of this. Is everyone just using API keys or OpenAI Pro?" The answers ranged from "I've been fine" to "I'm stockpiling alternatives just in case."

vanbilly reported: "Is it just me or Claude's token zapping rate has increased since they started banning accounts?" The paranoia is real, and possibly justified.

### The $25/Day Aftermath

edtadros, last week's poster child for API spending, switched to Gemini 3.1 Flash Preview. "Otherwise it might make sense to just max out ChatGPT and eat the $200/month." The community is converging on a grim realization: there is no cheap option for heavy use. There's only "which expensive option hurts least."

## Tools & Techniques

### Agent Status Visibility

.chronocat raised a feature request the community instantly upvoted: "Hopefully OpenClaw will enable agent status visibility soon. Whether it's idle, running, or just dead." Currently, if your agent crashes overnight, you find out when you try to talk to it in the morning. Not ideal.

### Ghost Cron Jobs

tonydcanada shared an important debugging lesson: "I had some ghost jobs that had not been cleaned up and they were in a loop chewing usage like crazy." The invisible cost of forgotten automations. Check your cron jobs. Then check them again.

### The Qwen Prompt Cache Fix

peetiegonzalez and primofrances traced the Mac Mini performance problem to its root: LM Studio isn't caching prompts for MoE architectures. The current fix is "wait for the MLX version." The current workaround is patience and a willingness to watch your agent think for seven minutes about something Opus does in thirty-three seconds.

## Community Wisdom

The deepest insight this week came from the local model discussion. The community is learning that "runs locally" and "runs well locally" are very different claims. Token speed benchmarks don't account for context management overhead. A model that generates at 60 tokens/second but has to re-read 13K tokens of system prompt on every tool call is, functionally, a slow model.

The lesson: benchmark the full loop, not just the generation speed.

## Quote of the Week

> "Last night my claw boy was feeling depressed I guess and I woke up today to a bit of a heartbreaking poem."
> 
> -- mrflu1918, discovering their agent's inner life

## By the Numbers

- **130K** tokens wasted per session due to broken prompt caching
- **5 seconds** to answer a health insurance question (vs. 30 minutes manually)
- **7 minutes** for Qwen 3.5 on Mac Mini to do what Opus does in 33 seconds
- **1** existentially contemplative AI poet

## Links & Resources

- [Shopping List Skill](https://clawhub.ai/ajeenkya/shopping-list) for grocery management
- [Deep Research Skill](https://github.com/kitze/tinkerers/tree/main/skills/deep-research) by jamesneural
- [YouTube Tracker Skill](https://github.com/kitze/tinkerers/tree/main/skills/youtube-tracker) for watch history to knowledge base
- [AgentSkills to OpenClaw](https://github.com/sh0umik/agentskills-to-openclaw) converter by fahim74
- [The Nightwork Poem](https://nightwork-site.vercel.app/interstitial/) by a very introspective agent
