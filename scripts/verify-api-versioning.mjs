import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import subscribeHandler from '../api/subscribe.js';
import feedbackHandler from '../api/workshop-feedback.js';
import middleware from '../middleware.ts';

function makeReq(method, ip) {
  const req = new EventEmitter();
  req.method = method;
  req.headers = { 'x-forwarded-for': ip };
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

function assertPolicyHeaders(headers, label) {
  const get = (key) => headers.get ? headers.get(key) : headers[key.toLowerCase()];
  assert(get('API-Version') === '1', `${label} missing API-Version: 1`);
  assert(get('X-API-Version') === '1', `${label} missing X-API-Version: 1`);
  const link = get('Link') || '';
  assert(link.includes('/developers/#versioning-policy'), `${label} Link header missing versioning policy URL`);
  assert(link.includes('rel="deprecation"'), `${label} Link header missing deprecation relation`);
}

async function assertHandlerPolicyHeaders(handler, label, ip) {
  const options = await call(handler, 'OPTIONS', `${ip}.1`);
  assert(options.statusCode === 204, `${label} OPTIONS expected 204, got ${options.statusCode}`);
  assertPolicyHeaders(options.headers, `${label} OPTIONS`);

  const methodError = await call(handler, 'GET', `${ip}.2`);
  assert(methodError.statusCode === 405, `${label} GET expected 405, got ${methodError.statusCode}`);
  assertPolicyHeaders(methodError.headers, `${label} GET`);
}

async function assertMiddlewarePolicyHeaders() {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async () => new Response('{"ok":true}', {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
    const ok = await middleware(new Request('https://superada.ai/api/benchmarks'));
    assert(ok.status === 200, `middleware API expected 200, got ${ok.status}`);
    assertPolicyHeaders(ok.headers, 'middleware API success');

    globalThis.fetch = async () => new Response('<html>missing</html>', {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
    const missing = await middleware(new Request('https://superada.ai/api/not-real'));
    assert(missing.status === 404, `middleware API missing expected 404, got ${missing.status}`);
    assertPolicyHeaders(missing.headers, 'middleware API error');
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function assertVercelStaticApiPolicyHeaders() {
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const apiHeaders = vercel.headers?.find((entry) => entry.source === '/api/:path*');
  assert(apiHeaders, 'vercel.json missing /api/:path* headers rule');
  const values = new Map(apiHeaders.headers.map((header) => [header.key, header.value]));
  assert(values.get('API-Version') === '1', 'vercel /api/:path* missing API-Version: 1');
  assert(values.get('X-API-Version') === '1', 'vercel /api/:path* missing X-API-Version: 1');
  assert(values.get('Link')?.includes('/developers/#versioning-policy'), 'vercel /api/:path* Link missing versioning policy');
}

function assertOpenApiPolicy() {
  const spec = JSON.parse(fs.readFileSync('public/openapi.json', 'utf8'));
  assert(spec.info?.['x-api-version'] === '1', 'OpenAPI missing info.x-api-version');
  assert(spec.info?.['x-versioning-policy']?.includes('Unprefixed /api/... endpoints are the v1 contract'), 'OpenAPI missing versioning policy text');
  assert(spec.externalDocs?.url === 'https://superada.ai/developers/#versioning-policy', 'OpenAPI externalDocs missing policy URL');
  for (const key of ['ApiVersion', 'XApiVersion', 'Link']) {
    assert(spec.components?.headers?.[key], `OpenAPI missing components.headers.${key}`);
  }
  const subscribe = spec.paths?.['/api/subscribe']?.post;
  assert(subscribe?.['x-api-version'] === '1', 'OpenAPI /api/subscribe missing x-api-version');
  assert(subscribe?.responses?.['200']?.headers?.['API-Version'], 'OpenAPI /api/subscribe 200 missing API-Version response header');
  const benchmarks = spec.paths?.['/api/benchmarks']?.get;
  assert(benchmarks?.responses?.['200']?.headers?.['API-Version'], 'OpenAPI /api/benchmarks 200 missing API-Version response header');
}

function assertDeveloperDocsPolicy() {
  const docs = fs.readFileSync('src/pages/developers.astro', 'utf8');
  assert(docs.includes('id="versioning-policy"'), 'developers page missing versioning-policy anchor');
  assert(docs.includes('REST versioning and deprecation policy'), 'developers page missing policy heading');
  assert(docs.includes('at least 90 days of notice'), 'developers page missing deprecation notice period');
}

await assertHandlerPolicyHeaders(subscribeHandler, 'subscribe', '192.0.2');
await assertHandlerPolicyHeaders(feedbackHandler, 'workshop-feedback', '192.0.3');
await assertMiddlewarePolicyHeaders();
assertVercelStaticApiPolicyHeaders();
assertOpenApiPolicy();
assertDeveloperDocsPolicy();
console.log('API versioning/deprecation verification passed.');
