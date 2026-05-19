#!/usr/bin/env node
import { rmSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const publish = args.has('--publish');
const dryRun = args.has('--dry-run') || !publish;
const generatedRoot = path.join(root, '.generated', 'clawhub');

const skillRegistryPath = path.join(root, 'src', 'data', 'skills.ts');
const workflowsDir = path.join(root, 'src', 'content', 'workflows');

function run(command, commandArgs, options = {}) {
  const result = spawnSync(command, commandArgs, {
    cwd: options.cwd || root,
    encoding: 'utf8',
    stdio: options.capture ? 'pipe' : 'inherit',
  });

  if (result.status !== 0) {
    const detail = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`${command} ${commandArgs.join(' ')} failed${detail ? `\n${detail}` : ''}`);
  }

  return result.stdout || '';
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function readFrontmatter(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return {};

  const data = {};
  const stack = [{ indent: -1, value: data }];
  const arrayByIndent = new Map();

  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue;
    const indent = line.match(/^\s*/)[0].length;
    const trimmed = line.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
    const parent = stack[stack.length - 1].value;

    if (trimmed.startsWith('- ')) {
      const array = arrayByIndent.get(indent);
      if (array) array.push(parseScalar(trimmed.slice(2)));
      continue;
    }

    const keyMatch = trimmed.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!keyMatch) continue;

    const [, key, rest = ''] = keyMatch;
    if (rest === '') {
      parent[key] = {};
      stack.push({ indent, value: parent[key] });
      continue;
    }

    parent[key] = parseScalar(rest);
    if (Array.isArray(parent[key])) arrayByIndent.set(indent + 2, parent[key]);
  }

  return data;
}

function extractString(block, key) {
  const quoted = block.match(new RegExp(`${key}:\\s*(['"\`])([\\s\\S]*?)\\1`));
  return quoted ? quoted[2] : undefined;
}

function extractSkills() {
  if (!existsSync(skillRegistryPath)) return [];
  const raw = readFileSync(skillRegistryPath, 'utf8');
  const chunks = raw.split(/\n\s*\{\s*\n\s*slug:/).slice(1).map((chunk) => `{\n  slug:${chunk}`);

  return chunks
    .map((chunk) => ({
      slug: extractString(chunk, 'slug'),
      title: extractString(chunk, 'title'),
      availability: extractString(chunk, 'availability'),
      sourceUrl: extractString(chunk, 'sourceUrl'),
    }))
    .filter((entry) => entry.slug && entry.title && entry.availability === 'agent-installable' && entry.sourceUrl?.includes('github.com/'));
}

function githubSourcePath(sourceUrl) {
  const match = sourceUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/tree\/([^/]+)\/(.+)$/);
  if (!match) return null;
  const [, owner, repo, branch, subpath] = match;
  return { owner, repo, branch, subpath };
}

function ensureGitSource(sourceUrl) {
  const source = githubSourcePath(sourceUrl);
  if (!source) return null;
  const cloneDir = path.join(generatedRoot, 'sources', `${source.owner}__${source.repo}`);
  if (!existsSync(cloneDir)) {
    mkdirSync(path.dirname(cloneDir), { recursive: true });
    run('git', ['clone', '--depth=1', '--branch', source.branch, `https://github.com/${source.owner}/${source.repo}.git`, cloneDir]);
  }
  return path.join(cloneDir, source.subpath);
}

function workflowPageUrl(filePath) {
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return `https://superada.ai/workflows/${slug}/`;
}

function extractWorkflowReferences(filePath, fm) {
  const raw = readFileSync(filePath, 'utf8');
  const checks = [...raw.matchAll(/^\s*-\s+label:\s*(.+)$/gm)].slice(0, 6).map((m) => m[1].trim());
  const limitations = [...raw.matchAll(/^\s*-\s+(.+)$/gm)]
    .map((m) => m[1].trim())
    .filter((line) => /not|manual|review|cron|secret|mutation|config|source/i.test(line))
    .slice(0, 6);

  return {
    checks,
    limitations,
    sourceUrl: fm.sourceUrl || fm.bundle?.installable?.sourceUrl || fm.bundle?.installSource?.url,
  };
}

