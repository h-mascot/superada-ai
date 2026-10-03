import type { Scene } from './types';
import { SANS, TAU, glow, rgba, rng, type RGB } from './util';

interface Planet {
  name: string;
  a: number;
  size: number;
  c: RGB;
  ring?: boolean;
}

const PLANETS: Planet[] = [
  { name: 'Mercury', a: 0.14, size: 1.6, c: [190, 180, 170] },
  { name: 'Venus', a: 0.2, size: 2.4, c: [235, 205, 150] },
  { name: 'Earth', a: 0.27, size: 2.7, c: [120, 180, 255] },
  { name: 'Mars', a: 0.35, size: 2.1, c: [235, 125, 85] },
  { name: 'Jupiter', a: 0.56, size: 5, c: [225, 185, 145] },
  { name: 'Saturn', a: 0.7, size: 4.2, c: [235, 212, 160], ring: true },
  { name: 'Uranus', a: 0.83, size: 3.2, c: [160, 225, 235] },
  { name: 'Neptune', a: 0.96, size: 3.2, c: [110, 145, 255] },
];

interface Ship {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  qx: number;
  qy: number;
  s: number;
  dur: number;
  c: RGB;
}

const omega = (a: number) => 0.055 / Math.pow(a, 1.5);

/** A tilted orrery of the settled solar system, busy with traffic between worlds. */
export default function orrery(): Scene {
  const r = rng(42);
  const belt = Array.from({ length: 700 }, () => ({ a: 0.42 + r() * 0.07, ph: r() * TAU }));
  const phase = PLANETS.map(() => r() * TAU);
  const ships: Ship[] = [];

  return {
    draw(ctx, { t, dt, p, w, h }) {
      ctx.fillStyle = '#04050b';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2,
        cy = h * 0.52;
      const S = Math.min(w * 0.47, h * 0.95);
      const squash = 0.42;
      const pos = (a: number, ph: number, time: number) => {
        const th = ph + time * omega(a);
        return [cx + Math.cos(th) * a * S, cy + Math.sin(th) * a * S * squash] as const;
      };

      ctx.lineWidth = 1;
      for (const pl of PLANETS) {
        ctx.strokeStyle = 'rgba(160,180,255,0.08)';
        ctx.beginPath();
        ctx.ellipse(cx, cy, pl.a * S, pl.a * S * squash, 0, 0, TAU);
        ctx.stroke();
      }

      for (const b of belt) {
        const [x, y] = pos(b.a, b.ph, t);
        ctx.fillStyle = 'rgba(200,190,170,0.35)';
        ctx.fillRect(x, y, 1, 1);
      }

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, cx, cy, S * 0.12, [255, 200, 120], 0.8);
      glow(ctx, cx, cy, S * 0.35, [255, 160, 80], 0.12);

      if (r() < dt * (0.8 + p * 9)) {
        const inner = [2, 2, 2, 3, 3, 4, 5, 1, 6, 7];
        const from = inner[Math.floor(r() * inner.length)];
        let to = inner[Math.floor(r() * inner.length)];
        if (to === from) to = (from + 1) % PLANETS.length;
        const A = PLANETS[from],
          B = PLANETS[to];
        const dur = 2.5 + Math.abs(A.a - B.a) * 7;
        const [x0, y0] = pos(A.a, phase[from], t);
        const [x1, y1] = pos(B.a, phase[to], t + dur);
        const mx = (x0 + x1) / 2 - cx,
          my = (y0 + y1) / 2 - cy;
        const bulge = 1.35;
        ships.push({ x0, y0, x1, y1, qx: cx + mx * bulge, qy: cy + my * bulge, s: 0, dur, c: r() < 0.5 ? [150, 215, 255] : [255, 220, 170] });
      }
      const bez = (sh: Ship, s: number) => {
        const u = 1 - s;
        return [u * u * sh.x0 + 2 * u * s * sh.qx + s * s * sh.x1, u * u * sh.y0 + 2 * u * s * sh.qy + s * s * sh.y1] as const;
      };
      for (let i = ships.length - 1; i >= 0; i--) {
        const sh = ships[i];
        sh.s += dt / sh.dur;
        if (sh.s >= 1) {
          ships.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = rgba(sh.c, 0.08);
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let s = 0; s <= 1.001; s += 0.05) {
          const [x, y] = bez(sh, s);
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.strokeStyle = rgba(sh.c, 0.6);
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (let k = 0; k <= 6; k++) {
          const [x, y] = bez(sh, Math.max(0, sh.s - k * 0.012));
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        const [hx, hy] = bez(sh, sh.s);
        glow(ctx, hx, hy, 6, sh.c, 0.9);
      }

      PLANETS.forEach((pl, i) => {
        const [x, y] = pos(pl.a, phase[i], t);
        glow(ctx, x, y, pl.size * 4, pl.c, 0.35);
        ctx.fillStyle = rgba(pl.c, 1);
        ctx.beginPath();
        ctx.arc(x, y, pl.size, 0, TAU);
        ctx.fill();
        if (pl.ring) {
          ctx.strokeStyle = rgba(pl.c, 0.55);
          ctx.beginPath();
          ctx.ellipse(x, y, pl.size * 2.4, pl.size * 0.8, -0.3, 0, TAU);
          ctx.stroke();
        }
        if (i >= 2 && p > 0.15) {
          const n = Math.floor(p * (i === 2 ? 6 : 3));
          for (let k = 0; k < n; k++) {
            const th = t * 0.9 + (k * TAU) / Math.max(1, n);
            ctx.fillStyle = 'rgba(210,235,255,0.8)';
            ctx.fillRect(x + Math.cos(th) * pl.size * 3.2, y + Math.sin(th) * pl.size * 1.4, 1.2, 1.2);
          }
        }
      });
      ctx.globalCompositeOperation = 'source-over';

      PLANETS.forEach((pl, i) => {
        const [x, y] = pos(pl.a, phase[i], t);
        ctx.font = `500 9px ${SANS}`;
        ctx.fillStyle = 'rgba(210,220,255,0.45)';
        ctx.textAlign = 'left';
        ctx.fillText(pl.name.toUpperCase(), x + pl.size + 6, y - pl.size - 4);
      });
    },
  };
}
