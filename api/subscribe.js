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

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
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
  if (req.method === 'OPTIONS') return send(res, 204, {});
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'POST only' });

  const ip = clientIp(req);
  if (isRateLimited(ip)) return send(res, 429, { ok: false, error: 'Too many requests. Try again in a minute.' });

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

    if (subscriberType === 'human' && !hasEmail) return send(res, 400, { ok: false, error: 'Enter a valid email.' });
    if (subscriberType === 'agent' && email && !hasEmail) return send(res, 400, { ok: false, error: 'Enter a valid email or leave it blank.' });
    if (!topics.length) return send(res, 400, { ok: false, error: 'Pick at least one update type.' });

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
    if (err?.message === 'body_too_large') return send(res, 413, { ok: false, error: 'Request body too large.' });
    console.error('subscribe_failed', err);
    return send(res, 500, { ok: false, error: 'Subscription storage is not configured yet.' });
  }
}
