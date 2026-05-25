# MC #693 Ada Gateway Incident Agent Dump

This is the copy/paste packet for another agent. It is intentionally redundant.

## Summary

- **impact:** Ada gateway degraded across Discord/Telegram; Discord threads stopped getting useful replies while the old /health endpoint reported green.
- **root_class:** OpenClaw gateway event-loop starvation and backpressure failure with shallow health checks.
- **not_user_fault:** True
- **worst_observed_event_loop_delay_ms:** 84020.3
- **operator_verdict:** A live process lied about being healthy. The control plane was overloaded and health checks were too shallow.

## Status after fix

- **health:** `"ok=true ready=true degraded=false in post-fix checks"`
- **ready:** `"ready=true failing=[] in post-fix checks"`
- **foreground_concurrency:** `1`
- **subagent_concurrency:** `4`
- **discord_read_path:** `"verified"`
- **discord_send_path:** `"not verified from Telegram-bound context due cross-context policy"`
- **voice_autojoin:** `"re-enabled per Henry; OpenAI realtime quota currently causes voice startup skip"`
- **native_hook_relay:** `"re-enabled per Henry by removing systemd disable drop-in; env gate patch remains available"`

## Symptom counts
```json
{
  "liveness_warning": 15,
  "model_fallback": 39,
  "voice_quota": 7,
  "sigterm": 34,
  "health_monitor": 20,
  "warmup_timeout": 19,
  "fetch_timeout_discord": 7,
  "gateway_ready": 19,
  "stuck_session": 27,
  "stuck_recovery": 18,
  "channels_resolved": 20,
  "discord_init": 18,
  "voice_joining": 6,
  "delivery": 32,
  "sigusr1": 6,
  "draining": 1
}
```

## Public assets

- agent_dump_json: /incident-dumps/mc693/mc693-agent-dump.json
- agent_dump_markdown: /incident-dumps/mc693/mc693-agent-dump.md
- gateway_incident_window_log: /incident-dumps/mc693/gateway-incident-window.log
- gateway_incident_highlights_log: /incident-dumps/mc693/gateway-incident-highlights.log
- qa_report: /incident-dumps/mc693/qa-report.md
- qa_evidence: /incident-dumps/mc693/evidence.json

## Raw file contents

