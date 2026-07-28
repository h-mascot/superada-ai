/* ═══════════════════════════════════════════════════════════════════════
   VoiceClaw — content model.
   Every string here is traceable to a numbered source capture; see
   source-map.md. No credential VALUE appears anywhere in this file — only
   field placeholders and the storage messaging the real app shows.
   ═══════════════════════════════════════════════════════════════════════ */
window.VC = (function () {
  'use strict';

  /* ── Settings › General ──────────────────────────────────────────── */
  const general = [
    {
      id: 'display', title: 'Display', icon: 'i-display',
      items: [
        { t: 'seg', id: 'display-mode', aria: 'Display appearance', options: ['System', 'Light', 'Dark'], value: 'System' }
      ]
    },
    {
      id: 'voice-engine', title: 'Voice Engine, Route and Models', icon: 'i-route',
      items: [
        { t: 'picker', id: 'engine', label: 'Voice Engine', value: 'GPT Realtime',
          options: ['GPT Realtime', 'Companion Realtime Voice', 'Voice Engine Standalone', 'Local Qwen 3.5 2B', 'Automatic'],
          help: 'Production VoiceClaw realtime voice path.' },
        { t: 'picker', id: 'voice', label: 'Voice', value: 'Cedar — Recommended',
          options: ['Cedar — Recommended', 'Marin — Recommended', 'Alloy', 'Echo', 'Shimmer', 'Verse'],
          help: 'Voice changes apply to the next GPT Realtime session.' },
        { t: 'picker', id: 'rt-model', label: 'GPT Realtime Model', value: 'GPT-Realtime-2.1 Mini',
          options: ['GPT-Realtime-2.1 Mini', 'GPT-Realtime-2.1'] },
        { t: 'seg', id: 'rt-reasoning', label: 'GPT Realtime Reasoning',
          options: ['Low', 'Medium', 'High'], value: 'High',
          help: 'Best for complex OpenClaw handoffs, with more latency.' },
        { t: 'picker', id: 'route', label: 'Voice Route', value: 'OpenClaw Bridge',
          options: ['OpenClaw Bridge', 'GPT-5.5 Instant', 'GPT-5.5 Direct', 'Hermes Tunnel'] },
        { t: 'note', icon: 'i-desktop', title: 'What This Route Does', paras: [
          'Uses GPT Realtime for continuous voice conversation, and invokes your OpenClaw agent in the background to operate OpenClaw in every way that you would via the computer it is installed on, including to operate the computer itself. Connects to OpenClaw via your private Tailscale bridge set up in the Companion app.'
        ] },
        { t: 'picker', id: 'oc-model', label: 'OpenClaw Model', value: 'GPT-5.5',
          options: ['GPT-5.5', 'GPT-5.5 Codex', 'GPT-5.1'],
          help: 'Default OpenClaw-aware model for most Mac and private-computer work.' },
        { t: 'seg', id: 'oc-reasoning', label: 'OpenClaw Reasoning',
          options: ['Low', 'Medium', 'High', 'XHigh'], value: 'Low',
          help: 'Fastest OpenClaw handoffs and the new default for bridge work.' },
        { t: 'slider', id: 'verbatim', label: 'OpenClaw Verbatim Pass-Through', value: 82,
          help: "Higher values make GPT Realtime restate OpenClaw's answer closely, preserving wording, caveats, and concrete details." }
      ]
    },
    {
      id: 'conversation', title: 'Conversation Behavior', icon: 'i-heart-pulse',
      items: [
        { t: 'subhead', label: 'Audio Input' },
        { t: 'switch', id: 'auto-mic', label: 'Auto-Start Mic', value: false },
        { t: 'picker', id: 'mic-device', label: '', aria: 'Audio input device', value: 'Device Mic',
          options: ['Device Mic', 'Automatic', 'Headset Mic'],
          help: 'Prefer the iPhone microphone even when headphones are connected.' },
        { t: 'subhead', label: 'Audio Output' },
        { t: 'switch', id: 'speakerphone', label: 'Use Speakerphone for Audio Output', value: true },
        { t: 'subhead', label: 'Noise Reduction' },
        { t: 'seg', id: 'noise', aria: 'Noise reduction', options: ['Near Field', 'Far Field', 'Off'], value: 'Near Field',
          help: 'Use when the phone is close to your mouth. Best default for reducing speaker echo.' },
        { t: 'note', icon: 'i-bubble', title: 'Echo Handling', paras: [
          'VoiceClaw uses iOS voiceChat audio and WebRTC echo cancellation so GPT Realtime remains interruptible. If the model hears itself, start with Near Field noise reduction, lower speaker volume, or use headphones.'
        ] },
        { t: 'subhead', label: 'Voice Activity Detection' },
        { t: 'seg', id: 'vad', aria: 'Voice activity detection', options: ['Semantic VAD', 'Server VAD', 'None'], value: 'Semantic VAD',
          help: 'Waits for the active voice engine to judge that you finished the thought. For Companion Realtime Voice, this uses a longer local silence window before sending the turn.' },
        { t: 'switch', id: 'captions', label: 'Live Captions', value: true }
      ]
    },
    {
      id: 'handoff', title: 'Handoff Assist (PiP)', icon: 'i-pip',
      items: [
        { t: 'switch', id: 'handoff', label: 'Handoff Assist', value: true },
        { t: 'note', icon: 'i-arrow-right-box', title: 'How Handoff Assist Works', paras: [
          "VoiceClaw's Handoff Assist feature allows you to use your voice to take an action on multiple apps on your iPhone in quick succession without having to manually bring VoiceClaw back to foreground first. When you have already asked VoiceClaw to take an action in another app and have not manually brought VoiceClaw back to the foreground, and then you ask VoiceClaw to do a subsequent action in another app, Handoff Assist uses Picture-in-Picture controls to quickly reopen VoiceClaw, which enables VoiceClaw to complete your next request (and put itself back into PiP mode)."
        ] },
        { t: 'pip' }
      ]
    }
  ];

  /* ── Settings › Account ──────────────────────────────────────────── */
  const account = [
    {
      id: 'quick-setup', title: 'Quick Setup', icon: 'i-qr',
      items: [
        { t: 'note', plain: true, paras: [
          'Scan the QR code shown by VoiceClaw Companion on your Mac. Paste setup JSON is still available if scanning is inconvenient.'
        ] },
        { t: 'btnrow', buttons: [
          { label: 'Scan QR', icon: 'i-qr', variant: 'btn--ghost btn--pill', action: 'scan-qr' },
          { label: 'Paste JSON', icon: 'i-doc', variant: 'btn--quiet btn--pill', action: 'paste-json' }
        ] },
        { t: 'note', title: 'Need the Mac companion app?', paras: [
          'Download the Mac companion .dmg app from the Releases section:',
          '<a class="link link--target" href="https://github.com/bdjben/Voice.Claw-Companion/releases" target="_blank" rel="noopener">github.com/bdjben/Voice.Claw-Companion/releases</a>'
        ] }
      ]
    },
    {
      id: 'permissions', title: 'iPhone Permissions', icon: 'i-hand',
      items: [
        { t: 'note', icon: 'i-check', title: 'Prepare Permissions Up Front', paras: [
          'VoiceClaw can ask iOS for the permissions it needs before a live session: microphone, speech recognition fallback, camera, photos, contacts, location, calendar, and reminders. iOS only shows prompts it has not shown before; denied items must be changed in Settings.'
        ] },
        { t: 'tiles', id: 'perm-tiles', items: [
          { name: 'Microphone', icon: 'i-mic', state: 'Allowed', tone: 'ok' },
          { name: 'Camera', icon: 'i-camera', state: 'Allowed', tone: 'ok' },
          { name: 'Photos', icon: 'i-photos', state: 'Allowed', tone: 'ok' },
          { name: 'Contacts', icon: 'i-person', state: 'Allowed', tone: 'ok' },
          { name: 'Location', icon: 'i-location', state: 'Not Asked', tone: 'off' },
          { name: 'Calendar', icon: 'i-calendar', state: 'Allowed', tone: 'ok' },
          { name: 'Reminders', icon: 'i-reminders', state: 'Allowed', tone: 'ok' }
        ] },
        { t: 'btnrow', buttons: [
          { label: 'Prepare iPhone Permissions', icon: 'i-shield', variant: 'btn--pill', action: 'prepare-permissions' },
          { icon: 'i-gear', iconOnly: true, action: 'open-ios-settings', srLabel: 'Open iOS Settings' }
        ] },
        { t: 'note', plain: true, paras: ['Prepare permissions before your first real voice/action session.'] }
      ]
    },
    {
      id: 'keys', title: 'AI Subscriptions / API Keys', icon: 'i-key',
      items: [
        { t: 'seg', id: 'oauth-mode', aria: 'OpenAI authentication mode', label: 'OpenAI Authentication',
          options: ['API Key', 'OAuth (ChatGPT Subscription)'], value: 'API Key',
          help: 'GPT Realtime uses API Key for Live voice sessions right now. OAuth remains available for OAuth-compatible voice engines, including STT + GPT + TTS.' },
        { t: 'switch', id: 'oauth-fallback', label: 'Fall back to API Key if OAuth fails', value: false },
        { t: 'note', plain: true, paras: [
          'If this iPhone setting differs from the Mac Companion default, this iPhone wins for sessions it starts. GPT Realtime currently ignores OAuth and uses API Key mode; OAuth-compatible voice engines, including STT + GPT + TTS, can default to Sign-in-with-ChatGPT.'
        ] },
        { t: 'note', icon: 'i-check', tone: 'ok', title: 'ChatGPT Subscription Sign-In', paras: [
          'You are now signed into your ChatGPT account in VoiceClaw. This iPhone can use OAuth for GPT-5.5 without OpenClaw and for OAuth-compatible voice engines. GPT Realtime Live currently requires API Key mode.'
        ] },
        { t: 'btnrow', buttons: [
          { label: 'Refresh Sign-In', icon: 'i-person', variant: 'btn--ghost btn--pill', action: 'refresh-signin' },
          { label: 'Sign Out', variant: 'btn--quiet btn--pill', action: 'sign-out' }
        ] },
        { t: 'field', id: 'openai-key', label: 'OpenAI API Key', placeholder: 'sk-…', secure: true,
          help: 'Stored in iOS Keychain. Used directly in API Key mode, and used as fallback only when OAuth API-key fallback is on.' },
        { t: 'field', id: 'cerebras-key', label: 'Cerebras API Key', placeholder: 'csk-…', secure: true,
          help: 'Stored in iOS Keychain. Used only when Companion Realtime Voice uses a Cerebras Companion Realtime Voice LLM.' }
      ]
    },
    {
      id: 'openclaw', title: 'OpenClaw / Hermes Computer', icon: 'i-desktop',
      items: [
        { t: 'field', id: 'ts-url', label: 'OpenClaw Tailscale Server URL', placeholder: 'https://device.tailnet.ts.net:12321',
          help: 'Use the private Tailscale Serve URL shown by VoiceClaw Companion. The port is part of that private address.' },
        { t: 'field', id: 'tunnel-url', label: 'OpenClaw HTTPS Public Tunnel URL (if configured)', placeholder: 'https://voiceclaw.example.com',
          help: 'Use a public HTTPS tunnel (e.g., Cloudflare Tunnel / Funnel URL) for iPhone access to OpenClaw when Tailscale is not configured or not connected, and for Apple Watch access to OpenClaw when your iPhone is not nearby.' },
        { t: 'field', id: 'install-path', label: 'OpenClaw Install Path', placeholder: '/Users/you/.openclaw',
          help: 'Use the actual OpenClaw folder on that Mac. VoiceClaw Companion can fill this in.' },
        { t: 'field', id: 'agent', label: 'OpenClaw Agent', value: 'main', placeholder: 'main',
          help: 'VoiceClaw Companion can fill this in. This is the OpenClaw agent/workspace identity on the Mac, not the model.' },
        { t: 'disclosure', id: 'advanced-bridge', label: 'Advanced Bridge', children: [
          { t: 'field', id: 'bridge-path', label: 'Bridge Path', value: '/realtime/openclaw-turn', placeholder: '/realtime/openclaw-turn' },
          { t: 'field', id: 'gateway-token', label: 'Gateway Token', placeholder: 'Optional Bearer Token', secure: true },
          { t: 'field', id: 'gateway-pass', label: 'Gateway Password', placeholder: 'Optional Password', secure: true },
          { t: 'note', plain: true, paras: ['Only edit Advanced Bridge if you are debugging a custom bridge. Both values are stored in the iOS Keychain and are never shown again after you save them.'] }
        ] }
      ]
    },
    {
      id: 'watch', title: 'Watch', icon: 'i-watch',
      items: [
        { t: 'note', icon: 'i-arrow-right-box', title: 'Watch Settings Sync', paras: [
          'Sync account, route, GPT-5.5 Instant, and public tunnel settings to Apple Watch. Private Tailscale custom-port URLs stay iPhone-relay-only.'
        ] },
        { t: 'failrow', id: 'watch-sync', text: 'Apple Watch sync failed: Device is not paired.', action: 'retry-watch-sync' }
      ]
    },
    {
      id: 'reset', title: 'Reset Private Runtime', icon: 'i-trash', tone: 'danger',
      items: [
        { t: 'row', label: 'Reset Private Runtime',
          sub: 'Clears ChatGPT sign-ins, OpenAI/Cerebras API keys, OpenClaw/Hermes bridge settings, Companion pairing, and display settings from this iPhone.',
          action: 'reset-runtime', danger: true, trailingIcon: 'i-trash' }
      ]
    }
  ];

  /* ── Settings › Guide ────────────────────────────────────────────── */
  const guide = [
    {
      id: 'help', title: 'Help', icon: 'i-help',
      items: [
        { t: 'row', label: 'Open Setup Guide', action: 'open-setup-guide', chev: true, leadingIcon: 'i-doc' },
        { t: 'steps', items: [
          { title: 'Choose your account path', text: 'Use Account &gt; AI Subscriptions / API Keys for GPT Realtime auth and fallback API-key settings. GPT-5.5 Instant still needs an OpenAI API key; GPT-5.5 without OpenClaw can use this iPhone&rsquo;s ChatGPT sign-in, with Companion as a fallback.' },
          { title: 'Install VoiceClaw Companion on your Mac', text: 'Download the Mac companion .dmg app from the Releases section of the GitHub page. It starts the bridge and publishes it privately with Tailscale Serve.<br><a class="link link--target" href="https://github.com/bdjben/Voice.Claw-Companion/releases" target="_blank" rel="noopener">github.com/bdjben/Voice.Claw-Companion/releases</a>' },
          { title: 'Pair this iPhone', text: 'Use Account &gt; Quick Setup to scan the QR code from VoiceClaw Companion, or paste the setup JSON.' },
          { title: 'Run diagnostics, then start voice', text: 'Diagnostics checks OpenAI credentials, the bridge, permissions, and local audio output before a real session.' }
        ] }
      ]
    },
    {
      id: 'apple-watch', title: 'Apple Watch', icon: 'i-watch',
      items: [
        { t: 'note', icon: 'i-watch', title: 'Apple Watch Features', paras: [
          'The watchOS app supports the same Voice Route choices through its GPT Realtime voice layer and includes an on-screen transcript plus watch-specific settings. Companion Realtime Voice is currently configured and run from the iPhone app with the Mac Companion. If you sync iOS settings to your Watch (in Account &gt; Watch), then change settings on watchOS, the Watch keeps those settings until the next iOS sync.'
        ] },
        { t: 'note', icon: 'i-arrow-right-box', title: 'Sync Settings', paras: [
          'Use Account &gt; Watch when you need to push the current account, route, model, and tunnel settings to Apple Watch.'
        ] }
      ]
    },
    {
      id: 'capabilities', title: null, icon: null,
      bare: true,
      items: [
        { t: 'disclosure', id: 'capabilities', label: 'Capabilities', icon: 'i-layers', children: [
          { t: 'note', icon: 'i-bubble', title: 'Live Conversation', paras: ['GPT Realtime stays responsible for speech, interruptions, quick answers, clarification, natural back-and-forth, and the voice layer for GPT-5.5 Instant or OpenClaw routes.'] },
          { t: 'note', icon: 'i-sliders', title: 'VoiceClaw Control', paras: ['VoiceClaw can report current status, switch voice routes, mute the microphone, end the live session, open its own tabs, and open iOS Settings for permissions.'] },
          { t: 'note', icon: 'i-pip', title: 'iPhone Actions', paras: ['When you explicitly ask, VoiceClaw can open URLs and searches, use Maps, request one-time location, search Contacts, hand off phone calls, read or create Calendar and Reminder items, open Mail or Messages drafts, analyze selected media, capture and analyze one camera photo, analyze a copied screenshot or image from the clipboard, open WhatsApp handoffs, show the share sheet, and read or copy clipboard text.'] },
          { t: 'note', icon: 'i-gauge', title: 'GPT-5.5 Instant', paras: ['The Instant route can answer through GPT-5.5 without Mac/OpenClaw state, and can use web search when that option is enabled. An API key is currently required for this mode, even if you have a ChatGPT subscription.'] },
          { t: 'note', icon: 'i-sparkle', title: 'GPT-5.5 Direct', paras: ['The GPT-5.5 (without OpenClaw) mode answers through the full GPT-5.5 model without Mac/OpenClaw. It can use web search when that option is enabled. Additionally, it can use all of GPT-5.5&rsquo;s complex reasoning, research and tool abilities. Select this option when you want to use the full GPT-5.5 model without connecting to OpenClaw.'] },
          { t: 'note', icon: 'i-layers', title: 'Custom Shortcuts', paras: ['For iPhone workflows VoiceClaw does not have directly, create an Apple Shortcut and say the exact name, for example: &ldquo;run my Shortcut named File This.&rdquo; VoiceClaw can pass optional text input to a named Shortcut, but it cannot inspect your Shortcut list or know what a Shortcut does unless you tell it.'] },
          { t: 'note', icon: 'i-desktop', title: 'Mac, OpenClaw, and Hermes', paras: ['In OpenClaw or Hermes Bridge/Tunnel modes, the active voice engine can hand private Mac or long-running computer work to your own local agent runtime, then steer, check, or cancel active work without starting a duplicate request.'] }
        ] },
        { t: 'disclosure', id: 'accessibility', label: 'Accessibility / Handsfree Operation', icon: 'i-accessibility', children: [
          { t: 'note', icon: 'i-accessibility', title: "Operate VoiceClaw Handsfree with iOS 'Voice Control' Settings", paras: ['Use iOS Voice Control custom commands, VoiceClaw&rsquo;s installed Shortcut, and a few saved tap gestures for a mostly handsfree workflow.'] },
          { t: 'steps', items: [
            { title: 'Set up iOS Voice Control', text: 'In iOS Settings, go to Accessibility &gt; Voice Control. Turn it on, then open Commands &gt; Custom and create commands for &ldquo;Hey OpenClaw&rdquo; and &ldquo;Hey VoiceClaw&rdquo; that run the installed &ldquo;Open VoiceClaw&rdquo; Shortcut with Application set to Any. Add a third command, &ldquo;Mic on&rdquo;, with Run Custom Gesture, tap the middle of the screen, set Application to Any, and save.' },
            { title: 'Open VoiceClaw', text: 'Say &ldquo;Hey VoiceClaw&rdquo;, &ldquo;Hey OpenClaw&rdquo;, or &ldquo;Open VoiceClaw&rdquo;.' },
            { title: "Activate VoiceClaw's in-app mic", text: 'Say &ldquo;Mic on&rdquo;. You can also turn on Auto-Start Mic in General &gt; Conversation Behavior if you want VoiceClaw to start Live automatically when it opens.' },
            { title: 'Navigate between tabs', text: 'With VoiceClaw&rsquo;s in-app mic unmuted, say &ldquo;go to the Live tab&rdquo;, &ldquo;go to the Settings tab&rdquo;, or &ldquo;go to the Diagnostics tab&rdquo;.' },
            { title: "Mute VoiceClaw's in-app mic", text: 'Say &ldquo;Mute the mic.&rdquo; To turn the mic back on, say &ldquo;Mic on.&rdquo;' },
            { title: 'Switch Voice Routes', text: 'Say &ldquo;Switch to the [voice route name] voice route&rdquo; to immediately end the current session and start a new session in a new mode.' },
            { title: 'Restart or End the active VoiceClaw session', text: 'Say &ldquo;restart the session&rdquo; to restart the session without changing the current voice route. To end the session without starting a new one, say &ldquo;End the session.&rdquo;' },
            { title: 'Quit VoiceClaw', text: 'Say &ldquo;Quit VoiceClaw.&rdquo;' },
            { title: 'Turn off iOS Voice Control', text: 'When VoiceClaw has quit, say &ldquo;Turn off Voice Control&rdquo;. If iOS shows a confirmation dialog, note where the Confirm button appears, then create a Voice Control custom command named &ldquo;Confirm&rdquo; with Run Custom Gesture that taps that location. In the future, say &ldquo;Confirm&rdquo; to turn Voice Control off without touching the screen.' },
            { title: 'Turn Voice Control back on', text: 'Say &ldquo;Siri, turn on Voice Control.&rdquo;' }
          ] }
        ] }
      ]
    }
  ];

  /* ── Settings › About ────────────────────────────────────────────── */
  const about = [
    {
      id: 'access', title: 'Access', icon: 'i-check',
      items: [
        { t: 'note', icon: 'i-check', tone: 'ok', title: 'Free Access Active', paras: [
          'Free Access is active on this iPhone. VoiceClaw currently has no ads and no paywall.'
        ] },
        { t: 'links', items: [
          { label: 'Privacy', action: 'link-privacy' },
          { label: 'Terms', action: 'link-terms' },
          { label: 'Support', action: 'link-support' }
        ] }
      ]
    },
    {
      id: 'security', title: 'Security and Privacy', icon: 'i-hand',
      items: [
        { t: 'note', icon: 'i-shield', title: 'Boundaries', paras: [
          'VoiceClaw cannot read Notes or Messages, silently send email or texts, silently capture camera images, inspect your Shortcuts, continuously track location, browse private apps, or use private Mac state unless the active route and tools explicitly provide that access.'
        ] },
        { t: 'note', icon: 'i-key', title: 'Credentials Stay Here', paras: [
          "The OpenAI API key and optional bridge secrets are stored in this iPhone's Keychain. Release builds do not include your private API key or private Tailscale URL."
        ] },
        { t: 'note', icon: 'i-mic', title: 'Background Voice Sessions', paras: [
          'When you explicitly start a live voice session on iPhone, VoiceClaw keeps the microphone, speaker, and GPT Realtime connection alive if you switch apps or lock the screen. End the session when you want listening to stop.'
        ] },
        { t: 'links', items: [
          { label: 'Privacy Policy', action: 'link-privacy' },
          { label: 'Terms of Use', action: 'link-terms' },
          { label: 'Support', action: 'link-support' }
        ] }
      ]
    }
  ];

  /* ── Diagnostics › Tests ─────────────────────────────────────────── */
  const tests = [
    {
      id: 'test-connection', title: 'Connection', icon: 'i-globe',
      items: [
        { t: 'tests', items: [
          { id: 'gpt-key', name: 'GPT Realtime via API Key', desc: 'Validate the API Key and configured GPT Realtime Model ID',
            check: 'auth',
            pass: 'API key accepted. Model ID {model} resolved for live calls.',
            fail: 'No API key on this iPhone. Add one in Settings › Account › AI Subscriptions / API Keys.' },
          { id: 'openclaw', name: 'OpenClaw', desc: 'Reach the OpenClaw config endpoint',
            check: 'companion',
            pass: 'Config endpoint reachable over the private bridge.',
            fail: 'No Tailscale Serve URL or HTTPS tunnel is set. Pair with the Mac Companion first.' },
          { id: 'bridge', name: 'Companion Bridge Runtime Status', desc: 'Read sideband, auth, queue, and active OpenClaw state from the Mac Companion',
            check: 'companion',
            pass: 'Sideband open, queue empty, no active OpenClaw turn.',
            fail: 'Companion session not established — nothing to read.' }
        ] }
      ]
    },
    {
      id: 'test-audio', title: 'Audio Output', icon: 'i-speaker',
      items: [
        { t: 'tests', items: [
          { id: 'speaker', name: 'iPhone Speaker', desc: 'Play a local tone through the current audio route',
            check: 'audio',
            pass: 'Tone played through the current output route. Output is healthy.',
            fail: 'No output route available.' }
        ] }
      ]
    }
  ];

  /* ── Diagnostics › Status ────────────────────────────────────────── */
  const status = [
    {
      id: 'voice-path', title: 'Selected Voice Path', icon: 'i-route',
      items: [
        { t: 'checks', items: [
          { id: 'vp-ready', label: 'Selected path ready', badge: 'No', tone: 'warn', sub: 'GPT Realtime on OpenClaw Bridge.' },
          { id: 'vp-companion', label: 'Companion required', badge: 'Yes', tone: 'warn', sub: 'This selected path may need the Mac Companion bridge or the Mac Voice Runtime.' },
          { id: 'vp-runtime', label: 'Mac Voice Runtime required', badge: 'No', tone: 'ok', sub: 'GPT Realtime does not use the Mac Voice Runtime.' },
          { id: 'vp-stt', label: 'Native STT ready', badge: 'Not selected', tone: 'ok', sub: 'Speech Recognition is Automatic.' },
          { id: 'vp-tts', label: 'Native TTS ready', badge: 'Not selected', tone: 'ok', sub: 'Speech Output is Automatic.' },
          { id: 'vp-cerebras', label: 'Cerebras reachable', badge: 'Not selected', tone: 'ok', sub: 'Not selected as the Companion Realtime Voice LLM.' },
          { id: 'vp-bridge', label: 'OpenClaw bridge ready', badge: 'No', tone: 'warn', sub: 'Private Tailscale URL from the Mac Companion' }
        ] }
      ]
    },
    {
      id: 'readiness', title: 'Readiness', icon: 'i-gauge',
      items: [
        { t: 'checks', items: [
          { id: 'rd-auth', label: 'GPT Realtime Auth', tone: 'idle', sub: 'OpenAI API Key on this iPhone; GPT Realtime live calls currently require API-key auth' },
          { id: 'rd-model', label: 'GPT Realtime Model', tone: 'ok', sub: 'GPT Realtime model ID' },
          { id: 'rd-companion', label: 'Companion URL', tone: 'idle', sub: 'Private Tailscale URL from the Mac Companion' },
          { id: 'rd-install', label: 'OpenClaw Install Path', tone: 'idle', sub: 'Path on the computer running OpenClaw' }
        ] }
      ]
    },
    {
      id: 'endpoints', title: 'Endpoints', icon: 'i-globe',
      items: [
        { t: 'readouts', items: [
          { k: 'GPT Realtime', v: 'https://api.openai.com/v1/realtime/calls' },
          { k: 'OpenClaw Route', v: 'Tailscale', id: 'ep-route' },
          { k: 'OpenClaw Tailscale', v: 'Not set', empty: true, id: 'ep-tailscale' },
          { k: 'OpenClaw HTTPS Tunnel', v: 'Not set', empty: true, id: 'ep-tunnel' },
          { k: 'VoiceClaw Companion Session', v: 'Not set', empty: true, id: 'ep-session' },
          { k: 'OpenClaw Turn Fallback', v: 'Not set', empty: true, id: 'ep-fallback' },
          { k: 'Mode', v: 'OpenClaw Bridge', id: 'ep-mode' },
          { k: 'OpenAI Authentication', v: 'API Key, fallback off', id: 'ep-auth' }
        ] }
      ]
    },
    {
      id: 'session', title: 'Session', icon: 'i-waveform',
      items: [
        { t: 'readouts', live: true, items: [
          { k: 'State', v: 'Ready', id: 'st-state' },
          { k: 'Mic Level', v: '0.00', id: 'st-mic-level' },
          { k: 'Mic Muted', v: 'No', id: 'st-mic-muted' },
          { k: 'Output Route', v: 'Speaker (Speaker)', id: 'st-output-route' },
          { k: 'Last Event', v: 'None', id: 'st-last-event', empty: true },
          { k: 'Connection Timeline', v: 'No connection attempt recorded.', id: 'st-timeline', empty: true },
          { k: 'Tool Owner', v: 'Not connected', id: 'st-tool-owner', empty: true },
          { k: 'Response', v: 'Idle', id: 'st-response' },
          { k: 'Pending Replies', v: '0', id: 'st-pending' },
          { k: 'Reply Attempts', v: '0', id: 'st-attempts' },
          { k: 'Reply Collisions', v: '0', id: 'st-collisions' },
          { k: 'Reply Retry', v: 'None', empty: true, id: 'st-retry' },
          { k: 'Last Tool Call', v: 'None', empty: true, id: 'st-tool-call' },
          { k: 'Output Events', v: '0', id: 'st-output-events' },
          { k: 'Last Audio', v: 'None', id: 'st-last-audio', empty: true },
          { k: 'Turns', v: '0', id: 'st-turns' }
        ] }
      ]
    },
    {
      id: 'watch-status', title: 'Apple Watch', icon: 'i-watch',
      items: [
        { t: 'readouts', items: [
          { k: 'Support', v: 'Supported on this iPhone' },
          { k: 'Activation', v: 'Activated' },
          { k: 'Pairing', v: 'No paired Watch', empty: true },
          { k: 'Watch App', v: 'Not installed', empty: true },
          { k: 'Reachability', v: 'Not reachable right now', empty: true },
          { k: 'Last Settings Sync', v: 'Never', empty: true, id: 'wa-sync' },
          { k: 'Last Settings Payload', v: 'No settings payload sent yet.', empty: true },
          { k: 'Last Watch Relay', v: 'Never', empty: true, id: 'wa-relay' },
          { k: 'Relay Result', v: 'No Watch relay requests yet.', empty: true, id: 'wa-result' }
        ] }
      ]
    }
  ];

  /* ── Diagnostics › Permissions ───────────────────────────────────── */
  const permissions = [
    {
      id: 'ios-permissions', title: 'iOS Permissions', icon: 'i-hand',
      items: [
        { t: 'tiles', id: 'diag-perm-tiles', items: [
          { name: 'Microphone', icon: 'i-mic', state: 'Allowed', tone: 'ok' },
          { name: 'Camera', icon: 'i-camera', state: 'Allowed', tone: 'ok' },
          { name: 'Location', icon: 'i-location', state: 'On Request', tone: 'warn', derive: 'location' },
          { name: 'Contacts', icon: 'i-person', state: 'Allowed', tone: 'ok' },
          { name: 'Calendar', icon: 'i-calendar', state: 'Full Access', tone: 'ok' },
          { name: 'Reminders', icon: 'i-reminders', state: 'Full Access', tone: 'ok' },
          { name: 'Photos', icon: 'i-photos', state: 'Allowed', tone: 'ok' }
        ] },
        { t: 'btnrow', buttons: [
          { label: 'Open iOS Settings', icon: 'i-gear', variant: 'btn--quiet btn--wide', action: 'open-ios-settings' }
        ] }
      ]
    }
  ];

  /* ── Setup Guide (6 paged steps) ─────────────────────────────────── */
  const setupGuide = [
    {
      eyebrow: 'Before You Start', tone: 'ok', icon: 'i-check',
      title: 'What VoiceClaw Realtime Needs',
      lede: 'VoiceClaw Realtime talks to GPT Realtime and, when needed, hands work to OpenClaw / Hermes on your computer. These settings keep VoiceClaw Realtime on your accounts and machines.',
      items: [
        'An OpenAI ChatGPT Plus/Pro subscription, or an OpenAI API key. If you only use an API key, make sure that it has access to GPT Realtime, rather than being scoped to exclude it.',
        { lead: 'To communicate with your OpenClaw / Hermes agent (rather than only using VoiceClaw Realtime in the selected Voice Engine Standalone mode or the GPT Realtime plus GPT-5.5-without-OpenClaw / Hermes mode), you will also need:' },
        'A Mac running OpenClaw / Hermes.',
        'Tailscale installed and signed in on both the Mac and this iPhone.'
      ]
    },
    {
      eyebrow: 'iPhone Access', tone: 'accent', icon: 'i-hand',
      title: 'Prepare iPhone Permissions',
      lede: 'Approve the iPhone permissions VoiceClaw needs before your first real session so voice, media, location, contacts, calendar, and reminder actions do not pause mid-conversation.',
      items: [
        'Go to Settings &gt; Account &gt; iPhone Permissions.',
        'Tap Prepare iPhone Permissions to approve microphone, speech recognition fallback, camera, photos, contacts, location, calendar, and reminders.',
        'If iOS reports Denied or Restricted, tap the gear button in that card and enable the permission in iOS Settings.',
        'You can still use VoiceClaw without every permission, but actions that need a denied permission will not work until you enable it.'
      ]
    },
    {
      eyebrow: 'ChatGPT Subscription', tone: 'accent', icon: 'i-person',
      title: 'Sign in with your ChatGPT Subscription',
      lede: 'Get started by signing in with your ChatGPT Plus / Pro subscription, either in-app or with the desktop Companion app.',
      items: [
        'Sign in from within VoiceClaw Realtime from Settings &gt; Account.',
        'Alternatively, import your ChatGPT subscription authentication from your existing OpenClaw installation, using the desktop Companion App&rsquo;s convenient QR code settings sync, in Settings &gt; Account &gt; Quick Setup &gt; Scan QR.'
      ]
    },
    {
      eyebrow: 'OpenAI', tone: 'accent', icon: 'i-key',
      title: 'Optional: Add your own OpenAI API Key',
      lede: 'An OpenAI API key is optional. Add one in Settings &gt; Account &gt; AI Subscriptions / API Keys, in the "OpenAI API Key" field, if you want to: use GPT-5.5 Instant mode, use API key access exclusively, or use your API key as a fallback for your ChatGPT subscription. If you don&rsquo;t add an OpenAI API key, you cannot use GPT 5.5 Instant mode, but you can use all other modes as long as you have a ChatGPT Plus / Pro subscription.',
      items: [
        'If you want API-key mode or fallback auth, open the API keys page, create a secret key, and copy it once.',
        'Paste it into Account &gt; AI Subscriptions / API Keys &gt; OpenAI API Key. VoiceClaw stores it in this device&rsquo;s Keychain.',
        'Choose a GPT Realtime voice in General &gt; Voice Engine, Route and Models. Marin and Cedar are the recommended starting voices.'
      ]
    },
    {
      eyebrow: 'Mac Companion', tone: 'warn', icon: 'i-desktop',
      title: 'Pair VoiceClaw with the Mac Companion',
      lede: 'Install VoiceClaw Companion on the Mac that runs OpenClaw / Hermes. Download the Mac companion .dmg app from the Releases section at github.com/bdjben/Voice.Claw-Companion/releases. It starts the local bridge, configures Tailscale Serve, and gives this iPhone the exact setup payload.',
      tone2: 'warn',
      items: [
        'Install and sign in to Tailscale on the iPhone and on the computer running OpenClaw / Hermes.',
        'Download the Mac companion .dmg app from the Releases section at github.com/bdjben/Voice.Claw-Companion/releases.',
        'Open VoiceClaw Companion on that Mac and click Install and Start.',
        'VoiceClaw Companion will configure a private Tailscale Serve URL. It may select a port, but this selection is random and you can change it.',
        'Scan the setup QR code into Quick Setup, or paste the setup JSON if scanning is unavailable.',
        'Only edit Advanced Bridge if you are debugging a custom bridge.'
      ]
    },
    {
      eyebrow: 'First Session', tone: 'accent', icon: 'i-waveform',
      title: 'Check everything before you talk',
      lede: 'Diagnostics catches most setup problems before you start a live session. Once it passes, go to Live, tap the signal, speak naturally, interrupt anytime, and use Mute without ending the session.',
      items: [
        'Open Diagnostics and run the OpenAI and OpenClaw / Hermes checks.',
        'Use Audio Output to confirm the iPhone speaker or headphones can play a local tone.',
        'If OpenAI passes but OpenClaw / Hermes fails, check Tailscale, the bridge path, gateway auth, and install path. Make sure that in the Tailscale app on your computer running OpenClaw / Hermes, you have clicked the button in the Settings page to turn on command line interface (CLI) integration, which enables the desktop Companion app to establish a private Tailscale port between your devices for VoiceClaw Realtime. After turning on CLI integration, reset and re-run the desktop Companion app and re-pair it to the phone app (Settings &gt; Account &gt; Scan QR).',
        'If voice hears itself, keep Noise Reduction on Near Field, lower speaker volume, or use headphones. VoiceClaw avoids local mic gating so GPT Realtime can still be interrupted naturally.'
      ]
    }
  ];

  /* ── Simulated conversation for a live session ───────────────────── */
  const script = [
    { who: 'you',  text: 'What does the bridge think it is connected to right now?' },
    { who: 'claw', text: 'Nothing yet — no Companion session is established, so the bridge has no Tailscale URL to reach. Everything else on this iPhone is ready.' },
    { who: 'you',  text: 'Walk me through fixing that.' },
    { who: 'claw', text: 'Open VoiceClaw Companion on the Mac, click Install and Start, then scan its QR into Quick Setup. That fills the Tailscale URL, install path, and agent in one pass.' },
    { who: 'you',  text: 'Keep the transcript off while I do that.' },
    { who: 'claw', text: 'Hidden. Audio stays live and nothing is written to disk — say “show transcript” when you want it back.' }
  ];

  /* ── Recent sessions ─────────────────────────────────────────────────
     Prototype sample history — unlike every other string in this file these
     are ILLUSTRATIVE, not a source capture. They exist so the drawer's
     session list, search, and transcript reader have something real-shaped
     to render on first launch. A session the user actually runs is recorded
     live and prepended ahead of these. */
  const sessions = [
    {
      id: 'seed-3', title: 'Bridge reachability check', when: 'Today · 09:12',
      turns: 6, dur: '04:02', route: 'OpenClaw Bridge',
      log: [
        { who: 'you',  at: '00:04', text: 'Is the Companion bridge reachable from this iPhone right now?' },
        { who: 'claw', at: '00:09', text: 'No. The Tailscale URL is empty, so the bridge has nothing to dial. Mic, speaker, and realtime auth are all fine.' },
        { who: 'you',  at: '00:41', text: 'Show me exactly which field is blank.' },
        { who: 'claw', at: '00:46', text: 'Settings › Account › Companion URL. Quick Setup fills it from the Mac QR code in one scan.' },
        { who: 'you',  at: '03:22', text: 'Scanned it. Try again.' },
        { who: 'claw', at: '03:31', text: 'Bridge answered on the first attempt. Install path and agent came across with the URL.' }
      ]
    },
    {
      id: 'seed-2', title: 'Voice and reasoning tuning', when: 'Yesterday · 21:38',
      turns: 4, dur: '02:17', route: 'OpenClaw Bridge',
      log: [
        { who: 'you',  at: '00:06', text: 'Cedar sounds too fast when you read back long paths.' },
        { who: 'claw', at: '00:12', text: 'Speaking rate is a Voice Engine setting, not a model one. I can hold Cedar and drop the rate a step.' },
        { who: 'you',  at: '01:05', text: 'Do that, and keep reasoning on High.' },
        { who: 'claw', at: '01:11', text: 'Done. Both apply from the next session — the current channel keeps its negotiated voice.' }
      ]
    },
    {
      id: 'seed-1', title: 'Watch relay handoff', when: 'Monday · 08:05',
      turns: 4, dur: '01:44', route: 'Watch Relay',
      log: [
        { who: 'you',  at: '00:03', text: 'Move this session to the Watch — I am leaving the desk.' },
        { who: 'claw', at: '00:08', text: 'Relay is paired. Audio moves to the Watch and the iPhone keeps the transcript.' },
        { who: 'you',  at: '01:12', text: 'Did anything drop in the handoff?' },
        { who: 'claw', at: '01:18', text: 'No turns lost. One 400 ms gap while the relay renegotiated the channel.' }
      ]
    }
  ];

  return {
    settings: {
      segments: [
        { id: 'general', label: 'General' },
        { id: 'account', label: 'Account' },
        { id: 'guide', label: 'Guide' },
        { id: 'about', label: 'About' }
      ],
      general, account, guide, about
    },
    diagnostics: {
      segments: [
        { id: 'tests', label: 'Tests' },
        { id: 'status', label: 'Status' },
        { id: 'permissions', label: 'Permissions' }
      ],
      tests, status, permissions
    },
    setupGuide,
    script,
    sessions
  };
})();
