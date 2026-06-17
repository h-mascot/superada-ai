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
    "version": "2026.6.8",
    "date": "2026.6.8",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202668",
    "features": [
      {
        "title": "Telegram and WhatsApp channel delivery are richer and less brittle",
        "description": "Telegram can send structured rich text with tables, lists, expandable blockquotes, preserved intentional line breaks, prompt-preserving CLI backend delivery, retired native draft migration, and safer rich-media boundaries, while WhatsApp now honors configured ACP bindings. (#92679, #93164, #84082, #89421, #92513) Thanks @obviyus, @jzakirov, @spacegeologist, and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/92679"
      },
      {
        "title": "Agent and Gateway recovery is sharper across account-scoped DM sends, gener...",
        "description": "Agent and Gateway recovery is sharper across account-scoped DM sends, generated media completions, auto-reply message-tool final replies, reset archive fallback reads, restart shutdown aborts, yielded subagent pauses, trusted subagent thinking override fallback, yielded cron media, heartbeat dedupe, session identity prompts, and unknown OpenAI agent selector rejection. (#92788, #91246, #92879, #91357, #92631, #92412, #92146, #91287, #92468, #92510) Thanks @yetval, @TurboTheTurtle, @masatohoshino, @CadanHu, @ooiuuii, @openperf, @IWhatsskill, @ZengWen-DT, and @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/issues/92788"
      },
      {
        "title": "Provider/model handling expands and tightens with GLM-5",
        "description": "Provider/model handling expands and tightens with GLM-5.2, Claude Haiku 4.5 catalog rows, OpenRouter and Google Vertex provider-prefix normalization, managed SecretRef auth, OAuth image-default routing through Codex, bounded model browse discovery, LM Studio binary thinking-off delivery, storeless OpenAI Responses replay gating, invalid OpenAI reasoning-signature and genericized Anthropic thinking-signature recovery, Claude 4.5 Copilot tool-streaming safety, and OpenAI/Anthropic-family payload quarantine for unreadable or post-hook tool schemas. (#92796, #90116, #92627, #91218, #90686, #92824, #92247, #92002, #90706, #92941, #92201, #92916, #75393, #92908, #92921, #92928) Thanks @arkyu2077, @liuhao1024, @bymle, @rohitjavvadi, @nxmxbbd, @bek91, @samson910022, @mmyzwl, @CarlCapital, @snowzlm, @Kailigithub, and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/92796"
      },
      {
        "title": "`/usage` and reply payload hooks now have a native full footer renderer, de...",
        "description": "`/usage` and reply payload hooks now have a native full footer renderer, default template, fixed-decimal formatting, credential-aware limits, better partial-count handling, and warnings for broken templates instead of silent bad output. (#92657, #89835, #89629) Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/92657"
      },
      {
        "title": "UI and mobile flows are steadier",
        "description": "workspace files can collapse and start collapsed, WebChat backscroll survives streaming, the sidebar session picker remains interactive above the desktop workbench, reset soft args survive UI dispatch, stale dashboard session parent lineage is preserved, and iOS reconnects stale foreground gateways. (#92779, #92622, #92705, #91353, #90658, #92552) Thanks @shakkernerd, @TurboTheTurtle, @NianJiuZst, @zhouhe-xydt, @luoyanglang, and @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/issues/92779"
      },
      {
        "title": "Memory, state, and diagnostics recover cleaner",
        "description": "oversized OpenAI embedding batches split before 431s, QMD memory search stays available in transient mode, SQLite avoids WAL on NFS state volumes, stuck-session recovery scheduling no longer resets warning backoff, full memory reindexes preserve rollback/cache recovery, raw Memory Wiki source pages stop looking malformed, and Infinity chunk limits stay genuinely unbounded. (#92650, #92618, #92639, #91247, #92752, #92881, #59137, #92876, #69700, #92735) Thanks @mushuiyu886, @TurboTheTurtle, @849261680, @gnanam1990, @TSHOGX, @arlen8411, and @yhterrance.",
        "href": "https://github.com/openclaw/openclaw/issues/92650"
      },
      {
        "title": "Providers/models",
        "description": "add GLM-5.2 support and Claude Haiku 4.5 catalog entries while keeping provider-qualified model IDs normalized across OpenRouter and Google Vertex paths. (#92796, #90116, #92627, #91218) Thanks @arkyu2077, @liuhao1024, and @bymle.",
        "href": "https://github.com/openclaw/openclaw/issues/92796"
      },
      {
        "title": "Web search",
        "description": "keep key-free providers such as Parallel Free, DuckDuckGo, Ollama, and Codex Hosted Search as explicit opt-ins instead of selecting them automatically when no API-backed provider is configured. (#93616) Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93616"
      },
      {
        "title": "Channel plugins",
        "description": "ship Telegram rich-message delivery and WhatsApp ACP binding support, including preserved intentional line breaks, rich prompt handoff to CLI backends, and transport fixtures for richer drafts. (#92679, #93164, #92513) Thanks @obviyus and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/92679"
      },
      {
        "title": "Agent commands",
        "description": "support `/btw` in CLI-backed sessions and keep CLI usage-error exits classified as usage failures instead of successful runs. (#92669, #92162) Thanks @joshavant and @Pandah97.",
        "href": "https://github.com/openclaw/openclaw/issues/92669"
      },
      {
        "title": "Usage hooks",
        "description": "add built-in full footer rendering, default footer templates, per-turn usage state, credential-aware limits, and fixed-decimal formatting for usage-bar templates. (#92657, #89835, #89629) Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/issues/92657"
      },
      {
        "title": "Docs and operator guidance",
        "description": "document node config examples, clarify before-install hook scope, correct agent default concurrency comments, refresh ZAI provider docs, and update channel/group docs for current Telegram and WhatsApp behavior. (#92677, #92766, #92695) Thanks @liuhao1024, @sallyom, and @ArielSmoliar.",
        "href": "https://github.com/openclaw/openclaw/issues/92677"
      },
      {
        "title": "fix(cron)",
        "description": "report SQLite storage path in cron.status instead of legacy jobs.json (#92144). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92144"
      },
      {
        "title": "fix(channel)",
        "description": "harden local setup trust (#92175). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92175"
      },
      {
        "title": "fix",
        "description": "handle explicit silent assistant replies (#92073). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/92073"
      },
      {
        "title": "fix(docker)",
        "description": "bundle QA Lab runtime in the image (#92087). Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/92087"
      },
      {
        "title": "fix(anthropic-vertex)",
        "description": "stop re-marking cache_control on transport-budgeted payloads (#92387). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/92387"
      },
      {
        "title": "Fix doctor preview channel SecretRef resolution (#92229)",
        "description": "Fix doctor preview channel SecretRef resolution (#92229). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92229"
      },
      {
        "title": "Fix disabled heartbeat one-shot cron retries (#92225)",
        "description": "Fix disabled heartbeat one-shot cron retries (#92225). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92225"
      },
      {
        "title": "Fix configured DeepSeek model transport inheritance (#92265)",
        "description": "Fix configured DeepSeek model transport inheritance (#92265). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92265"
      },
      {
        "title": "Fail closed for CLI-backed /btw fallback (#92226)",
        "description": "Fail closed for CLI-backed /btw fallback (#92226). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92226"
      },
      {
        "title": "Fix suppressed heartbeat commitment delivery (#92231)",
        "description": "Fix suppressed heartbeat commitment delivery (#92231). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92231"
      },
      {
        "title": "fix(agents)",
        "description": "classify structured unsupported model errors (#92280). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92280"
      },
      {
        "title": "Fix OTLP log trace correlation (#92276)",
        "description": "Fix OTLP log trace correlation (#92276). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92276"
      },
      {
        "title": "fix(update)",
        "description": "hand off Linux service auto-updates (#92282). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92282"
      },
      {
        "title": "fix",
        "description": "resolve managed SecretRef provider auth (#92235). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92235"
      },
      {
        "title": "Fix provider static model fallback resolution (#92293)",
        "description": "Fix provider static model fallback resolution (#92293). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92293"
      },
      {
        "title": "fix(agent)",
        "description": "continue after source message tool replies (#92343). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92343"
      },
      {
        "title": "fix(codex)",
        "description": "preserve memory prompt registration (#92350). Thanks @rubencu.",
        "href": "https://github.com/openclaw/openclaw/pull/92350"
      },
      {
        "title": "fix",
        "description": "clarify gateway SecretRef auth diagnostics (#92290). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92290"
      },
      {
        "title": "fix",
        "description": "repair rejected Anthropic thinking replay (#92286). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92286"
      },
      {
        "title": "Fix Telegram spooled buffered replay (#92281)",
        "description": "Fix Telegram spooled buffered replay (#92281). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92281"
      },
      {
        "title": "fix(outbound)",
        "description": "honor top-level image param as send media source (issue 92407) (#92416). Thanks @xydigit-sj.",
        "href": "https://github.com/openclaw/openclaw/pull/92416"
      },
      {
        "title": "fix(sandbox)",
        "description": "render CLI skill prompts from materialized paths (#92508). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/92508"
      },
      {
        "title": "chore",
        "description": "fix esbuild production audit failure (#92540). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92540"
      },
      {
        "title": "Add QA evidence artifact output (#91484)",
        "description": "Add QA evidence artifact output (#91484). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91484"
      },
      {
        "title": "Add QA scorecard taxonomy validation (#91500)",
        "description": "Add QA scorecard taxonomy validation (#91500). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91500"
      },
      {
        "title": "feat(moonshot)",
        "description": "add Kimi K2.7 Code support (#92554).",
        "href": "https://github.com/openclaw/openclaw/pull/92554"
      },
      {
        "title": "fix(moonshot)",
        "description": "backfill reasoning_content on assistant tool-call replay messages (#92396). Thanks @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/pull/92396"
      },
      {
        "title": "Fix lifecycle timeout cleanup after leader exit (#92566)",
        "description": "Fix lifecycle timeout cleanup after leader exit (#92566). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92566"
      },
      {
        "title": "Expose paged channel action results (#88993)",
        "description": "Expose paged channel action results (#88993). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/88993"
      },
      {
        "title": "fix(fireworks)",
        "description": "resolve catalog model params from plugin.json via core (#90326). Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/pull/90326"
      },
      {
        "title": "fix(doctor)",
        "description": "warn for untrusted external Discord plugin (#86629). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/86629"
      },
      {
        "title": "fix(providers)",
        "description": "skip unreadable Mistral tool schemas (#90242). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90242"
      },
      {
        "title": "fix(reply)",
        "description": "mirror same-channel Slack final replies (#92498). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/92498"
      },
      {
        "title": "fix(channels)",
        "description": "default boundary logger for swallowed progress-draft start errors (#92083). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92083"
      },
      {
        "title": "fix(channels)",
        "description": "make timer-fired progress-draft start errors observable (#92031). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92031"
      },
      {
        "title": "fix(agents)",
        "description": "isolate invalid plugin model catalogs [AI-assisted] (#92564). Thanks @tangtaizong666.",
        "href": "https://github.com/openclaw/openclaw/pull/92564"
      },
      {
        "title": "docs",
        "description": "UX-013 — design system documentation (#89827). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89827"
      },
      {
        "title": "feat(ui)",
        "description": "hide empty workboard columns (#89615). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89615"
      },
      {
        "title": "fix(a11y)",
        "description": "B-1+B-2+B-3 — contrast, focus states, minimum font sizes (#89822). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89822"
      },
      {
        "title": "fix issue 92218",
        "description": "memory_search tool disabled with QMD backend (#92618). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/92618"
      },
      {
        "title": "docs(gateway)",
        "description": "add uptime monitoring guidance to health check docs (fixes issue 55768) (#92608). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92608"
      },
      {
        "title": "fix(docs)",
        "description": "pin Windows Hub download links to v2026.6.5 (#92605). Thanks @lzyyzznl.",
        "href": "https://github.com/openclaw/openclaw/pull/92605"
      },
      {
        "title": "issue 92589",
        "description": "fix(internal-runtime-context): wrap prompt-preface runtime context body in delimiters (#92593). Thanks @zhangqueping.",
        "href": "https://github.com/openclaw/openclaw/pull/92593"
      },
      {
        "title": "Run Vitest and Playwright scenarios from qa suite (#92606)",
        "description": "Run Vitest and Playwright scenarios from qa suite (#92606). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92606"
      },
      {
        "title": "feat(hooks)",
        "description": "per-turn usageState on reply_payload_sending (#89629). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/89629"
      },
      {
        "title": "feat(usage)",
        "description": "native templated /usage full footer renderer (#89835). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/89835"
      },
      {
        "title": "fix(models)",
        "description": "bound /models and models list catalog loading (#92247). Thanks @samson910022.",
        "href": "https://github.com/openclaw/openclaw/pull/92247"
      },
      {
        "title": "fix(gateway)",
        "description": "honor profile auth for SecretRef model entries (#90686). Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/pull/90686"
      },
      {
        "title": "fix",
        "description": "require admin for HTTP session kills (#92651). Thanks @steipete-oai.",
        "href": "https://github.com/openclaw/openclaw/pull/92651"
      },
      {
        "title": "test(models)",
        "description": "stabilize plugin auth marker fixtures (#92652).",
        "href": "https://github.com/openclaw/openclaw/pull/92652"
      },
      {
        "title": "fix(slack)",
        "description": "warn when channels map is keyed by name instead of channel ID (#89438). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/89438"
      },
      {
        "title": "fix(agents)",
        "description": "pause yielded subagent runs whose terminal also signals abort (#92631). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/92631"
      },
      {
        "title": "fix(ui)",
        "description": "preserve WebChat backscroll during streaming (#92622). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/92622"
      },
      {
        "title": "fix(openrouter)",
        "description": "strip openrouter/ prefix from model ID in normalizeResolvedModel hook (fixes issue 92611) (#92627). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92627"
      },
      {
        "title": "fix(cron)",
        "description": "preserve yielded media completions (#92146). Thanks @IWhatsskill.",
        "href": "https://github.com/openclaw/openclaw/pull/92146"
      },
      {
        "title": "fix",
        "description": "add Claude Haiku 4.5 static catalog entries (#90116). Thanks @arkyu2077.",
        "href": "https://github.com/openclaw/openclaw/pull/90116"
      },
      {
        "title": "fix(channels)",
        "description": "keep contributed message-tool schema properties optional (#91137). Thanks @lundog.",
        "href": "https://github.com/openclaw/openclaw/pull/91137"
      },
      {
        "title": "fix(copilot)",
        "description": "disable eager tool streaming for Claude 4.5 (#75393). Thanks @Kailigithub.",
        "href": "https://github.com/openclaw/openclaw/pull/75393"
      },
      {
        "title": "fix issue 73713",
        "description": "surface nested embedding fetch failures (#92628). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/92628"
      },
      {
        "title": "fix(slack)",
        "description": "emit message_sent hook on outbound delivery (mirror Telegram) (#89943). Thanks @rishitamrakar.",
        "href": "https://github.com/openclaw/openclaw/pull/89943"
      },
      {
        "title": "fix(docs)",
        "description": "finalize i18n postprocess before skip (#92668). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92668"
      },
      {
        "title": "fix",
        "description": "split image setup and request timeout semantics (#92673). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92673"
      },
      {
        "title": "fix(memory)",
        "description": "keep memory_search in transient qmd mode (#92639). Thanks @TurboTheTurtle and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/92639"
      },
      {
        "title": "fix(ui)",
        "description": "restore sidebar session picker interactivity above desktop workbench (#92705). Thanks @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/pull/92705"
      },
      {
        "title": "feat",
        "description": "support /btw in CLI-backed sessions (#92669). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92669"
      },
      {
        "title": "fix(gateway)",
        "description": "mark active main sessions before restart shutdown aborts (#91357). Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/pull/91357"
      },
      {
        "title": "fix(ios)",
        "description": "force stale foreground gateway reconnects (#92552). Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/pull/92552"
      },
      {
        "title": "fix(diagnostics)",
        "description": "keep recovery scheduling out of the stuck-session warning backoff (#92752). Thanks @gnanam1990 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/92752"
      },
      {
        "title": "clarify before_install hook scope (#92766)",
        "description": "clarify before_install hook scope (#92766). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/92766"
      },
      {
        "title": "Honor WhatsApp configured ACP bindings (#92513)",
        "description": "Honor WhatsApp configured ACP bindings (#92513). Thanks @TurboTheTurtle and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/92513"
      },
      {
        "title": "feat(providers)",
        "description": "add GLM-5.2 support (#92796).",
        "href": "https://github.com/openclaw/openclaw/pull/92796"
      },
      {
        "title": "fix(heartbeat)",
        "description": "route outbound mirror to isolated session key (#92807). Thanks @agent-merkava.",
        "href": "https://github.com/openclaw/openclaw/pull/92807"
      },
      {
        "title": "fix(memory)",
        "description": "explain skipped short-term recall hits (#92745). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/92745"
      },
      {
        "title": "fix(gateway)",
        "description": "forward image-only input on /v1/responses (parity with chat completions) (#92488). Thanks @s554097550.",
        "href": "https://github.com/openclaw/openclaw/pull/92488"
      },
      {
        "title": "fix(status)",
        "description": "avoid cumulative usage for context percent (#92604). Thanks @ashishpatel26.",
        "href": "https://github.com/openclaw/openclaw/pull/92604"
      },
      {
        "title": "fix(nodes)",
        "description": "surface pending reapproval diagnostics (#92547). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/92547"
      },
      {
        "title": "fix(doctor)",
        "description": "avoid false-positive legacy cron store warning when store was already migrated (fixes issue 92683) (#92690). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92690"
      },
      {
        "title": "fix(telegram)",
        "description": "skip IPv4 fallback when user explicitly configures non-ipv4first dnsResultOrder (fixes issue 41671) (#92806). Thanks @liuhao1024 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92806"
      },
      {
        "title": "fix(macos)",
        "description": "defer isOverflowing mutation to break SwiftUI render loop (fixes issue 43480) (#92778). Thanks @liuhao1024 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92778"
      },
      {
        "title": "fix(gateway)",
        "description": "use resolveNonNegativeNumber for totalTokens to display 0 instead of ? (fixes issue 43009) (#92795). Thanks @liuhao1024 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92795"
      },
      {
        "title": "fix(gateway)",
        "description": "preserve active runs during plugin finalization (#92746). Thanks @scotthuang and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92746"
      },
      {
        "title": "UI: localize Logs tab labels (#92820)",
        "description": "UI: localize Logs tab labels (#92820). Thanks @rubensfox20.",
        "href": "https://github.com/openclaw/openclaw/pull/92820"
      },
      {
        "title": "UI: localize logs hardcoded labels (#61080)",
        "description": "UI: localize logs hardcoded labels (#61080). Thanks @rubensfox20.",
        "href": "https://github.com/openclaw/openclaw/pull/61080"
      },
      {
        "title": "fix(telegram)",
        "description": "preserve command callbacks while prefixing generic callback data (#92825). Thanks @hnshah.",
        "href": "https://github.com/openclaw/openclaw/pull/92825"
      },
      {
        "title": "fix(telegram)",
        "description": "add 'callback_data:' prefix to inline button callbacks (#54962). Thanks @hnshah.",
        "href": "https://github.com/openclaw/openclaw/pull/54962"
      },
      {
        "title": "fix(copilot)",
        "description": "drop thinking blocks from replay (#87060). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/87060"
      },
      {
        "title": "fix(github-copilot)",
        "description": "strip thinking blocks from latest assistant turn (issue 81520) (#81534). Thanks @SymbolStar.",
        "href": "https://github.com/openclaw/openclaw/pull/81534"
      },
      {
        "title": "feat(browser)",
        "description": "extend --labels overlay to full-page and element captures (#92834). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92834"
      },
      {
        "title": "fix issue 92039",
        "description": "[Bug]: WhatsApp login reports success before auth is durably persisted, so Docker rebuilds/upgrades can force relink (#92095). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/92095"
      },
      {
        "title": "fix(stale)",
        "description": "exempt ClawSweeper actionable labels from stale lifecycle (fixes issue 89564) (#92801). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92801"
      },
      {
        "title": "fix(status)",
        "description": "render sub-1000 token counts as plain integers (#89736). Thanks @jbetala7 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89736"
      },
      {
        "title": "fix(agents)",
        "description": "catch malformed image blocks in sanitizeContentBlocksImages (#92792). Thanks @LowCode191 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92792"
      },
      {
        "title": "ci: gate stable releases on Windows companion assets (#92555)",
        "description": "ci: gate stable releases on Windows companion assets (#92555). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/92555"
      },
      {
        "title": "fix(agents)",
        "description": "add usage guidance to sessions_spawn tool description (fixes issue 91814) (#91824). Thanks @zenglingbiao.",
        "href": "https://github.com/openclaw/openclaw/pull/91824"
      },
      {
        "title": "fix(qqbot)",
        "description": "surface failed media sends (#92823). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/92823"
      },
      {
        "title": "Fix diagnostics OTEL runtime install trust (#92045)",
        "description": "Fix diagnostics OTEL runtime install trust (#92045). Thanks @efpiva.",
        "href": "https://github.com/openclaw/openclaw/pull/92045"
      },
      {
        "title": "fix(update)",
        "description": "continue after package doctor warnings (#91586). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/91586"
      },
      {
        "title": "fix(feishu)",
        "description": "target typing reaction on inbound (#67783). Thanks @huiwen01.",
        "href": "https://github.com/openclaw/openclaw/pull/67783"
      },
      {
        "title": "fix(feishu)",
        "description": "preserve root_id thread routing without thread_id forcing (#73958). Thanks @huiwen01.",
        "href": "https://github.com/openclaw/openclaw/pull/73958"
      },
      {
        "title": "fix(lobster)",
        "description": "surface workflow path errors (#68106). Thanks @vvitovec.",
        "href": "https://github.com/openclaw/openclaw/pull/68106"
      },
      {
        "title": "fix(openai)",
        "description": "preserve opaque reasoning transcript fields (#90682). Thanks @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/pull/90682"
      },
      {
        "title": "fix(anthropic)",
        "description": "strip thinking blocks from history when thinking is disabled (fixes issue 92360) (#92373). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92373"
      },
      {
        "title": "fix(anthropic)",
        "description": "merge consecutive assistant turns in turn validation (#87346). Thanks @Jefsky.",
        "href": "https://github.com/openclaw/openclaw/pull/87346"
      },
      {
        "title": "fix(anthropic)",
        "description": "quarantine invalid direct tool schemas (#92896).",
        "href": "https://github.com/openclaw/openclaw/pull/92896"
      },
      {
        "title": "fix(anthropic)",
        "description": "quarantine invalid projected tools (#89418). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89418"
      },
      {
        "title": "fix(agents)",
        "description": "guard Anthropic tool descriptors (#89221). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89221"
      },
      {
        "title": "fix(agents)",
        "description": "guard Anthropic tool schema conversion (#90228). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90228"
      },
      {
        "title": "fix(agents)",
        "description": "skip unreadable Anthropic tool schemas (#89622). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89622"
      },
      {
        "title": "fix(llm)",
        "description": "guard Anthropic provider tool descriptors (#89229). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89229"
      },
      {
        "title": "fix(providers)",
        "description": "skip unreadable Anthropic tool schemas (#90278). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90278"
      },
      {
        "title": "fix(active-memory)",
        "description": "preserve verbose recall summaries (#90739). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/90739"
      },
      {
        "title": "Simplify QA scorecard mapping shape (#92558)",
        "description": "Simplify QA scorecard mapping shape (#92558). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92558"
      },
      {
        "title": "fix(memory-wiki)",
        "description": "stop flagging raw source pages as malformed (#92876). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92876"
      },
      {
        "title": "fix(providers)",
        "description": "quarantine unreadable Anthropic payload tools (#92908).",
        "href": "https://github.com/openclaw/openclaw/pull/92908"
      },
      {
        "title": "fix(memory)",
        "description": "preserve reindex rollback recovery (#92881). Thanks @TSHOGX and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92881"
      },
      {
        "title": "fix(openai)",
        "description": "quarantine unreadable tool schemas (#92921).",
        "href": "https://github.com/openclaw/openclaw/pull/92921"
      },
      {
        "title": "fix(openai)",
        "description": "quarantine unreadable projected tools (#89413). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89413"
      },
      {
        "title": "fix(agents)",
        "description": "materialize OpenAI tool schemas (#89013). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89013"
      },
      {
        "title": "fix(agents)",
        "description": "guard OpenAI transport tool descriptors (#89016). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89016"
      },
      {
        "title": "fix(agents)",
        "description": "guard OpenAI tool schema conversion (#89378). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89378"
      },
      {
        "title": "fix(agents)",
        "description": "harden OpenAI strict schema inspection (#89543). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89543"
      },
      {
        "title": "fix(agents)",
        "description": "guard OpenAI strict tool diagnostics (#90200). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90200"
      },
      {
        "title": "fix(providers)",
        "description": "skip unreadable OpenAI completion tool schemas (#90283). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90283"
      },
      {
        "title": "fix(providers)",
        "description": "skip unreadable OpenAI responses tool schemas (#90286). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90286"
      },
      {
        "title": "fix(openai)",
        "description": "skip unreadable responses tool schemas (#90397). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90397"
      },
      {
        "title": "Fold Telegram RTT sampling into live QA evidence (#92550)",
        "description": "Fold Telegram RTT sampling into live QA evidence (#92550). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92550"
      },
      {
        "title": "fix(media)",
        "description": "route OAuth image defaults through Codex (#92824). Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/pull/92824"
      },
      {
        "title": "fix(cli)",
        "description": "avoid false downgrade prompt for latest tag (#92911). Thanks @Andy312432 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92911"
      },
      {
        "title": "fix(openai)",
        "description": "guard post-hook tool payloads (#92928).",
        "href": "https://github.com/openclaw/openclaw/pull/92928"
      },
      {
        "title": "fix(openai)",
        "description": "guard responses tool payload names (#89703). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89703"
      },
      {
        "title": "fix(sessions)",
        "description": "fall back to reset archive for missing async transcripts (#92879). Thanks @masatohoshino and @CadanHu and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92879"
      },
      {
        "title": "fix(feishu)",
        "description": "re-resolve route when dynamic agent binding already exists in runtime config (fixes issue 42837) (#92814). Thanks @liuhao1024 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92814"
      },
      {
        "title": "fix(openai)",
        "description": "omit gpt-5.5 tool reasoning effort (#90574). Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/pull/90574"
      },
      {
        "title": "fix(openai)",
        "description": "recover invalid reasoning signatures (#92941).",
        "href": "https://github.com/openclaw/openclaw/pull/92941"
      },
      {
        "title": "fix(lmstudio)",
        "description": "deliver thinking \"off\" to binary-thinking models (#92002). Thanks @nxmxbbd.",
        "href": "https://github.com/openclaw/openclaw/pull/92002"
      },
      {
        "title": "issue 92201",
        "description": "Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic); recovery wrapper never fires because error text is genericized (#92916). Thanks @mmyzwl.",
        "href": "https://github.com/openclaw/openclaw/pull/92916"
      },
      {
        "title": "fix(agents)",
        "description": "do not misclassify client-disconnect abort as run timeout (#90936). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/90936"
      },
      {
        "title": "fix(agents)",
        "description": "make wrapToolWithBeforeToolCallHook idempotent to prevent double hook execution (fixes issue 92973) (#93009). Thanks @zenglingbiao.",
        "href": "https://github.com/openclaw/openclaw/pull/93009"
      },
      {
        "title": "fix(cron)",
        "description": "require explicit message target proof (#92318). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92318"
      },
      {
        "title": "fix(gateway)",
        "description": "repair usage cost aggregation across agents (#93022). Thanks @luke-skywalker-open-claw and @stablegenius49.",
        "href": "https://github.com/openclaw/openclaw/pull/93022"
      },
      {
        "title": "fix(tui)",
        "description": "keep parent stdin paused after exit (#93159). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/93159"
      },
      {
        "title": "Keep key-free web search providers opt-in (#93616)",
        "description": "Keep key-free web search providers opt-in (#93616). Thanks @davemorin and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93616"
      },
      {
        "title": "feat(telegram)",
        "description": "send rich message text (#92679). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/92679"
      },
      {
        "title": "fix(telegram)",
        "description": "preserve rich markdown line breaks (#93164). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/93164"
      },
      {
        "title": "fix(telegram)",
        "description": "allow expandable blockquotes (#84082). Thanks @jzakirov.",
        "href": "https://github.com/openclaw/openclaw/pull/84082"
      },
      {
        "title": "fix(telegram)",
        "description": "expose thread create CLI remap (#89421). Thanks @spacegeologist.",
        "href": "https://github.com/openclaw/openclaw/pull/89421"
      },
      {
        "title": "fix(sessions)",
        "description": "derive channel from account-scoped DM session keys in send-policy (#92788). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/92788"
      },
      {
        "title": "Fix webchat media completion handoff (#91246)",
        "description": "Fix webchat media completion handoff (#91246). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/91246"
      },
      {
        "title": "fix(cron)",
        "description": "de-duplicate main-session systemEvent in heartbeat model input (#91287). Thanks @ZengWen-DT.",
        "href": "https://github.com/openclaw/openclaw/pull/91287"
      },
      {
        "title": "fix issue 92453",
        "description": "add session identity to runtime prompt (#92468). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/92468"
      },
      {
        "title": "fix(gateway)",
        "description": "reject unknown OpenAI agent selectors (#92510). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/92510"
      },
      {
        "title": "fix(google)",
        "description": "strip provider prefix from Vertex model path (#91218). Thanks @bymle.",
        "href": "https://github.com/openclaw/openclaw/pull/91218"
      },
      {
        "title": "fix(OpenAI Responses)",
        "description": "disable item id replay for storeless providers (#90706). Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/pull/90706"
      },
      {
        "title": "feat(usage)",
        "description": "ship built-in /usage full footer (#92657). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/92657"
      },
      {
        "title": "fix",
        "description": "start workspace files collapsed (#92779). Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/92779"
      },
      {
        "title": "fix(ui)",
        "description": "preserve /reset soft args in Control UI dispatch (#91353). Thanks @zhouhe-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/91353"
      },
      {
        "title": "fix(ui)",
        "description": "preserve dashboard session parent lineage when session list is stale (#90658). Thanks @luoyanglang.",
        "href": "https://github.com/openclaw/openclaw/pull/90658"
      },
      {
        "title": "fix issue 92465",
        "description": "split OpenAI 431 embedding batches (#92650). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/92650"
      },
      {
        "title": "fix(state)",
        "description": "avoid sqlite wal on nfs state volumes (#91247). Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/pull/91247"
      },
      {
        "title": "fix(memory)",
        "description": "preserve retry state and embedding cache across reindex rollback (#59137). Thanks @TSHOGX.",
        "href": "https://github.com/openclaw/openclaw/pull/59137"
      },
      {
        "title": "fix(markdown-core)",
        "description": "treat Infinity chunk limit as unbounded, not 1 (#92735). Thanks @yhterrance.",
        "href": "https://github.com/openclaw/openclaw/pull/92735"
      },
      {
        "title": "issue 92069",
        "description": "fix(cli): usage errors exit 0 (#92162). Thanks @Pandah97.",
        "href": "https://github.com/openclaw/openclaw/pull/92162"
      },
      {
        "title": "docs(nodes)",
        "description": "add openclaw.json config example to Nodes overview (#92677). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92677"
      },
      {
        "title": "docs(config)",
        "description": "correct maxConcurrent default in agent-defaults type comments (AI-assisted) (#92695). Thanks @ArielSmoliar.",
        "href": "https://github.com/openclaw/openclaw/pull/92695"
      },
      {
        "title": "fix(discord)",
        "description": "raise thread title timeout and tokens to fit reasoning models (#64734). Thanks @hanamizuki.",
        "href": "https://github.com/openclaw/openclaw/pull/64734"
      },
      {
        "title": "fix",
        "description": "require admin for HTTP model overrides (#92646). Thanks @steipete-oai.",
        "href": "https://github.com/openclaw/openclaw/pull/92646"
      },
      {
        "title": "fix(tui)",
        "description": "show resolved canonical model ref in /model confirmation (#92773). Thanks @NarahariRaghava.",
        "href": "https://github.com/openclaw/openclaw/pull/92773"
      },
      {
        "title": "Reported",
        "description": "[Bug]: openclaw cron status reports legacy storePath (#91766). Thanks @AaronFaby.",
        "href": "https://github.com/openclaw/openclaw/pull/91766"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Node.js auto-installer fails silently with ioctl errors then falsely reports success before crashing (#73837). Thanks @ItsMeForLua.",
        "href": "https://github.com/openclaw/openclaw/pull/73837"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Missing SQLite perf and query-plan harness (#91616). Thanks @galiniliev.",
        "href": "https://github.com/openclaw/openclaw/pull/91616"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Error: Gateway service install not supported on openbsd (#25621). Thanks @kucharskim.",
        "href": "https://github.com/openclaw/openclaw/pull/25621"
      },
      {
        "title": "Reported",
        "description": "[Bug]: cron edit --cron silently strips schedule.tz and staggerMs (direct path replaces schedule without merging) (#92291). Thanks @dcapclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/92291"
      },
      {
        "title": "Reported",
        "description": "message tool: `image` param silently dropped on send — delivers text without attachment but returns ok:true (#92407). Thanks @ichirokyoto.",
        "href": "https://github.com/openclaw/openclaw/pull/92407"
      },
      {
        "title": "Reported",
        "description": "Kimi K2.6 reasoning_content 400 regression in long conversations after LCM compaction (follow-up issue 70392) (#71491). Thanks @RoseKongPS.",
        "href": "https://github.com/openclaw/openclaw/pull/71491"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Moonshot/Kimi duplicate tool-call IDs in replay, exposed by WhatsApp group chats (#51593). Thanks @Faaab84 and @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/51593"
      },
      {
        "title": "Reported",
        "description": "Discord channel stays disabled with no warning unless `plugins.entries.discord.enabled` is set (#83212). Thanks @cdeyoung67.",
        "href": "https://github.com/openclaw/openclaw/pull/83212"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Slack channel/thread sessions never persist assistant replies to the session transcript → total context loss when the CLI session binding is invalidated (#92489). Thanks @TalkingHeadsJed and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/92489"
      },
      {
        "title": "Reported",
        "description": "ModelRegistry: a single invalid plugin catalog aborts the entire custom-models load, leaving zero models and an unlogged error (#92553). Thanks @fxstein.",
        "href": "https://github.com/openclaw/openclaw/pull/92553"
      },
      {
        "title": "Reported",
        "description": "Health check bloat: uptime monitors must use /health, not /v1/chat/completions (#55768). Thanks @faahim.",
        "href": "https://github.com/openclaw/openclaw/pull/55768"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Windows Hub download link is not working (#92470). Thanks @arjkul.",
        "href": "https://github.com/openclaw/openclaw/pull/92470"
      },
      {
        "title": "Reported",
        "description": "Feishu channel leaks system runtime context (relevant-memories, sender metadata) into user-visible reply (#92589). Thanks @jovi2014-cyber.",
        "href": "https://github.com/openclaw/openclaw/pull/92589"
      },
      {
        "title": "Reported",
        "description": "[Performance] /models command slow in v2026.6.1 — catalog loading regression (#91809). Thanks @syfvb.",
        "href": "https://github.com/openclaw/openclaw/pull/91809"
      },
      {
        "title": "Reported",
        "description": "models.list marks auth-profile-backed SecretRef providers unavailable (#90685). Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/pull/90685"
      },
      {
        "title": "Reported",
        "description": "Name-keyed entries in channels.slack.channels silently dropped under groupPolicy: \"allowlist\" (#81665). Thanks @cjalden.",
        "href": "https://github.com/openclaw/openclaw/pull/81665"
      },
      {
        "title": "Reported",
        "description": "[Bug]: sessions_yield in a depth-1 subagent settles its background task as \"cancelled\" (operator-reserved status) and delivers a false \"Background task cancelled\" notice to the requester session (#92448). Thanks @aleps001.",
        "href": "https://github.com/openclaw/openclaw/pull/92448"
      },
      {
        "title": "Reported",
        "description": "[Bug]: OpenRouter: Anthropic models send wrong model ID to API (includes openrouter/ prefix) (#92611). Thanks @lijenhsin.",
        "href": "https://github.com/openclaw/openclaw/pull/92611"
      },
      {
        "title": "Reported",
        "description": "anthropic (api_key) provider: Claude Haiku 4.5 missing from static model catalog → \"Unknown model\" (model_not_found) (#90088). Thanks @maaron34.",
        "href": "https://github.com/openclaw/openclaw/pull/90088"
      },
      {
        "title": "Reported",
        "description": "github-copilot: tools[].eager_input_streaming still rejected on v2026.4.29 (re: issue 72183) (#75348). Thanks @finchinslc and @Kailigithub.",
        "href": "https://github.com/openclaw/openclaw/pull/75348"
      },
      {
        "title": "Reported",
        "description": "openclaw infer embedding create fails with TypeError: fetch failed on Node 24 despite valid Voyage credential; underlying cause is swallowed (#73713). Thanks @crsnpalmer-art.",
        "href": "https://github.com/openclaw/openclaw/pull/73713"
      },
      {
        "title": "Reported",
        "description": "Gateway runs well-formed-but-unknown agent slug under agents.defaults instead of 4xx (no roster validation in resolveAgentIdForRequest; x-openclaw-agent-id header never roster-validated) (#92504). Thanks @ryanhelms.",
        "href": "https://github.com/openclaw/openclaw/pull/92504"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Delivery retry loop corrupts active sessions (R-004) — retry selector bypasses delivery.mode=none (#91420). Thanks @CarotaWealth.",
        "href": "https://github.com/openclaw/openclaw/pull/91420"
      },
      {
        "title": "Reported",
        "description": "Agent runtime header lacks session identity, causing misleading self-references (#92453). Thanks @QQSHI13.",
        "href": "https://github.com/openclaw/openclaw/pull/92453"
      },
      {
        "title": "Reported",
        "description": "fix(slack): emit message_sent hook on outbound delivery (mirror Telegram) (#89942). Thanks @rishitamrakar.",
        "href": "https://github.com/openclaw/openclaw/pull/89942"
      },
      {
        "title": "Reported",
        "description": "bug(cli): usage errors exit 0 (#92069). Thanks @marcospaulo.",
        "href": "https://github.com/openclaw/openclaw/pull/92069"
      },
      {
        "title": "Reported",
        "description": "void requireRef silences dead-import lint via side-effect expression (#83878). Thanks @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/pull/83878"
      },
      {
        "title": "Reported",
        "description": "formatDiskSpaceBytes emits \"1024 MiB\" instead of \"1.0 GiB\" at the GiB boundary (#90245). Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/pull/90245"
      },
      {
        "title": "Reported",
        "description": "`setFeishuClientRuntimeForTest` resets the SDK without clearing the client cache (#83911). Thanks @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/pull/83911"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Cron job with sessionTarget: \"main\" triggers both systemEvent and reminder despite delivery.mode: \"none\" (#44922). Thanks @GSL-R.",
        "href": "https://github.com/openclaw/openclaw/pull/44922"
      },
      {
        "title": "Reported",
        "description": "music_generate background task completion delivery consistently fails (completion wake + fallback both fail) (#91003). Thanks @kumaxs.",
        "href": "https://github.com/openclaw/openclaw/pull/91003"
      },
      {
        "title": "Reported",
        "description": "[Bug]: In the Control UI, `/reset soft` is truncated to `/reset` when executed, and the args are lost (#91316). Thanks @MaBeitian.",
        "href": "https://github.com/openclaw/openclaw/pull/91316"
      },
      {
        "title": "Reported",
        "description": "Bug: dashboard child sessions record assistant replies but do not display them (#90623). Thanks @lily-oc.",
        "href": "https://github.com/openclaw/openclaw/pull/90623"
      },
      {
        "title": "Reported",
        "description": "openclaw message thread create for Telegram: thread-create → topic-create remap not happening; gateway rejects with Unsupported Telegram action (#81581). Thanks @myrzka.",
        "href": "https://github.com/openclaw/openclaw/pull/81581"
      },
      {
        "title": "Reported",
        "description": "[Bug]: GatewayRequestError: Error: file is not a database: code=ERR_SQLITE_ERROR (#90491). Thanks @AFabyTWE.",
        "href": "https://github.com/openclaw/openclaw/pull/90491"
      },
      {
        "title": "Reported",
        "description": "Signal image captions truncated to first character (Infinity chunk limit normalizes to 1) (#92734). Thanks @yhterrance.",
        "href": "https://github.com/openclaw/openclaw/pull/92734"
      },
      {
        "title": "Reported",
        "description": "Docs feedback: /nodes (#92662). Thanks @Casper-Mars.",
        "href": "https://github.com/openclaw/openclaw/pull/92662"
      },
      {
        "title": "Reported",
        "description": "Bulk memory import can hit OpenAI 431; chunked indexing avoids it (#92465). Thanks @BrettHamlin.",
        "href": "https://github.com/openclaw/openclaw/pull/92465"
      },
      {
        "title": "Reported",
        "description": "Docker image ships an extraneous stale openclaw in /app/node_modules (extensions pin the published release) (#92551). Thanks @fxstein.",
        "href": "https://github.com/openclaw/openclaw/pull/92551"
      },
      {
        "title": "Reported",
        "description": "Telegram callback queries time out when agent turn is queued behind sequentialize (#42156). Thanks @Diaspar4u.",
        "href": "https://github.com/openclaw/openclaw/pull/42156"
      },
      {
        "title": "Reported",
        "description": "doctor + cron status still report the retired cron/jobs.json store after the SQLite migration (2026.6.5) (#92683). Thanks @motteman.",
        "href": "https://github.com/openclaw/openclaw/pull/92683"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram media download fails on IPv4-broken / IPv6-working hosts because runtime IPv4 fallback overrides config (#41671). Thanks @leandroirani933-ctrl and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/41671"
      },
      {
        "title": "Reported",
        "description": "macOS app pinwheels due to SwiftUI infinite render loop in VoiceWakeOverlay (#43480). Thanks @gdiab and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/43480"
      },
      {
        "title": "Reported",
        "description": "TUI displays Context Tokens as ?/200k instead of actual value (#43009). Thanks @ltxy12138-ai and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/43009"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram inline button callback_query not routed to agent — hallucination instead of tool call (#54909). Thanks @timt80 and @hnshah.",
        "href": "https://github.com/openclaw/openclaw/pull/54909"
      },
      {
        "title": "Reported",
        "description": "Status/session context window can over-report the selected model's actual window (#39857). Thanks @xdanger.",
        "href": "https://github.com/openclaw/openclaw/pull/39857"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Reasoning model thinking blocks (<thinking> tags) in conversation history cause HTTP 400 on GitHub Copilot provider (#81520). Thanks @warcold.",
        "href": "https://github.com/openclaw/openclaw/pull/81520"
      },
      {
        "title": "Reported",
        "description": "fix(memory): EPERM on Windows persists after 64187 retry — needs copyFile/unlink fallback (was in closed PR 71611) (#78640). Thanks @MilleniumGenAI.",
        "href": "https://github.com/openclaw/openclaw/pull/78640"
      },
      {
        "title": "Reported",
        "description": "[Bug]: WhatsApp block streaming can suppress complete final replies after partial stream delivery (#81078). Thanks @Jackten.",
        "href": "https://github.com/openclaw/openclaw/pull/81078"
      },
      {
        "title": "Reported",
        "description": "Bug: Twilio voice-call can get stuck in hold music after failed/no-stream call (#81122). Thanks @donkeykong91.",
        "href": "https://github.com/openclaw/openclaw/pull/81122"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Stale workflow does not exempt ClawSweeper queueable issues (#89564). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/89564"
      },
      {
        "title": "Reported",
        "description": "[Bug]: `openclaw status` renders sub-1000 token counts as misleading fractional k (999 → \"1.0k\") (#89735). Thanks @jbetala7 and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89735"
      },
      {
        "title": "Reported",
        "description": "[Feature]: sessions_spawn tool description lacks usage guidance, causing agents to not use sub-agents when appropriate (#91814). Thanks @cattails-lgao.",
        "href": "https://github.com/openclaw/openclaw/pull/91814"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Lobster tool falls back to pipeline parsing for relative workflow file paths (#68101). Thanks @MPC7500 and @vvitovec.",
        "href": "https://github.com/openclaw/openclaw/pull/68101"
      },
      {
        "title": "Reported",
        "description": "openai-chatgpt-responses native replay sends encrypted reasoning and breaks next turn with invalid_encrypted_content (#90093). Thanks @richardmqq.",
        "href": "https://github.com/openclaw/openclaw/pull/90093"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Persistent sessions corrupted by stale thinking blocks — provider rejects all subsequent turns (#92360). Thanks @notnaji.",
        "href": "https://github.com/openclaw/openclaw/pull/92360"
      },
      {
        "title": "Reported",
        "description": "Bug: Subagent announce-delivery echo messages inherit wrong provider/model metadata, causing persistent \"thinking blocks cannot be modified\" errors after gateway restart (#87329). Thanks @travellingsoldier85.",
        "href": "https://github.com/openclaw/openclaw/pull/87329"
      },
      {
        "title": "Reported",
        "description": "Codex-authenticated installs can auto-select direct OpenAI for image media understanding without OPENAI_API_KEY (#87168). Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/pull/87168"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Feishu dynamicAgentCreation feature not working (#42837). Thanks @cwlong163-afk and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/42837"
      },
      {
        "title": "Reported",
        "description": "BUG: sessions_spawn silently half-fails when thinking level is unsupported — fan-out spawns produce non-deterministic survivors, no signal to orchestrator (fix: symmetrize CLI-launch fallback with embedded path) (#92412). Thanks @oiGaDio.",
        "href": "https://github.com/openclaw/openclaw/pull/92412"
      },
      {
        "title": "Reported",
        "description": "Config hot-reload permanently disabled when inotify watches exhausted (no polling fallback) (#92851). Thanks @danbao.",
        "href": "https://github.com/openclaw/openclaw/pull/92851"
      },
      {
        "title": "Reported",
        "description": "Gateway becomes slow or times out under multi-session / multi-agent load (#92057). Thanks @xiaopings.",
        "href": "https://github.com/openclaw/openclaw/pull/92057"
      },
      {
        "title": "Reported",
        "description": "fix(memory-wiki): guard against missing agentIds (#92207). Thanks @qq230849622-a11y.",
        "href": "https://github.com/openclaw/openclaw/pull/92207"
      },
      {
        "title": "Reported",
        "description": "Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic); recovery wrapper never fires because error text is genericized (#92201). Thanks @CarlCapital.",
        "href": "https://github.com/openclaw/openclaw/pull/92201"
      },
      {
        "title": "Reported",
        "description": "before_tool_call hook fires twice: tools double-wrapped after normalizeToolParameters strips the wrap marker (#92973). Thanks @dertbv.",
        "href": "https://github.com/openclaw/openclaw/pull/92973"
      },
      {
        "title": "Reported",
        "description": "memory-wiki lint: sources/ directory requires frontmatter on raw imported files (#69700). Thanks @arlen8411.",
        "href": "https://github.com/openclaw/openclaw/pull/69700"
      }
    ],
    "fixes": [
      "Channels and delivery: preserve account-scoped DM channel send policy, intentional rich-message line breaks in Telegram and status output, rich Telegram final replies, rich Telegram tables and lists, Telegram thread-create CLI remapping, Feishu dynamic-agent routes after persisted binding reuse, Slack outbound `message_sent` hooks, contributed message-tool schema optionality, same-channel generated media completions, and channel chunking around surrogate pairs and Infinity limits. (#92788, #93164, #92679, #89421, #89943, #42837, #92814, #91137, #91246, #92735) Thanks @yetval, @obviyus, @spacegeologist, @rishitamrakar, @liuhao1024, @lundog, @TurboTheTurtle, and @yhterrance.",
      "Gemini CLI: use the selected OpenClaw OAuth/API-key auth profile in an isolated Gemini CLI runtime home, preventing ambient Google machine credentials from overriding the chosen profile. (#88748) Thanks @jason-allen-oneal and @shakkernerd.",
      "Discord: give generated auto-thread titles a 60-second timeout and 4,096-token reasoning-model output budget, clamped to the selected model output cap. (#64734) Thanks @hanamizuki.",
      "Agent, cron, and Gateway runtime: mark active main sessions before restart shutdown aborts, pause yielded subagent runs whose terminal also signals abort, clamp trusted subagent thinking overrides through provider/model fallback, preserve yielded media completions, deliver channel message-tool final replies through auto-reply while hiding internal delivery hints, restore reset archive fallback reads when active async transcripts are missing, de-duplicate main-session heartbeat events, expose session identity in runtime prompts, reject unknown OpenAI agent selectors, keep generated media completions, slash-command block replies, and trajectory export commands in WebChat, and require admin privileges for HTTP session/model override surfaces. (#91357, #92631, #92412, #92146, #92879, #91287, #92468, #92510, #91246, #92651, #92646) Thanks @ooiuuii, @openperf, @IWhatsskill, @masatohoshino, @CadanHu, @ZengWen-DT, @zhangguiping-xydt, and @TurboTheTurtle.",
      "Providers and model replay: preserve storeless OpenAI Responses replay compatibility, recover invalid OpenAI reasoning signatures and genericized Anthropic thinking-signature replay errors, route OAuth image defaults through Codex for eligible OpenAI profiles, avoid eager tool streaming for Claude 4.5 in Copilot, quarantine unreadable and post-hook OpenAI/Anthropic-family tool schemas without broadening allowed tool choices, deliver explicit thinking-off requests to LM Studio binary-thinking models, honor profile auth for SecretRef model entries, bound model browsing, strip provider prefixes where runtimes need bare IDs, and surface nested embedding fetch failures. (#90706, #92941, #92201, #92916, #92824, #75393, #92908, #92921, #92928, #92002, #90686, #92247, #92627, #91218, #92628) Thanks @snowzlm, @mmyzwl, @CarlCapital, @bek91, @Kailigithub, @vincentkoc, @rohitjavvadi, @samson910022, @nxmxbbd, @liuhao1024, @bymle, and @mushuiyu886.",
      "Memory, state, diagnostics, and config: split header-too-large embedding batches, keep QMD memory search enabled in transient mode, avoid SQLite WAL on NFS volumes, preserve recovery scheduling outside stuck-session warning backoff, preserve full-reindex rollback/cache recovery, treat raw Memory Wiki source pages as source evidence, and keep shell environment fallbacks contained in config write tests. (#92650, #92618, #92639, #91247, #92752, #92881, #59137, #92876, #69700) Thanks @mushuiyu886, @TurboTheTurtle, @849261680, @gnanam1990, @TSHOGX, and @arlen8411.",
      "UI/mobile/TUI: preserve dashboard session parent lineage, WebChat backscroll, reset soft command args, sidebar session picker interactivity, collapsed workspace files, resolved `/model` confirmation refs, stale foreground iOS Gateway reconnects, and paused setup-parent stdin after inherited-stdio child exit. (#90658, #92622, #91353, #92705, #92779, #92773, #92552, #93159) Thanks @luoyanglang, @TurboTheTurtle, @zhouhe-xydt, @NianJiuZst, @shakkernerd, @NarahariRaghava, @Solvely-Colin, and @fuller-stack-dev.",
      "Plugins and updates: repair missing required platform packages during managed plugin installs and updates, including omitted Codex platform binaries.",
      "Dependencies: update Hono to 4.12.25 so published OpenClaw and ACPX packages use the patched runtime.",
      "Release and test reliability: extend slow Gateway/full-suite watchdogs, split local full-suite shards when throttled, stabilize plugin auth marker fixtures, avoid brittle provider-ref error text, fold Telegram RTT sampling into live QA evidence, simplify QA scorecard mappings around canonical coverage IDs, keep QA Lab bootstrap selection assertions aligned with flow-only scenarios, skip QA coverage artifact consumers when runtime parity producer status is not green, keep Feishu lifecycle release checks pointed at the active fixture config, isolate trajectory-export live seed turns from Codex-native shell approvals, preserve release-check child refs while pinning expected SHAs, widen live OpenAI TTS budgets for slower provider responses, and avoid false downgrade prompts for unresolved latest-tag updates. (#92652, #92550, #92558, #92911) Thanks @RomneyDa and @Andy312432."
    ]
  },
  {
    "version": "2026.6.7",
    "date": "2026.6.7",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202667",
    "features": [
      {
        "title": "Telegram, outbound delivery, and channel recovery are sturdier",
        "description": "polling conflicts surface and restart safely, draft preview failures retry instead of ending a stream, delivered Slack replies remain in transcripts, and top-level image sends keep their intended media source. (#92281, #92498, #92083, #92407) Thanks @joshavant, @TurboTheTurtle, @hansraj316, and @xydigit-sj.",
        "href": "https://github.com/openclaw/openclaw/issues/92281"
      },
      {
        "title": "Provider and agent recovery covers SecretRef-backed profiles, configured De...",
        "description": "Provider and agent recovery covers SecretRef-backed profiles, configured DeepSeek transports, static model fallback, rejected Anthropic thinking replay, Codex prompt memory registration, and Kimi K2.7 Code support. (#92265, #92235, #92293, #92286, #92350, #92554) Thanks @joshavant, @rubencu, and @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/issues/92265"
      },
      {
        "title": "Cron, update, installer, and doctor paths now report SQLite-backed cron sta...",
        "description": "Cron, update, installer, and doctor paths now report SQLite-backed cron state, preserve disabled heartbeat retries, hand off Linux service auto-updates, and make external plugin/channel diagnosis clearer. (#92144, #92225, #92282, #86629) Thanks @liuhao1024, @joshavant, and @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/issues/92144"
      },
      {
        "title": "Skills and plugin workflows now permit trusted Skill Workshop support-file...",
        "description": "Skills and plugin workflows now permit trusted Skill Workshop support-file targets only through guarded lifecycle writes, and package publishing uses the current ClawHub plugin checks.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202667"
      },
      {
        "title": "Providers",
        "description": "add Kimi K2.7 Code support. (#92554)",
        "href": "https://github.com/openclaw/openclaw/pull/92554"
      },
      {
        "title": "QA: add evidence artifacts and scorecard taxonomy validation for release proof",
        "description": "QA: add evidence artifacts and scorecard taxonomy validation for release proof. (#91484, #91500) Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/91484"
      },
      {
        "title": "fix(cron)",
        "description": "report SQLite storage path in cron.status instead of legacy jobs.json (#92144). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92144"
      },
      {
        "title": "fix(channel)",
        "description": "harden local setup trust (#92175). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/92175"
      },
      {
        "title": "fix",
        "description": "handle explicit silent assistant replies (#92073). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/92073"
      },
      {
        "title": "fix(docker)",
        "description": "bundle QA Lab runtime in the image (#92087). Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/92087"
      },
      {
        "title": "fix(anthropic-vertex)",
        "description": "stop re-marking cache_control on transport-budgeted payloads (#92387). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/92387"
      },
      {
        "title": "Fix doctor preview channel SecretRef resolution (#92229)",
        "description": "Fix doctor preview channel SecretRef resolution (#92229). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92229"
      },
      {
        "title": "Fix disabled heartbeat one-shot cron retries (#92225)",
        "description": "Fix disabled heartbeat one-shot cron retries (#92225). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92225"
      },
      {
        "title": "Fix configured DeepSeek model transport inheritance (#92265)",
        "description": "Fix configured DeepSeek model transport inheritance (#92265). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92265"
      },
      {
        "title": "Fail closed for CLI-backed /btw fallback (#92226)",
        "description": "Fail closed for CLI-backed /btw fallback (#92226). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92226"
      },
      {
        "title": "Fix suppressed heartbeat commitment delivery (#92231)",
        "description": "Fix suppressed heartbeat commitment delivery (#92231). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92231"
      },
      {
        "title": "fix(agents)",
        "description": "classify structured unsupported model errors (#92280). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92280"
      },
      {
        "title": "Fix OTLP log trace correlation (#92276)",
        "description": "Fix OTLP log trace correlation (#92276). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92276"
      },
      {
        "title": "fix(update)",
        "description": "hand off Linux service auto-updates (#92282). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92282"
      },
      {
        "title": "fix",
        "description": "resolve managed SecretRef provider auth (#92235). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92235"
      },
      {
        "title": "Fix provider static model fallback resolution (#92293)",
        "description": "Fix provider static model fallback resolution (#92293). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92293"
      },
      {
        "title": "fix(agent)",
        "description": "continue after source message tool replies (#92343). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92343"
      },
      {
        "title": "fix(codex)",
        "description": "preserve memory prompt registration (#92350). Thanks @rubencu.",
        "href": "https://github.com/openclaw/openclaw/pull/92350"
      },
      {
        "title": "fix",
        "description": "clarify gateway SecretRef auth diagnostics (#92290). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92290"
      },
      {
        "title": "fix",
        "description": "repair rejected Anthropic thinking replay (#92286). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92286"
      },
      {
        "title": "Fix Telegram spooled buffered replay (#92281)",
        "description": "Fix Telegram spooled buffered replay (#92281). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/92281"
      },
      {
        "title": "fix(outbound)",
        "description": "honor top-level image param as send media source (issue 92407) (#92416). Thanks @xydigit-sj.",
        "href": "https://github.com/openclaw/openclaw/pull/92416"
      },
      {
        "title": "fix(sandbox)",
        "description": "render CLI skill prompts from materialized paths (#92508). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/92508"
      },
      {
        "title": "chore",
        "description": "fix esbuild production audit failure (#92540). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92540"
      },
      {
        "title": "Add QA evidence artifact output (#91484)",
        "description": "Add QA evidence artifact output (#91484). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91484"
      },
      {
        "title": "Add QA scorecard taxonomy validation (#91500)",
        "description": "Add QA scorecard taxonomy validation (#91500). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91500"
      },
      {
        "title": "feat(moonshot)",
        "description": "add Kimi K2.7 Code support (#92554).",
        "href": "https://github.com/openclaw/openclaw/pull/92554"
      },
      {
        "title": "fix(moonshot)",
        "description": "backfill reasoning_content on assistant tool-call replay messages (#92396). Thanks @xialonglee.",
        "href": "https://github.com/openclaw/openclaw/pull/92396"
      },
      {
        "title": "Fix lifecycle timeout cleanup after leader exit (#92566)",
        "description": "Fix lifecycle timeout cleanup after leader exit (#92566). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92566"
      },
      {
        "title": "Expose paged channel action results (#88993)",
        "description": "Expose paged channel action results (#88993). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/88993"
      },
      {
        "title": "fix(fireworks)",
        "description": "resolve catalog model params from plugin.json via core (#90326). Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/pull/90326"
      },
      {
        "title": "fix(doctor)",
        "description": "warn for untrusted external Discord plugin (#86629). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/86629"
      },
      {
        "title": "fix(providers)",
        "description": "skip unreadable Mistral tool schemas (#90242). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90242"
      },
      {
        "title": "fix(reply)",
        "description": "mirror same-channel Slack final replies (#92498). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/92498"
      },
      {
        "title": "fix(channels)",
        "description": "default boundary logger for swallowed progress-draft start errors (#92083). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92083"
      },
      {
        "title": "fix(channels)",
        "description": "make timer-fired progress-draft start errors observable (#92031). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92031"
      },
      {
        "title": "fix(agents)",
        "description": "isolate invalid plugin model catalogs [AI-assisted] (#92564). Thanks @tangtaizong666.",
        "href": "https://github.com/openclaw/openclaw/pull/92564"
      },
      {
        "title": "docs",
        "description": "UX-013 — design system documentation (#89827). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89827"
      },
      {
        "title": "feat(ui)",
        "description": "hide empty workboard columns (#89615). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89615"
      },
      {
        "title": "fix(a11y)",
        "description": "B-1+B-2+B-3 — contrast, focus states, minimum font sizes (#89822). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89822"
      },
      {
        "title": "fix issue 92218",
        "description": "memory_search tool disabled with QMD backend (#92618). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/92618"
      },
      {
        "title": "docs(gateway)",
        "description": "add uptime monitoring guidance to health check docs (fixes issue 55768) (#92608). Thanks @liuhao1024.",
        "href": "https://github.com/openclaw/openclaw/pull/92608"
      },
      {
        "title": "fix(docs)",
        "description": "pin Windows Hub download links to v2026.6.5 (#92605). Thanks @lzyyzznl.",
        "href": "https://github.com/openclaw/openclaw/pull/92605"
      },
      {
        "title": "issue 92589",
        "description": "fix(internal-runtime-context): wrap prompt-preface runtime context body in delimiters (#92593). Thanks @zhangqueping.",
        "href": "https://github.com/openclaw/openclaw/pull/92593"
      },
      {
        "title": "Run Vitest and Playwright scenarios from qa suite (#92606)",
        "description": "Run Vitest and Playwright scenarios from qa suite (#92606). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/92606"
      },
      {
        "title": "Reported",
        "description": "[Bug]: openclaw cron status reports legacy storePath (#91766). Thanks @AaronFaby.",
        "href": "https://github.com/openclaw/openclaw/pull/91766"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Node.js auto-installer fails silently with ioctl errors then falsely reports success before crashing (#73837). Thanks @ItsMeForLua.",
        "href": "https://github.com/openclaw/openclaw/pull/73837"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Missing SQLite perf and query-plan harness (#91616). Thanks @galiniliev.",
        "href": "https://github.com/openclaw/openclaw/pull/91616"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Error: Gateway service install not supported on openbsd (#25621). Thanks @kucharskim.",
        "href": "https://github.com/openclaw/openclaw/pull/25621"
      },
      {
        "title": "Reported",
        "description": "[Bug]: cron edit --cron silently strips schedule.tz and staggerMs (direct path replaces schedule without merging) (#92291). Thanks @dcapclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/92291"
      },
      {
        "title": "Reported",
        "description": "message tool: `image` param silently dropped on send — delivers text without attachment but returns ok:true (#92407). Thanks @ichirokyoto.",
        "href": "https://github.com/openclaw/openclaw/pull/92407"
      },
      {
        "title": "Reported",
        "description": "Kimi K2.6 reasoning_content 400 regression in long conversations after LCM compaction (follow-up issue 70392) (#71491). Thanks @RoseKongPS.",
        "href": "https://github.com/openclaw/openclaw/pull/71491"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Moonshot/Kimi duplicate tool-call IDs in replay, exposed by WhatsApp group chats (#51593). Thanks @Faaab84 and @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/51593"
      },
      {
        "title": "Reported",
        "description": "Discord channel stays disabled with no warning unless `plugins.entries.discord.enabled` is set (#83212). Thanks @cdeyoung67.",
        "href": "https://github.com/openclaw/openclaw/pull/83212"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Slack channel/thread sessions never persist assistant replies to the session transcript → total context loss when the CLI session binding is invalidated (#92489). Thanks @TalkingHeadsJed and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/92489"
      },
      {
        "title": "Reported",
        "description": "ModelRegistry: a single invalid plugin catalog aborts the entire custom-models load, leaving zero models and an unlogged error (#92553). Thanks @fxstein.",
        "href": "https://github.com/openclaw/openclaw/pull/92553"
      },
      {
        "title": "Reported",
        "description": "Health check bloat: uptime monitors must use /health, not /v1/chat/completions (#55768). Thanks @faahim.",
        "href": "https://github.com/openclaw/openclaw/pull/55768"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Windows Hub download link is not working (#92470). Thanks @arjkul.",
        "href": "https://github.com/openclaw/openclaw/pull/92470"
      },
      {
        "title": "Reported",
        "description": "Feishu channel leaks system runtime context (relevant-memories, sender metadata) into user-visible reply (#92589). Thanks @jovi2014-cyber.",
        "href": "https://github.com/openclaw/openclaw/pull/92589"
      }
    ],
    "fixes": [
      "Channels and delivery: recover Telegram preview and polling failures, retain Slack final replies in transcripts, preserve top-level outbound image parameters, and make channel-action result pages available to callers. (#92281, #92498, #92407, #88993) Thanks @joshavant, @TurboTheTurtle, @xydigit-sj, and @fuller-stack-dev.",
      "Agent/provider reliability: preserve configured model transport/auth resolution, fail closed for unsupported CLI-backed `/btw` fallback, continue after source message-tool replies, repair Anthropic thinking replay, and keep Codex memory prompts registered. (#92265, #92226, #92343, #92286, #92350) Thanks @joshavant and @rubencu.",
      "Operations: make cron and daemon status resilient, preserve disabled heartbeat one-shot retries, hand off Linux service auto-updates, and keep lifecycle timeout cleanup alive after leader exit. (#92144, #92225, #92282, #92566) Thanks @liuhao1024, @joshavant, and @RomneyDa."
    ]
  },
  {
    "version": "2026.6.6",
    "date": "2026.6.6",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202666",
    "features": [
      {
        "title": "Security boundaries are substantially tighter across transcripts, sandbox b...",
        "description": "Security boundaries are substantially tighter across transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group actions; exec approvals now fail closed on timeout. (#91529, #91618, #91615, #91619, #91741, #91745, #91746, #91748, #91749, #91750, #91751, #91752, #91763, #89938) Thanks @joshavant, @pgondhi987, @mmaps, @eleqtrizit, @shakkernerd, and @drobison00.",
        "href": "https://github.com/openclaw/openclaw/issues/91529"
      },
      {
        "title": "Telegram delivery is safer and more coherent",
        "description": "account-scoped topics route to the right agent, streamed text survives tool calls, `/compact` works on generic ingress, callback handling uses concrete APIs, draft chunking is shared, durable dispatch dedupe moved into the SDK, and unauthorized DM text stays out of cache and prompt context. (#91189, #88682, #89588, #90212, #91876, #91874, #91904, #91478, #91915) Thanks @codysai001, @alexzhu0, @joelnishanth, @snowzlm, @obviyus, and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/91189"
      },
      {
        "title": "iMessage recovery and delivery now cover always-on inbound restart, durable...",
        "description": "iMessage recovery and delivery now cover always-on inbound restart, durable echo markers, block streaming, idle approval discovery, hardened outbound transport, and actionable inbound startup diagnostics. (#91335, #91449, #88969, #88530, #91783, #91785) Thanks @omarshahine, @jmissig, and @colmbrogan.",
        "href": "https://github.com/openclaw/openclaw/issues/91335"
      },
      {
        "title": "Browser and MCP connectivity gained existing-session CDP support, discovere...",
        "description": "Browser and MCP connectivity gained existing-session CDP support, discovered WebSocket validation, default-profile `cdpUrl` handling, safer browser-output boundaries, Streamable HTTP loopback transport, corrected OAuth/SSE authorization handling, and broader schema compatibility. (#91422, #89851, #91736, #91747, #91451, #80143) Thanks @pgondhi987, @anagnorisis2peripeteia, @lifuyue, @eleqtrizit, @LiuwqGit, and @HemantSudarshan.",
        "href": "https://github.com/openclaw/openclaw/issues/91422"
      },
      {
        "title": "Control UI startup and first-reply latency are lower through cached model m...",
        "description": "Control UI startup and first-reply latency are lower through cached model metadata, removal of the startup catalog wait, lazy slash-command loading, and first-event tracing with slow-reply diagnostics. (#91531, #91538, #91568, #91583, #91598)",
        "href": "https://github.com/openclaw/openclaw/issues/91531"
      },
      {
        "title": "Provider support expands with OpenRouter OAuth onboarding and Claude Fable...",
        "description": "Provider support expands with OpenRouter OAuth onboarding and Claude Fable 5 adaptive thinking, while Codex sessions keep correct compaction ownership, local models skip guardian review, dynamic tool progress normalizes cleanly, and Gemma 4 reasoning replay is preserved. (#91830, #91882, #91590, #88630, #88768, #91696) Thanks @Patrick-Erichsen, @joshavant, @bdjben, and @Coder-Wangyankun.",
        "href": "https://github.com/openclaw/openclaw/issues/91830"
      },
      {
        "title": "CLI progress",
        "description": "emit Claude CLI commentary progress events and bridge inter-tool commentary into channel progress without exposing internal protocol scaffolding. (#89834, #90883) Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/issues/89834"
      },
      {
        "title": "Observability",
        "description": "allow trusted diagnostics channels to capture tool input/output content, add first-assistant-event traces, and warn on slow initial replies. (#91256, #91568, #91583) Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/issues/91256"
      },
      {
        "title": "Plugins/ClawHub",
        "description": "dogfood reusable package publishing, let dry runs skip publish approval, allow declared installed trusted hooks, report managed plugin version drift, and warn instead of failing on retired Skill Workshop configuration. (#91574, #91591, #90004, #90927, #90838) Thanks @Patrick-Erichsen, @brokemac79, and @lonexreb.",
        "href": "https://github.com/openclaw/openclaw/issues/91574"
      },
      {
        "title": "Memory/providers",
        "description": "move the local llama.cpp runtime into its provider plugin, batch embeddings across files, persist the agent model catalog cache, and keep QMD JSON search one-shot while filtering stale REM recall previews. (#91324, #89138, #90457, #91837, #91851) Thanks @osolmaz, @mushuiyu886, @ai-hpc, and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/issues/91324"
      },
      {
        "title": "Channels/mobile",
        "description": "add the QQBot group mention toggle, improve iPad and iPhone control surfaces, and expose the active connection host in the TUI footer. (#91423, #91557, #89909) Thanks @cxyhhhhh, @Solvely-Colin, and @baskduf.",
        "href": "https://github.com/openclaw/openclaw/issues/91423"
      },
      {
        "title": "Performance",
        "description": "prewarm TUI runtime plugins, deduplicate plugin auto-enable fanout, trim dense text-delta snapshots, and reuse prepared startup model metadata. (#90782, #89978, #91580, #91531) Thanks @RomneyDa and @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/issues/90782"
      },
      {
        "title": "fix(imessage)",
        "description": "always-on inbound recovery and dedupe (#91335). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91335"
      },
      {
        "title": "fix",
        "description": "clarify provider quota errors (#91390). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/91390"
      },
      {
        "title": "docs",
        "description": "preserve channel brand terms in Chinese i18n (#91419). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/91419"
      },
      {
        "title": "docs",
        "description": "preserve LINE across localized docs glossaries (#91442). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/91442"
      },
      {
        "title": "fix(browser)",
        "description": "neutralize media directives in browser output [AI] (#91422). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/91422"
      },
      {
        "title": "feat(cli)",
        "description": "emit commentary progress events from Claude CLI parser (#89834). Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/pull/89834"
      },
      {
        "title": "fix(context)",
        "description": "report compactable transcript counts (#91158). Thanks @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/91158"
      },
      {
        "title": "fix(imessage)",
        "description": "honor block streaming config (#91449). Thanks @jmissig and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91449"
      },
      {
        "title": "build(deps)",
        "description": "bump github.com/steipete/peekaboo from 3.3.0 to 3.4.0 in /apps/macos in the swift-deps group (#91364).",
        "href": "https://github.com/openclaw/openclaw/pull/91364"
      },
      {
        "title": "build(deps)",
        "description": "bump actions/github-script from 8 to 9 (#91368).",
        "href": "https://github.com/openclaw/openclaw/pull/91368"
      },
      {
        "title": "chore",
        "description": "add taxonomy file (#91512). Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/pull/91512"
      },
      {
        "title": "build(deps)",
        "description": "bump actions/cache from 4 to 5 (#91369).",
        "href": "https://github.com/openclaw/openclaw/pull/91369"
      },
      {
        "title": "build(deps)",
        "description": "bump the actions group with 2 updates (#91367).",
        "href": "https://github.com/openclaw/openclaw/pull/91367"
      },
      {
        "title": "build(deps)",
        "description": "bump the android-deps group in /apps/android with 3 updates (#91365).",
        "href": "https://github.com/openclaw/openclaw/pull/91365"
      },
      {
        "title": "chore",
        "description": "bump Codex app-server to 0.137.0 (#91496). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91496"
      },
      {
        "title": "perf(control-ui)",
        "description": "reuse startup model metadata (#91531). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91531"
      },
      {
        "title": "feat",
        "description": "canonicalize Codex protocol JSON asset ordering (#91507). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91507"
      },
      {
        "title": "fix",
        "description": "bound native hook relay lifetime (#91550). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91550"
      },
      {
        "title": "Fix transcript image redaction (#91529)",
        "description": "Fix transcript image redaction (#91529). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91529"
      },
      {
        "title": "Fix config",
        "description": "Fix config.patch explicit array replacement (#91551). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91551"
      },
      {
        "title": "fix(whatsapp)",
        "description": "route captured replies through successor controller after restart (#85823). Thanks @itsuzef and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/85823"
      },
      {
        "title": "perf(control-ui)",
        "description": "warn on slow first replies (#91583). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91583"
      },
      {
        "title": "fix(feishu)",
        "description": "retry on send rate-limit errors (230020/230006) (#89659). Thanks @ladygege.",
        "href": "https://github.com/openclaw/openclaw/pull/89659"
      },
      {
        "title": "fix(feishu)",
        "description": "propagate rate-limit errors from typing indicator to circuit breaker (#28157). Thanks @guoqunabc.",
        "href": "https://github.com/openclaw/openclaw/pull/28157"
      },
      {
        "title": "Fix Docker store seed target packages (#91547)",
        "description": "Fix Docker store seed target packages (#91547). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/91547"
      },
      {
        "title": "fix",
        "description": "make docs i18n frontmatter translation resilient (#91578). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/91578"
      },
      {
        "title": "fix(openai)",
        "description": "require api-key auth for realtime voice (#91567). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91567"
      },
      {
        "title": "fix",
        "description": "let ClawHub dry runs skip publish approval (#91591). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/91591"
      },
      {
        "title": "fix(memory-lancedb)",
        "description": "guard memory recall output [AI] (#91425). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/91425"
      },
      {
        "title": "fix(imessage)",
        "description": "persist echo markers before send (#88969). Thanks @colmbrogan.",
        "href": "https://github.com/openclaw/openclaw/pull/88969"
      },
      {
        "title": "Fix stale main session startup recovery (#91566)",
        "description": "Fix stale main session startup recovery (#91566). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91566"
      },
      {
        "title": "docs",
        "description": "include plugin prerelease in release validation approval (#91637).",
        "href": "https://github.com/openclaw/openclaw/pull/91637"
      },
      {
        "title": "fix(line)",
        "description": "canonicalize trailing-slash webhook paths (#91649).",
        "href": "https://github.com/openclaw/openclaw/pull/91649"
      },
      {
        "title": "feat(qqbot)",
        "description": "add /bot-group-allways command to toggle mention requirement (#91423). Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/pull/91423"
      },
      {
        "title": "fix(docs)",
        "description": "continue partial i18n batches after file errors (#91642). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/91642"
      },
      {
        "title": "chore(plugin-sdk)",
        "description": "refresh API baseline hash (#91661).",
        "href": "https://github.com/openclaw/openclaw/pull/91661"
      },
      {
        "title": "docs",
        "description": "fix release CI Android dispatch guidance (#91665).",
        "href": "https://github.com/openclaw/openclaw/pull/91665"
      },
      {
        "title": "fix issue 88009",
        "description": "[Feature]: batched memory embedding should batch over files (#89138). Thanks @mushuiyu886 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/89138"
      },
      {
        "title": "fix(plugin-sdk)",
        "description": "align Discord component edit facade types (#91679). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91679"
      },
      {
        "title": "fix(discord)",
        "description": "restore runtime timeout compatibility exports (#91686). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91686"
      },
      {
        "title": "fix",
        "description": "expand unsafe host env denylist (#91618). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/91618"
      },
      {
        "title": "fix",
        "description": "block rustup toolchain env overrides [AI] (#91615). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/91615"
      },
      {
        "title": "fix",
        "description": "block git protocol env controls [AI] (#91619). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/91619"
      },
      {
        "title": "perf(tui)",
        "description": "prewarm runtime plugins before first send (#90782). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/90782"
      },
      {
        "title": "fix(config)",
        "description": "warn for retired skill-workshop plugin entry instead of failing validation (issue 90244) (#90838). Thanks @lonexreb.",
        "href": "https://github.com/openclaw/openclaw/pull/90838"
      },
      {
        "title": "docs",
        "description": "clarify Matrix plugin upgrade repair (#91753). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91753"
      },
      {
        "title": "docs",
        "description": "align Feishu DM policy defaults (#91755). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91755"
      },
      {
        "title": "fix(discord)",
        "description": "require sender for moderation actions [AI] (#91745). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91745"
      },
      {
        "title": "docs",
        "description": "clarify trusted-proxy Control UI scope behavior (#85950). Thanks @nielskaspers.",
        "href": "https://github.com/openclaw/openclaw/pull/85950"
      },
      {
        "title": "fix(msteams)",
        "description": "require admin for group actions (#91746). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91746"
      },
      {
        "title": "feat(diagnostics-otel)",
        "description": "capture tool input/output content via trusted channel (#91256). Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/pull/91256"
      },
      {
        "title": "fix(gateway)",
        "description": "restrict non-owner loopback tools (#91749). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91749"
      },
      {
        "title": "fix(elevated)",
        "description": "reject group ids as senders (#91748). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91748"
      },
      {
        "title": "fix(codex)",
        "description": "guard sandbox http requests (#91752). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91752"
      },
      {
        "title": "fix(mcp)",
        "description": "harden stdio env filtering (#91751). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91751"
      },
      {
        "title": "Clarify env-var executable behavior reports in SECURITY",
        "description": "Clarify env-var executable behavior reports in SECURITY.md (#91765). Thanks @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/pull/91765"
      },
      {
        "title": "fix(ui)",
        "description": "require user intent for chat sessions (#91480). Thanks @TurboTheTurtle and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91480"
      },
      {
        "title": "fix(mcp)",
        "description": "lowercase SSE event-source header keys to prevent duplicate Authorization (401) (#91773). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91773"
      },
      {
        "title": "Validate sandbox bind parent paths [AI] (#91741)",
        "description": "Validate sandbox bind parent paths [AI] (#91741). Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/pull/91741"
      },
      {
        "title": "fix(imessage)",
        "description": "skip idle approval discovery scans (#88530). Thanks @colmbrogan and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/88530"
      },
      {
        "title": "fix(ui)",
        "description": "drain restored chat queue after session switch (#91780). Thanks @tmimmanuel.",
        "href": "https://github.com/openclaw/openclaw/pull/91780"
      },
      {
        "title": "fix(search)",
        "description": "enforce native web search tool policy (#91750). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91750"
      },
      {
        "title": "fix(config)",
        "description": "clarify retired skill workshop plugin warning (#91757). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91757"
      },
      {
        "title": "fix(doctor)",
        "description": "keep TTS legacy migration on supported paths (#91787).",
        "href": "https://github.com/openclaw/openclaw/pull/91787"
      },
      {
        "title": "fix(imessage)",
        "description": "harden outbound send transport (#91783). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91783"
      },
      {
        "title": "fix(imessage)",
        "description": "surface inbound startup diagnostics (#91785). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91785"
      },
      {
        "title": "Fix context-engine compaction ownership for Codex sessions (#91590)",
        "description": "Fix context-engine compaction ownership for Codex sessions (#91590). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91590"
      },
      {
        "title": "Improve iPad and iPhone control surfaces (#91557)",
        "description": "Improve iPad and iPhone control surfaces (#91557). Thanks @Solvely-Colin and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91557"
      },
      {
        "title": "chore(deps)",
        "description": "bump useblacksmith/setup-docker-builder from 1.8.0 to 1.9.0 in the actions group (#91666).",
        "href": "https://github.com/openclaw/openclaw/pull/91666"
      },
      {
        "title": "docs",
        "description": "link ClawHub plugin validation fixes guide (#91819). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/91819"
      },
      {
        "title": "fix(codex)",
        "description": "avoid guardian review for local models (#88630). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88630"
      },
      {
        "title": "fix(memory-core)",
        "description": "keep QMD JSON search one-shot (#91837). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/91837"
      },
      {
        "title": "Fix stale visible reply recovery (#91840)",
        "description": "Fix stale visible reply recovery (#91840). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91840"
      },
      {
        "title": "block unauthorized Telegram DM text from prompt context (#91478)",
        "description": "block unauthorized Telegram DM text from prompt context (#91478). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/91478"
      },
      {
        "title": "fix(compaction)",
        "description": "lower default timeout from 900s to 180s, preserve explicit config (#91361). Thanks @wangmiao0668000666 and @velvet-shark.",
        "href": "https://github.com/openclaw/openclaw/pull/91361"
      },
      {
        "title": "fix(sandbox)",
        "description": "use materialized skill paths in startup prompts (#91791). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/91791"
      },
      {
        "title": "Support existing-session browser CDP endpoints (#91736)",
        "description": "Support existing-session browser CDP endpoints (#91736). Thanks @lifuyue.",
        "href": "https://github.com/openclaw/openclaw/pull/91736"
      },
      {
        "title": "fix(browser)",
        "description": "validate discovered CDP websocket URLs (#91747). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/91747"
      },
      {
        "title": "feat(anthropic)",
        "description": "support Claude Fable 5 adaptive thinking (#91882).",
        "href": "https://github.com/openclaw/openclaw/pull/91882"
      },
      {
        "title": "fix(mcp)",
        "description": "repair OAuth redirect, errors, and unicode schema patterns (#91451). Thanks @LiuwqGit.",
        "href": "https://github.com/openclaw/openclaw/pull/91451"
      },
      {
        "title": "fix(talk)",
        "description": "show OpenAI Realtime WebRTC assistant transcripts (#90426). Thanks @shushushv.",
        "href": "https://github.com/openclaw/openclaw/pull/90426"
      },
      {
        "title": "fix(agents)",
        "description": "preserve reasoning_content replay for Gemma 4 openai-completions models (#91696). Thanks @Coder-Wangyankun.",
        "href": "https://github.com/openclaw/openclaw/pull/91696"
      },
      {
        "title": "Fail closed on exec approval timeout (#89938)",
        "description": "Fail closed on exec approval timeout (#89938). Thanks @drobison00.",
        "href": "https://github.com/openclaw/openclaw/pull/89938"
      },
      {
        "title": "fix(webchat)",
        "description": "finalize provider failure lifecycle (#91895). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/91895"
      },
      {
        "title": "fix(browser)",
        "description": "honor cdpUrl for user default profile (#80143). Thanks @HemantSudarshan.",
        "href": "https://github.com/openclaw/openclaw/pull/80143"
      },
      {
        "title": "fix(cron)",
        "description": "reject cron expressions that have no reachable run time (#91688). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/91688"
      },
      {
        "title": "fix(cron)",
        "description": "use final-call usage for session token totals (#91737). Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/pull/91737"
      },
      {
        "title": "Redact tool output secrets (#85196)",
        "description": "Redact tool output secrets (#85196). Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/pull/85196"
      },
      {
        "title": "fix(security)",
        "description": "block build tool env overrides (#92007). Thanks @eleqtrizit.",
        "href": "https://github.com/openclaw/openclaw/pull/92007"
      },
      {
        "title": "fix",
        "description": "preserve non-oneOf protocol schema array order (#91891). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91891"
      },
      {
        "title": "fix(macos)",
        "description": "hide unsupported Voice Wake controls (#91754). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91754"
      },
      {
        "title": "test(ci)",
        "description": "restore upgrade survivor session fixture (#92049). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92049"
      },
      {
        "title": "fix(fal)",
        "description": "parse raw completed queue results (#92051). Thanks @harjothkhara.",
        "href": "https://github.com/openclaw/openclaw/pull/92051"
      },
      {
        "title": "fix(agents)",
        "description": "prefer explicit sessions_send keys (#92047). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92047"
      },
      {
        "title": "fix(agents)",
        "description": "prefer sessionKey in sessions_send (#74009).",
        "href": "https://github.com/openclaw/openclaw/pull/74009"
      },
      {
        "title": "fix(memory-core)",
        "description": "check SQLite plugin state for dreaming ingestion audit after JSON migration (fixes issue 92017) (#92020). Thanks @zenglingbiao.",
        "href": "https://github.com/openclaw/openclaw/pull/92020"
      },
      {
        "title": "fix(mcp)",
        "description": "always log channel-bridge notification failures (#92032). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92032"
      },
      {
        "title": "fix(gateway)",
        "description": "log swallowed background-task finalization errors (#92033). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92033"
      },
      {
        "title": "fix(sessions)",
        "description": "derive channel from direct-chat session keys in send-policy (#92022). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92022"
      },
      {
        "title": "fix(xai)",
        "description": "clarify x_search query guidance (#91163). Thanks @rubencu.",
        "href": "https://github.com/openclaw/openclaw/pull/91163"
      },
      {
        "title": "fix(memory)",
        "description": "write dream fallback without subagent runtime (#90121). Thanks @a-m-a-r-a.",
        "href": "https://github.com/openclaw/openclaw/pull/90121"
      },
      {
        "title": "fix(ui)",
        "description": "show prompt progress while sending (#91215). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/91215"
      },
      {
        "title": "fix(tools)",
        "description": "surface unsupported-signal in anyOf availability (#92029). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92029"
      },
      {
        "title": "perf(agents)",
        "description": "memoize XML attribute regex in DSML stream parser (#92034). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92034"
      },
      {
        "title": "perf(agents)",
        "description": "sanitize compaction messages once for token estimation (#92026). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92026"
      },
      {
        "title": "fix(opencode-go)",
        "description": "add qwen plus tiered pricing (#91351). Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/pull/91351"
      },
      {
        "title": "fix(gateway)",
        "description": "recover config hot-reload after watcher errors (#92027). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92027"
      },
      {
        "title": "feat(cron)",
        "description": "add readable ISO time fields to `cron runs` JSON output (#91471). Thanks @FMLS.",
        "href": "https://github.com/openclaw/openclaw/pull/91471"
      },
      {
        "title": ":bug: fix(agents): classify harness provider mismatch as format error (issu...",
        "description": ":bug: fix(agents): classify harness provider mismatch as format error (issue 91710) (#91711). Thanks @a-tokyo.",
        "href": "https://github.com/openclaw/openclaw/pull/91711"
      },
      {
        "title": "fix(models)",
        "description": "keep bundled provider catalog when configured base URL is blank (issue 91270) (#91292). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/91292"
      },
      {
        "title": ":bug: fix(openai): remove chatgpt-responses transport override from gpt-5",
        "description": ":bug: fix(openai): remove chatgpt-responses transport override from gpt-5.3-codex catalog entry (#91720). Thanks @a-tokyo.",
        "href": "https://github.com/openclaw/openclaw/pull/91720"
      },
      {
        "title": "fix(control-ui)",
        "description": "make Control UI bootstrap config endpoint base-path-relative (issue 66946) (#91305). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/91305"
      },
      {
        "title": "fix(exec)",
        "description": "honor state dir approvals (#92056). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92056"
      },
      {
        "title": "fix(memory)",
        "description": "self-heal missing index identity by initializing provider during sync (#91897). Thanks @xydt-tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/pull/91897"
      },
      {
        "title": "fix(diagnostics)",
        "description": "release wedged session lane when stuck-session recovery aborts a run with queued session work (#91802). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/91802"
      },
      {
        "title": "fix(cron)",
        "description": "structural top-of-hour match in stagger heuristic (#92030). Thanks @hansraj316.",
        "href": "https://github.com/openclaw/openclaw/pull/92030"
      },
      {
        "title": "fix(media)",
        "description": "resolve state-relative inbound attachments (#92055). Thanks @sercada.",
        "href": "https://github.com/openclaw/openclaw/pull/92055"
      },
      {
        "title": "fix(agent)",
        "description": "dampen Discord stale thread replies (#91962).",
        "href": "https://github.com/openclaw/openclaw/pull/91962"
      },
      {
        "title": "fix(agents)",
        "description": "honor configured CLI resume timeouts (#90912). Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/90912"
      },
      {
        "title": "fix(web_fetch)",
        "description": "sanitize URL whitespace from LLM tool call arguments (fixes issue 91651) (#91950). Thanks @zenglingbiao.",
        "href": "https://github.com/openclaw/openclaw/pull/91950"
      },
      {
        "title": "fix(discord)",
        "description": "scope command-deploy cache by application id (#77367). Thanks @lonexreb.",
        "href": "https://github.com/openclaw/openclaw/pull/77367"
      },
      {
        "title": "fix(sessions)",
        "description": "preserve user /model override across daily/idle session rollover (issue 90119) (#90128). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/90128"
      },
      {
        "title": "fix(clickclack)",
        "description": "allow explicit enable through plugin allowlist (#92084).",
        "href": "https://github.com/openclaw/openclaw/pull/92084"
      },
      {
        "title": "feat(auto-reply)",
        "description": "durable inter-tool commentary via verbose standalone progress (supersedes issue 89850/issue 89890) (#91976). Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/pull/91976"
      },
      {
        "title": "issue 92109",
        "description": "[Bug]: EmbeddedAttemptSessionTakeoverError caused by Btrfs ctimeNs instability (#92123). Thanks @lzyyzznl.",
        "href": "https://github.com/openclaw/openclaw/pull/92123"
      },
      {
        "title": "fix(feishu)",
        "description": "reply inside P2P direct-message threads (#92136). Thanks @LiaoyuanNing and @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/92136"
      },
      {
        "title": "fix(agents)",
        "description": "stabilize a2a prompt cache context (#90173). Thanks @Sunjae-k.",
        "href": "https://github.com/openclaw/openclaw/pull/90173"
      },
      {
        "title": "fix(cli-runner)",
        "description": "scope claude-cli queue to live-session owner identity (issue 91946) (#91974). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/91974"
      },
      {
        "title": "fix(thinking)",
        "description": "apply Claude profile to anthropic-messages catalog rows (#92053). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/92053"
      },
      {
        "title": "Google",
        "description": "show detailed Gemini CLI OAuth extraction failures (#41991). Thanks @bgmbgm94.",
        "href": "https://github.com/openclaw/openclaw/pull/41991"
      },
      {
        "title": "fix(qqbot)",
        "description": "flush tool output before silent non-streaming final (#92074). Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/pull/92074"
      },
      {
        "title": "fix(models)",
        "description": "clarify provider model registration hint (#89508). Thanks @sweetcornna.",
        "href": "https://github.com/openclaw/openclaw/pull/89508"
      },
      {
        "title": "fix(agents)",
        "description": "keep migrated session entry ids unique on v1 upgrade (#89085). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/89085"
      },
      {
        "title": "fix(discord)",
        "description": "clean migrated thread binding state (#89552). Thanks @SYU8384.",
        "href": "https://github.com/openclaw/openclaw/pull/89552"
      },
      {
        "title": "fix(cron)",
        "description": "reject durations that overflow to a non-finite value (#89448). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/89448"
      },
      {
        "title": "fix(doctor)",
        "description": "warn on unsupported hook entry loaders (#89319). Thanks @leno23.",
        "href": "https://github.com/openclaw/openclaw/pull/89319"
      },
      {
        "title": "fix(config)",
        "description": "stop config.patch replacePaths index suffix from widening array consent (#91966). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/91966"
      },
      {
        "title": "fix(plugins)",
        "description": "rescan storm in \"/models\" call (regression shipped since v2026.5.18) (#92127). Thanks @obuchowski.",
        "href": "https://github.com/openclaw/openclaw/pull/92127"
      },
      {
        "title": "fix(ollama)",
        "description": "use provider thinking default in SDK session factory (#91657). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/91657"
      },
      {
        "title": "fix(memory)",
        "description": "abort orphaned embedding work when memory_search times out (#91742). Thanks @dreamhunter2333.",
        "href": "https://github.com/openclaw/openclaw/pull/91742"
      },
      {
        "title": "fix(memory-core)",
        "description": "retry narrative message reads (#89091). Thanks @bennewell35.",
        "href": "https://github.com/openclaw/openclaw/pull/89091"
      },
      {
        "title": "fix(cli)",
        "description": "validate gateway-rpc --timeout (#54646). Thanks @ruanrrn and @comeran.",
        "href": "https://github.com/openclaw/openclaw/pull/54646"
      },
      {
        "title": "fix(CLI)",
        "description": "validate gateway-facing timeout input (#40953). Thanks @comeran and @ruanrrn.",
        "href": "https://github.com/openclaw/openclaw/pull/40953"
      },
      {
        "title": "Keep gateway CLI timeout client-side after accepted runs (#60661)",
        "description": "Keep gateway CLI timeout client-side after accepted runs (#60661). Thanks @judicialcoder and @ruanrrn and @comeran.",
        "href": "https://github.com/openclaw/openclaw/pull/60661"
      },
      {
        "title": "fix(agents)",
        "description": "retry same model across short rate-limit windows (#91911). Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/pull/91911"
      },
      {
        "title": "fix",
        "description": "require ACP metadata for deleted-agent bypass (#91763). Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/91763"
      },
      {
        "title": "fix(telegram)",
        "description": "route account-scoped topic agents (#91189). Thanks @codysai001.",
        "href": "https://github.com/openclaw/openclaw/pull/91189"
      },
      {
        "title": "Preserve Telegram streamed text blocks between tool calls (#88682)",
        "description": "Preserve Telegram streamed text blocks between tool calls (#88682). Thanks @alexzhu0.",
        "href": "https://github.com/openclaw/openclaw/pull/88682"
      },
      {
        "title": "fix(telegram)",
        "description": "restore /compact on generic message ingress (#89588). Thanks @joelnishanth.",
        "href": "https://github.com/openclaw/openclaw/pull/89588"
      },
      {
        "title": "fix(agents)",
        "description": "deliver native /compact replies through source suppression (#90212). Thanks @snowzlm.",
        "href": "https://github.com/openclaw/openclaw/pull/90212"
      },
      {
        "title": "Fix Telegram callback API handling (#91876)",
        "description": "Fix Telegram callback API handling (#91876). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/91876"
      },
      {
        "title": "Share channel draft chunking resolver (#91874)",
        "description": "Share channel draft chunking resolver (#91874). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/91874"
      },
      {
        "title": "fix(telegram)",
        "description": "use SDK dispatch dedupe (#91904). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/91904"
      },
      {
        "title": "fix(telegram)",
        "description": "audit follow-ups — block-mode chunk config, dedupe bucket cleanup, grammy contract trust (#91915). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/91915"
      },
      {
        "title": "fix(gateway)",
        "description": "support Streamable HTTP MCP transport on loopback server (#89851). Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/pull/89851"
      },
      {
        "title": "perf(control-ui)",
        "description": "avoid startup catalog wait (#91538). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91538"
      },
      {
        "title": "perf(control-ui)",
        "description": "trace first assistant event (#91568). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91568"
      },
      {
        "title": "perf(control-ui)",
        "description": "lazy load slash commands (#91598). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91598"
      },
      {
        "title": "feat",
        "description": "add OpenRouter OAuth to onboarding (#91830). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/91830"
      },
      {
        "title": "fix(codex)",
        "description": "normalize dynamic tool progress results (#88768). Thanks @bdjben.",
        "href": "https://github.com/openclaw/openclaw/pull/88768"
      },
      {
        "title": "fix(cli)",
        "description": "bridge inter-tool commentary events to channel progress (#90883). Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/pull/90883"
      },
      {
        "title": "feat",
        "description": "dogfood reusable ClawHub package publish (#91574). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/91574"
      },
      {
        "title": "[plugin sdk] Allow declared installed trusted hooks (#90004)",
        "description": "[plugin sdk] Allow declared installed trusted hooks (#90004). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/90004"
      },
      {
        "title": "fix(doctor)",
        "description": "report managed plugin version drift (#90927). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/90927"
      },
      {
        "title": "fix(memory)",
        "description": "move local llama.cpp runtime to provider plugin (#91324). Thanks @osolmaz.",
        "href": "https://github.com/openclaw/openclaw/pull/91324"
      },
      {
        "title": "fix(models)",
        "description": "persist agent catalog cache (#90457). Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/90457"
      },
      {
        "title": "fix(memory-core)",
        "description": "filter stale recall entries in REM harness preview (#91851). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91851"
      },
      {
        "title": "fix(tui)",
        "description": "show connection host in footer (#89909). Thanks @baskduf.",
        "href": "https://github.com/openclaw/openclaw/pull/89909"
      },
      {
        "title": "perf(config)",
        "description": "dedupe plugin auto-enable fanout work (#89978). Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/89978"
      },
      {
        "title": "fix(agents)",
        "description": "trim dense text delta snapshots (#91580). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91580"
      },
      {
        "title": "fix(agents)",
        "description": "drop stale exec approval followups after session rebind (#85679). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/85679"
      },
      {
        "title": "fix(reply-queue)",
        "description": "remove the drained item by reference instead of front index (#91450). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/91450"
      },
      {
        "title": "fix(delivery)",
        "description": "suppress Codex/Harmony internal protocol artifacts from user-facing channels (#89151). Thanks @joelnishanth.",
        "href": "https://github.com/openclaw/openclaw/pull/89151"
      },
      {
        "title": "fix(mattermost)",
        "description": "keep default replies in existing threads (#91684). Thanks @jacobtomlinson.",
        "href": "https://github.com/openclaw/openclaw/pull/91684"
      },
      {
        "title": "fix(discord)",
        "description": "hydrate reply context metadata (#90263). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/90263"
      },
      {
        "title": "fix(cron)",
        "description": "cancel active cron task runs (#90666). Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/90666"
      },
      {
        "title": "fix(cron)",
        "description": "recover no-deliver tool warnings (#90678). Thanks @ai-hpc.",
        "href": "https://github.com/openclaw/openclaw/pull/90678"
      },
      {
        "title": "fix(gateway)",
        "description": "share approval runtime socket token (#87105). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/87105"
      },
      {
        "title": "fix(gateway)",
        "description": "skip deleted-agent guard for ACP harness session keys (#91219). Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/pull/91219"
      },
      {
        "title": "fix(gateway)",
        "description": "surface headless LaunchAgent state (#91614). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/91614"
      },
      {
        "title": "fix(auth)",
        "description": "verify SQLite auth migration before cleanup (#91740). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/91740"
      },
      {
        "title": "fix(gateway)",
        "description": "arm qmd startup maintenance (#91978). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/91978"
      },
      {
        "title": "fix(status)",
        "description": "restore Codex synthetic usage line (#91709). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/91709"
      },
      {
        "title": "fix(update)",
        "description": "recover package gateway restart after refresh failure (#91581). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/91581"
      },
      {
        "title": "fix(update)",
        "description": "expose plugin convergence repair (#91599). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/91599"
      },
      {
        "title": "fix(android)",
        "description": "avoid dataSync FGS for persistent node (#80082). Thanks @davelutztx.",
        "href": "https://github.com/openclaw/openclaw/pull/80082"
      },
      {
        "title": "Reported",
        "description": "iMessage bridge recovery can dispatch stale inbound backlog as fresh requests (#89237). Thanks @dwonshin and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/89237"
      },
      {
        "title": "Reported",
        "description": "Telegram streaming: intermediate text blocks between tool calls are silently lost (overwritten by final block) (#87326). Thanks @AbdelftahZowail.",
        "href": "https://github.com/openclaw/openclaw/pull/87326"
      },
      {
        "title": "Reported",
        "description": "Bug: Text before tool calls is lost in Feishu streaming card reply mode (#84486). Thanks @kentuscn.",
        "href": "https://github.com/openclaw/openclaw/pull/84486"
      },
      {
        "title": "Reported",
        "description": "Bug: memory_search hybrid mode not returning FTS matches (#48300). Thanks @sabo961.",
        "href": "https://github.com/openclaw/openclaw/pull/48300"
      },
      {
        "title": "Reported",
        "description": "Memory index meta never written when gateway auto-sync finds identity missing with existing chunks (#90338). Thanks @junxuku-byte.",
        "href": "https://github.com/openclaw/openclaw/pull/90338"
      },
      {
        "title": "Reported",
        "description": "openai-completions adapter silently passes empty content[] with stopReason=stop (#91394). Thanks @EXIIEX.",
        "href": "https://github.com/openclaw/openclaw/pull/91394"
      },
      {
        "title": "Reported",
        "description": "memory(qmd): collections never rebind when a collection's root path changes (#91251). Thanks @sasan1200.",
        "href": "https://github.com/openclaw/openclaw/pull/91251"
      },
      {
        "title": "Reported",
        "description": "[Bug]: refactor(cron): reduce excessive `as unknown as` type assertions in store loading (#91314). Thanks @SpecialLeon.",
        "href": "https://github.com/openclaw/openclaw/pull/91314"
      },
      {
        "title": "Reported",
        "description": "[Bug] Exec approval follow-up can leak into a new session after /new because it rebinds by sessionKey instead of original sessionId (#59349). Thanks @two3pro.",
        "href": "https://github.com/openclaw/openclaw/pull/59349"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Internal messages surface in Telegram chat (#88128). Thanks @reslp.",
        "href": "https://github.com/openclaw/openclaw/pull/88128"
      },
      {
        "title": "Reported",
        "description": "[Bug]: /status Context does not distinguish prompt usage from compactable transcript content (#91150). Thanks @samiralibabic and @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/91150"
      },
      {
        "title": "Reported",
        "description": "Mission Control: docs links navigate to 127.0.0.1:4317 instead of docs.openclaw.ai (#89465). Thanks @phoebepageoc-cloud.",
        "href": "https://github.com/openclaw/openclaw/pull/89465"
      },
      {
        "title": "Reported",
        "description": "[Bug]: dir_list is exposed without usable node context and is mistaken for local directory listing. (#91482). Thanks @wilfried-codex.",
        "href": "https://github.com/openclaw/openclaw/pull/91482"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Doctor does not report official managed plugin version drift after core upgrade (#90891). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/90891"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram channel drops / compact slash command - never appears in commands.log (#89525). Thanks @bomberluke37-prog.",
        "href": "https://github.com/openclaw/openclaw/pull/89525"
      },
      {
        "title": "Reported",
        "description": "Dashboard \"Open config\" fails on Windows: Start-Process -LiteralPath is invalid in all PowerShell versions (#90157). Thanks @jackmtl71.",
        "href": "https://github.com/openclaw/openclaw/pull/90157"
      },
      {
        "title": "Reported",
        "description": "Feishu plugin lacks retry logic for API rate limit errors (#70879). Thanks @AxelHu.",
        "href": "https://github.com/openclaw/openclaw/pull/70879"
      },
      {
        "title": "Reported",
        "description": "WebRTC Talk: TypeError 'this.peer is null' when calling addTrack on null RTCPeerConnection (#89434). Thanks @losts1.",
        "href": "https://github.com/openclaw/openclaw/pull/89434"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Local model provider calls thread block gateway event loop on Windows beta; trivial infer run takes ~4 minutes (#86599). Thanks @JakeBiggs.",
        "href": "https://github.com/openclaw/openclaw/pull/86599"
      },
      {
        "title": "Reported",
        "description": "[Feature]: batched memory embedding should batch over files (#88009). Thanks @hartmark and @mushuiyu886 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/88009"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex/OpenAI usage line disappears from status after 2026.6.5-beta.6 (#91694). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/91694"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Workshop files missing from OpenClaw 2026.6.1 npm package (#90244). Thanks @rogerallen1.",
        "href": "https://github.com/openclaw/openclaw/pull/90244"
      },
      {
        "title": "Reported",
        "description": "diagnostics.otel.captureContent.\\* is non-functional — runtime broadcast emits sanitized paramsSummary only (#77391). Thanks @mjunaidca.",
        "href": "https://github.com/openclaw/openclaw/pull/77391"
      },
      {
        "title": "Reported",
        "description": "dmPolicy allowFrom not enforced for Telegram text messages — unauthorized users reach agents (#91209). Thanks @producedbysavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91209"
      },
      {
        "title": "Reported",
        "description": "MCP remote OAuth: two bugs block streamable-http servers (regex `\\:` under /u; OAuth errors surfaced as [object Response]) (#91433). Thanks @marcusbsorensen.",
        "href": "https://github.com/openclaw/openclaw/pull/91433"
      },
      {
        "title": "Reported",
        "description": "[Bug]: In-turn reasoning dropped on multi-turn tool replay for non-400 openai models (gemma4/vLLM) — silent agentic-quality regression (#91645). Thanks @bfox55.",
        "href": "https://github.com/openclaw/openclaw/pull/91645"
      },
      {
        "title": "Reported",
        "description": "cron wake action does not support agentId — always routes to default agent (#46886). Thanks @aidyfeng.",
        "href": "https://github.com/openclaw/openclaw/pull/46886"
      },
      {
        "title": "Reported",
        "description": "[Bug]: hooks.mappings[].agentId and sessionKey silently ignored for action=\"wake\" (#64556). Thanks @jaserNo1.",
        "href": "https://github.com/openclaw/openclaw/pull/64556"
      },
      {
        "title": "Reported",
        "description": "[Bug]: `chmodSync` in `openOpenClawStateDatabase` crashes gateway on filesystems without POSIX permission support (#91919). Thanks @david-garcia-garcia.",
        "href": "https://github.com/openclaw/openclaw/pull/91919"
      },
      {
        "title": "Reported",
        "description": "[Bug]: sessions_send unexpectedly injects label, causing mutual-exclusion error with sessionKey (#64699). Thanks @sunxq1017-hash.",
        "href": "https://github.com/openclaw/openclaw/pull/64699"
      },
      {
        "title": "Reported",
        "description": "[Bug]: memory status reports \"ingestion state absent\" after dreaming JSON→SQLite migration (#92017). Thanks @JUMPUNDER.",
        "href": "https://github.com/openclaw/openclaw/pull/92017"
      },
      {
        "title": "Reported",
        "description": "[Bug]: v2026.6.1 regression: openai/gpt-5.3-codex silently falls back to Sonnet — Codex harness rejects \"openai\" provider due to stale npm plugin (#91710). Thanks @a-tokyo.",
        "href": "https://github.com/openclaw/openclaw/pull/91710"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Gemini can't resolve on embedded runtime (#91270). Thanks @resYuto.",
        "href": "https://github.com/openclaw/openclaw/pull/91270"
      },
      {
        "title": "Reported",
        "description": "[Bug]: **Control UI路径重复导致404错误，聊天功能无法使用** (#66946). Thanks @yndwx01.",
        "href": "https://github.com/openclaw/openclaw/pull/66946"
      },
      {
        "title": "Reported",
        "description": "bug(memory): gateway cannot self-heal a missing index identity when chunks are already indexed (#91167). Thanks @kiagentkronos-cell.",
        "href": "https://github.com/openclaw/openclaw/pull/91167"
      },
      {
        "title": "Reported",
        "description": "bug(tools): web_fetch fails with 'Invalid URL' when LLM generates a space in the protocol scheme (#91651). Thanks @akang1798.",
        "href": "https://github.com/openclaw/openclaw/pull/91651"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Slash commands not registered for non-default Discord accounts in multi-bot setup (#77359). Thanks @igmarketing.",
        "href": "https://github.com/openclaw/openclaw/pull/77359"
      },
      {
        "title": "Reported",
        "description": "[Bug]: User /model override silently dropped on daily/idle session rollover (survives /new but not the 4AM reset) (#90119). Thanks @Marvinthebored.",
        "href": "https://github.com/openclaw/openclaw/pull/90119"
      },
      {
        "title": "Reported",
        "description": "[Bug]: EmbeddedAttemptSessionTakeoverError caused by Btrfs ctimeNs instability (#92109). Thanks @recruits.",
        "href": "https://github.com/openclaw/openclaw/pull/92109"
      },
      {
        "title": "Reported",
        "description": "[Bug]: gateway opens an empty memory database when main.sqlite is absent during the index swap, leaving memory_search paused with \"index metadata is missing\" until restart (#91216). Thanks @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/pull/91216"
      },
      {
        "title": "Reported",
        "description": "[Bug] Claude CLI backend serializes all fresh sessions sharing one workspace via resolveCliRunQueueKey (#91946). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/91946"
      },
      {
        "title": "Reported",
        "description": "Native Anthropic adapter silently drops `thinking` to `off` for custom provider ids (resolveThinkingProfile only matches exact `anthropic`/`claude-cli`) (#91975). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/91975"
      },
      {
        "title": "Reported",
        "description": "Security: Unauthorized OAuth credential extraction from Gemini CLI installation (#54289). Thanks @jinduwang1001-max.",
        "href": "https://github.com/openclaw/openclaw/pull/54289"
      },
      {
        "title": "Reported",
        "description": "parseDurationMs rejects zero and negative values but allows arbitrarily large floats (#83906). Thanks @davinci282828.",
        "href": "https://github.com/openclaw/openclaw/pull/83906"
      },
      {
        "title": "Reported",
        "description": "memory_search tool-level timeout orphans background embedding work (#91718). Thanks @NOVA-Openclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/91718"
      }
    ],
    "fixes": [
      "Agent/session recovery: drop stale approval follow-ups after session rebind, remove drained reply-queue items by identity, recover stale main and visible replies, preserve Codex context-engine compaction ownership, lower the default compaction timeout to 180 seconds while respecting explicit configuration, and keep provider-failure terminal lifecycle state correct. (#85679, #91450, #91566, #91840, #91590, #91361, #91895) Thanks @openperf, @yetval, @joshavant, @wangmiao0668000666, and @TurboTheTurtle.",
      "User-visible content boundaries: suppress Codex/Harmony protocol artifacts, neutralize browser and LanceDB memory media directives, redact transcript images, and preserve native `/compact` replies through source suppression. (#89151, #91422, #91425, #91529, #90212) Thanks @joelnishanth, @pgondhi987, @joshavant, and @snowzlm.",
      "Channel delivery: keep WhatsApp captured replies attached to the successor controller after restart, retry Feishu rate limits, preserve Mattermost thread replies, canonicalize LINE webhook paths, restore Discord reply hydration and runtime timeout exports, and show OpenAI Realtime WebRTC assistant transcripts. (#85823, #89659, #91684, #91649, #90263, #91686, #90426) Thanks @itsuzef, @ladygege, @jacobtomlinson, @fuller-stack-dev, and @shushushv.",
      "Cron: cancel active task runs cleanly, preserve terminal timeout/cancel state, and recover no-deliver tool warnings instead of silently losing the outcome. (#90666, #90678) Thanks @ai-hpc.",
      "Gateway/config/auth: share the approval runtime socket token, replace arrays explicitly in `config.patch`, skip the deleted-agent guard only for valid ACP harness sessions, surface headless LaunchAgent state, verify SQLite auth migration before cleanup, and arm QMD startup maintenance. (#87105, #91551, #91219, #91614, #91740, #91978) Thanks @fuller-stack-dev and @scotthuang.",
      "Providers/Codex: clarify quota errors, restore the Codex synthetic usage line, canonicalize Codex protocol assets, require API-key auth for realtime voice, normalize ACP model refs, preserve Gemma 4 `reasoning_content`, and avoid guardian review for local models. (#91390, #91709, #91507, #91567, #88630, #91696) Thanks @hxy91819, @brokemac79, @RomneyDa, @joshavant, and @Coder-Wangyankun.",
      "Updates/builds: recover package Gateway restarts after refresh failure, expose plugin convergence repair, fall back to Corepack in PATH-less pnpm environments, seed the correct Docker store packages, and keep ClawHub dry-run and publish paths reusable. (#91581, #91599, #91547, #91591) Thanks @fuller-stack-dev, @sallyom, and @Patrick-Erichsen.",
      "UI: require explicit user intent before opening chat sessions and drain restored chat queues after session switches. (#91480) Thanks @TurboTheTurtle.",
      "Android: avoid the `dataSync` foreground-service type for persistent nodes. (#80082) Thanks @davelutztx.",
      "Native hooks: bound relay lifetimes so abandoned native hook connections cannot linger indefinitely. (#91550) Thanks @joshavant."
    ]
  },
  {
    "version": "2026.6.5",
    "date": "2026.6.5",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665",
    "features": [
      {
        "title": "QQBot now strips model reasoning/thinking scaffolding before native deliver...",
        "description": "QQBot now strips model reasoning/thinking scaffolding before native delivery, preventing raw `<thinking>` content from leaking into channel replies. (#89913, #90132) Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/issues/89913"
      },
      {
        "title": "MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed...",
        "description": "MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future non-text/image blocks at the materialize boundary, preventing Anthropic 400s and poisoned session history after a tool returns richer MCP content. (#90710, #90728) Thanks @RanSHammer and @849261680.",
        "href": "https://github.com/openclaw/openclaw/issues/90710"
      },
      {
        "title": "Anthropic extended-thinking sessions recover after prompt-cache expiry or G...",
        "description": "Anthropic extended-thinking sessions recover after prompt-cache expiry or Gateway restart because stream start events wait for `message_start`, letting pre-generation signature errors trigger the existing recovery retry. (#90667, #90697) Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/issues/90667"
      },
      {
        "title": "Parallel is now a bundled `web_search` provider with `PARALLEL_API_KEY` dis...",
        "description": "Parallel is now a bundled `web_search` provider with `PARALLEL_API_KEY` discovery, guarded endpoint handling, cache-safe session ids, onboarding picker support, and docs. (#85158) Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/pull/85158"
      },
      {
        "title": "Google Vertex ADC users get static catalog rows and runtime model resolutio...",
        "description": "Google Vertex ADC users get static catalog rows and runtime model resolution again, while single-provider cooldown recovery and memory adapter status checks are more reliable. (#90506, #90609, #90717, #90816) Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/issues/90506"
      },
      {
        "title": "Matrix can preflight voice notes before mention gating, preserve thread rea...",
        "description": "Matrix can preflight voice notes before mention gating, preserve thread reads/replies through Matrix relations pagination, and carry QA coverage for voice and thread flows. (#78016, #90415)",
        "href": "https://github.com/openclaw/openclaw/issues/78016"
      },
      {
        "title": "Auth and plugin install state is more durable",
        "description": "auth profiles now live in SQLite, official npm plugin install records keep their trusted pins, and prerelease fallback integrity checks avoid carrying stale integrity forward. (#89102, #88585)",
        "href": "https://github.com/openclaw/openclaw/issues/89102"
      },
      {
        "title": "macOS node mode no longer silently self-reconnects away from a healthy dire...",
        "description": "macOS node mode no longer silently self-reconnects away from a healthy direct Gateway session, reducing unexpected companion app session churn. (#90668, #90815) Thanks @vrurg.",
        "href": "https://github.com/openclaw/openclaw/issues/90668"
      },
      {
        "title": "Upgrade and service paths are safer",
        "description": "cron legacy JSON stores migrate during doctor preflight, service env placeholders no longer mask state-dir secrets, WhatsApp startup waits are bounded, and disabled WhatsApp accounts tear down on config reload. (#90072, #90208, #90277, #90488, #90486, #87951, #87965) Thanks @MonkeyLeeT, @sallyom, @mcaxtr, and @MukundaKatta.",
        "href": "https://github.com/openclaw/openclaw/issues/90072"
      },
      {
        "title": "Search/providers",
        "description": "add the Parallel bundled web-search plugin, live provider tests, registration contracts, onboarding/docs wiring, and guarded `api.parallel.ai/v1/search` support. (#85158) Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/pull/85158"
      },
      {
        "title": "Matrix/channels",
        "description": "add voice-message preflight and thread-aware read/reply behavior, including Matrix QA scenario wiring and docs for voice-message behavior. (#78016, #90415)",
        "href": "https://github.com/openclaw/openclaw/issues/78016"
      },
      {
        "title": "Skills/ClawHub",
        "description": "install ClawHub skills backed by GitHub repositories through the resolved install API, download the pinned GitHub commit, keep install-policy checks, and report install telemetry after success. (#90478) Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/90478"
      },
      {
        "title": "Google Chat/channels",
        "description": "add native approval card actions and click handling so Google Chat approvals use platform-native cards instead of generic message flow.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665"
      },
      {
        "title": "Mobile",
        "description": "Android provider/model screens now surface expiring, unavailable, unresolved, and attention states more clearly, while iOS settings and Talk tabs keep diagnostics, gateway rows, attachment labels, and unavailable Talk controls reachable.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665"
      },
      {
        "title": "Memory",
        "description": "QMD search can use the new rerank toggle, and memory adapter status uses the resolved default model identity when checking plain status. (#61834)",
        "href": "https://github.com/openclaw/openclaw/pull/61834"
      },
      {
        "title": "Docs/tooling",
        "description": "add Parallel search docs, refresh weather-skill guidance toward `web_fetch`, clarify legacy `openai-codex` auth, document release/test helper scripts, and tighten changed-test routing docs for CI/debugging work. (#90028, #90250) Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/issues/90028"
      },
      {
        "title": "Release/process",
        "description": "switch release trains to `YYYY.M.PATCH` monthly patch numbering, keep pre-transition tags compatible, and pin the June 2026 floor at `2026.6.5` after the published beta.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202665"
      },
      {
        "title": "Platform maintenance",
        "description": "refresh Android, Swift/macOS, Docker, CodeQL, Buildx, Docker build/push, and Codex Action dependencies for this release train. (#74980, #81757, #86481, #86483, #90601)",
        "href": "https://github.com/openclaw/openclaw/issues/74980"
      },
      {
        "title": "QQBot",
        "description": "add `/bot-group-allways on|off` slash command (with named-account and default-account support) to toggle whether group messages require an `@mention` before the bot replies, and clear the runtime config snapshot after the write so the new account-level `defaultRequireMention` takes effect immediately without restart. (#91423) Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/pull/91423"
      },
      {
        "title": "refactor(auth)",
        "description": "store auth profiles in SQLite (#89102).",
        "href": "https://github.com/openclaw/openclaw/pull/89102"
      },
      {
        "title": "docs",
        "description": "clarify legacy openai-codex auth (#90028). Thanks @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/90028"
      },
      {
        "title": "Fix Workboard status persistence (#89600)",
        "description": "Fix Workboard status persistence (#89600). Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/pull/89600"
      },
      {
        "title": "Pin official npm plugin install records (#88585)",
        "description": "Pin official npm plugin install records (#88585). Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/pull/88585"
      },
      {
        "title": "fix(auto-reply)",
        "description": "count message tool sends as delivery (#90123). Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/90123"
      },
      {
        "title": "fix(whatsapp)",
        "description": "restart channel when a per-account config field changes so disabled accounts are torn down (#87965). Thanks @MukundaKatta and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/87965"
      },
      {
        "title": "fix",
        "description": "protect global agent config defaults [AI] (#90145). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/90145"
      },
      {
        "title": "Rate limit node pairing requests [AI] (#90147)",
        "description": "Rate limit node pairing requests [AI] (#90147). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/90147"
      },
      {
        "title": "fix",
        "description": "guard MCP HTTP redirects [AI] (#89732). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/89732"
      },
      {
        "title": "fix(feishu)",
        "description": "preserve streaming card content (#90181). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/90181"
      },
      {
        "title": "fix(docker)",
        "description": "qualify base image refs for podman short-name mode (#90058). Thanks @mrunalp.",
        "href": "https://github.com/openclaw/openclaw/pull/90058"
      },
      {
        "title": "fix(acp)",
        "description": "re-add opt-in parent commentary progress (#89505). Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/89505"
      },
      {
        "title": "fix(ci)",
        "description": "scope PR merge diff checks to first parent (#90287). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/90287"
      },
      {
        "title": "fix(agents)",
        "description": "strip stale compaction thinking signatures before Anthropic replay (#90163). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/90163"
      },
      {
        "title": "fix(whastapp)",
        "description": "bound connection startup waits (#90486). Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/90486"
      },
      {
        "title": "fix service env placeholder collection (#90488)",
        "description": "fix service env placeholder collection (#90488). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/90488"
      },
      {
        "title": "feat",
        "description": "install GitHub-backed ClawHub skills (#90478). Thanks @Patrick-Erichsen.",
        "href": "https://github.com/openclaw/openclaw/pull/90478"
      },
      {
        "title": "Fix main CI guard drift (#90532)",
        "description": "Fix main CI guard drift (#90532). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/90532"
      },
      {
        "title": "fix(mattermost)",
        "description": "anchor slash state on globalThis (issue 68113) (#90534). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90534"
      },
      {
        "title": "Add Codex multi-agent config migration coverage (#90317)",
        "description": "Add Codex multi-agent config migration coverage (#90317). Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/pull/90317"
      },
      {
        "title": "Add Codex session route migration coverage (#90319)",
        "description": "Add Codex session route migration coverage (#90319). Thanks @ooiuuii.",
        "href": "https://github.com/openclaw/openclaw/pull/90319"
      },
      {
        "title": "fix(qqbot)",
        "description": "sanitize outbound text to strip reasoning/thinking content (#90132). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90132"
      },
      {
        "title": "fix(agents)",
        "description": "detect unsigned thinking-only stall when reasoning payload inflates payloadCount (#89874). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89874"
      },
      {
        "title": "Propagate ClickClack tool policy through reply dispatch (#89500)",
        "description": "Propagate ClickClack tool policy through reply dispatch (#89500). Thanks @mmaps.",
        "href": "https://github.com/openclaw/openclaw/pull/89500"
      },
      {
        "title": "feat(matrix)",
        "description": "handle voice preflight and threads (#90415).",
        "href": "https://github.com/openclaw/openclaw/pull/90415"
      },
      {
        "title": "fix(cron)",
        "description": "auto-migrate legacy cron store (#90208). Thanks @MonkeyLeeT and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/90208"
      },
      {
        "title": "fix(gateway)",
        "description": "dedupe probe warnings by gateway identity (#85791). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/85791"
      },
      {
        "title": "fix(context-engine)",
        "description": "forward isHeartbeat to afterTurn (fixes issue 89302) (#90632). Thanks @zenglingbiao and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/90632"
      },
      {
        "title": "docs",
        "description": "prefer web_fetch in weather skill (#90250). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/90250"
      },
      {
        "title": "feat(parallel)",
        "description": "add Parallel as a bundled web_search provider (#85158). Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/pull/85158"
      },
      {
        "title": "fix(tui)",
        "description": "stabilize optimistic user messages across history reloads, runId reassignment, and abort (#86205). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/86205"
      },
      {
        "title": "chore(deps)",
        "description": "bump the swift-deps group across 1 directory with 3 updates (#86483).",
        "href": "https://github.com/openclaw/openclaw/pull/86483"
      },
      {
        "title": "chore(deps)",
        "description": "bump the actions group across 1 directory with 4 updates (#90601).",
        "href": "https://github.com/openclaw/openclaw/pull/90601"
      },
      {
        "title": "chore(deps)",
        "description": "bump github.com/apple/swift-testing from 6.3.1 to 6.3.2 in /apps/swabble in the swift-deps group across 1 directory (#81757).",
        "href": "https://github.com/openclaw/openclaw/pull/81757"
      },
      {
        "title": "chore(deps)",
        "description": "bump the android-deps group across 1 directory with 9 updates (#86481).",
        "href": "https://github.com/openclaw/openclaw/pull/86481"
      },
      {
        "title": "build(deps)",
        "description": "bump docker/login-action from 3.6.0 to 4.1.0 (#74980).",
        "href": "https://github.com/openclaw/openclaw/pull/74980"
      },
      {
        "title": "fix(agents)",
        "description": "re-probe single-provider primary during cooldown (#90717). Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/pull/90717"
      },
      {
        "title": "fix(google)",
        "description": "preserve Vertex ADC catalog auth (#90609). Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/pull/90609"
      },
      {
        "title": "test(codex)",
        "description": "pin completion-idle timeout thread reset (#90027). Thanks @harjothkhara.",
        "href": "https://github.com/openclaw/openclaw/pull/90027"
      },
      {
        "title": "fix(voice-call)",
        "description": "track Twilio streams after connect (#90607). Thanks @sahibzada-allahyar and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90607"
      },
      {
        "title": "fix(agents)",
        "description": "coerce non-text/image MCP tool-result blocks to text (fixes issue 90710) (#90728). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90728"
      },
      {
        "title": "fix(llm)",
        "description": "defer Anthropic stream start event until after message_start (#90697). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90697"
      },
      {
        "title": "fix(memory)",
        "description": "resolve adapter default model in plain status identity check (#90816). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90816"
      },
      {
        "title": "fix issue 90668",
        "description": "[Bug]: macOS node mode can silently self-reconnect in a healthy direct gateway session (#90815). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90815"
      },
      {
        "title": "Fix OpenAI audio auth to use API keys (#90793)",
        "description": "Fix OpenAI audio auth to use API keys (#90793). Thanks @Glucksberg.",
        "href": "https://github.com/openclaw/openclaw/pull/90793"
      },
      {
        "title": "fix(codex)",
        "description": "preserve completed replies after client close (#90790). Thanks @brokemac79 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/90790"
      },
      {
        "title": "fix(imessage)",
        "description": "frame rpc stdout on LF only (#90845). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/90845"
      },
      {
        "title": "fix(uninstall)",
        "description": "refuse to remove current working directory during cleanup (#90813). Thanks @xydigit-sj.",
        "href": "https://github.com/openclaw/openclaw/pull/90813"
      },
      {
        "title": "fix(talk)",
        "description": "resolve realtime provider secret refs (#90914). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/90914"
      },
      {
        "title": "[codex] Add iOS Apple Review demo mode (#90919)",
        "description": "[codex] Add iOS Apple Review demo mode (#90919). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/90919"
      },
      {
        "title": "docs",
        "description": "improve plugin inventory layout (#90922). Thanks @joshp123.",
        "href": "https://github.com/openclaw/openclaw/pull/90922"
      },
      {
        "title": "fix(agents)",
        "description": "stabilize user-turn serialization across turns to preserve prompt cache (#90811). Thanks @Marvinthebored and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/90811"
      },
      {
        "title": "fix(imessage)",
        "description": "send TTS audio as voice messages (#90853). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/90853"
      },
      {
        "title": "feat(parallel)",
        "description": "add free Parallel Search MCP as the zero-config default web_search provider (#90849). Thanks @NormallyGaussian.",
        "href": "https://github.com/openclaw/openclaw/pull/90849"
      },
      {
        "title": "fix",
        "description": "store memory-core dreams state in sqlite (#91056).",
        "href": "https://github.com/openclaw/openclaw/pull/91056"
      },
      {
        "title": "fix(test)",
        "description": "type overflow resolver mock (#91098). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/91098"
      },
      {
        "title": "refactor(matrix)",
        "description": "store crypto sidecars in sqlite (#91100).",
        "href": "https://github.com/openclaw/openclaw/pull/91100"
      },
      {
        "title": "perf(qqbot)",
        "description": "narrow tool discovery cold load (#90780). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/90780"
      },
      {
        "title": "refactor(memory-wiki)",
        "description": "store import runs in sqlite (#91108).",
        "href": "https://github.com/openclaw/openclaw/pull/91108"
      },
      {
        "title": "fix",
        "description": "strip Google provider prefix from Gemini paths (#91125).",
        "href": "https://github.com/openclaw/openclaw/pull/91125"
      },
      {
        "title": "fix(outbound)",
        "description": "keep Discord runtime adapters resolvable (#91119). Thanks @TurboTheTurtle and @thewilloftheshadow.",
        "href": "https://github.com/openclaw/openclaw/pull/91119"
      },
      {
        "title": "fix(qqbot)",
        "description": "migrate group tool policy config (#91128).",
        "href": "https://github.com/openclaw/openclaw/pull/91128"
      },
      {
        "title": "fix(agents)",
        "description": "dispatch subagent spawn in process (#90612). Thanks @lanzhi-lee.",
        "href": "https://github.com/openclaw/openclaw/pull/90612"
      },
      {
        "title": "fix(outbound)",
        "description": "materialize buffer-only message.send attachments (#90794). Thanks @LiuwqGit.",
        "href": "https://github.com/openclaw/openclaw/pull/90794"
      },
      {
        "title": "fix(infra/agents)",
        "description": "session-routing guard for coalesced gateway restart continuations (issue 86742) (#87323). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/87323"
      },
      {
        "title": "fix(gateway/restart)",
        "description": "write sentinel with continuationMessage on coalesced restart (#74443). Thanks @hclsys.",
        "href": "https://github.com/openclaw/openclaw/pull/74443"
      },
      {
        "title": "fix(gateway)",
        "description": "report unqueued restart continuations (#83370). Thanks @stainlu.",
        "href": "https://github.com/openclaw/openclaw/pull/83370"
      },
      {
        "title": "feat(ios)",
        "description": "clarify talk realtime fallback (#91201). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/91201"
      },
      {
        "title": "fix(agents)",
        "description": "prevent ReDoS in background-session name derivation (#91233). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91233"
      },
      {
        "title": "fix(imessage)",
        "description": "self-explaining private-API failures and dedicated send timeout (#91041). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91041"
      },
      {
        "title": "feat(android)",
        "description": "add theme mode selection (#90752). Thanks @Tosko4 and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/90752"
      },
      {
        "title": "fix",
        "description": "gate owner-only HTTP tools (#90261). Thanks @pgondhi987 and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/90261"
      },
      {
        "title": "fix(codex)",
        "description": "quarantine unreadable dynamic tools (#90022). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/90022"
      },
      {
        "title": "fix(outbound)",
        "description": "preserve retries for budget-deferred deliveries (#91241). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91241"
      },
      {
        "title": "fix(agents)",
        "description": "do not refresh lastUsedAt on MCP lease release (#91124). Thanks @openperf and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91124"
      },
      {
        "title": "fix(imessage)",
        "description": "gate split-send coalescing on imsg metadata (#90858). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/90858"
      },
      {
        "title": "Gateway",
        "description": "avoid duplicate block stream replies (#137). Thanks @jverdi.",
        "href": "https://github.com/openclaw/openclaw/pull/137"
      },
      {
        "title": "fix",
        "description": "complete gateway server refactoring and fix Swift compiler crash (#141).",
        "href": "https://github.com/openclaw/openclaw/pull/141"
      },
      {
        "title": "fix(imessage)",
        "description": "coalesce split-sends without delaying normal DMs (#90795). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/90795"
      },
      {
        "title": "fix(codex)",
        "description": "preserve native subagent completion results (#91235). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91235"
      },
      {
        "title": "fix(cron)",
        "description": "preserve isolated agent turn payload message (#91230). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91230"
      },
      {
        "title": "feat(whatsapp)",
        "description": "expand live QA coverage (#90480). Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/90480"
      },
      {
        "title": "fix(gateway)",
        "description": "preserve stale channel restart diagnostics (#90937). Thanks @snowzlm and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90937"
      },
      {
        "title": "fix(anthropic)",
        "description": "drop reasoning_content replay signatures (#91231). Thanks @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/91231"
      },
      {
        "title": "fix issue 90452",
        "description": "Regression: Heartbeat exec completion still shows generic fallback text instead of actual output (#90897). Thanks @mushuiyu886 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90897"
      },
      {
        "title": "refactor",
        "description": "move session metadata to SQLite (#91322).",
        "href": "https://github.com/openclaw/openclaw/pull/91322"
      },
      {
        "title": "Fix transcript image redaction (#91529)",
        "description": "Fix transcript image redaction (#91529). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91529"
      },
      {
        "title": "Fix config",
        "description": "Fix config.patch explicit array replacement (#91551). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/91551"
      },
      {
        "title": "fix(whatsapp)",
        "description": "route captured replies through successor controller after restart (#85823). Thanks @itsuzef and @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/85823"
      },
      {
        "title": "fix(feishu)",
        "description": "retry on send rate-limit errors (230020/230006) (#89659). Thanks @ladygege.",
        "href": "https://github.com/openclaw/openclaw/pull/89659"
      },
      {
        "title": "fix(feishu)",
        "description": "propagate rate-limit errors from typing indicator to circuit breaker (#28157). Thanks @guoqunabc.",
        "href": "https://github.com/openclaw/openclaw/pull/28157"
      },
      {
        "title": "Fix Docker store seed target packages (#91547)",
        "description": "Fix Docker store seed target packages (#91547). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/91547"
      },
      {
        "title": "feat(qqbot)",
        "description": "add /bot-group-allways command to toggle mention requirement (#91423). Thanks @cxyhhhhh.",
        "href": "https://github.com/openclaw/openclaw/pull/91423"
      },
      {
        "title": "fix(agents)",
        "description": "prefer sessionKey in sessions_send (#74009).",
        "href": "https://github.com/openclaw/openclaw/pull/74009"
      },
      {
        "title": "Reported",
        "description": "bug(workboard): Control UI card settings don't persist + drag to running fails (#88592). Thanks @kzclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/88592"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Compaction re-injection produces stale thinking signatures → Anthropic API rejection (#90108). Thanks @dexiosmb.",
        "href": "https://github.com/openclaw/openclaw/pull/90108"
      },
      {
        "title": "Reported",
        "description": "[Feature]: expose QMD no-rerank for memory.qmd query mode (#61834). Thanks @kouka-t0yohei.",
        "href": "https://github.com/openclaw/openclaw/pull/61834"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Mattermost slash commands return 503 \"not yet initialized\" in v2026.4.15 (#68113). Thanks @infoanton and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/68113"
      },
      {
        "title": "Reported",
        "description": "[Bug]: [Bug]: ContextEngine afterTurn declares isHeartbeat but does not forward it (#89302). Thanks @huangxun375-stack and @zenglingbiao and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/89302"
      },
      {
        "title": "Reported",
        "description": "[Bug]: blockedUntil for subscription_limit set far in the future never re-probes when no fallback is configured (#90702). Thanks @brtkwr.",
        "href": "https://github.com/openclaw/openclaw/pull/90702"
      },
      {
        "title": "Reported",
        "description": "EmbeddedAttemptSessionTakeoverError: auto-compaction at reason=threshold trips fence on rewritten session jsonl (#90729). Thanks @johnib.",
        "href": "https://github.com/openclaw/openclaw/pull/90729"
      },
      {
        "title": "Reported",
        "description": "Codex app-server turn idle timeout is surfaced as user interruption (#89974). Thanks @FelixStarlite.",
        "href": "https://github.com/openclaw/openclaw/pull/89974"
      },
      {
        "title": "Reported",
        "description": "convertContentBlocks coerces MCP resource_link/resource/audio blocks into malformed image blocks -> Anthropic 400 -> poisoned session history (#90710). Thanks @RanSHammer and @849261680 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90710"
      },
      {
        "title": "Reported",
        "description": "[Bug]: macOS node mode can silently self-reconnect in a healthy direct gateway session (#90668). Thanks @vrurg and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90668"
      },
      {
        "title": "Reported",
        "description": "[Bug]: lifecycle:end event payload missing aborted and stopReason on pi-embedded path (#66534). Thanks @xiaohuaxi.",
        "href": "https://github.com/openclaw/openclaw/pull/66534"
      },
      {
        "title": "Reported",
        "description": "Active-memory embedded memory_search intermittently loses embedding provider and falls back to FTS-only (#89691). Thanks @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/pull/89691"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Agent-specific MiniMax auth resolves from main agent auth-profiles.json (#64274). Thanks @blaspat.",
        "href": "https://github.com/openclaw/openclaw/pull/64274"
      },
      {
        "title": "Reported",
        "description": "Bug: cron server_error retry classifier matches any bare 5xx-looking number (#90947). Thanks @Nas01010101.",
        "href": "https://github.com/openclaw/openclaw/pull/90947"
      },
      {
        "title": "Reported",
        "description": "Bug: /export-session crashes with ENOENT — export-html template assets shipped under wrong dist path (#90843). Thanks @Tank-x3.",
        "href": "https://github.com/openclaw/openclaw/pull/90843"
      },
      {
        "title": "Reported",
        "description": "Gateway startup does not load the plugin owning a configured memory embedding provider (memorySearch.provider) (#89651). Thanks @joeykrug.",
        "href": "https://github.com/openclaw/openclaw/pull/89651"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Vertex AI eu multi-region unreachable — host prefix is hardcoded (#89891). Thanks @Wimcomander.",
        "href": "https://github.com/openclaw/openclaw/pull/89891"
      },
      {
        "title": "Reported",
        "description": "Gemini web_search provider returns malformed JSON response on plain searches (#88528). Thanks @TarsTriggerBot.",
        "href": "https://github.com/openclaw/openclaw/pull/88528"
      },
      {
        "title": "Reported",
        "description": "Gateway writes streamed usage.cost.total for OpenRouter calls — up to 4× under actual billed amount on tier-priced models (#68066). Thanks @chrispatil.",
        "href": "https://github.com/openclaw/openclaw/pull/68066"
      },
      {
        "title": "Reported",
        "description": "Microsoft Foundry DeepSeek V4 alias providers still inject `thinking` after issue 87737 fix (#90520). Thanks @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/pull/90520"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Foundry Entra ID onboarding fails to save with \"Unrecognized key: thinkingLevelMap\" (#91011). Thanks @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/pull/91011"
      },
      {
        "title": "Reported",
        "description": "[Bug]: requiresReasoningContentOnAssistantMessages missing from ModelCompatSchema — can't replicate native DeepSeek behavior on custom providers (#89660). Thanks @kyKKK.",
        "href": "https://github.com/openclaw/openclaw/pull/89660"
      },
      {
        "title": "Reported",
        "description": "[Bug]: [REGRESSION] Tool calls with arguments arrive as empty objects when using LM Studio (openai-responses API). (#90585). Thanks @ceo-nada.",
        "href": "https://github.com/openclaw/openclaw/pull/90585"
      },
      {
        "title": "Reported",
        "description": "Bug: loopDetection cannot block message tool loops — volatile messageId in result defeats all critical-level detection paths (#89090). Thanks @wujiaming88.",
        "href": "https://github.com/openclaw/openclaw/pull/89090"
      },
      {
        "title": "Reported",
        "description": "[Bug]: detectCompat in openai-completions.ts misses Xiaomi endpoints for requiresReasoningContentOnAssistantMessages — diverges from openai-completions-compat.ts (#91106). Thanks @KrasimirKralev.",
        "href": "https://github.com/openclaw/openclaw/pull/91106"
      },
      {
        "title": "Reported",
        "description": "[Bug]: microsoft-foundry reasoning models return 400 invalid_encrypted_content when continuing a thread (#91033). Thanks @chrisreddington.",
        "href": "https://github.com/openclaw/openclaw/pull/91033"
      },
      {
        "title": "Reported",
        "description": "Codex migration (2026.6.1) drops the gpt-5.5 model when a canonical `openai` provider exists for embeddings — agents go silent (#90047). Thanks @holgergruenhagen.",
        "href": "https://github.com/openclaw/openclaw/pull/90047"
      },
      {
        "title": "Reported",
        "description": "[Bug]: message.send can fail for buffer-only attachments without an explicit media path or URL (#90768). Thanks @Timofa.",
        "href": "https://github.com/openclaw/openclaw/pull/90768"
      },
      {
        "title": "Reported",
        "description": "[Bug]: vision-skip guard bypassed when agents.defaults.imageModel is set, even with vision-capable primary model (#91084). Thanks @AxelHu.",
        "href": "https://github.com/openclaw/openclaw/pull/91084"
      },
      {
        "title": "Reported",
        "description": "[Bug]: memory pressure WARN is non-actionable — no units, no breakdown, no operator guidance, no self-heal, and log level disagrees with payload (#90783). Thanks @xdengli.",
        "href": "https://github.com/openclaw/openclaw/pull/90783"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Regression 2026.6.1: orphan tool.call fail-closed handling silently discards the composed assistant reply (\"Embedded agent failed before reply\") (#91067). Thanks @Francois3d.",
        "href": "https://github.com/openclaw/openclaw/pull/91067"
      },
      {
        "title": "Reported",
        "description": "[Bug]: gateway restart continuationMessage can be accepted but not queued after coalesced restart (#86742). Thanks @songshikang0111.",
        "href": "https://github.com/openclaw/openclaw/pull/86742"
      },
      {
        "title": "Reported",
        "description": "Reply-context body truncation: cover ReplyChain and fallback ReplyToBody JSON paths (#91042). Thanks @wangwllu.",
        "href": "https://github.com/openclaw/openclaw/pull/91042"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Non-workspace skills are inaccessible to the agent when sandbox is in workspaceAccess: \"rw\" mode (#90410). Thanks @gbb-netizen.",
        "href": "https://github.com/openclaw/openclaw/pull/90410"
      },
      {
        "title": "Reported",
        "description": "macOS Swift Compiler Crash in OnboardingView+Wizard.swift (#139). Thanks @daveonkels.",
        "href": "https://github.com/openclaw/openclaw/pull/139"
      },
      {
        "title": "Reported",
        "description": "Remove client-side iMessage split-send coalescing once imsg coalesces upstream (#91243). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/91243"
      },
      {
        "title": "Reported",
        "description": "Regression: Heartbeat exec completion still shows generic fallback text instead of actual output (#90452). Thanks @bizzle12368239 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/90452"
      },
      {
        "title": "Reported",
        "description": "Feishu plugin lacks retry logic for API rate limit errors (#70879). Thanks @AxelHu.",
        "href": "https://github.com/openclaw/openclaw/pull/70879"
      },
      {
        "title": "Reported",
        "description": "[Bug]: 5.28 regression — reasoning/thinking content leaks into QQBot replies (regression of issue 6470) (#89913). Thanks @dygg2001.",
        "href": "https://github.com/openclaw/openclaw/pull/89913"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Extended thinking sessions permanently broken after gateway restart / cache miss — no recovery for research agents (#90667). Thanks @MIHHHMIH.",
        "href": "https://github.com/openclaw/openclaw/pull/90667"
      },
      {
        "title": "Reported",
        "description": "[Bug]: [Bug]: google-vertex models fail with model_not_found at runtime on 2026.5.28 and 2026.6.1 — direct Vertex API calls succeed with same credentials (#90506). Thanks @paulogogs.",
        "href": "https://github.com/openclaw/openclaw/pull/90506"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Voice messages to agent don't work on Matrix (#78016). Thanks @frankdierolf.",
        "href": "https://github.com/openclaw/openclaw/pull/78016"
      },
      {
        "title": "Reported",
        "description": "Cron state silently wiped during SQLite migration on upgrade to 2026.6.1 (#90072). Thanks @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/pull/90072"
      },
      {
        "title": "Reported",
        "description": "gateway install --force drops MINIMAX_API_KEY from service-env despite managed keys list (#90277). Thanks @Kvikkulf.",
        "href": "https://github.com/openclaw/openclaw/pull/90277"
      },
      {
        "title": "Reported",
        "description": "Dynamic reload doesn't disable a running WhatsApp account when its enabled flag flips to false (#87951). Thanks @borntobefree2-cmyk.",
        "href": "https://github.com/openclaw/openclaw/pull/87951"
      },
      {
        "title": "Reported",
        "description": "[Bug]: sessions_send unexpectedly injects label, causing mutual-exclusion error with sessionKey (#64699). Thanks @sunxq1017-hash.",
        "href": "https://github.com/openclaw/openclaw/pull/64699"
      },
      {
        "title": "Reported",
        "description": "Agent-to-Agent Communication Tools Have Parameter Conflicts (#41199). Thanks @chouxiaozi1989.",
        "href": "https://github.com/openclaw/openclaw/pull/41199"
      }
    ],
    "fixes": [
      "Agents: `sessions_send` now honors an explicit `sessionKey` when stale label metadata is also present, and denied session-id sends no longer echo the resolved canonical session key. Fixes #64699; refs #74009 and #41199. Thanks @Mintalix, @RevisitMoon, and @Mocha-s.",
      "Channel content boundaries: QQBot now strips reasoning/thinking tags before sending, preserving final answers while hiding internal model narration from users. (#89913, #90132) Thanks @openperf.",
      "Agents/MCP/providers: coerce non-text/image MCP tool-result blocks before they reach provider converters, preserving valid images and turning richer MCP content into text instead of malformed image blocks. (#90710, #90728) Thanks @RanSHammer and @849261680.",
      "Anthropic/Codex/ACP/agent recovery: defer Anthropic stream start events until `message_start`, strip stale compaction thinking signatures before Anthropic replay, detect unsigned thinking-only stalls, refresh prompt fences after compaction writes, reject empty completion handoffs, preserve parent streaming-off overrides/shared progress commentary, forward heartbeat metadata to context-engine hooks, and cover Codex session/thread migration edge cases. (#90667, #90697, #90163, #90108, #89874, #89505, #90632, #89302, #90729, #90317, #90319) Thanks @openperf, @100yenadmin, and @ooiuuii.",
      "Provider/model resolution: preserve Google Vertex ADC auth markers in generated catalogs, re-probe a single-provider primary after cooldown, share Codex model visibility, fail closed for unknown model auth, preserve Codex alias availability, keep unresolved profile refs unknown, and avoid resolving auth while listing models. (#90506, #90609, #90717, #90702) Thanks @849261680.",
      "Gateway/macOS/mobile: avoid duplicate Gateway probe warnings by identity, rate-limit node pairing requests while preserving paired-node reconnects, keep macOS node mode on a healthy direct Gateway session, keep iOS diagnostics and gateway rows reachable, and avoid Linux ARM Gradle resource tasks during Android builds. (#85791, #90147, #90668, #90815) Thanks @giodl73-repo and @vrurg.",
      "TUI/chat/Workboard/auto-reply: optimistic user messages stay stable across stale history reloads, runId reassignment, and abort windows instead of disappearing, jumping, or lingering as ghost rows; Workboard stale lifecycle bulk updates no longer overwrite newer status/provenance; message-tool sends now count as delivery. (#86205, #89600, #88592, #90123) Thanks @RomneyDa.",
      "Cron/update/service env: doctor config preflight now migrates legacy cron JSON stores into SQLite before runtime reads, service env planning skips unresolved placeholders that would mask state-dir `.env` values, and session transcript rewrites keep registry markers/discriminants consistent. (#90072, #90208, #90277, #90488) Thanks @MonkeyLeeT and @sallyom.",
      "Security/config/tooling: guard MCP HTTP redirects, protect global agent config defaults, and keep release/test/tooling proof failures bounded and explicit. (#89732, #90145)",
      "Channels: WhatsApp restarts when per-account config changes, bounds background startup waits, closes failed sockets, and preserves reconnect behavior; Mattermost slash commands keep their state on `globalThis`; Feishu streaming cards preserve full merged content; voice-call tracks Twilio streams after connect; ClickClack reply tools respect `toolsAllow`. (#87951, #87965, #90486, #68113, #90534, #90181, #90607, #89500) Thanks @MukundaKatta, @mcaxtr, @infoanton, @mushuiyu886, and @sahibzada-allahyar.",
      "Feishu: retry transient send rate-limit errors (HTTP 429, per-chat code 230020, tenant-level code 11232) with linear backoff, including SDK responses that fulfill with rate-limit bodies instead of throwing, and route streaming-card sends through the retry wrapper. (#89659) Thanks @ladygege.",
      "Release/CI/E2E: main CI guard drift, PR merge diff scoping, live Docker credential staging, base-image qualification, installer Docker classification, Playwright dependency install recovery, API-key auth for Codex live Docker lanes, Parallels option terminators, and JSON-mode progress handling are tighter so release proof fails cleaner. (#90532, #90287, #90058) Thanks @RomneyDa, @hxy91819, and @mrunalp.",
      "Release/CI/E2E: Docker E2E and live Docker harness runs now apply default memory, CPU, and process ceilings while preserving explicit per-lane overrides.",
      "Release/CI/E2E: plugin lifecycle matrix resource sampling now fails phases that exceed RSS, wall-clock, or CPU ceilings instead of only logging the measurements.",
      "Release/CI/E2E: Codex npm plugin live assertions now cap transcript discovery and diagnostic log reads so failure proof stays bounded.",
      "Memory: keep doctor REM harness previews aligned with live REM by dropping short-term recall snippets whose source files disappeared before rendering preview output. Thanks @samzong and @frankekn.",
      "Tests/state isolation: QA Lab valid-tool-call metrics now require runtime tool-call evidence when runtime parity data is available instead of counting tool-backed scenario pass status alone.",
      "Tests/state isolation: QA Lab runtime parity now fails planned-only tool-call rows without matching tool results instead of treating matching mock plans as real tool evidence.",
      "Tests/state isolation: provider, media, auth, cron, task, session, sandbox, Gateway, and Codex timeout fixtures now scope more home/state/env data per test, reducing cross-test leakage and making release validation failures less noisy. (#90027, #89974)"
    ]
  },
  {
    "version": "2026.6.2",
    "date": "2026.6.2",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662",
    "features": [
      {
        "title": "Plugin and skill installs now use an operator install policy instead of the...",
        "description": "Plugin and skill installs now use an operator install policy instead of the old dangerous-code scanner path, with clearer doctor, CLI, ClawHub, and troubleshooting surfaces for package, archive, source, upload, and marketplace installs. (#89516) Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/89516"
      },
      {
        "title": "Telegram, Feishu, Discord, WhatsApp, and outbound delivery paths got safer...",
        "description": "Telegram, Feishu, Discord, WhatsApp, and outbound delivery paths got safer around duplicate transcript mirrors, Telegram admin writeback, streamed-final previews, approval allowlists, setup runtime state, poll modifiers, Discord voice errors, and internal progress traces. (#88973, #89626, #89812, #89035, #89814, #89813, #89601) Thanks @pgondhi987, @Petru2224, @zhangguiping-xydt, @codezz, and @takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/88973"
      },
      {
        "title": "Chat, Control UI, Skill Workshop, Workboard, Android companion shell, and W...",
        "description": "Chat, Control UI, Skill Workshop, Workboard, Android companion shell, and WebChat flows now preserve visible streaming text, reconcile completed sends, expose ACK timing, add Workboard keyboard movement, harden dialog accessibility, lazy-load usage views, keep current chat toggles working, and improve Android companion-first shell navigation. (#89801, #89777, #89802) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/89801"
      },
      {
        "title": "Security, policy, and config recovery now reject corrupt shell snapshots, u...",
        "description": "Security, policy, and config recovery now reject corrupt shell snapshots, unsupported policy keys, unsafe exec approval precheck environments, malformed script limits, and suspicious gateway startup configs while adding data-handling conformance checks. (#89701, #87074, #81488, #87056, #89480) Thanks @RomneyDa, @giodl73-repo, and @mmaps.",
        "href": "https://github.com/openclaw/openclaw/issues/89701"
      },
      {
        "title": "Gateway, agent, Codex, provider, model, and memory paths now recover sessio...",
        "description": "Gateway, agent, Codex, provider, model, and memory paths now recover session write-lock release failures, abandoned Codex app-server startups, stream-to-parent ACP spawns, custom-provider runtime fanout, bundled provider aliases, prompt-cache boundaries, Gemini stop sequences, Kimi cache markers, and watcher pressure warnings. (#89811, #89244) Thanks @RomneyDa and @takhoffman.",
        "href": "https://github.com/openclaw/openclaw/issues/89811"
      },
      {
        "title": "Release, CI, Docker, Crabbox/Testbox, package, and E2E validation lanes now...",
        "description": "Release, CI, Docker, Crabbox/Testbox, package, and E2E validation lanes now bound more network calls, malformed numeric limits, process groups, cleanup leaks, package hydration paths, Windows installer publishing, release asset verification, and log drains so failures produce bounded proof instead of hanging.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "Plugins/security",
        "description": "replace dangerous-code scanner enforcement with operator install policy, install-policy context, doctor checks, install/update CLI wiring, ClawHub metadata paths, and package/archive/source/upload lifecycle coverage. (#89516) Thanks @joshavant.",
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
        "description": "add Workboard keyboard movement controls, tighten Workboard card operations, improve Android companion-first shell UX, and document chat ACK timing metadata. (#89802) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89802"
      },
      {
        "title": "Release metadata",
        "description": "align the root package, publishable plugin manifests, generated shrinkwraps, appcast, iOS, Android, macOS, Matrix plugin changelog, and docs/generated baselines with the 2026.6.2 beta train.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "Release/packaging",
        "description": "promote Windows node installer publishing, require verified Windows release asset links, and document GitHub release-note edits.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "Docs",
        "description": "refresh Windows Hub setup guidance and document Gateway, CLI, and plugin SDK helper contracts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202662"
      },
      {
        "title": "fix",
        "description": "recover suspicious gateway startup configs (#89480).",
        "href": "https://github.com/openclaw/openclaw/pull/89480"
      },
      {
        "title": "Policy",
        "description": "add data handling conformance checks (#87056). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/87056"
      },
      {
        "title": "Harden node exec approval precheck env [AI] (#81488)",
        "description": "Harden node exec approval precheck env [AI] (#81488). Thanks @mmaps and @drobison00.",
        "href": "https://github.com/openclaw/openclaw/pull/81488"
      },
      {
        "title": "fix(policy)",
        "description": "reject unsupported policy keys (#87074). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/87074"
      },
      {
        "title": "fix(outbound)",
        "description": "stop schema-padded poll modifiers from blocking send (#89601). Thanks @codezz and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89601"
      },
      {
        "title": "fix(exec)",
        "description": "reject corrupt shell snapshots (#89701). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89701"
      },
      {
        "title": "fix",
        "description": "allowlist pending agent sqlite scaffold (#89705). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89705"
      },
      {
        "title": "fix",
        "description": "report gateway health auth diagnostics (#89337). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89337"
      },
      {
        "title": "perf(ui)",
        "description": "label delayed chat sends in telemetry (#89777). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89777"
      },
      {
        "title": "perf(ui)",
        "description": "surface chat ACK server timing (#89801). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89801"
      },
      {
        "title": "docs(web)",
        "description": "document chat ACK timing metadata (#89802). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89802"
      },
      {
        "title": "fix(agents)",
        "description": "release session write lock if fence read throws on prompt release (#89811). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89811"
      },
      {
        "title": "fix(telegram)",
        "description": "isolate verbose status after streamed finals (#89813). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89813"
      },
      {
        "title": "fix(feishu)",
        "description": "wire setup runtime setter (#89814). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89814"
      },
      {
        "title": "fix issue 88773",
        "description": "[Bug]: Telegram DM exec requires approval despite allowlist + ask:off — works in webchat, not in Telegram (#89035). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/89035"
      },
      {
        "title": "fix(outbound)",
        "description": "keep channel send durable when transcript mirror fails (issue 89626) (#89812). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89812"
      },
      {
        "title": "fix(telegram)",
        "description": "require admin for target writeback [AI] (#88973). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/88973"
      },
      {
        "title": "test(channels)",
        "description": "fix guardrail regex lint (#89960). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89960"
      },
      {
        "title": "Add operator install policy and remove dangerous-code install scanners (#89...",
        "description": "Add operator install policy and remove dangerous-code install scanners (#89516). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/89516"
      },
      {
        "title": "docs",
        "description": "document auth profile failure policy contract (#89613).",
        "href": "https://github.com/openclaw/openclaw/pull/89613"
      },
      {
        "title": "fix(codex)",
        "description": "accept first-party OpenAI plugin marketplaces (bundled and primary-runtime) (#82219). Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/pull/82219"
      },
      {
        "title": "fix(update)",
        "description": "surface plugin channel fallbacks (#81422). Thanks @BKF-Gitty.",
        "href": "https://github.com/openclaw/openclaw/pull/81422"
      },
      {
        "title": "fix(memory)",
        "description": "warn after startup watcher pressure check (#89244). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89244"
      },
      {
        "title": "fix(feishu)",
        "description": "preserve streaming card content (#90181). Thanks @mushuiyu886.",
        "href": "https://github.com/openclaw/openclaw/pull/90181"
      },
      {
        "title": "Reported",
        "description": "Bug: 5.28 transport refactor regressed prompt caching for Anthropic and OpenAI-compatible providers (#89386). Thanks @Enominera.",
        "href": "https://github.com/openclaw/openclaw/pull/89386"
      },
      {
        "title": "Reported",
        "description": "Kimi Code returns empty content when Anthropic cache_control markers are sent (#76612). Thanks @vliuyt.",
        "href": "https://github.com/openclaw/openclaw/pull/76612"
      },
      {
        "title": "Reported",
        "description": "webchat creates new agent run per message, destroying prompt cache (93% → 29% hit rate) (#89139). Thanks @Enominera.",
        "href": "https://github.com/openclaw/openclaw/pull/89139"
      },
      {
        "title": "Reported",
        "description": "[Bug]: sessions_send inter-session messages render as 'user' in WebChat — should show as agent-forwarded (#89161). Thanks @Xj49688-lgtm.",
        "href": "https://github.com/openclaw/openclaw/pull/89161"
      },
      {
        "title": "Reported",
        "description": "[Bug]: [BUG] UI shows agent \"running\" after conversation ends — requires manual page refresh every time (#87699). Thanks @csck-luoy.",
        "href": "https://github.com/openclaw/openclaw/pull/87699"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Control UI webchat duplicates every assistant reply on 2026.4.21 — regression from issue 5964/issue 39469 (#71992). Thanks @rzhnrhjr6j-cloud.",
        "href": "https://github.com/openclaw/openclaw/pull/71992"
      },
      {
        "title": "Reported",
        "description": "[Bug]: 2026.4.14 Windows chat UI regression: input text swallowed, streamed replies often invisible until refresh, typing indicator flashes then blanks (#67035). Thanks @q7793527.",
        "href": "https://github.com/openclaw/openclaw/pull/67035"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram DM exec requires approval despite allowlist + ask:off — works in webchat, not in Telegram (#88773). Thanks @ppmuzyk.",
        "href": "https://github.com/openclaw/openclaw/pull/88773"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram `streaming.mode: \"partial\"` and `\"block\"` duplicate the full preview when reply >4096 chars (#87624). Thanks @tuckyapps.",
        "href": "https://github.com/openclaw/openclaw/pull/87624"
      },
      {
        "title": "Reported",
        "description": "Sub-agent completion events delivered 3x — duplicate messages on auto-announce retry (#89626). Thanks @Petru2224 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89626"
      },
      {
        "title": "Reported",
        "description": "lossless-claw compaction breaks tool_calls/tool message chain → 499 error on model switch (#88561). Thanks @Finn-jiejie.",
        "href": "https://github.com/openclaw/openclaw/pull/88561"
      },
      {
        "title": "Reported",
        "description": "Browser existing-session Chrome MCP tabs fail with 300ms attach timeout despite doctor passing (#88213). Thanks @lamkan0210.",
        "href": "https://github.com/openclaw/openclaw/pull/88213"
      }
    ],
    "fixes": [
      "Channels/outbound: keep channel sends durable when transcript mirroring fails, stop schema-padded poll modifiers from blocking normal sends, preserve WebChat `sessions_send` handoffs, preserve Discord channel-label suppression while hiding internal agent failure traces, match Discord libopus error shapes, and sanitize Discord tool progress scaffolding. (#89626, #89812, #89601) Thanks @Petru2224, @codezz, and @takhoffman.",
      "Telegram/Feishu: require admin rights for Telegram target writeback, keep Telegram DM exec approval allowlists working with `ask:off`, prevent Telegram preview duplication across streaming modes, isolate verbose status after streamed finals, cancel clean restart stop timers, slow polling restart storms, and wire Feishu setup runtime setters. (#88973, #89035, #89813, #89814) Thanks @pgondhi987, @zhangguiping-xydt, and @takhoffman.",
      "Feishu: preserve full streaming card content by sending the merged text on each update instead of only the latest delta, so card readers see complete output when intermediate frames are missed. (#90181) Thanks @mushuiyu886.",
      "Chat/UI/Gateway: preserve visible chat stream text, clear stale stream buffers before terminal commits, reconcile completed sends, scroll pending sends into view, harden Workboard dialog accessibility, stabilize WebChat prompt-cache affinity, overlap chat catalog startup, render chat history incrementally, lazy-load usage dashboard, and report gateway health auth diagnostics. (#89337) Thanks @RomneyDa.",
      "Agents/Codex/providers/models: release session write locks when prompt-release fence reads fail, retire abandoned Codex app-server startups, keep stream-to-parent ACP spawns registered, close Codex startup clients on timeout, recover bundled provider aliases, avoid custom-provider runtime fanout, preserve provider prompt-cache boundaries, forward Gemini stop sequences, and strip Kimi-incompatible Anthropic cache markers. (#89811) Thanks @takhoffman.",
      "Memory/build/update: warn after startup watcher pressure checks, externalize optional Baileys image backends, restore and pin Canvas A2UI compatibility assets, keep plugin repair fetch failures nonblocking, restore Skill Workshop view switching, and keep the current chat toggle active after awaited session switches. (#89244) Thanks @RomneyDa.",
      "Plugins/auth: keep Hermes migration reports pointed at SQLite auth-profile stores and keep plugin auth-profile reuse tests on the current store path.",
      "Plugins/CLI: avoid importing the runtime plugin loader only to clear in-process caches after short-lived plugin install, enable, disable, update, and uninstall commands refresh registry metadata.",
      "Security/config/tooling: reject corrupt shell snapshots, suspicious gateway startup configs, malformed release/test/tooling/Docker/perf numeric limits, oversized audit responses, unsafe exec precheck env, and invalid pending-agent SQLite scaffold denials. (#89701, #89705, #89480, #81488) Thanks @RomneyDa and @mmaps.",
      "Release/CI/E2E: restore package changelog extraction after the post-2026.6.1 version bump, keep hydrated pnpm modules under `node_modules` for ARM/Linux package lifecycle scripts, keep OpenAI live-cache prerequisites advisory while Anthropic prerequisites stay blocking, retry Windows Parallels background log appends on transient file-lock errors, bound candidate GitHub and cross-OS Discord fetches, harden ARM smoke/browser checks, show Docker build heartbeats, reset Crabbox pnpm hydrate state, and isolate Testbox/Docker/release journey artifacts.",
      "Release/CI/E2E: keep Crabbox hydrate pnpm stores on the persistent cache volume while still resetting volatile modules, reducing cold installs and runner memory churn.",
      "Release/CI/E2E: fail secret-provider proof startup immediately when the gateway exits by signal instead of waiting for the readiness timeout.",
      "Release/CI/E2E: report plugin gateway gauntlet command-log write failures as failed rows instead of crashing the harness from child-process callbacks.",
      "Release/CI/E2E: abort stalled Kitchen Sink RPC readiness probes as soon as the gateway exits so proof failures return promptly.",
      "Release/CI/E2E: keep Parallels JSON-mode progress on stderr so macOS, Linux, Windows, and aggregate update smoke summaries stay parseable on stdout.",
      "Release/CI/E2E: fail Crabbox sparse-sync runs clearly when their temporary full checkout disappears while the child process is running, instead of pretending the child's deleted cwd can be repaired.",
      "Release/CI/E2E: fail PTY-backed E2E commands when transcript logs cannot be written instead of letting missing proof capture crash around a live child process.",
      "Release/CI/E2E: fail mock OpenAI request-log write errors with clear HTTP responses instead of leaving provider proof clients waiting on a broken socket.",
      "Release/CI/E2E: fail Parallels host-command log write errors through the command result path instead of leaving streaming smoke phases unresolved."
    ]
  },
  {
    "version": "2026.6.1",
    "date": "2026.6.1",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661",
    "features": [
      {
        "title": "Agents and CLI-backed runtimes recover more cleanly from interrupted tool c...",
        "description": "Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, auth-profile failover, reasoning-tag cleanup, and media delivery retries. (#85798, #87484, #88129, #88136, #88141, #88162, #88182, #88924, #89220) Thanks @RomneyDa, @neeravmakwana, and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/issues/85798"
      },
      {
        "title": "Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessa...",
        "description": "Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessage, Slack, Discord, Microsoft Teams, Google Chat, Google Meet, QQBot, and iOS realtime Talk. (#88096, #88105, #88183, #88749, #88866, #88948, #88984, #89015, #88231) Thanks @omarshahine, @Jensenwgd, and @sliverp.",
        "href": "https://github.com/openclaw/openclaw/issues/88096"
      },
      {
        "title": "Provider and plugin requests now bound more timers, retries, OAuth/device-c...",
        "description": "Provider and plugin requests now bound more timers, retries, OAuth/device-code lifetimes, media downloads, local service probes, generated-content polling, provider-catalog failures, reasoning output, and model catalog paths before they can hang a run. (#88480, #88512, #88767, #88781, #88851, #88860, #89343, #89379, #89400) Thanks @vincentkoc, @charles-openclaw, @zz327455573, @849261680, and @XuZehan-iCenter.",
        "href": "https://github.com/openclaw/openclaw/issues/88480"
      },
      {
        "title": "Skills, Skill Workshop, and plugin loading now handle proposal review, stal...",
        "description": "Skills, Skill Workshop, and plugin loading now handle proposal review, stale disabled snapshots, support-file approvals, locale/routing fixes, and loader failures more clearly, so channel turns avoid disabled SecretRefs and operators get better recovery guidance. (#79072, #79173, #88734) Thanks @zeus1959 and @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/issues/79072"
      },
      {
        "title": "Workboard, SecretRef plugin manifests, hosted iOS push relay, typed present...",
        "description": "Workboard, SecretRef plugin manifests, hosted iOS push relay, typed presentation command actions, and external Copilot/Tokenjuice packaging add broader orchestration, integration, SDK, and plugin delivery surfaces. (#82326, #87469, #87796, #88107, #88117, #88721, #89336) Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/82326"
      },
      {
        "title": "Chat and Control UI startup paths keep sends alive through history loading,...",
        "description": "Chat and Control UI startup paths keep sends alive through history loading, stream deltas incrementally, skip markdown work while streaming, keep drafts local while typing, clear the composer after sends, trace first-output latency, cache transcript renders, prioritize first connect, and expose calmer composer controls and notification settings. (#74715, #88772, #88825, #88952, #88960, #88998, #89030, #89106) Thanks @VladyslavLevchuk, @vincentkoc, and @sallyom.",
        "href": "https://github.com/openclaw/openclaw/issues/74715"
      },
      {
        "title": "iMessage monitor state, inbound queues, Discord thread bindings, plugin ins...",
        "description": "iMessage monitor state, inbound queues, Discord thread bindings, plugin install ledgers, session metadata, gateway runtime state, plugin metadata, memory watchers, and store writes moved toward SQLite-backed or cached state so restarts and hot paths do less repeated work. (#88794, #88797, #88866, #89075, #89185, #89188, #85351) Thanks @RomneyDa and @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/issues/88794"
      },
      {
        "title": "Release, CI, Docker, E2E, plugin install, update, doctor, diagnostics, and...",
        "description": "Release, CI, Docker, E2E, plugin install, update, doctor, diagnostics, and security lanes now cap more logs, response bodies, readiness probes, artifact checks, status polling, child workflow waits, docker package cleanup, quiet test stalls, downgrade repair, and health probes so failures report bounded proof instead of stalling. (#84988, #87914, #87952, #88966, #89169, #89701, #89731) Thanks @LibraHo, @Niriakot, @MukundaKatta, and @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/84988"
      },
      {
        "title": "Docs",
        "description": "add a dedicated Skill Workshop guide covering governed skill creation, reviewable proposals, CLI, Gateway, agent tool behavior, approval policy, support files, and recovery; refresh ClawHub cards; and add ClawHub CLI, iMessage SSH-wrapper TCC, Android helper, diff-language, and host-local media-send guidance. (#79658, #88734, #88758, #88865, #89297) Thanks @simplyclever914, @shakkernerd, @vyctorbrzezowski, @TurboTheTurtle, @RomneyDa, and @Wang-Yeah623.",
        "href": "https://github.com/openclaw/openclaw/issues/79658"
      },
      {
        "title": "Skills",
        "description": "let the `skill_workshop` agent tool apply, reject, and quarantine explicit proposals through the guarded review flow. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "let proposals carry approved support files under standard skill folders, with scanner, hash, and rollback safeguards. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "let pending proposals be revised in place with versioned, dated proposal frontmatter before approval. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skills",
        "description": "add Skill Workshop with pending proposals, CLI/Gateway review actions, rollback metadata, and the `skill_workshop` agent tool. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Skill Workshop",
        "description": "add the Control UI navigation, styled dashboard, proposal today view, revision dialog, file preview modal, searchable preview files, reusable session handoff, and localized strings.",
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
        "description": "add hosted push relay defaults, realtime Talk playback, and a guarded WebSocket ping path for more reliable mobile sessions. (#88096, #88105, #88231)",
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
        "title": "Code mode",
        "description": "add MCP API files and docs for code-mode integrations.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Gateway",
        "description": "support Tailscale Serve service names for local service routing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Control UI",
        "description": "add a Dreaming-tab agent selector and propagate the selected agent through Dreaming status, diary, and diary actions. (#78748) Thanks @stevenepalmer.",
        "href": "https://github.com/openclaw/openclaw/pull/78748"
      },
      {
        "title": "Control UI",
        "description": "add calmer chat composer controls, local draft typing state, and first-output latency instrumentation for active chat entry. (#88772, #88998) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88772"
      },
      {
        "title": "Plugins",
        "description": "add a SecretRef provider integration manifest contract and extract shared LLM core packages for provider/plugin reuse. (#82326, #88117)",
        "href": "https://github.com/openclaw/openclaw/issues/82326"
      },
      {
        "title": "Plugin SDK",
        "description": "add typed presentation command actions and the bounded `resolve_exec_env` hook for plugin-provided exec environment contributions. (#88721)",
        "href": "https://github.com/openclaw/openclaw/pull/88721"
      },
      {
        "title": "Plugins",
        "description": "persist the plugin install index in SQLite so installed package lookup survives reloads with less filesystem scanning. (#88794)",
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
        "description": "add disk space health checks and stabilize post-upgrade JSON probes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "Channels",
        "description": "store inbound queues in SQLite and migrate iMessage monitor state to SQLite-backed tracking. (#88797)",
        "href": "https://github.com/openclaw/openclaw/pull/88797"
      },
      {
        "title": "Skills",
        "description": "add the core skills index and centralize skills runtime loading, status, filtering, and prompt formatting.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#202661"
      },
      {
        "title": "perf(ui)",
        "description": "keep chat draft local while typing (#88998). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88998"
      },
      {
        "title": "fix(plugins)",
        "description": "block untrusted workspace setup-only channel loads (#86953). Thanks @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/86953"
      },
      {
        "title": "perf(control-ui)",
        "description": "prioritize first connect startup (#89030). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/89030"
      },
      {
        "title": "fix(ui)",
        "description": "clear chat composer after send (#89106). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/89106"
      },
      {
        "title": "fix",
        "description": "bound remote media reference reads [AI] (#88974). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/88974"
      },
      {
        "title": "fix",
        "description": "allow admins to approve dependency guard (#88966). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88966"
      },
      {
        "title": "fix(ci)",
        "description": "restore dist cache before artifact builds (#89169). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89169"
      },
      {
        "title": "fix(agents)",
        "description": "actionable copy for exhausted auth-profile failover (#85798). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/85798"
      },
      {
        "title": "Keep JSON CLI output clean during startup (#88689)",
        "description": "Keep JSON CLI output clean during startup (#88689). Thanks @alexzhu0.",
        "href": "https://github.com/openclaw/openclaw/pull/88689"
      },
      {
        "title": "fix(memory)",
        "description": "retry transient FileProvider-backed reads (#85351). Thanks @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/pull/85351"
      },
      {
        "title": "fix(memory-core)",
        "description": "reduce Linux watcher fan-out (#89188). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89188"
      },
      {
        "title": "docs",
        "description": "refresh ClawHub showcase cards (#88734). Thanks @vyctorbrzezowski.",
        "href": "https://github.com/openclaw/openclaw/pull/88734"
      },
      {
        "title": "test",
        "description": "reset gateway timers at test boundaries (#89212). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89212"
      },
      {
        "title": "fix(agents)",
        "description": "dispatch auth failures by type (#89181). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89181"
      },
      {
        "title": "fix(memory)",
        "description": "warn on gateway watcher FD risk (#89185). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89185"
      },
      {
        "title": "Revert \"fix(memory)",
        "description": "warn on gateway watcher FD risk\" (#89246). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89246"
      },
      {
        "title": "Keep iMessage typing active during tool work (#88948)",
        "description": "Keep iMessage typing active during tool work (#88948). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/88948"
      },
      {
        "title": "fix(agents)",
        "description": "avoid duplicate generated media fallback (#89220). Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/89220"
      },
      {
        "title": "docs",
        "description": "add ClawHub CLI page (#89297). Thanks @Wang-Yeah623 and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89297"
      },
      {
        "title": "fix(auto-reply)",
        "description": "guard missing dispatcher getFailedCounts without weakening the SDK type (#89318). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89318"
      },
      {
        "title": "Fix backup verifier for root-relative hardlink targets (#89328)",
        "description": "Fix backup verifier for root-relative hardlink targets (#89328). Thanks @abnershang.",
        "href": "https://github.com/openclaw/openclaw/pull/89328"
      },
      {
        "title": "fix(openai)",
        "description": "honor OPENAI_BASE_URL when no provider config sets a baseUrl (#74427). Thanks @sunapi386.",
        "href": "https://github.com/openclaw/openclaw/pull/74427"
      },
      {
        "title": "fix(anthropic)",
        "description": "honor ANTHROPIC_BASE_URL when no baseUrl is configured (#74432). Thanks @sunapi386.",
        "href": "https://github.com/openclaw/openclaw/pull/74432"
      },
      {
        "title": "fix(cache)",
        "description": "honour explicit cacheRetention for OpenRouter→Anthropic models (#79370). Thanks @mene-crab.",
        "href": "https://github.com/openclaw/openclaw/pull/79370"
      },
      {
        "title": "fix(github-copilot)",
        "description": "expose thinking profile via bundled provider-policy-api (#79894). Thanks @jakepresent.",
        "href": "https://github.com/openclaw/openclaw/pull/79894"
      },
      {
        "title": "fix(configure)",
        "description": "allow pruning stale provider models (#80366). Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/pull/80366"
      },
      {
        "title": "fix",
        "description": "remove isOpenAIProvider gate from applyPatchEnabled (#88359). Thanks @bottenbenny.",
        "href": "https://github.com/openclaw/openclaw/pull/88359"
      },
      {
        "title": "Fix private llm-core leaks in plugin SDK declarations (#89336)",
        "description": "Fix private llm-core leaks in plugin SDK declarations (#89336). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89336"
      },
      {
        "title": "fix(qqbot)",
        "description": "allow RFC2544 benchmark range for token fetch (issue 88984) (#89015). Thanks @sliverp.",
        "href": "https://github.com/openclaw/openclaw/pull/89015"
      },
      {
        "title": "fix(agents)",
        "description": "don't fail CLI turn when the native harness owns compaction (#87785). Thanks @solomonneas.",
        "href": "https://github.com/openclaw/openclaw/pull/87785"
      },
      {
        "title": "fix(memory-core)",
        "description": "keep startup cron retries quiet (#89075). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89075"
      },
      {
        "title": "fix",
        "description": "redact trajectory exports consistently (#89354). Thanks @pgondhi987.",
        "href": "https://github.com/openclaw/openclaw/pull/89354"
      },
      {
        "title": "fix(logging)",
        "description": "requeue stuck session lane after abort (#89293). Thanks @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/89293"
      },
      {
        "title": "fix(infra)",
        "description": "prefer npm-shrinkwrap.json over packageManager field for npm detection (#88283). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/88283"
      },
      {
        "title": "Treat soft plugin repair warnings as nonfatal (#84431)",
        "description": "Treat soft plugin repair warnings as nonfatal (#84431). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/84431"
      },
      {
        "title": "fix(update)",
        "description": "pin post-core plugin compatibility to the downgraded core version (issue 87914) (#87952). Thanks @MukundaKatta.",
        "href": "https://github.com/openclaw/openclaw/pull/87952"
      },
      {
        "title": "trace",
        "description": "Correlate channel message diagnostics into one trace (#88821). Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/pull/88821"
      },
      {
        "title": "fix(google)",
        "description": "add missing gemini-3.1-flash-lite to google-vertex catalog (#89400). Thanks @xzh-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/89400"
      },
      {
        "title": "fix(providers)",
        "description": "use native reasoning mode for Gemini instead of tagged (#89379). Thanks @849261680.",
        "href": "https://github.com/openclaw/openclaw/pull/89379"
      },
      {
        "title": "fix(llm)",
        "description": "prevent reasoning_content leak when reasoning is disabled (#89343). Thanks @zz327455573.",
        "href": "https://github.com/openclaw/openclaw/pull/89343"
      },
      {
        "title": "fix(exec)",
        "description": "reject corrupt shell snapshots (#89701). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89701"
      },
      {
        "title": "fix(outbound)",
        "description": "stop schema-padded poll modifiers from blocking send (#89601). Thanks @codezz and @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/89601"
      },
      {
        "title": "fix",
        "description": "backport gateway health credential handling (#89731). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/89731"
      },
      {
        "title": "fix(agents)",
        "description": "clear legacy auto fallback pins (#87484). Thanks @neeravmakwana.",
        "href": "https://github.com/openclaw/openclaw/pull/87484"
      },
      {
        "title": "fix",
        "description": "keep live OpenClaw session locks during cleanup (#88129).",
        "href": "https://github.com/openclaw/openclaw/pull/88129"
      },
      {
        "title": "fix(agents)",
        "description": "centralize terminal run outcome precedence (#88136).",
        "href": "https://github.com/openclaw/openclaw/pull/88136"
      },
      {
        "title": "fix",
        "description": "route generated media completions through requester agent (#88141).",
        "href": "https://github.com/openclaw/openclaw/pull/88141"
      },
      {
        "title": "fix(agents)",
        "description": "extend terminal outcome projections (#88162).",
        "href": "https://github.com/openclaw/openclaw/pull/88162"
      },
      {
        "title": "Fix subagent DM completion delivery after yield (#88182)",
        "description": "Fix subagent DM completion delivery after yield (#88182). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/88182"
      },
      {
        "title": "fix(agents)",
        "description": "strip streamed reasoning tags (#88924).",
        "href": "https://github.com/openclaw/openclaw/pull/88924"
      },
      {
        "title": "feat(ios)",
        "description": "default to hosted push relay (#88096). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/88096"
      },
      {
        "title": "feat(ios)",
        "description": "add talk tab realtime playback (#88105). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/88105"
      },
      {
        "title": "fix(whatsapp)",
        "description": "retry QR login 408 timeouts (#88183). Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/88183"
      },
      {
        "title": "fix(channels)",
        "description": "recover failed progress draft starts (#88749).",
        "href": "https://github.com/openclaw/openclaw/pull/88749"
      },
      {
        "title": "Persist Discord thread bindings in SQLite (#88866)",
        "description": "Persist Discord thread bindings in SQLite (#88866).",
        "href": "https://github.com/openclaw/openclaw/pull/88866"
      },
      {
        "title": "fix(ios)",
        "description": "guard websocket ping continuation (#88231). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/88231"
      },
      {
        "title": "fix",
        "description": "resolve google provider default API to google-generative-ai (#88512). Thanks @1052326311.",
        "href": "https://github.com/openclaw/openclaw/pull/88512"
      },
      {
        "title": "fix(plugin-sdk)",
        "description": "isolate provider catalog projection failures (#88767). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88767"
      },
      {
        "title": "fix(models)",
        "description": "strip remaining provider self prefixes (#88781). Thanks @charles-openclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/88781"
      },
      {
        "title": "Persist OpenRouter model cache in SQLite (#88851)",
        "description": "Persist OpenRouter model cache in SQLite (#88851).",
        "href": "https://github.com/openclaw/openclaw/pull/88851"
      },
      {
        "title": "feat(minimax)",
        "description": "add MiniMax M3 support (#88860).",
        "href": "https://github.com/openclaw/openclaw/pull/88860"
      },
      {
        "title": "fix",
        "description": "skip disabled skill snapshot env overrides (#79173). Thanks @zeus1959.",
        "href": "https://github.com/openclaw/openclaw/pull/79173"
      },
      {
        "title": "Add plugin manifest contract for SecretRef provider integrations (#82326)",
        "description": "Add plugin manifest contract for SecretRef provider integrations (#82326). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/82326"
      },
      {
        "title": "feat",
        "description": "add core session goals (#87469).",
        "href": "https://github.com/openclaw/openclaw/pull/87469"
      },
      {
        "title": "feat(ci)",
        "description": "autoscrub dependency lockfile-only PR changes (#87796). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/87796"
      },
      {
        "title": "feat",
        "description": "only include the current changelog section in tarball (#88107). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88107"
      },
      {
        "title": "refactor",
        "description": "extract LLM core packages (#88117).",
        "href": "https://github.com/openclaw/openclaw/pull/88117"
      },
      {
        "title": "feat(plugin-sdk)",
        "description": "add typed presentation command actions (#88721).",
        "href": "https://github.com/openclaw/openclaw/pull/88721"
      },
      {
        "title": "fix(ui)",
        "description": "show Communication Notifications tab (#74715). Thanks @VladyslavLevchuk.",
        "href": "https://github.com/openclaw/openclaw/pull/74715"
      },
      {
        "title": "feat",
        "description": "calm composer controls (#88772).",
        "href": "https://github.com/openclaw/openclaw/pull/88772"
      },
      {
        "title": "perf",
        "description": "streamline chat startup metadata (#88825).",
        "href": "https://github.com/openclaw/openclaw/pull/88825"
      },
      {
        "title": "perf(ui)",
        "description": "cache chat transcript renders (#88952). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88952"
      },
      {
        "title": "perf(ui)",
        "description": "record pending send paint timing (#88960). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88960"
      },
      {
        "title": "Persist plugin install index in SQLite (#88794)",
        "description": "Persist plugin install index in SQLite (#88794).",
        "href": "https://github.com/openclaw/openclaw/pull/88794"
      },
      {
        "title": "Migrate iMessage monitor state to SQLite (#88797)",
        "description": "Migrate iMessage monitor state to SQLite (#88797).",
        "href": "https://github.com/openclaw/openclaw/pull/88797"
      },
      {
        "title": "Refresh Node Docker base image digests (#84988)",
        "description": "Refresh Node Docker base image digests (#84988). Thanks @LibraHo.",
        "href": "https://github.com/openclaw/openclaw/pull/84988"
      },
      {
        "title": "Allow validated TXT/JSON/YAML media sends (#79658)",
        "description": "Allow validated TXT/JSON/YAML media sends (#79658). Thanks @simplyclever914.",
        "href": "https://github.com/openclaw/openclaw/pull/79658"
      },
      {
        "title": "docs(imessage)",
        "description": "document SSH wrapper TCC send failure (#88758). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88758"
      },
      {
        "title": "docs",
        "description": "clarify diffs language pack additions (#88865). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88865"
      },
      {
        "title": "feat",
        "description": "add internal code mode namespaces (#88043).",
        "href": "https://github.com/openclaw/openclaw/pull/88043"
      },
      {
        "title": "fix(ui)",
        "description": "add agent selector to dreaming tab (#78748). Thanks @stevenepalmer.",
        "href": "https://github.com/openclaw/openclaw/pull/78748"
      },
      {
        "title": "fix",
        "description": "persist ACP metadata in SQLite (#88724).",
        "href": "https://github.com/openclaw/openclaw/pull/88724"
      },
      {
        "title": "fix(codex)",
        "description": "stream final answer partials (#88730).",
        "href": "https://github.com/openclaw/openclaw/pull/88730"
      },
      {
        "title": "fix issue 76284",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents (#88314). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/88314"
      },
      {
        "title": "fix",
        "description": "harden CLI and plugin edge cases (#88896).",
        "href": "https://github.com/openclaw/openclaw/pull/88896"
      },
      {
        "title": "fix(update)",
        "description": "recognize manual-update launchd jobs (#88764). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88764"
      },
      {
        "title": "Preserve managed npm plugin root when install validation blocks update (#77...",
        "description": "Preserve managed npm plugin root when install validation blocks update (#77237). Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/pull/77237"
      },
      {
        "title": "fix(plugins)",
        "description": "isolate web provider factory failures (#88807). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88807"
      },
      {
        "title": "Move cron persistence to SQLite (#88285)",
        "description": "Move cron persistence to SQLite (#88285).",
        "href": "https://github.com/openclaw/openclaw/pull/88285"
      },
      {
        "title": "fix(cron)",
        "description": "include job name when reading single-job run history (#88294). Thanks @kip-claw.",
        "href": "https://github.com/openclaw/openclaw/pull/88294"
      },
      {
        "title": "fix(memory)",
        "description": "serialize qmd update writes across processes to stop SQLITE_BUSY (#85931). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/85931"
      },
      {
        "title": "perf(test)",
        "description": "fix explicit-file Vitest wrapper hangs (#88127). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88127"
      },
      {
        "title": "fix ci mainline checks (#88137)",
        "description": "fix ci mainline checks (#88137). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88137"
      },
      {
        "title": "test(infra)",
        "description": "avoid max fake-timer jumps (#88155). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88155"
      },
      {
        "title": "test(unit-fast)",
        "description": "isolate fake-timer files (#88160). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88160"
      },
      {
        "title": "fix(agents)",
        "description": "normalize sessions_send message aliases (#88229). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/88229"
      },
      {
        "title": "fix(feishu)",
        "description": "fallback when accepted turns send no visible reply (#87896). Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/pull/87896"
      },
      {
        "title": "fix(reply)",
        "description": "preserve sessions_send external routes (#88803). Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/pull/88803"
      },
      {
        "title": "refactor",
        "description": "migrate voice-call call logs through doctor (#88731).",
        "href": "https://github.com/openclaw/openclaw/pull/88731"
      },
      {
        "title": "[codex] Surface disabled Codex plugin routes in doctor lint (#88761)",
        "description": "[codex] Surface disabled Codex plugin routes in doctor lint (#88761). Thanks @brokemac79.",
        "href": "https://github.com/openclaw/openclaw/pull/88761"
      },
      {
        "title": "fix(diagnostics)",
        "description": "clear embedded-run activity when recovery declares lane idle (#88820). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/88820"
      },
      {
        "title": "fix(config)",
        "description": "skip state-dir dotenv values that are unresolved shell references (#88288). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/88288"
      },
      {
        "title": "fix(browser)",
        "description": "isolate Chrome MCP pending attach aborts (#88305). Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/pull/88305"
      },
      {
        "title": "fix(openai/tts)",
        "description": "handle [[tts:speed]] directive in OpenAI speech provider (issue 12163) (#74089). Thanks @stainlu.",
        "href": "https://github.com/openclaw/openclaw/pull/74089"
      },
      {
        "title": "Reported",
        "description": "Sanitise outbound message.send tool arguments to prevent runtime scaffolding leak (FM-3) and chat_id routing bleed (FM-2) on weaker models (#89100). Thanks @bobgitmcgrath.",
        "href": "https://github.com/openclaw/openclaw/pull/89100"
      },
      {
        "title": "Reported",
        "description": "External CLI harnesses blocked by stale auth-profiles gate (#85105). Thanks @saphoroth.",
        "href": "https://github.com/openclaw/openclaw/pull/85105"
      },
      {
        "title": "Reported",
        "description": "configure wizard: models block is append-only — stale/delisted model entries never pruned (#80347). Thanks @wherewolf87.",
        "href": "https://github.com/openclaw/openclaw/pull/80347"
      },
      {
        "title": "Reported",
        "description": "Bug: apply_patch unavailable on non-OpenAI providers due to hardcoded isOpenAIProvider gate (#88357). Thanks @bottenbenny.",
        "href": "https://github.com/openclaw/openclaw/pull/88357"
      },
      {
        "title": "Reported",
        "description": "[Bug]: `apply_patch` is treated as an unknown/plugin-only tool in agent policy pipeline, so agent-routed runs cannot execute it (#45269). Thanks @Alfred-claw28.",
        "href": "https://github.com/openclaw/openclaw/pull/45269"
      },
      {
        "title": "Reported",
        "description": "[Bug] QQ bot token fetch still blocked by SSRF — RFC2544 benchmark range not allowed (#88984). Thanks @Jensenwgd.",
        "href": "https://github.com/openclaw/openclaw/pull/88984"
      },
      {
        "title": "Reported",
        "description": "Codex app-server thread lifecycle latency is hidden between attempt-dispatch and session.started (#84640). Thanks @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/pull/84640"
      },
      {
        "title": "Reported",
        "description": "macOS LaunchAgent gateway restart/stop can leave gateway unloaded when invoked in-band (#89174). Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/pull/89174"
      },
      {
        "title": "Reported",
        "description": "[Bug][Codex Runtime]: Discord progress reasoning stream overwrites prior reasoning chunks (#83983). Thanks @xueqingli1.",
        "href": "https://github.com/openclaw/openclaw/pull/83983"
      },
      {
        "title": "Reported",
        "description": "Stuck-session recovery discards queued user messages after aborting ghost run (#89208). Thanks @ketos-jona.",
        "href": "https://github.com/openclaw/openclaw/pull/89208"
      },
      {
        "title": "Reported",
        "description": "[Bug]: 2026.5.27 npm install calls itself pnpm (#87732). Thanks @jasonftl.",
        "href": "https://github.com/openclaw/openclaw/pull/87732"
      },
      {
        "title": "Reported",
        "description": "Bug: resuming a session with a corrupted header line silently wipes the entire transcript (data loss) (#89037). Thanks @yetval.",
        "href": "https://github.com/openclaw/openclaw/pull/89037"
      },
      {
        "title": "Reported",
        "description": "[Bug]: QQBot credential backups bypass gateway state isolation (#84313). Thanks @coygeek.",
        "href": "https://github.com/openclaw/openclaw/pull/84313"
      },
      {
        "title": "Reported",
        "description": "diagnostics-prometheus can spam log.record errors after rollback when plugin version remains newer than OpenClaw core (#87914). Thanks @Niriakot.",
        "href": "https://github.com/openclaw/openclaw/pull/87914"
      },
      {
        "title": "Reported",
        "description": "google-vertex: gemini-3.1-flash-lite missing from pi-ai model catalog, causes silent failure with no fallback (#89390). Thanks @nyuDSA.",
        "href": "https://github.com/openclaw/openclaw/pull/89390"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Context-engine overflow retry can bind a fresh Codex thread without projected context (#88355). Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/88355"
      },
      {
        "title": "Reported",
        "description": "Gemini text-tag reasoning conflicts with native thinking — produces unclosed <think>, empty post-tool turn, payloads=0 (#69220). Thanks @mrbrl.",
        "href": "https://github.com/openclaw/openclaw/pull/69220"
      },
      {
        "title": "Reported",
        "description": "v2026.5.18 doctor/status can leave openai-codex OAuth sidecar auth partially repaired while runtime still fails (#84252). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/84252"
      },
      {
        "title": "Reported",
        "description": "Bug: before_agent_finalize hook never fires for OpenClaw agents (main, coder, etc.) (#87585). Thanks @lileilei-camera.",
        "href": "https://github.com/openclaw/openclaw/pull/87585"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Add `supportsPromptCacheKey` to Mistral transport compat patch (#83709). Thanks @Net-Sentinel.",
        "href": "https://github.com/openclaw/openclaw/pull/83709"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Reusing hooks.token as gateway password collapses hook auth into full operator auth (#87376). Thanks @coygeek.",
        "href": "https://github.com/openclaw/openclaw/pull/87376"
      },
      {
        "title": "Reported",
        "description": "Kimi Code returns empty content when Anthropic cache_control markers are sent (#76612). Thanks @vliuyt.",
        "href": "https://github.com/openclaw/openclaw/pull/76612"
      },
      {
        "title": "Reported",
        "description": "Google Gemini chat model routes to openai-responses transport (401), native @google/genai transport never selected (#88480). Thanks @azgardtek.",
        "href": "https://github.com/openclaw/openclaw/pull/88480"
      },
      {
        "title": "Reported",
        "description": "[Bug] skills.entries.gh-issues.apiKey SecretRef unresolved in WhatsApp lane sessions (env:default:GITHUB_PAT) (#79072). Thanks @maverikva.",
        "href": "https://github.com/openclaw/openclaw/pull/79072"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Telegram partial streaming receives no assistant deltas for openai-codex; newline chunking only sends final blocks (#88405). Thanks @crash2kx.",
        "href": "https://github.com/openclaw/openclaw/pull/88405"
      },
      {
        "title": "Reported",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents (#76284). Thanks @RicardoUKMX.",
        "href": "https://github.com/openclaw/openclaw/pull/76284"
      },
      {
        "title": "Reported",
        "description": "memory search can hit QMD SQLite lock contention during normal runtime (#66339). Thanks @SakenW.",
        "href": "https://github.com/openclaw/openclaw/pull/66339"
      }
    ],
    "fixes": [
      "Release/CI/E2E: fail early when Crabbox sparse-sync full checkouts do not have enough local disk, with guidance for moving the sync root.",
      "Build: render independent CLI startup metadata help snapshots concurrently to cut cold build-all metadata time.",
      "Plugins: stop timed-out package-boundary prep steps by process group so descendant TypeScript/helper processes do not survive local check cleanup.",
      "Control UI: serve static assets asynchronously after safe-open checks so large UI files do not block Gateway request handling.",
      "Scripts/UI: forward direct wrapper SIGHUP shutdown to child processes so terminal hangups do not leave wrapped dev commands running.",
      "Gateway: return the post-expiration pending-work revision from node drains so reconnecting nodes do not observe stale queue revisions after expired items are pruned.",
      "Release/CI/E2E: keep temporary full-sync checkouts alive while slow Crabbox leases boot, so sparse worktree runs do not lose their sync source before file-list generation.",
      "Release/CI/E2E: normalize inherited Linux `C.UTF-8` locale settings before raw AWS macOS Crabbox bootstrap commands, avoiding macOS locale warnings during package-manager hydration.",
      "Release/CI/E2E: keep gateway watch regression checks from copying large static plugin assets inside the measured idle window.",
      "Update: keep core updates nonblocking when missing external plugin repair downloads or soft plugin repair warnings would otherwise stall, pin post-core plugin compatibility to the downgraded core version, and still block installed active plugin payload smoke failures. (#84431, #87914, #87952) Thanks @TurboTheTurtle, @Niriakot, and @MukundaKatta.",
      "Agents/providers: keep streaming tool-call argument parsing record-shaped when providers emit valid non-object JSON such as `null` or arrays.",
      "Release/CI/E2E: reset incremental log readers when watched log files rotate without shrinking, so same-size replacements do not hide new readiness or RPC lines.",
      "Talk: preserve explicit `null` payloads on controller-created turn and output-audio lifecycle events.",
      "Agents/TUI: keep local custom provider runs from loading plugin runtime and auth alias metadata when plugins are disabled.",
      "Agents/TUI: restore in-flight TUI run switch-back behavior, keep no-policy native hook fallback available, guard vanished workspaces, and keep lightweight isolated subagents lightweight.",
      "Agents/media: keep async image, music, and video generation starts from ending the Codex turn, avoid duplicate generated-media fallbacks, and let mixed requests continue with summaries or other work while media renders in the background. (#89220) Thanks @omarshahine.",
      "Agents/Codex: keep public OpenAI API-key profiles from being treated as native Codex app-server auth while preserving persisted Codex OAuth sessions.",
      "Agents/Codex: stream Codex app-server final-answer partials to live reply previews, preserve ACP metadata in SQLite, prefer real tool results over synthetic repair output, prevent aborted app-server turn handles from lingering, migrate legacy OpenAI Codex `lastGood` auth state, and preserve workspace/session metadata through ACP runtime refactors. (#88405, #88724, #88730) Thanks @vincentkoc.",
      "Control UI: keep collapsed tool cards labeled with the tool name and action instead of generic output text. Thanks @shakkernerd.",
      "Agents/Codex: surface Skill Workshop guidance in Codex app-server prompts when `skill_workshop` is available. Thanks @shakkernerd.",
      "Skill Workshop: restore and localize the Control UI board/today view switcher so review workflows keep their intended layout toggle across locales. Thanks @shakkernerd.",
      "Agents/auth: write auth profiles atomically, dispatch auth failures by type, add force re-login and exhausted-failover recovery, clear legacy auto fallback pins, preserve workspaces during state-only uninstall, and compact before oversized turns so recovery paths avoid partial state. (#85798, #87484, #89181) Thanks @RomneyDa and @neeravmakwana.",
      "Skills: skip disabled skill env overrides from stale persisted snapshots so disabled skill `apiKey` SecretRefs cannot abort embedded or channel turns. (#79072, #79173) Thanks @zeus1959.",
      "Skill Workshop: render the Control UI tab from filtered navigation state and keep filtered fallback routing stable.",
      "CLI: avoid live catalog validation during `openclaw agents add`, so adding a secondary agent no longer depends on provider catalog availability. (#76284, #88314) Thanks @zhangguiping-xydt.",
      "CLI: harden CLI and plugin edge cases, and keep `plugins list --json` on the snapshot-only path so plugin sweeps avoid loading the full runtime status graph. (#88896)",
      "CLI/desktop: bridge WSL clipboard operations through the shell, recognize manual-update launchd jobs, and keep machine-readable startup output parseable during progress setup. (#88764, #88689) Thanks @alexzhu0.",
      "Plugins: make PixVerse external-plugin ClawHub metadata explicit and keep it out of bundled dist builds.",
      "Plugins: clarify plugin loader failure guidance and treat soft plugin repair warnings as nonfatal so missing or incompatible plugin packages point operators at the right repair path without blocking unrelated work. (#84431) Thanks @TurboTheTurtle.",
      "Plugins: preserve npm plugin roots after blocked installs, skip plugin-local `openclaw` peer symlinks during rollback snapshots, relink those peers after restore, isolate cached tool runtime siblings, isolate provider catalog projections and web-provider factory failures, and keep private LLM-core declarations bundled so one bad plugin does not poison sibling runtime paths. (#77237, #88767, #88807, #89336) Thanks @vincentkoc and @RomneyDa.",
      "Cron: keep SQLite cron migrations compatible with legacy run-log tables, archived job stores, diagnostic cron names, single-job run-history names, startup cron retries, and legacy one-shot delete-after-run behavior. (#88285, #88294, #89075) Thanks @kip-claw.",
      "Cron: keep update delivery validation scoped, harden restart state, and retire MCP runtimes on isolated cron cleanup.",
      "Auto-reply: guard dispatcher failure-count probes so missing optional counters do not break SDK-typed recovery paths. (#89318) Thanks @Alix-007 and @takhoffman.",
      "Memory: serialize QMD update/embed writes per store, reduce Linux watcher fan-out, avoid noisy gateway watcher warnings, retry transient FileProvider-backed reads, preserve phase signals on read errors, harden envelope metadata sanitization, reattach Linux native watchers when directories are recreated, and rewrite generated transcript paths on rollover so memory/search state survives concurrent gateway and CLI activity. (#66339, #85931, #89185, #89188, #89246, #85351) Thanks @openperf, @amittell, @RomneyDa, and @NianJiuZst.",
      "Memory: keep vector-disabled FTS indexes from resolving embedding providers during sync and search.",
      "Providers: bound generated media downloads from OpenAI, Runway, xAI, MiniMax, BytePlus, DashScope-compatible, FAL, OpenRouter, Google, Vydra, and Comfy providers.",
      "Providers: resolve Google defaults to `google-generative-ai`, register Vertex static catalog rows and `gemini-3.1-flash-lite`, align Foundry reasoning metadata, skip DeepSeek V4 thinking params on Foundry fallback, use MiniMax account OAuth endpoints, preserve Copilot Claude 1M capabilities, suppress disabled Ollama reasoning output, forward Gemini stop sequences, switch direct Gemini reasoning to native mode, strip provider self-prefixes and Kimi-incompatible Anthropic cache markers, keep OpenAI stop-finished tool calls, and avoid replay ids when the Responses store is disabled. (#88480, #88512, #88781, #89343, #89379, #89400, #76612) Thanks @coder999999999, @BryanTegomoh, @vliuyt, @charles-openclaw, @zz327455573, @849261680, and @XuZehan-iCenter.",
      "Providers: cap GitHub Copilot OAuth request timeouts before creating abort signals.",
      "Cron: retry recurring jobs after transient model rate limits before waiting for the next scheduled slot.",
      "Agents/Codex: keep live session locks during cleanup, recover interrupted CLI tool transcripts, preserve Codex auth and compaction session identity, clear orphan tool state, cap app-server idle timers, and keep media completion delivery retryable. (#88129, #88136, #88141, #88162, #88182)",
      "Chat/UI: show Gateway chat failures as visible assistant messages in the Control UI instead of only setting an invisible error state.",
      "Channels: cap Telegram, Discord, WhatsApp, Signal, Feishu, Google Chat, Microsoft Teams, QQBot, Nostr, Zalo, Zalouser, and Nextcloud-style request/retry timers; preserve SMS approval reply routes; keep iMessage typing active during tool work; allow RFC2544 benchmark ranges for QQBot token fetches; and retry WhatsApp QR login 408 timeouts. (#88183, #88948, #88984, #89015) Thanks @omarshahine, @Jensenwgd, and @sliverp.",
      "Security/config parsing: reject unsafe OAuth/token lifetimes, retry-after delays, inbound timestamps, response body sizes, command timeout config, sandbox observer token TTLs, corrupt shell snapshots, untrusted workspace setup-only channel loads, remote media reference overreads, trajectory export leaks, hooks-token auth reuse, and gateway WebSocket calls after close. (#86953, #87376, #88974, #89354, #89701) Thanks @hxy91819, @coygeek, @pgondhi987, and @RomneyDa.",
      "Providers/media: cap local service, model, usage, queue, generated media, TTS, music, workflow polling, and provider OAuth request timers across hosted and local providers.",
      "Release/CI/E2E: bound release candidate reads, beta smoke REST calls, plugin npm verification commands, changelog restore, cross-OS process groups, kitchen-sink and bundled plugin readiness probes, secret-provider probes, Telegram credential timeouts, Control UI i18n and CLI startup metadata generation, Vitest routing, dependency guard admin approvals, child workflow failure detection, quiet Node test shard stalls, dist cache restores, Docker base-image/package cleanup, and mainline test flakes. (#84988, #88127, #88137, #88155, #88160, #88966, #89169) Thanks @LibraHo and @RomneyDa.",
      "Release/CI/E2E: keep Kitchen Sink live plugin MCP probes resolving source-checkout workspace packages and align the live gauntlet with current Kitchen Sink diagnostics.",
      "Backup: accept root-relative hardlink targets during backup verification. (#89328) Thanks @abnershang.",
      "Release/CI/E2E: run the secret-provider integration proof through the repo pnpm runner so native macOS and Windows validation use the hydrated package-manager shim.",
      "Release/CI/E2E: run the Telegram desktop proof gateway through the repo pnpm runner so native macOS proof uses the hydrated package-manager shim.",
      "Docs/CI: run Mintlify anchor checks through the repo pnpm runner so docs link validation works when pnpm is only available through the hydrated package-manager shim.",
      "Agents: keep configured fallback model metadata typed so provider params, context-token caps, and media input limits do not break changed-gate typechecks.",
      "Agents: accept hidden `sessions_send` body aliases before validation while keeping the model-facing `message` schema canonical. (#88229) Thanks @zhangguiping-xydt.",
      "Chat/UI: preserve startup chat sends during history loading, unblock the initial Control UI chat send, stream chat deltas incrementally, skip markdown parsing while streaming, keep drafts local while typing, guard composer rerenders, cache chat transcript renders, record pending-send paint timing, show the Communication Notifications tab, honor Chromium executable overrides, and detect system Chromium for E2E. (#74715, #88952, #88960, #88998) Thanks @VladyslavLevchuk and @vincentkoc.",
      "Channels: stop schema-padded poll modifiers from turning normal `send` actions into invalid poll sends. (#89601) Thanks @codezz and @takhoffman.",
      "Channels: preserve long Feishu streaming replies, recover failed progress draft starts, send visible fallbacks when accepted Feishu turns produce no final reply, preserve external `sessions_send` routes, persist Discord thread bindings in SQLite, tolerate iMessage self-chat timestamp skew, preserve colon-prefixed slash commands in mention parsing, decode Nostr `npub` allowlists correctly, and suppress raw provider errors during channel delivery. (#87896, #88749, #88803, #88866) Thanks @MonkeyLeeT.",
      "Config/status/doctor: skip unresolved shell references in state-dir dotenv files, resolve gateway auth secrets during deep status audits, surface disabled Codex plugin routes in doctor lint, respect explicit PI runtime policy, report runtime tool-schema and gateway health credential errors, clear recovered embedded-run activity, migrate voice-call call logs through doctor, and keep post-upgrade JSON stable. (#88731, #88761, #88820, #88288, #89731) Thanks @brokemac79, @openperf, and @RomneyDa.",
      "Gateway/session state: list commands from the Gateway plugin registry, harden MCP loopback tool schemas, hide phantom agent-store rows from `sessions.list`, make task persistence failures explicit, support Tailscale Serve service names, guard Browser/Chrome pending attach aborts, and carry session UUIDs on interactive dispatch events. (#88305) Thanks @rohitjavvadi.",
      "Gateway/plugins: narrow plugin lookup memoization to the stable plugin/runtime inputs, avoiding repeated lookup work without mixing disabled or filtered plugin state.",
      "OpenAI/TTS: handle speed directives for OpenAI TTS voices. (#74089)",
      "CI/Crabbox: keep default runner capacity on the Azure credit-backed on-demand D4 lane with the Azure SSH port and a Git-independent full check job, so broad validation avoids low-priority spot quota stalls, hydrate port mismatches, non-Git hydrated workspaces, and stale AWS region hints.",
      "CI/Crabbox: route Crabbox wrapper and Testbox workflow edits to their regression tests so changed-test gates do not silently run zero specs.",
      "CI/workflows: route workflow sanity helper edits to their guard tests and cover composite-action input interpolation checks.",
      "CI/tooling: route CI scope, dependency, changelog, and docs helper edits to their owner tests instead of silently skipping changed-test coverage.",
      "CI/tooling: route package, release, and install helper edits to their owner tests so changed-test gates cover publish and installer script changes.",
      "CI/tooling: route shared script library edits through their owner tests so lock, process, safety, and scan helpers do not skip changed-test coverage.",
      "CI/tooling: skip expensive import-graph scans once a changed diff already requires broad fallback, keeping local changed-test planning fast while still collecting explicit owner tests.",
      "CI/tooling: route script edits through conventional owner tests when matching `test/scripts` or `src/scripts` coverage already exists.",
      "CI/tooling: honor option terminators in the memory FD repro script so follow-on arguments are not reparsed.",
      "Release/CI/E2E: assert plugin lifecycle runtime inspect output instead of only capturing it.",
      "Release/CI/E2E: make gateway-network prove the advertised health RPC and retry early WebSocket closes without burning full open timeouts.",
      "Release/CI/E2E: honor option terminators across release, Parallels smoke, plugin gauntlet, and extension-memory scripts.",
      "Release/CI/E2E: fail plugin gateway gauntlet QA chunks when the requested suite summary is missing or invalid.",
      "Performance: prebuild QA runtime probes with generated plugin assets but without CLI startup metadata.",
      "Performance: skip declaration bundling for runtime-only CLI startup and gateway watch build profiles.",
      "Performance: reuse prepared provider handles, strict tool schemas, gateway runtime metadata, session maintenance config, plugin metadata, bundled skill allowlists, package-local plugin artifacts, single-entry store writes, and validated/serialized session prompt blobs."
    ]
  },
  {
    "version": "2026.5.31",
    "date": "2026.5.31",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531",
    "features": [
      {
        "title": "Chat and Control UI responsiveness improved across streamed markdown, trans...",
        "description": "Chat and Control UI responsiveness improved across streamed markdown, transcript rendering, draft persistence, pending-send painting, scrolling, and first-message handling. (#88952, #88960, #88998) Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/issues/88952"
      },
      {
        "title": "Agent, Codex, and auth recovery is more resilient around stale bootstrap hi...",
        "description": "Agent, Codex, and auth recovery is more resilient around stale bootstrap history, legacy Codex auth state, reasoning-tag cleanup, shell snapshot validation, and automatic fallback recovery. (#87484, #88924) Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/issues/87484"
      },
      {
        "title": "Cron, channels, and session delivery now preserve external routes, include...",
        "description": "Cron, channels, and session delivery now preserve external routes, include job names in single-job history, and keep replies and state transitions clearer across restarts. (#88294, #88803) Thanks @kip-claw and @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/issues/88294"
      },
      {
        "title": "Workboard task details, Android notification app selection, and Dreaming ca...",
        "description": "Workboard task details, Android notification app selection, and Dreaming candidate scoring gained broader operator controls.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531"
      },
      {
        "title": "Control UI now streams stable Markdown blocks and records more chat respons...",
        "description": "Control UI now streams stable Markdown blocks and records more chat responsiveness signals to guide first-reply performance work.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531"
      },
      {
        "title": "Release and E2E infrastructure adds tighter package, installer, Docker, Par...",
        "description": "Release and E2E infrastructure adds tighter package, installer, Docker, Parallels, Telegram, and plugin-lifecycle proof boundaries.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026531"
      },
      {
        "title": "feat",
        "description": "add core session goals (#87469).",
        "href": "https://github.com/openclaw/openclaw/pull/87469"
      },
      {
        "title": "fix",
        "description": "keep live OpenClaw session locks during cleanup (#88129).",
        "href": "https://github.com/openclaw/openclaw/pull/88129"
      },
      {
        "title": "Fix heartbeat default run timeout (#88133)",
        "description": "Fix heartbeat default run timeout (#88133).",
        "href": "https://github.com/openclaw/openclaw/pull/88133"
      },
      {
        "title": "fix ci mainline checks (#88137)",
        "description": "fix ci mainline checks (#88137). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88137"
      },
      {
        "title": "Add plugin manifest contract for SecretRef provider integrations (#82326)",
        "description": "Add plugin manifest contract for SecretRef provider integrations (#82326). Thanks @sallyom and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/82326"
      },
      {
        "title": "fix",
        "description": "route generated media completions through requester agent (#88141).",
        "href": "https://github.com/openclaw/openclaw/pull/88141"
      },
      {
        "title": "refactor",
        "description": "share native approval route gates (#87770). Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/pull/87770"
      },
      {
        "title": "test(infra)",
        "description": "avoid max fake-timer jumps (#88155). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88155"
      },
      {
        "title": "test(unit-fast)",
        "description": "isolate fake-timer files (#88160). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88160"
      },
      {
        "title": "fix(gateway)",
        "description": "resolve message actions against runtime config (#84535). Thanks @funmerlin and @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/84535"
      },
      {
        "title": "feat",
        "description": "only include the current changelog section in tarball (#88107). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88107"
      },
      {
        "title": "fix(agents)",
        "description": "classify embedded provider business denials for fallback (#84814). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/84814"
      },
      {
        "title": "fix(agents)",
        "description": "extend terminal outcome projections (#88162).",
        "href": "https://github.com/openclaw/openclaw/pull/88162"
      },
      {
        "title": "Fix subagent DM completion delivery after yield (#88182)",
        "description": "Fix subagent DM completion delivery after yield (#88182). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/88182"
      },
      {
        "title": "Fix Codex raw image generation media projection (#88191)",
        "description": "Fix Codex raw image generation media projection (#88191). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/88191"
      },
      {
        "title": "Fix restart sentinel internal continuations (#88161)",
        "description": "Fix restart sentinel internal continuations (#88161). Thanks @joshavant.",
        "href": "https://github.com/openclaw/openclaw/pull/88161"
      },
      {
        "title": "ci: extend platform checkout fetch timeout (#88199)",
        "description": "ci: extend platform checkout fetch timeout (#88199). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88199"
      },
      {
        "title": "feat(ci)",
        "description": "autoscrub dependency lockfile-only PR changes (#87796). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/87796"
      },
      {
        "title": "perf(test)",
        "description": "fix explicit-file Vitest wrapper hangs (#88127). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88127"
      },
      {
        "title": "fix(whatsapp)",
        "description": "retry QR login 408 timeouts (#88183). Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/pull/88183"
      },
      {
        "title": "fix(ios)",
        "description": "guard websocket ping continuation (#88231). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/88231"
      },
      {
        "title": "refactor",
        "description": "extract LLM core packages (#88117).",
        "href": "https://github.com/openclaw/openclaw/pull/88117"
      },
      {
        "title": "refactor(agents)",
        "description": "type media completion delivery misses (#88250).",
        "href": "https://github.com/openclaw/openclaw/pull/88250"
      },
      {
        "title": "feat",
        "description": "add hosted model providers (#88247).",
        "href": "https://github.com/openclaw/openclaw/pull/88247"
      },
      {
        "title": "refactor",
        "description": "extract markdown core package (#88265).",
        "href": "https://github.com/openclaw/openclaw/pull/88265"
      },
      {
        "title": "refactor",
        "description": "move terminal core into package (#88279).",
        "href": "https://github.com/openclaw/openclaw/pull/88279"
      },
      {
        "title": "fix(agents)",
        "description": "harden autoreview Windows harness (#88284). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88284"
      },
      {
        "title": "Persist subagent registry in SQLite (#88260)",
        "description": "Persist subagent registry in SQLite (#88260).",
        "href": "https://github.com/openclaw/openclaw/pull/88260"
      },
      {
        "title": "refactor",
        "description": "extract media understanding common package (#88297).",
        "href": "https://github.com/openclaw/openclaw/pull/88297"
      },
      {
        "title": "fix(test)",
        "description": "include workflow lint target in routing expectation (#88310). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88310"
      },
      {
        "title": "fix(ui)",
        "description": "stop pulsing completed stream segments (#88225). Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/pull/88225"
      },
      {
        "title": "feat(ios)",
        "description": "refresh app store metadata (#88235). Thanks @ngutman.",
        "href": "https://github.com/openclaw/openclaw/pull/88235"
      },
      {
        "title": "Add per-agent SQLite cache store (#88349)",
        "description": "Add per-agent SQLite cache store (#88349).",
        "href": "https://github.com/openclaw/openclaw/pull/88349"
      },
      {
        "title": "[Fix] Deliver restart recovery replies (#86089)",
        "description": "[Fix] Deliver restart recovery replies (#86089). Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/86089"
      },
      {
        "title": "refactor(matrix)",
        "description": "move ephemeral state to plugin sqlite (#88387).",
        "href": "https://github.com/openclaw/openclaw/pull/88387"
      },
      {
        "title": "test(tasks)",
        "description": "cover task domain view mappers (#86755). Thanks @leno23.",
        "href": "https://github.com/openclaw/openclaw/pull/86755"
      },
      {
        "title": "Expose resolved subagent model metadata (#80037)",
        "description": "Expose resolved subagent model metadata (#80037). Thanks @guanbear.",
        "href": "https://github.com/openclaw/openclaw/pull/80037"
      },
      {
        "title": "feat",
        "description": "expand workboard orchestration metadata (#88408).",
        "href": "https://github.com/openclaw/openclaw/pull/88408"
      },
      {
        "title": "feat(gateway)",
        "description": "forward OpenAI stop sequences through chat completions (#87920). Thanks @Lellansin.",
        "href": "https://github.com/openclaw/openclaw/pull/87920"
      },
      {
        "title": "fix(export-html)",
        "description": "guard msg.content and result.content filter/iteration paths against non-array values (#88271). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/88271"
      },
      {
        "title": "ci: keep harness changes on fast checks (#88429)",
        "description": "ci: keep harness changes on fast checks (#88429).",
        "href": "https://github.com/openclaw/openclaw/pull/88429"
      },
      {
        "title": "Move cron persistence to SQLite (#88285)",
        "description": "Move cron persistence to SQLite (#88285).",
        "href": "https://github.com/openclaw/openclaw/pull/88285"
      },
      {
        "title": "fix(build)",
        "description": "avoid stale agent-core dts warnings (#87915). Thanks @keshavbotagent.",
        "href": "https://github.com/openclaw/openclaw/pull/87915"
      },
      {
        "title": "Refactor subagent thread binding into core (#88416)",
        "description": "Refactor subagent thread binding into core (#88416).",
        "href": "https://github.com/openclaw/openclaw/pull/88416"
      },
      {
        "title": "refactor",
        "description": "extract web content core package (#88346).",
        "href": "https://github.com/openclaw/openclaw/pull/88346"
      },
      {
        "title": "fix(responses)",
        "description": "drop orphaned assistant msg\\_\\* id when reasoning is dropped (issue 88019) (#88067). Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/pull/88067"
      },
      {
        "title": "Fix /acp spawn cwd inheritance for target agent workspaces (#82415)",
        "description": "Fix /acp spawn cwd inheritance for target agent workspaces (#82415). Thanks @summerview1997.",
        "href": "https://github.com/openclaw/openclaw/pull/82415"
      },
      {
        "title": "fix(slack)",
        "description": "preserve thread context for Agents & Assistants DM root messages (#63840). Thanks @zozo123.",
        "href": "https://github.com/openclaw/openclaw/pull/63840"
      },
      {
        "title": "fix",
        "description": "scrub serialized tool-call text from replies (#86924). Thanks @fuller-stack-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/86924"
      },
      {
        "title": "feat",
        "description": "add internal code mode namespaces (#88043).",
        "href": "https://github.com/openclaw/openclaw/pull/88043"
      },
      {
        "title": "fix(ui)",
        "description": "add agent selector to dreaming tab (#78748). Thanks @stevenepalmer.",
        "href": "https://github.com/openclaw/openclaw/pull/78748"
      },
      {
        "title": "Refactor cron migrations under doctor (#88455)",
        "description": "Refactor cron migrations under doctor (#88455).",
        "href": "https://github.com/openclaw/openclaw/pull/88455"
      },
      {
        "title": "fix(ci)",
        "description": "ignore fenced headings in proof parser (#87390). Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/pull/87390"
      },
      {
        "title": "fix(agents)",
        "description": "bound plugin system context (#87341). Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/pull/87341"
      },
      {
        "title": "Refactor browser screenshot vision through shared media understanding (#84247)",
        "description": "Refactor browser screenshot vision through shared media understanding (#84247). Thanks @scotthuang.",
        "href": "https://github.com/openclaw/openclaw/pull/84247"
      },
      {
        "title": "refactor",
        "description": "unify OpenAI provider identity (#88451).",
        "href": "https://github.com/openclaw/openclaw/pull/88451"
      },
      {
        "title": "fix issue 79380",
        "description": "[Bug]: Gateway CPU spin / crash loop on Raspberry Pi 4 (ARM64) — regression from 4.23 to 4.25+ (#79418). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/79418"
      },
      {
        "title": "fix",
        "description": "clarify generated media reply prompts (#88458).",
        "href": "https://github.com/openclaw/openclaw/pull/88458"
      },
      {
        "title": "Fix iMessage startup watch replay (#88406)",
        "description": "Fix iMessage startup watch replay (#88406). Thanks @obviyus.",
        "href": "https://github.com/openclaw/openclaw/pull/88406"
      },
      {
        "title": "docs",
        "description": "remove divider comments (#88115).",
        "href": "https://github.com/openclaw/openclaw/pull/88115"
      },
      {
        "title": "fix(webchat)",
        "description": "preserve refresh-visible history and composer state (#83992). Thanks @spacegeologist.",
        "href": "https://github.com/openclaw/openclaw/pull/83992"
      },
      {
        "title": "fix(auto-reply)",
        "description": "redact secrets in config show output (#88496). Thanks @jason-allen-oneal.",
        "href": "https://github.com/openclaw/openclaw/pull/88496"
      },
      {
        "title": "feat",
        "description": "improve MCP operator controls (#88536).",
        "href": "https://github.com/openclaw/openclaw/pull/88536"
      },
      {
        "title": "fix(openai)",
        "description": "preserve custom provider id through memory embedding adapter (#81170). Thanks @adone0.",
        "href": "https://github.com/openclaw/openclaw/pull/81170"
      },
      {
        "title": "memory-lancedb",
        "description": "add configurable timeout/retry for embedding calls (#56532). Thanks @amittell.",
        "href": "https://github.com/openclaw/openclaw/pull/56532"
      },
      {
        "title": "fix(infra)",
        "description": "guard against overwriting corrupt target session store during migration (#88018). Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/88018"
      },
      {
        "title": "fix(cron)",
        "description": "accept sub-second --at datetimes resolved in a timezone (#88185). Thanks @coder999999999.",
        "href": "https://github.com/openclaw/openclaw/pull/88185"
      },
      {
        "title": "feat",
        "description": "add scoped mention pattern policy (#70864). Thanks @patrick-slimelab.",
        "href": "https://github.com/openclaw/openclaw/pull/70864"
      },
      {
        "title": "feat",
        "description": "add mention pattern policies (#87200). Thanks @deepshekhardas.",
        "href": "https://github.com/openclaw/openclaw/pull/87200"
      },
      {
        "title": "fix(agents)",
        "description": "route per-turn media task hints below the cache boundary (#87998). Thanks @nxmxbbd.",
        "href": "https://github.com/openclaw/openclaw/pull/87998"
      },
      {
        "title": "test(plugins)",
        "description": "cover Link agent wallet bundle shape (#75181). Thanks @stainlu.",
        "href": "https://github.com/openclaw/openclaw/pull/75181"
      },
      {
        "title": "chore(lint)",
        "description": "enable object-shorthand (#81808). Thanks @tanshanshan.",
        "href": "https://github.com/openclaw/openclaw/pull/81808"
      },
      {
        "title": "refactor",
        "description": "extract media and ACP core packages (#88534).",
        "href": "https://github.com/openclaw/openclaw/pull/88534"
      },
      {
        "title": "[AI-assisted] fix(plugins)",
        "description": "scope startup metadata manifest reads (#84628). Thanks @IWhatsskill.",
        "href": "https://github.com/openclaw/openclaw/pull/84628"
      },
      {
        "title": "Refactor cron SQLite runtime paths (#88582)",
        "description": "Refactor cron SQLite runtime paths (#88582).",
        "href": "https://github.com/openclaw/openclaw/pull/88582"
      },
      {
        "title": "fix(memory)",
        "description": "retry transient embedding transport failures (#44167). Thanks @MrGeDiao.",
        "href": "https://github.com/openclaw/openclaw/pull/44167"
      },
      {
        "title": "fix(gateway)",
        "description": "guide dashboard auth after service repair (#88466). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/88466"
      },
      {
        "title": "fix(ui)",
        "description": "keep transient chat errors out of page headers (#88463). Thanks @sallyom.",
        "href": "https://github.com/openclaw/openclaw/pull/88463"
      },
      {
        "title": "refactor",
        "description": "make OpenAI Codex legacy doctor-only (#88605).",
        "href": "https://github.com/openclaw/openclaw/pull/88605"
      },
      {
        "title": "fix(browser)",
        "description": "document stable tab references (#88393). Thanks @FMLS and @hxy91819.",
        "href": "https://github.com/openclaw/openclaw/pull/88393"
      },
      {
        "title": "fix(agents)",
        "description": "classify expired thinking signatures (#88340). Thanks @Takhoffman.",
        "href": "https://github.com/openclaw/openclaw/pull/88340"
      },
      {
        "title": "fix(devices)",
        "description": "refresh paired device last-seen metadata (#81189). Thanks @vyctorbrzezowski.",
        "href": "https://github.com/openclaw/openclaw/pull/81189"
      },
      {
        "title": "fix",
        "description": "queue subagent completion handoffs (#88613).",
        "href": "https://github.com/openclaw/openclaw/pull/88613"
      },
      {
        "title": "refactor",
        "description": "move plugin state stores to SQLite (#88609).",
        "href": "https://github.com/openclaw/openclaw/pull/88609"
      },
      {
        "title": "fix(config)",
        "description": "add dropReasoningFromHistory config for openai-completions providers (issue 88068) (#88071). Thanks @chengzhichao-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/88071"
      },
      {
        "title": "fix(tasks)",
        "description": "reclaim ACP zombie runs blocking gateway restart (#88281). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/88281"
      },
      {
        "title": "[codex] fix Codex continuity projection regressions (#88407)",
        "description": "[codex] fix Codex continuity projection regressions (#88407). Thanks @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/pull/88407"
      },
      {
        "title": "fix(tui)",
        "description": "skip history reload when final event has displayable output (#88004). Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/pull/88004"
      },
      {
        "title": "fix(webchat)",
        "description": "suppress stale active session row racing a completed turn (issue 87875) (#87962). Thanks @MukundaKatta.",
        "href": "https://github.com/openclaw/openclaw/pull/87962"
      },
      {
        "title": "fix(tui)",
        "description": "use middle truncation for paths and commands in tool display (#88050). Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/pull/88050"
      },
      {
        "title": "fix(tui)",
        "description": "preserve pending local runs during session sync (#87959). Thanks @nao860226-rgb.",
        "href": "https://github.com/openclaw/openclaw/pull/87959"
      },
      {
        "title": "feat(codex)",
        "description": "add portable Codex command pickers (#82224). Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/pull/82224"
      },
      {
        "title": "fix(agents)",
        "description": "normalize prefixed Anthropic fallback model ids (issue 88560) (#88587). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88587"
      },
      {
        "title": "refactor",
        "description": "expand acp core package (#88618).",
        "href": "https://github.com/openclaw/openclaw/pull/88618"
      },
      {
        "title": "feat",
        "description": "add MCP code-mode namespace (#88636).",
        "href": "https://github.com/openclaw/openclaw/pull/88636"
      },
      {
        "title": "fix(gateway)",
        "description": "reject pre-reset run lifecycle events from clobbering the rotated session row (#88583). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/88583"
      },
      {
        "title": "fix(messages)",
        "description": "use best-effort for implicit tool-only source replies (#84232). Thanks @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/pull/84232"
      },
      {
        "title": "fix(agents)",
        "description": "preserve runtime tools in lean mode (#88381). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88381"
      },
      {
        "title": "fix(telegram)",
        "description": "preserve /usage footer for tool-only replies (#87425). Thanks @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/87425"
      },
      {
        "title": "refactor",
        "description": "clean up ACP package metadata and helpers (#88659).",
        "href": "https://github.com/openclaw/openclaw/pull/88659"
      },
      {
        "title": "fix(sms)",
        "description": "cover native proof follow-ups (#88601). Thanks @clawSean.",
        "href": "https://github.com/openclaw/openclaw/pull/88601"
      },
      {
        "title": "fix(agents)",
        "description": "report stale session locks without cleanup (#88658).",
        "href": "https://github.com/openclaw/openclaw/pull/88658"
      },
      {
        "title": "Fix Google Chat message tool thread replies (#80996)",
        "description": "Fix Google Chat message tool thread replies (#80996). Thanks @franco-viotti.",
        "href": "https://github.com/openclaw/openclaw/pull/80996"
      },
      {
        "title": "fix",
        "description": "route iMessage DM media through attachment handoff (#87904). Thanks @HOYALIM and @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/87904"
      },
      {
        "title": "feat(github-copilot)",
        "description": "add Claude Opus 4.8 to default model catalog (#88547). Thanks @saju01.",
        "href": "https://github.com/openclaw/openclaw/pull/88547"
      },
      {
        "title": "fix(slack)",
        "description": "keep one draft message in progress mode (#85612). Thanks @mycarrysun.",
        "href": "https://github.com/openclaw/openclaw/pull/85612"
      },
      {
        "title": "fix(ollama)",
        "description": "yield during dense stream processing (#87818). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/87818"
      },
      {
        "title": "refactor",
        "description": "move delivery queues to SQLite (#88665).",
        "href": "https://github.com/openclaw/openclaw/pull/88665"
      },
      {
        "title": "feat",
        "description": "add typed MCP code-mode API (#88678).",
        "href": "https://github.com/openclaw/openclaw/pull/88678"
      },
      {
        "title": "fix(agents)",
        "description": "avoid full stream replay on text deltas (#88252). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88252"
      },
      {
        "title": "refactor",
        "description": "clean up ACP translator and manager tests (#88677).",
        "href": "https://github.com/openclaw/openclaw/pull/88677"
      },
      {
        "title": "fix",
        "description": "persist ACP metadata in SQLite (#88724).",
        "href": "https://github.com/openclaw/openclaw/pull/88724"
      },
      {
        "title": "feat(plugin-sdk)",
        "description": "add typed presentation command actions (#88721).",
        "href": "https://github.com/openclaw/openclaw/pull/88721"
      },
      {
        "title": "Allow validated TXT/JSON/YAML media sends (#79658)",
        "description": "Allow validated TXT/JSON/YAML media sends (#79658). Thanks @simplyclever914.",
        "href": "https://github.com/openclaw/openclaw/pull/79658"
      },
      {
        "title": "Refresh Node Docker base image digests (#84988)",
        "description": "Refresh Node Docker base image digests (#84988). Thanks @LibraHo.",
        "href": "https://github.com/openclaw/openclaw/pull/84988"
      },
      {
        "title": "fix(memory)",
        "description": "serialize qmd update writes across processes to stop SQLITE_BUSY (#85931). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/85931"
      },
      {
        "title": "fix(codex)",
        "description": "stream final answer partials (#88730).",
        "href": "https://github.com/openclaw/openclaw/pull/88730"
      },
      {
        "title": "fix issue 76284",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents (#88314). Thanks @zhangguiping-xydt.",
        "href": "https://github.com/openclaw/openclaw/pull/88314"
      },
      {
        "title": "refactor",
        "description": "extract ACP turn runner (#88739).",
        "href": "https://github.com/openclaw/openclaw/pull/88739"
      },
      {
        "title": "refactor",
        "description": "extract ACP close session flow (#88744).",
        "href": "https://github.com/openclaw/openclaw/pull/88744"
      },
      {
        "title": "refactor",
        "description": "migrate voice-call call logs through doctor (#88731).",
        "href": "https://github.com/openclaw/openclaw/pull/88731"
      },
      {
        "title": "refactor",
        "description": "extract ACP runtime option commands (#88747).",
        "href": "https://github.com/openclaw/openclaw/pull/88747"
      },
      {
        "title": "fix(ui)",
        "description": "show Communication Notifications tab (#74715). Thanks @VladyslavLevchuk.",
        "href": "https://github.com/openclaw/openclaw/pull/74715"
      },
      {
        "title": "fix(channels)",
        "description": "recover failed progress draft starts (#88749).",
        "href": "https://github.com/openclaw/openclaw/pull/88749"
      },
      {
        "title": "fix",
        "description": "skip disabled skill snapshot env overrides (#79173). Thanks @zeus1959.",
        "href": "https://github.com/openclaw/openclaw/pull/79173"
      },
      {
        "title": "refactor",
        "description": "split ACP manager session flows (#88752).",
        "href": "https://github.com/openclaw/openclaw/pull/88752"
      },
      {
        "title": "fix(openai/tts)",
        "description": "handle [[tts:speed]] directive in OpenAI speech provider (issue 12163) (#74089). Thanks @stainlu.",
        "href": "https://github.com/openclaw/openclaw/pull/74089"
      },
      {
        "title": "fix(feishu)",
        "description": "fallback when accepted turns send no visible reply (#87896). Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/pull/87896"
      },
      {
        "title": "[codex] Surface disabled Codex plugin routes in doctor lint (#88761)",
        "description": "[codex] Surface disabled Codex plugin routes in doctor lint (#88761). Thanks @brokemac79 and @jalehman.",
        "href": "https://github.com/openclaw/openclaw/pull/88761"
      },
      {
        "title": "feat(doctor)",
        "description": "add disk space health check for state directory (#59196). Thanks @alkor2000.",
        "href": "https://github.com/openclaw/openclaw/pull/59196"
      },
      {
        "title": "fix(daemon)",
        "description": "preserve container service env across regen (#82828). Thanks @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/pull/82828"
      },
      {
        "title": "fix(models)",
        "description": "strip remaining provider self prefixes (#88781). Thanks @charles-openclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/88781"
      },
      {
        "title": "fix(update)",
        "description": "recognize manual-update launchd jobs (#88764). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88764"
      },
      {
        "title": "fix",
        "description": "resolve google provider default API to google-generative-ai (#88512). Thanks @1052326311 and @Xin.",
        "href": "https://github.com/openclaw/openclaw/pull/88512"
      },
      {
        "title": "feat",
        "description": "calm composer controls (#88772).",
        "href": "https://github.com/openclaw/openclaw/pull/88772"
      },
      {
        "title": "fix(agents)",
        "description": "cap bootstrap snapshot cache (#88149). Thanks @yozakura-ava.",
        "href": "https://github.com/openclaw/openclaw/pull/88149"
      },
      {
        "title": "Migrate iMessage monitor state to SQLite (#88797)",
        "description": "Migrate iMessage monitor state to SQLite (#88797).",
        "href": "https://github.com/openclaw/openclaw/pull/88797"
      },
      {
        "title": "fix(cron)",
        "description": "retire MCP runtimes on isolated cron timeout and dispose (#87981). Thanks @Jerry-Xin.",
        "href": "https://github.com/openclaw/openclaw/pull/87981"
      },
      {
        "title": "Persist plugin install index in SQLite (#88794)",
        "description": "Persist plugin install index in SQLite (#88794).",
        "href": "https://github.com/openclaw/openclaw/pull/88794"
      },
      {
        "title": "Preserve managed npm plugin root when install validation blocks update (#77...",
        "description": "Preserve managed npm plugin root when install validation blocks update (#77237). Thanks @zhuisDEV.",
        "href": "https://github.com/openclaw/openclaw/pull/77237"
      },
      {
        "title": "fix(config)",
        "description": "skip state-dir dotenv values that are unresolved shell references (#88288). Thanks @Alix-007.",
        "href": "https://github.com/openclaw/openclaw/pull/88288"
      },
      {
        "title": "fix(plugins)",
        "description": "isolate web provider factory failures (#88807). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88807"
      },
      {
        "title": "Persist OpenRouter model cache in SQLite (#88851)",
        "description": "Persist OpenRouter model cache in SQLite (#88851).",
        "href": "https://github.com/openclaw/openclaw/pull/88851"
      },
      {
        "title": "perf",
        "description": "streamline chat startup metadata (#88825).",
        "href": "https://github.com/openclaw/openclaw/pull/88825"
      },
      {
        "title": "fix",
        "description": "allow missing native hook relay without policy (#88620). Thanks @woodym-dotcom.",
        "href": "https://github.com/openclaw/openclaw/pull/88620"
      },
      {
        "title": "test(agents)",
        "description": "include Ollama in small live model matrix (#87838). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/87838"
      },
      {
        "title": "feat(minimax)",
        "description": "add MiniMax M3 support (#88860).",
        "href": "https://github.com/openclaw/openclaw/pull/88860"
      },
      {
        "title": "fix(browser)",
        "description": "isolate Chrome MCP pending attach aborts (#88305). Thanks @rohitjavvadi.",
        "href": "https://github.com/openclaw/openclaw/pull/88305"
      },
      {
        "title": "fix(microsoft-foundry)",
        "description": "satisfy extension lint (#88855). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88855"
      },
      {
        "title": "test",
        "description": "consolidate plugin registration contracts (#88824). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88824"
      },
      {
        "title": "test(ui)",
        "description": "remove stylesheet grep tests (#88847). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88847"
      },
      {
        "title": "test(agents)",
        "description": "use neutral tool schema fixtures (#88848). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88848"
      },
      {
        "title": "Persist Discord thread bindings in SQLite (#88866)",
        "description": "Persist Discord thread bindings in SQLite (#88866).",
        "href": "https://github.com/openclaw/openclaw/pull/88866"
      },
      {
        "title": "docs",
        "description": "clarify diffs language pack additions (#88865). Thanks @RomneyDa.",
        "href": "https://github.com/openclaw/openclaw/pull/88865"
      },
      {
        "title": "docs",
        "description": "continue inline comment pass (#88849).",
        "href": "https://github.com/openclaw/openclaw/pull/88849"
      },
      {
        "title": "fix(plugins)",
        "description": "fail closed on trusted policy errors (#88394). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88394"
      },
      {
        "title": "docs(imessage)",
        "description": "document SSH wrapper TCC send failure (#88758). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88758"
      },
      {
        "title": "fix(reply)",
        "description": "preserve sessions_send external routes (#88803). Thanks @MonkeyLeeT.",
        "href": "https://github.com/openclaw/openclaw/pull/88803"
      },
      {
        "title": "fix(cron)",
        "description": "include job name when reading single-job run history (#88294). Thanks @kip-claw.",
        "href": "https://github.com/openclaw/openclaw/pull/88294"
      },
      {
        "title": "fix",
        "description": "harden CLI and plugin edge cases (#88896).",
        "href": "https://github.com/openclaw/openclaw/pull/88896"
      },
      {
        "title": "fix(plugin-sdk)",
        "description": "isolate provider catalog projection failures (#88767). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88767"
      },
      {
        "title": "fix(agents)",
        "description": "clear legacy auto fallback pins (#87484). Thanks @neeravmakwana.",
        "href": "https://github.com/openclaw/openclaw/pull/87484"
      },
      {
        "title": "fix(diagnostics)",
        "description": "clear embedded-run activity when recovery declares lane idle (#88820). Thanks @openperf.",
        "href": "https://github.com/openclaw/openclaw/pull/88820"
      },
      {
        "title": "fix(agents)",
        "description": "strip streamed reasoning tags (#88924).",
        "href": "https://github.com/openclaw/openclaw/pull/88924"
      },
      {
        "title": "perf(ui)",
        "description": "cache chat transcript renders (#88952). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88952"
      },
      {
        "title": "perf(ui)",
        "description": "record pending send paint timing (#88960). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88960"
      },
      {
        "title": "perf(ui)",
        "description": "keep chat draft local while typing (#88998). Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/pull/88998"
      },
      {
        "title": "Reported",
        "description": "Session lock auto-cleanup on staleness detection (#87779). Thanks @todd-chisel.",
        "href": "https://github.com/openclaw/openclaw/pull/87779"
      },
      {
        "title": "Reported",
        "description": "Heartbeat scheduler silently stops dispatching polls after session compaction/recreation (#87438). Thanks @ovrsr.",
        "href": "https://github.com/openclaw/openclaw/pull/87438"
      },
      {
        "title": "Reported",
        "description": "Event-loop starvation during context compaction causes fetch timeouts (16.9s timer delay) (#86358). Thanks @Mithril1991.",
        "href": "https://github.com/openclaw/openclaw/pull/86358"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY (#86820). Thanks @kopl-blip.",
        "href": "https://github.com/openclaw/openclaw/pull/86820"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Add Xiaomi MiMo Token Plan provider support / fix Token Plan connection (#86169). Thanks @openclaws420.",
        "href": "https://github.com/openclaw/openclaw/pull/86169"
      },
      {
        "title": "Reported",
        "description": "Bug: WebSocket close before connection established causes uncaughtException crash — not covered by isBenignUncaughtExceptionError (#88257). Thanks @survivor998 and @akrimm702.",
        "href": "https://github.com/openclaw/openclaw/pull/88257"
      },
      {
        "title": "Reported",
        "description": "Gateway buffers tool-kind text instead of delivering immediately (streaming.mode partial ignored) (#66509). Thanks @gabrielduartesignart.",
        "href": "https://github.com/openclaw/openclaw/pull/66509"
      },
      {
        "title": "Reported",
        "description": "Bug: independent scripts in ~/.openclaw/extensions/ crash Gateway (missing openclaw.plugin.json) (#88198). Thanks @mmhzlrj.",
        "href": "https://github.com/openclaw/openclaw/pull/88198"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Add collapsible toggle for recent sessions section in sidebar (#85510). Thanks @NianJiuZst.",
        "href": "https://github.com/openclaw/openclaw/pull/85510"
      },
      {
        "title": "Reported",
        "description": "[Bug]: /new /reset (#49517). Thanks @KaysonYeh and @KhanCold.",
        "href": "https://github.com/openclaw/openclaw/pull/49517"
      },
      {
        "title": "Reported",
        "description": "[Bug]: No progress feedback during npm install in non-interactive (piped) mode (#82305). Thanks @SebTardif.",
        "href": "https://github.com/openclaw/openclaw/pull/82305"
      },
      {
        "title": "Reported",
        "description": "Bug: Telegram multi-image messages - first image transcribed but excluded from media header, others in media header but not transcribed (#47587). Thanks @yzjJosh.",
        "href": "https://github.com/openclaw/openclaw/pull/47587"
      },
      {
        "title": "Reported",
        "description": "Bug: update.run SIGUSR1 restart can be ignored, then future gateway.restart coalesces as already in-flight (#79577). Thanks @richardmqq and @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/pull/79577"
      },
      {
        "title": "Reported",
        "description": "update.run can report success after package swap even when gateway restart is ignored (#78110). Thanks @davelutztx and @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/pull/78110"
      },
      {
        "title": "Reported",
        "description": "Gateway restart timeout can interrupt active agent work without marking sessions for continuation (#82433). Thanks @chac4l and @wAngByg.",
        "href": "https://github.com/openclaw/openclaw/pull/82433"
      },
      {
        "title": "Reported",
        "description": "[Bug]: agents.defaults.models aliases silently re-resolve target refs to openai/<alias-key> on 5.x (#88218). Thanks @herculeanfit1.",
        "href": "https://github.com/openclaw/openclaw/pull/88218"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Show node name in exec tool call transparency message (#77719). Thanks @civiltox.",
        "href": "https://github.com/openclaw/openclaw/pull/77719"
      },
      {
        "title": "Reported",
        "description": "skill-creator: make .skill package file order deterministic (#37748). Thanks @shuofengzhang.",
        "href": "https://github.com/openclaw/openclaw/pull/37748"
      },
      {
        "title": "Reported",
        "description": "Bug: dist/export-html/template.js content.filter crash — missing Array.isArray guard in dist bundle (#88255). Thanks @survivor998.",
        "href": "https://github.com/openclaw/openclaw/pull/88255"
      },
      {
        "title": "Reported",
        "description": "[Bug]: WebChat model picker displays default model after switching sessions, even though model override is persisted (#86597). Thanks @xuli500177.",
        "href": "https://github.com/openclaw/openclaw/pull/86597"
      },
      {
        "title": "Reported",
        "description": "subagent-registry: cleanupBrowserSessionsForLifecycleEnd wrapper invoked twice for same runId in embedded mode (#68668). Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/68668"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Add human-readable live progress logs for heavy operators (#83441). Thanks @ndj888.",
        "href": "https://github.com/openclaw/openclaw/pull/83441"
      },
      {
        "title": "Reported",
        "description": "mcp/channel-bridge: pendingClaudePermissions / pendingApprovals leak — no TTL, no close-clear, no cap (#71646). Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/71646"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Azure Responses session replay keeps msg id without required reasoning after fallback (#88019). Thanks @BSG2000.",
        "href": "https://github.com/openclaw/openclaw/pull/88019"
      },
      {
        "title": "Reported",
        "description": "Approval-gate denials routed via followup-channel produce phantom 'missing tool result' synthetic placeholders (#88167). Thanks @jhartman00.",
        "href": "https://github.com/openclaw/openclaw/pull/88167"
      },
      {
        "title": "Reported",
        "description": "TUI can show error status without surfacing the run error (#85782). Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/85782"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Dashboard sidebar \"Recent\" sessions should filter by currently selected agent (#88214). Thanks @wujitianya.",
        "href": "https://github.com/openclaw/openclaw/pull/88214"
      },
      {
        "title": "Reported",
        "description": "[Slack] Subagent results lose thread_ts in DM assistant threads — cross-thread contamination with concurrent requests (#63659). Thanks @dev-ithitchhiker.",
        "href": "https://github.com/openclaw/openclaw/pull/63659"
      },
      {
        "title": "Reported",
        "description": "Control UI: Dreaming tab has no agent selector — cannot switch between agent contexts (#63558). Thanks @ttomiczek and @stevenepalmer.",
        "href": "https://github.com/openclaw/openclaw/pull/63558"
      },
      {
        "title": "Reported",
        "description": "Cron announce delivery strips plugin-canonical provider prefix after target resolution (#87905). Thanks @xmoxmo and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/87905"
      },
      {
        "title": "Reported",
        "description": "[Bug]: valid tool call XML in LLM reasoning block is sometimes executed by gateway (#85161). Thanks @syncword.",
        "href": "https://github.com/openclaw/openclaw/pull/85161"
      },
      {
        "title": "Reported",
        "description": "[Bug]: browser.upload cannot access files from managed inbound media (WebChat attachments) (#83544). Thanks @scorpiord.",
        "href": "https://github.com/openclaw/openclaw/pull/83544"
      },
      {
        "title": "Reported",
        "description": "[UX] WebChat: add a full-message reader for truncated or long messages (#84651). Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/84651"
      },
      {
        "title": "Reported",
        "description": "Bug: chat.history truncates long assistant messages at 12k chars even when they fit the history budget (#53242). Thanks @navendugoyal19.",
        "href": "https://github.com/openclaw/openclaw/pull/53242"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Gateway CPU spin / crash loop on Raspberry Pi 4 (ARM64) — regression from 4.23 to 4.25+ (#79380). Thanks @jorgemarmor.",
        "href": "https://github.com/openclaw/openclaw/pull/79380"
      },
      {
        "title": "Reported",
        "description": "[Feature Request] Allow cron jobs to set session key matching inbound DM reply routing (#80212). Thanks @SergeyKerj.",
        "href": "https://github.com/openclaw/openclaw/pull/80212"
      },
      {
        "title": "Reported",
        "description": "/skill <name> fails to invoke available skill commands in live chat (#88056). Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/pull/88056"
      },
      {
        "title": "Reported",
        "description": "Telegram edit action: support editMessageCaption and editMessageReplyMarkup for media messages (#86161). Thanks @crowneglobal and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/86161"
      },
      {
        "title": "Reported",
        "description": "[Bug]: WebChat refresh can lose visible conversation history when transcript tail is mostly internal tool traffic (#83344). Thanks @zachisfine.",
        "href": "https://github.com/openclaw/openclaw/pull/83344"
      },
      {
        "title": "Reported",
        "description": "[Bug]: memory_search tool fails with \"fetch failed\" despite embedding provider configured (#47884). Thanks @AllenSupermanxiaodingdang.",
        "href": "https://github.com/openclaw/openclaw/pull/47884"
      },
      {
        "title": "Reported",
        "description": "memory_search can stall a live session when the memory manager/tool-result path does not fail open (#49524). Thanks @liaosvcaf.",
        "href": "https://github.com/openclaw/openclaw/pull/49524"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Talk mode can speak a different answer than the Control UI when agent reply uses message_tool_only / delivery-mirror (#85275). Thanks @BsnizND and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/85275"
      },
      {
        "title": "Reported",
        "description": "Runtime sites bypass `prependSystemPromptAdditionAfterCacheBoundary`, destabilising Anthropic + OpenAI prompt caching (#85203). Thanks @AV500group.",
        "href": "https://github.com/openclaw/openclaw/pull/85203"
      },
      {
        "title": "Reported",
        "description": "[Bug]: [Windows] exec() and read() commands corrupted with </arg_value>> suffix (#48780). Thanks @koden588-blip.",
        "href": "https://github.com/openclaw/openclaw/pull/48780"
      },
      {
        "title": "Reported",
        "description": "Control UI: tool call result payload missing from expanded block (#70746). Thanks @tarvis0523.",
        "href": "https://github.com/openclaw/openclaw/pull/70746"
      },
      {
        "title": "Reported",
        "description": "[Bug]: diagnostic stuck-session recovery emits a phantom `session.recovery.requested` event when generation bumps mid-flight (#88010). Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/88010"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex bundled plugins like chrome and computer-use cannot be enabled from openclaw.json (#82216). Thanks @yaanfpv.",
        "href": "https://github.com/openclaw/openclaw/pull/82216"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex plugin binding slient replies when attaching an existing Codex CLI session on a paired node (#87721). Thanks @wingleungron.",
        "href": "https://github.com/openclaw/openclaw/pull/87721"
      },
      {
        "title": "Reported",
        "description": "claude-cli auth-epoch flips on token rotation, forcing session resets mid-conversation (#74312). Thanks @aderius.",
        "href": "https://github.com/openclaw/openclaw/pull/74312"
      },
      {
        "title": "Reported",
        "description": "[Bug] Auth router ignores provider entry's apiKey field, resolves via auth.order by canonical provider ID — wrong key for split provider entries (#67423). Thanks @presidenzo and @kinjitakabe.",
        "href": "https://github.com/openclaw/openclaw/pull/67423"
      },
      {
        "title": "Reported",
        "description": "Plugin discovery loads all dist/extensions/ manifests at boot regardless of tools.allow (~500 MB structural heap) (#70533). Thanks @jpippo364 and @IWhatsskill.",
        "href": "https://github.com/openclaw/openclaw/pull/70533"
      },
      {
        "title": "Reported",
        "description": "mediaUnderstandingProviders audio path hard-requires API key, breaking no-auth/local STT providers (#74644). Thanks @mozi1924.",
        "href": "https://github.com/openclaw/openclaw/pull/74644"
      },
      {
        "title": "Reported",
        "description": "Bug: Fallback models echo BOOT.md instructions instead of executing them (#53732). Thanks @alvaro630.",
        "href": "https://github.com/openclaw/openclaw/pull/53732"
      },
      {
        "title": "Reported",
        "description": "Bug: memory search live embedding fails ~20–40% with `fetch failed | other side closed` (provider-agnostic; upstream healthy) (#71784). Thanks @kevinheinrichs and @MrGeDiao.",
        "href": "https://github.com/openclaw/openclaw/pull/71784"
      },
      {
        "title": "Reported",
        "description": "memory reindex aborts on transient embedding transport errors instead of retrying or splitting the batch (#44166). Thanks @MrGeDiao.",
        "href": "https://github.com/openclaw/openclaw/pull/44166"
      },
      {
        "title": "Reported",
        "description": "[Bug]: auth.cooldowns config change forces full gateway restart, drops in-flight CLI runs (#88443). Thanks @MrMaturin.",
        "href": "https://github.com/openclaw/openclaw/pull/88443"
      },
      {
        "title": "Reported",
        "description": "paired_devices.createdAt / lastSeenAt are null — cannot identify stale paired clients (#81169). Thanks @deminson.",
        "href": "https://github.com/openclaw/openclaw/pull/81169"
      },
      {
        "title": "Reported",
        "description": "Shell builtins (e.g. cd) always trigger approval gate even when allowlist is configured (#46056). Thanks @aukei.",
        "href": "https://github.com/openclaw/openclaw/pull/46056"
      },
      {
        "title": "Reported",
        "description": "[Bug]: No config key to override dropReasoningFromHistory for openai-completions providers (#88068). Thanks @syncword.",
        "href": "https://github.com/openclaw/openclaw/pull/88068"
      },
      {
        "title": "Reported",
        "description": "[Bug]: slug-generator HTTP 400 misclassified as profile-wide billing failure (5h cooldown), kills all agents on profile (#71709). Thanks @nikolaykazakovvs-ux.",
        "href": "https://github.com/openclaw/openclaw/pull/71709"
      },
      {
        "title": "Reported",
        "description": "ACP zombie runs block gateway restart/update after 27 days (#88205). Thanks @subaochen.",
        "href": "https://github.com/openclaw/openclaw/pull/88205"
      },
      {
        "title": "Reported",
        "description": "[TUI] Final assistant message disappears on completion — loadHistory() clearAll() races server persistence (not a repaint bug; issue 86871 / issue 87423 does not fix it) (#87922). Thanks @darconadalabarga.",
        "href": "https://github.com/openclaw/openclaw/pull/87922"
      },
      {
        "title": "Reported",
        "description": "Bug: TUI truncates paths/commands, leaking ellipsis into model context (#87936). Thanks @Joel-Claw.",
        "href": "https://github.com/openclaw/openclaw/pull/87936"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Auth profile cooldown triggers chain exhaustion without actual Google API errors in v2026.5.26 (#87462). Thanks @fenglanhua.",
        "href": "https://github.com/openclaw/openclaw/pull/87462"
      },
      {
        "title": "Reported",
        "description": "Session file lock leak when user manually aborts agent (non-timeout abort never releases lock) (#88600). Thanks @williammu.",
        "href": "https://github.com/openclaw/openclaw/pull/88600"
      },
      {
        "title": "Reported",
        "description": "Synthetic 'missing tool result' entries injected for parallel tool calls on Anthropic Claude, despite real results being produced (#88168). Thanks @jhartman00 and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88168"
      },
      {
        "title": "Reported",
        "description": "Session JSONL lock can remain held after synthetic tool-result flush (#88647). Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88647"
      },
      {
        "title": "Reported",
        "description": "sessions_spawn(runtime=\"subagent\") ignores inherited/per-agent subagent thinking defaults and initializes children at low (#55790). Thanks @vrurg.",
        "href": "https://github.com/openclaw/openclaw/pull/55790"
      },
      {
        "title": "Reported",
        "description": "[Bug] Control UI shows wrong thinkingDefault for agents using non-default model (#81760). Thanks @caiming0331.",
        "href": "https://github.com/openclaw/openclaw/pull/81760"
      },
      {
        "title": "Reported",
        "description": "[Bug]: DeepSeek v4-pro: 400 \"reasoning_content must be passed back\" with thinking=disabled (#74374). Thanks @simmssun-hashh.",
        "href": "https://github.com/openclaw/openclaw/pull/74374"
      },
      {
        "title": "Reported",
        "description": "[Bug]: sessions.reset can be overwritten by stale lifecycle events from the old run (#88538). Thanks @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/pull/88538"
      },
      {
        "title": "Reported",
        "description": "models auth login overwrites and truncates main openclaw.json; auth-profiles.json silently wipes existing profiles (#88565). Thanks @corleonexie-maker.",
        "href": "https://github.com/openclaw/openclaw/pull/88565"
      },
      {
        "title": "Reported",
        "description": "Slack message_tool_only source replies fail because durable send requires reconcileUnknownSend (#84078). Thanks @tianxiaochannel-oss88.",
        "href": "https://github.com/openclaw/openclaw/pull/84078"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Discord mentionAliases is not applied to session reply / final assistant text, only to message tool calls (#88360). Thanks @hughbeyond.",
        "href": "https://github.com/openclaw/openclaw/pull/88360"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex transient/fresh no-context-engine starts drop prior session context after issue 88262 (#88352). Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/88352"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex resumes ignore OpenClaw-visible messages written after native binding (#88354). Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/pull/88354"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Discord DM pairing identity mismatch breaks PluralKit users; extractDiscordSessionKind regex missing \"direct\" peer kind (#86332). Thanks @Sanjays2402.",
        "href": "https://github.com/openclaw/openclaw/pull/86332"
      },
      {
        "title": "Reported",
        "description": "Session transcript `file_lock_stale` persists on 2026.5.19 with no remaining lockfile or file holder (#87217). Thanks @ruben2000de.",
        "href": "https://github.com/openclaw/openclaw/pull/87217"
      },
      {
        "title": "Reported",
        "description": "Dreaming narrative sessions become orphaned — visible in sidebar but undeletable via session management (#88322). Thanks @TheDenStudios.",
        "href": "https://github.com/openclaw/openclaw/pull/88322"
      },
      {
        "title": "Reported",
        "description": "[Bug]: renderTable misaligns borders when a wide CJK/emoji grapheme lands in a narrow (width-1) column (#88556). Thanks @jbetala7.",
        "href": "https://github.com/openclaw/openclaw/pull/88556"
      },
      {
        "title": "Reported",
        "description": "Gateway leaks undici sockets on every streamed Anthropic API call (buildManagedResponse missing finalize on GC) (#67461). Thanks @jakedwyer.",
        "href": "https://github.com/openclaw/openclaw/pull/67461"
      },
      {
        "title": "Reported",
        "description": "fix(doctor): auto-repair stale session snapshot paths on --fix instead of reporting-only (#85689). Thanks @ggzeng.",
        "href": "https://github.com/openclaw/openclaw/pull/85689"
      },
      {
        "title": "Reported",
        "description": "Group chat messages don't update in real-time on iOS — requires exit and re-entry (#80231). Thanks @jm7v7fgpdy-sketch.",
        "href": "https://github.com/openclaw/openclaw/pull/80231"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Codex model catalog cold-start miss for gpt-5.3-codex after gateway restart (#88510). Thanks @wlassalle724.",
        "href": "https://github.com/openclaw/openclaw/pull/88510"
      },
      {
        "title": "Reported",
        "description": "memoryFlush has no escalation when assistant process dies mid-flush — session permanently over threshold, every subsequent message wedges (#85645). Thanks @rhclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/85645"
      },
      {
        "title": "Reported",
        "description": "node-extra-ca-certs: CA bundle auto-injection only triggers for nvm, misses fnm/volta/asdf and 5 other version managers (#59494). Thanks @alkor2000.",
        "href": "https://github.com/openclaw/openclaw/pull/59494"
      },
      {
        "title": "Reported",
        "description": "Telegram isolated polling spool drain: ENOENT race in recoverStaleTelegramSpooledUpdateClaims (#87847). Thanks @ppanphper.",
        "href": "https://github.com/openclaw/openclaw/pull/87847"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Local model provider calls thread block gateway event loop on Windows beta; trivial infer run takes ~4 minutes (#86599). Thanks @JakeBiggs.",
        "href": "https://github.com/openclaw/openclaw/pull/86599"
      },
      {
        "title": "Reported",
        "description": "subagent_ended hook does not fire for runs created via api.runtime.subagent.run() (#59164). Thanks @Amyssjj.",
        "href": "https://github.com/openclaw/openclaw/pull/59164"
      },
      {
        "title": "Reported",
        "description": "[Bug] TypeError at prompt assembly stage when lossless-claw is enabled (reading 'length' on undefined) (#75541). Thanks @tyyim.",
        "href": "https://github.com/openclaw/openclaw/pull/75541"
      },
      {
        "title": "Reported",
        "description": "Bug: Anthropic API-key auth shows 'invalid bearer token' in status --usage, but the key works for inference (#85124). Thanks @rqlangley.",
        "href": "https://github.com/openclaw/openclaw/pull/85124"
      },
      {
        "title": "Reported",
        "description": "[Bug]: heartbeat isolatedSession rotates sessionId but reuses old transcript file (#65564). Thanks @akessel56.",
        "href": "https://github.com/openclaw/openclaw/pull/65564"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Feishu channel: message tool triggers \"missing tool result in session history\" in v2026.5.16+ (#84134). Thanks @avatasia.",
        "href": "https://github.com/openclaw/openclaw/pull/84134"
      },
      {
        "title": "Reported",
        "description": "Bug: `openclaw gateway restart` and `openclaw status` do not detect system-level systemd service (#87577). Thanks @fisherman86-ai.",
        "href": "https://github.com/openclaw/openclaw/pull/87577"
      },
      {
        "title": "Reported",
        "description": "memory search can hit QMD SQLite lock contention during normal runtime (#66339). Thanks @SakenW.",
        "href": "https://github.com/openclaw/openclaw/pull/66339"
      },
      {
        "title": "Reported",
        "description": "TUI status line shows wrong session displayName after Telegram interaction (#55354). Thanks @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/pull/55354"
      },
      {
        "title": "Reported",
        "description": "Bug: DiscordEntityCache REST entity Map grows unbounded across bot lifetime (#77975). Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/pull/77975"
      },
      {
        "title": "Reported",
        "description": "[Bug]: readPhaseSignalStore silently loses all phase signal data on non-ENOENT I/O errors (#77881). Thanks @SimbaKingjoe.",
        "href": "https://github.com/openclaw/openclaw/pull/77881"
      },
      {
        "title": "Reported",
        "description": "[Bug]: openclaw agents add blocked — cannot add Jon/Atlas as separate agents (#76284). Thanks @RicardoUKMX.",
        "href": "https://github.com/openclaw/openclaw/pull/76284"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Feishu embedded agent returns HTTP 401 \"Invalid token\" to user instead of retrying with refreshed token (#56197). Thanks @lokamir.",
        "href": "https://github.com/openclaw/openclaw/pull/56197"
      },
      {
        "title": "Reported",
        "description": "Bug: skills refresh-state workspaceVersions map retains entries after watcher teardown (#77997). Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/pull/77997"
      },
      {
        "title": "Reported",
        "description": "Bug: pre-auth bootstrap-token verify allows mutex-stall DoS without rate limit (#77978). Thanks @fede-kamel.",
        "href": "https://github.com/openclaw/openclaw/pull/77978"
      },
      {
        "title": "Reported",
        "description": "Feishu DM messages visible in Feishu history but missing from OpenClaw session (#87234). Thanks @ArthurNie.",
        "href": "https://github.com/openclaw/openclaw/pull/87234"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Uninstall deletes workspace inside .openclaw even when \"delete workspace\" is unchecked (#75052). Thanks @XueJourney.",
        "href": "https://github.com/openclaw/openclaw/pull/75052"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Support Tailscale Serve `--service` for ControlUI exposure (#88629). Thanks @resYuto.",
        "href": "https://github.com/openclaw/openclaw/pull/88629"
      },
      {
        "title": "Reported",
        "description": "[Bug]: an interrupted auth.json write (full disk / quota / power loss) corrupts the credential store and silently locks out all providers (#88028). Thanks @Feelw00.",
        "href": "https://github.com/openclaw/openclaw/pull/88028"
      },
      {
        "title": "Reported",
        "description": "Feature Request: Add speed parameter support for OpenAI TTS (#12163). Thanks @useramuser.",
        "href": "https://github.com/openclaw/openclaw/pull/12163"
      },
      {
        "title": "Reported",
        "description": "[Bug]: image_generate in isolated cron session closes turn before receiving callback — cron never completes (#88001). Thanks @nailujac.",
        "href": "https://github.com/openclaw/openclaw/pull/88001"
      },
      {
        "title": "Reported",
        "description": "bug(workboard): Control UI card settings don't persist + drag to running fails (#88592). Thanks @kzclaw.",
        "href": "https://github.com/openclaw/openclaw/pull/88592"
      },
      {
        "title": "Reported",
        "description": "session file changed while embedded prompt lock was released (#88703). Thanks @neo-hu.",
        "href": "https://github.com/openclaw/openclaw/pull/88703"
      },
      {
        "title": "Reported",
        "description": "Session key reflects origin channel, but agents may misinterpret it as current channel (#84544). Thanks @lykeion-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/84544"
      },
      {
        "title": "Reported",
        "description": "[Bug] Logger \\_meta.hostname always \"unknown\" on macOS — os.hostname() returns empty string at module-load time (#87258). Thanks @mmhzlrj.",
        "href": "https://github.com/openclaw/openclaw/pull/87258"
      },
      {
        "title": "Reported",
        "description": "[Bug]: OpenClaw 2026.5.7 subagent regression (#81214). Thanks @GreyWolfRon.",
        "href": "https://github.com/openclaw/openclaw/pull/81214"
      },
      {
        "title": "Reported",
        "description": "[BUG] (feishu) Streaming cards silently truncate long plain-text replies due to Feishu card markdown content limits (#88631). Thanks @Leorand-dev.",
        "href": "https://github.com/openclaw/openclaw/pull/88631"
      },
      {
        "title": "Reported",
        "description": "Google Gemini chat model routes to openai-responses transport (401), native @google/genai transport never selected (#88480). Thanks @azgardtek and @Xin.",
        "href": "https://github.com/openclaw/openclaw/pull/88480"
      },
      {
        "title": "Reported",
        "description": "Delivery layer: posts raw errorMessage verbatim when assistant message has stopReason=error (#69737). Thanks @alexisperumal.",
        "href": "https://github.com/openclaw/openclaw/pull/69737"
      },
      {
        "title": "Reported",
        "description": "TypeError: Cannot read properties of undefined (reading \"replace\") during embedded agent run (v2026.4.1) (#60113). Thanks @wujiaming88 and @Pluviobyte.",
        "href": "https://github.com/openclaw/openclaw/pull/60113"
      },
      {
        "title": "Reported",
        "description": "Dream diary fallback exposes raw memory staging fragments (#88391). Thanks @Carme99.",
        "href": "https://github.com/openclaw/openclaw/pull/88391"
      },
      {
        "title": "Reported",
        "description": "sessions.list returns phantom store-key entry with null updatedAt and no sessionId (#57376). Thanks @smarchetti.",
        "href": "https://github.com/openclaw/openclaw/pull/57376"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Isolated cron runs can wedge gateway (#87821). Thanks @zachisfine.",
        "href": "https://github.com/openclaw/openclaw/pull/87821"
      },
      {
        "title": "Reported",
        "description": "[Bug]: doctor emits repeated tool-policy removal audit lines at normal console level (#87798). Thanks @oalansilva and @giodl73-repo.",
        "href": "https://github.com/openclaw/openclaw/pull/87798"
      },
      {
        "title": "Reported",
        "description": "Bug: structured tool_calls with finish_reason stop are dropped as non_deliverable_terminal_turn (#88791). Thanks @kiagentkronos-cell.",
        "href": "https://github.com/openclaw/openclaw/pull/88791"
      },
      {
        "title": "Reported",
        "description": "pi-trajectory-flush timeout aborts entire agent run — should degrade gracefully (#88520). Thanks @novac42code and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88520"
      },
      {
        "title": "Reported",
        "description": "[Bug]: v2026.05.28 breaks Google Vertex Express API Key (#88816). Thanks @randompup.",
        "href": "https://github.com/openclaw/openclaw/pull/88816"
      },
      {
        "title": "Reported",
        "description": "Bug: gateway service env renders Supermemory API key as literal env reference (#88274). Thanks @mathias15010.",
        "href": "https://github.com/openclaw/openclaw/pull/88274"
      },
      {
        "title": "Reported",
        "description": "[Bug]: status --deep falsely reports gateway.auth.mode=\"none\" when token auth is configured via secret reference (#87815). Thanks @kAIborg24.",
        "href": "https://github.com/openclaw/openclaw/pull/87815"
      },
      {
        "title": "Reported",
        "description": "ensureAgentWorkspace re-seeds over wiped workspace without confirmation (#88333). Thanks @HT-Moh and @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/88333"
      },
      {
        "title": "Reported",
        "description": "Stop openai.com Codex runtime creep: respect explicit PI config (#88706). Thanks @toruvieI.",
        "href": "https://github.com/openclaw/openclaw/pull/88706"
      },
      {
        "title": "Reported",
        "description": "[Bug]: PreToolUse hook relay outage blocks trusted callback commands before ingress execution (#87543). Thanks @jsompis and @woodym-dotcom.",
        "href": "https://github.com/openclaw/openclaw/pull/87543"
      },
      {
        "title": "Reported",
        "description": "tools.config.schema.lookup on unknown path surfaces a JS TypeError to channels instead of a clean tool-result (#88813). Thanks @cjalden.",
        "href": "https://github.com/openclaw/openclaw/pull/88813"
      },
      {
        "title": "Reported",
        "description": "[Bug]: Discord reply metadata is not exposed to before_dispatch hooks (#88521). Thanks @hoyanhan.",
        "href": "https://github.com/openclaw/openclaw/pull/88521"
      },
      {
        "title": "Reported",
        "description": "Control UI: browser (F5) full-page reload re-fetches all API data — slow and state-less (#85939). Thanks @34262315716.",
        "href": "https://github.com/openclaw/openclaw/pull/85939"
      },
      {
        "title": "Reported",
        "description": "[Feature]: Emit runtime warning when Control UI config will silently reject non-secure connections (#71669). Thanks @profbernardoj.",
        "href": "https://github.com/openclaw/openclaw/pull/71669"
      },
      {
        "title": "Reported",
        "description": "Device identity generation should not depend on browser Secure Context — breaks HTTP reverse-proxy deployments (#53274). Thanks @misselvexu.",
        "href": "https://github.com/openclaw/openclaw/pull/53274"
      },
      {
        "title": "Reported",
        "description": "[Bug]: OpenClaw Mattermost message tool reports ok while filePath/attachments are not uploaded (#87930). Thanks @NewCoffee7477.",
        "href": "https://github.com/openclaw/openclaw/pull/87930"
      }
    ],
    "fixes": [
      "Chat/UI: keep first Control UI sends responsive, retain pending sends while history catches up, cache transcript renders, and avoid draft persistence or navigation churn from blocking the active conversation. (#88952, #88960, #88998) Thanks @vincentkoc.",
      "Agents/Codex/auth: repair automatic fallback state, accept supported legacy Codex app-server auth, remove stale bootstrap history, strip streamed reasoning tags, and validate shell snapshots against trusted environment data. (#87484, #88924) Thanks @RomneyDa.",
      "Cron/channels: preserve external `sessions_send` routes, include the job name in single-job history, keep Mattermost attachments on the upload path, and bound Telegram/installer/Parallels proof cleanup. (#88294, #88803) Thanks @kip-claw and @MonkeyLeeT."
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
  },
  {
    "version": "2026.5.12",
    "date": "2026.5.12",
    "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512",
    "features": [
      {
        "title": "Amazon Bedrock",
        "description": "externalize the Bedrock and Bedrock Mantle provider packages so core installs no longer pull AWS SDK dependencies unless those providers are installed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins",
        "description": "externalize Slack, OpenShell sandbox, and Anthropic Vertex so their runtime dependency cones install only when those plugins are installed.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/WebChat",
        "description": "add a persisted auto-scroll mode selector so users can keep the current near-bottom behavior, always follow streaming output, or turn automatic streaming scroll off and use the New messages button manually. Fixes #7648 and #81287. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/7648"
      },
      {
        "title": "ACP",
        "description": "add `acp.fallbacks` so ACP turns can try configured backup runtime backends when the primary backend is unavailable before any output is emitted. (#69542) Thanks @kaseonedge.",
        "href": "https://github.com/openclaw/openclaw/pull/69542"
      },
      {
        "title": "Gateway/OpenAI HTTP",
        "description": "honor `max_completion_tokens` and `max_tokens` on inbound `/v1/chat/completions` requests so client-provided token caps reach the upstream provider via `streamParams.maxTokens`, with `max_completion_tokens` taking precedence when both are sent. Thanks @Lellansin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Models/OpenAI CLI auth",
        "description": "make `openclaw models auth login --provider openai` start the ChatGPT/Codex account login by default, while `--method api-key` remains the explicit OpenAI API-key setup path.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids inside explicit SDK OAuth auth-result config patches, so provider helpers emit `google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids inside SDK OAuth auth-result default config patches, so helper-built provider auth flows emit `google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids returned by direct `openclaw models auth login --set-default` provider auth flows before writing config, so Gemini testing targets `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids in per-agent config defaults and auth patches, so agent-specific emitted config keeps targeting `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids in provider catalog rows when API-key onboarding only reapplies the agent default, so emitted config keeps testing `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids in `config set` mutation output for agent overrides and provider catalog rows, so current config emits `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize provider-qualified retired Gemini 3 Pro Preview refs during Google forward-compatible model resolution, so emitted config uses `google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize proxy-prefixed retired Gemini 3 Pro Preview catalog rows, so emitted configs use `google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids inside per-agent model overrides before writing config, so agent-specific config emits `google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired Gemini 3 Pro Preview ids in subagent, heartbeat, compaction, and subagent-tool model config during writes, so current config keeps emitting `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Docs/subagents",
        "description": "document `agents.defaults.subagents.announceTimeoutMs` in the sub-agent and configuration references. (#75509) Thanks @akrimm702.",
        "href": "https://github.com/openclaw/openclaw/pull/75509"
      },
      {
        "title": "Cron",
        "description": "add direct `cron.get`, `openclaw cron get <id>`, and agent-tool `get` support for inspecting one stored cron job by id. (#75117) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/75117"
      },
      {
        "title": "Agents/tools",
        "description": "add per-sender tool policies with canonical channel-scoped sender keys, so operators can restrict dangerous tools by requester identity across global, agent, group, core, bundled, and plugin tool surfaces. (#66933) Thanks @JerranC.",
        "href": "https://github.com/openclaw/openclaw/pull/66933"
      },
      {
        "title": "ACP",
        "description": "expose Gateway session lineage metadata through ACP session listings and session info snapshots so clients can render subagent graphs without private Gateway side channels. (#73458) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/73458"
      },
      {
        "title": "Channels/iMessage",
        "description": "add `openclaw channels status --channel <name>` filtering and document the BlueBubbles-to-imsg cutover path so operators can probe iMessage without starting both channel monitors. (#80706) Thanks @omarshahine.",
        "href": "https://github.com/openclaw/openclaw/pull/80706"
      },
      {
        "title": "CI: add a non-blocking `plugin-inspector-advisory` artifact to Plugin Prere...",
        "description": "CI: add a non-blocking `plugin-inspector-advisory` artifact to Plugin Prerelease so release runs capture bundled plugin compatibility triage without changing the blocking gate.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Runtime/Fly",
        "description": "detect Fly Machines as container environments from their runtime env vars, so gateway bind and Bonjour defaults match remote container launches. (#80209) Thanks @liorb-mountapps.",
        "href": "https://github.com/openclaw/openclaw/pull/80209"
      },
      {
        "title": "Providers/fal",
        "description": "route GPT Image 2 and Nano Banana 2 reference-image edit requests to `/edit` with `image_urls` array, enforce NB2 edit geometry using `aspect_ratio` and `resolution` params, lift Fal edit mode input-image caps to 10 for GPT Image 2 and 14 for Nano Banana 2, and allow aspect-ratio hints in edit mode. (#77295) Thanks @leoge007.",
        "href": "https://github.com/openclaw/openclaw/pull/77295"
      },
      {
        "title": "Control UI",
        "description": "show a plain HTML recovery panel when the app module never registers, giving blank dashboard pages a retry path and browser-extension troubleshooting link. Fixes #44107. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/44107"
      },
      {
        "title": "Docs",
        "description": "rename the broad tools nav to Capabilities, keep automation and agent coordination as sections, and keep the tools overview focused on tools, skills, and plugins. https://docs.openclaw.ai/tools",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Build",
        "description": "enable additional low-churn oxlint rules for promise, TypeScript, and runtime footgun checks.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Build",
        "description": "enable stricter Vitest lint rules for focused, disabled, conditional, hook, matcher, and expectation hazards.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Build",
        "description": "pin explicit oxfmt defaults in the shared formatter config to keep formatting behavior stable across upgrades.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "TypeScript",
        "description": "enable stricter compiler checks for implicit returns, side-effect imports, overrides, and unused production code.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Logging",
        "description": "add targeted model transport, payload, SSE, and code-mode diagnostics with redacted URL handling.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/code mode",
        "description": "add opt-in generic QuickJS-WASI code mode that exposes `exec`/`wait` while hiding enabled tools behind a catalog bridge.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "allow `session.agentToAgent.maxPingPongTurns` up to 20 while keeping the default at 5 for longer agent-to-agent reply chains. Fixes #52382. (#52400) Thanks @thirumaleshp.",
        "href": "https://github.com/openclaw/openclaw/pull/52400"
      },
      {
        "title": "Agents",
        "description": "add per-agent `tools.message.crossContext` overrides so sandboxed/public agents can restrict message sends to the current conversation without changing the global bot policy.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "add per-agent `tools.message.actions.allow` overrides so sandboxed/public agents can expose and enforce send-only message tools.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "omit the sandbox workspace marker from compact command progress previews while keeping internal sandbox diagnostics unchanged.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "widen progress draft command preview lines by 50% so Discord inline tool updates preserve more useful command context.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex app-server",
        "description": "retire timed-out app-server clients after bounded turn interrupts so Discord agents do not reuse a CPU-spinning Codex process after an attempt timeout.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex app-server",
        "description": "default migrated native plugin destructive-action policy to enabled while preserving explicit global and per-plugin false overrides.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Build",
        "description": "upgrade workspace package management to pnpm 11 and keep Docker, install, update, and release workflows on the pnpm 11 config surface. (#79414) Thanks @altaywtf.",
        "href": "https://github.com/openclaw/openclaw/pull/79414"
      },
      {
        "title": "Build",
        "description": "align Telegram QA workflows and git source installs with the pnpm 11 workspace build allowlist surface. (#80588) Thanks @altaywtf.",
        "href": "https://github.com/openclaw/openclaw/pull/80588"
      },
      {
        "title": "Models",
        "description": "add provider-level `localService` startup for on-demand local model servers before OpenAI-compatible requests, including one-shot model probes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "trim default system prompt guidance and send-only message tool schemas to reduce prompt tokens while preserving GPT-5 personality guidance.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Context",
        "description": "add `/context map` to send a treemap image of the current session context contributors. (#79867)",
        "href": "https://github.com/openclaw/openclaw/pull/79867"
      },
      {
        "title": "Slack",
        "description": "add `unfurlLinks` and `unfurlMedia` config for bot `chat.postMessage` replies, including per-account overrides, so Slack link and media previews can be suppressed without workspace-wide settings. Fixes #48435. (#80145) Thanks @esegev1 and @HemantSudarshan.",
        "href": "https://github.com/openclaw/openclaw/pull/80145"
      },
      {
        "title": "Slack",
        "description": "add explicit `replyBroadcast` support for text and Block Kit thread replies so agents can opt into Slack's parent-channel `reply_broadcast` behavior. (#64365) Thanks @tony88331.",
        "href": "https://github.com/openclaw/openclaw/pull/64365"
      },
      {
        "title": "Slack",
        "description": "preserve mention target/source metadata in inbound prompt context so agents can distinguish direct bot mentions from implicit thread wakes that mention someone else. Fixes #79025. (#75356) Thanks @tmimmanuel.",
        "href": "https://github.com/openclaw/openclaw/pull/75356"
      },
      {
        "title": "Slack",
        "description": "canonicalize outbound delivery-mirror routes for native DM channel IDs to the peer user session so `message.send` calls to `D...` targets do not split the same Slack DM thread into a channel session. Fixes #80091. (#80111) Thanks @bek91.",
        "href": "https://github.com/openclaw/openclaw/pull/80111"
      },
      {
        "title": "Plugin SDK",
        "description": "deprecate public subpaths that existed for at least one month and have no bundled extension production imports, keep legacy barrel/test/zod subpath package exports for backwards compatibility, and track both sets in the SDK surface report.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "deprecate public subpaths currently used by only one or two bundled plugin owners, keeping them importable while steering new plugin code to focused shared SDK seams or plugin-owned APIs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "remove the owner-specific `provider-auth-login` public subpath after moving Chutes, GitHub Copilot, and OpenAI Codex auth flows back to provider-owned modules.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "remove provider-specific model, stream, and xAI compatibility helpers from public exports after moving bundled callers to provider-owned modules.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "expose runtime-supplied active model metadata to native plugin tool factories for diagnostics and plugin-owned policy decisions. Fixes #77857. Thanks @jamiezigelbaum.",
        "href": "https://github.com/openclaw/openclaw/issues/77857"
      },
      {
        "title": "QA/Mantis",
        "description": "add Telegram live PR evidence automation with Convex-leased credentials, Crabbox transcript capture, motion GIF previews, and inline PR comments.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "add a Telegram desktop scenario builder that leases Crabbox, installs native Telegram Desktop, configures an OpenClaw Telegram gateway with leased bot credentials, and records VNC screenshot/video artifacts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add realtime voice diagnostics for speaker turns, playback resets, barge-in detection, and audio cutoff analysis.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Talk",
        "description": "add `talk.realtime.instructions` so operators can append realtime voice style instructions while preserving OpenClaw's built-in agent-consult guidance. (#79081) Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/pull/79081"
      },
      {
        "title": "Discord/voice",
        "description": "default test and source installs to the pure-JS `opusscript` decoder by ignoring optional native `@discordjs/opus` builds, avoiding slow native addon compiles outside dedicated voice-performance lanes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add an opt-in native `@discordjs/opus` install script and decoder preference for live voice-performance lanes without charging unrelated Docker/tests for native addon builds.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add `voice.allowedChannels` to restrict voice joins and bot voice-state moves to configured channels while preserving open voice behavior when unset.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/skills",
        "description": "add an opt-in private skill archive upload install path gated by `skills.install.allowUploadedArchives`, so trusted Gateway clients can stage and install zip-backed skills only when operators explicitly enable the code-install surface. (#74430) Thanks @samzong.",
        "href": "https://github.com/openclaw/openclaw/pull/74430"
      },
      {
        "title": "Codex app-server",
        "description": "enable Codex native code-mode-only for harness threads so deferred OpenClaw dynamic tools run through Codex's own searchable code execution surface instead of a PI-style wrapper.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace pins and patch targets, including ACPX `@agentclientprotocol/claude-agent-acp` `0.33.1`, Codex ACP `0.14.0`, Baileys `7.0.0-rc10`, Google GenAI `2.0.1`, OpenAI `6.37.0`, AWS SDK `3.1045.0`, Kysely `0.29.0`, Tlon skill `0.3.6`, Aimock `1.19.5`, and tsdown `0.22.0`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace pins for Anthropic SDK, Smithy shared ini loading, Playwright, YAML, Aimock, TypeScript native preview, Vitest, Oxlint/Oxfmt, Vite, and pnpm 11.1.0.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Dependencies",
        "description": "hard-pin non-peer direct dependency specs across bundled packages and add a changed-check guard so runtime installs resolve the exact versions tested by maintainers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Dependencies",
        "description": "move embedded Pi packages to the `@earendil-works` namespace, refresh Twitch Twurple packages, and move `@openclaw/fs-safe` from the GitHub release pin to the published npm package.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Build",
        "description": "route Testbox changed-check delegation through Crabbox and remove the OpenClaw-specific Blacksmith Testbox helper scripts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/compaction",
        "description": "preserve scoped background exec/process session references across embedded compaction and after-turn runtime contexts without exposing sessions from unrelated scopes. Fixes #79284. (#79307) Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/79307"
      },
      {
        "title": "Agents/process",
        "description": "tell agents to inspect background sessions with `process log` before sending interactive input and to use `waitingForInput`/`stdinWritable` hints from `log`/`poll`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "CLI/onboarding",
        "description": "improve setup, onboarding, configure, and channel command wayfinding so terminal flows explain the next useful command instead of relying on terse setup labels.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/Codex",
        "description": "remove the configurable Codex dynamic-tools profile so Codex app-server always owns workspace, edit, patch, exec, process, and plan tools while OpenClaw integration tools remain available.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "macOS app",
        "description": "update the Peekaboo bridge dependency to Peekaboo 3.0.0.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace pins and move the WhatsApp plugin from `@whiskeysockets/baileys` to `baileys` while keeping the `7.0.0-rc10` runtime.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "add bundled-plugin session actions, `sendSessionAttachment`, and Cron-backed `scheduleSessionTurn`/tag cleanup under the grouped session namespace. Replaces #75578/#75581/#75588 and part of #73384/#74483. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/issues/75578"
      },
      {
        "title": "Plugin SDK/media-understanding",
        "description": "add `extractStructuredWithModel(...)` plus the optional provider-side `extractStructured(...)` seam so trusted plugins can run bounded image-first structured extraction with optional supplemental text context through provider-owned runtimes such as Codex.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Exec approvals",
        "description": "add `tools.exec.commandHighlighting` so parser-derived command highlighting in approval prompts can be enabled globally or per agent. (#79348) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/79348"
      },
      {
        "title": "Codex app-server",
        "description": "mirror native Codex subagent spawn lifecycle events into Task Registry so app-server child agents appear in task/status surfaces without relying on transcript text. (#79512) Thanks @mbelinky.",
        "href": "https://github.com/openclaw/openclaw/pull/79512"
      },
      {
        "title": "Skills",
        "description": "add `skills.load.allowSymlinkTargets` so intentional symlinked skill folders can resolve into trusted sibling repos without disabling root containment.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/tools",
        "description": "add core Tool Search so agents can search and call large OpenClaw, MCP, and client tool catalogs through one compact PI bridge.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Doctor",
        "description": "warn when a per-agent model config omits the `fallbacks` key and `agents.defaults.model.fallbacks` is non-empty. Covers both string-form (`\"model\": \"...\"`) and partial-object form (`\"model\": { \"primary\": \"...\" }`) â€” both silently clobber the defaults chain at runtime. Use `\"fallbacks\": []` to explicitly opt out of fallbacks, or add `\"fallbacks\": [...]` to inherit or override. Fixes #79369.",
        "href": "https://github.com/openclaw/openclaw/issues/79369"
      },
      {
        "title": "Chat commands",
        "description": "add `/think default` and `/fast default` to clear session overrides and inherit configured/provider defaults. (#79385) Thanks @VACInc.",
        "href": "https://github.com/openclaw/openclaw/pull/79385"
      },
      {
        "title": "Dependencies",
        "description": "refresh workspace dependency pins and lockfile, including `@openai/codex` `0.130.0`, `acpx` `0.7.0`, AWS SDK `3.1044.0`, OpenTelemetry `0.217.0`, `typebox` `1.1.38`, `vite` `8.0.11`, `oxfmt` `0.48.0`, and `oxlint` `1.63.0`, and update the Codex harness model snapshot for the new bundled app-server catalog.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/install",
        "description": "add guarded plugin install overrides so onboarding and repair tests can route specific plugins to registry specs or local `npm pack` artifacts via environment variables.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Tests/Docker",
        "description": "add Codex on-demand install and live plugin-tool dependency E2E lanes for packaged onboarding and npm-pack plugin proof.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/ACPX",
        "description": "accept an optional `args` array in `agents.<name>` config so paths and flag values containing spaces stay intact when spawning ACP agent processes. Thanks @TheArchitectit and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents",
        "description": "inject the current provider/model identity into system prompts, including configured prompt overrides and CLI hook prompt replacements, so agents can answer model-identity questions from the actual runtime selection.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/subagents",
        "description": "add prompt-only `agents.defaults.subagents.delegationMode` and per-agent overrides with `suggest`/`prefer` modes, and centralize config-backed system prompt resolution across embedded, CLI, compaction, and command-export prompt surfaces.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/subagents",
        "description": "add stronger delegation orchestration guidance, `sessions_yield` wait guidance, stable `taskName` aliases, and active-child runtime prompt context for spawned sub-agent work.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/CLI",
        "description": "add the optional bundled `oc-path` plugin, providing `openclaw path` for surgical `oc://` access to markdown, JSONC, and JSONL workspace files.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/SDK",
        "description": "add unified model catalog registration for text, image, video, and music providers, including `providerCatalogEntry` manifests, shared media list help, live catalog caching, and per-model video capability overlays.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "add presentation helpers for controls-only interactive rendering and opt-in empty fallback text so rich channel renderers can share `MessagePresentation` semantics without duplicating native cards or components.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "CLI",
        "description": "make parser, startup, config, guardrail, channel, agent, task, session, and MCP failures explain what happened and point to the next recovery command.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "GitHub Copilot",
        "description": "refresh the model catalog from `${baseUrl}/models` so per-account entitlement and accurate context windows surface at runtime; static manifest catalog (now including `gpt-5.5`) remains the fallback when discovery is disabled or the API is unreachable.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Active Memory",
        "description": "support concrete `plugins.entries.active-memory.config.toolsAllow` recall tool names for custom memory plugins while keeping the built-in memory-core default on `memory_search`/`memory_get` and preserving `memory_recall` automatically for `plugins.slots.memory: \"memory-lancedb\"`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Active Memory",
        "description": "report normal `NONE` recall decisions as `status=no_relevant_memory`, keep unavailable and failed recall paths distinct, and avoid caching no-summary recall results so ordinary no-context turns no longer look like broken `status=empty` memory. Fixes #79812. (#80015) Thanks @TurboTheTurtle.",
        "href": "https://github.com/openclaw/openclaw/pull/80015"
      },
      {
        "title": "Telegram",
        "description": "share the grammY API throttler across polling and ad hoc send clients for the same bot token, so visible draft previews and CLI sends use one quota gate. Thanks @anagnorisis2peripeteia.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize retired `google/gemini-3-pro-preview` and `google-gemini-cli/gemini-3-pro-preview` selections to `google/gemini-3.1-pro-preview` before they are written to model config.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "emit canonical `google/gemini-3.1-pro-preview` ids from configured provider catalog rows so model list and selection paths can test Gemini 3.1 instead of retired Gemini 3 Pro.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "normalize nested proxy-provider catalog ids like `google/gemini-3-pro-preview` to `google/gemini-3.1-pro-preview`, so Kilo-style configured catalogs test Gemini 3.1 instead of the retired Gemini 3 Pro id.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize provider-onboarding model alias maps so setup flows preserve settings under `google/gemini-3.1-pro-preview` instead of re-emitting retired Gemini 3 Pro config keys.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize retired Gemini 3 Pro Preview ids inside Google dynamic model resolution so runtime clones also use `google/gemini-3.1-pro-preview`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Google/Gemini",
        "description": "canonicalize provider-auth default model results before setup hooks and picker returns so auth flows do not re-emit retired `google/gemini-3-pro-preview` selections.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/doctor",
        "description": "avoid full-array sorting while selecting ClawHub search/archive results and bounded dreaming doctor entries. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Agents/compaction",
        "description": "keep contributor diagnostics to a bounded top-three selection without sorting the full history. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Sessions/UI",
        "description": "avoid full-array sorting while selecting ACPX leases, Google Meet calendar events, and latest chat sessions. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "mark direct `deliverOutboundPayloads` and legacy reply-dispatch bridges as deprecated compatibility substrate, enrich `sendDurableMessageBatch` with explicit durable send outcomes, migrate bundled send/turn paths off deprecated APIs, and enforce the split with `check:deprecated-api-usage`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "OpenAI/Talk",
        "description": "let browser realtime Talk, Gateway relay/Voice Call realtime bridges, and OpenAI realtime transcription use `openai-codex` OAuth when no direct API key is configured, make Google Meet `test_speech` honor `mode: \"bidi\"`, expose Control UI launch options for provider/model/voice/transport/VAD/reasoning, and update the default OpenAI realtime voice model to `gpt-realtime-2`. Thanks @Solvely-Colin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "title": "Agents/harness",
        "description": "skip tool-result middleware validation when no handler is registered, and sanitize incoming tool result `details` (functions, symbols, bigints, cycles, oversized payloads) before middleware sees them. Tool emitters legitimately produce raw dependency payloads on `details`, and the harness owes any registered middleware a JSON-safe view of that payload; otherwise a no-op middleware (e.g. bundled `tokenjuice` on the `pi` runtime) causes the validator to reject every tool result and silently substitute a failure sentinel, dropping outbound Discord messages, exec output, cron results, and any other tool whose payload carries non-serializable values. Thanks @solomonneas.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Runtime/install",
        "description": "raise the supported Node 22 floor to `22.16+` so native SQLite query handling can rely on the `node:sqlite` statement metadata API while continuing to recommend Node 24. (#78921)",
        "href": "https://github.com/openclaw/openclaw/pull/78921"
      },
      {
        "title": "Discord/voice",
        "description": "make duplicate same-guild auto-join entries resolve to the last configured channel so moving an agent between voice channels does not keep joining the stale channel.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add realtime `/vc` modes so Discord voice channels can run as STT/TTS, a realtime talk buffer with the OpenClaw agent brain, or a bidi realtime session with `openclaw_agent_consult`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add bounded realtime gateway logs for voice channel joins, realtime model/voice selection, transcripts, consult routing/answers, and playback start, allow OpenAI realtime Discord sessions to disable input-triggered response interruption for echo-heavy rooms while keeping explicit Discord barge-in available for new and already-active speakers, and allow voice turns to target an existing Discord channel agent session.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "add `voice.realtime.minBargeInAudioEndMs` and let the realtime provider own playback clearing, so speaker echo no longer cuts OpenAI realtime model audio at `audioEndMs=0` while low-echo rooms can opt back into immediate barge-in with `0`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "make `agent-proxy` the default voice mode so realtime voice acts as the microphone/speaker extension of the routed OpenClaw agent session, with `stt-tts` remaining available as an explicit fallback.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "route default `agent-proxy` realtime turns through the OpenClaw consult handoff with owner-level tool access and a forced-consult transcript fallback, matching the Codex-style voice front end while keeping the routed agent authoritative.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "keep OpenAI realtime bidi consults quiet while the supervisor agent is still working, accept Codex-style `conversation.item.done` function-call events, and preserve continuing tool results through the gateway relay so the OpenAI realtime bridge reliably routes consults before speaking the final answer.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "include a bounded one-line STT transcript preview in verbose voice logs so live voice debugging shows what speakers said before the agent reply.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex app-server",
        "description": "pin the managed Codex harness and Codex CLI smoke package to `@openai/codex@0.129.0`, defer OpenClaw integration dynamic tools behind Codex tool search by default, and accept current Codex service-tier values so legacy `fast` settings survive the stable harness upgrade as `priority`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex app-server",
        "description": "annotate message-tool-only direct chat turns in the dynamic `message` tool spec so visible replies are sent through `message(action=\"send\")` instead of staying private. (#79704)",
        "href": "https://github.com/openclaw/openclaw/pull/79704"
      },
      {
        "title": "Agents/PI",
        "description": "route explicit OpenAI Codex Responses runs through PI's native WebSocket-capable transport and remove OpenClaw's custom OpenAI Responses WebSocket stack while preserving auth injection, run abort signals, and prompt cache boundary stripping.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Models/config",
        "description": "allow `compat.thinkingFormat` values `qwen` and `qwen-chat-template` for configured OpenAI-compatible Qwen models, preserving them through catalog normalization and mapping `/think` levels to `enable_thinking` or `chat_template_kwargs.enable_thinking`. Fixes #79677. (#79777) Thanks @indulgeback.",
        "href": "https://github.com/openclaw/openclaw/pull/79777"
      },
      {
        "title": "Codex app-server",
        "description": "default implicit local stdio app-server permissions to guardian when Codex system requirements disallow the YOLO approval, reviewer, or sandbox value, including hostname-scoped remote sandbox entries, avoiding turn-start failures on managed hosts that permit only reviewed approval or narrower sandboxes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord/voice",
        "description": "keep TTS playback running when another user starts speaking, ignore new capture during playback to avoid feedback loops, and downgrade expected receive-stream aborts to verbose diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "iMessage",
        "description": "expose native private-API message actions through `imsg rpc` for reactions, edits, unsends, replies, rich sends, attachments, and group management when `imsg status --json` reports the required bridge capabilities.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/tasks",
        "description": "reconcile stale CLI run-context tasks whose live run context disappeared even when a child session row remains, and apply the default bounded reload deferral timeout to channel hot reloads so stale task records cannot block Discord/Slack/Telegram reloads forever.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/restart",
        "description": "expose `skipDeferral` on the `gateway.restart.request` RPC and add `openclaw gateway restart --safe --skip-deferral` so operators can bypass the safe-restart deferral gate when a pinned task run prevents the OpenClaw-aware restart from draining. Surfaces the existing internal `scheduleGatewaySigusr1Restart({ skipDeferral })` semantics added in #71637 to a public surface, complementing `gateway.reload.deferralTimeoutMs`. Refs #76162. Thanks @solomonneas.",
        "href": "https://github.com/openclaw/openclaw/issues/71637"
      },
      {
        "title": "Discord/streaming",
        "description": "default Discord replies to progress draft previews so tool/work activity appears in one edited Discord message unless `channels.discord.streaming.mode` is set to `off`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Channels/plugins",
        "description": "show configured official external channels as missing-plugin status rows and send errors with exact install/doctor repair commands after raw package-manager upgrades leave Feishu or WhatsApp uninstalled. Fixes #78702 and #78593. Thanks @MarkMa84 and @mkupiainen.",
        "href": "https://github.com/openclaw/openclaw/issues/78702"
      },
      {
        "title": "Matrix",
        "description": "move the Matrix channel back to an official external ClawHub/npm plugin so core installs no longer need Matrix SDK runtime dependencies.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "title": "Codex app-server",
        "description": "release the session lane after a completed assistant message item goes quiet without `turn/completed`, and stop global rate-limit notifications from keeping stuck turns alive.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "title": "Windows/restart",
        "description": "skip duplicate scheduled-task `/Run` calls when the gateway task is already running, using a locale-stable PowerShell task-state probe before retrying. Fixes #52044. (#52487) Thanks @andyk-ms.",
        "href": "https://github.com/openclaw/openclaw/pull/52487"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACP bridge",
        "description": "relay Gateway exec approval prompts from active ACP turns to the ACP client's `session/request_permission` handler before resolving the Gateway approval. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex/plugins",
        "description": "enable migrated source-installed `openai-curated` Codex plugins in the same Codex harness thread with explicit `codexPlugins` config, cached app readiness, and fail-closed destructive-action policy. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Codex/plugins",
        "description": "enforce native plugin destructive-action policy with Codex app-level `destructive_enabled` config instead of OpenClaw-maintained per-tool deny lists, leave plugin app `open_world_enabled` on by default, and invalidate existing plugin app thread bindings so old generated app config is rebuilt. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACPX/Codex",
        "description": "preserve trusted Codex project declarations when launching isolated Codex ACP sessions, avoiding interactive trust prompts in headless runs. Thanks @Stedyclaw.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACPX/Codex",
        "description": "reap stale OpenClaw-owned ACPX/Codex ACP process trees on startup and after ACP session close, preventing orphaned harness processes from slowing the Gateway. Thanks @91wan.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACP bridge",
        "description": "implement stable session list, resume, and close handlers so ACP clients can page Gateway sessions, rebind existing sessions without replay, and close bridge sessions cleanly. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACP bridge",
        "description": "replay complete ledger-backed ACP sessions on load, including user prompts, tool updates, session metadata, and usage snapshots, while keeping older sessions on the existing transcript fallback. Thanks @amknight.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "ACP sessions",
        "description": "allow parent agents to inspect and message their own spawned cross-agent ACP sessions without enabling broad agent-to-agent visibility. Thanks @barronlroth.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Talk/voice",
        "description": "unify realtime relay, transcription relay, managed-room handoff, Voice Call, Google Meet, VoiceClaw, and native clients around a shared Talk session controller and add the Gateway-managed `talk.session.*` RPC surface.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Diagnostics/Talk",
        "description": "export bounded Talk lifecycle/audio metrics and session recovery metrics through OpenTelemetry and Prometheus without exposing transcripts, audio payloads, room ids, turn ids, or session ids.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Logging/Talk",
        "description": "route shared Talk lifecycle events into bounded file and OTLP log records while keeping transcript text, audio payloads, turn ids, call ids, and provider item ids out of logs.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Voice Call/realtime",
        "description": "add opt-in OpenClaw agent voice context capsules and consult-cadence guidance so Gemini/OpenAI realtime calls can sound like the configured agent without consulting the full agent on every ordinary turn. Thanks @scoootscooob.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Telegram/streaming",
        "description": "keep draft preview rotation from reusing a pre-tool assistant preview after visible tool or media output lands between compaction replay and the next assistant message. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Telegram/performance",
        "description": "skip non-forum topic-cache setup, defer status reaction variant work until reactions are needed, and reuse ack reaction gating during message context assembly. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "CLI/migrate",
        "description": "leave already configured target Codex plugins unchecked in the interactive plugin selector and show a `plugin exists` conflict hint while keeping new plugin activations selected by default. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "CLI/migrate",
        "description": "return cleanly without apply confirmation when interactive Codex migration leaves both skill copies and native plugin activations unselected. Thanks @kevinslin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/sessions",
        "description": "extend the per-call sessions-list `rowContext` cache with memoization for `resolveSessionDisplayModelIdentityRef`, thinking metadata, and `resolveModelCostConfig` so deterministic per-row resolvers run once per unique `(provider, model[, agentId])` tuple instead of once per session. Cuts CPU on `sessions.list` for stores with many sessions sharing a small set of model tuples; behavior is unchanged for callers that pass no `rowContext`. Thanks @rolandrscheel.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Cron CLI",
        "description": "add `openclaw cron list --agent <id>`, normalize the requested agent id, and include jobs without a stored agent id under the configured default agent while keeping `cron list` unfiltered when no agent is supplied. Fixes #77118. Thanks @zhanggttry.",
        "href": "https://github.com/openclaw/openclaw/issues/77118"
      },
      {
        "title": "Slack/performance",
        "description": "reduce message preparation, stream recipient lookup, and thread-context allocation overhead on Slack reply hot paths. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/chat",
        "description": "strip untrusted sender metadata from live streams and transcript display, preserve canvas preview anchors, and stop operator UI clients from injecting their internal client id as sender identity. Fixes #78739. Thanks @tmimmanuel, @guguangxin-eng, @hclsys, and @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/78739"
      },
      {
        "title": "Control UI/chat",
        "description": "collapse consecutive duplicate text messages into one bubble with a count so repeated text-only messages stay compact without hiding nearby context.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/chat and Sessions",
        "description": "label inherited thinking defaults separately from explicit overrides while preserving provider-supplied option labels. Fixes #77581. Thanks @BunsDev and @Beandon13.",
        "href": "https://github.com/openclaw/openclaw/issues/77581"
      },
      {
        "title": "Agents/runtime",
        "description": "add prepared runtime foundation contracts for carrying provider, model, tool, TTS, and outbound runtime facts through later reply-path migrations. Thanks @mcaxtr.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/WhatsApp",
        "description": "keep Show QR available for unlinked WhatsApp accounts while switching linked accounts to the explicit Relink action and showing Wait for scan only when a QR is active. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/performance",
        "description": "reuse the compatible plugin metadata snapshot across dashboard and channel agent turns so auto-enabled runtime config does not repeatedly rescan plugin metadata before provider calls. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/performance",
        "description": "reuse current plugin metadata for provider activation, auth/env candidate lookup, and bundle settings during dashboard and channel agent turns while keeping the configless secret-target cache unscoped and refusing stale unscoped reuse when plugin discovery roots differ. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/performance",
        "description": "avoid resolving plugin auto-enable metadata twice in one runtime config pass, reducing repeated dashboard turn metadata scans. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/performance",
        "description": "pre-scope config tab schemas before rendering, load Channels with cached/runtime status before manual probes, preserve channel rows through failed status summaries, and keep stale slow probes from replacing newer snapshots. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Auth/providers",
        "description": "pass `config` and `workspaceDir` lookup context through to provider-id resolution so workspace-scoped auth aliases resolve correctly when no explicit alias map is supplied. Thanks @shakkernerd.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Gateway/diagnostics",
        "description": "add startup phase spans, active work labels, stale terminal bridge markers, and opt-in sync-I/O tracing in `pnpm gateway:watch` so slow Gateway turns are easier to attribute from logs and stability diagnostics.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "add an opt-in Discord thread attachment before/after scenario that creates a real thread, calls `message.thread-reply` with `filePath`, and captures baseline/candidate screenshot evidence.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Discord",
        "description": "preserve `filePath` and `path` attachments when replying to a thread with the message tool.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "add visual desktop tasks with Crabbox MP4 recording, screenshot capture, and optional image-understanding assertions, and preserve video artifacts in Mantis before/after reports.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/WhatsApp",
        "description": "add `pnpm openclaw qa whatsapp` for live DM canary and pairing-gate coverage using two pre-linked WhatsApp Web sessions from the QA credential pool.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "CI/Crabbox",
        "description": "default owned AWS fallback to `standard` multi-region capacity with broker hints enabled, reserving `beast` for explicit CPU-bound maintainer lanes.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/install",
        "description": "run managed npm-root install, rollback, repair, and uninstall mutations with legacy peer resolution so removing one plugin cannot rehydrate a stale registry `openclaw` package into the shared root. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "add `openclaw/plugin-sdk/channel-message` lifecycle helpers for `defineChannelMessageAdapter`, `deliverInboundReplyWithMessageSendContext`, send/receive/live/state contracts, durable final-delivery capability derivation, capability proof helpers, and normalized message receipts.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "add `createChannelMessageAdapterFromOutbound` so channel plugins can derive durable message adapters from proven outbound adapters without duplicating send/receipt bridge code.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "add `actions.prepareSendPayload(...)` so channel plugins can shape message-tool sends into durable payloads while core owns queueing, hooks, retry, recovery, and acknowledgements.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "make the legacy `channel-reply-pipeline` subpath a compatibility wrapper over the shared reply core while steering root compat deprecations toward `plugin-sdk/channel-message`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK",
        "description": "move Discord, Slack, Mattermost, and Matrix live-preview finalization onto `plugin-sdk/channel-message` and attach message receipts to Telegram finalized previews plus Teams native stream finals, so preview edits and stream finals are represented in the message lifecycle instead of draft-only helpers.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Telegram",
        "description": "persist the polling restart watermark after successful update dispatch instead of at handler entry, leaving failed updates retryable while still coalescing completed offsets safely.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "expose reusable atomic replacement, sibling-temp writes, and cross-device move fallback helpers through `plugin-sdk/security-runtime`, and move OpenClaw's duplicated safe filesystem write paths onto the shared `@openclaw/fs-safe` package.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "route browser, media, channel, and QA external output producers through staged fs-safe writes before final publication. (#78768)",
        "href": "https://github.com/openclaw/openclaw/pull/78768"
      },
      {
        "title": "Plugin SDK/fs-safe",
        "description": "rename the public temp workspace helpers to `tempWorkspace`, `withTempWorkspace`, `tempWorkspaceSync`, and `withTempWorkspaceSync`, matching the cleaner `@openclaw/fs-safe` API before the package is published.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Core/performance",
        "description": "trim reply payload routing, heartbeat filtering, tool display, core tool assembly, channel directory, task status, and Slack approval formatting helper chains with direct bounded scans. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Control UI/performance",
        "description": "keep chat, config, and channel refreshes responsive by decoupling slow history/schema/status work, reducing the client history window, and logging over-budget chat/config renders. Refs #77060, #45698, #47979, #44107. Thanks @BunsDev.",
        "href": "https://github.com/openclaw/openclaw/issues/77060"
      },
      {
        "title": "QA/Mantis",
        "description": "reuse Crabbox desktop/browser capture tooling and pnpm store caches during Slack desktop smoke runs, reducing per-scenario setup work before screenshots and videos are captured.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "add Slack desktop hydrate modes and per-phase timing reports so warm prehydrated VNC leases can skip source install/build while cold runs still prove the full source checkout.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "pass the runtime env through desktop-browser Crabbox and artifact-copy child commands, so embedded Mantis callers can provide Crabbox credentials without mutating the parent process. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "return the copied Slack desktop screenshot path even when remote Slack QA fails, so the CLI still prints the failure screenshot artifact. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "QA/Mantis",
        "description": "accept Blacksmith Testbox `tbx_...` lease ids from desktop smoke warmup, so provider overrides do not fail before inspect/run. Thanks @vincentkoc.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Plugins/SDK",
        "description": "add bounded `before_agent_finalize` retry instructions so workflow plugins can request one more model pass. Thanks @100yenadmin.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
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
        "title": "Gateway/OpenAI-compatible Chat Completions",
        "description": "support function `tools`, `tool_choice`, `tool_calls`, and `role: \"tool\"` follow-up turns while keeping tool-call stream finalization aligned with the command result and reporting client-tool name conflicts as invalid requests. (#66278) Thanks @Lellansin.",
        "href": "https://github.com/openclaw/openclaw/pull/66278"
      },
      {
        "title": "Providers/Mistral",
        "description": "add `mistral-medium-3-5` to the bundled catalog with reasoning support. Thanks @sliekens.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Docs/Mistral",
        "description": "document Medium 3.5 setup, local infer smoke usage, adjustable reasoning, and the Mistral HTTP 400 caveat for `reasoning_effort=\"high\"` with `temperature: 0`.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Channels/iMessage",
        "description": "remove the bundled BlueBubbles channel surface and deprecate BlueBubbles-backed iMessage setup in OpenClaw. Existing `channels.bluebubbles` configs must migrate to `channels.imessage` using `imsg` on a signed-in Mac or an SSH wrapper, and non-macOS default `imsg` configs now report remote-Mac wrapper guidance.",
        "href": "https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#2026512"
      },
      {
        "title": "Proxy",
        "description": "replace OpenClaw managed HTTP/WebSocket/fetch interception internals with Proxyline while preserving Gateway loopback routing policy. (#79857) Thanks @jesse-merhi.",
        "href": "https://github.com/openclaw/openclaw/pull/79857"
      }
    ],
    "fixes": [
      "Agents: honor `OPENCLAW_WORKSPACE_DIR` when resolving the default agent workspace, preserving explicit config precedence while keeping env-backed deployments out of the system prompt fallback path. Fixes #66786.",
      "Doctor/Codex: stop warning that the message tool is unavailable for source-reply paths where OpenClaw grants `message` at runtime, keeping update and doctor output aligned with the OpenAI happy path. Thanks @pashpashpash.",
      "Channels/Weixin: bump the external Weixin catalog entry to `@tencent-weixin/openclaw-weixin@2.4.3` with the matching package integrity. (#81730) Thanks @scotthuang.",
      "Agents/subagents: apply `agents.defaults.subagents.model` before target agent primary models during `sessions_spawn`, so model-scoped runtimes such as `claude-cli` stay attached to default child runs. Fixes #81395. (#81783) Thanks @joshavant.",
      "Telegram: keep Bot API polling alive during main event-loop stalls by moving ingress to an isolated worker with a durable local spool. Fixes #81132. (#81746) Thanks @joshavant.",
      "Telegram: preserve rendered HTML formatting through lazy cron announce delivery so Markdown links stay clickable instead of falling back to literal anchor tags. Fixes #81742. (#81758)",
      "Telegram: skip unmentioned group media before download when `requireMention` is active, avoiding failed media-download replies for messages that should be ignored. Fixes #81181. (#81785) Thanks @joshavant.",
      "CLI/plugins: keep bare plugin and parent-command help on the lightweight path, avoiding plugin registry discovery before rendering help.",
      "Gateway/session history: carry monotonic transcript message sequence through live updates and refresh SSE history when stale sequence input would otherwise append bad incremental state. (#81474) Thanks @samzong.",
      "Security/sandbox: include Windows `USERPROFILE` in the sandbox blocked home roots so credential-bearing binds (such as `.codex`, `.openclaw`, or `.ssh` under the Windows user profile) are denied even when `HOME` points at a different shell home. (#63074) Thanks @luoyanglang.",
      "Models config/auth: stop inferring provider env-var markers from broad `^[A-Z_][A-Z0-9_]*$` strings, and resolve config-backed provider `apiKey` values only through structured env SecretRefs (`secrets.providers[id]` / `secrets.defaults`), so unrelated env vars cannot accidentally become provider credentials. Thanks @sallyom.",
      "Media fetch: skip allocating and buffering the response body for bodyless media responses (HEAD probes and 204-style empty bodies), avoiding wasted heap on streams that carry no payload. Thanks @shakkernerd.",
      "CLI/onboarding: forward provider-specific auth flags (e.g. `--openai-api-key`) through the onboarding wizard so they reach provider auth methods via `ctx.opts`, letting `--openai-api-key \"$OPENAI_API_KEY\"` skip the redundant \"use existing env var?\" prompt in non-interactive harnesses. (#81669) Thanks @sjf.",
      "CLI/migrate: drop trailing periods from Codex migrate item messages and `REASON_CODE_MESSAGES` strings so plan/result rows read as labels instead of sentence fragments. (#81705) Thanks @sjf.",
      "Slack: treat malformed private-file redirect `Location` headers as unfollowable redirects instead of failing Slack media downloads.",
      "Plugins: discover provider plugins from `setup.providers[].envVars` credentials during provider discovery while keeping the deprecated `providerAuthEnvVars` fallback. (#81542) Thanks @JARVIS-Glasses.",
      "Docs/Codex harness: clarify that per-agent `CODEX_HOME` isolates `~/.codex` while inherited `HOME` intentionally keeps `.agents` discovery and subprocess user-home state available.",
      "Auth: reclaim dead-owner stale file locks before retrying locked writes, so crashed OAuth refreshes no longer wedge `auth-profiles.json` until manual cleanup.",
      "CLI tables: preserve muted/color styling on wrapped continuation lines after multiline cells, keeping `openclaw plugins list` descriptions readable.",
      "Process execution: collapse case-insensitive duplicate child environment keys on Windows so caller-provided overrides such as `PATH` cannot be shadowed by host `Path`.",
      "Gateway/diagnostics: suppress cold-start liveness warnings during the startup grace window while still sampling liveness metrics. Fixes #79915. (#81699) Thanks @joshavant.",
      "Codex harness: keep `oauthRef`-backed Codex OAuth profiles usable and stop high-confidence app-server OAuth refresh invalidation from retry-spamming raw token-refresh errors without turning entitlement or usage-limit payloads into re-auth prompts.",
      "Browser CLI: request the existing `operator.admin` gateway scope explicitly for browser control commands, avoiding unnecessary scope-upgrade approval loops. Fixes #81555. (#81716) Thanks @joshavant.",
      "Plugin SDK: restore the deprecated `openclaw/plugin-sdk/memory-core` package subpath as an alias of `memory-host-core`, so published memory companion plugins that still import it resolve on current hosts.",
      "Control UI/i18n: use the installed workspace pi runtime for locale refreshes, update the fallback package pin, prefer the Anthropic CI provider when available, and skip invalid provider credentials instead of failing main.",
      "Codex harness: classify native app-server token-refresh logout and relogin failures as authentication refresh errors, so users get re-authentication guidance instead of a raw runtime failure.",
      "Codex startup: treat selectable configured OpenAI agent models as Codex runtime requirements during plugin auto-enable, startup planning, and doctor install repair, so Anthropic-primary configs can still switch to OpenAI/Codex cleanly.",
      "Agents: preserve source-reply delivery metadata when merging tool-returned media into the final reply, keeping message-tool-only replies deliverable and mirrored. Thanks @pashpashpash and @vincentkoc.",
      "Replies: treat rich presentation, interactive controls, and channel-native payload data as outbound content across follow-up, heartbeat, cron, ACP, and block-streaming delivery paths, preventing card/button-only replies from being dropped as empty.",
      "WebChat/TUI: route Codex `tools.message` source replies to the active internal UI turn and mirror them to session history, so message-tool-only harness replies, including rich presentation and button-only replies, no longer disappear while WebChat and TUI remain non-targetable outbound channels. (#81586) Thanks @pashpashpash.",
      "Replies: deliver rich-only block replies even when block-streaming coalescing is enabled, keeping card and button payloads from being dropped by the text coalescer. Thanks @pashpashpash.",
      "macOS/companion: require system TLS trust before pinning a first-use direct `wss://` gateway certificate and honor `gateway.remote.tlsFingerprint` as the explicit pin for remote node-mode sessions, so fresh endpoints fail closed when macOS cannot trust the certificate unless configured out of band. Fixes #50642. Thanks @BunsDev.",
      "Update: snapshot config before update-time repair and restart writes, preserve plugin install records through doctor cleanup, and keep update-time config size drops from blocking the update while pointing users to the pre-update backup. Fixes #80077. (#80257) Thanks @Jerry-Xin and @vincentkoc.",
      "Sessions/status: classify ACP spawn-child sessions as `kind: \"spawn-child\"` instead of `\"direct\"` in `openclaw sessions` and status output; extract the duplicated session-kind classifier into a shared helper (`src/sessions/classify-session-kind.ts`) so both surfaces stay in sync. Fixes catalog #19. (#79544)",
      "Sessions/Gateway: report `agentRuntime.id: \"acpx\"` (or stored backend id) with `source: \"session-key\"` for ACP control-plane session rows in `openclaw sessions --json`, `openclaw status`, and Gateway session RPC responses instead of the incorrect `\"auto\"` / `\"pi\"` implicit fallback. Fixes catalog #18. (#79550)",
      "Telegram: delete tool-progress-only draft bubbles before rotating to the real answer, preventing orphaned progress messages in streamed replies.",
      "Codex app-server: keep per-agent `CODEX_HOME` isolation without rewriting `HOME` by default, so Codex-run subprocesses can still find normal user-home config, tokens, and CLI state unless the launch explicitly overrides `HOME`. Thanks @pashpashpash.",
      "iMessage: stop sending visible `<media:image>` placeholder text for media-only native image sends while preserving the internal echo key that prevents self-echo duplicate replies. (#81209) Thanks @homer-byte.",
      "Agents/sessions: create configured agent main sessions before first `sessions_send` or gateway send, so agent-to-agent messages no longer fail when the target agent has not started yet.",
      "Google models: honor configured `reasoning: false` when resolving thinking policy, preventing non-thinking Google/Gemma models from advertising `thinking=medium`. Fixes #81424.",
      "gateway: pass Talk session scope to resolver [AI]. (#81379) Thanks @pgondhi987.",
      "Gateway protocol: require v4 clients and stream explicit chat `deltaText`/`replace` frames so SDK clients can consume assistant updates without local diffing. (#80725) Thanks @samzong.",
      "GitHub Copilot: exchange OAuth tokens for Copilot API tokens on image understanding requests and route Gemini image payloads through Chat Completions, fixing Copilot Gemini image descriptions. (#80393, #80442) Thanks @afunnyhy.",
      "Gateway: hide pending Node pairing commands, capabilities, and permissions until approval, and refresh the live approved surface when pairings change. (#80741) Thanks @samzong.",
      "Plugins/Feishu/WhatsApp/Line: enforce inbound media size caps while reading download streams, avoiding full buffering of oversized attachments. (#81044, #81050) Thanks @samzong.",
      "Plugins/install: limit install-time code safety scans to plugin-owned runtime entrypoints while keeping dependency manifest denylist checks, so trusted packages with large dependency trees no longer get blocked or warned on third-party runtime internals.",
      "Config: serialize and retry semantic config mutations centrally, so concurrent commands can rebase safe changes instead of clobbering or hand-rolling command-local retry loops. (#76601)",
      "Installer: honor `--no-git-update` for existing git checkouts before resolving release refs, preventing pinned source installs from moving during reinstall.",
      "Plugins/install: refresh OpenClaw-managed peer dependency pins when installed plugin peer ranges change, while preserving user-owned dependency pins.",
      "Require approval for setup-code device pairing [AI]. (#81292) Thanks @pgondhi987.",
      "Plugins/install: preserve third-party peer dependencies in the managed npm root when later plugin installs or updates recalculate the shared dependency tree. Thanks @shakkernerd.",
      "Plugins/memory: prefer the npm-installed memory-lancedb plugin over the bundled fallback during duplicate resolution, keeping Active Memory's `memory_recall` tool visible after managed installs. Fixes #81193. Thanks @julio-arcila.",
      "Plugins/uninstall: prune managed third-party peer dependencies after their owning npm plugin is removed, without blocking plugin cleanup on peer-prune failures.",
      "Docker: pin setup-time container paths so stale host `.env` OpenClaw paths cannot leak into Linux containers. Fixes #80381. (#81105) Thanks @brokemac79.",
      "Channels/WeCom: refresh the official onboarding install to `@wecom/wecom-openclaw-plugin@2026.5.7` and update existing managed npm installs instead of failing on the package directory. Fixes #79884. (#80390) Thanks @brokemac79.",
      "Anthropic: reseed Claude CLI fresh-session retries from bounded OpenClaw transcript history after session rotation, preventing conversation amnesia. Fixes #80905. (#80934) Thanks @bitloi.",
      "Require explicit browser device pairing [AI]. (#81289) Thanks @pgondhi987.",
      "Require Control UI pairing before proxy-scoped access [AI]. (#81288) Thanks @pgondhi987.",
      "Installer: honor `--version` for git installs and install from the checked-in lockfile, preventing recent dependency pins from tripping pnpm's minimum-release-age gate during tag installs.",
      "Agents: deliver same-process subagent completion handoffs through the in-process agent dispatcher instead of opening a Gateway RPC loopback.",
      "Harden trusted-proxy source validation [AI]. (#81290) Thanks @pgondhi987.",
      "Agents: add permissive item schemas to array tool parameters before provider submission, preventing OpenAI-compatible schema validation from rejecting plugin tools that omit `items`. Fixes #81175. (#81217) Thanks @JARVIS-Glasses.",
      "Agents: escalate LLM idle watchdog timeouts through profile rotation and configured model fallback instead of leaving agent turns stuck after a silent model stream. Fixes #76877. (#80449) Thanks @jimdawdy-hub.",
      "Discord voice: treat OpenAI Realtime startup auth failures as fatal, suppress duplicate realtime error logs, and stop autoJoin from retrying the same broken voice channel until credentials are fixed.",
      "ACPX: stop forwarding unsupported timeout config options to Claude ACP while preserving OpenClaw's own turn timeout. (#80812) Thanks @sxxtony.",
      "Session transcripts: redact sensitive message content in the centralized JSONL append path so CLI turns, gateway transcript injection, transcript mirrors, and guarded tool results use the same configured redaction behavior. Fixes #73565. Refs #73563. (#79645) Thanks @Ziy1-Tan.",
      "Channels/iMessage: ignore Apple link-preview plugin payload attachments when users paste URLs, keeping the URL text while avoiding phantom media context. (#79374) Thanks @homer-byte.",
      "Telegram: detect polling stalls from `getUpdates` liveness only, so outbound API calls no longer mask dead inbound polling; log polling-cycle starts after transport rebuilds. Fixes #78473.",
      "fix: scan plugin runtime entries during install [AI]. (#80998) Thanks @pgondhi987.",
      "fix(plugins): scan installed dependency runtime code [AI]. (#81066) Thanks @pgondhi987.",
      "Inherit tool restrictions for delegated sessions [AI]. (#80979) Thanks @pgondhi987.",
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
      "Bundled MCP: inline local `$ref` parameter schemas before exposing tools, so Notion-style `oneOf` inputs validate through the bridge. Fixes #78737.",
      "Sessions: redact persisted tool result detail metadata before writing transcripts so diagnostic secrets do not survive tool output redaction. (#80444) Thanks @nimbleenigma.",
      "Codex runtime: allow the official installed `@openclaw/codex` package to use its private task-runtime and MCP projection SDK helpers, fixing `MODULE_NOT_FOUND` during migrated OpenAI/Codex beta runs.",
      "Codex migration: make Enter activate the highlighted checkbox row before continuing, so `Skip for now` and bulk-selection rows work even when planned items start preselected.",
      "Codex harness: keep auth-profile-backed media tools such as `image_generate` available when OpenAI auth lives in the agent's auth-profile store instead of environment variables.",
      "WhatsApp/install: allow Baileys' pinned libsignal git subdependency under pnpm 11 so source installs and local checks can complete.",
      "Require auth for sandbox browser CDP relay [AI]. (#81002) Thanks @pgondhi987.",
      "fix: detect carried exec command forms [AI]. (#81000) Thanks @pgondhi987.",
      "Reject truncated exec approval commands [AI]. (#81001) Thanks @pgondhi987.",
      "Enforce inline shell wrapper payload matching [AI]. (#80978) Thanks @pgondhi987.",
      "fix(node-pairing): replace changed pending requests [AI]. (#80894) Thanks @pgondhi987.",
      "Rate limit Google Chat webhook requests [AI]. (#80974) Thanks @pgondhi987.",
      "Docker: mount the auth-profile secret key directory so OAuth-backed auth profiles survive container rebuilds. (#80991)",
      "Onboarding: accept Codex auth profiles for canonical OpenAI model checks, avoiding false missing-auth warnings. (#80913) Thanks @rubencu.",
      "fix(feishu): normalize webhook rate-limit client keys [AI]. (#80975) Thanks @pgondhi987.",
      "fix(auth): prevent bootstrap pairing scope changes [AI]. (#80976) Thanks @pgondhi987.",
      "Validate Control UI loopback retry endpoints [AI]. (#80900) Thanks @pgondhi987.",
      "Harden exported markdown link rendering [AI]. (#80902) Thanks @pgondhi987.",
      "fix(gateway): honor minimal discovery mode for wide-area DNS-SD [AI]. (#80903) Thanks @pgondhi987.",
      "slack: enforce reaction notification policy [AI]. (#80907) Thanks @pgondhi987.",
      "Enforce gateway command scopes by caller context [AI]. (#80891) Thanks @pgondhi987.",
      "Telegram/groups: in single-account setups, treat an explicit empty `accounts.<id>.groups: {}` map the same as undefined so the root `channels.telegram.groups` allowlist still applies, instead of silently dropping every group update under the default `groupPolicy: \"allowlist\"`. Multi-account semantics are unchanged so per-account explicit-empty groups still scope-disable a single account without affecting siblings; the explicit way to block all groups for any account remains `groupPolicy: \"disabled\"`. Fixes #79427. (#81030) Thanks @kinjitakabe.",
      "Codex (app-server): project user-configured `mcp.servers` into new Codex thread configs, matching the codex-cli runtime's existing `-c mcp_servers=...` behavior so app-server-runtime agents see the same user MCP servers the CLI runtime already exposes. Plugin-curated apps remain attached via the separate `apps` config patch. Fixes #80814. Thanks @kinjitakabe.",
      "Enforce Slack plugin approval button authorization [AI]. (#80899) Thanks @pgondhi987.",
      "Recognize PowerShell -ec inline commands [AI]. (#80893) Thanks @pgondhi987.",
      "fix(qqbot): authorize approval button callbacks [AI]. (#80892) Thanks @pgondhi987.",
      "Telegram: render supported HTML tags in streamed and durable replies instead of showing literal markup. (#80977)",
      "Scrub streamable MCP redirect headers [AI]. (#80906) Thanks @pgondhi987.",
      "fix(memory-wiki): require admin scope for ingest [AI]. (#80897) Thanks @pgondhi987.",
      "memory-wiki: require write scope for Obsidian search [AI]. (#80904) Thanks @pgondhi987.",
      "WhatsApp: externalize the channel as a ClawHub/npm plugin outside the core npm runtime bundle, and bump Baileys to `7.0.0-rc11` so libsignal resolves from the registry instead of a GitHub tarball.",
      "WhatsApp: keep optional audio decoding dependencies local to the external plugin so the core npm install no longer pulls WhatsApp-only media helpers.",
      "Build: skip copied metadata for bundled plugins that are excluded from build entries, preventing update/status rebuilds from advertising missing QQ Bot runtime files. (#80925)",
      "Control UI/sessions: nest subagent sessions under their parent session in the session picker dropdown using a visual `â””â”€ ` prefix, making the parent-child relationship clear. Fixes #77628. (#78623) Thanks @chinar-amrutkar.",
      "Auto-reply: surface a visible error when the configured model backend fails and fallback produces no visible reply, while preserving intentional silent turns and side-effect-only deliveries. (#80917) Thanks @dutifulbob.",
      "Agents/exec: skip redundant heartbeat wake-ups for subagent session exec completions, preventing spurious LLM invocations on parent sessions. Fixes #66748. (#66749) Thanks @ggzeng.",
      "Provider streams: keep OpenAI-compatible SSE and JSON fallback streams draining across split chunks and fail Azure Responses streams with a bounded first-event diagnostic instead of stalling. Refs #80926. (#80927) Thanks @galiniliev and @CaptainTimon.",
      "Agents: rewrite generic provider internal errors with support request IDs into user-friendly transient error copy. (#49401) Thanks @y471823206.",
      "WhatsApp: finish handling pending debounced inbound messages before closing the socket. (#81246) Thanks @mcaxtr.",
      "CLI/commitments: write `--json` output to stdout instead of diagnostic logs so automation can parse commitment list and dismiss results. (#81215) Thanks @giodl73-repo.",
      "Update: allow pnpm GitHub-source OpenClaw updates to approve the OpenClaw package build, so source installs complete their prepare/prepack lifecycle. (#81294) Thanks @fuller-stack-dev.",
      "Telegram: preserve supported HTML tags in visible replies and durable mirrors so formatted messages render correctly instead of degrading to escaped text. (#80977) Thanks @obviyus.",
      "Plugins/runtime: attribute deprecated runtime config load/write warnings to the plugin id and source that triggered them so logs and plugin doctor runs are actionable. Refs #81394. (#81425) Thanks @BKF-Gitty.",
      "Agents/cron: honor a cron payload's explicit `timeoutSeconds` for the LLM idle watchdog even when it numerically equals `agents.defaults.timeoutSeconds`, preserving explicit per-run timeout intent and preventing stalled streaming replies from being cut to the implicit 120s cap. (#79426) Thanks @legolaz8451.",
      "Codex app-server: keep the short post-tool completion watchdog armed across dynamic tool completion bookkeeping so embedded Codex runs fail fast and release their session lane when Codex goes quiet after a tool result. (#81697) Thanks @mbelinky.",
      "Control UI/WebChat: wrap long inline code tokens inside chat bubbles instead of clipping them at the bubble edge. Fixes #81932. (#81931) Thanks @galiniliev.",
      "CLI/media: render terminal QR codes with full-block characters by default so the bundled `qrcode` terminal renderer does not emit a pathologically dense ANSI final row in compact half-block mode that breaks scanning in some terminals. Fixes #77820. Thanks @KrasimirKralev.",
      "Agents/compaction: read post-compaction AGENTS.md refresh context from the queued run workspace instead of the runner process cwd, so CLI-backed follow-up turns re-inject the correct workspace startup rules after compaction. Fixes #70541. (#75532) Thanks @vyctorbrzezowski.",
      "Agents/read tool: treat positive offsets beyond EOF as empty ranges instead of surfacing the upstream read error, so stale pagination cursors no longer crash tool calls while unrelated read failures still fail loud. Fixes #62466. (#75536) Thanks @vyctorbrzezowski.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview refs left in Google API-key onboarding model allowlists and fallbacks, so setup-emitted config keeps testing `google/gemini-3.1-pro-preview` instead of `google/gemini-3-pro-preview`.",
      "Telegram/context: bound selected topic context to the active session so messages from before `/new` or `/reset` are not replayed into later turns. (#80848) Thanks @VACInc.",
      "Docs/providers/openai: clarify that OpenAI Realtime voice goes through the OpenAI Platform Realtime API and requires Platform credits — Codex/ChatGPT subscription quota does not cover this route. Fixes #76498. Thanks @lonexreb.",
      "Google/Gemini: normalize retired nested Gemini 3 Pro Preview ids when resolving exact configured proxy-provider refs, so `kilocode/google/gemini-3-pro-preview` resolves to `kilocode/google/gemini-3.1-pro-preview` for Gemini 3.1 testing.",
      "CLI: strip generic OSC terminal escape payloads from sanitized output fields, preventing clipboard/title escape bodies from leaking into commitment tables and other terminal-safe text. Thanks @shakkernerd.",
      "Codex app-server: match connector-backed plugin approval elicitations by stable connector id so enabled destructive actions no longer fall through to display-name-only rejection.",
      "Build: replace selected build utility `tsx` preloads with Node native type stripping so Node 26 build paths no longer emit `DEP0205` module loader deprecation warnings. (#78584) Thanks @keshavbotagent.",
      "Media generation: honor configured music and video generation timeouts when tool calls omit `timeoutMs`, matching image generation behavior. (#80687)",
      "CLI/update/status: label beta-channel plugin fallback and model-pricing refresh failures as warnings, keeping mixed beta/latest plugin cohorts visible without making core update or Gateway reachability look failed. Fixes #80689. Thanks @BKF-Gitty.",
      "Doctor/plugins: relink managed npm plugin `openclaw` peer dependencies during `doctor --fix`, while refusing to follow package-local `node_modules` symlinks outside the plugin package. (#77412) Thanks @TheCrazyLex.",
      "iMessage: route inbound tapbacks as reaction system events instead of normal messages, defaulting to bot-authored-message notifications while allowing `reactionNotifications: \"off\" | \"own\" | \"all\"` overrides. Fixes #60274; refs #39031 and #39322. Thanks @hyperclaw.",
      "Control UI/performance: scope Nodes polling to the active Nodes tab, debounce stale session-list reconciliation, and bound chat-side session refreshes so long-running dashboards avoid background reload churn. Thanks @BunsDev.",
      "Plugins/channels: explain bundled channel entry files that reach the legacy plugin loader as setup-runtime loader mismatches instead of generic missing-register failures. Thanks @chinar-amrutkar.",
      "Plugins/session-end: fire a typed `session_end` plugin hook with reason `shutdown` (or `restart` when a restart is expected) for every session that was still active when the gateway process stops. Previously SIGTERM/SIGINT/restart paths closed the gateway without enumerating active sessions, leaving downstream `session_end` plugins (e.g. claude-mem) with ghost rows accumulating across restarts. The new shutdown finalizer drains an in-memory tracker that is populated by `session_start` and forgotten by replace / reset / delete / compaction emitters, so previously-finalized sessions are never double-fired. The drain is bounded to a 2 s total budget so a slow plugin cannot block process exit. Adds `\"shutdown\"` and `\"restart\"` to `PluginHookSessionEndReason`. Fixes #57790. Thanks @pandadev66.",
      "Codex app-server: clamp Codex code-mode sandboxing to workspace-write when an OpenClaw sandbox is active, preventing Docker gateway socket access from becoming a danger-full-access Codex turn.",
      "TUI: exit immediately on Ctrl+C/SIGINT after gateway disconnect and bound shutdown drain so terminal teardown cannot strand sessions. Fixes #75379. (#75381) Thanks @udaymanish6.",
      "Matrix: default outbound markdown tables to bullet lists instead of fenced code blocks. Fixes #78990. (#80890) Thanks @kinjitakabe.",
      "Bonjour/Gateway: treat active ciao probing and fresh name-conflict renames as in-progress so the mDNS watchdog waits for probe settlement before retrying, preventing rapid re-advertise loops on Windows, WSL, and other multicast-hostile hosts. (#74778) Refs #74242. Thanks @fuller-stack-dev.",
      "Providers/MiniMax: send a minimal Anthropic-compatible user fallback when message conversion filters a turn to an empty payload, so MiniMax M2.7 no longer returns `chat content is empty` after tool-heavy sessions. Fixes #74589. Thanks @neeravmakwana and @DerekEXS.",
      "Tools/media: preserve implicit allow-all semantics from `tools.alsoAllow`-only policies when preconstructing built-in media generation and PDF tools, so configured media tools become live without forcing `tools.allow: [\"*\", ...]`. Fixes #77841. Thanks @trialanderrorstudios.",
      "Codex/Telegram: separate code-mode tool progress from final replies, render bridged tool calls with native tool labels, and repair persisted missing tool results for safer follow-up turns. (#80663) Thanks @jalehman.",
      "Memory/search: load the platform-specific `sqlite-vec-<platform>-<arch>` variant directly when the meta `sqlite-vec` package is missing from a global install, so vector recall keeps working on `npm install -g openclaw@latest` upgrades where optionalDependencies left only the platform variant on disk. Fixes #77838. Thanks @corevibe555 and @Simon2256928.",
      "Cron: keep long manual cron runs active in the task registry until completion, preventing transient `lost` markers before durable recovery reconciles. Fixes #78233. (#78243) Thanks @Feelw00.",
      "Doctor/GitHub CLI: surface a `GH_CONFIG_DIR` hint when the GitHub skill is usable but `gh` auth lives under a different operator HOME than the agent process, without warning for disabled or filtered skills. Fixes #78063. (#78095) Thanks @tmimmanuel.",
      "Gateway: dedupe concurrent `send`, `poll`, and `message.action` requests while delivery is still in flight, preventing duplicate outbound work for the same idempotency key. (#68341) Thanks @thesomewhatyou.",
      "Cron: keep main-session `systemEvent` heartbeat wakes on their bound session route for both direct and queued wake paths by dropping inherited explicit heartbeat destinations when forcing `target: \"last\"`. Fixes #73900. Thanks @richardmqq.",
      "Telegram: honor forced document delivery for video media so `--force-document` sends MP4s as documents instead of typed videos. Fixes #80389. (#80405) Thanks @jbetala7.",
      "Gateway: clear speculative node wake state when APNs registration is missing, preventing unregistered or mistyped node IDs from retaining wake throttle entries. Fixes #68847. (#68848) Thanks @Feelw00.",
      "Auto-reply: keep late follow-up queue drain finalizers from deleting a replacement queue registered after `/stop`, preventing immediate follow-up messages from being orphaned. Fixes #68838. (#68839) Thanks @Feelw00.",
      "Feishu: make manual App ID/App Secret setup the default channel-binding path while keeping QR scan-to-create as an optional best-effort flow, and document the manual fallback for domestic Feishu mobile clients that do not react to the QR code. Fixes #80591. Thanks @wei-wei-zhao.",
      "Memory: cap dreaming promotion writes to `MEMORY.md` by compacting oldest auto-promoted sections while preserving user-authored notes, keeping active memory below the bootstrap budget. Fixes #73691. (#74088) Thanks @YB0y.",
      "Telegram: show resolved thinking defaults in native `/status` and `/think` menus while preserving explicit session overrides. (#80341) Thanks @VACInc.",
      "Channels: cache selected channel registry lookups against the active fallback snapshot so pinned-empty registries refresh native command and alias routing after active registry swaps. (#80333) Thanks @samzong.",
      "Codex app-server: reuse native Codex CLI OAuth for isolated app-server harness login, refresh, and app inventory cache keys so ChatGPT-authenticated Codex runs no longer fall back to unauthenticated OpenAI API calls. (#79877) Thanks @jeffjhunter.",
      "Gateway: scope `sessions.resolve` sessionId and label store loads to the requested agent so large unrelated agent stores are not parsed for scoped lookups. Fixes #51264. (#79474) Thanks @samzong.",
      "Gateway: share serialized streaming event envelopes across eligible WebSocket and node subscribers while preserving per-client sequence numbers. (#80299) Thanks @samzong.",
      "Gateway: consolidate duplicate `openclaw doctor` service config panels while preserving the declined-repair `--force` hint. Fixes #80287. (#78688) Thanks @YB0y.",
      "Browser: report Chrome MCP existing-session page readiness in browser status without letting status probes exceed the client timeout. Fixes #80268. (#80280) Thanks @ai-hpc.",
      "WhatsApp: route opening-phase Baileys 428 connectionClosed through the WhatsApp reconnect policy and keep post-open 428 closes retryable, so transient setup socket closes retry with WhatsApp diagnostics instead of escaping as a bare `channel exited` error. Fixes #75736; mitigates #77443. Thanks @dataCenter430.",
      "Agents: disable Pi's default filesystem resource discovery for embedded runs while keeping OpenClaw inline extension factories active, avoiding Windows event-loop stalls during first WhatsApp-triggered agent startup. Fixes #77443. Thanks @dataCenter430.",
      "Providers/self-hosted: read model-scoped llama.cpp runtime context from `/props.default_generation_settings.n_ctx` while keeping top-level `n_ctx` as a fallback, so session budgeting reflects the loaded context window. Fixes #73664. (#74057) Thanks @brokemac79.",
      "Memory: reject symlinked directory components in configured extra memory paths before reading Markdown files. (#80331) Thanks @samzong.",
      "Sessions/transcripts: replace whole-file `readFile` scans with shared streaming helpers (`streamSessionTranscriptLines` and `streamSessionTranscriptLinesReverse`) for idempotency lookup, latest/tail assistant text reads, delivery-mirror dedupe, and compaction fork loading, so long-running sessions no longer materialize the full transcript in memory. Forward scans use `readline` over a bounded `createReadStream`; reverse scans read bounded chunks from the file end and decode complete JSONL lines newest-first without a fixed tail cap. Synthetic 200 MiB transcript: peak RSS delta drops from +252 MiB to +27 MiB while preserving malformed-line tolerance and idempotency-key return semantics. Fixes #54296. Thanks @jack-stormentswe.",
      "Browser/CDP: filter browser-internal targets from raw CDP and persistent Playwright tab selection so navigation opens real page tabs. Fixes #55734. Thanks @Demine4.",
      "WhatsApp: apply hot-reloaded `dmPolicy` and `allowFrom` settings to the active Web listener before processing new inbound DMs. Fixes #80538. Thanks @Ampaskopi129.",
      "Plugins: let `openclaw doctor --fix` repair managed plugin installs whose package entrypoints fail package-directory boundary validation after local state moves. Fixes #80592. Thanks @wei-wei-zhao.",
      "Voice-call: resume voice-originated exec approval follow-ups as internal non-delivery turns instead of rejecting them as `unknown channel: voice`. Fixes #80540. Thanks @patrickmch.",
      "Control UI: preserve the composer draft when Stop is tapped during an active chat run, preventing accidental prompt loss on mobile. Fixes #80586. Thanks @KCALLC.",
      "Infra/retry: keep jittered retry delays at or above server-supplied Retry-After lower bounds when the hint can be honored. Fixes #68541. (#68543) Thanks @Feelw00.",
      "Docs: clarify that `/model provider/model` is an exact session route, while duplicate bare model ids only use configured fallback order on non-session override paths. Refs #80562. Thanks @gaodaabao.",
      "Redact persisted secret-shaped payloads [AI]. (#79006) Thanks @pgondhi987.",
      "Agents: label `.openclaw/sandboxes` exec workdirs as sandbox runs in compact tool summaries instead of showing the full path.",
      "OpenAI Codex: surface browser OAuth and device-code login failures instead of treating failed logins as empty successful auth results. Refs #80363.",
      "CLI agents: carry runtime-only current-turn sender/reply context into CLI model prompts while keeping prompt-build hook input and transcript text clean.",
      "Control UI: keep workspace file presence checks from treating `fs-safe` stat helper failures as missing files, restoring Agents file status for existing Windows workspace files. Fixes #79953. Thanks @lovelefeng-glitch.",
      "Microsoft Foundry: report an explicit error when the Azure subscription prompt returns an id that is not present in the enabled subscription list, instead of continuing from an unsafe subscription assertion. (#62742) Thanks @oliviareid-svg.",
      "fix(matrix): gate name-based allowlist resolution [AI]. (#79007) Thanks @pgondhi987.",
      "Slack: include the bot's own root/parent message in new thread sessions so in-thread replies reach the agent with the parent text the user is responding to, instead of only `reply_to_id` metadata. Fixes #79338. Thanks @sxxtony.",
      "Docker: keep image builds on the source pnpm workspace policy so pnpm 11 can prune production dependencies without a Docker-only workspace rewrite.",
      "Agents/compaction: restore info-level gateway logs for embedded compaction start, completion, and incomplete outcomes. (#71961) Thanks @rubencu.",
      "Telegram: build reply-aware inbound turns through the shared channel context path so agents see the current reply target inline with the current message.",
      "Telegram: recover legacy message cache files that mixed JSON-array and line-delimited entries so restarted gateways preserve reply-window context. (#80567)",
      "Telegram: update the reply-context cache when messages are edited, so streamed bot replies appear in later agent context with their final text instead of the first draft.",
      "Skills/Windows: normalize compacted skill prompt locations to forward slashes after home-prefix compaction so Windows skill paths remain readable by model file tools. (#52200) Thanks @chienchandler.",
      "Control UI/Windows: update `@openclaw/fs-safe` so agent workspace file presence checks fall back correctly on Windows, preventing existing AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, and MEMORY.md files from showing as missing. Fixes #79953. Thanks @lovelefeng-glitch.",
      "Memory: skip managed dreaming cron reconciliation warnings for ordinary cron and heartbeat hook contexts that cannot manage Gateway cron. (#77027) Thanks @rubencu.",
      "Cron: treat Codex app-server turn acceptance, CLI process spawn, and tool starts as execution milestones, preventing isolated runs from tripping the early startup watchdog after work has begun.",
      "Codex app-server: treat current-turn `<turn_aborted>` raw markers as terminal so interrupted native-tool turns release Discord agent sessions instead of waiting for the outer timeout.",
      "Yuanbao: bump `openclaw-plugin-yuanbao` to 2.13.1 to support `sourceReplyDeliveryMode: \"automatic\"` for group chat. (#79814) Thanks @loongfay.",
      "Memory: keep `memory_search` result `corpus` labels aligned with the hit source, so session transcript hits surface as `sessions` and memory-file hits stay `memory`. Fixes #72885. (#71898, #72886) Thanks @rubencu.",
      "Codex app-server: default native plugin app tool approvals to automatic so non-destructive read tools run when destructive actions are disabled.",
      "Plugins: allow untracked local source plugins in the global extensions directory to load TypeScript package entries while keeping managed installs strict about compiled runtime output. Fixes #80503. Thanks @Kaspre.",
      "Google/Gemini: normalize retired nested Gemini 3 Pro Preview ids while converting manifest catalog rows into emitted provider config, so `google/gemini-3.1-pro-preview` is used for testing instead of `google/gemini-3-pro-preview`.",
      "Google/Gemini: normalize retired nested Gemini 3 Pro Preview ids inside saved model allowlists and fallback chains, so proxy routes like `openrouter/google/gemini-3-pro-preview` are persisted as Gemini 3.1 Pro Preview.",
      "Google/Gemini: normalize retired nested Gemini 3 Pro Preview ids in configured proxy/provider-auth model catalogs, so regenerated config keeps testing `google/gemini-3.1-pro-preview` instead of `google/gemini-3-pro-preview`.",
      "Google/Gemini: normalize retired nested Gemini 3 Pro Preview ids while onboarding provider catalog presets, so setup-emitted proxy configs test `google/gemini-3.1-pro-preview` instead of `google/gemini-3-pro-preview`.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview ids in provider catalog rows during generic config writes, so unrelated config changes keep testing `google/gemini-3.1-pro-preview`.",
      "Models: keep configured fallback chains ahead of configured primary models for override selections with duplicate model ids, preventing fallback jumps to the wrong provider. Fixes #80562.",
      "Native apps: advertise the Gateway protocol compatibility range so chat and node sessions can connect to v3 gateways after additive v4 client updates.",
      "Gateway/agents: keep stale `sessions_send` ACP manager and `web_fetch` runtime chunks importable after package updates, preventing live gateways from breaking before restart. Fixes #78804. Thanks @Gomesy72.",
      "Gateway/install: preserve service environment value-source metadata in `openclaw gateway install`, so systemd reinstall paths keep env-file-backed secrets out of inline unit metadata. Refs #77406, #77427. Thanks @stainlu and @brokemac79.",
      "Auto-reply/reset: include inbound sender context in bare `/new` and `/reset` model prompts while keeping startup instructions out of transcript prompts, so agents see sender identity on the first reset turn. Fixes #77360. Thanks @srb11e.",
      "Gateway: avoid synchronous restart-sentinel state probes during post-attach startup, preventing slow Windows or redirected state directories from blocking channel turns. Fixes #79264. Thanks @liyi58.",
      "Agents/auth: update successful model auth profile status with one locked store write, reducing post-model reply latency from duplicate `auth-profiles.json` saves. Thanks @mcaxtr.",
      "Agents/image: honor explicit `image` tool model overrides even when `agents.defaults.imageModel` is unset, restoring one-off vision calls for configured multimodal providers. Fixes #79341. Thanks @haumanto.",
      "Doctor/update: leave live systemd gateway units unchanged during noninteractive update-mode service repair, so update-time doctor does not silently overwrite operator-owned unit directives. Refs #80462.",
      "Update: accept optional leading `v` prefixes when verifying exact npm package install targets, so `openclaw update --tag v2026...` does not roll back after installing the matching bare package version. Refs #74069; #80480. Thanks @Kaspre.",
      "Doctor: treat missing plugin ids in `plugins.deny` as stale config warnings instead of fatal validation errors, and remove them during stale plugin cleanup so update repair does not restore last-known-good config for deny-only stale plugin refs. Refs #77802. Thanks @Kaspre.",
      "Codex app-server: preserve prompt-local current-turn context through context-engine prompt projection, so replied-to Telegram messages stay visible to the Codex model input.",
      "Telegram: pass agent-scoped media roots through gateway message actions so workspace-local media from the active agent is not rejected as cross-agent access. Thanks @frankekn.",
      "CLI/gateway: keep `gateway status --deep` plugin-aware so configured plugin manifest warnings, including missing channel config metadata, stay visible during install and update smoke checks.",
      "Doctor/status: clarify gateway token source conflict warnings and suppress them inside the managed Gateway service credential context.",
      "Feishu: accept Schema 2 card callbacks whose operator identity is nested under `operator.user_id`, so card buttons dispatch instead of being dropped as malformed. Fixes #71670. (#71787) Thanks @rubencu.",
      "Feishu: fall back to a top-level group send when normal group quoted replies target a withdrawn or missing message, preventing replies from disappearing silently while preserving native topic safety. Fixes #79349. Thanks @arlen8411.",
      "Doctor: stop flagging the live compatibility agent directory as orphaned when the configured default agent is not `main`. Fixes #74313. (#74438) Thanks @carlos4s.",
      "Auth/Claude CLI: persist fresher managed external CLI OAuth credentials back to `auth-profiles.json`, preventing stale `anthropic:claude-cli` profiles from repeatedly bootstrapping and flooding debug logs. Fixes #80129. Thanks @Caulderein.",
      "Context: render `/context map` only from actual run context and persist Codex app-server run reports without counting deferred tool-search schemas as prompt-loaded tool schemas.",
      "Codex app-server: report Codex-native tool execution to diagnostics so long-running native `bash`, web, file, and MCP tools no longer look like stale embedded runs to the watchdog. (#80217)",
      "Codex app-server: refresh Codex account rate limits after subscription usage-limit failures so Discord and other channel replies can show the next reset time instead of saying Codex returned none. Thanks @pashpashpash.",
      "Agents/auth: let Codex-backed OpenAI agent turns use `auth.order.openai` entries for Codex-compatible OAuth and API-key profiles while keeping existing `openai-codex` profile ordering valid.",
      "Codex app-server: emit async `after_tool_call` observations for native tool completions not covered by the native hook relay so observability plugins can record Codex-native tools. (#80372) Thanks @VACInc.",
      "Tasks: route group and channel task completions through the requester session so the parent agent can send the visible summary instead of stopping at a generic task-status line. Fixes #77251. (#77365) Thanks @funmerlin.",
      "Telegram: preserve blank lines between manually indented bullet blocks and following numbered sections in rendered replies. Fixes #76998. Thanks @evgyur.",
      "Agents/sandbox: allow read-only sandbox sessions to read the `/agent` workspace mount while keeping write/edit/apply_patch workspace-only guarded, restoring `read /agent/...` for `workspaceAccess: \"ro\"`. Fixes #39497. Thanks @stainlu and @teosborne.",
      "Slack: pass configured agent identity through draft preview sends so partial streaming replies keep custom username/avatar on the initial Slack message. Fixes #38235. (#38237) Thanks @lacymorrow.",
      "Slack: support `allowBots: \"mentions\"` for bot-authored messages that mention the receiving bot, matching the documented Discord-style mode without accepting every bot message. Fixes #43587. (#43588) Thanks @raw34.",
      "Slack: refresh private file URLs with `files.info` when inbound DM file events omit or stale attachment URLs, preventing file attachments from being dropped before media hydration. Fixes #50129. (#50200) Thanks @smartchainark.",
      "Slack: add scoped message-tool formatting hints so agents use Markdown for plain sends and direct mrkdwn for Block Kit fields. Fixes #34609. (#50979) Thanks @carrotRakko.",
      "Slack: describe `download-file` file ids separately from message timestamps and return a targeted recovery error when agents pass `messageId` instead of `fileId`. (#74155) Thanks @jarvis-ai-gregmoser.",
      "Slack: retain processed room messages for `requireMention=false` channels so always-on Slack rooms keep recent conversation context between turns. (#38658) Thanks @syedamaann.",
      "Slack: compile interactive reply directives for direct outbound sends without bypassing the `interactiveReplies` capability gate, preserving Block Kit for Slack CLI and cron deliveries. (#78220) Thanks @kazamak.",
      "Slack: keep DM last-route updates scoped to the active non-main DM session, including threaded DM turns, so isolated Slack DM sessions do not overwrite the shared main route. (#73085) Thanks @clawSean.",
      "Slack/ACP: route Slack channel and DM messages through configured ACP bindings when no runtime binding exists, keeping bound thread replies pinned to the persistent ACP session and dropping unavailable configured targets instead of falling back to `main`. (#73101) Thanks @Raasl.",
      "Slack: mark unresolved thread replies as ambiguous and skip them instead of treating them as root channel messages, keeping thread continuation on the SDK-backed participation store. (#75630) Thanks @soichiyo.",
      "Slack: let same-channel message tool sends opt out of inherited thread context with `topLevel: true` or `threadId: null`, allowing agents to post a new parent-channel message from inside a Slack thread. Fixes #79807. Thanks @vexclawx31.",
      "Slack: prefer full rich-text block content over truncated socket-mode message previews so long inbound Slack messages reach agents intact. Fixes #79027. Thanks @BobAccentWebDev.",
      "Slack: include structured Slack API error details in setup, probe, streaming, and reply logs while preserving token redaction. (#53966) Thanks @deucemask.",
      "Gateway/agents: keep structured reasons when active-run queueing fails and deprecate the legacy boolean queue helper, so steering and subagent wake diagnostics distinguish completed, non-streaming, and compacting runs. Fixes #80156. Thanks @markus-lassfolk.",
      "System events: dedupe keyed events across the queue while preserving unkeyed, delivery-route, and trust-boundary event identity. (#73040) Thanks @statxc.",
      "Agents/UI: compact exec and tool progress rows by hiding redundant shell tool names, replacing known workspace paths with short context markers, and preserving Discord trace scrubbing for compact command lines.",
      "ACPX: run and await the embedded ACP backend startup probe by default so the gateway `ready` signal no longer fires before the acpx runtime has either become usable or reported a probe failure; set `OPENCLAW_ACPX_RUNTIME_STARTUP_PROBE=0` to restore lazy startup. Fixes #79596. Thanks @bzelones.",
      "Gateway/status: surface model-pricing bootstrap and refresh failures as degraded health/status warnings while keeping Gateway liveness healthy. Fixes #79599. Thanks @bzelones.",
      "OpenAI-compatible models: strip prior assistant reasoning fields from replayed Chat Completions history by default, preventing oMLX/vLLM Qwen follow-up turns from rejecting or stalling on stale `reasoning` payloads. Fixes #46637. Thanks @zipzagster and @lexhoefsloot.",
      "CLI/onboarding: give non-Azure custom providers a safe generated context window and heal legacy 4k wizard entries without overwriting explicit valid small model limits, preventing first-turn compaction loops. Fixes #79428. (#79911) Thanks @Jefsky.",
      "OpenAI-compatible models: add `compat.strictMessageKeys` to strip Chat Completions replay messages to `role` and `content` for strict providers that reject OpenAI-style tool and metadata keys. Fixes #50374. Thanks @choutos.",
      "Bedrock Mantle: add `plugins.entries.amazon-bedrock-mantle.config.discovery.enabled=false` to suppress automatic Mantle discovery and IAM bearer-token generation while keeping the plugin enabled. Fixes #67288. Thanks @kanekoh.",
      "Ollama: stop native `/api/chat` requests from copying catalog `contextWindow` or `maxTokens` into `options.num_ctx` unless `params.num_ctx` is explicitly configured, avoiding pathological prompt-ingestion latency on local large-context models. Fixes #62267. Thanks @BenSHPD.",
      "Ollama: keep the model idle watchdog enabled for `*:cloud` models routed through a local Ollama host, so cloud-backed tool-loop stalls fail over visibly instead of inheriting local-model no-idle behavior. Fixes #79350. Thanks @geek111.",
      "Voice/Ollama: honor routed voice agent `tools.allow` for classic embedded voice responses, including empty allowlists, so no-tool Ollama agents do not receive tool schemas. Fixes #79506. Thanks @donkeykong91.",
      "Agents/doctor: warn when channel-routed agents cannot call the `message` tool, so operators can fix tool policy mismatches before explicit channel actions such as attachments or thread replies fail. Refs #80128. Thanks @jeffjhunterai.",
      "Gateway: reread config from disk after the first in-process restart loop startup, preventing SIGUSR1 restarts from reusing a stale startup snapshot and dropping config written after boot. Fixes #79947. Thanks @TheLevti.",
      "Codex app-server: deliver native image-generation outputs from Codex `savedPath` events as reply media, so blank-text image generation turns still attach the generated file. Thanks @keshavbotagent.",
      "Network/SSRF: keep pinned automatic DNS lookups on IPv4 when dual-stack hosts also publish AAAA records, and treat `EADDRNOTAVAIL` as a transient gateway network failure instead of a fatal crash. Fixes #80078. Thanks @takamasa-aiso.",
      "Control UI: show compact one-line live/idle/terminal run status badges in the Sessions table and rename the active-minute filter to its updated-within meaning. Fixes #78307. Thanks @BunsDev.",
      "Control UI: scope chat session-list refreshes by agent and skip disk-only agent store discovery for configured-only lists, preventing post-first-message session switching stalls on large Windows stores. Fixes #79675. Thanks @lovelefeng-glitch, @BunsDev.",
      "Control UI: allow Appearance tweakcn theme imports through the served CSP so browser-local custom theme links no longer fail with a `connect-src` violation. Fixes #78504. Thanks @BunsDev.",
      "Control UI/config: remove plugin allowlist entries that the form auto-added when a plugin enable toggle is reverted before saving, so reverting the visible toggle clears dirty state without persisting unintended allowlist changes. (#78329) Thanks @samzong.",
      "Gateway/mobile: reuse bootstrap-issued device-token scopes on handoff reconnects and surface device-token scope mismatches separately from token mismatches while preserving full shared-token dashboard/native sessions. Fixes #79292. Thanks @BunsDev.",
      "Media/host-read: allow buffer-verified gzip, tar, and 7z archives in the shared host-local media validator alongside ZIP and document attachments.",
      "Plugins/install: retry managed npm plugin installs without npm alias overrides after npm's `Invalid comparator: npm:` failure, so older npm versions can install official plugins instead of aborting. (#80539) Thanks @rubencu.",
      "Plugins/doctor: invalidate persisted plugin registry snapshots when plugin diagnostics point at deleted source paths, so `openclaw doctor` stops repeating stale warnings after a local extension is replaced by a managed npm plugin. Fixes #80087. (#80134) Thanks @hclsys.",
      "Doctor/OpenAI Codex: preserve Codex auth intent when auto-repairing legacy `openai-codex/*` model refs to canonical `openai/*` by adding provider/model-scoped Codex runtime policy, preventing repaired configs from falling through to direct OpenAI API-key auth. Fixes #78533 and #78570. Thanks @superck110 and @Azmodump.",
      "CLI/agents: surface durable message delivery status from `sendDurableMessageBatch` in `deliverAgentCommandResult` and `openclaw agent --json --deliver`, preserving suppressed hook outcomes as terminal no-retry results while exposing partial and failed sends for automation. Supersedes #53961 and #57755. Thanks @Kaspre.",
      "Agents: apply the LLM idle watchdog while provider stream setup is still pending, preventing silent pre-stream model hangs from waiting for the full agent timeout.",
      "Cron: let isolated self-cleanup runs inspect their own job run history while keeping other cron jobs and mutation actions blocked. Fixes #80019. Thanks @hclsys.",
      "Cron: report isolated agent-turn setup and pre-model stalls with phase-specific timeout errors instead of waiting for the full job budget when no model call starts. Fixes #74803. Thanks @jeffsteinbok-openclaw and @dgkim311.",
      "CLI/plugins: treat arbitrary unknown subcommands outside plugin CLI metadata as normal unknown commands instead of suggesting `plugins.allow`, while preserving allowlist guidance for real plugin command roots. Fixes #80109. (#80123) Thanks @kagura-agent.",
      "CLI/config: persist explicit `config set` and `config patch` values that equal runtime defaults instead of reporting success while dropping them. Fixes #79856. (#80106) Thanks @abodanty and @hclsys.",
      "OpenAI/realtime voice: accept Codex-compatible legacy audio and transcript event aliases so provider protocol drift does not drop assistant audio or captions.",
      "Discord/voice: keep default agent-proxy realtime sessions from auto-speaking filler before the forced OpenClaw consult answer, finish Discord playback on realtime response completion, and queue later exact-speech answers until playback idles to avoid mid-sentence replacement.",
      "Gateway: return deterministic `400 invalid_request_error` responses for malformed encoded session-kill HTTP paths instead of letting route-shaped requests fall through to later Gateway handlers. (#72439) Thanks @rubencu.",
      "Control UI: serve root PWA and favicon assets from `/__openclaw__/` SPA routes so tab icons, install metadata, and the service worker do not 404 after internal navigation. Fixes #80072. Thanks @CodeNovice2017.",
      "Exec/safe bins: compare trusted safe-bin dirs with path-specific case folding on case-insensitive filesystems so Windows and default macOS paths match without weakening case-sensitive mounts. (#42131) Thanks @hkochar.",
      "OpenAI/realtime voice: honor disabled input-audio interruption locally so server VAD speech-start events do not clear Discord playback after operators set `interruptResponseOnInputAudio: false`.",
      "Telegram: keep no-response DM turns quiet instead of rewriting them into visible silent-reply chatter. Fixes #78188. (#78228) Thanks @Beandon13.",
      "Telegram: handle managed select button callbacks before the raw callback fallback while preserving delimiter-containing option values such as `env|prod`. (#79816) Thanks @moeedahmed.",
      "OpenAI-compatible models: handle JSON chat-completion bodies returned to streaming requests, preserving reasoning fields and visible text instead of completing an empty agent turn. Fixes #77870.",
      "Discord/models: defer model picker component interactions before loading route, model, and preference data, preventing \"This interaction failed\" timeouts under gateway load. Fixes #77283. Thanks @colin-chang.",
      "xAI: expose `/think low|medium|high` for reasoning-capable Grok models and keep `reasoning.effort` on native Responses payloads while preserving off-only behavior for non-reasoning routes. Fixes #79210. Thanks @colinmcintosh.",
      "CLI/media: let explicit image description model refs use bundled static provider catalogs and generic model-backed image hooks, so `openclaw infer image describe --model zai/glm-4.6v` works like direct model runs and Anthropic auth probes avoid stale Claude 3 Haiku catalog entries.",
      "Models/Anthropic: add `anthropic/claude-haiku-4-5` to Anthropic API-key agent allowlist defaults when an Anthropic default model is configured, so cron model overrides can select the current Haiku alias. Fixes #78000.",
      "Agents/compaction: initialize built-in context engines before CLI transcript compaction resolves the default engine, preventing clean-process `legacy` engine registration failures during CLI session persistence. Fixes #79446. Thanks @TurboTheTurtle.",
      "Agents/Anthropic-compatible: strip replayed thinking blocks for custom Anthropic-compatible models that explicitly declare `supportsReasoningEffort: false`, preventing Kimi-compatible providers from resending unsupported `thinking` content. Fixes #47452.",
      "Kimi: keep Anthropic-compatible thinking streams valid by supplying required thinking budgets and enough output room for hidden reasoning plus final text. (#80481) Thanks @InTheCloudDan.",
      "Browser: wait longer for existing-session Chrome MCP status and non-deep doctor probes so slow first attaches do not falsely report offline while keeping raw CDP status probes short. (#77473) Thanks @rubencu.",
      "Gateway/logging: install console capture before foreground Gateway fast-path parsing and suppress known libsignal session dumps even in verbose mode, preventing raw terminal logs from printing WhatsApp session key material. (#76306) Thanks @rubencu.",
      "Exec approvals: keep `exec.approval.list` on the lightweight policy-summary path so listing pending approvals no longer loads the rich tree-sitter command explainer. (#76943) Thanks @rubencu.",
      "Agents: surface concise default-visible warnings when `exec`/`bash` tool calls fail after the assistant claims success, while keeping raw stderr hidden unless verbose details are enabled. Fixes #60497. (#80003) Thanks @jbetala7.",
      "Channels/iMessage: keep redacted failed probe details in non-sensitive health snapshots so Full Disk Access failures no longer appear as configured/OK in status output. Fixes #79795.",
      "Agents: stop blank model-emitted tool calls before dispatch while preserving id-based tool-name recovery, preventing Kimi/NVIDIA blank-name retry loops without creating a callable `_blank` sentinel. Fixes #34129. (#56391) Thanks @smartchainark.",
      "Agents/Telegram: deliver the canonical final assistant answer instead of replaying accumulated pre-tool text blocks, preventing duplicate Telegram replies and raw-looking tool-output fragments from leaking into chat delivery. Fixes #79621 and #79986. Thanks @nonzeroclaw and @dudaefj.",
      "Auto-reply/TUI: keep fallback timeout recovery deliverable after a primary model lifecycle error by emitting fallback progress and deferring terminal TUI errors until recovery has a chance to finish. Fixes #80000. (#80009) Thanks @TurboTheTurtle.",
      "Heartbeat: clear stale auto fallback model overrides when the configured default model changes, so heartbeat runs follow updated `agents.defaults.model.primary` without requiring a manual reset. Fixes #74284. Thanks @brtkwr and @bitloi.",
      "CLI/agent: let `openclaw agent --model` use the backend/admin Gateway scope without cached device-token scopes silently downscoping the request. (#78837) Thanks @VACInc.",
      "CLI/help: keep help and version invocations configless while improving shared port, channel, plugin, task, session, message, pairing, and auth recovery text.",
      "CLI/config: explain strict JSON parse failures with a valid example and the plain-string escape hatch.",
      "CLI/secrets: turn offline Gateway reload failures into actionable recovery text.",
      "CLI/channels: explain missing or ambiguous channel selections with next commands.",
      "CLI/channels: defer guided channel status collection until a channel is selected, keeping `openclaw channels add` first screen quieter.",
      "CLI/channels: exit guided channel setup cleanly on cancellation instead of printing the internal wizard error.",
      "Plugins/CLI: route disabled Matrix and LanceDB memory command roots to plugin-enable guidance instead of generic unknown-command errors.",
      "Browser/Docker: detect Playwright-managed Chromium from `PLAYWRIGHT_BROWSERS_PATH` and the default Playwright cache on Linux, so Docker installs that persist `/home/node/.cache/ms-playwright` no longer need `browser.executablePath`.",
      "Ollama: keep DeepSeek V4 cloud models thinking-capable even when Ollama Cloud `/api/show` omits the `thinking` capability, so `/think high` no longer rejects `ollama/deepseek-v4-*:cloud`.",
      "ACPX/Claude ACP: keep foreground prompts waiting for their own result when autonomous task-notification results arrive during the same session, and retarget the patch for Claude Agent ACP `0.33.1`.",
      "WhatsApp: keep Baileys media uploads from passing non-Dispatcher agents to undici in `7.0.0-rc10`, and patch the bundled Baileys declaration so the latest tsdown build stays warning-clean.",
      "Build: keep tsdown `0.22.0` warning-clean by externalizing known third-party declaration edges and replacing relative channel config module augmentations with explicit built-in channel fields.",
      "ACP sessions: map canonical runtime options to backend-advertised ACP config keys like Claude's `effort` while keeping persisted OpenClaw state canonical. (#79926) Thanks @InTheCloudDan.",
      "Models/Discord: support `provider/*` entries in `agents.defaults.models` so `/model`, `/models`, and model pickers can show dynamically discovered models for selected providers without exact model allowlists. Fixes #79485. Thanks @rendrag-git.",
      "Gateway/watch: rebuild or restage missing bundled-plugin dist and runtime-postbuild outputs before launching the Gateway from a source checkout, preventing incomplete watch-mode runtime trees. (#70805) Thanks @rubencu.",
      "CLI/update: allow restart health probes from the previous gateway protocol during self-update, and make plugin dry-runs report exact npm target versions instead of `unknown` while preserving unchanged status.",
      "OpenAI/Codex: forward persisted `openai-codex` OAuth profile metadata into Codex plugin harness attempts after canonical `openai/*` migration, so OAuth-only installs keep using native Codex auth instead of falling through to direct OpenAI API-key auth. Fixes #79978.",
      "OpenAI/Codex: point gateway missing-key recovery and wizard docs at the canonical `openai/gpt-5.5` plus Codex OAuth route, and fix trajectory export errors so they suggest the valid `openclaw sessions` command.",
      "Google/Gemini: normalize retired `google/gemini-3-pro-preview` primary, fallback, and model-map refs during config load and unrelated config writes so saved config keeps targeting Gemini 3.1 Pro Preview.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview ids inside emitted Google provider model config, so regenerated models.json rows test `google/gemini-3.1-pro-preview`.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview ids for explicit OpenAI-compatible Google and Gemini CLI provider configs, so emitted config targets `google/gemini-3.1-pro-preview`.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview ids preserved from existing merged models.json providers so config emission keeps targeting `google/gemini-3.1-pro-preview`.",
      "Google/Gemini: normalize retired Gemini 3 Pro Preview ids inside provider auth config patches so setup-emitted provider catalogs test `google/gemini-3.1-pro-preview`.",
      "GitHub Copilot: mint short-lived Copilot API tokens with the same `vscode-chat` integration identity used by runtime requests, and refresh legacy cached tokens missing that identity so image-capable Copilot models no longer inherit the `copilot-language-server` scope. Fixes #79946, #80074. Thanks @TurboTheTurtle.",
      "Plugins/doctor: drop stale managed npm install records when `openclaw doctor --fix` removes npm packages that shadow bundled plugins, so the rebuilt registry no longer resurrects the removed package metadata.",
      "Doctor: warn when a per-agent model config omits the `fallbacks` key and `agents.defaults.model.fallbacks` is non-empty. Covers both string-form (`\"model\": \"...\"`) and partial-object form (`\"model\": { \"primary\": \"...\" }`) â€” both silently clobber the defaults chain at runtime. Use `\"fallbacks\": []` to explicitly opt out of fallbacks, or add `\"fallbacks\": [...]` to inherit or override. Fixes #79369. Thanks @Kaspre.",
      "Discord/voice: reuse or suppress late realtime consult tool calls without stealing newer speaker context or speaking forced fallback answers twice.",
      "Discord/voice: skip likely incomplete realtime forced-consult transcript fragments and non-actionable closings so stale partial speech does not queue delayed answers over the next turn.",
      "Discord/voice: keep realtime forced consults from clearing active exact-speech playback, so back-to-back voice answers queue instead of cutting each other off.",
      "Discord/voice: synthesize realtime playback timestamps from emitted Discord PCM so OpenAI realtime barge-in truncation no longer sees `audioEndMs=0` and skips legitimate interruptions.",
      "Plugin SDK: keep activated linked plugin runtime facades loadable when bundled plugin fallback is disabled. Thanks @shakkernerd.",
      "Feishu: auto-thread `message(action=\"send\")` replies inside the topic when the active session is group_topic or group_topic_sender, and propagate `replyInThread` through text, card, and media outbound adapters so topic-scoped sessions no longer post at the group root. Fixes #74903. (#77151) Thanks @ai-hpc.",
      "WhatsApp: pass routing context into voice-note transcript echo preflight so echoed transcripts can deliver to the originating chat. Fixes #79778. (#79788) Thanks @hclsys.",
      "Cron/failover: classify structured OpenAI-compatible `server_error` payloads as `server_error`, expose that reason in cron state, and let one-shot cron retry policy honor `retryOn: [\"server_error\"]` without requiring raw `5xx` text. (#45594) Thanks @clovericbot.",
      "Slack: wake the resolved thread session after interactive reply button/select clicks and carry Slack delivery context through the queued interaction event, so clicks continue the visible conversation. Fixes #79676 and #61502. (#79836) Thanks @velvet-shark, @tianxiaochannel-oss88, and @Saicheg.",
      "WhatsApp/streaming: send only the new suffix when text-end block replies repeat prior preambles across tool-call cycles, preventing cumulative WhatsApp preamble messages. Fixes #78946. (#79120) Thanks @brokemac79 and @papawattu.",
      "Tests/security audit: sandbox `audit-exec-surface.test.ts` under a per-case OpenClaw home tempdir, redirecting `OPENCLAW_HOME` (which wins over `HOME`/`USERPROFILE` in `resolveRawHomeDir`) alongside `HOME` and `USERPROFILE`, so its `saveExecApprovals(...)` calls never touch the live `~/.openclaw/exec-approvals.json` on the host running the suite. Sibling exec-approvals tests already used the tempdir pattern; this file did not, so running `pnpm test` against a contributor's local checkout was silently truncating their real approvals to `{ \"version\": 1, \"agents\": {} }`. (#79885) Thanks @omarshahine.",
      "ACP/gateway: preserve `AcpRuntimeError` cause chain (code/method/JSON-RPC detail) through the lifecycle boundary so gateway logs, telegram replies, and tool-result text show the actual upstream failure instead of opaque `Internal error`/`[object Object]`, with redaction applied before the chain reaches log or reply surfaces.",
      "Channels/iMessage: wire `action: \"reply\"` attachments through `imsg send-rich --file` when the installed imsg build advertises that capability (probed once via `imsg send-rich --help` and cached on the private-API status). Reply now hydrates `media`/`mediaUrl`/`fileUrl`/`mediaUrls[0]`/`filePath`/`path`/base64 `buffer`+`filename` through the shared outbound resolver, stages buffers via the existing `withTempFile` helper, rejects `http(s)://` URL attachments with a targeted error pointing callers at `send`'s full attachment-resolver pipeline, and falls back to the explicit `imsg#114 not landed yet` error on older imsg builds. Depends on the upstream `openclaw/imsg#114` capability landing in an installable release; until then the new path stays gated and users see the same explicit fallback `#79822` introduced. (#79864) Thanks @omarshahine.",
      "Telegram: preserve the first-preview debounce while appending true partial-stream deltas, so edited draft previews no longer duplicate earlier text when providers emit incremental output. (#80045) Thanks @TurboTheTurtle.",
      "Agents/Anthropic: report 1M session context for Claude Opus/Sonnet 4 models even when local model config still advertises 200k, matching model discovery and preventing premature status/UI overflow. Fixes #66766.",
      "Models/OpenRouter: hide missing-auth direct provider rows in `/model status` when they are only duplicated by a nested OpenRouter model id such as `openrouter/google/...`, while preserving explicitly configured direct providers. Fixes #62317.",
      "Models: preserve an explicitly selected provider/model such as `opencode-go/deepseek-v4-pro` when another provider owns the same bare model alias. Fixes #79325.",
      "Models/config: explain missing `models.providers.<provider>.models[]` registration when a model exists only in `agents.defaults.models`, instead of returning a bare unknown-model error. Fixes #80089.",
      "MCP/tools: prefix bundle MCP server/tool fragments that would start with digits, keeping generated tool names valid for Moonshot/Kimi and other strict providers. Fixes #79179.",
      "Models/OpenRouter: treat `403 API key budget limit exceeded` as billing so model fallback advances instead of retrying the exhausted primary. Fixes #60191. Thanks @omgitsgela.",
      "Models/OpenRouter: repair stale session overrides that lost the outer `openrouter/` provider wrapper, so sessions return to the configured OpenRouter model instead of failing as an unknown direct-provider model. Fixes #78161. Thanks @hjamal7-bit.",
      "Google/Gemini: default API-key onboarding back to `google/gemini-3.1-pro-preview` so fresh Gemini test configs exercise Gemini 3.1 Pro Preview.",
      "Telegram: show full provider/model labels for nested OpenRouter model ids in the model picker, so `openrouter/openai/gpt-5.4-mini` no longer displays as `openai/gpt-5.4-mini`. Fixes #67792. (#72752) Thanks @iot2edge.",
      "Models/OpenRouter: preserve live `supported_parameters` tool support metadata so non-tool Perplexity Sonar models no longer receive agent tool payloads and fall back unnecessarily. Fixes #64175. Thanks @Catfish-75.",
      "Models/OpenRouter: add MoonshotAI Kimi K2.5 to the bundled OpenRouter catalog so onboarding/model pickers can offer it without waiting for live discovery. Fixes #14601.",
      "Models/OpenRouter: keep keyRef/tokenRef-backed auth profiles visible to read-only PI model discovery, so OpenRouter models stay available in model pickers without storing plaintext keys. Fixes #58106. Thanks @ThalynLabs.",
      "Models/list: include explicit configured provider rows and read-only auth-backed catalog rows in the default configured view without loading PI's full registry, keeping Control UI pickers aligned with usable model auth. Refs #79381. Thanks @ismael-81.",
      "Security/audit: honor `tools.byProvider[\"provider/model\"].deny` when reporting small-model web/browser exposure, so per-model OpenRouter mitigations clear the `models.small_params` exposure signal. Fixes #80118.",
      "Models/Moonshot: accept direct `moonshotai/...` and `moonshot-ai/...` refs as aliases for canonical `moonshot/...`, so copied OpenRouter Kimi ids no longer fail as unknown direct models. Fixes #73876. (#74946) Thanks @jeffrey701.",
      "Kimi Code: use Kimi's stable `kimi-for-coding` API model id in bundled catalog, onboarding, and docs while normalizing legacy `kimi-code` and `k2p5` refs. Fixes #79965.",
      "Telegram: render cached reply targets and nearby group chatter as one selected conversation context window, so stale replies no longer split JSON reply chains from local chat context.",
      "Volcengine/Kimi: strip provider-unsupported tool schema length and item constraint keywords for direct and coding-plan models so hosted Kimi runs do not reject message tools with `minLength`. Fixes #38817.",
      "DeepSeek: backfill V4 `reasoning_content` replay fields for unowned OpenAI-compatible proxy providers, preventing follow-up request failures outside the bundled DeepSeek and OpenRouter routes. Fixes #79608.",
      "iMessage: emit a WARN log when an action is blocked because the imsg private API bridge is not attached, so operators see the silent-drop in `~/.openclaw/logs/openclaw.log` instead of having to read per-session trajectory JSONL `tool.result` payloads. Common after a gateway restart un-injects the dylib from Messages.app. (#80035) Thanks @omarshahine.",
      "Codex: cross-fill missing `thread.id` and `thread.sessionId` before schema validation so live Codex app-server responses that omit `sessionId` no longer fail `thread/start` or `thread/resume`. Fixes #80124. (#80137) Thanks @kagura-agent.",
      "Agents/Pi: wait for embedded abort cleanup to settle before releasing the session write lock, preventing follow-up turns from racing previous prompt teardown. (#80239) Thanks @samzong.",
      "WhatsApp: downgrade OpenClaw watchdog-triggered Web reconnects from runtime errors to recovery warnings and clear the recovered reconnect status after the next healthy connection. (#77026) Thanks @rubencu.",
      "ACPX/Windows: hide the MCP proxy target child process window on Windows so ACP-backed agents do not flash or fail because of terminal window handling. Fixes #60672. (#60678) Thanks @KChow-ctrl.",
      "Agents: abort generic repeated no-progress tool loops at the critical threshold when identical calls keep returning identical outcomes. (#80668) Thanks @frankekn.",
      "Exec approvals: omit generated command highlights for non-POSIX Windows and shell-wrapper approval commands until those command languages have native highlighting support. (#80566) Thanks @jesse-merhi.",
      "Telegram: keep verbose tool progress and result drafts separate from the final assistant answer so tool output no longer blends into the final Telegram message. (#80294) Thanks @jalehman.",
      "Plugin SDK/Windows: enable the native require fast path for root `openclaw/plugin-sdk` dist aliases instead of forcing Jiti transforms. (#80878) Thanks @medns.",
      "Agents/compaction: keep the recent tail after manual `/compact` when Pi returns an empty or no-op compaction summary, preventing blank checkpoints from replacing the live context.",
      "Native commands: handle slash commands before workspace and agent-reply bootstrap so Telegram `/status` and other command-only native replies do not wait behind full agent turn setup.",
      "Telegram/groups: include the recent local chat window and nearby reply-target window as generic inbound context so stale reply ancestry does not overshadow the live group conversation.",
      "Plugins/Nix: allow externally configured plugin roots under `/nix/store` to load in `OPENCLAW_NIX_MODE=1` while keeping normal external plugin hardlink rejection unchanged. Thanks @joshp123.",
      "Nextcloud Talk: include the required bot `response` feature in setup, explain missing `--feature response` on rejected sends, and surface missing response capability in doctor/status checks. Fixes #78935. (#79657) Thanks @joshavant.",
      "Cron/diagnostics: emit the existing `message.queued`, `session.state` (processing/idle), and `message.processed` lifecycle events for isolated-cron agent turns in `runCronIsolatedAgentTurn`, matching the dispatch and embedded-runner paths so subscribers (diagnostics OTLP, OTel exporters, custom observability plugins) get per-run session attribution instead of bucketing isolated cron LLM calls under static fallback ids. Events are gated on `isDiagnosticsEnabled(cfg)` so the documented `diagnostics.enabled: false` master toggle continues to silence the recorder. (#79214) Thanks @arniesaha.",
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
      "Gateway/Tailscale: add opt-in `gateway.tailscale.preserveFunnel` so when `tailscale.mode = \"serve\"` and an externally configured Tailscale Funnel route already covers the gateway port, OpenClaw skips re-applying `tailscale serve` on startup and skips the `resetOnExit` teardown for that run, keeping operator-managed Funnel exposure alive across gateway restarts. Fixes #57241. Thanks @RenzoMXD.",
      "Control UI/chat: hide retired and non-public Google Gemini model IDs from chat model catalogs and route the bare `gemini-3-pro` alias to Gemini 3.1 Pro Preview instead of the shut-down Gemini 3 Pro Preview. Thanks @BunsDev.",
      "CLI/infer: canonicalize case-only catalog model refs in `infer model run --model` so mixed-case provider/model strings resolve to the canonical catalog entry instead of failing with `Unknown model`. (#78940) Thanks @ai-hpc.",
      "CLI/infer: allow explicit local `infer model run --model <provider/model>` probes to use exact bundled static catalog rows before the provider is written to config, surfacing missing credentials as auth errors instead of `Unknown model`.",
      "CLI/install: revert the beta-only global root-refusal guard so existing root-managed VPS installs keep working; the DigitalOcean split-brain protection will move to a narrower image/install-specific path. Refs #67478 and #67509. Thanks @vincentkoc.",
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
      "Update/plugins: run a mandatory post-core convergence pass after `openclaw update` swaps the core package and before the gateway restarts, repairing missing configured plugin payloads, validating active install records including `openclaw.extensions`, and exiting with structured repair guidance instead of restarting the gateway with broken plugins. (#79143) Thanks @BKF-Gitty.",
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
      "Agents/tool-result guard: ignore internal tool-result `details` when estimating model-visible context, so large diagnostic metadata no longer triggers unnecessary truncation or compaction even though the provider boundary already strips `details` before model conversion. (#75525) Thanks @zqchris.",
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
      "Heartbeat/async exec: remap cron-run session keys to agent-main (or `\"global\"` under `session.scope=global`) at the bash exec, ACP, gateway node-event, and CLI watchdog enqueue sites, and treat cron-run descendants as ephemeral for retention pruning, so async exec completion events land in the same queue the heartbeat drains instead of being stranded under the ephemeral cron-run key. Refs #52305. Thanks @Kaspre.",
      "Wake protocol/system event CLI: type an optional `sessionKey` on `WakeParamsSchema`, add `--session-key` to `openclaw system event`, and keep cron enqueue/wake adapters resolving session-key-only targets symmetrically so callers can target a specific session for async-task completion relays instead of always hitting the agent's main session. Refs #52305. Thanks @Kaspre.",
      "Exec approvals/node: let trusted backend node invokes complete no-device Control UI approvals after the original request connection changes, while keeping node, command, cwd, env, and allow-once replay bindings enforced. Fixes #78569. Thanks @naturedogdog.",
      "Agents/subagents: keep background completion delivery on the requester-agent handoff/queue-retry path instead of raw-sending child results directly, and strip child-result wrapper or OpenClaw runtime-context scaffolding from queued outbound retries. Fixes #78531. Thanks @EthanSK.",
      "Sandbox: recreate cached browser bridges when JavaScript-evaluation permission changes, keep failed prune removals tracked for retry, and make cross-device directory moves copy-then-commit without partially emptying the source on failure.",
      "CLI/completion: guard the shell-profile source line written by `openclaw completion --install` with a file existence check (`[ -f ... ] && source ...` for bash/zsh, `test -f ...; and source ...` for fish) so uninstalling OpenClaw no longer makes new login shells error on a missing completion cache. (#78659) Thanks @sjf.",
      "Telegram: fail private-topic sends instead of retrying them as plain DMs when Telegram rejects the topic id, keeping private-topic `message_thread_id` routing intact. Fixes #79455. (#78575) Thanks @tmimmanuel.",
      "Discord/groups: instruct group-chat agents to stay silent when a message is addressed to someone else, replying only when invited or correcting key facts. (#78615)",
      "Discord/groups: tell Discord-channel agents to wrap bare URLs as `<https://example.com>` so link previews do not expand into uninvited embeds. (#78614)",
      "Agents/fallback: fail fast on session write-lock timeouts instead of trying fallback models for local file contention. Fixes #66646. Thanks @sallyom.",
      "Browser/SSRF: stop closing user-owned Chrome tabs when a read-only operation (snapshot/screenshot/interactions) is rejected by the SSRF guard â€” only OpenClaw-initiated navigations now close on policy denial. Thanks @scotthuang.",
      "iMessage: stage native inbound attachments into OpenClaw-managed media and convert HEIC/HEIF images to JPEG before dispatch, so image tools can read photos sent over native iMessage without requiring BlueBubbles.",
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
      "Plugins/diagnostics: make source-only TypeScript package warnings actionable by explaining that missing compiled runtime output is a publisher packaging issue and pointing users to update/reinstall or disable/uninstall the plugin. Fixes #77835. Thanks @googlerest.",
      "Control UI/chat: keep persisted assistant progress text visible when the same transcript turn also contains tool-use metadata, so chat.history reloads no longer make those replies vanish after the next user message. Fixes #77374. Thanks @BunsDev.",
      "Cron: repair persisted future `nextRunAtMs` values that no longer line up with the cron schedule, so daily timezone-aware jobs do not stay jumped to stale future dates. Fixes #77867. Thanks @hongfangsong.",
      "Agents/memory: keep error payloads visible during silent maintenance turns, so restricted memory-flush tool writes surface as chat errors instead of disappearing behind a silent run. Fixes #77821. Thanks @praxstack.",
      "TUI: skip the generic CLI respawn wrapper for interactive launches, exit cleanly on terminal loss, and refuse to restore heartbeat sessions as the remembered chat session, preventing stale heartbeat history and orphaned `openclaw-tui` processes on first boot. Thanks @vincentkoc.",
      "Doctor/sessions: move heartbeat-poisoned default main session store entries to recovery keys and clear stale TUI restore pointers, so `doctor --fix` can repair instances already stuck on `agent:main:main` heartbeat history. Thanks @vincentkoc.",
      "Agents/context engines: keep hidden OpenClaw runtime-context custom messages out of context-engine assemble, afterTurn, and ingest hooks so transcript reconstruction plugins only see conversation messages. Thanks @vincentkoc.",
      "Agents/compaction: treat visible custom-message, bash, and branch-summary entries as real conversation anchors so safeguard mode does not write empty fallback summaries for cron and split-turn sessions with substantive tool work. Fixes #78300. Thanks @amknight.",
      "Network/runtime: avoid importing Undici's package dispatcher during no-proxy timeout bootstrap so external channel plugin fetch requests with explicit Content-Length keep working. Fixes #78007. Thanks @shakkernerd.",
      "Status/doctor: treat a single healthy OpenClaw Gateway listener on loopback, LAN, or wildcard bind as the expected configured gateway instead of warning that the port is already in use. Fixes #77939. Thanks @GitHoubi and @brokemac79.",
      "Agents/TTS: send media-bearing block replies directly when block streaming is off, so agent `tts` tool audio attached to a final text reply is delivered instead of being consumed before final Telegram/media delivery. Thanks @Conan-Scott.",
      "Doctor: avoid crashing on partial Linux environments when the legacy crontab probe or terminal note wrapper receives missing or non-string output. Fixes #77773. Thanks @brokemac79 and @blackflame7983.",
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
      "Security/exec allowlist: collapse `.` and `..` segments in wildcard exec allowlist match targets and canonicalize absolute executable path candidates before regex matching, so a target like `/usr/bin/../../bin/sh` no longer string-matches a `/usr/bin/**` allowlist entry while resolving outside the declared root. (#75723) Thanks @eleqtrizit and @zsxsoft.",
      "Agents/compaction: disable Pi auto-compaction whenever OpenClaw effectively owns safeguard compaction, including provider-backed safeguard mode, so Pi and OpenClaw no longer fight over long-session compaction. Fixes #73003. (#73839) Thanks @bradhallett.",
      "Telegram/streaming: finalize text replies by stopping the edited stream message instead of sending a second answer bubble, so Telegram turns cannot duplicate the streamed final response. (#77947) Thanks @obviyus.",
      "web_search/Brave: fix provider selection when Brave is installed as an external plugin and `tools.web.search.provider: \"brave\"` is explicitly configured â€” a redundant provider re-resolution at startup could race and return an empty list, causing a spurious `WEB_SEARCH_PROVIDER_INVALID_AUTODETECT` warning and treating the explicitly configured provider as absent. Fixes #77676. Thanks @openperf.",
      "Doctor/plugins: discover doctor contracts from load-path channel plugins during `openclaw doctor --fix`, so plugin-owned legacy config repair runs before validation. (#77477) Thanks @jalehman.",
      "Dependencies: bump transitive `basic-ftp` to 5.3.1 so the runtime lockfile no longer includes the vulnerable 5.3.0 build flagged by the production dependency audit. (#78637) Thanks @sallyom.",
      "Hooks/cron: log returned `/hooks/agent` isolated-run errors and failed cron jobs with cron diagnostic summaries, so rejected `payload.model` values are visible instead of looking like accepted-but-missing runs. Fixes #78597. (#78655) Thanks @kevinslin.",
      "Managed proxy/security: classify raw socket callsites and proxy runtime mutations in boundary checks so new direct egress or unmanaged proxy-state changes cannot land without explicit review. (#77126) Thanks @jesse-merhi.",
      "Memory indexing: propagate memory directory creation failures immediately instead of reporting an unusable directory as ready. Thanks @he-yufeng.",
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
  }
]
