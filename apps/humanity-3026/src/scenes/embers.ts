import type { Scene } from './types';
import { TAU, noise3, rng, sprite } from './util';

interface Flame {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  s: number;
}

interface Ember extends Flame {
  seed: number;
  star: boolean;
}

interface SkyStar {
  x: number;
  y: number;
  born: number;
  ph: number;
  s: number;
}

const FIGURES = [
  { dx: -0.26, s: 1.05 },
  { dx: -0.14, s: 0.8 },
  { dx: 0.15, s: 0.86 },
  { dx: 0.27, s: 1.0 },
];

/** A campfire with people around it; its embers rise and become stars. */
export default function embers(): Scene {
  const r = rng(64);
  const hot = sprite([255, 230, 160]);
  const warm = sprite([255, 140, 50]);
  const deep = sprite([200, 60, 20]);
  const flames: Flame[] = [];
  const sparks: Ember[] = [];
  const sky: SkyStar[] = [];
  let seeded = false;

  return {
    resize() {
      sky.length = 0;
      seeded = false;
    },
    draw(ctx, { t, dt, p, w, h }) {
      if (!seeded) {
        seeded = true;
        for (let i = 0; i < 90; i++) {
          sky.push({ x: w * (0.5 + (r() - 0.5) * r() * 1.4), y: h * Math.pow(r(), 1.4) * 0.5, born: -10, ph: r() * TAU, s: 1 + r() * 1.2 });
        }
      }
      const unit = Math.min(w, h) / 800;
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#03040b');
      bg.addColorStop(0.7, '#0a0608');
      bg.addColorStop(1, '#140905');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      for (const s of sky) {
        const a = Math.min(1, (t - s.born) / 2) * (0.5 + 0.5 * Math.sin(t * 1.5 + s.ph));
        ctx.fillStyle = `rgba(255,236,210,${(0.85 * a).toFixed(3)})`;
        ctx.fillRect(s.x, s.y, s.s, s.s);
      }

      const cx = w / 2,
        base = h * 0.8;
      const fireW = 90 * unit;
      const flick = noise3(t * 2.5, 1, 1);

      const ground = ctx.createRadialGradient(cx, base + 10 * unit, 0, cx, base + 10 * unit, 420 * unit);
      ground.addColorStop(0, `rgba(255,140,60,${(0.28 + 0.1 * flick).toFixed(3)})`);
      ground.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = ground;
      ctx.fillRect(0, base - 300 * unit, w, h);

      ctx.globalCompositeOperation = 'lighter';
      const spawn = dt * 380;
      for (let i = 0; i < spawn; i++) {
        flames.push({
          x: cx + (r() - 0.5) * fireW * (0.6 + r() * 0.6),
          y: base,
          vx: (r() - 0.5) * 12 * unit,
          vy: -(70 + r() * 90) * unit,
          life: 0,
          max: 0.5 + r() * 0.8,
          s: (26 + r() * 40) * unit,
        });
      }
      for (let i = flames.length - 1; i >= 0; i--) {
        const q = flames[i];
        q.life += dt;
        if (q.life >= q.max) {
          flames.splice(i, 1);
          continue;
        }
        const k = q.life / q.max;
        q.x += (q.vx + (cx - q.x) * 1.4) * dt;
        q.y += q.vy * dt;
        const img = k < 0.3 ? hot : k < 0.65 ? warm : deep;
        const s = q.s * (1 - k * 0.7);
        ctx.globalAlpha = 0.28 * (1 - k);
        ctx.drawImage(img, q.x - s / 2, q.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;

      if (r() < dt * (10 + 14 * p)) {
        sparks.push({
          x: cx + (r() - 0.5) * fireW * 0.6,
          y: base - 30 * unit,
          vx: 0,
          vy: -(40 + r() * 60) * unit,
          life: 0,
          max: 8 + r() * 6,
          s: 1.4 + r() * 1.2,
          seed: r() * 100,
          star: r() < 0.25 + 0.65 * p,
        });
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const q = sparks[i];
        q.life += dt;
        q.x += (noise3(q.seed, q.life * 0.4, 0) - 0.5) * 90 * unit * dt;
        q.y += q.vy * dt;
        const high = q.y < h * 0.55;
        if (q.life >= q.max || q.y < h * 0.04 || (q.star && high && r() < dt * 1.4)) {
          if (q.star && high && sky.length < 520) sky.push({ x: q.x, y: q.y, born: t, ph: r() * TAU, s: 1 + r() * 1.2 });
          sparks.splice(i, 1);
          continue;
        }
        const k = q.life / q.max;
        ctx.globalAlpha = 0.9 * (1 - k * 0.6);
        ctx.drawImage(q.star ? hot : warm, q.x - 5, q.y - 5, 10, 10);
        ctx.fillStyle = 'rgba(255,230,180,0.9)';
        ctx.fillRect(q.x - q.s / 2, q.y - q.s / 2, q.s, q.s);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = '#050304';
      ctx.fillRect(0, base + 6 * unit, w, h);

      for (const fg of FIGURES) {
        const s = fg.s * unit * 1.1;
        const fx = cx + fg.dx * Math.min(w, 1100) * 1.1;
        const fy = base + 14 * unit;
        const facing = fx < cx ? 1 : -1;
        ctx.fillStyle = '#030203';
        ctx.beginPath();
        ctx.moveTo(fx - 42 * s, fy);
        ctx.quadraticCurveTo(fx - 40 * s, fy - 80 * s, fx - 8 * s * facing, fy - 108 * s);
        ctx.quadraticCurveTo(fx + 30 * s, fy - 96 * s, fx + 42 * s, fy);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(fx + 2 * s * facing, fy - 128 * s, 19 * s, 0, TAU);
        ctx.fill();
        ctx.strokeStyle = `rgba(255,150,70,${(0.32 + 0.12 * flick).toFixed(3)})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(fx + 2 * s * facing, fy - 128 * s, 19 * s, facing > 0 ? -1.2 : Math.PI - 0.2, facing > 0 ? 0.2 : Math.PI + 1.2);
        ctx.stroke();
      }
    },
  };
}
