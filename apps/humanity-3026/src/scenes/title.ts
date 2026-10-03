import type { Scene } from './types';
import { TAU, drawStars, makeStars, smoothstep } from './util';

/** Opening shot: a planet's limb at the edge of sunrise, under a slow starfield. */
export default function title(): Scene {
  const stars = makeStars(560, 11);

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#03040a';
      ctx.fillRect(0, 0, w, h);

      const neb = ctx.createRadialGradient(w * 0.72, h * 0.28, 0, w * 0.72, h * 0.28, Math.max(w, h) * 0.65);
      neb.addColorStop(0, 'rgba(78,64,140,0.16)');
      neb.addColorStop(0.5, 'rgba(40,40,90,0.06)');
      neb.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = neb;
      ctx.fillRect(0, 0, w, h);

      drawStars(ctx, stars, w, h, t, 1 - 0.4 * p, t * 0.0015);

      const R = Math.max(w, h) * 1.45;
      const cx = w / 2;
      const rise = smoothstep(0, 1, p);
      const cy = h + R - h * (0.14 + 0.14 * rise);
      const top = cy - R;
      const pulse = 0.88 + 0.12 * Math.sin(t * 0.6);

      const atm = ctx.createRadialGradient(cx, cy, R * 0.995, cx, cy, R * 1.1);
      atm.addColorStop(0, `rgba(255,196,130,${0.5 * pulse})`);
      atm.addColorStop(0.07, 'rgba(255,140,90,0.2)');
      atm.addColorStop(0.3, 'rgba(90,120,255,0.09)');
      atm.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = atm;
      ctx.fillRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      ctx.fillStyle = '#010205';
      ctx.fill();

      ctx.globalCompositeOperation = 'lighter';
      const sun = ctx.createRadialGradient(cx, top, 0, cx, top, h * 0.4);
      sun.addColorStop(0, `rgba(255,240,210,${0.95 * pulse})`);
      sun.addColorStop(0.04, `rgba(255,205,150,${0.5 * pulse})`);
      sun.addColorStop(0.3, 'rgba(255,150,90,0.08)');
      sun.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, w, h);

      const streak = ctx.createLinearGradient(0, 0, w, 0);
      streak.addColorStop(0, 'rgba(120,160,255,0)');
      streak.addColorStop(0.5, `rgba(180,205,255,${0.4 * pulse})`);
      streak.addColorStop(1, 'rgba(120,160,255,0)');
      ctx.fillStyle = streak;
      ctx.fillRect(0, top - 1, w, 2);
      ctx.globalCompositeOperation = 'source-over';

      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI * 1.35, Math.PI * 1.65);
      ctx.strokeStyle = 'rgba(255,214,168,0.55)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    },
  };
}
