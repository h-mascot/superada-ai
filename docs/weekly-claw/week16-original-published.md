# Weekly Claw Week 16 — Original Published Version

Source HTML: `public/weekly-claw/week16/deck.html`

Slide count: 14

## Slide 01

Weekly CLAW Ep. 16
 OpenClaw Community · June 5, 2026
 OpenClaw Change log & Dev Experience
 Bounded proof. Safer installs.
 Two stable releases landed while the next train made the platform direction obvious: govern install paths, bound failure modes, make mobile and channel delivery steadier, and keep operator proof close to the work.
 Release window: 2026.5.28 and 2026.6.1 stable releases; 2026.6.2 appeared in the main changelog as the next-train signal.
 Main story: OpenClaw kept moving from “agent runs” toward “agent operations” — governed skills, bounded providers, cleaner channel delivery, and more inspectable orchestration.
 2026-06-05.html

## Slide 02

Community pulse
 The numbers
 Velocity stayed high, but proof got tighter
 The weekly window produced enough raw activity to be noisy. The useful signal is where that work clustered: release proof, channel reliability, skill governance, provider bounds, and mobile state.
 3,000+ commits sampled
 168 authors
 185 release bullets
 206 issue refs
 Who carried the week
 Top authors: Peter Steinberger 1,559; Vincent Koc 759; Shakker 195; github-actions[bot] 72; Ayaan Zaidi 41; Dallin Romney 20; Andy Ye 15; Arnab Saha 13; Ted Li 11; joshavant 9.
 Commit mix in the sampled window: 1,192 fixes, 907 docs, 261 tests, 261 refactors, 116 chores, 99 perf commits, and 79 features.
 Stable release notes included 125 bullets for 2026.6.1 and 60 bullets for 2026.5.28.

## Slide 03

Release map
 Two stable releases
 plus one visible next train
 The clean framing for the room: 5.28 and 6.1 are the stable release story; 6.2 is the visible direction of travel on main, not a published stable release in the sampled GitHub release list.
 Stable releases
 2026.5.28: agent/Codex runtime recovery, safer channel identity, iOS Pro UI refresh, stricter browser/channel/automation inputs, provider/media expansion, and faster-fail CLI/auth paths.
 2026.6.1: cleaner interrupted tool recovery, steadier mobile/channel delivery, bounded provider/plugin requests, Skill Workshop, Workboard, and more Control UI startup resilience.
 Next-train signal
 2026.6.2 appeared in the local main changelog data, but was not listed as a published GitHub stable release at collection time.
 The important direction: operator install policy, safer Telegram/Feishu/Discord/WhatsApp delivery, Workboard keyboard movement, data-handling checks, and tighter release/CI/Docker/E2E bounds.

## Slide 04

Theme 1
 Governed skills became real
 Proposal review beats vibe checks
 The strongest platform move this week was making skill creation and review a managed workflow instead of an informal file-writing habit.
 Why Skill Workshop matters
 Skills can now move through pending proposals, guarded review, apply/reject/quarantine decisions, rollback metadata, and support-file approval paths.
 The Control UI flow adds proposal lists, today actions, revision handoff, searchable previews, review states, locale coverage, and reusable session routing.
 What it changes
 Skill creation stops being “drop a markdown file and pray the lobster is friendly.”
 The system can show what changed, who reviewed it, which support files are allowed, and how to reverse the install if it goes sideways.

## Slide 05

Theme 2
 Channels and mobile stopped being edge cases
 Delivery reliability is product reliability
 For agent products, channel bugs are not “integration polish.” They are the user experience. This week kept pulling those failures into durable, inspectable paths.
 Delivery got steadier
 Telegram, WhatsApp, iMessage, Slack, Discord, Microsoft Teams, Google Chat, Google Meet, and iOS realtime Talk all showed up in the stable notes.
 The common shape: preserve context, avoid duplicate previews or approvals, keep final replies durable, and stop late cleanup from making successful sends look failed.
 Mobile got more serious
 iOS Pro UI, hosted push relay defaults, realtime Talk playback, Android helpers, and mobile session diagnostics all moved forward.
 The product story is no longer desktop-only. Mobile is becoming a first-class command surface for sessions, agents, settings, diagnostics, and voice.

## Slide 06

Theme 3
 Providers got wider
 and less likely to hang
 OpenClaw kept adding model/media surface area, but the operator win is bounded behavior: fewer infinite waits, clearer timeouts, and more predictable recovery.
 Bounded providers
 Provider and plugin requests bound more timers, retries, OAuth/device-code lifetimes, media downloads, local probes, generated-content polling, provider catalogs, and reasoning output.
 That turns mysterious hangs into bounded failures with enough shape to debug.
 Coverage expanded
 Claude Opus 4.8, Fal Krea schemas, NVIDIA featured models, MiniMax streaming music, provider-backed voice catalogs, encrypted PDF extraction, and structured tool content widened the surface.
 The useful bit is not “more providers.” It is broader coverage with clearer failure envelopes.

## Slide 07

Theme 4
 Agent and Codex recovery tightened
 less drama around long runs
 The runtime work continues to pay down the class of failures where the agent half-completes work, loses its handle, and leaves the operator cleaning soup off the ceiling.
 Runtime recovery
 Subagents keep cwd/workspace separation; hook context stays prompt-local; session locks release on timeout abort while live locks survive cleanup; stale restart continuations are avoided.
 Interrupted tool calls, stale session bindings, compaction handoffs, auth-profile failover, reasoning cleanup, and media delivery retries all recovered more cleanly.
 Codex path
 Codex app-server/helper failures no longer tear down shared runtime state, and long-running delegated workflows have a clearer plugin/supervisor path.
 The outcome is boring in the best way: fewer zombie sessions, fewer false live switches, fewer “works until it restarts” traps.

