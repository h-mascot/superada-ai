import type { Scene } from './types';
import { drawStars, fbm3, glow, makeStars, mixRGB, noise3, rgba, rng, smoothstep, type RGB } from './util';

interface Dot {
  x: number;
  y: number;
  z: number;
  land: boolean;
  ice: boolean;
  greenAt: number;
  city: number;
}

const OCEAN: RGB = [40, 80, 150];
const DRY: RGB = [176, 138, 92];
const GREEN: RGB = [92, 200, 118];
const ICE: RGB = [220, 232, 245];
const CITY: RGB = [255, 180, 90];

/** A dot-matrix Earth: farmland turns back to forest and the city lights dim to campfires. */
export default function globe(): Scene {
  const r = rng(99);
  const stars = makeStars(300, 17);
  const N = 3800;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const dots: Dot[] = [];
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = golden * i;
    const x = Math.cos(th) * rad,
      z = Math.sin(th) * rad;
    const n = fbm3(x * 2.1 + 11, y * 2.1 + 3, z * 2.1 + 7, 5);
    const land = n > 0.52;
    const ice = Math.abs(y) > 0.9;
    const greenAt = 0.12 + 0.75 * noise3(x * 2.2 + 40, y * 2.2, z * 2.2);
    const city = land && !ice && r() < 0.14 ? (r() < 0.08 ? 2 : 0.1 + r() * 0.8) : -1;
    dots.push({ x, y, z, land, ice, greenAt, city });
  }
  const lx = -0.55,
    ly = 0.35,
    lz = 0.76;

  return {
    draw(ctx, { t, p, w, h }) {
      ctx.fillStyle = '#03050a';
      ctx.fillRect(0, 0, w, h);
      drawStars(ctx, stars, w, h, t, 0.7);

      const cx = w / 2,
        cy = h / 2;
      const R = Math.min(w, h) * 0.34;
      const a = t * 0.1,
        b = 0.38;
      const ca = Math.cos(a),
        sa = Math.sin(a),
        cb = Math.cos(b),
        sb = Math.sin(b);

      ctx.globalCompositeOperation = 'lighter';
      const atm = ctx.createRadialGradient(cx, cy, R * 0.96, cx, cy, R * 1.22);
      atm.addColorStop(0, 'rgba(110,170,255,0.32)');
      atm.addColorStop(0.3, 'rgba(80,140,255,0.1)');
      atm.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = atm;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = '#02040a';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      for (const d of dots) {
        const x1 = d.x * ca + d.z * sa;
        const z1 = -d.x * sa + d.z * ca;
        const y1 = d.y * cb - z1 * sb;
        const z2 = d.y * sb + z1 * cb;
        if (z2 <= 0) continue;
        const light = x1 * lx + -y1 * ly + z2 * lz;
        const day = smoothstep(-0.15, 0.35, light);
        const sx = cx + x1 * R,
          sy = cy + y1 * R;
        const size = 1.3 + 1.9 * z2;
        let c: RGB;
        let alpha: number;
        if (d.ice) {
          c = ICE;
          alpha = 0.25 + 0.75 * day;
        } else if (d.land) {
          c = mixRGB(DRY, GREEN, smoothstep(d.greenAt - 0.06, d.greenAt + 0.06, p));
          alpha = 0.3 + 0.7 * day;
        } else {
          c = OCEAN;
          alpha = 0.06 + 0.32 * day;
        }
        ctx.fillStyle = rgba(c, alpha * (0.5 + 0.5 * z2));
        ctx.fillRect(sx, sy, size, size);

        if (d.city >= 0 && day < 0.6) {
          const fade = d.city >= 2 ? 0.55 : 1 - smoothstep(d.city - 0.05, d.city + 0.05, p);
          const ca2 = fade * (1 - day) * (0.6 + 0.4 * Math.sin(t * 3 + d.x * 50));
          if (ca2 > 0.02) {
            ctx.fillStyle = rgba(CITY, ca2);
            ctx.fillRect(sx - 0.5, sy - 0.5, size + 1, size + 1);
          }
        }
      }

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, cx + lx * R * 0.6, cy - ly * R * 0.6, R * 0.9, [150, 190, 255], 0.06);
      ctx.globalCompositeOperation = 'source-over';
    },
  };
}
