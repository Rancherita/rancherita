import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    destino: z.enum(['marruecos', 'balcanes', 'rancherita', 'filosofia']),
    // Ilustración de portada de la marca (mientras no haya foto)
    cover: z.enum(['dunas', 'atlas', 'balcanes', 'pista', 'noche', 'camper']).default('pista'),
    // Foto de portada opcional: ruta dentro de /public, p. ej. /fotos/merzouga.jpg
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
