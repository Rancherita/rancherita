// Genera el kit de marca (favicons, iconos PWA, imagen Open Graph y logos PNG)
// a partir del logotipo original vectorizado en src/assets/brand/
// (logo.svg, texto.svg y camper.svg).  Uso: npm run brand
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pub = (p) => resolve(root, 'public', p);
mkdirSync(pub('brand'), { recursive: true });

const C = { noche: '#0B120C', salvia: '#CFE3AE', arena: '#F4D59A' };
const brand = (f) => readFileSync(resolve(root, 'src/assets/brand', f), 'utf8');
const camper = brand('camper.svg');
const logo = brand('logo.svg');
const inner = camper.replace(/^[\s\S]*?<defs>[\s\S]*?<\/defs>/, '').replace(/<\/svg>\s*$/, '');
const grad = (id, x1, x2) => `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="0" x2="${x2}" y2="0"><stop offset="0" stop-color="${C.salvia}"/><stop offset="1" stop-color="${C.arena}"/></linearGradient>`;

// Marca circular: aro + autocaravana (favicon / avatar)
const mark = ({ bg = true, ring = 3 } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>${grad('g', 6, 112)}${grad('r', 8, 120)}</defs>
  ${bg ? `<rect width="128" height="128" rx="28" fill="${C.noche}"/>` : ''}
  <circle cx="64" cy="64" r="54" fill="none" stroke="url(#r)" stroke-width="${ring}"/>
  <g transform="translate(17 38) scale(0.8)">${inner}</g>
</svg>`;

writeFileSync(pub('favicon.svg'), mark({ ring: 4 }));
writeFileSync(pub('brand/rancherita-marca.svg'), mark({ bg: false }));
writeFileSync(pub('brand/rancherita-autocaravana.svg'), camper);
writeFileSync(pub('brand/rancherita-logo.svg'), logo);
writeFileSync(pub('brand/rancherita-texto.svg'), brand('texto.svg'));

const font = readFileSync(resolve(root, 'node_modules/@fontsource/michroma/files/michroma-latin-400-normal.woff2')).toString('base64');
const fontCss = `@font-face{font-family:Michroma;src:url(data:font/woff2;base64,${font}) format('woff2')}`;

// Logotipo original completo (aro + autocaravana + RANCHERITA), ancho w
const logoLockup = (w) => `<img src="data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}" width="${w}" style="display:block">`;

const pages = [
  ['favicon-32.png', 32, 32, `<img src="data:image/svg+xml;base64,${Buffer.from(mark({ ring: 5 })).toString('base64')}" width=32 height=32>`],
  ['apple-touch-icon.png', 180, 180, `<div style="width:180px;height:180px;background:${C.noche}">${mark({ bg: false, ring: 3 }).replace('<svg', '<svg width="180" height="180"')}</div>`],
  ['icon-192.png', 192, 192, mark({ ring: 3 }).replace('<svg', '<svg width="192" height="192"')],
  ['icon-512.png', 512, 512, `<div style="width:512px;height:512px;background:${C.noche}">${mark({ bg: false, ring: 2.5 }).replace('<svg', '<svg width="512" height="512"')}</div>`],
  ['brand/rancherita-logo.png', 1200, 1200, `<div style="width:1200px;height:1200px;background:${C.noche};display:grid;place-items:center">${logoLockup(1000)}</div>`],
  ['brand/rancherita-logo-transparente.png', 1200, 1200, `<div style="width:1200px;height:1200px;display:grid;place-items:center">${logoLockup(1000)}</div>`, true],
  ['og-image.png', 1200, 630, `<div style="width:1200px;height:630px;background:radial-gradient(ellipse at 70% 120%,#1d2a1c,${C.noche} 60%);display:flex;align-items:center;gap:70px;padding:0 90px;box-sizing:border-box;overflow:hidden">
     <div style="flex:none">${logoLockup(430)}</div>
     <div style="font-family:Michroma;color:#EDE8DA">
       <div style="font-size:20px;letter-spacing:.3em;color:${C.salvia};margin-bottom:28px">BLOG DE VIAJES 4×4</div>
       <div style="font-family:Outfit,sans-serif;font-size:62px;line-height:1.08;font-weight:500;letter-spacing:-.01em">Lejos del asfalto,<br>cerca de la gente.</div>
       <div style="font-size:16px;letter-spacing:.16em;color:#A9AE9C;white-space:nowrap;margin-top:34px">MARRUECOS · BALCANES · ALBANIA</div>
     </div></div>`],
];

const outline = readFileSync(resolve(root, 'node_modules/@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2')).toString('base64');
const browser = await chromium.launch(existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
for (const [file, w, h, html, transparent] of pages) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.setContent(`<style>${fontCss}@font-face{font-family:Outfit;src:url(data:font/woff2;base64,${outline}) format('woff2');font-weight:100 900}html,body{margin:0;background:transparent}</style>${html}`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: pub(file), omitBackground: !!transparent });
  await page.close();
}
await browser.close();

// favicon.ico (PNG embebido, 32×32)
const png = readFileSync(pub('favicon-32.png'));
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr.writeUInt8(32, 6); hdr.writeUInt8(32, 7); hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12);
hdr.writeUInt32LE(png.length, 14); hdr.writeUInt32LE(22, 18);
writeFileSync(pub('favicon.ico'), Buffer.concat([hdr, png]));

writeFileSync(pub('site.webmanifest'), JSON.stringify({
  name: 'Rancherita · Blog de viajes 4×4', short_name: 'Rancherita', lang: 'es',
  icons: [{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }],
  theme_color: C.noche, background_color: C.noche, display: 'standalone', start_url: '.',
}, null, 2));
console.log('Kit de marca generado en public/');