### gateway_incident_window_log

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/evidence-pack-20260525T180905Z/gateway-incident-window.log`
- sha256: `d4c32cfd57bb55586916d6617ea8722cafc3a8444c7d16b74a1a14456f2d32ef`
- bytes: `522012`

```text
2026-05-25T13:40:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:40:42.454+00:00 [ws] ⇄ res ✓ agent 861ms runId=a81a154c-7d92-43c2-8982-a96fb1cf96b7 conn=49a84fb3…01bf id=89f63929…e2c6
2026-05-25T13:40:59+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:40:59.385+00:00 [ws] closed before connect conn=7233ec76-c20b-4ff7-bae6-eb1ff86ca425 peer=127.0.0.1:48218->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:41:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:41:31.450+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=133s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=119s recovery=none
2026-05-25T13:42:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:01.458+00:00 [diagnostic] long-running session: sessionId=d4edd589-2dfb-468b-b825-6b2abafa2a2d sessionKey=agent:main:discord:channel:1472358846444867615 state=processing age=140s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=20s activeTool=bash activeToolCallId=call_kWih7RQT3uB0q6AsSt77S69f activeToolAge=172s recovery=none
2026-05-25T13:42:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:01.469+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=163s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=149s recovery=none
2026-05-25T13:42:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:31.518+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=121s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=120s activeTool=bash activeToolCallId=call_DEp9b9Q6cdCMKZ0oVxBP7K8x activeToolAge=194s recovery=none
2026-05-25T13:42:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:31.537+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=193s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=179s recovery=none
2026-05-25T13:42:41+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:41.636+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=181469 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=1
2026-05-25T13:42:53+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:53.700+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T13:42:54+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:54.052+00:00 ⚠️ 🛠️ `cd /tmp/mc97-codex-review && codex review --uncommitted > ~/clawd/output/mc97-stripe-payments/codex-rev… (in ~/clawd)` failed
2026-05-25T13:42:54+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:54.815+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=240 hit=no source=
2026-05-25T13:42:54+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:54.932+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:43:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:43:01.513+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization interval=30s eventLoopDelayP99Ms=1977.6 eventLoopDelayMaxMs=7411.3 eventLoopUtilization=0.96 cpuCoreRatio=0.82 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=7s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:explicit:mc-auto-ada-100(processing/embedded_run,q=0,age=1343s last=codex_app_server:notification:rawResponseItem/completed)|agent:main:discord:channel:1472358846444867615(processing/tool_call,q=1,age=2s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1508401391515865118(processing/embedded_run,q=1,age=3s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-688(processing/tool_call,q=0,age=719s last=codex_app_server:notification:hook/started)]
2026-05-25T13:43:15+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:43:15.817+00:00 [ws] ⇄ res ✓ chat.history 54ms conn=59eebbcb…fbbb id=9a8940d1…4820
2026-05-25T13:44:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:44:20.312+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=201077 queueAhead=1 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:44:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:44:34.109+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=141 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T13:44:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:44:34.124+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:45:56+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:45:56.139+00:00 [ws] ⇄ res ✓ cron.run 261ms conn=74185f42…c403 id=7a2baee1…dadf
2026-05-25T13:46:11+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:11.258+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=2500b4ff-62ec-4288-9f70-e6ec6c3e9734 sessionId=2500b4ff-62ec-4288-9f70-e6ec6c3e9734 phase=core-plugin-tools totalMs=2626 stages=tool-policy:2129ms@2129ms,workspace-policy:1ms@2130ms,base-coding-tools:0ms@2130ms,shell-tools:0ms@2130ms,openclaw-tools:session-workspace:20ms@2150ms,openclaw-tools:image-tool:25ms@2175ms,openclaw-tools:image-generate-tool:0ms@2175ms,openclaw-tools:video-generate-tool:431ms@2606ms,openclaw-tools:music-generate-tool:14ms@2620ms,openclaw-tools:pdf-tool:0ms@2620ms,openclaw-tools:web-search-tool:0ms@2620ms,openclaw-tools:web-fetch-tool:0ms@2620ms,openclaw-tools:message-tool:3ms@2623ms,openclaw-tools:nodes-tool:0ms@2623ms,openclaw-tools:core-tool-list:0ms@2623ms,openclaw-tools:0ms@2623ms,message-provider-policy:0ms@2623ms,model-provider-policy:0ms@2623ms,authorization-policy:0ms@2623ms,schema-normalization:3ms@2626ms,tool-hooks:0ms@2626ms,abort-wrappers:0ms@2626ms,deferred-followup-descriptions:0ms@2626ms,attempt:create-openclaw-coding-tools:0ms@2626ms,attempt:tools-allow:0ms@2626ms
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:20.500+00:00 DONE: MC #100 is in review with evidence attached.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: What changed:
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - Verified existing GitHub repos under `h-mascot`; no duplicate repos needed.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - Configured Vercel routing for all six OpenClaw domains.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - Added permanent Moltbot and Clawdbot redirects to OpenClaw equivalents.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - Fixed `openclaw-training.com` DNS in Namecheap by removing the parking CNAME and URL redirect.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - Removed a hardcoded Vercel token from `scripts/vercel-domain-mapping.sh`.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: Proof:
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - QA report: http://100.104.229.62:3000/docs/source/crew-home/Output/mc-100/final/qa-report.md
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - MC task: http://100.104.229.62:3000/api/tasks/100
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: One note: some recursive DNS still briefly showed the old parking IP for `openclaw-training.com`, but authoritative Namecheap DNS, Vercel config, HTTPS, and screenshots all verified clean.
2026-05-25T13:46:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:20.512+00:00 ⚠️ 🛠️ `scripts/entity-fs-link.sh output/mc-100/final/qa-report.md; scripts/entity-fs-link.sh output/mc-100/final/screenshots/o… (in ~/clawd)` failed
2026-05-25T13:46:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:32.761+00:00 [ws] ⇄ res ✓ cron.list 453ms conn=7031f607…d383 id=5ac4b630…1bf0
2026-05-25T13:46:40+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:40.385+00:00 [ws] ⇄ res ✓ cron.list 272ms conn=4f74213c…8b56 id=6ffa94ec…ef81
2026-05-25T13:47:06+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:06.605+00:00 [ws] ⇄ res ✓ cron.list 279ms conn=bfebb69e…efc1 id=c9797041…ea98
2026-05-25T13:47:06+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:06.998+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=99 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T13:47:07+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:07.006+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:47:08+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:08.605+00:00 [diagnostic] liveness warning: reasons=event_loop_delay interval=30s eventLoopDelayP99Ms=1717.6 eventLoopDelayMaxMs=6945.8 eventLoopUtilization=0.809 cpuCoreRatio=0.76 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=95s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1472358846444867615(processing/embedded_run,q=1,age=3s last=codex_app_server:notification:item/completed)|agent:main:discord:channel:1508401391515865118(processing/embedded_run,q=1,age=25s last=codex_app_server:notification:turn/completed)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=966s last=codex_app_server:notification:item/started)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=1,age=25s last=embedded_run:started)]
2026-05-25T13:47:27+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:27.602+00:00 [ws] ⇄ res ✓ cron.list 1097ms conn=1efe9b82…b7d9 id=5286bf9c…166e
2026-05-25T13:47:38+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:38.620+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=125s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=33s activeTool=bash activeToolCallId=call_TmALRxevCzl3ydw2kaZLW6Fn activeToolAge=125s recovery=none
2026-05-25T13:47:46+0000 ada-gateway crontab[3320836]: (henrymascot) LIST (henrymascot)
2026-05-25T13:48:25+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:48:25.806+00:00 [ws] ⇄ res ✓ cron.list 308ms conn=1f1bd054…14df id=10fe8261…1e85
2026-05-25T13:48:43+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:48:43.461+00:00 [ws] ⇄ res ✓ cron.list 2854ms conn=31e38b93…462f id=c768fe1b…38b8
2026-05-25T13:49:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:49:01.805+00:00 [ws] ⇄ res ✓ cron.list 2474ms conn=13c40053…8afd id=7150d08f…b0c7
2026-05-25T13:49:38+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:49:38.728+00:00 [diagnostic] stalled session: sessionId=d4edd589-2dfb-468b-b825-6b2abafa2a2d sessionKey=agent:main:discord:channel:1472358846444867615 state=processing age=129s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=codex_app_server:notification:item/started lastProgressAge=129s recovery=none
2026-05-25T13:50:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:50:36.798+00:00 [ws] ⇄ res ✓ agent 101ms runId=f80277f8-88b1-40b3-82d8-6de38421c103 conn=cc9b8584…6cc2 id=b79252ad…5d57
2026-05-25T13:50:53+0000 ada-gateway crontab[3324684]: (henrymascot) LIST (henrymascot)
2026-05-25T13:50:55+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:50:55.423+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=649 hit=no source=
2026-05-25T13:50:55+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:50:55.725+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:51:09+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:51:09.134+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization interval=30s eventLoopDelayP99Ms=6417.3 eventLoopDelayMaxMs=7637.8 eventLoopUtilization=0.967 cpuCoreRatio=0.747 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=99s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1472358846444867615(processing/embedded_run,q=1,age=1s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=1207s last=codex_app_server:notification:hook/completed)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=1,age=1s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-689(processing/embedded_run,q=0,age=391s last=codex_app_server:notification:rawResponseItem/completed)]
2026-05-25T13:51:21+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:51:21.776+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, image/jpeg, 53 chars)
2026-05-25T13:51:39+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:51:39.132+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=129s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:turn/diff/updated lastProgressAge=3s activeTool=bash activeToolCallId=call_o1J38qHLL7GsdKd6wLRrJqSg activeToolAge=129s recovery=none
2026-05-25T13:52:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:00.935+00:00 [ws] ⇄ res ✓ cron.list 7154ms conn=3fdd5729…d67a id=037fde1c…d92c
2026-05-25T13:52:12+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:12.850+00:00 [ws] closed before connect conn=6c022b14-12de-42b5-a427-2f90cd1b08fa peer=127.0.0.1:40550->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.054+00:00 [ws] closed before connect conn=8430dd06-8fa4-48f3-bccc-063361298f53 peer=127.0.0.1:40558->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.246+00:00 [ws] closed before connect conn=1e60fbe7-108f-4241-9b82-79ce88cf9281 peer=127.0.0.1:40570->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.475+00:00 [ws] closed before connect conn=a62ff74b-148d-476a-8bc8-19db77864f0b peer=127.0.0.1:54180->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.609+00:00 [ws] closed before connect conn=e610bf84-12ce-4a14-b6bb-9a52732f4329 peer=127.0.0.1:54192->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.719+00:00 [ws] closed before connect conn=386be13c-e507-44a7-9cb5-1d047758c928 peer=127.0.0.1:54206->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:52:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:52:13.779+00:00 [ws] closed before connect conn=4d5bee7c-badd-41cb-8537-4db91e560080 peer=127.0.0.1:54210->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:53:19+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:19.577+00:00 [ws] ⇄ res ✓ cron.list 9434ms conn=f9f2022d…8adb id=f3af04c2…10b0
2026-05-25T13:53:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:20.710+00:00 [ws] closed before connect conn=8bab0f74-2ea5-4324-9ad1-e1d48b1fa693 peer=127.0.0.1:38564->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:53:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:20.941+00:00 [ws] closed before connect conn=6cbc0ab5-8e8d-4faa-85bb-ecf19a53ba6c peer=127.0.0.1:47618->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:53:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:34.849+00:00 [ws] ⇄ res ✓ cron.list 10190ms conn=de1c5680…4d58 id=0ac23326…24f1
2026-05-25T13:53:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:42.932+00:00 [ws] handshake timeout conn=e4258f6a-4024-4ae4-81dd-72a9bab995b0 peer=127.0.0.1:47640->127.0.0.1:18789 remote=127.0.0.1
2026-05-25T13:53:43+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:43.073+00:00 [ws] closed before connect conn=510cefd6-d7cb-4003-a0f0-017701a79aaf peer=127.0.0.1:56240->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T13:53:43+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:43.151+00:00 [ws] closed before connect conn=e4258f6a-4024-4ae4-81dd-72a9bab995b0 peer=127.0.0.1:47640->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1000 reason=n/a
2026-05-25T13:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:49.743+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=260s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=tool:bash:ended lastProgressAge=48s recovery=none
2026-05-25T13:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:49.774+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=148s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=109s recovery=none
2026-05-25T13:54:19+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:54:19.748+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=178s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=139s recovery=none
2026-05-25T13:54:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:54:49.748+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=208s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=169s recovery=none
2026-05-25T13:55:19+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:19.744+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=238s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=199s recovery=none
2026-05-25T13:55:27+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:27.802+00:00 [gateway] cron: job updated
2026-05-25T13:55:27+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:27.844+00:00 [ws] ⇄ res ✓ cron.update 383ms conn=514f53ae…9c94 id=505ef7de…d2d3
2026-05-25T13:55:30+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:30.051+00:00 [ws] ⇄ res ✓ cron.status 389ms conn=656dd59b…1634 id=c0ff1a3d…9f0c
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.197+00:00 [agent/embedded] codex app-server turn idle timed out waiting for completion
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.246+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.261+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.306+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.335+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.380+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T13:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:33.427+00:00 [agent/embedded] codex app-server client retired after timed-out turn
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.537+00:00 [agent/embedded] embedded run failover decision: runId=f80277f8-88b1-40b3-82d8-6de38421c103 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.542+00:00 [diagnostic] lane task error: lane=main durationMs=299923 error="codex app-server client closed before turn completed"
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.546+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=212013 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.578+00:00 [diagnostic] lane task error: lane=session:agent:main:explicit:mc-auto-ada-101 durationMs=299960 error="codex app-server client closed before turn completed"
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.595+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:55:50+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:50.799+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=269s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=230s recovery=none
2026-05-25T13:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:51.391+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.798+00:00 [agent/embedded] embedded run failover decision: runId=37decfdf-cd58-46f5-a1c7-3ff7e35bfce0 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.802+00:00 [diagnostic] lane task error: lane=main durationMs=541247 error="codex app-server client closed before turn completed"
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.806+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=15240 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.872+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1508423882292461630 durationMs=541316 error="codex app-server client closed before turn completed"
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.884+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:03+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:03.517+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T13:56:06+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:06.488+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=437 hit=no source=
2026-05-25T13:56:11+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:11.945+00:00 [agent/embedded] embedded run failover decision: runId=a81a154c-7d92-43c2-8982-a96fb1cf96b7 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T13:56:11+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:11.950+00:00 [diagnostic] lane task error: lane=main durationMs=711629 error="codex app-server client closed before turn completed"
2026-05-25T13:56:11+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:11.953+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=8289 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:56:12+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:12.021+00:00 [diagnostic] lane task error: lane=session:agent:main:explicit:mc-auto-ada-689 durationMs=912800 error="codex app-server client closed before turn completed"
2026-05-25T13:56:12+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:12.033+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:14+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:14.560+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T13:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:17.010+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=216 hit=yes source=custom-1-main/b1c48fc8-clean.md
2026-05-25T13:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:18.015+00:00 [agents/tool-images] Image resized to fit limits: 1428x726px 478.4KB -> 72.4KB (-84.9%)
2026-05-25T13:56:20+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:20.804+00:00 [diagnostics/memory] memory pressure: level=warning reason=heap_threshold rssBytes=1193308160 heapUsedBytes=1098376088 thresholdBytes=1073741824
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.516+00:00 [agent/embedded] embedded run failover decision: runId=ada496e3-c2d9-49f0-9e09-a58c77af33f9 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.521+00:00 [diagnostic] lane task error: lane=main durationMs=1545639 error="codex app-server client closed before turn completed"
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.524+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=14413 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.593+00:00 [diagnostic] lane task error: lane=session:agent:main:explicit:mc-auto-ada-688 durationMs=1545712 error="codex app-server client closed before turn completed"
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.604+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:30+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:30.305+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=a81a154c-7d92-43c2-8982-a96fb1cf96b7 sessionId=mc-auto-ada-689 phase=core-plugin-tools totalMs=3595 stages=tool-policy:2477ms@2477ms,workspace-policy:2ms@2479ms,base-coding-tools:0ms@2479ms,shell-tools:0ms@2479ms,openclaw-tools:session-workspace:16ms@2495ms,openclaw-tools:image-tool:29ms@2524ms,openclaw-tools:image-generate-tool:0ms@2524ms,openclaw-tools:video-generate-tool:564ms@3088ms,openclaw-tools:music-generate-tool:22ms@3110ms,openclaw-tools:pdf-tool:0ms@3110ms,openclaw-tools:web-search-tool:0ms@3110ms,openclaw-tools:web-fetch-tool:0ms@3110ms,openclaw-tools:message-tool:5ms@3115ms,openclaw-tools:nodes-tool:0ms@3115ms,openclaw-tools:core-tool-list:1ms@3116ms,openclaw-tools:plugin-tools:471ms@3587ms,openclaw-tools:0ms@3587ms,message-provider-policy:0ms@3587ms,model-provider-policy:0ms@3587ms,authorization-policy:0ms@3587ms,schema-normalization:7ms@3594ms,tool-hooks:1ms@3595ms,abort-wrappers:0ms@3595ms,deferred-followup-descriptions:0ms@3595ms,attempt:create-openclaw-coding-tools:0ms@3595ms,attempt:tools-allow:0ms@3595ms
2026-05-25T13:56:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:33.487+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=89 hit=yes source=custom-1-main/f3d3b2a8-clean.md
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.810+00:00 [agent/embedded] embedded run failover decision: runId=8295d391-5c4b-43f7-8f5f-82830c018c0c stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.814+00:00 [diagnostic] lane task error: lane=main durationMs=1827722 error="codex app-server client closed before turn completed"
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.817+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=10143 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.911+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1506314998505275463 durationMs=1827818 error="codex app-server client closed before turn completed"
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.926+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:39+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:39.482+00:00 [memory] qmd manager initialized for agent "main" mode=full collections=3 durationMs=3250
2026-05-25T13:56:41+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:41.513+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=95 hit=yes source=custom-1-main/f3d3b2a8-clean.md
2026-05-25T13:56:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:49.428+00:00 [agents/auth-profiles] using external OAuth credential after refresh failure
2026-05-25T13:56:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:49.433+00:00 [agent/embedded] Profile openai-codex:henrino3@gmail.com timed out. Trying next account...
2026-05-25T13:56:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:49.439+00:00 [agent/embedded] embedded run failover decision: runId=94ac5ef2-06d4-494b-b8dc-7681538ba49c stage=assistant decision=rotate_profile reason=timeout from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a
2026-05-25T13:56:53+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:53.739+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=117 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-d4edd589.md
2026-05-25T13:56:53+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:53.747+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T13:57:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:00.568+00:00 [agents/auth-profiles] using external OAuth credential after refresh failure
2026-05-25T13:57:06+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:06.911+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=27356 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T13:57:09+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:09.267+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T13:57:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:13.141+00:00 [memory] qmd search denied by scope (channel=discord, chatType=channel, session=agent:main:discord:channel:1508423882292461630)
2026-05-25T13:57:15+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:15.194+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=501 hit=no source=
2026-05-25T13:57:23+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:23.315+00:00 [diagnostics/memory] memory pressure: level=warning reason=rss_threshold rssBytes=1817792512 heapUsedBytes=1687429264 thresholdBytes=1610612736
2026-05-25T13:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:42.211+00:00 exec: elevated command test -f scripts/crons/ec-skill-registry-review.sh && sed -...G_SCRIPT
2026-05-25T13:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: ls -la scripts/crons 2>/dev/null | sed -n '1,80p'
2026-05-25T13:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:42.222+00:00 [exec] elevated command find /home/henrymascot/clawd -maxdepth 4 \( -iname '*share...' -o -iname '*crew*home*' \) 2>/dev/null | sed -n '1,160p'
2026-05-25T13:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:42.271+00:00 [memory] qmd search denied by scope (channel=discord, chatType=channel, session=agent:main:discord:channel:1506314998505275463)
2026-05-25T13:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:54.112+00:00 [ws] ⇄ res ✓ cron.list 1206ms conn=874bf93b…d457 id=c2b3a6f5…99ef
2026-05-25T13:58:16+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:58:16.744+00:00 [exec] elevated command sed -n '1,280p' skills/skill-intelligence/scripts/ec-skill...t/.openclaw -maxdepth 4 -name SKILL.md 2>/dev/null | wc -l
2026-05-25T13:58:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:58:26.543+00:00 [agent/embedded] codex app-server turn idle timed out waiting for completion
2026-05-25T13:58:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:58:26.549+00:00 [agent/embedded] codex app-server client retired after timed-out turn
2026-05-25T13:58:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:58:26.920+00:00 [agent/embedded] [timeout-compaction] LLM timed out with high prompt token usage (68%); attempting compaction before retry (attempt 1/2) diagId=ovf-mpl9up2c-0aGTzA
2026-05-25T13:59:46+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:59:46.030+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T14:00:15+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:15.229+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:00:26+0000 ada-gateway systemd[1671]: Stopping OpenClaw Gateway (v2026.5.19)...
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.043+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=46s eventLoopDelayP99Ms=19897.8 eventLoopDelayMaxMs=19897.8 eventLoopUtilization=1 cpuCoreRatio=1.06 active=5 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/embedded_run,q=0,age=129s last=model_call:ended)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=231s last=model_call:ended)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=0,age=44s last=model_call:ended)|agent:main:explicit:mc-auto-ada-689(processing/embedded_run,q=0,age=239s last=model_call:ended)|agent:main:explicit:mc-auto-ada-101(processing/embedded_run,q=0,age=266s last=tool:exec:ended)]
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.071+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Channel 1471344552047673478 is not a voice channel.
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.079+00:00 [plugins] discord-thread-title-hook: websocket error Received network error or non-101 status code.
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.097+00:00 [gateway] signal SIGTERM received
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.163+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.172+00:00 [plugins] discord-thread-title-hook: websocket error Connection was closed before it was established.
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.432+00:00 [shutdown] started: gateway stopping
2026-05-25T14:00:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:33.685+00:00 Config warnings:
2026-05-25T14:00:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T14:00:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T14:00:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T14:00:33+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.955+00:00 [agent/embedded] [timeout-compaction] contextEngine.compact() threw during timeout recovery for openai-codex/gpt-5.5: AbortError: This operation was aborted
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.960+00:00 [agent/embedded] [timeout-compaction] compaction did not reduce context for openai-codex/gpt-5.5; falling through to normal handling
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.964+00:00 [agent/embedded] Profile openai-codex:henry timed out. Trying next account...
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.971+00:00 [agent/embedded] embedded run failover decision: runId=94ac5ef2-06d4-494b-b8dc-7681538ba49c stage=assistant decision=fallback_model reason=timeout from=openai-codex/gpt-5.5 profile=sha256:0ce2050a740a
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.975+00:00 [diagnostic] lane task error: lane=main durationMs=1893023 error="FailoverError: LLM request timed out."
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.978+00:00 [diagnostic] lane wait exceeded: lane=main waitedMs=202845 queueAhead=0 activeAhead=6 activeNow=5 queueBehind=0
2026-05-25T14:00:35+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:35.014+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1472358846444867615 durationMs=1893062 error="FailoverError: LLM request timed out."
2026-05-25T14:00:35+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:35.439+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.5 detail=LLM request timed out.
2026-05-25T14:00:41+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:41.332+00:00 [telegram] [default] released stopped Telegram polling lease
2026-05-25T14:00:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:42.298+00:00 [agents/auth-profiles] using external OAuth credential after refresh failure
2026-05-25T14:00:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:42.322+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=This operation was aborted
2026-05-25T14:00:43+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:43.552+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=66 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:00:43+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:43.558+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:00:46+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:46.513+00:00 [telegram] [default] channel stop exceeded 5000ms after abort; continuing shutdown
2026-05-25T14:00:46+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:46.521+00:00 [agent/embedded] codex app-server connection closed during startup; restarting app-server and retrying
2026-05-25T14:00:48+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:48.642+00:00 [gmail-watcher] gmail watcher stopped
2026-05-25T14:00:48+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:48.713+00:00 [shutdown] completed cleanly in 16276ms
2026-05-25T14:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:50.848+00:00 [ws] ⇄ res ✓ agent 8601ms runId=f0c7ad5b-6263-4763-94c5-0c20913c9e46 conn=db3925c3…6f98 id=b0f7d6cf…34bf
2026-05-25T14:00:53+0000 ada-gateway systemd[1671]: Stopped OpenClaw Gateway (v2026.5.19).
2026-05-25T14:00:53+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 5h 44min 19.081s CPU time.
2026-05-25T14:00:53+0000 ada-gateway systemd[1671]: Started OpenClaw Gateway (v2026.5.19).
2026-05-25T14:00:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332184]: STARTUP_CONTEXT_RECEIPT {"agent":"Ada","status":"loaded","workspace":"/home/henrymascot/clawd","manifest":"/home/henrymascot/clawd/StartupContext/manifest.jsonl","manifest_line_count":18,"manifest_sha256":"7c0d72246e61eb508a134e42b3e11058eae1974d5f36cbcbea6b9ff5ffce8252","policy":"fail closed on legacy flat StartupContext","legacy_flat_fallback":false,"placeholder_fallback":false,"root_bootstrap_applied":true,"emitted_at":"2026-05-25T14:00:53.983993Z"}
2026-05-25T14:01:00+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:00.908+00:00 [gateway] loading configuration…
2026-05-25T14:01:04+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:04.643+00:00 [gateway] resolving authentication…
2026-05-25T14:01:04+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:04.690+00:00 [gateway] starting...
2026-05-25T14:01:14+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:14.780+00:00 [warn] Subagent orphan run pruned source=restore run=d94b9b05-2004-4b56-9200-075381ab8df8 child=agent:main:subagent:1984eecc-a76d-44e4-b255-fbee427c26d1 reason=missing-session-entry
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:15.166+00:00 (node:3332175) [OPENCLAW_LEGACY_ENV_VARS] DeprecationWarning: Legacy CLAWDBOT_* environment variables were detected (1 total), but OpenClaw only reads OPENCLAW_* names now.
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Rename them by replacing the legacy prefix with OPENCLAW_; the old names are ignored.
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:15.216+00:00 [gateway] starting HTTP server...
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:15.860+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.095+00:00 [gateway] [plugins] duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js) (plugin=a2a-gateway, source=/home/henrymascot/.openclaw/extensions/a2a-gateway/dist/index.js)
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.135+00:00 [gateway] agent model: openai/gpt-5.5 (thinking=high, fast=on)
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.141+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 20.4s)
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.147+00:00 [gateway] log file: /tmp/clawdbot/clawdbot.log
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.620+00:00 [gateway] security warning: dangerous config flags enabled: gateway.controlUi.allowInsecureAuth=true, gateway.controlUi.dangerouslyDisableDeviceAuth=true. Run `openclaw security audit`.
2026-05-25T14:01:26+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:26.218+00:00 [gateway] starting channels and sidecars...
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.384+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.583+00:00 [plugins] a2a-gateway: HTTP listening on 0.0.0.0:18800
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.591+00:00 [plugins] a2a-gateway: durable task store at /home/henrymascot/.openclaw/a2a-tasks; concurrency=4; queue=100
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.616+00:00 [discord] [default] starting provider
2026-05-25T14:01:29+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:29.430+00:00 [plugins] a2a-gateway: gRPC listening on 0.0.0.0:18801
2026-05-25T14:01:29+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:29.433+00:00 (node:3332175) DeprecationWarning: Calling start() is no longer necessary. It can be safely omitted.
2026-05-25T14:01:29+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:29.508+00:00 [plugins] a2a-gateway: task cleanup enabled — ttl=72h interval=60min
2026-05-25T14:01:29+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:29.871+00:00 [browser/server] Browser control listening on http://127.0.0.1:18791/ (auth=token)
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.440+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.446+00:00 [fetch-timeout] fetch timeout after 2500ms (elapsed 11409ms) timer delayed 8909ms, likely event-loop starvation operation=fetchWithTimeout url=https://discord.com/api/v10/users/@me
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.541+00:00 [plugins] embedded acpx runtime backend registered (cwd: /home/henrymascot/clawd)
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.647+00:00 [telegram] [default] starting provider (@HimAgentBot)
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.283+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.350+00:00 [gateway] ready
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.365+00:00 [heartbeat] started
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.539+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.697+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.706+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.726+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.730+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.783+00:00 [telegram] [diag] isolated polling ingress started spool=/home/henrymascot/.openclaw/telegram/ingress-spool-default
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.939+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.949+00:00 [gateway] removed stale session lock: /home/henrymascot/.openclaw/agents/main/sessions/71606089-5dba-4019-a2c4-77149421cf4a-topic-1508423882292461630.jsonl.lock (dead-pid)
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.964+00:00 [gateway] removed stale session lock: /home/henrymascot/.openclaw/agents/main/sessions/mc-auto-ada-688.jsonl.lock (dead-pid)
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.976+00:00 [gateway] removed stale session lock: /home/henrymascot/.openclaw/agents/main/sessions/mc-auto-ada-689.jsonl.lock (dead-pid)
2026-05-25T14:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:42.117+00:00 [main-session-restart-recovery] marked 2 interrupted main session(s) from stale transcript locks
2026-05-25T14:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: (node:3332175) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
2026-05-25T14:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:42.702+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, image/jpeg, 53 chars)
2026-05-25T14:01:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:52.972+00:00 [ws] ⇄ res ✓ agent 97ms runId=0f8bd863-9a8c-448e-910a-2ef6fc11e67e conn=59fff129…8f92 id=fcc04ac0…dd7c
2026-05-25T14:01:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:53.350+00:00 [main-session-restart-recovery] resumed interrupted main session: agent:main:discord:channel:1508423882292461630
2026-05-25T14:01:54+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:54.380+00:00 [ws] ⇄ res ✓ agent 118ms runId=e557e964-f9f8-4405-8c19-82d984ae8b98 conn=308eba48…cddd id=93665e9a…a6d9
2026-05-25T14:02:07+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:07.533+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 12399ms) operation=fetchWithTimeout url=https://api.telegram.org/bot850721…w9SQ/getMe
2026-05-25T14:02:07+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:07.543+00:00 [telegram] fetch fallback: DNS-resolved IP unreachable; trying alternative Telegram API IP (codes=none, reason=probe timeout/network error)
2026-05-25T14:02:12+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:12.962+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:02:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:13.008+00:00 [main-session-restart-recovery] resumed interrupted main session: agent:main:explicit:mc-auto-ada-688
2026-05-25T14:02:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:13.012+00:00 [main-session-restart-recovery] main-session restart recovery complete: recovered=2 failed=0 skipped=0
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.056+00:00 [diagnostics/memory] memory pressure: level=warning reason=heap_threshold rssBytes=1393156096 heapUsedBytes=1138790168 thresholdBytes=1073741824
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.060+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=135s eventLoopDelayP99Ms=114152.2 eventLoopDelayMaxMs=114152.2 eventLoopUtilization=1 cpuCoreRatio=1.022 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:101ms,post-attach.update-sentinel:72ms,sidecars.acp.identity-reconcile:305ms,sidecars.session-locks:592ms,post-ready.maintenance:10ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=145s)]
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.065+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=145s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.076+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=145s action=release_lane aborted=false drained=true released=0
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.080+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.136+00:00 [ws] closed before connect conn=83a52b2d-f746-4811-b015-11032ed1517a peer=127.0.0.1:52648->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T14:04:16+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:16.537+00:00 Config warnings:
2026-05-25T14:04:16+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T14:04:16+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T14:04:16+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T14:04:16+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T14:04:47+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:47.693+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 23819ms) timer delayed 13819ms, likely event-loop starvation operation=fetchWithTimeout url=https://api.telegram.org/bot850721…w9SQ/getMe
2026-05-25T14:04:47+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:47.803+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:04:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:56.540+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=74 hit=yes source=custom-1-main/2026-03-05-chat-transcript-telegram-0f869e7f.md
2026-05-25T14:04:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:56.557+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:05:04+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:04.616+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:05:21+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:21.237+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 10728ms) operation=fetchWithTimeout url=https://discord.com/api/v10/users/@me
2026-05-25T14:05:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:25.617+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:05:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:27.106+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=68 hit=yes source=custom-1-main/2026-03-05-chat-transcript-telegram-0f869e7f.md
2026-05-25T14:05:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:27.115+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.140+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3-flash-preview reason=timeout next=azure-openai-responses/gpt-5.5 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.194+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.239+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.282+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.327+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.369+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.409+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:34+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:34.338+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=100 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:05:34+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:34.349+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:05:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:40.784+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:05:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:41.611+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:05:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:42.915+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:05:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:43.662+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:05:45+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:45.083+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:06:25.915+00:00 DONE, Chief. The interrupted turn is closed cleanly.
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: MC #688 is in `review`, unblocked, and I re-ran the required `mc.sh review 688 ...` final action after verifying the live task state and evidence files.
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Receipts:
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - QA: http://100.104.229.62:3000/docs/source/crew-home/Output/mc-688/qa-report.json
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Registry: http://100.104.229.62:3000/docs/source/crew-home/Output/skill-intelligence/2026-05-25T133928Z-ec-skill-registry.md
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Doctrine: http://100.104.229.62:3000/docs/source/crew-home/Output/mc-688/multi-agent-infra-doctrine-ultrathink.md
2026-05-25T14:06:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Caveat preserved: Azure GPT-5.4 Pro Ultrathink produced no usable output, so the doctrine remains explicitly **not Oracle-backed**.
2026-05-25T14:06:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:06:27.387+00:00 [ws] ⇄ res ✓ cron.list 511ms conn=6243d027…bfe5 id=d58b1bcb…1533
2026-05-25T14:08:10+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:08:10.975+00:00 [ws] ⇄ res ✓ cron.list 327ms conn=65ef1f44…5d8c id=fd67efc7…5459
2026-05-25T14:10:28+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:10:28.271+00:00 [ws] ⇄ res ✓ agent 227ms runId=05c6a39b-670f-49e1-8787-1c1cc6a5a7f5 conn=0d5aeb4f…a77f id=2aa8c934…0294
2026-05-25T14:10:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:10:41.441+00:00 [ws] ⇄ res ✓ cron.list 311ms conn=8da35630…6f63 id=8547ccd5…5850
2026-05-25T14:10:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:10:41.804+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=97 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T14:10:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:10:41.814+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:11:00+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:11:00.161+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57183 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:11:00+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:11:00.584+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 38 chars)
2026-05-25T14:11:17+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:11:17.788+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=112 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:11:17+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:11:17.803+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:12:09+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:12:09.390+00:00 [ws] ⇄ res ✓ cron.list 319ms conn=3132debc…c57c id=872c98af…15e1
2026-05-25T14:13:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:13.063+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:13:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:13.682+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=132 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:13:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:13.690+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:43.933+00:00 DONE:
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - I updated the weekly todo system to require an Entity edit link, not a Mac/iCloud path.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Current editable Weekdo link: http://100.104.229.62:3000/docs/source/vault/Todo/Weekdo_25052026.md
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - QA proof: http://100.104.229.62:3000/docs/source/ada-gateway/output/weekdo-cron-repair/qa-report.json
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Why it looked dumb:
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - The old logic treated the previous Weekdo as truth and carried forward unchecked items.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - It dumped recurring calendar meetings into todos.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - It did not properly suppress things you had already said were done, stale, dumb, dropped, or deprioritized.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - It sent the local file path instead of the Entity docs link. Basic operator malpractice, sadly not illegal.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: What the cron does now:
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - `weekly-todo-prompt`, Sundays 20:00 London.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Runs isolated on `azure-openai-responses/gpt-5.4-pro`.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Must read goals, user model, recent daily notes, sessions, MC changes, meetings/calendar where available, and use Weekdo only as legacy evidence.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Must return the Entity edit link and reject raw local paths.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: NOT DONE:
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - I have not regenerated the current `Weekdo_25052026.md` content yet. The link works, but the contents are still the bad stale draft.
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:43.937+00:00 ⚠️ 🛠️ `check git status (in ~/clawd)` failed
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:16:49.585+00:00 DONE. MC #59 is back in `review` for Book with corrected, curl-verifiable evidence links.
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Delivered:
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - MC docs: `projects/mission-control/DOCS.md`
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - `MEMORY.md` updated with live MC URL + blocked task rules
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - `HEARTBEAT.md` updated with blocked recovery query
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - QA evidence passed: `output/mc59/qa-report.json`
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - Docs/receipts mirrored to Enterprise Crew Home
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: Published route verified: `http://100.106.69.9:8788/#/projects/mission-control/DOCS.md`
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:16:49.589+00:00 ⚠️ 🛠️ `scp -q projects/mission-control/DOCS.md output/mc59/verification.txt output/mc59/artifact-manifest.txt output/mc59/revi… (in ~/clawd)` failed
2026-05-25T14:20:24+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:20:24.931+00:00 [ws] ⇄ res ✓ agent 81ms runId=ae041719-ba3c-472e-b4e0-8633546fd891 conn=be48718b…390e id=8f8b2c51…39bc
2026-05-25T14:20:35+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:20:35.970+00:00 [agent/embedded] failed to read mirrored session history for codex harness hooks
2026-05-25T14:20:36+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:20:36.511+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=96 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T14:20:36+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:20:36.519+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:22:45+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:22:45.864+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57187 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:22:46+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:22:46.298+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 3 chars)
2026-05-25T14:22:57+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:22:57.847+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=73 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:22:57+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:22:57.855+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:23:11+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:23:11.856+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 151 chars)
2026-05-25T14:23:24+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:23:24.121+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=102 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:23:24+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:23:24.135+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:25:52+0000 ada-gateway systemd[1671]: Stopping OpenClaw Gateway (v2026.5.19)...
2026-05-25T14:25:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:52.417+00:00 [gateway] signal SIGTERM received
2026-05-25T14:25:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:52.452+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T14:25:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:52.520+00:00 [shutdown] started: gateway stopping
2026-05-25T14:25:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:53.742+00:00 Config warnings:
2026-05-25T14:25:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T14:25:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T14:25:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T14:25:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T14:25:55+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:55.398+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T14:25:55+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:55.403+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T14:25:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:56.869+00:00 [agent/embedded] embedded run failover decision: runId=ae041719-ba3c-472e-b4e0-8633546fd891 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T14:25:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:56.873+00:00 [diagnostic] lane task error: lane=main durationMs=327116 error="codex app-server client closed before turn completed"
2026-05-25T14:25:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:56.876+00:00 [diagnostic] lane task error: lane=session:agent:main:explicit:mc-auto-ada-119 durationMs=327120 error="codex app-server client closed before turn completed"
2026-05-25T14:25:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:56.886+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T14:26:01+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:01.669+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:26:01+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:01.684+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=ae041719-ba3c-472e-b4e0-8633546fd891 sessionId=mc-auto-ada-119 phase=core-plugin-tools totalMs=3667 stages=tool-policy:2277ms@2277ms,workspace-policy:0ms@2277ms,base-coding-tools:0ms@2277ms,shell-tools:1ms@2278ms,openclaw-tools:session-workspace:0ms@2278ms,openclaw-tools:image-tool:147ms@2425ms,openclaw-tools:image-generate-tool:0ms@2425ms,openclaw-tools:video-generate-tool:565ms@2990ms,openclaw-tools:music-generate-tool:151ms@3141ms,openclaw-tools:pdf-tool:0ms@3141ms,openclaw-tools:web-search-tool:0ms@3141ms,openclaw-tools:web-fetch-tool:0ms@3141ms,openclaw-tools:message-tool:6ms@3147ms,openclaw-tools:nodes-tool:0ms@3147ms,openclaw-tools:core-tool-list:2ms@3149ms,openclaw-tools:plugin-tools:514ms@3663ms,openclaw-tools:0ms@3663ms,message-provider-policy:0ms@3663ms,model-provider-policy:1ms@3664ms,authorization-policy:0ms@3664ms,schema-normalization:3ms@3667ms,tool-hooks:0ms@3667ms,abort-wrappers:0ms@3667ms,deferred-followup-descriptions:0ms@3667ms,attempt:create-openclaw-coding-tools:0ms@3667ms,attempt:tools-allow:0ms@3667ms
2026-05-25T14:26:01+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:01.699+00:00 [telegram] [default] released stopped Telegram polling lease
2026-05-25T14:26:02+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:02.995+00:00 [agent/embedded] tools: tools.allow allowlist contains unknown entries (lobster, llm-task, memory-core). These entries won't match any tool unless the plugin is enabled.
2026-05-25T14:26:04+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:04.032+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=91 hit=yes source=custom-1-main/f3d3b2a8-clean.md
2026-05-25T14:26:06+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:06.703+00:00 [telegram] [default] channel stop exceeded 5000ms after abort; continuing shutdown
2026-05-25T14:26:07+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:07.194+00:00 [gmail-watcher] gmail watcher stopped
2026-05-25T14:26:07+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:07.209+00:00 [shutdown] completed cleanly in 14687ms
2026-05-25T14:26:07+0000 ada-gateway systemd[1671]: Stopped OpenClaw Gateway (v2026.5.19).
2026-05-25T14:26:07+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 49min 56.039s CPU time.
2026-05-25T14:26:07+0000 ada-gateway systemd[1671]: Started OpenClaw Gateway (v2026.5.19).
2026-05-25T14:26:07+0000 ada-gateway openclaw-gateway-with-startup-context[3348597]: STARTUP_CONTEXT_RECEIPT {"agent":"Ada","status":"loaded","workspace":"/home/henrymascot/clawd","manifest":"/home/henrymascot/clawd/StartupContext/manifest.jsonl","manifest_line_count":18,"manifest_sha256":"7c0d72246e61eb508a134e42b3e11058eae1974d5f36cbcbea6b9ff5ffce8252","policy":"fail closed on legacy flat StartupContext","legacy_flat_fallback":false,"placeholder_fallback":false,"root_bootstrap_applied":true,"emitted_at":"2026-05-25T14:26:07.522390Z"}
2026-05-25T14:26:12+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:12.764+00:00 [gateway] loading configuration…
2026-05-25T14:26:15+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:15.746+00:00 [gateway] resolving authentication…
2026-05-25T14:26:15+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:15.782+00:00 [gateway] starting...
2026-05-25T14:26:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:22.954+00:00 (node:3348587) [OPENCLAW_LEGACY_ENV_VARS] DeprecationWarning: Legacy CLAWDBOT_* environment variables were detected (1 total), but OpenClaw only reads OPENCLAW_* names now.
2026-05-25T14:26:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Rename them by replacing the legacy prefix with OPENCLAW_; the old names are ignored.
2026-05-25T14:26:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:26:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:22.998+00:00 [gateway] starting HTTP server...
2026-05-25T14:26:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:23.480+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:26:30+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:30.926+00:00 [gateway] [plugins] duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js) (plugin=a2a-gateway, source=/home/henrymascot/.openclaw/extensions/a2a-gateway/dist/index.js)
2026-05-25T14:26:30+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:30.953+00:00 [gateway] agent model: openai/gpt-5.5 (thinking=high, fast=on)
2026-05-25T14:26:30+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:30.960+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 15.2s)
2026-05-25T14:26:30+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:30.963+00:00 [gateway] log file: /tmp/clawdbot/clawdbot.log
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.197+00:00 [gateway] security warning: dangerous config flags enabled: gateway.controlUi.allowInsecureAuth=true, gateway.controlUi.dangerouslyDisableDeviceAuth=true. Run `openclaw security audit`.
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.257+00:00 [gateway] starting channels and sidecars...
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.735+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.808+00:00 [plugins] a2a-gateway: HTTP listening on 0.0.0.0:18800
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.811+00:00 [plugins] a2a-gateway: durable task store at /home/henrymascot/.openclaw/a2a-tasks; concurrency=4; queue=100
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.821+00:00 [discord] [default] starting provider
2026-05-25T14:26:32+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:32.259+00:00 [plugins] a2a-gateway: gRPC listening on 0.0.0.0:18801
2026-05-25T14:26:32+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:32.260+00:00 (node:3348587) DeprecationWarning: Calling start() is no longer necessary. It can be safely omitted.
2026-05-25T14:26:32+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:32.290+00:00 [plugins] a2a-gateway: task cleanup enabled — ttl=72h interval=60min
2026-05-25T14:26:32+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:32.508+00:00 [browser/server] Browser control listening on http://127.0.0.1:18791/ (auth=token)
2026-05-25T14:26:32+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:32.577+00:00 [telegram] [default] starting provider (@HimAgentBot)
2026-05-25T14:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:42.469+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:42.516+00:00 [telegram] [diag] isolated polling ingress started spool=/home/henrymascot/.openclaw/telegram/ingress-spool-default
2026-05-25T14:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:42.549+00:00 [plugins] embedded acpx runtime backend registered (cwd: /home/henrymascot/clawd)
2026-05-25T14:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:42.766+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 151 chars)
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.262+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.265+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: (node:3348587) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.339+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.400+00:00 [gateway] ready
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.421+00:00 [heartbeat] started
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.596+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.192+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.211+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.223+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.249+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.254+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:28:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:18.959+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=117s eventLoopDelayP99Ms=92207.6 eventLoopDelayMaxMs=92207.6 eventLoopUtilization=1 cpuCoreRatio=1.069 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:512ms,post-attach.update-sentinel:486ms,sidecars.acp.identity-reconcile:790ms,sidecars.session-locks:817ms,post-ready.maintenance:12ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=96s)]
2026-05-25T14:28:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:25.998+00:00 Config warnings:
2026-05-25T14:28:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T14:28:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T14:28:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T14:28:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.933+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=131s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.944+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=131s action=release_lane aborted=false drained=true released=0
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.948+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.959+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:29:11+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:11.458+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:29:12+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:12.141+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=73 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T14:29:12+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:12.156+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:29:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:22.734+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:29:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:23.336+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:29:24+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:24.393+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:29:25+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:25.009+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:29:25+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:25.738+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T14:30:29+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:29.285+00:00 [ws] ⇄ res ✓ agent 122ms runId=bb0dfb6a-ea37-4cb3-a8b5-67fc02b7506b conn=8c99a661…9d59 id=aa775892…4a5c
2026-05-25T14:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:41.014+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:41.110+00:00 [agent/embedded] failed to read mirrored session history for codex harness hooks
2026-05-25T14:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:41.522+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=85 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T14:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:41.533+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:32:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:32:44.982+00:00 [ws] ⇄ res ✓ message.action 548ms channel=discord conn=eceda5fc…b8de id=fae700f8…5805
2026-05-25T14:33:13+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:33:13.430+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57192 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:33:46+0000 ada-gateway sudo[3353145]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/true
2026-05-25T14:33:46+0000 ada-gateway sudo[3353145]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:33:46+0000 ada-gateway sudo[3353145]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:33:46+0000 ada-gateway sudo[3353161]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/grep -E "DefaultAction"|"InterceptUnknown"|"Firewall"|"Address"|"LogFile" /etc/opensnitchd/default-config.json
2026-05-25T14:33:46+0000 ada-gateway sudo[3353161]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:33:46+0000 ada-gateway sudo[3353161]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:33:47+0000 ada-gateway sudo[3353164]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/find /etc/opensnitchd/rules -maxdepth 1 -type f -printf %f\\n
2026-05-25T14:33:47+0000 ada-gateway sudo[3353164]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:33:47+0000 ada-gateway sudo[3353164]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:18+0000 ada-gateway sudo[3353311]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/ls -la /etc/opensnitchd /etc/opensnitchd/rules
2026-05-25T14:34:18+0000 ada-gateway sudo[3353311]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:18+0000 ada-gateway sudo[3353311]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:18+0000 ada-gateway sudo[3353313]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/sed -n 1,220p /etc/opensnitchd/rules/000-allow-localhost.json
2026-05-25T14:34:18+0000 ada-gateway sudo[3353313]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:18+0000 ada-gateway sudo[3353309]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/sed -n 1,260p /etc/opensnitchd/default-config.json
2026-05-25T14:34:18+0000 ada-gateway sudo[3353309]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:18+0000 ada-gateway sudo[3353313]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:18+0000 ada-gateway sudo[3353309]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:18+0000 ada-gateway sudo[3353308]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/sed -n 1,220p /etc/opensnitchd/rules/000-allow-localhost6.json
2026-05-25T14:34:18+0000 ada-gateway sudo[3353308]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:18+0000 ada-gateway sudo[3353308]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:42+0000 ada-gateway sudo[3353452]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/sed -n 1,260p /etc/opensnitchd/system-fw.json
2026-05-25T14:34:42+0000 ada-gateway sudo[3353452]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:42+0000 ada-gateway sudo[3353462]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/tail -100 /var/log/opensnitchd.log
2026-05-25T14:34:42+0000 ada-gateway sudo[3353452]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:42+0000 ada-gateway sudo[3353462]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:42+0000 ada-gateway sudo[3353462]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:34:42+0000 ada-gateway sudo[3353466]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/journalctl -u opensnitch.service --since '2026-05-25 00:00:00 UTC' --no-pager
2026-05-25T14:34:42+0000 ada-gateway sudo[3353466]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:34:42+0000 ada-gateway sudo[3353466]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:37:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:41.686+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:37:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:42.264+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=88 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:37:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:42.272+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.441+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.512+00:00 [diagnostic] liveness warning: reasons=event_loop_delay interval=32s eventLoopDelayP99Ms=1762.7 eventLoopDelayMaxMs=4154.5 eventLoopUtilization=0.776 cpuCoreRatio=0.879 active=3 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:512ms,post-attach.update-sentinel:486ms,sidecars.acp.identity-reconcile:790ms,sidecars.session-locks:817ms,post-ready.maintenance:12ms work=[active=agent:main:explicit:mc-auto-ada-154(processing/tool_call,q=0,age=431s last=codex_app_server:notification:item/completed)|agent:main:discord:channel:1506314998505275463(processing/embedded_run,q=1,age=10s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1507995454237839420(processing/embedded_run,q=1,age=10s last=embedded_run:started)]
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.976+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=66 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.986+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:38:36+0000 ada-gateway sudo[3354685]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/grep -E "DefaultAction"|"InterceptUnknown"|"Firewall"|"Address"|"LogFile" /etc/opensnitchd/default-config.json
2026-05-25T14:38:36+0000 ada-gateway sudo[3354685]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:38:36+0000 ada-gateway sudo[3354685]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:38:36+0000 ada-gateway sudo[3354690]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/journalctl -u opensnitch.service --since '2026-05-25 00:00:00 UTC' --no-pager
2026-05-25T14:38:36+0000 ada-gateway sudo[3354692]: henrymascot : PWD=/home/henrymascot/clawd ; USER=root ; COMMAND=/usr/bin/find /etc/opensnitchd/rules -maxdepth 1 -type f -printf %f\\n
2026-05-25T14:38:36+0000 ada-gateway sudo[3354690]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:38:36+0000 ada-gateway sudo[3354692]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=1001)
2026-05-25T14:38:36+0000 ada-gateway sudo[3354692]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:38:36+0000 ada-gateway sudo[3354690]: pam_unix(sudo:session): session closed for user root
2026-05-25T14:40:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:40:26.360+00:00 [ws] ⇄ res ✓ agent 96ms runId=e648c228-b29b-43ad-bfad-458f0ae530c1 conn=6d2b976f…46de id=928fff60…8ba0
2026-05-25T14:40:37+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:40:37.653+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=83 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T14:40:37+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:40:37.661+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:44:47.424+00:00 BLOCKED, properly closed in MC #154.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: What changed:
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - Re-enabled and started Scotty’s OpenSnitch, which had drifted to disabled/inactive.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - Verified ada-gateway OpenSnitch is active but still monitor/allow.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - Verified MascotM3 LuLu is installed/running, but its Network Extension is still not approved.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - QA passed and evidence is mirrored to Crew Home.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Evidence: http://100.104.229.62:3000/docs/source/crew-home/Output/mc-154/final-report.md
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Unblock: approve LuLu locally on MascotM3 in System Settings, then schedule/approve a staged Linux default-deny rollout with a vetted allowlist.
2026-05-25T14:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:44:47.434+00:00 ⚠️ 🛠️ `ssh -o BatchMode=yes -o ConnectTimeout=8 enterprise@100.104.229.62 'mkdir -p "/Users/enterprise/Enterprise/Crew Home/Ou… (in ~/clawd)` failed
2026-05-25T14:48:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:48:23.140+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T14:48:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:48:23.904+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=semantic elapsedMs=18 hit=yes source=memory-dir-main/drift-intelligence/reports/policy-drift-latest.md
2026-05-25T14:48:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:48:23.912+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:48:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:48:26.746+00:00 [plugins] discord-thread-title-hook: renamed 1508481814069776594 to "Steipete Codex Loaded Each"
2026-05-25T14:50:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:50:26.928+00:00 [ws] ⇄ res ✓ agent 191ms runId=0a80ded5-6476-42cb-a709-56e098fabcea conn=cd67c143…c227 id=3c11548b…7b22
2026-05-25T14:50:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:50:41.540+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=semantic elapsedMs=17 hit=yes source=memory-dir-main/decisions/2026-05-25.md
2026-05-25T14:50:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:50:41.555+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T14:51:13+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:13.209+00:00 [ws] ⇄ res ✓ cron.list 2088ms conn=6e917f28…1149 id=86882a61…e417
2026-05-25T14:51:15+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:15.887+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, env.NVIDIA_API_KEY, models.providers.nvidia, agents.defaults.models.nvidia/moonshotai/kimi-k2.6)
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:17.596+00:00 [reload] config change requires gateway restart (env.NVIDIA_API_KEY) — deferring until 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) complete
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:17.636+00:00 [reload] restart blocked by active background task run(s): taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor
2026-05-25T14:51:37+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:37.809+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:51:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:48.166+00:00 [reload] restart still deferred after 30293ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:51:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:51:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:52:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:52:18.533+00:00 [reload] restart still deferred after 60791ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:52:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:52:49.195+00:00 [reload] restart still deferred after 90943ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:53:19+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:53:19.518+00:00 [reload] restart still deferred after 121724ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:19+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:19+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:53:49.687+00:00 [reload] restart still deferred after 151944ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:54:20+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:54:20.231+00:00 [reload] restart still deferred after 182483ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:20+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:20+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:54:50+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:54:50.759+00:00 [reload] restart still deferred after 213020ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:50+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:50+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:55:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:10.064+00:00 [gateway] cron: job updated
2026-05-25T14:55:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:10.070+00:00 [ws] ⇄ res ✓ cron.update 145ms conn=d12126ba…f112 id=8954893b…78e1
2026-05-25T14:55:21+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:21.043+00:00 [reload] restart still deferred after 243289ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:21+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:21+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:51.181+00:00 [reload] restart still deferred after 273440ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor)
2026-05-25T14:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:17.934+00:00 [reload] restart timeout after 300102ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) still active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor); forcing restart
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.107+00:00 [main-session-restart-recovery] marked 3 interrupted main session(s) for restart recovery (config reload forced restart)
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.113+00:00 [gateway] signal SIGUSR1 received
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.144+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.203+00:00 [gateway] draining 6 active task(s) and 3 active embedded run(s) before restart with timeout 300000ms
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.209+00:00 [gateway] restart blocked by active background task run(s): taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor; taskId=7fa29ea6-5570-43d5-917b-a3b8d370ec9d runId=e648c228-b29b-43ad-bfad-458f0ae530c1 status=running runtime=cli title=[Mon 2026-05-25 14:40 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor
2026-05-25T14:56:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:48.215+00:00 [gateway] still draining 6 active task(s) and 3 active embedded run(s) before restart
2026-05-25T14:56:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:48.375+00:00 [diagnostic] wait for active embedded runs timed out: activeRuns=3 timeoutMs=30000
2026-05-25T14:56:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:48.378+00:00 [gateway] active embedded run drain grace reached; aborting active run(s) before restart
2026-05-25T14:56:52+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:52.000+00:00 ⚠️ 🛠️ `check git status (in ~/clawd)` failed
2026-05-25T14:56:57+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:57.614+00:00 [gateway] drain timeout reached; proceeding with restart
2026-05-25T14:56:57+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:57.926+00:00 ⚠️ 🛠️ `bash -lc 'ssh enterprise@100.104.229.62 "cat > /tmp/probe-nvidia.py <<'"'"'PY'"'"' from pathlib import Path import hash… (in ~/clawd)` failed
2026-05-25T14:56:58+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:58.081+00:00 [shutdown] started: gateway restarting
2026-05-25T14:56:59+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:59.409+00:00 Config warnings:
2026-05-25T14:56:59+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T14:56:59+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T14:56:59+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T14:56:59+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T14:57:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:57:10.664+00:00 [gmail-watcher] gmail watcher stopped
2026-05-25T14:57:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:57:10.670+00:00 [shutdown] completed cleanly in 12590ms
2026-05-25T14:57:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:57:10.688+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T14:57:10+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 1h 12min 23.023s CPU time.
2026-05-25T14:57:21+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 1.
2026-05-25T14:57:21+0000 ada-gateway systemd[1671]: Stopped OpenClaw Gateway (v2026.5.19).
2026-05-25T14:57:21+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 1h 12min 23.023s CPU time.
2026-05-25T14:57:21+0000 ada-gateway systemd[1671]: Started OpenClaw Gateway (v2026.5.19).
2026-05-25T14:57:21+0000 ada-gateway openclaw-gateway-with-startup-context[3364910]: STARTUP_CONTEXT_RECEIPT {"agent":"Ada","status":"loaded","workspace":"/home/henrymascot/clawd","manifest":"/home/henrymascot/clawd/StartupContext/manifest.jsonl","manifest_line_count":18,"manifest_sha256":"7c0d72246e61eb508a134e42b3e11058eae1974d5f36cbcbea6b9ff5ffce8252","policy":"fail closed on legacy flat StartupContext","legacy_flat_fallback":false,"placeholder_fallback":false,"root_bootstrap_applied":true,"emitted_at":"2026-05-25T14:57:21.091109Z"}
2026-05-25T14:57:25+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:25.959+00:00 [gateway] loading configuration…
2026-05-25T14:57:28+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:28.719+00:00 [gateway] resolving authentication…
2026-05-25T14:57:28+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:28.748+00:00 [gateway] starting...
2026-05-25T14:57:29+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:29.795+00:00 [gateway] auto-enabled plugins for this runtime without writing config:
2026-05-25T14:57:29+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - nvidia/moonshotai/kimi-k2.6 model configured, enabled automatically.
2026-05-25T14:57:34+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:34.966+00:00 (node:3364902) [OPENCLAW_LEGACY_ENV_VARS] DeprecationWarning: Legacy CLAWDBOT_* environment variables were detected (1 total), but OpenClaw only reads OPENCLAW_* names now.
2026-05-25T14:57:34+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: Rename them by replacing the legacy prefix with OPENCLAW_; the old names are ignored.
2026-05-25T14:57:34+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:57:35+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:35.010+00:00 [gateway] starting HTTP server...
2026-05-25T14:57:35+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:35.492+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.657+00:00 [gateway] [plugins] duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js) (plugin=a2a-gateway, source=/home/henrymascot/.openclaw/extensions/a2a-gateway/dist/index.js)
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.680+00:00 [gateway] agent model: openai/gpt-5.5 (thinking=high, fast=on)
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.684+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.9s)
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.687+00:00 [gateway] log file: /tmp/clawdbot/clawdbot.log
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.899+00:00 [gateway] security warning: dangerous config flags enabled: gateway.controlUi.allowInsecureAuth=true, gateway.controlUi.dangerouslyDisableDeviceAuth=true. Run `openclaw security audit`.
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.960+00:00 [gateway] starting channels and sidecars...
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.326+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.397+00:00 [plugins] a2a-gateway: HTTP listening on 0.0.0.0:18800
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.400+00:00 [plugins] a2a-gateway: durable task store at /home/henrymascot/.openclaw/a2a-tasks; concurrency=4; queue=100
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.410+00:00 [discord] [default] starting provider
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.805+00:00 [plugins] a2a-gateway: gRPC listening on 0.0.0.0:18801
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.807+00:00 (node:3364902) DeprecationWarning: Calling start() is no longer necessary. It can be safely omitted.
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.838+00:00 [plugins] a2a-gateway: task cleanup enabled — ttl=72h interval=60min
2026-05-25T14:57:44+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:44.059+00:00 [browser/server] Browser control listening on http://127.0.0.1:18791/ (auth=token)
2026-05-25T14:57:44+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:44.140+00:00 [telegram] [default] starting provider (@HimAgentBot)
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.240+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.279+00:00 [plugins] embedded acpx runtime backend registered (cwd: /home/henrymascot/clawd)
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.403+00:00 [telegram] [diag] isolated polling ingress started spool=/home/henrymascot/.openclaw/telegram/ingress-spool-default
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.452+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.456+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.670+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.737+00:00 [gateway] ready
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.752+00:00 [heartbeat] started
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.917+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: (node:3364902) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.327+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.335+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.351+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.355+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.402+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.410+00:00 [delivery-recovery] Found 1 pending delivery entries — starting recovery
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.524+00:00 [delivery-recovery] Delivery entry 524ef198-ecf2-4548-8f15-bffe0ff6489e delivery state is send_attempt_started; refusing blind replay without adapter reconciliation
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.528+00:00 [delivery-recovery] Retry failed for delivery 524ef198-ecf2-4548-8f15-bffe0ff6489e: delivery state is send_attempt_started; refusing blind replay without adapter reconciliation
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.537+00:00 [delivery-recovery] Delivery recovery complete: 0 recovered, 1 failed, 0 skipped (max retries), 0 deferred (backoff)
2026-05-25T14:58:02+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:02.195+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:58:02+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:02.730+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:58:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:03.926+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:58:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:03.931+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:58:05+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:05.252+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:00:27+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:00:27.507+00:00 [ws] ⇄ res ✓ agent 153ms runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 conn=d0773235…acb8 id=ec8682d5…b557
2026-05-25T15:00:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:00:41.320+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:00:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:00:41.912+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=144 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T15:00:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:00:41.939+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:02:40+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:02:40.421+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, env.NVIDIA_API_KEY)
2026-05-25T15:02:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:02:41.826+00:00 [reload] config change requires gateway restart (env.NVIDIA_API_KEY) — deferring until 2 operation(s), 1 embedded run(s), 1 background task run(s) complete
2026-05-25T15:02:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:02:41.865+00:00 [reload] restart blocked by active background task run(s): taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:02:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: Your FINAL action befor
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.274+00:00 [reload] restart still deferred after 97294ms with 2 operation(s), 1 embedded run(s), 2 background task run(s) active (taskId=83e9772d-8d1d-4f14-83ce-762fda84f958 runId=cron:8055b760-224c-4434-9643-46ab41247d85:1779721378349 status=running runtime=cron label=moltbot-business-loop title=moltbot-business-loop; taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: Your FINAL action befor)
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.606+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.629+00:00 [ws] closed before connect conn=b3021778-24b9-4503-ba0b-f891af442b5d peer=127.0.0.1:40982->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.647+00:00 [ws] closed before connect conn=7e6f5e18-5e34-462f-a78b-f164b107c36a peer=127.0.0.1:40984->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.711+00:00 [ws] closed before connect conn=5412c060-abd0-45ac-8046-8a0fd5a9e678 peer=127.0.0.1:34984->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.732+00:00 [ws] closed before connect conn=a7dfd002-3c53-4d06-a06d-2fc68568a000 peer=127.0.0.1:38968->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:04:26+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:26.002+00:00 Config warnings:
2026-05-25T15:04:26+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T15:04:26+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T15:04:26+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T15:04:26+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T15:04:32+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:32.329+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 10954ms) operation=fetchWithTimeout url=https://discord.com/api/v10/oauth2/applications/@me
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.776+00:00 [reload] restart still deferred after 129803ms with 2 operation(s), 1 reply(ies), 1 embedded run(s), 1 background task run(s) active (taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: Your FINAL action befor)
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.781+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 19445ms) timer delayed 9445ms, likely event-loop starvation operation=fetchWithTimeout url=https://api.telegram.org/bot850721…w9SQ/getMe
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.785+00:00 [telegram] fetch fallback: DNS-resolved IP unreachable; trying alternative Telegram API IP (codes=none, reason=probe timeout/network error)
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.835+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:05:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:03.337+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T15:05:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:03.344+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T15:05:06+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:06.988+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:05:08+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:08.266+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.753+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3-flash-preview reason=timeout next=azure-openai-responses/gpt-5.5 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.791+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.829+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.869+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.909+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.949+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.989+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:11+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:11.660+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=84 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T15:05:11+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:11.670+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:05:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:19.002+00:00 BLOCKED, not done.
2026-05-25T15:05:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: I prepared the OpenClaw NVIDIA provider scaffold for `moonshotai/kimi-k2.6` as `kimi-nvidia`, and config validation passes. NVIDIA model discovery also works: `/v1/models` returns `200` and lists `moonshotai/kimi-k2.6`.
2026-05-25T15:05:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: The blocker is the key: the recovered `nvapi` value fails chat completions with `403 Authorization failed`, including non-Kimi NVIDIA models. I removed it from active config so we don’t pretend access works. MC #166 is now marked blocked with evidence: `output/mc-166/unblock-second-pass-final-20260525T1505Z.txt`.
2026-05-25T15:05:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: Unblock: generate/provide a fresh NVIDIA build.nvidia.com API key that can call `moonshotai/kimi-k2.6`.
2026-05-25T15:05:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:19.007+00:00 ⚠️ 🛠️ `check git status (in ~/clawd)` failed
2026-05-25T15:05:22+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:22.179+00:00 [reload] restart still deferred after 160212ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:05:52+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:52.735+00:00 [reload] restart still deferred after 190732ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:06:23+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:06:23.222+00:00 [reload] restart still deferred after 221252ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:06:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:06:53.738+00:00 [reload] restart still deferred after 251770ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:07:24+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:24.252+00:00 [reload] restart still deferred after 282285ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.120+00:00 [reload] restart timeout after 300141ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) still active; forcing restart
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.200+00:00 [main-session-restart-recovery] marked 1 interrupted main session(s) for restart recovery (config reload forced restart)
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.205+00:00 [gateway] signal SIGUSR1 received
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.226+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.265+00:00 [gateway] draining 2 active task(s) and 1 active embedded run(s) before restart with timeout 300000ms
2026-05-25T15:08:12+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:12.271+00:00 [gateway] still draining 2 active task(s) and 1 active embedded run(s) before restart
2026-05-25T15:08:12+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:12.393+00:00 [diagnostic] wait for active embedded runs timed out: activeRuns=1 timeoutMs=30000
2026-05-25T15:08:12+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:12.396+00:00 [gateway] active embedded run drain grace reached; aborting active run(s) before restart
2026-05-25T15:08:15+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:15.150+00:00 [gateway] drain timeout reached; proceeding with restart
2026-05-25T15:08:15+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:15.424+00:00 [shutdown] started: gateway restarting
2026-05-25T15:08:16+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:16.783+00:00 Config warnings:
2026-05-25T15:08:16+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T15:08:16+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T15:08:16+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T15:08:16+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T15:08:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:19.002+00:00 [gmail-watcher] gmail watcher stopped
2026-05-25T15:08:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:19.009+00:00 [shutdown] completed cleanly in 3585ms
2026-05-25T15:08:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:19.042+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T15:08:19+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 9min 50.868s CPU time.
2026-05-25T15:08:29+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 2.
2026-05-25T15:08:29+0000 ada-gateway systemd[1671]: Stopped OpenClaw Gateway (v2026.5.19).
2026-05-25T15:08:29+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 9min 50.868s CPU time.
2026-05-25T15:08:29+0000 ada-gateway systemd[1671]: Started OpenClaw Gateway (v2026.5.19).
2026-05-25T15:08:29+0000 ada-gateway openclaw-gateway-with-startup-context[3368221]: STARTUP_CONTEXT_RECEIPT {"agent":"Ada","status":"loaded","workspace":"/home/henrymascot/clawd","manifest":"/home/henrymascot/clawd/StartupContext/manifest.jsonl","manifest_line_count":18,"manifest_sha256":"7c0d72246e61eb508a134e42b3e11058eae1974d5f36cbcbea6b9ff5ffce8252","policy":"fail closed on legacy flat StartupContext","legacy_flat_fallback":false,"placeholder_fallback":false,"root_bootstrap_applied":true,"emitted_at":"2026-05-25T15:08:29.343801Z"}
2026-05-25T15:08:34+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:34.181+00:00 [gateway] loading configuration…
2026-05-25T15:08:36+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:36.949+00:00 [gateway] resolving authentication…
2026-05-25T15:08:36+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:36.981+00:00 [gateway] starting...
2026-05-25T15:08:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:38.034+00:00 [gateway] auto-enabled plugins for this runtime without writing config:
2026-05-25T15:08:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - nvidia/moonshotai/kimi-k2.6 model configured, enabled automatically.
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:43.064+00:00 (node:3368213) [OPENCLAW_LEGACY_ENV_VARS] DeprecationWarning: Legacy CLAWDBOT_* environment variables were detected (1 total), but OpenClaw only reads OPENCLAW_* names now.
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: Rename them by replacing the legacy prefix with OPENCLAW_; the old names are ignored.
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:43.105+00:00 [gateway] starting HTTP server...
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:43.574+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.685+00:00 [gateway] [plugins] duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js) (plugin=a2a-gateway, source=/home/henrymascot/.openclaw/extensions/a2a-gateway/dist/index.js)
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.711+00:00 [gateway] agent model: openai/gpt-5.5 (thinking=high, fast=on)
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.716+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.7s)
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.719+00:00 [gateway] log file: /tmp/clawdbot/clawdbot.log
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.940+00:00 [gateway] security warning: dangerous config flags enabled: gateway.controlUi.allowInsecureAuth=true, gateway.controlUi.dangerouslyDisableDeviceAuth=true. Run `openclaw security audit`.
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.998+00:00 [gateway] starting channels and sidecars...
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.382+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.455+00:00 [plugins] a2a-gateway: HTTP listening on 0.0.0.0:18800
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.458+00:00 [plugins] a2a-gateway: durable task store at /home/henrymascot/.openclaw/a2a-tasks; concurrency=4; queue=100
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.468+00:00 [discord] [default] starting provider
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.882+00:00 [plugins] a2a-gateway: gRPC listening on 0.0.0.0:18801
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.883+00:00 (node:3368213) DeprecationWarning: Calling start() is no longer necessary. It can be safely omitted.
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.911+00:00 [plugins] a2a-gateway: task cleanup enabled — ttl=72h interval=60min
2026-05-25T15:08:52+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:52.125+00:00 [browser/server] Browser control listening on http://127.0.0.1:18791/ (auth=token)
2026-05-25T15:08:52+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:52.202+00:00 [telegram] [default] starting provider (@HimAgentBot)
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.432+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.505+00:00 [telegram] [diag] isolated polling ingress started spool=/home/henrymascot/.openclaw/telegram/ingress-spool-default
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.514+00:00 [plugins] embedded acpx runtime backend registered (cwd: /home/henrymascot/clawd)
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.721+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.724+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.924+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.985+00:00 [gateway] ready
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.004+00:00 [heartbeat] started
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.168+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: (node:3368213) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.568+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.576+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.592+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.595+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.646+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:09:08+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:08.964+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T15:09:09+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:09.507+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T15:09:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:10.421+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T15:09:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:10.427+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T15:09:11+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:11.127+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:10:23+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:10:23.451+00:00 [ws] ⇄ res ✓ agent 179ms runId=7aedd722-61da-4859-ae9c-06ba8245a06f conn=8f25930a…8372 id=a738abff…663a
2026-05-25T15:10:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:10:37.545+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:10:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:10:38.064+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=92 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T15:10:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:10:38.080+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:10.916+00:00 DONE. MC #690 is in `review`.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: Implemented:
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Token-bloat audit script with compression guidance.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Skill Intelligence docs update.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Weekly registry wrapper integration.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Newer-skill review wrapper integration.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Source-post evidence captured from Bird.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: Verified:
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Direct audit: `320` skills scanned, `109` offenders, `26` high severity.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Wrapper runs logged.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - JSON contract checks passed.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - Syntax checks passed.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - QA evidence passed: `output/mc-690/qa-report.json`.
2026-05-25T15:15:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:10.921+00:00 ⚠️ 🛠️ `qa=~/clawd/scripts/qa manifest=output/mc-690/evidence.json report=output/mc-690/qa-report.json $qa evidence init --task… (in ~/clawd)` failed
2026-05-25T15:15:28+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:28.084+00:00 [agent/embedded] [trace:embedded-run] startup stages: runId=4be627b9-90ae-4483-8d1b-afc0a35ed447 sessionId=ba11e756-e581-4e0b-a201-a270c16d27ba phase=attempt-dispatch totalMs=9968 stages=workspace:1ms@1ms,runtime-plugins:290ms@291ms,hooks:0ms@291ms,model-resolution:306ms@597ms,auth:9ms@606ms,context-engine:1ms@607ms,attempt-workspace:9354ms@9961ms,attempt-prompt:1ms@9962ms,attempt-runtime-plan:5ms@9967ms,attempt-dispatch:0ms@9967ms
2026-05-25T15:15:30+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:30.879+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:15:33+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:33.763+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:15:35+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:35.443+00:00 [agent/embedded] tools: tools.allow allowlist contains unknown entries (lobster, llm-task, memory-core). These entries won't match any tool unless the plugin is enabled.
2026-05-25T15:15:36+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:36.107+00:00 [agent/embedded] tools: tools.profile (coding) allowlist contains unknown entries (lobster, llm-task, memory-core). These entries won't match any tool unless the plugin is enabled.
2026-05-25T15:15:42+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:42.778+00:00 [tools] read failed: ENOENT: no such file or directory, access '/home/henrymascot/clawd/cron-pi/HEARTBEAT.md' raw_params={"path":"/home/henrymascot/clawd/cron-pi/HEARTBEAT.md"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.037+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"bash -lc 'if [ -f /home/henrymascot/clawd/HEARTBEAT.md ]; then cat /home/henrymascot/clawd/HEARTBEAT.md; else echo HEARTBEAT_MISSING; fi'","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":10,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.043+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"bash ~/clawd/scripts/heartbeat-slack-check.sh","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.049+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"bash ~/clawd/scripts/mc.sh list 2>/dev/null | head -30","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.054+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"curl -sS \"http://100.104.229.62:3000/api/tasks?columns=todo,doing,review&includeActivity=true&limit=500\" | jq -r '.tasks[] | select(.blocked == true) | \"#\\(.id) [\\(.column)] \\\\(.name) :: \\\\(.blocker_reason // \\\"NO_REASON\\\") :: updated \\\\(.updated_at)\"' | head -20","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.060+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"find /tmp -name 'self-heal-*.json' -mmin +360 2>/dev/null | wc -l","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.065+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"ls -lt ~/clawd/memory/checkpoints/*.md 2>/dev/null | head -3","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:45.070+00:00 [tools] exec failed: exec host not allowed (requested sandbox; configured host is gateway; set tools.exec.host=sandbox or auto to allow this override). raw_params={"command":"cat ~/clawd/memory/heartbeat-state.json","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"sandbox"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.269+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"if [ -f /home/henrymascot/clawd/HEARTBEAT.md ]; then cat /home/henrymascot/clawd/HEARTBEAT.md; else echo HEARTBEAT_MISSING; fi","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":10,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.275+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"bash ~/clawd/scripts/heartbeat-slack-check.sh","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.280+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"bash ~/clawd/scripts/mc.sh list 2>/dev/null | head -30","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.285+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"curl -sS \"http://100.104.229.62:3000/api/tasks?columns=todo,doing,review&includeActivity=true&limit=500\" | jq -r '.tasks[] | select(.blocked == true) | \"#\\(.id) [\\(.column)] \\\\(.name) :: \\\\(.blocker_reason // \\\"NO_REASON\\\") :: updated \\\\(.updated_at)\"' | head -20","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.294+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"find /tmp -name 'self-heal-*.json' -mmin +360 2>/dev/null | wc -l","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.299+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"ls -lt ~/clawd/memory/checkpoints/*.md 2>/dev/null | head -3","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:15:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:51.303+00:00 [tools] exec failed: exec host not allowed (requested auto; configured host is gateway; set tools.exec.host=auto to allow this override). raw_params={"command":"cat ~/clawd/memory/heartbeat-state.json","workdir":"/home/henrymascot/clawd","yieldMs":1000,"timeout":20,"host":"auto"}
2026-05-25T15:16:09+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:16:09.470+00:00 [ws] ⇄ res ✓ sessions.list 243ms conn=88d1b522…3ee3 id=14aeba54…0497
2026-05-25T15:16:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:16:38.037+00:00 [ws] ⇄ res ✓ sessions.list 210ms conn=015515e2…7277 id=c13f60a0…5750
2026-05-25T15:20:23+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:20:23.583+00:00 [ws] ⇄ res ✓ agent 100ms runId=3ad1a158-d7f0-45bd-8004-5bd6a8a0c9b4 conn=5ea0faa2…742a id=9af6fd7a…ce6f
2026-05-25T15:20:34+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:20:34.293+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=86 hit=yes source=custom-1-main/2026-05-25-chat-transcript-chat-mc-auto.md
2026-05-25T15:20:34+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:20:34.306+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:23:17+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:23:17.010+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 115 chars)
2026-05-25T15:24:32+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:32.020+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T15:24:32+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:32.044+00:00 [ws] closed before connect conn=78603321-7d2d-4462-87a4-565d78c667f2 peer=127.0.0.1:39570->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:24:32+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:32.065+00:00 [ws] closed before connect conn=01a4a03c-05bc-468a-b181-dab6ab51f31f peer=127.0.0.1:41244->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:24:32+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:32.082+00:00 [ws] closed before connect conn=0decded5-f7c0-4936-afb0-085fa33e8251 peer=127.0.0.1:43768->127.0.0.1:18789 remote=127.0.0.1 fwd=n/a origin=n/a host=127.0.0.1:18789 ua=n/a code=1006 reason=n/a
2026-05-25T15:24:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:37.935+00:00 Config warnings:
2026-05-25T15:24:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T15:24:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T15:24:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T15:24:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T15:24:39+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:39.927+00:00 [telegram] Inbound message telegram:group:-5295561060 -> @HimAgentBot (group, 2655 chars)
2026-05-25T15:25:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:01.862+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Channel 1471344552047673478 is not a voice channel.
2026-05-25T15:25:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:01.872+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:25:14+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:14.359+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:25:19+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:19.737+00:00 [telegram] Inbound message telegram:group:-5295561060 -> @HimAgentBot (group, image/jpeg, 13 chars)
2026-05-25T15:25:24+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:24.343+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:25:33+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:33.491+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=136s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=27s recovery=none
2026-05-25T15:25:33+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:33.909+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=68 hit=yes source=memory-dir-main/2026-04-22-status-update.md
2026-05-25T15:25:33+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:33.925+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.056+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=103 hit=yes source=custom-1-main/2026-02-20-chat-transcript-telegram-3be8559d.md
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.066+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.074+00:00 [agents/harness] Codex agent harness failed; not falling back to embedded PI backend
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.080+00:00 [diagnostic] lane task error: lane=main durationMs=19239 error="Error: codex app-server startup aborted"
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.085+00:00 [diagnostic] lane task error: lane=session:agent:main:telegram:group:-5295561060 durationMs=19244 error="Error: codex app-server startup aborted"
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.127+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server startup aborted
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.498+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=This operation was aborted
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.775+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=This operation was aborted
2026-05-25T15:25:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:38.024+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=This operation was aborted
2026-05-25T15:25:40+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:40.876+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=This operation was aborted
2026-05-25T15:25:41+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:41.104+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=This operation was aborted
2026-05-25T15:25:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:43.981+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=This operation was aborted
2026-05-25T15:25:45+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:45.399+00:00 Embedded agent failed before reply: All models failed (7): openai/gpt-5.5: codex app-server startup aborted (unknown) | azure-openai-responses/gpt-5.5: This operation was aborted (timeout) | azure-openai-responses/gpt-5.4: This operation was aborted (timeout) | azure-openai-responses/gpt-5.4-mini: This operation was aborted (timeout) | zai/glm-5.1: This operation was aborted (timeout) | google/gemini-3.1-pro-preview: This operation was aborted (timeout) | minimax/MiniMax-M2.7: This operation was aborted (timeout) | This operation was aborted | This operation was aborted
2026-05-25T15:25:55+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:55.810+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=85 hit=yes source=custom-1-main/2026-02-20-chat-transcript-telegram-3be8559d.md
2026-05-25T15:25:55+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:55.818+00:00 [agent/embedded] codex plugin thread config eligibility
2026-05-25T15:29:09+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:09.147+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, channels.discord.voice.autoJoin)
2026-05-25T15:29:15+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:15.068+00:00 [reload] config change requires channel reload (discord) — deferring until 4 operation(s), 1 reply(ies), 2 embedded run(s), 1 background task run(s) complete
2026-05-25T15:29:43+0000 ada-gateway systemd[1671]: Stopping OpenClaw Gateway (v2026.5.19)...
2026-05-25T15:29:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:43.024+00:00 [gateway] signal SIGTERM received
2026-05-25T15:29:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:43.045+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T15:29:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:43.113+00:00 [shutdown] started: gateway stopping
2026-05-25T15:29:44+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:44.304+00:00 Config warnings:
2026-05-25T15:29:44+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)
2026-05-25T15:29:44+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.slack: plugin not installed: slack — install the official external plugin with: openclaw plugins install @openclaw/slack
2026-05-25T15:29:44+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.active-memory: plugin disabled (disabled in config) but config is present
2026-05-25T15:29:44+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: - plugins.entries.lossless-claw: plugin disabled (disabled in config) but config is present
2026-05-25T15:29:46+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:46.019+00:00 [reload] channel reload still deferred after 30947ms with 4 operation(s), 1 reply(ies), 2 embedded run(s), 1 background task run(s) active
2026-05-25T15:29:46+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:46.031+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T15:29:46+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:46.036+00:00 [agent/embedded] codex app-server client closed before turn completed
2026-05-25T15:29:48+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:48.915+00:00 [agent/embedded] embedded run failover decision: runId=3ad1a158-d7f0-45bd-8004-5bd6a8a0c9b4 stage=prompt decision=surface_error reason=none from=openai-codex/gpt-5.5 profile=sha256:fea7b445156a rawError=codex app-server client closed before turn completed
2026-05-25T15:29:48+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:48.919+00:00 [diagnostic] lane task error: lane=main durationMs=560588 error="codex app-server client closed before turn completed"
2026-05-25T15:29:48+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:48.922+00:00 [diagnostic] lane task error: lane=session:agent:main:explicit:mc-auto-ada-165 durationMs=560594 error="codex app-server client closed before turn completed"
2026-05-25T15:29:48+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:48.931+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T15:29:52+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:52.319+00:00 [plugins] plugin tool is undeclared (camofox-browser): camofox_evaluate
2026-05-25T15:29:52+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:52.367+00:00 [telegram] [default] released stopped Telegram polling lease
2026-05-25T15:29:54+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:54.388+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=123 hit=yes source=custom-1-main/f3d3b2a8-clean.md
2026-05-25T15:29:57+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:57.371+00:00 [telegram] [default] channel stop exceeded 5000ms after abort; continuing shutdown
2026-05-25T15:29:57+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:57.766+00:00 [gmail-watcher] gmail watcher stopped
2026-05-25T15:29:57+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:57.786+00:00 [shutdown] completed cleanly in 14673ms
2026-05-25T15:29:58+0000 ada-gateway systemd[1671]: Stopped OpenClaw Gateway (v2026.5.19).
2026-05-25T15:29:58+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Consumed 27min 48.770s CPU time.
2026-05-25T15:29:58+0000 ada-gateway systemd[1671]: Started OpenClaw Gateway (v2026.5.19).
2026-05-25T15:29:58+0000 ada-gateway openclaw-gateway-with-startup-context[3374618]: STARTUP_CONTEXT_RECEIPT {"agent":"Ada","status":"loaded","workspace":"/home/henrymascot/clawd","manifest":"/home/henrymascot/clawd/StartupContext/manifest.jsonl","manifest_line_count":18,"manifest_sha256":"7c0d72246e61eb508a134e42b3e11058eae1974d5f36cbcbea6b9ff5ffce8252","policy":"fail closed on legacy flat StartupContext","legacy_flat_fallback":false,"placeholder_fallback":false,"root_bootstrap_applied":true,"emitted_at":"2026-05-25T15:29:58.064067Z"}
2026-05-25T15:30:03+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:03.381+00:00 [gateway] loading configuration…
2026-05-25T15:30:06+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:06.896+00:00 [gateway] resolving authentication…
2026-05-25T15:30:06+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:06.941+00:00 [gateway] starting...
2026-05-25T15:30:08+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:08.205+00:00 [gateway] auto-enabled plugins for this runtime without writing config:
2026-05-25T15:30:08+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: - nvidia/moonshotai/kimi-k2.6 model configured, enabled automatically.
2026-05-25T15:30:13+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:13.878+00:00 (node:3374610) [OPENCLAW_LEGACY_ENV_VARS] DeprecationWarning: Legacy CLAWDBOT_* environment variables were detected (1 total), but OpenClaw only reads OPENCLAW_* names now.
2026-05-25T15:30:13+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: Rename them by replacing the legacy prefix with OPENCLAW_; the old names are ignored.
2026-05-25T15:30:13+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: (Use `node --trace-deprecation ...` to show where the warning was created)
2026-05-25T15:30:13+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:13.922+00:00 [gateway] starting HTTP server...
2026-05-25T15:30:14+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:14.433+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.127+00:00 [gateway] [plugins] duplicate plugin id resolved by explicit config-selected plugin; global plugin will be overridden by config plugin (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js) (plugin=a2a-gateway, source=/home/henrymascot/.openclaw/extensions/a2a-gateway/dist/index.js)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.150+00:00 [gateway] agent model: openai/gpt-5.5 (thinking=high, fast=on)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.155+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 15.2s)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.158+00:00 [gateway] log file: /tmp/clawdbot/clawdbot.log
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.392+00:00 [gateway] security warning: dangerous config flags enabled: gateway.controlUi.allowInsecureAuth=true, gateway.controlUi.dangerouslyDisableDeviceAuth=true. Run `openclaw security audit`.
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.454+00:00 [gateway] starting channels and sidecars...
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.860+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.940+00:00 [plugins] a2a-gateway: HTTP listening on 0.0.0.0:18800
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.944+00:00 [plugins] a2a-gateway: durable task store at /home/henrymascot/.openclaw/a2a-tasks; concurrency=4; queue=100
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.954+00:00 [discord] [default] starting provider
2026-05-25T15:30:23+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:23.408+00:00 [plugins] a2a-gateway: gRPC listening on 0.0.0.0:18801
2026-05-25T15:30:23+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:23.409+00:00 (node:3374610) DeprecationWarning: Calling start() is no longer necessary. It can be safely omitted.
2026-05-25T15:30:23+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:23.443+00:00 [plugins] a2a-gateway: task cleanup enabled — ttl=72h interval=60min
2026-05-25T15:30:23+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:23.685+00:00 [browser/server] Browser control listening on http://127.0.0.1:18791/ (auth=token)
2026-05-25T15:30:23+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:23.785+00:00 [telegram] [default] starting provider (@HimAgentBot)
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.406+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.424+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.427+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.447+00:00 [telegram] [diag] isolated polling ingress started spool=/home/henrymascot/.openclaw/telegram/ingress-spool-default
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.502+00:00 [plugins] embedded acpx runtime backend registered (cwd: /home/henrymascot/clawd)
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.733+00:00 [telegram] Inbound message telegram:855505513 -> @HimAgentBot (direct, 115 chars)
2026-05-25T15:30:34+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: (node:3374610) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
2026-05-25T15:30:34+0000 ada-gateway openclaw-gateway-with-star
```

### gateway_incident_highlights_log

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/evidence-pack-20260525T180905Z/gateway-incident-highlights.log`
- sha256: `de87f48dd2ab32a5c88be76e2633b825817842dd0e6a87c404348060dc953eb1`
- bytes: `187220`

