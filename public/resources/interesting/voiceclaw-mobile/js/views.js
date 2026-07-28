/* ═══════════════════════════════════════════════════════════════════════
   VoiceClaw — renderers. Pure string builders; app.js owns all behaviour.
   ═══════════════════════════════════════════════════════════════════════ */
window.VCView = (function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&(?![a-zA-Z#][a-zA-Z0-9]*;)/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const ic = (id, cls) => `<svg class="ic${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#${id}"></use></svg>`;

  const slug = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 44);

  /* ── individual item renderers ─────────────────────────────────── */

  function segment(item, gid) {
    const name = item.id || slug(item.label);
    const label = item.label ? `<span class="row__label">${item.label}</span>` : '';
    const opts = item.options.map((o, n) => `
      <button class="seg__btn" type="button" role="radio"
              aria-checked="${o === item.value}" tabindex="${o === item.value ? 0 : -1}"
              data-seg="${name}" data-value="${esc(o)}"
              data-od-id="seg-${name}-${slug(o)}">${esc(o)}</button>`).join('');
    return `<div class="row row--stack" data-od-id="row-${gid}-${name}">
      ${label}
      <div class="seg" role="radiogroup" aria-label="${esc(item.aria || item.label || name)}">${opts}</div>
      ${item.help ? `<p class="row__sub">${item.help}</p>` : ''}
    </div>`;
  }

  function picker(item, gid) {
    const name = item.id;
    return `<div class="row row--stack" data-od-id="row-${gid}-${name}">
      ${item.label ? `<span class="row__label">${item.label}</span>` : ''}
      <button class="picker" type="button" data-picker="${name}"
              aria-haspopup="menu" aria-expanded="false"
              aria-label="${esc(item.aria || item.label || name)}" data-od-id="picker-${name}">
        <span data-picker-value="${name}">${esc(item.value)}</span>
        ${ic('i-updown', 'ic--sm')}
      </button>
      ${item.help ? `<p class="row__sub">${item.help}</p>` : ''}
    </div>`;
  }

  function toggle(item, gid) {
    return `<div class="row" data-od-id="row-${gid}-${item.id}">
      <span class="row__body">
        <span class="row__label">${item.label}</span>
        ${item.sub ? `<span class="row__sub">${item.sub}</span>` : ''}
      </span>
      <button class="switch" type="button" role="switch"
              aria-checked="${!!item.value}" aria-label="${esc(item.label)}"
              data-switch="${item.id}" data-od-id="switch-${item.id}"></button>
    </div>`;
  }

  function slider(item, gid) {
    return `<div class="slider-row" data-od-id="row-${gid}-${item.id}">
      <div class="slider-row__top">
        <label class="slider-row__label" for="rng-${item.id}">${item.label}</label>
        <output class="slider-row__val" id="out-${item.id}" for="rng-${item.id}">${item.value}%</output>
      </div>
      <input type="range" id="rng-${item.id}" data-slider="${item.id}"
             min="0" max="100" step="1" value="${item.value}"
             style="--pct:${item.value}%"
             aria-describedby="out-${item.id}">
      ${item.help ? `<p class="field__help">${item.help}</p>` : ''}
    </div>`;
  }

  function note(item) {
    const body = `<div class="note__body">
        ${item.title ? `<p class="note__title">${item.title}</p>` : ''}
        ${item.paras.map((p) => `<p class="note__text">${p}</p>`).join('')}
      </div>`;
    if (item.plain) return `<div class="note note--plain">${body}</div>`;
    return `<div class="note"${item.tone ? ` data-tone="${item.tone}"` : ''}>${item.icon ? ic(item.icon, 'ic--sm') : ''}${body}</div>`;
  }

  function field(item, gid) {
    return `<div class="field" data-od-id="field-${item.id}">
      <label class="field__label" for="in-${item.id}">${item.label}</label>
      <input class="field__input" id="in-${item.id}" data-field="${item.id}"
             type="${item.secure ? 'password' : 'text'}"
             ${item.secure ? 'autocomplete="off" spellcheck="false"' : ''}
             placeholder="${esc(item.placeholder || '')}"
             value="${esc(item.value || '')}">
      ${item.help ? `<p class="field__help">${item.secure ? `${ic('i-lock', 'lockic')}` : ''}${item.help}</p>` : ''}
    </div>`;
  }

  function row(item, gid) {
    const cls = ['row', item.danger ? 'row--danger' : ''].filter(Boolean).join(' ');
    const inner = `
      ${item.leadingIcon ? ic(item.leadingIcon, 'ic--sm') : ''}
      <span class="row__body">
        <span class="row__label">${item.label}</span>
        ${item.sub ? `<span class="row__sub">${item.sub}</span>` : ''}
      </span>
      ${item.value ? `<span class="row__value">${esc(item.value)}</span>` : ''}
      ${item.trailingIcon ? `<span class="row__chev">${ic(item.trailingIcon, 'ic--sm')}</span>` : ''}
      ${item.chev ? `<span class="row__chev">${ic('i-chevron', 'ic--sm')}</span>` : ''}`;
    const oid = `row-${gid}-${slug(item.label)}`;
    return item.action
      ? `<button class="${cls}" type="button" data-action="${item.action}" data-od-id="${oid}">${inner}</button>`
      : `<div class="${cls}" data-od-id="${oid}">${inner}</div>`;
  }

  function steps(item, gid) {
    return item.items.map((s, i) => `
      <div class="step" data-od-id="step-${gid}-${i + 1}">
        <span class="step__n">${i + 1}</span>
        <div class="step__body">
          <p class="step__title">${s.title}</p>
          <p class="step__text">${s.text}</p>
        </div>
      </div>`).join('');
  }

  function disclosure(item, gid) {
    return `<div class="disclosure">
      <button class="disclosure__btn" type="button" aria-expanded="false"
              aria-controls="disc-${item.id}" data-disclosure="${item.id}"
              data-od-id="disclosure-${item.id}">
        ${item.icon ? ic(item.icon, 'ic--sm') : ''}
        <span>${item.label}</span>
        <span class="disclosure__chev">${ic('i-chevron-down', 'ic--sm')}</span>
      </button>
      <div class="disclosure__panel" id="disc-${item.id}" hidden>
        ${item.children.map((c) => renderItem(c, gid)).join('')}
      </div>
    </div>`;
  }

  function tiles(item, gid) {
    return `<div class="tiles" data-od-id="tiles-${item.id || gid}">
      ${item.items.map((t) => `
        <div class="tile">
          <span class="tile__head">${ic(t.icon, 'ic--sm')}<span class="tile__name">${t.name}</span></span>
          <span class="tile__state" data-state="${t.tone}">${t.state}</span>
        </div>`).join('')}
    </div>`;
  }

  function btnrow(item, gid) {
    return `<div class="btnrow" data-od-id="btnrow-${gid}">
      ${item.buttons.map((b) => b.iconOnly
        ? `<button class="iconbtn" type="button" data-action="${b.action}" data-od-id="btn-${b.action}">${ic(b.icon)}<span class="sr-only">${esc(b.srLabel || b.action)}</span></button>`
        : `<button class="btn ${b.variant || ''}" type="button" data-action="${b.action}" data-od-id="btn-${b.action}">${b.icon ? ic(b.icon, 'ic--sm') : ''}${b.label}</button>`
      ).join('')}
    </div>`;
  }

  function failrow(item, gid) {
    return `<div class="failrow" data-od-id="failrow-${item.id}">
      <span class="failrow__text" data-failtext="${item.id}">${item.text}</span>
      <button class="iconbtn" type="button" data-action="${item.action}" data-od-id="btn-${item.action}">
        ${ic('i-refresh')}<span class="sr-only">Retry Apple Watch sync</span>
      </button>
    </div>`;
  }

  function links(item, gid) {
    return `<div class="btnrow btnrow--links" data-od-id="links-${gid}">
      ${item.items.map((l) => `<button class="btn btn--ghost btn--pill" type="button" data-action="${l.action}" data-od-id="btn-${gid}-${l.action}">${l.label}</button>`).join('')}
    </div>`;
  }

  function readouts(item, gid) {
    return item.items.map((r) => `
      <div class="readout" data-od-id="readout-${gid}-${slug(r.k)}">
        <span class="readout__k">${r.k}</span>
        <span class="readout__v${r.empty ? ' is-empty' : ''}"${r.id ? ` id="${r.id}"` : ''}>${esc(r.v)}</span>
      </div>`).join('');
  }

  function checks(item, gid) {
    return item.items.map((c) => `
      <div class="row"${c.id ? ` data-check="${c.id}"` : ''} data-od-id="check-${gid}-${slug(c.label)}">
        <span class="mark" data-tone="${c.tone}">${c.tone === 'ok' ? ic('i-check') : c.tone === 'warn' ? ic('i-warn') : ''}</span>
        <span class="row__body">
          <span class="row__label" style="font-size:var(--t-sm);font-weight:600">${c.label}</span>
          ${c.sub ? `<span class="row__sub">${c.sub}</span>` : ''}
        </span>
        ${c.badge ? `<span class="badge" data-tone="${c.tone === 'warn' ? 'warn' : 'ok'}">${c.badge}</span>` : ''}
      </div>`).join('');
  }

  function testRows(item, gid) {
    return item.items.map((t) => `
      <div class="test" data-test="${t.id}" data-od-id="test-${t.id}">
        <span class="mark" data-tone="idle" data-test-mark="${t.id}"></span>
        <span class="test__body">
          <span class="test__name">${t.name}</span>
          <span class="test__desc">${t.desc}</span>
        </span>
        <button class="test__run" type="button" data-run-test="${t.id}"
                aria-label="Run ${esc(t.name)} test" data-od-id="run-${t.id}">${ic('i-play', 'ic--sm')}</button>
      </div>
      <p class="test__result" data-test-result="${t.id}" role="status" aria-live="polite" hidden></p>`).join('');
  }

  function pip() {
    return `<div class="pip-preview" data-od-id="pip-preview">
      <div class="pip-preview__stage">
        <div class="pip-preview__app"></div>
        <div class="pip-preview__mini">${ic('i-waveform')}</div>
      </div>
      <p class="pip-preview__cap">VoiceClaw parks itself in Picture-in-Picture while another app is in front.</p>
    </div>`;
  }

  /* ── dispatch ──────────────────────────────────────────────────── */
  function renderItem(item, gid) {
    switch (item.t) {
      case 'subhead':    return `<p class="subhead">${item.label}</p>`;
      case 'seg':        return segment(item, gid);
      case 'picker':     return picker(item, gid);
      case 'switch':     return toggle(item, gid);
      case 'slider':     return slider(item, gid);
      case 'note':       return note(item);
      case 'field':      return field(item, gid);
      case 'row':        return row(item, gid);
      case 'steps':      return steps(item, gid);
      case 'disclosure': return disclosure(item, gid);
      case 'tiles':      return tiles(item, gid);
      case 'btnrow':     return btnrow(item, gid);
      case 'failrow':    return failrow(item, gid);
      case 'links':      return links(item, gid);
      case 'readouts':   return readouts(item, gid);
      case 'checks':     return checks(item, gid);
      case 'tests':      return testRows(item, gid);
      case 'pip':        return pip();
      default:           return '';
    }
  }

  function renderGroups(groups) {
    return groups.map((g) => `
      <section class="group${g.tone === 'danger' ? ' group--danger' : ''}" data-od-id="group-${g.id}">
        ${g.title ? `<div class="group__head">${g.icon ? ic(g.icon, 'ic--sm') : ''}<h2 class="group__title">${g.title}</h2></div>` : ''}
        <div class="group__body">${g.items.map((i) => renderItem(i, g.id)).join('')}</div>
      </section>`).join('');
  }

  function renderSegmentNav(segments, current, kind) {
    return segments.map((s) => `
      <button class="seg__btn" type="button" role="tab"
              id="${kind}-tab-${s.id}"
              aria-selected="${s.id === current}" tabindex="${s.id === current ? 0 : -1}"
              aria-controls="${kind}-panels" data-navseg="${kind}" data-value="${s.id}"
              data-od-id="${kind}-seg-${s.id}">${s.label}</button>`).join('');
  }

  /* ── setup guide page ──────────────────────────────────────────── */
  function guidePage(page, index, total) {
    const toneVar = page.tone === 'ok' ? 'var(--ok)' : page.tone === 'warn' ? 'var(--caution)' : 'var(--link)';
    return `
      <div class="fs__mark" style="background:${toneVar}">${ic(page.icon, 'ic--lg')}</div>
      <p class="fs__eyebrow" style="color:${toneVar}">${page.eyebrow}</p>
      <h2 class="fs__h">${page.title}</h2>
      <p class="fs__lede">${page.lede}</p>
      <ul class="fs__list">
        ${page.items.map((t) => typeof t === 'object' && t.lead
          ? `<li><p class="fs__lead">${t.lead}</p></li>`
          : `<li class="fs__li">
              <span class="mark" data-tone="${page.tone === 'warn' ? 'warn' : 'ok'}">${ic('i-check')}</span>
              <p>${t}</p>
            </li>`).join('')}
      </ul>`;
  }

  return { renderGroups, renderSegmentNav, renderItem, guidePage, ic, esc, slug };
})();
