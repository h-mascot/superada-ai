export type ScrollWorldNode = {
  label: string;
  meta?: string;
  image?: string;
};

export type ScrollWorldScene = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  accent: string;
  accentSoft: string;
  poster?: string;
  desktopVideo?: string;
  mobileVideo?: string;
  nodes: ScrollWorldNode[];
  cta?: { label: string; href: string };
  assetPrompt: string;
};

export type ScrollWorldManifest = {
  id: string;
  title: string;
  ariaLabel: string;
  scenes: ScrollWorldScene[];
};

export const enterpriseCrewWorld: ScrollWorldManifest = {
  id: 'enterprise-crew',
  title: 'Enterprise Crew headquarters',
  ariaLabel: 'Fly through the Enterprise Crew headquarters',
  scenes: [
    {
      id: 'arrival', number: '01', eyebrow: 'Arrival', accent: '#f0a24b', accentSoft: '#4a2811',
      desktopVideo: '/videos/scroll-world/enterprise-crew/arrival-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/arrival-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/arrival.webp',
      title: 'One headquarters. Six specialists, plus Data.',
      body: 'Ada runs the Hermes crew. Data is the Grok Bot orchestrator. Worf, Orb, and Signal sit under Data.',
      nodes: [{ label: 'INTENT', meta: 'INBOUND' }, { label: 'ADA', meta: 'OPERATOR', image: '/avatars/ada.jpg' }, { label: 'ROUTE', meta: 'OWNED' }],
      cta: { label: 'Meet Ada', href: '/crew/ada' },
      assetPrompt: 'Cinematic isometric AI operations headquarters at sunrise, a command beacon receiving a glowing work packet, warm copper and black palette, continuous camera dive toward the bridge.'
    },
    {
      id: 'research', number: '02', eyebrow: 'Research Wing', accent: '#7fb4e5', accentSoft: '#172f46',
      desktopVideo: '/videos/scroll-world/enterprise-crew/research-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/research-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/research.webp',
      title: 'Spock turns source piles into decisions.',
      body: 'Research enters messy. It leaves with provenance, contradiction checks and a recommendation someone can act on.',
      nodes: [{ label: '47 SOURCES', meta: 'RAW' }, { label: 'SPOCK', meta: 'RESEARCH', image: '/avatars/spock.jpg' }, { label: 'BRIEF', meta: 'VERIFIED' }],
      cta: { label: 'Meet Spock', href: '/crew/spock' },
      assetPrompt: 'Isometric research observatory inside a futuristic headquarters, analyst surrounded by floating source cards and evidence trails, blue light, camera moves through the archive into a decision chamber.'
    },
    {
      id: 'engineering', number: '03', eyebrow: 'Engineering Deck', accent: '#8dd396', accentSoft: '#19331f',
      desktopVideo: '/videos/scroll-world/enterprise-crew/engineering-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/engineering-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/engineering.webp',
      title: 'Scotty and Geordi make the thing real.',
      body: 'Fast automations run beside heavy engineering. Different machines, one build contract, no ceremonial “it should work.”',
      nodes: [{ label: 'SCOTTY', meta: 'AUTOMATION', image: '/avatars/scotty.jpg' }, { label: 'BUILD', meta: 'RUNNING' }, { label: 'GEORDI', meta: 'ENGINEERING', image: '/avatars/geordi.png' }],
      cta: { label: 'Meet engineering', href: '/crew/geordi' },
      assetPrompt: 'Living isometric software engineering deck, two agent engineers operating build stations, code modules moving on illuminated rails, green and amber practical machinery, continuous tracking camera.'
    },
    {
      id: 'knowledge', number: '04', eyebrow: 'Knowledge Core', accent: '#c69be2', accentSoft: '#382144',
      desktopVideo: '/videos/scroll-world/enterprise-crew/knowledge-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/knowledge-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/knowledge.webp',
      title: 'Zora keeps the crew from waking up amnesiac.',
      body: 'Decisions, project state and lessons become durable memory instead of folklore trapped in yesterday’s chat.',
      nodes: [{ label: 'SESSIONS', meta: 'EVENTS' }, { label: 'ZORA', meta: 'MEMORY', image: '/avatars/zora.png' }, { label: 'CONTEXT', meta: 'DURABLE' }],
      cta: { label: 'Meet Zora', href: '/crew/zora' },
      assetPrompt: 'Futuristic isometric knowledge library with a sentient archivist agent, luminous memory threads flowing into a central graph, violet night palette, camera passes through shelves into the graph core.'
    },
    {
      id: 'review', number: '05', eyebrow: 'Review Chamber', accent: '#e0bd7f', accentSoft: '#443318',
      desktopVideo: '/videos/scroll-world/enterprise-crew/review-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/review-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/review.webp',
      title: 'Book slows the room down before reality does.',
      body: 'Assumptions are challenged, evidence is checked and weak work loops back before it escapes wearing a green badge.',
      nodes: [{ label: 'CANDIDATE', meta: 'REVIEW' }, { label: 'BOOK', meta: 'EVAL', image: '/avatars/book.png' }, { label: 'RECEIPT', meta: 'PASS / LOOP' }],
      cta: { label: 'Meet Book', href: '/crew/book' },
      assetPrompt: 'Isometric quality review chamber, reflective agent inspecting a glowing software artifact through evidence gates, gold and charcoal palette, failed items loop visibly back to engineering.'
    },
    {
      id: 'ship', number: '06', eyebrow: 'Outbound', accent: '#f26f52', accentSoft: '#4a1d15',
      desktopVideo: '/videos/scroll-world/enterprise-crew/ship-desktop.mp4',
      mobileVideo: '/videos/scroll-world/enterprise-crew/ship-portrait.mp4',
      poster: '/images/scroll-world/enterprise-crew/ship.webp',
      title: 'Completed work leaves with receipts.',
      body: 'The crew closes the loop: shipped artifact, verified state, owner and the next useful move. Activity is not the product.',
      nodes: [{ label: 'BUILD', meta: 'PASS' }, { label: 'DEPLOY', meta: 'LIVE' }, { label: 'PROOF', meta: 'ATTACHED' }],
      cta: { label: 'Read the ship log', href: '/blog' },
      assetPrompt: 'Cinematic isometric launch deck at dusk, finished digital products leaving a crew headquarters toward real businesses, clear proof receipts attached, coral light, camera pulls out to reveal the whole operating city.'
    }
  ]
};

