# Rancherita · Blog de viajes 4×4

Blog de viajes de **Rancherita**, nuestra Toyota Hilux 4×4 con cabina Tischer.
Hecho con [Astro](https://astro.build) y publicado automáticamente en GitHub Pages.

🌍 **Web:** https://rancherita.github.io/rancherita/

## Escribir una entrada nueva

1. Crea un archivo `.md` en `src/content/blog/`, por ejemplo `src/content/blog/merzouga.md`.
2. Copia esta cabecera y rellénala:

```md
---
title: 'Noches en el erg'
description: 'Una frase que resuma la entrada (sale en las tarjetas y en Google).'
date: 2026-10-01
destino: marruecos      # marruecos | balcanes | rancherita | filosofia
cover: dunas            # ilustración si no hay foto: dunas | atlas | balcanes | pista | noche | camper
image: /fotos/merzouga.jpg   # opcional: foto de portada (guárdala en public/fotos/)
imageAlt: 'Rancherita junto a las dunas al atardecer'
tags: [sahara, arena]
draft: false            # true = no se publica
---

Aquí va el texto, en Markdown. **Negritas**, listas, > citas, tablas…

![Descripción de la foto](/rancherita/fotos/otra-foto.jpg)
```

3. Guarda, haz commit y push a `main`. En 1–2 minutos la web se actualiza sola.

> Podéis hacerlo directamente desde github.com: botón **Add file → Create new file** dentro de `src/content/blog/`.
> Las fotos, con **Add file → Upload files** en `public/fotos/`. Reducidlas antes a ~2000 px de ancho.

## Añadir un destino nuevo

Edita `DESTINOS` en `src/config.ts` y añade el valor al `enum` de `destino` en `src/content.config.ts`.

## Redes sociales y contacto

Rellena `social` en `src/config.ts`. Los enlaces vacíos no se muestran.

## Kit de marca

- Página con el kit: `/marca`
- Icono de la autocaravana (fuente): `src/assets/brand/camper.svg`
- Colores: Noche `#0B120C`, Salvia `#CFE3AE`, Arena `#F4D59A`, Ocre `#E9A15F`, Texto `#EDE8DA`
- Tipografías: Michroma (rótulos), Outfit (titulares), Source Serif 4 (texto)
- Regenerar favicons, iconos, logos PNG e imagen para redes: `npm run brand`

## Desarrollo local

```sh
npm install
npm run dev      # http://localhost:4321/rancherita/
npm run build    # genera dist/
```

## Dominio propio

En *Settings → Secrets and variables → Actions → Variables* cread `SITE_URL` (p. ej. `https://rancherita.com`)
y `BASE_PATH` con valor `/`, y configurad el dominio en *Settings → Pages*.
