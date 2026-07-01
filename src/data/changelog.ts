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
    "version": "2026.6.11",
    "date": "2026.6.11",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611",
    "features": [
      {
        "title": "Fixes newer Google Chat direct messages sometimes being treated like group...",
        "description": "Fixes newer Google Chat direct messages sometimes being treated like group conversations, so they reach the correct one-to-one chat while Space and group-chat messages keep their existing routing. [#58993](https://github.com/openclaw/openclaw/pull/58993) Thanks @starhappysh, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/58993"
      },
      {
        "title": "Feishu voice replies from OpenClaw now show their duration in the chat bubb...",
        "description": "Feishu voice replies from OpenClaw now show their duration in the chat bubble, so recipients can see how long the audio is before playing it. [#89172](https://github.com/openclaw/openclaw/pull/89172) Related [#53798](https://github.com/openclaw/openclaw/issues/53798). Thanks @areslp, @fxz26284407, @kinrocw.",
        "href": "https://github.com/openclaw/openclaw/issues/89172"
      },
      {
        "title": "Discord and Telegram replies and mirrored chat history stay tied to the int...",
        "description": "Discord and Telegram replies and mirrored chat history stay tied to the intended conversation more consistently, including across repeated Telegram replies and session changes. [#89911](https://github.com/openclaw/openclaw/pull/89911) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89911"
      },
      {
        "title": "Background image, video, and music results now return to the chat that requ...",
        "description": "Background image, video, and music results now return to the chat that requested them when the task starts without a full conversation target, instead of appearing to fail after creation or being sent to the wrong peer as the session moves. [#89949](https://github.com/openclaw/openclaw/pull/89949) Related [#86034](https://github.com/openclaw/openclaw/issues/86034). Thanks @tianxiaochannel-oss88, @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/89949"
      },
      {
        "title": "Telegram answers now stay attached to the user's current question when they...",
        "description": "Telegram answers now stay attached to the user's current question when they quote an earlier bot message, while quotes of other people's messages still reply to the selected quote. [#90475](https://github.com/openclaw/openclaw/pull/90475) Thanks @moeedahmed.",
        "href": "https://github.com/openclaw/openclaw/issues/90475"
      },
      {
        "title": "QQBot group admins can choose how broadly slash commands are available, and...",
        "description": "QQBot group admins can choose how broadly slash commands are available, and private-only commands now direct users to a private chat instead of being exposed or silently ignored in groups. [#92154](https://github.com/openclaw/openclaw/pull/92154) Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/92154"
      },
      {
        "title": "Heartbeat checks using reasoning-capable models now show the assistant's in...",
        "description": "Heartbeat checks using reasoning-capable models now show the assistant's intended reply instead of exposing internal reasoning in Telegram, WhatsApp, and other channels, while opt-in Thinking messages still work. [#92356](https://github.com/openclaw/openclaw/pull/92356) Related [#92260](https://github.com/openclaw/openclaw/issues/92260). Thanks @jmpei, @tangtaizong666, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92356"
      },
      {
        "title": "Telegram progress-mode chats now clear an old progress bubble before newer...",
        "description": "Telegram progress-mode chats now clear an old progress bubble before newer tool output or artifacts appear, keeping the conversation in a clean, readable order. [#93002](https://github.com/openclaw/openclaw/pull/93002) Related [#90753](https://github.com/openclaw/openclaw/issues/90753). Thanks @shadow-enthusiast, @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/93002"
      },
      {
        "title": "iMessage command-and-link messages now stay together as one OpenClaw turn w...",
        "description": "iMessage command-and-link messages now stay together as one OpenClaw turn when delayed link previews arrive, while unrelated quick messages remain separate for users who enabled same-sender DM coalescing. [#93143](https://github.com/openclaw/openclaw/pull/93143) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/93143"
      },
      {
        "title": "Successful Discord replies sent through the message tool no longer trigger...",
        "description": "Successful Discord replies sent through the message tool no longer trigger a misleading failure warning in affected `message_tool_only` source-channel turns. [#94072](https://github.com/openclaw/openclaw/pull/94072) Related [#93875](https://github.com/openclaw/openclaw/issues/93875). Thanks @chenyangjun-xy, @hoyanhan, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94072"
      },
      {
        "title": "WhatsApp group conversations now preserve the right message and group conte...",
        "description": "WhatsApp group conversations now preserve the right message and group context more reliably during retries, reconnects, and group changes. [#94338](https://github.com/openclaw/openclaw/pull/94338) Related [#7433](https://github.com/openclaw/openclaw/issues/7433). Thanks @mcaxtr, @octopuslabs-fl, @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/issues/94338"
      },
      {
        "title": "Fixes OpenClaw sometimes replying to its own delayed iMessage echoes when s...",
        "description": "Fixes OpenClaw sometimes replying to its own delayed iMessage echoes when stray leading characters keep the sent message from being recognized. [#94442](https://github.com/openclaw/openclaw/pull/94442) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/94442"
      },
      {
        "title": "Telegram webhook users can keep receiving DMs and group messages through br...",
        "description": "Telegram webhook users can keep receiving DMs and group messages through brief channel restarts, configuration reloads, and recovery cycles without temporary message blackouts. [#94506](https://github.com/openclaw/openclaw/pull/94506) Related [#90254](https://github.com/openclaw/openclaw/issues/90254). Thanks @obviyus, @travellingsoldier85, @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/issues/94506"
      },
      {
        "title": "Matrix E2EE gateways can stay online during long-running use instead of gra...",
        "description": "Matrix E2EE gateways can stay online during long-running use instead of gradually consuming memory until a crash takes channels and in-flight work down. [#94942](https://github.com/openclaw/openclaw/pull/94942) Related [#90455](https://github.com/openclaw/openclaw/issues/90455). Thanks @xzh-icenter, @yar-sh.",
        "href": "https://github.com/openclaw/openclaw/issues/94942"
      },
      {
        "title": "Telegram users now see the intended native reaction instead of leaked instr...",
        "description": "Telegram users now see the intended native reaction instead of leaked instructions or a dropped reaction-only reply, with success recorded only after Telegram accepts it. [#94977](https://github.com/openclaw/openclaw/pull/94977) Related [#71140](https://github.com/openclaw/openclaw/issues/71140). Thanks @cuttingwater, @hugenshen.",
        "href": "https://github.com/openclaw/openclaw/issues/94977"
      },
      {
        "title": "Telegram progress updates for commands, searches, updates, and API activity...",
        "description": "Telegram progress updates for commands, searches, updates, and API activity now stay readable instead of exposing noisy HTML or code-style rows, with plain-text fallback when Telegram cannot parse the formatting. [#95007](https://github.com/openclaw/openclaw/pull/95007) Related [#95002](https://github.com/openclaw/openclaw/issues/95002).",
        "href": "https://github.com/openclaw/openclaw/issues/95007"
      },
      {
        "title": "Telegram conversations continued in WebChat now show one assistant reply pe...",
        "description": "Telegram conversations continued in WebChat now show one assistant reply per turn and keep later replies with the active conversation instead of duplicating answers or sending them back to Telegram. [#95069](https://github.com/openclaw/openclaw/pull/95069) Related [#94930](https://github.com/openclaw/openclaw/issues/94930). Thanks @heichaowo.",
        "href": "https://github.com/openclaw/openclaw/issues/95069"
      },
      {
        "title": "Google Chat now hides misleading internal failure banners when a tool resul...",
        "description": "Google Chat now hides misleading internal failure banners when a tool result is harmless, leaving users with the completed answer while normal assistant text remains unchanged. [#95084](https://github.com/openclaw/openclaw/pull/95084) Related [#90684](https://github.com/openclaw/openclaw/issues/90684). Thanks @jailbirt, @studentzhou-svg.",
        "href": "https://github.com/openclaw/openclaw/issues/95084"
      },
      {
        "title": "Bound multi-agent channel conversations now load the workspace files for th...",
        "description": "Bound multi-agent channel conversations now load the workspace files for the configured agent instead of the default agent, though previously misfiled conversations may start fresh in the corrected agent store. [#95118](https://github.com/openclaw/openclaw/pull/95118) Related [#92903](https://github.com/openclaw/openclaw/issues/92903). Thanks @849261680, @axjing.",
        "href": "https://github.com/openclaw/openclaw/issues/95118"
      },
      {
        "title": "People sharing an OpenClaw gateway can now assign different models to indiv...",
        "description": "People sharing an OpenClaw gateway can now assign different models to individual direct-message contacts across supported chat channels, while existing group and wildcard model choices keep working as before. [#95120](https://github.com/openclaw/openclaw/pull/95120) Related [#53638](https://github.com/openclaw/openclaw/issues/53638). Thanks @gandalf-at-lerian, @thomaszta, @xydigit-zt.",
        "href": "https://github.com/openclaw/openclaw/issues/95120"
      },
      {
        "title": "Telegram now shows that OpenClaw is still working during short initial prev...",
        "description": "Telegram now shows that OpenClaw is still working during short initial previews or progress-mode replies instead of leaving the chat silent until the final message arrives. [#95183](https://github.com/openclaw/openclaw/pull/95183) Related [#95004](https://github.com/openclaw/openclaw/issues/95004). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/95183"
      },
      {
        "title": "Matrix users and operators now get a clear failure when a homeserver sends...",
        "description": "Matrix users and operators now get a clear failure when a homeserver sends an oversized or stalled response, instead of OpenClaw continuing to buffer it and risking unbounded memory use. [#95240](https://github.com/openclaw/openclaw/pull/95240) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95240"
      },
      {
        "title": "Fixes delayed or missing Telegram and other queued channel replies in Kuber...",
        "description": "Fixes delayed or missing Telegram and other queued channel replies in Kubernetes-style deployments with many injected environment variables, where opening the queue database could stall the gateway. [#95278](https://github.com/openclaw/openclaw/pull/95278) Related [#94571](https://github.com/openclaw/openclaw/issues/94571). Thanks @kaka-srp.",
        "href": "https://github.com/openclaw/openclaw/issues/95278"
      },
      {
        "title": "Telegram chats recover after one stuck message times out, allowing later me...",
        "description": "Telegram chats recover after one stuck message times out, allowing later messages in the same chat or topic to reach the agent without restarting the gateway. [#95299](https://github.com/openclaw/openclaw/pull/95299) Related [#95248](https://github.com/openclaw/openclaw/issues/95248). Thanks @kriegerbangerz-ship-it, @mikasa0818, @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/95299"
      },
      {
        "title": "When people switch between Telegram and another OpenClaw client in a shared...",
        "description": "When people switch between Telegram and another OpenClaw client in a shared direct conversation, short Telegram replies now follow the latest conversation instead of responding to an older, unrelated Telegram proposal. [#95390](https://github.com/openclaw/openclaw/pull/95390) Related [#95378](https://github.com/openclaw/openclaw/issues/95378). Thanks @maiduy708, @mikasa0818, @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/95390"
      },
      {
        "title": "Fixes completed assistant messages appearing twice in Telegram, Discord, Sl...",
        "description": "Fixes completed assistant messages appearing twice in Telegram, Discord, Slack, and other streamed chats after a multi-message reply. [#95432](https://github.com/openclaw/openclaw/pull/95432) Thanks @vincentkoc, @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/95432"
      },
      {
        "title": "WhatsApp replies now stay attached to the direct or group message being ans...",
        "description": "WhatsApp replies now stay attached to the direct or group message being answered instead of appearing as a separate message that loses the conversation context. [#95483](https://github.com/openclaw/openclaw/pull/95483) Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/95483"
      },
      {
        "title": "Telegram rich-message replies now keep paragraphs, bullets, and status line...",
        "description": "Telegram rich-message replies now keep paragraphs, bullets, and status lines separated instead of collapsing multi-line content into one run-on block, with no configuration change required. [#95532](https://github.com/openclaw/openclaw/pull/95532) Related [#95409](https://github.com/openclaw/openclaw/issues/95409). Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/95532"
      },
      {
        "title": "Mattermost operators who enable native slash commands can now use `/oc_queu...",
        "description": "Mattermost operators who enable native slash commands can now use `/oc_queue` directly in Mattermost to tune active-run queuing, including its mode, debounce timing, cap, and drop handling. [#95546](https://github.com/openclaw/openclaw/pull/95546) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/95546"
      },
      {
        "title": "Previously allowed messages keep reaching named accounts after legacy multi...",
        "description": "Previously allowed messages keep reaching named accounts after legacy multi-account channel upgrades, with inherited DM and group access rules preserved across Mattermost, Discord, Slack, Telegram, Signal, WhatsApp, iMessage, and IRC. [#95550](https://github.com/openclaw/openclaw/pull/95550) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/95550"
      },
      {
        "title": "Mattermost users can keep talking in a thread without mentioning the bot ag...",
        "description": "Mattermost users can keep talking in a thread without mentioning the bot again after it replies, and that participation survives gateway restarts until the thread has been idle for seven days. [#95552](https://github.com/openclaw/openclaw/pull/95552) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/95552"
      },
      {
        "title": "Inbound Telegram messages now reach the configured OpenClaw session promptl...",
        "description": "Inbound Telegram messages now reach the configured OpenClaw session promptly instead of sitting unanswered until the next polling interval, a gateway restart, or manual intervention. [#95577](https://github.com/openclaw/openclaw/pull/95577) Related [#86957](https://github.com/openclaw/openclaw/issues/86957). Thanks @freidrich-goldenflow, @liuwqgit.",
        "href": "https://github.com/openclaw/openclaw/issues/95577"
      },
      {
        "title": "QQBot users now receive complete markdown tables when valid separators use...",
        "description": "QQBot users now receive complete markdown tables when valid separators use one or two dashes per column, instead of losing the header and all but the final row. [#95637](https://github.com/openclaw/openclaw/pull/95637) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/95637"
      },
      {
        "title": "Synology Chat users can now receive agent replies that take more than 120 s...",
        "description": "Synology Chat users can now receive agent replies that take more than 120 seconds when the configured core timeout allows it, instead of having the channel reject them early. [#95707](https://github.com/openclaw/openclaw/pull/95707) Thanks @sahibzada-allahyar, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95707"
      },
      {
        "title": "Telegram forum-topic cron jobs now keep separately configured failure alert...",
        "description": "Telegram forum-topic cron jobs now keep separately configured failure alerts going to their intended destination, even when the main announcement uses a topic in the same chat. [#95794](https://github.com/openclaw/openclaw/pull/95794) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95794"
      },
      {
        "title": "Fixes WhatsApp group replies that could quote an older OpenClaw message ins...",
        "description": "Fixes WhatsApp group replies that could quote an older OpenClaw message instead of the user's triggering message, so final answers stay attached to the intended message when a reply target is available and avoid pointing back to stale bot context when it is not. [#95914](https://github.com/openclaw/openclaw/pull/95914) Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/95914"
      },
      {
        "title": "WhatsApp users can approve or deny prompts by reaction without the prompt s...",
        "description": "WhatsApp users can approve or deny prompts by reaction without the prompt staying stuck when WhatsApp identifies the same direct chat differently, while group approvals remain tied to the correct group and person. [#95935](https://github.com/openclaw/openclaw/pull/95935) Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/95935"
      },
      {
        "title": "Final reply processing now uses less CPU when OpenClaw checks whether block...",
        "description": "Final reply processing now uses less CPU when OpenClaw checks whether block text was already sent, without changing which reply reaches the chat or how duplicate text is suppressed. [#96087](https://github.com/openclaw/openclaw/pull/96087) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96087"
      },
      {
        "title": "Exec approval results from external channel plugins now return to the chann...",
        "description": "Exec approval results from external channel plugins now return to the channel or DM where the command started instead of falling back to WebChat or seeming to disappear after approval. [#96140](https://github.com/openclaw/openclaw/pull/96140) Related [#96103](https://github.com/openclaw/openclaw/issues/96103). Thanks @lansenger-pm, @vincentkoc, @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/96140"
      },
      {
        "title": "WhatsApp's final answer now stays quoted to the follow-up message a user ju...",
        "description": "WhatsApp's final answer now stays quoted to the follow-up message a user just sent when replying to an older OpenClaw message, instead of arriving unquoted or pointing back to the older bot reply. [#96220](https://github.com/openclaw/openclaw/pull/96220) Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/96220"
      },
      {
        "title": "Nextcloud Talk bots now ignore ordinary file-share and lifecycle events wit...",
        "description": "Nextcloud Talk bots now ignore ordinary file-share and lifecycle events without logging them as bot errors or risking disabled delivery, while malformed chat payloads still return an error. [#96243](https://github.com/openclaw/openclaw/pull/96243) Related [#81566](https://github.com/openclaw/openclaw/issues/81566). Thanks @arkyu2077, @rafaelmgbh, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96243"
      },
      {
        "title": "Replies and message-tool delivery in Mattermost channels now use channel an...",
        "description": "Replies and message-tool delivery in Mattermost channels now use channel and thread guidance because the agent identifies those conversations as channels rather than group chats, while existing group-chat behavior remains unchanged. [#96244](https://github.com/openclaw/openclaw/pull/96244) Related [#95645](https://github.com/openclaw/openclaw/issues/95645). Thanks @arkyu2077, @iloveleon19, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96244"
      },
      {
        "title": "MCP channel integrations now keep conversation lists, message reads, event...",
        "description": "MCP channel integrations now keep conversation lists, message reads, event polls, and waits within predictable bounds even when a client requests excessive limits or timeouts. [a39e548](https://github.com/openclaw/openclaw/commit/a39e548ede228aa1978bf9d509613cbed6db0c99) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Long-running streamed auto-replies are less likely to stop early or abort i...",
        "description": "Long-running streamed auto-replies are less likely to stop early or abort inconsistently when an unusually large timeout is configured. [6c85b90](https://github.com/openclaw/openclaw/commit/6c85b90469f94955ef00c1609e1f1d6fd2cf4ca8) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Channel progress now shows a repeated status when work genuinely returns to...",
        "description": "Channel progress now shows a repeated status when work genuinely returns to it after another update, instead of hiding useful context as a duplicate. [8a75c4d](https://github.com/openclaw/openclaw/commit/8a75c4dd5f3e625a22a7a08c6e1f368798c48111)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Completed channel replies no longer gain late progress notices, preventing...",
        "description": "Completed channel replies no longer gain late progress notices, preventing stale status text from appearing after the answer is finished. [a594d2c](https://github.com/openclaw/openclaw/commit/a594d2ce73257326b7ab78adb3c4643245ec9431) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "During streaming channel replies, progress messages now keep showing the la...",
        "description": "During streaming channel replies, progress messages now keep showing the latest state instead of getting stuck on an older update. [e114001](https://github.com/openclaw/openclaw/commit/e114001ccafa83b8b366e095a9d7748dfc50c082) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Matrix forced resets now handle unavailable secret storage without a runtim...",
        "description": "Matrix forced resets now handle unavailable secret storage without a runtime error, treating recovery access as unavailable so the reset path can continue safely. [5c5a8a4](https://github.com/openclaw/openclaw/commit/5c5a8a49d76954b53fefc2463bc7b1d6b960e8fc) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Configured channels now remain visible in `openclaw channels status --json`...",
        "description": "Configured channels now remain visible in `openclaw channels status --json`, while scheduled announcements reject stale entries that have no active plugin to deliver them. [a641c0d](https://github.com/openclaw/openclaw/commit/a641c0d560fd15373e462829facf15fd6a466aeb)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Discord voice conversations now keep back-to-back assistant responses movin...",
        "description": "Discord voice conversations now keep back-to-back assistant responses moving, so a queued reply plays after the previous audio stream closes instead of remaining stuck. [88b64e4](https://github.com/openclaw/openclaw/commit/88b64e4b869e696d99de7417fb52425e9ed67cbf) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Discord progress previews are less likely to stop before the final edits wh...",
        "description": "Discord progress previews are less likely to stop before the final edits when an agent response has already started arriving. [86ea382](https://github.com/openclaw/openclaw/commit/86ea382121b00e73af4b4c329d0a2447592e4071)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Chats no longer show stray `NO_REPLY` text when the assistant means to stay...",
        "description": "Chats no longer show stray `NO_REPLY` text when the assistant means to stay silent, while legitimate media responses still arrive without the placeholder. [96c6f80](https://github.com/openclaw/openclaw/commit/96c6f8022c2420826830b11f4353ce855ab2ac5c)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Telegram streaming replies now show each progress heading once, keeping too...",
        "description": "Telegram streaming replies now show each progress heading once, keeping tool and search updates easier to scan. [013e33c](https://github.com/openclaw/openclaw/commit/013e33c6d3672a980550912442bb1ac5505918aa) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Telegram messages that get stuck after a long-running task, crash, or gatew...",
        "description": "Telegram messages that get stuck after a long-running task, crash, or gateway restart now resume processing automatically, so later messages no longer wait silently or require operators to repair the queue by hand. [#97543](https://github.com/openclaw/openclaw/pull/97543) Thanks @romneyda, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/97543"
      },
      {
        "title": "MiniMax text-to-speech and voice notes are less likely to fail because Open...",
        "description": "MiniMax text-to-speech and voice notes are less likely to fail because OpenClaw now explicitly requests the audio format it can decode instead of relying on provider defaults. [#73079](https://github.com/openclaw/openclaw/pull/73079) Thanks @efe-arv.",
        "href": "https://github.com/openclaw/openclaw/issues/73079"
      },
      {
        "title": "Gateway operators can again see provider, model, request status, and timing...",
        "description": "Gateway operators can again see provider, model, request status, and timing details in normal logs, making model-routing and transport problems easier to diagnose without enabling extra debug logging. [#89648](https://github.com/openclaw/openclaw/pull/89648) Related [#89300](https://github.com/openclaw/openclaw/issues/89300). Thanks @enominera, @xiaobao-k8s.",
        "href": "https://github.com/openclaw/openclaw/issues/89648"
      },
      {
        "title": "Models reached through Google, Mistral, OpenAI Responses, Azure OpenAI Resp...",
        "description": "Models reached through Google, Mistral, OpenAI Responses, Azure OpenAI Responses, and ChatGPT/Codex Responses now receive clean system instructions without OpenClaw's internal cache-boundary marker leaking into the prompt. [#89716](https://github.com/openclaw/openclaw/pull/89716) Thanks @enominera, @masatohoshino.",
        "href": "https://github.com/openclaw/openclaw/issues/89716"
      },
      {
        "title": "Cron tool calls using Gemini models through OpenAI-compatible providers now...",
        "description": "Cron tool calls using Gemini models through OpenAI-compatible providers now run without nullable fields triggering provider schema rejections. [#91559](https://github.com/openclaw/openclaw/pull/91559) Related [#91542](https://github.com/openclaw/openclaw/issues/91542). Thanks @pick-cat, @qiukui666.",
        "href": "https://github.com/openclaw/openclaw/issues/91559"
      },
      {
        "title": "Provider-qualified model IDs now honor their configured agent runtime polic...",
        "description": "Provider-qualified model IDs now honor their configured agent runtime policies and CLI aliases instead of unexpectedly falling back to OpenClaw's default runtime. [#91724](https://github.com/openclaw/openclaw/pull/91724) Thanks @vincentkoc, @yu-xin-c.",
        "href": "https://github.com/openclaw/openclaw/issues/91724"
      },
      {
        "title": "The chat `/models` list and other plugin-aware model or provider selection...",
        "description": "The chat `/models` list and other plugin-aware model or provider selection paths now respond quickly instead of stalling for seconds and consuming a CPU core through repeated setup scans, while plugin changes still refresh normally. [#93356](https://github.com/openclaw/openclaw/pull/93356) Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/issues/93356"
      },
      {
        "title": "Hosted Ollama Cloud users can keep only the models they explicitly configur...",
        "description": "Hosted Ollama Cloud users can keep only the models they explicitly configured after a restart, without the full shared catalog being added back, while automatic discovery continues for local and self-hosted Ollama servers. [#93956](https://github.com/openclaw/openclaw/pull/93956) Thanks @jason-allen-oneal.",
        "href": "https://github.com/openclaw/openclaw/issues/93956"
      },
      {
        "title": "Cron jobs can now retry or switch to a configured fallback model when a loc...",
        "description": "Cron jobs can now retry or switch to a configured fallback model when a local provider returns the generic `LLM request failed.` error, instead of failing with the fallback unused. [#94062](https://github.com/openclaw/openclaw/pull/94062) Related [#93931](https://github.com/openclaw/openclaw/issues/93931). Thanks @hugenshen.",
        "href": "https://github.com/openclaw/openclaw/issues/94062"
      },
      {
        "title": "Expired provider tokens no longer bury useful operator logs under repeated...",
        "description": "Expired provider tokens no longer bury useful operator logs under repeated fallback warnings, while the first warning and later duplicate summaries remain available for diagnosis. [#94233](https://github.com/openclaw/openclaw/pull/94233) Related [#56979](https://github.com/openclaw/openclaw/issues/56979). Thanks @goutamadwant, @yanan1991.",
        "href": "https://github.com/openclaw/openclaw/issues/94233"
      },
      {
        "title": "Google Gemini 3",
        "description": "Google Gemini 3.5 Flash can now be selected with its full 1,048,576-token context window, avoiding missing-model errors and needless prompt-size rejections. [#94726](https://github.com/openclaw/openclaw/pull/94726) Related [#94723](https://github.com/openclaw/openclaw/issues/94723). Thanks @ajwan8998, @anguslogan01, @kevinat.",
        "href": "https://github.com/openclaw/openclaw/issues/94726"
      },
      {
        "title": "Dashboard child sessions now handle allowed provider-qualified model choice...",
        "description": "Dashboard child sessions now handle allowed provider-qualified model choices consistently and give accurate recovery guidance when saved model state is stale. [#94752](https://github.com/openclaw/openclaw/pull/94752) Related [#94713](https://github.com/openclaw/openclaw/issues/94713). Thanks @gr4via.",
        "href": "https://github.com/openclaw/openclaw/issues/94752"
      },
      {
        "title": "Claude CLI users no longer get promises of completion updates that may neve...",
        "description": "Claude CLI users no longer get promises of completion updates that may never arrive, because OpenClaw now blocks unsupported native background work before it can strand progress. [#95008](https://github.com/openclaw/openclaw/pull/95008) Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/95008"
      },
      {
        "title": "OpenClaw now rejects oversized provider catalog or JSON responses with a cl...",
        "description": "OpenClaw now rejects oversized provider catalog or JSON responses with a clear error before buffering the entire response in memory. [#95218](https://github.com/openclaw/openclaw/pull/95218) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95218"
      },
      {
        "title": "OpenRouter users can now select and run the advertised short DeepSeek V4 mo...",
        "description": "OpenRouter users can now select and run the advertised short DeepSeek V4 model IDs without requests failing with `model_not_found` because OpenClaw sent a duplicated provider prefix. [#95268](https://github.com/openclaw/openclaw/pull/95268) Related [#95198](https://github.com/openclaw/openclaw/issues/95198). Thanks @daniel-alejandro-t, @darren2030.",
        "href": "https://github.com/openclaw/openclaw/issues/95268"
      },
      {
        "title": "With `/reasoning on`, DeepSeek-style OpenAI-compatible models now show the...",
        "description": "With `/reasoning on`, DeepSeek-style OpenAI-compatible models now show the final answer separately from their reasoning instead of folding it into the reasoning block, with no configuration change required. [#95283](https://github.com/openclaw/openclaw/pull/95283) Related [#95280](https://github.com/openclaw/openclaw/issues/95280). Thanks @marvinthebored, @vincentkoc, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/95283"
      },
      {
        "title": "When a Codex subscription reaches its usage limit, OpenClaw now moves to co...",
        "description": "When a Codex subscription reaches its usage limit, OpenClaw now moves to configured fallback models instead of stopping on the failed result, and it does not retry runs that already produced visible output. [#95400](https://github.com/openclaw/openclaw/pull/95400) Thanks @jason-allen-oneal, @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/95400"
      },
      {
        "title": "LM Studio users can now run quantized or multi-variant local models without...",
        "description": "LM Studio users can now run quantized or multi-variant local models without false assistant-turn failures or phantom suffixed model entries caused by mismatched model keys. [#95401](https://github.com/openclaw/openclaw/pull/95401) Thanks @monkeyleet.",
        "href": "https://github.com/openclaw/openclaw/issues/95401"
      },
      {
        "title": "Google-backed embedded-agent runs now stop reading oversized or never-endin...",
        "description": "Google-backed embedded-agent runs now stop reading oversized or never-ending prompt-cache responses before they can exhaust memory or leave the run stalled. [#95417](https://github.com/openclaw/openclaw/pull/95417) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95417"
      },
      {
        "title": "OpenRouter model scans fail safely on oversized or malformed catalogs inste...",
        "description": "OpenRouter model scans fail safely on oversized or malformed catalogs instead of risking excessive memory use that can destabilize OpenClaw. [#95418](https://github.com/openclaw/openclaw/pull/95418) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95418"
      },
      {
        "title": "OpenRouter setups now reject oversized model catalogs before they can exhau...",
        "description": "OpenRouter setups now reject oversized model catalogs before they can exhaust OpenClaw's memory, without caching or immediately refetching the failed response. [#95420](https://github.com/openclaw/openclaw/pull/95420) Thanks @alix-007, @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/95420"
      },
      {
        "title": "Configured fallback models can now answer when Claude CLI runs out of credi...",
        "description": "Configured fallback models can now answer when Claude CLI runs out of credits or hits a generic runner failure, instead of leaving users with the failure message as the final response. [#95508](https://github.com/openclaw/openclaw/pull/95508) Related [#95489](https://github.com/openclaw/openclaw/issues/95489). Thanks @mikasa0818, @riazrahaman, @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/95508"
      },
      {
        "title": "Gemini-backed web searches using `freshness",
        "description": "\"day\"` or `pd` now complete instead of failing with a provider 400 error, while broader freshness choices and explicit date ranges retain stricter filtering. [#95682](https://github.com/openclaw/openclaw/pull/95682) Thanks @sunjae-k, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95682"
      },
      {
        "title": "Follow-up answers from xAI reasoning models such as Grok Composer now prese...",
        "description": "Follow-up answers from xAI reasoning models such as Grok Composer now preserve earlier reasoning context more reliably, even when configurable reasoning effort is unsupported. [#95686](https://github.com/openclaw/openclaw/pull/95686) Thanks @fuller-stack-dev, @geraint0923.",
        "href": "https://github.com/openclaw/openclaw/issues/95686"
      },
      {
        "title": "Vercel AI Gateway users can now run models chosen from the live catalog, in...",
        "description": "Vercel AI Gateway users can now run models chosen from the live catalog, including live-only model IDs that are absent from OpenClaw's bundled list. [#95710](https://github.com/openclaw/openclaw/pull/95710) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95710"
      },
      {
        "title": "Fixes manifest-defined providers turning valid model IDs into broken ones w...",
        "description": "Fixes manifest-defined providers turning valid model IDs into broken ones when `stripPrefixes` entries have stray spaces or different casing, so operators and plugin authors get the intended provider model. [#95744](https://github.com/openclaw/openclaw/pull/95744) Related [#95743](https://github.com/openclaw/openclaw/issues/95743). Thanks @parveshsaini.",
        "href": "https://github.com/openclaw/openclaw/issues/95744"
      },
      {
        "title": "First-run setup now opens the credential prompt for a newly installed exter...",
        "description": "First-run setup now opens the credential prompt for a newly installed external provider instead of appearing to loop and leaving OpenAI selected. [#95792](https://github.com/openclaw/openclaw/pull/95792) Related [#95765](https://github.com/openclaw/openclaw/issues/95765).",
        "href": "https://github.com/openclaw/openclaw/issues/95792"
      },
      {
        "title": "Oversized or stalled provider catalogs now fail quickly with a clear error...",
        "description": "Oversized or stalled provider catalogs now fail quickly with a clear error instead of hanging OpenClaw or consuming unbounded memory, while normal catalogs continue to load. [#95827](https://github.com/openclaw/openclaw/pull/95827) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95827"
      },
      {
        "title": "Xiaomi Token Plan users can now use up to 128K output tokens with `mimo-v2",
        "description": "Xiaomi Token Plan users can now use up to 128K output tokens with `mimo-v2.5` and `mimo-v2.5-pro` instead of being stopped at the outdated 32,000-token limit. [#95934](https://github.com/openclaw/openclaw/pull/95934) Thanks @idootop.",
        "href": "https://github.com/openclaw/openclaw/issues/95934"
      },
      {
        "title": "Tool-heavy model responses can stream with less overhead while repeated too...",
        "description": "Tool-heavy model responses can stream with less overhead while repeated tool-call IDs and encrypted reasoning details stay matched to the correct call across Google and OpenAI-compatible providers. [#95957](https://github.com/openclaw/openclaw/pull/95957) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95957"
      },
      {
        "title": "Token-usage accounting is more reliable for bundled ACPX users because Open...",
        "description": "Token-usage accounting is more reliable for bundled ACPX users because OpenClaw now includes ACPX 0.11.2's persistence fix by default, without a separate package override or manual client update. [#96124](https://github.com/openclaw/openclaw/pull/96124) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96124"
      },
      {
        "title": "Ollama Cloud users can now find and select `glm-5.2",
        "description": "cloud` with its 1,000,000-token context window, reasoning, and tool support even when it is absent from the public model list. [11484f8](https://github.com/openclaw/openclaw/commit/11484f8a1483b7c42aa2971de2d88289fcef7046)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "MiniMax image-understanding requests no longer fail before reaching the pro...",
        "description": "MiniMax image-understanding requests no longer fail before reaching the provider when a timeout is zero, negative, or extremely large; invalid values now use a normal or safe maximum wait. [4b6182e](https://github.com/openclaw/openclaw/commit/4b6182ee2a250005e0c25edfeae4db6ec59b7cb8) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Codex runs now follow the current fast-mode choice instead of carrying over...",
        "description": "Codex runs now follow the current fast-mode choice instead of carrying over an old speed tier, and the status line clearly shows when fast mode is automatic. [77012f9](https://github.com/openclaw/openclaw/commit/77012f9807851c662e064d05097497a25ab13505) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Codex-backed conversations now return to normal routing after automatic fas...",
        "description": "Codex-backed conversations now return to normal routing after automatic fast mode is cleared, preventing later turns or model changes from reusing a stale priority tier. [8afc1f7](https://github.com/openclaw/openclaw/commit/8afc1f770bbef30a4d2d9957ef26a685c508448c)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fallback agent runs now honor each model's configured automatic fast-mode c...",
        "description": "Fallback agent runs now honor each model's configured automatic fast-mode cutoff even when fast mode is overridden for the run, keeping fallback behavior aligned with the selected model policy. [efd3172](https://github.com/openclaw/openclaw/commit/efd3172662ce023eb8d6568b689361536edf06dd)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Live model-switch retries now preserve the original fast-mode cutoff for lo...",
        "description": "Live model-switch retries now preserve the original fast-mode cutoff for long-running sessions, while explicit fast mode avoids misleading automatic-cutoff progress messages. [d990115](https://github.com/openclaw/openclaw/commit/d990115d1972fdf4361884a29bbf8396f33e5cba) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Embedded agent runs now keep automatic fast mode working consistently throu...",
        "description": "Embedded agent runs now keep automatic fast mode working consistently through retries and progress updates without confusing it with a manually selected fast-mode setting. [cf1b6fe](https://github.com/openclaw/openclaw/commit/cf1b6fef4403bee7c206299efc4385a7fcb74375) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fast-mode runs now keep their speed setting through model fallback retries...",
        "description": "Fast-mode runs now keep their speed setting through model fallback retries and show the configured automatic threshold in status, avoiding inconsistent retry behavior and an unhelpful generic label. [aa3797c](https://github.com/openclaw/openclaw/commit/aa3797c8d0d74b4502d24852ce6baa70286f2f06) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Agent replies and scheduled cron runs now handle fast-mode fallback retries...",
        "description": "Agent replies and scheduled cron runs now handle fast-mode fallback retries more reliably, keeping the state needed for the final attempt to finish or report progress correctly. [14e448e](https://github.com/openclaw/openclaw/commit/14e448e0e13db9f194ea16bb98e0f846a67769fd) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Users no longer see a fast-mode reset notice while model fallback attempts...",
        "description": "Users no longer see a fast-mode reset notice while model fallback attempts are still running; it appears only when the run reaches its final fallback attempt. [6eb72a8](https://github.com/openclaw/openclaw/commit/6eb72a830ece3e2b4c6c85e5a9c2b72b59e0dae9)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Users and operators now get clearer handling when a configured live model b...",
        "description": "Users and operators now get clearer handling when a configured live model becomes unavailable because OpenClaw recognizes the provider's \"selected model was not found\" response as a model-not-found failure instead of a generic error. [2405d02](https://github.com/openclaw/openclaw/commit/2405d029d437ee58ab94da800a5b213bc6bf4628) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Qwen and vLLM now preserve existing chat-template settings consistently whe...",
        "description": "Qwen and vLLM now preserve existing chat-template settings consistently when thinking is switched on or off, and provider plugins can use the same tested helper. [2ba9d6e](https://github.com/openclaw/openclaw/commit/2ba9d6eabef9427a950bacc47f077200446cb865) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "OpenAI-compatible proxy providers can handle thinking levels and legacy `re...",
        "description": "OpenAI-compatible proxy providers can handle thinking levels and legacy `reasoning_effort` fields more consistently, with plugin developers and provider maintainers using one documented normalization helper across OpenRouter, Kilocode, and the SDK. [35bafea](https://github.com/openclaw/openclaw/commit/35bafea757fab0386292951a3dc2a2d3514f370e)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Browser and Vite builds can now load the OpenAI ChatGPT Responses provider...",
        "description": "Browser and Vite builds can now load the OpenAI ChatGPT Responses provider without a server-only dependency breaking the bundle, while WebSocket failures still appear normally. [8c8eb86](https://github.com/openclaw/openclaw/commit/8c8eb86fff6e843bd391808ceee249ac8c7f5fa5) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "OpenRouter model scans now accept the same larger valid catalogs as runtime...",
        "description": "OpenRouter model scans now accept the same larger valid catalogs as runtime discovery while still rejecting oversized responses before they can consume unbounded memory. [ad3b2f4](https://github.com/openclaw/openclaw/commit/ad3b2f4b8827cd73b4c1a6c8288569c0966276fe) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "OpenAI Responses users, including affected Bedrock Mantle GPT-5",
        "description": "OpenAI Responses users, including affected Bedrock Mantle GPT-5.x reasoning setups, now get one clean final answer with aligned saved transcripts and replay context instead of dozens of repeated cumulative copies. [#92399](https://github.com/openclaw/openclaw/pull/92399) Related [#91959](https://github.com/openclaw/openclaw/issues/91959). Thanks @amersheeny, @daimingnj, @phoenixyy, @pigfoot.",
        "href": "https://github.com/openclaw/openclaw/issues/92399"
      },
      {
        "title": "Scheduled jobs and isolated sessions using opencode-go models now move stal...",
        "description": "Scheduled jobs and isolated sessions using opencode-go models now move stalled requests into configured timeout or fallback handling instead of hanging for minutes before ending with a generic `LLM request failed` error. [#93965](https://github.com/openclaw/openclaw/pull/93965) Related [#93610](https://github.com/openclaw/openclaw/issues/93610). Thanks @forceconstant, @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/93965"
      },
      {
        "title": "Affected agent conversations using OpenAI Responses can now recover and kee...",
        "description": "Affected agent conversations using OpenAI Responses can now recover and keep replying after a visible channel response leaves their saved history incomplete, instead of every later turn failing before a reply appears. [#84708](https://github.com/openclaw/openclaw/pull/84708) Thanks @anyech.",
        "href": "https://github.com/openclaw/openclaw/issues/84708"
      },
      {
        "title": "When a Codex-backed agent produces unusually large tool output, saved and r...",
        "description": "When a Codex-backed agent produces unusually large tool output, saved and replayed conversations now keep its text within the usual size limit while leaving non-text content unchanged. [#87912](https://github.com/openclaw/openclaw/pull/87912) Thanks @adrianip0204.",
        "href": "https://github.com/openclaw/openclaw/issues/87912"
      },
      {
        "title": "Control UI conversations now stay visible and continue in the same session...",
        "description": "Control UI conversations now stay visible and continue in the same session after a sleep, network drop, or Gateway reconnect instead of disappearing when the next message is sent. [#89017](https://github.com/openclaw/openclaw/pull/89017) Related [#87700](https://github.com/openclaw/openclaw/issues/87700). Thanks @zhangguiping-xydt, @asicoe.",
        "href": "https://github.com/openclaw/openclaw/issues/89017"
      },
      {
        "title": "Bundled Codex and Copilot integrations now keep mirrored chat history and t...",
        "description": "Bundled Codex and Copilot integrations now keep mirrored chat history and transcript updates tied to the correct OpenClaw session as storage evolves, while existing file-backed active transcripts continue working during the migration. [#89518](https://github.com/openclaw/openclaw/pull/89518) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89518"
      },
      {
        "title": "WebChat's current-session status now matches the conversation you are actua...",
        "description": "WebChat's current-session status now matches the conversation you are actually using, so the session identity, thinking level, token context, and cost details no longer come from the fallback `main` session. [#89800](https://github.com/openclaw/openclaw/pull/89800) Related [#89773](https://github.com/openclaw/openclaw/issues/89773). Thanks @killo3967, @sweetcornna.",
        "href": "https://github.com/openclaw/openclaw/issues/89800"
      },
      {
        "title": "Your conversation is less likely to lose its context after you press stop d...",
        "description": "Your conversation is less likely to lose its context after you press stop during automatic compaction because the compaction request is now cancelled too. [#89886](https://github.com/openclaw/openclaw/pull/89886) Related [#89868](https://github.com/openclaw/openclaw/issues/89868). Thanks @lykeion-dev, @openperf, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89886"
      },
      {
        "title": "When cross-agent session access is blocked, OpenClaw now lists all required...",
        "description": "When cross-agent session access is blocked, OpenClaw now lists all required visibility, agent-to-agent, and allow-list settings, helping operators correct policy configuration instead of chasing a nonexistent agent failure. [#90489](https://github.com/openclaw/openclaw/pull/90489) Related [#90443](https://github.com/openclaw/openclaw/issues/90443). Thanks @ramitrkar-hash, @sahibzada-allahyar, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90489"
      },
      {
        "title": "`openclaw memory status` now shows an active light or REM dreaming phase in...",
        "description": "`openclaw memory status` now shows an active light or REM dreaming phase instead of incorrectly reporting `Dreaming: off`, so operators can see that valid memory configurations are enabled. [#93113](https://github.com/openclaw/openclaw/pull/93113) Related [#67868](https://github.com/openclaw/openclaw/issues/67868). Thanks @agentarclab, @mrossit.",
        "href": "https://github.com/openclaw/openclaw/issues/93113"
      },
      {
        "title": "Timed-out QMD memory searches now stop their background work when the agent...",
        "description": "Timed-out QMD memory searches now stop their background work when the agent moves on, preventing abandoned processes from continuing to consume CPU and memory. [#93394](https://github.com/openclaw/openclaw/pull/93394) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93394"
      },
      {
        "title": "Repeated instructions sent after compaction now remain in the conversation,...",
        "description": "Repeated instructions sent after compaction now remain in the conversation, preventing lost turns, orphaned replies, and malformed history that some providers reject. [#94328](https://github.com/openclaw/openclaw/pull/94328) Thanks @vincentkoc, @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/94328"
      },
      {
        "title": "Memory Wiki's Stale Pages report now leaves durable concept and synthesis p...",
        "description": "Memory Wiki's Stale Pages report now leaves durable concept and synthesis pages out of freshness warnings, keeping attention on source and entity pages that may actually need review. [#94369](https://github.com/openclaw/openclaw/pull/94369) Thanks @sunnyshu0925, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94369"
      },
      {
        "title": "Long embedded runs with recent progress are now less likely to be interrupt...",
        "description": "Long embedded runs with recent progress are now less likely to be interrupted by stale-session recovery, while genuinely stalled runs can still be cleared so queued work continues. [#94701](https://github.com/openclaw/openclaw/pull/94701) Thanks @imadal1n, @mrclawfield.",
        "href": "https://github.com/openclaw/openclaw/issues/94701"
      },
      {
        "title": "Ollama memory search now respects a configured smaller embedding dimension...",
        "description": "Ollama memory search now respects a configured smaller embedding dimension and keeps indexes for different dimensions separate, avoiding incompatible vectors being mixed together. [#94811](https://github.com/openclaw/openclaw/pull/94811) Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/issues/94811"
      },
      {
        "title": "Memory searches and targeted refreshes now stay connected to the correct Op...",
        "description": "Memory searches and targeted refreshes now stay connected to the correct OpenClaw session even when transcript filenames change or QMD exports use a different name. [#95087](https://github.com/openclaw/openclaw/pull/95087) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/95087"
      },
      {
        "title": "Long-running conversations with screenshots or other images now keep their...",
        "description": "Long-running conversations with screenshots or other images now keep their continuity more consistently when OpenClaw makes room for new messages, instead of repeatedly filling up without moving the retained conversation forward. [#95128](https://github.com/openclaw/openclaw/pull/95128) Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/95128"
      },
      {
        "title": "Windows users can now run QMD-backed memory indexing and search through con...",
        "description": "Windows users can now run QMD-backed memory indexing and search through configured absolute `memory.qmd.command` paths, including drive-letter and UNC locations, without OpenClaw stripping the path separators before launch. [#95274](https://github.com/openclaw/openclaw/pull/95274) Related [#92302](https://github.com/openclaw/openclaw/issues/92302). Thanks @ardooken, @ly85206559.",
        "href": "https://github.com/openclaw/openclaw/issues/95274"
      },
      {
        "title": "Usage footers selected with `/usage full` or `/usage tokens` now remain vis...",
        "description": "Usage footers selected with `/usage full` or `/usage tokens` now remain visible after daily or idle session rollover, so users do not have to turn them on again. [#95322](https://github.com/openclaw/openclaw/pull/95322) Thanks @litang9.",
        "href": "https://github.com/openclaw/openclaw/issues/95322"
      },
      {
        "title": "Follow-up replies, reactions, threaded messages, and status checks stay wit...",
        "description": "Follow-up replies, reactions, threaded messages, and status checks stay with the chat they belong to after webchat or system activity, while real channel switches still clear outdated routing details. [#95467](https://github.com/openclaw/openclaw/pull/95467) Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/95467"
      },
      {
        "title": "Long-running main conversations now keep their prior context when users ret...",
        "description": "Long-running main conversations now keep their prior context when users return after an overnight or delayed follow-up, rather than silently starting over after an otherwise normal completion. [#95472](https://github.com/openclaw/openclaw/pull/95472) Thanks @xydt-tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/issues/95472"
      },
      {
        "title": "People with large session histories can list, preview, and find sessions wi...",
        "description": "People with large session histories can list, preview, and find sessions without multi-second freezes, while older mixed-case session keys are still migrated at startup. [#95699](https://github.com/openclaw/openclaw/pull/95699) Thanks @jalehman, @jzakirov.",
        "href": "https://github.com/openclaw/openclaw/issues/95699"
      },
      {
        "title": "Fixes delivered replies sometimes being saved to the wrong conversation his...",
        "description": "Fixes delivered replies sometimes being saved to the wrong conversation history, or omitted from it, when operators use a custom or per-agent `session.store`, improving continuity and auditability for the intended session. [#95782](https://github.com/openclaw/openclaw/pull/95782) Related [#95781](https://github.com/openclaw/openclaw/issues/95781). Thanks @youngting520.",
        "href": "https://github.com/openclaw/openclaw/issues/95782"
      },
      {
        "title": "Saved session-memory summaries now leave out raw model tokens, tool-call bl...",
        "description": "Saved session-memory summaries now leave out raw model tokens, tool-call blocks, media placeholders, role tags, and stale `NO_REPLY` markers so future conversations keep useful context. [#95791](https://github.com/openclaw/openclaw/pull/95791) Thanks @sweetsophia, @vincentkoc, @yb0y.",
        "href": "https://github.com/openclaw/openclaw/issues/95791"
      },
      {
        "title": "Long-running OpenAI sessions using Codex/ChatGPT OAuth can now compact with...",
        "description": "Long-running OpenAI sessions using Codex/ChatGPT OAuth can now compact without a separate API key, whether `/compact` is run manually or triggered automatically. [#95831](https://github.com/openclaw/openclaw/pull/95831) Related [#95693](https://github.com/openclaw/openclaw/issues/95693). Thanks @sallyom, @yui-tien.",
        "href": "https://github.com/openclaw/openclaw/issues/95831"
      },
      {
        "title": "Long, tool-heavy sessions now compact oversized conversations instead of ge...",
        "description": "Long, tool-heavy sessions now compact oversized conversations instead of getting stuck when a large tool result appears at the end. [#95860](https://github.com/openclaw/openclaw/pull/95860) Related [#78478](https://github.com/openclaw/openclaw/issues/78478). Thanks @jw8957, @wzhgba, @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/95860"
      },
      {
        "title": "When `memory_search` is unavailable because the Node runtime lacks `node:sq...",
        "description": "When `memory_search` is unavailable because the Node runtime lacks `node:sqlite`, OpenClaw now points users to a compatible runtime instead of sending them through unrelated embedding-provider troubleshooting. [#95916](https://github.com/openclaw/openclaw/pull/95916) Thanks @rrrrrredy, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95916"
      },
      {
        "title": "Developers and operators inspecting a compacted Copilot session now get its...",
        "description": "Developers and operators inspecting a compacted Copilot session now get its summary, before-and-after token counts, and session details instead of an incomplete result. [#96049](https://github.com/openclaw/openclaw/pull/96049) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96049"
      },
      {
        "title": "The `/stop` and abort commands now keep stopping active runs, clearing queu...",
        "description": "The `/stop` and abort commands now keep stopping active runs, clearing queued followups, and ending related subagents promptly even when session keys need canonicalizing or abort metadata cannot be saved. [#96201](https://github.com/openclaw/openclaw/pull/96201) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/96201"
      },
      {
        "title": "Voice Wake upgrades now keep existing trigger phrases and routing rules wor...",
        "description": "Voice Wake upgrades now keep existing trigger phrases and routing rules working as OpenClaw moves them from retired settings files into the shared state database. [bdf81a8](https://github.com/openclaw/openclaw/commit/bdf81a825fa3ef66ad2c535c1eeb0bb4e31b6d1b)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Upgrades from older OpenClaw state layouts now preserve update notification...",
        "description": "Upgrades from older OpenClaw state layouts now preserve update notifications, check throttling, available-version records, and automatic-update attempt history as that state moves into SQLite. [eb00d49](https://github.com/openclaw/openclaw/commit/eb00d499d16feea600fceef92d575fa30f005649) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Plugin-channel conversations keep their intended session more reliably thro...",
        "description": "Plugin-channel conversations keep their intended session more reliably through startup, doctor checks, and state repairs, with older binding records migrated into OpenClaw's shared database. [9f888d9](https://github.com/openclaw/openclaw/commit/9f888d95e082d50380a66db18ee2e32683e688e0)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows memory-backed session syncing now keeps using the intended transcri...",
        "description": "Windows memory-backed session syncing now keeps using the intended transcript file even when path formatting differs. [b3b5b08](https://github.com/openclaw/openclaw/commit/b3b5b08e67a26efd648c7c7d879e5487223cd796) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Embedded agent runs with a missing or blank session key now stay attached t...",
        "description": "Embedded agent runs with a missing or blank session key now stay attached to the intended session instead of being sent through inconsistent session routing. [911f853](https://github.com/openclaw/openclaw/commit/911f853b7fc4d819e2175b001662a01eba30453d) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "When a model guesses the wrong tool name, Tool Search and Code Mode now sho...",
        "description": "When a model guesses the wrong tool name, Tool Search and Code Mode now show how to find and retry the correct tool, reducing the risk that long-running sessions get stuck or lose durable memory during compaction. [#93374](https://github.com/openclaw/openclaw/pull/93374) Related [#92273](https://github.com/openclaw/openclaw/issues/92273). Thanks @mushuiyu886, @poison, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93374"
      },
      {
        "title": "Fixes assistant replies disappearing from webchat, Control UI, Feishu, and...",
        "description": "Fixes assistant replies disappearing from webchat, Control UI, Feishu, and other embedded conversations after compaction, keeping refreshed chats readable and follow-up requests separate. [#95484](https://github.com/openclaw/openclaw/pull/95484) Related [#76729](https://github.com/openclaw/openclaw/issues/76729). Thanks @maweibin, @njuboy11, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95484"
      },
      {
        "title": "OpenClaw memory features now keep active, reset, and deleted transcript cov...",
        "description": "OpenClaw memory features now keep active, reset, and deleted transcript coverage aligned with configured session stores and agent ownership, making dreaming, QMD exports, indexing, and sync less likely to miss or misattribute conversation history. [#96162](https://github.com/openclaw/openclaw/pull/96162) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/96162"
      },
      {
        "title": "Gateway TLS setup now rejects blank certificate or key paths clearly or use...",
        "description": "Gateway TLS setup now rejects blank certificate or key paths clearly or uses OpenClaw's defaults, avoiding confusing startup and certificate-generation failures while preserving valid paths. [#94054](https://github.com/openclaw/openclaw/pull/94054) Thanks @miorbnli.",
        "href": "https://github.com/openclaw/openclaw/issues/94054"
      },
      {
        "title": "Configured plugin policies keep blocking or rewriting sensitive tool calls...",
        "description": "Configured plugin policies keep blocking or rewriting sensitive tool calls after Gateway registry changes, reloads, or later hook initialization instead of being silently skipped. [#94545](https://github.com/openclaw/openclaw/pull/94545) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/94545"
      },
      {
        "title": "Mobile operators with `operator",
        "description": "Mobile operators with `operator.approvals` can now see and resolve chat-triggered exec approvals on the iOS device that started the request, including while the app is open, without relying only on push notifications. [#95175](https://github.com/openclaw/openclaw/pull/95175) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/95175"
      },
      {
        "title": "Control UI users now get the patched DOMPurify release, reducing exposure t...",
        "description": "Control UI users now get the patched DOMPurify release, reducing exposure to the GHSA-cmwh-pvxp-8882 sanitizer vulnerability without changing how the interface behaves. [#95691](https://github.com/openclaw/openclaw/pull/95691) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95691"
      },
      {
        "title": "\"Always allow\" approvals for plugin conversation bindings now carry over fr...",
        "description": "\"Always allow\" approvals for plugin conversation bindings now carry over from the old settings file and are less likely to be lost or overwritten when multiple OpenClaw processes are running. [ae41b00](https://github.com/openclaw/openclaw/commit/ae41b009224b0a8e3a990912503258d4478fb4d0) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Matrix users now see that the active recovery key is required before a forc...",
        "description": "Matrix users now see that the active recovery key is required before a forced cross-signing reset can proceed, preventing a second reset from leaving encryption recovery and room-key backups unusable. [#95720](https://github.com/openclaw/openclaw/pull/95720) Related [#78396](https://github.com/openclaw/openclaw/issues/78396). Thanks @jteddy, @vincentkoc, @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/issues/95720"
      },
      {
        "title": "Managed Slack deployments can now use a central router to send mentions and...",
        "description": "Managed Slack deployments can now use a central router to send mentions and ongoing threads to the right OpenClaw gateway while replies still appear through Slack. [#94707](https://github.com/openclaw/openclaw/pull/94707) Thanks @pash-openai, @sjf-oa.",
        "href": "https://github.com/openclaw/openclaw/issues/94707"
      },
      {
        "title": "Raft External Agent operators can now wake an OpenClaw agent when a workspa...",
        "description": "Raft External Agent operators can now wake an OpenClaw agent when a workspace has pending work through the supported local CLI bridge, with named profiles and checks for missing CLI prerequisites. [#95497](https://github.com/openclaw/openclaw/pull/95497) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95497"
      },
      {
        "title": "When `plugins",
        "description": "When `plugins.allow` uses a channel or package name instead of the real plugin id, startup guidance now identifies the unmatched entry and shows the discovered plugin ids needed to correct the configuration. [#68389](https://github.com/openclaw/openclaw/pull/68389) Related [#68352](https://github.com/openclaw/openclaw/issues/68352). Thanks @aym9999, @jirboy, @lyfuci, @pahuchi-joe, @zmxccxy.",
        "href": "https://github.com/openclaw/openclaw/issues/68389"
      },
      {
        "title": "Plugin trust warnings for first-time or fresh installs now include a ready-...",
        "description": "Plugin trust warnings for first-time or fresh installs now include a ready-to-copy `plugins.allow` example and commands to list or inspect plugin ids, so users can resolve the warning before trusting or reinstalling plugin code. [#78105](https://github.com/openclaw/openclaw/pull/78105) Related [#68780](https://github.com/openclaw/openclaw/issues/68780). Thanks @jirboy, @pahuchi-joe.",
        "href": "https://github.com/openclaw/openclaw/issues/78105"
      },
      {
        "title": "Codex migrations now work with standard global plugin installs because `ope...",
        "description": "Codex migrations now work with standard global plugin installs because `openclaw migrate` can find the installed provider instead of failing with `Unknown migration provider`. [#89612](https://github.com/openclaw/openclaw/pull/89612) Related [#89609](https://github.com/openclaw/openclaw/issues/89609). Thanks @mugabuga, @zerone0x.",
        "href": "https://github.com/openclaw/openclaw/issues/89612"
      },
      {
        "title": "Plugin installs and updates recover from stale OpenClaw-managed dependency...",
        "description": "Plugin installs and updates recover from stale OpenClaw-managed dependency pins instead of failing with `npm EOVERRIDE`, without later synchronization downgrading or removing packages users installed explicitly. [#91786](https://github.com/openclaw/openclaw/pull/91786) Related [#91772](https://github.com/openclaw/openclaw/issues/91772). Thanks @amknight, @mkdelta221.",
        "href": "https://github.com/openclaw/openclaw/issues/91786"
      },
      {
        "title": "Channel plugin developers can now carry native sender and conversation iden...",
        "description": "Channel plugin developers can now carry native sender and conversation identifiers through hooks and selected exec workflows, giving integrations more precise routing without breaking existing sender and chat fields. [#91903](https://github.com/openclaw/openclaw/pull/91903) Thanks @lanzhi-lee, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91903"
      },
      {
        "title": "Plugin discovery now repeats fewer blocking filesystem checks during startu...",
        "description": "Plugin discovery now repeats fewer blocking filesystem checks during startup, reducing avoidable cold-start work for bundled plugin trees, especially on slower Windows filesystems, without changing bundle discovery behavior. [#93919](https://github.com/openclaw/openclaw/pull/93919) Related [#76209](https://github.com/openclaw/openclaw/issues/76209). Thanks @ml12580, @shenhonglong456-ai.",
        "href": "https://github.com/openclaw/openclaw/issues/93919"
      },
      {
        "title": "Plugin Gateway methods now work through `openclaw gateway call` after regis...",
        "description": "Plugin Gateway methods now work through `openclaw gateway call` after registration, so plugin authors can use them from scripts and cron jobs instead of hitting an `unknown method` error. [#94154](https://github.com/openclaw/openclaw/pull/94154) Related [#94127](https://github.com/openclaw/openclaw/issues/94127). Thanks @brycemurray, @pick-cat, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94154"
      },
      {
        "title": "ClawHub skill discovery and install checks are less likely to stall or cras...",
        "description": "ClawHub skill discovery and install checks are less likely to stall or crash OpenClaw because oversized or stalled marketplace responses are now stopped before they can exhaust memory. [#95226](https://github.com/openclaw/openclaw/pull/95226) Thanks @alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/95226"
      },
      {
        "title": "Pinned official plugins no longer stay on an old release when operators fol...",
        "description": "Pinned official plugins no longer stay on an old release when operators follow the repair advice from `openclaw doctor` or deep gateway status after an upgrade. [#95541](https://github.com/openclaw/openclaw/pull/95541) Thanks @ooiuuii, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95541"
      },
      {
        "title": "Managed npm plugin updates are less likely to break work on a running gatew...",
        "description": "Managed npm plugin updates are less likely to break work on a running gateway with missing-module errors, because the older plugin files remain available until a later gateway start cleans them up. [#95589](https://github.com/openclaw/openclaw/pull/95589) Thanks @ooiuuii, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95589"
      },
      {
        "title": "Official plugin cards for supported brands now show recognizable icons in C...",
        "description": "Official plugin cards for supported brands now show recognizable icons in ClawHub and other catalogs, and plugin authors can provide marketplace artwork through the documented manifest field. [#95845](https://github.com/openclaw/openclaw/pull/95845) Thanks @patrick-erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/95845"
      },
      {
        "title": "Official plugin icons in ClawHub and other catalogs are no longer forced in...",
        "description": "Official plugin icons in ClawHub and other catalogs are no longer forced into the same hard-coded color, allowing Simple Icons to use its default artwork instead. [#95987](https://github.com/openclaw/openclaw/pull/95987) Thanks @patrick-erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/95987"
      },
      {
        "title": "Docker users now have an official `openclaw/openclaw` Docker Hub mirror alo...",
        "description": "Docker users now have an official `openclaw/openclaw` Docker Hub mirror alongside GHCR, with versioned beta releases kept from moving the stable `latest` and `main` aliases. [#97122](https://github.com/openclaw/openclaw/pull/97122) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/97122"
      },
      {
        "title": "Git-based OpenClaw installs now use the repository's pinned pnpm version ev...",
        "description": "Git-based OpenClaw installs now use the repository's pinned pnpm version even when another global pnpm or surrounding project package manager is present, so setup commands no longer run against the wrong package-manager environment. [bd74a62](https://github.com/openclaw/openclaw/commit/bd74a62118aa4774706359d9494116ded8c1f6e3) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "ClawHub skill-card and update requests now complete or time out predictably...",
        "description": "ClawHub skill-card and update requests now complete or time out predictably even when they receive an unusually large timeout value. [8cd0c11](https://github.com/openclaw/openclaw/commit/8cd0c11227f6f4096d089cd6108d6f2ae31252b7) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows users can complete source installs without a llama",
        "description": "Windows users can complete source installs without a llama.cpp setup step blocking or slowing them, and the installer restores their existing shell setting afterward. [ea9065b](https://github.com/openclaw/openclaw/commit/ea9065bc68dd4ff94495b85a7dcb4491cf41b67a) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "More official channel, provider, and web-search plugins can now be installe...",
        "description": "More official channel, provider, and web-search plugins can now be installed or repaired through normal external package catalogs while still being recognized from their existing credentials. [#95683](https://github.com/openclaw/openclaw/pull/95683) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95683"
      },
      {
        "title": "Telegram reply chains keep cached replies attached after context changes in...",
        "description": "Telegram reply chains keep cached replies attached after context changes instead of failing when those cached replies are reused. [#82909](https://github.com/openclaw/openclaw/pull/82909) Thanks @lidge-jun.",
        "href": "https://github.com/openclaw/openclaw/issues/82909"
      },
      {
        "title": "Fixes Discord dropping an entire long reply with fenced code blocks when a...",
        "description": "Fixes Discord dropping an entire long reply with fenced code blocks when a closing code fence lands near the 2,000-character message limit. [#95661](https://github.com/openclaw/openclaw/pull/95661) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/95661"
      },
      {
        "title": "Slack operators can now store tokens and signing secrets as supported Secre...",
        "description": "Slack operators can now store tokens and signing secrets as supported SecretRef inputs, while reads, writes, allowlist and target lookups, and setup checks use the resolved credentials instead of rejecting or misreading the references. [7da955f](https://github.com/openclaw/openclaw/commit/7da955fae4ca2083599aa33a1f93dbfff53cb187) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Channel capability checks now return a clear timeout when an integration st...",
        "description": "Channel capability checks now return a clear timeout when an integration stops responding, keeping troubleshooting from hanging in a terminal or automation run. [8ecdb97](https://github.com/openclaw/openclaw/commit/8ecdb97b636e4c3fcc6d142d217327404ae06581) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "After changing the default model, starting a fresh channel session with `/n...",
        "description": "After changing the default model, starting a fresh channel session with `/new` or `/reset` now uses the new default instead of silently reusing the previous cached model, while explicit `/model` overrides remain unchanged. [#77339](https://github.com/openclaw/openclaw/pull/77339) Related [#77322](https://github.com/openclaw/openclaw/issues/77322). Thanks @mjamiv, @zaynl.",
        "href": "https://github.com/openclaw/openclaw/issues/77339"
      },
      {
        "title": "Behind HTTP or HTTPS proxies, Codex/OpenAI usage and quota checks in `openc...",
        "description": "Behind HTTP or HTTPS proxies, Codex/OpenAI usage and quota checks in `openclaw status --usage --json` and the Control UI now retrieve usage windows instead of failing when chatgpt.com is unreachable directly. [#93943](https://github.com/openclaw/openclaw/pull/93943) Related [#78714](https://github.com/openclaw/openclaw/issues/78714). Thanks @tnzgit, @turbotheturtle.",
        "href": "https://github.com/openclaw/openclaw/issues/93943"
      },
      {
        "title": "`/status` now keeps the active model and how to clear a pinned choice on on...",
        "description": "`/status` now keeps the active model and how to clear a pinned choice on one compact line, so Discord and other chat users can scan model status without a multi-line explanation. [#95797](https://github.com/openclaw/openclaw/pull/95797) Thanks @solvely-colin.",
        "href": "https://github.com/openclaw/openclaw/issues/95797"
      },
      {
        "title": "Anthropic streaming responses now keep interleaved text, thinking, and tool...",
        "description": "Anthropic streaming responses now keep interleaved text, thinking, and tool-call updates attached to the correct response block instead of mixing them when several blocks are active at once. [#96013](https://github.com/openclaw/openclaw/pull/96013) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96013"
      },
      {
        "title": "Memory-wiki status cards and bridge-backed source sync are less likely to f...",
        "description": "Memory-wiki status cards and bridge-backed source sync are less likely to fail during simultaneous page rewrites because OpenClaw now retries the transient path mismatch while still stopping unsafe or persistent filesystem writes. [#94443](https://github.com/openclaw/openclaw/pull/94443) Related [#92134](https://github.com/openclaw/openclaw/issues/92134). Thanks @cknzraposo, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/94443"
      },
      {
        "title": "Fixes recent-session resume opening a fresh conversation for users with lon...",
        "description": "Fixes recent-session resume opening a fresh conversation for users with long workspace paths instead of returning to their existing transcript. [#94578](https://github.com/openclaw/openclaw/pull/94578) Related [#94577](https://github.com/openclaw/openclaw/issues/94577). Thanks @rohitjavvadi, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94578"
      },
      {
        "title": "Memory Wiki now keeps user-written notes intact when an existing source pag...",
        "description": "Memory Wiki now keeps user-written notes intact when an existing source page is re-ingested or synced, while still refreshing its generated content. [#95614](https://github.com/openclaw/openclaw/pull/95614) Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/95614"
      },
      {
        "title": "Fixes Memory Wiki repeatedly copying its own generated source pages back in...",
        "description": "Fixes Memory Wiki repeatedly copying its own generated source pages back into itself when its vault is stored inside the workspace memory folder, avoiding duplicate files, repeated cleanup, and unnecessary memory index growth. [#95666](https://github.com/openclaw/openclaw/pull/95666) Related [#95657](https://github.com/openclaw/openclaw/issues/95657). Thanks @johannes0402, @turbotheturtle, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95666"
      },
      {
        "title": "For operators using Active Memory with memory-core dreaming, nightly dreami...",
        "description": "For operators using Active Memory with memory-core dreaming, nightly dreaming jobs no longer start unnecessary recall work and hit 45-second timeouts, while regular web chats continue to receive memory recall. [#95721](https://github.com/openclaw/openclaw/pull/95721) Related [#78500](https://github.com/openclaw/openclaw/issues/78500). Thanks @vincentkoc, @vishutdhar, @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/issues/95721"
      },
      {
        "title": "Agent sessions with many tool calls repair out-of-order results with less r...",
        "description": "Agent sessions with many tool calls repair out-of-order results with less repeated work while keeping each result paired with the right tool call. [#96014](https://github.com/openclaw/openclaw/pull/96014) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96014"
      },
      {
        "title": "Windows qmd-backed memory work now stops all related processes after availa...",
        "description": "Windows qmd-backed memory work now stops all related processes after availability probes and command timeouts, preventing qmd children from continuing to run in the background. [830691b](https://github.com/openclaw/openclaw/commit/830691b2010bd0406399adb8a2e97e0b043e2ca8)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "When a configured or explicit remote gateway is slow but reachable, `opencl...",
        "description": "When a configured or explicit remote gateway is slow but reachable, `openclaw gateway probe --timeout ...` now waits for the requested timeout instead of reporting it unreachable after a shorter internal cutoff. [#89859](https://github.com/openclaw/openclaw/pull/89859) Related [#65355](https://github.com/openclaw/openclaw/issues/65355). Thanks @hellocli, @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/issues/89859"
      },
      {
        "title": "Long or parallel internal subagent runs now avoid unnecessary live-preview...",
        "description": "Long or parallel internal subagent runs now avoid unnecessary live-preview processing, while visible subagent sessions still show live updates and final responses. [#91906](https://github.com/openclaw/openclaw/pull/91906) Thanks @lanzhi-lee, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91906"
      },
      {
        "title": "ACP conversations, especially Kiro-backed threads, now continue past the fi...",
        "description": "ACP conversations, especially Kiro-backed threads, now continue past the first reply by starting a fresh session when the backend can no longer resume the old one. [#93547](https://github.com/openclaw/openclaw/pull/93547) Related [#87830](https://github.com/openclaw/openclaw/issues/87830). Thanks @amersheeny, @chouzz.",
        "href": "https://github.com/openclaw/openclaw/issues/93547"
      },
      {
        "title": "When Linux memory pressure kills a child command or session, systemd-manage...",
        "description": "When Linux memory pressure kills a child command or session, systemd-managed OpenClaw gateways now stay running and keep channel connections alive while reporting the child failure. [#93585](https://github.com/openclaw/openclaw/pull/93585) Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/issues/93585"
      },
      {
        "title": "Canceling an OpenClaw run during tool work now ends it promptly instead of...",
        "description": "Canceling an OpenClaw run during tool work now ends it promptly instead of starting another model turn or leaving the session locked. [#94412](https://github.com/openclaw/openclaw/pull/94412) Thanks @szsip239, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94412"
      },
      {
        "title": "Scheduled OpenClaw jobs using cloud models now recover from silent, stuck m...",
        "description": "Scheduled OpenClaw jobs using cloud models now recover from silent, stuck model calls by default, helping prevent later cron work from backing up while local or self-hosted providers keep their existing timeout behavior. [#94445](https://github.com/openclaw/openclaw/pull/94445) Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/issues/94445"
      },
      {
        "title": "Gateway readiness checks now turn unhealthy during a restart drain, prevent...",
        "description": "Gateway readiness checks now turn unhealthy during a restart drain, preventing traffic managers from sending new work to a Gateway that is temporarily rejecting requests. [#94915](https://github.com/openclaw/openclaw/pull/94915) Related [#78136](https://github.com/openclaw/openclaw/issues/78136). Thanks @markoub, @maxschachere, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94915"
      },
      {
        "title": "Mac users can keep LaunchAgent-managed gateways running through OpenClaw up...",
        "description": "Mac users can keep LaunchAgent-managed gateways running through OpenClaw upgrades instead of seeing repeated crash-and-restart loops when older text-transform runtime code is still cached. [#95081](https://github.com/openclaw/openclaw/pull/95081) Related [#95057](https://github.com/openclaw/openclaw/issues/95057). Thanks @849261680, @yveslarose.",
        "href": "https://github.com/openclaw/openclaw/issues/95081"
      },
      {
        "title": "Codex-powered conversations in TUI, WebChat, and compatible streaming APIs...",
        "description": "Codex-powered conversations in TUI, WebChat, and compatible streaming APIs now show replies as they are written, while replacing provisional text cleanly so the final answer does not include stale drafts. [#95404](https://github.com/openclaw/openclaw/pull/95404) Related [#95422](https://github.com/openclaw/openclaw/issues/95422). Thanks @agonza1, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95404"
      },
      {
        "title": "After a gateway restart, users no longer see a misleading retry notice when...",
        "description": "After a gateway restart, users no longer see a misleading retry notice when OpenClaw is already resuming the interrupted reply or reporting the actual recovery failure, reducing unnecessary duplicate attempts. [#95431](https://github.com/openclaw/openclaw/pull/95431) Thanks @moeedahmed, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95431"
      },
      {
        "title": "Long, tool-heavy agent sessions now retain prompt-cache savings as results...",
        "description": "Long, tool-heavy agent sessions now retain prompt-cache savings as results accumulate, reducing avoidable delays and cost from resending rewritten history between turns. [#95624](https://github.com/openclaw/openclaw/pull/95624) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95624"
      },
      {
        "title": "Gateway restarts no longer leave configured Codex, Copilot, or trusted plug...",
        "description": "Gateway restarts no longer leave configured Codex, Copilot, or trusted plugin-based agents temporarily unavailable, and untrusted workspace plugins remain blocked from activating themselves. [#95652](https://github.com/openclaw/openclaw/pull/95652) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95652"
      },
      {
        "title": "Long responses, busy tool streams, image-heavy requests, and memory recall...",
        "description": "Long responses, busy tool streams, image-heavy requests, and memory recall now incur less CPU and filesystem overhead without requiring settings or workflow changes. [#95697](https://github.com/openclaw/openclaw/pull/95697) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95697"
      },
      {
        "title": "Operators can again add or update scheduled announcements for known channel...",
        "description": "Operators can again add or update scheduled announcements for known channels in no-config setups, while configured environments still reject disabled, stale, ownerless, or unknown destinations before delivery. [#95754](https://github.com/openclaw/openclaw/pull/95754) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95754"
      },
      {
        "title": "macOS users are less likely to see a false port-conflict failure when stopp...",
        "description": "macOS users are less likely to see a false port-conflict failure when stopping or updating a managed gateway, because OpenClaw briefly waits for normal shutdown to release the port while still reporting conflicts that persist. [#95886](https://github.com/openclaw/openclaw/pull/95886) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/95886"
      },
      {
        "title": "Copilot-backed agents can now ask users a question and accept the answer th...",
        "description": "Copilot-backed agents can now ask users a question and accept the answer through OpenClaw's normal chat reply flow, while compact tool-search and code-mode controls avoid loading the full tool catalog into the session. [#96005](https://github.com/openclaw/openclaw/pull/96005) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96005"
      },
      {
        "title": "Gateway restarts on systemd or container setups no longer leave old Codex o...",
        "description": "Gateway restarts on systemd or container setups no longer leave old Codex or Claude adapter processes behind, helping new ACPX sessions start without minutes-long cleanup stalls after repeated restarts. [#96032](https://github.com/openclaw/openclaw/pull/96032) Thanks @t2wei, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96032"
      },
      {
        "title": "Copilot-backed sessions now show plan updates as work unfolds, and their na...",
        "description": "Copilot-backed sessions now show plan updates as work unfolds, and their native child tasks stay visible through completion or failure instead of disappearing from OpenClaw's task view. [#96062](https://github.com/openclaw/openclaw/pull/96062) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96062"
      },
      {
        "title": "Connected agents such as OpenCode now start through OpenClaw even when thei...",
        "description": "Connected agents such as OpenCode now start through OpenClaw even when their harness cannot select a requested model, while genuinely unsupported model choices still return the original error. [#96068](https://github.com/openclaw/openclaw/pull/96068) Related [#95869](https://github.com/openclaw/openclaw/issues/95869). Thanks @sabatech-dev, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96068"
      },
      {
        "title": "Plugins using `heartbeat_prompt_contribution` now deliver their heartbeat-s...",
        "description": "Plugins using `heartbeat_prompt_contribution` now deliver their heartbeat-specific context to models when agents run through harness runtimes such as the Codex app-server, without affecting ordinary user turns or plugins that do not use the hook. [#96233](https://github.com/openclaw/openclaw/pull/96233) Thanks @azogheb, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96233"
      },
      {
        "title": "Windows gateway cleanup and listener checks now handle UTF-16 WMIC command-...",
        "description": "Windows gateway cleanup and listener checks now handle UTF-16 WMIC command-line data consistently, reducing failed or conflicting identification of the running gateway process. [15c880a](https://github.com/openclaw/openclaw/commit/15c880aeff1f4e55964ad7204d14733a2d1362f7) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Long-context, tool-heavy agent sessions now keep prompt-cache reuse steadie...",
        "description": "Long-context, tool-heavy agent sessions now keep prompt-cache reuse steadier across repeated turns without losing per-result size limits, while advanced operators can configure larger tool-result caps for large-context models without configuration rejection. [a60947f](https://github.com/openclaw/openclaw/commit/a60947fb3e92f45ea7eb2581da8877b10a8bebb2) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Long, tool-heavy agent sessions are less likely to bloat model requests as...",
        "description": "Long, tool-heavy agent sessions are less likely to bloat model requests as tool output accumulates, while repeated turns keep stable prompt-cache reuse. [2f33999](https://github.com/openclaw/openclaw/commit/2f3399989893e6af18be49fb810e58941d7a4a45) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Gateway restarts now use OpenClaw's durable state database for the handoff,...",
        "description": "Gateway restarts now use OpenClaw's durable state database for the handoff, while stale, malformed, wrong-process, or superseded requests are discarded before they can affect the restart. [0ad48da](https://github.com/openclaw/openclaw/commit/0ad48dad2c4747f255d5a156b94578f7d87386a1)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Gateway status, doctor, and restart diagnostics now retain recent restart d...",
        "description": "Gateway status, doctor, and restart diagnostics now retain recent restart details in OpenClaw's shared state database, while expired or malformed records are still discarded. [a39a3b7](https://github.com/openclaw/openclaw/commit/a39a3b74de05f06227ede904a73c1b4687679d3e) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Gateway restarts and managed-service updates now keep the correct continuat...",
        "description": "Gateway restarts and managed-service updates now keep the correct continuation message, avoid reusing stale handoff state, and mark failed update handoffs consistently. [514b336](https://github.com/openclaw/openclaw/commit/514b3365b54c8b3493eaf8a94198b7c04ea34aec) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Gateway-launched agents no longer lose owner-only OpenClaw tools during tas...",
        "description": "Gateway-launched agents no longer lose owner-only OpenClaw tools during tasks such as live cron checks, so authorized operations can use the intended tools with the correct request context. [c2ee9b0](https://github.com/openclaw/openclaw/commit/c2ee9b0be8aeeadedffc8c6aaa9f5f291283fea5) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Malformed gateway restart requests now fail clearly without scheduling a re...",
        "description": "Malformed gateway restart requests now fail clearly without scheduling a restart, preventing bad or accidental integration calls from unexpectedly restarting the gateway. [108d6d7](https://github.com/openclaw/openclaw/commit/108d6d7eca0000a736e28d198e77100f4d7774e5) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Stale node requests queued by the gateway now expire automatically, so old...",
        "description": "Stale node requests queued by the gateway now expire automatically, so old work is less likely to linger and affect later activity. [f6d432e](https://github.com/openclaw/openclaw/commit/f6d432e545e2e2be91d17badc48354a0135e5294)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Plugin workflows are less likely to stall or overload the gateway when an i...",
        "description": "Plugin workflows are less likely to stall or overload the gateway when an integration requests too much subagent session history, because each read is now capped at a safe limit. [b66b450](https://github.com/openclaw/openclaw/commit/b66b4504f87205dd8ba0393e763e23a4a6158a79) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Image descriptions now handle extremely large timeout settings consistently...",
        "description": "Image descriptions now handle extremely large timeout settings consistently by capping them to a safe runtime limit instead of risking timer overflow. [88b21fc](https://github.com/openclaw/openclaw/commit/88b21fc30b4ac615b3d3870e483190bc832f9846)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Embedded agent sessions now wait reliably for another session to release it...",
        "description": "Embedded agent sessions now wait reliably for another session to release its file lock, even with an extremely large timeout, instead of risking timer overflow. [4c736df](https://github.com/openclaw/openclaw/commit/4c736df975fed8e39f18db43bfaea9654b9ac0c7) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Queued commands with extremely large task timeout settings now time out rel...",
        "description": "Queued commands with extremely large task timeout settings now time out reliably because OpenClaw caps the wait at the runtime's safe maximum. [1f6ae32](https://github.com/openclaw/openclaw/commit/1f6ae32cabb9d5ed308bb30715c287936ef483f1) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fixes normalization-core exposing the wrong string-coercion entry point and...",
        "description": "Fixes normalization-core exposing the wrong string-coercion entry point and ACP sessions showing an outdated fast-mode value, so integrations receive the intended API and users see the mode actually in effect. [93ad397](https://github.com/openclaw/openclaw/commit/93ad39772590a34be3821d83709a5050c186fdf9) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fast auto runs now deliver final replies more consistently, with progress-r...",
        "description": "Fast auto runs now deliver final replies more consistently, with progress-reset handling limited to automatic mode so it does not interfere with responses or forwarded callbacks. [9e8ab08](https://github.com/openclaw/openclaw/commit/9e8ab083dd6b9df4dadf40ee523ff18ac1472bd3) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Agent sessions using OpenAI Responses now resume tool-based work without fa...",
        "description": "Agent sessions using OpenAI Responses now resume tool-based work without failing or losing progress when replayed history contains mismatched tool requests and results. [b4bc1f2](https://github.com/openclaw/openclaw/commit/b4bc1f20c9fca6d316561d42cbabdd793c67a6e7) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Completed plugin subagent and QA runs are no longer misreported as failures...",
        "description": "Completed plugin subagent and QA runs are no longer misreported as failures when gateways return alternate completion envelope shapes, making successful handoffs more reliable for plugin authors and operators. [d1b268f](https://github.com/openclaw/openclaw/commit/d1b268f7f7f7309dd5db99728019218b4d453e18) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fixes completed subagent tasks sometimes ending without an update, so users...",
        "description": "Fixes completed subagent tasks sometimes ending without an update, so users receive the result or the parent agent's next step. [68a1e00](https://github.com/openclaw/openclaw/commit/68a1e00b73bd746f6fb577f4127fecb0ade9e228) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Generated images from a remote Codex app-server now arrive as attachments i...",
        "description": "Generated images from a remote Codex app-server now arrive as attachments instead of showing `Media failed` or returning only text after successful generation. [#96212](https://github.com/openclaw/openclaw/pull/96212) Thanks @sjf-oa.",
        "href": "https://github.com/openclaw/openclaw/issues/96212"
      },
      {
        "title": "When a subagent finishes, its result now reaches the active parent run more...",
        "description": "When a subagent finishes, its result now reaches the active parent run more reliably instead of appearing silent. [7fc4bbc](https://github.com/openclaw/openclaw/commit/7fc4bbc0bcbabc2aa99b1fd51e77099f2b26f4e1) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Trusted OpenClaw package sources now reject lookalike sibling paths, so tru...",
        "description": "Trusted OpenClaw package sources now reject lookalike sibling paths, so trusting `/artifactory/openclaw` no longer also admits paths such as `/artifactory/openclaw-malicious`. [12c34fc](https://github.com/openclaw/openclaw/commit/12c34fc3a95121f5a15f01c3f971a1bc5b0fe6f9) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "When a WebChat message fails before the agent starts, WebChat and Control U...",
        "description": "When a WebChat message fails before the agent starts, WebChat and Control UI now show the session as failed instead of leaving it looking like it is still running. [#84352](https://github.com/openclaw/openclaw/pull/84352) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/84352"
      },
      {
        "title": "Fixes the Control UI session picker getting stuck behind hidden subagent se...",
        "description": "Fixes the Control UI session picker getting stuck behind hidden subagent sessions, so Load More reaches the next usable chat without showing a misleading total. [#89323](https://github.com/openclaw/openclaw/pull/89323) Related [#89249](https://github.com/openclaw/openclaw/issues/89249). Thanks @giodl73-repo, @originsecured-do.",
        "href": "https://github.com/openclaw/openclaw/issues/89323"
      },
      {
        "title": "When users reopen a Control UI conversation from History, their prompts now...",
        "description": "When users reopen a Control UI conversation from History, their prompts now appear with the assistant's replies, preserving the question-and-answer context without blank gaps in long transcripts. [#93841](https://github.com/openclaw/openclaw/pull/93841) Related [#90241](https://github.com/openclaw/openclaw/issues/90241). Thanks @mushuiyu886, @pronzcw.",
        "href": "https://github.com/openclaw/openclaw/issues/93841"
      },
      {
        "title": "Control UI deployments behind a path prefix now keep manifest, favicon, and...",
        "description": "Control UI deployments behind a path prefix now keep manifest, favicon, and service-worker requests under that prefix, avoiding confusing root-level 403 errors after login. [#94204](https://github.com/openclaw/openclaw/pull/94204) Related [#94157](https://github.com/openclaw/openclaw/issues/94157). Thanks @hugenshen, @xrow.",
        "href": "https://github.com/openclaw/openclaw/issues/94204"
      },
      {
        "title": "Android users can now open Health log and Skill rows in Settings for readab...",
        "description": "Android users can now open Health log and Skill rows in Settings for readable details, making it easier to troubleshoot gateway activity, check skill setup and status, and understand how to pair with an existing setup code. [#95148](https://github.com/openclaw/openclaw/pull/95148) Thanks @tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/95148"
      },
      {
        "title": "Sent prompts no longer reappear in the Control UI composer after a send, so...",
        "description": "Sent prompts no longer reappear in the Control UI composer after a send, so users can switch sessions or start their next message without risking a duplicate send or overwriting a new draft, while intentional re-entry still works. [#95503](https://github.com/openclaw/openclaw/pull/95503) Related [#89466](https://github.com/openclaw/openclaw/issues/89466). Thanks @vincentkoc, @zhangguiping-xydt, @zhong18804784882.",
        "href": "https://github.com/openclaw/openclaw/issues/95503"
      },
      {
        "title": "Android users now get a cleaner Overview where connection status, the confi...",
        "description": "Android users now get a cleaner Overview where connection status, the configured agent, node health, approvals, recent sessions, and Chat and Talk actions are visible at a glance. [#95557](https://github.com/openclaw/openclaw/pull/95557) Thanks @joshavant, @solvely-colin.",
        "href": "https://github.com/openclaw/openclaw/issues/95557"
      },
      {
        "title": "Android users can now refresh and resolve gateway command approvals from th...",
        "description": "Android users can now refresh and resolve gateway command approvals from the in-app Approvals screen, choosing Allow Once, Always, or Deny while connected. [#95593](https://github.com/openclaw/openclaw/pull/95593) Thanks @solvely-colin.",
        "href": "https://github.com/openclaw/openclaw/issues/95593"
      },
      {
        "title": "iOS users now avoid surprise notification prompts and get clear guidance wh...",
        "description": "iOS users now avoid surprise notification prompts and get clear guidance when approval alerts are unavailable, with permission managed from one predictable Settings screen. [#95640](https://github.com/openclaw/openclaw/pull/95640) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/95640"
      },
      {
        "title": "Local TUI shutdowns now stay within safe timer limits even when `OPENCLAW_T...",
        "description": "Local TUI shutdowns now stay within safe timer limits even when `OPENCLAW_TUI_LOCAL_RUN_SHUTDOWN_GRACE_MS` is set extremely high. [c21dcfc](https://github.com/openclaw/openclaw/commit/c21dcfc7c272201484514bbc096bd51ab112bd47)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Canvas A2UI now serves only the current app assets after each build, so out...",
        "description": "Canvas A2UI now serves only the current app assets after each build, so outdated compatibility images and leftover files are less likely to appear. [a89e65c](https://github.com/openclaw/openclaw/commit/a89e65c167f3280b047baff931f52e393875c892) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "iOS push relay setup failures are easier to pinpoint because registration d...",
        "description": "iOS push relay setup failures are easier to pinpoint because registration diagnostics show where setup stopped while keeping sensitive push credentials out of logs. [f2b8668](https://github.com/openclaw/openclaw/commit/f2b8668a549b50339a96e47020a12615734640a9) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "iOS devices are now enrolled for push notifications only after users accept...",
        "description": "iOS devices are now enrolled for push notifications only after users accept the hosted relay disclosure and allow notifications, preventing registration data from being published before consent. [8efed50](https://github.com/openclaw/openclaw/commit/8efed50c4ed33105cfed9f2f96532fc9fe2d7e6d) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Fixes chat, voice, TUI, and forwarded sends sometimes appearing stuck or di...",
        "description": "Fixes chat, voice, TUI, and forwarded sends sometimes appearing stuck or disappearing after the gateway had already finished or rejected them, so affected clients now clear the pending state, restore retryable input, refresh history, or show a useful failure. [#91049](https://github.com/openclaw/openclaw/pull/91049) Related [#91048](https://github.com/openclaw/openclaw/issues/91048). Thanks @nxmxbbd.",
        "href": "https://github.com/openclaw/openclaw/issues/91049"
      },
      {
        "title": "Restores the OpenAI/Codex usage quota in the expanded Control UI chat sideb...",
        "description": "Restores the OpenAI/Codex usage quota in the expanded Control UI chat sidebar, so users can check their limits without leaving the conversation. [#94219](https://github.com/openclaw/openclaw/pull/94219) Related [#93041](https://github.com/openclaw/openclaw/issues/93041). Thanks @jazzroutine, @pick-cat.",
        "href": "https://github.com/openclaw/openclaw/issues/94219"
      },
      {
        "title": "iOS screens now use consistent OpenClaw accent and status colors across onb...",
        "description": "iOS screens now use consistent OpenClaw accent and status colors across onboarding, settings, chat, approval prompts, voice permissions, widgets, and shared chat views. [#94627](https://github.com/openclaw/openclaw/pull/94627) Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/94627"
      },
      {
        "title": "The Control UI can now create Early Morning jobs with the Silent preset in...",
        "description": "The Control UI can now create Early Morning jobs with the Silent preset in the main session and without notifications, instead of leaving the dialog open with no visible result. [#95459](https://github.com/openclaw/openclaw/pull/95459) Related [#95073](https://github.com/openclaw/openclaw/issues/95073). Thanks @vincentkoc, @vporton, @zoowh.",
        "href": "https://github.com/openclaw/openclaw/issues/95459"
      },
      {
        "title": "At the million-token boundary, Control UI badges and usage readouts now sho...",
        "description": "At the million-token boundary, Control UI badges and usage readouts now show \"1M\" instead of the confusing \"1000k\", while the underlying token counts remain unchanged. [#95485](https://github.com/openclaw/openclaw/pull/95485) Thanks @narahariraghava, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95485"
      },
      {
        "title": "The Control UI Overview now counts and flags only enabled cron jobs that st...",
        "description": "The Control UI Overview now counts and flags only enabled cron jobs that still need attention, while disabled jobs retain their past failure details without appearing as current problems. [#95723](https://github.com/openclaw/openclaw/pull/95723) Related [#95716](https://github.com/openclaw/openclaw/issues/95716). Thanks @voytas75, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/95723"
      },
      {
        "title": "Control UI users now see shorter System, Light, and Dark theme tooltips, wh...",
        "description": "Control UI users now see shorter System, Light, and Dark theme tooltips, while screen readers announce less repetitive labels without losing the surrounding Color mode context. [#95837](https://github.com/openclaw/openclaw/pull/95837) Thanks @hannesrudolph, @sannidhyasah.",
        "href": "https://github.com/openclaw/openclaw/issues/95837"
      },
      {
        "title": "Raw configuration no longer appears missing in Settings after switching fro...",
        "description": "Raw configuration no longer appears missing in Settings after switching from the form view, because the JSON is brought back into view instead of retaining the previous scroll position. [#96145](https://github.com/openclaw/openclaw/pull/96145) Related [#94202](https://github.com/openclaw/openclaw/issues/94202). Thanks @sunlit-deng, @vporton.",
        "href": "https://github.com/openclaw/openclaw/issues/96145"
      },
      {
        "title": "New iOS users now reach OpenClaw's welcome and onboarding before iOS asks f...",
        "description": "New iOS users now reach OpenClaw's welcome and onboarding before iOS asks for local-network access, while existing users still get the request when opening gateway setup or otherwise needing LAN gateway discovery. [#96181](https://github.com/openclaw/openclaw/pull/96181) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/96181"
      },
      {
        "title": "People installing or updating the official Yuanbao channel plugin through O...",
        "description": "People installing or updating the official Yuanbao channel plugin through OpenClaw's trusted catalog now get version 2.15.0, with the expected integrity check and missing-plugin guidance aligned to that release. [#94470](https://github.com/openclaw/openclaw/pull/94470) Thanks @jase-283.",
        "href": "https://github.com/openclaw/openclaw/issues/94470"
      },
      {
        "title": "First-run onboarding can now install the bundled `gog` skill through Homebr...",
        "description": "First-run onboarding can now install the bundled `gog` skill through Homebrew without failing on the removed third-party tap formula. [#95019](https://github.com/openclaw/openclaw/pull/95019) Related [#95017](https://github.com/openclaw/openclaw/issues/95017). Thanks @sedrak-hovhannisyan, @vincentkoc, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/95019"
      },
      {
        "title": "Canvas, Discord, Slack, Voice Call, and WhatsApp users keep the same skill...",
        "description": "Canvas, Discord, Slack, Voice Call, and WhatsApp users keep the same skill guidance with each installed or bundled plugin, while references to the former root `skills/...` paths need to move into the relevant plugin directory. [#95664](https://github.com/openclaw/openclaw/pull/95664) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95664"
      },
      {
        "title": "ClawHub skill verification now accepts the same `@owner/<slug>` reference u...",
        "description": "ClawHub skill verification now accepts the same `@owner/<slug>` reference used for installs and updates, so users can check the intended publisher without switching to an ambiguous bare slug. [#95992](https://github.com/openclaw/openclaw/pull/95992) Thanks @patrick-erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/95992"
      },
      {
        "title": "OpenClaw's install-time package-manager warning now identifies npm, Yarn, Y...",
        "description": "OpenClaw's install-time package-manager warning now identifies npm, Yarn, Yarn Berry, and Corepack-style launchers correctly, avoiding misleading guidance when those tools run through alternate executable names. [11a2e03](https://github.com/openclaw/openclaw/commit/11a2e03bd4deda748336553710cb6426d448d952) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Package URL installs now handle oversized download timeouts without failing...",
        "description": "Package URL installs now handle oversized download timeouts without failing before available package data can be resolved. [c310f8c](https://github.com/openclaw/openclaw/commit/c310f8cfa4524453c7082bb5aab642c9decc6e99)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Plugin and CLI developers now see a clearer supported command-formatting AP...",
        "description": "Plugin and CLI developers now see a clearer supported command-formatting API, while device pairing, node registration, and doctor guidance keep producing the same shell-safe commands. [23b4f33](https://github.com/openclaw/openclaw/commit/23b4f33195933ff4def4609d970f073293760683)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows ARM64 users now get matching ARM64 Node and MinGit downloads when r...",
        "description": "Windows ARM64 users now get matching ARM64 Node and MinGit downloads when running the PowerShell installer through an x64-emulated shell. [fac091b](https://github.com/openclaw/openclaw/commit/fac091b39de230d9ed90e8412123126cf676004f) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Default OpenClaw installs no longer spend time building optional llama",
        "description": "Default OpenClaw installs no longer spend time building optional llama.cpp support, avoiding native-build failures for users who did not enable it. [cc1b3a8](https://github.com/openclaw/openclaw/commit/cc1b3a8550dd9c29f581799934d140aaf5a84f1c) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "OpenClaw's zsh tab-completion menu now displays option descriptions contain...",
        "description": "OpenClaw's zsh tab-completion menu now displays option descriptions containing `$` variables or backtick-wrapped examples literally instead of evaluating them as shell input and corrupting the menu. [#64490](https://github.com/openclaw/openclaw/pull/64490) Thanks @edenkangdw.",
        "href": "https://github.com/openclaw/openclaw/issues/64490"
      },
      {
        "title": "After upgrading from older sandbox storage, operators now get a clear `open...",
        "description": "After upgrading from older sandbox storage, operators now get a clear `openclaw doctor` warning about leftover registry files and can use `openclaw doctor --fix` to migrate or clean them up. [#84326](https://github.com/openclaw/openclaw/pull/84326) Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/84326"
      },
      {
        "title": "Operators can now use `doctor --lint` to spot stale legacy Gateway services...",
        "description": "Operators can now use `doctor --lint` to spot stale legacy Gateway services and preview cleanup, while intentional extra services remain informational and do not fail the default check. [#84340](https://github.com/openclaw/openclaw/pull/84340) Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/84340"
      },
      {
        "title": "macOS gateway operators now get a warning before reinstall, repair, or rest...",
        "description": "macOS gateway operators now get a warning before reinstall, repair, or restart overwrites custom LaunchAgent wrapper behavior, while `openclaw status` distinguishes CLI-only missing-secret checks from the installed service. [#90537](https://github.com/openclaw/openclaw/pull/90537) Related [#90518](https://github.com/openclaw/openclaw/issues/90518). Thanks @turbotheturtle, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90537"
      },
      {
        "title": "Long, multiline, or code-heavy prompts can now be sent to `openclaw agent`...",
        "description": "Long, multiline, or code-heavy prompts can now be sent to `openclaw agent` with `--message-file`, avoiding fragile shell quoting and reporting invalid files before dispatch. [#93351](https://github.com/openclaw/openclaw/pull/93351) Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/93351"
      },
      {
        "title": "Fixes scheduled `doctor --fix --non-interactive` repairs restarting an alre...",
        "description": "Fixes scheduled `doctor --fix --non-interactive` repairs restarting an already-running gateway after a temporary health-check failure, so unattended maintenance no longer interrupts the live service. [#94148](https://github.com/openclaw/openclaw/pull/94148) Related [#78217](https://github.com/openclaw/openclaw/issues/78217). Thanks @esqandil, @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/94148"
      },
      {
        "title": "`openclaw configure` and bare `openclaw config` now stop with clear subcomm...",
        "description": "`openclaw configure` and bare `openclaw config` now stop with clear subcommand guidance when run from scripts or pipes, instead of opening a partial interactive wizard and exiting unclearly. [#94238](https://github.com/openclaw/openclaw/pull/94238) Related [#93953](https://github.com/openclaw/openclaw/issues/93953). Thanks @nianjiuzst, @ruomuxydt.",
        "href": "https://github.com/openclaw/openclaw/issues/94238"
      },
      {
        "title": "Multi-agent operators can now use `openclaw gateway usage-cost` to view cos...",
        "description": "Multi-agent operators can now use `openclaw gateway usage-cost` to view costs for one configured agent or all agents while the existing default-agent command remains unchanged. [#94483](https://github.com/openclaw/openclaw/pull/94483) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/94483"
      },
      {
        "title": "Archived Workboard cards no longer clutter the default `openclaw workboard...",
        "description": "Archived Workboard cards no longer clutter the default `openclaw workboard list` output, while `--include-archived` and JSON output still provide access when needed. [#94562](https://github.com/openclaw/openclaw/pull/94562) Related [#94555](https://github.com/openclaw/openclaw/issues/94555). Thanks @ecican, @vincentkoc, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/94562"
      },
      {
        "title": "OpenClaw Doctor now gives accurate guidance for working isolated shell-prom...",
        "description": "OpenClaw Doctor now gives accurate guidance for working isolated shell-prompt cron jobs instead of repeatedly suggesting a `--fix` command that cannot clear the warning. [#94784](https://github.com/openclaw/openclaw/pull/94784) Related [#94655](https://github.com/openclaw/openclaw/issues/94655). Thanks @altaywtf, @geekoagent, @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/94784"
      },
      {
        "title": "Fixes `openclaw doctor` showing a fix-required warning for healthy local GG...",
        "description": "Fixes `openclaw doctor` showing a fix-required warning for healthy local GGUF memory setups after an intentionally skipped readiness check, while preserving the warning when the configured local model is actually missing. [#95393](https://github.com/openclaw/openclaw/pull/95393) Related [#92582](https://github.com/openclaw/openclaw/issues/92582). Thanks @mikasa0818, @neekolascmd, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95393"
      },
      {
        "title": "On Windows, installer-created gateway tasks now run in the background witho...",
        "description": "On Windows, installer-created gateway tasks now run in the background without a console window that users could accidentally close and stop the gateway. [#95480](https://github.com/openclaw/openclaw/pull/95480) Related [#89231](https://github.com/openclaw/openclaw/issues/89231). Thanks @cameronweller, @mikasa0818, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95480"
      },
      {
        "title": "Agent channel bindings now reject malformed account specs such as `matrix:w...",
        "description": "Agent channel bindings now reject malformed account specs such as `matrix:work:extra` with a clear error instead of silently routing the agent to a different account. [#95572](https://github.com/openclaw/openclaw/pull/95572) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/95572"
      },
      {
        "title": "ClawHub skill updates now honor your configured install safety policy, and...",
        "description": "ClawHub skill updates now honor your configured install safety policy, and `openclaw skills update --all` updates only tracked ClawHub skills instead of unexpectedly installing other configured skills. [#95684](https://github.com/openclaw/openclaw/pull/95684) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95684"
      },
      {
        "title": "Windows restart and gateway startup workflows are more reliable because Ope...",
        "description": "Windows restart and gateway startup workflows are more reliable because OpenClaw now hands commands to the trusted system `cmd.exe` path instead of depending on process lookup. [7dd01d1](https://github.com/openclaw/openclaw/commit/7dd01d15c56da2ee50f55746ba725d708682fca9) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows gateway cleanup and listener checks are more reliable when PATH loo...",
        "description": "Windows gateway cleanup and listener checks are more reliable when PATH lookup is incomplete, so operators can identify the gateway process and free an occupied port without installed system tools being missed. [e9b694e](https://github.com/openclaw/openclaw/commit/e9b694ef9cd8b7528a76d85b8be2a830b296a5e1) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "On Windows, OpenClaw startup and TUI Codex handoff now find `bun`, `codex`,...",
        "description": "On Windows, OpenClaw startup and TUI Codex handoff now find `bun`, `codex`, and other runtime binaries through the trusted system locator even when another `where` command appears earlier on PATH. [72b9bc7](https://github.com/openclaw/openclaw/commit/72b9bc730370e3b1155fb231621c2bc7b2c87b56) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows port diagnostics now use the intended system tools even when PATH e...",
        "description": "Windows port diagnostics now use the intended system tools even when PATH entries are missing or shadowed, so gateway and service port conflicts are less likely to be obscured by command-resolution failures. [c4facb2](https://github.com/openclaw/openclaw/commit/c4facb2bb372e99037f497e2640ca7bdc5cbc5f6) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows daemon recovery is less likely to miss process detection or cleanup...",
        "description": "Windows daemon recovery is less likely to miss process detection or cleanup when PATH is incomplete, unusual, or shadowed because scheduled-task fallback now finds PowerShell and taskkill in trusted system locations. [2a140e6](https://github.com/openclaw/openclaw/commit/2a140e6e6ae8c48edb5bd52d8d177915f0555d70) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "OpenClaw now keeps config recovery markers, last-known-good snapshots, and...",
        "description": "OpenClaw now keeps config recovery markers, last-known-good snapshots, and suspicious-read history in its shared state through migration, without leaving a separate config-health log file behind. [6daabd2](https://github.com/openclaw/openclaw/commit/6daabd23f821c66154739de4b0f103e33343333c) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "On Windows, Crabbox commands launched through Node package shims now receiv...",
        "description": "On Windows, Crabbox commands launched through Node package shims now receive provider flags, shell commands, and special shell characters as entered instead of losing or reinterpreting them. [54d24cd](https://github.com/openclaw/openclaw/commit/54d24cd956ff91f4fa8c4924f17c06798c1e0359) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows-targeted Crabbox workflows are less likely to fail or fall back to...",
        "description": "Windows-targeted Crabbox workflows are less likely to fail or fall back to slower shell handling when launching Node tools through `.cmd` and `.bat` shims. [d48dcc6](https://github.com/openclaw/openclaw/commit/d48dcc664bc6e1106a61942a951745886f22d582) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows users can run `crabbox`, `git`, and other Node-backed tools through...",
        "description": "Windows users can run `crabbox`, `git`, and other Node-backed tools through npm-installed command shims without Crabbox stopping before the tool opens. [77f4e45](https://github.com/openclaw/openclaw/commit/77f4e45c3518751b5f586eac193c4aee904f02d9) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "`openclaw doctor` now checks profiles that omit tool policy settings withou...",
        "description": "`openclaw doctor` now checks profiles that omit tool policy settings without treating the valid omission as an error. [03ba09b](https://github.com/openclaw/openclaw/commit/03ba09bfa8676832d55bdc7724e79d9980fdd2d7)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "`openclaw doctor` no longer shows misleading tool-section warnings when it...",
        "description": "`openclaw doctor` no longer shows misleading tool-section warnings when it cannot evaluate a custom preview profile. [420a0e6](https://github.com/openclaw/openclaw/commit/420a0e6fce4b2c5339e535e6b307f50df1c00bb2) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "`openclaw doctor` now limits preview warnings to tool profiles it can evalu...",
        "description": "`openclaw doctor` now limits preview warnings to tool profiles it can evaluate, avoiding misleading configured-grant warnings for unknown profiles. [541f7ff](https://github.com/openclaw/openclaw/commit/541f7ffc6558c0e59a8afca066a9f00884d39b65) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows users can install OpenClaw from source without dependency setup bei...",
        "description": "Windows users can install OpenClaw from source without dependency setup being blocked by the installer forcing npm or pnpm scripts through `cmd.exe`. [1252378](https://github.com/openclaw/openclaw/commit/1252378018f899bfc110914bac7cba94b65b8930) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Isolated cron jobs using `deleteAfterRun` now remove their temporary sessio...",
        "description": "Isolated cron jobs using `deleteAfterRun` now remove their temporary session and transcript after finishing, including runs with delivery disabled, reducing stale files, accumulated context, and manual cleanup. [#84794](https://github.com/openclaw/openclaw/pull/84794) Related [#84707](https://github.com/openclaw/openclaw/issues/84707). Thanks @bottenbenny, @turbotheturtle.",
        "href": "https://github.com/openclaw/openclaw/issues/84794"
      },
      {
        "title": "Individual scheduled jobs can now use their own fallback models, run with f...",
        "description": "Individual scheduled jobs can now use their own fallback models, run with fallbacks disabled, or return to normal fallback inheritance through the CLI instead of requiring operators to edit lower-level payload data. [#93369](https://github.com/openclaw/openclaw/pull/93369) Related [#90302](https://github.com/openclaw/openclaw/issues/90302). Thanks @849261680, @walliiee.",
        "href": "https://github.com/openclaw/openclaw/issues/93369"
      },
      {
        "title": "Cron history now reliably finds entries whose job IDs include extra surroun...",
        "description": "Cron history now reliably finds entries whose job IDs include extra surrounding spaces, and rejects nested or blank IDs before they can create log records that cannot be read back safely. [#93567](https://github.com/openclaw/openclaw/pull/93567) Thanks @alix-007, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93567"
      },
      {
        "title": "Adding or removing a cron job no longer causes another recurring job that i...",
        "description": "Adding or removing a cron job no longer causes another recurring job that is already due to lose its pending run. [#94323](https://github.com/openclaw/openclaw/pull/94323) Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/94323"
      },
      {
        "title": "Word, PowerPoint, and Excel document reads and writes now use the intended `",
        "description": "Word, PowerPoint, and Excel document reads and writes now use the intended `.docx`, `.pptx`, or `.xlsx` path instead of failing against a made-up extension. [#95805](https://github.com/openclaw/openclaw/pull/95805) Related [#93326](https://github.com/openclaw/openclaw/issues/93326). Thanks @bhnan, @lzyyzznl, @vincentkoc, @xzh-icenter.",
        "href": "https://github.com/openclaw/openclaw/issues/95805"
      },
      {
        "title": "Browser automation users keep the same reference-rich snapshots, including...",
        "description": "Browser automation users keep the same reference-rich snapshots, including useful branches in compact results, with less avoidable processing during snapshot generation. [#96072](https://github.com/openclaw/openclaw/pull/96072) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96072"
      },
      {
        "title": "Fixes timed-out commands and interrupted core updates on Windows sometimes...",
        "description": "Fixes timed-out commands and interrupted core updates on Windows sometimes leaving child processes running, so OpenClaw can stop the full process tree more reliably after cancellations, timeouts, or update cleanup. [a192b2e](https://github.com/openclaw/openclaw/commit/a192b2ea52b3166a7d190bf5f60f3feb030306bb) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows users are less likely to see agent-managed tool installs fail while...",
        "description": "Windows users are less likely to see agent-managed tool installs fail while unpacking ZIP downloads such as ripgrep, because OpenClaw now uses the built-in Windows extraction programs instead of relying on PATH lookup. [a5fde91](https://github.com/openclaw/openclaw/commit/a5fde9119c9c50685a392bff078a2f76a03d749d)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Windows setup and runtime checks now find required tools more reliably by u...",
        "description": "Windows setup and runtime checks now find required tools more reliably by using the trusted System32 resolver instead of depending on an unexpected PATH entry. [d3b4444](https://github.com/openclaw/openclaw/commit/d3b44442f6c8bedd765dc20a06316d3420b5d854) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "SDK runs created with `timeoutMs",
        "description": "0` now keep the requested zero timeout without an unwanted client-side watchdog. [2bdcc83](https://github.com/openclaw/openclaw/commit/2bdcc8314d3fce9ee2d0300759cd6a1d9bb45a7d) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Stalled OpenClaw commands now stop reliably even when callers supply extrem...",
        "description": "Stalled OpenClaw commands now stop reliably even when callers supply extremely large execution or idle-output timeouts. [1425bb3](https://github.com/openclaw/openclaw/commit/1425bb3a03189813787194c23b8a38518166005a) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Commands given extremely large timeout settings now use a safe maximum inst...",
        "description": "Commands given extremely large timeout settings now use a safe maximum instead of failing because the runtime cannot schedule the requested wait. [66b94ba](https://github.com/openclaw/openclaw/commit/66b94ba577b8836a4afa7cb59cd1a749bf2a8d68)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Provider-specific tool allow/deny settings now align more consistently with...",
        "description": "Provider-specific tool allow/deny settings now align more consistently with OpenClaw's doctor warnings, including configurations with provider aliases, model-specific keys, OpenRouter-style model IDs, or malformed policy entries. [8f2882f](https://github.com/openclaw/openclaw/commit/8f2882f94affbe5e89994ae175fdaf7304d7b392)",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Larger OpenClaw configurations can initialize and generate UI hints more ef...",
        "description": "Larger OpenClaw configurations can initialize and generate UI hints more efficiently, while sensitive fields continue to be marked the same way. [#55018](https://github.com/openclaw/openclaw/pull/55018) Thanks @huangyandi-red, @vincentkoc, @xdhuangyandi.",
        "href": "https://github.com/openclaw/openclaw/issues/55018"
      },
      {
        "title": "Config changes that still need a manual gateway restart now show a clear re...",
        "description": "Config changes that still need a manual gateway restart now show a clear restart-required notice with the original note preserved, instead of looking finished with a misleading `config-patch ok` message. [#83041](https://github.com/openclaw/openclaw/pull/83041) Related [#46797](https://github.com/openclaw/openclaw/issues/46797). Thanks @stache73, @xuruiray.",
        "href": "https://github.com/openclaw/openclaw/issues/83041"
      },
      {
        "title": "Help for `doctor`, `gateway`, `models`, `plugins`, `sessions`, and `tasks`...",
        "description": "Help for `doctor`, `gateway`, `models`, `plugins`, `sessions`, and `tasks` now appears in tens of milliseconds, while commands such as `sessions --help` and `tasks --help` previously took about 1.6 to 1.8 seconds to begin responding. [#89628](https://github.com/openclaw/openclaw/pull/89628) Thanks @yyzquwu.",
        "href": "https://github.com/openclaw/openclaw/issues/89628"
      },
      {
        "title": "OpenTelemetry trace backends such as Langfuse now show the actual provider/...",
        "description": "OpenTelemetry trace backends such as Langfuse now show the actual provider/model name instead of \"unknown\" for slash-qualified model IDs. [#89981](https://github.com/openclaw/openclaw/pull/89981) Thanks @mycarrysun, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89981"
      },
      {
        "title": "Malformed or older device-pairing records no longer stop `openclaw devices...",
        "description": "Malformed or older device-pairing records no longer stop `openclaw devices list` from showing pending approval requests, while valid roles still appear normally. [#93504](https://github.com/openclaw/openclaw/pull/93504) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/93504"
      },
      {
        "title": "OpenClaw now rejects SSH targets with stray leading or trailing colons befo...",
        "description": "OpenClaw now rejects SSH targets with stray leading or trailing colons before they can produce invalid SSH configuration or tunnel startup failures for SSH-backed sandboxes and gateways. [#93887](https://github.com/openclaw/openclaw/pull/93887) Thanks @miorbnli.",
        "href": "https://github.com/openclaw/openclaw/issues/93887"
      },
      {
        "title": "Users whose non-interactive setup fails its local gateway health check now...",
        "description": "Users whose non-interactive setup fails its local gateway health check now get runnable `openclaw onboard --install-daemon` or `openclaw onboard --skip-health` recovery commands instead of unsupported `setup` flags. [#93994](https://github.com/openclaw/openclaw/pull/93994) Related [#93947](https://github.com/openclaw/openclaw/issues/93947). Thanks @bk-z1, @nianjiuzst.",
        "href": "https://github.com/openclaw/openclaw/issues/93994"
      },
      {
        "title": "Gateway health and probe checks now accept the same custom `--port` used to...",
        "description": "Gateway health and probe checks now accept the same custom `--port` used to start a local gateway, reject invalid ports early, and show the selected loopback target in JSON output. [#94687](https://github.com/openclaw/openclaw/pull/94687) Related [#79100](https://github.com/openclaw/openclaw/issues/79100). Thanks @bryantegomoh, @ozthedivine.",
        "href": "https://github.com/openclaw/openclaw/issues/94687"
      },
      {
        "title": "`gateway --force` now detects IPv4-only processes occupying the gateway por...",
        "description": "`gateway --force` now detects IPv4-only processes occupying the gateway port and still attempts cleanup when a port check is inconclusive, instead of mistakenly treating the port as free. [#94949](https://github.com/openclaw/openclaw/pull/94949) Related [#94426](https://github.com/openclaw/openclaw/issues/94426). Thanks @sunlit-deng, @vincentkoc, @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/94949"
      },
      {
        "title": "`openclaw config validate` now accepts command-based MCP server setups that...",
        "description": "`openclaw config validate` now accepts command-based MCP server setups that explicitly use `transport: \"stdio\"`, avoiding false validation errors while still rejecting invalid remote-style stdio configurations. [#95102](https://github.com/openclaw/openclaw/pull/95102) Related [#95082](https://github.com/openclaw/openclaw/issues/95082). Thanks @ken-jo, @lzyyzznl.",
        "href": "https://github.com/openclaw/openclaw/issues/95102"
      },
      {
        "title": "CLI image edits can now return multiple variants in one command with `--cou...",
        "description": "CLI image edits can now return multiple variants in one command with `--count <n>`, instead of being limited to the provider's default single result. [#95300](https://github.com/openclaw/openclaw/pull/95300) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/95300"
      },
      {
        "title": "`openclaw sessions export-trajectory` now finds sessions that other session...",
        "description": "`openclaw sessions export-trajectory` now finds sessions that other session commands can already see when custom, `~`-based, or `{agentId}`-templated stores are configured, without requiring the store path again. [#95570](https://github.com/openclaw/openclaw/pull/95570) Related [#95568](https://github.com/openclaw/openclaw/issues/95568). Thanks @youngting520.",
        "href": "https://github.com/openclaw/openclaw/issues/95570"
      },
      {
        "title": "Fixes `infer inspect --name <id> --json` showing flags that the matching CL...",
        "description": "Fixes `infer inspect --name <id> --json` showing flags that the matching CLI commands did not accept, so developers and operators can reliably discover supported model, auth, and transcription options. [#95719](https://github.com/openclaw/openclaw/pull/95719) Thanks @ly-wang19, @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/95719"
      },
      {
        "title": "People inspecting very large or out-of-order sessions can open usage detail...",
        "description": "People inspecting very large or out-of-order sessions can open usage details and still get the latest timestamped log entries without OpenClaw retaining the entire parsed log history in memory. [#96019](https://github.com/openclaw/openclaw/pull/96019) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96019"
      },
      {
        "title": "Operators can now set up the auth monitor, systemd timer, and Termux widget...",
        "description": "Operators can now set up the auth monitor, systemd timer, and Termux widgets for their own OpenClaw host without first replacing maintainer-specific hostnames and filesystem paths. [af3e509](https://github.com/openclaw/openclaw/commit/af3e509ab823dac5f91b16915ee7067b369656a3) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "Native Windows crabbox hydration now selects the required Windows daemon jo...",
        "description": "Native Windows crabbox hydration now selects the required Windows daemon job automatically, avoiding failed or misrouted runs while leaving WSL2 and explicit job overrides unchanged. [d5d9a82](https://github.com/openclaw/openclaw/commit/d5d9a8256d6bc2ff8d699152923357bd61c606c1) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      },
      {
        "title": "People setting a local agent avatar can avoid missing images by keeping wor...",
        "description": "People setting a local agent avatar can avoid missing images by keeping workspace-relative files under 2 MB, while HTTP(S) and data URI avatars are not subject to that limit. [#78884](https://github.com/openclaw/openclaw/pull/78884) Related [#65312](https://github.com/openclaw/openclaw/issues/65312). Thanks @wangjieweb3-design, @nyx-nocturna.",
        "href": "https://github.com/openclaw/openclaw/issues/78884"
      },
      {
        "title": "OpenClaw's default agent instructions now ask agents to check for suitable...",
        "description": "OpenClaw's default agent instructions now ask agents to check for suitable free or open-source solutions before proposing a custom build, while still allowing custom work when it is the better fit. [#86608](https://github.com/openclaw/openclaw/pull/86608) Thanks @cablackmon.",
        "href": "https://github.com/openclaw/openclaw/issues/86608"
      },
      {
        "title": "Plugin authors can now use the documented `targetSessionKey` on `subagent_e...",
        "description": "Plugin authors can now use the documented `targetSessionKey` on `subagent_ended` events to match them with the corresponding spawn, instead of relying on `agentId` or `childSessionKey` fields that are not emitted. [#95191](https://github.com/openclaw/openclaw/pull/95191) Related [#95186](https://github.com/openclaw/openclaw/issues/95186). Thanks @ken-jo, @mahaohao-ch.",
        "href": "https://github.com/openclaw/openclaw/issues/95191"
      },
      {
        "title": "ClawHub skill links in OpenClaw docs and showcase cards now open the canoni...",
        "description": "ClawHub skill links in OpenClaw docs and showcase cards now open the canonical owner-qualified pages, and install examples use copy-ready `openclaw skills install @owner/<slug>` references instead of older bare-slug routes. [#95972](https://github.com/openclaw/openclaw/pull/95972) Thanks @patrick-erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/95972"
      },
      {
        "title": "SDK applications now receive `tool",
        "description": "SDK applications now receive `tool.call.failed` when terminal tools fail or are blocked, instead of a misleading completion event, so existing failure handling can react correctly. [#95383](https://github.com/openclaw/openclaw/pull/95383) Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/95383"
      },
      {
        "title": "Fixes cron add and update requests being rejected when recognized job field...",
        "description": "Fixes cron add and update requests being rejected when recognized job fields arrive with harmless trailing spaces, so schedules can be saved without relaxing checks for ambiguous or unsafe input. [#95674](https://github.com/openclaw/openclaw/pull/95674) Related [#95407](https://github.com/openclaw/openclaw/issues/95407). Thanks @nassiel, @zw-xysk.",
        "href": "https://github.com/openclaw/openclaw/issues/95674"
      },
      {
        "title": "Codex subagent monitoring handles large sets of child agents and transcript...",
        "description": "Codex subagent monitoring handles large sets of child agents and transcript files with less unnecessary scanning, while older transcript filename formats continue to resolve as before. [#96085](https://github.com/openclaw/openclaw/pull/96085) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/96085"
      },
      {
        "title": "Fixes native Windows crabbox hydration getting stuck or missing handoffs wh...",
        "description": "Fixes native Windows crabbox hydration getting stuck or missing handoffs when the runner and daemon use different home directories, so both can find the same job state and stop files. [f354889](https://github.com/openclaw/openclaw/commit/f354889efa1c8bafca9304767afba2c270add549) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026611"
      }
    ],
    "fixes": []
  },
  {
    "version": "2026.6.10",
    "date": "2026.6.10",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610",
    "features": [
      {
        "title": "Adds [`/fast auto`](https",
        "description": "//docs.openclaw.ai/tools/thinking) so short conversational calls can start quickly, while longer or fallback work returns to normal mode with the effective state still visible. [PR #85104](https://github.com/openclaw/openclaw/pull/85104), [Issue #85087](https://github.com/openclaw/openclaw/issues/85087). Thanks @alexph-dev and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/85104"
      },
      {
        "title": "Shows the effective automatic fast-mode state in status instead of reducing...",
        "description": "Shows the effective automatic fast-mode state in status instead of reducing it to on/off, and avoids carrying a cleared Codex service-tier choice into later runs. [8845f2f](https://github.com/openclaw/openclaw/commit/8845f2fd6143becc37110ab5021dd5e1517f0cdc). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps automatic fast-mode timing consistent when a turn switches to a fallb...",
        "description": "Keeps automatic fast-mode timing consistent when a turn switches to a fallback model. [075091d](https://github.com/openclaw/openclaw/commit/075091d0cab94053ff094268efc0acb225d514f4). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps the original fast-mode timing and progress behavior when a live model...",
        "description": "Keeps the original fast-mode timing and progress behavior when a live model switch retries a turn. [d1e190f](https://github.com/openclaw/openclaw/commit/d1e190fbe822ad6ae4e660ce376b60ec9fdb0fba). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps automatic fast-mode progress and reset behavior distinct from explici...",
        "description": "Keeps automatic fast-mode progress and reset behavior distinct from explicit fast mode after a run switches modes. [20aec98](https://github.com/openclaw/openclaw/commit/20aec985545db7a24ea066e5bff1c47b789cbded). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Shows the effective fast-mode value in connected-agent sessions instead of...",
        "description": "Shows the effective fast-mode value in connected-agent sessions instead of the configured value, so status reflects what the session is actually using. [9509aa0](https://github.com/openclaw/openclaw/commit/9509aa063c0ef3e32be1516fcb0c23606b6d5c7b). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps the effective automatic fast-mode setting visible through fallback tr...",
        "description": "Keeps the effective automatic fast-mode setting visible through fallback transitions in connected-agent sessions. [7f5423c](https://github.com/openclaw/openclaw/commit/7f5423ca97174a3f16c211db54a6c96e5b3a6089). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps automatic fast-mode timing and progress consistent when reply and [sc...",
        "description": "Keeps automatic fast-mode timing and progress consistent when reply and [scheduled-agent runs](https://docs.openclaw.ai/automation/cron-jobs) retry or switch models. [6c29f88](https://github.com/openclaw/openclaw/commit/6c29f88913796bfe05696556cd82246670b126f0). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps fast-mode cleanup and status consistent when a run switches between f...",
        "description": "Keeps fast-mode cleanup and status consistent when a run switches between fallback models. [c4694f8](https://github.com/openclaw/openclaw/commit/c4694f84ffd52064f89609098cc4f8570fb72e1b). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Shows the automatic fast-mode reset only when fallback work is finished, so...",
        "description": "Shows the automatic fast-mode reset only when fallback work is finished, so status messages match the end of the transition. [f4d93c8](https://github.com/openclaw/openclaw/commit/f4d93c855bff6930f5e5d739b95e0c2612ec4899). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Shows reset and delivery progress at the right time when auto-reply or othe...",
        "description": "Shows reset and delivery progress at the right time when auto-reply or other follow-up runs retry or leave automatic fast mode. [684e440](https://github.com/openclaw/openclaw/commit/684e44013778bd47d159e64b2595e4d09a92ebea). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Prevents the next turn after a [scheduled message](https",
        "description": "//docs.openclaw.ai/automation/cron-jobs) from losing what was delivered or whether delivery failed, so replies can use that context without exposing cron details in the channel. [PR #93580](https://github.com/openclaw/openclaw/pull/93580). Thanks @jalehman and @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/issues/93580"
      },
      {
        "title": "Prevents streamed channel progress from dropping a repeated status that rep...",
        "description": "Prevents streamed channel progress from dropping a repeated status that represents a separate step, so each meaningful step remains visible in the draft. [2d42e52](https://github.com/openclaw/openclaw/commit/2d42e52ac5513e0bd824b8a0e069db83e04bc056). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Prevents keyed streamed progress from staying on an older status, so viewer...",
        "description": "Prevents keyed streamed progress from staying on an older status, so viewers see the latest state instead of stale text. [8bb6472](https://github.com/openclaw/openclaw/commit/8bb6472c4de2eea06f1ba31d6ed679e2ac4581b0). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Treats Zhipu/GLM overload responses as overloads, so a configured fallback...",
        "description": "Treats Zhipu/GLM overload responses as overloads, so a configured fallback is selected for the right reason instead of following the wrong failover path. [PR #93241](https://github.com/openclaw/openclaw/pull/93241), [Issue #93211](https://github.com/openclaw/openclaw/issues/93211). Thanks @0xghost42 and @zhengli0922.",
        "href": "https://github.com/openclaw/openclaw/issues/93241"
      },
      {
        "title": "Prevents Telegram, Slack, and Discord `/think` menus for live Ollama models...",
        "description": "Prevents Telegram, Slack, and Discord `/think` menus for live Ollama models from hiding supported levels, so users can choose valid reasoning settings without guessing. [PR #94067](https://github.com/openclaw/openclaw/pull/94067), [Issue #93835](https://github.com/openclaw/openclaw/issues/93835). Thanks @civiltox and @openperf.",
        "href": "https://github.com/openclaw/openclaw/issues/94067"
      },
      {
        "title": "Expands [`zai/glm-5.2` thinking choices](https",
        "description": "//docs.openclaw.ai/tools/thinking) beyond binary on/off and sends high or max requests as the intended Z.AI reasoning effort. [PR #94136](https://github.com/openclaw/openclaw/pull/94136). Thanks @borclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/94136"
      },
      {
        "title": "Prevents bundled [Z.ai GLM-5 models](https",
        "description": "//docs.openclaw.ai/providers/zai) from falling through to OpenAI and producing misleading API-key errors, so they use Z.AI by default. [PR #94461](https://github.com/openclaw/openclaw/pull/94461), [Issue #94269](https://github.com/openclaw/openclaw/issues/94269). Thanks @chrysb and @pandah97.",
        "href": "https://github.com/openclaw/openclaw/issues/94461"
      },
      {
        "title": "Adds GLM-5.2 and Kimi K2.7 Code to the [OpenCode Go catalog](https",
        "description": "//docs.openclaw.ai/providers/opencode-go) with current limits, so users can select the models from OpenClaw. [66f84a9](https://github.com/openclaw/openclaw/commit/66f84a9bf1082de26f92b2b3741cc2f34aba34fa). Thanks @samson1357924.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Corrects `kimi-k2",
        "description": "Corrects `kimi-k2.7-code` capability listings so OpenCode Go users are not offered unsupported video prompts when the model accepts text and images. [715dc71](https://github.com/openclaw/openclaw/commit/715dc718fc5a2a5d6f7e9ec16e0269382b726e83).",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Prevents first-run setup from skipping the selected provider's credential p...",
        "description": "Prevents first-run setup from skipping the selected provider's credential prompt after plugin installation, so onboarding continues with that provider instead of falling back to OpenAI. [PR #95792](https://github.com/openclaw/openclaw/pull/95792), [Issue #95765](https://github.com/openclaw/openclaw/issues/95765). Thanks @snowzlmbot.",
        "href": "https://github.com/openclaw/openclaw/issues/95792"
      },
      {
        "title": "Adds a durable [session-transcript SDK contract](https",
        "description": "//docs.openclaw.ai/plugins/sdk-runtime) so plugins can read, append, publish, and lock the intended transcript without treating [legacy file paths](https://docs.openclaw.ai/plugins/sdk-subpaths) as identity. [PR #95030](https://github.com/openclaw/openclaw/pull/95030). Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/95030"
      },
      {
        "title": "Prevents a shared direct-message [session](https",
        "description": "//docs.openclaw.ai/concepts/session) from carrying the previous [channel's identity](https://docs.openclaw.ai/channels/channel-routing) after a switch, so status, reactions, threads, and message references target the current channel. [PR #95328](https://github.com/openclaw/openclaw/pull/95328), [Issue #95325](https://github.com/openclaw/openclaw/issues/95325). Thanks @gorkem2020, @jalehman, and @zengwen-dt.",
        "href": "https://github.com/openclaw/openclaw/issues/95328"
      },
      {
        "title": "Keeps empty prompts separate from hook-added context during compaction or s...",
        "description": "Keeps empty prompts separate from hook-added context during compaction or session reuse in [Copilot and Codex sessions](https://docs.openclaw.ai/plugins/copilot), so prompt boundaries remain consistent. [PR #94838](https://github.com/openclaw/openclaw/pull/94838). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94838"
      },
      {
        "title": "Keeps [approval-sensitive Gateway and plugin tools](https",
        "description": "//docs.openclaw.ai/plugins/hooks) protected when connected extensions change, so configured safeguards continue to apply. [PR #94545](https://github.com/openclaw/openclaw/pull/94545). Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/94545"
      },
      {
        "title": "Prevents authenticated package-source tokens from being sent to an allowed...",
        "description": "Prevents authenticated package-source tokens from being sent to an allowed redirect on another origin, while the valid redirected download still completes. [b0df6dc](https://github.com/openclaw/openclaw/commit/b0df6dc10eb5b9e9fdca93063a16316f8589954e).",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Prevents [Docker](https",
        "description": "//docs.openclaw.ai/install/docker) and [Podman](https://docs.openclaw.ai/install/podman) setup from running unbounded on hosts where GNU timeout is installed as `gtimeout`, so image pulls, builds, and detached startup receive the intended guard. [62b2e9e](https://github.com/openclaw/openclaw/commit/62b2e9ef14b4be6fd396621c8e5e248331f08695).",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Prevents cleared [Codex service tiers](https",
        "description": "//docs.openclaw.ai/tools/thinking) from being persisted as explicit stale state, so resumed or switched conversations use the normal default instead. [cd32d9f](https://github.com/openclaw/openclaw/commit/cd32d9ff91caf84c0ead38796ef096cdc5bea06e). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Restores [ClawHub discovery](https",
        "description": "//docs.openclaw.ai/plugins/reference/stepfun) for the [StepFun provider](https://docs.openclaw.ai/providers/stepfun) plugin, so operators can install it through either ClawHub or npm. [ecb82f1](https://github.com/openclaw/openclaw/commit/ecb82f1be93024be23c1b191ebea92c63230b6c0). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026610"
      },
      {
        "title": "Keeps core [`openclaw doctor`](https",
        "description": "//docs.openclaw.ai/gateway/doctor) diagnostics in their normal order before extension checks, making lint and repair output easier to follow. [PR #86627](https://github.com/openclaw/openclaw/pull/86627). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/86627"
      }
    ],
    "fixes": []
  },
  {
    "version": "2026.6.9",
    "date": "2026.6.9",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202669",
    "features": [
      {
        "title": "**Richer Telegram delivery",
        "description": "** Telegram now sends rich HTML, preserves rich markdown and sticker paths, renders progress drafts and command output more faithfully, normalizes HTML tables safely, and keeps mentions and spooled handlers on the right delivery path. (#93286, #93164, #93124, #93364, #93130, #93002, #93088, #93281, #94891, #94856) Thanks @obviyus, @vincentkoc, @goutamadwant, @kesslerio, @NianJiuZst, @SweetSophia, @Marvinthebored, @aaajiao, @zhangguiping-xydt, @zhangqueping, and @jairrab.",
        "href": "https://github.com/openclaw/openclaw/issues/93286"
      },
      {
        "title": "**More dependable agent recovery",
        "description": "** retries, terminal outcomes, usage after compaction, session history repair, and reply reconciliation now keep more interrupted or partial turns moving toward a visible final result. (#92191, #93073, #93228, #93084, #93469, #93291, #90943) Thanks @ai-hpc, @lml2468, @fuller-stack-dev, @Hollychou924, @leno23, @de1tydev, @425072024, @wuwahe3, @drvoss, @yetval, @sandieman2, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92191"
      },
      {
        "title": "**A stronger Codex integration",
        "description": "** Codex gains automatic plugin approvals, GPT-5.3 Spark OAuth routing, remote-node `exec` as a dynamic tool, and more reliable app-server teardown and terminal outcomes. (#92625, #89133, #93654, #91767, #93287) Thanks @kevinslin, @VACInc, @vincentkoc, @JPKay-AI, and @aliahnaf2013-max.",
        "href": "https://github.com/openclaw/openclaw/issues/92625"
      },
      {
        "title": "**Standalone official provider plugins",
        "description": "** external provider packages are now first-class npm releases, externally installed channel plugins load at Gateway startup, and StepFun is available from npm and ClawHub. (#93470) Thanks @sunlit-deng, @cxdnicole, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93470"
      },
      {
        "title": "**More capable web and native clients",
        "description": "** the Control UI adds a session workspace rail and extension health, iOS adds Watch controls, and Android shows chat context. (#92856, #91952, #93387, #92837) Thanks @Solvely-Colin, @jalehman, @joshavant, and @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/92856"
      },
      {
        "title": "**More useful search and skills",
        "description": "** Codex Hosted Search is available, key-free search providers remain deliberate opt-ins, and ClawHub skill installs retain verified source provenance. (#93446, #93616, #93283, #93506) Thanks @fuller-stack-dev, @davemorin, @momothemage, @nmccready-tars, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93446"
      },
      {
        "title": "Providers and auth",
        "description": "add Codex Hosted Search, improve Gemini CLI OAuth behind proxies, and keep external provider onboarding on current choices and package metadata. (#93446, #92815) Thanks @fuller-stack-dev, @yetval, @EvetteYoung, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93446"
      },
      {
        "title": "Plugins and installs",
        "description": "externalized official providers publish as independent npm packages, Gateway discovers installed channel plugins at startup, and StepFun installs from npm or ClawHub. (#93470) Thanks @sunlit-deng, @cxdnicole, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93470"
      },
      {
        "title": "Dashboard and mobile",
        "description": "add a session workspace rail, plugin health in status, compact cron lists, and iOS Watch controls. (#92856, #91952, #93395, #93387) Thanks @Solvely-Colin, @jalehman, @yu-xin-c, @centralpc, @joshavant, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92856"
      },
      {
        "title": "Codex, observability, and skills",
        "description": "add automatic plugin approvals and SecretRefs, preserve ClawHub skill provenance, add OpenTelemetry log export, and expose remote-node execution to Codex when a node is connected. (#92625, #94324, #93283, #94561, #93654) Thanks @kevinslin, @kevinlin-openai, @momothemage, @nmccready-tars, @jesse-merhi, @vincentkoc, and @JPKay-AI.",
        "href": "https://github.com/openclaw/openclaw/issues/92625"
      },
      {
        "title": "QA and release engineering",
        "description": "QA scenarios now use YAML, with broader profile evidence and release coverage for the plugin and channel matrix. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202669"
      },
      {
        "title": "**PR #92154** fix(qqbot)",
        "description": "gate private group commands and close strict command visibility gaps. Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/92154"
      },
      {
        "title": "**PR #90463** refactor",
        "description": "add session accessor seam with gateway consumer. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/90463"
      },
      {
        "title": "**PR #88656** Drop reasoning-only length turns from replay",
        "description": "**PR #88656** Drop reasoning-only length turns from replay. Thanks @abel-zer0.",
        "href": "https://github.com/openclaw/openclaw/issues/88656"
      },
      {
        "title": "**PR #92856** feat(webui)",
        "description": "add session workspace rail. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/issues/92856"
      },
      {
        "title": "**PR #92845** docs(browser-control)",
        "description": "document OPENCLAW_EAGER_BROWSER_CONTROL_SERVER requirement. Related #92841. Thanks @liuhao1024 and @jeugregg.",
        "href": "https://github.com/openclaw/openclaw/issues/92845"
      },
      {
        "title": "**PR #82366** fix",
        "description": "use passive periodic sqlite wal checkpoints. Related #81715. Thanks @honor2030 and @KrasimirKralev.",
        "href": "https://github.com/openclaw/openclaw/issues/82366"
      },
      {
        "title": "**PR #92815** fix(google)",
        "description": "route Gemini CLI OAuth through the env proxy (#46184). Thanks @yetval and @EvetteYoung.",
        "href": "https://github.com/openclaw/openclaw/pull/46184"
      },
      {
        "title": "**PR #91331** fix(mattermost)",
        "description": "merge progress preview lines by identity. Related #89761. Thanks @iloveleon19 and @leonthe8th and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91331"
      },
      {
        "title": "**PR #92909** fix(tui)",
        "description": "keep spinner active when toggling tools. Related #49763. Thanks @ZengWen-DT and @Zeng-wen and @vincentkoc and @CrimsonDump.",
        "href": "https://github.com/openclaw/openclaw/issues/92909"
      },
      {
        "title": "**PR #92904** fix(elevenlabs)",
        "description": "use current TTS model ids. Thanks @vortexopenclaw and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92904"
      },
      {
        "title": "**PR #92642** fix #86872",
        "description": "Subagent run reports success but fails to write output file. Thanks @zhangguiping-xydt and @vincentkoc and @zapper35.",
        "href": "https://github.com/openclaw/openclaw/issues/92642"
      },
      {
        "title": "**PR #89122** refactor",
        "description": "route command session reads through seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89122"
      },
      {
        "title": "**PR #90943** fix(reply)",
        "description": "deliver final reply when queued follow-up claims session; scope dedupe to routed thread. Thanks @sandieman2 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90943"
      },
      {
        "title": "**PR #92894** fix(skills)",
        "description": "keep managed prompt paths readable. Related #92875. Thanks @kesslerio and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/92894"
      },
      {
        "title": "**PR #39617** fix",
        "description": "reload config in slash command routing so dmScope is respected. Related #39605. Thanks @Ciward.",
        "href": "https://github.com/openclaw/openclaw/issues/39617"
      },
      {
        "title": "**PR #92191** fix(agents)",
        "description": "retry thinking-only errored turns. Related #91953. Thanks @ai-hpc and @lml2468.",
        "href": "https://github.com/openclaw/openclaw/issues/92191"
      },
      {
        "title": "**PR #92891** fix(memory)",
        "description": "clean stale reindex temp files. Related #92874. Thanks @ZengWen-DT and @Zeng-wen and @vincentkoc and @potterdigital.",
        "href": "https://github.com/openclaw/openclaw/issues/92891"
      },
      {
        "title": "**PR #93005** Add OpenRouter Fusion guidance and prompt context",
        "description": "**PR #93005** Add OpenRouter Fusion guidance and prompt context. Related #92984. Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/93005"
      },
      {
        "title": "**PR #88792** fix(state)",
        "description": "harden sqlite path caching. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88792"
      },
      {
        "title": "**PR #93022** fix(gateway)",
        "description": "repair usage cost aggregation across agents. Thanks @luke-skywalker-open-claw and @stablegenius49.",
        "href": "https://github.com/openclaw/openclaw/issues/93022"
      },
      {
        "title": "**PR #93020** fix(telegram)",
        "description": "cool down transient sendChatAction failures. Related #56096. Thanks @Boulea7 and @sumaiazaman and @Pick-cat and @cal-rufus.",
        "href": "https://github.com/openclaw/openclaw/issues/93020"
      },
      {
        "title": "**PR #93002** fix(telegram)",
        "description": "clear progress drafts before visible tool output. Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/93002"
      },
      {
        "title": "**PR #89160** fix(agents)",
        "description": "detect truncated API responses to prevent silent session hang. Related #89051. Thanks @joelnishanth and @ArthurusDent.",
        "href": "https://github.com/openclaw/openclaw/issues/89160"
      },
      {
        "title": "**PR #93009** fix(agents)",
        "description": "make wrapToolWithBeforeToolCallHook idempotent to prevent double hook execution (fixes #92973). Thanks @zenglingbiao and @dertbv.",
        "href": "https://github.com/openclaw/openclaw/issues/92973"
      },
      {
        "title": "**PR #92991** fix(agents)",
        "description": "tolerate missing attribution baseUrl. Related #92974. Thanks @samrusani and @Haderach-Ram.",
        "href": "https://github.com/openclaw/openclaw/issues/92991"
      },
      {
        "title": "**PR #92913** fix(opencode-go)",
        "description": "register model catalog to fix context window detection. Related #92912. Thanks @kumaxs.",
        "href": "https://github.com/openclaw/openclaw/issues/92913"
      },
      {
        "title": "**PR #89129** refactor",
        "description": "route bundled plugin session callers through seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89129"
      },
      {
        "title": "**PR #93084** fix(agents)",
        "description": "preserve fresh usage after compaction. Related #50795. Thanks @Hollychou924 and @leno23 and @de1tydev and @425072024 and @vincentkoc and @wuwahe3.",
        "href": "https://github.com/openclaw/openclaw/issues/93084"
      },
      {
        "title": "**PR #92869** fix #90333",
        "description": "[Bug]: Discord image build aborts at step 66 — openclaw-build-messaging-plugins.py exits 1. Thanks @zhangguiping-xydt and @vincentkoc and @chriskosys.",
        "href": "https://github.com/openclaw/openclaw/issues/92869"
      },
      {
        "title": "**PR #93011** fix(gateway)",
        "description": "accept file-only input on /v1/responses (parity with image-only). Thanks @yetval and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93011"
      },
      {
        "title": "**PR #92915** Convert QA scenarios to YAML files",
        "description": "**PR #92915** Convert QA scenarios to YAML files. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92915"
      },
      {
        "title": "**PR #91767** Fix one-shot Codex app-server teardown",
        "description": "**PR #91767** Fix one-shot Codex app-server teardown. Thanks @aliahnaf2013-max.",
        "href": "https://github.com/openclaw/openclaw/issues/91767"
      },
      {
        "title": "**PR #92625** feat(codex)",
        "description": "add auto plugin approvals. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/92625"
      },
      {
        "title": "**PR #91587** test(qa)",
        "description": "add qa run --qa-profile and unified output summary/evidence. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91587"
      },
      {
        "title": "**PR #93104** test(reply)",
        "description": "seed channel fixtures for dedupe tests. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93104"
      },
      {
        "title": "**PR #93107** test(reply)",
        "description": "preserve telegram dedupe fallback. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93107"
      },
      {
        "title": "**PR #92954** fix(memory)",
        "description": "accept local default model path migration. Thanks @mushuiyu886 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92954"
      },
      {
        "title": "**PR #90936** fix(agents)",
        "description": "do not misclassify client-disconnect abort as run timeout. Related #90764. Thanks @openperf and @reginaldomarcilon.",
        "href": "https://github.com/openclaw/openclaw/issues/90936"
      },
      {
        "title": "**PR #90812** fix(voice-call)",
        "description": "preserve live Twilio streams in stale reaper. Related #79121. Thanks @Takhoffman and @sahibzada-allahyar and @donkeykong91.",
        "href": "https://github.com/openclaw/openclaw/issues/90812"
      },
      {
        "title": "**PR #93094** fix(whatsapp)",
        "description": "bound socket operations. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/93094"
      },
      {
        "title": "**PR #91629** fix(scripts)",
        "description": "add database-first legacy store guard. Related #91628. Thanks @galiniliev.",
        "href": "https://github.com/openclaw/openclaw/issues/91629"
      },
      {
        "title": "**PR #93124** fix(telegram)",
        "description": "render progress drafts as rich previews. Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/93124"
      },
      {
        "title": "**PR #93109** test(qa)",
        "description": "embed profile scorecard evidence. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93109"
      },
      {
        "title": "**PR #87298** test",
        "description": "add temp directory helper guidance. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/87298"
      },
      {
        "title": "**PR #92318** fix(cron)",
        "description": "require explicit message target proof. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92318"
      },
      {
        "title": "**PR #93137** fix(imessage)",
        "description": "honor disabled reply actions. Related #92142. Thanks @omarshahine and @dprev.",
        "href": "https://github.com/openclaw/openclaw/issues/93137"
      },
      {
        "title": "**PR #93134** fix(feishu)",
        "description": "pass card_msg_content_type to get full card content (fixes #78289). Thanks @liuhao1024 and @vincentkoc and @longdoubled7.",
        "href": "https://github.com/openclaw/openclaw/issues/78289"
      },
      {
        "title": "**PR #93138** fix(agents)",
        "description": "preserve literal current session resolution. Thanks @liuhao1024 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93138"
      },
      {
        "title": "**PR #91225** fix #83830",
        "description": "[Bug]: Dreaming diary repeats \"first day\" narrative every sweep — same early memories dominate snippets. Thanks @mushuiyu886 and @YinLiuLiu66.",
        "href": "https://github.com/openclaw/openclaw/issues/91225"
      },
      {
        "title": "**PR #93153** simplify QA evidence profile and mappings/coverage shape",
        "description": "**PR #93153** simplify QA evidence profile and mappings/coverage shape. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93153"
      },
      {
        "title": "**PR #93164** fix(telegram)",
        "description": "preserve rich markdown line breaks. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93164"
      },
      {
        "title": "**PR #93119** fix",
        "description": "accept mixed source/dist bundled roots. Related #87730. Thanks @arkyu2077 and @vincentkoc and @jasonftl.",
        "href": "https://github.com/openclaw/openclaw/issues/93119"
      },
      {
        "title": "**PR #93130** fix(telegram)",
        "description": "preserve sticker media paths. Related #83748. Thanks @goutamadwant and @vincentkoc and @aaajiao.",
        "href": "https://github.com/openclaw/openclaw/issues/93130"
      },
      {
        "title": "**PR #93073** fix(agents)",
        "description": "retry empty post-tool final turns. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/93073"
      },
      {
        "title": "**PR #91784** fix(voice-call)",
        "description": "require realtime websocket path boundary. Thanks @jason-allen-oneal.",
        "href": "https://github.com/openclaw/openclaw/issues/91784"
      },
      {
        "title": "**PR #89133** Restore GPT-5",
        "description": "**PR #89133** Restore GPT-5.3 Codex Spark OAuth routing. Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/issues/89133"
      },
      {
        "title": "**PR #91996** refactor",
        "description": "prune unused iOS code. Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/91996"
      },
      {
        "title": "**PR #90231** fix #69443",
        "description": "[Bug] Subagent RPC callback to WeChat session key routed to main session instead. Thanks @zhangguiping-xydt and @sliverp and @chen11221.",
        "href": "https://github.com/openclaw/openclaw/issues/90231"
      },
      {
        "title": "**PR #89920** fix(matrix)",
        "description": "replace recovered command progress lines. Thanks @bdjben and @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/89920"
      },
      {
        "title": "**PR #93159** fix(tui)",
        "description": "keep parent stdin paused after exit. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/93159"
      },
      {
        "title": "**PR #93201** fix(auto-reply)",
        "description": "clear pending-final state before honoring post-send abort (#89115). Thanks @amknight and @danashburn.",
        "href": "https://github.com/openclaw/openclaw/pull/89115"
      },
      {
        "title": "**PR #93228** fix(agents)",
        "description": "replace prose terminal classifiers. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/93228"
      },
      {
        "title": "**PR #93231** fix(status)",
        "description": "correct pinned model clear hint. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/93231"
      },
      {
        "title": "**PR #92428** fix(qqbot)",
        "description": "keep markdown table chunks valid. Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/92428"
      },
      {
        "title": "**PR #93220** fix(status)",
        "description": "avoid stale session context windows. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/93220"
      },
      {
        "title": "**PR #91957** perf(sessions)",
        "description": "share one enumeration across archive retention sweeps. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/91957"
      },
      {
        "title": "**PR #93281** fix(telegram)",
        "description": "recover pid-reused ingress claims. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/93281"
      },
      {
        "title": "**PR #93287** fix(codex)",
        "description": "preserve terminal outcome ordering.",
        "href": "https://github.com/openclaw/openclaw/issues/93287"
      },
      {
        "title": "**PR #93182** fix(memory)",
        "description": "clean rollback-journal reindex temp sidecar on NFS stores. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93182"
      },
      {
        "title": "**PR #93283** Persist ClawHub skill install provenance",
        "description": "**PR #93283** Persist ClawHub skill install provenance. Related #92077. Thanks @momothemage and @nmccready-tars.",
        "href": "https://github.com/openclaw/openclaw/issues/93283"
      },
      {
        "title": "**PR #88872** fix",
        "description": "attribute spawned task runs to child agent. Related #66670. Thanks @Alix-007 and @Neomail2.",
        "href": "https://github.com/openclaw/openclaw/issues/88872"
      },
      {
        "title": "**PR #92837** fix(android)",
        "description": "show live chat context usage. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/92837"
      },
      {
        "title": "**PR #93325** fix(cli)",
        "description": "harden official plugin recovery. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93325"
      },
      {
        "title": "**PR #93286** feat(telegram)",
        "description": "send rich messages as rich html. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/93286"
      },
      {
        "title": "**PR #92910** fix(memory-core)",
        "description": "safely refresh qmd index during collection repair.",
        "href": "https://github.com/openclaw/openclaw/issues/92910"
      },
      {
        "title": "**PR #93329** fix(cli)",
        "description": "allow zero Discord timeout duration. Related #93327. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/93329"
      },
      {
        "title": "**PR #91625** fix(cron)",
        "description": "add cron edit --clear-model to clear a job's model override. Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/91625"
      },
      {
        "title": "**PR #91691** [AI] fix(memory)",
        "description": "prevent empty-string expectedModel in resolveMemory…. Thanks @xydt-tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/issues/91691"
      },
      {
        "title": "**PR #93006** fix(tui)",
        "description": "keep stderr visible when local shell stdout fills the output cap. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93006"
      },
      {
        "title": "**PR #93001** fix(daemon)",
        "description": "prefer stderr over stale stdout in gateway restart diagnostics. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93001"
      },
      {
        "title": "**PR #91117** refactor",
        "description": "remove dead code and improve string concatenation. Thanks @Pommelle.",
        "href": "https://github.com/openclaw/openclaw/issues/91117"
      },
      {
        "title": "**PR #90893** fix(models)",
        "description": "mask paste-token input in CLI auth prompt. Thanks @anurag-bg-neu.",
        "href": "https://github.com/openclaw/openclaw/issues/90893"
      },
      {
        "title": "**PR #90571** fix(configure)",
        "description": "mask gateway password input in CLI wizard prompt. Thanks @anurag-bg-neu.",
        "href": "https://github.com/openclaw/openclaw/issues/90571"
      },
      {
        "title": "**PR #91768** fix(ios)",
        "description": "respect chat header safe area. Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/91768"
      },
      {
        "title": "**PR #93245** fix(cron)",
        "description": "resolve lastRunStatus in cron list/show human output. Thanks @ly-wang19.",
        "href": "https://github.com/openclaw/openclaw/issues/93245"
      },
      {
        "title": "**PR #78765** fix(tui)",
        "description": "avoid inserting spaces into long CJK text. Thanks @hpt.",
        "href": "https://github.com/openclaw/openclaw/issues/78765"
      },
      {
        "title": "**PR #91776** fix(ios)",
        "description": "refresh permission rows after grants. Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/91776"
      },
      {
        "title": "**PR #92817** fix(cron)",
        "description": "trust agent output when channel is unresolved without explicit delivery. Related #90664. Thanks @fsdwen and @dertbv.",
        "href": "https://github.com/openclaw/openclaw/issues/92817"
      },
      {
        "title": "**PR #93297** fix(control-ui)",
        "description": "respect agents.defaults.timeFormat for timestamps. Related #58147. Thanks @ZengWen-DT and @Zeng-wen and @TommoT2.",
        "href": "https://github.com/openclaw/openclaw/issues/93297"
      },
      {
        "title": "**PR #93364** Fix Telegram rich progress command output",
        "description": "**PR #93364** Fix Telegram rich progress command output. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/93364"
      },
      {
        "title": "**PR #91952** feat(status)",
        "description": "surface plugin health. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/91952"
      },
      {
        "title": "**PR #75025** fix(heartbeat)",
        "description": "refresh stale Current time line on every helper call (#44993). Thanks @MoerAI and @mclee1975.",
        "href": "https://github.com/openclaw/openclaw/pull/44993"
      },
      {
        "title": "**PR #90992** docs(windows)",
        "description": "fix WSL gateway-autostart recipe for WSL ≥ 2.6.1.0 idle-termination. Thanks @spencer2211.",
        "href": "https://github.com/openclaw/openclaw/issues/90992"
      },
      {
        "title": "**PR #86544** fix(cli)",
        "description": "show Gemini CLI runtime auth status. Related #79585. Thanks @giodl73-repo and @fabricefoy.",
        "href": "https://github.com/openclaw/openclaw/issues/86544"
      },
      {
        "title": "**PR #88945** fix(plugins)",
        "description": "serialize binding approval saves. Related #64065. Thanks @Alix-007 and @lihaokun.",
        "href": "https://github.com/openclaw/openclaw/issues/88945"
      },
      {
        "title": "**PR #90115** fix(gateway)",
        "description": "pass managed inbound PDFs through chat.send. Related #90097. Thanks @harjothkhara and @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/issues/90115"
      },
      {
        "title": "**PR #74613** docs(cli)",
        "description": "add agent selector to CLI backend quick start. Related #68940. Thanks @vyctorbrzezowski and @drmarcopapa.",
        "href": "https://github.com/openclaw/openclaw/issues/74613"
      },
      {
        "title": "**PR #89121** refactor",
        "description": "add transcript reader seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89121"
      },
      {
        "title": "**PR #84434** fix(cli)",
        "description": "disable ScheduleWakeup/CronCreate in --print claude runs. Thanks @SkyWolfDreamer.",
        "href": "https://github.com/openclaw/openclaw/issues/84434"
      },
      {
        "title": "**PR #66985** fix(agents)",
        "description": "resolve requestedNode to canonical ID before boundNode comparison. Related #87213. Thanks @mujiannan.",
        "href": "https://github.com/openclaw/openclaw/issues/66985"
      },
      {
        "title": "**PR #91488** fix(reply)",
        "description": "project preflight compaction gate by next-input size on fresh tokens. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/91488"
      },
      {
        "title": "**PR #93353** fix(plugins)",
        "description": "require owner for plugin writes. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93353"
      },
      {
        "title": "**PR #91499** fix(cron)",
        "description": "preserve scheduled turn tool policy [AI]. Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/issues/91499"
      },
      {
        "title": "**PR #90412** fix(sessions)",
        "description": "cache warm transcript reads to avoid per-turn re-parse. Related #83943. Thanks @Alix-007 and @yyds-xxxx.",
        "href": "https://github.com/openclaw/openclaw/issues/90412"
      },
      {
        "title": "**PR #93118** fix(gateway)",
        "description": "guard fast-path startup migrations. Related #93032. Thanks @openperf and @Haderach-Ram.",
        "href": "https://github.com/openclaw/openclaw/issues/93118"
      },
      {
        "title": "**PR #93355** fix(ci)",
        "description": "verify performance workflow downloads. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93355"
      },
      {
        "title": "**PR #93358** fix(outbound)",
        "description": "guard cross-context message mutations. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93358"
      },
      {
        "title": "**PR #93362** fix(flock)",
        "description": "bind allow-always to wrapped command. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93362"
      },
      {
        "title": "**PR #92578** refactor(whatsapp)",
        "description": "add inbound admission foundation. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/92578"
      },
      {
        "title": "**PR #89547** Control Telegram group history context",
        "description": "**PR #89547** Control Telegram group history context. Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/issues/89547"
      },
      {
        "title": "**PR #89201** refactor",
        "description": "add transcript runtime identity contract. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89201"
      },
      {
        "title": "**PR #93357** fix(plugins)",
        "description": "enforce install policy in wrappers. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93357"
      },
      {
        "title": "**PR #93156** fix(doctor)",
        "description": "import default-agent auth profiles into sqlite. Related #93145. Thanks @Pick-cat and @sallyom and @Tazio7.",
        "href": "https://github.com/openclaw/openclaw/issues/93156"
      },
      {
        "title": "**PR #93179** Add slim evidence mode for QA profile evidence",
        "description": "**PR #93179** Add slim evidence mode for QA profile evidence. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93179"
      },
      {
        "title": "**PR #93349** fix(control-ui)",
        "description": "keep workboard card titles visible in overflowing columns (fixes #91717). Thanks @Pick-cat and @NicoBoom13.",
        "href": "https://github.com/openclaw/openclaw/issues/91717"
      },
      {
        "title": "**PR #93324** fix(cli)",
        "description": "accept --no-color after subcommands. Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/93324"
      },
      {
        "title": "**PR #89621** Return Google Chat thread metadata from message sends",
        "description": "**PR #89621** Return Google Chat thread metadata from message sends. Thanks @franco-viotti.",
        "href": "https://github.com/openclaw/openclaw/issues/89621"
      },
      {
        "title": "**PR #82458** fix(infra)",
        "description": "drop duplicated \"restart\" word in restart-sentinel summary. Thanks @jameswniu.",
        "href": "https://github.com/openclaw/openclaw/issues/82458"
      },
      {
        "title": "**PR #85471** Suppress cron announce control replies",
        "description": "**PR #85471** Suppress cron announce control replies. Related #85421. Thanks @TurboTheTurtle and @leatherneck-33.",
        "href": "https://github.com/openclaw/openclaw/issues/85471"
      },
      {
        "title": "**PR #85316** fix(auth)",
        "description": "keep alias-compatible auth-profile overrides instead of clearing them. Thanks @SkyWolfDreamer.",
        "href": "https://github.com/openclaw/openclaw/issues/85316"
      },
      {
        "title": "**PR #89260** fix(doctor)",
        "description": "separate platform-incompatible skills from missing requirements. Related #89232. Thanks @Alix-007 and @CameronWeller.",
        "href": "https://github.com/openclaw/openclaw/issues/89260"
      },
      {
        "title": "**PR #90846** fix(media)",
        "description": "stop pruning media on write; let the configured timer do it. Thanks @lundog.",
        "href": "https://github.com/openclaw/openclaw/issues/90846"
      },
      {
        "title": "**PR #88062** fix(logging)",
        "description": "avoid stalled warnings for active model calls. Thanks @litang9.",
        "href": "https://github.com/openclaw/openclaw/issues/88062"
      },
      {
        "title": "**PR #93308** fix(discord)",
        "description": "reject malformed realtime consult calls. Thanks @khoek.",
        "href": "https://github.com/openclaw/openclaw/issues/93308"
      },
      {
        "title": "**PR #93334** fix(whatsapp)",
        "description": "notify user when trailing media send fails instead of silent drop. Thanks @rushindrasinha.",
        "href": "https://github.com/openclaw/openclaw/issues/93334"
      },
      {
        "title": "**PR #92575** fix(sessions)",
        "description": "preserve user behavior overrides across daily/idle rollover (#92562) [AI-assisted]. Thanks @harjothkhara and @civiltox.",
        "href": "https://github.com/openclaw/openclaw/pull/92562"
      },
      {
        "title": "**PR #89124** refactor",
        "description": "route auto-reply sessions through session seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89124"
      },
      {
        "title": "**PR #93431** fix",
        "description": "stabilize transcript cache and CLI env isolation. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/93431"
      },
      {
        "title": "**PR #93412** fix(discord)",
        "description": "suppress tool progress for message-tool replies. Thanks @mgunnin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93412"
      },
      {
        "title": "**PR #93409** fix(whatsapp)",
        "description": "stop markdownToWhatsApp dropping code spans followed by a digit. Thanks @rushindrasinha.",
        "href": "https://github.com/openclaw/openclaw/issues/93409"
      },
      {
        "title": "**PR #93295** fix(memory)",
        "description": "swap rollback-journal sidecar during atomic reindex. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93295"
      },
      {
        "title": "**PR #93076** fix(whatsapp)",
        "description": "preserve auth on terminal disconnects. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/93076"
      },
      {
        "title": "**PR #93435** fix(agents)",
        "description": "bound autoreview scope. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93435"
      },
      {
        "title": "**PR #93279** fix(telegram)",
        "description": "restore readable default text sends. Related #93263. Thanks @NianJiuZst and @SweetSophia.",
        "href": "https://github.com/openclaw/openclaw/issues/93279"
      },
      {
        "title": "**PR #93429** fix(line)",
        "description": "cap carousel column text at 60 chars when a title or image is set. Thanks @harjothkhara and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93429"
      },
      {
        "title": "**PR #93428** fix(agents)",
        "description": "resolve configured default model in runEmbeddedAgent (fixes #93419). Thanks @zenglingbiao and @vincentkoc and @danielgerlag.",
        "href": "https://github.com/openclaw/openclaw/issues/93419"
      },
      {
        "title": "**PR #93427** fix(tui)",
        "description": "show activity indicator for system-injected runs. Related #51825. Thanks @ZengWen-DT and @vincentkoc and @Zeng-wen and @AlethiaQuizForge.",
        "href": "https://github.com/openclaw/openclaw/issues/93427"
      },
      {
        "title": "**PR #90003** feat(policy)",
        "description": "cover exec approvals artifact. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/90003"
      },
      {
        "title": "**PR #93448** fix(guards)",
        "description": "allow auth profile sqlite reader. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/93448"
      },
      {
        "title": "**PR #93424** fix(mattermost)",
        "description": "keep message tool replies in threads. Thanks @amknight and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93424"
      },
      {
        "title": "**PR #93418** fix(telegram)",
        "description": "forward Bot API 10.1 rich_message content to agent. Related #93410. Thanks @xzh-icenter and @vincentkoc and @0pen7ech.",
        "href": "https://github.com/openclaw/openclaw/issues/93418"
      },
      {
        "title": "**PR #93175** test(qa)",
        "description": "taxonomy profiles: includeAllCategories for release profile, update some coverage. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93175"
      },
      {
        "title": "**PR #93456** fix(agents)",
        "description": "handle string assistant message content. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93456"
      },
      {
        "title": "**PR #93441** fix(outbound)",
        "description": "ignore schema-padded poll metadata on send. Related #43015. Thanks @weichengdeng and @charzhou.",
        "href": "https://github.com/openclaw/openclaw/issues/93441"
      },
      {
        "title": "**PR #93443** fix(gateway)",
        "description": "block internal HTTP session overrides. Thanks @RichardCao.",
        "href": "https://github.com/openclaw/openclaw/issues/93443"
      },
      {
        "title": "**PR #93454** fix(sqlite)",
        "description": "disable WAL on network filesystems. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93454"
      },
      {
        "title": "**PR #90275** test",
        "description": "make install-safe-path symlink tests compatible with Windows. Thanks @aniruddhaadak80.",
        "href": "https://github.com/openclaw/openclaw/issues/90275"
      },
      {
        "title": "**PR #93464** fix(qa)",
        "description": "suppress empty WhatsApp debug artifacts. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93464"
      },
      {
        "title": "**PR #90861** fix(cli)",
        "description": "preserve sessions_yield over MCP. Related #77426. Thanks @zhangguiping-xydt and @jarvisagimuspicard-hub.",
        "href": "https://github.com/openclaw/openclaw/issues/90861"
      },
      {
        "title": "**PR #90946** fix(infra)",
        "description": "preserve inherited gateway PID across reparent during cleanup. Thanks @amittell.",
        "href": "https://github.com/openclaw/openclaw/issues/90946"
      },
      {
        "title": "**PR #92220** fix(media)",
        "description": "extract large managed inbound PDFs via media-understanding. Related #90096, #90097. Thanks @amknight and @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/issues/92220"
      },
      {
        "title": "**PR #91208** fix #91047",
        "description": "Plugin session-extension registry not pinned; sessions.pluginPatch fails after agent/subagent plugin-load churn. Thanks @mushuiyu886 and @teamadams.",
        "href": "https://github.com/openclaw/openclaw/issues/91208"
      },
      {
        "title": "**PR #92111** fix(update)",
        "description": "restart managed gateway when update handoff fails after stop. Related #92088. Thanks @yetval and @ofan.",
        "href": "https://github.com/openclaw/openclaw/issues/92111"
      },
      {
        "title": "**PR #93238** fix(agents)",
        "description": "honor disabled envelope timestamps at model boundary. Thanks @osolmaz.",
        "href": "https://github.com/openclaw/openclaw/issues/93238"
      },
      {
        "title": "**PR #93343** fix(codex)",
        "description": "de-duplicate commentary notes across the raw response lane. Related #93296. Thanks @Marvinthebored and @Peetiegonzalez.",
        "href": "https://github.com/openclaw/openclaw/issues/93343"
      },
      {
        "title": "**PR #93361** fix(openshell)",
        "description": "pin mirror remote mutations. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93361"
      },
      {
        "title": "**PR #93354** fix(discord)",
        "description": "block cross-provider guild admin actions. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93354"
      },
      {
        "title": "**PR #92178** fix(gateway)",
        "description": "normalize malformed paired access lists. Related #90654. Thanks @wangmiao0668000666 and @EmilioNicolas.",
        "href": "https://github.com/openclaw/openclaw/issues/92178"
      },
      {
        "title": "**PR #85254** perf(plugins)",
        "description": "thread prepared manifestPlugins through runtime model-id normalize chain. Thanks @zeroaltitude.",
        "href": "https://github.com/openclaw/openclaw/issues/85254"
      },
      {
        "title": "**PR #93489** Add ClawHub content rights docs to sidebar",
        "description": "**PR #93489** Add ClawHub content rights docs to sidebar. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/93489"
      },
      {
        "title": "**PR #93466** [AI] fix(feishu)",
        "description": "guard against missing inbound in channelRuntime fallback. Thanks @xydt-tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/issues/93466"
      },
      {
        "title": "**PR #93460** fix(cli)",
        "description": "honor --log-level in route-first commands. Related #93457. Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/93460"
      },
      {
        "title": "**PR #93495** fix(cron)",
        "description": "clear delivery routing fields from cron edit. Thanks @ly-wang19 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93495"
      },
      {
        "title": "**PR #93494** docs",
        "description": "point PR landing at maintainer workflow. Thanks @fuller-stack-dev and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93494"
      },
      {
        "title": "**PR #93487** fix(ui)",
        "description": "add agent selector to skills page. Related #78553. Thanks @goutamadwant and @vincentkoc and @xiaobu1112.",
        "href": "https://github.com/openclaw/openclaw/issues/93487"
      },
      {
        "title": "**PR #93488** fix(discord)",
        "description": "apply tool status emojis immediately to avoid override by thinking reactions. Related #92715. Thanks @lzyyzznl and @vincentkoc and @darealgege.",
        "href": "https://github.com/openclaw/openclaw/issues/93488"
      },
      {
        "title": "**PR #93055** fix(ui)",
        "description": "restore provider usage pill in desktop chat composer [AI]. Thanks @harjothkhara.",
        "href": "https://github.com/openclaw/openclaw/issues/93055"
      },
      {
        "title": "**PR #83156** fix(matrix)",
        "description": "accept bracketed display-name mentions. Related #83142. Thanks @wdx-agent-io and @wdongxv.",
        "href": "https://github.com/openclaw/openclaw/issues/83156"
      },
      {
        "title": "**PR #93333** fix(auto-reply)",
        "description": "redact secrets in /debug show and /debug set output. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93333"
      },
      {
        "title": "**PR #88496** fix(auto-reply)",
        "description": "redact secrets in config show output. Related #65623. Thanks @jason-allen-oneal and @coygeek.",
        "href": "https://github.com/openclaw/openclaw/issues/88496"
      },
      {
        "title": "**PR #93105** fix(doctor)",
        "description": "repair null agents.list[].workspace values. Related #77718. Thanks @xydigit-sj and @slideshow-dingo.",
        "href": "https://github.com/openclaw/openclaw/issues/93105"
      },
      {
        "title": "**PR #73923** fix(ui)",
        "description": "preserve gateway token during safe websocket url edits. Related #41545. Thanks @wsyjh8.",
        "href": "https://github.com/openclaw/openclaw/issues/73923"
      },
      {
        "title": "**PR #88970** fix #85871",
        "description": "[Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23). Thanks @zhangguiping-xydt and @vincentkoc and @carlbjson.",
        "href": "https://github.com/openclaw/openclaw/issues/88970"
      },
      {
        "title": "**PR #93511** fix(imessage)",
        "description": "normalize leading NUL echo-cache prefixes. Thanks @vincentkoc and @drvoss.",
        "href": "https://github.com/openclaw/openclaw/issues/93511"
      },
      {
        "title": "**PR #92594** [Bug]",
        "description": "ollama-cloud runtime fails DNS lookup for ai.ollama.com, while ollama/<model>:cloud works. Related #92391. Thanks @zhangguiping-xydt and @vincentkoc and @kvzsolt.",
        "href": "https://github.com/openclaw/openclaw/issues/92594"
      },
      {
        "title": "**PR #93512** build(docs)",
        "description": "finish PowerShell-safe docs formatting. Related #44293. Thanks @vincentkoc and @yil337 and @aniruddhaadak80.",
        "href": "https://github.com/openclaw/openclaw/issues/93512"
      },
      {
        "title": "**PR #93513** fix(skills)",
        "description": "refresh persisted snapshots after restart. Thanks @vincentkoc and @fif911 and @skadauke.",
        "href": "https://github.com/openclaw/openclaw/issues/93513"
      },
      {
        "title": "**PR #93517** fix(skills)",
        "description": "quote skill-creator template description. Thanks @vincentkoc and @parubets.",
        "href": "https://github.com/openclaw/openclaw/issues/93517"
      },
      {
        "title": "**PR #73976** fix(memory)",
        "description": "use per-keyword FTS search in hybrid mode #39484. Thanks @joshuakeithpa-sudo.",
        "href": "https://github.com/openclaw/openclaw/issues/73976"
      },
      {
        "title": "**PR #93520** fix(workspace)",
        "description": "store setup state outside workspace dot-dir. Thanks @vincentkoc and @1qh.",
        "href": "https://github.com/openclaw/openclaw/issues/93520"
      },
      {
        "title": "**PR #93521** fix(onboard)",
        "description": "skip Homebrew prompt on unsupported platforms. Related #68893. Thanks @vincentkoc and @yurivict.",
        "href": "https://github.com/openclaw/openclaw/issues/93521"
      },
      {
        "title": "**PR #93522** fix(feishu)",
        "description": "send post mentions as native at elements. Thanks @vincentkoc and @gavin-ali and @YizukiAme and @Panniantong.",
        "href": "https://github.com/openclaw/openclaw/issues/93522"
      },
      {
        "title": "**PR #93496** fix(gateway)",
        "description": "rotate already-stale generated transcript filename on /reset. Thanks @harjothkhara and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93496"
      },
      {
        "title": "**PR #93471** fix(cron)",
        "description": "preserve aborted isolated-run failure. Thanks @BhargavSatya and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93471"
      },
      {
        "title": "**PR #93473** fix(memory)",
        "description": "report skipped QMD embedding probe. Related #77645. Thanks @TurboTheTurtle and @vincentkoc and @aderius.",
        "href": "https://github.com/openclaw/openclaw/issues/93473"
      },
      {
        "title": "**PR #93498** fix(ui)",
        "description": "preserve CJK IME composition. Related #86035. Thanks @Zhaoqj2016 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93498"
      },
      {
        "title": "**PR #93088** fix(telegram)",
        "description": "bind bot mentions to assistant identity. Thanks @kesslerio and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93088"
      },
      {
        "title": "**PR #93499** fix(nodes)",
        "description": "return screen snapshots as media. Related #90126. Thanks @zenglingbiao and @vincentkoc and @JeffSteinbok.",
        "href": "https://github.com/openclaw/openclaw/issues/93499"
      },
      {
        "title": "**PR #93506** fix(skills)",
        "description": "trust verified ClawHub source provenance. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93506"
      },
      {
        "title": "**PR #93525** agents",
        "description": "notify chat exec empty-success completions. Thanks @vincentkoc and @wenkang-xie.",
        "href": "https://github.com/openclaw/openclaw/issues/93525"
      },
      {
        "title": "**PR #93446** feat",
        "description": "add Codex hosted web search. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/93446"
      },
      {
        "title": "**PR #92883** fix(security)",
        "description": "audit open dm tool exposure. Related #55612. Thanks @yu-xin-c and @vincentkoc and @cjg20ss.",
        "href": "https://github.com/openclaw/openclaw/issues/92883"
      },
      {
        "title": "**PR #93476** fix(mattermost)",
        "description": "preserve Codex progress preview. Related #88766. Thanks @goutamadwant and @vincentkoc and @KelTech-Services.",
        "href": "https://github.com/openclaw/openclaw/issues/93476"
      },
      {
        "title": "**PR #93395** feat(cron)",
        "description": "add compact list responses. Related #93366. Thanks @yu-xin-c and @vincentkoc and @centralpc.",
        "href": "https://github.com/openclaw/openclaw/issues/93395"
      },
      {
        "title": "**PR #93527** fix(cron)",
        "description": "preserve model overrides for text payloads. Thanks @vincentkoc and @liaoandi.",
        "href": "https://github.com/openclaw/openclaw/issues/93527"
      },
      {
        "title": "**PR #90487** fix",
        "description": "harden ChatGPT Responses missing content-type streams. Thanks @anyech and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90487"
      },
      {
        "title": "**PR #93528** fix(gateway)",
        "description": "tolerate transient pre-hello clean closes. Thanks @vincentkoc and @ruanrrn.",
        "href": "https://github.com/openclaw/openclaw/issues/93528"
      },
      {
        "title": "**PR #93529** fix(auto-reply)",
        "description": "allow message tool for group attachments. Related #43146. Thanks @vincentkoc and @Robcis.",
        "href": "https://github.com/openclaw/openclaw/issues/93529"
      },
      {
        "title": "**PR #93291** fix(reply)",
        "description": "preserve pending thread evidence when reconciling partial send results. Thanks @yetval and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93291"
      },
      {
        "title": "**PR #90572** fix(feishu)",
        "description": "drop self-authored receive echoes. Thanks @baskduf.",
        "href": "https://github.com/openclaw/openclaw/issues/90572"
      },
      {
        "title": "**PR #93455** fix(cli)",
        "description": "accept --log-level after subcommands. Thanks @ooiuuii and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93455"
      },
      {
        "title": "**PR #93452** fix(bedrock)",
        "description": "strip inference profile prefix from model ID in embedding adapter. Related #79212. Thanks @LiuwqGit and @vincentkoc and @aleck31.",
        "href": "https://github.com/openclaw/openclaw/issues/93452"
      },
      {
        "title": "**PR #89799** fix(cli)",
        "description": "skip compile cache on early Node 24.x to avoid startup deadlock. Related #86550. Thanks @zhangguiping-xydt and @vincentkoc and @renyuliang000.",
        "href": "https://github.com/openclaw/openclaw/issues/89799"
      },
      {
        "title": "**PR #93469** fix(agents)",
        "description": "drop partialJson streaming artifacts from session history repair. Thanks @drvoss and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93469"
      },
      {
        "title": "**PR #93463** fix(codex)",
        "description": "log app-server compaction completion. Related #83932. Thanks @goutamadwant and @vincentkoc and @aounakram.",
        "href": "https://github.com/openclaw/openclaw/issues/93463"
      },
      {
        "title": "**PR #93562** fix(tui)",
        "description": "refresh after external session reset. Related #38966. Thanks @vincentkoc and @wsyjh8 and @yizhanzjz.",
        "href": "https://github.com/openclaw/openclaw/issues/93562"
      },
      {
        "title": "**PR #93470** fix(plugins)",
        "description": "load externally-installed channel plugins at gateway startup. Related #93219. Thanks @sunlit-deng and @vincentkoc and @cxdnicole.",
        "href": "https://github.com/openclaw/openclaw/issues/93470"
      },
      {
        "title": "**PR #88796** fix(discord)",
        "description": "resolve guildId from session channel for search actions. Related #88790. Thanks @SebTardif and @vincentkoc and @mugabuga.",
        "href": "https://github.com/openclaw/openclaw/issues/88796"
      },
      {
        "title": "**PR #93194** fix(agents)",
        "description": "preserve prompt-released session metadata. Related #93193. Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/issues/93194"
      },
      {
        "title": "**PR #89483** fix(gateway)",
        "description": "project failed agent turns in chat history. Related #89197. Thanks @IWhatsskill and @vincentkoc and @yangiit.",
        "href": "https://github.com/openclaw/openclaw/issues/89483"
      },
      {
        "title": "**PR #93434** fix",
        "description": "avoid parent group allowlist false positive. Related #92684. Thanks @kingrubic and @vincentkoc and @motteman.",
        "href": "https://github.com/openclaw/openclaw/issues/93434"
      },
      {
        "title": "**PR #93449** fix(feishu)",
        "description": "dedupe redelivered text by stable retry identity. Related #46778. Thanks @ZengWen-DT and @vincentkoc and @kingcuty.",
        "href": "https://github.com/openclaw/openclaw/issues/93449"
      },
      {
        "title": "**PR #93407** AGT-80 AGT-81 Fix Discord ingress ack ordering",
        "description": "**PR #93407** AGT-80 AGT-81 Fix Discord ingress ack ordering. Thanks @mgunnin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93407"
      },
      {
        "title": "**PR #93439** fix(agents)",
        "description": "honor embedded run default model. Related #93419. Thanks @harjothkhara and @vincentkoc and @danielgerlag.",
        "href": "https://github.com/openclaw/openclaw/issues/93439"
      },
      {
        "title": "**PR #93565** fix(cli)",
        "description": "summarize cleanup dry-run by label. Related #76826. Thanks @AgentArcLab and @vincentkoc and @renatomaluhy.",
        "href": "https://github.com/openclaw/openclaw/issues/93565"
      },
      {
        "title": "**PR #93509** fix(skills)",
        "description": "clear orphaned idempotency pointer on corrupt-metadata re-begin. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93509"
      },
      {
        "title": "**PR #93274** Clarify plugin channel config additional-property errors",
        "description": "**PR #93274** Clarify plugin channel config additional-property errors. Thanks @zhangguiping-xydt and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93274"
      },
      {
        "title": "**PR #93555** fix(read)",
        "description": "route text decoding through shared Windows codepage fallba…. Thanks @zhanxingxin1998 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93555"
      },
      {
        "title": "**PR #93314** fix(skills)",
        "description": "preserve ClawHub origin provenance on readback. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93314"
      },
      {
        "title": "**PR #93573** fix(acp)",
        "description": "keep bridge sessions out of stale ACP classification [AI-assisted]. Related #38907. Thanks @eldar702 and @vincentkoc and @ninaopenclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/93573"
      },
      {
        "title": "**PR #93398** fix(cron)",
        "description": "emit isolated model usage diagnostics. Related #92338. Thanks @849261680 and @vincentkoc and @niks999.",
        "href": "https://github.com/openclaw/openclaw/issues/93398"
      },
      {
        "title": "**PR #93367** Fix SSH sandbox remote directory args",
        "description": "**PR #93367** Fix SSH sandbox remote directory args. Related #93344. Thanks @dmorn and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93367"
      },
      {
        "title": "**PR #93574** fix(feishu)",
        "description": "suppress log noise for bot_p2p_chat_entered_v1 event [AI-assisted]. Related #42351. Thanks @eldar702 and @vincentkoc and @sunking0223.",
        "href": "https://github.com/openclaw/openclaw/issues/93574"
      },
      {
        "title": "**PR #93269** Fix tokenjuice bash results without details",
        "description": "**PR #93269** Fix tokenjuice bash results without details. Thanks @moeedahmed and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93269"
      },
      {
        "title": "**PR #93575** fix(telegram)",
        "description": "hydrate group reply-chain media into model context [AI-assisted]. Thanks @eldar702 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93575"
      },
      {
        "title": "**PR #93261** fix(plugins)",
        "description": "resolve provider policy surface for plugin-owned CLI backends. Related #93259. Thanks @BitmapAsset and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93261"
      },
      {
        "title": "**PR #93303** fix(whatsapp)",
        "description": "bound stalled read-receipt socket operations. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93303"
      },
      {
        "title": "**PR #93242** fix(mattermost)",
        "description": "keep bare @mention with empty body instead of dropping it. Related #93205. Thanks @iloveleon19 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93242"
      },
      {
        "title": "**PR #93606** fix(ui)",
        "description": "clear stale Talk error when session transitions to non-error state (fixes #88176). Thanks @liuhao1024 and @vincentkoc and @BrianClaw1955.",
        "href": "https://github.com/openclaw/openclaw/issues/88176"
      },
      {
        "title": "**PR #93607** perf(tasks)",
        "description": "memoize reconcileInspectableTasks for same-tick calls (fixes #73531). Thanks @liuhao1024 and @vincentkoc and @slideshow-dingo.",
        "href": "https://github.com/openclaw/openclaw/issues/73531"
      },
      {
        "title": "**PR #93612** fix(gateway)",
        "description": "compute sessions.usage aggregate totals from all sessions, not just the limited page (fixes #76496). Thanks @liuhao1024 and @vincentkoc and @bobsahur-robot.",
        "href": "https://github.com/openclaw/openclaw/issues/76496"
      },
      {
        "title": "**PR #93615** fix(telegram)",
        "description": "recover lone active spooled handler on timeout (#84158). Thanks @0xghost42 and @vincentkoc and @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/pull/84158"
      },
      {
        "title": "**PR #93616** Keep key-free web search providers opt-in",
        "description": "**PR #93616** Keep key-free web search providers opt-in. Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93616"
      },
      {
        "title": "**PR #93298** fix #93044",
        "description": "control-ui webchat double-renders agent replies when dmScope=main. Thanks @zhangguiping-xydt and @vincentkoc and @cfmilam.",
        "href": "https://github.com/openclaw/openclaw/issues/93298"
      },
      {
        "title": "**PR #93618** fix(feishu)",
        "description": "filter temporary card-action-c-\\* IDs from reply target to prevent Invalid open_message_id errors (fixes #56818). Thanks @liuhao1024 and @vincentkoc and @SwordImmortal.",
        "href": "https://github.com/openclaw/openclaw/issues/56818"
      },
      {
        "title": "**PR #93387** feat(ios)",
        "description": "add watch action surface. Thanks @Solvely-Colin and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/93387"
      },
      {
        "title": "**PR #93648** fix(doctor)",
        "description": "archive superseded plugin install index conflicts. Related #90418. Thanks @vincentkoc and @ramitrkar-hash.",
        "href": "https://github.com/openclaw/openclaw/issues/93648"
      },
      {
        "title": "**PR #93649** fix(qwen)",
        "description": "place DashScope image prompts in user content. Related #92688. Thanks @vincentkoc and @Yachiyo404.",
        "href": "https://github.com/openclaw/openclaw/issues/93649"
      },
      {
        "title": "**PR #93650** fix(update)",
        "description": "avoid per-Node npm prefixes during self-update. Related #80387. Thanks @vincentkoc and @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/issues/93650"
      },
      {
        "title": "**PR #93653** fix(skill-workshop)",
        "description": "skip helper sessions during auto-capture. Thanks @vincentkoc and @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/93653"
      },
      {
        "title": "**PR #93654** fix(codex)",
        "description": "expose remote node exec as a Codex dynamic tool. Related #92141. Thanks @vincentkoc and @JPKay-AI.",
        "href": "https://github.com/openclaw/openclaw/issues/93654"
      },
      {
        "title": "**PR #93662** fix(discord)",
        "description": "protect mention aliases in code fences. Thanks @vincentkoc and @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/93662"
      },
      {
        "title": "**PR #93663** fix(clawdock)",
        "description": "open dashboard on published port without starting deps. Related #77344. Thanks @vincentkoc and @dhoman.",
        "href": "https://github.com/openclaw/openclaw/issues/93663"
      },
      {
        "title": "**PR #93670** fix(browser)",
        "description": "recover stale managed Chrome CDP listener. Related #41750. Thanks @vincentkoc and @rohitjavvadi and @kissman911.",
        "href": "https://github.com/openclaw/openclaw/issues/93670"
      },
      {
        "title": "**PR #93672** fix(commands)",
        "description": "preserve multiline slash skill args. Related #79155. Thanks @vincentkoc and @web3blind.",
        "href": "https://github.com/openclaw/openclaw/issues/93672"
      },
      {
        "title": "**PR #93674** fix(browser)",
        "description": "accept top-level act fields with nested requests. Related #38762. Thanks @vincentkoc and @angelusbr and @Lumos-789.",
        "href": "https://github.com/openclaw/openclaw/issues/93674"
      },
      {
        "title": "**PR #93678** fix(plugins)",
        "description": "allow Dreaming sidecar through restrictive memory allowlists. Related #92536. Thanks @vincentkoc and @pradeep7127 and @resYuto.",
        "href": "https://github.com/openclaw/openclaw/issues/93678"
      },
      {
        "title": "**PR #93306** fix(status)",
        "description": "ignore stale context after model switch. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/93306"
      },
      {
        "title": "**PR #93666** fix(control-ui)",
        "description": "copy code blocks over plain HTTP via clipboard fallback. Related #93628. Thanks @Pick-cat and @pjq2926.",
        "href": "https://github.com/openclaw/openclaw/issues/93666"
      },
      {
        "title": "**PR #93629** fix(reply)",
        "description": "preserve unsent text-only finals after block pipeline streamed partial content (fixes #81078). Thanks @liuhao1024 and @Jackten.",
        "href": "https://github.com/openclaw/openclaw/issues/81078"
      },
      {
        "title": "**PR #93690** fix(telegram)",
        "description": "dispatch MEDIA directives as attachments. Related #77702. Thanks @vincentkoc and @butttersbot.",
        "href": "https://github.com/openclaw/openclaw/issues/93690"
      },
      {
        "title": "**PR #93693** fix(gateway)",
        "description": "ignore stale sudo scope for root user services. Related #81410. Thanks @vincentkoc and @Ericksza.",
        "href": "https://github.com/openclaw/openclaw/issues/93693"
      },
      {
        "title": "**PR #93646** fix(agents)",
        "description": "return string assistant content in getLastAssistantText. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93646"
      },
      {
        "title": "**PR #93687** fix(i18n)",
        "description": "retain Codex error tails in logs. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/93687"
      },
      {
        "title": "**PR #93630** fix(heartbeat)",
        "description": "bootstrap plugin session targets. Thanks @ZengWen-DT and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93630"
      },
      {
        "title": "**PR #93658** fix(wizard)",
        "description": "preserve existing default model during setup auth choice [AI-assisted]. Related #64129. Thanks @ml12580 and @vegapunk9527.",
        "href": "https://github.com/openclaw/openclaw/issues/93658"
      },
      {
        "title": "**PR #93671** fix(respawn)",
        "description": "rewrite pnpm versioned entry paths to stable wrapper (fixes #52313). Thanks @liuhao1024 and @vincentkoc and @RichardCao.",
        "href": "https://github.com/openclaw/openclaw/issues/52313"
      },
      {
        "title": "**PR #93698** Fix Telegram rich progress detail updates",
        "description": "**PR #93698** Fix Telegram rich progress detail updates. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/93698"
      },
      {
        "title": "**PR #93656** fix(gateway)",
        "description": "send approval route notices with write scope. Related #93563. Thanks @mushuiyu886 and @vincentkoc and @clawbot247-commits.",
        "href": "https://github.com/openclaw/openclaw/issues/93656"
      },
      {
        "title": "**PR #93665** fix(gateway)",
        "description": "surface codex app-server returned failures. Thanks @litang9 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93665"
      },
      {
        "title": "**PR #93727** fix(context-engine)",
        "description": "avoid turn-maintenance lane livelock. Related #77340. Thanks @vincentkoc and @baghvn and @Veda-openclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/93727"
      },
      {
        "title": "**PR #93681** fix(llm)",
        "description": "handle string assistant content on the OpenAI-compatible completion path. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93681"
      },
      {
        "title": "**PR #93722** chore(release)",
        "description": "update appcast for 2026.6.8. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93722"
      },
      {
        "title": "**PR #93677** fix(google-meet)",
        "description": "declare realtime provider secret inputs. Related #81891. Thanks @goutamadwant and @vincentkoc and @chachi-max.",
        "href": "https://github.com/openclaw/openclaw/issues/93677"
      },
      {
        "title": "**PR #92947** fix(qqbot)",
        "description": "deliver cron auto-TTS voice by trusting OpenClaw temp root. Related #92816. Thanks @ZengWen-DT and @Zeng-wen and @lewiswu1209.",
        "href": "https://github.com/openclaw/openclaw/issues/92947"
      },
      {
        "title": "**PR #93679** fix(whatsapp)",
        "description": "extract GIF metadata and distinguish gifPlayback in media placeholders (fixes #49099). Thanks @liuhao1024 and @vincentkoc and @bugkill3r.",
        "href": "https://github.com/openclaw/openclaw/issues/49099"
      },
      {
        "title": "**PR #93688** fix(minimax)",
        "description": "check base_resp envelope errors in TTS provider. Related #76904. Thanks @dwc1997 and @najef1979-code.",
        "href": "https://github.com/openclaw/openclaw/issues/93688"
      },
      {
        "title": "**PR #93714** fix",
        "description": "isolate async model resolution mock from sync mock in flaky test. Related #92117. Thanks @lsr911 and @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/93714"
      },
      {
        "title": "**PR #93705** test(macos)",
        "description": "cover root command dispatch. Related #83879. Thanks @markoub and @vincentkoc and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/93705"
      },
      {
        "title": "**PR #93711** Keep command text in progress drafts",
        "description": "**PR #93711** Keep command text in progress drafts. Thanks @keshavbotagent and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93711"
      },
      {
        "title": "**PR #93712** fix",
        "description": "scope assistant avatar override to agent ID. Related #90890. Thanks @lsr911 and @vincentkoc and @najef1979-code.",
        "href": "https://github.com/openclaw/openclaw/issues/93712"
      },
      {
        "title": "**PR #93725** fix(usage)",
        "description": "prune stale usage cache temp files. Related #78939. Thanks @markoub and @Tramsrepus.",
        "href": "https://github.com/openclaw/openclaw/issues/93725"
      },
      {
        "title": "**PR #93726** fix(typing)",
        "description": "start typing on reasoning deltas in thinking mode before visible text. Related #79681. Thanks @xialonglee and @novaflash82.",
        "href": "https://github.com/openclaw/openclaw/issues/93726"
      },
      {
        "title": "**PR #93716** fix(discord)",
        "description": "propagate timeout through channel capabilities diagnostics. Related #77040. Thanks @xialonglee and @vincentkoc and @unicebondoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93716"
      },
      {
        "title": "**PR #93729** fix(ollama)",
        "description": "preserve configured API during discovery. Related #93710. Thanks @zhangguiping-xydt and @vincentkoc and @obnoxious2011-cmd.",
        "href": "https://github.com/openclaw/openclaw/issues/93729"
      },
      {
        "title": "**PR #93719** fix",
        "description": "pin plugin workspace dir for sessions.list to avoid O(rows) memo busting. Related #90814. Thanks @lsr911 and @vincentkoc and @k-l-lambda.",
        "href": "https://github.com/openclaw/openclaw/issues/93719"
      },
      {
        "title": "**PR #93732** fix(agents)",
        "description": "preserve re-sent user prompt during compaction transcript rotation. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/93732"
      },
      {
        "title": "**PR #93738** fix",
        "description": "break plugin registry type import cycle. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/93738"
      },
      {
        "title": "**PR #93740** fix(sessions)",
        "description": "release retained locks after takeover. Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/93740"
      },
      {
        "title": "**PR #93745** fix(usage)",
        "description": "reject invalid explicit dates in usage RPC date parsing. Thanks @harjothkhara and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93745"
      },
      {
        "title": "**PR #93746** fix(ui)",
        "description": "populate realtime talk provider and transport options from talk.catalog. Thanks @shushushv and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93746"
      },
      {
        "title": "**PR #93751** fix(ios)",
        "description": "fix quick setup sheet layout design. Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/93751"
      },
      {
        "title": "**PR #93749** fix(compaction)",
        "description": "ignore stale persisted totalTokens in preflight gate. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/93749"
      },
      {
        "title": "**PR #93753** fix",
        "description": "correct tautological uppercase check in tool description summarizer. Thanks @GautamKumarOffical.",
        "href": "https://github.com/openclaw/openclaw/issues/93753"
      },
      {
        "title": "**PR #89123** refactor",
        "description": "route transcript writers through session seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89123"
      },
      {
        "title": "**PR #93758** feat(memory)",
        "description": "apply outputDimensionality truncation to local GGUF embeddings (fixes #58765). Thanks @liuhao1024 and @vincentkoc and @losz5000.",
        "href": "https://github.com/openclaw/openclaw/issues/58765"
      },
      {
        "title": "**PR #93754** feat(inbound-meta)",
        "description": "expose per-turn source modality. Related #50482. Thanks @liuhao1024 and @vincentkoc and @JTOrca.",
        "href": "https://github.com/openclaw/openclaw/issues/93754"
      },
      {
        "title": "**PR #93767** fix(reasoning-tags)",
        "description": "strip MiniMax `mm:` namespaced reasoning tags. Thanks @DrHack1 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93767"
      },
      {
        "title": "**PR #93772** fix(feishu)",
        "description": "recover CJK filenames from JSON file_name field (fixes #81103). Thanks @liuhao1024 and @vincentkoc and @pjuneye.",
        "href": "https://github.com/openclaw/openclaw/issues/81103"
      },
      {
        "title": "**PR #93773** fix(ui)",
        "description": "scope Skill Workshop proposals to selected agent. Related #93760. Thanks @TurboTheTurtle and @vincentkoc and @hannesrudolph.",
        "href": "https://github.com/openclaw/openclaw/issues/93773"
      },
      {
        "title": "**PR #88750** feat(context-engine)",
        "description": "pass runtime settings into lifecycle. Thanks @ragesaq and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/88750"
      },
      {
        "title": "**PR #93763** fix(agents)",
        "description": "use neutral billing copy for subscription auth. Related #80877. Thanks @eldar702 and @vincentkoc and @22kyasue.",
        "href": "https://github.com/openclaw/openclaw/issues/93763"
      },
      {
        "title": "**PR #93818** List all ClawHub docs in sidebar",
        "description": "**PR #93818** List all ClawHub docs in sidebar. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/93818"
      },
      {
        "title": "**PR #93779** fix(webchat)",
        "description": "skip textarea resize during IME composition to eliminate typing lag. Related #90800. Thanks @joelnishanth and @vincentkoc and @w10497-create.",
        "href": "https://github.com/openclaw/openclaw/issues/93779"
      },
      {
        "title": "**PR #93786** fix(plugins)",
        "description": "treat refreshable catalogs as requiring runtime discovery (fixes #93775). Thanks @liuhao1024 and @St0rmz1.",
        "href": "https://github.com/openclaw/openclaw/issues/93775"
      },
      {
        "title": "**PR #93791** fix(memory)",
        "description": "await search-sync before returning results to prevent stale index (fixes #52115). Thanks @liuhao1024 and @vincentkoc and @FicheallADa.",
        "href": "https://github.com/openclaw/openclaw/issues/52115"
      },
      {
        "title": "**PR #93780** fix(google)",
        "description": "keep parallel Gemini tool responses in the turn after the model. Thanks @yetval and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93780"
      },
      {
        "title": "**PR #93789** fix(agents)",
        "description": "make lane suspension consistent across cooldown-precheck and embedded-runner paths. Related #93036. Thanks @joelnishanth and @vincentkoc and @kumaxs.",
        "href": "https://github.com/openclaw/openclaw/issues/93789"
      },
      {
        "title": "**PR #93798** fix(status)",
        "description": "show 0 (not ?) for fresh-session context tokens. Related #93771. Thanks @Alix-007 and @vincentkoc and @anarchia-99.",
        "href": "https://github.com/openclaw/openclaw/issues/93798"
      },
      {
        "title": "**PR #93810** fix(cron)",
        "description": "preserve startup overflow catch-up deferrals in start() maintenance pass. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/93810"
      },
      {
        "title": "**PR #93811** Strip UTF-8 BOM when reading SKILL",
        "description": "**PR #93811** Strip UTF-8 BOM when reading SKILL.md in quick_validate. Thanks @HrachShah.",
        "href": "https://github.com/openclaw/openclaw/issues/93811"
      },
      {
        "title": "**PR #93803** fix(ui)",
        "description": "preserve WebChat visible messages across session switches. Related #80855. Thanks @LiuwqGit and @vincentkoc and @viagarsuker.",
        "href": "https://github.com/openclaw/openclaw/issues/93803"
      },
      {
        "title": "**PR #93792** fix(android)",
        "description": "wait for node capability approval before onboarding. Thanks @Solvely-Colin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93792"
      },
      {
        "title": "**PR #93796** fix(feishu)",
        "description": "paginate wiki node and space listing (#37626). Thanks @ZengWen-DT and @vincentkoc and @ritou11.",
        "href": "https://github.com/openclaw/openclaw/pull/37626"
      },
      {
        "title": "**PR #93797** fix(browser)",
        "description": "use openTab return value to prevent wsUrl race in ensureTabAvailable (fixes #63343). Thanks @liuhao1024 and @vincentkoc and @OpenCodeEngineer.",
        "href": "https://github.com/openclaw/openclaw/issues/63343"
      },
      {
        "title": "**PR #93806** fix(reasoning-tags)",
        "description": "strip MiniMax mm: tags on silent-reply and streaming paths missed by #93767. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93806"
      },
      {
        "title": "**PR #93691** refactor",
        "description": "add gateway sessions.create lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93691"
      },
      {
        "title": "**PR #88748** fix(gemini)",
        "description": "bridge OAuth profiles into CLI runtime. Related #88742. Thanks @jason-allen-oneal.",
        "href": "https://github.com/openclaw/openclaw/issues/88748"
      },
      {
        "title": "**PR #93857** fix(deps)",
        "description": "remediate Dependabot alerts. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93857"
      },
      {
        "title": "**PR #93874** fix(slack)",
        "description": "recognize MiniMax mm: namespaced reasoning tags in monitor preview. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/93874"
      },
      {
        "title": "**PR #93832** feat(providers)",
        "description": "add ClawRouter managed proxy. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93832"
      },
      {
        "title": "**PR #93880** fix(macos)",
        "description": "preserve approvals migration data. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93880"
      },
      {
        "title": "**PR #93903** fix(cron)",
        "description": "reject invalid absolute timestamps. Thanks @Alix-007 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93903"
      },
      {
        "title": "**PR #93879** fix(update)",
        "description": "use configured npm registry for update metadata. Related #79140. Thanks @vincentkoc and @sixerLiu.",
        "href": "https://github.com/openclaw/openclaw/issues/93879"
      },
      {
        "title": "**PR #93924** revert(providers)",
        "description": "remove ClawRouter provider. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93924"
      },
      {
        "title": "**PR #93955** fix(telegram)",
        "description": "surface rich-message disabled state. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/93955"
      },
      {
        "title": "**PR #93881** fix(agents)",
        "description": "route BTW through canonical Codex runtime. Related #88902. Thanks @vincentkoc and @TurboTheTurtle and @khalil-omer.",
        "href": "https://github.com/openclaw/openclaw/issues/93881"
      },
      {
        "title": "**PR #90192** fix(feishu)",
        "description": "fetch quoted content before empty-message guard. Related #90177. Thanks @bladin and @sliverp and @lkxlaz.",
        "href": "https://github.com/openclaw/openclaw/issues/90192"
      },
      {
        "title": "**PR #93237** Fix Mattermost open DM validation",
        "description": "**PR #93237** Fix Mattermost open DM validation. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/93237"
      },
      {
        "title": "**PR #93945** feat(diagnostics)",
        "description": "add SIEM security events. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93945"
      },
      {
        "title": "**PR #87487** fix(cli)",
        "description": "clarify mcp list registry scope. Related #65209. Thanks @Alix-007 and @slideshow-dingo.",
        "href": "https://github.com/openclaw/openclaw/issues/87487"
      },
      {
        "title": "**PR #24661** feat(cohere)",
        "description": "add provider plugin. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/24661"
      },
      {
        "title": "**PR #93532** Expose verified ClawHub source in skill verify output",
        "description": "**PR #93532** Expose verified ClawHub source in skill verify output. Thanks @momothemage.",
        "href": "https://github.com/openclaw/openclaw/issues/93532"
      },
      {
        "title": "**PR #93538** feat(codex)",
        "description": "support app-server network proxy profiles. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93538"
      },
      {
        "title": "**PR #93938** fix(telegram)",
        "description": "guard UTF-16 surrogate pairs in outbound chunkers. Related #93921. Thanks @Nas01010101 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93938"
      },
      {
        "title": "**PR #94104** feat(agents)",
        "description": "trace compaction summarization model calls. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/94104"
      },
      {
        "title": "**PR #94108** Fix package Telegram temp root",
        "description": "**PR #94108** Fix package Telegram temp root. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/94108"
      },
      {
        "title": "**PR #94113** Fix Telegram package output mount",
        "description": "**PR #94113** Fix Telegram package output mount. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/94113"
      },
      {
        "title": "**PR #89062** feat(docker)",
        "description": "support offline setup reruns. Related #70443. Thanks @Alix-007 and @safrano9999.",
        "href": "https://github.com/openclaw/openclaw/issues/89062"
      },
      {
        "title": "**PR #93929** fix(secrets)",
        "description": "explicitly pass BWS_SERVER_URL to resolver for self-hosted instances. Related #93851. Thanks @Pandah97 and @vincentkoc and @AdoShan.",
        "href": "https://github.com/openclaw/openclaw/issues/93929"
      },
      {
        "title": "**PR #90057** Polish Workboard operations view",
        "description": "**PR #90057** Polish Workboard operations view. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90057"
      },
      {
        "title": "**PR #89396** fix(doctor)",
        "description": "drop inert legacy cron notify when cron.webhook is unset. Related #44460. Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/issues/89396"
      },
      {
        "title": "**PR #94138** fix(session)",
        "description": "prevent stale finalizer from recreating deleted session rows. Related #40840. Thanks @xialonglee and @vincentkoc and @AL-knows.",
        "href": "https://github.com/openclaw/openclaw/issues/94138"
      },
      {
        "title": "**PR #93739** refactor",
        "description": "add session patch projection seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93739"
      },
      {
        "title": "**PR #94178** fix(workspace)",
        "description": "skip optional bootstrap files when workspace setup is already completed. Related #83593. Thanks @dwc1997 and @jsompis.",
        "href": "https://github.com/openclaw/openclaw/issues/94178"
      },
      {
        "title": "**PR #93363** fix(feishu)",
        "description": "enforce account tool family gates. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/93363"
      },
      {
        "title": "**PR #93813** fix(codex)",
        "description": "keep message registered for internal turns. Related #93750. Thanks @jalehman and @hannesrudolph.",
        "href": "https://github.com/openclaw/openclaw/issues/93813"
      },
      {
        "title": "**PR #93659** refactor",
        "description": "add session reset delete lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93659"
      },
      {
        "title": "**PR #93852** ci(release)",
        "description": "harden release controls. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93852"
      },
      {
        "title": "**PR #94203** feat(codex)",
        "description": "support remote app-server plugins. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/94203"
      },
      {
        "title": "**PR #94263** chore",
        "description": "migrate claw-score skill. Thanks @RomneyDa and @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/94263"
      },
      {
        "title": "**PR #93695** refactor",
        "description": "add compact trim lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93695"
      },
      {
        "title": "**PR #93114** test",
        "description": "fold lifecycle and package proof into QA Lab. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93114"
      },
      {
        "title": "**PR #93181** test",
        "description": "fold otel smoke into qa e2e. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93181"
      },
      {
        "title": "**PR #93178** test",
        "description": "fold gateway smoke into qa e2e. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93178"
      },
      {
        "title": "**PR #94276** qa-lab",
        "description": "support script-backed evidence scenarios. Thanks @Solvely-Colin and @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/94276"
      },
      {
        "title": "**PR #94282** Support owner-qualified ClawHub skill installs",
        "description": "**PR #94282** Support owner-qualified ClawHub skill installs. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/94282"
      },
      {
        "title": "**PR #93704** refactor",
        "description": "add session cleanup lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93704"
      },
      {
        "title": "**PR #94296** fix",
        "description": "require all taxonomy coverage ids for a feature - AND not OR. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/94296"
      },
      {
        "title": "**PR #92016** fix(plugins)",
        "description": "compose live hook registry view for tool-call hooks. Related #91918. Thanks @amknight and @vokaplok.",
        "href": "https://github.com/openclaw/openclaw/issues/92016"
      },
      {
        "title": "**PR #89596** fix(policy)",
        "description": "recognize declared tool allowlists. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/89596"
      },
      {
        "title": "**PR #93713** fix",
        "description": "route deleted-agent session purge through lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93713"
      },
      {
        "title": "**PR #84172** fix(exec)",
        "description": "rebuild command authorization on the Tree-sitter command planner. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/84172"
      },
      {
        "title": "**PR #94332** docs",
        "description": "add ClawHub namespace claims to sidebar. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/94332"
      },
      {
        "title": "**PR #86360** fix(codex)",
        "description": "honor bound agent exec host policy. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/86360"
      },
      {
        "title": "**PR #73162** fix(slack)",
        "description": "remove socket reconnect attempt cap so gateway stays connected indefinitely. Related #72808. Thanks @suboss87 and @tleyden.",
        "href": "https://github.com/openclaw/openclaw/issues/73162"
      },
      {
        "title": "**PR #94156** fix",
        "description": "expose OpenAI image quality and moderation CLI options. Thanks @lastguru-net and @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/94156"
      },
      {
        "title": "**PR #94350** feat",
        "description": "externalize GMI provider plugin. Thanks @Patrick-Erichsen and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94350"
      },
      {
        "title": "**PR #94543** fix(gateway)",
        "description": "bound config.get middleware results. Related #94265. Thanks @vincentkoc and @v-s-gusev.",
        "href": "https://github.com/openclaw/openclaw/issues/94543"
      },
      {
        "title": "**PR #91409** fix(update)",
        "description": "run plugin convergence after RPC git updates. Thanks @masatohoshino.",
        "href": "https://github.com/openclaw/openclaw/issues/91409"
      },
      {
        "title": "**PR #94556** chore(extensions)",
        "description": "bump tokenjuice to 0.8.1. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94556"
      },
      {
        "title": "**PR #94580** fix(ci)",
        "description": "stabilize update run gates.",
        "href": "https://github.com/openclaw/openclaw/issues/94580"
      },
      {
        "title": "**PR #94394** fix(infra)",
        "description": "probe 127.0.0.1 in ensurePortAvailable to detect IPv4-only occupants. Related #94379. Thanks @Pandah97 and @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/94394"
      },
      {
        "title": "**PR #94421** fix(agents)",
        "description": "preserve active compaction retries. Related #94391. Thanks @dexiosmb.",
        "href": "https://github.com/openclaw/openclaw/issues/94421"
      },
      {
        "title": "**PR #94428** fix(feishu)",
        "description": "preserve replies before error finals. Related #94360. Thanks @xunx33.",
        "href": "https://github.com/openclaw/openclaw/issues/94428"
      },
      {
        "title": "**PR #93735** refactor",
        "description": "add restart recovery lifecycle seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93735"
      },
      {
        "title": "**PR #94591** docs(release)",
        "description": "backfill complete contribution records. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94591"
      },
      {
        "title": "**PR #94588** fix(cron)",
        "description": "retry isolated setup timeouts. Thanks @aaroneden.",
        "href": "https://github.com/openclaw/openclaw/issues/94588"
      },
      {
        "title": "**PR #94082** fix(cron)",
        "description": "prevent lane timeout during long tool execution. Related #94033. Thanks @ajwan8998 and @JingWang-Star996.",
        "href": "https://github.com/openclaw/openclaw/issues/94082"
      },
      {
        "title": "**PR #94551** feat(firecrawl)",
        "description": "add keyless scrape support. Thanks @vincentkoc and @developersdigest.",
        "href": "https://github.com/openclaw/openclaw/issues/94551"
      },
      {
        "title": "**PR #94619** test(ci)",
        "description": "stabilize timeout-sensitive shards. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94619"
      },
      {
        "title": "**PR #94048** fix(telegram)",
        "description": "set richMessages default to false explicitly in schema. Related #93770, #93794. Thanks @Monkey-wusky and @obviyus and @Nardoa375 and @laurenceputra.",
        "href": "https://github.com/openclaw/openclaw/issues/94048"
      },
      {
        "title": "**PR #94118** [codex] Fix Telegram rich local Markdown link hrefs",
        "description": "**PR #94118** [codex] Fix Telegram rich local Markdown link hrefs. Related #94117. Thanks @dankarization and @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/94118"
      },
      {
        "title": "**PR #94646** refactor(sqlite)",
        "description": "land database-first memory and proxy alignment. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94646"
      },
      {
        "title": "**PR #94658** test(sqlite)",
        "description": "use shared temp directory helper. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94658"
      },
      {
        "title": "**PR #92135** fix(openai-embedding)",
        "description": "preserve openai/ prefix for non-native base URLs. Related #92124. Thanks @xialonglee and @Kambrian.",
        "href": "https://github.com/openclaw/openclaw/issues/92135"
      },
      {
        "title": "**PR #93737** refactor",
        "description": "add session maintenance transaction seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93737"
      },
      {
        "title": "**PR #93685** refactor(auto-reply)",
        "description": "add lifecycle storage seams. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/93685"
      },
      {
        "title": "**PR #94349** fix(agents)",
        "description": "preserve pending subagent completion announces. Related #93323. Thanks @sallyom and @oiGaDio.",
        "href": "https://github.com/openclaw/openclaw/issues/94349"
      },
      {
        "title": "**PR #93174** test",
        "description": "fold channel message flows into qa e2e. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/93174"
      },
      {
        "title": "**PR #94093** Prevent Codex thread rotation from losing next-step context",
        "description": "**PR #94093** Prevent Codex thread rotation from losing next-step context. Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/issues/94093"
      },
      {
        "title": "**PR #53920** fix(scripts)",
        "description": "avoid mutating tracked auth-monitor template during setup. Thanks @JackWuGlobal.",
        "href": "https://github.com/openclaw/openclaw/issues/53920"
      },
      {
        "title": "**PR #94702** Standardize QA coverage IDs on dotted names",
        "description": "**PR #94702** Standardize QA coverage IDs on dotted names. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/94702"
      },
      {
        "title": "**PR #81825** fix(skills/1password)",
        "description": "stop forcing tmux for desktop app auth (#52540). Thanks @koshaji and @tylerbittner.",
        "href": "https://github.com/openclaw/openclaw/pull/52540"
      },
      {
        "title": "**PR #94725** fix(doctor)",
        "description": "warn on volatile SQLite state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94725"
      },
      {
        "title": "**PR #88551** fix(agents)",
        "description": "skip auth gate for CLI-owned transport. Thanks @yu-xin-c.",
        "href": "https://github.com/openclaw/openclaw/issues/88551"
      },
      {
        "title": "**PR #88581** feat(commands)",
        "description": "add /name to rename the current session from chat. Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/issues/88581"
      },
      {
        "title": "**PR #94324** feat(codex)",
        "description": "support app-server SecretRefs. Thanks @kevinlin-openai and @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/94324"
      },
      {
        "title": "**PR #90882** fix",
        "description": "add self-knowledge docs rule to system prompt. Related #90713. Thanks @SutraHsing.",
        "href": "https://github.com/openclaw/openclaw/issues/90882"
      },
      {
        "title": "**PR #94684** fix",
        "description": "#80507 show dry-run output for message send/poll. Thanks @lzyyzznl and @YB0y.",
        "href": "https://github.com/openclaw/openclaw/issues/94684"
      },
      {
        "title": "**PR #93823** fix(whatsapp)",
        "description": "keep opening text chunk when first media fails on multi-chunk reply. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/93823"
      },
      {
        "title": "**PR #89203** refactor",
        "description": "route SDK session compatibility through seam. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89203"
      },
      {
        "title": "**PR #94453** fix",
        "description": "default cron runMode to \"due\" instead of \"force\" (#94270). Thanks @jincheng-xydt and @sallyom and @davectr.",
        "href": "https://github.com/openclaw/openclaw/pull/94270"
      },
      {
        "title": "**PR #94746** fix(note)",
        "description": "prevent clack from re-breaking copy-sensitive tokens. Related #94730. Thanks @xzh-icenter and @berkgungor.",
        "href": "https://github.com/openclaw/openclaw/issues/94746"
      },
      {
        "title": "**PR #89904** refactor",
        "description": "route sdk session compatibility through accessor. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/89904"
      },
      {
        "title": "**PR #86719** fix(skills)",
        "description": "retarget stale plugin skill symlinks. Related #85925. Thanks @stevenepalmer and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/86719"
      },
      {
        "title": "**PR #94337** fix(tui)",
        "description": "show 0 not ? for fresh-session context tokens in footer. Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/issues/94337"
      },
      {
        "title": "**PR #94539** fix(android)",
        "description": "group settings by intent. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/94539"
      },
      {
        "title": "**PR #92383** fix(gateway)",
        "description": "never return an empty chat.history transcript. Thanks @Hidetsugu55.",
        "href": "https://github.com/openclaw/openclaw/issues/92383"
      },
      {
        "title": "**PR #92574** test(browser)",
        "description": "cover action-input CLI request bodies. Related #83877. Thanks @yu-xin-c and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/92574"
      },
      {
        "title": "**PR #92873** test(diffs)",
        "description": "add viewerState, toolbar toggle, shadow root, and hydrateProps tests (fixes #83915). Thanks @liuhao1024 and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/83915"
      },
      {
        "title": "**PR #94257** fix(sessions)",
        "description": "preserve Media\\* index alignment when reading user-turn fields. Thanks @Nas01010101.",
        "href": "https://github.com/openclaw/openclaw/issues/94257"
      },
      {
        "title": "**PR #94756** fix(codex)",
        "description": "bound turn/start text when context budget is non-positive. Related #94748. Thanks @Nas01010101.",
        "href": "https://github.com/openclaw/openclaw/issues/94756"
      },
      {
        "title": "**PR #94729** fix(skills/trello)",
        "description": "add curl to requires.bins to match body examples (fixes #94727). Thanks @liuhao1024 and @berkgungor.",
        "href": "https://github.com/openclaw/openclaw/issues/94727"
      },
      {
        "title": "**PR #94790** feat(slack)",
        "description": "log INFO receipt for inbound app_mention events. Related #94691. Thanks @ZengWen-DT and @BryceMurray.",
        "href": "https://github.com/openclaw/openclaw/issues/94790"
      },
      {
        "title": "**PR #81696** fix",
        "description": "guard tool event callbacks (AI-assisted). Thanks @enjoylife1243.",
        "href": "https://github.com/openclaw/openclaw/issues/81696"
      },
      {
        "title": "**PR #94809** chore",
        "description": "forward-port alpha release fixes.",
        "href": "https://github.com/openclaw/openclaw/issues/94809"
      },
      {
        "title": "**PR #94612** fix(macos)",
        "description": "open NSOpenPanel for embedded Control UI file inputs (#94468). Thanks @bbblending and @DINGDANGMAOUP.",
        "href": "https://github.com/openclaw/openclaw/pull/94468"
      },
      {
        "title": "**PR #89806** fix(feishu)",
        "description": "avoid axios interceptor internals. Related #83913. Thanks @sweetcornna and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/89806"
      },
      {
        "title": "**PR #91923** fix(ios)",
        "description": "clean up notification settings state. Thanks @zats.",
        "href": "https://github.com/openclaw/openclaw/issues/91923"
      },
      {
        "title": "**PR #91345** fix",
        "description": "suggest close CLI commands. Related #83999. Thanks @glenn-agent and @HannesOberreiter.",
        "href": "https://github.com/openclaw/openclaw/issues/91345"
      },
      {
        "title": "**PR #94561** Add stdout diagnostics OTEL log exporter",
        "description": "**PR #94561** Add stdout diagnostics OTEL log exporter. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/94561"
      },
      {
        "title": "**PR #91013** fix(gateway)",
        "description": "ignore stale abort markers for fresh chat events. Related #91012. Thanks @nxmxbbd.",
        "href": "https://github.com/openclaw/openclaw/issues/91013"
      },
      {
        "title": "**PR #89279** fix(tasks)",
        "description": "deliver ACP completions to bound Discord threads. Related #84022. Thanks @anyech and @h-mascot.",
        "href": "https://github.com/openclaw/openclaw/issues/89279"
      },
      {
        "title": "**PR #91656** test(cron)",
        "description": "expand parseAbsoluteTimeMs test coverage to 39 cases. Related #91654. Thanks @SpecialLeon.",
        "href": "https://github.com/openclaw/openclaw/issues/91656"
      },
      {
        "title": "**PR #94810** fix(telegram)",
        "description": "classify sendChatAction 401 by structured error_code, not bare substring match. Related #94787. Thanks @ZOOWH and @parveshsaini.",
        "href": "https://github.com/openclaw/openclaw/issues/94810"
      },
      {
        "title": "**PR #94737** fix(reply)",
        "description": "clarify provider internal error copy. Thanks @snowzlmbot.",
        "href": "https://github.com/openclaw/openclaw/issues/94737"
      },
      {
        "title": "**PR #94868** fix(channels)",
        "description": "preserve command progress detail. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/94868"
      },
      {
        "title": "**PR #94891** fix(telegram)",
        "description": "send progress previews as html text. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/94891"
      },
      {
        "title": "**PR #94683** fix(outbound)",
        "description": "keep direct-only targets out of group sessions. Related #92384. Thanks @scotthuang and @haiwei01.",
        "href": "https://github.com/openclaw/openclaw/issues/94683"
      },
      {
        "title": "**PR #92477** fix",
        "description": "migrate watch app to single-target app (Xcode 27+ compat). Thanks @zats and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/92477"
      },
      {
        "title": "**PR #94812** test(perf)",
        "description": "compare saved CLI startup benchmarks. Thanks @FelixIsaac.",
        "href": "https://github.com/openclaw/openclaw/issues/94812"
      },
      {
        "title": "**PR #94856** fix(telegram)",
        "description": "normalize all HTML tables before entity-escaping in rich messages. Related #94317. Thanks @zhangqueping and @jairrab.",
        "href": "https://github.com/openclaw/openclaw/issues/94856"
      },
      {
        "title": "**PR #91685** fix(cron)",
        "description": "refuse keyless implicit isolated cron delivery inherited from shared agent-main bucket. Thanks @nxmxbbd.",
        "href": "https://github.com/openclaw/openclaw/issues/91685"
      }
    ],
    "fixes": [
      "Security and privacy: redact secrets from debug/config output, block internal HTTP session overrides, audit open-DM tool exposure, and retain plugin write ownership checks. (#93333, #88496, #93443, #92883, #93353) Thanks @Alix-007, @jason-allen-oneal, @coygeek, @RichardCao, @yu-xin-c, @cjg20ss, @eleqtrizit, and @vincentkoc.",
      "Agent and session runtime: retry thinking-only and empty post-tool turns, prevent duplicate hook execution, preserve pending subagent delivery, preserve fresh usage through compaction, and repair partial JSON/history artifacts. (#92191, #93073, #93009, #93084, #93469, #94349, #92383, #94257) Thanks @ai-hpc, @lml2468, @fuller-stack-dev, @zenglingbiao, @dertbv, @Hollychou924, @leno23, @de1tydev, @425072024, @wuwahe3, @drvoss, @vincentkoc, @sallyom, @oiGaDio, @Hidetsugu55, and @Nas01010101.",
      "Channels and replies: fix Telegram rich delivery, table rendering, action-error handling, progress draft cleanup before visible tool output, and ingress recovery; preserve command progress detail across channel adapters; retain WhatsApp opening text after a media failure; keep Mattermost thread replies intact; and harden Discord action handling. (#93286, #93364, #93281, #93002, #93076, #93334, #93424, #93488, #94868, #94891, #94856, #94810, #93823) Thanks @obviyus, @NianJiuZst, @mcaxtr, @zhangguiping-xydt, @rushindrasinha, @amknight, @lzyyzznl, @darealgege, @vincentkoc, @zhangqueping, @jairrab, @ZOOWH, @parveshsaini, and @yetval.",
      "Storage and migrations: avoid SQLite WAL on network filesystems, clean reindex artifacts, keep setup state out of workspace dot-directories, and import default-agent auth profiles into SQLite. (#93454, #92891, #93182, #93295, #93520, #93156) Thanks @vincentkoc, @ZengWen-DT, @Zeng-wen, @potterdigital, @Alix-007, @Pick-cat, @sallyom, @1qh, and @Tazio7.",
      "Provider and model behavior: fix Gemini CLI proxy OAuth, restore Codex Spark OAuth routing, correct Bedrock embedding model IDs, and preserve configured defaults in embedded runs. (#92815, #89133, #93452, #93428) Thanks @yetval, @EvetteYoung, @VACInc, @LiuwqGit, @aleck31, @zenglingbiao, @danielgerlag, and @vincentkoc.",
      "CLI, TUI, and apps: accept global flags after subcommands, keep terminal output and activity indicators visible, preserve CJK IME composition, and refresh stale UI state. (#93455, #93460, #93006, #93427, #93498, #93606) Thanks @ooiuuii, @Alix-007, @ZengWen-DT, @Zeng-wen, @AlethiaQuizForge, @Zhaoqj2016, @liuhao1024, @BrianClaw1955, @vincentkoc, and @NicoBoom13.",
      "Operations and updates: harden official plugin recovery, restart managed Gateways after failed update handoff, keep safe cron delivery defaults, avoid Node-specific npm prefixes, and keep package validation paths reliable. (#93325, #92111, #93650, #94453, #91685) Thanks @vincentkoc, @yetval, @ofan, @yaanfpv, @jincheng-xydt, @sallyom, @davectr, and @nxmxbbd."
    ]
  },
  {
    "version": "2026.6.8",
    "date": "2026.6.8",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202668",
    "features": [
      {
        "title": "**Richer channel delivery",
        "description": "** Telegram and WhatsApp are less brittle: Telegram renders structured text with tables, lists, expandable blockquotes, preserved intentional line breaks, and CLI-backed replies, while WhatsApp now honors configured ACP bindings. (#92679, #93164, #84082, #89421, #92513) Thanks @obviyus, @vincentkoc, @jzakirov, @spacegeologist, @TurboTheTurtle, @mcaxtr, @myrzka, and @dmorn.",
        "href": "https://github.com/openclaw/openclaw/issues/92679"
      },
      {
        "title": "**More reliable agent runs",
        "description": "** account-scoped DM sends, generated media completions, auto-reply message-tool final replies, reset archive fallback reads, restart shutdown aborts, yielded subagent pauses, and session identity prompts all stay on the correct recovery path. (#92788, #91246, #92879, #91357, #92631, #92468) Thanks @yetval, @TurboTheTurtle, @masatohoshino, @CadanHu, @vincentkoc, @ooiuuii, @openperf, @zhangguiping-xydt, @QQSHI13, @kumaxs, and @aleps001.",
        "href": "https://github.com/openclaw/openclaw/issues/92788"
      },
      {
        "title": "**Safer model routing",
        "description": "** new GLM-5.2 and Claude Haiku 4.5 catalog support arrives with normalized provider IDs, managed SecretRef auth, bounded model browsing, and safer OpenAI/Anthropic tool-schema recovery. (#92796, #90116, #92627, #90686, #92247, #92941) Thanks @arkyu2077, @liuhao1024, @lijenhsin, @rohitjavvadi, @samson910022, @maaron34, @syfvb, and @samson1357924.",
        "href": "https://github.com/openclaw/openclaw/issues/92796"
      },
      {
        "title": "**Useful usage footers",
        "description": "** `/usage` and reply payload hooks now have a native full footer renderer, default template, fixed-decimal formatting, credential-aware limits, better partial-count handling, and warnings for broken templates instead of silent bad output. (#92657, #89835, #89629) Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/92657"
      },
      {
        "title": "**Predictable web search defaults",
        "description": "** key-free providers such as Parallel Free, DuckDuckGo, Ollama, and Codex Hosted Search remain explicit opt-ins rather than surprising automatic fallbacks. (#93616) Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93616"
      },
      {
        "title": "**Calmer UI and mobile sessions",
        "description": "** workspace files start collapsed, WebChat backscroll survives streaming, the desktop session picker remains interactive, reset arguments survive dispatch, and iOS reconnects stale foreground Gateways. (#92779, #92622, #92705, #91353, #92552) Thanks @shakkernerd, @TurboTheTurtle, @NianJiuZst, @zhouhe-xydt, @Solvely-Colin, @MaBeitian, @vincentkoc, @Chang2020618, and @DrtyMorty.",
        "href": "https://github.com/openclaw/openclaw/issues/92779"
      },
      {
        "title": "**Resilient memory and state",
        "description": "** oversized OpenAI embedding batches split before 431s, QMD search stays available in transient mode, SQLite avoids WAL on NFS volumes, and full reindexes preserve rollback/cache recovery. (#92650, #92618, #92639, #91247, #92881) Thanks @mushuiyu886, @BrettHamlin, @zhbcher, @TurboTheTurtle, @Takhoffman, @849261680, @TSHOGX, @vincentkoc, and @AFabyTWE.",
        "href": "https://github.com/openclaw/openclaw/issues/92650"
      },
      {
        "title": "Providers/models",
        "description": "add GLM-5.2 support and Claude Haiku 4.5 catalog entries while keeping provider-qualified model IDs normalized across OpenRouter and Google Vertex paths. (#92796, #90116, #92627, #91218) Thanks @arkyu2077, @liuhao1024, @bymle, @maaron34, @lijenhsin, @davemorin, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92796"
      },
      {
        "title": "Web search",
        "description": "keep key-free providers such as Parallel Free, DuckDuckGo, Ollama, and Codex Hosted Search as explicit opt-ins instead of selecting them automatically when no API-backed provider is configured. (#93616) Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93616"
      },
      {
        "title": "Channel plugins",
        "description": "ship Telegram rich-message delivery and WhatsApp ACP binding support, including preserved intentional line breaks, rich prompt handoff to CLI backends, and transport fixtures for richer drafts. (#92679, #93164, #92513) Thanks @obviyus, @TurboTheTurtle, @vincentkoc, @mcaxtr, and @dmorn.",
        "href": "https://github.com/openclaw/openclaw/issues/92679"
      },
      {
        "title": "Agent commands",
        "description": "support `/btw` in CLI-backed sessions and keep CLI usage-error exits classified as usage failures instead of successful runs. (#92669, #92162) Thanks @joshavant, @Pandah97, @marcospaulo, @davemorin, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92669"
      },
      {
        "title": "Usage hooks",
        "description": "add built-in full footer rendering, default footer templates, per-turn usage state, credential-aware limits, and fixed-decimal formatting for usage-bar templates. (#92657, #89835, #89629) Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/92657"
      },
      {
        "title": "**PR #92144** fix(cron)",
        "description": "report SQLite storage path in cron.status instead of legacy jobs.json. Related #91766. Thanks @liuhao1024 and @AaronFaby.",
        "href": "https://github.com/openclaw/openclaw/issues/92144"
      },
      {
        "title": "**PR #92175** fix(channel)",
        "description": "harden local setup trust. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92175"
      },
      {
        "title": "**PR #91528** fix #73837",
        "description": "stop after failed Node package installs. Thanks @mushuiyu886 and @ItsMeForLua.",
        "href": "https://github.com/openclaw/openclaw/issues/91528"
      },
      {
        "title": "**PR #91561** fix(wizard)",
        "description": "report keyless web_search providers as ready, not missing a key. Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/issues/91561"
      },
      {
        "title": "**PR #92073** fix",
        "description": "handle explicit silent assistant replies. Related #92038. Thanks @sallyom and @vultusv.",
        "href": "https://github.com/openclaw/openclaw/issues/92073"
      },
      {
        "title": "**PR #91311** Allow Skill Workshop apply through trusted skill symlinks",
        "description": "**PR #91311** Allow Skill Workshop apply through trusted skill symlinks. Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/issues/91311"
      },
      {
        "title": "**PR #88245** refactor(whatsapp)",
        "description": "introduce inbound message contexts. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/88245"
      },
      {
        "title": "**PR #92212** refactor",
        "description": "move workspace skill writes to lifecycle. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/92212"
      },
      {
        "title": "**PR #92248** Remove ClawHub owner preflight",
        "description": "**PR #92248** Remove ClawHub owner preflight. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/92248"
      },
      {
        "title": "**PR #91617** test(sqlite)",
        "description": "add state perf query plan harness. Related #91616. Thanks @galiniliev.",
        "href": "https://github.com/openclaw/openclaw/issues/91617"
      },
      {
        "title": "**PR #91626** fix(daemon)",
        "description": "keep status readable on unsupported services. Related #25621. Thanks @mushuiyu886 and @kucharskim.",
        "href": "https://github.com/openclaw/openclaw/issues/91626"
      },
      {
        "title": "**PR #92295** fix(cron)",
        "description": "preserve tz and staggerMs when --cron replaces expression. Related #92291. Thanks @liuhao1024 and @dcapclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/92295"
      },
      {
        "title": "**PR #92087** fix(docker)",
        "description": "bundle QA Lab runtime in the image. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/92087"
      },
      {
        "title": "**PR #92004** fix(telegram)",
        "description": "classify streaming preview edit failures instead of killing the draft. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/92004"
      },
      {
        "title": "**PR #91997** fix(telegram)",
        "description": "survive getUpdates conflicts in isolated polling ingress. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91997"
      },
      {
        "title": "**PR #92387** fix(anthropic-vertex)",
        "description": "stop re-marking cache_control on transport-budgeted payloads. Related #91982. Thanks @openperf and @Takhoffman and @danieljimz.",
        "href": "https://github.com/openclaw/openclaw/issues/92387"
      },
      {
        "title": "**PR #92229** Fix doctor preview channel SecretRef resolution",
        "description": "**PR #92229** Fix doctor preview channel SecretRef resolution. Related #91939. Thanks @joshavant and @Niriakot.",
        "href": "https://github.com/openclaw/openclaw/issues/92229"
      },
      {
        "title": "**PR #92225** Fix disabled heartbeat one-shot cron retries",
        "description": "**PR #92225** Fix disabled heartbeat one-shot cron retries. Related #91775. Thanks @joshavant and @A1fred-AI.",
        "href": "https://github.com/openclaw/openclaw/issues/92225"
      },
      {
        "title": "**PR #92265** Fix configured DeepSeek model transport inheritance",
        "description": "**PR #92265** Fix configured DeepSeek model transport inheritance. Related #92148. Thanks @joshavant and @marcoraepple-sys.",
        "href": "https://github.com/openclaw/openclaw/issues/92265"
      },
      {
        "title": "**PR #92226** Fail closed for CLI-backed /btw fallback",
        "description": "**PR #92226** Fail closed for CLI-backed /btw fallback. Related #92168. Thanks @joshavant and @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/92226"
      },
      {
        "title": "**PR #92231** Fix suppressed heartbeat commitment delivery",
        "description": "**PR #92231** Fix suppressed heartbeat commitment delivery. Related #91948. Thanks @joshavant and @bizzle12368239.",
        "href": "https://github.com/openclaw/openclaw/issues/92231"
      },
      {
        "title": "**PR #92280** fix(agents)",
        "description": "classify structured unsupported model errors. Related #92118. Thanks @joshavant and @pikaqqqqqq.",
        "href": "https://github.com/openclaw/openclaw/issues/92280"
      },
      {
        "title": "**PR #92276** Fix OTLP log trace correlation",
        "description": "**PR #92276** Fix OTLP log trace correlation. Related #91865. Thanks @joshavant and @sinzin91.",
        "href": "https://github.com/openclaw/openclaw/issues/92276"
      },
      {
        "title": "**PR #92282** fix(update)",
        "description": "hand off Linux service auto-updates. Related #91823. Thanks @joshavant and @hanyizuo.",
        "href": "https://github.com/openclaw/openclaw/issues/92282"
      },
      {
        "title": "**PR #92235** fix",
        "description": "resolve managed SecretRef provider auth. Related #92097. Thanks @joshavant and @LINSUISHENG034.",
        "href": "https://github.com/openclaw/openclaw/issues/92235"
      },
      {
        "title": "**PR #92293** Fix provider static model fallback resolution",
        "description": "**PR #92293** Fix provider static model fallback resolution. Related #92009. Thanks @joshavant and @mattsfraser.",
        "href": "https://github.com/openclaw/openclaw/issues/92293"
      },
      {
        "title": "**PR #92343** fix(agent)",
        "description": "continue after source message tool replies. Related #92169. Thanks @joshavant and @elyalvarado.",
        "href": "https://github.com/openclaw/openclaw/issues/92343"
      },
      {
        "title": "**PR #92350** fix(codex)",
        "description": "preserve memory prompt registration. Thanks @rubencu and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/92350"
      },
      {
        "title": "**PR #92290** fix",
        "description": "clarify gateway SecretRef auth diagnostics. Related #91815. Thanks @joshavant and @mattsfraser.",
        "href": "https://github.com/openclaw/openclaw/issues/92290"
      },
      {
        "title": "**PR #92286** fix",
        "description": "repair rejected Anthropic thinking replay. Related #91983. Thanks @joshavant and @reginaldomarcilon.",
        "href": "https://github.com/openclaw/openclaw/issues/92286"
      },
      {
        "title": "**PR #92281** Fix Telegram spooled buffered replay",
        "description": "**PR #92281** Fix Telegram spooled buffered replay. Related #92129. Thanks @joshavant and @riseandshinefutures.",
        "href": "https://github.com/openclaw/openclaw/issues/92281"
      },
      {
        "title": "**PR #47493** fix(doctor)",
        "description": "show per-step progress spinners during update. Thanks @amersheeny.",
        "href": "https://github.com/openclaw/openclaw/issues/47493"
      },
      {
        "title": "**PR #92416** fix(outbound)",
        "description": "honor top-level image param as send media source (#92407). Thanks @xydigit-sj and @ichirokyoto.",
        "href": "https://github.com/openclaw/openclaw/pull/92407"
      },
      {
        "title": "**PR #92508** fix(sandbox)",
        "description": "render CLI skill prompts from materialized paths. Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/92508"
      },
      {
        "title": "**PR #92540** chore",
        "description": "fix esbuild production audit failure. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92540"
      },
      {
        "title": "**PR #91484** Add QA evidence artifact output",
        "description": "**PR #91484** Add QA evidence artifact output. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91484"
      },
      {
        "title": "**PR #91500** Add QA scorecard taxonomy validation",
        "description": "**PR #91500** Add QA scorecard taxonomy validation. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91500"
      },
      {
        "title": "**PR #84082** fix(telegram)",
        "description": "allow expandable blockquotes. Thanks @jzakirov.",
        "href": "https://github.com/openclaw/openclaw/issues/84082"
      },
      {
        "title": "**PR #92554** feat(moonshot)",
        "description": "add Kimi K2.7 Code support.",
        "href": "https://github.com/openclaw/openclaw/issues/92554"
      },
      {
        "title": "**PR #92396** fix(moonshot)",
        "description": "backfill reasoning_content on assistant tool-call replay messages. Related #71491. Thanks @xialonglee and @RoseKongPS.",
        "href": "https://github.com/openclaw/openclaw/issues/92396"
      },
      {
        "title": "**PR #92566** Fix lifecycle timeout cleanup after leader exit",
        "description": "**PR #92566** Fix lifecycle timeout cleanup after leader exit. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92566"
      },
      {
        "title": "**PR #92311** ci",
        "description": "split plugin ClawHub publishing paths. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/92311"
      },
      {
        "title": "**PR #92216** fix(gateway)",
        "description": "mirror hidden commentary-phase assistant events. Thanks @ragesaq.",
        "href": "https://github.com/openclaw/openclaw/issues/92216"
      },
      {
        "title": "**PR #87596** fix(moonshot)",
        "description": "rewrite duplicate native Kimi tool_call ids on replay. Related #51593. Thanks @Pluviobyte and @Faaab84.",
        "href": "https://github.com/openclaw/openclaw/issues/87596"
      },
      {
        "title": "**PR #88993** Expose paged channel action results",
        "description": "**PR #88993** Expose paged channel action results. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/88993"
      },
      {
        "title": "**PR #90326** fix(fireworks)",
        "description": "resolve catalog model params from plugin.json via core. Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/issues/90326"
      },
      {
        "title": "**PR #86629** fix(doctor)",
        "description": "warn for untrusted external Discord plugin. Related #83212. Thanks @brokemac79 and @ooiuuii and @cdeyoung67.",
        "href": "https://github.com/openclaw/openclaw/issues/86629"
      },
      {
        "title": "**PR #90242** fix(providers)",
        "description": "skip unreadable Mistral tool schemas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90242"
      },
      {
        "title": "**PR #92498** fix(reply)",
        "description": "mirror same-channel Slack final replies. Related #92489. Thanks @TurboTheTurtle and @TalkingHeadsJed.",
        "href": "https://github.com/openclaw/openclaw/issues/92498"
      },
      {
        "title": "**PR #92083** fix(channels)",
        "description": "default boundary logger for swallowed progress-draft start errors. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92083"
      },
      {
        "title": "**PR #92564** fix(agents)",
        "description": "isolate invalid plugin model catalogs [AI-assisted]. Related #92553. Thanks @tangtaizong666 and @fxstein.",
        "href": "https://github.com/openclaw/openclaw/issues/92564"
      },
      {
        "title": "**PR #89827** docs",
        "description": "UX-013 — design system documentation. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89827"
      },
      {
        "title": "**PR #89615** feat(ui)",
        "description": "hide empty workboard columns. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89615"
      },
      {
        "title": "**PR #89822** fix(a11y)",
        "description": "B-1+B-2+B-3 — contrast, focus states, minimum font sizes. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89822"
      },
      {
        "title": "**PR #92618** fix #92218",
        "description": "memory_search tool disabled with QMD backend. Thanks @mushuiyu886 and @zhbcher.",
        "href": "https://github.com/openclaw/openclaw/issues/92618"
      },
      {
        "title": "**PR #92608** docs(gateway)",
        "description": "add uptime monitoring guidance to health check docs (fixes #55768). Thanks @liuhao1024 and @faahim.",
        "href": "https://github.com/openclaw/openclaw/issues/55768"
      },
      {
        "title": "**PR #92605** fix(docs)",
        "description": "pin Windows Hub download links to v2026.6.5. Related #92470. Thanks @lzyyzznl and @arjkul.",
        "href": "https://github.com/openclaw/openclaw/issues/92605"
      },
      {
        "title": "**PR #92593** #92589",
        "description": "fix(internal-runtime-context): wrap prompt-preface runtime context body in delimiters. Thanks @zhangqueping and @jovi2014-cyber.",
        "href": "https://github.com/openclaw/openclaw/issues/92593"
      },
      {
        "title": "**PR #92606** Run Vitest and Playwright scenarios from qa suite",
        "description": "**PR #92606** Run Vitest and Playwright scenarios from qa suite. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92606"
      },
      {
        "title": "**PR #89629** feat(hooks)",
        "description": "per-turn usageState on reply_payload_sending. Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/89629"
      },
      {
        "title": "**PR #89835** feat(usage)",
        "description": "native templated /usage full footer renderer. Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/89835"
      },
      {
        "title": "**PR #92247** fix(models)",
        "description": "bound /models and models list catalog loading. Related #91809. Thanks @samson910022 and @samson1357924 and @syfvb.",
        "href": "https://github.com/openclaw/openclaw/issues/92247"
      },
      {
        "title": "**PR #92646** fix",
        "description": "require admin for HTTP model overrides. Thanks @steipete-oai.",
        "href": "https://github.com/openclaw/openclaw/issues/92646"
      },
      {
        "title": "**PR #90686** fix(gateway)",
        "description": "honor profile auth for SecretRef model entries. Related #90685. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/90686"
      },
      {
        "title": "**PR #92651** fix",
        "description": "require admin for HTTP session kills. Thanks @steipete-oai.",
        "href": "https://github.com/openclaw/openclaw/issues/92651"
      },
      {
        "title": "**PR #92652** test(models)",
        "description": "stabilize plugin auth marker fixtures.",
        "href": "https://github.com/openclaw/openclaw/issues/92652"
      },
      {
        "title": "**PR #89438** fix(slack)",
        "description": "warn when channels map is keyed by name instead of channel ID. Related #81665. Thanks @Alix-007 and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/issues/89438"
      },
      {
        "title": "**PR #92631** fix(agents)",
        "description": "pause yielded subagent runs whose terminal also signals abort. Related #92448. Thanks @openperf and @vincentkoc and @aleps001.",
        "href": "https://github.com/openclaw/openclaw/issues/92631"
      },
      {
        "title": "**PR #92622** fix(ui)",
        "description": "preserve WebChat backscroll during streaming. Related #92386. Thanks @TurboTheTurtle and @vincentkoc and @DrtyMorty.",
        "href": "https://github.com/openclaw/openclaw/issues/92622"
      },
      {
        "title": "**PR #92627** fix(openrouter)",
        "description": "strip openrouter/ prefix from model ID in normalizeResolvedModel hook (fixes #92611). Thanks @liuhao1024 and @lijenhsin.",
        "href": "https://github.com/openclaw/openclaw/issues/92611"
      },
      {
        "title": "**PR #92146** fix(cron)",
        "description": "preserve yielded media completions. Related #92120. Thanks @IWhatsskill and @nailujac.",
        "href": "https://github.com/openclaw/openclaw/issues/92146"
      },
      {
        "title": "**PR #90116** fix",
        "description": "add Claude Haiku 4.5 static catalog entries. Related #90088. Thanks @arkyu2077 and @maaron34.",
        "href": "https://github.com/openclaw/openclaw/issues/90116"
      },
      {
        "title": "**PR #91137** fix(channels)",
        "description": "keep contributed message-tool schema properties optional. Related #67852. Thanks @lundog and @RewardsPal.",
        "href": "https://github.com/openclaw/openclaw/issues/91137"
      },
      {
        "title": "**PR #75393** fix(copilot)",
        "description": "disable eager tool streaming for Claude 4.5. Related #75348. Thanks @Kailigithub and @finchinslc.",
        "href": "https://github.com/openclaw/openclaw/issues/75393"
      },
      {
        "title": "**PR #92628** fix #73713",
        "description": "surface nested embedding fetch failures. Thanks @mushuiyu886 and @crsnpalmer-art.",
        "href": "https://github.com/openclaw/openclaw/issues/92628"
      },
      {
        "title": "**PR #92510** fix(gateway)",
        "description": "reject unknown OpenAI agent selectors. Related #92504. Thanks @zhangguiping-xydt and @ryanhelms.",
        "href": "https://github.com/openclaw/openclaw/issues/92510"
      },
      {
        "title": "**PR #91453** fix #91420",
        "description": "[Bug]: Delivery retry loop corrupts active sessions (R-004) — retry selector bypasses delivery.mode=none. Thanks @zhangguiping-xydt and @CarotaWealth.",
        "href": "https://github.com/openclaw/openclaw/issues/91453"
      },
      {
        "title": "**PR #92468** fix #92453",
        "description": "add session identity to runtime prompt. Thanks @zhangguiping-xydt and @QQSHI13.",
        "href": "https://github.com/openclaw/openclaw/issues/92468"
      },
      {
        "title": "**PR #89943** fix(slack)",
        "description": "emit message_sent hook on outbound delivery (mirror Telegram). Related #89942. Thanks @rishitamrakar.",
        "href": "https://github.com/openclaw/openclaw/issues/89943"
      },
      {
        "title": "**PR #92668** fix(docs)",
        "description": "finalize i18n postprocess before skip. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92668"
      },
      {
        "title": "**PR #92673** fix",
        "description": "split image setup and request timeout semantics. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92673"
      },
      {
        "title": "**PR #92162** #92069",
        "description": "fix(cli): usage errors exit 0. Thanks @Pandah97 and @marcospaulo.",
        "href": "https://github.com/openclaw/openclaw/issues/92162"
      },
      {
        "title": "**PR #91185** fix(browser)",
        "description": "remove dead requireRef import and void expression in register.navigation.ts. Related #83878. Thanks @whiteyzy and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/91185"
      },
      {
        "title": "**PR #90706** fix(OpenAI Responses)",
        "description": "disable item id replay for storeless providers. Related #89728. Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/issues/90706"
      },
      {
        "title": "**PR #90247** fix(disk-space)",
        "description": "promote 1024 MiB to 1.0 GiB in disk warnings. Related #90245. Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/issues/90247"
      },
      {
        "title": "**PR #92657** feat(usage)",
        "description": "ship built-in /usage full footer. Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/92657"
      },
      {
        "title": "**PR #90464** perf(terminal)",
        "description": "reuse ANSI scanner during truncation. Thanks @yyzquwu.",
        "href": "https://github.com/openclaw/openclaw/issues/90464"
      },
      {
        "title": "**PR #91281** fix(feishu)",
        "description": "clear client cache when SDK is replaced via setFeishuClientRuntimeForTest. Related #83911. Thanks @whiteyzy and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/91281"
      },
      {
        "title": "**PR #92639** fix(memory)",
        "description": "keep memory_search in transient qmd mode. Related #92464. Thanks @TurboTheTurtle and @Takhoffman and @BrettHamlin.",
        "href": "https://github.com/openclaw/openclaw/issues/92639"
      },
      {
        "title": "**PR #91287** fix(cron)",
        "description": "de-duplicate main-session systemEvent in heartbeat model input. Related #44922. Thanks @ZengWen-DT and @GSL-R.",
        "href": "https://github.com/openclaw/openclaw/issues/91287"
      },
      {
        "title": "**PR #91246** Fix webchat media completion handoff",
        "description": "**PR #91246** Fix webchat media completion handoff. Related #91003. Thanks @TurboTheTurtle and @kumaxs.",
        "href": "https://github.com/openclaw/openclaw/issues/91246"
      },
      {
        "title": "**PR #91353** fix(ui)",
        "description": "preserve /reset soft args in Control UI dispatch. Related #91316. Thanks @zhouhe-xydt and @MaBeitian.",
        "href": "https://github.com/openclaw/openclaw/issues/91353"
      },
      {
        "title": "**PR #92679** feat(telegram)",
        "description": "send rich message text. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/92679"
      },
      {
        "title": "**PR #92705** fix(ui)",
        "description": "restore sidebar session picker interactivity above desktop workbench. Related #92707. Thanks @NianJiuZst and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92705"
      },
      {
        "title": "**PR #91218** fix(google)",
        "description": "strip provider prefix from Vertex model path. Thanks @bymle.",
        "href": "https://github.com/openclaw/openclaw/issues/91218"
      },
      {
        "title": "**PR #92669** feat",
        "description": "support /btw in CLI-backed sessions. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/92669"
      },
      {
        "title": "**PR #91357** fix(gateway)",
        "description": "mark active main sessions before restart shutdown aborts. Related #91355. Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/91357"
      },
      {
        "title": "**PR #91066** fix(parallel)",
        "description": "send openclaw-parallel User-Agent on free Search MCP requests. Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/issues/91066"
      },
      {
        "title": "**PR #90658** fix(ui)",
        "description": "preserve dashboard session parent lineage when session list is stale. Related #90623. Thanks @luoyanglang and @lily-oc.",
        "href": "https://github.com/openclaw/openclaw/issues/90658"
      },
      {
        "title": "**PR #92552** fix(ios)",
        "description": "force stale foreground gateway reconnects. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/issues/92552"
      },
      {
        "title": "**PR #89421** fix(telegram)",
        "description": "expose thread create CLI remap. Related #81581. Thanks @spacegeologist and @myrzka.",
        "href": "https://github.com/openclaw/openclaw/issues/89421"
      },
      {
        "title": "**PR #92779** fix",
        "description": "start workspace files collapsed. Related #90359. Thanks @shakkernerd and @Chang2020618.",
        "href": "https://github.com/openclaw/openclaw/issues/92779"
      },
      {
        "title": "**PR #91247** fix(state)",
        "description": "avoid sqlite wal on nfs state volumes. Related #90491. Thanks @849261680 and @AFabyTWE.",
        "href": "https://github.com/openclaw/openclaw/issues/91247"
      },
      {
        "title": "**PR #92773** fix(tui)",
        "description": "show resolved canonical model ref in /model confirmation. Thanks @NarahariRaghava.",
        "href": "https://github.com/openclaw/openclaw/issues/92773"
      },
      {
        "title": "**PR #92752** fix(diagnostics)",
        "description": "keep recovery scheduling out of the stuck-session warning backoff. Related #92742. Thanks @gnanam1990 and @Takhoffman and @zhuyankarl.",
        "href": "https://github.com/openclaw/openclaw/issues/92752"
      },
      {
        "title": "**PR #92735** fix(markdown-core)",
        "description": "treat Infinity chunk limit as unbounded, not 1. Related #92734. Thanks @yhterrance.",
        "href": "https://github.com/openclaw/openclaw/issues/92735"
      },
      {
        "title": "**PR #92695** docs(config)",
        "description": "correct maxConcurrent default in agent-defaults type comments (AI-assisted). Thanks @ArielSmoliar.",
        "href": "https://github.com/openclaw/openclaw/issues/92695"
      },
      {
        "title": "**PR #92766** clarify before_install hook scope",
        "description": "**PR #92766** clarify before_install hook scope. Related #91593. Thanks @sallyom and @Trump-last.",
        "href": "https://github.com/openclaw/openclaw/issues/92766"
      },
      {
        "title": "**PR #92677** docs(nodes)",
        "description": "add openclaw.json config example to Nodes overview. Related #92662. Thanks @liuhao1024 and @Casper-Mars.",
        "href": "https://github.com/openclaw/openclaw/issues/92677"
      },
      {
        "title": "**PR #92513** Honor WhatsApp configured ACP bindings",
        "description": "**PR #92513** Honor WhatsApp configured ACP bindings. Related #92449. Thanks @TurboTheTurtle and @mcaxtr and @dmorn.",
        "href": "https://github.com/openclaw/openclaw/issues/92513"
      },
      {
        "title": "**PR #92650** fix #92465",
        "description": "split OpenAI 431 embedding batches. Thanks @mushuiyu886 and @BrettHamlin.",
        "href": "https://github.com/openclaw/openclaw/issues/92650"
      },
      {
        "title": "**PR #92796** feat(providers)",
        "description": "add GLM-5.2 support.",
        "href": "https://github.com/openclaw/openclaw/issues/92796"
      },
      {
        "title": "**PR #92788** fix(sessions)",
        "description": "derive channel from account-scoped DM session keys in send-policy. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/92788"
      },
      {
        "title": "**PR #92590** Docker image ships an extraneous stale openclaw in /app/node_...",
        "description": "**PR #92590** Docker image ships an extraneous stale openclaw in /app/node_modules (extensions pin the published release). Related #92551. Thanks @lzyyzznl and @fxstein.",
        "href": "https://github.com/openclaw/openclaw/issues/92590"
      },
      {
        "title": "**PR #92393** chore(deps)",
        "description": "bump the swift-deps group across 1 directory with 3 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/92393"
      },
      {
        "title": "**PR #92476** fix(agents)",
        "description": "preserve compatible CLI session runtime pins. Thanks @yu-xin-c.",
        "href": "https://github.com/openclaw/openclaw/issues/92476"
      },
      {
        "title": "**PR #92483** fix(matrix)",
        "description": "validate CLI numeric option ranges. Related #92482. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/92483"
      },
      {
        "title": "**PR #92490** fix(canvas)",
        "description": "validate CLI numeric options. Related #92487. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/92490"
      },
      {
        "title": "**PR #92802** fix(ui)",
        "description": "reflow composer beside workspace rail. Thanks @Solvely-Colin and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/92802"
      },
      {
        "title": "**PR #91059** fix(configure)",
        "description": "mask gateway token input in CLI wizard prompt. Thanks @anurag-bg-neu.",
        "href": "https://github.com/openclaw/openclaw/issues/91059"
      },
      {
        "title": "**PR #91143** fix(ports)",
        "description": "only classify SSH -L/-R tunnels on the queried port as ssh. Related #91142. Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/issues/91143"
      },
      {
        "title": "**PR #91110** fix(tavily)",
        "description": "keep web_search contract executable. Related #91096. Thanks @extrasmall0 and @xucongyuan98-sys.",
        "href": "https://github.com/openclaw/openclaw/issues/91110"
      },
      {
        "title": "**PR #91181** fix(daemon)",
        "description": "strip schtasks backslash prefix when matching gateway task name. Related #90494. Thanks @425072024 and @Darnellicious.",
        "href": "https://github.com/openclaw/openclaw/issues/91181"
      },
      {
        "title": "**PR #91187** fix(cron)",
        "description": "isolate auth profile failure policy so cron runs don't pollute shared cooldowns. Related #90991. Thanks @openperf and @cx306806112.",
        "href": "https://github.com/openclaw/openclaw/issues/91187"
      },
      {
        "title": "**PR #92807** fix(heartbeat)",
        "description": "route outbound mirror to isolated session key. Thanks @agent-merkava.",
        "href": "https://github.com/openclaw/openclaw/issues/92807"
      },
      {
        "title": "**PR #92745** fix(memory)",
        "description": "explain skipped short-term recall hits. Related #92706. Thanks @mushuiyu886 and @armarinho.",
        "href": "https://github.com/openclaw/openclaw/issues/92745"
      },
      {
        "title": "**PR #92488** fix(gateway)",
        "description": "forward image-only input on /v1/responses (parity with chat completions). Thanks @s554097550 and @cursoragent.",
        "href": "https://github.com/openclaw/openclaw/issues/92488"
      },
      {
        "title": "**PR #92604** fix(status)",
        "description": "avoid cumulative usage for context percent. Related #83526. Thanks @ashishpatel26 and @darconadalabarga.",
        "href": "https://github.com/openclaw/openclaw/issues/92604"
      },
      {
        "title": "**PR #92810** fix",
        "description": "reject unvalidated voice media streams. Thanks @steipete-oai.",
        "href": "https://github.com/openclaw/openclaw/issues/92810"
      },
      {
        "title": "**PR #92800** fix(telegram)",
        "description": "answer callback queries before sequentialize delays them. Related #42156. Thanks @liuhao1024 and @Diaspar4u.",
        "href": "https://github.com/openclaw/openclaw/issues/92800"
      },
      {
        "title": "**PR #92547** fix(nodes)",
        "description": "surface pending reapproval diagnostics. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/92547"
      },
      {
        "title": "**PR #92690** fix(doctor)",
        "description": "avoid false-positive legacy cron store warning when store was already migrated (fixes #92683). Thanks @liuhao1024 and @motteman.",
        "href": "https://github.com/openclaw/openclaw/issues/92683"
      },
      {
        "title": "**PR #92806** fix(telegram)",
        "description": "skip IPv4 fallback when user explicitly configures non-ipv4first dnsResultOrder (fixes #41671). Thanks @liuhao1024 and @vincentkoc and @leandroirani933-ctrl.",
        "href": "https://github.com/openclaw/openclaw/issues/41671"
      },
      {
        "title": "**PR #92778** fix(macos)",
        "description": "defer isOverflowing mutation to break SwiftUI render loop (fixes #43480). Thanks @liuhao1024 and @vincentkoc and @gdiab.",
        "href": "https://github.com/openclaw/openclaw/issues/43480"
      },
      {
        "title": "**PR #92795** fix(gateway)",
        "description": "use resolveNonNegativeNumber for totalTokens to display 0 instead of ? (fixes #43009). Thanks @liuhao1024 and @vincentkoc and @ltxy12138-ai.",
        "href": "https://github.com/openclaw/openclaw/issues/43009"
      },
      {
        "title": "**PR #92746** fix(gateway)",
        "description": "preserve active runs during plugin finalization. Thanks @scotthuang and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92746"
      },
      {
        "title": "**PR #92820** UI",
        "description": "localize Logs tab labels. Thanks @rubensfox20.",
        "href": "https://github.com/openclaw/openclaw/issues/92820"
      },
      {
        "title": "**PR #92825** fix(telegram)",
        "description": "preserve command callbacks while prefixing generic callback data. Related #54909. Thanks @hnshah and @timt80.",
        "href": "https://github.com/openclaw/openclaw/issues/92825"
      },
      {
        "title": "**PR #90889** fix",
        "description": "cap session context overrides by model window. Related #39857. Thanks @xdanger.",
        "href": "https://github.com/openclaw/openclaw/issues/90889"
      },
      {
        "title": "**PR #92830** fix(copilot)",
        "description": "strip replayed thinking blocks. Related #81520. Thanks @giodl73-repo and @warcold.",
        "href": "https://github.com/openclaw/openclaw/issues/92830"
      },
      {
        "title": "**PR #92834** feat(browser)",
        "description": "extend --labels overlay to full-page and element captures. Thanks @hxy91819 and @FMLS and @cursoragent.",
        "href": "https://github.com/openclaw/openclaw/issues/92834"
      },
      {
        "title": "**PR #92836** fix(discord)",
        "description": "raise thread title timeout and tokens to fit reasoning models. Thanks @hanamizuki.",
        "href": "https://github.com/openclaw/openclaw/issues/92836"
      },
      {
        "title": "**PR #92095** fix #92039",
        "description": "[Bug]: WhatsApp login reports success before auth is durably persisted, so Docker rebuilds/upgrades can force relink. Thanks @zhangguiping-xydt and @dinorastoder.",
        "href": "https://github.com/openclaw/openclaw/issues/92095"
      },
      {
        "title": "**PR #92801** fix(stale)",
        "description": "exempt ClawSweeper actionable labels from stale lifecycle (fixes #89564). Thanks @liuhao1024 and @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/89564"
      },
      {
        "title": "**PR #89736** fix(status)",
        "description": "render sub-1000 token counts as plain integers. Related #89735. Thanks @jbetala7 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89736"
      },
      {
        "title": "**PR #92792** fix(agents)",
        "description": "catch malformed image blocks in sanitizeContentBlocksImages. Thanks @LowCode191 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92792"
      },
      {
        "title": "**PR #92555** ci",
        "description": "gate stable releases on Windows companion assets. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/92555"
      },
      {
        "title": "**PR #91824** fix(agents)",
        "description": "add usage guidance to sessions_spawn tool description (fixes #91814). Thanks @zenglingbiao and @vincentkoc and @cattails-lgao.",
        "href": "https://github.com/openclaw/openclaw/issues/91814"
      },
      {
        "title": "**PR #92840** fix(feishu)",
        "description": "await HTTP server shutdown during monitor cleanup. Related #48183. Thanks @alex-xuweilong and @ai-nurmamat.",
        "href": "https://github.com/openclaw/openclaw/issues/92840"
      },
      {
        "title": "**PR #91632** feat",
        "description": "add tool search directory mode. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/91632"
      },
      {
        "title": "**PR #92823** fix(qqbot)",
        "description": "surface failed media sends. Thanks @zhangguiping-xydt and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92823"
      },
      {
        "title": "**PR #92849** fix(tailscale)",
        "description": "preserve parse errors for malformed JSON. Thanks @franciscomaestre.",
        "href": "https://github.com/openclaw/openclaw/issues/92849"
      },
      {
        "title": "**PR #92045** Fix diagnostics OTEL runtime install trust",
        "description": "**PR #92045** Fix diagnostics OTEL runtime install trust. Thanks @efpiva.",
        "href": "https://github.com/openclaw/openclaw/issues/92045"
      },
      {
        "title": "**PR #92853** fix(acp)",
        "description": "accept MCP date protocolVersion in ACP server. Related #56102. Thanks @bugkill3r and @moliveto.",
        "href": "https://github.com/openclaw/openclaw/issues/92853"
      },
      {
        "title": "**PR #92854** fix(hooks)",
        "description": "reject slug-generator error payloads. Thanks @Cypherm.",
        "href": "https://github.com/openclaw/openclaw/issues/92854"
      },
      {
        "title": "**PR #92855** fix(ui)",
        "description": "repair iOS Safari chat viewport handling. Thanks @macdao.",
        "href": "https://github.com/openclaw/openclaw/issues/92855"
      },
      {
        "title": "**PR #91586** fix(update)",
        "description": "continue after package doctor warnings. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/91586"
      },
      {
        "title": "**PR #92862** fix(feishu)",
        "description": "target typing reaction on inbound message. Thanks @huiwen01.",
        "href": "https://github.com/openclaw/openclaw/issues/92862"
      },
      {
        "title": "**PR #92861** fix(lobster)",
        "description": "surface workflow path errors. Related #68101. Thanks @vvitovec and @MPC7500.",
        "href": "https://github.com/openclaw/openclaw/issues/92861"
      },
      {
        "title": "**PR #69975** fix(cli)",
        "description": "clarify --tz help text for offset-less --at values. Related #59456. Thanks @rrrrrredy.",
        "href": "https://github.com/openclaw/openclaw/issues/69975"
      },
      {
        "title": "**PR #90682** fix(openai)",
        "description": "preserve opaque reasoning transcript fields. Related #90093. Thanks @toruvieI and @richardmqq.",
        "href": "https://github.com/openclaw/openclaw/issues/90682"
      },
      {
        "title": "**PR #92373** fix(anthropic)",
        "description": "strip thinking blocks from history when thinking is disabled (fixes #92360). Thanks @liuhao1024 and @notnaji.",
        "href": "https://github.com/openclaw/openclaw/issues/92360"
      },
      {
        "title": "**PR #87346** fix(anthropic)",
        "description": "merge consecutive assistant turns in turn validation. Related #87329. Thanks @Jefsky and @travellingsoldier85.",
        "href": "https://github.com/openclaw/openclaw/issues/87346"
      },
      {
        "title": "**PR #92896** fix(anthropic)",
        "description": "quarantine invalid direct tool schemas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92896"
      },
      {
        "title": "**PR #90739** fix(active-memory)",
        "description": "preserve verbose recall summaries. Related #90454. Thanks @brokemac79 and @nocode-ananas.",
        "href": "https://github.com/openclaw/openclaw/issues/90739"
      },
      {
        "title": "**PR #92558** Simplify QA scorecard mapping shape",
        "description": "**PR #92558** Simplify QA scorecard mapping shape. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92558"
      },
      {
        "title": "**PR #92876** fix(memory-wiki)",
        "description": "stop flagging raw source pages as malformed. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92876"
      },
      {
        "title": "**PR #92908** fix(providers)",
        "description": "quarantine unreadable Anthropic payload tools. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92908"
      },
      {
        "title": "**PR #92881** fix(memory)",
        "description": "preserve reindex rollback recovery. Thanks @TSHOGX and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92881"
      },
      {
        "title": "**PR #92921** fix(openai)",
        "description": "quarantine unreadable tool schemas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92921"
      },
      {
        "title": "**PR #92550** Fold Telegram RTT sampling into live QA evidence",
        "description": "**PR #92550** Fold Telegram RTT sampling into live QA evidence. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92550"
      },
      {
        "title": "**PR #92824** fix(media)",
        "description": "route OAuth image defaults through Codex. Related #87168. Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/issues/92824"
      },
      {
        "title": "**PR #92928** fix(openai)",
        "description": "guard post-hook tool payloads. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92928"
      },
      {
        "title": "**PR #92814** fix(feishu)",
        "description": "re-resolve route when dynamic agent binding already exists in runtime config (fixes #42837). Thanks @liuhao1024 and @vincentkoc and @cwlong163-afk.",
        "href": "https://github.com/openclaw/openclaw/issues/42837"
      },
      {
        "title": "**PR #89055** fix",
        "description": "restart gateway after isolated cron setup timeout. Thanks @ghitafilali.",
        "href": "https://github.com/openclaw/openclaw/issues/89055"
      },
      {
        "title": "**PR #90574** fix(openai)",
        "description": "omit gpt-5.5 tool reasoning effort. Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/issues/90574"
      },
      {
        "title": "**PR #92941** fix(openai)",
        "description": "recover invalid reasoning signatures.",
        "href": "https://github.com/openclaw/openclaw/issues/92941"
      },
      {
        "title": "**PR #92914** fix(agents)",
        "description": "clamp unsupported thinking for subagent spawns instead of hard-failing. Related #92412. Thanks @openperf and @oiGaDio.",
        "href": "https://github.com/openclaw/openclaw/issues/92914"
      },
      {
        "title": "**PR #92573** fix",
        "description": "preserve config-selected subagent model overrides. Related #92486. Thanks @arkyu2077 and @PatrickTrent.",
        "href": "https://github.com/openclaw/openclaw/issues/92573"
      },
      {
        "title": "**PR #92852** fix(gateway)",
        "description": "fall back to polling when config watcher exhausts inotify retries. Related #92851. Thanks @danbao.",
        "href": "https://github.com/openclaw/openclaw/issues/92852"
      },
      {
        "title": "**PR #92362** fix(gateway)",
        "description": "build row metadata context for single session lists. Thanks @anyech.",
        "href": "https://github.com/openclaw/openclaw/issues/92362"
      },
      {
        "title": "**PR #92897** fix(memory-wiki)",
        "description": "tolerate public artifacts without agent ids. Related #92207. Thanks @yu-xin-c and @qq230849622-a11y.",
        "href": "https://github.com/openclaw/openclaw/issues/92897"
      },
      {
        "title": "**PR #92002** fix(lmstudio)",
        "description": "deliver thinking \"off\" to binary-thinking models. Related #91913. Thanks @nxmxbbd and @mlaihk.",
        "href": "https://github.com/openclaw/openclaw/issues/92002"
      },
      {
        "title": "**PR #92738** Forward suppressed-source progress for message-tool channel r...",
        "description": "**PR #92738** Forward suppressed-source progress for message-tool channel replies. Thanks @ragesaq.",
        "href": "https://github.com/openclaw/openclaw/issues/92738"
      },
      {
        "title": "**PR #92916** #92201",
        "description": "Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic); recovery wrapper never fires because error text is genericized. Thanks @mmyzwl and @CarlCapital.",
        "href": "https://github.com/openclaw/openclaw/issues/92916"
      },
      {
        "title": "**PR #90936** fix(agents)",
        "description": "do not misclassify client-disconnect abort as run timeout. Related #90764. Thanks @openperf and @reginaldomarcilon.",
        "href": "https://github.com/openclaw/openclaw/issues/90936"
      },
      {
        "title": "**PR #93009** fix(agents)",
        "description": "make wrapToolWithBeforeToolCallHook idempotent to prevent double hook execution (fixes #92973). Thanks @zenglingbiao and @dertbv.",
        "href": "https://github.com/openclaw/openclaw/issues/92973"
      },
      {
        "title": "**PR #92318** fix(cron)",
        "description": "require explicit message target proof. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92318"
      },
      {
        "title": "**PR #93022** fix(gateway)",
        "description": "repair usage cost aggregation across agents. Thanks @luke-skywalker-open-claw and @stablegenius49.",
        "href": "https://github.com/openclaw/openclaw/issues/93022"
      },
      {
        "title": "**PR #93159** fix(tui)",
        "description": "keep parent stdin paused after exit. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/93159"
      },
      {
        "title": "**PR #93616** Keep key-free web search providers opt-in",
        "description": "**PR #93616** Keep key-free web search providers opt-in. Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93616"
      },
      {
        "title": "**PR #93164** fix(telegram)",
        "description": "preserve rich markdown line breaks. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/93164"
      }
    ],
    "fixes": [
      "Channels and delivery: preserve account-scoped DM channel send policy, intentional rich-message line breaks in Telegram and status output, rich Telegram final replies, rich Telegram tables and lists, Telegram thread-create CLI remapping, Feishu dynamic-agent routes after persisted binding reuse, Slack outbound `message_sent` hooks, contributed message-tool schema optionality, same-channel generated media completions, and channel chunking around surrogate pairs and Infinity limits. (#92788, #93164, #92679, #89421, #89943, #42837, #92814, #91137, #91246, #92735) Thanks @yetval, @obviyus, @spacegeologist, @rishitamrakar, @liuhao1024, @lundog, @TurboTheTurtle, @yhterrance, @vincentkoc, @myrzka, @cwlong163-afk, @kumaxs, @shakkernerd, and @RewardsPal.",
      "Gemini CLI: use the selected OpenClaw OAuth/API-key auth profile in an isolated Gemini CLI runtime home, preventing ambient Google machine credentials from overriding the chosen profile. (#88748) Thanks @jason-allen-oneal and @shakkernerd.",
      "Feishu: fetch quoted/replied message content before the empty-message guard so a mention-only reply that quotes a message with meaningful content is no longer dropped. (#90192) Thanks @bladin.",
      "Discord: give generated auto-thread titles a 60-second timeout and 4,096-token reasoning-model output budget, clamped to the selected model output cap. (#64734) Thanks @hanamizuki.",
      "Agent, cron, and Gateway runtime: mark active main sessions before restart shutdown aborts, pause yielded subagent runs whose terminal also signals abort, clamp trusted subagent thinking overrides through provider/model fallback, preserve yielded media completions, deliver channel message-tool final replies through auto-reply while hiding internal delivery hints, restore reset archive fallback reads when active async transcripts are missing, de-duplicate main-session heartbeat events, expose session identity in runtime prompts, reject unknown OpenAI agent selectors, keep generated media completions, slash-command block replies, and trajectory export commands in WebChat, and require admin privileges for HTTP session/model override surfaces. (#91357, #92631, #92412, #92146, #92879, #91287, #92468, #92510, #91246, #92651, #92646) Thanks @ooiuuii, @openperf, @IWhatsskill, @masatohoshino, @CadanHu, @ZengWen-DT, @zhangguiping-xydt, @TurboTheTurtle, @oiGaDio, @aleps001, @vincentkoc, @GSL-R, @QQSHI13, @ryanhelms, @kumaxs, @steipete-oai, @hxy91819, @davemorin, and @nailujac.",
      "Providers and model replay: preserve storeless OpenAI Responses replay compatibility, recover invalid OpenAI reasoning signatures and genericized Anthropic thinking-signature replay errors, route OAuth image defaults through Codex for eligible OpenAI profiles, avoid eager tool streaming for Claude 4.5 in Copilot, quarantine unreadable and post-hook OpenAI/Anthropic-family tool schemas without broadening allowed tool choices, deliver explicit thinking-off requests to LM Studio binary-thinking models, honor profile auth for SecretRef model entries, bound model browsing, strip provider prefixes where runtimes need bare IDs, and surface nested embedding fetch failures. (#90706, #92941, #92201, #92916, #92824, #75393, #92908, #92921, #92928, #92002, #90686, #92247, #92627, #91218, #92628) Thanks @snowzlm, @mmyzwl, @CarlCapital, @bek91, @Kailigithub, @vincentkoc, @rohitjavvadi, @samson910022, @nxmxbbd, @liuhao1024, @bymle, @mushuiyu886, @finchinslc, @syfvb, @lijenhsin, @crsnpalmer-art, @samson1357924, @shakkernerd, and @mlaihk.",
      "Memory, state, diagnostics, and config: split header-too-large embedding batches, keep QMD memory search enabled in transient mode, avoid SQLite WAL on NFS volumes, preserve recovery scheduling outside stuck-session warning backoff, preserve full-reindex rollback/cache recovery, and treat raw Memory Wiki source pages as source evidence. (#92650, #92618, #92639, #91247, #92752, #92881, #59137, #92876) Thanks @mushuiyu886, @TurboTheTurtle, @849261680, @gnanam1990, @TSHOGX, @vincentkoc, @arlen8411, @BrettHamlin, @zhbcher, @Takhoffman, @AFabyTWE, @davemorin, and @zhuyankarl.",
      "UI/mobile/TUI: preserve dashboard session parent lineage, WebChat backscroll, reset soft command args, sidebar session picker interactivity, collapsed workspace files, resolved `/model` confirmation refs, stale foreground iOS Gateway reconnects, and paused setup-parent stdin after inherited-stdio child exit. (#90658, #92622, #91353, #92705, #92779, #92773, #92552, #93159) Thanks @luoyanglang, @TurboTheTurtle, @zhouhe-xydt, @NianJiuZst, @shakkernerd, @NarahariRaghava, @Solvely-Colin, @fuller-stack-dev, @lily-oc, @MaBeitian, @vincentkoc, @obviyus, @DrtyMorty, and @Chang2020618.",
      "Plugins and updates: repair missing required platform packages during managed plugin installs and updates, including omitted Codex platform binaries. Thanks @vincentkoc.",
      "Dependencies: update Hono to 4.12.25 so published OpenClaw and ACPX packages use the patched runtime. Thanks @vincentkoc.",
      "Updates: avoid a false downgrade prompt when the latest tag cannot resolve. (#92911) Thanks @Andy312432 and @vincentkoc."
    ]
  },
  {
    "version": "2026.6.7",
    "date": "2026.6.7",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202667",
    "features": [
      {
        "title": "**Durable channel replies",
        "description": "** Telegram polling and preview failures recover instead of ending a stream, Slack keeps delivered replies in the transcript, and top-level image sends retain their intended media source. (#92281, #92498, #92416) Thanks @joshavant, @TurboTheTurtle, @xydigit-sj, @ichirokyoto, @TalkingHeadsJed, and @riseandshinefutures.",
        "href": "https://github.com/openclaw/openclaw/issues/92281"
      },
      {
        "title": "**More dependable provider sessions",
        "description": "** SecretRef-backed profiles, configured DeepSeek transports, static model fallback, Anthropic thinking replay, and Codex prompt memory all recover cleanly instead of leaving a turn unusable. (#92265, #92235, #92293, #92286, #92350) Thanks @joshavant, @rubencu, @sallyom, @marcoraepple-sys, @LINSUISHENG034, @mattsfraser, and @reginaldomarcilon.",
        "href": "https://github.com/openclaw/openclaw/issues/92265"
      },
      {
        "title": "**Kimi K2.7 Code support",
        "description": "** the provider catalog now includes the new Kimi coding model, with replay handling that preserves its reasoning content across tool turns. (#92554, #92396) Thanks @xialonglee and @RoseKongPS.",
        "href": "https://github.com/openclaw/openclaw/issues/92554"
      },
      {
        "title": "**Safer operations",
        "description": "** SQLite-backed cron status, disabled heartbeat retries, Linux service updates, and external-plugin diagnosis now expose clearer, actionable state to operators. (#92144, #92225, #92282, #86629) Thanks @liuhao1024, @joshavant, @brokemac79, @AaronFaby, @cdeyoung67, @ooiuuii, @shakkernerd, @A1fred-AI, and @hanyizuo.",
        "href": "https://github.com/openclaw/openclaw/issues/92144"
      },
      {
        "title": "**Guarded skill installs",
        "description": "** Skill Workshop support-file targets now go through trusted lifecycle writes instead of unbounded filesystem updates, while ClawHub package checks stay on the current release path. (#91311) Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/pull/91311"
      },
      {
        "title": "Skills and plugin workflows now permit trusted Skill Workshop support-file...",
        "description": "Skills and plugin workflows now permit trusted Skill Workshop support-file targets only through guarded lifecycle writes, and package publishing uses the current ClawHub plugin checks. (#91311) Thanks @abnershang and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91311"
      },
      {
        "title": "Providers",
        "description": "add Kimi K2.7 Code support. (#92554)",
        "href": "https://github.com/openclaw/openclaw/pull/92554"
      },
      {
        "title": "**PR #92144** fix(cron)",
        "description": "report SQLite storage path in cron.status instead of legacy jobs.json. Related #91766. Thanks @liuhao1024 and @AaronFaby.",
        "href": "https://github.com/openclaw/openclaw/issues/92144"
      },
      {
        "title": "**PR #92175** fix(channel)",
        "description": "harden local setup trust. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/92175"
      },
      {
        "title": "**PR #91528** fix #73837",
        "description": "stop after failed Node package installs. Thanks @mushuiyu886 and @ItsMeForLua.",
        "href": "https://github.com/openclaw/openclaw/issues/91528"
      },
      {
        "title": "**PR #91561** fix(wizard)",
        "description": "report keyless web_search providers as ready, not missing a key. Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/issues/91561"
      },
      {
        "title": "**PR #92073** fix",
        "description": "handle explicit silent assistant replies. Related #92038. Thanks @sallyom and @vultusv.",
        "href": "https://github.com/openclaw/openclaw/issues/92073"
      },
      {
        "title": "**PR #91311** Allow Skill Workshop apply through trusted skill symlinks",
        "description": "**PR #91311** Allow Skill Workshop apply through trusted skill symlinks. Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/issues/91311"
      },
      {
        "title": "**PR #88245** refactor(whatsapp)",
        "description": "introduce inbound message contexts. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/88245"
      },
      {
        "title": "**PR #92212** refactor",
        "description": "move workspace skill writes to lifecycle. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/92212"
      },
      {
        "title": "**PR #92248** Remove ClawHub owner preflight",
        "description": "**PR #92248** Remove ClawHub owner preflight. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/92248"
      },
      {
        "title": "**PR #91617** test(sqlite)",
        "description": "add state perf query plan harness. Related #91616. Thanks @galiniliev.",
        "href": "https://github.com/openclaw/openclaw/issues/91617"
      },
      {
        "title": "**PR #91626** fix(daemon)",
        "description": "keep status readable on unsupported services. Related #25621. Thanks @mushuiyu886 and @kucharskim.",
        "href": "https://github.com/openclaw/openclaw/issues/91626"
      },
      {
        "title": "**PR #92295** fix(cron)",
        "description": "preserve tz and staggerMs when --cron replaces expression. Related #92291. Thanks @liuhao1024 and @dcapclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/92295"
      },
      {
        "title": "**PR #92087** fix(docker)",
        "description": "bundle QA Lab runtime in the image. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/92087"
      },
      {
        "title": "**PR #92004** fix(telegram)",
        "description": "classify streaming preview edit failures instead of killing the draft. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/92004"
      },
      {
        "title": "**PR #91997** fix(telegram)",
        "description": "survive getUpdates conflicts in isolated polling ingress. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91997"
      },
      {
        "title": "**PR #92387** fix(anthropic-vertex)",
        "description": "stop re-marking cache_control on transport-budgeted payloads. Related #91982. Thanks @openperf and @Takhoffman and @danieljimz.",
        "href": "https://github.com/openclaw/openclaw/issues/92387"
      },
      {
        "title": "**PR #92229** Fix doctor preview channel SecretRef resolution",
        "description": "**PR #92229** Fix doctor preview channel SecretRef resolution. Related #91939. Thanks @joshavant and @Niriakot.",
        "href": "https://github.com/openclaw/openclaw/issues/92229"
      },
      {
        "title": "**PR #92225** Fix disabled heartbeat one-shot cron retries",
        "description": "**PR #92225** Fix disabled heartbeat one-shot cron retries. Related #91775. Thanks @joshavant and @A1fred-AI.",
        "href": "https://github.com/openclaw/openclaw/issues/92225"
      },
      {
        "title": "**PR #92265** Fix configured DeepSeek model transport inheritance",
        "description": "**PR #92265** Fix configured DeepSeek model transport inheritance. Related #92148. Thanks @joshavant and @marcoraepple-sys.",
        "href": "https://github.com/openclaw/openclaw/issues/92265"
      },
      {
        "title": "**PR #92226** Fail closed for CLI-backed /btw fallback",
        "description": "**PR #92226** Fail closed for CLI-backed /btw fallback. Related #92168. Thanks @joshavant and @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/92226"
      },
      {
        "title": "**PR #92231** Fix suppressed heartbeat commitment delivery",
        "description": "**PR #92231** Fix suppressed heartbeat commitment delivery. Related #91948. Thanks @joshavant and @bizzle12368239.",
        "href": "https://github.com/openclaw/openclaw/issues/92231"
      },
      {
        "title": "**PR #92280** fix(agents)",
        "description": "classify structured unsupported model errors. Related #92118. Thanks @joshavant and @pikaqqqqqq.",
        "href": "https://github.com/openclaw/openclaw/issues/92280"
      },
      {
        "title": "**PR #92276** Fix OTLP log trace correlation",
        "description": "**PR #92276** Fix OTLP log trace correlation. Related #91865. Thanks @joshavant and @sinzin91.",
        "href": "https://github.com/openclaw/openclaw/issues/92276"
      },
      {
        "title": "**PR #92282** fix(update)",
        "description": "hand off Linux service auto-updates. Related #91823. Thanks @joshavant and @hanyizuo.",
        "href": "https://github.com/openclaw/openclaw/issues/92282"
      },
      {
        "title": "**PR #92235** fix",
        "description": "resolve managed SecretRef provider auth. Related #92097. Thanks @joshavant and @LINSUISHENG034.",
        "href": "https://github.com/openclaw/openclaw/issues/92235"
      },
      {
        "title": "**PR #92293** Fix provider static model fallback resolution",
        "description": "**PR #92293** Fix provider static model fallback resolution. Related #92009. Thanks @joshavant and @mattsfraser.",
        "href": "https://github.com/openclaw/openclaw/issues/92293"
      },
      {
        "title": "**PR #92343** fix(agent)",
        "description": "continue after source message tool replies. Related #92169. Thanks @joshavant and @elyalvarado.",
        "href": "https://github.com/openclaw/openclaw/issues/92343"
      },
      {
        "title": "**PR #92350** fix(codex)",
        "description": "preserve memory prompt registration. Thanks @rubencu and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/92350"
      },
      {
        "title": "**PR #92290** fix",
        "description": "clarify gateway SecretRef auth diagnostics. Related #91815. Thanks @joshavant and @mattsfraser.",
        "href": "https://github.com/openclaw/openclaw/issues/92290"
      },
      {
        "title": "**PR #92286** fix",
        "description": "repair rejected Anthropic thinking replay. Related #91983. Thanks @joshavant and @reginaldomarcilon.",
        "href": "https://github.com/openclaw/openclaw/issues/92286"
      },
      {
        "title": "**PR #92281** Fix Telegram spooled buffered replay",
        "description": "**PR #92281** Fix Telegram spooled buffered replay. Related #92129. Thanks @joshavant and @riseandshinefutures.",
        "href": "https://github.com/openclaw/openclaw/issues/92281"
      },
      {
        "title": "**PR #47493** fix(doctor)",
        "description": "show per-step progress spinners during update. Thanks @amersheeny.",
        "href": "https://github.com/openclaw/openclaw/issues/47493"
      },
      {
        "title": "**PR #92416** fix(outbound)",
        "description": "honor top-level image param as send media source (#92407). Thanks @xydigit-sj and @ichirokyoto.",
        "href": "https://github.com/openclaw/openclaw/pull/92407"
      },
      {
        "title": "**PR #92508** fix(sandbox)",
        "description": "render CLI skill prompts from materialized paths. Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/92508"
      },
      {
        "title": "**PR #92540** chore",
        "description": "fix esbuild production audit failure. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92540"
      },
      {
        "title": "**PR #91484** Add QA evidence artifact output",
        "description": "**PR #91484** Add QA evidence artifact output. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91484"
      },
      {
        "title": "**PR #91500** Add QA scorecard taxonomy validation",
        "description": "**PR #91500** Add QA scorecard taxonomy validation. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91500"
      },
      {
        "title": "**PR #84082** fix(telegram)",
        "description": "allow expandable blockquotes. Thanks @jzakirov.",
        "href": "https://github.com/openclaw/openclaw/issues/84082"
      },
      {
        "title": "**PR #92554** feat(moonshot)",
        "description": "add Kimi K2.7 Code support.",
        "href": "https://github.com/openclaw/openclaw/issues/92554"
      },
      {
        "title": "**PR #92396** fix(moonshot)",
        "description": "backfill reasoning_content on assistant tool-call replay messages. Related #71491. Thanks @xialonglee and @RoseKongPS.",
        "href": "https://github.com/openclaw/openclaw/issues/92396"
      },
      {
        "title": "**PR #92566** Fix lifecycle timeout cleanup after leader exit",
        "description": "**PR #92566** Fix lifecycle timeout cleanup after leader exit. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92566"
      },
      {
        "title": "**PR #92311** ci",
        "description": "split plugin ClawHub publishing paths. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/92311"
      },
      {
        "title": "**PR #92216** fix(gateway)",
        "description": "mirror hidden commentary-phase assistant events. Thanks @ragesaq.",
        "href": "https://github.com/openclaw/openclaw/issues/92216"
      },
      {
        "title": "**PR #87596** fix(moonshot)",
        "description": "rewrite duplicate native Kimi tool_call ids on replay. Related #51593. Thanks @Pluviobyte and @Faaab84.",
        "href": "https://github.com/openclaw/openclaw/issues/87596"
      },
      {
        "title": "**PR #88993** Expose paged channel action results",
        "description": "**PR #88993** Expose paged channel action results. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/88993"
      },
      {
        "title": "**PR #90326** fix(fireworks)",
        "description": "resolve catalog model params from plugin.json via core. Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/issues/90326"
      },
      {
        "title": "**PR #86629** fix(doctor)",
        "description": "warn for untrusted external Discord plugin. Related #83212. Thanks @brokemac79 and @ooiuuii and @cdeyoung67.",
        "href": "https://github.com/openclaw/openclaw/issues/86629"
      },
      {
        "title": "**PR #90242** fix(providers)",
        "description": "skip unreadable Mistral tool schemas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90242"
      },
      {
        "title": "**PR #92498** fix(reply)",
        "description": "mirror same-channel Slack final replies. Related #92489. Thanks @TurboTheTurtle and @TalkingHeadsJed.",
        "href": "https://github.com/openclaw/openclaw/issues/92498"
      },
      {
        "title": "**PR #92083** fix(channels)",
        "description": "default boundary logger for swallowed progress-draft start errors. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92083"
      },
      {
        "title": "**PR #92564** fix(agents)",
        "description": "isolate invalid plugin model catalogs [AI-assisted]. Related #92553. Thanks @tangtaizong666 and @fxstein.",
        "href": "https://github.com/openclaw/openclaw/issues/92564"
      },
      {
        "title": "**PR #89827** docs",
        "description": "UX-013 — design system documentation. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89827"
      },
      {
        "title": "**PR #89615** feat(ui)",
        "description": "hide empty workboard columns. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89615"
      },
      {
        "title": "**PR #89822** fix(a11y)",
        "description": "B-1+B-2+B-3 — contrast, focus states, minimum font sizes. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89822"
      },
      {
        "title": "**PR #92618** fix #92218",
        "description": "memory_search tool disabled with QMD backend. Thanks @mushuiyu886 and @zhbcher.",
        "href": "https://github.com/openclaw/openclaw/issues/92618"
      },
      {
        "title": "**PR #92608** docs(gateway)",
        "description": "add uptime monitoring guidance to health check docs (fixes #55768). Thanks @liuhao1024 and @faahim.",
        "href": "https://github.com/openclaw/openclaw/issues/55768"
      },
      {
        "title": "**PR #92605** fix(docs)",
        "description": "pin Windows Hub download links to v2026.6.5. Related #92470. Thanks @lzyyzznl and @arjkul.",
        "href": "https://github.com/openclaw/openclaw/issues/92605"
      },
      {
        "title": "**PR #92593** #92589",
        "description": "fix(internal-runtime-context): wrap prompt-preface runtime context body in delimiters. Thanks @zhangqueping and @jovi2014-cyber.",
        "href": "https://github.com/openclaw/openclaw/issues/92593"
      },
      {
        "title": "**PR #92606** Run Vitest and Playwright scenarios from qa suite",
        "description": "**PR #92606** Run Vitest and Playwright scenarios from qa suite. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/92606"
      }
    ],
    "fixes": [
      "Channels and delivery: recover Telegram preview and polling failures, retain Slack final replies in transcripts, preserve top-level outbound image parameters, and make channel-action result pages available to callers. (#92281, #92498, #92407, #88993) Thanks @joshavant, @TurboTheTurtle, @xydigit-sj, @fuller-stack-dev, @TalkingHeadsJed, and @riseandshinefutures.",
      "Agent/provider reliability: preserve configured model transport/auth resolution, fail closed for unsupported CLI-backed `/btw` fallback, continue after source message-tool replies, repair Anthropic thinking replay, and keep Codex memory prompts registered. (#92265, #92226, #92343, #92286, #92350) Thanks @joshavant, @rubencu, @sallyom, @marcoraepple-sys, @wangwllu, @elyalvarado, and @reginaldomarcilon.",
      "Operations: make cron and daemon status resilient, preserve disabled heartbeat one-shot retries, hand off Linux service auto-updates, and keep lifecycle timeout cleanup alive after leader exit. (#92144, #92225, #92282, #92566) Thanks @liuhao1024, @joshavant, @RomneyDa, @AaronFaby, @A1fred-AI, and @hanyizuo."
    ]
  },
  {
    "version": "2026.6.6",
    "date": "2026.6.6",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202666",
    "features": [
      {
        "title": "**Tighter security boundaries",
        "description": "** transcript, sandbox, MCP, browser, channel, and exec-approval paths now fail closed around unsafe access, timed-out approvals, and malformed boundary input. (#91529, #91618, #91741, #91750, #89938) Thanks @joshavant, @pgondhi987, @mmaps, @eleqtrizit, @drobison00, @vincentkoc, and @devinkuhn.",
        "href": "https://github.com/openclaw/openclaw/issues/91529"
      },
      {
        "title": "**Reliable Telegram delivery",
        "description": "** account-scoped topics route to the correct agent, streamed text survives tool calls, callbacks and draft chunks stay coherent, and unauthorized DM text does not enter cache or prompt context. (#91189, #88682, #90212, #91478, #91915) Thanks @codysai001, @alexzhu0, @snowzlm, @obviyus, @sallyom, @AbdelftahZowail, @producedbysavant, @shakkernerd, @vincentkoc, and @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/issues/91189"
      },
      {
        "title": "**iMessage stays connected",
        "description": "** always-on inbound recovery, durable echo markers, block streaming, idle approval discovery, and outbound transport now survive restarts and idle periods. (#91335, #91449, #88969, #91783) Thanks @omarshahine, @jmissig, @dwonshin, @colmbrogan, @vincentkoc, and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/91335"
      },
      {
        "title": "**Better browser and MCP connectivity",
        "description": "** existing browser sessions, CDP/WebSocket discovery, default-profile URLs, OAuth/SSE transport, and tool schemas now connect through clearer, safer paths. (#91422, #89851, #91736, #91451) Thanks @pgondhi987, @anagnorisis2peripeteia, @eleqtrizit, @LiuwqGit, @lifuyue, @marcusbsorensen, @cursoragent, @vincentkoc, @849261680, and @mgrandau.",
        "href": "https://github.com/openclaw/openclaw/issues/91422"
      },
      {
        "title": "**Faster first replies",
        "description": "** Control UI startup no longer waits on broad model loading, while cached metadata, lazy slash-command work, and first-event tracing make slow initial responses visible. (#91531, #91538, #91568, #91583) Thanks @vincentkoc and @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/issues/91531"
      },
      {
        "title": "**Broader provider support",
        "description": "** OpenRouter OAuth and Claude Fable 5 land alongside correct Codex compaction ownership, local-model execution, normalized tool progress, and Gemma 4 reasoning replay. (#91830, #91882, #91590, #88630, #91696) Thanks @Patrick-Erichsen, @joshavant, @bdjben, @Coder-Wangyankun, @vincentkoc, @bfox55, @shakkernerd, and @NOVA-Openclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/91830"
      },
      {
        "title": "CLI progress",
        "description": "emit Claude CLI commentary progress events and bridge inter-tool commentary into channel progress without exposing internal protocol scaffolding. (#89834, #90883) Thanks @anagnorisis2peripeteia, @AbdelftahZowail, @kentuscn, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89834"
      },
      {
        "title": "Observability",
        "description": "allow trusted diagnostics channels to capture tool input/output content, add first-assistant-event traces, and warn on slow initial replies. (#91256, #91568, #91583) Thanks @amknight, @mjunaidca, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91256"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "dogfood reusable package publishing, let dry runs skip publish approval, allow declared installed trusted hooks, report managed plugin version drift, and warn instead of failing on retired Skill Workshop configuration. (#91574, #91591, #90004, #90927, #90838) Thanks @Patrick-Erichsen, @brokemac79, @lonexreb, @rogerallen1, @vincentkoc, and @ryanhelms.",
        "href": "https://github.com/openclaw/openclaw/issues/91574"
      },
      {
        "title": "Memory/providers",
        "description": "move the local llama.cpp runtime into its provider plugin, batch embeddings across files, persist the agent model catalog cache, and keep QMD JSON search one-shot while filtering stale REM recall previews. (#91324, #89138, #90457, #91837, #91851) Thanks @osolmaz, @mushuiyu886, @ai-hpc, @TurboTheTurtle, @jalehman, @hartmark, @vincentkoc, @rudi193-cmd, @Peilsender, and @xpysgdhr.",
        "href": "https://github.com/openclaw/openclaw/issues/91324"
      },
      {
        "title": "Channels/mobile",
        "description": "add the QQBot group mention toggle, improve iPad and iPhone control surfaces, and expose the active connection host in the TUI footer. (#91423, #91557, #89909) Thanks @cxyhhhhh, @Solvely-Colin, @baskduf, @joshavant, @sliverp, and @deuxksy.",
        "href": "https://github.com/openclaw/openclaw/issues/91423"
      },
      {
        "title": "Performance",
        "description": "prewarm TUI runtime plugins, deduplicate plugin auto-enable fanout, trim dense text-delta snapshots, and reuse prepared startup model metadata. (#90782, #89978, #91580, #91531) Thanks @RomneyDa, @ai-hpc, @vincentkoc, and @JakeBiggs.",
        "href": "https://github.com/openclaw/openclaw/issues/90782"
      },
      {
        "title": "**PR #91335** fix(imessage)",
        "description": "always-on inbound recovery and dedupe. Related #89237. Thanks @omarshahine and @vincentkoc and @dwonshin.",
        "href": "https://github.com/openclaw/openclaw/issues/91335"
      },
      {
        "title": "**PR #91189** fix(telegram)",
        "description": "route account-scoped topic agents. Thanks @codysai001.",
        "href": "https://github.com/openclaw/openclaw/issues/91189"
      },
      {
        "title": "**PR #88682** Preserve Telegram streamed text blocks between tool calls",
        "description": "**PR #88682** Preserve Telegram streamed text blocks between tool calls. Related #87326. Thanks @alexzhu0 and @AbdelftahZowail.",
        "href": "https://github.com/openclaw/openclaw/issues/88682"
      },
      {
        "title": "**PR #91390** fix",
        "description": "clarify provider quota errors. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/91390"
      },
      {
        "title": "**PR #90883** fix(cli)",
        "description": "bridge inter-tool commentary events to channel progress. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/90883"
      },
      {
        "title": "**PR #91419** docs",
        "description": "preserve channel brand terms in Chinese i18n. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/91419"
      },
      {
        "title": "**PR #87105** fix(gateway)",
        "description": "share approval runtime socket token. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/87105"
      },
      {
        "title": "**PR #80082** fix(android)",
        "description": "avoid dataSync FGS for persistent node. Thanks @davelutztx.",
        "href": "https://github.com/openclaw/openclaw/issues/80082"
      },
      {
        "title": "**PR #91442** docs",
        "description": "preserve LINE across localized docs glossaries. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/91442"
      },
      {
        "title": "**PR #88768** fix(codex)",
        "description": "normalize dynamic tool progress results. Thanks @bdjben.",
        "href": "https://github.com/openclaw/openclaw/issues/88768"
      },
      {
        "title": "**PR #91422** fix(browser)",
        "description": "neutralize media directives in browser output [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/91422"
      },
      {
        "title": "**PR #89834** feat(cli)",
        "description": "emit commentary progress events from Claude CLI parser. Related #87326. Thanks @anagnorisis2peripeteia and @AbdelftahZowail.",
        "href": "https://github.com/openclaw/openclaw/issues/89834"
      },
      {
        "title": "**PR #85679** fix(agents)",
        "description": "drop stale exec approval followups after session rebind. Related #59349. Thanks @openperf and @two3pro.",
        "href": "https://github.com/openclaw/openclaw/issues/85679"
      },
      {
        "title": "**PR #91450** fix(reply-queue)",
        "description": "remove the drained item by reference instead of front index. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/91450"
      },
      {
        "title": "**PR #89151** fix(delivery)",
        "description": "suppress Codex/Harmony internal protocol artifacts from user-facing channels. Related #88128. Thanks @joelnishanth and @reslp.",
        "href": "https://github.com/openclaw/openclaw/issues/89151"
      },
      {
        "title": "**PR #90678** fix(cron)",
        "description": "recover no-deliver tool warnings. Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/90678"
      },
      {
        "title": "**PR #91449** fix(imessage)",
        "description": "honor block streaming config. Thanks @jmissig and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/91449"
      },
      {
        "title": "**PR #91508** Revert \"docs",
        "description": "add maturity scorecard mirror\". Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/91508"
      },
      {
        "title": "**PR #91364** build(deps)",
        "description": "bump github.com/steipete/peekaboo from 3.3.0 to 3.4.0 in /apps/macos in the swift-deps group.",
        "href": "https://github.com/openclaw/openclaw/issues/91364"
      },
      {
        "title": "**PR #91368** build(deps)",
        "description": "bump actions/github-script from 8 to 9.",
        "href": "https://github.com/openclaw/openclaw/issues/91368"
      },
      {
        "title": "**PR #91512** chore",
        "description": "add taxonomy file. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/91512"
      },
      {
        "title": "**PR #91369** build(deps)",
        "description": "bump actions/cache from 4 to 5.",
        "href": "https://github.com/openclaw/openclaw/issues/91369"
      },
      {
        "title": "**PR #91367** build(deps)",
        "description": "bump the actions group with 2 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/91367"
      },
      {
        "title": "**PR #91365** build(deps)",
        "description": "bump the android-deps group in /apps/android with 3 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/91365"
      },
      {
        "title": "**PR #91496** chore",
        "description": "bump Codex app-server to 0.137.0. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91496"
      },
      {
        "title": "**PR #90666** fix(cron)",
        "description": "cancel active cron task runs. Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/90666"
      },
      {
        "title": "**PR #90927** fix(doctor)",
        "description": "report managed plugin version drift. Related #90891. Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/90927"
      },
      {
        "title": "**PR #91531** perf(control-ui)",
        "description": "reuse startup model metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91531"
      },
      {
        "title": "**PR #91538** perf(control-ui)",
        "description": "avoid startup catalog wait. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91538"
      },
      {
        "title": "**PR #91507** feat",
        "description": "canonicalize Codex protocol JSON asset ordering. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91507"
      },
      {
        "title": "**PR #91550** fix",
        "description": "bound native hook relay lifetime. Related #90993. Thanks @joshavant and @clem-git.",
        "href": "https://github.com/openclaw/openclaw/issues/91550"
      },
      {
        "title": "**PR #89588** fix(telegram)",
        "description": "restore /compact on generic message ingress. Related #89525. Thanks @joelnishanth and @cursoragent and @bomberluke37-prog.",
        "href": "https://github.com/openclaw/openclaw/issues/89588"
      },
      {
        "title": "**PR #91529** Fix transcript image redaction",
        "description": "**PR #91529** Fix transcript image redaction. Related #90760. Thanks @joshavant and @devinkuhn.",
        "href": "https://github.com/openclaw/openclaw/issues/91529"
      },
      {
        "title": "**PR #91551** Fix config",
        "description": "**PR #91551** Fix config.patch explicit array replacement. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/91551"
      },
      {
        "title": "**PR #91568** perf(control-ui)",
        "description": "trace first assistant event. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91568"
      },
      {
        "title": "**PR #85823** fix(whatsapp)",
        "description": "route captured replies through successor controller after restart. Thanks @itsuzef and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/85823"
      },
      {
        "title": "**PR #91574** feat",
        "description": "dogfood reusable ClawHub package publish. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/91574"
      },
      {
        "title": "**PR #91583** perf(control-ui)",
        "description": "warn on slow first replies. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91583"
      },
      {
        "title": "**PR #89659** fix(feishu)",
        "description": "retry on send rate-limit errors (230020/230006). Related #70879. Thanks @ladygege and @marshallm-create and @sliverp and @AxelHu.",
        "href": "https://github.com/openclaw/openclaw/issues/89659"
      },
      {
        "title": "**PR #91547** Fix Docker store seed target packages",
        "description": "**PR #91547** Fix Docker store seed target packages. Related #91035. Thanks @sallyom and @laurenceputra.",
        "href": "https://github.com/openclaw/openclaw/issues/91547"
      },
      {
        "title": "**PR #91578** fix",
        "description": "make docs i18n frontmatter translation resilient. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/91578"
      },
      {
        "title": "**PR #91567** fix(openai)",
        "description": "require api-key auth for realtime voice. Related #90456. Thanks @joshavant and @sergiopesch.",
        "href": "https://github.com/openclaw/openclaw/issues/91567"
      },
      {
        "title": "**PR #91591** fix",
        "description": "let ClawHub dry runs skip publish approval. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/91591"
      },
      {
        "title": "**PR #91598** perf(control-ui)",
        "description": "lazy load slash commands. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91598"
      },
      {
        "title": "**PR #91580** fix(agents)",
        "description": "trim dense text delta snapshots. Related #86599. Thanks @vincentkoc and @JakeBiggs.",
        "href": "https://github.com/openclaw/openclaw/issues/91580"
      },
      {
        "title": "**PR #91425** fix(memory-lancedb)",
        "description": "guard memory recall output [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/91425"
      },
      {
        "title": "**PR #88969** fix(imessage)",
        "description": "persist echo markers before send. Thanks @colmbrogan.",
        "href": "https://github.com/openclaw/openclaw/issues/88969"
      },
      {
        "title": "**PR #91566** Fix stale main session startup recovery",
        "description": "**PR #91566** Fix stale main session startup recovery. Related #90525. Thanks @joshavant and @Tony-ooo.",
        "href": "https://github.com/openclaw/openclaw/issues/91566"
      },
      {
        "title": "**PR #91324** fix(memory)",
        "description": "move local llama.cpp runtime to provider plugin. Related #88705. Thanks @osolmaz and @Peilsender.",
        "href": "https://github.com/openclaw/openclaw/issues/91324"
      },
      {
        "title": "**PR #91637** docs",
        "description": "include plugin prerelease in release validation approval.",
        "href": "https://github.com/openclaw/openclaw/issues/91637"
      },
      {
        "title": "**PR #91649** fix(line)",
        "description": "canonicalize trailing-slash webhook paths.",
        "href": "https://github.com/openclaw/openclaw/issues/91649"
      },
      {
        "title": "**PR #91423** feat(qqbot)",
        "description": "add /bot-group-allways command to toggle mention requirement. Thanks @cxyhhhhh and @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/91423"
      },
      {
        "title": "**PR #91642** fix(docs)",
        "description": "continue partial i18n batches after file errors. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/91642"
      },
      {
        "title": "**PR #91661** chore(plugin-sdk)",
        "description": "refresh API baseline hash.",
        "href": "https://github.com/openclaw/openclaw/issues/91661"
      },
      {
        "title": "**PR #91665** docs",
        "description": "fix release CI Android dispatch guidance.",
        "href": "https://github.com/openclaw/openclaw/issues/91665"
      },
      {
        "title": "**PR #89138** fix #88009",
        "description": "[Feature]: batched memory embedding should batch over files. Thanks @mushuiyu886 and @jalehman and @hartmark.",
        "href": "https://github.com/openclaw/openclaw/issues/89138"
      },
      {
        "title": "**PR #91679** fix(plugin-sdk)",
        "description": "align Discord component edit facade types. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91679"
      },
      {
        "title": "**PR #91686** fix(discord)",
        "description": "restore runtime timeout compatibility exports. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91686"
      },
      {
        "title": "**PR #90212** fix(agents)",
        "description": "deliver native /compact replies through source suppression. Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/issues/90212"
      },
      {
        "title": "**PR #91618** fix",
        "description": "expand unsafe host env denylist. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/91618"
      },
      {
        "title": "**PR #91615** fix",
        "description": "block rustup toolchain env overrides [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/91615"
      },
      {
        "title": "**PR #89851** fix(gateway)",
        "description": "support Streamable HTTP MCP transport on loopback server. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/89851"
      },
      {
        "title": "**PR #91619** fix",
        "description": "block git protocol env controls [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/91619"
      },
      {
        "title": "**PR #91684** fix(mattermost)",
        "description": "keep default replies in existing threads. Thanks @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/issues/91684"
      },
      {
        "title": "**PR #90457** fix(models)",
        "description": "persist agent catalog cache. Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/90457"
      },
      {
        "title": "**PR #91709** fix(status)",
        "description": "restore Codex synthetic usage line. Related #91694. Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/91709"
      },
      {
        "title": "**PR #89909** fix(tui)",
        "description": "show connection host in footer. Related #56276. Thanks @baskduf and @deuxksy.",
        "href": "https://github.com/openclaw/openclaw/issues/89909"
      },
      {
        "title": "**PR #89978** perf(config)",
        "description": "dedupe plugin auto-enable fanout work. Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/89978"
      },
      {
        "title": "**PR #91219** fix(gateway)",
        "description": "skip deleted-agent guard for ACP harness session keys. Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/issues/91219"
      },
      {
        "title": "**PR #90782** perf(tui)",
        "description": "prewarm runtime plugins before first send. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/90782"
      },
      {
        "title": "**PR #90838** fix(config)",
        "description": "warn for retired skill-workshop plugin entry instead of failing validation (#90244). Thanks @lonexreb and @rogerallen1.",
        "href": "https://github.com/openclaw/openclaw/pull/90244"
      },
      {
        "title": "**PR #91753** docs",
        "description": "clarify Matrix plugin upgrade repair. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91753"
      },
      {
        "title": "**PR #91755** docs",
        "description": "align Feishu DM policy defaults. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91755"
      },
      {
        "title": "**PR #91745** fix(discord)",
        "description": "require sender for moderation actions [AI]. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91745"
      },
      {
        "title": "**PR #85950** docs",
        "description": "clarify trusted-proxy Control UI scope behavior. Related #80063. Thanks @nielskaspers and @longstoryscott.",
        "href": "https://github.com/openclaw/openclaw/issues/85950"
      },
      {
        "title": "**PR #91746** fix(msteams)",
        "description": "require admin for group actions. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91746"
      },
      {
        "title": "**PR #91256** feat(diagnostics-otel)",
        "description": "capture tool input/output content via trusted channel. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/91256"
      },
      {
        "title": "**PR #91749** fix(gateway)",
        "description": "restrict non-owner loopback tools. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91749"
      },
      {
        "title": "**PR #91748** fix(elevated)",
        "description": "reject group ids as senders. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91748"
      },
      {
        "title": "**PR #91752** fix(codex)",
        "description": "guard sandbox http requests. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91752"
      },
      {
        "title": "**PR #91763** fix",
        "description": "require ACP metadata for deleted-agent bypass. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/91763"
      },
      {
        "title": "**PR #91751** fix(mcp)",
        "description": "harden stdio env filtering. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91751"
      },
      {
        "title": "**PR #91765** Clarify env-var executable behavior reports in SECURITY",
        "description": "**PR #91765** Clarify env-var executable behavior reports in SECURITY.md. Thanks @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/issues/91765"
      },
      {
        "title": "**PR #91480** fix(ui)",
        "description": "require user intent for chat sessions. Related #89760. Thanks @TurboTheTurtle and @Takhoffman and @zdwalter.",
        "href": "https://github.com/openclaw/openclaw/issues/91480"
      },
      {
        "title": "**PR #91777** docs",
        "description": "remove superpowers spec draft. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/91777"
      },
      {
        "title": "**PR #91773** fix(mcp)",
        "description": "lowercase SSE event-source header keys to prevent duplicate Authorization (401). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/91773"
      },
      {
        "title": "**PR #91741** Validate sandbox bind parent paths [AI]",
        "description": "**PR #91741** Validate sandbox bind parent paths [AI]. Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/issues/91741"
      },
      {
        "title": "**PR #88530** fix(imessage)",
        "description": "skip idle approval discovery scans. Thanks @colmbrogan and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/88530"
      },
      {
        "title": "**PR #91780** fix(ui)",
        "description": "drain restored chat queue after session switch. Thanks @tmimmanuel.",
        "href": "https://github.com/openclaw/openclaw/issues/91780"
      },
      {
        "title": "**PR #91750** fix(search)",
        "description": "enforce native web search tool policy. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91750"
      },
      {
        "title": "**PR #91757** fix(config)",
        "description": "clarify retired skill workshop plugin warning. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91757"
      },
      {
        "title": "**PR #91787** fix(doctor)",
        "description": "keep TTS legacy migration on supported paths.",
        "href": "https://github.com/openclaw/openclaw/issues/91787"
      },
      {
        "title": "**PR #91783** fix(imessage)",
        "description": "harden outbound send transport. Related #84329. Thanks @omarshahine and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/91783"
      },
      {
        "title": "**PR #91785** fix(imessage)",
        "description": "surface inbound startup diagnostics. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/91785"
      },
      {
        "title": "**PR #91590** Fix context-engine compaction ownership for Codex sessions",
        "description": "**PR #91590** Fix context-engine compaction ownership for Codex sessions. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/91590"
      },
      {
        "title": "**PR #91557** Improve iPad and iPhone control surfaces",
        "description": "**PR #91557** Improve iPad and iPhone control surfaces. Thanks @Solvely-Colin and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/91557"
      },
      {
        "title": "**PR #91666** chore(deps)",
        "description": "bump useblacksmith/setup-docker-builder from 1.8.0 to 1.9.0 in the actions group.",
        "href": "https://github.com/openclaw/openclaw/issues/91666"
      },
      {
        "title": "**PR #91819** docs",
        "description": "link ClawHub plugin validation fixes guide. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/91819"
      },
      {
        "title": "**PR #88630** fix(codex)",
        "description": "avoid guardian review for local models. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88630"
      },
      {
        "title": "**PR #91830** feat",
        "description": "add OpenRouter OAuth to onboarding. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/91830"
      },
      {
        "title": "**PR #91842** fix(plugin-sdk)",
        "description": "refresh API baseline hash.",
        "href": "https://github.com/openclaw/openclaw/issues/91842"
      },
      {
        "title": "**PR #91614** fix(gateway)",
        "description": "surface headless LaunchAgent state. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/91614"
      },
      {
        "title": "**PR #91851** fix(memory-core)",
        "description": "filter stale recall entries in REM harness preview. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91851"
      },
      {
        "title": "**PR #91859** fix(ci)",
        "description": "disable memory slot in release smoke config. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91859"
      },
      {
        "title": "**PR #90004** [plugin sdk] Allow declared installed trusted hooks",
        "description": "**PR #90004** [plugin sdk] Allow declared installed trusted hooks. Related #87735. Thanks @brokemac79 and @ryanhelms.",
        "href": "https://github.com/openclaw/openclaw/issues/90004"
      },
      {
        "title": "**PR #91837** fix(memory-core)",
        "description": "keep QMD JSON search one-shot. Related #91821. Thanks @TurboTheTurtle and @xpysgdhr.",
        "href": "https://github.com/openclaw/openclaw/issues/91837"
      },
      {
        "title": "**PR #91871** Remove bundled channel contract fallbacks",
        "description": "**PR #91871** Remove bundled channel contract fallbacks. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91871"
      },
      {
        "title": "**PR #91879** fix(ci)",
        "description": "include ACPX in shared live-test image.",
        "href": "https://github.com/openclaw/openclaw/issues/91879"
      },
      {
        "title": "**PR #91840** Fix stale visible reply recovery",
        "description": "**PR #91840** Fix stale visible reply recovery. Related #90535. Thanks @joshavant and @Jerry-Xin.",
        "href": "https://github.com/openclaw/openclaw/issues/91840"
      },
      {
        "title": "**PR #91876** Fix Telegram callback API handling",
        "description": "**PR #91876** Fix Telegram callback API handling. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91876"
      },
      {
        "title": "**PR #91874** Share channel draft chunking resolver",
        "description": "**PR #91874** Share channel draft chunking resolver. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91874"
      },
      {
        "title": "**PR #91599** fix(update)",
        "description": "expose plugin convergence repair. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/91599"
      },
      {
        "title": "**PR #91581** fix(update)",
        "description": "recover package gateway restart after refresh failure. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/91581"
      },
      {
        "title": "**PR #91904** fix(telegram)",
        "description": "use SDK dispatch dedupe. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91904"
      },
      {
        "title": "**PR #90263** fix(discord)",
        "description": "hydrate reply context metadata. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90263"
      },
      {
        "title": "**PR #91478** block unauthorized Telegram DM text from prompt context",
        "description": "**PR #91478** block unauthorized Telegram DM text from prompt context. Related #91209. Thanks @sallyom and @producedbysavant.",
        "href": "https://github.com/openclaw/openclaw/issues/91478"
      },
      {
        "title": "**PR #91915** fix(telegram)",
        "description": "audit follow-ups — block-mode chunk config, dedupe bucket cleanup, grammy contract trust. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/91915"
      },
      {
        "title": "**PR #91361** fix(compaction)",
        "description": "lower default timeout from 900s to 180s, preserve explicit config. Related #91358. Thanks @wangmiao0668000666 and @velvet-shark and @olveww-dot.",
        "href": "https://github.com/openclaw/openclaw/issues/91361"
      },
      {
        "title": "**PR #91791** fix(sandbox)",
        "description": "use materialized skill paths in startup prompts. Related #91761. Thanks @brokemac79 and @vincentkoc and @gbb-netizen.",
        "href": "https://github.com/openclaw/openclaw/issues/91791"
      },
      {
        "title": "**PR #91736** Support existing-session browser CDP endpoints",
        "description": "**PR #91736** Support existing-session browser CDP endpoints. Related #56118. Thanks @lifuyue and @mgrandau.",
        "href": "https://github.com/openclaw/openclaw/issues/91736"
      },
      {
        "title": "**PR #91747** fix(browser)",
        "description": "validate discovered CDP websocket URLs. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/91747"
      },
      {
        "title": "**PR #91882** feat(anthropic)",
        "description": "support Claude Fable 5 adaptive thinking. Related #91805. Thanks @NOVA-Openclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/91882"
      },
      {
        "title": "**PR #91884** fix(memory)",
        "description": "keep ignored-name QMD roots watchable. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91884"
      },
      {
        "title": "**PR #91740** fix(auth)",
        "description": "verify SQLite auth migration before cleanup. Thanks @fuller-stack-dev and @velvet-shark.",
        "href": "https://github.com/openclaw/openclaw/issues/91740"
      },
      {
        "title": "**PR #91451** fix(mcp)",
        "description": "repair OAuth redirect, errors, and unicode schema patterns. Related #91433. Thanks @LiuwqGit and @cursoragent and @vincentkoc and @marcusbsorensen.",
        "href": "https://github.com/openclaw/openclaw/issues/91451"
      },
      {
        "title": "**PR #91978** fix(gateway)",
        "description": "arm qmd startup maintenance. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91978"
      },
      {
        "title": "**PR #90426** fix(talk)",
        "description": "show OpenAI Realtime WebRTC assistant transcripts. Thanks @shushushv and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90426"
      },
      {
        "title": "**PR #91696** fix(agents)",
        "description": "preserve reasoning_content replay for Gemma 4 openai-completions models. Related #91645. Thanks @Coder-Wangyankun and @bfox55.",
        "href": "https://github.com/openclaw/openclaw/issues/91696"
      },
      {
        "title": "**PR #89938** Fail closed on exec approval timeout",
        "description": "**PR #89938** Fail closed on exec approval timeout. Thanks @drobison00.",
        "href": "https://github.com/openclaw/openclaw/issues/89938"
      },
      {
        "title": "**PR #91895** fix(webchat)",
        "description": "finalize provider failure lifecycle. Related #91730. Thanks @TurboTheTurtle and @sallyom and @nikhilmaddirala.",
        "href": "https://github.com/openclaw/openclaw/issues/91895"
      },
      {
        "title": "**PR #80143** fix(browser)",
        "description": "honor cdpUrl for user default profile. Related #48042. Thanks @HemantSudarshan and @Max-Resilient.",
        "href": "https://github.com/openclaw/openclaw/issues/80143"
      },
      {
        "title": "**PR #91688** fix(cron)",
        "description": "reject cron expressions that have no reachable run time. Thanks @yetval and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91688"
      },
      {
        "title": "**PR #91737** fix(cron)",
        "description": "use final-call usage for session token totals. Related #91716. Thanks @MonkeyLeeT and @vincentkoc and @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/91737"
      },
      {
        "title": "**PR #89605** fix(process)",
        "description": "return timeout code for killed commands. Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/89605"
      },
      {
        "title": "**PR #80013** perf(usage-cost-cache)",
        "description": "throttle full-cache rewrites during refresh. Thanks @zeroaltitude.",
        "href": "https://github.com/openclaw/openclaw/issues/80013"
      },
      {
        "title": "**PR #76731** Fix mobile Control UI chat layout",
        "description": "**PR #76731** Fix mobile Control UI chat layout. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/issues/76731"
      },
      {
        "title": "**PR #83738** fix(cron)",
        "description": "capture originating session/agent on the cron wake tool call. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/83738"
      },
      {
        "title": "**PR #85196** Redact tool output secrets",
        "description": "**PR #85196** Redact tool output secrets. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/85196"
      },
      {
        "title": "**PR #92007** fix(security)",
        "description": "block build tool env overrides. Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/issues/92007"
      },
      {
        "title": "**PR #91891** fix",
        "description": "preserve non-oneOf protocol schema array order. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91891"
      },
      {
        "title": "**PR #91754** fix(macos)",
        "description": "hide unsupported Voice Wake controls. Related #89575. Thanks @RomneyDa and @cwhyhy.",
        "href": "https://github.com/openclaw/openclaw/issues/91754"
      },
      {
        "title": "**PR #92049** test(ci)",
        "description": "restore upgrade survivor session fixture. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92049"
      },
      {
        "title": "**PR #89670** fix",
        "description": "keep skill toggles keyed by skill identity. Related #89661. Thanks @s-moffett.",
        "href": "https://github.com/openclaw/openclaw/issues/89670"
      },
      {
        "title": "**PR #91934** fix(state)",
        "description": "tolerate chmod failures when opening the state database. Related #91919. Thanks @truffle-dev and @david-garcia-garcia.",
        "href": "https://github.com/openclaw/openclaw/issues/91934"
      },
      {
        "title": "**PR #92051** fix(fal)",
        "description": "parse raw completed queue results. Related #91989. Thanks @harjothkhara and @oswaldyeo.",
        "href": "https://github.com/openclaw/openclaw/issues/92051"
      },
      {
        "title": "**PR #92047** fix(agents)",
        "description": "prefer explicit sessions_send keys. Related #64699. Thanks @vincentkoc and @sunxq1017-hash.",
        "href": "https://github.com/openclaw/openclaw/issues/92047"
      },
      {
        "title": "**PR #92020** fix(memory-core)",
        "description": "check SQLite plugin state for dreaming ingestion audit after JSON migration (fixes #92017). Thanks @zenglingbiao and @JUMPUNDER.",
        "href": "https://github.com/openclaw/openclaw/issues/92017"
      },
      {
        "title": "**PR #92032** fix(mcp)",
        "description": "always log channel-bridge notification failures. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92032"
      },
      {
        "title": "**PR #92033** fix(gateway)",
        "description": "log swallowed background-task finalization errors. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92033"
      },
      {
        "title": "**PR #92022** fix(sessions)",
        "description": "derive channel from direct-chat session keys in send-policy. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92022"
      },
      {
        "title": "**PR #91163** fix(xai)",
        "description": "clarify x_search query guidance. Thanks @rubencu.",
        "href": "https://github.com/openclaw/openclaw/issues/91163"
      },
      {
        "title": "**PR #90121** fix(memory)",
        "description": "write dream fallback without subagent runtime. Thanks @a-m-a-r-a.",
        "href": "https://github.com/openclaw/openclaw/issues/90121"
      },
      {
        "title": "**PR #91215** fix(ui)",
        "description": "show prompt progress while sending. Related #91199. Thanks @zhangguiping-xydt and @vincentkoc and @Monniasza.",
        "href": "https://github.com/openclaw/openclaw/issues/91215"
      },
      {
        "title": "**PR #92029** fix(tools)",
        "description": "surface unsupported-signal in anyOf availability. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92029"
      },
      {
        "title": "**PR #92034** perf(agents)",
        "description": "memoize XML attribute regex in DSML stream parser. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92034"
      },
      {
        "title": "**PR #92026** perf(agents)",
        "description": "sanitize compaction messages once for token estimation. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92026"
      },
      {
        "title": "**PR #91351** fix(opencode-go)",
        "description": "add qwen plus tiered pricing. Related #91238. Thanks @849261680 and @vincentkoc and @samson910022.",
        "href": "https://github.com/openclaw/openclaw/issues/91351"
      },
      {
        "title": "**PR #92027** fix(gateway)",
        "description": "recover config hot-reload after watcher errors. Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/issues/92027"
      },
      {
        "title": "**PR #91471** feat(cron)",
        "description": "add readable ISO time fields to `cron runs` JSON output. Thanks @FMLS and @cursoragent.",
        "href": "https://github.com/openclaw/openclaw/issues/91471"
      },
      {
        "title": "**PR #91711**",
        "description": "bug: fix(agents): classify harness provider mismatch as format error (#91710). Thanks @a-tokyo.",
        "href": "https://github.com/openclaw/openclaw/pull/91710"
      },
      {
        "title": "**PR #91292** fix(models)",
        "description": "keep bundled provider catalog when configured base URL is blank (#91270). Thanks @yetval and @vincentkoc and @resYuto.",
        "href": "https://github.com/openclaw/openclaw/pull/91270"
      },
      {
        "title": "**PR #91720**",
        "description": "bug: fix(openai): remove chatgpt-responses transport override from gpt-5.3-codex catalog entry. Related #91710. Thanks @a-tokyo.",
        "href": "https://github.com/openclaw/openclaw/issues/91720"
      },
      {
        "title": "**PR #91305** fix(control-ui)",
        "description": "make Control UI bootstrap config endpoint base-path-relative (#66946). Thanks @Alix-007 and @vincentkoc and @yndwx01.",
        "href": "https://github.com/openclaw/openclaw/pull/66946"
      },
      {
        "title": "**PR #92056** fix(exec)",
        "description": "honor state dir approvals. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92056"
      },
      {
        "title": "**PR #91897** fix(memory)",
        "description": "self-heal missing index identity by initializing provider during sync. Thanks @xydt-tanshanshan and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91897"
      },
      {
        "title": "**PR #91802** fix(diagnostics)",
        "description": "release wedged session lane when stuck-session recovery aborts a run with queued session work. Related #91700. Thanks @openperf and @infocus13.",
        "href": "https://github.com/openclaw/openclaw/issues/91802"
      },
      {
        "title": "**PR #92030** fix(cron)",
        "description": "structural top-of-hour match in stagger heuristic. Thanks @hansraj316 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92030"
      },
      {
        "title": "**PR #92055** fix(media)",
        "description": "resolve state-relative inbound attachments. Thanks @sercada and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92055"
      },
      {
        "title": "**PR #91962** fix(agent)",
        "description": "dampen Discord stale thread replies. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91962"
      },
      {
        "title": "**PR #90912** fix(agents)",
        "description": "honor configured CLI resume timeouts. Thanks @ai-hpc and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90912"
      },
      {
        "title": "**PR #91296** fix",
        "description": "hand off supervised git updates. Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/issues/91296"
      },
      {
        "title": "**PR #91950** fix(web_fetch)",
        "description": "sanitize URL whitespace from LLM tool call arguments (fixes #91651). Thanks @zenglingbiao and @vincentkoc and @akang1798.",
        "href": "https://github.com/openclaw/openclaw/issues/91651"
      },
      {
        "title": "**PR #77367** fix(discord)",
        "description": "scope command-deploy cache by application id. Related #77359. Thanks @lonexreb and @sallyom and @igmarketing.",
        "href": "https://github.com/openclaw/openclaw/issues/77367"
      },
      {
        "title": "**PR #91976** feat(auto-reply)",
        "description": "durable inter-tool commentary via verbose standalone progress (supersedes #89850/#89890). Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/91976"
      },
      {
        "title": "**PR #90128** fix(sessions)",
        "description": "preserve user /model override across daily/idle session rollover (#90119). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/90119"
      },
      {
        "title": "**PR #92084** fix(clickclack)",
        "description": "allow explicit enable through plugin allowlist.",
        "href": "https://github.com/openclaw/openclaw/issues/92084"
      },
      {
        "title": "**PR #92092** fix(auto-reply)",
        "description": "stop dropping claude-cli narration when commentary lane is off. Thanks @ragesaq.",
        "href": "https://github.com/openclaw/openclaw/issues/92092"
      },
      {
        "title": "**PR #92123** #92109",
        "description": "[Bug]: EmbeddedAttemptSessionTakeoverError caused by Btrfs ctimeNs instability. Thanks @lzyyzznl and @vincentkoc and @recruits.",
        "href": "https://github.com/openclaw/openclaw/issues/92123"
      },
      {
        "title": "**PR #92136** fix(feishu)",
        "description": "reply inside P2P direct-message threads. Thanks @LiaoyuanNing and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92136"
      },
      {
        "title": "**PR #92121** fix(memory)",
        "description": "preserve live SQLite index during swaps. Related #91216. Thanks @xydt-tanshanshan and @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/issues/92121"
      },
      {
        "title": "**PR #90173** fix(agents)",
        "description": "stabilize a2a prompt cache context. Thanks @Sunjae-k and @sunjae-1.",
        "href": "https://github.com/openclaw/openclaw/issues/90173"
      },
      {
        "title": "**PR #91974** fix(cli-runner)",
        "description": "scope claude-cli queue to live-session owner identity (#91946). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/91946"
      },
      {
        "title": "**PR #92053** fix(thinking)",
        "description": "apply Claude profile to anthropic-messages catalog rows. Related #91975. Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/92053"
      },
      {
        "title": "**PR #41991** Google",
        "description": "show detailed Gemini CLI OAuth extraction failures. Thanks @bgmbgm94.",
        "href": "https://github.com/openclaw/openclaw/issues/41991"
      },
      {
        "title": "**PR #92074** fix(qqbot)",
        "description": "flush tool output before silent non-streaming final. Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/92074"
      },
      {
        "title": "**PR #89508** fix(models)",
        "description": "clarify provider model registration hint. Related #89192. Thanks @sweetcornna and @aaajiao.",
        "href": "https://github.com/openclaw/openclaw/issues/89508"
      },
      {
        "title": "**PR #89085** fix(agents)",
        "description": "keep migrated session entry ids unique on v1 upgrade. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/89085"
      },
      {
        "title": "**PR #89552** fix(discord)",
        "description": "clean migrated thread binding state. Thanks @SYU8384.",
        "href": "https://github.com/openclaw/openclaw/issues/89552"
      },
      {
        "title": "**PR #89448** fix(cron)",
        "description": "reject durations that overflow to a non-finite value. Related #83906. Thanks @Alix-007 and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/89448"
      },
      {
        "title": "**PR #89319** fix(doctor)",
        "description": "warn on unsupported hook entry loaders. Related #89309. Thanks @leno23 and @vincentkoc and @CameronWeller.",
        "href": "https://github.com/openclaw/openclaw/issues/89319"
      },
      {
        "title": "**PR #91966** fix(config)",
        "description": "stop config.patch replacePaths index suffix from widening array consent. Thanks @yetval and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/91966"
      },
      {
        "title": "**PR #92127** fix(plugins)",
        "description": "rescan storm in \"/models\" call (regression shipped since v2026.5.18). Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/issues/92127"
      },
      {
        "title": "**PR #91657** fix(ollama)",
        "description": "use provider thinking default in SDK session factory. Related #91428. Thanks @openperf and @vincentkoc and @anijatsu.",
        "href": "https://github.com/openclaw/openclaw/issues/91657"
      },
      {
        "title": "**PR #91742** fix(memory)",
        "description": "abort orphaned embedding work when memory_search times out. Related #91718. Thanks @dreamhunter2333 and @vincentkoc and @NOVA-Openclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/91742"
      },
      {
        "title": "**PR #89091** fix(memory-core)",
        "description": "retry narrative message reads. Thanks @bennewell35.",
        "href": "https://github.com/openclaw/openclaw/issues/89091"
      },
      {
        "title": "**PR #92150** fix(release)",
        "description": "gate beta publish on plugin verification. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92150"
      },
      {
        "title": "**PR #92158** fix(cli)",
        "description": "validate gateway RPC timeout inputs. Thanks @ruanrrn and @comeran.",
        "href": "https://github.com/openclaw/openclaw/issues/92158"
      },
      {
        "title": "**PR #91911** fix(agents)",
        "description": "retry same model across short rate-limit windows. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/91911"
      }
    ],
    "fixes": [
      "Agent/session recovery: drop stale approval follow-ups after session rebind, remove drained reply-queue items by identity, recover stale main and visible replies, preserve Codex context-engine compaction ownership, lower the default compaction timeout to 180 seconds while respecting explicit configuration, and keep provider-failure terminal lifecycle state correct. (#85679, #91450, #91566, #91840, #91590, #91361, #91895) Thanks @openperf, @yetval, @joshavant, @wangmiao0668000666, @TurboTheTurtle, @two3pro, @velvet-shark, @sallyom, @849261680, @vincentkoc, @Tony-ooo, @Jerry-Xin, @olveww-dot, and @nikhilmaddirala.",
      "User-visible content boundaries: suppress Codex/Harmony protocol artifacts, neutralize browser and LanceDB memory media directives, redact transcript images, and preserve native `/compact` replies through source suppression. (#89151, #91422, #91425, #91529, #90212) Thanks @joelnishanth, @pgondhi987, @joshavant, @snowzlm, @reslp, @vincentkoc, and @devinkuhn.",
      "Channel delivery: keep WhatsApp captured replies attached to the successor controller after restart, retry Feishu rate limits, preserve Mattermost thread replies, canonicalize LINE webhook paths, restore Discord reply hydration and runtime timeout exports, and show OpenAI Realtime WebRTC assistant transcripts. (#85823, #89659, #91684, #91649, #90263, #91686, #90426) Thanks @itsuzef, @ladygege, @jacobtomlinson, @fuller-stack-dev, @shushushv, @mcaxtr, @AxelHu, @vincentkoc, @marshallm-create, @sliverp, and @dahifi.",
      "Cron: cancel active task runs cleanly, preserve terminal timeout/cancel state, and recover no-deliver tool warnings instead of silently losing the outcome. (#90666, #90678) Thanks @ai-hpc.",
      "Gateway/config/auth: share the approval runtime socket token, replace arrays explicitly in `config.patch`, skip the deleted-agent guard only for valid ACP harness sessions, surface headless LaunchAgent state, verify SQLite auth migration before cleanup, and arm QMD startup maintenance. (#87105, #91551, #91219, #91614, #91740, #91978) Thanks @fuller-stack-dev, @scotthuang, @joshavant, @velvet-shark, @vincentkoc, and @dahifi.",
      "Providers/Codex: clarify quota errors, restore the Codex synthetic usage line, canonicalize Codex protocol assets, require API-key auth for realtime voice, normalize ACP model refs, preserve Gemma 4 `reasoning_content`, and avoid guardian review for local models. (#91390, #91709, #91507, #91567, #88630, #91696) Thanks @hxy91819, @brokemac79, @RomneyDa, @joshavant, @Coder-Wangyankun, @vincentkoc, @bfox55, @shakkernerd, and @sergiopesch.",
      "Updates/builds: recover package Gateway restarts after refresh failure, expose plugin convergence repair, fall back to Corepack in PATH-less pnpm environments, seed the correct Docker store packages, and keep ClawHub dry-run and publish paths reusable. (#91581, #91599, #91547, #91591) Thanks @fuller-stack-dev, @sallyom, @Patrick-Erichsen, @vincentkoc, and @laurenceputra.",
      "UI: require explicit user intent before opening chat sessions and drain restored chat queues after session switches. (#91480) Thanks @TurboTheTurtle, @Takhoffman, and @zdwalter.",
      "Android: avoid the `dataSync` foreground-service type for persistent nodes. (#80082) Thanks @davelutztx.",
      "Native hooks: bound relay lifetimes so abandoned native hook connections cannot linger indefinitely. (#91550) Thanks @joshavant and @clem-git."
    ]
  },
  {
    "version": "2026.6.5",
    "date": "2026.6.5",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665",
    "features": [
      {
        "title": "**Safer channel output",
        "description": "** QQBot strips model reasoning and thinking scaffolding before native delivery, so users see the final answer rather than raw internal markup. (#89913, #90132) Thanks @openperf, @dygg2001, @Takhoffman, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89913"
      },
      {
        "title": "**MCP results no longer poison sessions",
        "description": "** `resource_link`, audio, malformed images, and future non-text blocks are normalized before provider conversion, avoiding Anthropic 400s and broken follow-up history. (#90710, #90728) Thanks @RanSHammer, @849261680, and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/90710"
      },
      {
        "title": "**Anthropic extended thinking recovers after restarts",
        "description": "** prompt-cache expiry and early-signature failures wait for a real message start, so they reach the existing retry path rather than ending a turn. (#90667, #90697) Thanks @openperf, @MIHHHMIH, @Takhoffman, @vincentkoc, @itsuzef, and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/90667"
      },
      {
        "title": "**Parallel web search is bundled",
        "description": "** API-key discovery, guarded endpoint handling, cache-safe session IDs, onboarding, and documentation make it a first-class search provider. (#85158) Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/pull/85158"
      },
      {
        "title": "**Better Matrix and Vertex reliability",
        "description": "** Matrix voice notes and threaded conversations retain their context, while Google Vertex ADC models regain static catalog and runtime resolution. (#78016, #90415, #90506, #90609) Thanks @849261680, @frankdierolf, and @paulogogs.",
        "href": "https://github.com/openclaw/openclaw/issues/78016"
      },
      {
        "title": "**Safer upgrades and restarts",
        "description": "** cron JSON stores migrate before runtime, service env placeholders stop masking secrets, and macOS avoids unnecessary direct-Gateway reconnect churn. (#90072, #90208, #90668, #90815) Thanks @MonkeyLeeT, @sallyom, @vrurg, @wlassalle724, @jalehman, @Takhoffman, @zhangguiping-xydt, @joshavant, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90072"
      },
      {
        "title": "Search/providers",
        "description": "add the Parallel bundled web-search plugin, registration contracts, onboarding integration, and guarded `api.parallel.ai/v1/search` support. (#85158) Thanks @NormallyGaussian and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/85158"
      },
      {
        "title": "Matrix/channels",
        "description": "add voice-message preflight and thread-aware read/reply behavior. (#78016, #90415) Thanks @frankdierolf.",
        "href": "https://github.com/openclaw/openclaw/issues/78016"
      },
      {
        "title": "Skills/ClawHub",
        "description": "install ClawHub skills backed by GitHub repositories through the resolved install API, download the pinned GitHub commit, keep install-policy checks, and report install telemetry after success. (#90478) Thanks @Patrick-Erichsen, @vincentkoc, @itsuzef, and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/90478"
      },
      {
        "title": "Google Chat/channels",
        "description": "add native approval card actions and click handling so Google Chat approvals use platform-native cards instead of generic message flow.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665"
      },
      {
        "title": "Mobile",
        "description": "Android provider/model screens now surface expiring, unavailable, unresolved, and attention states more clearly, while iOS settings and Talk tabs keep diagnostics, gateway rows, attachment labels, and unavailable Talk controls reachable. Thanks @joshavant and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665"
      },
      {
        "title": "Memory",
        "description": "QMD search can use the new rerank toggle, and memory adapter status uses the resolved default model identity when checking plain status. (#61834) Thanks @kouka-t0yohei and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/61834"
      },
      {
        "title": "QQBot",
        "description": "add `/bot-group-allways on|off` slash command (with named-account and default-account support) to toggle whether group messages require an `@mention` before the bot replies, and clear the runtime config snapshot after the write so the new account-level `defaultRequireMention` takes effect immediately without restart. (#91423) Thanks @cxyhhhhh, @joshavant, @vincentkoc, @itsuzef, @mcaxtr, and @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/pull/91423"
      },
      {
        "title": "**PR #89102** refactor(auth)",
        "description": "store auth profiles in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/89102"
      },
      {
        "title": "**PR #90028** docs",
        "description": "clarify legacy openai-codex auth. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/90028"
      },
      {
        "title": "**PR #89600** Fix Workboard status persistence",
        "description": "**PR #89600** Fix Workboard status persistence. Related #88592. Thanks @BunsDev and @kzclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/89600"
      },
      {
        "title": "**PR #90067** fix(workboard)",
        "description": "isolate stale lifecycle bulk patches. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/90067"
      },
      {
        "title": "**PR #88585** Pin official npm plugin install records",
        "description": "**PR #88585** Pin official npm plugin install records. Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/issues/88585"
      },
      {
        "title": "**PR #90053** fix",
        "description": "hide Skill Workshop revision handoff from chat. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/90053"
      },
      {
        "title": "**PR #90123** fix(auto-reply)",
        "description": "count message tool sends as delivery. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/90123"
      },
      {
        "title": "**PR #87965** fix(whatsapp)",
        "description": "restart channel when a per-account config field changes so disabled accounts are torn down. Related #87951. Thanks @MukundaKatta and @mcaxtr and @borntobefree2-cmyk.",
        "href": "https://github.com/openclaw/openclaw/issues/87965"
      },
      {
        "title": "**PR #90145** fix",
        "description": "protect global agent config defaults [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/90145"
      },
      {
        "title": "**PR #90147** Rate limit node pairing requests [AI]",
        "description": "**PR #90147** Rate limit node pairing requests [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/90147"
      },
      {
        "title": "**PR #89732** fix",
        "description": "guard MCP HTTP redirects [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/89732"
      },
      {
        "title": "**PR #90181** fix(feishu)",
        "description": "preserve streaming card content. Related #90164. Thanks @mushuiyu886 and @sliverp and @wjm7220.",
        "href": "https://github.com/openclaw/openclaw/issues/90181"
      },
      {
        "title": "**PR #90058** fix(docker)",
        "description": "qualify base image refs for podman short-name mode. Thanks @mrunalp and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/90058"
      },
      {
        "title": "**PR #89488** fix",
        "description": "stabilize Anthropic cache marker through tool loops. Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/89488"
      },
      {
        "title": "**PR #89505** fix(acp)",
        "description": "re-add opt-in parent commentary progress. Related #89501. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/89505"
      },
      {
        "title": "**PR #90341** fix(acp)",
        "description": "default parent commentary in progress mode. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/90341"
      },
      {
        "title": "**PR #90351** fix(message-tool)",
        "description": "stabilize send idempotency keys. Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/issues/90351"
      },
      {
        "title": "**PR #90375** refactor",
        "description": "remove Feishu runtime dedupe JSON fallback.",
        "href": "https://github.com/openclaw/openclaw/issues/90375"
      },
      {
        "title": "**PR #90385** refactor",
        "description": "move MS Teams state migration to doctor.",
        "href": "https://github.com/openclaw/openclaw/issues/90385"
      },
      {
        "title": "**PR #90287** fix(ci)",
        "description": "scope PR merge diff checks to first parent. Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/90287"
      },
      {
        "title": "**PR #90436** Add NVIDIA Nemotron 3 Ultra default",
        "description": "**PR #90436** Add NVIDIA Nemotron 3 Ultra default. Thanks @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/issues/90436"
      },
      {
        "title": "**PR #90205** fix",
        "description": "tolerate missing streamed response content type. Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/90205"
      },
      {
        "title": "**PR #90163** fix(agents)",
        "description": "strip stale compaction thinking signatures before Anthropic replay. Related #90108. Thanks @openperf and @dexiosmb.",
        "href": "https://github.com/openclaw/openclaw/issues/90163"
      },
      {
        "title": "**PR #90486** fix(whastapp)",
        "description": "bound connection startup waits. Thanks @mcaxtr and @MMMMSSSS8899.",
        "href": "https://github.com/openclaw/openclaw/issues/90486"
      },
      {
        "title": "**PR #90488** fix service env placeholder collection",
        "description": "**PR #90488** fix service env placeholder collection. Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/90488"
      },
      {
        "title": "**PR #90478** feat",
        "description": "install GitHub-backed ClawHub skills. Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/90478"
      },
      {
        "title": "**PR #90304** feat(memory)",
        "description": "support qmd query rerank toggle. Related #61834. Thanks @osolmaz and @kouka-t0yohei.",
        "href": "https://github.com/openclaw/openclaw/issues/90304"
      },
      {
        "title": "**PR #90532** Fix main CI guard drift",
        "description": "**PR #90532** Fix main CI guard drift. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/90532"
      },
      {
        "title": "**PR #90534** fix(mattermost)",
        "description": "anchor slash state on globalThis (#68113). Thanks @Takhoffman and @ly85206559 and @infoanton.",
        "href": "https://github.com/openclaw/openclaw/pull/68113"
      },
      {
        "title": "**PR #89502** feat(googlechat)",
        "description": "add native approval cards. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/89502"
      },
      {
        "title": "**PR #90317** Add Codex multi-agent config migration coverage",
        "description": "**PR #90317** Add Codex multi-agent config migration coverage. Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/90317"
      },
      {
        "title": "**PR #90319** Add Codex session route migration coverage",
        "description": "**PR #90319** Add Codex session route migration coverage. Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/issues/90319"
      },
      {
        "title": "**PR #90132** fix(qqbot)",
        "description": "sanitize outbound text to strip reasoning/thinking content. Related #89913. Thanks @openperf and @Takhoffman and @dygg2001.",
        "href": "https://github.com/openclaw/openclaw/issues/90132"
      },
      {
        "title": "**PR #89874** fix(agents)",
        "description": "detect unsigned thinking-only stall when reasoning payload inflates payloadCount. Related #89787. Thanks @openperf and @Takhoffman and @ArthurusDent.",
        "href": "https://github.com/openclaw/openclaw/issues/89874"
      },
      {
        "title": "**PR #90594** fix(android)",
        "description": "align provider readiness with available models. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/90594"
      },
      {
        "title": "**PR #90576** fix(sessions)",
        "description": "reconcile stale terminal main transcripts. Related #60542. Thanks @ferminquant and @kAIborg24.",
        "href": "https://github.com/openclaw/openclaw/issues/90576"
      },
      {
        "title": "**PR #90405** Fix ClickClack toolsAllow reply dispatch",
        "description": "**PR #90405** Fix ClickClack toolsAllow reply dispatch. Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/issues/90405"
      },
      {
        "title": "**PR #90415** feat(matrix)",
        "description": "handle voice preflight and threads. Related #78016. Thanks @frankdierolf.",
        "href": "https://github.com/openclaw/openclaw/issues/90415"
      },
      {
        "title": "**PR #90208** fix(cron)",
        "description": "auto-migrate legacy cron store. Related #90072. Thanks @MonkeyLeeT and @jalehman and @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/issues/90208"
      },
      {
        "title": "**PR #85791** fix(gateway)",
        "description": "dedupe probe warnings by gateway identity. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/85791"
      },
      {
        "title": "**PR #90632** fix(context-engine)",
        "description": "forward isHeartbeat to afterTurn (fixes #89302). Thanks @zenglingbiao and @jalehman and @huangxun375-stack.",
        "href": "https://github.com/openclaw/openclaw/issues/89302"
      },
      {
        "title": "**PR #90250** docs",
        "description": "prefer web_fetch in weather skill. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90250"
      },
      {
        "title": "**PR #85158** feat(parallel)",
        "description": "add Parallel as a bundled web_search provider. Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/issues/85158"
      },
      {
        "title": "**PR #86205** fix(tui)",
        "description": "stabilize optimistic user messages across history reloads, runId reassignment, and abort. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/86205"
      },
      {
        "title": "**PR #86483** chore(deps)",
        "description": "bump the swift-deps group across 1 directory with 3 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/86483"
      },
      {
        "title": "**PR #90601** chore(deps)",
        "description": "bump the actions group across 1 directory with 4 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/90601"
      },
      {
        "title": "**PR #81757** chore(deps)",
        "description": "bump github.com/apple/swift-testing from 6.3.1 to 6.3.2 in /apps/swabble in the swift-deps group across 1 directory.",
        "href": "https://github.com/openclaw/openclaw/issues/81757"
      },
      {
        "title": "**PR #86481** chore(deps)",
        "description": "bump the android-deps group across 1 directory with 9 updates.",
        "href": "https://github.com/openclaw/openclaw/issues/86481"
      },
      {
        "title": "**PR #74980** build(deps)",
        "description": "bump docker/login-action from 3.6.0 to 4.1.0.",
        "href": "https://github.com/openclaw/openclaw/issues/74980"
      },
      {
        "title": "**PR #90717** fix(agents)",
        "description": "re-probe single-provider primary during cooldown. Related #90702. Thanks @849261680 and @brtkwr.",
        "href": "https://github.com/openclaw/openclaw/issues/90717"
      },
      {
        "title": "**PR #90609** fix(google)",
        "description": "preserve Vertex ADC catalog auth. Related #90506. Thanks @849261680 and @paulogogs.",
        "href": "https://github.com/openclaw/openclaw/issues/90609"
      },
      {
        "title": "**PR #90775** fix",
        "description": "refresh prompt fence after compaction writes. Related #90729. Thanks @jalehman and @johnib.",
        "href": "https://github.com/openclaw/openclaw/issues/90775"
      },
      {
        "title": "**PR #90027** test(codex)",
        "description": "pin completion-idle timeout thread reset. Thanks @harjothkhara.",
        "href": "https://github.com/openclaw/openclaw/issues/90027"
      },
      {
        "title": "**PR #89566** fix(telegram)",
        "description": "suppress post-final tool error noise. Thanks @keshavbotagent.",
        "href": "https://github.com/openclaw/openclaw/issues/89566"
      },
      {
        "title": "**PR #90607** fix(voice-call)",
        "description": "track Twilio streams after connect. Related #81122. Thanks @sahibzada-allahyar and @Takhoffman and @donkeykong91.",
        "href": "https://github.com/openclaw/openclaw/issues/90607"
      },
      {
        "title": "**PR #90728** fix(agents)",
        "description": "coerce non-text/image MCP tool-result blocks to text (fixes #90710). Thanks @849261680 and @Takhoffman and @RanSHammer.",
        "href": "https://github.com/openclaw/openclaw/issues/90710"
      },
      {
        "title": "**PR #90697** fix(llm)",
        "description": "defer Anthropic stream start event until after message_start. Related #90667. Thanks @openperf and @Takhoffman and @MIHHHMIH.",
        "href": "https://github.com/openclaw/openclaw/issues/90697"
      },
      {
        "title": "**PR #90816** fix(memory)",
        "description": "resolve adapter default model in plain status identity check. Related #90413. Thanks @849261680 and @Takhoffman and @colinmac-boop.",
        "href": "https://github.com/openclaw/openclaw/issues/90816"
      },
      {
        "title": "**PR #90815** fix #90668",
        "description": "[Bug]: macOS node mode can silently self-reconnect in a healthy direct gateway session. Thanks @Takhoffman and @zhangguiping-xydt and @vrurg.",
        "href": "https://github.com/openclaw/openclaw/issues/90815"
      },
      {
        "title": "**PR #90793** Fix OpenAI audio auth to use API keys",
        "description": "**PR #90793** Fix OpenAI audio auth to use API keys. Thanks @Glucksberg and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/90793"
      },
      {
        "title": "**PR #90790** fix(codex)",
        "description": "preserve completed replies after client close. Related #90771. Thanks @brokemac79 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/90790"
      },
      {
        "title": "**PR #90820** fix(codex)",
        "description": "report completion timeout diagnostics. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/90820"
      },
      {
        "title": "**PR #90845** fix(imessage)",
        "description": "frame rpc stdout on LF only. Related #89830. Thanks @omarshahine and @mmartoccia.",
        "href": "https://github.com/openclaw/openclaw/issues/90845"
      },
      {
        "title": "**PR #90813** fix(uninstall)",
        "description": "refuse to remove current working directory during cleanup. Related #90806. Thanks @xydigit-sj and @sallyom and @brandondube.",
        "href": "https://github.com/openclaw/openclaw/issues/90813"
      },
      {
        "title": "**PR #90336** fix(memory)",
        "description": "fail fast when embeddings provider is unavailable. Related #89691. Thanks @osolmaz and @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/issues/90336"
      },
      {
        "title": "**PR #90914** fix(talk)",
        "description": "resolve realtime provider secret refs. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/90914"
      },
      {
        "title": "**PR #88771** fix(agents)",
        "description": "stream phased text deltas incrementally. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88771"
      },
      {
        "title": "**PR #87856** fix(agents)",
        "description": "count streamed model deltas incrementally. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87856"
      },
      {
        "title": "**PR #88882** test(gateway)",
        "description": "add small model live profile. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88882"
      },
      {
        "title": "**PR #90919** [codex] Add iOS Apple Review demo mode",
        "description": "**PR #90919** [codex] Add iOS Apple Review demo mode. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/90919"
      },
      {
        "title": "**PR #90954** fix(cron)",
        "description": "require HTTP context for server_error retry classification. Related #90947. Thanks @Nas01010101.",
        "href": "https://github.com/openclaw/openclaw/issues/90954"
      },
      {
        "title": "**PR #90854** fix(build)",
        "description": "copy export-html assets to dist/export-html matching runtime path (fixes #90843). Thanks @zenglingbiao and @Tank-x3.",
        "href": "https://github.com/openclaw/openclaw/issues/90843"
      },
      {
        "title": "**PR #90922** docs",
        "description": "improve plugin inventory layout. Thanks @joshp123.",
        "href": "https://github.com/openclaw/openclaw/issues/90922"
      },
      {
        "title": "**PR #89652** fix(plugins)",
        "description": "load owning plugin for configured memory embedding provider at startup. Related #89651. Thanks @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/issues/89652"
      },
      {
        "title": "**PR #90811** fix(agents)",
        "description": "stabilize user-turn serialization across turns to preserve prompt cache. Related #90810. Thanks @Marvinthebored and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/90811"
      },
      {
        "title": "**PR #90853** fix(imessage)",
        "description": "send TTS audio as voice messages. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/90853"
      },
      {
        "title": "**PR #90995** fix(release)",
        "description": "use monthly patch versions. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90995"
      },
      {
        "title": "**PR #91030** fix",
        "description": "store device-pair notify state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91030"
      },
      {
        "title": "**PR #91034** fix",
        "description": "store acpx process state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91034"
      },
      {
        "title": "**PR #90849** feat(parallel)",
        "description": "add free Parallel Search MCP as the zero-config default web_search provider. Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/issues/90849"
      },
      {
        "title": "**PR #91056** fix",
        "description": "store memory-core dreams state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91056"
      },
      {
        "title": "**PR #89918** fix(vertex)",
        "description": "route eu/us multi-region to .rep.googleapis.com host. Related #89891. Thanks @alkor2000 and @Wimcomander.",
        "href": "https://github.com/openclaw/openclaw/issues/89918"
      },
      {
        "title": "**PR #91058** fix(gemini)",
        "description": "accept empty grounding metadata. Related #88528. Thanks @TarsTriggerBot.",
        "href": "https://github.com/openclaw/openclaw/issues/91058"
      },
      {
        "title": "**PR #91072** refactor(memory-wiki)",
        "description": "store source sync state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91072"
      },
      {
        "title": "**PR #91073** fix(openrouter)",
        "description": "reconcile streamed generation cost. Related #68066. Thanks @chrispatil.",
        "href": "https://github.com/openclaw/openclaw/issues/91073"
      },
      {
        "title": "**PR #91032** docs(imessage)",
        "description": "require DisableLibraryValidation on modern macOS; document macOS 26 injection gates. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/91032"
      },
      {
        "title": "**PR #87933** fix(agents)",
        "description": "suppress DeepSeek thinking for Foundry aliases. Related #90520. Thanks @MukundaKatta and @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/issues/87933"
      },
      {
        "title": "**PR #91037** fix(config)",
        "description": "allow thinkingLevelMap in persisted model schema. Related #91011. Thanks @wsyjh8 and @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/issues/91037"
      },
      {
        "title": "**PR #89832** fix(config)",
        "description": "allow requiresReasoningContentOnAssistantMessages in ModelCompatSchema. Related #89660. Thanks @KrasimirKralev and @kyKKK.",
        "href": "https://github.com/openclaw/openclaw/issues/89832"
      },
      {
        "title": "**PR #91088** refactor(matrix)",
        "description": "store sync cache in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91088"
      },
      {
        "title": "**PR #90138** fix(minimax)",
        "description": "exempt M3 from thinking-disabled wrapper. Thanks @IamVNIE.",
        "href": "https://github.com/openclaw/openclaw/issues/90138"
      },
      {
        "title": "**PR #91053** refactor",
        "description": "store Zalo hosted media in plugin state.",
        "href": "https://github.com/openclaw/openclaw/issues/91053"
      },
      {
        "title": "**PR #91098** fix(test)",
        "description": "type overflow resolver mock. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91098"
      },
      {
        "title": "**PR #81277** fix(google)",
        "description": "handle compressed Vertex ADC token refresh responses. Thanks @liaoandi.",
        "href": "https://github.com/openclaw/openclaw/issues/81277"
      },
      {
        "title": "**PR #91100** refactor(matrix)",
        "description": "store crypto sidecars in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91100"
      },
      {
        "title": "**PR #90260** fix(agents)",
        "description": "decode xai and venice tool-call arguments exactly once. Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/90260"
      },
      {
        "title": "**PR #90593** fix",
        "description": "preserve LM Studio Responses tool arguments. Related #90585. Thanks @849261680 and @ceo-nada.",
        "href": "https://github.com/openclaw/openclaw/issues/90593"
      },
      {
        "title": "**PR #89109** fix(agents)",
        "description": "block message-tool spam loops defeated by volatile message ids. Related #89090. Thanks @openperf and @wujiaming88.",
        "href": "https://github.com/openclaw/openclaw/issues/89109"
      },
      {
        "title": "**PR #90429** Fix LM Studio wizard prompter binding",
        "description": "**PR #90429** Fix LM Studio wizard prompter binding. Thanks @christineyan4.",
        "href": "https://github.com/openclaw/openclaw/issues/90429"
      },
      {
        "title": "**PR #90780** perf(qqbot)",
        "description": "narrow tool discovery cold load. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/90780"
      },
      {
        "title": "**PR #90504** fix(codex)",
        "description": "preserve post-tool reasoning liveness. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90504"
      },
      {
        "title": "**PR #91113** fix",
        "description": "align Xiaomi completions replay compat. Related #91106. Thanks @KrasimirKralev.",
        "href": "https://github.com/openclaw/openclaw/issues/91113"
      },
      {
        "title": "**PR #91108** refactor(memory-wiki)",
        "description": "store import runs in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91108"
      },
      {
        "title": "**PR #91118** fix",
        "description": "preserve Foundry Responses reasoning replay ids. Related #91033. Thanks @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/issues/91118"
      },
      {
        "title": "**PR #91125** fix",
        "description": "strip Google provider prefix from Gemini paths. Related #71932. Thanks @soumoucookie.",
        "href": "https://github.com/openclaw/openclaw/issues/91125"
      },
      {
        "title": "**PR #90056** fix(doctor)",
        "description": "merge disjoint openai-codex model entries into canonical openai provider. Related #90047. Thanks @openperf and @holgergruenhagen.",
        "href": "https://github.com/openclaw/openclaw/issues/90056"
      },
      {
        "title": "**PR #91127** refactor",
        "description": "store sandbox registry in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91127"
      },
      {
        "title": "**PR #91131** fix",
        "description": "migrate legacy agent registry schema via doctor.",
        "href": "https://github.com/openclaw/openclaw/issues/91131"
      },
      {
        "title": "**PR #91119** fix(outbound)",
        "description": "keep Discord runtime adapters resolvable. Related #90162. Thanks @TurboTheTurtle and @thewilloftheshadow and @hoyanhan.",
        "href": "https://github.com/openclaw/openclaw/issues/91119"
      },
      {
        "title": "**PR #91128** fix(qqbot)",
        "description": "migrate group tool policy config.",
        "href": "https://github.com/openclaw/openclaw/issues/91128"
      },
      {
        "title": "**PR #91133** refactor(plugin-sdk)",
        "description": "persist dedupe state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/91133"
      },
      {
        "title": "**PR #90612** fix(agents)",
        "description": "dispatch subagent spawn in process. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/90612"
      },
      {
        "title": "**PR #87323** fix(infra/agents)",
        "description": "session-routing guard for coalesced gateway restart continuations (#86742). Thanks @openperf and @songshikang0111.",
        "href": "https://github.com/openclaw/openclaw/pull/86742"
      },
      {
        "title": "**PR #91101** fix(inbound-meta)",
        "description": "apply head+tail body truncation to ReplyChain and ReplyToBody JSON paths (fixes #91042). Thanks @zenglingbiao and @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/issues/91042"
      },
      {
        "title": "**PR #91201** feat(ios)",
        "description": "clarify talk realtime fallback. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/91201"
      },
      {
        "title": "**PR #91233** fix(agents)",
        "description": "prevent ReDoS in background-session name derivation. Thanks @Takhoffman and @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/91233"
      },
      {
        "title": "**PR #90798** fix(agents)",
        "description": "materialize sandbox skills for rw sandboxes. Related #90410. Thanks @brokemac79 and @gbb-netizen.",
        "href": "https://github.com/openclaw/openclaw/issues/90798"
      },
      {
        "title": "**PR #91248** fix",
        "description": "preserve live Ollama catalog metadata. Related #90315. Thanks @civiltox.",
        "href": "https://github.com/openclaw/openclaw/issues/91248"
      },
      {
        "title": "**PR #91041** fix(imessage)",
        "description": "self-explaining private-API failures and dedicated send timeout. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/91041"
      },
      {
        "title": "**PR #90029** feat",
        "description": "add live provider model catalog helper. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90029"
      },
      {
        "title": "**PR #90752** feat(android)",
        "description": "add theme mode selection. Thanks @Tosko4 and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/90752"
      },
      {
        "title": "**PR #90261** fix",
        "description": "gate owner-only HTTP tools. Thanks @pgondhi987 and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/90261"
      },
      {
        "title": "**PR #90022** fix(codex)",
        "description": "quarantine unreadable dynamic tools. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/90022"
      },
      {
        "title": "**PR #88822** fix(agents)",
        "description": "compact lean local tool catalogs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88822"
      },
      {
        "title": "**PR #89350** fix(agents)",
        "description": "guard prompt cache tool names. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89350"
      },
      {
        "title": "**PR #91241** fix(outbound)",
        "description": "preserve retries for budget-deferred deliveries. Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/91241"
      },
      {
        "title": "**PR #91124** fix(agents)",
        "description": "do not refresh lastUsedAt on MCP lease release. Related #91075. Thanks @openperf and @Takhoffman and @Atlas-crete.",
        "href": "https://github.com/openclaw/openclaw/issues/91124"
      },
      {
        "title": "**PR #90858** fix(imessage)",
        "description": "gate split-send coalescing on imsg metadata. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/90858"
      },
      {
        "title": "**PR #91235** fix(codex)",
        "description": "preserve native subagent completion results. Related #91120. Thanks @849261680 and @Takhoffman and @jinon86.",
        "href": "https://github.com/openclaw/openclaw/issues/91235"
      },
      {
        "title": "**PR #91230** fix(cron)",
        "description": "preserve isolated agent turn payload message. Related #91228. Thanks @849261680 and @Takhoffman and @AgentXaGent.",
        "href": "https://github.com/openclaw/openclaw/issues/91230"
      },
      {
        "title": "**PR #90480** feat(whatsapp)",
        "description": "expand live QA coverage. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/90480"
      },
      {
        "title": "**PR #89712** feat(cron)",
        "description": "support command jobs. Thanks @mbelinky.",
        "href": "https://github.com/openclaw/openclaw/issues/89712"
      },
      {
        "title": "**PR #90937** fix(gateway)",
        "description": "preserve stale channel restart diagnostics. Related #90901. Thanks @snowzlm and @Takhoffman and @Tony-ooo.",
        "href": "https://github.com/openclaw/openclaw/issues/90937"
      },
      {
        "title": "**PR #91231** fix(anthropic)",
        "description": "drop reasoning_content replay signatures. Related #91205. Thanks @849261680 and @Takhoffman and @bobgitmcgrath.",
        "href": "https://github.com/openclaw/openclaw/issues/91231"
      },
      {
        "title": "**PR #90897** fix #90452",
        "description": "Regression: Heartbeat exec completion still shows generic fallback text instead of actual output. Thanks @mushuiyu886 and @Takhoffman and @bizzle12368239.",
        "href": "https://github.com/openclaw/openclaw/issues/90897"
      },
      {
        "title": "**PR #91322** refactor",
        "description": "move session metadata to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/91322"
      },
      {
        "title": "**PR #91529** Fix transcript image redaction",
        "description": "**PR #91529** Fix transcript image redaction. Related #90760. Thanks @joshavant and @devinkuhn.",
        "href": "https://github.com/openclaw/openclaw/issues/91529"
      },
      {
        "title": "**PR #91551** Fix config",
        "description": "**PR #91551** Fix config.patch explicit array replacement. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/91551"
      },
      {
        "title": "**PR #85823** fix(whatsapp)",
        "description": "route captured replies through successor controller after restart. Thanks @itsuzef and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/85823"
      },
      {
        "title": "**PR #89659** fix(feishu)",
        "description": "retry on send rate-limit errors (230020/230006). Related #70879. Thanks @ladygege and @marshallm-create and @sliverp and @AxelHu.",
        "href": "https://github.com/openclaw/openclaw/issues/89659"
      },
      {
        "title": "**PR #91547** Fix Docker store seed target packages",
        "description": "**PR #91547** Fix Docker store seed target packages. Related #91035. Thanks @sallyom and @laurenceputra.",
        "href": "https://github.com/openclaw/openclaw/issues/91547"
      },
      {
        "title": "**PR #91423** feat(qqbot)",
        "description": "add /bot-group-allways command to toggle mention requirement. Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/issues/91423"
      }
    ],
    "fixes": [
      "Agents: `sessions_send` now honors an explicit `sessionKey` when stale label metadata is also present, and denied session-id sends no longer echo the resolved canonical session key. Fixes #64699; refs #74009 and #41199 Thanks @Mintalix, @RevisitMoon, @Mocha-s, @chouxiaozi1989, @sunxq1017-hash, @vincentkoc, and @joshavant.",
      "Channel content boundaries: QQBot now strips reasoning/thinking tags before sending, preserving final answers while hiding internal model narration from users. (#89913, #90132) Thanks @openperf, @Takhoffman, @dygg2001, and @vincentkoc.",
      "Agents/MCP/providers: coerce non-text/image MCP tool-result blocks before they reach provider converters, preserving valid images and turning richer MCP content into text instead of malformed image blocks. (#90710, #90728) Thanks @RanSHammer, @849261680, @Takhoffman, @vincentkoc, and @LiuwqGit.",
      "Anthropic/Codex/ACP/agent recovery: defer Anthropic stream start events until `message_start`, strip stale compaction thinking signatures before Anthropic replay, detect unsigned thinking-only stalls, refresh prompt fences after compaction writes, reject empty completion handoffs, preserve parent streaming-off overrides/shared progress commentary, forward heartbeat metadata to context-engine hooks, and cover Codex session/thread migration edge cases. (#90667, #90697, #90163, #90108, #89874, #89505, #90632, #89302, #90729, #90317, #90319) Thanks @openperf, @100yenadmin, @ooiuuii, @johnib, @Takhoffman, @MIHHHMIH, @dexiosmb, @zenglingbiao, @jalehman, @huangxun375-stack, @holgergruenhagen, @vincentkoc, @joshavant, and @ArthurusDent.",
      "Provider/model resolution: preserve Google Vertex ADC auth markers in generated catalogs, re-probe a single-provider primary after cooldown, share Codex model visibility, fail closed for unknown model auth, preserve Codex alias availability, keep unresolved profile refs unknown, and avoid resolving auth while listing models. (#90506, #90609, #90717, #90702) Thanks @849261680, @paulogogs, @brtkwr, and @vincentkoc.",
      "Gateway/macOS/mobile: avoid duplicate Gateway probe warnings by identity, rate-limit node pairing requests while preserving paired-node reconnects, keep macOS node mode on a healthy direct Gateway session, keep iOS diagnostics and gateway rows reachable, and avoid Linux ARM Gradle resource tasks during Android builds. (#85791, #90147, #90668, #90815) Thanks @giodl73-repo, @vrurg, @pgondhi987, @Takhoffman, @zhangguiping-xydt, @vincentkoc, @joshavant, and @shakkernerd.",
      "TUI/chat/Workboard/auto-reply: optimistic user messages stay stable across stale history reloads, runId reassignment, and abort windows instead of disappearing, jumping, or lingering as ghost rows; Workboard stale lifecycle bulk updates no longer overwrite newer status/provenance; message-tool sends now count as delivery. (#86205, #89600, #88592, #90123) Thanks @RomneyDa, @BunsDev, @kzclaw, @mcaxtr, @vincentkoc, @joshavant, and @LiuwqGit.",
      "Cron/update/service env: doctor config preflight now migrates legacy cron JSON stores into SQLite before runtime reads, service env planning skips unresolved placeholders that would mask state-dir `.env` values, and session transcript rewrites keep registry markers/discriminants consistent. (#90072, #90208, #90277, #90488) Thanks @MonkeyLeeT, @sallyom, @Kvikkulf, @jalehman, @wlassalle724, @shakkernerd, and @vincentkoc.",
      "Security/config/tooling: guard MCP HTTP redirects, protect global agent config defaults, and keep malformed operational limits bounded and explicit. (#89732, #90145) Thanks @pgondhi987, @vincentkoc, and @joshavant.",
      "Channels: WhatsApp restarts when per-account config changes, bounds background startup waits, closes failed sockets, and preserves reconnect behavior; Mattermost slash commands keep their state on `globalThis`; Feishu streaming cards preserve full merged content; voice-call tracks Twilio streams after connect; ClickClack reply tools respect `toolsAllow`. (#87951, #87965, #90486, #68113, #90534, #90181, #90607, #89500) Thanks @MukundaKatta, @mcaxtr, @infoanton, @mushuiyu886, @sahibzada-allahyar, @borntobefree2-cmyk, @Takhoffman, @mmaps, @MMMMSSSS8899, @ly85206559, @sliverp, @vincentkoc, @joshavant, @LiuwqGit, @itsuzef, @wjm7220, and @donkeykong91.",
      "Feishu: retry transient send rate-limit errors (HTTP 429, per-chat code 230020, tenant-level code 11232) with linear backoff, including SDK responses that fulfill with rate-limit bodies instead of throwing, and route streaming-card sends through the retry wrapper. (#89659) Thanks @ladygege, @AxelHu, @marshallm-create, @sliverp, @joshavant, @vincentkoc, @itsuzef, and @mcaxtr.",
      "Memory: keep doctor REM harness previews aligned with live REM by dropping short-term recall snippets whose source files disappeared before rendering preview output. Thanks @samzong, @frankekn, and @vincentkoc."
    ]
  },
  {
    "version": "2026.6.2",
    "date": "2026.6.2",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662",
    "features": [
      {
        "title": "**Governed plugin and skill installs",
        "description": "** the old dangerous-code scanner gives way to an operator install policy with clearer doctor, CLI, ClawHub, package, archive, source, upload, and marketplace recovery paths. (#89516) Thanks @joshavant and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89516"
      },
      {
        "title": "**Safer channel delivery",
        "description": "** Telegram, Feishu, Discord, WhatsApp, and outbound sends now handle transcript mirroring, streamed finals, admin writeback, approval allowlists, poll modifiers, and setup state without corrupting delivery. (#88973, #89626, #89812, #89035, #89814, #89813, #89601) Thanks @pgondhi987, @Petru2224, @zhangguiping-xydt, @ppmuzyk, @codezz, @takhoffman, @vincentkoc, @harjothkhara, @obviyus, @glenn-agent, @kesslerio, and @leiJack-lo.",
        "href": "https://github.com/openclaw/openclaw/issues/88973"
      },
      {
        "title": "**Steadier chat and operator UI",
        "description": "** visible stream text, completed sends, Workboard keyboard navigation, dialog accessibility, lazy usage views, and Android companion flows retain their state through normal interaction. (#89801, #89777) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89801"
      },
      {
        "title": "**Stricter safety checks",
        "description": "** config, policy, shell snapshots, exec prechecks, script limits, and Gateway startup reject malformed or unsafe input before it becomes runtime state. (#89701, #87074, #81488, #87056, #89480) Thanks @RomneyDa, @giodl73-repo, @mmaps, @drobison00, @vincentkoc, and @q1387154-spec.",
        "href": "https://github.com/openclaw/openclaw/issues/89701"
      },
      {
        "title": "**More reliable Gateway and model sessions",
        "description": "** session locks, abandoned Codex startup, ACP handoffs, custom-provider fanout, provider aliases, prompt caching, and memory checks recover without leaving a run wedged. (#89811, #89244) Thanks @RomneyDa, @takhoffman, @spencer2211, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89811"
      },
      {
        "title": "Plugins/security",
        "description": "replace dangerous-code scanner enforcement with operator install policy, install-policy context, doctor checks, install/update CLI wiring, ClawHub metadata paths, and package/archive/source/upload lifecycle coverage. (#89516) Thanks @joshavant and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89516"
      },
      {
        "title": "Policy",
        "description": "add data-handling conformance checks and reject unsupported policy keys. (#87056, #87074) Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/87056"
      },
      {
        "title": "Telegram/channels",
        "description": "show commentary and reasoning in progress drafts, share progress draft compositors across channel plugins, and keep Telegram polling stop/reset boundaries cheaper and more reliable.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "UI/mobile",
        "description": "add Workboard keyboard movement controls, tighten Workboard card operations, and improve Android companion-first shell UX. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "**PR #88922** fix(google)",
        "description": "forward stop sequences to Gemini generationConfig. Thanks @coder999999999.",
        "href": "https://github.com/openclaw/openclaw/issues/88922"
      },
      {
        "title": "**PR #89460** fix(models)",
        "description": "preserve provider prompt cache boundaries. Related #89386. Thanks @Enominera.",
        "href": "https://github.com/openclaw/openclaw/issues/89460"
      },
      {
        "title": "**PR #89478** fix",
        "description": "restore Skill Workshop view switcher. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/89478"
      },
      {
        "title": "**PR #76741** fix(kimi)",
        "description": "strip anthropic cache markers. Related #76612. Thanks @BryanTegomoh and @vliuyt.",
        "href": "https://github.com/openclaw/openclaw/issues/76741"
      },
      {
        "title": "**PR #89480** fix",
        "description": "recover suspicious gateway startup configs. Related #89331. Thanks @q1387154-spec.",
        "href": "https://github.com/openclaw/openclaw/issues/89480"
      },
      {
        "title": "**PR #87056** Policy",
        "description": "add data handling conformance checks. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/87056"
      },
      {
        "title": "**PR #81488** Harden node exec approval precheck env [AI]",
        "description": "**PR #81488** Harden node exec approval precheck env [AI]. Thanks @mmaps and @drobison00.",
        "href": "https://github.com/openclaw/openclaw/issues/81488"
      },
      {
        "title": "**PR #89356** Add accessible Workboard movement controls",
        "description": "**PR #89356** Add accessible Workboard movement controls. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89356"
      },
      {
        "title": "**PR #87074** fix(policy)",
        "description": "reject unsupported policy keys. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/87074"
      },
      {
        "title": "**PR #89601** fix(outbound)",
        "description": "stop schema-padded poll modifiers from blocking send. Thanks @codezz and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/89601"
      },
      {
        "title": "**PR #88963** perf(telegram)",
        "description": "avoid broad reset-boundary scan. Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/issues/88963"
      },
      {
        "title": "**PR #89125** Suppress internal agent failure traces before channel delivery",
        "description": "**PR #89125** Suppress internal agent failure traces before channel delivery. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/89125"
      },
      {
        "title": "**PR #89701** fix(exec)",
        "description": "reject corrupt shell snapshots. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89701"
      },
      {
        "title": "**PR #89705** fix",
        "description": "allowlist pending agent sqlite scaffold. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89705"
      },
      {
        "title": "**PR #89704** Share channel progress draft compositor",
        "description": "**PR #89704** Share channel progress draft compositor. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/89704"
      },
      {
        "title": "**PR #89708** perf(control-ui)",
        "description": "coalesce chat metadata startup. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89708"
      },
      {
        "title": "**PR #89337** fix",
        "description": "report gateway health auth diagnostics. Related #89711. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89337"
      },
      {
        "title": "**PR #88685** Render dashboard chat history incrementally",
        "description": "**PR #88685** Render dashboard chat history incrementally. Related #87345. Thanks @alexzhu0 and @2xmncvcx92-dotcom.",
        "href": "https://github.com/openclaw/openclaw/issues/88685"
      },
      {
        "title": "**PR #89740** fix(gateway)",
        "description": "stabilize webchat prompt cache affinity. Related #89139. Thanks @vincentkoc and @Enominera.",
        "href": "https://github.com/openclaw/openclaw/issues/89740"
      },
      {
        "title": "**PR #89191** fix(webchat)",
        "description": "show sessions_send handoffs as forwarded. Related #89161. Thanks @849261680 and @Xj49688-lgtm.",
        "href": "https://github.com/openclaw/openclaw/issues/89191"
      },
      {
        "title": "**PR #89723** fix(auto-reply)",
        "description": "surface fatal channel errors. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/89723"
      },
      {
        "title": "**PR #89727** fix #87699",
        "description": "[Bug]: [BUG] UI shows agent \"running\" after conversation ends — requires manual page refresh every time. Thanks @zhangguiping-xydt and @csck-luoy.",
        "href": "https://github.com/openclaw/openclaw/issues/89727"
      },
      {
        "title": "**PR #88786** fix #71992",
        "description": "[Bug]: Control UI webchat duplicates every assistant reply on 2026.4.21 — regression from #5964/#39469. Thanks @zhangguiping-xydt and @rzhnrhjr6j-cloud and @astoreyai and @kAIborg24.",
        "href": "https://github.com/openclaw/openclaw/issues/88786"
      },
      {
        "title": "**PR #89530** fix(ui)",
        "description": "preserve visible chat stream text. Related #67035. Thanks @osolmaz and @q7793527.",
        "href": "https://github.com/openclaw/openclaw/issues/89530"
      },
      {
        "title": "**PR #87072** feat(telegram)",
        "description": "opt-in interleaved progress lane. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/87072"
      },
      {
        "title": "**PR #89771** perf(ui)",
        "description": "start chat refresh before bootstrap. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89771"
      },
      {
        "title": "**PR #89777** perf(ui)",
        "description": "label delayed chat sends in telemetry. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89777"
      },
      {
        "title": "**PR #89786** perf(gateway)",
        "description": "overlap chat catalog startup. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89786"
      },
      {
        "title": "**PR #89793** test(ui)",
        "description": "cover control chat send timing phases. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89793"
      },
      {
        "title": "**PR #89801** perf(ui)",
        "description": "surface chat ACK server timing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89801"
      },
      {
        "title": "**PR #89355** Harden Workboard modal and drawer accessibility",
        "description": "**PR #89355** Harden Workboard modal and drawer accessibility. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/89355"
      },
      {
        "title": "**PR #89802** docs(web)",
        "description": "document chat ACK timing metadata. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89802"
      },
      {
        "title": "**PR #89391** fix(android)",
        "description": "improve companion-first shell UX. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/89391"
      },
      {
        "title": "**PR #89811** fix(agents)",
        "description": "release session write lock if fence read throws on prompt release. Thanks @Takhoffman and @spencer2211.",
        "href": "https://github.com/openclaw/openclaw/issues/89811"
      },
      {
        "title": "**PR #89808** perf(ui)",
        "description": "trace chat send server milestones. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89808"
      },
      {
        "title": "**PR #89813** fix(telegram)",
        "description": "isolate verbose status after streamed finals. Related #89540. Thanks @Takhoffman and @kesslerio.",
        "href": "https://github.com/openclaw/openclaw/issues/89813"
      },
      {
        "title": "**PR #89814** fix(feishu)",
        "description": "wire setup runtime setter. Related #88024. Thanks @Takhoffman and @glenn-agent and @leiJack-lo.",
        "href": "https://github.com/openclaw/openclaw/issues/89814"
      },
      {
        "title": "**PR #85961** fix #85807",
        "description": "retain Telegram preview after generation race. Thanks @zhangguiping-xydt and @samson1357924.",
        "href": "https://github.com/openclaw/openclaw/issues/85961"
      },
      {
        "title": "**PR #89035** fix #88773",
        "description": "[Bug]: Telegram DM exec requires approval despite allowlist + ask:off — works in webchat, not in Telegram. Thanks @zhangguiping-xydt and @obviyus and @ppmuzyk.",
        "href": "https://github.com/openclaw/openclaw/issues/89035"
      },
      {
        "title": "**PR #88634** fix(telegram)",
        "description": "prevent preview duplication in partial and block streaming modes. Related #87624. Thanks @jmao0001 and @tuckyapps.",
        "href": "https://github.com/openclaw/openclaw/issues/88634"
      },
      {
        "title": "**PR #89812** fix(outbound)",
        "description": "keep channel send durable when transcript mirror fails (#89626). Thanks @Takhoffman and @harjothkhara and @Petru2224.",
        "href": "https://github.com/openclaw/openclaw/pull/89626"
      },
      {
        "title": "**PR #88973** fix(telegram)",
        "description": "require admin for target writeback [AI]. Thanks @pgondhi987 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88973"
      },
      {
        "title": "**PR #89449** refactor(gateway)",
        "description": "share duplicated test helpers. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89449"
      },
      {
        "title": "**PR #88832** fix(telegram)",
        "description": "slow polling restart storms. Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/88832"
      },
      {
        "title": "**PR #89960** test(channels)",
        "description": "fix guardrail regex lint. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89960"
      },
      {
        "title": "**PR #89244** fix(memory)",
        "description": "warn after startup watcher pressure check. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89244"
      },
      {
        "title": "**PR #89516** Add operator install policy and remove dangerous-code install...",
        "description": "**PR #89516** Add operator install policy and remove dangerous-code install scanners. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/89516"
      },
      {
        "title": "**PR #90024** chore(release)",
        "description": "update appcast for 2026.6.1.",
        "href": "https://github.com/openclaw/openclaw/issues/90024"
      },
      {
        "title": "**PR #89613** docs",
        "description": "document auth profile failure policy contract.",
        "href": "https://github.com/openclaw/openclaw/issues/89613"
      },
      {
        "title": "**PR #89548** fix(agents)",
        "description": "classify read-only shell commands as non-mutating. Thanks @Glucksberg.",
        "href": "https://github.com/openclaw/openclaw/issues/89548"
      },
      {
        "title": "**PR #89939** fix",
        "description": "keep stream-to-parent spawns registered. Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/issues/89939"
      },
      {
        "title": "**PR #88964** fix(agents)",
        "description": "repair context-engine tool-result pairing. Related #88561. Thanks @MonkeyLeeT and @Finn-jiejie.",
        "href": "https://github.com/openclaw/openclaw/issues/88964"
      },
      {
        "title": "**PR #82219** fix(codex)",
        "description": "accept first-party OpenAI plugin marketplaces (bundled and primary-runtime). Related #82216. Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/issues/82219"
      },
      {
        "title": "**PR #89998** revert(codex)",
        "description": "revert first-party marketplace allowlist. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/89998"
      },
      {
        "title": "**PR #89176** fix(browser)",
        "description": "honor tab timeout for Chrome MCP. Related #88213. Thanks @MonkeyLeeT and @lamkan0210.",
        "href": "https://github.com/openclaw/openclaw/issues/89176"
      },
      {
        "title": "**PR #90043** fix",
        "description": "restore Skill Workshop current chat toggle. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/90043"
      },
      {
        "title": "**PR #81422** fix(update)",
        "description": "surface plugin channel fallbacks. Thanks @BKF-Gitty.",
        "href": "https://github.com/openclaw/openclaw/issues/81422"
      }
    ],
    "fixes": [
      "Channels/outbound: keep channel sends durable when transcript mirroring fails, stop schema-padded poll modifiers from blocking normal sends, preserve WebChat `sessions_send` handoffs, preserve Discord channel-label suppression while hiding internal agent failure traces, match Discord libopus error shapes, and sanitize Discord tool progress scaffolding. (#89626, #89812, #89601) Thanks @Petru2224, @codezz, @takhoffman, @harjothkhara, and @vincentkoc.",
      "Telegram/Feishu: require admin rights for Telegram target writeback, keep Telegram DM exec approval allowlists working with `ask:off`, prevent Telegram preview duplication across streaming modes, isolate verbose status after streamed finals, cancel clean restart stop timers, slow polling restart storms, and wire Feishu setup runtime setters. (#88973, #89035, #89813, #89814) Thanks @pgondhi987, @zhangguiping-xydt, @ppmuzyk, @takhoffman, @vincentkoc, @obviyus, @kesslerio, @glenn-agent, and @leiJack-lo.",
      "Feishu: preserve full streaming card content by sending the merged text on each update instead of only the latest delta, so card readers see complete output when intermediate frames are missed. (#90181) Thanks @mushuiyu886.",
      "Chat/UI/Gateway: preserve visible chat stream text, clear stale stream buffers before terminal commits, reconcile completed sends, scroll pending sends into view, harden Workboard dialog accessibility, stabilize WebChat prompt-cache affinity, overlap chat catalog startup, render chat history incrementally, lazy-load usage dashboard, and report gateway health auth diagnostics. (#89337) Thanks @RomneyDa and @vincentkoc.",
      "Agents/Codex/providers/models: release session write locks when prompt-release fence reads fail, retire abandoned Codex app-server startups, keep stream-to-parent ACP spawns registered, close Codex startup clients on timeout, recover bundled provider aliases, avoid custom-provider runtime fanout, preserve provider prompt-cache boundaries, forward Gemini stop sequences, and strip Kimi-incompatible Anthropic cache markers. (#89811) Thanks @takhoffman, @spencer2211, and @vincentkoc.",
      "Memory/build/update: warn after startup watcher pressure checks, externalize optional Baileys image backends, restore and pin Canvas A2UI compatibility assets, keep plugin repair fetch failures nonblocking, restore Skill Workshop view switching, and keep the current chat toggle active after awaited session switches. (#89244) Thanks @RomneyDa and @vincentkoc.",
      "Plugins/auth: keep Hermes migration reports pointed at SQLite auth-profile stores.",
      "Plugins/CLI: avoid importing the runtime plugin loader only to clear in-process caches after short-lived plugin install, enable, disable, update, and uninstall commands refresh registry metadata.",
      "Security/config/tooling: reject corrupt shell snapshots, suspicious gateway startup configs, malformed numeric limits, oversized audit responses, unsafe exec precheck env, and invalid pending-agent SQLite scaffold denials. (#89701, #89705, #89480, #81488) Thanks @RomneyDa, @mmaps, @drobison00, @vincentkoc, and @q1387154-spec."
    ]
  },
  {
    "version": "2026.6.1",
    "date": "2026.6.1",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661",
    "features": [
      {
        "title": "**Resilient agent and Codex runs",
        "description": "** interrupted tool calls, stale session bindings, compaction handoffs, auth-profile failover, reasoning-tag cleanup, yielded subagents, and generated-media delivery all recover without leaving work stranded. (#85798, #87484, #88182, #89220) Thanks @RomneyDa, @neeravmakwana, @joshavant, @omarshahine, @vincentkoc, @bgmbgm94, and @ksiyuna-claw.",
        "href": "https://github.com/openclaw/openclaw/issues/85798"
      },
      {
        "title": "**Reliable channel and mobile delivery",
        "description": "** WhatsApp, iMessage, Discord state, QQBot, and iOS Talk now preserve replies, typing, session state, QR-login recovery, and realtime connections across normal restart and transport failure paths. (#88183, #88866, #88948, #89015, #88231) Thanks @mcaxtr, @omarshahine, @sliverp, @Jensenwgd, @ngutman, @vincentkoc, and @alfredjbclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/88183"
      },
      {
        "title": "**Faster Control UI chat",
        "description": "** startup, local drafts, incremental stream rendering, transcript caching, first connect, and post-send cleanup no longer compete with the active conversation. (#88952, #88960, #88998, #89030, #89106) Thanks @vincentkoc and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/88952"
      },
      {
        "title": "**Governed skills and plugins",
        "description": "** Skill Workshop proposals, disabled-skill snapshots, support-file approvals, plugin contracts, and external package boundaries are clearer and safer for operators. (#79173, #82326, #89336) Thanks @zeus1959, @sallyom, @RomneyDa, @maverikva, @vincentkoc, and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/79173"
      },
      {
        "title": "**Richer operator coordination",
        "description": "** Workboard goals, task-backed runs, and SQLite-backed plugin state make multi-agent work and installed-plugin discovery survive reloads cleanly. (#87469, #88794) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87469"
      },
      {
        "title": "**More dependable providers",
        "description": "** Google defaults, provider IDs, model catalogs, OAuth/device-code flows, media timers, and reasoning output now stay valid across hosted and local runtimes. (#88512, #88781, #89343, #89379, #89400) Thanks @1052326311, @charles-openclaw, @zz327455573, @849261680, @xzh-xydt, @azgardtek, @google, @mrbrl, @nyuDSA, @vincentkoc, and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/issues/88512"
      },
      {
        "title": "Skills",
        "description": "let the `skill_workshop` agent tool apply, reject, and quarantine explicit proposals through the guarded review flow. Thanks @shakkernerd and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "let proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "let pending proposals be revised in place with versioned, dated proposal frontmatter before approval. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "add Skill Workshop with pending proposals, CLI/Gateway review actions, rollback metadata, and the `skill_workshop` agent tool. Thanks @shakkernerd and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skill Workshop",
        "description": "add the Control UI navigation, styled dashboard, proposal today view, revision dialog, file preview modal, searchable preview files, reusable session handoff, and localized strings. Thanks @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Plugins",
        "description": "externalize Tokenjuice as the official `@openclaw/tokenjuice` plugin with npm and ClawHub publish metadata.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Plugins",
        "description": "externalize the GitHub Copilot agent runtime as the official `@openclaw/copilot` plugin with npm and ClawHub publish metadata.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "iOS",
        "description": "add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231) Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88096"
      },
      {
        "title": "iOS",
        "description": "support native iPad display layouts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Android",
        "description": "add installed-app inspection commands, notification picker helpers, and updated-system-app classification.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Workboard",
        "description": "add orchestration primitives and agent coordination tools for multi-agent planning and run tracking. (#87469)",
        "href": "https://github.com/openclaw/openclaw/pull/87469"
      },
      {
        "title": "Workboard",
        "description": "wire task-backed board runs and show task comments in the edit modal.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Code mode",
        "description": "add internal namespaces for scoped agent/global sessions and exact namespace tool dispatch. (#88043)",
        "href": "https://github.com/openclaw/openclaw/pull/88043"
      },
      {
        "title": "Gateway",
        "description": "support Tailscale Serve service names for local service routing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Control UI",
        "description": "add a Dreaming-tab agent selector and propagate the selected agent through Dreaming status, diary, and diary actions. (#78748) Thanks @stevenepalmer, @vincentkoc, and @ttomiczek.",
        "href": "https://github.com/openclaw/openclaw/pull/78748"
      },
      {
        "title": "Control UI",
        "description": "add calmer chat composer controls, local draft typing state, and first-output latency instrumentation for active chat entry. (#88772, #88998) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88772"
      },
      {
        "title": "Plugins",
        "description": "add a SecretRef provider integration manifest contract. (#82326) Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/82326"
      },
      {
        "title": "Plugin SDK",
        "description": "add typed presentation command actions and the bounded `resolve_exec_env` hook for plugin-provided exec environment contributions. (#88721) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88721"
      },
      {
        "title": "Plugins",
        "description": "persist the plugin install index in SQLite so installed package lookup survives reloads with less filesystem scanning. (#88794) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88794"
      },
      {
        "title": "Providers",
        "description": "add MiniMax M3 model support. (#88860)",
        "href": "https://github.com/openclaw/openclaw/pull/88860"
      },
      {
        "title": "Tools/media",
        "description": "allow validated host-local text document media sends while keeping unsafe plain-text media sends blocked. (#79658) Thanks @simplyclever914.",
        "href": "https://github.com/openclaw/openclaw/pull/79658"
      },
      {
        "title": "Doctor",
        "description": "add disk space health checks and stabilize post-upgrade JSON probes. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Channels",
        "description": "store inbound queues in SQLite and migrate iMessage monitor state to SQLite-backed tracking. (#88797) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88797"
      },
      {
        "title": "Skills",
        "description": "add the core skills index and centralize skills runtime loading, status, filtering, and prompt formatting. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "**PR #88995** perf(ui)",
        "description": "guard chat composer controls. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88995"
      },
      {
        "title": "**PR #88998** perf(ui)",
        "description": "keep chat draft local while typing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88998"
      },
      {
        "title": "**PR #89012** perf(ui)",
        "description": "trace chat first output latency. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89012"
      },
      {
        "title": "**PR #89019** perf(ui)",
        "description": "speed up first global chat sends. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89019"
      },
      {
        "title": "**PR #86953** fix(plugins)",
        "description": "block untrusted workspace setup-only channel loads. Thanks @hxy91819 and @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/issues/86953"
      },
      {
        "title": "**PR #89030** perf(control-ui)",
        "description": "prioritize first connect startup. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89030"
      },
      {
        "title": "**PR #89058** perf(control-ui)",
        "description": "hydrate chat startup state. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89058"
      },
      {
        "title": "**PR #89106** fix(ui)",
        "description": "clear chat composer after send. Related #89108. Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/89106"
      },
      {
        "title": "**PR #88974** fix",
        "description": "bound remote media reference reads [AI]. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/88974"
      },
      {
        "title": "**PR #88966** fix",
        "description": "allow admins to approve dependency guard. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88966"
      },
      {
        "title": "**PR #89169** fix(ci)",
        "description": "restore dist cache before artifact builds. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89169"
      },
      {
        "title": "**PR #85798** fix(agents)",
        "description": "actionable copy for exhausted auth-profile failover. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/85798"
      },
      {
        "title": "**PR #88689** Keep JSON CLI output clean during startup",
        "description": "**PR #88689** Keep JSON CLI output clean during startup. Related #88602. Thanks @alexzhu0 and @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/issues/88689"
      },
      {
        "title": "**PR #85351** fix(memory)",
        "description": "retry transient FileProvider-backed reads. Related #85252. Thanks @NianJiuZst and @richardmqq.",
        "href": "https://github.com/openclaw/openclaw/issues/85351"
      },
      {
        "title": "**PR #89188** fix(memory-core)",
        "description": "reduce Linux watcher fan-out. Related #89182. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89188"
      },
      {
        "title": "**PR #88734** docs",
        "description": "refresh ClawHub showcase cards. Thanks @vyctorbrzezowski.",
        "href": "https://github.com/openclaw/openclaw/issues/88734"
      },
      {
        "title": "**PR #89212** test",
        "description": "reset gateway timers at test boundaries. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89212"
      },
      {
        "title": "**PR #89181** fix(agents)",
        "description": "dispatch auth failures by type. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89181"
      },
      {
        "title": "**PR #89180** enhance(slack)",
        "description": "route plugin approvals through native UI. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/89180"
      },
      {
        "title": "**PR #89185** fix(memory)",
        "description": "warn on gateway watcher FD risk. Related #71335. Thanks @RomneyDa and @chrisabad.",
        "href": "https://github.com/openclaw/openclaw/issues/89185"
      },
      {
        "title": "**PR #89135** fix(ui)",
        "description": "render skill workshop tab. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/issues/89135"
      },
      {
        "title": "**PR #89246** Revert \"fix(memory)",
        "description": "warn on gateway watcher FD risk\". Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89246"
      },
      {
        "title": "**PR #88948** Keep iMessage typing active during tool work",
        "description": "**PR #88948** Keep iMessage typing active during tool work. Related #75847. Thanks @omarshahine and @alfredjbclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/88948"
      },
      {
        "title": "**PR #89220** fix(agents)",
        "description": "avoid duplicate generated media fallback. Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/89220"
      },
      {
        "title": "**PR #88946** Fix live model inference edge cases",
        "description": "**PR #88946** Fix live model inference edge cases. Related #44870, #63685, #74305, #83192, #83810, #84109, #84688, #84697, #84804, #85806, #85918, #86808, #87381, #87740, #87768, #88039, #88439, #88456, #88833, #88918, #89008, #89241, #89242. Thanks @86jkuncle and @behroozbc and @SimSef and @tassiocamara and @chac4l and @alfredpennyworthtc-netizen and @shichuzhu and @mz1009-web and @devinallen-07 and @garyd9 and @silvesterxm and @jsompis and @xiaoxuesheng123467 and @TitanBob2026 and @guzzijones and @fenglanhua and @Nassiel and @ge0el and @pigfoot and @yetval and @joshgaskin and @shadow-enthusiast.",
        "href": "https://github.com/openclaw/openclaw/issues/88946"
      },
      {
        "title": "**PR #89305** fix(agents)",
        "description": "bypass stale auth for plugin harnesses. Related #85105. Thanks @saphoroth.",
        "href": "https://github.com/openclaw/openclaw/issues/89305"
      },
      {
        "title": "**PR #89297** docs",
        "description": "add ClawHub CLI page. Thanks @Wang-Yeah623 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/89297"
      },
      {
        "title": "**PR #89318** fix(auto-reply)",
        "description": "guard missing dispatcher getFailedCounts without weakening the SDK type. Related #89116. Thanks @Takhoffman and @Alix-007 and @Bigzhangbig.",
        "href": "https://github.com/openclaw/openclaw/issues/89318"
      },
      {
        "title": "**PR #89321** fix",
        "description": "honor channel model overrides in agent ingress. Related #60078. Thanks @davidbordenwi.",
        "href": "https://github.com/openclaw/openclaw/issues/89321"
      },
      {
        "title": "**PR #89328** Fix backup verifier for root-relative hardlink targets",
        "description": "**PR #89328** Fix backup verifier for root-relative hardlink targets. Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/issues/89328"
      },
      {
        "title": "**PR #87907** fix(memory)",
        "description": "validate memory index identity. Related #83333. Thanks @osolmaz and @jacka-L.",
        "href": "https://github.com/openclaw/openclaw/issues/87907"
      },
      {
        "title": "**PR #89347** fix",
        "description": "repair model provider edge cases. Related #80347, #88357, #45269. Thanks @wherewolf87 and @bottenbenny and @Alfred-claw28.",
        "href": "https://github.com/openclaw/openclaw/issues/89347"
      },
      {
        "title": "**PR #89336** Fix private llm-core leaks in plugin SDK declarations",
        "description": "**PR #89336** Fix private llm-core leaks in plugin SDK declarations. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89336"
      },
      {
        "title": "**PR #89015** fix(qqbot)",
        "description": "allow RFC2544 benchmark range for token fetch (#88984). Thanks @sliverp and @Jensenwgd.",
        "href": "https://github.com/openclaw/openclaw/pull/88984"
      },
      {
        "title": "**PR #89046** feat(android)",
        "description": "add installed apps node command. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/89046"
      },
      {
        "title": "**PR #88315** feat(agents)",
        "description": "generalized native compaction ownership for CLI backends. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/88315"
      },
      {
        "title": "**PR #89075** fix(memory-core)",
        "description": "keep startup cron retries quiet. Related #75889. Thanks @Takhoffman and @bennewell35 and @highfly-hi.",
        "href": "https://github.com/openclaw/openclaw/issues/89075"
      },
      {
        "title": "**PR #89049** fix(idle-timeout)",
        "description": "honor provider timeout for no-timeout runs. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/89049"
      },
      {
        "title": "**PR #89047** fix",
        "description": "hide sessions_spawn timeout overrides. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/89047"
      },
      {
        "title": "**PR #89036** fix(cron)",
        "description": "reject blank delivery targets. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/89036"
      },
      {
        "title": "**PR #89354** fix",
        "description": "redact trajectory exports consistently. Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/issues/89354"
      },
      {
        "title": "**PR #88101** fix(codex)",
        "description": "trace app-server thread lifecycle timing. Related #84640. Thanks @ai-hpc and @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/issues/88101"
      },
      {
        "title": "**PR #89243** fix",
        "description": "guard in-band macOS LaunchAgent stop. Related #89174. Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/issues/89243"
      },
      {
        "title": "**PR #87339** fix(discord)",
        "description": "accumulate reasoning progress deltas. Related #83983. Thanks @giodl73-repo and @xueqingli1.",
        "href": "https://github.com/openclaw/openclaw/issues/87339"
      },
      {
        "title": "**PR #89298** fix(diagnostics)",
        "description": "re-queue pending messages after stuck-session recovery aborts ghost run. Related #89208. Thanks @LiLan0125 and @ketos-jona.",
        "href": "https://github.com/openclaw/openclaw/issues/89298"
      },
      {
        "title": "**PR #88821** trace",
        "description": "Correlate channel message diagnostics into one trace. Related #88811. Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/issues/88821"
      },
      {
        "title": "**PR #89411** fix",
        "description": "detect shrinkwrapped npm installs. Related #87732. Thanks @jasonftl.",
        "href": "https://github.com/openclaw/openclaw/issues/89411"
      },
      {
        "title": "**PR #87749** fix(messages)",
        "description": "preserve inbound audio for message-tool TTS. Related #87708. Thanks @ai-hpc and @nikodim-ai.",
        "href": "https://github.com/openclaw/openclaw/issues/87749"
      },
      {
        "title": "**PR #84431** Treat soft plugin repair warnings as nonfatal",
        "description": "**PR #84431** Treat soft plugin repair warnings as nonfatal. Related #83889. Thanks @TurboTheTurtle and @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/issues/84431"
      },
      {
        "title": "**PR #78005** feat(status)",
        "description": "detect externalized plugin version drift in --deep. Thanks @hussein1362.",
        "href": "https://github.com/openclaw/openclaw/issues/78005"
      },
      {
        "title": "**PR #89050** fix(sessions)",
        "description": "preserve corrupt-header transcripts. Related #89037. Thanks @charles-openclaw and @yetval.",
        "href": "https://github.com/openclaw/openclaw/issues/89050"
      },
      {
        "title": "**PR #84314** fix",
        "description": "QQBot credential backups bypass gateway state isolation. Related #84313. Thanks @coygeek.",
        "href": "https://github.com/openclaw/openclaw/issues/84314"
      },
      {
        "title": "**PR #89281** fix",
        "description": "repeat doctor state migration repairs. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89281"
      },
      {
        "title": "**PR #87952** fix(update)",
        "description": "pin post-core plugin compatibility to the downgraded core version (#87914). Thanks @MukundaKatta and @giodl73-repo and @Niriakot.",
        "href": "https://github.com/openclaw/openclaw/pull/87914"
      },
      {
        "title": "**PR #89417** refactor",
        "description": "tighten agent harness surfaces.",
        "href": "https://github.com/openclaw/openclaw/issues/89417"
      },
      {
        "title": "**PR #89400** fix(google)",
        "description": "add missing gemini-3.1-flash-lite to google-vertex catalog. Related #89390. Thanks @xzh-xydt and @nyuDSA.",
        "href": "https://github.com/openclaw/openclaw/issues/89400"
      },
      {
        "title": "**PR #88699** fix(codex)",
        "description": "clear stale context-engine projection after overflow retry. Related #88355. Thanks @SebTardif and @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/88699"
      },
      {
        "title": "**PR #89379** fix(providers)",
        "description": "use native reasoning mode for Gemini instead of tagged. Related #69220. Thanks @849261680 and @mrbrl.",
        "href": "https://github.com/openclaw/openclaw/issues/89379"
      },
      {
        "title": "**PR #84266** Surface unresolved OAuth sidecar auth failures",
        "description": "**PR #84266** Surface unresolved OAuth sidecar auth failures. Related #84252. Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/84266"
      },
      {
        "title": "**PR #88879** feat(plugin-sdk)",
        "description": "add resolve_exec_env hook. Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/issues/88879"
      },
      {
        "title": "**PR #89432** fix(qqbot)",
        "description": "migrate state stores to sqlite kv.",
        "href": "https://github.com/openclaw/openclaw/issues/89432"
      },
      {
        "title": "**PR #89436** fix(llm)",
        "description": "gate OpenAI-compatible reasoning output. Thanks @zz327455573.",
        "href": "https://github.com/openclaw/openclaw/issues/89436"
      },
      {
        "title": "**PR #87703** fix(agents)",
        "description": "run before_agent_finalize for embedded agents. Related #87585. Thanks @ai-hpc and @lileilei-camera.",
        "href": "https://github.com/openclaw/openclaw/issues/87703"
      },
      {
        "title": "**PR #89440** fix(llm)",
        "description": "keep OpenAI-compatible reasoning streams active. Related #84384. Thanks @teknolojay.",
        "href": "https://github.com/openclaw/openclaw/issues/89440"
      },
      {
        "title": "**PR #88976** fix(mistral)",
        "description": "enable prompt cache key compat. Related #83709. Thanks @Alix-007 and @Net-Sentinel.",
        "href": "https://github.com/openclaw/openclaw/issues/88976"
      },
      {
        "title": "**PR #87379** fix",
        "description": "audit and repair hooks token reuse with Gateway auth. Related #87376. Thanks @coygeek.",
        "href": "https://github.com/openclaw/openclaw/issues/87379"
      },
      {
        "title": "**PR #89701** fix(exec)",
        "description": "reject corrupt shell snapshots. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89701"
      },
      {
        "title": "**PR #89601** fix(outbound)",
        "description": "stop schema-padded poll modifiers from blocking send. Thanks @codezz and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/89601"
      },
      {
        "title": "**PR #89731** fix",
        "description": "backport gateway health credential handling. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/89731"
      },
      {
        "title": "**PR #87484** fix(agents)",
        "description": "clear legacy auto fallback pins. Related #87467. Thanks @neeravmakwana and @bgmbgm94.",
        "href": "https://github.com/openclaw/openclaw/issues/87484"
      },
      {
        "title": "**PR #88182** Fix subagent DM completion delivery after yield",
        "description": "**PR #88182** Fix subagent DM completion delivery after yield. Related #88042. Thanks @joshavant and @ksiyuna-claw.",
        "href": "https://github.com/openclaw/openclaw/issues/88182"
      },
      {
        "title": "**PR #88183** fix(whatsapp)",
        "description": "retry QR login 408 timeouts. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/88183"
      },
      {
        "title": "**PR #88866** Persist Discord thread bindings in SQLite",
        "description": "**PR #88866** Persist Discord thread bindings in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88866"
      },
      {
        "title": "**PR #88231** fix(ios)",
        "description": "guard websocket ping continuation. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88231"
      },
      {
        "title": "**PR #88952** perf(ui)",
        "description": "cache chat transcript renders. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88952"
      },
      {
        "title": "**PR #88960** perf(ui)",
        "description": "record pending send paint timing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88960"
      },
      {
        "title": "**PR #79173** fix",
        "description": "skip disabled skill snapshot env overrides. Related #79072. Thanks @zeus1959 and @maverikva.",
        "href": "https://github.com/openclaw/openclaw/issues/79173"
      },
      {
        "title": "**PR #82326** Add plugin manifest contract for SecretRef provider integrations",
        "description": "**PR #82326** Add plugin manifest contract for SecretRef provider integrations. Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/82326"
      },
      {
        "title": "**PR #87469** feat",
        "description": "add core session goals.",
        "href": "https://github.com/openclaw/openclaw/issues/87469"
      },
      {
        "title": "**PR #88794** Persist plugin install index in SQLite",
        "description": "**PR #88794** Persist plugin install index in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88794"
      },
      {
        "title": "**PR #88512** fix",
        "description": "resolve google provider default API to google-generative-ai. Related #88480. Thanks @1052326311 and @azgardtek.",
        "href": "https://github.com/openclaw/openclaw/issues/88512"
      },
      {
        "title": "**PR #88781** fix(models)",
        "description": "strip remaining provider self prefixes. Related #88770. Thanks @charles-openclaw and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/issues/88781"
      },
      {
        "title": "**PR #88096** feat(ios)",
        "description": "default to hosted push relay. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88096"
      },
      {
        "title": "**PR #88105** feat(ios)",
        "description": "add talk tab realtime playback. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88105"
      },
      {
        "title": "**PR #88043** feat",
        "description": "add internal code mode namespaces.",
        "href": "https://github.com/openclaw/openclaw/issues/88043"
      },
      {
        "title": "**PR #78748** fix(ui)",
        "description": "add agent selector to dreaming tab. Related #63558. Thanks @stevenepalmer and @ttomiczek.",
        "href": "https://github.com/openclaw/openclaw/issues/78748"
      },
      {
        "title": "**PR #88772** feat",
        "description": "calm composer controls.",
        "href": "https://github.com/openclaw/openclaw/issues/88772"
      },
      {
        "title": "**PR #88721** feat(plugin-sdk)",
        "description": "add typed presentation command actions.",
        "href": "https://github.com/openclaw/openclaw/issues/88721"
      },
      {
        "title": "**PR #88860** feat(minimax)",
        "description": "add MiniMax M3 support.",
        "href": "https://github.com/openclaw/openclaw/issues/88860"
      },
      {
        "title": "**PR #79658** Allow validated TXT/JSON/YAML media sends",
        "description": "**PR #79658** Allow validated TXT/JSON/YAML media sends. Thanks @simplyclever914.",
        "href": "https://github.com/openclaw/openclaw/issues/79658"
      },
      {
        "title": "**PR #88797** Migrate iMessage monitor state to SQLite",
        "description": "**PR #88797** Migrate iMessage monitor state to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88797"
      },
      {
        "title": "**PR #88724** fix",
        "description": "persist ACP metadata in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88724"
      },
      {
        "title": "**PR #88730** fix(codex)",
        "description": "stream final answer partials. Related #88405. Thanks @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/issues/88730"
      },
      {
        "title": "**PR #88314** fix #76284",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents. Thanks @zhangguiping-xydt and @RicardoUKMX.",
        "href": "https://github.com/openclaw/openclaw/issues/88314"
      },
      {
        "title": "**PR #88896** fix",
        "description": "harden CLI and plugin edge cases.",
        "href": "https://github.com/openclaw/openclaw/issues/88896"
      },
      {
        "title": "**PR #88764** fix(update)",
        "description": "recognize manual-update launchd jobs. Related #88736. Thanks @TurboTheTurtle and @deonkretch.",
        "href": "https://github.com/openclaw/openclaw/issues/88764"
      },
      {
        "title": "**PR #77237** Preserve managed npm plugin root when install validation bloc...",
        "description": "**PR #77237** Preserve managed npm plugin root when install validation blocks update. Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/issues/77237"
      },
      {
        "title": "**PR #88767** fix(plugin-sdk)",
        "description": "isolate provider catalog projection failures. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88767"
      },
      {
        "title": "**PR #88807** fix(plugins)",
        "description": "isolate web provider factory failures. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88807"
      },
      {
        "title": "**PR #88285** Move cron persistence to SQLite",
        "description": "**PR #88285** Move cron persistence to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88285"
      },
      {
        "title": "**PR #88294** fix(cron)",
        "description": "include job name when reading single-job run history. Thanks @kip-claw.",
        "href": "https://github.com/openclaw/openclaw/issues/88294"
      },
      {
        "title": "**PR #85931** fix(memory)",
        "description": "serialize qmd update writes across processes to stop SQLITE_BUSY. Related #66339. Thanks @openperf and @SakenW.",
        "href": "https://github.com/openclaw/openclaw/issues/85931"
      },
      {
        "title": "**PR #88129** fix",
        "description": "keep live OpenClaw session locks during cleanup.",
        "href": "https://github.com/openclaw/openclaw/issues/88129"
      },
      {
        "title": "**PR #88136** fix(agents)",
        "description": "centralize terminal run outcome precedence. Related #87444. Thanks @ssdatye.",
        "href": "https://github.com/openclaw/openclaw/issues/88136"
      },
      {
        "title": "**PR #88141** fix",
        "description": "route generated media completions through requester agent.",
        "href": "https://github.com/openclaw/openclaw/issues/88141"
      },
      {
        "title": "**PR #88162** fix(agents)",
        "description": "extend terminal outcome projections.",
        "href": "https://github.com/openclaw/openclaw/issues/88162"
      },
      {
        "title": "**PR #88229** fix(agents)",
        "description": "normalize sessions_send message aliases. Related #88146. Thanks @zhangguiping-xydt and @jsonmez.",
        "href": "https://github.com/openclaw/openclaw/issues/88229"
      },
      {
        "title": "**PR #74715** fix(ui)",
        "description": "show Communication Notifications tab. Thanks @VladyslavLevchuk.",
        "href": "https://github.com/openclaw/openclaw/issues/74715"
      },
      {
        "title": "**PR #87896** fix(feishu)",
        "description": "fallback when accepted turns send no visible reply. Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/issues/87896"
      },
      {
        "title": "**PR #88749** fix(channels)",
        "description": "recover failed progress draft starts. Related #83115. Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/issues/88749"
      },
      {
        "title": "**PR #88803** fix(reply)",
        "description": "preserve sessions_send external routes. Related #88044. Thanks @MonkeyLeeT and @Lvan185.",
        "href": "https://github.com/openclaw/openclaw/issues/88803"
      },
      {
        "title": "**PR #88820** fix(diagnostics)",
        "description": "clear embedded-run activity when recovery declares lane idle. Related #88660. Thanks @openperf and @Iman-Sharif.",
        "href": "https://github.com/openclaw/openclaw/issues/88820"
      },
      {
        "title": "**PR #88288** fix(config)",
        "description": "skip state-dir dotenv values that are unresolved shell references. Related #88274. Thanks @Alix-007 and @mathias15010.",
        "href": "https://github.com/openclaw/openclaw/issues/88288"
      },
      {
        "title": "**PR #88305** fix(browser)",
        "description": "isolate Chrome MCP pending attach aborts. Related #88304. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/88305"
      },
      {
        "title": "**PR #74089** fix(openai/tts)",
        "description": "handle [[tts:speed]] directive in OpenAI speech provider (#12163). Thanks @stainlu and @useramuser.",
        "href": "https://github.com/openclaw/openclaw/pull/12163"
      }
    ],
    "fixes": [
      "Build: render independent CLI startup metadata help snapshots concurrently to cut cold build-all metadata time.",
      "Plugins: stop timed-out package-boundary prep steps by process group so descendant TypeScript/helper processes do not survive local check cleanup. Thanks @vincentkoc.",
      "Control UI: serve static assets asynchronously after safe-open checks so large UI files do not block Gateway request handling. Thanks @vincentkoc.",
      "Scripts/UI: forward direct wrapper SIGHUP shutdown to child processes so terminal hangups do not leave wrapped dev commands running. Thanks @vincentkoc.",
      "Gateway: return the post-expiration pending-work revision from node drains so reconnecting nodes do not observe stale queue revisions after expired items are pruned. Thanks @vincentkoc.",
      "Update: keep core updates nonblocking when missing external plugin repair downloads or soft plugin repair warnings would otherwise stall, pin post-core plugin compatibility to the downgraded core version, and still block installed active plugin payload smoke failures. (#84431, #87914, #87952) Thanks @TurboTheTurtle, @Niriakot, @MukundaKatta, @giodl73-repo, @vincentkoc, and @davinci282828.",
      "Agents/providers: keep streaming tool-call argument parsing record-shaped when providers emit valid non-object JSON such as `null` or arrays. Thanks @vincentkoc.",
      "Talk: preserve explicit `null` payloads on controller-created turn and output-audio lifecycle events. Thanks @vincentkoc.",
      "Agents/TUI: keep local custom provider runs from loading plugin runtime and auth alias metadata when plugins are disabled.",
      "Agents/TUI: restore in-flight TUI run switch-back behavior, keep no-policy native hook fallback available, guard vanished workspaces, and keep lightweight isolated subagents lightweight.",
      "Agents/media: keep async image, music, and video generation starts from ending the Codex turn, avoid duplicate generated-media fallbacks, and let mixed requests continue with summaries or other work while media renders in the background. (#89220) Thanks @omarshahine.",
      "Agents/Codex: keep public OpenAI API-key profiles from being treated as native Codex app-server auth while preserving persisted Codex OAuth sessions. Thanks @vincentkoc.",
      "Agents/Codex: stream Codex app-server final-answer partials to live reply previews, preserve ACP metadata in SQLite, prefer real tool results over synthetic repair output, prevent aborted app-server turn handles from lingering, migrate legacy OpenAI Codex `lastGood` auth state, and preserve workspace/session metadata through ACP runtime refactors. (#88405, #88724, #88730) Thanks @vincentkoc and @crash2kx.",
      "Control UI: keep collapsed tool cards labeled with the tool name and action instead of generic output text. Thanks @shakkernerd and @vincentkoc.",
      "Agents/Codex: surface Skill Workshop guidance in Codex app-server prompts when `skill_workshop` is available. Thanks @shakkernerd and @vincentkoc.",
      "Skill Workshop: restore and localize the Control UI board/today view switcher so review workflows keep their intended layout toggle across locales. Thanks @shakkernerd and @vincentkoc.",
      "Agents/auth: write auth profiles atomically, dispatch auth failures by type, add force re-login and exhausted-failover recovery, clear legacy auto fallback pins, preserve workspaces during state-only uninstall, and compact before oversized turns so recovery paths avoid partial state. (#85798, #87484, #89181) Thanks @RomneyDa, @neeravmakwana, @vincentkoc, and @bgmbgm94.",
      "Skills: skip disabled skill env overrides from stale persisted snapshots so disabled skill `apiKey` SecretRefs cannot abort embedded or channel turns. (#79072, #79173) Thanks @zeus1959, @maverikva, and @shakkernerd.",
      "Skill Workshop: render the Control UI tab from filtered navigation state and keep filtered fallback routing stable. Thanks @vincentkoc and @shakkernerd.",
      "CLI: avoid live catalog validation during `openclaw agents add`, so adding a secondary agent no longer depends on provider catalog availability. (#76284, #88314) Thanks @zhangguiping-xydt and @RicardoUKMX.",
      "CLI: harden CLI and plugin edge cases, and keep `plugins list --json` on the snapshot-only path so plugin sweeps avoid loading the full runtime status graph. (#88896) Thanks @vincentkoc.",
      "CLI/desktop: bridge WSL clipboard operations through the shell, recognize manual-update launchd jobs, and keep machine-readable startup output parseable during progress setup. (#88764, #88689) Thanks @alexzhu0, @TurboTheTurtle, @toruvieI, and @deonkretch.",
      "Plugins: make PixVerse external-plugin ClawHub metadata explicit and keep it out of bundled dist builds. Thanks @vincentkoc.",
      "Plugins: clarify plugin loader failure guidance and treat soft plugin repair warnings as nonfatal so missing or incompatible plugin packages point operators at the right repair path without blocking unrelated work. (#84431) Thanks @TurboTheTurtle and @davinci282828.",
      "Plugins: preserve npm plugin roots after blocked installs, skip plugin-local `openclaw` peer symlinks during rollback snapshots, relink those peers after restore, isolate cached tool runtime siblings, isolate provider catalog projections and web-provider factory failures, and keep private LLM-core declarations bundled so one bad plugin does not poison sibling runtime paths. (#77237, #88767, #88807, #89336) Thanks @vincentkoc, @RomneyDa, and @zhuisDEV.",
      "Cron: keep SQLite cron migrations compatible with legacy run-log tables, archived job stores, diagnostic cron names, single-job run-history names, startup cron retries, and legacy one-shot delete-after-run behavior. (#88285, #88294, #89075) Thanks @kip-claw, @Takhoffman, @bennewell35, and @highfly-hi.",
      "Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup. Thanks @vincentkoc.",
      "Auto-reply: guard dispatcher failure-count probes so missing optional counters do not break SDK-typed recovery paths. (#89318) Thanks @Alix-007, @takhoffman, and @Bigzhangbig.",
      "Memory: serialize QMD update/embed writes per store, reduce Linux watcher fan-out, avoid noisy gateway watcher warnings, retry transient FileProvider-backed reads, preserve phase signals on read errors, harden envelope metadata sanitization, reattach Linux native watchers when directories are recreated, and rewrite generated transcript paths on rollover so memory/search state survives concurrent gateway and CLI activity. (#66339, #85931, #89185, #89188, #89246, #85351) Thanks @openperf, @amittell, @RomneyDa, @NianJiuZst, @SakenW, @vincentkoc, @chrisabad, and @richardmqq.",
      "Memory: keep vector-disabled FTS indexes from resolving embedding providers during sync and search. Thanks @vincentkoc.",
      "Providers: bound generated media downloads from OpenAI, Runway, xAI, MiniMax, BytePlus, DashScope-compatible, FAL, OpenRouter, Google, Vydra, and Comfy providers. Thanks @vincentkoc.",
      "Providers: resolve Google defaults to `google-generative-ai`, register Vertex static catalog rows and `gemini-3.1-flash-lite`, align Foundry reasoning metadata, skip DeepSeek V4 thinking params on Foundry fallback, use MiniMax account OAuth endpoints, preserve Copilot Claude 1M capabilities, suppress disabled Ollama reasoning output, forward Gemini stop sequences, switch direct Gemini reasoning to native mode, strip provider self-prefixes and Kimi-incompatible Anthropic cache markers, keep OpenAI stop-finished tool calls, and avoid replay ids when the Responses store is disabled. (#88480, #88512, #88781, #89343, #89379, #89400, #76612) Thanks @coder999999999, @BryanTegomoh, @vliuyt, @charles-openclaw, @zz327455573, @849261680, @XuZehan-iCenter, @azgardtek, @1052326311, @google, @mrbrl, @xzh-xydt, @nyuDSA, @vincentkoc, and @cjalden.",
      "Providers: cap GitHub Copilot OAuth request timeouts before creating abort signals.",
      "Cron: retry recurring jobs after transient model rate limits before waiting for the next scheduled slot.",
      "Agents/Codex: keep live session locks during cleanup, recover interrupted CLI tool transcripts, preserve Codex auth and compaction session identity, clear orphan tool state, cap app-server idle timers, and keep media completion delivery retryable. (#88129, #88136, #88141, #88162, #88182) Thanks @joshavant, @vincentkoc, @ssdatye, and @ksiyuna-claw.",
      "Chat/UI: show Gateway chat failures as visible assistant messages in the Control UI instead of only setting an invisible error state. Thanks @vincentkoc.",
      "Channels: cap Telegram, Discord, WhatsApp, Signal, Feishu, Google Chat, Microsoft Teams, QQBot, Nostr, Zalo, Zalouser, and Nextcloud-style request/retry timers; preserve SMS approval reply routes; keep iMessage typing active during tool work; allow RFC2544 benchmark ranges for QQBot token fetches; and retry WhatsApp QR login 408 timeouts. (#88183, #88948, #88984, #89015) Thanks @omarshahine, @Jensenwgd, @sliverp, @mcaxtr, @vincentkoc, and @alfredjbclaw.",
      "Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, corrupt shell snapshots, untrusted workspace setup-only channel loads, remote media reference overreads, trajectory export leaks, hooks-token auth reuse, and gateway WebSocket calls after close. (#86953, #87376, #88974, #89354, #89701) Thanks @hxy91819, @coygeek, @pgondhi987, @RomneyDa, @SebTardif, and @vincentkoc.",
      "Providers/media: cap local service, model, usage, queue, generated media, TTS, music, workflow polling, and provider OAuth request timers across hosted and local providers.",
      "Backup: accept root-relative hardlink targets during backup verification. (#89328) Thanks @abnershang.",
      "Agents: keep configured fallback model metadata typed so provider params, context-token caps, and media input limits do not break changed-gate typechecks.",
      "Agents: accept hidden `sessions_send` body aliases before validation while keeping the model-facing `message` schema canonical. (#88229) Thanks @zhangguiping-xydt and @jsonmez.",
      "Chat/UI: preserve startup chat sends during history loading, unblock the initial Control UI chat send, stream chat deltas incrementally, skip markdown parsing while streaming, keep drafts local while typing, guard composer rerenders, cache chat transcript renders, record pending-send paint timing, show the Communication Notifications tab, and honor Chromium executable overrides. (#74715, #88952, #88960, #88998) Thanks @VladyslavLevchuk and @vincentkoc.",
      "Channels: stop schema-padded poll modifiers from turning normal `send` actions into invalid poll sends. (#89601) Thanks @codezz and @takhoffman.",
      "Channels: preserve long Feishu streaming replies, recover failed progress draft starts, send visible fallbacks when accepted Feishu turns produce no final reply, preserve external `sessions_send` routes, persist Discord thread bindings in SQLite, tolerate iMessage self-chat timestamp skew, preserve colon-prefixed slash commands in mention parsing, decode Nostr `npub` allowlists correctly, and suppress raw provider errors during channel delivery. (#87896, #88749, #88803, #88866) Thanks @MonkeyLeeT, @ArthurNie, @vincentkoc, @SebTardif, and @Lvan185.",
      "Config/status/doctor: skip unresolved shell references in state-dir dotenv files, resolve gateway auth secrets during deep status audits, respect explicit PI runtime policy, report runtime tool-schema and gateway health credential errors, clear recovered embedded-run activity, and keep post-upgrade JSON stable. (#88820, #88288, #89731) Thanks @openperf, @RomneyDa, @Alix-007, @vincentkoc, @Iman-Sharif, and @mathias15010.",
      "Gateway/session state: list commands from the Gateway plugin registry, harden MCP loopback tool schemas, hide phantom agent-store rows from `sessions.list`, make task persistence failures explicit, support Tailscale Serve service names, guard Browser/Chrome pending attach aborts, and carry session UUIDs on interactive dispatch events. (#88305) Thanks @rohitjavvadi and @vincentkoc.",
      "Gateway/plugins: narrow plugin lookup memoization to the stable plugin/runtime inputs, avoiding repeated lookup work without mixing disabled or filtered plugin state. Thanks @vincentkoc.",
      "OpenAI/TTS: handle speed directives for OpenAI TTS voices. (#74089) Thanks @stainlu, @useramuser, and @vincentkoc.",
      "Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata.",
      "Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles. Thanks @vincentkoc.",
      "Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs. Thanks @vincentkoc and @shakkernerd."
    ]
  },
  {
    "version": "2026.5.31",
    "date": "2026.5.31",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531",
    "features": [
      {
        "title": "**Faster Control UI chat",
        "description": "** transcript rendering, draft persistence, pending-send paint, scrolling, and first-message work no longer block one another while a conversation is active. (#88952, #88960, #88998) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88952"
      },
      {
        "title": "**More reliable agent recovery",
        "description": "** fallback auth state, legacy Codex app-server auth, stale bootstrap history, and streamed reasoning cleanup recover cleanly instead of carrying stale turn state forward. (#87484, #88924) Thanks @neeravmakwana, @vincentkoc, @bgmbgm94, and @kdonthar.",
        "href": "https://github.com/openclaw/openclaw/issues/87484"
      },
      {
        "title": "**Clearer cron and channel history",
        "description": "** external `sessions_send` routes, single-job history, and channel reply state retain the right destination and job context through restarts. (#88294, #88803) Thanks @kip-claw, @MonkeyLeeT, @vincentkoc, and @Lvan185.",
        "href": "https://github.com/openclaw/openclaw/issues/88294"
      },
      {
        "title": "**Better operator coordination",
        "description": "** core session goals and durable plugin-install state make long-running work easier to inspect and resume after reloads. (#87469, #88794) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87469"
      },
      {
        "title": "**Safer mobile reconnects",
        "description": "** iOS realtime sessions retain their WebSocket continuation instead of failing a healthy Talk connection, with hosted push/realtime paths kept aligned. (#88231) Thanks @ngutman and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88231"
      },
      {
        "title": "Workboard task details, Android notification app selection, and Dreaming ca...",
        "description": "Workboard task details, Android notification app selection, and Dreaming candidate scoring gained broader operator controls.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531"
      },
      {
        "title": "Control UI now streams stable Markdown blocks and records more chat respons...",
        "description": "Control UI now streams stable Markdown blocks and records more chat responsiveness signals to guide first-reply performance work. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531"
      },
      {
        "title": "**PR #87469** feat",
        "description": "add core session goals.",
        "href": "https://github.com/openclaw/openclaw/issues/87469"
      },
      {
        "title": "**PR #88129** fix",
        "description": "keep live OpenClaw session locks during cleanup.",
        "href": "https://github.com/openclaw/openclaw/issues/88129"
      },
      {
        "title": "**PR #88133** Fix heartbeat default run timeout",
        "description": "**PR #88133** Fix heartbeat default run timeout. Related #87438. Thanks @ovrsr.",
        "href": "https://github.com/openclaw/openclaw/issues/88133"
      },
      {
        "title": "**PR #88132** fix",
        "description": "move compaction planning off the event loop. Related #86358. Thanks @Mithril1991.",
        "href": "https://github.com/openclaw/openclaw/issues/88132"
      },
      {
        "title": "**PR #88137** fix ci mainline checks",
        "description": "**PR #88137** fix ci mainline checks. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88137"
      },
      {
        "title": "**PR #88140** perf",
        "description": "centralize skills indexing and visibility. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/88140"
      },
      {
        "title": "**PR #82326** Add plugin manifest contract for SecretRef provider integrations",
        "description": "**PR #82326** Add plugin manifest contract for SecretRef provider integrations. Thanks @sallyom and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/82326"
      },
      {
        "title": "**PR #88141** fix",
        "description": "route generated media completions through requester agent.",
        "href": "https://github.com/openclaw/openclaw/issues/88141"
      },
      {
        "title": "**PR #87770** refactor",
        "description": "share native approval route gates. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/87770"
      },
      {
        "title": "**PR #88156** Refactor SQLite state base and plugin migration",
        "description": "**PR #88156** Refactor SQLite state base and plugin migration.",
        "href": "https://github.com/openclaw/openclaw/issues/88156"
      },
      {
        "title": "**PR #87781** fix(codex)",
        "description": "prevent false completion stalls during native streams. Thanks @keshavbotagent.",
        "href": "https://github.com/openclaw/openclaw/issues/87781"
      },
      {
        "title": "**PR #88136** fix(agents)",
        "description": "centralize terminal run outcome precedence. Related #87444. Thanks @ssdatye.",
        "href": "https://github.com/openclaw/openclaw/issues/88136"
      },
      {
        "title": "**PR #88155** test(infra)",
        "description": "avoid max fake-timer jumps. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88155"
      },
      {
        "title": "**PR #88160** test(unit-fast)",
        "description": "isolate fake-timer files. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88160"
      },
      {
        "title": "**PR #84535** fix(gateway)",
        "description": "resolve message actions against runtime config. Related #84530. Thanks @funmerlin and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/issues/84535"
      },
      {
        "title": "**PR #88107** feat",
        "description": "only include the current changelog section in tarball. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88107"
      },
      {
        "title": "**PR #88130** fix(agents)",
        "description": "preserve Codex auth for compaction fallback. Related #86820. Thanks @kopl-blip.",
        "href": "https://github.com/openclaw/openclaw/issues/88130"
      },
      {
        "title": "**PR #84814** fix(agents)",
        "description": "classify embedded provider business denials for fallback. Related #48680. Thanks @Takhoffman and @yu-xin-c and @lovensky1992-wk.",
        "href": "https://github.com/openclaw/openclaw/issues/84814"
      },
      {
        "title": "**PR #88178** feat(workboard)",
        "description": "add orchestration primitives.",
        "href": "https://github.com/openclaw/openclaw/issues/88178"
      },
      {
        "title": "**PR #88162** fix(agents)",
        "description": "extend terminal outcome projections.",
        "href": "https://github.com/openclaw/openclaw/issues/88162"
      },
      {
        "title": "**PR #88182** Fix subagent DM completion delivery after yield",
        "description": "**PR #88182** Fix subagent DM completion delivery after yield. Related #88042. Thanks @joshavant and @ksiyuna-claw.",
        "href": "https://github.com/openclaw/openclaw/issues/88182"
      },
      {
        "title": "**PR #88191** Fix Codex raw image generation media projection",
        "description": "**PR #88191** Fix Codex raw image generation media projection. Related #87948. Thanks @joshavant and @mazetsoligarh-cell.",
        "href": "https://github.com/openclaw/openclaw/issues/88191"
      },
      {
        "title": "**PR #88134** fix(imessage)",
        "description": "preserve SMS approval reply routes. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/issues/88134"
      },
      {
        "title": "**PR #88161** Fix restart sentinel internal continuations",
        "description": "**PR #88161** Fix restart sentinel internal continuations. Related #87792. Thanks @joshavant and @chrispydizzle.",
        "href": "https://github.com/openclaw/openclaw/issues/88161"
      },
      {
        "title": "**PR #88199** ci",
        "description": "extend platform checkout fetch timeout. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88199"
      },
      {
        "title": "**PR #87796** feat(ci)",
        "description": "autoscrub dependency lockfile-only PR changes. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/87796"
      },
      {
        "title": "**PR #88200** Refactor task state onto shared SQLite",
        "description": "**PR #88200** Refactor task state onto shared SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88200"
      },
      {
        "title": "**PR #88083** fix(agent)",
        "description": "preserve media task success on delivery miss. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/88083"
      },
      {
        "title": "**PR #88127** perf(test)",
        "description": "fix explicit-file Vitest wrapper hangs. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88127"
      },
      {
        "title": "**PR #88183** fix(whatsapp)",
        "description": "retry QR login 408 timeouts. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/issues/88183"
      },
      {
        "title": "**PR #84234** fix(cli-runner)",
        "description": "write-side flush gate + orphan-tool-use invalidator. Thanks @adele-with-a-b.",
        "href": "https://github.com/openclaw/openclaw/issues/84234"
      },
      {
        "title": "**PR #88231** fix(ios)",
        "description": "guard websocket ping continuation. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88231"
      },
      {
        "title": "**PR #88117** refactor",
        "description": "extract LLM core packages.",
        "href": "https://github.com/openclaw/openclaw/issues/88117"
      },
      {
        "title": "**PR #88248** fix",
        "description": "show chat errors as visible messages.",
        "href": "https://github.com/openclaw/openclaw/issues/88248"
      },
      {
        "title": "**PR #88250** refactor(agents)",
        "description": "type media completion delivery misses.",
        "href": "https://github.com/openclaw/openclaw/issues/88250"
      },
      {
        "title": "**PR #88207** Fix Codex native thread overflow rotation",
        "description": "**PR #88207** Fix Codex native thread overflow rotation. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/88207"
      },
      {
        "title": "**PR #88109** refactor",
        "description": "extract media generation core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88109"
      },
      {
        "title": "**PR #88247** feat",
        "description": "add hosted model providers.",
        "href": "https://github.com/openclaw/openclaw/issues/88247"
      },
      {
        "title": "**PR #88259** feat(workboard)",
        "description": "add board ops recovery metadata.",
        "href": "https://github.com/openclaw/openclaw/issues/88259"
      },
      {
        "title": "**PR #87788** fix(codex)",
        "description": "move skills list and memory pointer to collaboration instructions. Thanks @lastguru-net.",
        "href": "https://github.com/openclaw/openclaw/issues/87788"
      },
      {
        "title": "**PR #88262** fix(codex)",
        "description": "stop injecting mirrored history into prompts.",
        "href": "https://github.com/openclaw/openclaw/issues/88262"
      },
      {
        "title": "**PR #88177** fix(codex)",
        "description": "prevent post-tool edit stream timeouts. Thanks @keshavbotagent.",
        "href": "https://github.com/openclaw/openclaw/issues/88177"
      },
      {
        "title": "**PR #88265** refactor",
        "description": "extract markdown core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88265"
      },
      {
        "title": "**PR #88279** refactor",
        "description": "move terminal core into package.",
        "href": "https://github.com/openclaw/openclaw/issues/88279"
      },
      {
        "title": "**PR #86179** feat",
        "description": "Add Xiaomi Token Plan provider support. Related #86169. Thanks @NianJiuZst and @openclaws420.",
        "href": "https://github.com/openclaw/openclaw/issues/86179"
      },
      {
        "title": "**PR #88211** fix(plugins)",
        "description": "resolve ${ENV_VAR} references in plugin config before handoff. Related #88195. Thanks @Marvinthebored and @Peetiegonzalez.",
        "href": "https://github.com/openclaw/openclaw/issues/88211"
      },
      {
        "title": "**PR #88284** fix(agents)",
        "description": "harden autoreview Windows harness. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88284"
      },
      {
        "title": "**PR #88260** Persist subagent registry in SQLite",
        "description": "**PR #88260** Persist subagent registry in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88260"
      },
      {
        "title": "**PR #88217** refactor",
        "description": "unify OpenAI provider identity.",
        "href": "https://github.com/openclaw/openclaw/issues/88217"
      },
      {
        "title": "**PR #88297** refactor",
        "description": "extract media understanding common package.",
        "href": "https://github.com/openclaw/openclaw/issues/88297"
      },
      {
        "title": "**PR #88299** fix(gateway)",
        "description": "recover channels after reload stop timeout. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/88299"
      },
      {
        "title": "**PR #88326** perf(cli)",
        "description": "reduce room-event Claude cache churn. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/88326"
      },
      {
        "title": "**PR #88310** fix(test)",
        "description": "include workflow lint target in routing expectation. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88310"
      },
      {
        "title": "**PR #88225** fix(ui)",
        "description": "stop pulsing completed stream segments. Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/issues/88225"
      },
      {
        "title": "**PR #88298** fix",
        "description": "classify ws pre-handshake close as benign. Related #88257. Thanks @akrimm702 and @survivor998.",
        "href": "https://github.com/openclaw/openclaw/issues/88298"
      },
      {
        "title": "**PR #88338** feat(workboard)",
        "description": "persist orchestration metadata in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/88338"
      },
      {
        "title": "**PR #88266** refactor",
        "description": "extract model catalog core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88266"
      },
      {
        "title": "**PR #88235** feat(ios)",
        "description": "refresh app store metadata. Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/88235"
      },
      {
        "title": "**PR #85258** fix(qqbot)",
        "description": "deliver partial tool progress. Related #66509. Thanks @samzong and @vincentkoc and @gabrielduartesignart.",
        "href": "https://github.com/openclaw/openclaw/issues/85258"
      },
      {
        "title": "**PR #88349** Add per-agent SQLite cache store",
        "description": "**PR #88349** Add per-agent SQLite cache store.",
        "href": "https://github.com/openclaw/openclaw/issues/88349"
      },
      {
        "title": "**PR #88135** fix(codex)",
        "description": "refresh stale managed runtime plugin. Related #87650. Thanks @brokemac79 and @thoth-ctl.",
        "href": "https://github.com/openclaw/openclaw/issues/88135"
      },
      {
        "title": "**PR #68844** fix(outbound)",
        "description": "pack newline-mode paragraphs up to limit. Thanks @kesslerio.",
        "href": "https://github.com/openclaw/openclaw/issues/68844"
      },
      {
        "title": "**PR #88236** fix(plugins)",
        "description": "ignore helper files in extension roots. Related #88198. Thanks @mushuiyu886 and @mmhzlrj.",
        "href": "https://github.com/openclaw/openclaw/issues/88236"
      },
      {
        "title": "**PR #86089** [Fix] Deliver restart recovery replies",
        "description": "**PR #86089** [Fix] Deliver restart recovery replies. Related #69249. Thanks @samzong and @slideshow-dingo.",
        "href": "https://github.com/openclaw/openclaw/issues/86089"
      },
      {
        "title": "**PR #88375** refactor",
        "description": "route model catalog imports to core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88375"
      },
      {
        "title": "**PR #85511** feat(ui)",
        "description": "add collapsible toggle for recent sessions in sidebar. Related #85510. Thanks @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/issues/85511"
      },
      {
        "title": "**PR #80560** fix(tui)",
        "description": "distinguish /new and /reset command descriptions. Related #49517. Thanks @KhanCold and @KaysonYeh.",
        "href": "https://github.com/openclaw/openclaw/issues/80560"
      },
      {
        "title": "**PR #88229** fix(agents)",
        "description": "normalize sessions_send message aliases. Related #88146. Thanks @zhangguiping-xydt and @jsonmez.",
        "href": "https://github.com/openclaw/openclaw/issues/88229"
      },
      {
        "title": "**PR #88387** refactor(matrix)",
        "description": "move ephemeral state to plugin sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/88387"
      },
      {
        "title": "**PR #86755** test(tasks)",
        "description": "cover task domain view mappers. Thanks @leno23.",
        "href": "https://github.com/openclaw/openclaw/issues/86755"
      },
      {
        "title": "**PR #76355** fix(install)",
        "description": "show progress during npm install in non-interactive mode. Related #82305. Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/issues/76355"
      },
      {
        "title": "**PR #77279** fix(media)",
        "description": "dedupe identical path/url in inbound media-note formatter (#47587). Thanks @MoerAI and @yzjJosh.",
        "href": "https://github.com/openclaw/openclaw/pull/47587"
      },
      {
        "title": "**PR #82824** fix(gateway)",
        "description": "explain ignored config-triggered restart when restart command is disabled. Thanks @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/issues/82824"
      },
      {
        "title": "**PR #85979** fix(discord)",
        "description": "omit undefined component registry fields [AI]. Thanks @funmerlin.",
        "href": "https://github.com/openclaw/openclaw/issues/85979"
      },
      {
        "title": "**PR #76091** Fix Discord reply typing lifecycle",
        "description": "**PR #76091** Fix Discord reply typing lifecycle. Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/issues/76091"
      },
      {
        "title": "**PR #88232** fix(models)",
        "description": "prefer exact configured provider refs before aliases. Related #88218. Thanks @stevenepalmer and @herculeanfit1.",
        "href": "https://github.com/openclaw/openclaw/issues/88232"
      },
      {
        "title": "**PR #88276** fix(feishu)",
        "description": "stream plain replies as cards. Thanks @qiangu.",
        "href": "https://github.com/openclaw/openclaw/issues/88276"
      },
      {
        "title": "**PR #80037** Expose resolved subagent model metadata",
        "description": "**PR #80037** Expose resolved subagent model metadata. Thanks @guanbear.",
        "href": "https://github.com/openclaw/openclaw/issues/80037"
      },
      {
        "title": "**PR #78288** Agents/exec",
        "description": "show target node name in exec tool transparency messages. Related #77719. Thanks @JiataiWang and @civiltox.",
        "href": "https://github.com/openclaw/openclaw/issues/78288"
      },
      {
        "title": "**PR #88408** feat",
        "description": "expand workboard orchestration metadata.",
        "href": "https://github.com/openclaw/openclaw/issues/88408"
      },
      {
        "title": "**PR #87920** feat(gateway)",
        "description": "forward OpenAI stop sequences through chat completions. Thanks @Lellansin.",
        "href": "https://github.com/openclaw/openclaw/issues/87920"
      },
      {
        "title": "**PR #87886** fix(skill-creator)",
        "description": "sort files for deterministic .skill package order. Related #37748. Thanks @coder999999999 and @shuofengzhang.",
        "href": "https://github.com/openclaw/openclaw/issues/87886"
      },
      {
        "title": "**PR #88399** Improve MCP operability",
        "description": "**PR #88399** Improve MCP operability.",
        "href": "https://github.com/openclaw/openclaw/issues/88399"
      },
      {
        "title": "**PR #88398** refactor",
        "description": "move model catalog refs into core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88398"
      },
      {
        "title": "**PR #88328** feat",
        "description": "add Skill Workshop and skill research. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/88328"
      },
      {
        "title": "**PR #88271** fix(export-html)",
        "description": "guard msg.content and result.content filter/iteration paths against non-array values. Related #88255. Thanks @Alix-007 and @survivor998.",
        "href": "https://github.com/openclaw/openclaw/issues/88271"
      },
      {
        "title": "**PR #88429** ci",
        "description": "keep harness changes on fast checks.",
        "href": "https://github.com/openclaw/openclaw/issues/88429"
      },
      {
        "title": "**PR #88430** fix(scripts)",
        "description": "quiet minimal runtime asset copies. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88430"
      },
      {
        "title": "**PR #88321** fix(codex)",
        "description": "keep app-server continuation turns alive. Related #88196, #88331. Thanks @abnershang and @aounakram.",
        "href": "https://github.com/openclaw/openclaw/issues/88321"
      },
      {
        "title": "**PR #88435** refactor",
        "description": "move model catalog normalization into core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88435"
      },
      {
        "title": "**PR #88226** fix(llm)",
        "description": "repair \\u escapes that lack four hex digits in streaming JSON. Thanks @coder999999999.",
        "href": "https://github.com/openclaw/openclaw/issues/88226"
      },
      {
        "title": "**PR #88380** fix(ui)",
        "description": "keep chat model selected after session switch. Related #86597. Thanks @brokemac79 and @xuli500177.",
        "href": "https://github.com/openclaw/openclaw/issues/88380"
      },
      {
        "title": "**PR #88285** Move cron persistence to SQLite",
        "description": "**PR #88285** Move cron persistence to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88285"
      },
      {
        "title": "**PR #87915** fix(build)",
        "description": "avoid stale agent-core dts warnings. Thanks @keshavbotagent.",
        "href": "https://github.com/openclaw/openclaw/issues/87915"
      },
      {
        "title": "**PR #68669** fix(agents)",
        "description": "dedupe subagent browser session cleanup wrapper with dispatch flag. Related #68668. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/68669"
      },
      {
        "title": "**PR #88411** refactor(msteams)",
        "description": "persist conversation and poll stores in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/88411"
      },
      {
        "title": "**PR #88303** Skip browser cleanup when browser is disabled",
        "description": "**PR #88303** Skip browser cleanup when browser is disabled. Thanks @poison.",
        "href": "https://github.com/openclaw/openclaw/issues/88303"
      },
      {
        "title": "**PR #88416** Refactor subagent thread binding into core",
        "description": "**PR #88416** Refactor subagent thread binding into core.",
        "href": "https://github.com/openclaw/openclaw/issues/88416"
      },
      {
        "title": "**PR #83956** feat(cli)",
        "description": "add sessions tail progress view. Related #83441. Thanks @spacegeologist and @ndj888.",
        "href": "https://github.com/openclaw/openclaw/issues/83956"
      },
      {
        "title": "**PR #71648** fix(mcp)",
        "description": "bound pendingClaudePermissions / pendingApprovals via TTL sweeper + close clear. Related #71646. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/71648"
      },
      {
        "title": "**PR #88346** refactor",
        "description": "extract web content core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88346"
      },
      {
        "title": "**PR #71280** test(gateway)",
        "description": "avoid brittle shutdown timer assertion. Thanks @hansolo949.",
        "href": "https://github.com/openclaw/openclaw/issues/71280"
      },
      {
        "title": "**PR #80686** fix(agents)",
        "description": "extend session-write-lock payload-less orphan grace from 5s to 30s. Thanks @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/issues/80686"
      },
      {
        "title": "**PR #88067** fix(responses)",
        "description": "drop orphaned assistant msg\\_\\* id when reasoning is dropped (#88019). Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/pull/88019"
      },
      {
        "title": "**PR #88417** [codex] Route denied exec approval followups to sessions",
        "description": "**PR #88417** [codex] Route denied exec approval followups to sessions. Related #88167. Thanks @brokemac79 and @jhartman00.",
        "href": "https://github.com/openclaw/openclaw/issues/88417"
      },
      {
        "title": "**PR #85996** fix #85782",
        "description": "surface terminal TUI lifecycle errors. Thanks @zhangguiping-xydt and @vincentkoc and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/85996"
      },
      {
        "title": "**PR #88445** refactor",
        "description": "source model catalog types from core.",
        "href": "https://github.com/openclaw/openclaw/issues/88445"
      },
      {
        "title": "**PR #88444** Classify release dependency ownership metadata",
        "description": "**PR #88444** Classify release dependency ownership metadata.",
        "href": "https://github.com/openclaw/openclaw/issues/88444"
      },
      {
        "title": "**PR #82415** Fix /acp spawn cwd inheritance for target agent workspaces",
        "description": "**PR #82415** Fix /acp spawn cwd inheritance for target agent workspaces. Thanks @summerview1997.",
        "href": "https://github.com/openclaw/openclaw/issues/82415"
      },
      {
        "title": "**PR #88448** refactor",
        "description": "simplify sqlite cron persistence.",
        "href": "https://github.com/openclaw/openclaw/issues/88448"
      },
      {
        "title": "**PR #88268** fix #88214",
        "description": "[Feature]: Dashboard sidebar Recent sessions should filter by currently selected agent. Thanks @zhangguiping-xydt and @wujitianya.",
        "href": "https://github.com/openclaw/openclaw/issues/88268"
      },
      {
        "title": "**PR #86642** feat",
        "description": "pass structured provider error signals to hooks. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/86642"
      },
      {
        "title": "**PR #63840** fix(slack)",
        "description": "preserve thread context for Agents & Assistants DM root messages. Related #63659. Thanks @zozo123 and @dev-ithitchhiker.",
        "href": "https://github.com/openclaw/openclaw/issues/63840"
      },
      {
        "title": "**PR #86924** fix",
        "description": "scrub serialized tool-call text from replies. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/86924"
      },
      {
        "title": "**PR #87093** fix",
        "description": "promote serialized tool calls via repair package. Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/87093"
      },
      {
        "title": "**PR #88452** chore(release)",
        "description": "update appcast for 2026.5.28.",
        "href": "https://github.com/openclaw/openclaw/issues/88452"
      },
      {
        "title": "**PR #88043** feat",
        "description": "add internal code mode namespaces.",
        "href": "https://github.com/openclaw/openclaw/issues/88043"
      },
      {
        "title": "**PR #78748** fix(ui)",
        "description": "add agent selector to dreaming tab. Related #63558. Thanks @stevenepalmer and @ttomiczek.",
        "href": "https://github.com/openclaw/openclaw/issues/78748"
      },
      {
        "title": "**PR #88455** Refactor cron migrations under doctor",
        "description": "**PR #88455** Refactor cron migrations under doctor.",
        "href": "https://github.com/openclaw/openclaw/issues/88455"
      },
      {
        "title": "**PR #87929** fix(cron)",
        "description": "preserve plugin delivery targets. Related #87905. Thanks @TurboTheTurtle and @xmoxmo.",
        "href": "https://github.com/openclaw/openclaw/issues/87929"
      },
      {
        "title": "**PR #87390** fix(ci)",
        "description": "ignore fenced headings in proof parser. Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/issues/87390"
      },
      {
        "title": "**PR #85248** fix(gateway)",
        "description": "strip spurious tool call blocks when provider signals stop. Related #85161. Thanks @Jerry-Xin and @syncword.",
        "href": "https://github.com/openclaw/openclaw/issues/85248"
      },
      {
        "title": "**PR #83660** fix(browser)",
        "description": "allow upload from inbound media directory. Related #83544. Thanks @spacegeologist and @scorpiord.",
        "href": "https://github.com/openclaw/openclaw/issues/83660"
      },
      {
        "title": "**PR #88467** feat",
        "description": "improve MCP operator workflows.",
        "href": "https://github.com/openclaw/openclaw/issues/88467"
      },
      {
        "title": "**PR #84247** Refactor browser screenshot vision through shared media under...",
        "description": "**PR #84247** Refactor browser screenshot vision through shared media understanding. Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/issues/84247"
      },
      {
        "title": "**PR #88464** Move Workboard to relational SQLite",
        "description": "**PR #88464** Move Workboard to relational SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88464"
      },
      {
        "title": "**PR #88451** refactor",
        "description": "unify OpenAI provider identity.",
        "href": "https://github.com/openclaw/openclaw/issues/88451"
      },
      {
        "title": "**PR #88459** refactor",
        "description": "extract normalization core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88459"
      },
      {
        "title": "**PR #84670** [codex] fix webchat full-message reader for truncated history",
        "description": "**PR #84670** [codex] fix webchat full-message reader for truncated history. Related #84651. Thanks @NianJiuZst and @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/84670"
      },
      {
        "title": "**PR #88462** fix(heartbeat)",
        "description": "advance stale scheduler deferrals. Related #79380. Thanks @jorgemarmor.",
        "href": "https://github.com/openclaw/openclaw/issues/88462"
      },
      {
        "title": "**PR #88461** refactor(cron)",
        "description": "split service timer helpers.",
        "href": "https://github.com/openclaw/openclaw/issues/88461"
      },
      {
        "title": "**PR #88427** fix(auth)",
        "description": "bound inherited oauth expiry.",
        "href": "https://github.com/openclaw/openclaw/issues/88427"
      },
      {
        "title": "**PR #88458** fix",
        "description": "clarify generated media reply prompts.",
        "href": "https://github.com/openclaw/openclaw/issues/88458"
      },
      {
        "title": "**PR #88421** [codex] Fix Telegram DM topic session routing",
        "description": "**PR #88421** [codex] Fix Telegram DM topic session routing. Related #80212. Thanks @brokemac79 and @SergeyKerj.",
        "href": "https://github.com/openclaw/openclaw/issues/88421"
      },
      {
        "title": "**PR #88113** fix(commands)",
        "description": "make /skill load workspace skills. Related #88056. Thanks @MonkeyLeeT and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/88113"
      },
      {
        "title": "**PR #85904** fix(slack)",
        "description": "keep DM thread turns out of active steering. Thanks @guanbear.",
        "href": "https://github.com/openclaw/openclaw/issues/85904"
      },
      {
        "title": "**PR #88395** build(OpenClawKit)",
        "description": "make ElevenLabsKit (talk/TTS) an optional package trait. Thanks @mochiexists and @atlascodesai.",
        "href": "https://github.com/openclaw/openclaw/issues/88395"
      },
      {
        "title": "**PR #88469** refactor(telegram)",
        "description": "persist plugin state in sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/88469"
      },
      {
        "title": "**PR #88406** Fix iMessage startup watch replay",
        "description": "**PR #88406** Fix iMessage startup watch replay. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/88406"
      },
      {
        "title": "**PR #87179** fix(discord)",
        "description": "deliver same-session channel replies. Related #87157. Thanks @stevenepalmer and @neo-jacked-in.",
        "href": "https://github.com/openclaw/openclaw/issues/87179"
      },
      {
        "title": "**PR #88115** docs",
        "description": "remove divider comments.",
        "href": "https://github.com/openclaw/openclaw/issues/88115"
      },
      {
        "title": "**PR #88319** fix(agents)",
        "description": "skip below-target CLI compaction failures. Thanks @frankekn.",
        "href": "https://github.com/openclaw/openclaw/issues/88319"
      },
      {
        "title": "**PR #88552** Remove channel test isolation hack",
        "description": "**PR #88552** Remove channel test isolation hack.",
        "href": "https://github.com/openclaw/openclaw/issues/88552"
      },
      {
        "title": "**PR #86176** Fix Telegram media message edits",
        "description": "**PR #86176** Fix Telegram media message edits. Related #86161. Thanks @TurboTheTurtle and @crowneglobal.",
        "href": "https://github.com/openclaw/openclaw/issues/86176"
      },
      {
        "title": "**PR #88476** feat",
        "description": "add Twilio SMS channel.",
        "href": "https://github.com/openclaw/openclaw/issues/88476"
      },
      {
        "title": "**PR #83992** fix(webchat)",
        "description": "preserve refresh-visible history and composer state. Related #83344. Thanks @spacegeologist and @zachisfine.",
        "href": "https://github.com/openclaw/openclaw/issues/83992"
      },
      {
        "title": "**PR #88496** fix(auto-reply)",
        "description": "redact secrets in config show output. Related #65623. Thanks @jason-allen-oneal and @coygeek.",
        "href": "https://github.com/openclaw/openclaw/issues/88496"
      },
      {
        "title": "**PR #88536** feat",
        "description": "improve MCP operator controls.",
        "href": "https://github.com/openclaw/openclaw/issues/88536"
      },
      {
        "title": "**PR #84290** Doctor",
        "description": "expose UI freshness health findings. Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/84290"
      },
      {
        "title": "**PR #88539** refactor(telegram)",
        "description": "keep topic thread mapping plugin-local.",
        "href": "https://github.com/openclaw/openclaw/issues/88539"
      },
      {
        "title": "**PR #80391** fix(scripts)",
        "description": "timeout crabbox wrapper sanity checks. Thanks @ejames-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/80391"
      },
      {
        "title": "**PR #85990** Prefer Talk source-reply final text",
        "description": "**PR #85990** Prefer Talk source-reply final text. Related #85275. Thanks @TurboTheTurtle and @BsnizND.",
        "href": "https://github.com/openclaw/openclaw/issues/85990"
      },
      {
        "title": "**PR #65914** fix(memory)",
        "description": "respect qmd status timeout and skip checkpoint exports. Thanks @shawnduggan.",
        "href": "https://github.com/openclaw/openclaw/issues/65914"
      },
      {
        "title": "**PR #88555** feat(workboard)",
        "description": "add worker dispatch CLI.",
        "href": "https://github.com/openclaw/openclaw/issues/88555"
      },
      {
        "title": "**PR #88018** fix(infra)",
        "description": "guard against overwriting corrupt target session store during migration. Related #88017. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/88018"
      },
      {
        "title": "**PR #88185** fix(cron)",
        "description": "accept sub-second --at datetimes resolved in a timezone. Thanks @coder999999999.",
        "href": "https://github.com/openclaw/openclaw/issues/88185"
      },
      {
        "title": "**PR #88378** fix(xiaomi)",
        "description": "support MiMo voicedesign TTS. Thanks @GimingRao.",
        "href": "https://github.com/openclaw/openclaw/issues/88378"
      },
      {
        "title": "**PR #70864** feat",
        "description": "add scoped mention pattern policy. Thanks @patrick-slimelab.",
        "href": "https://github.com/openclaw/openclaw/issues/70864"
      },
      {
        "title": "**PR #87998** fix(agents)",
        "description": "route per-turn media task hints below the cache boundary. Related #85203. Thanks @nxmxbbd and @AV500group.",
        "href": "https://github.com/openclaw/openclaw/issues/87998"
      },
      {
        "title": "**PR #75181** test(plugins)",
        "description": "cover Link agent wallet bundle shape. Thanks @stainlu.",
        "href": "https://github.com/openclaw/openclaw/issues/75181"
      },
      {
        "title": "**PR #88347** fix(agents)",
        "description": "strip malformed arg-value suffixes. Related #48780. Thanks @vincentkoc and @koden588-blip.",
        "href": "https://github.com/openclaw/openclaw/issues/88347"
      },
      {
        "title": "**PR #88578** docs",
        "description": "document scoped mention patterns.",
        "href": "https://github.com/openclaw/openclaw/issues/88578"
      },
      {
        "title": "**PR #81808** chore(lint)",
        "description": "enable object-shorthand. Thanks @tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/issues/81808"
      },
      {
        "title": "**PR #70789** fix(ui)",
        "description": "fix tool result pairing for sequential same-name tool calls. Related #70746. Thanks @chinar-amrutkar and @tarvis0523.",
        "href": "https://github.com/openclaw/openclaw/issues/70789"
      },
      {
        "title": "**PR #88011** fix(logging)",
        "description": "align diagnostic recovery in-flight dedup keys. Related #88010. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/88011"
      },
      {
        "title": "**PR #88574** Fix silent internal aborts after tool-use turns",
        "description": "**PR #88574** Fix silent internal aborts after tool-use turns. Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/issues/88574"
      },
      {
        "title": "**PR #82219** fix(codex)",
        "description": "accept first-party OpenAI plugin marketplaces (bundled and primary-runtime). Related #82216. Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/issues/82219"
      },
      {
        "title": "**PR #83719** feat(dreaming)",
        "description": "add report-only shadow trial runner. Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/issues/83719"
      },
      {
        "title": "**PR #87772** fix(reply)",
        "description": "deliver plugin binding replies. Related #87721. Thanks @MonkeyLeeT and @wingleungron.",
        "href": "https://github.com/openclaw/openclaw/issues/87772"
      },
      {
        "title": "**PR #74493** fix(cli)",
        "description": "identity-only auth-epoch hashing for token credentials (#74312). Thanks @stainlu and @aderius.",
        "href": "https://github.com/openclaw/openclaw/pull/74312"
      },
      {
        "title": "**PR #88534** refactor",
        "description": "extract media and ACP core packages.",
        "href": "https://github.com/openclaw/openclaw/issues/88534"
      },
      {
        "title": "**PR #79447** fix(model-auth)",
        "description": "resolve per-entry apiKey profile ID references. Related #67423. Thanks @kinjitakabe and @presidenzo.",
        "href": "https://github.com/openclaw/openclaw/issues/79447"
      },
      {
        "title": "**PR #88577** fix(sms)",
        "description": "diagnose Twilio webhook setup.",
        "href": "https://github.com/openclaw/openclaw/issues/88577"
      },
      {
        "title": "**PR #84628** [AI-assisted] fix(plugins)",
        "description": "scope startup metadata manifest reads. Related #70533. Thanks @IWhatsskill and @jpippo364.",
        "href": "https://github.com/openclaw/openclaw/issues/84628"
      },
      {
        "title": "**PR #88582** Refactor cron SQLite runtime paths",
        "description": "**PR #88582** Refactor cron SQLite runtime paths.",
        "href": "https://github.com/openclaw/openclaw/issues/88582"
      },
      {
        "title": "**PR #88595** perf",
        "description": "speed up chat hydration and add 3D workboard.",
        "href": "https://github.com/openclaw/openclaw/issues/88595"
      },
      {
        "title": "**PR #75005** fix(media)",
        "description": "allow explicit synthetic auth for media providers. Related #74644. Thanks @sqsge and @mozi1924.",
        "href": "https://github.com/openclaw/openclaw/issues/75005"
      },
      {
        "title": "**PR #75128** fix(boot)",
        "description": "wrap BOOT.md in internal-runtime-context, strip from message-tool args (#53732). Thanks @stainlu and @alvaro630.",
        "href": "https://github.com/openclaw/openclaw/pull/53732"
      },
      {
        "title": "**PR #88599** fix(memory)",
        "description": "retry transient embedding failures. Related #44166, #71784. Thanks @MrGeDiao and @kevinheinrichs.",
        "href": "https://github.com/openclaw/openclaw/issues/88599"
      },
      {
        "title": "**PR #88466** fix(gateway)",
        "description": "guide dashboard auth after service repair. Related #88290. Thanks @sallyom and @drarturryzhov-boop.",
        "href": "https://github.com/openclaw/openclaw/issues/88466"
      },
      {
        "title": "**PR #88463** fix(ui)",
        "description": "keep transient chat errors out of page headers. Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/88463"
      },
      {
        "title": "**PR #88474** [AI-assisted] fix(gateway)",
        "description": "avoid restarts for auth cooldown reloads. Related #88443. Thanks @IWhatsskill and @MrMaturin.",
        "href": "https://github.com/openclaw/openclaw/issues/88474"
      },
      {
        "title": "**PR #88603** fix(media)",
        "description": "use typed auth for no-auth media providers. Related #74644. Thanks @mozi1924.",
        "href": "https://github.com/openclaw/openclaw/issues/88603"
      },
      {
        "title": "**PR #88605** refactor",
        "description": "make OpenAI Codex legacy doctor-only.",
        "href": "https://github.com/openclaw/openclaw/issues/88605"
      },
      {
        "title": "**PR #88440** Retry stale CLI sessions inside runner lifecycle",
        "description": "**PR #88440** Retry stale CLI sessions inside runner lifecycle. Related #77089. Thanks @brokemac79 and @clawdbotv2.",
        "href": "https://github.com/openclaw/openclaw/issues/88440"
      },
      {
        "title": "**PR #88393** fix(browser)",
        "description": "document stable tab references. Thanks @FMLS and @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/issues/88393"
      },
      {
        "title": "**PR #88340** fix(agents)",
        "description": "classify expired thinking signatures. Related #88020. Thanks @Takhoffman and @BryanTegomoh and @bryanbaer.",
        "href": "https://github.com/openclaw/openclaw/issues/88340"
      },
      {
        "title": "**PR #88607** fix(devices)",
        "description": "refresh paired device last-seen metadata. Related #81169. Thanks @vyctorbrzezowski and @deminson.",
        "href": "https://github.com/openclaw/openclaw/issues/88607"
      },
      {
        "title": "**PR #88613** fix",
        "description": "queue subagent completion handoffs.",
        "href": "https://github.com/openclaw/openclaw/issues/88613"
      },
      {
        "title": "**PR #88609** refactor",
        "description": "move plugin state stores to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88609"
      },
      {
        "title": "**PR #79363** fix(exec)",
        "description": "allow known safe shell builtins in allowlist mode. Related #46056. Thanks @kinjitakabe and @aukei.",
        "href": "https://github.com/openclaw/openclaw/issues/79363"
      },
      {
        "title": "**PR #88617** fix(agents)",
        "description": "preserve reasoning replay from model metadata. Related #88068. Thanks @syncword.",
        "href": "https://github.com/openclaw/openclaw/issues/88617"
      },
      {
        "title": "**PR #77953** fix(auto-reply)",
        "description": "honor per-model thinking params. Thanks @tynamite.",
        "href": "https://github.com/openclaw/openclaw/issues/77953"
      },
      {
        "title": "**PR #88626** refactor(openai)",
        "description": "confine legacy codex repair to doctor.",
        "href": "https://github.com/openclaw/openclaw/issues/88626"
      },
      {
        "title": "**PR #87887** fix(hooks)",
        "description": "isolate slug-generator failures from shared auth profile (#71709). Thanks @openperf and @nikolaykazakovvs-ux.",
        "href": "https://github.com/openclaw/openclaw/pull/71709"
      },
      {
        "title": "**PR #88281** fix(tasks)",
        "description": "reclaim ACP zombie runs blocking gateway restart. Related #88205. Thanks @openperf and @subaochen.",
        "href": "https://github.com/openclaw/openclaw/issues/88281"
      },
      {
        "title": "**PR #88619** refactor",
        "description": "unify subagent handoffs into agent steering queue.",
        "href": "https://github.com/openclaw/openclaw/issues/88619"
      },
      {
        "title": "**PR #88004** fix(tui)",
        "description": "skip history reload when final event has displayable output. Related #87922. Thanks @SebTardif and @darconadalabarga.",
        "href": "https://github.com/openclaw/openclaw/issues/88004"
      },
      {
        "title": "**PR #87962** fix(webchat)",
        "description": "suppress stale active session row racing a completed turn (#87875). Thanks @MukundaKatta and @TunMax.",
        "href": "https://github.com/openclaw/openclaw/pull/87875"
      },
      {
        "title": "**PR #88050** fix(tui)",
        "description": "use middle truncation for paths and commands in tool display. Related #87936. Thanks @SebTardif and @Joel-Claw.",
        "href": "https://github.com/openclaw/openclaw/issues/88050"
      },
      {
        "title": "**PR #86463** fix(auto-reply)",
        "description": "warn on substantive private message-tool finals. Thanks @yaoyi1222.",
        "href": "https://github.com/openclaw/openclaw/issues/86463"
      },
      {
        "title": "**PR #88554** docs",
        "description": "clarify Android token comments.",
        "href": "https://github.com/openclaw/openclaw/issues/88554"
      },
      {
        "title": "**PR #87959** fix(tui)",
        "description": "preserve pending local runs during session sync. Thanks @nao860226-rgb and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87959"
      },
      {
        "title": "**PR #82224** feat(codex)",
        "description": "add portable Codex command pickers. Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/issues/82224"
      },
      {
        "title": "**PR #88637** chore",
        "description": "bump OpenClaw version to 2026.5.31.",
        "href": "https://github.com/openclaw/openclaw/issues/88637"
      },
      {
        "title": "**PR #88587** fix(agents)",
        "description": "normalize prefixed Anthropic fallback model ids (#88560). Thanks @TurboTheTurtle and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/pull/88560"
      },
      {
        "title": "**PR #88351** fix(doctor)",
        "description": "diagnose malformed provider catalogs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88351"
      },
      {
        "title": "**PR #88618** refactor",
        "description": "expand acp core package.",
        "href": "https://github.com/openclaw/openclaw/issues/88618"
      },
      {
        "title": "**PR #87538** fix(agents)",
        "description": "model-scope cooldown for transport timeout (#87462). Thanks @openperf and @fenglanhua.",
        "href": "https://github.com/openclaw/openclaw/pull/87462"
      },
      {
        "title": "**PR #88623** fix(agents)",
        "description": "release session lock on manual abort. Related #88600. Thanks @williammu.",
        "href": "https://github.com/openclaw/openclaw/issues/88623"
      },
      {
        "title": "**PR #88588** fix(agents)",
        "description": "avoid synthetic tool results during parallel races (#88168). Thanks @TurboTheTurtle and @jhartman00.",
        "href": "https://github.com/openclaw/openclaw/pull/88168"
      },
      {
        "title": "**PR #88636** feat",
        "description": "add MCP code-mode namespace.",
        "href": "https://github.com/openclaw/openclaw/issues/88636"
      },
      {
        "title": "**PR #88558** fix(gateway)",
        "description": "enforce OpenAI tool_choice required/function contracts. Thanks @Lellansin.",
        "href": "https://github.com/openclaw/openclaw/issues/88558"
      },
      {
        "title": "**PR #88628** fix",
        "description": "scope plugin tools and async media starts.",
        "href": "https://github.com/openclaw/openclaw/issues/88628"
      },
      {
        "title": "**PR #84007** fix(agents)",
        "description": "inherit subagent thinking defaults. Related #55790. Thanks @stevenepalmer and @vrurg.",
        "href": "https://github.com/openclaw/openclaw/issues/84007"
      },
      {
        "title": "**PR #81795** Fix Control UI agent thinking defaults",
        "description": "**PR #81795** Fix Control UI agent thinking defaults. Related #81760. Thanks @jbetala7 and @caiming0331.",
        "href": "https://github.com/openclaw/openclaw/issues/81795"
      },
      {
        "title": "**PR #74418** fix(agents)",
        "description": "recognize params.thinking=false and \"disabled\"/\"none\" as thinking=off. Related #74374. Thanks @yelog and @simmssun-hashh.",
        "href": "https://github.com/openclaw/openclaw/issues/74418"
      },
      {
        "title": "**PR #88583** fix(gateway)",
        "description": "reject pre-reset run lifecycle events from clobbering the rotated session row. Related #88538. Thanks @openperf and @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/issues/88583"
      },
      {
        "title": "**PR #88612** fix(models)",
        "description": "keep auth login out of main config. Related #88565. Thanks @corleonexie-maker.",
        "href": "https://github.com/openclaw/openclaw/issues/88612"
      },
      {
        "title": "**PR #88655** fix(gateway)",
        "description": "reject stale lifecycle session updates. Related #88538. Thanks @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/issues/88655"
      },
      {
        "title": "**PR #88658** fix(agents)",
        "description": "report stale session locks without cleanup.",
        "href": "https://github.com/openclaw/openclaw/issues/88658"
      },
      {
        "title": "**PR #88661** ci",
        "description": "stabilize Testbox changed checks.",
        "href": "https://github.com/openclaw/openclaw/issues/88661"
      },
      {
        "title": "**PR #88641** feat",
        "description": "add exec shell snapshot cache.",
        "href": "https://github.com/openclaw/openclaw/issues/88641"
      },
      {
        "title": "**PR #84232** fix(messages)",
        "description": "use best-effort for implicit tool-only source replies. Related #84078. Thanks @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/issues/84232"
      },
      {
        "title": "**PR #88381** fix(agents)",
        "description": "preserve runtime tools in lean mode. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88381"
      },
      {
        "title": "**PR #88527** fix(discord)",
        "description": "ping mention-bearing final replies under live preview (#88360). Thanks @openperf and @hughbeyond.",
        "href": "https://github.com/openclaw/openclaw/pull/88360"
      },
      {
        "title": "**PR #88659** refactor",
        "description": "clean up ACP package metadata and helpers.",
        "href": "https://github.com/openclaw/openclaw/issues/88659"
      },
      {
        "title": "**PR #88652** fix(codex)",
        "description": "restore bounded recovery continuity. Related #88352, #88354. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/88652"
      },
      {
        "title": "**PR #82739** fix(macos)",
        "description": "prevent duplicate menu bar icons. Thanks @afalk42.",
        "href": "https://github.com/openclaw/openclaw/issues/82739"
      },
      {
        "title": "**PR #87975** fix(slack)",
        "description": "avoid forced threads for replyToMode off. Thanks @lawrencetran.",
        "href": "https://github.com/openclaw/openclaw/issues/87975"
      },
      {
        "title": "**PR #86397** fix(discord)",
        "description": "PluralKit DM pairing identity + `direct` peer regex (#86332). Thanks @Sanjays2402.",
        "href": "https://github.com/openclaw/openclaw/pull/86332"
      },
      {
        "title": "**PR #88601** fix(sms)",
        "description": "cover native proof follow-ups. Thanks @clawSean.",
        "href": "https://github.com/openclaw/openclaw/issues/88601"
      },
      {
        "title": "**PR #88670** fix(agents)",
        "description": "retry transient stale session locks.",
        "href": "https://github.com/openclaw/openclaw/issues/88670"
      },
      {
        "title": "**PR #80996** Fix Google Chat message tool thread replies",
        "description": "**PR #80996** Fix Google Chat message tool thread replies. Related #80995. Thanks @franco-viotti.",
        "href": "https://github.com/openclaw/openclaw/issues/80996"
      },
      {
        "title": "**PR #88549** fix(memory-core)",
        "description": "reclaim orphaned dreaming sessions with surviving transcripts. Related #88322. Thanks @Alix-007 and @TheDenStudios.",
        "href": "https://github.com/openclaw/openclaw/issues/88549"
      },
      {
        "title": "**PR #88557** fix(terminal)",
        "description": "clamp wide graphemes in narrow table cells. Related #88556. Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/issues/88557"
      },
      {
        "title": "**PR #87904** fix",
        "description": "route iMessage DM media through attachment handoff. Related #87597. Thanks @HOYALIM and @omarshahine and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/87904"
      },
      {
        "title": "**PR #88547** feat(github-copilot)",
        "description": "add Claude Opus 4.8 to default model catalog. Thanks @saju01.",
        "href": "https://github.com/openclaw/openclaw/issues/88547"
      },
      {
        "title": "**PR #88428** fix(discord)",
        "description": "route thread bindings to plugin owners. Related #64199. Thanks @SYU8384 and @hoh-dev-bot.",
        "href": "https://github.com/openclaw/openclaw/issues/88428"
      },
      {
        "title": "**PR #85612** fix(slack)",
        "description": "keep one draft message in progress mode. Thanks @mycarrysun.",
        "href": "https://github.com/openclaw/openclaw/issues/85612"
      },
      {
        "title": "**PR #88500** fix",
        "description": "release abandoned provider streams. Related #67461. Thanks @samzong and @jakedwyer.",
        "href": "https://github.com/openclaw/openclaw/issues/88500"
      },
      {
        "title": "**PR #85691** fix(doctor)",
        "description": "auto-repair stale session snapshot paths on --fix. Related #85689. Thanks @ggzeng.",
        "href": "https://github.com/openclaw/openclaw/issues/85691"
      },
      {
        "title": "**PR #86737** fix(ios)",
        "description": "subscribe to per-session transcripts so group chats update in real time (#80231). Thanks @yetval and @jm7v7fgpdy-sketch.",
        "href": "https://github.com/openclaw/openclaw/pull/80231"
      },
      {
        "title": "**PR #88642** fix(whatsapp)",
        "description": "suppress spurious typing indicator on silent tool-only runs. Related #450. Thanks @Bluetegu and @thesash.",
        "href": "https://github.com/openclaw/openclaw/issues/88642"
      },
      {
        "title": "**PR #88635** fix(secrets)",
        "description": "treat Codex app-server marker as non-secret. Thanks @vortexopenclaw.",
        "href": "https://github.com/openclaw/openclaw/issues/88635"
      },
      {
        "title": "**PR #88525** feat(deepseek)",
        "description": "show provider balance in usage status. Thanks @litang9.",
        "href": "https://github.com/openclaw/openclaw/issues/88525"
      },
      {
        "title": "**PR #88563** fix(agents)",
        "description": "resolve exact static-catalog models for plugin-harness cold start (#88510). Thanks @yetval and @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/pull/88510"
      },
      {
        "title": "**PR #87818** fix(ollama)",
        "description": "yield during dense stream processing. Thanks @vincentkoc and @udaymanish6.",
        "href": "https://github.com/openclaw/openclaw/issues/87818"
      },
      {
        "title": "**PR #88665** refactor",
        "description": "move delivery queues to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88665"
      },
      {
        "title": "**PR #88676** fix(auto-reply)",
        "description": "add memory flush failure tracking with retry exhaustion. Thanks @Jerry-Xin.",
        "href": "https://github.com/openclaw/openclaw/issues/88676"
      },
      {
        "title": "**PR #88672** fix(plugins)",
        "description": "reuse current metadata snapshot in provider hot paths. Thanks @masatohoshino.",
        "href": "https://github.com/openclaw/openclaw/issues/88672"
      },
      {
        "title": "**PR #88678** feat",
        "description": "add typed MCP code-mode API.",
        "href": "https://github.com/openclaw/openclaw/issues/88678"
      },
      {
        "title": "**PR #77882** fix(feishu)",
        "description": "gate bitable tools by tools config. Thanks @glfruit.",
        "href": "https://github.com/openclaw/openclaw/issues/77882"
      },
      {
        "title": "**PR #59172** fix(cli)",
        "description": "extend holiday tagline dates through 2030. Thanks @alkor2000.",
        "href": "https://github.com/openclaw/openclaw/issues/59172"
      },
      {
        "title": "**PR #88252** fix(agents)",
        "description": "avoid full stream replay on text deltas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88252"
      },
      {
        "title": "**PR #59500** fix",
        "description": "extend CA bundle auto-injection to all 8 Node version managers. Related #59494. Thanks @alkor2000.",
        "href": "https://github.com/openclaw/openclaw/issues/59500"
      },
      {
        "title": "**PR #87855** fix(telegram)",
        "description": "handle ENOENT race in spool drain recovery rename. Related #87847. Thanks @SebTardif and @ppanphper.",
        "href": "https://github.com/openclaw/openclaw/issues/87855"
      },
      {
        "title": "**PR #88677** refactor",
        "description": "clean up ACP translator and manager tests.",
        "href": "https://github.com/openclaw/openclaw/issues/88677"
      },
      {
        "title": "**PR #88715** perf(plugins)",
        "description": "avoid duplicate provider hook load probes.",
        "href": "https://github.com/openclaw/openclaw/issues/88715"
      },
      {
        "title": "**PR #88675** refactor",
        "description": "move plugin state slices to sqlite.",
        "href": "https://github.com/openclaw/openclaw/issues/88675"
      },
      {
        "title": "**PR #88153** fix(agents)",
        "description": "count stream deltas incrementally. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88153"
      },
      {
        "title": "**PR #87698** fix(gateway)",
        "description": "emit subagent_ended hook for api.runtime.subagent.run() (#59164). Thanks @sweetcornna and @Amyssjj.",
        "href": "https://github.com/openclaw/openclaw/pull/59164"
      },
      {
        "title": "**PR #81692** fix(doctor)",
        "description": "detect stale gateway service version metadata. Thanks @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/issues/81692"
      },
      {
        "title": "**PR #87549** fix(agents)",
        "description": "validate context engine assemble result shape. Related #75541. Thanks @Pluviobyte and @tyyim.",
        "href": "https://github.com/openclaw/openclaw/issues/87549"
      },
      {
        "title": "**PR #88720** refactor",
        "description": "extract ACP translator session updates.",
        "href": "https://github.com/openclaw/openclaw/issues/88720"
      },
      {
        "title": "**PR #85666** fix #85124",
        "description": "skip Anthropic API keys for usage status. Thanks @zhangguiping-xydt and @rqlangley.",
        "href": "https://github.com/openclaw/openclaw/issues/85666"
      },
      {
        "title": "**PR #88722** refactor",
        "description": "make Telegram message cache SQLite-only.",
        "href": "https://github.com/openclaw/openclaw/issues/88722"
      },
      {
        "title": "**PR #88724** fix",
        "description": "persist ACP metadata in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88724"
      },
      {
        "title": "**PR #86917** fix(session-store)",
        "description": "rewrite generated transcript paths on rollover. Thanks @Sunjae-k and @sunjae-1.",
        "href": "https://github.com/openclaw/openclaw/issues/86917"
      },
      {
        "title": "**PR #84419** fix(session)",
        "description": "prefer real tool result over synthetic error in transcript repair. Thanks @Jerry-Xin.",
        "href": "https://github.com/openclaw/openclaw/issues/84419"
      },
      {
        "title": "**PR #88725** refactor",
        "description": "extract ACP manager runtime handle cache.",
        "href": "https://github.com/openclaw/openclaw/issues/88725"
      },
      {
        "title": "**PR #88721** feat(plugin-sdk)",
        "description": "add typed presentation command actions.",
        "href": "https://github.com/openclaw/openclaw/issues/88721"
      },
      {
        "title": "**PR #79658** Allow validated TXT/JSON/YAML media sends",
        "description": "**PR #79658** Allow validated TXT/JSON/YAML media sends. Thanks @simplyclever914.",
        "href": "https://github.com/openclaw/openclaw/issues/79658"
      },
      {
        "title": "**PR #87618** fix(daemon)",
        "description": "detect system-scope systemd gateway units on Linux (#87577). Thanks @yetval and @fisherman86-ai.",
        "href": "https://github.com/openclaw/openclaw/pull/87577"
      },
      {
        "title": "**PR #84988** Refresh Node Docker base image digests",
        "description": "**PR #84988** Refresh Node Docker base image digests. Related #84981. Thanks @LibraHo.",
        "href": "https://github.com/openclaw/openclaw/issues/84988"
      },
      {
        "title": "**PR #85931** fix(memory)",
        "description": "serialize qmd update writes across processes to stop SQLITE_BUSY. Related #66339. Thanks @openperf and @SakenW.",
        "href": "https://github.com/openclaw/openclaw/issues/85931"
      },
      {
        "title": "**PR #78793** fix(approvals)",
        "description": "interpolate request id into \"Reply with:\" line. Thanks @itsuzef.",
        "href": "https://github.com/openclaw/openclaw/issues/78793"
      },
      {
        "title": "**PR #88730** fix(codex)",
        "description": "stream final answer partials. Related #88405. Thanks @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/issues/88730"
      },
      {
        "title": "**PR #80801** fix(auth)",
        "description": "force re-login flag, remediation hint, and session-scoped fallback skip cache. Thanks @MertBasar0.",
        "href": "https://github.com/openclaw/openclaw/issues/80801"
      },
      {
        "title": "**PR #88729** refactor",
        "description": "extract ACP runtime handle ensure flow.",
        "href": "https://github.com/openclaw/openclaw/issues/88729"
      },
      {
        "title": "**PR #79040** fix(gateway)",
        "description": "guard buildGroupDisplayName behind group/channel chatType. Related #55354. Thanks @sebuh-infsol and @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/issues/79040"
      },
      {
        "title": "**PR #77952** fix(discord)",
        "description": "bound REST entity cache to prevent unbounded Map growth. Related #77975. Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/issues/77952"
      },
      {
        "title": "**PR #88733** refactor",
        "description": "extract ACP runtime resume state.",
        "href": "https://github.com/openclaw/openclaw/issues/88733"
      },
      {
        "title": "**PR #77924** fix(memory-core)",
        "description": "preserve phase signals on read errors. Related #77881. Thanks @bennewell35 and @SimbaKingjoe.",
        "href": "https://github.com/openclaw/openclaw/issues/77924"
      },
      {
        "title": "**PR #88314** fix #76284",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents. Thanks @zhangguiping-xydt and @RicardoUKMX.",
        "href": "https://github.com/openclaw/openclaw/issues/88314"
      },
      {
        "title": "**PR #77394** fix(agents)",
        "description": "sanitize raw HTTP 401 provider errors in user-visible replies (#56197). Thanks @jeffrey701 and @lokamir.",
        "href": "https://github.com/openclaw/openclaw/pull/56197"
      },
      {
        "title": "**PR #88739** refactor",
        "description": "extract ACP turn runner.",
        "href": "https://github.com/openclaw/openclaw/issues/88739"
      },
      {
        "title": "**PR #77998** fix(skills)",
        "description": "clear workspaceVersions entry when skills watcher is disabled. Related #77997. Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/issues/77998"
      },
      {
        "title": "**PR #77527** fix(gateway)",
        "description": "rate-limit pre-auth bootstrap-token verify to prevent mutex DoS. Related #77978. Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/issues/77527"
      },
      {
        "title": "**PR #88744** refactor",
        "description": "extract ACP close session flow.",
        "href": "https://github.com/openclaw/openclaw/issues/88744"
      },
      {
        "title": "**PR #88731** refactor",
        "description": "migrate voice-call call logs through doctor.",
        "href": "https://github.com/openclaw/openclaw/issues/88731"
      },
      {
        "title": "**PR #87522** fix",
        "description": "force preflight compaction before oversized agent turns. Related #87234. Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/issues/87522"
      },
      {
        "title": "**PR #75061** fix",
        "description": "preserve workspaces during state-only uninstall. Related #75052. Thanks @Jason-Bai and @XueJourney.",
        "href": "https://github.com/openclaw/openclaw/issues/75061"
      },
      {
        "title": "**PR #79465** Fix ACP command bypass for channel text commands",
        "description": "**PR #79465** Fix ACP command bypass for channel text commands. Thanks @RoeeJ.",
        "href": "https://github.com/openclaw/openclaw/issues/79465"
      },
      {
        "title": "**PR #88747** refactor",
        "description": "extract ACP runtime option commands.",
        "href": "https://github.com/openclaw/openclaw/issues/88747"
      },
      {
        "title": "**PR #74715** fix(ui)",
        "description": "show Communication Notifications tab. Thanks @VladyslavLevchuk.",
        "href": "https://github.com/openclaw/openclaw/issues/74715"
      },
      {
        "title": "**PR #88691** feat(gateway)",
        "description": "support Tailscale Serve service names. Related #88629. Thanks @charles-openclaw and @resYuto.",
        "href": "https://github.com/openclaw/openclaw/issues/88691"
      },
      {
        "title": "**PR #88749** fix(channels)",
        "description": "recover failed progress draft starts. Related #83115. Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/issues/88749"
      },
      {
        "title": "**PR #88029** fix(agents)",
        "description": "atomic auth.json write to prevent credential lockout on crash. Related #88028. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/88029"
      },
      {
        "title": "**PR #85277** fix(openai)",
        "description": "avoid stale Responses message id replay. Thanks @latensified.",
        "href": "https://github.com/openclaw/openclaw/issues/85277"
      },
      {
        "title": "**PR #79173** fix",
        "description": "skip disabled skill snapshot env overrides. Related #79072. Thanks @zeus1959 and @maverikva.",
        "href": "https://github.com/openclaw/openclaw/issues/79173"
      },
      {
        "title": "**PR #88752** refactor",
        "description": "split ACP manager session flows.",
        "href": "https://github.com/openclaw/openclaw/issues/88752"
      },
      {
        "title": "**PR #79149** fix(ci)",
        "description": "guard workflow template injection. Related #68428. Thanks @WT-WSL and @visionik.",
        "href": "https://github.com/openclaw/openclaw/issues/79149"
      },
      {
        "title": "**PR #74089** fix(openai/tts)",
        "description": "handle [[tts:speed]] directive in OpenAI speech provider (#12163). Thanks @stainlu and @useramuser.",
        "href": "https://github.com/openclaw/openclaw/pull/12163"
      },
      {
        "title": "**PR #88763** feat",
        "description": "add code-mode MCP API files.",
        "href": "https://github.com/openclaw/openclaw/issues/88763"
      },
      {
        "title": "**PR #87896** fix(feishu)",
        "description": "fallback when accepted turns send no visible reply. Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/issues/87896"
      },
      {
        "title": "**PR #88761** [codex] Surface disabled Codex plugin routes in doctor lint",
        "description": "**PR #88761** [codex] Surface disabled Codex plugin routes in doctor lint. Related #88751. Thanks @brokemac79 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/issues/88761"
      },
      {
        "title": "**PR #88759** fix",
        "description": "repair providerless Codex session overrides. Thanks @earlvanze.",
        "href": "https://github.com/openclaw/openclaw/issues/88759"
      },
      {
        "title": "**PR #88740** fix(hooks)",
        "description": "pass media metadata to internal message_received hook. Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/issues/88740"
      },
      {
        "title": "**PR #88695** fix(agents)",
        "description": "wait for cron media completions. Related #88001. Thanks @nailujac.",
        "href": "https://github.com/openclaw/openclaw/issues/88695"
      },
      {
        "title": "**PR #88762** fix(ui)",
        "description": "show Workboard comments in edit modal. Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/issues/88762"
      },
      {
        "title": "**PR #88765** fix(agents)",
        "description": "publish owned announcement session writes. Related #88703. Thanks @TurboTheTurtle and @neo-hu.",
        "href": "https://github.com/openclaw/openclaw/issues/88765"
      },
      {
        "title": "**PR #59196** feat(doctor)",
        "description": "add disk space health check for state directory. Thanks @alkor2000.",
        "href": "https://github.com/openclaw/openclaw/issues/59196"
      },
      {
        "title": "**PR #79260** feat(doctor)",
        "description": "add --post-upgrade --json mode for plugin-compat findings. Thanks @arniesaha.",
        "href": "https://github.com/openclaw/openclaw/issues/79260"
      },
      {
        "title": "**PR #88486** fix(diagnostics)",
        "description": "carry session UUID on interactive dispatch events. Thanks @arniesaha.",
        "href": "https://github.com/openclaw/openclaw/issues/88486"
      },
      {
        "title": "**PR #84904** fix",
        "description": "avoid replaying Responses item ids when store is disabled. Thanks @zhanghang02.",
        "href": "https://github.com/openclaw/openclaw/issues/84904"
      },
      {
        "title": "**PR #82828** fix(daemon)",
        "description": "preserve container service env across regen. Thanks @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/issues/82828"
      },
      {
        "title": "**PR #88755** fix(agents)",
        "description": "expose session status route context. Related #84544. Thanks @nxmxbbd and @lykeion-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/88755"
      },
      {
        "title": "**PR #88781** fix(models)",
        "description": "strip remaining provider self prefixes. Related #88770. Thanks @charles-openclaw and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/issues/88781"
      },
      {
        "title": "**PR #88131** fix(logging)",
        "description": "refresh file log hostname per write. Related #87258. Thanks @lonexreb and @mmhzlrj.",
        "href": "https://github.com/openclaw/openclaw/issues/88131"
      },
      {
        "title": "**PR #88667** fix #81214",
        "description": "[Bug]: OpenClaw 2026.5.7 subagent regression. Thanks @zhangguiping-xydt and @GreyWolfRon.",
        "href": "https://github.com/openclaw/openclaw/issues/88667"
      },
      {
        "title": "**PR #88764** fix(update)",
        "description": "recognize manual-update launchd jobs. Related #88736. Thanks @TurboTheTurtle and @deonkretch.",
        "href": "https://github.com/openclaw/openclaw/issues/88764"
      },
      {
        "title": "**PR #88727** fix(feishu)",
        "description": "preserve long streaming replies. Related #88631. Thanks @MonkeyLeeT and @Leorand-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/88727"
      },
      {
        "title": "**PR #88512** fix",
        "description": "resolve google provider default API to google-generative-ai. Related #88480. Thanks @1052326311 and @Xin and @azgardtek.",
        "href": "https://github.com/openclaw/openclaw/issues/88512"
      },
      {
        "title": "**PR #88756** feat",
        "description": "add Skill Workshop Control UI. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/88756"
      },
      {
        "title": "**PR #88610** fix",
        "description": "suppress raw provider errors in channel delivery. Related #69737. Thanks @jason-allen-oneal and @alexisperumal.",
        "href": "https://github.com/openclaw/openclaw/issues/88610"
      },
      {
        "title": "**PR #88808** perf",
        "description": "hydrate chat history session metadata.",
        "href": "https://github.com/openclaw/openclaw/issues/88808"
      },
      {
        "title": "**PR #88735** fix(agents)",
        "description": "harden runtime tool schema quarantine. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88735"
      },
      {
        "title": "**PR #88221** fix(nostr)",
        "description": "decode npub allowFrom entries to hex correctly. Thanks @DocNR and @hypoxicdrive.",
        "href": "https://github.com/openclaw/openclaw/issues/88221"
      },
      {
        "title": "**PR #88772** feat",
        "description": "calm composer controls.",
        "href": "https://github.com/openclaw/openclaw/issues/88772"
      },
      {
        "title": "**PR #88388** fix(agents)",
        "description": "guard transport payload sanitizer against non-string input. Related #60113. Thanks @Pluviobyte and @cursoragent and @wujiaming88.",
        "href": "https://github.com/openclaw/openclaw/issues/88388"
      },
      {
        "title": "**PR #88149** fix(agents)",
        "description": "cap bootstrap snapshot cache. Thanks @yozakura-ava.",
        "href": "https://github.com/openclaw/openclaw/issues/88149"
      },
      {
        "title": "**PR #88545** fix(memory-core)",
        "description": "stop dream diary fallback from leaking raw staging fragments. Related #88391. Thanks @Alix-007 and @Carme99.",
        "href": "https://github.com/openclaw/openclaw/issues/88545"
      },
      {
        "title": "**PR #88289** fix(microsoft-foundry)",
        "description": "skip DeepSeek V4 thinking params on Foundry fallback. Thanks @silvesterxm.",
        "href": "https://github.com/openclaw/openclaw/issues/88289"
      },
      {
        "title": "**PR #88209** fix(subagents)",
        "description": "roll formatTokenShort over to \"m\" at 1000k. Thanks @coder999999999.",
        "href": "https://github.com/openclaw/openclaw/issues/88209"
      },
      {
        "title": "**PR #88008** fix(tasks)",
        "description": "persist task store before in-memory mutation to prevent sqlite divergence. Related #88007. Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/issues/88008"
      },
      {
        "title": "**PR #88306** fix(gateway)",
        "description": "hide phantom agent store rows from sessions.list. Related #57376. Thanks @Alix-007 and @smarchetti.",
        "href": "https://github.com/openclaw/openclaw/issues/88306"
      },
      {
        "title": "**PR #88760** fix(doctor)",
        "description": "report runtime tool schema errors. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88760"
      },
      {
        "title": "**PR #88495** fix(imessage)",
        "description": "tolerate sub-second self-chat reflection skew. Thanks @colmbrogan.",
        "href": "https://github.com/openclaw/openclaw/issues/88495"
      },
      {
        "title": "**PR #88797** Migrate iMessage monitor state to SQLite",
        "description": "**PR #88797** Migrate iMessage monitor state to SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88797"
      },
      {
        "title": "**PR #87981** fix(cron)",
        "description": "retire MCP runtimes on isolated cron timeout and dispose. Related #87821. Thanks @Jerry-Xin and @zachisfine.",
        "href": "https://github.com/openclaw/openclaw/issues/87981"
      },
      {
        "title": "**PR #88410** fix(gateway)",
        "description": "harden MCP loopback tool schemas. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88410"
      },
      {
        "title": "**PR #88100** fix(doctor)",
        "description": "quiet tool policy removal audits. Related #87798. Thanks @giodl73-repo and @oalansilva.",
        "href": "https://github.com/openclaw/openclaw/issues/88100"
      },
      {
        "title": "**PR #88804** fix(agents)",
        "description": "preserve stop-finished OpenAI tool calls. Related #88791. Thanks @MonkeyLeeT and @kiagentkronos-cell.",
        "href": "https://github.com/openclaw/openclaw/issues/88804"
      },
      {
        "title": "**PR #88802** test(agents)",
        "description": "cover nonfatal trajectory flush timeout. Related #88520. Thanks @TurboTheTurtle and @novac42code.",
        "href": "https://github.com/openclaw/openclaw/issues/88802"
      },
      {
        "title": "**PR #88819** fix(workboard)",
        "description": "wire task-backed board runs. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88819"
      },
      {
        "title": "**PR #88608** fix(minimax)",
        "description": "use account OAuth device endpoints. Thanks @MatthewSchleder.",
        "href": "https://github.com/openclaw/openclaw/issues/88608"
      },
      {
        "title": "**PR #88794** Persist plugin install index in SQLite",
        "description": "**PR #88794** Persist plugin install index in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88794"
      },
      {
        "title": "**PR #88827** Add Vertex API key model config regression coverage",
        "description": "**PR #88827** Add Vertex API key model config regression coverage. Related #88816. Thanks @TurboTheTurtle and @randompup.",
        "href": "https://github.com/openclaw/openclaw/issues/88827"
      },
      {
        "title": "**PR #77237** Preserve managed npm plugin root when install validation bloc...",
        "description": "**PR #77237** Preserve managed npm plugin root when install validation blocks update. Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/issues/77237"
      },
      {
        "title": "**PR #88288** fix(config)",
        "description": "skip state-dir dotenv values that are unresolved shell references. Related #88274. Thanks @Alix-007 and @mathias15010.",
        "href": "https://github.com/openclaw/openclaw/issues/88288"
      },
      {
        "title": "**PR #87848** fix(status)",
        "description": "resolve gateway auth secrets for deep audit. Related #87815. Thanks @ai-hpc and @kAIborg24.",
        "href": "https://github.com/openclaw/openclaw/issues/87848"
      },
      {
        "title": "**PR #88807** fix(plugins)",
        "description": "isolate web provider factory failures. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88807"
      },
      {
        "title": "**PR #88518** fix(plugins)",
        "description": "isolate cached tool runtime siblings. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88518"
      },
      {
        "title": "**PR #88851** Persist OpenRouter model cache in SQLite",
        "description": "**PR #88851** Persist OpenRouter model cache in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88851"
      },
      {
        "title": "**PR #88485** fix(agents)",
        "description": "guard vanished workspaces. Related #88333. Thanks @TurboTheTurtle and @HT-Moh.",
        "href": "https://github.com/openclaw/openclaw/issues/88485"
      },
      {
        "title": "**PR #88825** perf",
        "description": "streamline chat startup metadata.",
        "href": "https://github.com/openclaw/openclaw/issues/88825"
      },
      {
        "title": "**PR #88723** fix(doctor)",
        "description": "respect explicit PI runtime policy. Related #88706. Thanks @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/issues/88723"
      },
      {
        "title": "**PR #88365** fix(infra)",
        "description": "bridge WSL clipboard through shell. Related #88080. Thanks @vincentkoc and @YaneCheung.",
        "href": "https://github.com/openclaw/openclaw/issues/88365"
      },
      {
        "title": "**PR #88785** fix",
        "description": "restore backgrounded in-flight runs on TUI switch-back via gateway snapshot. Thanks @williamliu-ai.",
        "href": "https://github.com/openclaw/openclaw/issues/88785"
      },
      {
        "title": "**PR #87992** feat(ios)",
        "description": "support native iPad display. Thanks @EmpX2025.",
        "href": "https://github.com/openclaw/openclaw/issues/87992"
      },
      {
        "title": "**PR #88846** fix",
        "description": "preserve no-policy native hook fallback. Thanks @woodym-dotcom.",
        "href": "https://github.com/openclaw/openclaw/issues/88846"
      },
      {
        "title": "**PR #81264** fix(installer)",
        "description": "align Node version floor with package engine. Thanks @kiranmagic7.",
        "href": "https://github.com/openclaw/openclaw/issues/81264"
      },
      {
        "title": "**PR #87838** test(agents)",
        "description": "include Ollama in small live model matrix. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87838"
      },
      {
        "title": "**PR #88860** feat(minimax)",
        "description": "add MiniMax M3 support.",
        "href": "https://github.com/openclaw/openclaw/issues/88860"
      },
      {
        "title": "**PR #88305** fix(browser)",
        "description": "isolate Chrome MCP pending attach aborts. Related #88304. Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/issues/88305"
      },
      {
        "title": "**PR #88814** fix(ci)",
        "description": "repair current main checks. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88814"
      },
      {
        "title": "**PR #88855** fix(microsoft-foundry)",
        "description": "satisfy extension lint. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88855"
      },
      {
        "title": "**PR #88824** test",
        "description": "consolidate plugin registration contracts. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88824"
      },
      {
        "title": "**PR #88847** test(ui)",
        "description": "remove stylesheet grep tests. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88847"
      },
      {
        "title": "**PR #88704** fix(memory)",
        "description": "rehydrate daily list promotions. Related #87854. Thanks @MonkeyLeeT and @KingYiKa.",
        "href": "https://github.com/openclaw/openclaw/issues/88704"
      },
      {
        "title": "**PR #88848** test(agents)",
        "description": "use neutral tool schema fixtures. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88848"
      },
      {
        "title": "**PR #88817** fix(agents)",
        "description": "return schema lookup misses in-band. Related #88813. Thanks @ksj3421 and @cjalden.",
        "href": "https://github.com/openclaw/openclaw/issues/88817"
      },
      {
        "title": "**PR #88866** Persist Discord thread bindings in SQLite",
        "description": "**PR #88866** Persist Discord thread bindings in SQLite.",
        "href": "https://github.com/openclaw/openclaw/issues/88866"
      },
      {
        "title": "**PR #88801** fix(hooks)",
        "description": "expose inbound reply metadata before dispatch. Related #88521. Thanks @TurboTheTurtle and @hoyanhan.",
        "href": "https://github.com/openclaw/openclaw/issues/88801"
      },
      {
        "title": "**PR #88865** docs",
        "description": "clarify diffs language pack additions. Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/88865"
      },
      {
        "title": "**PR #88849** docs",
        "description": "continue inline comment pass.",
        "href": "https://github.com/openclaw/openclaw/issues/88849"
      },
      {
        "title": "**PR #87077** fix(ui)",
        "description": "bypass service worker for top-level navigations. Thanks @nayrosk.",
        "href": "https://github.com/openclaw/openclaw/issues/87077"
      },
      {
        "title": "**PR #88394** fix(plugins)",
        "description": "fail closed on trusted policy errors. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88394"
      },
      {
        "title": "**PR #88758** docs(imessage)",
        "description": "document SSH wrapper TCC send failure. Related #79289. Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/88758"
      },
      {
        "title": "**PR #88859** fix(mattermost)",
        "description": "route send attachments through upload. Related #87930. Thanks @vincentkoc and @NewCoffee7477.",
        "href": "https://github.com/openclaw/openclaw/issues/88859"
      },
      {
        "title": "**PR #88830** feat(dreaming)",
        "description": "score candidates with shadow trial results. Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/issues/88830"
      },
      {
        "title": "**PR #88803** fix(reply)",
        "description": "preserve sessions_send external routes. Related #88044. Thanks @MonkeyLeeT and @Lvan185.",
        "href": "https://github.com/openclaw/openclaw/issues/88803"
      },
      {
        "title": "**PR #88294** fix(cron)",
        "description": "include job name when reading single-job run history. Thanks @kip-claw.",
        "href": "https://github.com/openclaw/openclaw/issues/88294"
      },
      {
        "title": "**PR #88896** fix",
        "description": "harden CLI and plugin edge cases.",
        "href": "https://github.com/openclaw/openclaw/issues/88896"
      },
      {
        "title": "**PR #88767** fix(plugin-sdk)",
        "description": "isolate provider catalog projection failures. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88767"
      },
      {
        "title": "**PR #88892** feat(ui)",
        "description": "improve Workboard task details. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88892"
      },
      {
        "title": "**PR #88806** fix(memory-lancedb)",
        "description": "reject envelope metadata sludge (incl. marker-free shapes). Thanks @amittell.",
        "href": "https://github.com/openclaw/openclaw/issues/88806"
      },
      {
        "title": "**PR #88921** fix(ui)",
        "description": "keep first control chat sends responsive. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88921"
      },
      {
        "title": "**PR #87484** fix(agents)",
        "description": "clear legacy auto fallback pins. Related #87467. Thanks @neeravmakwana and @bgmbgm94.",
        "href": "https://github.com/openclaw/openclaw/issues/87484"
      },
      {
        "title": "**PR #88904** fix(android)",
        "description": "add notification app picker. Thanks @Tosko4.",
        "href": "https://github.com/openclaw/openclaw/issues/88904"
      },
      {
        "title": "**PR #88820** fix(diagnostics)",
        "description": "clear embedded-run activity when recovery declares lane idle. Related #88660. Thanks @openperf and @Iman-Sharif.",
        "href": "https://github.com/openclaw/openclaw/issues/88820"
      },
      {
        "title": "**PR #88897** refactor(copilot)",
        "description": "compact sessions through SDK state.",
        "href": "https://github.com/openclaw/openclaw/issues/88897"
      },
      {
        "title": "**PR #88924** fix(agents)",
        "description": "strip streamed reasoning tags. Related #88741. Thanks @kdonthar.",
        "href": "https://github.com/openclaw/openclaw/issues/88924"
      },
      {
        "title": "**PR #88937** fix(ui)",
        "description": "render pending sends in chat thread. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88937"
      },
      {
        "title": "**PR #88949** fix(ui)",
        "description": "scroll pending sends into view. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88949"
      },
      {
        "title": "**PR #88952** perf(ui)",
        "description": "cache chat transcript renders. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88952"
      },
      {
        "title": "**PR #88960** perf(ui)",
        "description": "record pending send paint timing. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88960"
      },
      {
        "title": "**PR #88972** perf(ui)",
        "description": "debounce chat draft persistence. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88972"
      },
      {
        "title": "**PR #88978** perf(ui)",
        "description": "skip closed slash menu rerenders. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88978"
      },
      {
        "title": "**PR #88982** fix(test)",
        "description": "wait for telegram timer flushes. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88982"
      },
      {
        "title": "**PR #88989** perf(ui)",
        "description": "guard chat transcript rerenders. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88989"
      }
    ],
    "fixes": [
      "Chat/UI: keep first Control UI sends responsive, retain pending sends while history catches up, cache transcript renders, and avoid draft persistence or navigation churn from blocking the active conversation. (#88952, #88960, #88998) Thanks @vincentkoc.",
      "Agents/Codex/auth: repair automatic fallback state, accept supported legacy Codex app-server auth, remove stale bootstrap history, strip streamed reasoning tags, and validate shell snapshots against trusted environment data. (#87484, #88924) Thanks @RomneyDa, @neeravmakwana, @vincentkoc, @bgmbgm94, and @kdonthar.",
      "Cron/channels: preserve external `sessions_send` routes, include the job name in single-job history, keep Mattermost attachments on the upload path, and bound Telegram/installer/Parallels proof cleanup. (#88294, #88803) Thanks @kip-claw, @MonkeyLeeT, @vincentkoc, and @Lvan185."
    ]
  },
  {
    "version": "2026.5.28",
    "date": "2026.5.28",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528",
    "features": [
      {
        "title": "Agent and Codex runtime recovery is steadier",
        "description": "subagents keep cwd/workspace separation, hook context stays prompt-local, session locks release on timeout abort while live OpenClaw locks survive cleanup, stale restart continuations are avoided, and Codex app-server/helper failures no longer tear down shared runtime state. (#87218, #86875, #87409, #87399, #87375, #88129)",
        "href": "https://github.com/openclaw/openclaw/issues/87218"
      },
      {
        "title": "Channel delivery and session identity got safer across outbound plugin hook...",
        "description": "Channel delivery and session identity got safer across outbound plugin hooks, Matrix room ids, iMessage reactions/approvals, Slack final replies, Discord recovered tool warnings, runtime-config message actions, WhatsApp profile auth roots, Telegram polling, and Microsoft Teams service URL trust checks. (#73706, #75670, #87366, #87451, #87334, #84535, #82492, #83304, #87160)",
        "href": "https://github.com/openclaw/openclaw/issues/73706"
      },
      {
        "title": "Mobile and chat surfaces got a broader refresh",
        "description": "the iOS Pro UI, hosted push relay default, realtime Talk tab playback, Gateway chat transport, onboarding, Talk permissions, WebChat reconnect delivery, and session picker behavior now preserve more state across reconnects and empty searches. (#87367, #87531, #87682, #88096, #88105) Thanks @ngutman and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/87367"
      },
      {
        "title": "Browser, channel, and automation inputs are stricter",
        "description": "Browser tool timeouts, viewport/tab indices, Gateway ports, cron retry handling, Discord component ids, schema array refs, Telegram callback pages, and channel progress callbacks now reject malformed values earlier and preserve the intended delivery context. (#82887)",
        "href": "https://github.com/openclaw/openclaw/pull/82887"
      },
      {
        "title": "Provider, media, and document coverage expands with Claude Opus 4",
        "description": "Provider, media, and document coverage expands with Claude Opus 4.8, Fal Krea image schemas, NVIDIA featured models, MiniMax streaming music responses, encrypted PDF extraction, voice model catalogs, GitHub Copilot agent runtime support, and a Codex Supervisor plugin path for delegated Codex workflows. (#87845, #87890, #80775, #84764, #87751, #87794)",
        "href": "https://github.com/openclaw/openclaw/issues/87845"
      },
      {
        "title": "CLI, auth, doctor, and provider paths fail faster and recover more clearly:...",
        "description": "CLI, auth, doctor, and provider paths fail faster and recover more clearly: malformed numeric/version options are rejected, workspace dotenv provider credentials are ignored, heartbeat defaults, OAuth/token lifetimes, and local service startup requests are bounded, agent auth health labels are clearer, legacy `api_key` auth profiles migrate to canonical form, and restart guidance is actionable. (#87398, #86281, #87361, #88133, #83655, #87559, #88088, #85924) Thanks @vincentkoc and @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/issues/87398"
      },
      {
        "title": "Plugin and Gateway hot paths do less repeated work while preserving cache c...",
        "description": "Plugin and Gateway hot paths do less repeated work while preserving cache correctness for install records, config JSON parsing, tool search catalogs, session stores, manifest model rows, auto-enabled plugin config, browser tokens, viewer assets, and release-split external plugin packages. (#86699)",
        "href": "https://github.com/openclaw/openclaw/pull/86699"
      },
      {
        "title": "Release, QA, and E2E validation now bound more log, artifact, harness, and...",
        "description": "Release, QA, and E2E validation now bound more log, artifact, harness, and cross-OS waits so failing lanes produce proof instead of hanging or false-greening.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528"
      },
      {
        "title": "Status",
        "description": "show active subagent details in status output.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528"
      },
      {
        "title": "Diffs",
        "description": "split the default language pack and expand default Diffs language coverage while keeping the host floor aligned. (#87370, #87372) Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/87370"
      },
      {
        "title": "ClawHub",
        "description": "add plugin display names plus skill verification and trust surfaces. (#87354, #86699) Thanks @thewilloftheshadow and @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/issues/87354"
      },
      {
        "title": "iOS",
        "description": "refresh the dev app with Pro Command, Chat, Agents, Settings, hosted push relay defaults, and realtime Talk playback wired to gateway sessions, diagnostics, chat, and realtime Talk. (#87367, #88096, #88105) Thanks @Solvely-Colin and @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/87367"
      },
      {
        "title": "Docs",
        "description": "clarify Codex computer-use setup, paste-token stdin auth setup, macOS gateway sleep troubleshooting, native Codex hook relay recovery, container model auth, install deployment cards, device-token admin gating, CLI setup flow compatibility, Notte cloud browser CDP setup, and backport targets. (#87313, #63050, #87685) Thanks @bdjben, @liaoandi, and @thewilloftheshadow.",
        "href": "https://github.com/openclaw/openclaw/issues/87313"
      },
      {
        "title": "PDF/tools",
        "description": "use ClawPDF for PDF extraction, support encrypted PDF extraction, and surface MCP structured content in agent tool results. (#87670, #87751)",
        "href": "https://github.com/openclaw/openclaw/issues/87670"
      },
      {
        "title": "Providers",
        "description": "add Claude Opus 4.8 support, Fal Krea image model schemas, NVIDIA featured model catalogs, MiniMax streaming music responses, and provider-backed voice model catalogs. (#87845, #87890, #80775, #84764, #87794) Thanks @eleqtrizit and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/87845"
      },
      {
        "title": "Codex/GitHub",
        "description": "add the GitHub Copilot agent runtime and the Codex Supervisor plugin package.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528"
      },
      {
        "title": "Plugins",
        "description": "externalize GitHub Copilot and Tokenjuice as official install-on-demand plugins with npm and ClawHub publish metadata.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528"
      },
      {
        "title": "Workboard",
        "description": "add agent coordination tools for tracking and handing off active agent work.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026528"
      },
      {
        "title": "Discord",
        "description": "show commentary in progress drafts so live Discord runs expose useful in-progress context. (#85200)",
        "href": "https://github.com/openclaw/openclaw/pull/85200"
      },
      {
        "title": "Plugin SDK",
        "description": "add a reply payload sending hook for plugins that need to deliver channel-owned replies and flatten package types for SDK declarations. (#82823, #87165) Thanks @piersonr and @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/82823"
      },
      {
        "title": "Policy",
        "description": "add policy comparison, ingress-channel conformance, and sandbox-posture conformance checks. (#85572, #85744, #86768)",
        "href": "https://github.com/openclaw/openclaw/issues/85572"
      }
    ],
    "fixes": [
      "Agents: fall back to local config pruning when the optional `agents delete` Gateway probe cannot authenticate, so offline installs can still delete agents without removing shared workspaces.",
      "Tighten phone-control mutation authorization [AI]. (#87150) Thanks @pgondhi987.",
      "Clarify directive persistence authorization policy [AI]. (#86369) Thanks @pgondhi987.",
      "Agents/Codex: keep spawned agent cwd/workspace state separated, forward ACP spawn attachments, keep hook context prompt-local, release session locks on timeout abort and runtime teardown without deleting live OpenClaw-owned locks during cleanup, avoid session event queue self-wait, clean up exec abort listeners, stream assistant deltas incrementally, recover raw missing-thread compaction failures, preserve rotated compaction session identity, keep compaction-timeout snapshots continuable, preserve shared app-server state across startup or helper failures, keep native hook relay alive across restarts and prune stale bridge files, close native hook relay replacement races, keep Claude live tool progress visible for watchdog recovery, suppress abandoned requester completion handoff, route workspace memory through tools, resolve Codex runtime models first, report quarantined dynamic tools, format `skills` command output, bind node auto-review to prepared plans, retry Claude CLI transcript probes, and bound compaction/steering retries. (#87218, #86875, #86123, #88129, #87399, #87375, #72574, #87383, #87400, #83022, #87671, #87738, #87747, #87706, #87546, #87541, #81048) Thanks @mbelinky, @Alix-007, @luoyanglang, @yetval, @sjf, @joshavant, @benjamin1492, @c19354837, @fuller-stack-dev, @pfrederiksen, and @dodge1218.",
      "Codex Supervisor: keep real-home app-server MCP session listing on the loaded state path, bound stored history scans, and close WebSocket probes cleanly.",
      "Channels: thread canonical session keys into outbound hooks, preserve Matrix room-id case, keep fallback tool warnings mention-inert, retain delivered Slack final replies during late cleanup, continue iMessage polling after denied reactions, suppress duplicate native exec approvals, resolve Gateway message actions against the active runtime config, preserve Telegram SecretRef prompt config and polling keepalives, preserve WhatsApp profile auth roots, QR display, document filenames, and plugin hook config, suppress Discord recovered tool warnings, preserve the Discord voice outbound helper, cap Discord/Signal/Zalo channel request and container timeouts, and block untrusted Teams service URLs while keeping TeamsSDK patterns aligned. (#73706, #75670, #87366, #87451, #87465, #87334, #84535, #76262, #83304, #82492, #87581, #77114, #86426, #85529, #87160) Thanks @zeroaltitude, @lukeboyett, @jarvis-mns1, @xiaotian, @funmerlin, @joshavant, @eleqtrizit, @heyitsaamir, @amittell, @lidge-jun, @liorb-mountapps, @masatohoshino, @bladin, and @giodl73-repo.",
      "CLI/auth/doctor/providers: reject malformed numeric/timeout/subcommand-version inputs, ignore workspace dotenv provider credentials, wait for respawn child shutdown, bound heartbeat defaults plus Codex, GitHub Copilot, OpenAI, Anthropic, Google, Feishu, LM Studio, MiniMax, Xiaomi TTS, and local-provider OAuth/token/model requests, harden Codex auth probes, label auth health by agent, preserve explicit agentRuntime pins during Codex model migration, warm provider auth off the main thread, honor Codex response timeouts, stop migrating current Claude Haiku 4.5 profiles to Sonnet, bound local service startup, resolve GPT-5.5 without cached catalog, migrate legacy memory auto-provider config, rewrite non-canonical `api_key` auth profiles, and make doctor restart follow-ups actionable. (#87398, #86281, #87361, #88133, #83655, #87559, #87719, #88088, #85924, #84362) Thanks @Patrick-Erichsen, @samzong, @giodl73-repo, @alkor2000, @mmaps, @nxmxbbd, and @vincentkoc.",
      "Gateway/security/session state: expire browser tokens after auth rotation, scope assistant idempotency dedupe, drain probe client closes, avoid stale restart continuation reuse, preserve retry-after fallbacks and stale rate-limit cooldown probes, bound webchat image and artifact transcript scans, include seconds in inbound metadata timestamps, clear completed session active runs, clear stale chat stream buffers, and evict current plugin-state namespaces at row caps. (#87810, #87833, #75089) Thanks @joshavant and @litang9.",
      "Config/parsing/network: reject partial numeric parsing, parse provider/Discord retry headers and dates strictly, honor IPv6 and bare IPv6 `no_proxy` entries, preserve empty plugin allowlists, canonicalize secret target array indexes, and reject malformed media content lengths, inspected TCP ports, marketplace content lengths, cron epochs, sandbox stat fields, unsafe duration values, empty config path segments, noncanonical schema array refs, unsafe Telegram callback pages, and invalid Teams attachment-fetch DNS targets. (#87883) Thanks @zhangguiping-xydt.",
      "Browser/input hardening: reject invalid tab indexes, excessive viewport resizes, explicit zero CDP ports, malformed geolocation options, unsafe screenshot or permission-grant timeouts, loose response-body limits, invalid cookie expiries, and non-finite Browser tool delays/timeouts.",
      "Cron/automation: retry recurring jobs after transient model rate limits before waiting for the next scheduled slot, and preflight model fallbacks before skipping scheduled work. (#82887) Thanks @chen-zhang-cs-code.",
      "Auto-reply/directives: respect provider and relayed channel metadata during directive persistence so channel-originated decisions keep their intended context. (#87683)",
      "WhatsApp: resolve the auth directory from the active profile so profile-scoped WhatsApp installs do not drift to the wrong credential root. (#82492) Thanks @lidge-jun.",
      "Gateway/session state: clear completed session active runs, avoid cold-loading providers for MCP inventory, cache single-session child indexes, cap handshake timers, and bound preauth, auth-guard, media, transcript, readiness, and port options.",
      "Channels/replies: preserve channel-owned progress callbacks when verbose output is off, keep group-room progress suppression intact, prefer external session delivery context, escape Discord component id delimiters, force final TUI chat repaints, show Slack reasoning previews, and normalize Discord/Matrix/Mattermost channel numeric options. (#87476, #87423)",
      "Agents/tool args: harden smart-quoted argument repair for edit arrays and exact escaped arguments so model-produced tool calls recover without corrupting valid input. (#86611) Thanks @ferminquant.",
      "Providers/agents: preserve seeded Anthropic signatures, preserve signed thinking payloads, concatenate signature-delta chunks, preserve DeepSeek `reasoning_content` replay across tier suffixes, apply OpenRouter strict9 ids to Mistral routes, promote Ollama plain-text tool calls, load NVIDIA featured model catalogs, stream MiniMax music generation responses, and recover empty preflight compaction. (#87593, #87493, #80775, #84764) Thanks @Pluviobyte and @eleqtrizit.",
      "Media/images: skip CLI image cache refs when resolving generated images, allow trusted generated HTML attachments, and bound generated video downloads so stale refs and slow providers fail cleanly. (#87523, #87982)",
      "File transfer: handle late tar stdin pipe errors after archive validation or unpacking has already settled.",
      "Performance: trust install-record caches between reloads, prefer native JSON parsing, reuse unchanged tool-search catalogs, reuse gateway session and plugin metadata paths, skip unchanged store serialization, patch single-entry session writes, add precomputed session patch writers, reduce store clone allocations, cache manifest model catalog rows and auto-enabled plugin config, avoid full session snapshots for entry reads, defer configured Slack full startup, prefer bundled plugin dist entries, and slim current metadata identity caches. (#87760)",
      "Docker/release/QA: package runtime workspace templates, stream cross-OS served artifacts, preserve sparse Crabbox run artifacts, isolate npm plugin installs per package, reject incompatible package plugin API installs, drop the leftover root Sharp dependency from package manifests after the Rastermill migration, bound OpenClaw instance logs, plugin gauntlet relay logs, MCP channel buffers, kitchen-sink scans, agent-turn assertions, QA-Lab credential broker calls, QA Matrix substrate requests, and release scenario logs, and keep release/google live guards current. (#87647, #87477) Thanks @rohitjavvadi and @vincentkoc.",
      "Release/CI: bound manual git fetches, ClawHub verifier responses, ClawHub owner metadata, dependency-guard error bodies, Parallels limits, startup/test/memory budget parsing, and diffs viewer build warnings so release lanes fail with useful proof instead of hanging. (#87839)"
    ]
  },
  {
    "version": "2026.5.27",
    "date": "2026.5.27",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026527",
    "features": [
      {
        "title": "Safer local/runtime boundaries",
        "description": "OpenClaw now rejects unsafe command wrappers, malformed CLI numeric options, unsafe Node runtime env overrides, no-auth Tailscale exposure, and non-admin device-role pairing approvals before they can affect live runs. (#87308, #87305, #87292, #87146)",
        "href": "https://github.com/openclaw/openclaw/issues/87308"
      },
      {
        "title": "Matrix and auto-reply delivery are steadier",
        "description": "mention previews stay inert, final mention replies deliver normally, shared-DM notices are awaited, MXID parsing ignores filenames, and reasoning-prefixed `NO_REPLY` responses stay suppressed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026527"
      },
      {
        "title": "Provider and agent reliability improved across OpenAI-compatible embeddings...",
        "description": "Provider and agent reliability improved across OpenAI-compatible embeddings, cached token usage, Anthropic/Codex/Claude runtime state, unsupported tool-schema quarantine, heartbeat templates, and session fallback errors. (#85269, #82062, #85416, #86855)",
        "href": "https://github.com/openclaw/openclaw/issues/85269"
      },
      {
        "title": "Plugin and package release paths got tighter",
        "description": "Pixverse ships as an external video plugin with region selection, package exclusions and shrinkwrap inventory match the published npm shape, and release/package smoke commands fail bounded instead of hanging.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026527"
      },
      {
        "title": "Gateway hot paths do less rediscovery by reusing current plugin metadata fi...",
        "description": "Gateway hot paths do less rediscovery by reusing current plugin metadata fingerprints, stable plugin index fingerprints, read-only session metadata, active working stores, status fast paths, and auth/env snapshots. (#86439)",
        "href": "https://github.com/openclaw/openclaw/pull/86439"
      },
      {
        "title": "Memory",
        "description": "add a core OpenAI-compatible embedding provider for local and hosted OpenAI-style endpoints, with config, doctor, and docs support. (#85269) Thanks @dutifulbob.",
        "href": "https://github.com/openclaw/openclaw/pull/85269"
      },
      {
        "title": "Plugin SDK",
        "description": "mark memory-specific embedding provider registration as deprecated compatibility and surface non-bundled usage in plugin compatibility diagnostics. (#85072) Thanks @mbelinky.",
        "href": "https://github.com/openclaw/openclaw/pull/85072"
      },
      {
        "title": "Pixverse",
        "description": "add video generation provider support, API region selection, and external plugin publishing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026527"
      },
      {
        "title": "Plugins",
        "description": "expose approval action metadata for plugin-driven approval surfaces.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026527"
      }
    ],
    "fixes": [
      "Security/CLI/runtime: harden hostname normalization for repeated trailing dots, block side-effecting command wrappers, reject unsafe Node runtime env overrides, reject loose numeric CLI and gateway options, require admin approval for node device-role pairing, and reject no-auth Tailscale exposure. (#87305, #87292, #87308, #87146) Thanks @pgondhi987.",
      "Doctor: validate runtime tool schemas for every configured embedded agent while skipping ACP-only profiles, so bad non-default plugin or MCP tools are reported before assistant turns.",
      "Telegram: route `sendMessage` action replies through durable outbound delivery so completed agent responses remain retryable when the gateway send path times out. (#87261) Thanks @mbelinky.",
      "Matrix/auto-reply: keep draft previews mention-inert, preserve final mention delivery, send mention finals normally, await shared DM notices, ignore filename-embedded MXIDs, and suppress reasoning-prefixed `NO_REPLY` responses.",
      "Agents/providers: add OpenAI-compatible cache retention, forward cached token usage in chat completions, preserve runtime context before active user turns, strip stale Anthropic thinking, load Claude CLI OAuth for Pi auth profiles, avoid false Codex runtime live switches, and quarantine unsupported tool schemas. (#82062, #87167, #86855)",
      "Gateway/performance: cache plugin metadata fingerprints and stable plugin index fingerprints, borrow read-only session metadata safely, keep the active session working store hot, keep status on a bounded fast path, and preserve model auth profile suffixes. (#86439)",
      "Package/install/release: align npm package exclusions and inventory, omit unpacked test helpers, skip Homebrew until macOS packages need it, cap tsdown heap in containers, bound install/release smoke waits, and harden post-publish verification.",
      "Codex/Auth: bound ChatGPT OAuth token exchange and refresh requests, and honor cancellation across Codex and Anthropic OAuth login flows.",
      "QA/E2E/CI: bound Telegram, kitchen-sink, Open WebUI, ClawHub, MCP, Discord, realtime, labeler, and GitHub API waits; fail empty explicit test, live-media, gateway CPU, startup benchmark, plugin gauntlet, and beta-smoke runs instead of false-greening.",
      "Agents/Codex: keep spawned agent bootstrap files rooted in the agent workspace while running task commands, transcripts, and compaction from the requested cwd. (#87218) Thanks @mbelinky."
    ]
  },
  {
    "version": "2026.5.26",
    "date": "2026.5.26",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526",
    "features": [
      {
        "title": "Faster Gateway and replies",
        "description": "startup avoids repeated plugin, channel, session, usage-cost, warning, scheduled-service, and filesystem scans; visible replies separate user-facing sends from slower follow-up work; Gateway runtime/session caches churn less under load.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Transcripts are core",
        "description": "transcript-backed meeting summaries, source-provider chunks, cleaned user turns, media provenance, Codex mirrors, WebChat replies, and CLI/TUI replay now use one more reliable transcript path.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "More channels are production-ready",
        "description": "Telegram keeps typing/progress context and forum topics, iMessage handles attachment roots, remote media staging, and duplicate local Messages sources, WhatsApp restores group/media behavior, Discord improves voice playback and model picking, and Signal/iMessage/WhatsApp get reaction approvals.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Better voice and Talk",
        "description": "realtime Talk runs can be inspected, steered, cancelled, or followed up from Web UI and Discord voice; wake-name handling is more tolerant without letting ambient speech trigger agents.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Safer content boundaries",
        "description": "Browser snapshot reads honor SSRF policy, system-event text cannot spoof nested prompt markers, fetched file text is wrapped as external content, ClickClack inbound sender allowlists run before agent dispatch, stale device tokens are rejected, and serialized tool-call text is scrubbed from replies.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Providers, Codex, and local models are steadier",
        "description": "named auth profiles, OpenAI sampling params, Codex app-server resume/timeout/usage-limit recovery, dynamic tool-schema guards, xAI usage-limit surfacing, Ollama top-p normalization, and local approval resolution reduce provider-specific dead ends.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "More reliable install/update/release paths",
        "description": "Alpine installs, trusted runtime fallback roots, stable update channels, Docker/package timeouts, Windows Scheduled Tasks, Windows/macOS proof lanes, Testbox/Crabbox delegation, plugin publish checks, and macOS runner bootstraps all got hardened.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Better observability",
        "description": "Activity tab, gateway secret-prep traces, tool/model stream progress, explicit fast-mode status, systemd Gateway hygiene, OpenTelemetry LLM spans, release performance evidence, and richer telemetry signals make failures easier to inspect.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Transcripts",
        "description": "add core transcript capture and source-provider support for transcript-backed meeting summaries, including the renamed Transcripts docs, CLI surface, source-provider chunks, and cleaned user-turn persistence.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Auth",
        "description": "add named model login profiles and supported credential migration for Hermes, OpenCode, and Codex auth profiles, with explicit opt-out and non-interactive controls. (#85667) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/85667"
      },
      {
        "title": "Diagnostics",
        "description": "trace gateway secret preparation, classify skill/tool usage, surface model stream progress, add OpenTelemetry LLM content spans, and expose alertable telemetry for blocked tools, failover, stale sessions, liveness, oversized payloads, and webhook ingress. (#83019, #80370, #86191)",
        "href": "https://github.com/openclaw/openclaw/issues/83019"
      },
      {
        "title": "Channels",
        "description": "add Signal reaction approvals, iMessage thumb approval reactions, and WhatsApp thumb approval reaction support so mobile approval flows work without textual `/approve` commands. (#85894, #85952, #85477)",
        "href": "https://github.com/openclaw/openclaw/issues/85894"
      },
      {
        "title": "Agents/API",
        "description": "forward OpenAI sampling params through the Gateway and expose estimated context-budget status for active agent runs. (#84094)",
        "href": "https://github.com/openclaw/openclaw/pull/84094"
      },
      {
        "title": "TUI/status",
        "description": "queue prompts submitted while an agent is busy and show explicit fast-mode state plus richer systemd Gateway hygiene in status output. (#86722, #87115, #86976)",
        "href": "https://github.com/openclaw/openclaw/issues/86722"
      },
      {
        "title": "Exec approvals",
        "description": "hide durable approval actions that are unavailable for the current prompt and keep approval runtime tokens local-only so stale prompts cannot offer misleading controls. (#86270, #86359)",
        "href": "https://github.com/openclaw/openclaw/issues/86270"
      },
      {
        "title": "Plugin SDK",
        "description": "add reaction approval helpers and keep diagnostic event root exports discoverable across function-name and alias-bound module graphs. (#86735, #87084)",
        "href": "https://github.com/openclaw/openclaw/issues/86735"
      },
      {
        "title": "Android/iOS",
        "description": "add the Android pair-new-gateway action and improve mobile Talk mode surfaces, including iOS realtime Talk mode and Android offline voice/gateway recovery. (#86798, #86355) Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/issues/86798"
      },
      {
        "title": "Performance",
        "description": "cache plugin metadata snapshots, package realpaths, stable gateway metadata, model cost indexes, channel resolution, usage-cost indexes, and session/auth hot-path facts so common Gateway and reply paths do less rediscovery. (#84649, #85843, #86517, #86678)",
        "href": "https://github.com/openclaw/openclaw/issues/84649"
      },
      {
        "title": "Voice",
        "description": "expose shared realtime turn-context tracking through the realtime voice SDK and reuse it for Discord speaker attribution and wake-name context recovery.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Voice",
        "description": "reuse shared realtime output activity tracking in Google Meet command and node audio bridges, including recent-output checks for local barge-in detection.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Voice",
        "description": "expose shared realtime output activity tracking through the realtime voice SDK and reuse it for Discord playback activity and barge-in decisions.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Voice",
        "description": "expose shared realtime consult question matching, speakable-result extraction, and alias-aware forced-consult coordination through the realtime voice SDK, then reuse it in Gateway Talk, Voice Call, and Discord voice paths.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Voice",
        "description": "share activation-name matching and consult-transcript screening through the realtime voice SDK so Discord, browser voice, and meeting surfaces can reuse one implementation.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Cron",
        "description": "default `cron.maxConcurrentRuns` to 8 so scheduled automations and their isolated agent turns can make progress in parallel without explicit configuration.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "QA-Lab",
        "description": "add `qa coverage --match <query>` so focused proof selection can discover matching scenarios from existing metadata before running live or remote lanes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026526"
      },
      {
        "title": "Discord/model picker",
        "description": "surface an alpha-bucket select (e.g. `A–G (12) · H–N (18) · O–Z (5)`) when the provider list or a provider's model list exceeds 25 items, so configs with `provider/*` wildcards stay one click from the right page instead of paginating through prev/next; falls back to numeric chunks when every item shares the same first letter. (#86181) Thanks @rendrag-git.",
        "href": "https://github.com/openclaw/openclaw/pull/86181"
      },
      {
        "title": "Control UI",
        "description": "add an ephemeral Activity tab for sanitized live tool activity summaries without persisting raw telemetry. Fixes #12831. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/12831"
      },
      {
        "title": "Build",
        "description": "include `ui:build` in the `full` and `ciArtifacts` profiles of `scripts/build-all.mjs` so `pnpm build` always rebuilds `dist/control-ui` after `tsdown` cleans `dist`, removing the second-command requirement and the missing-asset failure mode for source/runtime installs and CI artifact uploads. (#85206)",
        "href": "https://github.com/openclaw/openclaw/pull/85206"
      },
      {
        "title": "iOS",
        "description": "improve Talk mode with direct realtime voice sessions, compact toolbar status, and responsive voice waveform feedback. (#86355) Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/86355"
      },
      {
        "title": "Media",
        "description": "replace the Sharp image backend with Rastermill for metadata, resizing, EXIF orientation, and PNG alpha-preserving optimization so OpenClaw no longer installs Sharp or the WhatsApp Jimp fallback for image processing. (#86437)",
        "href": "https://github.com/openclaw/openclaw/pull/86437"
      },
      {
        "title": "Codex",
        "description": "update the bundled Codex CLI to 0.134.0 and keep native compaction disabled for budget-triggered app-server turns so OpenClaw owns the recovery boundary. (#86772)",
        "href": "https://github.com/openclaw/openclaw/pull/86772"
      }
    ],
    "fixes": [
      "Memory/security: reject prompt-like text submitted through the explicit `memory_store` tool before embedding or storage, matching the existing auto-capture prompt-injection filter. (#87142)",
      "Gateway/security: enable the default auth rate limiter for remote non-browser and HTTP gateway auth failures when `gateway.auth.rateLimit` is unset, while preserving the loopback exemption. (#87148)",
      "Prompt hardening: route untrusted group prompt metadata through sanitized untrusted structured context while preserving trusted operator-configured group system prompts and aligning the plugin SDK docs/test helpers. (#87144)",
      "Security/content boundaries: validate Browser snapshot tab URLs against SSRF policy before ChromeMCP or direct CDP reads, sanitize queued system-event text so untrusted plugin/channel labels cannot spoof nested prompt markers, wrap fetched file text and metadata as external content, apply ClickClack `allowFrom` sender allowlists before agent dispatch, reject RPCs from invalidated device-token clients during rotation, require staged sandbox media refs, and scrub serialized tool-call text from replies. (#78526, #87094, #87062, #83741, #70707, #86924) Thanks @zsxsoft, @ttzero25, and @mmaps.",
      "Transcripts/user turns: persist CLI, WebChat, media, follow-up, hook, and Codex-mirror user turns to the admitted session target; keep cleaned transcript text, inline image routing, provenance metadata, replay hooks, and fallback paths idempotent when runtimes fail or restart.",
      "TUI/status/onboarding/UI: queue busy TUI prompts instead of dropping them, preserve the configured default model during onboarding, show failed tool results as errors, show config-open failures in Control UI, keep status JSON plugin scans healthy, preserve xAI usage-limit errors locally, and expose explicit fast-mode/systemd state. (#86722, #87000, #85786, #87108, #87001, #86614, #87115, #86976)",
      "Plugin commands/SDK: preserve plugin LLM command auth, bind native plugin command dispatch to the host agent's LLM auth, keep `onDiagnosticEvent` exports discoverable through `Function.name`, stabilize diagnostic event root aliases, correlate pathless read diagnostics, suppress transient runner failures in channel command paths, and repair local approval resolution. (#85936, #87084, #86977, #87069, #86771)",
      "Codex/providers: keep WebChat delivery hints out of user prompts, avoid false queued-terminal idle timeouts, share the native hook relay registry, quarantine unsupported dynamic tool schemas, preserve Claude resumed-session system prompts, normalize greedy Ollama `top_p`, preserve per-agent thinking defaults for ingress runs, and avoid native compaction takeover on budget-triggered Codex turns. (#87096, #73950, #87049, #86689, #86772)",
      "Gateway/perf/release: reuse startup-warning metadata and prepared auth stores, avoid cloning live-switch and lifecycle session caches on read paths, defer warning and scheduled-service fallback imports, trim Gateway session/startup/runtime CPU churn, skip duplicate turn session touches, stop chat timeout fallback cascades, drop stale subagent announce history, bound benchmark/watch/kitchen-sink teardown waits, bound macOS/package/onboarding/plugin smoke commands, bound install finalization probes, resolve Parallels npm-update commands from guest `PATH`, and bootstrap raw AWS macOS Node/pnpm commands through `/usr/bin/env`. (#86997)",
      "Reply/perf: reduce visible reply delivery latency by preserving Telegram typing/progress context, lazy-loading slash-command startup metadata, avoiding hot-path model hydration, flag-gating Codex profiler timing, deferring context compaction maintenance, and tracking delivery timing. (#86989, #86990, #86991, #86992, #86993, #86994) Thanks @keshavbotagent.",
      "Reply/source delivery: keep TUI, Control UI, media, TTS, transcript, and Codex source-reply finals live without duplicate terminal events or stale replay artifacts.",
      "Agents/replay: repair legacy tool results before replay, preserve `sessions_spawn` transcript payloads, restore current guard checks, stage sandboxed workspace media, and keep duplicate transcripts tool display metadata from reappearing. (#82203, #86934, #87025) Thanks @martingarramon, @vincentkoc, and @joshavant.",
      "Agents/sessions: handle active-fallback failures in `sessions_send` so fallback routing reports the real failure and does not leave callers with an ambiguous dropped send. (#86638)",
      "Agents/hooks/subagents: enforce default hook agent allowlists, recover failed subagent lifecycle completions, and keep node task lifecycle cleanup from closing the Gateway listener. (#86101)",
      "Codex: project newer OpenClaw chat history into resumed app-server threads and keep Codex turn timeouts inside the Codex runtime boundary so timeouts do not poison shared app-server clients or fall through to unrelated provider fallback. (#86677, #86476) Thanks @TurboTheTurtle and @pashpashpash.",
      "Config/doctor/update: narrow profiled tool-section doctor repair, keep runtime-injected legacy web-search provider config out of user-authored config validation, and keep prerelease tags excluded from stable updater resolution. (#87030, #86818, #86559) Thanks @joshavant, @luoyanglang, and @stevenepalmer.",
      "Doctor/runtime: validate active bundled MCP tool schemas through the same runtime projection path so unsupported MCP input schemas are reported and quarantined instead of poisoning assistant startup.",
      "CLI/Windows: add a Windows-only stack-size respawn for stack-heavy startup paths, default CLI logs to local timestamps, and validate timeout/banner TTY state more strictly. (#87031, #85387) Thanks @giodl73-repo and @vincentkoc.",
      "Locking/security: require owner identity proof before stale plugin lock removal, memoize session lock owner arguments, and avoid writing default exec approval stores unless policy state actually changed. (#86814, #86964) Thanks @Alix-007 and @vincentkoc.",
      "Install/release: bound Docker package build, inventory, pack, and tarball preparation with process-group timeouts; pin shrinkwrap patch drift to the pnpm lock; harden macOS restart and dSYM packaging; and run release Docker/live timeout wrappers in the foreground so child processes cannot wedge gates.",
      "QA/Telegram: bound Telegram user credential tar and broker calls so live proof setup fails with a timeout instead of waiting for the outer Crabbox job deadline.",
      "QA/Tool Search: bound gateway E2E HTTP probes, run only the fixture plugin, and clean up temporary fixture trees after the compact tool-catalog proof completes.",
      "Telegram/network: treat `ENETDOWN` as a transient pre-connect network failure so Telegram sends, gateway unhandled-rejection handling, and cron network retries follow the same recovery path as sibling network outages. (#86762) Thanks @TurboTheTurtle.",
      "Telegram: preserve inbound text entities, overlapping DM replies, account topic cache sidecars, outbound reply context, targeted bot-command mentions, durable group retry targets, forum topic names, and native progress callbacks. (#83873, #85361, #85555, #85656, #85709, #86299, #86553) Thanks @SebTardif, @luoyanglang, and @neeravmakwana.",
      "iMessage: read image attachments from local Messages attachment roots, dedupe duplicate local Messages-source accounts, seed direct DM history, fix image/group media attachment commands, advance catchup cursors after live handling, and keep slash-command acknowledgements in the source conversation. (#82642, #85475, #86569, #86705, #86706, #86770) Thanks @homer-byte, @TurboTheTurtle, @swang430, and @OmarShahine.",
      "WhatsApp/QQ/Twitch/IRC/Slack: restore WhatsApp ack identity and group-drop warnings, make QQ Bot media respect `OPENCLAW_HOME`, serialize Twitch auth disconnects, store IRC channel routes canonically, and keep Slack downloaded files out of reply media. (#83833, #85309, #85777, #85794, #85906, #86318, #86697) Thanks @sliverp, @neeravmakwana, and @Kailigithub.",
      "Discord/voice: improve voice playback and wake replies, bucket large model picker menus, merge media captions into one message, route metadata through configured proxies, restore numeric channel sends, suppress self-reply echoes, and tighten wake matching without breaking fuzzy wake phrases. (#80227, #86238, #86487, #86571, #86595, #86601)",
      "Codex: preserve native web-search metadata, keep oversized native thread reuse, bridge CLI API-key auth into the app server, preserve sandbox bootstrap path style, recover context-window prompt errors, honor yolo approval policy, disable native thread personality, and route compaction through Codex auth. (#85378, #85542, #85891, #85909, #86408)",
      "Agents/runtime: enforce session lock max-hold reclaim, release embedded-attempt locks on all exits, treat aborted subagent runs as terminal, avoid runtime model hydration on hot paths, disclose scoped session list counts, derive overflow budgets from provider errors, and keep fallback errors scoped to the active model candidate. (#70473, #85764, #86014, #86134, #86427, #86944) Thanks @openperf, @fuller-stack-dev, @zhangguiping-xydt, and @ferminquant.",
      "Config/update/doctor: retry config recovery after failed backup restore, skip shell env fallback on Windows, exclude prerelease tags from the stable git channel, support deep config edits, warn instead of aborting on unreadable cron stores, prune stale bundled plugin paths, and avoid duplicate restart prompts when the Gateway is already healthy. (#85739, #85787, #86060, #86260, #86384, #86533) Thanks @liaoyl830.",
      "Install/release: support Alpine CLI installs and runtime floors, prefer trusted startup argv runtime fallback roots, reject stale CLI node runtimes, avoid npm `min-release-age` installer failures, bound npm/package/Docker install phases, restore config parent ownership in Docker, seed Docker lockfile package tarballs before prune, make release/plugin prerelease checks fail closed instead of hanging or false-greening, and use host-visible Crabbox local work roots for Docker-backed proof. (#85491)",
      "Windows daemon: keep Scheduled Task gateway launches running on battery power and avoid workgroup-machine prompts for a domain user during task installation. (#59299)",
      "Security: avoid printing Gateway tokens in Docker, validate plugin model-pattern regexes safely, escape transcript metadata field names, harden session allowlist glob matching, audit Claude permission overrides under YOLO, and require explicit allow for ACP auto approvals. (#85849, #85934, #86046, #86557)",
      "Media/images: replace Sharp with Rastermill, keep EXIF normalization best-effort, normalize HEIC/HEIF before image descriptions, route Codex image API keys through OpenAI, preserve image compression metadata, and auto-scale live tool result caps. (#85776, #86037, #86437, #86857, #86923)",
      "Memory: prevent semantic vector indexes from silently degrading when embeddings are unavailable, stop doctor OOMs on large session stores, preserve sidecar hooks/artifacts, write fallback dream diaries, use CJK-aware dreaming dedupe, and avoid per-file watcher FD fan-out. (#80613, #82928, #85060, #85704, #85967, #86701) Thanks @brokemac79, @openperf, and @yaaboo-gif.",
      "Agents/sessions: include visibility metadata on restricted `sessions_list` results so scoped counts are clearly reported without widening access or exposing hidden-session counts. (#86944) Thanks @ferminquant.",
      "Gateway/DNS: validate wide-area discovery domains before deriving zone paths or writing zone files, so invalid `discovery.wideArea.domain` and `dns setup --domain` values fail with a DNS-name diagnostic instead of falling through to unrelated configuration errors. Thanks @mmaps.",
      "Agents/BTW: route fallback side-question streams through the embedded stream resolver so Anthropic-compatible MiniMax requests use the same capped transport as normal chat. (#86312) Thanks @neeravmakwana.",
      "Telegram: treat `/command@TargetBot` bot-command entities as explicit mentions for the addressed bot so `requireMention` groups no longer drop targeted commands or captions. Fixes #84462. (#86553) Thanks @luoyanglang.",
      "CI: bound Docker/Bash E2E tarball npm installs with `OPENCLAW_E2E_NPM_INSTALL_TIMEOUT` so package, onboarding, plugin, and upgrade lanes fail instead of hanging on a stuck npm install.",
      "CI: fail Parallels npm-update smoke jobs after the guest command timeout and cleanup backstop instead of only logging a timeout line.",
      "CI: bound kitchen-sink RPC HTTP probes so stalled gateway readiness or response bodies fail and retry instead of wedging the walker.",
      "CI: bound Telegram user Crabbox proof Bot API calls so stalled Telegram responses fail instead of wedging credential and desktop proof cleanup.",
      "CI: bound MCP channel stdio client initialization so Docker channel proof fails and closes the bridge transport instead of waiting for the outer job timeout.",
      "CI: keep `OPENCLAW_TESTBOX=1 pnpm check:changed` delegating to Blacksmith Testbox through Crabbox without forwarding local Testbox or worker env into the remote command.",
      "CI: send KILL after the TERM grace period for manual checkout fetch timeouts so stuck Testbox and workflow checkout retries cannot hang behind a wedged `git fetch`.",
      "CI: send KILL after the TERM grace period for Bun global install smoke command timeouts so trapped `openclaw` child processes cannot wedge the scheduled install smoke.",
      "iMessage: thread current channel/account inbound attachment roots into the image tool so iMessage-saved attachments under `~/Library/Messages/Attachments` (including the wildcard `/Users/*/Library/Messages/Attachments` root) are read through the existing inbound path policy instead of being rejected as `path-not-allowed`. Literal `localRoots` stays workspace-scoped. Fixes #30170. (#86569)",
      "QQ Bot: respect `OPENCLAW_HOME` for outbound media path resolution so `<qqmedia>` sends no longer silently fail when `HOME` and `OPENCLAW_HOME` differ (Docker / multi-user hosts). Persisted QQ Bot data (sessions, known users, refs) stays anchored on the OS home for upgrade compatibility. Fixes #83562. Thanks @sliverp.",
      "Update: report the primary malformed `openclaw.extensions` payload error without adding a duplicate missing-main diagnostic. (#86596) Thanks @ferminquant.",
      "Control UI: keep host-local Markdown file paths inert while preserving app-relative links. (#86620) Thanks @BryanTegomoh.",
      "Gateway: dampen repeated unauthenticated device-required probes per URL while preserving explicit-auth and paired recovery paths. (#86575) Thanks @ferminquant.",
      "IRC: store inbound channel routes with the canonical `channel:#name` target and join transient channel sends before writing. (#85906) Thanks @Kailigithub.",
      "Usage: surface unknown all-zero model pricing as missing cost entries instead of a confident `$0` total. (#85882) Thanks @MichaelZelbel.",
      "Agents/Codex: honor yolo app-server approval policy only for the full `never` plus `danger-full-access` case. (#85909) Thanks @earlvanze.",
      "Gateway/Gmail: clear Gmail watcher renewal intervals on re-entry so hot reloads do not leak lifecycle timers. (#82947) Thanks @SebTardif.",
      "Logging: exit cleanly on broken stdout/stderr pipes without masking existing failure exit codes. (#80059) Thanks @pavelzak.",
      "Gateway/security: escape transcript metadata field names while extracting oversized session line prefixes. (#85934) Thanks @SebTardif.",
      "Plugins/security: validate manifest model pattern regexes with the safe-regex compiler so unsafe patterns are ignored before matching. (#86046) Thanks @SebTardif.",
      "Discord: route gateway metadata REST lookups through the configured Discord proxy so proxied accounts do not fall back to direct `discord.com` connections before opening the WebSocket. Fixes #80227. Thanks @Clivilwalker.",
      "Agents/media: hydrate current-turn image attachments from filename-derived MIME types so active vision can see generated or forwarded images whose source omitted an image content type. (#84812) Thanks @marchpure.",
      "Agents/fs: point workspace-only scratch-path guidance at in-workspace temp directories while keeping host-root writes rejected by the tool guard. (#86501) Thanks @tianxiaochannel-oss88.",
      "Agents/media: keep async cron media completions scoped to their run session while preserving direct delivery for stale generated-media success and failure notifications. (#86529) Thanks @ai-hpc.",
      "Gateway: emit plugin `session_end`/`session_start` hooks when `agent.send` rotates or replaces a session id, keeping hook lifecycle state aligned with `sessions.changed` notifications. Fixes #83507. (#85875) Thanks @brokemac79.",
      "OpenShell/SSH: reject malformed generated exec commands before sandbox/session setup so unresolved workflow placeholders fail fast instead of reaching the remote shell. Fixes #72373. Thanks @brokemac79.",
      "Google: stop normalizing `gemini-3.1-flash-lite` to the retired preview endpoint and update Flash Lite alias guidance to the GA model id. Fixes #86151. (#86240) Thanks @SebTardif.",
      "Installer: make Alpine apk installs cover Git, verify the Node runtime floor, try `nodejs-current`, and report Alpine version guidance when repositories only provide older Node packages.",
      "Agents/status: prefer the active Claude CLI OAuth auth label over an unused Anthropic env API-key label for equivalent runtime aliases. Fixes #80184. (#86570) Thanks @brokemac79.",
      "Agents/media: send direct fallback for generated media still missing after an active requester wake fails. (#85489) Thanks @fuller-stack-dev.",
      "Agents: derive overflow compaction budgets from provider-reported and synthetic over-budget token counts so confirmed context overflows compact before retrying. (#70473) Thanks @fuller-stack-dev.",
      "Agents/Codex: recover Codex context-window prompt errors through overflow compaction and surface reset guidance when recovery is exhausted. (#85542) Thanks @fuller-stack-dev.",
      "Agents/Codex: allow Codex app-server runs to bootstrap from `CODEX_API_KEY` or `OPENAI_API_KEY` when no Codex auth profile is configured.",
      "Agents/Codex: keep selected Codex runtime routing on OpenAI-Codex while preserving direct OpenAI API-key compaction fallback. (#86408) Thanks @funmerlin and @VACInc.",
      "Agent transcript: include OpenClaw agent session logs when finding local transcript candidates.",
      "Crabbox: bootstrap raw AWS macOS shell commands wrapped in absolute `time` paths so RSS probes can run Node and pnpm on fresh macOS runners.",
      "Crabbox: bootstrap raw AWS macOS shell commands even when setup statements precede Node or pnpm usage.",
      "TUI/local: skip unnecessary secret resolution, gateway model catalog loading, bootstrap, and skill scans in explicit local-model runs so startup reaches the model request faster.",
      "Sessions/doctor: load large session stores without clone amplification during read-only doctor checks and reclaim stale `sessions.json.*.tmp` sidecars. Fixes #56827. Thanks @openperf.",
      "Tests: clean successful plugin gateway gauntlet isolated temp roots while keeping an explicit preservation switch for failed/debug runs.",
      "Plugins/perf: reuse derived plugin metadata snapshots for the lifetime of the process so reply-time skill setup no longer rescans plugin metadata on every turn.",
      "Discord/OpenAI voice: keep wake-name master consults using the current speaker context after ignored ambient transcripts and shorten the default capture silence grace.",
      "Doctor: skip redundant Gateway restart prompts when a recent supervisor restart leaves the Gateway healthy. Fixes #86518. (#86533) Thanks @liaoyl830.",
      "Cron: restore suspended cron lanes to the configured/default concurrency instead of falling back to one after quota or circuit-breaker auto-resume.",
      "Gateway: keep session-only Control UI tool-start mirrors flowing during diagnostic queue pressure instead of silently dropping non-terminal tool updates.",
      "Agents/memory: return optional not-found context for missing date-only daily memory reads instead of logging benign first-run `ENOENT` failures. Fixes #82928. Thanks @galiniliev.",
      "Discord: merge streamed text captions into following media block replies so captions and attachments send as one message. (#86487) Thanks @neeravmakwana.",
      "Gateway: avoid sending duplicate tool-event frames to Control UI connections that are subscribed by both run and session.",
      "Discord/OpenAI voice: accept broader edge-position fuzzy wake-name transcripts while keeping ambient speech gated.",
      "Discord/OpenAI voice: accept longer leading wake-name mistranscripts such as \"Open Club\" for OpenClaw.",
      "Agents/OpenAI-compatible: stop ModelStudio-compatible chat requests before sending system/tool-only payloads that have no usable user or assistant turn. (#86177) Thanks @TurboTheTurtle.",
      "Gateway/plugins: reuse plugin package realpath checks while building installed plugin indexes so startup avoids repeated filesystem resolution work.",
      "Kilo Gateway: send string `stop` sequences as arrays so Kilo accepts OpenAI-compatible chat completions. (#86461) Thanks @SebTardif.",
      "Discord/OpenAI voice: accept leading fuzzy wake-name transcripts such as \"Monty\" or \"Moti\" for a Molty agent while keeping ambient speech gated.",
      "Media understanding: convert HEIC and HEIF images to JPEG before image description providers run so iPhone photos work in direct and configured image-description flows. (#86037)",
      "Agents: release embedded-attempt session locks from outer teardown so post-prompt exceptions cannot wedge later requests behind `SessionWriteLockTimeoutError`. Fixes #86014. Thanks @openperf.",
      "Discord/OpenAI voice: rotate Realtime sessions at provider max duration without logging the expected session-expiry event as an error.",
      "Sessions: skip metadata-only entries during QMD-slugified session lookup so one incomplete row does not block transcript hit resolution. (#86327) Thanks @abnershang.",
      "Agents/media: derive bundled plugin local-media trust from plugin tool metadata instead of importing the full plugin registry on subscription paths. (#84409) Thanks @samzong.",
      "Image tool: keep config-backed custom-provider API keys usable for auto-discovered vision models, including deferred image-tool execution without env keys or auth profiles. (#85733)",
      "Memory/local embeddings: run local GGUF embeddings in an isolated worker sidecar and degrade to configured fallback or keyword search on worker failure so native embedding crashes do not take down the Gateway. (#85348) Thanks @osolmaz.",
      "Gateway: clear the runtime config snapshot before `SIGUSR1` in-process restarts so config changes survive the next gateway loop. (#86388) Thanks @XuZehan-iCenter.",
      "Models: show OAuth delegation markers as configured `models.json` auth while keeping runtime route usability checks strict. (#86378) Thanks @rohitjavvadi.",
      "Cron: seed active scheduled and manual cron task rows with a progress summary so status surfaces do not look blank while jobs run. (#86313) Thanks @ferminquant.",
      "Cron: preserve unsupported persisted cron payload rows during routine store writes while keeping those rows non-runnable. Fixes #84922. (#86415) Thanks @IWhatsskill.",
      "Updater: exclude prerelease git tags from stable channel resolution so source updates do not check out newer alpha/rc/preview/canary tags. (#86260) Thanks @stevenepalmer.",
      "Security/Audit: flag webhook `hooks.token` reuse of active Gateway password auth in `openclaw security audit` while keeping password-mode startup compatibility. (#84338) Thanks @coygeek.",
      "QQBot: derive the outbound reply watchdog from configured agent and provider timeouts so slow local model replies are not cut off at five minutes. Fixes #85267. (#85271) Thanks @SymbolStar.",
      "Agents/heartbeat: stop heartbeat turns after the first valid `heartbeat_respond` so repeated response loops do not burn tokens. (#86357) Thanks @udaymanish6.",
      "Tasks: keep retained lost tasks out of default status health counts, explain their cleanup window during maintenance, and prune lost task records after 24 hours instead of the general 7-day terminal retention.",
      "Memory-core: keep REM dreaming focused on live light-staged memories and mark staged entries as considered so old recall history no longer dominates fresh candidates. (#86302) Thanks @SebTardif.",
      "Memory: abort sync instead of downgrading an existing semantic vector index to FTS-only when the configured embedding provider is temporarily unavailable. (#85704) Thanks @yaaboo-gif.",
      "Telegram: propagate forum topic names through the account-scoped topic cache for native command context and topic create/edit actions. (#86299) Thanks @SebTardif.",
      "Slack: keep downloaded read-only files out of reply media so Slack file reads do not echo files back to the conversation. (#86318) Thanks @neeravmakwana.",
      "Cron: accept leading-plus relative durations such as `+5m` for one-shot `--at` schedules. (#86341) Thanks @mushuiyu886.",
      "Agents/media: preserve async-started media tool metadata so background generation starts no longer surface generic incomplete-turn warnings while replay stays unsafe. (#85933) Thanks @fuller-stack-dev.",
      "Docker E2E: dedupe scheduler lane resources so npm/service package lanes are not over-counted and serialized unnecessarily.",
      "QA/diagnostics: add a collector-backed OpenTelemetry smoke lane, make the OTLP payload leak check scenario-aware, and keep source QA builds from failing on optional dependency imports resolved through pnpm's temp module path.",
      "Crabbox: bootstrap Git metadata for sparse remote changed gates so raw synced workspaces can run `pnpm check:changed` from the intended diff.",
      "xAI/LM Studio: avoid buffering ordinary bracketed or `final` prose until stream completion while watching for plain-text tool-call fallbacks.",
      "Doctor: warn and continue when the cron job store exists but cannot be read so later health checks still run. Fixes #86102. (#86384) Thanks @1052326311.",
      "Discord: suppress a bot's previous reply body and referenced media from prompt context when a user replies to that bot message, while keeping reply metadata for routing. (#86238) Thanks @fuller-stack-dev.",
      "Discord: restore bare numeric channel IDs for outbound message-tool sends while keeping explicit DM targets unambiguous. (#86571) Thanks @joshavant.",
      "Docker E2E: avoid rebuilding the Control UI twice while preparing the shared OpenClaw package tarball for package-backed scenario runs.",
      "Tests: avoid rebuilding the Control UI twice during the installer Docker smoke now that `pnpm build` includes `ui:build`.",
      "Tests: give QA config mutation RPCs enough native Windows budget to finish gateway config writes and restart settle after hot scenario runs.",
      "Tests: keep the gateway restart-inflight QA scenario focused on restart recovery on native Windows by allowing expected embedded prompt handoff errors and using the Windows-safe timeout budget.",
      "QA-Lab: make the synthetic OpenAI provider honor generic `reply exactly:` directives after required kickoff reads so restart-recovery scenarios do not fall through to generic repo-summary prose.",
      "Gateway: abort active `agent` RPC runs during forced restart shutdown so stale in-process turns cannot keep writing a session after the Gateway lifecycle restarts.",
      "Crabbox: sync clean sparse worktrees through a temporary full checkout even when reusing an existing lease so tracked build-time files are not omitted.",
      "Build: route `scripts/ui.js` through the shared pnpm runner and keep Control UI chunking helpers in sparse-included source so native Windows Corepack builds can produce `dist/control-ui`.",
      "Tests: give the memory fallback QA scenario enough turn budget to exercise native Windows gateway runs instead of failing on the client timeout while the mock agent is still dispatching.",
      "Tests: collect QA gateway CPU/RSS metrics on native Windows and give the channel baseline enough turn budget to report slow gateway runs instead of timing out before proof.",
      "Install/update: bypass npm `min-release-age` policies with `--min-release-age=0` instead of `--before` so hosted installers keep working on npm versions that reject the combined config. (#84749) Thanks @TeodoroRodrigo.",
      "Diagnostics: reclaim wedged session lanes when stale active-run bookkeeping blocks queued work despite no forward progress. Fixes #85639. Thanks @openperf.",
      "WebChat: keep message-tool replies visible in the chat while still summarizing internal tool results for the model. Fixes #86347. Thanks @shakkernerd.",
      "Gateway/perf: fail startup benchmark samples when the Gateway process exits before benchmark teardown, including signal deaths after readiness probes.",
      "Gateway/perf: fail restart benchmark samples when the Gateway exits before benchmark teardown, including clean exits and signal deaths after successful restart probes.",
      "Agents/tests: keep model catalog visibility on static selection helpers so catalog visibility checks avoid the broad model-selection barrel import.",
      "Agents/commitments: serialize commitment store load-modify-save writes so concurrent heartbeat and CLI updates no longer lose dismissal, sent, or attempt state. (#81153) Thanks @ai-hpc.",
      "xAI/LM Studio: promote plain-text tool-call fallbacks into structured tool calls and strip leaked internal tool syntax before user-facing delivery. (#86222) Thanks @fuller-stack-dev.",
      "CLI: suppress benign self-update version-skew warnings during package post-update finalization.",
      "Gateway/perf: tighten restart and startup benchmark failure handling so long profiling runs, failed probes, and fresh Linux runners no longer produce false passing or `n/a` results.",
      "Checks: keep intentional Knip unused-file findings optional so full CI and sparse proof workspaces stay aligned.",
      "Docker: restore writable `~/.config` in runtime images. Fixes #85968. Thanks @hkoessler and @Bartok9.",
      "Plugin SDK: keep legacy root diagnostic subscriptions connected when built plugin SDK aliases resolve diagnostic helpers through a separate module graph.",
      "Diagnostics: export alertable OTel and Prometheus signals for blocked tools, model failover, stale sessions, liveness warnings, oversized payloads, and webhook ingress while fixing shared OTLP endpoints with query strings.",
      "Tests: normalize macOS canonical temp paths in exec allowlists, fs-safe trash assertions, installed plugin matching, Telegram topic-name stores, and built ACPX MCP server expectations so native macOS proof runners cover the intended behavior.",
      "Codex/app-server: preserve message-tool-only source reply delivery mode on active runs so sub-agent completion wakeups can steer the active Codex turn instead of being rejected. (#86287) Thanks @ferminquant.",
      "Tests: sample the Windows kitchen-sink RPC gateway directly and serialize RSS probes so native runs keep the memory guard active.",
      "Tests: normalize bundled plugin lifecycle probe paths and state-root lookup so native Windows release sweeps accept valid packaged plugin installs.",
      "Agents/Claude CLI: route live native Bash permission requests through OpenClaw exec policy so Claude turns no longer stall on `control_request`, and document that OpenClaw exec policy is authoritative. Fixes #80819. (#86330, from #81971) Thanks @guthirry and @sallyom.",
      "Security audit: warn when YOLO OpenClaw exec policy overrides a restrictive raw Claude `--permission-mode` for managed live sessions. (#86557) Thanks @sallyom.",
      "Config: keep benign legacy metadata write anomalies out of default doctor and config command output while preserving explicit anomaly logging for diagnostics.",
      "Codex: log when implicit app-server `never` approvals are promoted for OpenClaw tool policy, including whether the trigger was a `before_tool_call` hook or trusted tool policy.",
      "Codex harness: make subscription usage-limit errors without reset times explain that OpenClaw cannot determine the reset and point users to wait until Codex is available, use another Codex account, or switch to another configured model/provider. Thanks @amknight.",
      "Google Vertex: support production ADC modes such as Workload Identity Federation, service-account credentials, and metadata-server ADC for the native Vertex transport. (#83971) Thanks @damianFelixPago.",
      "Telegram: route normal `[telegram][diag]` polling diagnostics through `runtime.log` while keeping non-diag warnings and persistence failures on `runtime.error`, so healthy polling startup no longer looks like an error. Fixes #82957. (#82958) Thanks @galiniliev.",
      "Providers/Ollama: strip inline Kimi cloud reasoning prefixes from streamed and final visible replies while keeping ordinary Kimi answers append-only. (#86286) Thanks @jason-allen-oneal.",
      "Gateway: require Talk secret authority before setup-code handoff can include Talk secrets. (#85690) Thanks @ngutman.",
      "Agents: keep fallback error reporting scoped to the active model candidate so stale prior-provider quota/auth text is not reported for later fallback attempts. (#86134) Thanks @zhangguiping-xydt.",
      "iMessage: dedupe watcher startup when `channels.imessage.accounts` lists both `default` and a named account that point at the same local Messages source, so the gateway no longer spawns two `imsg rpc` processes or doubles inbound replies; the dedupe is scoped to watcher startup, leaving duplicate accounts addressable for outbound sends, status, and capability listings, and `openclaw doctor` flags the redundant account with a rebinding hint. Fixes #65141. (#86705) Thanks @swang430."
    ]
  },
  {
    "version": "2026.5.22",
    "date": "2026.5.22",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522",
    "features": [
      {
        "title": "Gateway/perf",
        "description": "reuse process-stable channel catalog reads, avoid repeated bundled-channel boundary checks, and rotate gateway watch CPU profiles so benchmark runs do not accumulate unbounded artifacts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Gateway/perf",
        "description": "reuse immutable plugin metadata snapshots across startup, config, model, channel, setup, and secret metadata readers so hot paths avoid repeated plugin file stats and manifest registry reloads.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Gateway/perf",
        "description": "lazy-load startup-idle plugin work, core gateway method handlers, and the embedded ACPX runtime so Gateway health and ready signals no longer wait on unused handler trees or ACPX probes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Gateway/perf",
        "description": "cache plugin SDK public-surface alias maps and skip irrelevant macOS Linuxbrew PATH probes so Gateway startup avoids repeated filesystem walks and slow missing-directory stats.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Transcripts",
        "description": "add the initial transcript capture and source-provider foundation, including auto-start capture config, manual transcript imports, read-only transcript access, and Discord voice as the first live source.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs/channels/config",
        "description": "add Signal `configPath`, Telegram wildcard topic defaults, local-time backup archive names, Termux home fallback, include-path validation, secret-scanner-safe placeholder guidance, Gemini CLI/Antigravity media guidance, and macOS VM auto-login guidance. Thanks @NorseGaud, @yudistiraashadi, @huangqian8, @VibhorGautam, @maweibin, @tianxingleo, @IgnacioPro, and @xzcxzcyy-claw.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify model-usage portability, Codex migration prerequisites, status bootstrap wording, thread-bound subagent limits, hook ownership, and config-preserving safety guidance. Thanks @aniruddhaadak80, @leno23, @TomDjerry, @matthewxmurphy, @vincentkoc, and @stablegenius49.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify README onboarding and Gateway startup paths, WhatsApp QR/408 recovery, cron output language prompts, skill advanced features, gateway upstream 403 troubleshooting, and plugin fallback override guidance. Thanks @deepujain, @Zacxxx, @Jah-yee, @neyric, @usimic, @Renu-Cybe, @BigUncle, and @SeashoreShi.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify context-pruning ratio bounds, local dashboard recovery, CLI env markers, remote onboarding token behavior, and Peekaboo Bridge permissions for subprocess agents. Thanks @ayesha-aziz123, @dishraters, @hougangdev, and @brandonlipman.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify browser CDP diagnostics, Plugin SDK allowlist imports, status-reaction timing defaults, queue steering behavior, limited-tool troubleshooting, cron HEARTBEAT handling, Telegram multi-agent groups, Bitwarden SecretRef setup, and EasyRunner deployments. Thanks @Quratulain-bilal, @mbelinky, @Mickey-, @vancece, @xenouzik, @posigit, @surlymochan, @janaka, and @choiking.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Crabbox/Testbox",
        "description": "run clean sparse-checkout Testbox syncs from a temporary full checkout and route remote changed gates through Corepack pnpm.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify IPv4-only Gateway BYOH binding, trusted-proxy scope clearing, Android pairing approval, macOS Accessibility grants, Zalo profile env vars, password-store SecretRef setup, and Chinese memory navigation. Thanks @itskai-dev, @gwh7078, @longstoryscott, @MoeJaberr, and @yuaiccc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "consolidate GLM under Z.AI, add the Upstash Box install guide and Gateway exposure runbook, clarify MEDIA directives, Copilot and Voyage setup, config path quoting, real behavior proof, and memory-file write guidance. Thanks @BobDu, @alitariksahin, @Jefsky, @musaabhasan, @OmerZeyveli, @leno23, @WuKongAI-CMU, @luoyanglang, and @majin1102.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Docs",
        "description": "clarify media provider credentials, Codex/OpenClaw code-mode boundaries, Slack and Telegram ack reactions, Feishu dynamic agents, secrets plaintext boundaries, memory guidance, and Chinese glossary terms. Thanks @nielskaspers, @cosmopolitan033, @drclaw-iq, @alexgduarte, @zccyman, @chengoak, and @cassthebandit.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Packaging",
        "description": "exclude documentation images and assets from the npm tarball, reducing published package size without affecting runtime docs search or CLI behavior. Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Media understanding",
        "description": "stop auto-probing Gemini CLI and use Antigravity CLI only as a lower-priority image/video fallback after configured provider APIs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Agents/subagents",
        "description": "limit default sub-agent bootstrap context to `AGENTS.md` and `TOOLS.md`, keeping persona, identity, user, memory, heartbeat, and setup files out of delegated workers by default. (#85283) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/85283"
      },
      {
        "title": "Maintainer skills",
        "description": "exclude plugin SDK/API boundary work from `openclaw-landable-bug-sweep` so bugbash sweeps stay focused on small paper-cut fixes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab/diagnostics",
        "description": "extend the OpenTelemetry smoke harness to prove trace, metric, and log export, and add first-class Prometheus and observability smoke aliases.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Plugin SDK",
        "description": "add a generic channel-message poll sender so channel plugins can expose poll delivery without depending on channel-specific SDK facades.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Crabbox",
        "description": "keep the local wrapper's provider validation synced with the installed Crabbox binary while preserving supported aliases such as `docker` and `blacksmith`. (#85302) Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/85302"
      },
      {
        "title": "Maintainer skills",
        "description": "add `openclaw-landable-bug-sweep` for producing five small, reviewed, CI-green OpenClaw bugfix PRs from issue/PR sweeps.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Control UI/chat",
        "description": "add search and Load More pagination to the chat session picker, keeping initial session loads bounded while making older conversations reachable. (#85237) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/pull/85237"
      },
      {
        "title": "CLI/onboarding",
        "description": "start classic onboarding when bare `openclaw` runs before an authored config exists, while keeping configured installs on Crestodian. (#72343) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/72343"
      },
      {
        "title": "Agents/runtime",
        "description": "internalize the former Pi agent runtime into OpenClaw, remove legacy package dependencies, and keep Pi-named SDK aliases only as deprecated plugin compatibility.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Discord",
        "description": "allow configuring a bounded `agentComponents.ttlMs` callback registry lifetime for long-running component workflows, with per-account overrides and a 24-hour cap. (#84189) Thanks @100menotu001.",
        "href": "https://github.com/openclaw/openclaw/pull/84189"
      },
      {
        "title": "xAI/Grok",
        "description": "reuse xAI OAuth auth profiles for Grok `web_search`, thread active-agent auth through web search, add Grok model aliases, and let media providers declare default operation timeouts. (#85182) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/85182"
      },
      {
        "title": "Plugin SDK",
        "description": "add row-level session workflow helpers and deprecate `loadSessionStore` so plugins can read and patch sessions without depending on the legacy whole-store shape. (#84693) Thanks @efpiva.",
        "href": "https://github.com/openclaw/openclaw/pull/84693"
      },
      {
        "title": "Gateway/plugins",
        "description": "reuse a compatible Gateway startup plugin registry during dispatch so safe plugin dispatches avoid redundant registry loading. (#84324) Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/84324"
      },
      {
        "title": "Plugins/SDK",
        "description": "add a general `embeddingProviders` capability contract and registration API so embeddings can become a reusable provider surface outside memory-specific adapters.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Dependencies",
        "description": "refresh provider, plugin, UI, and tooling packages, update `protobufjs` to 8.4.0 to clear the current npm advisory, and carry the Claude ACP completion patch forward to `@agentclientprotocol/claude-agent-acp` 0.36.1.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Agents/tools",
        "description": "remove the old sender-owner tool gating path so configured tools stay visible for trusted sessions while command and channel-action auth still carry real sender identity.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "add curated mock JSONL replay fixtures and first-drift reporting for runtime-parity audits. (#80323, refs #80176) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80323"
      },
      {
        "title": "QA-Lab",
        "description": "add a QA bus tool-trace visibility scenario for sanitized tool-call assertions.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "replace generic evidence framing in seeded scenario prompts with concrete observed QA behavior.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "list named scenario packs in the coverage report so personal-agent privacy coverage stays visible in audits.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "list live transport lane membership in the coverage report so real transport checks stay separate from seeded qa-channel scenarios.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Release/package",
        "description": "run package integrity checks before package acceptance lanes so public install/update validation fails before private QA assets can leak into the package.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "include the optional 100-turn runtime parity soak in release-soak artifacts so long-run Codex/Pi transcript drift stays visible outside the default gate. (#80395) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80395"
      },
      {
        "title": "QA-Lab",
        "description": "add a live-only long-context progress watchdog scenario for Codex app-server timeout and stalled-run sentinels. (#80323) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80323"
      },
      {
        "title": "QA-Lab",
        "description": "tag gateway restart recovery and streaming final-integrity scenarios as live-only runtime parity lanes. (#80323) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80323"
      },
      {
        "title": "QA-Lab",
        "description": "add a personal-agent failure recovery scenario that checks honest partial status, retry boundaries, and local recovery artifacts. (#83872) Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/pull/83872"
      },
      {
        "title": "QA-Lab",
        "description": "include an opt-in `update.run` package self-upgrade sentinel for destructive latest-package recovery checks.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "QA-Lab",
        "description": "add Codex plugin lifecycle and auth-profile fixture coverage for missing installs, pinned-version drift, first-turn install ordering, and doctor migration safety. (#80323, refs #80174) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80323"
      },
      {
        "title": "Models/perf",
        "description": "pre-warm the provider auth-state map at gateway startup so `/models` and every model-listing call short-circuits the per-provider plugin / external-CLI discovery on the hot path. Per-call cost drops from ~20 s to ~5 ms (~4,100×); the one-time startup warm resets and re-warms after hot reloads. (#84816) Thanks @sjf.",
        "href": "https://github.com/openclaw/openclaw/pull/84816"
      },
      {
        "title": "Release/security",
        "description": "ship the root npm package and OpenClaw-owned npm plugins with generated shrinkwrap, support bundled plugin runtime dependencies for suitable plugin tarballs, and require review for lockfile/shrinkwrap changes so published installs use locked dependency graphs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026522"
      },
      {
        "title": "Tests/perf",
        "description": "isolate doctor core health check unit coverage from real skills/workspace discovery so `doctor-core-checks` no longer dominates unit perf while keeping one real skills-readiness smoke. (#84493) Thanks @frankekn.",
        "href": "https://github.com/openclaw/openclaw/pull/84493"
      }
    ],
    "fixes": [
      "WebChat: summarize internal message-tool source replies so tool cards no longer duplicate the visible reply body. (#84773) Thanks @jason-allen-oneal.",
      "Gateway: preserve deferred lifecycle-error cleanup across later non-terminal events so provider timeouts can persist failed session state instead of leaving sessions stuck running. (#85256, fixes #63819) Thanks @samzong.",
      "Agents/subagents: report tool-only child progress during timeout summaries instead of showing no visible output.",
      "Telegram/ACP: preserve explicit `:topic:` conversation suffixes when inbound ACP targets do not carry a separate thread id.",
      "Browser/proxy: bypass the managed proxy for the exact local managed Chrome CDP readiness and DevTools WebSocket endpoints, so `openclaw browser start` works when the operator proxy blocks loopback egress. (#83255) Thanks @lightcap.",
      "Ollama: bypass the managed proxy for configured local embedding origins while keeping SSRF guardrails on unconfigured targets. Thanks @Kaspre.",
      "OpenAI/images: route Codex API-key image generation through the native OpenAI Images API instead of the Codex OAuth streaming backend, avoiding 401s from valid API keys.",
      "Agents/OpenAI completions: omit empty tool payload fields for proxy-like OpenAI-compatible endpoints so strict vLLM-style servers accept tool-free turns. (#85835) Thanks @rendrag-git.",
      "Checks/Windows: route full `pnpm check` stage commands through the managed child runner so Windows avoids Node shell-argv deprecation warnings there too.",
      "Checks/Windows: run managed child commands through explicit `cmd.exe` wrapping instead of Node shell mode with argv, avoiding Node 24 subprocess deprecation warnings during changed checks.",
      "Gateway: omit internal stream-error placeholder entries from agent prompt history so failed assistant turns are not replayed as model-authored text. (#85652) Thanks @anyech.",
      "Sessions: enforce the session write-lock max-hold policy during lock acquisition so long-held locks can be reclaimed before the stale-lock window. (#85764) Thanks @njuboy11.",
      "Models: prune retired Groq, GitHub Copilot, OpenAI, xAI, and old Claude catalog entries, with doctor migration to upgrade existing configs to current provider refs.",
      "Doctor/update: recognize junction-backed source checkouts as git installs by comparing canonical paths before showing package-manager update guidance. Fixes #82215. Thanks @igormf.",
      "Channels: honor `/verbose on` for tool/progress summaries across direct chats, groups, channels, and forum topics while preserving quiet default behavior. (#85488) Thanks @kurplunkin.",
      "CLI/skills: show an all-ready note with next-step commands when skill setup has no missing dependencies to install. (#85032) Thanks @aniruddhaadak80.",
      "Microsoft Foundry: route DeepSeek V4 Pro and Flash models through the Foundry Responses API while keeping older DeepSeek models on their existing path. (#85549) Thanks @roslinmahmud.",
      "Status/usage: show configured cost estimates for AWS SDK models in full usage output while keeping token-only usage replies cost-free. (#85619) Thanks @ItsOtherMauridian.",
      "Agents/OpenAI Responses: retry non-visible reasoning-only turns for OpenAI Responses API families instead of treating them as empty failed turns. (#85603) Thanks @SebTardif.",
      "Directive tags: preserve message and content-part object identity when display stripping makes no directive-tag changes. (#85682) Thanks @willamhou.",
      "Telegram: send local `path`/`filePath` and structured attachment media from `sendMessage` actions instead of dropping them or sending text-only messages. (#85219) Thanks @keshavbotagent.",
      "Sessions/status: show the estimated context budget when fresh provider usage is unavailable and clear stale estimates across session resets and compaction boundaries. (#84830) Thanks @giodl73-repo.",
      "Gateway/config: pin relative `OPENCLAW_STATE_DIR` overrides to an absolute path at startup so later working-directory changes cannot retarget gateway state. (#52264) Thanks @PerfectPan.",
      "Release/package: run npm release, prepublish, and postpublish verification through Windows-safe npm command shims so native Windows checks can execute `npm.cmd` instead of treating it as a binary.",
      "Agents/harness: pass CLI runtime aliases through harness selection so provider-owned CLI aliases no longer get rejected before reaching the right runtime. (#85631) Thanks @potterdigital.",
      "Secrets: show the irreversible apply warning after interactive `secrets configure` confirmation so confirmed migrations still get the final safety prompt. (#85638) Thanks @alkor2000.",
      "Agents/CLI output: ignore cumulative Claude `stream-json` result usage when assistant usage events are present, preventing inflated cache-read accounting. (#85625) Thanks @zhouhe-xydt.",
      "CLI: keep `waitForever()` alive by leaving its keep-alive interval ref'd so the public helper no longer exits immediately with Node's unsettled-await code. (#85694) Thanks @m1qaweb.",
      "Agents/bootstrap: guard bootstrap name checks against missing file names so malformed bootstrap entries warn and truncate instead of crashing. Fixes #85523. (#85615) Thanks @zhouhe-xydt.",
      "CLI/tasks: reject partially numeric `openclaw tasks audit --limit` values so audit limits must be real positive integers instead of accepting strings like `5abc`. (#84901) Thanks @jbetala7.",
      "Status/diagnostics: bound deep Docker audit probes so `openclaw status --deep` reports slow container checks instead of hanging behind unbounded inspection. (#85476) Thanks @giodl73-repo.",
      "Providers/Anthropic: migrate 1M context handling to GA-capable Claude 4.x models by sizing eligible models at 1M without the retired `context-1m-2025-08-07` beta, ignoring that retired beta in older configs, and preserving OAuth-required Anthropic beta headers. (#45613) Thanks @haoyu-haoyu.",
      "Cron/Telegram: parse forum-topic delivery targets through the Telegram plugin instead of cron core, including `:topic:` and `:topicId` forms for announce delivery. Thanks @etticat.",
      "Twitch: keep stale message-handler cleanup callbacks from removing newer handler registrations for the same account, preserving inbound message delivery after reconnects. Fixes #83888. (#85425) Thanks @alkor2000.",
      "Memory/LanceDB: expose public memory artifacts through the active memory provider bridge so memory-wiki imports durable memory files, daily notes, dream reports, and event logs without depending on memory-core internals. Fixes #83604. (#85060) Thanks @brokemac79.",
      "Crabbox: keep AWS hydration compatible with local Actions replay by inlining the hydrate workflow's Node/pnpm setup instead of invoking repo-local composite actions.",
      "Agents/subagents: simplify native sub-agent completion handoff so children report their latest visible assistant result to the requester without using `message`, while keeping parent-owned message-tool delivery policy intact. Fixes #85070. (#85089) Thanks @brokemac79.",
      "Docker setup: stop printing the Gateway bearer token in setup logs and printed follow-up commands.",
      "Agents: let embedded compaction fallback retries proceed when PI-compatible candidates do not need agent harness plugin preparation.",
      "Agents/tools: honor configured custom provider API keys when deciding whether media, image-generation, video-generation, music-generation, and PDF tools are available. (#85570)",
      "StepFun: stop advertising stale generic API key auth choices so onboarding only offers runtime-backed Standard and Step Plan choices.",
      "Diagnostics: keep OpenTelemetry log bodies behind explicit content capture and scrub scoped agent-session keys from OpenTelemetry and Prometheus labels while preserving bounded queue-lane prefixes.",
      "Windows installer: fail Git checkout installs when `pnpm install` or `pnpm build` fails instead of writing a wrapper to a missing CLI build.",
      "Sessions: surface previous-transcript archive failures during `/new` rotation so disk rename errors are logged instead of silently hiding stranded transcript files. Fixes #81984. (#85586, from #82081) Thanks @0xghost42.",
      "TUI/agents: mirror internal-ui message-tool replies into final chat output so message-tool-only agents remain visible in `openclaw tui`. Fixes #85538. Thanks @danpolasek.",
      "Agents: keep parallel OpenAI-compatible tool-call deltas in separate argument buffers so interleaved tool calls no longer corrupt streamed arguments. (#82263) Thanks @luna-system.",
      "Memory/doctor: report missing or unusable QMD workspace directories as workspace failures instead of generic binary failures. (#63167) Thanks @sercada.",
      "Debug proxy: record CONNECT client-socket errors and destroy the paired upstream socket so abrupt client disconnects no longer leak tunnel resources. (#82444) Thanks @SebTardif.",
      "Diffs: continue hydrating later diff cards when one card fails so a single broken card no longer blanks the whole diff viewer. (#84775) Thanks @cosmopolitan033.",
      "Mac app: use the native settings sidebar window chrome so the sidebar toggle stays on the left and content no longer clips under oversized titlebar padding.",
      "QA-Lab/Codex: bundle auth/plugin fixture imports for flow scenarios and let terminal async media tools end Codex app-server turns without timing out. (#80397, refs #80323) Thanks @100yenadmin.",
      "Gateway/agents: preserve fresh session overrides and metadata when stale cached agent-session entries race with store updates, so subagent model/provider overrides and routing policy survive concurrent writes. (#19328) Thanks @CodeReclaimers.",
      "Control UI/chat: keep chat session search inline with the session selector so the header no longer shows a duplicate standalone search row.",
      "Control UI/chat: collapse focused-mode header chrome and suppress hidden-header scroll updates so focus mode no longer jumps while scrolling. Thanks @amknight.",
      "Codex app-server: restart the native app-server and retry once when server-side compaction times out, so preflight compaction stalls recover instead of failing every dispatch. (#85500)",
      "Restore Control UI gateway token pairing [AI]. (#85459) Thanks @pgondhi987.",
      "OpenAI video: honor configured provider request private-network opt-in for local/custom video endpoints so explicitly trusted mock and self-hosted providers are not blocked. Thanks @shakkernerd.",
      "OpenAI video: send uploaded video edit requests to the documented `/videos/edits` endpoint with a `video` file instead of posting MP4 references to `/videos`. Thanks @shakkernerd.",
      "Agents/channels: preserve message-tool delivery evidence through gateway agent completion handoffs so successful generated media sends are not followed by false failure messages. Thanks @shakkernerd.",
      "CLI/update: repair managed npm plugin `openclaw` peer links during post-core convergence and reject stale or wrong-target peer links before restart. (#83794) Thanks @fuller-stack-dev.",
      "CLI/agents: default new omitted-account bindings to all accounts when the channel has multiple configured accounts, and clarify account-scope docs. (#49769) Thanks @Gcaufy.",
      "Codex app-server: let authorized `/codex` control commands such as `/codex detach` escape plugin-owned conversation bindings while keeping unknown or unauthorized slash text routed to the bound plugin. Fixes #85157. (#85188) Thanks @TurboTheTurtle.",
      "Auto-reply/models: keep `/models` browse replies fast by sharing the bounded read-only catalog path with Gateway model listing. (#84735) Thanks @safrano9999.",
      "Codex app-server: disable native Code Mode when the effective exec host is `node` and keep OpenClaw `exec`/`process` available, so `/exec host=node` routes shell commands through the selected node instead of the gateway. Fixes #85012. (#85090) Thanks @sahilsatralkar.",
      "Agents: bound embedded auto-compaction session write-lock watchdogs to the compaction timeout instead of the full run timeout, so stuck compaction cannot hold the live session lock for the whole run window. (#84949) Thanks @luoyanglang.",
      "Gateway/agents: return phase-aware `agent.wait` timeout attribution and only cool auth profiles on provider-started timeouts. Refs #65504. Thanks @100yenadmin.",
      "Gateway: defer provider auth-state prewarm until after startup readiness so early gateway tool/session requests are not blocked by provider auth discovery. (#85272) Thanks @dutifulbob.",
      "Gateway/models: coalesce provider auth-state rewarms after auth-profile failures and log event-loop delay for warm/rewarm work, so provider auth bursts no longer stack full auth sweeps behind channel replies.",
      "Gateway/models: stop cancelled provider auth-state prewarms from continuing full provider sweeps, so reload and auth-failure bursts no longer keep startup busy.",
      "Agents/Codex: show the first plan update as a transient chat status notice without counting it as final assistant content.",
      "CLI/update: walk the macOS process ancestry and honor the inherited Gateway runtime PID before package updates stop the managed Gateway service, so nested in-band updater children can refuse instead of killing the LaunchAgent-supervised Gateway that owns them. Fixes #85120.",
      "Gateway/LaunchAgent: wait for launchd reload bootout to finish and fall back to kickstart when bootstrap races, so reload handoff does not leave the service deregistered. Fixes #84630. (#84641) Thanks @NianJiuZst.",
      "Gateway/LaunchAgent: treat a concurrent launchd bootstrap as a successful restart when the service is already loaded, avoiding false macOS Gateway restart failures. Fixes #84721. (#84722) Thanks @googlerest.",
      "Gateway/service: include the active `openclaw` command bin directory in managed service PATH generation and doctor audit expectations for npm-global macOS installs. Fixes #84201. (#84475) Thanks @jbetala7.",
      "Control UI/chat: disable the thinking selector for known non-reasoning models instead of showing duplicate Off choices. Fixes #84069. Thanks @DrippingMellow.",
      "Memory: expand `~` in configured extra memory paths before resolving them, so home-relative folders are not treated as workspace-relative. Fixes #58026. Thanks @stadman.",
      "Skills: treat `openclaw.os: macos` as Darwin when checking skill requirements, so macOS-only skills no longer report as missing on macOS hosts. Fixes #61338. Thanks @Jessecq1995.",
      "Control UI/logs: strip ANSI escape sequences from displayed Gateway log messages so color codes no longer appear as raw text. Fixes #64399. Thanks @guguangxin-eng.",
      "Docker: pre-create the workspace and auth-profile config mount points with `node` ownership so first-run named volumes do not start root-owned. Fixes #85076. Thanks @Noerr.",
      "Telegram: pass configured markdown table mode through outbound markdown chunking so chunked sends render tables consistently. Fixes #85085. Thanks @ShuaiHui.",
      "CLI/update: preserve managed Gateway service environment during package cutovers so macOS LaunchAgent repair/restart reads the pre-update service state instead of caller shell state. (#83026)",
      "Agents/providers: honor per-model `api` and `baseUrl` overrides in custom provider auth hooks and transport selection. Fixes #80487. (#80488) Thanks @huveewomg.",
      "Gateway/restart: eager-load the lifecycle runtime before in-place upgrade signal handling so package replacement does not deadlock restart imports. (#84890) Thanks @myps6415.",
      "CLI/update: start managed Gateway update handoff helpers from a stable existing directory and tolerate deleted cwd/package roots during macOS LaunchAgent handoff. Fixes #83808. (#83875) Thanks @jason-allen-oneal.",
      "Skills: watch each shared skill directory once across agent workspaces instead of once per agent, preventing file-descriptor exhaustion (`EMFILE`) that disposed bundle-mcp processes and stalled sessions on multi-agent gateways. Fixes #84968. (#85130) Thanks @openperf.",
      "Release/security: keep generated npm shrinkwrap package versions inside the pnpm lock graph so published package locks cannot bypass pnpm dependency age and override policy.",
      "Cron: honor `cron.retry.retryOn: [\"network\"]` for common network error codes such as `EAI_AGAIN`, `EHOSTUNREACH`, and `ENETUNREACH`.",
      "Gateway chat: broadcast returned agent-run error payloads after an agent starts so ACP/WebChat clients receive terminal idle-timeout errors. Fixes #84945.",
      "Gateway chat display: preserve OpenAI-compatible `prompt_tokens`, `completion_tokens`, and `total_tokens` usage fields in sanitized chat history so llama.cpp sessions keep context counts. Fixes #77992. Thanks @MarTT79.",
      "Dashboard/CLI: allow macOS browser launching through `open` even when SSH environment variables are present, while preserving Linux SSH no-display protection. Fixes #67088. Thanks @theglove44.",
      "Codex app-server: keep native web search observations out of mirrored chat transcripts while preserving tool progress telemetry. Fixes #85109. Thanks @ugitmebaby.",
      "OpenCode Go: strip unsupported Kimi reasoning replay fields before provider requests so repeated `kimi-k2.6` turns do not fail schema validation. Fixes #83812. Thanks @Sleeck.",
      "Browser/CDP: add a WSL2 portproxy self-loop hint when Chrome DevTools endpoints accept connections but return an empty HTTP reply. Fixes #59209. Thanks @Owlock.",
      "Agents/OpenAI: preserve structured provider error code, type, and redacted body metadata on boundary-aware transport failures.",
      "Doctor/Codex: point native Codex asset warnings at the canonical `openclaw migrate plan codex` preview command. Fixes #84948. Thanks @markoa.",
      "CLI/models: make `capability model auth logout --agent` remove auth profiles from the selected non-default agent store. Fixes #85092. Thanks @islandpreneur007.",
      "Gateway/models: reuse prepared provider auth metadata during model-listing auth checks so repeated lookups avoid broad plugin discovery while preserving synthetic local auth.",
      "CLI/status: suppress systemd user-service setup hints when `openclaw status --deep` can already reach a running Gateway RPC service. Fixes #85094. Thanks @islandpreneur007.",
      "CLI/devices: recover local approval when a same-device repair request replaces the request ID being approved.",
      "CLI/agents: retry transient normal-close Gateway handshakes before falling back to embedded `openclaw agent` execution.",
      "CLI/update: keep managed Gateway service stop/restart status lines out of `openclaw update --json` stdout so package-update automation can parse the JSON payload.",
      "Plugins: resolve OpenClaw plugin SDK subpaths for native external plugin runtimes without mutating package installs or broadening process-wide module resolution.",
      "Agents/OpenAI: preserve Responses and Chat Completions `reasoning_tokens` usage metadata without double-counting it in aggregate output tokens. (#85319)",
      "Control UI/chat: convert pasted `data:image/...;base64,...` clipboard text into an image attachment instead of dumping the payload into the composer. Fixes #62604. Thanks @cpwilhelmi.",
      "Providers/Gemini: strip fractional seconds from web-search time range filters so Gemini accepts freshness-bound search requests. (#85071) Thanks @Noerr.",
      "OpenAI Codex: preserve image input support for sparse `openai-codex/gpt-5.5` catalog rows. (#85095) Thanks @sercada.",
      "CLI/models: add a piped or pasted API-key path for OpenAI Codex auth and warn when API keys are pasted into token-mode auth. (#85533) Thanks @joshavant.",
      "Telegram: dead-letter missing-harness isolated ingress failures so a poisoned spooled update no longer blocks later same-lane messages. Fixes #85470. (#85605) Thanks @joshavant.",
      "Plugins/discovery: strip `-plugin` package suffixes when deriving plugin id hints so package names line up with manifest ids. (#85170) Thanks @JulyanXu.",
      "Tlon: stop advertising a non-existent agent tool contract in the plugin manifest.",
      "Telegram: preserve fenced code block languages through Markdown rendering so Telegram receives `language-*` code classes. (#85209) Thanks @leno23.",
      "Windows installer: run npm and Corepack command shims from a Windows-local directory so installs launched from WSL2 UNC paths do not fail before OpenClaw is installed.",
      "Windows updates: roll back git-backed updates to the previous checkout when dependency install, build, UI build, or doctor repair fails.",
      "Windows installer: persist user-local portable Git on PATH and activate the repo-pinned pnpm version for git-backed installs and updates.",
      "Windows installer: bootstrap a user-local portable Node.js when native Windows has no Node and no winget, Chocolatey, or Scoop, so first-run installs can continue on raw hosts.",
      "Windows installer: extract the downloaded portable Node.js directory with native `tar` before falling back to .NET zip extraction, avoiding PowerShell 5.1 archive and path-length failures.",
      "fix(integrations): enforce channel read target allowlists [AI]. (#84982) Thanks @pgondhi987.",
      "Agents/heartbeat: route single-owner `session.dmScope=main` direct-message exec and cron event wakes back to the agent main session so async completions no longer strand context in orphan direct-DM queues. Fixes #71581. (#83743) Thanks @Kaspre.",
      "Agents/code-mode: expose outer code-mode `exec` source through the `command` hook alias with `toolKind`/`toolInputKind` discriminators so exec-shaped policies can distinguish code-mode cells. (#83483) Thanks @Kaspre.",
      "Agents/code mode: return structured timeout and runtime-unavailable error codes for known worker failures. Fixes #83389. (#83444) Thanks @Kaspre.",
      "QA-Lab: isolate multi-scenario suite workers when scenarios need startup config patches, preventing message-routing config from leaking into unrelated scenarios.",
      "QA-Lab: make the commitments heartbeat-target-none scenario request an immediate heartbeat instead of waiting for the next scheduled heartbeat.",
      "Codex/Plugin SDK: deliver Codex-native subagent completions through a generic harness task runtime so harness-backed plugins can mirror durable task lifecycle and completion delivery without Codex-specific SDK imports. (#83445) Thanks @bryanpearson.",
      "Gateway CLI: surface local post-challenge connect assembly failures immediately instead of waiting for the wrapper timeout. Fixes #68944. (#85253) Thanks @samzong.",
      "Messages: strip unsupported web-search citation control markers from outbound replies before they reach WebChat or external channels. Fixes #85193. (#85204) Thanks @neeravmakwana.",
      "Agents/exec: treat denied exec approvals as terminal instead of feeding them back into agent follow-up work, and recognize Chinese stop phrases in abort handling. Fixes #69386. (#85194) Thanks @samzong.",
      "CLI/agents: abort accepted Gateway-backed `openclaw agent` runs on SIGINT/SIGTERM so cron and supervisor timeouts do not leave remote agent work alive. Fixes #71710. (#84381) Thanks @Kaspre.",
      "Codex app-server: retry replay-safe stdio client-close turns once using structured failure metadata, while surfacing idle `turn/completed` timeouts instead of blindly replaying active shared-server turns. Thanks @VACInc.",
      "Codex app-server: reject command overrides that embed Node or package-manager arguments and point users to `appServer.args`, so Windows startup avoids shell parsing failures. (#84417) Thanks @TurboTheTurtle.",
      "Agents/Copilot: drop unsafe GitHub Copilot Responses reasoning replay items before send so Telegram direct sessions no longer fail on overlong replay IDs. Fixes #85197. (#85198) Thanks @galiniliev.",
      "UI: add accessible tooltips to the topbar color-mode buttons so System, Light, and Dark choices are labeled on hover and focus. (#85227) Thanks @amknight.",
      "fix: constrain Windows task script names [AI]. (#85064) Thanks @pgondhi987.",
      "Control UI: keep the chat session picker from hiding older or cross-agent configured conversations while preserving the bounded configured-agent refresh. (#85211) Thanks @amknight.",
      "Agents/Anthropic: preserve unsafe integer tool-call input values in streamed Anthropic tool-use JSON, preventing Discord-style IDs from being rounded before dispatch. Fixes #47229. (#83063) Thanks @leno23.",
      "Agents/Codex: estimate tool-heavy prompt pressure at the LLM boundary before provider submission, so persistent sessions compact before overflowing context windows. (#85541) Thanks @fuller-stack-dev and @joshavant.",
      "Agents/hooks: wait for local one-shot CLI and Codex `agent_end` plugin hooks before process cleanup so terminal observability flushes reliably. (#85007)",
      "Providers/Google: preserve Gemini 3 cron `thinkingDefault: \"low\"` when stale catalog metadata says `reasoning:false`, so scheduled runs keep provider-supported thinking instead of downgrading to off. (#85185) Thanks @neeravmakwana.",
      "CLI/agents: allow `openclaw agent --session-key` to target explicit session keys, including agent-scoped legacy keys. (#85121) Thanks @Kaspre.",
      "Auto-reply/ACP: wait for same-channel block reply delivery before starting tool work, while still honoring ACP dispatch aborts so stopped turns do not wait on slow channel sends. (#83722) Thanks @IWhatsskill.",
      "Codex/ACP: mark required child-run completions that only report progress, omit a final deliverable, or fail requester delivery as blocked while preserving real final reports. (#85110) Thanks @IWhatsskill.",
      "Channels: treat bare abort messages such as `stop`, `abort`, and `wait` as immediate control commands in inbound debounce paths so stop requests are not delayed behind pending message coalescing. (#83348) Thanks @IWhatsskill.",
      "Channels/message tool: resolve configured external channel plugins during in-agent channel selection, so `openclaw agent --local` message-tool sends no longer report an available channel as unavailable. (#85022) Thanks @Kaspre.",
      "Agents/heartbeat: honor group/channel `message_tool` visible-reply policy and model-specific Codex runtime config for scheduled heartbeat runs, so failed internal tool output stays private. Fixes #85310. (#85357) Thanks @neeravmakwana.",
      "Gateway/ACP: close child ACP sessions spawned via `sessions_spawn` when their parent session is reset or deleted, instead of leaving orphaned `claude-agent-acp` processes that accumulate and exhaust memory. Fixes #68916. (#85190) Thanks @openperf.",
      "Codex app-server: block native execution paths when OpenClaw exec resolves to a node host while preserving the first-party CLI node binding path. Fixes #85012. (#85534) Thanks @joshavant.",
      "Diagnostics: bound cleanup timeout detail logs, emit drop summaries when async diagnostic bursts exceed the queue cap, and surface async queue drops through diagnostic telemetry.",
      "Agents/subagents: surface blocked child-run completions as errors instead of successful subagent finishes. (#80886) Thanks @TurboTheTurtle.",
      "Context engines: fail closed with a descriptive error when the selected agent runtime cannot satisfy declared context-engine host requirements.",
      "Agents/Pi: treat accepted embedded `sessions_spawn` child-session handoffs as terminal progress so parent turns no longer report false non-deliverable failures. (#85054) Thanks @samzong.",
      "CLI/models: resolve `openclaw models set` aliases from the runtime config while keeping authored aliases ahead of runtime-only defaults. (#83262) Thanks @IWhatsskill.",
      "Doctor: show personal Codex CLI asset notices as info instead of warnings. Fixes #84859.",
      "WhatsApp: update Baileys to `7.0.0-rc13` and drop the obsolete logger type patch.",
      "CLI/update: pre-pack GitHub/git package update targets before the staged npm install, restoring `openclaw update --tag main` for one-off package updates. (#81296) Thanks @fuller-stack-dev.",
      "Gateway: mirror successful same-source message-tool sends into session transcripts so delivered replies stay in later history/context. (#84837) Thanks @iFiras-Max1.",
      "Media generation: keep image, music, and video completion delivery from duplicating or losing task ownership when generated media finishes through active session replies. (#84006) Thanks @fuller-stack-dev.",
      "Infra/json: retry transient `File changed during read` races while loading JSON state so config and state reads recover instead of failing the turn. (#84285)",
      "Plugins/providers: fail closed for workspace provider plugins during setup-mode discovery unless explicitly trusted, preventing untrusted workspace plugin code from running during provider setup. (#81069) Thanks @mmaps.",
      "Providers/Ollama: resolve configured Ollama Cloud `OLLAMA_API_KEY` markers to the real discovery key so cloud provider entries keep authenticated model catalog access. (#85037)",
      "Discord: keep persistent component registry fallback warnings actionable by forwarding structured error and cause metadata through the runtime logger. Fixes #84185. (#84190) Thanks @100menotu001.",
      "Gateway/sessions: preserve compatible session auth profile overrides when switching models within the same provider, including provider-auth aliases. Fixes #81837. (#81886) Thanks @TurboTheTurtle.",
      "Gateway/status: surface inbound delivery telemetry counters and transport-liveness warnings in `openclaw status --all`. Fixes #49577. (#72724)",
      "Docker: prune package-excluded plugin source workspaces and dependency closures so runtime images do not keep packages for plugins that were not opted in.",
      "Providers/Ollama: treat Docker/OrbStack host aliases as local Ollama endpoints so `ollama-local` marker auth works when OpenClaw runs inside a VM/container and Ollama runs on the host. Fixes #84875.",
      "QA-Lab: keep explicitly searchable/deferred OpenClaw dynamic tool rows report-only by default so tool-coverage gates do not treat mock discovery gaps as hard product failures. (#80319) Thanks @100yenadmin.",
      "Agents/config: keep non-Google provider model refs from being rewritten by Google Gemini preview-id normalization. (#84762) Thanks @zhangguiping-xydt.",
      "Installer: require a real controlling terminal before launching onboarding so headless `curl | bash` installs finish cleanly after installing the CLI.",
      "Agents/Codex: promote a completed final assistant response when a prompt timeout races Codex app-server completion instead of returning an empty timeout envelope. Refs #84516.",
      "Codex app-server: keep interrupted turn statuses from being treated as OpenClaw aborts by themselves, so tool-only turns remain eligible for no-visible-answer recovery. Fixes #84492.",
      "Agents: cap heartbeat model bleed context hints by the stored session window when runtime model metadata is unavailable, so overflow recovery advice does not suggest a larger window than the active session actually has.",
      "Control UI/Web Push: use `https://openclaw.ai` as the generated default VAPID subject instead of the old localhost mailbox so iOS PWA push setup uses an Apple-acceptable subject when `OPENCLAW_VAPID_SUBJECT` is unset. Fixes #83134. (#83317) Thanks @IWhatsskill.",
      "Control UI: distinguish inherited thinking-off settings from explicit Off selections so the thinking selector no longer shows two identical Off rows. (#85223) Thanks @amknight.",
      "Agents/Pi: keep embedded session transcript writes from tripping false takeover detection after packaged npm onboarding agent turns.",
      "Codex/TUI: surface Codex-native post-turn compaction failures instead of continuing uncompacted, and keep successful native compaction serialized before local idle/next-turn handling. Fixes #84305. (#85160) Thanks @joshavant.",
      "Memory/search: stop recall tracking from writing dreaming side-effect artifacts when `dreaming.enabled=false`, while preserving normal search results. Fixes #84436. (#84444) Thanks @NianJiuZst.",
      "Diffs: render viewer toolbar icons from a closed icon-name map instead of HTML strings, removing the toolbar icon XSS sink. (#83955) Thanks @tanshanshan.",
      "QA: keep `pnpm qa:e2e` self-check runs inside the private QA runtime envelope even when inherited shell env disables bundled plugins.",
      "fix(config): validate browser sandbox bind sources [AI]. (#84799) Thanks @pgondhi987.",
      "doctor: constrain legacy plugin cleanup paths [AI]. (#84801) Thanks @pgondhi987.",
      "Update/doctor: prune stale local bundled plugin install records that point at old compiled bundled output so current bundled plugin schemas win after upgrade. (#84863) Thanks @fuller-stack-dev.",
      "Providers/Ollama: preserve native Ollama tool-call IDs across assistant replay so Gemini over Ollama Cloud can keep its hidden function-call thought-signature handle.",
      "Discord: keep session recovery and `/stop` abort ownership on the source dispatch lane while bound ACP turns continue routing to their target session, so stalled pre-run work and late replies are cleared instead of leaking after stop. Fixes #84477. (#85100) Thanks @joshavant.",
      "Codex app-server: mark missing turn completion after observed execution as replay-unsafe and release the session so follow-up turns can run. Fixes #84076. (#85107) Thanks @joshavant.",
      "Codex app-server: give visible `message` dynamic tool sends a longer timeout budget so slow channel delivery can return its own result or error instead of hitting the 30-second Codex wrapper. (#85216) Thanks @amknight.",
      "Codex app-server: add a dedicated post-tool raw assistant completion idle timeout config so trusted heavy turns can wait longer after tool handoff without weakening final assistant release.",
      "Matrix: keep explicitly configured two-person rooms on the room route before stale `m.direct` or strict two-member DM fallback can bypass mention gating. Fixes #85017. (#85137) Thanks @joshavant.",
      "Agents/subagents: require explicit subagent allowlist targets to be configured agents so stale deleted-agent ids are omitted from `agents_list` and rejected by `sessions_spawn`. Fixes #84811. (#85154) Thanks @joshavant.",
      "PDF tool: time out idle remote PDF body reads after 120 seconds so stalled remote documents return an error instead of wedging the session. Fixes #68649. (#84768) Thanks @luoyanglang.",
      "Diagnostics/OpenTelemetry plugin: suppress handled OTLP exporter promise rejections so collector shutdowns no longer crash the Gateway. (#81085) Thanks @luoyanglang.",
      "Agents/exec: omit raw command text and env values from denied exec failure logs while keeping safe correlation metadata. Fixes #85049. (#85140) Thanks @joshavant.",
      "Media/audio: skip empty structured sherpa-onnx transcripts instead of treating the raw JSON payload as spoken text. (#84667) Thanks @TurboTheTurtle.",
      "Agents/exec: preserve inherited XDG base-directory environment values for subprocesses while still rejecting agent-supplied XDG overrides. Fixes #84854. (#85139) Thanks @joshavant.",
      "Node/Linux: keep `OPENCLAW_GATEWAY_TOKEN` out of generated systemd unit files by writing node service token values to a node-specific env file. (#84408)",
      "Memory-core/dreaming: reuse stable narrative subagent session keys per workspace and phase while keeping per-run idempotency and bounded cleanup, so stale `dreaming-narrative-*` sessions do not accumulate. Fixes #68252, #69187, and #70402. (#70464) Thanks @chiyouYCH.",
      "Trajectory/support: tolerate partial skill snapshot entries when building support metadata so rejected skill path scans no longer abort trajectory capture. (#71185) Thanks @lukeboyett.",
      "TUI: coalesce repeated idle Esc abort notices into a single `no active run xN` system row instead of appending duplicate rows.",
      "Telegram: honor `channels.telegram.pollingStallThresholdMs` in the default isolated polling path, restarting silent workers instead of leaving inbound updates wedged. Fixes #83950. (#84861) Thanks @joshavant.",
      "Telegram: dedupe replayed message dispatches by Telegram chat/message identity so isolated-ingress replays do not trigger duplicate model dispatches. Fixes #84886. (#85208) Thanks @joshavant.",
      "Slack: suppress reasoning payloads before reply delivery and dispatch accounting, so Slack monitor, slash-command, fallback, and direct reply paths do not leak model reasoning. Fixes #84319. (#84322) Thanks @ffluk3 and @joshavant.",
      "Slack: deliver native plugin approval prompts and updates when Slack native approvals are enabled, while keeping plugin approval authorization separate from exec approvers.",
      "Slack: keep native plugin approval prompts in the originating app conversation thread when the live Slack turn source is a `D...` conversation.",
      "Agents/Pi: disable the embedded pi-coding-agent runtime auto-retry so OpenClaw's own retry and failover loop does not replay failed tool calls through a nested SDK retry. Fixes #73781. (#74434) Thanks @yelog.",
      "CLI/perf: keep `setup --help`, `onboard --help`, and `configure --help` out of the full wizard runtime while preserving the existing help output. (#84488) Thanks @frankekn.",
      "CLI/perf: keep `agents --help` out of agents action/runtime imports so help, completion, and command discovery paths avoid loading the full agents runtime. (#84483) Thanks @frankekn.",
      "CLI/perf: keep `secrets --help` and `nodes --help` on the precomputed help path so parent help avoids loading action-heavy command runtime modules. (#84818) Thanks @frankekn.",
      "CLI/perf: serve `doctor`, `gateway`, `models`, and `plugins` parent help from startup metadata so common subcommand help avoids full CLI program construction. (#84786) Thanks @frankekn.",
      "Codex/Lossless: keep context-engine history on the canonical run session when Telegram DMs use per-peer runtime policy keys. Fixes #84936. (#84954) Thanks @neeravmakwana.",
      "Codex: keep heartbeat response tool schemas durable without exposing dynamic tools disabled by turn policy, so heartbeat wakeups can reuse threads while scoped tool allowlists stay enforced. (#84681) Thanks @jalehman.",
      "Auth/OAuth: skip the refresh adapter when a stored OAuth credential has no refresh token so agent turns fail fast on missing-key instead of waiting on the 120s refresh timeout. Thanks @RomneyDa.",
      "Auth/Codex: load legacy OAuth sidecar credentials in the embedded runner's secrets-runtime auth loaders so Telegram replies, cron-triggered turns, and other isolated sub-agent lanes can reach the existing #83312 refresh-and-rewrite migration instead of failing with `No API key found for provider \"openai-codex\"` until the user runs `openclaw doctor`. Thanks @Totalsolutionsync and @RomneyDa.",
      "Codex/failover: classify `deactivated_workspace` as a permanent auth failure so configured fallback models can advance when a Codex workspace is deactivated. (#55893) Thanks @litang9.",
      "Exec: keep configured `tools.exec.pathPrepend` entries ahead of user shell startup PATH changes on POSIX gateway runs. (#81403) Thanks @medns.",
      "Gateway/sessions: allow shared-secret bearer callers to read and stream session history without an explicit scope header. (#81815) Thanks @medns.",
      "Agents/embedded runner: classify HTML auth provider responses as `auth_html` and return a re-authentication hint instead of the CDN-blocked copy that `upstream_html` returns. Cloudflare Access login pages, nginx basic-auth challenges, and gateway login walls all produce HTML auth bodies that were previously misdiagnosed as transient CDN blocks. (#79900) Thanks @martingarramon.",
      "TUI/streaming watchdog: dismiss the `This response is taking longer than expected` notice as soon as a chat event for the same run arrives, so the message no longer sits next to the recovered response when the run was only briefly silent. Refs #67052, #69081 (closed), prior attempt #69026. Thanks @jpruit20 and @RomneyDa.",
      "Agents/auth profiles: replace the bare `No available auth profile for <provider> (all in cooldown or unavailable)` TUI error with plain-language copy that explains what happened in user terms (sign-in expired, provider asking us to slow down, billing issue on the account, etc.) and suggests the matching `openclaw models auth login --provider <provider>` recovery command for sign-in and billing causes, while falling back to the underlying provider error for cases without a clear recovery path. Thanks @RomneyDa.",
      "Agents/Pi: tolerate OpenClaw-owned transcript writes while embedded prompts are released for model I/O, keeping long-running Feishu, Slack, Telegram, and cron turns from failing with false session-takeover errors. Fixes #84059. (#84250) Thanks @tianxiaochannel-oss88."
    ]
  },
  {
    "version": "2026.5.20",
    "date": "2026.5.20",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026520",
    "features": [
      {
        "title": "Exec approvals",
        "description": "remove the old `cat SKILL.md && printf ... && <skill-wrapper>` allowlist compatibility path so skill files must be loaded with the read tool and only the real skill executable is auto-allowed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026520"
      },
      {
        "title": "Discord",
        "description": "let voice sessions follow configured Discord users into voice channels, with allowed-channel checks, multi-user handoff, bounded reconciliation, and DAVE recovery preservation. (#84264) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/84264"
      },
      {
        "title": "Discord/voice",
        "description": "include bounded `IDENTITY.md`, `USER.md`, and `SOUL.md` profile context in realtime voice session instructions by default, with `voice.realtime.bootstrapContextFiles: []` available to disable it. (#84499) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/84499"
      },
      {
        "title": "Dependencies",
        "description": "bump the bundled Codex harness to `@openai/codex` `0.132.0` and refresh the app-server model-list docs for the new catalog.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026520"
      },
      {
        "title": "CLI/policy",
        "description": "add the bundled Policy plugin for policy-backed channel conformance checks, doctor lint findings, and opt-in workspace repair. (#80407) Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/80407"
      },
      {
        "title": "Agents/config",
        "description": "allow `agents.list[].experimental.localModelLean` so lean local-model mode can be enabled for one configured agent instead of globally. (#84073) Thanks @dutifulbob.",
        "href": "https://github.com/openclaw/openclaw/pull/84073"
      },
      {
        "title": "Providers/xAI",
        "description": "add device-code OAuth login so remote and headless setups can authorize xAI without a localhost browser callback. (#84005) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/84005"
      },
      {
        "title": "Providers/OpenRouter",
        "description": "honor provider-level `params.provider` routing policy for OpenRouter requests, with model and agent params overriding the defaults. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026520"
      }
    ],
    "fixes": [
      "Agents: validate a forced plugin harness against the candidate provider/model before pinning it, so unsupported fallback-chain candidates fail with a clear harness error instead of producing a late `Model provider X not found` from the underlying harness. Codex harness `supports()` now also accepts the canonical `openai` and `openai-codex` routing ids so documented Codex configs keep working. Thanks @cathrynlavery.",
      "Control UI/WebChat: keep selected external-channel sessions live by mirroring Codex prompts at turn start, streaming hidden runs only to exact selected-session subscribers, and deduplicating accumulated stream snapshots around tool cards. Fixes #83528, #82611, refs #83949. Thanks @BunsDev.",
      "CLI/tasks: include stale-running task maintenance decisions in `openclaw tasks maintenance --json` so retained and reconcile candidates explain backing-session, cron, CLI, and wedged-subagent state. (#84691) Thanks @efpiva.",
      "Codex app-server: keep system-prompt reports working when bootstrap hooks provide workspace files with only a path and content, so hook-supplied SOUL/IDENTITY/TOOLS/USER context still reports injected characters correctly. (#84736) Thanks @JARVIS-Glasses.",
      "Providers/MiniMax music: stop advertising `durationSeconds` control and remove prompt-injected duration hints, so `music_generate` reports MiniMax duration as an unsupported override instead of suggesting MiniMax can enforce track length. Fixes #84508. Thanks @neeravmakwana.",
      "Doctor: warn when sandbox tool policy hides configured MCP server tools before provider requests. (#84699) Thanks @nxmxbbd.",
      "WhatsApp: update Baileys to `7.0.0-rc12`.",
      "Build: suppress per-locale `rolldown-plugin-dts:fake-js` CommonJS dts warnings emitted while bundling the intentionally-inlined `zod/v4/locales/*.d.cts` files, so `pnpm build` output stays readable after the 0.25.1 plugin bump. Thanks @RomneyDa.",
      "CLI/nodes: route lazy plugin-registration logs to stderr for JSON-mode `openclaw nodes` commands so stdout stays parseable. (#84684) Thanks @TurboTheTurtle.",
      "Approvals: route manual `/approve` decisions through the trusted approval runtime so active exec and plugin approvals no longer look unknown or expired.",
      "Mac app: update the About settings copyright year to 2026. (#84385) Thanks @pejmanjohn.",
      "Dependencies: update `@openclaw/fs-safe` to `0.2.7` so OpenClaw's default Python-helper-off policy keeps best-effort Node write fallbacks for private stores, secret writes, run logs, and media attachments on Linux/macOS.",
      "Infra/secrets: restore the fail-closed contract for `tryReadSecretFileSync` so credential loaders that pass `rejectSymlink: true` (Telegram, LINE, Zalo, IRC, Nextcloud Talk tokens) refuse symlinked credential files instead of silently accepting them, and the infra-state CI shard's secret-file symlink test passes again. Thanks @RomneyDa.",
      "Browser: honor the configured image sanitization limit for screenshots and labeled snapshots so browser-captured images follow the same resize policy as other image results. (#84595)",
      "Doctor: remove unrecognized `models.providers.*.models[*].compat.thinkingFormat` values during `doctor --fix` so stale provider model config can validate after upgrade. Fixes #77803.",
      "Doctor: warn when `openclaw.json` stores plaintext secret-bearing config fields, including model provider API keys and sensitive provider headers. (#84718) Thanks @lukaIvanic.",
      "Status: show the configured default, session-selected model, reason, clear hint, and docs link when a session remains pinned to a model that differs from `agents.defaults.model.primary`.",
      "WebChat: clear stale typing indicators when session change events mark the active chat run complete.",
      "Mac app: keep local packaging signed with a stable app identity for permission testing and fix Control UI production builds under current Vite/Highlight.js exports.",
      "macOS app: update the embedded Peekaboo bridge to 3.2.1 so OpenClaw-hosted UI automation works with current Peekaboo CLI capture flows.",
      "Cron: deliver preferred final assistant output for successful scheduled runs when trailing plain tool warnings remain in diagnostics instead of marking the run failed.",
      "fix(mattermost): fail closed on missing channel type [AI]. (#84091) Thanks @pgondhi987.",
      "Recheck rebuilt system.run argv [AI]. (#84090) Thanks @pgondhi987.",
      "CLI: keep the private QA subcommand out of exported command descriptors unless `OPENCLAW_ENABLE_PRIVATE_QA_CLI=1`, so root help and subcommand markers match runtime registration. (#84519)",
      "CLI/cron: bound `openclaw cron show` job lookup pagination so non-advancing or unbounded `cron.list` responses fail instead of hanging the command. Fixes #83856. (#83989)",
      "Agents/messages: stop message-tool-only turns after a successful source-channel `message` send while keeping transcript mirrors under the session write lock. (#84289)",
      "Agents: filter silent heartbeat response-tool transcript artifacts out of embedded context snapshots so later user turns are not polluted by heartbeat no-op messages. (#83477) Thanks @fuller-stack-dev.",
      "Agents/OpenAI: log repeated strict tool-schema downgrade diagnostics once per provider/model/tool signature, reducing duplicate debug noise while preserving `strict=false` fallback behavior. Fixes #82930. (#82933) Thanks @galiniliev.",
      "Agents/code mode: spell out the `exec` tool's JavaScript/TypeScript, no Node module, and catalog-bridge constraints in model-visible schema text so agents can use enabled tools without trial-and-error. (#84269) Thanks @Kaspre.",
      "Codex: give `image_generate` dynamic-tool calls a 120s default watchdog when no per-call or configured image timeout is set, so image generation no longer falls back to the generic 30s bridge timeout. (#84254) Thanks @moritzmmayerhofer.",
      "Codex: avoid duplicate dynamic tool terminal diagnostics while large diagnostic backlogs drain without blocking tool responses. (#82937) Thanks @galiniliev.",
      "CLI/message: include a stable top-level `messageId` in `openclaw message --json` output when channel sends return one. (#84191) Thanks @100menotu001.",
      "Cron: preserve legacy top-level array `jobs.json` stores when loading or adding scheduled jobs so old cron jobs are no longer treated as an empty store during upgrade. Fixes #60799. (#84433) Thanks @IWhatsskill.",
      "Gateway/agents: use an agent's `identity.name` in Gateway agent summaries when `agents.list[].name` is unset, so configured agent labels remain visible in clients. (#84355; refs #57835) Thanks @luoyanglang.",
      "Channels/replies: keep normal `/verbose` failed-tool progress compact in message-tool replies and prevent late text-only tool output from appearing after the final answer. (#84303) Thanks @VACInc.",
      "Plugins/hooks: apply a default 30-second timeout to `before_compaction` and `after_compaction` hooks so a hung plugin handler no longer blocks compaction completion. (#84153)",
      "Discord: preserve reusable presentation buttons through portable conversion and Discord component registration. (#84187) Thanks @100menotu001.",
      "Discord: preserve disabled presentation buttons when adapting and rendering Discord message controls. (#84188) Thanks @100menotu001.",
      "Twitch: add a test-only client-manager registry reset helper so non-isolated Twitch tests can clear cached managers between cases. Fixes #83887. (#84244) Thanks @hclsys.",
      "Cron: run main-session scheduled work on a cron-owned wake lane while preserving reply delivery context, so background cron turns no longer block human main-session chat. Fixes #82766. (#82767) Thanks @galiniliev.",
      "Auto-reply/slash commands: require a word boundary after the matched prefix in `parseSlashCommandActionArgs` so `/config-check <args>` (or any skill that shares a built-in command prefix) is no longer captured by the shorter built-in handler. Fixes #84572. Thanks @infracore.",
      "Cron: use structured embedded-run denial metadata for isolated scheduled tasks so blocked exec requests fail the job without treating ordinary assistant prose as a denial. (#84067) Thanks @abnershang.",
      "Cron: keep recovered tool warnings diagnostic for successful scheduled runs so final cron output is delivered instead of being replaced by a post-processing warning. (#84045) Thanks @abnershang.",
      "Plugins/perf: thread explicit plugin discovery results through `loadBundledCapabilityRuntimeRegistry`, `resolveBundledPluginSources`, and `listChannelCatalogEntries` so callers that already hold a discovery result skip redundant filesystem walks. Thanks @SebTardif.",
      "harden update restart script creation [AI]. (#84088) Thanks @pgondhi987.",
      "Android/Control UI Talk: split realtime voice transcript turns, queue PCM playback writes, and add opt-in OpenClaw consult routing for Gateway relay when a realtime provider skips `openclaw_agent_consult`. (#84181) Thanks @VACInc.",
      "Docker: keep the bundled Codex plugin in official release image keep lists so the default OpenAI agent harness remains available after Docker pruning. Fixes #83613. (#83626) Thanks @YuanHanzhong.",
      "CLI/channels: preserve the first line of `openclaw channels logs` output when the rolling tail window starts exactly on a line boundary, mirroring the already-fixed `readLogSlice` behavior in `src/logging/log-tail.ts`.",
      "Control UI: treat terminal session status as authoritative over stale active-run flags so completed terminal runs stop showing abort/live UI. (#84057)",
      "CLI: preserve embedded equals signs in inline root option values instead of truncating after the second separator. (#83995) Thanks @ThiagoCAltoe.",
      "Matrix/config: accept `messages.queue.byChannel.matrix` queue overrides and keep queue provider schema/type keys aligned for Matrix, Google Chat, and Mattermost. Thanks @bdjben.",
      "CLI: format `openclaw acp client` failures through the shared error formatter so object-shaped errors stay readable instead of printing `[object Object]`. Fixes #83904. (#84080)",
      "Agents/message-tool: normalize non-canonical message body aliases (`SendMessage`, `content`, `text`) to `message` before send validation so model-emitted tool calls with aliased body keys are delivered instead of rejected. (#84079)",
      "Providers/Ollama: default unknown-capabilities models to tool-capable so discovered native Ollama models can use tools when `/api/show` omits capabilities. (#84055) Thanks @dutifulbob.",
      "Codex app-server: disable native Code Mode, user MCP, and app-backed plugin execution while OpenClaw sandboxing is active, routing shell access through `sandbox_exec`/`sandbox_process` instead. (#84388) Thanks @joshavant.",
      "Installer/Windows: launch `install.ps1` onboarding as an attached child process so fresh native Windows installs do not freeze visibly at `Starting setup...` or corrupt the wizard's terminal rendering.",
      "CLI/update: keep restart health checks working across one-version CLI/Gateway protocol skew and use the managed Gateway service Node for all follow-up commands even when the package root is unchanged, so `openclaw update` no longer silently switches the gateway to a different Node binary when multiple Node installations are present. Thanks @amknight.",
      "CLI/gateway: include the running Gateway version in `gateway status` JSON output, preserving existing server metadata while falling back to status RPC data for read probes. Fixes #56222. Thanks @galiniliev.",
      "Memory/search: close local embedding providers when active-memory searches time out so pending local model loads and embedding contexts are aborted and released. (#83858) Thanks @brokemac79.",
      "CLI/nodes: request pending node surface approval scopes before `openclaw nodes approve` so exec-capable node approval can use admin-scoped Gateway credentials instead of failing with `missing scope: operator.admin`. (#84392) Thanks @joshavant.",
      "Gateway: reject slow node event sends before outbound buffers grow unbounded and log the rejected payload diagnostic. (#84387) Thanks @samzong.",
      "Agents: include bounded trajectory queued-writer diagnostics in `pi-trajectory-flush` timeout warnings so flush stalls show pending writes, queued bytes, and append state. Fixes #82961. (#82962) Thanks @galiniliev.",
      "Agents/subagents: recover stale completion announces by retrying unsupported transcript-wait wakes without transcript waiting and forcing a message-tool handoff when the requester run is already stale. Fixes #83699. (#83700) Thanks @galiniliev.",
      "Agents/subagents: constrain wildcard subagent target allowlists to configured agents while preserving explicitly listed compatibility targets. Fixes #84040. (#84357) Thanks @joshavant.",
      "Providers/Anthropic: route Anthropic model refs selected with Claude CLI auth through the Claude CLI runtime so shorthand refs such as `anthropic/opus-4.7` no longer fall back to embedded Anthropic billing. Fixes #84222. (#84374) Thanks @joshavant.",
      "Agents: honor explicit `models.providers.<id>.timeoutSeconds` values above the default idle watchdog for cloud and self-hosted providers, so long first-token waits no longer fall back at ~120s when the provider timeout is higher. (#83979) Thanks @yujiawei.",
      "Agents/Codex: keep encrypted Responses reasoning replay provenance-bound so stale mirrored Codex transcripts drop invalid encrypted content before request assembly while preserving matching same-session replay. Fixes #83836. (#84367) Thanks @joshavant.",
      "Agents/subagents: skip stale embedded-run wake probes for dormant completion requesters, so late subagent completions go straight to requester-agent/direct handoff instead of producing `reason=no_active_run` queue noise. (#82964) Thanks @galiniliev.",
      "CLI: retry config snapshot reads after a transient failure so one rejected read no longer poisons later commands in the same process. (#83931) Thanks @honor2030.",
      "TUI: handle German-layout Kitty keyboard input by ignoring printable release events and accepting AltGr-produced printable characters such as `@` and `€`. Fixes #48897.",
      "Media: decode URL path basenames before using them as remote media fallback filenames, so files like `My%20Report.pdf` are surfaced as `My Report.pdf`. Fixes #84050. (#84052) Thanks @jbetala7.",
      "WhatsApp: clarify inbound group diagnostics so observed but unregistered groups point to `channels.whatsapp.groups` without changing routing or sender authorization. (#83846) Thanks @neeravmakwana.",
      "WhatsApp: drain pending outbound deliveries on a 30s periodic timer in addition to the reconnect handler, so messages enqueued while the provider is already connected no longer wait for the next reconnect to send. (#79083) Thanks @Oviemudiaga.",
      "CLI/TUI: include gateway plugin slash commands in TUI autocomplete, so connected sessions can suggest plugin-owned commands exposed by the running Gateway. (#83640) Thanks @se7en-agent.",
      "Gateway/mobile: restore QR setup-code handoff of bounded operator tokens for iOS and Android onboarding while keeping admin and pairing scopes out of bootstrap. (#83684) Thanks @ngutman.",
      "iOS: repair Release archive compilation for the TestFlight build. (#84255) Thanks @ngutman.",
      "Agents/compaction: bound plugin-owned CLI transcript compaction with the host safety timeout so a hung context engine can no longer stall post-turn cleanup. (#84083) Thanks @100yenadmin.",
      "Control UI/usage: truncate long context skill, tool, and file names in the usage panel while keeping the full name available on hover. (#42197) Thanks @Rain120.",
      "Codex: respect explicit `models auth order set` and `config.auth.order` precedence over stale `lastGood` in `/codex account`, and show `no working credential` when every explicit-order profile is ineligible instead of marking a lower-ranked profile as active. Fixes #84386. (#84412) Thanks @openperf.",
      "Agents: honor `messages.suppressToolErrors` for mutating tool failures so configured chat surfaces do not receive separate warning payloads. (#81561) Thanks @moeedahmed.",
      "Agents/fallback: surface billing guidance for mixed rate-limit plus billing fallback exhaustion instead of generic failure copy. Fixes #79396. (#79489) Thanks @aayushprsingh."
    ]
  },
  {
    "version": "2026.5.19",
    "date": "2026.5.19",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519",
    "features": [
      {
        "title": "Agents",
        "description": "clarify that fixes should default to clean bounded refactors, lean internals, and explicit plugin SDK/API deprecation paths.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Agents/tools",
        "description": "normalize Swagger/OpenAPI refs and OpenAPI schema annotations when preparing tool parameter schemas.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Dependencies",
        "description": "update `@openclaw/proxyline` to 0.3.3.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Dependencies",
        "description": "update Pi packages to 0.75.1 and raise the minimum supported Node.js 22 line to 22.19.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Docker/Podman",
        "description": "add `OPENCLAW_IMAGE_APT_PACKAGES` as the runtime-neutral image build arg for extra apt packages while keeping `OPENCLAW_DOCKER_APT_PACKAGES` as a legacy fallback. (#62431) Thanks @urtabajev.",
        "href": "https://github.com/openclaw/openclaw/pull/62431"
      },
      {
        "title": "Gateway/ACPX",
        "description": "attribute startup probe, config, runtime, and resource-count costs in restart traces without changing readiness behavior. (#83300) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/83300"
      },
      {
        "title": "Gateway",
        "description": "overlap startup logging and plugin-service startup with channel sidecars to reduce restart ready latency while preserving `/readyz` sidecar gating. (#83301) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/83301"
      },
      {
        "title": "Plugins/admin-http-rpc",
        "description": "allow trusted admin HTTP RPC clients to start and wait for web QR login flows. (#83259) Thanks @liorb-mountapps.",
        "href": "https://github.com/openclaw/openclaw/pull/83259"
      },
      {
        "title": "Mac app",
        "description": "redesign Settings pages with consistent card layouts, cached navigation, cleaner permissions/voice/skills/cron/exec/debug panes, and steadier spacing around the native sidebar.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Mac app",
        "description": "refine Voice & Talk recognition-language and wake-phrase settings so they use the same compact card rows as the rest of Settings.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills",
        "description": "rename the repo-local Codex closeout review skill and helper to `autoreview` while preserving the Codex-first fallback behavior.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills",
        "description": "add a meme-maker skill for curated template search, local SVG/PNG rendering, Imgflip hosted rendering, and Know Your Meme provenance links.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills CLI",
        "description": "allow `openclaw skills install` and `openclaw skills update` to target shared managed skills with `--global`. (#74466) Thanks @Marvae.",
        "href": "https://github.com/openclaw/openclaw/pull/74466"
      },
      {
        "title": "Browser",
        "description": "surface pending and recently handled modal dialogs in snapshots, return `blockedByDialog` when an action opens a modal, and allow `browser dialog --dialog-id` to answer pending dialogs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Browser CLI",
        "description": "add `openclaw browser evaluate --timeout-ms` so long-running page functions can extend both the evaluate action and request timeout budgets. (#83447) Thanks @eefreenyc.",
        "href": "https://github.com/openclaw/openclaw/pull/83447"
      },
      {
        "title": "Codex app-server",
        "description": "scope OpenClaw prompt guidance by runtime surface so native Codex keeps Codex-owned base/personality instructions while OpenClaw contributes only runtime context, delivery guidance, and explicitly scoped command hints. (#83454) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/83454"
      },
      {
        "title": "Docker/Podman",
        "description": "add `OPENCLAW_IMAGE_PIP_PACKAGES` for opt-in Python package installation in local image builds. (#83771) Thanks @stephenredmond-straiteis.",
        "href": "https://github.com/openclaw/openclaw/pull/83771"
      },
      {
        "title": "Agents/tools",
        "description": "shorten built-in tool descriptions and schema hints across media, messaging, sessions, cron, Gateway, web, image/PDF, TTS, nodes, and plan tools while preserving routing guardrails.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills",
        "description": "add node inspector debugging, fused diagram generation, and throwaway spike workflow skills.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "CLI/plugins",
        "description": "add `defineToolPlugin` plus `openclaw plugins build`, `validate`, and `init` for typed simple tool plugins with generated manifest metadata, optional tool declarations, and context factories.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Agents/skills",
        "description": "tighten bundled skill prompts and metadata, quote skill descriptions, refresh current CLI/API guidance, and update embedded sherpa-onnx runtime downloads.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills",
        "description": "update the Obsidian skill to target the official `obsidian` CLI and require its registered binary instead of the third-party `obsidian-cli`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Skills",
        "description": "add a Python debugging skill for pdb, breakpoint(), post-mortem inspection, and debugpy remote attach.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Codex",
        "description": "add `/codex plugins list`, `enable`, and `disable` for managing configured native Codex plugins from chat without editing config by hand.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Plugins/messages",
        "description": "add presentation capability limits for channel renderers, adapt rich message controls before native rendering, and mark legacy `interactive`/Slack directive producer APIs as deprecated.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Plugins/subagents",
        "description": "store channel delivery routes as canonical session metadata and deprecate ad hoc subagent hook delivery-origin fields in favor of core route projection.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Proxy",
        "description": "support HTTPS managed forward-proxy endpoints and scoped `proxy.tls.caFile` CA trust for proxy endpoint TLS. (#79171) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/79171"
      },
      {
        "title": "QA-Lab",
        "description": "add first-hour 20-turn and optional 100-turn runtime parity scenarios, with tier metadata for standard and soak QA gates. Fixes #80338; refs #80337. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80338"
      },
      {
        "title": "QA-Lab",
        "description": "add `openclaw qa suite --runtime-parity-tier` and wire the standard Codex-vs-Pi tier into release checks separately from optional/live-only/soak lanes. Fixes #80337. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80337"
      },
      {
        "title": "QA-Lab",
        "description": "add a live-only Codex Pi-shaped Read vocabulary canary so runtime parity catches native workspace-read prompt compatibility drift. (#80323) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80323"
      },
      {
        "title": "QA-Lab",
        "description": "add live-only harness self-health scenarios for plugin hook crashes, manifest contract errors, and WebChat direct-reply self-message routing. (#80323) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80323"
      },
      {
        "title": "QA-Lab",
        "description": "add runtime tool fixture scenarios and coverage reporting for Codex-native workspace tools, OpenClaw dynamic tools, and optional plugin-backed tools. Fixes #80173. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80173"
      },
      {
        "title": "QA-Lab",
        "description": "expose runtime tool fixture coverage through `openclaw qa coverage --tools`, with optional suite-summary evaluation for parity gate artifacts. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "QA-Lab",
        "description": "schedule a live-frontier Codex-vs-Pi runtime token-efficiency artifact lane in the all-lanes QA workflow. Fixes #80175. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80175"
      },
      {
        "title": "QA-Lab",
        "description": "hard-gate required OpenClaw dynamic runtime-tool drift in the standard Codex-vs-Pi tier with a blocking release-check verifier and publish the tool coverage report artifact. Fixes #80339; refs #80319. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/80339"
      },
      {
        "title": "QA-Lab",
        "description": "add the personal-agent approval-denial scenario so the benchmark pack verifies denied local reads stop cleanly without tool progress or fixture leaks. (#83150) Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/pull/83150"
      },
      {
        "title": "QA-Lab",
        "description": "extend the personal-agent benchmark pack with a local task followthrough scenario for proof-backed pending, blocked, and done status reporting. Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "QA-Lab",
        "description": "add a report-only dreaming shadow-trial scenario so candidate memory promotion can be evaluated without mutating `MEMORY.md`. Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "Gateway/performance",
        "description": "add `pnpm test:restart:gateway` benchmark tooling for repeated restart readiness, downtime, trace, and resource-slope evidence. (#83299) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/83299"
      },
      {
        "title": "Android",
        "description": "switch Talk Mode to realtime Gateway relay voice sessions with streaming mic input, realtime audio playback, tool-result bridging, and on-screen transcripts. (#83130) Thanks @sliekens.",
        "href": "https://github.com/openclaw/openclaw/pull/83130"
      },
      {
        "title": "Gateway/config",
        "description": "expose config lookup reload metadata so tools can distinguish restart-required, hot-reloadable, and no-op fields before applying config edits. Fixes #81409. (#81612) Thanks @LLagoon3.",
        "href": "https://github.com/openclaw/openclaw/pull/81612"
      },
      {
        "title": "Telegram",
        "description": "add allowlisted native DM draft previews for transient tool progress while keeping final answers on the normal persistent delivery path. (#83622) Thanks @akrimm702.",
        "href": "https://github.com/openclaw/openclaw/pull/83622"
      },
      {
        "title": "QA-Lab",
        "description": "add a personal-agent share-safe diagnostics artifact scenario so support handoffs keep useful status while omitting raw personal content. Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026519"
      },
      {
        "title": "QA-Lab",
        "description": "add a personal-agent no-fake-progress scenario so completion claims stay tied to local evidence instead of unsupported external progress. (#83824) Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/pull/83824"
      }
    ],
    "fixes": [
      "Agents/exec approvals: return approved WebChat gateway exec output inline after native approval instead of leaving the model waiting for an async follow-up. (#82019) Thanks @Zac-W.",
      "CLI/node: reject invalid explicit `node run --port` values instead of silently falling back to the configured or default port. Fixes #83923. Thanks @davinci282828.",
      "CLI: reject explicit port numbers above 65535 before they reach Gateway or Node bind paths. Fixes #83900. (#84008) Thanks @hclsys.",
      "Codex app-server: preserve plugin tool auth profiles when Codex owns model transport so OpenClaw dynamic tools can resolve their provider credentials. (#83603) Thanks @rubencu.",
      "Memory/search: scan the JS-side fallback vector path (used when the sqlite-vec index is unavailable or has a mismatched dimension) in bounded rowid batches and yield to the event loop between batches so large chunk tables can no longer pin the Node.js main thread for multi-second windows. Also keeps the SQL prepared statement rooted in a local so node:sqlite cannot finalize it mid-scan under heap pressure. Fixes #81172. Thanks @dev23xyz-oss.",
      "Telegram: preserve inbound bold, italic, code, preformatted, strikethrough, underline, spoiler, and text-link entities as markdown in the agent-facing prompt body. Fixes #52859.",
      "Backup: dereference hardlinks during archive creation and reject unsafe hardlink targets during verification so archives that pass `backup verify` do not fail broad extraction on macOS tar. Fixes #54242. Thanks @jason-allen-oneal.",
      "Memory Wiki: preserve fs-safe diagnostics when bridge source page writes fail for non-symlink filesystem safety reasons, so directory collisions are reported with the underlying error code. (#83776) Thanks @TurboTheTurtle.",
      "Telegram: keep forum topics from blocking sibling topic traffic by routing inbound serialization, media/text buffers, and account API queues on topic-aware lanes. (#83829)",
      "Telegram: keep queued forum-topic follow-up messages from inheriting superseded source abort signals, so later same-topic user turns can still run and reply after an active turn is replaced. (#83827) Thanks @VACInc.",
      "CLI/update: bypass npm freshness filters consistently during managed package and plugin installs so freshly published release plugins remain installable. Thanks @jalehman.",
      "CLI/update: guide root-owned npm install EACCES recovery by stopping the managed Gateway before manual package replacement, then reinstalling and restarting the service. Fixes #83747. (#83757) Thanks @brokemac79.",
      "Twitch: register refreshing chat tokens with Twurple's chat intent so automatic token refresh keeps chat access available. (#83750) Thanks @TurboTheTurtle.",
      "Agents/subagents: keep collect-mode announce queues batching unresolved-origin items with compatible same-route messages and resume collection after a true cross-channel drain when a later compatible batch remains. Fixes #83577.",
      "CLI/config: preserve numeric-looking record keys such as Discord guild IDs when creating missing config containers with `config set`. (#83769) Thanks @TurboTheTurtle.",
      "Skills: refresh existing session skill snapshots when watched skill roots change, so changed extra skill directories take effect without starting a new session. Fixes #83782. (#83800) Thanks @hclsys.",
      "Providers/Anthropic: preserve native image input for current Claude model rows when stale local catalog data marks them text-only. (#83756) Thanks @TurboTheTurtle.",
      "Providers/Anthropic: preserve Claude 4 image capability when configured model refs resolve through a stale local catalog row. (#83756) Thanks @TurboTheTurtle.",
      "Providers/DeepSeek: normalize MCP tool schemas with `anyOf`/`oneOf` unions before normal and compaction requests reach DeepSeek, preventing union-shaped parameters from being rejected. (#83766) Thanks @TurboTheTurtle.",
      "Control UI: render live tool progress from session-scoped `session.tool` Gateway events so externally started runs show their tool cards in the active session. (#83734) Thanks @TurboTheTurtle.",
      "Outbound: resolve send-capable channel plugins from the active runtime registry when the pinned startup registry only has setup metadata. (#83733) Thanks @TurboTheTurtle.",
      "Discord: preserve streamed reply previews when recovered tool-warning finals are delivered before or after the assistant's final reply. (#84169) Thanks @neeravmakwana.",
      "Control UI: keep the chat delete confirmation popover clamped inside the visible viewport on small screens. (#83804) Thanks @ThiagoCAltoe.",
      "Browser: enforce current-tab URL allowlist checks for `/act` evaluate/batch actions and `/highlight` routes while leaving tab-management actions unblocked. (#78523)",
      "CI: require real-behavior-proof verdict markers to come from the ClawSweeper GitHub App before accepting exact-head proof. (#83692)",
      "Models: show the effective OpenAI/Codex auth profile in `/models` provider headers instead of falling back to the OpenAI env-key label. (#83697) Thanks @yu-xin-c.",
      "CLI: include active bundled loopback MCP tools in CLI system prompts and reset provider-side CLI sessions when that prompt-visible tool surface changes. (#83785) Thanks @TurboTheTurtle.",
      "Browser: keep a profile `cdpPort` when its `cdpUrl` omits a port, while still letting explicitly written URL ports win. (#82166) Thanks @Marvae.",
      "Agents/image generation: allow distinct `image_generate` prompts to start separate session-backed background tasks while same-prompt retries still return the active task status. (#83614) Thanks @Elarwei001.",
      "Gateway/WebChat: honor configured `channels.webchat.textChunkLimit` and `chunkMode` overrides when chunking WebChat replies. (#83713)",
      "Control UI: stop the chat reading indicator from sticking after an assistant response finishes. (#83515) Thanks @njuboy11.",
      "Skills: reject empty or whitespace-only skill names and descriptions during quick validation. (#27061)",
      "Sessions: skip trailing custom transcript entries when checking tail assistant replies so embedded CLI gap-fill does not duplicate canonical assistant output. (#83635) Thanks @yaoyi1222.",
      "Memory Wiki: keep `wiki_lint` tool output path-safe by reporting vault-internal lint reports as relative paths in tool text and details while preserving absolute report paths for CLI/file callers. (#83439) Thanks @LLagoon3.",
      "Telegram: keep verbose tool progress visible without mirroring non-final progress into active session transcripts, preventing embedded provider replies from aborting mid-run. (#83631) Thanks @kurplunkin.",
      "Telegram: log successful outbound text and media deliveries with account, chat, message, operation, thread, reply, silent, and chunk metadata while keeping message bodies out of logs. Fixes #83196. (#83247) Thanks @jrwrest.",
      "Cron: link isolated scheduled task runs to their stable cron session so task status and cleanup can follow the backing agent run. (#83606) Thanks @jai.",
      "Codex app-server: mark Codex-native subagent task mirrors terminal when blocked or failed spawn-agent calls arrive with stale initializing child state, preventing task registry entries from staying running. Fixes #83852. (#83945) Thanks @joshavant.",
      "CLI: enforce the documented Node.js 22.19 runtime floor in the source launcher.",
      "Release stability: repair broad-gate regressions in requester-agent completion handoff, QA-Lab mock spawn attribution, Slack monitor test isolation, plugin uninstall peer fixtures, and Node-floor launcher contract coverage.",
      "Agents/replies: persist queued follow-up user messages and assistant error stubs only once across model-fallback retries, preventing repeated provider rejections from corrupted same-role session transcripts. Fixes #83404. (#83417) Thanks @yetval.",
      "Telegram: preserve reply-target context for bare mention replies on runtime-only turns so the model sees the replied-to message body. Fixes #83767. (#83953) Thanks @joshavant.",
      "ClawHub: preserve configured base URL path prefixes when building API request URLs, so self-hosted ClawHub instances mounted under a subpath keep routing correctly. (#83982) Thanks @ThiagoCAltoe.",
      "Slack: persist delivered inbound message IDs and fail closed when same-channel thread replies lose their thread context, preventing delayed duplicate replies and accidental channel-root posts. Fixes #83521. Thanks @shannon0430.",
      "Codex app-server: complete OpenClaw dynamic tool diagnostics at the request boundary so successful, failed, timed out, aborted, and blocked tool calls do not leave active tool state behind. Fixes #83474. Thanks @rozmiarD.",
      "Doctor/Codex: warn when Linux host policy blocks the Codex bwrap user or network namespace path used by sandboxed app-server turns, with Ubuntu/AppArmor repair guidance. Refs #83018.",
      "Gateway/config: keep config writes from failing on unrelated unresolved auth-profile SecretRefs while preserving live auth-profile runtime snapshots.",
      "Gateway/sessions: clear stored CLI provider resume bindings on non-subagent `/reset` so the next turn starts a fresh provider-side CLI conversation instead of resuming old context. (#83448) Thanks @jasonyliu.",
      "Doctor: preserve legacy whole-agent Claude CLI intent by moving matching Anthropic model selections to model-scoped runtime policy before removing stale runtime pins. Fixes #83491. Thanks @danielcrick.",
      "Discord/OpenAI: keep realtime Discord voice sessions hearing follow-up turns with OpenAI realtime and prebuffer assistant playback to avoid choppy starts. (#80505) Thanks @Solvely-Colin.",
      "LM Studio: resolve env-template API keys like `${LMSTUDIO_API_KEY}` through the standard SecretInput path instead of sending the raw template as the bearer token, and preserve header-auth and discovery-key precedence when the template is unset. Fixes #80495. (#80568) Thanks @MonkeyLeeT.",
      "Discord/subagents: route the initial reply from thread-bound delegated sessions into the bound Discord thread instead of the parent channel. Fixes #83170. (#83172) Thanks @100menotu001.",
      "Gateway/sessions: rotate failed agent sessions when their transcript file is missing instead of wedging per-channel lanes. Fixes #83488. (#83553) Thanks @LLagoon3.",
      "Agents: refresh final-delivery routing from fresh session state before declaring a no-send failure, keeping recovered runs on the normal durable delivery path. (#83835) Thanks @joshavant.",
      "Agents: guard final-delivery fresh session routing against mismatched logical sessions before reusing recovered delivery context. (#83928) Thanks @joshavant.",
      "Media: prevent image metadata probing from invoking external decoder delegates on unrecognized image bytes, and stop fallback chaining after real processing errors.",
      "Media: install Sharp with the root package and fall back to sips, Windows native imaging, ImageMagick, GraphicsMagick, or ffmpeg for image resizing/conversion when Sharp is unavailable. Fixes #83401. Thanks @scotthuang.",
      "Channels/bundled: append `openclaw doctor --fix` guidance to the bundled-channel load warnings emitted on `ERR_MODULE_NOT_FOUND` / `MODULE_NOT_FOUND` (including those wrapped on `.cause` by the native-require loader), so users hitting unstaged plugin runtime deps (e.g. `nostr-tools`) see an actionable repair hint instead of a bare module-not-found warning. (#76974) Thanks @BSG2000.",
      "Telegram: deliver generated media completions back into forum topics by preserving topic IDs across requester-agent handoff. (#83556) Thanks @fuller-stack-dev.",
      "Gateway: defer update-check startup until after readiness so package update checks no longer block sidecar-ready startup, while preserving update broadcasts and shutdown cleanup. (#83520) Thanks @samzong.",
      "Telegram: keep `/btw` and read-only status commands from aborting active runs, and avoid retaining raw update payloads in timed-out spool tombstones. Refs #83272.",
      "Agents: log strict-agentic execution contract diagnostics only when the planning-only retry path actually triggers.",
      "Agents: stop embedded session takeover and session write-lock errors from consuming model fallbacks while preserving provider fallback metadata. Fixes #83510. Thanks @luyao618.",
      "Agents/video: hide `video_generate` reference-audio parameters unless a registered video provider supports audio inputs.",
      "Plugins: fall back to npm for official ClawHub updates when artifact downloads are unavailable, including beta-to-default fallback and dry-run version reporting.",
      "Plugins/xAI: echo PKCE challenge fields during OAuth authorization-code token exchange for xAI token-endpoint compatibility. (#83499) Thanks @fuller-stack-dev.",
      "Codex app-server: hydrate current inbound image attachments before queued runs so Responses-backed agents receive Discord and other channel images as native vision input. Fixes #83466. Thanks @iannwu.",
      "Codex app-server: keep native code mode available without forcing code-mode-only so OpenClaw dynamic tool turns complete through the app-server tool bridge. Fixes #83109. Thanks @daswass.",
      "Codex app-server: expose OpenClaw's sandbox-routed shell as `sandbox_exec`/`sandbox_process` for non-Docker sandbox backends so SSH sandbox agents keep a correctly routed shell path without shadowing Codex native shell. Fixes #80322. Thanks @keramblock.",
      "Release stability: recover stale session diagnostics and Codex OAuth fallback state so stuck runs and reused refresh tokens clear without blocking follow-up work. (#83503) Thanks @100yenadmin.",
      "Messages/TTS: apply TTS directives before message-tool sends reach core, gateway, or plugin delivery so opt-in message-tool rooms and proactive sends attach voice notes instead of leaking raw tags. Fixes #81598. Thanks @CG-Intelligence-Agent-Jack and @CoronovirusG10.",
      "Messages/Codex: keep Codex direct/source chats on message-tool visible delivery by default while documenting and testing `messages.visibleReplies: \"automatic\"` as the old-mode opt-out; channel wildcard model overrides now apply to direct chats before harness delivery defaults.",
      "Memory/QMD: keep archived session transcript hits visible after QMD export while preserving normal `.md` session ids that only resemble archive names. (#83518; fixes #83506) Thanks @tanshanshan.",
      "Codex app-server: preserve network access for sandboxed Codex code-mode turns when the OpenClaw sandbox allows outbound egress. Fixes #83347. Thanks @YusukeIt0.",
      "Codex app-server: honor writable Docker bind mounts for sandboxed workspace-write turns while disabling native Code Mode when container-path aliases or read-only bind shadows cannot be represented safely host-side. Fixes #83737. (#83849) Thanks @joshavant.",
      "QA-Lab: keep the OTLP smoke decoder independent of removed OpenTelemetry generated-root internals.",
      "Messages: default group/channel visible replies to automatic final delivery again, keeping `message_tool` opt-in for ambient/shared rooms and tool-reliable models.",
      "CLI/TUI: force standalone `/exit` runs to terminate after `runTui` returns so onboarding-launched TUI children do not stay alive invisibly. (#83501) Thanks @fuller-stack-dev.",
      "Agents/code mode: honor per-agent code-mode config in schema, runtime catalog activation, and model payload filtering. Fixes #83388. Thanks @Kaspre.",
      "Agents/code mode: preserve agent, session, run, and channel context in `before_tool_call` hooks for top-level `exec`/`wait` dispatches. Fixes #83387.",
      "QQBot: shorten C2C typing indicators to a 10-second window renewed every 5 seconds, capped to keep a final passive-reply slot available. (#83469)",
      "Replies: keep final payload delivery after live preview updates so channels can finalize or send the completed answer instead of losing preview-only drafts. (#83468)",
      "Discord: deliver final replies in progress-mode preview streams instead of deduplicating the final visible message. (#83443) Thanks @compoodment.",
      "Providers/Xiaomi: replay MiMo Anthropic-compatible `reasoning_content` as provider-required thinking blocks even when OpenClaw thinking is disabled, fixing follow-up tool turns for `mimo-v2-flash`. Fixes #83407. Thanks @Xgenious7.",
      "Agents/exec approvals: forward approval-runtime credentials on agent-owned Gateway approval calls so approved async commands complete through the existing runtime path instead of stalling on unauthenticated follow-up calls. Thanks @IWhatsskill, @Patrick-Erichsen, and @jesse-merhi.",
      "Gateway/skills: preflight remote macOS skill-bin refreshes with a WebSocket connectivity check so stale node sessions skip quickly instead of logging slow `system.which` timeout warnings.",
      "CLI/config: keep broken discovered plugins that are not referenced by active config from failing `openclaw config validate`, while preserving fatal errors for explicitly configured plugin entries.",
      "GitHub Copilot: drop unsafe native Responses reasoning replay items with non-replayable IDs before dispatch, preventing affected Copilot sessions from failing with `invalid_request_body`. Fixes #83220. Thanks @galiniliev.",
      "Agents/Codex: fail closed when an explicitly requested Codex harness is not registered instead of silently trying configured model fallbacks. Fixes #83349. Thanks @r2-vibes.",
      "QA-Lab: make runtime tool coverage fail on missing required tool exercise instead of treating pass/pass parity envelope drift as missing coverage.",
      "Core/plugins: harden clawpatch-reported edge cases across gateway auth cleanup, Claude session id paths, plugin activation policy, apply-patch hunk handling, diagnostic redaction, and plugin metadata validation.",
      "UI: show reasoning choices as plain labels instead of leaking internal override wording in session and chat pickers.",
      "Mac app: avoid repeating the Configuration heading inside channel quick settings.",
      "Mac app: keep the Settings sidebar always visible and remove the redundant titlebar hide/show control.",
      "Mac app: normalize Settings pane content margins so pages share the same left and right rail.",
      "Mac app: prefer explicit private/Tailscale/LAN Gateway endpoints over SSH tunnels, preserve legacy loopback tunnel configs, persist transport choices, and show captured SSH stderr when tunneling really fails.",
      "Gateway/sessions: keep ACP/acpx and runtime child sessions visible in configured-only session lists when their owner or parent session belongs to a configured agent.",
      "Mac app: keep app-level menu commands and Dashboard failure states reachable when the remote Gateway is disconnected.",
      "Mac app: allow longer Gateway and Context errors to wrap in the menu instead of truncating the useful failure detail.",
      "Mac app: tighten remote Gateway fields in Settings so the Connection pane keeps readable labels and full action button text.",
      "Mac app: keep custom Settings card rows left-aligned and full-width so Discovery and status sections no longer appear centered or detached.",
      "Mac app: align Location permission controls to the same trailing column as the rest of Settings.",
      "Mac app: add Dashboard, Chat, Canvas, and Settings shortcuts to the Dock icon menu.",
      "Mac app: replace the Settings window's native split-view sidebar with an explicit layout so page content keeps its leading gutter when the sidebar is shown or hidden.",
      "Mac app: render channel quick config as aligned Settings rows and hide schema-only variants that cannot be edited safely from the quick pane.",
      "Gateway/webchat: hide internal runtime-context and other `display: false` transcript messages from Chat history and live message events. Fixes #83216. Thanks @EmpireCreator.",
      "CLI/help: keep `gateway`, `doctor`, `status`, and `health` help registration out of action/runtime imports so subcommand `--help` stays lightweight in constrained terminals. Fixes #83228. Thanks @dfguerrerom.",
      "CLI/help: show plugin-owned command help based on the active memory slot so LanceDB memory users see `ltm` instead of unavailable `memory` commands. Fixes #83745. (#83841) Thanks @joshavant.",
      "Cron/Discord: keep explicit announce runs in message-tool-only source-reply mode so scheduled agent turns post once instead of also echoing through automatic visible replies. Fixes #83261. Thanks @Theralley.",
      "Telegram: preserve forum-topic origin targets in inbound, audio-preflight, and skipped-message hook contexts so follow-up delivery stays bound to the originating topic. Fixes #83302. Thanks @M00zyx.",
      "Telegram: retry HTTP 421 Misdirected Request send failures on a fresh fallback transport so transient edge-node routing errors no longer drop outbound replies. Fixes #48892. (#48908) Thanks @MarsDoge.",
      "Telegram: fail topic sends closed when Telegram reports `message thread not found` instead of retrying without `message_thread_id` into the base chat. Refs #83302.",
      "Config/subagents: remove ignored agent-model `timeoutMs` keys, keep subagent model config to primary/fallback selection, and clean shipped stale config through doctor. Fixes #83291. Thanks @giodl73-repo.",
      "Mac app: align the Sessions settings pane with the standard Settings page gutter and row spacing.",
      "OpenAI/Codex: stop rejecting available `openai-codex` GPT-5.1, GPT-5.2, and GPT-5.3 model refs during config validation, while keeping removed Spark aliases suppressed. Fixes #83303.",
      "Plugins/xAI: complete OAuth-backed xAI login and sidecar auth fixes, including guarded loopback callback CORS handling, video generation polling/defaults, and native-host User-Agent attribution. (#83322) Thanks @Jaaneek.",
      "Codex app-server: preserve streamed native command output in mirrored transcripts and trajectory exports when final snapshots omit aggregated output. (#83200) Thanks @rozmiarD.",
      "Codex app-server: fail closed when chat or sender policy denies tools, disabling native code, app, environment, and user MCP surfaces for restricted turns. (#82374) Thanks @VACInc.",
      "Codex app-server: keep recent context-engine messages when oversized projected history is truncated, so short follow-ups in long channel sessions do not fall back to stale earlier turns. (#83127) Thanks @VACInc.",
      "Codex app-server: keep OpenClaw session spawning searchable while steering Codex-native delegation through native subagents, avoiding duplicate direct subagent surfaces. (#83329) Thanks @fuller-stack-dev.",
      "Codex app-server: recover stale childless Codex-native subagent task mirrors during maintenance and allow their registry rows to be cancelled without an OpenClaw child session. (#82836) Thanks @yshimadahrs-ship-it and @joshavant.",
      "Feishu: return bound subagent delivery origins from session thread setup so Feishu subagent completions route back to the same DM or topic. (#83190) Thanks @100menotu001.",
      "CLI/update: tailor post-update Gateway recovery hints by platform, showing systemd, LaunchAgent, Scheduled Task, or generic service-manager guidance instead of macOS-only recovery text. (#83096) Thanks @rubencu.",
      "Plugins: apply a default 15-second timeout to legacy `before_agent_start` hooks so hung plugin handlers no longer block agent startup. Fixes #48534. (#83136) Thanks @therahul-yo.",
      "Feishu: refresh inbound session delivery context for DM, group, and broadcast turns so later replies do not inherit stale WebChat routing. Fixes #78274.",
      "Agents/subagents: require the initial subagent registry save before reporting spawn accepted, returning a spawn error instead of losing an untracked run when the registry write fails. (#83146) Thanks @yetval.",
      "QA-Lab/qa-channel: attach redacted agent tool-start traces to outbound `QaBusMessage` records so scenarios can assert actual tool use instead of relying only on reply text. Fixes #67637. Thanks @100yenadmin.",
      "QA-Lab: fail live runtime parity reports when assistant-message usage is missing, preventing `0 vs 0` live token rows from being reported as passing proof. Fixes #80411. Thanks @100yenadmin.",
      "QA-Lab: add a runtime token-efficiency sidecar report that classifies Codex savings separately from regressions and fails only positive Codex-over-Pi live token deltas above threshold. Fixes #81093. Thanks @100yenadmin.",
      "QA-Lab: fail Codex-backed OpenAI live runtime-pair runs before launching isolated workers when no portable Codex auth is available, while staging API-key fallbacks and configured Codex keys for isolated QA agents. Fixes #80412. Thanks @100yenadmin.",
      "QA-Lab: refresh parity gates, mock frontier fixtures, model scenarios, and workflow artifact lanes to compare GPT-5.5 against Claude Opus 4.7. Fixes #74262. Thanks @100yenadmin.",
      "QA-Lab: make mock parity dispatch provider-aware for source discovery and subagent scenarios so OpenAI and Anthropic lanes no longer share identical canned plans. Fixes #64879. Thanks @100yenadmin.",
      "QA-Lab: stop returning Control UI bearer tokens from unauthenticated bootstrap payloads and bind Docker harness ports to loopback-only host addresses. (#66355) Thanks @pgondhi987.",
      "Mac app: avoid a SwiftUI metadata crash when rendering the Cron Jobs settings pane.",
      "Agents/subagents: preserve run-mode keep subagent registry entries past the session sweep TTL, so kept subagent runs remain visible after cleanup completes. Fixes #83132. (#83168) Thanks @yetval.",
      "Agents/OpenAI streams: yield via `setTimeout(0)` instead of `setImmediate` between bursty Responses chunks so abort timers can fire during the yield, keeping cancel-on-timeout responsive on hot streams. Refs #82462.",
      "Agents/Codex: keep legacy `oauthRef`-backed OAuth profiles usable while `openclaw doctor --fix` migrates them back to inline credentials, without creating new sidecar credentials. (#83312) Thanks @joshavant.",
      "Agents/Codex: load the selected provider owner alongside the Codex harness runtime so `openai-codex` models resolve when plugin allowlists scope runtime loading. Fixes #83380. (#83519) Thanks @joshavant.",
      "Telegram: fail stalled isolated-ingress handlers into tombstones and abort same-lane reply work before restarting, so later same-chat updates drain after a hung turn. Fixes #83272. (#83505) Thanks @joshavant.",
      "CLI/config: send SecretRef diagnostics to stderr so JSON command stdout remains parseable.",
      "CLI/doctor: seed Control UI allowed origins when migrating legacy non-loopback gateway bind host aliases like `0.0.0.0`. Fixes #83286. Thanks @giodl73-repo.",
      "CLI/plugins: ship the bundled memory CLI as a package entry so package-installed `openclaw memory` commands register correctly.",
      "CLI/update: defer doctor-time plugin package installs during package swaps and seed post-core repair from the updated install registry, preventing duplicate reinstall failures.",
      "CLI/update: preserve old-parent-readable config metadata during legacy package handoffs, fall back only to official `@openclaw/*` npm plugin packages when ClawHub plugin artifacts are unavailable, and keep managed service package roots authoritative during updates.",
      "Feishu: detect SecretRef top-level credentials as a configured default account instead of treating object-backed app secrets as missing.",
      "Gateway/restart: keep ordinary unmanaged SIGUSR1/config restarts in-process instead of detach-spawning an orphaned child, preserving custom supervisor PID tracking while leaving update restarts on the fresh-process path. Fixes #65668.",
      "CLI/completion: resolve concrete PowerShell profile paths and reload commands during setup and doctor completion installation. Fixes #44296. (#83059) Thanks @yu-xin-c.",
      "Telegram: keep isolated long polling below the hard `getUpdates` request guard so idle bot accounts with high `timeoutSeconds` do not false-disconnect and restart-loop. Fixes #83264. Thanks @riccodecarvalho.",
      "Providers/Google: preserve and recover Gemini 3 tool-call thought signatures during native replay so function-calling turns no longer fail with missing `thought_signature` 400s. Fixes #72879. (#80358) Thanks @abnershang.",
      "Telegram: skip transcript-only delivery mirrors and gateway-injected rows when resolving latest assistant text, preventing retained previews from replacing final replies with stale fragments. Fixes #83159. (#83362) Thanks @joshavant.",
      "Memory/QMD: keep lexical search on raw hyphenated queries while normalizing semantic QMD sub-searches, avoiding fallback to the builtin index for dashed identifiers and dates. Fixes #81328.",
      "Memory-core: distinguish sqlite-vec load failures from missing semantic vector embeddings in degraded `memory index` warnings, so vector recall diagnostics point at unresolved dimensions instead of blaming sqlite-vec when the store is ready. Fixes #75624. (#83056) Thanks @xuruiray and @Noah3521.",
      "Agents/subagents: preserve sandbox-peer controller ownership while routing completion announcements back to the originating run session, keeping subagent control and completion delivery scoped correctly. Fixes #80201. (#80242) Thanks @Jerry-Xin.",
      "Gateway: continue restarting remaining channels when one hot-reload channel restart fails, while still reporting aggregate reload failure and rolling back plugin pre-replace stops. Fixes #83054. Thanks @zqchris.",
      "Gateway/plugins: bind admin HTTP RPC dispatch to the accepting gateway instance so multi-gateway processes cannot execute plugin HTTP control-plane calls against another live gateway. Fixes #83486. (#83487) Thanks @coygeek.",
      "Telegram: keep hot-reload restarts from marking polling accounts manually stopped and restart isolated ingress cleanly after worker shutdown, preserving Telegram replies across config reloads. Fixes #83008. (#83410) Thanks @joshavant.",
      "Telegram/Ollama: pass current Telegram image attachments into native PI/Ollama vision turns so live photo prompts reach Ollama as native images. Fixes #83023. (#83516) Thanks @joshavant.",
      "Gateway/secrets: split the lightweight secrets runtime state and auth-store cache from the full secrets runtime and take a startup fast path when the gateway startup config has no SecretRef values, speeding up secrets startup while preserving cleanup and refresh semantics.",
      "Codex app-server: rotate oversized native Codex threads before resume and cap dynamic tool-result text entering native Codex sessions, preventing stale oversized context from surviving OpenClaw compaction. (#82981) Thanks @hansolo949.",
      "Gateway/restart: drain pending replies and active chat runs during restart shutdown before sockets and channels close, aborting timed-out chat runs through the normal cleanup path. (#69121) Thanks @alexlomt.",
      "Agents/Codex: use the Codex runtime context window for OpenAI-model preflight compaction and memory flush checks, so GPT-5.5 Codex sessions compact before hitting the smaller native context limit. Fixes #82982. Thanks @vliuyt.",
      "QA-Lab: clean orphaned gateway temp roots when a suite parent exits and wait on gateway plus transport readiness after config restarts, reducing stale `qa-channel` noise from interrupted runs. Fixes #65506. Thanks @100yenadmin.",
      "QA-Lab: wake qa-bus long polls that arrive with stale future cursors after a bus restart, preserving reconnect readiness for harness clients. (#67142) Thanks @hxy91819.",
      "QA-Lab: stage Multipass transfer scripts under OpenClaw's preferred temp root instead of raw OS temp paths, keeping the VM runner inside temp-path guardrails. (#64098) Thanks @ImLukeF.",
      "Agents/replies: keep surviving reply media and append a warning when other media references fail, so partial media normalization no longer drops failures silently. Thanks @Jerry-Xin.",
      "Config/models: accept `thinkingFormat: \"together\"` in model compat config so Together routes can opt into the Together-specific thinking response shape.",
      "Plugins/tokenjuice: bump the bundled tokenjuice runtime to 0.7.1, bringing Codex hook approval compatibility, pre-tool command wrapping fixes, and Rolldown/Vitest output compaction improvements into the OpenClaw plugin.",
      "Agents/OpenAI: stop post-processing GPT-5 final replies with hardcoded brevity caps, preserving full channel responses instead of appending synthetic ellipses, and log when strict-agentic GPT-5 execution activates. Fixes #82910.",
      "Mac app: refine the Settings General and Connection panes with cleaner status panels, card rows, and a single native titlebar sidebar toggle.",
      "Agents/media: deliver failed async image, music, and video generation completions directly when requester-session completion handoff fails, so channel users see provider errors instead of silent fallback stalls.",
      "Browser/CDP: keep loopback proxy bypass active across both `NO_PROXY` casings and redact home-relative Chrome MCP profile paths in attach-failure diagnostics.",
      "Agents/music: steer song, jingle, beat, anthem, and instrumental requests toward `music_generate` audio creation instead of lyric-only replies, and reserve `lyrics` for exact sung words.",
      "Codex app-server: record native Codex tool calls and results into trajectory artifacts so debug/trajectory exports capture the full Codex-native tool history, not just OpenClaw-bridged turns. Thanks @vyctorbrzezowski.",
      "Codex/app-server: keep bound conversation sessions on the owning agent runtime so native Codex control and follow-up turns do not fall back to the default agent client. Fixes #82954. (#82993)",
      "CLI/infer: run gateway model probes in fresh explicit sessions so one-shot provider checks do not inherit default agent transcript state. (#82861) Thanks @Kaspre.",
      "Providers/Together: send video-generation requests to Together's v2 video API even when shared text-model config still points at the v1 base URL. (#82992)",
      "Browser CLI: preserve browser-level options on nested commands, skip option values during lazy command registration, and keep long-running wait/download/dialog hooks open for their advertised wait window.",
      "CLI/sessions: accept `openclaw sessions list` as an alias for `openclaw sessions`, matching other list-style commands. Fixes #81139. (#81163) Thanks @YB0y.",
      "Channels/stream previews: widen compact progress draft lines and cut prose at word boundaries while preserving command/path suffixes, with `streaming.progress.maxLineChars` for channel-specific tuning.",
      "CLI/plugins: have `openclaw plugins doctor` warn when a configured runtime needs a missing owner plugin, sharing the same install mapping as `openclaw doctor --fix`. Fixes #81326. (#81674) Thanks @Zavianx.",
      "Agents/Codex: route OpenAI runs that resolve to `openai-codex` through the Codex provider and bootstrap OpenClaw's stored OAuth profile into the Codex harness when the harness owns transport, so `openai/*` model refs no longer fail with `No API key found for openai-codex` despite an existing Codex OAuth profile. (#82864) Thanks @ragesaq.",
      "Agents/ACP: distinguish prompt-submitted and runtime-active child stalls from true interactive waits, including redacted proxy-env diagnostics for Codex ACP no-output runs. Fixes #44810.",
      "Agents/memory: explain that memory-triggered compaction exposes only `read` and append-only `write` when configured core tools are unavailable in `tools.allow` warnings. Fixes #82941. Thanks @galiniliev.",
      "Agents/OpenAI: preserve deterministic tool payload ordering for prompt-cache reuse across OpenAI Responses and chat completions calls. (#82940) Thanks @galiniliev.",
      "ACP/Codex: honor terminal ACP turn results so failed Codex/acpx runs are not recorded as successful after only progress text. Fixes #79522. Thanks @dudaefj.",
      "Telegram: warn when a media group drops photos that fail to download, including albums where every photo is skipped. Fixes #55216. (#82987) Thanks @eldar702.",
      "Agents/diagnostics: treat repeated same-handle embedded-run cleanup as idempotent while preserving true replacement-handle mismatch diagnostics. Fixes #82959. (#82960) Thanks @galiniliev.",
      "Agents/subagents: preserve high-priority `AGENTS.md` policy in bootstrap context when oversized files are trimmed, and warn agents to read the full policy file before relying on scoped rules. Fixes #82920. (#82921) Thanks @galiniliev.",
      "Agents/skills: apply the full effective tool policy pipeline to inline `command-dispatch: tool` skill dispatch before owner-only filtering, preserving configured allow, deny, sandbox, sender, group, and subagent restrictions. (#78525)",
      "Codex: avoid spawning native hook relay subprocesses for post-tool/finalize events with no registered hook handlers while preserving pre-tool safety and approval relays. Fixes #76552. (#78004) Thanks @evgyur.",
      "Channel accounts: keep top-level default channel accounts visible when named accounts are added alongside default credential material, so mixed legacy/new account configs keep resolving `default` instead of silently dropping it.",
      "Agents/CLI: reject empty successful CLI subprocess replies as `empty_response` and keep them out of shared auth-profile health, so blank Claude CLI results no longer become green no-payload turns. Fixes #83231. (#83421) Thanks @joshavant.",
      "Codex/Telegram: synthesize native Codex tool progress from final turn snapshots so Telegram `/verbose` stays visible when command events arrive only at completion.",
      "Codex/Telegram: deliver Codex verbose tool summaries in direct message-tool-only turns while suppressing message-send and activity-log noise. (#83186) Thanks @kurplunkin.",
      "Mac app: make Channels settings open faster by deferring config-schema work, avoiding startup channel probes, caching decoded channel status rows, and showing only compact quick settings instead of the full generated channel schema.",
      "Control UI: include the Control UI and Gateway protocol versions in protocol-mismatch errors so stale app/dashboard pairings identify which side needs rebuilding or restarting.",
      "Gateway/protocol: restore Gateway WS protocol v4 and keep `message.action` room-event metadata on the existing `inboundTurnKind` wire field while preserving internal inbound-event classification.",
      "Agents/tools: prefer non-webchat session-key routes when the message tool has stale webchat context, so message-tool-only replies keep delivering to the originating channel. Fixes #82911. (#83004) Thanks @joshavant.",
      "Channels: keep direct-message last-route writes on isolated `per-channel-peer` sessions instead of contaminating the agent main session with channel delivery context. Fixes #36614. Thanks @aspenas.",
      "Mac app: move the Settings sidebar toggle into the native titlebar and tighten the General pane width.",
      "Mac app: keep visited Settings panes mounted so switching tabs no longer blanks and reloads their content.",
      "Mac app: make Config settings open from shallow schema lookups and load selected paths on demand instead of fetching and rendering the full generated config schema up front.",
      "Codex: sanitize inline image payloads before Codex app-server and OpenAI Responses replay, and clear poisoned Codex thread bindings after invalid image errors. Fixes #82878.",
      "Providers/GitHub Copilot: request identity-encoded Copilot API responses across token exchange, catalog, model calls, usage, and embeddings so compressed Business-account error payloads no longer reach JSON parsers as gzip bytes. Fixes #82871. Thanks @tonyfe01.",
      "Telegram: redact nested raw-update identifiers and user metadata before verbose raw update logging, preserving useful update/message ids without exposing chat, user, command, or profile details. (#82945) Thanks @galiniliev and @joshavant.",
      "Telegram: preserve replied-to bot messages, captions, and media metadata in group reply chains so follow-up replies understand what the user is reacting to. (#82863)",
      "Providers/Together: update PI runtime packages to 0.74.1 and emit Together-style `reasoning.enabled`/`max_tokens` controls for reasoning-capable OpenAI-completions models.",
      "Agents/diagnostics: split slow embedded-run `attempt-dispatch` startup summaries into workspace, prompt, runtime-plan, and final dispatch subspans so traces identify the delayed setup phase. Fixes #82782. (#82783) Thanks @galiniliev.",
      "Agents/Codex: flatten nested tool-result middleware blocks into bounded text so successful message sends are no longer replaced with `Tool output unavailable due to post-processing error`. Fixes #82912. Thanks @joeykrug.",
      "CLI/media: accept HTTP(S) URLs in `openclaw infer image describe --file`, fetching remote images through the guarded media path instead of treating URLs as local files. Fixes #82837. (#82854) Thanks @neeravmakwana.",
      "Agents/subagents: keep session-backed parent runs active when the child wait call times out before the child session has actually settled, so late subagent completions are reconciled instead of being lost. Fixes #82787. Thanks @ramitrkar-hash.",
      "Control UI: advertise shared Gateway protocol constants in browser connect frames, fixing protocol mismatch handshakes after protocol constant drift. Fixes #82882. Thanks @galiniliev.",
      "Gateway: add rollback protocol-mismatch diagnostics, including client protocol ranges in Gateway logs and deep status/doctor hints for stale client processes. Fixes #82841. (#82908)",
      "Agents/subagents: keep successful keep-mode completion payloads pending after final-delivery retry exhaustion, so requester recovery no longer loses final subagent results. Fixes #82583. (#82999) Thanks @joshavant.",
      "Gateway/auth: allow same-host trusted-proxy callers to use the documented local direct `gateway.auth.password` fallback after revisiting the #78684 fail-closed policy, while keeping token fallback rejected and forwarded-header requests on the trusted-proxy path. Fixes #82607. (#82953) Thanks @joshavant.",
      "Agents/subagents: wait for queued completion handoffs to reach the parent transcript before marking them announced, preventing busy parent runs from cleaning up before observing child results. Fixes #82913. (#83039) Thanks @joshavant.",
      "Agents/subagents: route group/channel subagent completions through message-tool-only handoffs when required and keep active-requester wake failures from dropping completion delivery. Fixes #82803. Thanks @galiniliev, @yozakura-ava, and @moeedahmed.",
      "Memory-core: scan persisted memory source sessions on startup, comparing on-disk transcripts against the index and marking only missing/newer/resized files dirty for incremental sync. Fixes #82341. (#82341) Thanks @giodl73-repo.",
      "Telegram: keep the top-level default account in the account list when named accounts or bindings are added alongside top-level credentials, preserving default polling while still letting named-only configs resolve to a single account. Fixes #82794. (#82794) Thanks @giodl73-repo.",
      "CLI/models: reuse command-scoped plugin metadata across model listing, provider catalog, auth, and synthetic-auth checks, restoring fast `openclaw models` runs for plugin-heavy installs. Fixes #82881. (#83033) Thanks @joshavant.",
      "CLI/channels: show configured official external channels such as Discord in `openclaw channels list` when their plugin package is missing, including the install and doctor repair command instead of reporting no configured channels. Fixes #82813.",
      "Signal: preserve mixed-case group IDs through routing and session persistence so group auto-replies keep delivering after updates. Fixes #82827.",
      "Agents/tools: keep the `message` tool available in embedded runs when it is explicitly allowed through `tools.alsoAllow` or runtime tool allowlists, so channel plugins with custom reply delivery can still use configured message sends. Fixes #82833. Thanks @cn1313113.",
      "WhatsApp: honor forced document delivery for outbound image, GIF, and video media so `forceDocument`/`asDocument` sends preserve original media bytes instead of using compressed media payloads. (#79272) Thanks @itsuzef.",
      "WhatsApp: reject symlinked Web credential files across auth checks and socket startup so unsafe `creds.json` paths cannot be read through. Thanks @mcaxtr.",
      "WhatsApp: name outbound document attachments from their MIME type when no filename is provided, so PDF and CSV sends arrive as `file.pdf` and `file.csv` instead of an extensionless `file`. Thanks @mcaxtr.",
      "Process/diagnostics: report active lane blockers in lane wait warnings so `queueAhead=0` no longer hides commands waiting behind active work. Fixes #82791. (#82792) Thanks @galiniliev.",
      "Process/diagnostics: stop counting the active processing turn as queued backlog in liveness warnings so transient max-only event-loop spikes do not surface as gateway warnings.",
      "Agents/replies: classify provider conversation-state rejections and return a clear message-channel error instead of auto-resetting or falling back to a generic runner failure. (#82616) Thanks @dutifulbob.",
      "Browser plugin: trust managed Chrome CDP diagnostics when launch HTTP probes race cold-start readiness, avoiding false startup failures. Fixes #82904. (#82986) Thanks @kmanan and @hclsys.",
      "Android: prompt before replacing a changed Gateway TLS thumbprint, showing the old and new SHA-256 fingerprints so users can accept expected certificate rotations instead of hard failing on pin mismatch. (#83077) Thanks @sliekens.",
      "CLI/status: render extra gateway-like service diagnostics as warning/info output instead of error output. Fixes #46930. (#82922) thanks @giodl73-repo.",
      "Agents/failover: classify Moonshot/Kimi exhausted-balance HTTP 429 payloads as billing instead of generic rate limits, preserving billing guidance and fallback behavior. Fixes #43447. (#83079) Thanks @leno23.",
      "Plugin SDK: bundle `openclaw/plugin-sdk/zod` into the published package artifact and verify the packed zod subpath stays self-contained, so pnpm global installs can register plugins without a package-local `zod` symlink. Fixes #78398. (#78515) Thanks @ggzeng.",
      "Providers/Google: drop compaction-truncated Gemini thought signatures before replay so malformed Base64 no longer aborts the next assistant turn. (#82995) Thanks @wAngByg.",
      "Gateway/mobile: allow paired iOS and Android clients to refresh same-family OS metadata on authenticated reconnect instead of requiring a new approval. (#83490) Thanks @ngutman.",
      "WhatsApp: treat `upload-file` as a supported media send intent by lowering path/URL uploads through the channel's normal send-media transport. (#81883) Thanks @ngutman.",
      "iOS: end Live Activities when OpenClaw is connected, idle, or disconnected, and show compact attention states for approval-required reconnects. (#83597) Thanks @ngutman.",
      "Control UI: hide child nav items when collapsing the active sidebar group. Fixes #42167. (#42223) Thanks @Aroool.",
      "CI/proof: skip the real-behavior-proof gate for private org maintainers by minting a least-privilege (`members: read`) GitHub App token and checking active membership in the `maintainer` team, instead of treating `author_association=CONTRIBUTOR` as definitively external. (#83418) Thanks @RomneyDa."
    ]
  },
  {
    "version": "2026.5.17",
    "date": "2026.5.17",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517",
    "features": [
      {
        "title": "Control UI",
        "description": "move settings-only destinations into the Settings workspace and add sidebar recent-session shortcuts plus a one-click new-session action.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Control UI",
        "description": "speed up scoped settings pages by loading required config before schema refreshes, caching burst schema responses, and opening Communications on lighter message settings first.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Control UI",
        "description": "simplify the Cron Jobs workspace with modal job creation, collapsed filters, and an empty state aimed at first-time setup.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Security/audit",
        "description": "add `security.audit.suppressions` for intentionally accepted audit findings, keeping suppressed matches out of the active summary while preserving them in JSON output with an active suppression notice. (#76949) Thanks @100menotu001.",
        "href": "https://github.com/openclaw/openclaw/pull/76949"
      },
      {
        "title": "Agents/subagents",
        "description": "label delegated task and subagent completion handoffs as ready for parent review, and tell requester agents to review/verify results before calling them done. (#78985) Thanks @100menotu001.",
        "href": "https://github.com/openclaw/openclaw/pull/78985"
      },
      {
        "title": "Providers/media",
        "description": "add fal and OpenRouter music-generation providers for the shared `music_generate` tool, including fal MiniMax/ACE/Stable Audio endpoints and OpenRouter Lyria audio output.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Maintainer tooling",
        "description": "warn before running JS package commands on raw Crabbox AWS boxes, pointing maintainers to Actions hydration or Blacksmith Testbox for CI-like proof.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Control UI",
        "description": "show provider quota usage in the Overview card and Chat header, and recover stale Chat in-progress state after missed terminal events. (#82647)",
        "href": "https://github.com/openclaw/openclaw/pull/82647"
      },
      {
        "title": "Mac app remote setup can now be preconfigured from `openclaw-mac configure-...",
        "description": "Mac app remote setup can now be preconfigured from `openclaw-mac configure-remote`, skips onboarding when config is already complete, supports direct LAN/Tailnet gateway URLs, allows private same-origin Control UI loads, and owns the SSH tunnel process when SSH is selected.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Providers/xAI",
        "description": "add xAI Grok OAuth login for SuperGrok subscribers, letting `xai/*` models and xAI media/tool providers authenticate without `XAI_API_KEY`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "CLI/cron",
        "description": "add `openclaw cron run --wait` with timeout and poll interval controls, plus exact `cron.runs --run-id` filtering so automation can block on one queued manual run. (#81929) Thanks @ificator.",
        "href": "https://github.com/openclaw/openclaw/pull/81929"
      },
      {
        "title": "Maintainer tooling",
        "description": "route Crabbox skill defaults through the repo brokered AWS config, leaving Blacksmith Testbox as an explicit opt-in instead of the broad-proof default.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "CLI/onboarding",
        "description": "localize the setup wizard and bundled channel setup flows for English, Simplified Chinese, and Traditional Chinese. (#80645) Thanks @GaosCode.",
        "href": "https://github.com/openclaw/openclaw/pull/80645"
      },
      {
        "title": "Agents/skills",
        "description": "cache hydrated `resolvedSkills` across warm gateway turns while keying reuse by the redacted effective config, reducing redundant skill snapshot rebuilds without crossing config-gated skill boundaries. (#81451) Thanks @solodmd.",
        "href": "https://github.com/openclaw/openclaw/pull/81451"
      },
      {
        "title": "Group chat",
        "description": "add core inbound event classification with opt-in `messages.groupChat.unmentionedInbound: \"room_event\"`, so always-on unmentioned room chatter can run as quiet context and speak visibly only via the message tool. (#81317) Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/81317"
      },
      {
        "title": "Codex/context engines",
        "description": "bind thread-bootstrap projection epochs to Codex app-server threads, carry redacted tool-result context into fresh threads, and rotate backend threads when projection state changes. (#82351) Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/82351"
      },
      {
        "title": "Agents/media",
        "description": "run `image_generate` through the shared async media-generation task lifecycle in session-backed chats, with task status, duplicate guarding, and message-tool completion delivery matching music/video.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026517"
      },
      {
        "title": "Gateway",
        "description": "add opt-in restart trace logs for restart signal, active-work drain, close, next-start, ready, and memory spans. (#82396) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/82396"
      },
      {
        "title": "Gateway/performance",
        "description": "split startup benchmark HTTP-listen timing from full gateway-ready timing and add post-bind plugin and sidecar diagnostics to restart-readiness traces. (#82603) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/82603"
      },
      {
        "title": "QA-Lab",
        "description": "add a deterministic local personal-agent scenario pack covering reminders, threaded replies, scoped memory recall, redaction, and safe tool followthrough. (#78219) Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/pull/78219"
      },
      {
        "title": "QA-Lab",
        "description": "add `--pack personal-agent` for `openclaw qa suite` so maintainers can run the accepted personal-agent scenario pack by selector. (#82760) Thanks @iFiras-Max1.",
        "href": "https://github.com/openclaw/openclaw/pull/82760"
      },
      {
        "title": "QA-Lab",
        "description": "add a private Codex-vs-Pi runtime parity axis with runtime-pair suite runs, parity reports, and release-check wiring. (#80238) Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/80238"
      },
      {
        "title": "Slack",
        "description": "add Slack assistant thread lifecycle support with assistant view manifest entries, suggested prompts, thread-scoped assistant sessions, and Slack-provided assistant context. Fixes #80787. Thanks @mobybot27.",
        "href": "https://github.com/openclaw/openclaw/issues/80787"
      }
    ],
    "fixes": [
      "Codex/app-server: cover `/btw` side-question native hooks and app-server command approvals without relying on unsupported turn-scoped hook config. (#82559) Thanks @Kaspre.",
      "Gateway/Docker: fail closed for non-loopback gateway starts without explicit shared-secret or trusted-proxy auth, and stop the image default command from bypassing config validation. Fixes #82865. (#82866) Thanks @coygeek.",
      "Agents/followups: route queued followup turns through CLI runtime backends instead of embedded harness lookup, preventing `claude-cli`/`google-gemini-cli` followups from failing before delivery. Fixes #82847. (#82857) Thanks @hclsys.",
      "CLI/sessions: let `openclaw sessions cleanup --fix-missing` prune malformed rows with unresolvable transcript metadata instead of throwing. Fixes #80970. (#82745) Thanks @IWhatsskill.",
      "Gateway/usage: refresh large session usage summaries in the background and reuse durable transcript metadata so `sessions.usage` no longer blocks Gateway requests on full transcript rescans. Fixes #82773. (#82778) Thanks @hclsys.",
      "CLI/MiniMax media: let `openclaw infer image describe --file` accept HTTP(S) image URLs without treating them as local paths, and keep automatic MiniMax image understanding routed through `MiniMax-VL-01` even when legacy MiniMax M2.x chat metadata claims image input. Fixes #82837. Thanks @mGaolin.",
      "TUI: restore the submitted draft when chat is busy instead of clearing it or queueing another run. Fixes #45326. (#82774) Thanks @hyspacex.",
      "Cron/memory: treat claimed `before_agent_reply` cron hooks as execution progress, so long memory dreaming promotion jobs are not aborted by the isolated-run pre-execution watchdog. Fixes #82811.",
      "Discord: recover transcript-backed full answers when progress-mode final payloads are ellipsis-truncated, so long replies fall back to normal chunked delivery instead of replacing the preview with a shortened message. Fixes #82807. Thanks @blueberry6401.",
      "Browser plugin: redact attach-details from Chrome MCP diagnostics and keep raw Chrome launch error output around long enough to surface in user reports without leaking sensitive paths.",
      "System prompts: clarify MEMORY guidance over generic TTS hints in the embedded speech-core/system-prompt scaffolding so agents prefer memory-store usage over speech defaults. Fixes #81930. Thanks @giodl73-repo.",
      "Agents/auth: include the checked credential source in missing API key errors, so users can see which env var, profile, or config path to fix. Fixes #82785. Thanks @loeclos.",
      "Providers/GitHub Copilot: hash Responses replay item ids with sha256 instead of a weak 32-bit hash and build same-provider Copilot tool-call ids distinctly, so concurrent tool-call replays no longer collide and reject follow-up turns.",
      "Agents/replay: normalize malformed assistant replay content before transport conversion while preserving empty-stop replay repair, so bad provider history no longer crashes with non-iterable content. Fixes #43795. (#82748) Thanks @IWhatsskill.",
      "Gateway/macOS: write LaunchAgent stdout under `~/Library/Logs/openclaw`, suppress stderr, and attach stdin to `/dev/null` so launchd startup avoids symlinked state-dir log failures and silent module-evaluation hangs. Fixes #40207 and #46153. Thanks @dhruvkelawala and @frankr.",
      "CLI/configure: let model-only section setup enter provider auth directly instead of first asking where the Gateway runs, unblocking OAuth/token setup in terminals where that unrelated prompt is unresponsive. Fixes #39223. Thanks @LevityLeads.",
      "Providers/Anthropic-messages: extract `reasoning_content` from `thinking` blocks during assistant replay so proxy providers that route through the Anthropic-messages transport preserve reasoning context across tool-call follow-up turns. Thanks @Sunnyone2three.",
      "Agents/GitHub Copilot: normalize replayed Responses tool-call IDs before dispatch so resumed sessions with historical overlong tool IDs continue instead of failing Copilot schema validation. (#82750) Thanks @galiniliev.",
      "CLI/infer: resolve plugin-scoped web search and fetch SecretRefs on the exact command credential surface, keeping non-selected and unrelated plugin secrets inactive. Fixes #82621. (#82699) Thanks @leno23.",
      "Providers/Anthropic Vertex: resolve installed provider public surfaces from package-local `dist/`, restoring `anthropic-vertex/*` model calls after plugin externalization. Fixes #82781. Thanks @0L1v3DaD.",
      "Gateway/exec approvals: bind path-shaped allowlists, safe-bin trust, skill auto-allow, Allow Always persistence, and approval audit metadata to the executable realpath so symlinked binaries cannot keep approvals after retargeting. Fixes #45595. Thanks @jasonftl.",
      "Mac app: reorganize Settings around a grouped sidebar, with separate Connection and Exec Approvals pages so everyday permissions and app toggles are easier to scan.",
      "Mac app: redraw the animated menu bar critter to match the rounded app mascot with antennae, side arms, two feet, and smoother template rendering.",
      "Mac app: cache settings config schema/drafts and load channel config in parallel with channel probes, making repeated Channels and Config tab switches responsive over remote tunnels.",
      "Control UI: negotiate the Gateway protocol from shared constants so rebuilt dashboards connect to current gateways instead of reporting a protocol mismatch.",
      "Mac app: let menu gateway/session error text wrap across a few lines and stop rebuilding dynamic Context/Gateway menu rows while the menu is open, reducing flicker.",
      "QA-Lab: expose Codex runtime tools during private parity runs and treat completed structural/tool-shape runtime drift as advisory, while preserving real runtime failures as lane blockers.",
      "Mac app: make device pairing approval sheets friendlier, with concise Mac/device copy, shortened identifiers, friendly scope labels, and Approve as the primary action.",
      "Providers/Qwen: honor session thinking level for `qwen-chat-template` payloads so `/think off` disables nested llama.cpp chat-template thinking controls. Fixes #82768. Thanks @bfox55.",
      "Feishu/wiki: reject numeric wiki space IDs before creating Lark clients and keep numeric-looking IDs documented as quoted opaque strings, preventing JavaScript precision loss in knowledge base calls. Fixes #45301. (#82769) Thanks @hyspacex.",
      "Control UI: simplify Talk settings to Voice, Model, and Sensitivity defaults, with provider, transport, exact VAD, and timing controls behind Advanced.",
      "Telegram: let catch-all mention patterns match captionless group photos, so media-only group messages reach the agent when the group is intentionally configured to respond to all messages. Fixes #44833. (#82756) Thanks @IWhatsskill.",
      "Gateway/pairing: reject forged loopback Control UI origins from non-local proxy paths, and keep mobile pairing setup on Tailscale bind mode pointing users to Tailscale Serve/Funnel instead of cleartext tailnet WebSockets.",
      "Telegram/Gateway: persist isolated polling offsets only after main-thread dispatch and preserve gateway caller scopes for Telegram message actions, fixing consumed-but-unrouted polling updates and recursive CLI send scope approvals. Fixes #82277. (#82705) Thanks @udaymanish6.",
      "Memory-core: abort timed-out embedding provider calls so remote embedding HTTP requests do not continue running after memory query or indexing timeouts. Fixes #82732. Thanks @adityarya24.",
      "Channels/stream previews: contain rejected background draft-stream flushes so preview send failures do not surface as fatal unhandled rejections. Fixes #82712. (#82713) Thanks @coygeek.",
      "Codex/app-server: keep shared native app-server clients isolated per agent runtime key so starting one agent no longer closes another agent's active Codex turn. Fixes #82758. Thanks @PashaGanson.",
      "Providers/OpenAI Codex: include base `gpt-5.5` and `gpt-5.4` reasoning metadata in the bundled Codex catalog so `/think xhigh` remains available for those models. Fixes #82744.",
      "Providers/OpenAI Codex: keep the native hook relay as the final Codex app-server thread config patch so hook-backed approvals stay enabled even when lower-priority config disables hooks. Thanks @solomonneas.",
      "Providers/MiniMax: declare CN endpoint auth aliases in the plugin manifest so `minimax-cn` and `minimax-portal-cn` reuse the correct base auth profiles instead of falling back to unrelated models after 401s. Fixes #63823. Thanks @kamusis.",
      "Secrets/audit: treat `$VAR` auth-profile values as env SecretRefs and stop reporting env-ref credentials as plaintext, including mixed `keyRef` plus env-ref profile states. Fixes #53998. Thanks @schirloc and @artwalker.",
      "Agents/model fallback: suppress fallback notices when the active OpenAI Codex runtime reports the same canonical OpenAI model.",
      "Agents/music generation: remove model-controlled request timeouts, default internal provider requests to five minutes, and keep configured timeouts at a 120-second floor.",
      "Cron: let isolated best-effort deliveries send the parent result immediately while fire-and-forget subagents keep running, avoiding false run timeouts. Fixes #44428. Thanks @amknight.",
      "Agents/media generation: stop logging delivered failure summaries as missing message-tool delivery when no generated media was expected.",
      "Agents/sessions: prioritize manual user turns ahead of queued cron and maintenance work in the same session lane, so visible follow-ups no longer wait behind background runs. Fixes #82764. (#82765) Thanks @galiniliev.",
      "Agents/edit tool: honor `file_path` and related path aliases when resolving edit-recovery targets, so post-write errors no longer surface false edit failures after the file actually changed. Fixes #81909. Thanks @giodl73-repo.",
      "QQBot: treat only explicit truthy `QQBOT_DEBUG` values as enabling debug logs, so false-like values such as `0` no longer expose debug output. Fixes #82644. (#82697) Thanks @leno23.",
      "Agents/session_status: resolve implicit no-arg status lookups against the live run session, so `/think` changes report the current thinking level instead of stale sandbox state. Fixes #82669. (#82696) Thanks @leno23.",
      "Discord: keep progress drafts visible for message-tool-only guild replies under the default coding tool profile. Fixes #82747. Thanks @eliranwong.",
      "Agents: prefer current structured assistant final answers when assembling final reply payloads, reducing reliance on streamed preview fragments after channel transcript recovery. (#82850) Thanks @joshavant.",
      "Discord: keep unmentioned room-event history until a visible Discord send succeeds, so quiet ambient context does not disappear before message-tool delivery. (#82573) Thanks @obviyus.",
      "CLI/setup: order the model/auth provider picker as OpenAI, Anthropic, xAI, Google, then the remaining providers alphabetically.",
      "Diagnostics/usage/voice-call: treat explicit zero and non-finite limits as empty results and reject invalid voice-call numeric CLI flags. Fixes #82646, #82650, #82651, and #82653. (#82679) Thanks @leno23.",
      "CLI/config: avoid redundant startup config/plugin checks for the guided `openclaw config` flow and show progress while source checkout CLI artifacts build or load.",
      "Config/Mac app: accept `gateway.remote.remotePort` in core config validation so Mac SSH remote setup stays compatible with the CLI.",
      "Gateway/diagnostics: add opt-in critical memory pressure stability snapshots with gateway logs, V8 heap, cgroup, active-resource, and redacted large session-file evidence. Fixes #82518.",
      "Doctor/Gateway: avoid treating unrelated macOS LaunchAgents as legacy gateways just because their environment values mention old checkout paths.",
      "Gateway/heartbeat: defer heartbeat runs while the target reply operation is queued or active, preventing heartbeat prompts from interleaving with WebChat responses before the streaming lane starts. Fixes #82722. Thanks @Andy-Xie-1145.",
      "CLI/setup: collapse raw gateway config keys in existing-config summaries into friendly `Model` and `Gateway` rows.",
      "CLI/config: show concise human config-write output with an indented backup path instead of printing checksum-heavy overwrite audit details by default.",
      "Skills/onboarding: hide brew-only dependency installers in Linux containers without Homebrew and show container-specific guidance instead of a broken install path. Fixes #14593. Thanks @amknight.",
      "CLI/docs: call the canonical lowercase docs MCP search tool and surface MCP errors instead of returning empty search results. Fixes #82702. (#82704) Thanks @hclsys.",
      "QA-Lab: add gateway log sentinels for plugin hook failures, Codex app-server stalls/timeouts, cron allowlist drift, live quota blockers, and direct-reply self-message transcripts so harness proof fails on self-health regressions. (#80323) Thanks @100yenadmin.",
      "QA-Lab: ignore heartbeat-only operational transcripts when capturing runtime parity cells so background checks cannot replace the scenario reply. (#80323) Thanks @100yenadmin.",
      "QA-Lab: pin threaded-memory parity runs to `memory-core`, keep bundled plugin resolution enabled for QA commands, and retry transient session-store lock reads. (#72045) Thanks @WuKongAI-CMU.",
      "QA-Lab/qa-channel: keep mock memory ranking, inbound media notes, and opened-file realpath checks stable for mock OpenAI qa-channel runs. (#66826) Thanks @gumadeiras.",
      "Gateway/exec approvals: wait for accepted async approval follow-up runs instead of direct-fallback sending duplicate completions when retries use different nonce keys. Fixes #82711. (#82717) Thanks @udaymanish6.",
      "Agents/subagents: mark completed subagent handoffs as ready for parent review so requester agents verify results and continue required follow-up work before reporting done. (#82724) Thanks @100menotu001.",
      "QA-Lab: validate Capture saved views loaded from browser storage so malformed local state cannot poison Capture inspector filters or layout controls. (#77722) Thanks @AsaZhou923.",
      "Agents/performance: reuse prepared plugin manifest metadata across local CLI turns, model catalog normalization, auth lookups, and tool capability checks, restoring fast pre-provider startup for plugin-heavy installs. Thanks @shakkernerd.",
      "CLI/config: add `--dry-run` support to `openclaw config unset`, with `--json` output and allow-exec validation parity with `config set`/`config patch` dry-run handling. (#81895) Thanks @giodl73-repo.",
      "CLI/infer: resolve command SecretRefs before local provider-backed capability runs, so web search/fetch and other local infer commands can use plugin-scoped credential refs. Fixes #82621. (#82798) Thanks @joshavant.",
      "Memory-core: retry disabled dreaming cron cleanup until cron is available after startup, so persisted managed dreaming jobs are removed after restart. Fixes #82383. (#82389) Thanks @neeravmakwana.",
      "Providers/xAI: keep retired Grok 3, Grok 4 Fast, Grok 4.1 Fast, and Grok Code slugs out of model pickers while preserving compatibility resolution for existing configs.",
      "Providers/xAI: replace the retired `grok-imagine-image-pro` image model with `grok-imagine-image-quality` in the bundled image-generation provider and docs. (#81399) Thanks @KateWilkins.",
      "Providers/OAuth: let browser-hosted identity provider pages read successful localhost callback responses, preventing xAI Grok OAuth from showing a false connection failure after OpenClaw completes login.",
      "Gateway/security: reject malformed HTTP and WebSocket request targets with the existing auth failure response instead of letting invalid URL parsing crash the Gateway. Fixes GHSA-6hc3-f4rg-377m.",
      "Browser/CDP: redact credential-bearing Chrome MCP and managed Chrome launch diagnostics, and require exact loopback entries before treating `NO_PROXY` as already covering local CDP proxy bypasses.",
      "Gateway/auth: reuse prepared startup auth SecretRef snapshots when the gateway startup config is unchanged, avoiding duplicate runtime secret preparation. (#82991) Thanks @samzong.",
      "Gateway/diagnostics: redact credential-bearing gateway target URLs and client diagnostics while preserving raw connection URLs for programmatic use, so connect-failure logs no longer surface embedded tokens.",
      "Gateway/auth: honor `OPENCLAW_GATEWAY_TOKEN` as the remote interactive fallback when no remote token is configured, keeping remote TUI setup aligned with documented auth precedence.",
      "Providers/xAI: continue polling video generations while xAI reports in-flight jobs as `pending`, so Grok video requests no longer fail before the final `done` response. (#82610) Thanks @Manzojunior.",
      "Logs: redact raw Basic auth and named security headers from `logs.tail` output before returning lines to read-scoped clients. Fixes #66832. Thanks @Magicray1217.",
      "CLI/gateway: emit structured JSON for gateway transport close/timeout failures when `--json` is requested by health, gateway health, and devices list commands. Fixes #79108. Thanks @TurboTheTurtle.",
      "Agents/Telegram: retry Bedrock non-visible terminal turns and mark non-deliverable attempts as trajectory errors instead of silent success. Fixes #82394. (#82905) Thanks @joshavant.",
      "Telegram: normalize announce group targets via a new `resolveSessionTarget` channel hook so scheduled announcements resolve consistently against the same Telegram session conversation registry as inbound turns. Fixes #81229. Thanks @giodl73-repo.",
      "QA/RTT: let `pnpm rtt` lease Convex-backed Telegram credentials while preserving RTT sample counts, sample timeouts, and result stats on the RTT harness path.",
      "Discord: bind delayed gateway `identify` retries to the originating socket generation so retries triggered after a reconnect do not identify against a fresh socket. Fixes #82225. Thanks @giodl73-repo.",
      "ACP/control plane: refresh cached runtime handles when agent config changes so ACP sessions stop using stale runtimes after `agents.defaults` edits. Fixes #82237. Thanks @giodl73-repo.",
      "Gateway/sessions: scope session data lookups by agent id so multi-agent gateway state cannot cross-leak session records across configured agents. (#81386) Thanks @pgondhi987.",
      "Gateway/restart: mark active main sessions as restart-aborted before forced restarts so startup recovery can resume interrupted turns instead of leaving them stranded as running. Fixes #82433. (#82772) Thanks @joshavant.",
      "Gateway/heartbeat: report heartbeat runner failures with background-specific copy instead of foreground `/new` recovery guidance. Fixes #82708. (#82848) Thanks @joshavant.",
      "Agents/media: require generated music/video completion agents to use the message tool for visible delivery and stop merging generated image attachments into message-tool-only source reply mirrors, avoiding direct fallback posts that can duplicate media the model already sent.",
      "Agents/media: accept generated media attachments on internal completion events and report delivery-loss failures as errors, so completed background music/video tasks do not disappear after provider success.",
      "Matrix/approvals: release in-flight reaction bindings when the channel approval handler stops mid-delivery, preventing stale approval targets after restart. Fixes #82485. (#82482) Thanks @Feelw00.",
      "Matrix/E2EE: stop requesting MSC4222 `state_after` sync responses so homeservers with incomplete state-after data do not leave fresh encrypted rooms without outbound room encryptors. Fixes #82515. Thanks @nickdecooman.",
      "TUI: update the displayed model in real time when an auto-fallback resolution swaps in a different model mid-turn, so the status line reflects the actual model handling the run. Fixes #82296. Thanks @giodl73-repo.",
      "Gateway/sessions: estimate context usage from local/OpenAI-compatible transcripts when provider usage telemetry is missing, so status no longer shows empty usage for real local-model sessions. Fixes #73990. (#82317) Thanks @giodl73-repo.",
      "Update/installers: override npm `min-release-age` quarantine for OpenClaw-managed package installs, so `openclaw update`, plugin updates, and hosted installer scripts can install the requested latest release immediately.",
      "Agents/sessions: preserve fresh post-compaction token snapshots across stale usage updates, preventing repeated auto-compaction after every message. Fixes #82576. (#82578) Thanks @njuboy11.",
      "Agents/replies: preserve active inbound reply context at the LLM boundary so Discord referenced-message turns do not answer from stale session history. Fixes #82608. (#82801) Thanks @joshavant.",
      "Agents/sessions: expose session transcript lock stale and max-hold tuning, and release the embedded run's coarse transcript lock before model I/O while locking persistence and cleanup separately. Fixes #13744. Thanks @amknight.",
      "Agents/OpenAI Responses: log redacted diagnostics for detail-less `response.failed` events while preserving failed response ids, so operators can correlate provider-side failures. Fixes #82558.",
      "Agents/OpenRouter: strip non-replayable Anthropic/xAI reasoning provenance tags from follow-up requests, preventing poisoned thinking signatures from breaking second turns. Fixes #82335. (#82380) Thanks @hclsys.",
      "Providers/xAI: send configurable reasoning effort only for Grok 4.3, preserving xAI's default low reasoning while omitting unsupported controls for Grok 4.20 reasoning models. (#81227) Thanks @jason-allen-oneal.",
      "Image generation: raise Google, OpenRouter, and xAI hosted provider default timeouts to 180 seconds so slow hosted image requests have more time to complete. (#75337)",
      "Agents/auth: redact OAuth refresh failure causes against in-memory, attempted, and reloaded credentials before generic token masking while ensuring failed ACP dispatch cleanup closes initialized runtimes.",
      "Google/Gemini CLI OAuth: add provider-owned refresh support for `google-gemini-cli` so expired Gemini CLI tokens refresh in OpenClaw instead of falling through to the generic unknown-provider path. Fixes #42541. Thanks @jason-allen-oneal.",
      "Agents/Anthropic transport: replay `reasoning_content` from compatible thinking blocks for Xiaomi/MiMo-style Anthropic Messages routes, preventing follow-up turns from losing required reasoning context. Fixes #81261. Thanks @Sunnyone2three.",
      "Telegram: cache successful startup bot identity by account and token fingerprint for up to 24 hours, so restarts can skip redundant `getMe` probes during Telegram API slow periods without permanently pinning renamed bots. Refs #82525.",
      "Telegram: keep streamed text replies in place when delayed TTS audio arrives, sending the audio as a follow-up instead of deleting the preview. Fixes #82570. (#82820) Thanks @joshavant.",
      "Channels/TTS: deliver TTS supplements across live-preview channels without duplicating text replies, covering WebChat, Telegram, Discord, Slack, Mattermost, and Matrix. (#82935) Thanks @joshavant.",
      "Gateway/sessions: discard stale metadata when recreating dead main session rows, so replacement sessions do not inherit old labels or transcript paths.",
      "Codex app-server: mark native context compaction completion events as successful, preventing false \"Compaction incomplete\" notices after successful Codex-managed compaction. Fixes #82470. (#81593) Thanks @Kyzcreig.",
      "Codex app-server: keep long-running turns alive while current-turn approvals, user input, dynamic tools, and notifications make progress, and carry that progress into the outer run timeout. (#82601) Thanks @100yenadmin.",
      "Gateway/channels: hand off traced channel account startup outside the startup diagnostic phase so long-lived channel tasks do not keep liveness warnings pinned to channel startup. Refs #82398.",
      "Gateway/restart: queue restart and shutdown signals received while the gateway startup loop is still returning its server handle, so startup-time restarts are not dropped during update churn. (#82660) Thanks @samzong.",
      "Gateway/restart: carry operator restart intent reasons into macOS LaunchAgent restart traces, so cascade diagnostics identify `gateway.restart` instead of a bare SIGTERM.",
      "GitHub Copilot: route device-login requests through the plugin SSRF guard with a GitHub-only policy.",
      "Group/channel replies: keep message-tool-preferred final replies private when the agent misses the message tool, and log suppressed payload metadata in the gateway debug log for quieter diagnosis.",
      "Gateway/WebChat: route image attachments through a configured vision-capable `imageModel` plan before inlining images, and carry that image-model fallback chain through runtime retries. (#82524) Thanks @frankekn.",
      "macOS app: open the Dashboard in a native WebKit window with standard macOS traffic-light controls, keep the Dock icon visible by default, and reuse the app's connected gateway auth for automatic Control UI login.",
      "WebChat: show progress while manual `/compact` is running by streaming a session operation event to subscribed Control UI clients. Fixes #82407. Thanks @Conan-Scott.",
      "Codex app-server: limit canonical OpenAI Codex app-server attribution rewrites to local transcript and trajectory records, leaving runtime/tool routing on the selected OpenAI model metadata so OpenAI API-key backup profiles keep their billing path.",
      "Codex app-server: hide native tool-search control tools from dynamic tool exposure while preserving the message tool.",
      "Android/chat: make bare and markdown URLs in chat messages tappable by preserving Compose URL annotations in rendered markdown. Fixes #82187. (#82392) Thanks @neeravmakwana.",
      "Plugins/doctor: migrate legacy top-level plugin `tools` declarations into `contracts.tools`, so `openclaw doctor --fix` repairs local plugins for the manifest tool contract. (#81112) Thanks @100yenadmin.",
      "Slack: guide agents to use stable `<@USER_ID>` mention tokens from context instead of plain `@name` text, so user mentions link and notify correctly. Fixes #82090. (#82152) Thanks @neeravmakwana.",
      "Auth: serialize provider login writes through the auth-profile lock for OpenAI Codex, Anthropic, Cloudflare AI Gateway, GitHub Copilot, and z.ai, preserving upsert semantics so a live Gateway cannot overwrite freshly refreshed OAuth credentials with an expired in-memory snapshot.",
      "Auth/Codex: remove runtime support for `oauthRef` sidecar-backed OAuth profiles and add a doctor repair that migrates affected Codex profiles back to inline `auth-profiles.json` credentials. (#82777) Thanks @joshavant.",
      "Slack: keep DM thread replies on the main direct-message session instead of routing them to invisible thread-scoped sessions. Refs #82390. (#82418) Thanks @kagura-agent.",
      "Auth/macOS: avoid creating the OAuth profile master key in Keychain automatically, falling back to the file-backed secret key so headless agents do not trigger a Keychain prompt.",
      "Codex app-server: release raw assistant completions when `turn/completed` is missing while keeping commentary/status items as progress, preventing completed Codex runs from hanging until timeout. Fixes #82343. (#82403) Thanks @IWhatsskill.",
      "Codex app-server: keep a bounded terminal guard after post-tool raw assistant completions so missing `turn/completed` events fail fast instead of leaving embedded runs stuck. Fixes #82775. (#82816) Thanks @joshavant.",
      "Agents/sessions: remove the transient `*.bak-<pid>-<ts>` backup written by `repairSessionFileIfNeeded` once the atomic replace succeeds, so a stuck session with a persistently malformed JSONL line no longer accumulates one snapshot per repair invocation. Fixes #80960. (#80969) Thanks @100yenadmin. Co-authored by @tynamite.",
      "CLI/status: show plain empty-state messages instead of empty Channels and Sessions tables when no channels or sessions exist.",
      "CLI/dashboard: probe Gateway readiness before handing out the dashboard URL, prompting to start or install the managed service when the Gateway is stopped and printing recovery commands instead of opening a dead browser tab.",
      "CLI/dashboard: treat Gateway `device identity required` probes as proof that the dashboard listener is reachable, so `openclaw dashboard` can still open the Control UI.",
      "CLI: hide decorative startup and status emoji on terminals that are unlikely to render them correctly, keeping semantic message and identity emoji intact.",
      "CLI/gateway: recover the Linux user systemd bus environment when `openclaw dashboard` starts the Gateway from stripped desktop shells such as VNC terminals.",
      "Gateway/WebSocket: log expected startup `1013 gateway starting` retry closes at debug instead of warn while preserving WARN for unexpected pre-connect failures. Fixes #76361. (#82457) Thanks @IWhatsskill.",
      "Providers/Xiaomi: strip synthetic empty array `items` from MiMo tool schemas while preserving typed array items, avoiding strict OpenAI-compatible schema rejection.",
      "Telegram: send the transcript-backed full final answer after progress-mode tool drafts when the dispatcher final payload is an ellipsis-truncated snapshot. Fixes #82409. Thanks @PashaGanson.",
      "Providers/Ollama: omit truthy native `think` payloads for models marked non-reasoning while preserving supported thinking models and explicit `think: false`. (#82445) Thanks @leno23.",
      "Update/channels: preserve pre-update channel config through package-swap doctor and post-core plugin repair so externalized channel upgrades do not drop configured chat channels. Fixes #82533. Thanks @imbaig.",
      "Update/doctor: repair configured externalized plugin installs during legacy 2026.4.x upgrades so configured Discord channels remain available after 2026.5.x package updates. Fixes #82813. (#82859) Thanks @joshavant.",
      "CLI/context engines: bootstrap and finalize non-legacy context engines for CLI turns while preserving transcript snapshots and deferred maintenance ownership. (#81869) Thanks @sahilsatralkar.",
      "Telegram: persist polling updates through restart replay so queued same-topic messages resume in order instead of losing context after a gateway restart. (#82256) Thanks @VACInc.",
      "Gateway/Gmail: abort in-flight Gmail watcher startup and hot-reload restarts before shutdown so reloads cannot spawn `gog serve` after the Gateway is closing. Thanks @frankekn.",
      "Agents/Codex: fall back to the embedded PI runner when OpenAI's implicit Codex harness preference cannot find a registered Codex plugin, preventing OpenAI-compatible gateway requests from failing with an unregistered harness error. Fixes #82437.",
      "Agents/OpenAI: honor `openai-codex:*` entries placed ahead of API-key backups in `auth.order.openai` for explicit OpenAI PI runs, and accept `models auth login --provider openai-codex --device-code` for headless sign-in. Fixes #82521. (#82605)",
      "CLI/channels: install missing externalized same-id channel plugins during `channels add --channel <id>`, so recovery for WhatsApp and other externalized stock channels does not require a separate `plugins enable` step. Fixes #82533.",
      "Windows node install: launch the node host through a hidden Windows launcher so login startup does not leave a persistent `cmd` window open. Fixes #81254.",
      "MCP plugin tools: forward host MCP `tools/call` `AbortSignal` through `createPluginToolsMcpHandlers().callTool` into plugin `tool.execute`, so host cancellation actually cancels in-flight plugin tool calls instead of letting them run to completion. Fixes #82424. (#82443) Thanks @joshavant.",
      "Agents/sandbox: honor explicit Docker sandbox env variables with credential-looking names during container creation, and recreate affected sandbox containers when the effective env policy changes. Fixes #82695. (#82763) Thanks @joshavant.",
      "Plugins: accept deprecated `api.on(\"deactivate\")` registrations as a dated compatibility alias for `gateway_stop`, so external plugin cleanup handlers run on Gateway shutdown while authors get migration guidance.",
      "Plugins: resolve bundled entry, dist-runtime, package-state, and public artifact paths from packaged roots, so bundled plugin probes and hardlinked public surfaces no longer fall back to source files or fail during restart. Fixes #78462. Fixes #75797. Refs #76865. Thanks @ginishuh and @ymebosma.",
      "Media: ignore image MIME and filename hints when bytes sniff as generic containers, so zip/octet-stream payloads mislabeled as images do not become local image media or keep image file extensions when staged.",
      "Update/doctor: avoid materializing `groupAllowFrom` for channel schemas that reject it, so package-swap doctor repairs do not fail on externalized Slack configs.",
      "Gateway/media: prevent image filenames from overriding generic non-image byte sniffing, so zip/octet-stream payloads mislabeled as images are offloaded or rejected before they become inline image attachments.",
      "Plugins/web search: downgrade stale optional provider installs to warnings so Gateway and doctor repair paths keep running after startup provider selection. Refs #82313. Thanks @crackmac.",
      "Telegram/Gateway: route targeted Telegram `/stop@bot` messages onto the control lane without cached bot metadata and match gateway stop requests across raw/canonical session aliases. (#82298) Thanks @VACInc.",
      "MS Teams/media: sniff inline `data:image/*` attachment bytes before staging them, skipping payloads that are not actually images.",
      "WebChat/media: require trusted local-media provenance before preserving local audio reply paths for display, so untrusted audio-looking paths go through normal staging and read-policy checks.",
      "WebChat: trust local Auto-TTS audio on block-streamed replies, including ACP-dispatched tails, so synthesized browser audio renders instead of being silently dropped. Fixes #82628. (#82701) Thanks @leno23.",
      "Agents/tool media: preserve trusted local-media provenance when merging generated tool attachments into final reply payloads, so trusted audio/media survives outbound display normalization.",
      "Anthropic/Claude CLI: write model-scoped `claude-cli` runtime policy when reusing local Claude CLI auth, so upgraded Telegram and Dashboard gateway turns keep using the CLI backend instead of falling through to Anthropic API billing. Fixes #82344. Thanks @amknight.",
      "Update: let package-swap `doctor --fix` persist core config repairs while plugin schemas are still converging, preventing update failures on externalized channel configs.",
      "Update: carry plugin-validation bypasses into config mutation pre-write reads, so package update doctor repairs can finish while externalized plugin schemas are converging.",
      "Update/doctor: keep plugin-validation bypasses on the top-level `$include` config write path, so package repair can update included plugin config files without flattening them into the root config.",
      "Agents/subagents: warn and continue completion announce cleanup when lifecycle cleanup fails, preventing ended subagent runs from becoming silent ghosts. Fixes #82306. Thanks @SebTardif.",
      "Telegram: let authorized text `/stop` commands use the fast-abort path before queued agent work, so active turns stop immediately instead of processing the abort after the turn finishes; foreign-bot `/stop@otherbot` mentions now stay on the regular topic lane instead of being routed into our control lane. Fixes #82162. Thanks @civiltox.",
      "Sessions: drop persisted entries with invalid session ids and strip malformed transcript file metadata before hydrating session runtime state.",
      "Auth/device: normalize malformed persisted device-auth token metadata before returning or preserving token entries.",
      "Pairing: skip malformed persisted pending pairing requests before approving valid channel pairing codes.",
      "Commitments: strip malformed optional reminder scope metadata from persisted commitments before matching pending follow-ups.",
      "Config persistence: normalize malformed auth profile credential fields/state, skip JSON-valid garbage transcript checkpoint rows, and let `openclaw doctor --fix` remove unrepairable cron job rows.",
      "Cron: skip persisted job rows with malformed schedule or payload shapes in memory, leaving the store for `openclaw doctor --fix` instead of hydrating them into runtime state.",
      "Cron: keep legacy string schedules and blank system-event jobs available for runtime repair/skip handling instead of dropping them as malformed persisted rows.",
      "Task persistence: drop malformed array/scalar requester-origin JSON from task and task-flow SQLite sidecars instead of restoring it as delivery metadata.",
      "Agents/timeouts: clarify model idle-timeout errors and docs so provider `timeoutSeconds` is shown as bounded by the whole agent/run timeout ceiling.",
      "Agents/OpenAI streams: yield cooperatively while processing bursty Completions and Responses chunks, keeping aborts, channel liveness timers, and startup heartbeats responsive under noisy model output. Refs #82462.",
      "Media/images: avoid broad model/plugin discovery while preparing image requests, preventing Windows event-loop stalls that could block Telegram polling. Fixes #82338. (#82799) Thanks @joshavant.",
      "Release tooling: align the published launcher Node floor, `npm start`, package script checks, sharded lint locking, Vitest root project coverage, and plugin-SDK declaration build cache metadata so release/package validation does not silently skip or ship stale surfaces.",
      "Cron/agents: honor configured subagent model fallbacks for isolated scheduled runs and forward that fallback policy into embedded agent timeout failover. Fixes #74985. Thanks @chrisgwynne.",
      "Codex app-server/MCP: scope user MCP servers to specific OpenClaw agent ids through an optional `mcp.servers.<name>.codex.agents` list and accept `codex.defaultToolsApprovalMode` (`auto`/`prompt`/`approve`) for native Codex approval defaults; OpenClaw strips the `codex` block before handing `mcp_servers` config to Codex. (#82180) Thanks @sercada.",
      "Agents/OpenAI Responses: clamp `input_tokens - cached_tokens` at zero and reconstruct `totalTokens` from input + output + cached components so Responses-API streams report consistent usage when providers under-report `input_tokens` relative to `cached_tokens`.",
      "Agents: mark adapter-caught tool execution failures as error tool results in embedded Pi sessions, so models can retry recoverable edit failures instead of seeing a successful tool result. Fixes #81546. (#81564) Thanks @najef1979-code and @MonkeyLeeT.",
      "Plugins: reject malformed `package.json` `openclaw.extensions` metadata during install, discovery, and post-update payload smoke instead of silently dropping invalid entries.",
      "Plugins: reject package metadata records whose `package.json` resolves outside the plugin root instead of trusting persisted or reconstructed registry snapshots.",
      "Plugins: ignore malformed persisted package channel/install metadata instead of crashing catalog reconstruction or leaking invalid install hints.",
      "Plugin releases: reject package `files` negations that would omit advertised package-local runtime entries from npm plugin tarballs.",
      "Media/files: sniff `input_file` bytes before trusting declared MIME headers, rejecting spoofed image or zip payloads before they become agent-visible text.",
      "Plugins/dependencies: scrub stale managed-root `openclaw` ownership metadata without deleting a linked active host package, preventing plugin installs from downgrading npm-global hosts. Fixes #79462. Thanks @lisandromachado.",
      "Gateway/update: keep shutdown hook-runner imports on a stable dist entry and ship a legacy chunk alias so package swaps do not strand running gateways on missing shutdown chunks. Fixes #81819. Thanks @najef1979-code.",
      "Config persistence: ignore malformed array/scalar auth profile, cron job state, and session store entries instead of hydrating them into numeric profile ids, crashed cron rows, or invalid session records.",
      "Config persistence: strip malformed pending final-delivery session fields on load so replay/recovery paths skip poisoned reply metadata instead of crashing on raw objects.",
      "Config persistence: strip malformed plugin extension state and promoted session-slot ownership on load so corrupted session rows do not leak poisoned plugin metadata into replay/projection paths.",
      "Gateway/sessions: ignore malformed compaction checkpoint rows during session projection so corrupted stores do not crash session list/describe responses or show bogus checkpoint counts.",
      "Gateway/sessions: keep reachable transcript history when imported tree transcripts reference missing or legacy parent rows, preventing session history reads from going empty after a partial import.",
      "Trajectory export: report incomplete transcript parent chains and stop cyclic branch walks so malformed imports cannot hang `/export-trajectory`.",
      "Session replay: skip malformed user/assistant-shaped transcript rows during silent session resets instead of copying invalid entries into the fresh transcript.",
      "Transcript state: skip malformed persisted JSONL entries before compaction/rewrite helpers choose the active leaf.",
      "Backup verify: report malformed archive manifests with a stable error instead of leaking raw JSON parser details.",
      "Session export: report skipped malformed transcript JSONL rows instead of silently omitting them from exported HTML archives.",
      "Providers: reject malformed successful Runway, BytePlus, and Ollama embedding responses with provider-owned errors instead of raw parser/type failures, silent bad vectors, or long bogus polling.",
      "Providers/images: reject malformed successful OpenAI-compatible, OpenAI, Google, fal, and OpenRouter image responses with provider-owned errors instead of raw shape failures, silent invalid base64 skips, or empty image results.",
      "Providers/videos: reject malformed successful xAI, OpenRouter, and fal video create, poll, and result responses with provider-owned errors instead of raw parser failures or long bogus polling.",
      "Providers/videos: let selected-model capability overlays clear inherited `providerOptions`, so fallback skips models that explicitly accept no provider-specific options instead of forwarding unsupported knobs.",
      "TTS/providers: honor preferred provider aliases when routing model override directives, so alias-selected speech providers receive unqualified `[[tts:*]]` overrides.",
      "Providers/audio: reject malformed successful OpenAI-compatible, ElevenLabs, and Deepgram speech responses with provider-owned errors instead of raw parser failures, wrong-shaped transcripts, or JSON/text bodies treated as audio.",
      "Providers/embeddings: reject malformed successful OpenAI-compatible, Google Gemini, and Amazon Bedrock embedding responses instead of silently returning empty or coerced vectors.",
      "Providers/catalogs: reject malformed successful LM Studio, GitHub Copilot, DeepInfra, Vercel AI Gateway, and Kilocode model-list responses with provider-owned errors instead of raw parser/type failures or silent fallback catalogs.",
      "Providers/polling: reject array, null, or scalar successful operation status responses with provider-owned malformed JSON errors instead of waiting until timeout.",
      "ACPX/Codex: reap plugin-local Codex ACP adapter orphans on startup after wrapper crashes while keeping direct adapter commands out of launch-lease injection. Fixes #82364. (#82459) Thanks @joshavant.",
      "Agents/model fallback: periodically probe the configured primary for auto-pinned fallback sessions, announce fallback/recovery transitions, and clear the pin when it recovers, preventing sessions from staying on a fallback model indefinitely. Fixes #82544. Thanks @crpol.",
      "Telegram: send presentation-only payloads by rendering fallback text and inline buttons instead of treating them as empty. Fixes #82404. (#82449) Thanks @joshavant.",
      "Providers/Kimi: preserve Kimi Coding `reasoning_content` replay and backfill assistant tool-call placeholders when thinking is enabled, so `kimi-for-coding` follow-up tool turns no longer fail after prior tool use. Fixes #82161. Thanks @amknight.",
      "Providers/search tools: reject malformed successful xAI, Gemini, and Kimi web/code search responses with provider-owned errors instead of silent `No response` payloads or ungrounded fallback state.",
      "Trajectory export: skip and report malformed session/runtime JSONL rows in `manifest.json` instead of letting wrong-shaped session rows crash support bundle export.",
      "Voice calls: persist rejected inbound-call replay keys so duplicate carrier webhook retries stay ignored after a Gateway restart.",
      "Config/doctor: copy fallback-enabled channel `allowFrom` entries into explicit `groupAllowFrom` allowlists during `openclaw doctor --fix`, preserving current group access without adding runtime fallback-transition flags.",
      "Config/doctor: replace source-only official Brave and Slack plugin installs from trusted catalog metadata during `openclaw doctor --fix`, unblocking externalized stock plugin recovery after upgrade. (#82425) Thanks @joshavant.",
      "Config/memory: warn instead of rejecting configs that select the official external `memory-lancedb` slot before the plugin is installed, with an explicit no-persistent-memory startup warning and install hint. Fixes #82428. (#82438) Thanks @giodl73-repo.",
      "Agents/bootstrap: ignore stale completed root `BOOTSTRAP.md` context after workspace setup cleanup fails, preventing channel agent turns from treating it as a directory. (#82463) Thanks @joshavant.",
      "Update/doctor: re-enable the Codex plugin during `openclaw doctor --fix` when configured OpenAI agent models require the Codex runtime, preventing upgraded configs from failing with an unregistered Codex harness. Fixes #82368. (#82502) Thanks @joshavant.",
      "Configure: show one OpenAI provider entry with ChatGPT/Codex sign-in and API key choices, and keep browsed Codex models in the saved `/model` picker allowlist.",
      "Agents/model fallback: preserve auto fallback chains across deferred config reloads when session fallback provenance survives but `modelOverrideSource` is missing. Fixes #81982. Thanks @joshavant.",
      "Hooks: raise bounded gateway lifecycle hook wait budgets to 5 seconds for shutdown and 10 seconds for pre-restart, giving short restart notification handlers time to finish before shutdown continues. (#82273) Thanks @bryanbaer.",
      "Plugin releases: require external package compatibility metadata in the npm plugin publish plan, matching the ClawHub package contract before packages ship.",
      "Agents/OpenAI-compatible: honor per-model `max_completion_tokens`/`max_tokens` params in embedded OpenAI-completions runs so high-token Kimi-style routes keep their configured completion cap. Fixes #82230. Thanks @albert-zen.",
      "Agents/local: install a local gateway request scope around trusted `openclaw agent --local` runs, so subagent completion announces can use in-process gateway dispatch without crashing. Fixes #82140. Thanks @Kushmaro.",
      "Cron: keep failed isolated-agent runs from marking successful result delivery when only the failure notification was delivered. Fixes #72985. Thanks @Allenbluff.",
      "Discord: validate message-read results before normalizing channel history and report unexpected payloads with a Discord boundary error instead of `map is not a function`. Fixes #82252. Thanks @jessewunderlich.",
      "Agents/runtime: apply `agents.defaults.models[\"provider/*\"].agentRuntime` as provider-wide model runtime policy while preserving exact model runtime precedence. Fixes #82243. Thanks @rendrag-git.",
      "Model picker: show the effective Codex runtime first for official OpenAI routes while keeping Pi available as an alternate and preserving Pi-first custom OpenAI-compatible providers. Fixes #82269. Thanks @rendrag-git.",
      "Agents/auto-reply: restrict `NO_REPLY` prompt guidance to automatic group/channel replies, remove legacy silent-reply rewrites, and suppress accidental direct-chat silent tokens instead of delivering fallback text. Fixes #82254. Thanks @absol89.",
      "Telegram: retain a longer partial-stream preview when a final callback only carries an ellipsis-truncated snapshot, preventing the visible answer and transcript mirror from being replaced by the short preview. Fixes #82239. Thanks @crash2kx.",
      "Telegram/active-memory: run blocking memory recall through the Telegram provider for direct-message turns even when the hook context carries the raw chat id, preventing embedded recall from launching against an invalid numeric channel. Fixes #82177. Thanks @cslash-zz.",
      "Control UI/WebChat: keep optimistic image messages from embedding large inline `data:` previews and preserve image-only user turns in chat history, avoiding browser stack overflows when sending image attachments. Fixes #82182. Thanks @ExploreSheep.",
      "Agents/media: preserve message-tool-only delivery for generated music and video completion handoffs, so group/channel completions do not finish without posting the generated attachment.",
      "Telegram: drain queued outbound deliveries after polling reconnect confirms fresh `getUpdates` activity, so stale-socket and network recovery do not leave failed replies stranded. Fixes #50040. Refs #82175. Thanks @dmitriiforpost-commits and @shellyrocklobster.",
      "Gateway/model auth: abort active provider runs when saved auth is removed through the Gateway control plane, refresh live runtime auth snapshots, and surface `stopReason: \"auth-revoked\"` to clients. Fixes #81987. (#82346) Thanks @joshavant.",
      "Codex app-server: keep the raw tool-output idle watchdog armed after `custom_tool_call_output` notifications, so post-tool stream silence fails fast instead of waiting for the terminal idle timeout. Fixes #82274. (#82378) Thanks @joshavant.",
      "Codex app-server: enforce OpenClaw `before_tool_call` policy for Codex-native app-server shell and approval paths, preventing native tool execution from bypassing plugin policy. Fixes #82372. (#82496) Thanks @joshavant.",
      "Telegram: mark isolated polling ingress unhealthy when a spooled inbound backlog stalls while Bot API polling still succeeds, so gateway/channel health no longer stays green after Telegram DM processing wedges. Fixes #82175. Thanks @shellyrocklobster.",
      "Telegram: drop expired approval callbacks from isolated polling after approval id expiry so stale inline-button updates do not retry forever across restarts. Fixes #82347. (#82455) Thanks @joshavant.",
      "Agents: strip Gemini/Gemma `<final>` tags with attributes or self-closing syntax from delivered replies, including strict final-tag streaming enforcement. Fixes #65867. Thanks @grizdum.",
      "macOS/update: disarm legacy `ai.openclaw.update.*` LaunchAgents when `openclaw update` starts from one, preventing KeepAlive relaunch loops that repeatedly restart the Gateway and replay update continuations. Fixes #82167. Thanks @DougButdorf.",
      "Agents/replay: strip internal runtime-context metadata and `NO_REPLY` sentinels from provider replay and pending final-delivery recovery so restart and heartbeat resumes do not feed control text back to the model. Fixes #76629. Thanks @fuyizheng3120, @bryan-chx, and @cael-dandelion-cult.",
      "Agents/replay: skip malformed transcript tail rows when deduping embedded assistant gap-fill, preventing truncated JSONL from duplicating the final assistant reply during replay recovery.",
      "LINE: acknowledge signed webhook events before agent processing so slow model replies do not cause LINE `request_timeout` delivery failures. Fixes #65375. Thanks @myericho.",
      "LINE: stop cron recovery from inferring lowercased LINE recipients from canonical session keys, so long-running task replies do not silently retry undeliverable push targets. Fixes #81628. (#81704) Thanks @edenfunf.",
      "TTS: preserve channel-derived voice-note delivery for `/tts audio` replies even when the provider output is not natively voice-compatible. (#82174) Thanks @xuruiray.",
      "Codex app-server: preserve inbound sender metadata and source-channel provenance on mirrored user prompts, including failure snapshots, so channel history keeps the original sender identity. (#82184) Thanks @zknicker.",
      "Codex app-server: yield projector work to the event loop between embedded-run notifications while preserving pre-turn rate-limit capture, reducing gateway stalls from account and MCP status notifications. Fixes #81936. (#82333) Thanks @joshavant.",
      "Plugins/web search: start the configured web_search provider plugin during gateway startup, including auto-enabled external providers behind allowlists. Fixes #82313. (#82376) Thanks @joshavant.",
      "Codex account/status: treat metadata-only rate-limit buckets as returned but empty so `/codex status` and `/codex account` report `none returned` instead of counting phantom limits.",
      "Codex/Lossless: keep Codex explicit compaction on native app-server threads while allowing Lossless through the context-engine slot; `openclaw doctor --fix` now migrates legacy `compaction.provider: \"lossless-claw\"` config to `plugins.slots.contextEngine`.",
      "Cron/doctor: report scheduled jobs with explicit `payload.model` overrides, including provider namespace counts and default-model mismatches, so stale cron model pins are visible during auth or billing investigations. Fixes #82151. Thanks @mgonto.",
      "Codex app-server: keep the short turn-completion idle watchdog armed after the last non-assistant current-turn item completes, so a quiet Codex app-server releases the OpenClaw session lane before the outer attempt timeout. Fixes #82171. (#82172) Thanks @funmerlin.",
      "Providers/OpenRouter: stop adding empty DeepSeek V4 `reasoning_content` placeholders to assistant tool-call replay messages and strip empty replay artifacts before follow-up Chat Completions requests, so `openrouter/deepseek/deepseek-v4-pro` no longer fails after tool use. Fixes #82150. (#82158) Thanks @luyao618 and @Suquir0.",
      "OpenAI-compatible providers: honor streaming-usage compatibility metadata when deciding whether to send `stream_options.include_usage`, while keeping bundled Volcengine routes opted in to Ark streaming usage. Refs #44845. (#82181) Thanks @xuruiray.",
      "Gateway/approvals: treat `turnSourceTo` as optional in `canBridgeNoDeviceChatApprovalFromBackend`, matching the existing optional handling of `turnSourceAccountId` and `turnSourceThreadId`. Channels without a recipient concept (webchat, control-ui) leave `turnSourceTo` null on both the approval snapshot and the replay params, so the prior required-string check rejected every backend replay with `APPROVAL_CLIENT_MISMATCH`. Cross-channel replay is still gated by the required `turnSourceChannel` and `sessionKey` checks. Fixes #82132. (#82136) Thanks @ottodeng.",
      "OC Path: add `openclaw path set --dry-run --diff` so addressed edits can be reviewed as a unified diff before writing.",
      "Cron: load runtime plugins before isolated cron model and delivery resolution so external channels can be selected for scheduled runs. (#82111) Thanks @medns.",
      "Cron: mirror successful direct scheduled deliveries into the resolved destination session transcript while preserving isolated-delivery awareness policy. (#80786) Thanks @cavit99.",
      "Cron: preserve rotated transcript identity after session-bound scheduled runs compact, so `sessionTarget: \"current\"` keeps the next user message on the same conversation. Fixes #82164. Thanks @weissfl.",
      "Twitch: keep gateway accounts running until shutdown instead of treating successful monitor startup as a clean channel exit, preventing immediate auto-restart loops. Fixes #60071. (#81853) Thanks @edenfunf.",
      "Agents/auto-reply: honor `agents.defaults.silentReply` and per-surface group silent-reply policy when generic agent-run failure fallbacks decide whether to send visible fallback text. Fixes #82060. (#82086) Thanks @taozengabc.",
      "Discord: render channel topic context as structured untrusted metadata in reply prompts and stop duplicating inbound message bodies or exposing raw `EXTERNAL_UNTRUSTED_CONTENT` envelopes. Fixes #82168. Thanks @ronan-dandelion-cult.",
      "Codex app-server: arm the short idle watchdog as soon as Codex accepts a turn, so accepted turns with no current-turn progress release the OpenClaw session lane before the outer model timeout. Fixes #82129. Thanks @Francois3d.",
      "Agents/replies: also strip `<function_response>` workflow output when it becomes visible after an adjacent stripped tool-call XML block, closing the remaining sanitizer leak from #47444. Thanks @5toCode.",
      "Control UI/WebChat: focus the composer when users click the visible input chrome and restore larger, labeled desktop composer controls while preserving compact mobile taps. Fixes #45656. Thanks @BunsDev.",
      "Discord: suppress generated link embeds on outbound messages by default so agent-sent URLs stay as plain links unless `channels.discord.suppressEmbeds` is disabled.",
      "System events: keep owner downgrades in structured metadata while rendering queued prompt text as plain `System:` lines, preserving least-privilege wakeups without prompt-visible trust labels. (#82067)",
      "Gateway/agents: abort active embedded runs when diagnostics detect a stale native tool call, preventing nested agent sessions from staying deadlocked through restart recovery. Fixes #81976. (#82369) Thanks @joshavant.",
      "Slack: default outbound bot link unfurls off so agent-sent URLs no longer expand into inline previews unless `channels.slack.unfurlLinks` is enabled. (#82123) Thanks @kibi-bsp.",
      "Slack: keep finalized draft-preview replies visible when a later same-turn tool warning is delivered normally instead of clearing the edited answer. Fixes #81903. (#81979) Thanks @neeravmakwana.",
      "Providers/Xiaomi: preserve MiMo `reasoning_content` on multi-turn tool-call replay, including custom Xiaomi-compatible proxy routes, so follow-up turns no longer fail with `400 Param Incorrect`. Fixes #81419. (#81589) Thanks @lovelefeng-glitch and @jimdawdy-hub.",
      "Slack/plugins: route plugin-owned modal `view_submission` and `view_closed` events through Slack interactive handlers before compacting the agent-visible system event, so plugins can persist full submitted form state while the transcript stays compact. Fixes #82102. Thanks @shannon0430.",
      "Providers/Xiaomi: promote legacy MiMo V2 reasoning-only final answers to visible text, including Xiaomi-compatible proxy routes, so `mimo-v2-pro` and `mimo-v2-omni` replies no longer appear blank when the answer arrives in `reasoning_content`. Fixes #60261. (#60304) Thanks @HiddenPuppy.",
      "Providers: preserve required `reasoning_content` replay for Kimi K2.6/K2 thinking and MiMo V2.6 OpenAI-compatible tool-call follow-up turns while keeping the stock OpenAI/Qwen strip path intact. Fixes #82139. Thanks @yimao.",
      "Memory search: stop using chokidar write-stability polling for memory and QMD watchers so large Markdown extraPath trees no longer build up regular file descriptors; changed files now settle through the existing debounced sync queue. Fixes #77327 and #78224. (#81802) Thanks @frankekn, @loyur, and @JanPlessow.",
      "Message tool: rename the Discord channel-create schema field exposed to models from `type` to `channelType`, avoiding NVIDIA NIM JSON Schema parser failures while still accepting legacy `type` tool calls. (#78920) Thanks @YashSaliya.",
      "Feishu: send CardKit streaming cards as delivered deltas and retry failed updates, preventing duplicated or dropped streamed text. Fixes #82417. (#82419) Thanks @hclsys.",
      "WhatsApp: accept `group:`-prefixed group JIDs for outbound targets so `whatsapp:group:<jid>@g.us` resolves to the canonical group JID. Thanks @mcaxtr.",
      "Gateway/Gmail: stop queued post-ready Gmail sidecars before hot reload and abort stale Tailscale setup, so cancelled watcher restarts cannot rewrite an old public hook target or report abort-killed commands as success. (#82395) Thanks @samzong."
    ]
  },
  {
    "version": "2026.5.14",
    "date": "2026.5.14",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514",
    "features": [
      {
        "title": "Channels/SDK",
        "description": "add normalized command turn facts to channel turn construction and expose command-turn helpers for plugin inbound contexts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Agents/config",
        "description": "support per-agent bootstrap profile overrides for `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars`, inheriting from `agents.defaults` when omitted. Fixes #69966. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/69966"
      },
      {
        "title": "Dependencies",
        "description": "route root ambient Node proxy agents through `@openclaw/proxyline` and drop root `proxy-agent`, `https-proxy-agent`, and `minimatch` dependencies.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Canvas",
        "description": "lazy-load HTTP host, hosted media resolver, CLI implementation, and tool runtime modules so Gateway startup only pays Canvas implementation cost on first use. (#82001) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/82001"
      },
      {
        "title": "Control UI/i18n",
        "description": "add a `pnpm ui:i18n:report` baseline report for hardcoded-copy focus areas and locale fallback metadata. (#81320) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/81320"
      },
      {
        "title": "Maintainer tooling",
        "description": "add a repo-local `codex-review` skill for Codex closeout reviews, including local dirty-work and PR-branch review helpers that rerun until no accepted/actionable findings remain and avoid unsupported inline prompts with `--base`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Maintainer tooling",
        "description": "fail CI when pull requests add package patch files or pnpm patched dependencies, preserving the upstream-and-bump dependency workflow.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Codex app-server",
        "description": "stream commentary preambles into editable channel progress drafts without promoting them to final answers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Codex migration",
        "description": "remove the bundled `codex-cli` backend and repair legacy `codex-cli/*` model refs to the Codex app-server route on `openai/*`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Gateway/plugins",
        "description": "add a descriptor-backed gateway method registry so plugin-owned RPC methods carry scope metadata, preserve hidden core collision checks, and keep advertised method lists separate from internal core handlers. (#82063)",
        "href": "https://github.com/openclaw/openclaw/pull/82063"
      },
      {
        "title": "Gateway/startup",
        "description": "add owner-level startup trace attribution for auth, plugin loading, lookup counts, and plugin sidecar services. (#81738) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/81738"
      },
      {
        "title": "Plugins/hooks",
        "description": "expose the resolved effective `contextTokenBudget` plus source/reference metadata on `llm_output` and sanitized `model_call_*` hook events/contexts so plugin cost and context-health alerts can use agent-level context caps. Fixes #64327. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/64327"
      },
      {
        "title": "Channels/status reactions",
        "description": "wire `StatusReactionController` into WhatsApp message turns (queued â†’ thinking â†’ tool â†’ done/error lifecycle, on par with Telegram and Discord), add `deploy`/`build`/`concierge` emoji categories with tool-token routing, and replace the status reaction defaults with self-explanatory emoji (ðŸ§ thinking, ðŸ› ï¸ tool, ðŸ’» coding, ðŸŒ web, â³ stallSoft, âš ï¸ stallHard, âœ… done, âŒ error, ðŸ—œï¸ compacting) so stall and lifecycle reactions read as status indicators instead of emotional commentary. Fixes #59077. (#80612) Thanks @gado-ships-it.",
        "href": "https://github.com/openclaw/openclaw/pull/80612"
      },
      {
        "title": "Control UI",
        "description": "add a browser-local Text size setting in Appearance and Quick Settings, scaling chat and dense UI text while keeping inputs above the mobile Safari focus-zoom threshold. Fixes #8547. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/8547"
      },
      {
        "title": "Gateway/plugins",
        "description": "add a default-off `admin-http-rpc` plugin for selected control-plane methods, with security docs and no core endpoint config. (#81806) Thanks @liorb-mountapps.",
        "href": "https://github.com/openclaw/openclaw/pull/81806"
      },
      {
        "title": "Docs",
        "description": "add a dedicated ds4 provider page with local DeepSeek V4 Flash config, on-demand startup, context sizing, and live verification steps.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Release validation",
        "description": "add a package-installed Docker user-journey lane that verifies onboarding, mocked model setup, external plugin install/uninstall, ClickClack outbound/inbound messaging, Gateway restart survival, and doctor.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Release validation",
        "description": "add package-installed Docker lanes for real TTY onboarding, media and memory persistence, published-package upgrade journeys, and local marketplace plugin install/update/uninstall coverage.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Maintainers",
        "description": "add a Clawdtributor skill for Discrawl-backed contributor PR triage, live status checks, and compact review formatting.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Telegram",
        "description": "support Mini App `web_app` buttons in generic message presentation payloads, allowing `openclaw message send --presentation` to render Telegram Web App inline buttons for private chats. (#81356) Thanks @jzakirov.",
        "href": "https://github.com/openclaw/openclaw/pull/81356"
      },
      {
        "title": "Scripts",
        "description": "add `OPENCLAW_HEAVY_CHECK_LOCK_SCOPE=worktree` so high-capacity local worktrees can use independent heavy-check locks while shared locks remain the default. Fixes #80729. (#80734) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/80734"
      },
      {
        "title": "Agents/subagents",
        "description": "deliver native `sessions_spawn` tasks in the child session's first visible `[Subagent Task]` message instead of hiding the task in the sub-agent system prompt, keeping delegation auditable without duplicating tokens. Fixes #78592. Thanks @bradestes and @stainlu.",
        "href": "https://github.com/openclaw/openclaw/issues/78592"
      },
      {
        "title": "Messages/queue",
        "description": "make mid-turn prompts steer active runs by default via `/queue steer`, preserve `/queue followup` and `/queue collect` for users who want messages to queue by default, and make `/steer` continue as a normal prompt when steering is unavailable. (#77023) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/77023"
      },
      {
        "title": "Voice Call/Telnyx",
        "description": "add realtime media-streaming call support for conversational voice calls. (#81024) Thanks @dynamite-bud.",
        "href": "https://github.com/openclaw/openclaw/pull/81024"
      },
      {
        "title": "Dependencies",
        "description": "add release dependency evidence reports, npm advisory gating, and PR dependency-change awareness so maintainers can review dependency risk before and during releases. Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      },
      {
        "title": "Gateway",
        "description": "expose optional `isHeartbeat` metadata on agent event payloads so clients can distinguish scheduled heartbeat runs from ordinary chat runs. (#80610) Thanks @medns.",
        "href": "https://github.com/openclaw/openclaw/pull/80610"
      },
      {
        "title": "Agents",
        "description": "add `agents.defaults.runRetries` and `agents.list[].runRetries` config for embedded Pi runner retry loop limits. (#80661) Thanks @medns.",
        "href": "https://github.com/openclaw/openclaw/pull/80661"
      },
      {
        "title": "Codex",
        "description": "add node-backed Codex CLI session listing and binding so an OpenClaw conversation can continue an existing Codex CLI session running on a paired node.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026514"
      }
    ],
    "fixes": [
      "Models/providers: trust the exact configured custom/local provider `baseUrl` origin for guarded model HTTP requests, so loopback, LAN, tailnet, and private DNS endpoints work without broad private-network access while different ports and metadata/link-local pivots remain blocked. Fixes #80732. (#80751) Thanks @Kaspre and @msitarzewski.",
      "Bind shell script operands after combined options [AI]. (#81882) Thanks @pgondhi987.",
      "fix(canvas): validate snapshot response formats [AI]. (#81881) Thanks @pgondhi987.",
      "Constrain provider catalog entry paths [AI]. (#81884) Thanks @pgondhi987.",
      "Require canonical node platform IDs [AI]. (#81880) Thanks @pgondhi987.",
      "Agents/Azure OpenAI Responses: default unset Azure OpenAI API versions to `preview` so `/openai/v1/responses` calls use Azure's current Responses API route. (#82026) Thanks @leoge007.",
      "Control UI/WebChat: compact the desktop chat header controls into a single aligned row so the session, model, thinking, and action controls no longer waste vertical space. Thanks @BunsDev.",
      "Control UI/settings: widen the Personal quick-settings card to a 3/1 desktop split and keep Appearance/Automations below it on narrower layouts. Thanks @BunsDev.",
      "Agents/model catalog: reuse manifest model-id normalization metadata while loading persisted read-only catalog rows, avoiding repeated metadata scans.",
      "Agents: retry empty final turns for generic `anthropic-messages` providers instead of limiting non-visible recovery to Kimi, so custom/proxied Anthropic-compatible routes can recover with a visible answer. Addresses #46080. Thanks @wmgx, @w1tv, and @iFwu.",
      "Agents/replies: strip workflow `<function_response>` scaffolding from user-visible sanitizer paths so raw tool output does not leak into chat history, transcript mirrors, or channel replies. Fixes #47444. Thanks @5toCode.",
      "Agents/media: deliver generated image, music, and video results through structured attachments, keep message-tool-only Codex completions on the message tool, and fail completion handoff when expected media is not actually sent.",
      "Diagnostics/Codex: recover stalled embedded Codex app-server runs after the shorter default stalled-run window so queued turns resume sooner.",
      "Codex app-server: fall back to same-account Codex CLI OAuth tokens at runtime when the local OpenAI Codex refresh token is rejected, without overwriting the canonical OpenClaw auth profile. Fixes #82069. Thanks @aaajiao.",
      "Control UI: rotate browser service-worker caches per build so updated Gateways are less likely to keep serving stale dashboard bundles that trigger protocol mismatch errors.",
      "Gateway/protocol: lazy-compile protocol validators on first use instead of compiling every AJV schema during cold import, reducing startup CPU and RSS. (#82064) Thanks @samzong.",
      "File transfer: lazy-load node.invoke policy enforcement so gateway startup only registers static command metadata until file-transfer commands run. (#82211) Thanks @samzong.",
      "Discord: report unresolved configured bot-token SecretRefs during startup instead of treating the account as unconfigured. (#82009) Thanks @giodl73-repo.",
      "Discord: pass an explicit Ogg muxer to ffmpeg when transcoding voice-message audio through staged temp files, restoring TTS voice-message delivery. Fixes #82074. Thanks @hwlbb.",
      "Discord/Feishu: allow Discord voice uploads through RFC2544 fake-IP proxy DNS and pass Feishu's voice ffmpeg transcode through an explicit Ogg muxer. (#82088) Thanks @hwlbb and @6peng888.",
      "Audio/STT: pass explicit WAV/Ogg muxers to ffmpeg for whisper-cli and WhatsApp staged temp outputs so `.part` filenames do not break transcription or voice-message delivery. Fixes #82094. (#82110) Thanks @civiltox.",
      "CLI/config: preserve numeric-looking object keys such as Discord guild IDs during `config patch` recursive merges. (#81999) Thanks @giodl73-repo.",
      "Gateway/OpenAI-compatible HTTP: forward `response_format` from `/v1/chat/completions` requests through agent stream params to upstream Chat Completions and Responses transports, restoring structured-output support. Fixes #82003. (#82004) Thanks @Lellansin.",
      "Control UI/WebChat: let sidebar markdown code-block Copy buttons use the same delegated clipboard handler as chat messages. (#58709) Thanks @tikitoki.",
      "Discord/streaming: only mark partial draft previews delivered after final edit or fallback delivery succeeds, so failed finalization cleanup removes stale truncated drafts instead of leaving them as the visible reply. Fixes #82035. Thanks @compoodment.",
      "macOS/Gateway: surface leftover `ai.openclaw.update.*` launchd updater jobs in `openclaw gateway status --deep` and doctor so post-update launchd loops point at the stale job cleanup. Fixes #81859. Thanks @BKF-Gitty.",
      "macOS/screen snapshots: reject malformed `screen.snapshot` params before capture, bound base64 results against the projected `node.invoke.result` frame, and preserve stable caller-facing errors for oversized payloads and capture failures. Fixes #68181. Thanks @shaun0927 and @BunsDev.",
      "Config/doctor: rotate capped `.clobbered.*` repair snapshots by artifact timestamp so repeated repairs keep the newest forensic copy instead of preserving only the first capped set. (#82012) Thanks @Kaspre.",
      "Telegram: initialize the bot before isolated polling drains spooled updates so default isolated polling no longer retries every update with `Bot not initialized` and stalls replies. Fixes #81973. (#81975) Thanks @neeravmakwana.",
      "Codex app-server: keep Codex-runtime compaction on native Codex threads, warn when stale OpenClaw compaction summarizer overrides are ignored, and let doctor remove those unsupported overrides, avoiding public OpenAI Responses summarization with Codex OAuth tokens. Fixes #82008. (#82027) Thanks @pashpashpash.",
      "Telegram: apply method-aware Bot API request timeouts to direct message/action clients so `openclaw message delete --channel telegram` no longer waits on grammY's 500-second default when the API request wedges. Fixes #81908. Thanks @DashLabsDev.",
      "Cron: treat attempt dispatch and assembled context as execution-start milestones so isolated agent jobs that have reached backend dispatch are governed by their configured job timeout instead of the 60s pre-execution watchdog. Fixes #81368. (#81871) Thanks @alexph-dev.",
      "Doctor/auth: warn about stale per-agent OAuth auth profile shadows and let `openclaw doctor --fix` remove the local shadow so agents inherit the fresher main-agent credential.",
      "Status/channels: show configured channels whose plugin setup failed to load as `plugin load failed: dependency tree corrupted; run openclaw doctor --fix` instead of silently dropping them from `openclaw status`.",
      "Status/update: show pending or failed update restart handoffs in `openclaw status` and make `openclaw update` print explicit gateway restart verified, skipped, or failed guidance.",
      "QA/update: add an E2E corrupt plugin dependency lane that verifies `status --all` guidance, `doctor --fix` cleanup, and channel status recovery.",
      "Discord/channels: make `openclaw channels list --all` prefer reachable Gateway runtime account status and mark configured-but-unavailable credentials, avoiding false `not configured` output when Discord is running from service-only env. Fixes #79343. Thanks @EricY019.",
      "WhatsApp: mark text slash commands as command turns so authorized group command replies stay visible under message-tool-only group reply mode. (#81972) Thanks @barbarhan.",
      "Providers/OpenCode Go: stop sending unsupported reasoning parameters to Kimi K2.5/K2.6, avoiding OpenCode Go payload-validation failures while preserving DeepSeek V4 reasoning support.",
      "Providers/OpenRouter: normalize invalid Chat Completions reasoning replay fields while preserving valid OpenRouter reasoning pass-back, avoiding follow-up turn 500s without affecting stock OpenAI calls. (#82101) Thanks @sliverp.",
      "Installer: handle noninteractive git installs from moving refs without tag-fetch conflicts, while keeping immutable refs on frozen lockfile installs. (#81875) Thanks @keshavbotagent.",
      "Codex app-server: inject native client factories per run and compaction attempt instead of using module-scope test state, avoiding temporal-dead-zone reads during cyclic startup. (#81148) Thanks @bdjben.",
      "Plugin skills: replace generated Windows plugin-skill directories before publishing the current skill link, avoiding repeated `EINVAL` warnings from stale non-symlink entries. Fixes #81432. (#81446) Thanks @hclsys and @vincentkoc.",
      "Channels/config: treat channel entries with only `enabled: true` as configured state so plugin-backed channels can auto-enable from an explicit on switch. Fixes #81323. (#81331) Thanks @EvanYao826 and @vincentkoc.",
      "CLI/update: add an update finalization path for externally swapped core runtimes, running update-time doctor repair and plugin convergence from post-doctor config and install-record state before reporting completion. Thanks @shakkernerd.",
      "CLI/update: refresh config after package-update doctor repairs before post-update plugin sync, avoiding stale-hash conflicts during package upgrade journeys.",
      "macOS/Gateway: hand managed LaunchAgent package self-updates to the post-exit CLI path and report handoff failures through the update restart sentinel instead of leaving agent-invoked updates pending. Fixes #81894. (#81945) Thanks @BKF-Gitty.",
      "Agents/WebChat: stop a successful assistant turn whose stale `errorMessage` matches a billing, auth, or rate-limit pattern from rotating profiles, falling back, or surfacing a hard `FailoverError` unless the current attempt has a real failover failure. (#70900) Thanks @truffle-dev.",
      "Control UI/usage: remove the duplicated inner Usage page heading so the shared dashboard header is the only page title. Thanks @BunsDev.",
      "Control UI/WebChat: keep mobile PWA composer controls above the iOS home indicator when standalone safe-area insets under-report. Fixes #77408. Thanks @BunsDev.",
      "Control UI/logs: make the Gateway Logs stream height responsive to the viewport with a minimum height floor, so larger screens can show substantially more log lines without collapsing on shorter viewports. (#53916) Thanks @extrasmall0.",
      "ACP/Codex: surface redacted Codex wrapper stderr for generic ACP internal failures and preserve safe Codex model/provider routing in isolated `CODEX_HOME`, making `sessions_spawn(runtime=\"acp\", agentId=\"codex\")` failures actionable. Fixes #80079. (#80718) Thanks @leoge007.",
      "Agents/trace: mark execution traces as fallback-used when merged fallback attempts prove a primary model failed before the winning attempt, keeping `/trace raw` and agent JSON telemetry consistent. Addresses fallback telemetry in #81213. Thanks @BKF-Gitty.",
      "ACP: treat rejected timeout config options as best-effort hints so ACP turns continue with adapters that do not support `session/set_config_option` timeout keys. Fixes #81250. (#81603) Thanks @qkal.",
      "Cron/Codex: default exact-command scheduled agent turns to lightweight bootstrap context so automation runs the command before loading workspace identity or memory context.",
      "Codex cron: disable native Codex project-doc loading for lightweight app-server cron turns so scheduled jobs avoid project-doc injection after OpenClaw suppresses bootstrap context. (#81822) Thanks @jalehman.",
      "Codex plugin/Gateway: strip unpaired UTF-16 surrogates from Codex app-server JSON-RPC payloads and let stale reply-work recovery abort stalled reply runs, preventing malformed media turns from wedging gateway lanes.",
      "Codex app server: force OAuth refresh requests to perform a real token refresh instead of reusing unchanged inherited auth-profile tokens after refresh failures. (#80738) Thanks @simplyclever914.",
      "Control UI/WebChat: render `/tts audio` replies as playable audio attachments through the assistant-media ticket path, with structured-audio compatibility for older live payloads. (#81722) Thanks @Conan-Scott.",
      "Bind gateway approval access to requester metadata [AI]. (#81380) Thanks @pgondhi987.",
      "Telegram: let isolated polling drain independent topics, DMs, and status/control commands concurrently while preserving same-lane order. (#81849) Thanks @VACInc.",
      "Telegram: derive readable plain-text retries from HTML fallback sends so parse failures show `label (url)` links instead of raw anchors. (#81764) Thanks @alexph-dev.",
      "Ollama/Doctor: copy explicit native Ollama `contextWindow` or `maxTokens` provider/model budgets into `params.num_ctx` during `openclaw doctor --fix`, preserving large-context configs after native Ollama stopped inferring per-request `num_ctx`. Fixes #81878. (#81928) Thanks @joshavant and @ArthurusDent.",
      "Discord: honor `threadName` on `message send` to existing threads by renaming the thread after successful delivery, and warn when the rename cannot be applied. Fixes #81836. (#81933) Thanks @joshavant.",
      "Build: keep externalized Slack, OpenShell sandbox, and Anthropic Vertex runtime dependency declarations out of the root dist artifact build.",
      "ClawHub: include Amazon Bedrock and Bedrock Mantle provider packages in the published registry metadata so the externalized providers are discoverable from ClawHub as well as npm.",
      "Codex account/status: hide empty rate-limit buckets and show server-reported usage-limit blocks without calling them available.",
      "Auto-reply/Claude CLI: bridge CLI-runtime assistant text-delta agent events into the chat reasoning preview through `onReasoningStream`, mirroring the existing assistant-text (#76914) and tool-event (#80046) bridges and adding gating so non-CLI runtimes are unaffected. Thanks @anagnorisis2peripeteia and @pashpashpash.",
      "Mantis: keep QA evidence in Actions artifacts only and stop publishing evidence files to Git-backed artifact branches.",
      "CLI/migrate: handle delayed Codex plugin marketplace responses so warnings, next-steps, and conflict states render with âš ï¸ glyphs and post-install migration retries the marketplace fetch instead of silently skipping plugin items. (#81625) Thanks @sjf.",
      "Channels/Weixin: bump the bundled `@tencent-weixin/openclaw-weixin` external entry to `2.4.3` (from `2.4.1`) so onboarding and `openclaw channels add` install the current Tencent Weixin (personal WeChat) plugin release. (#81730) Thanks @scotthuang.",
      "CLI: lazy-load model, plugin, and device runtime helpers and keep channel option help on generated startup metadata or generic fallback text so parent/help output renders without importing those runtime paths.",
      "CLI: route `plugins list --json` through the parsed command fast path and cover it in response budgets so plugin JSON inventory avoids full CLI registration work.",
      "Control UI/Overview: render recent session rows through the shared session display resolver so label/displayName priority, key-equivalent labels, and channel fallbacks stay consistent with the chat selector. (#50696) Thanks @Maple778 and @BunsDev.",
      "Gateway/network: keep OpenClaw-installed undici dispatchers on HTTP/1.1 and treat destroyed HTTP/2 session errors as recoverable network teardown, preventing `ERR_HTTP2_INVALID_SESSION` from crashing active gateway turns. Fixes #81627. (#81838) Thanks @joshavant.",
      "Memory/daily-files: widen the daily-memory file matcher used by Dreaming, rem-backfill, rem-harness, the doctor sweep, and short-term promotion so `memory/YYYY-MM-DD-<slug>.md` files written by the bundled session-memory hook (and any future slugged variants) are discovered alongside the date-only `memory/YYYY-MM-DD.md` shape. Date extraction still uses the leading `YYYY-MM-DD` capture group, so per-day ingestion/promotion semantics are unchanged for existing date-only files; slugged files now flow through the same paths instead of being silently skipped. Fixes #69536. Thanks @jack-stormentswe.",
      "macOS/Gateway: fail managed LaunchAgent stop and restart when the configured gateway port remains busy after cleanup instead of reporting success while a listener survives. Fixes #73132. Thanks @BunsDev.",
      "Telegram: reuse the sticky IPv4 Bot API transport for periodic getMe health checks, so IPv4-working hosts with broken IPv6 egress stop logging repeated probe timeouts. Fixes #76852. (#76856) Thanks @SymbolStar.",
      "Telegram: ship the isolated polling worker at the root dist path used by the bundled worker loader, avoiding startup failures looking for `dist/telegram-ingress-worker.runtime.js`.",
      "Control UI/Gateway: stop stale token-mismatch reconnect loops when no trusted device-token retry is available, and cap rendered chat history by raw tool-output size so dashboard auth/history work cannot keep degrading channel sockets. Fixes #72139. Thanks @BunsDev.",
      "Memory/daily-files: prioritize the canonical `memory/YYYY-MM-DD.md` daily note before same-day slugged session captures during capped live ingestion and historical seeding, preserving existing daily-note behavior when slugged files exist.",
      "Gateway/OpenAI-compatible HTTP: parse shared JSON endpoint paths without trusting malformed Host headers, avoiding 500s before `/v1/chat/completions`, `/v1/responses`, and `/v1/embeddings` request handling.",
      "Telegram: resolve plugin native commands with the active runtime config so commands like `/codex ...` stay on the native command path.",
      "Voice-call webhooks: parse webhook and realtime upgrade paths without trusting malformed Host headers, avoiding 500s before provider signature checks or path rejection.",
      "Media store: reject malformed redirect `Location` headers as media-download failures instead of letting URL parsing escape the async response callback.",
      "ClickClack: skip malformed realtime websocket frames instead of stopping the channel monitor on a single bad JSON event.",
      "Browser tool: treat malformed node proxy `payloadJSON` responses as browser proxy failures instead of leaking raw JSON parser errors.",
      "Gateway HTTP: match models, session kill, and session history route paths without trusting malformed Host headers, avoiding pre-auth 500s on those endpoints.",
      "Google Meet/Codex: report malformed node proxy `payloadJSON` responses with plugin-owned errors instead of leaking raw JSON parser failures.",
      "Debug proxy: reject malformed relative-form proxy targets with a controlled 400 response instead of letting URL parsing escape the request handler.",
      "File transfer: reject malformed inline `file_write` base64 before computing hashes or invoking paired nodes, avoiding Node's lenient base64 decoder.",
      "QA channel: skip malformed inline inbound attachment base64 instead of staging silently corrupted media for agent turns.",
      "Microsoft Teams: reject malformed inline HTML image base64 padding instead of decoding corrupted `data:` image attachments.",
      "Voice-call realtime: ignore malformed provider media-frame base64 before forwarding audio into bridge and transcription paths.",
      "QQBot: reject malformed stored cron payload base64 before JSON decoding structured reminder data.",
      "Telnyx voice-call: use the raw `client_state` fallback when webhook state is malformed base64 instead of using silently corrupted decoded text.",
      "Google Meet: report malformed node-host params JSON with plugin-owned errors instead of leaking raw JSON parser failures.",
      "CLI/export-trajectory: report malformed encoded request JSON with a stable CLI error instead of leaking raw parser output.",
      "ComfyUI: report malformed workflow API JSON responses with owned errors instead of leaking raw parser failures.",
      "DeepInfra video: report malformed successful API JSON responses with provider-owned errors instead of leaking raw parser failures.",
      "Brave Search: report malformed web and LLM-context API JSON with provider-owned errors instead of leaking raw parser failures.",
      "xAI tools: report malformed web search, X search, and code execution JSON with provider-owned errors instead of leaking raw parser failures.",
      "Nextcloud Talk: report malformed room-info and bot-admin JSON with channel-owned errors instead of leaking raw parser failures.",
      "Microsoft Teams: report malformed Graph and delegated OAuth JSON with channel-owned errors instead of leaking raw parser failures.",
      "Google Chat: report malformed Chat API and certificate JSON with channel-owned errors instead of leaking raw parser failures.",
      "Firecrawl: report malformed search and scrape API JSON with provider-owned errors instead of leaking raw parser failures.",
      "Tavily: report malformed search and extract API JSON with provider-owned errors instead of leaking raw parser failures.",
      "Perplexity: report malformed Search API and chat completion JSON with provider-owned errors instead of leaking raw parser failures.",
      "Exa: report malformed search API JSON with a provider-owned error instead of leaking raw parser failures.",
      "Memory host SDK: report malformed remote JSON with caller-scoped errors for POST and batch file upload responses instead of leaking raw parser failures.",
      "Media providers: report malformed operation-poll and audio-transcription JSON with provider-owned errors instead of leaking raw parser failures.",
      "MiniMax, Gemini, Kimi, and Ollama web search: report malformed API JSON with provider-owned errors instead of leaking raw parser failures.",
      "Image and video generation: reject malformed base64 payloads from OpenAI-compatible image responses, DeepInfra video data URLs, and MiniMax image responses instead of accepting Node's lenient decoder output.",
      "Media MIME sniffing: reject malformed base64 payloads before sniffing chat/tool image MIME types instead of accepting Node's lenient decoder output.",
      "Web search: mark the managed `web_search` `query` argument as required in the advertised tool schema, so schema-following local models stop emitting `queries` payloads that fail at execution. Fixes #82097. Thanks @SpidFightFR.",
      "Twilio voice-call: report malformed successful API JSON responses with provider-owned errors instead of leaking raw parser failures.",
      "Voice-call provider APIs: report malformed successful guarded JSON responses with provider-prefixed errors instead of leaking raw parser failures.",
      "Realtime transcription: report malformed provider websocket JSON frames with owned parser errors instead of leaking raw `SyntaxError` objects.",
      "Microsoft Foundry: report malformed Azure CLI token JSON with owned auth errors instead of leaking raw parser failures.",
      "Gateway/model pricing: report malformed external pricing catalog JSON with source-owned errors instead of leaking raw parser failures.",
      "QA Lab: report malformed model-catalog subprocess JSON with an owned error and ignore invalid catalog rows.",
      "Google Meet: report malformed browser-control status JSON with plugin-owned errors instead of leaking raw parser failures.",
      "Google provider: report malformed SSE stream JSON with provider-owned errors instead of leaking raw parser failures.",
      "Node host: report malformed built-in invoke `paramsJSON` with stable invalid-request errors instead of leaking raw parser failures.",
      "Amazon Bedrock embeddings: report malformed provider response JSON with provider-owned errors instead of leaking raw parser failures.",
      "QQBot: report malformed access-token JSON with provider-owned errors instead of leaking raw parser failures.",
      "OpenAI embeddings: report malformed batch output JSONL with provider-owned errors instead of leaking raw parser failures.",
      "Synology Chat: report malformed JSON webhook payloads with stable channel-owned parser errors.",
      "Mattermost: report malformed interaction callback JSON with stable channel-owned parser errors.",
      "Twilio voice-call: report malformed media stream WebSocket JSON with an owned parser error instead of logging raw parser failures.",
      "Tlon/Urbit: report malformed SSE event JSON with an owned parser error instead of logging raw parser failures.",
      "Signal: return a stable installer error when GitHub release metadata is malformed JSON.",
      "ClawHub: report malformed successful marketplace JSON responses with owned errors instead of leaking raw parser failures.",
      "Provider usage: report malformed successful usage JSON responses with stable provider errors instead of leaking raw parser failures.",
      "Tlon/Urbit: report malformed scry response JSON with owned errors instead of leaking raw parser failures.",
      "LM Studio: report malformed model list and model load JSON with owned errors instead of leaking raw parser failures.",
      "Matrix: ignore malformed percent-encoding in optional location URI parameters instead of letting a bad `geo:` event abort inbound message handling.",
      "Web search: auto-detect Brave through its legacy `tools.web.search.apiKey` compatibility fallback while keeping doctor migration to `plugins.entries.brave.config.webSearch.apiKey` as the canonical repair, so allowlisted isolated cron runs do not report `web_search` unavailable before migration. Fixes #81538. Thanks @atomicmonk.",
      "Plugins: memoize repeated in-process plugin metadata snapshots and keep vanished managed-install residue from forcing full derived discovery, reducing gateway/status startup scans under large plugin sets. Fixes #81143 and #79806. (#81570) Thanks @Kaspre, @holgergruenhagen, @JanPlessow, and @mjamiv.",
      "CLI/plugins: route lazy plugin command-registration chatter to stderr only during JSON-output command registration, keeping plugin-backed `--json` stdout parseable without changing parse-only or pass-through `--json` behavior. Fixes #81535. (#81536) Thanks @ScientificProgrammer and @vincentkoc.",
      "Plugins: treat git plugin install refs as refs instead of checkout flags, so option-like selectors fail checkout instead of silently installing the default branch. Fixes #79898. (#79901) Thanks @afurm and @vincentkoc.",
      "Doctor/memory: stop warning that no memory plugin is active when an enabled alternate memory plugin explicitly owns the memory slot, while preserving the warning for missing or disabled slot entries. Fixes #78540. (#78557) Thanks @carladams1299-lab and @vincentkoc.",
      "Plugins: keep derived plugin metadata snapshots uncached when the persisted registry is missing, disabled, or stale, so newly added plugins are discovered without restarting. (#81064) Thanks @Kaspre.",
      "Plugins: discover provider plugins from `setup.providers[].envVars` credentials during provider discovery while keeping the deprecated `providerAuthEnvVars` fallback. (#81542) Thanks @JARVIS-Glasses.",
      "Docs/Codex harness: clarify that per-agent `CODEX_HOME` isolates `~/.codex` while inherited `HOME` intentionally keeps `.agents` discovery and subprocess user-home state available.",
      "CLI/plugins: keep bare plugin and parent-command help on the lightweight path, avoiding plugin registry discovery before rendering help.",
      "Auth: reclaim dead-owner stale file locks before retrying locked writes, so crashed OAuth refreshes no longer wedge `auth-profiles.json` until manual cleanup.",
      "CLI tables: preserve muted/color styling on wrapped continuation lines after multiline cells, keeping `openclaw plugins list` descriptions readable.",
      "Process execution: collapse case-insensitive duplicate child environment keys on Windows so caller-provided overrides such as `PATH` cannot be shadowed by host `Path`.",
      "Browser CLI: request the existing `operator.admin` gateway scope explicitly for browser control commands, avoiding unnecessary scope-upgrade approval loops. Fixes #81555. (#81716) Thanks @joshavant.",
      "Web: honor explicitly configured global `web_search` providers during provider ownership resolution while keeping sandboxed `web_fetch` limited to bundled providers.",
      "Plugins/doctor: repair configured legacy npm declaration stubs by reinstalling their npm packages into the managed plugin root instead of loading workspace `node_modules`, and warn when discovery sees those stubs. Fixes #79632. Thanks @Dylanzhang1128 and @vincentkoc.",
      "Channels: keep configured third-party channel plugins visible in `openclaw channels list` when their manifest declares `channels` but has not added `channelConfigs` metadata yet. Fixes #81334. (#81340) Thanks @AllynSheep and @vincentkoc.",
      "Agents: skip bootstrap file and hook preload work on completed `continuation-skip` turns when no workspace bootstrap is pending, reducing isolated-agent prep latency without changing first-turn bootstrap behavior. Fixes #81548. Thanks @delizaran-unpa.",
      "Config: validate JSON dry-runs against plugin-owned channel schemas, so external channel fields are not rejected by stale bundled schemas. Fixes #77887. (#81504) Thanks @giodl73-repo.",
      "iOS: restore first-use Contacts, Calendar, and Reminders permission prompts and add Privacy & Access status/actions in Settings. Thanks @BunsDev.",
      "Canvas: return not found for malformed percent-encoded Canvas/A2UI/document asset paths and keep decoded parent traversal blocked before path normalization.",
      "Telegram: allow trusted local Bot API media files whose filenames start with dots instead of falling back to remote download.",
      "Agents/Codex app-server: remap injected context files under dot-dot-prefixed workspace directories when a run switches to an effective sandbox workspace.",
      "Control UI/i18n: use the installed workspace pi runtime for locale refreshes, update the fallback package pin, and skip scheduled refreshes with invalid provider credentials instead of failing main.",
      "CI/performance: authenticate the clawgrit report repository remote during both checkout and publish so performance report pushes do not fail after benchmarks complete.",
      "Hooks: load workspace-relative legacy hook modules from dot-dot-prefixed directories without treating the filename prefix as parent traversal.",
      "Plugins: preserve installed package metadata and persisted registry freshness checks for plugin package paths under dot-dot-prefixed directories.",
      "Agents: allow dot-dot-prefixed filenames such as `..note.txt` through sandbox FS bridge, remote sandbox reads, and apply_patch summaries without mistaking the name for parent traversal.",
      "CLI/migrate: hide per-item source/plugin hints on non-conflicting Codex skill and plugin selection prompts, keeping the hint text reserved for rows that actually need attention. Thanks @sjf.",
      "Codex harness: treat high-confidence app-server OAuth refresh invalidation as a terminal auth-profile failure, stopping repeated raw token-refresh errors without turning entitlement or usage-limit payloads into re-auth prompts.",
      "CLI/migrate: humanize Codex conflict-status messaging across the migrate UI so selection prompts and plan/result rows say \"Codex skill already installed in workspace\" instead of surfacing internal `MIGRATION_REASON_*` codes. Thanks @sjf.",
      "CLI/migrate: render migrate result rows with distinct glyphs for manual-review (ðŸ”) and archive (ðŸ“–) items instead of the misleading \"skipped\" and \"migrated\" checkmarks, so users can see which entries still need attention versus which were filed away. Thanks @sjf.",
      "CLI/migrate: split Codex migrate output into separate preview and result phases so the Before plan and After result render through clack with independently tunable copy. Thanks @sjf.",
      "Codex app-server: project bundle and user MCP servers into Codex threads, rotate threads when an MCP server is disabled, scope bundle MCP injection to bundled servers, and resend user MCP config on resume so MCP changes take effect mid-session without restarting the agent. (#81551) Thanks @jalehman.",
      "Codex migration: invoke the managed Codex binary instead of a stale system `codex` for source-config migration plans, so users running the bundled Codex runtime get plan output that matches the binary the gateway will actually use. (#81582) Thanks @fuller-stack-dev.",
      "Subagents/maintenance: preserve pending subagent registry sessions during session-store cleanup, pruning, and disk-budget enforcement so in-flight subagent runs are not deleted by background maintenance before they complete. (#81498) Thanks @ai-hpc.",
      "Control UI/chat: reconcile terminal and reconnect run cleanup with cached session activity, stale compaction/fallback indicators, and a compact composer run-status chip so completed or interrupted turns do not leave Stop active. Fixes #76874 and #64220; refs #71630. Thanks @BunsDev.",
      "Maintainer tooling: clarify which pnpm test/check commands are safe locally versus inside Codex worktrees, routing linked-worktree gates through node wrappers and Crabbox/Testbox.",
      "Auto-reply: preserve same-key ordering when debounced inbound work falls back to immediate flushes, so follow-up turns cannot overtake an active buffered flush.",
      "Telegram/WhatsApp: keep Telegram same-chat replies ordered behind active no-delay turns without blocking WhatsApp follow-up message dispatch.",
      "Codex migration: avoid duplicate cached plugin bundle warnings when app-server plugin inventory is available.",
      "Agents: suppress aborted embedded assistant partials, reasoning text, reply directives, and stale prior replies before user-facing delivery while preserving clean timeout/error payloads. Fixes #48241. Thanks @BunsDev, @andyliu, and @yassinebkr.",
      "Agents: allow dot-dot-prefixed filenames such as `..file.txt` inside workspace and sandbox path policy while still rejecting real parent traversal.",
      "Native image input: detect Windows drive image paths in plain prompts so `C:\\...\\screenshot.png` references are not missed.",
      "Media: normalize Windows-style filename hints before staging attachments, remote media, audio transcodes, and saved-media display names, so POSIX hosts do not preserve drive or directory text in generated filenames.",
      "Media references: resolve first-level inbound media files whose IDs start with dots instead of treating names like `..photo.png` as parent traversal.",
      "iOS/chat: resize PhotosPicker image attachments to capped JPEGs before staging and sending, stripping source metadata and keeping oversized camera photos under the chat upload budget. Fixes #68524. Thanks @BunsDev.",
      "Control UI: keep shared form, config, and usage text-entry controls at 16px on touch-primary devices while preserving chat composer input sizing, so iOS Safari no longer auto-zooms focused fields. Fixes #64651; carries forward #64673. Thanks @NianJiuZst and @BunsDev.",
      "Agents/trajectory: make the trajectory flush cleanup timeout configurable with `OPENCLAW_TRAJECTORY_FLUSH_TIMEOUT_MS`, preserving the 10s default while slower stores drain. Refs #75839. Thanks @BunsDev.",
      "Skills: load ClawHub and local-manager skill-directory symlinks from managed `~/.openclaw/skills` and personal `~/.agents/skills` roots while keeping workspace, extra, bundled, and per-skill `SKILL.md` containment fail-closed. Fixes #44051. Refs #59219. Thanks @Devattom, @ArthurNie, and @luoxiao6645.",
      "Config: return the canonical persisted config from `config.set`, `config.apply`, and `config.patch` responses after write-time shaping. Fixes #77455.",
      "Codex auth: accept OAuth profiles backed by `oauthRef` during runtime auth selection, so official Codex OAuth logins are used by app-server agent runs. (#81633) Thanks @obviyus.",
      "Telegram: release stopped polling leases after the gateway stop grace so in-process restarts can reuse the same bot token without weakening active duplicate-poller protection. Fixes #81507. (#81890) Thanks @joshavant.",
      "ACP: preserve redacted numeric JSON-RPC `RequestError` details in runtime failure text, so backend diagnostics are visible instead of only `Internal error`. Fixes #81126. (#81188) Thanks @vyctorbrzezowski.",
      "Agents: cache unchanged PI model discovery stores and model lookups, reducing repeated model-resolution startup latency under large model configs. Fixes #78851.",
      "Onboarding: carry returned Codex plugin migration config through the OpenAI model wizard so accepted plugin migrations are saved with the final config write.",
      "Security/Windows ACL audit: classify Anonymous Logon, Guests, Interactive, Local, and Network SIDs as world-equivalent principals so broadly writable paths stay critical instead of being downgraded to group-writable. Fixes #74350. (#74383) Thanks @dwc1997.",
      "Media-understanding: retry transient remote attachment fetch failures before audio or vision processing, so Discord voice notes are not lost after one network/CDN blip. Fixes #74316. Thanks @vyctorbrzezowski and @gabrielexito-stack.",
      "Control UI: order timestamped live stream and tool items before untimestamped history fallbacks, keeping chat history in visible time order. Fixes #80759. (#81016) Thanks @akrimm702.",
      "ClawHub: cancel stalled archive body reads for skill, package, and ClawPack downloads instead of leaving installs hanging after headers arrive. Fixes #52073. Refs #80006. Thanks @xinhuagu and @stainlu.",
      "macOS/Chat: render persisted assistant provider failures from `errorMessage` in refreshed chat history while keeping stale non-error provider details hidden. (#65689) Thanks @javierdici.",
      "Control UI/config: discard stale redacted placeholders from form-mode config saves while preserving restorable saved secrets, so unrelated settings changes no longer submit `__OPENCLAW_REDACTED__` as real data. Fixes #60917. Thanks @giodl73-repo and @BunsDev.",
      "OpenAI plugin: clarify remote Codex OAuth login copy so tunneled users know sign-in may finish automatically before they paste the redirect URL. (#81301) Thanks @rubencu.",
      "SGLang: preserve replayed reasoning history for OpenAI-compatible chat completions, keeping thinking-capable local models from losing prior reasoning turns. (#81091) Thanks @akrimm702.",
      "Plugins/install: derive managed peer dependency pins from npm's lockfile planner instead of recursively scanning `node_modules`, while keeping OpenClaw host peers out of managed root ownership and preserving active root-managed runtimes. Thanks @fuller-stack-dev.",
      "OC Path: restore YAML/YML/.lobster support through the bundled YAML document parser and add `$first` positional addressing alongside `$last`.",
      "Control UI/WebChat: keep short assistant replies clear of in-bubble copy/open action buttons by applying the existing reserved action spacing in the grouped chat renderer. Fixes #79509. (#81244) Thanks @JARVIS-Glasses.",
      "Codex harness: make the live test wrapper portable to Windows and defer locked temp cleanup so native Windows and WSL2 live runs complete.",
      "Telegram: discard legacy long-poll update offsets that cannot be tied to the current bot token, so token rotation no longer leaves bots silently skipping new messages. (#80671) Thanks @sxxtony.",
      "browser: enforce navigation checks for act interactions [AI]. (#81070) Thanks @pgondhi987.",
      "Validate node exec event provenance [AI]. (#81071) Thanks @pgondhi987.",
      "Gateway: keep active reply runs visible to stuck-session diagnostics and clear no-active-work recovery state, preventing stale queued lanes after compaction or tool failures. Fixes #80677. (#81302)",
      "Codex app-server: rotate incompatible context-engine-managed native threads so Lossless-managed sessions do not resume stale hidden Codex history. (#81223) Thanks @jalehman.",
      "Codex cron: execute scheduled command-style automation payloads before workspace bootstrap or memory review, preserving existing isolated cron jobs after Codex harness migration. (#81510) Thanks @jalehman.",
      "Plugin LLM completions: honor Codex agent-runtime policy for canonical OpenAI model refs, so context-engine summarizers can use Codex OAuth instead of requiring direct `OPENAI_API_KEY` auth. (#81511) Thanks @jalehman.",
      "Gateway/OpenAI HTTP: return OpenAI-compatible 400 errors for invalid sampling params and provider validation failures instead of collapsing them to 500s. (#81275) Thanks @Lellansin.",
      "Telegram: publish plugin and skill command description localizations to native command menus while filtering unsupported locale codes and preserving Telegram command limits. (#81351) Thanks @jzakirov.",
      "Limit hook CLI tool authority [AI]. (#81065) Thanks @pgondhi987.",
      "Require admin scope for node device token management [AI]. (#81067) Thanks @pgondhi987.",
      "Restrict chat sender allowlist matching [AI]. (#80898) Thanks @pgondhi987.",
      "Update: suppress the false newer-config warning during restart health probing after an update handoff, while keeping future-version mutation guards intact. (#78652)",
      "Claude CLI: clear a reused stored session id after aborts or non-expired failover errors so the next turn does not resume a poisoned CLI session. Fixes #78785.",
      "Sessions: redact persisted tool result detail metadata before writing transcripts so diagnostic secrets do not survive tool output redaction. (#80444) Thanks @nimbleenigma.",
      "Codex runtime: allow the official installed `@openclaw/codex` package to use its private task-runtime and MCP projection SDK helpers, fixing `MODULE_NOT_FOUND` during migrated OpenAI/Codex beta runs.",
      "Codex migration: make Enter activate the highlighted checkbox row before continuing, so `Skip for now` and bulk-selection rows work even when planned items start preselected.",
      "Link understanding: fetch page content through the SSRF guard before running configured CLI summarizers, preventing curl/wget-style link fetchers from reaching private redirect or DNS-rebound targets.",
      "fix: harden safe-bin argument validation [AI]. (#80999) Thanks @pgondhi987.",
      "Codex/status: align `/codex status` rate-limit wording with `/status` by showing remaining quota and compact reset durations instead of used quota and raw ISO timestamps. Thanks @MatthewSchleder.",
      "Mattermost: log a structured `mattermost no-visible-reply` diagnostic when a substantive (non-reasoning) final reply payload reaches `deliverMattermostReplyPayload` but the underlying `deliverTextOrMediaReply` returns `\"empty\"` â€” previously the run completed with a misleading `delivered reply to <channel>` log even though no Mattermost API send happened, masking silent completions in channel/thread contexts. No behavior change; the diagnostic surfaces the failure so operators can detect it instead of seeing the agent appear to go silent. Fixes #80501. Thanks @robbyproc87.",
      "Telegram: limit concurrent startup `getMe` probes across multi-account bots so large Telegram configs do not fan out all account probes at once during gateway startup. Refs #80695. (#80986) Thanks @stainlu.",
      "fix(config): reject auto-managed meta.lastTouched\\* paths in config set/unset (#80856). Thanks @ai-hpc",
      "Test state: seed isolated auth-profile secret keys for generated homes, preventing helper-backed proof runs from falling back to host Keychain secrets. (#81393) Thanks @altaywtf.",
      "Plugins/update: clear stale allow/deny entries and selected plugin slots when disabling a plugin after update failure, keeping failed external plugin updates from leaving half-disabled config. (#81512) Thanks @JARVIS-Glasses.",
      "Memory/LanceDB: make auto-capture recognize short CJK memory phrases and configurable literal triggers, so Chinese, Japanese, and Korean users can capture memories without regex or LLM intent detection. Fixes #75680. Thanks @vyctorbrzezowski and @guokewuming.",
      "Plugins doctor: report stale plugin config warnings and avoid claiming full plugin health when config warnings remain. (#81515) Thanks @BKF-Gitty.",
      "Sessions: display `model: \"<agentId>-acp\"` / `modelProvider: \"acpx\"` (ACP-runtime sentinel) for ACP control-plane sessions in `openclaw sessions` output, instead of the agent's configured model which was misleading. Catalog finding 20. (#79543)",
      "Slack: normalize message read `before` and `after` timestamp bounds before calling Slack history or thread reply APIs. Fixes #80835. (#81338) Thanks @honor2030.",
      "Gateway: throttle assistant/thinking agent event fanout during streaming bursts without dropping buffered deltas. (#80335) Thanks @samzong.",
      "Models: restore authenticated CLI runtime providers in the `/models` picker while keeping legacy runtime aliases hidden from setup/default model choices. Closes #81212. (#81239) Thanks @anagnorisis2peripeteia.",
      "Changelog gates: reject bot/app handles as `Thanks` attribution and require explicit human credit for bot/app-authored changelog entries. (#81357) Thanks @hxy91819.",
      "Agents/heartbeat: fix seven layered issues that broke multi-agent heartbeat cadence â€” (1) fan out the scheduler broadcast wake across agents in parallel via `Promise.all` instead of awaiting each `runOnce` sequentially, so one agent doing real work no longer starves every later agent in iteration order; (2) scope `skipWhenBusy` to lanes attributable to the firing agent via session-key parsing of `session:agent:<id>:â€¦` / `nested:agent:<id>:â€¦` lane names, instead of consulting the global `subagent` lane, so a single stuck subagent on one agent no longer silently disables every other agent's heartbeat; (3) always append workspace `HEARTBEAT.md` directives (everything outside an optional `tasks:` block) to the dispatch prompt, so prose-runbook `HEARTBEAT.md` files reach the model directly instead of being silently dropped unless periodic tasks are declared; (4) race the initial stream-establishment promise inside `streamWithIdleTimeout` against the same watchdog timer that previously only guarded inter-token gaps, so SDK requests stuck at TCP/TLS handshake or before the first response byte no longer hang indefinitely (the stalled-session diagnostic's `recovery=none` case); (5) emit an `openclaw doctor` warning when `heartbeat.session` pins a session key that has no entry in the agent's session store, so silently-dropped heartbeat deliveries surface at config-validation time; (6) also route the commitment-only task dispatch path (tasks configured, none due) through `appendHeartbeatFileDirectives` so prose directives outside the `tasks:` block reach the model on this path as well; (7) wrap the synchronous `baseFn(...)` invocation inside `streamWithIdleTimeout` in a try/catch that clears the connect watchdog timer before rethrowing, so a provider stream function that throws during setup no longer leaves a live timer that can fire `onIdleTimeout` later with a stale error and keep the process open past the real failure. Thanks @zeroaltitude.",
      "Matrix: stop running `npm install`/`pnpm install` at runtime from a parent-derived plugin path; missing Matrix runtime dependencies now fail with repair guidance instead of mutating the wrong `node_modules` tree. Fixes #80758. (#80876) Thanks @kinjitakabe.",
      "Agents/memory-flush: surface non-abort memory-flush failures (provider timeout, transport error, generic agent failure) as visible reply payloads so the outer reply loop short-circuits and isolated cron runs propagate the error into `meta.error` instead of completing silently with `status: \"ok\"` and an empty payload. Previously only the specific \"Memory flush writes are restricted to ...\" message was surfaced. Fixes #80755. Thanks @nailujac.",
      "Channels/loop-guard: enforce shared per-pair bot loop protection in the core channel-turn kernel, with Discord, Slack, Matrix, and Google Chat supplying bot-pair facts where they can reliably identify accepted bot-authored messages. The generic guard keys on `(scope, conversation, participant pair)`, suppresses every additional bot-to-bot event in either direction once a pair crosses the configured budget, and lifts suppression after `cooldownSeconds`. Defaults are `maxEventsPerWindow: 20`, `windowSeconds: 60`, and `cooldownSeconds: 60` whenever a channel lets bot-authored messages reach dispatch; they can be set globally via `channels.defaults.botLoopProtection` and overridden per channel/account or supported per-conversation config. Fixes #58789. Thanks @pandadev66.",
      "Agents/memory-flush: surface non-abort memory-flush failures (provider timeout, transport error, generic agent failure) as visible reply payloads so the outer reply loop short-circuits and isolated cron runs propagate the error into `meta.error` instead of completing silently with `status: \"ok\"` and an empty payload. Previously only the specific \"Memory flush writes are restricted to ...\" message was surfaced. Refs #80755. Thanks @kinjitakabe and @nailujac.",
      "Codex harness: use the active Codex runtime context window for OpenAI-selected budgeting, manual `/compact`, and `/status`, so stale OpenAI session metadata no longer overstates context limits. (#81906) thanks @jalehman."
    ]
  }
]
