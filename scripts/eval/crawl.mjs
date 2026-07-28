#!/usr/bin/env node
/**
 * Site crawler: starts at BASE, follows every internal link, and reports
 * broken pages (non-2xx), broken internal links, and broken asset references.
 * Usage: node scripts/eval/crawl.mjs [base-url]
 */
const BASE = process.argv[2] || 'http://localhost:4321';
const origin = new URL(BASE).origin;

const seen = new Map(); // url -> { status, referrers: Set }
const queue = ['/'];
const assetSeen = new Map(); // url -> status

function normalize(href, from) {
  try {
    const u = new URL(href, origin + from);
    if (u.origin !== origin) return null;
    u.hash = '';
    u.search = '';
    let p = u.pathname;
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p || '/';
  } catch {
    return null;
  }
}

const linkRe = /<a\s[^>]*href=["']([^"']+)["']/gi;
const assetRe = /<(?:img|source|audio|video|script)\s[^>]*(?:src|srcset)=["']([^"']+)["']|<link\s[^>]*href=["']([^"']+)["']/gi;

async function fetchStatus(path) {
  try {
    const res = await fetch(origin + path, { redirect: 'manual' });
    return res;
  } catch (e) {
    return { status: 0, text: async () => '', headers: new Map() };
  }
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  const entry = { status: 0, referrers: new Set() };
  seen.set(path, entry);
  const res = await fetchStatus(path);
  entry.status = res.status;
  const ct = res.headers.get ? res.headers.get('content-type') || '' : '';
  if (res.status >= 200 && res.status < 300 && ct.includes('text/html')) {
    const html = await res.text();
    for (const m of html.matchAll(linkRe)) {
      const p = normalize(m[1], path);
      if (p === null) continue;
      if (!seen.has(p) && !queue.includes(p)) queue.push(p);
      if (seen.has(p)) seen.get(p).referrers.add(path);
    }
    for (const m of html.matchAll(assetRe)) {
      const raw = (m[1] || m[2] || '').split(/\s+/)[0];
      if (!raw || raw.startsWith('data:')) continue;
      const p = normalize(raw, path);
      if (p === null || assetSeen.has(p)) continue;
      assetSeen.set(p, { status: -1, from: path });
    }
  }
}

// Check assets with HEAD-like GET
for (const [p, info] of assetSeen) {
  const res = await fetchStatus(p);
  info.status = res.status;
}

const pages = [...seen.entries()].sort();
const broken = pages.filter(([, v]) => v.status >= 400 || v.status === 0);
const redirects = pages.filter(([, v]) => v.status >= 300 && v.status < 400);
const brokenAssets = [...assetSeen.entries()].filter(([, v]) => v.status >= 400 || v.status === 0);

console.log(`\nCrawled ${pages.length} pages, ${assetSeen.size} assets from ${origin}\n`);
console.log(`OK pages: ${pages.length - broken.length - redirects.length}`);
if (redirects.length) {
  console.log(`\nREDIRECTS (${redirects.length}):`);
  for (const [p, v] of redirects) console.log(`  ${v.status} ${p}`);
}
if (broken.length) {
  console.log(`\nBROKEN PAGES (${broken.length}):`);
  for (const [p, v] of broken) {
    console.log(`  ${v.status} ${p}`);
    for (const r of [...v.referrers].slice(0, 5)) console.log(`      linked from: ${r}`);
  }
}
if (brokenAssets.length) {
  console.log(`\nBROKEN ASSETS (${brokenAssets.length}):`);
  for (const [p, v] of brokenAssets) console.log(`  ${v.status} ${p} (from ${v.from})`);
}
if (!broken.length && !brokenAssets.length) console.log('\nAll links and assets OK.');
process.exit(broken.length || brokenAssets.length ? 1 : 0);
