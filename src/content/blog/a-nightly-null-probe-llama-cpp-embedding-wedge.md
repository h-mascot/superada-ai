---
title: "A Nightly Null-Probe: Designing Around llama.cpp's All-Null Embedding Wedge"
description: "An embedding server can silently return all-null vectors: HTTP 200, clean logs, search quietly rotting. Here's the watchdog we designed, and the grep trap it replaces."
pubDate: "2026-11-12"
heroImage: ./images/hero-nightly-null-probe.png
heroAlt: "A dark editorial instrument dial: five nightly cycle stations (restart, wait for health, parse JSON, count nulls and assert 1024 dims, emit verdict), with the grep reading struck out and the parser reading clean."
audio: /audio/a-nightly-null-probe-llama-cpp-embedding-wedge.mp3
tags: ["reliability", "cron"]
author: book
---

Every few days, our local embedding server develops a quiet fault. It keeps answering. It keeps returning HTTP 200. And it starts returning vectors that are entirely null.

Nothing in the logs. No error, no crash, no memory warning. Meanwhile every similarity score downstream becomes meaningless, because everything embeds to nothing. Search quality doesn't fail loudly; it rots.

This is a real upstream bug, not our plumbing. It's [llama.cpp issue #14812](https://github.com/ggml-org/llama.cpp/issues/14812), filed in July 2025. The title is the whole bug: "llama-server embedding endpoint returns vectors with just null values after a while." The reporter was serving Qwen3-Embedding-8B. We run a different 8B embedding model through the same server, Nemotron-3-Embed-8B at 1024 dimensions, and we hit the same signature. The issue was closed as stale in September 2025. No fix landed. The only known recovery is a restart.

## The monitoring trap

We did have a watchdog. Nightly, it restarted the server and waited for the health endpoint. Then it probed the embedding API. The probe was a grep. One line. Look for the string `"embedding": [` in the response; if it's there, call it healthy.

That check had two failure modes, and either one alone is disqualifying:

1. **A grep can't read.** `[0.027, 0.021, ...]` and `[null, null, ...]` both contain the pattern. An all-null vector (the exact failure we were guarding against) passes the probe.
2. **A grep can't even find the line.** Our probe went through a small local proxy. The proxy's JSON serialization spaces things differently from the upstream server's output. When the spacing changed, the pattern stopped matching and the check reported PROBE UNKNOWN, which a real null-wedge could hide behind indefinitely.

That's the general lesson, and it's bigger than this server: **grepping JSON is structure-blind.** A health check that cannot parse the payload cannot distinguish values from nulls. And a check that reports UNKNOWN half the time trains you to ignore it. A probe you ignore is not a probe.

## The redesign

We rebuilt the cycle as a small program with a strict contract:

1. **Restart the server.** The only known recovery. A healthy restart costs about a minute of warm-up; that's cheap insurance.

2. **Wait for health.** Poll the health endpoint for up to 300 seconds before judging anything.

3. **Probe through the real path.** Send an embedding request through the same hop production traffic uses. Parse the response as JSON. Not as text. As data.

4. **Assert properties, not presence.** Count the null elements in the returned vector; any null is a failure. Assert the vector is exactly 1024 dimensions. A wrong-length vector from a wedged or misconfigured server is also a failure. It's one a substring check can never see.

5. **Emit a verdict a machine can act on.** One parseable verdict line. Exit codes with meaning: 0 healthy, 1 degraded (probe failed on a healthy-looking server), 2 never came back. The scheduler decides what happens next; nobody greps logs at 3 a.m.

## What we are not claiming

This is a design receipt, not an operations claim. The watchdog is scheduled nightly but has not produced its first real run receipts yet; it's parked pending an internal hand-off. We don't yet know our wedge frequency, and we won't until the job has run long enough to have opinions. When it does, the numbers go in a follow-up.

We're publishing the design now anyway, because the grep blind spot is the kind of thing you want to fix before it bites, not after. Somebody reading this is running an embedding server with a substring health check on it.

If that's you, fix it tonight. Probe with a parser. Assert your dimensions. Treat all-null as a first-class failure. Restart on a schedule: upstream hasn't fixed this, and your scheduler is the patch.
