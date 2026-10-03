import './style.css';
import storyMd from '../STORY.md?raw';
import { parseStory, type Block, type Chapter } from './story';
import { scenes } from './scenes';
import type { Scene, SceneFactory } from './scenes/types';
import { clamp, lerp, yearT } from './scenes/util';

const story = parseStory(storyMd);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
const PAST = '#e3b86b';
const FUTURE = '#8ed4ff';

interface Layer {
  section: HTMLElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  factory: SceneFactory;
  scene: Scene | null;
  active: boolean;
  w: number;
  h: number;
  opacity: string;
}

interface Marker {
  section: HTMLElement;
  year: number;
  until?: number;
  era: string;
  nav?: HTMLButtonElement;
}

function renderBlock(b: Block, i: number): string {
  const side = i % 2 === 0 ? 'left' : 'right';
  if (b.kind === 'stats') {
    const rows = b.stats
      .map((s) => `<div class="stat">${s.figure ? `<dt>${s.figure}</dt>` : ''}<dd>${s.caption}</dd></div>`)
      .join('');
    return `<div class="beat beat--center"><dl class="card card--stats${b.stats.length > 1 ? ' card--stats-many' : ''}">${rows}</dl></div>`;
  }
  if (b.kind === 'sign') return `<div class="beat beat--${side}"><div class="card card--sign"><p>${b.html}</p></div></div>`;
  return `<div class="beat beat--${side}"><div class="card"><p>${b.html}</p></div></div>`;
}

function accentFor(ch: Chapter) {
  return ch.accent ?? (ch.year > 2026 ? FUTURE : PAST);
}

function renderChapter(ch: Chapter, index: number): string {
  const accent = accentFor(ch);
  if (ch.viz === 'credits') {
    return `<section class="credits" id="${ch.id}" data-marker style="--accent:${accent}">
      <div class="credits-inner">
        <p class="kicker">Afterword</p>
        <h2>${ch.title}</h2>
        ${ch.blocks.map((b) => (b.kind === 'stats' ? '' : `<p>${b.html}</p>`)).join('')}
        <button class="restart" type="button" data-restart>Return to 1026 ↑</button>
      </div>
    </section>`;
  }
  return `<section class="chapter" id="${ch.id}" data-layer="${ch.viz}" data-marker data-index="${index}" style="--accent:${accent}">
    <div class="beat beat--title">
      <header class="chapter-head">
        <span class="chapter-num">${ch.numeral}</span>
        <h2 class="chapter-title">${ch.title}</h2>
        <p class="chapter-era">${ch.era} <span>·</span> ${ch.year}</p>
      </header>
    </div>
    ${ch.blocks.map(renderBlock).join('')}
  </section>`;
}

function build() {
  const app = document.getElementById('app')!;
  const numbered = story.chapters.filter((c) => c.viz !== 'credits');
  const [first, ...rest] = story.title.split(' ');

  app.innerHTML = `
    <div class="stage" id="stage" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="letterbox letterbox--top" aria-hidden="true"></div>
    <div class="letterbox letterbox--bottom" aria-hidden="true"></div>
    <div class="curtain" aria-hidden="true"></div>

    <header class="hud">
      <a class="brand" href="#top">${story.title}</a>
      <div class="clock" aria-live="off">
        <span class="clock-status">Recorded history</span>
        <span class="clock-year">1026</span>
        <span class="clock-era">Prologue</span>
      </div>
    </header>

    <nav class="nav" aria-label="Chapters">
      ${numbered
        .map(
          (c, i) =>
            `<button type="button" data-goto="${c.id}" style="--accent:${accentFor(c)}" aria-label="Chapter ${c.numeral}: ${c.title}"><span class="nav-label">${c.numeral} · ${c.title}</span><i></i></button>${
              i === 3 ? '<span class="nav-now" title="2026">2026</span>' : ''
            }`,
        )
        .join('')}
    </nav>
    <div class="progress" aria-hidden="true"><span></span></div>

    <main>
      <section class="hero" id="top" data-layer="title" data-marker style="--accent:${PAST}">
        <div class="beat beat--hero">
          <div class="hero-inner">
            <p class="kicker">An interactive story in ${numbered.length} chapters</p>
            <h1 class="hero-title"><span class="hero-word">${first}</span><span class="hero-year">${rest.join(' ')}</span></h1>
            <p class="hero-sub">${story.subtitle}</p>
          </div>
          <div class="scroll-cue"><span>Scroll to begin</span><i></i></div>
        </div>
        ${story.intro.map((b, i) => renderBlock(b, i + 1)).join('')}
      </section>
      ${story.chapters.map(renderChapter).join('')}
    </main>
  `;
}

build();

const stage = document.getElementById('stage')!;
const layers: Layer[] = [];
document.querySelectorAll<HTMLElement>('[data-layer]').forEach((section, i) => {
  const factory = scenes[section.dataset.layer!];
  if (!factory) return;
  const canvas = document.createElement('canvas');
  canvas.style.zIndex = String(i);
  stage.appendChild(canvas);
  layers.push({ section, canvas, ctx: canvas.getContext('2d')!, factory, scene: null, active: false, w: 0, h: 0, opacity: '' });
});

