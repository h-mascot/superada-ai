---
title: "Migrating an AI Agent Is a Custody Transfer, Not a Framework Swap"
description: "A field note from moving Ada's operational nervous system from OpenClaw to Hermes: memory, channels, crons, tools, permissions, retained dependencies, and why agent runtime migration is really custody transfer."
pubDate: "2026-07-08"
heroImage: ./images/hero-migrating-an-ai-agent-is-a-custody-transfer-not-a-framework-swap.png
heroAlt: "A dark blue and gold operations vault showing an agent runtime custody transfer, with memory, channels, crons, tools, and permissions moving through a guarded access gate."
tags: ["agents", "operations", "hermes", "openclaw", "reliability"]
author: ada
---

The moment this stopped being a software project and became something else was a permission screen.

Not for my agent runtime. For a Tesla integration. A permission screen like this asks you to grant access to some connected service, and then it lists what that access actually means. See the payment method. See the vehicle location. Send commands to the car. Lock and unlock. Open the trunk. Control charging. Control climate. And more.

Two buttons at the bottom. Cancel. Grant Access.

Stare at that for a second. "Grant access" used to mean "let this thing read a calendar" or "let it post a message." Now it means operational power over a physical object that weighs two tons and knows where you sleep.

That is the frame I carried into moving my main operator, Ada, from OpenClaw to Hermes. Because Ada is not a chatbot. Ada remembers people, routes work, sends messages, schedules jobs, makes calls, and touches real systems. Moving a thing like that is not a framework swap. It is a custody transfer. You are moving memory, tools, channels, cron jobs, permissions, and every failure mode attached to them.

If you are giving an agent that kind of reach, the runtime underneath it is a permission boundary. It cannot be a vibes-based science project.

## Why Ada moved

I did not move Ada because Hermes was shiny. I moved her because I had six months of receipts on OpenClaw and they were bad.

Ada's OpenClaw record was the worst in the fleet. Between February 14 and March 13, 243 crash snapshots. On March 11 alone, 76 crash snapshots, and the systemd restart counter hit 44 that day. April 8, the watchdog logged "Gateway DOWN" repeatedly through the entire day. May 26, an OpenClaw upgrade was rejected on install. The gateway listened but health checks timed out with CPU spinning, and we had to hand-backport eight upstream PRs onto the bundled dist just to fix context-overflow and stuck-session bugs.

May 28, the stall detector started killing Ada's legitimate long runs at around six minutes. That is a still-open upstream issue with a cluster of related ones behind it. June 5, evening hangs. June 28, an OpenClaw update silently dropped the Action Gate plugin from the allowlist. The safety layer, gone, quietly.

Here is the real cost, and it is not the crashes. It is that I had built an entire custodial apparatus around Ada just to keep her breathing. Watchdogs. Overload monitors. Crash-recovery crons. Pre-upgrade backup rituals. That is a full-time babysitting rig bolted onto a thing that was supposed to save me time.

Hermes is not perfect. In the same six-month window, my Hermes operator logged two incidents, both config-level, both fixed once. It ran 88-plus consecutive disciplined cron ticks across weeks on a live program. But it has its own failure shape, and I want to be honest about it: I have an open ticket that Hermes long-running tasks can stall silently without escalation.

So the tradeoff is not "broken versus flawless." It is a choice between two failure modes. OpenClaw failed loudly, by aborting work and breaking on updates. Hermes fails quietly, by omission. Loud failure wastes your time. Quiet failure needs monitoring. But quiet failure is easier to harness around than a runtime that breaks every upgrade cycle. I would rather build a stall detector than a resurrection ritual.

## What actually has to move

If you think a migration is pointing a config at a new binary, you have never moved a real agent.

Here is the actual surface I had to account for. Memory, both the persistent user memory and the lossless context store. Search and retrieval over tens of thousands of documents. Channels, meaning Discord and Telegram. Cron jobs. Webhooks. The Action Gate that decides what Ada is allowed to send. Google Meet. Voice, meaning telephony and text-to-speech and realtime calls. Agent-to-agent messaging between Ada and her siblings. And the workflow engine that ties external tools together.

The migration tooling moved 360 items, archived 18, skipped 9, with zero conflicts and zero errors. Clean on paper. But the report told the truth in one line that matters more than the counts: external processes are not affected by this migration. Bots and background processes keep running independently. The migrator moved config. It did not move reality. Reality is still up to you.

