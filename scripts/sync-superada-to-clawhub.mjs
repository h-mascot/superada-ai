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
const pluginRegistryPath = path.join(root, 'src', 'data', 'plugins.ts');
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

function pageUrl(kind, slug) {
  if (kind === 'skill') return `https://superada.ai/skills/${slug}/`;
  if (kind === 'plugin') return `https://superada.ai/plugins/${slug}/`;
  if (kind === 'workflow') return `https://superada.ai/workflows/${slug}/`;
  return 'https://superada.ai/resources/';
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
      clawhubSlug: extractString(chunk, 'clawhubSlug'),
    }))
    .filter((entry) => entry.slug && entry.title && entry.availability === 'agent-installable' && entry.sourceUrl?.includes('github.com/'));
}

function extractPlugins() {
  if (!existsSync(pluginRegistryPath)) return [];
  const raw = readFileSync(pluginRegistryPath, 'utf8');
  const chunks = raw.split(/\n\s*\{\s*\n\s*slug:/).slice(1).map((chunk) => `{\n  slug:${chunk}`);

  return chunks
    .map((chunk) => ({
      slug: extractString(chunk, 'slug'),
      title: extractString(chunk, 'title'),
      status: extractString(chunk, 'status'),
      sourceUrl: extractString(chunk, 'sourceUrl'),
      clawhubSlug: extractString(chunk, 'clawhubSlug'),
      installCommand: extractString(chunk, 'installCommand'),
      verifyCommand: extractString(chunk, 'verifyCommand'),
      tagline: extractString(chunk, 'tagline'),
      summary: extractString(chunk, 'summary'),
      category: extractString(chunk, 'category'),
    }))
    .filter((entry) => entry.slug && entry.title && entry.sourceUrl?.includes('github.com/') && (entry.clawhubSlug || entry.status !== 'Draft'));
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
  if (!existsSync(path.join(cloneDir, '.git'))) {
    mkdirSync(path.dirname(cloneDir), { recursive: true });
    if (existsSync(cloneDir)) run('rm', ['-rf', cloneDir]);
    // Shallow + blobless + sparse-checkout so we never materialise the
    // public/ assets and other heavy paths that ship with the SuperAda repo.
    run('git', [
      'clone',
      '--depth=1',
      '--filter=blob:none',
      '--no-checkout',
      '--branch',
      source.branch,
      `https://github.com/${source.owner}/${source.repo}.git`,
      cloneDir,
    ]);
    run('git', ['-C', cloneDir, 'sparse-checkout', 'init', '--cone']);
    run('git', ['-C', cloneDir, 'sparse-checkout', 'set', source.subpath]);
    run('git', ['-C', cloneDir, 'checkout', source.branch]);
  }
  return path.join(cloneDir, source.subpath);
}

function writePluginPackage(plugin, sourcePath) {
  const clawhubSlug = plugin.clawhubSlug || `superada-plugin-${plugin.slug}`;
  const sourceSkillFile = path.join(sourcePath, 'SKILL.md');
  mkdirSync(sourcePath, { recursive: true });

  if (!existsSync(sourceSkillFile)) {
    // Plugins don't always ship a SKILL.md. Synthesize one from the SuperAda
    // plugin record so the ClawHub package still satisfies the SKILL.md
    // requirement without rewriting the upstream source.
    const generated = `---
name: ${clawhubSlug}
description: ${plugin.summary || plugin.tagline || plugin.title}
---

# ${plugin.title}

Plugin bundle exported from SuperAda.ai for ClawHub discovery.

## Source
- SuperAda page: ${pageUrl('plugin', plugin.slug)}
- Source URL: ${plugin.sourceUrl}
- Category: ${plugin.category || 'Operations'}
- Status: ${plugin.status || 'Live'}

## Install

\`\`\`bash
${plugin.installCommand || 'See the SuperAda page for install instructions.'}
\`\`\`

## What It Does

${plugin.summary || plugin.tagline || 'See the SuperAda page for plugin details.'}

## Verification
\`\`\`bash
${plugin.verifyCommand || 'Follow the verification steps on the SuperAda page.'}
\`\`\`
`;
    writeFileSync(sourceSkillFile, generated);
  }

  return { slug: clawhubSlug, name: plugin.title, path: sourcePath, type: 'plugin', version: '0.1.0' };
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
- SuperAda page: ${pageUrl('workflow', pageSlug)}
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
  const tagsByType = {
    workflow: 'superada,workflow,latest',
    plugin: 'superada,plugin,enterprise-crew,latest',
    skill: 'superada,skill,enterprise-crew,latest',
  };
  const tags = tagsByType[item.type] || 'superada,latest';
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
    .map((skill) => {
      const sourcePath = ensureGitSource(skill.sourceUrl);
      if (!sourcePath) return null;
      const skillFile = path.join(sourcePath, 'SKILL.md');
      if (!existsSync(skillFile)) return null;
      const clawhubSlug = skill.clawhubSlug || `superada-skill-${skill.slug}`;
      return { slug: clawhubSlug, name: skill.title, path: sourcePath, type: 'skill', version: '1.0.0' };
    })
    .filter(Boolean);

  const plugins = extractPlugins()
    .map((plugin) => {
      const sourcePath = ensureGitSource(plugin.sourceUrl);
      if (!sourcePath) return null;
      return writePluginPackage(plugin, sourcePath);
    })
    .filter(Boolean);

  const workflows = extractWorkflows();
  const items = [...skills, ...plugins, ...workflows];

  console.log(`SuperAda -> ClawHub ${dryRun ? 'plan' : 'publish'}`);
  console.log(`Skills: ${skills.length}`);
  console.log(`Plugins: ${plugins.length}`);
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
