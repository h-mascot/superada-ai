import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = (path) => fs.readFileSync(path, 'utf8');

const baseHead = read('src/components/BaseHead.astro');
assert(baseHead.includes('rel="service-desc"'), 'BaseHead missing service-desc link');
assert(baseHead.includes('application/openapi+json'), 'BaseHead missing OpenAPI media type discovery link');
assert(baseHead.includes('href="/openapi.json"'), 'BaseHead missing /openapi.json discovery link');
assert(baseHead.includes('rel="alternate" type="text/plain" href="/llms.txt"'), 'BaseHead missing llms.txt alternate discovery link');
assert(baseHead.includes('rel="help" href="/developers/"'), 'BaseHead missing developer docs help link');

const footer = read('src/components/Footer.astro');
for (const link of ['/docs', '/developers', '/openapi.json', '/llms.txt', '/contact', '/privacy']) {
  assert(footer.includes(`href="${link}"`), `Footer missing ${link}`);
}

const docs = read('src/pages/docs.astro');
for (const text of ['/developers/', '/openapi.json', '/llms.txt', '/api/v1/...', 'RateLimit-*', 'Deprecation', 'Sunset']) {
  assert(docs.includes(text), `Docs hub missing ${text}`);
}

const developers = read('src/pages/developers.astro');
for (const text of ['OpenAPI JSON', 'llms.txt', 'Sitemap', '/api/v1/subscribe', '/api/v1/benchmarks']) {
  assert(developers.includes(text), `Developer docs missing ${text}`);
}

const llms = read('public/llms.txt');
for (const text of ['Developer docs and versioning policy', 'https://superada.ai/openapi.json', 'https://superada.ai/api/v1/benchmarks', 'Deprecation: false', 'Sunset']) {
  assert(llms.includes(text), `llms.txt missing ${text}`);
}

const vercel = JSON.parse(read('vercel.json'));
const redirectMap = new Map((vercel.redirects || []).map((redirect) => [redirect.source, redirect.destination]));
for (const [source, destination] of [
  ['/api', '/developers/'],
  ['/api-docs', '/developers/'],
  ['/developer', '/developers/'],
  ['/developer-docs', '/developers/'],
  ['/docs/api', '/developers/'],
  ['/docs/openapi', '/openapi.json']
]) {
  assert(redirectMap.get(source) === destination, `vercel.json missing ${source} -> ${destination}`);
}

console.log('Developer resource discoverability verification passed.');
