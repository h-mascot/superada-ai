import type { Scene } from './types';
import { TAU, drawStars, glow, makeStars, rng, smoothstep } from './util';

interface Collector {
  a: number;
  inc: number;
  node: number;
  ph: number;
  w: number;
}

/** The Sun, slowly gaining a thin swarm of collectors, beaming power toward a small blue Earth. */
export default function swarm(): Scene {
  const r = rng(13);
  const stars = makeStars(260, 4);
  const M = 1700;
  const cs: Collector[] = Array.from({ length: M }, () => {
    const a = 1.7 + Math.pow(r(), 1.5) * 2.6;
    return { a, inc: (r() - 0.5) * 2.4, node: r() * TAU, ph: r() * TAU, w: 0.35 / Math.pow(a, 1.5) };
  });
  const tilt = 1.12;
  const ct = Math.cos(tilt),
    st = Math.sin(tilt);

  const place = (c: Collector, t: number, rs: number) => {
    const th = c.ph + t * c.w;
    const x = c.a * Math.cos(th) * rs;
    const y0 = c.a * Math.sin(th) * rs;
    const y = y0 * Math.cos(c.inc);
    const z = y0 * Math.sin(c.inc);
    const X = x * Math.cos(c.node) - y * Math.sin(c.node);
    const Yp = x * Math.sin(c.node) + y * Math.cos(c.node);
    return { X, Y: Yp * ct - z * st, depth: Yp * st + z * ct, th };
  };

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#050407';
      ctx.fillRect(0, 0, w, h);
      drawStars(ctx, stars, w, h, t, 0.6);

      const cx = w / 2,
        cy = h / 2;
      const rs = Math.min(w, h) * 0.075;
      const visible = Math.floor(80 + smoothstep(0.05, 0.95, p) * (M - 80));

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, cx, cy, rs * 9, [255, 170, 80], 0.22);
      glow(ctx, cx, cy, rs * 3.2, [255, 210, 140], 0.5 + 0.05 * Math.sin(t * 2));

      const earthA = rs * 5.4;
      const eth = t * 0.12;
      const ex = cx + Math.cos(eth) * earthA,
        ey = cy + Math.sin(eth) * earthA * ct;

      const drawSet = (front: boolean) => {
        for (let i = 0; i < visible; i++) {
          const c = cs[i];
          const q = place(c, t, rs);
          if (q.depth > 0 !== front) continue;
          const sx = cx + q.X,
            sy = cy + q.Y;
          if (!front && Math.hypot(q.X, q.Y) < rs) continue;
          const catchLight = 0.5 + 0.5 * Math.sin(q.th * 3 + i);
          const a = (front ? 0.55 : 0.28) + 0.4 * catchLight;
          ctx.fillStyle = `rgba(255,236,200,${a.toFixed(3)})`;
          ctx.fillRect(sx, sy, 1.4, 1.4);
          if (front && i % 113 === 0 && p > 0.3) {
            ctx.strokeStyle = `rgba(140,200,255,${(0.12 * catchLight).toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
          }
        }
      };

      drawSet(false);

      const sun = ctx.createRadialGradient(cx, cy, 0, cx, cy, rs);
      sun.addColorStop(0, 'rgba(255,255,245,1)');
      sun.addColorStop(0.7, 'rgba(255,225,160,1)');
      sun.addColorStop(1, 'rgba(255,170,80,0.9)');
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = sun;
      ctx.beginPath();
      ctx.arc(cx, cy, rs, 0, TAU);
      ctx.fill();
      ctx.globalCompositeOperation = 'lighter';

      drawSet(true);

      glow(ctx, ex, ey, 14, [120, 180, 255], 0.9);
      ctx.fillStyle = 'rgba(170,215,255,1)';
      ctx.beginPath();
      ctx.arc(ex, ey, 2.6, 0, TAU);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    },
  };
}
