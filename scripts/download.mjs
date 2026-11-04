// Descarga las imágenes de Squarespace y las optimiza (webp, máx. 2000px)
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import * as content from '../src/content.mjs';

const OUT = path.resolve('public/img');
await fs.mkdir(OUT, { recursive: true });

const urls = new Set();
(function walk(o) {
  if (!o || typeof o !== 'object') return;
  if (typeof o.src === 'string' && o.src.includes('squarespace-cdn')) urls.add(o.src);
  for (const v of Object.values(o)) walk(v);
})(content);
urls.add(content.site.favicon);

export const localName = (u) => {
  const [, id, file] = u.match(/v1\/[^/]+\/([^/]+)\/(.+)$/);
  const base = decodeURIComponent(file.replace(/\+/g, ' ')).replace(/\.[^.]+$/, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  const ext = /\.gif$/i.test(file) ? 'gif' : /\.ico$/i.test(file) ? 'ico' : 'webp';
  return `${base}-${id.slice(0, 6)}.${ext}`;
};

const map = {};
let i = 0;
for (const u of urls) {
  const name = localName(u);
  const dest = path.join(OUT, name);
  map[u] = '/img/' + name;
  try { await fs.access(dest); continue; } catch {}
  const res = await fetch(u + (name.endsWith('.webp') ? '?format=2500w' : ''));
  if (!res.ok) { console.error('FALLO', res.status, u); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  if (name.endsWith('.webp')) {
    const im = sharp(buf).rotate();
    const meta = await im.metadata();
    await im.resize({ width: Math.min(meta.width, 2000), withoutEnlargement: true }).webp({ quality: 82 }).toFile(dest);
  } else await fs.writeFile(dest, buf);
  console.log(++i, name);
}
const dims = {};
for (const [u, p] of Object.entries(map)) {
  if (p.endsWith('.ico')) continue;
  try { const m = await sharp(path.join('public', p), { animated: false }).metadata(); dims[p] = [m.width, m.pageHeight || m.height]; } catch {}
}
await fs.writeFile('src/images.json', JSON.stringify({ map, dims }, null, 1));
console.log('total', urls.size);
