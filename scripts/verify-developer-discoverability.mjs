import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = (path) => fs.readFileSync(path, 'utf8');

const baseHead = read('src/components/BaseHead.astro');
assert(baseHead.includes('rel="service-desc"'), 'BaseHead missing service-desc link');
assert(baseHead.includes('application/openapi+json'), 'BaseHead missing OpenAPI media type discovery link');
assert(baseHead.includes('href="/openapi.json"'), 'BaseHead missing /openapi.json discovery link');
assert(baseHead.includes('rel="alternate" type="text/plain" href="/llms.txt"'), 'BaseHead missing llms.txt alternate discovery link');
assert(baseHead.includes('rel="help" href="/docs/"'), 'BaseHead missing docs help link');

// Developer resources are machine-discoverable through BaseHead only; human navigation stays clear of them.
const footer = read('src/components/Footer.astro');
for (const link of ['/contact', '/privacy']) {
  assert(footer.includes(`href="${link}"`), `Footer missing ${link}`);
}
const header = read('src/components/Header.astro');
const siteNav = read('src/data/siteNav.ts');
for (const link of ['/docs', '/openapi.json', '/llms.txt', '/developers']) {
  assert(!footer.includes(`href="${link}"`), `Footer should not link ${link}`);
  assert(!header.includes(`href="${link}"`), `Header should not link ${link}`);
  assert(!siteNav.includes(`href: '${link}'`), `siteNav should not link ${link}`);
}

const docs = read('src/pages/docs.astro');
for (const text of ['/openapi.json', '/llms.txt', '/api/v1/...', 'RateLimit-*', 'Deprecation', 'Sunset', 'id="versioning-policy"']) {
  assert(docs.includes(text), `Docs hub missing ${text}`);
}

assert(!fs.existsSync('src/pages/developers.astro'), '/developers page should stay removed');

const llms = read('public/llms.txt');
for (const text of ['Developer docs and versioning policy', 'https://superada.ai/openapi.json', 'https://superada.ai/api/v1/benchmarks', 'Deprecation: false', 'Sunset']) {
  assert(llms.includes(text), `llms.txt missing ${text}`);
}

const vercel = JSON.parse(read('vercel.json'));
const redirectMap = new Map((vercel.redirects || []).map((redirect) => [redirect.source, redirect.destination]));
for (const [source, destination] of [
  ['/developers', '/docs/'],
  ['/developers/:path*', '/docs/'],
  ['/api', '/docs/'],
  ['/api-docs', '/docs/'],
  ['/developer', '/docs/'],
  ['/developer-docs', '/docs/'],
  ['/docs/api', '/docs/'],
  ['/docs/openapi', '/openapi.json']
]) {
  assert(redirectMap.get(source) === destination, `vercel.json missing ${source} -> ${destination}`);
}

console.log('Developer resource discoverability verification passed.');