function writeWorkflowPackage(filePath, fm) {
  const pageSlug = path.basename(filePath).replace(/\.md$/, '');
  const clawhubSlug = `superada-workflow-${pageSlug}`;
  const outDir = path.join(generatedRoot, 'workflows', clawhubSlug);
  const refs = extractWorkflowReferences(filePath, fm);
  mkdirSync(outDir, { recursive: true });

  const body = `---
name: ${clawhubSlug}
description: ${fm.summary || fm.title}
---

# ${fm.title}

Workflow bundle exported from SuperAda.ai for ClawHub discovery.

## Source
- SuperAda page: ${workflowPageUrl(filePath)}
- Source URL: ${refs.sourceUrl || fm.sourceUrl || 'See SuperAda page'}
- Category: ${fm.category || 'Operations'}
- Difficulty: ${fm.difficulty || 'Medium'}
- Status: ${fm.status || 'Live'}

## Install

\`\`\`bash
${fm.installCommand || 'See SuperAda page for install instructions'}
\`\`\`

## What It Does

${fm.summary || fm.tagline || 'See the SuperAda page for workflow details.'}

## Verification
${refs.checks.length ? refs.checks.map((check) => `- ${check}`).join('\n') : '- Follow the verification steps on the SuperAda page.'}

## Safety Notes
${refs.limitations.length ? refs.limitations.map((note) => `- ${note}`).join('\n') : '- Review the source and install command before running this workflow in a live workspace.'}
`;

  writeFileSync(path.join(outDir, 'SKILL.md'), body);
  return { slug: clawhubSlug, name: fm.title, path: outDir, type: 'workflow', version: fm.bundle?.version || '1.0.0' };
}

function extractWorkflows() {
  const files = execFileSync('find', [workflowsDir, '-maxdepth', '1', '-type', 'f', '-name', '*.md'], {
    cwd: root,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean)
    .filter((file) => !path.basename(file).startsWith('_'));

  return files
    .map((file) => ({ file, fm: readFrontmatter(file) }))
    .filter(({ fm }) => {
      const installable = fm.bundle?.installable;
      return fm.status === 'Live' && fm.bundle?.classification !== 'conceptual' && installable?.supported === true;
    })
    .map(({ file, fm }) => writeWorkflowPackage(file, fm));
}

function assertClawHubAuth() {
  const result = spawnSync('clawdhub', ['whoami'], { encoding: 'utf8', stdio: 'pipe' });
  if (result.status !== 0) {
    const detail = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`ClawHub auth is not valid. Run 'clawdhub login' before publishing.\n${detail}`);
  }
}

function publishItem(item) {
  const tags = item.type === 'workflow' ? 'superada,workflow,latest' : 'superada,skill,enterprise-crew,latest';
  run('clawdhub', [
    'publish',
    item.path,
    '--slug',
    item.slug,
    '--name',
    item.name,
    '--version',
    item.version || '1.0.0',
    '--tags',
    tags,
    '--changelog',
    'Synced from SuperAda.ai resources',
  ]);
}

function main() {
  rmSync(generatedRoot, { recursive: true, force: true });
  mkdirSync(generatedRoot, { recursive: true });

  const skills = extractSkills()
    .map((skill) => ({
      slug: skill.slug,
      name: skill.title,
      path: ensureGitSource(skill.sourceUrl),
      type: 'skill',
      version: '1.0.0',
    }))
    .filter((skill) => skill.path && existsSync(path.join(skill.path, 'SKILL.md')));

  const workflows = extractWorkflows();
  const items = [...skills, ...workflows];

  console.log(`SuperAda -> ClawHub ${dryRun ? 'plan' : 'publish'}`);
  console.log(`Skills: ${skills.length}`);
  console.log(`Workflows: ${workflows.length}`);
  for (const item of items) {
    console.log(`- ${item.type}: ${item.slug} (${item.path})`);
  }

  if (dryRun) {
    console.log('\nDry run only. Use npm run clawhub:publish after clawdhub login is valid.');
    return;
  }

  assertClawHubAuth();
  for (const item of items) publishItem(item);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