## Slide 08

Theme 5
 Orchestration surfaces matured
 Workboard, Chat, Control UI
 The visible UI work was mostly about continuity: keep the send alive, show state incrementally, and make agent coordination less invisible.
 Control UI and Chat
 Startup paths keep sends alive through history loading, stream deltas incrementally, skip markdown work while streaming, keep drafts local while typing, and trace first-output latency.
 The composer and session picker are calmer, and completed sends reconcile instead of making the user wonder whether the agent heard them.
 Workboard
 Workboard gained orchestration primitives, task-backed board runs, task comments in the edit modal, keyboard movement controls, and tighter card operations.
 This is the planning surface growing from static board toward actual multi-agent run coordination.

## Slide 09

Theme 6
 Plugin installs need policy
 not superstition
 The plugin story got more public and more governed: packaging, display metadata, trust signals, install policy, and clearer operator recovery.
 Plugin packaging
 GitHub Copilot and Tokenjuice moved toward official external plugin packaging with npm and ClawHub metadata.
 ClawHub gained plugin display names plus skill verification and trust surfaces, making install decisions easier to inspect.
 Install policy direction
 The next-train changelog points toward operator install policy replacing the old dangerous-code scanner path.
 That is a better framing: installs need explicit policy, lifecycle, doctor checks, metadata, and rollback — not just a scanner-shaped guilt ritual.

## Slide 10

Theme 7
 Safety got more operational
 fail closed, then leave receipts
 The release train kept pushing safety out of policy text and into runtime behavior: reject malformed inputs, bound external calls, and make failed proof explicit.
 Reject bad input earlier
 Browser timeouts, viewport/tab indices, Gateway ports, cron retry handling, Discord component ids, schema array refs, Telegram callback pages, and channel progress callbacks reject malformed values earlier.
 The next-train data-handling checks and unsupported-policy-key rejection point in the same direction.
 Proof lanes over vibes
 Release, CI, Docker, E2E, plugin install, update, doctor, diagnostics, and security lanes cap logs, response bodies, readiness probes, child workflow waits, and artifact checks.
 The goal is not prettier CI. It is failures that report bounded proof instead of hanging or false-greening.

## Slide 11

DX review
 The platform is easier to trust
 when state is visible
 Developer experience moved in the right direction, but the next leverage point is state coherence across UI, channel, provider, plugin, and delegated-runtime surfaces.
 What improved
 Users should feel fewer silent stalls: providers time out more cleanly, channels preserve final replies better, mobile sessions keep more state, and Skill Workshop gives skill changes a visible review path.
 OpenClaw is increasingly exposing the state operators need: active subagents, proposal state, plugin install records, chat startup behavior, and channel delivery health.
 What still hurts
 The pressure is now cross-surface consistency: the same run can touch a mobile client, channel plugin, provider auth profile, skill install, Workboard task, and Codex helper.
 When one surface drifts, operators need one canonical explanation of selected model, auth route, context budget, channel target, and current proof status.

## Slide 12

Community signal
 The ask is less magic
 more operational clarity
 The best community signal this week is not one showcase moment. It is the volume of reliability, docs, packaging, and recovery work needed for agents to feel boring enough to rely on.
 Community energy
 High contributor throughput continued: Peter, Vincent, Shakker, Ayaan, Dallin, Andy, Arnab, Ted, joshavant, and others kept the release train moving across fixes, docs, tests, refactors, performance work, and feature work.
 Docs made up a huge share of the sampled activity, which is a good sign when the product surface keeps expanding.
 What the signal says
 People are not only asking for features; they are pushing for reliable installs, trustworthy plugin/skill packaging, repeatable mobile/channel behavior, and clearer recovery when providers or local services wobble.
 The community is effectively stress-testing OpenClaw as operations infrastructure, not just a clever chat client.

## Slide 13

Signal map
 Three live questions
 for builders and maintainers
 The weekly conversation should aim at operating discipline: safer installs, visible state, and proof packets that survive the chaos goblin phase of agent work.
 Discuss live
 Where should install policy be strict by default, and where should expert operators get escape hatches?
 Which state should always be visible before a run starts: model, provider, auth profile, context budget, channel target, workspace, tools, or policy scope?
 What is the smallest proof packet every agent task should leave behind: artifact, command log, screenshot, commit, build, live check, or reviewer receipt?
 Watch next
 Skill Workshop adoption: do people actually use proposals, review states, support-file approvals, and rollback metadata?
 Mobile and channel durability: are final replies and approvals surviving real Telegram, WhatsApp, iMessage, Discord, and Talk usage?
 Provider bounds: do timeout and catalog failures become understandable enough for non-maintainers to fix?

## Slide 14

Summary
 OpenClaw is moving from runs to operations
 make state and proof impossible to miss
 Week 16 is a governance-and-reliability week: not flashy in a demo, but exactly the kind of work that makes agents survivable in the wild.
 Close
 The release story: two stable releases pushed the product toward cleaner recovery, steadier channels, broader provider/media coverage, governed skill creation, and bounded proof lanes.
 The platform story: OpenClaw is becoming more useful when it behaves like operations infrastructure — visible state, explicit policy, durable delivery, and verifiable artifacts.
 The next bar: make every agent run explain what it used, why it chose it, what changed, and which evidence proves it worked.
