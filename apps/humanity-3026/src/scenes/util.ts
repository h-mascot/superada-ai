export const TAU = Math.PI * 2;

export const clamp = (v: number, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const smoothstep = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};
export const easeOut = (t: number) => 1 - Math.pow(1 - clamp(t), 3);
export const easeInOut = (t: number) => {
  t = clamp(t);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/** Shared mapping from chapter scroll progress to "narrative time", used by the HUD clock and time-based scenes. */
export const yearT = (p: number) => smoothstep(0.06, 0.9, p);

export function rng(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash3(x: number, y: number, z: number) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1440662683);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

export function noise3(x: number, y: number, z: number) {
  const xi = Math.floor(x),
    yi = Math.floor(y),
    zi = Math.floor(z);
  const xf = x - xi,
    yf = y - yi,
    zf = z - zi;
  const u = xf * xf * (3 - 2 * xf),
    v = yf * yf * (3 - 2 * yf),
    w = zf * zf * (3 - 2 * zf);
  const x00 = lerp(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u);
  const x10 = lerp(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u);
  const x01 = lerp(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u);
  const x11 = lerp(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u);
  return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w);
}

export function fbm3(x: number, y: number, z: number, octaves = 4) {
  let sum = 0,
    amp = 0.5,
    freq = 1,
    norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3(x * freq, y * freq, z * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

export type RGB = [number, number, number];
export const rgba = (c: RGB, a: number) =>
  `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a < 0 ? 0 : a > 1 ? 1 : a.toFixed(3)})`;
export const mixRGB = (a: RGB, b: RGB, t: number): RGB => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];

export const GOLD: RGB = [236, 192, 116];
export const CYAN: RGB = [134, 212, 255];

export interface Star {
  x: number;
  y: number;
  r: number;
  z: number;
  tw: number;
}

export function makeStars(n: number, seed: number): Star[] {
  const r = rng(seed);
  return Array.from({ length: n }, () => {
    const z = r();
    return { x: r(), y: r(), z, r: 0.5 + z * z * 1.6, tw: r() * TAU };
  });
}

export function drawStars(
  ctx: CanvasRenderingContext2D,
  stars: Star[],
  w: number,
  h: number,
  t: number,
  alpha = 1,
  drift = 0,
) {
  if (alpha <= 0) return;
  for (const s of stars) {
    const x = ((((s.x + drift * (0.2 + s.z)) % 1) + 1) % 1) * w;
    const y = s.y * h;
    const tw = 0.55 + 0.45 * Math.sin(t * (0.5 + s.z * 1.5) + s.tw);
    ctx.fillStyle = `rgba(226,232,255,${(alpha * tw * (0.25 + 0.75 * s.z)).toFixed(3)})`;
    ctx.fillRect(x, y, s.r, s.r);
  }
}

export const SERIF = '"Cormorant Garamond", Georgia, serif';
export const SANS = 'Inter, system-ui, sans-serif';

interface TextOpts {
  size?: number;
  family?: string;
  weight?: number | string;
  italic?: boolean;
  color?: string;
  align?: CanvasTextAlign;
  baseline?: CanvasTextBaseline;
  tracking?: number;
}

export function text(ctx: CanvasRenderingContext2D, str: string, x: number, y: number, o: TextOpts = {}) {
  const size = o.size ?? 12;
  ctx.font = `${o.italic ? 'italic ' : ''}${o.weight ?? 400} ${size}px ${o.family ?? SANS}`;
  ctx.fillStyle = o.color ?? 'rgba(255,255,255,0.7)';
  ctx.textAlign = o.align ?? 'left';
  ctx.textBaseline = o.baseline ?? 'alphabetic';
  const c = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
  if ('letterSpacing' in c) c.letterSpacing = `${o.tracking ?? 0}px`;
  ctx.fillText(str, x, y);
  if ('letterSpacing' in c) c.letterSpacing = '0px';
}

/** Soft radial glow, drawn additively. */
export function glow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, c: RGB, a: number) {
  if (a <= 0 || r <= 0) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, rgba(c, a));
  g.addColorStop(0.35, rgba(c, a * 0.35));
  g.addColorStop(1, rgba(c, 0));
  ctx.fillStyle = g;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
}

/** Pre-rendered soft sprite for particle-heavy scenes. */
export function sprite(c: RGB, size = 64): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d')!;
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, rgba(c, 1));
  grad.addColorStop(0.3, rgba(c, 0.45));
  grad.addColorStop(1, rgba(c, 0));
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return cv;
}
