import type { Scene } from './types';
import { CYAN, SANS, SERIF, TAU, clamp, glow, rgba, text, type RGB } from './util';

interface Body {
  name: string;
  secs: number;
  delay: string;
  size: number;
  c: RGB;
}

const BODIES: Body[] = [
  { name: 'Earth', secs: 0, delay: 'origin', size: 5, c: [120, 180, 255] },
  { name: 'Moon', secs: 1.28, delay: '1.3 seconds', size: 2.4, c: [215, 215, 225] },
  { name: 'Mars', secs: 750, delay: '3–22 minutes', size: 3.4, c: [235, 125, 85] },
  { name: 'Jupiter', secs: 2600, delay: '33–53 minutes', size: 6, c: [225, 185, 145] },
  { name: 'Saturn', secs: 4800, delay: '68–84 minutes', size: 5, c: [235, 212, 160] },
  { name: 'Neptune', secs: 14800, delay: 'about 4 hours', size: 4, c: [110, 145, 255] },
  { name: 'Proxima Centauri', secs: 1.338e8, delay: '4.24 years', size: 4.5, c: [255, 140, 110] },
];

const MAX_LOG = 8.3;
const EMIT_EVERY = 2.8;
const LOG_PER_SEC = 0.95;
const RINGS = 5;

function formatSecs(s: number) {
  if (s < 60) return `${s.toFixed(s < 10 ? 1 : 0)} s`;
  if (s < 3600) return `${Math.floor(s / 60)} min ${Math.floor(s % 60)} s`;
  if (s < 86400 * 2) return `${Math.floor(s / 3600)} h ${Math.floor((s % 3600) / 60)} min`;
  if (s < 86400 * 365) return `${Math.floor(s / 86400)} days`;
  return `${(s / (86400 * 365.25)).toFixed(2)} years`;
}

/** Messages leave Earth at light speed, on a logarithmic map where distance becomes waiting. */
export default function lightlag(): Scene {
  return {
    draw(ctx, { t, w, h }) {
      ctx.fillStyle = '#03050b';
      ctx.fillRect(0, 0, w, h);

      // Horizontal on wide screens, vertical on narrow ones.
      const vertical = w < 700;
      const a0 = vertical ? h * 0.17 : w * 0.1;
      const a1 = vertical ? h * 0.82 : w * 0.9;
      const cross = vertical ? w * 0.5 : h * 0.56;
      const along = (secs: number) => a0 + (Math.log10(1 + secs) / MAX_LOG) * (a1 - a0);
      const pt = (s: number): [number, number] => (vertical ? [cross, s] : [s, cross]);

      const line = (s0: number, s1: number, dashed: boolean) => {
        ctx.setLineDash(dashed ? [2, 7] : []);
        ctx.beginPath();
        ctx.moveTo(...pt(s0));
        ctx.lineTo(...pt(s1));
        ctx.stroke();
        ctx.setLineDash([]);
      };
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      const nep = along(BODIES[5].secs),
        prox = along(BODIES[6].secs);
      line(a0, nep + 30, false);
      line(nep + 30, prox - 20, true);
      const [gx, gy] = pt((nep + prox) / 2);
      text(ctx, 'THE GULF', vertical ? gx + 14 : gx, vertical ? gy + 3 : gy - 14, {
        size: 9,
        weight: 600,
        tracking: 4,
        align: vertical ? 'left' : 'center',
        color: 'rgba(255,255,255,0.28)',
      });

      const newest = (t % EMIT_EVERY) * LOG_PER_SEC;
      const ringPos: number[] = [];
      const [ex, ey] = pt(a0);
      for (let k = 0; k < RINGS; k++) {
        const logL = newest + k * EMIT_EVERY * LOG_PER_SEC;
        ringPos.push(a0 + (logL / MAX_LOG) * (a1 - a0));
        if (logL > MAX_LOG + 0.2) continue;
        const rad = (logL / MAX_LOG) * (a1 - a0);
        const a = 0.55 * (1 - logL / (MAX_LOG + 0.4));
        ctx.strokeStyle = rgba(CYAN, a);
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(ex, ey, Math.max(0.1, rad), 0, TAU);
        ctx.stroke();
        ctx.strokeStyle = rgba(CYAN, a * 0.25);
        ctx.lineWidth = 6;
        ctx.stroke();
      }

      BODIES.forEach((b, i) => {
        const s = along(b.secs);
        const [bx, by] = pt(s);
        const hit = Math.max(...ringPos.map((rp) => clamp(1 - Math.abs(rp - s) / 26)));
        ctx.globalCompositeOperation = 'lighter';
        glow(ctx, bx, by, b.size * 5 + hit * 30, b.c, 0.35 + hit * 0.6);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = rgba(b.c, 1);
        ctx.beginPath();
        ctx.arc(bx, by, b.size, 0, TAU);
        ctx.fill();

        const flip = i % 2 === 0;
        if (vertical) {
          const lx = flip ? bx - 16 : bx + 16;
          const align = flip ? 'right' : 'left';
          text(ctx, b.name.toUpperCase(), lx, by - 1, { size: 9, weight: 600, tracking: 1.5, align, color: 'rgba(230,238,255,0.75)' });
          text(ctx, b.delay, lx, by + 13, { size: 13, family: SERIF, italic: true, align, color: rgba(b.c, 0.95) });
        } else {
          const ly = flip ? by - 34 : by + 38;
          text(ctx, b.name.toUpperCase(), bx, ly, { size: 10, weight: 600, tracking: 2, align: 'center', color: 'rgba(230,238,255,0.75)' });
          text(ctx, b.delay, bx, ly + 17, { size: 15, family: SERIF, italic: true, align: 'center', color: rgba(b.c, 0.95) });
        }
      });

      const secs = Math.pow(10, newest) - 1;
      const rx = vertical ? w * 0.08 : a0;
      const ry = vertical ? h * 0.9 : h * 0.84;
      text(ctx, 'LIGHT HAS BEEN TRAVELLING FOR', rx, ry, { size: 10, weight: 600, tracking: 3, color: 'rgba(255,255,255,0.4)' });
      text(ctx, formatSecs(secs), rx, ry + 34, { size: 30, family: SERIF, weight: 300, color: rgba(CYAN, 0.95) });
      if (!vertical) {
        text(ctx, 'ONE-WAY DELAY FROM EARTH · LOGARITHMIC SCALE', a1, ry, { size: 9, weight: 500, tracking: 2.5, align: 'right', family: SANS, color: 'rgba(255,255,255,0.28)' });
      }
    },
  };
}
