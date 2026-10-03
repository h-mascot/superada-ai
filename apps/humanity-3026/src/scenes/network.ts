import type { Scene } from './types';
import { TAU, glow, mixRGB, rgba, rng, type RGB } from './util';

interface Node {
  x: number;
  y: number;
  z: number;
  kind: number;
}

const BORN: RGB = [255, 206, 140];
const BUILT: RGB = [120, 200, 255];
const BOTH: RGB = [196, 160, 255];

/** A rotating constellation of minds: born, built, and both — the chorus grows with the chapter. */
export default function network(): Scene {
  const r = rng(8);
  const N = 190;
  const nodes: Node[] = Array.from({ length: N }, () => {
    const u = r() * 2 - 1,
      th = r() * TAU,
      rad = Math.cbrt(r());
    const s = Math.sqrt(1 - u * u);
    return { x: s * Math.cos(th) * rad, y: u * rad * 0.8, z: s * Math.sin(th) * rad, kind: r() };
  });
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  nodes.forEach((a, i) => {
    const near = nodes
      .map((b, j) => ({ j, d: (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2 }))
      .filter((q) => q.j !== i)
      .sort((m, n) => m.d - n.d)
      .slice(0, 3);
    for (const { j } of near) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([Math.min(i, j), Math.max(i, j)]);
      }
    }
  });
  const pulses: { e: number; s: number; dir: number }[] = [];
  const proj = new Float32Array(N * 3);

  return {
    draw(ctx, { t, dt, p, w, h }) {
      ctx.fillStyle = '#04050c';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2,
        cy = h / 2;
      const R = Math.min(w, h) * 0.4;
      const visible = Math.floor(40 + p * (N - 40));
      const ay = t * 0.07,
        ax = 0.35 + 0.1 * Math.sin(t * 0.05);
      const cyA = Math.cos(ay),
        syA = Math.sin(ay),
        cxA = Math.cos(ax),
        sxA = Math.sin(ax);

      nodes.forEach((n, i) => {
        const x1 = n.x * cyA + n.z * syA;
        const z1 = -n.x * syA + n.z * cyA;
        const y1 = n.y * cxA - z1 * sxA;
        const z2 = n.y * sxA + z1 * cxA;
        const s = 1 / (1.6 - z2 * 0.45);
        proj[i * 3] = cx + x1 * R * s;
        proj[i * 3 + 1] = cy + y1 * R * s;
        proj[i * 3 + 2] = (z2 + 1) / 2;
      });

      const colorOf = (n: Node): RGB => {
        const builtShare = 0.25 + p * 0.5;
        if (n.kind < builtShare) return BUILT;
        if (n.kind < builtShare + 0.2 * p) return BOTH;
        return BORN;
      };

      ctx.globalCompositeOperation = 'lighter';
      glow(ctx, cx, cy, R * 0.9, [120, 140, 255], 0.08 + 0.1 * p);

      ctx.lineWidth = 1;
      for (const [a, b] of edges) {
        if (a >= visible || b >= visible) continue;
        const d = (proj[a * 3 + 2] + proj[b * 3 + 2]) / 2;
        ctx.strokeStyle = rgba(mixRGB(colorOf(nodes[a]), colorOf(nodes[b]), 0.5), 0.05 + 0.2 * d);
        ctx.beginPath();
        ctx.moveTo(proj[a * 3], proj[a * 3 + 1]);
        ctx.lineTo(proj[b * 3], proj[b * 3 + 1]);
        ctx.stroke();
      }

      if (r() < dt * (3 + p * 40)) {
        const e = Math.floor(r() * edges.length);
        if (edges[e][1] < visible) pulses.push({ e, s: 0, dir: r() < 0.5 ? 1 : -1 });
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const q = pulses[i];
        q.s += dt * 0.9;
        if (q.s >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const [a, b] = q.dir > 0 ? edges[q.e] : [edges[q.e][1], edges[q.e][0]];
        const x = proj[a * 3] + (proj[b * 3] - proj[a * 3]) * q.s;
        const y = proj[a * 3 + 1] + (proj[b * 3 + 1] - proj[a * 3 + 1]) * q.s;
        glow(ctx, x, y, 10, [220, 235, 255], 0.9 * Math.sin(q.s * Math.PI));
      }

      for (let i = 0; i < visible; i++) {
        const d = proj[i * 3 + 2];
        const c = colorOf(nodes[i]);
        const pulse = 0.7 + 0.3 * Math.sin(t * 2 + i);
        ctx.fillStyle = rgba(c, (0.35 + 0.65 * d) * pulse);
        ctx.beginPath();
        ctx.arc(proj[i * 3], proj[i * 3 + 1], 1 + 2.6 * d, 0, TAU);
        ctx.fill();
        if (i % 9 === 0) glow(ctx, proj[i * 3], proj[i * 3 + 1], 16 * d + 4, c, 0.25 * d);
      }
      ctx.globalCompositeOperation = 'source-over';
    },
  };
}
