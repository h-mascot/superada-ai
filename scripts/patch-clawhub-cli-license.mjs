#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const npmRoot = execFileSync('npm', ['root', '-g'], { encoding: 'utf8' }).trim();
const publishFile = path.join(npmRoot, 'clawdhub', 'dist', 'cli', 'commands', 'publish.js');

if (!existsSync(publishFile)) {
  throw new Error(`ClawHub CLI publish command not found at ${publishFile}`);
}

const source = readFileSync(publishFile, 'utf8');
if (source.includes('acceptLicenseTerms')) {
  console.log('ClawHub CLI already sends acceptLicenseTerms.');
  process.exit(0);
}

const needle = '            tags,\n';
if (!source.includes(needle)) {
  throw new Error('Unable to patch ClawHub CLI publish payload; expected tags field was not found.');
}

writeFileSync(publishFile, source.replace(needle, `${needle}            acceptLicenseTerms: true,\n`));
console.log(`Patched ClawHub CLI publish payload: ${publishFile}`);
