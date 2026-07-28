#!/usr/bin/env node
/**
 * SuperAda 5/5 eval harness — scores Quality, Design, Performance, Security (0–5 each).
 * Usage: node scripts/eval/run-eval.mjs
 * Env:  EVAL_LIGHTHOUSE=1  — run Lighthouse perf ≥95 on 4 sample pages (default: HTML size + webp gate)
 *       EVAL_SKIP_BUILD=1 — skip npm run build (dist must exist)
 */
import { spawn } from 'node:child_process';
import {
  readFileSync,
  readdirSync,
  statSync,
  existsSync,
} from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../..');
const DIST = join(ROOT, 'dist');
const PREVIEW_URL = process.env.EVAL_PREVIEW_URL || 'http://localhost:4322';
const USE_LIGHTHOUSE = process.env.EVAL_LIGHTHOUSE === '1';
const SKIP_BUILD = process.env.EVAL_SKIP_BUILD === '1';

/** @typedef {{ name: string, pass: boolean, detail?: string }} Check */

/** @param {Check[]} checks */
function scoreChecks(checks) {
  if (!checks.length) return 5;
  const passed = checks.filter((c) => c.pass).length;
  return Math.round((passed / checks.length) * 5);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
      ...opts,
    });
    let stdout = '';
    let stderr = '';
    child.stdout?.on('data', (d) => { stdout += d; });
    child.stderr?.on('data', (d) => { stderr += d; });
    child.on('close', (code) => resolve({ code: code ?? 1, stdout, stderr }));
  });
}

async function isPreviewUp() {
  try {
    const res = await fetch(PREVIEW_URL, { redirect: 'manual', signal: AbortSignal.timeout(3000) });
    return res.status >= 200 && res.status < 500;
  } catch {
    return false;
  }
}

/** @returns {Promise<import('node:child_process').ChildProcess | null>} */
async function ensurePreviewServer() {
  if (await isPreviewUp()) return null;
  if (!existsSync(DIST)) {
    console.warn('  ⚠ dist/ missing — preview server cannot start');
    return null;
  }
  console.log(`  Starting preview server at ${PREVIEW_URL}…`);
  const child = spawn('npx', ['astro', 'preview', '--port', String(new URL(PREVIEW_URL).port || 4322)], {
    cwd: ROOT,
    stdio: 'ignore',
    detached: true,
  });
  child.unref();
  for (let i = 0; i < 45; i++) {
    if (await isPreviewUp()) return child;
    await sleep(1000);
  }
  console.warn('  ⚠ Preview server did not become ready in time');
  return child;
}

function walkAllFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walkAllFiles(full, out);
    else out.push(full);
  }
  return out;
}

function walkHtmlFiles(dir, out = []) {
  for (const full of walkAllFiles(dir)) {
    if (full.endsWith('.html')) out.push(full);
  }
  return out;
}

function walkIndexHtmlFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walkIndexHtmlFiles(full, out);
    else if (name === 'index.html') out.push(full);
  }
  return out;
}

function isPublicPassthrough(distRelPath) {
  return existsSync(join(ROOT, 'public', distRelPath));
}

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
}

