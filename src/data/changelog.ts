export interface ChangelogItem {
  title: string
  description: string
  href: string
}

export interface Version {
  version: string
  date: string
  href: string
  features: ChangelogItem[]
  fixes: string[]
}

export const CHANGELOG_SOURCE_URL = "https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG.md"

export const CHANGELOG_VERSIONS: Version[] = [
  {
    "version": "2026.5.9",
    "date": "2026.5.9",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659",
    "features": [
      {
        "title": "Skills",
        "description": "add `skills.load.allowSymlinkTargets` so intentional symlinked skill folders can resolve into trusted sibling repos without disabling root containment.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Agents/tools",
        "description": "add core Tool Search so agents can search and call large OpenClaw, MCP, and client tool catalogs through one compact PI bridge.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Chat commands",
        "description": "add `/think default` and `/fast default` to clear session overrides and inherit configured/provider defaults. (#79385) Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/pull/79385"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace dependency pins and lockfile, including `@openai/codex` `0.130.0`, `acpx` `0.7.0`, AWS SDK `3.1044.0`, OpenTelemetry `0.217.0`, `typebox` `1.1.38`, `vite` `8.0.11`, `oxfmt` `0.48.0`, and `oxlint` `1.63.0`, and update the Codex harness model snapshot for the new bundled app-server catalog.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/install",
        "description": "add guarded plugin install overrides so onboarding and repair tests can route specific plugins to registry specs or local `npm pack` artifacts via environment variables.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Tests/Docker",
        "description": "add Codex on-demand install and live plugin-tool dependency E2E lanes for packaged onboarding and npm-pack plugin proof.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/ACPX",
        "description": "accept an optional `args` array in `agents.<name>` config so paths and flag values containing spaces stay intact when spawning ACP agent processes. Thanks @TheArchitectit and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Agents",
        "description": "inject the current provider/model identity into system prompts, including configured prompt overrides and CLI hook prompt replacements, so agents can answer model-identity questions from the actual runtime selection.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Agents/subagents",
        "description": "add prompt-only `agents.defaults.subagents.delegationMode` and per-agent overrides with `suggest`/`prefer` modes, and centralize config-backed system prompt resolution across embedded, CLI, compaction, and command-export prompt surfaces.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Agents/subagents",
        "description": "add stronger delegation orchestration guidance, `sessions_yield` wait guidance, stable `taskName` aliases, and active-child runtime prompt context for spawned sub-agent work.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/CLI",
        "description": "add the optional bundled `oc-path` plugin, providing `openclaw path` for surgical `oc://` access to markdown, JSONC, and JSONL workspace files.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/SDK",
        "description": "add unified model catalog registration for text, image, video, and music providers, including `providerCatalogEntry` manifests, shared media list help, live catalog caching, and per-model video capability overlays.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "add presentation helpers for controls-only interactive rendering and opt-in empty fallback text so rich channel renderers can share `MessagePresentation` semantics without duplicating native cards or components.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "CLI",
        "description": "make parser, startup, config, guardrail, channel, agent, task, session, and MCP failures explain what happened and point to the next recovery command.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "GitHub Copilot",
        "description": "refresh the model catalog from `${baseUrl}/models` so per-account entitlement and accurate context windows surface at runtime; static manifest catalog (now including `gpt-5.5`) remains the fallback when discovery is disabled or the API is unreachable.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Active Memory",
        "description": "support concrete `plugins.entries.active-memory.config.toolsAllow` recall tool names for custom memory plugins while keeping the built-in memory-core default on `memory_search`/`memory_get` and preserving `memory_recall` automatically for `plugins.slots.memory: \"memory-lancedb\"`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Active Memory",
        "description": "report normal `NONE` recall decisions as `status=no_relevant_memory`, keep unavailable and failed recall paths distinct, and avoid caching no-summary recall results so ordinary no-context turns no longer look like broken `status=empty` memory. Fixes #79812. (#80015) Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/80015"
      },
      {
        "title": "Telegram",
        "description": "share the grammY API throttler across polling and ad hoc send clients for the same bot token, so visible draft previews and CLI sends use one quota gate. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Feishu",
        "description": "resolve group policy/tool context from the trusted chat target for group turns while keeping the speaker in `From`, so @mention replies do not drop the configured group id. Fixes #79457. Thanks @greyxiong.",
        "href": "https://github.com/openclaw/openclaw/issues/79457"
      },
      {
        "title": "Telegram/Feishu",
        "description": "honor configured per-agent and global `reasoningDefault` values when deciding whether channel reasoning previews should stream or stay hidden, addressing the preview-default part of #73182. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/73182"
      },
      {
        "title": "QQBot",
        "description": "mark recognized framework slash commands as text-command turns before reply dispatch so `/models`, `/status`, and `/new` responses stay visible in QQ Bot C2C conversations. Fixes #79310. Thanks @rollingshmily.",
        "href": "https://github.com/openclaw/openclaw/issues/79310"
      },
      {
        "title": "Docker",
        "description": "run the runtime image under `tini` so long-lived containers reap orphaned child processes and forward signals correctly. (#77885) Thanks @VintageAyu.",
        "href": "https://github.com/openclaw/openclaw/pull/77885"
      },
      {
        "title": "Logging/redaction",
        "description": "redact quoted HTTP client secret fields and auth/cookie headers in shared log and formatted error output. Related #71211 and #65623. (#75033) Thanks @liaoandi.",
        "href": "https://github.com/openclaw/openclaw/pull/75033"
      },
      {
        "title": "Gateway/SDK",
        "description": "document and stabilize the task ledger RPC surface for `tasks.list`, `tasks.get`, and `tasks.cancel`, including generated Swift model typing for optional task summaries. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired `google/gemini-3-pro-preview` and `google-gemini-cli/gemini-3-pro-preview` selections to `google/gemini-3.1-pro-preview` before they are written to model config.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "emit canonical `google/gemini-3.1-pro-preview` ids from configured provider catalog rows so model list and selection paths can test Gemini 3.1 instead of retired Gemini 3 Pro.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize nested proxy-provider catalog ids like `google/gemini-3-pro-preview` to `google/gemini-3.1-pro-preview`, so Kilo-style configured catalogs test Gemini 3.1 instead of the retired Gemini 3 Pro id.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize provider-onboarding model alias maps so setup flows preserve settings under `google/gemini-3.1-pro-preview` instead of re-emitting retired Gemini 3 Pro config keys.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize retired Gemini 3 Pro Preview ids inside Google dynamic model resolution so runtime clones also use `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize provider-auth default model results before setup hooks and picker returns so auth flows do not re-emit retired `google/gemini-3-pro-preview` selections.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Amazon Bedrock",
        "description": "support `serviceTier` parameter for Bedrock models, configurable via `agents.defaults.params.serviceTier` or per-model in `agents.defaults.models`. Valid values: `default`, `flex`, `priority`, `reserved`. (#64512) Thanks @mobilinkd.",
        "href": "https://github.com/openclaw/openclaw/pull/64512"
      },
      {
        "title": "Control UI",
        "description": "read the Quick Settings exec policy badge from `tools.exec.security` instead of the non-schema `agents.defaults.exec.security` path, so configured `full`/`deny` values render accurately. Fixes #78311. Thanks @FriedBack.",
        "href": "https://github.com/openclaw/openclaw/issues/78311"
      },
      {
        "title": "Control UI/usage",
        "description": "add transcript-backed historical lineage rollups for rotated logical sessions, with current-instance vs historical-lineage scope controls and long-range presets so usage history stays visible after restarts and updates. Fixes #50701. Thanks @dev-gideon-llc and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/50701"
      },
      {
        "title": "Agents/failover",
        "description": "harden state-aware lane suspension by persisting quota resume transitions, restoring configured lane concurrency, preserving non-quota failure reasons, and exporting model failover events through diagnostics OTLP. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Control UI/Windows",
        "description": "add the SPA-side WebView2 bridge for native hosts so draft text can update the chat composer and the ready handshake is wired through the app lifecycle. (#69633) Thanks @AlexAlves87.",
        "href": "https://github.com/openclaw/openclaw/pull/69633"
      },
      {
        "title": "Channels/streaming",
        "description": "make progress draft labels scroll away with other progress lines, render structured tool rows as compact emoji/title/details, show web-search queries from provider-native argument shapes, and skip empty Discord apply-patch starts until a patch summary exists. (#79146)",
        "href": "https://github.com/openclaw/openclaw/pull/79146"
      },
      {
        "title": "Runtime/performance",
        "description": "avoid full-array sorting while auto-selecting providers, resolving supported thinking levels, picking node last-seen timestamps, and extracting Codex usage-limit messages. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/doctor",
        "description": "avoid full-array sorting while selecting ClawHub search/archive results and bounded dreaming doctor entries. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Agents/compaction",
        "description": "keep contributor diagnostics to a bounded top-three selection without sorting the full history. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Sessions/UI",
        "description": "avoid full-array sorting while selecting ACPX leases, Google Meet calendar events, and latest chat sessions. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "mark direct `deliverOutboundPayloads` and legacy reply-dispatch bridges as deprecated compatibility substrate, enrich `sendDurableMessageBatch` with explicit durable send outcomes, migrate bundled send/turn paths off deprecated APIs, and enforce the split with `check:deprecated-api-usage`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "OpenAI/Talk",
        "description": "let browser realtime Talk, Gateway relay/Voice Call realtime bridges, and OpenAI realtime transcription use `openai-codex` OAuth when no direct API key is configured, make Google Meet `test_speech` honor `mode: \"bidi\"`, expose Control UI launch options for provider/model/voice/transport/VAD/reasoning, and update the default OpenAI realtime voice model to `gpt-realtime-2`. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Telegram",
        "description": "preserve the channel-specific 10-option poll cap in the unified outbound adapter so over-limit polls are rejected before send. (#78762) Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/78762"
      },
      {
        "title": "Telegram/streaming",
        "description": "continue over-limit draft previews in a new message instead of stopping when rendered preview text crosses Telegram's message limit. (#74508) Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/pull/74508"
      },
      {
        "title": "Slack",
        "description": "route handled top-level channel turns in implicit-conversation channels to thread-scoped sessions when Slack reply threading is enabled, keeping the root turn and later thread replies on one OpenClaw session. (#78522) Thanks @zeroth-blip.",
        "href": "https://github.com/openclaw/openclaw/pull/78522"
      },
      {
        "title": "Telegram",
        "description": "re-probe the primary fetch transport after repeated sticky fallback success so transient IPv4 or pinned-IP fallback promotion can recover without a gateway restart. Fixes #77088. (#77157) Thanks @MkDev11.",
        "href": "https://github.com/openclaw/openclaw/pull/77157"
      },
      {
        "title": "Runtime/install",
        "description": "raise the supported Node 22 floor to `22.16+` so native SQLite query handling can rely on the `node:sqlite` statement metadata API while continuing to recommend Node 24. (#78921)",
        "href": "https://github.com/openclaw/openclaw/pull/78921"
      },
      {
        "title": "Discord/voice",
        "description": "make duplicate same-guild auto-join entries resolve to the last configured channel so moving an agent between voice channels does not keep joining the stale channel.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "add realtime `/vc` modes so Discord voice channels can run as STT/TTS, a realtime talk buffer with the OpenClaw agent brain, or a bidi realtime session with `openclaw_agent_consult`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "add bounded realtime gateway logs for voice channel joins, realtime model/voice selection, transcripts, consult routing/answers, and playback start, allow OpenAI realtime Discord sessions to disable input-triggered response interruption for echo-heavy rooms while keeping explicit Discord barge-in available for new and already-active speakers, and allow voice turns to target an existing Discord channel agent session.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "add `voice.realtime.minBargeInAudioEndMs` and let the realtime provider own playback clearing, so speaker echo no longer cuts OpenAI realtime model audio at `audioEndMs=0` while low-echo rooms can opt back into immediate barge-in with `0`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "make `agent-proxy` the default voice mode so realtime voice acts as the microphone/speaker extension of the routed OpenClaw agent session, with `stt-tts` remaining available as an explicit fallback.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "route default `agent-proxy` realtime turns through the OpenClaw consult handoff with owner-level tool access and a forced-consult transcript fallback, matching the Codex-style voice front end while keeping the routed agent authoritative.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "keep OpenAI realtime bidi consults quiet while the supervisor agent is still working, accept Codex-style `conversation.item.done` function-call events, and preserve continuing tool results through the gateway relay so the OpenAI realtime bridge reliably routes consults before speaking the final answer.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "include a bounded one-line STT transcript preview in verbose voice logs so live voice debugging shows what speakers said before the agent reply.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Codex app-server",
        "description": "pin the managed Codex harness and Codex CLI smoke package to `@openai/codex@0.129.0`, defer OpenClaw integration dynamic tools behind Codex tool search by default, and accept current Codex service-tier values so legacy `fast` settings survive the stable harness upgrade as `priority`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Codex app-server",
        "description": "annotate message-tool-only direct chat turns in the dynamic `message` tool spec so visible replies are sent through `message(action=\"send\")` instead of staying private. (#79704)",
        "href": "https://github.com/openclaw/openclaw/pull/79704"
      },
      {
        "title": "Agents/PI",
        "description": "route explicit OpenAI Codex Responses runs through PI's native WebSocket-capable transport and remove OpenClaw's custom OpenAI Responses WebSocket stack while preserving auth injection, run abort signals, and prompt cache boundary stripping.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Models/config",
        "description": "allow `compat.thinkingFormat` values `qwen` and `qwen-chat-template` for configured OpenAI-compatible Qwen models, preserving them through catalog normalization and mapping `/think` levels to `enable_thinking` or `chat_template_kwargs.enable_thinking`. Fixes #79677. (#79777) Thanks @indulgeback.",
        "href": "https://github.com/openclaw/openclaw/pull/79777"
      },
      {
        "title": "Codex app-server",
        "description": "default implicit local stdio app-server permissions to guardian when Codex system requirements disallow the YOLO approval, reviewer, or sandbox value, including hostname-scoped remote sandbox entries, avoiding turn-start failures on managed hosts that permit only reviewed approval or narrower sandboxes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/install",
        "description": "run managed npm-root install, uninstall, prune, and repair commands from the managed root without a redundant `--prefix .`, avoiding npm 10.9.3 Arborist crashes on native Windows WhatsApp plugin installs. Fixes #78514. (#78902) Thanks @melihselamett-stack.",
        "href": "https://github.com/openclaw/openclaw/pull/78902"
      },
      {
        "title": "Config/schema/Windows",
        "description": "detect direct execution of the base config schema generator with `pathToFileURL` so Windows paths with backslashes still run the `--check` and `--write` command body. (#52989) Thanks @easyteacher.",
        "href": "https://github.com/openclaw/openclaw/pull/52989"
      },
      {
        "title": "Discord/voice",
        "description": "stream ElevenLabs TTS directly into Discord playback and send ElevenLabs latency optimization as the documented query parameter so spoken replies can start sooner.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord/voice",
        "description": "keep TTS playback running when another user starts speaking, ignore new capture during playback to avoid feedback loops, and downgrade expected receive-stream aborts to verbose diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "iMessage",
        "description": "expose native private-API message actions through `imsg rpc` for reactions, edits, unsends, replies, rich sends, attachments, and group management when `imsg status --json` reports the required bridge capabilities.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/tasks",
        "description": "reconcile stale CLI run-context tasks whose live run context disappeared even when a child session row remains, and apply the default bounded reload deferral timeout to channel hot reloads so stale task records cannot block Discord/Slack/Telegram reloads forever.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/heartbeat",
        "description": "keep stripped `HEARTBEAT_OK` acknowledgements out of pending final-delivery replay and let recent ack-only pending state proceed to the next heartbeat run instead of creating a self-refreshing requests-in-flight loop. Fixes #79258. Thanks @haumanto.",
        "href": "https://github.com/openclaw/openclaw/issues/79258"
      },
      {
        "title": "Gateway/sessions",
        "description": "keep session-store index writes atomic while skipping durable fsync inside the writer lock, reducing cron and channel-turn starvation on slow filesystems and addressing the session-store strand of #73655. Thanks @mmartoccia.",
        "href": "https://github.com/openclaw/openclaw/issues/73655"
      },
      {
        "title": "Discord/voice",
        "description": "make `openclaw channels capabilities --channel discord --target channel:<id>` and `channels status --probe` audit voice-channel permissions, including auto-join targets, so missing Connect/Speak/Read Message History permissions show up before `/vc join`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/restart",
        "description": "expose `skipDeferral` on the `gateway.restart.request` RPC and add `openclaw gateway restart --safe --skip-deferral` so operators can bypass the safe-restart deferral gate when a pinned task run prevents the OpenClaw-aware restart from draining. Surfaces the existing internal `scheduleGatewaySigusr1Restart({ skipDeferral })` semantics added in #71637 to a public surface, complementing `gateway.reload.deferralTimeoutMs`. Refs #76162. Thanks @solomonneas.",
        "href": "https://github.com/openclaw/openclaw/issues/71637"
      },
      {
        "title": "Discord/streaming",
        "description": "default Discord replies to progress draft previews so tool/work activity appears in one edited Discord message unless `channels.discord.streaming.mode` is set to `off`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "OpenAI/realtime",
        "description": "default realtime voice to `gpt-realtime-2`, use the GA Realtime WebSocket session shape for backend OpenAI bridges, and cover backend, WebRTC, Google Live, and Gateway relay paths in the live Talk smoke. (#79130)",
        "href": "https://github.com/openclaw/openclaw/pull/79130"
      },
      {
        "title": "Update/Windows",
        "description": "spawn the post-core-update child process with `stdio:\"pipe\"` on Windows so PowerShell/CMD console handles are not inherited, preventing the terminal from hanging after `openclaw update` completes. Fixes #78445. (#78483) Thanks @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/pull/78483"
      },
      {
        "title": "Plugins/install",
        "description": "add `npm-pack:<path.tgz>` installs so local npm pack artifacts run through the same managed npm-root install, lockfile verification, dependency scan, and install-record path as registry npm plugins.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Channels/plugins",
        "description": "show configured official external channels as missing-plugin status rows and send errors with exact install/doctor repair commands after raw package-manager upgrades leave Feishu or WhatsApp uninstalled. Fixes #78702 and #78593. Thanks @MarkMa84 and @mkupiainen.",
        "href": "https://github.com/openclaw/openclaw/issues/78702"
      },
      {
        "title": "Matrix",
        "description": "move the Matrix channel back to an official external ClawHub/npm plugin so core installs no longer need Matrix SDK runtime dependencies.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Matrix",
        "description": "attach `com.openclaw.presentation` metadata to semantic presentation replies so OpenClaw-aware Matrix clients can render rich buttons, selects, context rows, and dividers while stock clients keep the plain text fallback. (#73312) Thanks @kakahu2015.",
        "href": "https://github.com/openclaw/openclaw/pull/73312"
      },
      {
        "title": "Codex app-server",
        "description": "disarm the short post-tool completion watchdog after current-turn activity, expose `appServer.turnCompletionIdleTimeoutMs`, and include raw assistant item context in idle-timeout diagnostics so status-only post-tool stalls stop failing as idle. Fixes #77984. Thanks @roseware-dev and @rubencu.",
        "href": "https://github.com/openclaw/openclaw/issues/77984"
      },
      {
        "title": "Plugin skills/Windows",
        "description": "publish plugin-provided skill directories as junctions on Windows so standard users without Developer Mode can register plugin skills without symlink EPERM failures. Fixes #77958. (#77971) Thanks @hclsys and @jarro.",
        "href": "https://github.com/openclaw/openclaw/pull/77971"
      },
      {
        "title": "Process tool",
        "description": "show input-wait hints from `log` and `poll` for idle interactive background sessions so operators can inspect stuck CLIs and resume them with existing input actions. Fixes #33957. Thanks @bitloi and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/33957"
      },
      {
        "title": "Shell env/Windows",
        "description": "hide the login-shell environment probe child window so gateway startup and shell-env refreshes do not flash a console on Windows. Fixes #78159. (#78266) Thanks @BradGroux.",
        "href": "https://github.com/openclaw/openclaw/pull/78266"
      },
      {
        "title": "MS Teams",
        "description": "surface blocked Bot Framework egress by logging JWKS fetch network failures and adding a Bot Connector send hint for transport-level reply failures. Fixes #77674. (#78081) Thanks @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/pull/78081"
      },
      {
        "title": "Media/host-read",
        "description": "allow buffer-verified ZIP archives in the host-local media validator so agents can send ZIP attachments via the message tool. Fixes #78057. (#78292) Thanks @Linux2010.",
        "href": "https://github.com/openclaw/openclaw/pull/78292"
      },
      {
        "title": "Gateway/sessions",
        "description": "fast-path already-qualified model refs while building session-list rows so `openclaw sessions` and Control UI session lists avoid heavyweight model resolution on large stores. (#77902) Thanks @ragesaq.",
        "href": "https://github.com/openclaw/openclaw/pull/77902"
      },
      {
        "title": "Contributor PRs",
        "description": "remind external contributors to redact private information like IP addresses, API keys, phone numbers, and non-public endpoints from real behavior proof. Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACP bridge",
        "description": "relay Gateway exec approval prompts from active ACP turns to the ACP client's `session/request_permission` handler before resolving the Gateway approval. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Codex/plugins",
        "description": "enable migrated source-installed `openai-curated` Codex plugins in the same Codex harness thread with explicit `codexPlugins` config, cached app readiness, and fail-closed destructive-action policy. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Codex/plugins",
        "description": "enforce native plugin destructive-action policy with Codex app-level `destructive_enabled` config instead of OpenClaw-maintained per-tool deny lists, leave plugin app `open_world_enabled` on by default, and invalidate existing plugin app thread bindings so old generated app config is rebuilt. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QQBot/Skills",
        "description": "translate QQBot skill descriptions surfaced in the Skills UI so English-language users no longer see Chinese metadata. Fixes #77810. Thanks @eabase.",
        "href": "https://github.com/openclaw/openclaw/issues/77810"
      },
      {
        "title": "Image generation",
        "description": "include enabled generation providers such as fal in provider discovery even when another image provider is already active. Fixes #78141. Thanks @leoge007.",
        "href": "https://github.com/openclaw/openclaw/issues/78141"
      },
      {
        "title": "Slack",
        "description": "keep Socket Mode's native reconnect enabled so transient ping/pong misses can recover without forcing a full provider rebuild. Fixes #77933. Thanks @bmoran1022 and @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/77933"
      },
      {
        "title": "Cron",
        "description": "preserve cron timeout results when an isolated agent turn's `cron-nested` lane watchdog fires, preventing internal command-lane or model-fallback timeout text from being persisted. Fixes #77703. (#78168) Thanks @brokemac79 and @transxtech.",
        "href": "https://github.com/openclaw/openclaw/pull/78168"
      },
      {
        "title": "PR triage",
        "description": "mark external pull requests with `proof: supplied` when Barnacle finds structured real behavior proof, keep stale negative proof labels in sync across CRLF-edited PR bodies, and let ClawSweeper own the stronger `proof: sufficient` judgement.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACPX/Codex",
        "description": "preserve trusted Codex project declarations when launching isolated Codex ACP sessions, avoiding interactive trust prompts in headless runs. Thanks @Stedyclaw.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACPX/Codex",
        "description": "reap stale OpenClaw-owned ACPX/Codex ACP process trees on startup and after ACP session close, preventing orphaned harness processes from slowing the Gateway. Thanks @91wan.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACP bridge",
        "description": "implement stable session list, resume, and close handlers so ACP clients can page Gateway sessions, rebind existing sessions without replay, and close bridge sessions cleanly. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACP bridge",
        "description": "replay complete ledger-backed ACP sessions on load, including user prompts, tool updates, session metadata, and usage snapshots, while keeping older sessions on the existing transcript fallback. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "ACP sessions",
        "description": "allow parent agents to inspect and message their own spawned cross-agent ACP sessions without enabling broad agent-to-agent visibility. Thanks @barronlroth.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Talk/voice",
        "description": "unify realtime relay, transcription relay, managed-room handoff, Voice Call, Google Meet, VoiceClaw, and native clients around a shared Talk session controller and add the Gateway-managed `talk.session.*` RPC surface.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Diagnostics/Talk",
        "description": "export bounded Talk lifecycle/audio metrics and session recovery metrics through OpenTelemetry and Prometheus without exposing transcripts, audio payloads, room ids, turn ids, or session ids.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Logging/Talk",
        "description": "route shared Talk lifecycle events into bounded file and OTLP log records while keeping transcript text, audio payloads, turn ids, call ids, and provider item ids out of logs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Voice Call/realtime",
        "description": "add opt-in OpenClaw agent voice context capsules and consult-cadence guidance so Gemini/OpenAI realtime calls can sound like the configured agent without consulting the full agent on every ordinary turn. Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Telegram/streaming",
        "description": "keep draft preview rotation from reusing a pre-tool assistant preview after visible tool or media output lands between compaction replay and the next assistant message. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Telegram/performance",
        "description": "skip non-forum topic-cache setup, defer status reaction variant work until reactions are needed, and reuse ack reaction gating during message context assembly. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Telegram/performance",
        "description": "reduce command-menu CPU and allocation work when many native, plugin, and custom commands are registered. (#79717) Thanks @drsolveit.",
        "href": "https://github.com/openclaw/openclaw/pull/79717"
      },
      {
        "title": "CLI/migrate",
        "description": "add bulk on/off and skip controls to interactive Codex skill migration, leaving conflicting skill copies unchecked by default. (#77597) Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/pull/77597"
      },
      {
        "title": "CLI/migrate",
        "description": "show native Codex plugin names before truncated plan items and prompt for plugin activation explicitly during interactive Codex migration instead of silently keeping every planned plugin. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "CLI/migrate",
        "description": "leave already configured target Codex plugins unchecked in the interactive plugin selector and show a `plugin exists` conflict hint while keeping new plugin activations selected by default. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "CLI/migrate",
        "description": "return cleanly without apply confirmation when interactive Codex migration leaves both skill copies and native plugin activations unselected. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Cron CLI",
        "description": "add `openclaw cron list --agent <id>`, normalize the requested agent id, and include jobs without a stored agent id under the configured default agent while keeping `cron list` unfiltered when no agent is supplied. Fixes #77118. Thanks @zhanggttry.",
        "href": "https://github.com/openclaw/openclaw/issues/77118"
      },
      {
        "title": "Slack/performance",
        "description": "reduce message preparation, stream recipient lookup, and thread-context allocation overhead on Slack reply hot paths. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Control UI/chat",
        "description": "strip untrusted sender metadata from live streams and transcript display, preserve canvas preview anchors, and stop operator UI clients from injecting their internal client id as sender identity. Fixes #78739. Thanks @tmimmanuel, @guguangxin-eng, @hclsys, and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/78739"
      },
      {
        "title": "Control UI/chat",
        "description": "collapse consecutive duplicate text messages into one bubble with a count so repeated text-only messages stay compact without hiding nearby context.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Control UI/chat and Sessions",
        "description": "label inherited thinking defaults separately from explicit overrides while preserving provider-supplied option labels. Fixes #77581. Thanks @BunsDev and @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/issues/77581"
      },
      {
        "title": "Agents/runtime",
        "description": "add prepared runtime foundation contracts for carrying provider, model, tool, TTS, and outbound runtime facts through later reply-path migrations. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Control UI/WhatsApp",
        "description": "keep Show QR available for unlinked WhatsApp accounts while switching linked accounts to the explicit Relink action and showing Wait for scan only when a QR is active. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/performance",
        "description": "reuse the compatible plugin metadata snapshot across dashboard and channel agent turns so auto-enabled runtime config does not repeatedly rescan plugin metadata before provider calls. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/performance",
        "description": "reuse current plugin metadata for provider activation, auth/env candidate lookup, and bundle settings during dashboard and channel agent turns while keeping the configless secret-target cache unscoped and refusing stale unscoped reuse when plugin discovery roots differ. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/performance",
        "description": "avoid resolving plugin auto-enable metadata twice in one runtime config pass, reducing repeated dashboard turn metadata scans. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Auth/providers",
        "description": "pass `config` and `workspaceDir` lookup context through to provider-id resolution so workspace-scoped auth aliases resolve correctly when no explicit alias map is supplied. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "add startup phase spans, active work labels, stale terminal bridge markers, and opt-in sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "add an opt-in Discord thread attachment before/after scenario that creates a real thread, calls `message.thread-reply` with `filePath`, and captures baseline/candidate screenshot evidence.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Discord",
        "description": "preserve `filePath` and `path` attachments when replying to a thread with the message tool.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "add visual desktop tasks with Crabbox MP4 recording, screenshot capture, and optional image-understanding assertions, and preserve video artifacts in Mantis before/after reports.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/WhatsApp",
        "description": "add `pnpm openclaw qa whatsapp` for live DM canary and pairing-gate coverage using two pre-linked WhatsApp Web sessions from the QA credential pool.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "CI/Crabbox",
        "description": "default owned AWS fallback to `standard` multi-region capacity with broker hints enabled, reserving `beast` for explicit CPU-bound maintainer lanes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/install",
        "description": "run managed npm-root install, rollback, repair, and uninstall mutations with legacy peer resolution so removing one plugin cannot rehydrate a stale registry `openclaw` package into the shared root. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "add `openclaw/plugin-sdk/channel-message` lifecycle helpers for `defineChannelMessageAdapter`, `deliverInboundReplyWithMessageSendContext`, send/receive/live/state contracts, durable final-delivery capability derivation, capability proof helpers, and normalized message receipts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "add `createChannelMessageAdapterFromOutbound` so channel plugins can derive durable message adapters from proven outbound adapters without duplicating send/receipt bridge code.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "add `actions.prepareSendPayload(...)` so channel plugins can shape message-tool sends into durable payloads while core owns queueing, hooks, retry, recovery, and acknowledgements.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "make the legacy `channel-reply-pipeline` subpath a compatibility wrapper over the shared reply core while steering root compat deprecations toward `plugin-sdk/channel-message`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "move Discord, Slack, Mattermost, and Matrix live-preview finalization onto `plugin-sdk/channel-message` and attach message receipts to Telegram finalized previews plus Teams native stream finals, so preview edits and stream finals are represented in the message lifecycle instead of draft-only helpers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Telegram",
        "description": "persist the polling restart watermark after successful update dispatch instead of at handler entry, leaving failed updates retryable while still coalescing completed offsets safely.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "expose reusable atomic replacement, sibling-temp writes, and cross-device move fallback helpers through `plugin-sdk/security-runtime`, and move OpenClaw's duplicated safe filesystem write paths onto the shared `@openclaw/fs-safe` package.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "route browser, media, channel, and QA external output producers through staged fs-safe writes before final publication. (#78768)",
        "href": "https://github.com/openclaw/openclaw/pull/78768"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "rename the public temp workspace helpers to `tempWorkspace`, `withTempWorkspace`, `tempWorkspaceSync`, and `withTempWorkspaceSync`, matching the cleaner `@openclaw/fs-safe` API before the package is published.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Core/performance",
        "description": "trim reply payload routing, heartbeat filtering, tool display, core tool assembly, channel directory, task status, and Slack approval formatting helper chains with direct bounded scans. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Control UI/performance",
        "description": "keep chat, config, and channel refreshes responsive by decoupling slow history/schema/status work, reducing the client history window, and logging over-budget chat/config renders. Refs #77060, #45698, #47979, #44107. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/77060"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "add startup phase spans, active work labels, stale terminal bridge markers, and opt-in sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "add visual desktop tasks with Crabbox MP4 recording, screenshot capture, and optional image-understanding assertions, and preserve video artifacts in Mantis before/after reports.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "reuse Crabbox desktop/browser capture tooling and pnpm store caches during Slack desktop smoke runs, reducing per-scenario setup work before screenshots and videos are captured.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "add Slack desktop hydrate modes and per-phase timing reports so warm prehydrated VNC leases can skip source install/build while cold runs still prove the full source checkout.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "pass the runtime env through desktop-browser Crabbox and artifact-copy child commands, so embedded Mantis callers can provide Crabbox credentials without mutating the parent process. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "return the copied Slack desktop screenshot path even when remote Slack QA fails, so the CLI still prints the failure screenshot artifact. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "QA/Mantis",
        "description": "accept Blacksmith Testbox `tbx_...` lease ids from desktop smoke warmup, so provider overrides do not fail before inspect/run. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/SDK",
        "description": "add bounded `before_agent_finalize` retry instructions so workflow plugins can request one more model pass. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugin SDK",
        "description": "add plugin-owned `SessionEntry` slot projection and scoped trusted-policy session extension reads. (#75609; replaces part of #73384/#74483) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/75609"
      },
      {
        "title": "Plugin SDK/Gateway",
        "description": "add scoped `plugins.sessionAction` dispatch and plugin-attributed `emitAgentEvent` support so plugins can expose typed session actions and workflow events to trusted clients. (#75578; replaces part of #73384/#74483) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/75578"
      },
      {
        "title": "Plugins/SDK",
        "description": "expose host-derived tool target paths to `before_tool_call` and trusted policy hooks so workflow plugins can reason about known file targets without reparsing tool envelopes. (#75605) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/75605"
      },
      {
        "title": "Control UI/WebChat",
        "description": "show a persistent compact context usage indicator from fresh session token data before the high-pressure warning state, while keeping the existing compaction prompt threshold. Fixes #46398; refs #45048, #50071, and #73744. Thanks @walterwkchoy, @AxelrodAI, @Brissux, @vincentkoc, and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/46398"
      },
      {
        "title": "Contributor PRs",
        "description": "require external pull requests to include after-fix real behavior proof from a real OpenClaw setup, with terminal screenshots, console output, redacted runtime logs, linked artifacts, and copied live output treated as valid evidence while unit tests, mocks, lint, typechecks, snapshots, and CI remain supplemental only.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Plugins/catalog",
        "description": "add an `@tencent-weixin/openclaw-weixin` external entry pinned to `2.4.1` so onboarding and `openclaw channels add` can install the Tencent Weixin (personal WeChat) channel by default. (#77269) Thanks @pumpkinxing1.",
        "href": "https://github.com/openclaw/openclaw/pull/77269"
      },
      {
        "title": "Developer tooling",
        "description": "add checked-in VS Code Gateway debugging configs and an opt-in `OUTPUT_SOURCE_MAPS=1` source-map build path for breakpoints in TypeScript source. (#45710) Thanks @SwissArmyBud.",
        "href": "https://github.com/openclaw/openclaw/pull/45710"
      },
      {
        "title": "Managed proxy",
        "description": "add `proxy.loopbackMode` for Gateway loopback control-plane traffic, allowing operators to keep the default Gateway loopback bypass, force loopback Gateway traffic through the proxy, or block it. (#77018) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/77018"
      },
      {
        "title": "Telegram/native commands",
        "description": "show the current thinking level above the `/think` level picker so users can see the active setting before changing it. (#78278) Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/78278"
      },
      {
        "title": "Plugins/hooks",
        "description": "add a `before_agent_run` pass/block gate that can stop a user prompt before model submission while preserving a redacted transcript entry for the user, and clarify that raw conversation hooks require `hooks.allowConversationAccess=true`. (#75035) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/75035"
      },
      {
        "title": "Config/Nix",
        "description": "keep startup-derived plugin enablement, gateway auth tokens, control UI origins, and owner-display secrets runtime-only instead of rewriting `openclaw.json`; in Nix mode, config writers, mutating `openclaw update`, plugin lifecycle mutators, and doctor repair/token-generation now refuse with agent-first nix-openclaw guidance. (#78047) Thanks @joshp123.",
        "href": "https://github.com/openclaw/openclaw/pull/78047"
      },
      {
        "title": "Plugin SDK",
        "description": "add a generic `api.runtime.llm.complete` host completion helper with runtime-derived caller attribution, config-gated model/agent overrides, session-bound context-engine access, request-scoped config, audit metadata, and normalized usage attribution. (#64294) Thanks @DaevMithran.",
        "href": "https://github.com/openclaw/openclaw/pull/64294"
      },
      {
        "title": "Control UI/exec approvals",
        "description": "highlight parsed shell command fragments that may deserve extra review in approval prompts. (#77153) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/77153"
      },
      {
        "title": "Channels/iMessage",
        "description": "honor `channels.imessage.groups.<chat_id>.systemPrompt` (and the `groups[\"*\"]` wildcard) by forwarding it as `GroupSystemPrompt` on inbound group turns, mirroring the byte-identical resolver semantic from WhatsApp where defining the key as an empty string on a specific group suppresses the wildcard fallback. Brings iMessage to parity with the per-group `systemPrompt` pattern already supported by Discord, Telegram, IRC, Slack, GoogleChat, and the retired BlueBubbles channel. Fixes #78285. (#79383) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/79383"
      },
      {
        "title": "iMessage",
        "description": "add opt-in inbound catchup that replays messages received while the gateway was offline (crash, restart, mac sleep) on next startup. Enable with `channels.imessage.catchup.enabled: true`; tunables for `maxAgeMinutes`, `perRunLimit`, `firstRunLookbackMinutes`, and `maxFailureRetries`. Persists a per-account cursor under the OpenClaw state dir (`<openclawStateDir>/imessage/catchup/`), replays each row through the live dispatch path so allowlists/group policy/dedupe behave identically on replayed and live messages, and force-advances past wedged guids after `maxFailureRetries` to prevent stuck cursors. Extends the persisted echo-cache retention window so the agent's own outbound rows from before a gap are not re-fed as inbound on replay. Includes a regenerated `src/config/bundled-channel-config-metadata.generated.ts` so the runtime AJV schema accepts the new `channels.imessage.catchup` block. Fixes #78649. (#79387) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/79387"
      },
      {
        "title": "Channels/Yuanbao",
        "description": "bump the bundled `openclaw-plugin-yuanbao` npm spec from `2.11.0` to `2.13.0` in the official external channel catalog and refresh the pinned integrity hash, so fresh installs and catalog-driven reinstalls pick up the newer Yuanbao channel plugin release. (#79620) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/79620"
      },
      {
        "title": "Providers/Mistral",
        "description": "add `mistral-medium-3-5` to the bundled catalog with reasoning support. Thanks @sliekens.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Docs/Mistral",
        "description": "document Medium 3.5 setup, local infer smoke usage, adjustable reasoning, and the Mistral HTTP 400 caveat for `reasoning_effort=\"high\"` with `temperature: 0`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      },
      {
        "title": "Channels/iMessage",
        "description": "remove the bundled BlueBubbles channel surface and deprecate BlueBubbles-backed iMessage setup in OpenClaw. Existing `channels.bluebubbles` configs must migrate to `channels.imessage` using `imsg` on a signed-in Mac or an SSH wrapper, and non-macOS default `imsg` configs now report remote-Mac wrapper guidance.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202659"
      }
    ],
    "fixes": [
      "Google/Gemini: default new API-key onboarding to stable `google/gemini-2.5-flash` instead of the preview Pro route, reducing surprise daily quota exhaustion. Fixes #79670. Thanks @HugeBunny.",
      "Amazon Bedrock: expose Claude thinking profiles through the lightweight provider policy surface so `/think:adaptive` validates before the Bedrock runtime plugin is loaded. Fixes #79754. Thanks @phoenixyy and @hclsys.",
      "Codex/transcripts: mirror dynamic tool calls and outputs into Codex app-server transcripts so tool activity is visible alongside assistant text instead of being elided, with per-item output capped at 12,000 characters. (#79952) Thanks @scoootscooob.",
      "Memory: close temp SQLite handles before failed atomic reindex cleanup and retry Windows EBUSY/EPERM/EACCES temp file removals, so `memory index --force` does not abort or leave temp sidecars on locked filesystems. Fixes #79708. Thanks @LobsterFarmerAmp and @hclsys.",
      "Agents/CLI: add an explicit `reseedFromRawTranscriptWhenUncompacted` backend opt-in so safe invalidated CLI sessions can reseed from a bounded raw OpenClaw transcript tail before compaction while auth-boundary resets remain no-raw. Fixes #79713. (#79764) Thanks @hclsys.",
      "Agents/CLI: handle resumed CLI JSONL output and bound supervisor output buffering so resumed runs stay readable without letting noisy child output grow unbounded.",
      "Codex app-server: honor per-call `timeoutMs`, configured `image_generate` timeouts, and media image-understanding timeouts for dynamic tool calls, capped at 600000 ms, so slow image generation and image analysis no longer fail at the 30s bridge default. Fixes #79810. Thanks @omarshahine.",
      "Agents/sandbox: include the container workspace path hint in sandbox-root escape errors while preserving shortened host workspace roots. Fixes #79712. Thanks @haumanto and @hclsys.",
      "macOS/device pairing: let the native app read CLI PEM device identities and let the TypeScript loader migrate legacy Swift raw-key identities without generating a new device id, preventing repeated pairing prompts when `OPENCLAW_STATE_DIR` is shared. Fixes #76815. Thanks @BunsDev.",
      "Image generation: honor configured web-fetch SSRF policy across OpenAI, Google, MiniMax, OpenRouter, and Vydra provider requests so RFC2544 fake-IP proxy opt-ins reach generation calls. Fixes #79716. (#79765) Thanks @hclsys.",
      "Telegram: persist reply-chain message cache records as a compact append log instead of rewriting the full cache on every inbound message, reducing large-group turn latency.",
      "Telegram/CLI-backend: mirror outbound replies to the session transcript so CLI-backend agent responses create `.jsonl` session files, preventing `sessionId=unknown` on subsequent runs. Fixes #75991.",
      "Gateway/nodes: allow approved chat-channel macOS node exec replays to cross transient agent WebSocket reconnects only when node, agent session, and channel target metadata still match, restoring Telegram/WeCom host=node approvals without opening a general backend replay bypass. Fixes #77656. Thanks @BunsDev.",
      "QQBot: route gateway WebSocket connections through the ambient proxy agent so deployments with `https_proxy`, `HTTPS_PROXY`, or `HTTP_PROXY` can reach the QQ gateway. (#72961) Thanks @xialonglee.",
      "Agents/subagents: treat `sessions_spawn` `model: \"default\"` as the default-model fallback and ignore ACP-only stream targets for native sub-agent spawns. Fixes #72078. (#72101) Thanks @xialonglee.",
      "Agents/failover: stop retrying assistant-prefill format rejections across auth profiles or model fallbacks, surfacing the deterministic provider error instead of requeueing the lane. Fixes #79688. (#79728) Thanks @hclsys.",
      "Google/Gemini: resolve missing Gemini 3 Flash catalog rows through the Google provider template path so image-capable media-understanding models keep `input: [\"text\", \"image\"]` instead of falling back to text-only metadata. Fixes #79750. (#79759) Thanks @fenglanhua and @hclsys.",
      "Memory/QMD: warn with a manual stale collection removal hint when QMD reports a path/pattern conflict but `collection list` lacks verifiable metadata, avoiding unsafe stderr-only rebinds. Refs #71783. (#72297) Thanks @MonkeyLeeT.",
      "Models/auth: make `openclaw models status --check` and dashboard auth health honor effective auth profile order while keeping stale profiles visible. (#79685) Thanks @nimbleenigma.",
      "Agents/failover: classify bare `stream_read_error` streaming failures as transient timeouts so configured model fallback runs instead of surfacing the raw transport error. Fixes #79689. (#79692) Thanks @hekunwang.",
      "Agents/failover: persist overloaded auth-profile cooldown marks before exhausted fallback summaries surface, so immediate fallback retries honor the recorded cooldown state.",
      "Docs/Subagents: correct the listed sub-agent bootstrap context files to include `SOUL.md`, `IDENTITY.md`, and `USER.md`. (#79470) Thanks @lastguru-net.",
      "Backup: keep live backup archives from copying current agent session transcripts, cron run logs, and delivery queues while preserving workspace lock/temp files and keeping `--json` output parseable when volatile files are skipped. Fixes #72249. (#72251) Thanks @abnershang.",
      "Backup: place the temp manifest outside every backed-up asset so `backup create --verify` still passes when `TMPDIR` resolves inside a source path (for example `~/.openclaw/tmp`), avoiding the duplicate root manifest that otherwise tripped `Expected exactly one backup manifest entry, found 2`. Fixes #75007. Thanks @YaanFPV.",
      "OpenAI/Codex: install the Codex runtime plugin from npm during OpenAI onboarding and load it automatically for implicit OpenAI model routes, while preserving manual PI runtime overrides. Fixes #79358.",
      "OpenAI/realtime voice: defer `response.create` while a realtime response is still active, retry after `response.done`/`response.cancelled`, and align GA input transcription/noise-reduction defaults with the Codex realtime reference so Discord/Voice Call consult results can resume speaking instead of tripping the active-response race.",
      "OpenAI/realtime voice: avoid duplicate barge-in cancellation requests, log realtime model interruption/cutoff events in Discord voice logs, and treat OpenAI's no-active-response cancellation reply as a completed cancel so Discord voice sessions do not wedge pending speech after fast interruptions.",
      "Agents/runtime: strip trailing assistant prefill for Claude-family OpenAI Responses routes, persist prompt/assistant profile cooldown marks before fallback, and show the configured container root in sandbox escape diagnostics. Fixes #79688 and #79712. Thanks @stainlu and @mushuiyu886.",
      "Gateway: avoid false degraded event-loop health during rapid health/readiness/status probes unless sustained load has delay co-evidence, while keeping hard delay detection immediate. (#77028) Thanks @rubencu.",
      "Markdown: keep blockquote spans off trailing paragraph separators. Fixes #79646.",
      "Plugin SDK/LM Studio: recover Harmony plain-text tool calls from LM Studio streams. Fixes #78326.",
      "Control UI: refresh the model cache after `session_status(model=...)` changes a session model. Fixes #79613.",
      "Agents/context-engine: share loop-hook checkpoints with the after-turn finalizer so messages are not replayed. Fixes #79630.",
      "Codex app-server: keep native hook relays alive for long-running turns so shell and file approvals stay reachable until the configured run window finishes. (#77533) Thanks @rubencu.",
      "Gateway/macOS: clear ignored SIGUSR1 restart state, skip redundant package-update restarts when the refreshed LaunchAgent already serves the expected version, and give launchd a 10s throttle plus 20s shutdown window so update restarts do not leave old gateways alive or fight supervisor recovery. Fixes #79577; refs #78699 and #60885. Thanks @BunsDev.",
      "Status/Codex: route Codex-harness `openai/*` usage through the OpenAI Codex quota provider and scope CLI status usage to the default agent auth store so `/status` and `openclaw status --usage` show Codex quota windows again. Fixes #79312. Thanks @keshavbotagent.",
      "Matrix: keep joined strict DM rooms discoverable when stale `m.direct` mappings already point at an older strict room, and let `dm.sessionScope: \"per-room\"` promote safe unmapped strict rooms through the existing unnamed/unaliased room gate. Fixes #79514. Thanks @stainlu.",
      "Gateway/agent: pass the session-key agent id into inline image attachment validation so the first image in a fresh per-agent session uses the agent's vision-capable model override instead of the text-only system default. Fixes #79407. Thanks @pandadev66.",
      "Gateway/maintenance: prune dedupe overflow against a stable excess count and keep active agent retries from starting duplicate runs after cache eviction. (#73841) Thanks @thesomewhatyou.",
      "Control UI/subagents: suppress internal `subagent_announce` handoff prompts from requester transcripts and hide legacy inter-session wrapper rows so completed subagent results no longer surface runtime context in WebChat history. (#79618) Thanks @joshavant.",
      "Discord: preserve username target resolution for Discord outbound sends. (#79076) Thanks @vincentkoc.",
      "Gateway/sessions: rotate generated transcript paths when gateway sessions reset, complementing the daily-rollover transcript persistence. (#79076) Thanks @vincentkoc.",
      "Dependencies: pin the transitive `fast-uri` production dependency to `3.1.2` so the production dependency audit no longer resolves the vulnerable `<=3.1.1` range. Thanks @shakkernerd.",
      "Plugins/install: fail managed npm plugin installs when OpenClaw cannot repair a required plugin-local `node_modules/openclaw` peer link, preventing that peer-link failure mode from producing unusable `@openclaw/codex` installs. Refs #79462. Thanks @ai-hpc.",
      "xAI/tools: register and execute `x_search` and `code_execution` when the xAI API key comes from an auth profile, keeping the plugin tool gate aligned with `openclaw onboard --auth-choice xai-api-key`. Fixes #79353. Thanks @dbernaltbn.",
      "Cron/agents: recognize same-target `edit`↔`write` recovery in `isSameToolMutationAction`, so a successful `write` to a path clears an earlier failed `edit` on the same path. Stops cron from reporting fatal failures when an agent self-heals across `edit` and `write`, while preserving same-tool fingerprint matching, blocking different-target writes, and excluding tools (including `apply_patch`) whose real call args do not produce a stable `path` fingerprint segment. Fixes #79024. Thanks @RenzoMXD.",
      "Gateway/Tailscale: add opt-in `gateway.tailscale.preserveFunnel` so when `tailscale.mode = \"serve\"` and an externally configured Tailscale Funnel route already covers the gateway port, OpenClaw skips re-applying `tailscale serve` on startup and skips the `resetOnExit` teardown for that run, keeping operator-managed Funnel exposure alive across gateway restarts. Fixes #57241. Thanks @RenzoMXD.",
      "CLI/router: when `openclaw <name>` does not match a CLI subcommand, check plugin tool manifests first so names like `lcm_recent` get an agent-tool diagnostic instead of the misleading suggestion to add the tool name to `plugins.allow`. Fixes #77214. Thanks @100yenadmin.",
      "QA-lab/parity: bump the live mock-openai parity baseline from `claude-opus-4-6`/`claude-sonnet-4-6` to `claude-opus-4-7`/`claude-sonnet-4-7` and the candidate alt from `gpt-5.4-alt` to `gpt-5.5-alt` in `openclaw-release-checks.yml` and `qa-live-transports-convex.yml`, matching the active Opus 4.7 / GPT-5.5 defaults already used elsewhere on main. Carries forward the surface-bump portion of #74290. Thanks @100yenadmin.",
      "QA-lab/scenarios: raise the `approval-turn-tool-followthrough` per-turn fallback timeouts from 20s/30s to 60s so cold mock-gateway parity runs do not flake on the approval-turn chain. Carries forward the timeout-bump portion of #74290. Thanks @100yenadmin.",
      "Gateway/restart continuation: treat routed post-reboot agent turns as trusted internal continuations while preserving the original Telegram topic route, and retry briefly when the previous run is still shutting down, so owner-only tools remain available for chained restart workflows after reboot.",
      "Agents/compaction: keep the recent tail after manual `/compact` when Pi returns an empty or no-op compaction summary, preventing blank checkpoints from replacing the live context.",
      "Native commands: handle slash commands before workspace and agent-reply bootstrap so Telegram `/status` and other command-only native replies do not wait behind full agent turn setup.",
      "Telegram/groups: include the recent local chat window and nearby reply-target window as generic inbound context so stale reply ancestry does not overshadow the live group conversation.",
      "Plugins/Nix: allow externally configured plugin roots under `/nix/store` to load in `OPENCLAW_NIX_MODE=1` while keeping normal external plugin hardlink rejection unchanged. Thanks @joshp123.",
      "Nextcloud Talk: include the required bot `response` feature in setup, explain missing `--feature response` on rejected sends, and surface missing response capability in doctor/status checks. Fixes #78935. (#79657) Thanks @joshavant.",
      "fix(discord): gate user allowlist name resolution [AI]. (#79002) Thanks @pgondhi987.",
      "fix(msteams): gate startup user allowlist resolution [AI]. (#79003) Thanks @pgondhi987.",
      "Infra/fetch-timeout: pass `operation` and `url` context to `buildTimeoutAbortSignal` from the music-generate reference fetch and the Matrix guarded redirect transport, so the `fetch timeout reached; aborting operation` warning carries actionable structured fields instead of a bare line. Fixes #79195. Thanks @pandadev66.",
      "Harden macOS shell wrapper allowlist parsing [AI]. (#78518) Thanks @pgondhi987.",
      "macOS/config: reject stale or destructive app fallback config writes before direct replacement and keep rejected payloads as private audit artifacts, so `gateway.mode`, metadata, and auth are not silently clobbered. Fixes #64973 and #74890. Thanks @BunsDev.",
      "Gateway/macOS: include Apple Silicon Homebrew bin and sbin directories in generated LaunchAgent service PATHs and service-audit expectations so `openclaw gateway restart` keeps Homebrew Node installs reachable. Fixes #79232. Thanks @BunsDev and @TurboTheTurtle.",
      "Doctor/OpenAI: stop pinning migrated `openai-codex/*` routes to the Codex runtime so mixed-provider agents keep automatic PI routing for MiniMax, Anthropic, and other non-OpenAI model switches.",
      "Doctor/OpenAI: remove stale whole-agent Codex runtime pins while repairing legacy OpenAI-Codex routes, so upgraded agents do not force an unregistered Codex harness before provider/model routing can choose the right runtime.",
      "Gateway/macOS: `openclaw gateway stop` now uses `launchctl bootout` by default instead of unconditionally calling `launchctl disable`, so KeepAlive auto-recovery still works after unexpected crashes; use the new `--disable` flag to opt into the persistent-disable behavior when a manual stop should survive reboots. Fixes #77934. Thanks @bmoran1022.",
      "Gateway/macOS: `repairLaunchAgentBootstrap` no longer kickstarts an already-running LaunchAgent, preventing unnecessary service restarts and session disconnects when repair runs against a healthy gateway. Fixes #77428. Thanks @ramitrkar-hash.",
      "Gateway/macOS: `openclaw gateway stop --disable` now persists the LaunchAgent disable bit even after a previous bootout left the service not loaded, keeping the explicit stay-down path reliable. (#78412) Thanks @wdeveloper16.",
      "CLI/status: keep lean `openclaw status --json` off manifest-backed channel discovery so configured-channel checks do not repeatedly rescan plugin metadata. Fixes #79129.",
      "Control UI/chat: hide retired and non-public Google Gemini model IDs from chat model catalogs and route the bare `gemini-3-pro` alias to Gemini 3.1 Pro Preview instead of the shut-down Gemini 3 Pro Preview. Thanks @BunsDev.",
      "CLI/infer: canonicalize case-only catalog model refs in `infer model run --model` so mixed-case provider/model strings resolve to the canonical catalog entry instead of failing with `Unknown model`. (#78940) Thanks @ai-hpc.",
      "CLI/infer: allow explicit local `infer model run --model <provider/model>` probes to use exact bundled static catalog rows before the provider is written to config, surfacing missing credentials as auth errors instead of `Unknown model`.",
      "CLI/install: refuse state-mutating OpenClaw CLI runs as root by default, keep an explicit `OPENCLAW_ALLOW_ROOT=1` escape hatch for intentional root/container use, and update DigitalOcean setup guidance to run OpenClaw as a non-root user. Fixes #67478. Thanks @Jerry-Xin and @natechicago.",
      "Auto-reply/media: resolve `scp` from `PATH` when staging sandbox media so nonstandard OpenSSH installs can copy remote attachments.",
      "Agents/PI: route PI-native OpenAI-compatible default streams through OpenClaw boundary-aware transports so local-compatible model runs keep API-key injection and transport policy.",
      "Gateway/media: require authenticated owner or admin context for managed outgoing image bytes instead of trusting requester-session headers.",
      "Doctor/gateway: avoid duplicate Node runtime warnings when the daemon install plan already selected a supported Node runtime.",
      "Gateway/nodes: ignore malformed non-string capability entries from live nodes instead of throwing while listing the node catalog.",
      "Gateway/pairing: preserve deliberately narrowed role-token scopes when approving device scope upgrades instead of regranting the whole approved baseline.",
      "Telegram/ACP: keep chat-bound ACP replies durable by delivering final-only ACP output as final text instead of transient Telegram preview blocks. Thanks @shakkernerd.",
      "Telegram: hydrate replied-to messages as a persisted nearest-first reply chain so agents can see observed parent text, media refs, captions, senders, timestamps, and nested replies instead of guessing from a shallow reply id.",
      "Telegram: skip the rewritten silent-reply fallback when the dispatcher reports a final reply was queued in the same turn so a \"No extra answer from me.\" filler cannot race ahead of the actual reply when lane delivery state never observes the send. Fixes #78929.",
      "Gateway/watch: leave `OPENCLAW_TRACE_SYNC_IO` disabled by default in `pnpm gateway:watch:raw` so watch mode avoids noisy Node sync-I/O stack traces unless explicitly requested.",
      "Codex app-server: close stdio stdin before force-killing the managed app-server, matching Codex single-client shutdown behavior and avoiding unsettled CLI exits after successful runs.",
      "CLI/Codex: dispose registered agent harnesses during short-lived CLI shutdown so successful Codex-backed `agent --local` runs do not leave app-server child processes alive.",
      "Agents/Codex: auto-enable the Codex harness plugin for one-shot OpenAI model overrides so `openclaw agent --local --model openai/...` does not fail with an unregistered `codex` harness.",
      "Gateway/live tests: avoid full model-registry enumeration for explicit provider-qualified live model filters, preventing `.profile` OpenAI gateway profile runs from hanging before provider dispatch.",
      "Gateway/status: surface CLI and gateway runtime versions, warn about stale PATH/global wrappers when they differ, and add stale-wrapper checks to the newer-config warning. Refs #79091. Thanks @RamaAditya49 and @sallyom.",
      "Google/Gemini: retry stalled Gemini 3 preview direct API-key streams with a lean first-response payload and share Gemini tool-schema cleanup across direct Google and Gemini CLI providers, so main sessions with coding tools can recover before the LLM idle watchdog fires. (#79668) Thanks @joshavant.",
      "Providers: preserve non-OK `text/event-stream` response bodies so provider HTTP errors keep their JSON detail instead of collapsing to generic streaming failures. Fixes #78180.",
      "Gateway/auth: make explicit `trusted-proxy` mode fail closed instead of accepting local password fallback credentials after trusted-proxy identity checks fail. Fixes #78684.",
      "Active memory: treat Google Chat `spaces/...` conversation ids as scoped targets instead of runnable channel names so recall runs no longer fail bundled-plugin dirName validation. Fixes #78918.",
      "Active memory: make `/active-memory status` honor the configured agent allowlist instead of reporting on for agents where recall is disabled. Fixes #78986.",
      "Mistral: normalize structured OpenAI-compatible completions content blocks so thinking objects are not persisted as `[object Object]` visible reply text. Fixes #78846.",
      "Tools/session status: render the active heartbeat/run model for `session_status({\"sessionKey\":\"current\"})` instead of falling back to the persisted session default. Fixes #77493.",
      "Doctor/secrets: allow safe inherited exec SecretRef `passEnv` names such as `HOME` while still blocking dangerous runtime env hooks. Fixes #78216.",
      "Chat commands: make `/model default` reset the session model override instead of treating it as a literal model name. Fixes #78182.",
      "Cron: make rejected `payload.model` errors show the configured `agents.defaults.models` allowlist instead of echoing the rejected model twice. Fixes #79058.",
      "Agents/subagents: retry parent wake announces when the announce-summary model run fails with fallback cooldown exhaustion instead of dropping the wake on the first transient provider overload. Refs #78581.",
      "Providers/network: honor IPv4 CIDR and octet-wildcard `NO_PROXY` entries such as `100.64.0.0/10` and `100.64.*` before enabling trusted env-proxy mode for model-provider requests. Fixes #79030.",
      "Skills: cap skills watcher directory traversal at the same depth used by skill discovery so large non-skill trees under configured skill roots do not exhaust file descriptors on startup. Fixes #75501. Thanks @wzq-xzwj.",
      "Docs/Docker: document a local Compose override for Docker Desktop DNS failures in the shared-network `openclaw-cli` sidecar, keeping the default compose setup hardened while unblocking `openclaw plugins install` when users opt in. Fixes #79018. Thanks @Jason-Vaughan.",
      "Installer: when npm installs `openclaw` outside the parent shell PATH, print follow-up commands with the resolved binary path instead of telling users to run `openclaw` from a shell that will report `command not found`. Fixes #72382. Thanks @jbob762.",
      "Plugins/runtime: share MIME and JSON Schema helpers across bundled plugins while preserving canonical media MIME inference, browser URL wildcard semantics, migration home-path resolution, QA request-limit responses, and extensionless text file previews.",
      "Agents/memory flush: persist the pre-increment compaction counter after flush-triggered compaction so consecutive eligible compaction cycles run memoryFlush instead of alternating. Fixes #12590. Refs #12760, #26145, and #46513. Thanks @Kaspre, @lailoo, @drvoss, @Br1an67, and @dial481.",
      "Status: treat CLI runtime aliases such as `claude-cli/<model>` as the canonical selected provider route in `/status`, avoiding spurious fallback/unknown-auth display and preserving fresh context usage from CLI usage snapshots. Fixes #79015. Thanks @ItsThierry.",
      "Agents/subagents: stop the `sessions_spawn` accepted note from recommending `sessions_yield` as the default wait path in push-based chat and CLI flows. Fixes #78913. Thanks @oiGaDio.",
      "Compute plugin callback authorization dynamically [AI]. (#78866) Thanks @pgondhi987.",
      "Telegram: deduplicate media attachments in non-streaming mode so block-delivered images are not resent in the final reply, and clear legacy `mediaUrl` fallback when all media URLs are filtered. Fixes #78372.",
      "Gateway/auth: allow `gateway.auth.mode: \"none\"` loopback backend RPC clients to skip device identity only for local non-browser backend connections, restoring subagent spawns and gateway tools without opening remote or browser-origin bypasses. Fixes #75780. Thanks @yozakura-ava.",
      "Canvas plugin: keep legacy root `canvasHost` configs valid until `openclaw doctor --fix` migrates them into `plugins.entries.canvas.config.host`, move Canvas/A2UI clients to gateway protocol v4 plugin surfaces, and refresh the generated A2UI bundle hash so normal builds stay clean.",
      "feishu: honor config write policy for dynamic agents [AI]. (#78520) Thanks @pgondhi987.",
      "fix(skill-workshop): honor pending approval for tool suggestions [AI]. (#78516) Thanks @pgondhi987.",
      "BytePlus: mark Kimi K2.5 and Kimi K2 Thinking catalog entries as reasoning-capable, raise their output cap to 32k tokens, and fill Kimi cache-read pricing. Fixes #54149.",
      "Control UI/chat: wait for an in-flight model dropdown patch before sending the next chat message, so immediate sends use the selected session model instead of racing the previous override. Fixes #54240.",
      "Native chat: decode gateway-provided thinking metadata for the iOS/macOS picker so provider-specific levels such as `adaptive`, `xhigh`, and `max` appear without leaking unsupported default-model options. Thanks @BunsDev.",
      "Agents/compaction: cap summarization output reserve tokens to the selected model's `maxTokens` so 1M-context Anthropic compactions do not request more output than the API permits. Fixes #54383.",
      "Control UI/login: replace raw connection failures with structured, actionable login guidance for auth, pairing, insecure HTTP, origin, protocol, and transport failures. Thanks @BunsDev.",
      "Agents/tools: fail `exec host=node` before `system.run` when the selected node is known to be disconnected, with an actionable reconnect message instead of a raw node invoke failure. Thanks @BunsDev.",
      "Agents/models: accept legacy `anthropic-cli/*` model refs as Claude CLI runtime refs instead of failing model resolution with `Unknown model`. Thanks @BunsDev.",
      "Agents/tools: keep restrictive-profile tool-section warnings scoped to the configured sections whose tools are still missing from `alsoAllow`, so already re-allowed filesystem tools do not make exec-only fixes look broader than they are. Thanks @BunsDev.",
      "Agents/tools: avoid warning messaging-only agents about inherited global `tools.exec` or `tools.fs` sections when the agent profile did not configure those tool sections itself. Thanks @BunsDev.",
      "Codex dynamic tools: normalize runtime `toolsAllow` entries the same way as Pi tool policy, so aliases like `bash` and `apply-patch` still expose the intended OpenClaw tools. Thanks @BunsDev.",
      "Memory/dreaming: read OpenAI-style `output_text` assistant parts from narrative subagent transcripts, so light-phase Dream Diary entries are not dropped as empty. Thanks @BunsDev.",
      "OpenAI-compatible providers: honor `compat.supportsTools=false` by stripping tool payload fields before dispatch to chat-only endpoints. Fixes #74664.",
      "OpenAI-compatible providers: apply model-declared unsupported tool-schema keyword stripping to native OpenAI transport payloads and mark Fireworks Kimi K2.5 as rejecting `not` schemas. Fixes #75467.",
      "OpenAI-compatible gateway: sanitize images supplied through request content even when the prompt text contains no image file references, preventing oversized attachment payloads from bypassing the resize/drop pipeline. Fixes #59913.",
      "Auth profiles: normalize inline API keys and tokens loaded from `auth-profiles.json` so masked or rich-text credential artifacts fail as auth errors instead of crashing HTTP header construction. Fixes #77624.",
      "llm-task: resolve configured model aliases before embedded dispatch so `model=\"gemini-flash\"` and other aliases route to the intended provider instead of the agent default. Fixes #54166.",
      "Media generation: resolve slash-containing model-only overrides like `fal-ai/flux/dev` through registered provider model metadata so FAL image/video models do not get misparsed as provider `fal-ai`. Fixes #77444.",
      "CLI backends: keep versioned OAuth identity matches reusable when auth profile ids rotate, so Claude CLI sessions do not reset and lose continuity during same-account OAuth refresh/profile alias changes. Fixes #78541.",
      "Amazon Bedrock: refresh shared AWS profile/config file credentials before Bedrock model, discovery, and embedding requests so long-running Gateway processes pick up renewed profile credentials without restart. Fixes #77551.",
      "Amazon Bedrock: treat named `aws-sdk` auth profiles as config routing metadata instead of stored credentials, and let `doctor --fix` move legacy markers out of `auth-profiles.json`. Fixes #69708.",
      "Anthropic: reject uppercase provider-prefixed forward-compat model ids locally instead of sending malformed dynamic ids upstream. Fixes #73715.",
      "OpenAI/embeddings: pass configured output dimensionality through single and batched embedding requests so memory embedding indexes can request smaller vectors. Fixes #55126.",
      "CLI/infer: normalize HEIC/HEIF image files to JPEG before model-run requests, avoiding providers that reject Apple image container formats. Fixes #50081.",
      "CLI/infer: fall back to macOS `sips` when optional image tooling cannot decode HEIC/HEIF input files before model-run requests. Refs #50081.",
      "OpenRouter: keep the default `openrouter/auto` model ref canonical while preventing TUI and Control UI catalog pickers from displaying or submitting `openrouter/openrouter/auto`. Fixes #62655.",
      "Status/Claude CLI: show `oauth (claude-cli)` for working Claude CLI OAuth runtime sessions instead of `unknown` when no local auth profile exists. Fixes #78632. Thanks @gorkem2020.",
      "Memory search: preserve keyword-only hybrid FTS matches when vector scoring is unavailable or below the configured minimum score, so exact lexical hits are not dropped by weighted min-score filtering.",
      "Exec approvals/node: let trusted backend node invokes complete no-device Control UI approvals after the original request connection changes, while keeping node, command, cwd, env, and allow-once replay bindings enforced. Fixes #78569. Thanks @naturedogdog.",
      "Agents/subagents: keep background completion delivery on the requester-agent handoff/queue-retry path instead of raw-sending child results directly, and strip child-result wrapper or OpenClaw runtime-context scaffolding from queued outbound retries. Fixes #78531. Thanks @EthanSK.",
      "Sandbox: recreate cached browser bridges when JavaScript-evaluation permission changes, keep failed prune removals tracked for retry, and make cross-device directory moves copy-then-commit without partially emptying the source on failure.",
      "CLI/completion: guard the shell-profile source line written by `openclaw completion --install` with a file existence check (`[ -f ... ] && source ...` for bash/zsh, `test -f ...; and source ...` for fish) so uninstalling OpenClaw no longer makes new login shells error on a missing completion cache. (#78659) Thanks @sjf.",
      "Telegram: fail private-topic sends instead of retrying them as plain DMs when Telegram rejects the topic id, keeping private-topic `message_thread_id` routing intact. Fixes #79455. (#78575) Thanks @tmimmanuel.",
      "Discord/groups: instruct group-chat agents to stay silent when a message is addressed to someone else, replying only when invited or correcting key facts. (#78615)",
      "Discord/groups: tell Discord-channel agents to wrap bare URLs as `<https://example.com>` so link previews do not expand into uninvited embeds. (#78614)",
      "Agents/fallback: fail fast on session write-lock timeouts instead of trying fallback models for local file contention. Fixes #66646. Thanks @sallyom.",
      "Browser/SSRF: stop closing user-owned Chrome tabs when a read-only operation (snapshot/screenshot/interactions) is rejected by the SSRF guard — only OpenClaw-initiated navigations now close on policy denial. Thanks @scotthuang.",
      "Agents/Gateway: throttle and cap live exec command-output events so noisy tool runs cannot flood Gateway WebSocket clients or starve RPC handling. (#78645) Thanks @joshavant.",
      "Memory Wiki: skip empty and whitespace-only source pages when refreshing generated Related blocks, preventing blank pages from being rewritten into Related-only stubs. Fixes #78121. Thanks @amknight.",
      "Telegram: keep duplicate message-tool-only Codex turns from posting generic silent-reply fallback text, so private finals stay private after inbound dedupe. Thanks @rubencu.",
      "Telegram/sessions: gap-fill delivered embedded final replies into the session JSONL even when the runner trace is missing, so Telegram answers after tool calls do not vanish from the durable transcript. Fixes #77814. (#78426) Thanks @obviyus, @ChushulSuri, and @DougButdorf.",
      "Cron/heartbeat: let restricted cron-triggered runs read their own status and current-job list metadata again, preventing heartbeat STATUS freshness checks from going stale while preserving self-remove-only mutation limits. Fixes #78208. Thanks @amknight.",
      "Channels/cron: ignore stale runtime conversation bindings that point at completed isolated cron run sessions, so follow-up DMs fall back to their normal route instead of reusing a closed cron task prompt. Fixes #78074. Thanks @amknight.",
      "ACP: preserve streamed chunk boundaries in background-task progress summaries so CJK text, paths, URLs, and identifiers are no longer split with synthetic spaces. Fixes #78312. Thanks @amknight.",
      "Agents/DeepSeek: suppress provider-private DSML transport syntax (tool-use-error, tool-call, function-call shadow blocks) so it never leaks into assistant-visible text; native `delta.tool_calls` remains the only authoritative tool-call source. (#78331) Thanks @samzong.",
      "Agents/subagents: preserve the delegated task prompt when a spawned target agent uses `systemPromptOverride`, so `sessions_spawn(mode: \"run\")` child runs still see their assigned task. Fixes #77950. Thanks @amknight.",
      "Node/Windows: fall back to the Startup-folder launcher when Spanish-localized `schtasks` reports `Acceso denegado`, matching the existing access-denied fallback path. Fixes #77993. Thanks @jackonedev.",
      "Agents/compaction: treat visible custom-message, bash, and branch-summary entries as real conversation anchors so safeguard mode does not write empty fallback summaries for cron and split-turn sessions with substantive tool work. Fixes #78300. Thanks @amknight.",
      "Network/runtime: avoid importing Undici's package dispatcher during no-proxy timeout bootstrap so external channel plugin fetch requests with explicit Content-Length keep working. Fixes #78007. Thanks @shakkernerd.",
      "Status/doctor: treat a single healthy OpenClaw Gateway listener on loopback, LAN, or wildcard bind as the expected configured gateway instead of warning that the port is already in use. Fixes #77939. Thanks @GitHoubi and @brokemac79.",
      "Agents/TTS: send media-bearing block replies directly when block streaming is off, so agent `tts` tool audio attached to a final text reply is delivered instead of being consumed before final Telegram/media delivery. Thanks @Conan-Scott.",
      "Gateway/performance: reuse the current compatible plugin metadata snapshot across hot read-only status, channel, auth, skills, and embedded agent settings paths, avoiding repeated synchronous plugin metadata scans during Gateway activity. Fixes #77983. Thanks @shakkernerd.",
      "Tasks/maintenance: prune stale cron run session registry entries while preserving running cron jobs and non-cron sessions. Fixes #73867. Thanks @brokemac79.",
      "Plugins: dispatch cached descriptor-backed tools by the resolved runtime tool name for unnamed factories, fixing multi-tool plugins whose shared manifest contracts exposed sibling tools but failed at execution. Fixes #78671. Thanks @zanni098.",
      "Plugins/update: repair plugin-local `openclaw` peer links for all recorded npm plugins after any npm update mutates the shared managed npm tree, so targeted or batch updates cannot leave Codex, Discord, or Brave with pruned SDK imports. (#77787) Thanks @ProspectOre.",
      "Codex harness: honor `models.providers.openai-codex.models[].contextTokens` for native `openai/*` Codex runtime runs and `/status` context reporting, so subscription-backed Codex agents use the configured OAuth context cap without inflating past the runtime model window. Fixes #77858. Thanks @lilesjtu.",
      "Sessions cleanup: add `openclaw sessions cleanup --fix-dm-scope` so operators who return `session.dmScope` to `main` can dry-run and retire stale direct-DM session rows while preserving transcripts as deleted archives. Fixes #47561 and #45554. Thanks @BunsDev.",
      "Doctor/Codex: repair legacy `openai-codex/*` routes and cron payload model refs to canonical `openai/*`, keep OpenAI agent turns on Codex by default, ignore stale whole-agent/session runtime pins, preserve explicit provider/model runtime policy, and migrate legacy runtime model refs to model-scoped runtime entries. Thanks @vincentkoc.",
      "Video generation: wait up to 20 minutes for slow fal/MiniMax queue-backed jobs, stop forwarding unsupported Google Veo generated-audio options, and normalize MiniMax `720P` requests to its supported `768P` resolution with the usual override warning/details instead of failing fallback.",
      "Channels/durable delivery: preserve channel-specific final reply semantics when using durable sends, including Telegram selected quotes and silent error replies plus WhatsApp message-sending cancellations.",
      "Channels/message lifecycle: build legacy channel delivery results from message receipts and add receipts to BlueBubbles, Feishu, Google Chat, iMessage, IRC, LINE, Nextcloud Talk, QQ Bot, Signal, Synology Chat, Tlon, Twitch, WhatsApp, Zalo, and Zalo Personal send results and owner-path reply delivery plus Discord, Matrix, Mattermost, Slack, and Teams send results while preserving existing message id compatibility.",
      "iMessage: run durable final replies through the iMessage outbound sanitizer before sending, matching direct auto-reply delivery and preventing assistant-internal scaffolding from leaking through queued delivery.",
      "CLI/plugins: handle closed stdin during `plugins uninstall` confirmation prompt and exit 1 with actionable `--force` guidance instead of crashing with Node exit 13 unsettled top-level await. Fixes #73562. (#73566) Thanks @ai-hpc.",
      "Control UI/Sessions: hide disk-discovered unregistered-agent sessions by default and fall back from restored unconfigured agent session keys before chat refresh, preventing deleted-agent stores from reopening the wrong workspace. Fixes #41685. Thanks @BunsDev.",
      "Slack: keep health-monitor recovery stops from poisoning manual-stop state after channel stop timeouts, allowing Socket Mode accounts to reconnect after event-loop stalls instead of staying dead until Gateway restart. Fixes #77651. Thanks @Gusty3055.",
      "Codex app-server: ignore account and rate-limit notifications when measuring active-turn liveness and suppress duplicate generic timeout replies after a visible messaging-tool delivery, so lost completion signals no longer keep Telegram/Discord turns active behind a delivered reply. (#79667) Thanks @joshavant.",
      "Control UI/Gateway: preserve verified trusted-proxy operator scopes for browser WebSocket sessions so nginx/Authelia deployments can load chat history, models, sessions, nodes, and logs instead of failing with missing operator.read. Fixes #78508. (#79643) Thanks @joshavant.",
      "Cloudflare AI Gateway: preserve boundary-aware Anthropic Messages transport when runtime auth creates a custom session stream, keeping the upstream x-api-key header intact for Gateway runs. (#79673) Thanks @joshavant.",
      "Webhooks/Gmail/Windows: resolve `gcloud`, `gog`, and `tailscale` PATH/PATHEXT shims before setup and watcher spawns, using the Windows-safe `.cmd` wrapper for long-lived `gog serve` processes. (#74881, fixes #54470) Thanks @Angfr95.",
      "Control UI/chat: suppress `HEARTBEAT_OK` acknowledgement history, streams, deltas, and final events before they enter the transcript view, so repeated heartbeat no-op turns do not stack noisy bubbles. Thanks @BunsDev.",
      "Agents/skills: require exact `<location>` skill paths for both single-skill and multi-skill prompt selection, so agents do not guess or hard-code skill file paths. (#74161) Thanks @lanzhi-lee.",
      "Agents/skills: rebuild sandboxed non-rw run skill prompts from the sandbox workspace copy, so `<available_skills>` no longer points at host-only `~/.openclaw/skills` paths. Fixes #50590. Thanks @kidroca and @sallyom.",
      "Agents/media: tell async music and video completion agents when normal final replies are private, and send completion fallbacks directly to message-tool-only group/channel routes when the completion agent still only writes a private final reply, so generated media does not disappear behind the delivery contract.",
      "CLI/update: report corrupt or unloadable managed plugins as post-update warnings instead of disabling them or turning a successful OpenClaw package update into a failed update result. Thanks @vincentkoc and @Patrick-Erichsen.",
      "Update/restart: probe managed Gateway restarts with the service environment and add a Docker product lane that exercises candidate-owned `openclaw update --yes --json` restarts, so SecretRef-backed local gateway auth cannot regress behind mocked restart checks. Thanks @vincentkoc.",
      "Gateway/sessions: cache selected model override resolution while building session-list rows so `openclaw sessions` and Control UI session lists stay responsive on model-heavy stores. (#77650) Thanks @ragesaq.",
      "Gateway/diagnostics: make stuck-session recovery outcome-driven and generation-guarded, add `diagnostics.stuckSessionAbortMs`, and emit structured recovery requested/completed events so stale or skipped recovery no longer looks like a successful abort.",
      "Messaging: queue assembled channel-turn final replies before sending to reduce response loss when the gateway restarts between assistant completion and channel delivery. Refs #77000.",
      "Agents/replay-history: drop trailing assistant turns whose content is empty or carries only the stream-error sentinel before sending the transcript to the provider, so prefill-strict providers (such as github-copilot/claude-opus-4.6) no longer reject the request with `400 The conversation must end with a user message` after a session whose last turn errored before producing content. Refs #77228. (#77287) Thanks @openperf.",
      "Agents/session-file-repair: drop `type: \"message\"` entries with a missing, `null`, or blank role during the on-disk repair pass so sessions that accumulated null-role JSONL corruption (such as the 935+ corrupt entries in #77228) get fully cleaned up rather than carried forward into the repaired file. Refs #77228. (#77288) Thanks @openperf.",
      "Doctor/device pairing: stop suggesting `openclaw devices rotate --role <role>` for stale local cached device auth when that role is no longer approved by the gateway pairing record, so doctor no longer points users at a command that must be denied. (#77688) Thanks @Conan-Scott.",
      "Ollama/thinking: expose the lightweight Ollama provider thinking profile through the public provider-policy artifact too, so reasoning-capable Ollama models such as `ollama/deepseek-v4-pro:cloud` keep `/think max` available even before the full plugin runtime activates. (#77617, fixes #77612) Thanks @rriggs and @yfge.",
      "Codex/app-server: stabilize transcript mirror dedupe across re-mirrored turns so reordered snapshots no longer drop reasoning entries or duplicate the assistant reply. Refs #77012. (#77046) Thanks @openperf.",
      "Agents/auth-profiles: do not record request-shape (`format`) rejections as auth-profile health failures, so a single per-session transcript-shape error (such as a prefill-strict 400 \"conversation must end with a user message\") no longer triggers a profile-wide cooldown that blocks every other healthy session sharing the same auth profile. Refs #77228. (#77280) Thanks @openperf.",
      "CLI/update: stop dev-channel source updates immediately when `git fetch` fails, so tag conflicts cannot keep preflight, rebase, or build steps running against stale refs while the Gateway is still on the old runtime. (#77845) Thanks @obviyus.",
      "Config/recovery: chmod restored `openclaw.json` back to owner-only (`0600`) after suspicious-read backup recovery on POSIX hosts, so a previously world-readable config mode cannot persist into a freshly restored credential-bearing config. (#77488) Thanks @drobison00.",
      "Memory/dreaming: persist last dreaming-ingestion calendar day per daily note in `daily-ingestion.json` so unchanged notes are still re-ingested once per dreaming day for promotion signals toward deep thresholds. Fixes #76225. (#76359) Thanks @neeravmakwana.",
      "Agents/embed: keep message_end safety delivery armed when a silent text_end chunk produces no block reply, fixing dropped Telegram/forum replies. Fixes #77833. (#77840) Thanks @neeravmakwana.",
      "Install/postinstall: skip noisy compile-cache prune warnings when `EACCES`/`EPERM` prevent removing shared `/tmp/node-compile-cache` entries owned by another user. Fixes #76353. (#76362) Thanks @RayWoo and @neeravmakwana.",
      "Agents/messaging: surface CLI subprocess watchdog/turn timeout messages to chat users when verbose failures are off, instead of collapsing them into generic external-run failure copy. Fixes #77007. (#77015) Thanks @neeravmakwana.",
      "Agents/sessions: after embedded Pi runs, append assistant-visible reply text to session JSONL only when Pi did not already persist an equivalent tail assistant entry, without re-mirroring the user prompt Pi owns. Fixes #77823. (#77839) Thanks @neeravmakwana.",
      "Plugins/CLI: load the install-records ledger when listing channel-catalog entries, so npm-installed third-party channel plugins resolve through `openclaw channels login`/`channels add` instead of failing with `Unsupported channel`. (#77269) Thanks @pumpkinxing1.",
      "Memory wiki/Security: enforce session visibility on shared-memory `wiki_search` and `wiki_get` so sandboxed subagents cannot read transcript content from sibling or parent sessions. Fixes GHSA-72fw-cqh5-f324. Thanks @zsxsoft.",
      "Exec approvals: enforce allowlist `argPattern` argument restrictions on Linux and macOS as well as Windows, so an entry like `{ pattern: \"python3\", argPattern: \"^safe\\.py$\" }` no longer silently relaxes to a path-only match on non-Windows hosts. (#75143) Thanks @eleqtrizit.",
      "Agents/compaction: disable Pi auto-compaction whenever OpenClaw effectively owns safeguard compaction, including provider-backed safeguard mode, so Pi and OpenClaw no longer fight over long-session compaction. Fixes #73003. (#73839) Thanks @bradhallett.",
      "Telegram/streaming: finalize text replies by stopping the edited stream message instead of sending a second answer bubble, so Telegram turns cannot duplicate the streamed final response. (#77947) Thanks @obviyus.",
      "web_search/Brave: fix provider selection when Brave is installed as an external plugin and `tools.web.search.provider: \"brave\"` is explicitly configured — a redundant provider re-resolution at startup could race and return an empty list, causing a spurious `WEB_SEARCH_PROVIDER_INVALID_AUTODETECT` warning and treating the explicitly configured provider as absent. Fixes #77676. Thanks @openperf.",
      "Doctor/plugins: discover doctor contracts from load-path channel plugins during `openclaw doctor --fix`, so plugin-owned legacy config repair runs before validation. (#77477) Thanks @jalehman.",
      "Dependencies: bump transitive `basic-ftp` to 5.3.1 so the runtime lockfile no longer includes the vulnerable 5.3.0 build flagged by the production dependency audit. (#78637) Thanks @sallyom.",
      "Hooks/cron: log returned `/hooks/agent` isolated-run errors and failed cron jobs with cron diagnostic summaries, so rejected `payload.model` values are visible instead of looking like accepted-but-missing runs. Fixes #78597. (#78655) Thanks @kevinslin.",
      "Managed proxy/security: classify raw socket callsites and proxy runtime mutations in boundary checks so new direct egress or unmanaged proxy-state changes cannot land without explicit review. (#77126) Thanks @jesse-merhi.",
      "Channels/iMessage: surface the silent group-allowlist drop at default log level by emitting a one-time `warn` per account at monitor startup when `channels.imessage.groupPolicy: \"allowlist\"` is set without a `channels.imessage.groups` block, plus a one-time `warn` per `chat_id` when the runtime gate drops a specific group, naming the exact `channels.imessage.groups[...]` key to add to allow it. Fixes #78749. (#79190) Thanks @omarshahine.",
      "WhatsApp: stop Gateway-originated outbound echoes from advancing inbound activity in `openclaw channels status`, so outbound self-sends no longer look like handled inbound messages. Fixes #79056. (#79057) Thanks @ai-hpc and @bittoby.",
      "Gateway/nodes: preserve the live node registry session and invoke ownership when an older same-node WebSocket closes after reconnecting. (#78351) Thanks @samzong.",
      "Browser/downloads: route explicit and managed browser download output directories through `fs-safe` validation before staging final files, so symlinked output roots are rejected before writes. (#78780) Thanks @jesse-merhi.",
      "Agents/PI: skip the idle wait during aborted embedded-run cleanup, so stopped or timed-out runs clear pending tool state and release the session lock promptly. (#74919) Thanks @medns.",
      "Agents/current-time: split UTC into a separate `Reference UTC:` prompt line so local `Current time:` stays anchored to the user's timezone. (#42654) Thanks @chencheng-li.",
      "Agents/reasoning: keep embedded reasoning deltas raw for correct same-line streaming while preserving formatted Telegram, Feishu, Discord, and heartbeat delivery at the channel edge. (#78397) Thanks @medns.",
      "Agents/failover: rotate auth profiles before deferred cooldown marking on rate-limit failures, so file-lock contention cannot stall profile failover. Fixes #57281. (#57283) Thanks @jeremyknows.",
      "Gateway/sessions: when `session.dmScope: \"main\"` is configured, route a bare webchat `/new` against the agent's main session (`sessions.create` with `emitCommandHooks=true`) to an in-place reset instead of creating a parallel `dashboard:` child, matching `/new` behavior on Telegram/Discord. Fixes #77434. (#71170) Thanks @statxc.",
      "Scripts/UI/Windows: launch `.cmd` and `.bat` UI runners through the shared cmd.exe escaping path with shell mode disabled, avoiding Node.js v24 DEP0190 warnings while preserving argument boundaries. (#62910) Thanks @nandanadileep.",
      "Agents/CLI runner: disable supervisor stdout/stderr capture for prepared CLI runs while keeping bounded diagnostics and incremental JSONL output parsing, preventing long CLI output from being retained in memory. (#79617) Thanks @samzong.",
      "Telegram: treat a DM binding that carries the chat id in both `conversationId` and `parentConversationId` as a direct conversation instead of a topic, so reverse delivery for Telegram DMs is not misrouted through a topic-shaped target. (#79700) Thanks @TSHOGX."
    ]
  },
  {
    "version": "2026.5.7",
    "date": "2026.5.7",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202657",
    "features": [],
    "fixes": [
      "Release/plugin publishing: retry transient ClawHub CLI dependency install failures, keep preview-passing plugins publishable when one preview cell flakes, and verify every expected ClawHub package version after publish so maintenance releases are faster to recover and less likely to hide partial plugin publishes.",
      "OpenAI: support `openai/chat-latest` as an explicit direct API-key model override for trying the moving ChatGPT Instant API alias without changing the stable default model.",
      "Cron CLI: include computed `status` in `cron list --json` and `cron show --json` output so external tooling can read disabled/running/ok/error/skipped/idle state without reimplementing cron status derivation. (#78701) Thanks @aweiker.",
      "Channels CLI: make `openclaw channels list` channel-only, add `--all` for bundled and catalog channels, render installed/configured/enabled state, and move model auth/usage details to `openclaw models auth list`, `openclaw status`, and `openclaw models list`. (#78456) Thanks @sliverp.",
      "Native commands: honor owner enforcement for native command handlers. (#78864) Thanks @pgondhi987.",
      "Active Memory: require admin scope for global memory toggles. (#78863) Thanks @pgondhi987.",
      "Gateway/sessions: clear cached skills snapshots during `/new` and `sessions.reset` so long-lived channel sessions rebuild the visible skill list after skills change. (#78873) Thanks @Evizero.",
      "Auto-reply: gate inline skill tool dispatch through before-tool-call authorization hooks. (#78517) Thanks @pgondhi987.",
      "Tavily: resolve dedicated `tavily_search` and `tavily_extract` tool credentials from the active runtime config snapshot, so `exec` SecretRef-backed API keys do not reach the tools unresolved. (#78610) Thanks @VACInc.",
      "Plugins/install: use the same absolute POSIX npm lifecycle shell for managed plugin install, rollback, repair, and uninstall npm operations as staged package updates, preventing restricted PATH shells from breaking cleanup. Thanks @vincentkoc.",
      "Agents/context engine: invalidate cached assembled context views when source history shrinks or assembly fails, preventing stale pre-reset history from being reused. Fixes #77968. (#78163) Thanks @brokemac79 and @ChrisBot2026.",
      "Discord/message: parse provider-prefixed targets like `discord:channel:<id>` as channel sends instead of legacy Discord DM targets, so cross-channel agent `message(action=\"send\")` calls no longer misroute channel IDs into misleading `Unknown Channel` failures. Fixes #78572.",
      "Agents/compaction: clamp compaction summary reserve tokens to each model's output limit so high-context compaction no longer requests invalid `max_tokens` values. (#54392) Thanks @adzendo.",
      "Commands/BTW: show the `/btw` missing-question usage placeholder with brackets so outbound channel sanitization keeps it visible. Fixes #62877. Thanks @RajvardhanPatil07.",
      "Cron/doctor: repair persisted cron jobs whose `payload.model` was stored as `\"default\"`, `\"null\"`, blank, or JSON `null` by removing the bad override during `openclaw doctor --fix` while keeping cron runtime model validation strict. Fixes #78549. Thanks @bizzle12368239.",
      "Telegram: honor `accessGroup:*` sender allowlists for DMs, groups, native commands, and callback authorization before applying Telegram's numeric sender-ID checks. Fixes #78660. Thanks @manugc.",
      "Agent delivery: report `deliverySucceeded=false` when outbound delivery returns no adapter result, so claimed/empty delivery paths no longer masquerade as successful sends. Fixes #78532. Thanks @joeyfrasier.",
      "Cron/isolated runs: fail implicit announce delivery before model execution when `delivery.channel=last` has no previous route, so recurring jobs do not spend tokens before hitting a permanent delivery-target error. Fixes #78608. Thanks @sallyom.",
      "Gateway/sessions: persist a new generated transcript file when daily gateway-agent session rollover changes the session id, while preserving custom transcript paths. Fixes #78607. Thanks @nailujac, @zerone0x, and @sallyom.",
      "Doctor/Codex OAuth: preserve working `openai-codex/*` PI routes during `doctor --fix` and recover 2026.5.5-rewritten `openai/*` GPT-5 routes when only Codex OAuth auth is available, so update repair does not break subscription-auth setups. Fixes #78407. Thanks @shakkernerd.",
      "Telegram: keep the polling watchdog tied to `getUpdates` liveness so unrelated outbound Bot API calls cannot mask a wedged inbound poller. Fixes #78422. Thanks @ai-hpc.",
      "Agents/subagents: have completed session-mode subagent registry rows honor `agents.defaults.subagents.archiveAfterMinutes` instead of a hardcoded 5-minute TTL, so registry-backed surfaces keep one retention knob across spawn modes. (#78263) Thanks @arniesaha.",
      "Plugins/channel setup: forward `setChannelRuntime` from non-bundled external plugin setup entries so deferred external channel runtime initializers are installed before startup polling. Fixes #77779. (#77799) Thanks @openperf.",
      "Telegram: treat successful same-chat `message` tool outbound sends during an inbound Telegram turn as delivered when deciding whether to emit the rewritten silent reply fallback. (#78685) Thanks @neeravmakwana.",
      "Gateway/tasks: reconcile stale CLI run-context tasks whose live run context disappeared and bound channel hot-reload deferrals so stale task records cannot block Discord/Slack/Telegram reloads forever.",
      "Discord/voice: audit Discord voice-channel permissions in `channels capabilities` and `channels status --probe`, including auto-join targets, so missing Connect/Speak/Read Message History permissions show up before `/vc join`.",
      "Discord/voice: make voice capture less choppy by extending the default post-speech silence grace to 2.5s, add `voice.captureSilenceGraceMs` for noisy Discord sessions, and tighten the spoken-output prompt around live STT fragments. Thanks @vincentkoc.",
      "WhatsApp: route proactive phone-number sends through Baileys LID forward mappings when available, so LID-addressed contacts receive agent messages instead of creating sender-only ghost chats. Fixes #67378. (#74925) Thanks @edenfunf.",
      "WhatsApp: send captioned `MEDIA:` directive auto-replies once instead of emitting an empty media message before the captioned media reply. (#78770) Thanks @ai-hpc.",
      "Codex/approvals: in Codex approval modes, stop installing the pre-guardian native `PermissionRequest` hook by default so Codex's reviewer can approve safe commands before OpenClaw surfaces an approval, remember `allow-always` decisions for identical Codex native `PermissionRequest` payloads within the active session window, and make plugin approval requests validate/render their actual allowed decisions so Telegram and other native approval UIs cannot offer stale actions. Thanks @shakkernerd.",
      "Model providers: normalize APNG sniffed PNG uploads, preserve Gemini 3 tool-call thought-signature replay with fallback signatures, accept legacy `__env__:VAR` custom-provider keys, and repair snake_case tool-call transcript sanitization. Fixes #51881, #48915, #77566, and #42858.",
      "Telegram/models: parse provider ids containing dots in `/models` callback buttons so `hf.co` model lists render as inline keyboard buttons. Fixes #38745."
    ]
  },
  {
    "version": "2026.5.6",
    "date": "2026.5.6",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202656",
    "features": [],
    "fixes": [
      "Doctor/OpenAI config: keep the 2026.5.6 release branch clear of the legacy Codex route rewrite that could change OpenAI model config during `doctor --fix`, preserving existing OpenAI routes unless a supported repair path applies.",
      "Plugins/runtime fetch: drop third-party symbol metadata from plain request header dictionaries before passing them into native `fetch` or `Headers`, so SDK and guarded/proxy fetch paths do not reject otherwise valid plugin requests. Fixes #77846. Thanks @shakkernerd.",
      "Debug proxy: normalize captured fetch header dictionaries before replaying requests so symbol metadata from caller-owned header objects cannot make debug-proxy fetches fail.",
      "Web fetch: bound guarded dispatcher cleanup after request timeouts so timed-out fetches return tool errors instead of leaving Gateway tool lanes active. (#78439) Thanks @obviyus."
    ]
  },
  {
    "version": "2026.5.5",
    "date": "2026.5.5",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202655",
    "features": [],
    "fixes": [
      "Telegram/Codex: generate DM topic labels with Codex-compatible simple-completion requests so auto-created private topics can be renamed instead of staying `New Chat`.",
      "Doctor/Codex OAuth: preserve working `openai-codex/*` PI routes during `doctor --fix`, recover 2026.5.5-rewritten `openai/*` GPT-5 routes when only Codex OAuth auth is available, and warn without rewriting mixed Codex OAuth plus direct OpenAI PI routes, so update repair does not break subscription-auth setups. Fixes #78407. Thanks @shakkernerd.",
      "Plugins/runtime fetch: drop third-party symbol metadata from plain request header dictionaries before passing them into native `fetch` or `Headers`, so SDK and guarded/proxy fetch paths do not reject otherwise valid plugin requests. Fixes #77846. Thanks @shakkernerd.",
      "Web fetch: bound guarded dispatcher cleanup after request timeouts so timed-out fetches return tool errors instead of leaving Gateway tool lanes active. (#78439) Thanks @obviyus.",
      "Mattermost/setup: prompt for and persist the server base URL after the bot token in `openclaw setup --wizard`, instead of failing validation before `--http-url` is collected. Fixes #76670. Thanks @jacobtomlinson.",
      "Gate Slack startup user allowlist resolution [AI]. (#77898) Thanks @pgondhi987.",
      "OpenAI/Codex: suppress stale `openai-codex` GPT-5.1/5.2/5.3 model refs that ChatGPT/Codex OAuth accounts now reject, keeping model lists, config validation, and forward-compat resolution on current 5.4/5.5 routes. Fixes #67158. Thanks @drpau.",
      "CLI/update: keep pnpm package updates on the running custom global install root and pass pnpm's `--global-dir` so `openclaw update` does not create a second default-prefix install when `OPENCLAW_HOME` or the shell points at a custom OpenClaw directory. Fixes #78377. Thanks @amknight.",
      "Google Meet/Voice Call: wait longer before playing PIN-derived Twilio DTMF for Meet dial-in prompts and retire stale delegated phone sessions instead of reusing completed calls.",
      "PDF/Codex: include extraction-fallback instructions for `openai-codex/*` PDF tool requests so Codex Responses receives its required system prompt. Fixes #77872. Thanks @anyech.",
      "Gateway/startup: keep the Gateway running when a configured optional plugin-owned capability such as a web_search provider or channel points at a known installable plugin that is currently unavailable; startup now logs a config warning and leaves `openclaw doctor --fix` to install or enable the plugin. (#78642) Thanks @joshavant.",
      "Onboard/channels: recover externalized channel plugins from stale `channels.<id>` config by falling back to `ensureChannelSetupPluginInstalled` via the trusted catalog when the plugin is missing on disk, so leftover `appId`/token entries no longer dead-end onboard with \"<channel> plugin not available.\" (#78328) Thanks @sliverp.",
      "Codex/app-server: forward the OpenClaw workspace bootstrap block through Codex `developerInstructions` instead of `config.instructions`, so persona/style guidance reaches the behavior-shaping app-server lane. Fixes #77363. Thanks @lonexreb.",
      "MS Teams: route proactive channel sends with stored thread roots through the configured threaded reply path instead of forcing every CLI/message-tool send into a new top-level post. Fixes #78298. Thanks @amknight.",
      "CLI/infer: pass minimal instructions to local `openai-codex/*` model probes and surface provider error details when `infer model run` returns no text. Fixes #76464. Thanks @lilesjtu.",
      "Dependencies: override transitive `ip-address` to `10.2.0` so the runtime lockfile no longer includes the vulnerable `10.1.0` build flagged by Dependabot alert 109. Thanks @vincentkoc.",
      "Plugins/install: apply OpenClaw's npm security overrides inside managed external plugin npm roots so hoisted plugin dependencies inherit the host package hardening. Thanks @vincentkoc.",
      "Plugins/install: skip npm peer resolution in managed plugin roots so installing peer-based plugins such as Opik cannot pull a stale registry `openclaw` copy beside Codex/Discord/WhatsApp and trigger `ERESOLVE`. Thanks @vincentkoc.",
      "Plugins/uninstall: run managed npm cleanup even when a plugin package directory is already missing, preventing stale package manifests from reinstalling removed plugins on the next npm install.",
      "Feishu: hydrate missing native topic starter thread IDs before session routing so first turns and follow-ups stay in the same topic session. Fixes #78262. Thanks @joeyzenghuan.",
      "LINE: reject `dmPolicy: \"open\"` configs without wildcard `allowFrom` so webhook DMs fail validation instead of being acknowledged and silently blocked before inbound processing. Fixes #78316.",
      "Telegram/Codex: keep message-tool-only progress drafts visible and render native Codex tool progress once per tool instead of duplicating item/tool draft lines. Fixes #75641. (#77949)",
      "Providers/xAI: stop sending OpenAI-style reasoning effort controls to native Grok Responses models, so `xai/grok-4.3` no longer fails live Docker/Gateway runs with `Invalid reasoning effort`.",
      "Providers/xAI: clamp the bundled xAI thinking profile to `off` so live Gateway runs cannot send unsupported reasoning levels to native Grok Responses models.",
      "Matrix/approvals: retry approval delivery up to 3 times with a short backoff so transient Matrix send failures do not strand pending approval prompts. (#78179) Thanks @Patrick-Erichsen.",
      "Discord/gateway: measure heartbeat ACK timeouts from the actual heartbeat send, preventing late initial heartbeats from triggering false reconnect loops while the channel is still awaiting readiness. Fixes #77668. (#78087) Thanks @bryce-d-greybeard and @NikolaFC.",
      "Discord/guilds: route plain text control commands such as `/steer` through the normal authorization and mention gate instead of silently dropping them before an agent session can see them. Fixes #78080. Thanks @ramitrkar-hash.",
      "Control UI/Sessions: make the compaction count a compact `N Checkpoint(s)` disclosure and show expanded session-level details with modern checkpoint history cards across responsive table layouts. Thanks @BunsDev.",
      "Control UI/performance: keep chat and channel tabs responsive while history payloads and channel probes are slow, label partial channel status, and record slow chat/config render timings in the event log. Thanks @BunsDev.",
      "Control UI/sessions: fire the documented `/new` command and lifecycle hooks only for explicit Control UI session creation, restoring session-memory and custom hook capture without changing SDK parent-session creates. Fixes #76957. Thanks @BunsDev.",
      "Exec approvals: fall back to a guarded copy when Windows rejects rename-overwrite for `exec-approvals.json`, while preserving symlink, hard-link, and owner-only permission safeguards. Fixes #77785. (#77907) Thanks @Alex-Alaniz and @MilleniumGenAI.",
      "Slack: preserve Socket Mode SDK error context and structured Slack API fields in reconnect logs, so startup failures no longer collapse to a bare `unknown error`.",
      "iOS pairing: allow setup-code and manual `ws://` connects for private LAN and `.local` gateways while keeping Tailscale/public routes on `wss://`, and prefer explicit gateway passwords over stale bootstrap tokens in mixed-auth reconnects. Fixes #47887; carries forward #65185. Thanks @draix and @BunsDev.",
      "Plugins/diagnostics: make source-only TypeScript package warnings actionable by explaining that missing compiled runtime output is a publisher packaging issue and pointing users to update/reinstall or disable/uninstall the plugin. Fixes #77835. Thanks @googlerest.",
      "Control UI/chat: keep persisted assistant progress text visible when the same transcript turn also contains tool-use metadata, so chat.history reloads no longer make those replies vanish after the next user message. Fixes #77374. Thanks @BunsDev.",
      "Cron: repair persisted future `nextRunAtMs` values that no longer line up with the cron schedule, so daily timezone-aware jobs do not stay jumped to stale future dates. Fixes #77867. Thanks @hongfangsong.",
      "TUI: skip the generic CLI respawn wrapper for interactive launches, exit cleanly on terminal loss, and refuse to restore heartbeat sessions as the remembered chat session, preventing stale heartbeat history and orphaned `openclaw-tui` processes on first boot. Thanks @vincentkoc.",
      "Doctor/sessions: move heartbeat-poisoned default main session store entries to recovery keys and clear stale TUI restore pointers, so `doctor --fix` can repair instances already stuck on `agent:main:main` heartbeat history. Thanks @vincentkoc.",
      "Agents/context engines: keep hidden OpenClaw runtime-context custom messages out of context-engine assemble, afterTurn, and ingest hooks so transcript reconstruction plugins only see conversation messages. Thanks @vincentkoc.",
      "Gateway/shutdown: cancel delayed post-ready maintenance during close and suppress maintenance/cron startup after quick restarts, preventing orphaned background timers. Thanks @vincentkoc.",
      "Agents/generated media: treat attachment-style message tool actions as completed chat sends, preventing duplicate fallback media posts when generated files were already uploaded.",
      "Control UI/sessions: show each session's agent runtime in the Sessions table and allow filtering by runtime labels, matching the Agents panel runtime wording. Thanks @vincentkoc.",
      "Discord/streaming: show live reasoning text in progress drafts instead of a bare `Reasoning` status line.",
      "Gateway/status: avoid marking fast repeated health/status samples as event-loop degraded from CPU/utilization alone until the Gateway has accumulated a sustained sampling window. Thanks @shakkernerd.",
      "Plugins/update: keep installed official npm and ClawHub plugins such as Codex, Discord, WhatsApp, and diagnostics plugins synced during host updates even when disabled or previously exact-pinned, while preserving third-party plugin pins. Thanks @vincentkoc.",
      "Doctor/status: warn when `OPENCLAW_GATEWAY_TOKEN` would shadow a different active `gateway.auth.token` source for local CLI commands, while avoiding false positives when config points at the same env token. Fixes #74271. Thanks @yelog.",
      "Gateway/HTTP: avoid loading managed outgoing-image media handlers for unrelated requests, so disabled OpenAI-compatible routes return 404 without waiting on lazy media sidecars. Thanks @vincentkoc.",
      "Gateway/OpenAI-compatible: send the assistant role SSE chunk as soon as streaming chat-completion headers are accepted, so cold agent setup cannot leave `/v1/chat/completions` clients with a bodyless 200 response until their idle timeout fires.",
      "Agents/media: avoid direct generated-media completion fallback while the announce-agent run is still pending, so async video and music completions do not duplicate raw media messages. (#77754)",
      "WebChat/Codex media: stage Codex app-server generated local images into managed media before Gateway display, so Codex-home image paths no longer hit `LocalMediaAccessError` while keeping Codex home out of the display allowlist. Thanks @frankekn.",
      "TUI/sessions: bound the session picker to recent rows and use exact lookup-style refreshes for the active session, so dusty stores no longer make TUI hydrate weeks-old transcripts before becoming responsive. Thanks @vincentkoc.",
      "Doctor/gateway: report recent supervisor restart handoffs in `openclaw doctor --deep`, using the installed service environment when available so service-managed clean exits are visible in guided diagnostics. Thanks @shakkernerd.",
      "Gateway/status: show recent supervisor restart handoffs in `openclaw gateway status --deep`, including JSON details, so clean service-managed restarts are reported as restart handoffs instead of opaque stopped-service diagnostics. Thanks @shakkernerd.",
      "Providers/Fireworks: expose Kimi models as thinking-off-only and keep K2.5/K2.6 requests on `thinking: disabled`, so manual model switches do not send Fireworks-rejected `reasoning*` parameters. Refs #74289. Thanks @frankekn.",
      "WhatsApp responsiveness: stop only verified stale local TUI clients when they degrade the Gateway event loop and delay replies. Thanks @vincentkoc.",
      "Plugins/update: repair stale managed npm-root `openclaw` peer packages before plugin installs, so beta-channel official plugin updates are not downgraded by old core package-lock state. Thanks @vincentkoc.",
      "Plugins/install: reassert managed npm plugin `openclaw` peer links after shared-root npm installs, updates, and uninstalls, so mutating one plugin does not leave previously installed SDK-using plugins unable to resolve `openclaw/plugin-sdk/*`.",
      "Hooks/session-memory: add collision suffixes to fallback memory filenames so repeated `/new` or `/reset` captures in the same minute do not overwrite the earlier session archive. Thanks @vincentkoc.",
      "Agents/config: remove the ambiguous legacy `main` agent dir helper from runtime paths; model, auth, gateway, bundled plugin, and test helpers now resolve default/session agent dirs through `agents.list`/agent-scope helpers while plugin SDK keeps a deprecated compatibility export.",
      "CLI/status: show the selected agent runtime/harness in `openclaw status` session rows so terminal status matches the `/status` runtime line. Thanks @vincentkoc.",
      "CLI/sessions: prune old unreferenced transcript, compaction checkpoint, and trajectory artifacts during normal `sessions cleanup`, so gateway restart or crash orphans do not accumulate indefinitely outside `sessions.json`. Fixes #77608. Thanks @slideshow-dingo.",
      "Doctor/Codex: repair legacy `openai-codex/*` routes in primary models, fallbacks, heartbeat/subagent/compaction overrides, hooks, channel overrides, and stale session pins to canonical `openai/*`, selecting `agentRuntime.id: \"codex\"` only when the Codex plugin is installed, enabled, contributes the `codex` harness, and has usable OAuth; otherwise select `agentRuntime.id: \"pi\"`. Thanks @vincentkoc.",
      "Plugins/update: keep installed official npm and ClawHub plugins such as Codex, Discord, WhatsApp, and diagnostics plugins synced during host updates even when disabled or previously exact-pinned, while preserving third-party plugin pins. Thanks @vincentkoc.",
      "Video generation: accept provider-specific aspect-ratio and resolution hints at the tool boundary, normalize `720P` to MiniMax's supported `768P`, and stop sending Google `generateAudio` on Gemini video requests so provider fallback can recover from model-specific parameter differences. Thanks @vincentkoc.",
      "Status: show compact Gateway process uptime and host system uptime in `/status`, making restart and host-lifetime checks visible from chat. Thanks @vincentkoc.",
      "WhatsApp responsiveness: stop only verified stale local TUI clients when they degrade the Gateway event loop and delay replies. Thanks @vincentkoc.",
      "Hooks/session-memory: run reset memory capture off the command reply path and make model-generated memory filename slugs opt-in with `llmSlug: true`, so `/new` and `/reset` no longer block WhatsApp and other message-channel reset replies on hook housekeeping or a nested model call. Thanks @vincentkoc.",
      "CLI/gateway: pause non-TTY stdin after full CLI command completion and stop `openclaw agent` from falling back to embedded mode after gateway request/auth failures, so parent help commands exit cleanly and scoped delivery probes surface the real Gateway error immediately. Thanks @vincentkoc.",
      "Gateway/model catalog: cache empty read-only model catalog results until reload, so TUI and control-plane refresh loops cannot hammer plugin metadata reads when no usable models are currently discovered. Thanks @vincentkoc.",
      "Hooks/session-memory: add collision suffixes to fallback memory filenames so repeated `/new` or `/reset` captures in the same minute do not overwrite the earlier session archive. Thanks @vincentkoc.",
      "TUI/sessions: bound the session picker to recent rows and use exact lookup-style refreshes for the active session, so dusty stores no longer make TUI hydrate weeks-old transcripts before becoming responsive. Thanks @vincentkoc.",
      "Agents/context engines: keep hidden OpenClaw runtime-context custom messages out of context-engine assemble, afterTurn, and ingest hooks so transcript reconstruction plugins only see conversation messages. Thanks @vincentkoc.",
      "TUI: skip the generic CLI respawn wrapper for interactive launches, exit cleanly on terminal loss, and refuse to restore heartbeat sessions as the remembered chat session, preventing stale heartbeat history and orphaned `openclaw-tui` processes on first boot. Thanks @vincentkoc.",
      "Doctor/sessions: move heartbeat-poisoned default main session store entries to recovery keys and clear stale TUI restore pointers, so `doctor --fix` can repair instances already stuck on `agent:main:main` heartbeat history. Thanks @vincentkoc.",
      "Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf.",
      "CLI/update: make dev-channel preflight lint opt-in and constrained when enabled, so `openclaw update --channel dev` no longer walks back otherwise-good main commits when Ubuntu hosts OOM-kill or fail parallel oxlint shards. Thanks @vincentkoc.",
      "CLI/channels: skip config, proxy, channel-option catalog, banner-config, and plugin startup bootstrap for the bare `openclaw channels` parent-help command, so it exits promptly after printing help instead of loading configured channel plugins. Thanks @vincentkoc.",
      "Gateway/shutdown: cancel delayed post-ready maintenance during close and suppress maintenance/cron startup after quick restarts, preventing orphaned background timers. Thanks @vincentkoc.",
      "CLI/status: show the selected agent runtime/harness in `openclaw status` session rows so terminal status matches the `/status` runtime line. Thanks @vincentkoc.",
      "Sessions CLI: show the selected agent runtime in the `openclaw sessions` table so terminal output matches the runtime visibility already present in JSON/status surfaces. Thanks @vincentkoc.",
      "Control UI/sessions: show each session's agent runtime in the Sessions table and allow filtering by runtime labels, matching the Agents panel runtime wording. Thanks @vincentkoc.",
      "Docker/Gateway: harden the gateway container by dropping `NET_RAW` and `NET_ADMIN` capabilities and enabling `no-new-privileges` in the bundled `docker-compose.yml`. Thanks @VintageAyu.",
      "OpenAI/Gateway: flush the initial chat stream chunk correctly so first-token streaming is visible instead of being delayed behind later chunks.",
      "Gateway/media: skip media sidecar handling for unrelated HTTP routes so non-media requests do not pay the media route behavior.",
      "Discord: show reasoning text in progress drafts so streaming replies expose useful thinking/progress instead of blank draft updates.",
      "Auth profiles: avoid putting providers on cooldown for format-level rejections, so fallback profiles can still be tried when a model name is unsupported.",
      "Update/plugins: tolerate corrupt managed plugin records during update so core package updates can still complete and report the plugin repair path.",
      "Update: stop dev-channel updates cleanly after a fetch failure instead of continuing into later update steps.",
      "Agents/generated media: treat attachment-style message tool actions as completed chat sends, preventing duplicate fallback media posts when generated files were already uploaded."
    ]
  },
  {
    "version": "2026.5.4",
    "date": "2026.5.4",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654",
    "features": [
      {
        "title": "Google Meet/Voice Call",
        "description": "make Twilio dial-in joins speak through the realtime Gemini voice bridge with paced audio streaming, backpressure-aware buffering, barge-in queue clearing, and no TwiML fallback during realtime speech, giving Meet participants a much snappier OpenClaw voice agent. (#77064) Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/pull/77064"
      },
      {
        "title": "Gateway/Windows",
        "description": "bind the default loopback gateway listener only to `127.0.0.1` on Windows so libuv's dual-stack `::1` behavior cannot wedge localhost HTTP requests. (#69701, fixes #69674) Thanks @SARAMALI15792.",
        "href": "https://github.com/openclaw/openclaw/issues/69674"
      },
      {
        "title": "Plugins/migration",
        "description": "emit catalog-backed install hints when `plugins.entries` or `plugins.allow` references an official external plugin that is not installed, so upgraded configs point operators to `openclaw plugins install <spec>` instead of telling them to remove valid plugin config. (#77483) Thanks @hclsys.",
        "href": "https://github.com/openclaw/openclaw/pull/77483"
      },
      {
        "title": "OpenAI/Codex media",
        "description": "advertise Codex audio transcription in runtime and manifest metadata and route active Codex chat models to the OpenAI transcription default instead of sending chat model ids to audio transcription. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Dependencies",
        "description": "refresh runtime and provider packages including Pi 0.73.0, ACPX adapters, OpenAI, Anthropic, Slack, and TypeScript native preview, while keeping the Bedrock runtime installer override pinned below the Windows ARM Node 24 npm resolver failure.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Agents/performance",
        "description": "pass the resolved workspace through BTW, compaction, embedded-run model generation, and PDF model setup so explicit agent-dir model refreshes can reuse the current workspace-scoped plugin metadata snapshot instead of falling back to cold plugin metadata scans. (#77519, #77532)",
        "href": "https://github.com/openclaw/openclaw/issues/77519"
      },
      {
        "title": "Plugins/performance",
        "description": "let unscoped model catalog and manifest-contract readers reuse the current workspace-compatible plugin metadata snapshot, avoiding repeated cold plugin metadata scans on hot control-plane paths while preserving env/config/workspace compatibility checks. (#77519, #77532)",
        "href": "https://github.com/openclaw/openclaw/issues/77519"
      },
      {
        "title": "Config/plugin auto-enable",
        "description": "prefer the claiming plugin manifest id over a built-in channel alias when auto-allowlisting a configured channel, so WeCom/Yuanbao-style aliases resolve to the installed plugin id. Thanks @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Secrets/apply",
        "description": "preserve auth-profile `keyRef` and `tokenRef` fields when scrubbing provider-target secrets, so the canonical SecretRef metadata survives `secrets apply` without keeping plaintext values. Thanks @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/active-memory",
        "description": "skip session-store channel entries that contain `:` when resolving the recall subagent's channel, so QQ c2c agent IDs (e.g. `c2c:10D4F7C2…`) and other scoped conversation IDs do not reach bundled-plugin `dirName` validation and crash the recall run. The same guard already applied to explicit `channelId` params (#76704); this extends it to store-derived channels. (#77396) Thanks @hclsys.",
        "href": "https://github.com/openclaw/openclaw/pull/76704"
      },
      {
        "title": "Secrets/external channel contracts",
        "description": "also look in `<rootDir>/dist/` when resolving the `secret-contract-api` sidecar, so npm-published externalized channel plugins (e.g. `@openclaw/discord` since 2026.5.2) whose compiled artifacts live under `dist/` actually contribute their channel SecretRef contracts to the runtime snapshot. Without this, env-backed `channels.discord.token` SecretRefs silently failed to resolve at gateway start on 2026.5.3, leaving the channel `not configured` even though #76449 had landed the generic external-contract loader. Thanks @mogglemoss.",
        "href": "https://github.com/openclaw/openclaw/issues/76449"
      },
      {
        "title": "Models/auth",
        "description": "add `openclaw models auth list [--provider <id>] [--json]` so users can inspect saved per-agent auth profiles without dumping secrets or hitting the old “too many arguments” path. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Control UI/header",
        "description": "show the active agent name in dashboard breadcrumbs without adding the current session key, keeping non-chat views oriented without crowding the topbar.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Control UI/cron",
        "description": "make the New Job sidebar collapsible so the jobs list can reclaim space while keeping the form one click away. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Gateway/startup",
        "description": "keep model-catalog test helpers, run-session lookup code, QR pairing helpers, and TypeBox memory-tool schema construction out of hot startup import paths, reducing default gateway benchmark plugin-load and memory pressure.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Control UI/performance",
        "description": "record browser long animation frame or long task entries in the debug event log when supported, making slow dashboard renders easier to attribute from the UI.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Slack/streaming",
        "description": "add `streaming.progress.render: \"rich\"` for Block Kit progress drafts backed by structured progress line data.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Slack/streaming",
        "description": "keep the newest rich progress lines when Block Kit limits trim long progress drafts. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Channels/streaming",
        "description": "cap progress-draft tool lines by default so edited progress boxes avoid jumpy reflow from long wrapped lines.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Agents/verbose",
        "description": "use compact explain-mode tool summaries for `/verbose` and progress drafts by default, with `agents.defaults.toolProgressDetail: \"raw\"` and per-agent overrides for debugging raw command/detail output.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Control UI/chat",
        "description": "add an agent-first filter to the chat session picker, keep chat controls/composer responsive across phone/tablet/desktop widths, keep desktop chat controls on one row, avoid duplicate avatar refreshes during initial chat load, and hide that row while scrolling down the transcript. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Control UI/chat",
        "description": "collapse consecutive duplicate text messages into one bubble with a count so no-op heartbeat acknowledgements stay compact without hiding nearby context.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Agents/subagents",
        "description": "preserve every grouped child result when direct completion fallback has to bypass the requester-agent announce turn. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "TTS/telephony",
        "description": "honor provider voice/model overrides in telephony synthesis providers so Google Meet agent speech logs match the backend that actually produced the audio. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Voice Call/realtime",
        "description": "bound the paced Twilio audio queue and close overloaded realtime streams before provider audio can pile up behind the websocket backpressure guard. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Docs",
        "description": "clarify that IRC uses raw TCP/TLS sockets outside operator-managed forward proxy routing, so direct IRC egress should be explicitly approved before enabling IRC. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Gateway/performance",
        "description": "defer non-readiness sidecars until after the ready signal, avoid hot-path channel plugin barrel imports, and fast-path trusted bundled plugin metadata during Gateway startup.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Gateway/performance",
        "description": "avoid importing `jiti` on native-loadable plugin startup paths, so compiled bundled plugin surfaces do not pay source-transform loader cost unless fallback loading is actually needed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "add startup phase spans, active work labels, stale terminal bridge markers, and default sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/loader",
        "description": "preserve real compiled plugin module evaluation errors on the native fast path instead of treating every thrown `.js` module as a source-transform fallback miss. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "QA/Mantis",
        "description": "add `pnpm openclaw qa mantis slack-desktop-smoke` to run Slack live QA inside a Crabbox VNC desktop, open Slack Web, and capture desktop screenshots beside the Slack QA artifacts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "QA/Mantis",
        "description": "pass the runtime env through desktop-browser Crabbox and artifact-copy child commands, so embedded Mantis callers can provide Crabbox credentials without mutating the parent process. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "QA/Mantis",
        "description": "return the copied Slack desktop screenshot path even when remote Slack QA fails, so the CLI still prints the failure screenshot artifact. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "QA/Mantis",
        "description": "accept Blacksmith Testbox `tbx_...` lease ids from desktop smoke warmup, so provider overrides do not fail before inspect/run. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "QA/Codex harness",
        "description": "add targeted live Docker/Testbox diagnostics, auth preflight checks, cache mount fixes, and app-server protocol checkout discovery so maintainer harness failures are easier to reproduce. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/update",
        "description": "treat official externalized bundled npm migrations and ClawHub-to-npm fallbacks as trusted source-linked installs, so prerelease-only official plugin packages can migrate from bundled builds without being rejected as unsafe prerelease resolutions. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/update",
        "description": "move ClawHub-preferred externalized plugin installs back to ClawHub after an earlier npm fallback once the ClawHub package becomes available. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/update",
        "description": "clean stale bundled load paths for already-externalized pinned npm and ClawHub plugin installs, so release-channel sync does not leave removed bundled paths ahead of the installed external package. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Telegram",
        "description": "accept plugin-owned numeric forum-topic targets in the agent message tool and keep reply-dispatch provider chunks behind a real stable runtime alias during in-place package updates. Fixes #77137. Thanks @richardmqq.",
        "href": "https://github.com/openclaw/openclaw/issues/77137"
      },
      {
        "title": "Google Meet",
        "description": "preserve `realtime.introMessage: \"\"` so realtime Chrome joins can stay silent instead of restoring the default spoken intro. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/SDK",
        "description": "add bounded `before_agent_finalize` retry instructions so workflow plugins can request one more model pass. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Discord/status",
        "description": "add degraded Discord transport and gateway event-loop starvation signals to `openclaw channels status`, `openclaw status --deep`, and fetch-timeout logs so intermittent socket resets do not look like a healthy running channel. (#76327) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/76327"
      },
      {
        "title": "Providers/OpenRouter",
        "description": "add opt-in response caching params that send OpenRouter's `X-OpenRouter-Cache`, `X-OpenRouter-Cache-TTL`, and cache-clear headers only on verified OpenRouter routes. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Providers/OpenRouter",
        "description": "expand app-attribution categories so OpenClaw advertises coding, programming, writing, chat, and personal-agent usage on verified OpenRouter routes. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/update",
        "description": "make package upgrades swap pnpm/npm-prefix installs cleanly, keep legacy plugin install runtime chunks working, and on the beta channel fall back default-line npm plugins to default/latest when plugin beta releases are missing or fail install validation. Thanks @vincentkoc and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Channels/WhatsApp",
        "description": "support explicit WhatsApp Channel/Newsletter `@newsletter` outbound message targets with channel session metadata instead of DM routing. Fixes #13417; carries forward the narrow outbound target idea from #13424. Thanks @vincentkoc and @agentz-manfred.",
        "href": "https://github.com/openclaw/openclaw/issues/13417"
      },
      {
        "title": "Exec approvals",
        "description": "add a tree-sitter-backed shell command explainer for future approval and command-review surfaces. (#75004) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/75004"
      },
      {
        "title": "Agents/sandbox",
        "description": "store sandbox container and browser registry entries as per-runtime shard files, reducing unrelated session lock contention while `openclaw doctor --fix` migrates legacy monolithic registry files. (#74831) Thanks @luckylhb90.",
        "href": "https://github.com/openclaw/openclaw/pull/74831"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "annotate 429 errors from ClawHub with the reset window from `RateLimit-Reset`/`Retry-After` and append a `Sign in for higher rate limits.` hint when the request was unauthenticated, so users can see when downloads will recover and how to lift the cap. Thanks @romneyda.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugins/runtime state",
        "description": "add `registerIfAbsent` for atomic keyed-store dedupe claims that return whether a plugin successfully claimed a key without overwriting an existing live value. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202654"
      },
      {
        "title": "Plugin SDK",
        "description": "add plugin-owned `SessionEntry` slot projection and scoped trusted-policy session extension reads. (#75609; replaces part of #73384/#74483) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/75609"
      },
      {
        "title": "Sandbox/Windows",
        "description": "accept drive-absolute Docker bind sources while keeping sandbox blocked-path and allowed-root policy comparisons Windows-case-insensitive. (#42174) Thanks @6607changchun.",
        "href": "https://github.com/openclaw/openclaw/pull/42174"
      }
    ],
    "fixes": [
      "macOS/launchd: set generated Gateway LaunchAgent plists to `ProcessType=Interactive` so the gateway keeps timely execution during idle periods. Fixes #58061; refs #62294 and closed duplicate #66992. (#62308) Thanks @bryanpearson and @zssggle-rgb.",
      "Plugins/install: honor the beta update channel for onboarding and doctor-managed plugin installs by requesting floating npm and ClawHub specs with `@beta` while keeping persistent install records on the catalog default. Thanks @vincentkoc.",
      "WhatsApp/onboarding: canonicalize setup and pairing allowlist entries to WhatsApp's digit-only phone ids while still accepting E.164, JID, and `whatsapp:` inputs, so personal-phone allowlists match WhatsApp Web sender ids after setup. Thanks @vincentkoc.",
      "Gateway/startup: load provider plugins that own explicitly configured image, video, or music generation defaults so generation tools become live after gateway restart instead of remaining catalog-only. Fixes #77244. Thanks @buyuangtampan, @Nikoxx99, and @vincentkoc.",
      "Slack/subagents: keep resumed parent `message.send` calls in the originating Slack thread when ambient session thread context is present, and suppress successful silent child completion rows from follow-up findings. Thanks @bek91.",
      "Slack/mentions: record thread participation for successful visible threaded Slack sends, including message-tool and media delivery paths, so unmentioned replies in bot-participated threads can bypass mention gating as documented. Fixes #77648. Thanks @bek91.",
      "Infra/Windows: skip the POSIX `/tmp/openclaw` preferred path on Windows in `resolvePreferredOpenClawTmpDir` so log files, TTS temp files, and other writes land in `%TEMP%\\openclaw-<uid>` instead of `C:\\tmp\\openclaw`. Fixes #60713. Thanks @juan-flores077.",
      "Media/Windows: open saved attachment temp files read/write before fsync so Windows WebChat and `chat.send` media offloads no longer fail with EPERM during durability flush. (#76593) Thanks @qq230849622-a11y.",
      "Agents/tools: honor narrow runtime tool allowlists when constructing embedded-runner tool families and bundled MCP/LSP runtimes, so cron/subagent runs that request tools such as `update_plan`, `browser`, `x_search`, channel login tools, or `group:plugins` no longer start with missing tools or unrelated bootstrap work. (#77519, #77532)",
      "Codex plugin: mirror the experimental upstream app-server protocol and format generated TypeScript before drift checks, keeping OpenClaw's `experimentalApi` bridge compatible with latest Codex while preserving formatter gates.",
      "Telegram/media: derive no-caption inbound media placeholders from saved MIME metadata instead of the Telegram `photo` shape, so non-image and mixed attachments no longer reach the model as `<media:image>`. Fixes #69793. Thanks @aspalagin.",
      "Telegram/streaming: reuse the active preview as the first chunk for long text finals, so multi-chunk replies no longer create a transient extra bubble that appears and then disappears. Thanks @vincentkoc.",
      "Agents/cache: keep per-turn runtime context out of ordinary chat system prompts while still delivering hidden current-turn context, restoring prompt-cache reuse on chat continuations. Fixes #77431. Thanks @Udjin79.",
      "Gateway/startup: include resolved thinking and fast-mode defaults in the `agent model` startup log line, defaulting unset startup thinking to `medium` without mixing in reasoning visibility.",
      "Gateway/update: resolve local gateway probe auth from the installed config during post-update restart verification, so token/device-authenticated VPS gateways are not misreported as unhealthy port conflicts after a package swap. Thanks @vincentkoc.",
      "Agents/Tools: add post-compaction loop guard in `pi-embedded-runner` that arms after auto-compaction-retry and aborts the run with `compaction_loop_persisted` when the agent emits the same `(tool, args, result)` triple `windowSize` times (default 3) within that window. Disable via existing `tools.loopDetection.enabled`; tune via `tools.loopDetection.postCompactionGuard.windowSize`. Targets the failure mode where context-overflow + compaction does not break a tool-call loop. Refs #77474; carries forward #21597. Thanks @efpiva.",
      "Gateway/watch: suppress sync-I/O trace output during `pnpm gateway:watch --benchmark` unless explicitly requested, so CPU profiling no longer floods the terminal with stack traces.",
      "Gateway/watch: when benchmark sync-I/O tracing is explicitly enabled, tee trace blocks to the benchmark output log and filter them from the terminal pane while keeping normal Gateway logs visible.",
      "Plugins/runtime-deps: include `json5` in the memory-core plugin runtime dependency set so packaged `memory_search` sandboxes can resolve generated OpenClaw runtime chunks that parse JSON5 config. Fixes #77461.",
      "Plugins/Windows: show a Git install hint when npm plugin installation fails with `spawn git ENOENT`, and document the WhatsApp plugin's Git-on-PATH requirement for Baileys/libsignal installs.",
      "Codex harness: preserve app-server usage-limit reset details and deliver OpenClaw-owned runtime failure notices through tool-only source-reply mode, so Telegram and other chat channels tell users when Codex subscription limits or API failures block a turn instead of going silent. (#77557) Thanks @pashpashpash.",
      "Agents/OpenAI: default direct OpenAI Responses models to the SSE transport instead of WebSocket auto-selection, preventing pi runtime chat turns from hanging on servers where the WebSocket path stalls while the OpenAI HTTP stream works. Thanks @vincentkoc.",
      "Plugins/update: repair missing plugin-local `openclaw` peer links before skipping unchanged npm plugin updates, so current external Codex installs can recover `openclaw/plugin-sdk/*` resolution during OTA repair. (#77544) Thanks @ProspectOre.",
      "Discord/replies: treat failed final reply delivery as a failed turn instead of counting it as a delivered automatic visible reply, so guild/channel turns no longer show done when the final message was dropped. Fixes #77520. Thanks @Patrick-Erichsen.",
      "Discord: prefer IPv4 for Discord REST and gateway WebSocket startup paths so IPv4-only networks no longer stall before Gateway READY and inbound message dispatch. Fixes #77398; refs #77526. Thanks @Beandon13.",
      "Channels/plugins: key bundled package-state probes, env/config presence, and read-only command defaults by channel id instead of manifest plugin id, preserving setup and native-command detection for channel plugins whose package id differs from the channel alias. Thanks @vincentkoc.",
      "Docker: prune package-excluded plugin dist directories from runtime images unless the build explicitly opts that plugin in, so official external plugins such as Feishu stay install-on-demand instead of shipping partial metadata without compiled runtime output. Fixes #77424. Thanks @vincentkoc.",
      "Model switching: include the exact additive allowlist repair command when `/model ... --runtime ...` targets a blocked model, and make Telegram's model picker say that it changes only the session model while leaving the runtime unchanged. Thanks @vincentkoc.",
      "Mattermost: clarify that the model picker only changes the session model and that runtime switches require `/oc_model <provider/model> --runtime <runtime>`. Thanks @vincentkoc.",
      "Doctor/config: keep active `auth.profiles` metadata intact when `doctor --fix` strips stale secret fields from configs, repairing legacy `<provider>:default` API-key profile metadata when model fallbacks or explicit `model@profile` refs still depend on it. Fixes #77400.",
      "Doctor/plugins: include `plugins.allow`-only official plugin ids in the release configured-plugin repair set, so `doctor --fix` installs official external plugins that are configured but not yet loaded instead of removing them as stale allow entries. Fixes #77155. Thanks @hclsys.",
      "Doctor/sessions: clear auto-created stale session routing state from the sessions store when `doctor --fix` sees plugin-owned model/runtime/auth/session bindings outside the current configured route, while leaving explicit user model choices for manual review. Refs #68615.",
      "CLI/update: disable and skip plugins that fail package-update plugin sync, so a broken npm/ClawHub/git/marketplace plugin cannot turn a successful OpenClaw package update into a failed update result. Thanks @vincentkoc.",
      "CLI/update: use an absolute POSIX npm script shell during package-manager updates, so restricted PATH environments can still run dependency lifecycle scripts while updating from `--tag main`. Fixes #77530. Thanks @PeterTremonti.",
      "Diagnostics: grant the internal diagnostics event bus to official installed diagnostics exporter plugins, so npm-installed `@openclaw/diagnostics-prometheus` can emit metrics without broadening the capability to arbitrary global plugins. Fixes #76628. Thanks @RayWoo.",
      "Browser: enforce strict SSRF current-URL checks before existing-session screenshots, matching existing-session snapshot handling. Thanks @vincentkoc.",
      "Active Memory: give timeout partial transcript recovery enough abort-settle headroom so temporary recall summaries are returned before cleanup. Thanks @vincentkoc.",
      "Gateway/chat: clear the active reply-run guard before draining queued same-session follow-up turns, so sequential `chat.send` calls no longer trip `ReplyRunAlreadyActiveError` every other request. Fixes #77485. Thanks @bws14email.",
      "Agents/media: avoid sending generated image, video, and music attachments twice when streamed reply text arrives before the final `MEDIA:` directive.",
      "CLI/sessions: cap `openclaw sessions` output to the newest 100 rows by default and add `--limit <n|all>` plus JSON pagination metadata, so repeated machine polling of large session stores cannot fan out into unbounded per-row enrichment/output work. Fixes #77500. Thanks @Kaotic3.",
      "Doctor/config: restore legacy group chat config migrations for `routing.allowFrom`, `routing.groupChat.*`, and `channels.telegram.requireMention` so upgrades keep WhatsApp, Telegram, and iMessage group mention gates and history settings instead of leaving configs invalid or silently blocked. Thanks @scoootscooob.",
      "CLI/update: make package-update follow-up processes write completion results and exit explicitly, so Windows packaged upgrades do not hang after the new package finishes post-core plugin work. Thanks @vincentkoc.",
      "Release validation: skip Slack live QA unless Slack credentials are explicitly configured, so release gates can keep proving non-Slack surfaces while Slack is still local and credential-gated. Thanks @vincentkoc.",
      "Plugins/update: treat OpenClaw CalVer correction versions like `2026.5.3-1` as satisfying base plugin API ranges, so correction builds can install plugins that require the base runtime API. Fixes #77293. (#77450) Thanks @p3nchan.",
      "Discord/Gateway startup: retry Discord READY waits with backoff, defer startup `sessions.list` and native approval readiness failures until sidecars recover, and preserve component-only Discord payloads when final reply scrubbing removes all text. (#77478) Thanks @NikolaFC.",
      "CLI/launcher: forward termination signals to compile-cache respawn children, so killing a wrapper process no longer leaves the security audit worker orphaned. Fixes #77458. Thanks @jaikharbanda.",
      "Plugins/registry: recover managed-npm external plugins from the owned npm root when a stale persisted registry would otherwise hide them after package-manager upgrades. Fixes #77266. Thanks @p3nchan.",
      "fix(gateway): clamp unbound websocket auth scopes [AI]. (#77413) Thanks @pgondhi987.",
      "Diffs plugin: accept `defaults.ttlSeconds` as a plugin-wide artifact lifetime default, so LAN-viewable diff links can keep their configured six-hour TTL without doctor quarantining the plugin entry. (#77456) Thanks @VACInc.",
      "Gate zalouser startup name matching [AI]. (#77411) Thanks @pgondhi987.",
      "Active Memory: send a bounded latest-message search query to the recall worker so channel/runtime metadata does not become the memory search string. Fixes #65309. Thanks @joeykrug, @westley3601, @pimenov, and @tasi333.",
      "fix(device-pair): require pairing scope for pair command [AI]. (#76377) Thanks @pgondhi987.",
      "Providers/OpenRouter: keep DeepSeek V4 `reasoning_effort` on OpenRouter-supported values, mapping stale `max` thinking overrides to `xhigh` so `openrouter/deepseek/deepseek-v4-pro` no longer fails with OpenRouter's invalid-effort 400. Fixes #77350. (#77423) Thanks @krllagent, @mushuiyu886, and @sallyom.",
      "fix(qqbot): keep private commands off framework surface [AI]. (#77212) Thanks @pgondhi987.",
      "Claude CLI: honor non-off `/think` levels by passing Claude Code's session-scoped `--effort` flag through the CLI backend seam, so chat bridges no longer show an inert thinking control. Fixes #77303. Thanks @Petr1t.",
      "Agents/subagents: refresh deferred final-delivery payloads when same-session completion output changes, so retried parent notifications use the final child summary instead of stale progress text. Thanks @vincentkoc.",
      "Agents/media: route async music and video completion results back through the requester agent, preserving automatic replies while requiring the message tool only for message-tool-only group/channel delivery.",
      "active-memory: skip the memory sub-agent gracefully instead of logging a confusing allowlist error when no memory plugin (`memory-core` or `memory-lancedb`) is loaded, so active-memory with no memory backend no longer produces misleading \"No callable tools remain\" warnings in the gateway log. Fixes #77506. Thanks @hclsys.",
      "Memory/wiki: preserve representation from both corpora in `corpus=all` searches while backfilling unused result capacity, so memory hits are not starved by numerically higher wiki integer scores. Fixes #77337. Thanks @hclsys.",
      "Docker/compose: pin container-side `OPENCLAW_CONFIG_DIR` and `OPENCLAW_WORKSPACE_DIR` on both gateway and CLI services so the host paths written into `.env` by `scripts/docker/setup.sh` (used as Compose bind-mount sources) cannot leak into runtime code via the `env_file` import. Fixes regressions on macOS Docker setups where the first agent reply died with `EACCES: permission denied, mkdir '/Users'` because the host-style workspace path got persisted into `agents.defaults.workspace`. Fixes #77436. Thanks @lonexreb.",
      "Telegram: clean up tool-only draft previews after assistant message boundaries so transient `Surfacing...` tool-status bubbles do not linger when no matching final preview arrives. Thanks @BunsDev.",
      "Telegram: cool down repeatedly failing Bot API transport fallbacks so long polling stops hammering a blackholed Telegram route. Fixes #77900. Thanks @bryce-d-greybeard.",
      "Slack: report `unknown error` instead of `undefined` in socket-mode startup retry logs and label the retry reason explicitly.",
      "Telegram: let explicit forum-topic `requireMention` settings override persisted `/activate` and `/deactivate` state, so per-topic mention gates work consistently. Fixes #49864. Thanks @Panniantong.",
      "Cron: surface failed isolated-run diagnostics in `cron show`, status, and run history when requested tools are unavailable, so blocked cron runs report the actual tool-policy failure instead of a misleading green result. Fixes #75763. Thanks @RyanSandoval.",
      "TUI/escape abort: track the in-flight runId after `chat.send` resolves so pressing Esc during the gap before the first gateway event aborts the run instead of repeatedly printing `no active run`. Fixes #1296. Thanks @Lukavyi and @romneyda.",
      "TUI/render: stop the long-token sanitizer from injecting literal spaces inside inline code spans, fenced code blocks, table borders, and bare hyphenated/dotted identifiers, so copied package names, entity IDs, and shell line-continuations stay byte-for-byte intact while narrow-terminal protection still chunks unidentifiable long prose tokens. Fixes #48432, #39505. Thanks @DocOellerson, @xeusoc, @CCcassiusdjs, @akramcodez, @brokemac79, @romneyda.",
      "Plugin skills: publish plugin-declared skills through the generated plugin skills directory (`~/.openclaw/plugin-skills/`) while keeping direct prompt loading intact, so agent file-based discovery paths find plugin skill `SKILL.md` files and inactive plugin links are cleaned up. Fixes #77296. (#77328) Thanks @zhangguiping-xydt.",
      "Gateway/status: label Linux managed gateway services as `systemd user`, making status output explicit about the user-service scope instead of implying a system-level unit. Thanks @vincentkoc.",
      "Plugins/install: remove the previous managed plugin directory when a reinstall switches sources, so stale ClawHub and npm copies no longer keep duplicate plugin ids in discovery after the new install wins. Thanks @vincentkoc.",
      "Plugins/install: let official plugin reinstall recovery repair source-only installed runtime shadows, so `openclaw plugins install npm:@openclaw/discord --force` can replace the bad package instead of stopping at stale config validation. Thanks @vincentkoc.",
      "CLI/update: stage pnpm-detected npm-layout global package updates through a clean npm prefix swap, keep plugin install runtime imports behind a stable alias, and ship legacy install-runtime aliases back to `2026.3.22`, preventing stale overlay chunks from breaking plugin post-update sync. Thanks @vincentkoc.",
      "Plugins/commands: allow the official ClawHub Codex plugin package to keep reserved `/codex` command ownership, matching the existing npm-managed Codex package behavior. Thanks @vincentkoc.",
      "Auth/OpenAI Codex: rewrite invalidated per-agent Codex auth-order and session profile overrides toward a healthy relogin profile, so revoked OAuth accounts do not stay pinned after signing in again. Thanks @BunsDev.",
      "Plugins/commands: scope QQBot framework slash commands to the QQBot channel so `/bot-*` command handlers and native specs do not leak onto unrelated chat surfaces. Thanks @vincentkoc.",
      "fix: harden backend message action gateway routing [AI]. (#76374) Thanks @pgondhi987.",
      "Gate QQBot streaming command auth [AI]. (#76375) Thanks @pgondhi987.",
      "Plugins/discovery: ignore managed npm plugin packages that only expose TypeScript source entries without compiled runtime output, so stale/broken installs cannot hide a working bundled or reinstallable channel plugin during setup. Thanks @vincentkoc.",
      "CLI/update: treat OpenClaw stable correction versions like `2026.5.3-1` as newer than their base stable release, so package updates no longer ask for downgrade confirmation. Thanks @vincentkoc.",
      "Plugins/install: suppress dangerous-pattern scanner warnings for trusted official OpenClaw npm installs, so installing `@openclaw/discord` no longer prints credential-harvesting warnings for the official package. Thanks @vincentkoc.",
      "Plugins/commands: suppress dangerous-pattern scanner warnings for trusted catalog npm installs from owner-gated `/plugins install` commands, so chat-driven installs match the CLI install trust path. Thanks @vincentkoc.",
      "Plugins/release: make the published npm runtime verifier reject blank `openclaw.runtimeExtensions` entries instead of treating them as absent and passing via inferred outputs. Thanks @vincentkoc.",
      "Plugins/security: ignore inline and block comments when matching source-rule context in plugin install scans, so comment-only `fetch`/`post` references near environment defaults do not block clean plugins. Thanks @vincentkoc.",
      "Doctor/plugins: remove stale managed install records for bundled plugins even when the bundled plugin is not explicitly configured, so doctor cleanup cannot leave orphaned install metadata behind. Thanks @vincentkoc.",
      "Web fetch: scope provider fallback cache entries by the selected fetch provider so config reloads cannot reuse another provider's cached fallback payload. Thanks @vincentkoc.",
      "Web search: honor late-bound `tools.web.search.enabled: false` during tool execution so config reloads cannot leave an already-created `web_search` tool runnable. Thanks @vincentkoc.",
      "Plugins/packages: reject inferred built runtime entries that exist but fail package-boundary checks instead of falling back to TypeScript source for installed packages. Thanks @vincentkoc.",
      "Plugins/loader: do not retry native-loaded JavaScript plugin modules through the source transformer after native evaluation has already reached a missing dependency, avoiding duplicate top-level side effects. Thanks @vincentkoc.",
      "Plugins/packages: reject blank `openclaw.runtimeExtensions` entries instead of silently ignoring them and falling back to inferred TypeScript runtime entries. Thanks @vincentkoc.",
      "Doctor/plugins: remove stale managed npm plugin shadow entries from the managed package lock as well as `package.json` and `node_modules`, so future npm operations do not keep referencing repaired bundled-plugin shadows. Thanks @vincentkoc.",
      "Plugins/runtime state: keep the key being registered when namespace eviction runs in the same millisecond as existing entries, so `register` and `registerIfAbsent` do not report success while evicting their own fresh value. Thanks @vincentkoc.",
      "Plugins/providers: make bundled provider discovery honor restrictive `plugins.allow` by default for new configs, while doctor migrates legacy restrictive allowlist configs to `plugins.bundledDiscovery: \"compat\"` to preserve upgrade behavior. Thanks @dougbtv.",
      "Control UI/Talk: make failed Talk startup errors dismissable and clear the stale Talk error state when dismissed, so missing realtime voice provider configuration does not leave a permanent chat banner. Fixes #77071. Thanks @ijoshdavis.",
      "Control UI/Talk: stop and clear failed realtime Talk sessions when dismissing runtime error banners, so the next Talk click starts a fresh session instead of only stopping the stale one. Thanks @vincentkoc.",
      "Control UI/Talk: retry from a failed realtime Talk session on the next Talk click instead of requiring a separate stale-session stop click first. Thanks @vincentkoc.",
      "Canvas host: preserve the Gateway TLS scheme in browser canvas host URLs and startup mount logs, so direct HTTPS gateways do not advertise insecure canvas links. Thanks @vincentkoc.",
      "WhatsApp/login: route login success and failure messages through the injected runtime, so setup/onboarding surfaces capture all login output instead of only the QR. Thanks @vincentkoc.",
      "Google Chat: create an isolated Google auth transport per auth client, so google-auth-library interceptor mutations do not accumulate across webhook verification and access-token clients. Thanks @vincentkoc.",
      "Doctor/plugins: remove orphaned or recovered managed npm copies of bundled `@openclaw/*` plugins during `doctor --fix`, so stale package manifests cannot shadow the current bundled plugin config schema.",
      "Control UI/performance: cap long-task and long-animation-frame diagnostics in the shared event log, so slow-render telemetry does not evict gateway/plugin events from the Debug and Overview views. Thanks @vincentkoc.",
      "Gateway/startup: log the canvas host mount only after the HTTP server has bound, so startup logs no longer report the canvas host as mounted before it can serve requests.",
      "Control UI/i18n: render the Sessions active filter tooltip with the configured minute count in every locale and make the i18n check reject placeholder drift. Thanks @BunsDev.",
      "Web fetch: late-bind `web_fetch` config and provider fallback metadata from the active runtime snapshot, matching `web_search` so long-lived tools do not use stale fetch provider settings. Thanks @vincentkoc.",
      "Discord: clear stale startup probe bot/application status when the async bot probe throws, not just when it returns a degraded probe result. Thanks @vincentkoc.",
      "Web search: scope explicit bundled `web_search` provider runtime loading through manifest ownership, so selecting DuckDuckGo/Gemini/etc. does not import unrelated bundled providers or log their optional dependency failures. Thanks @vincentkoc.",
      "Plugins/discovery: demote the source-only TypeScript runtime check on already-installed `origin: \"global\"` plugin packages from a config-blocking error to a warning and let the runtime fall through to the TypeScript source via jiti, so a single broken installed package no longer blocks `plugins install` for unrelated plugins; install-time rejection of newly-installed source-only packages is unchanged. Thanks @romneyda.",
      "Providers/OpenAI Codex: stop the OAuth progress spinner before showing the manual redirect paste prompt, so callback timeouts do not spam `Browser callback did not finish` across terminals.",
      "Providers/OpenAI Codex: fail closed on malformed `/codex` control commands and diagnostics confirmations before changing bindings, permissions, model overrides, active turns, or feedback uploads. Thanks @vincentkoc.",
      "Providers/OpenAI Codex: sanitize Codex app-server command readouts, failure replies, approval prompts, elicitation prompts, and `request_user_input` text before posting them back into chat. Thanks @vincentkoc.",
      "Providers/OpenAI Codex: preserve local bound-turn image paths, reject stale same-thread turn notifications, enforce option-only user input prompts, and return failed dynamic tool results to Codex as unsuccessful tool calls. Thanks @vincentkoc.",
      "Providers/DeepSeek: expose DeepSeek V4 `xhigh` and `max` thinking levels through the lightweight provider-policy surface, so Control UI `/think` pickers keep showing the max reasoning options when the runtime plugin registry is not active. Fixes #77139. Thanks @bittoby.",
      "Release/beta smoke: resolve the dispatched Telegram beta E2E run from `gh run list` when `gh workflow run` returns no run URL, so the maintainer helper does not fail immediately after dispatch. Thanks @vincentkoc.",
      "Media/images: keep HEIC/HEIF attachments fail-closed when optional Sharp conversion is unavailable instead of sending originals that still need conversion. Thanks @vincentkoc.",
      "Google Meet: fork the caller's current agent transcript into agent-mode meeting consultant sessions, so Meet replies inherit the context from the tool call that joined the meeting.",
      "iOS/mobile pairing: reject non-loopback `ws://` setup URLs before QR/setup-code issuance and let the iOS Gateway settings screen scan QR codes or paste full setup-code messages. Thanks @BunsDev.",
      "Control UI: keep Gateway Access inputs and locale picker contained inside the card at narrow and tablet widths.",
      "Agents/trajectory: bound runtime trajectory capture and yield queued sidecar writes so oversized traces stop recording instead of monopolizing Gateway cleanup. Fixes #77124. Thanks @loyur.",
      "Telegram/streaming: sanitize tool-progress draft preview backticks before shared compaction, so long backtick-heavy progress text still renders inside the safe code-formatted preview instead of collapsing to an ellipsis.",
      "UI/chat: remove the unsupported `line-clamp` declaration from the chat queue text rule to eliminate Firefox console noise without changing visible truncation behavior. Thanks @ZanderH-code.",
      "Control UI: add explicit feedback for repeated actions by announcing session switches, flashing the active session selector, showing inline Save/Apply/Update progress, and distinguishing filtered-empty session lists from genuinely empty session stores. Thanks @BunsDev.",
      "Agents/Pi: suppress persistence for synthetic mid-turn overflow continuation prompts, so transcript-retry recovery does not write the \"continue from transcript\" prompt as a new user turn. Thanks @vincentkoc.",
      "Agents/tools: strip reasoning text from visible rich presentation titles, blocks, buttons, and select labels before message-tool sends, so structured channel payloads cannot leak hidden planning. Thanks @vincentkoc.",
      "Telegram: keep reply-dispatch lazy provider runtime chunks behind stable dist names and delete `/reasoning stream` previews after final delivery so package updates and live reasoning drafts do not leave Telegram turns broken or noisy. Thanks @BunsDev.",
      "Discord: start the gateway monitor without waiting for the startup bot/application probe, so WSL2 hosts with a slow `/users/@me` REST path still bring the channel online while status enrichment finishes asynchronously. Fixes #77103. Thanks @Suited78.",
      "Exec approvals: detect `env -S` split-string command-carrier risks when `-S`/`-s` is combined with other env short options, so approval explanations do not miss split payloads hidden behind `env -iS...`. Thanks @vincentkoc.",
      "Google Meet: log the concrete agent-mode TTS provider, model, voice, output format, and sample rate after speech synthesis, so Meet logs show which voice backend spoke each reply.",
      "Voice Call: mark realtime calls completed when the realtime provider closes normally, so Twilio/OpenAI/Google realtime stop events do not leave active call records behind. Thanks @vincentkoc.",
      "Gateway/update: keep the shutdown close path behind a stable runtime chunk and ship compatibility aliases for recent `server-close-*` hashes, so manual npm package replacement cannot leave an already-running Gateway unable to shut down cleanly. Fixes #77087. Thanks @westlife219.",
      "Control UI/media: mint short-lived scoped tickets for assistant media fetches and render ticketed URLs instead of exposing long-lived auth tokens in chat image URLs. Fixes #70830 and #77097. Thanks @hclsys.",
      "Exec approvals: treat POSIX `exec` as a command carrier for inline eval, shell-wrapper, and eval/source detection, so approval explanations and command-risk checks do not miss payloads hidden behind `exec`. Thanks @vincentkoc.",
      "Google Meet: log the resolved audio provider model when starting Chrome and paired-node Meet talk-back bridges, so agent-mode joins show the STT model and bidi joins show the realtime voice model.",
      "Diagnostics: handle missing session-tail files in cron recovery context without tripping extension test typecheck. Thanks @vincentkoc.",
      "QA/Slack: update the Slack dispatch preview fallback test SDK mock for structured progress draft helpers, so the rich progress draft regression suite covers the new imports instead of failing before assertions run. Thanks @vincentkoc.",
      "Release validation: allow focused QA live reruns to select Matrix and Telegram without running Slack, so known Slack credential-pool outages do not block non-Slack live proof. Thanks @vincentkoc.",
      "Plugins/loader: keep bundled plugin package `test-api.js` aliases behind private QA mode, so source transforms do not expose test-only public surfaces during normal plugin loading. Thanks @vincentkoc.",
      "Gateway/startup: start cron and record the post-ready memory trace even when deferred maintenance timers fail after readiness, so a non-fatal timer setup issue does not silently leave scheduled jobs idle. Thanks @vincentkoc.",
      "Exec approvals: unwrap BSD/macOS `env -P <path>` carrier commands before approval-command and strict inline-eval checks, so `/approve` shell execution and inline interpreter payloads are still blocked behind that env form.",
      "Agents/session status: keep semantic `session_status({ sessionKey: \"current\" })` on the live run session even before that run has a persisted session-store entry, instead of falling back to the sandbox policy key. Thanks @vincentkoc.",
      "QA/Slack: resolve bundled official plugin public-surface package aliases during source-mode QA runs, so release Slack live validation can load `@openclaw/slack/api.js` without workspace symlinks. Thanks @vincentkoc.",
      "Codex: pass the live run session key into app-server dynamic tools when sandbox policy uses a separate session key, so `session_status({ sessionKey: \"current\" })` reports the active run instead of the sandbox policy key. Thanks @vincentkoc.",
      "Web search: keep first-class assistant `web_search` auto-detect and configured runtime providers visible when active runtime metadata or the active plugin registry is incomplete. Fixes #77073. Thanks @joeykrug.",
      "Plugins/tools: mark manifest-optional sibling tools as optional even when they come from a shared non-optional factory, so cached/status/MCP metadata keeps opt-in tool policy accurate. Thanks @vincentkoc.",
      "Matrix: keep `streaming.progress.toolProgress` scoped to progress draft mode, so partial and quiet Matrix previews do not lose tool progress unless `streaming.preview.toolProgress` is disabled. Thanks @vincentkoc.",
      "Gateway/validation: isolate gateway server validation files, ignore unrelated startup logs in request-trace coverage, and fail fast on stuck shared-auth sockets, reducing false main-branch CI failures for contributors. Thanks @amknight.",
      "Channels/streaming: keep `streaming.progress.toolProgress` scoped to progress draft mode, so disabling compact progress lines does not silence partial/block preview tool updates. Thanks @vincentkoc.",
      "Plugins/update: treat OpenClaw stable correction versions like `2026.5.3-1` as stable releases for npm installs, plugin updates, and bundled-version comparisons, so `latest` can advance official plugins without prerelease opt-in. Thanks @vincentkoc.",
      "Control UI: point the Appearance tweakcn browse action and docs at the live tweakcn editor route instead of the removed `/themes` page. Fixes #77048.",
      "Control UI: render Dream Diary prose through the sanitized markdown pipeline, so diary bold/italic/header markdown no longer appears as literal source text. Fixes #62413.",
      "Control UI: render tool results whose output arrives as text-block arrays and give expanded tool output a scrollable block, so read/exec output remains visible in WebChat. Fixes #77054.",
      "MCP: include serialized conversation/message payloads in the primary text content for `conversations_list` and `messages_read`, while preserving `structuredContent` for capable clients. Fixes #77024.",
      "Media: treat `EPERM` from the post-write media fsync step as best-effort, allowing WebChat and channel uploads to finish on Windows filesystems that reject `fsync` after a successful write. Fixes #76844.",
      "Media/Telegram: send in-limit original images when optional image optimization is unavailable, so Telegram MEDIA replies and message-tool image sends do not fail just because `sharp` is missing. Fixes #77081. (#77117) Thanks @pfrederiksen.",
      "Diagnostics: include last progress, cron job/run ids, stopped cron job name, and the last assistant transcript snippet in stalled-session and stuck-session recovery logs so cron stalls show what was stopped.",
      "Streaming channels: add `streaming.preview.commandText: \"status\"` / `streaming.progress.commandText: \"status\"` to hide command/exec text in preview progress lines while keeping the released raw command text default. Fixes #77072.",
      "Agents/cron: let explicit cron `timeoutSeconds` drive both CLI no-output and embedded LLM idle watchdogs instead of being capped by resume defaults. Fixes #76289.",
      "Plugins/catalog: suppress missing `channelConfigs` compatibility diagnostics for external channel plugins that are disabled, denied, or outside a restrictive allowlist. Fixes #76095.",
      "Diagnostics: keep webhook/message OTEL attributes and Prometheus delivery labels low-cardinality and omit raw chat/message IDs from spans, so progress-draft and message-tool modes do not leak high-cardinality messaging identifiers.",
      "Google Meet: stop advertising legacy `mode: \"realtime\"` to agents and config UIs, while keeping it as a hidden compatibility alias for `mode: \"agent\"`, so new joins use the STT -> OpenClaw agent -> TTS path instead of selecting the direct realtime voice fallback.",
      "Google Meet: add `chrome.audioBufferBytes` for generated command-pair SoX audio commands and lower the default buffer from SoX's 8192 bytes to 4096 bytes to reduce Chrome talk-back latency.",
      "Google Meet: split realtime provider config into agent-mode transcription and bidi-mode voice providers, and migrate legacy Gemini Live bidi configs with `doctor --fix`, so Gemini Live can back direct bidi fallback without breaking the default OpenClaw agent talk-back path.",
      "Google Meet: keep waiting for the Meet microphone to unmute during join intro readiness instead of permanently skipping talk-back when Meet briefly reports the local mic as muted.",
      "Google Meet: expose `voiceCall.postDtmfSpeechDelayMs` in the plugin manifest schema and setup hints, so manifest-based config editing accepts the runtime-supported Twilio delay key. Thanks @vincentkoc.",
      "Google Meet: keep explicit non-Google `realtime.provider` values as the transcription provider compatibility fallback when `realtime.transcriptionProvider` is unset. Thanks @vincentkoc.",
      "Google Meet: make Twilio setup status require an enabled `voice-call` plugin entry instead of treating a missing entry as ready. Thanks @vincentkoc.",
      "Telegram: render shared interactive reply buttons in reply delivery so plugin approval messages show inline keyboards. (#76238) Thanks @keshavbotagent.",
      "Cron/sessions: keep cron metadata rows without an on-disk transcript non-resumable until a transcript exists, so doctor and `sessions cleanup --fix-missing` no longer report or prune pre-transcript cron rows as broken sessions. Refs #77011.",
      "OpenAI Codex: recreate missing bound app-server threads once when a stale `/codex bind` sidecar survives a restart, preserving the selected auth profile and turn overrides before retrying the inbound turn. (#76936) Thanks @keshavbotagent.",
      "Agents/cli-runner: drop a saved `claude-cli` resume sessionId at preparation time when its on-disk transcript no longer exists in `~/.claude/projects/`, so a stale binding from a half-installed `update.run` cannot trap follow-up runs (auto-reply / Telegram direct) in a `claude --resume` timeout loop; the run starts fresh and the new sessionId is written back through the existing post-run flow. (#77030; refs #77011) Thanks @openperf.",
      "Release validation: install the cross-OS TypeScript harness through Windows-safe Node/npm shims so native Windows package checks reach the OpenClaw smoke suites instead of exiting before artifact capture. Thanks @vincentkoc.",
      "Release validation: let Windows packaged-upgrade checks continue after the shipped 2026.5.2 updater hits its native-module swap cleanup fallback, verifying the fallback-installed candidate through package metadata and downstream smoke instead of crashing on the immediate update-status probe. Thanks @vincentkoc.",
      "Doctor/plugins: skip channel-derived official plugin installs when another configured plugin is the effective owner for the same channel, so `doctor --repair` does not reinstall `feishu` while `openclaw-lark` handles `channels.feishu`. Fixes #76623. Thanks @fuyizheng3120.",
      "Gateway/sessions: memoize repeated thinking-option enrichment and skip unused cost fallback checks while listing sessions, reducing per-row work on large multi-agent stores. Fixes #76931.",
      "Gateway/sessions: bound default `sessions.list` RPC responses and report truncation metadata, preventing Slack-heavy long-lived stores from forcing unbounded Gateway row construction. Fixes #77062.",
      "Agents/tools: use config-only runtime snapshots for plugin tool registration and live runtime config getters, avoiding expensive full secrets snapshot clones on the core-plugin-tools prep path. Fixes #76295.",
      "Agents/tools: honor the effective tool denylist before constructing optional PDF/media tool factories, so `tools.deny: [\"pdf\"]` skips PDF setup before later policy filtering. Fixes #76997.",
      "MCP/plugin tools: apply global `tools.profile`, `tools.alsoAllow`, and `tools.deny` policy while exposing plugin tools over the standalone MCP bridge, so ACP clients do not see policy-hidden plugin tools or miss opt-in optional tools. Thanks @vincentkoc.",
      "Plugin tools: honor explicit tool denylists while selecting plugin tool runtimes, so denied plugin tools are not materialized for direct command or gateway surfaces before later policy filtering. Thanks @vincentkoc.",
      "Plugin tools: filter factory-returned tools by manifest per-tool optional policy, so optional sibling tools from a shared runtime factory stay hidden unless explicitly allowed. Thanks @vincentkoc.",
      "Agents/transcripts: retry context-overflow compaction from the current transcript only after the inbound user turn was actually persisted, and keep WebChat agent-run live delivery from writing duplicate Pi-managed assistant turns. Fixes #76424. (#77033)",
      "Agents/bootstrap: keep pending `BOOTSTRAP.md` and bootstrap truncation notices in system-prompt Project Context instead of copying setup text or raw warning diagnostics into WebChat user/runtime context. Fixes #76946.",
      "Gateway/install: keep `.env`-managed values in the macOS LaunchAgent env file while still tracking `OPENCLAW_SERVICE_MANAGED_ENV_KEYS`, so regenerated services do not boot without managed auth/provider keys. Fixes #75374.",
      "Gateway/restart: verify listener PIDs by argv when `lsof` reports only the Node process name, so stale gateway cleanup can find macOS `cnode` listeners. Fixes #70664.",
      "Gateway/logging: expand leading `~` in `logging.file` before creating the file logger, preventing startup crash loops for home-relative log paths. Fixes #73587.",
      "Channels/CLI: keep `openclaw channels list --json` usable when provider usage fetching fails, and report per-provider usage errors without aborting the channel list. Refs #67595.",
      "Doctor/plugins: do not treat `plugins.allow` entries as configured plugins during missing-plugin repair, so restrictive allowlists no longer install allowed-but-unused plugins. Thanks @vincentkoc.",
      "Agents/messaging: deliver distinct final commentary after same-target `message` tool sends while still deduping text/media already sent by the tool, so short closing remarks are no longer silently dropped. Fixes #76915. Thanks @hclsys.",
      "Agents/messaging: preserve string thread IDs when matching message-tool reply dedupe routes, avoiding precision loss on numeric-looking topic IDs before channel plugin comparison. Thanks @vincentkoc.",
      "Channels/streaming: honor `agents.defaults.toolProgressDetail: \"raw\"` in Slack, Discord, Telegram, Matrix, and Microsoft Teams progress drafts, so tool-start lines include raw command/detail output when debugging. Thanks @vincentkoc.",
      "Channels/streaming: strip unmatched inline-code backticks from compacted raw progress draft lines, avoiding stray markdown markers after long command details are shortened. Thanks @vincentkoc.",
      "Discord/Slack/Mattermost: align draft preview tool-progress config help with the runtime behavior that hides interim tool updates when `streaming.preview.toolProgress` is false. Thanks @vincentkoc.",
      "Feishu: use the shared channel progress formatter for streaming-card tool status lines, including raw command/detail output and message-tool filtering. Thanks @vincentkoc.",
      "Mattermost: use the shared progress draft formatter for tool status previews, including raw command/detail output when `agents.defaults.toolProgressDetail: \"raw\"` is enabled. Thanks @vincentkoc.",
      "Mattermost: suppress standalone default tool-progress messages while draft previews are active, including when draft tool lines are disabled. Thanks @vincentkoc.",
      "Telegram: deliver button-only interactive replies by sending the shared fallback button-label text with the inline keyboard instead of dropping the reply as empty. Thanks @vincentkoc.",
      "OpenAI Codex: honor `auth.order.openai-codex` when starting app-server clients without an explicit auth profile, so status/model probes and implicit startup use the configured Codex account instead of falling back to the default profile. Thanks @vincentkoc.",
      "OpenAI Codex: let SSRF-guarded provider requests inherit OpenClaw's undici IPv4/IPv6 fallback policy, so ChatGPT-backed Codex runs recover on IPv4-working hosts when DNS still returns unreachable IPv6 addresses. Fixes #76857. Thanks @jplavoiemtl and @SymbolStar.",
      "Plugin updates: do not short-circuit trusted official npm updates as unchanged when the default/latest spec still resolves to an already-installed prerelease that the installer should replace with a stable fallback. Thanks @vincentkoc.",
      "Plugin updates: clean stale bundled load paths for already-externalized npm installs whose legacy install record only preserved the resolved package name. Thanks @vincentkoc.",
      "Plugin tools: keep auth-unavailable optional tools hidden even when another default tool from the same plugin is available and `tools.alsoAllow` names the optional tool. Thanks @vincentkoc.",
      "Realtime transcription: report socket closes before provider readiness as closed-before-ready failures instead of mislabeling them as connection timeouts for OpenAI, xAI, and Deepgram streaming transcription. Thanks @vincentkoc.",
      "OpenAI/Google Meet: fail realtime voice connection attempts when the socket closes before `session.updated`, avoiding stuck Meet joins waiting on a bridge that never became ready. Thanks @vincentkoc.",
      "Google Meet: avoid treating repeated participant words as multiple assistant-overlap matches when suppressing realtime echo transcripts. Thanks @vincentkoc.",
      "Google Meet: make `mode: \"agent\"` the default Chrome talk-back path, using realtime transcription for input and regular OpenClaw TTS for speech output, while keeping direct realtime voice answers available as `mode: \"bidi\"` and accepting `mode: \"realtime\"` as an agent-mode compatibility alias.",
      "Codex harness: keep `codex_app_server.*` telemetry publication owned by the harness instead of republishing the same callback event from core runners. Thanks @vincentkoc.",
      "Slack/Discord: suppress standalone tool-progress chatter when partial preview streaming has `streaming.preview.toolProgress: false`, matching the documented quiet-preview behavior. Thanks @vincentkoc.",
      "Matrix: bind native approval reaction targets before publishing option reactions, so fast approver reactions on threaded prompts are not dropped while the approval handler finishes setup. Thanks @vincentkoc.",
      "Google Meet: make realtime talk-back agent-driven by default with `realtime.strategy: \"agent\"`, keep the previous direct bidirectional model behavior available as `realtime.strategy: \"bidi\"`, route the Meet tab speaker output to `BlackHole 2ch` automatically for local Chrome realtime joins, coalesce nearby speech transcript fragments before consulting the agent, and avoid cutting off agent speech from server VAD or stale playback pipe errors.",
      "Google Meet: suppress queued assistant playback and assistant-like transcript echoes from the realtime input path, so the meeting does not hear the agent's own speech as a new user turn and loop or cut itself off.",
      "Google Meet: keep Chrome realtime transport tests hermetic on Linux prerelease shards while preserving the macOS-only runtime guard. Thanks @vincentkoc.",
      "QA/Matrix: let the live tool-progress preview and error checks verify progress replacement events without depending on the preview saying `Working`, `tool: read`, an unlabelled/pathless `read from`, or the original draft root being observed. Thanks @vincentkoc.",
      "QA/Matrix: keep the target=both approval scenario focused on channel and DM metadata delivery by resolving the accepted approval through the gateway after both Matrix events are observed. Thanks @vincentkoc.",
      "QA/Matrix: wait for live approval reactions to echo before starting the threaded approval decision timeout. Thanks @vincentkoc.",
      "QA/Matrix: reuse the primed driver sync stream when confirming approval reaction echoes, avoiding missed self-reactions in live release runs. Thanks @vincentkoc.",
      "Channels/WhatsApp: apply the shared group/channel visible-reply mode during inbound dispatch so group replies stay message-tool-only by default without overriding direct-chat harness defaults. Refs #75178 and #67394. Thanks @scoootscooob.",
      "Plugins/Codex: preserve Codex-native OAuth routing for `/codex bind` app-server turns so bound sessions keep the selected Codex auth profile instead of falling back to public OpenAI credentials. (#76714) Thanks @keshavbotagent.",
      "Telegram: keep status checks pointed at the active chat so asking for the current session no longer reports an old direct-message conversation. (#76708) Thanks @amknight.",
      "Gateway/install: prefer supported system Node over nvm/fnm/volta/asdf/mise when regenerating managed gateway services, so `gateway install --force` no longer recreates service definitions that doctor immediately flags as version-manager-backed. Fixes #76339. Thanks @brokemac79 and @BunsDev.",
      "Google Chat: normalize Google auth certificate response headers before google-auth-library reads cache-control, so inbound webhook auth no longer rejects with `res?.headers.get is not a function`. Fixes #76880. Thanks @donbowman.",
      "WhatsApp: route terminal login QR output through the active runtime for initial and restart sockets, so `openclaw channels login --channel whatsapp` does not lose the QR behind direct stdout writes. Fixes #76213. Thanks @dougvk.",
      "Proxy/debugging: disable debug proxy direct upstream forwarding for proxy requests and CONNECT tunnels while managed proxy mode is active unless `OPENCLAW_DEBUG_PROXY_ALLOW_DIRECT_CONNECT_WITH_MANAGED_PROXY=1` is explicitly set for approved local diagnostics. Thanks @jesse-merhi and @mjamiv.",
      "Direct APNs: route direct HTTP/2 delivery through the active managed proxy with redacted proxy diagnostics, so push requests honor configured egress controls and `openclaw proxy validate --apns-reachable` can prove APNs is reachable through the proxy before deployment. (#74905) Thanks @jesse-merhi.",
      "Agents/subagents: detect prefix-only completion announce replies and fall back to the captured child result so requester chats no longer lose most of long sub-agent reports silently. Fixes #76412. Thanks @inxaos and @davemorin.",
      "TUI: replace the stale-response watchdog notice with plain user-facing copy so stalled replies no longer surface backend or streaming internals. (#77120) Thanks @davemorin.",
      "Security/Windows: validate `SystemRoot`/`WINDIR` env values through the Windows install-root validator and add them to the dangerous-host-env policy when resolving `icacls.exe`/`whoami.exe` for `openclaw security audit`, so workspace `.env` overrides and bare command names cannot redirect Windows ACL helpers to attacker-controlled binaries. (#74458) Thanks @mmaps.",
      "Security/Windows: pin Windows registry-probe `reg.exe` resolution to the canonical Windows install root in install-root probing, so `SystemRoot`/`WINDIR` env overrides cannot redirect registry queries during Windows host detection. (#74454) Thanks @mmaps.",
      "QQBot: preserve the framework command authorization decision when converting framework command contexts into engine slash command contexts, so downstream slash handlers see `commandAuthorized` matching the channel's resolved `isAuthorizedSender` instead of a hardcoded `true`. (#77453) Thanks @drobison00.",
      "Security/Windows: block `LOCALAPPDATA` from workspace `.env` and resolve Windows update-flow portable Git path prepends from the trusted process-local `LOCALAPPDATA` only, so workspace-supplied values cannot redirect `git` discovery during `openclaw update`. (#77470) Thanks @drobison00.",
      "Browser/SSRF: enforce the existing current-tab URL navigation policy before tab-scoped debug, export, and read routes (console, page errors, network requests, trace start/stop, response body, screenshot, snapshot, storage, etc.) collect from an already-selected tab, so blocked tabs return a policy error instead of being read first and redacted only at response time. (#75731) Thanks @eleqtrizit.",
      "Security/Windows: route the `.cmd`/`.bat` process wrapper through the shared Windows install-root resolver instead of `process.env.ComSpec`, so workspace dotenv-blocked `SystemRoot`/`WINDIR` overrides and unsafe values like UNC paths or path-lists cannot redirect `cmd.exe` selection on Windows. (#77472) Thanks @drobison00.",
      "Agents/bootstrap: honor `BOOTSTRAP.md` content injected by `agent:bootstrap` hooks when deciding whether bootstrap is pending, so hook-provided required setup instructions are included in the system prompt. (#77501) Thanks @ificator."
    ]
  },
  {
    "version": "2026.5.3-1",
    "date": "2026.5.3-1",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653-1",
    "features": [],
    "fixes": [
      "Plugins/security: stop the install scanner from blocking official bundled plugin packages when `process.env` access and normal API sends only appear in distant parts of the same compiled bundle. Thanks @vincentkoc."
    ]
  },
  {
    "version": "2026.5.3",
    "date": "2026.5.3",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653",
    "features": [
      {
        "title": "Plugins/file-transfer",
        "description": "add bundled file-transfer plugin with `file_fetch`, `dir_list`, `dir_fetch`, and `file_write` agent tools for binary file ops on paired nodes; default-deny per-node path policy under `plugins.entries.file-transfer.config.nodes` with operator approval, symlink traversal refused by default (opt-in `followSymlinks`), and a 16 MB byte ceiling per round-trip. (#74742) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/74742"
      },
      {
        "title": "Plugins/install",
        "description": "harden official plugin install, uninstall, update, onboarding, ClawHub fallback, npm dependency-state reporting, and beta-channel update paths so externalized plugins behave like first-class package installs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Gateway/performance",
        "description": "trim startup and Control UI hot paths by lazy-loading plugin/runtime discovery, cron, schema, shutdown, sessions, and model metadata work only when needed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Channels/replies",
        "description": "improve Discord status reactions and degraded transport reporting, add WhatsApp Channel/Newsletter targets, and tighten Telegram, Feishu, Matrix, Microsoft Teams, and Slack delivery/recovery behavior.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Install/update",
        "description": "recover broken macOS LaunchAgent upgrades, reject source-only plugin packages before runtime load, and repair stale Gateway/plugin state during updates and doctor runs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Agent/runtime reliability",
        "description": "preserve streamed provider replies, delayed A2A session replies, prompt/tool delivery, memory recall, web search provider discovery, and provider-specific thinking/model metadata across common edge cases.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Channels/streaming",
        "description": "add unified `streaming.mode: \"progress\"` drafts with auto single-word status labels and shared progress configuration across Discord, Telegram, Matrix, Slack, and Microsoft Teams.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Agents/commands",
        "description": "add `/steer <message>` for queue-independent steering of the active current-session run without starting a new turn when the session is idle. (#76934)",
        "href": "https://github.com/openclaw/openclaw/pull/76934"
      },
      {
        "title": "Tools/BTW",
        "description": "add `/side` as a text and native slash-command alias for `/btw` side questions.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Doctor/config",
        "description": "`doctor --fix` now commits safe legacy migrations even when unrelated validation issues (e.g. a missing plugin) prevent full validation from passing, so `agents.defaults.llm` and other known-legacy keys are always cleaned up by `doctor --fix` regardless of other config problems. Fixes #76798. (#76800) Thanks @hclsys.",
        "href": "https://github.com/openclaw/openclaw/pull/76800"
      },
      {
        "title": "Agents/tools",
        "description": "skip optional media and PDF tool factories when the effective tool denylist already blocks them, avoiding unnecessary hot-path setup for tools that will be filtered out before model use. (#76773) Thanks @dorukardahan.",
        "href": "https://github.com/openclaw/openclaw/pull/76773"
      },
      {
        "title": "Agents/compaction",
        "description": "ignore pre-usage transcript metadata bytes when stale token snapshots estimate preflight compaction pressure, while still counting post-usage transcript tail pressure. Fixes #78604. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/78604"
      },
      {
        "title": "Discord/status",
        "description": "let explicit reaction tool calls opt into tracking subsequent tool progress on the reacted message with `trackToolCalls: true`, and use the shared tool display emoji table for status reactions.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Gateway/config",
        "description": "stop Gateway startup and hot reload from auto-restoring invalid config; invalid config now fails closed and `openclaw doctor --fix` owns last-known-good repair.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Gateway/performance",
        "description": "lazy-load early runtime discovery and shutdown-hook helpers, defer maintenance timers until after readiness, and trim duplicate plugin auto-enable work during Gateway startup.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "QA/Mantis",
        "description": "add a `pnpm openclaw qa mantis discord-smoke` runner and manual GitHub workflow that verify the Mantis Discord bot can see the configured guild/channel, post a smoke message, add a reaction, and upload artifacts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "QA/Slack",
        "description": "add a Slack live transport QA runner with canary and mention-gating coverage for the private bot-to-bot harness. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Plugins/onboarding",
        "description": "let Manual setup install optional official plugins, including ClawHub-backed diagnostics with npm fallback, and expose the external Codex plugin as a selectable provider setup choice. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Plugins/CLI/update",
        "description": "include package dependency install state in `openclaw plugins list --json`, trust official externalized npm migrations, clean stale bundled load paths for externalized installs, try plugin `@beta` updates first on the beta OpenClaw channel, and fall back to default/latest when no plugin beta release exists.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "annotate 429 errors with reset windows and unauthenticated higher-rate-limit hints, so operators can tell when downloads recover and when signing in helps. Thanks @romneyda.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Gateway/performance",
        "description": "lazy-load early runtime discovery, shutdown hooks, cron, channel-config schema metadata, restart sentinels, and maintenance timers after readiness; trim duplicate plugin auto-enable work and add startup CPU/profile controls.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Gateway/config",
        "description": "stop Gateway startup and hot reload from auto-restoring invalid config; invalid config now fails closed and `openclaw doctor --fix` owns last-known-good repair.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Discord/status",
        "description": "let explicit reaction tool calls opt into tracking later tool progress with `trackToolCalls: true`, share tool display emoji mapping, and surface degraded Discord transport or gateway event-loop starvation in status output. (#76327) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/76327"
      },
      {
        "title": "Channels/WhatsApp",
        "description": "support explicit WhatsApp Channel/Newsletter `@newsletter` outbound message targets with channel session metadata instead of DM routing. Fixes #13417; carries forward the narrow outbound target idea from #13424. Thanks @vincentkoc and @agentz-manfred.",
        "href": "https://github.com/openclaw/openclaw/issues/13417"
      },
      {
        "title": "Agents/tools",
        "description": "skip optional media and PDF tool factories when the effective tool denylist already blocks them, avoiding unnecessary hot-path setup for tools that will be filtered out before model use. (#76773) Thanks @dorukardahan.",
        "href": "https://github.com/openclaw/openclaw/pull/76773"
      },
      {
        "title": "Agents/sandbox",
        "description": "store sandbox container and browser registry entries as per-runtime shard files, reducing unrelated session lock contention while `openclaw doctor --fix` migrates legacy monolithic registry files. (#74831) Thanks @luckylhb90.",
        "href": "https://github.com/openclaw/openclaw/pull/74831"
      },
      {
        "title": "Tools/BTW",
        "description": "add `/side` as a text and native slash-command alias for `/btw` side questions.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      },
      {
        "title": "Exec approvals",
        "description": "add a tree-sitter-backed shell command explainer for future approval and command-review surfaces. (#75004) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/75004"
      },
      {
        "title": "QA/Mantis",
        "description": "add a `pnpm openclaw qa mantis discord-smoke` runner and manual GitHub workflow that verify the Mantis Discord bot can see the configured guild/channel, post a smoke message, add a reaction, and upload artifacts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202653"
      }
    ],
    "fixes": [
      "Telegram: preserve URL inline keyboard buttons in shared presentation rendering. Fixes #76255. Thanks @clawSean.",
      "Update: repair doctor-migratable legacy config before persisting `openclaw update --channel ...`, so old Slack/Telegram streaming keys do not block switching to beta after a package update. Thanks @vincentkoc.",
      "Web fetch: late-bind `web_fetch` config and provider fallback metadata from the active runtime snapshot, matching `web_search` so long-lived tools do not use stale fetch provider settings. Thanks @vincentkoc.",
      "Plugins/discovery: demote the source-only TypeScript runtime check on already-installed `origin: \"global\"` plugin packages from a config-blocking error to a warning and let the runtime fall through to the TypeScript source via jiti, so a single broken installed package no longer blocks `plugins install` for unrelated plugins; install-time rejection of newly-installed source-only packages is unchanged. Thanks @romneyda.",
      "Providers/OpenAI Codex: stop the OAuth progress spinner before showing the manual redirect paste prompt, so callback timeouts do not spam `Browser callback did not finish` across terminals.",
      "Channels/WhatsApp: allow `@whiskeysockets/libsignal-node` in `onlyBuiltDependencies` so pnpm v9+ `blockExoticSubdeps` no longer rejects the baileys git-tarball subdep and silences all inbound agent replies. Fixes #76539. Thanks @ottodeng and @vincentkoc.",
      "Gateway/systemd: preserve operator-added secrets in the Gateway env file across re-stage while clearing OpenClaw-managed keys (such as `OPENCLAW_GATEWAY_TOKEN`) so a fresh staging value is never shadowed by a stale env-file copy; operator secrets are also retained when the state-dir `.env` is empty. Fixes #76860. Thanks @hclsys.",
      "Plugin updates: do not short-circuit trusted official npm updates as unchanged when the default/latest spec still resolves to an already-installed prerelease that the installer should replace with a stable fallback. Thanks @vincentkoc.",
      "Plugin tools: keep auth-unavailable optional tools hidden even when another default tool from the same plugin is available and `tools.alsoAllow` names the optional tool. Thanks @vincentkoc.",
      "Realtime transcription: report socket closes before provider readiness as closed-before-ready failures instead of mislabeling them as connection timeouts for OpenAI, xAI, and Deepgram streaming transcription. Thanks @vincentkoc.",
      "OpenAI/Google Meet: fail realtime voice connection attempts when the socket closes before `session.updated`, avoiding stuck Meet joins waiting on a bridge that never became ready. Thanks @vincentkoc.",
      "QA/cache: require the full `CACHE-OK <suffix>` marker before live cache probes stop retrying, so suffix-only prose cannot hide a broken probe response. Thanks @vincentkoc.",
      "Slack/Matrix: avoid creating blank progress-draft messages when `streaming.progress.label=false` and progress tool lines are disabled. Thanks @vincentkoc.",
      "QA/Matrix: keep the mock OpenAI tool-progress provider aligned with exact-marker Matrix prompts so the hardened live preview scenario still forces a deterministic read before final delivery. Thanks @vincentkoc.",
      "OpenAI/Google Meet: wait for realtime voice `session.updated` before treating the bridge as connected, so Meet joins do not return with audio queued behind an unconfigured realtime session. Thanks @vincentkoc.",
      "Plugins/catalog: merge official external catalog descriptors into partial package channel config metadata, so lagging WeCom/Yuanbao manifests keep their own schema while still exposing host-supplied labels and setup text. Thanks @vincentkoc.",
      "Plugins/catalog: supplement lagging official external WeCom and Yuanbao npm manifests with channel config descriptors and declared tool contracts from the OpenClaw catalog, so trusted package sweeps no longer fail because external package metadata trails the host contract. Thanks @vincentkoc.",
      "Plugins/install: let trusted official `@openclaw/*` catalog installs recover when npm `latest` points at a prerelease by falling back to the newest stable version, or by selecting the newest exact prerelease for prerelease-only launch packages with a warning instead of making beta/development plugin sweeps fail at install time. Thanks @vincentkoc.",
      "Google Meet: grant Chrome media permissions against the actual Meet tab, start the local realtime audio bridge only after Meet joins, expose realtime transcripts in status/logs, and force explicit audio responses with current OpenAI realtime output-audio events so BlackHole capture does not keep the OpenClaw participant muted or silent.",
      "Memory/LanceDB: declare `apache-arrow` in the bundled memory plugin package so LanceDB installs include its runtime peer. Fixes #76910. Thanks @afiqfiles-max.",
      "CLI/devices: retry explicit device-pair approval with `operator.admin` after a pairing-scope ownership denial, so existing admin-capable paired-device tokens can recover new Control UI/browser pairing after upgrades instead of requiring manual JSON edits. Fixes #76956. Thanks @neo19482.",
      "CLI/devices: stop local pairing fallback when the active Gateway names a pending request that is absent from the local pairing store, so profile or state-dir mismatches no longer make `openclaw devices list/approve` inspect the wrong store while a real device stays blocked. Thanks @vincentkoc.",
      "Control UI/webchat: fix streaming assistant responses causing the chat viewport to scroll upward by guarding `handleChatScroll` against scroll events triggered by the auto-scroll logic itself; introduces a `chatIsProgrammaticScroll` flag that suppresses near-bottom state updates during programmatic `scrollTo` calls so streaming output stays pinned to the bottom. Thanks @nickmopen.",
      "Google Meet: use the local call-control microphone button instead of disabled remote participant mute buttons, and block realtime speech when the OpenClaw Meet microphone remains muted.",
      "Google Meet: refresh realtime browser state during status and retry delayed speech after Meet finishes joining, so a just-opened in-call tab no longer leaves speech stuck behind stale `not-in-call` health.",
      "Plugins/install: recover the install ledger from the managed npm root when `plugins/installs.json` is empty or partial, so reinstalling Discord and Codex no longer makes the other installed plugin disappear.",
      "Google Meet: grant Meet media permissions through the Playwright browser context when CDP grants do not affect the attached Chrome page, and report in-call microphone/speaker permission problems instead of marking realtime speech ready.",
      "QA/Slack: fail the live mention-gating scenario on any unexpected SUT reply, even when the reply does not echo the expected marker. Thanks @vincentkoc.",
      "QA/Matrix: steer the live tool-progress preview check away from `HEARTBEAT.md` and report final preview candidates when the live marker reply misses the exact token. Thanks @vincentkoc.",
      "QA/Matrix: let the live tool-progress preview check verify progress replacement events without depending on the preview saying `Working`. Thanks @vincentkoc.",
      "Tlon: expose `groupInviteAllowlist` in the channel config schema and clarify that group invite auto-accept fails closed without an invite allowlist. Thanks @vincentkoc.",
      "Telegram: let forum-topic messages that omit `chat.is_forum` use per-topic processing lanes when Telegram still marks them as topic messages, and coalesce duplicate group typing cues so cosmetic Telegram API calls do not pile up ahead of real replies during topic bursts.",
      "Control UI/WebChat: collapse duplicate in-flight internal text sends onto the active Gateway run so rapid repeat submits do not start fresh `agent:main:main` dispatches. Fixes #75737. Thanks @dsdsddd1 and @BunsDev.",
      "Mattermost: accept the documented `channels.mattermost.streaming` config and honor `streaming: \"off\"` by disabling draft preview posts. Thanks @vincentkoc.",
      "Mattermost: expose streaming progress config labels and help text in generated channel config metadata so Control UI/docs can explain the new `channels.mattermost.streaming.progress.*` fields. Thanks @vincentkoc.",
      "Mattermost: honor `channels.mattermost.streaming.progress.toolProgress=false` in progress draft mode so compact tool status lines stay hidden until final delivery. Thanks @vincentkoc.",
      "Microsoft Teams: honor progress draft tool lines in native Teams progress streams and suppress standalone tool messages when `channels.msteams.streaming.progress.toolProgress=false`. Thanks @vincentkoc.",
      "Discord: keep progress draft boundary callbacks bound during streaming replies, so extension lint stays green while progress previews transition between assistant and reasoning blocks. Thanks @vincentkoc.",
      "Discord: resolve SecretRef-backed bot tokens from the active runtime snapshot for named accounts and keep unresolved configured tokens from crashing status or health checks. (#76987) Thanks @joshavant.",
      "Channels/streaming: expose `streaming.progress.label`, `labels`, `maxLines`, and `toolProgress` in bundled channel config metadata so progress draft settings appear in config, docs, and control surfaces. Thanks @vincentkoc.",
      "Channels/streaming: normalize whitespace and case for `streaming.progress.label: \"auto\"` so progress draft labels keep using the built-in label pool instead of rendering a literal `auto` title. Thanks @vincentkoc.",
      "Plugins/Codex: preserve Codex-native OAuth routing for `/codex bind` app-server turns so bound sessions keep the selected Codex auth profile instead of falling back to public OpenAI credentials. (#76714) Thanks @keshavbotagent.",
      "Gateway/install: prefer supported system Node over nvm/fnm/volta/asdf/mise when regenerating managed gateway services, so `gateway install --force` no longer recreates service definitions that doctor immediately flags as version-manager-backed. Fixes #76339. Thanks @brokemac79.",
      "Cron/status: render explicit `delivery.mode: \"none\"` jobs as no-delivery previews and label cron session history distinctly instead of showing fallback delivery or direct-session rows. Fixes #76945.",
      "Gateway/usage: serve `usage.cost` and `sessions.usage` from a durable transcript aggregate cache with lock-safe background refreshes and localized stale-cache status, so large usage views avoid repeated full scans. (#76650) Thanks @Marvinthebored.",
      "Plugins/hooks: let `plugins.entries.<id>.hooks.timeoutMs` and `plugins.entries.<id>.hooks.timeouts` bound plugin typed hooks from operator config, so slow hooks can be tuned without patching installed plugin code. Fixes #76778. Thanks @vincentkoc.",
      "Telegram: add `channels.telegram.mediaGroupFlushMs` at the top level and per account so operators can tune album buffering instead of being stuck with the hard-coded 500ms media-group flush window. Fixes #76149. Thanks @vincentkoc.",
      "Config/messages: coerce boolean `messages.visibleReplies` and `messages.groupChat.visibleReplies` values to the documented enum modes so an intuitive toggle no longer invalidates config and drops channel startup. Fixes #75390. Thanks @scottgl9.",
      "Agents/network: allow trusted web-search providers and configured model-provider hosts to work behind Surge/Clash/sing-box fake-IP DNS by accepting RFC 2544 and IPv6 ULA synthetic answers only for the request's scoped hostname, without broad private-network access. Refs #76530 and #76549. Thanks @zqchris.",
      "Providers: honor env-proxy settings for guarded provider model fetches when no explicit dispatcher policy is configured, preserving explicit transport overrides. Fixes #70453. (#72480) Thanks @mjamiv.",
      "Web fetch: add a default-off `tools.web.fetch.useTrustedEnvProxy` opt-in for proxy-only environments so `web_fetch` can let an operator-controlled HTTP(S) proxy resolve DNS while preserving default strict DNS pinning and hostname policy checks. Refs #58034 and #62560. Thanks @cosmicnet and @mjamiv.",
      "Feishu: accept and honor `channels.feishu.blockStreaming` at the top level and per account, while keeping the legacy default off so Feishu cards no longer reject documented config or silently drop block replies. Fixes #75555. Thanks @vincentkoc.",
      "Gateway/update: avoid `launchctl kickstart -k` immediately after fresh macOS update bootstraps, and unlink dangling global plugin-runtime symlinks during packaged postinstall and `doctor --fix` so upgrades no longer SIGTERM the newly booted Gateway or leave bundled plugin imports pointed at pruned `plugin-runtime-deps` trees. Completes #76261 and fixes #76466. (#76929)",
      "Google Chat: normalize custom Google auth transport headers before google-auth/gaxios interceptors run, restoring webhook token verification when certificate retrieval expects Fetch `Headers`. Fixes #76742. Thanks @donbowman.",
      "Doctor/plugins: reset stale `plugins.slots.memory` and `plugins.slots.contextEngine` references during `doctor --fix`, so cleanup of missing plugin config does not leave unrecoverable slot owners behind. Fixes #76550 and #76551. Thanks @vincentkoc.",
      "Docs/WhatsApp: merge the duplicate top-level `web` objects in the gateway channel config example so copy-pasted WhatsApp config keeps both `web.whatsapp` and reconnect settings. Fixes #76619. Thanks @WadydX.",
      "Plugins/Anthropic: expose Claude thinking profiles from the bundled provider-policy artifact so non-runtime callers keep Opus 4.7 `adaptive`, `xhigh`, and `max` instead of downgrading to `high`. Fixes #76779. Thanks @tomascupr and @iAbhi001.",
      "Plugins/tools: honor `tools.alsoAllow` as an optional plugin tool discovery hint without treating its internal allow-all default as permission to load every manifest-marked optional plugin tool. Fixes #76616.",
      "Discord/native commands: skip slash-command registration and cleanup REST calls when `channels.discord.commands.native=false`, letting low-power gateways start without waiting on disabled native-command lifecycle requests. Fixes #76202. Thanks @vincentkoc.",
      "CLI/plugins: reject unowned command roots such as `openclaw foo` before managed proxy startup and full plugin CLI runtime loading while preserving manifest-owned and CLI-metadata-owned plugin commands. Fixes #75287. Thanks @neilofneils404.",
      "CLI/message: skip local configured-channel plugin preload for explicit gateway-owned message actions, letting normalized CLI delivery delegate to the gateway without initializing channel runtime in the short-lived CLI process. Fixes #75477.",
      "Plugins/commands: normalize empty plugin command handler results and let Telegram native plugin commands send the empty-response fallback instead of throwing when a handler returns `undefined`. Fixes #74800. Thanks @vincentkoc.",
      "Plugins/tools: cold-load selected plugin tool registries when the active registry only has partial tool coverage, so wildcard-expanded allowlists no longer hide installed plugin tools from `tools.effective`. Fixes #76780. Thanks @lilesjtu.",
      "Plugins/tools: compare cached and runtime plugin tool name conflicts with normalized core tool names, so case variants of core tools are blocked instead of leaking duplicate tool registrations. Thanks @vincentkoc.",
      "Plugins/OpenRouter: advertise DeepSeek V4 thinking levels, including `xhigh` and `max`, through the runtime and lightweight provider policy surfaces so `/think` validation no longer rejects OpenRouter-routed DeepSeek V4 models. Fixes #74788. Thanks @vincentkoc.",
      "Status/sessions: ignore malformed non-string persisted session provider/model metadata instead of throwing while rendering status summaries. Fixes #76206. Thanks @vincentkoc.",
      "CLI/config: remove only the targeted array element for `openclaw config unset array[index]` instead of replaying the unset during config write and deleting the shifted next element. Fixes #76290. Thanks @SymbolStar and @vincentkoc.",
      "Plugins/voice-call: treat abnormal local Gateway close code 1006 as a standalone CLI fallback case, so `voicecall smoke` and related commands can still run the provider check path when the Gateway socket closes before returning a response.",
      "CLI/doctor: migrate legacy per-channel `streaming.progress` config into `streaming.preview.toolProgress`, so upgrades with stale Discord or Telegram streaming keys validate again instead of blocking plugin commands.",
      "Plugins/release: reject ClawHub code-plugin packages that contain TypeScript runtime entries without compiled `dist/*.js` output, and run package-local runtime-build checks during npm and ClawHub plugin release previews.",
      "Plugins/update: keep beta-installed OpenClaw package updates on the beta plugin channel even when config still says stable, so Discord and other externalized plugins update from compiled `@beta` packages instead of stale source-only `latest` artifacts.",
      "Agents/tools: stop treating `tools.deny: [\"write\"]` as an implicit `apply_patch` deny; operators who want to block patch writes should deny `apply_patch` or `group:fs` explicitly. Fixes #76749. (#76795) Thanks @Nek-12 and @hclsys.",
      "Plugins/release: verify published plugin npm tarballs expose compiled runtime entries after publish, catching TS-only package artifacts before release closeout. Thanks @vincentkoc.",
      "CLI/message: exit cleanly with a nonzero status when message-command plugin registry loading fails before dispatch, preventing `openclaw-message` children from staying alive after plugin load errors. Fixes #76168.",
      "Plugins/config: report configured plugins that are present but blocked by path-safety checks as blocked instead of stale `plugin not found` entries, and deduplicate repeated blocked-candidate warnings during discovery. Fixes #76144. Thanks @mayank6136.",
      "Gateway/update: recover an installed-but-unloaded macOS LaunchAgent after package updates, rerun Gateway health/version/channel readiness checks, and print restart, reinstall, and rollback guidance before reporting update failure. (#76790) Thanks @jonathanlindsay.",
      "Codex/runtime: preserve native Codex thread bindings across dynamic-tool reorder and no-tool maintenance turns, and project mirrored history when a legacy Codex run must start without a native binding, preventing follow-up requests from losing conversation context. (#76824) Thanks @VACInc.",
      "CLI/plugins: explain when a missing plugin command alias belongs to a bundled plugin that is disabled by default, including the `openclaw plugins enable <plugin>` repair command. (#76835)",
      "Gateway/Bonjour: auto-start LAN multicast discovery only on macOS hosts while preserving explicit `openclaw plugins enable bonjour` startup elsewhere, so Linux servers and containers that do not need LAN discovery avoid default mDNS probing and watchdog churn. Refs #74209.",
      "Gateway/macOS: stop `doctor` and LaunchAgent recovery from running `launchctl kickstart -k` after a fresh bootstrap, avoiding an immediate SIGTERM of the just-started gateway while still nudging already-loaded launchd jobs. Fixes #76261. Thanks @solosage1.",
      "Google Meet: route stateful CLI session commands through the gateway-owned runtime so joined realtime sessions survive after the starting CLI process exits. Fixes #76344. Thanks @coltonharris-wq.",
      "Memory/status: split builtin sqlite-vec store readiness from embedding-provider readiness in `memory status --deep` and `openclaw status`, so local vector-store failures no longer look like provider failures and provider failures no longer hide a healthy local vector store.",
      "Memory/core: yield between session transcript indexing batches during startup reindexing so large session corpora do not starve the gateway event loop. Fixes #76890. Thanks @bitloi.",
      "CLI/doctor: trust a ready gateway memory probe when CLI-side active memory backend resolution is unavailable, preventing false \"No active memory plugin is registered\" warnings for healthy runtime setups. Fixes #76792. Thanks @som-686.",
      "Memory/status: keep plain `openclaw memory status` and `openclaw memory status --json` on the cheap read-only path by reserving vector and embedding provider probes for `--deep` or `--index`. Fixes #76769. Thanks @daruire.",
      "Telegram: suppress stale same-session replies when a newer accepted message arrives before an older in-flight Telegram dispatch finalizes. Fixes #76642. Thanks @chinar-amrutkar.",
      "Auto-reply: suppress stale foreground replies when a newer same-session inbound message starts before an older in-flight dispatch finalizes. Fixes #76905. Thanks @MkDev11.",
      "Gateway/diagnostics: throttle repeated long-running active-work session warnings so healthy cron or subagent runs no longer print the same `recovery=none` line every heartbeat.",
      "Gateway/diagnostics: keep non-blocking active-work and transient event-loop max-spike liveness diagnostics out of the default gateway console while preserving structured diagnostic events and warnings for queued, stalled, and recovery-eligible work.",
      "Slack: collapse routine Socket Mode pong-timeout reconnects into one OpenClaw reconnect line and suppress the duplicate Slack SDK pong warning.",
      "Gateway/diagnostics: abort-drain embedded runs after an extended no-progress stall so a single dead session no longer leaves queued Discord/channel turns blocked behind repeated `recovery=none` liveness warnings.",
      "Plugins/ClawHub: accept the live artifact resolver `kind`/`sha256` field names alongside the typed `artifactKind`/`artifactSha256` form so `clawhub:` installs of npm-pack and legacy ZIP packages no longer miss downloadable artifacts. Thanks @romneyda.",
      "Doctor/session locks: remove fresh session write-lock files when their live PID can be read and proven to belong to a non-OpenClaw process, while preserving active or unknown owners. Fixes #76823. Thanks @renatomaluhy.",
      "Control UI/Sessions: avoid full `sessions.list` reloads for chat-turn `sessions.changed` payloads, so large session stores no longer add multi-second delays while chat responses are being delivered. (#76676) Thanks @VACInc.",
      "Gateway/watch: run `doctor --fix --non-interactive` once and retry when the dev Gateway child exits during startup, so stale local plugin install/config state does not leave the tmux watch session disappearing without a repair attempt.",
      "Doctor/Telegram: warn when selected Telegram quote replies can suppress `streaming.preview.toolProgress`, and document the `replyToMode` trade-off without changing runtime delivery. Fixes #73487. Thanks @GodsBoy.",
      "Channels/Discord: send a best-effort native typing cue immediately after an inbound DM is accepted, so slow pre-dispatch turns show Discord liveness before queueing, context assembly, model, or tool work starts. Fixes #76417. Thanks @mlopez14.",
      "Plugins/install: reject source-only TypeScript package installs and installed plugin packages that are missing compiled runtime output, so broken npm artifacts fail at install/discovery time instead of falling through jiti and surfacing later as unavailable providers. Fixes #76720.",
      "Plugins/config: deduplicate identical manifest compatibility diagnostics when an explicitly configured plugin overrides another discovered candidate, so external channel plugins do not print the same missing `channelConfigs` warning repeatedly during install and enable. Thanks @vincentkoc.",
      "Discord/status: honor explicit `messages.statusReactions.enabled: true` in tool-only guild channels so queued ack reactions can progress through thinking/done lifecycle reactions instead of stopping at the initial emoji. Thanks @Marvinthebored.",
      "Discord/native commands: compare Discord-normalized slash-command descriptions and localized descriptions during reconcile so CJK or multiline command text no longer triggers redundant startup PATCH bursts and rate-limit 429s. Fixes #76587. Thanks @zhengsx.",
      "Agents/OpenAI Codex: align ChatGPT Codex Responses replay with the Codex wire contract by preserving session cache identity while omitting prior Responses reasoning/message/function item IDs, so tool-call turns do not feed stale item identity into later Telegram replies. (#76832) Refs #76413. Thanks @MkDev11.",
      "Agents/OpenAI: omit Chat Completions `reasoning_effort` for `gpt-5.4-mini` only when function tools are present while preserving tool-free Chat and Responses reasoning support, preventing Telegram-routed fallback runs from hanging after OpenAI rejects tool payloads. Fixes #76176. Thanks @ThisIsAdilah and @chinar-amrutkar.",
      "Telegram: reuse the successful startup `getMe` probe for grammY polling startup and continue into `getUpdates` after recoverable `deleteWebhook` cleanup failures, reducing high-latency Bot API control-plane calls before long polling starts. Refs #76388. Thanks @jackiedepp.",
      "Gateway/diagnostics: merge session id/key aliases in diagnostic session state and activity tracking so completed runs no longer leave stale queued work behind that keeps liveness samples at warning level.",
      "Agents/models: forward model `maxTokens` as the default output-token limit for OpenAI-compatible Responses and Completions transports when no runtime override is provided, preventing provider defaults from silently truncating larger outputs. (#76645) Thanks @joeyfrasier.",
      "macOS CLI/onboarding: honor sensitive wizard text steps in `openclaw-mac wizard` with termios no-echo input, suppressing saved credential previews while preserving long API keys and gateway tokens. Fixes #76698. Thanks @anurag-bg-neu and @sallyom.",
      "Control UI/Skills: fix skill detail modal silently failing to open in all browsers by deferring `showModal()` until the dialog element is connected to the DOM; the Lit `ref` callback fired before connection causing a `DOMException: HTMLDialogElement.showModal: Dialog element is not connected` on every skill click. Thanks @nickmopen.",
      "fix(lsp): resolve Windows .cmd shims in LSP server spawning so npm-installed language servers (e.g. typescript-language-server) start correctly on Windows. Fixes #75352. Thanks @ElliotDrel.",
      "Gateway/update: run `doctor --non-interactive --fix` after Control UI global package updates before reporting success, so legacy config is migrated before the gateway restart. Thanks @stevenchouai.",
      "Gateway/cron: stop a lazy cron startup that loses a hot-reload race, preventing the old cron service from starting after reload has already replaced cron state.",
      "CLI/plugins: warn when npm plugin installs remain shadowed by a failing config-selected source and surface the repair path in `plugins doctor`. Thanks @LindalyX-Lee.",
      "Agents/Telegram: preserve explicit reply and quote context in embedded model prompts without letting quoted text drive prompt-local image loading. Fixes #76419. (#76659) Thanks @cheechnd.",
      "Active Memory: apply `setupGraceTimeoutMs` to the embedded recall runner as well as the outer prompt-build watchdog, so very-cold first recalls keep the configured setup grace end-to-end. (#74480) Thanks @volcano303.",
      "Channels/Feishu: cap how long the per-chat sequential queue blocks subsequent same-key tasks behind a single in-flight task (5 min default), so a single hung dispatch no longer leaves later same-chat messages in `queued` state until gateway restart; the stuck task continues running but is evicted from the blocking chain and a warning is logged. Fixes #70133. (#76687) Thanks @martingarramon and @bek91.",
      "Active Memory: skip scoped Telegram forum-topic conversation ids (containing `:`) when resolving the embedded recall run channel, falling back to `messageProvider` instead, so Active Memory no longer throws a bundled-plugin dirName validation error in forum-topic sessions. Fixes #76704.",
      "Agents/tools: defer automatic PDF model/auth resolution until the PDF tool is used, keeping agent-turn tool prep from probing auth profiles on messages without PDFs while preserving explicit PDF model registration. Fixes #76644. Thanks @hclsys.",
      "CLI/config: keep JSON dry-run patches validating touched channel configuration against bundled channel schemas even when the patch only contains SecretRef objects.",
      "Plugins/tools: keep disabled bundled tool plugins out of explicit runtime allowlist ownership and fall back from loaded-but-empty channel registries to tool-bearing plugin registries, so Active Memory can use bundled `memory-core` search/get tools even when `memory-lancedb` is disabled. Fixes #76603. Thanks @jwong-art.",
      "Plugins/install: run `npm install` from the managed npm-root manifest so installing one `@openclaw/*` plugin preserves already installed sibling plugins instead of pruning them. Fixes #76571. (#76602) Thanks @byungskers and @crpol.",
      "Plugins/context-engine: include the selected `plugins.slots.contextEngine` plugin in the gateway startup load plan so external context-engine plugins without `activation.onStartup` in their manifest are loaded before any agent turn resolves the active engine; prevents the \"Context engine X is not registered; falling back to default engine legacy\" warning after gateway startup. Fixes #76576. Thanks @hclsys.",
      "Plugins/tools: restore on-demand registry load for path-based plugins (origin \"config\") so tool factories registered via `plugins.load.paths` are resolved at agent request time when no pre-warmed channel registry is present; prevents \"unknown method\" errors after gateway startup. Fixes #76598. Thanks @hclsys.",
      "Plugins/hooks: include explicitly enabled hook-capable plugins in the Gateway startup runtime scope so embedded PI runs can see their `before_prompt_build` and `agent_end` hooks. Fixes #76649. Thanks @wwf3045 and @MkDev11.",
      "Plugins/OpenCode: expose Claude thinking profiles through the lightweight provider policy surface so directive and session validation keep `xhigh`, `adaptive`, and `max` for `opencode/claude-opus-4-7` instead of remapping `xhigh` to `high`. Fixes #76648. Thanks @aaajiao.",
      "Channels/QQ Bot: resolve structured `clientSecret` SecretRefs before QQ token exchange, expose the QQ Bot secret contract to secrets tooling, and reject legacy `secretref:/...` marker strings. (#74772) Thanks @xialonglee.",
      "Agents: keep active streamed provider replies alive by refreshing guarded fetch timeouts on raw body chunks and surface true prompt stream timeouts as explicit errors instead of partial assistant fragments. Fixes #76307. (#76633) Thanks @MkDev11.",
      "Plugins/externalization: keep official ACPX, Google Chat, and LINE install specs on production package names, leaving beta-tag probing to the explicit OpenClaw beta update channel. Thanks @vincentkoc.",
      "CLI/doctor: keep missing-plugin repair from overriding official catalog metadata with runtime fallbacks, so ACPX repairs preserve the official npm spec during the externalization rollout. Thanks @vincentkoc.",
      "CLI/doctor: match stale bundled-plugin install records by exact parsed package name so doctor does not remove external npm or ClawHub records that only share an OpenClaw package-name prefix.",
      "Plugins/catalog: preserve ClawHub install specs when generating the packaged channel catalog so future storepack-first channel plugins keep their remote source instead of becoming npm-only. Thanks @vincentkoc.",
      "Plugins/catalog: pin bare npm specs from prerelease external channel catalog entries to the catalog entry version, so beta catalogs do not silently install the latest stable package.",
      "Plugins/update: treat catalog-matched official npm updates and OpenClaw-authored externalized-bundled npm bridges as trusted official installs so launch-code plugins can update or migrate out of the bundled tree without scanner false positives. Thanks @vincentkoc.",
      "Plugins/onboarding: fall back from ClawHub to npm only for missing package/version errors, keeping integrity and verification failures fail-closed during storepack rollout. Thanks @vincentkoc.",
      "CLI/onboarding: mask credential inputs (model-auth provider API keys, gateway tokens and passwords, web-search provider keys, and skill env-var values) in the interactive `openclaw onboard` wizard so pasted secrets no longer echo into terminal scrollback, `Start-Transcript` logs, or screenshots; existing tokens/passwords are preserved through a masked-preview confirm step before the sensitive prompt. Thanks @anurag-bg-neu.",
      "Control UI/Talk: fix Talk (OpenAI Realtime WebRTC) CORS failure by stripping server-side-only attribution headers (`originator`, `version`, `User-Agent`) from browser offer headers; `api.openai.com/v1/realtime/calls` only allows `authorization` and `content-type` in its CORS preflight, so forwarding these headers caused the browser SDP exchange to fail. Fixes #76435. Thanks @hclsys.",
      "Chat delivery: make `/verbose on|full|off` changes affect subsequent tool-use chat bubbles again, including channels with draft preview tool progress enabled, while preserving one-shot verbose directives.",
      "CLI/logs: auto-reconnect `openclaw logs --follow` on transient gateway disconnects with bounded backoff, stderr retry warnings, `[logs] gateway reconnected` recovery notices, and JSON `notice` records while still exiting immediately on non-recoverable auth or configuration errors. Fixes #74782. (#75059, #75372) Thanks @shashank-poola and @romneyda.",
      "Codex/WhatsApp: keep the `message` dynamic tool available when Codex source replies are configured for message-tool delivery, so coding-profile chat agents do not complete turns privately without a visible channel reply. Fixes #76660. (#76663) Thanks @VishalJ99.",
      "Codex/heartbeat: send heartbeat-specific initiative guidance through Codex turn-scoped collaboration-mode instructions, keeping ordinary message-tool chat turns in Default mode without heartbeat prompt leakage. Thanks @pashpashpash.",
      "Plugins/onboarding: trust optional official plugin and web-search installs selected from the official catalog so npm security scanning treats them like other source-linked official install paths. Thanks @vincentkoc.",
      "Agents/web_search: keep installed runtime provider discovery enabled when web-search metadata is missing, so externally installed official providers such as Brave remain visible to agent and cron turns instead of falling back to bundled-only lookup. Fixes #76626. Thanks @amknight.",
      "Tests/plugins: expose the Discord npm onboarding Docker lane as a package script and assert planned Docker lanes point at real scripts, so external-channel onboarding coverage can actually run. Thanks @vincentkoc.",
      "Plugins/ClawHub: explain unreleased ClawHub plugin artifacts as a rollout-state fallback to `npm:` installs instead of leaking raw archive metadata fields. Thanks @vincentkoc.",
      "Tests/onboarding: assert packaged channel onboarding leaves `openclaw channels status --json` and plain `openclaw status` showing the configured channel, covering the empty Channels table regression path. Thanks @vincentkoc.",
      "Microsoft Teams: persist sent-message markers across Gateway restarts so follow-up replies to recent bot messages keep resolving the original conversation instead of dropping out after restart, with marker TTLs preserved on best-effort recovery. (#75585) Thanks @amknight.",
      "Matrix: persist pending approval reaction targets across Gateway restarts so room approvers can still approve or deny outstanding prompts after OpenClaw comes back online. (#75586) Thanks @amknight.",
      "Channels/onboarding: map third-party official WeCom and Yuanbao catalog entries to their published plugin ids so npm installs pass expected-plugin validation. Thanks @vincentkoc.",
      "Plugin SDK: restore the Mattermost and Matrix compatibility subpaths used by the pinned Yuanbao channel package so external installs can module-load after npm install. Thanks @vincentkoc.",
      "Plugins/install: keep managed npm-root security scans from treating earlier plugin `openclaw` peer links as failures, so one external plugin install cannot poison later official npm installs. Thanks @vincentkoc.",
      "Memory LanceDB: allow installed-but-unconfigured plugin metadata to load so onboarding and setup flows can prompt for embedding config instead of failing the plugin registry first. Thanks @vincentkoc.",
      "CLI/plugins: keep `plugins enable` and `plugins disable` from creating unconfigured channel config sections, so channel plugins with required setup fields no longer fail validation during lifecycle probes. Thanks @vincentkoc.",
      "Doctor/config: set `messages.groupChat.visibleReplies: \"message_tool\"` during compatibility repair for configured-channel configs that omit a visible-reply policy, so upgrades can persist the intended tool-only group/channel reply default. Thanks @kagura-agent.",
      "Agents/sessions: keep delayed `sessions_send` A2A replies alive after soft wait-window timeouts, while preserving terminal run timeouts and avoiding stale target replies in requester sessions. Fixes #76443. Thanks @ryswork1993 and @vincentkoc.",
      "TUI/Control UI: fix `/think` command showing only base thinking levels when the active session uses a different model from the default, so provider-specific levels like DeepSeek V4 Pro's `xhigh` and `max` are now visible and selectable. Fixes #76482. Thanks @amknight.",
      "CLI/sessions: keep intentional empty agent replies silent after tool-delivered channel output, instead of surfacing a misleading \"No reply from agent.\" fallback. Thanks @vincentkoc.",
      "Config/doctor: cap `.clobbered.*` forensic snapshots per config path and serialize snapshot writes so repeated `doctor --fix` recovery loops cannot flood the config directory. Fixes #76454; carries forward #65649. Thanks @JUSTICEESSIELP, @rsnow, and @vincentkoc.",
      "Feishu: suppress duplicate text when replies send native voice media, preserve captions for ordinary audio files, and send fallback text plus attachment links when `audioAsVoice` transcode/upload fallback produces a generic file.",
      "TTS/plugins: activate configured and inherited speech provider plugins during Gateway startup, so Microsoft and Local CLI voice replies work immediately after persona selection instead of staying invisible in the startup plugin set. Fixes #76481. Thanks @amknight.",
      "Feishu: keep packaged Feishu startup from bundling the Lark SDK's ESM `__dirname` path by loading the SDK as a plugin-local runtime dependency. Fixes #76291 and #76494. (#76392) Thanks @zqchris.",
      "Plugins/npm: build package-local runtime dist files for publishable plugins and stop listing root-package-excluded plugin sidecars in the core package metadata, so npm plugin installs such as `@openclaw/diffs` and `@openclaw/discord` no longer publish source-only runtime payloads. Fixes #76426. Thanks @PrinceOfEgypt.",
      "Channels/secrets: resolve SecretRef-backed channel credentials through external plugin secret contracts after the plugin split, covering runtime startup, target discovery, webhook auth, disabled-account enumeration, and late-bound web_search config. Fixes #76371. (#76449) Thanks @joshavant and @neeravmakwana.",
      "Docker/Gateway: pass Docker setup `.env` values into gateway and CLI containers and preserve exec SecretRef `passEnv` keys in managed service plans, so 1Password Connect-backed Discord tokens keep resolving after doctor or plugin repair. Thanks @vincentkoc.",
      "Control UI/WebChat: explain compaction boundaries in chat history and link directly to session checkpoint controls so pre-compaction turns no longer look silently lost after refresh. Fixes #76415. Thanks @BunsDev.",
      "Agents/compaction: add an optional bundled compaction notifier hook and retry once from the compacted transcript when automatic compaction leaves a turn without a final visible reply. (#76651) Thanks @simplyclever914.",
      "Agents/incomplete-turn: detect and surface a warning when the agent's final text after a tool-call chain is silently dropped because the post-tool assistant response was never produced, instead of completing the turn with only the pre-tool analysis text. Fixes #76477. Thanks @amknight.",
      "Channels/WhatsApp: attach native outbound mention metadata for group text and media captions by resolving `@+<digits>` and `@<digits>` tokens against WhatsApp participant data, including LID groups. Fixes #39879; carries forward #56863. Thanks @kengi1437, @joe2643, and @fridayck.",
      "Channels/WhatsApp: require outbound mention tokens to end at a word boundary so phone-number prefixes inside longer strings no longer trigger hidden native mentions.",
      "Plugins/uninstall: remove empty managed git install parent directories after deleting cloned plugin repos and cover npm/git uninstall residue in Docker plugin lifecycle tests. Thanks @vincentkoc.",
      "Plugins/install: resolve bare official external plugin IDs such as `brave` through the official catalog when no bundled source is available, so packaged installs fetch the intended scoped npm package instead of an unrelated unscoped package. Fixes #76373. Thanks @bek91 and @vincentkoc.",
      "Plugins/install: require OpenClaw-owned install provenance before granting official npm plugin scanner trust, so direct npm package names no longer bypass launch-code scanning while catalog, onboarding, and doctor installs stay trusted. Thanks @fede-kamel and @vincentkoc.",
      "Network proxy: preserve target TLS hostname validation for Node HTTPS requests routed through the managed HTTP proxy, so Discord-style CONNECT traffic no longer validates certificates against the local proxy host. Fixes #74809. (#76442) Thanks @jesse-merhi and @abnershang.",
      "Gateway/sessions: keep `sessions.list` rows lightweight by bounding title/preview hydration to transcript head/tail reads and caching manifest model-id normalization plus setup fallback metadata against the active plugin snapshot. Thanks @vincentkoc and @rolandrscheel.",
      "Gateway/performance: cache per-run verbose-level session reads, skip a redundant `lsof` scan in `gateway --force` when no listener was killed, and make the Gateway startup benchmark print usage for `--help`.",
      "Gateway/sessions: keep agent runtime metadata on lightweight `sessions.list` rows and skip per-row transcript usage fallback, display model inference, and plugin projection, avoiding identity loss and event-loop stalls in large session stores. Thanks @Marvinthebored and @vincentkoc.",
      "Gateway/models: keep read-only `models.list` fallbacks on persisted/current metadata, configured rows, registry-compatible fallbacks, and static auth checks while preserving full-catalog image attachment capability checks. Fixes #76382; refs #76360 and #75707. Thanks @trojy13, @RayWoo, @AnathemaOfficial, @Marvinthebored, and @vincentkoc.",
      "CLI/plugins: reject missing plugin ids before config writes in `plugins enable` and `plugins disable` so a typo no longer persists a stale config entry. (#73554) Thanks @ai-hpc.",
      "Agents/sessions: preserve delivered trailing assistant replies during session-file repair so Telegram/WebChat history is not rewritten to drop already-delivered responses. Fixes #76329. Thanks @obviyus.",
      "Gateway/chat history: preserve oversized transcript turns as explicit omitted-message placeholders while avoiding large JSONL parse stalls. Thanks @Marvinthebored and @vincentkoc.",
      "CLI/doctor: load the configured memory-slot plugin when resolving memory diagnostics so bundled `memory-core` no longer triggers a false “no active memory plugin” warning on standalone `doctor` / `status` runs. Fixes #76367. Thanks @neeravmakwana.",
      "Gateway: preserve stack diagnostics when `chat.send` or agent attachment parsing/staging fails, improving image-send failure triage. Refs #63432. (#75135) Thanks @keen0206.",
      "Agents/idle-timeout: add a cost-runaway breaker to the outer embedded-run retry loop that halts further attempts after 5 consecutive idle timeouts without completed model progress, so a wedged provider can no longer fan paid model calls out across the same run; completed text or tool-call progress resets the breaker, but partial tool-argument token dribbles do not. Fixes #76293. Thanks @ThePuma312.",
      "Heartbeats/Codex: align structured heartbeat prompts with actual `heartbeat_respond` tool availability, stop sending legacy `HEARTBEAT_OK` when the tool exists, and keep tool-disabled commitment check-ins on the legacy ack path. Thanks @pashpashpash and @vincentkoc.",
      "Agent runtimes: fail explicit plugin runtime selections honestly when the requested harness is unavailable instead of silently falling back to the embedded PI runtime. Thanks @pashpashpash.",
      "Telegram: log inbound gateway watch messages before dispatch so watch-mode diagnostics include incoming message summaries. Thanks @rubencu.",
      "Maintainer workflow: push prepared PR heads through GitHub's verified commit API by default and require an explicit override before git-protocol pushes can publish unsigned commits. Thanks @BunsDev.",
      "Feishu: resolve setup/status probes through the selected/default account so multi-account configs with account-scoped app credentials show as configured and probeable. Fixes #72930. Thanks @brokemac79.",
      "Gateway/responses: emit every client tool call from `/v1/responses` JSON and SSE responses when the agent invokes multiple client tools in a single turn, so multi-tool plans, graph orchestration calls, and similar batched flows no longer drop every call but the last. Fixes #52288. Thanks @CharZhou and @bonelli.",
      "Gateway/agent: enforce `session.sendPolicy=deny` on gateway agent requests only when `deliver: true`, so non-delivery smoke checks and internal agent runs are no longer rejected with `send blocked by session policy` while outbound delivery remains gated. Fixes #73381. Thanks @wenxu007.",
      "Slack/reactions: treat missing no_reaction remove responses as idempotent success and route own-reaction cleanup through the remove helper, so concurrent cleanup no longer surfaces Slack race errors. Fixes #50733. (#76304) Thanks @martingarramon and @Hollychou924.",
      "Feishu: include media `file_key` and `image_key` values in inbound dedupe so reused message IDs still process distinct media attachments while true retries stay suppressed. Fixes #75057. Thanks @SymbolStar.",
      "Control UI/Gateway: avoid full session-list reloads for locally applied message-phase session updates, carry known session keys through transcript-file update events, and defer media provider listing when explicit generation model config is present. Refs #76236, #76203, #76188, #76107, and #76166. Thanks @BunsDev.",
      "Install/update: prune the obsolete `plugin-runtime-deps` state directory during packaged postinstall so upgrades from pre-2026.5.2 releases reclaim old bundled-plugin dependency caches without touching external plugin installs.",
      "Auto-reply/queue: treat reset-triggered `/new` and `/reset` turns as interrupt runs across active-run queue handling, so steer/followup modes cannot delay a fresh session behind existing work. Fixes #74093. (#74144) Thanks @ruji9527 and @yelog.",
      "Cron: persist repaired startup runtime state back to `jobs-state.json` so a valid future `nextRunAtMs` with missing `updatedAtMs` no longer triggers repeated external health-check repairs after Gateway restart. Fixes #76461. Thanks @vincentkoc.",
      "Cron: preserve manual `cron.run` IDs in `cron.runs` history so manual run acknowledgements can be correlated with finished run records. Fixes #76276.",
      "Plugin SDK/cron: expose `sessionTarget` and `agentId` as top-level fields on `cron_changed` hook events so downstream plugins can route cron completion results without digging into the optional job snapshot. Thanks @amknight.",
      "CLI/devices: request `operator.admin` for `openclaw devices approve <requestId>` only when the exact pending device request would mint or inherit admin-scoped operator access, while keeping lower-scope approvals on the pairing scope.",
      "Memory/embedding: broaden the embedding reindex retry classifier to include transient socket-layer errors (`fetch failed`, `ECONNRESET`, `socket hang up`, `UND_ERR_*`, `closed`) so memory reindex survives provider network hiccups instead of aborting mid-run. Related #56815, #44166. (#76311) Thanks @buyitsydney.",
      "Memory/sessions: keep rotated and deleted transcripts (`.jsonl.reset.<iso>` / `.jsonl.deleted.<iso>`) searchable by indexing archive content, mapping archive hits back to live transcript stems, emitting transcript update events on archive rotation, and bypassing incremental delta thresholds for one-shot archive mutations while keeping backups and compaction checkpoints opaque. Refs #56131. Thanks @buyitsydney.",
      "Memory/search: keep sqlite-vec optional in packaged installs and point missing-extension recovery at the valid `agents.defaults.memorySearch.store.vector.extensionPath` setting. Thanks @willemsej and @vincentkoc.",
      "Gateway: keep directly requested plugin tools invokable under restrictive tool profiles while preserving explicit deny lists and the HTTP safety deny list, preventing catalog/invoke mismatches that surface as \"Tool not available\". Thanks @BunsDev.",
      "Gateway/update: allow beta binaries to refresh gateway services when the config was last written by the matching stable release version, avoiding false newer-config downgrade blocks during beta channel updates.",
      "Channels: keep Matrix and Mattermost bundled in the core package instead of advertising external npm installs before those channels are cut over. Thanks @vincentkoc.",
      "Bonjour: disable LAN mDNS advertising after a repeated stuck-announcing recovery instead of repeatedly restarting ciao and saturating the Gateway event loop.",
      "Channels/setup: label installable channel picker hints as remote npm installs and hide remote install hints for bundled plugins that already ship with OpenClaw.",
      "CLI/update: refuse package updates launched from the active gateway process tree before stopping the managed Gateway service, avoiding self-terminated in-lane updates that leave old Gateway code running. Fixes #75691. (#75819) Thanks @ai-hpc.",
      "CLI/plugins: stop treating the non-plugin `auth` command root as a bundled plugin id, so restrictive `plugins.allow` configs no longer tell users to add stale `auth` plugin entries.",
      "Doctor/plugins: update configured plugin installs whose stale manifests still declare channels without `channelConfigs`, so beta upgrades repair old Discord-style package payloads during `doctor --fix`.",
      "Doctor/plugins: repair configured external plugin installs whose persisted install record points at a missing package directory, so upgrades reconcile phantom npm metadata before plugin runtime validation. Thanks @vincentkoc.",
      "Active Memory: keep non-empty `memory_search` results from being fast-failed as empty when debug telemetry reports zero hits.",
      "Active Memory: preserve the target agent context when building embedded recall plugin tools so `memory_search` and `memory_get` stay available for explicit recall sessions. Fixes #76343. Thanks @Countermarch.",
      "Plugins/externalization: repair missing configured plugin installs from npm by default, reserve ClawHub downloads for explicit `clawhubSpec` metadata, and cover agent-runtime/env-selected plugin repair. Thanks @vincentkoc.",
      "Plugins/install: allow official catalog-matched npm channel plugins such as Feishu to pass the trusted install scanner path while keeping spoofed package names blocked. Thanks @vincentkoc.",
      "Tools/llm-task: keep JSON-only embedded model runs from tripping inherited tool allowlists when tools are intentionally disabled, while preserving runtime `toolsAllow` failures. Fixes #74019. Thanks @amknight.",
      "Tools/profiles: make `tools.profile: \"full\"` grant all tools including optional plugin tools such as browser, so the full profile no longer silently drops plugin-provided tools that require an explicit allowlist entry. Fixes #76507. Thanks @amknight.",
      "Feishu: keep timeout env parsing separate from the HTTP client wrapper so package security scans no longer report a false env-harvesting hit during install. Thanks @vincentkoc.",
      "Upgrade/config: validate configured web-search providers and statically suppressed model/provider pairs against the active plugin set at config load, so stale plugin state fails loud before runtime fallback.",
      "Status/update: resolve beta update-channel checks from the installed version when config still says `stable`, and let `status --deep` reuse live gateway channel credential state instead of warning on command-path-only token misses.",
      "Doctor/plugins: preserve unmanaged third-party plugin `node_modules` during `doctor --fix`, while still pruning OpenClaw-managed runtime dependency caches.",
      "Gateway/restart: add `openclaw gateway restart --force` and `--wait <duration>`, log active task run IDs before restart deferral timers, and report timeout restarts as explicit forced restarts.",
      "Gateway/restart: align `gateway.restart.safe` preflight with scheduled restart deferral by counting only active restart blockers (running non-ended tasks), so queued task records no longer keep \"safe\" restarts deferred indefinitely. (#76923) Thanks @NikolaFC.",
      "Discord: persist slash-command deploy hashes across process restarts so unchanged command sets skip redeploy and avoid restart-loop 429s.",
      "Providers/LM Studio: normalize binary `off`/`on` reasoning metadata from Gemma 4 and other local models to LM Studio's accepted OpenAI-compatible `reasoning_effort` values.",
      "Plugins/externalization: keep official external install docs, update examples, and live Codex npm checks on default npm tags instead of `@beta`. Thanks @vincentkoc.",
      "Plugins/externalization: keep ACPX, Google Chat, and LINE publishable plugin dist trees out of the core npm package file list.",
      "Plugins/ClawHub: fall back to version metadata when the artifact resolver route is missing and keep the Docker ClawHub fixture aligned with npm-pack artifact resolution, avoiding false version-not-found failures during plugin install validation. Thanks @vincentkoc.",
      "Providers/openai-codex: honor `providerConfig.baseUrl` in the dynamic-model synthesis fallback so codex providers configured with a custom upstream (for example a forwarding proxy) no longer silently bypass the configured URL when the registry has no template row to clone for the requested model id. (#76428) Thanks @arniesaha.",
      "Status/channels: show configured channels in `openclaw status` and config-only `openclaw channels status` output even when the Gateway is unreachable, avoiding empty Channels tables on WSL and other no-Gateway paths. Thanks @vincentkoc.",
      "Agents/main-session: keep pending final delivery markers until the final reply is actually routed or queued, so restart and heartbeat recovery can retry failed delivery. Refs #65037. (#75280) Thanks @MertBasar0.",
      "Plugins/ClawHub: explain unavailable explicit ClawHub ClawPack artifact downloads with a temporary npm install hint while ClawHub artifact routing rolls out. Thanks @vincentkoc.",
      "Media: accept home-relative `MEDIA:~/...` attachment paths while preserving existing file-read policy, traversal checks, and media type validation. Fixes #73796. Thanks @fabkury.",
      "Onboarding/search: install official external web-search plugins such as Brave before saving provider config, and make doctor repair reconcile selected external search providers whose npm payload is missing. Thanks @vincentkoc.",
      "Plugins/externalization: add official npm-first catalogs for externalized channel, provider, and generic plugins, keep unpublished ACPX/Google Chat/LINE bundled, and make missing-plugin repair honor npm-first metadata while ClawHub pack files roll out. Thanks @vincentkoc.",
      "Plugins/update: detect tracked plugin install records whose package directories disappeared during `openclaw update`, reinstall them before normal plugin updates, and fail the update if any install record still points at missing disk payloads.",
      "Plugins/registry: hash manifest and package metadata when validating persisted plugin registries so fast same-size rewrites cannot leave stale plugin metadata trusted.",
      "Plugins/registry: canonicalize install-record provenance paths before trust diagnostics, so npm plugins installed under symlinked temp/state roots no longer warn as untracked local code.",
      "Plugins/install: let official external Discord reinstall requests pass the invalid-config guard and run stale-channel repair, so upgrades can recover missing external plugin state directly.",
      "CLI/infer: reject local `codex/*` one-shot model probes before simple-completion dispatch and point operators at the Codex app-server runtime path instead of ending with an empty-output error.",
      "Agents/sessions: preserve terminal lifecycle state when final run metadata persists from a stale in-memory snapshot, preventing `main` sessions from staying stuck as running after completed or timed-out turns.",
      "Gateway/CLI: make `openclaw gateway start` repair stale managed service definitions that point at old OpenClaw versions, missing binaries, or temporary installer paths before starting.",
      "Heartbeat/scheduler: make heartbeat phase scheduling active-hours-aware so the scheduler seeks forward to the first in-window phase slot instead of arming timers for quiet-hours slots and relying solely on the runtime guard. Non-UTC `activeHours.timezone` values (e.g. `Asia/Shanghai`) now correctly influence when the next heartbeat timer fires, avoiding wasted quiet-hours ticks and long dormant gaps after gateway restarts. Fixes #75487. Thanks @amknight.",
      "Providers/Arcee AI: mark Trinity Large Thinking as tool-incompatible so main-session runs use the same text-only request shape that made subagent runs recover, avoiding the remaining main-session response-shape mismatch after the #62848 transport failover fix. Fixes #62851 and #62847; carries forward #62848. Thanks @Adam-Researchh.",
      "Plugins/SDK: harden run-scoped plugin context cleanup so finalized workflow runs do not leak per-run state. Thanks @100yenadmin.",
      "Plugins/SDK: keep stale async registry cleanup from clearing restored plugin run context and scheduler state after a plugin registry is reactivated. (#75600) Thanks @100yenadmin.",
      "Plugins/SDK: preserve restored plugin scheduler state when earlier delayed replacement cleanup finishes after reactivation. Thanks @100yenadmin.",
      "Status: show the `openai-codex` OAuth profile for `openai/gpt-*` sessions running through the native Codex runtime instead of reporting auth as unknown. (#76197) Thanks @mbelinky.",
      "Gateway: avoid repeated plugin tool descriptor config hashing so large runtime configs do not block reply startup and trigger reconnect/timeouts. (#75944) Thanks @joshavant.",
      "Plugins/externalization: keep diagnostics ClawHub packages and persisted bundled-plugin relocation on npm-first install metadata for launch, and omit Discord from the core package now that its external package is published. Thanks @vincentkoc.",
      "Setup/TUI: bound the Terminal hatch bootstrap run so a stalled provider request times out instead of leaving first-run hatching stuck behind the watchdog. (#76241) Thanks @joshavant.",
      "Cron/CLI runtimes: route isolated cron jobs through configured per-agent CLI runtimes only when the resolved model provider is compatible, so OpenAI job overrides no longer inherit a mismatched Claude CLI backend. Thanks @vishutdhar.",
      "Plugins/Codex: allow the official npm Codex plugin to install without the unsafe-install override, keep `/codex` command ownership, and cover the real npm Docker live path through managed `.openclaw/npm` dependencies plus uninstall failure proof.",
      "Gateway/status: add concrete service, config, listener-owner, and log collection next steps when gateway probes fail and Bonjour finds no local gateway, so frozen or port-conflict reports include the data needed for root-cause triage. Refs #49012. Thanks @vincentkoc.",
      "Codex harness: forward OpenClaw workspace bootstrap files such as `SOUL.md` through native Codex config instructions while leaving `AGENTS.md` to Codex project-doc discovery. Fixes #76273. Thanks @zknicker.",
      "Parallels/Windows update smoke: escape the stale post-swap import regex in the generated PowerShell script so expected `ERR_MODULE_NOT_FOUND` update handoffs continue to post-update health checks. (#75315)",
      "Slack: allow draft preview streaming in top-level DMs when `replyToMode` is `off` while keeping Slack native streaming and assistant thread status gated on reply threads. Fixes #56480. (#56544) Thanks @HangGlidersRule.",
      "Control UI/chat: remove the delete-confirm popover outside-click listener on every dismiss path, so Cancel, Delete, outside clicks, and same-button toggles no longer leave stale document listeners behind. Refs #75590 and #69982. Thanks @Ricardo-M-L.",
      "Memory-core: treat exhausted file watcher limits as non-fatal for builtin memory auto-sync while preserving fatal handling for unrelated disk-full errors. (#73357) Thanks @solodmd.",
      "Providers/Ollama: restore catalog context-window forwarding as `num_ctx` for native `/api/chat` requests; fixes tool selection and context truncation regressions on models with catalog entries (qwen3, llama3, gemma3, …) when no explicit `params.num_ctx` was configured. Fixes #76117. (#76181) Thanks @openperf.",
      "Plugins/install: pin npm plugin installs to the verified resolved version and reject package-lock version or integrity drift, so mutable tags cannot race integrity checks into accepting a different artifact. Thanks @Lucenx9.",
      "Exec approvals: preserve trusted elevated defaults across approved command follow-up runs so same-turn elevated `on`/`ask` commands request a fresh approval instead of reporting elevated as unavailable. Fixes #75832. Thanks @jameyedwards and @bitloi.",
      "Plugins/providers: preserve scoped cold-load fallback for enabled external manifest-contract capability providers missing from the startup registry, so providers such as Fish Audio can resolve on request without requiring `activation.onStartup` for correctness. (#76536) Thanks @Conan-Scott.",
      "Gateway/update: carry `continuationMessage` from `update.run` into successful restart sentinels so session-scoped self-updates can resume one follow-up turn after the Gateway restarts. Refs #71178. (#74362) Thanks @100menotu001, @HeilbronAILabs, and @artnking.",
      "Agents/fallback: suppress duplicate current-turn user-message transcript writes after embedded fallback retries while still sending the retry prompt to the model. (#63696) Thanks @dashhuang.",
      "Channels/Telegram: force a fresh final message when a visible non-preview bubble (tool/block/error) was delivered after the active answer preview, so multi-step assistant replies no longer end up with the final answer above intermediate output. Fixes #76529. Thanks @jack-stormentswe.",
      "Channels/Telegram: require an observed Telegram send, edit, or fallback before treating a forum-topic final as delivered, so final replies generated in transcript no longer disappear from Telegram topics. Fixes #76554. (#76764) Thanks @bubucilo and @obviyus.",
      "Plugins/update: keep externalized bundled npm bridge updates on the normal plugin security scanner path instead of granting source-linked official trust without artifact provenance. (#76765) Thanks @Lucenx9.",
      "Agents/reply context: label replied-to messages as the current user message target in model-visible metadata, so short replies are grounded to their explicit reply target instead of nearby chat history. (#76817) Thanks @obviyus.",
      "Doctor/plugins: install configured missing official plugins such as Discord and Brave during doctor/update repair, auto-enable repaired provider plugins, preserve config when a download fails, and stop auto-enable from inventing plugin entries when no manifest declares a configured channel. Fixes #76872. Thanks @jack-stormentswe.",
      "Agents/CLI runner: bridge in-flight assistant agent events into the shared `onPartialReply` callback so CLI backends (Anthropic Max plan via `claude-cli`, Codex CLI, etc.) drive the same Telegram and channel preview path the native API path uses, instead of silently delivering only the final assembled message. Fixes #76869. Thanks @jack-stormentswe."
    ]
  },
  {
    "version": "2026.5.2",
    "date": "2026.5.2",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652",
    "features": [
      {
        "title": "External plugin installation now covers diagnostics, onboarding, doctor rep...",
        "description": "External plugin installation now covers diagnostics, onboarding, doctor repair, channel setup, install/update records, and artifact metadata while keeping bare package installs on npm for the first cutover. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Gateway startup, session listing, task maintenance, prompt prep, plugin loa...",
        "description": "Gateway startup, session listing, task maintenance, prompt prep, plugin loading, and filesystem hot paths get targeted cache and fanout reductions for large or plugin-heavy installs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Control UI and WebChat reliability improves across Sessions, Cron, long-run...",
        "description": "Control UI and WebChat reliability improves across Sessions, Cron, long-running Gateway WebSockets, grouped-message width, slash-command feedback, iOS PWA bounds, selection contrast, and Talk diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Channel and provider fixes cover Telegram topic commands and networking, Di...",
        "description": "Channel and provider fixes cover Telegram topic commands and networking, Discord delivery and startup edge cases, OpenAI-compatible TTS/Realtime, OpenRouter/DeepSeek replay, Anthropic-compatible streaming, Brave/SearXNG/Firecrawl web search, and voice-call routing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Gateway/startup",
        "description": "skip plugin-backed auth-profile overlays during startup secrets preflight, reducing gateway readiness latency while keeping reload and OAuth recovery paths overlay-capable. (#68327) Thanks @JIRBOY.",
        "href": "https://github.com/openclaw/openclaw/pull/68327"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "make diagnostics, onboarding, doctor repair, and channel setup carry ClawPack metadata through install records while keeping explicit `clawhub:` installs on ClawHub and bare package installs on npm for the launch cutover. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/runtime",
        "description": "scope broad runtime preloads to the effective plugin ids derived from config, startup planning, configured channels, slots, and auto-enable rules instead of importing every discoverable plugin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Agents/runtime",
        "description": "reuse the startup-loaded plugin registry for request-time providers, tools, channel actions, web/capability/memory/migration helpers, and memoized provider extra-params so stable embedded-run inputs no longer repeat plugin registry resolution while model-specific transport hook patches stay isolated. Thanks @DmitryPogodaev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Agents/runtime",
        "description": "memoize transcript replay-policy resolution for stable config and process-env runs while preserving custom-env provider hook behavior. Thanks @DmitryPogodaev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Infra/path-guards",
        "description": "add a fast path for canonical absolute POSIX containment checks, avoiding repeated `path.resolve` and `path.relative` work in hot filesystem walkers. Refs #75895, #75575, and #68782. Thanks @Enderfga.",
        "href": "https://github.com/openclaw/openclaw/issues/75895"
      },
      {
        "title": "Tools",
        "description": "add a platform-level tool descriptor planner for descriptor-first visibility, generic availability checks, and executor references. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/tools",
        "description": "cache plugin tool descriptors captured from `api.registerTool(...)` so repeated prompt-time planning can skip plugin runtime loading while execution still loads the live plugin tool. (#76079) Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/76079"
      },
      {
        "title": "Docs/Codex",
        "description": "clarify that ChatGPT/Codex subscription setups should use `openai/gpt-*` with `agentRuntime.id: \"codex\"` for native Codex runtime, while `openai-codex/*` remains the PI OAuth route. Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/source checkout",
        "description": "load bundled plugins from the `extensions/*` pnpm workspace tree in source checkouts, so plugin-local dependencies and edits are used directly while packaged installs keep using the built runtime tree. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "externalize ACPX behind the official `@openclaw/acpx` package so packaged installs keep ACP harness adapter binaries out of core until the ACP backend is installed. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "externalize diagnostics OpenTelemetry behind the official `@openclaw/diagnostics-otel` package so packaged installs keep the OTEL dependency stack out of core until the plugin is installed. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "prepare Google Chat, LINE, Matrix, and Mattermost for `2026.5.1-beta.2` npm and ClawHub publishing, and keep publishable plugin dist trees out of the core npm package. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "prepare BlueBubbles, diagnostics Prometheus, Google Meet, Nextcloud Talk, Nostr, Zalo, and Zalo Personal for `2026.5.1-beta.2` npm and ClawHub publishing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "prepare diagnostics OpenTelemetry, Discord, Diffs, Lobster, Memory LanceDB, Microsoft Teams, QQ Bot, Voice Call, and WhatsApp for `2026.5.1-beta.1` npm and ClawHub publishing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/beta",
        "description": "prepare Brave, Codex, Feishu, Synology Chat, Tlon, and Twitch for `2026.5.1-beta.1` npm and ClawHub publishing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Providers/xAI",
        "description": "add Grok 4.3 to the bundled catalog and make it the default xAI chat model.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Google Meet",
        "description": "let API-created rooms set `accessType` and `entryPointAccess`, and add `googlemeet end-active-conference` for closing managed spaces after a call. (#74824) Thanks @BsnizND.",
        "href": "https://github.com/openclaw/openclaw/pull/74824"
      },
      {
        "title": "Google Meet",
        "description": "add `googlemeet test-listen` and the matching `google_meet` `test_listen` action so transcribe-mode joins wait for real caption or transcript movement before reporting listen-first health. Refs #72478. Thanks @DougButdorf.",
        "href": "https://github.com/openclaw/openclaw/issues/72478"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "prefer versioned ClawPack artifacts when ClawHub publishes digest metadata, verifying the ClawPack response header and downloaded bytes before installing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "persist ClawPack digest metadata on ClawHub plugin install and update records so registry refreshes and download verification can reuse stored artifact facts. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "allow official bundled-plugin cutovers to record ClawHub artifact metadata while preserving npm as the launch default for bare package specs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/onboarding",
        "description": "allow install-on-demand provider setup entries to persist ClawHub artifact metadata after explicit ClawHub installs while retaining npm/local fallback paths. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Plugins/Crestodian",
        "description": "add ClawHub plugin search plus Crestodian plugin list/search/install/uninstall operations, with approval and audit coverage for install and uninstall.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Channels/thread bindings",
        "description": "replace split subagent/ACP thread-spawn toggles with `threadBindings.spawnSessions`, default thread-bound spawns on, and let `openclaw doctor --fix` migrate the legacy keys. (#75943)",
        "href": "https://github.com/openclaw/openclaw/pull/75943"
      },
      {
        "title": "Providers/OpenAI",
        "description": "add `extraBody`/`extra_body` passthrough for OpenAI-compatible TTS endpoints, so custom speech servers can receive fields such as `lang` in `/audio/speech` requests. Fixes #39900. Thanks @R3NK0R.",
        "href": "https://github.com/openclaw/openclaw/issues/39900"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace dependency pins, including TypeBox 1.1.37, AWS SDK 3.1041.0, Microsoft Teams 2.0.9, and Marked 18.0.3. Thanks @mariozechner, @aws, and @microsoft.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Discord/channels",
        "description": "add reusable message-channel access groups plus Discord channel-audience DM authorization, so allowlists can reference `accessGroup:<name>` across channel auth paths. (#75813)",
        "href": "https://github.com/openclaw/openclaw/pull/75813"
      },
      {
        "title": "Crabbox/scripts",
        "description": "print the selected Crabbox binary, version, and supported providers before `pnpm crabbox:*` commands, and reject stale binaries that lack `blacksmith-testbox` provider support.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      },
      {
        "title": "Agents/Codex",
        "description": "add committed happy-path prompt snapshots for Codex/message-tool Telegram direct, Discord group, and heartbeat turns so prompt drift can be reviewed. Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202652"
      }
    ],
    "fixes": [
      "CLI/message: skip eager model context warmup and preserve channel-declared gateway execution for Discord and Telegram message actions, avoiding Codex app-server/model discovery during simple send/read commands. Thanks @fuller-stack-dev.",
      "Codex/app-server: resolve managed binaries from bundled `dist` chunks and from the `@openai/codex` package bin when installs do not provide a nearby `.bin/codex` shim, avoiding false missing-binary startup failures.",
      "Plugins/ClawHub: use the ClawHub artifact resolver response as the install decision before downloading, keeping legacy ZIP fallback and future ClawPack npm-pack installs on the same explicit resolver path. Thanks @vincentkoc.",
      "Plugins/ClawHub: keep bare plugin package specs on npm for the launch cutover and reserve ClawHub resolution for explicit `clawhub:` specs until ClawHub pack readiness is deployed. Thanks @vincentkoc.",
      "Plugins/source checkout: discover source-only plugins such as Codex from the `extensions/*` workspace while using npm package excludes as the packaged-core boundary, removing the stale core-bundle metadata path.",
      "Plugins/ClawHub: install ClawPack artifacts from the explicit npm-pack `.tgz` resolver path and persist artifact kind, npm integrity, shasum, and tarball metadata for update and diagnostics flows. Thanks @vincentkoc.",
      "Control UI: allow deployments to configure grouped chat message max-width with a validated `gateway.controlUi.chatMessageMaxWidth` setting instead of patching bundled CSS after upgrades. Fixes #67935. Thanks @xiew4589-lang.",
      "Control UI/Cron: ignore malformed persisted cron rows without valid payloads before they enter UI state and guard stale cron render paths, preventing blank Control UI sections after a bad cron snapshot. Fixes #55047 and #54439; supersedes #54550 and #54552.",
      "Control UI/sessions: bound the default Sessions tab query to recent activity and fewer rows, avoiding expensive full-history loads while keeping filters editable. Fixes #76050. (#76051) Thanks @Neomail2.",
      "Control UI/sessions: apply reliable `sessions.changed` snapshots in-place and refetch only for partial events, avoiding redundant `sessions.list` regeneration during active session updates.",
      "Control UI/sessions: explain the Sessions filter controls with hover tooltips and raise the default list limit to 200 rows.",
      "Control UI/sessions: expand compaction checkpoint details from checkpoint-bearing rows and keep token totals on one line.",
      "Control UI/sessions: group Active and Limit filters together, streamline source toggles, and make the filter section collapsible.",
      "Control UI/sessions: shorten filter tooltips and remove duplicate browser-native tooltip popovers.",
      "Control UI/sessions: keep the expanded filter controls on one row on large screens.",
      "Gateway/channels: cap startup fanout at four channel/account handoffs and recover from Bonjour ciao self-probe races, reducing Windows startup stalls with many Telegram accounts. Fixes #75687.",
      "Gateway/sessions: keep `sessions.list` polling responsive on large session stores by reusing list-safe session cache/indexes and returning a lightweight compaction checkpoint preview instead of heavyweight summaries. Thanks @rolandrscheel.",
      "Control UI/Gateway: keep long-running dashboard WebSocket sessions alive with protocol pings and keep Stop available after reconnect or reload by recovering session-scoped active-run abort state. Fixes #70991. Thanks @alexandre-leng.",
      "CLI/update: treat inherited Gateway service markers as origin hints and only block package replacement when the managed Gateway is still live, so self-updates can stop the service and continue safely. (#75729) Thanks @hxy91819.",
      "Agents/failover: exempt run-level timeouts that fire during tool execution from model fallback, timeout-triggered compaction, and generic timeout payload synthesis, avoiding misleading \"LLM request timed out\" errors after the primary model has already responded. Fixes #52147. (#75873) Thanks @simonusa.",
      "Docker: copy Bun 1.3.13 from a digest-pinned image and keep CI on the same version. Fixes #74356. Thanks @fede-kamel and @sallyom.",
      "Agents/compaction: keep prior context on consecutive turns against z.ai-style providers (z.ai direct, openrouter z-ai/\\*, in-house GLM gateways), avoiding accidental Pi state reset after successful turns. (#76056) Thanks @openperf.",
      "Doctor/plugins: run a one-time 2026.5.2 configured-plugin install repair based on `meta.lastTouchedVersion`, installing actively used downloadable OpenClaw plugins through the configured external source before marking the config touched for the release.",
      "Sessions/transcripts: use one `session.writeLock.acquireTimeoutMs` policy for session transcript lock acquisitions and raise the default wait to 60 seconds, avoiding user-visible lock timeouts during legitimate slow prep, cleanup, compaction, and mirror work. Fixes #75894. Thanks @shandutta.",
      "Control UI: contain the standalone iOS PWA viewport with safe-area-aware document locking, so Add-to-Home-Screen launches cannot scroll past the device bounds. Refs #76072. Thanks @kvncrw.",
      "Agents/restart recovery: match cleaned transcript locks by exact transcript lock paths plus the canonical session fallback, so interrupted main sessions using topic-suffixed transcripts resume after gateway restart. Refs #76052. Thanks @anyech.",
      "Agents/runtime: cache the stable system-prompt prefix and reuse prompt-report tool schema stats during dispatch prep, reducing repeated CPU work before streaming starts. Fixes #75999; supersedes #76061. Thanks @zackchiutw and @STLI69.",
      "Control UI/WebChat: use high-contrast text selection colors so highlighted chat text stays visible across themes. Fixes #60850; supersedes #60854. Thanks @Badschaff and @efe-arv.",
      "Telegram/native commands: pass persisted session files into plugin commands for topic-bound sessions, so `/codex bind` works from Telegram forum topics. Refs #75845 and #76049. Thanks @MatthewSchleder.",
      "Security audit/plugins: ignore plugin install backup, disabled, and dependency debris directories when enumerating installed plugin roots, avoiding false-positive findings for `.openclaw-install-backups` after plugin updates. Fixes #75456.",
      "Telegram: honor runtime conversation bindings for native slash commands in bound top-level groups, so commands like `/status@bot` route to the active non-`main` session instead of falling back to the default route. Fixes #75405; supersedes #75558. Thanks @ziptbm and @yfge.",
      "Gateway/tasks: make task registry maintenance use pass-local backing-session lookups and fresh active child-session indexes, avoiding repeated full task snapshots and session-store clones on large stale registries. Fixes #73517 and #75708; supersedes #74406 and #75709. Thanks @Lightningxxl, @glfruit, and @jared-rebel.",
      "Auth/sessions: JSON-clone auth-profile cache/runtime snapshots and remaining session cleanup previews instead of using `structuredClone`, preserving mutation isolation while avoiding native-memory growth on large stores. Fixes #45438. Thanks @markus-lassfolk.",
      "Models CLI: restore `openclaw models list --provider <id>` catalog and registry fallback rows for unconfigured providers, so provider-specific verification commands no longer report \"No models found.\" Fixes #75517; supersedes #75615. Thanks @lotsoftick and @koshaji.",
      "Gateway/macOS: write LaunchAgent services with a canonical system PATH and stop preserving old plist PATH entries, so Volta, asdf, fnm, and pnpm shell paths no longer affect gateway child-process Node resolution. Fixes #75233; supersedes #75246. Thanks @nphyde2.",
      "Slack/hooks: preserve bot alert attachment text in message-received hook content when command text is blank. Fixes #76035; refs #76036. Thanks @amsminn.",
      "Sessions/agents: route Gateway session-store writes, CLI cleanup maintenance, and agent-delete session purges through a dedicated in-process writer and borrow the validated mutable cache during the writer slot, avoiding runtime file locks plus repeated `sessions.json` rereads and JSON clones on hot metadata updates. Refs #68554. Thanks @henkterharmsel.",
      "Control UI/chat: show inline feedback when local slash-command dispatch is unavailable or fails unexpectedly instead of clearing the composer silently. Fixes #52105. Thanks @MooreQiao.",
      "Memory/markdown: replace CRLF managed blocks in place and collapse duplicate marker blocks without rewriting unmanaged markdown, so Dreaming and Memory Wiki files self-heal from repeated generated sections. Fixes #75491; supersedes #75495, #75810, and #76008. Thanks @asaenokkostya-coder, @ottodeng, @everettjf, and @lrg913427-dot.",
      "Agents/tools: return critical tool-loop circuit-breaker stops as blocked tool results instead of thrown tool failures, so models see the guardrail and stop retrying the same call. Thanks @rayraiser.",
      "Agents/sessions: preserve pre-existing runtime model and context window after heartbeat turns so a per-run heartbeat model override does not bleed into shared-session status. Fixes #75452. Thanks @zhangguiping-xydt.",
      "Model commands: clarify direct and inline `/model` acknowledgements for non-default selections as session-scoped. Thanks @addu2612.",
      "Doctor/gateway: stop warning that non-existent, unconfigured user-bin directories are required in the Gateway service PATH. Fixes #76017. Thanks @xiphis.",
      "TUI/chat: skip full provider model normalization during context-window warmup while preserving provider-owned context metadata, avoiding cold-start stalls with large model registries. Thanks @547895019.",
      "Agents: enable malformed tool-call argument repair for Codex and Azure OpenAI Responses transports while keeping generic OpenAI Responses paths out of the repair gate. Fixes #75154. Thanks @Nimraakram22.",
      "Memory Wiki: accept relative Markdown links that include the `.md` suffix during broken-wikilink validation, avoiding false positives for native render-mode links. Thanks @Kenneth8128.",
      "OpenAI Codex: show the device-pairing code in the interactive SSH/headless prompt while keeping the short-lived code out of persistent runtime logs. Fixes #74212. Thanks @da22le123.",
      "QA Lab: stop gateway children when the suite parent disappears, so interrupted local QA runs cannot leave hot orphaned gateways behind.",
      "Codex/app-server: tolerate a second connection close during startup recovery and include retry counts plus stringified errors in the restart warning, so concurrent lanes do not fail after one shared-client race.",
      "Plugins/CLI: cache plugin CLI registration entries per command program so completion state generation does not repeat the full plugin sweep in one invocation. Thanks @ScientificProgrammer.",
      "Voice Call: summarize restored-call verification logs during startup while preserving expired-call cleanup, reducing duplicate per-call skip messages. Thanks @jckm14.",
      "Plugins: reuse gateway-bindable plugin loader cache entries for later default-mode loads without serving default-built registries to gateway-bound requests, reducing repeated plugin registration during dispatch. Refs #61756. Thanks @DmitryPogodaev.",
      "Gateway/secrets: include the caught error message in `secrets.reload` and `secrets.resolve` warning logs while keeping RPC errors generic, so operators can diagnose reload and permission failures. Thanks @davidangularme.",
      "Providers/OpenRouter: fill DeepSeek V4 `reasoning_content` replay placeholders for `openrouter/deepseek/deepseek-v4-flash` and `openrouter/deepseek/deepseek-v4-pro`, so thinking/tool follow-up turns do not fail with DeepSeek's replay-shape error. Fixes #76018. Thanks @cloph-dsp.",
      "Anthropic-compatible streams: recover text deltas that arrive before their matching content block, so Kimi Code and similar providers do not finish as empty `incomplete_result` replies. Fixes #76007. Thanks @vliuyt.",
      "fix(infra): block workspace state-directory env override [AI]. (#75940) Thanks @pgondhi987.",
      "MCP/OpenAI: normalize parameter-free tool schemas whose top-level object `properties` is missing, null, or invalid before sending tools to OpenAI, so MCP tools without params stay usable. Fixes #75362. Thanks @tolkonepiu and @SymbolStar.",
      "Control UI/WebChat: add server-side chat-draft microphone dictation via the existing audio transcription pipeline, avoiding browser Web Speech while keeping provider credentials on the Gateway. Fixes #47311. Thanks @jmomford.",
      "TTS: honor explicit short `[[tts:text]]...[[/tts:text]]` blocks while keeping untagged short auto-TTS suppressed, so tagged voice replies are synthesized instead of being dropped as empty voice-only payloads. Fixes #73758. Thanks @yfge.",
      "Hooks/doctor: warn when `hooks.transformsDir` points outside the canonical hooks transform directory, so invalid workspace skill paths get a direct recovery hint before the Gateway crash-loops. Fixes #75853. Thanks @midobk.",
      "Proxy/audio: convert standard `FormData` bodies before proxy-backed undici fetches, so audio transcription and multipart uploads no longer send `[object FormData]` when `HTTP_PROXY` or `HTTPS_PROXY` is configured. Fixes #48554. Thanks @dco5.",
      "Discord: allow explicitly configured ack reactions in tool-only guild channels while keeping automatic lifecycle/status reactions suppressed. Fixes #74922. Thanks @samvilian and @BlueBirdBack.",
      "Discord: enable session-backed A2A announce target lookup so `sessions_send` uses the target session's `deliveryContext.accountId` or `lastAccountId` instead of falling back to the default bot in multi-account setups. Fixes #42652; refs #51626 and #44773; supersedes #73975. Thanks @irchelper, @dpalfox, and @Lanfei.",
      "Discord/setup: write resolved guild/channel allowlist selections to the selected guild and channel instead of falling back to the wildcard guild during setup. Supersedes #47788. Thanks @Eldersonar.",
      "Discord: treat abort-time Carbon reconnect-exhausted events as expected shutdown during stale-socket restarts, so health-monitor restarts no longer reject the monitor lifecycle. Carries forward #58216; supersedes #73949. Thanks @Perttulands.",
      "Discord/native commands: return an explicit warning when slash command dispatch or direct plugin execution produces no visible reply instead of a success-style completion ack. Fixes #58986; supersedes #62057. Thanks @jb510.",
      "Discord: keep typing indicators alive during long tool runs and auto-compaction while keepalive ticks continue, so active sessions do not appear stalled before the final reply. Thanks @Squirbie.",
      "Discord: preserve multipart Content-Type headers for attachment uploads across REST fetch paths, so generated images and other media no longer fail delivery with `CONTENT_TYPE_INVALID`. Thanks @FunJim.",
      "Discord: preserve attachment and sticker filenames when saving inbound media, so agents can see human-readable file names instead of only UUID-based paths. Fixes #59744. Thanks @xela92 and @rockcent.",
      "Discord: preserve non-ASCII channel names in session display labels while keeping allowlist matching on the existing ASCII slug contract. Thanks @swjeong9.",
      "Discord/PluralKit: canonicalize proxied webhook turns to the original Discord message id for inbound dedupe, while preserving the proxy message id for reply routing. Thanks @acgh213.",
      "Discord: only inject thread starter context on the first turn of the effective thread session, so follow-up thread replies do not repeat the starter block. Fixes #41355; supersedes #44447 and #44449. Thanks @p3nchan.",
      "Discord: resolve thread `ownerId` and `parentId` from Discord API-style snake_case payload fields, so bot-owned autoThreads do not require unnecessary mentions. Thanks @mgh3326.",
      "Gateway/diagnostics: include a bounded redacted startup error message in stability bundles, so crash-loop reports identify the failing plugin or contract without exposing secrets. Refs #75797. Thanks @ymebosma.",
      "Gateway/pricing: defer optional model pricing catalog refresh until after sidecars and channels reach the ready path, so slow OpenRouter or LiteLLM pricing fetches cannot block Gateway readiness. Fixes #74128; supersedes #73486. Thanks @ctbritt and @alprclbi.",
      "Gateway/pricing: abort in-flight model pricing catalog fetches when Gateway shutdown stops the refresh loop, and avoid post-stop cache writes or refresh timers. Fixes #72208. Thanks @rzcq.",
      "Codex/app-server: make startup retry cleanup ownership-aware so concurrent Codex lanes cannot close another lane's freshly restarted shared app-server client. Thanks @vincentkoc.",
      "Google Meet/Twilio: report missing dial-in details during setup and explain that Twilio cannot join Meet URLs without a phone dial plan.",
      "Google Meet/Twilio: start the phone leg before sending Meet PIN DTMF, delay intro speech until after the post-connect dial sequence, and log each stage so operators can tell Twilio-leg audio from Meet-room audio.",
      "Voice Call: accept provider call IDs for gateway speak/continue requests and report ended-call state from history instead of returning a generic \"Call not found\" for stale calls.",
      "Control UI/Talk: allow the OpenAI Realtime WebRTC offer endpoint through the Control UI CSP, configure browser sessions with explicit VAD/transcription input settings, and surface OpenAI realtime error/lifecycle events instead of leaving Talk stuck as live with no diagnostic. Fixes #73427.",
      "Plugins: clarify config-selected duplicate plugin override diagnostics and document manifest schema updates for bundled-plugin forks. Fixes #8582. Thanks @sachah.",
      "CLI backends/Claude: make live-session JSONL turn caps bounded and configurable via `reliability.outputLimits`, raising the default guard for tool-heavy Claude CLI turns while preserving memory limits. Fixes #75838. Thanks @hcordoba840.",
      "Telegram/DMs: keep incidental `message_thread_id` reply-with-quote metadata on the flat DM session by default while preserving opt-in DM topic isolation for configured topics, `dm.threadReplies`, and `direct.<chatId>.threadReplies`. Fixes #75975. Thanks @ProjectEvolutionEVE.",
      "Telegram/network: raise outbound text and typing Bot API request guards to 60 seconds, keep low grammY client timeouts from preempting those guards, let higher `timeoutSeconds` configs extend safe method guards, and retry timed-out typing indicators through the transport fallback without risking duplicate messages. Fixes #76013. Thanks @iaki1206.",
      "Telegram/native commands: register and clear command menus in both default and group-chat scopes, so `/status` and plugin commands stay available in forum topics. Fixes #74032; updates #6457. Thanks @dae-sun and @WouldenShyp.",
      "Providers/OpenAI: resolve `keychain:<service>:<account>` `OPENAI_API_KEY` refs before creating OpenAI Realtime browser sessions or voice bridges, with a bounded cached Keychain lookup. Fixes #72120. Thanks @ctbritt.",
      "Discord/gateway: reconnect when the gateway socket closes while waiting for the shared IDENTIFY concurrency window, instead of silently skipping IDENTIFY and leaving the bot online but unresponsive. Fixes #74617. Thanks @zeeskdr-ai.",
      "Voice Call: add `sessionScope: \"per-call\"` for fresh per-call agent memory while preserving the default per-phone caller history. Fixes #45280. Thanks @pondcountry.",
      "Music generation: raise too-small tool timeouts to the provider-safe 10-second floor and collapse cascading abort fallback errors into a clearer root-cause summary. Thanks @shakkernerd.",
      "Memory-core/dreaming: include the primary runtime workspace in multi-agent dreaming sweeps without mixing main-agent session transcripts into configured subagent workspaces. Fixes #70014. Thanks @ttomiczek.",
      "Control UI: add tab/RPC timing attribution and decouple slow Overview/Cron secondary refreshes so Sessions navigation gets immediate visible feedback. Refs #64004. Thanks @WaMaSeDu.",
      "Memory: retry transient SQLite index file swaps during atomic reindex on Windows, so brief `EBUSY`, `EPERM`, or `EACCES` locks do not fail memory rebuilds. Fixes #64187. Thanks @kunpeng-ai-lab.",
      "Telegram/startup: use the existing `getMe` request guard for the gateway bot probe instead of a fixed 2.5-second budget, and honor higher `timeoutSeconds` configs for slow Telegram API paths. Fixes #75783. Thanks @tankotan.",
      "Telegram/models: make model picker confirmations say selections are session-scoped and do not change the agent's persistent default. Fixes #75965. Thanks @sd1114820.",
      "Control UI/slash commands: keep fallback command metadata on a browser-safe registry path, so provider thinking runtime imports cannot blank the Web UI with `process is not defined`. Fixes #75987. Thanks @novkien.",
      "Heartbeat/Discord: keep async exec completion events out of the generic `System (untrusted)` prompt block and let the dedicated exec heartbeat prompt handle them, so Discord no longer receives raw exec failure tails as separate system-style messages. Fixes #66366. Thanks @Promee-ThaBossHoss.",
      "Channels: strip plain-text MiniMax and XML tool-call scaffolding from shared user-facing reply sanitization, so messaging channels do not deliver raw model tool syntax when a provider emits it as text instead of structured tool calls. Fixes #62820. Thanks @canh0chua.",
      "Infer/media: report missing image-understanding and audio-transcription provider configuration for `image describe`, `image describe-many`, and `audio transcribe` instead of blaming the input path when no provider is available. Fixes #73569 and supersedes #73593, #74288, and #74495. Thanks @bittoby, @tmimmanuel, @Linux2010, and @vyctorbrzezowski.",
      "Docs/health: clarify that session listing surfaces stored conversation rows rather than Discord/channel socket liveness, and point connectivity checks at channel status and health probes. Fixes #70420. Thanks @ashersoutherncities-art and @martingarramon.",
      "WhatsApp/Cron: keep DM pairing-store approvals out of implicit cron and heartbeat recipient fallback, so scheduled automation only uses explicit targets, active configured recipients, or configured `allowFrom` entries. Fixes #62339. Thanks @kelvinisly-collab.",
      "Google Meet: keep the agent-facing `google_meet` tool visible on non-macOS hosts but block local Chrome realtime actions with guidance, so Linux agents can still use transcribe, Twilio, chrome-node, and artifact flows without choosing the macOS-only BlackHole path. Refs #75950. Thanks @actual-software-inc.",
      "macOS/settings: keep opening General from rewriting `openclaw.json` during Tailscale settings hydration, preserving `gateway`, `auth`, `meta`, and `wizard` until the user changes a setting. Fixes #59545. Thanks @Tengdw.",
      "Discord: prioritize interaction callbacks ahead of stale background REST work without polling active REST buckets, validate oversized gateway payloads and member-intent requests before send, and forward explicit component payloads from message actions. (#75363)",
      "Active Memory: use the configured recall timeout as the blocking prompt-build hook budget by default and move cold-start setup grace behind explicit `setupGraceTimeoutMs` config, so the plugin no longer silently extends 15000 ms configs to 45000 ms on the main lane. Fixes #75843. Thanks @vishutdhar.",
      "Plugins/web-provider: reuse the active gateway plugin registry for runtime web provider resolution after deriving the same candidate plugin ids as the loader path, avoiding a redundant `loadOpenClawPlugins` call on every request while preserving origin and scope filters. Fixes #75513. Thanks @jochen.",
      "Crestodian/CLI: exit non-zero when interactive Crestodian is invoked without a TTY, so scripts and CI no longer treat the setup error as success. Fixes #73646 and supersedes #73928 and #74059. Thanks @bittoby, @luyao618, and @Linux2010.",
      "Cron: keep implicit/default isolated cron announce deliveries out of the main session awareness queue, so isolated jobs do not accumulate in the main conversation. Fixes #61426. Thanks @Lihannon.",
      "Subagents: avoid duplicate parent-visible replies when a parent uses `sessions_send` on its own persistent native subagent session, while preserving announce delivery for async sends. Fixes #73550. Thanks @sylviazhang2006-design.",
      "Web search/Brave: add opt-in `brave.http` diagnostics for Brave request URLs/query params, response status/timing, and cache hit/miss/write events without logging API keys or response bodies. Fixes #55196. Thanks @mecampbellsoup.",
      "Web search/Brave: add `plugins.entries.brave.config.webSearch.baseUrl` for Brave-compatible proxies, including endpoint-aware cache keys for both web and LLM Context modes. Fixes #19075. Thanks @jkoprax and @vishnukool.",
      "Web search/config: validate explicit `tools.web.search.provider` values against bundled and installed plugin manifests, while warning for stale third-party plugin config. Fixes #53092. Thanks @TinyTb.",
      "Web search/SearXNG: retry empty non-general category searches once with the general category, so unsupported category engines do not return empty results when general search has matches. Fixes #73552. Thanks @Loukky.",
      "CLI/message: skip gateway-stop hooks for read-only `message read` and bound stop-hook shutdown for other message actions, so one-shot Discord reads cannot hang behind plugin lifecycle cleanup.",
      "Plugins/web-provider: cache repeated bundled web search and web fetch provider registry loads by default while preserving explicit cache opt-outs. Supersedes #75992. Thanks @DmitryPogodaev.",
      "Agents/sandbox: preserve existing workspace file modes when sandbox edits atomically replace files, so 0644 files do not collapse to 0600 after Write/Edit/apply_patch. Fixes #44077. Thanks @patosullivan.",
      "Control UI/WebChat: route typed `/new` through the New Chat dashboard-session creation flow instead of `chat.send`, while keeping `/reset` as the explicit current-session reset. Fixes #69599. Thanks @WolvenRA.",
      "Agents/models: keep legacy CLI runtime model refs such as `claude-cli/*` in the configured allowlist after canonical runtime migration, so cron `payload.model` overrides keep working. Fixes #75753. Thanks @RyanSandoval.",
      "Codex/app-server: restart the shared Codex app-server client once when it closes during startup thread resume, preserving the existing thread binding instead of retrying `thread/start` on a closed client. Thanks @vincentkoc.",
      "Gateway/watch: keep colored subsystem log prefixes in the managed tmux pane even when the parent shell exports `NO_COLOR`, while preserving explicit `FORCE_COLOR=0` opt-out. Thanks @vincentkoc.",
      "Agents/compaction: submit a non-empty runtime-event marker for pre-compaction memory flush turns, so strict Anthropic providers no longer reject the silent flush as an empty user message. Fixes #75305. Thanks @sableassistant3777-source.",
      "Plugin SDK: re-export `isPrivateIpAddress` from `plugin-sdk/ssrf-runtime`, restoring source-checkout builds for SearXNG and Firecrawl private-network guards. Thanks @vincentkoc.",
      "Discord/message actions: advertise `upload-file` and route it through Discord's send runtime with agent-scoped media reads, so agents can discover and send file attachments. Fixes #60652 and supersedes #60808, #61087, and #61100. Thanks @claw-io, @efe-arv, @joelnishanth, and @sjhddh.",
      "Sessions: suppress exact inter-session control replies such as `NO_REPLY` and keep agent-to-agent announce bookkeeping out of visible transcripts. Fixes #53145. Thanks @TarahAssistant.",
      "CLI/directory: report unsupported directory operations for installed channel plugins instead of prompting to reinstall the plugin when it lacks a directory adapter. Fixes #75770. Thanks @lawong888.",
      "Web search/SearXNG: show the JSON API `search.formats` prerequisite during SearXNG setup before prompting for the base URL. Supersedes #65592. Thanks @evanpaul14.",
      "Web search/SearXNG: pass through `img_src` image URLs from SearXNG image-category results. Supersedes #61416. Thanks @sghael.",
      "Web search/Kimi: fail explicitly when Moonshot returns an ungrounded chat answer instead of native web-search evidence, so Kimi no longer reports generic fallback text as a successful search. Fixes #52573. Thanks @wangwllu.",
      "Web search: keep public provider requests on the strict SSRF guard and reserve private-network access for explicit self-hosted SearXNG/Firecrawl endpoints. Fixes #74357 and supersedes #74360. Thanks @fede-kamel.",
      "Firecrawl: reject private, loopback, metadata, and non-HTTP(S) `firecrawl_scrape` target URLs before forwarding them to Firecrawl. Supersedes #48133. Thanks @kn1ghtc.",
      "Web search/Firecrawl: allow self-hosted private/internal Firecrawl `baseUrl` endpoints, including HTTP for private targets, while keeping hosted Firecrawl on the strict official endpoint. Fixes #63877 and supersedes #59666, #63941, and #74013. Thanks @jhthompson12, @jzakirov, @Mlightsnow, and @shad0wca7.",
      "CLI/models: report gateway model fallback attempts in `infer model run --json` and avoid double-prefixing provider-qualified defaults such as `openrouter/auto` in `models status`. Partially fixes #69527. Thanks @alexifra.",
      "Providers/OpenRouter: strip trailing assistant prefill turns from verified OpenRouter Anthropic model requests when reasoning is enabled, so Claude 4.6 routes no longer fail with Anthropic's prefill rejection through the OpenAI-compatible adapter. Fixes #75395. Thanks @sbmilburn.",
      "Voice Call: add per-number inbound routing for dialed-number greetings, response agents/models/prompts, and TTS voice overrides. Fixes #56604. Thanks @healthstatus.",
      "Feishu: preserve Feishu/Lark HTTP error bodies for message sends, media sends, and chat member lookups, so HTTP 400 failures include vendor code, message, log id, and troubleshooter details. Fixes #73860. Thanks @desksk.",
      "Agents/transcripts: avoid reopening large Pi transcript files through the synchronous session manager for maintenance rewrites, persisted tool-result truncation, manual compaction boundary hardening, and queued compaction rotation. Thanks @mariozechner.",
      "Web search/Exa: accept `plugins.entries.exa.config.webSearch.baseUrl`, normalize it to the Exa `/search` endpoint, and partition cached results by endpoint. Fixes #54928 and supersedes #54939. Thanks @mrpl327 and @lyfuci.",
      "Web search/MiniMax: include MiniMax Search in the web-search setup flow and let `MINIMAX_API_KEY` participate in MiniMax Search auto-detection. Supersedes #65828. Thanks @Jah-yee.",
      "Plugins/ClawHub: preserve official source-linked trust through archive installs, so OpenClaw can install trusted ClawHub plugin packages that trigger the built-in dangerous-pattern scanner. Thanks @vincentkoc.",
      "Plugins/ClawHub: install package runtime dependencies for archive-backed plugin installs, so ClawHub packages such as WhatsApp load declared dependencies after download. Thanks @vincentkoc.",
      "Plugins/tools: cache repeated plugin tool factory results only for matching request context, reducing per-turn tool prep without leaking sandbox, session, browser, delivery, or runtime config state. Fixes #75956. Thanks @Linux2010.",
      "Providers/LM Studio: allow `models.providers.lmstudio.params.preload: false` to skip OpenClaw's native model-load call so LM Studio JIT loading, idle TTL, and auto-evict can own model lifecycle. Fixes #75921. Thanks @garyd9.",
      "Agents/transcripts: keep chat history, restart recovery, fork token checks, and stale-token compaction checks on bounded async transcript reads or cached async indexes instead of reparsing large session files. Thanks @mariozechner.",
      "Telegram: inherit the process DNS result order for Bot API transport and downgrade recovered sticky IPv4 fallback promotions to debug logs, while keeping pinned-IP escalation warnings visible. Fixes #75904. Thanks @highfly-hi and @neeravmakwana.",
      "Sessions: keep durable external conversation pointers, including group and thread-scoped chat sessions, out of age, count, and disk-budget maintenance eviction while still allowing synthetic runtime entries to age out. Fixes #58088. Thanks @drinkflav.",
      "Web search/MiniMax: allow `MINIMAX_OAUTH_TOKEN` to satisfy MiniMax Search credentials, so OAuth-authorized MiniMax Token Plan setups do not need a separate web-search key. Fixes #65768. Thanks @kikibrian and @zhouhe-xydt.",
      "Providers/MiniMax: derive Coding Plan usage polling from the configured MiniMax base URL, so global setups no longer query the CN usage host. Fixes #65054. Thanks @sixone74 and @Yanhu007.",
      "Control UI/WebChat: skip assistant-media transcript supplements when stale media refs resolve to no playable media, so text-only final replies are not stored a second time as gateway-injected assistant messages. Fixes #73956. Thanks @HemantSudarshan.",
      "Sessions: reject `sessions_send` targets that resolve to thread-scoped chat sessions, so inter-agent coordination cannot be injected into active human-facing Slack or Discord threads. Fixes #52496. Thanks @barry-p5cc.",
      "Subagents: honor `sessions_spawn` with `expectsCompletionMessage: false` by skipping parent completion handoff delivery while still running child cleanup. Fixes #75848. Thanks @alfredjbclaw.",
      "Media/completions: treat media-only message-tool sends as delivered async completion output, avoiding duplicate raw `MEDIA:` fallback posts after video or music generation finishes.",
      "Gateway/logging: keep deferred channel startup logs on the subsystem logger, so Slack, Discord, Telegram, and voice-call startup messages keep timestamped prefixes. Thanks @vincentkoc.",
      "Codex/app-server: recover JSON-RPC frames split by raw command-output newlines and include a redacted preview when malformed app-server messages still reach the console. Thanks @vincentkoc.",
      "Replies/typing: keep typing alive for queued follow-up messages that are genuinely waiting behind an active run, instead of making chat surfaces look idle while work is queued. Fixes #65685. Thanks @papag00se.",
      "ACP/Discord: suppress completion announce delivery for inline thread-bound ACP session runs, so Discord thread-bound ACP replies are not delivered twice. Fixes #60780. Thanks @solavrc.",
      "Discord/threads: ignore webhook-authored copies in already-bound Discord session threads even when the webhook id differs, preventing PluralKit proxy copies from creating duplicate turn pressure. Fixes #52005. Thanks @acgh213.",
      "Discord/threads: return the created thread as partial success when the follow-up initial message fails, so agents do not retry thread creation and create empty duplicate threads. Fixes #48450. Thanks @dahifi.",
      "Discord/components: consume every button or select in a non-reusable component message after the first authorized click, so single-use panels cannot fire sibling callbacks. Fixes #54227. Thanks @fujiwarakasei.",
      "macOS/config: preserve existing `gateway.auth` and unrelated config keys during app fallback writes, so dashboard or Talk settings changes cannot strand Control UI clients by dropping persisted auth. Fixes #75631. Thanks @Fuma2013.",
      "Control UI/TUI: keep reconnecting chat sends bound to the same backing session id and let TUI relaunches resume the last selected session, avoiding silent fresh sessions after refresh, reconnect, or terminal restart. Fixes #63195, #68162, and #73546. Thanks @bond260312-cmyk, @zhong18804784882, and @mtuwei.",
      "Plugins/tools: let plugin manifests declare static tool availability so reply startup skips unavailable plugin tool runtimes instead of importing factories that only return `null`. Thanks @shakkernerd.",
      "Discord/reactions: skip reaction listener registration when DMs and group DMs are disabled and every configured guild has `reactionNotifications: \"off\"`, avoiding needless reaction-event queue work. Fixes #47516. Thanks @x4v13r1120.",
      "CLI sessions: preserve explicit manual-attach reuse bindings so trusted CLI sessions are not invalidated on the first turn when auth, prompt, or MCP fingerprints drift. Fixes #75849. Thanks @alfredjbclaw.",
      "Telegram/streaming: keep partial preview streaming enabled for plain reply-to replies, disabling drafts only for real native quote excerpts that require Telegram quote parameters. Fixes #73505. Thanks @choury.",
      "Config: log the \"newer OpenClaw\" version warning once per process instead of once per config snapshot read. (#75927) Thanks @romneyda.",
      "Telegram/message actions: treat benign delete-message 400s as no-op warnings instead of runtime errors, so stale or already-removed messages do not create noisy delete failures. Fixes #73726. Thanks @Avicennasis.",
      "Telegram: split long default markdown sends and media follow-up text into safe HTML chunks, so outbound messages over Telegram's limit no longer fail as one oversized Bot API request. Fixes #75868. Thanks @zhengsx.",
      "Gateway/chat history: merge Claude CLI transcript imports for Anthropic-routed sessions that still have a Claude CLI binding, so local chat history does not hide CLI JSONL turns. Fixes #75850. Thanks @alfredjbclaw.",
      "Media: trim serialized JSON suffixes after local `MEDIA:` directive file extensions, so generated-image metadata cannot pollute the parsed media path and cause false `ENOENT` delivery failures. Fixes #75182. Thanks @TnzGit and @hclsys.",
      "Plugins/runtime: hot-reload Gateway plugin runtime surfaces after plugin enable/disable changes while keeping source-changing plugin install, update, and uninstall operations restart-backed so loaded module code is not reused. Fixes #72097.",
      "Cron: make scheduler reload schedule comparison tolerate malformed persisted jobs, so one bad cron entry no longer aborts the whole tick. Fixes #75886. Thanks @samfox-ai.",
      "Doctor/channels: warn after migrations when default Telegram or Discord accounts have no configured token and their env fallback (`TELEGRAM_BOT_TOKEN` or `DISCORD_BOT_TOKEN`) is unavailable, with secret-safe migration docs for checking state-dir `.env`. Fixes #74298. Thanks @lolaopenclaw.",
      "Gateway/diagnostics: keep idle liveness samples in telemetry instead of visible warning logs unless diagnostic work is active, waiting, or queued. Thanks @vincentkoc.",
      "Channels/cron: reject provider-prefixed targets for the wrong channel and let prefixed announce targets such as `telegram:123` select their channel when delivery falls back to `last`, so Telegram IDs cannot be coerced into WhatsApp phone numbers. Fixes #56839. Thanks @bencoremans.",
      "Control UI/chat: keep live replies visible when a raw session alias such as `main` sends the chat turn but Gateway emits events under the canonical session key for the same run. Fixes #73716. Thanks @teebes.",
      "CLI/models: reject `--agent` on `openclaw models set` and `set-image` instead of silently writing agent-scoped requests to global model defaults. Fixes #68391. Thanks @derrickabellard.",
      "CLI: stop treating the legacy singular `openclaw tool ...` token as a plugin id under restrictive `plugins.allow`, so it falls through as a normal unknown/reserved command instead of suggesting a stale allowlist entry. Fixes #64732. Thanks @efe-arv, @SweetSophia, and @hashtag1974.",
      "Media: write inbound media buffers through same-directory temp files before rename, so failed disk writes do not leave zero-byte artifacts for later voice transcription. Fixes #55966. Thanks @OpenCodeEngineer.",
      "TTS/Telegram: keep trusted local audio generated by the TTS tool queued for voice-note delivery even when the run-level built-in tool list omits the raw `tts` name. Fixes #74752. Thanks @Loveworld3033 and @andyliu.",
      "TTS: require explicit user or config audio intent for the agent speech tool so dashboard chats stay text unless audio is requested. Fixes #69777. Thanks @alexandre-leng.",
      "Plugins/config: keep bundled source-checkout plugins from being runtime-gated by install-only `minHostVersion` metadata, accept prerelease host floors, trim plugin-service startup failures to one log line, and avoid broad channel-runtime loading during base config parsing. Thanks @vincentkoc.",
      "Heartbeat: strip legacy `[TOOL_CALL]...[/TOOL_CALL]` and `[TOOL_RESULT]...[/TOOL_RESULT]` pseudo-call blocks from heartbeat replies before channel delivery. Fixes #54138. Thanks @Deniable9570.",
      "macOS/Voice Wake: send wake-word and Push-to-Talk transcripts through the selected macOS session target instead of always falling back to main WebChat. Fixes #51040. Thanks @carl-jeffrolc.",
      "Providers/xAI: give Grok `web_search` a 60s default timeout, harden malformed xAI Responses parsing, and return structured timeout errors instead of aborting the tool call. Fixes #58063 and #58733. Thanks @dnishimura, @marvcasasola-svg, and @Nanako0129.",
      "Providers/configure: preserve the existing default model when adding or reauthing a provider whose plugin returns a default-model config patch. Fixes #50268. Thanks @rixcorp-oc.",
      "Slack/message actions: send media before the follow-up Block Kit message when Slack `send` includes a file plus presentation or interactive controls, so file attachments are no longer rejected. Fixes #51458. Thanks @HirokiKobayashi-R.",
      "Slack/DMs: honor `dmHistoryLimit` for fresh 1:1 Slack DM sessions by backfilling recent conversation history before the current reply. Fixes #64427. Thanks @brantley-creator.",
      "Slack/DMs: keep top-level direct messages on the stable DM session even when `replyToMode` targets Slack thread replies, preserving context across DM turns. Fixes #58832. Thanks @daye-jjeong.",
      "Slack/delivery: preserve Slack Web API missing-scope details in outbound delivery errors, so queued retry state identifies the OAuth scope to add. Fixes #62391. Thanks @alexey-pelykh.",
      "Slack/capabilities: read granted scopes from `auth.test` response metadata before trying legacy scope APIs, so modern bot tokens no longer report `unknown_method` for channel capabilities. Fixes #44625. Thanks @Qquanwei and @martingarramon.",
      "Slack/DMs: send text/block-only proactive DMs directly with `chat.postMessage(channel=<user id>)` while keeping conversation resolution for uploads and threaded sends. Fixes #62042. Thanks @MarkMolina.",
      "Slack/routing: match route bindings written with Slack target syntax such as `channel:C...`, `user:U...`, or `<@U...>`, so bound Slack peers route to the configured agent instead of `main`. Fixes #41608. Thanks @Winnsolutionsadmin.",
      "Slack/routing: match public-channel allowlist entries written as `channel:C...` against bare Slack runtime channel IDs, so allowed channel mentions do not fail as `channel-not-allowed`. Fixes #41264 and supersedes #56530. Thanks @babutree and @Realworld404.",
      "Slack/message actions: prefer the account bound to the outbound target peer before falling back to the agent's first channel account, so multi-workspace sends use the intended Slack account. Supersedes #66807. Thanks @rijhsinghani.",
      "Slack/delivery: retry Slack Web API writes only when the SDK wraps a DNS request failure such as `EAI_AGAIN`, so transient resolver hiccups can recover without retrying platform errors that may duplicate messages. Fixes #68789. Thanks @sonnyb9.",
      "Slack/message actions: forward agent-scoped media roots through the bundled upload-file action path, so workspace files can be attached without failing the local-media guard. Fixes #64625. Thanks @benpchandler.",
      "Slack/mentions: resolve `<!subteam^...>` user-group mentions through Slack `usergroups.users.list` and treat them as explicit mentions only when the bot user is a member, so mention-gated agent channels wake for real user-group mentions without config-only allowlists. Fixes #73827. Thanks @CG-Intelligence-Agent-Jack.",
      "Slack/message tool: let `read` fetch an exact Slack message timestamp, including a specific thread reply when paired with `threadId`, instead of returning only the parent thread or recent channel history. Fixes #53943. Thanks @zomars.",
      "PDF/Gemini: send native PDF analysis API keys in the `x-goog-api-key` header instead of the request URL, keeping secrets out of proxy and access logs. Supersedes #60600. Thanks @garagon.",
      "Web search/Gemini: route agent abort signals into provider fetches and log provider-side abort failures as normal tool errors instead of silently aborting the run. Fixes #72995. Thanks @RoseKongPS.",
      "Web search: point missing-key errors to `web_fetch` for known URLs and the browser tool for interactive pages. Thanks @zhaoyang97.",
      "Web search: late-bind managed agent `web_search` calls to the current runtime config snapshot, so existing sessions do not keep stale unresolved SecretRefs after secrets reload. Fixes #75420. Thanks @richardmqq.",
      "Web search/Gemini: reuse `models.providers.google.apiKey` and `models.providers.google.baseUrl` as lower-priority fallbacks for Gemini web search after dedicated search config and `GEMINI_API_KEY`. Supersedes #57496. Thanks @Aoiujz.",
      "Web search/Gemini: pass `freshness` and `date_after`/`date_before` filters through Google Search grounding time ranges. Fixes #66498. Thanks @ismael-81.",
      "Web search/DuckDuckGo: include the keyless DuckDuckGo provider in the web search setup wizard. Fixes #65862 and supersedes #65940. Thanks @Jah-yee.",
      "Web search: honor `baseUrl` overrides for Gemini, Grok, and x_search provider-owned config, so proxy-backed search tools no longer dial hardcoded public endpoints. Supersedes #61972. Thanks @Lanfei.",
      "Web search/Brave: point Brave provider metadata at the canonical `/tools/brave-search` docs page and make the legacy `/brave-search` docs page a redirect stub. Fixes #65870 and supersedes #65892. Thanks @Magicray1217 and @Jah-yee.",
      "Web search/Brave: allow `freshness` and bounded date ranges in `llm-context` mode, matching Brave's documented LLM Context API support. Supersedes #51005. Thanks @remusao.",
      "Web fetch: resolve external plugin `webFetchProviders` for non-sandboxed `web_fetch`, while keeping sandboxed fetches limited to bundled providers. Fixes #74915. Thanks @ultrahighsuper and @mingmingtsao.",
      "Heartbeat: strip legacy `[TOOL_CALL]...[/TOOL_CALL]` and `[TOOL_RESULT]...[/TOOL_RESULT]` pseudo-call blocks from heartbeat replies before channel delivery. Fixes #54138. Thanks @Deniable9570.",
      "macOS/Voice Wake: send wake-word and Push-to-Talk transcripts through the selected macOS session target instead of always falling back to main WebChat. Fixes #51040. Thanks @carl-jeffrolc.",
      "Providers/xAI: give Grok `web_search` a 60s default timeout, harden malformed xAI Responses parsing, and return structured timeout errors instead of aborting the tool call. Fixes #58063 and #58733. Thanks @dnishimura, @marvcasasola-svg, and @Nanako0129.",
      "Slack/directory: make `openclaw directory peers/groups list --channel slack` prefer token-backed live readers and return the connected Slack account from `directory self`, so valid Slack tokens no longer produce empty directory CLI results. Fixes #50776. Thanks @pjaillon.",
      "Slack: keep assistant typing status, temporary typing reactions, and status reactions active for group/channel turns that use message-tool-only visible replies, while still suppressing automatic source replies. Fixes #75877. Thanks @teosborne.",
      "Slack: recover full inbound DM text from top-level rich-text blocks when Slack sends a shortened message preview, so long direct messages still reach the agent intact. Fixes #55358. Thanks @tonyjwinter.",
      "Replies: strip legacy `[TOOL_CALL]{tool => ..., args => ...}[/TOOL_CALL]` pseudo-call text from user-facing replies and flag it in tool-call diagnostics instead of showing raw tool syntax in channels. Fixes #63610. Thanks @canh0chua.",
      "WhatsApp: close long-lived web sockets through Baileys `end(error)` before falling back to raw websocket close, so listener teardown runs Baileys cleanup instead of leaving zombie sockets. Fixes #52442. Thanks @essendigitalgroup-cyber.",
      "Twitch/plugins: emit a flat JSON Schema for Twitch channel config so single-account and multi-account configs validate before runtime load, and add source-checkout diagnostics for missing pnpm workspace dependencies. Thanks @vincentkoc.",
      "Gateway/sessions: move hot transcript reads and mirror appends onto async bounded IO with serialized parent-linked writes, keeping large session histories from stalling Gateway requests and channel replies. Fixes #75656. Thanks @DerFlash.",
      "macOS/Talk Mode: downmix multi-channel microphone buffers before handing them to Apple Speech across Push-to-Talk, Talk Mode, Voice Wake, and the wake-word tester, so pro audio interfaces no longer produce empty transcripts. Fixes #42533. Thanks @jbuecker.",
      "macOS/Talk Mode: subscribe native WebChat to active-session transcript updates and render external spoken user turns in the chat thread instead of only showing assistant replies. Fixes #75155. Thanks @SledderBling.",
      "macOS/Voice Wake: accept trigger-only phrases in the built-in Voice Wake test, matching the settings UI and runtime trigger-only path instead of requiring extra command text after the wake word. Fixes #64986. Thanks @zoiks65.",
      "Cron/TTS: run cron announce payloads through the normal TTS directive transform before outbound delivery, so scheduled `[[tts]]` replies generate voice payloads instead of leaking raw tags. Fixes #52125. Thanks @kenchen3000.",
      "WhatsApp: save downloadable quoted image media from reply context as inbound media, so agents can inspect an image that a user replied to instead of only seeing `<media:image>`. Fixes #59174. Thanks @gaffner.",
      "Sessions/store: stop persisting the runtime-only `skillsSnapshot.resolvedSkills` array inside each session entry, so `sessions.json` no longer carries a copy of every parsed `SKILL.md` body for every active session; `ensureSkillSnapshot` rehydrates the array from disk on cold resume so the embedded runner, the Claude CLI skills plugin, and the Claude live-session fingerprint all see populated skills, and legacy stores self-heal on the next save. Refs #11950, #6650, #15000. Thanks @amoghasgekar.",
      "Doctor/WhatsApp: warn when Linux crontabs still run the legacy `ensure-whatsapp.sh` health check, which can misreport `Gateway inactive` when cron lacks the systemd user-bus environment. Fixes #60204. Thanks @mySebbe.",
      "Slack/setup: print the generated app manifest as plain JSON instead of embedding it inside the framed setup note, so it can be copied into Slack without deleting border characters. Fixes #65751. Thanks @theDanielJLewis.",
      "Channels/WhatsApp: route CLI logout through the live Gateway and stop runtime-backed listeners before channel removal, so removing a WhatsApp account does not leave the old socket replying until restart. Fixes #67746. Thanks @123Mismail.",
      "Voice Call/Twilio: honor TTS directive text and provider voice/model overrides during telephony synthesis, so `[[tts:...]]` tags are not spoken literally and voiceId overrides reach OpenAI/ElevenLabs calls. Fixes #58114. Thanks @legonhilltech-jpg.",
      "Agents/session-locks: reclaim untracked current-process session locks with matching starttime during acquisition and startup cleanup, so Gateway restarts recover from self-owned orphan `.jsonl.lock` files. Fixes #75805; refs #49603. Thanks @cdznho.",
      "Agents/subagents: initialize built-in context engines before native `sessions_spawn` resolves spawn preparation, so cliBackend-only cold starts no longer fail with an unregistered `legacy` context engine. Fixes #73095. (#73904) Thanks @brokemac79.",
      "Plugins/Bonjour: ship the ciao runtime dependency with packaged OpenClaw so fresh OCM envs can start default mDNS discovery without a missing-module failure. Thanks @shakkernerd.",
      "Agents/tools: scope reply plugin-tool discovery to manifest-declared tool owners and already-active matching tool entries, avoiding broad plugin runtime loading for narrow or core-only tool allowlists. Thanks @shakkernerd.",
      "Agents/replies: defer implicit image model discovery and keep OAuth auth-store adoption on persisted profiles during reply startup, cutting OCM MarCodex warm prep to sub-second in live checks. Thanks @shakkernerd.",
      "Plugins/tools: enforce `contracts.tools` as the manifest ownership contract for plugin tool registration, rejecting undeclared runtime tool names and adding bundled plugin drift coverage. Thanks @shakkernerd.",
      "Agents/Codex: stop prompting message-tool-only source turns to finish with `NO_REPLY`, so quiet turns are represented by not calling the visible message tool instead of conflicting final-text instructions. Thanks @pashpashpash.",
      "Gateway/config: report failed backup restores as failed in logs and config observe audit records instead of marking them valid. (#70515) Thanks @davidangularme.",
      "Compaction: use the active session model fallback chain for implicit summarization failures without persisting fallback model selection, so Azure content-filter 400s can recover. Fixes #64960. (#74470) Thanks @jalehman and @OpenCodeEngineer.",
      "Gateway/config: allow `gateway config.patch` to update documented subagent thinking defaults. Fixes #75764. (#75802) Thanks @kAIborg24.",
      "Plugins/CLI: keep git plugin install paths credential-free, preserve existing git checkouts until replacement succeeds, honor duplicate npm install mode, and remove managed git repos on uninstall. Thanks @vincentkoc.",
      "Plugins/CLI: redact authenticated git URLs from git install command failure details, so failed clone or checkout output cannot leak credentials during plugin installs. Thanks @vincentkoc.",
      "Channels/status reactions: remove stale non-terminal lifecycle reactions when a run reaches done or error, so Discord does not leave a permanent thinking emoji after completion. Fixes #75458. Thanks @davelutztx.",
      "Discord/doctor: migrate unsupported per-channel `agentId` entries under guild channel config into top-level `bindings[]` routes, so `openclaw doctor --fix` preserves the intended agent route instead of stripping it as an unknown key. Fixes #62455. Thanks @lobster-biscuit.",
      "Discord/DMs: set inbound direct-message `ctx.To` to the semantic `user:<id>` target while keeping delivery routed through the DM channel, so mirror and recovery paths do not treat DMs as channel conversations. Fixes #68126. Thanks @illuminate0623.",
      "Discord/DMs: keep no-guild inbound messages on direct-message routing when Discord channel lookup is temporarily unavailable, preventing degraded DMs from forking into channel sessions. Fixes #59817. Thanks @DooPeePey.",
      "Discord: retry outbound API calls on HTTP 5xx, request-timeout, and transient transport failures instead of only Discord rate limits, reducing dropped cron and agent replies during short Discord or network outages. Fixes #52396. Thanks @sunshineo.",
      "Discord: include Components v2 Text Display content from referenced replies and forwarded snapshots, so component-only messages still appear in reply context. Fixes #56228. Thanks @HollandDrive.",
      "Discord: add configurable gateway READY timeouts for startup and runtime reconnects, so staggered multi-account setups can avoid false restart loops. Fixes #72273. Thanks @sergionsantos.",
      "Discord: preserve native slash-command description localizations through command reconcile, so localized Discord descriptions no longer get overwritten by English defaults. Fixes #56580. Thanks @mhseo93.",
      "Discord: add configured outbound mention aliases so known `@Name` references can be rewritten to real Discord user mentions instead of relying only on the transient directory cache. Fixes #67587. Thanks @McoreD.",
      "Discord: avoid startup REST amplification by skipping native command deploy retries after Discord rate limits and deriving the bot id from parseable bot tokens instead of requiring a `/users/@me` lookup. Fixes #75341. Thanks @PrinceOfEgypt.",
      "Plugins/hooks: derive hook `ctx.channelId` from the conversation target instead of the provider name, so Discord and other channel plugins can keep per-channel state isolated. Fixes #59881. Thanks @bradfreels.",
      "Gateway/config: log config health-state write failures instead of silently hiding config observe-recovery write errors. Thanks @sallyom.",
      "Diagnostics: reset stuck-session timers on reply, tool, status, block, and ACP progress events, and back off repeated `session.stuck` diagnostics while a session remains unchanged. Supersedes #72010. Thanks @rubencu.",
      "Gateway/agents: avoid rebuilding core tools for plugin-only allowlists and keep the full plugin registry cache warm across scoped plugin loads, reducing per-turn latency spikes. Fixes #75882, #75907, #75906, #75887, and #75851. (#75922) Thanks @obviyus.",
      "Agents/failover: classify bare `status: internal server error` provider messages as retryable server errors so model fallback can rotate instead of stopping. (#73844) Thanks @thesomewhatyou.",
      "Gateway/startup: return the shared retryable startup-sidecars error for startup-gated control-plane RPCs such as sessions.create, sessions.send, sessions.abort, agent.wait, and tools.effective, so clients can retry early sidecar races. (#76012) Thanks @scoootscooob.",
      "Providers/Google: fix Gemini 2.5 Flash-Lite `reasoning: \"minimal\"` rejections by raising its thinking-budget floor to 512 while preserving the existing Gemini 2.5 Pro and Flash minimal presets. (#70629) Thanks @ericberic.",
      "Agents/status: resolve `session_status(sessionKey=\"current\")` for sparse channel-plugin sessions after literal current lookups miss, so Scope, Slack, Discord, and other plugin-driven agents avoid retrying through `Unknown sessionKey: current`. Fixes #74141. (#72306) Thanks @bittoby.",
      "Cron: retry recurring wake-now main-session jobs through temporary heartbeat busy skips before recording success, so queued cron events no longer appear as ok ghost runs while the main lane is still busy. Fixes #75964. (#76083) Thanks @kshetrajna12 and @xuruiray.",
      "Providers/Google: keep Gemini thinking-signature-only stream chunks active during reasoning, so Gemini 3.1 Pro Preview replies no longer hit idle timeouts before visible text. Fixes #76071. (#76080) Thanks @marcoschierhorn and @zhangguiping-xydt.",
      "CLI/skills: show per-agent model and command visibility in `openclaw skills check --agent`, and let doctor report or disable unavailable skills allowed for the default agent. (#75983) Thanks @mbelinky."
    ]
  },
  {
    "version": "2026.4.29",
    "date": "2026.4.29",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429",
    "features": [
      {
        "title": "Messaging and automation get active-run steering by default, visible-reply...",
        "description": "Messaging and automation get active-run steering by default, visible-reply enforcement, spawned subagent routing metadata, and opt-in follow-up commitments for heartbeat-delivered reminders. Thanks @vincentkoc, @scoootscooob, @samzong, and @vignesh07.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Memory grows into a people-aware wiki with provenance views, per-conversati...",
        "description": "Memory grows into a people-aware wiki with provenance views, per-conversation Active Memory filters, partial recall on timeout, and bounded REM preview diagnostics. Thanks @vincentkoc, @quengh, @joeykrug, and @samzong.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Provider/model coverage expands with NVIDIA onboarding/catalogs plus faster...",
        "description": "Provider/model coverage expands with NVIDIA onboarding/catalogs plus faster manifest-backed model/auth paths, Bedrock Opus 4.7 thinking parity, and safer Codex/OpenAI-compatible replay and streaming behavior. Thanks @eleqtrizit, @shakkernerd, @prasad-yashdeep, @woodhouse-bot, and @LyHug.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway and packaged-plugin reliability focuses on slow-host startup, reusa...",
        "description": "Gateway and packaged-plugin reliability focuses on slow-host startup, reusable model catalogs, event-loop readiness diagnostics, runtime-dependency repair, stale-session recovery, and version-scoped update caches. Thanks @lpendeavors, @DerFlash, @vincentkoc, @pashpashpash, and @jhsmith409.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Channel fixes cluster around Slack Block Kit limits, Telegram proxy/webhook...",
        "description": "Channel fixes cluster around Slack Block Kit limits, Telegram proxy/webhook/polling/send resilience, Discord startup/rate-limit handling, WhatsApp delivery/liveness, and Microsoft Teams/Matrix/Feishu edge cases. Thanks @slackapi, @SymbolStar, @djgeorg3, @TinyTb, @dseravalli, @nklock, and @alex-xuweilong.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Security and operations add OpenGrep scanning, sharper GHSA triage policy,...",
        "description": "Security and operations add OpenGrep scanning, sharper GHSA triage policy, safer exec/pairing/owner-scope handling, Docker/onboarding automation, and web-fetch IPv6 ULA opt-in for trusted proxy stacks. Thanks @jesse-merhi, @pgondhi987, @mmaps, @jinjimz, and @jeffrey701.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Dependencies",
        "description": "refresh bundled runtime and plugin dependency pins, including Pi 0.71.1, OpenAI 6.35.0, Codex 0.128.0, Zod 4.4.1, and Matrix 41.4.0. Thanks @mariozechner.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Agents/workspace",
        "description": "add `agents.defaults.skipOptionalBootstrapFiles` for skipping selected optional workspace files during bootstrap without disabling required workspace setup. (#62110) Thanks @mainstay22.",
        "href": "https://github.com/openclaw/openclaw/pull/62110"
      },
      {
        "title": "Plugins/CLI",
        "description": "add first-class `git:` plugin installs with ref checkout, commit metadata, normal scanner/staging, and `plugins update` support for recorded git sources. Thanks @badlogic.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Google Meet",
        "description": "add live caption health for Chrome transcribe mode, including caption observer state, transcript counters, last caption text, and recent transcript lines in status and doctor output. Refs #72478. Thanks @DougButdorf.",
        "href": "https://github.com/openclaw/openclaw/issues/72478"
      },
      {
        "title": "Voice Call/Google Meet",
        "description": "add Twilio Meet join phase logs around pre-connect DTMF, realtime stream setup, and initial greeting handoff for easier live-call debugging. Thanks @donkeykong91 and @PfanP.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "macOS app",
        "description": "move recent session context rows into a Context submenu while keeping usage and cost details root-level, so the menu bar companion stays compact with many active sessions. Thanks @guti.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/SDK",
        "description": "add SDK-facing tools.invoke RPC with shared HTTP policy, typed approval/refusal results, and SDK helper support. Refs #74705. Thanks @BunsDev and @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/74705"
      },
      {
        "title": "Discord",
        "description": "keep active buttons, selects, and forms working across Gateway restarts until they expire, so multi-step Discord interactions are less likely to break during upgrades or restarts. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Messages/docs",
        "description": "clarify that `BodyForAgent` is the primary inbound model text while `Body` is the legacy envelope fallback, and add Signal coverage so channel hardening patches target the real prompt path. Refs #66198. Thanks @defonota3box.",
        "href": "https://github.com/openclaw/openclaw/issues/66198"
      },
      {
        "title": "Slack",
        "description": "publish a safe default App Home tab view on `app_home_opened` and include the Home tab event in setup manifests. Fixes #11655; refs #52020. Thanks @TinyTb.",
        "href": "https://github.com/openclaw/openclaw/issues/11655"
      },
      {
        "title": "Slack",
        "description": "keep track of bot-participated threads across restarts, so ongoing threaded conversations can continue auto-replying after the Gateway is restarted. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Control UI/Usage",
        "description": "add UTC quarter-hour token buckets for the Usage Mosaic and reuse them for hour filtering, keeping the legacy session-span fallback for older summaries. (#74337) Thanks @konanok.",
        "href": "https://github.com/openclaw/openclaw/pull/74337"
      },
      {
        "title": "BlueBubbles",
        "description": "add opt-in `channels.bluebubbles.replyContextApiFallback` that fetches the original message from the BlueBubbles HTTP API when the in-memory reply-context cache misses (multi-instance deployments sharing one BB account, post-restart, after long-lived TTL/LRU eviction). Off by default; channel-level setting propagates to accounts that omit the flag through `mergeAccountConfig`; routed through the typed `BlueBubblesClient` so every fetch is SSRF-guarded by the same three-mode policy as every other BB client request; reply-id shape is validated and part-index prefixes (`p:0/<guid>`) are stripped before the request; concurrent webhooks for the same `replyToId` coalesce into one fetch and successful responses populate the reply cache for subsequent hits. Also promotes BlueBubbles attachment download failures from verbose to runtime error so silently-dropped inbound images are visible at default log level, and extends `sanitizeForLog` to redact `?password=…`/`?token=…` query params and `Authorization:` headers before they reach the log sink (CWE-532). (#71820) Thanks @coletebou and @zqchris.",
        "href": "https://github.com/openclaw/openclaw/pull/71820"
      },
      {
        "title": "CLI/proxy",
        "description": "add `openclaw proxy validate` so operators can verify effective proxy configuration, proxy reachability, and expected allow/deny destination behavior before deploying proxy-routed OpenClaw commands. (#73438) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/73438"
      },
      {
        "title": "Agents/Codex",
        "description": "default Codex app-server dynamic tools to native-first, keeping OpenClaw integration tools while leaving file, patch, exec, and process ownership to the Codex harness. (#75308) Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/pull/75308"
      },
      {
        "title": "Agents/Codex",
        "description": "default Codex-harness direct source replies to the OpenClaw `message` tool when visible reply delivery is not explicitly configured, keeping channel-visible output as a deliberate tool call. (#75765) Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/pull/75765"
      },
      {
        "title": "Heartbeats/agents",
        "description": "add a structured `heartbeat_respond` tool for tool-capable heartbeat runs so agents can record quiet outcomes or explicit notification text without relying only on `HEARTBEAT_OK` parsing. (#75765) Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/pull/75765"
      },
      {
        "title": "Gateway/config",
        "description": "allow `$include` directives to read files from operator-approved `OPENCLAW_INCLUDE_ROOTS` directories while preserving default config-directory confinement. Thanks @ificator.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Security/tools",
        "description": "configured tool sections (`tools.exec`, `tools.fs`) no longer implicitly widen restrictive profiles (`messaging`, `minimal`). Users who need those tools under a restricted profile must add explicit `alsoAllow` entries; a startup warning identifies affected configs. Fixes #47487. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/47487"
      },
      {
        "title": "Gateway/SDK",
        "description": "add SDK-facing artifact list/get/download RPCs and App SDK helpers with transcript provenance and download-source guardrails. Refs #74706. Thanks @tmimmanuel.",
        "href": "https://github.com/openclaw/openclaw/issues/74706"
      },
      {
        "title": "Agents/commitments",
        "description": "add opt-in inferred follow-up commitments with hidden batched extraction, per-agent/per-channel scoping, heartbeat delivery, CLI management, a simple `commitments.enabled`/`commitments.maxPerDay` config, and heartbeat-interval due-time clamping so magical check-ins do not echo immediately. (#74189) Thanks @vignesh07.",
        "href": "https://github.com/openclaw/openclaw/pull/74189"
      },
      {
        "title": "Messages/queue",
        "description": "make `steer` drain all pending Pi steering messages at the next model boundary, keep legacy one-at-a-time steering as `queue`, and add a dedicated steering queue docs page. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Messages/queue",
        "description": "default active-run queueing to `steer` with a 500ms followup fallback debounce, and document the queue modes, precedence, and drop policies on the command queue page. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Messages",
        "description": "add global `messages.visibleReplies` so operators can require visible output to go through `message(action=send)` for any source chat, while `messages.groupChat.visibleReplies` stays available as the group/channel override. Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/events",
        "description": "surface `spawnedBy` on subagent chat and agent broadcast payloads so clients can route child session events without an extra session lookup. (#63244) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/63244"
      },
      {
        "title": "Memory/wiki",
        "description": "add agent-facing people wiki metadata, canonical aliases, person cards, relationship graphs, privacy/provenance reports, evidence-kind drilldown, and search modes for person lookup, question routing, source evidence, and raw claims. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Active Memory",
        "description": "add optional per-conversation `allowedChatIds` and `deniedChatIds` filters so operators can enable recall only for selected direct, group, or channel conversations while keeping broad sessions skipped. (#67977) Thanks @quengh.",
        "href": "https://github.com/openclaw/openclaw/pull/67977"
      },
      {
        "title": "Active Memory",
        "description": "return bounded partial recall summaries when the hidden memory sub-agent times out, including the default temporary-transcript path, so useful recovered context is not discarded. (#73219) Thanks @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/pull/73219"
      },
      {
        "title": "Gateway/memory",
        "description": "add a read-only `doctor.memory.remHarness` RPC so operator clients can preview bounded REM dreaming output without running mutation paths. (#66673) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/66673"
      },
      {
        "title": "Providers/NVIDIA",
        "description": "add the NVIDIA provider with API-key onboarding, setup docs, static catalog metadata, and literal model-ref picker support so NVIDIA hosted models can be selected with their provider prefix intact. (#71204) Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/71204"
      },
      {
        "title": "Models",
        "description": "suppress explicitly configured openai-codex/gpt-5.4-mini inline entries so a stale models config written by `openclaw doctor --fix` cannot bypass the manifest capability block and cause repeated assistant-turn failures when the runtime switches to that model on ChatGPT-backed Codex accounts. Conditional suppressions (e.g. qwen Coding Plan endpoint guards) remain bypassable by explicit user configuration. (#74451) Thanks @0xCyda, @hclsys, and @Marvae.",
        "href": "https://github.com/openclaw/openclaw/pull/74451"
      },
      {
        "title": "Added SQLite-backed plugin state store (`api",
        "description": "Added SQLite-backed plugin state store (`api.runtime.state.openKeyedStore`) for restart-safe keyed registries with TTL, eviction, and automatic plugin isolation. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Plugin SDK",
        "description": "mark remaining legacy alias exports and diffs tool/config aliases with deprecation metadata, and add a guard so future legacy alias comments require `@deprecated` tags. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "CLI/QR/dependencies",
        "description": "internalize small terminal progress and QR wrapper helpers while keeping the real QR encoder dependency direct, reducing the default runtime dependency graph without changing QR output behavior. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace runtime, plugin, and tooling packages, including ACP, Pi, AWS SDK, TypeBox, pnpm, oxlint, oxfmt, jsdom, pdfjs, ciao, and tokenjuice, while keeping patched ACP behavior and lint gates current. Thanks @mariozechner.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/dev",
        "description": "run `pnpm gateway:watch` through a named tmux session by default, with `gateway:watch:raw` and `OPENCLAW_GATEWAY_WATCH_TMUX=0` for foreground mode, so repeated starts respawn an inspectable watcher without trapping the invoking agent shell. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "emit an opt-in startup diagnostics timeline that records gateway lifecycle and plugin-load phases behind a config flag, so slow-start diagnosis no longer requires bespoke instrumentation. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Control UI/i18n",
        "description": "extend the locale registry with new Persian (fa), Dutch (nl), Vietnamese (vi), Italian (it), Arabic (ar), and Thai (th) entries and ship `fa`, `nl`, `vi`, and `zh-TW` docs glossaries, so the docs translation pipeline and the Control UI language picker stay aligned across surfaces. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Channels",
        "description": "add Yuanbao channel docs entrance so the Tencent Yuanbao bot appears in the channel listing and sidebar navigation. (#73443) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/73443"
      },
      {
        "title": "Channels/Yuanbao",
        "description": "update plugin GitHub location to YuanbaoTeam/yuanbao-openclaw-plugin and add \"yuanbao\" alias to channel catalog. (#74253) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/74253"
      },
      {
        "title": "Docker setup",
        "description": "add `OPENCLAW_SKIP_ONBOARDING` so automated Docker installs can skip the interactive onboarding step while still applying gateway defaults. (#55518) Thanks @jinjimz.",
        "href": "https://github.com/openclaw/openclaw/pull/55518"
      },
      {
        "title": "Security policy",
        "description": "classify media/base64 decode and format-conversion overhead after configured acceptance limits as performance-only for GHSA triage unless a report demonstrates a limit bypass, crash, exhaustion, data exposure, or another boundary bypass. (#74311)",
        "href": "https://github.com/openclaw/openclaw/pull/74311"
      },
      {
        "title": "Security/OpenGrep",
        "description": "add a precise OpenGrep rulepack, source-rule compiler, provenance metadata check, and PR/full scan workflows that validate first-party code and rulepack-only changes while uploading SARIF to GitHub Code Scanning. (#69483) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/69483"
      }
    ],
    "fixes": [
      "Agents/tools: skip unavailable media generation and PDF tool factories from the live reply path when Gateway metadata and the active auth store prove no configured provider can back them, while keeping explicit config and auth-backed providers on the normal factory path. Thanks @shakkernerd.",
      "Agents/runtime: reuse the Gateway metadata startup plan when ensuring reply runtime plugins are loaded, so live agent turns do not broad-load plugin runtimes after the Gateway already scoped startup activation. Thanks @shakkernerd.",
      "Agents/runtime: delegate scoped reply runtime registry reuse to the plugin loader cache-key compatibility checks, so config changes with the same startup plugin ids cannot keep stale runtime hooks or tools active. Thanks @shakkernerd.",
      "Agents/runtime: let compatible wider plugin registries satisfy scoped reply runtime requests when they already contain the requested plugins, avoiding redundant runtime loading without bypassing loader cache-key freshness checks. Thanks @shakkernerd.",
      "Agents/runtime: validate agent model allowlists against manifest model catalog metadata during reply startup, avoiding broad provider runtime catalog loading before the agent run lane starts. Thanks @shakkernerd.",
      "Agents/runtime: keep allowlisted configured model thinking metadata available when manifest catalog rows are absent, so explicit high-reasoning levels remain valid for custom configured models. Thanks @shakkernerd.",
      "Agents/tools: preserve plugin-declared config-only generation providers such as local Comfy workflows during reply tool pre-gating, and share manifest auth/config availability checks between the planner and final tool factories. Thanks @shakkernerd.",
      "Agents/tools: keep Comfy generation tools visible from legacy local workflow config and cloud API-key config when no Gateway metadata snapshot is active, using plugin-declared manifest signals instead of loading provider runtimes. Thanks @shakkernerd.",
      "Agents/tools: route media and generation capability lookups through the Gateway plugin metadata snapshot during reply tool registration, avoiding repeated manifest registry reloads on the live reply path. Thanks @shakkernerd.",
      "Agents/tools: let plugins declare media generation auth aliases and base-url guards in manifests, preserving OpenAI Codex OAuth image generation availability without core-owned provider special cases. Thanks @shakkernerd.",
      "Agents/tools: reuse the auth profile store already loaded for the active run when deciding media and generation tool availability, avoiding repeated provider-auth runtime discovery during reply startup. Thanks @shakkernerd.",
      "Agents/tools: keep image, video, and music generation tool registration on manifest/auth control-plane checks instead of loading runtime provider registries during reply startup, reducing live-path tool-prep blocking while leaving provider runtime resolution for execution and list actions. Thanks @shakkernerd.",
      "Discord: document canonical mention formatting in agent prompt hints and channel docs so outbound replies use `<@USER_ID>`, `<#CHANNEL_ID>`, and `<@&ROLE_ID>` instead of legacy nickname mentions. (#75173)",
      "Heartbeat scheduler: gate exec-event/notification/spawn/retry wakes through a centralized cooldown so backgrounded `process.start` exit notifications can no longer self-feed runaway heartbeat runs (configured `every: \"30m\"` was firing every ~10s in production, pegging the gateway event loop with `eventLoopDelayMaxMs >6s` spikes that stalled control-UI asset serving and TUI handshakes). Documented wake-now paths (`manual`, `wake`, task completion, blocked-task follow-up, `/hooks/wake mode=now`, and cron `--wake now`) remain immediate; retryable busy skips no longer poison the cooldown for the next retry; per-agent flood guard caps any unexpected feedback loop at 5 runs/60s. (#64016, refs #17797 and #75436) Thanks @hexsprite.",
      "fix: block workspace CLOUDSDK_PYTHON override and always set trusted interpreter for gcloud. (#74492) Thanks @pgondhi987.",
      "Providers/Z.AI: move the bundled GLM catalog and auth env metadata into the plugin manifest, so `models list --all --provider zai` shows the full known catalog without duplicated runtime seed data. Thanks @shakkernerd.",
      "Providers/Qianfan and Providers/Stepfun: declare setup auth metadata (`api-key` method, `QIANFAN_API_KEY`, `STEPFUN_API_KEY`) in the plugin manifest so onboarding and `models setup` surface the expected env var without falling back to legacy `providerAuthEnvVars` runtime seed data. Thanks @shakkernerd.",
      "fix(infra): block ambient Homebrew env vars from brew resolution. (#74463) Thanks @pgondhi987.",
      "Onboarding/configure: avoid staging every default plugin runtime dependency after config writes, so skipped setup flows only prepare config-selected plugin deps instead of pulling broad feature-plugin packages. Thanks @vincentkoc.",
      "Thinking/providers: resolve bundled provider thinking profiles through lightweight provider policy artifacts when startup-lazy providers are not active, so OpenAI Codex GPT-5.x keeps xhigh available in Gateway session validation. Fixes #74796. Thanks @maxschachere.",
      "Security/Windows: ignore workspace `.env` system-path variables and resolve stale-process `taskkill.exe` from the validated Windows install root, preventing repository-local env files from redirecting cleanup helpers. Thanks @pgondhi987.",
      "CLI/plugins: refresh persisted plugin registry policy in place for `plugins enable` and `plugins disable`, so routine toggles no longer rebuild and hash every plugin source when the target is already indexed. Thanks @vincentkoc.",
      "Windows/install: run npm from a writable installer temp directory and pin the Bedrock runtime dependency below a Windows ARM Node 24 npm resolver failure, so global OpenClaw installs no longer fail before onboarding. Thanks @mariozechner.",
      "CLI/plugins: scope install and enable slot selection to the selected plugin manifest/runtime fallback, so plugin installs no longer load every plugin runtime or broad status snapshot just to update memory/context slots. Thanks @vincentkoc.",
      "Plugins/TTS: keep bundled speech-provider discovery available on cold package Gateway paths and add bundled plugin matrix runtime probes for health, readiness, RPC, TTS discovery, and post-ready runtime-deps watchdog coverage. Refs #75283. Thanks @vincentkoc.",
      "Google Meet/Twilio: show delegated voice call ID, DTMF, and intro-greeting state in `googlemeet doctor`, and avoid claiming DTMF was sent when no Meet PIN sequence was configured. Refs #72478. Thanks @DougButdorf.",
      "Plugins/tools: prefer built bundled plugin code during tool discovery and skip channel runtime hydration while preserving companion provider registrations, reducing per-run plugin-tool prep cost without dropping executable plugin tools. Fixes #75290. Thanks @thanos-openclaw.",
      "Plugins/loader: scope plugin-tool registry reuse to the enabled plugin plan and stored Gateway method keys, so embedded runner tool lookup can reuse compatible startup registries without hiding enabled non-startup plugin tools. Fixes #75520. Thanks @whtoo.",
      "Voice Call/Twilio: send notify-mode initial TwiML directly in the outbound create-call request while keeping conversation and pre-connect DTMF calls webhook-driven, so one-shot notify calls do not depend on a first-answer webhook fetch. Supersedes #72758. Thanks @tyshepps.",
      "Discord/Slack: defer status-reaction cleanup until run finalization so queued, thinking, tool, and terminal reactions no longer flicker during normal progress updates. (#75582)",
      "Discord/voice: leave Discord voice off for text-only configs unless `channels.discord.voice` is explicitly configured, avoiding default `GuildVoiceStates` traffic and idle gateway CPU pressure for bots that do not use `/vc`. Fixes #73753; refs #74044. Thanks @sanchezm86 and @SecureCloudProjO.",
      "Discord/voice: rerun configured voice auto-join after Discord gateway RESUMED events and ignore already-destroyed stale voice connections during reconnect cleanup, so health-monitor account restarts can rejoin configured channels. Fixes #40665. Thanks @liz709.",
      "Plugins/CLI: reuse the cold manifest registry while building plugin status and inspect reports, so large configured plugin sets no longer rediscover the bundled/plugin registry once per inspect row. Thanks @vincentkoc.",
      "Discord/voice: lengthen the default voice join Ready wait, add configurable `voice.connectTimeoutMs`/`voice.reconnectGraceMs`, and warn before destroying unrecovered disconnected sessions so slow Discord voice handshakes and reconnects no longer fail silently. Fixes #63098; refs #39825 and #65039. Thanks @darealgege, @kzicherman, and @ayochim.",
      "Gateway/health: refresh cached health RPC snapshots when channel runtime state diverges, so Discord and other channel status reads no longer report stale running or connected values until the cache TTL expires. (#75423)",
      "Gateway/sessions: keep session-store reads from running stale prune and entry-count cap maintenance during startup, so oversized stores no longer block chat history readiness after updates while writes and `sessions cleanup --enforce` still preserve the cleanup safeguards. Fixes #70050. Thanks @tangda18.",
      "Security/audit: keep plain `security audit` on the cold config/filesystem path and reserve plugin runtime security collectors for `--deep`, so large plugin installs cannot execute every plugin runtime during routine audits. Thanks @vincentkoc.",
      "Discord/voice: merge configured media-understanding providers such as Deepgram into partial active provider registries, so follow-up voice turns keep transcribing after another media plugin is already active. Fixes #65687. Thanks @OneMintJulep.",
      "WhatsApp: stage `qrcode` through root mirrored runtime dependencies so packaged QR pairing can render from staged plugin-runtime-deps installs. Fixes #75394. Thanks @FelipeX2001.",
      "Discord/voice: apply per-channel Discord `systemPrompt` overrides to voice transcript turns by forwarding the trusted channel prompt through the voice agent run. Fixes #47095. Thanks @qearlyao.",
      "Discord/native commands: send component-only interaction replies from slash command and status handlers instead of treating renderable Discord components as an empty response. Thanks @vincentkoc.",
      "Slack/slash commands: send block-only slash command replies instead of dropping Slack block payloads with no plain-text fallback. Thanks @vincentkoc.",
      "Telegram/messages: derive fallback text from interactive button/select labels before sending button-only payloads, so Telegram replies are not rejected as empty messages. Thanks @vincentkoc.",
      "LINE/messages: send quick-reply-only payloads with fallback option text instead of accepting the payload and returning an empty delivery. Thanks @vincentkoc.",
      "Auto-reply/docking: require `/dock-*` route switches to start from direct chats, so group or channel participants cannot reroute a shared session's future replies into a linked DM. Thanks @vincentkoc.",
      "Discord: keep text-DM main-session route updates pinned to the configured DM owner, matching component interactions so another direct-message sender cannot redirect future main-session replies. Thanks @vincentkoc.",
      "Mattermost/Matrix: keep direct-message main-session route updates pinned to the configured DM owner so paired or temporarily allowed senders cannot redirect future shared-session replies. Thanks @vincentkoc.",
      "Discord: keep SecretRef-backed bot tokens discoverable for message actions without resolving the token during schema generation, and resolve scoped channel SecretRefs before outbound agent message sends even when the tool is built from a config snapshot. Fixes #75324. Thanks @slideshow-dingo and @Conan-Scott.",
      "Updates: run package post-install doctor repair with the managed Gateway service profile and state paths when a daemon is installed, so shell/profile mismatches no longer repair the caller state while the restarted Gateway keeps stale config. Thanks @vincentkoc.",
      "Models/DeepInfra: declare DeepInfra manifest catalog discovery and derive its runtime fallback catalog from the manifest, restoring provider-filtered `models list --all --provider deepinfra` rows without duplicated static model data. Thanks @shakkernerd.",
      "CLI/update: verify managed gateway restarts against the installed service port instead of the caller shell port, so package updates do not report a healthy daemon as failed when profiles use different gateway ports. Thanks @vincentkoc.",
      "Gateway/agent: reject strict `openclaw agent --deliver` requests with missing delivery targets before starting the agent run, so users do not wait for a completed turn that cannot send anywhere. Thanks @vincentkoc.",
      "Setup/import: honor non-interactive `--import-from` onboarding flags by running the migration import path instead of silently completing normal setup without importing anything. Thanks @vincentkoc.",
      "Discord/voice: run voice-channel turns under a voice-output policy that hides the agent `tts` tool and asks for spoken reply text, so `/vc join` sessions synthesize and play agent replies instead of ending with `NO_REPLY`. Fixes #61536. Thanks @aounakram.",
      "Doctor/plugins: keep plain `doctor --non-interactive` from installing bundled plugin runtime dependencies, so headless health checks report missing deps while `doctor --fix` remains the explicit repair path. Thanks @vincentkoc.",
      "Doctor/gateway: require an interactive confirmation before installing or rewriting the Gateway service, so `doctor --fix --non-interactive` can repair plugin/config drift without replacing the operator's launchd/systemd service from a temporary environment. Thanks @vincentkoc.",
      "Plugins/runtime-deps: include packaged OpenClaw identity in bundled plugin loader cache keys, so same-path package upgrades stop reusing stale versioned runtime-deps mirrors. Fixes #75045. Thanks @sahilsatralkar.",
      "Plugin SDK: restore reply-prefix and reply-pipeline helpers on the deprecated root/compat SDK surface so external plugins still using `openclaw/plugin-sdk` do not fail message dispatch after update. Fixes #75171. Thanks @zhangxiliang.",
      "Plugins/runtime-deps: prune inactive same-package versioned runtime-deps roots after bundled dependency repair, so upgrades do not leave old `openclaw-<version>-<hash>` package caches behind after doctor runs. Thanks @vincentkoc.",
      "Plugins/runtime-deps: prune legacy version-scoped plugin runtime-deps roots during bundled dependency repair and cover the path in Package Acceptance's upgrade-survivor matrix, so upgrades from 2026.4.x no longer leave stale per-plugin runtime trees after doctor runs. Thanks @vincentkoc.",
      "Plugins/runtime-deps: keep Gateway startup plugin imports and runtime plugin fallback loads verify-only after startup/config repair planning, so packaged installs no longer spawn package-manager repair from hot paths after readiness. Refs #75283 and #75069. Thanks @brokemac79 and @xiaohuaxi.",
      "Plugins/runtime-deps: treat package.json runtime-deps manifests as supersets when generated materialization metadata is absent, so bundled plugin activation stops restaging already-installed dependency subsets on every activation. Fixes #75429. (#75431) Thanks @loyur.",
      "iMessage: add stdin write callback and error listener to IMessageRpcClient so async EPIPE from a closed child process rejects the pending request instead of crashing the gateway with uncaughtException. Fixes #75438.",
      "MCP/stdio: settle MCP stdio transport send() from the write callback instead of resolving immediately on buffer acceptance, so async write errors reject the promise instead of being lost. Refs #75438.",
      "Process/exec: add stdin error listener in runCommandWithTimeout so EPIPE from a prematurely-exited child is swallowed instead of escaping to uncaughtException. Refs #75438.",
      "Voice Call/realtime: add default-off fast memory/session context for `openclaw_agent_consult`, giving live calls a bounded answer-or-miss path before the full agent consult. Fixes #71849. Thanks @amzzzzzzz.",
      "Google Meet: interrupt Realtime provider output when local barge-in clears playback, so command-pair audio stops model speech instead of only restarting Chrome playback. Fixes #73850. (#73834) Thanks @shhtheonlyperson.",
      "Gateway/config: cap oversized plugin-owned schemas in the full `config.schema` response so large installed plugin sets cannot balloon Gateway RSS or crash schema clients. Thanks @vincentkoc.",
      "Plugins/update: skip ClawHub and marketplace plugin updates when the bundled version is newer than the recorded installed version, so `openclaw update` no longer overwrites working bundled plugins with older external packages. Fixes #75447. Thanks @amknight.",
      "Gateway/sessions: use bounded tail reads for sessions-list transcript usage fallbacks and cap bulk title/last-message hydration, keeping large session stores responsive when rows request derived previews. Thanks @vincentkoc.",
      "Gateway/sessions: yield during bulk transcript title/preview hydration and copy compaction checkpoints asynchronously, keeping the Gateway event loop responsive for large session stores and large transcripts. Refs #75330 and #75414. Thanks @amknight.",
      "Gateway/sessions: stream bounded transcript reads for session detail, history, artifacts, compaction, and send/subscribe sequence paths so small Gateway requests no longer materialize large transcripts or OOM on oversized session logs. Thanks @vincentkoc.",
      "Gateway/chat: bound chat-history transcript reads to the requested display window so large session logs no longer OOM the Gateway when clients ask for a small history page. Thanks @vincentkoc.",
      "BlueBubbles: detect audio attachments by Apple UTIs (`public.audio`, `public.mpeg-4-audio`, `com.apple.m4a-audio`, `com.apple.coreaudio-format`) in addition to `audio/*` MIME, so iMessage voice notes whose webhook payload only carries the UTI are now classified as audio in the inbound `<media:audio>` placeholder instead of falling through to the generic `<media:attachment>` tag. Thanks @omarshahine.",
      "Voice Call/Twilio: honor stored pre-connect TwiML before realtime webhook shortcuts and reject DTMF sequences outside conversation mode, so Meet PIN entry cannot be skipped or silently dropped. Thanks @donkeykong91 and @PfanP.",
      "Docs/sandboxing: clarify that sandbox setup scripts (`sandbox-setup.sh`, `sandbox-common-setup.sh`, `sandbox-browser-setup.sh`) are only available from a source checkout, and add inline `docker build` commands for npm-installed users so sandbox image setup works without cloning the repo. Fixes #75485. Thanks @amknight.",
      "Google Meet/Voice Call: play Twilio Meet DTMF before opening the realtime media stream and carry the intro as the initial Voice Call message, so the greeting is generated after Meet admits the phone participant instead of racing a live-call TwiML update. Thanks @donkeykong91 and @PfanP.",
      "Google Meet/Voice Call: make Twilio setup preflight honor explicit `--transport twilio` and fail local/private Voice Call webhook URLs, including IPv6 loopback and unique-local forms, before joins. Thanks @donkeykong91 and @PfanP.",
      "Voice Call/Twilio: retry transient 21220 live-call TwiML updates and catch answered-path initial-greeting failures, so a fast answered callback no longer crashes the Gateway or drops the Twilio greeting/listen transition. (#74606) Thanks @Sivan22.",
      "CLI/startup: preserve `OPENCLAW_HIDE_BANNER` banner suppression for route-first startup callers that rely on the default process environment while keeping read-only status/channel paths from repairing bundled plugin runtime dependencies. Refs #75183.",
      "Voice Call/Twilio: register accepted media streams immediately but wait for realtime transcription readiness before speaking the initial greeting, so reconnect grace handling stays live while OpenAI STT startup is no longer starved by TTS. Fixes #75197. (#75257) Thanks @donkeykong91 and @PfanP.",
      "Voice Call CLI: run gateway-delegated `voicecall continue` through operation-id polling and protocol-shaped errors, so long conversational turns keep their transcript result without blocking a single Gateway RPC. (#75459) Thanks @serrurco and @DougButdorf.",
      "Voice Call CLI: delegate operational `voicecall` commands to the running Gateway runtime and skip webhook startup during CLI-only plugin loading, preventing webhook port conflicts and `setup --json` hangs. Fixes #72345. Thanks @serrurco and @DougButdorf.",
      "Agents/pi-embedded-runner: extract the `abortable` provider-call wrapper from `runEmbeddedAttempt` to module scope so its promise handlers no longer close over the run lexical context, releasing transcripts, tool buffers, and subscription callbacks when a provider call hangs past abort. (#74182) Thanks @cjboy007.",
      "Docker: restore `python3` in the gateway runtime image after the slim-runtime switch. Fixes #75041.",
      "Agents/session-repair: fix resumed sessions failing with repeated 400 errors on Anthropic and strict OpenAI-compatible providers (Qwen, mlx-vlm) after an interrupted conversation or blank user input. Fixes #75271 and #75313. Thanks @amknight.",
      "CLI/Voice Call: scope `voicecall` command activation to the Voice Call plugin so setup and smoke checks no longer broad-load unrelated plugin runtimes or hang after printing JSON. Thanks @vincentkoc.",
      "Doctor/plugins: warn when restrictive `plugins.allow` is paired with wildcard or plugin-owned tool allowlists, making the exclusive plugin allowlist behavior visible before users hit empty callable-tool runs. Refs #58009 and #64982. Thanks @KR-Python and @BKF-Gitty.",
      "Google Meet/Voice Call: keep Twilio Meet joins in conversation mode and reuse the realtime intro prompt when no voice-call-specific intro is configured, so answered phone bridge calls speak instead of joining silently. Refs #72478. Thanks @DougButdorf.",
      "Auto-reply/group chats: keep the `message` tool available for message-tool-only visible replies and apply group-scoped tool policy before deciding fallback delivery, so Discord/Slack-style rooms reply visibly in the correct channel after upgrades. Fixes #74842; refs #75207. Thanks @davelutztx and @aa-on-ai.",
      "Agents/commitments: keep inferred follow-ups internal when heartbeat target is none, strip raw source text from stored commitments, disable tools during due-commitment heartbeat turns, bound hidden extraction queue growth, expire stale commitments, and add QA/Docker safety coverage. Thanks @vignesh07.",
      "Telegram/agents: keep typing indicators and optional generation tools off the reply critical path, so fresh Telegram replies no longer stall while provider catalogs and media models load. (#75360) Thanks @obviyus.",
      "Agents/commitments: run hidden follow-up extraction on the configured agent/default model instead of falling back to direct OpenAI, so OpenAI Codex OAuth-only gateways no longer spam background API-key failures. Fixes #75334. Thanks @sene1337.",
      "Agents/media: keep async music generation completions on the requester-session wake path even when direct-send completion is enabled, so finished audio stays agent-mediated while video can still opt into direct channel delivery. (#75335) Thanks @vincentkoc.",
      "Agents/media: keep image and video provider inventory internal when tool output is hidden, so shared chat surfaces no longer expose provider/model/auth-hint details from list results. Fixes #75166. Thanks @MkDev11.",
      "Security/config-audit: redact CLI argv and execArgv secrets before persisting config audit records, covering write, observe, and recovery paths. Fixes #60826. Thanks @koshaji.",
      "Gateway/models: keep default and configured model-list views responsive when provider catalog discovery stalls, without hiding real catalog load failures, while `--all` still waits for the exact full catalog. Fixes #75297; refs #74404. Thanks @lisandromachado and @najef1979-code.",
      "Plugins/runtime-deps: accept already materialized package-level runtime-deps supersets as converged, so later lazy plugin activation no longer prunes and relaunches `pnpm install` after gateway startup pre-staging, reducing event-loop pressure from repeated runtime-deps repair on packaged installs. Fixes #75283; refs #75297 and #72338. Thanks @brokemac79, @lisandromachado, and @midhunmonachan.",
      "Plugins/runtime-deps: remove OpenClaw-owned legacy runtime-deps symlinks before replacing staged bundled plugin dependencies, so updates can recover from older symlinked installs instead of failing the symlink safety guard. Thanks @goldmar.",
      "Discord: retry queued REST 429s against learned bucket/global cooldowns and reacquire fresh voice upload URLs after CDN upload rate limits, so outbound sends recover without reusing stale single-use upload URLs. Thanks @discord.",
      "TTS/providers: keep bundled speech-provider compat fallback available when plugins are globally disabled, so cold gateway and CLI startup can still resolve fallback speech providers instead of leaving explicit TTS provider selection with no registered providers. Refs #75265. Thanks @sliekens.",
      "Discord: collapse repeated native slash-command deploy rate-limit startup logs into one non-fatal warning while keeping per-request REST timing in verbose output. Thanks @discord.",
      "Discord: report native slash-command deploy aborts as REST timeouts with method, path, timeout budget, and observed duration, so startup logs explain slow Discord API calls instead of showing a generic aborted operation. Thanks @discord.",
      "Security/logging: redact payment credential field names such as card number, CVC/CVV, shared payment token, and payment credential across default log and tool-payload redaction patterns so wallet-style MCP tools do not expose raw payment credentials in UI events or transcripts. Thanks @stainlu.",
      "Providers/OpenAI Codex: preserve existing wrapped Codex streams during OpenAI attribution so PI OAuth bearer injection reaches ChatGPT/Codex Responses, and strip native Codex-only unsupported payload fields without touching custom compatible endpoints. (#75111) Thanks @keshavbotagent.",
      "Plugins/runtime-deps: materialize newly required bundled plugin packages after local `openclaw onboard` and `openclaw configure` config writes, while keeping remote setup read-only, so first Gateway startup no longer discovers missing channel/provider deps after setup claimed success. Fixes #75309; refs #75069. Thanks @scottgl9 and @xiaohuaxi.",
      "Plugins/runtime-deps: expire stale legacy install locks whose live PID cannot be tied to the current process incarnation, so Docker PID reuse no longer leaves bundled dependency repair stuck behind old `.openclaw-runtime-deps.lock` directories. Fixes #74948; refs #74950 and #74346. Thanks @dchekmarev.",
      "Plugins/runtime-deps: recover interrupted bundled runtime-dependency installs whose package sentinels exist but generated materialization is incomplete, forcing npm/pnpm repair in Gateway startup, doctor, and lazy plugin loads instead of leaving channels crash-looping on missing packages. Fixes #75309; refs #75310, #75296, and #75304. Thanks @scottgl9.",
      "Plugins/runtime-deps: treat no-main and export-map package sentinels without reachable entry files as incomplete, so Gateway startup, doctor, and lazy plugin loads repair interrupted bundled dependency installs instead of accepting package.json-only partial installs. Fixes #75309; refs #75183. Thanks @shakkernerd.",
      "Plugins/runtime-deps: keep runtime inspection and channel maintenance commands from downloading bundled plugin dependencies, route explicit repairs through `openclaw plugins deps --repair`, and still allow Gateway/DO paths to repair missing deps before import. Refs #75069. Thanks @xiaohuaxi.",
      "Updates: force non-deferred, no-cooldown update restarts after package-manager updates requested through the live Gateway control plane and fail release validation on post-swap stale chunk import crashes, so Telegram/Discord imports do not stay pointed at removed dist files. Fixes #75206. Thanks @xonaman and @faux123.",
      "Agents/tool-result guard: use the resolved runtime context token budget for non-context-engine tool-result overflow checks, so long tool-heavy sessions no longer compact early when `contextTokens` is larger than native `contextWindow`. Fixes #74917. Thanks @kAIborg24.",
      "Gateway/systemd: exit with sysexits 78 for supervised lock and `EADDRINUSE` conflicts so `RestartPreventExitStatus=78` stops `Restart=always` restart loops instead of repeatedly reloading plugins against an occupied port. Fixes #75115. Thanks @yhyatt.",
      "Agents/runtime: skip blank visible user prompts at the embedded-runner boundary before provider submission while still allowing internal runtime-only turns and media-only prompts, so Telegram/group sessions no longer leak raw empty-input provider errors when replay history exists. Fixes #74137. Thanks @yelog, @Gracker, and @nhaener.",
      "Agents/Codex: isolate local Codex app-server `CODEX_HOME` and `HOME` per agent and add a deliberate Codex migration path with selectable skill copies, so personal Codex CLI skills, plugins, config, and hooks no longer leak into OpenClaw agents unless the operator migrates them into the workspace. Thanks @pashpashpash.",
      "Security/Nextcloud Talk: make webhook signature validation use the padded timing-safe compare path even when the supplied signature length is wrong, keep normalized header lookup behavior, and extend regression coverage for tampered bodies, wrong secrets, array-backed headers, and truncated signatures. Carries forward earlier contributor work from #50516 by teddytennant. (#58097) Thanks @gavyngong.",
      "Plugins/runtime-deps: replace stale symlinked mirror target roots before writing runtime-mirror temp files and skip rewriting already materialized hardlinks, so cross-version container upgrades no longer crash-loop on read-only image-layer paths while warm mirrors do less churn. Fixes #75108; refs #75069. Thanks @coletebou and @xiaohuaxi.",
      "Auto-reply/group chats: fall back to automatic source delivery when a channel precomputes message-tool-only replies but the `message` tool is unavailable, so Discord/Slack-style group turns do not silently complete without a visible reply. Fixes #74868. Thanks @kagura-agent.",
      "Browser/gateway: share one browser control runtime across the HTTP control server and `browser.request`, and refresh browser profile config from the source snapshot, so CLI status/start honors configured `browser.executablePath`, `headless`, and `noSandbox` instead of falling back to stale auto-detection. Fixes #75087; repairs #73617. Thanks @civiltox and @martingarramon.",
      "Agents/subagents: bound automatic orphan recovery with persisted recovery attempts and a wedged-session tombstone, and teach task maintenance/doctor to reconcile those sessions so restart loops no longer require manual `sessions.json` surgery. Fixes #74864. Thanks @solosage1.",
      "Plugins/runtime-deps: keep bundled provider policy config loading from staging plugin runtime dependencies, so config reads no longer fail on locked-down `/var/lib/openclaw/plugin-runtime-deps` directories. Fixes #74971. Thanks @eurojojo.",
      "Memory/runtime-deps: retain the native `node-llama-cpp` runtime only when local memory search is configured, so packaged installs can repair local embeddings without relying on unreachable global npm installs. Fixes #74777. Thanks @LLagoon3.",
      "Gateway/startup: skip pre-bind web-fetch provider discovery for credential-free `tools.web.fetch` config, so Docker/Kubernetes gateways bind even when optional fetch limits are present. Fixes #74896. Thanks @KoykL.",
      "Signal: match group allowlists against inbound Signal group ids as well as sender ids, and process explicitly configured Signal groups without requiring mentions unless `requireMention` is set. Fixes #53308. Thanks @minupla and @juan-flores077.",
      "Signal: bound `signal-cli` installer release and archive downloads with explicit timeouts, declared and streamed size checks, and partial-file cleanup. Fixes #54153. Thanks @jinduwang1001-max and @juan-flores077.",
      "Slack: require bot-authored room messages with `allowBots=true` to come from an explicitly channel-allowlisted bot or from a room where an explicit Slack owner is present, so broad bot relays cannot run unattended. Fixes #59284. Thanks @andrewhong-translucent.",
      "Signal: derive `getAttachment` HTTP response caps from `channels.signal.mediaMaxMb` with base64 headroom, so inbound photos and videos no longer drop behind the 1 MiB RPC default. Fixes #73564. Thanks @heyhudson.",
      "Signal: keep the long-lived receive SSE monitor open while idle instead of applying the 10s RPC/check deadline, so `signal-cli` 0.14.3 event streams no longer reconnect before inbound messages arrive. Fixes #74741. Thanks @fgabelmannjr and @k7n4n5t3w4rt.",
      "CLI/progress: suppress nested progress spinners and line clears while TUI input owns raw stdin, so Crestodian `/status` no longer disturbs the active input row. (#75003) Thanks @velvet-shark.",
      "Models/OpenAI Codex: restore `openai-codex/gpt-5.4-mini` for ChatGPT/Codex OAuth PI runs after live OAuth proof, and align the manifest, forward-compat metadata, docs, and regression tests so stale cron and heartbeat configs resolve again. Fixes #74451. Thanks @0xCyda, @hclsys, and @Marvae.",
      "Plugins/runtime-deps: always write a dependency map in generated runtime-deps install manifests, so npm does not crash or prune staged bundled-plugin packages when the plan is empty. Fixes #74949. Thanks @hclsys.",
      "Telegram: use durable message edits for streaming previews instead of native draft state, so generated replies no longer flicker through draft-to-message transitions that look like duplicates. (#75073) Thanks @obviyus.",
      "Telegram: echo preflighted DM voice-note transcripts back to the originating chat, including Telegram DM topic thread metadata, instead of only echoing later media-understanding transcripts. Fixes #75084. Thanks @M-Lietz.",
      "Telegram: clamp low long-polling client timeouts so configured `timeoutSeconds` values below the `getUpdates` poll window no longer force a fresh HTTPS connection every few seconds. Fixes #75114. Thanks @hpinho77.",
      "Web search: describe `web_search` as using the configured provider instead of hard-coding Brave when DuckDuckGo or another provider is active. Fixes #75088. Thanks @sun-rongyang.",
      "Infra/tmp: tolerate concurrent temp-dir permission repairs by rechecking directories that another process already tightened, so parallel ACP subprocess startup no longer throws `Unsafe fallback OpenClaw temp dir`. Fixes #66867. Thanks @Kane808-AI and @jarvisz8.",
      "Agents/compaction: add an opt-in `agents.defaults.compaction.midTurnPrecheck` mid-turn precheck that detects tool-loop context pressure and triggers compaction before the next tool call instead of waiting for end-of-turn. (#73499) Thanks @marchpure and @haoxingjun.",
      "Gateway/approvals: let loopback token/password-backed native approval clients resolve exec approvals without attaching stale paired Gateway identities, while remote and unauthenticated approval clients keep normal device identity behavior. (#74472)",
      "Gateway/config: include rejected validation paths in foreground and service last-known-good recovery logs plus main-agent notices, so unsupported direct edits explain which key caused restore instead of looking like silent reversion. Fixes #75060. Thanks @amknight.",
      "Plugins/runtime-deps: hash the OS-canonical `packageRoot` via `fs.realpathSync.native` (with `path.resolve` fallback) when computing the bundled runtime-deps stage key, so loader and channel `bundled-root` callers no longer derive divergent stage directories under `~/.openclaw/plugin-runtime-deps/openclaw-<version>-<hash>/` and bundled channels stop failing with `ENOENT` on shared dist chunks under Windows npm symlinks, junctions, or PM2 multi-instance worker layouts. Fixes #74963. (#75048) Thanks @openperf and @vincentkoc.",
      "fix(logging): add redaction patterns for Tencent Cloud, Alibaba Cloud, HuggingFace and Replicate API keys (#58162). Thanks @gavyngong",
      "Pairing: surface unexpected allowlist filesystem stat errors instead of treating the allowlist as missing, so permission and I/O failures are visible during pairing authorization checks. (#63324) Thanks @franciscomaestre.",
      "macOS app: reserve layout space for exec approval command details so the allow dialog no longer overlaps the command, context, and action buttons. (#75470) Thanks @ngutman.",
      "Agents/failover: carry `sessionId`, `lane`, `provider`, `model`, and `profileId` attribution through `FailoverError` and `describeFailoverError`/`coerceToFailoverError` so structured error logs (e.g. `gateway.err.log` ingestion) can attribute exhausted-fallback wrapper errors to the originating session and last-attempted provider instead of dropping the metadata after the per-profile errors. Fixes #42713. (#73506) Thanks @wenxu007.",
      "Context Engine: treat assembled prompt as the default authority for preemptive overflow prechecks so engines that return a windowed, self-contained context no longer trigger false hard-fail compactions on huge raw history. Engines whose assembled view can hide overflow risk can opt back into the legacy behavior with `AssembleResult.promptAuthority: \"preassembly_may_overflow\"`. (#74255) Thanks @100yenadmin.",
      "Mattermost: refresh current native slash command registrations before accepting callbacks so stale tokens from deleted or regenerated commands stop being accepted without a gateway restart while failed validations stay briefly cached and lookup starts are rate-limited per command, gate each callback against the resolved command's own startup token so a token leaked for one slash command cannot poison another command's failure cache, redact slash validation lookup errors, and add a body read timeout to the multi-account routing path so slow callback senders cannot tie up the dispatcher. Thanks @feynman-hou and @eleqtrizit.",
      "Security/dotenv: block `COMSPEC` in workspace `.env` so a malicious repo cannot redirect Windows `cmd.exe` resolution, and lock in case-insensitive workspace-`.env` regression coverage for the full Windows shell trust-root family (`COMSPEC`, `PROGRAMFILES`, `PROGRAMW6432`, `SYSTEMROOT`, `WINDIR`). (#74460) Thanks @mmaps.",
      "Gateway/install: drop stale version-manager and package-manager PATH entries preserved from old service files during `gateway install --force` and doctor repair, so the repair path no longer recreates `gateway-path-nonminimal` warnings. Fixes #75220. (#75440) Thanks @leonaIee, @renaudcerrato, and @aaajiao."
    ]
  },
  {
    "version": "2026.4.29",
    "date": "2026.4.29",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429",
    "features": [
      {
        "title": "Messaging and automation get active-run steering by default, visible-reply...",
        "description": "Messaging and automation get active-run steering by default, visible-reply enforcement, spawned subagent routing metadata, and opt-in follow-up commitments for heartbeat-delivered reminders. Thanks @vincentkoc, @scoootscooob, @samzong, and @vignesh07.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Memory grows into a people-aware wiki with provenance views, per-conversati...",
        "description": "Memory grows into a people-aware wiki with provenance views, per-conversation Active Memory filters, partial recall on timeout, and bounded REM preview diagnostics. Thanks @vincentkoc, @quengh, @joeykrug, and @samzong.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Provider/model coverage expands with NVIDIA onboarding/catalogs plus faster...",
        "description": "Provider/model coverage expands with NVIDIA onboarding/catalogs plus faster manifest-backed model/auth paths, Bedrock Opus 4.7 thinking parity, and safer Codex/OpenAI-compatible replay and streaming behavior. Thanks @eleqtrizit, @shakkernerd, @prasad-yashdeep, @woodhouse-bot, and @LyHug.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway and packaged-plugin reliability focuses on slow-host startup, reusa...",
        "description": "Gateway and packaged-plugin reliability focuses on slow-host startup, reusable model catalogs, event-loop readiness diagnostics, runtime-dependency repair, stale-session recovery, and version-scoped update caches. Thanks @lpendeavors, @DerFlash, @vincentkoc, @pashpashpash, and @jhsmith409.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Channel fixes cluster around Slack Block Kit limits, Telegram proxy/webhook...",
        "description": "Channel fixes cluster around Slack Block Kit limits, Telegram proxy/webhook/polling/send resilience, Discord startup/rate-limit handling, WhatsApp delivery/liveness, and Microsoft Teams/Matrix/Feishu edge cases. Thanks @slackapi, @SymbolStar, @djgeorg3, @TinyTb, @dseravalli, @nklock, and @alex-xuweilong.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Security and operations add OpenGrep scanning, sharper GHSA triage policy,...",
        "description": "Security and operations add OpenGrep scanning, sharper GHSA triage policy, safer exec/pairing/owner-scope handling, Docker/onboarding automation, and web-fetch IPv6 ULA opt-in for trusted proxy stacks. Thanks @jesse-merhi, @pgondhi987, @mmaps, @jinjimz, and @jeffrey701.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Security/tools",
        "description": "configured tool sections (`tools.exec`, `tools.fs`) no longer implicitly widen restrictive profiles (`messaging`, `minimal`). Users who need those tools under a restricted profile must add explicit `alsoAllow` entries; a startup warning identifies affected configs. Fixes #47487. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/47487"
      },
      {
        "title": "Gateway/SDK",
        "description": "add SDK-facing artifact list/get/download RPCs and App SDK helpers with transcript provenance and download-source guardrails. Refs #74706. Thanks @tmimmanuel.",
        "href": "https://github.com/openclaw/openclaw/issues/74706"
      },
      {
        "title": "Agents/commitments",
        "description": "add opt-in inferred follow-up commitments with hidden batched extraction, per-agent/per-channel scoping, heartbeat delivery, CLI management, a simple `commitments.enabled`/`commitments.maxPerDay` config, and heartbeat-interval due-time clamping so magical check-ins do not echo immediately. (#74189) Thanks @vignesh07.",
        "href": "https://github.com/openclaw/openclaw/pull/74189"
      },
      {
        "title": "Messages/queue",
        "description": "make `steer` drain all pending Pi steering messages at the next model boundary, keep legacy one-at-a-time steering as `queue`, and add a dedicated steering queue docs page. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Messages/queue",
        "description": "default active-run queueing to `steer` with a 500ms followup fallback debounce, and document the queue modes, precedence, and drop policies on the command queue page. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Messages",
        "description": "add global `messages.visibleReplies` so operators can require visible output to go through `message(action=send)` for any source chat, while `messages.groupChat.visibleReplies` stays available as the group/channel override. Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/events",
        "description": "surface `spawnedBy` on subagent chat and agent broadcast payloads so clients can route child session events without an extra session lookup. (#63244) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/63244"
      },
      {
        "title": "Gateway/SDK",
        "description": "add read-only `environments.list` and `environments.status` RPCs so app clients can discover Gateway-local and node environment candidates without enabling provisioning. (#74708) Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/74708"
      },
      {
        "title": "Memory/wiki",
        "description": "add agent-facing people wiki metadata, canonical aliases, person cards, relationship graphs, privacy/provenance reports, evidence-kind drilldown, and search modes for person lookup, question routing, source evidence, and raw claims. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Active Memory",
        "description": "add optional per-conversation `allowedChatIds` and `deniedChatIds` filters so operators can enable recall only for selected direct, group, or channel conversations while keeping broad sessions skipped. (#67977) Thanks @quengh.",
        "href": "https://github.com/openclaw/openclaw/pull/67977"
      },
      {
        "title": "Active Memory",
        "description": "return bounded partial recall summaries when the hidden memory sub-agent times out, including the default temporary-transcript path, so useful recovered context is not discarded. (#73219) Thanks @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/pull/73219"
      },
      {
        "title": "Gateway/memory",
        "description": "add a read-only `doctor.memory.remHarness` RPC so operator clients can preview bounded REM dreaming output without running mutation paths. (#66673) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/66673"
      },
      {
        "title": "Providers/NVIDIA",
        "description": "add the NVIDIA provider with API-key onboarding, setup docs, static catalog metadata, and literal model-ref picker support so NVIDIA hosted models can be selected with their provider prefix intact. (#71204) Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/71204"
      },
      {
        "title": "Models",
        "description": "suppress explicitly configured openai-codex/gpt-5.4-mini inline entries so a stale models config written by `openclaw doctor --fix` cannot bypass the manifest capability block and cause repeated assistant-turn failures when the runtime switches to that model on ChatGPT-backed Codex accounts. Conditional suppressions (e.g. qwen Coding Plan endpoint guards) remain bypassable by explicit user configuration. (#74451) Thanks @0xCyda, @hclsys, and @Marvae.",
        "href": "https://github.com/openclaw/openclaw/pull/74451"
      },
      {
        "title": "Added SQLite-backed plugin state store (`api",
        "description": "Added SQLite-backed plugin state store (`api.runtime.state.openKeyedStore`) for restart-safe keyed registries with TTL, eviction, and automatic plugin isolation. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Plugin SDK",
        "description": "mark remaining legacy alias exports and diffs tool/config aliases with deprecation metadata, and add a guard so future legacy alias comments require `@deprecated` tags. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "CLI/QR/dependencies",
        "description": "internalize small terminal progress and QR wrapper helpers while keeping the real QR encoder dependency direct, reducing the default runtime dependency graph without changing QR output behavior. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace runtime, plugin, and tooling packages, including ACP, Pi, AWS SDK, TypeBox, pnpm, oxlint, oxfmt, jsdom, pdfjs, ciao, and tokenjuice, while keeping patched ACP behavior and lint gates current. Thanks @mariozechner.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/dev",
        "description": "run `pnpm gateway:watch` through a named tmux session by default, with `gateway:watch:raw` and `OPENCLAW_GATEWAY_WATCH_TMUX=0` for foreground mode, so repeated starts respawn an inspectable watcher without trapping the invoking agent shell. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "emit an opt-in startup diagnostics timeline that records gateway lifecycle and plugin-load phases behind a config flag, so slow-start diagnosis no longer requires bespoke instrumentation. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Control UI/i18n",
        "description": "extend the locale registry with new Persian (fa), Dutch (nl), Vietnamese (vi), Italian (it), Arabic (ar), and Thai (th) entries and ship `fa`, `nl`, `vi`, and `zh-TW` docs glossaries, so the docs translation pipeline and the Control UI language picker stay aligned across surfaces. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026429"
      },
      {
        "title": "Channels",
        "description": "add Yuanbao channel docs entrance so the Tencent Yuanbao bot appears in the channel listing and sidebar navigation. (#73443) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/73443"
      },
      {
        "title": "Channels/Yuanbao",
        "description": "update plugin GitHub location to YuanbaoTeam/yuanbao-openclaw-plugin and add \"yuanbao\" alias to channel catalog. (#74253) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/74253"
      },
      {
        "title": "Docker setup",
        "description": "add `OPENCLAW_SKIP_ONBOARDING` so automated Docker installs can skip the interactive onboarding step while still applying gateway defaults. (#55518) Thanks @jinjimz.",
        "href": "https://github.com/openclaw/openclaw/pull/55518"
      },
      {
        "title": "Security policy",
        "description": "classify media/base64 decode and format-conversion overhead after configured acceptance limits as performance-only for GHSA triage unless a report demonstrates a limit bypass, crash, exhaustion, data exposure, or another boundary bypass. (#74311)",
        "href": "https://github.com/openclaw/openclaw/pull/74311"
      },
      {
        "title": "Security/OpenGrep",
        "description": "add a precise OpenGrep rulepack, source-rule compiler, provenance metadata check, and PR/full scan workflows that validate first-party code and rulepack-only changes while uploading SARIF to GitHub Code Scanning. (#69483) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/69483"
      }
    ],
    "fixes": [
      "Voice Call: resolve SecretRef-backed Twilio auth tokens and realtime/streaming provider API keys before initializing call providers, so SecretRef-backed voice-call credentials reach runtime as strings. (#73632) Thanks @VACInc.",
      "Security/outbound: strip re-formed HTML tags during plain-text sanitization so nested tag fragments cannot leave a CodeQL-detected `<script>` sequence behind. Thanks @vincentkoc.",
      "Security/secrets: compare credential bytes with padded timing-safe buffers instead of hashing candidate passwords before equality checks. Thanks @vincentkoc.",
      "Security/QQBot: sanitize debug log arguments before writing to `console.*`, so gateway payload fields cannot forge extra log lines when debug logging is enabled. Thanks @vincentkoc.",
      "QQBot: unify slash command auth and c2cOnly gating in the command registry, pass `allowQQBotDataDownloads` when sending slash command file attachments, align clear-storage with actual downloads directory, and add `/bot-me` to display sender user ID. (#73616) Thanks @cxyhhhhh.",
      "CLI/agents/status: keep `openclaw agents`, text `agents list`, and plain text `status` on read-only metadata paths so human output no longer preloads plugin runtimes or live channel scans before printing. Fixes #74195. Thanks @NianJiuZst.",
      "Agents/local models: derive context-window guard thresholds from the effective model window with 4k/8k safety floors, so small local models are no longer rejected by fixed 16k/32k preflight cutoffs. Fixes #42999. Thanks @chengjialu8888.",
      "PDF extraction: resolve PDF.js standard fonts from the installed package root and pass a filesystem path to the Node fallback extractor, so built-in font PDFs render without `file://` URL lookup failures. Fixes #51455; carries forward #70936, #54447, and #62175. Thanks @anyech, @JuanRdBO, and @solomonneas.",
      "Media: treat legacy Word/OLE attachments with `application/msword` or `application/x-cfb` MIME as binary so printable-looking `.doc` files are not embedded into prompts as text. Fixes #54176; carries forward #54380. Thanks @andyliu.",
      "Config: accept documented `browser.tabCleanup` keys in strict root config validation, so configured tab cleanup no longer fails before runtime reads it. Fixes #74577. Thanks @lonexreb and @ezdlp.",
      "Cron: validate disabled job schedule edits before persisting updates, so invalid cron changes no longer partially mutate stored jobs. Fixes #74459. Thanks @yfge.",
      "CLI/cron: warn when `openclaw cron add --message` omits a nonblank `--agent`, including blank agent values and session-key jobs, so scheduled agent-turn jobs make default-agent fallback explicit while system events stay quiet. Fixes #42196; carries forward #42245. Thanks @ethanclaw.",
      "Channels/status: keep Telegram, Slack, and Google Chat read-only allowlist/default-target accessors on config-only paths, so status and channel summaries do not resolve SecretRef-backed runtime credentials. Thanks @eusine.",
      "Active Memory: clarify the deprecated `modelFallbackPolicy` warning and config help so `modelFallback` is described as a chain-resolution last resort, not runtime failover. (#74602) Thanks @jeffrey701.",
      "Channels/Discord: keep read-only allowlist/default-target accessors from resolving SecretRef-backed bot tokens, so status and channel summaries no longer fail when tokens are only available in gateway runtime. (#74737) Thanks @eusine.",
      "Gateway/sessions: align session abort wait semantics across `chat`, `agent`, and `sessions` server methods so abort RPCs return after the targeted sessions actually halt instead of resolving early while runs are still draining. (#74751) Thanks @BunsDev.",
      "Gateway/sessions: reuse one subagent registry read index for `sessions.list` `spawnedBy` filtering and row enrichment so subagent ownership stays consistent without repeated registry reloads. Carries forward #75013. Thanks @anyech.",
      "Agents/output: drop copied inbound metadata-only assistant replay turns before provider replay instead of synthesizing a placeholder, so Telegram and other channels cannot receive `[assistant copied inbound metadata omitted]` as model output. Fixes #74745. Thanks @adamwdear and @Marvae.",
      "Doctor/memory: suppress skipped embedding-readiness warnings for key-optional providers such as Ollama and LM Studio while preserving timeout and not-ready diagnostics. Fixes #74608 and #73882. Thanks @hclsys.",
      "Channels/groups: preserve observe-only turn suppression for prepared dispatch paths and restore deprecated channel turn runtime aliases, so passive observer/group flows stay silent while older plugins keep compiling. Thanks @vincentkoc.",
      "Feishu: skip empty-text messages (e.g. `{\"text\":\"\"}`) that carry no media, so no blank user turn is written to the session and downstream LLM providers cannot reject the request with \"messages must not be empty\". (#74634) Thanks @xdengli and @hclsys.",
      "Feishu/Bitable: clean up newly created placeholder rows whose fields contain only default empty values while preserving meaningful link, attachment, user, number, boolean, and location values during create-app cleanup. (#73920) Carries forward #40602. Thanks @boat2moon.",
      "macOS app: keep attach-only mode and the Debug Settings launchd toggle marker-only, so launching with `--attach-only`/`--no-launchd` no longer uninstalls the Gateway LaunchAgent or drops active sessions. (#72174) Thanks @DolencLuka.",
      "macOS Canvas: stop auto-reloading the current A2UI host during push/eval/snapshot flows, so pushed A2UI content remains visible instead of returning to the empty Canvas shell. Fixes #73337. Thanks @Gr4via.",
      "Plugin SDK: restore the deprecated `plugin-sdk/zalouser` command-auth facade so published Lark/Zalo plugins that import it load on current hosts. Fixes #74702. Thanks @Goron01.",
      "Plugins/runtime-deps: include bundled provider plugins when `models.providers`, auth profiles, agent defaults, or subagent model refs configure that provider, while keeping inactive default-enabled provider plugins out of doctor repair. Refs #74307. Thanks @Skeptomenos.",
      "Plugins/runtime: resolve relative plugin `api.resolvePath` inputs against the plugin root instead of the host working directory, while keeping absolute and home paths user-resolved. Fixes #74718. Thanks @jimdawdy-hub.",
      "Plugins/runtime-deps: refresh mirrored root chunks through a temporary file before replacing the active copy, so failed refreshes do not delete chunks that running plugin imports still need. Thanks @shakkernerd.",
      "Plugins/runtime-deps: prefer `require` conditional exports when building staged dependency aliases, so CommonJS-only plugin runtime deps such as `ws` do not resolve to ESM wrappers under Jiti. Fixes #74547. Thanks @aderius.",
      "Bonjour/Gateway: cap flapping advertiser restarts in a sliding window, so mDNS probing/name-conflict loops disable discovery instead of churning indefinitely on constrained hosts. Refs #74209 and #74242. Thanks @ndj888 and @Sanjays2402.",
      "Plugins/runtime-deps: verify staged package entry files before reusing mirrored runtime roots, so browser-control repairs incomplete `ajv`/MCP SDK installs after update instead of failing after restart on a missing `ajv/dist/ajv.js`. Refs #74630. Thanks @spickeringlr.",
      "Heartbeat: resolve `responsePrefix` template variables with the selected provider, model, and thinking context before delivering alerts or suppressing prefixed `HEARTBEAT_OK` replies. Fixes #43064; repairs #43065; supersedes #46858. Thanks @yweiii and @JunJD.",
      "Memory/LanceDB: show full memory UUIDs in the `memory_forget` candidate list so agents can pass the displayed ID back to targeted deletion without hitting the full-UUID validator. (#66913) Thanks @amittell.",
      "File-transfer plugin: require canonical read-path preflight authorization for `file.fetch`, fail closed when `dir.fetch` preflight entries are missing, absolute, or traversing, and recheck returned archive entries before handing archive bytes to callers. Carries forward #74134. Thanks @omarshahine.",
      "Channels/Feishu: retry file-typed iOS video resource downloads as `media` after a Feishu/Lark HTTP 502 and preserve the original 502 when the fallback also fails. Fixes #49855; carries forward #50164 and #73986. Thanks @alex-xuweilong.",
      "Providers/Amazon Bedrock: expose the full Claude Opus 4.7 thinking profile (`xhigh`, `adaptive`, and `max`) for Bedrock model refs, while keeping Opus/Sonnet 4.6 on adaptive-by-default, so `/think` menus and validation match the Anthropic transport behavior. Fixes #74701. Thanks @prasad-yashdeep, @sparkleHazard, @Sanjays2402, and @hclsys.",
      "Plugins/tokenjuice: compile the bundled plugin against tokenjuice 0.7.0's published OpenClaw host types instead of a local compatibility shim, so package contract drift fails in OpenClaw validation before release. Thanks @vincentkoc.",
      "OAuth/secrets: ignore root-level Google OAuth `client_secret_*.json` downloads so local client-secret files do not appear as commit candidates. (#74689) Thanks @jeongdulee.",
      "Memory: mirror `sqlite-vec` into packaged bundled-plugin runtime deps for the default memory plugin, so builtin vector search does not lose its SQLite extension after upgrading to 2026.4.27. Fixes #74692. Thanks @mozi1924.",
      "Gateway/startup: bound local discovery advertisement during startup, so a stuck discovery plugin can no longer keep the Gateway from reaching ready. Fixes #73865; refs #74630 and #74633. Thanks @lpendeavors, @moltar-bot, and @Saboor711.",
      "Gateway/models: serve the last successful model catalog while stale reloads refresh in the background, so Gateway control-plane and OpenAI-compatible requests no longer block behind model-provider rediscovery after model config changes. Refs #74135, #74630, and #74633. Thanks @DerFlash, @moltar-bot, and @Saboor711.",
      "CLI/status: resolve read-only channel setup runtime fallback from the packaged OpenClaw dist root, so `status --all`, `status --deep`, channel, and doctor paths do not crash when an external channel plugin needs setup metadata. Fixes #74693. Thanks @giangthb.",
      "SDK/events: keep per-run SDK event streams from surfacing duplicate raw chat projection frames, while normalizing chat-only projection frames and preserving raw access through `rawEvents`. Refs #74704. Thanks @BunsDev.",
      "SDK: report Gateway terminal `agent.wait` timeout snapshots with lifecycle metadata as `timed_out` while keeping bare wait deadlines non-terminal.",
      "Google Meet: block managed Chrome intro/test speech until browser health proves the participant is in-call, and expose `speechReady` diagnostics so login, admission, permission, and audio-bridge blockers no longer look like successful speech. Refs #72478. Thanks @DougButdorf.",
      "Slack/commands: keep native command argument menus on select controls for encoded choice values up to Slack's option limit and truncate fallback button labels to Slack's button-text limit, so long valid choices no longer render invalid Slack blocks. Thanks @slackapi.",
      "Agents/Codex: flush accepted debounced steering messages before normal app-server turn cleanup, so inbound follow-ups acknowledged as queued are not dropped when the turn completes before the debounce fires. Thanks @vincentkoc.",
      "Slack/interactive replies: keep rendered buttons and selects within Slack Block Kit value and count limits, and align command argument select values with Slack's option limit, so overlong agent-authored choices no longer make Slack reject the whole block payload. Thanks @slackapi.",
      "Slack/interactive replies: drop overlong Block Kit button URLs while preserving valid callback values, so malformed link buttons no longer make Slack reject the whole interactive reply. Thanks @slackapi.",
      "Slack/commands: truncate native command argument-menu confirmation text to Slack's dialog limit, so long plugin arg names no longer make fallback buttons render invalid Block Kit payloads. Thanks @slackapi.",
      "Slack/exec approvals: cap native approval metadata context to Slack's element and text limits, so large approval details no longer make Slack reject the approval card. Thanks @slackapi.",
      "Slack/exec approvals: cap native approval update fallback text to Slack's message limit while preserving the rendered approval blocks, so long commands no longer make resolved or expired approval cards stay stale after `chat.update` rejects `msg_too_long`. Thanks @slackapi.",
      "Slack/commands: cap native command argument-menu fallback rows to Slack's message block limit, so large plugin choice lists no longer make Slack reject the generated menu. Thanks @slackapi.",
      "Slack/commands: drop fallback command argument buttons whose encoded values exceed Slack's button-value limit, so one oversized plugin choice no longer makes Slack reject the whole menu. Thanks @slackapi.",
      "Slack/messages: merge message-tool presentation and interactive blocks on Slack sends, so buttons and selects are no longer dropped when a structured message body is also present. Thanks @slackapi.",
      "Slack/messages: cap Block Kit fallback text to Slack's send limit while preserving the rendered blocks, so long context fallbacks no longer make rich Slack messages fail with `msg_too_long`. Thanks @slackapi.",
      "Slack/messages: cap Block Kit fallback text on message edits while preserving the rendered blocks, so long context fallbacks no longer make Slack reject `chat.update` calls with `msg_too_long`. Thanks @slackapi.",
      "Channels/WhatsApp: require Baileys outbound message ids before marking auto-replies delivered, so transcript text and ack reactions no longer make failed group replies look sent. Fixes #49225. Thanks @TinyTb.",
      "CLI/update: scope packaged Node compile caches by OpenClaw version and install metadata, so global installs no longer reuse stale compiled chunks after package updates. Thanks @pashpashpash.",
      "Channels/Voice call: keep pre-auth webhook in-flight limiting active when socket remote address metadata is missing, so slow-body requests from stripped-IP proxy paths still share the fallback bucket. (#74453) Thanks @davidangularme.",
      "Plugin SDK/testing: lazy-load TypeScript from the plugin test-contract runtime and add release checks for critical SDK contract entrypoint imports and bundle size, so published packages fail preflight before shipping ESM-incompatible or oversized contract helpers. Thanks @vincentkoc.",
      "Channels/Microsoft Teams: treat configured `19:...@thread.tacv2` and legacy `19:...@thread.skype` team/channel IDs as already resolved during startup, avoiding false `channels unresolved` warnings while preserving Graph name lookup for display-name entries. Fixes #74683. Thanks @dseravalli.",
      "CLI/browser: preserve parent flags while lazy-loading browser subcommands, so `openclaw browser --json open` and `openclaw browser --json tabs` keep machine-readable output after reparsing. Fixes #74574. Thanks @devintegeritsm.",
      "Exec/elevated: preserve `turnSourceChannel` as `messageProvider` on approval-followup runs so `tools.elevated.allowFrom.<provider>` checks no longer fail with `provider=null` after the user approves an async elevated command. Fixes #74646. Thanks @xhd2015.",
      "Plugins/runtime-deps: add `openclaw plugins deps` inspection and repair with script-free package-manager defaults shared across plugin installers, so operators can repair missing bundled runtime deps without corrupting JSON output or blocking unrelated conflict-free deps. Thanks @vincentkoc.",
      "Agents/output: strip internal `[tool calls omitted]` replay placeholders from user-facing replies while preserving visible reply whitespace. Fixes #74573. Thanks @blaspat.",
      "Providers/Google Vertex: route authorized_user ADC credentials through OpenClaw's REST transport so Docker installs using gcloud application-default credentials no longer crash in the Google SDK before requests are sent. Fixes #74628. Thanks @frankhal2001-design.",
      "ACP/resolver: fall through to thread-bound session resolution when an explicit `--session` token cannot be resolved while preserving the bad-token diagnostic when no thread binding exists, so Discord slash commands that auto-fill the current thread ID as the positional ACP target no longer return \"Unable to resolve session target\" errors. Fixes #66299. Thanks @hclsys, @kindomLee, and @martingarramon.",
      "macOS/Talk: route remote and custom Talk providers through Gateway `talk.speak` before falling back to the system voice, so configured providers such as OpenAI are no longer treated as local-voice-only. (#74645) Thanks @Fuma2013.",
      "Agents/sessions: emit a terminal lifecycle backstop when embedded timeout/error turns return without `agent_end`, so Gateway sessions no longer stay stuck in `running` after failover surfaces a timeout. Fixes #74607. Thanks @millerc79.",
      "Gateway/diagnostics: include stuck-session reason hints and recovery skip causes in warnings, so operators can tell whether a lane is waiting on active work, queued work, or stale bookkeeping. Thanks @vincentkoc.",
      "Providers/DeepSeek: expose native DeepSeek V4 `xhigh` and `max` thinking levels through the provider `resolveThinkingProfile` hook so `/think xhigh|max` applies the intended effort instead of falling back to base levels. (#73008) Thanks @ai-hpc.",
      "Agents/Codex: bound embedded-run cleanup, trajectory flushing, and command-lane task timeouts after runtime failures, so Discord and other chat sessions return to idle instead of staying stuck in processing. Thanks @vincentkoc.",
      "Heartbeat/exec: consume successful metadata-only async exec completions silently so Telegram and other chat surfaces no longer ask users for missing command logs after `No session found`. Fixes #74595. Thanks @gkoch02.",
      "Active Memory/Memory: materialize allowlisted memory plugin tools for lightweight embedded recall runs so Memory Core tools do not collapse to an empty runtime allowlist. Fixes #74572. (#74592) Thanks @LaFleurAdvertising and @vyctorbrzezowski.",
      "Web fetch: add a documented `tools.web.fetch.ssrfPolicy.allowIpv6UniqueLocalRange` opt-in and thread it through cache keys and DNS/IP checks so trusted fake-IP proxy stacks using `fc00::/7` can work without broad private-network access. Fixes #74351. Thanks @jeffrey701.",
      "OpenAI Codex: restore `/verbose full` persistence and app-server tool-output forwarding, and retry Gateway E2E temp-home cleanup so debug runs do not regress on stale validation or cleanup flakes. Thanks @vincentkoc.",
      "Anthropic/Meridian: preserve text and thinking content seeded on `content_block_start` in anthropic-messages streams, so `[thinking, text]` replies no longer persist as empty turns or trigger empty-response fallbacks. Fixes #74410. Thanks @vyctorbrzezowski.",
      "Channels/Matrix: complete the cross-signing handshake on `openclaw matrix verify confirm-sas` so the operator's other Matrix device clears its `Verifying…` loop instead of staying stuck after the agent confirms. (#74542) Thanks @nklock.",
      "CLI/status: honor channel-specific model context-window overrides when reporting effective context, so channel-scoped sessions reflect the active window in `openclaw status`. Thanks @HemantSudarshan.",
      "Sandbox/Docker: tolerate Docker daemon unavailability when sandbox mode is off, so doctor and preflight checks no longer fail on installs that do not run the Docker daemon. Fixes #73671. Thanks @kaseonedge.",
      "Control UI/mobile: persist mobile chat settings through Lit-managed state and route mobile navigation through the same view-state path so chat panel toggles survive transitions on small viewports. Thanks @BunsDev.",
      "Control UI/exports: align sidebar trigger affordances across the resizable divider, mobile layout, and exported-HTML transcript template so the sidebar toggle and exported transcript sidebar render with consistent hit areas and styling. Thanks @BunsDev.",
      "Control UI/chat: disable the page refresh affordance while a chat run is active so accidental refreshes do not abort an in-flight reply. Thanks @Angfr95 and @BunsDev.",
      "Memory/LanceDB: return real memory records from `openclaw ltm list` (with optional `--limit` and createdAt ordering) instead of an empty placeholder, so the CLI surface matches the documented LTM listing contract. (#67952) Thanks @zhangyue19921010.",
      "Media: include redacted per-attempt resize failures and resolved model input capabilities in vision-pipeline errors so ARM64 image failures are diagnosable without closing the remaining routing investigation. Refs #74552. Thanks @1yihui.",
      "Control UI/i18n: route zh-CN agent, debug, channel-refresh, and exec-approval copy through the locale source while preserving the English `Cron Jobs` agent tab label and the security-audit command styling. Carries forward #39692 repair context. Thanks @hepeng154833488 and @vincentkoc.",
      "Auto-reply: honor explicit `silentReply.direct: \"allow\"` for clean empty or reasoning-only direct chat turns while keeping the default direct-chat empty-response guard conservative. Fixes #74409. Thanks @jesuskannolis.",
      "OpenAI Codex: send a non-empty Responses input item when a Codex turn only has systemPrompt-backed instructions, avoiding ChatGPT backend 400s from `input: []`. Fixes #73820. Thanks @woodhouse-bot.",
      "Ollama: normalize provider-prefixed tool-call names at the native stream boundary so Kimi/Ollama calls such as `functions.exec` dispatch as `exec` instead of missing configured tools. Fixes #74487. Thanks @afurm and @carreipeia.",
      "Security/audit: resolve configured model aliases before model-tier and small-parameter checks, so alias-based GPT-5/Codex configs no longer report false weak-model warnings. Fixes #74455. Thanks @blaspat.",
      "CLI/agent: isolate Gateway-timeout embedded fallback runs under explicit `gateway-fallback-*` sessions so accepted Gateway runs cannot race transcript locks or replace the routed conversation session. Fixes #62981. Thanks @HemantSudarshan.",
      "CLI/QR/device-pair: reject malformed public setup URLs before issuing mobile pairing bootstrap tokens, while keeping valid bare host:port setup URLs supported. Thanks @Lucenx9.",
      "Models/UI: hide unauthenticated providers from the default Web chat, `/models`, and model setup pickers while keeping explicit full-catalog browse paths through `view: \"all\"`, `/models <provider> all`, and `models list --all`. Fixes #74423. Thanks @guarismo and @SymbolStar.",
      "Ollama: keep explicit local model runs on target-provider runtime hooks when PI discovery is skipped, so one-shot Ollama calls no longer cold-load unrelated provider runtimes before streaming. Fixes #74078. Thanks @sakalaboator.",
      "Slack/prompts: rely on Slack `interactiveReplies` guidance instead of generic `inlineButtons` config hints so enabled Slack button directives are not contradicted. Fixes #46647. Thanks @jeremykoerber.",
      "Slack/reactions: treat duplicate `already_reacted` responses as idempotent success so repeated agent reaction adds no longer surface as tool failures. Fixes #69005. Thanks @shipitsteven and @martingarramon.",
      "Channels/Discord: cool down Cloudflare/Error 1015 HTML 429 REST failures during startup application lookup and gateway metadata fetches, add `channels.discord.applicationId` as an app-id lookup bypass, sanitize HTML bodies before logging, and honor Retry-After before falling back to a conservative cooldown. Fixes #38853. (#74489) Thanks @djgeorg3 and @Garyko0730.",
      "Slack/tools: expose `fileId` in the shared message tool schema so `download-file` can receive Slack attachment IDs from inbound placeholders. Fixes #45574. Thanks @chadvegas.",
      "Exec: reject invalid per-call `host` values instead of silently falling back to the default target, so hostname-like values fail before commands run. Fixes #74426. Thanks @scr00ge-00 and @vyctorbrzezowski.",
      "Google/Gemini: send non-empty placeholder content when a Gemini run is triggered with empty or filtered user content, avoiding `contents is not specified` API errors. Thanks @CaoYuhaoCarl.",
      "Heartbeat: preserve non-task `HEARTBEAT.md` context around `tasks:` blocks and apply `agents.defaults.heartbeat` to all agents unless per-agent heartbeat entries restrict scope. Thanks @Sekhar03.",
      "Markdown: preserve paragraph breaks inside loose list items in shared outbound formatting while keeping tight list spacing stable. Thanks @Lucenx9.",
      "Build/Gateway: route restart, shutdown, respawn, diagnostics, command-queue cleanup, and runtime cleanup through one stable gateway lifecycle runtime entry so rebuilt packages do not strand long-running gateways on stale hashed chunks. Carries forward #73964. Thanks @pashpashpash.",
      "Memory/wiki: keep broad shared-source and generated related-link blocks from turning every page into a search hit, cap noisy backlinks, support all-term searches such as people-routing queries, and prefer readable page body snippets over generated metadata. Thanks @vincentkoc.",
      "Cron/Gateway: abort and bounded-clean up timed-out isolated agent turns before recording the timeout, so stale cron sessions cannot leave Discord or other chat lanes stuck in `processing` after a timeout. Thanks @vincentkoc.",
      "Agents/errors: suppress malformed streaming tool-call JSON fragments before they reach chat surfaces while preserving provider request-validation diagnostics. Fixes #59076; keeps #59080 as duplicate coverage. (#59118) Thanks @singleGanghood.",
      "CLI/models: restore provider-filtered `models list --all --provider <id>` rows for providers without manifest/static catalog coverage, including Anthropic and Amazon Bedrock, while keeping the compatibility fallback off expensive availability and resolver paths. Thanks @shakkernerd.",
      "CLI/models: keep manifest auth-evidence credentials visible across `models status`, auth probes, and PI model discovery so workspace-scoped provider auth does not disagree between listing, probing, and execution. Thanks @shakkernerd.",
      "CLI/models: move local credential evidence such as Google Vertex ADC into generic plugin manifest setup metadata so the model-list auth index stays declarative without provider-specific runtime branches. Thanks @shakkernerd.",
      "CLI/models: compute the `models list` Auth column through one command-local provider auth index so row rendering no longer repeats auth profile, env, configured-provider, AWS, or synthetic-auth checks per model row. Thanks @shakkernerd.",
      "CLI/models: move the OpenAI listable catalog into the plugin manifest so `models list --all --provider openai` uses the manifest fast path instead of loading provider runtime normalization hooks. Thanks @shakkernerd.",
      "CLI/tools: keep the Gateway `tools.*` RPC namespace out of plugin command discovery and managed proxy startup, so stray commands like `openclaw tools effective` fail quickly instead of cold-loading plugin metadata. Refs #73477. Thanks @oromeis.",
      "CLI/status: keep default text `openclaw status --usage` on metadata-only channel scans unless `--deep` or `--all` is set, and send stray `openclaw tools --help` through the precomputed root-help fast path so latency-triage commands avoid plugin/runtime cold loads before printing. Refs #73477 and #74220. Thanks @oromeis and @NianJiuZst.",
      "Agents/diagnostics: trace embedded-run startup and preparation stage timings before model I/O, and warn only on severe slow stages, so Docker/VPS latency reports can identify whether plugin loading, auth/model resolution, tool inventory, bootstrap, MCP/LSP, resource loading, or stream setup is dominating pre-run latency without noisy normal logs. Refs #73428. Thanks @Dimaoggg, @quangtran88, and @Heyvhuang.",
      "Agents/subagents: cache persisted subagent run registry reads by file signature while preserving fresh-parse isolation, so busy gateways stop reparsing unchanged `subagents/runs.json` on controller/list/status hot paths. Refs #72338. Thanks @argus-as.",
      "Gateway/clients: wait for the event loop to become responsive before opening Gateway WebSocket RPC/probe/client connections while charging that readiness wait to caller timeouts, so Windows deferred module-evaluation stalls no longer turn healthy loopback gateways into false handshake timeouts across status, TUI, ACP, MCP, node-host, and plugin client paths. Refs #74279 and #48270. Thanks @wongcode and @joost-heijden.",
      "Gateway/Windows: read listener command lines via PowerShell before falling back to `wmic`, so restart health can recognize OpenClaw listeners on modern Windows installs and avoid long anonymous-port waits. Refs #74280. Thanks @zym951223.",
      "Plugins/runtime-deps: record process start-time in bundled dependency install locks and expire recycled-PID locks, so Docker gateway restarts recover from stale `.openclaw-runtime-deps.lock` directories without waiting through repeated five-minute timeouts. Fixes #74346. (#74361) Thanks @jhsmith409.",
      "Plugins/runtime-deps: memoize packaged bundled runtime dist-mirror preparation after the first successful pass while keeping source-checkout mirrors refreshable, so constrained Docker/VPS installs avoid repeated root scans before chat turns. Refs #73428, #73421, #73532, and #73477. Thanks @Dimaoggg, @oromeis, @oadiazp, @jmfraga, @bstanbury, @antoniusfelix, and @jkobject.",
      "Channels/Discord: treat bare numeric outbound targets that match the effective Discord DM allowlist as user DMs while preserving account-specific legacy `dm.allowFrom` precedence over inherited root `allowFrom`. (#74303) Thanks @Squirbie.",
      "Channels/Discord/Slack: share one DM policy/allowlist resolver across runtime, setup, allowlist editing, and doctor repair, so legacy `dm.policy` / `dm.allowFrom` compatibility migrates to canonical `dmPolicy` / `allowFrom` without divergent access checks. Thanks @Squirbie.",
      "Control UI: make the chat sidebar split divider focusable, keyboard-resizable, ARIA-described, and pointer-event based so sidebar resizing works without a mouse. Thanks @BunsDev.",
      "Control UI/chat: wire the slash-command autocomplete menu to the composer with stable ARIA relationships so screen readers announce the active command or argument option. Thanks @BunsDev.",
      "Agents/usage: keep PI embedded-run telemetry attributed to the resolved model provider instead of the PI harness label, so OpenRouter and other provider-backed turns report the right provider in session usage and traces. Thanks @vincentkoc.",
      "Agents/attribution: send OpenClaw attribution headers on native OpenAI and Codex traffic, including SDK transports, realtime voice and TTS, device-code auth, WHAM usage, and remote embeddings, so PI-origin defaults no longer leak into provider requests. Thanks @vincentkoc.",
      "Agents/auth: keep OAuth auth profiles inherited from the main agent read-through instead of copying refresh tokens into secondary agents, and refresh Codex app-server tokens against the owning store so multi-agent swarms avoid reused refresh-token failures. Fixes #74055. Thanks @ClarityInvest.",
      "Channels/Telegram: honor `ALL_PROXY` / `all_proxy` and service-level `OPENCLAW_PROXY_URL` when constructing the HTTP/1-only Telegram Bot API transport, so Windows and service installs that rely on those proxy settings no longer fall back to direct egress. Fixes #74014; refs #74086. Thanks @SymbolStar.",
      "Channels/Telegram: keep raw host/network-unreachable Bot API connect failures non-fatal and route tagged polling uncaught exceptions through the Telegram restart path, so transient reachability failures no longer kill the Gateway or leave long polling stuck. Fixes #60515; refs #74540. Thanks @HemantSudarshan, @thacid22, and @ewimsatt.",
      "Channels/Telegram: continue polling when `deleteWebhook` hits a transient network failure but `getWebhookInfo` confirms no webhook is configured, so startup does not retry cleanup forever after the webhook was already removed. Refs #74086; carries forward #47384. Thanks @clovericbot.",
      "Channels/Telegram: retry native quote replies without `reply_parameters.quote` when Telegram returns `QUOTE_TEXT_INVALID`, so stale or truncated quote excerpts no longer drop the whole reply. Fixes #74581. Thanks @moeedahmed.",
      "Channels/Telegram: apply strict safe-send retry to inbound final replies when grammY wraps a pre-connect failure, while leaving ambiguous plain network envelopes single-shot to avoid duplicate visible messages. Fixes #74203. Thanks @nanli2000cn.",
      "Channels/Telegram: surface polling liveness warnings in channel status and doctor when a running long-poller has not completed `getUpdates` after startup grace or its transport activity is stale, so silent polling failures no longer look clean. Refs #74299. Thanks @lolaopenclaw.",
      "Channels/Telegram: publish webhook runtime state and warn when `setWebhook` has not completed after startup grace, so webhook-mode accounts no longer look healthy while registration is still failing or retrying. Refs #74299. Thanks @lolaopenclaw and @martingarramon.",
      "Channels/Telegram: bound native command menu `deleteMyCommands` and `setMyCommands` Bot API calls and allow the same timeout-triggered transport fallback retry as other startup control calls, so Windows/WSL network stalls cannot leave command sync hanging behind an otherwise running provider. Refs #74086. Thanks @SymbolStar.",
      "ACP/commands: accept forwarded ACP timeout config controls in the OpenClaw bridge, treat unsupported discard-close controls as recoverable cleanup, and restore native `/verbose full` plus no-arg status behavior, so Discord command menus and nested ACP turns no longer fail on supported session controls. Thanks @vincentkoc.",
      "Codex harness: interrupt and release native app-server turns that go quiet after an OpenClaw dynamic-tool response without sending `turn/completed`, so Discord and other chat lanes do not stay stuck in `processing`. Thanks @vincentkoc.",
      "Codex harness: bound OpenClaw dynamic tool responses to 30 seconds and fail closed with an explicit tool result when the app-server bridge would otherwise strand the turn in `processing`. Thanks @vincentkoc.",
      "TUI/status: clear stale `streaming` footer state when a final event arrives after the active run was already cleared and no tracked runs remain, while preserving concurrent-run ownership and inactive local `/btw` terminal handling. Fixes #64825; carries forward #64842, #64843, #64847, and #64862. Thanks @briandevans and @Yanhu007.",
      "Channels/Discord: fail startup closed when Discord cannot resolve the bot's own identity and keep mention gating active when only configured mention patterns can detect mentions, so the provider no longer continues with a missing bot id. Fixes #42219; carries forward #46856 and #49218. Thanks @education-01 and @BenediktSchackenberg.",
      "Channels/Discord: split long CJK replies at punctuation and code-point-safe fallback boundaries so Discord chunking stays readable without corrupting astral characters. Fixes #38597; repairs #71384. Thanks @p3nchan.",
      "TUI: keep the streaming watchdog alive across active tool/lifecycle proof-of-life, pause it during disconnects, and reload history after stale reconnect runs so long-running chats stop flipping to false idle or hanging on stale streaming. Fixes #69081. Thanks @EenvoudJasper.",
      "Browser/gateway: ignore Playwright dialog-close races from `Page.handleJavaScriptDialog` so browser automation no longer crashes the Gateway when a dialog disappears before Playwright accepts it. (#40067) Thanks @randyjtw.",
      "Cron/Gateway: defer missed isolated agent-turn catch-up out of the channel startup window, so overdue cron work cannot starve Discord or Telegram while providers connect after a restart. Thanks @vincentkoc.",
      "Heartbeat/cron: defer heartbeat turns while cron work is active or queued, add opt-in `heartbeat.skipWhenBusy` for subagent/nested lane pressure, and retry busy skips without advancing the schedule so local Ollama hosts do not run heartbeat and cron prompts concurrently. Fixes #50773. Thanks @scottgl9.",
      "Agents/thinking: honor configured model `compat.supportedReasoningEfforts` entries that include `xhigh`, so custom OpenAI-compatible provider refs expose and validate `/think xhigh` consistently across command menus, Gateway sessions, agent CLI, and `llm-task`. Carries forward #48904. Thanks @Milchstrassse and @wufunc.",
      "Vercel AI Gateway: expose provider-owned `/think xhigh` for trusted OpenAI/Codex upstream refs and Claude adaptive thinking for Anthropic upstream refs, while leaving untrusted namespaced refs on base levels. Carries forward #41561. Thanks @Zcg2021.",
      "Plugins/runtime-deps: prune stale `openclaw-unknown-*` bundled runtime dependency roots during Gateway startup while keeping recent or locked roots, so old staging debris cannot keep growing across restarts. Thanks @vincentkoc.",
      "Plugins/runtime-deps: include ten more root-package runtime dependencies (`@agentclientprotocol/sdk`, `@lydell/node-pty`, `croner`, `dotenv`, `jiti`, `json5`, `jszip`, `markdown-it`, `tar`, `web-push`) in `MIRRORED_CORE_RUNTIME_DEP_NAMES` so they are mirrored into the runtime-deps tree alongside `semver` and `tslog`, preventing `Cannot find package 'X'` failures from core dist code (for example `qmd-manager`, `cron/schedule`, `infra/archive`, `infra/push-web`, `infra/backup-create`, `process/supervisor/adapters/pty`) when no enabled extension owns the dependency. Adds a static drift guard test that scans `src/` for value imports of root-package deps and fails CI when one is missing from the mirror allowlist or extension-owned set. Refs #74199. Thanks @maxpuppet.",
      "Ollama: compose caller abort signals with guarded-fetch timeouts for native `/api/chat` streams, so `/stop` and early cancellation still interrupt local Ollama requests that also carry provider timeout budgets. Refs #74133. Thanks @obviyus.",
      "Doctor/TTS: migrate legacy `messages.tts.enabled`, agent TTS, channel TTS, and voice-call plugin TTS toggles to `auto` mode during `openclaw doctor --fix`, matching the documented TTS config contract. Thanks @vincentkoc.",
      "CLI/logs: fall back to the configured Gateway file log when implicit loopback Gateway connections close or time out before or during `logs.tail`, so `openclaw logs` still works while diagnosing local-model Gateway disconnects. Refs #74078. Thanks @sakalaboator.",
      "MCP/plugins: stringify non-array plugin tool results with chat-content coercion instead of default object stringification, so MCP callers receive useful JSON/text content from plugin tools. Thanks @vincentkoc.",
      "Active Memory/QMD: make gateway-start QMD refresh opt-in via `memory.qmd.update.startup`, keep normal memory access lazy, preserve interactive file watching, and align watcher dependency/build ignores with QMD's scanner so cold gateway startup no longer imports or initializes QMD by default. Thanks @codexGW.",
      "Channels/Discord: remove Discord-owned queued-run timeout replies through the shared channel lifecycle queue while preserving message ordering and compatibility timeout constants, so long Discord turns stay governed by session/tool/runtime lifecycle instead of channel fallback errors. Thanks @codexGW.",
      "Agents/tools: clamp `process.poll` waits to 30 seconds, advertise that cap in the tool schema, and honor abort signals while waiting, so long command polls cannot pin agent responsiveness after cancellation. Thanks @vincentkoc.",
      "Plugin SDK: add tracked Discord component-message helpers and a Telegram account-resolution compatibility facade, so existing plugins using those subpaths resolve while new plugins stay on generic channel SDK contracts. Thanks @vincentkoc.",
      "Shared labels: preserve Unicode combining marks and NFC-equivalent accented text in group/channel slug normalization so non-Latin labels no longer lose meaningful characters. Fixes #58932; carries forward #58942 and #58995. Thanks @fengqing-git, @Starhappysh, and @koen666.",
      "Channels/Telegram: include probed video width and height when sending regular Telegram videos, so portrait clips render with the correct orientation instead of being stretched by clients. (#18915) Thanks @storyarcade.",
      "Docs/Hetzner: clarify that SSH tunnel access requires `AllowTcpForwarding local` before running `ssh -L`, so hardened VPS sshd configs do not block loopback Gateway access. Fixes #54557; carries forward #54564; refs #54954. Thanks @satishkc7, @blackstrype, and @Aftabbs.",
      "Agents/config: preserve authored `agents.defaults.params` and per-model `agents.defaults.models[].params` during narrowed internal config writes, so OpenAI transport overrides such as `transport: \"sse\"` and `openaiWsWarmup: false` are not stripped from `openclaw.json`. Fixes #73607; refs #73428. Thanks @quangtran88.",
      "Agents/model config: resolve per-model extra params through canonical model keys while preserving legacy double-prefixed fallback entries, so provider-prefixed model ids such as `openrouter/auto` keep their configured runtime params. (#44319) Thanks @HenryXiaoYang.",
      "Gateway/shutdown: report structured shutdown warnings and HTTP close timeout warnings through `ShutdownResult` while preserving lifecycle hook hardening. Carries forward #41296. Thanks @edenfunf.",
      "Control UI: keep Agents Overview and config-form select dropdowns on their configured value after options render while preserving inherited agent model placeholders. Fixes #40352; carries forward #52948. Thanks @xiaoquanidea.",
      "Agents/exec: launch zsh, bash, and fish host exec shells with startup files suppressed while preserving existing PATH fallbacks, so daemon env is not overridden by shell startup files. Carries forward #40200; fixes #40179. Thanks @NewdlDewdl.",
      "Plugins/QA: prebuild the private QA channel runtime before plugin gauntlet source runs so wrapper CPU/RSS measurements are not polluted by private QA dist rebuild work. Thanks @vincentkoc.",
      "Plugins/QA: add a Kitchen Sink plugin gauntlet that installs the external package, checks command inventory, MCP tools, channel status, provider turns, gateway RSS, CPU, and fatal log anomalies. Thanks @vincentkoc.",
      "Plugins/config: reuse the bundled plugin alias scan within a single config normalization pass, so Kitchen Sink-style plugin configs no longer peg Gateway CPU by repeatedly rescanning bundled metadata before agent turns. Thanks @vincentkoc.",
      "Plugins/channels: reject malformed runtime channel registrations that omit required config helpers before they can poison channel status. Thanks @vincentkoc.",
      "MCP/plugins: serialize raw plugin tool return values through the plugin-tools MCP bridge so Kitchen Sink-style tools no longer surface `undefined` content. Thanks @vincentkoc.",
      "Gateway/reload: bound default restart deferral and SIGUSR1 restart drain to five minutes while preserving explicit `deferralTimeoutMs: 0` indefinite waits, so stale active work accounting cannot block config reloads forever. Thanks @vincentkoc.",
      "Active Memory: register the prompt-build hook with the configured recall timeout plus setup grace instead of the 150s maximum budget, so default memory recall cannot delay turn startup for multiple minutes. Thanks @vincentkoc.",
      "Gateway/readiness: include an `eventLoop` diagnostic block in local or authenticated `/readyz` responses with event-loop delay (p99 and max), event-loop utilization, CPU core ratio, and a `degraded` flag, so operators can see when slow startups or runaway turns stall the event loop. Thanks @vincentkoc.",
      "Gateway/agents: schedule accepted agent runs after the accepted RPC frame has a chance to flush, so pre-turn prompt/context work is less likely to starve immediate `agent.wait` callers. Thanks @vincentkoc.",
      "CLI/update: tolerate stale memory-runtime import failures during best-effort CLI process teardown, so `openclaw update` replacing hashed runtime chunks before the finalizer runs no longer surfaces as exit-time `Cannot find module` noise. Thanks @vincentkoc.",
      "CLI/channels logs: reuse the rolling log-file resolver so `openclaw channels logs` falls back to the active dated log across date boundaries without reading unrelated custom log files. Fixes #42875; carries forward #42904 and #43043. Thanks @ethanclaw and @wdskuki.",
      "CLI/update: skip tracked plugins disabled in config during post-update plugin sync before npm, ClawHub, or marketplace update checks, preserving their install records without failing the update. Fixes #73880. Thanks @islandpreneur007.",
      "Control UI: fix Peak Error Hours showing incorrect hourly rates when the browser's timezone observes DST, by storing hourly message counts with UTC date keys and using DST-aware `Date.getHours()` for local conversion. Also extract `accumulateMessageCounts` helper to reduce duplicated daily/hourly aggregation logic. (#49396) Thanks @konanok.",
      "iMessage: normalize known leading attributedBody corruption markers on sent-message echo text keys so delayed reflected echoes with U+FFFD/U+FFFE/U+FFFF/FEFF prefixes are dropped without collapsing interior text. Fixes #59973; carries forward #59980 and #62191. Thanks @neeravmakwana and @maguilar631697.",
      "Security/audit: recognize dangerous node command IDs as valid `gateway.nodes.denyCommands` entries, so audit only warns on real typos or unsupported patterns. (#56923) Thanks @chziyue.",
      "Cron: treat implicit text payloads with agent-turn overrides as agent turns, preserving model overrides for scheduled text prompts instead of pruning them as system events. Fixes #28905. (#64060) Thanks @liaoandi.",
      "Telegram/exec approvals: stop treating general Telegram chat allowlists and `defaultTo` routes as native exec approvers; Telegram now uses explicit `execApprovals.approvers` or owner identity from `commands.ownerAllowFrom`, matching the first-pairing owner bootstrap path. Thanks @pashpashpash.",
      "Plugins/providers: keep Gateway startup primary-model discovery on metadata-only provider entries and reuse active non-speech capability providers even with explicit plugin entries, avoiding unnecessary provider registry loads during startup and media capability checks. Fixes #73729, #73835, and #73793; carries forward #73853 and #73794. Thanks @sg1416-zg, @brokemac79, and @poolside-ventures.",
      "Chat commands: route sensitive group `/diagnostics` and `/export-trajectory` approvals and results to a private owner route, preferring same-surface DMs before falling back to the first configured owner route, so Discord group invocations can land in Telegram when that is the primary owner interface. Thanks @pashpashpash.",
      "Gateway/hooks: keep successful `deliver:false` agent hooks silent, log a hook audit record for suppressed success announcements, and suppress fallback summaries after attempted hook delivery while still surfacing failed hook runs. Repairs #55761; builds on #36332 and #49234. Thanks @EffortlessSteven, @cioclawcode, and @BrennerSpear.",
      "Plugin SDK/Discord: restore a deprecated `openclaw/plugin-sdk/discord` compatibility facade and the legacy compat group-policy warning export for the published `@openclaw/discord@2026.3.13` package, covering its config, account, directory, status, and thread-binding imports while keeping new plugins on generic SDK subpaths. Fixes #73685; supersedes #73703. Thanks @rderickson9 and @SymbolStar.",
      "Channels/Discord: suppress duplicate gateway monitors when multiple enabled accounts resolve to the same bot token, preferring config tokens over default env fallback and reporting skipped duplicates as disabled. Supersedes #73608. Thanks @kagura-agent.",
      "CLI/health: build channel health summaries from inspected credential metadata plus runtime state, so `openclaw health --json` reports Discord `running`, `connected`, and `tokenSource` consistently with channel status. Fixes #44354. Thanks @ferenc-acs.",
      "Control UI/Talk: decode Google Live binary WebSocket JSON frames and stop queued browser audio on interruption or shutdown, so browser Talk leaves `Connecting Talk...` and barge-in no longer plays stale audio. Fixes #73601 and #73460; supersedes #73466. Thanks @Spolen23 and @WadydX.",
      "Channels/Discord: ignore stale route-shaped conversation bindings after a Discord channel is reconfigured to another agent, while preserving explicit focus and subagent bindings. Fixes #73626. Thanks @ramitrkar-hash.",
      "Agents/bootstrap: pass pending BOOTSTRAP.md contents through the first-run user prompt while keeping them out of privileged system context, and show limited bootstrap guidance when workspace file access is unavailable. Fixes #73622. Thanks @mark1010.",
      "ACP/tasks: classify parent-owned ACP sessions as background work regardless of persistent runtime mode, and close terminal stale ACP sessions when no active binding remains, so delegated ACP output reports through the parent task notifier instead of acting like a normal foreground chat session. Refs #73609. Thanks @joerod26.",
      "Tasks: keep terminal mirrored TaskFlow timestamps pinned to task completion time and let maintenance repair stale mirrors, so ACP terminal delivery updates no longer leave inconsistent flow audits. Refs #73609. Thanks @joerod26.",
      "Gateway/sessions: add conservative stuck-session recovery that releases only stale session lanes while active embedded runs, reply operations, and lane tasks remain serialized, so queued follow-ups can drain without aborting legitimate long-running turns. Refs #73581, #73655, #73652, #73705, #73647, #73602, #73592, and #73601. Thanks @WS-Q0758, @bryangauvin, @spenceryang1996-dot, @bmilne1981, @mattmcintyre, @Vksh07, and @Spolen23.",
      "Plugins: cache unchanged plugin manifest loads by file signature, reducing repeated JSON/JSON5 parsing and manifest normalization in bursty startup and runtime registry paths. Refs #73532 and #73647; carries forward #73678. Thanks @TheDutchRuler.",
      "Plugins/runtime-deps: cache unchanged bundled runtime mirror dist-file materialization decisions and close file-lock handles on owner-write failures, reducing repeated startup chunk scans and avoiding FileHandle-GC recovery stalls. Refs #73532. Thanks @oadiazp and @bstanbury.",
      "Plugins/runtime-deps: retry and defer transient cleanup failures for owned runtime staging directories so CLI startup no longer aborts after a successful bundled dependency swap. Refs #73903. Thanks @bobfreeman1989.",
      "Plugins/runtime-deps: cache bundled runtime-deps JSON/package files by file signature, reducing repeated staged-runtime metadata reads during bundled channel startup. Refs #73647 and #73705. Thanks @mattmcintyre and @bmilne1981.",
      "Plugins/runtime-deps: delegate bundled plugin dependency staging to complete npm/pnpm install plans with durable runtime state, removing retained-manifest and source-checkout cache reconciliation from Gateway startup. Refs #73532. Thanks @oadiazp, @bstanbury, and @jmfraga.",
      "Plugins/runtime-deps: replace Gateway-start root chunk dependency inference with explicit mirrored-root dependency metadata, reducing staged runtime scans while preserving lazy per-plugin installs. Refs #73532. Thanks @oadiazp and @bstanbury.",
      "Plugins/runtime-deps: run pnpm staged installs outside the repository workspace and disable pnpm release-age gates for exact bundled runtime dependency materialization, so bundled plugin dependency repair writes packages into the generated stage without blocking fresh packaged dependencies. Refs #73532. Thanks @oadiazp and @bstanbury.",
      "CLI/TUI: keep `chat.history` off model-catalog discovery so initial Gateway-backed TUI history loads cannot block behind slow provider/plugin model scans on low-core hosts. Refs #73524. Thanks @harshcatsystems-collab.",
      "Channels/WhatsApp: flag recently reconnected linked accounts in channel status even when the socket is currently healthy, so flapping WhatsApp Web sessions no longer look clean after a brief reconnect. Refs #73602. Thanks @Vksh07.",
      "Channels/WhatsApp: log shared dispatcher delivery failures with reply kind, message id, chat id, and connection id, so typing-without-send reports can identify whether the WhatsApp send path rejected a generated reply. Refs #74269. Thanks @tomcosta-git.",
      "Feishu: suppress distinct late `final` text deliveries after a streaming card has already closed, while keeping media attachments deliverable, so late-finals no longer reopen duplicate Feishu cards. Fixes #71977. (#72294) Thanks @MonkeyLeeT.",
      "Gateway: expose `gateway.handshakeTimeoutMs` in config, schema, and docs while preserving `OPENCLAW_HANDSHAKE_TIMEOUT_MS` precedence, so loaded or low-powered hosts can tune local WebSocket pre-auth handshakes without patching dist files. Supersedes #51282; refs #73592 and #73652. Thanks @henry-the-frog.",
      "Gateway/TUI/status: align configured and env-based WebSocket handshake budgets across local clients, probes, and fallback RPCs while preserving explicit status timeouts and paired-device auth fallback, so slow local gateways are not marked unreachable by a shorter client watchdog. Refs #73524, #73535, #73592, and #73602. Thanks @harshcatsystems-collab, @DJBlackhawk, and @Vksh07.",
      "Gateway/startup: return retryable `UNAVAILABLE` during the sidecar startup window and keep CLI/TUI/status clients retrying inside their existing timeout budget, so early connects no longer surface as terminal handshake failures. Fixes #73652. Thanks @spenceryang1996-dot.",
      "Gateway/proxy: bypass inherited proxy environment for local Gateway control-plane WebSockets to `localhost` as well as loopback IPs, so Windows/WSL proxy settings cannot intercept local CLI/TUI Gateway connections. Supersedes #73474; refs #73602. Thanks @DhtIsCoding.",
      "Doctor/Gateway: use a lightweight `status` RPC without channel summary work for doctor Gateway liveness, so slow health snapshots do not falsely drive service restart repair. Fixes #64400; supersedes #64511. Thanks @CHE10X and @EronFan.",
      "Agents/auth: scope external CLI credential discovery to configured providers during model auth status and startup prewarm, so opencode-only and other single-provider gateways do not block on unrelated Claude CLI Keychain probes. Fixes #73908. Thanks @Ailuras.",
      "Agents/model selection: resolve slash-form aliases before provider/model parsing and keep alias-resolved primary models subject to transient provider cooldowns, so cron and persisted sessions do not retry cooled-down raw aliases. Fixes #73573 and #73657. Thanks @akai-shuuichi and @hashslingers.",
      "Agents/Claude CLI: reuse already-cached macOS Keychain credentials for no-prompt Claude credential reads, so doctor/runtime checks do not miss fresh interactive Claude auth. Fixes #73682. Thanks @RyanSandoval.",
      "Agents/Claude CLI doctor: scope workspace and project-dir checks to agents that actually use the Claude CLI runtime, so non-default Claude agents no longer make the default agent look Claude-backed. Fixes #73903. Thanks @bobfreeman1989.",
      "Gateway/sessions: expose effective agent runtime metadata on session rows, `sessions.patch`, and local `openclaw sessions --json`, while keeping Claude CLI-backed rows on the canonical model provider so runtime backend and model identity are no longer conflated. Fixes #73090. Thanks @vishutdhar.",
      "Gateway/auth status: scope external CLI credential overlays to configured providers, runtimes, or profiles and keep status reads off new Keychain prompts, so single-provider Gateway configs no longer probe unrelated Claude/Codex/MiniMax auth on startup. Fixes #73908. Thanks @Ailuras.",
      "Agents/runtime status: expose effective agent runtime metadata in `agents.list`, Control UI agent panels, and `/agents`, and avoid rendering stale or cumulative CLI token totals as live context usage. Fixes #73660, #73578, and #45268. Thanks @spartman, @DashLabsDev, and @xyooz.",
      "Agents/transcripts: strip empty assistant text blocks while preserving valid text, images, and signatures, so Anthropic-style providers no longer reject sanitized transcript turns. Fixes #73640. Thanks @jowhee327.",
      "Gateway/sessions: preserve session keys on hidden lifecycle events so channel-routed runs still persist terminal session state and do not strand session status as running after Codex turn completion. Thanks @cathrynlavery.",
      "Providers/Bedrock: omit deprecated `temperature` for Claude Opus 4.7 Bedrock model ids, named and application inference profiles, including dotted `opus-4.7` refs, and classify the nested validation response for failover. Fixes #73663. Thanks @bstanbury.",
      "Gateway: raise the preauth/connect-challenge timeout to 15s so cold CLI starts on slower hosts have more time to process the WebSocket challenge before the Gateway closes the connection. Fixes #51469; refs #73592 and #62060. Thanks @GothicFox and @jackychen-png.",
      "CLI/status: fall back to a bounded local `status` RPC when loopback detail probes time out or report unknown capability, so reachable local gateways are no longer marked unreachable by slow read diagnostics. Fixes #73535; refs #48360, #62762, #51357, and #42019. Thanks @RacecarGuy, @justinschille, @DJBlackhawk, @tianyaqpzm, and @0xrsydn.",
      "CLI/gateway: reuse cached paired-device auth during `gateway probe` and report post-connect diagnostic failures as degraded reachability, so healthy local gateways are no longer marked unreachable after loopback auth or read timeouts. Fixes #48360. Thanks @RacecarGuy.",
      "Channels/Discord: give Discord Gateway WebSocket handshakes a 30s timeout so stalled TLS/network transitions emit an error and Carbon can continue its reconnect loop instead of leaving the bot silent until restart. Refs #50046. Thanks @codexGW.",
      "Mattermost/WebSocket: send protocol ping/pong keepalives and terminate stale sessions when pongs stop arriving, so silent TCP drops reconnect instead of leaving monitoring idle. Fixes #41837; carries forward #57621; refs #50138, #44160, and #51104. Thanks @JasonWang1124.",
      "Channels/Telegram: suppress standalone failed edit/write warning payloads when a user-facing assistant error reply already covers the turn, while keeping unresolved mutating failures visible behind success-looking or suppressed-error replies. Fixes #39631; refs #73750; carries forward #39636 and #39717; leaves #39406 for configurable delivery policy. Thanks @Bartok9 and @Bortlesboat.",
      "Control UI/agents: persist the Set Default action through `agents.list[].default` instead of writing the unsupported `agents.defaultId` field, so saved default-agent changes survive config validation. Fixes #65565; carries forward #72585. Thanks @luyao618.",
      "NVIDIA/NIM: persist the `NVIDIA_API_KEY` provider marker and mark bundled NVIDIA Chat Completions models as string-content compatible, so NIM models load from `models.json` and OpenAI-compatible subagent calls send plain text content. Fixes #73013 and #50107; refs #73014. Thanks @bautrey, @iot2edge, @ifearghal, and @futhgar.",
      "Channels/Discord: let text-only configs drop the `GuildVoiceStates` gateway intent and expose a bounded `/gateway/bot` metadata timeout with rate-limited fallback logs, reducing idle CPU and warning floods. Fixes #73709 and #73585. Thanks @sanchezm86 and @trac3r00.",
      "Agents/sessions: mark same-turn `sessions_send` and A2A reply prompts with an inter-session `isUser=false` envelope before they reach the model, so foreign session output no longer lands as bare active user text. Fixes #73702; refs #73698, #73609, #73595, and #73622. Thanks @alvelda.",
      "Channels/Telegram: fail closed when account-level public DM settings conflict with a restrictive top-level `allowFrom`, and require an effective wildcard before `dmPolicy=\"open\"` behaves as public access. Fixes #73756; refs #73698. Thanks @Hilo-Hilo and @xace1825.",
      "Channels/security: move open-DM allowlist semantics into the shared policy helpers and align Discord, Slack, Mattermost, Matrix, Feishu, LINE, IRC, Google Chat, Zalo, Zalo User, QQ Bot, and Synology Chat so `dmPolicy=\"open\"` is public only with an effective wildcard and otherwise still respects sender allowlists. Refs #73756 and #73698. Thanks @Hilo-Hilo and @xace1825.",
      "ACP/tasks: sweep orphaned parent-owned ACP sessions whose task records are gone, preserving bound persistent sessions but clearing unbound stale ACPX metadata so old child sessions cannot silently respawn into chat. Fixes #73609. Thanks @joerod26.",
      "Outbound/security: strip known internal runtime scaffolding such as `<system-reminder>` and `<previous_response>` at the final channel delivery boundary and keep Discord output on targeted tag stripping, so degraded harness replies cannot leak those tags to users. Fixes #73595. Thanks @gabrielexito-stack and @martingarramon.",
      "Security/Telegram: load Telegram security adapters in read-only audit/doctor, audit malformed Telegram DM `allowFrom` entries even when groups are disabled, and keep allowlist DM audits from counting stale pairing-store senders, so public/shared-DM risk checks stay accurate. Refs #73698. Thanks @xace1825.",
      "Plugins: remove hidden manifest, provider-owner, bootstrap, and channel metadata caches so plugin installs, manifest edits, and bundled-root changes are visible on the next metadata read while keeping runtime/module loader caches for actual plugin code. Thanks @shakkernerd.",
      "Control UI/WebChat: create a fresh dashboard session from the New Chat button instead of resetting the current transcript with `/new`, preserving in-progress composer edits during delayed session creation or when creation cannot safely switch sessions, and showing clear retry feedback when creation is blocked, refreshing, or returns no new session. Carries forward #52042 and #52746. Thanks @bobashopcashier and @vincentkoc.",
      "CLI/plugins: use plugin metadata snapshots for install slot selection and add opt-in plugin lifecycle timing traces, so plugin install avoids runtime-loading the plugin registry for metadata-only decisions. Thanks @shakkernerd.",
      "fix(plugins): restrict bundled plugin dir resolution to trusted package roots. (#73275) Thanks @pgondhi987.",
      "fix(security): prevent workspace PATH injection via service env and trash helpers. (#73264) Thanks @pgondhi987.",
      "Active Memory: allow `allowedChatTypes` to include explicit portal/webchat sessions and classify `agent:...:explicit:...` session keys before opaque session ids can shadow the chat type. Fixes #65775. (#66285) Thanks @Lidang-Jiang.",
      "Active Memory: allow the hidden recall sub-agent to use both `memory_recall` and the legacy `memory_search`/`memory_get` memory tool contract, so bundled `memory-lancedb` recall works without breaking the default `memory-core` path. Fixes #73502. (#73584) Thanks @Takhoffman.",
      "fix(device-pairing): validate callerScopes against resolved token scopes on repair [AI]. (#72925) Thanks @pgondhi987.",
      "Active Memory docs: document the `cacheTtlMs` 1000-120000 ms range and 15000 ms default so setup snippets do not lead users past the schema limit. Fixes #65708. (#65737) Thanks @WuKongAI-CMU.",
      "fix(agents): canonicalize provider aliases in byProvider tool policy lookup [AI]. (#72917) Thanks @pgondhi987.",
      "fix(security): block npm_execpath injection from workspace .env [AI-assisted]. (#73262) Thanks @pgondhi987.",
      "Tools/web_fetch: decode response bodies from raw bytes using declared HTTP, XML, or HTML meta charsets before extraction, so Shift_JIS and other legacy-charset pages no longer return mojibake. Fixes #72916. Thanks @amknight.",
      "Active Memory: skip payload-less `memory_search` transcript tool results when building debug telemetry, so newer empty entries no longer hide the latest useful debug payload. (#68773) Thanks @SimbaKingjoe.",
      "Active Memory: keep recall setup time from consuming the configured model timeout while giving the hook runner an explicit bounded budget for the plugin, so slow embedded-run setup no longer causes immediate recall timeouts. Fixes #72606. (#72620) Thanks @hyspacex.",
      "Channels/Discord: bound message read/search REST calls, route those actions through Gateway execution, and fall back to `CommandTargetSessionKey` for inbound hook session keys so Discord reads do not hang and hooks still fire when `SessionKey` is empty. Fixes #73431. (#73521) Thanks @amknight.",
      "Plugins/media: auto-enable provider plugins referenced by `agents.defaults.imageGenerationModel`, `videoGenerationModel`, and `musicGenerationModel` primary/fallback refs, so configured Google and MiniMax media providers do not stay disabled behind a restrictive plugin allowlist. Thanks @vincentkoc.",
      "Memory-core/dreaming: retry managed dreaming cron registration after startup when the cron service is not reachable yet, so the scheduled Memory Dreaming Promotion sweep recovers without waiting for heartbeat traffic. Fixes #72841. Thanks @amknight.",
      "Acpx/runtime: validate the runtime session mode at the `AcpxRuntime.ensureSession` wrapper boundary so callers that pass anything other than `persistent` or `oneshot` get a clear `ACP_INVALID_RUNTIME_OPTION` error instead of silently round-tripping through the encoded handle as a default `persistent` mode and later throwing `SessionResumeRequiredError`. Investigation context: #73071. (#73548) Thanks @amknight.",
      "CLI/infer: keep web-search fallback on missing provider API keys, preserve structured validation errors from the selected provider, and let per-request image describe prompts override configured media-entry prompts. (#63263) Thanks @Spolen23.",
      "Chat commands: include configured model-catalog reasoning metadata when building `/think` argument menus so Ollama Cloud and other provider-owned reasoning models show supported levels instead of only `off`. Fixes #73515; supersedes #73568. Thanks @danielzinhu99 and @neeravmakwana.",
      "Channels/Telegram: suppress generic tool-progress chatter when preview streaming is off, so non-streaming Telegram turns only deliver final replies while approvals, media, and errors still route normally. Refs #72363 and #72482. Thanks @neeravmakwana and @SweetSophia.",
      "CLI/model probes: add repeatable image `--file` inputs to `infer model run` for local and gateway multimodal model smokes, so vision models such as Ollama Qwen VL and Gemini can be tested through the raw model-probe surface. Fixes #63700. Thanks @cedricjanssens.",
      "CLI/model probes: request trusted operator scope for `infer model run --gateway --model <provider/model>` so Gateway raw model smokes can use one-off provider/model overrides instead of being rejected before provider auth resolution. Fixes #73759. Thanks @chrislro.",
      "CLI/image describe: pass `--prompt` and `--timeout-ms` through `infer image describe` and `describe-many`, so custom vision instructions and slow local model budgets reach media-understanding providers such as Ollama, OpenAI, Google, and OpenRouter. Refs #63700. Thanks @cedricjanssens.",
      "Model selection: include the rejected provider/model ref and allowlist recovery hint when a stored session override is cleared, so local model selections such as Gemma GGUF variants do not fall back to the default with a generic message. Refs #71069. Thanks @CyberRaccoonTeam.",
      "OpenAI-compatible providers: drop malformed event-only or blank-data SSE frames before the OpenAI SDK stream parser sees them, so proxies that split `event:` from `data:` no longer crash streaming runs with `Unexpected end of JSON input`. Fixes #52802. Thanks @LyHug.",
      "Gateway/OpenAI-compatible streaming: strip `<final>` tags split across streamed model deltas before they reach SSE clients, so `/v1/chat/completions` no longer emits tag remnants or drops content when final-answer wrappers cross chunk boundaries. Fixes #63325. Thanks @tzwickl.",
      "Ollama: resolve explicitly selected signed-in `:cloud` models through `/api/show` when `/api/tags` omits them, so working models such as `gemini-3-flash-preview:cloud` and `deepseek-v4-pro:cloud` do not fail dynamic model resolution before the native `/api/chat` transport runs. Fixes #73909. Thanks @chtse53.",
      "Discord/exec approvals: keep the local `/approve` prompt when no native Discord approval runtime is active, and send a manual fallback notice when native approval delivery reaches no targets, so failed DM cards no longer leave approval turns silent or dependent on model-written shell commands. Fixes #73954; carries forward #74027. Thanks @guarismo and @brokemac79.",
      "Local model prompt caching: keep stable Project Context above volatile channel/session prompt guidance and stop embedding current channel names in the message tool description, so Ollama, MLX, llama.cpp, and other prefix-cache backends avoid avoidable full prompt reprocessing across channel turns. Fixes #40256; supersedes #40296. Thanks @rhclaw and @sriram369.",
      "Gateway/OpenAI-compatible API: guard provider policy lookup against runtime providers with non-array `models` values, so `/v1/chat/completions` no longer fails with `provider?.models?.some is not a function`. Fixes #66744; carries forward #66761. Thanks @MightyMoud, @MukundaKatta.",
      "WhatsApp/Web: pass explicit Baileys socket timings into every WhatsApp Web socket and expose `web.whatsapp.*` keepalive, connect, and query timeout settings so unstable networks can avoid repeated 408 disconnect and opening-handshake timeout loops. Fixes #56365. (#73580) Thanks @velvet-shark.",
      "WhatsApp/Web: recover recently active listeners when a post-408 reconnect keeps receiving transport frames but stops delivering app messages, while keeping group metadata fallback off Baileys sends. Fixes #63855 and #66920; refs #7433, #67986, #70856, #60007, and #72621. Thanks @legonhilltech-jpg, @octopuslabs-fl, @Kanorin-chan, and @stuswan.",
      "Channels/Telegram: persist native command metadata on target sessions so topic, helper, and ACP-bound slash commands keep their session metadata attached to the routed conversation. (#57548) Thanks @GaosCode.",
      "Channels/native commands: keep validated native slash command replies visible in group chats while preserving explicit owner allowlists for command authorization. (#73672) Thanks @obviyus.",
      "Pairing/doctor: bootstrap `commands.ownerAllowFrom` from the first approved DM pairing when no command owner exists, and have doctor explain missing owners so privileged slash commands are not accidentally unusable after onboarding. Thanks @pashpashpash.",
      "Telegram/exec: infer native exec approvers from `commands.ownerAllowFrom` and auto-enable the Telegram approval client when an owner is resolvable, so owner-only commands such as `/diagnostics` can be approved in Telegram without duplicate per-channel approver config. Thanks @pashpashpash.",
      "Auto-reply/session: carry the tail of user/assistant turns into the freshly-rotated transcript on silent in-reply session resets (compaction failure, role-ordering conflict) so direct-chat continuity survives the rebind. Fixes #70853. (#70898) Thanks @neeravmakwana.",
      "Skills: load grouped skill directories such as `skills/<group>/<skill>/SKILL.md` from configured skill roots while keeping grouped discovery capped for large directories. Fixes #56915. (#72534) Thanks @ottodeng, @MoerAI, and @i010542.",
      "Config: skip malformed non-string `env.vars` entries before env-reference checks, so config loading no longer crashes on JSON values like numbers or booleans. (#42402) Thanks @MiltonHeYan.",
      "Docker Compose: default missing config and workspace bind mounts to `${HOME:-/tmp}/.openclaw` so manual compose runs do not create invalid empty-source volume specs. (#64485) Thanks @jlapenna.",
      "Agents/context engines: preserve the child agent's configured `agentDir` when subagent cleanup re-resolves a context engine, so `onSubagentEnded` hooks keep operating on the correct per-agent state. (#67243) Thanks @jarimustonen.",
      "Channels/WhatsApp: restrict pairing verification replies to real inbound user content, preventing unsolicited prompts from receipts, typing indicators, presence updates, and other non-message Baileys upserts. Fixes #73797. (#73823) Thanks @hclsys.",
      "Configure/Ollama: show the configured Ollama model allowlist after Cloud only or Cloud + Local setup and skip slow per-model cloud metadata fetches. (#73995) Thanks @obviyus.",
      "Channels/WhatsApp: detect explicit group `@mentions` again when the bot's own E.164 is in `allowFrom`, so shared-number setups no longer skip group pings that directly mention the bot. Fixes #49317. (#73453) Thanks @juan-flores077.",
      "WhatsApp/reliability: publish real transport-liveness into WhatsApp channel status and force earlier reconnects on silent transport stalls, so quiet healthy sessions stay connected while wedged sockets recover before the later remote 408 path. (#72656) Thanks @Sathvik-1007.",
      "Core/channels: tighten selected runtime, media, and plugin edge-case handling while preserving existing behavior. Thanks @jesse-merhi.",
      "Channels/WhatsApp: strip leaked plural tool-call XML wrappers on every WhatsApp-visible outbound path and keep channel error payloads out of WhatsApp chats. (#71830) Thanks @rubencu.",
      "Agents/embedded-runner: inject the resolved OAuth bearer (and forward the run abort signal) on the boundary-aware embedded stream fallback so models that route through `openai-codex-responses` and other boundary-aware transports stop failing with `401 Unauthorized: Missing bearer or basic authentication in header`. Fixes #73559. (#73588) Thanks @openperf.",
      "Telegram/gateway: bound outbound Bot API calls and cache bundled plugin alias lookup so slow Telegram sends or WSL2 filesystem scans no longer wedge gateway replies. (#74210) Thanks @obviyus.",
      "Configure/GitHub Copilot: reuse existing Copilot auth during configure and show the provider's manifest model catalog in the model picker. (#74276) Thanks @obviyus.",
      "Configure/models: keep the model picker scoped to the selected manifest provider and enable its bundled plugin before catalog lookup, so choosing GitHub Copilot no longer falls back to Ollama or skips the catalog. (#74322) Thanks @obviyus.",
      "Auto-reply/subagents: reject `/focus` from leaf subagents and scope fallback target resolution to the requesting subagent's children, so subagents cannot bind conversations outside their control boundary. (#73613) Thanks @drobison00.",
      "Gateway/startup: skip inherited workspace startup memory for sandboxed spawned sessions without real-workspace write access, so `/new` no longer preloads host workspace memory into isolated child runs. (#73611) Thanks @drobison00.",
      "Agents/tool policy: validate caller group IDs against session or spawned context before applying group-scoped tool policies or persisting gateway group metadata, so forged group IDs cannot unlock more permissive tools. (#73720) Thanks @mmaps.",
      "Commands: keep channel-prefixed owner allowlist entries scoped to matching providers so webchat command contexts cannot inherit external channel owners. Thanks @zsxsoft.",
      "Auth/device pairing: bound bootstrap handoff token issuance, redemption, and approved pairing baselines to the documented per-role scope allowlist, so bootstrap approvals cannot persistently grant `operator.admin`, `operator.pairing`, or `node.exec` scopes. Thanks @eleqtrizit.",
      "Providers/GitHub Copilot: support the GUI/RPC wizard device-code auth flow so onboarding from non-TTY clients (gateway RPC bridge, GUI wizards) completes instead of returning empty profiles. Dangerous-state handling now distinguishes `access_denied` and `expired_token` from transport errors. (#73290) Thanks @indierawk2k2.",
      "Installer/Linux: warn before switching an unwritable npm global prefix to `~/.npm-global`, then tell users to run future global updates with `npm i -g openclaw@latest` without `sudo` so npm keeps using the redirected user prefix. Fixes #44365; carries forward #50479. Thanks @Sayeem3051.",
      "Gateway/plugins: enable the native `require()` fast path on Windows for bundled plugin modules so plugin loading uses `require()` instead of Jiti's transform pipeline, reducing startup from ~39s to ~2s on typical 6-plugin setups. Fixes #68656. (#74173) Thanks @galiniliev.",
      "macOS app: detect stale Gateway TLS certificate pins, automatically repair trusted Tailscale Serve rotations, and surface paired-but-disconnected Mac companion nodes so partial Gateway connections no longer look healthy. Thanks @guti.",
      "Feishu: recreate WebSocket clients with monitor-owned backoff only after SDK reconnect exhaustion, preserving heartbeat defaults and shutdown cleanup without treating recoverable SDK callback errors as terminal, so persistent connections recover without manual gateway restart. Fixes #52618; duplicate evidence #59753; related #55532, #68766, #72411, and #73739. Thanks @vincentkoc, @schumilin, @alex-xuweilong, @120106835, @sirfengyu, and @tianhaocui."
    ]
  },
  {
    "version": "2026.4.27",
    "date": "2026.4.27",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427",
    "features": [
      {
        "title": "Codex Computer Use setup now ships with status/install commands, marketplac...",
        "description": "Codex Computer Use setup now ships with status/install commands, marketplace discovery, and fail-closed MCP checks for Codex-mode desktop control. Thanks @pash-openai.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "DeepInfra joins the bundled provider set with model discovery, media genera...",
        "description": "DeepInfra joins the bundled provider set with model discovery, media generation/editing, TTS, embeddings, and provider-owned onboarding policy. Thanks @ats3v.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Tencent Yuanbao and QQBot support expand channel coverage with Yuanbao docs...",
        "description": "Tencent Yuanbao and QQBot support expand channel coverage with Yuanbao docs/catalog entries and QQBot group chat, streaming, media upload, and pipeline refactors. Thanks @loongfay and @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin startup and model catalogs move toward manifest-first metadata, redu...",
        "description": "Plugin startup and model catalogs move toward manifest-first metadata, reducing Gateway boot work and making provider rows/aliases/suppressions easier to audit. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Reliability fixes cover Telegram startup/sends, Slack socket/media stalls,...",
        "description": "Reliability fixes cover Telegram startup/sends, Slack socket/media stalls, gateway startup prewarm, session/history defaults, update sync, and Windows restart handoffs. Thanks @joerod26, @obviyus, @shivasymbl, @freerk, @bassboy2k, @jpreagan, @islandpreneur007, and @Thatgfsj.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Sandbox/Docker",
        "description": "add opt-in `sandbox.docker.gpus` passthrough for Docker sandbox containers so local GPU workloads can run inside sandboxed agents when the host Docker runtime supports `--gpus`. Fixes #57976; carries forward #58124. Thanks @cyan-ember.",
        "href": "https://github.com/openclaw/openclaw/issues/57976"
      },
      {
        "title": "iOS/Gateway",
        "description": "add an authenticated `node.presence.alive` protocol event and `node.list` last-seen fields so background iOS wakes can mark paired nodes recently alive without treating them as connected. Carries forward #63123. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/63123"
      },
      {
        "title": "Android",
        "description": "publish authenticated `node.presence.alive` events after node connect and background transitions so paired Android nodes retain durable last-seen metadata after disconnects. Carries forward #63123. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/63123"
      },
      {
        "title": "Gateway/chat",
        "description": "accept non-image attachments through `chat.send` by staging them as agent-readable media paths, while keeping unsupported RPC attachment paths explicit instead of silently dropping files. Fixes #48123. (#67572) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/67572"
      },
      {
        "title": "Security/networking",
        "description": "add opt-in operator-managed outbound proxy routing (proxy.enabled + proxy.proxyUrl/OPENCLAW_PROXY_URL) with strict http:// forward-proxy validation, loopback-only Gateway bypass, and cleanup of proxy env/dispatcher state on exit. (#70044) Thanks @jesse-merhi and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/70044"
      },
      {
        "title": "Dependencies",
        "description": "refresh provider and tooling dependencies, including AWS SDK, PI runtime packages, AJV, Feishu SDK, Anthropic SDK, tokenjuice, and native TypeScript/oxlint tooling. Thanks @dependabot.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Matrix/QA",
        "description": "add live Matrix approval scenarios for exec metadata, chunked fallback, plugin approvals, deny reactions, thread targeting, and `target: \"both\"` delivery, with redacted artifacts preserving safe approval summaries. Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Diagnostics/Codex",
        "description": "add owner-only core `/diagnostics` with a sensitive-data preamble, docs link, and explicit Gateway export approval guidance; Codex harness sessions also ask before uploading Codex feedback for the attached thread and print the matching `codex resume <thread-id>` inspection command after confirmed upload. Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Trajectory export",
        "description": "route `/export-trajectory` through per-run exec approval, send group-chat approval prompts and export results only to the owner privately, and add `openclaw sessions export-trajectory` for the approved command path. Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Codex",
        "description": "add Computer Use setup for Codex-mode agents, including `/codex computer-use status/install`, marketplace discovery, optional auto-install, and fail-closed MCP server checks before Codex-mode turns start. Fixes #72094. (#71842) Thanks @pash-openai.",
        "href": "https://github.com/openclaw/openclaw/pull/71842"
      },
      {
        "title": "Apps",
        "description": "consume Peekaboo 3.0.0-beta4 and ElevenLabsKit 0.1.1, align Swabble on Commander 0.2.2, and refresh macOS/iOS SwiftPM resolutions against the released dependency graph. Thanks @Blaizzy.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK",
        "description": "expose shared channel route normalization, parser-driven target resolution, raw-target compact keys, parsed-target types, and route comparison helpers through `openclaw/plugin-sdk/channel-route`, switch native approval origin matching onto that route contract with optional delivery and match-only target normalization, and retire the internal channel-route shim behind dated compatibility aliases for legacy key/comparable-target helpers. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Docs/Codex",
        "description": "document how Codex Computer Use, direct `cua-driver mcp`, and OpenClaw.app's PeekabooBridge fit together so desktop-control setup choices are clearer. Thanks @pash-openai and @trycua.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Matrix/streaming",
        "description": "stream tool-progress updates into live Matrix preview edits by default when preview streaming is active, with `streaming.preview.toolProgress: false` to keep answer previews while hiding interim tool lines. Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugins/models",
        "description": "wire manifest `modelCatalog.aliases` and `modelCatalog.suppressions` into model-catalog planning and built-in model suppression, with stale Spark and Qwen Coding Plan suppressions now declared in plugin manifests instead of runtime fallback hooks. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/models",
        "description": "add a shared manifest-backed provider catalog builder and move Qianfan, Xiaomi, NVIDIA, Cerebras, Mistral, Moonshot, DeepSeek, Tencent TokenHub, and StepFun provider catalogs onto their plugin manifest `modelCatalog` rows. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/models",
        "description": "move BytePlus and Volcano Engine standard and plan-provider catalogs into plugin manifest `modelCatalog` rows and remove the now-unused Volcengine-family shared catalog SDK subpath. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "CLI/models",
        "description": "move Fireworks and Together AI fixed provider catalogs into plugin manifest `modelCatalog` rows so provider-filtered listing can use manifest-backed static rows. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "CLI/models",
        "description": "move Groq's fixed text model catalog into the Groq plugin manifest and declare its setup auth env metadata so provider-filtered listing can use manifest-backed rows without deprecated auth metadata. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "CLI/models",
        "description": "move Venice's 41-row seed catalog into the Venice plugin manifest, derive runtime fallback rows from that manifest, and keep Venice API discovery as refreshable runtime work instead of a second hard-coded catalog. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Channels/Yuanbao",
        "description": "register the Tencent Yuanbao external channel plugin (`openclaw-plugin-yuanbao`) in the official channel catalog, contract suites, and community plugin docs, with a new `docs/channels/yuanbao.md` quick-start guide for WebSocket bot DMs and group chats. (#72756) Thanks @loongfay.",
        "href": "https://github.com/openclaw/openclaw/pull/72756"
      },
      {
        "title": "Channels/QQBot",
        "description": "add full group chat support (history tracking, @-mention gating, activation modes, per-group config, FIFO message queue with deliver debounce), C2C `stream_messages` streaming with a `StreamingController` lifecycle manager, unified `sendMedia` with chunked upload for large files, and refactor the engine into pipeline stages, focused outbound submodules, builtin slash-command modules, and explicit DI ports via `createEngineAdapters()`. (#70624) Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/pull/70624"
      },
      {
        "title": "Plugins/startup",
        "description": "migrate bundled plugin manifests to explicit `activation.onStartup` declarations so Gateway startup imports only the bundled plugins that intentionally register startup-time runtime surfaces. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugins/startup",
        "description": "add an opt-in future-mode gate for disabling deprecated implicit startup sidecar loading while preserving explicit startup and narrower activation triggers. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugins/startup",
        "description": "add plugin compatibility warnings for deprecated implicit startup loading so authors can migrate to explicit `activation.onStartup` metadata. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugins/runtime",
        "description": "load bundled agent tool-result middleware from manifest contracts on demand so tokenjuice stays startup-lazy without losing Pi/Codex tool-output compaction. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugins/startup",
        "description": "add explicit `activation.onStartup` metadata so plugins can declare Gateway startup import behavior while the deprecated implicit sidecar fallback remains for legacy plugins. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Gateway/startup",
        "description": "reuse lookup-table plugin manifests when loading startup plugins so Gateway boot avoids rebuilding plugin discovery and manifest metadata. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "CLI/models",
        "description": "declare fixed Qianfan, Xiaomi, NVIDIA, Cerebras, Mistral, Chutes, Kilo, OpenAI, and OpenCode Go model catalogs in refreshable plugin manifests, keep broad `models list --all` on raw registry and supplement rows without runtime normalization, and avoid duplicate supplement resolution. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Gateway/runtime",
        "description": "reuse the current plugin metadata snapshot for provider discovery so repeated model-provider discovery avoids rebuilding plugin manifest metadata. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Gateway/startup",
        "description": "pass the plugin metadata snapshot from config validation into plugin bootstrap so startup reuses one manifest product instead of rebuilding plugin metadata. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "move core-only channel contract fixtures under the channel contract test tree and retire the old `test/helpers/channels` bridge directory so plugin tests stay on focused SDK surfaces. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "expose native agent-runtime contract fixtures through `plugin-sdk/agent-runtime-test-contracts`, move sandbox config fixtures into the focused generic fixture subpath, and block extension tests from importing repo-only `test/helpers` bridges. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "expose generic module reload, bundled-path, Node builtin mock, channel pairing/envelope, HTTP server, temp-home, replay-policy, and live STT helpers through focused SDK test subpaths so extension tests no longer depend on repo-only helper bridges. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK",
        "description": "move maintained bundled channels off the deprecated `channel-config-schema-legacy` subpath, add an explicit bundled-channel schema SDK surface, and track both remaining legacy test/config compatibility barrels with dated removal windows. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "expose media provider capability assertions and provider HTTP mocks through focused SDK test subpaths, and retire the repo-only media-generation test helper bridge. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "promote bundled plugin/provider/channel contract helpers to focused SDK test subpaths and retire the repo-only `test/helpers/plugins` TypeScript bridge. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "expose generic channel action, setup, status, and directory contract helpers through `plugin-sdk/channel-test-helpers` so bundled extension tests no longer import repo-only channel helper bridges. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "add `plugin-sdk/channel-target-testing` for shared channel target-resolution cases, document channel reaction helpers on `plugin-sdk/channel-feedback`, and keep the old `plugin-sdk/test-utils` alias as compatibility-only. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "add a focused generic fixture subpath for CLI capture, sandbox, skill, agent-message, system-event, terminal, chunking, auth-token, and typed-case helpers. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "add focused plugin runtime and environment fixture subpaths so plugin tests can avoid the broad `plugin-sdk/testing` barrel for common setup helpers. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "add a focused `plugin-sdk/plugin-test-api` helper subpath and move bundled plugin registration tests off the repo-only plugin API bridge. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Plugin SDK",
        "description": "add generic host hooks for session state, next-turn context, trusted tool policy, UI descriptors, events, scheduler cleanup, and run-scoped plugin context. (#72287) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/72287"
      },
      {
        "title": "Plugin SDK/testing",
        "description": "expose provider catalog, wizard, registry, manifest, public-artifact, outbound, and TTS contract helpers through documented SDK testing seams so bundled plugin tests no longer import repo `src/**` internals. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026427"
      },
      {
        "title": "Providers/DeepInfra",
        "description": "add a bundled DeepInfra provider with `DEEPINFRA_API_KEY` onboarding, dynamic OpenAI-compatible model discovery, image generation/editing, image/audio media understanding, TTS, text-to-video, memory embeddings, static catalog metadata, and provider-owned base URL policy. Carries forward #53805, #48088, #37576, #43896, #11533, and #2554. Thanks @ats3v.",
        "href": "https://github.com/openclaw/openclaw/issues/53805"
      },
      {
        "title": "Matrix",
        "description": "attach versioned structured approval metadata to pending approval messages so capable Matrix clients can render richer approval UI while body text and reaction fallback keep working. (#72432) Thanks @kakahu2015.",
        "href": "https://github.com/openclaw/openclaw/pull/72432"
      }
    ],
    "fixes": [
      "CLI/channel-setup: auto-skip the redundant \"Install \\<plugin\\>?\" confirmation when only one install source (npm or local) exists, show `download from <npm-spec>` hints for installable catalog channels in the picker, and suppress misleading npm hints for already-bundled channels. Fixes #73419. Thanks @sliverp.",
      "BlueBubbles: tighten DM-vs-group routing across the outbound session route (`chat_guid:iMessage;-;...` DMs no longer classified as groups), reaction handling (drop group reactions that arrive without any chat identifier instead of synthesizing a `\"group\"` literal peerId), inbound `chatGuid` fallback (no longer fall back to the sender's DM chatGuid when resolving a group whose webhook omits chatGuid+chatId+chatIdentifier), and short message id resolution (carry caller chat context so a numeric short id reused after a long group conversation cannot silently resolve to a message in a different chat, with the same cross-chat guard applied to full GUIDs so retries cannot bypass it). Thanks @zqchris.",
      "Gateway/sessions: clone cached session stores through the persisted JSON shape instead of `structuredClone`, reducing native-memory growth on the remaining #54155 Gateway RSS/session-accumulation path while keeping #54155 as the broader tracker and carrying forward the #45438 session-cache hypothesis. Thanks @vincentkoc and the #45438 reporters/commenters.",
      "Agents/approvals: fail restart-interrupted sessions whose transcript tail is still `approval-pending` instead of replaying stale exec approval IDs into the new Gateway process after restart. Fixes #65486. Thanks @mjmai20682068-create.",
      "CLI/Gateway: use method-specific least-privilege scopes for classified CLI Gateway calls while preserving legacy broad scopes for unclassified plugin methods, so read-only commands no longer create admin/write/pairing scope-upgrade prompts. Fixes #68634. Thanks @nightmusher.",
      "Gateway/sessions: align `chat.history` and `sessions.list` thinking defaults with owning-agent and catalog-aware resolution so Control UI session defaults match backend runtime state. (#63418) Thanks @jpreagan.",
      "Devices/pairing: recover array-shaped device and node pairing state files before persisting approvals, so UUID-keyed pending and paired entries no longer disappear after a malformed JSON store write. Fixes #63035. Thanks @sar618.",
      "Gateway/auth: clear reused stale device tokens and stop reconnecting on device-token mismatch in the Control UI and Node gateway clients, avoiding rate-limit loops after scope-upgrade or token-rotation handoffs. Fixes #71609. Thanks @ricksayhi.",
      "Gateway/approvals: treat duplicate same-decision approval resolves as idempotent during the resolved-entry grace window, including consumed `allow-once` approvals, while returning an explicit already-resolved error for conflicting repeats. Fixes #59162; refs #58479 and #65486. Thanks @wikithoughts, @sajazuniga7-coder, and @mjmai20682068-create.",
      "Channels/Telegram: honor `approvals.exec/plugin.targets[].accountId` when routing native approvals across multi-bot Telegram accounts while preserving unscoped Telegram targets for any account. Fixes #69916. Thanks @joerod26.",
      "Agents/exec: omit the internal session-resume fallback preface from successful async exec completion messages sent directly back to chat. Fixes #67181. Thanks @raistlin88.",
      "Agents/media: register detached `video_generate` and `music_generate` tool run contexts until terminal status, so Discord-backed provider jobs stay live in `/tasks` instead of becoming `lost` when the parent chat run context disappears. Thanks @vincentkoc.",
      "Agents/media: prefer OpenAI image and video providers when the default model uses the OpenAI Codex auth alias, so auto media generation no longer falls through to Fal before GPT Image or Sora. Thanks @vincentkoc.",
      "Tasks/media: infer agent ownership for session-scoped task records so `/tasks` agent-local fallback includes session-backed `video_generate` and other async media jobs even when the current chat session has no linked rows. Thanks @vincentkoc.",
      "Agents/media: keep long-running `video_generate` and `music_generate` tasks fresh while provider jobs are still pending, so task maintenance does not mark active Discord media renders lost before completion. Thanks @vincentkoc.",
      "CLI/status: treat scope-limited gateway probes as reachable-but-degraded in shared status scans, so `openclaw status --all` no longer reports a live gateway as unreachable after `missing scope: operator.read`. Fixes #49180; supersedes #47981. Thanks @openjay.",
      "Slack/Socket Mode: use a 15s Slack SDK pong timeout by default and add `channels.slack.socketMode.clientPingTimeout`, `serverPingTimeout`, and `pingPongLoggingEnabled` overrides so stale-websocket handling no longer depends on app-event health heuristics. Fixes #14248; refs #58519, #64009, and #63488. Thanks @shivasymbl and @freerk.",
      "Slack/media: bound private file and forwarded attachment downloads with idle and total timeouts while preserving placeholder fallback, so stalled Slack `file_share` media no longer wedges inbound message handling. Fixes #61850. Thanks @bassboy2k.",
      "Plugins/inspector: keep bundled plugin runtime capture quiet and config-tolerant for Codex, memory-lancedb, Feishu, Mattermost, QQBot, and Tlon so plugin-inspector JSON checks can validate the full bundled set. Thanks @vincentkoc.",
      "Slack/auto-reply: keep fully consumed text reset triggers such as `new session` out of `BodyForAgent` after directive cleanup, so configured Slack reset phrases do not leak into the fresh model turn. Fixes #73137. Thanks @neeravmakwana.",
      "Plugins/runtime deps: prune stale retained bundled runtime deps and keep doctor/secret channel contract scans on lightweight artifacts, so disabled bundled channels stop preserving old dependency trees or importing heavy plugin surfaces. Thanks @SymbolStar and @vincentkoc.",
      "Auto-reply: bound the post-run pending tool-result delivery drain with a progress-aware idle timeout, so a never-settling tool-result task no longer leaves the session active forever while slow healthy deliveries can keep draining. Fixes #53889; supersedes #64733 and #73434. Thanks @zijunl and @wujiaming88.",
      "Gateway/startup: start chat channels without waiting for primary model prewarm, keeping model warmup bounded in the background so Slack and other channels come online promptly when provider discovery is slow. Supersedes #73420. Thanks @dorukardahan.",
      "Gateway/install: carry env-backed config SecretRefs such as `channels.discord.token` into generated service environments when they are present only in the installing shell, while keeping gateway auth SecretRefs non-persisted. Fixes #67817; supersedes #73426. Thanks @wdimaculangan and @ztexydt-cqh.",
      "Auto-reply/commands: stop bare `/reset` and `/new` after reset hooks acknowledge the command, so non-ACP channels no longer fall through into empty provider calls while `/reset <message>` and `/new <message>` still seed the next model turn. Fixes #73367 and #73412. Thanks @hoyanhan, @wenxu007, and @amdhelper.",
      "Providers/DeepSeek: backfill DeepSeek V4 `reasoning_content` on plain assistant replay messages as well as tool-call turns, so thinking sessions with prior tool use no longer fail follow-up requests with missing reasoning content. Fixes #73417; refs #71372. Thanks @34262315716 and @Bartok9.",
      "Agents/gateway tool: strip full config payloads from `config.patch` and `config.apply` tool responses while preserving direct RPC responses, so config-heavy sessions no longer replay large redacted configs into transcript history. Fixes #47610; supersedes #73439. Thanks @HanenVit and @juan-flores077.",
      "Auto-reply: preserve voice-note media from silent turns while continuing to suppress text and non-voice media, so `NO_REPLY` TTS replies still deliver the requested audio bubble. (#73406) Thanks @zqchris.",
      "Channels/Mattermost: stop enqueueing regular inbound posts as system events, so Mattermost user messages reach the model only as user-role inbound-envelope content instead of also appearing as `System: Mattermost message...` directives. Fixes #71795. Thanks @juan-flores077.",
      "Agents/media: qualify bare `agents.defaults.imageModel` and `pdfModel` refs from unique configured image-capable providers, so Ollama vision models such as `moondream` and `qwen2.5vl:7b` do not fall through to the default provider. Fixes #38816; supersedes #73396. Thanks @alainasclaw and @vincentkoc.",
      "Agents/Anthropic: send implicit Anthropic beta headers only to direct public Anthropic endpoints, including OAuth, so custom Anthropic-compatible providers no longer mis-handle unsupported beta flags unless explicitly configured. Refs #73346. Thanks @byBrodowski.",
      "Skills: require explicit `skills.entries.coding-agent.enabled` before exposing the bundled coding-agent skill, so installs with Codex on PATH but no OpenAI auth do not silently offer Codex delegation. Fixes #73358. Thanks @LaFleurAdvertising and @Sanjays2402.",
      "Plugins/startup: treat manifestless Claude bundles as valid installed-plugin registry entries instead of stale missing manifests, so workspace bundles no longer force repeated derived registry rebuilds or noisy `plugins.entries.workspace` warnings during Gateway startup. Fixes #73433. Thanks @AnneVoss.",
      "Agents/subagents: preserve `sessions_yield` as a paused subagent state and ignore its wait text while freezing completion output, so parent sessions wait for the final post-compaction answer instead of receiving intermediate progress or `(no output)`. Fixes #73413. Thanks @Ask-sola.",
      "Plugins/startup: precompute bundled runtime mirror fingerprints before taking the mirror lock and keep Docker bundled plugin runtime deps/mirrors in a Docker-managed volume instead of the Windows/WSL config bind mount, so cold starts avoid slow host-volume mirror writes. Fixes #73339. Thanks @1yihui.",
      "Plugins/runtime deps: refresh bundled runtime mirrors without deleting active import trees, so config-triggered restarts do not see transient missing plugin files during registration. Thanks @shakkernerd.",
      "Channels/LINE: persist inbound image, video, audio, and file downloads in `~/.openclaw/media/inbound/` instead of temporary files so agents can still read LINE media after `/tmp` cleanup. Fixes #73370. Thanks @hijirii and @wenxu007.",
      "CLI/plugins: keep bundled plugin installs out of `plugins.load.paths` while preserving install records, so install/inspect/doctor loops no longer warn about the current bundled plugin directory. Thanks @vincentkoc.",
      "CLI/plugins: scope `plugins inspect <id>` runtime loading to the matched plugin so single-plugin inspection does not load every plugin before checking the target. Thanks @shakkernerd.",
      "CLI/plugins: remove managed copied-path plugin directories during uninstall and plan uninstall from metadata instead of runtime-loading plugins, so plugin lifecycle commands avoid unnecessary bundled runtime-deps work. Thanks @shakkernerd.",
      "Cron tool: infer the creating session's agentId for `cron.add` jobs when `agentId` is omitted or passed as undefined, keeping scheduled agentTurn jobs routed to the session agent; #40571 identified the guard bug and supplied the focused regression coverage. Thanks @ChanningYul.",
      "Cron/Telegram: add `--thread-id` to `openclaw cron add` and `openclaw cron edit`, preserving Telegram forum topic delivery targets across scheduled announcements. Carries forward #51581, #60373, and #60890. Thanks @ChunHao-dev.",
      "Cron/Telegram: preserve session-derived Telegram topic thread IDs when isolated cron delivery explicitly targets the parent chat, keeping bare chat targets in the active forum topic without leaking stale topics to other chats. Carries forward #64708. Thanks @addelh.",
      "Memory/compaction: keep pre-compaction memory-flush prompts runtime-only so session transcripts and `chat.history` no longer expose them as normal user turns. Fixes #54408 and #58956; refs #43567. Thanks @markgong and @guoyuhang9.",
      "Control UI/WebChat: keep large attachment payloads out of Lit state and optimistic chat messages, using object URL previews plus send-time payload serialization so PDF/image uploads no longer trigger `RangeError: Maximum call stack size exceeded`. Fixes #73360; refs #54378 and #63432. Thanks @hejunhui-73, @Ansub, and @christianhernandez3-afk.",
      "Agents/Anthropic: cancel stalled Anthropic Messages SSE body reads when abort signals fire, so active-memory timeouts release transport resources instead of leaving hidden recall runs parked on `reader.read()`. Refs #72965 and #73120. Thanks @wdeveloper16.",
      "Control UI/WebChat: keep pending run and typing state attached to the active client run, so unowned inject/announce/side-result finals no longer unlock unrelated active runs while completed owned runs still clear promptly. Fixes #57795; carries forward the narrow diagnosis from #57887. Thanks @haoyu-haoyu.",
      "Sandbox/Docker: stop satisfying a missing default sandbox image by tagging plain Debian as `openclaw-sandbox:bookworm-slim`, preserving the Python tooling required by sandbox write/edit helpers and directing users to build the default image. Fixes #51185; refs #45108, #51099, #51609, and #57713. Thanks @dpalis, @Tin55FoilDev, @jbcohen2-coder, @macminihal-cyber, and @PraxoOnline.",
      "Control UI/WebChat: confirm toolbar New Session button resets before dispatching `/new` while leaving typed `/new` and `/reset` commands immediate. Fixes #45800; refs #27065, #56611, #54499, and #27110. Thanks @aethnova, @kosta228-huli, @adambezemek, and @xss925175263 (xianshishan).",
      "Agents/models: keep per-agent primary models strict when `fallbacks` is omitted, so probe-only custom providers are not tried as hidden fallback candidates unless the agent explicitly opts in. Fixes #73332. Thanks @haumanto.",
      "Gateway/models: add `models.pricing.enabled` so offline or restricted-network installs can skip startup OpenRouter and LiteLLM pricing-catalog fetches while keeping explicit model costs working. Fixes #53639. Thanks @callebtc, @palewire, and @rjdjohnston.",
      "Gateway/startup: warn when legacy `CLAWDBOT_*` or `MOLTBOT_*` environment variables are still present, pointing users to `OPENCLAW_*` names instead of failing silently. Fixes #53482; carries forward #53667. Thanks @lndyzwdxhs.",
      "Onboarding: pin interactive and non-interactive health checks to the just-configured setup token/password so stale `OPENCLAW_GATEWAY_TOKEN` or `OPENCLAW_GATEWAY_PASSWORD` values do not produce false gateway-token-mismatch failures after setup. Fixes #72203. Thanks @galiniliev.",
      "Doctor/state: require an interactive confirmation before archiving orphan transcript files, so `openclaw doctor --fix` no longer silently renames recoverable session history after upgrades regenerate `sessions.json`. Fixes #73106. Thanks @scottgl9.",
      "Cron/Telegram: preserve explicit `:topic:` delivery targets over stale session-derived thread IDs when isolated cron announces to Telegram forum topics. Carries forward #59069; refs #49704 and #43808. Thanks @roytong9.",
      "Build/runtime: write the runtime-postbuild stamp after `pnpm build` writes the build stamp, so the next CLI invocation does not re-sync runtime artifacts after a successful build. Fixes #73151. Thanks @bittoby.",
      "Build/runtime: preserve staged bundled-plugin runtime dependency caches across source-checkout tsdown rebuilds, so local CLI and gateway-watch rebuilds no longer recreate large plugin dependency trees before starting. Refs #73205. Thanks @SymbolStar.",
      "CLI/channels: list configured chat channel accounts from read-only setup metadata even when the standalone CLI has not loaded the runtime channel registry, so `openclaw channels list` shows Telegram accounts before auth providers. Fixes #73319 and #73322. Thanks @mlaihk.",
      "CLI/model probes: keep `infer model run --gateway` raw by skipping prior session transcript, bootstrap context, context-engine assembly, tools, and bundled MCP servers, so local backends can be tested without full agent-context overhead. Fixes #73308. Thanks @ScientificProgrammer.",
      "CLI/image describe: pass `--prompt` and `--timeout-ms` through `infer image describe` and `describe-many`, so custom vision instructions and slow local model budgets reach media-understanding providers such as Ollama, OpenAI, Google, and OpenRouter. Addresses #63700. Thanks @cedricjanssens.",
      "Providers/Ollama: reject long non-linguistic Kimi/GLM symbol runs as provider failures instead of storing them as successful visible assistant replies, so fallback or error handling can recover from garbled cloud output. Fixes #64262; refs #67019. Thanks @Kloz813 and @xiaomenger123.",
      "CLI/model probes: reject empty or whitespace-only `infer model run --prompt` values before calling local providers or the Gateway, so smoke checks do not spend provider calls on invalid turns. Fixes #73185. Thanks @iot2edge.",
      "Gateway/media: route text-only `chat.send` image offloads through media-understanding fields so `agents.defaults.imageModel` can describe WebChat attachments instead of leaving only an opaque `media://inbound` marker. Fixes #72968. Thanks @vorajeeah.",
      "Gateway/Windows: route no-listener restart handoffs through the Windows supervisor without leaving restart tokens in flight, so failed task scheduling can be retried and successful handoffs do not coalesce later restart requests. (#69056) Thanks @Thatgfsj.",
      "Gateway/model pricing: skip plugin manifest discovery during background pricing refreshes when `plugins.enabled: false`, so disabled-plugin setups do not keep rebuilding plugin metadata from the Gateway hot path. Fixes #73291. Thanks @slideshow-dingo and @fishgills.",
      "Ollama/thinking: validate `/think` commands against live Ollama catalog reasoning metadata and preserve explicit native `params.think`/`params.thinking`, so models whose `/api/show` capabilities include `thinking` expose `low`, `medium`, `high`, and `max` instead of being stuck on `off`. Fixes #73366. Thanks @cymise.",
      "Gateway/sessions: remove automatic oversized `sessions.json` rotation backups, deprecate `session.maintenance.rotateBytes`, and teach `openclaw doctor --fix` to remove the ignored key so hot session writes no longer copy multi-MB stores. Refs #72338. Thanks @midhunmonachan and @DougButdorf.",
      "Channels/Telegram: fail fast when Telegram rejects the startup `getMe` token probe with 401, so invalid or stale BotFather tokens are reported as token auth failures instead of misleading `deleteWebhook` cleanup failures. Fixes #47674. Thanks @samaedan-arch.",
      "ACPX: keep generated Codex and Claude ACP wrapper startup paths working when remote or special state filesystems reject chmod, since OpenClaw invokes the wrappers through Node instead of executing them directly. Fixes #73333. Thanks @david-garcia-garcia.",
      "CLI/onboarding: infer image input for common custom-provider vision model IDs, ask only for unknown models, and keep `--custom-image-input`/`--custom-text-input` overrides so vision-capable proxies do not get saved as text-only configs. Fixes #51869. Thanks @Antsoldier1974.",
      "Models/OpenAI Codex: stop listing or resolving unsupported `openai-codex/gpt-5.4-mini` rows through Codex OAuth, keep stale discovery rows suppressed with a clear API-key-route hint, and leave direct `openai/gpt-5.4-mini` available. Fixes #73242. Thanks @0xCyda.",
      "Plugin SDK: restore the root `stringEnum` and `optionalStringEnum` exports on both the published SDK entry and runtime root-alias bridge, so older external plugins can keep building and loading while migrating to focused SDK subpaths. Fixes #68279. Thanks @marzliak.",
      "Plugin SDK: restore the root-alias bridge for `registerContextEngine` and expose missing legacy compat helpers `normalizeAccountId` and `resolvePreferredOpenClawTmpDir` so older external plugins such as `openclaw-weixin` can keep loading while migrating to focused SDK subpaths. Fixes #53497. Thanks @alanxchen85.",
      "Auth profiles: make `openclaw doctor --fix` migrate legacy flat `auth-profiles.json` files such as `{ \"ollama-windows\": { \"apiKey\": \"ollama-local\" } }` to canonical provider default API-key profiles with a backup, so custom Ollama/OpenAI-compatible providers recover cleanly after upgrading. Fixes #59629; supersedes #59642. Thanks @Xsanders555 and @Linux2010.",
      "Memory/Dreaming: retry Dream Diary once with the session default when a configured dreaming model is unavailable, while leaving subagent trust and allowlist errors visible instead of silently masking configuration problems. Refs #67409 and #69209. Thanks @Ghiggins18 and @everySympathy.",
      "Feishu/inbound files: recover CJK filenames from plain `Content-Disposition: filename=` download headers when Feishu exposes UTF-8 bytes through Latin-1 header decoding, while leaving valid Latin-1 and JSON-derived names unchanged. (#48578, #50435, #59431) Thanks @alex-xuweilong, @lishuaigit, and @DoChaoing.",
      "Channels/Telegram: normalize accidental full `/bot<TOKEN>` Telegram `apiRoot` values at runtime and teach `openclaw doctor --fix` to remove the suffix, so startup control calls no longer 404 when direct Bot API curl commands work. Fixes #55387. Thanks @brendanmatthewjones-cmyk, @techfindubai-ux, and @Sivlerback-Chris.",
      "Zalo Personal: persist refreshed `zca-js` session cookies after QR login, session restore, and successful API calls so gateway restarts restore the freshest local session. (#73277) Thanks @darkamenosa.",
      "Logging/security: redact sensitive tokens (sk-\\* keys, Bearer/Authorization values, etc.) at the subsystem console sink so `createSubsystemLogger().info/warn/error` output that bypasses the patched console-capture handler still applies the same redaction the file transport already does. Fixes #73284; refs #67953 and #64046. Thanks @edwin-rivera-dev.",
      "Plugins/runtime deps: reuse enclosing versioned cache roots when bundled plugins resolve from nested staged paths, so plugin-runtime-deps no longer mints `openclaw-unknown-*` directories or loops on `ENOTEMPTY`. Fixes #72956. (#73205) Thanks @SymbolStar.",
      "Agents/failover: classify CJK provider transport, quota, billing, auth, and overload error text so Chinese-language provider failures trigger fallback and user-facing transport copy instead of surfacing as unclassified raw errors. (#56242) Thanks @tomcatzh.",
      "Agents/failover: seed non-claude-cli fallback prompts with Claude Code session context when a claude-cli attempt fails, so fallback models do not restart cold after billing or quota failover. (#72069) Thanks @stainlu.",
      "Agents/CLI runner: transfer bundle-MCP tempDir cleanup from the per-turn runner finally to the Claude live-session lifecycle, so persistent Claude CLI sessions keep their `--mcp-config` directory until the live subprocess closes. Fixes #73244. Thanks @edwin-rivera-dev.",
      "Gateway/nodes: allow Windows companion nodes to use safe declared commands such as canvas, camera list, location, device info, and screen snapshot by default while keeping dangerous media commands opt-in. (#71884) Thanks @shanselman.",
      "Agents/cron: clarify agent-tool and CLI cron timezone guidance so supplied `tz` values use local wall-clock cron fields and omitted cron `tz` falls back to the Gateway host local timezone. Fixes #53669; carries forward #46177. (#73372) Thanks @chen-zhang-cs-code and @maranello-o.",
      "Providers/Qwen: allow explicitly configured `qwen/qwen3.6-plus` to resolve on Qwen Coding Plan endpoints while keeping the built-in catalog from advertising it there. Fixes #63654; carries forward #63987. Thanks @jepson-liu.",
      "Channels/Telegram: keep Bot API network fallbacks sticky after failed attempts and retry timed-out startup control calls once on the fallback route, so `deleteWebhook` IPv6 stalls no longer trigger slow multi-account retry storms. Fixes #73255. Thanks @ttomiczek and @sktbrd.",
      "Gateway/agents: accept heartbeat, cron, and webhook as internal channel hints for agent runs so `sessions_spawn` works from non-delivery parent sessions while unknown channel hints still fail closed. Fixes #73237. Thanks @KeWang0622.",
      "Gateway/models: merge explicit `models.providers.*.models` rows into the Gateway model catalog with normalized provider/model dedupe, and use normalized image-capability lookup so custom vision models keep native image attachments even when Pi discovery omits them or model ID casing differs. Fixes #64213 and #65165. Thanks @billonese and @202233a.",
      "Gateway/reload: publish canonical post-write source config to in-process reloaders so simple config saves no longer create phantom plugin diffs or trigger unnecessary Gateway restarts. (#73267) Thanks @szsip239.",
      "Gateway/Docker: keep config-triggered restarts in-process inside containers instead of spawning a detached child and exiting PID 1 cleanly, so Docker Swarm and other on-failure supervisors do not leave the service stuck at 0/1 replicas. Fixes #73178. Thanks @du-nguyen-IT007.",
      "CLI/tasks: ship the task-registry control runtime in npm packages so `openclaw tasks cancel` can load ACP/subagent cancellation helpers from published builds. Fixes #68997. Thanks @1OAKDesign.",
      "Channels/Telegram: preserve unsent generated media after partial reply streaming has already delivered the text, so `image_generate` outputs still reach Telegram as photos instead of being dropped from the final payload. Fixes #73253. Thanks @mlaihk.",
      "Memory-core/dreaming: cap detached Dream Diary narrative subagents across cron sweeps so multi-workspace dreaming no longer fans out unbounded subagent sessions, lock contention, and cascading narrative timeouts. Fixes #73198. (#73287) Thanks @KeWang0622.",
      "CLI/agents: close local one-shot Claude live stdio sessions and bundled MCP loopback resources after embedded `openclaw agent --local` runs, while keeping gateway-owned MCP loopback cleanup internal to the Gateway. Thanks @frankekn.",
      "Export/session: keep inline export HTML scripts and vendor libraries injected after template formatting so generated session exports open with the app code, markdown renderer, and syntax highlighter present. Fixes #41862 and #49957; carries forward #41861 and #68947. Thanks @briannewman, @martenzi, and @armanddp.",
      "Agents/ACPX: stage the patched Claude ACP adapter as an ACPX runtime dependency and route known Codex/Claude ACP commands through local wrappers, so Gateway runtime no longer depends on live `npx` adapter resolution. Fixes #73202. Thanks @joerod26.",
      "Memory/compaction: let pre-compaction memory flush use an exact `agents.defaults.compaction.memoryFlush.model` override such as `ollama/qwen3:8b` without inheriting the active session fallback chain, so local housekeeping can avoid paid conversation models. Fixes #53772. Thanks @limen96.",
      "macOS/update: stop managed Gateway services before package replacement and keep LaunchAgent service secrets out of world-readable plist metadata by loading them from owner-only env files. Fixes #72996. Thanks @Mathewb7.",
      "Google Meet: keep observe-only Chrome joins and setup checks from requiring BlackHole or audio bridge commands, avoid granting or selecting the microphone in observe-only mode, and make `test_speech` report fresh realtime output-byte verification instead of only confirming a queued utterance. Refs #72478. Thanks @DougButdorf.",
      "Gateway/hooks: route non-delivered hook completion and error summaries to the target agent's main session instead of the default agent session, preserving multi-agent hook isolation. Fixes #24693; carries forward #68667. Thanks @abersonFAC and @bluesky6868.",
      "Control UI/models: request the configured Gateway model-list view so dashboards with only `models.providers.*.models` show those configured models first instead of flooding the picker with the full built-in catalog. Fixes #65405. Thanks @wbyanclaw.",
      "CLI/models: keep default-model and allowlist pickers on explicit `models.providers.*.models` entries when `models.mode` is `replace` instead of loading the full built-in catalog. Fixes #64950. Thanks @mrozentsvayg.",
      "Media/security: tighten media-understanding MIME sanitization so parameterized MIME values stay end-anchored and malformed whitespace or suffix payloads are rejected before file-context handling. Fixes #9795; carries forward #68225 with related review/test context from #61016/#68456. Thanks @ymaxgit, @bluesky6868, and @shamsulalam1114.",
      "Discord: own the Carbon interaction listener and hand off Discord slash/component handling asynchronously, so compaction or long session locks no longer trip `InteractionEventListener` listener timeouts. Fixes #73204. Thanks @slideshow-dingo.",
      "Compaction/diagnostics: keep unknown compaction failure classifications stable while logging sanitized detail for unclassified provider errors such as missing Ollama provider adapters. Thanks @gzsiang.",
      "Models/fallbacks: record first-class `model.fallback_step` trajectory events with from/to models, failure detail, chain position, and final outcome so support exports preserve the primary model failure even when a later fallback also fails. Fixes #71744. Thanks @nikolaykazakovvs-ux.",
      "Gateway/agents: block agent `exec` from launching interactive `openclaw channels login` flows and abort active agent runs after invalid-config recovery restores last-known-good config, preventing known channel-login and reload paths from wedging replies. Refs #72338. Thanks @midhunmonachan.",
      "Gateway/diagnostics: emit payload-free liveness warnings with event-loop delay, event-loop utilization, CPU-core ratio, active-session counts, and OTEL warning metrics/spans so live-but-stalled Gateways capture CPU-spin context in stability bundles and telemetry. Refs #72338. Thanks @midhunmonachan and @DougButdorf.",
      "Gateway/startup: keep value-option foreground starts on the gateway fast path and skip proxy bootstrap unless proxy env is configured, reducing normal gateway startup RSS and avoiding full CLI graph loading. Thanks @vincentkoc.",
      "Heartbeat/models: show heartbeat model bleed guidance on context-overflow resets when the last runtime model matches configured `heartbeat.model`, so smaller local heartbeat models point users to `isolatedSession` or `lightContext` instead of only compaction-buffer tuning. Fixes #67314. Thanks @Knightmare6890.",
      "Subagents/models: persist `sessions_spawn.model` and configured subagent models as child-session model overrides before the first turn, so spawned subagents actually run on the requested provider/model instead of reverting to the target agent default. Fixes #73180. Thanks @danielzinhu99.",
      "Channels/Telegram: keep webhook-mode local listeners alive and retry Telegram `setWebhook` registration after recoverable startup network failures, so transient Bot API timeouts no longer leave reverse proxies pointing at a closed listener. Fixes #71834. Thanks @jinon86.",
      "Agents/ACPX: bundle the Codex ACP adapter and launch it from the isolated `CODEX_HOME` wrapper before falling back to npm, so Codex ACP startup no longer depends on live `npx` resolution or the stale `@zed-industries/codex-acp@^0.11.1` range. Fixes #72037; refs #73202. Thanks @jasonftl, @sazora, and @joerod26.",
      "Agents/ACPX: register the embedded ACP backend at Gateway startup through a lightweight ACP backend SDK path and without importing the heavy ACPX runtime until an ACP session or explicit startup probe needs it, reducing baseline Gateway RSS. Thanks @vincentkoc.",
      "CLI/update: keep restart health polling when the restarted Gateway is reachable but has not reported its version yet, so macOS service restarts do not fail early with `actual unavailable`. Thanks @ProspectOre.",
      "Backup: skip installed plugin `extensions/*/node_modules` dependency trees while keeping plugin manifests and source files in archives, so local backups avoid rebuildable npm payload bloat. Fixes #64144. Thanks @BrilliantWang.",
      "Cron/models: fail isolated cron runs closed when an explicit `payload.model` is not allowed or cannot be resolved, so scheduled jobs do not silently fall back to an unrelated agent default or paid route before configured provider proxies such as LiteLLM can run. Fixes #73146. Thanks @oneandrewwang.",
      "Memory/QMD: back off repeated chat-turn QMD open failures while still letting memory status and CLI probes recheck immediately, so a broken sidecar dependency cannot trigger active-memory or cron retry storms. Fixes #73188 and #73176. Thanks @leonlushgit and @w3i-William.",
      "Talk Mode: resolve `messages.tts.providers.<id>.apiKey` through the active runtime snapshot for `talk.config`, so Talk overlays can discover SecretRef-backed speech providers without falling back to local speech. Fixes #73109. (#73111) Thanks @omarshahine.",
      "Memory/Ollama: resolve `memorySearch.provider` custom provider ids through their configured `models.providers.<id>.api` owner, so multi-GPU Ollama setups can dedicate embeddings to providers such as `ollama-5080` without losing the Ollama adapter or local auth semantics. Fixes #73150. Thanks @oneandrewwang.",
      "CLI/memory: skip eager context-window warmup for `openclaw memory` commands so memory search does not race unrelated model metadata discovery. Fixes #73123. Thanks @oalansilva and @neeravmakwana.",
      "CLI/Telegram: route Telegram `message send` and poll actions through the running Gateway when available, so packaged installs use the staged `grammy` runtime deps and CLI sends return instead of hanging after the Telegram channel is active. Fixes #73140. Thanks @oalansilva.",
      "Plugins/runtime deps: prepare staged bundled plugin dependencies before loading packaged public surfaces, so OpenClaw's Telegram runtime/test facade loads resolve `grammy` from the managed runtime-deps stage without copying dependencies into the global package root. Refs #73140. Thanks @oalansilva.",
      "Agents/exec: emit `(no output)` for silent exec update and node-host result blocks so Anthropic-compatible providers no longer reject empty tool-result text after quiet commands. Fixes #73117. Thanks @pfrederiksen and @Sanjays2402.",
      "Cron/providers: preflight local Ollama and OpenAI-compatible provider endpoints before isolated cron agent turns, record unreachable local providers as skipped runs, and cache dead-endpoint probes so many jobs do not hammer the same stopped local server. Fixes #58584. Thanks @jpeghead.",
      "Gateway/config: let config reload continue in degraded mode when invalidity is scoped to plugin entries, so incompatible plugin configs can be skipped and the Gateway restart can still pick up the rest of the config after rollbacks. Fixes #73131. Thanks @Adam-Researchh.",
      "Doctor/channels: suppress disabled bundled-plugin blocker warnings when a trusted external plugin owns the configured channel, so Lark/Feishu installs no longer get Feishu repair noise after switching to `openclaw-lark`. Fixes #56794. Thanks @wuji-tech-dev.",
      "CLI/status: show skipped fast-path memory checks as `not checked` and report active custom memory plugin runtime status from `status --json --all` without requiring built-in `agents.defaults.memorySearch`, so plugins such as memory-lancedb-pro and memory-cms no longer look unavailable when their own runtime is healthy. Fixes #56968. Thanks @Tony-ooo and @aderius.",
      "Gateway/channels: record and log unexpected clean channel monitor exits so channels that return without throwing no longer appear stopped with no error. Fixes #73099. Thanks @balaji1968-kingler.",
      "Group/channel chats (all channels): keep group/channel replies private by default unless the agent explicitly uses the message tool, fall back to automatic visible replies when the message tool is unavailable, and have `openclaw doctor` warn about that policy mismatch; `messages.groupChat.visibleReplies: \"automatic\"` restores legacy auto-posting. (#73046) Thanks @scoootscooob.",
      "Plugins/package: force nested bundled-plugin runtime dependency installs out of inherited npm dry-run mode during prepack and package smoke checks, so packed installs materialize required plugin modules instead of reporting missing bundled files. Refs #73128. Thanks @Adam-Researchh.",
      "Discord: skip reaction events before REST channel fetch when notifications are off, guild reactions are disabled, or allowlist mode cannot match without channel overrides, reducing reconnect bursts that caused slow listener warnings. Fixes #73133. Thanks @isaacsummers.",
      "Channels/Telegram: centralize polling update tracking so accepted offsets remain durable across restarts, same-process handler failures can still retry, and slow offset writes cannot overwrite newer accepted watermarks. Refs #73115. Thanks @vdruts.",
      "Agents/models: classify empty, reasoning-only, and planning-only terminal agent runs before accepting a model fallback candidate, so invalid or incompatible models can advance to the next configured fallback instead of returning a 30-second terminal failure. Fixes #73115. Thanks @vdruts.",
      "Memory/LanceDB: let embedding config use provider-backed auth profiles, environment credentials, or provider config without a separate plugin `embedding.apiKey`, so OAuth-capable embedding providers can power auto-recall/capture. Fixes #68950. Thanks @malshaalan-ai.",
      "CLI/parents: invoking `openclaw <parent>` (memory, channels, plugins, approvals, devices, cron, mcp) without a subcommand now prints the parent's help and exits `0`, matching `<parent> --help` and the existing `agents` / `sessions` defaults so shell `&&` chains and pnpm wrappers no longer surface a misleading `ELIFECYCLE Command failed with exit code 1.` line. Fixes #73077. Thanks @hclsys.",
      "Plugins/hooks: time out never-settling `agent_end` observation hooks after 30 seconds and log the plugin failure, so hung embedding endpoints no longer leave memory capture silently pending forever. Fixes #65544. Thanks @ghoc0099.",
      "Gateway/config: serve runtime config schemas from the current plugin metadata snapshot and generated bundled channel schema metadata instead of rebuilding plugin channel config modules on every `config.get`/`config.schema`, preventing idle plugin-discovery CPU churn after upgrades. Fixes #73088. Thanks @sleitor and @geovansb.",
      "Memory/LanceDB: call OpenAI-compatible embedding endpoints through the raw SDK transport without sending `encoding_format`, then normalize float-array or base64 responses so providers such as ZhiPu and DashScope no longer fail recall with wrong vector dimensions or rejected parameters. Fixes #63655. Thanks @kinthaiofficial.",
      "Plugins/install: run dependency installs with npm error-level logging instead of silent mode so failed plugin or hook installs surface actionable npm errors such as EUNSUPPORTEDPROTOCOL instead of `npm install failed:` with no detail. (#73093) Thanks @sanctrl.",
      "Memory/LanceDB: bound memory recall embedding queries with a new `recallMaxChars` setting, prefer the latest user message over channel prompt metadata during auto-recall, and document the knob so small Ollama embedding models avoid context-length failures. Fixes #56780. Thanks @rungmc357 and @zak-collaborator.",
      "CLI/skills: resolve workspace-backed skills commands from `--agent`, then the current agent workspace, before falling back to the default agent, so multi-agent ClawHub installs, updates, and status checks stay scoped to the active workspace. Fixes #56161; carries forward #72726. Thanks @langbowang and @luyao618.",
      "Plugin SDK: fall back from partial bundled plugin directory overrides to package source public surfaces while preserving `OPENCLAW_DISABLE_BUNDLED_PLUGINS` as a hard disable. (#72817) Thanks @serkonyc.",
      "Agents/ACPX: stop forwarding Codex ACP timeout config controls that Codex rejects while preserving OpenClaw's run-timeout watchdog for ACP subagents. Fixes #73052. Thanks @pfrederiksen and @richa65.",
      "Memory Core: stream fallback vector search scoring with a bounded top-K result set so large indexes do not materialize every chunk embedding when sqlite-vec is unavailable. (#73069) Thanks @parkertoddbrooks.",
      "Memory Core: stream embedding-cache seeding during safe reindex so large local caches do not materialize every row into the V8 heap before the atomic rebuild. (#73067) Thanks @parkertoddbrooks.",
      "Memory/Ollama: add `memorySearch.remote.nonBatchConcurrency` for inline embedding indexing, default Ollama non-batch indexing to one request at a time, and keep batch concurrency separate from non-batch concurrency so local embedding backfills avoid timeout storms on smaller hosts. Carries forward #57733. Thanks @itilys.",
      "macOS app: update Peekaboo, ElevenLabsKit, and MLX TTS helper dependencies, make canvas file watching and config/exec-approval state writes reliable under concurrent app/test activity, and keep the app plus helper builds warning-free. Thanks @Blaizzy.",
      "iOS app: refresh SwiftPM/XcodeGen source hygiene, make app, extension, watch, and curated shared Swift files pass the prebuild SwiftFormat and SwiftLint checks, move relay registration off deprecated StoreKit receipt APIs, and keep simulator builds and logic tests warning-free. Thanks @ngutman.",
      "Agents/models: keep `models.json` readiness and provider-hook caches warm across repeated agent and subagent model resolution while preserving external `models.json` invalidation, reducing repeated provider-plugin loads on slower ARM64 hosts. Fixes #73075. Thanks @jochen.",
      "Docs/tools: clarify that `tools.profile: \"messaging\"` is intentionally narrow and that `tools.profile: \"full\"` is the unrestricted baseline for broader command/control access. Carries forward #39954. Thanks @posigit.",
      "Control UI/Agents: redact tool-call args, partial/final results, derived exec output, and configured custom secret patterns before streaming tool events to the Control UI, so tool output cannot expose provider or channel credentials. Fixes #72283. (#72319) Thanks @volcano303 and @BunsDev.",
      "Agents/sessions: keep `sessions_history` recall redaction enabled even when general log redaction is disabled, and clarify that safety-boundary UI/tool/diagnostic payloads still redact independently of `logging.redactSensitive`. Carries forward #72319. Thanks @volcano303 and @BunsDev.",
      "Providers/Codex: pass agent and workspace directories into provider stream wrappers so Codex native `web_search` activation can evaluate the correct auth context, and smoke-test the built status-message runtime by resolving the emitted bundle name. Carries forward #67843; refs #65909. Thanks @neilofneils404.",
      "Cron/models: keep `payload.model` as a per-job primary that can use configured fallbacks, while still letting `payload.fallbacks: []` make cron runs strict and avoid hidden agent-primary retries. Refs #73023. Thanks @pavelyortho-cyber.",
      "Models/fallbacks: treat user-selected session models as exact choices, so `/model ollama/...` and model-picker switches fail visibly when the selected provider is unreachable instead of answering from an unrelated configured fallback. Fixes #73023. Thanks @pavelyortho-cyber.",
      "Codex harness: keep ChatGPT subscription app-server runs from inheriting `CODEX_API_KEY` or `OPENAI_API_KEY`, and fall back to `CODEX_API_KEY` / `OPENAI_API_KEY` app-server login only when no Codex account is available. Fixes #73057. Thanks @holgergruenhagen and @pashpashpash.",
      "CLI/model probes: fail local `infer model run` probes when the provider returns no text output, so unreachable local providers and empty completions no longer look like successful smoke tests. Refs #73023. Thanks @pavelyortho-cyber.",
      "CLI/Ollama: run local `infer model run` through the lean provider completion path and skip global model discovery for one-shot local probes, so Ollama smoke tests no longer pay full chat-agent/tool startup cost or hang before the native `/api/chat` request. Fixes #72851. Thanks @TotalRes2020.",
      "Doctor/gateway services: ignore launchd/systemd companion services that only reference the gateway as a dependency, suppress inactive Linux extra-service warnings, and avoid rewriting a running systemd gateway command/entrypoint during doctor repair. Carries forward #39118. Thanks @therk.",
      "Daemon/service: only emit hard-coded version-manager paths such as `~/.volta/bin`, `~/.asdf/shims`, `~/.bun/bin`, and fnm/pnpm fallbacks into gateway and node service PATHs when the directories exist, so `openclaw doctor` no longer flags `gateway.path.non-minimal` against a PATH the daemon just wrote. Env-driven roots and stable user-bin dirs remain unconditional. Fixes #71944; carries forward #71964. Thanks @Sanjays2402.",
      "CLI/startup: disable Node's module compile cache automatically for live source-checkout launchers so in-place `pnpm build` updates are visible to the next `openclaw` CLI invocation. Fixes #73037. Thanks @LouisGameDev.",
      "Agents/group chat: keep silent-allowed empty and reasoning-only turns on the `NO_REPLY` path without injecting visible-answer retry prompts, and clarify the group prompt so agents use the exact silent token instead of prose. Thanks @vincentkoc.",
      "Agents/group chat: move `NO_REPLY` mechanics into channel-aware direct/group prompts and suppress the duplicate generic silent-reply section for auto-reply runs, so always-on group agents get one consistent stay-silent instruction. Thanks @vincentkoc.",
      "Providers/OpenAI: preserve encrypted empty-summary Responses reasoning items in WebSocket replay and request `reasoning.encrypted_content` on reasoning turns so GPT-5.4/GPT-5.5 sessions do not lose required `rs_*` state beside `msg_*` items. Fixes #73053. Thanks @odb36777.",
      "Gateway/startup: treat `plugins.enabled=false` as an early plugin fast path, skipping plugin auto-enable discovery, gateway plugin lookup/runtime-dependency staging, and stale-plugin cleanup warnings while preserving channel blocker warnings. (#73041) Thanks @WuKongAI-CMU.",
      "Channels/commands: make generated `/dock-*` commands switch the active session reply route through `session.identityLinks` instead of falling through to normal chat. Fixes #69206; carries forward #73033. Thanks @clawbones and @michaelatamuk.",
      "Providers/Cloudflare AI Gateway: strip assistant prefill turns from Anthropic Messages payloads when thinking is enabled, so Claude requests through Cloudflare AI Gateway no longer fail Anthropic conversation-ending validation. Fixes #72905; carries forward #73005. Thanks @AaronFaby and @sahilsatralkar.",
      "Gateway/startup: keep primary-model startup prewarm on scoped metadata preparation, let native approval bootstraps retry outside channel startup, and skip the global hook runner when no `gateway_start` hook is registered, so clean post-ready sidecar work stays off the critical path. Refs #72846. Thanks @RayWoo, @livekm0309, and @mrz1836.",
      "Gateway/channels: start bundled channel accounts with a lightweight `runtimeContexts` surface instead of importing the full reply/routing/session channel runtime before `startAccount`, so Discord, Telegram, Slack, Matrix, and QQBot startup no longer block on unrelated channel helper graphs. Refs #72846 and #72960. Thanks @mrz1836, @RayWoo, and @rollingshmily.",
      "Gateway/supervisor: exit cleanly when a supervised restart finds an existing healthy gateway and bound retries when the existing gateway stays unhealthy, so stale lock contention cannot loop indefinitely. Refs #72846. Thanks @azgardtek.",
      "Gateway/startup: scope primary-model provider discovery during channel prewarm to the configured provider owner and add split startup trace timings, so boot avoids staging unrelated bundled provider dependencies while setup discovery remains broad. Fixes #73002. Thanks @Schnup03.",
      "Plugins/runtime deps: declare retained staged bundled plugin dependencies in the npm staging manifest while installing only newly missing packages, so Gateway restarts avoid reinstalling the full retained dependency set when one runtime dependency is absent. Fixes #73055. Thanks @GCorp2026.",
      "CLI/status: keep default `openclaw status` off the heavyweight security audit, plugin compatibility, and memory-vector probes while still showing configured Telegram channels through setup metadata, so routine health checks stay fast and no longer render an empty Channels table. Fixes #72993. Thanks @comick1.",
      "Channels/Telegram: send a best-effort native typing cue immediately after an inbound message is accepted, so slow pre-dispatch turns show Telegram liveness before queueing, compaction, model, or tool work starts. Fixes #63759. Thanks @alessandropcostabr.",
      "Channels/Telegram: stop native approval startup auth failures from retrying every second, while still waiting through retryable Gateway auth handoffs, so Telegram approval setup problems no longer create a reconnect/log loop during channel startup. Refs #72846 and #72867. Thanks @kiranvk-2011 and @porly1985.",
      "Channels/Microsoft Teams: unwrap staged CommonJS JWT runtime dependencies before Bot Connector token validation so inbound Teams messages no longer 401 after the bundled runtime-deps move. Fixes #73026 and #73167. Thanks @kbrown10000 and @mikelavrik.",
      "Gateway/auth: allow local direct callers in trusted-proxy mode to use the configured gateway password as an internal fallback while keeping token fallback rejected. Fixes #17761. Thanks @dashed, @vincentkoc, and @jetd1.",
      "Gateway/auth: add explicit `trustedProxy.allowLoopback` support for same-host loopback reverse proxies while keeping loopback trusted-proxy auth fail-closed by default and preserving required-header and allowlist checks. Fixes #59167; carries forward #63379. Thanks @Matir, @jeremyakers, and @mrosmarin.",
      "Channels/sessions: prevent guarded inbound session recording from creating route-only phantom sessions while still allowing last-route updates for sessions that already exist. Carries forward #73009. Thanks @jzakirov.",
      "Cron: accept `delivery.threadId` in Gateway cron add/update schemas so scheduled announce delivery can target Telegram forum topics and other threaded channel destinations through the documented delivery path. Fixes #73017. Thanks @coachsootz.",
      "Plugins/runtime deps: stage bundled plugin dependencies imported by mirrored root dist chunks, so packaged memory and status commands do not miss `chokidar` or similar root-chunk dependencies after update. Fixes #72882 and #72970; carries forward #72992. Thanks @shrimpy8, @colin-chang, and @Schnup03.",
      "Plugins/runtime deps: reuse unchanged bundled plugin runtime mirrors instead of rebuilding plugin trees on every load, cutting avoidable writes and restart/reconnect I/O on slow storage. Fixes #72933. Thanks @jasonftl.",
      "Agents/runtime context: deliver hidden runtime context through prompt-local system context while keeping the transcript-only custom entry out of provider user turns, and strip stale copied runtime-context prefaces from user-facing replies. Fixes #72386; carries forward #72969. Thanks @jhsmith409.",
      "Channels/Telegram: skip the optional webhook-info API call during polling-mode status checks and startup bot-label probes so long-polling setups avoid an unnecessary Telegram round trip. Carries forward #72990. Thanks @danielgruneberg.",
      "CLI/message: resolve targeted `openclaw message` channels to their owning plugin before loading the registry, and fall back to configured channel plugins when the channel must be inferred, so scripted sends avoid full bundled plugin registry scans without assuming channel ids match plugin ids. Fixes #73006. Thanks @jasonftl.",
      "Plugins/startup: parse strict JSON plugin manifests with native JSON first and keep JSON5 as the compatibility fallback, reducing manifest registry CPU during Gateway boot and CLI startup. Fixes #73011. Thanks @jasonftl.",
      "CLI/models: keep route-first `models status --json` stdout reserved for the JSON payload by routing auth-profile and startup diagnostics to stderr. Fixes #72962. Thanks @vishutdhar.",
      "Gateway/runtime: keep dirty-tree status calls from rebuilding live `dist`, clear stale task and restart state across in-process restarts, retry transient Discord lazy imports, and let channel startup continue after slow model warmup so browser, Discord, and voice-call sidecars come online. Thanks @vincentkoc.",
      "Security/CodeQL: replace file SecretRef id gateway schema regex validation with segment-aligned predicates and set empty permissions on release summary/backfill jobs so the narrowed CodeQL profile stays clean. Thanks @vincentkoc.",
      "Sessions: ignore future-dated session activity timestamps during reset freshness checks and cap future `updatedAt` values at the merge boundary so clock-skewed messages cannot keep stale sessions alive forever. Fixes #72989. Thanks @martingarramon.",
      "Sessions: apply search, activity filters, and limits before gateway row enrichment so bounded session lists avoid scanning discarded transcripts. Carries forward #72978. Thanks @yeager.",
      "Sessions: remove trajectory runtime and pointer sidecars when session maintenance prunes, caps, or disk-evicts their owning session, while preserving sidecars still referenced by live rows. Fixes #73000. Thanks @jared-rebel.",
      "Plugins/CLI: allow managed plugin installs when the active extensions root is a symlink to a real state directory, while keeping nested target symlinks blocked and suppressing misleading hook-pack fallback errors for install-boundary failures. Fixes #72946. Thanks @mayank6136.",
      "Providers/Ollama: mark discovered Ollama catalog models as supporting streaming usage metadata so token accounting stays enabled for local models. (#72976) Thanks @sdeyang.",
      "Media understanding: reject malformed MIME values with trailing junk while preserving standard parameter tails before enrichment uses them. (#72914) Thanks @volcano303.",
      "WebChat: keep bare `/new` and `/reset` prompts from producing empty transcript text by inserting the hidden session marker when the visible tail is blank. (#72863) Thanks @mahopan.",
      "CLI/update: explain completion-cache refresh timeouts with manual refresh guidance instead of surfacing a raw low-level timeout. Fixes #72842. (#72850) Thanks @iot2edge.",
      "Memory-core/dreaming: give narrative generation a 60-second timeout so slower local or remote models can finish instead of timing out at 15 seconds. Fixes #72837. (#72852) Thanks @RayWoo.",
      "Plugins/hooks: inject each plugin's resolved config into internal hook event context without mutating the shared event object. (#72888) Thanks @jalapeno777.",
      "Agents/ACP: pass the resolved ACP agent directory into media understanding so per-agent media caches and config are used for ACP-dispatched image turns. (#72832) Thanks @luyao618.",
      "Gateway/Bonjour: truncate mDNS service names and host labels to the 63-byte DNS label limit at valid UTF-8 boundaries. (#72809) Thanks @luyao618.",
      "Feishu: treat groups explicitly configured under channels.feishu.groups as admitted even when groupAllowFrom is empty, while preserving groupPolicy: \"disabled\" as a hard group block and keeping groups.\\* wildcard defaults non-admitting. Fixes #67687. (#72789) Thanks @MoerAI.",
      "Gateway/startup: keep hot Gateway boot paths on leaf config imports and add max-RSS reporting to the gateway startup bench so low-memory startup regressions are visible before release. Thanks @vincentkoc.",
      "WebChat: read `chat.history` from active transcript branches, drop stale streamed assistant tails once final history catches up, and coalesce duplicate in-flight Control UI submits, so rewritten prompts, completed replies, and rapid send events no longer render or process twice. Fixes #72975, #72963, and #72974. Thanks @dmagdici, @lhtpluto, and @Benjamin5281999.",
      "WebChat/TTS: persist automatic final-mode TTS audio as a supplemental audio-only transcript update instead of adding a second assistant message with the same visible text. Fixes #72830. Thanks @lhtpluto.",
      "Agents/LSP: terminate bundled stdio LSP process trees during runtime disposal and Gateway shutdown, so nested children such as `tsserver` do not survive stop or restart. Fixes #72357. Thanks @ai-hpc and @bittoby.",
      "Diagnostics/OTEL: capture privacy-safe model-call request payload bytes, streamed response bytes, first-response latency, and total duration in diagnostic events, plugin hooks, stability snapshots, and OTEL model-call spans/metrics without logging raw model content. Fixes #33832. Thanks @wwh830.",
      "Logging: write validated diagnostic trace context as top-level `traceId`, `spanId`, `parentSpanId`, and `traceFlags` fields in file-log JSONL records so traced requests and model calls are easier to correlate in log processors. Refs #40353. Thanks @liangruochong44-ui.",
      "Logging/sessions: apply configured redaction patterns to persisted session transcript text and accept escaped character classes in safe custom redaction regexes, so transcript JSONL no longer keeps matching sensitive text in the clear. Fixes #42982. Thanks @panpan0000.",
      "Providers/Ollama: honor `/api/show` capabilities when registering local models so non-tool Ollama models no longer receive the agent tool surface, and keep native Ollama thinking opt-in instead of enabling it by default. Fixes #64710 and duplicate #65343. Thanks @yuan-b, @netherby, @xilopaint, and @Diyforfun2026.",
      "Control UI/Agents: remount the Overview model controls when switching agents so the primary-model picker cannot retain stale per-agent selection. Fixes #39392; carries forward #39401, notes the duplicate #39495 approach, and keeps #46275/#54724 broader stabilization out of scope. Thanks @daijunyi002, @SergioChan, @aworki, and @wsyjh8.",
      "Auto-reply: poison inbound message dedupe after replay-unsafe provider/runtime failures so retries stay safe before visible progress but cannot duplicate messages after block output, tool side effects, or session progress. Fixes #69303; keeps #58549 and #64606 as duplicate validation. Thanks @martingarramon, @NikolaFC, and @zeroth-blip.",
      "Agents/model fallback: jump directly to a known later live-session model redirect instead of walking unrelated fallback candidates, while preserving the already-landed live-session/fallback loop guard. Fixes #57471; related loop family already closed via #58496. Thanks @yuxiaoyang2007-prog.",
      "Gateway/Bonjour: keep @homebridge/ciao cancellation handlers registered across advertiser restarts so late probing cancellations cannot crash Linux and other mDNS-churned gateways. Thanks @vincentkoc.",
      "Plugins/startup: load the default `memory-core` slot during Gateway startup when permitted so active-memory recall can call `memory_search` and `memory_get` without requiring an explicit `plugins.slots.memory` entry, while preserving `plugins.slots.memory: \"none\"`. Thanks @vincentkoc.",
      "Gateway/plugins: resolve `gateway_start` cron hooks from live Gateway runtime state before the legacy deps fallback, so memory-core dreaming cron reconciliation keeps working on installs where `deps.cron` is not populated during service startup. Fixes #72835. Thanks @RayWoo.",
      "Plugins/CLI: prefer native require for compiled bundled plugin JavaScript before jiti so read-only config, status, device, and node commands avoid unnecessary transform overhead on slow hosts. Fixes #62842. Thanks @Effet.",
      "Plugins/compat: inventory doctor-side deprecation migrations separately from runtime plugin compatibility so release sweeps preserve needed repairs while enforcing dated removal windows. Thanks @vincentkoc.",
      "Plugins/compat: add missing dated compatibility records for legacy extension-api, memory registration, provider hook/type aliases, runtime aliases, channel SDK helpers, and approval/test utility shims. Thanks @vincentkoc.",
      "Plugins/CLI: refresh the persisted registry after managed plugin files are removed so ClawHub uninstall cannot leave stale `plugins list` entries. Thanks @vincentkoc.",
      "Plugins/CLI: make plugin install and uninstall config writes conflict-aware, clear stale denylist entries on explicit reinstall/removal, and delete managed plugin files only after config/index commit succeeds. Thanks @vincentkoc.",
      "Plugins: fail `plugins update` when tracked plugin or hook updates error, keep bundled runtime-dependency repair behind restrictive allowlists, and reject package installs with unloadable extension entries. Thanks @vincentkoc.",
      "WebChat/Control UI: support non-video file attachments in chat uploads while preserving the existing image attachment path and MIME-sniff fallback for generic image uploads. (#70947) Thanks @IAMSamuelRodda.",
      "Skills/memory: restore Chokidar v5 hot reloads by watching concrete skill and memory roots with filters, including SKILL.md removals and deleted skill folders without broad workspace recursion. Fixes #27404, #33585, and #41606. Thanks @shelvenzhou, @08820048, and @rocke2020.",
      "Gateway/chat: keep duplicate attachment-backed `chat.send` retries with the same idempotency key on the documented in-flight path so aborts still target the real active run. Fixes #70139. Thanks @Feelw00.",
      "Gateway/chat: preserve repeated boundary characters while merging assistant chat stream deltas, including repeated digits, CJK characters, and markdown/table tokens. Fixes #63769; carries forward #63994 and #65457. Thanks @yon950905 and @mohuaxiao.",
      "Plugins: share package entrypoint resolution between install and discovery, reject mismatched `runtimeExtensions`, and cache bundled runtime-dependency manifest reads during scans. Thanks @vincentkoc.",
      "WhatsApp/Web: keep quiet but healthy linked-device sessions connected by basing the watchdog on WhatsApp Web transport activity, while retaining a longer app-silence cap so frame activity cannot mask a stuck session forever. Fixes #70678; carries forward the focused #71466 approach and keeps #63939 as related configurable-timeout follow-up. Thanks @vincentkoc and @oromeis.",
      "Discord/gateway: count failed health-monitor restart attempts toward cooldown and hourly caps, and evict stale account lifecycle state during channel reloads so repeated Discord gateway recovery cannot loop on old status. Fixes #38596. (#40413) Thanks @jellyAI-dev and @vashquez.",
      "TTS/BlueBubbles: pre-transcode synthesized MP3 audio to opus-in-CAF (mono, 24 kHz — validated against macOS 15.x Messages.app's native voice-memo CAF descriptor) on macOS hosts before handing the file to BlueBubbles, so iMessage renders the result as a native voice-memo bubble with proper duration and waveform UI instead of a plain file attachment. Adds an opt-in `tts.voice.preferAudioFileFormat` channel capability and a magic-byte sniff for the CAF container so the host-local-media validator (which uses `file-type` and didn't recognize CAF natively) can verify the pre-transcoded buffer. Channels that don't opt in are unaffected. (#72586) Fixes #72506. Thanks @omarshahine.",
      "Feishu: retry WebSocket startup failures with monitor-owned backoff while preserving SDK-local heartbeat defaults, so persistent-connection startup failures no longer leave the monitor hung. Fixes #68766; related #42354 and #55532. Thanks @alex-xuweilong, @120106835, @sirfengyu, and @tianhaocui.",
      "Cron: normalize isolated job tool allowlists before granting the narrow self-removal cron tool path, keeping scheduled jobs aligned with shared tool policy normalization. (#73028) Thanks @jalehman."
    ]
  },
  {
    "version": "2026.4.26",
    "date": "2026.4.26",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426",
    "features": [
      {
        "title": "Control UI/Talk",
        "description": "add a generic browser realtime transport contract, Google Live browser Talk sessions with constrained ephemeral tokens, and a Gateway relay for backend-only realtime voice plugins. Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "CLI/models",
        "description": "route provider-filtered model listing through an explicit source plan so user config, installed manifest rows, Provider Index previews, and scoped runtime fallbacks keep a stable authority order without adding another catalog cache. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Plugins/cron",
        "description": "add a typed `cron_changed` hook for observing gateway-owned cron lifecycle updates without depending on internal cron events. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Providers",
        "description": "add Cerebras as a bundled plugin with onboarding, static model catalog, docs, and manifest-owned endpoint metadata.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Memory/OpenAI-compatible",
        "description": "add optional `memorySearch.inputType`, `queryInputType`, and `documentInputType` config for asymmetric embedding endpoints, including direct query embeddings and provider batch indexing. Carries forward #63313 and #60727. Thanks @HOYALIM and @prospect1314521.",
        "href": "https://github.com/openclaw/openclaw/issues/63313"
      },
      {
        "title": "Ollama/memory",
        "description": "add model-specific retrieval query prefixes for `nomic-embed-text`, `qwen3-embedding`, and `mxbai-embed-large` memory-search queries while leaving document batches unchanged. Carries forward #45013. Thanks @laolin5564.",
        "href": "https://github.com/openclaw/openclaw/issues/45013"
      },
      {
        "title": "Plugins/providers",
        "description": "move pre-runtime model-id normalization, provider endpoint host metadata, and OpenAI-compatible request-family hints into plugin manifests so core no longer carries bundled-provider routing tables.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Plugins/config",
        "description": "deprecate direct plugin config load/write helpers in favor of passed runtime snapshots plus transactional mutation helpers with explicit restart follow-up policy, scanner guardrails, runtime warnings, and revision-based cache invalidation.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Plugins/install",
        "description": "allow `OPENCLAW_PLUGIN_STAGE_DIR` to contain layered runtime-dependency roots, resolving read-only preinstalled deps before installing missing deps into the final writable root. Fixes #72396. Thanks @liorb-mountapps.",
        "href": "https://github.com/openclaw/openclaw/issues/72396"
      },
      {
        "title": "Control UI",
        "description": "add a raw config pending-changes diff panel that parses JSON5, redacts sensitive values until reveal, and avoids fake raw-edit callbacks when opening the panel. Refs #39831; supersedes #48621 and #46654. Thanks @JiajunBernoulli and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/39831"
      },
      {
        "title": "Control UI",
        "description": "polish the quick settings dashboard grid so common cards align across desktop, tablet, and mobile layouts without wasting horizontal space. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Matrix/E2EE",
        "description": "add `openclaw matrix encryption setup` to enable Matrix encryption, bootstrap recovery, and print verification status from one setup flow. Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "Agents/compaction",
        "description": "add an opt-in `agents.defaults.compaction.maxActiveTranscriptBytes` preflight trigger that runs normal local compaction when the active JSONL grows too large, requiring transcript rotation so successful compaction moves future turns onto a smaller successor file instead of raw byte-splitting history. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "CLI/migration",
        "description": "add a bundled Claude importer that previews and applies Claude Code and Claude Desktop instructions, MCP servers, skills, command prompts, and safe archive/manual-review state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      },
      {
        "title": "CLI/migration",
        "description": "add `openclaw migrate` with plan, dry-run, JSON, pre-migration backup, onboarding detection, archive-only report copies, and a bundled Hermes importer for configuration, memory/plugin hints, model providers, MCP servers, skills, and supported credentials. Thanks @NousResearch.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026426"
      }
    ],
    "fixes": [
      "Gateway/device tokens: stop echoing rotated bearer tokens from shared/admin `device.token.rotate` responses while preserving the same-device token handoff needed by token-only clients before reconnect. (#66773) Thanks @MoerAI.",
      "Agents/sessions_spawn: resolve configured bare model aliases for spawn model overrides using the target agent runtime default provider, carrying forward the alias-specific #69029 review fixes from #59681 without the unrelated active-session pruning path. Fixes #59681. Thanks @HowdyDooToYou.",
      "Control UI/Talk: keep Google Live browser sessions on the WebSocket transport instead of falling back to WebRTC, validate browser Google Live WebSocket endpoints, cap Gateway relay sessions per browser connection, and remove stale browser-native voice buttons that did not use the configured Talk/TTS provider. Thanks @BunsDev.",
      "Gateway/startup: reuse config snapshot plugin manifests for startup auto-enable before plugin bootstrap plans plugin loading. Thanks @shakkernerd.",
      "Agents/subagents: enforce `subagents.allowAgents` for explicit same-agent `sessions_spawn(agentId=...)` calls instead of auto-allowing requester self-targets. Fixes #72827. Thanks @oiGaDio.",
      "ACP/sessions_spawn: let explicit `sessions_spawn(runtime=\"acp\")` bootstrap turns run while `acp.dispatch.enabled=false` still blocks automatic ACP thread dispatch. Fixes #63591. Thanks @moeedahmed.",
      "CLI/update: install npm global updates into a verified temporary prefix before swapping the package tree into place, preventing mixed old/new installs and stale packaged files from breaking `openclaw update` verification. Thanks @shakkernerd.",
      "Gateway: skip CLI startup self-respawn for foreground gateway runs so low-memory Linux/Node 24 hosts start through the same path as direct `dist/index.js` without hanging before logs. Fixes #72720. Thanks @sign-2025.",
      "Google Meet: grant Meet media permissions through browser control and pin local Chrome audio defaults to `BlackHole 2ch`, so joined agents no longer show `Permission needed` or use macOS default audio devices. Thanks @DougButdorf.",
      "Gateway: treat uncaught broken-pipe stream errors like `EPIPE` as non-fatal so Discord delivery or closed pipes no longer crash the Gateway after a reply is ready.",
      "Google Meet: route local Chrome joins through OpenClaw browser control instead of raw default Chrome, so agents use the configured OpenClaw browser profile when opening Meet. Thanks @oromeis.",
      "Plugins/discovery: follow symlinked plugin directories in global and workspace plugin roots while keeping broken links ignored and existing package safety checks in place. Fixes #36754; carries forward #72695 and #63206. Thanks @Quackstro, @ming1523, and @xsfX20.",
      "Plugins/install: skip test files and directories during install security scans while still force-scanning declared runtime entrypoints, so packaged test mocks no longer block plugin installs. Fixes #66840; carries forward #67050. Thanks @saurabhjain1592 and @Magicray1217.",
      "Plugins/install: allow exact package-manager peer links back to the trusted OpenClaw host package during install security scans while continuing to block spoofed or nested escaping `node_modules` symlinks. Carries forward #70819. Thanks @fgabelmannjr.",
      "Plugins/install: resolve plugin install destinations from the active profile state dir across CLI, ClawHub, marketplace, local path, and channel setup installs, so `openclaw --profile <name> plugins install ...` no longer writes into the default profile. Fixes #69960; carries forward #69971. Thanks @FrancisLyman and @Sanjays2402.",
      "Plugins/registry: suppress duplicate-plugin startup warnings when a tracked npm-installed plugin intentionally overrides the bundled plugin with the same id. Carries forward #48673. Thanks @abdushsk.",
      "Plugins/startup: reuse canonical realpath lookups throughout each plugin discovery pass, including package and manifest boundary checks, so Windows npm-global startups no longer repeat expensive path resolution for the same plugin roots. Fixes #65733. Thanks @welfo-beo.",
      "Gateway/proxy: pass `ALL_PROXY` / `all_proxy` into the global Undici env-proxy dispatcher and provider proxy-fetch helper while keeping SSRF trusted-proxy auto-upgrade on `HTTP_PROXY` / `HTTPS_PROXY` only, so gateway/provider calls honor all-proxy setups without weakening guarded fetches. Fixes #43821; carries forward #43919. Thanks @RickyTong1.",
      "Providers/LiteLLM: honor `--custom-base-url` during non-interactive API-key onboarding without adding proxy discovery side effects, so scripted remote LiteLLM setup keeps the requested endpoint instead of falling back to localhost. Carries forward #66160. Thanks @dongs0104.",
      "Reply/link understanding: keep media and link preprocessing on stable runtime entrypoints and continue with raw message content if optional enrichment fails, so URL-bearing messages are no longer dropped after stale runtime chunk upgrades. Fixes #68466. Thanks @songshikang0111.",
      "Discord: persist routed model-picker overrides when the hidden `/model` dispatch succeeds but the bound thread session store is still stale, including LM Studio suffixed model ids. Carries forward #61473. Thanks @Nanako0129.",
      "Nodes/CLI: add `openclaw nodes remove --node <id|name|ip>` and `node.pair.remove` so stale gateway-owned node pairing records can be cleaned without hand-editing state files.",
      "Gateway: include the connecting client and fresh presence version in the initial `hello-ok` snapshot, so clients no longer need a follow-up event before seeing themselves online.",
      "Docker: install the CA certificate bundle in the slim runtime image so HTTPS calls from containerized gateways no longer fail TLS setup after the `bookworm-slim` base switch. Fixes #72787. Thanks @ryuhaneul.",
      "Providers/OpenRouter: remove retired Hunter Alpha and Healer Alpha static catalog rows and disable proxy reasoning injection for stale Hunter Alpha configs, so replies are not hidden when OpenRouter returns answer text in reasoning fields. Fixes #43942. Thanks @EvanDataForge.",
      "Providers/reasoning: let Groq and LM Studio declare provider-native reasoning effort values, so Qwen thinking models receive `none`/`default` or `off`/`on` instead of OpenAI-only `low`/`medium` values. Fixes #32638. Thanks @Aqu1bp, @mgoulart, @Norpps, and @BSTail.",
      "Local models: default custom providers with only `baseUrl` to the Chat Completions adapter and trust loopback model requests automatically, so local OpenAI-compatible proxies receive `/v1/chat/completions` without timing out. Fixes #40024. Thanks @parachuteshe.",
      "Channels/message tool: surface Discord, Slack, and Mattermost `user:`/`channel:` target syntax in the shared message target schema and Discord ambiguity errors, so DM sends by numeric id stop burning retries before finding `user:<id>`. Fixes #72401. Thanks @garyd9, @hclsys, and @praveen9354.",
      "Agents/tools: scope tool-loop detection history to the active run when available, so scheduled heartbeat cycles no longer inherit stale repeated-call counts from previous runs. Fixes #40144. Thanks @mattbrown319.",
      "Agents/subagents: preserve requester delivery for completion announces when a child agent is bound to a different channel account while keeping same-channel thread completions routed to the child thread. Thanks @sfuminya.",
      "Agents/subagents: fail closed instead of selecting a single child thread binding when completion delivery lacks requester conversation signal. Thanks @suyua9.",
      "Agents/status: persist the post-compaction token estimate from auto-compaction when providers omit usage metadata, so `/status` and session lists keep showing fresh context usage after compaction. Fixes #67667; carries forward #72822. Thanks @Jimmy-xuzimo and @skylight-9.",
      "Control UI: show loading, reload, and retry states when a lazy dashboard panel cannot load after an upgrade, so the Logs tab no longer appears blank on stale browser bundles. Fixes #72450. Thanks @sobergou.",
      "Gateway/plugins: start the Gateway in degraded mode when a single plugin entry has invalid schema config, and let `openclaw doctor --fix` quarantine that plugin config instead of crash-looping every channel. Fixes #62976 and #70371. Thanks @Doraemon-Claw and @pksidekyk.",
      "Agents/plugins: skip malformed plugin tools with missing schema objects and report plugin diagnostics, so one broken tool no longer crashes Anthropic agent runs. Fixes #69423. Thanks @jmnickels.",
      "Dashboard: log a CVE-safe self-recovery hint pointing users to `OPENCLAW_GATEWAY_TOKEN`, `gateway.auth.token`, and fragment key `token` when neither clipboard nor browser delivery places the token-bearing URL within reach, so headless and WSL invocations are not stranded on the bare URL. Fixes #72081. Thanks @praveen9354 and @BunsDev.",
      "Agents/reasoning: recover fully wrapped unclosed `<think>` replies that would otherwise sanitize to empty text while keeping strict stripping for closed reasoning blocks and unclosed tails after visible text. Fixes #37696; supersedes #51915. Thanks @druide67 and @okuyam2y.",
      "Control UI/Gateway: bind WebChat handshakes to their active socket and reject post-close server registrations, so aborted connects no longer leave zombie clients or misleading duplicate WebSocket connection logs. Fixes #72753. Thanks @LumenFromTheFuture.",
      "Agents/fallback: split ambiguous provider failures into `empty_response`, `no_error_details`, and `unclassified`, and add flat fallback-step fields to structured fallback logs so primary-model failures stay visible when later fallbacks also fail. Fixes #71922; refs #71744. Thanks @andyk-ms and @nikolaykazakovvs-ux.",
      "Gateway/startup: reuse the plugin manifest registry inside config validation so restrictive plugin allowlists avoid a duplicate manifest pass during startup. Thanks @shakkernerd.",
      "Gateway/startup: run plugin auto-enable from authored source config and skip disabled setup probes, avoiding runtime-default plugin allowlist writes and a second config snapshot read during startup. Thanks @shakkernerd.",
      "Plugins/Windows: normalize Windows absolute paths before handing bundled plugin modules to Jiti, so Feishu/Lark message sending no longer fails with unsupported `c:` ESM loader URLs. Fixes #72783. Thanks @jackychen-png.",
      "CLI/doctor: run bundled plugin runtime-dependency repairs through the async npm installer with spinner/line progress and heartbeat updates, so long `openclaw doctor --fix` installs no longer look hung in TTY or piped output. Fixes #72775. Thanks @dfpalhano.",
      "Feishu/Windows: normalize bundled channel sidecar loads before Jiti evaluates them, so Feishu outbound sends no longer fail with raw `C:` ESM loader errors on Windows. Fixes #72783. Thanks @jackychen-png.",
      "Agents/tools: ignore volatile `exec` runtime metadata when comparing tool-loop outcomes, so enabled loop detection can stop repeated identical shell-command results instead of resetting on duration, PID, session, or cwd changes. Fixes #34574; supersedes #41502. Thanks @gucasbrg and @Zcg2021.",
      "Agents/fallback: classify internal live-session model switch conflicts as unknown fallback failures instead of provider overloads, preventing local vLLM endpoints from receiving misleading overloaded cooldowns. Refs #63229. Thanks @clawdia-lobster.",
      "Discord: let thread sessions inherit the parent channel's session-level `/model` override as a model-only fallback without enabling parent transcript inheritance. Fixes #72755. Thanks @solavrc.",
      "Gateway/plugins: skip stale configured channels whose matching plugin is no longer discoverable, point cleanup at `openclaw doctor --fix`, and keep unrelated channel typos fatal so one missing channel plugin no longer crash-loops the Gateway. Fixes #53311. Thanks @futhgar.",
      "Control UI: keep session-specific assistant identity loads authoritative after WebSocket connect, so non-main agent chat sessions do not show the main agent name in the header after bootstrap refreshes. Fixes #72776. Thanks @rockytian-top.",
      "Agents/Qwen: preserve exact custom `modelstudio` provider configs with foreign `api` owners so explicit OpenAI-compatible Model Studio endpoints no longer get normalized into the bundled Qwen plugin path. Fixes #64483. Thanks @FiredMosquito831.",
      "MCP/bundle-mcp: normalize CLI-native `type: \"http\"` MCP server entries to OpenClaw `transport: \"streamable-http\"` on save, repair existing configs with doctor, and keep embedded Pi from falling back to legacy SSE GET-first startup for those servers. Fixes #72757. Thanks @Studioscale.",
      "OpenCode: expose Anthropic Opus/Sonnet 4.x thinking levels for proxied Claude models, so `/think xhigh`, `/think adaptive`, and `/think max` validate consistently with the direct Anthropic provider. Fixes #72729. Thanks @haishmg and @aaajiao.",
      "Media-understanding/audio: migrate deprecated `{input}` placeholders in legacy `audio.transcription.command` configs to `{{MediaPath}}`, so custom audio transcribers no longer receive the literal placeholder after doctor repair. Fixes #72760. Thanks @krisfanue3-hash.",
      "Ollama/WSL2: warn when GPU-backed WSL2 installs combine CUDA visibility with an autostarting `ollama.service` using `Restart=always`, and document the systemd, `.wslconfig`, and keep-alive mitigation for crash loops. Carries forward #61022; fixes #61185. Thanks @yhyatt.",
      "Ollama/onboarding: de-dupe suggested bare local models against installed `:latest` tags and skip redundant pulls, so setup shows the installed model once and no longer says it is downloading an already available model. Fixes #68952. Thanks @tleyden.",
      "Memory-core/doctor: keep `doctor.memory.status` on the cached path by default and only run live embedding pings for explicit deep probes, preventing slow local embedding backends from blocking Gateway status checks. Fixes #71568. Thanks @apex-system.",
      "Memory/QMD: group same-source collections into one QMD search invocation when the installed QMD supports multiple `-c` filters, while keeping older QMD builds on the per-collection fallback. Fixes #72484; supersedes #72485 and #69583. Thanks @BsnizND and @zeroaltitude.",
      "Memory/QMD: accept QMD status vector-count variants such as `Vectors = 42`, `Vectors:42`, and `Vectors: 42 embedded`, so `memory status --deep` no longer reports embeddings unavailable for healthy QMD wrappers. Fixes #63652; carries forward #63678. Thanks @apoapostolov and @WarrenJones.",
      "Memory/QMD: skip QMD vector status probes and embedding maintenance in lexical `searchMode: \"search\"`, so BM25-only QMD setups on ARM do not trigger llama.cpp/Vulkan builds during status checks or embed cycles. Fixes #59234 and #67113. Thanks @PrinceOfEgypt, @Vksh07, @Snipe76, @NomLom, @t4r3e2q1-commits, and @dmak.",
      "Memory/QMD: report the live watcher dirty state in memory status, so changed QMD-backed memory files show as dirty until the queued sync finishes. Fixes #60244. Thanks @xinzf.",
      "Compaction: skip oversized pre-compaction checkpoint snapshots and prune duplicate long user turns from compaction input and rotated successor transcripts, preventing retry storms from being preserved across checkpoint cycles. Fixes #72780. Thanks @SweetSophia.",
      "Control UI/Cron: render cron job prompts and run summaries as sanitized markdown in the dashboard, with full-width block content, safer link clicks, and no duplicate error text when a failed run has no summary. Supersedes #48504. Thanks @garethdaine.",
      "Control UI/Gateway: preserve WebChat client version labels across localhost, 127.0.0.1, and IPv6 loopback aliases on the same port, avoiding misleading `vcontrol-ui` connection logs while investigating duplicate-message reports. Refs #72753 and #72742. Thanks @LumenFromTheFuture and @allesgutefy.",
      "Agents/reasoning: treat orphan closing reasoning tags with following answer text as a privacy boundary across delivery, history, streaming, and Control UI sanitizers so malformed local-model output cannot leak chain-of-thought text. Fixes #67092. Thanks @AnildoSilva.",
      "Memory-core: run one-shot memory CLI commands through transient builtin and QMD managers so `memory index`, `memory status --index`, and `memory search` no longer start long-lived file watchers that can hit macOS `EMFILE` limits. Fixes #59101; carries forward #49851. Thanks @mbear469210-coder and @maoyuanxue.",
      "Agents/ACP: ship the Claude ACP adapter with OpenClaw and require Claude result messages before idle can complete a prompt, preventing parent agents from waking early on long-running `sessions_spawn(runtime: \"acp\", agentId: \"claude\")` children. Fixes #72080. Thanks @siavash-saki and @iannwu.",
      "CLI/tasks: route `tasks --json`, `tasks list --json`, and `tasks audit --json` through a lean JSON path so read-only task inspection no longer loads unrelated plugin/runtime command graphs. Fixes #66238. Thanks @ChuckChambers.",
      "Memory-core: re-resolve the active runtime config whenever `memory_search` or `memory_get` executes, so provider changes made by `config.patch` stop leaving stale embedding backends behind in existing tool instances. Fixes #61098. Thanks @BradGroux and @Linux2010.",
      "WebChat: keep bare `/new` and `/reset` startup instructions out of visible chat history while preserving `/reset <note>` as user-visible transcript text. Fixes #72369. Thanks @collynes and @haishmg.",
      "Tasks/memory: checkpoint and truncate SQLite WAL sidecars on a timer and before close for task, Task Flow, proxy capture, and builtin memory databases, bounding long-running gateway `*.sqlite-wal` growth. Fixes #72774. Thanks @dfpalhano.",
      "CLI/doctor: remove dangling channel config, heartbeat targets, and channel model overrides when stale plugin repair removes a missing channel plugin, preventing Gateway boot loops after failed plugin reinstalls. Fixes #65293. Thanks @yidecode.",
      "Control UI/Gateway: cache, coalesce, stale-refresh, and invalidate effective tool inventory on channel registry changes while reusing the gateway-bound plugin registry and avoiding model/auth discovery, so chat runs no longer stall Control UI requests on repeated plugin/model setup. Fixes #72365; supersedes #72558. Thanks @Gabiii2398 and @1yihui.",
      "Channels/setup: treat bundled channel plugins as already bundled during `channels add` and onboarding, enabling them without writing redundant `plugins.load.paths` entries or path install records. Fixes #72740. Thanks @iCodePoet.",
      "WhatsApp: honor gateway `HTTPS_PROXY` / `HTTP_PROXY` env vars for QR-login WebSocket connections, while respecting `NO_PROXY`, so proxied networks no longer fall back to direct `mmg.whatsapp.net` connections that time out with 408. Fixes #72547; supersedes #72692. Thanks @mebusw and @SymbolStar.",
      "Bonjour: default mDNS advertisements to the system hostname when it is DNS-safe, avoiding `openclaw.local` probing conflicts and Gateway restart loops on hosts such as `Lobster` or `ubuntu`. Fixes #72355 and #72689; supersedes #72694. Thanks @mscheuerlein-bot, @gcusms, @moyuwuhen601, @pavan987, @zml-0912, @hhq365, and @SymbolStar.",
      "Agents/OpenAI-compatible: retry replay-safe empty `stop` turns once for `openai-completions` endpoints, so transient empty local backend responses no longer surface as “Agent couldn't generate a response” when a continuation succeeds, and restore `openclaw agent --model` for one-shot CLI runs. Fixes #72751. Thanks @moooV252.",
      "Git hooks: skip ignored staged paths when formatting and restaging pre-commit files, so merge commits no longer abort when `.gitignore` newly ignores staged merged content. Fixes #72744. Thanks @100yenadmin.",
      "Memory-core/dreaming: add a supported `dreaming.model` knob for Dream Diary narrative subagents, wired through phase config and the existing plugin subagent model-override trust gate. Refs #65963. Thanks @esqandil and @mjamiv.",
      "Agents/Anthropic: remove trailing assistant prefill payloads when extended thinking is enabled, so Opus 4.7/Sonnet 4.6 requests do not fail Anthropic's user-final-turn validation. Fixes #72739. Thanks @superandylin.",
      "Agents/vLLM/Qwen: add plugin-owned Qwen thinking controls for vLLM chat-template kwargs and DashScope-style top-level `enable_thinking` flags, including preserved thinking for agent loops. Fixes #72329. Thanks @stavrostzagadouris.",
      "Memory-core/dreaming: treat request-scoped narrative fallback as expected, skip session cleanup when no subagent run was created, and remove duplicate phase-level cleanup so fallback no longer emits warning noise. Fixes #67152. Thanks @jsompis.",
      "Agents/exec: apply configured `tools.exec.timeoutSec` to background, `yieldMs`, and node `system.run` commands when no per-call timeout is set, preventing auto-backgrounded and remote node commands from running indefinitely. Fixes #67600; supersedes #67603. Thanks @dlmpx and @kagura-agent.",
      "Config/doctor: stop masking unknown-key validation diagnostics such as `agents.defaults.llm`, and have `openclaw doctor --fix` remove the retired `agents.defaults.llm` timeout block. Thanks @aidiffuser.",
      "CLI/startup: keep the built pre-dispatch CLI graph free of package-level imports and extend packaged CLI smoke coverage to onboard and doctor help paths, preventing missing runtime dependencies such as tslog from killing onboarding before repair code can run. Fixes #63024. Thanks @hu19940121.",
      "CLI/plugins: preserve unversioned ClawHub install specs so `plugins update` can follow newer ClawHub releases instead of pinning to the initially resolved version. Fixes #63010; supersedes #58426. Thanks @kangsen1234 and @robinspt.",
      "Memory-core/subagents: tag plugin-created subagent sessions with their plugin owner so dreaming narrative cleanup can delete its own ephemeral sessions without granting broad admin session deletion. Fixes #72712. Thanks @BSG2000.",
      "Gateway/models: move local-provider pricing opt-outs, OpenRouter/LiteLLM aliases, and proxy passthrough pricing lookup into plugin manifest metadata so core no longer carries extension-specific pricing tables.",
      "CLI/update: honor `OPENCLAW_NO_AUTO_UPDATE=1` as a gateway startup kill-switch for configured background package auto-updates, so operators can hold a deliberate downgrade during incident recovery without editing config first. Fixes #72715. Thanks @Xivi08.",
      "Agents/Claude CLI: force live-session launches to include `--output-format stream-json` whenever OpenClaw adds `--input-format stream-json`, so new Claude CLI sessions no longer fail immediately while reusable sessions keep working. Fixes #72206. Thanks @kwangwonkoh and @Xivi08.",
      "CLI/plugins: accept ClawHub plugin API wildcard ranges such as `*` without rejecting compatible plugin installs, while still requiring a valid runtime API version. Fixes #56446; supersedes #56466. Thanks @darconada and @claygeo.",
      "CLI/plugins: add an explicit `npm:<package>` install prefix that skips ClawHub lookup for known npm packages while keeping bare package specs ClawHub-first. Fixes #55805; supersedes #54377. Thanks @Zeoy2020 and @vagusX.",
      "CLI/plugins: let config-gated bundled plugins install without persisting invalid placeholder config entries, so install/uninstall sweeps can cover plugins such as memory-lancedb before the user configures credentials. Thanks @vincentkoc.",
      "CLI/plugins: reject malformed ClawHub plugin specs with trailing `@` before registry lookup, so empty-version typos report as invalid specs instead of package-not-found errors. Fixes #56579; supersedes #56582. Thanks @Kansodata.",
      "Agents/sessions: acquire the session write lock only after cold bootstrap, plugin, and tool setup so fallback runs are not blocked by stalled pre-model startup work.",
      "Browser/plugins: auto-start the bundled browser plugin when root `browser` config is present, including restrictive plugin allowlists, and ignore stale persisted plugin registries whose package paths no longer exist.",
      "Browser: circuit-break repeated managed Chrome launch failures per profile so browser requests stop spawning Chromium indefinitely when CDP cannot start. Fixes #64271. Thanks @TheophilusChinomona.",
      "Gateway/models: skip external OpenRouter and LiteLLM pricing refreshes for local/self-hosted model endpoints so startup does not wait on remote pricing catalogs for local-only Ollama, vLLM, and compatible providers.",
      "CLI/plugins: stop security-blocked plugin installs from retrying as hook packs, so normal plugin packages report the scanner failure without a misleading \"not a valid hook pack\" follow-up. Fixes #61175; supersedes #64102. Thanks @KonsultDigital and @ziyincody.",
      "Agents/Anthropic: strip stale trailing assistant prefill turns from outbound replay so context-engine short circuits cannot send unsupported assistant-prefill payloads to provider APIs. Fixes #72556. Thanks @Veda-openclaw.",
      "Agents/Google: strip stale trailing assistant/model prefill turns from Gemini outbound replay so Google Generative AI requests end with a user turn or function response. Follow-up to #72556. Thanks @Veda-openclaw.",
      "Control UI/Dreaming: require explicit confirmation before applying restart-impacting Dreaming mode changes, with restart warning copy and loading feedback. Fixes #63804. (#63807) Thanks @bbddbb1.",
      "CLI/agent: mark Gateway-to-embedded fallback runs with `meta.transport: \"embedded\"` and `meta.fallbackFrom: \"gateway\"` in JSON output, and make the terminal diagnostic explicit so scripts and operators can distinguish fallback runs from Gateway runs. Fixes #71416. Thanks @amknight.",
      "Agents/tools: normalize `null` or missing tool-call arguments to `{}` for parameterless object schemas before Pi validation, so empty-argument tools run instead of failing argument validation. Fixes #72587. Thanks @amknight.",
      "Agents/subagents: clear active embedded-run state before terminal lifecycle events so post-completion cleanup no longer treats finished child runs as still active and skips archive or announcement bookkeeping. (#70187) Thanks @amknight.",
      "CLI/update: keep the automatic post-update completion refresh on the core-command tree so it no longer stages bundled plugin runtime deps before the Gateway restart path, avoiding `.24` update hangs and 1006 disconnect cascades. Fixes #72665. Thanks @sakalaboator and @He-Pin.",
      "Control UI: make explicit Reload Config actions discard stale local config edits while passive refreshes and failed-save recovery keep pending drafts intact. Fixes #40352; carries forward #40443. Thanks @realmikechong-dotcom.",
      "Agents/Bedrock: stop heartbeat runs from persisting blank user transcript turns and repair existing blank user text messages before replay, preventing AWS Bedrock `ContentBlock` blank-text validation failures. Fixes #72640 and #72622. Thanks @goldzulu.",
      "Agents/LM Studio: promote standalone bracketed local-model tool requests into registered tool calls and hide unsupported bracket blocks from visible replies, so MemPalace MCP lookups do not print raw `[tool]` JSON scaffolding in chat. Fixes #66178. Thanks @detroit357.",
      "Local models: warn when an assistant reply looks like a tool call but the provider emitted plain text instead of a structured tool invocation, making fake/non-executed tool calls visible in logs. Fixes #51332. Thanks @emilclaw.",
      "Local models: accept persisted non-secret local auth markers for private-LAN custom OpenAI-compatible providers, so LAN Ollama configs no longer fail with missing auth when `ollama-local` is saved as the key. Fixes #49736. Thanks @charles-zh.",
      "TUI/local models: treat visible gateway client labels such as `openclaw-tui` as the current requester session for session-aware tools, so Ollama tool calls no longer fail by resolving the UI label as a session id. Fixes #66391. Thanks @kickingzebra.",
      "Local models: route self-hosted OpenAI-compatible model discovery through the guarded fetch path pinned to the configured host, covering vLLM and SGLang setup without reopening local/LAN SSRF probes. Supersedes #46359. Thanks @cdxiaodong.",
      "Local models: classify terminated, reset, closed, timeout, and aborted model-call failures and attach a process memory snapshot to the diagnostic event, making LM Studio/Ollama RAM-pressure failures easier to prove from stability bundles. Refs #65551. Thanks @BigWiLLi111.",
      "Local models: pass configured provider request timeouts through OpenAI SDK transports and the model idle watchdog so long-running local or custom OpenAI-compatible streams use one timeout knob instead of hitting the SDK's 10-minute default or the 120s idle default. Fixes #63663. Thanks @aidiffuser.",
      "LM Studio: trust configured LM Studio loopback, LAN, and tailnet endpoints for guarded model requests by default, preserving explicit private-network opt-outs. Refs #60994. Thanks @tnowakow.",
      "Docker/setup: route Docker onboarding defaults for host-side LM Studio and Ollama through `host.docker.internal` and add the Linux host-gateway mapping to the bundled Compose file, so containerized gateways can reach local providers without using container loopback. Fixes #68684; supersedes #68702. Thanks @safrano9999 and @skolez.",
      "Agents/LM Studio: strip prior-turn Gemma 4 reasoning from OpenAI-compatible replay while preserving active tool-call continuation reasoning. Fixes #68704. Thanks @chip-snomo and @Kailigithub.",
      "LM Studio: allow interactive onboarding to leave the API key blank for unauthenticated local servers, using local synthetic auth while clearing stale LM Studio auth profiles. Fixes #66937. Thanks @olamedia.",
      "Plugins/startup: use a `PluginLookUpTable` during Gateway startup so channel ownership, deferred channel loading, and startup plugin IDs reuse the same installed manifest registry instead of rebuilding manifest metadata on the boot path. Thanks @shakkernerd.",
      "Plugins/startup: pass the Gateway `PluginLookUpTable` through plugin loading so auto-enable checks and startup-scope fallback reuse the same manifest registry instead of doing another manifest pass. Thanks @shakkernerd.",
      "Plugins/startup: carry the Gateway `PluginLookUpTable` into deferred channel full-runtime reloads so post-listen startup does not rebuild manifest metadata after the provisional setup-runtime load. Thanks @shakkernerd.",
      "Gateway/models: reuse Gateway plugin manifest metadata during the initial model-pricing refresh so pricing policies and configured plugin web-search models do not rebuild plugin lookups during startup. Thanks @shakkernerd.",
      "Gateway/startup: extend `OPENCLAW_GATEWAY_STARTUP_TRACE=1` with per-phase event-loop delay plus plugin lookup-table timing and count metrics for installed-index, manifest, startup-plan, and owner-map work, and include the new timing fields in startup benchmark summaries. Thanks @shakkernerd.",
      "Plugins/channels: resolve read-only channel command defaults from one plugin index plus manifest pass instead of reloading plugin metadata while checking candidate plugin enablement. Thanks @shakkernerd.",
      "Plugins/capabilities: cache manifest-derived capability provider plugin IDs per config snapshot so repeated TTS, media, realtime, memory, image, video, and music provider resolution avoids redundant manifest scans. Thanks @shakkernerd.",
      "Plugins/contracts: resolve runtime manifest-contract plugin owners from one plugin index plus manifest pass instead of rebuilding manifest metadata separately for all owners and enabled owners. Thanks @shakkernerd.",
      "Plugins/extractors: reuse one manifest registry pass while resolving bundled document and web-content extractor plugins instead of rereading manifests for compatibility and enablement filtering. Thanks @shakkernerd.",
      "Plugins/providers: reuse one plugin registry snapshot and manifest registry while resolving provider discovery entries instead of rebuilding manifest metadata after provider owner discovery. Thanks @shakkernerd.",
      "Plugins/registry: resolve lookup-table owner maps for providers, CLI backends, setup providers, command aliases, model catalogs, channel configs, and manifest contracts while preserving setup-only CLI backend ownership. Thanks @shakkernerd.",
      "Plugins/registry: cache repeated installed-index manifest registry fallback rebuilds behind a bounded invalidating cache so cold provider-discovery paths avoid rereading unchanged manifests. Thanks @mcaxtr.",
      "Plugins/web: reuse manifest records already loaded for bundled web provider candidate discovery when falling back to public artifact provider loading. Thanks @shakkernerd.",
      "Mattermost: keep direct-message replies top-level by suppressing reply roots for DM delivery while preserving channel and group thread roots, and derive inbound chat kind from the trusted channel lookup instead of the websocket event channel type. Carries forward #60115, #55186, #72305, and #72659; refs #59758, #59981, #59791, and #57565. Thanks @vincentkoc, @jwchmodx, and @hnykda.",
      "Docker: pre-create `/home/node/.openclaw` with node ownership and private permissions so first-run Docker Compose named volumes no longer fail startup with EACCES. (#48072, #63959; fixes #61279) Thanks @timoxue and @jeanibarz.",
      "CLI/Gateway: treat local restart probe policy closes for connect, exact `device required`, pairing, and auth failures as Gateway reachability proof without accepting empty, broad standalone token/password/scope/role, or pair-substring 1008 close reasons. Fixes #48771; carries forward #48801; related #63491. Thanks @MarsDoge and @genoooool.",
      "Feishu: send outgoing interactive reply payloads as native cards with clickable buttons while preserving text, media, and document-comment fallbacks. Fixes #13175 and #58298; carries forward #47891. Thanks @Horacehxw.",
      "Control UI/WebChat: skip redundant final-event history reloads when the assistant payload already rendered, and keep deferred `session.message` reloads attached to the active run so final reconciliation no longer splits, duplicates, or drops assistant bubbles. Fixes #66875 and #66274; follows #66997 and #67037. Thanks @BiznessFish, @scotthuang, and @hansolo949.",
      "CLI/Agents: route new `openclaw agent --to` sessions through the configured default agent while migrating legacy `agent:main:<mainKey>` rows into the default-agent store, preserving the default-agent fix from #64108. Fixes #63992; related #56370, #56453, and #42009. Thanks @mushuiyu886 and @voocel.",
      "Process/Windows: decode command stdout and stderr from raw bytes with console-codepage awareness, while preserving valid UTF-8 output and multibyte characters split across chunks. Fixes #50519. Thanks @iready, @kevinten10, @zhangyongjie1997, @knightplat-blip, @heiqishi666, and @slepybear.",
      "Bonjour/Windows: hide the bundled mDNS advertiser's Windows ARP shell probe so Gateway startup no longer flashes command-prompt windows. Fixes #70238. Thanks @alexandre-leng, @PratikRai0101, @infinitypacific, and @tomerpeled.",
      "Agents/bootstrap: dedupe hook-injected bootstrap context files by workspace-relative path and store normalized resolved paths so duplicate relative and absolute hook paths no longer depend on the process cwd. (#59344; fixes #59319; related #56721, #56725, and #57587) Thanks @koen666.",
      "Agents/bootstrap: refresh cached workspace bootstrap snapshots on long-lived main-session turns when `AGENTS.md`, `SOUL.md`, `MEMORY.md`, or `TOOLS.md` change on disk, while preserving unchanged snapshot identity through the workspace file cache. (#64871; related #43901, #26497, #28594, #30896) Thanks @aimqwest and @mikejuyoon.",
      "macOS Gateway: detect installed-but-unloaded LaunchAgent split-brain states during status, doctor, and restart, and re-bootstrap launchd supervision before falling back to unmanaged listener restarts. Fixes #67335, #53475, and #71060; refs #58890, #60885, and #70801. Thanks @ze1tgeist88, @dafacto, and @vishutdhar.",
      "WhatsApp: clear cached Web auth and active listener state after terminal 440/401 conflict/logout closes so linked/OK status no longer masks a dead inbound listener after relink or restart. Fixes #45474; refs #49305, #63855, #66920, and #70856. Thanks @juvenalmakoszay and @dsantoreis.",
      "Gateway/restart: keep local restart-health probes on configured local daemon auth without falling back to remote gateway credentials. (#57374, #59439) Thanks @zssggle-rgb and @roytong9.",
      "Plugins/install: treat mirrored core logger dependencies as staged bundled runtime deps so packaged Gateway starts do not crash when the external plugin-runtime-deps root is missing `tslog`. Fixes #72228; supersedes #72493. Thanks @deepujain.",
      "Build/plugins: preserve active bundled runtime-dependency staging temp directories owned by live build processes so overlapping postbuild runs no longer delete each other's staged deps mid-prune. Supersedes #72220. Thanks @VACInc.",
      "Plugins/install: hide bundled runtime-dependency npm child windows on Windows across Gateway startup, postinstall, and packaged staging paths so Telegram/Anthropic dependency repair no longer flashes shell windows. Fixes #72315. Thanks @athuljayaram and @joshfeng.",
      "Agents/Windows: normalize lazy agent runtime imports before Node ESM loading so Windows drive-letter `subagent-registry` runtime paths no longer fail every agent task with `ERR_UNSUPPORTED_ESM_URL_SCHEME`. Fixes #72636; carries forward #72716. Thanks @Andyz-CData and @xialonglee.",
      "Plugins/Windows: normalize lazy plugin service override imports before Node ESM loading so drive-letter browser-control module paths no longer fail with `ERR_UNSUPPORTED_ESM_URL_SCHEME`. Fixes #72573; supersedes #72599 and #72582. Thanks @llzzww316, @feineryonah-byte, and @WuKongAI-CMU.",
      "Browser/plugins: load `playwright-core` through the browser runtime shim so packaged installs can run Playwright actions from staged plugin runtime deps after doctor/startup repair. Fixes #72168; supersedes #72238. Thanks @zdg1110 and @yetval.",
      "Plugins/install: stage bundled plugin runtime dependencies before Gateway startup, drain update restarts, and materialize plugin-owned root chunks in external mirrors so staged deps resolve under native ESM. Fixes #72058; supersedes #72084. Thanks @amnesia106 and @drvoss.",
      "TTS/SecretRef: resolve `messages.tts.providers.*.apiKey` from the active runtime snapshot so SecretRef-backed MiniMax and other TTS provider keys work in runtime reply/audio paths. Fixes #68690. Thanks @joshavant.",
      "Gateway/install: surface systemd user-bus recovery hints during Linux service activation and retry via the target user scope when `systemctl --user` reports no-medium bus failures, without letting stale `SUDO_USER` override `sudo -u` installs. Fixes #39673; refs #44417 and #63561. Thanks @Arbor4, @myrsu, @mssteuer, and @boyuaner.",
      "CLI/nodes: make unfiltered `openclaw nodes list` prefer the effective paired-node view used by `nodes status` while preserving pending rows, pairing-scope fallback, terminal-safe table rendering, and paired JSON metadata. Fixes #46871; carries forward #65772 through the ProjectClownfish #72619 repair. Thanks @skainguyen1412.",
      "Memory Wiki/CLI: route active bridge-mode status, doctor, and bridge imports through Gateway RPC so CLI checks use the runtime memory plugin context while disabled bridge imports stay local/offline. Carries forward #67208 and #71479; related #70185. Thanks @moorsecopers99, @vincentkoc, and @prasad-yashdeep.",
      "CLI/startup: read generated startup metadata from the bundled `dist` layout before falling back to live help rendering, so root/browser help and channel-option bootstrap stay on the fast path. Thanks @vincentkoc.",
      "Feishu/Lark: stop treating broadcast-only `@all`/`@_all` messages as bot mentions while preserving direct bot mentions, including messages that also include `@all`. Fixes #37706. Thanks @JosepLee.",
      "CLI/help: treat positional `help` invocations like `openclaw channels help` as help paths for startup gating, avoiding model/auth warmup while preserving positional arguments such as `openclaw docs help`. Thanks @gumadeiras.",
      "Web search: route plugin-scoped web_search SecretRefs through the active runtime config snapshot so provider execution receives resolved credentials across app/runtime paths, including `plugins.entries.brave.config.webSearch.apiKey`. Fixes #68690. Thanks @VACInc.",
      "Voice Call: allow SecretRef-backed Twilio auth tokens and call-specific OpenAI/ElevenLabs TTS API keys through the plugin config surface. Fixes #68690. Thanks @joshavant.",
      "Google Meet: clean stale chrome-node realtime audio bridges by URL before rejoining, expose active node bridge inspection, and tolerate transient node input pull failures instead of dropping the Meet session. Fixes #72371. (#72372) Thanks @BsnizND.",
      "Google Meet: use 24 kHz PCM16 for Chrome command-pair realtime audio by default, preserve legacy 8 kHz G.711 mu-law custom command pairs, and let realtime providers negotiate the selected bridge audio format. Fixes #72525. Thanks @BsnizND.",
      "Google Meet: clear queued Gemini Live playback when realtime interruptions arrive, restart Chrome command-pair audio output after clears, and expose Google Live interruption/VAD config knobs for Meet and Voice Call realtime bridges. Fixes #72523. (#72524) Thanks @BsnizND.",
      "Google Meet: add `realtime.agentId` so live meeting consults can target a named OpenClaw agent instead of always using `main`. (#72381) Thanks @BsnizND.",
      "Google Meet: route stateful `google_meet` tool actions through the gateway-owned runtime so created or joined realtime sessions remain visible to status, speak, and leave after the agent turn ends. Fixes #72440. (#72441) Thanks @BsnizND.",
      "Google Meet/Voice Call: send Gemini Live a non-blocking consult continuation before long OpenClaw agent consults finish, then deliver the final result when idle so calls and meetings do not sit silent during tool-backed answers. (#72189) Thanks @VACInc.",
      "Google Meet: preserve Gemini Live function names when replying to realtime tool calls so Google SDK validation accepts the `FunctionResponse` payload. Fixes #72425. (#72426) Thanks @BsnizND.",
      "Discord/media: keep incidental Markdown image badges in final replies as text unless a channel opts into Markdown-image media extraction, while preserving Telegram Markdown-image media replies and explicit `MEDIA:` attachments. Fixes #72642. Thanks @solavrc and @Bartok9.",
      "Matrix/E2EE: stabilize recovery and broken-device QA flows while avoiding Matrix device-cleanup sync races that could leave shutdown-time crypto work running. Thanks @gumadeiras.",
      "Cron: apply `cron.maxConcurrentRuns` to a dedicated `cron-nested` isolated agent-turn lane as well as cron dispatch, so parallel cron jobs no longer serialize on inner LLM execution while non-cron nested flows keep their existing lane behavior. Fixes #72707. Thanks @kagura-agent.",
      "Cron: report isolated runs as successful when verified cron delivery already delivered the reply, while keeping unresolved Message/Canvas tool failures fatal. Fixes #72732 and #50170; follow-up to #54188. Thanks @zNatix, @pixeldyn, and @ChickenEggRoll.",
      "Cron: treat isolated run-level agent failures as job errors even when no reply payload is produced, synthesizing a safe error payload so model/provider failures increment error counters and trigger failure notifications instead of clearing as successful. Fixes #43604; carries forward #43631. Thanks @SPFAdvisors.",
      "Cron: preserve exact `NO_REPLY` tool results from isolated jobs with empty final assistant turns as quiet successes instead of surfacing incomplete-turn errors. Fixes #68452; carries forward #68453. Thanks @anyech.",
      "Cron: resolve failure alerts and failure-destination announcements against `session:<id>` targets before falling back to the creator session, so jobs created from group chats can notify the targeted direct session without cross-account routing errors. Refs #62777; carries forward #68535. Thanks @slideshow-dingo and @likewen-tech.",
      "Discord: preserve explicit `user:` and `channel:` delivery targets through plugin routing so cron announcements and failure alerts keep their intended recipient kind. Refs #62777; carries forward #62798. Thanks @neeravmakwana.",
      "Cron: add `failureAlert.includeSkipped` and `openclaw cron edit --failure-alert-include-skipped` so persistently skipped jobs can alert without counting skips as execution errors or affecting retry backoff. Fixes #60846. Thanks @slideshow-dingo.",
      "Cron: invalidate stale pending runtime slots after live or offline `jobs.json` schedule edits, while preserving due slots for formatting-only rewrites. Fixes #27996 and #71607; carries forward #71651. Thanks @xialonglee and @fagnersouza666.",
      "Cron: keep legacy flat `jobs.json` rows loadable while comparing split-state schedule identities, so old cron stores do not crash before in-memory hydration can normalize them.",
      "Cron: start isolated agent-turn execution timeouts after the runner enters its effective execution lane, so queued cron/manual runs no longer spend their whole timeout budget before useful work begins. Fixes #41783. Thanks @ayanesakura and @Hurray0.",
      "Cron/Telegram: preserve direct-chat thread IDs and optional account IDs when inferring reminder delivery from Telegram direct-thread session keys. Fixes #44270; carries forward #44325, #44351, #44412, and #72657. Thanks @RunMintOn, @arkyu2077, @0xsline, and @vincentkoc.",
      "Cron: omit synthetic `delivery.resolved` errors from `--no-deliver` run records while preserving explicit no-deliver target traces for agent-initiated messages. Fixes #72210; carries forward #72219. Thanks @hatemclawbot-collab and @xydigit-sj.",
      "Cron: classify isolated runs as errors from structured embedded-run execution-denial metadata, with final-output marker fallback for `SYSTEM_RUN_DENIED`, `INVALID_REQUEST`, and approval-binding refusals, so blocked commands no longer appear green in cron history. Fixes #67172; carries forward #67186. Thanks @oc-gh-dr, @hclsys, and @1yihui.",
      "Subagents: keep the delegated task only in the subagent system prompt and send a short initial kickoff message, avoiding duplicate task tokens while preserving multiline task formatting. Fixes #72019; carries forward #72053. Thanks @Wizongod and @ly85206559.",
      "Onboarding/GitHub Copilot: add manifest-owned `--github-copilot-token` support for non-interactive setup, including env fallback, tokenRef storage in ref mode, saved-profile reuse, and current Copilot default-model wiring. Refs #50002 and supersedes #50003. Thanks @scottgl9.",
      "Gateway/install: add a validated `--wrapper`/`OPENCLAW_WRAPPER` service install path that persists executable LaunchAgent/systemd wrappers across forced reinstalls, updates, and doctor repairs instead of falling back to raw node/bun `ProgramArguments`. Fixes #69400. (#72445) Thanks @willtmc.",
      "Plugins: fail plugin registration when loader-owned acceptance gates reject missing hook names or memory-only capability registration from non-memory plugins, surfacing the issue through plugin status and doctor instead of silently dropping the registration. Fixes #72459. Thanks @amknight.",
      "macOS Gateway: write launchd services with a state-dir `WorkingDirectory`, use a durable state-dir temp path instead of freezing macOS session `TMPDIR`, create that temp directory before bootstrap, and label abort-shaped launchd exits as `SIGABRT/abort` in status output. Fixes #53679 and #70223; refs #71848. Thanks @dlturock, @stammi922, and @palladius.",
      "Control UI/update: make `Update now` require a real gateway process replacement, report skipped/error update outcomes with stable reasons, and verify the running gateway version after restart so global installs cannot silently keep old code in memory. Fixes #62492; addresses #64892 and #63562. Thanks @IAMSamuelRodda.",
      "Exec approvals: accept runtime-owned `source: \"allow-always\"` and `commandText` allowlist metadata in gateway and node approval-set payloads so Control UI round-trips no longer fail with `unexpected property 'source'`. Fixes #60000; carries forward #60064. Thanks @sd1471123, @sharkqwy, and @luoyanglang.",
      "Exec/node: skip approval-plan preparation for full-trust `host=node` runs so interpreter and script commands no longer fail with `SYSTEM_RUN_DENIED: approval cannot safely bind` when effective policy is `security=full` and `ask=off`. Fixes #48457 and duplicate #69251. Thanks @ajtran303, @jaserNo1, @Blakeshannon, @lesliefag, and @AvIsBeastMC.",
      "Exec/node: synthesize a local approval plan when a paired node advertises `system.run` without `system.run.prepare`, unblocking approval-required `host=node` exec on current macOS companion nodes while preserving remote prepare for node hosts that support it. Fixes #37591 and duplicate #66839; carries forward #69725. Thanks @soloclz.",
      "Memory/QMD: prefer QMD's `--mask` collection pattern flag so root memory indexing stays scoped to `MEMORY.md` instead of widening to every markdown file in the workspace. Fixes #65480; supersedes #65481 and #66259. Thanks @ccage-simp, @Bortlesboat, @seank-com, and @crazyscience.",
      "Memory/doctor: treat the specific `gateway timeout after ...` gateway memory probe result as inconclusive instead of reporting embeddings not ready, while preserving warnings for explicit failures. Fixes #44426; carries forward #46576 with the Greptile review feedback applied. Thanks Cengiz (@ghost).",
      "Gateway/memory: defer QMD startup for implicit non-default agents and scope memory runtime loading to the selected memory slot so Gateway boot and first memory recall avoid broad plugin runtime fanout. Thanks @vincentkoc.",
      "Gateway/startup: keep core request handlers, setup wizard, and channel runtime helpers off the boot path until the first matching request, wizard run, or channel start, reducing no-plugin Gateway ready RSS and avoidable startup imports. Thanks @vincentkoc.",
      "Gateway/startup: keep CLI outbound channel send dependencies as lazy request-time senders so Gateway boot no longer imports channel plugin registration just to construct default deps. Thanks @vincentkoc.",
      "Gateway/startup: split lightweight HTTP auth helpers away from model-override helpers so Gateway bind no longer imports model catalog selection while wiring base HTTP routes. Thanks @vincentkoc.",
      "Gateway/startup: lazy-load plugin HTTP route dispatch when active plugin routes exist so no-plugin Gateway boot skips plugin route runtime scope setup. Thanks @vincentkoc.",
      "Gateway/startup: move chat run/subscriber registries onto a lightweight state module and defer chat/session event projection until the first event so Gateway boot skips session IO imports. Thanks @vincentkoc.",
      "Gateway/startup: keep node session runtime on a lightweight JSON parser instead of importing gateway method validation helpers during boot. Thanks @vincentkoc.",
      "Gateway/startup: read embedded-run activity from a lightweight shared state module so restart deferral no longer imports the embedded runner during Gateway boot. Thanks @vincentkoc.",
      "Gateway/startup: defer MCP loopback server imports until Gateway shutdown so normal boot no longer loads the loopback HTTP/tool schema stack just to register close handlers. Thanks @vincentkoc.",
      "Gateway/startup: resolve channel runtime helpers asynchronously only when an enabled/configured channel starts, so no-channel Gateway boot skips auto-reply, media, pairing, and outbound channel helper imports. Thanks @vincentkoc.",
      "Gateway/startup: lazy-load HTTP auth, canvas auth, and plugin route scope helpers from their request paths so Gateway bind no longer pays those utility graphs during boot. Thanks @vincentkoc.",
      "Gateway/startup: defer isolated cron runner imports until `/hooks/agent` dispatch so Gateway boot skips the agent-turn runtime on installs that only need normal HTTP bind. Thanks @vincentkoc.",
      "Gateway/startup: split hook request parsing into a request-path module and load the Gateway hook dispatcher only when a request matches the hooks base path, keeping hook mapping and throttle helpers off plain HTTP bind. Thanks @vincentkoc.",
      "CLI/Gateway: use a parse-only config snapshot for plain `gateway status` reads and reuse same-path service config context so status no longer spends tens of seconds in full config validation before printing. Thanks @vincentkoc.",
      "Lobster/Gateway: memoize repeated Ajv schema compilation before loading the embedded Lobster runtime so scheduled workflows and `llm.invoke` loops stop growing gateway heap on content-identical schemas. Fixes #71148. Thanks @cmi525, @vsolaz, and @vincentkoc.",
      "Codex harness: normalize cached input tokens before session/context accounting so prompt cache reads are not double-counted in `/status`, `session_status`, or persisted `sessionEntry.totalTokens`. Fixes #69298. Thanks @richardmqq.",
      "Hooks/session-memory: use the host local timezone for memory filenames, fallback timestamp slugs, and markdown headers instead of UTC dates. Fixes #46703. (#46721) Thanks @Astro-Han.",
      "Gateway health: preserve live runtime-backed channel/account state in `gateway.health` snapshots and cached refreshes while keeping raw probe payloads on sensitive/admin paths only. (#39921, #42586, #46527, #52770, #42543) Thanks @FAL1989, @rstar327, @0xble, and @ajayr.",
      "Feishu: extract quoted/replied interactive-card text across schema 1.0, schema 2.0, i18n, template-variable, and post-format fallback shapes without carrying broad generated/config churn from related parser experiments. (#38776, #60383, #42218, #45936) Thanks @lishuaigit, @lskun, @just2gooo, and @Br1an67.",
      "Telegram/agents: hide raw failed write/edit warning messages in Telegram when the assistant already explicitly acknowledges the failed action, while keeping warnings when the reply claims success or omits the failure; #39406 remains the broader configurable delivery-policy follow-up. Fixes #51065; covers #39631. Thanks @Bartok9 and @Bortlesboat.",
      "TUI: clear stale streaming status when an orphaned final event or watchdog reset leaves no tracked active run, flushing deferred local history refreshes without surfacing inactive-run failures. Fixes #64825; carries forward #52745. Thanks @lyksdu.",
      "Exec approvals: accept a symlinked `OPENCLAW_HOME` as the trusted approvals root while still rejecting symlinked `.openclaw` path components below it. (#64663) Thanks @FunJim.",
      "Logging: add top-level `hostname`, flattened `message`, and available `agent_id`, `session_id`, and `channel` fields to file-log JSONL records for multi-agent filtering without removing existing structured log arguments. Fixes #51075. Thanks @stevengonsalvez.",
      "ACP: route server logs to stderr before Gateway config/bootstrap work so ACP stdout remains JSON-RPC only for IDE integrations. Fixes #49060. Thanks @Hollychou924.",
      "Logging: propagate internal request trace scopes through Gateway HTTP requests and WebSocket frames so file logs, diagnostic events, agent run traces, model-call traces, OTEL spans, and trusted provider `traceparent` headers share a correlatable `traceId` without logging raw request or model content. Fixes #40353. Thanks @liangruochong44-ui.",
      "Diagnostics/OTEL: capture privacy-safe model-call request payload bytes, streamed response bytes, first-response latency, and total duration in diagnostic events, plugin hooks, stability snapshots, and OTEL model-call spans/metrics without logging raw model content. Fixes #33832. Thanks @wwh830.",
      "Logging: write validated diagnostic trace context as top-level `traceId`, `spanId`, `parentSpanId`, and `traceFlags` fields in file-log JSONL records so traced requests and model calls are easier to correlate in log processors. Refs #40353. Thanks @liangruochong44-ui.",
      "Logging/sessions: apply configured redaction patterns to persisted session transcript text and accept escaped character classes in safe custom redaction regexes, so transcript JSONL no longer keeps matching sensitive text in the clear. Fixes #42982. Thanks @panpan0000.",
      "Agents/sessions: let `sessions_spawn runtime=\"subagent\"` ignore ACP-only `streamTo` and `resumeSessionId` fields while keeping ACP passthrough and documenting `streamTo` as ACP-only. Fixes #43556 and #63120; covers #56326, #61724, #64714, and #67248; carries forward #68397, #65282, #58686, #56342, and #40102. Thanks @skernelx, @damselem, @Br1an67, @Mintalix, @IsaacAPerez, @vvitovec, @Sanjays2402, @shenkq97, and @1034378361.",
      "Providers/Ollama: honor `/api/show` capabilities when registering local models so non-tool Ollama models no longer receive the agent tool surface, and keep native Ollama thinking opt-in instead of enabling it by default. Fixes #64710 and duplicate #65343. Thanks @yuan-b, @netherby, @xilopaint, and @Diyforfun2026.",
      "Image tool/media: honor `tools.media.image.timeoutSeconds` and matching per-model image timeouts in explicit image analysis, including the MiniMax VLM fallback path, so slow local vision models are not capped by hardcoded 30s/60s aborts. Fixes #67889; supersedes #67929. Thanks @AllenT22 and @alchip.",
      "Providers/Ollama: read larger custom Modelfile `PARAMETER num_ctx` values from `/api/show` so auto-discovered Ollama models with expanded context no longer stay pinned to the base model context. Fixes #68344. Thanks @neeravmakwana.",
      "Providers/Ollama: honor configured model `params.num_ctx` in native and OpenAI-compatible Ollama requests so local models can cap runtime context without rebuilding Modelfiles. Fixes #44550 and #52206; supersedes #69464. Thanks @taitruong, @armi0024, and @LokiCode404.",
      "Providers/Ollama: stop forcing native Ollama requests to use the full configured `contextWindow` as `options.num_ctx` unless `params.num_ctx` is explicit, so local models can keep Ollama's VRAM/env default instead of looking hung on first turns. Fixes #49684 and #68662. Thanks @zhouZcong and @dshenster-byte.",
      "Providers/Ollama: forward whitelisted native Ollama model params such as `temperature`, `top_p`, and top-level `think` so users can disable API-level thinking or tune local models from config without proxy shims. Fixes #48010. Thanks @tangzhi, @pandego, @maweibin, @Adam-Researchh, and @EmpireCreator.",
      "Providers/Ollama: expose native Ollama thinking effort levels so `/think max` is accepted for reasoning-capable Ollama models and maps to Ollama's highest supported `think` effort. Fixes #71584. Thanks @g0st1n.",
      "Providers/Ollama: strip the active custom Ollama provider prefix before native chat and embedding requests, so custom provider ids like `ollama-spark/qwen3:32b` reach Ollama as the real model name. Fixes #72353. Thanks @maximus-dss and @hclsys.",
      "Providers/Ollama: parse stringified native tool-call arguments before dispatch, preserving unsafe integer values so Ollama tool use receives structured parameters. Fixes #69735; supersedes #69910. Thanks @rongshuzhao and @yfge.",
      "Providers/Ollama: skip ambient localhost discovery unless Ollama auth or meaningful config opts in, preventing unexpected probes to `127.0.0.1:11434` for users who are not using Ollama. Fixes #56939; supersedes #57116. Thanks @IanxDev and @tsukhani.",
      "Providers/Ollama: skip implicit localhost discovery when a custom remote `api: \"ollama\"` provider is configured, while still treating `127/8` loopback hosts as local. Carries forward #43224. Thanks @issacthekaylon.",
      "Providers/models: honor provider-level `contextWindow`, `contextTokens`, and `maxTokens` as defaults when resolving discovered models, so local Ollama and other self-hosted providers can cap all models without repeating per-model entries. Fixes #44786; carries forward #44955. Thanks @voltwake and @maweibin.",
      "Providers/Ollama: move memory embeddings to Ollama's current `/api/embed` endpoint with batched `input` requests while preserving vector normalization and custom provider auth/header overrides. Fixes #39983. Thanks @sskkcc and @LiudengZhang.",
      "Providers/Ollama: route local web search through Ollama's signed `/api/experimental/web_search` daemon proxy, use hosted `/api/web_search` directly for `ollama.com`, and keep `OLLAMA_API_KEY` scoped to cloud fallback auth. Fixes #69132. Thanks @yoon1012 and @hyspacex.",
      "Providers/Ollama: accept OpenAI SDK-style `baseURL` as an alias for `baseUrl` across discovery, streaming, setup pulls, embeddings, and web search so remote Ollama hosts are not silently ignored. Fixes #62533; supersedes #62549. Thanks @Julien-BKK and @Linux2010.",
      "Providers/Ollama: scope synthetic local auth and embedding bearer headers to declared Ollama host boundaries so cloud keys are not sent to local/self-hosted embedding endpoints and remote/cloud Ollama endpoints no longer receive the `ollama-local` marker as if it were a real token. Supersedes #69261 and #69857; refs #43945. Thanks @hyspacex, @maxramsay, and @Meli73.",
      "Providers/Ollama: resolve custom-named local Ollama providers such as `ollama-remote` through the Ollama synthetic-auth hook so subagents no longer miss `ollama-local` auth and silently fall back to cloud models. Fixes #43945. Thanks @Meli73 and @maxramsay.",
      "Providers/Ollama: add provider-scoped model request timeouts, thread them through guarded fetch connect/header/body/abort handling, and document `params.keep_alive` for cold local models so first-turn Ollama loads no longer require global agent timeout changes. Fixes #64541 and #68796; supersedes #65143 and #66511. Thanks @LittleJakub, @Juankcba, @uninhibite-scholar, and @yfge.",
      "Providers/Ollama: preserve explicit configured model input modalities when merging discovered provider metadata so custom vision models keep image support instead of silently dropping attachments. Fixes #39690; carries forward #39785. Thanks @Skrblik and @Mriris.",
      "Providers/Ollama: estimate native Ollama transcript usage when `/api/chat` omits prompt/eval counters while preserving exact zero counters, keeping local model runs visible in usage surfaces. Carries forward #39112. Thanks @TylonHH.",
      "Agents/Ollama: retry native Ollama turns that finish without user-visible text, including unsigned thinking-only responses, so constrained reasoning turns can continue instead of surfacing an empty reply. Carries forward #66552 and #61223. Thanks @yfge and @L3G.",
      "Docs/Ollama: expand setup recipes for local, LAN, cloud, multi-host, web search, embeddings, thinking control, and large-context troubleshooting.",
      "Providers/PDF/Ollama: add bounded network timeouts for Ollama model pulls and native Anthropic/Gemini PDF analysis requests so unresponsive provider endpoints no longer hang sessions indefinitely. Fixes #54142; supersedes #54144 and #54145. Thanks @jinduwang1001-max and @arkyu2077.",
      "LLM Task/Ollama: accept model overrides that already include the selected provider prefix, avoiding doubled ids such as `ollama/ollama/llama3.2:latest`, and live-verify local Ollama JSON tasks return parsed output. Fixes #50052. Thanks @ralphy-maplebots and @Hollychou924.",
      "Memory/doctor: treat Ollama memory embeddings as key-optional so `openclaw doctor` no longer warns about a missing API key when the gateway reports embeddings are ready. Fixes #46584. Thanks @fengly78.",
      "Agents/Ollama: apply provider-owned replay turn normalization to native Ollama chat so Cloud models no longer reject non-alternating replay history in agent/Gateway runs. Fixes #71697. Thanks @ismael-81.",
      "Control UI/Ollama: show the resolved configured thinking default in chat and session thinking dropdowns so inherited `adaptive`/per-model thinking config no longer appears as `Default (off)` or a generic inherit value. Fixes #72407. Thanks @NotecAG.",
      "Agents/Ollama: validate explicit `--thinking max` against catalog-discovered Ollama reasoning metadata so local agent runs accept the same native thinking levels shown in the model catalog. Fixes #71584. Thanks @g0st1n.",
      "CLI/models: include explicitly configured provider models in `openclaw models list --provider <id>` without requiring the full catalog path, so configured Ollama models are visible. Fixes #65207. Thanks @drzeast-png.",
      "Docker/QA: add observability coverage to the normal Docker aggregate so QA-lab OTEL and Prometheus diagnostics run inside Docker. Thanks @vincentkoc.",
      "Auto-reply: poison inbound message dedupe after replay-unsafe provider/runtime failures so retries stay safe before visible progress but cannot duplicate messages after block output, tool side effects, or session progress. Fixes #69303; keeps #58549 and #64606 as duplicate validation. Thanks @martingarramon, @NikolaFC, and @zeroth-blip.",
      "Agents/model fallback: keep auto-persisted fallback model overrides selected across turns until `/new` or reset clears them, avoiding repeated probes of a known-bad primary while `/status` shows the selected and active models. Thanks @kibedu.",
      "Agents/model fallback: jump directly to a known later live-session model redirect instead of walking unrelated fallback candidates, while preserving the already-landed live-session/fallback loop guard. Fixes #57471; related loop family already closed via #58496. Thanks @yuxiaoyang2007-prog.",
      "Gateway/Bonjour: keep @homebridge/ciao cancellation handlers registered across advertiser restarts so late probing cancellations cannot crash Linux and other mDNS-churned gateways.",
      "Plugins/startup: load the default `memory-core` slot during Gateway startup when permitted so active-memory recall can call `memory_search` and `memory_get` without requiring an explicit `plugins.slots.memory` entry, while preserving `plugins.slots.memory: \"none\"`.",
      "Plugins/CLI: prefer native require for compiled bundled plugin JavaScript before jiti so read-only config, status, device, and node commands avoid unnecessary transform overhead on slow hosts. Fixes #62842. Thanks @Effet.",
      "Plugins/compat: inventory doctor-side deprecation migrations separately from runtime plugin compatibility so release sweeps preserve needed repairs while enforcing dated removal windows. Thanks @vincentkoc.",
      "Plugins/compat: add missing dated compatibility records for legacy extension-api, memory registration, provider hook/type aliases, runtime aliases, channel SDK helpers, and approval/test utility shims. Thanks @vincentkoc.",
      "Plugins/CLI: refresh the persisted registry after managed plugin files are removed so ClawHub uninstall cannot leave stale `plugins list` entries.",
      "Plugins/CLI: make plugin install and uninstall config writes conflict-aware, clear stale denylist entries on explicit reinstall/removal, and delete managed plugin files only after config/index commit succeeds.",
      "Plugins: fail `plugins update` when tracked plugin or hook updates error, keep bundled runtime-dependency repair behind restrictive allowlists, and reject package installs with unloadable extension entries.",
      "WebChat/Control UI: support non-video file attachments in chat uploads while preserving the existing image attachment path and MIME-sniff fallback for generic image uploads. (#70947) Thanks @IAMSamuelRodda.",
      "Skills/memory: restore Chokidar v5 hot reloads by watching concrete skill and memory roots with filters, including SKILL.md removals and deleted skill folders without broad workspace recursion. Fixes #27404, #33585, and #41606. Thanks @shelvenzhou, @08820048, and @rocke2020.",
      "Gateway/chat: keep duplicate attachment-backed `chat.send` retries with the same idempotency key on the documented in-flight path so aborts still target the real active run. Fixes #70139. Thanks @Feelw00.",
      "Gateway/session rows: report the same config-resolved thinking default that runtime sessions use, including global and per-agent defaults, so Control UI and TUI default labels stay aligned. (#71779, #70981, #71033, #70302) Thanks @chen-zhang-cs-code, @SymbolStar, and @cholaolu-boop.",
      "Plugins: share package entrypoint resolution between install and discovery, reject mismatched `runtimeExtensions`, and cache bundled runtime-dependency manifest reads during scans.",
      "WhatsApp/Web: keep quiet but healthy linked-device sessions connected by basing the watchdog on WhatsApp Web transport activity, while retaining a longer app-silence cap so frame activity cannot mask a stuck session forever. Fixes #70678; carries forward the focused #71466 approach and keeps #63939 as related configurable-timeout follow-up. Thanks @vincentkoc and @oromeis.",
      "Discord/gateway: count failed health-monitor restart attempts toward cooldown and hourly caps, and evict stale account lifecycle state during channel reloads so repeated Discord gateway recovery cannot loop on old status. Fixes #38596. (#40413) Thanks @jellyAI-dev and @vashquez.",
      "Cron/context engine: run isolated cron jobs under run-scoped context-engine session keys so prior runs of the same job are not inherited unless the job is explicitly session-bound. (#72292) Thanks @jalehman.",
      "Control UI: localize command palette labels, categories, skill shortcuts, footer hints, and connect-command copy labels while preserving localized command palette search matching. (#61130, #61119) Thanks @rubensfox20.",
      "Plugins/memory-lancedb: request float embedding responses from OpenAI-compatible servers so local providers that default SDK requests to base64 no longer return dimension-mismatched LanceDB vectors while preserving configured dimensions. Fixes #45982. (#59048, #46069, #45986) Thanks @deep-introspection, @xiaokhkh, @caicongyang, and @thiswind.",
      "Plugins/memory-lancedb: advance auto-capture cursors per session only after messages are processed or intentionally skipped, retry failed messages, survive compacted histories, and clear cursor state on session end. Fixes #71349; carries forward #42083. Thanks @as775116191.",
      "Plugins/memory-core: respect configured memory-search embedding concurrency during non-batch indexing so local Ollama embedding backends can serialize indexing instead of flooding the server. Fixes #66822. (#66931) Thanks @oliviareid-svg and @LyraInTheFlesh.",
      "Docker/update smoke: keep the package-derived update-channel fixture on package-shipped files and make its UI build stub create the asset the updater verifies. Thanks @vincentkoc.",
      "Gateway/models: repair legacy `models.providers.*.api = \"openai\"` config values to `openai-completions`, and skip providers with future stale API enum values during startup instead of bricking the gateway. Fixes #72477. (#72542) Thanks @JooyoungChoi14 and @obviyus.",
      "Gateway/skills: redact `apiKey` and secret-named `env` values from the `skills.update` RPC response to prevent leaking credentials into WebSocket traffic, client logs, or session transcripts. Config is still written to disk in full; only the response payload is redacted. (#69998) Thanks @Ziy1-Tan.",
      "Plugins/CLI: let flag-driven `openclaw channels add` install the selected channel plugin from its default source without opening an interactive prompt, fixing published npm Telegram setup in stdin-closed automation.",
      "Onboarding/setup: keep first-run config reads, plugin compatibility notices, and post-model sanity checks on cold metadata paths unless the user chooses to browse all models, avoiding full plugin/runtime catalog work between prompts. Thanks @shakkernerd.",
      "Onboarding/auth: run manifest-owned provider auth choices through scoped setup providers so selecting OpenAI Codex browser/device auth no longer loads every provider runtime before OAuth starts. Thanks @shakkernerd.",
      "Onboarding/auth: keep the post-auth default-model policy lookup on manifest/setup metadata so the next prompt appears without loading broad provider runtime. Thanks @shakkernerd.",
      "Onboarding/models: keep skip-auth and provider-scoped model picker prompts off the full global model catalog path, and cache provider catalog hook resolution so setup no longer stalls after auth on large plugin registries. Thanks @shakkernerd.",
      "Gateway/Bonjour: suppress known @homebridge/ciao cancellation and network assertion failures through scoped process handlers so malformed mDNS packets or restricted VPS networking disable/restart Bonjour instead of crashing the gateway. Fixes #67578. Thanks @zenassist26-create.",
      "Discord: keep late clicks on already-resolved exec approval buttons quiet when elevated mode auto-resolved the request, while still surfacing real approval submission failures. Fixes #66906. Thanks @rlerikse.",
      "Telegram: send a fresh final message for long-lived preview-streamed replies so the visible Telegram timestamp reflects completion time instead of the preview creation time. Thanks @rubencu."
    ]
  },
  {
    "version": "2026.4.25",
    "date": "2026.4.25",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425",
    "features": [
      {
        "title": "Voice replies get a full TTS upgrade",
        "description": "`/tts latest`, chat-scoped auto-TTS controls, personas, per-agent/per-account overrides, and new Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3 provider coverage. Thanks @leonchui, @zoujiejun, @solar2ain, @cshape, @xuruiray, @itsuzef, and @barronlroth.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugin startup and install paths move to the cold persisted registry, cutti...",
        "description": "Plugin startup and install paths move to the cold persisted registry, cutting broad manifest scans while making plugin update, repair, provider discovery, and install metadata more deterministic. Thanks @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "OpenTelemetry coverage expands across model calls, token usage, tool loops,...",
        "description": "OpenTelemetry coverage expands across model calls, token usage, tool loops, harness runs, exec processes, outbound delivery, context assembly, and memory pressure with bounded low-cardinality attributes. Thanks @vincentkoc, @jlapenna, @Lidang-Jiang, and @oc-factus.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Browser automation gets safer tab URLs, iframe-aware role snapshots, CDP re...",
        "description": "Browser automation gets safer tab URLs, iframe-aware role snapshots, CDP readiness tuning, headless one-shot launch, and deeper browser doctor probes for slow hosts. Thanks @beat843796 and @BenediktSchackenberg.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Control UI and setup flows add PWA/Web Push support, Crestodian first-run r...",
        "description": "Control UI and setup flows add PWA/Web Push support, Crestodian first-run repair, TUI setup, context mode selection, and a shorter startup greeting. Thanks @eduardocruz, @SebTardif, and @kevinlin-openai.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Install/update hardening covers Windows, macOS, Linux, Docker, bundled plug...",
        "description": "Install/update hardening covers Windows, macOS, Linux, Docker, bundled plugin runtime deps, Node service restarts, LaunchAgent token rotation, and mixed-version gateway verification. Thanks @Kobevictor, @igormf, @abhinas90, @jsompis, @Solvely-Colin, and @gucasbrg.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "TTS/WhatsApp",
        "description": "add `/tts latest` read-aloud support with duplicate suppression and `/tts chat on|off|default` session-scoped auto-TTS overrides, completing the on-demand voice-note UX for current-chat replies. Fixes #66032.",
        "href": "https://github.com/openclaw/openclaw/issues/66032"
      },
      {
        "title": "TTS/channels",
        "description": "resolve channel and account TTS overrides generically, enabling Feishu and QQBot accounts to deep-merge `channels.<channel>.accounts.<id>.tts` over global and per-agent TTS config. Thanks @sahilsatralkar.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "TTS/agents",
        "description": "allow `agents.list[].tts` to override global `messages.tts` for per-agent voices, and make `/tts audio`, `/tts status`, and the `tts` agent tool honor the active voice/provider override while keeping shared provider credentials and preferences in the existing TTS config surface.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/Azure Speech",
        "description": "add Azure Speech as a bundled TTS provider with Speech-resource auth, voice listing, SSML escaping, native Ogg/Opus voice-note output, and telephony output. (#51776) Thanks @leonchui.",
        "href": "https://github.com/openclaw/openclaw/pull/51776"
      },
      {
        "title": "Google Meet",
        "description": "add calendar-backed attendance export workflows, export manifests, dry-run previews, and tool parity for meeting records.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Control UI",
        "description": "add PWA install support and Web Push notifications for Gateway chat. (#44590) Thanks @eduardocruz.",
        "href": "https://github.com/openclaw/openclaw/pull/44590"
      },
      {
        "title": "Browser automation",
        "description": "add safe tab URLs in agent responses plus a CDP-native role snapshot fallback with iframe-aware refs, cursor-clickable detection, target attach preparation, and `openclaw browser doctor --deep` live snapshot probing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/image generation",
        "description": "expose generic `--background` on `openclaw infer image generate` and `openclaw infer image edit`, keep `--openai-background` as an OpenAI alias, and let fal image generation honor `--output-format png|jpeg`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Browser/config",
        "description": "allow local managed Chrome launch discovery and post-launch CDP readiness timeouts to be raised for slower hosts such as Raspberry Pi. Fixes #66803. Thanks @beat843796.",
        "href": "https://github.com/openclaw/openclaw/issues/66803"
      },
      {
        "title": "Discord",
        "description": "allow `channels.discord.voice.model` to override the LLM used for voice channel responses while keeping STT and TTS on their existing media settings. (#64368) Thanks @mrdavey.",
        "href": "https://github.com/openclaw/openclaw/pull/64368"
      },
      {
        "title": "Browser/CLI",
        "description": "add `openclaw browser start --headless` as a one-shot local managed browser launch override without rewriting persisted browser config. Thanks @BenediktSchackenberg.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/Crestodian/TUI",
        "description": "add the first-run setup helper, local planner fallback, full-TUI interactive Crestodian, startup progress indicators, context mode selector, and a shorter startup greeting. (#71720, #71760) Thanks @SebTardif and @kevinlin-openai.",
        "href": "https://github.com/openclaw/openclaw/issues/71720"
      },
      {
        "title": "Plugins",
        "description": "migrate the local plugin registry automatically during package install/update, keeping install metadata in the plugin index while indexing existing plugin manifests for the new cold registry path. Thanks @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/doctor",
        "description": "make `openclaw doctor --fix` refresh the plugin index and cold registry index when needed without treating plugin install records as authored config. Thanks @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/hooks",
        "description": "add before-agent-finalize hooks, cron `jobId` hook context, bounded native permission fingerprints, and Codex MCP hook relay support. (#71765, #71758, #71707) Thanks @vincentkoc and @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/issues/71765"
      },
      {
        "title": "Plugins/tokenjuice",
        "description": "bump the bundled tokenjuice runtime to 0.6.3. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "align model-call GenAI span attributes with OpenTelemetry stability opt-in semantics, keeping legacy `gen_ai.system` by default while emitting `gen_ai.provider.name` under `OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental`. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "support signal-specific OTLP endpoint overrides for traces, metrics, and logs via config or standard OTEL environment variables. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "emit bounded telemetry exporter health diagnostics for startup and log-export failures without exporting raw error text. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "export agent harness lifecycle telemetry as bounded `openclaw.harness.run` spans and `openclaw.harness.duration_ms` metrics so QA-lab, Codex, and future harnesses share one trace shape. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/trace",
        "description": "propagate W3C `traceparent` headers from trusted model-call trace context to provider transports while replacing caller-supplied traceparent values. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/Prometheus",
        "description": "add a bundled `diagnostics-prometheus` plugin with a protected gateway scrape route for low-cardinality diagnostics metrics. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/CLI",
        "description": "add `openclaw plugins registry` for explicit persisted-registry inspection and `--refresh` repair without making normal startup rescan plugin locations. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/CLI",
        "description": "make `openclaw plugins list` read the cold persisted registry snapshot by default, leaving module-aware diagnostics to `plugins doctor` and `plugins inspect`. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/startup",
        "description": "move gateway startup plugin planning onto the versioned cold registry index, with postinstall repair for older registry files that predate startup metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/startup",
        "description": "normalize startup and provider plugin enablement through registry aliases so boot paths do not need the legacy manifest alias scan. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/plugins",
        "description": "resolve provider ownership, provider discovery scopes, and catalog-hook provider ids from the cold plugin registry instead of rescanning manifests on those paths. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/registry",
        "description": "keep installed plugin index records focused on install/state/load paths and resolve plugin capabilities from manifests scoped to indexed plugins. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/registry",
        "description": "route cold manifest and capability lookups through the installed plugin index so setup, channels, config, secrets, doctor, and provider metadata paths avoid broad plugin-root scans before runtime execution. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/models",
        "description": "speed up `models list --all --provider <id>` for static manifest-backed providers by loading catalog rows through the installed plugin index instead of broad manifest scans or runtime suppression hooks. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/models",
        "description": "use OpenClaw Provider Index preview rows as the final cold fallback for installable providers, while keeping user config, installed manifests, and refreshed cache rows above provider-index metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/plugins",
        "description": "keep onboarding and auth-choice setup lists on cold manifest/install metadata and add Provider Index install metadata for not-yet-installed provider plugins. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/plugins",
        "description": "keep provider setup guidance and configure auth imports on cold manifest metadata, with a regression guard against static provider-runtime imports on setup/configure list paths. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/capabilities",
        "description": "keep capability command registration from importing the models auth runtime until `model auth login` actually runs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "CLI/configure",
        "description": "keep web-search configure prompts on cold plugin registry metadata until the user chooses managed search setup. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/chat commands",
        "description": "refresh the persisted plugin registry after `/plugins enable` and `/plugins disable`, matching the CLI mutation path. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/compat",
        "description": "mark `OPENCLAW_DISABLE_PERSISTED_PLUGIN_REGISTRY` as a deprecated break-glass switch and point operators at registry repair instead. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/compat",
        "description": "expand the central compatibility registry with dated owners, replacements, and maximum three-month removal targets for legacy SDK, manifest, setup, registry-migration, and agent-runtime surfaces. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/registry",
        "description": "ignore stale persisted registry reads when plugin policy no longer matches current config, and stamp generated registry files with a do-not-edit warning. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Config/plugins",
        "description": "keep plugin command-alias validation on cold manifest metadata instead of importing the runtime alias resolver. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Security/plugins",
        "description": "keep web-search credential presence checks on cold config, env, and manifest metadata instead of importing web-search provider runtime. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "surface provider request identifiers as bounded hashes on model-call diagnostics and span events, without exporting raw request IDs or metric labels. Thanks @Lidang-Jiang and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/diagnostics",
        "description": "add metadata-only `model_call_started` and `model_call_ended` hooks for provider/model call telemetry without exposing prompts, responses, headers, request bodies, or raw provider request IDs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "emit bounded context assembly diagnostics and export `openclaw.context.assembled` spans with prompt/history sizes but no prompt, history, response, or session-key content. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "export existing tool-loop diagnostics as `openclaw.tool.loop` counters and spans without loop messages, session identifiers, params, or tool output. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "export diagnostic memory samples and pressure as bounded memory histograms, counters, and pressure spans to help spot leak regressions without session or payload data. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add the GenAI `gen_ai.client.token.usage` histogram for input/output model usage while keeping session identifiers and aggregate cache counters out of the semantic metric. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add a bounded `openclaw.agent` label to OpenClaw token metrics so per-agent Grafana dashboards can group usage without exporting session identifiers. Thanks @oc-factus.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Plugins/install",
        "description": "consolidate managed plugin install metadata into the state-managed plugin index at `plugins/installs.json`, replacing the temporary `plugins/installed-index.json` path and removing `plugins.installs` as an authored config surface. Thanks @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add the GenAI `gen_ai.client.operation.duration` histogram for model-call latency in seconds with bounded provider/model/API and error attributes. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add GenAI usage token attributes to model-usage spans, including cache read/write input token counts without session identifiers or prompt/response content. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "include bounded GenAI operation, provider, and request-model attributes on model-usage spans so token usage remains self-describing without diagnostic identifiers. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "keep model-usage span GenAI provider attributes aligned with the existing semantic-convention opt-in policy, using legacy `gen_ai.system` unless latest experimental GenAI conventions are enabled. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "keep `gen_ai.request.model` present on GenAI token usage metrics with a bounded `unknown` fallback when model usage events do not include a model. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Docs/OTEL",
        "description": "document the GenAI token and model-call duration metrics, model-usage span attributes, and `OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental` provider-attribute behavior. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Docs",
        "description": "refresh the MCP, model provider, doctor, troubleshooting, BlueBubbles, media generation, TTS, subagents, skills, cron/tasks, exec approvals, and voice-call guides with structured Steps, Tabs, and Accordion content.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/trace",
        "description": "add an internal traceparent propagation helper that only formats trusted dispatcher metadata, keeping plugin-emitted diagnostic traces out of outbound propagation by default. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add bounded outbound message delivery lifecycle diagnostics and export them as low-cardinality delivery spans/metrics without message body, recipient, room, or media-path data. (#71471) Thanks @vincentkoc and @jlapenna.",
        "href": "https://github.com/openclaw/openclaw/pull/71471"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "emit bounded exec-process diagnostics and export them as `openclaw.exec` spans without exposing command text, working directories, or container identifiers. (#71451) Thanks @vincentkoc and @jlapenna.",
        "href": "https://github.com/openclaw/openclaw/pull/71451"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "support `OPENCLAW_OTEL_PRELOADED=1` so the plugin can reuse an already-registered OpenTelemetry SDK while keeping OpenClaw diagnostic listeners wired. (#71450) Thanks @vincentkoc and @jlapenna.",
        "href": "https://github.com/openclaw/openclaw/pull/71450"
      },
      {
        "title": "Providers/Xiaomi",
        "description": "add MiMo TTS as a bundled speech provider with MP3/WAV output and voice-note Opus transcoding. Fixes #52376. (#55614) Thanks @zoujiejun.",
        "href": "https://github.com/openclaw/openclaw/pull/55614"
      },
      {
        "title": "Providers/ElevenLabs",
        "description": "include `eleven_v3` in the bundled TTS model catalog so model selection surfaces can offer ElevenLabs v3. (#68321) Thanks @itsuzef.",
        "href": "https://github.com/openclaw/openclaw/pull/68321"
      },
      {
        "title": "Providers/Local CLI TTS",
        "description": "add a bundled local command speech provider with file/stdout input, voice-note Opus conversion, and telephony PCM output. (#56239) Thanks @solar2ain.",
        "href": "https://github.com/openclaw/openclaw/pull/56239"
      },
      {
        "title": "Providers/Inworld",
        "description": "add Inworld as a bundled speech provider with streaming TTS synthesis, voice listing, voice-note output, and PCM telephony output. (#55972) Thanks @cshape.",
        "href": "https://github.com/openclaw/openclaw/pull/55972"
      },
      {
        "title": "Providers/Volcengine",
        "description": "add Volcengine/BytePlus Seed Speech as a bundled TTS provider with API-key auth, native Ogg/Opus voice-note output, and MP3 audio-file output. (#55641) Thanks @xuruiray.",
        "href": "https://github.com/openclaw/openclaw/pull/55641"
      },
      {
        "title": "Android/Talk Mode",
        "description": "expose Talk Mode in the Voice tab with runtime-owned voice capture modes and microphone foreground-service escalation. Thanks @alex-latitude.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/LiteLLM",
        "description": "register `litellm` as an image-generation provider so `image_generate model=litellm/...` calls and `agents.defaults.imageGenerationModel.fallbacks` entries resolve through the LiteLLM proxy. Thanks @zqchris.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Providers/fal",
        "description": "add Seedance 2.0 reference-to-video models with multi-image, video, and audio reference input mapping plus model-specific capability limits for `video_generate`. Thanks @shivanker.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Codex harness",
        "description": "require Codex app-server `0.125.0` or newer and cover native MCP `PreToolUse`, `PostToolUse`, and `PermissionRequest` payloads through the OpenClaw hook relay.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "Agents/Codex",
        "description": "teach prompts and `agents_list` to surface native Codex app-server availability so agents prefer `/codex ...` over Codex ACP unless ACP/acpx is explicit. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "ACPX/Droid",
        "description": "add Factory Droid to the live ACP bind Docker matrix, including `.factory` settings staging, `FACTORY_API_KEY` forwarding, and the single-agent `test:docker:live-acp-bind:droid` recipe.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026425"
      },
      {
        "title": "TTS/personas",
        "description": "add provider-aware TTS personas with deterministic provider binding merges, `/tts persona` controls, gateway/CLI persona state, Google Gemini `audio-profile-v1` prompt wrapping, and OpenAI instruction mapping. (#70748) Thanks @barronlroth.",
        "href": "https://github.com/openclaw/openclaw/pull/70748"
      },
      {
        "title": "Voice Wake",
        "description": "add trigger-based routing so macOS voice wake phrases can select a configured agent or session target, with Gateway routing APIs and node update events. (#30354) Thanks @longbiaochen.",
        "href": "https://github.com/openclaw/openclaw/pull/30354"
      }
    ],
    "fixes": [
      "Agents/subagents: deliver completed yielded-subagent results back to no-thread requester routes via direct fallback when the dormant parent announce turn produces no visible reply, and add QA-lab coverage for the regression. Thanks @vincentkoc.",
      "Gateway/Tailscale: let Tailscale-authenticated Control UI operator sessions with browser device identity skip the device-pairing round trip while still rejecting device-less and node-role connections. Refs #71986. Thanks @jokedul.",
      "Doctor: honor `OPENCLAW_SERVICE_REPAIR_POLICY=external` by reporting gateway service health while skipping service install/start/restart/bootstrap, supervisor rewrites, and legacy service cleanup for externally managed environments. Thanks @shakkernerd.",
      "CLI/update: run package post-update doctor with `--fix` so package updates repair config migrations before restart. Thanks @shakkernerd.",
      "CLI/update: retry failed npm global updates with `--omit=optional` and ignore the superseded first failure when the fallback succeeds. Thanks @shakkernerd.",
      "Plugins/uninstall: migrate and reset `plugins.slots.contextEngine` alongside memory slots when plugin ids change or selected plugins are removed. Thanks @shakkernerd.",
      "Agents/Discord: keep raw `Agent failed before reply` runner failures out of Discord group/channel chats and show detailed runner errors in direct chats only when `/verbose` is enabled.",
      "UI/Windows: quote resolved pnpm `.cmd` launcher paths before spawning UI install/build/test commands so Node installs under `C:\\Program Files` no longer fail as `C:\\Program`. Fixes #45275. Thanks @Kobevictor, @stoppieboy, and @iubns.",
      "Codex/agent: translate `--thinking minimal` to `low` for modern Codex models (gpt-5.5, gpt-5.4, gpt-5.4-mini, gpt-5.2) at request build time so the first turn is accepted instead of paying a wasted call + retry-with-low fallback. Older Codex models still receive `minimal` directly. Fixes #71946. Thanks @hclsys.",
      "Plugins/uninstall: remove tracked plugin files from their recorded managed extensions root even when the current state directory points somewhere else, so `openclaw plugins uninstall --force` does not leave the plugin discoverable. Thanks @shakkernerd.",
      "Agents/runtime: add `agentRuntime.id` as the canonical config key, migrate legacy runtime-policy configs with `openclaw doctor --fix`, route canonical Anthropic models through `claude-cli` without passing CLI backend aliases to embedded harness selection, and load CLI backend owner plugins before channel startup. Fixes #71957. Thanks @WolvenRA.",
      "CLI/update: guard Windows scheduled-task stops by state and timeout so auto-update restart cannot hang indefinitely on `schtasks /End` before stale-listener cleanup. Fixes #69970. Thanks @yangswld and @sherlock-huang.",
      "Windows install/Lobster: execute `pnpm.exe` directly when `npm_execpath` points at the native pnpm binary, add an installed-package fallback for the Lobster embedded runtime, and include the Lobster runner regression test in Windows CI. Fixes #69456. Thanks @igormf.",
      "Gateway/install: refresh loaded gateway service installs when the current service embeds stale gateway auth instead of returning already-installed, avoiding LaunchAgent token-mismatch loops after token rotation. Fixes #70752. Thanks @hyspacex.",
      "Update: ignore bundled plugin `.openclaw-install-stage` directories during global install verification and packaged dist pruning so leftover runtime-dep staging files do not turn successful updates into `unexpected packaged dist file` failures. Fixes #71752. Thanks @waynegault.",
      "CLI/update: fail package updates when post-update plugin sync fails and refresh legacy npm plugin install records before trusting unchanged artifacts, preventing successful updates from restarting with stale or failed plugin state. Thanks @vincentkoc and @shakkernerd.",
      "Release/update: reject pre-populated bundled plugin `.openclaw-install-stage` directories, including mixed-case path variants, before package inventory generation so release tarballs cannot ship poisoned runtime-dependency staging debris. Fixes #71752. Thanks @hclsys.",
      "Node runtime: keep node-host retry timers alive across Gateway restarts and exit on terminal credential pauses so supervised nodes do not become silent zombies. Fixes #69800. Thanks @meroli28.",
      "Gateway/plugins: stop persisted WhatsApp auth state from activating bundled channel runtime-dependency repair during startup when `channels.whatsapp` is absent, avoiding npm/git stalls on packaged Linux installs. Fixes #71994. Thanks @xiao398008.",
      "Gateway/device tokens: enforce caller-scope containment inside token rotation and revocation so pairing-only sessions cannot mutate higher-scope operator tokens. Fixes #71990. Thanks @coygeek.",
      "Plugins/channels: keep security checks, thread-binding placement, provider summaries, health formatting, and message action labels on read-only or already-loaded channel metadata instead of importing full channel runtime. Thanks @shakkernerd.",
      "Plugins/status: keep config-only channel labels and status security summaries from importing plugin runtime modules just to render metadata. Thanks @shakkernerd.",
      "Sessions/channels: stop group-session metadata from loading bundled channel runtime just to classify `#channel` subjects, using only already-loaded channel capabilities on that path. Thanks @shakkernerd.",
      "Plugins/channels: keep native command and native skill `auto` defaults on static channel metadata so config, audit, and command-list checks do not load channel runtime just to read those defaults. Thanks @shakkernerd.",
      "CLI/channels: keep channel remove selection and all-channel capabilities summaries on read-only plugin metadata, loading channel runtime only for the selected mutation path. Thanks @shakkernerd.",
      "CLI/models: keep Provider Index preview rows out of `models list --all --provider <id>` when the owning provider plugin is disabled, preserving config authority for cold catalog fallbacks. Thanks @shakkernerd.",
      "CLI/model runs: keep `openclaw infer model run` on explicit OpenRouter models from loading the full provider catalog or inheriting chat-agent silent-reply policy, restoring non-empty one-shot probe output. Fixes #68791. Thanks @limpredator.",
      "Installer/macOS: rerun Homebrew install steps without the gum spinner when raw-mode ioctl failures occur, and avoid claiming `node@24` was installed when the Homebrew keg binary is missing. Fixes #70411. Thanks @1fanwang and @dad-io.",
      "Installer: load nvm before Node.js detection so `curl | bash` installs respect nvm-managed Node instead of stale system Node. Fixes #49556. Thanks @heavenlxj.",
      "Installer/Windows: route PowerShell install failures through a top-level handler so `iwr ... | iex` returns control to the current shell while direct script-file runs still exit non-zero. Fixes #38054. Thanks @PwrSrg.",
      "CLI/Volta: respawn raw `openclaw` CLI runs through the named `node` shim when the current Node executable resolves to `volta-shim`, avoiding direct shim execution failures in non-interactive shells. Fixes #68672. Thanks @sanchezm86.",
      "Installer: warn when multiple npm global roots contain OpenClaw installs, showing active Node/npm/openclaw plus each install path and version so stale version-manager installs are visible. Fixes #40839. Thanks @zhixianio.",
      "Cron/tasks: recover completed cron task ledger records from durable run logs and job state before marking them `lost`, reducing false `backing session missing` audit errors for isolated cron runs and keeping offline CLI audit from treating its empty local cron active-job set as authoritative. Fixes #71963.",
      "Docker: copy patched dependency files into runtime images so downstream `pnpm install` layers keep working. Fixes #69224. Thanks @gucasbrg.",
      "Package: include patched dependency files in the published npm package so downstream installs can resolve `patchedDependencies`. (#69224) Thanks @gucasbrg and @vincentkoc.",
      "Plugins/channels: treat malformed bundled channel plugin loaders that return `undefined` as unavailable instead of crashing config and help paths. Fixes #69044. Thanks @frankhli843 and @vincentkoc.",
      "Scripts/watch: show corrupted dependency package-config recovery guidance when `gateway:watch` fails during watcher startup, without double-logging unrelated import failures. (#58780) Thanks @roytong9 and @vincentkoc.",
      "Signal: read signal-cli RPC, health checks, and SSE events through Node's HTTP client so Node 24/25 fetch regressions do not break Signal sends or inbound events. Fixes #51716 and #53040. Thanks @Barukimang, @minupla, and @vincentkoc.",
      "Skills/Docker: run npm-backed skill dependency installs with an OpenClaw-managed user prefix so non-root Docker images do not write to `/usr/local`. Fixes #59601. Thanks @chanjarster and @vincentkoc.",
      "Agents/runtime: submit heartbeat, cron, and exec wakeups as transient runtime context instead of visible user prompts, keeping synthetic system work out of chat transcripts. Fixes #66496 and #66814. Thanks @jeades and @mandomaker.",
      "Telegram: include native quote excerpts automatically for threaded replies and reply tags when the original Telegram text is available, without adding another config knob. Fixes #6975. Thanks @rex05ai.",
      "Node/Linux: make `openclaw node install` enable and restart the `openclaw-node` systemd unit instead of the gateway unit on node-only VMs. Fixes #68287. Thanks @dlebee-agent.",
      "Browser/CDP: retry transient raw-CDP WebSocket handshake failures before any browser command is sent, and reconnect stale persistent Playwright CDP sessions for safe tab-list reads without replaying mutating browser actions. Fixes #67728.",
      "Gateway/Linux: retry `systemctl --user enable` after a second daemon reload when the freshly written gateway unit is not visible yet on migrated systemd installs. Fixes #65184. Thanks @liushuaiiu.",
      "Telegram: preserve exact selected quote text when sending native quote replies, and retry with legacy replies if Telegram rejects quote parameters. (#71952) Thanks @rubencu.",
      "Plugins/CLI: preserve manifest name, description, format, and source metadata in cold `openclaw plugins list` output without importing plugin runtime. Thanks @shakkernerd.",
      "Security/audit: read channel exposure and plugin allowlist ownership from read-only plugin index metadata so cold audits do not depend on loaded channel runtime. Thanks @shakkernerd.",
      "Plugins/chat: keep `/plugins list`, `/plugins enable`, and `/plugins disable` on the persisted plugin index path so chat plugin management does not load diagnostic/runtime plugin registries before execution. Thanks @shakkernerd.",
      "Plugins/doctor: read workspace plugin status and legacy web-search ownership through installed-index manifest metadata instead of broad manifest registry scans. Thanks @shakkernerd.",
      "CLI/agents: read channel provider status from read-only plugin index metadata for text `agents list` output instead of the loaded channel registry. Thanks @shakkernerd.",
      "Logging: redact configured secret patterns at console and file-log sink exits so credentials that reach the logger are masked before terminal display or JSONL persistence. Fixes #67953. Thanks @Ziy1-Tan.",
      "Gateway/services: refuse process and service mutations from an older OpenClaw binary when the config was last written by a newer version, preventing split-brain installs from stopping or rewriting newer gateway services. Fixes #57079.",
      "Gateway: reserve `/healthz` and `/readyz` ahead of plugin, canvas, and Control UI HTTP stages so liveness/readiness probes still answer when a later route handler stalls. Fixes #69674. Thanks @Xike-Creek.",
      "Logging: load `logging.file` and redaction settings directly from the active OpenClaw config path in bundled runtimes, so packaged gateways stop falling back to `/tmp/openclaw`. Fixes #59370, #67168, and #61295. Thanks @KeaneYan, @Pan9hu, and @zsjlovelike.",
      "Logging: rotate file logs at `logging.maxFileBytes`, keep bounded numbered archives, and make long-lived rolling loggers follow the current-day file instead of suppressing diagnostics or writing stale dated files. Fixes #58583 and #62381. Thanks @jpeghead and @zhaoleink.",
      "Agents/groups: treat clean empty assistant stops as silent `NO_REPLY` only for always-on groups where silent replies are allowed, while keeping direct and mention-gated sessions on the incomplete-turn retry path. Thanks @MagnaAI.",
      "macOS/Node: keep native remote app nodes from advertising `browser.proxy`, start browser-capable CLI node services through the restored `openclaw node start` command, and show an actionable browser-control error when the local control service is missing. Fixes #66637.",
      "Gateway/update: fail package updates when the restarted managed gateway reports the wrong version, including fallback restarts and JSON mode, avoiding false-success mixed-version restarts after macOS LaunchAgent updates. Fixes #71835. Thanks @abhinas90 and @jsompis.",
      "Gateway/update: warn before package updates and bundled plugin runtime-dependency repairs when the target volume appears low on disk space, without blocking installs on best-effort filesystem checks. Fixes #71835. Thanks @abhinas90 and @jsompis.",
      "Plugins/runtime deps: surface activated plugin load failures in health and fail package-update restart verification or doctor repair when bundled runtime deps still cannot load, avoiding false-success repairs. (#71883) Thanks @Solvely-Colin.",
      "Gateway/Linux: include fnm `aliases/default/bin` in generated service PATHs and let doctor accept either modern fnm aliases or the legacy `current/bin` symlink, avoiding false PATH repair prompts. Fixes #68169. Thanks @richard-scott.",
      "Installer/Linux: run apt installs with noninteractive dpkg and needrestart settings so fresh Ubuntu 24.04 `curl | bash` installs do not hang while installing Node.js, Git, or build tools. Fixes #41146. Thanks @iht76, @alexcarv318, @cs3gallery, @firofame, and @cgdusek.",
      "Providers/Bedrock: defer the AWS SDK import until Bedrock discovery actually runs so plugin registration and setup stay lightweight on cold start. Fixes #71690. Thanks @jarvis-ai-gregmoser.",
      "Installer/macOS: stop immediately when Homebrew `node@24` installation fails and avoid printing PATH advice for missing Homebrew Node installs. Fixes #70411. Thanks @1fanwang.",
      "WhatsApp: remove ack reactions after a visible reply when `messages.removeAckAfterReply` is enabled, matching other reaction-capable channels. Fixes #26183. Thanks @MrUnforsaken.",
      "Providers/Z.AI: map OpenClaw thinking controls to Z.AI's `thinking` payload and add opt-in preserved thinking replay via `params.preserveThinking`, so GLM 5.x can keep prior `reasoning_content` when requested. Fixes #58680. Thanks @xuanmingguo.",
      "Channels/status: keep read-only channel lists on manifest and package metadata by default, loading setup runtime only for explicit fallback callers. Thanks @shakkernerd.",
      "Plugins: scope setup and web-provider metadata manifest reads to explicit plugin ids when callers already know the owning plugin set. Thanks @vincentkoc.",
      "Plugins/onboarding: defer onboarding install-record index writes until the guarded config commit so setup failures cannot leave the plugin index ahead of `openclaw.json`. Thanks @shakkernerd.",
      "Plugins/registry: resolve web provider ownership from the installed plugin index instead of broad manifest scans on secret, tool, and pricing paths. Thanks @shakkernerd.",
      "Config/providers: accept `video` and `audio` in configured model `input` values and preserve them in provider catalog entries. Fixes #20721. Thanks @alvinttang.",
      "Models/auth: honor the parent `--agent` flag for auth write commands (`add`, `login`, `setup-token`, `paste-token`, and the GitHub Copilot shortcut) so OAuth/API-key/token results are written to the requested agent store instead of the default agent. Fixes #71864. (#71933) Thanks @balric-seo.",
      "TTS: strip model-emitted TTS directives from streamed block text before channel delivery, including directives split across adjacent blocks, while preserving the accumulated raw reply for final-mode synthesis. Fixes #38937.",
      "TTS: keep explicit `provider=...` directive keys scoped to that provider and warn on unsupported keys instead of letting another speech provider consume overlapping keys. Fixes #60131.",
      "TTS/Feishu: normalize final-mode streamed TTS-only audio before delivery so generated voice-note files use the same safe media path and native voice routing as normal final replies. Fixes #71920.",
      "Feishu: transcribe inbound voice-note audio with the shared media audio path before agent dispatch and keep raw Feishu `file_key` payloads out of message text. Fixes #67120 and #61876.",
      "Tasks: terminalize async Gateway agent task records from the Gateway run result while preserving aborted, failed, and cancelled outcomes instead of leaving completed runs stuck as active or lost. (#71905) Thanks @likewen-tech.",
      "WhatsApp: let authorized group voice-note transcripts satisfy mention gating before reply dispatch, while keeping unmentioned transcripts in pending group history. Fixes #44908.",
      "Media understanding: carry channel voice-note preflight state into attachment selection so WhatsApp, Feishu, Telegram, and Discord do not transcribe the same inbound audio twice. Fixes #70580.",
      "TTS/BlueBubbles: deliver compatible auto-TTS audio as iMessage voice memo bubbles instead of plain MP3/CAF file attachments. Fixes #16848.",
      "TTS: resolve voice-note and voice-memo routing from channel plugin capabilities instead of speech-core-owned channel id lists.",
      "ACP: send subagent and async-task completion wakes to external ACP harnesses as plain prompts instead of OpenClaw internal runtime-context envelopes, while keeping those envelopes out of ACP transcripts.",
      "TTS/status: show configured TTS model, voice, and sanitized custom endpoint in `/status`, preserve OpenAI-compatible TTS instructions on custom endpoints, and retry empty Microsoft/Edge TTS output once. Addresses #46602, #47232, and #43936. Thanks @leekuangtao, @Huntterxx, and @rex993.",
      "Agents/Gateway: steer agent-driven config edits and restarts through the owner-only `gateway` tool, document `config.schema.lookup` as the field-doc source, and warn against using `gateway stop && gateway start` as a restart substitute on macOS. Fixes #71929. Thanks @ygc3817922006-sketch.",
      "Media understanding/audio: inject a deterministic transcript placeholder for too-small voice notes so agents do not hallucinate transcription or provider failures. Fixes #48944. Thanks @eulicesl.",
      "Providers/vLLM: send Nemotron 3 chat-template kwargs when thinking is off and honor configured `params.chat_template_kwargs` for OpenAI-compatible completions, so vLLM/Nemotron replies stay visible instead of becoming thinking-only. Fixes #71891. Thanks @jmystaki-create and @dennis-lynch.",
      "Channels/replies: strip copied inbound metadata blocks from user-facing assistant replies and model replay history, so Discord/vLLM sessions do not leak `Conversation info` / `UNTRUSTED ... message body` envelopes after a model echoes them. Fixes #71847. Thanks @jmystaki-create.",
      "Subagents/memory: keep inter-session completion wakes out of memory and dreaming session exports, and strip internal runtime-context blocks from realtime Control UI chat events.",
      "Agents/Claude: treat zero-token empty `stop` turns as failed provider output, retry once, repair replay, and allow configured model fallback instead of preserving them as successful silent replies. Fixes #71880. Thanks @MagnaAI.",
      "Tasks: normalize task lifecycle timestamps at create, update, and restore time, and report retained lost tasks as audit warnings until their cleanup window expires. (#71871) Thanks @likewen-tech.",
      "Diagnostics/OTEL: treat normal early model stream cleanup as a completed model call instead of exporting a misleading `StreamAbandoned` error span. Thanks @vincentkoc.",
      "Gateway/pairing: stop corrupt or unreadable device/node pairing stores from being treated as empty state, preserving `paired.json` for repair instead of overwriting approved pairings. Fixes #71873. Thanks @iret77.",
      "ACP: keep `/acp` management commands, plus local `/status` and `/unfocus`, on the Gateway path inside ACP-bound threads so they are not consumed as ACP prompt text. Fixes #66298. Thanks @kindomLee.",
      "ACPX: stop probing ACP agents during normal Gateway startup; the embedded backend now registers without spawning Codex/ACP child processes unless `OPENCLAW_ACPX_RUNTIME_STARTUP_PROBE=1` is explicitly set.",
      "CLI/image edit: accept `--size`, `--aspect-ratio`, and `--resolution` on `openclaw infer image edit` and report all supported edit flags from `capability inspect image.edit`. Thanks @Pinghuachiu.",
      "ACP: wait for the configured runtime backend to become healthy before startup identity reconciliation, avoiding transient acpx warnings during Gateway boot. Fixes #40566.",
      "Channels/ACP bindings: time out configured binding readiness checks instead of letting Discord preflight hang forever when an ACP target never settles. Fixes #68776.",
      "Control UI: hide the chat loading skeleton during background history reloads when existing messages or active stream content are already visible, avoiding reload flashes on high-latency local gateways. Fixes #71844. Thanks @WolvenRA.",
      "Control UI: keep locally optimistic chat messages visible when a history reload temporarily returns empty, avoiding lost first-turn messages on high-latency gateways. Fixes #71878. Thanks @WolvenRA.",
      "Control UI: keep chat history limits based on visible messages after filtering heartbeat and control-only transcript rows, so recent hidden entries no longer make older visible replies disappear. Thanks @WolvenRA.",
      "Agents/images: scrub old `[media attached: ...]`, `[Image: source: ...]`, and `media://inbound/...` markers from pruned model replay context so stale media refs are not rehydrated as fresh prompt images. Fixes #71868. Thanks @jmeadlock.",
      "Docker/Bonjour: disable Bonjour/mDNS advertising by default for bundled Compose gateways on bridge networking, while keeping host/macvlan opt-in with `OPENCLAW_DISABLE_BONJOUR=0`. Fixes #71879. Thanks @gbballpack.",
      "CLI/status: label the OpenClaw Serve/Funnel setting as `Tailscale exposure` and show daemon state separately when available, so `gateway.tailscale.mode: \"off\"` no longer reads like the Tailscale daemon is stopped. Fixes #71790. Thanks @pesvobodak.",
      "Plugins/Bonjour: stop ciao mDNS watchdog failures from looping forever when the advertiser stays stuck in `probing` or `announcing`; Bonjour now disables itself for the current Gateway process after repeated failed restarts while the Gateway keeps running. Fixes #69011. Thanks @siddharthaagarwalofficial-ux, @FiredMosquito831, and @spikefcz.",
      "Gateway/Fly.io: seed Control UI allowed origins from the actual runtime bind and port so CLI-driven non-loopback starts do not crash before config exists. Fixes #71823.",
      "macOS/remote SSH: keep discovered gateway hosts in `gateway.remote.sshTarget` while pinning SSH transport URLs to the local loopback tunnel, so browser automation does not regress into blocked non-loopback `ws://` endpoints. Fixes #67336.",
      "Gateway/proxy: bootstrap env proxy dispatching from direct Gateway startup so provider and plugin network requests honor `HTTPS_PROXY`/`HTTP_PROXY` before the first embedded agent attempt runs. (#71833) Thanks @mjamiv.",
      "Plugins/runtime deps: verify clean npm installs actually place requested bundled runtime packages in the managed install root, reporting exact missing specs instead of a false successful repair. (#71883) Thanks @Solvely-Colin.",
      "Plugins/discovery: ignore stale `plugins.load.paths` aliases that point back at packaged bundled plugin directories and have doctor remove them, keeping bundled plugins on the runtime-deps staging path.",
      "Models/LM Studio: preserve `@iq*` quant suffixes in model refs and provider matching so `/model lmstudio/...@iq3_xxs` keeps the exact LM Studio variant. Fixes #71474. (#71486) Thanks @Bartok9, @XinwuC, and @Sanjays2402.",
      "Matrix/cron: preserve the live Matrix delivery target when creating implicit announce reminder jobs so mixed-case room IDs are not reconstructed from lowercased session keys. Fixes #71798.",
      "Feishu: accept Schema 2.0 card action callbacks that report `context.open_chat_id` instead of legacy `context.chat_id`, so button callbacks no longer drop as malformed. Fixes #71670. Thanks @eddy1068.",
      "Feishu: keep synthetic card-action and bot-menu ids out of platform reply targets, using the real card callback message id when Feishu provides one and plain-sending otherwise. Fixes #71673. Thanks @eddy1068.",
      "Plugins/QQ Bot: prefer an installed QQ Bot plugin that declares it replaces the bundled `qqbot` channel, preventing duplicate `qqbot_channel_api` and `qqbot_remind` tool registration noise. Fixes #63102.",
      "Browser automation: keep stable tab ids and labels attached when Chromium replaces the raw target after form submissions or other action-triggered navigations, and return the replacement `targetId` from `/act` when the match is provable. Fixes #46137.",
      "QQ Bot: make `qqbot_remind` schedule, list, and remove Gateway cron jobs directly for owner-authorized senders instead of returning `cronParams` and relying on a follow-up generic `cron` tool call. Fixes #70865. (#70937) Thanks @GaosCode.",
      "Agents/ACP: hide `sessions_spawn` ACP runtime options unless an ACP backend is loaded, and make `/acp doctor` call out `plugins.allow` blocking bundled `acpx`. Thanks @vincentkoc.",
      "Agents/Codex: keep ACP prompt/skill routing hidden unless an ACP runtime backend is available, and warn in doctor when enabled Codex plugin configs still route `openai-codex/*` models through PI. Thanks @vincentkoc.",
      "Media delivery: avoid sending generated image attachments twice when the assistant reply already includes explicit `MEDIA:` lines for the same turn, and reject unsafe remote `MEDIA:` URLs before delivery. Thanks @pashpashpash.",
      "Codex harness: ignore retryable app-server error notifications after Codex recovers, and preserve the real nested error message for terminal app-server failures instead of replacing it with a generic failure. Thanks @pashpashpash.",
      "Agents/Codex: prepare native Codex sub-agent session metadata without a nested Gateway session patch and add a focused Docker smoke for the app-server sub-agent path. Thanks @vincentkoc.",
      "Agents/subagents: keep queued subagent announces session-only when the requester has no external channel target, avoiding ambiguous multi-channel delivery failures. Fixes #59201. Thanks @larrylhollan.",
      "Image understanding: preserve configured provider-prefixed vision model metadata when callers request the model without the provider prefix, so custom image models keep their `input: [\"text\", \"image\"]` capability. Fixes #33185. Thanks @Kobe9312 and @vincentkoc.",
      "Plugins/install: restore the previous plugin index records if a concurrent config write conflict interrupts install, update, or uninstall metadata commits. Thanks @shakkernerd.",
      "Plugins/install: reject native plugin archives that do not include a valid `openclaw.plugin.json`, preventing manifestless archives from writing install records that later show missing-manifest diagnostics. Thanks @shakkernerd.",
      "Plugins/uninstall: remove tracked managed plugin install directories even when the persisted install path differs from the default id-derived target, while still refusing deletes outside the managed extensions root. Thanks @shakkernerd.",
      "Plugins/update: restore previous plugin index records if core update or channel setup hits a concurrent config write conflict after plugin metadata changes. Thanks @shakkernerd.",
      "Plugins/onboarding: defer channel/provider plugin install records until the owning config write commits, keeping setup failures from advancing the plugin index ahead of `openclaw.json`. Thanks @shakkernerd.",
      "Plugins/config: route configure and agent setup writes with pending plugin install records through the plugin index commit helper so provider onboarding metadata is not stripped by plain config writes. Thanks @shakkernerd.",
      "Plugins/channels: merge pending channel plugin install records with the existing plugin index before config writes, preserving unrelated tracked installs during channel setup, resolve, remove, and capability repair flows. Thanks @shakkernerd.",
      "Plugins/config: defer shipped `plugins.installs` index migration during config writes until the guarded config commit window and roll it back if the config write fails before commit. Thanks @shakkernerd.",
      "Sessions: keep embedded runtime context out of the visible user prompt by sending it as a hidden next-turn custom message, and teach doctor to repair affected 2026.4.24 transcripts with duplicated prompt-rewrite branches. Fixes #71761.",
      "Gateway/subagents: keep direct-loopback backend RPCs authenticated with the shared gateway token/password off stale CLI paired-device scope baselines, so internal calls no longer hit `scope-upgrade` pairing prompts while remote, browser, node, device-token, and explicit-device paths still require normal pairing approval. Fixes #63548.",
      "Providers/Azure OpenAI: give deployment-scoped image generation requests a longer 600s default timeout so slow `gpt-image-2` generations can complete without a per-call `timeoutMs`. Fixes #71705. Thanks @voytas75.",
      "Gateway/plugins: link source-checkout bundled runtime dependency caches instead of recursively copying `node_modules` on the gateway main thread, preventing local status, node, and skill probes from timing out during startup cache restores.",
      "Skills/remote nodes: only expose remote macOS skill bins for connected nodes, clear stale bin matches when node probes fail, and include probe command, timeout, bin count, and connection state in timeout logs.",
      "Skills/remote nodes: recognize `system.which` object-map responses when probing connected macOS nodes, so Linux gateways can expose macOS-only skills such as Apple Notes when the required binaries are installed remotely. Fixes #71877. Thanks @miguelarios.",
      "CLI/gateway: keep diagnostic probes from creating first-time read-only device pairings, while still reusing cached device tokens for detailed read probes. Fixes #71766. Thanks @SunboZ.",
      "CLI/plugins: keep `message` startup, `channels logs`, `agents delete`, and `agents set-identity` off broad plugin preloading; message delivery still loads plugins when the action actually runs.",
      "Image understanding: resolve configured image models such as local LM Studio vision entries before reporting `Unknown model` when the discovery registry has not registered that provider. Fixes #66486. Thanks @zhanggpcsu.",
      "QQ Bot: ignore self-echoed bot messages using the outbound ref-index marker, preventing mirrored replies from re-entering the agent loop while still allowing users to quote bot replies. Fixes #71912. Thanks @wangyc6003.",
      "Sessions: separate reset freshness from session-store `updatedAt`, so heartbeat, cron, exec, and gateway bookkeeping no longer prevent configured daily/idle resets from rolling long-running channel sessions. Fixes #68315, #63732, #63820, and #69083. Thanks @maxatv, @longhairedsi, @bradfreels, and @akessel56.",
      "Sessions: clear queued system-event notices during `/new`, `/reset`, gateway `sessions.reset`, and daily/idle rollover so stale background updates cannot leak into the first prompt of the fresh session. Fixes #66864. Thanks @opeyio, @Magicray1217, and @cedillarack.",
      "CLI/agents: keep `agents bind`, `agents unbind`, and `agents bindings` on setup-safe channel metadata paths so they do not preload bundled plugin runtimes or stage runtime dependencies. Fixes #71743.",
      "Plugins/registry: preserve explicit disabled plugin records during registry migration without persisting every unused bundled plugin discovered on disk. Thanks @shakkernerd.",
      "Windows/native: keep CLI startup and bundled provider plugin loading off Windows ESM raw-path failure paths, fixing native onboarding/install smoke on Node 24.",
      "Plugins/doctor: read bundled channel doctor capabilities through the same packaged plugin directory resolver used by plugin loading, so published installs keep Matrix DM allowlist repairs on `channels.matrix.dm.*` instead of writing invalid top-level `dmPolicy` keys. Fixes #71757.",
      "Plugins/Windows: keep bundled plugin Jiti loaders off the native import path on Windows so channel plugins such as Telegram no longer crash with `ERR_UNSUPPORTED_ESM_URL_SCHEME` on `C:\\...` paths. Fixes #71749. Thanks @smeyer9.",
      "Providers/Ollama: use Ollama's current `/api/web_search` endpoint and honor `https://ollama.com` model-provider base URLs for Ollama Web Search. Fixes #71741. Thanks @madhvidua.",
      "Memory/Ollama: serialize Ollama memory embedding batches and add an inline batch timeout override, with longer defaults for local/self-hosted embedding providers.",
      "Sessions/usage: exclude compaction checkpoint transcript snapshots from usage totals and session discovery, while keeping old checkpoint files removable.",
      "CLI/agents: keep `openclaw agents list --json` on the config-only path by default, avoiding bundled plugin loading unless callers request `--bindings`. Fixes #71739. Thanks @kaloster.",
      "Plugins/install: force plugin dependency installs to stay project-local even when inherited npm config requests global installs, so successful installs still materialize the plugin's staged `node_modules`.",
      "Providers/Google: transcode Gemini TTS PCM to Opus for voice-note targets so WhatsApp and other native voice-note replies can play as voice messages.",
      "TTS/WhatsApp: mark non-Opus provider output as voice-note intent so channel delivery transcodes MP3/WebM replies to Ogg/Opus PTT audio.",
      "Plugins/runtime deps: reuse existing external bundled-plugin stage roots when mirrored plugin roots are inspected again, avoiding second-generation `openclaw-unknown-*` stages and repeated first-turn restaging. Fixes #71599.",
      "iOS/macOS Talk Mode: allow `talk.speechLocale` to set the speech recognition locale for non-English voice conversations. Fixes #44688.",
      "Plugins/providers: honor explicit plugin candidate lists instead of reading a persisted registry snapshot from local state, keeping candidate-scoped provider discovery hermetic.",
      "Plugins/doctor: keep bundled plugin runtime-dependency repairs inside the managed OpenClaw stage even when user npm prefix/global config points npm at `$HOME/node_modules`. Fixes #71730.",
      "ACP/sessions_spawn: reject normal OpenClaw config agent ids when callers explicitly request `runtime=\"acp\"`, while allowing agents configured with `runtime.type=\"acp\"` to resolve to their ACP harness id. Fixes #63914.",
      "ACP/sessions_spawn: apply `runTimeoutSeconds` to ACP child turns and dispatch those turns on the background subagent lane, so quota-stalled ACP harnesses do not occupy the main agent lane indefinitely. Fixes #68823.",
      "ACP/oneshot: reconcile runtime session identity before closing completed oneshot ACP runs, so finished `sessions.json` entries do not stay stuck with `acp.identity.state=\"pending\"`.",
      "ACPX: bundle `acpx@0.6.1` so unsupported generic model overrides fail clearly instead of silently falling back to the target adapter default.",
      "ACP/models: document that non-Codex ACP model overrides require adapter support for ACP `models` plus `session/set_model`, so unsupported harnesses fail clearly instead of silently falling back to their defaults.",
      "Plugins/Voice Call: treat missing provider credentials as setup-incomplete during Gateway startup and log the missing keys as a warning instead of a runtime startup error, while keeping explicit command/tool errors when used.",
      "Android/Talk Mode: prevent duplicate TTS playback when fast or repeated final chat events arrive while Talk Mode is waiting for its own response. Fixes #46546.",
      "Tooling/check:changed: pass parent heavy-check lock markers to lint lanes so `pnpm check:changed` no longer waits on its own `lint:extensions` child.",
      "CLI/completion: dedupe provider auth flags before registering `openclaw onboard` options, so completion-cache refresh during update no longer fails when stale core fallback flags overlap plugin manifest flags. Fixes #71667.",
      "Diagnostics/trace: report live context usage from the current prompt snapshot instead of provider turn totals, avoiding false near-full context spikes on cached or tool-heavy runs.",
      "Providers/Google: honor `models.providers.google.request.allowPrivateNetwork` for Gemini TTS and telephony TTS, matching Google image generation and media understanding. (#71723) Thanks @ro-hansolo.",
      "Providers/MiniMax: register `minimax-portal` for music and video generation, preserving OAuth auth and regional MiniMax base URLs across the shared `music_generate` and `video_generate` tools. (#63241) Thanks @tars90percent.",
      "Providers/onboarding: keep Runway and Alibaba Model Studio out of the text-inference setup picker by scoping their video-generation auth choices to the media setup flow. (#65856) Thanks @Jah-yee.",
      "Plugins/Bonjour: stop the gateway from crash-looping on `CIAO PROBING CANCELLED` when the mDNS watchdog cancels a stuck probe. Restores the rejection-handler wiring dropped during the bonjour plugin migration and shares unhandled-rejection state across module instances so plugin-staged copies of `openclaw/plugin-sdk/runtime` register into the same handler set the host consults. Especially affects Docker on macOS, where mDNS probing reliably hits the watchdog. Thanks @troyhitch.",
      "Google Meet: report pinned Chrome nodes as offline or missing capabilities in setup/join diagnostics, keep inaccessible nodes out of auto-selection, and preflight local BlackHole/SoX requirements before agents try local Chrome.",
      "Providers/MiniMax: route `image-01` requests to the dedicated image generation endpoint while preserving CN endpoint selection. Fixes #61149. Thanks @mushuiyu886.",
      "Plugins/startup: remove ownerless bundled runtime-dependency install locks after a short grace window and include lock owner details when startup times out waiting for a plugin runtime-deps lock.",
      "Plugins/install: anchor bundled runtime-dependency npm installs with an OpenClaw-owned package manifest so Linux updates cannot accidentally write to a parent `$HOME/node_modules` tree. Fixes #71730.",
      "Plugins/install: pass onboarding plugin config into plugin index writes so local plugin installs outside default discovery roots keep their install records. Thanks @shakkernerd.",
      "Plugins/install: migrate shipped `plugins.installs` config records into the plugin index while stripping them from runtime config and future writes. Thanks @shakkernerd.",
      "Plugins/install: durably remove shipped `plugins.installs` from `openclaw.json` after its records are copied into the plugin index, while rolling back the index write if config cleanup fails. Thanks @shakkernerd.",
      "Plugins/install: keep migrated plugin install records in the plugin index even when the plugin manifest is missing or invalid, so update, uninstall, inspect, and audit can still recover broken installs. Thanks @shakkernerd.",
      "Plugins/security: keep plugin audit JSON check ids stable while reporting plugin index install-record findings with updated wording. Thanks @shakkernerd.",
      "CLI/config: reject direct `plugins.installs` edits with guidance to use `openclaw plugins install`, `openclaw plugins update`, or `openclaw plugins uninstall` instead. Thanks @shakkernerd.",
      "Live tests/voice: accept common STT variants for OpenClaw and ElevenLabs brand names so provider smoke tests fail on real regressions rather than equivalent transcripts.",
      "Agents/replies: forward sanitized underlying agent failure details on external channels instead of replacing unknown failures with a generic retry message.",
      "CLI/MCP: translate OpenClaw `mcp.servers.*.transport` entries into Claude/Gemini CLI `type` fields so streamable HTTP MCP servers load in CLI backend sessions. (#71724) Thanks @Blockchain-Oracle.",
      "Browser/CDP: honor configured remote and `attachOnly` CDP HTTP/WebSocket timeouts when opening tabs through raw CDP or `/json/new` fallback. (#54238) Thanks @FuncWei.",
      "WhatsApp/TTS: send visible text separately from PTT voice-note audio instead of relying on hidden voice-note captions. Fixes #51081.",
      "Browser/client: avoid telling agents to restart OpenClaw for dispatcher timeouts on external browser profiles such as `attachOnly`, remote CDP, and existing-session. (#40815) Thanks @0xsline.",
      "Agents/TTS: preserve `[[audio_as_voice]]` directives on trusted text tool-result `MEDIA:` payloads so generated audio still delivers as a voice note. (#46535) Thanks @azade-c.",
      "Agents/TTS: keep queued tool media when an assistant ends with `NO_REPLY` on non-block delivery paths, so media-only generated audio replies still send. (#60025) Thanks @bradlind1.",
      "Telegram/STT: frame inbound voice-note transcripts as machine-generated, untrusted text in agent context while preserving raw transcript mention detection. Closes #33360. Thanks @smartchainark.",
      "Subagents/browser: show an actionable `/tools` notice when browser automation is configured but filtered out by the active tool profile, and document that coding-profile agents should use `tools.alsoAllow: [\"browser\"]` rather than subagent allowlists alone.",
      "Control UI/Quick Settings: persist the assistant avatar override to browser local storage (mirroring the user avatar) so uploaded image data URLs no longer fail config validation with \"Too big: expected string to have <=200 characters\". Also lift the gateway-side `ui.assistant.avatar` length cap to match the user avatar size budget for non-UI clients writing the field directly. Thanks @BunsDev.",
      "Plugin SDK: share diagnostic event subscriptions across duplicate source/dist module graphs so legacy root SDK imports still receive runtime diagnostic events.",
      "Agents/Bedrock: prevent empty assistant stream-error turns from poisoning Converse replay by persisting, repairing, and replaying a non-empty fallback block. Fixes #71572. (#71627) Thanks @openperf.",
      "Agents/Anthropic/Bedrock: strip thinking blocks with missing, empty, or blank replay signatures before provider conversion, falling back to non-empty omitted-reasoning text when needed so corrupted signed-thinking history no longer poisons subsequent turns. Fixes #45010. (#70054) Thanks @castaples.",
      "Agents/Anthropic/Bedrock: preserve stripped thinking-only assistant replay turns with non-empty omitted-reasoning text so provider adapters keep strict user/assistant turn shape. Thanks @wujiaming88.",
      "ACP/Codex: pass `sessions_spawn(runtime=\"acp\")` model and thinking overrides into Codex ACP startup, normalize `openai-codex/*` refs and slash reasoning suffixes, and recognize managed Codex ACP wrapper commands without blocking current `gpt-5.5` sessions. Fixes #40393. (#71643) Thanks @91wan.",
      "Browser/CDP: make readiness diagnostics use the same discovery-first fallback as reachability for bare `ws://` Browserless and Browserbase CDP URLs. Fixes #69532.",
      "Browser/CDP: explain that loopback Browserless or other externally managed CDP services need `attachOnly: true` and matching Browserless `EXTERNAL` endpoint when reporting local port ownership conflicts, and fall back to the configured bare WebSocket root when a discovered Browserless endpoint rejects CDP. Fixes #49815.",
      "Gateway/reload: preserve indefinite `gateway.reload.deferralTimeoutMs: 0` semantics for channel hot reload deferrals so active agent runs are not interrupted by a forced channel restart. (#71637) Thanks @Poo-Squirry.",
      "Agents/tool results: cap persisted Pi tool-result details and strip hidden diagnostics before provider conversion, preventing large debug payloads from bloating session transcripts. (#71637) Thanks @Poo-Squirry.",
      "ACP/OpenCode: update the bundled acpx runtime to 0.6.0 and cover the OpenCode ACP bind path in Docker live tests.",
      "Providers/OpenCode Go: add DeepSeek V4 Pro and DeepSeek V4 Flash to the Go catalog while the bundled Pi registry catches up. Fixes #71587.",
      "Providers/OpenCode Go: route DeepSeek V4 Pro/Flash through the OpenAI-compatible Go endpoint and suppress invalid `reasoning_effort: \"off\"` payloads, fixing tool-enabled requests for `opencode-go/deepseek-v4-flash`. Fixes #71683.",
      "Plugins/model defaults: run Skill Workshop review, Active Memory recall, and session-memory slug generation on the configured agent default model instead of the hardcoded OpenAI SDK fallback when hook context lacks model metadata. Fixes #71659.",
      "Providers/Venice: fill the required DeepSeek V4 `reasoning_content` placeholder for `venice/deepseek-v4-pro` and `venice/deepseek-v4-flash` replay turns without sending native DeepSeek `thinking` controls that Venice rejects. Fixes #71628.",
      "Browser/existing-session: support per-profile Chrome MCP command/args, map `cdpUrl` to `--browserUrl` or `--wsEndpoint`, and avoid combining endpoint flags with `--userDataDir`. Fixes #47879, #48037, and #62706. Thanks @puneet1409, @zhehao, and @madkow1001.",
      "Media/plugins: bound MIME sniffing and ZIP archive preflight before handing untrusted files to `file-type` or `jszip`, reducing parser CPU and memory exposure for attachments and ClawHub plugin archives. Thanks @vincentkoc.",
      "Memory-host SDK: use trusted env-proxy mode for remote embedding and batch HTTP calls only when Undici will proxy that target, preserving SSRF DNS pinning for `ALL_PROXY`-only and `NO_PROXY` bypass cases. Fixes #52162. (#71506) Thanks @DhtIsCoding.",
      "Gateway/dashboard: render Control UI and WebSocket links with `https://`/`wss://` when `gateway.tls.enabled=true`, including `openclaw gateway status`. Fixes #71494. (#71499) Thanks @deepkilo.",
      "Agents/OpenAI-compatible: default proxy/local completions tool requests to `tool_choice: \"auto\"` when tools are present, so providers enter native tool-calling mode instead of replying with plain-text tool directives. (#71472) Thanks @Speed-maker.",
      "OpenAI image generation: use `gpt-5.5` for the Codex OAuth responses transport instead of the retired `gpt-5.4` model, fixing 500s from ChatGPT Codex image generation. Fixes #71513. Thanks @baolongl.",
      "OpenAI image generation: route transparent-background default-model requests to `gpt-image-1.5`, document the expected `image_generate` call shape, and keep Azure/custom OpenAI-compatible deployment names untouched.",
      "Google video generation: download direct MLDev Veo `video.uri` results instead of passing them through the Files API path, fixing 404s after successful generation/polling. Fixes #71200. Thanks @panhaishan.",
      "Google video generation: fall back to the REST `predictLongRunning` Veo endpoint for text-only SDK 404s while keeping reference image/video generation on the SDK path. Fixes #62309 and #63008. (#62343) Thanks @leoleedev.",
      "MiniMax music generation: switch the bundled default model from the unsupported `music-2.5+` id to the current `music-2.6` API model. Fixes #64870 and addresses the music default from #62315. Thanks @noahclanman and @edwardzheng1.",
      "Cron: record jobs interrupted by a gateway restart as failed at their original `runningAtMs`, skip unsafe startup replay, and disable interrupted one-shot jobs so they show a visible failure instead of silently disappearing or duplicating work. Fixes #59056, #61343, #63657, and #59301. Thanks @ponchoooPenguin, @daemic24, @myradon, and @hikiwibot.",
      "Cron tool: recover flat top-level schedule shorthand such as `cron`, `tz`, and `staggerMs` before gateway validation, so model-generated cron add/update calls preserve cron jitter settings. Thanks @tyxben.",
      "Cron: hydrate flat legacy job rows with top-level `cron`, `tz`, `session`, and `message` fields into canonical schedule, target, and payload objects before startup recomputes run times. Fixes #43351.",
      "Agents/replies: let pending group chat history trigger bare mentioned turns without treating metadata-only inbound context as user input. Fixes #71489. (#71520) Thanks @SymbolStar.",
      "Google media generation: strip a configured trailing `/v1beta` from Google music/video provider base URLs before calling the Google GenAI SDK, preventing doubled `/v1beta/v1beta` paths. Fixes #63240. (#63258) Thanks @Hybirdss.",
      "Discord: restore direct-message voice-note preflight transcription and classify URL-only Ogg/Opus voice attachments as audio while skipping partial attachments without usable URLs. Fixes #61314 and #64803.",
      "Plugins/build: copy bundled plugin skill trees into `dist-runtime`, broaden Windows symlink-copy fallbacks, and fingerprint runtime dependencies from `lstat` so symlink-like directory entries cannot crash staging.",
      "Google Chat: preserve reply text when a typing indicator message is deleted or can no longer be updated, so media captions and first text chunks are resent instead of silently disappearing. (#71498) Thanks @colin-lgtm.",
      "Cron: tolerate malformed legacy job rows in startup, main-session system-event payloads, and human-readable `cron list` output so missing `state`, `payload.text`, or display fields no longer crash the scheduler or CLI. Fixes #66016, #65916, #64137, #57872, #59968, #63813, #52804, and #43163. (#71509) Thanks @vincentkoc.",
      "CLI/models: make `openclaw models scan` fall back to public OpenRouter free-model metadata when no `OPENROUTER_API_KEY` is configured, avoid config secret resolution for explicit `--no-probe` scans, and apply the scan timeout to the OpenRouter catalog request.",
      "Feishu: keep streaming cards to one live card per turn, flush throttled card edits after meaningful text boundaries, and skip exact block/partial repeats so tool-heavy replies do not duplicate card output. Thanks @allan0509.",
      "Feishu: finish the streaming-card duplicate closeout by stripping leaked reasoning tags, preserving cross-block partial snapshots, enabling topic-thread streaming cards, omitting the generic `main` card header, surfacing transient tool/compaction status, and cleaning streaming state after close failures. Thanks @sesame437, @Vicky-v7, @maoku-family, @Pengxiao-Wang, and @Maple778.",
      "Telegram: keep final-only answers on the normal final-send path instead of creating synthetic draft previews, while preserving real partial preview finalization. Credited from #39213. Thanks @chalawbot.",
      "Telegram: recover incomplete partial-stream previews by falling back to a final send when an ambiguous final edit failure would otherwise retain a strict prefix of the answer. Fixes #71525. (#71554) Thanks @sahilsatralkar.",
      "Control UI/chat: collapse assistant token/model context details behind an explicit Context disclosure and show full dates in message footers, making historical transcript timing clear without noisy default metadata. (#71337) Thanks @BunsDev.",
      "OpenAI/Codex OAuth: explain `unsupported_country_region_territory` token-exchange failures with a proxy/region hint instead of surfacing a generic OAuth error. Fixes #51175. (#71501) Thanks @vincentkoc and @wulala-xjj.",
      "Browser/Linux: fall back to headless mode for local managed profiles on hosts without a display server, while preserving explicit per-profile headed overrides and reporting the headless source. (#60953) Thanks @rrpsantos.",
      "Telegram: remove the startup persisted-offset `getUpdates` preflight so polling restarts do not self-conflict before the runner starts. Fixes #69304. (#69779) Thanks @chinar-amrutkar.",
      "Telegram: keep the polling stall watchdog active even when grammY reports the runner as not running while its task is still pending, so a rebuilt transport cannot leave `getUpdates` silent until a manual gateway restart. Fixes #69064. Thanks @LDLoeb.",
      "Subagents: fall back to direct completion delivery when the parent announce turn finishes without a visible payload, so child results still reach channel-backed requester sessions.",
      "Subagents: tell parent agents to use `sessions_yield` while waiting for child completion events, preventing GPT-5 fast runs from ending silently after spawning workers.",
      "Browser/Playwright: ignore benign already-handled route races during guarded navigation so browser-page tasks no longer fail when Playwright tears down a route mid-flight. (#68708) Thanks @Steady-ai.",
      "Browser/CLI: lazy-load browser command groups and plugin runtime services so `openclaw browser --help` can render without loading the full browser automation stack. Fixes #65400. (#65460, #66640) Thanks @pandego and @Tianworld.",
      "Browser/CLI: serve precomputed `openclaw browser --help` text from CLI startup metadata, avoiding the full plugin/config startup path for the common help invocation.",
      "Browser/downloads: seed managed Chrome profiles with OpenClaw download prefs and capture unmanaged click-triggered downloads under the guarded downloads directory, while explicit download waiters still own their target file. (#64558) Thanks @Pearcekieser.",
      "Browser/Chrome: stop passing redundant `--disable-setuid-sandbox` when `browser.noSandbox` is enabled; `--no-sandbox` remains the effective sandbox opt-out. (#67939) Thanks @sebykrueger.",
      "Browser/client: stop telling agents to permanently avoid the browser after transient timeout or cancellation failures; keep the no-retry hint for persistent unavailable/rate-limit cases. (#46505) Thanks @jriff.",
      "Browser/aria snapshots: bind `format=aria` `axN` refs to live DOM nodes through backend DOM ids when Playwright is available, so follow-up browser actions can use those refs without timing out. (#62434) Thanks @MrKipler.",
      "Telegram: prevent duplicate in-process long pollers for the same bot token and add clearer `getUpdates` conflict diagnostics for external duplicate pollers. Fixes #56230. Thanks @Co-Messi.",
      "Browser/Linux: detect Chromium-based installs under `/opt/google`, `/opt/brave.com`, `/usr/lib/chromium`, and `/usr/lib/chromium-browser` before asking users to set `browser.executablePath`. (#48563) Thanks @lupuletic.",
      "Sessions/browser: close tracked browser tabs when idle, daily, `/new`, or `/reset` session rollover archives the previous transcript, preventing tabs from leaking past the old session. Thanks @jakozloski.",
      "Sessions/forking: fall back to transcript-estimated parent token counts when cached totals are stale or missing, so oversized thread forks start fresh instead of cloning the full parent transcript. Thanks @jalehman.",
      "OpenAI/Codex: send Codex Responses system prompts through top-level `instructions` while preserving the existing native Codex payload controls.",
      "MCP/CLI: retire bundled MCP runtimes at the end of one-shot `openclaw agent` and `openclaw infer model run` gateway/local executions, so repeated scripted runs do not accumulate stdio MCP child processes. Fixes #71457. Thanks @spartoviMD.",
      "OpenAI/Codex image generation: canonicalize legacy `openai-codex.baseUrl` values such as `https://chatgpt.com/backend-api` to the Codex Responses backend before calling `gpt-image-2`, matching the chat transport. Fixes #71460. Thanks @GodsBoy.",
      "Control UI: make `/usage` use the fresh context snapshot for context percentage, and include cache-write tokens in the Usage overview cache-hit denominator. Fixes #47885. Thanks @imwyvern and @Ante042.",
      "GitHub Copilot: preserve encrypted Responses reasoning item IDs during replay so Copilot can validate encrypted reasoning payloads across requests. (#71448) Thanks @a410979729-sys.",
      "GitHub Copilot: never rewrite connection-bound reasoning item IDs regardless of whether `encrypted_content` is present, fixing a 400 \"Encrypted content item_id did not match\" error with `gpt-5.3-codex` and future Codex models that fall through to the forward-compat catch-all with `reasoning: false`. Also recognize Codex-named models as reasoning-capable so they inherit the correct capability flags. Refs #68735. Thanks @InvalidPandaa.",
      "Agents/replies: recover final-answer text when streamed assistant chunks contain only whitespace, preventing completed turns from surfacing as empty-payload errors. Fixes #71454. (#71467) Thanks @Sanjays2402.",
      "Feishu/TTS: transcode voice-intent MP3 and other audio replies to Ogg/Opus before sending native Feishu audio bubbles, while keeping ordinary MP3 attachments as files. Fixes #61249 and #37868. Thanks @sg1416-zg and @ycjlb2023-peteryi.",
      "WhatsApp/TTS: transcode MP3/WebM audio, including Microsoft Edge TTS output, to Ogg/Opus before sending PTT voice notes.",
      "QQBot/TTS: honor plain `audioAsVoice` replies by synthesizing TTS to native QQ voice messages, and mark inbound voice-only messages as audio media without exposing raw voice paths to generic media context.",
      "Providers/SenseAudio: add bundled SenseAudio batch audio transcription through `tools.media.audio` with `SENSEAUDIO_API_KEY` auth. (#66943) Thanks @Fl0rencess720.",
      "Providers/MiniMax: let TTS use MiniMax portal OAuth and Token Plan credentials before falling back to `MINIMAX_API_KEY`, and include current TTS HD model ids. Fixes #55017. Thanks @zx15210404690-hash.",
      "Telegram/webhook: acknowledge validated webhook updates before running bot middleware, keeping slow agent turns from tripping Telegram delivery retries while preserving per-chat processing lanes. Fixes #71392. Thanks @joelforsberg46-source.",
      "MCP/config reload: hot-apply `mcp.*` changes by disposing cached session MCP runtimes, and dispose bundled MCP runtimes during gateway shutdown so removed `mcp.servers` entries reap child processes promptly. Fixes #60656. Thanks @xieyuanqing.",
      "Active Memory: keep silent recall sub-agent billing/auth failures out of shared auth-profile cooldown state, so a Claude CLI extra-usage rejection cannot disable normal Claude-backed turns. Fixes #71284. (#71539) Thanks @vishutdhar and @obviyus.",
      "Auth/Claude CLI: sync refreshed Claude CLI OAuth credentials into the managed auth profile so long-running Claude CLI runs stop falling back to stale OpenClaw snapshots. (#70902) Thanks @starvex.",
      "Sessions: make `sessions_spawn(mode=\"session\")` errors name usable alternatives when the current channel cannot bind subagent threads. Fixes #67400. (#67790) Thanks @stainlu.",
      "Agents/Claude CLI: pass the OpenClaw system prompt through Claude's prompt-file flag so Windows runs avoid argv length failures without changing system prompt semantics. Fixes #69158. (#69211) Thanks @skylee-01, @cassioanorte, @Syu0, and @Stache73.",
      "Agents/CLI sessions: bind `google-gemini-cli` session auth-epoch to the Google account identity in `~/.gemini/oauth_creds.json`, so Gemini-backed agents resume their conversation after gateway restart instead of minting a fresh session, and stale bindings are invalidated when the authenticated Google account changes. Fixes #70973. (#71076) Thanks @openperf.",
      "Slack: stop treating user mentions in assistant-authored message edit blocks as sender attribution, preventing edited bot messages from spoofing a mentioned DM user. (#71700) Thanks @vincentkoc.",
      "Codex: consume unauthorized bound conversation inbound claims before they can fall through to other claim handlers or enqueue Codex turns. (#71702) Thanks @vincentkoc.",
      "Codex media understanding: require approval-checked app-server image turns while explicitly declining tool, file, permission, and elicitation approval requests for the bounded image worker. (#71703) Thanks @vincentkoc.",
      "Agents/Claude CLI: allow large live `stream-json` JSONL lines up to the existing per-turn raw limit, preventing large Telegram, WebChat, MCP, and image turns from aborting on the old stdout buffer cap. Fixes #71793, #71080, and #70766. (#71897) Thanks @chacher86, @shivamgrover21, and @tpjordan.",
      "Agents/Claude CLI: unwrap nested Claude result envelopes in CLI JSON output so delegated agent responses surface as final text instead of raw result JSON. (#66819) Thanks @mraleko.",
      "Agents/Claude CLI: apply the configured 1M context window override to eligible Claude CLI Opus and Sonnet models when `context1m` is enabled. (#70863) Thanks @bidadh.",
      "Models/status: report fresh Claude CLI native auth instead of stale stored `anthropic:claude-cli` profile expiry when local credentials are current. Fixes #71256. (#71332) Thanks @matthiasjanke and @neeravmakwana.",
      "CLI backends: compact OpenClaw transcripts after over-budget CLI turns and reseed fresh CLI sessions from the compacted transcript instead of stale external resume state. Fixes #68329. (#71916) Thanks @obviyus.",
      "Telegram: keep default tool progress messages visible when answer preview streaming is disabled. (#71825) Thanks @VACInc.",
      "Configure/models: clear deselected model fallbacks when updating the model picker allowlist, including provider-scoped setup flows. (#71596) Thanks @rubencu.",
      "Agents/streaming: strip namespaced `<antml:thinking>` reasoning tags from streamed assistant replies before user-visible text is emitted. (#69288) Thanks @xialonglee."
    ]
  },
  {
    "version": "2026.4.24",
    "date": "2026.4.24",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424",
    "features": [
      {
        "title": "Google Meet joins OpenClaw as a bundled participant plugin, with personal G...",
        "description": "Google Meet joins OpenClaw as a bundled participant plugin, with personal Google auth, Chrome/Twilio realtime sessions, paired-node Chrome support, artifact/attendance exports, and recovery tooling for already-open Meet tabs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "DeepSeek V4 Flash and V4 Pro are in the bundled catalog, V4 Flash is the on...",
        "description": "DeepSeek V4 Flash and V4 Pro are in the bundled catalog, V4 Flash is the onboarding default, and DeepSeek thinking/replay behavior is fixed for follow-up tool-call turns.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Talk, Voice Call, and Google Meet can use realtime voice loops that consult...",
        "description": "Talk, Voice Call, and Google Meet can use realtime voice loops that consult the full OpenClaw agent for deeper tool-backed answers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Providers/OpenRouter",
        "description": "add native video generation through `video_generate`, so OpenRouter video models work with `OPENROUTER_API_KEY`. (#72700) Thanks @notamicrodose.",
        "href": "https://github.com/openclaw/openclaw/pull/72700"
      },
      {
        "title": "Browser automation gets coordinate clicks, longer default action budgets, p...",
        "description": "Browser automation gets coordinate clicks, longer default action budgets, per-profile headless overrides, and steadier tab reuse/recovery.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugin and model infrastructure is lighter at startup",
        "description": "static model catalogs, manifest-backed model rows, lazy provider dependencies, and external runtime-dependency repair for packaged installs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugin SDK/tool-result transforms",
        "description": "remove the Pi-only `api.registerEmbeddedExtensionFactory(...)` compatibility path. Bundled tool-result rewrites must use `api.registerAgentToolResultMiddleware(...)` with `contracts.agentToolResultMiddleware` declaring the targeted harnesses, so transforms run consistently across Pi and Codex app-server dynamic tools. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Control UI/Talk",
        "description": "add browser WebRTC realtime voice sessions backed by OpenAI Realtime, with Gateway-minted ephemeral client secrets and `openclaw_agent_consult` handoff to the full OpenClaw agent.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/Google Meet",
        "description": "add a bundled participant plugin with personal Google auth, explicit meeting URL joins, Chrome and Twilio realtime transports, paired-node `chrome-node` support for Parallels-style Chrome/BlackHole/SoX hosts, and full-agent consults inside live voice sessions. (#70765)",
        "href": "https://github.com/openclaw/openclaw/pull/70765"
      },
      {
        "title": "Plugins/Google Meet",
        "description": "add artifact and attendance workflows for conference records, recordings, transcripts, smart notes, and participant sessions, including markdown/file output, latest-record lookup, and `--all-conference-records` history scans.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/Google Meet",
        "description": "add OAuth and browser-state doctor/recovery flows, including `googlemeet doctor --oauth` and `recover_current_tab`/`recover-tab` so agents can inspect already-open Meet tabs without opening duplicates.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/Voice Call",
        "description": "expose the shared `openclaw_agent_consult` realtime tool so live phone calls can ask the full OpenClaw agent for deeper/tool-backed answers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/Voice Call",
        "description": "add `voicecall setup` and a dry-run-by-default `voicecall smoke` command so Twilio/provider readiness can be checked before placing a live test call.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Providers/Google",
        "description": "add a Gemini Live realtime voice provider for backend Voice Call and Google Meet audio bridges, with bidirectional audio and function-call support.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Providers/Google",
        "description": "let Gemini TTS prepend configured `audioProfile` and `speakerName` prompt text for reusable speech style control. Thanks @tdack.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Gateway/VoiceClaw",
        "description": "add a realtime brain WebSocket endpoint backed by Gemini Live, with owner-auth gating and async OpenClaw tool handoff. (#70938) Thanks @yagudaev.",
        "href": "https://github.com/openclaw/openclaw/pull/70938"
      },
      {
        "title": "Control UI",
        "description": "refine the agent Tool Access panel with compact live-tool chips, collapsible tool groups, direct per-tool toggles, and clearer runtime/source provenance. (#71405) Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/71405"
      },
      {
        "title": "Control UI/chat",
        "description": "add a Steer action on queued messages so a browser follow-up can be injected into the active run without retyping it.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Browser",
        "description": "add viewport coordinate clicks for managed and existing-session automation, plus `openclaw browser click-coords` for CLI use. (#54452) Thanks @dluttz.",
        "href": "https://github.com/openclaw/openclaw/pull/54452"
      },
      {
        "title": "Browser",
        "description": "add `browser.actionTimeoutMs` and use a 60s default action budget so healthy long browser waits do not fail at the client transport boundary. (#62589) Thanks @andyylin.",
        "href": "https://github.com/openclaw/openclaw/pull/62589"
      },
      {
        "title": "Browser/config",
        "description": "support per-profile `browser.profiles.<name>.headless` overrides for locally launched browser profiles, so one profile can run headless without forcing all browser profiles headless. Thanks @nakamotoliu.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Matrix",
        "description": "require full cross-signing identity trust for self-device verification and add `openclaw matrix verify self` so operators can establish that trust from the CLI. (#70401) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/70401"
      },
      {
        "title": "Gradium",
        "description": "add a bundled text-to-speech provider with voice-note and telephony output support. (#64958) Thanks @LaurentMazare.",
        "href": "https://github.com/openclaw/openclaw/pull/64958"
      },
      {
        "title": "Memory-core/hybrid search",
        "description": "expose raw `vectorScore` and `textScore` alongside the combined `score` on hybrid memory search results, so callers can inspect vector-versus-text retrieval contribution before temporal decay or MMR reordering. Fixes #68166. (#68286) Thanks @ajfonthemove.",
        "href": "https://github.com/openclaw/openclaw/pull/68286"
      },
      {
        "title": "Dependencies/memory",
        "description": "stop installing `node-llama-cpp` by default; local embeddings now load it only when operators install the optional runtime package. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Providers/DeepSeek",
        "description": "add DeepSeek V4 Flash and V4 Pro to the bundled catalog and make V4 Flash the onboarding default. Thanks @lsdsjy.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Dependencies/Pi",
        "description": "update bundled Pi packages to `0.70.2`, use Pi's upstream `gpt-5.5` and DeepSeek V4 catalog metadata, and keep only local `gpt-5.5-pro` forward-compat handling. Thanks @lsdsjy.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Models/CLI",
        "description": "speed up model listing with safe static catalogs for bundled providers, narrower row-source orchestration, and less broad registry enumeration for default `openclaw models list`. (#70632, #70883, #70867) Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/70632"
      },
      {
        "title": "Models/commands",
        "description": "deprecate `/models add` so chat attempts now return a deprecation message instead of writing model configuration, and remove the add action from `/models` provider menus. (#71175) Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/71175"
      },
      {
        "title": "Models/catalog",
        "description": "add manifest-sourced model rows, duplicate provider/model conflict reporting, and shared `src/model-catalog` normalization for provider index, cache, onboarding, and listing consumers without loading provider runtime. (#71368, #71360) Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/71368"
      },
      {
        "title": "Codex harness/context-engine",
        "description": "run context-engine bootstrap, assembly, post-turn maintenance, and engine-owned compaction in Codex app-server sessions while keeping native Codex thread state and compaction auditable. (#70809) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/70809"
      },
      {
        "title": "Codex runtime plan",
        "description": "consolidate contract-first Pi/Codex parity coverage and accept legacy Codex auth-provider aliases in app-server profile login and refresh paths. (#71096) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/71096"
      },
      {
        "title": "Codex harness",
        "description": "bridge Codex-native tool hooks into OpenClaw plugin hooks and approvals, with bounded relay payloads and approval spam protection. (#71008) Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/pull/71008"
      },
      {
        "title": "Plugin SDK/Codex harness",
        "description": "add provider-owned transport/auth/follow-up seams and harness result classification so Codex-style runtimes can participate in fallback policy without core special-casing. (#70772) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/70772"
      },
      {
        "title": "Gateway/nodes",
        "description": "add disabled-by-default `gateway.nodes.pairing.autoApproveCidrs` for first-time node pairing from explicit trusted CIDRs, while keeping operator/browser pairing and all upgrade flows manual. Fixes #60800. Thanks @sahilsatralkar.",
        "href": "https://github.com/openclaw/openclaw/issues/60800"
      },
      {
        "title": "WebChat/sessions",
        "description": "keep runtime-only prompt context out of visible transcript history and scrub legacy wrappers from session history surfaces. Thanks @91wan.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Agents/bootstrap",
        "description": "add `agents.defaults.contextInjection: \"never\"` to disable workspace bootstrap file injection for agents that fully own their prompt lifecycle. (#65006) Thanks @xDarkicex.",
        "href": "https://github.com/openclaw/openclaw/pull/65006"
      },
      {
        "title": "Plugins/manifest",
        "description": "add a `modelCatalog` contract for provider-owned model rows, aliases, suppression rules, and discovery mode metadata without loading plugin runtime. (#71342) Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/71342"
      },
      {
        "title": "Plugins/setup",
        "description": "honor explicit `setup.requiresRuntime: false` as a descriptor-only setup contract while keeping omitted values on the legacy setup-api fallback path. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/setup",
        "description": "report descriptor/runtime drift when setup-api registrations disagree with `setup.providers` or `setup.cliBackends`, without rejecting legacy setup plugins. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/setup",
        "description": "include `setup.providers[].envVars` in generic provider auth/env lookups and warn non-bundled plugins that still rely on deprecated `providerAuthEnvVars` compatibility metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/setup",
        "description": "derive generic provider setup choices from descriptor-safe `setup.providers[].authMethods` before falling back to setup runtime. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/setup",
        "description": "surface manifest provider auth choices directly in provider setup flow before falling back to setup runtime or install-catalog choices. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/setup",
        "description": "warn when descriptor-only setup plugins still ship ignored setup runtime entries, keeping `setup.requiresRuntime: false` semantics explicit without breaking existing metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/channels",
        "description": "use manifest `channelConfigs` for read-only external channel discovery when no setup entry is available or setup descriptors declare runtime unnecessary. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugin hooks",
        "description": "expose first-class run, message, sender, session, and trace correlation fields on message hook contexts and run lifecycle events. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/PDF",
        "description": "move local PDF extraction into a bundled `document-extract` plugin so core no longer owns `pdfjs-dist` or PDF image-rendering dependencies. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Providers/Anthropic Vertex",
        "description": "move the Vertex SDK runtime behind the bundled provider plugin so core no longer owns that provider-specific dependency. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/activation",
        "description": "expose activation plan reasons and a richer plan API so callers can inspect why a plugin was selected while preserving existing id-list activation behavior. (#70943) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/70943"
      },
      {
        "title": "Plugins/source metadata",
        "description": "expose normalized install-source facts on provider and channel catalogs so onboarding can explain npm pinning, integrity state, and local availability before runtime loads. (#70951) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/70951"
      },
      {
        "title": "Plugins/catalog",
        "description": "pin the official external WeCom channel source to an exact npm release plus dist integrity, with a guard that official external sources stay integrity-pinned. (#70997) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/70997"
      },
      {
        "title": "Plugins/source metadata",
        "description": "warn when `openclaw.install.defaultChoice` is invalid or points at a missing source, keeping catalog diagnostics explicit without breaking existing plugins. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/source metadata",
        "description": "warn when `openclaw.install.expectedIntegrity` is present without a valid npm source, keeping orphaned integrity metadata visible without rejecting existing plugins. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/source metadata",
        "description": "warn when provider or channel catalog package identity drifts from `openclaw.install.npmSpec`, keeping diagnostics visible without rejecting compatible external catalogs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/Bonjour",
        "description": "move LAN Gateway discovery advertising into a default-enabled bundled plugin with its own `@homebridge/ciao` dependency, so users can disable Bonjour without cutting wide-area discovery. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Plugins/compatibility",
        "description": "add a central plugin compatibility registry and docs for SDK/config/setup/runtime deprecation records, including dated migration metadata for legacy harness naming and other plugin-facing aliases. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "TUI/dependencies",
        "description": "remove direct `cli-highlight` usage from the OpenClaw TUI code-block renderer, keeping themed code coloring without the extra root dependency. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Dependencies/SBOM",
        "description": "add an ownership-backed dependency risk report for root closure size, native/build-risk packages, and missing owner records. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "export run, model-call, and tool-execution diagnostic lifecycle events as OTEL spans without retaining live span state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "accept opt-in `diagnostics.otel.captureContent` controls for future model/tool content span attributes while keeping raw content export disabled by default. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "add a lightweight diagnostic trace-context carrier for future span correlation without adding OTEL SDK state to core. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "attach diagnostic trace context to exported OTEL logs so log records can correlate with future spans without adding retained process state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "pass immutable per-run diagnostic trace context through agent and tool hook contexts, and parent exported diagnostic spans from validated context without retaining global trace state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "make exporter startup restart-safe so config reloads do not retain stale SDKs, log transports, or diagnostic event listeners. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "emit bounded exec-process diagnostics and export them as `openclaw.exec` spans without exposing command text, working directories, or container identifiers. (#70424) Thanks @jlapenna.",
        "href": "https://github.com/openclaw/openclaw/pull/70424"
      },
      {
        "title": "Diagnostics/OTEL",
        "description": "support `OPENCLAW_OTEL_PRELOADED=1` so the plugin can reuse an already-registered OpenTelemetry SDK while keeping OpenClaw diagnostic listeners wired. (#70424) Thanks @jlapenna.",
        "href": "https://github.com/openclaw/openclaw/pull/70424"
      },
      {
        "title": "Diagnostics",
        "description": "emit structured tool execution diagnostic events with trace context, timing, and redacted error metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "Diagnostics",
        "description": "emit structured run and model-call diagnostic events with trace context, duration, and non-message error metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026424"
      },
      {
        "title": "CLI/Gateway",
        "description": "make `gateway status` start faster by skipping plugin loading on the read-only status path. (#71364) Thanks @andyylin.",
        "href": "https://github.com/openclaw/openclaw/pull/71364"
      }
    ],
    "fixes": [
      "Packaged installs: preserve package-root runtime dependencies and their exported subpaths when bundled plugin runtime mirrors fall back to copying shared chunks, fixing Windows npm updates that could fail to load copied `dist` modules.",
      "Heartbeat: clamp oversized scheduler delays through the shared safe timer helper, preventing `every` values over Node's timeout cap from becoming a 1 ms crash loop. Fixes #71414. (#71478) Thanks @hclsys.",
      "Agents/heartbeat: stop injecting the heartbeat system prompt into non-heartbeat runs, preventing ordinary user replies from being suppressed as `HEARTBEAT_OK` acknowledgments. Fixes #69079. (#69278) Thanks @stainlu.",
      "MCP: retire one-shot embedded bundled MCP runtimes at run end, skip bundle-MCP startup when a runtime tool allowlist cannot reach bundle-MCP tools, and add `mcp.sessionIdleTtlMs` idle eviction for leaked session runtimes. Fixes #71106, #71110, #70389, and #70808.",
      "Gateway/restart continuation: durably hand restart continuations to a session-delivery queue before deleting the restart sentinel, recover queued continuation work after crashy restarts, and fall back to a session-only wake when no channel route survives reboot. (#70780) Thanks @fuller-stack-dev.",
      "Agents/tool-result pruning: harden the tool-result character estimator and context-pruning loops against malformed `{ type: \"text\" }` blocks created by void or undefined tool handler results, serializing non-string text payloads for size accounting so they cannot bypass trimming as zero-sized. Fixes #34979. (#51267) Thanks @cgdusek.",
      "Daemon/service-env: add Nix Home Manager profile bin directories to generated gateway service PATHs on macOS and Linux, honoring `NIX_PROFILES` right-to-left precedence and falling back to `~/.nix-profile/bin` when unset. Fixes #44402. (#59935) Thanks @jerome-benoit.",
      "Feishu: back off streaming-card creation after HTTP 400 startup failures, so unsupported card setups fall back without delaying every message. Fixes #56981. Thanks @JinnanDuan.",
      "Feishu/topic groups: key native Feishu/Lark topic-group sessions by `thread_id` so starter messages and replies with different `root_id` formats stay in the same `group_topic` conversation. Fixes #71438. Thanks @1335848090.",
      "Feishu: suppress duplicate final card delivery when idle closes a streaming card before the final payload arrives. (#68491) Thanks @MoerAI.",
      "Feishu: stop carrying inbound mention targets into every outbound reply, so fallback, error, and ack responses no longer cascade @mentions; agent prompts now treat those mentions as context only. Fixes #70065. Thanks @AxelHu.",
      "Signal: preserve sender attachment filenames and resolve missing MIME types from those filenames, so Linux `signal-cli` voice notes without `contentType` still enter audio transcription. Fixes #48614. Thanks @mindfury.",
      "Telegram/agents: suppress the phantom \"Agent couldn't generate a response\" fallback after a reply was already committed through the messaging tool. (#70623) Thanks @chinar-amrutkar.",
      "Models/CLI: show provider runtime `contextTokens` beside native `contextWindow` in `openclaw models list`, and align `openai-codex/gpt-5.5` with Codex's 272K runtime cap plus 400K native window. Fixes #71403.",
      "Dashboard/security: avoid writing tokenized Control UI URLs or SSH hints to runtime logs, keeping gateway bearer fragments out of console-captured logs readable through `logs.tail`. (#70029) Thanks @Ziy1-Tan.",
      "Providers/OpenRouter: treat DeepSeek refs as cache-TTL eligible without injecting Anthropic cache-control markers, aligning context pruning with OpenRouter-managed prompt caching. (#51983) Thanks @QuinnH496.",
      "Control UI/browser: defer temp-dir access-mode constants until Node-only temp-dir resolution runs, preventing browser bundles from crashing when `node:fs` constants are stubbed. (#48930) Thanks @Valentinws.",
      "Discord/cron: deliver text-only isolated cron and heartbeat announce output from the canonical final assistant text once, avoiding duplicate Discord posts when streamed block payloads and the final answer contain the same content. Fixes #71406. Thanks @alexgross21.",
      "macOS Gateway: wait for launchd to reload the exited Gateway LaunchAgent before bootstrapping repair fallback, preventing config-triggered restarts from leaving the service not loaded. Fixes #45178. Thanks @vincentkoc.",
      "macOS Gateway: tolerate launchctl bootstrap's already-loaded exit during restart fallback and use non-killing kickstart after bootstrap, avoiding a second race that can unload the LaunchAgent. Fixes #41934. Thanks @zerone0x.",
      "macOS Gateway: rewrite stale LaunchAgent plists before restart fallback bootstrap, matching install repair behavior when `gateway restart` has to re-register launchd. Thanks @maybegeeker.",
      "TTS/hooks: preserve audio-only TTS transcripts for `message_sending` and `message_sent` hooks without rendering the transcript as a media caption. Thanks @zqchris.",
      "WhatsApp/TTS: preserve `audioAsVoice` through shared media payload sends and the WhatsApp outbound adapter, so `[[audio_as_voice]]` reply payloads keep their voice-note intent when routed through `sendPayload`. Fixes #66053. Thanks @masatohoshino.",
      "Control UI/WebChat: hide heartbeat prompts, `HEARTBEAT_OK` acknowledgments, and internal-only runtime context turns from visible chat history while leaving the underlying transcript intact. Fixes #71381. Thanks @gerald1950ggg-ai.",
      "Control UI/chat: keep optimistic user and assistant tail messages visible when a final history refresh briefly returns an older snapshot, preventing message cards from flash-disappearing until the next refresh. Fixes #71371. Thanks @WolvenRA.",
      "Talk/TTS: resolve configured extension speech providers from the active runtime registry before provider-list discovery, so Talk mode no longer rejects valid plugin speech providers as unsupported.",
      "Sessions/subagents: stop stale ended runs and old store-only child reverse links from reappearing in `childSessions`, while keeping live descendants and recently-ended children visible. Fixes #57920.",
      "Subagents: recover child sessions after recoverable wait transport failures without exposing an extra wait state, and keep terminal lifecycle timer ordering deterministic. (#71423) Thanks @ZiPengWei.",
      "Subagents: stop stale unended runs from counting as active or pending forever, while preserving restart-aborted recovery for recoverable child sessions. Fixes #71252. Thanks @hclsys.",
      "Gateway/tools: allow `POST /tools/invoke` to reach plugin-backed catalog tools such as `browser` when no core implementation exists, while still preferring built-in tools for real core names. Thanks @chat2way.",
      "Browser/security: require `operator.admin` for the `browser.request` gateway method, matching the host/browser-node control authority exposed by that route. Thanks @RichardCao.",
      "Browser/profiles: allow local managed profiles to override `browser.executablePath`, so different profiles can launch different Chromium-based browsers. Thanks @nobrainer-tech.",
      "Agents/replay: repair displaced or missing tool results before strict provider replay, use Codex-compatible `aborted` outputs for OpenAI Responses history, and drop partial aborted/error transport turns before retries.",
      "Browser/startup: deduplicate concurrent lazy-start calls per profile so simultaneous browser tool requests no longer race into duplicate Chrome launches and `PortInUseError`. (#61772) Thanks @sukhdeepjohar.",
      "Browser/profiles: recover from stale Chromium `Singleton*` profile locks after crashes or host moves by clearing dead/foreign locks and retrying launch once. Thanks @seanc-dev.",
      "Browser/existing-session: keep Chrome MCP status probes transport-only and ephemeral, and retry stale cached Playwright attaches once so idle profile checks no longer poison the next real attach. (#57245) Thanks @josephbergvinson.",
      "Cron/exec: suppress automatic background exec completion wakes only for silent cron jobs with `delivery.mode=\"none\"` while keeping webhook and announce runs observable. (#71391) Thanks @goldmar.",
      "Reply media: allow sandboxed replies to deliver OpenClaw-managed `media/outbound` and `media/tool-*` attachments without treating them as sandbox escapes, while keeping alias-escape checks on the managed media root. Fixes #71138. Thanks @mayor686, @truffle-dev, and @neeravmakwana.",
      "CLI/agent: keep `openclaw agent --json` stdout reserved for the JSON response by routing gateway, plugin, and embedded-fallback diagnostics to stderr before execution starts. Fixes #71319.",
      "Agents/Gemini: retry reasoning-only, empty, and planning-only Gemini turns instead of letting sessions silently stall. Fixes #71074. (#71362) Thanks @neeravmakwana.",
      "Providers/DeepSeek: add missing `reasoning_content` placeholders for replayed assistant tool-call turns when DeepSeek V4 thinking is enabled, so switching an existing session to `deepseek-v4-flash` or `deepseek-v4-pro` no longer trips the provider's 400 replay check. Fixes #71372. Thanks @yangyang1719.",
      "Exec approvals: allow bare command-name allowlist patterns to match PATH-resolved executable basenames without trusting `./tool` or absolute path-selected binaries. Fixes #71315. Thanks @chen-zhang-cs-code and @dengluozhang.",
      "Config/recovery: skip whole-file last-known-good rollback when invalidity is scoped to `plugins.entries.*`, preserving unrelated user settings during plugin schema or host-version skew. Fixes #71289. Thanks @jalehman.",
      "Agents/tools: keep resolved reply-run configs from being overwritten by stale runtime snapshots, and let empty web runtime metadata fall back to configured provider auto-detection so standard and queued turns expose the same tool set. Fixes #71355. Thanks @c-g14.",
      "Agents/TTS: pass the resolved shared config into the `tts` tool, so tool-triggered speech uses configured providers and voices instead of falling back to a fresh config load.",
      "Reply media: strip `MEDIA:` attachments from final replies when the same media already went out through block streaming, preventing duplicate Telegram voice notes and files. Fixes #65468. Thanks @aurora-openclaw.",
      "Agents/TTS: preserve voice media when a tool-generated reply is paired with an exact `NO_REPLY` sentinel, stripping the sentinel text instead of dropping the audio payload. Fixes #66092.",
      "Compaction: honor explicit `agents.defaults.compaction.keepRecentTokens` for manual `/compact`, re-distill safeguard summaries instead of snowballing previous summaries, and enable safeguard summary quality checks by default. Fixes #71357. Thanks @WhiteGiverMa.",
      "Sessions: honor configured `session.maintenance` settings during load-time maintenance instead of falling back to default entry caps. Fixes #71356. Thanks @comolago.",
      "Browser/sandbox: pass the resolved `browser.ssrfPolicy` into sandbox browser bridges and refresh cached bridges when the effective policy changes, so sandboxed browser navigation honors private-network opt-ins. Fixes #45153 and #57055. Thanks @jzakirov, @zuoanCo, and @kybrcore.",
      "Browser/proxy: keep Gateway/provider proxy environment variables from proxying the OpenClaw-managed browser, so `HTTP_PROXY` and `HTTPS_PROXY` no longer block ordinary browser navigation. Fixes #71358. Thanks @Sanjays2402.",
      "Agents/MCP: validate draft-2020-12 MCP tool output schemas with a draft-aware bundle-MCP client validator, so external MCP servers no longer fail catalog/tool execution with missing schema refs. Fixes #68772 and #70196. Thanks @mwiesen.",
      "Dashboard/Windows: open Control UI and OAuth URLs through the system URL handler without `cmd.exe` parsing or PATH-based `rundll32` lookup, and reject non-HTTP browser-open inputs. Fixes #71098. Thanks @Sanjays2402.",
      "Config/doctor: reject legacy `secretref-env:<ENV_VAR>` marker strings on SecretRef credential paths and migrate valid markers to structured env SecretRefs with `openclaw doctor --fix`. Fixes #51794. Thanks @halointellicore.",
      "Plugin SDK/browser: export the resolved browser tab-cleanup config type through the browser profile facade, keeping SDK subpath contracts aligned.",
      "Providers/OpenAI: separate API-key and Codex sign-in onboarding groups, and avoid replaying stale OpenAI Responses reasoning blocks after a model route switch.",
      "Providers/OpenAI-compatible: forward `prompt_cache_key` on Completions requests only for providers that opt in with `compat.supportsPromptCacheKey`, keeping default proxy payloads unchanged. Fixes #69272.",
      "Providers/OpenAI-compatible: skip null or non-object streaming chunks from custom providers instead of failing the turn after partial output. Fixes #51112.",
      "Providers/OpenAI-compatible: treat singular MLX-style `finish_reason: \"tool_call\"` as tool use instead of a provider error. Fixes #61499.",
      "Docs/TTS: clarify that legacy flat TTS provider config blocks are repaired by `openclaw doctor --fix`, not accepted by strict runtime schema on load. Fixes #56220.",
      "Plugins/OpenCode: strip unsupported disabled Responses reasoning payloads for OpenCode image understanding. Fixes #70252.",
      "Plugins/OpenCode/OpenCode Go: register image understanding metadata so the image tool is available for OpenCode catalog models with vision support. Fixes #70482 and #61789.",
      "Plugins/OpenCode Go: update the default Go catalog model to `opencode-go/kimi-k2.6`. Thanks @masrlinu.",
      "Providers/ElevenLabs: omit the MP3-only `Accept` header for PCM telephony synthesis, so Voice Call requests for `pcm_22050` no longer receive MP3 audio. Fixes #67340. Thanks @marcchabot.",
      "Providers/MiniMax TTS: truncate fractional pitch overrides before sending T2A requests, matching MiniMax's integer pitch contract while preserving fractional speed and volume. Fixes #62144.",
      "Providers/MiniMax TTS: transcode voice-note targets to Opus so Feishu/Telegram receive native voice messages instead of MP3 file attachments. Fixes #63540, #64134, and #70445.",
      "Providers/Microsoft TTS: keep allowlisted bundled speech providers discoverable even when another speech plugin has already registered, so Edge/Microsoft TTS is available alongside OpenAI. Fixes #62117 and #66850.",
      "Providers/Microsoft TTS: honor legacy `messages.tts.providers.edge` voice settings after normalizing Edge TTS to the Microsoft provider. Fixes #64153.",
      "Providers/OpenRouter: add an OpenRouter TTS provider using the OpenAI-compatible `/audio/speech` endpoint and `OPENROUTER_API_KEY`. Fixes #71268.",
      "macOS Talk Mode: retry failed local ElevenLabs stream playback through gateway `talk.speak` before falling back to the system voice, so configured ElevenLabs voices still play when streaming playback fails. Fixes #65662.",
      "Plugins/Voice Call: reap stale pre-answer calls by default, honor configured TTS timeouts for Twilio media-stream playback, and fail empty telephony audio instead of completing as silence. Fixes #42071; supersedes #60957. Thanks @Ryce and @sliekens.",
      "Plugins/Voice Call: fail fast when Twilio, Telnyx, or Plivo would fall back to a loopback/private webhook URL, so calls do not start with an unreachable callback endpoint. Thanks @artemgetmann.",
      "Plugins/Voice Call: resolve queued-but-not-yet-playing Twilio TTS entries when barge-in or stream teardown clears the playback queue, so callers awaiting `queueTts()` do not hang. Thanks @kevinWangSheng.",
      "Plugins/Voice Call: terminate expired restored call sessions with the provider and restart restored max-duration timers with only the remaining duration, preventing stale outbound retry loops after Gateway restarts. Fixes #48739. Thanks @mira-solari.",
      "Plugins/Voice Call: start provider STT after Telnyx outbound conversation greetings and pass configured Telnyx voice IDs through to the speak action. Fixes #56091. Thanks @Roshan.",
      "Skills: honor legacy `metadata.clawdbot` requirements and installer hints when `metadata.openclaw` is absent, so older skills no longer appear ready when required binaries are missing. Fixes #71323. Thanks @chen-zhang-cs-code.",
      "Browser/config: expand `~` in `browser.executablePath` before Chromium launch, so home-relative custom browser paths no longer fail with `ENOENT`. Fixes #67264. Thanks @Quratulain-bilal.",
      "Channels/streaming: keep Telegram tool-progress preview updates enabled by default to match released behavior, document `streaming.preview.toolProgress: false` for disabling only those status lines, and prevent preview progress text from triggering Telegram Markdown links, Discord mentions, or Slack mrkdwn mentions. Fixes #71320. Thanks @neeravmakwana.",
      "Gateway/sessions: copy the oversized `sessions.json` to a rotation backup before the atomic rewrite instead of renaming the live store away, so a crash during rotation keeps the existing session-to-transcript mapping authoritative. Fixes #68229. Thanks @jjjojoj.",
      "Providers/OpenAI-compatible: strip OpenAI-only Completions `store` from proxy payloads and allow `extra_body`/`extraBody` passthrough params for provider-specific request fields. Fixes #61826 and #69717.",
      "Discord/subagents: preserve thread-bound completion delivery by keeping the requester-agent announce path primary and falling back to direct thread sends only when the announce produces no visible output. (#71064) Thanks @DolencLuka.",
      "Discord/proxy: serialize proxied multipart attachment uploads with undici `FormData`, so Discord media sends work through configured REST proxies. (#71383) Thanks @TC500.",
      "Browser/tool: give Chrome MCP existing-session manage calls a longer default timeout, pass explicit tool timeouts through tab management, and recover stale selected-page MCP sessions instead of forcing a manual reset.",
      "Browser/sandbox: clean up idle tracked tabs opened by primary-agent browser sessions, while preserving active tab reuse and lifecycle cleanup for subagents, cron, and ACP sessions. Fixes #71165. Thanks @dwbutler.",
      "Plugins/Voice Call: reuse the webhook runtime across in-process plugin contexts, avoiding `EADDRINUSE` when agent tools or CLI commands run while the Gateway already owns the voice webhook port. Fixes #58115. Thanks @sfbrian.",
      "Plugins/Voice Call: answer accepted Telnyx inbound Call Control legs on `call.initiated`, so webhooks that reach OpenClaw no longer leave the caller ringing until hangup. Fixes #58231 and #40131. Thanks @KonsultDigital.",
      "Plugins/Voice Call: coalesce concurrent webhook server starts on the same runtime instance, avoiding a second `listen()` bind when overlapping startup paths race. Thanks @education-01.",
      "Plugins/Voice Call: pin voice response sessions to `responseModel` before embedded agent runs, avoiding live-session model switch failures when the global default model differs. Fixes #60118. Thanks @xinbenlv.",
      "Plugins/Voice Call: add `agentId` for voice response generation, so phone calls can use a dedicated agent workspace instead of always routing through `main`. Fixes #42155. Thanks @TheOpie.",
      "Plugins/Voice Call: scope embedded voice response sandbox resolution to the selected voice agent, so implicit `main` voice sessions respect `agents.defaults.sandbox.mode: \"off\"` even when other agents define sandboxed Docker binds. Fixes #56367. Thanks @crpol.",
      "Media tools: honor the configured web-fetch SSRF policy for media understanding, image/music/video generation references, and PDF inputs, so explicit RFC2544 opt-ins cover WebChat OSS uploads without weakening defaults. Fixes #71300. (#71321) Thanks @neeravmakwana.",
      "Agents/TTS: suppress successful spoken transcripts from verbose chat tool output when structured voice media is already queued, while preserving text output for non-builtin tool-name collisions. Fixes #71282. Thanks @neeravmakwana.",
      "Plugins/Google Meet: reuse active Meet tabs across harmless URL query differences, recover already-open tabs after browser timeouts, surface manual-action details for login or permission blockers, and let `googlemeet recover-tab` inspect paired browser nodes from the terminal.",
      "Cron/isolated sessions: clear stale runtime, lifecycle, auth, model, exec, heartbeat, usage, privilege, routing, and delivery artifacts when creating a fresh isolated run, and persist per-run session rows as snapshots so old base-session state no longer leaks into new cron executions. Thanks @vincentkoc.",
      "Gateway/sessions: recover main-agent turns interrupted by a gateway restart from stale transcript-lock evidence, avoiding stuck `status: \"running\"` sessions without broad post-boot transcript scans. Fixes #70555. Thanks @bitloi.",
      "Codex approvals: sanitize MCP elicitation approval titles, descriptions, and display parameters before forwarding them to OpenClaw approval prompts. (#71343) Thanks @Lucenx9.",
      "Codex approvals: keep command approval responses within Codex app-server `availableDecisions`, including deny/cancel fallbacks for prompts that do not offer `decline`. (#71338) Thanks @Lucenx9.",
      "Codex harness: reject same-thread app-server notifications without `turnId` or `turn.id` after a bound turn starts, preventing unscoped events from mutating or completing the active reply. (#71317) Thanks @Lucenx9.",
      "Plugins/Google Meet: include live Chrome-node readiness and Parallels recovery checks in setup, so stale node tokens or disconnected VM browsers are visible before an agent opens a meeting.",
      "Context engine: keep safeguard compaction checks active after context-engine windowing and for `ownsCompaction` engines, so large transcripts can compact before prompt submission instead of waiting for provider overflow. Fixes #71325.",
      "Approvals: compact structured home-directory paths to `~` across Codex permission prompts and exec approval metadata without repeating them as a separate high-risk warning, while preserving filesystem root and wildcard host warnings.",
      "Plugins/runtime deps: isolate the internal npm cache used for bundled plugin runtime-dependency repair and let package updates refresh/verify already-current installs, so failed update or sudo doctor runs can be repaired by rerunning `openclaw update`.",
      "Agents/delete: keep `--json` output machine-readable and retain workspaces that overlap another agent's workspace instead of moving shared state to Trash. Fixes #70889 and #70890. (#70897) Thanks @kaseonedge.",
      "Browser/screenshot: honor `timeoutMs` through host and node screenshot requests, bound raw CDP screenshot commands, and avoid beyond-viewport CDP capture for ordinary viewport screenshots, so Windows Chrome captures no longer hang past the requested deadline. Fixes #68330. Thanks @Woodylai24.",
      "Telegram/model picker: show configured model display names when browsing models through provider buttons, matching typed `/models <provider>` output. Fixes #70560. (#71016) Thanks @iskim77.",
      "Plugins/runtime deps: stage bundled plugin runtime dependencies for packaged/global installs in an external runtime root and retain already staged deps across repairs, avoiding package-tree update races and npm pruning after upgrades.",
      "Plugins/runtime deps: log bundled plugin runtime-dependency staging before synchronous npm installs start and include elapsed timing afterward, so first boot after upgrades no longer looks hung while dependencies are being repaired.",
      "Memory/Bedrock: skip Bedrock during automatic memory embedding selection when AWS credentials are unavailable, so `memory_search` can fall back to lexical search instead of failing on the first embed call. Fixes #71143 via #71245. Thanks @bitloi.",
      "Agents/failover: forward embedded run abort signals into provider-owned model streams, cap implicit LLM idle watchdogs below long run timeouts, and mark 429 responses without usable retry timing as non-retryable so GitHub Copilot rate limits fail over or surface promptly instead of hanging until run timeout. Fixes #71120.",
      "Plugins/Google Meet: make meeting creation join by default, with an explicit URL-only opt-out, so agents that create a Meet also enter it.",
      "Telegram/polling: persist accepted update offsets before long-running handlers complete so poller restarts do not replay already-ingested updates, while keeping same-process retries for handler failures.",
      "Telegram/config: include generated Telegram channel config schema metadata in packaged plugin manifests so forum-topic/group config is accepted before runtime loads.",
      "CLI/Claude: include user-configured `mcp.servers` in the strict Claude CLI MCP bundle config, matching Pi runs while preserving the OpenClaw loopback override. Fixes #70909. Thanks @keishingu.",
      "Browser/tool: keep explicit AI snapshots from inheriting the efficient role-snapshot default and preserve numeric Playwright AI refs, so `--format ai` remains a real AI snapshot path. Fixes #62550. Thanks @ly85206559.",
      "Gateway/config: keep in-process config patch reload comparisons on the resolved source snapshot when `${VAR}` env refs are restored on disk, avoiding false full gateway restarts for unchanged gateway/plugin secrets. Fixes #71208. Thanks @robbiethompson18.",
      "Slack/messages: serialize write-client requests and whole outbound sends per target so rapid multi-message Slack replies preserve send order. Fixes #69101. (#69105) Thanks @nightq and @ztexydt-cqh.",
      "Slack/messages: keep Slack bot tokens out of internal message-ordering and DM cache keys.",
      "Slack/exec approvals: resolve native approval button clicks over the Gateway instead of delivering `/approve ...` as plain agent text, preserving retry buttons if Gateway resolution fails. Fixes #71023. (#71025) Thanks @marusan03.",
      "Browser/tool: expose browser doctor diagnostics to agents and extend `openclaw doctor` browser readiness notes for managed Chromium launch prerequisites. (#62948, #62936) Thanks @seanc-dev.",
      "Slack/files: return non-image `download-file` results as local file paths instead of image payloads, and include Slack file IDs in inbound file placeholders so agents can call `download-file`. Fixes #71212. Thanks @teamrazo.",
      "Browser control: scope standalone loopback auth to the resolved active gateway credential and fail closed when password mode lacks a resolved password, so inactive tokens or passwords no longer authorize browser routes. Fixes #65626. (#65639) Thanks @coygeek.",
      "Control UI/Codex harness: emit native Codex app-server assistant and lifecycle completion events so live webchat runs stop spinning without needing a transcript reload fallback. (#70815) Thanks @lesaai.",
      "Agents/sessions: persist the runtime-resolved context budget from embedded agent runs, so Codex GPT-5.5 sessions keep the catalog/runtime context cap instead of falling back to the generic 200k status value. Fixes #71294. Thanks @tud0r.",
      "Agents/tools: fail runs before model submission when explicit tool allowlists resolve to no callable tools, preventing text-only hallucinated tool results for missing tools such as plugin commands that were not registered. Fixes #71292.",
      "Agents/embedded: skip provider submission when an embedded run has no prompt, replay history, or prompt-local images, preventing empty OpenAI Responses requests from surfacing provider errors into user channels. Fixes #71130.",
      "Providers/Google: map `/think adaptive` to Gemini dynamic thinking instead of a fixed medium/high budget, using Gemini 3's provider default and Gemini 2.5's `thinkingBudget: -1`. Fixes #71316.",
      "Providers/MiniMax: keep M2.7 chat model metadata text-only so image tool requests route through `MiniMax-VL-01` instead of the Anthropic-compatible chat endpoint. Fixes #71296. Thanks @ilker-cevikkaya.",
      "Discord/replies: run `message_sending` plugin hooks for Discord reply delivery, including DM targets, so plugins can transform or cancel outbound Discord replies consistently with other channels. Fixes #59350. (#71094) Thanks @wei840222.",
      "Discord/replies: preserve single-use native reply semantics across shared payload fallback, component, voice, and queued delivery paths, so explicit reply tags no longer consume implicit reply slots and chunked fallback sends reply only once.",
      "Control UI/commands: carry provider-owned thinking option ids/labels in session rows and defaults so fresh sessions show and accept dynamic modes such as `adaptive`, `xhigh`, and `max`. Fixes #71269. Thanks @Young-Khalil.",
      "Image generation: make explicit `model=` overrides exact-only so failed `openai/gpt-image-2` requests no longer fall through to Gemini or other configured providers, and update `image_generate list` to mention OpenAI Codex OAuth as valid auth for `openai/gpt-image-2`. Fixes #71290 and #71231. Thanks @Young-Khalil.",
      "Providers/GitHub Copilot: keep the plugin stream wrapper from claiming transport selection before OpenClaw picks a boundary-aware stream path, avoiding Pi's stale fallback Copilot headers on normal model turns.",
      "Discord/subagents: pass runtime config into thread-bound native subagent binding and require it at the helper boundary so Discord channel resolution keeps account-aware config. Fixes #71054. (#70945) Thanks @jai.",
      "Slack/Assistant: accept Slack Assistant DM `message_changed` events when their metadata identifies the human sender, while continuing to drop self-authored bot edits. Fixes #55445. Thanks @AlfredPros.",
      "Slack/native streaming: suppress reasoning-only payloads before `chat.startStream`/`appendStream`, so Claude extended-thinking blocks no longer appear as visible Slack messages. Fixes #59687. Thanks @vision-ifc.",
      "Slack/block replies: keep multi-part block deliveries in the first Slack reply thread when `replyToMode` is `first`, matching text reply threading instead of leaking later blocks into the channel. Fixes #49341. Thanks @pholmstr and @xiwuqi.",
      "Slack/thread broadcasts: process `thread_broadcast` events as user messages so replies sent with \"Also send to channel\" reach the agent instead of becoming metadata-only system events. Fixes #56605 and #4351. Thanks @clawSean and @jlowin.",
      "Slack/threading: ignore internal reply ids when choosing Slack `thread_ts` values, so resumed replies keep the real Slack thread anchor instead of leaking to the channel root. Fixes #68790. Thanks @MonkeyLeeT and @martingarramon.",
      "Agents/failover: stop body-less HTTP 400/422 proxy failures from defaulting to `\"format\"` classification, so embedded retries surface the opaque provider failure instead of falling into a compaction loop. Fixes #66462. (#67024) Thanks @altaywtf and @HongzhuLiu.",
      "Plugins/loader: use cached discovery-mode snapshot loads for read-only plugin capability lookups, keep snapshot caches isolated from active Gateway registries, and make same-plugin channel/HTTP route re-registration idempotent so repeated snapshot or hot-reload paths no longer rerun full plugin side effects or accumulate duplicate surfaces. Fixes #51781, #52031, #54181, and #57514. Thanks @livingghost, @okuyam2y, @ShionEria, and @bbshih.",
      "Plugins/loader: reuse the compatible active Gateway registry for broad runtime plugin ensure calls after a gateway-bindable boot load, so non-bundled plugins no longer re-run `register()` during the same boot path. Fixes #69250. Thanks @markthebest12.",
      "Plugins/hooks: keep the gateway-bindable hook runner installed when later default-mode plugin loads activate a different registry, preserving Gateway subagent lifecycle hooks across runtime cache misses. Fixes #63166.",
      "Plugins/hooks: refresh live Gateway runtime hooks before inbound channel dispatch, so externally installed plugins keep `message_received`, `before_dispatch`, and reply hooks active after scoped startup plugin loads. Fixes #71167.",
      "Media/input: resolve canonical inbound media refs through the shared media loader so native prompt image replay and explicit image/PDF tools can read `media://inbound/<id>` and managed inbound replay paths under workspace-only file policy.",
      "Media/tools: centralize media reference scheme classification for image, PDF, image-generation, video-generation, and music-generation inputs so managed inbound refs are accepted consistently.",
      "Control UI/media: resolve canonical inbound media refs before serving assistant media previews, so `media://inbound/<id>` sources no longer pass access checks but fail file open.",
      "Auth/Codex: bootstrap `openai-codex:default` from Codex CLI credentials on fresh installs without replacing a locally refreshed OpenClaw OAuth token later. Fixes #71305. Thanks @Gforce10-design.",
      "Plugin SDK/tool-result transforms: bound middleware `details`, validate in-place result mutations, and mark fail-closed middleware fallbacks with canonical `error` status. Thanks @vincentkoc.",
      "Discord/gateway: prevent startup from getting stuck at `awaiting gateway readiness` when Carbon gateway registration races with a lifecycle reconnect. Fixes #52372. (#68159) Thanks @IVY-AI-gif.",
      "Discord/gateway: supervise Carbon's async gateway registration promise so fatal Discord metadata failures surface through startup instead of process-level unhandled rejections. (#62451) Thanks @safzanpirani.",
      "Discord/gateway: record websocket frame activity as transport liveness, so idle but healthy Discord gateways no longer look stale between user messages. (#68213) Thanks @bmadwaves.",
      "Slack/streaming: suppress block replies while native or draft preview streaming owns the turn, preventing duplicate Slack delivery when block streaming is also enabled. Addresses #56675. Thanks @hsiaoa.",
      "Plugins/cache: restore plugin command and interactive handler registries on loader cache hits without resetting interactive callback dedupe, so cached external plugins keep slash commands and callback handlers available after reloads. Fixes #71100. Thanks @BomBastikDE.",
      "Gateway/OpenAI-compatible: report non-zero token usage for `/v1/chat/completions` when the agent run has only last-call usage metadata available. Fixes #71118. (#71242) Thanks @RenzoMXD.",
      "Plugin SDK/tool-result transforms: restrict harness tool-result middleware to bundled plugins, fail closed on middleware errors, validate rewritten result shapes, preserve Pi per-call ids, and keep Codex media trust checks anchored to raw tool provenance. Thanks @vincentkoc.",
      "Gateway/MCP loopback: apply owner-only tool policy and run before-tool-call hooks on `127.0.0.1/mcp` `tools/list` and `tools/call`, so non-owner bearer callers can no longer see or invoke owner-only tools such as `cron`, `gateway`, and `nodes`, matching the existing HTTP `/tools/invoke` and embedded-agent paths. (#71159) Thanks @mmaps.",
      "Codex harness/security: wait for final app-server approval decisions and sanitize approval preview text, so native Codex permission prompts cannot be resolved by an early placeholder decision or render unsafe terminal/control content. (#70751, #70569) Thanks @Lucenx9.",
      "Providers/voice security: route ElevenLabs TTS and OpenAI Realtime browser-session secret creation through guarded fetch paths, preserving provider calls while keeping SSRF protections on voice surfaces.",
      "Agents/OpenAI WS: match Codex's Responses WebSocket continuation strategy, sending only strict incremental follow-up input with `previous_response_id` and falling back to full context when the replay chain or request shape differs. Fixes #44948. Thanks @hss-oss.",
      "Plugins/Google Chat: log webhook auth rejection reasons only after all candidates fail, and warn when add-on `appPrincipal` values do not match configuration. Fixes #71078. (#71145) Thanks @luyao618.",
      "Models/configure: preserve the existing default model when provider auth is re-run from configure while keeping explicit default-setting commands authoritative. Fixes #70696. (#70793) Thanks @Sathvik-1007.",
      "Config/plugins: accept `plugins.entries.*.hooks.allowConversationAccess` in validation, generated schema metadata, and plugin policy inspection so trusted external plugins can enable conversation-access hooks such as `agent_end` without local schema patches. Fixes #71215. (#71221) Thanks @BillChirico.",
      "Models/runtime: show one model provider choice per provider and move Codex, Claude CLI, and Gemini CLI execution into explicit runtime selection while keeping fallback-only legacy runtime refs unchanged. Thanks @vincentkoc.",
      "Plugins/runtime deps: respect explicit plugin and channel disablement when repairing bundled runtime dependencies, so doctor and health checks no longer install deps for disabled configured channels. Thanks @vincentkoc.",
      "Diagnostics/OTEL: export logs through bounded diagnostic log events instead of a direct logger transport hook. Thanks @vincentkoc.",
      "WhatsApp/plugins: support an explicit opt-in for inbound `message_received` hooks with canonical channel, conversation, session, and sender fields. Thanks @vincentkoc.",
      "Channels/setup: keep bundled setup entries dependency-light and stage WhatsApp runtime dependencies only when login actually needs them, so first-run setup and read-only channel discovery avoid unused SDK imports.",
      "Slack/HTTP: keep webhook handlers in a process-global registry so HTTP mode survives plugin-loader/native-import splits and `/slack/events/<account>` no longer returns 404 after logging as active. Fixes #67955, #46245, and #46246. Thanks @chrisabad and @cesararevalo.",
      "Diagnostics: harden tool and model diagnostic events against hostile errors, blocking listeners, and unsafe stability reason fields. Thanks @vincentkoc.",
      "Plugins/onboarding: record local plugin install source metadata without duplicating raw absolute local paths in persisted `plugins.installs`, while preserving linked load-path cleanup. (#70970) Thanks @vincentkoc.",
      "Group chats/silent replies: tighten `NO_REPLY` prompt guidance so groups stay quiet without narrating silence or emitting fallback chatter when silence is the intended outcome. (#70954, #71209) Thanks @Takhoffman.",
      "WhatsApp/groups+direct: setting `systemPrompt: \"\"` on a specific `groups.<id>` or `direct.<peerId>` entry now suppresses the wildcard system prompt instead of falling through to it, so users can silence the global prompt for a specific group or peer. (#70381) Thanks @Bluetegu.",
      "Browser/tool: tell agents not to pass per-call `timeoutMs` on existing-session type, evaluate, and other Chrome MCP actions that reject timeout overrides.",
      "Browser/tool: use Playwright's current AI aria snapshot API for `refs=\"aria\"` and fall back to role refs when a node browser cannot provide aria refs, so agents can still inspect and click controls such as Google Meet admission buttons.",
      "Browser/tool: expose stable `tabId` handles such as `t1` plus optional tab labels, and accept those handles anywhere a browser tab target is needed.",
      "Browser/tool: return `suggestedTargetId` first in tab payloads so agents naturally reuse labels or stable tab handles instead of raw DevTools ids.",
      "Browser/tool: bundle a `browser-automation` skill with the multi-step snapshot, stable-tab, stale-ref, and manual-blocker loop for agent-controlled pages.",
      "Browser/tool: add `openclaw browser doctor`, URL-expanded snapshots, direct labeled screenshots, and clearer tab-target errors for agents that accidentally pass positional indexes.",
      "Plugins/Google Meet: use browser automation to classify and clear Meet entry blockers such as microphone-choice interstitials, and reuse in-progress create tabs on retry instead of opening duplicates.",
      "Codex/GPT-5.4: harden fallback, auth-profile, tool-schema, and replay edge cases across native and embedded runtime paths. (#70743) Thanks @100yenadmin.",
      "Models/fallback: resolve bare fallback model provider ids before model switching, so configured fallback chains keep working when a fallback is named without an explicit provider prefix.",
      "Voice-call/Telnyx: preserve inbound/outbound callback metadata and read transcription text from Telnyx's current `transcription_data` payload.",
      "Providers/DeepSeek: wire V4 thinking controls and OpenAI-compatible replay policy so follow-up turns preserve DeepSeek `reasoning_content`, while the None/off thinking path strips replayed reasoning fields. Fixes #70931. Thanks @lsdsjy.",
      "Providers/GitHub Copilot: align Copilot request headers across Anthropic, Responses, and built-in compaction summarization paths, including tool-result and image follow-up turns, without enabling unverified Responses continuation.",
      "Codex harness: send verbose tool progress to chat channels for native app-server runs, matching the Pi harness `/verbose on` and `/verbose full` behavior. (#70966) Thanks @jalehman.",
      "Codex models: fetch paginated Codex app-server model catalogs, mark truncated `/codex models` output, and keep ChatGPT OAuth defaults on the `openai-codex/gpt-5.5` route instead of the OpenAI API-key route.",
      "Codex status: report Codex CLI OAuth as `oauth (codex-cli)` for native `codex/*` sessions instead of showing unknown auth. Fixes #70688. Thanks @jb510.",
      "Channels/CLI: accept explicit shared-secret, base-URL, and auth-directory setup flags, and map legacy Nextcloud Talk `--url`/`--token` add commands to the bundled plugin setup input. Fixes #61759 and #61923.",
      "Models/CLI: keep `openclaw models list` read-only while still showing eligible configured-provider rows, so listing models no longer rewrites per-agent `models.json`. (#70847) Thanks @shakkernerd.",
      "Agents/transport: propagate configured attempt timeouts into guarded per-request dispatchers, so slow local LLM calls such as Ollama no longer fail at Undici's default 60-second body timeout. Fixes #70829. (#70831) Thanks @DranboFieldston.",
      "Plugins/providers: mirror runtime auth choices in bundled provider manifests and detect `KIMI_API_KEY` for Moonshot/Kimi web search before plugin runtime loads. Thanks @vincentkoc.",
      "Gateway/chat: register chat.send runs in the chat run registry so lifecycle error events reach the client instead of being silently dropped, fixing stuck 'waiting' state and /abort reporting no active run. (#69747) Thanks @wangshu94.",
      "Plugins/QQ Bot: enable the bundled qqbot plugin by default so its runtime dependency `@tencent-connect/qqbot-connector` is installed on first launch, unblocking the QR-code binding flow that dynamically imports the connector before any account is configured. (#71051) Thanks @cxyhhhhh.",
      "Gateway/agent RPC: register active `agent` runs into the chat abort controller map so `chat.abort` and `sessions.abort` can interrupt them, matching `chat.send` behavior and unblocking external runtimes that drive the Gateway through the public `agent` RPC. Fixes #71128. (#71214) Thanks @bitloi.",
      "Matrix/CLI: pass resolved runtime config into verify commands, so `openclaw matrix verify status` and sibling verify subcommands no longer crash before acquiring the Matrix client. Fixes #70992. (#71102) Thanks @luyao618.",
      "Gateway/startup: await startup sidecars before channel monitors report ready, reducing Discord and plugin startup races while still keeping gateway boot observability intact.",
      "Plugins/Google Meet: report required manual actions for Chrome joins, use browser automation for Meet entry, and persist the private-WS node opt-in so paired-node realtime sessions keep their intended network policy.",
      "Slack: route native stream fallback replies through the normal chunked sender so long buffered Slack Connect responses are not dropped or duplicated. (#71124) Thanks @martingarramon.",
      "WhatsApp: transcribe accepted voice notes before agent dispatch while keeping spoken transcripts out of command authorization. (#64120) Thanks @rogerdigital.",
      "Plugins/CLI: expose channel plugin CLI descriptors during discovery-mode plugin loads so snapshot registries keep channel commands visible without activating full runtimes. (#71309) Thanks @gumadeiras.",
      "Matrix: separate recovery-key, backup, and owner-trust diagnostics during E2EE recovery, add recovery-key rotation for backup reset, and cover destructive backup restore paths in QA. (#71311) Thanks @gumadeiras.",
      "WhatsApp: deliver media generated by tool-result replies while still suppressing text-only tool chatter. (#60968) Thanks @adaclaw.",
      "Config/agents: accept `agents.list[].contextTokens` in strict config validation so per-agent overrides survive hot reload, letting `/status` reflect the configured model window instead of the 200k fallback. Fixes #70692. (#71247) Thanks @statxc.",
      "Heartbeat: include async exec completion details in heartbeat prompts so command-finished notifications relay the actual output. (#71213) Thanks @GodsBoy.",
      "Memory search: apply session visibility and agent-to-agent policy to session transcript hits, and keep `corpus=sessions` ranking scoped to session collections before result limiting. (#70761) Thanks @nefainl.",
      "Agents/sessions: stop session write-lock timeouts from entering model failover, so local lock contention surfaces directly instead of cascading across providers. (#68700) Thanks @MonkeyLeeT.",
      "Auto-reply: run inbound reply delivery through `message_sending` hooks so plugins can transform or cancel generated replies before they are sent. (#70118) Thanks @jzakirov.",
      "CI/release-checks: pass workflow inputs and matrix values through step environment variables instead of embedding them directly into `run:` shell commands, reducing template-injection surface in the cross-OS release-check workflow. (#66884) Thanks @alexlomt."
    ]
  },
  {
    "version": "2026.4.23",
    "date": "2026.4.23",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026423",
    "features": [
      {
        "title": "Providers/OpenAI",
        "description": "add image generation and reference-image editing through Codex OAuth, so `openai/gpt-image-2` works without an `OPENAI_API_KEY`. Fixes #70703.",
        "href": "https://github.com/openclaw/openclaw/issues/70703"
      },
      {
        "title": "Providers/OpenRouter",
        "description": "add image generation and reference-image editing through `image_generate`, so OpenRouter image models work with `OPENROUTER_API_KEY`. Fixes #55066 via #67668. Thanks @notamicrodose.",
        "href": "https://github.com/openclaw/openclaw/issues/55066"
      },
      {
        "title": "Image generation",
        "description": "let agents request provider-supported quality and output format hints, and pass OpenAI-specific background, moderation, compression, and user hints through the `image_generate` tool. (#70503) Thanks @ottodeng.",
        "href": "https://github.com/openclaw/openclaw/pull/70503"
      },
      {
        "title": "Agents/subagents",
        "description": "add optional forked context for native `sessions_spawn` runs so agents can let a child inherit the requester transcript when needed, while keeping clean isolated sessions as the default; includes prompt guidance, context-engine hook metadata, docs, and QA coverage.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026423"
      },
      {
        "title": "Agents/tools",
        "description": "add optional per-call `timeoutMs` support for image, video, music, and TTS generation tools so agents can extend provider request timeouts only when a specific generation needs it.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026423"
      },
      {
        "title": "Memory/local embeddings",
        "description": "add configurable `memorySearch.local.contextSize` with a 4096 default so local embedding contexts can be tuned for constrained hosts without patching the memory host. (#70544) Thanks @aalekh-sarvam.",
        "href": "https://github.com/openclaw/openclaw/pull/70544"
      },
      {
        "title": "Dependencies/Pi",
        "description": "update bundled Pi packages to `0.70.0`, use Pi's upstream `gpt-5.5` catalog metadata for OpenAI and OpenAI Codex, and keep only local `gpt-5.5-pro` forward-compat handling.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026423"
      },
      {
        "title": "Codex harness",
        "description": "add structured debug logging for embedded harness selection decisions so `/status` stays simple while gateway logs explain auto-selection and Pi fallback reasons. (#70760) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/70760"
      }
    ],
    "fixes": [
      "Agents/bootstrap: repair completed workspaces that still have a stale `BOOTSTRAP.md` by detecting customized identity/profile files, deleting the stale bootstrap file, and recording setup completion (#71230). Thanks @Patrick-Erichsen.",
      "Codex harness: route native `request_user_input` prompts back to the originating chat, preserve queued follow-up answers, and honor newer app-server command approval amendment decisions.",
      "Codex harness/context-engine: redact context-engine assembly failures before logging, so fallback warnings do not serialize raw error objects. (#70809) Thanks @jalehman.",
      "WhatsApp/onboarding: keep first-run setup entry loading off the Baileys runtime dependency path, so packaged QuickStart installs can show WhatsApp setup before runtime deps are staged. Fixes #70932.",
      "Block streaming: suppress final assembled text after partial block-delivery aborts when the already-sent text chunks exactly cover the final reply, preventing duplicate replies without dropping unrelated short messages. Fixes #70921.",
      "Codex harness/Windows: resolve npm-installed `codex.cmd` shims through PATHEXT before starting the native app-server, so `codex/*` models work without a manual `.exe` shim. Fixes #70913.",
      "Slack/groups: classify MPIM group DMs as group chat context and suppress verbose tool/plan progress on Slack non-DM surfaces, so internal \"Working…\" traces no longer leak into rooms. Fixes #70912.",
      "Agents/replay: stop OpenAI/Codex transcript replay from synthesizing missing tool results while still preserving synthetic repair on Anthropic, Gemini, and Bedrock transport-owned sessions. (#61556) Thanks @VictorJeon and @vincentkoc.",
      "Telegram/media replies: parse remote markdown image syntax into outbound media payloads on the final reply path, so Telegram group chats stop falling back to plain-text image URLs when the model or a tool emits `![...](...)` instead of a `MEDIA:` token. (#66191) Thanks @apezam and @vincentkoc.",
      "Agents/WebChat: surface non-retryable provider failures such as billing, auth, and rate-limit errors from the embedded runner instead of logging `surface_error` and leaving webchat with no rendered error. Fixes #70124. (#70848) Thanks @truffle-dev.",
      "WhatsApp: unify outbound media normalization across direct sends and auto-replies. Thanks @mcaxtr.",
      "Memory/CLI: declare the built-in `local` embedding provider in the memory-core manifest, so standalone `openclaw memory status`, `index`, and `search` can resolve local embeddings just like the gateway runtime. Fixes #70836. (#70873) Thanks @mattznojassist.",
      "Gateway/WebChat: preserve image attachments for text-only primary models by offloading them as media refs instead of dropping them, so configured image tools can still inspect the original file. Fixes #68513, #44276, #51656, #70212.",
      "Plugins/Google Meet: hang up delegated Twilio calls on leave, clean up Chrome realtime audio bridges when launch fails, and use a flat provider-safe tool schema.",
      "Media understanding: honor explicit image-model configuration before native-vision skips, including `agents.defaults.imageModel`, `tools.media.image.models`, and provider image defaults such as MiniMax VL when the active chat model is text-only. Fixes #47614, #63722, #69171.",
      "Codex/media understanding: support `codex/*` image models through bounded Codex app-server image turns, while keeping `openai-codex/*` on the OpenAI Codex OAuth route and validating app-server responses against generated protocol contracts. Fixes #70201.",
      "Providers/OpenAI Codex: synthesize the `openai-codex/gpt-5.5` OAuth model row when Codex catalog discovery omits it, so cron and subagent runs do not fail with `Unknown model` while the account is authenticated.",
      "Models/Codex: preserve Codex provider metadata when adding models from chat or CLI commands, so manually added Codex models keep the right auth and routing behavior. (#70820) Thanks @Takhoffman.",
      "Providers/OpenAI: route `openai/gpt-image-2` through configured Codex OAuth directly when an `openai-codex` profile is active, instead of probing `OPENAI_API_KEY` first.",
      "Providers/OpenAI: harden image generation auth routing and Codex OAuth response parsing so fallback only applies to public OpenAI API routes and bounded SSE results. Thanks @Takhoffman.",
      "OpenAI/image generation: send reference-image edits as guarded multipart uploads instead of JSON data URLs, restoring complex multi-reference `gpt-image-2` edits. Fixes #70642. Thanks @dashhuang.",
      "Providers/OpenRouter: send image-understanding prompts as user text before image parts, restoring non-empty vision responses for OpenRouter multimodal models. Fixes #70410.",
      "Providers/Google: honor the private-network SSRF opt-in for Gemini image generation requests, so trusted proxy setups that resolve Google API hosts to private addresses can use `image_generate`. Fixes #67216.",
      "Agents/transport: stop embedded runs from lowering the process-wide undici stream timeouts, so slow Gemini image generation and other long-running provider requests no longer inherit short run-attempt headers timeouts. Fixes #70423. Thanks @giangthb.",
      "Providers/OpenAI: honor the private-network SSRF opt-in for OpenAI-compatible image generation endpoints, so trusted LocalAI/LAN `image_generate` routes work without disabling SSRF checks globally. Fixes #62879. Thanks @seitzbg.",
      "Providers/OpenAI: stop advertising the removed `gpt-5.3-codex-spark` Codex model through fallback catalogs, and suppress stale rows with a GPT-5.5 recovery hint.",
      "Control UI/chat: persist assistant-generated images as authenticated managed media and accept paired-device tokens for assistant media fetches, so webchat history reloads keep showing generated images. (#70719, #70741) Thanks @Patrick-Erichsen.",
      "Control UI/chat: queue Stop-button aborts across Gateway reconnects so a disconnected active run is canceled on reconnect instead of only clearing local UI state. (#70673) Thanks @chinar-amrutkar.",
      "Memory/QMD: recreate stale managed QMD collections when startup repair finds the collection name already exists, so root memory narrows back to `MEMORY.md` instead of staying on broad workspace markdown indexing.",
      "Agents/OpenAI: surface selected-model capacity failures from PI, Codex, and auto-reply harness paths with a model-switch hint instead of the generic empty-response error. Thanks @vincentkoc.",
      "Plugins/QR: replace legacy `qrcode-terminal` QR rendering with bounded `qrcode-tui` helpers for plugin login/setup flows. (#65969) Thanks @vincentkoc.",
      "Voice-call/realtime: wait for OpenAI session configuration before greeting or forwarding buffered audio, and reject non-allowlisted Twilio callers before stream setup. (#43501) Thanks @forrestblount.",
      "ACPX/Codex: stop materializing `auth.json` bridge files for Codex ACP, Codex app-server, and Codex CLI runs; Codex-owned runtimes now use their normal `CODEX_HOME`/`~/.codex` auth path directly.",
      "Auto-reply/system events: route async exec-event completion replies through the persisted session delivery context, so long-running command results return to the originating channel instead of being dropped when live origin metadata is missing. (#70258) Thanks @wzfukui.",
      "Gateway/sessions: extend the webchat session-mutation guard to `sessions.compact` and `sessions.compaction.restore`, so `WEBCHAT_UI` clients are rejected from compaction-side session mutations consistently with the existing patch/delete guards. (#70716) Thanks @drobison00.",
      "QA channel/security: reject non-HTTP(S) inbound attachment URLs before media fetch, and log rejected schemes so suspicious or misconfigured payloads are visible during debugging. (#70708) Thanks @vincentkoc.",
      "Plugins/install: link the host OpenClaw package into external plugins that declare `openclaw` as a peer dependency, so peer-only plugin SDK imports resolve after install without bundling a duplicate host package. (#70462) Thanks @anishesg.",
      "Plugins/Windows: refresh the packaged plugin SDK alias in place during bundled runtime dependency repair, so gateway and CLI plugin startup no longer race on `ENOTEMPTY`/`EPERM` after same-guest npm updates.",
      "Teams/security: require shared Bot Framework audience tokens to name the configured Teams app via verified `appid` or `azp`, blocking cross-bot token replay on the global audience. (#70724) Thanks @vincentkoc.",
      "Plugins/startup: resolve bundled plugin Jiti loads relative to the target plugin module instead of the central loader, so Bun global installs no longer hang while discovering bundled image providers. (#70073) Thanks @yidianyiko.",
      "Anthropic/CLI security: derive Claude CLI `bypassPermissions` from OpenClaw's existing YOLO exec policy, preserve explicit raw Claude `--permission-mode` overrides, and strip malformed permission-mode args instead of silently falling back to a bypass. (#70723) Thanks @vincentkoc.",
      "Android/security: require loopback-only cleartext gateway connections on Android manual and scanned routes, so private-LAN and link-local `ws://` endpoints now fail closed unless TLS is enabled. (#70722) Thanks @vincentkoc.",
      "Pairing/security: require private-IP or loopback hosts for cleartext mobile pairing, and stop treating `.local` or dotless hostnames as safe cleartext endpoints. (#70721) Thanks @vincentkoc.",
      "Plugins/security: stop setup-api lookup from falling back to the launch directory, so workspace-local `extensions/<plugin>/setup-api.*` files cannot be executed during provider setup resolution. (#70718) Thanks @drobison00.",
      "Approvals/security: require explicit chat exec-approval enablement instead of auto-enabling approval clients just because approvers resolve from config or owner allowlists. (#70715) Thanks @vincentkoc.",
      "Discord/security: keep native slash-command channel policy from bypassing configured owner or member restrictions, while preserving channel-policy fallback when no stricter access rule exists. (#70711) Thanks @vincentkoc.",
      "Android/security: stop `ASK_OPENCLAW` intents from auto-sending injected prompts, so external app actions only prefill the draft instead of dispatching it immediately. (#70714) Thanks @vincentkoc.",
      "Secrets/Windows: strip UTF-8 BOMs from file-backed secrets and keep unavailable ACL checks fail-closed unless trusted file or exec providers explicitly opt into `allowInsecurePath`. (#70662) Thanks @zhanggpcsu.",
      "Agents/image generation: escape ignored override values in tool warnings so parsed `MEDIA:` directives cannot be injected through unsupported model options. (#70710) Thanks @vincentkoc.",
      "QQBot/security: require framework auth for `/bot-approve` so unauthorized QQ senders cannot change exec approval settings through the unauthenticated pre-dispatch slash-command path. (#70706) Thanks @vincentkoc.",
      "MCP/tools: stop the ACPX OpenClaw tools bridge from listing or invoking owner-only tools such as `cron`, closing a privilege-escalation path for non-owner MCP callers. (#70698) Thanks @vincentkoc.",
      "Feishu/onboarding: load Feishu setup surfaces through a setup-only barrel so first-run setup no longer imports Feishu's Lark SDK before bundled runtime deps are staged. (#70339) Thanks @andrejtr.",
      "Approvals/startup: let native approval handlers report ready after gateway authentication while replaying pending approvals in the background, so slow or failing replay delivery no longer blocks handler startup or amplifies reconnect storms.",
      "WhatsApp/security: keep contact/vCard/location structured-object free text out of the inline message body and render it through fenced untrusted metadata JSON, limiting hidden prompt-injection payloads in names, phone fields, and location labels/comments.",
      "Group-chat/security: keep channel-sourced group names and participant labels out of inline group system prompts and render them through fenced untrusted metadata JSON.",
      "Agents/replay: preserve Kimi-style `functions.<name>:<index>` tool-call IDs during strict replay sanitization so custom OpenAI-compatible Kimi routes keep multi-turn tool use intact. (#70693) Thanks @geri4.",
      "Discord/replies: preserve final reply permission context through outbound delivery so Discord replies keep the same channel/member routing rules at send time.",
      "Plugins/startup: restore bundled plugin `openclaw/plugin-sdk/*` resolution from packaged installs and external runtime-deps stage roots, so Telegram/Discord no longer crash-loop with `Cannot find package 'openclaw'` after missing dependency repair. (#70852) Thanks @simonemacario.",
      "CLI/Claude: run the same prompt-build hooks and trigger/channel context on `claude-cli` turns as on direct embedded runs, keeping Claude Code sessions aligned with OpenClaw workspace identity, routing, and hook-driven prompt mutations. (#70625) Thanks @mbelinky.",
      "Discord/plugin startup: keep subagent hooks lazy behind Discord's channel entry so packaged entry imports stay narrow and report import failures with the channel id and entry path.",
      "Memory/doctor: keep root durable memory canonicalized on `MEMORY.md`, stop treating lowercase `memory.md` as a runtime fallback, and let `openclaw doctor --fix` merge true split-brain root files into `MEMORY.md` with a backup. (#70621) Thanks @mbelinky.",
      "Providers/Anthropic Vertex: restore ADC-backed model discovery after the lightweight provider-discovery path by resolving emitted discovery entries, exposing synthetic auth on bootstrap discovery, and honoring copied env snapshots when probing the default GCP ADC path. Fixes #65715. (#65716) Thanks @feiskyer.",
      "Codex harness/status: pin embedded harness selection per session, show active non-PI harness ids such as `codex` in `/status`, and keep legacy transcripts on PI until `/new` or `/reset` so config changes cannot hot-switch existing sessions.",
      "Gateway/security: fail closed on agent-driven `gateway config.apply`/`config.patch` runtime edits by allowlisting a narrow set of agent-tunable prompt, model, and mention-gating paths (including Telegram topic-level `requireMention`) instead of relying on a hand-maintained denylist of protected subtrees that could miss new sensitive config keys. (#70726) Thanks @drobison00.",
      "Webhooks/security: re-resolve `SecretRef`-backed webhook route secrets on each request so `openclaw secrets reload` revokes the previous secret immediately instead of waiting for a gateway restart. (#70727) Thanks @drobison00.",
      "Memory/dreaming: decouple the managed dreaming cron from heartbeat by running it as an isolated lightweight agent turn, so dreaming runs even when heartbeat is disabled for the default agent and is no longer skipped by `heartbeat.activeHours`. `openclaw doctor --fix` migrates stale main-session dreaming jobs in persisted cron configs to the new shape. Fixes #69811, #67397, #68972. (#70737) Thanks @jalehman.",
      "Agents/CLI: keep `--agent` plus `--session-id` lookup scoped to the requested agent store, so explicit agent resumes cannot select another agent's session. (#70985) Thanks @frankekn.",
      "Plugins/Comfy: read workflow and cloud auth configuration from `plugins.entries.comfy.config` while preserving legacy Comfy config fallback, so image, video, and music workflows pass config validation. Fixes #61915. (#63058) Thanks @547895019.",
      "Gateway/secrets: restart secret-backed channels such as Slack and Zalo during `secrets.reload` so rotated webhook secrets take effect immediately, with the reload serialized and per-channel restart errors isolated. (#70720) Thanks @drobison00.",
      "Plugins/tokenjuice: preserve `node_modules/tokenjuice/dist/rules/tests/*.json` during bundled plugin runtime staging so the plugin stops failing to load with `Cannot find module '../rules/tests/bun-test.json'`. The global basename prune treats any `tests/` directory as test cargo, but tokenjuice's `dist/rules/tests/` is runtime-loaded rule data consumed by `dist/core/builtin-rules.generated.js`. Adds an opt-in `keepDirectories` field to the per-package prune rule so packages with asset directories that collide with pruned basenames can stage cleanly."
    ]
  },
  {
    "version": "2026.4.22",
    "date": "2026.4.22",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422",
    "features": [
      {
        "title": "Providers/xAI",
        "description": "add image generation, text-to-speech, and speech-to-text support, including `grok-imagine-image` / `grok-imagine-image-pro`, reference-image edits, six live xAI voices, MP3/WAV/PCM/G.711 TTS formats, `grok-stt` audio transcription, and xAI realtime transcription for Voice Call streaming. (#68694) Thanks @KateWilkins.",
        "href": "https://github.com/openclaw/openclaw/pull/68694"
      },
      {
        "title": "Providers/STT",
        "description": "add Voice Call streaming transcription for Deepgram, ElevenLabs, and Mistral, alongside the existing OpenAI and xAI realtime STT paths; ElevenLabs also gains Scribe v2 batch audio transcription for inbound media.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "TUI",
        "description": "add local embedded mode for running terminal chats without a Gateway while keeping plugin approval gates enforced. (#66767) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/66767"
      },
      {
        "title": "Onboarding",
        "description": "auto-install missing provider and channel plugins during setup so first-run configuration can complete without manual plugin recovery. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "OpenAI/Responses",
        "description": "use OpenAI's native `web_search` tool automatically for direct OpenAI Responses models when web search is enabled and no managed search provider is pinned; explicit providers such as Brave keep the managed `web_search` tool.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Models/commands",
        "description": "add `/models add <provider> <modelId>` so you can register a model from chat and use it without restarting the gateway; keep `/models` as a simple provider browser while adding clearer add guidance and copy-friendly command examples. (#70211) Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/70211"
      },
      {
        "title": "WhatsApp",
        "description": "add configurable native reply quoting with replyToMode for WhatsApp conversations. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "WhatsApp/groups+direct",
        "description": "forward per-group and per-direct `systemPrompt` config into inbound context `GroupSystemPrompt` so configured per-chat behavioral instructions are injected on every turn. Supports `\"*\"` wildcard fallback and account-scoped overrides under `channels.whatsapp.accounts.<id>.{groups,direct}`; account maps fully replace root maps (no deep merge), matching the existing `requireMention` pattern. Closes #7011. (#59553) Thanks @Bluetegu.",
        "href": "https://github.com/openclaw/openclaw/pull/59553"
      },
      {
        "title": "Agents/sessions",
        "description": "add mailbox-style `sessions_list` filters for label, agent, and search plus visibility-scoped derived title and last-message previews. (#69839) Thanks @dangoZhang.",
        "href": "https://github.com/openclaw/openclaw/pull/69839"
      },
      {
        "title": "Control UI/settings+chat",
        "description": "add a browser-local personal identity for the operator (name plus local-safe avatar), route user identity rendering through the shared chat/avatar path used by assistant and agent surfaces, and tighten Quick Settings, agent fallback chips, and narrow-screen chat layouts so personalization no longer wastes space or clips controls. (#70362) Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/70362"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "enable payload-free stability recording by default and add a support-ready diagnostics export with sanitized logs, status, health, config, and stability snapshots for bug reports. (#70324) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/70324"
      },
      {
        "title": "Agents/trajectory export",
        "description": "add default-on local trajectory capture plus `/export-trajectory` bundles with redacted transcripts, runtime events, prompts, metadata, and artifacts for reproducible debugging and dataset export. (#70291) Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/pull/70291"
      },
      {
        "title": "Providers/Tencent",
        "description": "add the bundled Tencent Cloud provider plugin with TokenHub onboarding, docs, `hy3-preview` model catalog entries, and tiered Hy3 pricing metadata. (#68460) Thanks @JuniperSling.",
        "href": "https://github.com/openclaw/openclaw/pull/68460"
      },
      {
        "title": "WeCom",
        "description": "surface the official WeCom channel plugin during setup and refresh its display name and description so onboarding points at the supported bundled channel. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Providers/Amazon Bedrock Mantle",
        "description": "add Claude Opus 4.7 through Mantle's Anthropic Messages route with provider-owned bearer-auth streaming, so the model is actually callable without treating AWS bearer tokens like Anthropic API keys. Thanks @wirjo.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Providers/GPT-5",
        "description": "move the GPT-5 prompt overlay into the shared provider runtime so compatible GPT-5 models receive the same behavior and heartbeat guidance through OpenAI, OpenRouter, OpenCode, Codex, and other GPT providers; add `agents.defaults.promptOverlays.gpt5.personality` as the global friendly-style toggle while keeping the OpenAI plugin setting as a fallback.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Providers/OpenAI Codex",
        "description": "remove the Codex CLI auth import path from onboarding and provider discovery so OpenClaw no longer copies `~/.codex` OAuth material into agent auth stores; use browser login or device pairing instead. (#70390) Thanks @pashpashpash.",
        "href": "https://github.com/openclaw/openclaw/pull/70390"
      },
      {
        "title": "CLI/Claude",
        "description": "default `claude-cli` runs to warm stdio sessions, including custom configs that omit transport fields, and resume from the stored Claude session after Gateway restarts or idle exits. (#69679) Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/69679"
      },
      {
        "title": "Pi/models",
        "description": "update the bundled pi packages to `0.68.1` and let the OpenCode Go catalog come from pi instead of plugin-maintained model aliases, adding the refreshed `opencode-go/kimi-k2.6`, Qwen, GLM, MiMo, and MiniMax entries.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Tokenjuice",
        "description": "add bundled native OpenClaw support for tokenjuice as an opt-in plugin that compacts noisy `exec` and `bash` tool results in Pi embedded runs. (#69946) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/69946"
      },
      {
        "title": "ACPX",
        "description": "add an explicit `openClawToolsMcpBridge` option that injects a core OpenClaw MCP server for selected built-in tools, starting with `cron`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "CLI/doctor plugins",
        "description": "lazy-load doctor plugin paths and prefer installed plugin `dist/*` runtime entries over source-adjacent JavaScript fallbacks, reducing the measured `doctor --non-interactive` runtime by about 74% while keeping cold doctor startup on built plugin artifacts. (#69840) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/69840"
      },
      {
        "title": "CLI/debugging",
        "description": "add an opt-in temporary debug timing helper for local CLI performance investigations, with readable stderr output, JSONL capture, and docs for removing probes before landing fixes. (#70469) Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/70469"
      },
      {
        "title": "Docs/i18n",
        "description": "add Thai translation support for the docs site.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Providers/OpenAI-compatible",
        "description": "mark known local backends such as vLLM, SGLang, llama.cpp, LM Studio, LocalAI, Jan, TabbyAPI, and text-generation-webui as streaming-usage compatible, so their token accounting no longer degrades to unknown/stale totals. (#68711) Thanks @gaineyllc.",
        "href": "https://github.com/openclaw/openclaw/pull/68711"
      },
      {
        "title": "Providers/OpenAI-compatible",
        "description": "recover streamed token usage from llama.cpp-style `timings.prompt_n` / `timings.predicted_n` metadata and sanitize usage counts before accumulation, fixing unknown or stale totals when compatible servers do not emit an OpenAI-shaped `usage` object. (#41056) Thanks @xaeon2026.",
        "href": "https://github.com/openclaw/openclaw/pull/41056"
      },
      {
        "title": "Plugins/startup",
        "description": "prefer native Jiti loading for built bundled plugin dist modules on supported runtimes, cutting measured bundled plugin load time by 82-90% while keeping source TypeScript on the transform path. (#69925) Thanks @aauren.",
        "href": "https://github.com/openclaw/openclaw/pull/69925"
      },
      {
        "title": "Plugin SDK/STT",
        "description": "share realtime transcription WebSocket transport and multipart batch transcription form helpers across bundled STT providers, reducing provider plugin boilerplate while preserving proxy capture, reconnects, audio queueing, close flushing, upload filename normalization, and ready handshakes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Plugin SDK/Pi embedded runs",
        "description": "add a bundled-plugin embedded extension factory seam so native plugins can extend Pi embedded runs with async runtime hooks such as `tool_result` handling instead of falling back to the older synchronous persistence path. (#69946) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/69946"
      },
      {
        "title": "Codex harness/hooks",
        "description": "route native Codex app-server turns through `before_prompt_build` and emit `before_compaction` / `after_compaction` for native compaction items so prompt and compaction hooks stop drifting from Pi. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Codex harness/plugins",
        "description": "add a bundled-plugin Codex app-server extension seam for async `tool_result` middleware, fire `after_tool_call` for Codex tool runs, and route mirrored Codex transcript writes through `before_message_write` so tool integrations stop diverging from Pi. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "Codex harness/hooks",
        "description": "fire `llm_input`, `llm_output`, and `agent_end` for native Codex app-server turns so lifecycle hooks stop drifting from Pi. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026422"
      },
      {
        "title": "QA/Telegram",
        "description": "record per-scenario reply RTT in the live Telegram QA report and summary, starting with the canary response. (#70550) Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/70550"
      },
      {
        "title": "Status",
        "description": "add an explicit `Runner:` field to `/status` so sessions now report whether they are running on embedded Pi, a CLI-backed provider, or an ACP harness agent/backend such as `codex (acp/acpx)` or `gemini (acp/acpx)`. (#70595) Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/70595"
      }
    ],
    "fixes": [
      "Dependencies: refresh workspace package pins and lockfile entries for AWS SDK, Anthropic SDK, ACP SDK, Matrix crypto, TypeBox, Vite, tsdown, Slack Bolt, CopilotKit AIMock, and related bundled plugin packages.",
      "Gateway/env: import each missing expected login-shell env var independently, so an existing gateway token no longer prevents `env.shellEnv` from loading plugin credentials such as `TWILIO_*` from `.profile`.",
      "macOS/Gateway pairing: silently accept same-host native app `metadata-upgrade` reconnects, so macOS patch-version changes update paired metadata instead of spamming security audit warnings and `pairing required` disconnects.",
      "CLI/Gateway: wait for one-shot gateway RPC clients to finish WebSocket teardown before the CLI process exits, reducing hangs where commands like `openclaw status` or `openclaw version` could finish their work but stay alive until an external timeout killed them (#70691). Thanks @Takhoffman.",
      "Thinking defaults/status: raise the implicit default thinking level for reasoning-capable models from legacy `off`/`low` fallback behavior to a safe provider-supported `medium` equivalent when no explicit config default is set, preserve configured-model reasoning metadata when runtime catalog loading is empty, and make `/status` report the same resolved default as runtime (#70601). Thanks @Takhoffman.",
      "Gateway/model pricing: extend OpenRouter and LiteLLM catalog fetch timeouts to 60 seconds, reducing noisy timeout warnings during slow upstream responses.",
      "Agents/failover: classify bare undici transport failures (`terminated`, `UND_ERR_SOCKET`, `UND_ERR_CONNECT_TIMEOUT`, body/header timeouts, aborted streams) and pi-ai's openai-codex `Request failed` sentinel as `timeout`, so Cloudflare 502s with empty bodies and mid-response socket resets actually enter the configured fallback chain instead of surfacing as unclassified errors. Fixes #69368. (#69677) Thanks @sk7n4k3d.",
      "Providers/Anthropic Vertex: restore ADC-backed model discovery after the lightweight provider-discovery path by resolving emitted discovery entries, exposing synthetic auth on bootstrap discovery, and honoring copied env snapshots when probing the default GCP ADC path. Fixes #65715. (#65716) Thanks @feiskyer.",
      "Plugins/install: add newly installed plugin ids to an existing `plugins.allow` list before enabling them, so allowlisted configs load installed plugins after restart.",
      "Status: show `Fast` in `/status` when fast mode is enabled, including config/default-derived fast mode, and omit it when disabled.",
      "OpenAI/image generation: detect Azure OpenAI-style image endpoints, use Azure `api-key` auth plus deployment-scoped image URLs, and honor `AZURE_OPENAI_API_VERSION` so image generation and edits work against Azure-hosted OpenAI resources. (#70570) Thanks @zhanggpcsu.",
      "Control UI/chat: include cache-read and cache-write tokens when computing the message footer context percentage, so cached Claude/OpenAI sessions no longer show `0% ctx` while `/status` reports substantial context use. Fixes #70491. (#70532) Thanks @chen-zhang-cs-code.",
      "Models/auth: merge provider-owned default-model additions from `openclaw models auth login` instead of replacing `agents.defaults.models`, so re-authenticating an OAuth provider such as OpenAI Codex no longer wipes other providers' aliases and per-model params. Migrations that must rename keys (Anthropic -> Claude CLI) opt in with `replaceDefaultModels`. Fixes #69414. (#70435) Thanks @neeravmakwana.",
      "Media understanding/audio: prefer configured or key-backed STT providers before auto-detected local Whisper CLIs, so installed local transcription tools no longer shadow API providers such as Groq/OpenAI in `tools.media.audio` auto mode. Fixes #68727.",
      "Providers/OpenAI: lock the auth picker wording for OpenAI API key, Codex browser login, and Codex device pairing so the setup choices no longer imply a mixed Codex/API-key auth path. (#67848) Thanks @tmlxrd.",
      "Agents/BTW: route `/btw` side questions through provider stream registration with the session workspace, so Ollama provider URL construction and workspace-scoped hooks apply correctly. Fixes #68336. (#70413) Thanks @suboss87.",
      "Agents/sessions: make session transcript write locks non-reentrant by default, so same-process transcript writers contend unless a helper explicitly opts into nested lock ownership.",
      "ACPX/probe: expose an optional `probeAgent` plugin config field so the embedded ACP runtime health probe can target a configured agent (for example `opencode` or `claude`) instead of hardcoding `codex`, and stop marking the entire ACP runtime backend unavailable when the default probe agent is simply not installed or not authenticated. (#68409) Thanks @lyfuci.",
      "Memory search: use sqlite-vec KNN for vector recall while preserving full post-filter result limits in multi-model indexes. Fixes #69666. (#69680) Thanks @aalekh-sarvam.",
      "Providers/OpenAI Codex: stop stale per-agent `openai-codex:default` OAuth profiles from shadowing a newer main-agent identity-scoped profile, and let `openclaw doctor` offer the matching cleanup. (#70393) Thanks @pashpashpash.",
      "ACPX: route OpenClaw ACP bridge commands through the MCP-free runtime path even when the command is wrapped with `env`, has bridge flags, or is resumed from persisted session state, so documented `acpx openclaw` setups no longer fail on per-session MCP injection. (#68741) Thanks @alexlomt.",
      "Codex harness: route Codex-tagged MCP tool approval elicitations through OpenClaw plugin approvals, including current empty-schema app-server requests, while leaving generic user-input prompts fail-closed. (#68807) Thanks @kesslerio.",
      "WhatsApp/outbound: hold an in-memory active-delivery claim while a live outbound send is in flight, so a concurrent reconnect drain no longer re-drives the same pending queue entry and duplicates cron sends 7-12x after the 30-minute inbound-silence watchdog fires mid-delivery. Crash-replay of fresh queue entries left behind by a dead process is preserved because the claim is intentionally process-local. Fixes #70386. (#70428) Thanks @neeravmakwana.",
      "Matrix/commands: keep Matrix DM allowlist state out of room control-command authorization, so trusted DM senders do not accidentally gain room-command access.",
      "Providers/SDK retry: cap long `Retry-After` sleeps in Stainless-based Anthropic/OpenAI model SDKs so 60s+ retry windows surface immediately for OpenClaw failover instead of blocking the run. (#68474) Thanks @jetd1.",
      "Agents/TTS: preserve spoken text in TTS tool results while defusing reply directives in transcript content, so future turns remember voice replies without treating spoken `MEDIA:` or voice tags as delivery metadata. (#68869) Thanks @zqchris.",
      "Providers/OpenAI: harden Voice Call realtime transcription against OpenAI Realtime session-update drift, forward language and prompt hints, and add live coverage for realtime STT.",
      "Agents/Pi embedded runs: suppress the \"⚠️ Agent couldn't generate a response\" warning when the assistant already delivered user-visible content through a messaging tool and the turn ended cleanly (`stopReason=stop`). Real failure modes (tool errors, provider `stopReason=error`, interrupted tool use) still surface the existing \"verify before retrying\" warning. Fixes #70396. (#70425) Thanks @neeravmakwana.",
      "Gateway/Linux: wrap gateway-managed supervisor, PTY, MCP stdio, and browser child processes in a tiny `/bin/sh` shim that raises the child's own `oom_score_adj` on Linux, so under cgroup memory pressure the kernel prefers transient workers over the long-lived gateway. Opt out with `OPENCLAW_CHILD_OOM_SCORE_ADJ=0`. Fixes #70404. (#70419) Thanks @neeravmakwana.",
      "Providers/Moonshot: stop strict-sanitizing Kimi's native tool_call IDs (shaped like `functions.<name>:<index>`) on the OpenAI-compatible transport, so multi-turn agentic flows through Kimi K2.6 no longer break after 2-3 tool-calling rounds when the serving layer fails to match mangled IDs against the original tool definitions. Adds a `sanitizeToolCallIds` opt-out to the shared `openai-compatible` replay family helper and wires Moonshot to it. Fixes #62319. (#70030) Thanks @LeoDu0314.",
      "Dependencies/security: override transitive `uuid` to `14.0.0`, clearing the runtime advisory across dependencies.",
      "Codex harness: ignore dynamic tool descriptions when deciding whether to reuse a native app-server thread while still fingerprinting tool schemas, so channel-specific copy changes no longer reset otherwise compatible Codex conversations. (#69976) Thanks @chen-zhang-cs-code.",
      "Codex harness: expose the Codex app-server model catalog in `models list/status`, avoid startup hangs from app-server discovery timeouts, and accept current Codex turn-completion notifications so Docker live gateway turns finish reliably.",
      "Codex harness: drop invalid legacy app-server `serviceTier` values such as `\"priority\"` before native thread and turn requests, while keeping supported Codex tiers limited to `\"fast\"` and `\"flex\"`. Fixes #64815.",
      "Codex harness: show bounded, sanitized permission target samples in app-server approval prompts, so native permission requests keep their specific hosts, roots, and paths visible without leaking home usernames or URL credentials. (#70340) Thanks @Lucenx9.",
      "Docs/Codex harness: narrow native compaction docs to the current start/completion signals, without promising a readable summary or kept-entry audit list yet. (#69612) Thanks @91wan.",
      "Providers/Amazon Bedrock: use known context-window metadata for discovered models while keeping the unknown-model fallback conservative, so compaction and overflow handling improve for newer Bedrock models without overstating unlisted model limits. Thanks @wirjo.",
      "Providers/Amazon Bedrock Mantle: refresh IAM-backed bearer tokens at runtime instead of baking discovery-time tokens into provider config, so long-lived Mantle sessions keep working after the initial token ages out. Thanks @wirjo.",
      "Config/includes: write through single-file top-level includes for isolated OpenClaw-owned mutations, so `plugins install` and `plugins update` update an included `plugins.json5` file instead of flattening modular `$include` configs. Fixes #41050 and #66048.",
      "Config/reload: plan gateway reloads from source-authored config instead of runtime-materialized snapshots, so plugin update writes no longer trigger false restarts from derived provider/plugin config paths. Fixes #68732.",
      "Plugins/update: skip npm plugin reinstall/config rewrites when the installed version and recorded artifact identity already match the registry target, let bare npm package names resolve back to tracked install records, and point already-installed `plugins install` attempts at `plugins update` / `--force` instead of a hook-pack fallback. Fixes #46955, #67957, and #68073.",
      "Agents/MCP: keep `mcp.servers` and bundle MCP tools available in Pi embedded runs. `coding` and `messaging` sessions while preserving `minimal` profile and `tools.deny: [\"bundle-mcp\"]` opt-out behavior. Fixes #68875 and #68818.",
      "Plugins/startup: tolerate transient bundled-channel catalog/metadata drift while auto-enabling configured plugins, so CLI and gateway startup no longer crash when a channel id is known but its display metadata is unavailable.",
      "CLI/Claude: report CLI-backed reply runs as streaming while Claude/Codex CLI turns are still in flight, so WebChat keeps visible response state until the backend finishes. Fixes #70125.",
      "Slack/streaming: fall back to normal Slack replies for Slack Connect streams rejected before the SDK flushes its local buffer, so short replies no longer disappear or report success before Slack acknowledges delivery. Fixes #70295. (#70370) Thanks @mvanhorn.",
      "Codex harness: rotate the shared app-server websocket client when the configured bearer token changes, so auth-token refreshes reconnect with the new `Authorization` header instead of reusing a stale socket. (#70328) Thanks @Lucenx9.",
      "Channels/sandbox: derive runtime policy keys for external direct messages that share the main conversation, so sandbox/tool policy no longer treats channel-originated DMs as local main-session runs.",
      "Config/models: merge provider-scoped model allowlist updates and protect model/provider map writes from accidental full replacement, adding `config set --merge` for additive updates and `--replace` for intentional clobbers. Fixes #65920, #68392, and #68653.",
      "Agents/Pi auth: preserve AWS SDK-authenticated Bedrock runs for IMDS and task-role setups, clear stale refresh timers on sentinel fallback, and log unexpected runtime-auth prep failures instead of silently leaving the provider unauthenticated. Thanks @wirjo.",
      "Config/gateway: restore last-known-good config on critical clobber signatures such as missing metadata, missing `gateway.mode`, or sharp size drops, preventing gateway crash loops when a valid backup exists. Fixes #70336.",
      "Config/gateway: recover configs accidentally prefixed with non-JSON output during gateway startup or `openclaw doctor --fix`, preserving the clobbered file as a backup while leaving normal config reads read-only.",
      "Agents/GitHub Copilot: normalize connection-bound Responses item IDs in the Copilot provider wrapper so replayed histories no longer fail after the upstream connection changes. (#69362) Thanks @Menci.",
      "Pi embedded runs: pass real built-in tools into Pi session creation and then narrow active tool names after custom tool registration, so the runner and compaction paths compile cleanly and keep OpenClaw-managed custom tool allowlists without feeding string arrays into `createAgentSession`. Thanks @vincentkoc.",
      "Agents/OpenAI websocket: route native OpenAI websocket metadata and session-header decisions through the shared endpoint classifier so local mocks and custom `models.providers.openai.baseUrl` endpoints stay out of the native OpenAI path consistently across embedded-runner and websocket transport code. Thanks @vincentkoc.",
      "Cron/MCP: retire bundled MCP runtimes through one shared cleanup path for isolated cron run ends, persistent cron session rollover, and direct cron `deleteAfterRun` fallback cleanup. Fixes #69145, #68623, and #68827.",
      "Cron: default legacy persisted jobs that are missing `sessionTarget` during store load and report a clear validation error if a malformed job still reaches execution, preventing undefined `startsWith` crashes on scheduled ticks. Fixes #70360 and #63383. (#70367) Thanks @mvanhorn.",
      "MCP/gateway: tear down stdio MCP process trees on transport close and dispose bundled MCP runtimes during session delete/reset, preventing orphaned wrapper/server processes from accumulating. Fixes #68809 and #69465.",
      "Agents/MCP: retire bundled MCP runtimes after completed one-shot subagent cleanup and nested `sessions_send` steps, while keeping persistent subagent sessions warm.",
      "Config: render validation warnings with real line breaks instead of a literal `\\n` sequence in CLI/audit output. Fixes #70140.",
      "Cron/doctor: repair malformed persisted cron job IDs through `openclaw doctor`, including legacy `jobId`, non-string `id`, and missing `id` rows, so `cron list` no longer needs display-layer coercion for corrupt store data. Fixes #70128.",
      "Discord: normalize prefixed channel targets only at the thread-binding API boundary, so `sessions_spawn({ runtime: \"acp\", thread: true })` can create child threads from Discord channels without breaking current-channel ACP bindings. (#68034) Thanks @Zetarcos.",
      "Discord: harden inbound thread metadata handling against partial Carbon channel getters, so non-command thread messages and queued jobs no longer crash when `name`, `parentId`, `parent`, or `ownerId` requires fetched raw data. Thanks @neeravmakwana.",
      "Discord: let `message` tool reactions resolve `user:<id>` DM targets and preserve `channels.discord.guilds.<guild>.channels.<channel>.requireMention: false` during reply-stage activation fallback. Fixes #70165 and #69441.",
      "Plugins/startup: pre-normalize and cache Jiti alias maps before creating plugin loaders, so module-scoped loader filenames do not reintroduce per-plugin alias-normalization startup cost. Fixes #70186.",
      "ACP/Codex: run the bundled Codex ACP harness with an isolated `CODEX_HOME` and avoid writing incomplete ChatGPT auth bridge files, so Codex ACP sessions no longer clobber the user's real Codex CLI auth. Fixes #70234. Thanks @Lonobers88.",
      "Gateway/client: keep long-running RPCs such as ACP `agent.wait` calls in charge of their own timeout instead of closing the websocket on a missed app-level tick while work is still pending.",
      "Telegram/webhooks: lower the grammY webhook callback timeout to 5s so Telegram gets an early 200 response instead of retrying long-running updates as read timeouts. (#70146) Thanks @friday-james.",
      "Telegram/polling: rebuild the polling HTTP transport after `getUpdates` 409 conflicts, so retries use a fresh TCP connection instead of looping on a Telegram-terminated keep-alive socket. (#69873) Thanks @hclsys.",
      "Media delivery: strip persisted base64 audio payloads from webchat history, resolve stored `media://inbound/*` attachments before local-root checks, suppress duplicate Telegram voice/audio sends when TTS emits the same media twice, and support custom image-model IDs that already include their provider prefix.",
      "Slack/files: resolve `downloadFile` bot tokens from the runtime config when callers provide `cfg` without an explicit token or prebuilt client, preserving cfg-only file downloads outside the action runtime path. (#70160) Thanks @martingarramon.",
      "Slack/HTTP: dispatch registered Request URL webhooks through the same handler registry used by Slack monitor setup, so HTTP-mode Slack events no longer 404 after successful route registration. (#70275) Thanks @FroeMic.",
      "Slack/runtime bindings: route focused Slack thread replies through their bound ACP session instead of preparing replies against the default agent shell. Fixes #67739. Thanks @Frankla20.",
      "CLI/Claude: keep stored Claude CLI sessions through OAuth refresh-token rotation by keying auth epochs on stable account identity instead of mutable OAuth token material. (#70452) Thanks @obviyus.",
      "CLI/Claude: verify stored Claude CLI session ids have a readable project transcript before resuming, clearing phantom bindings with `reason=transcript-missing` instead of silently starting fresh under `--resume`. Fixes #70177.",
      "CLI sessions: persist CLI session clearing through the atomic session-store merge path, so expired Claude/Codex CLI bindings are actually removed before retrying without the stale session id. (#70298) Thanks @HFConsultant.",
      "ACP/sessions_spawn: honor explicit `model` overrides for ACP child sessions instead of silently falling back to the target agent default model. (#70210) Thanks @felix-miao.",
      "Diffs/viewer: re-read remote viewer access policy from live runtime config on each request, so toggling `plugins.entries.diffs.config.security.allowRemoteViewer` closes proxied viewer access immediately instead of waiting for a restart. Thanks @vincentkoc.",
      "Diffs/tooling: re-read `viewerBaseUrl`, presentation defaults, and viewer access policy from live runtime config, and fail closed when the live `diffs` plugin entry disappears instead of reviving startup viewer settings. Thanks @vincentkoc.",
      "Memory/LanceDB: stop resurrecting removed live `memory-lancedb` hook config from startup snapshots, so deleting or disabling the plugin entry shuts off auto-recall and auto-capture without a restart. Thanks @vincentkoc.",
      "Memory/LanceDB: keep auto-recall and auto-capture hooks wired when those settings start disabled, so turning them on in live config starts recall and capture without waiting for a restart. Thanks @vincentkoc.",
      "Skill Workshop: keep the tool plus `before_prompt_build` / `agent_end` hooks wired while the plugin is disabled at startup, so turning the plugin back on in live config starts guidance and capture without waiting for a restart. Thanks @vincentkoc.",
      "Active Memory: stop reviving removed live `active-memory` config from startup snapshots, so removing the plugin entry turns the hook off immediately instead of waiting for a restart. Thanks @vincentkoc.",
      "GitHub Copilot: re-read plugin discovery config from the live runtime snapshot, so toggling `plugins.entries.github-copilot.config.discovery.enabled` takes effect without a restart. Thanks @vincentkoc.",
      "Ollama: re-read plugin discovery config from the live runtime snapshot, so toggling `plugins.entries.ollama.config.discovery.enabled` takes effect without a restart. Thanks @vincentkoc.",
      "OpenAI: re-read the plugin prompt-overlay personality from live runtime config, so GPT-5 system prompt contributions update without a restart when `plugins.entries.openai.config.personality` changes. Thanks @vincentkoc.",
      "Amazon Bedrock: re-read live discovery and guardrail plugin config, so toggling `plugins.entries.amazon-bedrock.config.discovery` or `plugins.entries.amazon-bedrock.config.guardrail` takes effect without a restart. Thanks @vincentkoc.",
      "Codex: re-read the plugin discovery config from the live runtime snapshot, so toggling `plugins.entries.codex.config.discovery` takes effect without a restart. Thanks @vincentkoc.",
      "Agents/subagents: drop bare `NO_REPLY` from the parent turn when the session still has pending spawned children, so direct-conversation surfaces such as Telegram DMs no longer rewrite the sentinel into visible fallback chatter while waiting for the child completion event. (#69942) Thanks @neeravmakwana.",
      "Plugins/install: keep bundled plugin dependencies off npm install while repairing them when plugins activate from a packaged install, including Feishu/Lark, Browser, and direct bundled channel setup-entry loads.",
      "CLI/channels: skip and cache bundled channel plugin, setup, and secrets load failures during read-only discovery, so one broken unused bundled channel cannot crash `openclaw status` or bootstrap secret scans.",
      "Memory/LanceDB: retry initialization after a failed LanceDB load and report unsupported Intel macOS native runtime clearly instead of caching the failure or repeatedly attempting an install that cannot work.",
      "CLI/Claude: hash only static extra system prompt parts when deciding whether to reuse a CLI session, so per-message inbound metadata no longer resets Claude CLI conversations on every turn. (#70122) Thanks @zijunl.",
      "Hooks/Slack: standardize shared message hook routing fields (`threadId` / `replyToId`) and stop Slack outbound delivery from re-running `message_sending` inside the channel adapter, so plugins like thread-ownership make one outbound routing decision per reply. Thanks @vincentkoc.",
      "Auto-reply/media: share one run-scoped reply media context between streamed block delivery and final payload filtering, so a local `MEDIA:` attachment is staged once and duplicate media sends are suppressed reliably. (#68111) Thanks @ayeshakhalid192007-dev.",
      "Plugins/gateway hooks: expose startup config, workspace dir, and a live cron getter on the typed `gateway_start` hook, and move memory-core managed dreaming off the internal `gateway:startup` bridge so cron reconciliation stays on the public plugin hook path. Thanks @vincentkoc.",
      "Plugins/config: read plugin trust decisions from the source config snapshot when a resolved runtime snapshot is active, so `plugins.allow` remains enforced and `doctor`/gateway startup no longer warn that the allowlist is empty when it is configured. Fixes #70161. Also fixes #70141.",
      "Agents/openai-completions: enable malformed streamed tool-call argument repair for self-hosted OpenAI-compatible backends such as Kimi/SGLang, so fragmented tool-call arguments no longer reach tools as empty or unusable objects. Fixes #69672. (#70294) Thanks @MonkeyLeeT.",
      "Gateway/restart: preserve group and channel chat context when resuming an agent turn after a Gateway restart, so continuation replies keep the same prompt, routing, and tool-status behavior as the original conversation. Thanks @obviyus.",
      "Gateway/pairing: shared-secret loopback CLI clients now silently auto-approve `metadata-upgrade` pairing (platform / device family refresh) instead of being disconnected with `1008 pairing required`. This matches the scope-upgrade and role-upgrade behavior added in #69431 and unblocks non-interactive CLI automation when a paired-device record has a stale platform string (e.g. device key replicated across hosts, install migrated between OSes, or platform-string format changed between OpenClaw versions). Browser / Control-UI clients keep the existing approval-required flow for metadata changes (#70224). Thanks @perlowja.",
      "Gateway/pairing: treat any forwarded-header evidence (`Forwarded`, `X-Forwarded-*`, or `X-Real-IP`) as proxied WebSocket traffic before pairing locality checks, so reverse-proxy topologies cannot use the loopback shared-secret helper auto-pairing path.",
      "Agents/OpenAI: treat exact `NO_REPLY` assistant output as a deliberate silent reply in embedded runs, so GPT-5.4 turns with signed reasoning plus a silent final no longer surface a false incomplete-turn error.",
      "Auto-reply/streaming: preserve streamed reply directives through chunk boundaries and phase-aware `final_answer` delivery, so split `MEDIA:<path>` lines, voice tags, and reply targets reach channel delivery instead of leaking as text or being dropped. (#70243) Thanks @zqchris.",
      "Anthropic/Claude Opus 4.7: normalize Opus 4.7 and `claude-cli` Opus 4.7 variants to a 1M context window in resolved runtime metadata and active-agent status/context reporting, so they no longer inherit the stale 200k fallback. Thanks @BunsDev.",
      "Gateway/pairing webchat: render `/pair qr` replies as structured media instead of raw markdown text, preserve inline reply threading and silent-control handling on media replies, avoid persisting sensitive QR images into transcript history, and keep local webchat media embedding behind internal-only trust markers. (#70047) Thanks @BunsDev.",
      "Codex harness: default app-server runs to unchained local execution, so OpenAI heartbeats can use network and shell tools without stalling behind native Codex approvals or the workspace-write sandbox (#70082). Thanks @pashpashpash.",
      "Codex harness: fail closed for unknown native app-server approval methods instead of routing unsupported future approval shapes through OpenClaw approval grants. (#70356) Thanks @Lucenx9.",
      "Codex harness: apply the GPT-5 behavior and heartbeat prompt overlay to native Codex app-server runs, so `codex/gpt-5.x` sessions get the same follow-through, tool-use, and proactive heartbeat guidance as OpenAI GPT-5 runs (#70175). Thanks @pashpashpash.",
      "WhatsApp/login QR: propagate refreshed QR images through `web.login.wait` consumers and compare against each caller's current QR instead of shared waiter state, so rotated QR codes stay synchronized across Control UI, macOS, and concurrent waiters. (#70009) Thanks @BunsDev.",
      "Codex harness: add an explicit Guardian mode for Codex app-server approvals, plus a Docker live probe for approved and ask-back Guardian decisions, while keeping default app-server runs unchained for unattended local heartbeats. The legacy `OPENCLAW_CODEX_APP_SERVER_GUARDIAN` shortcut is removed; use plugin config `appServer.mode: \"guardian\"` or `OPENCLAW_CODEX_APP_SERVER_MODE=guardian`. Thanks @pashpashpash.",
      "OpenAI/Responses: keep embedded OpenAI Responses runs on HTTP when `models.providers.openai.baseUrl` points at a local mock or other non-public endpoint, so mocked/custom endpoints no longer drift onto the hardcoded public websocket transport. (#69815) Thanks @vincentkoc.",
      "Channels/config: require resolved runtime config on channel send/action/client helpers and block runtime helper `loadConfig()` calls, so SecretRefs are resolved at startup/boundaries instead of being re-read during sends.",
      "Discord: pass resolved runtime config through guild and moderation action helpers, so thread-originated Discord commands can run channel, member, role, and guild actions without falling back to runtime config reads. (#70215) Thanks @szponeczek.",
      "CLI/channels: preserve bundled setup promotion metadata when a loaded partial channel plugin omits it, so adding a non-default account still moves legacy single-account fields such as Telegram `streaming` into `accounts.default`.",
      "Telegram: keep the sent-message ownership cache isolated per configured session store, so own-message reaction filtering remains correct with custom `session.store` paths.",
      "Security/update: fail closed when exact pinned npm plugin or hook-pack updates detect integrity drift, and expose aborted plugin drift details in `openclaw update --json`.",
      "Ollama: forward OpenClaw thinking control to native `/api/chat` requests as top-level `think`, so `/think off` and `openclaw agent --thinking off` suppress thinking on models such as qwen3 instead of idling until the watchdog fires. Fixes #69902. (#69967) Thanks @WZH8898.",
      "Memory-core/dreaming: suppress the startup-only managed dreaming cron unavailable warning when the cron service is still attaching, while preserving the runtime warning if cron genuinely remains unavailable. Fixes #69939. (#69941) Thanks @Sanjays2402.",
      "Mattermost: suppress reasoning-only payloads even when they arrive as blockquoted `> Reasoning:` text, preventing `/reasoning on` from leaking thinking into channel posts. (#69927) Thanks @lawrence3699.",
      "Discord: read `channel.parentId` through a safe accessor in the slash-command, reaction, and model-picker paths so partial `GuildThreadChannel` prototype getters no longer throw `Cannot access rawData on partial Channel` when commands like `/new` run from inside a thread. Fixes #69861. (#69908) Thanks @neeravmakwana.",
      "Discord: use safe channel name and parent accessors across voice command authorization, so `/vc` commands from partial Discord thread channels no longer crash on Carbon rawData getters. (#70199) Thanks @hanamizuki.",
      "Discord: make auto-thread parent transcript inheritance opt-in via `channels.discord.thread.inheritParent`, keeping newly created Discord thread sessions isolated by default while preserving explicit inheritance for configured accounts. Fixes #69907. (#69986) Thanks @Blahdude.",
      "Browser/Chrome MCP: reset cached existing-session control sessions when a `navigate_page` call times out, so one stuck navigation no longer poisons the browser profile until a gateway restart. (#69733) Thanks @ayeshakhalid192007-dev.",
      "Browser/Chrome MCP: propagate click timeouts and abort signals to existing-session actions so a stuck click fails fast and reconnects instead of poisoning the browser tool until gateway restart. (#63524) Thanks @dongseok0.",
      "Amazon Bedrock/prompt caching: resolve opaque application inference profile targets before injecting Bedrock cache points, require every routed target to support explicit cache points, and retry transient profile lookups instead of caching a false negative for the rest of the process. (#69953) Thanks @anirudhmarc and @vincentkoc.",
      "Gateway/channel health: base stale-socket recovery on provider-proven transport activity instead of inbound app-event freshness, preventing quiet Slack, Discord, Telegram, Matrix, and local-style channels from being restarted solely because no user traffic arrived. (#69833) Thanks @bek91.",
      "OpenCode Go: canonicalize stale bundled `opencode-go` base URLs from `/go` or `/go/v1` to `/zen/go` or `/zen/go/v1`, so older generated model metadata stops hitting the 404 HTML endpoint. (#69898).",
      "Plugins/channels: keep persisted channel auth state out of configured-channel and plugin auto-enable detection, so stale WhatsApp credentials alone no longer trigger plugin activation or runtime dependency repair. (#72836, #72844) Thanks @xiao398008 and @haishmg.",
      "CLI/channels: honor `channels.<id>.enabled=false` as a hard read-only presence opt-out, so env vars, manifest env vars, or stale persisted auth state no longer make disabled channel plugins appear in status, doctor, or setup-only discovery.",
      "Channels/preview streaming: centralize draft-preview finalization so Slack, Discord, Mattermost, and Matrix no longer flush temporary preview messages for media/error finals, and preserve first-reply threading for normal fallback delivery.",
      "Discord: keep slash command follow-up chunks ephemeral when the command is configured for ephemeral replies, so long `/status` output no longer leaks fallback model or runtime details into the public channel. (#69869) thanks @gumadeiras.",
      "Gateway/session history: re-check current auth and `chat.history` scope before later SSE keepalives and transcript updates, so active session-history streams close before delivering post-revocation events (#70237). Thanks @drobison00.",
      "Plugins/discovery: reject package plugin source entries that escape the package directory before explicit runtime entries or inferred built JavaScript peers can be used. (#69868) thanks @gumadeiras.",
      "CLI/channels: resolve channel presence through a shared policy that keeps ambient env vars and stale persisted auth from surfacing disabled bundled plugins in status, doctor, security audit, and cron delivery validation unless the channel or plugin is effectively enabled or explicitly configured. (#69862) Thanks @gumadeiras.",
      "Doctor/plugins: hydrate legacy partial interactive handler state before plugin reload clears dedupe caches, so `openclaw doctor` and post-update doctor runs no longer crash with `Cannot read properties of undefined (reading 'clear')`. (#70135) Thanks @ngutman.",
      "Control UI/config: preserve intentionally empty raw config snapshots when clearing pending updates so reset restores the original bytes instead of synthesizing JSON for blank config files. (#68178) Thanks @BunsDev.",
      "Cron/run-log: report generic `message` tool sends under the resolved delivery channel when they match the cron target, while preserving account-specific mismatch checks for delivery traces. (#69940) Thanks @davehappyminion.",
      "Doctor/channels: merge configured-channel doctor hooks across read-only, loaded, setup, and runtime plugin discovery so partial adapters no longer hide runtime-only compatibility repair or allowlist warnings, preserve disabled-channel opt-outs, and ignore malformed hook values before they can mask valid fallbacks. (#69919) Thanks @gumadeiras.",
      "Models/CLI: show bundled provider-owned static catalog rows in `models list --all` before auth is configured, including Kimi K2.6 rows for Moonshot, OpenRouter, and Vercel AI Gateway, while keeping local-only and workspace plugin catalog paths isolated. (#69909) Thanks @shakkernerd.",
      "Models/CLI: clarify that `models list --provider` expects provider ids and reject display labels before loading model discovery. (#70504) Thanks @shakkernerd.",
      "Configure: skip generic CLI startup bootstrap for `openclaw configure` and bound hint-only gateway probes so the onboarding TUI reaches its first prompt faster when the Gateway is unavailable. (#69984) Thanks @obviyus.",
      "Agents/harness: surface selected plugin harness failures directly instead of replaying the same turn through embedded PI, preventing misleading secondary PI auth errors and avoiding duplicate side effects (#69981). Thanks @pashpashpash.",
      "OpenAI Codex: add a ChatGPT device-code auth option beside browser OAuth, so headless or callback-hostile setups can sign in without relying on the localhost browser callback. (#69557) Thanks @vincentkoc.",
      "CLI sessions: keep provider-owned CLI sessions through implicit daily expiry while preserving explicit reset behavior, and retain Claude CLI binding metadata across gateway agent requests. (#70106) Thanks @obviyus.",
      "fix(config): accept truncateAfterCompaction (#68395). Thanks @MonkeyLeeT",
      "CLI/Claude: keep Claude CLI session bindings stable across OAuth access-token refreshes, so gateway restarts continue the same Claude conversation instead of minting a fresh one. (#70132) Thanks @obviyus.",
      "QQBot: add `INTERACTION` intent (`1 << 26`) to the gateway constants and include it in the `FULL_INTENTS` mask so interaction events are received. (#70143) Thanks @cxyhhhhh.",
      "Gateway/restart: preserve one-shot continuation instructions across gateway restarts so agents can resume and reply back to the original chat after reboot. (#63406) Thanks @VACInc.",
      "Gateway/restart: write restart sentinel files atomically so interrupted writes cannot leave a truncated sentinel behind. (#70225) Thanks @obviyus.",
      "Pairing: remove stale pending requests for a device when that paired device is deleted, so an old repair approval cannot recreate the removed device from leftover state (#70239). Thanks @drobison00.",
      "Security/dotenv: block workspace `.env` overrides for Matrix, Mattermost, IRC, and Synology endpoint settings so cloned workspaces cannot redirect bundled connector traffic through local endpoint config. (#70240) Thanks @drobison00.",
      "Telegram: require the same `/models` authorization for group model-picker callbacks, so unauthorized participants can no longer browse or change the session model through inline buttons. (#70235) Thanks @drobison00.",
      "Agents/Pi: keep the filtered tool-name allowlist active for embedded OpenAI/OpenAI Codex GPT-5 runs and compaction sessions, so bundled and client tools still execute after the Pi `0.68.1` session-tool allowlist change instead of stopping at plan-only replies with no tool call. (#70281) Thanks @jalehman.",
      "Agents/Pi: honor explicit `strict-agentic` execution contracts for incomplete-turn retry guards across providers, so manually opted-in local or compatible models get the same retry behavior without relying on OpenAI model inference. (#66750) Thanks @ziomancer.",
      "OpenShell/sandbox: pin verified file reads to an already-opened descriptor, walk the ancestor chain for symlinked parents on platforms without fd-path readlink, and re-check file identity so parent symlink swaps cannot redirect in-sandbox reads to host files outside the allowed mount root. (#69798) Thanks @drobison00.",
      "Gateway/Control UI: require authenticated Control UI read access before serving `/__openclaw/control-ui-config.json` when `gateway.auth` is enabled, so unauthenticated callers can no longer read bootstrap metadata. (#70247) Thanks @drobison00.",
      "Gateway/restart: default session-scoped restart sentinels to a one-shot agent continuation, so chat-initiated Gateway restarts acknowledge successful boot automatically. (#70269) Thanks @obviyus.",
      "Build/npm publish: fail postpublish verification when root `dist/*` files import bundled plugin runtime dependencies without mirroring them in the root package manifest, so Slack-style plugin deps cannot silently ship on the wrong module-resolution path again. (#60112) thanks @medns.",
      "Gateway/sessions: extend the webchat session-mutation guard to `sessions.compact` and `sessions.compaction.restore`, so `WEBCHAT_UI` clients are rejected from compaction-side session mutations consistently with the existing patch/delete guards. (#70716) Thanks @drobison00."
    ]
  },
  {
    "version": "2026.4.21",
    "date": "2026.4.21",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026421",
    "features": [
      {
        "title": "OpenAI/images",
        "description": "default the bundled image-generation provider and live media smoke tests to `gpt-image-2`, and advertise the newer 2K/4K OpenAI size hints in image-generation docs and tool metadata.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026421"
      },
      {
        "title": "Plugins/skills",
        "description": "add the Skill Workshop plugin, which captures reusable workflow corrections as pending or auto-applied workspace skills, runs threshold-based reviewer passes for stronger completion bias on reusable procedures, quarantines unsafe proposals, and refreshes skill availability after safe writes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026421"
      },
      {
        "title": "Plugin SDK/channels",
        "description": "add presentation and skills runtime contracts, decouple channel presentation rendering, and document message presentation cards so plugins can own richer interactive surfaces without channel-specific glue.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026421"
      },
      {
        "title": "Fireworks/models",
        "description": "add Kimi K2.6 (`fireworks/accounts/fireworks/models/kimi-k2p6`) to the bundled catalog and live-model priority list, while keeping Kimi thinking disabled for Fireworks K2.6 requests.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026421"
      },
      {
        "title": "Onboard/wizard",
        "description": "simplify the security disclaimer copy, and switch remaining onboarding pickers with long dynamic option lists to searchable autocompletes for search providers, plugin configuration, and model provider filtering (#69760). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/69760"
      },
      {
        "title": "Channels/preview streaming",
        "description": "stream tool-progress updates into live preview edits for Discord, Slack, and Telegram so in-flight replies show incremental tool state in the same preview message before finalization. (#69611) Thanks @thewilloftheshadow.",
        "href": "https://github.com/openclaw/openclaw/pull/69611"
      },
      {
        "title": "Ollama/onboard",
        "description": "populate the cloud-only model list from `ollama.com/api/tags`, cap the discovered list at 500, and fall back to static suggestions when ollama.com is unavailable. (#68463) Thanks @BruceMacD.",
        "href": "https://github.com/openclaw/openclaw/pull/68463"
      },
      {
        "title": "QQBot",
        "description": "extract a self-contained engine architecture with QR-code onboarding, native approval handling via `/bot-approve`, per-account resource stacks, credential backup/restore, shared media storage, and unified API/bridge/gateway modules. (#67960) Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/pull/67960"
      },
      {
        "title": "Matrix/startup",
        "description": "narrow Matrix runtime registration and defer setup/doctor surfaces so cold plugin registration spends about 1.8s less in `setChannelRuntime`. (#69782) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/69782"
      },
      {
        "title": "Telegram/plugin startup",
        "description": "load Telegram's bundled runtime setter through a narrow sidecar and native built-sidecar loading, cutting measured setup-runtime registration by about 14s while preserving runtime API compatibility. (#69786) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/69786"
      },
      {
        "title": "Discord/plugin startup",
        "description": "lazy-load the Carbon UI runtime and load Discord's bundled runtime setter through a narrow sidecar, cutting measured registration time by about 98% while keeping packaged installs off Carbon until the Discord UI surface is needed. (#69791) Thanks @gumadeiras.",
        "href": "https://github.com/openclaw/openclaw/pull/69791"
      }
    ],
    "fixes": [
      "Agents/ACP: skip the `sessions_send` A2A ping-pong flow when a parent sends to its own background oneshot ACP child, preventing parent/child echo loops while preserving normal A2A delivery for non-parent senders. (#69817) Thanks @scotthuang.",
      "Image generation: log failed provider/model candidates at warn level before automatic provider fallback, so OpenAI image failures are visible in the gateway log even when a later provider succeeds.",
      "Agents/subagents: stop terminal failed subagent runs from freezing or announcing captured reply text, so failover-exhausted runs report a clean failure instead of replaying stale assistant/tool output.",
      "Security/external content: strip common self-hosted LLM chat-template special-token literals, including Qwen/ChatML, Llama, Gemma, Mistral, Phi, and GPT-OSS markers, from wrapped external content and metadata, preventing tokenizer-layer role-boundary spoofing against OpenAI-compatible backends that preserve special tokens in user text.",
      "npm/install: mirror the `node-domexception` alias into root `package.json` `overrides`, so npm installs stop surfacing the deprecated `google-auth-library -> gaxios -> node-fetch -> fetch-blob -> node-domexception` chain pulled through Pi/Google runtime deps. Thanks @vincentkoc.",
      "Auth/commands: require owner identity (an owner-candidate match or internal `operator.admin`) for owner-enforced commands instead of treating wildcard channel `allowFrom` or empty owner-candidate lists as sufficient, so non-owner senders can no longer reach owner-only commands through a permissive fallback when `enforceOwnerForCommands=true` and `commands.ownerAllowFrom` is unset. (#69774) Thanks @drobison00.",
      "Control UI/CSP: tighten `img-src` to `'self' data:` only, and make Control UI avatar helpers drop remote `http(s)` and protocol-relative URLs so the UI falls back to the built-in logo/badge instead of issuing arbitrary remote image fetches. Same-origin avatar routes (relative paths) and `data:image/...` avatars still render. (#69773) Thanks @drobison00.",
      "CLI/channels: keep `status`, `health`, `channels list`, and `channels status` on read-only channel metadata when Telegram, Slack, Discord, or third-party channel plugins are configured, avoiding full bundled plugin runtime imports on those cold paths. Fixes #69042. (#69479) Thanks @gumadeiras.",
      "Synology Chat: validate outbound webhook `file_url` values against the shared SSRF policy before forwarding to the NAS, rejecting malformed URLs, non-`http(s)` schemes, and private/blocked network targets so the NAS cannot be used as a confused deputy to fetch internal addresses. (#69784) Thanks @eleqtrizit.",
      "LINE: validate outbound media URLs against the shared public-network guard before handing them to LINE, preserving arbitrary public HTTPS media while rejecting loopback, link-local, and private-network targets.",
      "Gateway/Control UI: require gateway auth on the Control UI avatar route (`GET /avatar/<agentId>` and `?meta=1` metadata) when auth is configured, matching the sibling assistant-media route, and propagate the existing gateway token through the UI avatar fetch (bearer header + authenticated blob URL) so authenticated dashboards still load local avatars. (#69775) Thanks @drobison00.",
      "Google Chat/auth: replace the Google auth `gaxios` shim with a scoped SSRF-guarded transport, validate service-account auth endpoints against trusted Google URLs, and let the plugin own its staged `gaxios` auth runtime instead of patching process-wide globals or the root CLI startup path. Thanks @vincentkoc.",
      "Exec/allowlist: reject POSIX parameter expansion forms such as `$VAR`, `$?`, `$$`, `$1`, and `$@` inside unquoted heredocs during shell approval analysis, so these heredocs no longer pass allowlist review as plain text. (#69795) Thanks @drobison00.",
      "Gateway/MCP loopback: derive owner-only tool visibility from distinct authenticated owner vs non-owner loopback bearers instead of the caller-controlled owner header, so non-owner MCP child processes cannot recover owner access by spoofing request metadata. (#69796) Thanks @drobison00.",
      "GitHub Copilot: update the default Opus model from `claude-opus-4.6` to `claude-opus-4.7` after GitHub removed Copilot support for 4.6. (#69818) Thanks @shakkernerd.",
      "OpenShell: pin host-side sandbox writes under the mounted root so symlink-parent rebinds cannot redirect `writeFile` outside the workspace during local mirror updates. (#69797) Thanks @drobison00.",
      "Ollama/media understanding: register Ollama as an image-capable media-understanding provider so `agents.defaults.imageModel.primary` values like `ollama/qwen2.5vl:7b` route through the Ollama plugin instead of failing as unknown models. (#69816) Thanks @soloclz.",
      "CLI/media understanding: make `openclaw infer image describe --model <provider/model>` execute the explicit image model instead of skipping description when that model supports native vision (#69816).",
      "Usage/providers: keep plugin-owned usage auth enabled when manifest-declared provider auth env vars such as `MINIMAX_CODE_PLAN_KEY` are present, so `/usage` can resolve MiniMax billing credentials through the provider plugin.",
      "Tlon/uploads: route both hosted Memex upload targets and custom-S3 presigned upload URLs through the shared SSRF guard so blocked private or loopback destinations fail before upload, while public upload URLs continue through the existing hosted upload flow. (#69794) Thanks @drobison00.",
      "Channels/thread routing: keep outbound replies in existing Slack, Mattermost, Matrix, Telegram, Discord, and QA-channel thread sessions by sharing the Plugin SDK thread-aware route builder across bundled plugins.",
      "Agents/replay: normalize restored assistant text content before provider replay and prompt submission, so legacy or repaired sessions no longer crash on `assistantMsg.content.flatMap`. (#69850) Thanks @fuller-stack-dev."
    ]
  },
  {
    "version": "2026.4.20",
    "date": "2026.4.20",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026420",
    "features": [
      {
        "title": "Onboard/wizard",
        "description": "restyle the setup security disclaimer with a single yellow warning banner, section headings and bulleted checklists, and un-dim the note body so key guidance is easy to scan; add a loading spinner during the initial model catalog load so the wizard no longer goes blank while it runs; add an \"API key\" placeholder to provider API key prompts. (#69553) Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/69553"
      },
      {
        "title": "Agents/prompts",
        "description": "strengthen the default system prompt and OpenAI GPT-5 overlay with clearer completion bias, live-state checks, weak-result recovery, and verification-before-final guidance.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026420"
      },
      {
        "title": "Models/costs",
        "description": "support tiered model pricing from cached catalogs and configured models, and include bundled Moonshot Kimi K2.6/K2.5 cost estimates for token-usage reports. (#67605) Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/pull/67605"
      },
      {
        "title": "Sessions/Maintenance",
        "description": "enforce the built-in entry cap and age prune by default, and prune oversized stores at load time so accumulated cron/executor session backlogs cannot OOM the gateway before the write path runs. (#69404) Thanks @bobrenze-bot.",
        "href": "https://github.com/openclaw/openclaw/pull/69404"
      },
      {
        "title": "Plugins/tests",
        "description": "reuse plugin loader alias and Jiti config resolution across repeated same-context loads, reducing import-heavy test overhead. (#69316) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/pull/69316"
      },
      {
        "title": "Cron",
        "description": "split runtime execution state into `jobs-state.json` so `jobs.json` stays stable for git-tracked job definitions. (#63105) Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/63105"
      },
      {
        "title": "Agents/compaction",
        "description": "send opt-in start and completion notices during context compaction. (#67830) Thanks @feniix.",
        "href": "https://github.com/openclaw/openclaw/pull/67830"
      },
      {
        "title": "Moonshot/Kimi",
        "description": "default bundled Moonshot setup, web search, and media-understanding surfaces to `kimi-k2.6` while keeping `kimi-k2.5` available for compatibility. (#69477) Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/pull/69477"
      },
      {
        "title": "Moonshot/Kimi",
        "description": "allow `thinking.keep = \"all\"` on `moonshot/kimi-k2.6`, and strip it for other Moonshot models or requests where pinned `tool_choice` disables thinking. (#68816) Thanks @aniaan.",
        "href": "https://github.com/openclaw/openclaw/pull/68816"
      },
      {
        "title": "BlueBubbles/groups",
        "description": "forward per-group `systemPrompt` config into inbound context `GroupSystemPrompt` so configured group-specific behavioral instructions (for example threaded-reply and tapback conventions) are injected on every turn. Supports `\"*\"` wildcard fallback matching the existing `requireMention` pattern. Closes #60665. (#69198) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/69198"
      },
      {
        "title": "Plugins/tasks",
        "description": "add a detached runtime registration contract so plugin executors can own detached task lifecycle and cancellation without reaching into core task internals. (#68915) Thanks @mbelinky.",
        "href": "https://github.com/openclaw/openclaw/pull/68915"
      },
      {
        "title": "Terminal/logging",
        "description": "optimize `sanitizeForLog()` by replacing the iterative control-character stripping loop with a single regex pass while preserving the existing ANSI-first sanitization behavior. (#67205) Thanks @bulutmuf.",
        "href": "https://github.com/openclaw/openclaw/pull/67205"
      },
      {
        "title": "QA/CI",
        "description": "make `openclaw qa suite` and `openclaw qa telegram` fail by default when scenarios fail, add `--allow-failures` for artifact-only runs, and tighten live-lane defaults for CI automation. (#69122) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/69122"
      },
      {
        "title": "Mattermost",
        "description": "stream thinking, tool activity, and partial reply text into a single draft preview post that finalizes in place when safe. (#47838) thanks @ninjaa.",
        "href": "https://github.com/openclaw/openclaw/pull/47838"
      }
    ],
    "fixes": [
      "Exec/YOLO: stop rejecting gateway-host exec in `security=full` plus `ask=off` mode via the Python/Node script preflight hardening path, so promptless YOLO exec once again runs direct interpreter stdin and heredoc forms such as `node <<'NODE' .. NODE`.",
      "OpenAI Codex: normalize legacy `openai-completions` transport overrides on default OpenAI/Codex and GitHub Copilot-compatible hosts back to the native Codex Responses transport while leaving custom proxies untouched. (#45304, #42194) Thanks @dyss1992 and @DeadlySilent.",
      "Anthropic/plugins: scope Anthropic `api: \"anthropic-messages\"` defaulting to Anthropic-owned providers, so `openai-codex` and other providers without an explicit `api` no longer get rewritten to the wrong transport. Fixes #64534.",
      "fix(qqbot): add SSRF guard to direct-upload URL paths in uploadC2CMedia and uploadGroupMedia [AI-assisted]. (#69595) Thanks @pgondhi987.",
      "fix(gateway): enforce allowRequestSessionKey gate on template-rendered mapping sessionKeys. (#69381) Thanks @pgondhi987.",
      "Browser/Chrome MCP: surface `DevToolsActivePort` attach failures as browser-connectivity errors instead of a generic \"waiting for tabs\" timeout, and point signed-out fallbacks toward the managed `openclaw` profile.",
      "Webchat/images: treat inline image attachments as media for empty-turn gating while still ignoring metadata-only blank turns. (#69474) Thanks @Jaswir.",
      "Discord/think: only show `adaptive` in `/think` autocomplete for provider/model pairs that actually support provider-managed adaptive thinking, so GPT/OpenAI models no longer advertise an Anthropic-only option.",
      "Thinking: only expose `max` for models that explicitly support provider max reasoning, and remap stored `max` settings to the largest supported thinking mode when users switch to another model.",
      "Gateway/usage: bound the cost usage cache with FIFO eviction so date/range lookups cannot grow unbounded. (#68842) Thanks @Feelw00.",
      "OpenAI/Responses: resolve `/think` levels against each GPT model's supported reasoning efforts so `/think off` no longer becomes high reasoning or sends unsupported `reasoning.effort: \"none\"` payloads.",
      "Lobster/TaskFlow: allow managed approval resumes to use `approvalId` without a resume token, and persist that id in approval wait state. (#69559) Thanks @kirkluokun.",
      "Plugins/startup: install bundled runtime dependencies into each plugin's own runtime directory, reuse source-checkout repair caches after rebuilds, and log only packages that were actually installed so repeated Gateway starts stay quiet once deps are present.",
      "Plugins/startup: ignore pnpm's `npm_execpath` when repairing bundled plugin runtime dependencies and skip workspace-only package specs so npm-only install flags or local workspace links do not break packaged plugin startup.",
      "MCP: block interpreter-startup env keys such as `NODE_OPTIONS` for stdio servers while preserving ordinary credential and proxy env vars. (#69540) Thanks @drobison00.",
      "Agents/shell: ignore non-interactive placeholder shells like `/usr/bin/false` and `/sbin/nologin`, falling back to `sh` so service-user exec runs no longer exit immediately. (#69308) Thanks @sk7n4k3d.",
      "Setup/TUI: relaunch the setup hatch TUI in a fresh process while preserving the configured gateway target and auth source, so onboarding recovers terminal state cleanly without exposing gateway secrets on command-line args. (#69524) Thanks @shakkernerd.",
      "Codex: avoid re-exposing the image-generation tool on native vision turns with inbound images, and keep bare image-model overrides on the configured image provider. (#65061) Thanks @zhulijin1991.",
      "Sessions/reset: clear auto-sourced model, provider, and auth-profile overrides on `/new` and `/reset` while preserving explicit user selections, so channel sessions stop staying pinned to runtime fallback choices. (#69419) Thanks @sk7n4k3d.",
      "Sessions/costs: snapshot `estimatedCostUsd` like token counters so repeated persist paths no longer compound the same run cost by up to dozens of times. (#69403) Thanks @MrMiaigi.",
      "OpenAI Codex: route ChatGPT/Codex OAuth Responses requests through the `/backend-api/codex` endpoint so `openai-codex/gpt-5.4` no longer hits the removed `/backend-api/responses` alias. (#69336) Thanks @mzogithub.",
      "OpenAI/Responses: omit disabled reasoning payloads when `/think off` is active, so GPT reasoning models no longer receive unsupported `reasoning.effort: \"none\"` requests. (#61982) Thanks @a-tokyo.",
      "Gateway/pairing: treat loopback shared-secret node-host, TUI, and gateway clients as local for pairing decisions, so trusted local tools no longer reconnect as remote clients and fail with `pairing required`. (#69431) Thanks @SARAMALI15792.",
      "Active Memory: degrade gracefully when memory recall fails during prompt building, logging a warning and letting the reply continue without memory context instead of failing the whole turn. (#69485) Thanks @Magicray1217.",
      "Ollama: add provider-policy defaults for `baseUrl` and `models` so implicit local discovery can run before config validation rejects a minimal Ollama provider config. (#69370) Thanks @PratikRai0101.",
      "Agents/model selection: clear transient auto-failover session overrides before each turn so recovered primary models are retried immediately without emitting user-override reset warnings. (#69365) Thanks @hitesh-github99.",
      "Auto-reply: apply silent `NO_REPLY` policy per conversation type, so direct chats get a helpful rewritten reply while groups and internal deliveries can remain quiet. (#68644) Thanks @Takhoffman.",
      "Telegram/status reactions: honor `messages.removeAckAfterReply` when lifecycle status reactions are enabled, clearing or restoring the reaction after success/error using the configured hold timings. (#68067) Thanks @poiskgit.",
      "Web search/plugins: resolve plugin-scoped SecretRef API keys for bundled Exa, Firecrawl, Gemini, Kimi, Perplexity, Tavily, and Grok web-search providers when they are selected through the shared web-search config. (#68424) Thanks @afurm.",
      "Telegram/polling: raise the default polling watchdog threshold from 90s to 120s and add configurable `channels.telegram.pollingStallThresholdMs` (also per-account) so long-running Telegram work gets more room before polling is treated as stalled. (#57737) Thanks @Vitalcheffe.",
      "Telegram/polling: bound the persisted-offset confirmation `getUpdates` probe with a client-side timeout so a zombie socket cannot hang polling recovery before the runner watchdog starts. (#50368) Thanks @boticlaw.",
      "Agents/Pi runner: retry silent `stopReason=error` turns with no output when no side effects ran, so non-frontier providers that briefly return empty error turns get another chance instead of ending the session early. (#68310) Thanks @Chased1k.",
      "Plugins/memory: preserve the active memory capability when read-only snapshot plugin loads run, so status and provider discovery paths no longer wipe memory public artifacts. (#69219) Thanks @zeroaltitude.",
      "Plugins: keep only the highest-precedence manifest when distinct discovered plugins share an id, so lower-precedence global or workspace duplicates no longer load beside bundled or config-selected plugins. (#41626) Thanks @Tortes.",
      "fix(security): block MINIMAX_API_HOST workspace env injection and remove env-driven URL routing [AI-assisted]. (#67300) Thanks @pgondhi987.",
      "Cron/delivery: treat explicit `delivery.mode: \"none\"` runs as not requested even if the runner reports `delivered: false`, so no-delivery cron jobs no longer persist false delivery failures or errors. (#69285) Thanks @matsuri1987.",
      "Plugins/install: repair active and default-enabled bundled plugin runtime dependencies before import in packaged installs, so bundled Discord, WhatsApp, Slack, Telegram, and provider plugins work without putting their dependency trees in core.",
      "BlueBubbles: raise the outbound `/api/v1/message/text` send timeout default from 10s to 30s, and add a configurable `channels.bluebubbles.sendTimeoutMs` (also per-account) so macOS 26 setups where Private API iMessage sends stall for 60+ seconds no longer silently lose messages at the 10s abort. Probes, chat lookups, and health checks keep the shorter 10s default. Fixes #67486. (#69193) Thanks @omarshahine.",
      "Agents/bootstrap: budget truncation markers against per-file caps, preserve source content instead of silently wasting bootstrap bytes, and avoid marker-only output in tiny-budget truncation cases. (#69114) Thanks @BKF-Gitty.",
      "Context engine/plugins: stop rejecting third-party context engines whose `info.id` differs from the registered plugin slot id. The strict-match contract added in 2026.4.14 broke `lossless-claw` and other plugins whose internal engine id does not equal the slot id they are registered under, producing repeated `info.id must match registered id` lane failures on every turn. Fixes #66601. (#66678) Thanks @GodsBoy.",
      "Agents/compaction: rename embedded Pi compaction lifecycle events to `compaction_start` / `compaction_end` so OpenClaw stays aligned with `pi-coding-agent` 0.66.1 event naming. (#67713) Thanks @mpz4life.",
      "Security/dotenv: block all `OPENCLAW_*` keys from untrusted workspace `.env` files so workspace-local env loading fails closed for new runtime-control variables instead of silently inheriting them. (#473) Thanks @eleqtrizit.",
      "Gateway/device pairing: restrict non-admin paired-device sessions (device-token auth) to their own pairing list, approve, and reject actions so a paired device cannot enumerate other devices or approve/reject pairing requests authored by another device. Admin and shared-secret operator sessions retain full visibility. (#69375) Thanks @eleqtrizit.",
      "Agents/gateway tool: extend the agent-facing `gateway` tool's config mutation guard so model-driven `config.patch` and `config.apply` cannot rewrite operator-trusted paths (sandbox, plugin trust, gateway auth/TLS, hook routing and tokens, SSRF policy, MCP servers, workspace filesystem hardening) and cannot bypass the guard by editing per-agent sandbox, tools, or embedded-Pi overrides in place under `agents.list[]`. (#69377) Thanks @eleqtrizit.",
      "Gateway/websocket broadcasts: require `operator.read` (or higher) for chat, agent, and tool-result event frames so pairing-scoped and node-role sessions no longer passively receive session chat content, and scope-gate unknown broadcast events by default. Plugin-defined `plugin.*` broadcasts are scoped to operator.write/admin, and status/transport events (`heartbeat`, `presence`, `tick`, etc.) remain unrestricted. Per-client sequence numbers preserve per-connection monotonicity. (#69373) Thanks @eleqtrizit.",
      "Agents/compaction: always reload embedded Pi resources through an explicit loader and reapply reserve-token overrides so runs without extension factories no longer silently lose compaction settings before session start. (#67146) Thanks @ly85206559.",
      "Memory-core/dreaming: normalize sweep timestamps and reuse hashed narrative session keys for fallback cleanup so Dreaming narrative sub-sessions stop leaking. (#67023) Thanks @chiyouYCH.",
      "Gateway/startup: delay HTTP bind until websocket handlers are attached, so immediate post-startup websocket health/connect probes no longer hit the startup race window. (#43392) Thanks @dalefrieswthat.",
      "Codex/app-server: release the session lane when a downstream consumer throws while draining the `turn/completed` notification, so follow-up messages after a Codex plugin reply stop queueing behind a stale lane lock. Fixes #67996. (#69072) Thanks @ayeshakhalid192007-dev.",
      "Codex/app-server: default approval handling to `on-request` so Codex harness sessions do not start with overly permissive tool approvals. (#68721) Thanks @Lucenx9.",
      "Cron/delivery: keep isolated cron chat delivery tools available, resolve `channel: \"last\"` targets from the gateway, show delivery previews in `cron list/show`, and avoid duplicate fallback sends after direct message-tool delivery. (#69587) Thanks @obviyus.",
      "Cron/Telegram: key isolated direct-delivery dedupe to each cron execution instead of the reused session id, so recurring Telegram announce runs no longer report delivered while silently skipping later sends. (#69000) Thanks @obviyus.",
      "Models/Kimi: default bundled Kimi thinking to off and normalize Anthropic-compatible `thinking` payloads so stale session `/think` state no longer silently re-enables reasoning on Kimi runs. (#68907) Thanks @frankekn.",
      "Control UI/cron: keep the runtime-only `last` delivery sentinel from being materialized into persisted cron delivery and failure-alert channel configs when jobs are created or edited. (#68829) Thanks @tianhaocui.",
      "OpenAI/Responses: strip orphaned reasoning blocks before outbound Responses API calls so compacted or restored histories no longer fail on standalone reasoning items. (#55787) Thanks @suboss87.",
      "Cron/CLI: parse PowerShell-style `--tools` allow-lists the same way as comma-separated input, so `cron add` and `cron edit` no longer persist `exec read write` as one combined tool entry on Windows. (#68858) Thanks @chen-zhang-cs-code.",
      "Browser/user-profile: let existing-session `profile=\"user\"` tool calls auto-route to a connected browser node or use explicit `target=\"node\"`, while still honoring explicit `target=\"host\"` pinning. (#48677) Thanks @mbelinky.",
      "Discord/slash commands: tolerate partial Discord channel metadata in slash-command and model-picker flows so partial channel objects no longer crash when channel names, topics, or thread parent metadata are unavailable. (#68953) Thanks @dutifulbob.",
      "BlueBubbles: consolidate outbound HTTP through a typed `BlueBubblesClient` that resolves the SSRF policy once at construction so image attachments stop getting blocked on localhost and reactions stop getting blocked on private-IP BB deployments. Fixes #34749 and #59722. (#68234) Thanks @omarshahine.",
      "Cron/gateway: reject ambiguous announce delivery config at add/update time so invalid multi-channel or target-id provider settings fail early instead of persisting broken cron jobs. (#69015) Thanks @obviyus.",
      "Cron/main-session delivery: preserve `heartbeat.target=\"last\"` through deferred wake queuing, gateway wake forwarding, and same-target wake coalescing so queued cron replies still return to the last active chat. (#69021) Thanks @obviyus.",
      "Cron/gateway: ignore disabled channels when announce delivery ambiguity is checked, and validate main-session delivery patches against the live cron service default agent so hot-reloaded agent config does not falsely reject valid updates. (#69040) Thanks @obviyus.",
      "Matrix/allowlists: hot-reload `dm.allowFrom` and `groupAllowFrom` entries on inbound messages while keeping config removals authoritative, so Matrix allowlist changes no longer require a channel restart to add or revoke a sender. (#68546) Thanks @johnlanni.",
      "BlueBubbles: always set `method` explicitly on outbound text sends (`\"private-api\"` when available, `\"apple-script\"` otherwise), and prefer Private API on macOS 26 even for plain text. Fixes silent delivery failure on macOS setups without Private API where an omitted `method` let BB Server fall back to version-dependent default behavior that silently drops the message (#64480), and the AppleScript `-1700` error on macOS 26 Tahoe plain text sends (#53159). (#69070) Thanks @xqing3.",
      "Matrix/commands: recognize slash commands that are prefixed with the bot's Matrix mention, so room messages like `@bot:server /new` trigger the command path without requiring custom mention regexes. (#68570) Thanks @nightq and @johnlanni.",
      "Gateway/pairing: return reason-specific `PAIRING_REQUIRED` details, remediation hints, and request ids so unapproved-device and scope-upgrade failures surface actionable recovery guidance in the CLI and Control UI. (#69227) Thanks @obviyus.",
      "Agents/subagents: include requested role and runtime timing on subagent failure payloads so parent agents can correlate failed or timed-out child work. (#68726) Thanks @BKF-Gitty.",
      "Gateway/sessions: reject stale agent-scoped sessions after an agent is removed from config while preserving legacy default-agent main-session aliases. (#65986) Thanks @bittoby.",
      "Doctor/gateway: surface pending device pairing requests, scope-upgrade approval drift, and stale device-token mismatch repair steps so `openclaw doctor --fix` no longer leaves pairing/auth setup failures unexplained. (#69210) Thanks @obviyus.",
      "Cron/isolated-agent: preserve explicit `delivery.mode: \"none\"` message targets for isolated runs without inheriting implicit `last` routing, so agent-initiated Telegram sends keep their authored destination while bare `mode:none` jobs stay targetless. (#69153) Thanks @davehappyminion and @nikilster.",
      "Cron/isolated-agent: keep `delivery.mode: \"none\"` account-only or thread-only configs from inheriting a stale implicit recipient, so isolated runs only resolve message routing when the job authored an explicit `to` target. (#69163) Thanks @davehappyminion and @nikilster.",
      "Gateway/TUI: retry session history while the local gateway is still finishing startup, so `openclaw tui` reconnects no longer fail on transient `chat.history unavailable during gateway startup` errors. (#69164) Thanks @shakkernerd.",
      "BlueBubbles/reactions: fall back to `love` when an agent reacts with an emoji outside the iMessage tapback set (`love`/`like`/`dislike`/`laugh`/`emphasize`/`question`), so wider-vocabulary model reactions like `👀` still produce a visible tapback instead of failing the whole reaction request. Configured ack reactions still validate strictly via the new `normalizeBlueBubblesReactionInputStrict` path. (#64693) Thanks @zqchris.",
      "BlueBubbles: prefer iMessage over SMS when both chats exist for the same handle, honor explicit `sms:` targets, and never silently downgrade iMessage-available recipients. (#61781) Thanks @rmartin.",
      "Telegram/setup: require numeric `allowFrom` user IDs during setup instead of offering unsupported `@username` DM resolution, and point operators to `from.id`/`getUpdates` for discovery. (#69191) Thanks @obviyus.",
      "GitHub Copilot/onboarding: default GitHub Copilot setup to `claude-opus-4.6` and keep the bundled default model list aligned, so new Copilot setups no longer start on the older `gpt-4o` default. (#69207) Thanks @obviyus.",
      "Gateway/status: separate reachability, capability, and read-probe reporting so connect-only or scope-limited sessions no longer look fully healthy, and normalize SSH targets entered as `ssh user@host`. (#69215) Thanks @obviyus.",
      "Slack: fix outbound replies failing with \"unresolved SecretRef\" for accounts configured via `file` or `exec` secret sources; the send path now tolerates the runtime snapshot retaining an unresolved channel SecretRef when a boot-resolved token override is already available. (#68954) Thanks @openperf.",
      "Control UI/device pairing: explain scope and role approval upgrades during reconnects, and show requested versus approved access in the Control UI and `openclaw devices` so broader reconnects no longer look like lost pairings. (#69221) Thanks @obviyus.",
      "Gateway/Control UI: surface pending scope, role, and device-metadata pairing approvals in auth errors and Control UI hints so broader reconnects no longer look like random auth breakage. (#69226) Thanks @obviyus."
    ]
  }
]
