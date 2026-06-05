# Weekly Claw Week 16 - Humanized / Henry Tone Revision

Source deck: `public/weekly-claw/week16/deck.html`
Old published version remains in `docs/weekly-claw/week16-original-published.md`.
Pioneer intermediate markdown remains in `docs/weekly-claw/week16-pioneer-opus48.md`.

Slide count: 17

## Slide 01: Weekly Claw · Ep. 16

Weekly Claw · Ep. 16
 OpenClaw had its Microsoft week
 June 5, 2026 · stable releases + Windows + Scout
 The codebase kept hardening, but the bigger story is distribution: Windows Companion, Microsoft Scout, and three public videos that pushed OpenClaw from project chatter into platform gravity.
 Release window
 2026.5.28 stable
 2026.6.1 stable
 Next-train content stays out until it ships
 Main story
 Windows Companion made OpenClaw native on Windows
 Microsoft Scout made the enterprise wedge explicit
 Skill governance, provider bounds, channel reliability, and proof lanes kept maturing
 week16-microsoft-refresh.html

## Slide 02: Community pulse

Community pulse
 High velocity, less hand-waving
 Sampled window
 The raw activity is still noisy. The useful read is where the work clustered: release proof, channel reliability, skill governance, provider bounds, and mobile state.
 3k+ commits
 168 authors
 185 release bullets
 206 issue refs
 The week in numbers
 3,000+ commits sampled
 168 authors
 185 release bullets
 206 issue refs
 Who carried the week
 Peter Steinberger 1,559
 Vincent Koc 759
 Shakker 195
 Ayaan Zaidi 41
 Dallin Romney 20
 Commit mix
 1,192 fixes
 907 docs
 261 tests
 261 refactors
 116 chores · 99 perf · 79 features

## Slide 03: Release map

Release map
 Two stable releases only.
 5.28 + 6.1 stable only
 This deck keeps the public story to the two stable releases and saves next-train content for the week it lands.
 2026.5.28 stable
 Codex runtime recovery
 Safer channel identity
 iOS Pro UI refresh
 Stricter browser and automation inputs
 Provider/media expansion plus faster-fail CLI and auth
 2026.6.1 stable
 Cleaner interrupted tool recovery
 Steadier mobile and channel delivery
 Bounded provider and plugin requests
 Skill Workshop and Workboard
 Control UI startup resilience

## Slide 04: Microsoft signal

Microsoft signal
 The biggest release may not be in the changelog
 Windows Companion + Scout
 The changelog says the platform got safer. Microsoft made the market story louder: OpenClaw now has a Windows desktop path and a first-party enterprise agent built on top of it.
 Why it matters
 Windows Companion moves OpenClaw onto the default enterprise desktop
 Scout turns OpenClaw into a Microsoft 365 work-assistant story
 This is distribution, not a feature drop
 The wedge
 Local desktop control
 Microsoft 365 context
 Enterprise identity and policy
 Open-source foundation still visible underneath

## Slide 05: New launch

New launch
 OpenClaw Windows Companion landed
 Native Windows path
 The Windows launch is the practical adoption story: tray app, setup, chat, diagnostics, node mode, and installers for x64 and ARM64. Not glamorous. Extremely useful.
 What launched
 Native WinUI Windows companion / hub
 Signed installer path for x64 and ARM64
 System tray status, local setup, chat, Command Center diagnostics
 GitHub repo: openclaw/openclaw-windows-node
 Why builders care
 Windows can become a first-class OpenClaw node
 Canvas, screen, camera, notifications, device status, STT/TTS, and controlled system.run are in scope
 Launch video: Scott Hanselman + Samantha Song demo OpenClaw on Windows with Peter joining

## Slide 06: New launch

