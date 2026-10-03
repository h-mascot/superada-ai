import type { Scene } from './types';
import { SANS, TAU, clamp, glow, rng, text } from './util';

interface Branch {
  len: number;
  ang: number;
  depth: number;
  hue: number;
  kids: Branch[];
}

const MAX_DEPTH = 9;

/** One trunk for 300,000 years, then a flowering of many kinds of human. */
export default function tree(): Scene {
  const r = rng(77);

  const grow = (depth: number, len: number, ang: number, h0: number, h1: number): Branch => {
    const mid = (h0 + h1) / 2;
    const hue = depth < 3 ? 38 : mid;
    const node: Branch = { len, ang, depth, hue, kids: [] };
    if (depth >= MAX_DEPTH) return node;
    const n = depth < 2 ? 2 : r() < 0.22 ? 3 : 2;
    for (let k = 0; k < n; k++) {
      const spread = 0.28 + r() * 0.32;
      const a = (k - (n - 1) / 2) * spread * (n === 3 ? 0.8 : 1) + (r() - 0.5) * 0.15;
      const s0 = h0 + ((h1 - h0) * k) / n,
        s1 = h0 + ((h1 - h0) * (k + 1)) / n;
      node.kids.push(grow(depth + 1, len * (0.72 + r() * 0.1), a, s0, s1));
    }
    return node;
  };
  const root = grow(0, 0.2, 0, 150, 390);

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#05040b';
      ctx.fillRect(0, 0, w, h);

      const bx = w / 2,
        by = h * 0.93;
      const H = Math.min(h * 0.95, w * 0.9);
      const D = 1.2 + p * (MAX_DEPTH + 0.5);

      for (let i = 1; i <= 5; i++) {
        ctx.strokeStyle = `rgba(200,180,255,${(0.035 - i * 0.004).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, H * 0.17 * i, Math.PI, TAU);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, bx, by, H * 0.3, [255, 200, 130], 0.18);
      ctx.lineCap = 'round';

      const draw = (b: Branch, x: number, y: number, angle: number) => {
        const frac = clamp(D - b.depth);
        if (frac <= 0) return;
        const sway = Math.sin(t * 0.6 + b.depth * 0.8 + b.hue * 0.01) * 0.012 * b.depth;
        const a = angle + b.ang + sway;
        const len = b.len * H * frac;
        const x2 = x + Math.sin(a) * len,
          y2 = y - Math.cos(a) * len;
        const hue = b.hue % 360;
        const sat = b.depth < 3 ? 70 : 75;
        const light = b.depth < 3 ? 70 : 68;
        ctx.strokeStyle = `hsla(${hue},${sat}%,${light}%,${(0.35 + 0.05 * b.depth).toFixed(2)})`;
        ctx.lineWidth = Math.max(0.7, (MAX_DEPTH + 1 - b.depth) * 0.9);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        if (frac < 1) return;
        if (b.kids.length === 0) {
          const tw = 0.6 + 0.4 * Math.sin(t * 2 + hue);
          const g = ctx.createRadialGradient(x2, y2, 0, x2, y2, 9);
          g.addColorStop(0, `hsla(${hue},90%,80%,${(0.9 * tw).toFixed(2)})`);
          g.addColorStop(1, `hsla(${hue},90%,70%,0)`);
          ctx.fillStyle = g;
          ctx.fillRect(x2 - 9, y2 - 9, 18, 18);
        }
        for (const k of b.kids) draw(k, x2, y2, a);
      };
      draw(root, bx, by, 0);
      ctx.globalCompositeOperation = 'source-over';

      text(ctx, 'ONE TRUNK · 300,000 YEARS', bx, by + 22, { size: 9, family: SANS, weight: 600, tracking: 3, align: 'center', color: 'rgba(255,220,170,0.5)' });
    },
  };
}
