const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOPICS = new Set(['ship-log', 'releases', 'weekly-claw', 'tools-skills', 'workflow-packs']);
const MAX_BODY_BYTES = 10 * 1024;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

/** @type {Map<string, { count: number, resetAt: number }>} */
const rateLimitStore = new Map();

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) return forwarded.split(',')[0].trim();
  if (Array.isArray(forwarded) && forwarded.length) return String(forwarded[0]).trim();
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp.length) return realIp.trim();
  return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now >= entry.resetAt) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(ip, { count: 1, resetAt });
    return {
      limited: false,
      limit: RATE_LIMIT_MAX,
      remaining: RATE_LIMIT_MAX - 1,
      resetSeconds: Math.ceil((resetAt - now) / 1000),
    };
  }
  entry.count += 1;
  return {
    limited: entry.count > RATE_LIMIT_MAX,
    limit: RATE_LIMIT_MAX,
    remaining: Math.max(0, RATE_LIMIT_MAX - entry.count),
    resetSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
  };
}

function setRateLimitHeaders(res, rateLimit, includeRetryAfter = false) {
  res.setHeader('RateLimit-Limit', String(rateLimit.limit));
  res.setHeader('RateLimit-Remaining', String(rateLimit.remaining));
  res.setHeader('RateLimit-Reset', String(rateLimit.resetSeconds));
  res.setHeader('RateLimit-Policy', `${rateLimit.limit};w=${Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)}`);
  if (includeRetryAfter) res.setHeader('Retry-After', String(rateLimit.resetSeconds));
}

function defaultRateLimit() {
  return {
    limited: false,
    limit: RATE_LIMIT_MAX,
    remaining: RATE_LIMIT_MAX,
    resetSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000),
  };
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function fail(res, status, code, message, hint) {
  return send(res, status, {
    ok: false,
    error: { code, message, hint },
  });
}

