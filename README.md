# Rancherita · Blog de viajes 4×4

Blog de viajes de **Rancherita**, nuestra Toyota Hilux 4×4 con una cabina de más de 20 años preparada para vivir con autonomía.
Hecho con [Astro](https://astro.build) y publicado automáticamente en GitHub Pages.

🌍 **Web:** https://rancheritaontour.com

## Escribir una entrada nueva

1. Crea un archivo `.md` en `src/content/blog/es/`, por ejemplo `src/content/blog/es/merzouga.md`.
   Para la versión en alemán, crea otro con el **mismo nombre** en `src/content/blog/de/` (alemán de Suiza: siempre «ss», nunca «ß»).
2. Copia esta cabecera y rellénala:

```md
---
title: 'Noches en el erg'
description: 'Una frase que resuma la entrada (sale en las tarjetas y en Google).'
date: 2026-10-01
destino: marruecos      # marruecos | balcanes | normandia | bretana | suiza | corcega | rancherita | filosofia
cover: dunas            # ilustración si no hay foto: dunas | atlas | balcanes | pista | noche | camper
image: /fotos/merzouga.jpg   # opcional: foto de portada (guárdala en public/fotos/)
imageAlt: 'Rancherita junto a las dunas al atardecer'
imagePosition: 'center 70%'   # opcional: encuadre de la foto si se corta
tags: [sahara, arena]
draft: false            # true = no se publica
---

Aquí va el texto, en Markdown. **Negritas**, listas, > citas, tablas…

![Descripción de la foto](/fotos/otra-foto.jpg)
```

3. Guarda, haz commit y push a `main`. En 1–2 minutos la web se actualiza sola.

> Podéis hacerlo directamente desde github.com: botón **Add file → Create new file** dentro de `src/content/blog/es/` (o `de/`).
> Las fotos, con **Add file → Upload files** en `public/fotos/`. Reducidlas antes a ~2000 px de ancho.

## Añadir un destino nuevo

Edita `DESTINOS` en `src/config.ts` (con sus textos en `es` y `de`) y añade el valor al `enum` de `destino` en `src/content.config.ts`.

## Idiomas

El español está en la raíz (`/blog`) y el alemán de Suiza bajo `/de` (`/de/blog`).

- Textos comunes (menú, pie, lema…): `src/i18n.ts`.
- Textos de cada página: arriba del todo de cada archivo en `src/views/`, en dos bloques `es` y `de`.
- Entradas del blog: `src/content/blog/es/` y `src/content/blog/de/`, con el mismo nombre de archivo.

## Redes sociales y contacto

Rellena `social` en `src/config.ts`. Los enlaces vacíos no se muestran.

## Kit de marca

- Página con el kit: `/marca`
- Logotipo original (fuente, vectorizado del paquete de Smashing Logo): `src/assets/brand/logo.svg`
- Logotipo tipográfico: `src/assets/brand/texto.svg` · Icono de la autocaravana: `src/assets/brand/camper.svg`
- Colores: Noche `#0B120C`, Salvia `#CFE3AE`, Arena `#F4D59A`, Ocre `#E9A15F`, Texto `#EDE8DA`
- Tipografías: Michroma (rótulos), Outfit (titulares), Source Serif 4 (texto)
- Regenerar favicons, iconos, logos PNG e imagen para redes: `npm run brand`

## Desarrollo local

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # genera dist/
```

## Dominio

El sitio se publica en **https://rancheritaontour.com**. La configuración vive en dos sitios:

- `astro.config.mjs`: `site` (el dominio) y `base` (`/`, porque servimos en la raíz).
- `public/CNAME`: el dominio, para que GitHub Pages lo conserve en cada despliegue.

Si algún día cambiáis de dominio, tocad esos dos archivos (o definid las variables
`SITE_URL` y `BASE_PATH` en *Settings → Secrets and variables → Actions → Variables*,
que tienen prioridad) y actualizad *Settings → Pages*.