```text
2026-05-25T13:41:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:41:31.450+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=133s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=119s recovery=none
2026-05-25T13:42:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:01.458+00:00 [diagnostic] long-running session: sessionId=d4edd589-2dfb-468b-b825-6b2abafa2a2d sessionKey=agent:main:discord:channel:1472358846444867615 state=processing age=140s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=20s activeTool=bash activeToolCallId=call_kWih7RQT3uB0q6AsSt77S69f activeToolAge=172s recovery=none
2026-05-25T13:42:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:01.469+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=163s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=149s recovery=none
2026-05-25T13:42:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:31.518+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=121s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=120s activeTool=bash activeToolCallId=call_DEp9b9Q6cdCMKZ0oVxBP7K8x activeToolAge=194s recovery=none
2026-05-25T13:42:31+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:42:31.537+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:discord:channel:1508423882292461630 state=processing age=193s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=179s recovery=none
2026-05-25T13:43:01+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:43:01.513+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization interval=30s eventLoopDelayP99Ms=1977.6 eventLoopDelayMaxMs=7411.3 eventLoopUtilization=0.96 cpuCoreRatio=0.82 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=7s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:explicit:mc-auto-ada-100(processing/embedded_run,q=0,age=1343s last=codex_app_server:notification:rawResponseItem/completed)|agent:main:discord:channel:1472358846444867615(processing/tool_call,q=1,age=2s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1508401391515865118(processing/embedded_run,q=1,age=3s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-688(processing/tool_call,q=0,age=719s last=codex_app_server:notification:hook/started)]
2026-05-25T13:46:11+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:46:11.258+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=2500b4ff-62ec-4288-9f70-e6ec6c3e9734 sessionId=2500b4ff-62ec-4288-9f70-e6ec6c3e9734 phase=core-plugin-tools totalMs=2626 stages=tool-policy:2129ms@2129ms,workspace-policy:1ms@2130ms,base-coding-tools:0ms@2130ms,shell-tools:0ms@2130ms,openclaw-tools:session-workspace:20ms@2150ms,openclaw-tools:image-tool:25ms@2175ms,openclaw-tools:image-generate-tool:0ms@2175ms,openclaw-tools:video-generate-tool:431ms@2606ms,openclaw-tools:music-generate-tool:14ms@2620ms,openclaw-tools:pdf-tool:0ms@2620ms,openclaw-tools:web-search-tool:0ms@2620ms,openclaw-tools:web-fetch-tool:0ms@2620ms,openclaw-tools:message-tool:3ms@2623ms,openclaw-tools:nodes-tool:0ms@2623ms,openclaw-tools:core-tool-list:0ms@2623ms,openclaw-tools:0ms@2623ms,message-provider-policy:0ms@2623ms,model-provider-policy:0ms@2623ms,authorization-policy:0ms@2623ms,schema-normalization:3ms@2626ms,tool-hooks:0ms@2626ms,abort-wrappers:0ms@2626ms,deferred-followup-descriptions:0ms@2626ms,attempt:create-openclaw-coding-tools:0ms@2626ms,attempt:tools-allow:0ms@2626ms
2026-05-25T13:47:06+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:06.998+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=99 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T13:47:08+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:08.605+00:00 [diagnostic] liveness warning: reasons=event_loop_delay interval=30s eventLoopDelayP99Ms=1717.6 eventLoopDelayMaxMs=6945.8 eventLoopUtilization=0.809 cpuCoreRatio=0.76 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=95s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1472358846444867615(processing/embedded_run,q=1,age=3s last=codex_app_server:notification:item/completed)|agent:main:discord:channel:1508401391515865118(processing/embedded_run,q=1,age=25s last=codex_app_server:notification:turn/completed)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=966s last=codex_app_server:notification:item/started)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=1,age=25s last=embedded_run:started)]
2026-05-25T13:47:38+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:47:38.620+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=125s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:thread/tokenUsage/updated lastProgressAge=33s activeTool=bash activeToolCallId=call_TmALRxevCzl3ydw2kaZLW6Fn activeToolAge=125s recovery=none
2026-05-25T13:49:38+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:49:38.728+00:00 [diagnostic] stalled session: sessionId=d4edd589-2dfb-468b-b825-6b2abafa2a2d sessionKey=agent:main:discord:channel:1472358846444867615 state=processing age=129s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=codex_app_server:notification:item/started lastProgressAge=129s recovery=none
2026-05-25T13:51:09+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:51:09.134+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization interval=30s eventLoopDelayP99Ms=6417.3 eventLoopDelayMaxMs=7637.8 eventLoopUtilization=0.967 cpuCoreRatio=0.747 active=6 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/tool_call,q=1,age=99s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1472358846444867615(processing/embedded_run,q=1,age=1s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=1207s last=codex_app_server:notification:hook/completed)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=1,age=1s last=codex_app_server:notification:item/started)|agent:main:explicit:mc-auto-ada-689(processing/embedded_run,q=0,age=391s last=codex_app_server:notification:rawResponseItem/completed)]
2026-05-25T13:51:39+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:51:39.132+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=129s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=tool_call lastProgress=codex_app_server:notification:turn/diff/updated lastProgressAge=3s activeTool=bash activeToolCallId=call_o1J38qHLL7GsdKd6wLRrJqSg activeToolAge=129s recovery=none
2026-05-25T13:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:49.743+00:00 [diagnostic] long-running session: sessionId=b593d9a7-95e5-49b9-8ecf-c50d01b81a3a sessionKey=agent:main:discord:channel:1506314998505275463 state=processing age=260s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=tool:bash:ended lastProgressAge=48s recovery=none
2026-05-25T13:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:53:49.774+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=148s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=109s recovery=none
2026-05-25T13:54:19+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:54:19.748+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=178s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=139s recovery=none
2026-05-25T13:54:49+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:54:49.748+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=208s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=169s recovery=none
2026-05-25T13:55:19+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:19.744+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=238s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=199s recovery=none
2026-05-25T13:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:44.595+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:55:50+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:55:50.799+00:00 [diagnostic] stalled session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=269s queueDepth=1 reason=active_work_without_progress classification=stalled_agent_run activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=230s recovery=none
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.872+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1508423882292461630 durationMs=541316 error="codex app-server client closed before turn completed"
2026-05-25T13:56:00+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:00.884+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:12+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:12.033+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:26+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:26.604+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:30+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:30.305+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=a81a154c-7d92-43c2-8982-a96fb1cf96b7 sessionId=mc-auto-ada-689 phase=core-plugin-tools totalMs=3595 stages=tool-policy:2477ms@2477ms,workspace-policy:2ms@2479ms,base-coding-tools:0ms@2479ms,shell-tools:0ms@2479ms,openclaw-tools:session-workspace:16ms@2495ms,openclaw-tools:image-tool:29ms@2524ms,openclaw-tools:image-generate-tool:0ms@2524ms,openclaw-tools:video-generate-tool:564ms@3088ms,openclaw-tools:music-generate-tool:22ms@3110ms,openclaw-tools:pdf-tool:0ms@3110ms,openclaw-tools:web-search-tool:0ms@3110ms,openclaw-tools:web-fetch-tool:0ms@3110ms,openclaw-tools:message-tool:5ms@3115ms,openclaw-tools:nodes-tool:0ms@3115ms,openclaw-tools:core-tool-list:1ms@3116ms,openclaw-tools:plugin-tools:471ms@3587ms,openclaw-tools:0ms@3587ms,message-provider-policy:0ms@3587ms,model-provider-policy:0ms@3587ms,authorization-policy:0ms@3587ms,schema-normalization:7ms@3594ms,tool-hooks:1ms@3595ms,abort-wrappers:0ms@3595ms,deferred-followup-descriptions:0ms@3595ms,attempt:create-openclaw-coding-tools:0ms@3595ms,attempt:tools-allow:0ms@3595ms
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.911+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1506314998505275463 durationMs=1827818 error="codex app-server client closed before turn completed"
2026-05-25T13:56:36+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:36.926+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T13:56:53+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:56:53.739+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=117 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-d4edd589.md
2026-05-25T13:57:13+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:13.141+00:00 [memory] qmd search denied by scope (channel=discord, chatType=channel, session=agent:main:discord:channel:1508423882292461630)
2026-05-25T13:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:57:42.271+00:00 [memory] qmd search denied by scope (channel=discord, chatType=channel, session=agent:main:discord:channel:1506314998505275463)
2026-05-25T13:59:46+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T13:59:46.030+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T14:00:15+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:15.229+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.043+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=46s eventLoopDelayP99Ms=19897.8 eventLoopDelayMaxMs=19897.8 eventLoopUtilization=1 cpuCoreRatio=1.06 active=5 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:181ms,post-attach.update-sentinel:138ms,sidecars.acp.identity-reconcile:525ms,sidecars.session-locks:574ms,post-ready.maintenance:186ms work=[active=agent:main:discord:channel:1506314998505275463(processing/embedded_run,q=0,age=129s last=model_call:ended)|agent:main:explicit:mc-auto-ada-688(processing/embedded_run,q=0,age=231s last=model_call:ended)|agent:main:discord:channel:1508423882292461630(processing/embedded_run,q=0,age=44s last=model_call:ended)|agent:main:explicit:mc-auto-ada-689(processing/embedded_run,q=0,age=239s last=model_call:ended)|agent:main:explicit:mc-auto-ada-101(processing/embedded_run,q=0,age=266s last=tool:exec:ended)]
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.071+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Channel 1471344552047673478 is not a voice channel.
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.079+00:00 [plugins] discord-thread-title-hook: websocket error Received network error or non-101 status code.
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.097+00:00 [gateway] signal SIGTERM received
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.163+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T14:00:32+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:32.172+00:00 [plugins] discord-thread-title-hook: websocket error Connection was closed before it was established.
2026-05-25T14:00:34+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:34.955+00:00 [agent/embedded] [timeout-compaction] contextEngine.compact() threw during timeout recovery for openai-codex/gpt-5.5: AbortError: This operation was aborted
2026-05-25T14:00:35+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:35.014+00:00 [diagnostic] lane task error: lane=session:agent:main:discord:channel:1472358846444867615 durationMs=1893062 error="FailoverError: LLM request timed out."
2026-05-25T14:00:35+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:35.439+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.5 detail=LLM request timed out.
2026-05-25T14:00:42+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:42.322+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=This operation was aborted
2026-05-25T14:00:46+0000 ada-gateway openclaw-gateway-with-startup-context[3256254]: 2026-05-25T14:00:46.521+00:00 [agent/embedded] codex app-server connection closed during startup; restarting app-server and retrying
2026-05-25T14:01:15+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:15.860+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:01:25+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:25.141+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 20.4s)
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.384+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:01:27+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:27.616+00:00 [discord] [default] starting provider
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.440+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:01:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:40.446+00:00 [fetch-timeout] fetch timeout after 2500ms (elapsed 11409ms) timer delayed 8909ms, likely event-loop starvation operation=fetchWithTimeout url=https://discord.com/api/v10/users/@me
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.283+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.350+00:00 [gateway] ready
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.539+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.697+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.706+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.726+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.730+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:01:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:41.939+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:42.117+00:00 [main-session-restart-recovery] marked 2 interrupted main session(s) from stale transcript locks
2026-05-25T14:01:53+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:01:53.350+00:00 [main-session-restart-recovery] resumed interrupted main session: agent:main:discord:channel:1508423882292461630
2026-05-25T14:02:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:13.008+00:00 [main-session-restart-recovery] resumed interrupted main session: agent:main:explicit:mc-auto-ada-688
2026-05-25T14:02:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:02:13.012+00:00 [main-session-restart-recovery] main-session restart recovery complete: recovered=2 failed=0 skipped=0
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.060+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=135s eventLoopDelayP99Ms=114152.2 eventLoopDelayMaxMs=114152.2 eventLoopUtilization=1 cpuCoreRatio=1.022 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:101ms,post-attach.update-sentinel:72ms,sidecars.acp.identity-reconcile:305ms,sidecars.session-locks:592ms,post-ready.maintenance:10ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=145s)]
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.065+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=145s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.076+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=145s action=release_lane aborted=false drained=true released=0
2026-05-25T14:04:08+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:08.080+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T14:04:47+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:04:47.803+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:05:21+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:21.237+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 10728ms) operation=fetchWithTimeout url=https://discord.com/api/v10/users/@me
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.140+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3-flash-preview reason=timeout next=azure-openai-responses/gpt-5.5 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.194+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.239+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.282+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.327+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.369+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:32+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:32.409+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=cron: isolated agent setup timed out before runner start
2026-05-25T14:05:40+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:40.784+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:05:41+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:41.611+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:05:42+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:42.915+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:05:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:43.662+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:05:45+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:05:45.083+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T14:11:00+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:11:00.161+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57183 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:13:13+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:13:13.682+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=132 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - It did not properly suppress things you had already said were done, stale, dumb, dropped, or deprioritized.
2026-05-25T14:16:49+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: - `HEARTBEAT.md` updated with blocked recovery query
2026-05-25T14:20:35+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:20:35.970+00:00 [agent/embedded] failed to read mirrored session history for codex harness hooks
2026-05-25T14:22:45+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:22:45.864+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57187 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:25:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:52.417+00:00 [gateway] signal SIGTERM received
2026-05-25T14:25:52+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:52.452+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T14:25:56+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:25:56.886+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T14:26:01+0000 ada-gateway openclaw-gateway-with-startup-context[3332175]: 2026-05-25T14:26:01.684+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=ae041719-ba3c-472e-b4e0-8633546fd891 sessionId=mc-auto-ada-119 phase=core-plugin-tools totalMs=3667 stages=tool-policy:2277ms@2277ms,workspace-policy:0ms@2277ms,base-coding-tools:0ms@2277ms,shell-tools:1ms@2278ms,openclaw-tools:session-workspace:0ms@2278ms,openclaw-tools:image-tool:147ms@2425ms,openclaw-tools:image-generate-tool:0ms@2425ms,openclaw-tools:video-generate-tool:565ms@2990ms,openclaw-tools:music-generate-tool:151ms@3141ms,openclaw-tools:pdf-tool:0ms@3141ms,openclaw-tools:web-search-tool:0ms@3141ms,openclaw-tools:web-fetch-tool:0ms@3141ms,openclaw-tools:message-tool:6ms@3147ms,openclaw-tools:nodes-tool:0ms@3147ms,openclaw-tools:core-tool-list:2ms@3149ms,openclaw-tools:plugin-tools:514ms@3663ms,openclaw-tools:0ms@3663ms,message-provider-policy:0ms@3663ms,model-provider-policy:1ms@3664ms,authorization-policy:0ms@3664ms,schema-normalization:3ms@3667ms,tool-hooks:0ms@3667ms,abort-wrappers:0ms@3667ms,deferred-followup-descriptions:0ms@3667ms,attempt:create-openclaw-coding-tools:0ms@3667ms,attempt:tools-allow:0ms@3667ms
2026-05-25T14:26:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:23.480+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:26:30+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:30.960+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 15.2s)
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.735+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:26:31+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:31.821+00:00 [discord] [default] starting provider
2026-05-25T14:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:42.469+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.262+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.265+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.339+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.400+00:00 [gateway] ready
2026-05-25T14:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:43.596+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.192+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.211+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.223+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.249+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:26:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:26:44.254+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:28:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:18.959+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=117s eventLoopDelayP99Ms=92207.6 eventLoopDelayMaxMs=92207.6 eventLoopUtilization=1 cpuCoreRatio=1.069 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:512ms,post-attach.update-sentinel:486ms,sidecars.acp.identity-reconcile:790ms,sidecars.session-locks:817ms,post-ready.maintenance:12ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=96s)]
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.933+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=131s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.944+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=131s action=release_lane aborted=false drained=true released=0
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.948+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T14:28:53+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:28:53.959+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:29:22+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:22.734+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:29:23+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:23.336+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:29:24+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:24.393+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:29:25+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:25.009+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:29:25+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:29:25.738+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T14:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:30:41.110+00:00 [agent/embedded] failed to read mirrored session history for codex harness hooks
2026-05-25T14:32:44+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:32:44.982+00:00 [ws] ⇄ res ✓ message.action 548ms channel=discord conn=eceda5fc…b8de id=fae700f8…5805
2026-05-25T14:33:13+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:33:13.430+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57192 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T14:37:42+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:42.264+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=88 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.512+00:00 [diagnostic] liveness warning: reasons=event_loop_delay interval=32s eventLoopDelayP99Ms=1762.7 eventLoopDelayMaxMs=4154.5 eventLoopUtilization=0.776 cpuCoreRatio=0.879 active=3 waiting=0 queued=0 recentPhases=post-attach.update-check:4ms,sidecars.restart-sentinel:512ms,post-attach.update-sentinel:486ms,sidecars.acp.identity-reconcile:790ms,sidecars.session-locks:817ms,post-ready.maintenance:12ms work=[active=agent:main:explicit:mc-auto-ada-154(processing/tool_call,q=0,age=431s last=codex_app_server:notification:item/completed)|agent:main:discord:channel:1506314998505275463(processing/embedded_run,q=1,age=10s last=codex_app_server:notification:thread/tokenUsage/updated)|agent:main:discord:channel:1507995454237839420(processing/embedded_run,q=1,age=10s last=embedded_run:started)]
2026-05-25T14:37:56+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:37:56.976+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=66 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T14:48:26+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:48:26.746+00:00 [plugins] discord-thread-title-hook: renamed 1508481814069776594 to "Steipete Codex Loaded Each"
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:17.596+00:00 [reload] config change requires gateway restart (env.NVIDIA_API_KEY) — deferring until 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) complete
2026-05-25T14:51:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:17.636+00:00 [reload] restart blocked by active background task run(s): taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:51:37+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:37.809+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:51:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:51:48.166+00:00 [reload] restart still deferred after 30293ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:52:18.533+00:00 [reload] restart still deferred after 60791ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:52:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:52:49.195+00:00 [reload] restart still deferred after 90943ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:19+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:53:19.518+00:00 [reload] restart still deferred after 121724ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:53:49+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:53:49.687+00:00 [reload] restart still deferred after 151944ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:20+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:54:20.231+00:00 [reload] restart still deferred after 182483ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:54:50+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:54:50.759+00:00 [reload] restart still deferred after 213020ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:21+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:21.043+00:00 [reload] restart still deferred after 243289ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:55:51.181+00:00 [reload] restart still deferred after 273440ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:17.934+00:00 [reload] restart timeout after 300102ms with 6 operation(s), 1 reply(ies), 3 embedded run(s), 2 background task run(s) still active (taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: Your FINAL action befor); forcing restart
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.107+00:00 [main-session-restart-recovery] marked 3 interrupted main session(s) for restart recovery (config reload forced restart)
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.113+00:00 [gateway] signal SIGUSR1 received
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.144+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.203+00:00 [gateway] draining 6 active task(s) and 3 active embedded run(s) before restart with timeout 300000ms
2026-05-25T14:56:18+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:18.209+00:00 [gateway] restart blocked by active background task run(s): taskId=f7428618-0961-4e96-bce5-99f66dccdc80 runId=0a80ded5-6476-42cb-a709-56e098fabcea status=running runtime=cli title=[Mon 2026-05-25 14:50 UTC] ## CRITICAL — Read this first
2026-05-25T14:56:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:48.215+00:00 [gateway] still draining 6 active task(s) and 3 active embedded run(s) before restart
2026-05-25T14:56:48+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:48.378+00:00 [gateway] active embedded run drain grace reached; aborting active run(s) before restart
2026-05-25T14:56:57+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:57.614+00:00 [gateway] drain timeout reached; proceeding with restart
2026-05-25T14:56:58+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:56:58.081+00:00 [shutdown] started: gateway restarting
2026-05-25T14:57:10+0000 ada-gateway openclaw-gateway-with-startup-context[3348587]: 2026-05-25T14:57:10.688+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T14:57:21+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 1.
2026-05-25T14:57:35+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:35.492+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T14:57:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:42.684+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.9s)
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.326+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T14:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:43.410+00:00 [discord] [default] starting provider
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.240+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.452+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.456+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.670+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.737+00:00 [gateway] ready
2026-05-25T14:57:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:53.917+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.327+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.335+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.351+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.355+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.402+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.410+00:00 [delivery-recovery] Found 1 pending delivery entries — starting recovery
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.524+00:00 [delivery-recovery] Delivery entry 524ef198-ecf2-4548-8f15-bffe0ff6489e delivery state is send_attempt_started; refusing blind replay without adapter reconciliation
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.528+00:00 [delivery-recovery] Retry failed for delivery 524ef198-ecf2-4548-8f15-bffe0ff6489e: delivery state is send_attempt_started; refusing blind replay without adapter reconciliation
2026-05-25T14:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:57:54.537+00:00 [delivery-recovery] Delivery recovery complete: 0 recovered, 1 failed, 0 skipped (max retries), 0 deferred (backoff)
2026-05-25T14:58:02+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:02.195+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T14:58:02+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:02.730+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T14:58:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:03.926+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T14:58:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:03.931+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T14:58:05+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T14:58:05.252+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:02:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:02:41.826+00:00 [reload] config change requires gateway restart (env.NVIDIA_API_KEY) — deferring until 2 operation(s), 1 embedded run(s), 1 background task run(s) complete
2026-05-25T15:02:41+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:02:41.865+00:00 [reload] restart blocked by active background task run(s): taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.274+00:00 [reload] restart still deferred after 97294ms with 2 operation(s), 1 embedded run(s), 2 background task run(s) active (taskId=83e9772d-8d1d-4f14-83ce-762fda84f958 runId=cron:8055b760-224c-4434-9643-46ab41247d85:1779721378349 status=running runtime=cron label=moltbot-business-loop title=moltbot-business-loop; taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:04:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:19.606+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T15:04:32+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:32.329+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 10954ms) operation=fetchWithTimeout url=https://discord.com/api/v10/oauth2/applications/@me
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.776+00:00 [reload] restart still deferred after 129803ms with 2 operation(s), 1 reply(ies), 1 embedded run(s), 1 background task run(s) active (taskId=c38df1b5-5942-47f0-a87d-fe86cd727f0a runId=da2cb7c0-b0b7-40a7-bd13-8ae82e2d2c81 status=running runtime=cli title=[Mon 2026-05-25 15:00 UTC] ## CRITICAL — Read this first
2026-05-25T15:04:51+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:04:51.835+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:05:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:03.337+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T15:05:03+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:03.344+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T15:05:08+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:08.266+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.753+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3-flash-preview reason=timeout next=azure-openai-responses/gpt-5.5 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.791+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.829+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.869+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.909+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.949+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:09.989+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=google/gemini-3-flash-preview candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=cron: isolated agent setup timed out before runner start
2026-05-25T15:05:11+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:11.660+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=84 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T15:05:22+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:22.179+00:00 [reload] restart still deferred after 160212ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:05:52+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:05:52.735+00:00 [reload] restart still deferred after 190732ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:06:23+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:06:23.222+00:00 [reload] restart still deferred after 221252ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:06:53+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:06:53.738+00:00 [reload] restart still deferred after 251770ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:07:24+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:24.252+00:00 [reload] restart still deferred after 282285ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) active
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.120+00:00 [reload] restart timeout after 300141ms with 2 operation(s), 1 reply(ies), 1 embedded run(s) still active; forcing restart
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.200+00:00 [main-session-restart-recovery] marked 1 interrupted main session(s) for restart recovery (config reload forced restart)
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.205+00:00 [gateway] signal SIGUSR1 received
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.226+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T15:07:42+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:07:42.265+00:00 [gateway] draining 2 active task(s) and 1 active embedded run(s) before restart with timeout 300000ms
2026-05-25T15:08:12+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:12.271+00:00 [gateway] still draining 2 active task(s) and 1 active embedded run(s) before restart
2026-05-25T15:08:12+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:12.396+00:00 [gateway] active embedded run drain grace reached; aborting active run(s) before restart
2026-05-25T15:08:15+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:15.150+00:00 [gateway] drain timeout reached; proceeding with restart
2026-05-25T15:08:15+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:15.424+00:00 [shutdown] started: gateway restarting
2026-05-25T15:08:19+0000 ada-gateway openclaw-gateway-with-startup-context[3364902]: 2026-05-25T15:08:19.042+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T15:08:29+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 2.
2026-05-25T15:08:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:43.574+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T15:08:50+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:50.716+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.7s)
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.382+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T15:08:51+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:08:51.468+00:00 [discord] [default] starting provider
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.432+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.721+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.724+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.924+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T15:09:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:01.985+00:00 [gateway] ready
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.168+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.568+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.576+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.592+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.595+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:09:02+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:02.646+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:09:08+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:08.964+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T15:09:09+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:09.507+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T15:09:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:10.421+00:00 [discord] voice: joining guild=1471344550210703557 channel=1471344552047673478 mode=bidi agent=main voiceSession=agent:main:discord:channel:1471344552047673478 supervisorSession=agent:main:discord:channel:1471344552047673478 agentSessionMode=voice voiceModel=route-default realtimeProvider=openai realtimeModel=gpt-realtime-2 realtimeVoice=cedar
2026-05-25T15:09:10+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:10.427+00:00 [discord] voice: realtime bridge starting mode=bidi provider=openai model=gpt-realtime-2 voice=cedar consultPolicy=always toolPolicy=safe-read-only autoRespond=true interruptResponse=true bargeIn=true minBargeInAudioEndMs=250
2026-05-25T15:09:11+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:09:11.127+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Failed to start Discord realtime voice: You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
2026-05-25T15:15:28+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:15:28.084+00:00 [agent/embedded] [trace:embedded-run] startup stages: runId=4be627b9-90ae-4483-8d1b-afc0a35ed447 sessionId=ba11e756-e581-4e0b-a201-a270c16d27ba phase=attempt-dispatch totalMs=9968 stages=workspace:1ms@1ms,runtime-plugins:290ms@291ms,hooks:0ms@291ms,model-resolution:306ms@597ms,auth:9ms@606ms,context-engine:1ms@607ms,attempt-workspace:9354ms@9961ms,attempt-prompt:1ms@9962ms,attempt-runtime-plan:5ms@9967ms,attempt-dispatch:0ms@9967ms
2026-05-25T15:24:32+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:24:32.020+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T15:25:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:01.862+00:00 [discord] voice: autoJoin skipped guild=1471344550210703557 channel=1471344552047673478: Channel 1471344552047673478 is not a voice channel.
2026-05-25T15:25:01+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:01.872+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:25:33+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:33.491+00:00 [diagnostic] long-running session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=136s queueDepth=1 reason=queued_behind_active_work classification=long_running activeWorkKind=embedded_run lastProgress=embedded_run:started lastProgressAge=27s recovery=none
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.127+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server startup aborted
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.498+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=timeout next=azure-openai-responses/gpt-5.4 detail=This operation was aborted
2026-05-25T15:25:37+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:37.775+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.4 reason=timeout next=azure-openai-responses/gpt-5.4-mini detail=This operation was aborted
2026-05-25T15:25:38+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:38.024+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.4-mini reason=timeout next=zai/glm-5.1 detail=This operation was aborted
2026-05-25T15:25:40+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:40.876+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=zai/glm-5.1 reason=timeout next=google/gemini-3.1-pro-preview detail=This operation was aborted
2026-05-25T15:25:41+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:41.104+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=google/gemini-3.1-pro-preview reason=timeout next=minimax/MiniMax-M2.7 detail=This operation was aborted
2026-05-25T15:25:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:25:43.981+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=minimax/MiniMax-M2.7 reason=timeout next=none detail=This operation was aborted
2026-05-25T15:29:09+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:09.147+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, channels.discord.voice.autoJoin)
2026-05-25T15:29:15+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:15.068+00:00 [reload] config change requires channel reload (discord) — deferring until 4 operation(s), 1 reply(ies), 2 embedded run(s), 1 background task run(s) complete
2026-05-25T15:29:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:43.024+00:00 [gateway] signal SIGTERM received
2026-05-25T15:29:43+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:43.045+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T15:29:48+0000 ada-gateway openclaw-gateway-with-startup-context[3368213]: 2026-05-25T15:29:48.931+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T15:30:14+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:14.433+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.155+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 15.2s)
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.860+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T15:30:22+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:22.954+00:00 [discord] [default] starting provider
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.406+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.424+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T15:30:33+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:33.427+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T15:30:34+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:34.296+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T15:30:34+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:34.361+00:00 [gateway] ready
2026-05-25T15:30:34+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:34.545+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T15:30:35+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:35.029+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:30:35+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:35.038+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T15:30:35+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:35.060+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T15:30:35+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:35.064+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T15:30:35+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:30:35.115+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:32:10+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:10.802+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=118s eventLoopDelayP99Ms=93147.1 eventLoopDelayMaxMs=93147.1 eventLoopUtilization=1 cpuCoreRatio=1.069 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:111ms,post-attach.update-sentinel:91ms,sidecars.acp.identity-reconcile:684ms,sidecars.session-locks:699ms,post-ready.maintenance:9ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=97s)]
2026-05-25T15:32:26+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:26.547+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 13407ms) operation=fetchWithTimeout url=https://discord.com/api/v10/oauth2/applications/@me
2026-05-25T15:32:49+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:49.696+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=136s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T15:32:49+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:49.709+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=136s action=release_lane aborted=false drained=true released=0
2026-05-25T15:32:49+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:49.713+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T15:32:49+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:32:49.752+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T15:33:29+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:33:29.741+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T15:33:30+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:33:30.270+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T15:39:46+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:39:46.868+00:00 [ws] ⇄ res ✓ message.action 457ms channel=discord conn=6698390a…41c4 id=9e2adb82…77fd
2026-05-25T15:44:04+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:44:04.985+00:00 [ws] ⇄ res ✓ message.action 524ms channel=discord conn=f4edbbbf…aa74 id=bd4a38c3…38e7
2026-05-25T15:47:43+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T15:47:43.128+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57208 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T15:51:51+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: - Discord voice autojoin is disabled: `autoJoin=[]`.
2026-05-25T15:51:51+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: - Monitor detects event-loop starvation, Discord delivery hangs, stuck lanes/sessions, restart drain loops, and hook/config worker storms.
2026-05-25T15:51:51+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: - It sends Telegram alerts directly and now suppresses repeated hook-storm spam with a normalized 15-minute cooldown.
2026-05-25T16:02:14+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T16:02:14.492+00:00 [agent/embedded] [trace:embedded-run] startup stages: runId=23f12012-1dba-43f7-9779-414125337b76 sessionId=23f12012-1dba-43f7-9779-414125337b76 phase=attempt-dispatch totalMs=8733 stages=workspace:1ms@1ms,runtime-plugins:23ms@24ms,hooks:1ms@25ms,model-resolution:2517ms@2542ms,auth:5765ms@8307ms,context-engine:0ms@8307ms,attempt-workspace:417ms@8724ms,attempt-prompt:0ms@8724ms,attempt-runtime-plan:9ms@8733ms,attempt-dispatch:0ms@8733ms
2026-05-25T16:02:17+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T16:02:17.716+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=23f12012-1dba-43f7-9779-414125337b76 sessionId=23f12012-1dba-43f7-9779-414125337b76 phase=core-plugin-tools totalMs=3185 stages=tool-policy:2529ms@2529ms,workspace-policy:1ms@2530ms,base-coding-tools:0ms@2530ms,shell-tools:0ms@2530ms,openclaw-tools:session-workspace:10ms@2540ms,openclaw-tools:image-tool:25ms@2565ms,openclaw-tools:image-generate-tool:0ms@2565ms,openclaw-tools:video-generate-tool:569ms@3134ms,openclaw-tools:music-generate-tool:21ms@3155ms,openclaw-tools:pdf-tool:0ms@3155ms,openclaw-tools:web-search-tool:0ms@3155ms,openclaw-tools:web-fetch-tool:0ms@3155ms,openclaw-tools:message-tool:9ms@3164ms,openclaw-tools:nodes-tool:3ms@3167ms,openclaw-tools:core-tool-list:1ms@3168ms,openclaw-tools:0ms@3168ms,message-provider-policy:0ms@3168ms,model-provider-policy:1ms@3169ms,authorization-policy:7ms@3176ms,schema-normalization:8ms@3184ms,tool-hooks:0ms@3184ms,abort-wrappers:0ms@3184ms,deferred-followup-descriptions:0ms@3184ms,attempt:create-openclaw-coding-tools:0ms@3184ms,attempt:tools-allow:1ms@3185ms
2026-05-25T16:29:02+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T16:29:02.030+00:00 [gateway] signal SIGTERM received
2026-05-25T16:29:02+0000 ada-gateway openclaw-gateway-with-startup-context[3374610]: 2026-05-25T16:29:02.055+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T16:29:21+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:21.376+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T16:29:28+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:28.752+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.8s)
2026-05-25T16:29:29+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:29.422+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T16:29:29+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:29.515+00:00 [discord] [default] starting provider
2026-05-25T16:29:39+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:39.672+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T16:29:39+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:39.923+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T16:29:39+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:39.928+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.291+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.361+00:00 [gateway] ready
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.544+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.685+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.693+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.712+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T16:29:40+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:40.716+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:29:41+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:41.172+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:29:46+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:46.961+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T16:29:47+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:29:47.508+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T16:30:45+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:30:45.698+00:00 [agent/embedded] failed to read mirrored session history for codex harness hooks
2026-05-25T16:35:16+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:35:16.467+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T16:35:51+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:35:51.615+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 state=processing age=131s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T16:35:51+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:35:51.625+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 age=131s action=release_lane aborted=false drained=true released=0
2026-05-25T16:35:51+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:35:51.630+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 lane=session:agent:main:telegram:group:-5295561060 released=0
2026-05-25T16:35:51+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:35:51.640+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:36:56+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:36:56.115+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, hooks.internal.enabled)
2026-05-25T16:37:01+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:01.929+00:00 [reload] config hot reload applied (hooks.internal.enabled)
2026-05-25T16:37:41+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:41.841+00:00 [gateway] signal SIGTERM received
2026-05-25T16:37:41+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:41.877+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T16:37:45+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:45.475+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T16:37:52+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:52.266+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T16:37:55+0000 ada-gateway openclaw-gateway-with-startup-context[3410060]: 2026-05-25T16:37:55.100+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.4 detail=bundle-mcp runtime disposed for session mc-auto-ada-431
2026-05-25T16:38:14+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:14.792+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T16:38:23+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:23.174+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 17.0s)
2026-05-25T16:38:23+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:23.853+00:00 [hooks/workspace] Hook "thread-archive-reset" has HOOK.md but no handler file in /home/henrymascot/.openclaw/hooks/thread-archive-reset
2026-05-25T16:38:23+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:23.873+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T16:38:23+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:23.880+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T16:38:23+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:23.885+00:00 [hooks] loaded 2 internal hook handlers
2026-05-25T16:38:24+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:24.443+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T16:38:24+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:24.571+00:00 [discord] [default] starting provider
2026-05-25T16:38:34+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:34.782+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T16:38:34+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:34.798+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T16:38:34+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:34.801+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T16:38:35+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:35.921+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T16:38:35+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:35.982+00:00 [gateway] ready
2026-05-25T16:38:36+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:36.221+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T16:38:36+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:36.367+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:38:36+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:36.377+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T16:38:36+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:36.395+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T16:38:36+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:36.399+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:38:37+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:38:37.204+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:40:17+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:17.132+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=124s eventLoopDelayP99Ms=99052.7 eventLoopDelayMaxMs=99052.7 eventLoopUtilization=1 cpuCoreRatio=1.068 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:117ms,post-attach.update-sentinel:81ms,sidecars.acp.identity-reconcile:378ms,sidecars.session-locks:376ms,post-ready.maintenance:9ms work=[active=agent:main:telegram:group:-5295561060(processing,q=1,age=102s)]
2026-05-25T16:40:17+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:17.159+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 99290ms) timer delayed 89290ms, likely event-loop starvation operation=fetchWithTimeout url=https://discord.com/api/v10/oauth2/applications/@me
2026-05-25T16:40:52+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:52.532+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 state=processing age=137s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T16:40:52+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:52.549+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 age=137s action=release_lane aborted=false drained=true released=0
2026-05-25T16:40:52+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:52.553+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:group:-5295561060 lane=session:agent:main:telegram:group:-5295561060 released=0
2026-05-25T16:40:52+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:40:52.569+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:41:21+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:41:21.401+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T16:41:22+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:41:22.058+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T16:42:29+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:42:29.132+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=9fd3ffb5-d615-4448-8dc1-829da9e741cb sessionId=651383fb-3870-495e-b926-b34f4a568c2f phase=core-plugin-tools totalMs=3075 stages=tool-policy:2039ms@2039ms,workspace-policy:1ms@2040ms,base-coding-tools:0ms@2040ms,shell-tools:0ms@2040ms,openclaw-tools:session-workspace:7ms@2047ms,openclaw-tools:image-tool:226ms@2273ms,openclaw-tools:image-generate-tool:0ms@2273ms,openclaw-tools:video-generate-tool:392ms@2665ms,openclaw-tools:music-generate-tool:47ms@2712ms,openclaw-tools:pdf-tool:1ms@2713ms,openclaw-tools:web-search-tool:0ms@2713ms,openclaw-tools:web-fetch-tool:0ms@2713ms,openclaw-tools:message-tool:7ms@2720ms,openclaw-tools:nodes-tool:0ms@2720ms,openclaw-tools:core-tool-list:2ms@2722ms,openclaw-tools:plugin-tools:346ms@3068ms,openclaw-tools:0ms@3068ms,message-provider-policy:0ms@3068ms,model-provider-policy:0ms@3068ms,authorization-policy:1ms@3069ms,schema-normalization:5ms@3074ms,tool-hooks:1ms@3075ms,abort-wrappers:0ms@3075ms,deferred-followup-descriptions:0ms@3075ms,attempt:create-openclaw-coding-tools:0ms@3075ms,attempt:tools-allow:0ms@3075ms
2026-05-25T16:44:38+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:44:38.636+00:00 [agent/embedded] [trace:embedded-run] core-plugin-tool stages: runId=6fda57b9-1571-4c6e-a51f-927b33184ff5 sessionId=96390a4d-5628-4b81-947d-1f308738592a phase=core-plugin-tools totalMs=2992 stages=tool-policy:2003ms@2003ms,workspace-policy:0ms@2003ms,base-coding-tools:0ms@2003ms,shell-tools:0ms@2003ms,openclaw-tools:session-workspace:9ms@2012ms,openclaw-tools:image-tool:229ms@2241ms,openclaw-tools:image-generate-tool:0ms@2241ms,openclaw-tools:video-generate-tool:392ms@2633ms,openclaw-tools:music-generate-tool:41ms@2674ms,openclaw-tools:pdf-tool:0ms@2674ms,openclaw-tools:web-search-tool:0ms@2674ms,openclaw-tools:web-fetch-tool:0ms@2674ms,openclaw-tools:message-tool:4ms@2678ms,openclaw-tools:nodes-tool:1ms@2679ms,openclaw-tools:core-tool-list:0ms@2679ms,openclaw-tools:plugin-tools:307ms@2986ms,openclaw-tools:1ms@2987ms,message-provider-policy:0ms@2987ms,model-provider-policy:0ms@2987ms,authorization-policy:1ms@2988ms,schema-normalization:3ms@2991ms,tool-hooks:1ms@2992ms,abort-wrappers:0ms@2992ms,deferred-followup-descriptions:0ms@2992ms,attempt:create-openclaw-coding-tools:0ms@2992ms,attempt:tools-allow:0ms@2992ms
2026-05-25T16:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:44:47.603+00:00 [gateway] signal SIGTERM received
2026-05-25T16:44:47+0000 ada-gateway openclaw-gateway-with-startup-context[3415904]: 2026-05-25T16:44:47.626+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T16:45:07+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:07.552+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T16:45:14+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:14.871+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 15.5s)
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.408+00:00 [hooks/workspace] Hook "thread-archive-reset" has HOOK.md but no handler file in /home/henrymascot/.openclaw/hooks/thread-archive-reset
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.424+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.431+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.435+00:00 [hooks] loaded 2 internal hook handlers
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.809+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T16:45:15+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:15.891+00:00 [discord] [default] starting provider
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.092+00:00 [fetch-timeout] fetch timeout after 2500ms (elapsed 9170ms) timer delayed 6670ms, likely event-loop starvation operation=fetchWithTimeout url=https://discord.com/api/v10/oauth2/applications/@me
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.099+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.103+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.711+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.780+00:00 [gateway] ready
2026-05-25T16:45:26+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:26.957+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.100+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.109+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.125+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.128+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.559+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:45:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:27.584+00:00 [main-session-restart-recovery] marked 1 interrupted main session(s) from stale transcript locks
2026-05-25T16:45:32+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:32.040+00:00 [main-session-restart-recovery] marked interrupted main session failed: agent:entitybuilder:main:heartbeat (transcript tail is not resumable)
2026-05-25T16:45:32+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:32.075+00:00 [main-session-restart-recovery] main-session restart recovery complete: recovered=0 failed=1 skipped=0
2026-05-25T16:45:33+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:33.487+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T16:45:34+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:45:34.157+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T16:49:47+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:49:47.951+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T16:50:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:50:27.615+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=40s eventLoopDelayP99Ms=23890.8 eventLoopDelayMaxMs=23890.8 eventLoopUtilization=1 cpuCoreRatio=1.089 active=2 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:83ms,post-attach.update-sentinel:57ms,sidecars.acp.identity-reconcile:220ms,sidecars.session-locks:620ms,post-ready.maintenance:10ms work=[active=agent:main:discord:channel:1472210772422557748(processing,q=1,age=148s)|agent:main:telegram:direct:855505513(processing,q=1,age=38s)]
2026-05-25T16:50:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:50:27.624+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:discord:channel:1472210772422557748 state=processing age=148s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T16:50:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:50:27.649+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:discord:channel:1472210772422557748 age=148s action=release_lane aborted=false drained=true released=0
2026-05-25T16:50:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:50:27.655+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:discord:channel:1472210772422557748 lane=session:agent:main:discord:channel:1472210772422557748 released=0
2026-05-25T16:50:27+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:50:27.688+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T16:51:01+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:51:01.510+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=127 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T16:51:55+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:51:55.082+00:00 [ws] ⇄ res ✓ message.action 1497ms channel=discord conn=65c473f6…803f id=025be878…b047
2026-05-25T16:52:07+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:52:07.608+00:00 [ws] ⇄ res ✓ message.action 742ms channel=discord conn=f5cd3599…04b8 id=a3f47e5e…bf87
2026-05-25T16:57:37+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:57:37.787+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, hooks.internal.entries.mission-control-auto.enabled)
2026-05-25T16:57:43+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:57:43.325+00:00 [reload] config hot reload applied (hooks.internal.entries.mission-control-auto.enabled)
2026-05-25T16:57:57+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:57:57.382+00:00 [gateway] signal SIGTERM received
2026-05-25T16:57:57+0000 ada-gateway openclaw-gateway-with-startup-context[3420304]: 2026-05-25T16:57:57.400+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T16:58:27+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:27.741+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T16:58:35+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:35.127+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.4s)
2026-05-25T16:58:35+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:35.738+00:00 [hooks/workspace] Hook "thread-archive-reset" has HOOK.md but no handler file in /home/henrymascot/.openclaw/hooks/thread-archive-reset
2026-05-25T16:58:35+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:35.754+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T16:58:35+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:35.759+00:00 [hooks] loaded 1 internal hook handler
2026-05-25T16:58:36+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:36.144+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T16:58:36+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:36.232+00:00 [discord] [default] starting provider
2026-05-25T16:58:46+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:46.332+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T16:58:46+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:46.348+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T16:58:46+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:46.352+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T16:58:47+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:47.248+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T16:58:47+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:47.312+00:00 [gateway] ready
2026-05-25T16:58:47+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:47.490+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T16:58:47+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:47.995+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:58:48+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:48.003+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T16:58:48+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:48.022+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T16:58:48+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:48.025+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T16:58:49+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T16:58:49.735+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:00:17+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:17.931+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=112s eventLoopDelayP99Ms=8699 eventLoopDelayMaxMs=8699 eventLoopUtilization=1 cpuCoreRatio=1.071 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:429ms,post-attach.update-sentinel:406ms,sidecars.acp.identity-reconcile:661ms,sidecars.session-locks:658ms,post-ready.maintenance:10ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=91s)]
2026-05-25T17:00:27+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:27.712+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:50.733+00:00 [fetch-timeout] fetch timeout after 10000ms (elapsed 23131ms) timer delayed 13131ms, likely event-loop starvation operation=fetchWithTimeout url=https://discord.com/api/v10/users/@me
2026-05-25T17:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:50.742+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=124s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T17:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:50.753+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=124s action=release_lane aborted=false drained=true released=0
2026-05-25T17:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:50.757+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T17:00:50+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:00:50.797+00:00 [plugins] discord-thread-title-hook: websocket error Received network error or non-101 status code.
2026-05-25T17:01:29+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:29.960+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:01:30+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:30.573+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:42.892+00:00 [gateway] signal SIGTERM received
2026-05-25T17:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:42.914+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:01:42+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:42.920+00:00 [plugins] discord-thread-title-hook: websocket error Connection was closed before it was established.
2026-05-25T17:01:47+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:47.185+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T17:01:51+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:51.359+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T17:01:58+0000 ada-gateway openclaw-gateway-with-startup-context[3431801]: 2026-05-25T17:01:58.452+00:00 [agent/embedded] Removed already-queued orphaned user message to prevent consecutive user turns. runId=03631e2a-b914-449f-a566-355a0c490f71 sessionId=be71e8ab-78d4-46de-9cee-d643d3c3c935 trigger=user
2026-05-25T17:02:13+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:13.891+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:02:21+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:21.074+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.0s)
2026-05-25T17:02:21+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:21.665+00:00 [hooks/workspace] Hook "thread-archive-reset" has HOOK.md but no handler file in /home/henrymascot/.openclaw/hooks/thread-archive-reset
2026-05-25T17:02:21+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:21.692+00:00 [hooks:loader] Loading workspace hook code into the gateway process. Workspace hooks are trusted local code.
2026-05-25T17:02:21+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:21.697+00:00 [hooks] loaded 1 internal hook handler
2026-05-25T17:02:22+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:22.087+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:02:22+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:22.166+00:00 [discord] [default] starting provider
2026-05-25T17:02:32+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:32.161+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:02:32+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:32.176+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:02:32+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:32.180+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:02:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:33.117+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:02:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:33.181+00:00 [gateway] ready
2026-05-25T17:02:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:33.376+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:02:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:33.985+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:02:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:33.995+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:02:34+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:34.014+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:02:34+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:34.017+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:02:34+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:02:34.222+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:04:06+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:06.922+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=115s eventLoopDelayP99Ms=91536.5 eventLoopDelayMaxMs=91536.5 eventLoopUtilization=1 cpuCoreRatio=1.072 active=1 waiting=0 queued=0 phase=sidecars.session-locks recentPhases=sidecars.main-session-recovery:17ms,post-attach.update-check:3ms,sidecars.restart-sentinel:524ms,post-attach.update-sentinel:495ms,sidecars.acp.identity-reconcile:781ms,post-ready.maintenance:9ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=94s)]
2026-05-25T17:04:07+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:07.207+00:00 [main-session-restart-recovery] marked 1 interrupted main session(s) from stale transcript locks
2026-05-25T17:04:09+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:09.085+00:00 [main-session-restart-recovery] marked interrupted main session failed: agent:main:telegram:direct:855505513 (transcript tail is not resumable)
2026-05-25T17:04:09+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:09.090+00:00 [main-session-restart-recovery] main-session restart recovery complete: recovered=0 failed=1 skipped=0
2026-05-25T17:04:43+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:43.983+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=131s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T17:04:43+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:43.995+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=131s action=release_lane aborted=false drained=true released=0
2026-05-25T17:04:43+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:43.998+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T17:04:44+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:04:44.010+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:05:12+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:05:12.976+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:05:13+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:05:13.861+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:08:27+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:08:27.607+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, hooks.internal.entries.context-injector.enabled)
2026-05-25T17:08:33+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:08:33.565+00:00 [reload] config hot reload applied (hooks.internal.entries.context-injector.enabled)
2026-05-25T17:09:00+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:09:00.364+00:00 [gateway] signal SIGTERM received
2026-05-25T17:09:00+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:09:00.393+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:09:06+0000 ada-gateway openclaw-gateway-with-startup-context[3434022]: 2026-05-25T17:09:06.259+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T17:09:38+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:38.285+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:09:45+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:45.716+00:00 [gateway] http server listening (17 plugins: a2a-gateway, acpx, browser, codex, discord, discord-thread-title-hook, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.4s)
2026-05-25T17:09:46+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:46.383+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:09:46+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:46.478+00:00 [discord] [default] starting provider
2026-05-25T17:09:58+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:58.522+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:09:59+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:59.388+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:09:59+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:59.391+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:09:59+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:59.483+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:09:59+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:59.548+00:00 [gateway] ready
2026-05-25T17:09:59+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:09:59.736+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:10:00+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:10:00.269+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:10:00+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:10:00.279+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:10:00+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:10:00.287+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:10:00+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:10:00.306+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:10:00+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:10:00.309+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:11:25+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:11:25.529+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=109s eventLoopDelayP99Ms=10670.3 eventLoopDelayMaxMs=10670.3 eventLoopUtilization=1 cpuCoreRatio=1.075 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:461ms,post-attach.update-sentinel:435ms,sidecars.acp.identity-reconcile:704ms,sidecars.session-locks:708ms,post-ready.maintenance:10ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=86s)]
2026-05-25T17:11:58+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:11:58.040+00:00 [plugins] discord-thread-title-hook: Discord Gateway listener started
2026-05-25T17:12:23+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:12:23.851+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:12:24+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:12:24.380+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:13:43+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:43.398+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T17:13:49+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:49.967+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.501+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.509+00:00 [reload] config hot reload applied (plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.515+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.587+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.597+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.612+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:13:50+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:13:50.617+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:14:05+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:14:05.342+00:00 [gateway] signal SIGTERM received
2026-05-25T17:14:05+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:14:05.373+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:14:11+0000 ada-gateway openclaw-gateway-with-startup-context[3437749]: 2026-05-25T17:14:11.525+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T17:14:35+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:35.407+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:14:42+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:42.716+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.3s)
2026-05-25T17:14:43+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:43.366+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:14:43+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:43.452+00:00 [discord] [default] starting provider
2026-05-25T17:14:53+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:53.699+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:14:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:54.529+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:14:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:54.532+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:14:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:54.619+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:14:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:54.693+00:00 [gateway] ready
2026-05-25T17:14:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:54.891+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:14:55+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:55.395+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:14:55+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:55.402+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:14:55+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:55.421+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:14:55+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:14:55.424+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:16:21+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:16:21.069+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=107s eventLoopDelayP99Ms=84355.8 eventLoopDelayMaxMs=84355.8 eventLoopUtilization=1 cpuCoreRatio=1.073 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:436ms,post-attach.update-sentinel:409ms,sidecars.acp.identity-reconcile:654ms,sidecars.session-locks:662ms,post-ready.maintenance:13ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=87s)]
2026-05-25T17:16:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:16:54.962+00:00 [diagnostic] stuck session: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 state=processing age=121s queueDepth=1 reason=queued_work_without_active_run classification=stale_session_state recovery=checking
2026-05-25T17:16:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:16:54.975+00:00 [diagnostic] stuck session recovery: sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 age=121s action=release_lane aborted=false drained=true released=0
2026-05-25T17:16:54+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:16:54.979+00:00 [diagnostic] stuck session recovery outcome: status=released action=release_lane sessionId=unknown sessionKey=agent:main:telegram:direct:855505513 lane=session:agent:main:telegram:direct:855505513 released=0
2026-05-25T17:17:21+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:17:21.651+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:17:22+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:17:22.192+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:22:39+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:22:39.016+00:00 [gateway] signal SIGTERM received
2026-05-25T17:22:39+0000 ada-gateway openclaw-gateway-with-startup-context[3439409]: 2026-05-25T17:22:39.045+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:23:08+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:08.069+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:23:15+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:15.402+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.4s)
2026-05-25T17:23:16+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:16.076+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:23:16+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:16.171+00:00 [discord] [default] starting provider
2026-05-25T17:23:26+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:26.501+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:23:26+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:26.517+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:23:26+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:26.521+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:23:27+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:27.413+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:23:27+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:27.477+00:00 [gateway] ready
2026-05-25T17:23:27+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:27.658+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:23:28+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:28.170+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:23:28+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:28.178+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:23:28+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:28.197+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:23:28+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:23:28.200+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:24:53+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:24:53.458+00:00 [diagnostic] liveness warning: reasons=event_loop_delay,event_loop_utilization,cpu interval=107s eventLoopDelayP99Ms=84020.3 eventLoopDelayMaxMs=84020.3 eventLoopUtilization=1 cpuCoreRatio=1.074 active=1 waiting=0 queued=0 recentPhases=post-attach.update-check:3ms,sidecars.restart-sentinel:441ms,post-attach.update-sentinel:414ms,sidecars.acp.identity-reconcile:667ms,sidecars.session-locks:667ms,post-ready.maintenance:18ms work=[active=agent:main:telegram:direct:855505513(processing,q=1,age=86s)]
2026-05-25T17:25:50+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:25:50.691+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:25:51+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:25:51.221+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:26:06+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:26:06.745+00:00 [gateway] signal SIGTERM received
2026-05-25T17:26:06+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:26:06.772+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:26:10+0000 ada-gateway openclaw-gateway-with-startup-context[3443115]: 2026-05-25T17:26:10.950+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=openai/gpt-5.5 candidate=openai/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.5 detail=codex app-server client closed before turn completed
2026-05-25T17:26:35+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:35.487+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:42.701+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.9s)
2026-05-25T17:26:42+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:42.980+00:00 [gateway] signal SIGTERM received
2026-05-25T17:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:43.007+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:43.382+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:26:43+0000 ada-gateway openclaw-gateway-with-startup-context[3444300]: 2026-05-25T17:26:43.471+00:00 [discord] [default] starting provider
2026-05-25T17:26:58+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:26:58.474+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:27:05+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:05.476+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.7s)
2026-05-25T17:27:06+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:06.123+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:27:06+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:06.221+00:00 [discord] [default] starting provider
2026-05-25T17:27:15+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:15.861+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:27:16+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:16.797+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:27:16+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:16.800+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:27:16+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:16.890+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:27:16+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:16.953+00:00 [gateway] ready
2026-05-25T17:27:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:17.128+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:27:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:17.294+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:27:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:17.302+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:27:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:17.319+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:27:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:17.322+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:27:30+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:30.644+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:27:31+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:27:31.261+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:28:31+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:28:31.427+00:00 [exec] elevated command systemctl --user show openclaw-gateway -p MainPID,ActiveEn...enclaw-config|gateway ready|channels resolved' | tail -220
2026-05-25T17:28:43+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:28:43.769+00:00 [exec] elevated command grep -RIn "app.get.*health\|/health\|status.*live\|livenes...npm-global/lib/node_modules/openclaw/dist/*.js | head -200
2026-05-25T17:30:41+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:30:41.701+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T17:38:52+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:38:52.850+00:00 [exec] elevated command rg -n "createGatewayEventLoopHealthMonitor|createReadiness...lobal/lib/node_modules/openclaw/dist -g '*.js' | head -240
2026-05-25T17:40:27+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:40:27.035+00:00 [exec] elevated command openclaw config get agents.defaults.maxConcurrent agents.d...led plugins.entries.discord-thread-title-hook.enabled 2>&1
2026-05-25T17:41:07+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:41:07.114+00:00 [exec] elevated command ps -eo pid,ppid,pcpu,pmem,etimes,comm,args --sort=-pcpu | ...fig)|openclaw-hooks|hooks relay|config' | head -80 || true
2026-05-25T17:42:42+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:42:42.946+00:00 [exec] elevated command rg -n "DISABLE_CODEX|NATIVE_HOOK_RELAY|disable.*hook|nativ...odules/openclaw/dist/side-question-BfgUG48b.js | head -140
2026-05-25T17:42:59+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:42:59.536+00:00 [exec] elevated command rg -n "function createCodexNativeHookRelay|OPENCLAW_DISABL...al/lib/node_modules/openclaw/dist/vision-tools-BYhyEHun.js
2026-05-25T17:44:08+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: OUT=output/mc693-openclaw-gateway-overlo...restart.txt"
2026-05-25T17:44:08+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: rm -f /tmp/oc-health.$$ /tmp/oc-health.err.$$
2026-05-25T17:44:08+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:44:08.047+00:00 [gateway] signal SIGTERM received
2026-05-25T17:44:08+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:44:08.068+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:44:17+0000 ada-gateway openclaw-gateway-with-startup-context[3444547]: 2026-05-25T17:44:17.081+00:00 [exec] elevated command ps -eo pid,ppid,pcpu,pmem,etimes,comm,args --sort=-pcpu | ...claw-hooks|openclaw-config|hooks relay' | head -80 || true
2026-05-25T17:44:35+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:35.565+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:44:42+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:42.840+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.1s)
2026-05-25T17:44:43+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:43.489+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:44:43+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:43.583+00:00 [discord] [default] starting provider
2026-05-25T17:44:53+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:53.097+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:44:53+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:53.488+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:44:53+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:53.492+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.027+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.089+00:00 [gateway] ready
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.267+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.946+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.956+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.980+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:44:54+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:44:54.983+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:45:08+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:45:08.012+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:45:08+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:45:08.584+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:45:13+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: OUT=output/mc693-openclaw-gateway-overlo...e "$OUT/post-restart-state-$(date -u +%Y%m%dT%H%M%SZ).txt"
2026-05-25T17:45:22+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:45:22.597+00:00 [exec] elevated command pgrep -af 'openclaw (hooks|config)|openclaw-hooks|openclaw...-p MainPID --value --no-pager)/cmdline | tr '\0' ' '; echo
2026-05-25T17:45:22+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:45:22.599+00:00 exec: elevated command bash scripts/health/openclaw-gateway-overload-monitor.sh |...e
2026-05-25T17:46:03+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:46:03.391+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57292 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:47:56+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:47:56.040+00:00 [gateway-tool] gateway tool: restart requested (delayMs=default, reason=Apply MC #693 hotfix: truthful health patch + reduced agent concurrency after gateway overload incident.)
2026-05-25T17:48:06+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: rm -f /tmp/oc-health-after.$$ /tmp/oc-health-after.err.$$
2026-05-25T17:50:12+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:12.518+00:00 [tools] message failed: Cross-context messaging denied: action=send target provider "discord" while bound to "telegram". raw_params={"action":"send","channel":"discord","target":"1472210772422557748","message":"MC #693 smoke test: Ada gateway Discord send path is alive after overload hotfix. Tiny robot flare, ignore. 🔧"}
2026-05-25T17:50:13+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:13.253+00:00 [ws] ⇄ res ✗ message.action 222ms errorCode=UNAVAILABLE errorMessage=Error: Discord channel id is required (use channel:<id>). channel=discord error=Error: Discord channel id is required (use channel:<id>). conn=fcb05249…b6ca id=65d4f7d3…4c8b
2026-05-25T17:50:13+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:13.310+00:00 [tools] message failed: Error: Discord channel id is required (use channel:<id>). raw_params={"action":"read","channel":"discord","target":"1472210772422557748","limit":5}
2026-05-25T17:50:24+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:24.180+00:00 [tools] message failed: Error: Telegram send failed: bot is not a member of the chat, was blocked, or was kicked (chat_id=-1001004347112). Telegram API said: Call to 'sendMessage' failed! (403: Forbidden: bot is not a member of the channel chat). Fix: Add the bot to the channel/group, or ensure it has not been removed/blocked/kicked by the user. Input was: "telegram:@channel:1472210772422557700". raw_params={"action":"send","target":"channel:1472210772422557748","message":"MC #693 smoke test: Ada gateway Discord send path is alive after overload hotfix. Tiny robot flare, ignore. 🔧","accountId":"default"}
2026-05-25T17:50:29+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:29.378+00:00 [tools] message failed: Cross-context messaging denied: action=send target provider "discord" while bound to "telegram". raw_params={"action":"send","channel":"discord","target":"channel:1472210772422557748","message":"MC #693 smoke test: Ada gateway Discord send path is alive after overload hotfix. Tiny robot flare, ignore. 🔧","accountId":"default"}
2026-05-25T17:50:30+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:50:30.253+00:00 [ws] ⇄ res ✓ message.action 623ms channel=discord conn=74c9b50c…4c14 id=56feb480…5268
2026-05-25T17:51:28+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:28.573+00:00 [telegram] [diag] Telegram reconnect drain: entry 72cc9cff-7c94-42f3-b356-521de15b636e is already being recovered
2026-05-25T17:51:28+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:28.637+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57296 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:51:35+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:35.321+00:00 [agent/embedded] [trace:embedded-run] prep stages: runId=40ea0be3-fa37-4b8d-a551-fd09a2e80106 sessionId=e7d3a1a0-6050-4094-a8b2-fe4ece56a4ee phase=stream-ready totalMs=8998 stages=workspace-sandbox:7ms@7ms,skills:0ms@7ms,core-plugin-tools:2169ms@2176ms,bootstrap-context:210ms@2386ms,bundle-tools:6282ms@8668ms,system-prompt:15ms@8683ms,session-resource-loader:204ms@8887ms,agent-session:5ms@8892ms,stream-setup:106ms@8998ms
2026-05-25T17:51:51+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:51.562+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57298 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:51:58+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:58.002+00:00 [gateway] signal SIGUSR1 received
2026-05-25T17:51:58+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:58.023+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T17:51:58+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:58.089+00:00 [shutdown] started: gateway restarting
2026-05-25T17:52:23+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:52:23.125+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=azure-openai-responses/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.4 detail=Gateway is draining for restart; new tasks are not accepted
2026-05-25T17:52:23+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:52:23.648+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T17:52:34+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 1.
2026-05-25T17:52:48+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:52:48.259+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:52:55+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:52:55.373+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.8s)
2026-05-25T17:52:56+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:52:56.028+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:52:56+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:52:56.116+00:00 [discord] [default] starting provider
2026-05-25T17:53:05+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:05.632+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.510+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.513+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.546+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.610+00:00 [gateway] ready
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.801+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.933+00:00 [gateway] signal SIGTERM received
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.950+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:53:07+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:07.325+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:53:07+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:07.332+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:53:07+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:07.350+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:53:07+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:07.353+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:53:21+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:21.728+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:53:28+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:28.736+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.7s)
2026-05-25T17:53:29+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:29.376+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:53:29+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:29.466+00:00 [discord] [default] starting provider
2026-05-25T17:53:38+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:38.960+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:53:39+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:39.784+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:53:39+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:39.787+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:53:39+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:39.878+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:53:39+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:39.942+00:00 [gateway] ready
2026-05-25T17:53:40+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:40.134+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:53:40+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:40.794+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:53:40+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:40.803+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:53:40+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:40.827+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:53:40+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:40.831+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:53:48+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:48.388+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57302 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:53:55+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:55.850+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:53:56+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:56.378+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:54:16+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:54:16.419+00:00 [exec] elevated command printf '== config ==\n'; openclaw config get agents.defaul...k|voice|SIG|restart|health|qmd|memory|gateway' | tail -220
2026-05-25T17:54:50+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:54:50.096+00:00 [exec] elevated command printf 'health '; curl -sS --max-time 5 http://127.0.0.1:1...w-gateway-overload-monitor/latest.json 2>/dev/null || true
2026-05-25T17:55:10+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:10.018+00:00 [plugins] qmd-fast-memory-rag: agent=main mode=fts elapsedMs=88 hit=yes source=custom-1-main/2026-05-25-chat-transcript-discord-a157f2c9.md
2026-05-25T17:55:19+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:19.558+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57306 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:31+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:31.974+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57307 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:32+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:32.734+00:00 [ws] ⇄ res ✓ message.action 461ms channel=discord conn=ce054400…aad3 id=2524113e…8a58
2026-05-25T17:55:32+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:32.953+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57308 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:33+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:33.762+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57309 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:44+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:44.812+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57310 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:51+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:51.938+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57311 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:55:58+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:55:58.316+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57312 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:56:07+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:56:07.458+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57313 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:56:17+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:56:17.463+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57314 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:56:33+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:56:33.283+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57316 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:56:43+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:56:43.515+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57317 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:56:51+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:56:51.141+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57318 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:57:04+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:04.325+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57319 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:57:18+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: printf '\...ized|channels resolved|voice: joining' | tail -120 || true
2026-05-25T17:57:18+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:18.746+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57320 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:57:36+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: cp scripts/health/openclaw-gateway-overl...e
2026-05-25T17:57:36+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:36.813+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57321 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:57:45+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:45.890+00:00 [exec] elevated command grep -n "discord_connectivity\|recent_gateway" -C 3 scripts/health/openclaw-gateway-overload-monitor.sh
2026-05-25T17:57:46+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:46.060+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57322 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: cp scripts/health/openclaw-gateway-overl...e
2026-05-25T17:57:54+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:57:54.390+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57323 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:58:04+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:58:04.343+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57324 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:58:12+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:58:12.360+00:00 [telegram] outbound send ok accountId=default chatId=855505513 messageId=57325 operation=sendMessage deliveryKind=text chunkCount=1
2026-05-25T17:58:16+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:58:16.396+00:00 [gateway] signal SIGTERM received
2026-05-25T17:58:16+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:58:16.418+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:58:34+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:34.386+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T17:58:41+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:41.585+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 14.0s)
2026-05-25T17:58:42+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:42.243+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T17:58:42+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:42.333+00:00 [discord] [default] starting provider
2026-05-25T17:58:51+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:51.819+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.040+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.045+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.279+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.337+00:00 [gateway] ready
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.517+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.911+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.919+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.935+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T17:58:52+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:52.938+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T17:58:59+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:59.044+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T17:58:59+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T17:58:59.561+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T18:03:21+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T18:03:21.725+00:00 [discord] gateway: Gateway websocket closed: 1000
2026-05-25T18:03:53+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T18:03:53.701+00:00 [gateway] signal SIGTERM received
2026-05-25T18:03:53+0000 ada-gateway openclaw-gateway-with-startup-context[3452443]: 2026-05-25T18:03:53.738+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T18:04:35+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:35.030+00:00 [health-monitor] started (interval: 300s, startup-grace: 60s, channel-connect-grace: 120s)
2026-05-25T18:04:42+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:42.157+00:00 [gateway] http server listening (16 plugins: a2a-gateway, acpx, browser, codex, discord, elevenlabs, google-meet, llm-task, lobster, memory-core, openai, pioneer, qmd-fast-memory-rag, talk-voice, telegram, voice-call; 13.8s)
2026-05-25T18:04:42+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:42.811+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T18:04:42+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:42.900+00:00 [discord] [default] starting provider
2026-05-25T18:04:52+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:52.518+00:00 [gateway] startup model warmup timed out after 5000ms; continuing without waiting
2026-05-25T18:04:53+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:53.377+00:00 [discord] [default] Discord bot probe resolved @SuperAda
2026-05-25T18:04:53+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:53.380+00:00 [discord] [default] Discord Message Content Intent is limited; bots under 100 servers can use it without verification.
2026-05-25T18:04:53+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:53.468+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:04:53+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:53.534+00:00 [gateway] ready
2026-05-25T18:04:53+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:53.714+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:04:54+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:54.358+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:04:54+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:54.365+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:04:54+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:54.388+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:04:54+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:04:54.391+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:05:08+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:05:08.432+00:00 [discord] channels resolved: 1471344550210703557/1472210772422557748 (guild:1000x HiM; channel:command-deck), 1471344550210703557/1472210776155754516 (guild:1000x HiM; channel:mail-room), 1471344550210703557/1472210783353176160 (guild:1000x HiM; channel:soteria), 1471344550210703557/1472210794618949743 (guild:1000x HiM; channel:curacel), 1471344550210703557/1472210824251707536 (guild:1000x HiM; channel:medbay), 1471344550210703557/1472210827548430531 (guild:1000x HiM; channel:upgrades) (+31)
2026-05-25T18:05:09+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:05:09.064+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T18:05:40+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: for ...-no-pager | sed -n '/disable-codex-native-hook-relay/,+8p'
2026-05-25T18:06:29+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:29.647+00:00 [tools] gateway failed: gateway config.patch cannot change protected config paths: plugins.entries.context-injector.enabled, plugins.entries.discord-thread-title-hook.enabled, plugins.entries.mission-control-auto.enabled raw_params={"action":"config.patch","raw":"{\"plugins\":{\"entries\":{\"mission-control-auto\":{\"enabled\":true},\"context-injector\":{\"enabled\":true},\"discord-thread-title-hook\":{\"enabled\":true}}}}","note":"Re-enable hooks/plugins disabled during MC #693 containment per Henry after Book fix; voice autojoin handled separately because previous target needs recovery.","timeoutMs":20000}
2026-05-25T18:06:58+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:58.585+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T18:06:58+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:58.957+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:06:58+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:58.970+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.035+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.042+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.058+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.062+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.032+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.385+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.396+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.456+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.464+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.476+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.480+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:20+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:20.280+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T18:07:26+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:26.659+00:00 [plugins] peer.health.start: {"peers":["Scotty","Zora"],"interval_ms":30000}
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.118+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.124+00:00 [reload] config hot reload applied (plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.129+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.379+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.387+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.401+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.406+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:34+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:34.625+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, channels.discord.voice.autoJoin)
2026-05-25T18:07:40+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:40.174+00:00 [reload] config change requires channel reload (discord) — deferring until 2 operation(s), 1 reply(ies), 1 embedded run(s), 1 background task run(s) complete
2026-05-25T18:08:09+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:08:09.213+00:00 [gateway-tool] gateway tool: restart requested (delayMs=default, reason=Apply Henry-requested re-enable of hooks/voice autojoin and native Codex hook relay after MC #693 stabilization.)
2026-05-25T18:08:25+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: OUT=output/mc693-openclaw-gateway-overlo...health-reenable.$$ /tmp/health-reenable.err.$$

```