New launch
 Microsoft Scout made the enterprise bet explicit
 Always-on personal agent
 Scout is Microsoft putting a name on the enterprise version of the idea: an always-on agent with files, shell, browser, Microsoft 365 context, approvals, identity, and policy.
 What Microsoft announced
 Scout is framed as an Autopilot: always-on, autonomous, operating under user and org controls
 It connects across Teams, Outlook, OneDrive, SharePoint, calendar, chats, contacts, cloud, desktop, and web
 Microsoft says it is powered by OpenClaw open-source technology
 Enterprise angle
 Governed Entra identity instead of anonymous service-account mush
 Sensitive actions can require approval
 Purview and organizational controls stay in the loop
 Frontier preview, not general availability yet

## Slide 07: Video week

Video week
 Three videos, one live thread
 Today + next week
 This week had enough video signal for its own run. Cover Windows today. Go deeper on Peter's build-system talk and the GitHub fireside next week.
 Windows today Peter talk next week Fireside next week
 1 · Windows Companion launch
 Use in today's presentation
 OpenClaw + Windows: Microsoft Build 2026
 Scott Hanselman and Samantha Song demo the Windows path; Peter Steinberger joins
 2 · Build the thing that builds the thing
 Peter Steinberger, BRK245
 Deep-dive next week
 Core thesis: build tools that close the loop for agents, then let the tools compound
 3 · GitHub fireside + maintainer panel
 Deep-dive next week
 Peter Steinberger, Dave Morin, Omar Shaheen
 Maintainer panel: Val, Jacob Tomlinson, Sally, Brad, Vincent, Josh

## Slide 08: Theme 1

Theme 1
 Skill creation got a review lane
 Skill Workshop
 Skills now move through proposal, review, approval, quarantine, rollback metadata, and support-file approval. Good. Markdown roulette was not a governance model.
 What changed
 Proposal lists, review states, and revision handoff
 Searchable previews and support-file approval
 Visible who-approved, what-changed, what-allowed trail
 Why it matters
 Skill creation stops being drop-a-file-and-pray
 Reviewers can reverse installs and inspect support files
 Skill lifecycle becomes auditable end to end

## Slide 09: Theme 2

Theme 2
 Channels and mobile became the product
 Delivery is not plumbing
 Channel bugs are the user experience. If the final reply vanishes, nobody cares that the model was clever. This week pulled more delivery failures into durable, inspectable paths.
 Delivery got steadier
 Telegram, WhatsApp, iMessage, Slack, Discord, Teams, Google Chat, Meet
 Context preserved; duplicate previews reduced
 Final replies durable; late cleanup stops masking success
 Mobile got more serious
 iOS Pro UI refresh
 Hosted push relay defaults
 Android helpers and mobile session diagnostics
 Mobile is now a command surface, not a notification afterthought

## Slide 10: Theme 3

Theme 3
 Providers got wider without going feral
 Coverage + bounded failures
 More model and media surface area landed with bounded timers, retries, OAuth lifetimes, polling, and failure shapes. Boring constraints, blessedly useful.
 Bounded behavior
 Timers, retries, OAuth and device-code lifetimes capped
 Media downloads and generated-content polling bounded
 Provider catalog and reasoning-output failures get clearer
 Coverage expanded
 Claude Opus 4.8
 Fal Krea schemas and NVIDIA featured models
 Streaming music and provider-backed voice catalogs
 Encrypted PDF extraction and structured tool content

## Slide 11: Theme 4

Theme 4
 Long runs stopped leaving bodies behind
 Agent + Codex recovery
 The runtime paid down failures where an agent half-completes the job and leaves everyone staring at a corpse called "session still running".
 Runtime
 Subagents keep cwd and workspace separation
 Hook context stays prompt-local
 Session locks release on timeout abort; live locks survive cleanup
 Interrupted tool calls, stale bindings, compaction handoffs, auth-profile failover recover more cleanly
 Codex path
 App-server and helper failures no longer tear down shared runtime state
 Delegated workflows have a clearer plugin/supervisor path
 Fewer zombie sessions and false live switches

