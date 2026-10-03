import type { Scene } from './types';
import { CYAN, GOLD, TAU, glow, mixRGB, noise3, rgba, rng, smoothstep } from './util';

/** A turning double helix; a cool "maintenance front" sweeps across it as the chapter progresses. */
export default function helix(): Scene {
  const r = rng(21);
  const cells = Array.from({ length: 34 }, () => ({ x: r(), y: r(), s: 8 + r() * 34, ph: r() * 100 }));

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#040709';
      ctx.fillRect(0, 0, w, h);

      for (const c of cells) {
        const x = ((c.x + (noise3(c.ph, t * 0.05, 0) - 0.5) * 0.2 + 1) % 1) * w;
        const y = ((c.y + (noise3(c.ph, 0, t * 0.05) - 0.5) * 0.2 + 1) % 1) * h;
        ctx.strokeStyle = 'rgba(160,230,220,0.06)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, c.s, 0, TAU);
        ctx.stroke();
        ctx.fillStyle = 'rgba(160,230,220,0.05)';
        ctx.beginPath();
        ctx.arc(x + c.s * 0.2, y - c.s * 0.1, c.s * 0.3, 0, TAU);
        ctx.fill();
      }

      const cy = h * 0.5;
      const A = Math.min(h * 0.17, w * 0.13);
      const k = TAU / Math.max(360, w * 0.42);
      const front = p * 1.15 * w;

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, front, cy, h * 0.5, CYAN, 0.12);

      let i = 0;
      for (let x = -30; x < w + 30; x += 7, i++) {
        const ph = x * k - t * 0.8;
        const s = Math.sin(ph);
        const z1 = Math.cos(ph);
        const y1 = cy + A * s;
        const y2 = cy - A * s;
        const mix = smoothstep(front - 80, front + 80, x);
        const col = mixRGB(CYAN, GOLD, mix);
        if (i % 3 === 0) {
          ctx.strokeStyle = rgba(col, 0.14 + 0.08 * Math.abs(z1));
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          ctx.stroke();
        }
        const d1 = (z1 + 1) / 2,
          d2 = (1 - z1) / 2;
        ctx.fillStyle = rgba(col, 0.25 + 0.65 * d1);
        ctx.beginPath();
        ctx.arc(x, y1, 1.4 + 2.4 * d1, 0, TAU);
        ctx.fill();
        ctx.fillStyle = rgba(col, 0.25 + 0.65 * d2);
        ctx.beginPath();
        ctx.arc(x, y2, 1.4 + 2.4 * d2, 0, TAU);
        ctx.fill();
      }

      const A2 = A * 2.2;
      for (let x = -30; x < w + 30; x += 11) {
        const ph = x * k * 0.6 + t * 0.35 + 1.3;
        ctx.fillStyle = rgba(CYAN, 0.06 + 0.06 * Math.cos(ph));
        ctx.fillRect(x, cy + A2 * Math.sin(ph), 2, 2);
        ctx.fillRect(x, cy - A2 * Math.sin(ph), 2, 2);
      }
      ctx.globalCompositeOperation = 'source-over';
    },
  };
}