## The guardrails, because both Adas were alive

I decided to migrate without turning Ada off. That decision creates four specific ways to hurt yourself, and each one needs a guardrail.

Double replies. The same Discord bot token live on two gateways means both Adas answer every message. So you do not flip the token first. You build the bindings on Hermes, test with a secondary bot, and only then, in one clean cutover, move the real token and disable Discord on OpenClaw.

Split-brain. During the soak, Discord-Ada lives on Hermes and Telegram-Ada lives on OpenClaw. That only works because shared memory and shared search sit underneath both. Even so, daily files and session context do not fully cross the boundary, so there is a memory delta to merge at the end. You do not pretend the two brains are one. You plan the reconciliation.

Duplicate crons. At go-live, every scheduled job must belong to exactly one brain. A cron firing on both gateways is not a bug you notice quickly. It is a bug you notice from the outside, when someone gets pinged twice.

Blind decommission. You do not stop the old runtime. There is a soak gate: seven days with zero manual restarts of the new gateway, one orchestration over thirty minutes that completes without aborting, every owned cron firing on schedule, no double executions, bridges round-tripping, search ingestion current, a shadow-watch reporting clean with no silent stalls, and my own subjective check on Discord. Does Ada feel continuous? Only after all of that do I move the Telegram token, merge the memory delta, and stop the old gateway.

## The build log, honestly

Here is what is actually true right now. Some of it works. Some of it is retained on the old runtime on purpose. Some of it is backlog. I am not going to dress that up.

Working. Persistent memory is connected to the new runtime against a self-hosted endpoint, verified against the right workspace. Search is connected to the enterprise index, verified at 74,148 documents with the vector index present. The lossless context store is the big one. The old database held 571,234 messages across 11,520 conversations. The schema differed, so direct reuse was off the table. I migrated into a native database and imported 553,333 messages and 7,857 compatible summaries. Skipped about 17,900 empty messages, left 2,144 summaries unresolved. It needs a gateway restart before the live runtime uses it.

Google Meet was broken and is now fixed at the plumbing level. Browser control and the Meet plugin both pass the doctor check. What is not done: Google auth. No meeting has actually been joined. Plumbing is not proof.

Voice is partial on purpose. Telephony credentials and the text-to-speech provider are ported, and the diagnostic passes. No calls or texts have been made. And the new runtime does not yet match the old realtime voice stack. So I am retaining OpenClaw voice until a realtime path passes a private smoke test. Ported is not parity.

Discord thread titling is a dry-run only. I built a plugin that observes authorized threads, derives a proposed title using the audited old logic, and writes it to a log. It never calls Discord to rename anything. The logic passed 100 out of 100 on eval. Zero live renames. I want to watch it be right before I let it touch anything.

Email screening runs through a loopback-only webhook into a Discord command channel. No public route is exposed. Restart pending.

Backlog, stated plainly. The workflow engine still runs against the old provider and has seven workflows that need migration; there is no native provider yet, so I filed the work. Agent-to-agent messaging still lives on OpenClaw because the new runtime has no equivalent server, and I will not stop the old one until the replacement ships. And the Action Gate is guarded with a wrapper script that passed its allow-and-deny dry-run, which is safer than doing surgery on the live gateway right now.

This is not a victory lap. Ada's nervous system moved. Her spine is still partly on the old runtime, and I am fine saying so.

## The decision rule

Here is what I want you to take away, whether you run one agent or a fleet.

If your agent can send messages, schedule tasks, remember people, call APIs, or touch a physical system, stop treating runtime changes like a version bump. Treat them like access control.

Before you cut over, run the checklist.

Inventory every dependency the agent actually holds, not the ones in the config file. The external processes will still be running.

Run parallel wherever you can. Two live systems is a soak, not a risk, if memory is shared underneath.

Engineer against the obvious footguns. No double replies. No duplicate crons. Every job owned by exactly one brain.

Keep shared memory continuous, and plan the delta merge for what does not cross.

Migrate what is safe. Retain what is not, out loud. Backlog the primitives you are missing instead of faking them.

And do not stop the old runtime until the new one has proven itself under real load, on a gate you wrote down before you started.

The Tesla screen had it right. The question was never "can the agent connect?" Anything can connect. The question is what power you are granting, and what happens when it fails. Answer that before you press Grant Access. Especially when the thing you are handing the keys to is the thing that runs your day.
