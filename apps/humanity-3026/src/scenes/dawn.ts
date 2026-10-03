import type { Scene } from './types';
import { TAU, drawStars, glow, makeStars, rng, smoothstep } from './util';

/** Sunrise over a quiet planet, scattered with small warm lights. */
export default function dawn(): Scene {
  const stars = makeStars(420, 23);
  const r = rng(9);
  const fires = Array.from({ length: 140 }, () => ({ x: r(), y: r(), ph: r() * TAU }));

  return {
    draw(ctx, { t, p, w, h }) {
      const rise = smoothstep(0, 0.95, p);
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#03040a');
      sky.addColorStop(0.55, `rgba(${20 + 40 * rise},${22 + 30 * rise},${50 + 40 * rise},1)`);
      sky.addColorStop(0.75, `rgba(${60 + 150 * rise},${40 + 80 * rise},${50 + 30 * rise},1)`);
      sky.addColorStop(1, '#03040a');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);
      drawStars(ctx, stars, w, h * 0.8, t, 1 - rise * 0.9);

      const R = Math.max(w, h) * 1.7;
      const cx = w / 2;
      const top = h * 0.72;
      const cy = top + R;
      const sunY = top + 30 - rise * h * 0.2;
      const sunX = cx + w * 0.02;

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, sunX, sunY, h * (0.5 + 0.4 * rise), [255, 170, 90], 0.25 + 0.4 * rise);
      glow(ctx, sunX, sunY, h * 0.12, [255, 235, 200], 0.6 + 0.4 * rise);
      ctx.fillStyle = 'rgba(255,250,235,1)';
      ctx.beginPath();
      ctx.arc(sunX, sunY, Math.min(w, h) * 0.022, 0, TAU);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      const atm = ctx.createRadialGradient(cx, cy, R * 0.998, cx, cy, R * 1.06);
      atm.addColorStop(0, `rgba(255,${190 + 30 * rise},${140 + 40 * rise},${0.5 + 0.4 * rise})`);
      atm.addColorStop(0.1, `rgba(120,170,255,${0.2 + 0.25 * rise})`);
      atm.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = atm;
      ctx.fillRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      const land = ctx.createLinearGradient(0, top, 0, h);
      land.addColorStop(0, `rgba(${12 + 20 * rise},${16 + 30 * rise},${24 + 20 * rise},1)`);
      land.addColorStop(1, '#020305');
      ctx.fillStyle = land;
      ctx.fill();

      ctx.globalCompositeOperation = 'lighter';
      for (const f of fires) {
        const x = f.x * w;
        const y = top + 8 + Math.pow(f.y, 1.6) * (h - top);
        const a = (0.35 + 0.35 * Math.sin(t * 2 + f.ph)) * (1 - rise * 0.6);
        ctx.fillStyle = `rgba(255,180,100,${a.toFixed(3)})`;
        ctx.fillRect(x, y, 1.6, 1.6);
      }
      const streak = ctx.createLinearGradient(0, 0, w, 0);
      streak.addColorStop(0, 'rgba(120,160,255,0)');
      streak.addColorStop(0.5, `rgba(190,215,255,${(0.2 + 0.5 * rise).toFixed(3)})`);
      streak.addColorStop(1, 'rgba(120,160,255,0)');
      ctx.fillStyle = streak;
      ctx.fillRect(0, sunY - 1, w, 2);
      for (const [k, s] of [
        [0.35, 26],
        [0.62, 12],
        [0.85, 40],
      ]) {
        const gx = sunX + (cx - sunX) * 2 * k;
        const gy = sunY + (h * 0.5 - sunY) * 2 * k;
        glow(ctx, gx, gy, s, [150, 190, 255], 0.12 * rise);
      }
      ctx.globalCompositeOperation = 'source-over';
    },
  };
}
