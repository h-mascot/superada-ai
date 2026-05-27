import sourceText from '../../../data/mods/meeting-summary-2026-05-20-to-2026-05-27.md?raw';

export const prerender = true;

export function GET() {
  return new Response(sourceText, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