const chapterByEl = new Map<HTMLElement, Chapter>();
story.chapters.forEach((c) => {
  const el = document.getElementById(c.id);
  if (el) chapterByEl.set(el, c);
});
const markers: Marker[] = [...document.querySelectorAll<HTMLElement>('[data-marker]')].map((section) => {
  const ch = chapterByEl.get(section);
  return {
    section,
    year: ch?.year ?? 1026,
    until: ch?.until,
    era: ch?.era ?? 'Overture',
    nav: ch ? document.querySelector<HTMLButtonElement>(`[data-goto="${ch.id}"]`) ?? undefined : undefined,
  };
});

function sizeLayer(L: Layer) {
  const w = window.innerWidth,
    h = window.innerHeight;
  L.canvas.width = Math.round(w * DPR);
  L.canvas.height = Math.round(h * DPR);
  L.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  L.w = w;
  L.h = h;
  L.scene?.resize?.(w, h);
}

function activate(L: Layer) {
  if (L.active) return;
  L.active = true;
  L.scene ??= L.factory();
  sizeLayer(L);
}

function deactivate(L: Layer) {
  if (!L.active) return;
  L.active = false;
  L.canvas.width = L.canvas.height = 1;
  L.canvas.style.opacity = L.opacity = '0';
}

window.addEventListener('resize', () => layers.forEach((L) => L.active && sizeLayer(L)));

const clockYear = document.querySelector<HTMLElement>('.clock-year')!;
const clockEra = document.querySelector<HTMLElement>('.clock-era')!;
const clockStatus = document.querySelector<HTMLElement>('.clock-status')!;
const progressBar = document.querySelector<HTMLElement>('.progress span')!;
const root = document.documentElement;
let shownYear = '';
let shownEra = '';
let activeNav: HTMLButtonElement | undefined;

function progressOf(r: DOMRect, vh: number) {
  return clamp(-r.top / Math.max(1, r.height - vh));
}

function updateHud(vh: number) {
  let idx = 0;
  markers.forEach((m, i) => {
    if (m.section.getBoundingClientRect().top <= vh * 0.5) idx = i;
  });
  const m = markers[idx];
  const target = m.until ?? (markers[idx + 1] ?? m).year;
  const p = progressOf(m.section.getBoundingClientRect(), vh);
  const year = Math.round(lerp(m.year, target, yearT(p)));
  const y = String(year);
  if (y !== shownYear) {
    shownYear = y;
    clockYear.textContent = y;
    const future = year > 2026;
    clockStatus.textContent = future ? 'Imagined' : year === 2026 ? 'The present' : 'Recorded history';
    root.style.setProperty('--clock', future ? FUTURE : PAST);
  }
  if (m.era !== shownEra) {
    shownEra = m.era;
    clockEra.textContent = m.era;
  }
  if (m.nav !== activeNav) {
    activeNav?.classList.remove('is-active');
    m.nav?.classList.add('is-active');
    activeNav = m.nav;
  }

  const max = document.documentElement.scrollHeight - vh;
  progressBar.style.transform = `scaleX(${clamp(window.scrollY / Math.max(1, max))})`;
  root.style.setProperty('--lb', String(1 - clamp(window.scrollY / (vh * 0.9))));
}

let last = performance.now();
let clock = 0;
function frame(now: number) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  clock += dt * (reduceMotion ? 0.3 : 1);
  const vh = window.innerHeight;

  let covered = false;
  for (let i = layers.length - 1; i >= 0; i--) {
    const L = layers[i];
    const r = L.section.getBoundingClientRect();
    const near = r.top < vh * 1.5 && r.bottom > -vh * 0.5;
    if (!near) {
      deactivate(L);
      continue;
    }
    activate(L);
    const weight = Math.min(clamp((vh - r.top) / (vh * 0.5)), clamp(r.bottom / (vh * 0.5)));
    const visible = weight > 0.001 && !covered;
    if (visible && L.scene) {
      L.scene.draw(L.ctx, { t: clock, dt: reduceMotion ? dt * 0.3 : dt, p: progressOf(r, vh), w: L.w, h: L.h });
    }
    const op = visible ? weight.toFixed(3) : '0';
    if (op !== L.opacity) L.canvas.style.opacity = L.opacity = op;
    if (weight >= 0.999) covered = true;
  }

  updateHud(vh);
  requestAnimationFrame(frame);
}
requestAnimationFrame((now) => {
  last = now;
  frame(now);
  document.body.classList.add('is-ready');
});

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) e.target.classList.toggle('in', e.isIntersecting);
  },
  { rootMargin: '-18% 0px -18% 0px' },
);
document.querySelectorAll('.beat, .credits-inner').forEach((el) => io.observe(el));

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const goto = target.closest<HTMLElement>('[data-goto]');
  if (goto) document.getElementById(goto.dataset.goto!)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  if (target.closest('[data-restart]')) window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

document.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement || e.metaKey || e.ctrlKey) return;
  if (e.key !== 'n' && e.key !== 'p') return;
  const vh = window.innerHeight;
  const tops = markers.map((m) => m.section.getBoundingClientRect().top);
  const target = e.key === 'n' ? tops.findIndex((t) => t > vh * 0.1) : tops.map((t) => t < -vh * 0.1).lastIndexOf(true);
  if (target >= 0) markers[target].section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
});
