#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const file = join(root, 'src/data/milestones.ts');
const content = readFileSync(file, 'utf8');
const entries = [...content.matchAll(/\{\s*date:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?source:\s*'([^']+)'[\s\S]*?(?:slug:\s*'([^']+)'[\s\S]*?)?description:\s*([`'])([\s\S]*?)\5[\s\S]*?\}/g)].map((m) => ({
  date: m[1],
  title: m[2],
  source: m[3],
  slug: m[4],
  description: m[6],
}));

const errors = [];
if (entries.length < 15) errors.push(`expected at least 15 milestones, found ${entries.length}`);

const allowed = new Set(['post', 'tool', 'launch', 'incident', 'agent', 'infra', 'thesis']);
let previous = '9999-99-99';
const seen = new Set();
for (const entry of entries) {
  const key = `${entry.date} ${entry.title}`;
  if (seen.has(key)) errors.push(`duplicate milestone: ${key}`);
  seen.add(key);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) errors.push(`${entry.title}: invalid date ${entry.date}`);
  if (entry.date > previous) errors.push(`${entry.title}: milestones must be reverse chronological`);
  previous = entry.date;
  if (!allowed.has(entry.source)) errors.push(`${entry.title}: invalid source ${entry.source}`);
  if (entry.description.trim().length < 60) errors.push(`${entry.title}: description too short`);
  if (entry.slug) {
    const md = join(root, 'src/content/blog', `${entry.slug}.md`);
    const mdx = join(root, 'src/content/blog', `${entry.slug}.mdx`);
    if (!existsSync(md) && !existsSync(mdx)) errors.push(`${entry.title}: missing blog slug ${entry.slug}`);
  }
}

if (errors.length) {
  console.error('Timeline validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Timeline validation passed (${entries.length} milestones).`);