### qa_report_md

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/qa-report.md`
- sha256: `7b38ec9de4ad861342de498010947383e145918d69ca54fb831b46d943e4533c`
- bytes: `1700`

```text
# OpenClaw gateway overload/backpressure hotfix

## Summary

- Status: **PASS**
- Task: `693`
- Work type: `runtime_config_fix`
- Risk: `high`
- Checked at: `2026-05-25T17:58:04.656245+00:00`
- Manifest: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/evidence.json`
- Machine report: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/qa-report.json`

## Required Receipt Classes

- command
- repeat_run

## Present Receipt Classes

- command
- delivery_receipt
- edge_failure
- file
- repeat_run

## Passing Receipts

- receipt[1] file: file ok (4335 bytes): /home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/final-verification-20260525T175531Z.txt
- receipt[2] file: file ok (1143 bytes): /home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/qa-summary.md
- receipt[3] command: command ok: node --check server.impl-DLesaX3y.js && node --check run-attempt-DI0_-QFr.js && node --check side-question-BfgUG48b.js
- receipt[4] delivery_receipt: delivery message_id present: read-ok:1508512854985277643
- receipt[5] edge_failure: file ok (4335 bytes): /home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/final-verification-20260525T175531Z.txt
- receipt[6] repeat_run: file ok (693 bytes): /home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/repeat-verification-20260525T175643Z.txt
- receipt[7] file: file ok (815 bytes): /home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/monitor-false-positive-fix-20260525T175804Z.txt

