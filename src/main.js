document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Menú móvil
const btn = document.querySelector('.menu-btn');
btn?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  btn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

// Titulares palabra a palabra (mantiene negritas, cursivas y el óvalo)
function splitWords(el) {
  let i = 0;
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const parts = n.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(' '); return; }
          const w = document.createElement('span'); w.className = 'w';
          const inner = document.createElement('span'); inner.textContent = p; inner.style.setProperty('--i', i++);
          w.append(inner); frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        if (n.classList.contains('oval')) { // el óvalo se anima entero
          const w = document.createElement('span'); w.className = 'w';
          const inner = document.createElement('span'); inner.style.setProperty('--i', i++);
          n.replaceWith(w); inner.append(n); w.append(inner);
        } else walk(n);
      }
    });
  };
  el.setAttribute('aria-label', el.textContent.trim());
  walk(el);
}
document.querySelectorAll('.split').forEach(splitWords);

// Aparición al hacer scroll, con escalonado entre elementos que entran a la vez
const targets = document.querySelectorAll('.reveal, .rv-img, .split, .split-p');
if (reduce || !('IntersectionObserver' in window)) targets.forEach(el => el.classList.add('in'));
else {
  const io = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting);
    visible.forEach((e, k) => {
      e.target.style.setProperty('--d', (k * 0.09) + 's');
      if (e.target.classList.contains('rv-img')) e.target.style.transitionDelay = (k * 0.09) + 's';
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  targets.forEach(el => io.observe(el));
  // Respaldo por si el observador no se dispara (algunos visores embebidos)
  const pending = () => [...targets].filter(el => !el.classList.contains('in'));
  const check = () => pending().forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.95 && r.bottom > 0) el.classList.add('in'); });
  addEventListener('scroll', check, { passive: true });
  addEventListener('resize', check);
  setTimeout(check, 600);
}

// Parallax suave en las imágenes grandes
if (!reduce) {
  const items = [...document.querySelectorAll('.fold .photo, .concept .media img, .ws-hero img, .ws-quote img')];
  items.forEach(i => i.classList.add('parallax'));
  let ticking = false;
  const update = () => {
    const vh = innerHeight;
    items.forEach(img => {
      const r = img.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      img.style.translate = `0 ${(p * -24).toFixed(1)}px`;
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

// Carrusel
document.querySelectorAll('.carousel').forEach(c => {
  const track = c.querySelector('.carousel__track');
  const prev = c.querySelector('.carousel__btn--prev'), next = c.querySelector('.carousel__btn--next');
  const step = () => track.querySelector('figure').offsetWidth + 10;
  const update = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  update();
});

// Zoom de imágenes
const zoomables = document.querySelectorAll('img[data-zoom]');
if (zoomables.length) {
  const box = document.createElement('div');
  box.className = 'lightbox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lightbox__close" aria-label="' + (document.documentElement.lang === 'en' ? 'Close' : 'Cerrar') + '">×</button><img alt=""><p class="lightbox__cap"></p>';
  document.body.append(box);
  const big = box.querySelector('img'), cap = box.querySelector('.lightbox__cap'), close = box.querySelector('button');
  let last = null;
  const hide = () => { box.classList.remove('open'); document.body.classList.remove('no-scroll'); last?.focus(); };
  zoomables.forEach(img => {
    img.tabIndex = 0;
    const open = () => {
      last = img; big.src = img.currentSrc || img.src; big.alt = img.alt; cap.textContent = img.alt;
      box.classList.add('open'); document.body.classList.add('no-scroll'); close.focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  box.addEventListener('click', hide);
  addEventListener('keydown', e => { if (e.key === 'Escape' && box.classList.contains('open')) hide(); });
}

// Formulario de contacto (FormSubmit)
const form = document.querySelector('form.form');
form?.addEventListener('submit', async e => {
  e.preventDefault();
  const status = form.querySelector('.status'), send = form.querySelector('button[type=submit]');
  const label = send.textContent;
  send.disabled = true; send.textContent = form.dataset.sending;
  status.className = 'status full'; status.textContent = '';
  try {
    const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === 'false' || data.success === false) throw new Error();
    form.reset();
    status.classList.add('ok'); status.textContent = form.dataset.ok;
  } catch {
    status.classList.add('err');
    status.innerHTML = `${form.dataset.error} <a href="mailto:${form.dataset.email}">${form.dataset.email}</a>`;
  } finally { send.disabled = false; send.textContent = label; }
});
