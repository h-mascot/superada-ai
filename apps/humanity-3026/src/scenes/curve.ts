import type { Scene } from './types';
import { GOLD, SERIF, easeOut, glow, lerp, rgba, text, yearT } from './util';

/** World population in millions — rough consensus estimates. */
const POP: [number, number][] = [
  [1026, 300], [1100, 320], [1200, 360], [1300, 360], [1350, 330], [1400, 350], [1500, 460],
  [1600, 555], [1700, 610], [1750, 790], [1804, 1000], [1850, 1260], [1900, 1650], [1927, 2000],
  [1950, 2500], [1960, 3000], [1974, 4000], [1987, 5000], [1999, 6000], [2011, 7000], [2022, 8000], [2026, 8250],
];

const MILESTONES: [number, string][] = [
  [1040, 'Movable type — Bi Sheng, China'],
  [1348, 'The Black Death reaches Europe'],
  [1455, 'The Gutenberg Bible'],
  [1687, 'Newton’s Principia'],
  [1769, 'Watt’s steam engine'],
  [1804, 'One billion people'],
  [1903, 'Twelve seconds of powered flight'],
  [1969, 'Footprints on the Moon'],
  [1991, 'The World Wide Web'],
  [2022, 'Eight billion people'],
];

function popAt(year: number) {
  for (let i = 1; i < POP.length; i++) {
    if (year <= POP[i][0]) {
      const [y0, p0] = POP[i - 1];
      const [y1, p1] = POP[i];
      return lerp(p0, p1, (year - y0) / (y1 - y0));
    }
  }
  return POP[POP.length - 1][1];
}

/** The hockey stick: human population, drawn as the reader scrolls through a thousand years. */
export default function curve(): Scene {
  let current = -1;
  let since = 0;

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#05060b';
      ctx.fillRect(0, 0, w, h);

      const L = w * 0.1,
        R = w * 0.9,
        T = h * 0.24,
        B = h * 0.8;
      const X = (y: number) => L + ((y - 1026) / 1000) * (R - L);
      const Y = (pop: number) => B - (pop / 8600) * (B - T);

      ctx.lineWidth = 1;
      for (let b = 2; b <= 8; b += 2) {
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.beginPath();
        ctx.moveTo(L, Y(b * 1000));
        ctx.lineTo(R, Y(b * 1000));
        ctx.stroke();
        text(ctx, `${b} bn`, R + 10, Y(b * 1000) + 4, { size: 10, color: 'rgba(255,255,255,0.3)' });
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath();
      ctx.moveTo(L, B);
      ctx.lineTo(R, B);
      ctx.stroke();
      const step = w < 700 ? 200 : 100;
      for (let y = 1100; y <= 2000; y += step) {
        ctx.beginPath();
        ctx.moveTo(X(y), B);
        ctx.lineTo(X(y), B + 5);
        ctx.stroke();
        text(ctx, String(y), X(y), B + 20, { size: 10, align: 'center', color: 'rgba(255,255,255,0.35)' });
      }

      const yr = 1026 + 1000 * yearT(p);

      ctx.beginPath();
      ctx.moveTo(X(1026), B);
      for (let y = 1026; y <= yr; y += 2) ctx.lineTo(X(y), Y(popAt(y)));
      ctx.lineTo(X(yr), Y(popAt(yr)));
      ctx.lineTo(X(yr), B);
      ctx.closePath();
      const fill = ctx.createLinearGradient(0, T, 0, B);
      fill.addColorStop(0, rgba(GOLD, 0.3));
      fill.addColorStop(1, rgba(GOLD, 0.02));
      ctx.fillStyle = fill;
      ctx.fill();

      ctx.beginPath();
      for (let y = 1026; y <= yr; y += 2) {
        if (y === 1026) ctx.moveTo(X(y), Y(popAt(y)));
        else ctx.lineTo(X(y), Y(popAt(y)));
      }
      ctx.lineTo(X(yr), Y(popAt(yr)));
      ctx.strokeStyle = rgba(GOLD, 0.25);
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.strokeStyle = rgba([255, 228, 180], 0.95);
      ctx.lineWidth = 1.6;
      ctx.stroke();

      let last = -1;
      MILESTONES.forEach(([my], i) => {
        if (my > yr) return;
        last = i;
        const mx = X(my),
          myy = Y(popAt(my));
        ctx.strokeStyle = 'rgba(255,230,190,0.18)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(mx, myy);
        ctx.lineTo(mx, B);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,236,200,0.9)';
        ctx.beginPath();
        ctx.arc(mx, myy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
      if (last !== current) {
        current = last;
        since = t;
      }
      if (current >= 0) {
        const a = easeOut((t - since) / 0.8);
        const [my, label] = MILESTONES[current];
        const size = Math.max(34, Math.min(72, w * 0.05));
        const capY = T + (B - T) * 0.42 + (1 - a) * 10;
        text(ctx, String(my), w / 2, capY, { size, family: SERIF, weight: 300, align: 'center', color: rgba([255, 236, 205], 0.9 * a) });
        text(ctx, label.toUpperCase(), w / 2, capY + 26, { size: 11, weight: 500, tracking: 2.5, align: 'center', color: rgba(GOLD, 0.75 * a) });
      }

      const tx = X(yr),
        ty = Y(popAt(yr));
      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, tx, ty, 40 + 10 * Math.sin(t * 3), [255, 220, 160], 0.6);
      ctx.globalCompositeOperation = 'source-over';
      const pop = popAt(yr);
      const lbl = pop >= 1000 ? `${(pop / 1000).toFixed(1)} billion` : `${Math.round(pop)} million`;
      const right = tx > w * 0.7;
      text(ctx, lbl, tx + (right ? -14 : 14), ty - 12, { size: 13, weight: 500, align: right ? 'right' : 'left', color: 'rgba(255,240,215,0.85)' });
      text(ctx, 'PEOPLE ALIVE', tx + (right ? -14 : 14), ty + 4, { size: 9, tracking: 2, align: right ? 'right' : 'left', color: rgba(GOLD, 0.6) });
    },
  };
}
