import type { Scene } from './types';
import { TAU, clamp, noise3, rgba, rng, sprite } from './util';

interface Puff {
  x: number;
  y: number;
  life: number;
  max: number;
  s: number;
  seed: number;
}

function flamePath(ctx: CanvasRenderingContext2D, fw: number, fh: number, sway: number) {
  ctx.beginPath();
  ctx.moveTo(0, fh * 0.12);
  ctx.bezierCurveTo(fw * 1.1, fh * 0.05, fw * 0.8, -fh * 0.55, sway, -fh);
  ctx.bezierCurveTo(-fw * 0.8, -fh * 0.55, -fw * 1.1, fh * 0.05, 0, fh * 0.12);
  ctx.closePath();
}

/** A single candle in a dark room, with a manuscript being written in its light. */
export default function candle(): Scene {
  const r = rng(5);
  const smoke: Puff[] = [];
  const puff = sprite([205, 195, 185]);
  const motes = Array.from({ length: 80 }, () => ({ x: r(), y: r(), z: r(), ph: r() * TAU }));
  const lines = Array.from({ length: 10 }, () => ({ len: 0.55 + r() * 0.45, seed: r() * 100 }));

  return {
    draw(ctx, { t, dt, p, w, h }) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#060408');
      bg.addColorStop(1, '#130a05');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const unit = Math.min(w, h);
      const cx = w * 0.5;
      const wickY = h * 0.62;
      const fl = noise3(t * 3.1, 0.5, 0.2);
      const fl2 = noise3(t * 6.3, 3.2, 1.7);
      const flick = 0.85 + 0.3 * fl;

      const gR = unit * 0.95 * (0.95 + 0.08 * fl);
      const g = ctx.createRadialGradient(cx, wickY - unit * 0.05, 0, cx, wickY - unit * 0.05, gR);
      g.addColorStop(0, `rgba(255,170,80,${(0.34 * flick).toFixed(3)})`);
      g.addColorStop(0.35, `rgba(200,100,40,${(0.12 * flick).toFixed(3)})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // The manuscript, written line by line as the chapter progresses.
      const px0 = w * 0.6,
        px1 = Math.min(w * 0.92, px0 + unit * 0.55);
      const py0 = h * 0.2,
        lh = unit * 0.042;
      ctx.fillStyle = 'rgba(230,190,130,0.045)';
      ctx.fillRect(px0 - lh, py0 - lh * 1.4, px1 - px0 + lh * 2, lh * (lines.length + 1.6));
      const written = p * lines.length * 1.15;
      ctx.lineWidth = 1.1;
      ctx.lineCap = 'round';
      lines.forEach((ln, i) => {
        const frac = clamp(written - i);
        if (frac <= 0) return;
        const end = px0 + (px1 - px0) * ln.len * frac;
        const base = py0 + i * lh;
        ctx.strokeStyle = 'rgba(215,165,95,0.42)';
        ctx.beginPath();
        let pen = false;
        for (let x = px0; x < end; x += 2) {
          const gap = Math.sin(x * 0.06 + ln.seed) > 0.82;
          if (gap) {
            pen = false;
            continue;
          }
          const y = base + Math.sin(x * 0.45 + ln.seed) * 1.8 + Math.sin(x * 0.13 + ln.seed * 2) * 2.2;
          if (pen) ctx.lineTo(x, y);
          else ctx.moveTo(x, y);
          pen = true;
        }
        ctx.stroke();
        if (frac < 1) {
          const qg = ctx.createRadialGradient(end, base, 0, end, base, 14);
          qg.addColorStop(0, 'rgba(255,210,140,0.5)');
          qg.addColorStop(1, 'rgba(255,210,140,0)');
          ctx.fillStyle = qg;
          ctx.fillRect(end - 14, base - 14, 28, 28);
        }
      });

      // Table
      const bw = Math.max(18, unit * 0.045);
      const bh = unit * 0.24;
      const tableY = wickY + bh;
      const tg = ctx.createLinearGradient(0, tableY, 0, h);
      tg.addColorStop(0, 'rgba(60,32,14,0.95)');
      tg.addColorStop(1, 'rgba(10,6,4,1)');
      ctx.fillStyle = tg;
      ctx.fillRect(0, tableY, w, h - tableY);
      const pool = ctx.createRadialGradient(cx, tableY, 0, cx, tableY, unit * 0.45);
      pool.addColorStop(0, `rgba(255,170,90,${(0.22 * flick).toFixed(3)})`);
      pool.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pool;
      ctx.fillRect(0, tableY, w, h - tableY);

      // Candle body
      const body = ctx.createLinearGradient(cx - bw / 2, 0, cx + bw / 2, 0);
      body.addColorStop(0, '#5a4636');
      body.addColorStop(0.45, '#efe0c4');
      body.addColorStop(1, '#6b5442');
      ctx.fillStyle = body;
      ctx.fillRect(cx - bw / 2, wickY + 4, bw, bh - 4);
      ctx.fillStyle = 'rgba(255,225,170,0.9)';
      ctx.beginPath();
      ctx.ellipse(cx, wickY + 4, bw / 2, bw * 0.14, 0, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = '#2a1a10';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(cx, wickY + 4);
      ctx.lineTo(cx + 1, wickY - 3);
      ctx.stroke();

      // Flame
      const fh = unit * 0.085 * flick;
      const fw = unit * 0.02;
      const sway = (fl2 - 0.5) * fw * 1.4;
      ctx.save();
      ctx.translate(cx, wickY - 2);
      ctx.globalCompositeOperation = 'lighter';
      flamePath(ctx, fw * 1.7, fh * 1.25, sway * 1.3);
      ctx.fillStyle = 'rgba(255,120,40,0.22)';
      ctx.fill();
      flamePath(ctx, fw, fh, sway);
      const fg = ctx.createRadialGradient(0, -fh * 0.28, 0, 0, -fh * 0.28, fh * 0.95);
      fg.addColorStop(0, 'rgba(255,255,240,1)');
      fg.addColorStop(0.3, 'rgba(255,220,140,0.95)');
      fg.addColorStop(0.7, 'rgba(255,140,50,0.7)');
      fg.addColorStop(1, 'rgba(255,90,20,0)');
      ctx.fillStyle = fg;
      ctx.fill();
      ctx.fillStyle = 'rgba(90,130,255,0.35)';
      ctx.beginPath();
      ctx.ellipse(0, fh * 0.02, fw * 0.45, fh * 0.12, 0, 0, TAU);
      ctx.fill();
      ctx.restore();

      // Smoke
      if (r() < dt * 14) {
        smoke.push({ x: cx + sway, y: wickY - fh * 1.1, life: 0, max: 3 + r() * 3, s: 2 + r() * 3, seed: r() * 50 });
      }
      for (let i = smoke.length - 1; i >= 0; i--) {
        const q = smoke[i];
        q.life += dt;
        if (q.life > q.max) {
          smoke.splice(i, 1);
          continue;
        }
        q.y -= dt * unit * 0.06;
        q.x += (noise3(q.seed, q.life * 0.8, t * 0.2) - 0.5) * dt * unit * 0.12;
        const k = q.life / q.max;
        const s = q.s * (3 + q.life * 5);
        ctx.globalAlpha = 0.07 * Math.sin(Math.PI * Math.min(1, k * 1.4)) * (1 - k);
        ctx.drawImage(puff, q.x - s / 2, q.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;

      // Dust motes turning in the light
      for (const m of motes) {
        const mx = (m.x + Math.sin(t * 0.05 + m.ph) * 0.03) * w;
        const my = ((m.y - t * 0.004 * (0.3 + m.z) + 10) % 1) * h;
        const d = Math.hypot(mx - cx, my - wickY) / (unit * 0.8);
        const a = clamp(1 - d) * 0.5 * (0.5 + 0.5 * Math.sin(t * 2 + m.ph));
        if (a <= 0.01) continue;
        ctx.fillStyle = rgba([255, 210, 150], a);
        ctx.fillRect(mx, my, 1 + m.z, 1 + m.z);
      }
    },
  };
}