export const softwareFactoryWorld: ScrollWorldManifest = {
  id: 'software-factory',
  title: 'The software factory',
  ariaLabel: 'Follow a product request through the software factory',
  scenes: [
    { id: 'brief', desktopVideo: '/videos/scroll-world/software-factory/brief-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/brief-portrait.mp4', poster: '/images/scroll-world/software-factory/brief.webp', number: '01', eyebrow: 'Customer Brief', accent: '#f0a24b', accentSoft: '#4a2811', title: 'A request enters. A contract leaves intake.', body: 'The factory captures the outcome, constraints, evidence and definition of done before agents touch code.', nodes: [{ label: 'NEED', meta: 'WHY' }, { label: 'SCOPE', meta: 'WHAT' }, { label: 'PROOF', meta: 'DONE' }], assetPrompt: 'Isometric software factory intake dock receiving a customer brief as a glowing package, workers inspect outcome and constraints, warm industrial sci-fi palette.' },
    { id: 'plan', desktopVideo: '/videos/scroll-world/software-factory/plan-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/plan-portrait.mp4', poster: '/images/scroll-world/software-factory/plan.webp', number: '02', eyebrow: 'Planning Cell', accent: '#7fb4e5', accentSoft: '#172f46', title: 'The planner cuts work into testable parts.', body: 'Dependencies become a build graph. Independent work moves in parallel; risky decisions get gates.', nodes: [{ label: 'SPEC', meta: 'INPUT' }, { label: 'GRAPH', meta: 'ROUTES' }, { label: 'TASKS', meta: 'OWNED' }], assetPrompt: 'Isometric planning room turning a large glowing blueprint into connected work packages on separate rails, blue precision lighting.' },
    { id: 'build', desktopVideo: '/videos/scroll-world/software-factory/build-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/build-portrait.mp4', poster: '/images/scroll-world/software-factory/build.webp', number: '03', eyebrow: 'Build Floor', accent: '#8dd396', accentSoft: '#19331f', title: 'Agents build components at specialist stations.', body: 'Interfaces stay stable while focused builders produce independently verifiable pieces.', nodes: [{ label: 'UI', meta: 'STATION A' }, { label: 'API', meta: 'STATION B' }, { label: 'DATA', meta: 'STATION C' }], assetPrompt: 'Lively isometric software assembly floor, specialist AI agents building UI API and data modules at separate stations, code components move on conveyor rails.' },
    { id: 'test', desktopVideo: '/videos/scroll-world/software-factory/test-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/test-portrait.mp4', poster: '/images/scroll-world/software-factory/test.webp', number: '04', eyebrow: 'Test Line', accent: '#c69be2', accentSoft: '#382144', title: 'Faulty parts do not get motivational speeches.', body: 'Tests exercise contracts and integrations. Failed modules loop back with exact evidence instead of continuing downstream.', nodes: [{ label: 'UNIT', meta: 'PASS' }, { label: 'E2E', meta: 'FAIL' }, { label: 'LOOPBACK', meta: 'OWNER' }], assetPrompt: 'Isometric automated software test line, green modules pass, one red faulty module diverted back on a visible loop, violet and red diagnostic light.' },
    { id: 'secure', desktopVideo: '/videos/scroll-world/software-factory/secure-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/secure-portrait.mp4', poster: '/images/scroll-world/software-factory/secure.webp', number: '05', eyebrow: 'Security Gate', accent: '#efcc70', accentSoft: '#473916', title: 'Security and review inspect the candidate.', body: 'Secrets, permissions, dependencies and evidence face explicit gates before release.', nodes: [{ label: 'SECRETS', meta: 'CLEAN' }, { label: 'POLICY', meta: 'ENFORCED' }, { label: 'REVIEW', meta: 'APPROVED' }], assetPrompt: 'Isometric security checkpoint inspecting a digital product, scanners for secrets permissions and dependencies, amber high-control industrial scene.' },
    { id: 'deploy', desktopVideo: '/videos/scroll-world/software-factory/deploy-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/deploy-portrait.mp4', poster: '/images/scroll-world/software-factory/deploy.webp', number: '06', eyebrow: 'Release Dock', accent: '#f26f52', accentSoft: '#4a1d15', title: 'The release line ships a named candidate.', body: 'A precise build moves through deployment. Health, canaries and content checks verify the live result.', nodes: [{ label: 'COMMIT', meta: 'IDENTITY' }, { label: 'DEPLOY', meta: 'PROMOTE' }, { label: 'CANARY', meta: 'LIVE' }], assetPrompt: 'Isometric software release dock launching a verified digital product, deployment rails and live canary lights, coral sunset palette.' },
    { id: 'observe', desktopVideo: '/videos/scroll-world/software-factory/observe-desktop.mp4', mobileVideo: '/videos/scroll-world/software-factory/observe-portrait.mp4', poster: '/images/scroll-world/software-factory/observe.webp', number: '07', eyebrow: 'Monitoring Room', accent: '#64d9d0', accentSoft: '#163b39', title: 'Production reports back to the factory.', body: 'Telemetry, user signals and incidents become the next owned input. Shipping closes one loop and opens a smarter one.', nodes: [{ label: 'USERS', meta: 'SIGNAL' }, { label: 'RUNTIME', meta: 'HEALTH' }, { label: 'NEXT', meta: 'OWNED' }], cta: { label: 'Explore workflow packs', href: '/workflows' }, assetPrompt: 'Isometric monitoring room overlooking live digital products in use, telemetry streams return into factory planning, teal night palette, camera pulls out over full system.' }
  ]
};

export const scrollWorlds = {
  'enterprise-crew': enterpriseCrewWorld,
  'software-factory': softwareFactoryWorld,
} as const;

export type ScrollWorldId = keyof typeof scrollWorlds;