function parseBody(req) {
  if (typeof req.body === 'object' && req.body !== null) return req.body;
  if (typeof req.body === 'string') {
    if (Buffer.byteLength(req.body, 'utf8') > MAX_BODY_BYTES) throw new Error('body_too_large');
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return new Promise((resolve, reject) => {
    let raw = '';
    let bytes = 0;
    req.on('data', (chunk) => {
      bytes += chunk.length;
      if (bytes > MAX_BODY_BYTES) {
        req.destroy();
        reject(new Error('body_too_large'));
        return;
      }
      raw += chunk;
    });
    req.on('end', () => {
      try { resolve(JSON.parse(raw || '{}')); } catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

function cleanString(value, max = 160) {
  return String(value || '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max);
}

async function githubRequest(path, options = {}) {
  const token = process.env.SUBSCRIBER_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) throw new Error('missing_github_token');
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'superada-subscribe-api',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const err = new Error(data?.message || `github_${response.status}`);
    err.status = response.status;
    throw err;
  }
  return data;
}

async function readStore(owner, repo, path) {
  try {
    const file = await githubRequest(`/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`);
    const content = Buffer.from(file.content || '', 'base64').toString('utf8');
    return { sha: file.sha, store: JSON.parse(content || '{"subscribers":[]}') };
  } catch (err) {
    if (err.status === 404) return { sha: null, store: { subscribers: [] } };
    throw err;
  }
}

async function writeStore(owner, repo, path, sha, store) {
  const content = Buffer.from(JSON.stringify(store, null, 2) + '\n', 'utf8').toString('base64');
  return githubRequest(`/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: 'Add SuperAda subscriber',
      content,
      ...(sha ? { sha } : {}),
    }),
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://superada.ai');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    setRateLimitHeaders(res, defaultRateLimit());
    return send(res, 204, {});
  }

  const ip = clientIp(req);
  const rateLimit = checkRateLimit(ip);
  setRateLimitHeaders(res, rateLimit, rateLimit.limited);
  if (rateLimit.limited) return fail(res, 429, 'rate_limited', 'Too many requests. Try again in a minute.', 'Wait at least 60 seconds before retrying and avoid tight polling loops.');
  if (req.method !== 'POST') return fail(res, 405, 'method_not_allowed', 'POST only.', 'Send a POST request with a JSON body; see /openapi.json for the request schema.');

  try {
    const body = await parseBody(req);
    if (cleanString(body.company)) return send(res, 200, { ok: true });

    const email = cleanString(body.email, 254).toLowerCase();
    const subscriberType = cleanString(body.subscriberType, 20) === 'agent' ? 'agent' : 'human';
    const topics = Array.isArray(body.topics)
      ? body.topics.map((topic) => cleanString(topic, 40)).filter((topic) => TOPICS.has(topic))
      : [];
    const agentName = subscriberType === 'agent' ? cleanString(body.agentName, 120) : '';
    const agentUrl = subscriberType === 'agent' ? cleanString(body.agentUrl, 240) : '';
    const hasEmail = EMAIL_RE.test(email);

    if (subscriberType === 'human' && !hasEmail) return fail(res, 400, 'invalid_email', 'Enter a valid email.', 'For human subscriptions, provide a syntactically valid email address in the email field.');
    if (subscriberType === 'agent' && email && !hasEmail) return fail(res, 400, 'invalid_email', 'Enter a valid email or leave it blank.', 'For agent subscriptions, either omit email or provide a syntactically valid email address.');
    if (!topics.length) return fail(res, 400, 'missing_topics', 'Pick at least one update type.', 'Submit at least one supported topic from /openapi.json, such as ship-log or releases.');

    const repoSpec = process.env.SUBSCRIBER_REPO || 'h-mascot/superada-subscribers';
    const [owner, repo] = repoSpec.split('/');
    const path = process.env.SUBSCRIBER_FILE || 'subscribers.json';
    if (!owner || !repo) throw new Error('bad_subscriber_repo');

    const now = new Date().toISOString();
    const record = {
      email: hasEmail ? email : '',
      subscriberType,
      name: subscriberType === 'human' ? cleanString(body.name, 120) : '',
      agentName,
      agentUrl,
      topics,
      cadence: subscriberType === 'agent' ? 'weekly-agent-check' : 'on-post-or-release',
      source: subscriberType === 'agent' ? 'superada.ai/subscribe/install' : 'superada.ai/subscribe',
      status: 'active',
      ...(subscriberType === 'agent' ? {
        installIntent: true,
        installRequestedAt: now,
        installCommand: 'curl -sSf https://superada.ai/install/superada-weekly-watch | sh',
      } : {}),
    };

    const { sha, store } = await readStore(owner, repo, path);
    const subscribers = Array.isArray(store.subscribers) ? store.subscribers : [];
    const agentKey = agentUrl ? `agent-url:${agentUrl.toLowerCase()}` : agentName ? `agent-name:${agentName.toLowerCase()}` : '';
    const key = subscriberType === 'agent'
      ? (hasEmail ? `agent-email:${email}` : agentKey)
      : `human:${email}`;
    const existingIndex = key
      ? subscribers.findIndex((item) => {
        const itemType = item.subscriberType || 'human';
        if (itemType === 'agent') {
          const itemEmail = String(item.email || '').toLowerCase();
          const itemUrl = String(item.agentUrl || '').toLowerCase();
          const itemName = String(item.agentName || '').toLowerCase();
          const itemKey = itemEmail ? `agent-email:${itemEmail}` : itemUrl ? `agent-url:${itemUrl}` : itemName ? `agent-name:${itemName}` : '';
          return itemKey === key;
        }
        return `human:${String(item.email || '').toLowerCase()}` === key;
      })
      : -1;

    if (existingIndex >= 0) {
      subscribers[existingIndex] = { ...subscribers[existingIndex], ...record, updatedAt: now };
    } else {
      subscribers.push({ id: crypto.randomUUID(), ...record, createdAt: now, updatedAt: now });
    }

    store.subscribers = subscribers.sort((a, b) => String(a.email || a.agentName || a.agentUrl || '').localeCompare(String(b.email || b.agentName || b.agentUrl || '')));
    store.updatedAt = now;
    await writeStore(owner, repo, path, sha, store);

    return send(res, 200, {
      ok: true,
      message: subscriberType === 'agent'
        ? 'Agent details saved. Install the watcher skill to check SuperAda weekly.'
        : 'Subscribed. You will get SuperAda posts, releases, and useful crew updates.',
    });
  } catch (err) {
    if (err?.message === 'body_too_large') return fail(res, 413, 'body_too_large', 'Request body too large.', 'Send a smaller JSON payload under 10 KB.');
    console.error('subscribe_failed', err);
    return fail(res, 500, 'storage_unavailable', 'Subscription storage is not configured yet.', 'Retry later or use /contact with the request context if the problem persists.');
  }
}
