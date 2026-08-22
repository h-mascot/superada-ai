const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 20 * 1024;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const ALLOWED_RATINGS = new Set(['1', '2', '3', '4', '5']);
const ALLOWED_MODULES = new Set(['intro-context', 'agents-vs-chatbots', 'model-landscape', 'demo-install', 'build-exercise', 'none']);

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
  return entry.count > RATE_LIMIT_MAX;
}

function send(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.end(JSON.stringify(payload));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('body_too_large'));
        req.destroy();
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

function cleanRating(value) {
  const v = cleanString(value, 2);
  return ALLOWED_RATINGS.has(v) ? Number(v) : null;
}

async function githubRequest(path, options = {}) {
  const token = process.env.FEEDBACK_GITHUB_TOKEN || process.env.SUBSCRIBER_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) throw new Error('missing_github_token');
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'superada-feedback-api',
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
    return { sha: file.sha, store: JSON.parse(content || '{"responses":[]}') };
  } catch (err) {
    if (err.status === 404) return { sha: null, store: { responses: [] } };
    throw err;
  }
}

async function writeStore(owner, repo, path, sha, store) {
  const content = Buffer.from(JSON.stringify(store, null, 2) + '\n', 'utf8').toString('base64');
  return githubRequest(`/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: 'Add workshop feedback response',
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
    const name = cleanString(body.name, 120);
    const hasEmail = EMAIL_RE.test(email);

    const ratings = {};
    for (const key of ['overall', 'clarity', 'pace', 'handsOn', 'usefulness']) {
      const r = cleanRating(body.ratings ? body.ratings[key] : null);
      if (r === null) return send(res, 400, { ok: false, error: `Rate every question from 1 to 5 (missing ${key}).` });
      ratings[key] = r;
    }

    const mostUsefulModule = ALLOWED_MODULES.has(cleanString(body.mostUsefulModule, 40)) ? cleanString(body.mostUsefulModule, 40) : 'none';
    const struggledWith = cleanString(body.struggledWith, 2000);
    const biggestTakeaway = cleanString(body.biggestTakeaway, 2000);
    const wantNext = cleanString(body.wantNext, 2000);
    const anythingElse = cleanString(body.anythingElse, 2000);

    if (!struggledWith && !biggestTakeaway) {
      return send(res, 400, { ok: false, error: 'Answer at least one of: what you struggled with, or your biggest takeaway.' });
    }

    const repoSpec = process.env.FEEDBACK_REPO || 'h-mascot/superada-subscribers';
    const [owner, repo] = repoSpec.split('/');
    const path = process.env.FEEDBACK_FILE || 'workshop-feedback.json';
    if (!owner || !repo) throw new Error('bad_feedback_repo');

    const now = new Date().toISOString();
    const record = {
      id: crypto.randomUUID(),
      email: hasEmail ? email : '',
      name,
      workshop: cleanString(body.workshop, 80) || 'ai-agents-workshop-2026-08',
      ratings,
      mostUsefulModule,
      struggledWith,
      biggestTakeaway,
      wantNext,
      anythingElse,
      source: 'superada.ai/workshop-feedback',
      createdAt: now,
    };

    const { sha, store } = await readStore(owner, repo, path);
    const responses = Array.isArray(store.responses) ? store.responses : [];
    responses.push(record);
    store.responses = responses;
    store.updatedAt = now;
    await writeStore(owner, repo, path, sha, store);

    return send(res, 200, {
      ok: true,
      message: 'Feedback sent. Thank you - this makes the next session sharper.',
    });
  } catch (err) {
    if (err?.message === 'body_too_large') return send(res, 413, { ok: false, error: 'Request body too large.' });
    console.error('feedback_failed', err);
    return send(res, 500, { ok: false, error: 'Feedback storage is not configured yet.' });
  }
}
