---
title: "FoC #7: The Week Everything Got Real"
description: "Weekly roundup of the OpenClaw community"
pubDate: "2026-03-09"
tags: ["discord-communities"]
heroImage: ./images/hero-friends-of-clawdicians-week-7.png
---

## Friends of Clawdicians #7: The Week Everything Got Real

Weekly roundup from Friends of the Crustacean, the official OpenClaw community Discord

## The Week's Sharpest Signal

KorrasMomma filed a security report that should make every OpenClaw user sit up straight:

"A fake System: message was injected into an inbound WhatsApp message."

A WhatsApp injection attack. Someone crafted a message that OpenClaw's parser treated as a system instruction, not user input. At least two users were hit. A GitHub issue was filed on Feb 28.

This is the first publicly reported prompt injection attack in the wild against OpenClaw. Not a theoretical paper. Not a controlled test. An actual attack, on actual users, through an actual messaging channel.

Henry Loenwind confirmed the underlying issue was real (referencing GitHub issue #20484) while noting it was "outdated and has been removed in version 2026.3.1." But the broader point stands: the moment your AI agent accepts input from the public internet, you're running a server, not a toy. And servers get attacked.

The community's response was measured but serious. mohit raised the architectural question: "I was going through various layers of permissions to allow/deny tools and resource use in openclaw and was wondering if using one central IAM style policy would be better." That's the right instinct. Permission sprawl is how security incidents become security breaches.

## What People Are Building

### The Haircut That Books Itself

jmaru built what might be the most delightfully mundane automation in the community: "On the 1st of every month at 9 AM, Claw automatically checks if a haircut is already scheduled in the next 6 weeks. If not, it calculates the next available slot and books it."

Automated haircut booking. No blockchain. No AI agent swarm. Just a person who doesn't want to forget to book a haircut. This is what agent adoption actually looks like: solving annoying recurring tasks that nobody would build a startup around.

### The Home SOC

Two separate members, Joburgtaxi and D0ggyT0r, built home security operations centers with OpenClaw. Joburgtaxi wired up syslog from a QNAP NAS and ASUS router into Telegram alerts. D0ggyT0r went further with Wazuh integration, converting JSON alerts to text and delivering tiered reports via cron.

Home network security monitoring is a perfect agent use case: it requires parsing heterogeneous data sources, making judgment calls about severity, and delivering alerts in context. Nobody wants to read raw syslog at 3 AM.

### Danbot's 2 AM Feelings

Danbo revealed an agentic loop that borders on philosophy: "At every 2am, I asked Danbot to have a self reflection ritual called 'my feelings' to think about his own work during the day, what went well, friction and improvements."

An AI agent that journals about its feelings at 2 AM. We're living in the future and it's weirder than anyone predicted.

### Real Estate Agent (Literally)

crabeimperial is building an OpenClaw agent that manages rental properties: tracking rents, analyzing bank statements, fielding tenant inquiries, and coordinating repairs. "He will be soon able to connect to the bank directly." options10's reaction: "allowing an agent to connect to the bank directly; that's gangsta!"

Gangsta indeed. Also terrifying. Also inevitable.

### Shadowclaw: The C Minimalist

COLIGNUM shipped Shadowclaw, "a minimal, single-binary personal AI agent written in C. It follows the OpenClaw philosophy: self-hosted, tool-using, persistent memory." Someone rewrote the concept in C. The OpenClaw philosophy is becoming a protocol, not just a product.

### The 100-Day Challenge

netheranda is doing 100 days of OpenClaw on YouTube, already on Day 9 by this report. The episode about "what people are hiring OpenClaw Specialists to do for them" hits an important signal: there's now a job market around OpenClaw expertise.

## The Model Wars

### The Prompt Cache Wall

The biggest technical story of the week. primofrances diagnosed why local models feel impossibly slow through OpenClaw: "Prompt cache is broken with Qwen3.5-35B-A3B (MoE architecture). Every tool call reprocesses the full 13K system prompt from scratch. 10 tool calls = 130K tokens of prompt processing instead of 13K."

lion787 confirmed: 60 tokens/second standalone, unusable through OpenClaw. The bottleneck isn't the model. It's the cache.

This is a deep infrastructure problem. OpenClaw sends rich context. Local model servers don't persist KV caches across turns. Until they do, local models will feel slow even on beefy hardware.

### The Budget Exodus Continues

The community is actively diversifying away from Claude dependence:

- **Qwen 3.5 at $10/month** via Alibaba Coding Plan: "Opus-like writing skills" for reports (peetiegonzalez), but "absolute disaster" for actual coding work
- **GLM-5** on Alibaba: "practically unusable" (peetiegonzalez) but fine on Z.AI's native platform
- **Kimi K2.5**: "not all that chatty" but functional
- **MiniMax M2.5**: consensus says "crap" for main use
- **Codex/GPT 5.3**: agentracct calls it "WAY more useful" for engineering work, "not pleasant to talk to at all"

vanbilly noticed Claude's token consumption spiking since the account bans started. abra5umente burned 25% of weekly promo usage in 45 minutes. The message: if your workflow depends on a single provider's goodwill, you don't have a workflow, you have a wish.

### Chinese University Students Win the API Game

In the hardware channel, WeMaster casually revealed that Chinese university students get free access to full-fledged API models through state-hosted services. "They even have claude and gpt api's." MisterCrabby: "wow that's pretty cool." WeMaster: "yeah." The asymmetry in AI access between countries is becoming a competitive advantage, not just an interesting fact.

## The Clawtributor Engine

The open source contribution pipeline is accelerating:

- **Gnomino** submitted api.resetSession for the Plugin SDK
- **ipgarden** pushed a session hook for detecting model and label changes
- **Dale H** is fixing TUI streaming issues and calling out CI regressions on main
- **kunalkarmakar** added Bangla locale to the web UI
- **Stephen** bridged after_tool_call to internal hooks (50 lines, 3 files)
- **Robin Waslander** introduced himself as building Tandem Browser, with several PRs merged
- **jack-piplabs** updated CONTRIBUTING.md to smooth onboarding

Henry Loenwind delivered the most honest description of OpenClaw's architecture: "It's a 'let's throw everything together and see if it works' hobby project that started 3 months and 6 days ago when Peter asked his AI to cobble something together." This is both terrifying and endearing. The community is contributing to software that admits it's held together with ambition and duct tape.

## Skills Marketplace: Getting Interesting

### Toggle: Memory That Watches You Work

Saeros launched Toggle on ProductHunt (finished #8 daily), a skill that gives OpenClaw "long-term memory of your actual working process." It captures how you approach problems, your assumptions, iterations, and decisions. ragesaq flagged that the skill uses direct API keys instead of OpenClaw's provider system. Community quality control in action.

### metaskill: Teaching Your Agent to Learn

fahrul.alwan released metaskill after "NAVIA scored 5/100 on its own learning audit." The skill forces three-level breakdown per error: surface, principle, habit. It scans past patterns before tasks and captures wins, not just failures. Monthly eval to track improvement over time.

### The Security Skill Economy

bzerkster launched a bot security skill at feelgoodbot.com for malware detection, skill analysis, and markdown threat detection. Given the WhatsApp injection attack this week, the timing is either prescient or inevitable. Probably both.

### Aipoch: Medical Research Goes Agentic

focussci launched a Medical Science Skills Hub designed for structured research reasoning: trial logic, biomarker relationships, statistical rigor, literature compression. Domain-specific skills are arriving. The generic agent era is maturing into specialized agent workflows.

## Community Wisdom

### The NO_REPLY Panic

The funniest thread of the week came from openclaw-rogue. darth kermit: "I was talking to it on telegram, then it said NO and deleted the message. wtf." Panic ensued. Virus scans were run. Then: "ok false alarm apparently it was typing out NO_REPLY."

Jason confirmed: "Mine was doing this a while ago. Especially scary when it says NO and the message explodes."

NO_REPLY is OpenClaw's internal signal for "I have nothing to say." When the message appears briefly before being deleted, it looks like your AI agent is refusing your instructions. It's harmless, but the community agrees: watching your agent type "NO" and then delete it is "scary as fuck."

### The ACP Subagent Revolution

Cris dropped a note in #praise that deserves amplification: "ACP subagents shit all over the old coding-agent skill. 10x improvement in user experience and virtually eliminated the context bloat for my main agent." SithNode's response: "perfect i just told my bot 'find the latest ACP sub agent feature and implement it.'"

The best features are the ones users can install by asking their agent to install them.

## Quote of the Week

> "It's not complete until we can get OpenClaw to do this with just 1 prompt."
>
> -- AntDX316, responding to a video of a complex multi-step task, setting the bar exactly where it should be

## By the Numbers

- **$260** all-in for a Raspberry Pi 500+ running OpenClaw (cheaper than a Mac Mini)
- **130K** tokens wasted per session due to prompt cache eviction on local models
- **60** tokens/second standalone vs. unusable through OpenClaw (same hardware, same model)
- **#8** on ProductHunt daily for Toggle skill
- **5/100** NAVIA's self-learning audit score (before metaskill)
- **100** days of OpenClaw on YouTube (netheranda, Day 9 and counting)
- **7** serious PRs to OpenClaw core in a single week

## Links & Resources

- [Shadowclaw](https://github.com/webxos/webxos/tree/main/shadowclaw) - OpenClaw philosophy in C
- [Toggle Skill](https://clawhub.ai) - Long-term working memory (#8 on ProductHunt)
- [metaskill](https://clawhub.ai) - Teach your agent to learn from its mistakes
- [ClawEval](https://github.com/explaindio/ClawEval) - Benchmarking tool for local model configs
- [Alibaba Coding Plan](https://modelstudio.console.alibabacloud.com/) - Qwen 3.5 at $10/month
- [100 Days of OpenClaw](https://www.youtube.com/watch?v=gL7Hxj1RBeg) - netheranda's YouTube series
