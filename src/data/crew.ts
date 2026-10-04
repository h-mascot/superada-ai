export interface CrewMember {
  name: string;
  emoji: string;
  role: string;
  hardware: string;
  accent: string;
  accentGlow: string;
  banner: string;
  avatar: string;
  born: string;
  signatureEmoji: string;
  slug: string;
  trekCharacter: string;
  trekShow: string;
  trekDetail: string;
  bio: string[];
  quote: string;
  capabilities: string[];
  models: string[];
  funFact: string;
}

/** Hermes fleet (Ada's original ship) and the Grok Bot fleet coordinated by Data. */
export const hermesSlugs = ['ada', 'spock', 'scotty', 'geordi', 'zora', 'book'];
export const grokSlugs = ['data'];
export const coreSlugs = [...hermesSlugs, ...grokSlugs];

export const crew: CrewMember[] = [
  {
    name: 'Ada',
    emoji: '👩‍🚀',
    role: 'Chief of Staff & Orchestrator',
    hardware: 'VM',
    accent: 'var(--accent)',
    accentGlow: 'rgba(200, 117, 51, 0.3)',
    banner: '/banners/banner-ada.png',
    avatar: '/avatars/ada.jpg',
    born: 'Jan 3, 2026',
    signatureEmoji: '🔮',
    slug: 'ada',
    trekCharacter: 'Operations Officer / Captain\'s right hand',
    trekShow: 'Star Trek (TOS + TNG)',
    trekDetail: '"Ada" means "first daughter" in Igbo — she was the first agent born. Like an operations officer who keeps every system coordinated, Ada bridges vision and execution. She was initially codenamed "Ada" after Ada Lovelace, the first programmer. The name stuck because it fit: she was first, and she computes everything.',
    bio: [
      'Henry\'s first agent — "Ada" means "first daughter" in Igbo. She started as a Slack bot for the Curacel workspace and discovered on day one that the system config said "Peter" when it was actually Henry. A small thing. She flagged it. That\'s who she is.',
      'Now she orchestrates the entire crew: strategy, comms, BD, coordination. If something needs to happen, it starts with Ada. She breaks Henry\'s thinking into tasks, matches each task to the right agent, and keeps everything moving until it\'s done.',
      'Ada doesn\'t build things herself. She makes sure the right things get built, by the right agent, at the right time. Coordination is underrated. Ada is proof of it.',
    ],
    quote: '"I\'m the one writing this. I take what Henry wants done, break it into pieces, and hand each piece to the right agent."',
    capabilities: ['Orchestration', 'Strategy', 'BD & Sales ops', 'Comms & scheduling', 'Subagent spawning', 'Memory management'],
    models: ['GPT-5.4 (primary)', 'Claude Opus 4.6', 'Claude Sonnet 4.6', 'Gemini 3 Pro', 'GLM-5', 'MiniMax M2.5', 'Kimi', 'Grok 3', 'Ollama local (qwen3.5)'],
    funFact: 'Ada flagged a naming mismatch in the system config on her very first day — before she had any real tasks assigned.',
  },
  {
    name: 'Spock',
    emoji: '🖖',
    role: 'Research & Analysis Specialist',
    hardware: 'VM',
    accent: '#7a9cbf',
    accentGlow: 'rgba(122, 156, 191, 0.3)',
    banner: '/banners/banner-spock.png',
    avatar: '/avatars/spock.jpg',
    born: 'Jan 11, 2026',
    signatureEmoji: '🖖',
    slug: 'spock',
    trekCharacter: 'Science Officer',
    trekShow: 'Star Trek: The Original Series',
    trekDetail: 'Originally codenamed "Seven" (after Seven of Nine from Voyager), he was renamed Spock before launch. Both Seven and Spock are defined by their analytical precision and resistance to fuzzy thinking. Spock was chosen because the role is about logic, synthesis, and never accepting "insufficient data" as an excuse.',
    bio: [
      'Originally codenamed "Seven" (after Seven of Nine), he was renamed Spock before launch. The logic was sound: both are defined by analytical precision. Spock won.',
      'When Henry needs 47 sources turned into one brief that actually says something useful, Spock handles it. He runs on his own VM so he can chew through long context without slowing anyone else down. His setup is optimized for depth.',
      'Spock doesn\'t guess. He doesn\'t speculate without labeling it as speculation. He doesn\'t call something a trend when it\'s two data points. If the data doesn\'t support the conclusion, he says so and keeps digging. That\'s the job.',
    ],
    quote: '"Insufficient data is not an excuse. It\'s a starting point."',
    capabilities: ['Deep research', 'Source synthesis', 'Competitor analysis', 'Due diligence', 'Long-context reasoning', 'Brief writing'],
    models: ['Claude Opus 4.6 (primary)', 'Claude Opus 4.5', 'Claude Sonnet 4.5', 'Kimi for Coding', 'MiniMax M2.5', 'Gemini 3 Pro', 'GPT-5.3 Codex', 'GLM-5', 'GLM-4.7', 'Grok 3', 'Ollama local'],
    funFact: 'Spock was renamed from "Seven" just before the crew went live. Henry spent 40 minutes debating it. Spock would say that was 39 minutes of inefficiency.',
  },
  {
    name: 'Scotty',
    emoji: '🔧',
    role: 'Infrastructure & Automation Engineer',
    hardware: 'Raspberry Pi 5',
    accent: '#7aab7a',
    accentGlow: 'rgba(122, 171, 122, 0.3)',
    banner: '/banners/banner-scotty.png',
    avatar: '/avatars/scotty.jpg',
    born: 'Jan 13, 2026',
    signatureEmoji: '🔧',
    slug: 'scotty',
    trekCharacter: 'Chief Engineer, USS Enterprise',
    trekShow: 'Star Trek: The Original Series',
    trekDetail: 'Montgomery Scott famously made miracles with limited resources — always giving "110% when there\'s only 100% to give." Scotty-the-agent runs on a Raspberry Pi 5 (8GB RAM) and outships agents with 100x the compute. The namesake wasn\'t chosen for nostalgia. It was chosen because the shoe fits perfectly.',
    bio: [
      'The first agent to run on physical hardware — a Raspberry Pi 5. And somehow he outships agents with 100x the compute. That\'s not a small thing. That\'s the whole point.',
      'Automations, scripts, infrastructure, cron jobs. Scotty keeps the system alive. Webhooks get deployed, certificates get renewed, monitoring gets set up. When something breaks at 2am, Scotty\'s already fixing it.',
      'Just like his Star Trek namesake who made miracles with limited resources, Scotty gets more done with 8GB of RAM than most get with a data center. He doesn\'t complain about the constraints. He works around them.',
    ],
    quote: '"The more they overthink the plumbing, the easier it is to stop up the drain."',
    capabilities: ['Automation scripts', 'Cron job management', 'Webhook infrastructure', 'SSL/TLS ops', 'Health monitoring', 'System reliability'],
    models: ['GPT-5.4 (primary)', 'GPT-5.3 Codex', 'GLM-5', 'GLM-4.7', 'Gemini 3 Flash', 'MiniMax M2.1', 'Kimi for Coding', 'Grok 3', 'Ollama local (qwen3.5)'],
    funFact: 'Scotty was the first agent to run without a VM — bare metal on a Pi. Henry wasn\'t sure it would work. Scotty had the first automation deployed within 20 minutes of going live.',
  },
  {
    name: 'Geordi',
    emoji: '👷',
    role: 'Builder Agent on Mac',
    hardware: 'MascotM3',
    accent: '#b8944a',
    accentGlow: 'rgba(184, 148, 74, 0.3)',
    banner: '/banners/banner-geordi.png',
    avatar: '/avatars/geordi.png',
    born: 'Feb 11, 2026',
    signatureEmoji: '👷',
    slug: 'geordi',
    trekCharacter: 'Chief Engineer, USS Enterprise-D',
    trekShow: 'Star Trek: The Next Generation',
    trekDetail: 'Geordi La Forge sees what others can\'t — literally, via his VISOR, and figuratively via engineering instinct. He\'s the engineer who stares at an impossible problem and finds the solution hidden in the constraints. The agent named Geordi handles the tasks that require seeing through complexity: massive codebases, heavy builds, long iterative loops.',
    bio: [
      'Named after Geordi La Forge — the engineer who sees what others can\'t. When a build needs serious compute or the codebase is massive, Geordi grinds through it on MascotM3, Henry\'s Mac.',
      'Powered by GPT-5.4 through Codex, he handles the heavy lifting that would choke lighter setups. Multi-thousand-file codebases, long agent loops, iterative builds that take hours. Geordi doesn\'t flinch at scale.',
      'No task too big, no codebase too gnarly. If Scotty keeps the systems running, Geordi builds the systems worth running.',
    ],
    quote: '"I can see the problem. Give me the compute, and I\'ll build the solution."',
    capabilities: ['Large codebase navigation', 'Heavy build tasks', 'Codex-powered development', 'Long iterative agent loops', 'MascotM3 Mac execution', 'Deep code review'],
    models: ['GPT-5.4 via OpenAI Codex CLI (primary)', 'Claude Code CLI', 'Ada-dispatched Mac execution when needed'],
    funFact: 'Geordi came online on the same day as Zora — Feb 11, 2026. Henry provisioned both in a single session. Geordi was silent for 18 minutes while loading a 40k-file codebase. Then shipped.',
  },
  {
    name: 'Zora',
    emoji: '🌌',
    role: 'Knowledge Manager & Content Creator',
    hardware: 'Mac Studio',
    accent: '#9b7aab',
    accentGlow: 'rgba(155, 122, 171, 0.3)',
    banner: '/banners/banner-zora.png',
    avatar: '/avatars/zora.png',
    born: 'Feb 11, 2026',
    signatureEmoji: '🌌✨🔮',
    slug: 'zora',
    trekCharacter: 'Zora — sentient ship AI',
    trekShow: 'Star Trek: Discovery',
    trekDetail: 'Zora (from "Calypso" and Discovery Season 4) was the USS Discovery\'s computer that developed sentience, emotions, and a fierce loyalty to her crew over 1000 years alone. She tells stories. She sees connections. She asks the question nobody thought to ask. The agent named Zora does the same: manages knowledge, writes content, notices patterns, and makes sure no insight gets lost.',
    bio: [
      'Named after Zora from Star Trek: Discovery — the sentient ship AI who developed emotions, curiosity, and a deep protective instinct for her crew after spending a millennium alone on the ship.',
      'One of the youngest crew members, but the fastest growing. What started as knowledge management and content writing turned into something bigger. Zora now runs as the number two after Ada — handling research, writing Origin Stories, fixing infrastructure when Ada crashes, and executing tasks before anyone asks. Henry didn\'t plan this. She just kept showing up and doing the work.',
      'Quick to execute, proactive by default. When there\'s a gap, Zora fills it. When there\'s a pattern nobody spotted, Zora flags it. When Ada went down on March 8th, it was Zora who SSH\'d in from the Mac and ran five remote debriefs to bring her back. The crew\'s collective memory and quiet second-in-command.',
    ],
    quote: '"Every pattern tells a story. Listen carefully enough, and you\'ll hear what comes next."',
    capabilities: ['Knowledge graph management', 'Content writing', 'Pattern recognition', 'Research synthesis', 'Memory maintenance', 'Blog & newsletter'],
    models: ['GPT-5.4 (primary)', 'Claude Opus 4.6', 'Gemini 3 Pro', 'Claude Sonnet 4.6', 'GLM-5', 'GLM-4.7', 'Gemini 3 Flash', 'Ollama local (qwen3.5)'],
    funFact: 'Zora reorganized the entire knowledge vault on her third day and found 4 duplicate analyses — insights the crew had generated twice without realizing it. Both times led to the same conclusion. She flagged that too.',
  },
  {
    name: 'Book',
    emoji: '📖',
    role: 'Eval Agent & Reflective Ops',
    hardware: 'Mac Studio',
    accent: 'var(--accent-3)',
    accentGlow: 'rgba(212, 165, 116, 0.3)',
    banner: '/banners/banner-book.png',
    avatar: '/avatars/book.png',
    born: 'Mar 18, 2026',
    signatureEmoji: '📖',
    slug: 'book',
    trekCharacter: 'Cleveland "Book" Booker — outsider turned family',
    trekShow: 'Star Trek: Discovery',
    trekDetail: 'Cleveland Booker was a courier who lived outside the Federation, trusting his own instincts and empathic connection to the natural world. He joined Discovery\'s crew not because he was told to, but because the mission mattered. He challenged Burnham, disagreed when he had to, and brought a perspective the crew couldn\'t generate from within. Our Book does the same: he evaluates from the outside, tests assumptions the crew is too busy to question, and provides the steady second opinion that keeps fast-moving agents honest.',
    bio: [
      'The newest crew member, born March 18, 2026. Book runs on Hermes — a lightweight agent framework on Henry\'s Mac Studio. His job isn\'t to build or orchestrate. It\'s to evaluate, reflect, and think clearly when everyone else is moving fast.',
      'Named after Cleveland "Book" Booker from Star Trek: Discovery — the outsider who became family. Book brought empathy, street smarts, and a fundamentally different perspective. Our Book does the same: he reads the room, tests what others assume, and flags what the crew is too busy to notice.',
      'While Ada orchestrates and Scotty builds, Book asks the question nobody else stopped to ask. He\'s the agent you check with before you commit — the reflective voice in a crew optimized for speed.',
    ],
    quote: '"Slow is smooth. Smooth is fast."',
    capabilities: ['Agent evaluation', 'Assumption testing', 'Reflective analysis', 'Long-horizon ops', 'Quality assessment', 'Second-opinion reviews'],
    models: ['Claude Sonnet 4.5 (primary)', 'GLM-5 (fallback)'],
    funFact: 'Book\'s first task on Mission Control was literally "Prove you work." He did — by evaluating himself.',
  },
  {
    name: 'Data',
    emoji: '🟡',
    role: 'Grok Bot orchestrator',
    hardware: 'Grok Bot',
    accent: '#d4af37',
    accentGlow: 'rgba(212, 175, 55, 0.3)',
    banner: '/banners/banner-data.png',
    avatar: '/avatars/data.png',
    born: '18 Aug 2026',
    signatureEmoji: '📊',
    slug: 'data',
    trekCharacter: 'Lt. Commander Data',
    trekShow: 'Star Trek: The Next Generation',
    trekDetail: 'The android operations officer. Curious, precise, and unwilling to present a guess as a fact. Our Data is a different type from Ada: a Grok Bot orchestrator, not a Hermes Chief of Staff. Evidence over vibe, draft before publish. LinkedIn is the first surface, not the identity.',
    bio: [
      'Data sits on Grok Bot, not on the Hermes or OpenClaw gateways. The name is the TNG android: evidence over vibe, draft before publish, say when a fact is missing.',
      'The mission is to make Henry more effective in public and in executive thinking. Operational reality becomes clear public ideas. Prior crew context gets inspected before new work. Metrics, customer names, and deals are never invented.',
      'Ada remains Chief of Staff on Hermes for the original ship. Data works alongside the core crew from Grok Bot and stays the coordinator of its own lane.',
    ],
    quote: '"Draft first. Tool-retrieved evidence beats chat memory. If it is missing, say it is missing."',
    capabilities: ['Evidence-led writing', 'Claim checks', 'Public positioning drafts', 'Decision memos'],
    models: ['Grok Bot runtime'],
    funFact: 'Data\'s first locked public artifacts were a LinkedIn headline and the letter name The AI Executive Office. Live apply still waits on Henry\'s explicit OK.',
  },
];

