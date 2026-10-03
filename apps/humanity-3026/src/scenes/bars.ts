import type { Scene } from './types';
import { CYAN, GOLD, SANS, SERIF, clamp, easeOut, glow, rgba, text } from './util';

interface Row {
  label: string;
  ratio: number;
  shown: string;
  future: string;
  capped?: boolean;
}

const ROWS: Row[] = [
  { label: 'People alive', ratio: 27, shown: '27×', future: '≈ 220 billion' },
  { label: 'Life expectancy', ratio: 2.4, shown: '2.4×', future: '≈ 175 years' },
  { label: 'Energy use', ratio: 100, shown: '100×', future: '≈ 2 petawatts' },
  { label: 'Top speed', ratio: 600, shown: '600×', future: '≈ 2% of light' },
  { label: 'Message speed', ratio: 1e7, shown: '10,000,000×', future: 'light-speed limit', capped: true },
];

const DECADES = 14;
const SUP = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
const pow10 = (d: number) => (d === 0 ? '1×' : d === 1 ? '10×' : `10${String(d).split('').map((c) => SUP[+c]).join('')}×`);

/** Logarithmic bars for each thousand-year ratio, then a ghost of the same ratio applied again. */
export default function bars(): Scene {
  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#05060b';
      ctx.fillRect(0, 0, w, h);

      const narrow = w < 760;
      const L = narrow ? w * 0.08 : w * 0.24;
      const R = w * 0.92;
      const span = R - L;
      const T = h * (narrow ? 0.34 : 0.3);
      const gap = Math.min(78, h * 0.09);

      for (let d = 0; d <= DECADES; d++) {
        const x = L + (d / DECADES) * span;
        ctx.strokeStyle = d === 7 ? rgba(CYAN, 0.12) : 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, T - gap * 0.9);
        ctx.lineTo(x, T + gap * (ROWS.length - 0.3));
        ctx.stroke();
        if (d % 2 === 0) text(ctx, pow10(d), x, T - gap * 0.9 - 8, { size: 10, align: 'center', color: 'rgba(255,255,255,0.3)' });
      }
      text(ctx, '1026 → 2026', L, T - gap * (narrow ? 1.95 : 1.55), { size: 11, weight: 600, tracking: 2.5, color: rgba(GOLD, 0.8) });
      text(ctx, narrow ? '2026 → 3026, AGAIN' : '2026 → 3026, IF IT HAPPENS AGAIN', narrow ? L : L + 150, T - gap * 1.55, {
        size: 11,
        weight: 600,
        tracking: 2.5,
        color: rgba(CYAN, 0.8 * clamp((p - 0.35) * 4)),
      });

      ROWS.forEach((row, i) => {
        const y = T + i * gap;
        const full = (Math.log10(row.ratio) / DECADES) * span;
        const g1 = easeOut(p * 2.4 - i * 0.2);
        const g2 = easeOut((p - 0.42) * 2.6 - i * 0.14);
        const len = full * g1;

        if (narrow) {
          text(ctx, row.label.toUpperCase(), L, y - 12, { size: 10, weight: 500, tracking: 2, color: 'rgba(255,255,255,0.6)' });
        } else {
          text(ctx, row.label, L - 18, y + 5, { size: 15, family: SERIF, italic: true, align: 'right', color: 'rgba(255,245,230,0.8)' });
        }

        const bar = ctx.createLinearGradient(L, 0, L + full, 0);
        bar.addColorStop(0, rgba(GOLD, 0.35));
        bar.addColorStop(1, rgba([255, 226, 170], 0.95));
        ctx.fillStyle = bar;
        ctx.fillRect(L, y - 2.5, len, 5);
        const shimmer = L + ((t * 0.25 + i * 0.17) % 1) * len;
        if (len > 4) {
          ctx.globalCompositeOperation = 'lighter';
          glow(ctx, shimmer, y, 18, [255, 236, 200], 0.5);
          glow(ctx, L + len, y, 16, [255, 220, 160], 0.7 * g1);
          ctx.globalCompositeOperation = 'source-over';
        }
        if (g1 > 0.6) {
          text(ctx, row.shown, L + len + 12, y - 8, { size: 18, family: SERIF, weight: 500, color: rgba([255, 236, 205], clamp((g1 - 0.6) * 2.5)) });
        }

        if (g2 > 0) {
          const gx = L + full;
          if (row.capped) {
            const a = g2 * (0.6 + 0.4 * Math.sin(t * 4));
            ctx.strokeStyle = rgba([255, 120, 110], a);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(gx + 3, y - 14);
            ctx.lineTo(gx + 3, y + 14);
            ctx.stroke();
            text(ctx, row.future.toUpperCase(), gx + 14, y + 20, { size: 10, weight: 600, tracking: 2, color: rgba([255, 150, 140], g2) });
          } else {
            ctx.setLineDash([4, 5]);
            ctx.strokeStyle = rgba(CYAN, 0.85);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(gx, y);
            ctx.lineTo(gx + full * g2, y);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalCompositeOperation = 'lighter';
            glow(ctx, gx + full * g2, y, 14, CYAN, 0.8 * g2);
            ctx.globalCompositeOperation = 'source-over';
            if (g2 > 0.7) {
              text(ctx, row.future, gx + full * g2 + 12, y + 18, { size: 12, family: SANS, weight: 500, color: rgba(CYAN, clamp((g2 - 0.7) * 3)) });
            }
          }
        }
      });
    },
  };
}