function isRedirectStub(html) {
  return /<meta[^>]+http-equiv=["']refresh["']/i.test(html);
}

function metaContent(html, attr, value) {
  const re = new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${value}["']`, 'i');
  const m = html.match(re);
  return (m?.[1] ?? m?.[2] ?? '').trim();
}

function hasCanonical(html) {
  return /<link[^>]+rel=["']canonical["']/i.test(html);
}

function countH1(html) {
  const body = stripScriptsAndStyles(html);
  return (body.match(/<h1[\s>]/gi) || []).length;
}

function imgHasAlt(tag) {
  if (/\balt\s*=\s*("([^"]*)"|'([^']*)'|[^\s>]*)/i.test(tag)) return true;
  return /\balt(?=[\s/>])/i.test(tag);
}

function imgMissingAlt(html) {
  const missing = [];
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    if (!imgHasAlt(tag)) missing.push(tag.slice(0, 80));
  }
  return missing;
}

function ogImageUrl(html) {
  const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  return (m?.[1] ?? m?.[2] ?? '').trim();
}

async function resolveOgImage(url, previewOrigin) {
  if (!url) return { ok: false, status: 0 };
  try {
    let fetchUrl = url;
    if (url.startsWith('/')) fetchUrl = previewOrigin + url;
    else if (url.startsWith('https://superada.ai')) fetchUrl = url.replace('https://superada.ai', previewOrigin);
    const res = await fetch(fetchUrl, { redirect: 'follow', signal: AbortSignal.timeout(8000) });
    return { ok: res.status >= 200 && res.status < 300, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}

function findSamplePage(globPrefix) {
  const dir = join(DIST, globPrefix);
  if (!existsSync(dir)) return null;
  for (const name of readdirSync(dir)) {
    const candidate = join(dir, name, 'index.html');
    if (existsSync(candidate)) return `/${globPrefix}/${name}/`;
  }
  return null;
}

function readTextFiles(dir, exts, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      readTextFiles(full, exts, out);
    } else if (exts.some((e) => name.endsWith(e))) out.push(full);
  }
  return out;
}

const SECRET_PATTERNS = [
  { name: 'GitHub PAT', re: /\bghp_[a-zA-Z0-9]{20,}\b/ },
  { name: 'GitHub fine-grained', re: /\bgithub_pat_[a-zA-Z0-9_]{20,}\b/ },
  { name: 'OpenAI key', re: /\bsk-[a-zA-Z0-9]{20,}\b/ },
  { name: 'AWS access key', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'Private key block', re: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
];

const SECRET_ALLOW = [
  /process\.env\./,
  /import\.meta\.env/,
  /SUBSCRIBER_/,
  /GITHUB_TOKEN/,
  /YOUR_/,
  /example/i,
  /placeholder/i,
];

function scanSecrets() {
  const dirs = ['src', 'api', 'scripts'].map((d) => join(ROOT, d));
  const hits = [];
  for (const dir of dirs) {
    for (const file of readTextFiles(dir, ['.js', '.mjs', '.ts', '.astro', '.json', '.md', '.mdx'])) {
      const lines = readFileSync(file, 'utf8').split('\n');
      lines.forEach((line, i) => {
        if (SECRET_ALLOW.some((a) => a.test(line))) return;
        for (const { name, re } of SECRET_PATTERNS) {
          if (re.test(line)) hits.push({ file: relative(ROOT, file), line: i + 1, kind: name });
        }
      });
    }
  }
  return hits;
}

function blankLinksWithoutNoopener(html, filePath) {
  const issues = [];
  for (const m of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)) {
    const tag = m[0];
    if (!/\brel=["'][^"']*\bnoopener\b/i.test(tag)) {
      issues.push(relative(DIST, filePath));
      break;
    }
  }
  return issues;
}

function vercelHeaderChecks() {
  const path = join(ROOT, 'vercel.json');
  /** @type {Check[]} */
  const checks = [];
  if (!existsSync(path)) {
    checks.push({ name: 'vercel.json exists', pass: false });
    return checks;
  }
  const cfg = JSON.parse(readFileSync(path, 'utf8'));
  const headers = (cfg.headers || []).flatMap((h) => h.headers || []);
  const byKey = Object.fromEntries(headers.map((h) => [h.key.toLowerCase(), h.value || '']));
  const required = [
    ['content-security-policy', 'CSP'],
    ['strict-transport-security', 'HSTS'],
    ['x-content-type-options', 'nosniff'],
    ['referrer-policy', 'Referrer-Policy'],
    ['x-frame-options', 'X-Frame-Options'],
  ];
  for (const [key, label] of required) {
    checks.push({ name: `${label} header`, pass: Boolean(byKey[key]) });
  }
  const csp = byKey['content-security-policy'] || '';
  checks.push({ name: 'CSP allows analytics', pass: csp.includes('analytics.henrymascot.com') });
  checks.push({ name: 'CSP omits unsafe-eval', pass: !csp.includes('unsafe-eval') });
  return checks;
}

/** @returns {Promise<{ checks: Check[], previewChild: import('node:child_process').ChildProcess | null }>} */
async function runQuality(previewChild) {
  /** @type {Check[]} */
  const checks = [];

  if (SKIP_BUILD) {
    checks.push({ name: 'dist/ exists (build skipped)', pass: existsSync(DIST) });
  } else {
    console.log('  Running npm run build…');
    const build = await run('npm', ['run', 'build']);
    checks.push({
      name: 'npm run build',
      pass: build.code === 0,
      detail: build.code !== 0 ? build.stderr.slice(-400) : undefined,
    });
  }

  const pagesDir = join(ROOT, 'src/pages');
  const bakHits = existsSync(pagesDir)
    ? walkAllFiles(pagesDir).filter((f) => /\.bak\d*$/.test(f)).map((f) => relative(ROOT, f))
    : [];
  checks.push({ name: 'no .bak files in src/pages', pass: bakHits.length === 0, detail: bakHits.join(', ') || undefined });

  const conflictHits = [];
  for (const dir of ['src', 'api', 'scripts', 'public']) {
    const full = join(ROOT, dir);
    if (!existsSync(full)) continue;
    for (const file of readTextFiles(full, ['.js', '.mjs', '.ts', '.astro', '.json', '.md', '.mdx', '.css', '.html', '.sh', '.py'])) {
      const text = readFileSync(file, 'utf8');
      if (/^<<<<<<< /m.test(text) || /^>>>>>>> /m.test(text) || /^=======\s*$/m.test(text)) {
        conflictHits.push(relative(ROOT, file));
      }
    }
  }
  checks.push({ name: 'no conflict markers', pass: conflictHits.length === 0, detail: conflictHits.slice(0, 5).join(', ') || undefined });

  if (!(await isPreviewUp())) {
    previewChild = previewChild || (await ensurePreviewServer());
  }

  if (await isPreviewUp()) {
    const crawl = await run('node', ['scripts/eval/crawl.mjs', PREVIEW_URL]);
    checks.push({
      name: 'crawler exits 0',
      pass: crawl.code === 0,
      detail: crawl.code !== 0 ? 'see crawl output above' : undefined,
    });
    if (crawl.stdout) process.stdout.write(crawl.stdout);
    if (crawl.stderr) process.stderr.write(crawl.stderr);
  } else {
    checks.push({ name: 'crawler exits 0', pass: false, detail: 'preview server unavailable' });
  }

  return { checks, previewChild };
}

/** @returns {Promise<Check[]>} */
async function runDesign(previewOrigin) {
  /** @type {Check[]} */
  const checks = [];
  const htmlFiles = walkIndexHtmlFiles(DIST).filter((file) => {
    const rel = relative(DIST, file);
    return !isPublicPassthrough(rel);
  });
  if (!htmlFiles.length) {
    checks.push({ name: 'dist HTML pages found', pass: false });
    return checks;
  }
  checks.push({ name: 'dist HTML pages found', pass: true, detail: `${htmlFiles.length} pages` });

  let titleFails = 0;
  let descFails = 0;
  let canonicalFails = 0;
  let h1Fails = 0;
  let viewportFails = 0;
  let altFails = 0;
  let ogFails = 0;
  const failSamples = [];

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const rel = relative(DIST, file);
    if (isRedirectStub(html)) continue;

    const pageIssues = [];

    if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) { titleFails++; pageIssues.push('title'); }
    const desc = metaContent(html, 'name', 'description');
    if (!desc) { descFails++; pageIssues.push('description'); }
    if (!hasCanonical(html)) { canonicalFails++; pageIssues.push('canonical'); }
    if (!/<meta[^>]+name=["']viewport["']/i.test(html)) { viewportFails++; pageIssues.push('viewport'); }

    const h1Count = countH1(html);
    if (h1Count !== 1 && !(h1Count === 0 && isRedirectStub(html))) {
      h1Fails++;
      pageIssues.push(`h1=${h1Count}`);
    }

    const missingAlt = imgMissingAlt(html);
    if (missingAlt.length) { altFails++; pageIssues.push(`img-alt(${missingAlt.length})`); }

    const og = ogImageUrl(html);
    if (!og) {
      ogFails++;
      pageIssues.push('og:image missing');
    } else if (previewOrigin) {
      const { ok, status } = await resolveOgImage(og, previewOrigin);
      if (!ok) { ogFails++; pageIssues.push(`og:image ${status}`); }
    }

    if (pageIssues.length && failSamples.length < 8) {
      failSamples.push(`${rel}: ${pageIssues.join(', ')}`);
    }
  }

  checks.push({ name: 'every page has <title>', pass: titleFails === 0, detail: titleFails ? `${titleFails} fail` : undefined });
  checks.push({ name: 'every page has meta description', pass: descFails === 0, detail: descFails ? `${descFails} fail` : undefined });
  checks.push({ name: 'every page has canonical', pass: canonicalFails === 0, detail: canonicalFails ? `${canonicalFails} fail` : undefined });
  checks.push({ name: 'every page has viewport meta', pass: viewportFails === 0, detail: viewportFails ? `${viewportFails} fail` : undefined });
  checks.push({ name: 'exactly one h1 (or redirect stub)', pass: h1Fails === 0, detail: h1Fails ? `${h1Fails} fail` : undefined });
  checks.push({ name: 'all <img> have alt', pass: altFails === 0, detail: altFails ? `${altFails} pages` : undefined });
  checks.push({ name: 'og:image present and resolves', pass: ogFails === 0, detail: ogFails ? `${ogFails} fail` : undefined });
  if (failSamples.length) checks.push({ name: 'design samples', pass: false, detail: failSamples.join(' | ') });

  return checks;
}

/** @returns {Promise<Check[]>} */
async function runPerformance() {
  /** @type {Check[]} */
  const checks = [];
  const homePath = join(DIST, 'index.html');
  if (!existsSync(homePath)) {
    checks.push({ name: 'homepage exists', pass: false });
    return checks;
  }
  const homeHtml = readFileSync(homePath, 'utf8');
  const homeBytes = Buffer.byteLength(homeHtml, 'utf8');
  checks.push({
    name: 'homepage HTML < 100KB',
    pass: homeBytes < 100 * 1024,
    detail: `${Math.round(homeBytes / 1024)}KB`,
  });

  const heroImgs = [...homeHtml.matchAll(/<img\b[^>]*class=["'][^"']*hero[^"']*["'][^>]*>/gi)];
  const heroSrcs = heroImgs.map((m) => {
    const src = m[0].match(/\bsrc=["']([^"']+)["']/i);
    return src?.[1] || '';
  }).filter(Boolean);
  const webpOk = heroSrcs.length === 0 || heroSrcs.every((s) => /\.webp(\?|$)/i.test(s) || s.startsWith('/avatars/'));
  checks.push({
    name: 'hero images use webp (or static avatars)',
    pass: webpOk,
    detail: heroSrcs.join(', ') || 'none tagged hero',
  });

  if (USE_LIGHTHOUSE) {
    if (!(await isPreviewUp())) {
      checks.push({ name: 'Lighthouse (preview up)', pass: false, detail: 'preview unavailable' });
      return checks;
    }
    const samples = ['/', '/blog/'];
    const blogPost = findSamplePage('blog');
    const skillPage = findSamplePage('skills');
    if (blogPost) samples.push(blogPost);
    if (skillPage) samples.push(skillPage);

    for (const path of samples) {
      const url = PREVIEW_URL.replace(/\/$/, '') + path;
      const lh = await run('npx', [
        'lighthouse', url,
        '--only-categories=performance',
        '--output=json',
        '--quiet',
        '--chrome-flags=--headless --no-sandbox',
      ]);
      let perf = 0;
      if (lh.code === 0) {
        try {
          const json = JSON.parse(lh.stdout);
          perf = Math.round((json.categories?.performance?.score ?? 0) * 100);
        } catch { /* ignore */ }
      }
      checks.push({
        name: `Lighthouse perf ≥95 ${path}`,
        pass: perf >= 95,
        detail: perf ? `${perf}` : 'run failed',
      });
    }
  } else {
    checks.push({ name: 'perf gate (HTML size + webp heroes)', pass: homeBytes < 100 * 1024 && webpOk });
  }

  return checks;
}

function runSecurity() {
  /** @type {Check[]} */
  const checks = [...vercelHeaderChecks()];

  const htmlFiles = walkHtmlFiles(DIST);
  const noopenerIssues = [];
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    if (blankLinksWithoutNoopener(html, file).length) noopenerIssues.push(relative(DIST, file));
  }
  checks.push({
    name: 'dist: target=_blank has noopener',
    pass: noopenerIssues.length === 0,
    detail: noopenerIssues.slice(0, 5).join(', ') || undefined,
  });

  const secretHits = scanSecrets();
  checks.push({
    name: 'no obvious secrets in src/api/scripts',
    pass: secretHits.length === 0,
    detail: secretHits.slice(0, 3).map((h) => `${h.file}:${h.line}`).join(', ') || undefined,
  });

  return checks;
}

async function main() {
  console.log('\nSuperAda 5/5 Eval Harness\n');

  let previewChild = null;
  if (!existsSync(DIST) && !SKIP_BUILD) {
    console.log('  dist/ missing — build will run in Quality checks\n');
  }

  previewChild = await ensurePreviewServer();
  const previewOrigin = (await isPreviewUp()) ? new URL(PREVIEW_URL).origin : null;

  console.log('▸ Quality');
  const qualityResult = await runQuality(previewChild);
  const qualityChecks = qualityResult.checks;
  previewChild = qualityResult.previewChild;

  console.log('▸ Design');
  const designChecks = await runDesign(previewOrigin);

  console.log('▸ Performance');
  const performanceChecks = await runPerformance();

  console.log('▸ Security');
  const securityChecks = runSecurity();

  const categories = [
    { name: 'Quality', checks: qualityChecks },
    { name: 'Design', checks: designChecks },
    { name: 'Performance', checks: performanceChecks },
    { name: 'Security', checks: securityChecks },
  ];

  console.log('\n══════════════════════════════════════');
  console.log(' SCORECARD');
  console.log('══════════════════════════════════════\n');

  let allFive = true;
  for (const cat of categories) {
    const score = scoreChecks(cat.checks);
    const passed = cat.checks.filter((c) => c.pass).length;
    const icon = score === 5 ? '✓' : '✗';
    console.log(`  ${icon} ${cat.name.padEnd(14)} ${score}/5  (${passed}/${cat.checks.length} checks)`);
    if (score !== 5) {
      allFive = false;
      for (const c of cat.checks.filter((x) => !x.pass)) {
        console.log(`      ✗ ${c.name}${c.detail ? `: ${c.detail}` : ''}`);
      }
    }
  }

  console.log('\n══════════════════════════════════════');
  if (allFive) {
    console.log('  ALL CATEGORIES 5/5 — PASS');
  } else {
    console.log('  BELOW 5/5 — FAIL (fix issues above)');
  }
  console.log('══════════════════════════════════════\n');

  if (USE_LIGHTHOUSE) console.log('  (Lighthouse mode: EVAL_LIGHTHOUSE=1)\n');
  else console.log('  (Default perf gate; set EVAL_LIGHTHOUSE=1 for Lighthouse)\n');

  process.exit(allFive ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
