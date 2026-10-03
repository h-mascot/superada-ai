export interface Stat {
  figure: string;
  caption: string;
}

export type Block =
  | { kind: 'p'; html: string }
  | { kind: 'sign'; html: string }
  | { kind: 'stats'; stats: Stat[] };

export interface Chapter {
  id: string;
  numeral: string;
  title: string;
  viz: string;
  year: number;
  /** year the HUD clock reaches by the end of the chapter; defaults to the next chapter's year */
  until?: number;
  era: string;
  accent?: string;
  blocks: Block[];
}

export interface Story {
  title: string;
  subtitle: string;
  intro: Block[];
  chapters: Chapter[];
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(s: string): string {
  return escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function parseMeta(src: string): Record<string, string> {
  const meta: Record<string, string> = {};
  const m = src.match(/<!--([\s\S]*?)-->/);
  if (!m) return meta;
  for (const pair of m[1].split('|')) {
    const i = pair.indexOf(':');
    if (i > 0) meta[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
  }
  return meta;
}

function parseBlocks(src: string): Block[] {
  const blocks: Block[] = [];
  const chunks = src
    .replace(/<!--[\s\S]*?-->/g, '')
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  for (const chunk of chunks) {
    if (chunk.startsWith('>')) {
      const text = chunk
        .split('\n')
        .map((l) => l.replace(/^>\s?/, ''))
        .join(' ')
        .trim();
      const m = text.match(/^\*\*(.+?)\*\*\s*[·—-]\s*(.*)$/);
      const stat: Stat = m
        ? { figure: m[1], caption: inline(m[2]) }
        : { figure: '', caption: inline(text) };
      const prev = blocks[blocks.length - 1];
      if (prev?.kind === 'stats') prev.stats.push(stat);
      else blocks.push({ kind: 'stats', stats: [stat] });
      continue;
    }
    const text = chunk.replace(/\s*\n\s*/g, ' ');
    blocks.push(text.startsWith('— ') ? { kind: 'sign', html: inline(text) } : { kind: 'p', html: inline(text) });
  }
  return blocks;
}

export function parseStory(md: string): Story {
  const src = md.replace(/\r/g, '');
  const [head, ...sections] = src.split(/^## /m);

  const title = head.match(/^# (.+)$/m)?.[1].trim() ?? 'Untitled';
  const headBody = head.replace(/^# .+$/m, '');
  const headBlocks = parseBlocks(headBody);
  let subtitle = '';
  const first = headBlocks[0];
  if (first?.kind === 'p' && /^<em>.*<\/em>$/.test(first.html)) {
    subtitle = first.html.replace(/^<em>|<\/em>$/g, '');
    headBlocks.shift();
  }

  const chapters: Chapter[] = sections.map((section) => {
    const nl = section.indexOf('\n');
    const heading = section.slice(0, nl).trim();
    const body = section.slice(nl + 1);
    const meta = parseMeta(body);
    const hm = heading.match(/^([IVXLC]+)\.\s+(.+)$/);
    const numeral = hm ? hm[1] : '';
    const chapterTitle = (hm ? hm[2] : heading).replace(/^Afterword:\s*/, '');
    return {
      id: slug(chapterTitle),
      numeral,
      title: chapterTitle,
      viz: meta.viz ?? 'none',
      year: Number(meta.year ?? 2026),
      until: meta.until ? Number(meta.until) : undefined,
      era: meta.era ?? '',
      accent: meta.accent,
      blocks: parseBlocks(body),
    };
  });

  return { title, subtitle, intro: headBlocks, chapters };
}
