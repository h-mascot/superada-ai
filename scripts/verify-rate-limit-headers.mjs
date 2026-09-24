import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import subscribeHandler from '../api/subscribe.js';
import feedbackHandler from '../api/workshop-feedback.js';
import middleware from '../middleware.ts';

function makeReq(method, ip) {
  const req = new EventEmitter();
  req.method = method;
  req.headers = {
    'x-forwarded-for': ip,
  };
  req.socket = { remoteAddress: ip };
  return req;
}

function makeRes() {
  return {
    statusCode: 200,
    headers: {},
    body: '',
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = String(value);
    },
    end(body = '') {
      this.body = String(body);
      this.finished = true;
    },
  };
}

async function call(handler, method, ip) {
  const req = makeReq(method, ip);
  const res = makeRes();
  await handler(req, res);
  return res;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertRateLimitHeaders(res, label) {
  for (const header of ['ratelimit-limit', 'ratelimit-remaining', 'ratelimit-reset', 'ratelimit-policy']) {
    assert(res.headers[header], `${label} missing ${header}`);
  }
}

async function assertHandlerRateLimit(handler, label, baseIp) {
  const options = await call(handler, 'OPTIONS', `${baseIp}.1`);
  assert(options.statusCode === 204, `${label} OPTIONS expected 204, got ${options.statusCode}`);
  assertRateLimitHeaders(options, `${label} OPTIONS`);

  const methodError = await call(handler, 'GET', `${baseIp}.2`);
  assert(methodError.statusCode === 405, `${label} GET expected 405, got ${methodError.statusCode}`);
  assertRateLimitHeaders(methodError, `${label} GET`);
  assert(!methodError.headers['retry-after'], `${label} GET should not include Retry-After before limit is exceeded`);

  let limited;
  for (let i = 0; i < 6; i += 1) {
    limited = await call(handler, 'GET', `${baseIp}.3`);
  }
  assert(limited.statusCode === 429, `${label} sixth request expected 429, got ${limited.statusCode}`);
  assertRateLimitHeaders(limited, `${label} 429`);
  assert(limited.headers['retry-after'], `${label} 429 missing retry-after`);
  assert(limited.headers['ratelimit-remaining'] === '0', `${label} 429 remaining should be 0`);

  const body = JSON.parse(limited.body);
  assert(body.ok === false, `${label} 429 body missing ok:false`);
  assert(body.error?.code === 'rate_limited', `${label} 429 body missing rate_limited code`);
}

function assertVercelStaticApiHeaders() {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const apiHeaders = vercel.headers?.find((entry) => entry.source === '/api/:path*');
  assert(apiHeaders, 'vercel.json missing /api/:path* headers rule');
  const keys = new Set(apiHeaders.headers.map((header) => header.key));
  for (const key of ['RateLimit-Limit', 'RateLimit-Remaining', 'RateLimit-Reset', 'RateLimit-Policy']) {
    assert(keys.has(key), `vercel /api/:path* headers missing ${key}`);
  }
}

function assertOpenApiRateLimitHeaders() {
  const spec = JSON.parse(fs.readFileSync('public/openapi.json', 'utf8'));
  for (const key of ['RateLimitLimit', 'RateLimitRemaining', 'RateLimitReset', 'RateLimitPolicy', 'RetryAfter']) {
    assert(spec.components?.headers?.[key], `OpenAPI missing components.headers.${key}`);
  }
  const subscribe429 = spec.paths?.['/api/subscribe']?.post?.responses?.['429'];
  assert(subscribe429?.headers?.['Retry-After'], 'OpenAPI /api/subscribe 429 missing Retry-After header');
  const benchmarks200 = spec.paths?.['/api/benchmarks']?.get?.responses?.['200'];
  assert(benchmarks200?.headers?.['RateLimit-Limit'], 'OpenAPI /api/benchmarks 200 missing RateLimit-Limit header');
}

async function assertMiddlewareApiRateLimitHeaders() {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async () => new Response('{"ok":true}', {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
    const ok = await middleware(new Request('https://superada.ai/api/benchmarks'));
    assert(ok.status === 200, `middleware static API expected 200, got ${ok.status}`);
    for (const header of ['RateLimit-Limit', 'RateLimit-Remaining', 'RateLimit-Reset', 'RateLimit-Policy']) {
      assert(ok.headers.get(header), `middleware static API missing ${header}`);
    }

    globalThis.fetch = async () => new Response('<html>missing</html>', {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
    const missing = await middleware(new Request('https://superada.ai/api/not-real'));
    assert(missing.status === 404, `middleware missing API expected 404, got ${missing.status}`);
    for (const header of ['RateLimit-Limit', 'RateLimit-Remaining', 'RateLimit-Reset', 'RateLimit-Policy']) {
      assert(missing.headers.get(header), `middleware missing API missing ${header}`);
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
}

await assertHandlerRateLimit(subscribeHandler, 'subscribe', '203.0.113');
await assertHandlerRateLimit(feedbackHandler, 'workshop-feedback', '198.51.100');
await assertMiddlewareApiRateLimitHeaders();
assertVercelStaticApiHeaders();
assertOpenApiRateLimitHeaders();
console.log('Rate-limit header verification passed.');
