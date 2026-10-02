// Idiomas del sitio. El español vive en la raíz (/blog) y el alemán bajo /de
// (/de/blog). El alemán es el de Suiza: siempre «ss», nunca «ß».
import { url } from './config';

export const LANGS = ['es', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export const LOCALE: Record<Lang, string> = { es: 'es-ES', de: 'de-CH' };
export const OG_LOCALE: Record<Lang, string> = { es: 'es_ES', de: 'de_CH' };

/** Enlace interno en el idioma indicado: href('blog', 'de') → /de/blog */
export const href = (path: string, lang: Lang) =>
  url(lang === 'es' ? path : `de/${path.replace(/^\//, '')}`);

/** Idioma de una ruta (sin la base). */
export const langFromPath = (pathname: string): Lang => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return pathname.slice(base.length).replace(/^\//, '').split('/')[0] === 'de' ? 'de' : 'es';
};

/** La misma página en el otro idioma. */
export const switchPath = (pathname: string, to: Lang) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.slice(base.length).replace(/^\/(de(\/|$))?/, '');
  return href(rest, to);
};

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric' });

export const UI = {
  es: {
    langName: 'Español',
    siteSuffix: 'Blog de viajes 4×4',
    tagline: 'El arte de viajar lento, evitando la multitud y acercándose a lo auténtico, al origen.',
    description:
      'Blog de viajes de Rancherita, nuestra Toyota Hilux 4×4 con una cabina de más de 20 años preparada para vivir con autonomía. Pistas, naturaleza y encuentros con la gente del lugar: Marruecos, los Balcanes y Albania, Normandía, Bretaña, Suiza y Corsica.',
    skip: 'Saltar al contenido',
    menu: 'Menú',
    homeLabel: 'Rancherita, inicio',
    navMain: 'Principal',
    nav: { blog: 'Blog', destinos: 'Destinos', rancherita: 'Rancherita', nosotros: 'Nosotros' },
    switchLabel: 'Leer en alemán',
    footerLine: 'Viajamos despacio, por pistas, con la casa a cuestas.',
    footerNav: 'Pie de página',
    explore: 'Explorar',
    more: 'Más',
    camper: 'La autocaravana',
    brandKit: 'Kit de marca',
    madeWith: 'Hecho con polvo de pista',
    minRead: 'min de lectura',
    prev: '← Anterior',
    next: 'Siguiente →',
    moreEntries: 'Más entradas',
    keepReading: 'Sigue leyendo',
    entries: (n: number) => `${n} ${n === 1 ? 'entrada' : 'entradas'}`,
    extra: { rancherita: 'La autocaravana', filosofia: 'Cómo viajamos' } as Record<string, string>,
  },
  de: {
    langName: 'Deutsch',
    siteSuffix: '4×4-Reiseblog',
    tagline: 'Die Kunst, langsam zu reisen: abseits der Massen, nah am Echten, am Ursprung.',
    description:
      'Der Reiseblog von Rancherita, unserem Toyota Hilux 4×4 mit einer über 20 Jahre alten Wohnkabine, eingerichtet für ein autarkes Leben unterwegs. Pisten, Natur und Begegnungen mit den Menschen vor Ort: Marokko, der Balkan bis Albanien, die Normandie, die Bretagne, die Schweiz und Corsica.',
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    homeLabel: 'Rancherita, Startseite',
    navMain: 'Hauptnavigation',
    nav: { blog: 'Blog', destinos: 'Reiseziele', rancherita: 'Rancherita', nosotros: 'Über uns' },
    switchLabel: 'Auf Spanisch lesen',
    footerLine: 'Wir reisen langsam, auf Pisten, mit dem Zuhause im Gepäck.',
    footerNav: 'Fusszeile',
    explore: 'Entdecken',
    more: 'Mehr',
    camper: 'Das Wohnmobil',
    brandKit: 'Markenkit',
    madeWith: 'Gemacht mit Pistenstaub',
    minRead: 'Min. Lesezeit',
    prev: '← Älter',
    next: 'Neuer →',
    moreEntries: 'Weitere Beiträge',
    keepReading: 'Weiterlesen',
    entries: (n: number) => `${n} ${n === 1 ? 'Beitrag' : 'Beiträge'}`,
    extra: { rancherita: 'Das Wohnmobil', filosofia: 'Wie wir reisen' } as Record<string, string>,
  },
} as const;
