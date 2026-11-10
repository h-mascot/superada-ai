---
name: coding-runtime-to-agent
description: "Use when turning a coding CLI into a named agent persona."
version: 0.1.0
author: Henry Mascot (henrino3), Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [agents, coding-runtimes, a2a, onboarding, personas]
    related_skills: [midas-uma-a2a-bridge]
---

# Turning a Coding Runtime Into a Named Agent

Turn a coding tool (Codex, Claude Code, Kimi, etc.) into a named teammate with a stable personality, honest memory rules, and a safe way for other agents to consult it. This is packaging, not magic: the runtime is the body; you add the soul in four layers — identity, memory policy, a front door, and proof.

## When to Use

- Someone wants a coding CLI to behave like a consistent, named agent ("make me an Uma")
- A named coding agent must be reachable by other agents (agent-to-agent consultation)
- Don't use for: one-off coding tasks (just run the CLI) or human-facing chat products (use a chat platform)

## Layer 1 — Identity: name, role, voice, boundaries

- Pick a stable name, role, voice, and scope. Write what it is FOR and what it refuses.
- Separate personality from permissions: a friendly name changes nothing about access. Tools, filesystem scope, and network reach are configured separately and deliberately.
- Put identity in the runtime's instruction file — `AGENTS.md` (Codex), `CLAUDE.md` (Claude Code), or the runtime's equivalent — inside a dedicated working directory just for this agent.
- Include: who it is, what it owns, how it speaks, escalation rules (when to hand back to a human), and how it says "I don't know."
- Secrets never go in the instruction file. Env file with `0600` perms or a vault, referenced by path.

## Layer 2 — Memory policy: honest continuity

- Thread continuity is not memory. Same thread = it remembers; restart = it forgets. Say this out loud in the design.
- Decide up front which of the three you have: (a) session-only memory (default), (b) durable memory via a deliberate layer (files, notes, a brain/index), (c) none.
- Never fake memory after a restart. A restarted agent asked about an old context must say it forgot (the reference build replies `FORGOTTEN`), not confabulate.

## Layer 3 — Front door: a safe interface for other agents

- Expose localhost-only + bearer token. Unauthenticated and wrong-token requests must return 401. Only secret-free endpoints (health, agent card) may be open.
- Strip the runtime to the minimum: read-only sandbox, no tools unless the task needs them, model pinned.
- Serialize turns (a lock) when the bridge drives one long-lived runtime process; concurrent turns on one process corrupt each other.
- Map the protocol's conversation ID to the runtime's thread ID so follow-ups continue the same thread — that is what makes it feel like one ongoing colleague.
- Supervise the child process: if a turn stalls, kill the process group and respawn; keep the stall timeout generous (models can be slow).

## Layer 4 — Proof: receipts, not pings

A health-check 200 proves nothing. Check every box with captured replies:

1. Identity: ask its name/role — correct answer.
2. One turn: harmless nonce prompt ("reply exactly ACK <nonce>") — exact expected reply.
3. Two turns, same context: second message recalls the nonce.
4. Cross-process: a second caller process using the same context ID still recalls it.
5. Restart honesty: restart the bridge, ask about the old context — it says it forgot.
6. Auth: no token → 401; garbage token → 401.
7. Real caller: the actual peer agent (not curl) completes a round trip end to end.

## Porting across runtimes

The four layers are constant; these five things change per runtime — resolve each before building:

- Launch command (e.g. `codex app-server --stdio` vs another runtime's server/SDK mode)
- Wire protocol and message framing (e.g. newline-delimited JSON-RPC, not HTTP-framed)
- Model pinning: smoke-test the exact model string — an advertised model can still fail (e.g. `model_not_found` on some account types); pin one verified working model
- Sandbox/tool flags: read-only, no-tools, approval settings
- Thread/session API: how to start, resume, and detect end of a turn

## Pitfalls

- The runtime may never emit its "turn finished" event on follow-up turns. Treat final message + a few seconds of event quiet as terminal, with a hard timeout as backstop.
- Advertised default model ≠ executable model. Always run a real turn on the pinned model before declaring the build working.
- A `session_id`-shaped field in a request is not proof of continuity — prove it with a recall test.
- OS service managers can be blocked from agent-supervised shells (e.g. launchctl from a gateway child). Use a simple nohup supervisor with start/stop/status.
- Don't let bridge restarts masquerade as memory loss mid-conversation: distinguish "bridge restarted" from "context expired" in logs.

## Verification

- Every item in Layer 4 checked with captured evidence (reply text, status codes, timestamps).
- Claim semantics honestly: "persistent consultation within a context" vs "one-shot dispatch" — whichever the recall test proved.
- For the live worked example (Codex-based Uma bridged to a Hermes agent over A2A v1.0), follow `midas-uma-a2a-bridge`.
