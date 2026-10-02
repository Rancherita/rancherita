import { getCollection, type CollectionEntry } from 'astro:content';
import { DESTINOS } from '../config';
import { UI, type Lang } from '../i18n';

// Las entradas viven en src/content/blog/<idioma>/<slug>.md. La misma entrada
// en los dos idiomas comparte el nombre de archivo (slug).
export type Post = CollectionEntry<'blog'>;

export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const posts = await getCollection('blog', (p) => p.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !p.data.draft));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readingTime = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));

export const destinoLabel = (id: string, lang: Lang) =>
  id in DESTINOS ? DESTINOS[id as keyof typeof DESTINOS][lang].nombre : (UI[lang].extra[id] ?? id);
