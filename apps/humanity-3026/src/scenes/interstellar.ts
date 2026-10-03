import type { Scene } from './types';
import { SERIF, TAU, clamp, glow, rgba, rng, smoothstep, text } from './util';

/** Flying toward Proxima Centauri; letters of light pulse back from the far shore. */
export default function interstellar(): Scene {
  const r = rng(31);
  const stars = Array.from({ length: 800 }, () => ({ x: r() * 2 - 1, y: r() * 2 - 1, z: r(), warm: r() }));

  return {
    draw(ctx, { t, dt, p, w, h }) {
      ctx.fillStyle = 'rgba(3,3,8,0.55)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2,
        cy = h / 2;
      const f = Math.min(w, h) * 0.55;
      const speed = 0.035 + 0.2 * smoothstep(0.1, 0.9, p);

      for (const s of stars) {
        const zPrev = s.z;
        s.z -= speed * dt;
        if (s.z <= 0.02) {
          s.z = 1;
          s.x = r() * 2 - 1;
          s.y = r() * 2 - 1;
          continue;
        }
        const sx = cx + (s.x / s.z) * f,
          sy = cy + (s.y / s.z) * f;
        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) continue;
        const px = cx + (s.x / zPrev) * f,
          py = cy + (s.y / zPrev) * f;
        const a = clamp((1 - s.z) * 1.3);
        const c = s.warm > 0.8 ? [255, 210, 180] : [210, 225, 255];
        ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;
        ctx.lineWidth = 0.6 + (1 - s.z) * 1.6;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx + (sx - px) * 0.5, sy + (sy - py) * 0.5);
        ctx.stroke();
      }

      const tx = cx + w * 0.06,
        ty = cy - h * 0.04;
      const grow = smoothstep(0, 1, p);
      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, tx, ty, Math.min(w, h) * (0.08 + 0.3 * grow), [255, 110, 80], 0.35 + 0.2 * grow);
      glow(ctx, tx, ty, 10 + 26 * grow, [255, 200, 170], 0.95);

      for (let k = 0; k < 4; k++) {
        const age = ((t + k * 1.1) % 4.4) / 4.4;
        const rad = 10 + age * Math.min(w, h) * 0.6;
        ctx.strokeStyle = rgba([255, 170, 140], 0.35 * (1 - age) * (0.3 + grow));
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(tx, ty, rad, 0, TAU);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';

      const la = smoothstep(0.15, 0.35, p);
      if (la > 0) {
        ctx.strokeStyle = rgba([255, 200, 180], 0.35 * la);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tx + 18, ty - 18);
        ctx.lineTo(tx + 70, ty - 70);
        ctx.lineTo(tx + 160, ty - 70);
        ctx.stroke();
        text(ctx, 'Proxima Centauri', tx + 76, ty - 78, { size: 20, family: SERIF, italic: true, color: rgba([255, 225, 205], 0.9 * la) });
        text(ctx, '4.24 LIGHT-YEARS', tx + 76, ty - 56, { size: 9, weight: 600, tracking: 3, color: rgba([255, 170, 140], 0.8 * la) });
      }
    },
  };
}