## Warnings

- None

## Failures

- None

## Verdict

PASS means all required receipt classes are present and every attached receipt validated.


```

### qa_evidence_json

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/evidence.json`
- sha256: `f98be8c6c3abf5b17998045e85e3ecc1de960e42452b3c9a54d7418466ebfa99`
- bytes: `2966`

```text
{
  "schema": "openclaw.qa.evidence.v1",
  "version": "2026.05.25-v2-human-reports",
  "task_id": "693",
  "title": "OpenClaw gateway overload/backpressure hotfix",
  "work_type": "runtime_config_fix",
  "risk": "high",
  "created_by": "henrymascot",
  "created_at": "2026-05-25T17:56:17.495874+00:00",
  "updated_at": "2026-05-25T17:58:04.544934+00:00",
  "status": "draft",
  "requirements": [
    "command",
    "repeat_run"
  ],
  "receipts": [
    {
      "kind": "file",
      "created_at": "2026-05-25T17:56:17.606258+00:00",
      "path": "output/mc693-openclaw-gateway-overload-hotfix/final-verification-20260525T175531Z.txt",
      "description": "Final service/health/ready/monitor/process verification"
    },
    {
      "kind": "file",
      "created_at": "2026-05-25T17:56:17.716076+00:00",
      "path": "output/mc693-openclaw-gateway-overload-hotfix/qa-summary.md",
      "description": "QA summary"
    },
    {
      "kind": "command",
      "created_at": "2026-05-25T17:56:17.826108+00:00",
      "command": "node --check server.impl-DLesaX3y.js && node --check run-attempt-DI0_-QFr.js && node --check side-question-BfgUG48b.js",
      "exit_code": 0,
      "log": "output/mc693-openclaw-gateway-overload-hotfix/patch-check.txt",
      "description": "node --check server health patch"
    },
    {
      "kind": "delivery_receipt",
      "created_at": "2026-05-25T17:56:17.939123+00:00",
      "channel": "discord",
      "target": "channel:1472210772422557748",
      "message_id": "read-ok:1508512854985277643",
      "description": "Discord read path verified after restart via message tool; latest channel read returned messages."
    },
    {
      "kind": "edge_failure",
      "created_at": "2026-05-25T17:56:18.050130+00:00",
      "path": "output/mc693-openclaw-gateway-overload-hotfix/final-verification-20260525T175531Z.txt",
      "description": "Discord send smoke remains unverified from Telegram-bound context because message tool blocks cross-context Discord send."
    },
    {
      "kind": "repeat_run",
      "created_at": "2026-05-25T17:56:43.606673+00:00",
      "path": "output/mc693-openclaw-gateway-overload-hotfix/repeat-verification-20260525T175643Z.txt",
      "description": "Repeat health/ready/process verification after restart"
    },
    {
      "kind": "file",
      "created_at": "2026-05-25T17:58:04.544567+00:00",
      "path": "output/mc693-openclaw-gateway-overload-hotfix/monitor-false-positive-fix-20260525T175804Z.txt",
      "description": "Monitor false-positive fix evidence: healthy gateway no longer pages for normal startup/restart window"
    }
  ],
  "notes": [
    {
      "created_at": "2026-05-25T17:56:18.157189+00:00",
      "text": "Current health and readiness returned 200 with ok/ready true and eventLoop degraded=false; monitor still reports old restart/Discord degraded log entries during rolling window, but no current event-loop starvation and no hook/config workers."
    }
  ]
}

```

