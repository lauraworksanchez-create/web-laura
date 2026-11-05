// Genera las páginas HTML estáticas (es + en) dentro de public/
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import * as C from '../src/content.mjs';

const { site, routes, ui, redirects } = C;
const PREVIEW = !!process.env.PREVIEW;
const OUT = path.resolve(PREVIEW ? 'preview/site' : 'public');
let DEPTH = 0; // profundidad de la página actual (solo preview)
const R = p => PREVIEW ? '../'.repeat(DEPTH) + p.replace(/^\//, '') : p;
const { map, dims } = JSON.parse(await fs.readFile('src/images.json', 'utf8'));
const LANGS = ['es', 'en'];
// medidas de las imágenes locales (las que no vienen de Squarespace)
{
  const locals = new Set();
  (function walk(o) { if (!o || typeof o !== 'object') return; if (typeof o.src === 'string' && o.src.startsWith('/img/')) locals.add(o.src); Object.values(o).forEach(walk); })(C);
  for (const s of locals) { const m = await sharp(path.join('public', s)).metadata(); dims[s] = [m.width, m.height]; map[s] = s; }
}
const ANALYTICS = !PREVIEW;
// En la vista previa todo va dentro de cada página (CSS, JS y fuentes), porque el visor solo permite recursos en línea
let INLINE_CSS = '', INLINE_JS = '';
if (PREVIEW) {
  INLINE_CSS = await fs.readFile('src/styles.css', 'utf8');
  for (const f of await fs.readdir('public/fonts')) {
    const b64 = (await fs.readFile(path.join('public/fonts', f))).toString('base64');
    INLINE_CSS = INLINE_CSS.replaceAll(`url(/fonts/${f})`, `url(data:font/woff2;base64,${b64})`);
  }
  INLINE_JS = (await fs.readFile('src/main.js', 'utf8')).replaceAll('</script', '<\\/script');
}

const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = s => String(s).replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
const url = (lang, key) => (lang === 'en' ? '/en' : '') + '/' + routes[key] || '/';
const absHref = (lang, key) => (lang === 'en' ? '/en/' : '/') + routes[key];
const href = (lang, key) => PREVIEW ? R(absHref(lang, key).replace(/\/?$/, '/') + 'index.html').replace('//', '/') : absHref(lang, key);

function pic(image, lang, { cls = '', eager = false, sizes = '100vw', zoom = false } = {}) {
  let p = map[image.src]; const P = x => R(x);
  if (!p) throw new Error('Imagen sin descargar: ' + image.src);
  const alt = attr(image.alt[lang] ?? '');
  if (p.endsWith('.gif')) {
    const base = p.replace(/\.gif$/, '');
    return `<video class="${cls}" src="${P(base)}.mp4" poster="${P(base)}-poster.webp" autoplay muted loop playsinline aria-label="${alt}"></video>`;
  }
  const [w, h] = dims[p] || [];
  return `<img class="${cls}" src="${P(p)}"${w ? ` width="${w}" height="${h}"` : ''} alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" sizes="${sizes}"${zoom ? ' data-zoom' : ''}>`;
}

const marquee = (text, cls = '', speed = 40) => {
  const rep = Array(6).fill(`<span>${text}</span>`).join('');
  return `<div class="marquee ${cls}" style="--speed:${speed}s"><div class="marquee__track" aria-hidden="true">${rep}${rep}</div><span class="sr-only">${text}</span></div>`;
};

const badge = `<svg class="badge" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="${(() => {
  let d = ''; const n = 32;
  for (let i = 0; i < n * 2; i++) { const r = i % 2 ? 46 : 50, a = (Math.PI * i) / n; d += (i ? 'L' : 'M') + (50 + r * Math.cos(a)).toFixed(2) + ' ' + (50 + r * Math.sin(a)).toFixed(2); }
  return d + 'Z';
})()}"/></svg>`;

function layout(lang, key, seo, body, { gray = false } = {}) {
  const other = lang === 'es' ? 'en' : 'es';
  const canon = site.domain + absHref(lang, key);
  const nav = site.nav.map(n => `<a href="${href(lang, n.key)}"${key === n.key || (n.key === 'portfolio' && C.projects[key]) ? ' aria-current="page"' : ''}>${n.label[lang]}</a>`).join('');
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(seo.title[lang])}</title>
<meta name="description" content="${attr(seo.desc[lang])}">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="es" href="${site.domain + absHref('es', key)}">
<link rel="alternate" hreflang="en" href="${site.domain + absHref('en', key)}">
<link rel="alternate" hreflang="x-default" href="${site.domain + absHref('es', key)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${attr(seo.title[lang])}">
<meta property="og:description" content="${attr(seo.desc[lang])}">
<meta property="og:url" content="${canon}">
<meta property="og:image" content="${site.domain}/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_GB'}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="${R(map[site.favicon])}">
${PREVIEW ? '' : `<link rel="preload" href="/fonts/familjen-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/arimo-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>`}
${PREVIEW ? `<style>${INLINE_CSS}</style>` : `<link rel="stylesheet" href="/assets/styles.css">`}
</head>
<body${gray ? ' class="page-gray"' : ''}>
<a class="skip" href="#main">${ui.skip[lang]}</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${href(lang, 'home')}">${site.name}</a>
    <button class="menu-btn" aria-label="${ui.menu[lang]}" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
    <nav class="nav" id="nav">
      ${nav}
      <span class="lang"><a href="${href('es', key)}" hreflang="es" lang="es" ${lang === 'es' ? 'aria-current="true"' : ''}>ES</a><a href="${href('en', key)}" hreflang="en" lang="en" ${lang === 'en' ? 'aria-current="true"' : ''}>EN</a></span>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="inner">
    <div>
      <h2>${site.footer.title[lang]}</h2>
      <p>${site.footer.city[lang]}</p>
      <p><a href="mailto:${site.email}?subject=Let%E2%80%99s%20talk">${site.email}</a></p>
    </div>
    <p class="tag">${site.footer.tagline[lang]}</p>
    <div class="col-r">
      <h3>${site.footer.follow[lang]}</h3>
      <a href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    </div>
    <p class="copy">© ${new Date().getFullYear()} Laura Sánchez Pardo<span class="legal">${site.legalLinks.map(l => `<a href="${href(lang, l.key)}">${l.label[lang]}</a>`).join('')}</span></p>
  </div>
</footer>
${PREVIEW ? `<script>${INLINE_JS}</script>` : `<script src="/assets/main.js" defer></script>`}${ANALYTICS ? '\n<script defer src="/_vercel/insights/script.js"></script>' : ''}
</body>
</html>
`;
}

/* ---------- páginas ---------- */
function homePage(lang) {
  const h = C.home;
  const L = v => v[lang];
  return `
<h1 class="sr-only">Laura Sánchez · Service Designer &amp; Strategist</h1>
${marquee(L(h.marquee), 'marquee--big', 45)}
<section class="intro">
  <div class="fold reveal">${badge}${pic(h.intro.photo, lang, { cls: 'photo', eager: true, sizes: '(max-width:900px) 90vw, 440px' })}${pic(h.intro.mark, lang, { cls: 'mark' })}</div>
  <div class="copy reveal">
    <h2 style="font-size:clamp(28px,2.7vw,40px);margin-bottom:.5em">${L(h.intro.title)}</h2>
    ${L(h.intro.body).map(p => `<p>${p}</p>`).join('')}
    <a class="btn" href="${href(lang, 'portfolio')}">${L(h.intro.cta)}</a>
  </div>
</section>
<section class="dark">
  <div class="concept">
    <div class="reveal">
      <h2 class="split">${L(h.concept.title)}</h2>
      <p>${L(h.concept.body)}</p>
      <ul>${h.concept.items.map(i => `<li>${L(i)}</li>`).join('')}</ul>
    </div>
    <div class="media rv-img">${pic(h.concept.image, lang, { sizes: '(max-width:900px) 100vw, 55vw' })}</div>
  </div>
  <div style="height:clamp(28px,4vw,56px)"></div>
</section>
<section class="works rounded-top">
  <h2 class="split">${L(h.works.title)}</h2>
  <p class="reveal">${L(h.works.body)}</p>
  <div class="mosaic">${h.works.images.map(i => `<div class="rv-img">${pic(i, lang, { sizes: '(max-width:900px) 50vw, 33vw' })}</div>`).join('')}</div>
  <a class="btn" href="${href(lang, 'portfolio')}">${L(h.works.cta)}</a>
</section>
<section class="purpose">
  <div class="inner">
    <div class="txt"><h4 class="reveal">${L(h.purpose.label)}</h4><p class="split">${L(h.purpose.text)}</p></div>
    <div class="i1 rv-img">${pic(h.purpose.images[0], lang, { sizes: '25vw' })}</div>
    <div class="i2 rv-img">${pic(h.purpose.images[1], lang, { sizes: '(max-width:900px) 50vw, 33vw' })}</div>
    <div class="i3 rv-img">${pic(h.purpose.images[2], lang, { sizes: '(max-width:900px) 50vw, 25vw' })}</div>
  </div>
</section>
<section class="services">
  <div class="media rv-img">${pic(h.services.image, lang, { sizes: '(max-width:900px) 100vw, 45vw' })}</div>
  <div class="reveal">
    <h2>${L(h.services.title)}</h2>
    <div class="acc">${h.services.items.map(s => `<details><summary>${L(s.title)}</summary><ul>${L(s.list).map(li => `<li>${li}</li>`).join('')}${s.note ? `<li class="note">${L(s.note)}</li>` : ''}</ul></details>`).join('')}</div>
    <a class="btn btn--solid" href="${href(lang, 'contact')}">${L(h.services.cta)}</a>
  </div>
</section>`;
}

function portfolioPage(lang) {
  const p = C.portfolio;
  return `
<section class="pf-head"><h1 class="blob-title split">${p.title[lang]}</h1></section>
<section class="pf-list">
${p.featured.map(f => `<a class="pf-item reveal" href="${href(lang, f.page)}">
  <div class="meta"><p class="tags">${f.tags[lang]}</p><div><h2>${f.name[lang]}</h2><span class="link">${ui.viewProject[lang]}</span></div></div>
  <div class="media rv-img">${pic(f.image, lang, { sizes: '(max-width:900px) 100vw, 65vw' })}</div>
</a>`).join('\n')}
</section>
<section class="others">
  <h2>${p.othersTitle[lang]}</h2>
  <div class="carousel">
    <button class="carousel__btn carousel__btn--prev" aria-label="${ui.prev[lang]}">←</button>
    <div class="carousel__track" tabindex="0">
      ${p.others.map(([name, im], i) => { const d = C.othersDesc[name.es]; return `<figure class="card" tabindex="0">
        <div class="card__media">${pic(im, lang, { sizes: '(max-width:560px) 78vw, 31vw' })}${d ? `<div class="card__over" aria-hidden="true"><span class="card__num">${String(i + 1).padStart(2, '0')}</span><p>${d[lang]}</p></div>` : ''}</div>
        <figcaption><span class="card__name">${name[lang]}</span>${d ? `<span class="card__desc">${d[lang]}</span>` : ''}</figcaption></figure>`; }).join('\n      ')}
    </div>
    <button class="carousel__btn carousel__btn--next" aria-label="${ui.next[lang]}">→</button>
  </div>
</section>`;
}

function workshopsPage(lang) {
  const w = C.workshops, L = v => v[lang];
  return `
<section class="ws-hero">
  <div class="txt"><h1 class="reveal">${L(w.title)}</h1><p class="reveal">${L(w.body)}</p></div>
  <div>${pic(w.image, lang, { eager: true, sizes: '(max-width:900px) 100vw, 52vw' })}</div>
</section>
<div class="ws-tools">${marquee(w.tools.join('</span><span>'), 'marquee--big', 50)}</div>
<section class="ws-intro wrap">
  <div class="ws-intro__txt split-p">${L(w.intro)}</div>
</section>
<section class="ws-formats wrap">
  <h2 class="ws-h split">${L(w.formatsTitle)}</h2>
  <div class="ws-formats__grid">${w.formats.map(f => `<article class="fmt reveal"><p class="fmt__time">${L(f.time)}</p><h3>${L(f.name)}</h3><p>${L(f.body)}</p><p class="fmt__tools">${L(f.tools)}</p></article>`).join('')}</div>
</section>
<section class="ws-process wrap">
  <h2 class="ws-h split">${L(w.processTitle)}</h2>
  <ol class="steps">${w.process.map((st, i) => `<li class="reveal"><span class="steps__n">${String(i + 1).padStart(2, '0')}</span><h3>${L(st.name)}</h3><p>${L(st.body)}</p></li>`).join('')}</ol>
</section>
<section class="ws-quote dark">
  <div>${pic(w.quote.image, lang, { sizes: '(max-width:900px) 100vw, 50vw' })}</div>
  <div class="txt reveal">
    <p class="meta">${L(w.quote.meta)}</p>
    <h2>${L(w.quote.lead)}</h2>
    ${L(w.quote.body).map(p => `<p>${p}</p>`).join('')}
  </div>
</section>
<section class="ws-case wrap">
  <div class="ws-case__main">
    <p class="ws-case__label reveal">${L(w.caseLabel)}</p>
    <h2 class="split">${L(w.caseTitle)}</h2>
    <div class="reveal">${L(w.caseBody)}</div>
  </div>
  <aside class="ws-case__out reveal">
    <h3>${L(w.outcomesTitle)}</h3>
    <ul>${L(w.outcomes).map(o => `<li>${o}</li>`).join('')}</ul>
    <a class="btn btn--solid" href="${href(lang, 'contact')}">${L(w.cta)}</a>
  </aside>
</section>`;
}

function aboutPage(lang) {
  const a = C.about, L = v => v[lang];
  return `
<section class="about">
  <div class="photo reveal">${pic(a.photo, lang, { eager: true, sizes: '(max-width:900px) 90vw, 400px' })}</div>
  <div class="reveal">
    <div class="head"><h1>${L(a.title)}</h1><p class="sub">${L(a.subtitle)}</p></div>
    <div class="body">${L(a.body).map(p => `<p>${p}</p>`).join('')}</div>
    <div class="foot"><a class="btn" href="${href(lang, 'contact')}">${L(a.cta)}</a>${pic(a.signature, lang, { cls: 'sig', sizes: '150px' })}</div>
  </div>
</section>`;
}

function contactPage(lang) {
  const c = C.contact, f = c.form, L = v => v[lang];
  return `
<section class="contact">
  <div>
    <h1 class="reveal">${L(c.title)}</h1>
    <div class="info">
      <a href="mailto:${site.email}">${site.email}</a><br>
      ${L(c.city)}
    </div>
  </div>
  <form class="form" action="https://formsubmit.co/${site.email}" method="POST"
        data-ok="${attr(L(f.ok))}" data-error="${attr(L(f.error))}" data-sending="${attr(L(f.sending))}" data-email="${site.email}">
    <input type="hidden" name="_subject" value="${lang === 'es' ? 'Nuevo mensaje desde la web' : 'New message from the website'}">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="${site.domain}${absHref(lang, 'contact')}?enviado=1">
    <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
    <fieldset>
      <legend>${L(f.name)}</legend>
      <div><label for="f-first">${L(f.first)} <small>${L(f.required)}</small></label><input id="f-first" name="nombre" autocomplete="given-name" required></div>
      <div><label for="f-last">${L(f.last)} <small>${L(f.required)}</small></label><input id="f-last" name="apellido" autocomplete="family-name" required></div>
    </fieldset>
    <div class="full"><label for="f-email">${L(f.email)} <small>${L(f.required)}</small></label><input id="f-email" type="email" name="email" autocomplete="email" required></div>
    <div class="full"><label for="f-msg">${L(f.message)}</label><textarea id="f-msg" name="mensaje"></textarea></div>
    <div class="full check"><input type="checkbox" id="f-consent" name="consentimiento" value="sí" required><label for="f-consent">${L(f.consent).replace('{privacy}', href(lang, 'privacy'))}</label></div>
    <div class="full"><button class="btn" type="submit">${L(f.send)}</button></div>
    <p class="full fine">${L(f.info).replace('{email}', site.email)}</p>
    <p class="status full" role="status" aria-live="polite"></p>
  </form>
</section>`;
}

const order = ['host', 'lladro', 'mouchi', 'disowned', 'natura', 'eonia'];
function projectPage(lang, key) {
  const p = C.projects[key], L = v => v[lang];
  const nextKey = order[(order.indexOf(key) + 1) % order.length];
  const nextTitle = C.projects[nextKey].title;
  const blocks = p.blocks.map(b => {
    switch (b.type) {
      case 'text': return `<div class="blk blk-text reveal">${L(b.html)}</div>`;
      case 'lead': return `<p class="blk blk-lead reveal">${L(b.html)}</p>`;
      case 'big': return `<h2 class="blk blk-big split">${L(b.html)}</h2>`;
      case 'stats': return `<dl class="blk blk-stats">${b.items.map(([n, l]) => `<div class="reveal"><dt>${L(n)}</dt><dd>${L(l)}</dd></div>`).join('')}</dl>`;
      case 'facts': return `<dl class="blk blk-facts reveal">${b.items.map(([k, v]) => `<div><dt>${L(k)}</dt><dd>${L(v)}</dd></div>`).join('')}</dl>`;
      case 'label': return `<p class="blk-label reveal">${L(b.html)}</p>`;
      case 'img': return `<figure class="blk blk-img rv-img${b.narrow ? ' blk-narrow' : ''}"${b.narrow ? '' : ' style="margin-inline:0"'}>${pic(b.image, lang, { sizes: '(max-width:1200px) 100vw, 1150px', zoom: true })}</figure>`;
      case 'pair': return `<div class="blk blk-pair">${b.images.map(i => `<div class="rv-img">${pic(i, lang, { sizes: '(max-width:560px) 100vw, 50vw', zoom: true })}</div>`).join('')}</div>`;
      case 'grid': return `<div class="blk blk-grid">${b.images.map(i => `<div class="rv-img">${pic(i, lang, { sizes: '(max-width:560px) 100vw, 33vw', zoom: true })}</div>`).join('')}</div>`;
      case 'marquee': return `<div class="blk blk-marquee">${marquee(b.text, '', 30)}</div>`;
      case 'split': return `<div class="blk blk-split"><div class="reveal"><h2>${L(b.title)}</h2>${L(b.html)}</div><div class="rv-img">${pic(b.image, lang, { sizes: '(max-width:900px) 100vw, 50vw', zoom: true })}</div></div>`;
    }
  }).join('\n');
  return `
<article class="project">
  <header class="project-head"><h1 class="split">${p.title}</h1><p class="tags reveal">${L(p.tags)}</p></header>
  ${blocks}
  <nav class="project-foot">
    <a class="btn btn--solid btn--big" href="${href(lang, 'portfolio')}">${L(ui.back)}</a>
    <a class="next" href="${href(lang, nextKey)}"><small>${L(ui.nextProject)}</small><span>${nextTitle} →</span></a>
  </nav>
</article>`;
}

function legalPage(lang, key) {
  const g = C.legal[key], L = v => v[lang];
  return `
<article class="legal-page wrap">
  <h1 class="split">${L(g.title)}</h1>
  <p class="legal-page__date">${L(g.updated)}</p>
  ${L(g.body).replaceAll('{email}', site.email).replace('{nif}', site.nif ? (lang === 'es' ? `, con NIF ${site.nif}` : `, tax ID ${site.nif}`) : '')}
</article>`;
}

/* ---------- escribir ---------- */
const depthOf = (lang, key) => (lang === 'en' ? 1 : 0) + (routes[key] ? routes[key].split('/').length : 0);
async function write(lang, key, render) {
  DEPTH = depthOf(lang, key); const html = render();
  const dir = path.join(OUT, lang === 'en' ? 'en' : '', routes[key]);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'index.html'), html);
}
for (const lang of LANGS) {
  await write(lang, 'home', () => layout(lang, 'home', C.home.seo, homePage(lang)));
  await write(lang, 'portfolio', () => layout(lang, 'portfolio', C.portfolio.seo, portfolioPage(lang), { gray: true }));
  await write(lang, 'workshops', () => layout(lang, 'workshops', C.workshops.seo, workshopsPage(lang)));
  await write(lang, 'about', () => layout(lang, 'about', C.about.seo, aboutPage(lang), { gray: true }));
  await write(lang, 'contact', () => layout(lang, 'contact', C.contact.seo, contactPage(lang)));
  for (const k of ['privacy', 'legal']) await write(lang, k, () => layout(lang, k, C.legal[k].seo, legalPage(lang, k)));
  for (const k of Object.keys(C.projects)) await write(lang, k, () => layout(lang, k, C.projects[k].seo, projectPage(lang, k)));
}
await fs.mkdir(path.join(OUT, 'assets'), { recursive: true });
const css = await fs.readFile('src/styles.css', 'utf8');
await fs.writeFile(path.join(OUT, 'assets/styles.css'), PREVIEW ? css.replaceAll('url(/fonts/', 'url(../fonts/') : css);
if (PREVIEW) for (const d of ['img', 'fonts']) await fs.cp(path.join('public', d), path.join(OUT, d), { recursive: true });
await fs.copyFile('src/main.js', path.join(OUT, 'assets/main.js'));

if (PREVIEW) { console.log('preview OK'); process.exit(0); }
// 404
await fs.writeFile(path.join(OUT, '404.html'), layout('es', 'home', { title: { es: 'Página no encontrada | Laura Sánchez' }, desc: { es: '' } },
  `<section class="contact" style="display:block;text-align:center;min-height:50vh"><h1>404</h1><p>Esta página no existe. / This page doesn’t exist.</p><p><a class="btn" href="/">Volver al inicio</a></p></section>`));

// sitemap + robots
const urls = LANGS.flatMap(l => Object.keys(routes).map(k => site.domain + absHref(l, k)));
await fs.writeFile(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`);
await fs.writeFile(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`);

// vercel.json con redirecciones desde las URLs antiguas
const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  outputDirectory: 'public', installCommand: '', buildCommand: '', framework: null,
  cleanUrls: true, trailingSlash: false,
  redirects: Object.entries(redirects).map(([from, k]) => ({ source: from, destination: absHref('es', k), permanent: true })),
  headers: [{ source: '/(img|fonts)/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }],
};
await fs.writeFile('vercel.json', JSON.stringify(vercel, null, 2) + '\n');
console.log('OK', urls.length, 'páginas');
