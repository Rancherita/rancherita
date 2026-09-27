import { getCollection } from 'astro:content';
import { DESTINOS } from '../config';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readingTime = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

const EXTRA: Record<string, string> = { rancherita: 'La autocaravana', filosofia: 'Cómo viajamos' };
export const destinoLabel = (id: string) => (DESTINOS as Record<string, { nombre: string }>)[id]?.nombre ?? EXTRA[id] ?? id;
