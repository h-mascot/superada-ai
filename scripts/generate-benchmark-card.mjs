import fs from 'node:fs';
import path from 'node:path';

const [, , registryPath, outputPath, runId] = process.argv;
if (!registryPath || !outputPath || !runId) {
  console.error('Usage: node scripts/generate-benchmark-card.mjs <registry.json> <output.svg> <runId>');
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const run = registry.runs.find((r) => r.id === runId);
if (!run) {
  console.error(`Run not found: ${runId}`);
  process.exit(1);
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" fill="none">
  <rect width="1600" height="900" fill="#0D0B09"/>
  <rect x="64" y="64" width="1472" height="772" rx="28" fill="#131008" stroke="#2A241E" stroke-width="2"/>
  <text x="112" y="155" fill="#C87533" font-family="Arial, sans-serif" font-size="28" letter-spacing="6">SUPERADA BENCHMARKS</text>
  <text x="112" y="245" fill="#E8DCC8" font-family="Georgia, serif" font-size="72">${escapeXml(run.model)}</text>
  <text x="112" y="320" fill="#CDBFA9" font-family="Arial, sans-serif" font-size="34">${escapeXml(run.category)} • ${escapeXml(run.date)}</text>
  <rect x="112" y="382" width="1376" height="2" fill="#2A241E"/>
  <text x="112" y="470" fill="#E8DCC8" font-family="Arial, sans-serif" font-size="52">${escapeXml(run.score)}</text>
  <foreignObject x="112" y="520" width="1240" height="180">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial, sans-serif; font-size:30px; line-height:1.45; color:#9E907C; width:1240px;">
      ${escapeXml(run.summary)}
    </div>
  </foreignObject>
  <text x="112" y="790" fill="#8B7E6A" font-family="Arial, sans-serif" font-size="26">Auto-generated from benchmark registry</text>
</svg>`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, svg);
console.log(outputPath);

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
