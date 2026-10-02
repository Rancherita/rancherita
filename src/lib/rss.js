import rss from '@astrojs/rss';
import { SITE } from '../config';
import { UI, href } from '../i18n';
import { getPosts, postSlug } from './posts';

/** Feed RSS de un idioma: /rss.xml (es) y /de/rss.xml (de). */
export async function feed(context, lang) {
  const posts = await getPosts(lang);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${SITE.title} · ${UI[lang].siteSuffix}`,
    description: UI[lang].description,
    site: context.site + base.replace(/^\//, ''),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${href(`blog/${postSlug(p)}`, lang)}/`,
    })),
    customData: `<language>${lang === 'de' ? 'de-ch' : 'es-es'}</language>`,
  });
}
