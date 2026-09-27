import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${SITE.title} · Blog de viajes 4×4`,
    description: SITE.description,
    site: context.site + base.replace(/^\//, ''),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/blog/${p.id}/`,
    })),
    customData: '<language>es-es</language>',
  });
}
