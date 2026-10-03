// Inlined synchronously at the end of <body> by Footer.astro. Loading it as a module, or
// deferring it to DOMContentLoaded, makes Chrome intermittently skip cross-document view
// transitions because the DOM is still being mutated after the incoming page first renders.
(() => {
	/** @typedef {{ t: string, u: string, k: string, d?: string, m?: string, g?: string }} SearchItem */

	const root = document.documentElement;
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
	const compact = window.matchMedia('(max-width: 760px)');

	root.classList.add('xp');

	/* ---------- Header: scrolled state, hide-on-scroll (mobile), reading progress ---------- */

	const header = document.querySelector('[data-site-header]');
	const progress = document.querySelector('[data-read-progress]');
	const hasOwnStage = !!document.querySelector('.world-scroll');
	let lastY = window.scrollY;
	if (header) {
		let headerHeight = header.offsetHeight;
		root.style.setProperty('--header-real', `${headerHeight}px`);
		if ('ResizeObserver' in window) {
			new ResizeObserver(() => {
				if (header.offsetHeight === headerHeight) return;
				headerHeight = header.offsetHeight;
				root.style.setProperty('--header-real', `${headerHeight}px`);
			}).observe(header);
		}
	}
	let scrollTicking = false;

	const onScroll = () => {
		const y = window.scrollY;
		const max = root.scrollHeight - window.innerHeight;
		root.toggleAttribute('data-scrolled', y > 12);

		if (compact.matches && !root.classList.contains('is-locked')) {
			const delta = y - lastY;
			if (y < 80 || delta < -6) root.removeAttribute('data-chrome-hidden');
			else if (delta > 8) root.setAttribute('data-chrome-hidden', '');
		} else {
			root.removeAttribute('data-chrome-hidden');
		}
		lastY = y;

		if (progress) {
			const show = !hasOwnStage && max > window.innerHeight * 1.4;
			progress.parentElement?.toggleAttribute('hidden', !show);
			if (show) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, y / max)).toFixed(4)})`;
		}
		scrollTicking = false;
	};
	window.addEventListener('scroll', () => {
		if (scrollTicking) return;
		scrollTicking = true;
		requestAnimationFrame(onScroll);
	}, { passive: true });
	onScroll();

	/* ---------- Desktop nav: sliding indicator that follows hover/focus ---------- */

	const navLinks = document.querySelector('[data-nav-links]');
	const indicator = navLinks?.querySelector('.nav-indicator');
	if (navLinks && indicator) {
		const current = navLinks.querySelector('.nav-link.is-current');
		const moveTo = (el, instant = false) => {
			if (!el) { indicator.style.opacity = '0'; return; }
			const box = navLinks.getBoundingClientRect();
			const r = el.getBoundingClientRect();
			if (instant) indicator.style.transition = 'none';
			indicator.style.opacity = '1';
			indicator.style.width = `${r.width}px`;
			indicator.style.transform = `translateX(${r.left - box.left + navLinks.scrollLeft}px)`;
			if (instant) { void indicator.offsetWidth; indicator.style.transition = ''; }
		};
		moveTo(current, true);
		navLinks.addEventListener('pointerover', (e) => {
			const link = e.target.closest('.nav-link');
			if (link) moveTo(link);
		});
		navLinks.addEventListener('focusin', (e) => moveTo(e.target.closest('.nav-link')));
		navLinks.addEventListener('pointerleave', () => moveTo(current));
		navLinks.addEventListener('focusout', () => moveTo(current));
		window.addEventListener('resize', () => moveTo(current, true), { passive: true });
		document.fonts?.ready.then(() => moveTo(current, true));
	}

	/* ---------- Scroll reveal ---------- */

	const REVEAL = [
		'main h1', 'main h2:not(.chapter-title)', '.prose > p', '.prose > ul', '.prose > ol', '.prose > pre', '.prose > blockquote', '.prose > table', '.prose > img', '.prose > p > img',
		'.home-card', '.resource-card', '.stat-card', '.mascot-card', '.docs-card', '.docs-panel', '.case-card', '.card', '.panel',
		'.featured-card', '.analysis-card', '.version-card', '.agent-card', '.trust-card', '.vertical-card', '.timeline-item',
		'.post-item', '.highlight-box', '.submit-card', '.subscribe-form', '.agent-subscribe-card', '.edition-card', '.under-card',
		'.trek-item', '.stat-row', '.article-hero-motion', '.transcript-row', '.footer-cta', '.post-card', '.post-hero', '.tl-card', '.ds-card', '.ds-panel', '.ds-cta-band', '.ds-stat',
	].join(',');
	const REVEAL_EXCLUDE = '.world-scroll, .scroll-world-engine, .cmdk, .app-sheet, .site-header, [data-no-reveal]';

	if (!reduceMotion.matches && 'IntersectionObserver' in window) {
		const io = new IntersectionObserver((entries) => {
			const entering = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			entering.forEach((entry, index) => {
				const el = entry.target;
				el.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 55}ms`);
				el.dataset.reveal = 'in';
				io.unobserve(el);
				el.addEventListener('animationend', () => { el.removeAttribute('data-reveal'); el.style.removeProperty('--reveal-delay'); }, { once: true });
			});
		}, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

		const fold = window.innerHeight * 0.92;
		const candidates = [...document.querySelectorAll(REVEAL)].slice(0, 900);
		for (const el of candidates) {
			if (el.closest(REVEAL_EXCLUDE) || el.parentElement?.closest('[data-reveal]')) continue;
			if (el.getBoundingClientRect().top < fold) continue;
			el.dataset.reveal = 'pending';
			io.observe(el);
		}
	}

	/* ---------- Card spotlight + ambient light (desktop only) ---------- */

	const SPOT = '.post-card, .tl-card, a.ds-card, .ds-card--feature, .home-card, .resource-card, .stat-card, .mascot-card, .docs-card, .case-card, .card, .featured-card, .analysis-card, .version-card, .agent-card, .trust-card, .vertical-card, .submit-card, .edition-card, .timeline-item, .subscribe-form, .agent-subscribe-card, .panel';

	if (finePointer.matches) {
		let spotTarget = null;
		document.addEventListener('pointermove', (e) => {
			const card = e.target.closest(SPOT);
			if (card !== spotTarget) {
				spotTarget?.removeAttribute('data-spot');
				spotTarget = card && !card.closest(REVEAL_EXCLUDE) ? card : null;
				if (spotTarget) {
					if (!spotTarget.querySelector(':scope > .xp-spot')) {
						const spot = document.createElement('span');
						spot.className = 'xp-spot';
						spot.setAttribute('aria-hidden', 'true');
						spotTarget.append(spot);
						if (getComputedStyle(spotTarget).position === 'static') spotTarget.style.position = 'relative';
					}
					spotTarget.setAttribute('data-spot', '');
				}
			}
			if (spotTarget) {
				const r = spotTarget.getBoundingClientRect();
				spotTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
				spotTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
			}
		}, { passive: true });

		const ambient = document.querySelector('[data-ambient]');
		if (ambient && !reduceMotion.matches) {
			let tx = window.innerWidth * 0.7, ty = window.innerHeight * 0.2, x = tx, y = ty, running = false;
			const step = () => {
				x += (tx - x) * 0.08;
				y += (ty - y) * 0.08;
				ambient.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
				if (Math.abs(tx - x) + Math.abs(ty - y) > 0.5) requestAnimationFrame(step);
				else running = false;
			};
			window.addEventListener('pointermove', (e) => {
				tx = e.clientX; ty = e.clientY;
				ambient.classList.add('is-live');
				if (!running) { running = true; requestAnimationFrame(step); }
			}, { passive: true });
			step();
		}
	}

	/* ---------- Dialog helpers (sheet + palette) ---------- */

	const openDialog = (dialog) => {
		if (dialog.open) return;
		dialog.showModal();
		root.classList.add('is-locked');
		requestAnimationFrame(() => requestAnimationFrame(() => dialog.classList.add('is-open')));
	};
	const closeDialog = (dialog) => {
		if (!dialog.open || dialog.dataset.closing) return;
		dialog.dataset.closing = 'true';
		dialog.classList.remove('is-open');
		const done = () => {
			delete dialog.dataset.closing;
			dialog.close();
			if (!document.querySelector('dialog[open]')) root.classList.remove('is-locked');
		};
		if (reduceMotion.matches) done();
		else setTimeout(done, 280);
	};
	const wireDialog = (dialog) => {
		dialog.addEventListener('cancel', (e) => { e.preventDefault(); closeDialog(dialog); });
		dialog.addEventListener('click', (e) => { if (e.target === dialog) closeDialog(dialog); });
	};

	/* ---------- More sheet ---------- */

	const sheet = document.querySelector('[data-sheet]');
	const sheetPanel = sheet?.querySelector('[data-sheet-panel]');
	if (sheet && sheetPanel) {
		wireDialog(sheet);
		document.querySelectorAll('[data-sheet-open]').forEach((btn) => btn.addEventListener('click', () => openDialog(sheet)));

		let startY = 0, dy = 0, startT = 0, dragging = false;
		const grabber = sheet.querySelector('[data-sheet-grabber]');
		const begin = (e) => {
			dragging = true; startY = e.clientY; startT = performance.now(); dy = 0;
			sheetPanel.style.transition = 'none';
			e.currentTarget.setPointerCapture(e.pointerId);
		};
		const move = (e) => {
			if (!dragging) return;
			dy = Math.max(0, e.clientY - startY);
			sheetPanel.style.transform = `translateY(${dy}px)`;
		};
		const end = () => {
			if (!dragging) return;
			dragging = false;
			sheetPanel.style.transition = '';
			sheetPanel.style.transform = '';
			const velocity = dy / Math.max(1, performance.now() - startT);
			if (dy > 110 || velocity > 0.6) closeDialog(sheet);
		};
		grabber?.addEventListener('pointerdown', begin);
		grabber?.addEventListener('pointermove', move);
		grabber?.addEventListener('pointerup', end);
		grabber?.addEventListener('pointercancel', end);
	}

	/* ---------- Search palette ---------- */

	const cmdk = document.querySelector('[data-cmdk]');
	const input = cmdk?.querySelector('[data-cmdk-input]');
	const list = cmdk?.querySelector('[data-cmdk-results]');
	const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
	document.querySelectorAll('[data-kbd-hint]').forEach((el) => { el.textContent = isMac ? '⌘K' : 'Ctrl K'; });

	if (cmdk && input && list) {
		wireDialog(cmdk);
		/** @type {SearchItem[] | null} */
		let index = null;
		let loading = null;
		/** @type {SearchItem[]} */
		let results = [];
		let selected = 0;

		const load = () => {
			if (index) return Promise.resolve(index);
			loading ??= fetch('/search-index.json').then((r) => r.json()).then((data) => (index = data.items)).catch(() => (index = []));
			return loading;
		};
		const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
		const highlight = (text, tokens) => {
			let html = esc(text);
			for (const token of tokens) {
				if (token.length < 2) continue;
				html = html.replace(new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'), '<mark>$1</mark>');
			}
			return html;
		};
		const kindRank = { Page: 0, Crew: 1, Skill: 2, Plugin: 2, Workflow: 2, 'Ship Log': 3 };

		const search = (query, items) => {
			const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
			const scored = [];
			items.forEach((item, i) => {
				const title = item.t.toLowerCase();
				const rest = `${item.d ?? ''} ${item.g ?? ''} ${item.k}`.toLowerCase();
				let score = 0;
				for (const token of tokens) {
					const at = title.indexOf(token);
					if (at === 0) score += 40;
					else if (at > 0) score += title[at - 1] === ' ' ? 28 : 16;
					else if (rest.includes(token)) score += 6;
					else return;
				}
				if (title.includes(query.toLowerCase())) score += 30;
				scored.push({ item, score: score - (kindRank[item.k] ?? 3), i });
			});
			return scored.sort((a, b) => b.score - a.score || a.i - b.i).slice(0, 40).map((s) => s.item);
		};

		const render = (query) => {
			const items = index ?? [];
			const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
			let sections;
			if (!tokens.length) {
				sections = [
					{ label: 'Jump to', items: items.filter((i) => i.k === 'Page').slice(0, 7) },
					{ label: 'Latest from the Ship Log', items: items.filter((i) => i.k === 'Ship Log').slice(0, 5) },
				];
			} else {
				sections = [{ label: 'Results', items: search(query, items) }];
			}
			results = sections.flatMap((s) => s.items);
			selected = 0;
			if (!index) { list.innerHTML = '<li class="cmdk-empty">Loading the index…</li>'; return; }
			if (!results.length) { list.innerHTML = `<li class="cmdk-empty">Nothing matches “${esc(query)}”. Try a crew name, a tool, or a topic.</li>`; return; }
			let n = 0;
			list.innerHTML = sections.filter((s) => s.items.length).map((s) => `<li class="cmdk-group" role="presentation">${esc(s.label)}</li>${s.items.map((item) => {
				const i = n++;
				return `<li role="option" id="cmdk-opt-${i}" data-i="${i}" aria-selected="${i === 0}"><a href="${esc(item.u)}" tabindex="-1"><span class="cmdk-kind">${esc(item.k)}</span><span class="cmdk-text"><b>${highlight(item.t, tokens)}</b>${item.d ? `<small>${esc(item.d)}</small>` : ''}</span>${item.m ? `<time>${esc(item.m)}</time>` : ''}<span class="cmdk-go" aria-hidden="true">↵</span></a></li>`;
			}).join('')}`).join('');
			input.setAttribute('aria-activedescendant', 'cmdk-opt-0');
		};

		const select = (next) => {
			if (!results.length) return;
			selected = (next + results.length) % results.length;
			list.querySelectorAll('[role=option]').forEach((el) => el.setAttribute('aria-selected', String(Number(el.dataset.i) === selected)));
			const el = list.querySelector(`#cmdk-opt-${selected}`);
			el?.scrollIntoView({ block: 'nearest' });
			input.setAttribute('aria-activedescendant', `cmdk-opt-${selected}`);
		};

		const open = () => {
			if (sheet?.open) closeDialog(sheet);
			openDialog(cmdk);
			input.value = '';
			render('');
			load().then(() => render(input.value));
			input.focus({ preventScroll: true });
		};

		document.querySelectorAll('[data-search-open]').forEach((btn) => btn.addEventListener('click', open));
		cmdk.querySelector('[data-cmdk-close]')?.addEventListener('click', () => closeDialog(cmdk));
		input.addEventListener('input', () => render(input.value.trim()));
		input.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowDown') { e.preventDefault(); select(selected + 1); }
			else if (e.key === 'ArrowUp') { e.preventDefault(); select(selected - 1); }
			else if (e.key === 'Enter' && results[selected]) { e.preventDefault(); window.location.href = results[selected].u; }
		});
		list.addEventListener('pointermove', (e) => {
			const opt = e.target.closest('[role=option]');
			if (opt && Number(opt.dataset.i) !== selected) select(Number(opt.dataset.i));
		});
		document.addEventListener('keydown', (e) => {
			const typing = e.target?.closest?.('input, textarea, select, [contenteditable="true"]');
			if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); cmdk.open ? closeDialog(cmdk) : open(); }
			else if (e.key === '/' && !typing && !cmdk.open) { e.preventDefault(); open(); }
		});
		document.querySelectorAll('[data-search-open]').forEach((btn) => btn.addEventListener('pointerenter', () => load(), { once: true }));
	}

	/* ---------- Shared cover morph (outgoing side; incoming side lives in BaseHead) ---------- */

	let lastClicked = null;
	document.addEventListener('click', (e) => { lastClicked = e.target.closest?.('a[href]') || null; }, true);
	window.addEventListener('pageswap', (event) => {
		const activation = event.activation;
		if (!event.viewTransition || !activation || !activation.entry) return;
		const toPath = new URL(activation.entry.url).pathname.replace(/\/?$/, '/');
		const back = activation.navigationType === 'traverse' && activation.from && activation.entry.index < activation.from.index;
		const fromClick = lastClicked && new URL(lastClicked.href).pathname.replace(/\/?$/, '/') === toPath ? lastClicked.querySelector('[data-morph]') : null;
		const card = fromClick || document.querySelector(`[data-morph="${toPath}"]`);
		const hero = document.querySelector('[data-morph-hero]') || [...document.querySelectorAll('.prose img')].find((img) => img.getBoundingClientRect().top + window.scrollY < window.innerHeight * 1.6);
		const target = card && !back ? card : hero && /^\/($|blog\/|about\/|crew\/)/.test(toPath) ? hero : null;
		if (target) target.style.viewTransitionName = 'hero-media';
	});

	/* ---------- Post table of contents: highlight the section being read ---------- */

	const tocLinks = [...document.querySelectorAll('[data-toc] a')];
	if (tocLinks.length && 'IntersectionObserver' in window) {
		const sections = tocLinks.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1)))).filter(Boolean);
		const setCurrent = (id) => tocLinks.forEach((link) => link.classList.toggle('is-current', decodeURIComponent(link.hash.slice(1)) === id));
		const spy = new IntersectionObserver((entries) => {
			const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
			if (visibleEntry) setCurrent(visibleEntry.target.id);
		}, { rootMargin: '-15% 0px -70% 0px' });
		sections.forEach((section) => spy.observe(section));
	}

	/* ---------- Resource atlas: keep the active chip in view on small screens ---------- */

	const activeResource = document.querySelector('.resource-nav a.is-active');
	if (activeResource && compact.matches) {
		const nav = activeResource.parentElement;
		nav.scrollLeft = activeResource.offsetLeft - (nav.clientWidth - activeResource.offsetWidth) / 2;
	}
})();
