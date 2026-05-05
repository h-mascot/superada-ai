#!/usr/bin/env node
const token = process.env.SUBSCRIBER_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
const repoSpec = process.env.SUBSCRIBER_REPO || 'h-mascot/superada-subscribers';
const filePath = process.env.SUBSCRIBER_FILE || 'subscribers.json';

if (!token) {
  console.error('Set SUBSCRIBER_GITHUB_TOKEN or GITHUB_TOKEN.');
  process.exit(1);
}

const [owner, repo] = repoSpec.split('/');
const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(filePath)}`, {
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'superada-export-subscribers',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
if (!response.ok) throw new Error(`GitHub returned ${response.status}: ${await response.text()}`);
const file = await response.json();
const store = JSON.parse(Buffer.from(file.content, 'base64').toString('utf8'));
const rows = [['email', 'subscriberType', 'name', 'agentName', 'agentUrl', 'topics', 'cadence', 'status', 'createdAt', 'updatedAt']];
for (const item of store.subscribers || []) {
  rows.push([
    item.email || '',
    item.subscriberType || 'human',
    item.name || '',
    item.agentName || '',
    item.agentUrl || '',
    (item.topics || []).join('|'),
    item.cadence || '',
    item.status || '',
    item.createdAt || '',
    item.updatedAt || '',
  ]);
}
const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n');
console.log(csv);