### final_verification

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/final-verification-20260525T175531Z.txt`
- sha256: `614d18a8710d771d7e3213a82fcc4427003da452a78b9348f5a89755b6dac71e`
- bytes: `4335`

```text
timestamp=2026-05-25T17:55:31+00:00
== service ==
MainPID=3451040
NRestarts=0
ActiveState=active
SubState=running
ActiveEnterTimestamp=Mon 2026-05-25 17:53:07 UTC
== health ==
HTTP/1.1 200 OK
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Permissions-Policy: camera=(), microphone=(self), geolocation=()
Content-Type: application/json; charset=utf-8
Cache-Control: no-store
Date: Mon, 25 May 2026 17:55:31 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 225

{"ok":true,"status":"live","ready":true,"degraded":false,"failing":[],"uptimeMs":130540,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":5707,"delayP99Ms":32,"delayMaxMs":58.9,"utilization":0.099,"cpuCoreRatio":0.125}}
== ready ==
HTTP/1.1 200 OK
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Permissions-Policy: camera=(), microphone=(self), geolocation=()
Content-Type: application/json; charset=utf-8
Cache-Control: no-store
Date: Mon, 25 May 2026 17:55:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 182

{"ready":true,"failing":[],"uptimeMs":130967,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":5707,"delayP99Ms":32,"delayMaxMs":58.9,"utilization":0.099,"cpuCoreRatio":0.125}}
== monitor before run ==
{
  "checkedAt": "2026-05-25T17:55:26+00:00",
  "service": "openclaw-gateway.service",
  "serviceState": "active",
  "mainPid": 3451040,
  "health": "",
  "gatewayCpuPercent": 54.3,
  "gatewayMemPercent": 3.5,
  "reasons": [
    "discord_connectivity_degraded_log",
    "recent_gateway_restart_or_forced_drain"
  ],
  "actions": [],
  "ok": false
}

== run monitor ==
2026-05-25T17:55:32+00:00 ALERT_SUPPRESSED cooldown reasons=discord_connectivity_degraded_log;recent_gateway_restart_or_forced_drain
== monitor after run ==
{
  "checkedAt": "2026-05-25T17:55:32+00:00",
  "service": "openclaw-gateway.service",
  "serviceState": "active",
  "mainPid": 3451040,
  "health": "{\"ok\":true,\"status\":\"live\",\"ready\":true,\"degraded\":false,\"failing\":[],\"uptimeMs\":131244,\"eventLoop\":{\"degraded\":false,\"reasons\":[],\"intervalMs\":5707,\"delayP99Ms\":32,\"delayMaxMs\":58.9,\"utilization\":0.099,\"cpuCoreRatio\":0.125}}",
  "gatewayCpuPercent": 52.6,
  "gatewayMemPercent": 3.5,
  "reasons": [
    "discord_connectivity_degraded_log",
    "recent_gateway_restart_or_forced_drain"
  ],
  "actions": [],
  "ok": false
}

== process ==
    PID %CPU %MEM ELAPSED STAT COMMAND
3451040 52.6  3.5     145 Rsl  openclaw
== hook/config workers ==
== recent event-loop/stuck/discord warnings ==
2026-05-25T17:51:58+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:58.023+00:00 [gateway] received SIGUSR1; restarting
2026-05-25T17:51:58+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:51:58.089+00:00 [shutdown] started: gateway restarting
2026-05-25T17:52:23+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:52:23.125+00:00 [model-fallback/decision] model fallback decision: decision=candidate_failed requested=azure-openai-responses/gpt-5.5 candidate=azure-openai-responses/gpt-5.5 reason=unknown next=azure-openai-responses/gpt-5.4 detail=Gateway is draining for restart; new tasks are not accepted
2026-05-25T17:52:23+0000 ada-gateway openclaw-gateway-with-startup-context[3448599]: 2026-05-25T17:52:23.648+00:00 [gateway] restart mode: full process restart (supervisor restart)
2026-05-25T17:52:34+0000 ada-gateway systemd[1671]: openclaw-gateway.service: Scheduled restart job, restart counter is at 1.
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.933+00:00 [gateway] signal SIGTERM received
2026-05-25T17:53:06+0000 ada-gateway openclaw-gateway-with-startup-context[3450847]: 2026-05-25T17:53:06.950+00:00 [gateway] received SIGTERM; shutting down
2026-05-25T17:53:56+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:53:56.378+00:00 [discord] client initialized as 1457708441677332592; awaiting gateway readiness
2026-05-25T17:54:16+0000 ada-gateway openclaw-gateway-with-startup-context[3451040]: 2026-05-25T17:54:16.419+00:00 [exec] elevated command printf '== config ==\n'; openclaw config get agents.defaul...k|voice|SIG|restart|health|qmd|memory|gateway' | tail -220

```

### repeat_verification

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/repeat-verification-20260525T175643Z.txt`
- sha256: `77d609987503ebdf96a5bfd0d84b8be9a7f8455d10f2ce740db9f80556f6a105`
- bytes: `693`

```text
timestamp=2026-05-25T17:56:43+00:00
service:
MainPID=3451040
NRestarts=0
ActiveState=active
SubState=running
ActiveEnterTimestamp=Mon 2026-05-25 17:53:07 UTC
health:
{"ok":true,"status":"live","ready":true,"degraded":false,"failing":[],"uptimeMs":202042,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":1826,"delayP99Ms":46.3,"delayMaxMs":79.9,"utilization":0.439,"cpuCoreRatio":0.609}}ready:
{"ready":true,"failing":[],"uptimeMs":202218,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":1826,"delayP99Ms":46.3,"delayMaxMs":79.9,"utilization":0.439,"cpuCoreRatio":0.609}}process:
    PID %CPU %MEM ELAPSED STAT COMMAND
3451040 45.7  2.6     216 Ssl  openclaw
hook/config workers:

```

### monitor_false_positive_fix

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/monitor-false-positive-fix-20260525T175804Z.txt`
- sha256: `640b175c8e680ee0bb158dd74422cbcbebb0c7b0df5bb0c10a5825cf63fc9fb8`
- bytes: `815`

```text
timestamp=2026-05-25T17:58:04+00:00
change: removed normal Discord startup 'awaiting gateway readiness' from degraded matcher; suppress controlled-restart reason when current health is ok/degraded=false.
bash -n:
ok
monitor run:
2026-05-25T17:58:04+00:00 OK openclaw gateway overload monitor
latest:
{
  "checkedAt": "2026-05-25T17:58:04+00:00",
  "service": "openclaw-gateway.service",
  "serviceState": "active",
  "mainPid": 3451040,
  "health": "{\"ok\":true,\"status\":\"live\",\"ready\":true,\"degraded\":false,\"failing\":[],\"uptimeMs\":282871,\"eventLoop\":{\"degraded\":false,\"reasons\":[],\"intervalMs\":9693,\"delayP99Ms\":32.1,\"delayMaxMs\":85.1,\"utilization\":0.116,\"cpuCoreRatio\":0.17}}",
  "gatewayCpuPercent": 39.9,
  "gatewayMemPercent": 2.6,
  "reasons": [],
  "actions": [],
  "ok": true
}

```

### post_reenable_verify

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/post-reenable-verify-20260525T180825Z.txt`
- sha256: `6158a35585a065a391d61ac96e658c7d980c8317d617318f48651de8c8c8d824`
- bytes: `6256`

```text
timestamp=2026-05-25T18:08:26+00:00
MainPID=3454082
NRestarts=0
ActiveState=active
SubState=running
ActiveEnterTimestamp=Mon 2026-05-25 18:04:20 UTC
health:
{"ok":true,"status":"live","ready":true,"degraded":false,"failing":[],"uptimeMs":231352,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":25240,"delayP99Ms":90,"delayMaxMs":99.7,"utilization":0.192,"cpuCoreRatio":0.237}}health_err:
ready:
{"ready":true,"failing":[],"uptimeMs":231640,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":25240,"delayP99Ms":90,"delayMaxMs":99.7,"utilization":0.192,"cpuCoreRatio":0.237}}values:
plugins.entries.mission-control-auto.enabled=true
plugins.entries.context-injector.enabled=true
plugins.entries.discord-thread-title-hook.enabled=true
channels.discord.voice.autoJoin=[
  {
    "guildId": "1471344550210703557",
    "channelId": "1471344552047673478"
  }
]
systemd native relay env:
process:
    PID %CPU %MEM ELAPSED STAT COMMAND
3454082 43.9  2.5     268 Ssl  openclaw
recent logs:
2026-05-25T18:06:29+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:29.647+00:00 [tools] gateway failed: gateway config.patch cannot change protected config paths: plugins.entries.context-injector.enabled, plugins.entries.discord-thread-title-hook.enabled, plugins.entries.mission-control-auto.enabled raw_params={"action":"config.patch","raw":"{\"plugins\":{\"entries\":{\"mission-control-auto\":{\"enabled\":true},\"context-injector\":{\"enabled\":true},\"discord-thread-title-hook\":{\"enabled\":true}}}}","note":"Re-enable hooks/plugins disabled during MC #693 containment per Henry after Book fix; voice autojoin handled separately because previous target needs recovery.","timeoutMs":20000}
2026-05-25T18:06:58+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:58.957+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:06:58+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:58.970+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.035+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.042+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.058+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:06:59+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:06:59.062+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.385+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.396+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.456+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.464+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.476+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:07:12+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:12.480+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:20+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:20.280+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.118+00:00 [plugins] embedded acpx runtime backend ready
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.124+00:00 [reload] config hot reload applied (plugins.entries.discord-thread-title-hook.enabled)
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.129+00:00 [plugins] [voice-call] Webhook server listening on http://127.0.0.1:3334/voice/webhook
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.379+00:00 [voice-call] Tailscale funnel active: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.387+00:00 [plugins] [voice-call] Realtime voice provider: openai
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.401+00:00 [plugins] [voice-call] Runtime initialized
2026-05-25T18:07:27+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:27.406+00:00 [plugins] [voice-call] Webhook URL: https://ada-gateway.tail032b4d.ts.net/voice/webhook
2026-05-25T18:07:34+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:34.625+00:00 [reload] config change detected; evaluating reload (meta.lastTouchedAt, channels.discord.voice.autoJoin)
2026-05-25T18:07:40+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:07:40.174+00:00 [reload] config change requires channel reload (discord) — deferring until 2 operation(s), 1 reply(ies), 1 embedded run(s), 1 background task run(s) complete
2026-05-25T18:08:09+0000 ada-gateway openclaw-gateway-with-startup-context[3454082]: 2026-05-25T18:08:09.213+00:00 [gateway-tool] gateway tool: restart requested (delayMs=default, reason=Apply Henry-requested re-enable of hooks/voice autojoin and native Codex hook relay after MC #693 stabilization.)

```

### current_after_reenable

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/current-after-reenable-20260525T181630Z.txt`
- sha256: `2e03b48f2153d84418c8a2e838c56fc83b74e8d80846be2569b3b4401fbab53f`
- bytes: `1684`

```text
timestamp=2026-05-25T18:16:30+00:00
service:
MainPID=3457843
NRestarts=1
ActiveState=active
SubState=running
ActiveEnterTimestamp=Mon 2026-05-25 18:15:15 UTC
health:
{"ok":true,"status":"live","ready":true,"degraded":false,"failing":[],"uptimeMs":61759,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":14784,"delayP99Ms":23.3,"delayMaxMs":99.4,"utilization":0.11,"cpuCoreRatio":0.216}}ready:
{"ready":true,"failing":[],"uptimeMs":61954,"eventLoop":{"degraded":false,"reasons":[],"intervalMs":14784,"delayP99Ms":23.3,"delayMaxMs":99.4,"utilization":0.11,"cpuCoreRatio":0.216}}monitor:
2026-05-25T18:16:31+00:00 ALERT status=telegram_alert_sent reasons=discord_connectivity_degraded_log actions=
{
  "checkedAt": "2026-05-25T18:16:31+00:00",
  "service": "openclaw-gateway.service",
  "serviceState": "active",
  "mainPid": 3457843,
  "health": "{\"ok\":true,\"status\":\"live\",\"ready\":true,\"degraded\":false,\"failing\":[],\"uptimeMs\":61992,\"eventLoop\":{\"degraded\":false,\"reasons\":[],\"intervalMs\":14784,\"delayP99Ms\":23.3,\"delayMaxMs\":99.4,\"utilization\":0.11,\"cpuCoreRatio\":0.216}}",
  "gatewayCpuPercent": 76.6,
  "gatewayMemPercent": 2.3,
  "reasons": [
    "discord_connectivity_degraded_log"
  ],
  "actions": [],
  "ok": false,
  "alertStatus": "telegram_alert_sent"
}
config-values:
plugins.entries.mission-control-auto.enabled=true
plugins.entries.context-injector.enabled=true
plugins.entries.discord-thread-title-hook.enabled=true
channels.discord.voice.autoJoin=[
  {
    "guildId": "1471344550210703557",
    "channelId": "1471344552047673478"
  }
]
agents.defaults.maxConcurrent=1
agents.defaults.subagents.maxConcurrent=4
native-hook-relay-env:

```

### reenable_containment

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/reenable-containment-20260525T180640Z.txt`
- sha256: `4f6e11b00f0ed039383136824354513da823af576e76ca473329f840b82853a9`
- bytes: `7900`

```text
timestamp=2026-05-25T18:06:40+00:00
Re-enabling containment switches per Henry.
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated plugins.entries.mission-control-auto.enabled. Restart the gateway to apply.
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.mission-control-auto: plugin not found:               │
│    mission-control-auto (stale config entry ignored; remove it from      │
│    plugins config)                                                       │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated plugins.entries.context-injector.enabled. Restart the gateway to apply.
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.mission-control-auto: plugin not found:               │
│    mission-control-auto (stale config entry ignored; remove it from      │
│    plugins config)                                                       │
│  - plugins.entries.context-injector: plugin not found: context-injector  │
│    (stale config entry ignored; remove it from plugins config)           │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated plugins.entries.discord-thread-title-hook.enabled. Restart the gateway to apply.
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.mission-control-auto: plugin not found:               │
│    mission-control-auto (stale config entry ignored; remove it from      │
│    plugins config)                                                       │
│  - plugins.entries.context-injector: plugin not found: context-injector  │
│    (stale config entry ignored; remove it from plugins config)           │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated channels.discord.voice.autoJoin. Restart the gateway to apply.
moved /home/henrymascot/.config/systemd/user/openclaw-gateway.service.d/20-disable-codex-native-hook-relay.conf to output/mc693-openclaw-gateway-overload-hotfix/20-disable-codex-native-hook-relay.conf.disabled-20260525T180640Z
post-config values:
plugins.entries.mission-control-auto.enabled=true
plugins.entries.context-injector.enabled=true
plugins.entries.discord-thread-title-hook.enabled=true
channels.discord.voice.autoJoin=[
  {
    "guildId": "1471344550210703557",
    "channelId": "1471344552047673478"
  }
]

```

### concurrency_config_set

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/concurrency-config-set.txt`
- sha256: `e811234a1a8c2ff74620469f8af4a7523c3da70571942dddee4ae63b6069e78e`
- bytes: `3322`

```text
timestamp=2026-05-25T17:47:07+00:00
schema_lookup=ok; gateway config.patch blocked protected paths; using first-class openclaw config set
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated agents.defaults.maxConcurrent. Restart the gateway to apply.
│
◇  Config warnings ────────────────────────────────────────────────────────╮
│                                                                          │
│  - plugins.entries.a2a-gateway: plugin a2a-gateway: duplicate plugin id  │
│    resolved by explicit config-selected plugin; global plugin will be    │
│    overridden by config plugin                                           │
│    (/home/henrymascot/clawd/plugins/a2a-gateway-source/dist/index.js)    │
│  - plugins.entries.slack: plugin not installed: slack — install the      │
│    official external plugin with: openclaw plugins install               │
│    @openclaw/slack                                                       │
│  - plugins.entries.active-memory: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│  - plugins.entries.lossless-claw: plugin disabled (disabled in config)   │
│    but config is present                                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
Updated agents.defaults.subagents.maxConcurrent. Restart the gateway to apply.
agents.defaults.maxConcurrent=1
agents.defaults.subagents.maxConcurrent=4

```

### patch_check

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/patch-check.txt`
- sha256: `27774d9b4b80e397d93d85b9e4b7e374c35c8e193c59ab6d2721f0e5225b1748`
- bytes: `37`

```text
patched_ok 2026-05-25T17:43:40+00:00

```

### prepatch_state

- path: `/home/henrymascot/clawd/output/mc693-openclaw-gateway-overload-hotfix/prepatch-state.txt`
- sha256: `de693b8a3ad1bd41d3ace439e38ad53f47e65f4174f939d29ca939a96a433ccb`
- bytes: `149`

```text
timestamp=2026-05-25T17:42:28+00:00
MainPID=3444547
NRestarts=0
ActiveState=active
SubState=running
ActiveEnterTimestamp=Mon 2026-05-25 17:26:44 UTC

```