## Slide 12: Theme 5

Theme 5
 Workboard, Chat, and Control UI got less fragile
 Continuity over flash
 Streams stay alive, drafts stay local, sends reconcile, and the planning surface is starting to coordinate actual multi-agent work.
 Control UI and Chat
 Sends survive history loading
 Stream deltas incrementally; markdown work waits until it should
 Drafts stay local while typing
 Completed sends reconcile instead of going dark
 Workboard
 Orchestration primitives and task-backed board runs
 Task comments in the edit modal
 Keyboard movement controls
 Board is moving toward multi-agent coordination, not static task furniture

## Slide 13: Theme 6

Theme 6
 Plugin installs need policy, not vibes
 ClawHub + external packaging
 External plugin packaging, ClawHub trust surfaces, and install policy are replacing the old dangerous-code-scanner theatre.
 Plugin packaging
 GitHub Copilot and Tokenjuice moving to official external plugin packaging
 npm and ClawHub metadata
 Plugin display names, skill verification, trust surfaces on ClawHub
 Install policy direction
 Explicit policy, lifecycle, doctor checks, metadata, rollback
 Install decisions become inspectable
 The next bar is auditability from click to rollback

## Slide 14: Theme 7

Theme 7
 Safety moved into runtime behavior
 Fail closed, leave receipts
 Malformed input gets rejected earlier. Release, CI, Docker, and E2E lanes cap logs, response bodies, probe waits, and artifact checks.
 Reject bad input earlier
 Browser timeouts, viewport and tab indices, Gateway ports
 Cron retry handling, Discord component ids, schema array refs
 Telegram callback pages and channel progress callbacks
 Proof lanes over vibes
 Release, CI, Docker, E2E, plugin install, update, doctor, diagnostics, security lanes
 Capped logs, response bodies, readiness probes, child workflow waits, artifact checks
 Failures report bounded proof instead of hanging or false-greening

## Slide 15: DX review

DX review
 Easier to trust when state is visible
 DX snapshot
 DX improved because more state moved into view. The next fight is one canonical explanation across UI, channel, provider, plugin, and delegated runtime.
 What improved
 Providers time out more cleanly
 Channels preserve final replies better
 Mobile sessions keep more state
 Skill Workshop gives skill changes a visible review path
 What still hurts
 One run can touch mobile, channel, provider auth, skill install, Workboard task, and Codex helper
 When one surface drifts, users need one explanation: model, auth, context, channel, workspace, tools, policy, proof

## Slide 16: Live questions

Live questions
 Three questions for builders and maintainers
 Operating discipline
 Aim the conversation at operating discipline: safer installs, visible state, and proof packets that survive the chaos-goblin phase of agent work.
 Discuss live
 Where should install policy be strict by default, and where should expert builders get escape hatches?
 Which state must be visible before a run starts: model, provider, auth, context budget, channel target, workspace, tools, policy scope?
 What is the smallest proof packet every agent task should leave?
 Watch next
 Skill Workshop adoption: are proposals, review states, support-file approvals, and rollback metadata actually used?
 Mobile and channel durability under real Telegram, WhatsApp, iMessage, Discord, Talk usage
 Provider bounds: can non-maintainers understand and fix timeout/catalog failures?

## Slide 17: Summary

Summary
 From agent runs to agent operations
 Close
 The weekly story is bigger than a changelog. Stable releases made OpenClaw more survivable. Microsoft made the distribution story real. The next bar is simple: visible state, explicit policy, durable delivery, and proof every time.
 Release story
 5.28 and 6.1 moved recovery, channels, providers, media, skills, and proof lanes forward.
 Market story
 Windows Companion and Microsoft Scout show OpenClaw becoming desktop and enterprise infrastructure, more than a clever dev tool.
 Next bar
 Every agent run should say what it used, why it chose it, what changed, and which evidence proves it worked.
