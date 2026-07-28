/* ═══════════════════════════════════════════════════════════════════════
   VoiceClaw — behaviour. Router, session engine, halo, overlays.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const D = window.VC;
  const V = window.VCView;
  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  /* Session titles are lifted verbatim from transcript text, so anything
     interpolated into an ATTRIBUTE needs its quotes escaped too. */
  const attr = (s) => V.esc(s).replace(/"/g, '&quot;');

  const screen   = $('#screen');
  const layer    = $('#layer');
  const toastEl  = $('#toast');
  const reduced  = window.matchMedia('(prefers-reduced-motion: reduce)');

  const STORE = 'voiceclaw.proto.v1';
  const SENSITIVE_CONTROLS = new Set([
    'openai-key',
    'cerebras-key',
    'gateway-token',
    'gateway-pass'
  ]);
  const state = Object.assign({
    tab: 'live',
    settingsSeg: 'general',
    diagSeg: 'tests',
    session: 'idle',      // idle · connecting · listening · thinking · speaking · muted
    transcriptHidden: false,
    turnLog: [],
    signedIn: true,
    locationPerm: 'Not Asked',
    controls: {},
    open: {},
    tests: {}
  }, load());
  /* The Live surface always opens in its minimal voice-first state.
     Transcript history remains available from the side menu when requested. */
  state.transcriptHidden = true;
  /* Seed the session list once. A user who clears every session keeps an
     empty list rather than having the samples grow back. */
  if (!Array.isArray(state.sessions)) state.sessions = D.sessions.slice();

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE)) || {};
      if (saved.controls) {
        SENSITIVE_CONTROLS.forEach((key) => { delete saved.controls[key]; });
      }
      return saved;
    } catch (e) { return {}; }
  }
  function save() {
    try {
      const controls = Object.fromEntries(
        Object.entries(state.controls).filter(([key]) => !SENSITIVE_CONTROLS.has(key))
      );
      localStorage.setItem(STORE, JSON.stringify({
        tab: state.tab, settingsSeg: state.settingsSeg, diagSeg: state.diagSeg,
        transcriptHidden: state.transcriptHidden, signedIn: state.signedIn,
        locationPerm: state.locationPerm, controls,
        open: state.open, tests: state.tests, signInAt: state.signInAt,
        watchRelay: state.watchRelay, sessions: state.sessions
      }));
    } catch (e) { /* private mode — prototype still works, just doesn't persist */ }
  }

  /* ── control index ─────────────────────────────────────────────── */
  const CONTROLS = {};
  (function indexControls() {
    const walk = (items) => items.forEach((it) => {
      if (it.id && (it.t === 'picker' || it.t === 'seg' || it.t === 'switch' || it.t === 'slider' || it.t === 'field')) {
        CONTROLS[it.id] = it;
        if (!(it.id in state.controls)) state.controls[it.id] = it.value != null ? it.value : '';
      }
      if (it.children) walk(it.children);
    });
    ['general', 'account', 'guide', 'about'].forEach((k) => D.settings[k].forEach((g) => walk(g.items)));
    ['tests', 'status', 'permissions'].forEach((k) => D.diagnostics[k].forEach((g) => walk(g.items)));
  })();

  const val = (id) => (id in state.controls ? state.controls[id] : (CONTROLS[id] && CONTROLS[id].value));

  /* ── toast ─────────────────────────────────────────────────────── */
  let toastTimer;
  function toast(msg) {
    /* Never `hidden` — a role="status" region that is display:none when its
       text changes is out of the a11y tree and won't be announced. */
    toastEl.textContent = msg;
    toastEl.classList.remove('is-out');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastEl.classList.add('is-out'); }, 2600);
  }

  /* ══════════════════════════ ROUTER ═══════════════════════════════ */
  function setTab(tab, opts) {
    state.tab = tab;
    $$('.view').forEach((v) => { v.hidden = v.dataset.view !== tab; });
    if (tab === 'settings') renderSettings();
    if (tab === 'diagnostics') renderDiagnostics();
    syncLiveBar();
    deriveSetup();
    if (!opts || !opts.keepScroll) {
      const sc = $('#' + (tab === 'live' ? 'live-scroll' : tab + '-scroll'));
      if (sc) sc.scrollTop = 0;
    }
    save();
  }

  $('#btn-settings-back').addEventListener('click', () => setTab('live'));
  $('#btn-open-diagnostics').addEventListener('click', () => setTab('diagnostics'));
  $('#btn-diagnostics-back').addEventListener('click', () => setTab('settings'));

  /* ══════════════════════ SETTINGS / DIAGNOSTICS ═══════════════════ */
  function renderSettings() {
    $('#settings-seg').innerHTML = V.renderSegmentNav(D.settings.segments, state.settingsSeg, 'settings');
    let groups = D.settings[state.settingsSeg];
    if (state.settingsSeg === 'account') groups = accountGroups();
    const panel = $('#settings-panels');
    panel.setAttribute('aria-labelledby', 'settings-tab-' + state.settingsSeg);
    panel.innerHTML = V.renderGroups(groups);
    hydrate($('#settings-panels'));
    const pip = $('.pip-preview');
    if (pip) pip.hidden = !val('handoff');
    deriveSetup();
  }

  /* Account is the one panel with genuinely conditional content
     (signed in / signed out, location permission). */
  function accountGroups() {
    return D.settings.account.map((g) => {
      if (g.id !== 'keys' && g.id !== 'permissions') return g;
      const clone = Object.assign({}, g, { items: g.items.slice() });
      if (g.id === 'permissions') {
        clone.items = clone.items.map((it) => {
          if (it.t !== 'tiles') return it;
          return Object.assign({}, it, {
            items: it.items.map((p) => p.name !== 'Location' ? p
              : Object.assign({}, p, {
                  state: state.locationPerm,
                  tone: state.locationPerm === 'Not Asked' ? 'off' : 'warn'
                }))
          });
        });
      }
      if (g.id === 'keys') {
        clone.items = clone.items.map((it) => {
          if (it.t === 'note' && it.title === 'ChatGPT Subscription Sign-In') {
            if (state.signedIn && state.signInAt) {
              return Object.assign({}, it, {
                paras: it.paras.concat(['Sign-in last refreshed at ' + state.signInAt + ' on this iPhone.'])
              });
            }
            return state.signedIn ? it : Object.assign({}, it, {
              tone: null, icon: 'i-person',
              paras: ['Not signed in on this iPhone. Sign in with your ChatGPT Plus / Pro subscription, or import it from the desktop Companion app via Quick Setup › Scan QR.']
            });
          }
          if (it.t === 'btnrow' && it.buttons[0].action === 'refresh-signin') {
            return state.signedIn ? it : Object.assign({}, it, {
              buttons: [{ label: 'Sign In with ChatGPT', icon: 'i-person', variant: 'btn--pill btn--wide', action: 'sign-in' }]
            });
          }
          return it;
        });
      }
      return clone;
    });
  }

  /* Location is one fact; both permission grids must report it identically. */
  function withDerivedTiles(groups) {
    return groups.map((g) => Object.assign({}, g, {
      items: g.items.map((it) => it.t !== 'tiles' ? it : Object.assign({}, it, {
        items: it.items.map((tile) => tile.derive !== 'location' ? tile
          : Object.assign({}, tile, {
              state: state.locationPerm,
              tone: state.locationPerm === 'Not Asked' ? 'off' : 'warn'
            }))
      }))
    }));
  }

  function renderDiagnostics() {
    $('#diag-seg').innerHTML = V.renderSegmentNav(D.diagnostics.segments, state.diagSeg, 'diag');
    const panel = $('#diag-panels');
    panel.setAttribute('aria-labelledby', 'diag-tab-' + state.diagSeg);
    panel.innerHTML = V.renderGroups(withDerivedTiles(D.diagnostics[state.diagSeg]));
    hydrate($('#diag-panels'));
    deriveSetup();
    if (state.diagSeg === 'status') pushSessionReadouts();
    if (state.diagSeg === 'tests') Object.keys(state.tests).forEach((id) => paintTest(id, state.tests[id]));
  }

  /* Apply persisted control values to freshly rendered markup. */
  function hydrate(root) {
    $$('[data-seg]', root).forEach((b) => {
      const on = val(b.dataset.seg) === b.dataset.value;
      b.setAttribute('aria-checked', String(on));
      b.tabIndex = on ? 0 : -1;
    });
    $$('[data-picker-value]', root).forEach((s) => { s.textContent = val(s.dataset.pickerValue); });
    $$('[data-switch]', root).forEach((b) => { b.setAttribute('aria-checked', String(!!val(b.dataset.switch))); });
    $$('[data-slider]', root).forEach((r) => {
      const v = val(r.dataset.slider);
      r.value = v; r.style.setProperty('--pct', v + '%');
      const out = $('#out-' + r.dataset.slider, root); if (out) out.textContent = v + '%';
    });
    $$('[data-field]', root).forEach((i) => { i.value = val(i.dataset.field) || ''; });
    $$('[data-disclosure]', root).forEach((b) => {
      const open = !!state.open[b.dataset.disclosure];
      b.setAttribute('aria-expanded', String(open));
      const panel = document.getElementById('disc-' + b.dataset.disclosure);
      if (panel) panel.hidden = !open;
    });
  }

  /* ══════════════════════ DELEGATED INTERACTIONS ═══════════════════ */
  document.addEventListener('click', (e) => {
    const t = e.target;

    const navseg = t.closest('[data-navseg]');
    if (navseg) {
      const kind = navseg.dataset.navseg, value = navseg.dataset.value;
      /* capture BEFORE the re-render — replacing innerHTML drops activeElement
         back to <body>, which would make an after-the-fact check always false */
      const hadFocus = document.activeElement === navseg;
      if (kind === 'settings') { state.settingsSeg = value; renderSettings(); }
      else { state.diagSeg = value; renderDiagnostics(); }
      if (hadFocus) {
        const again = document.querySelector('[data-navseg="' + kind + '"][data-value="' + value + '"]');
        if (again) again.focus();
      }
      save(); return;
    }

    const seg = t.closest('[data-seg]');
    if (seg) {
      const id = seg.dataset.seg;
      state.controls[id] = seg.dataset.value;
      seg.parentElement.querySelectorAll('[data-seg]').forEach((b) => {
        b.setAttribute('aria-checked', String(b === seg));
        b.tabIndex = b === seg ? 0 : -1;
      });
      onControlChange(id, seg.dataset.value);
      save(); return;
    }

    const sw = t.closest('[data-switch]');
    if (sw) {
      const id = sw.dataset.switch;
      const next = sw.getAttribute('aria-checked') !== 'true';
      state.controls[id] = next;
      sw.setAttribute('aria-checked', String(next));
      onControlChange(id, next);
      save(); return;
    }

    const pk = t.closest('[data-picker]');
    if (pk) { openPicker(pk.dataset.picker, pk); return; }

    const disc = t.closest('[data-disclosure]');
    if (disc) {
      const id = disc.dataset.disclosure;
      const open = disc.getAttribute('aria-expanded') === 'true';
      state.open[id] = !open;
      disc.setAttribute('aria-expanded', String(!open));
      document.getElementById('disc-' + id).hidden = open;
      save();
      return;
    }

    const runBtn = t.closest('[data-run-test]');
    if (runBtn) { runTest(runBtn.dataset.runTest); return; }

    const act = t.closest('[data-action]');
    if (act) { doAction(act.dataset.action, act); return; }
  });

  document.addEventListener('input', (e) => {
    const r = e.target.closest('[data-slider]');
    if (r) {
      state.controls[r.dataset.slider] = Number(r.value);
      r.style.setProperty('--pct', r.value + '%');
      const out = $('#out-' + r.dataset.slider); if (out) out.textContent = r.value + '%';
      paintRouteChip();     /* the chip states Verbatim — keep it truthful */
      save(); return;
    }
    const f = e.target.closest('[data-field]');
    if (f) {
      state.controls[f.dataset.field] = f.value;
      deriveSetup();          /* typing a URL must clear the Live banner too */
      save();
    }
  });

  /* Cross-view coherence: a route change must show up on Live and in Status. */
  function onControlChange(id, value) {
    if (id === 'route' || id === 'engine' || id === 'oc-model' || id === 'oc-reasoning') paintRouteChip();
    if (id === 'display-mode') applyTheme();
    deriveSetup();
    if (id === 'auto-mic')  {
      if (value && !isLive()) { startSession(); toast('Auto-Start Mic on. Starting a live session now.'); }
      else toast(value ? 'Auto-Start Mic on. Live begins as soon as VoiceClaw opens.'
                       : 'Auto-Start Mic off. Start each session yourself.');
    }
    if (id === 'captions') toast(value ? 'Live Captions on.' : 'Live Captions off. Audio is unchanged.');
    if (id === 'handoff') toast(value ? 'Handoff Assist on.' : 'Handoff Assist off.');
    if (id === 'captions') repaintTranscript();
    if (id === 'handoff') {
      const pip = $('.pip-preview');
      if (pip) pip.hidden = !value;
    }
    paintRouteChip();
  }

  /* ══════════════════ DERIVED STATE (one source of truth) ═══════════
     Live's setup banner, the Diagnostics runtime card, Readiness, the
     Selected Voice Path rows and the Endpoints readouts are all computed
     from the same predicates, so filling a field in Settings visibly
     resolves the warning everywhere else. */
  function nonEmpty(id) { return String(val(id) || '').trim().length > 0; }

  function setupState() {
    const auth      = nonEmpty('openai-key');   /* OAuth does not satisfy Realtime */
    const companion = nonEmpty('ts-url') || nonEmpty('tunnel-url');
    const install   = nonEmpty('install-path');
    const missing = [];
    if (!auth)      missing.push('GPT Realtime Auth');
    if (!companion) missing.push('Companion URL');
    if (!install)   missing.push('OpenClaw Install Path');
    return { auth: auth, companion: companion, install: install, missing: missing };
  }

  function mark(node, tone) {
    if (!node) return;
    node.dataset.tone = tone;
    node.innerHTML = tone === 'ok' ? V.ic('i-check') : tone === 'warn' ? V.ic('i-warn') : '';
  }

  function deriveSetup() {
    const st = setupState();
    const ready = st.missing.length === 0;

    /* Live stays visually silent; setup detail is disclosed from the side menu. */
    const banner = $('#setup-banner');
    banner.hidden = true;
    if (!ready) {
      $('.banner__title', banner).textContent =
        st.missing.length + ' Setup Item' + (st.missing.length === 1 ? '' : 's') + ' Missing';
      $('.banner__meta', banner).textContent = st.missing.join(' · ');
    }
    const sub = $('#live-subtitle');
    sub.hidden = true;
    $('#transcript-empty').hidden = turnCount > 0;

    /* Diagnostics — runtime card */
    const card = $('#runtime-card');
    card.classList.toggle('is-ok', ready);
    $('#runtime-title').textContent = ready ? 'Runtime Ready' : 'Runtime Incomplete';
    $('#runtime-icon').innerHTML = V.ic(ready ? 'i-check' : 'i-warn', 'ic--lg');

    /* Diagnostics › Status — only present once that panel is mounted */
    const put = (id, v, empty) => {
      const n = document.getElementById(id);
      if (!n) return;
      n.textContent = v;
      n.classList.toggle('is-empty', !!empty);
    };
    const tunnel = nonEmpty('tunnel-url');
    put('ep-route', tunnel && !nonEmpty('ts-url') ? 'HTTPS Tunnel' : 'Tailscale');
    put('ep-tailscale', nonEmpty('ts-url') ? 'Configured on this iPhone' : 'Not set', !nonEmpty('ts-url'));
    put('ep-tunnel', tunnel ? 'Configured on this iPhone' : 'Not set', !tunnel);
    const gatewayAuth = nonEmpty('gateway-token') || nonEmpty('gateway-pass');
    put('ep-session', st.companion
      ? 'Paired · agent ' + (nonEmpty('agent') ? val('agent') : 'unset') +
        (gatewayAuth ? ' · gateway auth set' : '')
      : 'Not set', !st.companion);
    put('ep-mode', val('route'));
    put('ep-auth', val('oauth-mode') + ', fallback ' + (val('oauth-fallback') ? 'on' : 'off'));

    const rd = (id, ok) => {
      const row = document.querySelector('[data-check="' + id + '"]');
      if (row) mark($('.mark', row), ok ? 'ok' : 'idle');
    };
    put('ep-fallback', nonEmpty('bridge-path') ? val('bridge-path') : 'Not set', !nonEmpty('bridge-path'));
    put('st-output-route', val('speakerphone') ? 'Speaker (Speaker)' : 'Receiver (Earpiece)');
    put('wa-sync', state.watchRelay ? 'Attempted ' + state.watchRelay + ' — no paired Watch' : 'Never', !state.watchRelay);
    put('wa-relay', state.watchRelay ? state.watchRelay : 'Never', !state.watchRelay);
    put('wa-result', state.watchRelay ? 'Failed — device is not paired' : 'No Watch relay requests yet.', !state.watchRelay);

    rd('rd-auth', st.auth);
    rd('rd-model', true);
    rd('rd-companion', st.companion);
    rd('rd-install', st.install);

    /* Selected Voice Path: every row is a function of the chosen route/engine */
    const route = val('route');
    const bridged = route === 'OpenClaw Bridge' || route === 'Hermes Tunnel';
    const engine = val('engine');
    const companionVoice = engine === 'Companion Realtime Voice';
    const nativeVoice = engine === 'Voice Engine Standalone' || engine === 'Automatic';
    const badge = (id, text, tone, sub) => {
      const row = document.querySelector('[data-check="' + id + '"]');
      if (!row) return;
      mark($('.mark', row), tone);
      const b = $('.badge', row);
      if (b) { b.textContent = text; b.dataset.tone = tone === 'ok' ? 'ok' : 'warn'; }
      const sn = $('.row__sub', row);
      if (sn && sub) sn.textContent = sub;
    };
    badge('vp-ready', ready ? 'Yes' : 'No', ready ? 'ok' : 'warn', engine + ' on ' + route + '.');
    badge('vp-companion', bridged ? 'Yes' : 'No', bridged ? 'warn' : 'ok',
      bridged ? 'This selected path may need the Mac Companion bridge or the Mac Voice Runtime.'
              : route + ' answers without the Mac Companion bridge.');
    badge('vp-runtime', companionVoice ? 'Yes' : 'No', companionVoice ? 'warn' : 'ok',
      companionVoice ? 'Companion Realtime Voice runs on the Mac Voice Runtime.'
                     : engine + ' does not use the Mac Voice Runtime.');
    badge('vp-stt', nativeVoice ? 'Ready' : 'Not selected', 'ok',
      nativeVoice ? 'Speech Recognition is on-device.' : 'Speech Recognition is Automatic.');
    badge('vp-tts', nativeVoice ? 'Ready' : 'Not selected', 'ok',
      nativeVoice ? 'Speech Output is on-device.' : 'Speech Output is Automatic.');
    badge('vp-cerebras', companionVoice && nonEmpty('cerebras-key') ? 'Ready' : 'Not selected', 'ok',
      companionVoice && nonEmpty('cerebras-key')
        ? 'Selected as the Companion Realtime Voice LLM.'
        : 'Not selected as the Companion Realtime Voice LLM.');
    badge('vp-bridge', st.companion ? 'Yes' : 'No', st.companion ? 'ok' : 'warn',
      st.companion ? 'Private Tailscale URL configured on this iPhone.'
                   : 'Private Tailscale URL from the Mac Companion');

    /* a stale test verdict is worse than none — clear it when inputs change */
    Object.keys(state.tests).forEach((id) => {
      if (TESTS[id] && testPasses(id) !== (state.tests[id] === 'ok')) {
        delete state.tests[id];
        const res = $('[data-test-result="' + id + '"]');
        const m2 = $('[data-test-mark="' + id + '"]');
        if (res) res.hidden = true;
        if (m2) mark(m2, 'idle');
      }
    });
  }

  /* ══════════════════════════ THEME ════════════════════════════════
     Settings › Display is a real theme switch, not a toast. Apple's system
     is explicitly binary, so Light is the same tokens' pale chapter. */
  const darkPref = window.matchMedia('(prefers-color-scheme: light)');
  function applyTheme() {
    const choice = val('display-mode');
    const light = choice === 'Light' || (choice === 'System' && darkPref.matches);
    screen.dataset.theme = light ? 'light' : 'dark';
    document.querySelector('meta[name="color-scheme"]').setAttribute('content', light ? 'light' : 'dark');
    readColors();
    if (reduced.matches) drawHalo(0);
  }
  darkPref.addEventListener('change', () => { if (val('display-mode') === 'System') applyTheme(); });

  /* The Live screen is the app's status surface: the route chip states the
     model path, the status line states the audio pipeline. Between them every
     control in Settings › General has a visible consequence one tap away. */
  function paintRouteChip() {
    $('.routechip__name').textContent = val('route');
    /* line A = the realtime voice layer, line B = the OpenClaw layer */
    $('#route-meta-a').textContent = [
      val('engine'),
      String(val('voice')).replace(' — Recommended', ''),
      String(val('rt-model')).replace('GPT-Realtime-', ''),
      val('rt-reasoning')
    ].join(' · ');
    $('#route-meta-b').textContent =
      val('oc-model') + ' · ' + val('oc-reasoning') + ' · Verbatim ' + val('verbatim') + '%';
    $('#livebar-route').textContent = val('route');
    paintStatusLine();
  }

  function paintStatusLine() {
    $('#live-status').textContent = STATES[state.session].status;
    const output = val('speakerphone') ? 'Speaker' : 'Receiver';
    $('#pipeline').innerHTML =
      '<b>' + V.esc(val('mic-device')) + '</b><i>&rarr;</i><b>' + V.esc(output) + '</b>' +
      '<i>·</i>' + V.esc(val('noise')) + '<i>·</i>' + V.esc(val('vad'));
  }

  /* ══════════════════════════ ACTIONS ══════════════════════════════ */
  function doAction(name, el) {
    switch (name) {
      case 'scan-qr':
        /* Source capture 97: scanning from a mirrored iPhone fails this way. */
        openAlert({
          icon: 'i-camera',
          title: 'iPhone camera is not available from Mac.',
          text: 'Paste the setup JSON from VoiceClaw Companion instead, or scan the QR directly on the iPhone.',
          actions: [{ label: 'OK', primary: true }]
        });
        break;

      case 'paste-json': openPasteSheet(); break;

      case 'prepare-permissions':
        if (state.locationPerm === 'Not Asked') {
          state.locationPerm = 'On Request';
          renderSettings();
          toast('Location is now asked for on request. All other permissions were already allowed.');
        } else {
          toast('All permissions already prepared. Denied items must be changed in iOS Settings.');
        }
        save();
        break;

      case 'open-ios-settings':
        leaveApp('Open iOS Settings?',
          'VoiceClaw will hand off to iOS Settings › VoiceClaw, where denied permissions can be re-enabled.',
          'Open Settings', 'Handed off to iOS Settings › VoiceClaw.');
        break;

      case 'refresh-signin': refreshSignIn(el); break;

      case 'sign-in':
        state.signedIn = true; renderSettings(); save();
        toast('Signed in with ChatGPT. The token is stored in the iOS Keychain.');
        break;

      case 'sign-out':
        openAlert({
          icon: 'i-person', title: 'Sign out of ChatGPT?',
          text: 'GPT-5.5 without OpenClaw and OAuth-compatible voice engines will stop working on this iPhone until you sign in again.',
          actions: [
            { label: 'Cancel' },
            { label: 'Sign Out', danger: true, onClick: () => {
                state.signedIn = false; renderSettings(); save(); toast('Signed out. Stored tokens were removed from the Keychain.');
              } }
          ]
        });
        break;

      case 'retry-watch-sync': retryWatchSync(el); break;

      case 'reset-runtime':
        openAlert({
          icon: 'i-trash', title: 'Reset Private Runtime?',
          text: 'Clears ChatGPT sign-ins, OpenAI/Cerebras API keys, OpenClaw/Hermes bridge settings, Companion pairing, and display settings from this iPhone. This cannot be undone.',
          actions: [
            { label: 'Cancel' },
            { label: 'Reset', danger: true, onClick: () => {
                ['openai-key', 'cerebras-key', 'ts-url', 'tunnel-url', 'install-path', 'gateway-token', 'gateway-pass']
                  .forEach((k) => { state.controls[k] = ''; });
                state.controls['agent'] = '';
                state.controls['bridge-path'] = '/realtime/openclaw-turn';
                state.controls['display-mode'] = 'System';   /* the alert promises this */
                applyTheme();
                state.watchRelay = null;
                state.signedIn = false;
                state.locationPerm = 'Not Asked';
                renderSettings(); save();
                toast('Private runtime reset. Keychain entries for this app were deleted.');
              } }
          ]
        });
        break;

      case 'open-setup-guide': openGuide(0); break;

      case 'link-privacy':
        leaveApp('Open the privacy policy?', 'This opens in Safari. VoiceClaw keeps running in the background.',
          'Open in Safari', 'Privacy policy opened in Safari.');
        break;
      case 'link-terms':
        leaveApp('Open the terms of use?', 'This opens in Safari. VoiceClaw keeps running in the background.',
          'Open in Safari', 'Terms of use opened in Safari.');
        break;
      case 'link-support':
        leaveApp('Open VoiceClaw support?', 'This opens in Safari. VoiceClaw keeps running in the background.',
          'Open in Safari', 'Support opened in Safari.');
        break;

      default: break;
    }
  }

  /* Anything that leaves the app confirms first, the way iOS does. */
  function leaveApp(title, text, confirmLabel, done) {
    openAlert({
      icon: 'i-arrow-right-box', title: title, text: text,
      actions: [{ label: 'Cancel' }, { label: confirmLabel, primary: true, onClick: () => toast(done) }]
    });
  }

  /* A refresh that only toasts is indistinguishable from a no-op — show the
     work, then show the result on the card itself. */
  function refreshSignIn(btn) {
    if (!btn || btn.dataset.busy) return;
    const label = btn.innerHTML;
    btn.dataset.busy = '1';
    btn.setAttribute('aria-busy', 'true');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('aria-label', 'Refreshing ChatGPT sign-in');
    btn.innerHTML = '<span class="spinner"></span><span class="sr-only">Refreshing ChatGPT sign-in</span>';
    setTimeout(() => {
      btn.innerHTML = label;
      delete btn.dataset.busy;
      btn.removeAttribute('aria-busy');
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('aria-label');
      state.signInAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      renderSettings();
      save();
      toast('ChatGPT sign-in refreshed. The token stays in the Keychain and is never displayed.');
    }, 1200);
  }

  function retryWatchSync(btn) {
    const textEl = $('[data-failtext="watch-sync"]');
    if (!textEl || btn.dataset.busy) return;
    btn.dataset.busy = '1';
    btn.setAttribute('aria-busy', 'true');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('aria-label', 'Retrying Apple Watch sync');
    btn.innerHTML = '<span class="spinner"></span><span class="sr-only">Retrying Apple Watch sync</span>';
    textEl.setAttribute('role', 'status');
    textEl.setAttribute('aria-live', 'polite');
    textEl.textContent = 'Contacting Apple Watch…';
    setTimeout(() => {
      textEl.textContent = 'Apple Watch sync failed: Device is not paired.';
      btn.innerHTML = V.ic('i-refresh') + '<span class="sr-only">Retry Apple Watch sync</span>';
      delete btn.dataset.busy;
      btn.removeAttribute('aria-busy');
      btn.removeAttribute('aria-disabled');
      btn.setAttribute('aria-label', 'Retry Apple Watch sync');
      /* the attempt is recorded in Diagnostics, so it is not a no-op */
      state.watchRelay = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      save();
      deriveSetup();
      toast('No paired Watch found. The attempt is logged in Diagnostics › Status.');
    }, 1400);
  }

  /* ══════════════════════════ TESTS ════════════════════════════════ */
  const TESTS = {};
  D.diagnostics.tests.forEach((g) => g.items.forEach((it) => {
    if (it.t === 'tests') it.items.forEach((t) => { TESTS[t.id] = t; });
  }));

  function testPasses(id) {
    const t = TESTS[id];
    if (!t) return false;
    const st = setupState();
    if (t.check === 'auth') return st.auth;
    if (t.check === 'companion') return st.companion;
    return true;   /* local audio output is always available on device */
  }

  function runTest(id) {
    const btn = $('[data-run-test="' + id + '"]');
    if (!btn || btn.dataset.busy) return;
    btn.dataset.busy = '1';
    btn.setAttribute('aria-busy', 'true');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('aria-label', 'Running ' + TESTS[id].name + ' test');
    btn.innerHTML = '<span class="spinner"></span><span class="sr-only">Running ' + V.esc(TESTS[id].name) + ' test</span>';
    const mark = $('[data-test-mark="' + id + '"]');
    if (mark) { mark.dataset.tone = 'idle'; mark.innerHTML = ''; }
    const res = $('[data-test-result="' + id + '"]');
    if (res) {
      res.removeAttribute('data-tone');
      res.textContent = 'Running ' + TESTS[id].name + ' test…';
      res.hidden = false;
    }
    setTimeout(() => {
      state.tests[id] = testPasses(id) ? 'ok' : 'bad';
      paintTest(id, state.tests[id]);
      delete btn.dataset.busy;
      save();
    }, 850 + Math.random() * 500);
  }

  function paintTest(id, outcome) {
    const btn  = $('[data-run-test="' + id + '"]');
    const mark = $('[data-test-mark="' + id + '"]');
    const res  = $('[data-test-result="' + id + '"]');
    if (!btn || !mark || !res) return;
    btn.innerHTML = V.ic('i-play', 'ic--sm');
    btn.removeAttribute('aria-busy');
    btn.removeAttribute('aria-disabled');
    btn.setAttribute('aria-label', 'Run ' + TESTS[id].name + ' test');
    mark.dataset.tone = outcome === 'ok' ? 'ok' : 'warn';
    mark.innerHTML = V.ic(outcome === 'ok' ? 'i-check' : 'i-warn');
    res.textContent = (outcome === 'ok' ? TESTS[id].pass : TESTS[id].fail)
      .replace('{model}', val('rt-model'));
    res.dataset.tone = outcome === 'ok' ? 'ok' : 'bad';
    res.hidden = false;
  }

  /* ══════════════════════════ OVERLAYS ═════════════════════════════ */
  const stack = [];

  function inertBackground(on) {
    $$('.view, .livebar').forEach((el) => {
      if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
      else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
    });
  }

  function pauseOverlay(entry, on) {
    if (!entry || !entry.node) return;
    if (on) {
      entry.node.setAttribute('inert', '');
      entry.node.setAttribute('aria-hidden', 'true');
    } else {
      entry.node.removeAttribute('inert');
      entry.node.removeAttribute('aria-hidden');
    }
  }

  function openOverlay(node, opts) {
    const prev = document.activeElement;
    layer.appendChild(node);
    if (stack.length === 0) inertBackground(true);
    else pauseOverlay(stack[stack.length - 1], true);
    stack.push({ node: node, prev: prev, onClose: opts && opts.onClose });
    /* never land focus on the dismiss scrim — it reads as "nothing selected" */
    const first = node.querySelector('[data-autofocus]')
      || node.querySelector('button:not(.scrim), [href], input, select, textarea');
    if (first) first.focus();
    return node;
  }

  function closeOverlay() {
    const top = stack.pop();
    if (!top) return;
    top.node.remove();
    if (stack.length === 0) inertBackground(false);
    else pauseOverlay(stack[stack.length - 1], false);
    if (top.prev && document.contains(top.prev)) top.prev.focus();
    if (top.onClose) top.onClose();
  }

  /* Arrow keys move through segmented controls and tab lists, as they do in
     a native picker. Activation follows focus, matching iOS. */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const btn = e.target.closest && e.target.closest('[role="radio"], [role="tab"]');
      if (btn) {
        const group = btn.closest('[role="radiogroup"], [role="tablist"]');
        if (group) {
          const items = $$('[role="radio"], [role="tab"]', group);
          const i = items.indexOf(btn);
          const next = items[(i + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length];
          e.preventDefault();
          next.focus();
          next.click();
          return;
        }
      }
    }
    if (e.key === 'Escape' && stack.length) { e.preventDefault(); closeOverlay(); return; }
    if (e.key !== 'Tab' || !stack.length) return;
    const node = stack[stack.length - 1].node;
    const f = $$('button:not(.scrim), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', node)
      .filter((el) => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  function el(html) {
    const d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  function scrim() {
    const s = el('<button class="scrim" type="button" aria-label="Dismiss"></button>');
    s.addEventListener('click', closeOverlay);
    return s;
  }

  /* `bare` = the child already carries its own dialog role, so the wrapper
     must stay a plain positioning box rather than nesting two dialogs. */
  function wrap(children, bare) {
    const w = document.createElement('div');
    w.style.cssText = 'position:absolute;inset:0';
    if (!bare) {
      w.setAttribute('role', 'dialog');
      w.setAttribute('aria-modal', 'true');
    }
    children.forEach((c) => w.appendChild(c));
    return w;
  }

  /* action sheet ---------------------------------------------------- */
  function openSheet(cfg) {
    const sheet = el(`
      <div class="sheet">
        <div class="sheet__group">
          ${cfg.title ? `<p class="sheet__title" id="sheet-title">${V.esc(cfg.title)}</p>` : ''}
          <div class="sheet__scroll" role="${cfg.items.some((i) => i.checked != null) ? 'menu' : 'group'}">
            ${cfg.items.map((i, n) => `
              <button class="sheet__item${i.danger ? ' sheet__item--danger' : ''}" type="button" data-i="${n}"
                      ${i.checked != null ? `role="menuitemradio" aria-checked="${i.checked}"` : ''}
                      data-od-id="sheet-item-${V.slug(i.label)}">
                ${i.icon ? V.ic(i.icon, 'ic--sm') : ''}<span>${V.esc(i.label)}</span>
                ${i.checked != null ? `<span class="sheet__check">${V.ic('i-check', 'ic--sm')}</span>` : ''}
              </button>`).join('')}
          </div>
        </div>
        <button class="sheet__cancel" type="button" data-cancel>Cancel</button>
      </div>`);
    sheet.addEventListener('click', (e) => {
      if (e.target.closest('[data-cancel]')) { closeOverlay(); return; }
      const b = e.target.closest('[data-i]');
      if (!b) return;
      const item = cfg.items[Number(b.dataset.i)];
      closeOverlay();
      if (item.onClick) item.onClick();
    });
    const w = wrap([scrim(), sheet]);
    if (cfg.title) w.setAttribute('aria-labelledby', 'sheet-title'); else w.setAttribute('aria-label', cfg.aria || 'Options');
    if (!reduced.matches) draggable(sheet, { threshold: 90 });
    openOverlay(w, { onClose: cfg.onClose });
  }

  /* left-edge navigation drawer -----------------------------------
     No close button: the scrim, Escape, and the trigger all dismiss it, so
     the header slot is spent on search instead — the only control that gets
     more useful as the session list grows. */
  function openSideMenu(cfg) {
    const groups = cfg.groups || [];
    const flat = [];
    groups.forEach((g) => g.items.forEach((it) => flat.push(it)));

    /* one running index across every group so the entrance stagger reads as
       a single sweep instead of restarting per section */
    let row = 0;
    const actionMarkup = groups.filter((g) => g.items.length).map((g) => `
      <nav class="side-menu__nav" data-group aria-label="${attr(g.label)}">
        <p class="side-menu__label">${V.esc(g.label)}</p>
        ${g.items.map((item) => {
          const i = flat.indexOf(item);
          const cls = 'side-menu__item'
            + (item.primary ? ' side-menu__item--primary' : '')
            + (item.danger ? ' side-menu__item--danger' : '');
          return `
            <button class="${cls}" type="button" data-i="${i}" style="--i:${row++}"
                    data-search="${attr((item.label + ' ' + (item.meta || '')).toLowerCase())}"
                    ${i === 0 ? 'data-autofocus' : ''}
                    data-od-id="side-menu-item-${V.slug(item.label)}">
              ${item.icon ? V.ic(item.icon) : ''}
              <span class="side-menu__body">
                <span>${V.esc(item.label)}</span>
                ${item.meta ? `<span class="side-menu__meta">${V.esc(item.meta)}</span>` : ''}
              </span>
            </button>`;
        }).join('')}
      </nav>`).join('');

    const sessions = cfg.sessions || [];
    const sessionMarkup = sessions.length ? `
      <nav class="side-menu__nav" data-group aria-label="Sessions">
        <p class="side-menu__label">Sessions</p>
        ${sessions.map((s) => `
          <button class="side-menu__item side-menu__item--session${s.live ? ' side-menu__item--live' : ''}"
                  type="button" data-session-id="${attr(s.id)}" style="--i:${row++}"
                  data-search="${attr((s.title + ' ' + s.meta).toLowerCase())}"
                  data-od-id="side-menu-session-${V.slug(s.id)}">
            ${s.live ? '<span class="session-dot" aria-hidden="true"></span>' : V.ic('i-clock')}
            <span class="side-menu__body">
              <span class="side-menu__title-line">${V.esc(s.title)}</span>
              <span class="side-menu__meta">${V.esc(s.meta)}</span>
            </span>
            ${V.ic('i-chevron', 'ic--sm side-menu__chev')}
          </button>`).join('')}
      </nav>` : '';

    const menu = el(`
      <aside class="side-menu" id="voiceclaw-side-menu" role="dialog" aria-modal="true"
             aria-labelledby="side-menu-title" data-od-id="side-menu">
        <div class="side-menu__head">
          <h2 class="side-menu__title" id="side-menu-title">${V.esc(cfg.title || 'Menu')}</h2>
          ${cfg.subtitle ? `<p class="side-menu__sub">${V.esc(cfg.subtitle)}</p>` : ''}
        </div>
        <div class="side-menu__search">
          <div class="msearch">
            ${V.ic('i-search', 'ic--sm')}
            <input class="msearch__input" id="menu-search" type="search" autocomplete="off"
                   enterkeyhint="search" placeholder="Search actions and sessions"
                   aria-label="Search actions and sessions" aria-controls="side-menu-results">
            <button class="msearch__clear" type="button" data-clear hidden>
              ${V.ic('i-x', 'ic--sm')}<span class="sr-only">Clear search</span>
            </button>
          </div>
        </div>
        <div class="side-menu__scroll" id="side-menu-results" data-scrollable>
          ${actionMarkup}
          ${sessionMarkup}
          <p class="side-menu__empty" id="menu-empty" role="status" aria-live="polite" hidden></p>
        </div>
      </aside>`);

    const input = $('#menu-search', menu);
    const clear = $('[data-clear]', menu);
    const empty = $('#menu-empty', menu);

    function filter() {
      const q = input.value.trim().toLowerCase();
      clear.hidden = !q;
      let shown = 0;
      $$('[data-search]', menu).forEach((node) => {
        const hit = !q || node.dataset.search.indexOf(q) !== -1;
        node.hidden = !hit;
        if (hit) shown++;
      });
      $$('[data-group]', menu).forEach((g) => {
        g.hidden = !$$('[data-search]', g).some((n) => !n.hidden);
      });
      empty.hidden = shown > 0;
      empty.textContent = shown > 0 ? '' : 'Nothing here matches “' + input.value.trim() + '”.';
    }
    input.addEventListener('input', filter);

    menu.addEventListener('click', (event) => {
      if (event.target.closest('[data-clear]')) {
        input.value = ''; filter(); input.focus(); return;
      }
      /* #screen already carries data-session for the session STATE, and
         .closest() walks all the way up to it — the row hook has to be a
         name nothing else in the tree uses. */
      const sessionBtn = event.target.closest('[data-session-id]');
      if (sessionBtn) {
        const id = sessionBtn.dataset.sessionId;
        closeOverlay();
        if (cfg.onSession) cfg.onSession(id);
        return;
      }
      const button = event.target.closest('[data-i]');
      if (!button) return;
      const item = flat[Number(button.dataset.i)];
      closeOverlay();
      if (item && item.onClick) item.onClick();
    });

    if (cfg.trigger) cfg.trigger.setAttribute('aria-expanded', 'true');
    const wrapper = wrap([scrim(), menu], true);
    if (!reduced.matches) draggable(menu, { axis: 'x', threshold: 72 });
    openOverlay(wrapper, {
      onClose: () => {
        if (cfg.trigger) cfg.trigger.setAttribute('aria-expanded', 'false');
        if (cfg.onClose) cfg.onClose();
      }
    });
  }

  function openPicker(id, trigger) {
    const ctl = CONTROLS[id];
    if (!ctl) return;
    const current = val(id);
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    openSheet({
      onClose: () => { if (trigger) trigger.setAttribute('aria-expanded', 'false'); },
      title: ctl.label || ctl.aria || 'Choose an option',
      aria: ctl.label || ctl.aria || id,
      items: ctl.options.map((o) => ({
        label: o, checked: o === current,
        onClick: () => {
          state.controls[id] = o;
          const target = $('[data-picker-value="' + id + '"]');
          if (target) target.textContent = o;
          onControlChange(id, o);
          save();
        }
      }))
    });
  }

  /* alert ----------------------------------------------------------- */
  function openAlert(cfg) {
    const a = el(`
      <div class="alert" role="alertdialog" aria-modal="true" aria-labelledby="alert-t" aria-describedby="alert-d">
        <div class="alert__body">
          ${cfg.icon ? `<span class="alert__ic">${V.ic(cfg.icon)}</span>` : ''}
          <h2 class="alert__title" id="alert-t">${V.esc(cfg.title)}</h2>
          <p class="alert__text" id="alert-d">${V.esc(cfg.text)}</p>
        </div>
        <div class="alert__actions">
          ${cfg.actions.map((x, n) => `<button class="alert__btn${x.primary ? ' alert__btn--primary' : ''}${x.danger ? ' alert__btn--danger' : ''}"
              type="button" data-i="${n}" ${x.primary ? 'data-autofocus' : ''}>${V.esc(x.label)}</button>`).join('')}
        </div>
      </div>`);
    a.addEventListener('click', (e) => {
      const b = e.target.closest('[data-i]');
      if (!b) return;
      const action = cfg.actions[Number(b.dataset.i)];
      closeOverlay();
      if (action.onClick) action.onClick();
    });
    openOverlay(wrap([scrim(), a], true));
  }

  /* paste-JSON sheet ------------------------------------------------ */
  function openPasteSheet() {
    const node = el(`
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="paste-t">
        <div class="sheet__group paste-sheet">
          <div class="paste-sheet__intro">
            <h2 class="paste-sheet__title" id="paste-t">Paste setup JSON</h2>
            <p class="paste-sheet__copy" id="paste-help">Paste the payload printed by VoiceClaw Companion. Supported connection details are applied on this iPhone; credentials are never shown in the confirmation.</p>
          </div>
          <div class="field paste-sheet__field">
            <label class="field__label" for="paste-input">Setup payload</label>
            <textarea class="field__input paste-sheet__input" id="paste-input" rows="4" data-autofocus
                      aria-describedby="paste-help paste-err"
                      placeholder='{"tailscaleURL": "…", "installPath": "…", "agent": "main"}'></textarea>
            <p class="field__help paste-sheet__error" id="paste-err" role="alert" aria-live="assertive" hidden>That doesn't look like a setup payload. Copy it again from the Companion window.</p>
          </div>
          <div class="btnrow paste-sheet__actions">
            <button class="btn btn--quiet btn--pill" type="button" data-cancel>Cancel</button>
            <button class="btn btn--pill" type="button" data-apply>Use Setup Payload</button>
          </div>
        </div>
      </div>`);
    node.addEventListener('click', (e) => {
      if (e.target.closest('[data-cancel]')) { closeOverlay(); return; }
      if (!e.target.closest('[data-apply]')) return;
      const ta = $('#paste-input', node);
      const text = ta.value.trim();
      const error = $('#paste-err', node);
      const reject = (message) => {
        error.textContent = message;
        error.hidden = false;
        ta.setAttribute('aria-invalid', 'true');
        ta.focus();
      };
      let payload;
      try {
        payload = JSON.parse(text);
      } catch (err) {
        reject('The setup payload is not valid JSON. Copy it again from VoiceClaw Companion.');
        return;
      }
      if (!payload || Array.isArray(payload) || typeof payload !== 'object') {
        reject('The setup payload must be a JSON object from VoiceClaw Companion.');
        return;
      }

      const fields = [
        { id: 'ts-url', keys: ['tailscaleURL', 'tailscaleUrl', 'tsURL', 'tsUrl', 'companionURL'] },
        { id: 'tunnel-url', keys: ['tunnelURL', 'tunnelUrl', 'publicTunnelURL', 'publicTunnelUrl'] },
        { id: 'install-path', keys: ['installPath', 'openClawInstallPath'] },
        { id: 'agent', keys: ['agent', 'agentId'] }
      ];
      let applied = 0;
      fields.forEach((field) => {
        const key = field.keys.find((candidate) => typeof payload[candidate] === 'string' && payload[candidate].trim());
        if (!key) return;
        state.controls[field.id] = payload[key].trim();
        applied++;
      });
      if (!applied) {
        reject('No supported connection fields were found. Copy the current setup payload from VoiceClaw Companion.');
        return;
      }

      closeOverlay();
      renderSettings(); deriveSetup(); save();
      toast('Setup payload applied. ' + applied + (applied === 1 ? ' connection field was' : ' connection fields were') + ' updated.');
    });
    $('#paste-input', node).addEventListener('input', (e) => {
      e.currentTarget.removeAttribute('aria-invalid');
      $('#paste-err', node).hidden = true;
    });
    openOverlay(wrap([scrim(), node], true));
  }

  /* setup guide ----------------------------------------------------- */
  function openGuide(startIndex) {
    let i = startIndex || 0;
    const total = D.setupGuide.length;
    const node = el(`
      <div class="fullscreen" role="dialog" aria-modal="true" aria-label="Setup Guide">
        <div class="fs__nav">
          <span class="fs__spacer"></span>
          <h2 class="fs__title">Setup Guide</h2>
          <button class="fs__done" type="button" data-done data-od-id="guide-done">Done</button>
        </div>
        <div class="fs__scroll" id="fs-scroll" tabindex="-1"></div>
        <div class="fs__foot">
          <button class="fs__navbtn" type="button" data-back data-od-id="guide-back">Close</button>
          <button class="fs__steps" type="button" data-steps aria-haspopup="menu" data-od-id="guide-steps">
            <span class="fs__steps-label"></span>
            <span class="fs__track" aria-hidden="true"><span class="fs__fill"></span></span>
          </button>
          <button class="fs__navbtn fs__navbtn--primary" type="button" data-next data-od-id="guide-next">Next</button>
        </div>
      </div>`);

    const scroll = $('#fs-scroll', node);
    const back   = $('[data-back]', node);
    const next   = $('[data-next]', node);
    const stepsBtn = $('[data-steps]', node);

    function paint() {
      scroll.innerHTML = V.guidePage(D.setupGuide[i], i, total);
      scroll.scrollTop = 0;
      $('.fs__steps-label', node).textContent = 'Step ' + (i + 1) + ' of ' + total;
      $('.fs__fill', node).style.width = ((i + 1) / total * 100) + '%';
      stepsBtn.setAttribute('aria-label', 'Step ' + (i + 1) + ' of ' + total + ': ' + D.setupGuide[i].title + '. Jump to another step.');
      back.textContent = i === 0 ? 'Close' : 'Back';
      next.textContent = i === total - 1 ? 'Done' : 'Next';
    }

    node.addEventListener('click', (e) => {
      if (e.target.closest('[data-done]')) { closeOverlay(); return; }
      if (e.target.closest('[data-back]')) {
        if (i === 0) closeOverlay(); else { i--; paint(); }
        return;
      }
      if (e.target.closest('[data-next]')) {
        if (i === total - 1) closeOverlay(); else { i++; paint(); }
        return;
      }
      if (e.target.closest('[data-steps]')) {
        openSheet({
          title: 'Setup Guide',
          items: D.setupGuide.map((p, n) => ({
            label: (n + 1) + '. ' + p.title,
            checked: n === i,
            onClick: () => { i = n; paint(); }
          }))
        });
      }
    });

    paint();
    /* only from the top chrome — the body scrolls */
    if (!reduced.matches) draggable(node, { threshold: 120, guard: () => scroll.scrollTop <= 0 });
    openOverlay(node);
  }

  /* ══════════════════════════ LIVE SESSION ═════════════════════════ */
  const halo = $('#halo-canvas');
  const hctx = halo.getContext('2d');
  const SPOKES = 72;

  const STATES = {
    idle:       { label: 'Ready',       hint: 'Tap to start a live session',       status: 'Session ready. Microphone allowed.', caption: 'Start Live Session' },
    connecting: { label: 'Connecting',  hint: 'Opening the GPT Realtime channel',  status: 'Negotiating realtime session…',      caption: 'Connecting' },
    listening:  { label: 'Listening',   hint: 'Speak naturally — interrupt anytime', status: 'Live · listening on Speaker',      caption: 'End Live Session' },
    thinking:   { label: 'Working',     hint: 'Handing the turn to OpenClaw',      status: 'Live · OpenClaw turn in flight',     caption: 'End Live Session' },
    speaking:   { label: 'Speaking',    hint: 'Tap Mute to stop the mic, not the reply', status: 'Live · speaking on Speaker',   caption: 'End Live Session' },
    muted:      { label: 'Muted',       hint: 'The session is still open',         status: 'Live · microphone muted',            caption: 'End Live Session' }
  };

  let amp = 0.1, ampTarget = 0.1, phase = 0, rafId = null, seq = null;
  let scriptIdx = 0, turnCount = 0, outputEvents = 0, sessionStart = 0;

  function isLive() { return state.session !== 'idle'; }

  function setSession(next) {
    state.session = next;
    screen.dataset.session = next;
    const s = STATES[next];
    $('#halo-state').textContent = s.label;
    $('#halo-hint').textContent = s.hint;
    paintStatusLine();

    $('#transport').hidden = !isLive();
    $('#btn-halo').setAttribute('aria-label',
      (next === 'idle' ? 'Start' : 'End') + ' live session. Currently ' + s.label + '.');
    $('#btn-mute').classList.toggle('is-muted', next === 'muted');
    $('#mute-label').textContent = next === 'muted' ? 'Unmute' : 'Mute';
    $('#btn-mute').firstElementChild.firstElementChild
      .setAttribute('href', next === 'muted' ? '#i-mic-slash' : '#i-mic');
    $('#livebar-state').textContent = s.label;
    ampTarget = next === 'listening' ? 0.5 : next === 'speaking' ? 0.85
              : next === 'thinking' ? 0.28 : next === 'connecting' ? 0.34
              : next === 'muted' ? 0.05 : 0.1;
    syncLiveBar();
    pushSessionReadouts();
    deriveSetup();
    if (reduced.matches) drawHalo(0);
  }

  function syncLiveBar() {
    /* Shown on every non-Live tab — running OR idle — so a voice session is
       always exactly one tap away, which is the whole point of the app. */
    const on = state.tab !== 'live';
    const bar = $('#livebar');
    bar.hidden = !on;
    screen.dataset.livebar = on ? '1' : '0';
    bar.classList.toggle('is-idle', !isLive());
    $('#livebar-state').textContent = isLive() ? STATES[state.session].label : 'Start a live session';
    $('#livebar-route').textContent = val('route');
    bar.setAttribute('aria-label', isLive()
      ? 'Return to Live. Currently ' + STATES[state.session].label + '.'
      : 'Start a live session.');
  }

  $('#livebar').addEventListener('click', () => {
    if (!isLive()) startSession();
    setTab('live');
  });

  /* — transport — */
  function toggleSession() { if (!isLive()) startSession(); else endSession(); }
  $('#btn-halo').addEventListener('click', toggleSession);
  $('#btn-end').addEventListener('click', endSession);
  $('#btn-mute').addEventListener('click', () => {
    if (!isLive()) return;
    if (state.session === 'muted') { setSession('listening'); scheduleNext(1400); }
    else { clearTimeout(seq); setSession('muted'); }
  });

  function startSession() {
    sessionStart = Date.now();
    setSession('connecting');
    setTimeout(() => {
      if (state.session !== 'connecting') return;
      setSession('listening');
      scheduleNext(1600);
    }, 1100);
  }

  function endSession() {
    clearTimeout(seq);
    const saved = archiveSession();
    setSession('idle');
    $('#live-status').textContent = saved
      ? 'Session ended. ' + saved.turns + ' turn' + (saved.turns === 1 ? '' : 's') + ' saved to Sessions on this iPhone.'
      : 'Session ready. Microphone allowed.';
    toast(saved
      ? 'Session ended — ' + saved.turns + ' turns saved under Sessions.'
      : 'Live session ended. The microphone is released.');
  }

  /* Ending a session files it under Sessions and hands the Live surface a
     clean transcript, so the two never blur into one endless log. */
  function archiveSession() {
    const log = state.turnLog || [];
    if (!log.length) return null;
    const first = log.find((t) => t.who === 'you');
    const record = {
      id: 's' + Date.now(),
      title: first ? shorten(first.text) : 'Voice session',
      when: 'Today · ' + wallClock(),
      turns: log.length,
      dur: clock(),
      route: val('route'),
      log: log.slice()
    };
    state.sessions = [record].concat(state.sessions || []).slice(0, 24);
    resetTranscript();
    save();
    return record;
  }

  function wallClock() {
    const d = new Date();
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  function resetTranscript() {
    $('#transcript-log').innerHTML = '';
    state.turnLog = [];
    turnCount = 0; outputEvents = 0; scriptIdx = 0;
    $('#transcript-count').textContent = '0';
    $('#transcript-empty').hidden = false;
  }

  function scheduleNext(delay) {
    clearTimeout(seq);
    seq = setTimeout(step, delay);
  }

  function step() {
    if (!isLive() || state.session === 'muted') return;
    const line = D.script[scriptIdx % D.script.length];
    if (line.who === 'you') {
      addTurn('you', line.text);
      scriptIdx++;
      setSession('thinking');
      scheduleNext(1300);
    } else {
      setSession('speaking');
      addTurn('claw', line.text);
      scriptIdx++;
      outputEvents += 3;
      scheduleNext(2600 + line.text.length * 12);
      setTimeout(() => { if (state.session === 'speaking') setSession('listening'); }, 2400 + line.text.length * 12);
    }
  }

  function clock() {
    const s = Math.max(0, Math.floor((Date.now() - sessionStart) / 1000));
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  function addTurn(who, text) {
    turnCount++;
    state.turnLog = state.turnLog || [];
    state.turnLog.push({ who: who, text: text, at: clock() });
    const log = $('#transcript-log');
    log.appendChild(turnNode({ who: who, text: text, at: clock() }));
    $('#transcript-count').textContent = String(turnCount);
    $('#transcript-empty').hidden = true;
    const sc = $('#live-scroll');
    if (!state.transcriptHidden && state.tab === 'live') {
      sc.scrollTo({ top: sc.scrollHeight, behavior: reduced.matches ? 'auto' : 'smooth' });
    }
    pushSessionReadouts();
  }

  /* Live Captions off = the turn still happened, it just isn't transcribed.
     `archived` skips that rule: a stored session already has its text, and
     re-reading it must not depend on the CURRENT captions setting. */
  function turnNode(t, archived) {
    const captioned = archived || !!val('captions');
    const li = document.createElement('li');
    li.className = 'turn turn--' + t.who + (captioned ? '' : ' turn--uncaptioned');
    const who = t.who === 'you' ? 'You' : 'VoiceClaw';
    li.innerHTML = '<span class="turn__meta">' + t.at + '</span>' +
      '<p class="turn__text"><span class="turn__who">' + who + '</span>' +
      (captioned ? V.esc(t.text) : 'Captions off — spoken turn not transcribed.') + '</p>';
    return li;
  }

  function repaintTranscript() {
    const log = $('#transcript-log');
    log.innerHTML = '';
    (state.turnLog || []).forEach((t) => log.appendChild(turnNode(t)));
  }

  /* Diagnostics ›Status mirrors the live session — same data, one source. */
  function pushSessionReadouts() {
    const put = (id, v, empty) => {
      const n = document.getElementById(id);
      if (!n) return;
      n.textContent = v;
      n.classList.toggle('is-empty', !!empty);
    };
    const live = isLive();
    put('st-state', live ? STATES[state.session].label : 'Ready');
    put('st-mic-level', (state.session === 'muted' ? 0 : amp).toFixed(2));
    put('st-mic-muted', state.session === 'muted' ? 'Yes' : 'No');
    put('st-last-event', live ? 'session.' + state.session : 'None', !live);
    put('st-timeline', live ? 'Connected at ' + clock() + ' · realtime channel open' : 'No connection attempt recorded.', !live);
    put('st-tool-owner', state.session === 'thinking' ? 'OpenClaw (bridge turn)' : live ? 'GPT Realtime' : 'Not connected', !live);
    put('st-response', state.session === 'speaking' ? 'Streaming' : state.session === 'thinking' ? 'Awaiting tool' : 'Idle');
    put('st-pending', state.session === 'thinking' ? '1' : '0');
    put('st-attempts', String(Math.ceil(turnCount / 2)));
    put('st-output-events', String(outputEvents));
    put('st-last-audio', live && turnCount ? clock() + ' · 24 kHz PCM' : 'None', !(live && turnCount));
    put('st-turns', String(turnCount));
    put('st-collisions', '0');
    put('st-retry', live ? 'No retry required' : 'None', !live);
    put('st-tool-call', state.session === 'thinking'
      ? 'openclaw.turn (' + val('oc-model') + ')'
      : live && turnCount ? 'openclaw.turn · completed' : 'None', !(live && turnCount));

    const card = $('#runtime-card');
    if (card) {
      $('#runtime-meta').textContent = (live ? STATES[state.session].label : 'Ready') + ' · Mic ' + (state.session === 'muted' ? 'Muted' : 'Allowed');
    }
  }

  /* — session menu —
     Start Session is the first row and the only accented one: in a voice app
     every other entry in this drawer exists to support that one verb. */
  $('#btn-session-menu').addEventListener('click', () => {
    const missing = setupState().missing;
    const live = isLive();
    openSideMenu({
      title: 'VoiceClaw',
      subtitle: (live ? STATES[state.session].label : 'Ready') + ' · ' + val('route'),
      trigger: $('#btn-session-menu'),
      groups: [
        {
          label: 'Session',
          items: [
            {
              label: live ? 'End Session' : 'Start Session',
              meta: live ? 'Release the microphone' : 'Open the realtime channel',
              icon: live ? 'i-stop' : 'i-mic',
              primary: true, danger: live,
              onClick: () => { if (live) endSession(); else startSession(); }
            },
            {
              label: state.transcriptHidden ? 'Turn Transcription On' : 'Turn Transcription Off',
              meta: state.transcriptHidden ? 'Nothing is being written down' : 'Kept on this iPhone only',
              icon: state.transcriptHidden ? 'i-text' : 'i-text-slash',
              onClick: () => setTranscriptHidden(!state.transcriptHidden)
            },
            ...(turnCount ? [{
              label: 'Clear Transcript', meta: turnCount + ' turn' + (turnCount === 1 ? '' : 's') + ' in this session',
              icon: 'i-trash', onClick: clearTranscript
            }] : [])
          ]
        },
        {
          label: 'App',
          items: [
            ...(missing.length ? [{
              label: 'Complete Setup',
              meta: missing.length + ' item' + (missing.length === 1 ? '' : 's') + ' missing',
              icon: 'i-warn',
              onClick: () => { state.settingsSeg = 'account'; setTab('settings'); }
            }] : []),
            { label: 'Settings', icon: 'i-sliders', onClick: () => setTab('settings') },
            { label: 'Diagnostics', icon: 'i-stethoscope', onClick: () => setTab('diagnostics') }
          ]
        }
      ],
      sessions: sessionList(),
      onSession: openSessionById
    });
  });

  /* — session history —
     The live session appears at the top of the same list it will join when
     it ends, so "where did that conversation go" has one answer. */
  function sessionList() {
    const list = [];
    if (isLive()) {
      const first = (state.turnLog || []).find((t) => t.who === 'you');
      list.push({
        id: 'live',
        live: true,
        title: first ? shorten(first.text) : 'Live session',
        meta: 'Live now · ' + turnCount + ' turn' + (turnCount === 1 ? '' : 's')
      });
    }
    (state.sessions || []).forEach((s) => {
      list.push({
        id: s.id,
        title: s.title,
        meta: s.when + ' · ' + s.turns + ' turns · ' + s.dur
      });
    });
    return list;
  }

  function shorten(text) {
    const t = String(text || '').replace(/\s+/g, ' ').trim();
    return t.length > 46 ? t.slice(0, 45).replace(/[\s,.;:]+$/, '') + '…' : t;
  }

  function openSessionById(id) {
    if (id === 'live') {
      setTab('live');
      if (state.transcriptHidden) setTranscriptHidden(false);
      $('#live-scroll').scrollTo({ top: $('#live-scroll').scrollHeight, behavior: reduced.matches ? 'auto' : 'smooth' });
      return;
    }
    const session = (state.sessions || []).find((s) => s.id === id);
    if (session) openSessionReader(session);
  }

  /* A past session opens read-only, full screen. It is history, not a state
     the Live surface can be put back into. */
  function openSessionReader(session) {
    const node = el(`
      <div class="fullscreen" role="dialog" aria-modal="true"
           aria-label="Transcript: ${attr(session.title)}" data-od-id="session-reader">
        <div class="fs__nav">
          <span class="fs__spacer"></span>
          <h2 class="fs__title fs__title--trunc">${V.esc(session.title)}</h2>
          <button class="fs__done" type="button" data-done data-od-id="session-reader-done">Done</button>
        </div>
        <div class="fs__scroll" tabindex="-1" data-scrollable>
          <p class="reader__meta">${V.esc(session.when + ' · ' + session.turns + ' turns · ' + session.dur + ' · ' + session.route)}</p>
          <ol class="transcript__log" data-log></ol>
        </div>
      </div>`);
    const log = $('[data-log]', node);
    (session.log || []).forEach((t) => log.appendChild(turnNode(t, true)));
    node.addEventListener('click', (e) => {
      if (e.target.closest('[data-done]')) closeOverlay();
    });
    const scroll = $('.fs__scroll', node);
    if (!reduced.matches) draggable(node, { threshold: 120, guard: () => scroll.scrollTop <= 0 });
    openOverlay(node);
  }

  function clearTranscript() {
    resetTranscript();
    pushSessionReadouts();
    toast('Transcript cleared from this iPhone.');
  }

  /* — transcription on / off —
     Surfaced twice on purpose: as the Live nav bar's right-hand toggle for
     one-tap reach, and as a labelled row in the drawer for discoverability.
     Both drive this single function, so the two can never disagree. */
  const btnTranscript = $('#btn-transcript-toggle');
  btnTranscript.addEventListener('click', () => setTranscriptHidden(!state.transcriptHidden));

  function setTranscriptHidden(hidden) {
    state.transcriptHidden = hidden;
    $('#transcript-region').hidden = hidden;
    $('#transcript-hidden').hidden = true;
    screen.dataset.transcript = hidden ? '0' : '1';
    btnTranscript.setAttribute('aria-pressed', String(!hidden));
    btnTranscript.firstElementChild.firstElementChild
      .setAttribute('href', hidden ? '#i-text-slash' : '#i-text');
    $('#transcript-toggle-label').textContent =
      hidden ? 'Turn transcription on' : 'Turn transcription off';
    if (!hidden) $('#live-scroll').scrollTop = 0;
    save();
  }

  /* — route chip & banner — */
  $('#btn-route').addEventListener('click', () => openPicker('route'));
  $('#setup-banner').addEventListener('click', () => {
    /* Send the user to the surface that FIXES it, not the one that reports it. */
    state.settingsSeg = 'account';
    setTab('settings');
    const n = setupState().missing.length;
    toast(n === 1
      ? 'One item left: ' + setupState().missing[0] + '.'
      : n + ' items left — they all live on this screen.');
  });
  $('#btn-hero-help').addEventListener('click', () => openGuide(0));

  /* ══════════════════════════ HALO ═════════════════════════════════ */
  let colLink, colDim, colWarn;

  /* getComputedStyle returns unregistered custom properties as raw token text,
     so `color-mix(...)` tokens would never reach canvas. Resolve through a
     probe element instead, which forces the browser to compute a real rgb(). */
  function resolveColor(token, fallback) {
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;opacity:0;pointer-events:none;color:' + fallback;
    probe.style.color = 'var(' + token + ')';
    screen.appendChild(probe);
    const c = getComputedStyle(probe).color;
    probe.remove();
    return c || fallback;
  }

  function readColors() {
    colLink = resolveColor('--link', 'rgb(112,216,216)');
    colDim  = resolveColor('--ink-3', 'rgb(173,173,178)');
    colWarn = resolveColor('--caution', 'rgb(238,204,80)');
  }

  function noise(i, t) {
    return 0.5
      + 0.32 * Math.sin(i * 0.55 + t * 0.0021)
      + 0.24 * Math.sin(i * 1.31 - t * 0.0034)
      + 0.16 * Math.sin(i * 2.17 + t * 0.0013);
  }

  function drawHalo(t) {
    /* the context is scaled to a 620-unit design space by sizeHalo() */
    const W = 620, H = 620, cx = W / 2, cy = H / 2;
    hctx.clearRect(0, 0, W, H);

    const live = isLive();
    const muted = state.session === 'muted';
    const base = 182;
    const stroke = muted ? colWarn : live ? colLink : colDim;

    /* base ring — the room's horizon line */
    hctx.beginPath();
    hctx.arc(cx, cy, base, 0, Math.PI * 2);
    hctx.strokeStyle = colDim;
    hctx.globalAlpha = 0.20;
    hctx.lineWidth = 1;
    hctx.stroke();
    hctx.globalAlpha = 1;

    /* spokes */
    hctx.lineCap = 'round';
    hctx.lineWidth = 4;
    for (let i = 0; i < SPOKES; i++) {
      const a = (i / SPOKES) * Math.PI * 2 - Math.PI / 2;
      const n = Math.max(0, Math.min(1, noise(i, t + phase)));
      const reach = 14 + amp * (40 + 58 * n);
      const r0 = base - reach * 0.34;
      const r1 = base + reach;
      const fade = 0.42 + 0.58 * n * (0.45 + amp);
      hctx.globalAlpha = Math.min(1, fade);
      hctx.strokeStyle = stroke;
      hctx.beginPath();
      hctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      hctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      hctx.stroke();
    }
    hctx.globalAlpha = 1;

    /* one decisive flourish: a travelling arc while OpenClaw owns the turn */
    if (state.session === 'thinking') {
      const sweep = (t * 0.0016) % (Math.PI * 2);
      hctx.beginPath();
      hctx.arc(cx, cy, base + 26, sweep, sweep + 0.9);
      hctx.strokeStyle = colLink;
      hctx.lineWidth = 2.5;
      hctx.stroke();
    }
  }

  let lastReadout = 0;
  function loop(t) {
    /* speech-like envelope so the halo never looks like a metronome */
    let drive = ampTarget;
    if (state.session === 'listening') drive = 0.30 + 0.30 * Math.abs(Math.sin(t * 0.0018) + 0.4 * Math.sin(t * 0.0051));
    if (state.session === 'speaking')  drive = 0.45 + 0.45 * Math.abs(Math.sin(t * 0.0034) * Math.sin(t * 0.0011 + 1));
    if (state.session === 'idle')      drive = 0.09 + 0.03 * Math.sin(t * 0.0009);
    amp += (drive - amp) * 0.12;
    phase += state.session === 'thinking' ? 1.6 : 0;
    drawHalo(t);
    if (t - lastReadout > 400) { lastReadout = t; pushSessionReadouts(); }
    rafId = requestAnimationFrame(loop);
  }

  /* Size the bitmap from the element's real box so the circle stays a
     circle and the 4px spokes stay crisp on a 2x/3x display. */
  function sizeHalo() {
    const box = halo.getBoundingClientRect();
    if (!box.width) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const px = Math.round(box.width * dpr);
    if (halo.width !== px) { halo.width = px; halo.height = px; }
    hctx.setTransform(px / 620, 0, 0, px / 620, 0, 0);
  }
  window.addEventListener('resize', () => { sizeHalo(); drawHalo(0); });

  function startLoop() {
    readColors();
    sizeHalo();
    if (reduced.matches) { amp = ampTarget; drawHalo(0); return; }
    if (rafId == null) rafId = requestAnimationFrame(loop);
  }
  function stopLoop() {
    if (rafId != null) { cancelAnimationFrame(rafId); rafId = null; }
  }
  reduced.addEventListener('change', () => { stopLoop(); startLoop(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopLoop(); else startLoop();
  });

  /* ══════════════════════════ GESTURES ═════════════════════════════
     Sheets and full-screen modals drag down to dismiss. Secondary
     destinations use explicit hierarchy and back navigation rather than
     horizontal swipes that would imply peer-level tabs. */
  function draggable(node, opts) {
    let start = 0, dy = 0, dragging = false;
    const threshold = opts.threshold || 96;
    /* axis 'x' = the left drawer, which dismisses by sliding back toward the
       edge it came from; everything else drags down. */
    const horizontal = opts.axis === 'x';
    node.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, input, textarea, a, [data-scrollable]')) return;
      if (opts.guard && !opts.guard()) return;
      dragging = true; start = horizontal ? e.clientX : e.clientY; dy = 0;
      node.setPointerCapture(e.pointerId);
      /* the entrance keyframe fills forwards with `transform: none`, and an
         animated property outranks inline style — so the drag transform only
         lands once the animation is switched off. */
      node.classList.add('is-dragging');
      node.style.transition = 'none';
    });
    node.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      dy = horizontal
        ? Math.max(0, start - e.clientX)
        : Math.max(0, e.clientY - start);
      node.style.transform = horizontal
        ? 'translateX(' + (-dy) + 'px)'
        : 'translateY(' + dy + 'px)';
      node.style.opacity = String(Math.max(0.4, 1 - dy / 420));
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      node.style.transition = '';
      node.style.transform = '';
      node.style.opacity = '';
      node.classList.remove('is-dragging');
      if (dy > threshold) closeOverlay();
    };
    node.addEventListener('pointerup', end);
    node.addEventListener('pointercancel', end);
  }

  /* ══════════════════════════ BOOT ═════════════════════════════════ */
  applyTheme();
  paintRouteChip();
  setSession('idle');
  if (val('auto-mic')) setTimeout(startSession, 400);
  setTranscriptHidden(!!state.transcriptHidden);
  setTab(state.tab || 'live');
  startLoop();
})();
