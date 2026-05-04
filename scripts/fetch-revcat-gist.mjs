import fs from 'node:fs/promises';

const rawUrl = 'https://gist.githubusercontent.com/h-mascot/efb6c85615f64a23264851bb3c6bc648/raw/e90395f7b42c187979b58b3607edead1bac7a628/revenuecat-application-letter.md';
const outPath = new URL('../src/data/revenuecat-application-letter.md', import.meta.url);

const response = await fetch(rawUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch Gist: ${response.status} ${response.statusText}`);
}

const text = await response.text();
await fs.mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await fs.writeFile(outPath, text);
console.log(`Wrote ${outPath.pathname} (${text.length} chars)`);
