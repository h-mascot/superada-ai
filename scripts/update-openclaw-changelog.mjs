#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';

const sourceUrl = 'https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG.md';
const outputPath = new URL('../src/data/changelog.ts', import.meta.url);
const maxVersions = Number(process.env.OPENCLAW_CHANGELOG_MAX_VERSIONS || 18);

const response = await fetch(sourceUrl, {
  headers: { 'user-agent': 'superada-changelog-updater/1.0' },
});

if (!response.ok) {
  throw new Error(`failed to fetch OpenClaw changelog: ${response.status} ${response.statusText}`);
}

const markdown = await response.text();

function slugForVersion(version) {
  return version.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function upstreamHref(version) {
  return `https://github.com/openclaw/openclaw/blob/main/CHANGELOG.md#${slugForVersion(version)}`;
}

function linkForLine(line, version) {
  const prMatch = line.match(/\(#(\d+)\)/);
  if (prMatch) return `https://github.com/openclaw/openclaw/pull/${prMatch[1]}`;

  const fixesMatch = line.match(/\b[Ff]ixes\s+#(\d+)/);
  if (fixesMatch) return `https://github.com/openclaw/openclaw/issues/${fixesMatch[1]}`;

  const issueMatch = line.match(/#(\d+)/);
  if (issueMatch) return `https://github.com/openclaw/openclaw/issues/${issueMatch[1]}`;

  return upstreamHref(version);
}

function cleanText(text) {
  return text
    .replace(/^[-*]\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleForLine(line) {
  const cleaned = cleanText(line)
    .replace(/\s+Thanks\s+@[^.]+\.?$/i, '')
    .trim();
  const colonIndex = cleaned.indexOf(':');
  if (colonIndex > 2 && colonIndex < 70) return cleaned.slice(0, colonIndex).trim();
  const sentence = cleaned.split(/[.;]/)[0]?.trim() || cleaned;
  return sentence.length > 78 ? `${sentence.slice(0, 75).trim()}...` : sentence;
}

function descForLine(line) {
  const cleaned = cleanText(line);
  const colonIndex = cleaned.indexOf(':');
  const body = colonIndex > 2 && colonIndex < 70 ? cleaned.slice(colonIndex + 1).trim() : cleaned;
  return body || cleaned;
}

function parseSections(md) {
  const lines = md.split(/\r?\n/);
  const versions = [];
  let current = null;
  let mode = 'features';

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      if (current) versions.push(current);
      const version = heading[1].trim();
      current = { version, date: version, href: upstreamHref(version), features: [], fixes: [] };
      mode = 'features';
      continue;
    }

    if (!current) continue;

    const subheading = line.match(/^###\s+(.+?)\s*$/);
    if (subheading) {
      const label = subheading[1].toLowerCase();
      mode = label.includes('fix') ? 'fixes' : 'features';
      continue;
    }

    if (!/^[-*]\s+/.test(line)) continue;
    const cleaned = cleanText(line);
    if (!cleaned) continue;

    if (mode === 'fixes') {
      current.fixes.push(cleaned);
    } else {
      current.features.push({
        title: titleForLine(line),
        description: descForLine(line),
        href: linkForLine(line, current.version),
      });
    }
  }

  if (current) versions.push(current);
  return versions
    .filter((version) => /^\d/.test(version.version) && (version.features.length || version.fixes.length))
    .slice(0, maxVersions);
}

const versions = parseSections(markdown);
if (!versions.length) throw new Error('no changelog versions parsed');

const body = `export interface ChangelogItem {\n  title: string\n  description: string\n  href: string\n}\n\nexport interface Version {\n  version: string\n  date: string\n  href: string\n  features: ChangelogItem[]\n  fixes: string[]\n}\n\nexport const CHANGELOG_SOURCE_URL = ${JSON.stringify(sourceUrl)}\n\nexport const CHANGELOG_VERSIONS: Version[] = ${JSON.stringify(versions, null, 2)}\n`;

await writeFile(outputPath, body);
console.log(`Updated ${outputPath.pathname} with ${versions.length} OpenClaw changelog sections.`);
