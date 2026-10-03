import type { Scene } from './types';
import { CYAN, GOLD, SANS, SERIF, TAU, glow, lerp, rgba, rng, smoothstep, text } from './util';

/** A river of particles from 1026 to 2026, reflected forward into an imagined 3026. */
export default function mirror(): Scene {
  const r = rng(3);
  const ps = Array.from({ length: 1200 }, () => ({ u: r(), off: r() * 2 - 1, sp: 0.6 + r() * 0.8, ph: r() * TAU }));

  return {
    draw(ctx, { t, dt, p, w, h }) {
      ctx.fillStyle = 'rgba(4,5,10,0.28)';
      ctx.fillRect(0, 0, w, h);

      const m = w * 0.08;
      const x0 = m,
        x1 = w - m,
        cx = w / 2,
        cy = h * 0.52;
      const reveal = smoothstep(0.12, 0.8, p);

      ctx.lineWidth = 1;
      ctx.strokeStyle = rgba(GOLD, 0.25);
      ctx.beginPath();
      ctx.moveTo(x0, cy);
      ctx.lineTo(cx, cy);
      ctx.stroke();
      ctx.setLineDash([3, 6]);
      ctx.strokeStyle = rgba(CYAN, 0.3);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(lerp(cx, x1, reveal), cy);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.globalCompositeOperation = 'lighter';
      for (const q of ps) {
        q.u += dt * 0.045 * q.sp * (0.15 + 2.2 * q.u * q.u);
        if (q.u > 1) {
          q.u = 0;
          q.off = r() * 2 - 1;
        }
        const future = q.u > 0.5;
        if (future && (q.u - 0.5) * 2 > reveal) continue;
        const spread = h * (0.006 + 0.34 * Math.pow(q.u, 2.4));
        const x = lerp(x0, x1, q.u);
        const y = cy + q.off * spread + Math.sin(t * 0.8 + q.ph + q.u * 9) * spread * 0.07;
        ctx.fillStyle = future ? rgba(CYAN, 0.5) : rgba(GOLD, 0.7);
        const s = future ? 1.3 : 1.7;
        ctx.fillRect(x, y, s, s);
      }
      glow(ctx, cx, cy, h * 0.22, [255, 230, 190], 0.18 + 0.05 * Math.sin(t * 1.3));
      ctx.globalCompositeOperation = 'source-over';

      const marker = (x: number, year: string, label: string, c: typeof GOLD, a: number) => {
        if (a <= 0.01) return;
        ctx.strokeStyle = rgba(c, 0.35 * a);
        ctx.beginPath();
        ctx.moveTo(x, cy - h * 0.3);
        ctx.lineTo(x, cy + h * 0.3);
        ctx.stroke();
        const size = Math.max(22, Math.min(48, w * 0.035));
        text(ctx, year, x, cy + h * 0.3 + size * 1.05, { size, family: SERIF, weight: 300, align: 'center', color: rgba(c, 0.9 * a) });
        text(ctx, label.toUpperCase(), x, cy + h * 0.3 + size * 1.6, { size: 10, family: SANS, weight: 500, align: 'center', tracking: 3, color: rgba(c, 0.55 * a) });
      };
      marker(x0, '1026', 'Remembered', GOLD, 1);
      marker(cx, '2026', 'You are here', [255, 236, 205], 1);
      marker(x1, '3026', 'Imagined', CYAN, reveal);
    },
  };
}
